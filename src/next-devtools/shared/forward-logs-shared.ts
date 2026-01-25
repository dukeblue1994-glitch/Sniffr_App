/**
 * Methods of the `console` object that we intend to intercept and process.
 * This list centralizes the configuration of which console methods are relevant
 * for DevTools logging.
 */
export const LOG_METHODS = [
  "log",
  "info",
  "warn",
  "error",
  "debug",
  "table",
  "trace",
  "dir",
  "dirxml",
  "group",
  "groupCollapsed",
  "groupEnd",
  "assert",
] as const; // `as const` ensures a literal union type.

/**
 * Represents a valid console method name.
 */
export type LogMethod = (typeof LOG_METHODS)[number];

/**
 * A special marker string used to represent `undefined` values when they are
 * serialized, especially when `JSON.stringify` might drop them.
 */
export const UNDEFINED_MARKER = "__next_tagged_undefined";

/**
 * Defines the structure for a generic console log entry.
 * This type is used to standardize how log messages are captured and transmitted.
 * @template T - The type of data contained within the log entry's arguments.
 */
export type ConsoleEntry<T> = {
  /**
   * Identifies the kind of entry, typically 'console' for standard logs.
   */
  kind: "console";
  /**
   * The original `console` method that was called (e.g., 'log', 'error').
   */
  method: LogMethod;
  /**
   * A string representation of the call stack where the console method was invoked.
   * Can be `null` if stack information is unavailable.
   */
  consoleMethodStack: string | null;
  /**
   * An array of arguments passed to the console method. Each argument is typed
   * to indicate whether it's a standard argument or a specially formatted error.
   */
  args: Array<
    | {
        /** Indicates a standard argument. */
        kind: "arg";
        /** The data of the argument. */
        data: T;
      }
    | {
        /** Indicates a formatted error argument, providing prefix and stack. */
        kind: "formatted-error-arg";
        /** A prefix for the error message. */
        prefix: string;
        /** The stack trace of the formatted error. */
        stack: string;
      }
  >;
};

/**
 * Defines the structure for a console error entry, specialized for errors.
 * This type captures error-specific details like the error stack.
 * @template T - The type of data contained within the error entry's arguments.
 */
export type ConsoleErrorEntry<T> = {
  /** Identifies the kind of entry as 'any-logged-error'. */
  kind: "any-logged-error";
  /** Always 'error' for this entry type. */
  method: "error";
  /** The call stack associated with the console error. */
  consoleErrorStack: string;
  /** Arguments passed to console.error, may include rejection flag. */
  args: Array<
    | {
        kind: "arg";
        data: T;
        isRejectionMessage?: boolean;
      }
    | {
        kind: "formatted-error-arg";
        prefix: string;
        stack: string | null;
      }
  >;
};

/**
 * Defines the structure for a pre-formatted error entry.
 * This is used for errors that are already structured for display.
 */
export type FormattedErrorEntry = {
  kind: "formatted-error";
  prefix: string;
  stack: string;
  method: "error";
};

/**
 * Represents a log entry originating from the client-side (browser).
 * Client-side logs can contain any serializable JavaScript value.
 */
export type ClientLogEntry =
  | ConsoleEntry<unknown>
  | ConsoleErrorEntry<unknown>
  | FormattedErrorEntry;

/**
 * Represents a log entry originating from the server-side (Node.js).
 * Server-side logs are commonly serialized to strings.
 */
export type ServerLogEntry =
  | ConsoleEntry<string>
  | ConsoleErrorEntry<string>
  | FormattedErrorEntry;

/**
 * Safely defines a property on an object, catching any potential errors.
 * Returns `true` if the property was defined successfully, `false` otherwise.
 */
function safeDefineProperty<T extends object, K extends PropertyKey>(
  obj: T,
  key: K,
  desc: PropertyDescriptor,
): boolean {
  try {
    Object.defineProperty(obj, key, desc);
    return true;
  } catch {
    // Suppress errors during defineProperty, often due to non-configurable properties.
    return false;
  }
}

/**
 * Patches a specific `console` method to intercept its calls.
 * The `wrapper` function will be invoked before the original console method.
 * This implementation is resilient: the original method will still execute
 * even if the `wrapper` throws an error.
 */
export function patchConsoleMethod<T extends LogMethod>(
  obj: Console,
  methodName: T,
  wrapper: (methodName: T, ...args: unknown[]) => void,
): () => void {
  const descriptor = Object.getOwnPropertyDescriptor(obj, methodName);
  const originalMethod = descriptor?.value;

  // Only patch function-valued properties to avoid unexpected behavior.
  if (typeof originalMethod !== "function") {
    // Return a no-op disposer if the property is not a function or doesn't exist.
    return () => {};
  }

  // Preserve the original method's name if possible for better debugging.
  const originalNameDescriptor = Object.getOwnPropertyDescriptor(
    originalMethod,
    "name",
  );

  const wrapperMethod = function (this: typeof console, ...args: unknown[]) {
    // Execute the wrapper function.
    // Use a try-catch block to ensure the original method always runs,
    // even if the wrapper logic itself throws an error.
    try {
      wrapper(methodName, ...args);
    } catch (err) {
      // Log wrapper errors using the original method to avoid recursion.
      try {
        (originalMethod as Function).call(
          this,
          `[DevTools Console Wrapper Error for ${String(methodName)}]`,
          err instanceof Error ? err.message : String(err),
        );
      } catch {
        // Suppress any further errors to prevent infinite loops.
      }
    }

    // Always call the original console method.
    try {
      return (originalMethod as Function).apply(this, args);
    } catch (err) {
      // Log errors that occur within the original console method itself.
      try {
        (originalMethod as Function).call(
          this,
          `[DevTools Original Console Method Error for ${String(methodName)}]`,
          err instanceof Error ? err.message : String(err),
        );
      } catch {
        // Suppress any further errors.
      }
      return undefined;
    }
  };

  // If the original method had a name, try to set it on the wrapper for better stack traces.
  if (originalNameDescriptor) {
    Object.defineProperty(wrapperMethod, "name", originalNameDescriptor);
  }

  // Attempt to define the new wrapper method on the console object.
  const patchSuccessful = safeDefineProperty(obj, methodName, {
    configurable: descriptor?.configurable ?? true,
    enumerable: descriptor?.enumerable ?? true,
    writable: descriptor?.writable ?? true,
    value: wrapperMethod,
  });

  // Return a disposer function to revert the patch.
  return () => {
    // Check if the current method is still our patched method before restoring.
    const currentMethod = Object.getOwnPropertyDescriptor(
      obj,
      methodName,
    )?.value;
    const isStillPatchedByUs = currentMethod === wrapperMethod;

    if (isStillPatchedByUs) {
      // Attempt to restore the original descriptor, or sensible defaults.
      const restoreDescriptor = descriptor ?? {
        configurable: true,
        enumerable: true,
        writable: true,
        value: originalMethod,
      };
      safeDefineProperty(obj, methodName, restoreDescriptor);
    }
  };
}

/**
 * Patches multiple console methods simultaneously.
 */
export function patchConsoleMethods(
  obj: Console,
  methods: ReadonlyArray<LogMethod>,
  wrapper: (method: LogMethod, ...args: unknown[]) => void,
): Array<() => void> {
  return methods.map((m) => patchConsoleMethod(obj, m, wrapper));
}

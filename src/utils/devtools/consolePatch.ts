/**
 * Methods we want to intercept. Update here to centralize config.
 */
export const LOG_METHODS = [
  "log",
  "info",
  "warn",
  "error",
  "debug",
  "table",
  "trace",
] as const;

export type LogMethod = (typeof LOG_METHODS)[number];

export const UNDEFINED_MARKER = "[[undefined]]";

/**
 * Base console entry shape.
 * @template T - the payload type (e.g., message array or formatted error)
 */
export interface ConsoleEntry<T = unknown> {
  method: LogMethod;
  timestamp: number;
  payload: T;
  source: "client" | "server";
}

/**
 * Console error entry.
 * @template T - the error payload type (e.g., Error | FormattedErrorEntry)
 */
export interface ConsoleErrorEntry<T = unknown> extends ConsoleEntry<T> {
  stack?: string;
}

/**
 * Structured error format for DevTools presentation.
 */
export interface FormattedErrorEntry {
  message: string;
  name?: string;
  stack?: string;
  cause?: unknown;
}

/**
 * Client-side log entry (browser console). Payload is a tuple of arguments.
 */
export type ClientLogEntry = ConsoleEntry<unknown[]>;

/**
 * Server-side log entry (Node.js console). Payload is a string array or mixed args.
 */
export type ServerLogEntry = ConsoleEntry<unknown[]>;

/**
 * Patch a console method, invoking a wrapper before the original call.
 * Guarantees the original method still executes even if the wrapper throws.
 *
 * @param obj - The console-like object (usually `console`).
 * @param method - The console method to patch.
 * @param wrapper - Function invoked before the original console call.
 *                  If this throws, the original method will still run.
 * @returns dispose - Call to restore the original descriptor if possible.
 */
export function patchConsoleMethod(
  obj: Console,
  method: LogMethod,
  wrapper: (method: LogMethod, ...args: unknown[]) => void,
): () => void {
  const descriptor = Object.getOwnPropertyDescriptor(obj, method);
  const originalMethod = descriptor?.value;

  // Only patch function-valued properties to avoid surprising behavior.
  if (typeof originalMethod !== "function") {
    // No-op disposer for non-function properties
    return () => {};
  }

  // Create the patched function
  const patched = function (this: unknown, ...args: unknown[]) {
    // Try wrapper first, but never block the original logging
    try {
      wrapper(method, ...args);
    } catch (err) {
      // If wrapper fails, log a minimal diagnostic and keep going
      try {
        (originalMethod as Function).call(
          this,
          "[DevTools wrapper error]",
          err instanceof Error ? err.message : err,
        );
      } catch {
        // Swallow; avoid infinite error loops in consoles
      }
    }

    // Always execute original method
    try {
      return (originalMethod as Function).apply(this, args as []);
    } catch (err) {
      // If original throws, surface a diagnostic (best-effort)
      try {
        (originalMethod as Function).call(
          this,
          "[DevTools original method error]",
          err instanceof Error ? err.message : err,
        );
      } catch {
        // Swallow to avoid recursive failures
      }
      return;
    }
  };

  // Patch via defineProperty to preserve enumerability/writable/configurable flags where possible
  const success = safeDefineProperty(obj, method, {
    configurable: descriptor?.configurable ?? true,
    enumerable: descriptor?.enumerable ?? true,
    writable: descriptor?.writable ?? true,
    value: patched,
  });

  if (!success) {
    // Fallback: direct assignment (less safe in some environments)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (obj as any)[method] = patched;
  }

  // Return disposer to restore the original
  return () => {
    // If another patch occurred in-between, avoid clobbering it
    const current = Object.getOwnPropertyDescriptor(obj, method)?.value;
    const isStillPatched = current === patched;

    if (isStillPatched) {
      const restored = safeDefineProperty(
        obj,
        method,
        descriptor ?? {
          configurable: true,
          enumerable: true,
          writable: true,
          value: originalMethod,
        },
      );
      if (!restored) {
        // Fallback: direct assignment restore
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (obj as any)[method] = originalMethod;
      }
    }
  };
}

/**
 * Safe defineProperty that returns boolean instead of throwing.
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
    return false;
  }
}

/**
 * Patch multiple methods at once and get disposers.
 */
export function patchConsoleMethods(
  obj: Console,
  methods: ReadonlyArray<LogMethod>,
  wrapper: (method: LogMethod, ...args: unknown[]) => void,
): Array<() => void> {
  return methods.map((m) => patchConsoleMethod(obj, m, wrapper));
}

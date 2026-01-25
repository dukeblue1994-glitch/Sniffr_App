"use client";
import { useEffect } from "react";
import {
  LOG_METHODS,
  UNDEFINED_MARKER,
  patchConsoleMethods,
  type LogMethod,
  type ConsoleEntry,
} from "@/next-devtools/shared/forward-logs-shared";

/**
 * Applies console patching in development to forward structured logs.
 * Disposes automatically on unmount.
 */
export function useConsolePatch() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const disposers = patchConsoleMethods(
      console,
      LOG_METHODS,
      (method, ...args) => {
        const entry: ConsoleEntry<unknown> = {
          kind: "console",
          method,
          consoleMethodStack: null,
          args: args.map((a) => ({
            kind: "arg",
            data: a === undefined ? UNDEFINED_MARKER : a,
          })),
        };

        // Forward to DevTools WebSocket server if available
        try {
          const url = `ws://localhost:${Number(process.env.NEXT_PUBLIC_WS_PORT || 3300)}`;
          const ws = getOrCreateDevtoolsSocket(url);
          if (ws?.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ kind: "devtools-log", entry }));
          }
        } catch {
          // Fallback example: postMessage (optional)
          // window.postMessage({ kind: "devtools-log", entry }, "*");
        }
      },
    );

    return () => {
      disposers.forEach((dispose) => dispose());
    };
  }, []);
}

let _ws: WebSocket | null = null;
function getOrCreateDevtoolsSocket(url: string): WebSocket | null {
  if (typeof window === "undefined") return null;
  if (
    _ws &&
    (_ws.readyState === WebSocket.OPEN ||
      _ws.readyState === WebSocket.CONNECTING)
  ) {
    return _ws;
  }
  try {
    _ws = new WebSocket(url);
    _ws.addEventListener("open", () => {
      // Handshake message for subscribers to distinguish sources
      _ws?.send(
        JSON.stringify({ kind: "handshake", source: "client", ts: Date.now() }),
      );
    });
    _ws.addEventListener("error", () => {
      // noop: dev-only socket errors are expected when server is not running
    });
    _ws.addEventListener("close", () => {
      // allow recreation on next call
      _ws = null;
    });
    return _ws;
  } catch {
    return null;
  }
}

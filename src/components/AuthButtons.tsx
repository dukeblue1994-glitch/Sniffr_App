"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2 p-2">
      {session ? (
        <>
          <span className="text-xs text-gray-500">
            Signed in as {session.user?.email}
          </span>
          <button
            onClick={() => signOut()}
            className="px-3 py-1 rounded bg-gray-200 text-sm"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn("google")}
            className="px-3 py-1 rounded bg-[#2E86AB] text-white text-sm"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("apple")}
            className="px-3 py-1 rounded bg-black text-white text-sm"
          >
            Sign in with Apple
          </button>
        </>
      )}
    </div>
  );
}

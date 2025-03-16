"use client";
import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button
      onClick={() => signIn(undefined, { redirectTo: "/dashboard" })}
      className="btn btn-accent"
    >
      Get Started
    </button>
  );
}

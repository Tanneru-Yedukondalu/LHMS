"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/"
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 rounded border p-6 shadow"
      >
        <h1 className="mb-4 text-xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-full rounded border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-3 w-full rounded border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full rounded bg-blue-600 p-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
}

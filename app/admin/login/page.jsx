"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await signIn(email, password);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="p-6 border rounded-lg shadow-md w-80 bg-white"
      >
        <h2 className="text-xl mb-4 font-bold text-center">Admin Login</h2>

        <input
          type="email"
          className="border p-2 w-full mb-3"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMsg && (
          <p className="text-red-500 text-sm mb-3">{errorMsg}</p>
        )}

        <button
          type="submit"
          className="bg-black text-white p-2 w-full rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

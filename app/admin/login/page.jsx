"use client";

import { useState } from "react";
import { login, isLoggedIn } from "../../../lib/auth";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  // If already logged in → redirect to dashboard
  if (isLoggedIn()) {
    router.push("/admin/dashboard");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const success = login(email, password);

    if (success) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 shadow rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        {error && (
          <div className="mb-4 text-red-600 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border px-3 py-2 rounded"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border px-3 py-2 rounded"
              placeholder="admin123"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

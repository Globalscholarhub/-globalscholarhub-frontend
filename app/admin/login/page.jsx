"use client";

export default function AdminLogin() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}

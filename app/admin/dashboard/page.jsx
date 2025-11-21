"use client";

import { isLoggedIn, logout } from "../../../lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Total Scholarships</h2>
          <p className="text-4xl font-bold text-blue-600">128</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Countries Listed</h2>
          <p className="text-4xl font-bold text-blue-600">42</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Pending Reviews</h2>
          <p className="text-4xl font-bold text-blue-600">9</p>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4">
        <a
          href="/admin/scholarships/add"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          ➕ Add Scholarship
        </a>

        <button
          onClick={() => {
            logout();
            router.push("/admin/login");
          }}
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/admin/login");
      } else {
        setUserEmail(session.user.email);
      }
    };

    loadSession();
  }, []);

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Logged in as <b>{userEmail}</b></p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Total Scholarships</h3>
          <p className="text-4xl font-bold text-blue-600">128</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Countries Listed</h3>
          <p className="text-4xl font-bold text-blue-600">42</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Pending Reviews</h3>
          <p className="text-4xl font-bold text-blue-600">9</p>
        </div>

      </div>

      {/* Quick Actions */}
      <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <a
          href="/admin/scholarships/add"
          className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700 transition block text-center"
        >
          ➕ Add Scholarship
        </a>

        <a
          href="/admin/countries/add"
          className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700 transition block text-center"
        >
          🌍 Add Country
        </a>

        <a
          href="/admin/scholarships"
          className="bg-purple-600 text-white p-6 rounded-xl shadow hover:bg-purple-700 transition block text-center"
        >
          📚 Manage Scholarships
        </a>

      </div>

    </div>
  );
}

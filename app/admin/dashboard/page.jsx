"use client";

export default function AdminDashboard() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-xl shadow-sm bg-white border">
          <h2 className="font-semibold text-xl mb-2">Total Scholarships</h2>
          <p>Coming soon</p>
        </div>

        <div className="p-6 rounded-xl shadow-sm bg-white border">
          <h2 className="font-semibold text-xl mb-2">Countries</h2>
          <p>Coming soon</p>
        </div>
      </div>
    </div>
  );
}

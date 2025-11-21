import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div style={{ padding: "40px" }}>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user?.email}</p>
    </div>
  );
}

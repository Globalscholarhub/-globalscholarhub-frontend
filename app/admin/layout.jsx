export const metadata = {
  title: "Admin Panel",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white shadow">
            <div className="px-6 py-4 text-2xl font-bold border-b">
              Admin Panel
            </div>

            <nav className="p-4 space-y-3">
              <a href="/admin/dashboard" className="block text-lg text-blue-600">
                Dashboard
              </a>

              <a href="/admin/login" className="block text-lg text-blue-600">
                Logout
              </a>
            </nav>
          </aside>

          <main className="flex-1 p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

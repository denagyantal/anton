import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard – QuoteCraft",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back, {session.user.email}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-sm font-medium text-gray-500">Total Quotes</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-sm font-medium text-gray-500">Pending</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-sm font-medium text-gray-500">Signed</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">
            Dashboard functionality coming in Epic 2. Start by{" "}
            <a href="/profile" className="text-blue-600 hover:underline">
              completing your profile
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

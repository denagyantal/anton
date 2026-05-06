import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { QuoteDashboard } from "@/components/dashboard/quote-dashboard";

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
      <div className="mx-auto max-w-2xl px-4 py-8">
        <QuoteDashboard />
      </div>
    </main>
  );
}

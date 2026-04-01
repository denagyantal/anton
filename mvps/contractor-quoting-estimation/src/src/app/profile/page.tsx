import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/profile/profile-form";

export const metadata = {
  title: "Profile – QuoteCraft",
};

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Business Profile</h1>
          <p className="mt-1 text-sm text-gray-500">
            Your profile information appears on all quotes you send.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <ProfileForm />
        </div>
      </div>
    </main>
  );
}

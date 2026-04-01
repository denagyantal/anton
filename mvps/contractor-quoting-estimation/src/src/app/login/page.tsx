import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";

export const metadata = {
  title: "Sign in – QuoteCraft",
};

function LoginPageContent() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <LoginForm />
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" /></div>}>
      <LoginPageContent />
    </Suspense>
  );
}

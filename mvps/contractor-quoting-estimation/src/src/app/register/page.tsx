import { RegisterForm } from "@/components/auth/register-form";

export const metadata = {
  title: "Create account – QuoteCraft",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <RegisterForm />
    </main>
  );
}

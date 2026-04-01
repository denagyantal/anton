"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  resetPasswordSchema,
  type ResetPasswordInput,
} from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { token },
  });

  async function onSubmit(data: ResetPasswordInput) {
    setServerError(null);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(json.error ?? "Failed to reset password.");
        return;
      }

      router.push("/login?reset=1");
    } catch {
      setServerError("An unexpected error occurred. Please try again.");
    }
  }

  if (!token) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-xl font-bold text-gray-900">Invalid reset link</h1>
        <p className="mt-2 text-sm text-gray-500">
          This reset link is invalid or has expired.
        </p>
        <Link
          href="/forgot-password"
          className="mt-4 inline-block text-sm text-blue-600 hover:underline"
        >
          Request a new reset link
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reset password</h1>
        <p className="mt-1 text-sm text-gray-500">
          Enter your new password below.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="mb-4 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700"
        >
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <input type="hidden" {...register("token")} />

        <Input
          label="New password"
          type="password"
          autoComplete="new-password"
          required
          hint="At least 8 characters"
          error={errors.password?.message}
          {...register("password")}
        />

        <Input
          label="Confirm new password"
          type="password"
          autoComplete="new-password"
          required
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Reset password
        </Button>
      </form>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <Suspense fallback={<div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />}>
        <ResetPasswordForm />
      </Suspense>
    </main>
  );
}

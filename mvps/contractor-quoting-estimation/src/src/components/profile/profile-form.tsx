"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileInput } from "@/lib/validations/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogoUpload } from "./logo-upload";
import { useProfile } from "@/hooks/use-profile";

const TRADES = [
  { value: "PLUMBING", label: "Plumbing" },
  { value: "ELECTRICAL", label: "Electrical" },
  { value: "HVAC", label: "HVAC" },
  { value: "PAINTING", label: "Painting" },
] as const;

export function ProfileForm() {
  const { profile, isLoading, mutate } = useProfile();
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      phone: "",
      email: "",
      licenseNumber: "",
      logoUrl: "",
      defaultTaxRate: 0 as number,
      paymentTerms: "",
      brandColor: "#2563EB",
      trade: "PLUMBING" as ProfileInput["trade"],
    },
  });

  // Populate form when profile loads
  useEffect(() => {
    if (profile) {
      reset({
        businessName: profile.businessName,
        contactName: profile.contactName ?? "",
        phone: profile.phone ?? "",
        email: profile.email ?? "",
        licenseNumber: profile.licenseNumber ?? "",
        logoUrl: profile.logoUrl ?? "",
        defaultTaxRate: profile.defaultTaxRate,
        paymentTerms: profile.paymentTerms ?? "",
        brandColor: profile.brandColor,
        trade: profile.trade as ProfileInput["trade"],
      });
    }
  }, [profile, reset]);

  async function onSubmit(data: ProfileInput) {
    setServerError(null);
    setSuccessMessage(null);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(json.error ?? "Failed to save profile. Please try again.");
        return;
      }

      setSuccessMessage("Profile saved successfully!");
      await mutate();
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch {
      setServerError("An unexpected error occurred. Please try again.");
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {serverError && (
        <div
          role="alert"
          className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700"
        >
          {serverError}
        </div>
      )}

      {successMessage && (
        <div
          role="status"
          className="rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-700"
        >
          {successMessage}
        </div>
      )}

      {/* Logo */}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Business Logo</p>
        <Controller
          name="logoUrl"
          control={control}
          render={({ field }) => (
            <LogoUpload
              currentLogoUrl={field.value ?? null}
              onUploadComplete={(url) => {
                field.onChange(url);
                setValue("logoUrl", url, { shouldDirty: true });
              }}
              onUploadError={(err) => setServerError(err)}
            />
          )}
        />
      </div>

      {/* Business info */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Business name"
          required
          error={errors.businessName?.message}
          {...register("businessName")}
        />
        <Input
          label="Contact name"
          error={errors.contactName?.message}
          {...register("contactName")}
        />
        <Input
          label="Phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Input
          label="Business email"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="License number"
          error={errors.licenseNumber?.message}
          {...register("licenseNumber")}
        />
        <div className="flex flex-col gap-1">
          <label htmlFor="trade" className="text-sm font-medium text-gray-700">
            Trade
          </label>
          <select
            id="trade"
            className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("trade")}
          >
            {TRADES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          {errors.trade && (
            <p className="text-sm text-red-600">{errors.trade.message}</p>
          )}
        </div>
      </div>

      {/* Quote defaults */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Default tax rate (%)"
          type="number"
          min="0"
          max="100"
          step="0.01"
          hint="Applied to new quotes by default"
          error={errors.defaultTaxRate?.message}
          {...register("defaultTaxRate", { valueAsNumber: true })}
        />
        <div className="flex flex-col gap-1">
          <label
            htmlFor="brandColor"
            className="text-sm font-medium text-gray-700"
          >
            Brand color
          </label>
          <div className="flex items-center gap-2">
            <input
              id="brandColor"
              type="color"
              className="h-10 w-14 cursor-pointer rounded border border-gray-300 p-1"
              {...register("brandColor")}
            />
            <Input
              className="flex-1"
              placeholder="#2563EB"
              error={errors.brandColor?.message}
              {...register("brandColor")}
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="paymentTerms"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Payment terms
        </label>
        <textarea
          id="paymentTerms"
          rows={3}
          placeholder="e.g. 50% deposit required. Balance due upon completion."
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          {...register("paymentTerms")}
        />
        {errors.paymentTerms && (
          <p className="text-sm text-red-600">{errors.paymentTerms.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting || !isDirty}
        >
          Save profile
        </Button>
      </div>
    </form>
  );
}

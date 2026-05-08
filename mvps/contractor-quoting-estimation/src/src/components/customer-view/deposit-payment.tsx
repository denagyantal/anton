"use client";

import { useState } from "react";

interface DepositPaymentProps {
  token: string;
  depositDisplay: string;
}

export function DepositPayment({ token, depositDisplay }: DepositPaymentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayDeposit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/quotes/view/${token}/pay`, {
        method: "POST",
      });
      if (!res.ok) {
        const body = await res.json();
        setError(body.error?.message ?? "Failed to start payment. Please try again.");
        return;
      }
      const body = await res.json();
      if (body.data?.checkoutUrl) {
        window.location.href = body.data.checkoutUrl;
      } else {
        setError("Payment URL not received. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handlePayDeposit}
        disabled={isLoading}
        className="w-full min-h-[44px] bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold text-base hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50"
      >
        {isLoading ? "Starting payment..." : `Pay Deposit — ${depositDisplay}`}
      </button>
      {error && (
        <p className="text-red-600 text-sm text-center" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

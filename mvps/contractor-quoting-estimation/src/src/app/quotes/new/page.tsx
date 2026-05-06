"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TradeSelector } from "@/components/quotes/trade-selector";

export default function NewQuotePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleTradeSelect(trade: string) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trade }),
      });

      if (!res.ok) {
        const body = await res.json();
        setError(body.error ?? "Failed to create quote.");
        return;
      }

      const body = await res.json();
      router.push(`/quotes/${body.data.id}`);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">New Quote</h1>
        <p className="text-sm text-gray-500 mt-1">
          Select your trade to get started.
        </p>
      </div>

      <TradeSelector onSelect={handleTradeSelect} isLoading={isLoading} />

      {error && (
        <p className="mt-4 text-sm text-red-600 text-center">{error}</p>
      )}
    </main>
  );
}

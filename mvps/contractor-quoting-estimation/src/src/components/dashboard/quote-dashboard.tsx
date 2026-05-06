"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuotes } from "@/hooks/use-quotes";
import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import type { QuoteStatus, Trade } from "@/types";

interface QuoteRow {
  id: string;
  quoteNumber: string;
  customerName: string;
  trade: Trade;
  status: QuoteStatus;
  updatedAt: string;
}

const TRADE_LABELS: Record<Trade, string> = {
  PLUMBING: "Plumbing",
  ELECTRICAL: "Electrical",
  HVAC: "HVAC",
  PAINTING: "Painting",
};

export function QuoteDashboard() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const { data, isLoading } = useQuotes({ search: debouncedSearch });
  const quotes: QuoteRow[] = (data as { data: QuoteRow[] } | undefined)?.data ?? [];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">My Quotes</h1>
        <Link
          href="/quotes/new"
          className="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors h-10 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700 min-h-[44px]"
        >
          New Quote
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Input
          placeholder="Search by customer name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-10"
        />
        {search && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ×
          </button>
        )}
      </div>

      {/* Quote List */}
      {isLoading ? (
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-lg" />
          ))}
        </div>
      ) : quotes.length === 0 ? (
        debouncedSearch ? (
          <p className="text-center text-sm text-gray-500 py-8">
            No quotes matching &ldquo;{debouncedSearch}&rdquo;
          </p>
        ) : (
          <div className="text-center py-12 flex flex-col items-center gap-4">
            <p className="text-gray-500">No quotes yet. Create your first quote!</p>
            <Link
              href="/quotes/new"
              className="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors h-10 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700 min-h-[44px]"
            >
              Create Quote
            </Link>
          </div>
        )
      ) : (
        <div className="flex flex-col gap-2">
          {quotes.map((quote) => (
            <Link
              key={quote.id}
              href={`/quotes/${quote.id}`}
              className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 min-h-[44px] hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    {quote.quoteNumber}
                  </span>
                  <span className="shrink-0 text-xs bg-gray-100 text-gray-600 rounded px-1.5 py-0.5">
                    {TRADE_LABELS[quote.trade] ?? quote.trade}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {quote.customerName || "—"}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-gray-700">{quote.status}</p>
                <p className="text-xs text-gray-400">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date(quote.updatedAt))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

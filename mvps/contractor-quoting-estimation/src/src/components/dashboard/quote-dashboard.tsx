"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useQuotes } from "@/hooks/use-quotes";
import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { QuoteStatus, Trade } from "@/types";

interface QuoteRow {
  id: string;
  quoteNumber: string;
  customerName: string;
  trade: Trade;
  status: QuoteStatus;
  updatedAt: string;
  total: number;
}

const TRADE_LABELS: Record<Trade, string> = {
  PLUMBING: "Plumbing",
  ELECTRICAL: "Electrical",
  HVAC: "HVAC",
  PAINTING: "Painting",
};

function QuoteCard({ quote }: { quote: QuoteRow }) {
  return (
    <Link
      href={`/quotes/${quote.id}`}
      className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 min-h-[44px] hover:bg-gray-50 transition-colors"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-900 truncate">
            {quote.quoteNumber}
          </span>
          <span className="shrink-0 text-xs bg-gray-100 text-gray-600 rounded px-1.5 py-0.5">
            {TRADE_LABELS[quote.trade] ?? quote.trade}
          </span>
          <StatusBadge status={quote.status} />
        </div>
        <p className="text-sm text-gray-600 truncate mt-0.5">
          {quote.customerName || "—"}
        </p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-semibold text-gray-900">
          {formatCurrency(quote.total)}
        </p>
        <p className="text-xs text-gray-400">{formatDate(quote.updatedAt)}</p>
      </div>
    </Link>
  );
}

export function QuoteDashboard() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [trade, setTrade] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  const { data, isLoading } = useQuotes({
    search: debouncedSearch,
    trade,
    dateFrom,
    dateTo,
  });
  const quotes: QuoteRow[] =
    (data as { data: QuoteRow[] } | undefined)?.data ?? [];

  const listContainerRef = useRef<HTMLDivElement>(null);
  const shouldVirtualize = quotes.length > 100;
  const rowVirtualizer = useVirtualizer({
    count: quotes.length,
    getScrollElement: () =>
      shouldVirtualize ? listContainerRef.current : null,
    estimateSize: () => 76,
    overscan: 8,
  });

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

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          aria-label="Filter by trade"
          value={trade}
          onChange={(e) => setTrade(e.target.value)}
          className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All trades</option>
          <option value="PLUMBING">Plumbing</option>
          <option value="ELECTRICAL">Electrical</option>
          <option value="HVAC">HVAC</option>
          <option value="PAINTING">Painting</option>
        </select>

        <input
          type="date"
          aria-label="From date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          aria-label="To date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {(trade || dateFrom || dateTo) && (
          <button
            type="button"
            onClick={() => { setTrade(""); setDateFrom(""); setDateTo(""); }}
            className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-500 hover:text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Clear filters
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
        debouncedSearch || trade || dateFrom || dateTo ? (
          <p className="text-center text-sm text-gray-500 py-8">
            No quotes match the selected filters.
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
      ) : shouldVirtualize ? (
        <div
          ref={listContainerRef}
          className="overflow-y-auto rounded-lg border border-gray-200"
          style={{ height: "calc(100vh - 280px)", minHeight: "300px" }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const quote = quotes[virtualRow.index];
              return (
                <div
                  key={virtualRow.key}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <QuoteCard quote={quote} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      )}
    </div>
  );
}

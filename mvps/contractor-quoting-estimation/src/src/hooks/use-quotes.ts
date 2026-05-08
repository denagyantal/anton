import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useQuote(id: string | null | undefined) {
  return useSWR(id ? `/api/quotes/${id}` : null, fetcher);
}

export function useQuotes(filters?: {
  search?: string;
  trade?: string;
  dateFrom?: string;
  dateTo?: string;
}) {
  const params = new URLSearchParams();
  if (filters?.search) params.set("search", filters.search);
  if (filters?.trade) params.set("trade", filters.trade);
  if (filters?.dateFrom) params.set("dateFrom", filters.dateFrom);
  if (filters?.dateTo) params.set("dateTo", filters.dateTo);
  const query = params.toString();
  return useSWR(`/api/quotes${query ? `?${query}` : ""}`, fetcher);
}

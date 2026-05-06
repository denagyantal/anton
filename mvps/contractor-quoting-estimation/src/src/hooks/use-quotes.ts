import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useQuote(id: string | null | undefined) {
  return useSWR(id ? `/api/quotes/${id}` : null, fetcher);
}

export function useQuotes(filters?: { search?: string }) {
  const params = new URLSearchParams();
  if (filters?.search) params.set("search", filters.search);
  const query = params.toString();
  return useSWR(`/api/quotes${query ? `?${query}` : ""}`, fetcher);
}

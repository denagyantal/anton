import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useQuote(id: string | null | undefined) {
  return useSWR(id ? `/api/quotes/${id}` : null, fetcher);
}

export function useQuotes() {
  return useSWR("/api/quotes", fetcher);
}

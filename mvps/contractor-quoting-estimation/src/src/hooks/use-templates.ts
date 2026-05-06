import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useTemplates(trade: string | null | undefined) {
  return useSWR(
    trade ? `/api/templates?trade=${trade}` : null,
    fetcher
  );
}

export function useTemplateItems(templateId: string | null | undefined) {
  return useSWR(
    templateId ? `/api/templates/${templateId}/items` : null,
    fetcher
  );
}

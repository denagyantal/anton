import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { UserProfile } from "@/types";

interface UseProfileReturn {
  profile: UserProfile | null;
  isLoading: boolean;
  isError: boolean;
  mutate: () => Promise<UserProfile | null | undefined>;
}

export function useProfile(): UseProfileReturn {
  const { data, error, isLoading, mutate } = useSWR<UserProfile>(
    "/api/profile",
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    profile: data ?? null,
    isLoading,
    isError: !!error,
    mutate: async () => {
      const result = await mutate();
      return result ?? null;
    },
  };
}

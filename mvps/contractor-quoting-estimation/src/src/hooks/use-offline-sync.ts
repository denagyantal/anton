"use client";
import { useState, useEffect } from "react";
import { getPendingSyncCount } from "@/lib/offline-db";

export function useOfflineSync() {
  const [pendingSyncCount, setPendingSyncCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      try {
        const count = await getPendingSyncCount();
        if (!cancelled) setPendingSyncCount(count);
      } catch {
        // IndexedDB may not be available in some environments
        if (!cancelled) setPendingSyncCount(0);
      }
    }

    refresh();

    // Re-poll every 5 seconds to reflect changes from save operations
    const interval = setInterval(refresh, 5000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return { pendingSyncCount };
}

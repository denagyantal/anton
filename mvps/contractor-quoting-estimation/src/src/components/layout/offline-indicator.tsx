"use client";
import { useOffline } from "@/hooks/use-offline";
import { useOfflineSync } from "@/hooks/use-offline-sync";

export function OfflineIndicator() {
  const { isOnline } = useOffline();
  const { pendingSyncCount } = useOfflineSync();

  if (isOnline && pendingSyncCount === 0) {
    return null;
  }

  if (isOnline && pendingSyncCount > 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-800 shadow-md"
      >
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
        {pendingSyncCount} {pendingSyncCount === 1 ? "quote" : "quotes"} pending sync
      </div>
    );
  }

  // Offline
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-medium text-amber-800 shadow-md"
    >
      <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
      {pendingSyncCount > 0
        ? `Offline — ${pendingSyncCount} ${pendingSyncCount === 1 ? "quote" : "quotes"} pending sync`
        : "Offline — changes will sync when reconnected"}
    </div>
  );
}

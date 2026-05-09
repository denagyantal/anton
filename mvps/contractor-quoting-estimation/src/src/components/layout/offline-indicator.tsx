"use client";
import { useOffline } from "@/hooks/use-offline";
import { useOfflineSync } from "@/hooks/use-offline-sync";

export function OfflineIndicator() {
  const { isOnline } = useOffline();
  const { pendingSyncCount, isSyncing, justSynced } = useOfflineSync();

  // Syncing in progress — show syncing state (highest priority when online)
  if (isOnline && isSyncing) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-800 shadow-md"
      >
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
        Syncing {pendingSyncCount} {pendingSyncCount === 1 ? "quote" : "quotes"}...
      </div>
    );
  }

  // All synced confirmation — brief display after sync completes
  if (isOnline && justSynced && pendingSyncCount === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm font-medium text-green-800 shadow-md"
      >
        <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
        All synced
      </div>
    );
  }

  // Online with pending quotes (not currently syncing)
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

  // Online, no pending, not syncing, not just-synced — hidden
  if (isOnline) {
    return null;
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

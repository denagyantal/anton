"use client";
import { useOffline } from "@/hooks/use-offline";

export function OfflineIndicator() {
  const { isOnline } = useOffline();

  if (isOnline) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-medium text-amber-800 shadow-md"
    >
      <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
      Offline — changes will sync when reconnected
    </div>
  );
}

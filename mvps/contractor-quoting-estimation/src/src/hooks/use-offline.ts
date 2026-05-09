"use client";
import { useState, useEffect } from "react";

export function useOffline() {
  // Initialize to true (optimistic) — avoids SSR hydration mismatch
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Sync with actual browser state on mount
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { isOnline };
}

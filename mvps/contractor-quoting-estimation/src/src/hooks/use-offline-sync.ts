"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  getPendingSyncCount,
  getSyncQueueItems,
  getOfflineQuoteWithItems,
  markQuoteSynced,
  markQuoteSyncFailed,
  removeSyncQueueItem,
  incrementSyncAttempts,
} from "@/lib/offline-db";

const MAX_ATTEMPTS = 3;

async function uploadPhotoBlob(blob: Blob): Promise<string | null> {
  try {
    const formData = new FormData();
    const ext = blob.type.split("/")[1] ?? "jpg";
    formData.append("file", new File([blob], `photo.${ext}`, { type: blob.type }));
    formData.append("type", "photo");
    const res = await fetch("/api/photos/upload", { method: "POST", body: formData });
    if (!res.ok) return null;
    const json = await res.json() as { url?: string };
    return json.url ?? null;
  } catch {
    return null;
  }
}

export function useOfflineSync() {
  const [pendingSyncCount, setPendingSyncCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [justSynced, setJustSynced] = useState(false);
  const isSyncingRef = useRef(false);

  const refreshCount = useCallback(async () => {
    try {
      const count = await getPendingSyncCount();
      setPendingSyncCount(count);
    } catch {
      setPendingSyncCount(0);
    }
  }, []);

  const runSync = useCallback(async () => {
    if (isSyncingRef.current) return;
    isSyncingRef.current = true;
    setIsSyncing(true);

    try {
      const items = await getSyncQueueItems();
      if (items.length === 0) {
        return;
      }

      let anySuccess = false;

      for (const queueItem of items) {
        if (queueItem.attempts >= MAX_ATTEMPTS) {
          continue;
        }

        const offlineData = await getOfflineQuoteWithItems(queueItem.quoteLocalId);
        if (!offlineData) {
          await removeSyncQueueItem(queueItem.id);
          await refreshCount();
          continue;
        }

        const { quote, lineItems, photos } = offlineData;

        try {
          // Step 1: Upload photos to R2
          const photoUrls: string[] = [];
          for (const photo of photos) {
            const url = await uploadPhotoBlob(photo.blob);
            if (url) {
              photoUrls.push(url);
            }
          }

          // Step 2: Sync quote data to server
          const res = await fetch("/api/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              localId: quote.localId,
              trade: quote.trade,
              quoteNumber: quote.quoteNumber,
              customerName: quote.customerName,
              customerAddress: quote.customerAddress,
              customerPhone: quote.customerPhone,
              customerEmail: quote.customerEmail,
              notes: quote.notes,
              taxRate: quote.taxRate,
              depositType: quote.depositType,
              depositValue: quote.depositValue,
              termsText: quote.termsText,
              lineItems: lineItems.map((li) => ({
                description: li.description,
                quantity: li.quantity,
                unit: li.unit,
                unitPrice: li.unitPrice,
                sortOrder: li.sortOrder,
                isCustom: li.isCustom,
              })),
              photoUrls,
            }),
          });

          if (!res.ok) {
            throw new Error(`Server returned ${res.status}`);
          }

          const json = await res.json() as { data?: { id?: string } };
          const serverId = json.data?.id;

          if (serverId) {
            await markQuoteSynced(quote.localId, serverId);
          }
          await removeSyncQueueItem(queueItem.id);
          anySuccess = true;
          await refreshCount();
        } catch {
          await incrementSyncAttempts(queueItem.id);
          await markQuoteSyncFailed(quote.localId);
          await refreshCount();
        }
      }

      const remaining = await getPendingSyncCount();
      if (remaining === 0 && anySuccess) {
        setJustSynced(true);
        setTimeout(() => setJustSynced(false), 3000);
      }
    } finally {
      isSyncingRef.current = false;
      setIsSyncing(false);
      await refreshCount();
    }
  }, [refreshCount]);

  // Poll pending count every 5 seconds
  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      if (!cancelled) {
        try {
          const count = await getPendingSyncCount();
          if (!cancelled) setPendingSyncCount(count);
        } catch {
          if (!cancelled) setPendingSyncCount(0);
        }
      }
    }

    refresh();
    const interval = setInterval(refresh, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  // Trigger sync whenever the device comes back online
  useEffect(() => {
    const handleOnline = () => {
      runSync();
    };
    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [runSync]);

  // Also attempt sync on mount if online
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.onLine) {
      runSync();
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { pendingSyncCount, isSyncing, justSynced, syncNow: runSync };
}

// IMPORTANT: This file is client-only — never import it in server components or API routes.
// It uses browser APIs (IndexedDB) that do not exist in Node.js.
import Dexie, { type Table } from "dexie";

export interface OfflineQuote {
  localId: string;
  serverId?: string; // set after successful sync to server
  status: "pending-sync" | "synced" | "sync-failed";
  trade: string;
  quoteNumber: string;
  customerName: string;
  customerAddress?: string;
  customerPhone?: string;
  customerEmail?: string;
  notes?: string;
  taxRate: number;
  depositType?: "FIXED" | "PERCENTAGE";
  depositValue?: number;
  termsText?: string;
  createdAt: number; // Unix timestamp ms
  updatedAt: number;
}

export interface OfflineLineItem {
  localId: string;
  quoteLocalId: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  sortOrder: number;
  isCustom: boolean;
}

export interface OfflinePhoto {
  localId: string;
  quoteLocalId: string;
  blob: Blob; // compressed photo stored as Blob
  thumbnailDataUrl?: string; // base64 data URL for inline display
  sortOrder: number;
  caption?: string;
}

export interface SyncQueueItem {
  id: string;
  quoteLocalId: string;
  attempts: number;
  createdAt: number;
}

class QuoteCraftDB extends Dexie {
  offlineQuotes!: Table<OfflineQuote>;
  offlineLineItems!: Table<OfflineLineItem>;
  offlinePhotos!: Table<OfflinePhoto>;
  syncQueue!: Table<SyncQueueItem>;

  constructor() {
    super("quotecraft-offline");
    this.version(1).stores({
      offlineQuotes: "localId, status, trade, createdAt",
      offlineLineItems: "localId, quoteLocalId",
      offlinePhotos: "localId, quoteLocalId",
      syncQueue: "id, quoteLocalId, createdAt",
    });
  }
}

export const offlineDb = new QuoteCraftDB();

export async function getPendingSyncCount(): Promise<number> {
  return offlineDb.syncQueue.count();
}

export async function saveQuoteOffline(
  quote: Omit<OfflineQuote, "localId" | "status" | "createdAt" | "updatedAt">,
  lineItems: Omit<OfflineLineItem, "localId" | "quoteLocalId">[],
  photos?: Array<{ blob: Blob; thumbnailDataUrl?: string; sortOrder: number }>
): Promise<string> {
  const localId = crypto.randomUUID();
  const now = Date.now();

  await offlineDb.transaction(
    "rw",
    offlineDb.offlineQuotes,
    offlineDb.offlineLineItems,
    offlineDb.offlinePhotos,
    offlineDb.syncQueue,
    async () => {
      await offlineDb.offlineQuotes.add({
        localId,
        status: "pending-sync",
        createdAt: now,
        updatedAt: now,
        ...quote,
      });

      if (lineItems.length > 0) {
        await offlineDb.offlineLineItems.bulkAdd(
          lineItems.map((item) => ({
            ...item,
            localId: crypto.randomUUID(),
            quoteLocalId: localId,
          }))
        );
      }

      if (photos && photos.length > 0) {
        await offlineDb.offlinePhotos.bulkAdd(
          photos.map((p) => ({
            localId: crypto.randomUUID(),
            quoteLocalId: localId,
            blob: p.blob,
            thumbnailDataUrl: p.thumbnailDataUrl,
            sortOrder: p.sortOrder,
          }))
        );
      }

      await offlineDb.syncQueue.add({
        id: crypto.randomUUID(),
        quoteLocalId: localId,
        attempts: 0,
        createdAt: now,
      });
    }
  );

  return localId;
}

export async function updateQuoteOffline(
  localId: string,
  updates: Partial<Omit<OfflineQuote, "localId" | "createdAt">>,
  lineItems?: Omit<OfflineLineItem, "localId" | "quoteLocalId">[]
): Promise<void> {
  await offlineDb.transaction(
    "rw",
    offlineDb.offlineQuotes,
    offlineDb.offlineLineItems,
    offlineDb.syncQueue,
    async () => {
      await offlineDb.offlineQuotes.update(localId, {
        ...updates,
        updatedAt: Date.now(),
      });

      if (lineItems !== undefined) {
        await offlineDb.offlineLineItems.where("quoteLocalId").equals(localId).delete();
        if (lineItems.length > 0) {
          await offlineDb.offlineLineItems.bulkAdd(
            lineItems.map((item) => ({
              ...item,
              localId: crypto.randomUUID(),
              quoteLocalId: localId,
            }))
          );
        }
      }

      // Ensure quote is (re-)queued for sync
      const existing = await offlineDb.syncQueue.where("quoteLocalId").equals(localId).first();
      if (!existing) {
        await offlineDb.syncQueue.add({
          id: crypto.randomUUID(),
          quoteLocalId: localId,
          attempts: 0,
          createdAt: Date.now(),
        });
      }
    }
  );
}

export async function getOfflineQuoteWithItems(localId: string): Promise<{
  quote: OfflineQuote;
  lineItems: OfflineLineItem[];
  photos: OfflinePhoto[];
} | null> {
  const quote = await offlineDb.offlineQuotes.get(localId);
  if (!quote) return null;
  const lineItems = await offlineDb.offlineLineItems
    .where("quoteLocalId")
    .equals(localId)
    .sortBy("sortOrder");
  const photos = await offlineDb.offlinePhotos
    .where("quoteLocalId")
    .equals(localId)
    .sortBy("sortOrder");
  return { quote, lineItems, photos };
}

export async function addPhotoOffline(
  quoteLocalId: string,
  blob: Blob,
  thumbnailDataUrl?: string,
  sortOrder = 0
): Promise<string> {
  const localId = crypto.randomUUID();
  await offlineDb.offlinePhotos.add({
    localId,
    quoteLocalId,
    blob,
    thumbnailDataUrl,
    sortOrder,
  });
  return localId;
}

export async function removePhotoOffline(localId: string): Promise<void> {
  await offlineDb.offlinePhotos.delete(localId);
}

export function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export async function getSyncQueueItems(): Promise<SyncQueueItem[]> {
  return offlineDb.syncQueue.orderBy("createdAt").toArray();
}

export async function markQuoteSynced(
  localId: string,
  serverId: string
): Promise<void> {
  await offlineDb.offlineQuotes.update(localId, {
    serverId,
    status: "synced",
    updatedAt: Date.now(),
  });
}

export async function markQuoteSyncFailed(localId: string): Promise<void> {
  await offlineDb.offlineQuotes.update(localId, {
    status: "sync-failed",
    updatedAt: Date.now(),
  });
}

export async function removeSyncQueueItem(id: string): Promise<void> {
  await offlineDb.syncQueue.delete(id);
}

export async function incrementSyncAttempts(id: string): Promise<void> {
  const item = await offlineDb.syncQueue.get(id);
  if (item) {
    await offlineDb.syncQueue.update(id, { attempts: item.attempts + 1 });
  }
}

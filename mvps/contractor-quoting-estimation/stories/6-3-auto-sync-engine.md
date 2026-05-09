# Story 6.3: Auto-Sync Engine

Status: ready-for-dev

## Story

As a contractor,
I want my offline quotes to automatically sync to the server when I regain connectivity,
so that my data is backed up and accessible from other devices without manual action.

## Acceptance Criteria

1. **Given** I have quotes saved offline in IndexedDB
   **When** my device regains internet connectivity
   **Then** the sync engine automatically processes the sync queue in FIFO order (oldest `createdAt` first)
   **And** each offline quote (with line items, customer info, notes, and deposit config) is sent to the server API
   **And** photos stored as blobs in IndexedDB are uploaded to Cloudflare R2

2. **Given** the sync engine is processing
   **When** a quote syncs successfully
   **Then** the local IndexedDB record is updated with the server-generated ID and `status = "synced"`
   **And** the item is removed from the `syncQueue` table
   **And** the pending sync count decrements
   **And** the quote appears in the server-side dashboard (accessible via `/api/quotes`)

3. **Given** the sync engine encounters a network error during sync
   **When** the error occurs
   **Then** the failed item remains in the `syncQueue` for retry on next connectivity
   **And** no quote data is lost

4. **Given** a quote was created offline and a draft with the same `serverId` already exists on the server
   **When** sync processes that quote
   **Then** the last-write-wins strategy applies for DRAFT status — the offline version overwrites the server version
   **And** the server state is authoritative for quotes in SENT, SIGNED, or PAID status — the offline version is NOT applied

5. **Given** all pending items have synced
   **When** the sync queue is empty
   **Then** the offline indicator shows a brief "All synced" confirmation (auto-dismisses after 3 seconds)
   **And** returns to the normal hidden state
   **And** the sync achieves 99.9%+ success rate for valid quote data (NFR17)

## Tasks / Subtasks

- [ ] Task 1: Read Next.js 16 docs and verify existing dependencies (AC: all)
  - [ ] 1.1 **MANDATORY FIRST STEP** — Read `node_modules/next/dist/docs/` for any Next.js 16-specific guidance on fetch patterns, Route Handlers, or FormData in serverless functions before writing any code
  - [ ] 1.2 Verify Dexie is installed (installed in Story 6.2):
    ```bash
    cd mvps/contractor-quoting-estimation/src && node -e "require('dexie'); console.log('dexie OK')"
    ```
  - [ ] 1.3 Verify `src/src/lib/offline-db.ts` exists with the `syncQueue`, `offlineQuotes`, `offlineLineItems`, `offlinePhotos` tables — this was created in Story 6.2
  - [ ] 1.4 Verify `src/src/hooks/use-offline-sync.ts` exists (Story 6.2) — this hook will be extended in Task 4

- [ ] Task 2: Extend `offline-db.ts` with sync-engine helper functions (AC: #1, #2, #3, #4)
  - [ ] 2.1 Open `src/src/lib/offline-db.ts` (MODIFY — do NOT recreate; this file was created in Story 6.2)
  - [ ] 2.2 Add the following exported functions at the bottom of the file:
    ```typescript
    export async function getSyncQueueItems(): Promise<SyncQueueItem[]> {
      // FIFO order: oldest createdAt first
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
    ```
  - [ ] 2.3 Verify the `offlineDb.syncQueue.orderBy("createdAt")` works with the existing Dexie schema — the `syncQueue` table was defined with `"id, quoteLocalId, createdAt"` indexes in Story 6.2, so `createdAt` is indexed and `orderBy` will work

- [ ] Task 3: Add Zod validation schema for the sync API (AC: #1, #2)
  - [ ] 3.1 Open `src/src/lib/validations/quote.ts` (MODIFY — add to existing file, do NOT recreate)
  - [ ] 3.2 Append the `syncQuoteSchema` at the bottom of the file:
    ```typescript
    export const syncQuoteSchema = z.object({
      localId: z.string().min(1, "localId is required"),
      trade: z.enum(["PLUMBING", "ELECTRICAL", "HVAC", "PAINTING"]),
      quoteNumber: z.string().min(1, "quoteNumber is required"),
      customerName: z.string().default(""),
      customerAddress: z.string().optional(),
      customerPhone: z.string().optional(),
      customerEmail: z.string().optional(),
      notes: z.string().optional(),
      taxRate: z.number().min(0).max(100).default(0),
      depositType: z.enum(["FIXED", "PERCENTAGE"]).nullable().optional(),
      depositValue: z.number().min(0).nullable().optional(),
      termsText: z.string().optional(),
      lineItems: z.array(lineItemSchema).default([]),
      photoUrls: z.array(z.string()).default([]),
    });

    export type SyncQuoteInput = z.infer<typeof syncQuoteSchema>;
    ```

- [ ] Task 4: Create `POST /api/sync` route handler (AC: #1, #2, #4)
  - [ ] 4.1 Create directory `src/src/app/api/sync/` (new directory)
  - [ ] 4.2 Create `src/src/app/api/sync/route.ts` (NEW file):
    ```typescript
    import { NextRequest, NextResponse } from "next/server";
    import { auth } from "@/lib/auth";
    import { prisma } from "@/lib/db";
    import { syncQuoteSchema } from "@/lib/validations/quote";
    import { ZodError } from "zod";

    export async function POST(request: NextRequest) {
      const session = await auth();
      if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      try {
        const body = await request.json();
        const data = syncQuoteSchema.parse(body);

        // Check for conflict: does a quote with this quoteNumber already exist for this user?
        const existing = await prisma.quote.findFirst({
          where: { userId: session.user.id, quoteNumber: data.quoteNumber },
          select: { id: true, status: true },
        });

        if (existing) {
          // Conflict resolution: last-write-wins for DRAFT; skip for non-DRAFT
          if (existing.status !== "DRAFT") {
            // Server-authoritative for SENT/SIGNED/PAID — skip client write
            return NextResponse.json(
              { data: { id: existing.id, quoteNumber: data.quoteNumber, conflict: "skipped" } },
              { status: 200 }
            );
          }
          // Update existing DRAFT (last-write-wins)
          const updated = await prisma.quote.update({
            where: { id: existing.id },
            data: {
              customerName: data.customerName,
              customerAddress: data.customerAddress,
              customerPhone: data.customerPhone,
              customerEmail: data.customerEmail,
              notes: data.notes,
              taxRate: data.taxRate,
              depositType: data.depositType ?? null,
              depositValue: data.depositValue ?? null,
              termsText: data.termsText,
              lineItems: {
                deleteMany: {},
                create: data.lineItems.map((item, i) => ({
                  description: item.description,
                  quantity: item.quantity,
                  unit: item.unit,
                  unitPrice: item.unitPrice,
                  sortOrder: i,
                  isCustom: item.isCustom,
                })),
              },
              photos: data.photoUrls.length > 0 ? {
                deleteMany: {},
                create: data.photoUrls.map((url, i) => ({
                  url,
                  sortOrder: i,
                })),
              } : undefined,
            },
            select: { id: true, quoteNumber: true },
          });
          return NextResponse.json({ data: { ...updated, conflict: "merged" } }, { status: 200 });
        }

        // Create new quote from offline data
        const quote = await prisma.quote.create({
          data: {
            userId: session.user.id,
            trade: data.trade,
            quoteNumber: data.quoteNumber,
            customerName: data.customerName,
            customerAddress: data.customerAddress,
            customerPhone: data.customerPhone,
            customerEmail: data.customerEmail,
            notes: data.notes,
            taxRate: data.taxRate,
            depositType: data.depositType ?? null,
            depositValue: data.depositValue ?? null,
            termsText: data.termsText,
            lineItems: {
              create: data.lineItems.map((item, i) => ({
                description: item.description,
                quantity: item.quantity,
                unit: item.unit,
                unitPrice: item.unitPrice,
                sortOrder: i,
                isCustom: item.isCustom,
              })),
            },
            ...(data.photoUrls.length > 0 && {
              photos: {
                create: data.photoUrls.map((url, i) => ({
                  url,
                  sortOrder: i,
                })),
              },
            }),
          },
          select: { id: true, quoteNumber: true },
        });

        return NextResponse.json({ data: quote }, { status: 201 });
      } catch (err) {
        if (err instanceof ZodError) {
          return NextResponse.json(
            { error: err.issues[0]?.message ?? "Validation failed" },
            { status: 400 }
          );
        }
        console.error("Sync error:", err);
        return NextResponse.json({ error: "Sync failed. Will retry." }, { status: 500 });
      }
    }
    ```
  - [ ] 4.3 Confirm the `photos` relation on `prisma.quote` — the Prisma schema defines `photos QuotePhoto[]` on the Quote model; the `create` nested write uses the correct `url` and `sortOrder` fields from `QuotePhoto`

- [ ] Task 5: Extend `use-offline-sync.ts` with the sync engine (AC: #1, #2, #3, #4, #5)
  - [ ] 5.1 Open `src/src/hooks/use-offline-sync.ts` (MODIFY — do NOT recreate; this was created in Story 6.2)
  - [ ] 5.2 Replace the file contents with the extended version that adds sync engine logic:
    ```typescript
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
      const isSyncingRef = useRef(false); // prevent concurrent runs without stale closure issues

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
            // Skip items that have exceeded max attempts
            if (queueItem.attempts >= MAX_ATTEMPTS) {
              continue;
            }

            const offlineData = await getOfflineQuoteWithItems(queueItem.quoteLocalId);
            if (!offlineData) {
              // Orphaned sync queue item — remove it
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
                // If upload fails, we still proceed — photos are best-effort in sync
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
              // Network error or server error — leave in queue for retry
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

      // Poll pending count every 5 seconds (unchanged from Story 6.2)
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

      // Also attempt sync on mount if online (handles page reload while online with pending items)
      useEffect(() => {
        if (typeof navigator !== "undefined" && navigator.onLine) {
          runSync();
        }
        // Only run on mount — do NOT add runSync to deps (would re-run on every render)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return { pendingSyncCount, isSyncing, justSynced, syncNow: runSync };
    }
    ```

- [ ] Task 6: Update `OfflineIndicator` to show sync states (AC: #5)
  - [ ] 6.1 Open `src/src/components/layout/offline-indicator.tsx` (MODIFY — do NOT recreate)
  - [ ] 6.2 Replace file contents with the extended version supporting `isSyncing` and `justSynced`:
    ```typescript
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
    ```
  - [ ] 6.3 Verify the five rendering states are correct:
    - `isOnline && isSyncing` → blue "Syncing N quotes..." (highest priority)
    - `isOnline && justSynced && pendingSyncCount === 0` → green "All synced" (3s auto-dismiss)
    - `isOnline && pendingSyncCount > 0` → blue "N quotes pending sync"
    - `isOnline && !isSyncing && !justSynced && pendingSyncCount === 0` → `null` (hidden)
    - `!isOnline` → amber "Offline" (with or without pending count)

- [ ] Task 7: Write unit tests for the sync API route (AC: #1, #2, #4)
  - [ ] 7.1 Create `src/src/app/api/sync/route.test.ts` (NEW file):
    ```typescript
    import { describe, it, expect, vi, beforeEach } from "vitest";
    import { POST } from "./route";
    import { NextRequest } from "next/server";

    vi.mock("@/lib/auth", () => ({
      auth: vi.fn(),
    }));

    vi.mock("@/lib/db", () => ({
      prisma: {
        quote: {
          findFirst: vi.fn(),
          create: vi.fn(),
          update: vi.fn(),
        },
      },
    }));

    import { auth } from "@/lib/auth";
    import { prisma } from "@/lib/db";

    const mockSession = { user: { id: "user-123" } };

    function makeRequest(body: unknown) {
      return new NextRequest("http://localhost/api/sync", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
    }

    describe("POST /api/sync", () => {
      beforeEach(() => {
        vi.clearAllMocks();
        (auth as ReturnType<typeof vi.fn>).mockResolvedValue(mockSession);
      });

      it("returns 401 when unauthenticated", async () => {
        (auth as ReturnType<typeof vi.fn>).mockResolvedValue(null);
        const req = makeRequest({ localId: "x", trade: "PLUMBING", quoteNumber: "Q-001", customerName: "Test" });
        const res = await POST(req);
        expect(res.status).toBe(401);
      });

      it("creates a new quote when no conflict exists", async () => {
        (prisma.quote.findFirst as ReturnType<typeof vi.fn>).mockResolvedValue(null);
        (prisma.quote.create as ReturnType<typeof vi.fn>).mockResolvedValue({
          id: "server-id-1",
          quoteNumber: "Q-001",
        });

        const req = makeRequest({
          localId: "local-abc",
          trade: "PLUMBING",
          quoteNumber: "Q-001",
          customerName: "John Doe",
          taxRate: 8.5,
          lineItems: [{ description: "Water heater", quantity: 1, unit: "each", unitPrice: 500, isCustom: false }],
          photoUrls: [],
        });

        const res = await POST(req);
        expect(res.status).toBe(201);
        const json = await res.json() as { data: { id: string } };
        expect(json.data.id).toBe("server-id-1");
        expect(prisma.quote.create).toHaveBeenCalledOnce();
      });

      it("skips sync when existing quote is not DRAFT", async () => {
        (prisma.quote.findFirst as ReturnType<typeof vi.fn>).mockResolvedValue({
          id: "server-id-2",
          status: "SIGNED",
        });

        const req = makeRequest({
          localId: "local-abc",
          trade: "PLUMBING",
          quoteNumber: "Q-001",
          customerName: "John Doe",
          taxRate: 0,
          lineItems: [],
          photoUrls: [],
        });

        const res = await POST(req);
        expect(res.status).toBe(200);
        const json = await res.json() as { data: { conflict: string } };
        expect(json.data.conflict).toBe("skipped");
        expect(prisma.quote.create).not.toHaveBeenCalled();
        expect(prisma.quote.update).not.toHaveBeenCalled();
      });

      it("updates existing DRAFT quote (last-write-wins)", async () => {
        (prisma.quote.findFirst as ReturnType<typeof vi.fn>).mockResolvedValue({
          id: "server-id-3",
          status: "DRAFT",
        });
        (prisma.quote.update as ReturnType<typeof vi.fn>).mockResolvedValue({
          id: "server-id-3",
          quoteNumber: "Q-001",
        });

        const req = makeRequest({
          localId: "local-abc",
          trade: "ELECTRICAL",
          quoteNumber: "Q-001",
          customerName: "Jane Smith",
          taxRate: 5,
          lineItems: [],
          photoUrls: [],
        });

        const res = await POST(req);
        expect(res.status).toBe(200);
        const json = await res.json() as { data: { conflict: string } };
        expect(json.data.conflict).toBe("merged");
        expect(prisma.quote.update).toHaveBeenCalledOnce();
      });

      it("returns 400 for invalid input", async () => {
        const req = makeRequest({ invalid: "data" });
        const res = await POST(req);
        expect(res.status).toBe(400);
      });
    });
    ```

- [ ] Task 8: Write unit tests for the new `offline-db.ts` helpers (AC: #1, #2, #3)
  - [ ] 8.1 Open `src/src/lib/offline-db.test.ts` (MODIFY — this file was created in Story 6.2 with Dexie mocked)
  - [ ] 8.2 Add test cases for the new helpers at the end of the file (inside a new describe block):
    ```typescript
    describe("sync engine helpers", () => {
      it("getSyncQueueItems returns items", async () => {
        const { getSyncQueueItems } = await import("@/lib/offline-db");
        // The mock returns empty array by default from orderBy().toArray()
        const items = await getSyncQueueItems();
        expect(Array.isArray(items)).toBe(true);
      });

      it("markQuoteSynced updates quote with serverId and synced status", async () => {
        const { markQuoteSynced } = await import("@/lib/offline-db");
        await expect(markQuoteSynced("local-1", "server-1")).resolves.toBeUndefined();
      });

      it("markQuoteSyncFailed updates quote status to sync-failed", async () => {
        const { markQuoteSyncFailed } = await import("@/lib/offline-db");
        await expect(markQuoteSyncFailed("local-1")).resolves.toBeUndefined();
      });

      it("removeSyncQueueItem deletes the item", async () => {
        const { removeSyncQueueItem } = await import("@/lib/offline-db");
        await expect(removeSyncQueueItem("queue-item-1")).resolves.toBeUndefined();
      });
    });
    ```
  - [ ] 8.3 If the Dexie mock from Story 6.2 does not support `orderBy().toArray()`, extend the mock to add:
    ```typescript
    orderBy: vi.fn().mockReturnThis(),
    toArray: vi.fn().mockResolvedValue([]),
    ```
    The existing Story 6.2 mock may only have `where().equals().sortBy()` — `orderBy` for syncQueue is new.

- [ ] Task 9: Final verification (AC: all)
  - [ ] 9.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors, successful build
  - [ ] 9.2 `npm test` — all existing tests pass plus new sync API tests; zero regressions
  - [ ] 9.3 `npx tsc --noEmit` — zero TypeScript errors
  - [ ] 9.4 Verify `src/src/app/api/sync/route.ts` exists and is a valid Route Handler
  - [ ] 9.5 Verify `src/src/app/api/sync/route.test.ts` exists and all 5 new tests pass
  - [ ] 9.6 Verify `use-offline-sync.ts` exports `{ pendingSyncCount, isSyncing, justSynced, syncNow }` — the `OfflineIndicator` depends on the destructured `{ pendingSyncCount, isSyncing, justSynced }` subset
  - [ ] 9.7 Verify `offline-indicator.tsx` renders the 5 states correctly (manual inspection of conditional logic)
  - [ ] 9.8 Verify no TypeScript errors in the modified `use-offline-sync.ts` — pay attention to the `isSyncingRef` / `useCallback` ESLint rule; the empty `[]` dep array on the mount-only `useEffect` is intentional and the disable comment is required
  - [ ] 9.9 Verify `src/src/lib/offline-db.ts` is still ONLY imported from `"use client"` files or client hooks — the new helpers must not be imported from API routes
  - [ ] 9.10 Confirm `prisma.quote.create` in the sync route uses the correct field names from the Prisma schema — `photos` (not `quotePhotos`) and `lineItems` (not `LineItem`)

## Dev Notes

### CRITICAL: Read Next.js 16 Docs First

Per `AGENTS.md` at `mvps/contractor-quoting-estimation/src/`: **"Read the relevant guide in `node_modules/next/dist/docs/` before writing any code."** Next.js 16.2.2 has breaking changes. Before implementing the sync route, check for:
- Any changes to how `fetch()` works in Route Handlers (serverless context)
- FormData handling differences in `POST` handlers
- Any changes to how Prisma nested writes work in serverless functions

### Critical: Project Root and Directory Layout

The npm project root (where `package.json` and `npm run build` live):
```
mvps/contractor-quoting-estimation/src/
```

The Next.js application source ("double-src" layout from project initialization):
```
mvps/contractor-quoting-estimation/src/src/
  app/
    api/
      sync/
        route.ts          ← CREATE: sync endpoint
        route.test.ts     ← CREATE: sync endpoint tests
  hooks/
    use-offline-sync.ts   ← MODIFY: extend with sync engine (EXISTED since Story 6.2)
  components/
    layout/
      offline-indicator.tsx ← MODIFY: add isSyncing + justSynced states
  lib/
    offline-db.ts          ← MODIFY: add sync helper functions (EXISTED since Story 6.2)
    offline-db.test.ts     ← MODIFY: add tests for new helpers
    validations/
      quote.ts             ← MODIFY: add syncQuoteSchema
```

### Story 6.2 Learnings — Do NOT Regress

From Story 6.2 Dev Agent Record:
- **Build command is `npm run build`** (uses `next build --webpack` internally) — the `--webpack` flag was added to `package.json` to resolve Turbopack/webpack plugin conflict
- `offline-db.ts` must NEVER be imported from server-side code (API routes, server components). It uses browser IndexedDB APIs.
- `use-offline-sync.ts` has `"use client"` directive — required since it imports `offline-db.ts`
- `OfflineIndicator` already has 4 states from Story 6.2; this story adds 2 more (syncing, justSynced)
- Dexie.js `offlineQuotes` table has `localId` as primary key; `syncQueue` table has `id` as primary key and `quoteLocalId` as foreign reference
- `offline-db.ts` is NOT a server component — it has NO `"use client"` directive (it's a pure library). But it must only be used by client files.
- Test suite had 132 tests passing after Story 6.2

### Sync Engine Architecture Decisions

**Why listen for `online` events in `use-offline-sync.ts` (not `use-offline.ts`)?**
The `use-offline.ts` hook exposes `isOnline` but doesn't trigger side effects. The sync engine needs to DO something when connectivity returns — so it listens directly in the sync hook. Both hooks listen for `online` — this is intentional and not a conflict.

**Why also sync on mount?**
If the user creates quotes offline, closes the browser, then reopens it while online, there's no `online` event — the browser was never offline during this session. Checking `navigator.onLine` on mount covers this case.

**Why `isSyncingRef` AND `isSyncing` state?**
`isSyncingRef` prevents concurrent sync runs without stale closure issues (refs are mutable, not closed over). `isSyncing` state is for UI rendering (triggers re-render). Both are needed.

**Why process photos before the quote body?**
The sync route accepts `photoUrls` (pre-uploaded R2 URLs). Photos must be uploaded to R2 first so their URLs can be included in the single quote creation call. If photo upload fails, the quote still syncs without that photo — best-effort photo sync is acceptable.

**Why `MAX_ATTEMPTS = 3`?**
NFR17 requires 99.9%+ success rate. 3 attempts covers transient network failures. Items exceeding `MAX_ATTEMPTS` are skipped (not blocked), so they don't block other items from syncing. The user can manually retry by refreshing.

### Conflict Resolution Logic

The ACs specify:
- **No `serverId` in IndexedDB** → quote was never synced → `POST /api/sync` creates it as new
- **Has `serverId`** → quote was synced before (perhaps the user synced on one device, made offline edits on another) → check server status
  - Server status is DRAFT → update with offline version (last-write-wins)
  - Server status is SENT/SIGNED/PAID → skip (server is authoritative — contractor already sent/signed the quote)

The `quoteNumber` field is the conflict detection key. Quote numbers are generated client-side (in `generateQuoteNumber()` from `src/lib/utils.ts`) — they are unique per contractor but not globally unique. The Prisma query scopes the lookup to `userId` so only the contractor's own quotes are checked.

**Edge case**: If the same contractor creates two different offline quotes that somehow get the same `quoteNumber` — this is prevented by `generateQuoteNumber()` which uses timestamps. The Prisma schema has `quoteNumber @unique` globally, so the second sync would fail with a unique constraint error (caught and returned as 500, retried).

### The `/api/photos/upload` Endpoint — Already Exists

Do NOT create a new photo upload endpoint. The existing `POST /api/photos/upload` (created in Story 3.1) already handles authenticated photo uploads and returns `{ url, key }`. The sync engine reuses it directly with `FormData`.

The `uploadPhotoBlob` helper in `use-offline-sync.ts` wraps this call. It creates a `File` from the stored `Blob` (blobs from IndexedDB have their MIME type preserved). The endpoint validates file type and size — compressed photos from Story 6.2 are under 500KB which is well within the 5MB limit.

### Why the Sync Engine Lives in `use-offline-sync.ts`

The architecture defines this hook as "sync queue management hook". Story 6.2 implemented only the count-reading part. Story 6.3 completes it with the actual sync logic. This is intentional — the hook is the single place that knows about the sync queue lifecycle.

The hook is mounted once in `OfflineIndicator` which is rendered in `layout.tsx` (root layout). This means there is exactly ONE instance of the sync engine running at a time, regardless of how many pages are open.

### Dexie `orderBy` vs `sortBy`

The existing Story 6.2 code uses `sortBy("sortOrder")` on table queries (returns sorted array). For `syncQueue`, we use `orderBy("createdAt").toArray()` — this is a Dexie primary index traversal (more efficient than sorting in memory). The `syncQueue` schema was defined with `"id, quoteLocalId, createdAt"` which creates an index on `createdAt`, making `orderBy` efficient.

If the Dexie mock in `offline-db.test.ts` doesn't have `orderBy().toArray()`, you need to extend the mock. See Task 8.3 for the exact mock addition needed.

### Stack Versions (From Stories 6.1 and 6.2)

- **Next.js 16.2.2** — `params` in page/route components is `Promise<{...}>` — must `await` before use (not relevant to this story's route handler since it has no path params, but be aware for other routes)
- **React 19.2.4** — `useCallback` with empty deps `[]` is valid; `useRef` is stable across renders
- **TypeScript strict mode** — all new files must pass `tsc --noEmit`. The `res.json()` calls need type assertions since `Response.json()` returns `unknown` in strict mode.
- **Vitest v4** — test runner; Dexie mock from Story 6.2 exists in `offline-db.test.ts` — extend it, don't replace it
- **Tailwind CSS v4** — configured via CSS; new colors used in indicator: `bg-green-50 border-green-200 text-green-800 bg-green-500` — all standard Tailwind v4 utilities
- **dexie** — installed in Story 6.2; no new install needed

### Authentication in the Sync Route

The sync route uses `auth()` from `@/lib/auth` (NextAuth.js v5). This is the same pattern used in all other authenticated routes. The user's session is JWT-based with 30-day expiry — valid when sync runs after the user goes back online.

If the session has expired (30+ days offline), the sync will return 401. The item stays in the sync queue. The user will need to log in again, at which point the sync retries automatically (the `online` event fires after re-login navigation if connectivity was already present).

### Prisma Schema — Nested Write Field Names

When writing the sync route, use the EXACT Prisma field names from the schema:
- `quote.photos` → `QuotePhoto[]` relation (NOT `quotePhotos`)
- `quote.lineItems` → `LineItem[]` relation
- `QuotePhoto` fields: `url`, `thumbnail` (optional), `sortOrder`, `caption` (optional)
- `LineItem` fields: `description`, `quantity`, `unit`, `unitPrice`, `sortOrder`, `isCustom`

The sync route's nested `create` for `photos` does NOT need to set `thumbnail` — that field is optional and used for quick display; the R2 URL in `url` is the canonical source.

### OfflineIndicator — Preserve Story 6.2 Behavior

Story 6.2 established 4 OfflineIndicator states. Story 6.3 adds 2 more. The original 4 states must be preserved:
- `isOnline && pendingSyncCount === 0` → `null` (hidden) ✓ preserved in "hidden" state
- `isOnline && pendingSyncCount > 0` → blue badge with count ✓ preserved (shown when not syncing)
- `!isOnline && pendingSyncCount === 0` → amber "Offline" ✓ preserved
- `!isOnline && pendingSyncCount > 0` → amber "Offline — N quotes" ✓ preserved

New states added in this story:
- `isOnline && isSyncing` → blue "Syncing N quotes..." (NEW, highest priority)
- `isOnline && justSynced && pendingSyncCount === 0` → green "All synced" (NEW, brief)

The rendering order in the component matters — `isSyncing` check must come BEFORE `pendingSyncCount > 0` check, otherwise the sync state would be obscured when there are pending items during sync.

### What the Sync Engine Does NOT Do

- Does NOT attempt to sync photos that failed to upload to R2 (best-effort; if R2 is down, the quote still syncs without that photo)
- Does NOT delete synced quotes from IndexedDB (they remain with `status: "synced"` for local access; cleanup is a future concern)
- Does NOT push quote updates back from server to IndexedDB (unidirectional: offline → server)
- Does NOT handle authentication refresh (relies on existing session being valid)
- Does NOT implement exponential backoff (simple retry counting with `MAX_ATTEMPTS = 3` is sufficient for MVP)
- Does NOT sync quotes in SENT/SIGNED/PAID status — those are server-authoritative

### Files to Create (NEW)

| File | Purpose |
|------|---------|
| `src/src/app/api/sync/route.ts` | Sync API endpoint — creates/updates server quotes from offline data |
| `src/src/app/api/sync/route.test.ts` | Unit tests for sync endpoint |

### Files to Modify (MODIFY — do NOT recreate)

| File | Change |
|------|--------|
| `src/src/lib/offline-db.ts` | Add 5 new helpers: `getSyncQueueItems`, `markQuoteSynced`, `markQuoteSyncFailed`, `removeSyncQueueItem`, `incrementSyncAttempts` |
| `src/src/lib/offline-db.test.ts` | Add describe block for new helpers (extend Dexie mock if needed for `orderBy`) |
| `src/src/lib/validations/quote.ts` | Add `syncQuoteSchema` and `SyncQuoteInput` type |
| `src/src/hooks/use-offline-sync.ts` | Replace with extended version: adds sync engine, `isSyncing`, `justSynced`, `syncNow` |
| `src/src/components/layout/offline-indicator.tsx` | Replace with extended version: adds syncing + all-synced states |

### Project Structure Notes

- No new Prisma migrations needed — the sync route uses existing `Quote`, `LineItem`, and `QuotePhoto` models from the schema
- No new npm dependencies needed — `dexie` (Story 6.2), `next-auth` (auth), and `prisma` are all already installed
- `offline-db.ts` remains a pure library file (no `"use client"` directive) — only imported by client-side code
- Feature-based organization per architecture: sync API route in `src/app/api/sync/`, sync engine in `src/hooks/use-offline-sync.ts` (extended from Story 6.2)
- The `syncNow` export from `useOfflineSync` is available for manual retry scenarios (e.g., a future "Retry sync" button)

### References

- [Source: planning/epics.md#Epic 6 — Story 6.3: Auto-Sync Engine — FR53, FR55, NFR17]
- [Source: planning/architecture.md#Offline Sync Protocol — IndexedDB first, FIFO sync queue, conflict resolution, photos as blobs, last-write-wins for drafts]
- [Source: planning/architecture.md#API Endpoints — POST /api/sync for offline sync]
- [Source: planning/architecture.md#Service Boundaries — src/lib/offline-db.ts sole entry point for IndexedDB; src/hooks/use-offline-sync.ts sync queue management]
- [Source: planning/architecture.md#NFR17 — 99.9%+ offline sync success rate]
- [Source: planning/architecture.md#FR53 — System automatically syncs offline-created quotes when connectivity is restored]
- [Source: planning/architecture.md#FR55 — System preserves all quote data including photos during sync without data loss]
- [Source: stories/6-2-offline-quote-creation-and-storage.md — offline-db.ts schema, syncQueue design, Dexie mock pattern, existing use-offline-sync.ts exports]
- [Source: stories/6-1-pwa-installation-and-service-worker-setup.md — build uses npm run build (--webpack flag); Next.js 16.2.2]
- [Source: src/src/app/api/photos/upload/route.ts — existing photo upload endpoint reused during sync]
- [Source: src/src/lib/validations/quote.ts — existing lineItemSchema reused in syncQuoteSchema]
- [Source: src/src/app/api/quotes/route.ts — API response format pattern: { data: quote }, { error: "message" }]
- [Source: src/AGENTS.md — CRITICAL: Read node_modules/next/dist/docs/ before writing any code]

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

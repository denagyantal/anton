import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock Dexie before importing offline-db — IndexedDB is not available in Node.js
vi.mock("dexie", () => {
  const mockTable = {
    add: vi.fn().mockResolvedValue(undefined),
    bulkAdd: vi.fn().mockResolvedValue(undefined),
    update: vi.fn().mockResolvedValue(undefined),
    delete: vi.fn().mockResolvedValue(undefined),
    get: vi.fn(),
    count: vi.fn().mockResolvedValue(0),
    where: vi.fn().mockReturnThis(),
    equals: vi.fn().mockReturnThis(),
    first: vi.fn().mockResolvedValue(null),
    sortBy: vi.fn().mockResolvedValue([]),
  };

  const syncQueueTable = {
    ...mockTable,
    count: vi.fn().mockResolvedValue(0),
  };

  class MockDexie {
    version() {
      return this;
    }
    stores() {
      return this;
    }
    async transaction(
      _mode: string,
      ...args: unknown[]
    ) {
      const cb = args[args.length - 1];
      if (typeof cb === "function") {
        return await cb();
      }
    }
    offlineQuotes = { ...mockTable };
    offlineLineItems = { ...mockTable };
    offlinePhotos = { ...mockTable };
    syncQueue = syncQueueTable;
  }

  return { default: MockDexie, Table: {} };
});

describe("getPendingSyncCount", () => {
  it("returns 0 when sync queue is empty", async () => {
    const { getPendingSyncCount } = await import("@/lib/offline-db");
    const count = await getPendingSyncCount();
    expect(count).toBe(0);
  });
});

describe("blobToDataUrl", () => {
  it("converts a Blob to a data URL string", async () => {
    const { blobToDataUrl } = await import("@/lib/offline-db");

    // Mock FileReader for the Node.js environment
    const mockResult = "data:image/jpeg;base64,/9j/test==";

    class MockFileReader {
      result: string | null = mockResult;
      onload: ((ev: unknown) => void) | null = null;
      onerror: ((ev: unknown) => void) | null = null;

      readAsDataURL(_blob: Blob) {
        setTimeout(() => {
          if (this.onload) this.onload({});
        }, 0);
      }
    }

    vi.stubGlobal("FileReader", MockFileReader);

    const blob = new Blob(["test"], { type: "image/jpeg" });
    const result = await blobToDataUrl(blob);
    expect(result).toBe(mockResult);

    vi.unstubAllGlobals();
  });
});

describe("saveQuoteOffline interface", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("exports saveQuoteOffline function", async () => {
    const { saveQuoteOffline } = await import("@/lib/offline-db");
    expect(typeof saveQuoteOffline).toBe("function");
  });

  it("exports updateQuoteOffline function", async () => {
    const { updateQuoteOffline } = await import("@/lib/offline-db");
    expect(typeof updateQuoteOffline).toBe("function");
  });

  it("exports addPhotoOffline function", async () => {
    const { addPhotoOffline } = await import("@/lib/offline-db");
    expect(typeof addPhotoOffline).toBe("function");
  });

  it("exports removePhotoOffline function", async () => {
    const { removePhotoOffline } = await import("@/lib/offline-db");
    expect(typeof removePhotoOffline).toBe("function");
  });

  it("exports getOfflineQuoteWithItems function", async () => {
    const { getOfflineQuoteWithItems } = await import("@/lib/offline-db");
    expect(typeof getOfflineQuoteWithItems).toBe("function");
  });
});

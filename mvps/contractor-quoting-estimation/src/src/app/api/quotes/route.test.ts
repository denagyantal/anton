import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      create: vi.fn(),
      findMany: vi.fn(),
    },
  },
}));
vi.mock("@/lib/utils", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/utils")>();
  return {
    ...actual,
    generateQuoteNumber: vi.fn(() => "QT-2605-0001"),
  };
});

import { POST, GET } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

function makeRequest(method: string, body?: unknown, search?: string) {
  const url = search
    ? `http://localhost/api/quotes?search=${encodeURIComponent(search)}`
    : `http://localhost/api/quotes`;
  return new Request(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

function makeFilterRequest(filters: {
  search?: string;
  trade?: string;
  dateFrom?: string;
  dateTo?: string;
}) {
  const params = new URLSearchParams();
  if (filters.search) params.set("search", filters.search);
  if (filters.trade) params.set("trade", filters.trade);
  if (filters.dateFrom) params.set("dateFrom", filters.dateFrom);
  if (filters.dateTo) params.set("dateTo", filters.dateTo);
  return new Request(
    `http://localhost/api/quotes?${params.toString()}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );
}

describe("POST /api/quotes", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const res = await POST(makeRequest("POST", { trade: "PLUMBING" }) as never);
    expect(res.status).toBe(401);
  });

  it("returns 400 for invalid trade", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    const res = await POST(makeRequest("POST", { trade: "CARPENTRY" }) as never);
    expect(res.status).toBe(400);
  });

  it("returns 400 for missing body", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    const res = await POST(makeRequest("POST", {}) as never);
    expect(res.status).toBe(400);
  });

  it("creates quote and returns 201 with generated quote number", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.create).mockResolvedValue({
      id: "q-1",
      quoteNumber: "QT-2605-0001",
      trade: "PLUMBING",
      status: "DRAFT",
      userId: "user-1",
    } as never);

    const res = await POST(makeRequest("POST", { trade: "PLUMBING" }) as never);
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.data.quoteNumber).toBe("QT-2605-0001");
    expect(body.data.trade).toBe("PLUMBING");
  });

  it("scopes the created quote to the authenticated user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-42" } } as never);
    vi.mocked(prisma.quote.create).mockResolvedValue({
      id: "q-2",
      quoteNumber: "QT-2605-0001",
      trade: "ELECTRICAL",
      status: "DRAFT",
      userId: "user-42",
    } as never);

    await POST(makeRequest("POST", { trade: "ELECTRICAL" }) as never);

    expect(vi.mocked(prisma.quote.create)).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ userId: "user-42" }),
      })
    );
  });

  it("accepts all valid trades", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.create).mockResolvedValue({ id: "q-1" } as never);

    for (const trade of ["PLUMBING", "ELECTRICAL", "HVAC", "PAINTING"]) {
      vi.clearAllMocks();
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.create).mockResolvedValue({ id: "q-1" } as never);
      const res = await POST(makeRequest("POST", { trade }) as never);
      expect(res.status).toBe(201);
    }
  });
});

describe("GET /api/quotes", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const res = await GET(makeRequest("GET") as never);
    expect(res.status).toBe(401);
  });

  it("returns list of quotes for authenticated user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([
      { id: "q-1", quoteNumber: "QT-2605-0001", taxRate: 0, lineItems: [] },
    ] as never);

    const res = await GET(makeRequest("GET") as never);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toHaveLength(1);
  });

  it("returns all quotes when no search param provided", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([
      { id: "q-1", customerName: "Alice", taxRate: 0, lineItems: [] },
      { id: "q-2", customerName: "Bob", taxRate: 0, lineItems: [] },
    ] as never);

    await GET(makeRequest("GET") as never);

    expect(vi.mocked(prisma.quote.findMany)).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ userId: "user-1" }),
      })
    );
  });

  it("filters by customerName when search param is provided", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([
      { id: "q-1", customerName: "Alice Johnson", taxRate: 0, lineItems: [] },
    ] as never);

    const res = await GET(makeRequest("GET", undefined, "alice") as never);
    expect(res.status).toBe(200);

    expect(vi.mocked(prisma.quote.findMany)).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          customerName: { contains: "alice", mode: "insensitive" },
        }),
      })
    );
  });

  it("returns quotes with computed total (not raw lineItems)", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([
      {
        id: "q-1",
        taxRate: 10,
        lineItems: [{ quantity: 2, unitPrice: 100 }],
      },
    ] as never);

    const res = await GET(makeRequest("GET") as never);
    const body = await res.json();
    // subtotal = 200, tax = 20 (10%), total = 220
    expect(body.data[0].total).toBe(220);
    expect(body.data[0].lineItems).toBeUndefined();
  });

  it("filters by trade when trade param is provided", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([
      { id: "q-1", customerName: "Alice", taxRate: 0, lineItems: [], trade: "PLUMBING" },
    ] as never);

    const res = await GET(makeFilterRequest({ trade: "PLUMBING" }) as never);
    expect(res.status).toBe(200);

    expect(vi.mocked(prisma.quote.findMany)).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ trade: "PLUMBING" }),
      })
    );
  });

  it("ignores unknown trade values", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

    await GET(makeFilterRequest({ trade: "CARPENTRY" }) as never);

    const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
    expect((call as { where: Record<string, unknown> }).where).not.toHaveProperty("trade");
  });

  it("filters by dateFrom when provided", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

    await GET(makeFilterRequest({ dateFrom: "2026-03-01" }) as never);

    const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
    const where = (call as { where: Record<string, unknown> }).where as {
      createdAt?: { gte?: Date; lte?: Date };
    };
    expect(where.createdAt?.gte).toEqual(new Date("2026-03-01T00:00:00.000Z"));
    expect(where.createdAt?.lte).toBeUndefined();
  });

  it("filters by dateTo when provided", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

    await GET(makeFilterRequest({ dateTo: "2026-03-31" }) as never);

    const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
    const where = (call as { where: Record<string, unknown> }).where as {
      createdAt?: { gte?: Date; lte?: Date };
    };
    expect(where.createdAt?.lte).toEqual(new Date("2026-03-31T23:59:59.999Z"));
    expect(where.createdAt?.gte).toBeUndefined();
  });

  it("applies all filters together with AND logic", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

    await GET(
      makeFilterRequest({
        search: "johnson",
        trade: "ELECTRICAL",
        dateFrom: "2026-03-01",
        dateTo: "2026-03-31",
      }) as never
    );

    const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
    const where = (call as { where: Record<string, unknown> }).where as {
      customerName?: unknown;
      trade?: unknown;
      createdAt?: unknown;
    };
    expect(where.customerName).toEqual({ contains: "johnson", mode: "insensitive" });
    expect(where.trade).toBe("ELECTRICAL");
    expect(where.createdAt).toBeDefined();
  });
});

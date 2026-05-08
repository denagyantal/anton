import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findFirst: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    lineItem: {
      deleteMany: vi.fn(),
      create: vi.fn(),
    },
    $transaction: vi.fn(),
  },
}));

import { GET, PUT, DELETE } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

function makeRequest(method: string, body?: unknown) {
  return new Request(`http://localhost/api/quotes/q-1`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

function makeParams(id: string) {
  return { params: Promise.resolve({ id }) };
}

const VALID_UPDATE_BODY = {
  customerName: "Jane Smith",
  customerAddress: "123 Main St",
  customerPhone: "555-0001",
  customerEmail: "jane@example.com",
  notes: "Replace kitchen faucet",
  taxRate: 8.5,
  depositType: null,
  depositValue: null,
  lineItems: [
    {
      description: "Faucet replacement",
      quantity: 1,
      unit: "each",
      unitPrice: 250,
      isCustom: false,
    },
  ],
};

const MOCK_QUOTE = {
  id: "q-1",
  userId: "user-1",
  quoteNumber: "QT-2605-0001",
  trade: "PLUMBING",
  status: "DRAFT",
  customerName: "Jane Smith",
  lineItems: [],
  photos: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("GET /api/quotes/[id]", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const res = await GET(makeRequest("GET") as never, makeParams("q-1") as never);
    expect(res.status).toBe(401);
  });

  it("returns 404 for another user's quote", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-2" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);

    const res = await GET(makeRequest("GET") as never, makeParams("q-1") as never);
    expect(res.status).toBe(404);
  });

  it("returns 200 with quote and line items for owner", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(MOCK_QUOTE as never);

    const res = await GET(makeRequest("GET") as never, makeParams("q-1") as never);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.id).toBe("q-1");
    expect(body.data.lineItems).toBeDefined();
  });

  it("scopes query by userId to prevent information disclosure", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(MOCK_QUOTE as never);

    await GET(makeRequest("GET") as never, makeParams("q-1") as never);

    expect(vi.mocked(prisma.quote.findFirst)).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ userId: "user-1" }),
      })
    );
  });

  it("includes photos in the GET response", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      id: "q-1",
      userId: "user-1",
      status: "SIGNED",
      quoteNumber: "QT-2605-0001",
      lineItems: [],
      photos: [
        {
          id: "photo-1",
          url: "https://r2.example.com/photo1.jpg",
          sortOrder: 0,
          thumbnail: null,
          caption: null,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    } as never);

    const res = await GET(
      new Request("http://localhost/api/quotes/q-1") as never,
      { params: Promise.resolve({ id: "q-1" }) }
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.photos).toHaveLength(1);
    expect(body.data.photos[0].url).toBe("https://r2.example.com/photo1.jpg");
  });

  it("returns quote with all status timestamps", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    const now = new Date();
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      id: "q-1",
      userId: "user-1",
      status: "PAID",
      quoteNumber: "QT-2605-0001",
      lineItems: [],
      photos: [],
      createdAt: now,
      updatedAt: now,
      sentAt: now,
      viewedAt: now,
      signedAt: now,
      paidAt: now,
    } as never);

    const res = await GET(
      new Request("http://localhost/api/quotes/q-1") as never,
      { params: Promise.resolve({ id: "q-1" }) }
    );
    const body = await res.json();
    expect(body.data.sentAt).toBeDefined();
    expect(body.data.viewedAt).toBeDefined();
    expect(body.data.signedAt).toBeDefined();
    expect(body.data.paidAt).toBeDefined();
  });
});

describe("PUT /api/quotes/[id]", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const res = await PUT(
      makeRequest("PUT", VALID_UPDATE_BODY) as never,
      makeParams("q-1") as never
    );
    expect(res.status).toBe(401);
  });

  it("returns 404 for another user's quote", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-2" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);

    const res = await PUT(
      makeRequest("PUT", VALID_UPDATE_BODY) as never,
      makeParams("q-1") as never
    );
    expect(res.status).toBe(404);
  });

  it("returns 400 for missing customerName", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);

    const res = await PUT(
      makeRequest("PUT", { ...VALID_UPDATE_BODY, customerName: "" }) as never,
      makeParams("q-1") as never
    );
    expect(res.status).toBe(400);
  });

  it("returns 400 for taxRate out of range", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);

    const res = await PUT(
      makeRequest("PUT", { ...VALID_UPDATE_BODY, taxRate: 150 }) as never,
      makeParams("q-1") as never
    );
    expect(res.status).toBe(400);
  });

  it("returns 200 and updates quote with line item replacement", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);

    vi.mocked(prisma.quote.findFirst)
      .mockResolvedValueOnce(MOCK_QUOTE as never)
      .mockResolvedValueOnce({ ...MOCK_QUOTE, customerName: "Jane Smith", lineItems: [] } as never);

    vi.mocked(prisma.$transaction).mockResolvedValue([] as never);

    const res = await PUT(
      makeRequest("PUT", VALID_UPDATE_BODY) as never,
      makeParams("q-1") as never
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toBeDefined();
  });

  it("uses a transaction to atomically replace line items", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst)
      .mockResolvedValueOnce(MOCK_QUOTE as never)
      .mockResolvedValueOnce(MOCK_QUOTE as never);
    vi.mocked(prisma.$transaction).mockResolvedValue([] as never);

    await PUT(
      makeRequest("PUT", VALID_UPDATE_BODY) as never,
      makeParams("q-1") as never
    );

    expect(vi.mocked(prisma.$transaction)).toHaveBeenCalled();
  });
});

describe("DELETE /api/quotes/[id]", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const res = await DELETE(makeRequest("DELETE") as never, makeParams("q-1") as never);
    expect(res.status).toBe(401);
  });

  it("returns 404 when quote belongs to another user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-2" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);

    const res = await DELETE(makeRequest("DELETE") as never, makeParams("q-1") as never);
    expect(res.status).toBe(404);
  });

  it("returns 403 when quote status is not DRAFT", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...MOCK_QUOTE,
      status: "SENT",
    } as never);

    const res = await DELETE(makeRequest("DELETE") as never, makeParams("q-1") as never);
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toMatch(/draft/i);
  });

  it("returns 204 and deletes a DRAFT quote", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(MOCK_QUOTE as never);
    vi.mocked(prisma.quote.delete).mockResolvedValue(MOCK_QUOTE as never);

    const res = await DELETE(makeRequest("DELETE") as never, makeParams("q-1") as never);
    expect(res.status).toBe(204);
    expect(vi.mocked(prisma.quote.delete)).toHaveBeenCalledWith({ where: { id: "q-1" } });
  });
});

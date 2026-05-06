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

function makeRequest(method: string, body?: unknown) {
  return new Request(`http://localhost/api/quotes`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
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
    const res = await GET();
    expect(res.status).toBe(401);
  });

  it("returns list of quotes for authenticated user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findMany).mockResolvedValue([
      { id: "q-1", quoteNumber: "QT-2605-0001" },
    ] as never);

    const res = await GET();
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toHaveLength(1);
  });
});

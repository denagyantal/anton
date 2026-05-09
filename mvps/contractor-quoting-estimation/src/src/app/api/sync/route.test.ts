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

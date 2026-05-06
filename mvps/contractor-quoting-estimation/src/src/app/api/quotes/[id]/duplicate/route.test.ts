import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findFirst: vi.fn(),
      create: vi.fn(),
    },
    lineItem: {
      createMany: vi.fn(),
    },
  },
}));
vi.mock("@/lib/utils", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/utils")>();
  return {
    ...actual,
    generateQuoteNumber: vi.fn(() => "QT-2605-9999"),
  };
});

import { POST } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

function makeRequest() {
  return new Request(`http://localhost/api/quotes/q-1/duplicate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}

function makeParams(id: string) {
  return { params: Promise.resolve({ id }) };
}

const SOURCE_LINE_ITEMS = [
  {
    id: "li-1",
    quoteId: "q-1",
    description: "Pipe replacement",
    quantity: 2,
    unit: "each",
    unitPrice: 120,
    isCustom: false,
    sortOrder: 0,
  },
];

const SOURCE_QUOTE = {
  id: "q-1",
  userId: "user-1",
  quoteNumber: "QT-2605-0001",
  trade: "PLUMBING",
  status: "SENT",
  customerName: "Jane Smith",
  customerAddress: "123 Main St",
  customerPhone: "555-0001",
  customerEmail: "jane@example.com",
  taxRate: 8.5,
  depositType: "FIXED",
  depositValue: 500,
  notes: "Front yard only",
  termsText: "Net 30",
  lineItems: SOURCE_LINE_ITEMS,
};

const NEW_QUOTE = {
  id: "q-new",
  userId: "user-1",
  quoteNumber: "QT-2605-9999",
  trade: "PLUMBING",
  status: "DRAFT",
  customerName: "",
  taxRate: 8.5,
  depositType: "FIXED",
  depositValue: 500,
  notes: "Front yard only",
  termsText: "Net 30",
  lineItems: [],
};

describe("POST /api/quotes/[id]/duplicate", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const res = await POST(makeRequest() as never, makeParams("q-1") as never);
    expect(res.status).toBe(401);
  });

  it("returns 404 when quote belongs to another user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-2" } } as never);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);

    const res = await POST(makeRequest() as never, makeParams("q-1") as never);
    expect(res.status).toBe(404);
  });

  it("returns 201 with new DRAFT quote copying trade, tax, deposit, notes, termsText", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst)
      .mockResolvedValueOnce(SOURCE_QUOTE as never)
      .mockResolvedValueOnce({ ...NEW_QUOTE, lineItems: SOURCE_LINE_ITEMS } as never);
    vi.mocked(prisma.quote.create).mockResolvedValue(NEW_QUOTE as never);
    vi.mocked(prisma.lineItem.createMany).mockResolvedValue({ count: 1 } as never);

    const res = await POST(makeRequest() as never, makeParams("q-1") as never);
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.data.status).toBe("DRAFT");
    expect(body.data.trade).toBe("PLUMBING");
    expect(body.data.taxRate).toBe(8.5);
  });

  it("new quote has empty customerName and no customer contact fields", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst)
      .mockResolvedValueOnce(SOURCE_QUOTE as never)
      .mockResolvedValueOnce(NEW_QUOTE as never);
    vi.mocked(prisma.quote.create).mockResolvedValue(NEW_QUOTE as never);
    vi.mocked(prisma.lineItem.createMany).mockResolvedValue({ count: 0 } as never);

    await POST(makeRequest() as never, makeParams("q-1") as never);

    expect(vi.mocked(prisma.quote.create)).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ customerName: "" }),
      })
    );
    const createCall = vi.mocked(prisma.quote.create).mock.calls[0][0];
    expect(createCall.data).not.toHaveProperty("customerAddress");
    expect(createCall.data).not.toHaveProperty("customerPhone");
    expect(createCall.data).not.toHaveProperty("customerEmail");
  });

  it("generates a new unique quote number for the duplicate", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst)
      .mockResolvedValueOnce(SOURCE_QUOTE as never)
      .mockResolvedValueOnce(NEW_QUOTE as never);
    vi.mocked(prisma.quote.create).mockResolvedValue(NEW_QUOTE as never);
    vi.mocked(prisma.lineItem.createMany).mockResolvedValue({ count: 0 } as never);

    await POST(makeRequest() as never, makeParams("q-1") as never);

    expect(vi.mocked(prisma.quote.create)).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ quoteNumber: "QT-2605-9999" }),
      })
    );
  });

  it("duplicates line items with same description, quantity, unit, unitPrice, isCustom", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
    vi.mocked(prisma.quote.findFirst)
      .mockResolvedValueOnce(SOURCE_QUOTE as never)
      .mockResolvedValueOnce({ ...NEW_QUOTE, lineItems: SOURCE_LINE_ITEMS } as never);
    vi.mocked(prisma.quote.create).mockResolvedValue(NEW_QUOTE as never);
    vi.mocked(prisma.lineItem.createMany).mockResolvedValue({ count: 1 } as never);

    await POST(makeRequest() as never, makeParams("q-1") as never);

    expect(vi.mocked(prisma.lineItem.createMany)).toHaveBeenCalledWith({
      data: [
        expect.objectContaining({
          quoteId: "q-new",
          description: "Pipe replacement",
          quantity: 2,
          unit: "each",
          unitPrice: 120,
          isCustom: false,
        }),
      ],
    });
  });
});

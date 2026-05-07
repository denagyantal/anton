import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: { findFirst: vi.fn(), update: vi.fn() },
    profile: { findUnique: vi.fn() },
  },
}));
vi.mock("@/lib/r2", () => ({
  uploadToR2: vi.fn().mockResolvedValue("https://cdn.example.com/user1/pdf/q1.pdf"),
}));
vi.mock("@/lib/pdf-generator", () => ({
  generateQuotePdf: vi.fn().mockResolvedValue(Buffer.from("fake-pdf")),
}));

import { POST } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { uploadToR2 } from "@/lib/r2";
import { generateQuotePdf } from "@/lib/pdf-generator";

const mockQuoteWithItems = {
  id: "q1",
  userId: "user-1",
  quoteNumber: "QT-2601-1234",
  trade: "PLUMBING",
  customerName: "Lisa Johnson",
  customerAddress: null,
  customerPhone: null,
  customerEmail: null,
  notes: null,
  taxRate: 8.25,
  depositType: null,
  depositValue: null,
  termsText: null,
  createdAt: new Date("2026-03-23"),
  lineItems: [
    {
      description: "Water heater install",
      quantity: 1,
      unit: "flat rate",
      unitPrice: 850,
      sortOrder: 0,
    },
  ],
  photos: [],
};

describe("POST /api/quotes/[id]/pdf", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(401);
  });

  it("returns 404 when quote belongs to another user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(404);
  });

  it("returns 422 when quote has no line items", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockQuoteWithItems,
      lineItems: [],
    } as any);
    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("at least one line item");
  });

  it("returns 200 with url and updates quote.pdfUrl on success", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(mockQuoteWithItems as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({
      businessName: "Bob's Plumbing",
      brandColor: "#2563EB",
      logoUrl: null,
      licenseNumber: "PL-123",
      phone: "555-1234",
      email: "bob@example.com",
      paymentTerms: null,
    } as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({} as any);

    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.url).toBe("https://cdn.example.com/user1/pdf/q1.pdf");
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: { pdfUrl: "https://cdn.example.com/user1/pdf/q1.pdf" },
    });
    expect(generateQuotePdf).toHaveBeenCalledOnce();
    expect(uploadToR2).toHaveBeenCalledWith(
      "user-1/pdf/q1.pdf",
      expect.any(Buffer),
      "application/pdf"
    );
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  },
}));

import { GET } from "./route";
import { prisma } from "@/lib/db";

const mockProfile = {
  businessName: "Bob's Plumbing",
  logoUrl: null,
  licenseNumber: "PL-12345",
  phone: "555-1234",
  email: "bob@plumbing.com",
  brandColor: "#2563EB",
  paymentTerms: "Due on completion",
};

const mockQuote = {
  id: "q1",
  userId: "user-1",
  status: "SENT",
  quoteNumber: "QT-2601-0001",
  trade: "PLUMBING",
  viewToken: "tok_abc123",
  customerName: "John Smith",
  customerAddress: "123 Main St",
  customerPhone: "555-9876",
  customerEmail: "john@example.com",
  notes: "Replace water heater",
  taxRate: 8.25,
  depositType: "PERCENTAGE",
  depositValue: 25,
  termsText: "Due on completion",
  createdAt: new Date("2026-05-07"),
  viewedAt: null,
  signedAt: null,
  signatureData: null,
  signerIp: null,
  paidAt: null,
  stripePaymentIntentId: null,
  lineItems: [
    {
      id: "li1",
      description: "Water heater install",
      quantity: 1,
      unit: "each",
      unitPrice: 450,
      sortOrder: 0,
    },
  ],
  photos: [],
  user: { id: "user-1", profile: mockProfile },
};

describe("GET /api/quotes/view/[token]", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 404 when token does not match any quote", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(null);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/invalid-token") as never,
      { params: Promise.resolve({ token: "invalid-token" }) }
    );
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.error).toBe("Quote not found");
  });

  it("returns 200 with quote and contractor data", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockQuote,
      status: "VIEWED",
      viewedAt: new Date(),
    } as never);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.quote.quoteNumber).toBe("QT-2601-0001");
    expect(body.data.contractor.businessName).toBe("Bob's Plumbing");
  });

  it("updates status to VIEWED and sets viewedAt when status is SENT", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockQuote,
      status: "VIEWED",
      viewedAt: new Date(),
    } as never);
    await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: { status: "VIEWED", viewedAt: expect.any(Date) },
    });
  });

  it("does NOT update status when already VIEWED", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      status: "VIEWED",
      viewedAt: new Date(),
    } as never);
    await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it("does NOT update status when status is SIGNED", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      status: "SIGNED",
    } as never);
    await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it("does NOT expose sensitive fields in response", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockQuote,
      status: "VIEWED",
    } as never);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    const body = await res.json();
    const quoteData = body.data.quote;
    expect(quoteData.userId).toBeUndefined();
    expect(quoteData.signerIp).toBeUndefined();
    expect(quoteData.signatureData).toBeUndefined();
    expect(quoteData.stripePaymentIntentId).toBeUndefined();
  });

  it("returns empty photos array when quote has no photos", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      photos: [],
    } as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockQuote,
      status: "VIEWED",
    } as never);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    const body = await res.json();
    expect(body.data.quote.photos).toEqual([]);
  });

  it("handles null user.profile gracefully", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      user: { id: "user-1", profile: null },
    } as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockQuote,
      status: "VIEWED",
    } as never);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.contractor.businessName).toBe("");
    expect(body.data.contractor.brandColor).toBe("#2563EB");
  });

  it("reflects VIEWED status in response even when quote was SENT", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockQuote,
      status: "VIEWED",
      viewedAt: new Date(),
    } as never);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123") as never,
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    const body = await res.json();
    expect(body.data.quote.status).toBe("VIEWED");
  });
});

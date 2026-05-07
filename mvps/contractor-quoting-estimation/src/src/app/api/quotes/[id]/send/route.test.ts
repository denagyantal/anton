import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: { findFirst: vi.fn(), update: vi.fn() },
    profile: { findUnique: vi.fn() },
  },
}));
vi.mock("@/lib/twilio", () => ({ sendSms: vi.fn().mockResolvedValue(undefined) }));
vi.mock("@/lib/resend", () => ({
  sendPasswordResetEmail: vi.fn(),
  sendQuoteEmail: vi.fn().mockResolvedValue(undefined),
}));

import { POST } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { sendSms } from "@/lib/twilio";
import { sendQuoteEmail } from "@/lib/resend";

const mockDraftQuote = {
  id: "q1",
  userId: "user-1",
  status: "DRAFT",
  quoteNumber: "QT-2601-1234",
  trade: "PLUMBING",
  customerName: "Lisa Johnson",
  customerPhone: "+15551234567",
  customerEmail: "lisa@example.com",
  viewToken: "tok_abc123",
  pdfUrl: "https://cdn.example.com/user-1/pdf/q1.pdf",
  sentAt: null,
  _count: { lineItems: 2 },
};

describe("POST /api/quotes/[id]/send", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(401);
  });

  it("returns 404 when quote not found", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(404);
  });

  it("returns 422 when quote has no line items", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      _count: { lineItems: 0 },
    } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("at least one line item");
  });

  it("returns 422 when pdfUrl is null", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      pdfUrl: null,
    } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("generate the quote PDF");
  });

  it("returns 422 when SMS and customerPhone is null", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      customerPhone: null,
    } as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("phone number");
  });

  it("returns 422 when email and customerEmail is null", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      customerEmail: null,
    } as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "email" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("email address");
  });

  it("returns 400 when method is invalid", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(mockDraftQuote as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "whatsapp" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(400);
  });

  it("sends SMS and sets status to SENT for draft quote", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(mockDraftQuote as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const now = new Date();
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockDraftQuote,
      status: "SENT",
      sentAt: now,
    } as any);

    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });

    expect(res.status).toBe(200);
    expect(sendSms).toHaveBeenCalledWith(
      "+15551234567",
      expect.stringContaining("tok_abc123")
    );
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: expect.objectContaining({ status: "SENT", sentAt: expect.any(Date) }),
    });
    const body = await res.json();
    expect(body.data.status).toBe("SENT");
  });

  it("sends email and does NOT downgrade status when quote is VIEWED", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      status: "VIEWED",
    } as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const now = new Date();
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockDraftQuote,
      status: "VIEWED",
      sentAt: now,
    } as any);

    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "email" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });

    expect(res.status).toBe(200);
    expect(sendQuoteEmail).toHaveBeenCalledWith(
      expect.objectContaining({ to: "lisa@example.com" })
    );
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: { sentAt: expect.any(Date) },
    });
    const body = await res.json();
    expect(body.data.status).toBe("VIEWED");
  });
});

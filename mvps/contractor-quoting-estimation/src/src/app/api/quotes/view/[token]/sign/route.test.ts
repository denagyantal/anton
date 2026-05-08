import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  },
}));

vi.mock("@/lib/resend", () => ({
  resend: {
    emails: {
      send: vi.fn().mockResolvedValue({ id: "email-123" }),
    },
  },
}));

import { POST } from "./route";
import { prisma } from "@/lib/db";
import { resend } from "@/lib/resend";

const validSignatureData =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const mockQuote = {
  id: "q1",
  status: "VIEWED",
  quoteNumber: "QT-2601-0001",
  viewToken: "tok_abc123",
  customerName: "John Smith",
  signedAt: null,
  signatureData: null,
  signerIp: null,
  user: {
    id: "user-1",
    profile: {
      contactName: "Bob",
      businessName: "Bob's Plumbing",
      email: "bob@plumbing.com",
    },
  },
};

const makeRequest = (token: string, body: object) =>
  new Request(`http://localhost/api/quotes/view/${token}/sign`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }) as NextRequest;

describe("POST /api/quotes/view/[token]/sign", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 404 when token does not match any quote", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(null);
    const res = await POST(makeRequest("invalid", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "invalid" }),
    });
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.error.code).toBe("NOT_FOUND");
  });

  it("returns 409 when quote status is already SIGNED", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as never);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(409);
    const body = await res.json();
    expect(body.error.code).toBe("ALREADY_SIGNED");
  });

  it("returns 409 when quote status is PAID", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "PAID" } as never);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(409);
  });

  it("returns 400 when signatureData is missing", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    const res = await POST(makeRequest("tok_abc123", {}), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("VALIDATION_ERROR");
  });

  it("returns 400 when signatureData does not start with data:image/png;base64,", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    const res = await POST(makeRequest("tok_abc123", { signatureData: "not-a-valid-data-url" }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("VALIDATION_ERROR");
  });

  it("returns 200 and updates quote to SIGNED on valid submission", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as never);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.signed).toBe(true);
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: {
        status: "SIGNED",
        signedAt: expect.any(Date),
        signatureData: validSignatureData,
        signerIp: expect.any(String),
      },
    });
  });

  it("sends notification email to contractor on success", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as never);
    await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(resend.emails.send).toHaveBeenCalledWith(
      expect.objectContaining({ to: "bob@plumbing.com" })
    );
  });

  it("still returns 200 when resend.emails.send throws (fire-and-forget)", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as never);
    vi.mocked(resend.emails.send).mockRejectedValueOnce(new Error("Resend API down"));
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(200);
  });

  it("skips email when contractor profile email is null", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      user: { id: "user-1", profile: { ...mockQuote.user.profile, email: null } },
    } as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as never);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(200);
    expect(resend.emails.send).not.toHaveBeenCalled();
  });
});

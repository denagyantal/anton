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

vi.mock("@/lib/stripe", () => ({
  stripe: {
    webhooks: {
      constructEvent: vi.fn(),
    },
  },
}));

vi.mock("@/lib/resend", () => ({
  resend: {
    emails: {
      send: vi.fn().mockResolvedValue({ id: "email-456" }),
    },
  },
}));

import { POST } from "./route";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";

const mockCheckoutSession = {
  id: "cs_test_123",
  object: "checkout.session",
  payment_intent: "pi_test_abc",
  amount_total: 50000,
  metadata: {
    viewToken: "tok_abc123",
    quoteId: "q1",
    depositAmount: "500",
  },
};

const mockCompletedEvent = {
  type: "checkout.session.completed",
  data: { object: mockCheckoutSession },
};

const mockQuote = {
  id: "q1",
  status: "SIGNED",
  quoteNumber: "QT-2601-0001",
  viewToken: "tok_abc123",
  customerName: "John Smith",
  user: {
    id: "user-1",
    profile: {
      contactName: "Bob",
      businessName: "Bob's Plumbing",
      email: "bob@plumbing.com",
    },
  },
};

const makeWebhookRequest = (body: string, sig: string) =>
  new Request("http://localhost/api/webhooks/stripe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "stripe-signature": sig,
    },
    body,
  }) as NextRequest;

describe("POST /api/webhooks/stripe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.STRIPE_WEBHOOK_SECRET = "whsec_test_secret";
    vi.mocked(stripe.webhooks.constructEvent).mockReturnValue(mockCompletedEvent as never);
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "PAID" } as never);
  });

  it("returns 400 when stripe-signature header is missing", async () => {
    const req = new Request("http://localhost/api/webhooks/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mockCompletedEvent),
    }) as NextRequest;
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("MISSING_SIGNATURE");
  });

  it("returns 400 when stripe.webhooks.constructEvent throws invalid signature", async () => {
    vi.mocked(stripe.webhooks.constructEvent).mockImplementation(() => {
      throw new Error("No signatures found matching the expected signature for payload");
    });
    const res = await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "bad_sig"));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("INVALID_SIGNATURE");
  });

  it("returns 200 with { received: true } for non-checkout events without touching DB", async () => {
    vi.mocked(stripe.webhooks.constructEvent).mockReturnValue({
      type: "payment_intent.created",
      data: { object: {} },
    } as never);
    const res = await POST(makeWebhookRequest("{}", "valid_sig"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.received).toBe(true);
    expect(prisma.quote.findUnique).not.toHaveBeenCalled();
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it("returns 200 and updates quote status to PAID on valid checkout.session.completed", async () => {
    const res = await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "valid_sig"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.received).toBe(true);
    expect(prisma.quote.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: "PAID" }),
      })
    );
  });

  it("sets paidAt, depositAmountPaid, and stripePaymentIntentId correctly", async () => {
    await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "valid_sig"));
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: {
        status: "PAID",
        paidAt: expect.any(Date),
        depositAmountPaid: 500, // 50000 cents / 100
        stripePaymentIntentId: "pi_test_abc",
      },
    });
  });

  it("sends notification email to contractor on successful payment", async () => {
    await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "valid_sig"));
    expect(resend.emails.send).toHaveBeenCalledWith(
      expect.objectContaining({ to: "bob@plumbing.com" })
    );
  });

  it("returns 200 even when resend.emails.send throws (fire-and-forget)", async () => {
    vi.mocked(resend.emails.send).mockRejectedValueOnce(new Error("Resend API down"));
    const res = await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "valid_sig"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.received).toBe(true);
  });

  it("returns 200 with idempotent behavior when quote status is already PAID", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "PAID" } as never);
    const res = await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "valid_sig"));
    expect(res.status).toBe(200);
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it("returns 200 and logs but does NOT fail when quote not found for viewToken", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(null);
    const res = await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "valid_sig"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.received).toBe(true);
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it("returns 200 and does NOT fail when viewToken is missing from session metadata", async () => {
    vi.mocked(stripe.webhooks.constructEvent).mockReturnValue({
      type: "checkout.session.completed",
      data: {
        object: {
          ...mockCheckoutSession,
          metadata: {},
        },
      },
    } as never);
    const res = await POST(makeWebhookRequest("{}", "valid_sig"));
    expect(res.status).toBe(200);
    expect(prisma.quote.findUnique).not.toHaveBeenCalled();
  });

  it("returns 500 when prisma.quote.update throws so Stripe retries the webhook", async () => {
    vi.mocked(prisma.quote.update).mockRejectedValueOnce(new Error("DB connection lost"));
    const res = await POST(makeWebhookRequest(JSON.stringify(mockCompletedEvent), "valid_sig"));
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.error.code).toBe("INTERNAL_ERROR");
  });
});

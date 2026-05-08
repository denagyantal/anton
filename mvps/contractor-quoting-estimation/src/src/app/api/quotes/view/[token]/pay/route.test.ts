import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findUnique: vi.fn(),
    },
  },
}));

vi.mock("@/lib/stripe", () => ({
  stripe: {
    checkout: {
      sessions: {
        create: vi.fn(),
      },
    },
  },
}));

import { POST } from "./route";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";

const mockLineItems = [
  { id: "li-1", quantity: 2, unitPrice: 150, unit: "each", description: "Service A" },
  { id: "li-2", quantity: 1, unitPrice: 200, unit: "each", description: "Service B" },
];

const mockQuote = {
  id: "q1",
  status: "SIGNED",
  quoteNumber: "QT-2601-0001",
  viewToken: "tok_abc123",
  customerName: "John Smith",
  depositType: "FIXED",
  depositValue: 500,
  taxRate: 10,
  lineItems: mockLineItems,
  user: {
    id: "user-1",
    profile: {
      businessName: "Bob's Plumbing",
      email: "bob@plumbing.com",
    },
  },
};

const makePostRequest = (token: string) =>
  POST(
    new Request(`http://localhost/api/quotes/view/${token}/pay`, {
      method: "POST",
    }) as NextRequest,
    { params: Promise.resolve({ token }) }
  );

describe("POST /api/quotes/view/[token]/pay", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(stripe.checkout.sessions.create).mockResolvedValue({
      url: "https://checkout.stripe.com/pay/cs_test_123",
    } as never);
  });

  it("returns 404 when token does not match any quote", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(null);
    const res = await makePostRequest("nonexistent");
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.error.code).toBe("NOT_FOUND");
  });

  it("returns 400 when quote status is DRAFT", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "DRAFT" } as never);
    const res = await makePostRequest("tok_abc123");
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("INVALID_STATUS");
  });

  it("returns 400 when quote status is PAID", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "PAID" } as never);
    const res = await makePostRequest("tok_abc123");
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("INVALID_STATUS");
  });

  it("returns 400 when quote has no deposit configured", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      depositType: null,
      depositValue: null,
    } as never);
    const res = await makePostRequest("tok_abc123");
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("NO_DEPOSIT");
  });

  it("returns 200 with checkoutUrl when quote is SIGNED with FIXED deposit", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    const res = await makePostRequest("tok_abc123");
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.checkoutUrl).toBe("https://checkout.stripe.com/pay/cs_test_123");
  });

  it("calls stripe.checkout.sessions.create with correct unit_amount in cents for FIXED deposit", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    await makePostRequest("tok_abc123");
    expect(stripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        line_items: expect.arrayContaining([
          expect.objectContaining({
            price_data: expect.objectContaining({
              unit_amount: 50000, // $500.00 → 50000 cents
            }),
          }),
        ]),
      })
    );
  });

  it("calls stripe.checkout.sessions.create with correct metadata including viewToken and quoteId", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as never);
    await makePostRequest("tok_abc123");
    expect(stripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        metadata: expect.objectContaining({
          viewToken: "tok_abc123",
          quoteId: "q1",
        }),
      })
    );
  });

  it("returns 200 and calculates PERCENTAGE deposit correctly", async () => {
    // 2 * 150 + 1 * 200 = 500 subtotal
    // 500 * 10% tax = 50 → total = 550
    // 25% deposit = 550 * 0.25 = 137.50 → 13750 cents
    const percentageQuote = {
      ...mockQuote,
      depositType: "PERCENTAGE",
      depositValue: 25,
    };
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(percentageQuote as never);
    const res = await makePostRequest("tok_abc123");
    expect(res.status).toBe(200);
    expect(stripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        line_items: expect.arrayContaining([
          expect.objectContaining({
            price_data: expect.objectContaining({
              unit_amount: 13750, // 550 * 0.25 * 100 = 13750
            }),
          }),
        ]),
      })
    );
  });

  it("returns 400 when depositValue is null even if depositType is set", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      depositType: "FIXED",
      depositValue: null,
    } as never);
    const res = await makePostRequest("tok_abc123");
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error.code).toBe("NO_DEPOSIT");
  });
});

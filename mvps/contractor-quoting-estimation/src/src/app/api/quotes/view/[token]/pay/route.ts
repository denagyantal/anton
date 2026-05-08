import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;

    const quote = await prisma.quote.findUnique({
      where: { viewToken: token },
      include: {
        lineItems: true,
        user: { include: { profile: true } },
      },
    });

    if (!quote) {
      return NextResponse.json(
        { error: { code: "NOT_FOUND", message: "Quote not found" } },
        { status: 404 }
      );
    }

    if (quote.status !== "SIGNED") {
      return NextResponse.json(
        { error: { code: "INVALID_STATUS", message: "Quote must be signed before collecting a deposit" } },
        { status: 400 }
      );
    }

    if (!quote.depositType || quote.depositValue == null) {
      return NextResponse.json(
        { error: { code: "NO_DEPOSIT", message: "No deposit is configured for this quote" } },
        { status: 400 }
      );
    }

    const subtotal = quote.lineItems.reduce(
      (sum, li) => sum + li.quantity * li.unitPrice,
      0
    );
    const taxAmount = subtotal * (quote.taxRate / 100);
    const total = subtotal + taxAmount;

    const depositAmount =
      quote.depositType === "FIXED"
        ? quote.depositValue
        : total * (quote.depositValue / 100);

    const depositAmountCents = Math.round(depositAmount * 100);

    if (depositAmountCents <= 0) {
      return NextResponse.json(
        { error: { code: "INVALID_AMOUNT", message: "Deposit amount must be greater than zero" } },
        { status: 400 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Deposit for Quote ${quote.quoteNumber}`,
              description: quote.user.profile?.businessName ?? undefined,
            },
            unit_amount: depositAmountCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/quote/${token}?payment=success`,
      cancel_url: `${appUrl}/quote/${token}`,
      metadata: {
        viewToken: token,
        quoteId: quote.id,
        depositAmount: String(depositAmount),
      },
    });

    return NextResponse.json(
      { data: { checkoutUrl: session.url } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to create Stripe checkout session:", error);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Failed to initiate payment" } },
      { status: 500 }
    );
  }
}

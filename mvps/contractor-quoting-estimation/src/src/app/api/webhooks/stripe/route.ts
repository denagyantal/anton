import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: { code: "MISSING_SIGNATURE", message: "Missing stripe-signature header" } },
      { status: 400 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not configured");
    return NextResponse.json(
      { error: { code: "CONFIG_ERROR", message: "Webhook not configured" } },
      { status: 500 }
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json(
      { error: { code: "INVALID_SIGNATURE", message: "Invalid webhook signature" } },
      { status: 400 }
    );
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const viewToken = session.metadata?.viewToken;

  if (!viewToken) {
    console.error("Stripe webhook: missing viewToken in session metadata", session.id);
    return NextResponse.json({ received: true }, { status: 200 });
  }

  try {
    const quote = await prisma.quote.findUnique({
      where: { viewToken },
      include: { user: { include: { profile: true } } },
    });

    if (!quote) {
      console.error("Stripe webhook: quote not found for viewToken", viewToken);
      return NextResponse.json({ received: true }, { status: 200 });
    }

    if (quote.status === "PAID") {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    const paymentIntentId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.payment_intent?.id ?? null;

    const depositAmountPaid =
      session.amount_total != null
        ? session.amount_total / 100
        : parseFloat(session.metadata?.depositAmount ?? "0");

    await prisma.quote.update({
      where: { id: quote.id },
      data: {
        status: "PAID",
        paidAt: new Date(),
        depositAmountPaid,
        stripePaymentIntentId: paymentIntentId,
      },
    });

    const contractorEmail = quote.user.profile?.email;
    if (contractorEmail) {
      try {
        await resend.emails.send({
          from: "QuoteCraft <noreply@quotecraft.app>",
          to: contractorEmail,
          subject: `Deposit received for Quote ${quote.quoteNumber}`,
          html: `
            <p>Hi ${quote.user.profile?.contactName ?? quote.user.profile?.businessName ?? "there"},</p>
            <p>Great news! The deposit for quote <strong>${quote.quoteNumber}</strong> has been paid by <strong>${quote.customerName}</strong>.</p>
            <p>Amount paid: $${depositAmountPaid.toFixed(2)}</p>
            <p>Log in to QuoteCraft to view the payment details.</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send payment notification email:", emailError);
      }
    }
  } catch (dbError) {
    console.error("Stripe webhook: database update failed:", dbError);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Failed to process payment" } },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

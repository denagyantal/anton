import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { sendSms } from "@/lib/twilio";
import { sendQuoteEmail } from "@/lib/resend";
import { sendQuoteSchema } from "@/lib/validations/quote";
import { ZodError } from "zod";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;

    const body = await req.json();
    const { method } = sendQuoteSchema.parse(body);

    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: { _count: { select: { lineItems: true } } },
    });
    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    if (quote._count.lineItems === 0) {
      return NextResponse.json(
        { error: "Quote must have at least one line item before sending" },
        { status: 422 }
      );
    }

    if (!quote.pdfUrl) {
      return NextResponse.json(
        { error: "Please generate the quote PDF before sending" },
        { status: 422 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
    });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const quoteViewUrl = `${appUrl}/quote/${quote.viewToken}`;
    const businessName = profile?.businessName ?? "Your contractor";

    if (method === "sms") {
      if (!quote.customerPhone) {
        return NextResponse.json(
          { error: "Customer phone number is required to send via SMS" },
          { status: 422 }
        );
      }
      await sendSms(
        quote.customerPhone,
        `${businessName} sent you a quote. View it here: ${quoteViewUrl}`
      );
    } else {
      if (!quote.customerEmail) {
        return NextResponse.json(
          { error: "Customer email address is required to send via email" },
          { status: 422 }
        );
      }
      await sendQuoteEmail({
        to: quote.customerEmail,
        businessName,
        quoteNumber: quote.quoteNumber,
        quoteViewUrl,
        pdfUrl: quote.pdfUrl,
      });
    }

    const shouldUpdateStatus = quote.status === "DRAFT";
    const updatedQuote = await prisma.quote.update({
      where: { id },
      data: {
        sentAt: new Date(),
        ...(shouldUpdateStatus ? { status: "SENT" } : {}),
      },
    });

    return NextResponse.json({
      data: { status: updatedQuote.status, sentAt: updatedQuote.sentAt },
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Send quote error:", err);
    return NextResponse.json({ error: "Failed to send quote." }, { status: 500 });
  }
}

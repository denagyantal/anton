import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { generateQuoteNumber } from "@/lib/utils";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const source = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: { lineItems: { orderBy: { sortOrder: "asc" } } },
    });
    if (!source) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    const quoteNumber = generateQuoteNumber();
    const newQuote = await prisma.quote.create({
      data: {
        userId: session.user.id,
        quoteNumber,
        trade: source.trade,
        customerName: "",
        taxRate: source.taxRate,
        depositType: source.depositType,
        depositValue: source.depositValue,
        notes: source.notes,
        termsText: source.termsText,
      },
    });

    if (source.lineItems.length > 0) {
      await prisma.lineItem.createMany({
        data: source.lineItems.map((item, i) => ({
          quoteId: newQuote.id,
          description: item.description,
          quantity: item.quantity,
          unit: item.unit,
          unitPrice: item.unitPrice,
          isCustom: item.isCustom,
          sortOrder: i,
        })),
      });
    }

    const fullQuote = await prisma.quote.findFirst({
      where: { id: newQuote.id },
      include: { lineItems: { orderBy: { sortOrder: "asc" } } },
    });

    return NextResponse.json({ data: fullQuote }, { status: 201 });
  } catch (err) {
    console.error("Duplicate quote error:", err);
    return NextResponse.json(
      { error: "Failed to duplicate quote." },
      { status: 500 }
    );
  }
}

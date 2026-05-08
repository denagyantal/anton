import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { createQuoteSchema } from "@/lib/validations/quote";
import { calculateTotal, generateQuoteNumber } from "@/lib/utils";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = createQuoteSchema.parse(body);
    const quoteNumber = generateQuoteNumber();

    const quote = await prisma.quote.create({
      data: {
        trade: data.trade,
        quoteNumber,
        userId: session.user.id,
        customerName: "",
      },
    });

    return NextResponse.json({ data: quote }, { status: 201 });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Create quote error:", err);
    return NextResponse.json(
      { error: "Failed to create quote." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const search = new URL(request.url).searchParams.get("search") ?? "";
    const quotes = await prisma.quote.findMany({
      where: {
        userId: session.user.id,
        ...(search
          ? { customerName: { contains: search, mode: "insensitive" } }
          : {}),
      },
      orderBy: { updatedAt: "desc" },
      include: {
        lineItems: { select: { quantity: true, unitPrice: true } },
      },
    });

    const quotesWithTotals = quotes.map(({ lineItems, ...quote }) => {
      const { total } = calculateTotal(lineItems, quote.taxRate);
      return { ...quote, total };
    });

    return NextResponse.json({ data: quotesWithTotals });
  } catch (err) {
    console.error("List quotes error:", err);
    return NextResponse.json(
      { error: "Failed to fetch quotes." },
      { status: 500 }
    );
  }
}

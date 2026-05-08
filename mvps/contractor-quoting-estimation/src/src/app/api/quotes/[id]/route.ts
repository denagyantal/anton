import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { updateQuoteSchema } from "@/lib/validations/quote";
import { ZodError } from "zod";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
    });
    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }
    if (quote.status !== "DRAFT") {
      return NextResponse.json(
        { error: "Only draft quotes can be deleted" },
        { status: 403 }
      );
    }
    await prisma.quote.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("Delete quote error:", err);
    return NextResponse.json(
      { error: "Failed to delete quote." },
      { status: 500 }
    );
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: {
        lineItems: { orderBy: { sortOrder: "asc" } },
        photos: { orderBy: { sortOrder: "asc" } },
      },
    });

    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    return NextResponse.json({ data: quote });
  } catch (err) {
    console.error("Get quote error:", err);
    return NextResponse.json(
      { error: "Failed to fetch quote." },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const data = updateQuoteSchema.parse(body);

    const existing = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!existing) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    await prisma.$transaction([
      prisma.lineItem.deleteMany({ where: { quoteId: id } }),
      prisma.quote.update({
        where: { id },
        data: {
          customerName: data.customerName,
          customerAddress: data.customerAddress ?? null,
          customerPhone: data.customerPhone ?? null,
          customerEmail: data.customerEmail ?? null,
          notes: data.notes ?? null,
          taxRate: data.taxRate,
          depositType: data.depositType ?? null,
          depositValue: data.depositValue ?? null,
          termsText: data.termsText ?? null,
        },
      }),
      ...data.lineItems.map((item, i) =>
        prisma.lineItem.create({
          data: {
            quoteId: id,
            description: item.description,
            quantity: item.quantity,
            unit: item.unit,
            unitPrice: item.unitPrice,
            isCustom: item.isCustom,
            sortOrder: i,
          },
        })
      ),
    ]);

    const fullQuote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: { lineItems: { orderBy: { sortOrder: "asc" } } },
    });

    return NextResponse.json({ data: fullQuote });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Update quote error:", err);
    return NextResponse.json(
      { error: "Failed to update quote." },
      { status: 500 }
    );
  }
}

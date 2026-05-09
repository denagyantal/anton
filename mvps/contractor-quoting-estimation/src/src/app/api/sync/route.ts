import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { syncQuoteSchema } from "@/lib/validations/quote";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = syncQuoteSchema.parse(body);

    // Check for conflict: does a quote with this quoteNumber already exist for this user?
    const existing = await prisma.quote.findFirst({
      where: { userId: session.user.id, quoteNumber: data.quoteNumber },
      select: { id: true, status: true },
    });

    if (existing) {
      // Conflict resolution: last-write-wins for DRAFT; skip for non-DRAFT
      if (existing.status !== "DRAFT") {
        // Server-authoritative for SENT/SIGNED/PAID — skip client write
        return NextResponse.json(
          { data: { id: existing.id, quoteNumber: data.quoteNumber, conflict: "skipped" } },
          { status: 200 }
        );
      }
      // Update existing DRAFT (last-write-wins)
      const updated = await prisma.quote.update({
        where: { id: existing.id },
        data: {
          customerName: data.customerName,
          customerAddress: data.customerAddress,
          customerPhone: data.customerPhone,
          customerEmail: data.customerEmail,
          notes: data.notes,
          taxRate: data.taxRate,
          depositType: data.depositType ?? null,
          depositValue: data.depositValue ?? null,
          termsText: data.termsText,
          lineItems: {
            deleteMany: {},
            create: data.lineItems.map((item, i) => ({
              description: item.description,
              quantity: item.quantity,
              unit: item.unit,
              unitPrice: item.unitPrice,
              sortOrder: i,
              isCustom: item.isCustom,
            })),
          },
          ...(data.photoUrls.length > 0 && {
            photos: {
              deleteMany: {},
              create: data.photoUrls.map((url, i) => ({
                url,
                sortOrder: i,
              })),
            },
          }),
        },
        select: { id: true, quoteNumber: true },
      });
      return NextResponse.json({ data: { ...updated, conflict: "merged" } }, { status: 200 });
    }

    // Create new quote from offline data
    const quote = await prisma.quote.create({
      data: {
        userId: session.user.id,
        trade: data.trade,
        quoteNumber: data.quoteNumber,
        customerName: data.customerName,
        customerAddress: data.customerAddress,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail,
        notes: data.notes,
        taxRate: data.taxRate,
        depositType: data.depositType ?? null,
        depositValue: data.depositValue ?? null,
        termsText: data.termsText,
        lineItems: {
          create: data.lineItems.map((item, i) => ({
            description: item.description,
            quantity: item.quantity,
            unit: item.unit,
            unitPrice: item.unitPrice,
            sortOrder: i,
            isCustom: item.isCustom,
          })),
        },
        ...(data.photoUrls.length > 0 && {
          photos: {
            create: data.photoUrls.map((url, i) => ({
              url,
              sortOrder: i,
            })),
          },
        }),
      },
      select: { id: true, quoteNumber: true },
    });

    return NextResponse.json({ data: quote }, { status: 201 });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Sync error:", err);
    return NextResponse.json({ error: "Sync failed. Will retry." }, { status: 500 });
  }
}

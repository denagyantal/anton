import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;

    const quote = await prisma.quote.findUnique({
      where: { viewToken: token },
      include: {
        lineItems: { orderBy: { sortOrder: "asc" } },
        photos: { orderBy: { sortOrder: "asc" } },
        user: {
          include: { profile: true },
        },
      },
    });

    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    if (quote.status === "SENT") {
      await prisma.quote.update({
        where: { id: quote.id },
        data: { status: "VIEWED", viewedAt: new Date() },
      });
    }

    const responseData = {
      quote: {
        id: quote.id,
        quoteNumber: quote.quoteNumber,
        trade: quote.trade,
        status: quote.status === "SENT" ? "VIEWED" : quote.status,
        customerName: quote.customerName,
        customerAddress: quote.customerAddress,
        customerPhone: quote.customerPhone,
        customerEmail: quote.customerEmail,
        notes: quote.notes,
        taxRate: quote.taxRate,
        depositType: quote.depositType,
        depositValue: quote.depositValue,
        termsText: quote.termsText,
        createdAt: quote.createdAt,
        lineItems: quote.lineItems.map((li) => ({
          id: li.id,
          description: li.description,
          quantity: li.quantity,
          unit: li.unit,
          unitPrice: li.unitPrice,
          sortOrder: li.sortOrder,
        })),
        photos: quote.photos.map((p) => ({
          id: p.id,
          url: p.url,
          thumbnail: p.thumbnail,
          sortOrder: p.sortOrder,
          caption: p.caption,
        })),
      },
      contractor: {
        businessName: quote.user.profile?.businessName ?? "",
        logoUrl: quote.user.profile?.logoUrl ?? null,
        licenseNumber: quote.user.profile?.licenseNumber ?? null,
        phone: quote.user.profile?.phone ?? null,
        email: quote.user.profile?.email ?? null,
        brandColor: quote.user.profile?.brandColor ?? "#2563EB",
        paymentTerms: quote.user.profile?.paymentTerms ?? null,
      },
    };

    return NextResponse.json({ data: responseData }, { status: 200 });
  } catch (err) {
    console.error("Failed to load quote:", err);
    return NextResponse.json(
      { error: "Failed to load quote." },
      { status: 500 }
    );
  }
}

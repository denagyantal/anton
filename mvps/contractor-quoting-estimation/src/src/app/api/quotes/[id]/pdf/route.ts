import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { uploadToR2 } from "@/lib/r2";
import { generateQuotePdf } from "@/lib/pdf-generator";
import type { QuotePdfData, ProfilePdfData } from "@/types";

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

    if (quote.lineItems.length === 0) {
      return NextResponse.json(
        { error: "Quote must have at least one line item to generate a PDF" },
        { status: 422 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
    });

    const quoteData: QuotePdfData = {
      quoteNumber: quote.quoteNumber,
      trade: quote.trade as QuotePdfData["trade"],
      createdAt: quote.createdAt,
      customerName: quote.customerName,
      customerAddress: quote.customerAddress,
      customerPhone: quote.customerPhone,
      customerEmail: quote.customerEmail,
      notes: quote.notes,
      taxRate: quote.taxRate,
      depositType: quote.depositType as QuotePdfData["depositType"],
      depositValue: quote.depositValue,
      termsText: quote.termsText,
      lineItems: quote.lineItems.map((li) => ({
        description: li.description,
        quantity: li.quantity,
        unit: li.unit,
        unitPrice: li.unitPrice,
      })),
      photos: quote.photos.map((p) => ({ url: p.url, sortOrder: p.sortOrder })),
    };

    const profileData: ProfilePdfData | null = profile
      ? {
          businessName: profile.businessName,
          logoUrl: profile.logoUrl,
          licenseNumber: profile.licenseNumber,
          phone: profile.phone,
          email: profile.email,
          brandColor: profile.brandColor,
          paymentTerms: profile.paymentTerms,
        }
      : null;

    const buffer = await generateQuotePdf(quoteData, profileData);
    const key = `${session.user.id}/pdf/${id}.pdf`;
    const url = await uploadToR2(key, buffer, "application/pdf");

    await prisma.quote.update({ where: { id }, data: { pdfUrl: url } });

    return NextResponse.json({ data: { url } });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json({ error: "Failed to generate PDF." }, { status: 500 });
  }
}

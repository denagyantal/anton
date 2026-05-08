import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { resend } from "@/lib/resend";
import { submitSignatureSchema } from "@/lib/validations/signature";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;

    const body = await request.json();
    const validated = submitSignatureSchema.parse(body);

    const quote = await prisma.quote.findUnique({
      where: { viewToken: token },
      include: { user: { include: { profile: true } } },
    });

    if (!quote) {
      return NextResponse.json(
        { error: { code: "NOT_FOUND", message: "Quote not found" } },
        { status: 404 }
      );
    }

    if (quote.status === "SIGNED" || quote.status === "PAID") {
      return NextResponse.json(
        { error: { code: "ALREADY_SIGNED", message: "This quote has already been signed" } },
        { status: 409 }
      );
    }

    const signerIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    await prisma.quote.update({
      where: { id: quote.id },
      data: {
        status: "SIGNED",
        signedAt: new Date(),
        signatureData: validated.signatureData,
        signerIp,
      },
    });

    const contractorEmail = quote.user.profile?.email;
    if (contractorEmail) {
      try {
        await resend.emails.send({
          from: "QuoteCraft <noreply@quotecraft.app>",
          to: contractorEmail,
          subject: `Quote ${quote.quoteNumber} has been signed`,
          html: `
            <p>Hi ${quote.user.profile?.contactName ?? quote.user.profile?.businessName ?? "there"},</p>
            <p>Great news! Your customer <strong>${quote.customerName}</strong> has signed quote <strong>${quote.quoteNumber}</strong>.</p>
            <p>Signed at: ${new Date().toLocaleString()}</p>
            <p>Log in to QuoteCraft to view the signed quote and collect the deposit.</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send signature notification email:", emailError);
      }
    }

    return NextResponse.json(
      { data: { signed: true, signedAt: new Date() } },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: { code: "VALIDATION_ERROR", message: error.issues[0]?.message ?? "Invalid input" } },
        { status: 400 }
      );
    }
    console.error("Failed to process signature:", error);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Failed to process signature" } },
      { status: 500 }
    );
  }
}

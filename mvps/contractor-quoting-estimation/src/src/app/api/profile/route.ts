import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { profileSchema } from "@/lib/validations/profile";
import { ZodError } from "zod";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
    });

    if (!profile) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json(profile);
  } catch (err) {
    console.error("Get profile error:", err);
    return NextResponse.json(
      { error: "Failed to fetch profile." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = profileSchema.parse(body);

    const profile = await prisma.profile.upsert({
      where: { userId: session.user.id },
      update: {
        businessName: data.businessName,
        contactName: data.contactName ?? null,
        phone: data.phone ?? null,
        email: data.email ?? null,
        licenseNumber: data.licenseNumber ?? null,
        logoUrl: data.logoUrl ?? null,
        defaultTaxRate: data.defaultTaxRate,
        paymentTerms: data.paymentTerms ?? null,
        brandColor: data.brandColor,
        trade: data.trade,
      },
      create: {
        userId: session.user.id,
        businessName: data.businessName,
        contactName: data.contactName ?? null,
        phone: data.phone ?? null,
        email: data.email ?? null,
        licenseNumber: data.licenseNumber ?? null,
        logoUrl: data.logoUrl ?? null,
        defaultTaxRate: data.defaultTaxRate,
        paymentTerms: data.paymentTerms ?? null,
        brandColor: data.brandColor,
        trade: data.trade,
      },
    });

    return NextResponse.json(profile);
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Save profile error:", err);
    return NextResponse.json(
      { error: "Failed to save profile." },
      { status: 500 }
    );
  }
}

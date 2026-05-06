import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { attachPhotoSchema } from "@/lib/validations/photo";
import { ZodError } from "zod";

const MAX_PHOTOS = 10;

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

    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
    });
    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    const count = await prisma.quotePhoto.count({ where: { quoteId: id } });
    if (count >= MAX_PHOTOS) {
      return NextResponse.json(
        { error: "Maximum of 10 photos per quote" },
        { status: 422 }
      );
    }

    const body = await req.json();
    const data = attachPhotoSchema.parse(body);

    const photo = await prisma.quotePhoto.create({
      data: {
        quoteId: id,
        url: data.url,
        sortOrder: data.sortOrder ?? count,
      },
    });

    return NextResponse.json({ data: photo }, { status: 201 });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Attach photo error:", err);
    return NextResponse.json({ error: "Failed to attach photo." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { deleteFromR2 } from "@/lib/r2";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; photoId: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, photoId } = await params;

    const photo = await prisma.quotePhoto.findFirst({
      where: { id: photoId, quote: { id, userId: session.user.id } },
    });
    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    try {
      const r2Key = photo.url.replace(`${process.env.R2_PUBLIC_URL}/`, "");
      await deleteFromR2(r2Key);
    } catch (r2Err) {
      console.error("R2 delete failed (non-fatal):", r2Err);
    }

    await prisma.quotePhoto.delete({ where: { id: photoId } });

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("Delete photo error:", err);
    return NextResponse.json({ error: "Failed to delete photo." }, { status: 500 });
  }
}

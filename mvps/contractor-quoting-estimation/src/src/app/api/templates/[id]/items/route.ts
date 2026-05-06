import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") ?? "";

  try {
    const items = await prisma.templateItem.findMany({
      where: {
        templateId: id,
        ...(search
          ? {
              OR: [
                { description: { contains: search, mode: "insensitive" } },
                { category: { contains: search, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ data: items });
  } catch (err) {
    console.error("Get template items error:", err);
    return NextResponse.json(
      { error: "Failed to fetch template items." },
      { status: 500 }
    );
  }
}

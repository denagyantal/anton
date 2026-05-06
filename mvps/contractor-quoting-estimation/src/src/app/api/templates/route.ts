import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Trade } from "@prisma/client";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const trade = searchParams.get("trade");

  if (!trade || !Object.values(Trade).includes(trade as Trade)) {
    return NextResponse.json(
      { error: "Invalid or missing trade parameter" },
      { status: 400 }
    );
  }

  try {
    const templates = await prisma.template.findMany({
      where: { trade: trade as Trade, isSystem: true },
    });
    return NextResponse.json({ data: templates });
  } catch (err) {
    console.error("Get templates error:", err);
    return NextResponse.json(
      { error: "Failed to fetch templates." },
      { status: 500 }
    );
  }
}

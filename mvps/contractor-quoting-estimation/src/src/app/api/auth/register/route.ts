import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z, ZodError } from "zod";
import { prisma } from "@/lib/db";
import { emailSchema, passwordSchema } from "@/lib/validations/common";

// Use a standalone schema (no refine) for the API endpoint
const registerApiSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = registerApiSchema.parse(body);

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Hash password with 12 rounds
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, passwordHash },
      select: { id: true, email: true, createdAt: true },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

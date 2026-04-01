import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock dependencies to avoid DB connections in unit tests
vi.mock("@/lib/db", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
  },
}));

vi.mock("bcrypt", () => ({
  default: {
    hash: vi.fn().mockResolvedValue("hashed_password"),
    compare: vi.fn().mockResolvedValue(true),
  },
  hash: vi.fn().mockResolvedValue("hashed_password"),
}));

import { POST } from "./route";
import { prisma } from "@/lib/db";

const mockFindUnique = prisma.user.findUnique as ReturnType<typeof vi.fn>;
const mockCreate = prisma.user.create as ReturnType<typeof vi.fn>;

function makeRequest(body: unknown) {
  return new Request("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/auth/register", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 201 on successful registration", async () => {
    mockFindUnique.mockResolvedValue(null);
    mockCreate.mockResolvedValue({
      id: "cluid1",
      email: "test@example.com",
      createdAt: new Date(),
    });

    const req = makeRequest({
      email: "test@example.com",
      password: "password123",
      confirmPassword: "password123",
    });

    const res = await POST(req as never);
    expect(res.status).toBe(201);

    const body = await res.json();
    expect(body.user).toBeDefined();
    expect(body.user.email).toBe("test@example.com");
  });

  it("returns 409 if email already exists", async () => {
    mockFindUnique.mockResolvedValue({
      id: "existing",
      email: "test@example.com",
    });

    const req = makeRequest({
      email: "test@example.com",
      password: "password123",
      confirmPassword: "password123",
    });

    const res = await POST(req as never);
    expect(res.status).toBe(409);

    const body = await res.json();
    expect(body.error).toContain("already exists");
  });

  it("returns 400 for invalid email", async () => {
    const req = makeRequest({
      email: "not-an-email",
      password: "password123",
      confirmPassword: "password123",
    });

    const res = await POST(req as never);
    expect(res.status).toBe(400);
  });

  it("returns 400 for short password", async () => {
    const req = makeRequest({
      email: "test@example.com",
      password: "short",
      confirmPassword: "short",
    });

    const res = await POST(req as never);
    expect(res.status).toBe(400);
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({
  auth: vi.fn(),
}));

vi.mock("@/lib/db", () => ({
  prisma: {
    template: {
      findMany: vi.fn(),
    },
  },
}));

import { GET } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

const mockAuth = auth as ReturnType<typeof vi.fn>;
const mockFindMany = prisma.template.findMany as ReturnType<typeof vi.fn>;

describe("GET /api/templates", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    mockAuth.mockResolvedValue(null);
    const req = new Request("http://localhost/api/templates?trade=PLUMBING");
    const res = await GET(req as never);
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toBe("Unauthorized");
  });

  it("returns 400 for missing trade parameter", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    const req = new Request("http://localhost/api/templates");
    const res = await GET(req as never);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/invalid|missing/i);
  });

  it("returns 400 for invalid trade value", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    const req = new Request("http://localhost/api/templates?trade=INVALID");
    const res = await GET(req as never);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/invalid|missing/i);
  });

  it("returns system templates for valid trade PLUMBING", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockResolvedValue([
      { id: "tpl-1", trade: "PLUMBING", name: "Standard Plumbing", isSystem: true },
    ]);
    const req = new Request("http://localhost/api/templates?trade=PLUMBING");
    const res = await GET(req as never);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toHaveLength(1);
    expect(body.data[0].trade).toBe("PLUMBING");
  });

  it("calls findMany with isSystem:true filter", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockResolvedValue([]);
    const req = new Request("http://localhost/api/templates?trade=ELECTRICAL");
    await GET(req as never);
    expect(mockFindMany).toHaveBeenCalledWith({
      where: { trade: "ELECTRICAL", isSystem: true },
    });
  });

  it("returns 200 with empty array when no templates exist for trade", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockResolvedValue([]);
    const req = new Request("http://localhost/api/templates?trade=HVAC");
    const res = await GET(req as never);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toEqual([]);
  });

  it("returns 500 on database error", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockRejectedValue(new Error("DB connection failed"));
    const req = new Request("http://localhost/api/templates?trade=PAINTING");
    const res = await GET(req as never);
    expect(res.status).toBe(500);
  });
});

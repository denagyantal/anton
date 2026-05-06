import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({
  auth: vi.fn(),
}));

vi.mock("@/lib/db", () => ({
  prisma: {
    templateItem: {
      findMany: vi.fn(),
    },
  },
}));

import { GET } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

const mockAuth = auth as ReturnType<typeof vi.fn>;
const mockFindMany = prisma.templateItem.findMany as ReturnType<typeof vi.fn>;

function makeRequest(id: string, search?: string) {
  const url = search
    ? `http://localhost/api/templates/${id}/items?search=${encodeURIComponent(search)}`
    : `http://localhost/api/templates/${id}/items`;
  return new Request(url);
}

describe("GET /api/templates/[id]/items", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    mockAuth.mockResolvedValue(null);
    const req = makeRequest("tpl-1");
    const res = await GET(req as never, { params: Promise.resolve({ id: "tpl-1" }) });
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toBe("Unauthorized");
  });

  it("returns items ordered by sortOrder when no search", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockResolvedValue([
      { id: "item-1", description: "Toilet Installation", category: "Fixtures", sortOrder: 1 },
      { id: "item-2", description: "Faucet Installation", category: "Fixtures", sortOrder: 2 },
    ]);
    const req = makeRequest("tpl-1");
    const res = await GET(req as never, { params: Promise.resolve({ id: "tpl-1" }) });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toHaveLength(2);
  });

  it("filters items by search term on description", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockResolvedValue([
      { id: "item-1", description: "Water Heater Installation", category: "Fixtures", sortOrder: 0 },
    ]);
    const req = makeRequest("tpl-1", "water heater");
    await GET(req as never, { params: Promise.resolve({ id: "tpl-1" }) });
    expect(mockFindMany).toHaveBeenCalledWith({
      where: {
        templateId: "tpl-1",
        OR: [
          { description: { contains: "water heater", mode: "insensitive" } },
          { category: { contains: "water heater", mode: "insensitive" } },
        ],
      },
      orderBy: { sortOrder: "asc" },
    });
  });

  it("returns items with no search filter when search is empty", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockResolvedValue([]);
    const req = makeRequest("tpl-1");
    await GET(req as never, { params: Promise.resolve({ id: "tpl-1" }) });
    expect(mockFindMany).toHaveBeenCalledWith({
      where: { templateId: "tpl-1" },
      orderBy: { sortOrder: "asc" },
    });
  });

  it("returns 500 on database error", async () => {
    mockAuth.mockResolvedValue({ user: { id: "user-1" } });
    mockFindMany.mockRejectedValue(new Error("DB error"));
    const req = makeRequest("tpl-1");
    const res = await GET(req as never, { params: Promise.resolve({ id: "tpl-1" }) });
    expect(res.status).toBe(500);
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: { findFirst: vi.fn() },
    quotePhoto: {
      count: vi.fn(),
      create: vi.fn(),
    },
  },
}));

import { POST } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

describe("POST /api/quotes/[id]/photos", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/photos", {
      method: "POST",
      body: JSON.stringify({ url: "https://cdn.example.com/photo.jpg" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(401);
  });

  it("returns 404 when quote belongs to another user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/photos", {
      method: "POST",
      body: JSON.stringify({ url: "https://cdn.example.com/photo.jpg" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(404);
  });

  it("returns 422 when quote already has 10 photos", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({ id: "q1" } as any);
    vi.mocked(prisma.quotePhoto.count).mockResolvedValue(10);
    const req = new Request("http://localhost/api/quotes/q1/photos", {
      method: "POST",
      body: JSON.stringify({ url: "https://cdn.example.com/photo.jpg" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toMatch(/maximum/i);
  });

  it("returns 400 when body is invalid (missing url)", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({ id: "q1" } as any);
    vi.mocked(prisma.quotePhoto.count).mockResolvedValue(0);
    const req = new Request("http://localhost/api/quotes/q1/photos", {
      method: "POST",
      body: JSON.stringify({ sortOrder: 0 }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(400);
  });

  it("returns 201 and creates photo record", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({ id: "q1" } as any);
    vi.mocked(prisma.quotePhoto.count).mockResolvedValue(2);
    vi.mocked(prisma.quotePhoto.create).mockResolvedValue({
      id: "photo-1",
      quoteId: "q1",
      url: "https://cdn.example.com/photo.jpg",
      thumbnail: null,
      sortOrder: 2,
      caption: null,
    } as any);
    const req = new Request("http://localhost/api/quotes/q1/photos", {
      method: "POST",
      body: JSON.stringify({ url: "https://cdn.example.com/photo.jpg", sortOrder: 2 }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.data.id).toBe("photo-1");
  });
});

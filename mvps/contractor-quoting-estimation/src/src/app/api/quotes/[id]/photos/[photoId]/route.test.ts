import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quotePhoto: {
      findFirst: vi.fn(),
      delete: vi.fn(),
    },
  },
}));
vi.mock("@/lib/r2", () => ({ deleteFromR2: vi.fn().mockResolvedValue(undefined) }));

import { DELETE } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { deleteFromR2 } from "@/lib/r2";

describe("DELETE /api/quotes/[id]/photos/[photoId]", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/photos/photo-1", {
      method: "DELETE",
    });
    const res = await DELETE(req as any, {
      params: Promise.resolve({ id: "q1", photoId: "photo-1" }),
    });
    expect(res.status).toBe(401);
  });

  it("returns 404 when photo belongs to another user's quote", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quotePhoto.findFirst).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/photos/photo-1", {
      method: "DELETE",
    });
    const res = await DELETE(req as any, {
      params: Promise.resolve({ id: "q1", photoId: "photo-1" }),
    });
    expect(res.status).toBe(404);
  });

  it("returns 204 and removes photo record and calls deleteFromR2", async () => {
    process.env.R2_PUBLIC_URL = "https://cdn.example.com";
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quotePhoto.findFirst).mockResolvedValue({
      id: "photo-1",
      quoteId: "q1",
      url: "https://cdn.example.com/user-1/photo/abc.jpg",
      thumbnail: null,
      sortOrder: 0,
      caption: null,
    } as any);
    vi.mocked(prisma.quotePhoto.delete).mockResolvedValue({} as any);

    const req = new Request("http://localhost/api/quotes/q1/photos/photo-1", {
      method: "DELETE",
    });
    const res = await DELETE(req as any, {
      params: Promise.resolve({ id: "q1", photoId: "photo-1" }),
    });

    expect(res.status).toBe(204);
    expect(vi.mocked(deleteFromR2)).toHaveBeenCalledWith("user-1/photo/abc.jpg");
    expect(vi.mocked(prisma.quotePhoto.delete)).toHaveBeenCalledWith({
      where: { id: "photo-1" },
    });
  });

  it("still deletes DB record even if R2 delete fails", async () => {
    process.env.R2_PUBLIC_URL = "https://cdn.example.com";
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quotePhoto.findFirst).mockResolvedValue({
      id: "photo-1",
      quoteId: "q1",
      url: "https://cdn.example.com/user-1/photo/abc.jpg",
      thumbnail: null,
      sortOrder: 0,
      caption: null,
    } as any);
    vi.mocked(deleteFromR2).mockRejectedValueOnce(new Error("R2 unavailable"));
    vi.mocked(prisma.quotePhoto.delete).mockResolvedValue({} as any);

    const req = new Request("http://localhost/api/quotes/q1/photos/photo-1", {
      method: "DELETE",
    });
    const res = await DELETE(req as any, {
      params: Promise.resolve({ id: "q1", photoId: "photo-1" }),
    });

    expect(res.status).toBe(204);
    expect(vi.mocked(prisma.quotePhoto.delete)).toHaveBeenCalled();
  });
});

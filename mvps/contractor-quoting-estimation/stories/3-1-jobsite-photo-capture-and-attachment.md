# Story 3.1: Jobsite Photo Capture & Attachment

Status: done

## Story

As a contractor,
I want to take photos on the jobsite and attach them to my quote,
so that customers can see exactly what I'm quoting on and I have visual documentation.

## Acceptance Criteria

1. **Given** I am editing a quote at `/quotes/[id]`
   **When** I tap the camera button
   **Then** the device camera opens for direct photo capture using an `<input type="file" accept="image/*" capture="environment">` element

2. **Given** I am editing a quote at `/quotes/[id]`
   **When** I tap the gallery button
   **Then** the device photo gallery opens for selection using an `<input type="file" accept="image/*">` element (no `capture` attribute)

3. **Given** I capture or select a photo
   **When** the photo is processed
   **Then** it is compressed client-side to under 500KB using `compressImage()` from `@/lib/image-compress`
   **And** the compressed file is uploaded to Cloudflare R2 via `POST /api/photos/upload` (FormData with `file` and `type: "photo"`)
   **And** a `QuotePhoto` record is created via `POST /api/quotes/[id]/photos` with the returned URL and `sortOrder = current photos.length`
   **And** the photo appears as a thumbnail in the quote edit view

4. **Given** I have attached photos to a quote
   **When** I view the quote edit screen
   **Then** I see thumbnail previews of all attached photos in a grid layout

5. **Given** I can see a photo thumbnail
   **When** I tap the remove button on a photo
   **Then** `DELETE /api/quotes/[id]/photos/[photoId]` is called
   **And** the `QuotePhoto` record is removed from the database
   **And** the photo file is deleted from Cloudflare R2 via `deleteFromR2()`
   **And** the thumbnail disappears from the quote edit view

6. **Given** I have attached 10 photos to a quote
   **When** I view the photo section
   **Then** both the camera button and gallery button are disabled
   **And** I see the message "Maximum of 10 photos reached"
   **And** `POST /api/quotes/[id]/photos` returns 422 if called directly when count is already 10

7. **Given** `POST /api/quotes/[id]/photos` is called without authentication
   **When** the request is processed
   **Then** the response is 401

8. **Given** `POST /api/quotes/[id]/photos` is called for a quote belonging to a different user
   **When** the request is processed
   **Then** the response is 404

9. **Given** `DELETE /api/quotes/[id]/photos/[photoId]` is called without authentication
   **When** the request is processed
   **Then** the response is 401

10. **Given** `DELETE /api/quotes/[id]/photos/[photoId]` is called for a photo belonging to another user's quote
    **When** the request is processed
    **Then** the response is 404

## Tasks / Subtasks

- [x] Task 1: Create Zod validation schema for photo attachment (AC: #3, #6)
  - [x] 1.1 Create `src/lib/validations/photo.ts`
  - [x] 1.2 Export `attachPhotoSchema` — validates `{ url: z.string().url(), sortOrder: z.number().int().min(0).optional() }`
  - [x] 1.3 No other validation schemas needed for this story

- [x] Task 2: Create `POST /api/quotes/[id]/photos` route (AC: #3, #6, #7, #8)
  - [x] 2.1 Create directory `src/app/api/quotes/[id]/photos/` and file `route.ts`
  - [x] 2.2 Export `async function POST` — call `auth()`, return 401 if no session
  - [x] 2.3 `await params` to get `{ id }` (Next.js 16 — params is a Promise)
  - [x] 2.4 Verify quote ownership: `prisma.quote.findFirst({ where: { id, userId: session.user.id } })` — return 404 if not found
  - [x] 2.5 Count existing photos: `prisma.quotePhoto.count({ where: { quoteId: id } })` — if >= 10, return 422 with `{ error: "Maximum of 10 photos per quote" }`
  - [x] 2.6 Parse body with `attachPhotoSchema.parse(body)` — return 400 on ZodError with `err.issues[0]?.message`
  - [x] 2.7 Create `prisma.quotePhoto.create({ data: { quoteId: id, url: data.url, sortOrder: data.sortOrder ?? 0 } })`
  - [x] 2.8 Return `NextResponse.json({ data: photo }, { status: 201 })`
  - [x] 2.9 Wrap in try/catch — return 500 on unexpected error

- [x] Task 3: Create `DELETE /api/quotes/[id]/photos/[photoId]` route (AC: #5, #9, #10)
  - [x] 3.1 Create directory `src/app/api/quotes/[id]/photos/[photoId]/` and file `route.ts`
  - [x] 3.2 Export `async function DELETE` — call `auth()`, return 401 if no session
  - [x] 3.3 `await params` to get `{ id, photoId }`
  - [x] 3.4 Find photo with ownership check: `prisma.quotePhoto.findFirst({ where: { id: photoId, quote: { id, userId: session.user.id } } })` — return 404 if not found
  - [x] 3.5 Derive R2 key from photo URL: `const r2Key = photo.url.replace(\`${process.env.R2_PUBLIC_URL}/\`, '')`
  - [x] 3.6 Delete from R2: `await deleteFromR2(r2Key)` — catch and log errors but do NOT fail the request if R2 delete fails (DB record deletion is more important)
  - [x] 3.7 Delete DB record: `await prisma.quotePhoto.delete({ where: { id: photoId } })`
  - [x] 3.8 Return `new NextResponse(null, { status: 204 })` — no body for 204
  - [x] 3.9 Wrap in try/catch — return 500 on unexpected error

- [x] Task 4: Create `PhotoCapture` component (AC: #1, #2, #6)
  - [x] 4.1 Create `src/components/quotes/photo-capture.tsx` as `"use client"`
  - [x] 4.2 Props: `onCapture: (file: File) => void`, `disabled?: boolean`, `isUploading?: boolean`
  - [x] 4.3 Create two hidden `<input type="file">` elements: one with `accept="image/*" capture="environment"` (camera), one with `accept="image/*"` only (gallery). Use `useRef` to hold references to both inputs.
  - [x] 4.4 Render two visible buttons: "Camera" button (triggers camera input click) and "Gallery" button (triggers gallery input click). Both disabled when `disabled={true}` or `isUploading={true}`. Minimum 44px touch targets.
  - [x] 4.5 When `disabled` is true, show a message below the buttons: "Maximum of 10 photos reached"
  - [x] 4.6 On input `onChange`, get `event.target.files?.[0]` — call `onCapture(file)` if file exists, then reset input value to `""` to allow re-selecting the same file
  - [x] 4.7 Show a spinner or loading indicator while `isUploading` is true

- [x] Task 5: Create `PhotoGrid` component (AC: #4, #5)
  - [x] 5.1 Create `src/components/quotes/photo-grid.tsx` as `"use client"`
  - [x] 5.2 Props: `photos: Array<{ id: string; url: string; sortOrder: number }>`, `onRemove: (photoId: string) => void`, `isRemoving?: string | null` (ID of photo currently being removed)
  - [x] 5.3 Render a CSS grid (`grid grid-cols-3 gap-2`) of photo thumbnails
  - [x] 5.4 Each thumbnail: `<div className="relative aspect-square">` containing `<img src={photo.url} className="w-full h-full object-cover rounded">` and a remove button
  - [x] 5.5 Remove button: absolute positioned top-right, `aria-label="Remove photo"`, minimum 44px touch target (use `p-2` with a × icon), calls `onRemove(photo.id)`, disabled + shows spinner while `isRemoving === photo.id`
  - [x] 5.6 When `photos.length === 0`, render nothing (empty state handled by parent)

- [x] Task 6: Update `QuoteBuilder` to include photo capture and display (AC: #1–#6)
  - [x] 6.1 Open `src/components/quotes/quote-builder.tsx` — add `QuotePhoto` type import from `@prisma/client`
  - [x] 6.2 Update `QuoteWithLineItems` type to include photos: `Quote & { lineItems: LineItem[]; photos: QuotePhoto[] }`
  - [x] 6.3 Add state: `const [photos, setPhotos] = useState<QuotePhoto[]>(initialQuote.photos)`
  - [x] 6.4 Add state: `const [isUploading, setIsUploading] = useState(false)`
  - [x] 6.5 Add state: `const [removingPhotoId, setRemovingPhotoId] = useState<string | null>(null)`
  - [x] 6.6 Implement `handleCapturePhoto(file: File)`
  - [x] 6.7 Implement `handleRemovePhoto(photoId: string)`
  - [x] 6.8 Add photos section to JSX (placed between notes and tax rate sections)
  - [x] 6.9 Import `PhotoGrid` and `PhotoCapture` components

- [x] Task 7: Update quote page to include photos in initial data (AC: #4)
  - [x] 7.1 Open `src/app/quotes/[id]/page.tsx`
  - [x] 7.2 Update the Prisma query to include photos with `orderBy: { sortOrder: "asc" }`
  - [x] 7.3 No type changes needed — Prisma will auto-infer the updated return type

- [x] Task 8: Write tests (AC: #3, #5, #6, #7, #8, #9, #10)
  - [x] 8.1 Create `src/app/api/quotes/[id]/photos/route.test.ts` — 5 tests: 401, 404, 422, 400, 201
  - [x] 8.2 Create `src/app/api/quotes/[id]/photos/[photoId]/route.test.ts` — 4 tests: 401, 404, 204, R2-resilience

- [x] Task 9: Final verification (AC: all)
  - [x] 9.1 `npm run build` — zero TypeScript errors, all routes present in build output
  - [x] 9.2 `npm test` — 66 tests pass (9 test files, includes all Story 2.x tests)
  - [x] 9.3 Camera button uses `capture="environment"` — correct attribute value per AC #1
  - [x] 9.4 Gallery button uses plain `accept="image/*"` with no capture attribute — per AC #2
  - [x] 9.5 10-photo limit enforced both server-side (422) and client-side (disabled buttons + message)
  - [x] 9.6 Remove flow: R2 key derived from URL, R2 delete wrapped in own try/catch (non-fatal), then DB delete

## Dev Notes

### Critical: Project Root and Directory Layout

The working directory for all `npm`, `npx prisma`, etc. commands is:
```
mvps/contractor-quoting-estimation/src/    ← package.json lives here
```

The Next.js source lives at the nested path:
```
mvps/contractor-quoting-estimation/src/src/
  app/
    api/quotes/[id]/                ← create photos/ subdirectory here
    api/quotes/[id]/photos/         ← NEW: POST attach photo
    api/quotes/[id]/photos/[photoId]/ ← NEW: DELETE remove photo
    quotes/[id]/page.tsx            ← update to include photos
  components/quotes/                ← add photo-capture.tsx, photo-grid.tsx
  lib/image-compress.ts             ← ALREADY EXISTS — use as-is
  lib/r2.ts                         ← ALREADY EXISTS — use as-is
  lib/validations/photo.ts          ← NEW: Zod schemas
```

### Existing Files — Do NOT Recreate

| File | What it provides |
|---|---|
| `src/lib/image-compress.ts` | `compressImage(file, options?)` — client-side Canvas compression. Has `"use client"` directive. Options: `maxWidthOrHeight` (default 1200), `maxSizeKB` (default 500), `quality` (default 0.85). Returns `Promise<File>`. |
| `src/lib/r2.ts` | `uploadToR2(key, buffer, contentType)` → returns public URL; `deleteFromR2(key)` → void; `getPublicUrl(key)` → string |
| `src/app/api/photos/upload/route.ts` | `POST /api/photos/upload` — accepts FormData with `file` (File) and `type` (string, e.g. `"photo"`). Returns `{ url: string, key: string }`. Max 5MB. Accepts JPEG, PNG, WebP, GIF. |
| `src/lib/auth.ts` | `auth()` — NextAuth session |
| `src/lib/db.ts` | `prisma` — Prisma singleton |
| `src/components/ui/button.tsx` | `Button` with `variant`, `isLoading` props |

### Prisma Schema — No Migration Needed

`QuotePhoto` model already exists and is migrated:

```prisma
model QuotePhoto {
  id        String @id @default(cuid())
  quoteId   String
  quote     Quote  @relation(fields: [quoteId], references: [id], onDelete: Cascade)
  url       String
  thumbnail String?
  sortOrder Int    @default(0)
  caption   String?
}
```

The `Quote` model already has `photos QuotePhoto[]`. **No migration required.** The `thumbnail` field is optional — do NOT populate it in this story (leave null). Story 3.2 PDF generation only needs `url`.

### Photo Flow — Step by Step

```
1. User taps Camera or Gallery button
2. Browser file picker opens (native device UI)
3. User selects/captures photo → onChange fires with File
4. Client: compressImage(file, { maxSizeKB: 500, maxWidthOrHeight: 1200 })
5. Client: POST /api/photos/upload (FormData: file, type="photo") → { url, key }
6. Client: POST /api/quotes/[id]/photos (JSON: { url, sortOrder }) → { data: QuotePhoto }
7. State: setPhotos(prev => [...prev, newPhoto])
8. UI: new thumbnail appears in PhotoGrid
```

```
Removal flow:
1. User taps × on a thumbnail
2. Client: DELETE /api/quotes/[id]/photos/[photoId]
3. Server: derive R2 key from URL, deleteFromR2(key), prisma.quotePhoto.delete(...)
4. Client: setPhotos(prev => prev.filter(p => p.id !== photoId))
5. UI: thumbnail disappears
```

### R2 Key Derivation for Deletion

The upload route stores photos with keys like `${userId}/photo/${uuid}.ext`. The `uploadToR2` function returns `${R2_PUBLIC_URL}/${key}`. To delete, derive the key:

```typescript
const r2Key = photo.url.replace(`${process.env.R2_PUBLIC_URL}/`, '');
await deleteFromR2(r2Key);
```

Important: wrap `deleteFromR2` in its own try/catch so a failed R2 delete does not prevent the DB record from being removed. Log the R2 error but continue to delete the Prisma record.

### Next.js 16 Breaking Change — params is a Promise

Always await `params` before destructuring in ALL route handlers:
```typescript
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // ...
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; photoId: string }> }
) {
  const { id, photoId } = await params;
  // ...
}
```

### Zod v4 Error Handling

This project uses Zod **v4** — use `err.issues[0]?.message` not `err.errors`:
```typescript
import { ZodError } from "zod";

} catch (err) {
  if (err instanceof ZodError) {
    return NextResponse.json(
      { error: err.issues[0]?.message ?? "Validation failed" },
      { status: 400 }
    );
  }
  // ...
}
```

### POST /api/quotes/[id]/photos Implementation Pattern

```typescript
// src/app/api/quotes/[id]/photos/route.ts
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
```

### DELETE /api/quotes/[id]/photos/[photoId] Implementation Pattern

```typescript
// src/app/api/quotes/[id]/photos/[photoId]/route.ts
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

    // Ownership check — photo must belong to a quote owned by this user
    const photo = await prisma.quotePhoto.findFirst({
      where: { id: photoId, quote: { id, userId: session.user.id } },
    });
    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    // Best-effort R2 delete — do not fail the request if R2 is unavailable
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
```

### PhotoCapture Component Pattern

```typescript
// src/components/quotes/photo-capture.tsx
"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";

interface PhotoCaptureProps {
  onCapture: (file: File) => void;
  disabled?: boolean;
  isUploading?: boolean;
}

export function PhotoCapture({ onCapture, disabled, isUploading }: PhotoCaptureProps) {
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      onCapture(file);
      // Reset to allow re-selecting the same file
      e.target.value = "";
    }
  }

  return (
    <div className="space-y-2">
      {/* Hidden file inputs */}
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        ref={galleryRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => cameraRef.current?.click()}
          disabled={disabled || isUploading}
          isLoading={isUploading}
          className="min-h-[44px]"
        >
          📷 Camera
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => galleryRef.current?.click()}
          disabled={disabled || isUploading}
          className="min-h-[44px]"
        >
          🖼 Gallery
        </Button>
      </div>

      {disabled && (
        <p className="text-sm text-gray-500">Maximum of 10 photos reached</p>
      )}
    </div>
  );
}
```

### PhotoGrid Component Pattern

```typescript
// src/components/quotes/photo-grid.tsx
"use client";

interface Photo {
  id: string;
  url: string;
  sortOrder: number;
}

interface PhotoGridProps {
  photos: Photo[];
  onRemove: (photoId: string) => void;
  isRemoving?: string | null;
}

export function PhotoGrid({ photos, onRemove, isRemoving }: PhotoGridProps) {
  if (photos.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-2">
      {photos.map((photo) => (
        <div key={photo.id} className="relative aspect-square">
          <img
            src={photo.url}
            alt="Job site photo"
            className="w-full h-full object-cover rounded"
          />
          <button
            type="button"
            aria-label="Remove photo"
            onClick={() => onRemove(photo.id)}
            disabled={isRemoving === photo.id}
            className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs min-h-[44px] min-w-[44px] -top-2 -right-2"
          >
            {isRemoving === photo.id ? "…" : "×"}
          </button>
        </div>
      ))}
    </div>
  );
}
```

Note: Adjust the touch target sizing to ensure the remove button meets the 44px minimum — use `w-11 h-11` (44px) instead of `w-7 h-7`.

### QuoteBuilder Integration — Photo Section

Add to `src/components/quotes/quote-builder.tsx`:

```typescript
// Add imports at top
import type { QuotePhoto } from "@prisma/client";
import { compressImage } from "@/lib/image-compress";
import { PhotoCapture } from "@/components/quotes/photo-capture";
import { PhotoGrid } from "@/components/quotes/photo-grid";

// Update type
type QuoteWithLineItems = Quote & { lineItems: LineItem[]; photos: QuotePhoto[] };

// Add state (inside component)
const [photos, setPhotos] = useState<QuotePhoto[]>(initialQuote.photos);
const [isUploading, setIsUploading] = useState(false);
const [removingPhotoId, setRemovingPhotoId] = useState<string | null>(null);

// Handler
async function handleCapturePhoto(file: File) {
  setIsUploading(true);
  try {
    const compressed = await compressImage(file, { maxSizeKB: 500, maxWidthOrHeight: 1200 });

    const fd = new FormData();
    fd.append("file", compressed);
    fd.append("type", "photo");
    const uploadRes = await fetch("/api/photos/upload", { method: "POST", body: fd });
    if (!uploadRes.ok) throw new Error("Upload failed");
    const uploadData = await uploadRes.json();

    const attachRes = await fetch(`/api/quotes/${quoteId}/photos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: uploadData.url, sortOrder: photos.length }),
    });
    if (!attachRes.ok) throw new Error("Failed to attach photo");
    const { data: newPhoto } = await attachRes.json();
    setPhotos((prev) => [...prev, newPhoto]);
  } catch {
    setSaveMessage({ type: "error", text: "Failed to add photo. Please try again." });
  } finally {
    setIsUploading(false);
  }
}

async function handleRemovePhoto(photoId: string) {
  setRemovingPhotoId(photoId);
  try {
    const res = await fetch(`/api/quotes/${quoteId}/photos/${photoId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to remove photo");
    setPhotos((prev) => prev.filter((p) => p.id !== photoId));
  } catch {
    setSaveMessage({ type: "error", text: "Failed to remove photo. Please try again." });
  } finally {
    setRemovingPhotoId(null);
  }
}

// In JSX — add photos section (place after notes textarea, before deposit config)
<section>
  <h3 className="text-sm font-medium mb-2">Photos ({photos.length}/10)</h3>
  <PhotoGrid photos={photos} onRemove={handleRemovePhoto} isRemoving={removingPhotoId} />
  <div className="mt-2">
    <PhotoCapture
      onCapture={handleCapturePhoto}
      disabled={photos.length >= 10}
      isUploading={isUploading}
    />
  </div>
</section>
```

### Vitest Testing Pattern (Matches Existing Stories)

```typescript
// src/app/api/quotes/[id]/photos/route.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: { findFirst: vi.fn() },
    quotePhoto: {
      count: vi.fn(),
      create: vi.fn(),
      findFirst: vi.fn(),
      delete: vi.fn(),
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
```

For DELETE tests in `route.test.ts` under `src/app/api/quotes/[id]/photos/[photoId]/`, also mock `@/lib/r2`:
```typescript
vi.mock("@/lib/r2", () => ({ deleteFromR2: vi.fn().mockResolvedValue(undefined) }));
```

### Anti-Patterns to Avoid

- **Never** use `prisma.quotePhoto.findFirst({ where: { id: photoId } })` alone — always include quote ownership in the where clause: `{ id: photoId, quote: { id, userId: session.user.id } }` to prevent cross-user photo deletion
- **Never** fail the DELETE request if R2 delete fails — wrap R2 deletion in its own try/catch and log the error; the DB record deletion must still proceed
- **Never** skip the 10-photo limit check server-side — a client-side check is not sufficient; enforce on the API
- **Never** store photo blobs or base64 data in the database — only store URLs from R2
- **Never** use `capture="camera"` as the attribute value — the correct value is `capture="environment"` for rear-facing camera
- **Never** forget to reset `e.target.value = ""` after processing a file input — without this, selecting the same photo twice won't fire the onChange event
- **Never** call `compressImage()` in a server component or API route — it uses Canvas API and has `"use client"` directive; it must only be called client-side
- **Never** add `<img>` with a Next.js `<Image>` component for R2 URLs in this story — use plain `<img>` for thumbnails in PhotoGrid (avoids needing to configure R2 domain in next.config.js; Story 3.2 can configure this if needed)

### Files to Create in This Story

**New files:**
- `src/lib/validations/photo.ts` — `attachPhotoSchema` Zod schema
- `src/app/api/quotes/[id]/photos/route.ts` — POST attach photo to quote
- `src/app/api/quotes/[id]/photos/[photoId]/route.ts` — DELETE remove photo
- `src/app/api/quotes/[id]/photos/route.test.ts` — API tests for POST
- `src/app/api/quotes/[id]/photos/[photoId]/route.test.ts` — API tests for DELETE
- `src/components/quotes/photo-capture.tsx` — Camera + gallery UI component
- `src/components/quotes/photo-grid.tsx` — Thumbnail grid with remove buttons

**Modified files:**
- `src/app/quotes/[id]/page.tsx` — Add `photos: { orderBy: { sortOrder: "asc" } }` to Prisma include
- `src/components/quotes/quote-builder.tsx` — Add photo state, handlers, and photo section JSX

### Project Structure Notes

- `src/app/api/quotes/[id]/photos/` directory does NOT yet exist — create it
- `src/app/api/quotes/[id]/photos/[photoId]/` directory does NOT yet exist — create it
- `src/components/quotes/` directory already exists (contains quote-builder, customer-info, etc.)
- `src/lib/image-compress.ts` already exists — do NOT recreate
- `src/lib/r2.ts` already exists — do NOT recreate
- `src/app/api/photos/upload/route.ts` already exists — do NOT recreate; call it from client
- No Prisma migration needed — `QuotePhoto` model and `Quote.photos` relation are already in the schema

### Story 3.2 Handoff Note

The `thumbnail` field on `QuotePhoto` is deliberately left null in this story. Story 3.2 (PDF generation) will use `photo.url` directly from the `QuotePhoto` records. The PDF component (`@react-pdf/renderer`) will fetch photos by URL. No changes to QuotePhoto records are required for Story 3.2 to work — it reads whatever photos are attached.

### References

- [Source: planning/epics.md#Epic 3 — Story 3.1: Jobsite Photo Capture & Attachment]
- [Source: planning/architecture.md#Data Architecture — Data Model (QuotePhoto model)]
- [Source: planning/architecture.md#Core Architectural Decisions — File Storage: Cloudflare R2]
- [Source: planning/architecture.md#Project Structure — src/components/quotes/photo-capture.tsx, photo-grid.tsx]
- [Source: planning/architecture.md#Implementation Patterns — Anti-Patterns (never store photos in database, always use R2)]
- [Source: planning/architecture.md#Integration Points — Data Flow (photo: compress → upload R2 → save URL)]
- [Source: stories/2-3-quote-management-duplicate-delete-and-search.md — Next.js 16 params Promise pattern, Zod v4 error handling, 204 no-body response, Vitest mock patterns]
- [Source: mvps/contractor-quoting-estimation/src/src/lib/image-compress.ts — compressImage() signature and options]
- [Source: mvps/contractor-quoting-estimation/src/src/lib/r2.ts — uploadToR2(), deleteFromR2(), getPublicUrl()]
- [Source: mvps/contractor-quoting-estimation/src/src/app/api/photos/upload/route.ts — upload endpoint contract: FormData {file, type} → {url, key}]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

- Implemented all 9 tasks fully. 66 tests pass (9 test files), zero TypeScript build errors.
- Created `attachPhotoSchema` (Zod v4) in `src/lib/validations/photo.ts`.
- `POST /api/quotes/[id]/photos` enforces ownership (404), 10-photo limit (422), Zod validation (400), and returns 201 with created record.
- `DELETE /api/quotes/[id]/photos/[photoId]` uses compound ownership check on `quotePhoto.findFirst`, wraps R2 deletion in its own try/catch (non-fatal), returns 204 with no body.
- `PhotoCapture` uses two hidden file inputs: one with `capture="environment"` (camera), one without (gallery). Resets `e.target.value=""` after each capture to allow re-selecting same file. Disabled + shows limit message when 10 photos reached.
- `PhotoGrid` renders `grid grid-cols-3 gap-2`, returns null when empty. Remove buttons are 44px (w-11 h-11) with `aria-label="Remove photo"`.
- `QuoteBuilder` extended: `QuoteWithLineItems` now includes `photos: QuotePhoto[]`, photo state/handlers added, Photos section inserted between Notes and Tax Rate.
- Quote page Prisma include updated to fetch `photos: { orderBy: { sortOrder: "asc" } }`.
- Added bonus R2-resilience test: DELETE returns 204 even when R2 throws.

### File List

**New files:**
- `src/src/lib/validations/photo.ts`
- `src/src/app/api/quotes/[id]/photos/route.ts`
- `src/src/app/api/quotes/[id]/photos/route.test.ts`
- `src/src/app/api/quotes/[id]/photos/[photoId]/route.ts`
- `src/src/app/api/quotes/[id]/photos/[photoId]/route.test.ts`
- `src/src/components/quotes/photo-capture.tsx`
- `src/src/components/quotes/photo-grid.tsx`

**Modified files:**
- `src/src/components/quotes/quote-builder.tsx`
- `src/src/app/quotes/[id]/page.tsx`
- `sprint-status.yaml`

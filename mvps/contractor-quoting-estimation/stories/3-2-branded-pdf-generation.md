# Story 3.2: Branded PDF Generation

Status: ready-for-dev

## Story

As a contractor,
I want to generate a professional branded PDF from my quote,
so that my customer receives a polished proposal with my logo, itemized pricing, photos, and terms.

## Acceptance Criteria

1. **Given** I am authenticated and have a quote with at least one line item
   **When** I call `POST /api/quotes/[id]/pdf`
   **Then** a PDF is generated server-side using `@react-pdf/renderer`
   **And** the response is `200` with `{ data: { url: string } }` — the R2 URL of the stored PDF
   **And** the generation completes within 3 seconds for a quote with up to 10 photos

2. **Given** a PDF is generated
   **When** the PDF is rendered
   **Then** the PDF header includes the contractor's `businessName`, `licenseNumber` (if set), `phone` (if set), and `email` (if set) from their `Profile`
   **And** if `profile.logoUrl` is set, the logo image is rendered in the header
   **And** the header background uses `profile.brandColor` (default `#2563EB` if profile is null)

3. **Given** a PDF is generated
   **When** the PDF is rendered
   **Then** the PDF includes the customer's `customerName`, `customerAddress`, `customerPhone`, and `customerEmail` (each field only shown if non-null)

4. **Given** a PDF is generated
   **When** the PDF is rendered
   **Then** the PDF includes a table of all line items, each showing `description`, `quantity`, `unit`, `unitPrice`, and the calculated line total (`quantity * unitPrice`)
   **And** amounts are formatted as currency (e.g. `$125.00`)

5. **Given** a PDF is generated
   **When** the PDF is rendered
   **Then** the PDF includes a summary section showing `subtotal`, `tax amount` (labeled with the tax rate, e.g. "Tax (8.25%)"), and `total`
   **And** if `depositType` is set (FIXED or PERCENTAGE), the deposit amount is also shown
   **And** all amounts are formatted as currency

6. **Given** a PDF is generated and the quote has attached photos
   **When** the PDF is rendered
   **Then** the PDF includes a photos section containing all `QuotePhoto.url` images from the quote in order of `sortOrder`

7. **Given** a PDF is generated and `quote.notes` is non-null
   **When** the PDF is rendered
   **Then** the PDF includes a "Job Notes / Scope" section showing the notes text

8. **Given** a PDF is generated
   **When** the PDF is rendered
   **Then** the PDF includes a "Terms & Conditions" section showing `quote.termsText` if set, else `profile.paymentTerms` if set, else a default placeholder text ("Payment is due upon completion unless a deposit has been collected.")

9. **Given** the PDF is successfully generated
   **When** the API call completes
   **Then** the PDF buffer is uploaded to Cloudflare R2 with key `${userId}/pdf/${quoteId}.pdf`
   **And** `prisma.quote.update({ where: { id }, data: { pdfUrl: url } })` is called to persist the URL
   **And** the response returns the stored URL

10. **Given** `POST /api/quotes/[id]/pdf` is called without authentication
    **When** the request is processed
    **Then** the response is `401`

11. **Given** `POST /api/quotes/[id]/pdf` is called for a quote belonging to a different user
    **When** the request is processed
    **Then** the response is `404`

12. **Given** `POST /api/quotes/[id]/pdf` is called for a quote with zero line items
    **When** the request is processed
    **Then** the response is `422` with `{ error: "Quote must have at least one line item to generate a PDF" }`

13. **Given** I am editing a quote in the `QuoteBuilder`
    **When** I view the action buttons at the bottom
    **Then** I see a "Generate PDF" button
    **And** if `pdfUrl` is already set on the quote (from a previous generation), I also see a "Download PDF" link that opens the URL in a new tab

14. **Given** I tap "Generate PDF" in `QuoteBuilder`
    **When** generation is in progress
    **Then** the button shows a loading state and is disabled
    **And** when generation completes, a "Download PDF" link appears (or updates if the link was already shown)
    **And** if generation fails, an error message is shown in the save-message area

## Tasks / Subtasks

- [ ] Task 1: Install `@react-pdf/renderer` and update Next.js config (AC: #1)
  - [ ] 1.1 `cd mvps/contractor-quoting-estimation/src && npm install @react-pdf/renderer`
  - [ ] 1.2 Open `mvps/contractor-quoting-estimation/src/next.config.ts`
  - [ ] 1.3 Add `"@react-pdf/renderer"` to the `serverExternalPackages` array alongside `"bcrypt"`, `"@prisma/client"`, `"pg"` — this prevents Next.js from trying to bundle the library and avoids SSR issues

- [ ] Task 2: Create TypeScript types for PDF data (AC: #2–#8)
  - [ ] 2.1 Open `src/src/types/index.ts`
  - [ ] 2.2 Add `QuotePdfData` export interface:
    ```typescript
    export interface QuotePdfData {
      quoteNumber: string;
      trade: Trade;
      createdAt: Date | string;
      customerName: string;
      customerAddress?: string | null;
      customerPhone?: string | null;
      customerEmail?: string | null;
      notes?: string | null;
      taxRate: number;
      depositType?: 'FIXED' | 'PERCENTAGE' | null;
      depositValue?: number | null;
      termsText?: string | null;
      lineItems: Array<{
        description: string;
        quantity: number;
        unit: string;
        unitPrice: number;
      }>;
      photos: Array<{ url: string; sortOrder: number }>;
    }
    ```
  - [ ] 2.3 Add `ProfilePdfData` export interface:
    ```typescript
    export interface ProfilePdfData {
      businessName: string;
      logoUrl?: string | null;
      licenseNumber?: string | null;
      phone?: string | null;
      email?: string | null;
      brandColor: string;
      paymentTerms?: string | null;
    }
    ```

- [ ] Task 3: Create `src/lib/pdf-generator.ts` utility (AC: #1, #9)
  - [ ] 3.1 Create `src/src/lib/pdf-generator.ts`
  - [ ] 3.2 Import `renderToBuffer` from `@react-pdf/renderer` and `React` from `react`
  - [ ] 3.3 Import `QuotePdf` from `@/components/pdf/quote-pdf` and the types `QuotePdfData`, `ProfilePdfData`
  - [ ] 3.4 Export `async function generateQuotePdf(quote: QuotePdfData, profile: ProfilePdfData | null): Promise<Buffer>` that calls `renderToBuffer(React.createElement(QuotePdf, { quote, profile }))` and returns the buffer
  - [ ] 3.5 Verify the function does NOT use `"use client"` directive — it is server-only

- [ ] Task 4: Create `src/components/pdf/quote-pdf.tsx` PDF template (AC: #2–#8)
  - [ ] 4.1 Create directory `src/src/components/pdf/` and file `quote-pdf.tsx`
  - [ ] 4.2 Do NOT add `"use client"` — this component runs server-side only via `renderToBuffer`
  - [ ] 4.3 Import primitives from `@react-pdf/renderer`: `Document`, `Page`, `View`, `Text`, `Image`, `StyleSheet`
  - [ ] 4.4 Import types `QuotePdfData`, `ProfilePdfData` from `@/types`
  - [ ] 4.5 Define `StyleSheet.create({...})` with all styles (see Dev Notes for style guide)
  - [ ] 4.6 Implement `QuotePdf` component with props `{ quote: QuotePdfData, profile: ProfilePdfData | null }`:
    - Header section: brand-color background, logo image (if `profile?.logoUrl`), business name, license/phone/email
    - Quote info row: quote number, trade, date
    - Customer section: name, address, phone, email (skip null fields)
    - Line items table: header row + one row per line item (description, qty, unit, unit price, total)
    - Summary section: subtotal, tax (with rate), total, deposit (if configured)
    - Notes section (skip if `quote.notes` is null/empty)
    - Photos section (skip if `quote.photos.length === 0`): render each photo with `<Image src={photo.url}>`
    - Terms section: show `quote.termsText` or `profile?.paymentTerms` or default placeholder
  - [ ] 4.7 Use `formatCurrency` logic inline (no import from `@/lib/utils` — that file uses Intl which may behave differently in react-pdf's Node.js environment). Implement a simple helper inside the file: `(n: number) => '$' + n.toFixed(2)`

- [ ] Task 5: Create `POST /api/quotes/[id]/pdf` route (AC: #1, #9, #10, #11, #12)
  - [ ] 5.1 Create directory `src/src/app/api/quotes/[id]/pdf/` and file `route.ts`
  - [ ] 5.2 Export `async function POST` — call `auth()`, return `401` if no session
  - [ ] 5.3 `await params` to get `{ id }` (Next.js 16 — params is a Promise)
  - [ ] 5.4 Fetch quote with ownership check:
    ```typescript
    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: {
        lineItems: { orderBy: { sortOrder: 'asc' } },
        photos: { orderBy: { sortOrder: 'asc' } },
      },
    });
    ```
    Return `404` if `!quote`
  - [ ] 5.5 Validate quote has at least one line item: if `quote.lineItems.length === 0`, return `422` with `{ error: "Quote must have at least one line item to generate a PDF" }`
  - [ ] 5.6 Fetch profile: `const profile = await prisma.profile.findUnique({ where: { userId: session.user.id } })`
  - [ ] 5.7 Build `QuotePdfData` from quote fields
  - [ ] 5.8 Build `ProfilePdfData` from profile (pass `null` if profile not found)
  - [ ] 5.9 Generate PDF buffer: `const buffer = await generateQuotePdf(quoteData, profileData)`
  - [ ] 5.10 Upload to R2: `const url = await uploadToR2(\`${session.user.id}/pdf/${id}.pdf\`, buffer, 'application/pdf')`
  - [ ] 5.11 Update quote: `await prisma.quote.update({ where: { id }, data: { pdfUrl: url } })`
  - [ ] 5.12 Return `NextResponse.json({ data: { url } }, { status: 200 })`
  - [ ] 5.13 Wrap all logic after auth check in try/catch — return `500` on unexpected error with message `"Failed to generate PDF."`

- [ ] Task 6: Update `QuoteBuilder` to add PDF generation UI (AC: #13, #14)
  - [ ] 6.1 Open `src/src/components/quotes/quote-builder.tsx`
  - [ ] 6.2 Add state: `const [pdfUrl, setPdfUrl] = useState<string | null>(initialQuote.pdfUrl ?? null)`
  - [ ] 6.3 Add state: `const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)`
  - [ ] 6.4 Implement `handleGeneratePdf()`:
    ```typescript
    async function handleGeneratePdf() {
      setIsGeneratingPdf(true);
      setSaveMessage(null);
      try {
        const res = await fetch(`/api/quotes/${quoteId}/pdf`, { method: 'POST' });
        if (!res.ok) {
          const body = await res.json();
          setSaveMessage({ type: 'error', text: body.error ?? 'Failed to generate PDF.' });
          return;
        }
        const { data } = await res.json();
        setPdfUrl(data.url);
        setSaveMessage({ type: 'success', text: 'PDF generated successfully.' });
      } catch {
        setSaveMessage({ type: 'error', text: 'Network error generating PDF. Please try again.' });
      } finally {
        setIsGeneratingPdf(false);
      }
    }
    ```
  - [ ] 6.5 In the fixed bottom action bar (after "Save Quote" button and before "Duplicate Quote"), add:
    ```tsx
    <Button
      variant="outline"
      onClick={handleGeneratePdf}
      isLoading={isGeneratingPdf}
      disabled={isGeneratingPdf || lineItems.length === 0}
      className="w-full min-h-[44px]"
    >
      Generate PDF
    </Button>
    {pdfUrl && (
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full min-h-[44px] rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Download PDF
      </a>
    )}
    ```
  - [ ] 6.6 The "Generate PDF" button should be disabled (not just loading) if `lineItems.length === 0` — prevents generating an empty PDF
  - [ ] 6.7 The "Download PDF" link always opens in a new tab (`target="_blank"`) — do NOT use Next.js `<Link>` for external URLs

- [ ] Task 7: Write tests for `POST /api/quotes/[id]/pdf` (AC: #10, #11, #12)
  - [ ] 7.1 Create `src/src/app/api/quotes/[id]/pdf/route.test.ts`
  - [ ] 7.2 Mock `@/lib/auth`, `@/lib/db`, `@/lib/r2`, `@/lib/pdf-generator` at the top of the file
  - [ ] 7.3 Test: returns `401` when `auth()` returns null
  - [ ] 7.4 Test: returns `404` when `prisma.quote.findFirst` returns null
  - [ ] 7.5 Test: returns `422` when quote has zero line items
  - [ ] 7.6 Test: returns `200` with `{ data: { url } }` and calls `prisma.quote.update` with `pdfUrl` when successful (mock `generateQuotePdf` to return `Buffer.from('fake')`, mock `uploadToR2` to return `'https://cdn.example.com/q1.pdf'`)

- [ ] Task 8: Final verification (AC: all)
  - [ ] 8.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors
  - [ ] 8.2 `npm test` — all tests pass (includes the 4 new PDF route tests, total test count increases from 66)
  - [ ] 8.3 Verify `@react-pdf/renderer` is listed in `package.json` dependencies
  - [ ] 8.4 Verify `"@react-pdf/renderer"` is in `serverExternalPackages` in `next.config.ts`
  - [ ] 8.5 Verify `quote-pdf.tsx` has NO `"use client"` directive
  - [ ] 8.6 Verify `pdf-generator.ts` has NO `"use client"` directive
  - [ ] 8.7 Verify the `pdfUrl` state in `QuoteBuilder` initializes from `initialQuote.pdfUrl` so existing PDF links survive page reloads

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
    api/quotes/[id]/pdf/           ← NEW: POST generate PDF
  components/
    pdf/                           ← NEW directory
      quote-pdf.tsx                ← NEW: React-PDF template
  lib/
    pdf-generator.ts               ← NEW: renderToBuffer wrapper
    r2.ts                          ← ALREADY EXISTS — use uploadToR2(key, buffer, contentType)
    utils.ts                       ← ALREADY EXISTS — formatCurrency and calculateTotal
  types/index.ts                   ← MODIFY: add QuotePdfData and ProfilePdfData
```

### Dependency Installation

`@react-pdf/renderer` is NOT in `package.json` yet. Install from the package root:

```bash
cd mvps/contractor-quoting-estimation/src
npm install @react-pdf/renderer
```

This adds it to `dependencies`. Then update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.r2.cloudflarestorage.com" }],
  },
  serverExternalPackages: ["bcrypt", "@prisma/client", "pg", "@react-pdf/renderer"],
};
```

`@react-pdf/renderer` uses Node.js native APIs (canvas, font loading) and must be marked as an external package to prevent Next.js from attempting to bundle it into the server bundle.

### React-PDF API Reference

Use `renderToBuffer` (not `renderToStream` or `pdf()`) for the cleanest async API in a Route Handler:

```typescript
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { QuotePdf } from "@/components/pdf/quote-pdf";

const buffer = await renderToBuffer(
  React.createElement(QuotePdf, { quote: quoteData, profile: profileData })
);
// buffer is a Node.js Buffer — pass directly to uploadToR2
```

**Do NOT use JSX syntax in `pdf-generator.ts`** for calling `renderToBuffer` — use `React.createElement` to avoid any potential JSX transform issues with this server utility. The template component (`quote-pdf.tsx`) itself may use JSX normally.

### React-PDF Component Constraints

`@react-pdf/renderer` uses its own React reconciler. The following rules apply to all components inside `quote-pdf.tsx`:

- **NO HTML elements**: only use `Document`, `Page`, `View`, `Text`, `Image`, `Link` from `@react-pdf/renderer`
- **No CSS classes**: use `StyleSheet.create()` with inline-style-like objects
- **No `"use client"` directive**: this component is pure server-side
- **Images are fetched server-side**: `<Image src={url} />` works for public R2 URLs; Node.js fetches the image via HTTP during `renderToBuffer`
- **Fonts**: use built-in PDF fonts (Helvetica, Times-Roman, Courier) — no custom font loading needed for MVP
- **Colors**: use hex strings (`#2563EB`) not Tailwind classes

### PDF Template Structure (quote-pdf.tsx)

```tsx
// src/src/components/pdf/quote-pdf.tsx
// NO "use client" — server-only
import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import type { QuotePdfData, ProfilePdfData } from "@/types";

const formatAmt = (n: number) => "$" + n.toFixed(2);

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 10, padding: 40, color: "#111" },
  header: { flexDirection: "row", padding: 16, marginBottom: 20, alignItems: "center" },
  logo: { width: 60, height: 60, marginRight: 16, objectFit: "contain" },
  headerText: { color: "#ffffff", fontSize: 14, fontFamily: "Helvetica-Bold" },
  headerSubText: { color: "#ffffff", fontSize: 9, marginTop: 2 },
  sectionTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: "#555", marginBottom: 4,
    textTransform: "uppercase", letterSpacing: 0.5 },
  section: { marginBottom: 16 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 3, borderBottomWidth: 0.5, borderBottomColor: "#eee" },
  tableHeader: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 4,
    borderBottomWidth: 1, borderBottomColor: "#ccc", marginBottom: 2 },
  cell: { flex: 1 },
  cellRight: { flex: 1, textAlign: "right" },
  summaryRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 2 },
  bold: { fontFamily: "Helvetica-Bold" },
  photo: { width: "45%", marginBottom: 8 },
  photoGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});

interface QuotePdfProps {
  quote: QuotePdfData;
  profile: ProfilePdfData | null;
}

export function QuotePdf({ quote, profile }: QuotePdfProps) {
  const brandColor = profile?.brandColor ?? "#2563EB";
  const { subtotal, tax, total } = calcTotals(quote);

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: brandColor }]}>
          {profile?.logoUrl && <Image src={profile.logoUrl} style={styles.logo} />}
          <View>
            <Text style={styles.headerText}>{profile?.businessName ?? "QuoteCraft"}</Text>
            {profile?.licenseNumber && (
              <Text style={styles.headerSubText}>License #{profile.licenseNumber}</Text>
            )}
            {profile?.phone && <Text style={styles.headerSubText}>{profile.phone}</Text>}
            {profile?.email && <Text style={styles.headerSubText}>{profile.email}</Text>}
          </View>
        </View>

        {/* Quote Info */}
        {/* Customer Info */}
        {/* Line Items Table */}
        {/* Summary */}
        {/* Notes */}
        {/* Photos */}
        {/* Terms */}
      </Page>
    </Document>
  );
}

function calcTotals(quote: QuotePdfData) {
  const subtotal = quote.lineItems.reduce(
    (sum, li) => sum + li.quantity * li.unitPrice, 0
  );
  const tax = subtotal * (quote.taxRate / 100);
  return { subtotal, tax, total: subtotal + tax };
}
```

Implement the remaining sections following this pattern. Keep each section as a `<View style={styles.section}>` block with a `<Text style={styles.sectionTitle}>` heading.

### API Route Pattern

```typescript
// src/src/app/api/quotes/[id]/pdf/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { uploadToR2 } from "@/lib/r2";
import { generateQuotePdf } from "@/lib/pdf-generator";
import type { QuotePdfData, ProfilePdfData } from "@/types";

export async function POST(
  _req: NextRequest,
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
      include: {
        lineItems: { orderBy: { sortOrder: "asc" } },
        photos: { orderBy: { sortOrder: "asc" } },
      },
    });
    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    if (quote.lineItems.length === 0) {
      return NextResponse.json(
        { error: "Quote must have at least one line item to generate a PDF" },
        { status: 422 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
    });

    const quoteData: QuotePdfData = {
      quoteNumber: quote.quoteNumber,
      trade: quote.trade as QuotePdfData["trade"],
      createdAt: quote.createdAt,
      customerName: quote.customerName,
      customerAddress: quote.customerAddress,
      customerPhone: quote.customerPhone,
      customerEmail: quote.customerEmail,
      notes: quote.notes,
      taxRate: quote.taxRate,
      depositType: quote.depositType as QuotePdfData["depositType"],
      depositValue: quote.depositValue,
      termsText: quote.termsText,
      lineItems: quote.lineItems.map((li) => ({
        description: li.description,
        quantity: li.quantity,
        unit: li.unit,
        unitPrice: li.unitPrice,
      })),
      photos: quote.photos.map((p) => ({ url: p.url, sortOrder: p.sortOrder })),
    };

    const profileData: ProfilePdfData | null = profile
      ? {
          businessName: profile.businessName,
          logoUrl: profile.logoUrl,
          licenseNumber: profile.licenseNumber,
          phone: profile.phone,
          email: profile.email,
          brandColor: profile.brandColor,
          paymentTerms: profile.paymentTerms,
        }
      : null;

    const buffer = await generateQuotePdf(quoteData, profileData);
    const key = `${session.user.id}/pdf/${id}.pdf`;
    const url = await uploadToR2(key, buffer, "application/pdf");

    await prisma.quote.update({ where: { id }, data: { pdfUrl: url } });

    return NextResponse.json({ data: { url } });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json({ error: "Failed to generate PDF." }, { status: 500 });
  }
}
```

### Existing Files — Do NOT Recreate

| File | What it provides |
|---|---|
| `src/lib/r2.ts` | `uploadToR2(key, buffer, contentType)` → returns public URL string; `deleteFromR2(key)` |
| `src/lib/auth.ts` | `auth()` — NextAuth session |
| `src/lib/db.ts` | `prisma` — Prisma singleton |
| `src/lib/utils.ts` | `formatCurrency(amount, currency, locale)`, `calculateTotal(lineItems, taxRate)` — NOT safe to import in react-pdf components (see note below) |
| `src/components/ui/button.tsx` | `Button` with `variant`, `isLoading`, `disabled`, `size` props |
| `src/types/index.ts` | `Trade`, `QuoteStatus`, `UserProfile`, `LineItemData`, `QuoteData` — extend this file |

### Why NOT Import `@/lib/utils` in quote-pdf.tsx

`formatCurrency` uses `Intl.NumberFormat` which works fine in Node.js, but `@react-pdf/renderer` uses a custom JavaScript runtime for evaluating component code that may not fully support all `Intl` APIs. Use a simple inline formatter instead:

```typescript
const fmt = (n: number) => "$" + n.toFixed(2);
```

This is safe, predictable, and avoids any runtime issues in the PDF renderer.

### No Prisma Migration Needed

The `pdfUrl String?` field already exists on the `Quote` model in the current schema. No migration needed.

```prisma
// Already in prisma/schema.prisma
model Quote {
  // ...
  pdfUrl          String?   // ← already migrated
  // ...
}
```

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
```

### Zod v4 Error Handling

This project uses Zod **v4** — use `err.issues[0]?.message` not `err.errors`:

```typescript
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

(The PDF route has no Zod validation since it takes no request body, but the pattern is consistent across the codebase.)

### Test Pattern (Vitest — matches existing stories)

```typescript
// src/src/app/api/quotes/[id]/pdf/route.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: { findFirst: vi.fn(), update: vi.fn() },
    profile: { findUnique: vi.fn() },
  },
}));
vi.mock("@/lib/r2", () => ({
  uploadToR2: vi.fn().mockResolvedValue("https://cdn.example.com/user1/pdf/q1.pdf"),
}));
vi.mock("@/lib/pdf-generator", () => ({
  generateQuotePdf: vi.fn().mockResolvedValue(Buffer.from("fake-pdf")),
}));

import { POST } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { uploadToR2 } from "@/lib/r2";
import { generateQuotePdf } from "@/lib/pdf-generator";

const mockQuoteWithItems = {
  id: "q1",
  userId: "user-1",
  quoteNumber: "QT-2601-1234",
  trade: "PLUMBING",
  customerName: "Lisa Johnson",
  customerAddress: null,
  customerPhone: null,
  customerEmail: null,
  notes: null,
  taxRate: 8.25,
  depositType: null,
  depositValue: null,
  termsText: null,
  createdAt: new Date("2026-03-23"),
  lineItems: [
    { description: "Water heater install", quantity: 1, unit: "flat rate", unitPrice: 850, sortOrder: 0 },
  ],
  photos: [],
};

describe("POST /api/quotes/[id]/pdf", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(401);
  });

  it("returns 404 when quote belongs to another user", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(404);
  });

  it("returns 422 when quote has no line items", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockQuoteWithItems,
      lineItems: [],
    } as any);
    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("at least one line item");
  });

  it("returns 200 with url and updates quote.pdfUrl on success", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(mockQuoteWithItems as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({
      businessName: "Bob's Plumbing",
      brandColor: "#2563EB",
      logoUrl: null,
      licenseNumber: "PL-123",
      phone: "555-1234",
      email: "bob@example.com",
      paymentTerms: null,
    } as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({} as any);

    const req = new Request("http://localhost/api/quotes/q1/pdf", { method: "POST" });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.url).toBe("https://cdn.example.com/user1/pdf/q1.pdf");
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: { pdfUrl: "https://cdn.example.com/user1/pdf/q1.pdf" },
    });
    expect(generateQuotePdf).toHaveBeenCalledOnce();
    expect(uploadToR2).toHaveBeenCalledWith(
      "user-1/pdf/q1.pdf",
      expect.any(Buffer),
      "application/pdf"
    );
  });
});
```

### Deposit Amount Display in PDF

The deposit displayed in the PDF summary section depends on `depositType`:

```typescript
function calcDeposit(
  depositType: 'FIXED' | 'PERCENTAGE' | null | undefined,
  depositValue: number | null | undefined,
  total: number
): number | null {
  if (!depositType || depositValue == null) return null;
  if (depositType === 'FIXED') return depositValue;
  if (depositType === 'PERCENTAGE') return (depositValue / 100) * total;
  return null;
}
```

Show in PDF as: "Deposit Required: $500.00" or "Deposit Required (25%): $312.50"

### Photo Layout in PDF

Photos should appear in a two-column grid (two per row). Each photo should be sized to approximately 45% of the page width. Wrap photos in a `<View style={styles.photoGrid}>` with `flexDirection: "row"` and `flexWrap: "wrap"`. This prevents all photos from stacking vertically which would make the PDF very long.

```tsx
{quote.photos.length > 0 && (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Jobsite Photos</Text>
    <View style={styles.photoGrid}>
      {quote.photos.map((photo, i) => (
        <Image key={i} src={photo.url} style={styles.photo} />
      ))}
    </View>
  </View>
)}
```

### QuoteBuilder: pdfUrl Initialization

`initialQuote` is typed as `Quote & { lineItems: LineItem[]; photos: QuotePhoto[] }` from Prisma. The `Quote` model has `pdfUrl: String?` so `initialQuote.pdfUrl` will be `string | null`. Initialize state with:

```typescript
const [pdfUrl, setPdfUrl] = useState<string | null>(initialQuote.pdfUrl ?? null);
```

This ensures that when the user navigates back to an already-generated quote, the "Download PDF" link is immediately visible.

### Anti-Patterns to Avoid

- **Never** add `"use client"` to `quote-pdf.tsx` or `pdf-generator.ts` — both are server-only
- **Never** call `generateQuotePdf` from a client component — always use it in the API route
- **Never** use HTML elements (`<div>`, `<p>`, `<span>`) in `quote-pdf.tsx` — only react-pdf primitives work
- **Never** use Tailwind CSS classes in `quote-pdf.tsx` — use `StyleSheet.create()` objects
- **Never** import `formatCurrency` from `@/lib/utils` in the PDF template — use the inline `fmt()` helper instead
- **Never** forget to add `"@react-pdf/renderer"` to `serverExternalPackages` — without it, the Next.js build will fail or produce runtime errors
- **Never** skip the `quote.lineItems.length === 0` check before generating — the PDF template will look broken with no items
- **Never** use `renderToStream` or the `pdf().toBuffer()` API — use `renderToBuffer` for the simplest async interface
- **Never** store the PDF as base64 in the database — always upload to R2 and store only the URL in `pdfUrl`
- **Never** use `next/image` or `<Image>` from next.js in the PDF template — use `<Image>` from `@react-pdf/renderer`

### Files to Create in This Story

**New files:**
- `src/src/lib/pdf-generator.ts` — `generateQuotePdf(quote, profile): Promise<Buffer>`
- `src/src/components/pdf/quote-pdf.tsx` — React-PDF Document template
- `src/src/app/api/quotes/[id]/pdf/route.ts` — POST generate and store PDF
- `src/src/app/api/quotes/[id]/pdf/route.test.ts` — 4 Vitest tests

**Modified files:**
- `src/src/types/index.ts` — Add `QuotePdfData` and `ProfilePdfData` interfaces
- `src/src/components/quotes/quote-builder.tsx` — Add `pdfUrl` state, `handleGeneratePdf`, and PDF action buttons
- `mvps/contractor-quoting-estimation/src/next.config.ts` — Add `"@react-pdf/renderer"` to `serverExternalPackages`
- `mvps/contractor-quoting-estimation/src/package.json` — `@react-pdf/renderer` added via `npm install`
- `sprint-status.yaml` — story status updated to `ready-for-dev`

### Project Structure Notes

- `src/src/components/pdf/` directory does NOT yet exist — create it
- `src/src/app/api/quotes/[id]/pdf/` directory does NOT yet exist — create it
- `src/src/lib/pdf-generator.ts` does NOT yet exist — create it
- `src/src/components/quotes/quote-builder.tsx` already exists — extend it (do NOT recreate)
- `src/src/lib/r2.ts` already exists — `uploadToR2` accepts `(key: string, body: Buffer | Uint8Array, contentType: string)`
- No Prisma migration needed — `pdfUrl` field already exists on `Quote` model

### Story 3.3 Handoff Note

Story 3.3 (Quote Delivery via SMS & Email) will use the `pdfUrl` stored on the quote by this story to attach or link the PDF in the SMS/email message. After PDF generation in Story 3.2, `quote.pdfUrl` will always be a valid R2 URL. Story 3.3 should read `quote.pdfUrl` from the database — if it's null, it should call the PDF generation logic first or return a validation error requiring PDF generation before delivery.

### References

- [Source: planning/epics.md#Epic 3 — Story 3.2: Branded PDF Generation]
- [Source: planning/architecture.md#Core Architectural Decisions — PDF generation: @react-pdf/renderer]
- [Source: planning/architecture.md#Data Architecture — Data Model (Quote.pdfUrl field)]
- [Source: planning/architecture.md#Infrastructure — File Storage: Cloudflare R2]
- [Source: planning/architecture.md#Project Structure — src/components/pdf/, src/lib/pdf-generator.ts]
- [Source: planning/architecture.md#Implementation Patterns — Anti-Patterns (never store photos in database, never render PDFs client-side)]
- [Source: planning/architecture.md#Implementation Patterns — API Route Handler pattern]
- [Source: stories/3-1-jobsite-photo-capture-and-attachment.md — Next.js 16 params Promise pattern, Zod v4 error handling, Vitest mock patterns, uploadToR2 usage]
- [Source: mvps/contractor-quoting-estimation/src/src/lib/r2.ts — uploadToR2(key, buffer, contentType) signature]
- [Source: mvps/contractor-quoting-estimation/src/src/types/index.ts — existing type structure to extend]
- [Source: mvps/contractor-quoting-estimation/src/next.config.ts — current serverExternalPackages list]
- [Source: mvps/contractor-quoting-estimation/src/package.json — current dependencies (@react-pdf/renderer not yet installed)]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List

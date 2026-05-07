# Story 4.1: Customer Quote View Page

Status: done

## Story

As a customer,
I want to view a contractor's quote from a link on my phone or computer without creating an account,
so that I can review the itemized proposal, photos, and terms before deciding.

## Acceptance Criteria

1. **Given** I receive a quote link via SMS or email
   **When** I open the link at `/quote/[token]`
   **Then** I see a mobile-friendly, professionally formatted page showing the contractor's business name, logo, license number, phone, and email
   **And** I see the customer's name and address
   **And** I see all line items with descriptions, quantities, units, and unit prices plus line totals
   **And** I see subtotal, tax amount, total, and deposit amount (if configured)
   **And** I see all attached jobsite photos
   **And** I see the job notes and scope description (if present)
   **And** I see the terms and conditions text (if present)
   **And** no login or account creation is required

2. **Given** I open the quote link for the first time
   **When** the page loads
   **Then** `GET /api/quotes/view/[token]` is called server-side
   **And** the quote status transitions from `SENT` to `VIEWED` in the database
   **And** the `viewedAt` timestamp is recorded (first view only — subsequent visits do NOT overwrite `viewedAt`)
   **And** if the quote status is already `VIEWED`, `SIGNED`, or `PAID`, `viewedAt` is NOT updated again

3. **Given** the quote link uses an unguessable token (cuid2, 128+ bit entropy stored in `Quote.viewToken`)
   **When** someone attempts to guess a quote URL with an invalid or non-existent token
   **Then** `GET /api/quotes/view/[token]` returns `404`
   **And** the page renders a "Quote not found" error state (not a server crash)

4. **Given** I open the quote link
   **When** I scroll through the quote
   **Then** I see a clearly visible "Accept & Sign" call-to-action button (renders as a button element; the actual signing flow is implemented in Story 4.2 — for now the button is present but disabled or shows a "Coming Soon" placeholder)

5. **Given** the customer quote view page at `/quote/[token]`
   **When** it is rendered
   **Then** all interactive elements have minimum 44×44px touch targets
   **And** text color contrast meets WCAG AA minimums (4.5:1 for body text, 3:1 for UI components)
   **And** images have descriptive `alt` attributes
   **And** the page is readable without JavaScript (SSR — the page data is fetched server-side in the Next.js page component)

6. **Given** `GET /api/quotes/view/[token]` is called
   **When** the response is returned
   **Then** it includes: contractor profile info (businessName, logoUrl, licenseNumber, phone, email, brandColor, paymentTerms), quote fields (quoteNumber, trade, customerName, customerAddress, customerPhone, customerEmail, notes, taxRate, depositType, depositValue, termsText, status, createdAt), all line items (id, description, quantity, unit, unitPrice, sortOrder), and all photos (id, url, thumbnail, sortOrder, caption)
   **And** sensitive fields are NOT exposed: `userId`, `signerIp`, `signatureData`, `stripePaymentIntentId`

7. **Given** I view the quote and the deposit type is `FIXED`
   **When** I read the totals section
   **Then** I see "Deposit Due: $[amount]" formatted as currency

8. **Given** I view the quote and the deposit type is `PERCENTAGE`
   **When** I read the totals section
   **Then** I see "Deposit Due: [X]% — $[calculated amount]" where the dollar amount is computed from the percentage × total

9. **Given** the quote has no photos
   **When** the customer view renders
   **Then** the photo section is not shown (graceful empty state, no broken image placeholders)

10. **Given** the quote has no notes, no terms, and no deposit configured
    **When** the customer view renders
    **Then** those sections are omitted entirely (no empty boxes or "None" labels)

## Tasks / Subtasks

- [x] Task 1: Create the public API route `GET /api/quotes/view/[token]` (AC: #1, #2, #3, #6)
  - [x] 1.1 Create directory `src/src/app/api/quotes/view/[token]/` and file `route.ts`
  - [x] 1.2 Export `async function GET` — NO auth check (this is a public endpoint)
  - [x] 1.3 `await params` before destructuring `{ token }` (Next.js 16 — params is a Promise)
  - [ ] 1.4 Query the database for the quote by `viewToken`:
    ```typescript
    const quote = await prisma.quote.findUnique({
      where: { viewToken: token },
      include: {
        lineItems: { orderBy: { sortOrder: "asc" } },
        photos: { orderBy: { sortOrder: "asc" } },
        user: {
          include: { profile: true },
        },
      },
    });
    ```
  - [x] 1.5 Return `404` if `!quote` with `{ error: "Quote not found" }`
  - [x] 1.6 Apply the status-to-VIEWED transition — only update if currently `SENT`:
    ```typescript
    if (quote.status === "SENT") {
      await prisma.quote.update({
        where: { id: quote.id },
        data: { status: "VIEWED", viewedAt: new Date() },
      });
    }
    ```
  - [x] 1.7 Build the safe response payload — explicitly pick only the fields to expose (no `userId`, `signerIp`, `signatureData`, `stripePaymentIntentId`):
    ```typescript
    const responseData = {
      quote: {
        id: quote.id,
        quoteNumber: quote.quoteNumber,
        trade: quote.trade,
        status: quote.status === "SENT" ? "VIEWED" : quote.status,
        customerName: quote.customerName,
        customerAddress: quote.customerAddress,
        customerPhone: quote.customerPhone,
        customerEmail: quote.customerEmail,
        notes: quote.notes,
        taxRate: quote.taxRate,
        depositType: quote.depositType,
        depositValue: quote.depositValue,
        termsText: quote.termsText,
        createdAt: quote.createdAt,
        lineItems: quote.lineItems.map((li) => ({
          id: li.id,
          description: li.description,
          quantity: li.quantity,
          unit: li.unit,
          unitPrice: li.unitPrice,
          sortOrder: li.sortOrder,
        })),
        photos: quote.photos.map((p) => ({
          id: p.id,
          url: p.url,
          thumbnail: p.thumbnail,
          sortOrder: p.sortOrder,
          caption: p.caption,
        })),
      },
      contractor: {
        businessName: quote.user.profile?.businessName ?? "",
        logoUrl: quote.user.profile?.logoUrl ?? null,
        licenseNumber: quote.user.profile?.licenseNumber ?? null,
        phone: quote.user.profile?.phone ?? null,
        email: quote.user.profile?.email ?? null,
        brandColor: quote.user.profile?.brandColor ?? "#2563EB",
        paymentTerms: quote.user.profile?.paymentTerms ?? null,
      },
    };
    ```
  - [x] 1.8 Return `NextResponse.json({ data: responseData }, { status: 200 })`
  - [x] 1.9 Wrap in try/catch — return `500` with `{ error: "Failed to load quote." }` on unexpected errors; log the error server-side

- [x] Task 2: Create `CustomerQuoteViewData` type in `src/src/types/index.ts` (AC: #6)
  - [x] 2.1 Open `src/src/types/index.ts` (MODIFY, do NOT recreate)
  - [x] 2.2 Add the following exported interfaces after the existing types:
    ```typescript
    export interface CustomerLineItem {
      id: string;
      description: string;
      quantity: number;
      unit: string;
      unitPrice: number;
      sortOrder: number;
    }

    export interface CustomerPhoto {
      id: string;
      url: string;
      thumbnail?: string | null;
      sortOrder: number;
      caption?: string | null;
    }

    export interface ContractorPublicInfo {
      businessName: string;
      logoUrl?: string | null;
      licenseNumber?: string | null;
      phone?: string | null;
      email?: string | null;
      brandColor: string;
      paymentTerms?: string | null;
    }

    export interface CustomerQuoteViewData {
      quote: {
        id: string;
        quoteNumber: string;
        trade: Trade;
        status: QuoteStatus;
        customerName: string;
        customerAddress?: string | null;
        customerPhone?: string | null;
        customerEmail?: string | null;
        notes?: string | null;
        taxRate: number;
        depositType?: DepositType | null;
        depositValue?: number | null;
        termsText?: string | null;
        createdAt: Date | string;
        lineItems: CustomerLineItem[];
        photos: CustomerPhoto[];
      };
      contractor: ContractorPublicInfo;
    }
    ```

- [x] Task 3: Create `QuoteDisplay` component (AC: #1, #4, #5, #7, #8, #9, #10)
  - [x] 3.1 Create `src/src/components/customer-view/quote-display.tsx` (NEW file, new directory)
  - [x] 3.2 The component accepts `{ data: CustomerQuoteViewData }` as props — no server calls inside the component
  - [x] 3.3 Add `"use client"` directive at the top (the page passes SSR-fetched data as props; the component handles rendering only)
  - [x] 3.4 **Contractor header section**: display logo (Next.js `<Image>` with `alt={data.contractor.businessName}`, 80×80 max, `unoptimized` if external R2 URL), business name (heading level 1), license number (if present), phone, email. Apply the brand color from `data.contractor.brandColor` as the header background (inline style — Tailwind cannot handle dynamic hex values)
  - [x] 3.5 **Quote metadata section**: quote number, trade (display as human-readable: "Plumbing" not "PLUMBING"), date created (use `Intl.DateTimeFormat` with `{ dateStyle: "long" }` in the user's locale)
  - [x] 3.6 **Customer info section**: customer name, address (if present), phone, email
  - [x] 3.7 **Line items table**: render as a responsive table or stacked card list. Each row: description, quantity + unit (e.g., "2 each"), unit price (formatted with `formatCurrency` from `@/lib/utils`), line total (quantity × unitPrice, formatted). Show column headers. Make it scrollable horizontally on small screens (`overflow-x-auto`)
  - [x] 3.8 **Totals section**: subtotal (sum of all line item totals), tax amount (subtotal × taxRate / 100), total (subtotal + tax). Format all with `formatCurrency`. If `depositType` is set, show deposit row:
    - `FIXED`: "Deposit Due: $[depositValue]"
    - `PERCENTAGE`: "Deposit Due: [depositValue]% — $[calculatedAmount]" where `calculatedAmount = total × depositValue / 100`
  - [x] 3.9 **Notes section**: only render if `quote.notes` is truthy. Show a section heading "Project Notes" and the notes text in a `<p>` tag preserving whitespace with `whitespace-pre-wrap`
  - [x] 3.10 **Photos section**: only render if `quote.photos.length > 0`. Show a section heading "Jobsite Photos". Render each photo as an `<img>` tag (NOT Next.js `<Image>` — no domain config needed, avoids complexity) with `alt={p.caption ?? "Jobsite photo"}`, `loading="lazy"`, and `className="w-full rounded object-cover"`. Arrange in a 2-column grid on mobile
  - [x] 3.11 **Terms section**: only render if `quote.termsText` is truthy. Show a section heading "Terms & Conditions" and the text in a `<p>` with `whitespace-pre-wrap`
  - [x] 3.12 **Accept & Sign CTA button**: always render at the bottom. Use a `<button>` element with `className` including `min-h-[44px]` and `w-full`. For Story 4.1, the button shows "Accept & Sign" and is visually prominent (use the brand color or a strong blue). The button does nothing on click for now (Story 4.2 wires up the signature flow). Mark it with `data-testid="accept-sign-btn"` for future test use. Do NOT disable it — leave it enabled so reviewers can see it visually; Story 4.2 will attach the `onClick` handler

- [x] Task 4: Create the public SSR page at `/quote/[token]` (AC: #1, #3, #5)
  - [x] 4.1 Create directory `src/src/app/quote/[token]/` and file `page.tsx`
  - [x] 4.2 This is a **server component** (no `"use client"` directive). Fetch data server-side:
    ```typescript
    import { notFound } from "next/navigation";
    import { QuoteDisplay } from "@/components/customer-view/quote-display";
    import type { CustomerQuoteViewData } from "@/types";

    export default async function CustomerQuotePage({
      params,
    }: {
      params: Promise<{ token: string }>;
    }) {
      const { token } = await params;

      const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
      const res = await fetch(`${baseUrl}/api/quotes/view/${token}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        notFound();
      }

      const { data }: { data: CustomerQuoteViewData } = await res.json();

      return (
        <main className="min-h-screen bg-gray-50">
          <QuoteDisplay data={data} />
        </main>
      );
    }
    ```
  - [x] 4.3 Do NOT wrap in any auth middleware — this page is intentionally public. Verify that `src/src/middleware.ts` does NOT protect the `/quote/` path (it should only protect `/dashboard`, `/quotes`, `/profile`)
  - [x] 4.4 Add a `generateMetadata` export for SEO:
    ```typescript
    export async function generateMetadata({
      params,
    }: {
      params: Promise<{ token: string }>;
    }) {
      return {
        title: "Your Quote",
        description: "Review and accept your contractor quote",
      };
    }
    ```
  - [x] 4.5 Create `src/src/app/quote/[token]/not-found.tsx` for the 404 case:
    ```typescript
    export default function QuoteNotFound() {
      return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Quote Not Found</h1>
            <p className="text-gray-600">
              This quote link is invalid or has expired. Please contact your contractor.
            </p>
          </div>
        </main>
      );
    }
    ```

- [x] Task 5: Verify middleware does NOT protect `/quote/[token]` (AC: #1)
  - [x] 5.1 Read `src/src/middleware.ts`
  - [x] 5.2 Confirm that the middleware matcher does NOT include `/quote` paths
  - [x] 5.3 If `/quote` is accidentally protected, update the matcher config to exclude it. The correct matcher pattern protects only: `/dashboard`, `/quotes`, `/profile` paths

- [x] Task 6: Write tests for `GET /api/quotes/view/[token]` (AC: #1–#3, #6)
  - [x] 6.1 Create `src/src/app/api/quotes/view/[token]/route.test.ts`
  - [x] 6.2 Mock `@/lib/db` at the top of the file (no auth mock needed — this is a public route)
  - [x] 6.3 Define `mockQuote` fixture with all required fields including nested `lineItems`, `photos`, `user.profile`
  - [x] 6.4 Test: returns `404` when `findUnique` returns null (invalid token)
  - [x] 6.5 Test: returns `200` with correct data shape when quote exists (check `data.quote.quoteNumber`, `data.contractor.businessName`)
  - [x] 6.6 Test: updates status to `VIEWED` and sets `viewedAt` when status is `SENT`
  - [x] 6.7 Test: does NOT call `prisma.quote.update` when status is already `VIEWED`
  - [x] 6.8 Test: does NOT call `prisma.quote.update` when status is `SIGNED`
  - [x] 6.9 Test: does NOT expose `userId`, `signerIp`, `signatureData`, `stripePaymentIntentId` in response
  - [x] 6.10 Test: returns `200` even when the quote has zero photos (empty array in response)
  - [x] 6.11 Test: returns `200` even when `user.profile` is null (gracefully returns empty strings for contractor info)
  - [x] 6.12 Total new tests: at least 8

- [x] Task 7: Final verification (AC: all)
  - [x] 7.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors
  - [x] 7.2 `npm test` — all tests pass (79 existing + at least 8 new = 87+ tests)
  - [x] 7.3 Confirm `src/src/app/quote/[token]/page.tsx` exists and has no `"use client"` directive
  - [x] 7.4 Confirm `src/src/components/customer-view/quote-display.tsx` has `"use client"` directive
  - [x] 7.5 Confirm `src/src/app/api/quotes/view/[token]/route.ts` has NO `import { auth }` (public endpoint)
  - [x] 7.6 Confirm the `viewedAt` update only fires when `status === "SENT"` (not on subsequent views)
  - [x] 7.7 Confirm `userId`, `signerIp`, `signatureData`, `stripePaymentIntentId` are absent from the API response
  - [x] 7.8 Confirm `src/src/middleware.ts` matcher does NOT protect `/quote` paths

## Dev Notes

### Critical: Project Root and Directory Layout

The working directory for all `npm`, `npx prisma`, etc. commands is:
```
mvps/contractor-quoting-estimation/src/    ← package.json lives here
```

The Next.js source lives at the **nested** path:
```
mvps/contractor-quoting-estimation/src/src/
  app/
    quote/[token]/                        ← NEW: customer view page (public SSR)
      page.tsx
      not-found.tsx
    api/quotes/view/[token]/              ← NEW: public GET API for quote data
      route.ts
      route.test.ts
  components/
    customer-view/                        ← NEW directory
      quote-display.tsx                   ← NEW: read-only formatted quote component
  types/
    index.ts                              ← MODIFY: add CustomerQuoteViewData types
```

### No Prisma Migration Needed

All required Quote fields are already in the schema and migrated from previous stories:

```prisma
model Quote {
  viewToken   String      @unique @default(cuid())  // public URL token (128+ bit entropy)
  status      QuoteStatus @default(DRAFT)           // transitions SENT → VIEWED
  viewedAt    DateTime?                             // set on first customer view
  lineItems   LineItem[]
  photos      QuotePhoto[]
  user        User                                  // joined for contractor profile
}

model QuotePhoto {
  id        String @id @default(cuid())
  quoteId   String
  url       String
  thumbnail String?
  sortOrder Int    @default(0)
  caption   String?
}
```

The `viewToken` is already generated at quote creation (cuid2, unique, satisfies NFR10's 128-bit entropy requirement). No new fields or migrations are needed.

### Stack Versions

- **Next.js 16.2.2** — `params` in route handlers and page components is a `Promise<{...}>`. Always `await params` before destructuring.
- **React 19.2.4** — no changes to standard patterns
- **Zod v4.3.6** — use `err.issues[0]?.message` (NOT `err.errors`) for Zod error extraction
- **Prisma** — use `prisma.quote.findUnique({ where: { viewToken: token } })` (not `findFirst`)

### Next.js 16 Breaking Change — params is a Promise

In both API routes and page components:
```typescript
// API route
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  // ...
}

// Page component
export default async function CustomerQuotePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  // ...
}
```

### Public Route — No Auth Required

`GET /api/quotes/view/[token]` is a **public** API endpoint. Do NOT import or call `auth()`. The quote is identified only by its `viewToken` (unguessable cuid2). Any request with a valid token gets the quote data — this is intentional (the customer has no account).

Do not add rate limiting in this story. If needed, it can be added post-MVP.

### Middleware Verification

The current `src/src/middleware.ts` protects authenticated routes. Verify the matcher pattern:

```typescript
export const config = {
  matcher: ["/dashboard/:path*", "/quotes/:path*", "/profile/:path*"],
};
```

The `/quote/[token]` path must NOT be in this list. If it is, remove it. The customer view page is intentionally public.

### Status Transition — First View Only

The `viewedAt` timestamp should only be recorded on the first visit. Do not overwrite it on subsequent visits:

```typescript
// Only update if currently SENT
if (quote.status === "SENT") {
  await prisma.quote.update({
    where: { id: quote.id },
    data: { status: "VIEWED", viewedAt: new Date() },
  });
}
// If VIEWED, SIGNED, or PAID → no update, read-only
```

After the status update, the response should reflect the new status (`"VIEWED"`) even though the database record was just created. Build the response payload after the update, or explicitly set `status: quote.status === "SENT" ? "VIEWED" : quote.status` in the response.

### Safe Field Exposure

The public API must NEVER expose:
- `userId` — links quote to contractor account
- `signerIp` — PII/legal data
- `signatureData` — base64 signature image
- `stripePaymentIntentId` — payment reference

Explicitly whitelist fields in the response instead of spreading the full Prisma result. Do not use `...quote` — pick fields individually.

### QuoteDisplay Component Layout

The component should use a mobile-first, card-based layout. Suggested structure:

```
┌─────────────────────────────────┐
│  [Logo] BusinessName            │  ← brandColor background
│  License: #123456               │
│  📞 555-1234  ✉ biz@email.com  │
├─────────────────────────────────┤
│  Quote #QT-2601-0001  |  April  │
│  Plumbing  |  May 7, 2026       │
├─────────────────────────────────┤
│  Customer: John Smith           │
│  123 Main St, City, ST 12345    │
├─────────────────────────────────┤
│  Line Items                     │
│  ─────────────────────────      │
│  Water heater install    $450   │
│  2 each × $225.00               │
│  ...                            │
├─────────────────────────────────┤
│  Subtotal:           $450.00    │
│  Tax (8.25%):         $37.13    │
│  Total:              $487.13    │
│  Deposit Due: 25% — $121.78     │
├─────────────────────────────────┤
│  Project Notes                  │
│  Replace existing water heater  │
├─────────────────────────────────┤
│  [Photo] [Photo]                │
│  [Photo] [Photo]                │
├─────────────────────────────────┤
│  Terms & Conditions             │
│  Payment due within 30 days...  │
├─────────────────────────────────┤
│  ┌─────────────────────────┐   │
│  │      Accept & Sign      │   │  ← min-h-[44px], w-full, prominent
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

### Dynamic Brand Color

Tailwind cannot handle dynamic hex values in `className`. Use inline styles for the contractor header background:

```tsx
<header style={{ backgroundColor: data.contractor.brandColor }}>
  {/* ensure text contrast — use white text on colored backgrounds */}
  <h1 className="text-white font-bold text-xl">{data.contractor.businessName}</h1>
</header>
```

### Currency Formatting

Use the existing `formatCurrency` utility from `@/lib/utils`:

```typescript
import { formatCurrency } from "@/lib/utils";

// Usage
formatCurrency(lineItem.quantity * lineItem.unitPrice)  // → "$225.00"
```

Do NOT use `toFixed(2)` directly — use the shared utility for consistent formatting.

### SSR Fetch Pattern

The page fetches data server-side using the internal API. The `baseUrl` must be set:

```typescript
const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const res = await fetch(`${baseUrl}/api/quotes/view/${token}`, {
  cache: "no-store",  // always fetch fresh — quote status changes
});
```

`cache: "no-store"` is critical: the quote status changes (SENT → VIEWED) and the page must always show current state. If `notFound()` is called inside a server component, Next.js renders the nearest `not-found.tsx`.

### Test Pattern (Vitest — matches existing stories)

```typescript
// src/src/app/api/quotes/view/[token]/route.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  },
}));

import { GET } from "./route";
import { prisma } from "@/lib/db";

const mockProfile = {
  businessName: "Bob's Plumbing",
  logoUrl: null,
  licenseNumber: "PL-12345",
  phone: "555-1234",
  email: "bob@plumbing.com",
  brandColor: "#2563EB",
  paymentTerms: "Due on completion",
};

const mockQuote = {
  id: "q1",
  userId: "user-1",
  status: "SENT",
  quoteNumber: "QT-2601-0001",
  trade: "PLUMBING",
  viewToken: "tok_abc123",
  customerName: "John Smith",
  customerAddress: "123 Main St",
  customerPhone: "555-9876",
  customerEmail: "john@example.com",
  notes: "Replace water heater",
  taxRate: 8.25,
  depositType: "PERCENTAGE",
  depositValue: 25,
  termsText: "Due on completion",
  createdAt: new Date("2026-05-07"),
  viewedAt: null,
  signedAt: null,
  signatureData: null,
  signerIp: null,
  paidAt: null,
  stripePaymentIntentId: null,
  lineItems: [
    { id: "li1", description: "Water heater install", quantity: 1, unit: "each", unitPrice: 450, sortOrder: 0 },
  ],
  photos: [],
  user: { id: "user-1", profile: mockProfile },
};

describe("GET /api/quotes/view/[token]", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 404 when token does not match any quote", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(null);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/invalid-token"),
      { params: Promise.resolve({ token: "invalid-token" }) }
    );
    expect(res.status).toBe(404);
  });

  it("returns 200 with quote and contractor data", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "VIEWED", viewedAt: new Date() } as any);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123"),
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.quote.quoteNumber).toBe("QT-2601-0001");
    expect(body.data.contractor.businessName).toBe("Bob's Plumbing");
  });

  it("updates status to VIEWED and sets viewedAt when status is SENT", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "VIEWED", viewedAt: new Date() } as any);
    await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123"),
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: { status: "VIEWED", viewedAt: expect.any(Date) },
    });
  });

  it("does NOT update status when already VIEWED", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "VIEWED", viewedAt: new Date() } as any);
    await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123"),
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it("does NOT update status when status is SIGNED", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as any);
    await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123"),
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it("does NOT expose sensitive fields in response", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "VIEWED" } as any);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123"),
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    const body = await res.json();
    const quoteData = body.data.quote;
    expect(quoteData.userId).toBeUndefined();
    expect(quoteData.signerIp).toBeUndefined();
    expect(quoteData.signatureData).toBeUndefined();
    expect(quoteData.stripePaymentIntentId).toBeUndefined();
  });

  it("returns empty photos array when quote has no photos", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, photos: [] } as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "VIEWED" } as any);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123"),
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    const body = await res.json();
    expect(body.data.quote.photos).toEqual([]);
  });

  it("handles null user.profile gracefully", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      user: { id: "user-1", profile: null },
    } as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "VIEWED" } as any);
    const res = await GET(
      new Request("http://localhost/api/quotes/view/tok_abc123"),
      { params: Promise.resolve({ token: "tok_abc123" }) }
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.contractor.businessName).toBe("");
    expect(body.data.contractor.brandColor).toBe("#2563EB");
  });
});
```

### Existing Files — Do NOT Recreate

| File | What it provides |
|---|---|
| `src/lib/db.ts` | `prisma` — Prisma singleton |
| `src/lib/utils.ts` | `formatCurrency(amount: number): string` |
| `src/components/ui/button.tsx` | `Button` with `variant`, `isLoading`, `disabled` props |
| `src/types/index.ts` | `QuoteStatus`, `Trade`, `DepositType`, `QuoteData` — EXTEND with new types |
| `src/middleware.ts` | Route protection — verify `/quote` is NOT in matcher |

### New Files to Create

| File | Type | Purpose |
|---|---|---|
| `src/src/app/quote/[token]/page.tsx` | Server Component | Public SSR customer view page |
| `src/src/app/quote/[token]/not-found.tsx` | Server Component | 404 for invalid/expired tokens |
| `src/src/app/api/quotes/view/[token]/route.ts` | API Route Handler | Public GET — returns quote data, updates VIEWED status |
| `src/src/app/api/quotes/view/[token]/route.test.ts` | Test | 8+ Vitest tests for the API route |
| `src/src/components/customer-view/quote-display.tsx` | Client Component | Read-only formatted quote view |

### Modified Files

| File | Change |
|---|---|
| `src/src/types/index.ts` | Add `CustomerLineItem`, `CustomerPhoto`, `ContractorPublicInfo`, `CustomerQuoteViewData` |

### Anti-Patterns to Avoid

- **Never** put `auth()` in `GET /api/quotes/view/[token]` — this is intentionally public
- **Never** use `...quote` to spread the full Prisma result into the response — whitelist fields explicitly to avoid leaking sensitive data
- **Never** update `viewedAt` on subsequent views — only record it once (when status transitions from SENT)
- **Never** add dynamic classes like `bg-[${brandColor}]` in Tailwind — use inline `style={{ backgroundColor }}` for dynamic hex values
- **Never** use `toFixed(2)` for currency formatting — use `formatCurrency` from `@/lib/utils`
- **Never** add `"use client"` to `src/src/app/quote/[token]/page.tsx` — it must be a server component for SSR
- **Never** forget `cache: "no-store"` in the SSR fetch — the page must always show current quote status
- **Never** use `err.errors` for Zod errors — use `err.issues[0]?.message` (Zod v4)

### Current Test Count

Story 3.3 ended with **79 tests passing** across 11 test files. This story adds at least 8 new tests. Expected post-story test count: **87+ tests**.

### Project Structure Notes

- `src/src/app/quote/` directory does NOT yet exist — create it with `[token]/page.tsx` and `[token]/not-found.tsx`
- `src/src/app/api/quotes/view/` directory does NOT yet exist — create it with `[token]/route.ts`
- `src/src/components/customer-view/` directory does NOT yet exist — create it
- No npm packages need to be installed (all dependencies already present)
- No Prisma migration needed — all fields (`viewToken`, `viewedAt`, `status`, `lineItems`, `photos`, `user.profile`) are already in the schema

### References

- [Source: planning/epics.md#Epic 4 — Story 4.1: Customer Quote View Page]
- [Source: planning/architecture.md#API & Communication Patterns — GET /api/quotes/view/[token]]
- [Source: planning/architecture.md#Data Architecture — Data Model (Quote.viewToken, Quote.viewedAt, Quote.status, QuoteStatus enum)]
- [Source: planning/architecture.md#Authentication & Security — NFR10 unguessable tokens, public route validation]
- [Source: planning/architecture.md#Frontend Architecture — customer-view components, SSR for customer pages]
- [Source: planning/architecture.md#Project Structure — src/components/customer-view/, src/app/quote/[token]/]
- [Source: planning/architecture.md#Naming Patterns — kebab-case files, PascalCase components]
- [Source: planning/architecture.md#Anti-Patterns — Never store photos in DB, never skip offline layer (N/A for this story)]
- [Source: stories/3-3-quote-delivery-via-sms-and-email.md — Next.js 16 params Promise, Zod v4, Vitest test patterns, auth() pattern]
- [Source: stories/3-2-branded-pdf-generation.md — serverExternalPackages pattern, pdfUrl state]
- [Source: mvps/contractor-quoting-estimation/src/src/types/index.ts — existing QuoteData, QuoteStatus, Trade, DepositType types]
- [Source: mvps/contractor-quoting-estimation/src/src/lib/utils.ts — formatCurrency utility]
- [Source: mvps/contractor-quoting-estimation/src/src/middleware.ts — verify /quote not protected]
- [Source: planning/architecture.md#Requirements Coverage — NFR19-NFR21 WCAG 2.1 AA, 44px touch targets, color contrast]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None — implementation completed without issues.

### Completion Notes List

- Created public API route `GET /api/quotes/view/[token]` with no auth, status-to-VIEWED transition on first view only, and explicit field whitelisting to prevent sensitive data exposure (userId, signerIp, signatureData, stripePaymentIntentId never returned).
- Extended `src/types/index.ts` with `CustomerLineItem`, `CustomerPhoto`, `ContractorPublicInfo`, and `CustomerQuoteViewData` interfaces.
- Created `QuoteDisplay` client component with full mobile-first layout: branded header with dynamic inline backgroundColor (not Tailwind dynamic class), line items table with overflow-x-auto, computed totals with FIXED/PERCENTAGE deposit display, conditional sections (notes/photos/terms only render when present), and prominent Accept & Sign button with data-testid and min-h-[44px].
- Created SSR server component page at `/quote/[token]` — no `"use client"`, fetches data via internal API with `cache: "no-store"`, calls `notFound()` on API error.
- Created `not-found.tsx` for the 404 error state.
- Verified `proxy.ts` (the middleware file) matcher only covers `/dashboard/:path*`, `/quotes/:path*`, `/profile/:path*` — `/quote` is NOT protected.
- 9 new tests added (88 total, up from 79). Build passes with zero TypeScript errors.

### File List

- `mvps/contractor-quoting-estimation/src/src/app/api/quotes/view/[token]/route.ts` — NEW: public GET API route
- `mvps/contractor-quoting-estimation/src/src/app/api/quotes/view/[token]/route.test.ts` — NEW: 9 Vitest tests
- `mvps/contractor-quoting-estimation/src/src/app/quote/[token]/page.tsx` — NEW: public SSR customer view page
- `mvps/contractor-quoting-estimation/src/src/app/quote/[token]/not-found.tsx` — NEW: 404 not-found page
- `mvps/contractor-quoting-estimation/src/src/components/customer-view/quote-display.tsx` — NEW: read-only quote display component
- `mvps/contractor-quoting-estimation/src/src/types/index.ts` — MODIFIED: added CustomerLineItem, CustomerPhoto, ContractorPublicInfo, CustomerQuoteViewData interfaces

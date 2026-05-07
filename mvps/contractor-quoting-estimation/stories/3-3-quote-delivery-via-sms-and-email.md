# Story 3.3: Quote Delivery via SMS & Email

Status: done

## Story

As a contractor,
I want to send my quote to the customer via SMS or email with one tap,
so that the customer receives a professional quote link immediately.

## Acceptance Criteria

1. **Given** I have a quote with at least one line item, a generated PDF (`pdfUrl` is set), and a customer phone number (`customerPhone`)
   **When** I tap "Send via SMS"
   **Then** `POST /api/quotes/[id]/send` is called with `{ method: "sms" }`
   **And** a Twilio SMS is sent to `quote.customerPhone` containing the customer quote view URL: `${NEXT_PUBLIC_APP_URL}/quote/${quote.viewToken}`
   **And** the quote status is updated to `SENT` (if currently `DRAFT`)
   **And** the `sentAt` timestamp is recorded on the quote
   **And** the response is `200` with `{ data: { status: "SENT", sentAt: string } }`

2. **Given** I have a quote with at least one line item, a generated PDF, and a customer email address (`customerEmail`)
   **When** I tap "Send via Email"
   **Then** `POST /api/quotes/[id]/send` is called with `{ method: "email" }`
   **And** an email is sent via Resend to `quote.customerEmail` with the subject "Your Quote from [businessName]"
   **And** the email body contains the customer quote view URL and a link to download the PDF (`quote.pdfUrl`)
   **And** the quote status is updated to `SENT` (if currently `DRAFT`)
   **And** the `sentAt` timestamp is recorded on the quote
   **And** the response is `200` with `{ data: { status: "SENT", sentAt: string } }`

3. **Given** I try to send a quote via SMS but `customerPhone` is null or empty
   **When** I call `POST /api/quotes/[id]/send` with `{ method: "sms" }`
   **Then** the response is `422` with `{ error: "Customer phone number is required to send via SMS" }`
   **And** the quote status does NOT change

4. **Given** I try to send a quote via email but `customerEmail` is null or empty
   **When** I call `POST /api/quotes/[id]/send` with `{ method: "email" }`
   **Then** the response is `422` with `{ error: "Customer email address is required to send via email" }`
   **And** the quote status does NOT change

5. **Given** I try to send a quote that has no PDF generated yet (`pdfUrl` is null)
   **When** I call `POST /api/quotes/[id]/send`
   **Then** the response is `422` with `{ error: "Please generate the quote PDF before sending" }`
   **And** the quote status does NOT change

6. **Given** I try to send a quote that has zero line items
   **When** I call `POST /api/quotes/[id]/send`
   **Then** the response is `422` with `{ error: "Quote must have at least one line item before sending" }`

7. **Given** a quote has already been sent (status is `SENT`, `VIEWED`, `SIGNED`, or `PAID`)
   **When** I send again via SMS or email
   **Then** the SMS or email is sent successfully
   **And** the `sentAt` timestamp is updated to the new send time
   **And** the quote status remains unchanged (no downgrade from `VIEWED` back to `SENT`)
   **And** the response is `200`

8. **Given** `POST /api/quotes/[id]/send` is called without authentication
   **When** the request is processed
   **Then** the response is `401`

9. **Given** `POST /api/quotes/[id]/send` is called for a quote belonging to a different user
   **When** the request is processed
   **Then** the response is `404`

10. **Given** the request body contains an invalid `method` value (not `"sms"` or `"email"`)
    **When** `POST /api/quotes/[id]/send` is processed
    **Then** the response is `400` with a Zod validation error

11. **Given** I am editing a quote in `QuoteBuilder`
    **When** I view the action buttons at the bottom
    **Then** I see a "Send via SMS" button (disabled if `customerPhone` is missing or `pdfUrl` is null)
    **And** I see a "Send via Email" button (disabled if `customerEmail` is missing or `pdfUrl` is null)
    **And** if `sentAt` is set on the quote, I see "Last sent: [formatted date]" below the send buttons

12. **Given** I tap "Send via SMS" or "Send via Email" in `QuoteBuilder`
    **When** sending is in progress
    **Then** the tapped button shows a loading state and is disabled
    **And** when sending succeeds, a success toast/message appears: "Quote sent successfully!"
    **And** the "Last sent" date updates to the current time
    **And** if sending fails, an error message is shown in the save-message area

## Tasks / Subtasks

- [x] Task 1: Install Twilio and create `src/lib/twilio.ts` (AC: #1)
  - [x] 1.1 `cd mvps/contractor-quoting-estimation/src && npm install twilio`
  - [x] 1.2 Create `src/src/lib/twilio.ts` — server-only, no `"use client"` directive
  - [x] 1.3 Export `async function sendSms(to: string, body: string): Promise<void>` using lazy client creation pattern (same as resend.ts — throw if env var missing):
    ```typescript
    import twilio from "twilio";

    function getTwilioClient() {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      if (!accountSid || !authToken) {
        throw new Error("TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN must be set");
      }
      return twilio(accountSid, authToken);
    }

    export async function sendSms(to: string, body: string): Promise<void> {
      const client = getTwilioClient();
      const from = process.env.TWILIO_PHONE_NUMBER;
      if (!from) throw new Error("TWILIO_PHONE_NUMBER must be set");
      await client.messages.create({ to, from, body });
    }
    ```
  - [x] 1.4 Add `"twilio"` to `serverExternalPackages` in `next.config.ts` alongside `"bcrypt"`, `"@prisma/client"`, `"pg"`, `"@react-pdf/renderer"`

- [x] Task 2: Add `sendQuoteEmail()` to `src/lib/resend.ts` (AC: #2)
  - [x] 2.1 Open `src/src/lib/resend.ts` (MODIFY, do NOT recreate)
  - [x] 2.2 Add the following export below `sendPasswordResetEmail`:
    ```typescript
    export async function sendQuoteEmail(params: {
      to: string;
      businessName: string;
      quoteNumber: string;
      quoteViewUrl: string;
      pdfUrl: string;
    }): Promise<void> {
      const client = getResendClient();
      await client.emails.send({
        from: FROM_EMAIL,
        to: params.to,
        subject: `Your Quote from ${params.businessName}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Your Quote is Ready</h2>
            <p>${params.businessName} has sent you a quote (${params.quoteNumber}).</p>
            <p>Click the button below to view, accept, and sign your quote online:</p>
            <a
              href="${params.quoteViewUrl}"
              style="
                display: inline-block;
                background: #2563EB;
                color: white;
                padding: 12px 24px;
                border-radius: 6px;
                text-decoration: none;
                margin: 16px 0;
              "
            >
              View Your Quote
            </a>
            <p>Or download the PDF directly: <a href="${params.pdfUrl}">Download PDF</a></p>
            <p style="color: #666; font-size: 14px;">
              You can also copy this link: ${params.quoteViewUrl}
            </p>
          </div>
        `,
      });
    }
    ```

- [x] Task 3: Create Zod validation schema for send request (AC: #10)
  - [x] 3.1 Open `src/src/lib/validations/quote.ts` (MODIFY, do NOT recreate)
  - [x] 3.2 Add and export `sendQuoteSchema`:
    ```typescript
    export const sendQuoteSchema = z.object({
      method: z.enum(["sms", "email"]),
    });
    ```

- [x] Task 4: Create `POST /api/quotes/[id]/send` route (AC: #1–#10)
  - [x] 4.1 Create directory `src/src/app/api/quotes/[id]/send/` and file `route.ts`
  - [x] 4.2 Export `async function POST` — call `auth()`, return `401` if no session
  - [x] 4.3 `await params` to get `{ id }` (Next.js 16 — params is a Promise)
  - [x] 4.4 Parse and validate the request body with `sendQuoteSchema.parse(body)` — return `400` on ZodError using `err.issues[0]?.message`
  - [x] 4.5 Fetch quote with ownership check and include line items count:
    ```typescript
    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: { _count: { select: { lineItems: true } } },
    });
    ```
    Return `404` if `!quote`
  - [x] 4.6 Validate quote has at least one line item: if `quote._count.lineItems === 0`, return `422` with `{ error: "Quote must have at least one line item before sending" }`
  - [x] 4.7 Validate `pdfUrl` is set: if `!quote.pdfUrl`, return `422` with `{ error: "Please generate the quote PDF before sending" }`
  - [x] 4.8 Fetch contractor profile for business name: `const profile = await prisma.profile.findUnique({ where: { userId: session.user.id } })`
  - [x] 4.9 Build the customer quote view URL: `const quoteViewUrl = \`${process.env.NEXT_PUBLIC_APP_URL}/quote/${quote.viewToken}\``
  - [x] 4.10 For `method === "sms"`: validate `quote.customerPhone` is non-null/non-empty, return `422` with `{ error: "Customer phone number is required to send via SMS" }` if missing; otherwise call `await sendSms(quote.customerPhone, \`${profile?.businessName ?? 'Your contractor'} sent you a quote. View it here: ${quoteViewUrl}\`)`
  - [x] 4.11 For `method === "email"`: validate `quote.customerEmail` is non-null/non-empty, return `422` with `{ error: "Customer email address is required to send via email" }` if missing; otherwise call `await sendQuoteEmail({ to: quote.customerEmail, businessName: profile?.businessName ?? 'Your contractor', quoteNumber: quote.quoteNumber, quoteViewUrl, pdfUrl: quote.pdfUrl })`
  - [x] 4.12 Update quote status and sentAt using conditional logic to avoid downgrading status:
    ```typescript
    const shouldUpdateStatus = quote.status === "DRAFT";
    const updatedQuote = await prisma.quote.update({
      where: { id },
      data: {
        sentAt: new Date(),
        ...(shouldUpdateStatus ? { status: "SENT" } : {}),
      },
    });
    ```
  - [x] 4.13 Return `NextResponse.json({ data: { status: updatedQuote.status, sentAt: updatedQuote.sentAt } }, { status: 200 })`
  - [x] 4.14 Wrap all logic after auth check in try/catch — catch ZodError for `400`, return `500` on unexpected error with message `"Failed to send quote."`

- [x] Task 5: Update `QuoteBuilder` to add Send UI (AC: #11, #12)
  - [x] 5.1 Open `src/src/components/quotes/quote-builder.tsx` (MODIFY, do NOT recreate)
  - [x] 5.2 Add state: `const [sentAt, setSentAt] = useState<Date | string | null>(initialQuote.sentAt ?? null)`
  - [x] 5.3 Add state: `const [isSendingSms, setIsSendingSms] = useState(false)`
  - [x] 5.4 Add state: `const [isSendingEmail, setIsSendingEmail] = useState(false)`
  - [x] 5.5 Implement `handleSend(method: "sms" | "email")`:
    ```typescript
    async function handleSend(method: "sms" | "email") {
      const setter = method === "sms" ? setIsSendingSms : setIsSendingEmail;
      setter(true);
      setSaveMessage(null);
      try {
        const res = await fetch(`/api/quotes/${quoteId}/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ method }),
        });
        if (!res.ok) {
          const body = await res.json();
          setSaveMessage({ type: "error", text: body.error ?? "Failed to send quote." });
          return;
        }
        const { data } = await res.json();
        setSentAt(data.sentAt);
        setSaveMessage({ type: "success", text: "Quote sent successfully!" });
      } catch {
        setSaveMessage({ type: "error", text: "Network error sending quote. Please try again." });
      } finally {
        setter(false);
      }
    }
    ```
  - [x] 5.6 In the fixed bottom action bar (after the Generate PDF / Download PDF buttons), add:
    ```tsx
    <div className="border-t pt-3 mt-1">
      <p className="text-xs font-medium text-gray-500 mb-2">Send to Customer</p>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => handleSend("sms")}
          isLoading={isSendingSms}
          disabled={isSendingSms || isSendingEmail || !customerPhone || !pdfUrl}
          className="flex-1 min-h-[44px]"
        >
          Send SMS
        </Button>
        <Button
          variant="outline"
          onClick={() => handleSend("email")}
          isLoading={isSendingEmail}
          disabled={isSendingSms || isSendingEmail || !customerEmail || !pdfUrl}
          className="flex-1 min-h-[44px]"
        >
          Send Email
        </Button>
      </div>
      {sentAt && (
        <p className="text-xs text-gray-500 mt-1 text-center">
          Last sent: {new Date(sentAt).toLocaleDateString()}
        </p>
      )}
      {!pdfUrl && (
        <p className="text-xs text-amber-600 mt-1">Generate a PDF first before sending.</p>
      )}
    </div>
    ```
  - [x] 5.7 The `customerPhone` and `customerEmail` values must be derived from the existing quote form state. In `QuoteBuilder`, the customer info fields are already tracked in state (`customerName`, `customerPhone`, `customerEmail`, etc.) — reference these existing state variables directly. Do NOT add new state for them.
  - [x] 5.8 The Send SMS button is disabled when: `!customerPhone` (falsy) OR `!pdfUrl` OR sending is in progress
  - [x] 5.9 The Send Email button is disabled when: `!customerEmail` (falsy) OR `!pdfUrl` OR sending is in progress
  - [x] 5.10 Initialize `sentAt` from `initialQuote.sentAt` (same pattern as `pdfUrl`)

- [x] Task 6: Write tests for `POST /api/quotes/[id]/send` (AC: #1–#10)
  - [x] 6.1 Create `src/src/app/api/quotes/[id]/send/route.test.ts`
  - [x] 6.2 Mock `@/lib/auth`, `@/lib/db`, `@/lib/twilio`, `@/lib/resend` at the top of the file
  - [x] 6.3 Test: returns `401` when `auth()` returns null
  - [x] 6.4 Test: returns `404` when quote belongs to another user
  - [x] 6.5 Test: returns `422` when quote has zero line items
  - [x] 6.6 Test: returns `422` when `pdfUrl` is null
  - [x] 6.7 Test: returns `422` when method is `"sms"` and `customerPhone` is null
  - [x] 6.8 Test: returns `422` when method is `"email"` and `customerEmail` is null
  - [x] 6.9 Test: returns `400` when method is invalid (e.g., `"whatsapp"`)
  - [x] 6.10 Test: SMS send — returns `200`, calls `sendSms` with correct args, updates `sentAt` and status to SENT when draft
  - [x] 6.11 Test: Email send — returns `200`, calls `sendQuoteEmail` with correct args, updates `sentAt`, does NOT change status when already VIEWED
  - [x] 6.12 Total new tests: at least 9

- [x] Task 7: Update `.env.example` with new Twilio variables (AC: #1)
  - [x] 7.1 Open `mvps/contractor-quoting-estimation/src/.env.example`
  - [x] 7.2 Ensure `TWILIO_ACCOUNT_SID=`, `TWILIO_AUTH_TOKEN=`, and `TWILIO_PHONE_NUMBER=` are listed (add if missing)

- [x] Task 8: Final verification (AC: all)
  - [x] 8.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors
  - [x] 8.2 `npm test` — all tests pass (70 existing + at least 9 new = 79+ tests)
  - [x] 8.3 Verify `twilio` is listed in `package.json` dependencies
  - [x] 8.4 Verify `"twilio"` is in `serverExternalPackages` in `next.config.ts`
  - [x] 8.5 Verify `src/lib/twilio.ts` has NO `"use client"` directive
  - [x] 8.6 Verify `sendQuoteEmail` is added to `src/lib/resend.ts` (not a new file)
  - [x] 8.7 Verify quote status is not downgraded (VIEWED stays VIEWED after resend)
  - [x] 8.8 Verify Send buttons in QuoteBuilder are disabled when pdfUrl is null

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
    api/quotes/[id]/send/            ← NEW: POST send quote
  lib/
    twilio.ts                        ← NEW: Twilio SMS client
    resend.ts                        ← MODIFY: add sendQuoteEmail()
  lib/validations/
    quote.ts                         ← MODIFY: add sendQuoteSchema
  components/quotes/
    quote-builder.tsx                ← MODIFY: add send UI
```

### Dependency Installation

`twilio` is NOT in `package.json` yet. Install from the package root:

```bash
cd mvps/contractor-quoting-estimation/src
npm install twilio
```

Then add to `serverExternalPackages` in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.r2.cloudflarestorage.com" }],
  },
  serverExternalPackages: ["bcrypt", "@prisma/client", "pg", "@react-pdf/renderer", "twilio"],
};
```

`twilio` uses Node.js native APIs and must be marked external to prevent Next.js from bundling it.

### Resend is Already Installed (v6.10.0)

Resend SDK and `sendPasswordResetEmail` already exist in `src/lib/resend.ts`. The `getResendClient()` helper and `FROM_EMAIL` constant are already defined — add `sendQuoteEmail` below the existing function. Do NOT recreate the file.

### Quote Model Fields Used

From the existing Prisma schema (no migration needed — all fields already exist):

```prisma
model Quote {
  viewToken     String      @unique @default(cuid())   // used in customer URL
  status        QuoteStatus @default(DRAFT)            // DRAFT → SENT
  sentAt        DateTime?                              // updated on each send
  pdfUrl        String?                               // must be set before sending
  customerPhone String?                               // required for SMS
  customerEmail String?                               // required for email
}
```

**No Prisma migration needed.** All fields are already in the schema and migrated.

### Customer Quote View URL

The customer-facing URL is:
```
${process.env.NEXT_PUBLIC_APP_URL}/quote/${quote.viewToken}
```

`viewToken` is a cuid2 value already stored on the Quote (set at creation). This is the public page that Story 4.1 will implement. For now, the URL just needs to be included in the SMS/email even though the page doesn't exist yet.

### Status Transition Logic — No Downgrade

Only update quote status to `SENT` if currently `DRAFT`. If the quote is already `SENT`, `VIEWED`, `SIGNED`, or `PAID`, do not change the status on resend. This prevents data loss:

```typescript
const shouldUpdateStatus = quote.status === "DRAFT";
await prisma.quote.update({
  where: { id },
  data: {
    sentAt: new Date(),
    ...(shouldUpdateStatus ? { status: "SENT" } : {}),
  },
});
```

Always update `sentAt` regardless of current status — this tracks the most recent send time.

### API Route Pattern

```typescript
// src/src/app/api/quotes/[id]/send/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { sendSms } from "@/lib/twilio";
import { sendQuoteEmail } from "@/lib/resend";
import { sendQuoteSchema } from "@/lib/validations/quote";
import { ZodError } from "zod";

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

    const body = await req.json();
    const { method } = sendQuoteSchema.parse(body);

    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: { _count: { select: { lineItems: true } } },
    });
    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    if (quote._count.lineItems === 0) {
      return NextResponse.json(
        { error: "Quote must have at least one line item before sending" },
        { status: 422 }
      );
    }

    if (!quote.pdfUrl) {
      return NextResponse.json(
        { error: "Please generate the quote PDF before sending" },
        { status: 422 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
    });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const quoteViewUrl = `${appUrl}/quote/${quote.viewToken}`;
    const businessName = profile?.businessName ?? "Your contractor";

    if (method === "sms") {
      if (!quote.customerPhone) {
        return NextResponse.json(
          { error: "Customer phone number is required to send via SMS" },
          { status: 422 }
        );
      }
      await sendSms(
        quote.customerPhone,
        `${businessName} sent you a quote. View it here: ${quoteViewUrl}`
      );
    } else {
      if (!quote.customerEmail) {
        return NextResponse.json(
          { error: "Customer email address is required to send via email" },
          { status: 422 }
        );
      }
      await sendQuoteEmail({
        to: quote.customerEmail,
        businessName,
        quoteNumber: quote.quoteNumber,
        quoteViewUrl,
        pdfUrl: quote.pdfUrl,
      });
    }

    const shouldUpdateStatus = quote.status === "DRAFT";
    const updatedQuote = await prisma.quote.update({
      where: { id },
      data: {
        sentAt: new Date(),
        ...(shouldUpdateStatus ? { status: "SENT" } : {}),
      },
    });

    return NextResponse.json({
      data: { status: updatedQuote.status, sentAt: updatedQuote.sentAt },
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Send quote error:", err);
    return NextResponse.json({ error: "Failed to send quote." }, { status: 500 });
  }
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

### Next.js 16 Breaking Change — params is a Promise

Always await `params` before destructuring:

```typescript
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // ...
}
```

### Test Pattern (Vitest — matches existing stories)

```typescript
// src/src/app/api/quotes/[id]/send/route.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: { findFirst: vi.fn(), update: vi.fn() },
    profile: { findUnique: vi.fn() },
  },
}));
vi.mock("@/lib/twilio", () => ({ sendSms: vi.fn().mockResolvedValue(undefined) }));
vi.mock("@/lib/resend", () => ({
  sendPasswordResetEmail: vi.fn(),
  sendQuoteEmail: vi.fn().mockResolvedValue(undefined),
}));

import { POST } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { sendSms } from "@/lib/twilio";
import { sendQuoteEmail } from "@/lib/resend";

const mockDraftQuote = {
  id: "q1",
  userId: "user-1",
  status: "DRAFT",
  quoteNumber: "QT-2601-1234",
  trade: "PLUMBING",
  customerName: "Lisa Johnson",
  customerPhone: "+15551234567",
  customerEmail: "lisa@example.com",
  viewToken: "tok_abc123",
  pdfUrl: "https://cdn.example.com/user-1/pdf/q1.pdf",
  sentAt: null,
  _count: { lineItems: 2 },
};

describe("POST /api/quotes/[id]/send", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(401);
  });

  it("returns 404 when quote not found", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(404);
  });

  it("returns 422 when quote has no line items", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      _count: { lineItems: 0 },
    } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("at least one line item");
  });

  it("returns 422 when pdfUrl is null", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      pdfUrl: null,
    } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("generate the quote PDF");
  });

  it("returns 422 when SMS and customerPhone is null", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      customerPhone: null,
    } as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("phone number");
  });

  it("returns 422 when email and customerEmail is null", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      customerEmail: null,
    } as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "email" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.error).toContain("email address");
  });

  it("returns 400 when method is invalid", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(mockDraftQuote as any);
    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "whatsapp" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });
    expect(res.status).toBe(400);
  });

  it("sends SMS and sets status to SENT for draft quote", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue(mockDraftQuote as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const now = new Date();
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockDraftQuote,
      status: "SENT",
      sentAt: now,
    } as any);

    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "sms" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });

    expect(res.status).toBe(200);
    expect(sendSms).toHaveBeenCalledWith(
      "+15551234567",
      expect.stringContaining("tok_abc123")
    );
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: expect.objectContaining({ status: "SENT", sentAt: expect.any(Date) }),
    });
    const body = await res.json();
    expect(body.data.status).toBe("SENT");
  });

  it("sends email and does NOT downgrade status when quote is VIEWED", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      ...mockDraftQuote,
      status: "VIEWED",
    } as any);
    vi.mocked(prisma.profile.findUnique).mockResolvedValue({ businessName: "Bob's Plumbing" } as any);
    const now = new Date();
    vi.mocked(prisma.quote.update).mockResolvedValue({
      ...mockDraftQuote,
      status: "VIEWED",
      sentAt: now,
    } as any);

    const req = new Request("http://localhost/api/quotes/q1/send", {
      method: "POST",
      body: JSON.stringify({ method: "email" }),
    });
    const res = await POST(req as any, { params: Promise.resolve({ id: "q1" }) });

    expect(res.status).toBe(200);
    expect(sendQuoteEmail).toHaveBeenCalledWith(
      expect.objectContaining({ to: "lisa@example.com" })
    );
    // Status must NOT be in the update data (only sentAt)
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: { sentAt: expect.any(Date) },
    });
    const body = await res.json();
    expect(body.data.status).toBe("VIEWED");
  });
});
```

### QuoteBuilder State Integration

When reading `customerPhone` and `customerEmail` for the button disabled logic, use the existing state variables in `QuoteBuilder`. In the current implementation, customer info fields are tracked as individual `useState` hooks (`customerPhone`, `customerEmail`, etc.) OR they may be part of a form managed by React Hook Form. Check the current `quote-builder.tsx` implementation before adding new state — reference existing state/form values directly:

```typescript
// If using individual state variables (check the actual implementation):
const smsSendDisabled = !customerPhone || !pdfUrl || isSendingSms || isSendingEmail;
const emailSendDisabled = !customerEmail || !pdfUrl || isSendingSms || isSendingEmail;

// If using React Hook Form watch:
const watchedPhone = watch("customerPhone");
const watchedEmail = watch("customerEmail");
const smsSendDisabled = !watchedPhone || !pdfUrl || isSendingSms || isSendingEmail;
```

The `pdfUrl` state was introduced in Story 3.2 as `const [pdfUrl, setPdfUrl] = useState<string | null>(initialQuote.pdfUrl ?? null)`. Reference this existing state variable directly for the send button disabled logic.

### Existing Files — Do NOT Recreate

| File | What it provides |
|---|---|
| `src/lib/resend.ts` | `sendPasswordResetEmail()`, `getResendClient()`, `FROM_EMAIL` — EXTEND this file |
| `src/lib/auth.ts` | `auth()` — NextAuth session |
| `src/lib/db.ts` | `prisma` — Prisma singleton |
| `src/lib/r2.ts` | `uploadToR2(key, buffer, contentType)`, `deleteFromR2(key)` |
| `src/lib/validations/quote.ts` | Quote validation schemas — EXTEND with `sendQuoteSchema` |
| `src/components/ui/button.tsx` | `Button` with `variant`, `isLoading`, `disabled`, `size` props |
| `src/types/index.ts` | `QuoteStatus`, `Trade`, `QuoteData`, `QuotePdfData` etc. — no changes needed |

### Twilio SMS Body Format

The SMS message should be concise (SMS has no formatting). Use:

```
${businessName} sent you a quote. View it here: ${quoteViewUrl}
```

Example output: `Bob's Plumbing sent you a quote. View it here: https://quotecraft.app/quote/tok_abc123`

Keep the message under 160 characters when possible. The contractor's business name can make it longer — that is acceptable.

### Email HTML Template

The email uses inline HTML (same pattern as `sendPasswordResetEmail`). The Resend free tier (3,000 emails/month) is sufficient for MVP. The email must include:
1. A large "View Your Quote" CTA button linking to `quoteViewUrl`
2. A plain text PDF download link (`pdfUrl`)
3. The quote number for reference
4. The business name in the subject line

Do NOT use `@react-email` components — use plain HTML strings with inline styles (consistent with existing `sendPasswordResetEmail` implementation).

### Anti-Patterns to Avoid

- **Never** auto-generate the PDF inside the send route — require that PDF generation (`POST /api/quotes/[id]/pdf`) happens first; return 422 if `pdfUrl` is null
- **Never** downgrade quote status on resend (e.g., do NOT set `VIEWED` → `SENT`) — only transition from `DRAFT` to `SENT`
- **Never** expose Twilio auth tokens or Resend API keys in client components — all sending is server-side only
- **Never** create a separate `src/lib/resend.ts` file — extend the existing one
- **Never** skip the `pdfUrl` null check — the SMS/email must link to a PDF that exists
- **Never** use the `params` before awaiting it — always `const { id } = await params` (Next.js 16)
- **Never** use `err.errors` for Zod errors — use `err.issues[0]?.message` (Zod v4)
- **Never** import `twilio` in a client component — it is Node.js-only; always use it from API routes

### No Prisma Migration Needed

All required fields already exist on the Quote model and are migrated:
- `viewToken String @unique @default(cuid())` — customer-facing URL token
- `status QuoteStatus @default(DRAFT)` — updated to SENT on first send
- `sentAt DateTime?` — updated on every send
- `pdfUrl String?` — set by Story 3.2 PDF generation
- `customerPhone String?` — entered in quote builder
- `customerEmail String?` — entered in quote builder

### Current Test Count

Story 3.2 ended with **70 tests passing** across 10 test files. This story adds 9 new tests in `route.test.ts`. Expected post-story test count: **79+ tests**.

### Files to Create in This Story

**New files:**
- `src/src/lib/twilio.ts` — `sendSms(to, body): Promise<void>` wrapper
- `src/src/app/api/quotes/[id]/send/route.ts` — POST send via SMS or email
- `src/src/app/api/quotes/[id]/send/route.test.ts` — 9 Vitest tests

**Modified files:**
- `src/src/lib/resend.ts` — Add `sendQuoteEmail()` export
- `src/src/lib/validations/quote.ts` — Add `sendQuoteSchema`
- `src/src/components/quotes/quote-builder.tsx` — Add `sentAt` state, `handleSend()`, send buttons
- `mvps/contractor-quoting-estimation/src/next.config.ts` — Add `"twilio"` to `serverExternalPackages`
- `mvps/contractor-quoting-estimation/src/package.json` — `twilio` added via `npm install`
- `mvps/contractor-quoting-estimation/src/.env.example` — Add Twilio env vars if missing
- `sprint-status.yaml` — story status updated to `ready-for-dev`

### Project Structure Notes

- `src/src/app/api/quotes/[id]/send/` directory does NOT yet exist — create it
- `src/src/lib/twilio.ts` does NOT yet exist — create it
- `src/src/lib/resend.ts` already exists — extend it with `sendQuoteEmail`, do NOT recreate
- `src/src/lib/validations/quote.ts` already exists — add `sendQuoteSchema`, do NOT recreate
- `src/src/components/quotes/quote-builder.tsx` already exists — extend it, do NOT recreate
- No Prisma migration needed — all Quote fields (`viewToken`, `status`, `sentAt`, `pdfUrl`, `customerPhone`, `customerEmail`) are already in the schema

### References

- [Source: planning/epics.md#Epic 3 — Story 3.3: Quote Delivery via SMS & Email]
- [Source: planning/architecture.md#Core Architectural Decisions — SMS: Twilio, Email: Resend]
- [Source: planning/architecture.md#API & Communication Patterns — POST /api/quotes/[id]/send]
- [Source: planning/architecture.md#Data Architecture — Data Model (Quote.viewToken, Quote.sentAt, Quote.status)]
- [Source: planning/architecture.md#Infrastructure — SMS: Twilio, Email: Resend]
- [Source: planning/architecture.md#Implementation Patterns — Anti-Patterns]
- [Source: stories/3-2-branded-pdf-generation.md — Next.js 16 params Promise, Zod v4, Vitest mocks, serverExternalPackages pattern, pdfUrl state in QuoteBuilder]
- [Source: stories/3-1-jobsite-photo-capture-and-attachment.md — API route pattern, error handling, auth() usage]
- [Source: mvps/contractor-quoting-estimation/src/src/lib/resend.ts — existing client pattern, FROM_EMAIL, getResendClient()]
- [Source: mvps/contractor-quoting-estimation/src/src/lib/validations/quote.ts — existing Zod schemas to extend]
- [Source: mvps/contractor-quoting-estimation/src/next.config.ts — current serverExternalPackages]
- [Source: mvps/contractor-quoting-estimation/src/package.json — twilio not yet installed]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None.

### Completion Notes List

- Installed `twilio` v6 via npm; added to `serverExternalPackages` in `next.config.ts` alongside existing packages.
- Created `src/lib/twilio.ts` with lazy client creation pattern (server-only, no `"use client"`).
- Extended `src/lib/resend.ts` with `sendQuoteEmail()` — inline HTML email matching existing `sendPasswordResetEmail` pattern.
- Extended `src/lib/validations/quote.ts` with `sendQuoteSchema` (Zod `z.enum(["sms","email"])`).
- Created `POST /api/quotes/[id]/send/route.ts` with full validation chain: auth → ZodParse → quote ownership → line items count → pdfUrl → method-specific field check → send → conditional status update.
- Status-downgrade guard: only transitions `DRAFT → SENT`; VIEWED/SIGNED/PAID quotes keep their status, only `sentAt` is updated.
- QuoteBuilder updated with `sentAt` state, `isSendingSms`/`isSendingEmail` loading states, `handleSend()` function, and send button section in the fixed bottom bar.
- Send buttons disabled when `!pdfUrl`, `!customerPhone`/`!customerEmail`, or any send in progress.
- 9 new Vitest tests added; all 79 tests pass. Build succeeds with zero TypeScript errors.

### File List

**New:**
- `src/src/lib/twilio.ts`
- `src/src/app/api/quotes/[id]/send/route.ts`
- `src/src/app/api/quotes/[id]/send/route.test.ts`

**Modified:**
- `src/src/lib/resend.ts` — added `sendQuoteEmail()`
- `src/src/lib/validations/quote.ts` — added `sendQuoteSchema`
- `src/src/components/quotes/quote-builder.tsx` — added `sentAt` state, `handleSend()`, send buttons
- `src/next.config.ts` — added `"twilio"` to `serverExternalPackages`
- `src/package.json` — `twilio` added via `npm install`
- `src/.env.example` — added Twilio env vars
- `mvps/contractor-quoting-estimation/sprint-status.yaml` — story status → done

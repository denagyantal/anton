# Story 4.2: Electronic Signature Capture

Status: done

## Story

As a customer,
I want to sign the quote electronically from my phone,
so that the contractor has a legally binding acceptance before starting work.

## Acceptance Criteria

1. **Given** I am viewing a quote at `/quote/[token]` and I tap "Accept & Sign"
   **When** the signature interface appears
   **Then** I see a canvas area where I can draw my signature with my finger or mouse
   **And** I see my name pre-filled from the quote's `customerName` field
   **And** I can clear and redo my signature using a "Clear" button
   **And** the signature canvas has a minimum touch target area and is scrollable without accidentally drawing

2. **Given** I draw my signature and tap "Submit Signature"
   **When** the signature is submitted to `POST /api/quotes/view/[token]/sign`
   **Then** the `signatureData` (base64 PNG), `signedAt` timestamp, `signerIp` (client IP), and signer identity (the pre-filled name displayed in the UI) are recorded in the database
   **And** the quote `status` changes from `VIEWED` (or `SENT`) to `SIGNED`
   **And** the signed quote is stored and accessible in the contractor's dashboard

3. **Given** a quote is signed
   **When** the server processes the signature
   **Then** the contractor receives an email notification via Resend to their profile email address
   **And** the email includes the quote number, customer name, and sign timestamp

4. **Given** a quote has already been signed
   **When** I revisit the quote link (status is `SIGNED` or `PAID`)
   **Then** I see the quote marked as "Signed" with the signature date
   **And** the "Accept & Sign" button is NOT shown — it is replaced by the signed confirmation UI
   **And** I cannot sign again (the API returns `409` if attempted)

5. **Given** I tap "Submit Signature" without drawing anything on the canvas
   **When** validation runs
   **Then** I see an error message "Please draw your signature before submitting"
   **And** the form is not submitted

6. **Given** the signature form is submitted
   **When** the server receives the request
   **Then** the `signatureData` is validated to be a non-empty string starting with `data:image/png;base64,`
   **And** if invalid, a `400` response is returned with a human-readable error

## Tasks / Subtasks

- [x] Task 1: Create `POST /api/quotes/view/[token]/sign` API route (AC: #2, #3, #4, #6)
  - [x] 1.1 Create directory `src/src/app/api/quotes/view/[token]/sign/` and file `route.ts`
  - [x] 1.2 Export `async function POST` — NO auth check (public endpoint, authenticated by unguessable token only)
  - [x] 1.3 `await params` before destructuring `{ token }` (Next.js 16 — params is a Promise):
    ```typescript
    export async function POST(
      request: NextRequest,
      { params }: { params: Promise<{ token: string }> }
    ) {
      const { token } = await params;
    ```
  - [x] 1.4 Parse and validate request body using Zod:
    ```typescript
    const body = await request.json();
    const validated = submitSignatureSchema.parse(body);
    // validated.signatureData — base64 PNG string
    ```
  - [x] 1.5 Find the quote by `viewToken`:
    ```typescript
    const quote = await prisma.quote.findUnique({
      where: { viewToken: token },
      include: { user: { include: { profile: true } } },
    });
    if (!quote) {
      return NextResponse.json(
        { error: { code: "NOT_FOUND", message: "Quote not found" } },
        { status: 404 }
      );
    }
    ```
  - [x] 1.6 Return `409 Conflict` if already signed or paid:
    ```typescript
    if (quote.status === "SIGNED" || quote.status === "PAID") {
      return NextResponse.json(
        { error: { code: "ALREADY_SIGNED", message: "This quote has already been signed" } },
        { status: 409 }
      );
    }
    ```
  - [x] 1.7 Extract client IP from request headers (real IP comes from `x-forwarded-for` in Vercel):
    ```typescript
    const signerIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";
    ```
  - [x] 1.8 Update the quote in the database:
    ```typescript
    await prisma.quote.update({
      where: { id: quote.id },
      data: {
        status: "SIGNED",
        signedAt: new Date(),
        signatureData: validated.signatureData,
        signerIp,
      },
    });
    ```
  - [x] 1.9 Send notification email to contractor via Resend (fire-and-forget — log error but do NOT fail the request if email sending fails):
    ```typescript
    const contractorEmail = quote.user.profile?.email;
    if (contractorEmail) {
      try {
        await resend.emails.send({
          from: "QuoteCraft <noreply@quotecraft.app>",
          to: contractorEmail,
          subject: `Quote ${quote.quoteNumber} has been signed`,
          html: `
            <p>Hi ${quote.user.profile?.contactName ?? quote.user.profile?.businessName ?? "there"},</p>
            <p>Great news! Your customer <strong>${quote.customerName}</strong> has signed quote <strong>${quote.quoteNumber}</strong>.</p>
            <p>Signed at: ${new Date().toLocaleString()}</p>
            <p>Log in to QuoteCraft to view the signed quote and collect the deposit.</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send signature notification email:", emailError);
        // Do NOT rethrow — the signature was already saved successfully
      }
    }
    ```
  - [x] 1.10 Return `200` success:
    ```typescript
    return NextResponse.json({ data: { signed: true, signedAt: new Date() } }, { status: 200 });
    ```
  - [x] 1.11 Wrap entire handler in try/catch — catch ZodError separately (return 400), catch unknown errors (return 500):
    ```typescript
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json(
          { error: { code: "VALIDATION_ERROR", message: error.issues[0]?.message ?? "Invalid input" } },
          { status: 400 }
        );
      }
      console.error("Failed to process signature:", error);
      return NextResponse.json(
        { error: { code: "INTERNAL_ERROR", message: "Failed to process signature" } },
        { status: 500 }
      );
    }
    ```

- [x] Task 2: Create Zod validation schema for signature submission (AC: #6)
  - [x] 2.1 Create `src/src/lib/validations/signature.ts` (NEW file):
    ```typescript
    import { z } from "zod";

    export const submitSignatureSchema = z.object({
      signatureData: z
        .string()
        .min(1, "Signature is required")
        .refine(
          (val) => val.startsWith("data:image/png;base64,"),
          "Invalid signature format — must be a PNG base64 data URL"
        ),
    });

    export type SubmitSignatureInput = z.infer<typeof submitSignatureSchema>;
    ```

- [x] Task 3: Create `SignaturePad` component (AC: #1, #2, #5)
  - [x] 3.1 Create `src/src/components/customer-view/signature-pad.tsx` (NEW file in existing directory)
  - [x] 3.2 Add `"use client"` directive at top (canvas uses browser APIs)
  - [x] 3.3 Define props interface:
    ```typescript
    interface SignaturePadProps {
      onSubmit: (signatureData: string) => Promise<void>;
      onCancel: () => void;
      signerName: string;
      isSubmitting: boolean;
    }
    ```
  - [x] 3.4 Set up refs and state:
    ```typescript
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawingRef = useRef(false);
    const lastPosRef = useRef<{ x: number; y: number } | null>(null);
    const [hasSignature, setHasSignature] = useState(false);
    const [error, setError] = useState<string | null>(null);
    ```
  - [x] 3.5 Implement `getCanvasPos` helper — converts event coordinates to canvas-relative coordinates:
    ```typescript
    const getCanvasPos = (canvas: HTMLCanvasElement, clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    };
    ```
    Note: Scaling is required because CSS `width: 100%` stretches the canvas element but the internal canvas buffer dimensions stay at the declared `width`/`height` attributes. Without scaling, strokes appear offset on wider screens.
  - [x] 3.6 Implement `useEffect` to attach and clean up mouse + touch event listeners:
    ```typescript
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#111827";

      const startDraw = (x: number, y: number) => {
        isDrawingRef.current = true;
        lastPosRef.current = { x, y };
        ctx.beginPath();
        ctx.moveTo(x, y);
      };

      const continueDraw = (x: number, y: number) => {
        if (!isDrawingRef.current || !lastPosRef.current) return;
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        lastPosRef.current = { x, y };
        setHasSignature(true);
      };

      const stopDraw = () => {
        isDrawingRef.current = false;
        lastPosRef.current = null;
      };

      const onMouseDown = (e: MouseEvent) => {
        const pos = getCanvasPos(canvas, e.clientX, e.clientY);
        startDraw(pos.x, pos.y);
      };
      const onMouseMove = (e: MouseEvent) => {
        const pos = getCanvasPos(canvas, e.clientX, e.clientY);
        continueDraw(pos.x, pos.y);
      };
      const onMouseUp = () => stopDraw();
      const onMouseLeave = () => stopDraw();

      const onTouchStart = (e: TouchEvent) => {
        e.preventDefault(); // prevents scroll while drawing
        const touch = e.touches[0];
        const pos = getCanvasPos(canvas, touch.clientX, touch.clientY);
        startDraw(pos.x, pos.y);
      };
      const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const touch = e.touches[0];
        const pos = getCanvasPos(canvas, touch.clientX, touch.clientY);
        continueDraw(pos.x, pos.y);
      };
      const onTouchEnd = () => stopDraw();

      canvas.addEventListener("mousedown", onMouseDown);
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseup", onMouseUp);
      canvas.addEventListener("mouseleave", onMouseLeave);
      canvas.addEventListener("touchstart", onTouchStart, { passive: false });
      canvas.addEventListener("touchmove", onTouchMove, { passive: false });
      canvas.addEventListener("touchend", onTouchEnd);

      return () => {
        canvas.removeEventListener("mousedown", onMouseDown);
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseup", onMouseUp);
        canvas.removeEventListener("mouseleave", onMouseLeave);
        canvas.removeEventListener("touchstart", onTouchStart);
        canvas.removeEventListener("touchmove", onTouchMove);
        canvas.removeEventListener("touchend", onTouchEnd);
      };
    }, []);
    ```
  - [x] 3.7 Implement `clearCanvas`:
    ```typescript
    const clearCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasSignature(false);
      setError(null);
    };
    ```
  - [x] 3.8 Implement `handleSubmit`:
    ```typescript
    const handleSubmit = async () => {
      if (!hasSignature) {
        setError("Please draw your signature before submitting");
        return;
      }
      const canvas = canvasRef.current;
      if (!canvas) return;
      setError(null);
      const signatureData = canvas.toDataURL("image/png");
      await onSubmit(signatureData);
    };
    ```
  - [x] 3.9 Render the signature pad UI:
    ```tsx
    return (
      <div className="space-y-4 p-4 bg-white rounded-xl border border-gray-200">
        <div>
          <p className="text-sm text-gray-500 mb-1">Signing as:</p>
          <p className="font-semibold text-gray-900">{signerName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Draw your signature below:</p>
          <div className="border-2 border-gray-300 rounded-lg bg-gray-50 overflow-hidden">
            <canvas
              ref={canvasRef}
              width={600}
              height={200}
              className="w-full touch-none cursor-crosshair block"
              aria-label="Signature drawing area"
              role="img"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Draw your signature using your finger or mouse</p>
        </div>
        {error && (
          <p className="text-sm text-red-600" role="alert">{error}</p>
        )}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={clearCanvas}
            disabled={isSubmitting}
            className="flex-1 min-h-[44px] border border-gray-300 rounded-lg px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="flex-1 min-h-[44px] border border-gray-300 rounded-lg px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 min-h-[44px] bg-green-600 text-white rounded-lg px-4 text-sm font-semibold hover:bg-green-700 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Signature"}
          </button>
        </div>
      </div>
    );
    ```
    Note: `touch-none` CSS class (Tailwind) adds `touch-action: none` which prevents browser scroll hijacking on the canvas. The `passive: false` on touch listeners allows `e.preventDefault()` to prevent scroll during draw.

- [x] Task 4: Update `QuoteDisplay` component to wire up the signature flow (AC: #1, #2, #4, #5)
  - [x] 4.1 Open `src/src/components/customer-view/quote-display.tsx` (MODIFY — do NOT recreate)
  - [x] 4.2 Update the props interface to accept `token`:
    ```typescript
    interface QuoteDisplayProps {
      data: CustomerQuoteViewData;
      token: string;
    }
    ```
  - [x] 4.3 Add state variables inside the component:
    ```typescript
    const [showSignPad, setShowSignPad] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [localStatus, setLocalStatus] = useState(data.quote.status);
    const [localSignedAt, setLocalSignedAt] = useState<string | null>(null);
    ```
  - [x] 4.4 Implement `handleSignatureSubmit`:
    ```typescript
    const handleSignatureSubmit = async (signatureData: string) => {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const res = await fetch(`/api/quotes/view/${token}/sign`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ signatureData }),
        });
        if (!res.ok) {
          const body = await res.json();
          setSubmitError(body.error?.message ?? "Failed to submit signature. Please try again.");
          return;
        }
        const body = await res.json();
        setLocalStatus("SIGNED");
        setLocalSignedAt(body.data?.signedAt ?? new Date().toISOString());
        setShowSignPad(false);
      } catch {
        setSubmitError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    };
    ```
  - [x] 4.5 Replace the existing bottom CTA section. The logic is:
    - If `localStatus` is `SIGNED` or `PAID` → render signed confirmation UI
    - Else if `showSignPad` is true → render `<SignaturePad>` component
    - Else → render the "Accept & Sign" button:
    ```tsx
    {/* Bottom CTA — conditional on status */}
    <div className="p-4">
      {localStatus === "SIGNED" || localStatus === "PAID" ? (
        <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
          <p className="text-green-700 font-semibold text-lg">Quote Signed</p>
          {localSignedAt && (
            <p className="text-green-600 text-sm mt-1">
              Signed on {new Intl.DateTimeFormat(undefined, { dateStyle: "long", timeStyle: "short" }).format(new Date(localSignedAt))}
            </p>
          )}
          {(data.quote.status === "SIGNED" || data.quote.status === "PAID") && data.quote.signedAt && !localSignedAt && (
            <p className="text-green-600 text-sm mt-1">
              Signed on {new Intl.DateTimeFormat(undefined, { dateStyle: "long", timeStyle: "short" }).format(new Date(data.quote.signedAt))}
            </p>
          )}
        </div>
      ) : showSignPad ? (
        <div>
          {submitError && (
            <p className="text-red-600 text-sm mb-3" role="alert">{submitError}</p>
          )}
          <SignaturePad
            signerName={data.quote.customerName}
            onSubmit={handleSignatureSubmit}
            onCancel={() => { setShowSignPad(false); setSubmitError(null); }}
            isSubmitting={isSubmitting}
          />
        </div>
      ) : (
        <button
          type="button"
          data-testid="accept-sign-btn"
          onClick={() => setShowSignPad(true)}
          className="w-full min-h-[44px] bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold text-base hover:bg-blue-700 active:bg-blue-800"
        >
          Accept &amp; Sign
        </button>
      )}
    </div>
    ```
  - [x] 4.6 Import `SignaturePad` at the top of the file:
    ```typescript
    import { SignaturePad } from "@/components/customer-view/signature-pad";
    ```
  - [x] 4.7 Add `signedAt` to the `CustomerQuoteViewData` type's quote shape (needed for displaying existing signed-at date on revisit):

- [x] Task 5: Update `CustomerQuoteViewData` type to include `signedAt` (AC: #4)
  - [x] 5.1 Open `src/src/types/index.ts` (MODIFY — do NOT recreate)
  - [x] 5.2 Find the `CustomerQuoteViewData` interface's `quote` sub-object and add `signedAt`:
    ```typescript
    export interface CustomerQuoteViewData {
      quote: {
        // ... existing fields ...
        signedAt?: Date | string | null; // Add this field
        // ...
      };
      contractor: ContractorPublicInfo;
    }
    ```
  - [x] 5.3 Verify the existing `CustomerLineItem`, `CustomerPhoto`, `ContractorPublicInfo` types are untouched

- [x] Task 6: Update the public API route `GET /api/quotes/view/[token]` to expose `signedAt` (AC: #4)
  - [x] 6.1 Open `src/src/app/api/quotes/view/[token]/route.ts` (MODIFY — do NOT recreate)
  - [x] 6.2 In the `responseData` object's `quote` sub-object, add the `signedAt` field:
    ```typescript
    quote: {
      // ... existing fields ...
      signedAt: quote.signedAt,  // Add this line
      // ...
    }
    ```
    Note: `signedAt` is safe to expose — it is not a sensitive field like `signerIp` or `signatureData`.

- [x] Task 7: Update the page component to pass `token` to `QuoteDisplay` (AC: #1, #2)
  - [x] 7.1 Open `src/src/app/quote/[token]/page.tsx` (MODIFY — do NOT recreate)
  - [x] 7.2 Update the JSX return to pass `token` as a prop:
    ```tsx
    return (
      <main className="min-h-screen bg-gray-50">
        <QuoteDisplay data={data} token={token} />
      </main>
    );
    ```

- [x] Task 8: Write tests for `POST /api/quotes/view/[token]/sign` (AC: #2, #3, #4, #6)
  - [x] 8.1 Create `src/src/app/api/quotes/view/[token]/sign/route.test.ts`
  - [x] 8.2 Mock `@/lib/db` and `@/lib/resend` at the top:
    ```typescript
    vi.mock("@/lib/db", () => ({
      prisma: {
        quote: {
          findUnique: vi.fn(),
          update: vi.fn(),
        },
      },
    }));

    vi.mock("@/lib/resend", () => ({
      resend: {
        emails: {
          send: vi.fn().mockResolvedValue({ id: "email-123" }),
        },
      },
    }));
    ```
  - [x] 8.3 Define a `mockQuote` fixture with `status: "VIEWED"` and nested `user.profile`:
    ```typescript
    const mockQuote = {
      id: "q1",
      status: "VIEWED",
      quoteNumber: "QT-2601-0001",
      viewToken: "tok_abc123",
      customerName: "John Smith",
      signedAt: null,
      signatureData: null,
      signerIp: null,
      user: {
        id: "user-1",
        profile: {
          contactName: "Bob",
          businessName: "Bob's Plumbing",
          email: "bob@plumbing.com",
        },
      },
    };
    ```
  - [x] 8.4 Define `makePostRequest` helper for brevity:
    ```typescript
    const makePostRequest = (token: string, body: object) =>
      POST(
        new Request(`http://localhost/api/quotes/view/${token}/sign`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }) as NextRequest,
        { params: Promise.resolve({ token }) }
      );
    const validSignatureData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    ```
  - [x] 8.5 Write these tests (at least 9 total):
    - Test 1: Returns `404` when token does not match any quote
    - Test 2: Returns `409` when quote status is `SIGNED`
    - Test 3: Returns `409` when quote status is `PAID`
    - Test 4: Returns `400` when `signatureData` is missing from body
    - Test 5: Returns `400` when `signatureData` does not start with `data:image/png;base64,`
    - Test 6: Returns `200` and updates quote with `status: SIGNED`, `signedAt`, `signatureData`, `signerIp` when request is valid
    - Test 7: Calls `resend.emails.send` with contractor email on successful signature
    - Test 8: Still returns `200` even when `resend.emails.send` throws (fire-and-forget — email failure must not fail the request)
    - Test 9: Still returns `200` when `quote.user.profile.email` is null (skips email silently)

- [x] Task 9: Final verification (AC: all)
  - [x] 9.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors
  - [x] 9.2 `npm test` — all tests pass (88 existing + at least 9 new = 97+ tests)
  - [x] 9.3 Confirm `src/src/app/api/quotes/view/[token]/sign/route.ts` has NO `import { auth }` (public endpoint)
  - [x] 9.4 Confirm `src/src/components/customer-view/signature-pad.tsx` has `"use client"` directive
  - [x] 9.5 Confirm `QuoteDisplay` accepts `token` prop and passes it to the fetch call
  - [x] 9.6 Confirm canvas event listeners use `{ passive: false }` on touch events (required for `e.preventDefault()`)
  - [x] 9.7 Confirm `touch-none` Tailwind class is on the `<canvas>` element (prevents scroll during drawing)
  - [x] 9.8 Confirm the signed confirmation UI renders when `localStatus === "SIGNED"` (not when `showSignPad === false`)
  - [x] 9.9 Confirm email sending is fire-and-forget: wrapped in try/catch inside the route, error logged but NOT re-thrown
  - [x] 9.10 Confirm `signedAt` is exposed in `GET /api/quotes/view/[token]` response (needed for showing signed date on revisit)

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
    api/quotes/view/[token]/
      route.ts                     ← MODIFY: add signedAt to GET response
      route.test.ts                ← MODIFY: add test for signedAt in response
      sign/                        ← NEW directory
        route.ts                   ← NEW: POST sign handler
        route.test.ts              ← NEW: 9+ Vitest tests
    quote/[token]/
      page.tsx                     ← MODIFY: pass token prop to QuoteDisplay
  components/
    customer-view/
      quote-display.tsx            ← MODIFY: add signature flow, SignaturePad import, token prop
      signature-pad.tsx            ← NEW: canvas signature component
  lib/validations/
    signature.ts                   ← NEW: Zod schema for submitSignatureSchema
  types/
    index.ts                       ← MODIFY: add signedAt to CustomerQuoteViewData.quote
```

### No Prisma Migration Needed

All required Quote fields are already in the schema from Story 1.1 initial migration. No new columns needed:

```prisma
model Quote {
  signedAt        DateTime?           // ← already exists
  signatureData   String?             // ← already exists (base64 signature image)
  signerIp        String?             // ← already exists
  status          QuoteStatus         // ← already exists (SIGNED is already in the enum)
  viewToken       String @unique      // ← already exists (used for public URL)
}
```

Verify with: `cd mvps/contractor-quoting-estimation/src && npx prisma db pull` or inspect existing migration files.

### Stack Versions (from Story 4.1 completion notes)

- **Next.js 16.2.2** — `params` in route handlers and page components is a `Promise<{...}>`. Always `await params` before destructuring.
- **React 19.2.4** — standard hooks patterns apply
- **Zod v4** — use `err.issues[0]?.message` (NOT `err.errors` which does not exist in Zod v4)
- **Vitest** — test runner (not Jest). Import from `"vitest"` not `"@jest/globals"`.
- **TypeScript** — strict mode is enabled; all new code must pass `tsc --noEmit`

### Next.js 16 Breaking Change — params is a Promise

Both the GET route (already implemented) and the new POST route must `await params`:

```typescript
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  // ...
}
```

### Canvas Coordinate Scaling

The canvas element is rendered at CSS `width: 100%` but the internal buffer is `width={600} height={200}` (declared as HTML attributes). Without scaling, stroke coordinates are offset because `getBoundingClientRect()` returns the CSS size (e.g., 375px wide on mobile) while the canvas buffer is 600px wide.

The `getCanvasPos` helper accounts for this:
```typescript
const getCanvasPos = (canvas: HTMLCanvasElement, clientX: number, clientY: number) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;   // e.g., 600/375 = 1.6
  const scaleY = canvas.height / rect.height; // e.g., 200/100 = 2.0
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY,
  };
};
```

Do NOT use `e.offsetX` / `e.offsetY` — they are not available on touch events and are unreliable.

### Touch Event Handling — `passive: false` Required

To draw on a mobile canvas without the page scrolling simultaneously, `touchstart` and `touchmove` listeners must call `e.preventDefault()`. This requires registering them with `{ passive: false }`:

```typescript
canvas.addEventListener("touchstart", onTouchStart, { passive: false });
canvas.addEventListener("touchmove", onTouchMove, { passive: false });
```

Also add `touch-none` Tailwind class on the canvas (`touch-action: none`) as a CSS-level complement.

### Canvas `useEffect` Dependency Array

The `useEffect` that sets up canvas event listeners must have an **empty dependency array** `[]`. The drawing functions are defined inside the effect (capturing the latest canvas context), so they are recreated fresh on mount. Do NOT put `isDrawingRef` or `lastPosRef` in the dependency array — they are refs, not state, and their changes do not trigger re-renders.

### Public Route — No Auth Required

`POST /api/quotes/view/[token]/sign` is a **public** API endpoint. Do NOT import or call `auth()`. The quote is identified only by its `viewToken`. The endpoint is safe to keep public because:
1. The token has 128-bit entropy (cuid2) — practically unguessable
2. Signing a quote you don't have the token for is impossible
3. No sensitive contractor data is returned in the response

### IP Address Detection

In Vercel (the deployment platform), the real client IP comes via the `x-forwarded-for` header. The value may be a comma-separated list if there are multiple proxies — always take the first entry:

```typescript
const signerIp =
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
  request.headers.get("x-real-ip") ??
  "unknown";
```

In local development, `x-forwarded-for` will be null and `signerIp` will be `"unknown"` — this is acceptable.

### Resend Integration Pattern

The Resend client is initialized in `src/src/lib/resend.ts`. Import it as:
```typescript
import { resend } from "@/lib/resend";
```

Email sending is fire-and-forget — wrap it in a try/catch and log errors but never let email failures prevent signature storage. This is the correct pattern for notification side-effects that are not critical to the primary business transaction.

### QuoteDisplay: `localStatus` State Pattern

The `QuoteDisplay` component gets `data.quote.status` from SSR. After a customer signs:
1. The server updates the DB (status: SIGNED)
2. The component's local state is updated: `setLocalStatus("SIGNED")`
3. The UI re-renders to show the signed confirmation

Do NOT refetch the quote after signing — the local state is sufficient for the immediate UX. On page refresh, the SSR will load the updated `SIGNED` status from the DB.

Also track `localSignedAt` separately (set from the API response) so the confirmation can show the exact timestamp without a refetch.

### Already-Signed State on Page Load

When the page loads with a quote that is already `SIGNED` or `PAID` (the customer is revisiting), the SSR data will have `status: "SIGNED"` and `signedAt: "2026-05-07T..."`. Initialize local state accordingly:

```typescript
const [localStatus, setLocalStatus] = useState(data.quote.status);
// No need to initialize localSignedAt — the signed date comes from data.quote.signedAt when rendering
```

The rendering logic:
- `localStatus === "SIGNED" || localStatus === "PAID"` → show signed confirmation
  - If `localSignedAt` is set (just signed in this session) → show that date
  - Else → fall back to `data.quote.signedAt` (page was loaded with already-signed quote)

### `signedAt` Field in GET Response

The GET route at `src/src/app/api/quotes/view/[token]/route.ts` must expose `signedAt` so that revisiting customers see the exact signature date. Add it to the `responseData.quote` object alongside the other safe fields. `signedAt` is NOT sensitive — it is the confirmation timestamp, similar to `createdAt`.

### Test Pattern (Vitest — consistent with all existing stories)

```typescript
// src/src/app/api/quotes/view/[token]/sign/route.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  },
}));

vi.mock("@/lib/resend", () => ({
  resend: {
    emails: {
      send: vi.fn().mockResolvedValue({ id: "email-123" }),
    },
  },
}));

import { POST } from "./route";
import { prisma } from "@/lib/db";
import { resend } from "@/lib/resend";

const validSignatureData =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const mockQuote = {
  id: "q1",
  status: "VIEWED",
  quoteNumber: "QT-2601-0001",
  viewToken: "tok_abc123",
  customerName: "John Smith",
  signedAt: null,
  signatureData: null,
  signerIp: null,
  user: {
    id: "user-1",
    profile: {
      contactName: "Bob",
      businessName: "Bob's Plumbing",
      email: "bob@plumbing.com",
    },
  },
};

const makeRequest = (token: string, body: object) =>
  new Request(`http://localhost/api/quotes/view/${token}/sign`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }) as NextRequest;

describe("POST /api/quotes/view/[token]/sign", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 404 when token does not match any quote", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(null);
    const res = await POST(makeRequest("invalid", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "invalid" }),
    });
    expect(res.status).toBe(404);
  });

  it("returns 409 when quote status is already SIGNED", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as any);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(409);
  });

  it("returns 409 when quote status is PAID", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({ ...mockQuote, status: "PAID" } as any);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(409);
  });

  it("returns 400 when signatureData is missing", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    const res = await POST(makeRequest("tok_abc123", {}), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(400);
  });

  it("returns 400 when signatureData does not start with data:image/png;base64,", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    const res = await POST(makeRequest("tok_abc123", { signatureData: "not-a-valid-data-url" }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(400);
  });

  it("returns 200 and updates quote to SIGNED on valid submission", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as any);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(200);
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: "q1" },
      data: {
        status: "SIGNED",
        signedAt: expect.any(Date),
        signatureData: validSignatureData,
        signerIp: expect.any(String),
      },
    });
  });

  it("sends notification email to contractor on success", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as any);
    await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(resend.emails.send).toHaveBeenCalledWith(
      expect.objectContaining({ to: "bob@plumbing.com" })
    );
  });

  it("still returns 200 when resend.emails.send throws (fire-and-forget)", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue(mockQuote as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as any);
    vi.mocked(resend.emails.send).mockRejectedValueOnce(new Error("Resend API down"));
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(200);
  });

  it("skips email when contractor profile email is null", async () => {
    vi.mocked(prisma.quote.findUnique).mockResolvedValue({
      ...mockQuote,
      user: { id: "user-1", profile: { ...mockQuote.user.profile, email: null } },
    } as any);
    vi.mocked(prisma.quote.update).mockResolvedValue({ ...mockQuote, status: "SIGNED" } as any);
    const res = await POST(makeRequest("tok_abc123", { signatureData: validSignatureData }), {
      params: Promise.resolve({ token: "tok_abc123" }),
    });
    expect(res.status).toBe(200);
    expect(resend.emails.send).not.toHaveBeenCalled();
  });
});
```

### Existing Files — Do NOT Recreate

| File | What it provides |
|---|---|
| `src/src/lib/db.ts` | `prisma` — Prisma singleton |
| `src/src/lib/resend.ts` | `resend` — Resend client instance |
| `src/src/lib/utils.ts` | `formatCurrency(amount: number): string` |
| `src/src/components/ui/button.tsx` | `Button` UI primitive — NOT used in SignaturePad (uses raw `<button>` for fine control) |
| `src/src/types/index.ts` | `QuoteStatus`, `Trade`, `DepositType`, `CustomerQuoteViewData` — EXTEND with `signedAt` |
| `src/src/app/api/quotes/view/[token]/route.ts` | Existing GET handler — MODIFY to add `signedAt` to response |
| `src/src/app/quote/[token]/page.tsx` | Existing SSR page — MODIFY to pass `token` prop |
| `src/src/components/customer-view/quote-display.tsx` | Existing QuoteDisplay — MODIFY to add signature flow |

### New Files to Create

| File | Type | Purpose |
|---|---|---|
| `src/src/app/api/quotes/view/[token]/sign/route.ts` | API Route Handler | POST — records signature, updates status to SIGNED, sends email |
| `src/src/app/api/quotes/view/[token]/sign/route.test.ts` | Test | 9+ Vitest tests for the sign API route |
| `src/src/components/customer-view/signature-pad.tsx` | Client Component | Canvas-based signature drawing pad with clear/submit |
| `src/src/lib/validations/signature.ts` | Zod schema | `submitSignatureSchema` for signature request body validation |

### Modified Files

| File | Change |
|---|---|
| `src/src/app/api/quotes/view/[token]/route.ts` | Add `signedAt: quote.signedAt` to GET response payload |
| `src/src/app/quote/[token]/page.tsx` | Pass `token` prop to `<QuoteDisplay>` |
| `src/src/components/customer-view/quote-display.tsx` | Add `token` prop, signature state, `SignaturePad` integration, signed confirmation UI |
| `src/src/types/index.ts` | Add `signedAt?: Date \| string \| null` to `CustomerQuoteViewData.quote` |

### Anti-Patterns to Avoid

- **Never** put `auth()` in `POST /api/quotes/view/[token]/sign` — this is intentionally a public endpoint
- **Never** use `e.offsetX` / `e.offsetY` for canvas coordinates — they are unreliable across browsers/devices; always use `getBoundingClientRect()` + manual scaling
- **Never** register `touchstart`/`touchmove` listeners with `{ passive: true }` (the default) if you call `e.preventDefault()` — this throws a browser warning and breaks the scroll prevention
- **Never** set canvas width/height via CSS only — always set the HTML `width`/`height` attributes too, otherwise `toDataURL()` returns a blank image or incorrect dimensions
- **Never** let email sending failure propagate to the HTTP response — Resend errors must be caught and logged only
- **Never** use `err.errors` for Zod error messages — use `err.issues[0]?.message` (Zod v4 API change)
- **Never** refetch the entire quote after signing — use local state (`setLocalStatus`, `setLocalSignedAt`) to update the UI immediately
- **Never** spread the Prisma quote object into the API response — whitelist fields explicitly (consistent with the GET route pattern from Story 4.1)

### Current Test Count

Story 4.1 ended with **88 tests passing** across 12 test files. This story adds at least 9 new tests in the sign route test file. Expected post-story test count: **97+ tests**.

### Project Structure Notes

- `src/src/app/api/quotes/view/[token]/sign/` directory does NOT yet exist — create it
- `src/src/components/customer-view/` directory already exists (created in Story 4.1) — add `signature-pad.tsx` there
- `src/src/lib/validations/` directory already exists — add `signature.ts` there
- No npm packages need to be installed — canvas APIs are browser-native, no library needed
- No Prisma migration needed — all `signatureData`, `signerIp`, `signedAt`, `status: SIGNED` are in the existing schema

### References

- [Source: planning/epics.md#Epic 4 — Story 4.2: Electronic Signature Capture]
- [Source: planning/architecture.md#API & Communication Patterns — POST /api/quotes/view/[token]/sign]
- [Source: planning/architecture.md#Data Architecture — Data Model (Quote.signedAt, Quote.signatureData, Quote.signerIp)]
- [Source: planning/architecture.md#Authentication & Security — NFR33 signature timestamp/IP/identity for legal compliance]
- [Source: planning/architecture.md#Frontend Architecture — customer-view components, SignaturePad]
- [Source: planning/architecture.md#Core Architectural Decisions — E-signature: Custom implementation with canvas signature capture]
- [Source: planning/architecture.md#Service Boundaries — src/lib/resend.ts sole entry point for email]
- [Source: planning/architecture.md#Notification Flow — Quote signed → Resend email, fire-and-forget]
- [Source: planning/architecture.md#Naming Patterns — kebab-case files, PascalCase components, no `auth()` on public routes]
- [Source: planning/architecture.md#Anti-Patterns — never skip offline layer (N/A), never store card data (N/A)]
- [Source: stories/4-1-customer-quote-view-page.md — Stack versions (Next.js 16.2.2, React 19.2.4, Zod v4), params Promise pattern, public route pattern, Vitest test patterns, 88 test baseline]
- [Source: stories/4-1-customer-quote-view-page.md#New Files to Create — customer-view/ directory, QuoteDisplay existing structure]
- [Source: stories/3-3-quote-delivery-via-sms-and-email.md — Resend integration pattern, fire-and-forget email]
- [Source: planning/architecture.md#Requirements Coverage — NFR19-NFR21 WCAG 2.1 AA, 44px touch targets]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None.

### Completion Notes List

- Added `resend` named export to `lib/resend.ts` (delegates to lazy `getResendClient()`) so the sign route can import it and tests can mock the full module.
- The existing `resend.ts` only exported helper functions (`sendQuoteEmail`, `sendPasswordResetEmail`); a `resend` client object export was needed for the new pattern.
- All 9 new tests pass. Total test count: 97 (88 pre-existing + 9 new).
- Build produces zero TypeScript errors; all 18 routes including the new `/api/quotes/view/[token]/sign` appear in the route manifest.

### File List

**New files:**
- `src/src/lib/validations/signature.ts`
- `src/src/app/api/quotes/view/[token]/sign/route.ts`
- `src/src/app/api/quotes/view/[token]/sign/route.test.ts`
- `src/src/components/customer-view/signature-pad.tsx`

**Modified files:**
- `src/src/lib/resend.ts` — added `resend` named export
- `src/src/types/index.ts` — added `signedAt` to `CustomerQuoteViewData.quote`
- `src/src/app/api/quotes/view/[token]/route.ts` — expose `signedAt` in GET response
- `src/src/components/customer-view/quote-display.tsx` — added `token` prop, signature state, `SignaturePad` integration, signed confirmation UI
- `src/src/app/quote/[token]/page.tsx` — pass `token` prop to `QuoteDisplay`

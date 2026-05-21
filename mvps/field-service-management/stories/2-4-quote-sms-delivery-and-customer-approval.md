# Story 2.4: Quote SMS Delivery and Customer Approval

Status: ready-for-dev

## Story

As a tradesperson,
I want to send a finalized quote to my customer via SMS and have them approve it with one tap from their phone,
so that I get faster quote decisions without phone tag or email delays.

## Acceptance Criteria

1. **Given** a quote has line items and a generated PDF (`pdfUrl` is non-empty), **when** the user taps "Send Quote" on the quote detail screen, **then** `POST /api/v1/quotes/:id/send` is called; an SMS is dispatched to the customer's phone number via Twilio containing the business name, formatted total, and a signed approval URL (`{WEB_APP_URL}/quote/{token}`); the quote status updates to `SENT` with `sent_at` = now and `expires_at` = now + 30 days; and the WatermelonDB quote record is updated immediately to reflect the new status, `sentAt`, `expiresAt`, and `approvalToken` values. (FR4, FR48)

2. **Given** a customer receives the SMS link, **when** they tap it, **then** a mobile-friendly web page at `/quote/[token]` renders the business name, customer name, all line items (description, quantity, unit price, line total), subtotal, tax, grand total, and an embedded "View PDF" link; and the API atomically transitions the quote status from `SENT` → `VIEWED`. (FR5)

3. **Given** the customer is on the quote approval web page, **when** they tap "Approve", **then** `POST /api/v1/quotes/approve/:token` is called; the quote status changes to `APPROVED` with `approved_at` = now; and the tradesperson's device receives an Expo push notification with title "Quote Approved!" and a body naming the customer. (FR47)

4. **Given** the customer is on the quote approval web page, **when** they tap "Decline", **then** `POST /api/v1/quotes/decline/:token` is called; the quote status changes to `DECLINED`; and the tradesperson's device receives an Expo push notification "Quote Declined". (FR47)

5. **Given** a quote was sent more than 30 days ago, **when** the public `/view/:token` or `/approve/:token` or `/decline/:token` endpoint is called, **then** the API returns HTTP 410 Gone; the approval page renders "This quote has expired" and hides the Approve/Decline buttons. (NFR10)

6. **Given** the user taps "Send Quote" while the device is offline, **then** an error toast is displayed ("Send requires an internet connection") and no status change is made. SMS delivery requires connectivity — this action is intentionally not offline-capable.

7. **Given** the system dispatches an SMS via Twilio, **when** the message is sent under normal network conditions, **then** delivery occurs within 60 seconds per Twilio SLA. (NFR5, NFR19)

## Tasks / Subtasks

- [ ] Task 1: Install new dependencies (AC: #1, #3, #4)
  - [ ] 1.1: In `apps/api/`: run `npm install twilio` — Twilio v5+ ships its own TypeScript types; no `@types/twilio` needed
  - [ ] 1.2: In `apps/mobile/`: run `npx expo install expo-notifications` — installs the version compatible with Expo SDK 52

- [ ] Task 2: Prisma — add push_token to TeamMember (AC: #3, #4)
  - [ ] 2.1: In `apps/api/prisma/schema.prisma`, add `pushToken  String?  @map("push_token")` to the `TeamMember` model, placed after the `authUserId` field
  - [ ] 2.2: Run `npx prisma generate` from `apps/api/` to regenerate the Prisma client (no live DB required for client generation; dev environment must run `npx prisma migrate dev` separately)

- [ ] Task 3: Create Twilio config (AC: #1)
  - [ ] 3.1: Create `apps/api/src/config/twilio.ts` — import `twilio` from `'twilio'`; export `const twilioClient = twilio(process.env['TWILIO_ACCOUNT_SID'], process.env['TWILIO_AUTH_TOKEN'])`; export `const TWILIO_PHONE_NUMBER = process.env['TWILIO_PHONE_NUMBER'] ?? ''`
  - [ ] 3.2: Add to `apps/api/.env.example`: `TWILIO_ACCOUNT_SID=`, `TWILIO_AUTH_TOKEN=`, `TWILIO_PHONE_NUMBER=`, `WEB_APP_URL=http://localhost:3000`

- [ ] Task 4: Create token utility (AC: #1, #2, #3, #4, #5)
  - [ ] 4.1: Create `apps/api/src/utils/signed-url.ts` — `import { randomBytes } from 'crypto'`; export `function generateToken(): string { return randomBytes(32).toString('hex'); }` — produces a 64-char hex string used as the opaque approval token

- [ ] Task 5: Create sms-service.ts (AC: #1)
  - [ ] 5.1: Create `apps/api/src/services/sms-service.ts` — export `async function sendSms(to: string, body: string): Promise<void>` that calls `twilioClient.messages.create({ to, from: TWILIO_PHONE_NUMBER, body })`; throws `AppError('SMS_DELIVERY_FAILED', error.message, 502)` on Twilio error
  - [ ] 5.2: Create `apps/api/src/services/sms-service.test.ts` — mock `../config/twilio.js` with `{ twilioClient: { messages: { create: jest.fn() } }, TWILIO_PHONE_NUMBER: '+15550000000' }`; test that `sendSms('+15551234567', 'test')` calls `messages.create` with correct `to`, `from`, and `body`; test that Twilio error is rethrown as `AppError`

- [ ] Task 6: Create notification-service.ts (AC: #3, #4)
  - [ ] 6.1: Create `apps/api/src/services/notification-service.ts` — export `async function sendPushNotification(pushToken: string | null | undefined, title: string, body: string): Promise<void>` using the Expo Push HTTP API (see Dev Notes for exact implementation); if `pushToken` is falsy, return immediately without error (tradesperson may not have granted push permissions)
  - [ ] 6.2: Wrap the fetch in a try/catch and log errors to console but do NOT throw — a failed push notification must not cause the approve/decline request to fail

- [ ] Task 7: Add `POST /:id/send` route to quotes.ts (AC: #1)
  - [ ] 7.1: In `apps/api/src/routes/quotes.ts`, add `POST /:id/send` (protected by `authMiddleware`):
    - Look up `accountId` via `getAccountId(req.user!.id)`
    - Fetch quote with `prisma.quote.findFirst({ where: { id: quoteId, account_id: accountId }, include: { customer: true } })`; 404 if not found
    - Return 422 if `quote.pdf_url` is null/empty (PDF must exist before sending)
    - Return 422 if `quote.status === 'APPROVED' || quote.status === 'DECLINED'` (terminal states)
    - Generate `approvalToken = generateToken()`
    - Compute `sentAt = new Date()`, `expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)`
    - Fetch account for `businessName`: `prisma.account.findUnique({ where: { id: accountId }, select: { businessName: true } })`
    - `prisma.quote.update` setting `status='SENT'`, `approval_token`, `sent_at`, `expires_at`
    - Build SMS: `` `${businessName ?? 'Your contractor'} sent you an estimate for $${(quote.total / 100).toFixed(2)}. View and approve: ${process.env['WEB_APP_URL']}/quote/${approvalToken}` ``
    - Call `sendSms(quote.customer.phone, smsBody)`
    - Return `200 { data: { status: 'SENT', sentAt: sentAt.toISOString(), expiresAt: expiresAt.toISOString(), approvalToken } }`

- [ ] Task 8: Add public customer routes to quotes.ts (AC: #2, #3, #4, #5)
  - [ ] 8.1: Add `GET /view/:token` (NO `authMiddleware`) — finds quote by `approval_token`; returns 404 if not found; returns 410 if `expires_at < now`; if status is `SENT`, atomically updates to `VIEWED`; fetches account and line items; returns full quote data shape (see Dev Notes for exact response shape)
  - [ ] 8.2: Add `POST /approve/:token` (NO `authMiddleware`) — finds quote by `approval_token`; 404 if not found; 410 if expired; if already `APPROVED` return 200 immediately (idempotent); reject with 422 if status is `DECLINED`; update status to `APPROVED`, `approved_at = now`; find account owner's push token via `prisma.teamMember.findFirst({ where: { accountId: quote.account_id, role: 'OWNER' }, select: { pushToken: true } })`; call `sendPushNotification(pushToken, 'Quote Approved!', 'A customer approved your estimate.')`; return `200 { data: { status: 'APPROVED' } }`
  - [ ] 8.3: Add `POST /decline/:token` (NO `authMiddleware`) — same lookup/expiry pattern; if already `DECLINED` return 200 (idempotent); reject with 422 if status is `APPROVED`; update status to `DECLINED`; send push notification "Quote Declined"; return `200 { data: { status: 'DECLINED' } }`

- [ ] Task 9: Update quotes.test.ts — add tests for new routes (AC: #1–#5)
  - [ ] 9.1: Add mocks at top of existing `quotes.test.ts`: `jest.mock('../services/sms-service.js', ...)` and `jest.mock('../services/notification-service.js', ...)` and `jest.mock('../utils/signed-url.js', ...)` (returns fixed token)
  - [ ] 9.2: Add `describe('POST /api/v1/quotes/:id/send')` tests: success (200, SMS called), missing PDF (422), terminal status (422), quote not found (404), unauthorized (401)
  - [ ] 9.3: Add `describe('GET /api/v1/quotes/view/:token')` tests: success (200, returns quote data), expired (410), not found (404)
  - [ ] 9.4: Add `describe('POST /api/v1/quotes/approve/:token')` tests: success (200, push sent), expired (410), already approved idempotent (200), declined-then-approve (422)
  - [ ] 9.5: Add `describe('POST /api/v1/quotes/decline/:token')` tests: success (200, push sent), expired (410)

- [ ] Task 10: Add push token endpoint to accounts.ts (AC: #3, #4)
  - [ ] 10.1: In `apps/api/src/routes/accounts.ts`, add `PATCH /me/push-token` (protected by existing `router.use(authMiddleware)`):
    - Body schema: `z.object({ pushToken: z.string().min(1) })`
    - Find team member by `req.user!.id`; 404 if not found
    - `prisma.teamMember.update({ where: { id: teamMember.id }, data: { pushToken: body.pushToken } })`
    - Return `200 { data: { ok: true } }`

- [ ] Task 11: Create mobile notification-service.ts (AC: #3, #4)
  - [ ] 11.1: Create `apps/mobile/src/services/notification-service.ts` — export `async function registerPushToken(): Promise<void>` (see Dev Notes for full implementation)
  - [ ] 11.2: Wrap ALL calls in try/catch; log errors with `console.warn`; never throw — push registration is non-critical and must not crash the app

- [ ] Task 12: Wire push token registration in mobile auth flow (AC: #3, #4)
  - [ ] 12.1: In `apps/mobile/src/contexts/auth-context.tsx`, after a successful login/session restore (where `user` is set), call `registerPushToken()` in the effect — import from `../services/notification-service`

- [ ] Task 13: Update mobile quote detail screen — add Send Quote button (AC: #1, #6)
  - [ ] 13.1: In `apps/mobile/app/(tabs)/more/quotes/[id].tsx`, add `isSending` state and `handleSendQuote` callback:
    - Disabled conditions: `!quote.pdfUrl` (no PDF yet), `isSending`, or `quote.status === 'APPROVED' || quote.status === 'DECLINED'`
    - On press: set `isSending = true`; call `apiClient.post<SendQuoteResult>(`/api/v1/quotes/${id}/send`)`; on success, `database.write()` to update quote record (`status`, `sentAt`, `approvalToken`); show `Alert.alert('Quote Sent', 'SMS delivered to customer.')`; on error, show error alert; finally set `isSending = false`
  - [ ] 13.2: Render "Send Quote" button in the actions section — styled with primary blue button, below "Generate PDF"; button text is "Send Quote" normally, "Sending..." when `isSending`
  - [ ] 13.3: Add `SendQuoteResult` interface inline: `{ status: string; sentAt: string; expiresAt: string; approvalToken: string }`

- [ ] Task 14: Create web app customer quote approval page (AC: #2, #3, #4, #5)
  - [ ] 14.1: Create directory structure `apps/web/src/app/(public)/quote/[token]/`
  - [ ] 14.2: Create `apps/web/src/app/(public)/quote/[token]/page.tsx` — Next.js server component (see Dev Notes for implementation)
  - [ ] 14.3: Create `apps/web/src/app/(public)/quote/[token]/approve-buttons.tsx` — `'use client'` component (see Dev Notes for implementation)
  - [ ] 14.4: Add `API_URL` env to `apps/web/.env.example` and `apps/web/.env.local.example`: `API_URL=http://localhost:3001` and `NEXT_PUBLIC_API_URL=http://localhost:3001`

## Dev Notes

### Architecture Compliance

- **Public routes (no auth):** `GET /view/:token`, `POST /approve/:token`, `POST /decline/:token` intentionally have NO `authMiddleware` — customers access these without an account. Token secrecy replaces authentication. Do NOT add auth middleware to these routes.
- **Approval token = only lookup key:** Quote `id` (UUID) must NEVER appear in customer-facing URLs. Only `approval_token` (opaque hex string) is used.
- **WatermelonDB is NOT updated by the API:** When the tradesperson sends a quote, the mobile client updates WatermelonDB itself after the API call succeeds (same pattern as `generate-pdf` in Story 2.3). No sync magic needed for the SENT status — it happens immediately.
- **Push notification failures are silent:** A failed push must not cause the HTTP response to fail. Wrap in try/catch in `notification-service.ts` and in the route handler.
- **SMS requires connectivity:** This is one intentional exception to offline-first. `sendSms` requires Twilio connectivity. The mobile button should check `NetInfo` or just let the API call fail and show an error toast.
- **No NativeWind:** Mobile styling via `StyleSheet.create`. No UI library installs.

### Twilio SDK (v5+) — Correct Usage Pattern

Twilio v5 changed the import pattern. Use:
```typescript
// apps/api/src/config/twilio.ts
import twilio from 'twilio';

export const twilioClient = twilio(
  process.env['TWILIO_ACCOUNT_SID']!,
  process.env['TWILIO_AUTH_TOKEN']!,
);
export const TWILIO_PHONE_NUMBER = process.env['TWILIO_PHONE_NUMBER'] ?? '';
```

```typescript
// apps/api/src/services/sms-service.ts
import { twilioClient, TWILIO_PHONE_NUMBER } from '../config/twilio.js';
import { AppError } from '../utils/error.js';

export async function sendSms(to: string, body: string): Promise<void> {
  try {
    await twilioClient.messages.create({ to, from: TWILIO_PHONE_NUMBER, body });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'SMS delivery failed';
    throw new AppError('SMS_DELIVERY_FAILED', message, 502);
  }
}
```

**Mocking Twilio in tests** — Twilio cannot be imported with standard jest.mock because of how it exports. Use this pattern in test files:
```typescript
jest.mock('../config/twilio.js', () => ({
  twilioClient: { messages: { create: jest.fn().mockResolvedValue({}) } },
  TWILIO_PHONE_NUMBER: '+15550000000',
}));
```

### Expo Push Notification API (no SDK on server)

```typescript
// apps/api/src/services/notification-service.ts
export async function sendPushNotification(
  pushToken: string | null | undefined,
  title: string,
  body: string,
): Promise<void> {
  if (!pushToken) return;

  try {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: pushToken, title, body, sound: 'default' }),
    });
  } catch (err) {
    console.error('[notification-service] push failed:', err);
    // Never throw — push failure must not break the HTTP response
  }
}
```

### Mobile Push Token Registration

```typescript
// apps/mobile/src/services/notification-service.ts
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { apiClient } from './api-client';

export async function registerPushToken(): Promise<void> {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') return;

    const projectId =
      Constants.expoConfig?.extra?.eas?.projectId as string | undefined;
    if (!projectId) return; // No project ID in local dev without EAS — skip silently

    const tokenResult = await Notifications.getExpoPushTokenAsync({ projectId });
    await apiClient.patch('/api/v1/accounts/me/push-token', {
      pushToken: tokenResult.data,
    });
  } catch (err) {
    console.warn('[notification-service] push token registration failed:', err);
    // Non-critical — app works fine without push
  }
}
```

Note: `Notifications.getExpoPushTokenAsync` only works on a physical device or with Expo Go on a device. On iOS/Android simulators it will throw. The try/catch handles this silently.

### GET /view/:token — Response Shape

The public view endpoint must return enough data for the web page to render the full quote without additional API calls:
```typescript
// Fetch from Prisma with includes:
const quote = await prisma.quote.findFirst({
  where: { approval_token: token },
  include: {
    customer: { select: { name: true } },
    line_items: { orderBy: { sort_order: 'asc' } },
    account: { select: { businessName: true, businessLogoUrl: true, licenseNumber: true } },
  },
});

// Response shape:
res.status(200).json({
  data: {
    quoteId: quote.id,
    status: quote.status,
    businessName: quote.account.businessName ?? '',
    businessLogoUrl: quote.account.businessLogoUrl ?? null,
    licenseNumber: quote.account.licenseNumber ?? null,
    customerName: quote.customer.name,
    lineItems: quote.line_items.map(li => ({
      description: li.description,
      quantity: Number(li.quantity),
      unitPrice: li.unit_price,   // integer cents
      total: li.total,            // integer cents
    })),
    subtotal: quote.subtotal,    // integer cents
    taxAmount: quote.tax_amount, // integer cents
    total: quote.total,          // integer cents
    pdfUrl: quote.pdf_url ?? null,
    expiresAt: quote.expires_at?.toISOString() ?? null,
  },
});
```

### Web App Pages (Next.js 15 App Router + Tailwind)

```typescript
// apps/web/src/app/(public)/quote/[token]/page.tsx
const API_URL = process.env['API_URL'] ?? 'http://localhost:3001';

type QuoteData = {
  quoteId: string; status: string; businessName: string; businessLogoUrl: string | null;
  customerName: string; lineItems: Array<{description: string; quantity: number; unitPrice: number; total: number}>;
  subtotal: number; taxAmount: number; total: number; pdfUrl: string | null; expiresAt: string | null;
};

export default async function QuotePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const res = await fetch(`${API_URL}/api/v1/quotes/view/${token}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    const isExpired = res.status === 410;
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isExpired ? 'Quote Expired' : 'Quote Not Found'}
          </h1>
          <p className="text-gray-500">
            {isExpired
              ? 'This quote link has expired. Please contact your service provider.'
              : 'This quote is no longer available.'}
          </p>
        </div>
      </div>
    );
  }

  const { data: quote } = (await res.json()) as { data: QuoteData };

  const formatMoney = (cents: number) => `$${(cents / 100).toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          {quote.businessLogoUrl && (
            <img src={quote.businessLogoUrl} alt="Business logo" className="h-12 mb-3 object-contain" />
          )}
          <h1 className="text-xl font-bold text-gray-900">{quote.businessName}</h1>
          <p className="text-gray-600 mt-1">Estimate for {quote.customerName}</p>
        </div>

        {/* Line Items */}
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h2 className="font-semibold text-gray-700 mb-3">Estimate Details</h2>
          {quote.lineItems.map((item, i) => (
            <div key={i} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-800">{item.description}</p>
                <p className="text-xs text-gray-500">{item.quantity} × {formatMoney(item.unitPrice)}</p>
              </div>
              <p className="text-sm font-semibold text-gray-800">{formatMoney(item.total)}</p>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Subtotal</span><span>{formatMoney(quote.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tax</span><span>{formatMoney(quote.taxAmount)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span><span>{formatMoney(quote.total)}</span>
            </div>
          </div>
        </div>

        {/* PDF Link */}
        {quote.pdfUrl && (
          <div className="mb-4">
            <a href={quote.pdfUrl} target="_blank" rel="noopener noreferrer"
               className="block text-center bg-gray-100 text-blue-600 font-medium py-3 rounded-lg">
              View PDF Quote
            </a>
          </div>
        )}

        {/* Approve/Decline Buttons */}
        {(quote.status === 'SENT' || quote.status === 'VIEWED') && (
          <ApproveButtons token={token} apiUrl={process.env['NEXT_PUBLIC_API_URL'] ?? API_URL} />
        )}

        {quote.status === 'APPROVED' && (
          <div className="text-center bg-green-50 rounded-lg p-6">
            <p className="text-green-700 font-semibold text-lg">Quote Approved</p>
            <p className="text-green-600 text-sm mt-1">Thank you! We'll be in touch to schedule your service.</p>
          </div>
        )}
        {quote.status === 'DECLINED' && (
          <div className="text-center bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 font-semibold">Quote Declined</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

```typescript
// apps/web/src/app/(public)/quote/[token]/approve-buttons.tsx
'use client';

import { useState } from 'react';

export default function ApproveButtons({
  token,
  apiUrl,
}: {
  token: string;
  apiUrl: string;
}) {
  const [decision, setDecision] = useState<'approved' | 'declined' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAction = async (action: 'approve' | 'decline') => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/api/v1/quotes/${action}/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      setDecision(action === 'approve' ? 'approved' : 'declined');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (decision === 'approved') {
    return (
      <div className="text-center bg-green-50 rounded-lg p-6">
        <p className="text-green-700 font-semibold text-lg">Quote Approved!</p>
        <p className="text-green-600 text-sm mt-1">Thank you! We'll be in touch to schedule your service.</p>
      </div>
    );
  }
  if (decision === 'declined') {
    return (
      <div className="text-center bg-gray-50 rounded-lg p-6">
        <p className="text-gray-700 font-semibold">Quote Declined</p>
        <p className="text-gray-500 text-sm mt-1">We've received your decision.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <button
        onClick={() => handleAction('approve')}
        disabled={isLoading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-4 rounded-lg text-lg"
      >
        {isLoading ? 'Processing...' : 'Approve Quote'}
      </button>
      <button
        onClick={() => handleAction('decline')}
        disabled={isLoading}
        className="w-full bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 text-gray-700 font-semibold py-4 rounded-lg text-lg"
      >
        Decline
      </button>
    </div>
  );
}
```

### WatermelonDB Update After Send (mobile) — Follow Story 2.3 Pattern

```typescript
// In handleSendQuote callback on quote detail screen:
interface SendQuoteResult {
  status: string;
  sentAt: string;
  expiresAt: string;
  approvalToken: string;
}

const result = await apiClient.post<SendQuoteResult>(`/api/v1/quotes/${id}/send`);
await database.write(async () => {
  await (quote as Quote).update((record) => {
    record.status = result.status;            // 'SENT'
    record.sentAt = Date.parse(result.sentAt); // number (ms timestamp)
    record.approvalToken = result.approvalToken;
  });
});
```

### Prisma Lookup Pattern for Public Routes

Public routes look up by `approval_token` (not `id`). Follow the exact same `account_id` verification pattern for security:
```typescript
const quote = await prisma.quote.findFirst({
  where: { approval_token: token },
  include: {
    customer: { select: { name: true, phone: true } },
    line_items: { orderBy: { sort_order: 'asc' } },
    account: { select: { id: true, businessName: true, businessLogoUrl: true, licenseNumber: true } },
  },
});
if (!quote) {
  res.status(404).json({ error: { code: 'QUOTE_NOT_FOUND', message: 'Quote not found', status: 404 } });
  return;
}
if (quote.expires_at && quote.expires_at < new Date()) {
  res.status(410).json({ error: { code: 'QUOTE_EXPIRED', message: 'This quote has expired', status: 410 } });
  return;
}
```

### Route Ordering — CRITICAL

In `quotes.ts`, register public routes (`:token` paths) BEFORE `authMiddleware` is applied to `:id` routes. The current router does NOT use `router.use(authMiddleware)` globally — it applies `authMiddleware` per-route. This is the correct pattern already established; add public routes without it.

However, Express route matching can conflict: `GET /view/:token` matches before `GET /:id` patterns since Express matches in declaration order. Register all `/view/`, `/approve/`, `/decline/` routes at specific paths before any `/:id` dynamic route would cause conflict. The existing `/:id/photos` and `/:id/generate-pdf` routes use two-segment paths so there is no ambiguity — the new single-segment token routes (`/view/:token`) are distinct.

### No WatermelonDB Schema Changes

All required Quote fields (`approval_token`, `sent_at`, `approved_at`, `expires_at`, `status`) already exist in both WatermelonDB schema (version 5) and Prisma schema from prior stories. **Do NOT bump the WatermelonDB schema version or add migration steps for this story.**

### Environment Variables

Add to `apps/api/.env.example`:
```
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
WEB_APP_URL=http://localhost:3000
```

Add to `apps/web/.env.example` (if file exists) or create `apps/web/.env.local.example`:
```
API_URL=http://localhost:3001
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Project Structure Notes

Files to modify:
```
apps/api/prisma/schema.prisma                     MODIFIED (add pushToken to TeamMember)
apps/api/src/routes/quotes.ts                     MODIFIED (add send/view/approve/decline routes)
apps/api/src/routes/quotes.test.ts                MODIFIED (add tests for new routes)
apps/api/src/routes/accounts.ts                   MODIFIED (add PATCH /me/push-token)
apps/mobile/app/(tabs)/more/quotes/[id].tsx       MODIFIED (add Send Quote button)
apps/mobile/src/contexts/auth-context.tsx         MODIFIED (call registerPushToken on login)
apps/api/package.json                             MODIFIED (add twilio)
apps/mobile/package.json                          MODIFIED (add expo-notifications)
```

Files to create:
```
apps/api/src/config/twilio.ts                                            NEW
apps/api/src/utils/signed-url.ts                                         NEW
apps/api/src/services/sms-service.ts                                     NEW
apps/api/src/services/sms-service.test.ts                                NEW
apps/api/src/services/notification-service.ts                            NEW
apps/mobile/src/services/notification-service.ts                         NEW
apps/web/src/app/(public)/quote/[token]/page.tsx                         NEW
apps/web/src/app/(public)/quote/[token]/approve-buttons.tsx              NEW
```

All paths are relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 2.4] — All acceptance criteria, FR4, FR5, FR47, FR48, NFR5, NFR10, NFR19
- [Source: planning/architecture.md#Infrastructure & Deployment] — SMS via Twilio; Push via Expo Push Notifications; PDF storage Supabase; signed URLs with 30-day expiry
- [Source: planning/architecture.md#API & Communication Patterns] — REST endpoints; `{ data: ... }` / `{ error: ... }` format; `/api/v1/` prefix; `POST /api/v1/quotes/:id/send`; `POST /api/v1/quotes/:id/approve`
- [Source: planning/architecture.md#Data Model] — quotes.approval_token, quotes.sent_at, quotes.approved_at, quotes.expires_at; team_members.push_token (adding this story)
- [Source: planning/architecture.md#Naming Patterns] — snake_case DB, camelCase TypeScript, kebab-case files
- [Source: planning/architecture.md#Service Boundaries] — sms-service owns Twilio; notification-service owns Expo Push; pdf-service owns PDFs; signed-url.ts for token generation
- [Source: planning/architecture.md#Security Requirements] — Signed URLs with 30-day expiry (NFR10); customer-facing links use token not ID
- [Source: stories/2-3-quote-photo-attachments-and-pdf-generation.md] — established WatermelonDB update pattern post-API-call; quotes router structure; test file mock pattern; `getAccountId` helper; no NativeWind; StyleSheet.create
- [Source: apps/api/src/routes/quotes.ts] — existing router structure; `getAccountId` helper; quote ownership pattern
- [Source: apps/api/src/routes/quotes.test.ts] — jest.mock pattern for prisma/storage/pdf; supertest usage; `require()` for mock access
- [Source: apps/mobile/src/services/api-client.ts] — `apiClient.post<T>()` and `apiClient.patch<T>()` methods
- [Source: apps/mobile/src/db/models/quote.ts] — Quote model fields: status (text), sentAt (field/number), approvalToken (text)

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List

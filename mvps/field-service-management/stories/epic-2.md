# Epic 2: Quoting & Estimates

Status: ready-for-dev

## Story

As a solo tradesperson (HVAC, plumbing, or electrical),
I want to create professional quotes from my pricebook, attach job site photos, and send branded PDF quotes to customers via SMS for one-tap approval,
So that I can close more jobs faster with a polished, trustworthy bidding process.

**FRs covered:** FR1 (quote from pricebook), FR2 (custom line items), FR3 (photo attachments), FR4 (branded PDF via SMS), FR5 (customer one-tap approval), FR6 (quote status tracking), FR7 (quote duplication), FR32 (customer CRUD), FR47 (quote approval push notification), FR48 (quote SMS)

This epic builds on Epic 1's foundation (monorepo, auth, WatermelonDB, pricebook) to deliver the first half of the core workflow: **Quote > Schedule > Invoice > Get Paid**. It contains 4 stories that must be implemented in order.

---

## Story 2.1: Customer Creation and Contact Management

### Acceptance Criteria

1. **Given** the user is on the customer list screen, **When** they tap "Add Customer", **Then** they see a form with fields for name, phone, email, address (line1, line2, city, state, zip), and notes.

2. **Given** the user fills in at least a customer name and phone number, **When** they tap "Save", **Then** a customer record is created in WatermelonDB with a UUID and all entered fields persisted.

3. **Given** customer records exist, **When** the user views the customer list, **Then** customers are displayed in a scrollable list with name, phone, and address visible on each card.

4. **Given** the user taps on a customer record, **When** the customer detail screen loads, **Then** they can edit any customer field and save changes to WatermelonDB.

5. **Given** the user is creating a quote or job, **When** they need to select a customer, **Then** they can search existing customers by name or phone, or create a new customer inline without leaving the creation flow.

### Tasks

- [ ] **Task 2.1.1: Prisma schema — customers table** (AC: #2)
  - [ ] Add `customers` table to `apps/api/prisma/schema.prisma` with all fields from data model: `id` (UUID, PK), `account_id` (FK to accounts), `name`, `email` (nullable), `phone`, `address_line1` (nullable), `address_line2` (nullable), `city` (nullable), `state` (nullable), `zip` (nullable), `notes` (nullable), `quickbooks_customer_id` (nullable), `created_at`, `updated_at`, `synced_at` (nullable)
  - [ ] Add relation from Account to Customer (1:many)
  - [ ] Add index `idx_customers_account_id` on `account_id`
  - [ ] Run `npx prisma migrate dev --name add-customers`

- [ ] **Task 2.1.2: WatermelonDB customer model and schema** (AC: #2)
  - [ ] Add `customers` table to `apps/mobile/src/db/schema.ts` — columns: `account_id` (string), `name` (string), `email` (string, optional), `phone` (string), `address_line1` (string, optional), `address_line2` (string, optional), `city` (string, optional), `state` (string, optional), `zip` (string, optional), `notes` (string, optional), `quickbooks_customer_id` (string, optional), `created_at` (number), `updated_at` (number)
  - [ ] Create `apps/mobile/src/db/models/customer.ts` — WatermelonDB Model class with `static table = 'customers'`, `@text` decorators for string fields, `@readonly @date('created_at')`, `@date('updated_at')`
  - [ ] Update `apps/mobile/src/db/index.ts` — register Customer model in `modelClasses`
  - [ ] Update `apps/mobile/src/db/migrations.ts` — add migration step for `customers` table (increment schema version)

- [ ] **Task 2.1.3: Shared types — customer** (AC: #2)
  - [ ] Create `packages/shared/src/types/customer.ts` — export `Customer` interface with all fields (camelCase), export `CustomerAddress` type for address fields subset
  - [ ] Update `packages/shared/src/index.ts` — export customer types

- [ ] **Task 2.1.4: Customer hooks** (AC: #3, #5)
  - [ ] Create `apps/mobile/src/hooks/use-customers.ts`:
    - `useCustomers()` — WatermelonDB observable query returning all customers for the account, sorted by name
    - `useCustomer(id)` — observable single customer record
    - `useCustomerSearch(query)` — filtered customers matching name or phone via `Q.where()` with `Q.or()` and `Q.like()`

- [ ] **Task 2.1.5: Customer form component** (AC: #1, #2, #4)
  - [ ] Create `apps/mobile/src/components/customers/customer-form.tsx` — reusable form with fields: name (required), phone (required), email, address_line1, address_line2, city, state (2-letter picker), zip. Validate: name required, phone format (10 digits). Props: `initialValues?` for edit mode, `onSave(data)` callback.
  - [ ] Currency/phone formatting: use shared utils for phone formatting

- [ ] **Task 2.1.6: Customer list screen** (AC: #3)
  - [ ] Create `apps/mobile/app/(tabs)/customers/index.tsx` — FlatList of customer cards using `useCustomers()` hook. Each card shows name, phone, city/state. Search bar at top using `useCustomerSearch()`. Empty state: "No customers yet — Add your first customer". FAB or header button: "Add Customer".
  - [ ] Create `apps/mobile/src/components/customers/customer-card.tsx` — card component displaying customer summary

- [ ] **Task 2.1.7: Customer detail/edit screen** (AC: #4)
  - [ ] Create `apps/mobile/app/(tabs)/customers/[id].tsx` — loads customer via `useCustomer(id)`. Displays full customer info. "Edit" button opens form pre-filled with current values. Save via `customer.update()` in `database.write()`.

- [ ] **Task 2.1.8: Inline customer picker for quote/job creation** (AC: #5)
  - [ ] Create `apps/mobile/src/components/customers/customer-picker.tsx` — modal/bottom sheet with search bar + customer list. Tapping a customer calls `onSelect(customer)`. "Create New Customer" button at top opens inline form — saves customer and auto-selects it. Props: `onSelect(customer)`, `onCreateNew()`.

- [ ] **Task 2.1.9: Tests** (AC: #2)
  - [ ] Write `apps/mobile/src/hooks/use-customers.test.ts` — test search filtering matches name and phone

---

## Story 2.2: Quote Creation with Line Items

### Acceptance Criteria

1. **Given** the user taps "Create Quote" and selects a customer, **When** the quote creation form opens, **Then** they see an empty quote with the customer's information pre-filled and can browse their pricebook to add line items.

2. **Given** the user selects a pricebook item, **When** it is added to the quote, **Then** the line item shows description, default unit price, quantity (default 1), and calculated line total. The user can adjust quantity and override unit price.

3. **Given** the user needs a non-pricebook item, **When** they tap "Add Custom Item", **Then** they can enter description, unit price (dollars input, stored as cents), quantity, and line total is calculated automatically (FR2).

4. **Given** a quote has one or more line items, **When** the user views the quote summary, **Then** subtotal, tax amount, and total are calculated and displayed correctly with all money stored as integer cents.

5. **Given** the user has a previous similar quote, **When** they select "Duplicate Quote" on an existing quote, **Then** a new draft quote is created with same customer, line items, and notes (FR7).

6. **Given** a quote is created or modified, **When** the user saves it, **Then** the quote record (status DRAFT) and all line_items records are persisted to WatermelonDB with UUIDs and sort_order preserved.

7. **Given** the user views their quotes list, **When** filtering by status, **Then** they can see all quotes organized by status: Draft, Sent, Viewed, Approved, Declined, Expired (FR6).

### Tasks

- [ ] **Task 2.2.1: Prisma schema — quotes and line_items tables** (AC: #6)
  - [ ] Add `quotes` table to `prisma/schema.prisma` with all data model fields: `id` (UUID), `account_id` (FK), `customer_id` (FK), `created_by_id` (FK to team_members, nullable), `status` (enum QuoteStatus: DRAFT, SENT, VIEWED, APPROVED, DECLINED, EXPIRED), `subtotal` (Int, cents), `tax_amount` (Int, cents), `total` (Int, cents), `notes` (nullable), `approval_token` (nullable), `sent_at` (nullable), `approved_at` (nullable), `expires_at` (nullable), `created_at`, `updated_at`, `synced_at` (nullable)
  - [ ] Add `line_items` table: `id` (UUID), `quote_id` (FK), `pricebook_item_id` (FK, nullable — null for custom items), `description`, `quantity` (Decimal), `unit_price` (Int, cents), `total` (Int, cents), `sort_order` (Int), `created_at`, `updated_at`, `synced_at` (nullable)
  - [ ] Add relations: Quote → LineItems (1:many), Quote → Customer, Quote → Account
  - [ ] Add indexes: `idx_quotes_account_id`, `idx_quotes_customer_id`, `idx_line_items_quote_id`
  - [ ] Run `npx prisma migrate dev --name add-quotes-and-line-items`

- [ ] **Task 2.2.2: WatermelonDB quote and line_item models** (AC: #6)
  - [ ] Add `quotes` table to `apps/mobile/src/db/schema.ts` — columns: `account_id`, `customer_id`, `created_by_id` (optional), `status` (string), `subtotal` (number), `tax_amount` (number), `total` (number), `notes` (optional), `approval_token` (optional), `sent_at` (optional number), `approved_at` (optional number), `expires_at` (optional number), `created_at`, `updated_at`
  - [ ] Add `line_items` table to schema — columns: `quote_id`, `pricebook_item_id` (optional), `description`, `quantity` (number), `unit_price` (number), `total` (number), `sort_order` (number), `created_at`, `updated_at`
  - [ ] Create `apps/mobile/src/db/models/quote.ts` — WatermelonDB Model with `static table = 'quotes'`, associations: `{ line_items: { type: 'has_many', foreignKey: 'quote_id' }, customers: { type: 'belongs_to', key: 'customer_id' } }`. Add `@children('line_items') lineItems` and `@relation('customers', 'customer_id') customer`
  - [ ] Create `apps/mobile/src/db/models/line-item.ts` — WatermelonDB Model with `static table = 'line_items'`, associations: `{ quotes: { type: 'belongs_to', key: 'quote_id' } }`
  - [ ] Update `apps/mobile/src/db/index.ts` — register Quote and LineItem models
  - [ ] Update `apps/mobile/src/db/migrations.ts` — add migration steps for both tables

- [ ] **Task 2.2.3: Shared types — quote, line item, quote status** (AC: #4, #6, #7)
  - [ ] Create `packages/shared/src/types/quote.ts` — export `Quote` interface (camelCase fields), `LineItem` interface, `QuoteStatus` enum (DRAFT, SENT, VIEWED, APPROVED, DECLINED, EXPIRED)
  - [ ] Add `QUOTE_STATUS_LABELS` map for display names
  - [ ] Add `QUOTE_STATUS_COLORS` map for badge colors
  - [ ] Update `packages/shared/src/index.ts` — export quote types

- [ ] **Task 2.2.4: Quote calculation utility** (AC: #4)
  - [ ] Create `packages/shared/src/utils/quote-calculations.ts`:
    - `calculateLineTotal(unitPrice: number, quantity: number): number` — returns cents
    - `calculateSubtotal(lineItems: { total: number }[]): number` — sum of line totals in cents
    - `calculateTax(subtotal: number, taxRate: number): number` — tax in cents (default rate configurable)
    - `calculateQuoteTotal(subtotal: number, taxAmount: number): number` — total in cents
  - [ ] Write tests `packages/shared/src/utils/quote-calculations.test.ts`

- [ ] **Task 2.2.5: Quote hooks** (AC: #1, #7)
  - [ ] Create `apps/mobile/src/hooks/use-quotes.ts`:
    - `useQuotes(status?: QuoteStatus)` — observable query, optionally filtered by status, sorted by `updated_at` desc
    - `useQuote(id)` — observable single quote
    - `useQuoteLineItems(quoteId)` — observable line items for a quote, sorted by `sort_order`

- [ ] **Task 2.2.6: Line item row component** (AC: #2, #3)
  - [ ] Create `apps/mobile/src/components/quotes/line-item-row.tsx` — displays: description, quantity (editable numeric input), unit price (editable, dollars display → cents storage), line total (calculated, read-only). "Remove" button. Props: `item`, `onUpdate(field, value)`, `onRemove()`

- [ ] **Task 2.2.7: Quote creation screen** (AC: #1, #2, #3, #4, #6)
  - [ ] Create `apps/mobile/app/(modals)/create-quote.tsx`:
    - Customer selection at top using `CustomerPicker` (from Story 2.1)
    - "Add from Pricebook" button opens `PricebookPicker` (from Story 1.4) — on select, creates line item with pricebook item's description, unit_price, quantity=1
    - "Add Custom Item" button opens inline form for custom line item (no pricebook reference)
    - List of line items using `LineItemRow` components, reorderable
    - Summary section: subtotal, tax, total — recalculated on every line item change
    - Notes text field (optional)
    - "Save Draft" button — creates quote (DRAFT) and all line_items in WatermelonDB via `database.write()` + `database.batch()`
    - All money inputs in dollars → stored as cents using `dollarsToCents()` from `packages/shared/src/utils/money.ts`

- [ ] **Task 2.2.8: Quote list screen** (AC: #7)
  - [ ] Create `apps/mobile/app/(tabs)/jobs/quotes.tsx` (or add quotes tab) — FlatList of quote cards. Status filter chips at top: All, Draft, Sent, Approved, Declined, Expired. Each card shows: customer name, total (formatted), status badge (color-coded), date.
  - [ ] Create `apps/mobile/src/components/quotes/quote-card.tsx` — card with customer name, formatted total, color-coded status badge, created date

- [ ] **Task 2.2.9: Quote detail screen** (AC: #5, #7)
  - [ ] Create `apps/mobile/app/(tabs)/jobs/quote/[id].tsx` — displays full quote with customer info, all line items, totals, status badge, notes. Action buttons based on status:
    - DRAFT: "Edit", "Send Quote", "Duplicate"
    - SENT/VIEWED: "Duplicate"
    - APPROVED: "Create Job", "Duplicate"
    - DECLINED/EXPIRED: "Duplicate"
  - [ ] "Duplicate" creates new DRAFT quote with same customer, cloned line items, and notes via `database.write()` + `database.batch()`

- [ ] **Task 2.2.10: Tests** (AC: #4, #6)
  - [ ] Write `packages/shared/src/utils/quote-calculations.test.ts` — test line total calculation, subtotal aggregation, tax calculation, total with rounding
  - [ ] Write `apps/mobile/src/hooks/use-quotes.test.ts` — test status filtering

---

## Story 2.3: Quote Photo Attachments and PDF Generation

### Acceptance Criteria

1. **Given** the user is editing a quote, **When** they tap "Add Photo", **Then** the device camera opens and the captured photo is compressed (max 1200px width, 80% JPEG quality), stored locally, and attached to the quote (FR3).

2. **Given** a quote has photos attached, **When** the user views the quote, **Then** attached photos are displayed in a gallery view on the quote detail screen.

3. **Given** a quote is finalized by the user, **When** the system generates a PDF, **Then** the PDF includes the user's business logo, business name, license number, customer info, all line items with descriptions and prices, subtotal, tax, total, attached photos, and any notes (FR4, FR20).

4. **Given** a PDF is generated, **When** it is stored, **Then** the PDF is uploaded to Supabase Storage and a signed URL is associated with the quote record.

5. **Given** photo attachments are captured offline, **When** connectivity is restored, **Then** photos are uploaded to Supabase Storage via the sync process and URLs are updated on the records.

### Tasks

- [ ] **Task 2.3.1: Prisma schema — quote_photos table** (AC: #1)
  - [ ] Add `quote_photos` table to `prisma/schema.prisma`: `id` (UUID), `quote_id` (FK to quotes), `photo_url` (nullable — null until synced), `local_uri` (nullable — local device path), `caption` (nullable), `taken_at` (DateTime), `created_at`, `updated_at`, `synced_at` (nullable)
  - [ ] Add relation: Quote → QuotePhotos (1:many)
  - [ ] Add index `idx_quote_photos_quote_id`
  - [ ] Add `pdf_url` column (String, nullable) to `quotes` table for generated PDF
  - [ ] Run `npx prisma migrate dev --name add-quote-photos-and-pdf-url`

- [ ] **Task 2.3.2: WatermelonDB quote_photos model** (AC: #1)
  - [ ] Add `quote_photos` table to `apps/mobile/src/db/schema.ts` — columns: `quote_id` (string), `photo_url` (string, optional), `local_uri` (string, optional), `caption` (string, optional), `taken_at` (number), `created_at` (number), `updated_at` (number)
  - [ ] Create `apps/mobile/src/db/models/quote-photo.ts` — WatermelonDB Model with associations to quotes
  - [ ] Update Quote model associations: add `{ quote_photos: { type: 'has_many', foreignKey: 'quote_id' } }`
  - [ ] Add `@children('quote_photos') photos` to Quote model
  - [ ] Add `pdf_url` column (string, optional) to `quotes` table schema and Quote model
  - [ ] Update `apps/mobile/src/db/index.ts` — register QuotePhoto model
  - [ ] Update `apps/mobile/src/db/migrations.ts` — add migration

- [ ] **Task 2.3.3: Photo capture integration on quote** (AC: #1, #2)
  - [ ] Reuse `apps/mobile/src/services/photo-service.ts` from Story 1.3 — `capturePhoto()`, `compressImage()` (max 1200px, 80% JPEG)
  - [ ] Update `apps/mobile/app/(modals)/create-quote.tsx` — add "Add Photo" button that calls `capturePhoto()`, creates a `quote_photos` record in WatermelonDB with `local_uri` set, `photo_url` null (pending sync)
  - [ ] Display attached photos as a horizontal scrollable thumbnail gallery below line items
  - [ ] Allow removing a photo (soft delete or hard delete since quote_photos are not referenced elsewhere)

- [ ] **Task 2.3.4: Photo gallery component** (AC: #2)
  - [ ] Create `apps/mobile/src/components/quotes/quote-photo-gallery.tsx` — horizontal FlatList of photo thumbnails. Tap to view full-screen. Shows `local_uri` if `photo_url` not yet available (offline support). Props: `quoteId`, observable query on `quote_photos` for real-time updates.
  - [ ] Add photo gallery to quote detail screen (`apps/mobile/app/(tabs)/jobs/quote/[id].tsx`)

- [ ] **Task 2.3.5: PDF generation API endpoint** (AC: #3, #4)
  - [ ] Install `@react-pdf/renderer` in `apps/api` — server-side PDF generation
  - [ ] Create `apps/api/src/services/pdf-service.ts`:
    - `generateQuotePdf(quote, lineItems, customer, account, photos): Promise<Buffer>` — renders branded PDF using @react-pdf/renderer
    - PDF layout: header with business logo + name + license number, customer info block, line items table (description, qty, unit price, total per line), subtotal/tax/total summary, photo thumbnails section, notes section, footer with expiry notice
    - All money values formatted from cents to dollars for display
  - [ ] Create `apps/api/src/routes/quotes.ts`:
    - `POST /api/v1/quotes/:id/generate-pdf` — authenticated, generates PDF, uploads to Supabase Storage (`quotes/{accountId}/{quoteId}.pdf`), returns signed URL, updates quote's `pdf_url`
  - [ ] Write test `apps/api/src/services/pdf-service.test.ts` — verify PDF buffer is generated with correct data

- [ ] **Task 2.3.6: Supabase Storage bucket setup** (AC: #4)
  - [ ] Create `quotes` bucket in Supabase Storage (document setup steps)
  - [ ] Create `quote-photos` bucket for uploaded photos
  - [ ] Configure signed URL generation with 30-day expiry (NFR10)

- [ ] **Task 2.3.7: Photo upload on sync** (AC: #5)
  - [ ] Add photo upload logic to sync flow: when pushing `quote_photos` records where `local_uri` is set and `photo_url` is null, upload the image to Supabase Storage (`quote-photos/{accountId}/{photoId}.jpg`), get signed URL, update `photo_url` on the record
  - [ ] This integrates with the sync service that will be fully built in Epic 6, but the upload-on-sync pattern should be established here

---

## Story 2.4: Quote SMS Delivery and Customer Approval

### Acceptance Criteria

1. **Given** a quote is finalized with line items and optional photos, **When** the user taps "Send Quote", **Then** an SMS is sent to the customer's phone via Twilio with a short message and a signed URL to view and approve the quote (FR4, FR48). The quote status changes to SENT with `sent_at` timestamp.

2. **Given** a customer receives the SMS, **When** they tap the link, **Then** they see the branded PDF quote in a mobile-friendly web page (no app install required) with "Approve" and "Decline" buttons (FR5). The quote status changes to VIEWED.

3. **Given** the customer taps "Approve", **When** the approval is processed, **Then** the quote status changes to APPROVED with `approved_at` timestamp, and a push notification is sent to the tradesperson's device (FR47).

4. **Given** the customer taps "Decline", **When** the decline is processed, **Then** the quote status changes to DECLINED and a push notification is sent.

5. **Given** a quote was sent 30 days ago, **When** no customer action has been taken, **Then** the quote status automatically changes to EXPIRED and the signed URL is no longer valid (NFR10).

6. **Given** SMS delivery is attempted, **When** the system is online, **Then** SMS is delivered within 60 seconds via Twilio (NFR5, NFR19).

### Tasks

- [ ] **Task 2.4.1: Twilio SMS service** (AC: #1, #6)
  - [ ] Install `twilio` in `apps/api`
  - [ ] Create `apps/api/src/config/twilio.ts` — initialize Twilio client with `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER` from env vars
  - [ ] Create `apps/api/src/services/sms-service.ts`:
    - `sendSms(to: string, body: string): Promise<{ sid: string; status: string }>` — sends SMS via Twilio, returns message SID
    - `sendQuoteSms(customerPhone: string, customerName: string, quoteTotal: number, approvalUrl: string, businessName: string): Promise<void>` — formats and sends quote notification SMS
    - Error handling: retry up to 3 times with 5s delay on transient errors, log failure after exhaustion
  - [ ] Add env vars to `.env.example`: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`
  - [ ] Write test `apps/api/src/services/sms-service.test.ts` — mock Twilio client, verify message format and error handling

- [ ] **Task 2.4.2: Signed URL generation for customer-facing links** (AC: #1, #2, #5)
  - [ ] Create `apps/api/src/utils/signed-url.ts`:
    - `generateApprovalToken(): string` — crypto-random token (32 bytes, hex-encoded)
    - `generateApprovalUrl(token: string): string` — builds URL: `${WEB_APP_URL}/quote/${token}`
    - Token stored on quote record as `approval_token`
  - [ ] Add `WEB_APP_URL` env var (base URL for customer-facing pages)

- [ ] **Task 2.4.3: Quote send API endpoint** (AC: #1, #6)
  - [ ] Add to `apps/api/src/routes/quotes.ts`:
    - `POST /api/v1/quotes/:id/send` — authenticated. Validates quote exists and belongs to account. Generates PDF if not already generated. Generates approval token and signed URL. Sends SMS via `sms-service`. Updates quote: `status = SENT`, `sent_at = now()`, `approval_token = token`, `expires_at = now() + 30 days`. Returns updated quote in `{ "data": { ... } }` format.
  - [ ] Validation: quote must be in DRAFT status to send. Return error `INVALID_QUOTE_STATUS` if not.

- [ ] **Task 2.4.4: Customer-facing quote approval web page** (AC: #2, #3, #4)
  - [ ] Create `apps/web/src/app/(public)/quote/[token]/page.tsx`:
    - Server component that loads quote by `approval_token` via API call
    - Displays: business name/logo, PDF embed or formatted quote view (customer name, line items, totals), photos
    - Two action buttons: "Approve Quote" (green), "Decline Quote" (red)
    - On first load: hit API to mark quote as VIEWED
    - Mobile-responsive design — customers view this on their phones
    - If token expired or invalid: show "This quote has expired" message
  - [ ] Style with Tailwind CSS — clean, professional, mobile-first

- [ ] **Task 2.4.5: Quote approval/decline API endpoints** (AC: #2, #3, #4)
  - [ ] Add to `apps/api/src/routes/quotes.ts`:
    - `POST /api/v1/quotes/:id/approve` — public (no auth), validated by `approval_token`. Updates status to APPROVED, sets `approved_at`. Triggers push notification to quote creator.
    - `POST /api/v1/quotes/:id/decline` — public (no auth), validated by `approval_token`. Updates status to DECLINED. Triggers push notification.
    - `GET /api/v1/quotes/by-token/:token` — public, returns quote data for customer-facing page. Updates status to VIEWED on first access.
  - [ ] Rate limit public endpoints: 10 requests/minute per IP

- [ ] **Task 2.4.6: Push notification for quote approval/decline** (AC: #3, #4)
  - [ ] Install `expo-server-sdk` in `apps/api`
  - [ ] Create `apps/api/src/services/notification-service.ts`:
    - `sendPushNotification(pushToken: string, title: string, body: string, data?: object): Promise<void>`
    - Uses Expo Push API to send to specific device
  - [ ] Add `push_token` column to `team_members` table in Prisma (nullable) — store Expo push token per device
  - [ ] Run migration: `npx prisma migrate dev --name add-push-token`
  - [ ] On quote approval: send push to quote creator with "Quote Approved! {customerName} approved your ${total} quote"
  - [ ] On quote decline: send push "Quote Declined: {customerName} declined your quote"

- [ ] **Task 2.4.7: Push token registration on mobile** (AC: #3, #4)
  - [ ] Install `expo-notifications` in `apps/mobile`
  - [ ] Create `apps/mobile/src/services/notification-service.ts`:
    - `registerForPushNotifications(): Promise<string | null>` — request permissions, get Expo push token
    - `savePushToken(token: string): Promise<void>` — POST to API to save token on team_member record
  - [ ] Call `registerForPushNotifications()` after login in `AuthContext`
  - [ ] Handle incoming notifications: show in-app banner for quote approval/decline

- [ ] **Task 2.4.8: Quote expiry background job** (AC: #5)
  - [ ] Create `apps/api/src/jobs/quote-expiry.ts`:
    - Cron job (run daily) that queries quotes with `status = SENT` or `status = VIEWED` and `expires_at < now()`
    - Updates matching quotes to `status = EXPIRED`
  - [ ] Register job in API server startup (use `node-cron` or similar lightweight scheduler)
  - [ ] Add `node-cron` to `apps/api/package.json`

- [ ] **Task 2.4.9: Mobile — send quote action** (AC: #1)
  - [ ] Update quote detail screen (`apps/mobile/app/(tabs)/jobs/quote/[id].tsx`):
    - "Send Quote" button (visible when status = DRAFT) calls `POST /api/v1/quotes/:id/send` via API client
    - Show loading state during send
    - On success: update local quote status to SENT via WatermelonDB, show success toast "Quote sent to {customerName}"
    - On failure (offline): show "You're offline — quote will be sent when you reconnect" and queue the action
  - [ ] This is the ONLY place in the quoting flow that makes a direct API call (because SMS requires the server). All other operations remain WatermelonDB-only.

- [ ] **Task 2.4.10: Tests** (AC: #1, #3, #5)
  - [ ] Write `apps/api/src/services/sms-service.test.ts` — test SMS formatting, retry logic
  - [ ] Write `apps/api/src/routes/quotes.test.ts` — integration tests for send, approve, decline endpoints using Supertest
  - [ ] Write `apps/api/src/jobs/quote-expiry.test.ts` — test expiry logic

---

## Dev Notes

### Architecture Compliance — MUST FOLLOW

**Monorepo Structure (established in Epic 1):**
```
field-service-management/src/
├── packages/shared/          # @field-service/shared — types, constants, utils
├── apps/mobile/              # Expo (React Native) with Expo Router
├── apps/api/                 # Node.js + Express + Prisma
└── apps/web/                 # Next.js (App Router) + Tailwind
```

**Tech Stack (exact versions — same as Epic 1):**
- TypeScript 5.x strict mode — NO `any`, NO `@ts-ignore`
- Expo SDK 52+ with Expo Router (file-based routing)
- React Native 0.76+ / React 19
- WatermelonDB 0.27+ (SQLite-backed offline-first DB)
- Node.js 20 LTS, Express, Prisma 6, PostgreSQL 16 via Supabase
- Next.js (App Router) + Tailwind CSS 4
- Jest for all tests, co-located with source files

**New dependencies introduced in this epic:**
- `@react-pdf/renderer` in `apps/api` — server-side PDF generation
- `twilio` in `apps/api` — SMS delivery
- `expo-server-sdk` in `apps/api` — push notifications
- `expo-notifications` in `apps/mobile` — receive push notifications
- `node-cron` in `apps/api` — lightweight job scheduler for quote expiry

### Naming Conventions — MANDATORY

| Context | Convention | Example |
|---------|-----------|---------|
| DB tables | `snake_case`, plural | `quotes`, `line_items`, `quote_photos` |
| DB columns | `snake_case` | `customer_id`, `unit_price`, `quote_id` |
| Foreign keys | `<table_singular>_id` | `quote_id`, `customer_id` |
| API endpoints | `/api/v1/<plural-noun>` | `/api/v1/quotes`, `/api/v1/quotes/:id/send` |
| API response fields | `camelCase` | `quoteTotal`, `sentAt`, `approvalToken` |
| Files | `kebab-case.ts` | `quote-service.ts`, `line-item.ts`, `sms-service.ts` |
| React components | `PascalCase.tsx` | `QuoteCard.tsx`, `LineItemRow.tsx` |
| Functions/vars | `camelCase` | `createQuote`, `sendQuoteSms` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_RETRY_ATTEMPTS`, `SMS_RETRY_DELAY` |
| Types/interfaces | `PascalCase` | `Quote`, `LineItem`, `QuoteStatus` |
| Hooks | `use` + `camelCase` | `useQuotes`, `useQuoteLineItems` |

### Data Rules — CRITICAL

- **Money:** Always integer cents. `subtotal: 150000` = $1,500.00. Use `dollarsToCents()` and `centsToDollars()` from `packages/shared/src/utils/money.ts`. NEVER store floating-point dollar values.
- **Dates:** ISO 8601 UTC strings in API payloads (`"2026-03-23T14:30:00Z"`). WatermelonDB stores dates as Unix timestamps (number). Prisma uses `DateTime`.
- **IDs:** UUIDs (v4) for all entities. WatermelonDB generates UUIDs by default.
- **API responses:** Always wrapped: `{ "data": ... }` or `{ "error": { "code": "...", "message": "...", "status": N } }`
- **Quote status enum:** DRAFT → SENT → VIEWED → APPROVED | DECLINED | EXPIRED. Only DRAFT can be sent. Only SENT/VIEWED can be approved/declined/expired.

### Offline-First Rules — CRITICAL

- ALL mobile data operations (customer CRUD, quote CRUD, line item CRUD) go through WatermelonDB — NEVER direct API calls for reads/writes
- The ONLY exception: "Send Quote" requires the API (because SMS/PDF are server-side). This should queue if offline.
- WatermelonDB observables for all data state — components re-render automatically on local data changes
- Photos captured offline: stored with `local_uri`, uploaded on sync, `photo_url` updated after upload
- Quote send while offline: queue the action, execute when online, update status locally to show pending

### WatermelonDB Model Patterns (from Epic 1)

```typescript
// Quote model with relationships
import { Model } from '@nozbe/watermelondb';
import { field, text, date, readonly, children, relation } from '@nozbe/watermelondb/decorators';

export default class Quote extends Model {
  static table = 'quotes';
  static associations = {
    line_items: { type: 'has_many' as const, foreignKey: 'quote_id' },
    quote_photos: { type: 'has_many' as const, foreignKey: 'quote_id' },
    customers: { type: 'belongs_to' as const, key: 'customer_id' },
  };

  @text('account_id') accountId!: string;
  @text('customer_id') customerId!: string;
  @text('created_by_id') createdById!: string;
  @text('status') status!: string; // QuoteStatus enum value
  @field('subtotal') subtotal!: number; // cents
  @field('tax_amount') taxAmount!: number; // cents
  @field('total') total!: number; // cents
  @text('notes') notes!: string;
  @text('approval_token') approvalToken!: string;
  @text('pdf_url') pdfUrl!: string;
  @field('sent_at') sentAt!: number | null;
  @field('approved_at') approvedAt!: number | null;
  @field('expires_at') expiresAt!: number | null;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;

  @children('line_items') lineItems!: any;
  @children('quote_photos') photos!: any;
  @relation('customers', 'customer_id') customer!: any;
}
```

```typescript
// Batch create pattern for quote + line items
await database.write(async () => {
  const quote = collection.prepareCreate((q) => {
    q.accountId = accountId;
    q.customerId = selectedCustomer.id;
    q.status = 'DRAFT';
    q.subtotal = subtotalCents;
    q.taxAmount = taxCents;
    q.total = totalCents;
    q.notes = notes;
  });

  const lineItemRecords = lineItems.map((item, index) =>
    lineItemCollection.prepareCreate((li) => {
      li.quoteId = quote.id; // Available immediately from prepareCreate
      li.description = item.description;
      li.quantity = item.quantity;
      li.unitPrice = item.unitPrice; // cents
      li.total = item.unitPrice * item.quantity; // cents
      li.sortOrder = index;
      if (item.pricebookItemId) li.pricebookItemId = item.pricebookItemId;
    })
  );

  await database.batch(quote, ...lineItemRecords);
});
```

### API Error Handling Pattern (from Epic 1)

```typescript
class AppError extends Error {
  constructor(public code: string, message: string, public status: number) {
    super(message);
  }
}
// Usage:
throw new AppError('QUOTE_NOT_FOUND', 'Quote not found', 404);
throw new AppError('INVALID_QUOTE_STATUS', 'Quote must be in DRAFT status to send', 422);
throw new AppError('SMS_DELIVERY_FAILED', 'Failed to deliver SMS after 3 retries', 502);
```

### Retry Pattern for SMS

```typescript
const MAX_SMS_RETRIES = 3;
const SMS_RETRY_DELAY = 5000; // 5 seconds

async function sendWithRetry(fn: () => Promise<void>, retries = MAX_SMS_RETRIES): Promise<void> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await fn();
      return;
    } catch (error) {
      if (attempt === retries) throw error;
      await new Promise(resolve => setTimeout(resolve, SMS_RETRY_DELAY));
    }
  }
}
```

### Customer-Facing Web Pages — Important Design Constraints

- The quote approval page at `/quote/[token]` is PUBLIC — no authentication required
- Validated by the `approval_token` only — tokens must be cryptographically random
- Mobile-first responsive design — customers open this on their phones from SMS
- Must work without JavaScript for basic viewing (Next.js Server Components render on server)
- Rate limit: 10 req/min per IP on all public endpoints
- After 30 days: show "This quote has expired" instead of quote content

### Photo Handling — Architecture Alignment

The photo service was created in Story 1.3 (`apps/mobile/src/services/photo-service.ts`). Reuse it:
- `capturePhoto()` — camera capture
- `pickFromGallery()` — gallery pick
- `compressImage(uri)` — max 1200px width, 80% JPEG quality
- `uploadToStorage(uri, path)` — upload to Supabase Storage

For quote photos, the flow is:
1. Capture/pick → compress → store `local_uri` in WatermelonDB `quote_photos` record
2. On sync (or when generating PDF): upload to `quote-photos/{accountId}/{photoId}.jpg`
3. PDF generation on API server fetches photos from Supabase Storage URLs

### Architecture Note: quote_photos Table

The architecture data model defines `job_photos` but does not explicitly list `quote_photos`. This epic adds `quote_photos` following the identical pattern as `job_photos` (same columns: `photo_url`, `caption`, `taken_at`) but with FK to `quotes` instead of `jobs`. This is required by FR3 (attach photos to quotes) and is architecturally consistent.

### Quote Status Transition Rules

```
DRAFT ──send──► SENT ──view──► VIEWED ──approve──► APPROVED
                  │               │
                  │               ├──decline──► DECLINED
                  │               │
                  └───────────────┴──30 days──► EXPIRED
```

- Only DRAFT → can be sent
- Only SENT or VIEWED → can be approved/declined/expired
- APPROVED, DECLINED, EXPIRED are terminal states
- Enforce transitions server-side in API endpoints

### Key Anti-Patterns to Avoid

- Do NOT make direct API calls for customer/quote/line-item CRUD from mobile — always WatermelonDB first
- Do NOT store money as floating-point dollars — always integer cents
- Do NOT show raw Twilio/Supabase errors to users — wrap in user-friendly messages
- Do NOT generate PDFs on the mobile device — PDF generation happens on the API server using `@react-pdf/renderer`
- Do NOT store the PDF file on the mobile device — store the signed URL only (from Supabase Storage)
- Do NOT create a separate "Quotes" tab in the tab navigator — quotes are accessed from the Jobs tab or a sub-navigation
- Do NOT skip the `approval_token` validation on public endpoints — this is the only security for customer-facing pages
- Do NOT create customer records directly via API from mobile — create in WatermelonDB, sync handles server push
- Do NOT import between feature folders (e.g., quotes importing from invoicing) — shared logic in `packages/shared/`
- Do NOT hard-code the tax rate — make it configurable per account (store as `tax_rate` on account, default to 0)

### Implementation Order

1. **Story 2.1 first** — Customer CRUD (all subsequent stories need customers)
2. **Story 2.2 second** — Quote creation with line items (core quoting functionality)
3. **Story 2.3 third** — Photo attachments and PDF generation (enhances quotes)
4. **Story 2.4 fourth** — SMS delivery and customer approval (requires PDF, Twilio, push)

Each story builds on the previous. Do NOT skip ahead.

### Dependencies on Epic 1

This epic assumes the following from Epic 1 are complete and working:
- Monorepo with `npm workspaces` (Story 1.1)
- WatermelonDB initialized with schema and migration system (Story 1.1)
- Supabase Auth with login/signup/JWT (Story 1.2)
- AuthContext with `user`, `accountId` available (Story 1.2)
- API server with Express, auth middleware, error handler (Story 1.2)
- Prisma schema with `accounts` and `team_members` tables (Story 1.2)
- Business profile (logo, name, license) on account (Story 1.3)
- Photo service with camera/gallery/compress/upload (Story 1.3)
- Supabase Storage configured (Story 1.3)
- DatabaseContext providing WatermelonDB instance (Story 1.3)
- Pricebook models, JSON templates, `PricebookPicker` component (Story 1.4)
- `usePricebook` hook and `pricebook-picker.tsx` component (Story 1.4)
- Shared types and utils: `money.ts`, `dates.ts`, `validation.ts` (Story 1.1)

### Project Structure Notes

All paths align with the architecture directory structure. New/modified files by story:

**Story 2.1 files:**
```
apps/api/prisma/schema.prisma                      # Updated: add customers table
apps/mobile/src/db/schema.ts                        # Updated: add customers table
apps/mobile/src/db/migrations.ts                    # Updated: add migration
apps/mobile/src/db/index.ts                         # Updated: register Customer
apps/mobile/src/db/models/customer.ts               # NEW
apps/mobile/src/hooks/use-customers.ts              # NEW
apps/mobile/src/components/customers/customer-form.tsx     # NEW
apps/mobile/src/components/customers/customer-card.tsx     # NEW
apps/mobile/src/components/customers/customer-picker.tsx   # NEW
apps/mobile/app/(tabs)/customers/index.tsx          # NEW
apps/mobile/app/(tabs)/customers/[id].tsx           # NEW
packages/shared/src/types/customer.ts               # NEW
packages/shared/src/index.ts                        # Updated
```

**Story 2.2 files:**
```
apps/api/prisma/schema.prisma                       # Updated: add quotes, line_items
apps/mobile/src/db/schema.ts                        # Updated: add quotes, line_items
apps/mobile/src/db/migrations.ts                    # Updated
apps/mobile/src/db/index.ts                         # Updated: register Quote, LineItem
apps/mobile/src/db/models/quote.ts                  # NEW
apps/mobile/src/db/models/line-item.ts              # NEW
apps/mobile/src/hooks/use-quotes.ts                 # NEW
apps/mobile/src/components/quotes/line-item-row.tsx # NEW
apps/mobile/src/components/quotes/quote-card.tsx    # NEW
apps/mobile/app/(modals)/create-quote.tsx           # NEW
apps/mobile/app/(tabs)/jobs/quotes.tsx              # NEW (or quote list within jobs)
apps/mobile/app/(tabs)/jobs/quote/[id].tsx          # NEW
packages/shared/src/types/quote.ts                  # NEW
packages/shared/src/utils/quote-calculations.ts     # NEW
packages/shared/src/utils/quote-calculations.test.ts # NEW
packages/shared/src/index.ts                        # Updated
```

**Story 2.3 files:**
```
apps/api/prisma/schema.prisma                       # Updated: add quote_photos, pdf_url
apps/api/src/services/pdf-service.ts                # NEW
apps/api/src/services/pdf-service.test.ts           # NEW
apps/api/src/routes/quotes.ts                       # NEW (or updated)
apps/mobile/src/db/schema.ts                        # Updated: add quote_photos, pdf_url
apps/mobile/src/db/migrations.ts                    # Updated
apps/mobile/src/db/index.ts                         # Updated: register QuotePhoto
apps/mobile/src/db/models/quote-photo.ts            # NEW
apps/mobile/src/db/models/quote.ts                  # Updated: add photos children, pdf_url
apps/mobile/src/components/quotes/quote-photo-gallery.tsx # NEW
apps/mobile/app/(modals)/create-quote.tsx           # Updated: add photo capture
```

**Story 2.4 files:**
```
apps/api/src/config/twilio.ts                       # NEW
apps/api/src/services/sms-service.ts                # NEW
apps/api/src/services/sms-service.test.ts           # NEW
apps/api/src/services/notification-service.ts       # NEW
apps/api/src/utils/signed-url.ts                    # NEW
apps/api/src/routes/quotes.ts                       # Updated: send, approve, decline endpoints
apps/api/src/routes/quotes.test.ts                  # NEW
apps/api/src/jobs/quote-expiry.ts                   # NEW
apps/api/src/jobs/quote-expiry.test.ts              # NEW
apps/api/prisma/schema.prisma                       # Updated: push_token on team_members
apps/mobile/src/services/notification-service.ts    # NEW
apps/mobile/app/(tabs)/jobs/quote/[id].tsx          # Updated: send action
apps/web/src/app/(public)/quote/[token]/page.tsx    # NEW
```

### Testing Standards

- Jest for all tests, co-located with source files
- Supertest for API endpoint integration tests
- React Native Testing Library for mobile component tests
- Mock external services (Twilio, Stripe, Supabase) in tests — never call real APIs
- Test money calculations thoroughly (rounding, edge cases with 0 amounts)
- Test quote status transitions (valid and invalid)
- Test signed URL expiry logic
- Minimum coverage: all service functions, all API endpoints, calculation utils

### References

- [Source: mvps/field-service-management/planning/architecture.md#Data Model] — quotes, line_items, customers, job_photos table schemas
- [Source: mvps/field-service-management/planning/architecture.md#Data Architecture] — WatermelonDB offline-first, conflict resolution
- [Source: mvps/field-service-management/planning/architecture.md#API & Communication Patterns] — REST endpoints, error format, rate limiting
- [Source: mvps/field-service-management/planning/architecture.md#Implementation Patterns & Consistency Rules] — naming, format, process patterns
- [Source: mvps/field-service-management/planning/architecture.md#Project Structure & Boundaries] — directory structure, service boundaries
- [Source: mvps/field-service-management/planning/architecture.md#Infrastructure & Deployment] — Twilio, Stripe, Supabase Storage, PDF gen
- [Source: mvps/field-service-management/planning/epics.md#Epic 2: Quoting & Estimates] — all stories and acceptance criteria
- [Source: mvps/field-service-management/planning/prd.md#FR1-FR8, FR32, FR47, FR48] — functional requirements
- [Source: mvps/field-service-management/stories/epic-1.md] — Epic 1 foundation patterns and conventions
- [Source: mvps/field-service-management/stories/1-4-trade-specific-pricebook-templates.md] — pricebook model, picker component, WatermelonDB patterns

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List

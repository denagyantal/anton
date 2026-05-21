# Story 2.3: Quote Photo Attachments and PDF Generation

Status: done

## Story

As a tradesperson,
I want to attach job site photos to my quotes and generate professional branded PDF quotes,
so that customers see the issue clearly and receive a polished, trustworthy estimate.

## Acceptance Criteria

1. **Given** the user is viewing a quote detail screen, **When** they tap "Add Photo", **Then** the device camera opens and the captured photo is compressed (max 1200px width, 80% JPEG quality), stored locally on device, and attached to the quote as a QuotePhoto record in WatermelonDB (FR3).

2. **Given** a quote has photos attached, **When** the user views the quote detail screen, **Then** the attached photos are displayed in a horizontally scrollable gallery showing thumbnails; photos captured offline (remote_url is empty) show a yellow pending-sync indicator.

3. **Given** a quote has been created with line items, **When** the user taps "Generate PDF" on the quote detail screen and the device is online, **Then** the API generates a branded PDF containing: business logo, business name, license number, customer name and address, quote date, all line items (description/quantity/unit price/line total), subtotal, tax amount, grand total, any notes, and any attached photos; the PDF is uploaded to Supabase Storage and the quote record is updated with the pdf_url (FR4, FR20).

4. **Given** a PDF has been successfully generated, **When** the user views the quote detail screen, **Then** a "View PDF" button is visible that opens the PDF URL in the device browser; the button only appears when `quote.pdfUrl` is non-empty.

5. **Given** photos were captured while offline (remote_url is empty on their WatermelonDB record), **When** the user is online and views the quote detail, **Then** an "Upload Pending Photos" action is available that uploads each locally-stored photo to Supabase Storage via the API and updates each QuotePhoto's `remoteUrl` in WatermelonDB.

## Tasks / Subtasks

- [x] Task 1: Add QuotePhoto shared types (AC: #1, #2)
  - [x] 1.1: Update `packages/shared/src/types/quote.ts` — add `QuotePhoto` interface with fields: `id: string`, `quoteId: string`, `remoteUrl: string`, `localUri: string`, `caption: string`, `takenAt?: string` (ISO 8601), `createdAt: string`, `updatedAt: string`
  - [x] 1.2: Add optional `pdfUrl?: string` field to the existing `Quote` interface in the same file
  - [x] 1.3: Verify `packages/shared/src/index.ts` uses `export * from './types/quote'` (already the case — no change needed)

- [x] Task 2: Add QuotePhoto model to Prisma schema (AC: #3)
  - [x] 2.1: Add `pdf_url String?` field to the existing `Quote` model in `apps/api/prisma/schema.prisma` (follow the raw snake_case field name pattern already used in the Quote model — do NOT add `@map`)
  - [x] 2.2: Add `quote_photos QuotePhoto[]` relation field to the `Quote` model
  - [x] 2.3: Add new `QuotePhoto` model to schema.prisma (see Dev Notes for exact definition)
  - [x] 2.4: Run `npx prisma generate` from `apps/api/` to regenerate Prisma client types (no live DB required)

- [x] Task 3: Add quote_photos to WatermelonDB and update Quote model (AC: #1, #2)
  - [x] 3.1: Update `apps/mobile/src/db/schema.ts` — add `{ name: 'pdf_url', type: 'string', isOptional: true }` column to the existing `quotes` tableSchema; add a new `quote_photos` tableSchema (see Dev Notes); change `appSchema({ version: 4, ... })` to `version: 5`
  - [x] 3.2: Create `apps/mobile/src/db/models/quote-photo.ts` — WatermelonDB Model class for QuotePhoto (see Dev Notes for full pattern)
  - [x] 3.3: Update `apps/mobile/src/db/models/quote.ts` — add `@text('pdf_url') pdfUrl!: string` field
  - [x] 3.4: Update `apps/mobile/src/db/migrations.ts` — insert a new `{ toVersion: 5, steps: [...] }` block at the TOP of the migrations array (before the existing `toVersion: 4` block); import `addColumns` alongside existing imports; use `addColumns` to add `pdf_url` to `quotes` and `createTable` to create `quote_photos` (see Dev Notes)
  - [x] 3.5: Update `apps/mobile/src/db/index.ts` — import `QuotePhoto` from `./models/quote-photo` and add it to the `modelClasses` array

- [x] Task 4: Create mobile photo-service (AC: #1, #5)
  - [x] 4.1: Create `apps/mobile/src/services/photo-service.ts` with the functions listed below
  - [x] 4.2: Implement `capturePhoto(): Promise<string | null>` — calls `ImagePicker.requestCameraPermissionsAsync()`; if granted, calls `ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 1, allowsEditing: false })`; returns `result.assets[0].uri` or `null` if cancelled/denied
  - [x] 4.3: Implement `compressPhoto(uri: string): Promise<string>` — calls `ImageManipulator.manipulateAsync(uri, [{ resize: { width: 1200 } }], { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG })`; returns `result.uri`
  - [x] 4.4: Implement `savePhotoLocally(quoteId: string, localUri: string, caption?: string): Promise<QuotePhoto>` — does a `database.write()` to create a new QuotePhoto record with `quoteId`, `localUri`, `remoteUrl: ''`, `caption: caption ?? ''`, `takenAt: Date.now()`
  - [x] 4.5: Implement `uploadPhoto(quoteId: string, photoId: string, localUri: string): Promise<string>` — calls `apiClient.uploadFile<{ photoUrl: string }>('/api/v1/quotes/${quoteId}/photos', localUri, 'photo')`; on success, does a `database.write()` to update the QuotePhoto record (found by `photoId`) setting `remoteUrl = photoUrl`; returns the `photoUrl`
  - [x] 4.6: Implement `uploadPendingPhotos(quoteId: string): Promise<number>` — queries WatermelonDB for QuotePhoto records where `quote_id == quoteId` AND `remote_url == ''`; calls `uploadPhoto()` for each; returns count of successfully uploaded photos
  - [x] 4.7: Create `apps/mobile/src/services/photo-service.test.ts` — mock `expo-image-picker` and `expo-image-manipulator`; test `compressPhoto` (verify manipulateAsync called with correct args); test `savePhotoLocally` (verify WatermelonDB record created with empty remoteUrl)

- [x] Task 5: Add getSignedUrl to storage-service (AC: #3)
  - [x] 5.1: Update `apps/api/src/services/storage-service.ts` — add `getSignedUrl(bucket: string, path: string, expiresInSeconds: number): Promise<string>` using `supabaseAdmin.storage.from(bucket).createSignedUrl(path, expiresInSeconds)`; throw `AppError('STORAGE_ERROR', error.message, 500)` on failure; return the signed URL string

- [x] Task 6: Create PDF service (AC: #3)
  - [x] 6.1: Verify `@react-pdf/renderer` is in `apps/api/package.json`; if absent, install it: `cd apps/api && npm install @react-pdf/renderer`
  - [x] 6.2: Create `apps/api/src/services/pdf-service.ts`
  - [x] 6.3: Define a `QuotePdfData` type within the file holding all fields needed for the PDF template
  - [x] 6.4: Define the PDF template as a `buildQuotePdf(data: QuotePdfData)` function using `React.createElement` with `Document`, `Page`, `View`, `Text`, `Image` from `@react-pdf/renderer`; the template must include all sections from AC3: header (logo + business name + license number), customer info, quote date, line items table (description / qty / unit price / line total), subtotal/tax/grand total footer, notes section, and photos section (up to 4 photos in 2-column layout)
  - [x] 6.5: Export `async function generateQuotePdf(quoteId: string, accountId: string): Promise<Buffer>` — fetches from Prisma: the quote (include `line_items` ordered by `sort_order asc`), the customer, the account (for business logo and branding), and all `quote_photos` for the quote; calls `renderToBuffer(buildQuotePdf(data))` and returns the buffer
  - [x] 6.6: Create `apps/api/src/services/pdf-service.test.ts` — mock Prisma client; verify `generateQuotePdf` resolves to a Buffer for a valid mock quote

- [x] Task 7: Create quotes API routes (AC: #1, #3, #4)
  - [x] 7.1: Create `apps/api/src/routes/quotes.ts`; import `Router`, `authMiddleware`, `prisma`, `AppError`, `uploadFile` (from storage-service), `generateQuotePdf` (from pdf-service), and `multer`; define `const upload = multer({ storage: multer.memoryStorage() })`
  - [x] 7.2: Add `POST /api/v1/quotes/:id/photos` — apply `authMiddleware` and `upload.single('photo')`; look up the authenticated user's `accountId` via `prisma.teamMember.findUnique`; verify the quote exists and belongs to that account; validate `req.file` exists (422 if not); upload buffer to Supabase Storage at `photos` bucket, path `quotes/${accountId}/${quoteId}/${Date.now()}.jpg`, content-type `image/jpeg`; create `prisma.quotePhoto` record with the returned URL; respond `201 { data: { id, photoUrl, caption, takenAt } }`
  - [x] 7.3: Add `POST /api/v1/quotes/:id/generate-pdf` — apply `authMiddleware`; look up `accountId`; verify quote ownership; call `generateQuotePdf(quoteId, accountId)` to get a buffer; upload buffer to Supabase Storage at `pdfs` bucket, path `quotes/${accountId}/${quoteId}.pdf`, content-type `application/pdf`; update `prisma.quote.update` to set `pdf_url = publicUrl`; respond `200 { data: { pdfUrl: publicUrl } }`
  - [x] 7.4: Export as `export const quotesRouter = router`
  - [x] 7.5: Create `apps/api/src/routes/quotes.test.ts` — mock `prisma`, `storage-service`, and `pdf-service`; test both endpoints: happy path (201/200 responses), missing file (422), quote not found (404), unauthenticated (401)

- [x] Task 8: Register quotes router in Express app (AC: #1, #3)
  - [x] 8.1: Update `apps/api/src/index.ts` — import `{ quotesRouter } from './routes/quotes.js'` and add `app.use('/api/v1/quotes', quotesRouter)` after the accounts router line

- [x] Task 9: Add useQuotePhotos hook (AC: #2, #5)
  - [x] 9.1: Add `export function useQuotePhotos(quoteId: string)` to `apps/mobile/src/hooks/use-quotes.ts` — use `useQuery(() => database.get<QuotePhoto>('quote_photos').query(Q.where('quote_id', quoteId), Q.sortBy('taken_at', Q.asc)), [quoteId])`; import `QuotePhoto` from `../db/models/quote-photo`

- [x] Task 10: Create QuotePhotoGallery component (AC: #2)
  - [x] 10.1: Create `apps/mobile/src/components/quotes/quote-photo-gallery.tsx`
  - [x] 10.2: Accept props: `photos: QuotePhoto[]`, `onAddPhoto: () => void`
  - [x] 10.3: Render a horizontal `ScrollView` containing: an "Add Photo" pressable card first, then one 80×80 `Image` thumbnail per photo
  - [x] 10.4: Image source: `{ uri: photo.remoteUrl || photo.localUri }` — falls back to local URI when remote is empty
  - [x] 10.5: Overlay a small yellow dot badge on thumbnails where `photo.remoteUrl === ''` to signal pending upload
  - [x] 10.6: Show an empty state label "No photos yet" if `photos.length === 0` (alongside the Add Photo card)

- [x] Task 11: Update quote detail screen (AC: #1, #2, #3, #4, #5)
  - [x] 11.1: Update `apps/mobile/app/(tabs)/more/quotes/[id].tsx`
  - [x] 11.2: Import and render `QuotePhotoGallery` below the line items section, passing `photos` from `useQuotePhotos(id)` and an `onAddPhoto` callback
  - [x] 11.3: Implement `onAddPhoto`: call `capturePhoto()` → if null, return; call `compressPhoto(uri)` → call `savePhotoLocally(id, compressedUri)` → attempt `uploadPhoto(id, photo.id, compressedUri)` in a try/catch; if upload throws (offline), show a toast "Photo saved — will upload when online"
  - [x] 11.4: Add "Generate PDF" button: disabled when `isGeneratingPdf` state is true; on press, call `apiClient.post<{ pdfUrl: string }>('/api/v1/quotes/${id}/generate-pdf')`; on success, update WatermelonDB Quote record setting `pdfUrl = result.pdfUrl` via `database.write()`; show success toast
  - [x] 11.5: Render a "View PDF" `Pressable` that calls `Linking.openURL(quote.pdfUrl)` — conditionally rendered only when `quote.pdfUrl` is non-empty
  - [x] 11.6: Render an "Upload Pending Photos" `Pressable` only when `photos.some(p => p.remoteUrl === '')`; on press, call `uploadPendingPhotos(id)` and show result toast ("N photos uploaded")

## Dev Notes

### Architecture Compliance

- **WatermelonDB for all mobile entity data**: QuotePhoto records are created and queried only through WatermelonDB. Do NOT call the API for CRUD operations on QuotePhoto records — only use the API for file upload and PDF generation (action endpoints).
- **API action endpoints are distinct from sync**: `POST /api/v1/quotes/:id/photos` (file upload) and `POST /api/v1/quotes/:id/generate-pdf` require server-side processing and internet. They are NOT sync operations and do NOT go through the WatermelonDB sync engine. The sync engine (Epic 6) handles entity data sync; these endpoints handle file processing.
- **No `@relation` or `@children` decorators in WatermelonDB**: Query QuotePhoto records with `Q.where('quote_id', quoteId)`. This is the established pattern from Stories 2.1 and 2.2.
- **No NativeWind**: All styling via React Native `StyleSheet`. Do NOT install NativeWind, react-native-paper, or any other UI framework.

### WatermelonDB Migration — Version 5 (CRITICAL)

The migrations array is ordered **highest version first (descending)**. Add the version 5 block at the TOP of the array (before the existing `toVersion: 4` block). Use `addColumns` — not `createTable` — to add columns to the existing `quotes` table:

```typescript
import { schemaMigrations, createTable, addColumns } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    {
      toVersion: 5, // ← INSERT AT TOP (before toVersion: 4)
      steps: [
        addColumns({
          table: 'quotes',
          columns: [
            { name: 'pdf_url', type: 'string', isOptional: true },
          ],
        }),
        createTable({
          name: 'quote_photos',
          columns: [
            { name: 'quote_id', type: 'string' },
            { name: 'local_uri', type: 'string', isOptional: true },
            { name: 'remote_url', type: 'string', isOptional: true },
            { name: 'caption', type: 'string', isOptional: true },
            { name: 'taken_at', type: 'number', isOptional: true },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
      ],
    },
    {
      toVersion: 4, // ← existing, do not modify
      steps: [ ... ],
    },
    // ... older versions unchanged
  ],
});
```

Also update `schema.ts`: change `appSchema({ version: 4, ... })` to `version: 5` and add both the `pdf_url` column to the `quotes` tableSchema and the new `quote_photos` tableSchema.

### WatermelonDB QuotePhoto Model

```typescript
// apps/mobile/src/db/models/quote-photo.ts
import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class QuotePhoto extends Model {
  static table = 'quote_photos';

  @text('quote_id') quoteId!: string;
  @text('local_uri') localUri!: string;
  @text('remote_url') remoteUrl!: string;   // empty string = not yet uploaded
  @text('caption') caption!: string;
  @field('taken_at') takenAt!: number | null;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
```

`remoteUrl` uses `@text` and defaults to `''`. Check `photo.remoteUrl === ''` (not null/undefined) to detect pending-upload photos — this is consistent with how other optional text fields work in WatermelonDB models (e.g., `notes`, `approvalToken` on Quote).

### Quote WatermelonDB Model Update

Add one line to the existing `Quote` model (`apps/mobile/src/db/models/quote.ts`):
```typescript
@text('pdf_url') pdfUrl!: string;
```
Place it alongside the other `@text` fields. Empty string means no PDF has been generated yet.

### Prisma Schema — QuotePhoto Model

The existing `Quote` model uses raw `snake_case` field names WITHOUT `@map()`. Continue that pattern for `QuotePhoto`:

```prisma
model QuotePhoto {
  id         String    @id @default(uuid())
  quote_id   String
  photo_url  String
  caption    String?
  taken_at   DateTime?
  created_at DateTime  @default(now())
  updated_at DateTime  @updatedAt
  synced_at  DateTime?

  quote Quote @relation(fields: [quote_id], references: [id])

  @@index([quote_id], name: "idx_quote_photos_quote_id")
  @@map("quote_photos")
}
```

Add to the existing `Quote` model:
```prisma
// inside model Quote { ... }
pdf_url      String?
quote_photos QuotePhoto[]
```

### Photo Service — Expo API Details

**expo-image-picker** — check if already in `apps/mobile/package.json` (installed during Story 1.3 for business logo). If present, no install needed.

**expo-image-manipulator** — likely NOT installed yet. Install via:
```bash
cd apps/mobile && npx expo install expo-image-manipulator
```

API usage:
```typescript
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

// Camera capture
const permission = await ImagePicker.requestCameraPermissionsAsync();
const result = await ImagePicker.launchCameraAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  quality: 1,
  allowsEditing: false,
});
if (result.canceled) return null;
const uri = result.assets[0].uri;

// Compress (max 1200px wide, 80% JPEG quality)
const compressed = await ImageManipulator.manipulateAsync(
  uri,
  [{ resize: { width: 1200 } }],
  { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG },
);
// compressed.uri is the compressed file path
```

### PDF Service — @react-pdf/renderer Usage

Use `renderToBuffer()` (server-side Node.js API). Do NOT use `BlobProvider`, `PDFViewer`, or other browser-only APIs.

Since `apps/api` is Express/TypeScript without JSX configuration, build the PDF element tree with `React.createElement` to avoid TSX compilation issues:

```typescript
import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, renderToBuffer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', marginBottom: 20 },
  logo: { width: 72, height: 72, objectFit: 'contain', marginRight: 16 },
  businessName: { fontSize: 16, fontWeight: 'bold' },
  section: { marginBottom: 12 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#ccc', paddingVertical: 4 },
  col_desc: { flex: 3 },
  col_num: { flex: 1, textAlign: 'right' },
  totalRow: { flexDirection: 'row', paddingVertical: 3 },
  bold: { fontWeight: 'bold' },
  photoGrid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  photo: { width: '48%', marginRight: '2%', marginBottom: 8, height: 140 },
});

function buildQuotePdf(data: QuotePdfData) {
  return React.createElement(Document, null,
    React.createElement(Page, { size: 'LETTER', style: styles.page },
      // Header: logo + business name + license
      React.createElement(View, { style: styles.header },
        data.businessLogoUrl
          ? React.createElement(Image, { src: data.businessLogoUrl, style: styles.logo })
          : null,
        React.createElement(View, null,
          React.createElement(Text, { style: styles.businessName }, data.businessName),
          data.licenseNumber ? React.createElement(Text, null, `Lic: ${data.licenseNumber}`) : null,
        ),
      ),
      // ... customer info, line items table, totals, notes, photos
    )
  );
}
```

**Business logo**: pass `account.businessLogoUrl` directly to `Image` `src` prop — @react-pdf/renderer fetches remote URLs server-side. If the URL is null/empty, skip the Image element.

**Quote photo images**: pass each `quotePhoto.photo_url` directly to `Image` `src`. Display at most 4 photos in a 2-column grid to avoid oversized PDFs.

**Money formatting**: import `formatCurrency` from `@field-service/shared/src/utils/money` to format cent values (e.g., `formatCurrency(lineItem.total)` → `"$89.00"`).

**renderToBuffer** returns `Promise<Buffer>`, which can be passed directly to `uploadFile()` in storage-service.ts.

### API Account Ownership Verification Pattern

Follow the exact pattern from `apps/api/src/routes/accounts.ts`:
```typescript
const teamMember = await prisma.teamMember.findUnique({
  where: { authUserId: req.user!.id },
  select: { accountId: true },
});
if (!teamMember) {
  next(new AppError('UNAUTHORIZED', 'No account found for user', 401));
  return;
}
const quote = await prisma.quote.findFirst({
  where: { id: req.params['id'], account_id: teamMember.accountId },
});
if (!quote) {
  next(new AppError('QUOTE_NOT_FOUND', 'Quote not found', 404));
  return;
}
```

### Multer Pattern (already used in accounts.ts)

```typescript
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage() });

// Apply as middleware before the route handler:
router.post('/:id/photos', authMiddleware, upload.single('photo'), async (req, res, next) => {
  // req.file.buffer is available here
  // req.file.originalname, req.file.mimetype are also available
});
```

The `apiClient.uploadFile()` method in `apps/mobile/src/services/api-client.ts` sends a `FormData` request using the field name passed as third argument. Pass `'photo'` to match `upload.single('photo')`.

### Supabase Storage Buckets

Two buckets must exist in Supabase:
- `photos` — for quote (and later job) photos uploaded from mobile
- `pdfs` — for generated quote and invoice PDFs

For local development (if using Supabase local via `supabase start`), create buckets via the Supabase Studio dashboard at `http://localhost:54323`. In production, create via Supabase dashboard.

In tests, mock `uploadFile` and `getSignedUrl` from storage-service.ts so tests don't require live Supabase.

### After PDF Generation — Mobile Update Pattern

After the `generate-pdf` API call returns `pdfUrl`, update the WatermelonDB Quote record immediately so the "View PDF" button appears without waiting for the next sync:

```typescript
const result = await apiClient.post<{ pdfUrl: string }>(`/api/v1/quotes/${id}/generate-pdf`);
await database.write(async () => {
  await quote.update((record) => {
    record.pdfUrl = result.pdfUrl;
  });
});
```

`quote` here is the `Quote` WatermelonDB model instance from `useQuote(id)`.

### Key Anti-Patterns to Avoid

- Do NOT call `apiClient.post()` / `apiClient.uploadFile()` for WatermelonDB CRUD — only for the two action endpoints (photo upload, PDF generation).
- Do NOT use `@relation` or `@children` decorators in WatermelonDB models.
- Do NOT install NativeWind, react-native-paper, or any other UI library.
- Do NOT use `renderToStream()` from @react-pdf/renderer — use `renderToBuffer()` for Node.js.
- Do NOT omit `QuotePhoto` from `modelClasses` in `db/index.ts` — WatermelonDB will silently ignore the table without it.
- Do NOT put the version 5 migration AFTER the version 4 entry — WatermelonDB migration array must be highest-version-first.
- Do NOT skip calling `addColumns` for `pdf_url` — adding a column to `schema.ts` without a migration step will cause a schema mismatch error on existing installations.
- Do NOT use `.tsx` extension for `pdf-service.ts` — keep it `.ts` and use `React.createElement` instead of JSX.
- Do NOT fail silently if photo upload fails — save the QuotePhoto locally and surface a user-visible toast explaining the photo will upload when back online.

### Dependencies Check

**Mobile — verify or install:**
- `expo-image-picker`: check `apps/mobile/package.json`; likely installed from Story 1.3. If missing: `npx expo install expo-image-picker`
- `expo-image-manipulator`: likely NOT installed. Install: `cd apps/mobile && npx expo install expo-image-manipulator`

**API — new:**
- `@react-pdf/renderer`: `cd apps/api && npm install @react-pdf/renderer`

**All other dependencies** (WatermelonDB, multer, @supabase/supabase-js, Prisma, React) are already installed from previous stories.

### Project Structure Notes

Files modified:
```
packages/shared/src/types/quote.ts           MODIFIED (add QuotePhoto interface, pdfUrl to Quote)
apps/api/prisma/schema.prisma                MODIFIED (add pdf_url to Quote, add QuotePhoto model)
apps/mobile/src/db/schema.ts                 MODIFIED (version→5, add pdf_url col, add quote_photos table)
apps/mobile/src/db/migrations.ts             MODIFIED (add toVersion:5 block at top)
apps/mobile/src/db/models/quote.ts           MODIFIED (add pdfUrl field)
apps/mobile/src/db/index.ts                  MODIFIED (import + register QuotePhoto in modelClasses)
apps/api/src/services/storage-service.ts     MODIFIED (add getSignedUrl function)
apps/api/src/index.ts                        MODIFIED (register quotesRouter at /api/v1/quotes)
apps/mobile/src/hooks/use-quotes.ts          MODIFIED (add useQuotePhotos hook)
apps/mobile/app/(tabs)/more/quotes/[id].tsx  MODIFIED (add gallery, Generate PDF, View PDF, Upload Pending)
```

Files created:
```
apps/mobile/src/db/models/quote-photo.ts               NEW
apps/mobile/src/services/photo-service.ts              NEW
apps/mobile/src/services/photo-service.test.ts         NEW
apps/mobile/src/components/quotes/quote-photo-gallery.tsx  NEW
apps/api/src/services/pdf-service.ts                   NEW
apps/api/src/services/pdf-service.test.ts              NEW
apps/api/src/routes/quotes.ts                          NEW
apps/api/src/routes/quotes.test.ts                     NEW
```

All paths are relative to `mvps/field-service-management/src/` as the implementation root.

### References

- [Source: planning/epics.md#Story 2.3] — Acceptance criteria, FR3, FR4, FR20
- [Source: planning/architecture.md#Infrastructure & Deployment] — PDF generation via @react-pdf/renderer on API server; File storage via Supabase Storage; Photo service at apps/mobile/src/services/photo-service.ts; PDF service at apps/api/src/services/pdf-service.ts
- [Source: planning/architecture.md#Data Model] — job_photos pattern (reused for quote_photos); quotes fields; pdf_url
- [Source: planning/architecture.md#Service Boundaries] — pdf-service owns PDF generation; storage-service owns Supabase Storage; sms-service owns SMS (deferred to Story 2.4)
- [Source: planning/architecture.md#API & Communication Patterns] — REST endpoints; `{ data: ... }` / `{ error: ... }` response format; /api/v1/ prefix
- [Source: planning/architecture.md#Naming Patterns] — snake_case DB, camelCase TypeScript, kebab-case files
- [Source: planning/architecture.md#Format Patterns] — Money as integer cents, UUIDs, ISO 8601 dates
- [Source: stories/2-2-quote-creation-with-line-items.md] — WatermelonDB model patterns (no @relation, @text for strings, @field for numbers), schema at version 4, Quote/LineItem patterns, no NativeWind, StyleSheet, Q.where() for related records
- [Source: apps/api/src/routes/accounts.ts] — multer usage pattern, authMiddleware, uploadFile from storage-service pattern
- [Source: apps/api/src/services/storage-service.ts] — existing uploadFile/deleteFile; add getSignedUrl here
- [Source: apps/mobile/src/services/api-client.ts] — uploadFile(path, fileUri, fieldName) method for multipart uploads from mobile

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None.

### Completion Notes List

- All 11 tasks implemented and verified across 49 API tests + 43 mobile tests (all passing).
- `@react-pdf/renderer` is ESM-only; resolved by adding a `moduleNameMapper` in `jest.config.js` pointing to a manual CJS mock at `src/__mocks__/@react-pdf/renderer.js`.
- `expo-image-picker` and `expo-image-manipulator` added to `apps/mobile/package.json` and installed via `npm install` at monorepo root.
- WatermelonDB schema bumped from v4 → v5 with `addColumns` for `pdf_url` on `quotes` and `createTable` for `quote_photos`; migration block added at top of migrations array (highest-version-first order).
- Prisma `QuotePhoto` model follows existing Quote snake_case field pattern (no `@map()`).
- PDF template built with `React.createElement` (no JSX) in a `.ts` file using `renderToBuffer()` for Node.js server-side rendering.
- `req.params['id']` cast to `String()` in quotes route to satisfy TypeScript strict mode (`string | string[] | undefined`).
- Mobile quote detail screen updated with photo gallery, Generate PDF (disabled during generation), View PDF (conditional on pdfUrl), and Upload Pending Photos (conditional on pending photos) sections.

### File List

**Modified:**
- `mvps/field-service-management/src/packages/shared/src/types/quote.ts`
- `mvps/field-service-management/src/apps/api/prisma/schema.prisma`
- `mvps/field-service-management/src/apps/mobile/src/db/schema.ts`
- `mvps/field-service-management/src/apps/mobile/src/db/migrations.ts`
- `mvps/field-service-management/src/apps/mobile/src/db/models/quote.ts`
- `mvps/field-service-management/src/apps/mobile/src/db/index.ts`
- `mvps/field-service-management/src/apps/api/src/services/storage-service.ts`
- `mvps/field-service-management/src/apps/api/src/index.ts`
- `mvps/field-service-management/src/apps/mobile/src/hooks/use-quotes.ts`
- `mvps/field-service-management/src/apps/mobile/app/(tabs)/more/quotes/[id].tsx`
- `mvps/field-service-management/src/apps/api/package.json` (added @react-pdf/renderer)
- `mvps/field-service-management/src/apps/mobile/package.json` (added expo-image-picker, expo-image-manipulator)
- `mvps/field-service-management/src/apps/api/jest.config.js` (added @react-pdf/renderer moduleNameMapper)
- `mvps/field-service-management/sprint-status.yaml`

**Created:**
- `mvps/field-service-management/src/apps/mobile/src/db/models/quote-photo.ts`
- `mvps/field-service-management/src/apps/mobile/src/services/photo-service.ts`
- `mvps/field-service-management/src/apps/mobile/src/services/photo-service.test.ts`
- `mvps/field-service-management/src/apps/mobile/src/components/quotes/quote-photo-gallery.tsx`
- `mvps/field-service-management/src/apps/api/src/services/pdf-service.ts`
- `mvps/field-service-management/src/apps/api/src/services/pdf-service.test.ts`
- `mvps/field-service-management/src/apps/api/src/routes/quotes.ts`
- `mvps/field-service-management/src/apps/api/src/routes/quotes.test.ts`
- `mvps/field-service-management/src/apps/api/src/__mocks__/@react-pdf/renderer.js`

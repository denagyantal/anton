# Story 3.3: On-Site Photo Documentation and Signature Capture

Status: ready-for-dev

## Story

As a tradesperson,
I want to capture before/after photos and get customer signatures on my phone,
so that I have documentation for completed work and proof of customer acceptance.

## Acceptance Criteria

1. **[Photo capture on active job]** Given a job is in any active status (SCHEDULED, IN_PROGRESS, COMPLETE), when the user taps "Add Photo" on the job detail screen, then the device camera opens and the captured photo is compressed (max 1200px width, 80% JPEG quality), stored locally as a `job_photos` record linked to the job with a `caption` field and `taken_at` timestamp. (FR16)

2. **[Photo gallery display]** Given a job has one or more photos attached, when the user views the job detail screen, then the photos section shows a horizontally scrollable gallery with each photo's thumbnail, caption, and taken_at timestamp displayed below the thumbnail. (FR16)

3. **[Signature capture trigger]** Given a job is in any active status (SCHEDULED, IN_PROGRESS, COMPLETE), when the user taps "Capture Signature" on the job detail screen, then a full-screen `<Modal>` signature pad opens where the customer can draw their signature with their finger. (FR17)

4. **[Save signature]** Given the customer has drawn on the signature pad, when the user taps "Save Signature", then: the signature image is saved to the local filesystem using `expo-file-system` (stored in `FileSystem.documentDirectory + 'signatures/'`), and the resulting local file URI is written to `job.signatureUrl` in WatermelonDB via `database.write()`. (FR17)

5. **[Signature display]** Given a job has a saved signature (`job.signatureUrl` is non-null and non-empty), when the user views the job detail screen, then the signature is rendered as an `<Image>` in the Signature section; the "Capture Signature" button label changes to "Re-capture Signature". (FR17)

6. **[Offline operation]** Given the device has no internet connectivity, when the user adds photos or captures a signature, then all operations succeed without errors — photos are stored with `remote_url: ''` (pending upload) and signatures are stored as local file URIs; the job detail screen displays both immediately without requiring a network round-trip. (FR36)

## Tasks / Subtasks

- [ ] Task 1: Install required packages (AC: #3, #4)
  - [ ] 1.1: Run `npx expo install react-native-webview expo-file-system` from within `apps/mobile/`
  - [ ] 1.2: Run `npm install react-native-signature-canvas` from within `apps/mobile/`
  - [ ] 1.3: Verify both packages appear in `apps/mobile/package.json` under `dependencies`

- [ ] Task 2: Add `job_photos` table to schema and migrations (AC: #1, #6)
  - [ ] 2.1: In `apps/mobile/src/db/schema.ts`, bump `version` from `6` to `7` and add a new `tableSchema` for `job_photos` with columns: `job_id` (string), `local_uri` (string, isOptional), `remote_url` (string, isOptional), `caption` (string, isOptional), `taken_at` (number, isOptional), `created_at` (number), `updated_at` (number)
  - [ ] 2.2: In `apps/mobile/src/db/migrations.ts`, add a new migration entry `{ toVersion: 7, steps: [createTable({ name: 'job_photos', columns: [...] })] }` at the **top** of the `migrations` array (most recent first)

- [ ] Task 3: Create `JobPhoto` model class (AC: #1, #2)
  - [ ] 3.1: Create `apps/mobile/src/db/models/job-photo.ts`
  - [ ] 3.2: Extend `Model` with `static table = 'job_photos'`; declare fields: `@text('job_id') jobId!: string`, `@text('local_uri') localUri!: string`, `@text('remote_url') remoteUrl!: string`, `@text('caption') caption!: string`, `@field('taken_at') takenAt!: number | null`, `@readonly @date('created_at') createdAt!: Date`, `@date('updated_at') updatedAt!: Date`

- [ ] Task 4: Register `JobPhoto` in the database (AC: #1)
  - [ ] 4.1: In `apps/mobile/src/db/index.ts`, import `JobPhoto` from `'./models/job-photo'`
  - [ ] 4.2: Add `JobPhoto` to the `modelClasses` array in the `new Database(...)` call

- [ ] Task 5: Create `use-job-photos.ts` hook (AC: #1, #2, #4, #5)
  - [ ] 5.1: Create `apps/mobile/src/hooks/use-job-photos.ts`
  - [ ] 5.2: Export `useJobPhotos(jobId: string): { photos: JobPhoto[]; isLoading: boolean }` — observable query on `job_photos` where `job_id = jobId`, sorted by `taken_at` ascending (`Q.sortBy('taken_at', Q.asc)`); return empty array + `isLoading: false` when `jobId` is falsy
  - [ ] 5.3: Export `useAddJobPhoto(): { addPhoto: (jobId: string, caption?: string) => Promise<JobPhoto | null> }` — calls `capturePhoto()` then `compressPhoto()` from `photo-service.ts`; if either returns null, return null; creates a `job_photos` record in `database.write()` with `localUri`, `remoteUrl: ''`, `caption: caption ?? ''`, `takenAt: Date.now()`
  - [ ] 5.4: Export `useUpdateJobSignature(): { updateSignature: (jobId: string, localUri: string) => Promise<void> }` — updates `job.signatureUrl` in `database.write()`; throws if job not found

- [ ] Task 6: Create `use-job-photos.test.ts` (AC: #1, #4, #6)
  - [ ] 6.1: Create `apps/mobile/src/hooks/use-job-photos.test.ts`
  - [ ] 6.2: Use the same `createTestDatabase()` pattern from `use-schedule.test.ts` and `use-jobs.test.ts` with `LokiJSAdapter`; include `Job` and `JobPhoto` in `modelClasses`
  - [ ] 6.3: Test: adding a job_photo record with `localUri` and `remoteUrl: ''` persists correctly and is queryable by `job_id`
  - [ ] 6.4: Test: `updateSignature` writes the local URI to `job.signatureUrl` without modifying other job fields (check `job.status` remains unchanged)
  - [ ] 6.5: Test: querying `job_photos` by `job_id` returns only photos for that job (not photos belonging to a different job)

- [ ] Task 7: Create `job-photo-gallery.tsx` component (AC: #2)
  - [ ] 7.1: Create `apps/mobile/src/components/jobs/job-photo-gallery.tsx`
  - [ ] 7.2: Accept props: `{ photos: JobPhoto[]; onAddPhoto: () => void }`
  - [ ] 7.3: Render a horizontal `<ScrollView>` containing: an "Add Photo" card (dashed border, `+` icon, same visual style as `quote-photo-gallery.tsx`) followed by each photo as a thumbnail
  - [ ] 7.4: Each photo thumbnail: 80×80 `<Image>` showing `photo.remoteUrl || photo.localUri`; a yellow pending dot (10×10, absolute top-right) when `remoteUrl === ''`; caption text below in 11px gray; `taken_at` formatted as `HH:MM AM/PM` below the caption
  - [ ] 7.5: Use `StyleSheet.create` — no NativeWind

- [ ] Task 8: Update job detail screen with photos and signature (AC: #1, #2, #3, #4, #5, #6)
  - [ ] 8.1: In `apps/mobile/app/(tabs)/jobs/[id].tsx`, import `useJobPhotos`, `useAddJobPhoto`, `useUpdateJobSignature` from `use-job-photos.ts`, `JobPhotoGallery` from `job-photo-gallery.tsx`, and `SignatureCanvas` from `react-native-signature-canvas`, and `FileSystem` from `expo-file-system`, and `Modal` from `react-native`
  - [ ] 8.2: Add state: `const [signatureVisible, setSignatureVisible] = useState(false)`; add refs: `const signatureRef = useRef<SignatureCanvas>(null)`
  - [ ] 8.3: Add a "Photos" section between the Notes section and the action button: render `<JobPhotoGallery photos={photos} onAddPhoto={handleAddPhoto} />`; `handleAddPhoto` calls `addPhoto(job.id)` from `useAddJobPhoto` (no caption for now)
  - [ ] 8.4: Add a "Signature" section below the Photos section: if `job.signatureUrl` is set, render `<Image source={{ uri: job.signatureUrl }} style={styles.signaturePreview} resizeMode="contain" />`; always render a button labeled `job.signatureUrl ? 'Re-capture Signature' : 'Capture Signature'` that sets `signatureVisible(true)`
  - [ ] 8.5: Add a full-screen `<Modal visible={signatureVisible} animationType="slide">` containing: a header row with title "Customer Signature" and an "× Cancel" button; a `<SignatureCanvas ref={signatureRef} onOK={handleSignatureOK} descriptionText="" backgroundColor="white" />` filling remaining space; a "Save Signature" button at the bottom that calls `signatureRef.current?.readSignature()`
  - [ ] 8.6: Implement `handleSignatureOK(signature: string)` — the callback receives a base64 PNG data URI; save it to `FileSystem.documentDirectory + 'signatures/' + job.id + '.png'` using `FileSystem.writeAsStringAsync(path, signature.replace('data:image/png;base64,', ''), { encoding: FileSystem.EncodingType.Base64 })`; then ensure the `signatures/` directory exists first with `FileSystem.makeDirectoryAsync(..., { intermediates: true })`; call `updateSignature(job.id, path)` from `useUpdateJobSignature`; close the modal
  - [ ] 8.7: The "Capture Signature" button should only be visible when the job status is SCHEDULED, IN_PROGRESS, or COMPLETE (not QUOTED, not INVOICED)

## Dev Notes

### Critical: Schema Migration Required (v6 → v7)

The current schema is at version 6. This story requires adding `job_photos` as a new table. **Both** `schema.ts` (version bump) and `migrations.ts` (new migration entry) must be updated together.

The migration entry goes at the **top** of the `migrations` array in `migrations.ts` (WatermelonDB expects migrations in descending `toVersion` order — highest first):

```typescript
// apps/mobile/src/db/migrations.ts — add at the TOP of the migrations array
{
  toVersion: 7,
  steps: [
    createTable({
      name: 'job_photos',
      columns: [
        { name: 'job_id', type: 'string' },
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
```

The schema `version: 6` in `schema.ts` must be bumped to `version: 7` at the same time.

### `JobPhoto` Model — Mirror of `QuotePhoto`

The `JobPhoto` model is structurally identical to `QuotePhoto` (in `src/db/models/quote-photo.ts`) but references `job_id` instead of `quote_id`:

```typescript
// apps/mobile/src/db/models/job-photo.ts
import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class JobPhoto extends Model {
  static table = 'job_photos';

  @text('job_id') jobId!: string;
  @text('local_uri') localUri!: string;
  @text('remote_url') remoteUrl!: string;
  @text('caption') caption!: string;
  @field('taken_at') takenAt!: number | null;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
```

### `use-job-photos.ts` — Key Patterns

Reuse `capturePhoto()` and `compressPhoto()` from the existing `photo-service.ts` (already handles camera permissions, compression to 1200px/80% JPEG). Do NOT re-implement these.

```typescript
// apps/mobile/src/hooks/use-job-photos.ts
import { useState, useEffect, useCallback } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import JobPhoto from '../db/models/job-photo';
import Job from '../db/models/job';
import { capturePhoto, compressPhoto } from '../services/photo-service';

export function useJobPhotos(jobId: string): { photos: JobPhoto[]; isLoading: boolean } {
  const database = useDatabase();
  const [photos, setPhotos] = useState<JobPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!jobId) { setPhotos([]); setIsLoading(false); return; }

    const subscription = database
      .get<JobPhoto>('job_photos')
      .query(Q.where('job_id', jobId), Q.sortBy('taken_at', Q.asc))
      .observe()
      .subscribe((records) => { setPhotos(records); setIsLoading(false); });

    return () => subscription.unsubscribe();
  }, [database, jobId]);

  return { photos, isLoading };
}

export function useAddJobPhoto(): {
  addPhoto: (jobId: string, caption?: string) => Promise<JobPhoto | null>;
} {
  const database = useDatabase();

  const addPhoto = useCallback(async (jobId: string, caption?: string): Promise<JobPhoto | null> => {
    const rawUri = await capturePhoto();
    if (!rawUri) return null;
    const compressedUri = await compressPhoto(rawUri);

    return database.write(async () => {
      return database.get<JobPhoto>('job_photos').create((record) => {
        record.jobId = jobId;
        record.localUri = compressedUri;
        record.remoteUrl = '';
        record.caption = caption ?? '';
        record.takenAt = Date.now();
      });
    });
  }, [database]);

  return { addPhoto };
}

export function useUpdateJobSignature(): {
  updateSignature: (jobId: string, localUri: string) => Promise<void>;
} {
  const database = useDatabase();

  const updateSignature = useCallback(async (jobId: string, localUri: string): Promise<void> => {
    await database.write(async () => {
      const job = await database.get<Job>('jobs').find(jobId);
      await job.update((record) => { record.signatureUrl = localUri; });
    });
  }, [database]);

  return { updateSignature };
}
```

### Signature Capture — `react-native-signature-canvas`

**Why WebView-based:** The architecture doc explicitly recommends `react-native-signature-canvas`. It renders a signature pad inside a `<WebView>` for cross-platform pixel-accurate drawing.

**Installation (run from `apps/mobile/` directory):**
```bash
npx expo install react-native-webview expo-file-system
npm install react-native-signature-canvas
```

**`SignatureCanvas` API summary:**
- `ref`: required to call `.readSignature()` programmatically
- `onOK(dataURL: string)`: called after `.readSignature()` with a `data:image/png;base64,...` string
- `onEmpty()`: called if the user taps Save on an empty pad
- `backgroundColor`: set to `"white"` (otherwise transparent/black on some devices)
- `descriptionText`: watermark text inside the pad — pass `""` to hide

**Saving the signature file:**
```typescript
import * as FileSystem from 'expo-file-system';

async function handleSignatureOK(signature: string) {
  const dir = FileSystem.documentDirectory + 'signatures/';
  await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
  const path = dir + jobId + '.png';
  await FileSystem.writeAsStringAsync(
    path,
    signature.replace('data:image/png;base64,', ''),
    { encoding: FileSystem.EncodingType.Base64 },
  );
  await updateSignature(job.id, path);
  setSignatureVisible(false);
}
```

The local file URI (`path`) is what goes into `job.signatureUrl`. In Epic 6, the sync process will upload the file to Supabase Storage and replace this with a remote URL.

### Signature Modal Structure

```tsx
<Modal
  visible={signatureVisible}
  animationType="slide"
  onRequestClose={() => setSignatureVisible(false)}
>
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    {/* Header */}
    <View style={styles.modalHeader}>
      <Text style={styles.modalTitle}>Customer Signature</Text>
      <TouchableOpacity onPress={() => setSignatureVisible(false)}>
        <Text style={styles.modalCancel}>✕ Cancel</Text>
      </TouchableOpacity>
    </View>
    {/* Signature pad fills remaining space */}
    <View style={{ flex: 1 }}>
      <SignatureCanvas
        ref={signatureRef}
        onOK={handleSignatureOK}
        onEmpty={() => { /* optionally show toast */ }}
        backgroundColor="white"
        descriptionText=""
        webStyle={`body { margin: 0; } canvas { width: 100% !important; height: 100% !important; }`}
      />
    </View>
    {/* Save button */}
    <TouchableOpacity
      style={styles.saveSignatureButton}
      onPress={() => signatureRef.current?.readSignature()}
    >
      <Text style={styles.saveSignatureButtonText}>Save Signature</Text>
    </TouchableOpacity>
  </SafeAreaView>
</Modal>
```

Import `SafeAreaView` from `react-native-safe-area-context` (already installed) for correct layout on iPhone notch/home bar.

The `SignatureCanvas` TypeScript type:
```typescript
import SignatureCanvas, { SignatureViewRef } from 'react-native-signature-canvas';
const signatureRef = useRef<SignatureViewRef>(null);
```

### Test Pattern for `use-job-photos.test.ts`

Follow the identical pattern from `use-jobs.test.ts` and `use-schedule.test.ts`. Register both `Job` and `JobPhoto` in `modelClasses`. Tests operate directly on `database.write()` — no hook rendering:

```typescript
import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../db/schema';
import Job from '../db/models/job';
import JobPhoto from '../db/models/job-photo';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({ adapter, modelClasses: [Job, JobPhoto] });
}
```

**Important:** The test schema must match the production schema at v7. Since `createTestDatabase()` passes the imported `schema` (which will be v7 after this story), the tests will use the updated schema. **Do NOT pass `migrations` to LokiJSAdapter in tests** — migrations are for SQLite on-device upgrade paths, not needed in LokiJS test adapters.

### `job-photo-gallery.tsx` — Style Reference

Mirror the styling of `src/components/quotes/quote-photo-gallery.tsx` exactly. Key dimensions:
- Thumbnail: 80×80 with 6px border radius
- Add Photo card: 80×80, dashed blue border (`#2563eb`), light blue background (`#eff6ff`)
- Pending dot: 10×10, yellow (`#eab308`), absolute positioned top-right
- Caption text below thumbnail: 11px, gray (`#6b7280`), max width 80px

Add the `taken_at` timestamp below the caption:
```typescript
function formatTime(ts: number | null): string {
  if (!ts) return '';
  return new Date(ts).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}
```

### Job Detail Screen (`[id].tsx`) — Section Order After Changes

```
[Job Title + Badge + Customer + Time]   ← exists (keep)
[Photos]                                ← NEW: JobPhotoGallery
[Signature]                             ← NEW: signature preview/capture button
[Notes]                                 ← exists (keep)
[Action Button: Start Job / Complete Job] ← exists (move to bottom)
```

The "Capture Signature" button should only appear for statuses: `SCHEDULED`, `IN_PROGRESS`, `COMPLETE`. Not for `QUOTED` (work hasn't started) and not for `INVOICED` (job is fully closed).

### Architecture Compliance Notes

- **All WatermelonDB writes use `database.write()`** — single call per operation, same as every prior story.
- **No NativeWind** — use `StyleSheet.create` for all component styles.
- **No direct API calls** — `remoteUrl` stays `''` until Epic 6 sync wires up the upload. This is correct by design.
- **Observable pattern** — `useJobPhotos` follows the exact `useEffect` + `.observe().subscribe()` + `return () => subscription.unsubscribe()` teardown from `use-jobs.ts` and `use-schedule.ts`.
- **`photo-service.ts` is NOT modified** — only the job-photos hook calls its exported functions. `photo-service.ts` owns `capturePhoto()` and `compressPhoto()`.
- **TypeScript strict mode** — no `any`, no `@ts-ignore`. The `SignatureViewRef` type from `react-native-signature-canvas` must be used for the ref.

### Project Structure Notes

Files to **CREATE**:
```
apps/mobile/src/db/models/job-photo.ts                     NEW
apps/mobile/src/hooks/use-job-photos.ts                    NEW
apps/mobile/src/hooks/use-job-photos.test.ts               NEW
apps/mobile/src/components/jobs/job-photo-gallery.tsx      NEW
```

Files to **MODIFY**:
```
apps/mobile/src/db/schema.ts          MODIFY  (version 6 → 7, add job_photos tableSchema)
apps/mobile/src/db/migrations.ts      MODIFY  (add toVersion: 7 migration at top of array)
apps/mobile/src/db/index.ts           MODIFY  (import JobPhoto, add to modelClasses)
apps/mobile/app/(tabs)/jobs/[id].tsx  MODIFY  (add Photos section + Signature section + Modal)
apps/mobile/package.json              MODIFY  (new deps: react-native-webview, expo-file-system, react-native-signature-canvas)
```

All paths relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 3.3] — All acceptance criteria, FR16, FR17, FR36
- [Source: planning/architecture.md#Data Architecture] — `jobs` table has `signature_url` column; no `job_photos` table yet (needs migration v7); WatermelonDB schema versioning with migration steps; LWW conflict resolution with `updated_at`
- [Source: planning/architecture.md#Deferred Decisions] — "Digital signature capture (FR17): Requires a signature pad library — recommend `react-native-signature-canvas`"
- [Source: planning/architecture.md#Frontend Architecture (Mobile)] — Observable pattern; `database.write()` for all mobile writes; feature-based folder structure; `StyleSheet.create` not NativeWind
- [Source: planning/architecture.md#Naming Patterns] — snake_case DB columns, camelCase TypeScript, kebab-case files
- [Source: stories/3-2-job-lifecycle-and-status-tracking.md] — Established: Job model fields; `completedAt` is `@field` (number), not `@date`; `signatureUrl` is `@text`; `useJob`/`useJobs` available in `use-jobs.ts`; `useCustomers()` in `use-customers.ts`; `ActivityIndicator` for loading (no Skeleton component)
- [Source: stories/3-2-job-lifecycle-and-status-tracking.md#Dev Agent Record] — `jobs/[id]` registered as `Tabs.Screen href: null` in `_layout.tsx`; notes saved on `onBlur` not on keystroke; `Animated.timing` for "Saved" indicator; auth context `.accountId` pattern
- [Source: apps/mobile/src/db/schema.ts] — Current schema v6; `jobs` table has `signature_url` (isOptional string); no `job_photos` table
- [Source: apps/mobile/src/db/migrations.ts] — Migration format; migrations array in descending `toVersion` order
- [Source: apps/mobile/src/db/index.ts] — `modelClasses` array to add `JobPhoto`
- [Source: apps/mobile/src/db/models/quote-photo.ts] — Identical model shape to copy for `JobPhoto`
- [Source: apps/mobile/src/services/photo-service.ts] — `capturePhoto()` and `compressPhoto()` available for reuse; do NOT duplicate these
- [Source: apps/mobile/src/components/quotes/quote-photo-gallery.tsx] — Component style to mirror for `job-photo-gallery.tsx`
- [Source: apps/mobile/src/hooks/use-jobs.ts] — `useJob(id)` returns observable job; `useUpdateJobSignature` writes to `job.signatureUrl`
- [Source: apps/mobile/src/hooks/use-schedule.test.ts] — LokiJSAdapter test pattern; `modelClasses` registration; direct DB writes; NO migrations in test adapter

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List

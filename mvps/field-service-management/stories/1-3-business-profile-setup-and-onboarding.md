# Story 1.3: Business Profile Setup and Onboarding

Status: ready-for-dev

## Story

As a new user,
I want to configure my business profile and select my trade during onboarding,
so that my quotes and invoices display my professional business information.

## Acceptance Criteria

1. **Given** a user has just completed registration, **When** they are directed to the onboarding flow, **Then** they see a trade selection screen with three options: HVAC, Plumbing, Electrical.

2. **Given** the user selects a trade type, **When** they proceed to the next onboarding step, **Then** they can enter their business name, upload a business logo (via camera or gallery), enter their license number, and set contact information.

3. **Given** the user completes the business profile form, **When** they save their profile, **Then** the account record is updated via the API with `business_name`, `business_logo_url`, `license_number`, `contact_email`, `contact_phone`, and `trade_type` fields persisted, **And** the business logo is uploaded to Supabase Storage and the URL is stored on the account record.

4. **Given** a user has completed onboarding, **When** they access settings later, **Then** they can view and edit all business profile fields.

5. **Given** the onboarding flow, **When** measuring total time from registration to profile completion, **Then** a typical user completes the flow in under 15 minutes.

## Tasks / Subtasks

- [ ] Task 1: Create API endpoint for account profile update (AC: #3)
  - [ ] 1.1: Create `apps/api/src/routes/accounts.ts` — Express router with `PATCH /api/v1/accounts/me` endpoint (auth-protected)
  - [ ] 1.2: Implement the PATCH handler: accept `{ businessName, licenseNumber, contactEmail, contactPhone, tradeType }` in request body; validate with Zod schema (tradeType must be one of `HVAC`, `PLUMBING`, `ELECTRICAL`; businessName required, others optional); look up the team_member by `req.user.id` (`auth_user_id`), then update the associated `accounts` row via Prisma; return `{ data: <updated account> }`
  - [ ] 1.3: Create `GET /api/v1/accounts/me` endpoint — returns the current user's account record with all business profile fields
  - [ ] 1.4: Register accounts router on Express app at `/api/v1/accounts` in `apps/api/src/index.ts`
  - [ ] 1.5: Write tests `apps/api/src/routes/accounts.test.ts` — test PATCH with valid data, missing businessName (422), invalid tradeType (422), unauthenticated (401), and GET returning full account

- [ ] Task 2: Create API endpoint for logo upload (AC: #3)
  - [ ] 2.1: Install `multer` in `apps/api` for multipart file handling
  - [ ] 2.2: Create `apps/api/src/services/storage-service.ts` — wraps Supabase Storage operations: `uploadFile(bucket, path, buffer, contentType)` → returns public URL; `deleteFile(bucket, path)`; uses the Supabase admin client from `config/supabase.ts`
  - [ ] 2.3: Create `POST /api/v1/accounts/me/logo` endpoint in `apps/api/src/routes/accounts.ts` — accepts multipart file upload (max 5MB, image/* only), uploads to Supabase Storage bucket `logos` with path `{accountId}/logo.{ext}`, updates `accounts.business_logo_url` with the public URL, returns `{ data: { logoUrl } }`
  - [ ] 2.4: Add validation: reject non-image files, reject files > 5MB, return 422 with descriptive error

- [ ] Task 3: Create onboarding screens in mobile app (AC: #1, #2, #5)
  - [ ] 3.1: Create `apps/mobile/app/(auth)/onboarding.tsx` — multi-step onboarding screen with two steps: trade selection → business profile form; use local component state to manage current step; wrap both steps in a ScrollView for small screens
  - [ ] 3.2: Create trade selection UI (step 1): three large tappable cards for HVAC, Plumbing, Electrical — each with trade name and a simple icon/emoji; selected card gets a highlighted border; "Continue" button enabled only when a trade is selected
  - [ ] 3.3: Create business profile form (step 2): inputs for business name (required), license number (optional), contact email (pre-filled from auth), contact phone (pre-filled from auth signup phone); "Upload Logo" button that opens image picker; "Back" button to return to trade selection; "Complete Setup" button to submit
  - [ ] 3.4: Install `expo-image-picker` in `apps/mobile`; use `launchImageLibraryAsync` and `launchCameraAsync` with an ActionSheet to let user choose camera or gallery; compress selected image (quality 0.8, max width 800px)
  - [ ] 3.5: On "Complete Setup": first upload logo (if selected) via `POST /api/v1/accounts/me/logo`, then call `PATCH /api/v1/accounts/me` with all profile fields; show loading state on button during submission; on success navigate to `(tabs)`; on error show inline error message (never raw API errors)

- [ ] Task 4: Add onboarding gate to app navigation (AC: #1, #4)
  - [ ] 4.1: Update `apps/mobile/src/contexts/auth-context.tsx` — add `account` state (fetched from `GET /api/v1/accounts/me` after login) and `isOnboarded` computed boolean (true if `account.tradeType` is not null); add `refreshAccount()` method to re-fetch account data
  - [ ] 4.2: Update `apps/mobile/app/_layout.tsx` — extend auth gate logic: if authenticated AND `isOnboarded` → show `(tabs)`; if authenticated AND NOT `isOnboarded` → redirect to `(auth)/onboarding`; if not authenticated → show `(auth)/login`
  - [ ] 4.3: After onboarding completion in `onboarding.tsx`, call `refreshAccount()` from AuthContext so the gate re-evaluates and navigates to `(tabs)`

- [ ] Task 5: Create settings screen for profile editing (AC: #4)
  - [ ] 5.1: Create `apps/mobile/app/(tabs)/more/profile.tsx` — screen showing all business profile fields in an editable form, pre-populated from account data in AuthContext
  - [ ] 5.2: Reuse the same form layout from onboarding step 2 but as a standalone edit form with a "Save Changes" button
  - [ ] 5.3: On save: upload new logo if changed via `POST /api/v1/accounts/me/logo`, then `PATCH /api/v1/accounts/me` with updated fields; show success toast on completion; call `refreshAccount()` to update context
  - [ ] 5.4: Add navigation link to profile edit from `apps/mobile/app/(tabs)/more/index.tsx` — "Business Profile" row that navigates to `more/profile`

- [ ] Task 6: Update shared types (AC: all)
  - [ ] 6.1: Update `packages/shared/src/types/account.ts` — add `BusinessProfile` interface with `businessName`, `businessLogoUrl`, `licenseNumber`, `contactEmail`, `contactPhone`, `tradeType`; add `AccountUpdateRequest` type for PATCH body; add `AccountResponse` type
  - [ ] 6.2: Ensure `TradeType` enum from `packages/shared/src/constants/trade-types.ts` (created in Story 1.1) is used in both API validation and mobile UI

## Dev Notes

### Architecture Compliance

- **Onboarding screen location**: `apps/mobile/app/(auth)/onboarding.tsx` — this is inside the `(auth)` route group per the architecture's file structure. Expo Router file-based routing means the file path IS the route.
- **No WatermelonDB for account data yet**: Story 1.2 explicitly established that account data goes through the API directly. The sync engine (Epic 6) is not built yet. Do NOT create WatermelonDB models for accounts in this story. Store account data in AuthContext memory (fetched from API on login).
- **Logo storage**: Upload to Supabase Storage bucket `logos`. Path pattern: `{accountId}/logo.{ext}`. Use the Supabase admin client on the server side (never upload directly from mobile to Supabase Storage — route through the API for access control).
- **Image handling on mobile**: Use `expo-image-picker` for camera/gallery selection. Compress images before upload (quality 0.8, max width 800px). The `expo-image-picker` `ImagePickerOptions` supports `quality` and `allowsEditing`.
- **Trade type enum**: Use `TradeType` from `@field-service/shared` constants — `HVAC`, `PLUMBING`, `ELECTRICAL`. This enum was created in Story 1.1.
- **Money format**: Not applicable to this story (no monetary fields).

### API Patterns (established in Stories 1.1 & 1.2)

- All responses: `{ "data": ... }` or `{ "error": { "code", "message", "status" } }`.
- Use `AppError` class from `apps/api/src/utils/error.ts`.
- Use `validate.ts` Zod middleware from Story 1.2 for request validation.
- Auth middleware from `apps/api/src/middleware/auth.ts` — apply to all account endpoints.
- Prisma auto-converts `snake_case` DB columns to `camelCase` in TypeScript.

### File Naming Conventions

- Source files: `kebab-case.ts` (e.g., `storage-service.ts`)
- React screens: lowercase for Expo Router routes (`onboarding.tsx`, `profile.tsx`)
- Test files: co-located with `.test.ts` suffix

### Onboarding Navigation Flow

```
Signup completes (Story 1.2)
  → AuthContext fetches GET /api/v1/accounts/me
  → account.tradeType is null → isOnboarded = false
  → _layout.tsx auth gate redirects to (auth)/onboarding

Onboarding screen:
  Step 1: Trade Selection (HVAC / Plumbing / Electrical)
  Step 2: Business Profile (name, logo, license, contact info)
  → Submit → POST logo + PATCH account
  → refreshAccount() → isOnboarded = true
  → _layout.tsx auth gate redirects to (tabs)

Later from Settings:
  (tabs)/more/index → "Business Profile" → (tabs)/more/profile
  → Edit form → Save → PATCH account + POST logo if changed
```

### Key Anti-Patterns to Avoid

- Do NOT create WatermelonDB models for accounts — use API + AuthContext state. Offline account access comes with the sync engine in Epic 6.
- Do NOT install NativeWind yet — use React Native's built-in `StyleSheet` for this story's screens. NativeWind comes with UI component work.
- Do NOT implement pricebook template loading — that's Story 1.4. This story only selects the trade type.
- Do NOT upload logos directly from mobile to Supabase Storage — route through the API server for access control and validation.
- Do NOT create a separate onboarding service/API — the `accounts/me` endpoint handles both onboarding and later edits.
- Do NOT block the UI during logo upload — show a progress indicator and allow the user to complete the form while upload is in progress.
- Do NOT store raw image data in the database — only the Supabase Storage URL.

### Supabase Storage Setup

The API needs a Supabase Storage bucket called `logos`. If using Supabase dashboard, create the bucket manually. In code, the `storage-service.ts` should use:

```typescript
// apps/api/src/services/storage-service.ts
import { supabaseAdmin } from '../config/supabase';

export async function uploadFile(
  bucket: string,
  path: string,
  buffer: Buffer,
  contentType: string
): Promise<string> {
  const { data, error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(path, buffer, { contentType, upsert: true });
  if (error) throw new AppError('STORAGE_ERROR', error.message, 500);
  const { data: urlData } = supabaseAdmin.storage
    .from(bucket)
    .getPublicUrl(path);
  return urlData.publicUrl;
}
```

### Dependencies to Install

- `apps/api`: `multer`, `@types/multer` (for multipart file upload handling)
- `apps/mobile`: `expo-image-picker` (for camera/gallery access)

### Existing Files Modified

- `apps/api/src/index.ts` — register accounts router
- `apps/mobile/src/contexts/auth-context.tsx` — add account state, isOnboarded, refreshAccount()
- `apps/mobile/app/_layout.tsx` — extend auth gate with onboarding check
- `apps/mobile/app/(tabs)/more/index.tsx` — add "Business Profile" navigation link
- `packages/shared/src/types/account.ts` — add BusinessProfile, AccountUpdateRequest types

### New Files Created

- `apps/api/src/routes/accounts.ts` — Account PATCH/GET endpoints + logo upload
- `apps/api/src/routes/accounts.test.ts` — Account endpoint tests
- `apps/api/src/services/storage-service.ts` — Supabase Storage wrapper
- `apps/mobile/app/(auth)/onboarding.tsx` — Multi-step onboarding screen
- `apps/mobile/app/(tabs)/more/profile.tsx` — Business profile edit screen

### Project Structure Notes

All code lives under `mvps/field-service-management/src/`. Files created/modified in this story:

```
mvps/field-service-management/src/
├── packages/shared/src/
│   └── types/account.ts              # Updated: BusinessProfile, AccountUpdateRequest types
├── apps/api/src/
│   ├── index.ts                      # Updated: register accounts router
│   ├── routes/
│   │   ├── accounts.ts               # NEW: GET/PATCH /accounts/me, POST /accounts/me/logo
│   │   └── accounts.test.ts          # NEW: Account endpoint tests
│   └── services/
│       └── storage-service.ts        # NEW: Supabase Storage upload/delete wrapper
├── apps/mobile/
│   ├── app/
│   │   ├── _layout.tsx               # Updated: onboarding gate logic
│   │   ├── (auth)/
│   │   │   └── onboarding.tsx        # NEW: Trade selection + business profile form
│   │   └── (tabs)/more/
│   │       ├── index.tsx             # Updated: add "Business Profile" link
│   │       └── profile.tsx           # NEW: Business profile edit screen
│   └── src/
│       └── contexts/
│           └── auth-context.tsx      # Updated: account state, isOnboarded, refreshAccount()
```

### References

- [Source: planning/architecture.md#Authentication & Security] — Supabase Auth, account-level access
- [Source: planning/architecture.md#Infrastructure & Deployment] — Supabase Storage for photos, logos, PDFs
- [Source: planning/architecture.md#Data Model] — accounts table schema with business profile fields
- [Source: planning/architecture.md#Frontend Architecture (Mobile)] — Expo Router, file-based routing, navigation
- [Source: planning/architecture.md#Naming Patterns] — File, code, database naming conventions
- [Source: planning/architecture.md#Complete Project Directory Structure] — onboarding.tsx location in (auth) group
- [Source: planning/epics.md#Story 1.3] — Acceptance criteria and story definition
- [Source: stories/1-1-initialize-monorepo-and-project-scaffolding.md] — Project structure, shared types, trade-types enum
- [Source: stories/1-2-user-registration-and-authentication.md] — Auth context, API client, Supabase config, account schema in Prisma, anti-patterns (no WatermelonDB for accounts)

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List

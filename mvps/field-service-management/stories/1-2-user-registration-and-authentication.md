# Story 1.2: User Registration and Authentication

Status: ready-for-dev

## Story

As a solo tradesperson,
I want to sign up with my email and phone number and log in securely,
so that I have a personal account to manage my business.

## Acceptance Criteria

1. **Given** the app is launched for the first time, **When** a user enters their email, phone number, and password and taps "Sign Up", **Then** a new account is created via Supabase Auth and the user is logged in with a JWT stored securely in the device keychain.

2. **Given** a registered user opens the app, **When** they enter their email and password and tap "Log In", **Then** they are authenticated and directed to the main app with their account data loaded.

3. **Given** a user is logged in, **When** 30 days pass without any app activity, **Then** the refresh token expires and the user must log in again (NFR9).

4. **Given** a user is logged in on the mobile app, **When** the auth token is transmitted to the API server, **Then** all communication uses TLS 1.3 (NFR7) and the JWT is validated via Supabase Auth middleware.

5. **Given** an invalid email or weak password is entered, **When** the user taps "Sign Up", **Then** specific validation errors are displayed inline (not raw error messages) and signup is prevented.

6. **Given** the API server receives an unauthenticated request, **When** no valid JWT is present in the Authorization header, **Then** the server returns a 401 error with code `UNAUTHORIZED` in the standard error response format.

## Tasks / Subtasks

- [ ] Task 1: Set up Supabase client configuration (AC: #1, #2, #4)
  - [ ] 1.1: Install `@supabase/supabase-js` in `apps/api` and `apps/mobile`
  - [ ] 1.2: Create `apps/api/src/config/supabase.ts` — initialize Supabase admin client using `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` env vars
  - [ ] 1.3: Create `apps/mobile/src/services/supabase-client.ts` — initialize Supabase client using `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` env vars
  - [ ] 1.4: Update `apps/api/src/config/env.ts` to validate `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are present at startup

- [ ] Task 2: Implement API auth middleware (AC: #4, #6)
  - [ ] 2.1: Create `apps/api/src/middleware/auth.ts` — Express middleware that extracts Bearer token from `Authorization` header, verifies JWT via `supabase.auth.getUser(token)`, attaches `req.user` with `{ id, email, accountId }`, returns 401 `UNAUTHORIZED` AppError if invalid/missing
  - [ ] 2.2: Create `apps/api/src/routes/auth.ts` — Express router with `POST /api/v1/auth/signup`, `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh` endpoints
  - [ ] 2.3: Implement signup endpoint: accept `{ email, phone, password }`, validate inputs with Zod, call `supabase.auth.admin.createUser()`, create account row in database, return `{ data: { user, session } }`
  - [ ] 2.4: Implement login endpoint: accept `{ email, password }`, call `supabase.auth.signInWithPassword()`, return `{ data: { user, session } }`
  - [ ] 2.5: Implement refresh endpoint: accept `{ refreshToken }`, call `supabase.auth.refreshSession()`, return new tokens
  - [ ] 2.6: Register auth router on Express app at `/api/v1/auth`
  - [ ] 2.7: Apply auth middleware to `GET /api/v1/health` as a protected route example (or create a `GET /api/v1/me` route that returns current user)
  - [ ] 2.8: Install `zod` in `apps/api` for request validation
  - [ ] 2.9: Create `apps/api/src/middleware/validate.ts` — generic Zod validation middleware that validates `req.body` against a schema and returns 422 `VALIDATION_ERROR` on failure

- [ ] Task 3: Define Prisma schema for accounts and team_members (AC: #1)
  - [ ] 3.1: Add `accounts` table to `prisma/schema.prisma` with fields: `id` (UUID, default `uuid()`), `business_name` (String, nullable), `business_logo_url` (String, nullable), `license_number` (String, nullable), `contact_email` (String, nullable), `contact_phone` (String, nullable), `trade_type` (enum TradeType: HVAC, PLUMBING, ELECTRICAL, nullable), `quickbooks_connected` (Boolean, default false), `quickbooks_realm_id` (String, nullable), `stripe_account_id` (String, nullable), `created_at` (DateTime, default now()), `updated_at` (DateTime, @updatedAt), `synced_at` (DateTime, nullable)
  - [ ] 3.2: Add `team_members` table with fields: `id` (UUID, default `uuid()`), `account_id` (UUID, FK → accounts), `email` (String, unique), `phone` (String, nullable), `name` (String), `role` (enum TeamMemberRole: OWNER, MEMBER), `auth_user_id` (String, unique — maps to Supabase auth.users.id), `created_at`, `updated_at`, `synced_at`
  - [ ] 3.3: Run `npx prisma migrate dev --name add-accounts-and-team-members` to create migration
  - [ ] 3.4: Create `apps/api/src/config/prisma.ts` — singleton Prisma client instance

- [ ] Task 4: Implement mobile auth screens (AC: #1, #2, #5)
  - [ ] 4.1: Create `apps/mobile/src/contexts/auth-context.tsx` — AuthContext providing `{ user, session, isLoading, isAuthenticated, signUp, signIn, signOut, refreshSession }` using Supabase auth state listener (`onAuthStateChange`)
  - [ ] 4.2: Create `apps/mobile/app/(auth)/login.tsx` — login screen with email and password inputs, "Log In" button, link to signup; use Supabase `signInWithPassword()`
  - [ ] 4.3: Create `apps/mobile/app/(auth)/signup.tsx` — signup screen with email, phone, password, confirm password inputs; call API `POST /api/v1/auth/signup` which creates account + user; display inline validation errors per field
  - [ ] 4.4: Update `apps/mobile/app/_layout.tsx` — wrap app in AuthContext provider, implement auth gate: if not authenticated → show `(auth)` screens; if authenticated → show `(tabs)` screens
  - [ ] 4.5: Implement inline field validation: email format (regex), password minimum 8 chars with 1 number and 1 uppercase, phone format, confirm password match
  - [ ] 4.6: Store session tokens securely using `expo-secure-store` (maps to iOS Keychain / Android Keystore)
  - [ ] 4.7: Install `expo-secure-store` and configure Supabase client to use it for token persistence via custom storage adapter

- [ ] Task 5: Implement mobile API client with auth headers (AC: #4)
  - [ ] 5.1: Create `apps/mobile/src/services/api-client.ts` — HTTP client (fetch-based) that automatically attaches `Authorization: Bearer <token>` header from current Supabase session, sets base URL from `EXPO_PUBLIC_API_URL`, handles 401 responses by triggering sign-out
  - [ ] 5.2: Add request/response interceptor pattern: attach auth header, parse JSON, handle standard error format `{ error: { code, message, status } }`

- [ ] Task 6: Implement session refresh and token expiry (AC: #3)
  - [ ] 6.1: Configure Supabase client with `autoRefreshToken: true` — automatically refreshes access token before 1h expiry
  - [ ] 6.2: Handle auth state changes in AuthContext: on `TOKEN_REFRESHED` update stored session, on `SIGNED_OUT` clear session and navigate to login
  - [ ] 6.3: On app foreground (AppState change), check if refresh token is still valid; if expired (30 days), force sign-out and show login screen

- [ ] Task 7: Update shared types (AC: all)
  - [ ] 7.1: Update `packages/shared/src/types/account.ts` — add `Account` interface and `TeamMember` interface matching Prisma schema
  - [ ] 7.2: Update `packages/shared/src/types/api.ts` — add `AuthSignupRequest`, `AuthLoginRequest`, `AuthRefreshRequest`, `AuthResponse` (contains user + session tokens)

- [ ] Task 8: Write tests (AC: all)
  - [ ] 8.1: Create `apps/api/src/middleware/auth.test.ts` — test auth middleware: valid token → sets `req.user`, missing token → 401, invalid token → 401
  - [ ] 8.2: Create `apps/api/src/routes/auth.test.ts` — test signup (valid/invalid input, duplicate email), login (correct/wrong password), refresh (valid/expired token) using Supertest with mocked Supabase
  - [ ] 8.3: Create `apps/api/src/middleware/validate.test.ts` — test Zod validation middleware with valid/invalid payloads

## Dev Notes

### Architecture Compliance

- **Authentication provider**: Supabase Auth — do NOT use Passport.js, Firebase Auth, or custom JWT signing.
- **Token flow**: Supabase handles JWT issuance. Access tokens expire after 1 hour, refresh tokens after 30 days of inactivity (NFR9). The mobile app uses `autoRefreshToken: true` for seamless renewal.
- **Secure storage**: Use `expo-secure-store` on mobile — this maps to iOS Keychain and Android Keystore (NFR6). Never store tokens in AsyncStorage or localStorage.
- **API auth middleware**: Extract Bearer token → call `supabase.auth.getUser(token)` to verify. Do NOT manually decode/verify JWTs with jsonwebtoken — let Supabase handle verification.
- **Rate limiting**: 10 req/min for unauthenticated endpoints (signup, login). Story 1.1 did NOT set up rate limiting — install and configure if adding it, or defer to a later story. For now, focus on auth correctness.
- **Account creation flow**: Signup creates both a Supabase auth user AND an `accounts` row + `team_members` row (role: OWNER) in PostgreSQL via Prisma. The `team_members.auth_user_id` links to `supabase.auth.users.id`.

### File Naming Conventions

- Source files: `kebab-case.ts` (e.g., `auth-context.tsx`, `supabase-client.ts`)
- React components/screens: `login.tsx`, `signup.tsx` (Expo Router uses lowercase file-based routing)
- Test files: co-located, `.test.ts` suffix

### API Patterns (from Story 1.1)

- All responses wrapped in `{ "data": ... }` or `{ "error": ... }` — never raw objects.
- Error format: `{ "error": { "code": "UNAUTHORIZED", "message": "...", "status": 401 } }`.
- Use `AppError` class from `apps/api/src/utils/error.ts` (created in Story 1.1).
- Use global error handler middleware from `apps/api/src/middleware/error-handler.ts` (created in Story 1.1).
- Validation errors return 422 with code `VALIDATION_ERROR`.

### Database Patterns

- UUIDs for all entity IDs (use Prisma `@default(uuid())`).
- Timestamps: `created_at` (DateTime, `@default(now())`), `updated_at` (DateTime, `@updatedAt`), `synced_at` (DateTime, nullable).
- Table names: `snake_case`, plural (`accounts`, `team_members`).
- Column names: `snake_case` (`auth_user_id`, `business_name`).
- Prisma auto-converts `snake_case` DB columns to `camelCase` in TypeScript.

### Mobile Auth Flow

```
App Launch → AuthContext checks stored session
  → Session exists & valid → Show (tabs) screens
  → Session expired → Try refresh
    → Refresh succeeds → Show (tabs) screens
    → Refresh fails → Show (auth)/login.tsx
  → No session → Show (auth)/login.tsx

Signup → POST /api/v1/auth/signup (creates account + user)
  → API creates Supabase user + Prisma account + team_member
  → Returns session tokens
  → Mobile stores in expo-secure-store
  → AuthContext updates → navigates to (tabs)

Login → supabase.auth.signInWithPassword() (direct Supabase call from mobile)
  → Supabase returns session
  → Mobile stores in expo-secure-store
  → AuthContext updates → navigates to (tabs)
```

### Key Anti-Patterns to Avoid

- Do NOT create the business profile/onboarding screens — that's Story 1.3.
- Do NOT add WatermelonDB models for accounts — offline sync of account data is a later concern. Auth uses the API directly.
- Do NOT implement phone/OTP login — start with email/password only. Phone is collected as profile data, not as auth method in MVP.
- Do NOT install Stripe, Twilio, or QuickBooks SDKs.
- Do NOT add Row Level Security policies in Supabase yet — RLS policies depend on the full data model. Just ensure the account isolation pattern is established in code.
- Do NOT use `supabase.auth.signUp()` from the mobile client directly for signup — route through the API so the server can create the account + team_member records atomically.
- Login CAN go directly to Supabase from mobile (no server-side account creation needed for login).

### Supabase Client Configuration

```typescript
// Mobile: apps/mobile/src/services/supabase-client.ts
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

const secureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: secureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // not needed for mobile
  },
});
```

```typescript
// API: apps/api/src/config/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { env } from './env';

export const supabaseAdmin = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});
```

### Validation Schema Example

```typescript
// apps/api/src/routes/auth.ts — signup validation
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});
```

### Project Structure Notes

All code lives under `mvps/field-service-management/src/`. Files created/modified in this story:

```
mvps/field-service-management/src/
├── packages/shared/src/
│   ├── types/account.ts          # Updated: Account, TeamMember interfaces
│   └── types/api.ts              # Updated: Auth request/response types
├── apps/api/
│   ├── prisma/
│   │   ├── schema.prisma         # Updated: accounts, team_members tables
│   │   └── migrations/           # New migration files
│   └── src/
│       ├── config/
│       │   ├── supabase.ts       # NEW: Supabase admin client
│       │   ├── prisma.ts         # NEW: Prisma singleton
│       │   └── env.ts            # Updated: validate Supabase env vars
│       ├── middleware/
│       │   ├── auth.ts           # NEW: JWT verification middleware
│       │   ├── auth.test.ts      # NEW: Auth middleware tests
│       │   ├── validate.ts       # NEW: Zod validation middleware
│       │   └── validate.test.ts  # NEW: Validation middleware tests
│       ├── routes/
│       │   ├── auth.ts           # NEW: Auth routes (signup/login/refresh)
│       │   └── auth.test.ts      # NEW: Auth route tests
│       └── index.ts              # Updated: register auth router
├── apps/mobile/
│   ├── app/
│   │   ├── _layout.tsx           # Updated: wrap with AuthContext, auth gate
│   │   └── (auth)/
│   │       ├── login.tsx         # NEW: Login screen
│   │       └── signup.tsx        # NEW: Signup screen
│   └── src/
│       ├── services/
│       │   ├── supabase-client.ts # NEW: Supabase client with SecureStore
│       │   └── api-client.ts      # NEW: Auth-aware HTTP client
│       └── contexts/
│           └── auth-context.tsx   # NEW: Auth state management
```

### Dependencies to Install

- `apps/api`: `@supabase/supabase-js`, `zod`
- `apps/mobile`: `@supabase/supabase-js`, `expo-secure-store`

### References

- [Source: planning/architecture.md#Authentication & Security] — Supabase Auth, JWT tokens, token expiry, security implementation
- [Source: planning/architecture.md#API & Communication Patterns] — REST endpoints, error format, rate limiting
- [Source: planning/architecture.md#Data Model] — accounts and team_members table schemas
- [Source: planning/architecture.md#Naming Patterns] — Database, API, code naming conventions
- [Source: planning/architecture.md#Frontend Architecture (Mobile)] — Navigation, state management, contexts
- [Source: planning/epics.md#Story 1.2] — Acceptance criteria and story definition
- [Source: stories/1-1-initialize-monorepo-and-project-scaffolding.md] — Previous story patterns, project structure, anti-patterns

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List

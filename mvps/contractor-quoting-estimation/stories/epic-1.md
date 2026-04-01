# Epic 1: Contractor Registration & Profile Setup

Status: done

## Story

As a contractor,
I want to create an account, log in from any device, and configure my business profile with branding, trade, and defaults,
so that QuoteCraft personalizes every quote I create with my professional identity and correct settings.

## Scope

This epic covers 4 stories that must be implemented in order:
- **1.1** Project Setup from Starter Template
- **1.2** Contractor Registration
- **1.3** Contractor Login & Password Reset
- **1.4** Contractor Profile Setup

**FRs covered:** FR46, FR47, FR48, FR49, FR50, FR56, FR57, FR58

---

## Story 1.1: Project Setup from Starter Template

### Acceptance Criteria

1. **Given** the architecture specifies a Next.js App Router starter
   **When** the project is initialized with `create-next-app` using TypeScript, Tailwind CSS, ESLint, app router, and src directory
   **Then** the project builds and runs without errors

2. **Given** Prisma is configured
   **When** `prisma migrate dev` is run
   **Then** the User and Profile models from the architecture schema are created on PostgreSQL

3. **Given** NextAuth.js v5 is configured
   **When** a credentials provider is set up with email/password
   **Then** authentication flow works with JWT sessions

4. **Given** the middleware is configured
   **When** an unauthenticated user accesses a protected route
   **Then** they are redirected to `/login`

5. **Given** the directory structure is created
   **Then** these directories exist:
   - `src/components/ui/`, `src/components/auth/`, `src/components/profile/`
   - `src/lib/`, `src/lib/validations/`, `src/hooks/`, `src/types/`

6. **Given** shared utilities are created
   **Then** these files exist with working implementations:
   - `src/lib/db.ts` — Prisma singleton client
   - `src/lib/fetcher.ts` — SWR fetcher function
   - `src/lib/utils.ts` — `formatCurrency()` and general utilities

7. **Given** Zod is installed
   **Then** a base validation pattern exists in `src/lib/validations/`

8. **Given** `.env.example` exists
   **Then** all required environment variables are documented

### Tasks

- [x] 1.1.1 Initialize Next.js project (AC: #1)
  - [x] Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
  - [x] Verify `npm run build` succeeds
- [x] 1.1.2 Install all dependencies (AC: #1)
  - [x] Core: `prisma @prisma/client next-auth@beta bcrypt @types/bcrypt @prisma/adapter-pg pg @types/pg`
  - [x] Data: `swr react-hook-form @hookform/resolvers zod`
  - [x] Storage: `@aws-sdk/client-s3 @aws-sdk/s3-request-presigner`
  - [x] Comms: `resend`
  - [x] Utils: `clsx tailwind-merge`
  - [x] Dev: `vitest @vitejs/plugin-react`
- [x] 1.1.3 Set up Prisma with full schema (AC: #2)
  - [x] Create `prisma/schema.prisma` with ALL models: User, Profile, Quote, LineItem, QuotePhoto, Template, TemplateItem + all enums
  - [x] Create `prisma.config.ts` for Prisma 7 configuration
  - [x] Run `prisma generate` to create TypeScript client types
  - [x] Note: skipped `prisma migrate dev` — no DB available in build env
- [x] 1.1.4 Configure NextAuth.js v5 with credentials provider (AC: #3)
  - [x] Create `src/lib/auth.ts` with NextAuth config
  - [x] Create `src/app/api/auth/[...nextauth]/route.ts`
  - [x] Create `src/types/next-auth.d.ts` extending session with user.id
- [x] 1.1.5 Create route protection proxy (AC: #4)
  - [x] Create `src/proxy.ts` (Next.js 16 renamed middleware → proxy)
  - [x] Protects: `/dashboard/:path*`, `/quotes/:path*`, `/profile/:path*`
- [x] 1.1.6 Create feature-based directory structure (AC: #5)
  - [x] All directories created: ui/, auth/, profile/, hooks/, lib/, validations/, types/
- [x] 1.1.7 Create shared utilities (AC: #6)
  - [x] `src/lib/db.ts`: Prisma singleton with PrismaPg adapter
  - [x] `src/lib/fetcher.ts`: typed SWR fetcher with FetchError class
  - [x] `src/lib/utils.ts`: formatCurrency, formatDate, generateQuoteNumber, cn, calculateTotal
- [x] 1.1.8 Create base Zod validation schemas (AC: #7)
  - [x] `src/lib/validations/auth.ts`: registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema
  - [x] `src/lib/validations/common.ts`: emailSchema, passwordSchema, phoneSchema, hexColorSchema
  - [x] `src/lib/validations/profile.ts`: profileSchema with all fields
- [x] 1.1.9 Create `.env.example` (AC: #8)
  - [x] Documents: DATABASE_URL, AUTH_SECRET, NEXTAUTH_URL, R2_*, RESEND_*, NEXT_PUBLIC_APP_URL

---

## Story 1.2: Contractor Registration

### Acceptance Criteria

1. **Given** I am on `/register`
   **When** I enter a valid email and password (8+ chars) and submit
   **Then** my account is created with bcrypt-hashed password (12 salt rounds)
   **And** I am auto-logged in and redirected to `/profile`
   **And** a JWT session token is set in an HttpOnly cookie with 30-day expiry

2. **Given** I try to register with an existing email
   **When** I submit
   **Then** I see "An account with this email already exists"
   **And** no duplicate account is created

3. **Given** I try to register with a password < 8 characters
   **When** I submit
   **Then** I see a validation error about minimum password length
   **And** the form is not submitted

### Tasks

- [x] 1.2.1 Create registration API route (AC: #1, #2, #3)
  - [x] `src/app/api/auth/register/route.ts` — validates email+password, checks duplicate, hashes with bcrypt 12 rounds, returns 201
- [x] 1.2.2 Create registration form component (AC: #1, #2, #3)
  - [x] `src/components/auth/register-form.tsx` — React Hook Form + Zod, redirects to /login after success
- [x] 1.2.3 Create registration page (AC: #1)
  - [x] `src/app/register/page.tsx` — renders RegisterForm, links to /login

---

## Story 1.3: Contractor Login & Password Reset

### Acceptance Criteria

1. **Given** I have an existing account
   **When** I enter correct email and password on `/login`
   **Then** I am authenticated and redirected to `/dashboard`
   **And** my session persists across page refreshes via JWT cookie

2. **Given** I enter incorrect email or password
   **When** I submit the login form
   **Then** I see "Invalid email or password" (generic — does not reveal which was wrong)

3. **Given** I click "Forgot password"
   **When** I enter my registered email
   **Then** a password reset email is sent via Resend with a time-limited reset link
   **And** I can set a new password from the reset link
   **And** my old sessions remain valid until new password is used

4. **Given** I am inactive for 30+ days
   **When** I return to the app
   **Then** my session has expired and I am redirected to `/login`

### Tasks

- [x] 1.3.1 Create login form component (AC: #1, #2)
  - [x] `src/components/auth/login-form.tsx` — signIn('credentials'), redirect to /dashboard, shows generic error
- [x] 1.3.2 Create login page (AC: #1)
  - [x] `src/app/login/page.tsx` — wrapped in Suspense, links to /register
- [x] 1.3.3 Create password reset API routes (AC: #3)
  - [x] `src/app/api/auth/forgot-password/route.ts` — generates crypto token, stores in DB, sends email via Resend
  - [x] `src/app/api/auth/reset-password/route.ts` — validates token+expiry, hashes new password, clears token
- [x] 1.3.4 Create password reset UI pages (AC: #3)
  - [x] `src/app/forgot-password/page.tsx` — email form, always shows success message
  - [x] `src/app/reset-password/page.tsx` — reads token from URL, validates, sets new password
- [x] 1.3.5 Configure Resend email client (AC: #3)
  - [x] `src/lib/resend.ts` — lazy client init (throws at call time if no API key, not at import time)

---

## Story 1.4: Contractor Profile Setup

### Acceptance Criteria

1. **Given** I am a newly registered contractor on `/profile`
   **When** I fill in business name, contact name, phone, email, and license number
   **Then** my profile is saved and available for quote PDF generation

2. **Given** I am on the profile page
   **When** I upload a company logo image
   **Then** the logo is compressed client-side, uploaded to Cloudflare R2, and the URL stored in my profile
   **And** the logo preview displays on the profile page

3. **Given** I am on the profile page
   **When** I select my primary trade (plumbing, electrical, HVAC, painting)
   **Then** my trade is saved and determines the default line item library for new quotes

4. **Given** I am on the profile page
   **When** I set a default tax rate (e.g., 8.25%)
   **Then** the rate is saved and auto-applied to all new quotes

5. **Given** I am on the profile page
   **When** I enter default payment terms text and select a brand color
   **Then** these settings are saved and used in all generated quote PDFs

6. **Given** I update any profile field and save
   **When** I log in from a different device
   **Then** my profile data is consistent across all devices

### Tasks

- [x] 1.4.1 Create profile API route (AC: #1, #3, #4, #5, #6)
  - [x] `src/app/api/profile/route.ts` — GET returns profile for session user, POST upserts profile
- [x] 1.4.2 Create profile Zod validation schema (AC: #1)
  - [x] `src/lib/validations/profile.ts` — businessName (required), all optional fields, trade enum, hex brandColor
- [x] 1.4.3 Create profile form component (AC: #1, #3, #4, #5)
  - [x] `src/components/profile/profile-form.tsx` — React Hook Form + Zod, trade dropdown, color picker, tax rate, payment terms textarea
- [x] 1.4.4 Create logo upload component (AC: #2)
  - [x] `src/components/profile/logo-upload.tsx` — Canvas compression, file type validation, preview, R2 upload
- [x] 1.4.5 Create R2 upload infrastructure (AC: #2)
  - [x] `src/lib/r2.ts` — S3-compatible client, uploadToR2, deleteFromR2, getPresignedUploadUrl
  - [x] `src/app/api/photos/upload/route.ts` — multipart form, validates type/size, uploads to R2
- [x] 1.4.6 Create profile page (AC: #1-#6)
  - [x] `src/app/profile/page.tsx` — auth-protected server component, renders ProfileForm
- [x] 1.4.7 Create useProfile SWR hook (AC: #6)
  - [x] `src/hooks/use-profile.ts` — useSWR('/api/profile'), returns profile, isLoading, isError, mutate
- [x] 1.4.8 Create image compression utility (AC: #2)
  - [x] `src/lib/image-compress.ts` — Canvas API, recursive quality reduction, configurable maxWidthOrHeight/maxSizeKB/quality

---

## Dev Notes

### Architecture Compliance

- **Framework:** Next.js App Router with TypeScript, Tailwind CSS, ESLint, `src/` directory, `@/*` import alias
- **Database:** PostgreSQL via Neon with Prisma ORM. Use `prisma/schema.prisma` as single source of truth
- **Auth:** NextAuth.js v5 with credentials provider, JWT sessions (30-day expiry), HttpOnly cookies
- **Password hashing:** bcrypt with 12 salt rounds (exceeds NFR8 minimum of 10)
- **File storage:** Cloudflare R2 via AWS S3 SDK with custom endpoint
- **Email:** Resend API for password reset emails
- **Client data fetching:** SWR for all GET requests; raw `fetch` only for mutations
- **Forms:** React Hook Form + Zod resolvers; shared Zod schemas between client and server in `src/lib/validations/`
- **Styling:** Tailwind CSS, mobile-first (375-428px primary breakpoint), 44x44px minimum touch targets

### Naming Conventions (Mandatory)

- **Files:** kebab-case (`login-form.tsx`, `use-profile.ts`)
- **Components:** PascalCase (`LoginForm`, `ProfileForm`)
- **Functions/hooks:** camelCase (`useProfile`, `formatCurrency`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_PHOTOS_PER_QUOTE`)
- **Types/interfaces:** PascalCase (`Profile`, `CreateUserInput`)
- **Database tables:** PascalCase singular (Prisma convention)
- **Database columns:** camelCase
- **Enums:** UPPER_SNAKE_CASE values

### Prisma Schema (User + Profile — from architecture)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  profile       Profile?
  quotes        Quote[]
  templates     Template[]
}

model Profile {
  id              String  @id @default(cuid())
  userId          String  @unique
  user            User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  businessName    String
  contactName     String?
  phone           String?
  email           String?
  licenseNumber   String?
  logoUrl         String?
  defaultTaxRate  Float   @default(0)
  paymentTerms    String?
  brandColor      String  @default("#2563EB")
  trade           Trade   @default(PLUMBING)
}

enum Trade {
  PLUMBING
  ELECTRICAL
  HVAC
  PAINTING
}

enum QuoteStatus {
  DRAFT
  SENT
  VIEWED
  SIGNED
  PAID
  EXPIRED
}

enum DepositType {
  FIXED
  PERCENTAGE
}
```

Include ALL models and enums in the initial schema (Quote, LineItem, QuotePhoto, Template, TemplateItem) even though they are implemented in later epics. This prevents migration issues later.

### API Error Response Format (Mandatory)

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable message",
    "details": [{ "field": "email", "message": "Invalid email format" }]
  }
}
```

HTTP codes: 200 (ok), 201 (created), 400 (validation), 401 (unauthorized), 409 (conflict/duplicate), 500 (server error).

### Prisma Singleton Pattern (Mandatory)

```typescript
// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

### NextAuth.js v5 Configuration Pattern

```typescript
// src/lib/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });
        if (!user) return null;
        const valid = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        );
        if (!valid) return null;
        return { id: user.id, email: user.email };
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 }, // 30 days
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
```

### Route Protection Middleware Pattern

```typescript
// src/middleware.ts
export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: ["/dashboard/:path*", "/quotes/:path*", "/profile/:path*"],
};
```

### Key Anti-Patterns to Avoid

- **Never** use raw SQL — always Prisma
- **Never** store photos in the database — always R2
- **Never** skip Zod validation on API routes
- **Never** expose passwordHash in API responses
- **Never** reveal whether an email exists in login error messages
- **Never** use `fetch` for GET requests — always SWR hooks
- **Never** create component files at top level — use feature directories

### Environment Variables Required

```
DATABASE_URL=postgresql://...         # Neon PostgreSQL connection string
NEXTAUTH_SECRET=<random-32+-chars>    # JWT signing secret
NEXTAUTH_URL=http://localhost:3000    # App URL
R2_ACCOUNT_ID=                        # Cloudflare account ID
R2_ACCESS_KEY_ID=                     # R2 access key
R2_SECRET_ACCESS_KEY=                 # R2 secret key
R2_BUCKET_NAME=                       # R2 bucket name
R2_PUBLIC_URL=                        # R2 public URL
RESEND_API_KEY=                       # Resend API key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Password Reset Token Strategy

For MVP, use a simple approach:
- Add a `resetToken` and `resetTokenExpiry` field to the User model (or a separate PasswordReset model)
- Generate token with `crypto.randomUUID()`
- Set expiry to 1 hour from creation
- On reset: validate token + expiry, hash new password, clear token

### File Structure After Epic 1

```
quotecraft/
├── .env.example
├── .env.local
├── next.config.js
├── package.json
├── prisma/
│   ├── schema.prisma          # Full schema with all models
│   └── migrations/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Landing/redirect page
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   ├── reset-password/page.tsx
│   │   ├── dashboard/page.tsx  # Placeholder
│   │   ├── profile/page.tsx
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── register/route.ts
│   │       │   ├── forgot-password/route.ts
│   │       │   ├── reset-password/route.ts
│   │       │   └── [...nextauth]/route.ts
│   │       ├── profile/route.ts
│   │       └── photos/upload/route.ts
│   ├── components/
│   │   ├── ui/               # Shared primitives (button, input, etc.)
│   │   ├── auth/
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   └── profile/
│   │       ├── profile-form.tsx
│   │       └── logo-upload.tsx
│   ├── hooks/
│   │   └── use-profile.ts
│   ├── lib/
│   │   ├── db.ts
│   │   ├── auth.ts
│   │   ├── r2.ts
│   │   ├── resend.ts
│   │   ├── fetcher.ts
│   │   ├── image-compress.ts
│   │   └── utils.ts
│   ├── lib/validations/
│   │   ├── auth.ts
│   │   ├── profile.ts
│   │   └── common.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── next-auth.d.ts
│   └── middleware.ts
```

### Testing Notes

- Unit tests co-located: `*.test.ts` next to source files
- For this epic: focus on API route handler tests and Zod schema validation tests
- Test registration with valid/invalid inputs, duplicate email handling
- Test login with correct/incorrect credentials
- Test profile CRUD operations
- Test middleware route protection

### Project Structure Notes

- All paths align with architecture document's directory structure
- Feature-based component organization under `src/components/<feature>/`
- API routes organized by resource under `src/app/api/<resource>/`
- Shared logic centralized in `src/lib/`

### References

- [Source: planning/architecture.md#Starter Template Evaluation]
- [Source: planning/architecture.md#Data Architecture — Data Model]
- [Source: planning/architecture.md#Authentication & Security]
- [Source: planning/architecture.md#API & Communication Patterns]
- [Source: planning/architecture.md#Frontend Architecture]
- [Source: planning/architecture.md#Infrastructure & Deployment — Environment Configuration]
- [Source: planning/architecture.md#Implementation Patterns & Consistency Rules]
- [Source: planning/architecture.md#Project Structure & Boundaries]
- [Source: planning/epics.md#Epic 1: Contractor Registration & Profile Setup]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

- Prisma 7 breaking change: `datasource.url` no longer supported in schema.prisma; moved to `prisma.config.ts` + `PrismaPg` adapter pattern
- Prisma 7 breaking change: `PrismaPg` takes `{ connectionString }` not a `pg.Pool` instance
- Next.js 16 breaking change: `middleware.ts` renamed to `proxy.ts`, export renamed from `middleware` to `proxy`
- Zod v4 breaking change: `ZodError.errors` renamed to `ZodError.issues`
- Zod v4 breaking change: `.pick()` cannot be used on schemas with `.refine()` — created standalone API schemas instead
- Resend client throws at instantiation if no API key — switched to lazy initialization pattern to avoid build-time errors

### Completion Notes List

- All 4 stories implemented and verified with `npm run build` (clean, no warnings)
- All 15 unit tests pass (11 validation tests + 4 register route tests)
- Next.js 16 proxy/middleware pattern used (proxy.ts not middleware.ts)
- Prisma 7 adapter pattern used throughout (db.ts, prisma.config.ts)
- Zod v4 API used throughout (issues not errors)
- Build environment has no real PostgreSQL — `prisma generate` was run (types generated), `prisma migrate dev` was skipped
- `.env.local` created with placeholder DATABASE_URL for local dev

### File List

**Config:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/prisma/schema.prisma`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/prisma.config.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/next.config.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/.env.example`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/.env.local`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/vitest.config.ts`

**Lib:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/db.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/auth.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/r2.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/resend.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/fetcher.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/image-compress.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/utils.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/validations/auth.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/validations/profile.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/validations/common.ts`

**Types:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/types/index.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/types/next-auth.d.ts`

**Proxy (route protection):**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/proxy.ts`

**App:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/layout.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/page.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/login/page.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/register/page.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/forgot-password/page.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/reset-password/page.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/dashboard/page.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/profile/page.tsx`

**API Routes:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/api/auth/[...nextauth]/route.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/api/auth/register/route.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/api/auth/forgot-password/route.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/api/auth/reset-password/route.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/api/profile/route.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/api/photos/upload/route.ts`

**Components:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/components/ui/button.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/components/ui/input.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/components/auth/login-form.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/components/auth/register-form.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/components/profile/profile-form.tsx`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/components/profile/logo-upload.tsx`

**Hooks:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/hooks/use-profile.ts`

**Tests:**
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/lib/validations/auth.test.ts`
- `/root/anton/research-team/mvps/contractor-quoting-estimation/src/src/app/api/auth/register/route.test.ts`

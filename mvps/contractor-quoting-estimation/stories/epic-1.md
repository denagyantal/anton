# Epic 1: Contractor Registration & Profile Setup

Status: ready-for-dev

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

- [ ] 1.1.1 Initialize Next.js project (AC: #1)
  - [ ] Run: `npx create-next-app@latest quotecraft --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
  - [ ] Verify `npm run build` succeeds
  - [ ] Verify `npm run dev` starts without errors
- [ ] 1.1.2 Install all dependencies (AC: #1)
  - [ ] Core: `prisma @prisma/client next-auth@5 @auth/prisma-adapter`
  - [ ] Data: `swr dexie react-hook-form @hookform/resolvers zod`
  - [ ] Services: `@react-pdf/renderer stripe @stripe/stripe-js`
  - [ ] Storage: `next-pwa @aws-sdk/client-s3`
  - [ ] Comms: `twilio resend`
  - [ ] Auth: `bcrypt` + `@types/bcrypt` (dev)
  - [ ] Dev: `@types/bcrypt playwright` (devDependencies)
- [ ] 1.1.3 Set up Prisma with User + Profile models (AC: #2)
  - [ ] Run `npx prisma init`
  - [ ] Create `prisma/schema.prisma` with User and Profile models per architecture
  - [ ] Include all enums: Trade, QuoteStatus, DepositType
  - [ ] Run `prisma migrate dev --name init`
- [ ] 1.1.4 Configure NextAuth.js v5 with credentials provider (AC: #3)
  - [ ] Create `src/lib/auth.ts` with NextAuth config
  - [ ] Credentials provider: email + password fields
  - [ ] Authorize function: look up user by email, verify password with bcrypt.compare
  - [ ] JWT strategy with 30-day maxAge
  - [ ] Session callback includes user.id in session
  - [ ] Create `src/app/api/auth/[...nextauth]/route.ts`
  - [ ] Create `src/types/next-auth.d.ts` extending session with user.id
- [ ] 1.1.5 Create route protection middleware (AC: #4)
  - [ ] Create `src/middleware.ts`
  - [ ] Protect routes: `/dashboard`, `/quotes/*`, `/profile`
  - [ ] Allow public routes: `/`, `/login`, `/register`, `/quote/*` (customer view), `/api/auth/*`, `/api/webhooks/*`, `/api/quotes/view/*`
  - [ ] Redirect unauthenticated requests to `/login`
- [ ] 1.1.6 Create feature-based directory structure (AC: #5)
  - [ ] Create all directories listed in architecture
  - [ ] Add `.gitkeep` to empty directories
- [ ] 1.1.7 Create shared utilities (AC: #6)
  - [ ] `src/lib/db.ts`: Prisma singleton (global.prisma in dev to avoid hot-reload issues)
  - [ ] `src/lib/fetcher.ts`: `export const fetcher = (url: string) => fetch(url).then(r => r.json())`
  - [ ] `src/lib/utils.ts`: `formatCurrency(amount: number)` using Intl.NumberFormat
- [ ] 1.1.8 Create base Zod validation schemas (AC: #7)
  - [ ] `src/lib/validations/auth.ts`: registerSchema, loginSchema
  - [ ] `src/lib/validations/common.ts`: emailSchema, passwordSchema (min 8 chars)
- [ ] 1.1.9 Create `.env.example` (AC: #8)
  - [ ] Document all env vars from architecture: DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, STRIPE_*, R2_*, TWILIO_*, RESEND_API_KEY, NEXT_PUBLIC_APP_URL

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

- [ ] 1.2.1 Create registration API route (AC: #1, #2, #3)
  - [ ] Create `src/app/api/auth/register/route.ts`
  - [ ] Validate input with `registerSchema` (Zod)
  - [ ] Check for existing user by email — return 409 with specific error message
  - [ ] Hash password with bcrypt (12 salt rounds)
  - [ ] Create user with `prisma.user.create()`
  - [ ] Return 201 with user data (exclude passwordHash)
- [ ] 1.2.2 Create registration form component (AC: #1, #2, #3)
  - [ ] Create `src/components/auth/register-form.tsx`
  - [ ] Use React Hook Form with Zod resolver (`registerSchema`)
  - [ ] Fields: email (type=email), password (type=password, min 8 shown in helper text)
  - [ ] Client-side validation with real-time feedback
  - [ ] On submit: POST to `/api/auth/register`, then call `signIn('credentials', { email, password, redirect: false })`
  - [ ] On success: redirect to `/profile` via `router.push`
  - [ ] Display server errors (duplicate email) in form
  - [ ] Minimum 44x44px touch targets on buttons
- [ ] 1.2.3 Create registration page (AC: #1)
  - [ ] Create `src/app/register/page.tsx`
  - [ ] Render `RegisterForm` component
  - [ ] Include link to `/login` for existing users
  - [ ] Mobile-first layout (375-428px primary breakpoint)

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

- [ ] 1.3.1 Create login form component (AC: #1, #2)
  - [ ] Create `src/components/auth/login-form.tsx`
  - [ ] Use React Hook Form with Zod resolver (`loginSchema`)
  - [ ] Fields: email, password
  - [ ] On submit: call `signIn('credentials', { email, password, redirect: false })`
  - [ ] Handle success: `router.push('/dashboard')`
  - [ ] Handle error: display "Invalid email or password"
  - [ ] Include "Forgot password?" link
  - [ ] 44x44px touch targets
- [ ] 1.3.2 Create login page (AC: #1)
  - [ ] Create `src/app/login/page.tsx`
  - [ ] Render `LoginForm`
  - [ ] Include link to `/register`
  - [ ] Mobile-first layout
- [ ] 1.3.3 Create password reset API routes (AC: #3)
  - [ ] Create `src/app/api/auth/forgot-password/route.ts`
    - [ ] Accept email, look up user
    - [ ] Generate time-limited token (e.g., JWT with 1-hour expiry or crypto.randomUUID stored in DB)
    - [ ] Send reset email via Resend with link: `${NEXT_PUBLIC_APP_URL}/reset-password?token=...`
    - [ ] Always return 200 (don't reveal if email exists)
  - [ ] Create `src/app/api/auth/reset-password/route.ts`
    - [ ] Validate token, check expiry
    - [ ] Hash new password with bcrypt (12 rounds)
    - [ ] Update user's passwordHash
    - [ ] Invalidate token
- [ ] 1.3.4 Create password reset UI pages (AC: #3)
  - [ ] Create `src/app/forgot-password/page.tsx` — email input form
  - [ ] Create `src/app/reset-password/page.tsx` — new password form (reads token from URL)
  - [ ] Success/error states with clear messaging
- [ ] 1.3.5 Configure Resend email client (AC: #3)
  - [ ] Create `src/lib/resend.ts` — initialize Resend client with `RESEND_API_KEY`
  - [ ] Create email template for password reset

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

- [ ] 1.4.1 Create profile API route (AC: #1, #3, #4, #5, #6)
  - [ ] Create `src/app/api/profile/route.ts`
  - [ ] GET: return profile for `session.user.id`, create empty profile if none exists
  - [ ] PUT: validate with `profileSchema` (Zod), upsert profile for `session.user.id`
  - [ ] All queries scoped to authenticated user
- [ ] 1.4.2 Create profile Zod validation schema (AC: #1)
  - [ ] Create `src/lib/validations/profile.ts`
  - [ ] Fields: businessName (required), contactName, phone, email, licenseNumber, defaultTaxRate (number 0-100), paymentTerms, brandColor (hex string), trade (enum)
- [ ] 1.4.3 Create profile form component (AC: #1, #3, #4, #5)
  - [ ] Create `src/components/profile/profile-form.tsx`
  - [ ] Use React Hook Form with Zod resolver
  - [ ] Fields: businessName, contactName, phone, email, licenseNumber
  - [ ] Trade selector: dropdown with plumbing, electrical, HVAC, painting
  - [ ] Default tax rate: number input with % suffix
  - [ ] Payment terms: textarea
  - [ ] Brand color: color picker input (type="color")
  - [ ] Submit: PUT to `/api/profile`
  - [ ] Use SWR via `useProfile()` hook for data fetching
  - [ ] Toast notification on save success/failure
- [ ] 1.4.4 Create logo upload component (AC: #2)
  - [ ] Create `src/components/profile/logo-upload.tsx`
  - [ ] Accept image files (jpg, png, webp)
  - [ ] Compress client-side using Canvas API (max 200KB, max 512x512px)
  - [ ] Upload to Cloudflare R2 via `POST /api/photos/upload`
  - [ ] Store returned URL in profile.logoUrl
  - [ ] Show thumbnail preview of current logo
- [ ] 1.4.5 Create R2 upload infrastructure (AC: #2)
  - [ ] Create `src/lib/r2.ts` — S3-compatible client configured with R2 credentials
  - [ ] Create `src/app/api/photos/upload/route.ts`
    - [ ] Accept multipart form data
    - [ ] Validate file type (image/jpeg, image/png, image/webp)
    - [ ] Upload to R2 bucket with unique key: `logos/{userId}/{uuid}.{ext}`
    - [ ] Return `{ url: R2_PUBLIC_URL/key }`
    - [ ] Require authentication
- [ ] 1.4.6 Create profile page (AC: #1-#6)
  - [ ] Create `src/app/profile/page.tsx`
  - [ ] Compose `ProfileForm` + `LogoUpload` components
  - [ ] Mobile-first layout
  - [ ] First-time user guidance (e.g., "Complete your profile to personalize your quotes")
- [ ] 1.4.7 Create useProfile SWR hook (AC: #6)
  - [ ] Create `src/hooks/use-profile.ts`
  - [ ] `useProfile()` returns profile data, loading state, mutate function
  - [ ] Pattern: `useSWR('/api/profile', fetcher)`
- [ ] 1.4.8 Create image compression utility (AC: #2)
  - [ ] Create `src/lib/image-compress.ts`
  - [ ] `compressImage(file: File, maxWidth: number, maxSizeKB: number): Promise<Blob>`
  - [ ] Use Canvas API for browser-native compression

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

### Debug Log References

### Completion Notes List

### File List

# Story 1.1: Project Setup from Starter Template

Status: ready-for-dev

## Story

As a developer,
I want to initialize the QuoteCraft project from the Next.js starter template with all core dependencies, database schema, authentication, and project structure,
so that the team has a working foundation with database, auth, and project structure ready for feature development.

## Acceptance Criteria

1. **Given** the architecture specifies a Next.js App Router starter
   **When** the project is initialized with `create-next-app` using TypeScript, Tailwind CSS, ESLint, app router, and src directory
   **Then** the project builds (`npm run build`) and runs (`npm run dev`) without errors

2. **Given** Prisma is configured with the User and Profile models from the architecture schema
   **When** `prisma migrate dev` is run against Neon PostgreSQL
   **Then** the initial database tables are created including all models (User, Profile, Quote, LineItem, QuotePhoto, Template, TemplateItem) and enums (Trade, QuoteStatus, DepositType)

3. **Given** NextAuth.js v5 is configured with a credentials provider using email/password
   **When** the auth system is set up
   **Then** JWT-based sessions work with 30-day expiry, session includes `user.id`, and the auth API route handler exists at `/api/auth/[...nextauth]`

4. **Given** `src/middleware.ts` route protection is configured
   **When** an unauthenticated user accesses `/dashboard`, `/quotes/*`, or `/profile`
   **Then** they are redirected to `/login`
   **And** public routes (`/`, `/login`, `/register`, `/quote/[token]`, `/api/auth/*`, `/api/webhooks/*`) remain accessible

5. **Given** the feature-based directory structure from the architecture is created
   **Then** these directories exist: `src/components/ui/`, `src/components/auth/`, `src/components/profile/`, `src/components/quotes/`, `src/components/dashboard/`, `src/components/customer-view/`, `src/components/pdf/`, `src/components/layout/`, `src/lib/`, `src/lib/validations/`, `src/hooks/`, `src/types/`

6. **Given** shared utilities are created
   **Then** these files exist with working implementations:
   - `src/lib/db.ts` — Prisma singleton client (uses globalThis to avoid hot-reload duplication)
   - `src/lib/fetcher.ts` — SWR fetcher function
   - `src/lib/utils.ts` — `formatCurrency()` using Intl.NumberFormat and general utilities

7. **Given** Zod is installed and a base validation pattern is established
   **Then** `src/lib/validations/auth.ts` contains registerSchema and loginSchema
   **And** `src/lib/validations/common.ts` contains shared patterns (emailSchema, passwordSchema with min 8 chars)

8. **Given** environment variables are documented in `.env.example`
   **Then** all required environment variables from the architecture are listed: DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PUBLISHABLE_KEY, R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME, R2_PUBLIC_URL, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, RESEND_API_KEY, NEXT_PUBLIC_APP_URL

## Tasks / Subtasks

- [ ] Task 1: Initialize Next.js project (AC: #1)
  - [ ] 1.1 Run `npx create-next-app@latest quotecraft --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` in the `mvps/contractor-quoting-estimation/` directory (output goes to `mvps/contractor-quoting-estimation/src/` — the project root IS the implementation_artifacts dir)
  - [ ] 1.2 Verify `npm run build` succeeds with zero errors
  - [ ] 1.3 Verify `npm run dev` starts without errors

- [ ] Task 2: Install all project dependencies (AC: #1)
  - [ ] 2.1 Install production dependencies: `npm install @prisma/client next-auth@5 @auth/prisma-adapter bcrypt swr dexie react-hook-form @hookform/resolvers zod @react-pdf/renderer stripe @stripe/stripe-js next-pwa @aws-sdk/client-s3 twilio resend`
  - [ ] 2.2 Install dev dependencies: `npm install -D prisma @types/bcrypt`
  - [ ] 2.3 Verify `npm run build` still succeeds after dependency installation

- [ ] Task 3: Set up Prisma with FULL schema (AC: #2)
  - [ ] 3.1 Run `npx prisma init` to create prisma directory and .env
  - [ ] 3.2 Create `prisma/schema.prisma` with ALL models from architecture (User, Profile, Quote, LineItem, QuotePhoto, Template, TemplateItem) and ALL enums (Trade, QuoteStatus, DepositType) — include all models now to prevent migration issues in later epics
  - [ ] 3.3 Configure datasource for PostgreSQL with `env("DATABASE_URL")`
  - [ ] 3.4 Run `npx prisma migrate dev --name init` to create initial migration
  - [ ] 3.5 Verify migration creates all tables and enums in the database

- [ ] Task 4: Configure NextAuth.js v5 with credentials provider (AC: #3)
  - [ ] 4.1 Create `src/lib/auth.ts` with NextAuth configuration:
    - Credentials provider with email + password fields
    - `authorize` function: look up user by email via Prisma, verify password with `bcrypt.compare`, return `{ id, email }` or null
    - JWT strategy with `maxAge: 30 * 24 * 60 * 60` (30 days)
    - `jwt` callback: persist `user.id` into token
    - `session` callback: expose `token.id` as `session.user.id`
    - `pages: { signIn: "/login" }`
  - [ ] 4.2 Create `src/app/api/auth/[...nextauth]/route.ts` exporting GET and POST handlers from auth config
  - [ ] 4.3 Create `src/types/next-auth.d.ts` extending Session and JWT types to include `user.id: string`

- [ ] Task 5: Create route protection middleware (AC: #4)
  - [ ] 5.1 Create `src/middleware.ts` using NextAuth's `auth` export as middleware
  - [ ] 5.2 Configure matcher to protect: `/dashboard/:path*`, `/quotes/:path*`, `/profile/:path*`
  - [ ] 5.3 Public routes remain unprotected by not matching them: `/`, `/login`, `/register`, `/quote/:path*` (customer view), `/api/auth/:path*`, `/api/webhooks/:path*`, `/api/quotes/view/:path*`

- [ ] Task 6: Create feature-based directory structure (AC: #5)
  - [ ] 6.1 Create all component directories with `.gitkeep`:
    - `src/components/ui/`
    - `src/components/auth/`
    - `src/components/profile/`
    - `src/components/quotes/`
    - `src/components/dashboard/`
    - `src/components/customer-view/`
    - `src/components/pdf/`
    - `src/components/layout/`
  - [ ] 6.2 Create library directories:
    - `src/lib/validations/`
  - [ ] 6.3 Create hook and type directories:
    - `src/hooks/`
    - `src/types/`

- [ ] Task 7: Create shared utility files (AC: #6)
  - [ ] 7.1 Create `src/lib/db.ts` — Prisma singleton using globalThis pattern to avoid hot-reload connection exhaustion in dev mode
  - [ ] 7.2 Create `src/lib/fetcher.ts` — SWR fetcher: `export const fetcher = (url: string) => fetch(url).then(res => { if (!res.ok) throw new Error('Fetch failed'); return res.json(); })`
  - [ ] 7.3 Create `src/lib/utils.ts` — `formatCurrency(amount: number): string` using `new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })`

- [ ] Task 8: Create base Zod validation schemas (AC: #7)
  - [ ] 8.1 Create `src/lib/validations/common.ts` with shared patterns:
    - `emailSchema`: `z.string().email()`
    - `passwordSchema`: `z.string().min(8, "Password must be at least 8 characters")`
  - [ ] 8.2 Create `src/lib/validations/auth.ts` with:
    - `registerSchema`: `z.object({ email: emailSchema, password: passwordSchema })`
    - `loginSchema`: `z.object({ email: emailSchema, password: passwordSchema })`

- [ ] Task 9: Create `.env.example` with all required variables (AC: #8)
  - [ ] 9.1 Create `.env.example` documenting every environment variable from the architecture with descriptive comments:
    - Database: `DATABASE_URL`
    - Auth: `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
    - Stripe: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PUBLISHABLE_KEY`
    - Cloudflare R2: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`, `R2_PUBLIC_URL`
    - Twilio: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`
    - Email: `RESEND_API_KEY`
    - App: `NEXT_PUBLIC_APP_URL`

- [ ] Task 10: Final verification (AC: #1-#8)
  - [ ] 10.1 Run `npm run build` — must succeed with zero errors
  - [ ] 10.2 Run `npx prisma validate` — schema must be valid
  - [ ] 10.3 Verify all directories from AC #5 exist
  - [ ] 10.4 Verify all utility files from AC #6 exist and export expected functions
  - [ ] 10.5 Verify all validation schemas from AC #7 exist and export expected schemas

## Dev Notes

### Critical: Project Root Location

The project is initialized INSIDE the implementation_artifacts directory. The `create-next-app` command should be run such that the project files end up at `mvps/contractor-quoting-estimation/` — this IS the project root. Do NOT create a nested `quotecraft/` subdirectory inside it. If `create-next-app` creates a `quotecraft/` folder, move all contents up one level into `mvps/contractor-quoting-estimation/`.

**Implementation artifacts path:** `/root/anton/research-team/mvps/contractor-quoting-estimation`
**Planning artifacts path:** `/root/anton/research-team/mvps/contractor-quoting-estimation/planning`

### Prisma Schema — Include ALL Models

Include the COMPLETE schema from the architecture in the initial migration — not just User and Profile. This prevents painful migration conflicts in later stories. All models:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

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

model Quote {
  id              String      @id @default(cuid())
  userId          String
  user            User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  status          QuoteStatus @default(DRAFT)
  quoteNumber     String      @unique
  trade           Trade
  customerName    String
  customerAddress String?
  customerPhone   String?
  customerEmail   String?
  notes           String?
  taxRate         Float       @default(0)
  depositType     DepositType?
  depositValue    Float?
  termsText       String?
  viewToken       String      @unique @default(cuid())
  viewedAt        DateTime?
  signedAt        DateTime?
  signatureData   String?
  signerIp        String?
  paidAt          DateTime?
  expiresAt       DateTime?
  stripePaymentIntentId String?
  depositAmountPaid     Float?
  pdfUrl          String?
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
  sentAt          DateTime?
  lineItems       LineItem[]
  photos          QuotePhoto[]
}

model LineItem {
  id          String  @id @default(cuid())
  quoteId     String
  quote       Quote   @relation(fields: [quoteId], references: [id], onDelete: Cascade)
  description String
  quantity    Float   @default(1)
  unit        String  @default("each")
  unitPrice   Float
  sortOrder   Int     @default(0)
  isCustom    Boolean @default(false)
}

model QuotePhoto {
  id        String @id @default(cuid())
  quoteId   String
  quote     Quote  @relation(fields: [quoteId], references: [id], onDelete: Cascade)
  url       String
  thumbnail String?
  sortOrder Int    @default(0)
  caption   String?
}

model Template {
  id          String         @id @default(cuid())
  trade       Trade
  name        String
  description String?
  isSystem    Boolean        @default(true)
  userId      String?
  user        User?          @relation(fields: [userId], references: [id], onDelete: Cascade)
  items       TemplateItem[]
}

model TemplateItem {
  id              String   @id @default(cuid())
  templateId      String
  template        Template @relation(fields: [templateId], references: [id], onDelete: Cascade)
  description     String
  suggestedPrice  Float?
  unit            String   @default("each")
  category        String?
  sortOrder       Int      @default(0)
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
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
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

### NextAuth Type Extension

```typescript
// src/types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
```

### Naming Conventions (Mandatory)

| Element | Convention | Example |
|---------|-----------|---------|
| Files | kebab-case | `login-form.tsx`, `use-profile.ts` |
| Components | PascalCase | `LoginForm`, `ProfileForm` |
| Functions/hooks | camelCase | `useProfile`, `formatCurrency` |
| Constants | UPPER_SNAKE_CASE | `MAX_PHOTOS_PER_QUOTE` |
| Types/interfaces | PascalCase | `Profile`, `CreateUserInput` |
| DB tables | PascalCase singular | `User`, `Quote` (Prisma convention) |
| DB columns | camelCase | `customerName`, `unitPrice` |
| Enum values | UPPER_SNAKE_CASE | `DRAFT`, `PLUMBING` |

### Anti-Patterns to Avoid

- **Never** use raw SQL — always Prisma
- **Never** store photos/files in the database — always R2/S3
- **Never** skip Zod validation on API routes
- **Never** expose `passwordHash` in API responses
- **Never** use raw `fetch` for GET requests in components — always SWR hooks
- **Never** create component files at top level — use feature directories under `src/components/<feature>/`
- **Never** import Prisma client directly — always import from `src/lib/db.ts`

### API Error Response Format (Mandatory for all future routes)

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable message",
    "details": [{ "field": "email", "message": "Invalid email format" }]
  }
}
```

HTTP status codes: 200 (ok), 201 (created), 400 (validation), 401 (unauthorized), 403 (forbidden), 404 (not found), 409 (conflict), 429 (rate limited), 500 (server error).

### Environment Variables (.env.example)

```bash
# Database - Neon PostgreSQL
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require

# NextAuth.js
NEXTAUTH_SECRET=your-random-32-char-secret-here
NEXTAUTH_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# Cloudflare R2 (S3-compatible)
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=quotecraft
R2_PUBLIC_URL=https://pub-xxx.r2.dev

# Twilio SMS
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=+1234567890

# Resend Email
RESEND_API_KEY=re_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Import Alias

All imports use `@/*` alias mapping to `src/*`. Example: `import { prisma } from "@/lib/db"`.

### Project Structure Notes

- All paths align with the architecture document's directory structure
- Feature-based component organization under `src/components/<feature>/`
- API routes organized by resource under `src/app/api/<resource>/`
- Shared logic centralized in `src/lib/`
- Validation schemas shared between client and server in `src/lib/validations/`
- This story creates the skeleton; subsequent stories fill in components and routes

### References

- [Source: planning/architecture.md#Starter Template Evaluation]
- [Source: planning/architecture.md#Data Architecture — Data Model]
- [Source: planning/architecture.md#Authentication & Security]
- [Source: planning/architecture.md#API & Communication Patterns]
- [Source: planning/architecture.md#Frontend Architecture]
- [Source: planning/architecture.md#Infrastructure & Deployment — Environment Configuration]
- [Source: planning/architecture.md#Implementation Patterns & Consistency Rules]
- [Source: planning/architecture.md#Project Structure & Boundaries]
- [Source: planning/epics.md#Epic 1: Contractor Registration & Profile Setup — Story 1.1]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List

# Story 1.2: Contractor Registration

Status: ready-for-dev

## Story

As a contractor,
I want to create an account with my email and password,
so that I can start using QuoteCraft to create quotes.

## Acceptance Criteria

1. **Given** I am on the registration page at `/register`
   **When** I enter a valid email address and a password of at least 8 characters and submit the form
   **Then** my account is created with my password hashed using bcrypt (12 salt rounds)
   **And** I am automatically logged in and redirected to `/profile` to complete my setup
   **And** a JWT session token is set in an HttpOnly cookie with 30-day expiry

2. **Given** I try to register with an email that already exists
   **When** I submit the registration form
   **Then** I see an error message "An account with this email already exists"
   **And** no duplicate account is created

3. **Given** I try to register with a password shorter than 8 characters
   **When** I submit the registration form
   **Then** I see a validation error indicating the minimum password length
   **And** the form is not submitted to the server (client-side validation)

4. **Given** I try to register with an invalid email format
   **When** I submit the registration form
   **Then** I see a validation error indicating the email format is invalid
   **And** the form is not submitted to the server (client-side validation)

5. **Given** I am already logged in
   **When** I navigate to `/register`
   **Then** I am redirected to `/dashboard` (no need to register again)

## Tasks / Subtasks

- [ ] Task 1: Create registration API route (AC: #1, #2)
  - [ ] 1.1 Create `src/app/api/auth/register/route.ts` with POST handler
  - [ ] 1.2 Validate request body using `registerSchema` from `@/lib/validations/auth` (already created in story 1.1)
  - [ ] 1.3 Check if email already exists in database via `prisma.user.findUnique({ where: { email } })`
  - [ ] 1.4 If email exists, return 409 status with error `{ code: "CONFLICT", message: "An account with this email already exists" }`
  - [ ] 1.5 Hash password using `bcrypt.hash(password, 12)` — 12 salt rounds per architecture
  - [ ] 1.6 Create user via `prisma.user.create({ data: { email, passwordHash } })`
  - [ ] 1.7 Return 201 with `{ data: { id: user.id, email: user.email } }` — never expose passwordHash

- [ ] Task 2: Create registration form component (AC: #1, #2, #3, #4)
  - [ ] 2.1 Create `src/components/auth/register-form.tsx` using React Hook Form with Zod resolver
  - [ ] 2.2 Import and use `registerSchema` from `@/lib/validations/auth` for client-side validation
  - [ ] 2.3 Form fields: email (type="email"), password (type="password"), confirm password
  - [ ] 2.4 Display inline validation errors for invalid email format and short password (client-side via Zod)
  - [ ] 2.5 On submit: POST to `/api/auth/register`, then call `signIn("credentials", { email, password, redirect: false })` from next-auth/react
  - [ ] 2.6 On successful sign-in: redirect to `/profile` using `router.push("/profile")`
  - [ ] 2.7 On API error (409 conflict): display "An account with this email already exists" above the form
  - [ ] 2.8 On API error (500): display generic "Something went wrong. Please try again."
  - [ ] 2.9 Disable submit button and show spinner while request is in flight
  - [ ] 2.10 Add link to login page: "Already have an account? Log in"

- [ ] Task 3: Create registration page (AC: #1, #5)
  - [ ] 3.1 Create `src/app/register/page.tsx` as a client component
  - [ ] 3.2 Check session using `useSession()` from next-auth/react — if authenticated, redirect to `/dashboard`
  - [ ] 3.3 Render centered card layout with QuoteCraft heading and `<RegisterForm />`
  - [ ] 3.4 Mobile-first styling: max-w-md, centered, proper spacing, 44px min touch targets on button

- [ ] Task 4: Add confirm password validation to auth schema (AC: #3)
  - [ ] 4.1 Update `src/lib/validations/auth.ts` — add `registerFormSchema` extending `registerSchema` with `confirmPassword` field and `.refine()` to check passwords match
  - [ ] 4.2 Keep existing `registerSchema` (email + password only) for API-side validation
  - [ ] 4.3 Use `registerFormSchema` in the form component; use `registerSchema` in the API route

- [ ] Task 5: Add SessionProvider to app layout (AC: #1, #5)
  - [ ] 5.1 Check if `src/app/layout.tsx` already wraps children with NextAuth `SessionProvider`
  - [ ] 5.2 If not, create `src/components/auth/auth-provider.tsx` as a client component wrapping `SessionProvider` from next-auth/react
  - [ ] 5.3 Wrap children in root layout with `<AuthProvider>`

- [ ] Task 6: Verification (AC: #1-#5)
  - [ ] 6.1 Verify `npm run build` succeeds with no type errors
  - [ ] 6.2 Verify registration page renders at `/register`
  - [ ] 6.3 Verify form validates email format and password length client-side before submission
  - [ ] 6.4 Verify successful registration creates user in database with hashed password
  - [ ] 6.5 Verify duplicate email returns 409 with correct error message
  - [ ] 6.6 Verify auto-login works after registration (session cookie set, redirected to /profile)

## Dev Notes

### Previous Story (1.1) Created These Files You MUST Reuse

Story 1.1 (Project Setup) established the foundation. Do NOT recreate or duplicate:

- **`src/lib/db.ts`** — Prisma singleton. Import as `import { prisma } from "@/lib/db"`
- **`src/lib/auth.ts`** — NextAuth config with credentials provider, JWT strategy, 30-day maxAge. Import `{ auth, signIn, signOut, handlers }` from here
- **`src/lib/validations/auth.ts`** — Has `registerSchema` and `loginSchema` with Zod. Extend it, don't replace
- **`src/lib/validations/common.ts`** — Has `emailSchema` and `passwordSchema`. Reuse in any extensions
- **`src/types/next-auth.d.ts`** — Session type extensions (user.id: string)
- **`src/middleware.ts`** — Route protection. `/register` is already public (not in matcher)
- **`src/app/api/auth/[...nextauth]/route.ts`** — NextAuth handler. Already exists

### Registration Flow (Sequence)

```
1. User fills form → client-side Zod validates email + password + confirmPassword
2. POST /api/auth/register → server validates with registerSchema → check duplicate → hash → create user
3. API returns 201 → client calls signIn("credentials", { email, password, redirect: false })
4. NextAuth authorize() looks up user, verifies bcrypt → returns session
5. Client receives session → router.push("/profile")
```

### Critical: Two-Step Registration + Sign-In

Registration and authentication are separate steps:
1. **POST `/api/auth/register`** — creates the user in the database
2. **`signIn("credentials", ...)`** — authenticates via NextAuth's authorize callback

Do NOT try to set the session manually or create JWT tokens in the register route. Let NextAuth handle authentication after the user is created.

### API Route Pattern (Mandatory)

```typescript
// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/validations/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = registerSchema.parse(body);

    const existing = await prisma.user.findUnique({
      where: { email: validated.email },
    });
    if (existing) {
      return NextResponse.json(
        { error: { code: "CONFLICT", message: "An account with this email already exists" } },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(validated.password, 12);
    const user = await prisma.user.create({
      data: { email: validated.email, passwordHash },
    });

    return NextResponse.json(
      { data: { id: user.id, email: user.email } },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: { code: "VALIDATION_ERROR", message: "Invalid input", details: error.errors } },
        { status: 400 }
      );
    }
    console.error("Registration failed:", error);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Registration failed" } },
      { status: 500 }
    );
  }
}
```

### Form Component Pattern (Mandatory)

Use React Hook Form + Zod resolver. Do NOT use uncontrolled forms or manual validation.

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/lib/validations/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
```

### Confirm Password Schema Extension

Add to `src/lib/validations/auth.ts` — keep existing schemas, add new one:

```typescript
export const registerFormSchema = registerSchema
  .extend({ confirmPassword: z.string() })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormInput = z.infer<typeof registerFormSchema>;
```

### Mobile-First Styling Requirements

- Min touch target: 44x44px on all interactive elements (buttons, inputs)
- Primary breakpoint: 375-428px
- Use Tailwind: `min-h-[44px]` on buttons and inputs
- Center registration card: `flex min-h-screen items-center justify-center`
- Max width: `max-w-md w-full mx-auto p-6`

### Naming Conventions (Enforced)

| What | Convention | This Story |
|------|-----------|------------|
| Files | kebab-case | `register-form.tsx`, `auth-provider.tsx` |
| Components | PascalCase | `RegisterForm`, `AuthProvider` |
| API routes | resource dirs | `src/app/api/auth/register/route.ts` |
| Schemas | camelCase | `registerSchema`, `registerFormSchema` |

### Security Requirements

- Passwords hashed with bcrypt, 12 salt rounds — never store plaintext
- Never expose `passwordHash` in any API response or client-side code
- Use `select` in Prisma queries to exclude sensitive fields if returning user data
- Error messages for duplicate email must NOT reveal whether an email exists to unauthenticated attackers — but per AC #2, we show "An account with this email already exists" (acceptable for registration forms per OWASP guidance for user-facing registration)
- All POST endpoints validate input with Zod before any database operations

### Anti-Patterns to Avoid

- **Never** create JWT tokens manually in the register route — use NextAuth's signIn
- **Never** import PrismaClient directly — always use `@/lib/db`
- **Never** put the form component in `src/components/` root — use `src/components/auth/`
- **Never** skip the Zod validation step in the API route
- **Never** use `redirect: true` in signIn (causes full page reload) — use `redirect: false` and `router.push()`
- **Never** store password in React state beyond form submission
- **Never** use GET for registration — always POST

### Files Created / Modified in This Story

**New files:**
- `src/app/api/auth/register/route.ts` — Registration API endpoint
- `src/components/auth/register-form.tsx` — Registration form component
- `src/app/register/page.tsx` — Registration page
- `src/components/auth/auth-provider.tsx` — SessionProvider wrapper (if not yet created)

**Modified files:**
- `src/lib/validations/auth.ts` — Add `registerFormSchema` and `RegisterFormInput` type
- `src/app/layout.tsx` — Wrap with AuthProvider (if not already done)

### Project Structure Notes

- All paths align with architecture document's directory structure
- `src/components/auth/` directory was created in story 1.1 (with .gitkeep)
- `src/app/register/page.tsx` — route is already public (not in middleware matcher)
- Registration API at `src/app/api/auth/register/route.ts` matches architecture's API endpoint table

### References

- [Source: planning/architecture.md#Authentication & Security]
- [Source: planning/architecture.md#API & Communication Patterns — Core API Endpoints]
- [Source: planning/architecture.md#Implementation Patterns & Consistency Rules — Pattern Examples]
- [Source: planning/architecture.md#Frontend Architecture — Component Architecture]
- [Source: planning/architecture.md#Project Structure & Boundaries — Architectural Boundaries]
- [Source: planning/epics.md#Epic 1 — Story 1.2: Contractor Registration]
- [Source: planning/prd.md#Functional Requirements FR56]
- [Source: stories/1-1-project-setup-from-starter-template.md — Previous story patterns and file locations]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List

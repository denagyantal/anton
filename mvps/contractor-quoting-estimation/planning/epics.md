---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'step-04-final-validation']
inputDocuments: ['mvps/contractor-quoting-estimation/planning/prd.md', 'mvps/contractor-quoting-estimation/planning/architecture.md']
workflowType: 'epics'
project_name: 'QuoteCraft'
date: '2026-03-23'
status: 'complete'
completedAt: '2026-03-23'
---

# QuoteCraft - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for QuoteCraft, decomposing the requirements from the PRD and Architecture into implementable stories organized by user value delivery.

## Requirements Inventory

### Functional Requirements

FR1: Contractor can select a trade-specific template (plumbing, electrical, HVAC, painting) to start a new quote
FR2: Contractor can add, remove, and edit line items with description, quantity, unit, and unit price
FR3: Contractor can create custom line items for work not covered by templates
FR4: Contractor can enter customer information (name, address, phone, email) on a quote
FR5: Contractor can add free-text job notes and scope description to a quote
FR6: Contractor can set tax rate per quote (defaulting to profile-configured rate)
FR7: Contractor can save a quote as draft and return to edit it later
FR8: Contractor can duplicate an existing quote to create a new quote with pre-filled line items
FR9: Contractor can delete draft quotes
FR10: System calculates subtotal, tax, and total automatically as line items are added or modified
FR11: Contractor can set deposit amount as a fixed dollar value or percentage of quote total
FR12: System provides pre-built line item libraries for each supported trade with item descriptions and suggested pricing
FR13: Contractor can browse and search the line item library for their selected trade
FR14: Contractor can add line items from the library to a quote with one tap
FR15: Contractor can override suggested pricing on any line item
FR16: System supports trade-specific units of measurement (per unit, per linear foot, per square foot, per hour, flat rate)
FR17: Contractor can capture photos directly from the device camera within the app
FR18: Contractor can select photos from the device gallery
FR19: Contractor can attach up to 10 photos per quote
FR20: Contractor can remove attached photos from a quote
FR21: Attached photos appear in the generated PDF quote
FR22: Contractor can generate a professional branded PDF from any quote
FR23: PDF includes contractor business name, logo, license number, and contact information
FR24: PDF includes itemized line items with descriptions, quantities, unit prices, and totals
FR25: PDF includes subtotal, tax, total, and deposit amount (if configured)
FR26: PDF includes attached jobsite photos
FR27: PDF includes terms and conditions section
FR28: PDF includes job notes and scope description
FR29: Contractor can send the quote PDF via SMS to the customer's phone number
FR30: Contractor can send the quote PDF via email to the customer's email address
FR31: Customer can view the quote from a link without creating an account
FR32: Customer can accept and sign the quote electronically from their phone or computer
FR33: System records signature timestamp, IP address, and signer identity for legal compliance
FR34: Signed quote is stored and accessible in the contractor's dashboard
FR35: Contractor receives a notification when a customer signs a quote
FR36: Customer can pay the deposit amount directly from the quote link after signing
FR37: System processes deposit payments through Stripe
FR38: Contractor receives a notification when a deposit payment is completed
FR39: Quote status updates automatically when deposit is received
FR40: Contractor can view deposit payment details (amount, date, confirmation) on the quote
FR41: Contractor can view a list of all quotes with current status (draft, sent, viewed, signed, paid, expired)
FR42: Contractor can search quotes by customer name
FR43: Contractor can filter quotes by trade type and date range
FR44: Contractor can view quote details including all line items, photos, and status history
FR45: System tracks when a customer views a quote and updates status to "viewed"
FR46: Contractor can set up a business profile with company name, logo, license number, phone, and email
FR47: Contractor can select their primary trade (determines default template library)
FR48: Contractor can configure a default tax rate for new quotes
FR49: Contractor can configure default payment terms text
FR50: Contractor can customize brand colors for the quote header
FR51: Contractor can create and save quotes when the device has no internet connectivity
FR52: Contractor can access previously loaded trade templates and line items offline
FR53: System automatically syncs offline-created quotes when connectivity is restored
FR54: System displays a clear indicator of online/offline status and pending sync count
FR55: System preserves all quote data (including photos) during offline-to-online sync without data loss
FR56: Contractor can create an account with email and password
FR57: Contractor can log in from any device and access their quotes and profile
FR58: Contractor can reset their password via email link

### NonFunctional Requirements

NFR1: Quote creation screen loads within 1 second after initial app load as measured by Time to Interactive
NFR2: PDF generation completes within 3 seconds for a quote with 10 line items and 5 photos
NFR3: First Contentful Paint under 2 seconds on 4G mobile connection as measured by Lighthouse
NFR4: Subsequent app loads under 1 second from service worker cache
NFR5: Quote list dashboard renders up to 500 quotes with smooth scrolling (60fps)
NFR6: Photo capture and compression completes within 2 seconds per photo
NFR7: All data transmitted over HTTPS/TLS 1.2+
NFR8: Contractor passwords hashed with bcrypt (or equivalent) with minimum 10 rounds
NFR9: No credit card data stored on QuoteCraft servers — all payment processing handled via Stripe-hosted checkout
NFR10: Customer quote view links use unguessable tokens (minimum 128-bit entropy)
NFR11: Session tokens expire after 30 days of inactivity
NFR12: Contractor data isolated — no contractor can access another contractor's quotes, customers, or profile
NFR13: System supports 10,000 concurrent users with response times meeting NFR1-NFR2 targets
NFR14: Photo storage architecture supports 50 photos per user average without performance degradation
NFR15: Database scales to 1 million quotes without query performance exceeding 200ms for dashboard operations
NFR16: 99.5% uptime during business hours (6 AM - 9 PM local time, Mon-Sat) as measured by external monitoring
NFR17: Offline data sync achieves 99.9%+ success rate — no quote data lost during sync
NFR18: Stripe payment webhooks retry automatically on failure with up to 3 attempts over 24 hours
NFR19: Customer-facing quote view and e-signature pages meet WCAG 2.1 AA standards
NFR20: All interactive elements have minimum 44x44px touch targets on mobile
NFR21: Color contrast ratios meet WCAG AA minimums (4.5:1 for text, 3:1 for UI components)

### Additional Requirements

- Architecture specifies Next.js App Router starter template with TypeScript, Tailwind CSS, ESLint, and src directory
- PostgreSQL database via Neon with Prisma ORM — tables created per-story as needed
- NextAuth.js v5 for authentication with JWT-based sessions
- Stripe Connect with Checkout Sessions for PCI-compliant payment processing
- Cloudflare R2 (S3-compatible) for photo and PDF file storage
- Twilio for SMS delivery of quotes
- Resend for email delivery of quotes and notifications
- @react-pdf/renderer for server-side PDF generation
- Dexie.js for IndexedDB offline storage with service worker caching via next-pwa
- SWR for client-side data fetching; React Hook Form with Zod for validation
- Feature-based component organization under src/components/
- All API routes must validate session and scope queries to authenticated user
- Mobile-first design with 375-428px primary breakpoint, 44x44px minimum touch targets

### FR Coverage Map

FR1: Epic 2 - Select trade template to start quote
FR2: Epic 2 - Add/remove/edit line items
FR3: Epic 2 - Create custom line items
FR4: Epic 2 - Enter customer information
FR5: Epic 2 - Add job notes and scope description
FR6: Epic 2 - Set tax rate per quote
FR7: Epic 2 - Save quote as draft
FR8: Epic 2 - Duplicate existing quote
FR9: Epic 2 - Delete draft quotes
FR10: Epic 2 - Auto-calculate subtotal, tax, total
FR11: Epic 2 - Set deposit amount (fixed or percentage)
FR12: Epic 2 - Pre-built line item libraries with suggested pricing
FR13: Epic 2 - Browse and search line item library
FR14: Epic 2 - One-tap add from library
FR15: Epic 2 - Override suggested pricing
FR16: Epic 2 - Trade-specific units of measurement
FR17: Epic 3 - Capture photos from camera
FR18: Epic 3 - Select photos from gallery
FR19: Epic 3 - Attach up to 10 photos per quote
FR20: Epic 3 - Remove attached photos
FR21: Epic 3 - Photos appear in PDF
FR22: Epic 3 - Generate branded PDF
FR23: Epic 3 - PDF includes business info
FR24: Epic 3 - PDF includes itemized line items
FR25: Epic 3 - PDF includes subtotal/tax/total/deposit
FR26: Epic 3 - PDF includes photos
FR27: Epic 3 - PDF includes terms and conditions
FR28: Epic 3 - PDF includes job notes
FR29: Epic 3 - Send quote via SMS
FR30: Epic 3 - Send quote via email
FR31: Epic 4 - Customer views quote without account
FR32: Epic 4 - Customer e-signs quote
FR33: Epic 4 - System records signature data for legal compliance
FR34: Epic 4 - Signed quote accessible in dashboard
FR35: Epic 4 - Contractor notified on signature
FR36: Epic 4 - Customer pays deposit from quote link
FR37: Epic 4 - Stripe processes deposit payment
FR38: Epic 4 - Contractor notified on payment
FR39: Epic 4 - Quote status auto-updates on payment
FR40: Epic 4 - Contractor views deposit payment details
FR41: Epic 5 - Quote list with status tracking
FR42: Epic 5 - Search quotes by customer name
FR43: Epic 5 - Filter by trade and date range
FR44: Epic 5 - View quote details with line items, photos, status
FR45: Epic 5 - System tracks customer views
FR46: Epic 1 - Business profile setup
FR47: Epic 1 - Select primary trade
FR48: Epic 1 - Configure default tax rate
FR49: Epic 1 - Configure default payment terms
FR50: Epic 1 - Customize brand colors
FR51: Epic 6 - Create and save quotes offline
FR52: Epic 6 - Access templates and line items offline
FR53: Epic 6 - Auto-sync on connectivity restore
FR54: Epic 6 - Online/offline status indicator
FR55: Epic 6 - Preserve all data during sync
FR56: Epic 1 - Create account with email/password
FR57: Epic 1 - Login from any device
FR58: Epic 1 - Reset password via email

## Epic List

### Epic 1: Contractor Registration & Profile Setup
Contractors can create an account, log in, and set up their business identity so QuoteCraft knows their trade, branding, and defaults for every quote they create.
**FRs covered:** FR46, FR47, FR48, FR49, FR50, FR56, FR57, FR58

### Epic 2: Quote Creation with Trade Templates
Contractors can create professional trade-specific quotes with pre-built line items, custom items, customer info, and automatic pricing calculations — the core value proposition of QuoteCraft.
**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16

### Epic 3: Photo Attachment, PDF Generation & Quote Delivery
Contractors can capture jobsite photos, generate branded professional PDFs, and deliver quotes to customers via SMS or email — transforming a draft quote into a polished proposal in the customer's hands.
**FRs covered:** FR17, FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR27, FR28, FR29, FR30

### Epic 4: Customer Acceptance & Deposit Payment
Customers can view, sign, and pay deposits on quotes directly from a link — no account required — completing the quote-to-deposit flow that gets contractors paid before they start work.
**FRs covered:** FR31, FR32, FR33, FR34, FR35, FR36, FR37, FR38, FR39, FR40

### Epic 5: Quote Dashboard & Pipeline Management
Contractors can track all their quotes in one place — see what's been sent, viewed, signed, or paid — and search and filter their pipeline to manage follow-ups and workload.
**FRs covered:** FR41, FR42, FR43, FR44, FR45

### Epic 6: Offline-First PWA
Contractors can create and manage quotes without internet connectivity on jobsites, with automatic sync when they're back online — critical for basements, rural sites, and new construction.
**FRs covered:** FR51, FR52, FR53, FR54, FR55

---

## Epic 1: Contractor Registration & Profile Setup

Contractors can create an account, log in from any device, and configure their business identity — establishing the foundation that personalizes every quote with their branding, license info, and trade-specific defaults.

### Story 1.1: Project Setup from Starter Template

As a developer,
I want to initialize the QuoteCraft project from the Next.js starter template with all core dependencies,
So that the team has a working foundation with database, auth, and project structure ready for feature development.

**Acceptance Criteria:**

**Given** the architecture specifies a Next.js App Router starter
**When** the project is initialized with `create-next-app` using TypeScript, Tailwind CSS, ESLint, app router, and src directory
**Then** the project builds and runs without errors
**And** Prisma is configured with the User and Profile models from the architecture schema
**And** `prisma migrate dev` creates the initial database tables on Neon PostgreSQL
**And** NextAuth.js v5 is configured with a credentials provider using email/password
**And** bcrypt is installed for password hashing with 12 salt rounds
**And** the `src/middleware.ts` route protection redirects unauthenticated users to `/login`
**And** the feature-based directory structure from the architecture is created (`src/components/ui/`, `src/components/auth/`, `src/components/profile/`, `src/lib/`, `src/lib/validations/`, `src/hooks/`, `src/types/`)
**And** shared utilities are created: `src/lib/db.ts` (Prisma singleton), `src/lib/fetcher.ts` (SWR fetcher), `src/lib/utils.ts` (formatCurrency, etc.)
**And** Zod is installed and a base validation pattern is established in `src/lib/validations/`
**And** environment variables are documented in `.env.example`

### Story 1.2: Contractor Registration

As a contractor,
I want to create an account with my email and password,
So that I can start using QuoteCraft to create quotes.

**Acceptance Criteria:**

**Given** I am on the registration page at `/register`
**When** I enter a valid email address and a password of at least 8 characters and submit the form
**Then** my account is created with my password hashed using bcrypt (12 salt rounds)
**And** I am automatically logged in and redirected to `/profile` to complete my setup
**And** a JWT session token is set in an HttpOnly cookie with 30-day expiry

**Given** I try to register with an email that already exists
**When** I submit the registration form
**Then** I see an error message "An account with this email already exists"
**And** no duplicate account is created

**Given** I try to register with a password shorter than 8 characters
**When** I submit the registration form
**Then** I see a validation error indicating the minimum password length
**And** the form is not submitted

### Story 1.3: Contractor Login & Password Reset

As a contractor,
I want to log in from any device and reset my password if I forget it,
So that I can always access my quotes and profile.

**Acceptance Criteria:**

**Given** I have an existing account
**When** I enter my correct email and password on the `/login` page
**Then** I am authenticated and redirected to `/dashboard`
**And** my session persists across page refreshes via JWT cookie

**Given** I enter an incorrect email or password
**When** I submit the login form
**Then** I see a generic error message "Invalid email or password" (not revealing which was wrong)

**Given** I click "Forgot password" on the login page
**When** I enter my registered email address
**Then** a password reset email is sent via Resend with a time-limited reset link
**And** I can set a new password from the reset link
**And** my old sessions remain valid until the new password is used to log in

**Given** I am logged in and inactive for more than 30 days
**When** I return to the app
**Then** my session has expired and I am redirected to the login page

### Story 1.4: Contractor Profile Setup

As a contractor,
I want to set up my business profile with my company name, logo, license number, trade, and default settings,
So that every quote I create automatically includes my professional branding and correct defaults.

**Acceptance Criteria:**

**Given** I am a newly registered contractor on the `/profile` page
**When** I fill in my business name, contact name, phone, email, and license number
**Then** my profile is saved and the information is available for quote PDF generation

**Given** I am on the profile page
**When** I upload a company logo image
**Then** the logo is compressed client-side, uploaded to Cloudflare R2, and the URL is stored in my profile
**And** the logo preview displays on the profile page

**Given** I am on the profile page
**When** I select my primary trade (plumbing, electrical, HVAC, or painting)
**Then** my trade selection is saved and determines the default line item library when creating new quotes

**Given** I am on the profile page
**When** I set a default tax rate (e.g., 8.25%)
**Then** the rate is saved and automatically applied to all new quotes I create

**Given** I am on the profile page
**When** I enter default payment terms text and select a brand color
**Then** these settings are saved and used in all generated quote PDFs

**Given** I update any profile field and save
**When** I log in from a different device
**Then** my profile data is consistent across all devices

---

## Epic 2: Quote Creation with Trade Templates

Contractors can create professional trade-specific quotes using pre-built line item libraries, add custom items, enter customer details, and manage their quotes — delivering the core "60-second quote" value proposition.

### Story 2.1: Trade Template & Line Item Library

As a contractor,
I want to access pre-built line items for my trade with descriptions and suggested pricing,
So that I can build quotes quickly without typing everything from scratch.

**Acceptance Criteria:**

**Given** the system is initialized
**When** the database is seeded
**Then** trade-specific template libraries exist for plumbing, electrical, HVAC, and painting
**And** each trade has at least 15 categorized line items with descriptions, suggested prices, and appropriate units of measurement (per unit, per linear foot, per square foot, per hour, flat rate)

**Given** I am creating a new quote and have selected a trade
**When** I open the line item picker
**Then** I see the line item library for that trade organized by category
**And** each item shows its description, suggested price, and unit

**Given** I am browsing the line item library
**When** I type a search term (e.g., "water heater")
**Then** the library filters to show matching items in real-time

**Given** I see a line item in the library
**When** I tap it
**Then** it is added to my quote with the suggested price pre-filled
**And** I can immediately override the price, quantity, or unit

### Story 2.2: Quote Builder — Create & Edit Quotes

As a contractor,
I want to create a quote by selecting line items, entering customer info, and configuring pricing details,
So that I can build a complete, accurate quote for my customer.

**Acceptance Criteria:**

**Given** I am on the `/quotes/new` page
**When** I select a trade template (plumbing, electrical, HVAC, or painting)
**Then** a new quote is initialized with that trade and a unique quote number is generated

**Given** I am building a quote
**When** I add line items from the library or create custom line items with description, quantity, unit, and unit price
**Then** each line item appears in the quote with its details editable inline
**And** I can reorder, edit, or remove any line item

**Given** I have line items in my quote
**When** I change any quantity or unit price
**Then** the subtotal, tax (based on the quote's tax rate), and total recalculate automatically in real-time

**Given** I am building a quote
**When** I enter customer information (name, address, phone, email)
**Then** the customer details are saved with the quote

**Given** I am building a quote
**When** I add a free-text job notes/scope description
**Then** the notes are saved and will appear in the generated PDF

**Given** I am building a quote
**When** I set the tax rate (defaulting to my profile's default tax rate)
**Then** the tax calculation updates immediately

**Given** I am building a quote
**When** I configure a deposit amount as either a fixed dollar value or a percentage of the total
**Then** the deposit amount is calculated and saved with the quote

**Given** I have made changes to a quote
**When** I navigate away or tap "Save"
**Then** the quote is saved as a draft that I can return to and edit later

### Story 2.3: Quote Management — Duplicate, Delete & Search

As a contractor,
I want to duplicate quotes for recurring job types, delete drafts I no longer need, and find past quotes quickly,
So that I can work efficiently without recreating quotes from scratch.

**Acceptance Criteria:**

**Given** I have an existing quote (any status)
**When** I tap "Duplicate"
**Then** a new draft quote is created with the same trade, line items (with quantities and prices), tax rate, deposit config, and notes
**And** the customer info and photos are NOT copied (since it's a different job)
**And** a new unique quote number is generated

**Given** I have a draft quote
**When** I tap "Delete" and confirm
**Then** the draft quote is permanently removed from my account

**Given** I have a quote that is not in draft status (sent, viewed, signed, paid)
**When** I view the quote
**Then** there is no delete option (only drafts can be deleted)

**Given** I am on the quote list
**When** I type a customer name in the search field
**Then** quotes are filtered to show only those matching the search term

---

## Epic 3: Photo Attachment, PDF Generation & Quote Delivery

Contractors can capture jobsite photos, attach them to quotes, generate branded professional PDFs, and send quotes to customers via SMS or email — transforming digital quotes into polished proposals that win more jobs.

### Story 3.1: Jobsite Photo Capture & Attachment

As a contractor,
I want to take photos on the jobsite and attach them to my quote,
So that customers can see exactly what I'm quoting on and I have visual documentation.

**Acceptance Criteria:**

**Given** I am editing a quote
**When** I tap the camera button
**Then** the device camera opens for direct photo capture

**Given** I am editing a quote
**When** I tap the gallery button
**Then** the device photo gallery opens for selection

**Given** I capture or select a photo
**When** the photo is processed
**Then** it is compressed client-side to under 500KB
**And** a thumbnail is generated for the quote edit view
**And** the full-resolution image is uploaded to Cloudflare R2
**And** the photo URL is saved to the quote

**Given** I have attached photos to a quote
**When** I view the quote edit screen
**Then** I see thumbnail previews of all attached photos
**And** I can remove any photo by tapping a remove button

**Given** I have attached 10 photos to a quote
**When** I try to add another photo
**Then** I see a message indicating the maximum of 10 photos has been reached

### Story 3.2: Branded PDF Generation

As a contractor,
I want to generate a professional branded PDF from my quote,
So that my customer receives a polished proposal with my logo, itemized pricing, photos, and terms.

**Acceptance Criteria:**

**Given** I have a quote with at least one line item
**When** I tap "Generate PDF" or "Preview"
**Then** a PDF is generated server-side using @react-pdf/renderer within 3 seconds

**Given** a PDF is generated
**When** I view or the customer receives it
**Then** the PDF includes my business name, logo, license number, phone, and email from my profile
**And** the PDF includes the customer's name, address, phone, and email
**And** the PDF includes all line items with descriptions, quantities, unit prices, and line totals
**And** the PDF includes subtotal, tax amount, total, and deposit amount (if configured)
**And** the PDF includes all attached jobsite photos
**And** the PDF includes the job notes and scope description
**And** the PDF includes terms and conditions text
**And** the PDF header uses my configured brand color

**Given** a PDF is generated
**When** the generation completes
**Then** the PDF is stored in Cloudflare R2 and the URL is saved to the quote record
**And** the PDF can be re-downloaded from the quote detail view

### Story 3.3: Quote Delivery via SMS & Email

As a contractor,
I want to send my quote to the customer via SMS or email with one tap,
So that the customer receives a professional quote link immediately.

**Acceptance Criteria:**

**Given** I have a completed quote with at least one line item and customer contact info
**When** I tap "Send via SMS" with a customer phone number
**Then** a text message is sent via Twilio containing a link to the customer quote view page
**And** the quote status changes from DRAFT to SENT
**And** the `sentAt` timestamp is recorded

**Given** I have a completed quote with a customer email address
**When** I tap "Send via Email"
**Then** an email is sent via Resend containing a link to the customer quote view page and a PDF attachment or link
**And** the quote status changes from DRAFT to SENT
**And** the `sentAt` timestamp is recorded

**Given** I try to send a quote without required customer contact info
**When** I tap send
**Then** I see a validation error indicating the missing phone or email

**Given** a quote has already been sent
**When** I view the quote
**Then** I can see the sent timestamp and resend the quote if needed

---

## Epic 4: Customer Acceptance & Deposit Payment

Customers can view a professionally formatted quote from a link, sign it electronically, and pay a deposit — all without creating an account — completing the end-to-end quote-to-deposit flow.

### Story 4.1: Customer Quote View Page

As a customer,
I want to view a contractor's quote from a link on my phone or computer without creating an account,
So that I can review the itemized proposal, photos, and terms before deciding.

**Acceptance Criteria:**

**Given** I receive a quote link via SMS or email
**When** I open the link at `/quote/[token]`
**Then** I see a mobile-friendly, professionally formatted page showing the contractor's business info, itemized line items, photos, job notes, subtotal, tax, total, deposit amount, and terms
**And** no login or account creation is required

**Given** I open the quote link
**When** the page loads
**Then** the quote status is updated to VIEWED in the contractor's system
**And** the `viewedAt` timestamp is recorded (first view only)
**And** the page meets WCAG 2.1 AA accessibility standards

**Given** the quote link uses an unguessable token (128+ bit entropy via cuid2)
**When** someone attempts to guess a quote URL
**Then** they cannot access any quote data

**Given** I open the quote link
**When** I scroll through the quote
**Then** I see a clear "Accept & Sign" call-to-action button

### Story 4.2: Electronic Signature Capture

As a customer,
I want to sign the quote electronically from my phone,
So that the contractor has a legally binding acceptance before starting work.

**Acceptance Criteria:**

**Given** I am viewing a quote at `/quote/[token]` and I tap "Accept & Sign"
**When** the signature interface appears
**Then** I see a canvas area where I can draw my signature with my finger or mouse
**And** I see my name pre-filled from the quote's customer info
**And** I can clear and redo my signature

**Given** I draw my signature and tap "Submit Signature"
**When** the signature is submitted
**Then** the signature image (base64), timestamp, my IP address, and signer identity are recorded for legal compliance
**And** the quote status changes to SIGNED
**And** the signed quote with signature is stored and accessible in the contractor's dashboard

**Given** a quote is signed
**When** the contractor's system processes the signature
**Then** the contractor receives a notification (email via Resend) that the quote has been signed

**Given** a quote has already been signed
**When** I revisit the quote link
**Then** I see the quote marked as "Signed" with the signature date and cannot sign again

### Story 4.3: Stripe Deposit Collection

As a customer,
I want to pay the required deposit directly from the quote page after signing,
So that the contractor can schedule my job and I've secured my spot.

**Acceptance Criteria:**

**Given** I have just signed a quote that has a deposit amount configured
**When** the signature is confirmed
**Then** I see a "Pay Deposit" button showing the deposit amount (e.g., "$500.00" or "25% — $625.00")

**Given** I tap "Pay Deposit"
**When** the payment flow starts
**Then** I am redirected to a Stripe-hosted checkout page (PCI compliant — no card data touches QuoteCraft servers)
**And** the checkout shows the deposit amount and contractor's business name

**Given** I complete payment on the Stripe checkout
**When** Stripe processes the payment successfully
**Then** a Stripe webhook fires and updates the quote status to PAID
**And** the `paidAt` timestamp and `depositAmountPaid` are recorded
**And** the contractor receives a notification (email) that the deposit has been paid

**Given** the contractor views a paid quote
**When** they open the quote detail
**Then** they see the deposit payment details: amount, date, and Stripe confirmation

**Given** a Stripe webhook fails to deliver
**When** the system retries
**Then** up to 3 retry attempts are made over 24 hours using Stripe's built-in retry mechanism

---

## Epic 5: Quote Dashboard & Pipeline Management

Contractors can view all their quotes in a unified dashboard with real-time status tracking, search and filter by customer or trade, and monitor their pipeline — replacing scattered texts and mental tracking with an organized system.

### Story 5.1: Quote List Dashboard with Status Tracking

As a contractor,
I want to see all my quotes in one place with their current status,
So that I know which quotes need follow-up and where my pipeline stands.

**Acceptance Criteria:**

**Given** I am logged in and navigate to `/dashboard`
**When** the page loads
**Then** I see a list of all my quotes showing: quote number, customer name, trade, total amount, status badge (draft/sent/viewed/signed/paid/expired), and date
**And** quotes are sorted by most recently updated first
**And** the list handles up to 500 quotes with smooth 60fps scrolling (using virtual scrolling for 100+ items)

**Given** I see a quote in the list
**When** I tap on it
**Then** I navigate to the quote detail page showing all line items, photos, customer info, job notes, and complete status history (created, sent, viewed, signed, paid timestamps)

**Given** I have quotes in various statuses
**When** I view the dashboard
**Then** each quote displays a color-coded status badge (draft=gray, sent=blue, viewed=yellow, signed=green, paid=green-bold, expired=red)

### Story 5.2: Quote Search, Filter & View Tracking

As a contractor,
I want to search my quotes by customer name and filter by trade or date,
So that I can quickly find specific quotes and track which customers have viewed my proposals.

**Acceptance Criteria:**

**Given** I am on the dashboard
**When** I type a customer name in the search field
**Then** the quote list filters in real-time to show only quotes matching that customer name

**Given** I am on the dashboard
**When** I select a trade filter (plumbing, electrical, HVAC, painting, or all)
**Then** the list shows only quotes for the selected trade

**Given** I am on the dashboard
**When** I select a date range filter
**Then** the list shows only quotes created within that date range

**Given** I combine search and filters (e.g., customer "Johnson" + trade "Plumbing")
**When** the filters are applied
**Then** results match ALL criteria (AND logic)

**Given** a customer opens their quote link
**When** the quote view page loads
**Then** the system records the view and updates the quote status to VIEWED (if currently SENT)
**And** the `viewedAt` timestamp is recorded on first view
**And** the contractor can see on the dashboard that the quote has been viewed

---

## Epic 6: Offline-First PWA

Contractors can install QuoteCraft on their home screen and create quotes without internet connectivity — with automatic sync when back online — making it reliable in basements, rural areas, and active construction sites where connectivity is spotty.

### Story 6.1: PWA Installation & Service Worker Setup

As a contractor,
I want to install QuoteCraft on my phone's home screen and have it load instantly,
So that it feels like a native app and is always one tap away.

**Acceptance Criteria:**

**Given** I am using QuoteCraft in a mobile browser
**When** I visit the app for the second time
**Then** I see a prompt to install the app on my home screen with a description of offline benefits

**Given** I install the PWA
**When** I open it from my home screen
**Then** the app launches in standalone mode (no browser chrome) within 1 second from service worker cache
**And** the PWA manifest provides proper app name, icons (192x192, 512x512), and theme color

**Given** the service worker is installed
**When** the app loads
**Then** the app shell, static assets, and trade template data are cached for offline access
**And** subsequent loads complete under 1 second from cache (NFR4)

**Given** I have the PWA installed
**When** I view the app header/nav
**Then** I see a clear visual indicator showing my current online/offline status

### Story 6.2: Offline Quote Creation & Storage

As a contractor,
I want to create and save quotes when I have no internet connection,
So that I can quote jobs in basements, rural sites, or anywhere without cell service.

**Acceptance Criteria:**

**Given** I am offline (no internet connectivity)
**When** I create a new quote, add line items, enter customer info, and tap save
**Then** the quote is saved to IndexedDB via Dexie.js with all data preserved
**And** I see a visual indicator that the quote is saved locally and pending sync

**Given** I am offline
**When** I access the line item library for my trade
**Then** the previously cached trade templates and line items are available for use

**Given** I am offline
**When** I capture a jobsite photo
**Then** the photo is compressed and stored as a blob in IndexedDB
**And** the photo thumbnail appears on the quote edit screen

**Given** I am offline
**When** I edit an existing locally-saved draft quote
**Then** my changes are saved to IndexedDB without error

**Given** I have offline quotes and the pending sync count shows in the UI
**When** I view the offline indicator
**Then** I see the number of quotes pending sync (e.g., "2 quotes pending sync")

### Story 6.3: Auto-Sync Engine

As a contractor,
I want my offline quotes to automatically sync to the server when I regain connectivity,
So that my data is backed up and accessible from other devices without manual action.

**Acceptance Criteria:**

**Given** I have quotes saved offline in IndexedDB
**When** my device regains internet connectivity
**Then** the sync engine automatically processes the sync queue in FIFO order
**And** each offline quote (with line items, customer info, notes, and deposit config) is sent to the server API
**And** photos stored as blobs in IndexedDB are uploaded to Cloudflare R2

**Given** the sync engine is processing
**When** a quote syncs successfully
**Then** the local IndexedDB record is updated with the server-generated ID and canonical state
**And** the pending sync count decrements
**And** the quote appears in the server-side dashboard

**Given** the sync engine encounters a network error during sync
**When** the error occurs
**Then** the failed item remains in the sync queue for retry on next connectivity
**And** no data is lost

**Given** a quote was created offline and then the same quote exists on the server (draft status)
**When** sync processes the conflict
**Then** the last-write-wins strategy applies for draft quotes
**And** the server state is authoritative for quotes in sent/signed/paid status

**Given** all pending items have synced
**When** the sync queue is empty
**Then** the offline indicator shows "All synced" or equivalent confirmation
**And** the sync achieves 99.9%+ success rate for valid quote data (NFR17)

---
stepsCompleted: [step-01-validate-prerequisites, step-02-design-epics, step-03-create-stories, step-04-final-validation]
inputDocuments: ["mvps/field-service-management/planning/prd.md", "mvps/field-service-management/planning/architecture.md"]
workflowType: 'epics'
project_name: 'Field Service Management for Solo/Micro Trades'
user_name: 'Root'
date: '2026-03-23'
status: 'complete'
completedAt: '2026-03-23'
---

# Field Service Management for Solo/Micro Trades - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Field Service Management for Solo/Micro Trades, decomposing the requirements from the PRD and Architecture into implementable stories organized by user value around the core workflow: **Quote > Schedule > Invoice > Get Paid**.

## Requirements Inventory

### Functional Requirements

FR1: Users can create quotes from pre-built trade-specific pricebook templates (HVAC, plumbing, electrical)
FR2: Users can add custom line items with labor, materials, and markup to any quote
FR3: Users can attach photos from the device camera to a quote for job site documentation
FR4: Users can send a branded PDF quote to a customer via SMS
FR5: Customers can approve a quote by tapping a link in the SMS message (no app install or account required)
FR6: Users can view the status of all sent quotes (sent, viewed, approved, declined, expired)
FR7: Users can duplicate a previous quote as a template for similar jobs
FR8: Users can customize their pricebook by adding, editing, or removing items and categories
FR9: Users can create, view, and manage jobs on a calendar interface
FR10: Users can drag-and-drop jobs to reschedule them on the calendar
FR11: The system sends automated SMS appointment reminders to customers (configurable timing)
FR12: Users can view a dispatch board showing all technicians' current assignments and locations
FR13: Users can assign and reassign jobs to specific technicians
FR14: Users can sync their job schedule with Google Calendar or Apple Calendar
FR15: Users can track job status through a defined lifecycle (quoted, scheduled, in-progress, complete, invoiced)
FR16: Users can capture photos on the job site and attach them to the job record
FR17: Users can capture a digital customer signature on the device screen
FR18: Users can add notes and work descriptions to a job record
FR19: Users can auto-generate an invoice from a completed job using the approved quote line items
FR20: The system generates professional branded invoices with the user's business logo, name, and license number
FR21: Users can send an invoice to a customer via SMS with an embedded payment link
FR22: Customers can pay an invoice via credit/debit card through the payment link (no app install or account required)
FR23: Users can accept card payments on-site through the mobile app
FR24: Users can track payment status for all invoices (sent, viewed, paid, partially paid, overdue)
FR25: Users can accept partial payments on an invoice
FR26: Users receive push notifications when a payment is received
FR27: Users can connect their QuickBooks Online account via OAuth
FR28: The system automatically syncs customers, invoices, and payments to QuickBooks Online on job completion and payment receipt
FR29: Users can view a sync status dashboard showing recent sync activity, successes, and errors
FR30: Users can manually trigger a re-sync for any failed transaction
FR31: The system prevents duplicate entries in QuickBooks by matching on unique identifiers
FR32: Users can create and edit customer contact records (name, phone, email, address)
FR33: Users can view a customer's complete job history and service records
FR34: Users can search and filter customers by name, address, or phone number
FR35: Users can import existing customers from a CSV file
FR36: Users can perform the entire core workflow (create quote, schedule job, complete job, generate invoice, capture payment intent) without internet connectivity
FR37: The system automatically syncs all offline-created data when internet connectivity is restored
FR38: The system resolves data conflicts from concurrent multi-device edits without user intervention
FR39: The system displays sync status (synced, pending, error) for all records
FR40: Users can sign up with email and phone number
FR41: Users can configure their business profile (business name, logo, license number, contact info)
FR42: Users can invite additional team members to the same account at no extra cost
FR43: Team members can log in on their own devices with access to shared schedules, jobs, and customer data
FR44: Office partners can view the team schedule on a web browser
FR45: Office partners can view invoice statuses and payment history on a web browser
FR46: Office partners can view QuickBooks sync status and errors on a web browser
FR47: The system sends push notifications to users for quote approvals, payment receipts, schedule changes, and sync errors
FR48: The system sends SMS messages to customers for quotes, appointment reminders, invoices, and payment confirmations
FR49: Users can configure SMS reminder timing (e.g., 24 hours before, 1 hour before)

### NonFunctional Requirements

NFR1: Core app actions (open quote form, save job, generate invoice) complete within 2 seconds on devices with mid-range specifications (e.g., iPhone 12, Samsung Galaxy A54)
NFR2: App cold start time < 3 seconds on supported devices
NFR3: Offline data operations (create, read, update) complete within 500ms
NFR4: Background sync completes all pending records within 30 seconds of connectivity restoration
NFR5: SMS delivery for quotes and invoices occurs within 60 seconds of user action (when online)
NFR6: All data stored on-device is encrypted at rest using platform-native encryption (iOS Keychain / Android Keystore)
NFR7: All data transmitted between app and server uses TLS 1.3
NFR8: Payment card data is never stored on-device or on our servers — processing delegated to PCI-DSS Level 1 compliant payment processor (Stripe)
NFR9: User authentication tokens expire after 30 days of inactivity
NFR10: Customer-facing links (quote approval, payment) expire after 30 days
NFR11: Backend supports 50,000 concurrent users without degradation
NFR12: Sync engine handles 1,000 sync operations per second at peak
NFR13: Database supports 15,000+ active accounts with 100+ jobs per account per month
NFR14: Cloud services maintain 99.9% uptime (< 8.76 hours downtime per year)
NFR15: Zero data loss from offline-to-online sync operations (99.9%+ sync success rate)
NFR16: QuickBooks sync accuracy of 99.9%+ (zero duplicate transactions under normal operation)
NFR17: Automated monitoring alerts for sync failure rates exceeding 0.1%
NFR18: QuickBooks Online API integration supports API version changes with < 48 hours remediation
NFR19: SMS delivery achieves 98%+ delivery rate via Tier 1 SMS provider (Twilio)
NFR20: Payment processing supports Visa, Mastercard, American Express, and Discover via Stripe
NFR21: Calendar sync supports Google Calendar API v3 and Apple EventKit

### Additional Requirements

- **Starter Template**: Architecture specifies Expo (React Native) for mobile, Node.js + Express + Prisma + PostgreSQL for API, Next.js for web dashboard. Monorepo with npm workspaces.
- **Offline-First Database**: WatermelonDB (SQLite-backed) for local-first mobile data. All mobile data operations go through WatermelonDB — never direct API calls for CRUD.
- **Cloud Database**: PostgreSQL 16 via Supabase with Row Level Security for account isolation.
- **Authentication**: Supabase Auth with email/password and phone/OTP. JWT tokens (1h access, 30-day refresh).
- **Sync Engine**: Event-sourced sync model using WatermelonDB sync protocol. Push/pull API endpoints. Last-write-wins for scalar fields, merge for collection fields.
- **Payment Processing**: Stripe for PCI-DSS compliance. Stripe Terminal for on-site payments. Stripe Payment Links for remote payments.
- **SMS Provider**: Twilio for all customer-facing SMS (quotes, reminders, invoices, confirmations).
- **QuickBooks Integration**: Direct Intuit API (not unified API layer) for maximum sync accuracy control.
- **PDF Generation**: @react-pdf/renderer on API server for branded quote and invoice PDFs.
- **Push Notifications**: Expo Push Notifications for iOS (APNs) and Android (FCM).
- **File Storage**: Supabase Storage (S3-compatible) for photos, logos, and generated PDFs.
- **Monitoring**: Sentry for error tracking across all packages.
- **CI/CD**: GitHub Actions for API (Railway), web (Vercel), mobile (EAS Build/Submit).
- **Money stored as integer cents**, dates as ISO 8601 UTC strings, IDs as UUIDs.
- **Feature-based code organization** with co-located tests.

### FR Coverage Map

FR1: Epic 2 - Quote creation from trade pricebook templates
FR2: Epic 2 - Custom line items with labor, materials, markup
FR3: Epic 2 - Photo attachments on quotes
FR4: Epic 2 - Branded PDF quote delivery via SMS
FR5: Epic 2 - Customer quote approval via SMS link
FR6: Epic 2 - Quote status tracking
FR7: Epic 2 - Quote duplication
FR8: Epic 1 - Pricebook customization during onboarding
FR9: Epic 3 - Calendar interface for job management
FR10: Epic 3 - Drag-and-drop rescheduling
FR11: Epic 3 - Automated SMS appointment reminders
FR12: Epic 8 - Dispatch board for multi-tech shops
FR13: Epic 8 - Job assignment to technicians
FR14: Epic 3 - Google/Apple Calendar sync
FR15: Epic 3 - Job status lifecycle tracking
FR16: Epic 3 - On-site photo capture on jobs
FR17: Epic 3 - Digital customer signature capture
FR18: Epic 3 - Job notes and work descriptions
FR19: Epic 4 - Auto-generate invoice from completed job
FR20: Epic 4 - Professional branded invoices
FR21: Epic 4 - Invoice delivery via SMS with payment link
FR22: Epic 4 - Customer card payment via link
FR23: Epic 4 - On-site card payment via mobile app
FR24: Epic 4 - Payment status tracking
FR25: Epic 4 - Partial payment support
FR26: Epic 4 - Push notification on payment received
FR27: Epic 7 - QuickBooks OAuth connection
FR28: Epic 7 - Automatic sync of customers, invoices, payments
FR29: Epic 7 - Sync status dashboard
FR30: Epic 7 - Manual re-sync for failed transactions
FR31: Epic 7 - Duplicate prevention in QuickBooks
FR32: Epic 2 - Customer contact record creation and editing
FR33: Epic 5 - Customer job history view
FR34: Epic 5 - Customer search and filter
FR35: Epic 5 - Customer CSV import
FR36: Epic 6 - Full offline core workflow
FR37: Epic 6 - Automatic sync on reconnection
FR38: Epic 6 - Conflict resolution for multi-device edits
FR39: Epic 6 - Sync status display per record
FR40: Epic 1 - User signup with email and phone
FR41: Epic 1 - Business profile configuration
FR42: Epic 8 - Team member invites
FR43: Epic 8 - Team member login and shared access
FR44: Epic 8 - Web dashboard schedule view
FR45: Epic 8 - Web dashboard invoice status view
FR46: Epic 8 - Web dashboard sync status view
FR47: Epics 2, 3, 4, 6 - Push notifications (distributed across features)
FR48: Epics 2, 3, 4 - SMS to customers (distributed across features)
FR49: Epic 3 - Configurable SMS reminder timing

## Epic List

### Epic 1: Project Foundation & User Onboarding
Users can sign up, configure their trade business, and have a customized pricebook ready — going from download to work-ready in under an hour.
**FRs covered:** FR40, FR41, FR8

### Epic 2: Quoting & Estimates
Users can create professional quotes from their pricebook, attach job site photos, and send branded PDF quotes to customers via SMS for one-tap approval.
**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR32, FR47 (quote approval notification), FR48 (quote SMS)

### Epic 3: Scheduling & Job Management
Users can schedule jobs on a calendar, track job status through completion, capture on-site documentation, and send automated appointment reminders.
**FRs covered:** FR9, FR10, FR11, FR14, FR15, FR16, FR17, FR18, FR47 (schedule change notification), FR48 (reminder SMS), FR49

### Epic 4: Invoicing & Payments
Users can generate invoices from completed jobs, send them via SMS, and collect card payments both on-site and via payment links.
**FRs covered:** FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR47 (payment notification), FR48 (invoice/payment SMS)

### Epic 5: Customer Management & Service History
Users can manage their customer database with search and filtering, view complete service history per customer, and bulk-import existing customers.
**FRs covered:** FR33, FR34, FR35

### Epic 6: Offline-First Reliability & Data Sync
The entire core workflow operates without internet connectivity, with automatic background sync, conflict resolution, and visible sync status on all records.
**FRs covered:** FR36, FR37, FR38, FR39, FR47 (sync error notification)

### Epic 7: QuickBooks Online Integration
Users can connect QuickBooks Online and have customers, invoices, and payments sync automatically with zero duplicate entries and full error visibility.
**FRs covered:** FR27, FR28, FR29, FR30, FR31

### Epic 8: Team Collaboration & Web Dashboard
Shop owners can invite unlimited team members, view a dispatch board, assign jobs, and office partners can monitor schedule, invoices, and sync status from a web browser.
**FRs covered:** FR12, FR13, FR42, FR43, FR44, FR45, FR46

---

## Epic 1: Project Foundation & User Onboarding

Users can sign up, configure their trade business, and have a customized pricebook ready — going from download to work-ready in under an hour. This epic establishes the monorepo, mobile app scaffold, API server, authentication, and the offline-first data layer that all subsequent epics build upon.

### Story 1.1: Initialize Monorepo and Project Scaffolding

As a developer,
I want the project initialized as a monorepo with mobile app, API server, web dashboard, and shared types package,
So that all subsequent development has a consistent, working foundation.

**Acceptance Criteria:**

**Given** a fresh project checkout
**When** `npm install` is run at the monorepo root
**Then** all four packages (apps/mobile, apps/api, apps/web, packages/shared) install their dependencies successfully

**Given** the monorepo is initialized
**When** TypeScript compilation is run across all packages
**Then** all packages compile without errors using strict mode and shared tsconfig.base.json

**Given** the mobile app package exists
**When** the Expo development server is started
**Then** the app launches successfully in Expo Go on iOS and Android simulators

**Given** the API server package exists
**When** the Express server is started
**Then** it responds to a health check endpoint at GET /api/v1/health with 200 OK

**Given** the shared package exists
**When** types are imported from @field-service/shared in any other package
**Then** TypeScript resolves the imports correctly with full type checking

**Given** the project scaffolding is complete
**When** Prisma is initialized in the API package
**Then** a schema.prisma file exists with PostgreSQL provider configuration and the Supabase connection string references an environment variable

**Given** the mobile app is scaffolded
**When** WatermelonDB is configured
**Then** the database initializes on app launch with an empty schema ready for model definitions

### Story 1.2: User Registration and Authentication

As a solo tradesperson,
I want to sign up with my email and phone number and log in securely,
So that I have a personal account to manage my business.

**Acceptance Criteria:**

**Given** the app is launched for the first time
**When** a user enters their email, phone number, and password and taps "Sign Up"
**Then** a new account is created via Supabase Auth and the user is logged in with a JWT stored securely in the device keychain

**Given** a registered user opens the app
**When** they enter their email and password and tap "Log In"
**Then** they are authenticated and directed to the main app with their account data loaded

**Given** a user is logged in
**When** 30 days pass without any app activity
**Then** the refresh token expires and the user must log in again (NFR9)

**Given** a user is logged in on the mobile app
**When** the auth token is transmitted to the API server
**Then** all communication uses TLS 1.3 (NFR7) and the JWT is validated via Supabase Auth middleware

**Given** an invalid email or weak password is entered
**When** the user taps "Sign Up"
**Then** specific validation errors are displayed inline (not raw error messages) and signup is prevented

**Given** the API server receives an unauthenticated request
**When** no valid JWT is present in the Authorization header
**Then** the server returns a 401 error with code "UNAUTHORIZED" in the standard error response format

### Story 1.3: Business Profile Setup and Onboarding

As a new user,
I want to configure my business profile and select my trade during onboarding,
So that my quotes and invoices display my professional business information.

**Acceptance Criteria:**

**Given** a user has just completed registration
**When** they are directed to the onboarding flow
**Then** they see a trade selection screen with three options: HVAC, Plumbing, Electrical

**Given** the user selects a trade type
**When** they proceed to the next onboarding step
**Then** they can enter their business name, upload a business logo (via camera or gallery), enter their license number, and set contact information

**Given** the user completes the business profile form
**When** they save their profile
**Then** the account record is created in WatermelonDB with business_name, business_logo_url, license_number, contact_email, contact_phone, and trade_type fields persisted
**And** the business logo is uploaded to Supabase Storage and the URL is stored on the account record

**Given** a user has completed onboarding
**When** they access settings later
**Then** they can view and edit all business profile fields

**Given** the onboarding flow
**When** measuring total time from registration to profile completion
**Then** a typical user completes the flow in under 15 minutes

### Story 1.4: Trade-Specific Pricebook Templates

As a tradesperson,
I want a pre-built pricebook for my trade loaded automatically during onboarding,
So that I can start creating quotes immediately without manual data entry.

**Acceptance Criteria:**

**Given** a user selects "HVAC" as their trade during onboarding
**When** the pricebook template is loaded
**Then** the local database is populated with HVAC-specific pricebook items organized by categories (e.g., Diagnostics, Refrigerant, Motors, Capacitors, Installation) with default unit prices in cents

**Given** a user selects "Plumbing" as their trade during onboarding
**When** the pricebook template is loaded
**Then** plumbing-specific items are loaded (e.g., Drain Clearing, Pipe Repair, Fixture Installation, Water Heater) with appropriate default pricing

**Given** a user selects "Electrical" as their trade during onboarding
**When** the pricebook template is loaded
**Then** electrical-specific items are loaded (e.g., Panel Upgrade, Outlet Installation, Wiring, Lighting, Breakers) with appropriate default pricing

**Given** a user has a loaded pricebook
**When** they navigate to pricebook settings
**Then** they can add new items, edit existing item names/descriptions/prices, remove items, and add or rename categories (FR8)

**Given** pricebook items exist in WatermelonDB
**When** the user creates a quote
**Then** they can browse and select items from their pricebook organized by category

---

## Epic 2: Quoting & Estimates

Users can create professional quotes from their pricebook, attach job site photos, send branded PDF quotes to customers via SMS, and receive one-tap approvals — enabling the first step of the core workflow.

### Story 2.1: Customer Creation and Contact Management

As a tradesperson,
I want to create and manage customer contact records,
So that I can associate quotes and jobs with specific customers.

**Acceptance Criteria:**

**Given** the user is on the customer list screen
**When** they tap "Add Customer"
**Then** they see a form with fields for name, phone, email, address (line1, line2, city, state, zip), and notes

**Given** the user fills in at least a customer name and phone number
**When** they tap "Save"
**Then** a customer record is created in WatermelonDB with a UUID and all entered fields persisted

**Given** customer records exist
**When** the user views the customer list
**Then** customers are displayed in a scrollable list with name, phone, and address visible on each card

**Given** the user taps on a customer record
**When** the customer detail screen loads
**Then** they can edit any customer field and save changes to WatermelonDB

**Given** the user is creating a quote or job
**When** they need to select a customer
**Then** they can search existing customers by name or phone, or create a new customer inline without leaving the creation flow

### Story 2.2: Quote Creation with Line Items

As a tradesperson,
I want to create detailed quotes by selecting pricebook items and adding custom line items,
So that I can provide accurate pricing to customers quickly.

**Acceptance Criteria:**

**Given** the user taps "Create Quote" and selects a customer
**When** the quote creation form opens
**Then** they see an empty quote with the customer's information pre-filled and can browse their pricebook to add line items

**Given** the user selects a pricebook item
**When** it is added to the quote
**Then** the line item shows the item description, default unit price, quantity (defaulting to 1), and calculated line total
**And** the user can adjust quantity and override the unit price

**Given** the user needs a non-pricebook item
**When** they tap "Add Custom Item"
**Then** they can enter a description, unit price (in dollars, stored as cents), quantity, and the line total is calculated automatically (FR2)

**Given** a quote has one or more line items
**When** the user views the quote summary
**Then** subtotal, tax amount, and total are calculated and displayed correctly with all money values stored as integer cents internally

**Given** the user has a previous similar quote
**When** they select "Duplicate Quote" on an existing quote
**Then** a new draft quote is created with the same customer, line items, and notes, ready for modification (FR7)

**Given** a quote is created or modified
**When** the user saves it
**Then** the quote record with status DRAFT and all associated line_items records are persisted to WatermelonDB with UUIDs and sort_order preserved

**Given** the user views their quotes list
**When** filtering by status
**Then** they can see all quotes organized by status: Draft, Sent, Viewed, Approved, Declined, Expired (FR6)

### Story 2.3: Quote Photo Attachments and PDF Generation

As a tradesperson,
I want to attach job site photos to my quotes and generate professional branded PDFs,
So that customers see the issue and receive a polished, trustworthy estimate.

**Acceptance Criteria:**

**Given** the user is editing a quote
**When** they tap "Add Photo"
**Then** the device camera opens and the captured photo is compressed (max 1200px width, 80% JPEG quality), stored locally, and attached to the quote (FR3)

**Given** a quote has photos attached
**When** the user views the quote
**Then** attached photos are displayed in a gallery view on the quote detail screen

**Given** a quote is finalized by the user
**When** the system generates a PDF
**Then** the PDF includes the user's business logo, business name, license number, customer info, all line items with descriptions and prices, subtotal, tax, total, attached photos, and any notes (FR4, FR20)

**Given** a PDF is generated
**When** it is stored
**Then** the PDF is uploaded to Supabase Storage and a signed URL is associated with the quote record

**Given** photo attachments are captured offline
**When** connectivity is restored
**Then** photos are uploaded to Supabase Storage via the sync process and URLs are updated on the records

### Story 2.4: Quote SMS Delivery and Customer Approval

As a tradesperson,
I want to send quotes to customers via text message and have them approve with one tap,
So that I get faster approvals without phone tag or email delays.

**Acceptance Criteria:**

**Given** a quote is finalized with line items and optional photos
**When** the user taps "Send Quote"
**Then** an SMS is sent to the customer's phone number via Twilio containing a short message and a signed URL link to view and approve the quote (FR4, FR48)
**And** the quote status changes to SENT with sent_at timestamp recorded

**Given** a customer receives the SMS
**When** they tap the link
**Then** they see the branded PDF quote in a mobile-friendly web page (no app install required) with an "Approve" button and a "Decline" button (FR5)
**And** the quote status changes to VIEWED

**Given** the customer taps "Approve" on the web page
**When** the approval is processed
**Then** the quote status changes to APPROVED with approved_at timestamp, and a push notification is sent to the tradesperson's device (FR47)

**Given** the customer taps "Decline"
**When** the decline is processed
**Then** the quote status changes to DECLINED and the tradesperson receives a push notification

**Given** a quote was sent 30 days ago
**When** no customer action has been taken
**Then** the quote status automatically changes to EXPIRED and the signed URL is no longer valid (NFR10)

**Given** SMS delivery is attempted
**When** the system is online
**Then** SMS is delivered within 60 seconds via Twilio (NFR5, NFR19)

---

## Epic 3: Scheduling & Job Management

Users can schedule jobs on a calendar, track job progress through completion, capture on-site photos and customer signatures, and send automated appointment reminders — managing their entire workday from the app.

### Story 3.1: Calendar View and Job Scheduling

As a tradesperson,
I want to view and manage my schedule on a calendar and schedule jobs with specific times,
So that I can plan my workday efficiently.

**Acceptance Criteria:**

**Given** the user navigates to the Schedule tab
**When** the calendar view loads
**Then** they see a day view by default showing time slots with any existing scheduled jobs displayed as event cards with customer name, job title, and time range

**Given** the user taps on an empty time slot or taps "Schedule Job"
**When** the job scheduling form opens
**Then** they can select a customer, set a title, choose start and end times, and optionally link the job to an existing approved quote

**Given** a job is scheduled
**When** the user saves it
**Then** a job record (status SCHEDULED) and a schedule_event record are created in WatermelonDB with the specified times and customer association

**Given** scheduled jobs exist on the calendar
**When** the user drags a job event to a different time slot
**Then** the schedule_event start_time and end_time are updated to the new position (FR10)

**Given** the user wants external calendar visibility
**When** they enable Google Calendar or Apple Calendar sync in settings
**Then** scheduled jobs appear as events in their external calendar and changes sync bidirectionally (FR14, NFR21)

### Story 3.2: Job Lifecycle and Status Tracking

As a tradesperson,
I want to track each job through its lifecycle from quoted to complete,
So that I always know the status of every job and nothing falls through the cracks.

**Acceptance Criteria:**

**Given** an approved quote exists
**When** the user creates a job from the quote
**Then** a new job record is created with status QUOTED, linked to the quote and customer, with the quote line items available for reference

**Given** a job with status QUOTED or SCHEDULED
**When** the user taps "Start Job"
**Then** the job status transitions to IN_PROGRESS

**Given** a job with status IN_PROGRESS
**When** the user taps "Complete Job"
**Then** the job status transitions to COMPLETE with completed_at timestamp recorded

**Given** the jobs list screen
**When** the user views their jobs
**Then** jobs are displayed with a color-coded status badge (FR15) showing the current lifecycle stage and can be filtered by status

**Given** a job record
**When** the user adds or edits notes
**Then** the notes and work descriptions are saved to the job record in WatermelonDB (FR18)

**Given** any job status transition
**When** it occurs
**Then** only valid forward transitions are allowed (QUOTED → SCHEDULED → IN_PROGRESS → COMPLETE → INVOICED) and invalid transitions are prevented

### Story 3.3: On-Site Photo Documentation and Signature Capture

As a tradesperson,
I want to capture before/after photos and get customer signatures on my phone,
So that I have documentation for completed work and proof of customer acceptance.

**Acceptance Criteria:**

**Given** a job is in any active status (SCHEDULED, IN_PROGRESS, COMPLETE)
**When** the user taps "Add Photo" on the job detail screen
**Then** the device camera opens and the captured photo is compressed, stored locally as a job_photo record linked to the job with a caption field and taken_at timestamp (FR16)

**Given** a job has photos attached
**When** the user views the job detail
**Then** photos are displayed in a scrollable gallery with captions and timestamps

**Given** a job is being completed
**When** the user taps "Capture Signature"
**Then** a full-screen signature pad opens where the customer can sign with their finger (FR17)

**Given** a customer draws their signature on the pad
**When** the user taps "Save Signature"
**Then** the signature is saved as an image, stored locally, and the signature_url is set on the job record

**Given** photos and signatures are captured offline
**When** connectivity is restored
**Then** the image files are uploaded to Supabase Storage and the URLs on the records are updated via sync

### Story 3.4: Automated SMS Appointment Reminders

As a tradesperson,
I want the system to automatically text my customers before their appointments,
So that I have fewer no-shows and don't have to remember to call each customer.

**Acceptance Criteria:**

**Given** a job is scheduled with a future start time
**When** the configured reminder time is reached (e.g., 24 hours before)
**Then** an SMS is sent to the customer via Twilio with the appointment date, time, and business name (FR11, FR48)
**And** the schedule_event reminder_sent flag is set to true

**Given** the user wants to configure reminder timing
**When** they navigate to notification settings
**Then** they can select reminder timing options: 24 hours before, 2 hours before, 1 hour before, or multiple reminders (FR49)

**Given** a job is rescheduled after a reminder was already sent
**When** the new time is saved
**Then** the reminder_sent flag is reset and a new reminder is scheduled for the updated time

**Given** the API server processes reminder jobs
**When** a batch of reminders is due
**Then** SMS messages are sent via Twilio within 60 seconds (NFR5) with 98%+ delivery rate (NFR19)

---

## Epic 4: Invoicing & Payments

Users can generate professional invoices from completed jobs, send them via text with a payment link, and collect card payments both on-site and remotely — completing the Quote > Schedule > Invoice > **Get Paid** workflow.

### Story 4.1: Invoice Generation from Completed Jobs

As a tradesperson,
I want to automatically generate a professional invoice from a completed job,
So that I can bill customers immediately without re-entering any information.

**Acceptance Criteria:**

**Given** a job has status COMPLETE with an associated approved quote
**When** the user taps "Generate Invoice"
**Then** an invoice record is created in WatermelonDB with all line items from the quote, subtotal, tax, and total calculated, and status set to DRAFT (FR19)
**And** the job status transitions to INVOICED

**Given** an invoice is generated
**When** the system creates the PDF
**Then** the invoice PDF includes the business logo, business name, license number, invoice number, customer info, all line items, subtotal, tax, total, and due date (FR20)
**And** the PDF is uploaded to Supabase Storage with a signed URL stored on the invoice record

**Given** an invoice exists in DRAFT status
**When** the user views the invoice
**Then** they can review all details and make minor adjustments before sending

**Given** invoice data is stored
**When** money values are persisted
**Then** all amounts (subtotal, tax_amount, total, amount_paid) are stored as integer cents with display formatting applied only in the UI

### Story 4.2: Invoice SMS Delivery and Payment Links

As a tradesperson,
I want to text my invoice to the customer with a payment link,
So that they can pay instantly from their phone without writing a check or calling with card info.

**Acceptance Criteria:**

**Given** an invoice is ready to send
**When** the user taps "Send Invoice"
**Then** an SMS is sent to the customer via Twilio containing the invoice amount and a signed URL payment link (FR21, FR48)
**And** the invoice status changes to SENT with sent_at timestamp

**Given** a customer receives the SMS
**When** they tap the payment link
**Then** they see the invoice details and a Stripe-powered payment form accepting Visa, Mastercard, American Express, and Discover (FR22, NFR20) — no app install or account required

**Given** the customer completes payment via the link
**When** Stripe processes the payment
**Then** a payment record is created with status SUCCEEDED, the invoice status updates to PAID with paid_at timestamp, and amount_paid is updated
**And** a push notification is sent to the tradesperson (FR26, FR47)
**And** an SMS payment confirmation is sent to the customer (FR48)

**Given** a payment link was sent
**When** 30 days pass without payment
**Then** the signed URL expires and the invoice status changes to OVERDUE (NFR10)

### Story 4.3: On-Site Card Payment Processing

As a tradesperson,
I want to accept card payments on-site through my phone,
So that I can get paid immediately when the job is done.

**Acceptance Criteria:**

**Given** an invoice exists for a completed job
**When** the user taps "Collect Payment" on-site
**Then** a Stripe payment form opens in the mobile app where the customer can enter their card details (FR23)

**Given** the customer enters valid card information
**When** the payment is submitted via Stripe SDK
**Then** a Stripe PaymentIntent is created and processed, no card data is stored on-device or our servers (NFR8), and the payment result is returned

**Given** a successful on-site payment
**When** Stripe confirms the charge
**Then** a payment record is created with payment_method CARD_ON_SITE and status SUCCEEDED, the invoice amount_paid is updated, and the tradesperson sees a success confirmation

**Given** a payment fails (declined card, network error)
**When** the error is returned
**Then** a user-friendly error message is displayed (never raw Stripe errors) and the user can retry or try a different payment method

### Story 4.4: Payment Tracking and Partial Payments

As a tradesperson,
I want to track all my invoice and payment statuses and accept partial payments,
So that I always know who owes me money and can handle deposit-based jobs.

**Acceptance Criteria:**

**Given** invoices exist in various statuses
**When** the user views the invoices list
**Then** invoices are displayed with color-coded status badges (Draft, Sent, Viewed, Paid, Partially Paid, Overdue) and the outstanding amount is clearly shown (FR24)

**Given** an invoice has a total of $1,500
**When** the customer pays $500 via the payment link or on-site
**Then** a payment record for $500 (50000 cents) is created, the invoice amount_paid updates to 50000, and the status changes to PARTIALLY_PAID (FR25)

**Given** a partially paid invoice
**When** additional payments are made that bring amount_paid to equal total
**Then** the invoice status changes to PAID and paid_at is recorded

**Given** any payment is received (full or partial)
**When** the payment webhook fires or on-site payment succeeds
**Then** a push notification is sent to the tradesperson with the amount received (FR26)

**Given** the tradesperson is using the app on a workday
**When** they check their payment status
**Then** they see a summary of total outstanding, total received today, and any overdue invoices

---

## Epic 5: Customer Management & Service History

Users can manage their full customer database with search and filtering, view complete service history per customer, and bulk-import existing customer lists — making the app the single source of truth for customer relationships.

### Story 5.1: Customer Job History and Service Records

As a tradesperson,
I want to see a customer's complete service history when I visit their property,
So that I know what work was done previously and can provide better service.

**Acceptance Criteria:**

**Given** a customer has had multiple jobs completed
**When** the user views the customer detail screen
**Then** a "Service History" section shows all jobs for that customer in reverse chronological order, including job title, date, status, and invoice total (FR33)

**Given** the user taps on a historical job in the service history
**When** the job detail loads
**Then** they see the full job record including photos, notes, signature, and linked invoice/payment status

**Given** a customer has no previous jobs
**When** the user views the customer detail screen
**Then** the service history section shows an empty state with a prompt to "Create First Quote"

### Story 5.2: Customer Search and Filtering

As a tradesperson,
I want to quickly find customers by name, address, or phone number,
So that I can pull up their info instantly when they call or when I'm on-site.

**Acceptance Criteria:**

**Given** the user is on the customer list screen
**When** they type in the search bar
**Then** results filter in real-time matching against customer name, phone number, and address fields (FR34)
**And** search operates against WatermelonDB local data with results appearing within 500ms (NFR3)

**Given** the user searches for a partial phone number like "555"
**When** results are displayed
**Then** all customers with "555" in their phone number are shown

**Given** the user searches for an address fragment like "Oak St"
**When** results are displayed
**Then** all customers with "Oak St" in any address field are shown

### Story 5.3: Customer CSV Import

As a tradesperson switching from another tool,
I want to import my existing customer list from a CSV file,
So that I don't have to re-enter hundreds of customer records manually.

**Acceptance Criteria:**

**Given** the user navigates to Settings > Import Customers
**When** they select a CSV file from their device
**Then** the system parses the CSV and displays a preview of the first 5 rows with detected column mapping (FR35)

**Given** the CSV columns are mapped to customer fields (name, phone, email, address_line1, city, state, zip)
**When** the user confirms the import
**Then** customer records are created in WatermelonDB for each valid row with UUIDs generated

**Given** some CSV rows have invalid or missing data (e.g., no name)
**When** the import processes
**Then** valid rows are imported successfully, invalid rows are skipped, and a summary shows the count of imported vs. skipped records with reasons

**Given** the import contains a customer with a phone number matching an existing record
**When** duplicate detection runs
**Then** the user is notified of the duplicate and can choose to skip or update the existing record

---

## Epic 6: Offline-First Reliability & Data Sync

The entire core workflow operates without internet connectivity — creating quotes, scheduling jobs, completing work, and generating invoices all work in basements, crawlspaces, and rural areas. Data syncs automatically when connectivity returns with conflict resolution for multi-device scenarios.

### Story 6.1: Offline Core Workflow and Network Detection

As a tradesperson working in areas with poor signal,
I want to use every feature of the app without internet,
So that I never lose work or have to redo data entry because of a dead zone.

**Acceptance Criteria:**

**Given** the device has no internet connectivity
**When** the user creates a quote with line items, schedules a job, marks a job complete, captures photos and signatures, and generates an invoice
**Then** all operations complete successfully using WatermelonDB local storage with all data persisted on-device (FR36)
**And** each operation completes within 500ms (NFR3)

**Given** the app detects network status changes
**When** connectivity is lost
**Then** a subtle network indicator appears in the header (yellow dot with pending count) and all features continue to work identically

**Given** the app is offline
**When** the user performs any create or update operation
**Then** the record is saved to WatermelonDB with synced_at remaining null and a "pending sync" badge visible on the record (FR39)

**Given** device storage contains customer data and payment-adjacent records
**When** data is at rest on the device
**Then** all data is encrypted using platform-native encryption — iOS Keychain / Android Keystore (NFR6)

### Story 6.2: Automatic Background Sync with Conflict Resolution

As a shop owner with multiple technicians using the app,
I want offline data to sync automatically and handle conflicts when two people edit the same record,
So that no data is ever lost and I don't have to manually fix sync issues.

**Acceptance Criteria:**

**Given** the device was offline and has pending changes
**When** internet connectivity is restored
**Then** the sync engine automatically pushes all pending changes to the server and pulls any remote changes, completing within 30 seconds (FR37, NFR4)

**Given** two devices edited the same customer's phone number while offline
**When** both devices sync
**Then** last-write-wins conflict resolution applies based on updated_at timestamps — the most recent edit is kept (FR38)

**Given** two devices added separate job notes to the same job while offline
**When** both devices sync
**Then** both notes are merged (collection merge strategy) — no data is lost from either device (FR38)

**Given** the sync engine encounters a transient network error
**When** the push or pull fails
**Then** exponential backoff retry is applied (1s, 2s, 4s, 8s, max 30s) up to 5 retries before marking the sync as failed

**Given** sync operations complete
**When** results are processed
**Then** zero data loss occurs from offline-to-online sync (NFR15: 99.9%+ sync success rate)

**Given** the app is brought to foreground or connectivity changes
**When** sync is triggered
**Then** the sync process runs in the background respecting OS battery optimization restrictions

### Story 6.3: Sync Status Display and Error Reporting

As a tradesperson,
I want to see which records have synced and be alerted to any sync problems,
So that I have confidence my data is safe and backed up.

**Acceptance Criteria:**

**Given** records exist in various sync states
**When** the user views any list screen (quotes, jobs, invoices, customers)
**Then** each record displays a sync status indicator: synced (green check), pending (yellow spinner), or error (red warning) (FR39)

**Given** the app header area
**When** the user is online with all records synced
**Then** a subtle green dot indicator shows "all synced" status

**Given** the app header area
**When** the user is online with pending sync items
**Then** a yellow dot with the count of pending items is displayed

**Given** a sync error occurs
**When** the error is detected
**Then** a push notification alerts the user (FR47) and the affected records show an error badge with a "Retry Sync" option

**Given** the user navigates to Settings > Sync Status
**When** the sync log screen loads
**Then** they see recent sync activity including timestamps, records pushed/pulled, conflicts resolved, and any errors

---

## Epic 7: QuickBooks Online Integration

Users can connect their QuickBooks Online account and have customers, invoices, and payments sync automatically — eliminating double data entry and achieving 99.9%+ sync accuracy with zero duplicate transactions.

### Story 7.1: QuickBooks OAuth Connection

As a tradesperson or their bookkeeper,
I want to connect my QuickBooks Online account with a simple two-tap flow,
So that my financial data stays in sync without manual entry.

**Acceptance Criteria:**

**Given** the user navigates to Settings > QuickBooks
**When** they tap "Connect QuickBooks"
**Then** the Intuit OAuth 2.0 authorization flow opens in an in-app browser where they log in and grant access (FR27)

**Given** the user completes the OAuth flow
**When** Intuit redirects back to the app
**Then** the OAuth tokens (access + refresh) are securely stored on the server (never on-device), the account's quickbooks_connected flag is set to true, and the quickbooks_realm_id is recorded

**Given** a connected QuickBooks account
**When** the user views the QuickBooks settings screen
**Then** they see a "Connected" status with the QuickBooks company name and a "Disconnect" option

**Given** the OAuth access token expires
**When** a sync operation is attempted
**Then** the server automatically refreshes the token using the refresh token without user intervention

### Story 7.2: Automatic Customer, Invoice, and Payment Sync

As a tradesperson,
I want my customers, invoices, and payments to sync to QuickBooks automatically when work is completed,
So that my bookkeeper sees accurate financials without me doing anything.

**Acceptance Criteria:**

**Given** QuickBooks is connected and a new customer record is created
**When** the customer data syncs to the server
**Then** the customer is automatically created in QuickBooks with name, email, phone, and address, and the quickbooks_customer_id is stored on our customer record (FR28)

**Given** a job is completed and an invoice is generated
**When** the invoice syncs to the server
**Then** the invoice is automatically created in QuickBooks with the correct customer reference, line items, amounts, and due date, and the quickbooks_invoice_id is stored (FR28)

**Given** a payment is received (on-site or via link)
**When** the payment syncs to the server
**Then** the payment is automatically recorded in QuickBooks against the correct invoice with the correct amount, and the quickbooks_payment_id is stored (FR28)

**Given** the system attempts to sync an entity that already exists in QuickBooks
**When** duplicate detection runs
**Then** the duplicate is prevented by matching on unique identifiers (quickbooks_customer_id, quickbooks_invoice_id, quickbooks_payment_id) and no duplicate entries are created (FR31, NFR16)

**Given** QuickBooks sync operations run
**When** measuring accuracy over time
**Then** 99.9%+ of transactions sync correctly without manual intervention or duplicate entries (NFR16)

### Story 7.3: Sync Status Dashboard and Manual Re-Sync

As a bookkeeper managing multiple trades clients,
I want to see a dashboard of all QuickBooks sync activity and retry any failures,
So that I can verify data accuracy and fix issues without contacting support.

**Acceptance Criteria:**

**Given** the user or bookkeeper navigates to the QuickBooks sync status view
**When** the dashboard loads
**Then** they see a list of recent sync events showing entity type (Customer, Invoice, Payment), entity name/number, sync direction, status (Success, Failed, Duplicate Prevented), and timestamp (FR29)

**Given** a sync event has status "Failed"
**When** the user taps on the failed event
**Then** they see the error message and a "Retry Sync" button (FR30)

**Given** the user taps "Retry Sync" on a failed transaction
**When** the re-sync is attempted
**Then** the system retries syncing the specific entity to QuickBooks and updates the sync status accordingly

**Given** sync failure rates exceed 0.1%
**When** the monitoring system detects the threshold
**Then** an automated alert is triggered (NFR17) and the user receives a push notification about sync issues

**Given** the QuickBooks API version changes or has breaking updates
**When** the integration is affected
**Then** the system is designed to support remediation within 48 hours via isolated quickbooks-service module (NFR18)

---

## Epic 8: Team Collaboration & Web Dashboard

Shop owners can invite unlimited team members at no extra cost, view a dispatch board to manage multi-tech crews, assign jobs to specific technicians, and office partners can monitor the business from a web browser — supporting the growth from solo operator to 2-5 person shop.

### Story 8.1: Team Member Invites and Multi-Device Access

As a shop owner,
I want to invite my techs and office partner to the same account for free,
So that everyone on my team can access shared schedules, jobs, and customers from their own phones.

**Acceptance Criteria:**

**Given** the user is the account owner
**When** they navigate to Settings > Team and tap "Invite Member"
**Then** they can enter the team member's name, email, and phone number and send an invite (FR42)

**Given** an invite is sent
**When** the team member receives the invitation email
**Then** they can sign up with their own credentials and are automatically linked to the same account with role MEMBER

**Given** a team member logs in on their own device
**When** the app loads and syncs
**Then** they see all shared data — schedules, jobs, customers, quotes, and invoices — for the account (FR43)

**Given** the account has 5 team members
**When** all members are active
**Then** no additional charges are incurred — unlimited users on the flat-rate plan

**Given** the account owner
**When** they view the team settings
**Then** they can see all team members and remove members if needed

### Story 8.2: Dispatch Board and Job Assignment

As a shop owner managing 2-5 technicians,
I want to see where everyone is and what they're working on, and assign jobs to specific techs,
So that I can efficiently route my crew and balance workloads.

**Acceptance Criteria:**

**Given** the account has multiple team members
**When** the user navigates to the dispatch view
**Then** they see a board showing each technician's name, current assignment (if any), and upcoming jobs for the day (FR12)

**Given** a new job needs to be assigned
**When** the user creates or edits a job
**Then** they can select a technician from a dropdown of team members to assign the job to (FR13)

**Given** a job is currently assigned to one technician
**When** the user needs to reassign it
**Then** they can change the assigned technician on the job detail screen and the change is reflected on the dispatch board immediately (FR13)

**Given** the dispatch board is displayed
**When** team members' jobs update throughout the day
**Then** the board reflects current job statuses in near-real-time via the sync engine

### Story 8.3: Web Dashboard for Office Partners

As an office partner or spouse managing the business from home,
I want to view the team's schedule, invoice statuses, and QuickBooks sync from my computer,
So that I can manage the office side without needing the mobile app.

**Acceptance Criteria:**

**Given** an authorized team member navigates to the web dashboard URL
**When** they log in with their account credentials
**Then** they see a dashboard with navigation to Schedule, Invoices, and Sync Status views (FR44, FR45, FR46)

**Given** the Schedule view is selected
**When** the dashboard loads
**Then** the office partner sees today's schedule for all team members with job details, customer names, and times (FR44)

**Given** the Invoices view is selected
**When** the dashboard loads
**Then** the office partner sees all invoices with status, customer name, amount, and payment status, filterable by status (FR45)

**Given** the Sync Status view is selected (and QuickBooks is connected)
**When** the dashboard loads
**Then** the office partner sees the QuickBooks sync activity log with successes, failures, and retry options (FR46)

**Given** the web dashboard
**When** any data is displayed
**Then** it is read-only — the office partner can view but not create or modify records from the web interface in the MVP

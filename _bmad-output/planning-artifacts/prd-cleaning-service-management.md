---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/cleaning-service-management.md
  - _bmad-output/planning-artifacts/product-brief-cleaning-service-management.md
  - _bmad-output/planning-artifacts/research/market-cleaning-service-management-research-2026-03-25.md
workflowType: 'prd'
date: '2026-04-01'
author: Root
project_name: CleanOps
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — CleanOps

**Author:** Root
**Date:** 2026-04-01
**Version:** 1.0

---

## Executive Summary

CleanOps is a cleaning-specific SaaS business management platform for residential cleaning companies with 1–10 employees. It eliminates the 10–16 hours/week of manual scheduling, payment chasing, and crew coordination that owner-operators currently manage via Google Calendar, text messages, and paper notebooks.

The target market is 1.2 million U.S. residential cleaning businesses, 90% employing fewer than 10 people. Existing tools either charge prohibitive per-seat fees (ZenMaid at $99/mo for 5 cleaners, Jobber at $169/mo) or lack cleaning-specific workflows (no per-room photo verification, no flat pricing, no route optimization at base tier). CleanOps fills this gap at $39/mo flat for up to 10 users — a 2.5–4x cost advantage over the nearest cleaning-specific competitor.

The product launches via an AppSumo Lifetime Deal ($69–99), a blue ocean channel with no existing cleaning software, then transitions to SaaS subscriptions. Revenue path: $69–99K LTD launch → 500 monthly subscribers at $39/mo ($19.5K MRR) within 12 months.

### What Makes This Special

Three compounding differentiators no competitor combines:

1. **Flat pricing**: $39/mo covers all cleaners, eliminating the per-seat penalty that makes competitors 2–4x more expensive for teams with part-time staff or 45% annual turnover.
2. **Ultra-simple cleaner app**: Designed for non-tech-savvy, non-English-speaking staff (average cleaner age 44; 78.2% of non-English-speaking cleaners speak Spanish). One tap to see the day's jobs, navigate, clock in, and complete photo checklists. Zero training required.
3. **Route optimization at base price**: Competitors gate this behind $169–199/mo tiers. CleanOps includes it at $39/mo, saving 30+ minutes/day in drive time.

Supporting differentiators: per-room before/after photo verification (proof-of-quality for clients), EN/ES multilingual support from launch, and a recurring schedule engine built for cleaning patterns (biweekly, skip-week, holiday rules) rather than the generic job-by-job model field-service tools default to.

## Project Classification

- **Project Type:** SaaS B2SMB — web dashboard for business owners + mobile app for cleaners
- **Domain:** Field Service Management (residential cleaning vertical)
- **Complexity:** Medium — payment processing (Stripe/PCI), GPS/geofencing, multilingual UI, multi-tenant data isolation, SMS/email automation
- **Project Context:** Greenfield — no existing codebase; new product

---

## Success Criteria

### User Success

| Metric | Target | Measurement |
|--------|--------|-------------|
| Admin time reduction | ≥50% reduction (10–16 hrs/week → 5–8 hrs/week) | Before/after survey at 30-day check-in |
| Weekly schedule setup time | <15 minutes (vs. 2–4 hours manually) | In-app time from schedule view open to completion |
| Cleaner adoption rate | ≥80% of invited cleaners complete first clock-in within 7 days | Cleaner accounts with clock-in activity |
| Cleaner onboarding time | <5 minutes from invite to first successful clock-in | Time between invite sent and first clock-in event |
| Payment collection speed | <3 days average (vs. 1–2 weeks manual) | Time from job completion to payment received |
| Missed appointment rate | <1% of scheduled jobs | Missed jobs / total scheduled jobs per month |
| Photo verification adoption | ≥70% of completed jobs include per-room photos | Jobs with photos / total completed jobs |

### Business Success

| KPI | 3-Month Target | 12-Month Target |
|-----|---------------|----------------|
| LTD sales | 500+ units | 1,000 units |
| Monthly subscribers | 100 | 500 |
| MRR | $3,900 | $19,500 |
| Monthly churn | <8% | <5% |
| Trial-to-paid conversion | ≥15% | ≥20% |
| NPS | ≥35 | ≥45 |
| G2/Capterra average rating | ≥4.0 (first 50 reviews) | ≥4.5 (100+ reviews) |
| Customer Acquisition Cost | <$70 (AppSumo channel) | <$50 (organic + referral) |
| Lifetime Value | ≥$300 (12-month cohort) | ≥$450 |

### Technical Success

- Zero data loss incidents (client records, job history, invoices)
- Payment processing failure rate <0.5% of transactions
- Cleaner app clock-in success rate ≥99% (with offline fallback)
- Route optimization returns results for all inputs within 10 seconds
- Zero cross-tenant data leakage incidents

### Measurable Outcomes (Product-Market Fit Gates)

**Go/No-Go at Month 3:**
- 500+ LTD sales **AND**
- ≥40% "very disappointed" score on Sean Ellis PMF survey **AND**
- ≥4.0 average review rating on AppSumo/G2

If all three gates are met, proceed to subscription model and Phase 2. If not, iterate on core UX before scaling marketing spend.

## Product Scope

### MVP — Phase 1

Core user journeys that must work reliably at launch:

1. Owner creates recurring schedule for 20–50 clients, assigns cleaners, handles reschedules
2. Cleaner opens mobile app, sees daily jobs in Spanish or English, clocks in/out with GPS, completes photo checklists
3. Invoice auto-generates on job completion, client pays via email link
4. New client books online, receives automated confirmation/reminders
5. Owner views route-optimized daily schedule per cleaner

**Must-Have Features (MVP):**
- Recurring schedule engine (weekly, biweekly, monthly, skip-week, holiday rules)
- Cleaner mobile app (schedule view, GPS clock-in/out, per-room photo checklists, navigation, EN/ES)
- Client management (profiles, notes, custom checklists, cleaning history)
- Auto-invoicing triggered by clock-out + Stripe payment link
- Online client booking portal (availability view, intake form, auto-confirmation)
- Route optimization (geography-based job sequencing per cleaner, drive time estimates)
- Basic reporting dashboard (jobs, revenue, cleaner performance)
- Invite-based cleaner onboarding (QR code / link, no email/password required)

**MVP Constraints:**
- Web dashboard: responsive web app (desktop-first, mobile-accessible)
- Cleaner app: mobile web app (PWA) — Android/iOS native in Phase 2
- Languages: English + Spanish (dashboard: English; cleaner app: EN/ES toggle)
- Payment: Stripe Connect only; no ACH, no manual card entry

### Growth Features — Phase 2 (Months 4–9)

- Native Android cleaner app (iOS Phase 3)
- Portuguese language support
- QuickBooks Online integration (invoice sync)
- Offline mode for cleaner app (1-hour queue)
- Supply inventory tracking per cleaner/van
- SMS notification premium tier (above monthly threshold)
- Payroll export (CSV compatible with Gusto, Paychex)
- Advanced analytics (retention cohorts, job profitability, route efficiency trends)

### Vision — Phase 3 (Year 2+)

- Airbnb/short-term rental turnover scheduling sub-vertical
- Commercial cleaning bridge (companies doing both residential + commercial)
- Integration ecosystem (Xero, Square, Zapier, Gusto native payroll)
- AI-powered scheduling (demand prediction, optimal crew allocation)
- AI photo verification (automated quality scoring from room photos)
- Marketplace connecting cleaning businesses with new clients (lead generation)
- White-label for cleaning franchises
- International expansion (Canada, UK, Australia)

---

## User Journeys

### Journey 1: Maria — Core Scheduling & Cleaner Coordination (Happy Path)

**Persona:** Maria, 38, owner of Sparkle Clean, Phoenix AZ. 4 cleaners (2 FT, 2 PT), 25 recurring clients, ~$15K/month revenue, 15% margin. Bilingual (EN/ES); 3 cleaners are primarily Spanish-speaking. Currently spends 2–3 hours every Sunday on Google Calendar scheduling and gets 15–20 texts/day from cleaners.

**Opening Scene:** Sunday 7pm. Maria sits at her kitchen table after a full cleaning day, dreading the weekly Google Calendar rebuild. She remembers the CleanOps AppSumo deal she bought last week.

**Rising Action:**
1. Maria imports her 25 clients from a CSV export of her Google Contacts
2. She sets recurring patterns for each client: 10 weekly, 12 biweekly, 3 monthly
3. She assigns each recurring client to a cleaner (or rotation)
4. She sends WhatsApp invite links to her 4 cleaners; Rosa downloads the app and sees the interface in Spanish in under 3 minutes

**Climax:** Monday morning — instead of her usual 7am flood of texts ("Where am I going?"), Maria opens the CleanOps dashboard at 8am and sees all 4 cleaners clocked in, routes displayed on the map, and 3 jobs already marked complete with photo checklists. No texts.

**Resolution:** By 6pm Monday, all 12 jobs are complete. 12 invoices have been sent automatically. Maria spent 14 minutes on scheduling-related tasks all day (one client reschedule via drag-and-drop). She reclaimed 3 hours vs. last Monday.

**Journey Reveals:** Schedule engine, drag-and-drop, crew assignment, cleaner mobile app, GPS clock-in, photo checklists, auto-invoicing, dashboard view, invite-based onboarding.

---

### Journey 2: Tony — Solo Operator Hiring First Cleaner (Scale-Up Path)

**Persona:** Tony, 29, solo cleaning operator, Denver CO. 12 recurring clients, paper notebook, ~$5K/month. Wants to hire his first cleaner but fears schedule chaos.

**Opening Scene:** Tony double-books two clients for the same Friday slot — again. He cancels one, loses trust, and spends an hour apologizing. He searches Google for "cleaning scheduling app" and finds CleanOps ($69 LTD).

**Rising Action:**
1. Tony sets up his 12 clients and their cleaning frequencies in 25 minutes
2. He creates a standalone booking page URL and adds it to his Instagram bio
3. Two new client inquiries book directly, with confirmation emails sent automatically
4. Tony hires his first cleaner, Marcus, and sends an invite via text; Marcus joins in 4 minutes, no account setup

**Climax:** First week with Marcus — Tony assigns Marcus his Monday/Tuesday routes. Marcus sees his 4 jobs per day in the app with addresses, notes ("2 dogs; put them outside before starting"), and navigation. Tony monitors from his phone while cleaning his own jobs.

**Resolution:** Tony no longer double-books. All confirmations are automatic. He can now take on 4 more clients because Marcus handles Mon/Tue. CleanOps costs him less than one hour of his billing rate per month.

**Journey Reveals:** Online booking portal, auto-confirmation/reminders, client intake form, cleaner invite/onboarding, job notes per client, real-time dashboard monitoring.

---

### Journey 3: Rosa — Cleaner Daily Mobile App (End-User Path)

**Persona:** Rosa, 47, part-time cleaner at Sparkle Clean. Primary language Spanish, limited English literacy, basic Android smartphone. Previously texted Maria every morning for her schedule.

**Opening Scene:** Rosa wakes Monday and opens the app (Spanish interface). She sees three jobs today with addresses, maps, and client names.

**Rising Action:**
1. She taps "Navegar" on Job 1 — Google Maps opens with the address pre-loaded
2. She arrives, taps "Empezar Trabajo" — the checklist appears room by room
3. For each room (Cocina, Baño 1, Baño 2, Sala, Dormitorio), she checks off tasks and takes a before photo, then an after photo
4. She taps "Trabajo Completo" — the job closes

**Climax:** Mrs. Johnson's home. Rosa finds a broken vase and wonders if she'll be blamed. She photographs it with the "Nota de Incidencia" feature and adds a note in Spanish. Maria sees the incident report on the dashboard before Mrs. Johnson calls.

**Resolution:** Rosa completes all 3 jobs. She never texted Maria once. Maria sees photo evidence of all 3 completed jobs with timestamps and GPS markers. Rosa feels confident and trusted.

**Journey Reveals:** Spanish-language mobile app, one-tap navigation, per-room photo checklists, incident notes, GPS timestamp capture, real-time job status visibility for owner.

---

### Journey 4: Client (Homeowner) — Booking and Payment (Transactional Path)

**Persona:** David, 41, homeowner, suburban Chicago. Referred to Sparkle Clean by a neighbor. Wants a biweekly cleaning but hates calling businesses.

**Opening Scene:** David finds Sparkle Clean's booking link in a neighbor's text. He opens it on his phone.

**Rising Action:**
1. David sees available biweekly slots — Maria's calendar shows real availability
2. He completes the intake form: address, entry instructions ("key under mat, alarm: 4512"), two dogs ("Friendly, keep in backyard"), preferred rooms and frequency
3. He receives a confirmation email with summary, and a reminder SMS the morning before his first cleaning

**Climax:** Day of cleaning — David gets an SMS "Your cleaners are on their way" when Rosa clocks in. After the job, he receives an invoice email with a Stripe payment link and photo summary of completed rooms.

**Resolution:** David pays in 2 minutes via credit card from his phone. He sets up autopay for all future visits. He never had to call or text anyone.

**Journey Reveals:** Client booking portal, intake form, automated SMS/email notifications, client portal with job photos, online invoice payment, recurring billing/autopay.

---

### Journey 5: Maria — Handling Schedule Disruption (Edge Case)

**Scenario:** Tuesday 8am — a cleaner calls in sick. Maria has 5 jobs to redistribute across 3 remaining cleaners without blowing the routes.

**Flow:**
1. Maria marks the sick cleaner as unavailable for the day
2. CleanOps surfaces the 5 unassigned jobs with a conflict alert
3. Maria reassigns 3 jobs to other cleaners via drag-and-drop, checks updated route maps
4. 2 jobs cannot be covered; she reschedules them via a drag-to-next-available-slot action
5. Affected clients receive automated reschedule notifications via SMS

**Journey Reveals:** Cleaner availability management, conflict detection, drag-to-reschedule, automated client notification of schedule changes, real-time route re-optimization on reassignment.

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|------------|
| Recurring schedule engine with conflict detection | Journeys 1, 2, 5 |
| Drag-and-drop rescheduling and reassignment | Journeys 1, 5 |
| Invite-based zero-friction cleaner onboarding | Journeys 1, 2 |
| Spanish-language cleaner mobile app | Journeys 1, 3 |
| GPS clock-in/out with real-time dashboard visibility | Journeys 1, 3 |
| Per-room photo checklists with incident notes | Journeys 3, 5 |
| Auto-invoicing + Stripe payment on completion | Journeys 1, 4 |
| Client booking portal + intake form | Journeys 2, 4 |
| Automated SMS/email notifications | Journeys 4, 5 |
| Route optimization per cleaner | Journeys 1, 2 |
| Cleaner availability management | Journey 5 |
| Real-time job status dashboard | Journeys 1, 3 |

---

## Domain-Specific Requirements

CleanOps operates in the SMB field service domain with medium compliance requirements. No HIPAA, no heavy regulated industry requirements, but three areas require specific attention:

### Payment Processing Compliance

- Payment card data must never touch CleanOps servers; all card processing routed exclusively through Stripe (PCI DSS Level 1 compliant)
- CleanOps stores only Stripe payment tokens and payment status; no raw card numbers, CVVs, or full PANs
- Stripe Connect used for business onboarding so revenue flows directly to the cleaning business's Stripe account
- All payment-related pages served over HTTPS; no mixed-content

### Privacy & Location Data

- GPS coordinates captured at clock-in/clock-out are stored per job record for dispute resolution; retained 90 days minimum, 1 year maximum
- Location data is accessible only to the business owner (tenant), not shared across tenants or exposed to clients
- GPS collection is disclosed in cleaner onboarding terms; collection occurs only during active job sessions, not continuously
- GDPR/CCPA: users can request deletion of their personal data; deletion of a cleaner account anonymizes their records in historical jobs (timestamps and photos retained; name replaced with "Former Employee")

### Multi-Tenant Data Isolation

- Each cleaning business is a separate tenant; no cross-tenant data access is possible at the application or database layer
- Cleaner accounts belong to exactly one business tenant; cleaners cannot view other businesses' data even if using the same email
- API endpoints enforce tenant scoping on every query; no global queries that return cross-tenant data

---

## Innovation & Novel Patterns

### Detected Innovation Areas

CleanOps combines three elements no single competitor addresses:

**1. Flat pricing + high-turnover workforce model**
The entire industry assumes per-seat SaaS pricing, penalizing businesses with part-time staff and 45% annual turnover. CleanOps's flat pricing ($39/mo for up to 10 users) is a structural differentiation that flips the unit economics for the target segment.

**2. Zero-training mobile app for non-tech-savvy, multilingual workers**
No field service SaaS has designed its end-user (cleaner) app with the assumption that the user cannot read English, has never used a business app, and should be able to complete their full daily workflow in under 3 taps per action. The Uber-model for a labor app in a non-tech segment.

**3. Route optimization included at base tier**
Competitors treat route optimization as a premium feature ($169–250/mo tiers). Including it at $39/mo eliminates the #2 operational pain point (drive time waste) as a day-one capability.

### Validation Approach

- Cleaner app UX: alpha test with 5–10 real cleaners (non-technical, Spanish-speaking) before AppSumo launch; target ≥80% first-session completion of all core flows
- Flat pricing PMF: AppSumo LTD sales are a direct vote; 500 sales within 60 days validates willingness-to-pay at this price point
- Route optimization value: in-app before/after drive time comparison shown to owners after first week of use; target ≥20% reported drive time reduction

### Risk Mitigation

- If cleaner app UX fails with non-tech-savvy users: iterate on onboarding flow (max 3 iterations) before scaling distribution
- If route optimization API costs exceed projections at scale: implement caching of daily routes; charge premium for re-optimization within same day

---

## SaaS Platform Requirements

### Multi-Tenancy Model

- **Tenant:** One cleaning business (one owner account)
- **Users per tenant:** Owner (1) + Cleaners (up to 10 on base plan, expandable)
- **Isolation:** Database-level tenant ID on all records; row-level security enforced
- **Onboarding:** Self-serve; owner creates account → adds clients → adds cleaners → live in <60 minutes

### Role-Based Access Control

| Role | Permissions |
|------|-------------|
| Owner | Full CRUD on all business data: clients, jobs, cleaners, invoices, settings |
| Cleaner | Read-only on assigned jobs; clock-in/out; checklist completion; photo upload; incident notes |
| Client (portal) | Read-only on own booking history and upcoming appointments; pay invoices; update own contact/access info |

No admin/ops role for MVP; owner handles all configuration.

### Subscription & Billing

- Trial: 14-day free trial, no credit card required
- Base plan: $39/month (up to 10 cleaner seats, all features)
- LTD AppSumo tier: $69 one-time (up to 10 jobs/day active); $99 one-time (unlimited jobs/day)
- Billing via Stripe Billing; owner adds payment method after trial
- Account suspension at 7 days past due; data retained for 30 days after suspension before deletion

### Integration Requirements (MVP)

| Integration | Purpose | Dependency Level |
|-------------|---------|-----------------|
| Stripe Connect | Invoice payment processing | Critical — blocks auto-invoicing |
| Google Maps API | Navigation in cleaner app, drive time estimates | Critical — blocks route optimization |
| SendGrid (or equivalent) | Transactional email (invoices, confirmations, reminders) | Critical — blocks client portal |
| Twilio (or equivalent) | SMS notifications (reminders, schedule changes) | High — core UX for cleaner-client loop |
| Google Maps Directions API or OSRM | Route optimization calculations | High — core differentiator |

### Technical Architecture Considerations

- **Frontend (Owner Dashboard):** Single-page application; React recommended for schedule drag-and-drop complexity
- **Frontend (Cleaner App):** Progressive Web App (PWA) for cross-platform mobile support at MVP; installable on Android home screen without app store
- **Backend:** RESTful API; multi-tenant; stateless for horizontal scaling
- **Database:** Relational (PostgreSQL recommended) for transactional integrity of job/invoice data; tenant-scoped queries
- **File Storage:** Object storage (S3-compatible) for job photos; CDN delivery for client portal photo viewing
- **Background Jobs:** Async queue for invoice generation, email/SMS sending, route optimization calculations; prevents blocking UI
- **Maps/Navigation:** Google Maps JavaScript API (dashboard map view), Google Maps Deep Link (cleaner app navigation handoff to native Maps app)

### Implementation Considerations

- Cleaner app must be installable as PWA (manifest.json, service worker) for home screen install via QR code invite
- Offline clock-in queue: store clock-in event locally when offline, sync when connection restores (IndexedDB or equivalent)
- Photo upload: compress client-side before upload (target <500KB per photo); upload async, not blocking job completion flow
- Route optimization: calculate once at schedule creation; recalculate on drag-and-drop reassignment; cap API calls at 5 re-optimizations/day per tenant on base plan

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove the core value props (schedule automation + cleaner app simplicity + flat pricing) with paying customers before adding growth features.

**Resource Requirements:** 1–2 full-stack engineers + 1 designer. Target: 5-week build, 1-week alpha, 2-week AppSumo launch preparation.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Owner schedules recurring jobs and manages day-to-day changes
- Cleaner completes daily jobs via mobile app (EN/ES)
- Client receives invoice and pays online
- New client books via online portal

**Must-Have Capabilities:**

| Feature | Rationale |
|---------|-----------|
| Recurring schedule engine | Primary scheduling pain; without it, product has no differentiation |
| Cleaner mobile PWA (EN/ES) | Key differentiator; validates "ultra-simple" thesis |
| Per-room photo checklists | Quality assurance + client trust proof; differentiator vs ZenMaid |
| GPS clock-in/out | Triggers auto-invoicing; removes biggest admin pain |
| Auto-invoicing + Stripe payment | Revenue for business owners; removes payment chasing |
| Route optimization | Key differentiator; included at base tier |
| Client booking portal | Needed for Tony persona; online acquisition channel |
| Automated SMS/email reminders | Reduces no-shows; reduces owner communication load |
| Basic reporting dashboard | Owners need visibility to trust the system |
| Invite-based cleaner onboarding | Zero-friction onboarding; critical for Spanish-speaking cleaners |

### Post-MVP Features

**Phase 2 (Months 4–9):**
- Native Android cleaner app (performance + offline mode)
- iOS cleaner app
- Portuguese language support
- QuickBooks Online integration
- Supply inventory per cleaner
- Advanced analytics (profitability, retention cohorts)
- Payroll export CSV

**Phase 3 (Year 2):**
- Airbnb turnover scheduling mode
- Commercial cleaning support
- AI-powered scheduling
- AI photo quality verification
- Marketplace for new client acquisition
- White-label for franchises

### Risk Mitigation Strategy

| Risk | Mitigation |
|------|-----------|
| Cleaner app UX fails non-tech users | Alpha test with 5 real cleaners before launch; 3 iteration cycles max |
| Route optimization API costs at scale | Cache daily routes; charge premium for same-day re-optimization |
| LTD users overwhelm support | Self-serve onboarding; video tutorials; in-app contextual help |
| ZenMaid responds with flat pricing | Move fast to establish community presence; multilingual + photo QA harder to copy |
| 45% cleaner turnover creates re-onboarding burden | Zero-training app + QR invite = <5-minute re-onboarding; cost-free on flat pricing |

---

## Functional Requirements

### Schedule Management

- **FR1:** Owners can create recurring job schedules for clients with configurable patterns (weekly, biweekly, monthly, every N weeks)
- **FR2:** Owners can configure skip rules for specific dates and named holidays on any recurring schedule
- **FR3:** Owners can drag-and-drop jobs to reschedule (move to different date/time) without losing recurring pattern
- **FR4:** Owners can assign one or more cleaners to a job at creation or by editing
- **FR5:** Owners can swap cleaner assignments across multiple jobs in a single action
- **FR6:** System detects scheduling conflicts (double-booking a cleaner, time overlap) and surfaces alerts before saving
- **FR7:** Owners can view the schedule as a weekly calendar with color-coded cleaner lanes
- **FR8:** Owners can mark a cleaner as unavailable for a day, triggering conflict alerts for their assigned jobs

### Cleaner Mobile App

- **FR9:** Cleaners can view their full list of assigned jobs for the current day, including client address, estimated job duration, and special instructions
- **FR10:** Cleaners can clock in to a job with GPS location capture; system records timestamp and coordinates
- **FR11:** Cleaners can complete per-room checklists with task checkboxes and photo capture (before/after) per room
- **FR12:** Cleaners can add incident notes (text + photo) to a job record during the job
- **FR13:** Cleaners can navigate to the job address via a one-tap handoff to the device's native map app
- **FR14:** Cleaners can clock out of a job, marking it complete; system records GPS location and timestamp at clock-out
- **FR15:** Cleaners can toggle the app interface between English and Spanish at any time
- **FR16:** Cleaners receive push notifications for new job assignments, schedule changes, and day-of reminders
- **FR17:** Cleaners can install the app to their device home screen via a QR-code invite link (PWA install prompt)

### Client Management

- **FR18:** Owners can create client profiles with name, address, contact info, and entry/access instructions
- **FR19:** Owners can add per-client notes that appear in the cleaner app when that client's job is active (e.g., "two dogs — keep in backyard")
- **FR20:** Owners can configure per-client per-room cleaning checklists, defining which rooms and tasks apply to each client
- **FR21:** Owners can view cleaning history per client, including job dates, assigned cleaners, and photo records
- **FR22:** Owners can import clients from a CSV file
- **FR23:** Clients can view their upcoming appointments and cleaning history with photo records via a client portal

### Invoicing & Payments

- **FR24:** System auto-generates an invoice for a completed job when a cleaner clocks out, populated with job details and pricing
- **FR25:** System emails the invoice to the client with an online payment link (Stripe-hosted)
- **FR26:** Owners can configure recurring billing for subscription cleaning clients (auto-charge on job completion)
- **FR27:** Clients can pay invoices online via credit/debit card through the Stripe payment link
- **FR28:** Owners can view payment status per invoice: sent, viewed, paid, overdue
- **FR29:** Owners can manually mark an invoice as paid (cash or check)
- **FR30:** System sends automated payment reminders to clients for overdue invoices at 3-day and 7-day marks

### Online Booking

- **FR31:** Owners can generate a client-facing booking page (standalone URL + embeddable widget code)
- **FR32:** Prospective clients can view real-time available time slots based on the owner's schedule and book a slot
- **FR33:** New clients can complete a booking intake form (name, address, access instructions, cleaning preferences, frequency)
- **FR34:** System sends automated confirmation email and SMS to the client immediately on booking
- **FR35:** System sends automated reminder SMS and email to the client 24 hours before each scheduled cleaning

### Route Optimization

- **FR36:** Owners can trigger route optimization for each cleaner's daily job list, which sequences jobs to minimize total drive time
- **FR37:** Owners and cleaners can view estimated drive time between consecutive jobs
- **FR38:** Owners can view a daily route map showing all scheduled jobs per cleaner as a sequence of pins
- **FR39:** System recalculates route optimization automatically when jobs are reassigned or rescheduled via drag-and-drop

### Reporting & Analytics

- **FR40:** Owners can view a jobs-completed summary by day, week, and month
- **FR41:** Owners can view revenue summary broken down by invoiced, collected, and outstanding
- **FR42:** Owners can view per-cleaner performance metrics: jobs completed, average clock-in-to-start time, photo checklist completion rate
- **FR43:** Owners can view a client activity overview showing active clients, total visits, and last cleaning date

### User & Account Management

- **FR44:** Owners can invite cleaners to the platform via a shareable invite link or QR code; cleaners join without creating a username/password
- **FR45:** Owners can deactivate a cleaner account; deactivated cleaners cannot log in but their historical job records are preserved
- **FR46:** Owners can configure their business profile (company name, logo, contact info, timezone)
- **FR47:** Owners can configure service pricing (flat rate per cleaning, hourly rate, or per-room rate) used in auto-generated invoices

---

## Non-Functional Requirements

### Performance

- **NFR1:** Owner dashboard schedule view loads within 3 seconds for 95th percentile under normal load (up to 200 scheduled jobs in view)
- **NFR2:** Cleaner mobile app job list loads within 2 seconds on a 4G LTE connection
- **NFR3:** Route optimization calculation completes within 10 seconds for up to 20 jobs per cleaner per day
- **NFR4:** Photo upload (after client-side compression to <500KB) completes within 5 seconds on a 4G LTE connection
- **NFR5:** Invoice auto-generation and email delivery occurs within 30 seconds of clock-out event

### Security

- **NFR6:** All data in transit encrypted via TLS 1.2 or higher
- **NFR7:** All data at rest encrypted via AES-256 or cloud provider equivalent (e.g., AWS RDS encryption)
- **NFR8:** Payment card data never stored on CleanOps servers; all card processing via Stripe; CleanOps stores only Stripe payment intent IDs and payment status
- **NFR9:** Multi-tenant data isolation enforced at the database query layer; all API endpoints require and validate tenant ID on every request
- **NFR10:** GPS clock-in/clock-out coordinates stored per job record; accessible only to the tenant owner; retained 90 days minimum
- **NFR11:** Cleaner app sessions expire after 30 days of inactivity; re-authentication via invite link re-issue required

### Scalability

- **NFR12:** System supports 500 concurrent active business tenant accounts at MVP (Year 1 target) without degradation
- **NFR13:** System supports up to 50 active jobs per day per business tenant (covers 99% of target segment)
- **NFR14:** Object storage for job photos scales to 10TB without re-architecture (leveraging S3-compatible cloud storage)
- **NFR15:** Background job queue (invoicing, email/SMS, route optimization) processes jobs within 60 seconds of trigger under normal load

### Accessibility & Multilingual

- **NFR16:** Cleaner mobile app interface fully translated in English and Spanish; all user-visible strings externalized for translation (no hardcoded text in UI)
- **NFR17:** All core cleaner app flows (clock-in, checklist completion, clock-out) achievable in 3 taps or fewer
- **NFR18:** Font sizes in cleaner app ≥16px for body text, ≥22px for primary action labels; touch targets ≥44x44px
- **NFR19:** Owner dashboard meets WCAG 2.1 Level AA for color contrast ratios

### Reliability

- **NFR20:** System uptime ≥99.5% during business hours (6am–8pm Mon–Sat, owner's local timezone) as measured by uptime monitoring
- **NFR21:** Cleaner app clock-in event stored locally and synced when internet connection restores; maximum 1-hour offline queue without data loss
- **NFR22:** Database backups run every 24 hours with point-in-time recovery for minimum 30-day retention

### Integration

- **NFR23:** Stripe payment link generation completes within 5 seconds of invoice creation
- **NFR24:** SMS notifications delivered via Twilio or equivalent within 60 seconds of trigger event under normal conditions
- **NFR25:** Transactional emails (invoices, confirmations, reminders) delivered within 120 seconds of trigger event via SendGrid or equivalent

---

*PRD completed: 2026-04-01*
*Source: Shortlisted idea (Score: 96/105) + Market research + Product brief (2026-03-25)*
*Next recommended step: Technical Architecture (`/bmad-bmm-create-architecture`)*

---
stepsCompleted: ['step-01-init.md', 'step-02-discovery.md', 'step-02b-vision.md', 'step-02c-executive-summary.md', 'step-03-success.md', 'step-04-journeys.md', 'step-05-domain.md', 'step-06-innovation.md', 'step-07-project-type.md', 'step-08-scoping.md', 'step-09-functional.md', 'step-10-nonfunctional.md', 'step-11-polish.md', 'step-12-complete.md']
inputDocuments: ['ideas/shortlisted/pressure-washing-detailing-crm.md', '_bmad-output/planning-artifacts/brief-pressure-washing-detailing.md']
workflowType: 'prd'
lastStep: 12
date: '2026-04-06'
author: 'Root'
classification:
  projectType: saas_b2b_mobile
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — CleanCRM

**Author:** Root
**Date:** 2026-04-06

---

## Executive Summary

CleanCRM is the first purpose-built business management platform for pressure washing and auto detailing operators — ~90,000 US small businesses generating $19–20B in annual service revenue that have been systematically underserved by generic field service management (FSM) software for over a decade.

Every operator in this market faces the same structural problem: generic tools built for HVAC or plumbing technicians (Jobber, Housecall Pro) charge $39–329/mo for features that don't match their workflow, while the one purpose-built detailing tool — Urable — was acquired by PE firm Fullsteam in April 2025, creating immediate community distrust and impending price increases. No tool at any price point serves both pressure washers and detailers with the industry-native features they actually need: built-in before/after photo documentation, chemical inventory tracking, surface/vehicle-specific quoting, and on-site tap-to-pay.

CleanCRM addresses this gap with a mobile-first platform that enables any operator to run their entire daily workflow — quote to payment to Google review — from a single app on their phone, without external tools or laptop access. The launch strategy centers on an AppSumo Lifetime Deal at $59–79 to seed 1,000–2,000 community advocates, followed by MRR pricing, SEO content dominance, and Reddit/YouTube organic growth targeting **$10K MRR within 12 months** of launch.

### What Makes This Special

**Before/After Photo Gallery (built-in, free):** Every competitor requires CompanyCam (+$29–99/mo) or manual photo workflows. CleanCRM makes before/after photo capture, organization, and client sharing native to the job record — eliminating external costs and creating the marketing flywheel operators need to grow their business.

**Chemical Inventory & Dilution Tracking:** No competitor at any price point tracks chemical inventory levels, dilution ratios by surface type, cost-per-job reporting, or reorder alerts. This is an un-copyable moat that requires deep domain knowledge most generic FSM vendors will never invest in.

**Dual-Vertical Coverage:** A solo operator who does both pressure washing and auto detailing has zero tools that serve both verticals with native quoting templates. CleanCRM is the first. This doubles the addressable market versus single-vertical competitors.

**Community-Native Positioning During a Competitor's Vulnerability Window:** Urable's PE acquisition is fresh in community memory. CleanCRM launches into an actively churning customer base with authentic "built for you" community engagement — something no generic FSM vendor can credibly claim.

**LTD-First Pricing:** $59–79 one-time pricing resonates powerfully with blue-collar owner-operators who have deep subscription aversion. Each LTD customer becomes a marketing vector in the communities where the next customers already live.

## Project Classification

- **Project Type:** Mobile-first SaaS B2B — React Native cross-platform app with PWA web fallback
- **Domain:** Field Service Management / Blue-collar SMB operations
- **Complexity:** Medium — payments (Stripe), SMS automation, photo storage, offline-capable mobile app; no regulated compliance requirements
- **Project Context:** Greenfield — new product, no existing codebase

---

## Success Criteria

### User Success

The product succeeds when operators feel their entire daily workflow — from quote to review — runs through CleanCRM with no tool switching. Specific user success signals:

- **Time-to-first-gallery:** 70% of activated users send their first before/after photo gallery to a client within 48 hours of signup. This is the primary "aha!" moment — once an operator sees a professional branded gallery delivered automatically, retention is high.
- **Workflow completion rate:** 50% of paid users log ≥3 jobs per week by month 2, indicating the tool is embedded in daily operations (not just used occasionally).
- **Invoice completion rate:** 60% of jobs result in a paid invoice within the app by month 3, measuring payment integration adoption.
- **No-show reduction signal:** 80% of scheduled jobs have at least one automated SMS reminder sent before the appointment.
- **Photo adoption depth:** 40% of completed jobs have both before AND after photos attached at 30 days; 65% at 90 days.
- **Gallery share rate:** 70% of created galleries are actually shared with the client, confirming the workflow resonates.
- **Review generation:** ≥5 Google review requests triggered per user per month by month 3.

### Business Success

| Milestone | Metric | Target |
|-----------|--------|--------|
| 3 months | AppSumo LTD units sold | 500–2,000 |
| 3 months | AppSumo rating | ≥4.5/5 with ≥50 reviews |
| 3 months | NPS from LTD cohort | ≥40 |
| 6 months | MRR from new subscribers | $3,000–5,000 |
| 6 months | SEO: "pressure washing software" | Page 1 Google |
| 12 months | Total MRR | $10,000 |
| 12 months | Total paid customers | 2,000+ |
| 12 months | SEO: core keywords | Top-3 ranking |
| 12 months | Organic community mentions | Recognized in r/pressurewashing and r/AutoDetailing as recommended tool |

**Leading indicators that predict revenue success before it materializes:**
- Trial-to-activation rate (users who create their first job within 24h of signup)
- Photo gallery completion rate (users who complete a full before/after workflow)
- Unprompted Reddit/community mentions from real users

### Technical Success

The technical foundation succeeds when:
- Core operator workflow (quote → job → photos → payment → review request) completes end-to-end on an iPhone with intermittent LTE signal
- App is available on App Store and Google Play and passes review for all core features
- Payment processing via Stripe meets PCI compliance requirements
- Photo storage scales to 10,000+ photos per account without degradation
- Automated SMS delivery rate exceeds 95% for scheduled reminders
- Zero critical workflow-blocking bugs in the quote-to-payment-to-gallery path at launch

### Measurable Outcomes

**AppSumo MVP success gate (90 days post-launch):**
All six criteria must be met to proceed to V1.5 development:
1. ≥500 LTD units sold at $59–79 average
2. AppSumo rating ≥4.5/5 with ≥50 reviews
3. NPS ≥40 from LTD cohort survey at 30 days
4. Before/after photo adoption >40% of jobs
5. ≥3 organic Reddit posts from real customers recommending CleanCRM (unprompted)
6. Zero critical workflow-blocking bugs reported

If NPS < 30, pause V1.5 feature development and diagnose onboarding/UX issues before proceeding.

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

The V1 MVP enables an operator to run their entire daily workflow from their phone without switching tools. Every feature below is essential to this loop; none can be deferred without breaking the core value proposition.

**Core capabilities:**

1. **Job & Customer Management** — Customer profiles with contact info, job history, notes, vehicle/property details. Job status tracking (Estimate → Scheduled → In Progress → Complete → Invoiced → Paid). Day/week calendar view. Mobile-first UI requiring no laptop.

2. **Surface/Vehicle-Specific Quoting** — Pre-built price templates for concrete driveway, asphalt, vinyl siding, wood deck, roof (soft wash), fence, gutters (pressure washing) and sedan, SUV/truck, van, luxury, motorcycle (auto detailing). Custom pricing override. "Good/Better/Best" tiered estimates. Quote-to-deposit flow via Stripe.

3. **Before/After Photo Gallery** — In-app camera capture with before/after tagging per job. Photos organized by job, customer, and date. Client-facing branded gallery link auto-generated on job completion. One-tap export as square-format Instagram/TikTok post. 5GB storage included per account (~10,000 photos).

4. **Automated SMS/Email Reminders** — Configurable sequences: 24hr + 2hr before job. Client confirmation reply tracking. Automatic follow-up if no confirmation. Post-job review request triggered after gallery delivery. Editable template library.

5. **Invoicing & Payment** — Invoice generation from completed job record (one tap). Stripe integration: NFC tap-to-pay, card on file, online payment link. Tip prompt at payment completion. Automated receipts. Revenue reporting (jobs this week/month, outstanding invoices).

6. **Mobile App (iOS + Android)** — React Native cross-platform app. Offline-capable for job creation and photo capture when signal is poor. Push notifications for appointment confirmations and payment receipts. PWA fallback for desktop access.

### Growth Features (Post-MVP — V1.5, ~Month 4)

These are validated needs deferred to maintain focus and ship quickly. They serve as compelling "coming soon" features that convert trials and give existing LTD customers a reason to engage when released:

- **Chemical inventory tracking** — Full inventory management, dilution calculators by surface type, per-job cost reporting, reorder alerts. The primary moat-extending feature; no competitor offers this at any price.
- **Route optimization** — Daily route auto-built to minimize drive time; integrates with Google Maps; saves 30–60 min/day for multi-job operators.
- **Multi-crew dispatching** — Team management, permissions, dispatcher UI for operators with 2–3 crews.
- **Review platform integrations** — Pull Google, Yelp, and Facebook reviews into operator dashboard.

### Vision (Future — V2+, Month 6+)

Advanced capabilities that become the long-term platform moat:

- **Ceramic coating warranty manager** — VIN-linked coating history, warranty certificates, annual inspection reminders, transferable warranties for vehicle resale.
- **VIN scanning** — Point phone at VIN plate; auto-populate vehicle profile in customer record.
- **In-app calling/texting (two-way)** — Twilio-powered SMS/calling so operators never need to leave the app to communicate with clients.
- **AI photo quoting** — Point phone at a car or driveway → AI estimates price based on vehicle type, surface condition, and operator's pricing history.
- **Fleet account management** — Corporate dashboard for dealerships, rental companies, and property managers to manage recurring service schedules, bulk invoicing, and approval flows.
- **Satellite/aerial measurement** — SatQuote API integration for remote square footage estimation.

---

## User Journeys

### Journey 1: Mike — Solo Pressure Washer (Primary User, Success Path)

**Who Mike is:** Age 32, solo operator, iPhone-dependent. Revenue ~$80K/year, 4–6 jobs per day in season. Currently uses paper invoices, stores before/after photos in Camera Roll, manually calls to confirm appointments, loses 1–2 jobs/week to no-shows, prices from memory.

**The story:**

Mike sees a post in r/pressurewashing: "What software are you using?" — top reply mentions CleanCRM, "finally has before/after photos built in, saved me $40/mo on CompanyCam." He Googles "pressure washing software before after photos," lands on CleanCRM's blog post ranking #1, watches the 90-second demo video, and immediately recognizes his pain.

He signs up for the 14-day free trial. The onboarding flow asks for his business name, imports 3 contacts from his phone, and walks him through creating his first job. He takes test before/after photos and sees a branded client gallery generated automatically — the "aha!" moment happens in under 15 minutes.

On his next job, Mike uses CleanCRM end-to-end for the first time. From the truck, he sends a professional quote with a "Good/Better/Best" pricing tier — the client selects the Better option and pays a $75 deposit through the quote link. When Mike arrives, no-show anxiety is gone. He takes before photos, does the work, takes after photos, and hits "Complete Job." The client receives a branded photo gallery link and a Google review request automatically. That night, Mike gets a 5-star review notification.

After 10 days, Mike posts in r/pressurewashing: "Switched from paper to CleanCRM last month, already got 8 new Google reviews and haven't had a no-show." He converts to the LTD at $69.

**Journey requirements this reveals:**
- Mobile-first quote creation from the field
- Deposit collection integrated into the quote approval flow
- Automated job confirmation (no manual follow-up)
- One-tap before/after photo capture with auto-gallery generation
- Automated post-job review request triggered by gallery delivery
- LTD purchase flow directly in-app or via AppSumo

---

### Journey 2: Jessica — Auto Detailer & Ceramic Coating Specialist (Primary User, Migration Path)

**Who Jessica is:** Age 28, mobile van, 3–5 vehicles/day, revenue ~$120K/year. Heavy Instagram presence. Currently uses Urable for scheduling/invoicing, pays separately for CompanyCam-equivalent, tracks ceramic coating warranties in a spreadsheet.

**The story:**

Urable announces a pricing increase following Fullsteam's acquisition. Jessica sees the community thread: "Urable just raised prices — what is everyone switching to?" CleanCRM's "Compare us to Urable" landing page appears in search and shows feature parity plus built-in before/after photos, lower pricing, and no PE ownership.

CleanCRM offers free 1-click Urable data import. Jessica moves her customer list, job history, and pricing templates in 20 minutes. She configures her vehicle-specific pricing templates (sedan, SUV, luxury, motorcycle) in 10 minutes.

On her first ceramic coating job with CleanCRM, she documents the pre-inspection photos, applies the coating, and takes after photos. The client gallery is auto-generated. For her Instagram post, she exports the square-format before/after directly from the job record — zero editing, 2 minutes saved per job. She saves 30+ minutes vs. her old workflow on a single job.

Three months later, Jessica films a YouTube review: "I switched from Urable to CleanCRM — here's why." It becomes a high-ranking organic discovery channel for CleanCRM.

**Journey requirements this reveals:**
- Urable data import (CSV or API) to de-risk migration
- Vehicle-specific pricing templates (luxury/specialty categories)
- Pre/post inspection photo workflow (not just before/after — labeled by stage)
- Instagram/TikTok export of square-format before/after from job gallery
- Competitor comparison landing page as acquisition channel
- Affiliate/referral tracking for community influencers

---

### Journey 3: Carlos — Small Crew Exterior Cleaning (Secondary User, Crew Coordinator)

**Who Carlos is:** Age 41, pressure washing + soft washing + gutter cleaning. 2 crews, 3 employees, 2 trucks, revenue ~$350K/year. Currently uses Jobber at $119/mo + CompanyCam at $29/mo. Total software: $148+/mo for basic functionality. Pain: crew coordination, inconsistent chemical mixing, no quality-check photos from each job.

**The story:**

Carlos is paying $148/mo for two tools that still don't cover chemical mixing guidance for new employees. He finds CleanCRM through a Reddit thread and calculates he'd save $120/mo while getting crew dispatch, route optimization (V1.5), and chemical mixing sheets (V1.5).

In V1 MVP, Carlos uses CleanCRM for team job assignment and photo verification: he assigns jobs to Crew 1 and Crew 2 from his phone, and both crew members see their schedule and can upload job photos. Carlos can review before/after photos from each job remotely to quality-check work without calling employees.

On V1.5, Carlos gets chemical mix sheets embedded in each job — new employees mix correctly every time. Routes are auto-optimized, saving both crews 30 minutes of driving per day.

**Journey requirements this reveals:**
- Multi-user account (team view of job calendar)
- Job assignment to a specific team member
- Team member photo upload (not just account owner)
- Manager view of photo submissions per job (remote quality check)
- Role-based access (manager vs. field technician permissions)

---

### Journey 4: End Client — Receiving the Gallery (Indirect User)

**Who they are:** A homeowner who hired Mike for a house wash, or a car owner who hired Jessica for a full detail. They don't log into CleanCRM but interact with its outputs.

**The story:**

Sarah books a house wash with Mike. She receives an automated SMS 24 hours before: "Your house wash is tomorrow at 10am — reply YES to confirm." She replies YES. Mike completes the job. Sarah receives a text with a link: "Your before/after photos are ready! [link]." She opens a mobile-optimized branded gallery page showing 8 before and 8 after photos of her home. At the bottom: "Enjoyed the results? We'd love a Google review!" She taps, leaves a 5-star review.

Two weeks later, Sarah texts Mike again for a deck wash — she remembered the name because of the gallery.

**Journey requirements this reveals:**
- Mobile-optimized client gallery page (no login required)
- Gallery includes operator name, logo, and job date
- Embedded "Leave a Google Review" CTA with pre-filled link
- SMS delivery of gallery link within minutes of job completion
- Gallery must load quickly on mobile (photos < 1MB each, lazy-loaded)

---

### Journey Requirements Summary

| Capability Revealed | By Journey |
|--------------------|-----------|
| Mobile-first quote from the field | Mike |
| Deposit collection in quote flow | Mike |
| Automated job confirmation SMS | Mike, Client |
| One-tap before/after photo capture | Mike, Jessica |
| Auto-generated client gallery | Mike, Jessica, Client |
| Post-job review request automation | Mike, Client |
| Urable/competitor data import | Jessica |
| Vehicle-specific pricing templates | Jessica |
| Instagram/TikTok photo export | Jessica |
| Multi-user job assignment | Carlos |
| Remote photo quality review (manager view) | Carlos |
| Role-based access (manager vs. tech) | Carlos |
| Mobile-optimized public gallery page | Client |
| Google Review CTA in gallery | Client |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Chemical Inventory Intelligence (First-Mover, No Competitor Equivalent)**
No field service management tool at any price point — not Jobber, Housecall Pro, ServiceMonster, Urable, or QuoteIQ — tracks chemical inventory levels, dilution ratios per surface type, cost-per-job chemical consumption, or reorder alerts. This is both a genuine product innovation and a deep moat: it requires domain knowledge (e.g., knowing that 12.5% sodium hypochlorite is diluted differently for roof soft wash vs. concrete) that generic FSM vendors will never invest in acquiring. Validation: operators in r/pressurewashing and r/AutoDetailing regularly post about chemical mixing errors causing surface damage and incorrect job pricing — this pain is real and unaddressed.

**2. Built-In Before/After Photo Workflow (Eliminates $29–99/mo External Tool)**
The before/after photo workflow is fundamental to exterior cleaning marketing and liability protection, yet every existing FSM tool treats it as an add-on (CompanyCam integration). CleanCRM makes it native to the job record — photos are captured in-app, auto-organized, and delivered to clients without any additional tool or workflow. This is not a novel concept in isolation, but making it native, free, and auto-connected to the job lifecycle is a genuine product innovation in this niche. Validation: CompanyCam's $29–99/mo pricing and 300,000+ customers confirm the market is paying for this problem to be solved — CleanCRM includes it for free at a lower price point than any competitor.

**3. Dual-Vertical Unified Platform (Industry-Native for Two Adjacent Niches)**
Pressure washing and auto detailing are adjacent niches with overlapping operators (many do both) and shared workflow patterns (quote → job → photos → payment → review). No existing tool serves both with industry-native quoting templates, photo workflows, and terminology. This dual-vertical approach doubles the addressable market while maintaining the "built for you" authenticity that large FSM vendors can't credibly claim.

### Market Context & Competitive Landscape

The 12-month competitive window (April 2026–April 2027) is uniquely favorable:
- Urable's PE acquisition creates active customer churn — community trust is broken at the exact moment CleanCRM launches
- Generic FSM vendors (Jobber, HCP) have large marketing budgets but multi-industry roadmaps — they cannot pivot to build chemical tracking or dual-vertical quoting for a niche that represents <2% of their customer base
- QuoteIQ is moving toward pressure washing specialization but lacks the detailing vertical and has no before/after photo workflow; they are a feature-matching risk, not a platform threat
- No player has launched on AppSumo in this niche — the LTD channel is open

### Validation Approach

- Chemical tracking: Launch as "coming soon" in V1 to measure waitlist conversion before building; include in AppSumo deal terms as V1.5 feature
- Before/after gallery: Core to V1 launch; photo adoption rate (target: 40% of jobs at 30 days) is the primary validation metric
- Dual-vertical: AppSumo page split-tests "pressure washing CRM" vs. "exterior cleaning CRM" messaging to measure which vertical drives more conversions

### Risk Mitigation

- **QuoteIQ adds before/after photos:** CleanCRM should aim to own the chemical tracking moat before this risk materializes (V1.5 launch within 4 months of MVP)
- **Urable stabilizes post-acquisition:** PE historically raises prices and reduces feature velocity; build community moat and SEO authority before this risk resolves
- **Innovation fails to resonate:** If photo adoption < 20% at 30 days, diagnose onboarding friction before adding chemical tracking; the MVP core must work before the moat matters

---

## SaaS B2B Mobile — Specific Requirements

### Project-Type Overview

CleanCRM is a mobile-first SaaS B2B product targeting the micro-SMB segment: solo operators and small crews (1–5 users). The primary interface is a React Native mobile app; the web dashboard is a secondary surface used for setup and reporting. This is not an enterprise SaaS product — it prioritizes iPhone usability, offline resilience, and minimal onboarding friction over complex configuration, audit trails, or enterprise SSO.

### Technical Architecture Considerations

**Multi-Tenancy Model:**
- Single-tenant data isolation per account (each business's data is completely separate)
- Account-level billing (not user-level) — pricing tiers based on seat count (Solo: 1 user; Crew: 3 users; Pro: 5 users)
- Team members invited via phone number/email; owner controls access

**Authentication:**
- Phone number + OTP (primary) — operators trust SMS verification and rarely remember passwords
- Email/password fallback
- Biometric (Face ID/Touch ID) for returning mobile users
- No enterprise SSO required for MVP

**Data Sync Architecture:**
- Offline-first for core operations (job creation, photo capture, status updates)
- Conflict resolution: last-write-wins for field data; photos are append-only
- Background sync when connectivity restored — must handle 4G reconnection gracefully
- Local SQLite for offline job/customer data; S3-equivalent object storage for photos

**Integrations (MVP):**
- Stripe — payment processing, NFC tap-to-pay, card on file, payment links
- Twilio — SMS/MMS delivery for reminders, confirmation requests, gallery links
- Google Maps — address validation and (V1.5) route optimization
- Push notifications — APNs (iOS) and FCM (Android)

**Photo Pipeline:**
- In-app capture → local HEIC/JPEG → background upload to CDN
- Server-side resize to web-optimized sizes (thumbnail 300px, gallery 1200px, full 2400px)
- Public gallery URLs must be served via CDN for < 1s load time on mobile LTE
- 5GB storage per account included; overage tracked but not hard-limited in MVP

### Tenant Model

Each CleanCRM account is an independent business entity:
- Account owner (operator) has full access to all features
- Team members (V1 MVP: limited to photo upload and job status updates only; full crew features in V1.5)
- Client-facing gallery pages are public URLs (no auth required), scoped to a single job

### Permission Matrix (MVP)

| Action | Owner | Team Member |
|--------|-------|-------------|
| Create/edit customers | ✅ | ❌ |
| Create/edit jobs | ✅ | View + status update only |
| Send quotes | ✅ | ❌ |
| Capture/upload job photos | ✅ | ✅ |
| Process payments | ✅ | ❌ |
| Send SMS reminders | ✅ (automated) | ❌ |
| View revenue reports | ✅ | ❌ |
| Manage account/billing | ✅ | ❌ |

### Implementation Considerations

- **App store distribution:** Both App Store and Google Play at launch; use Expo/React Native for shared codebase; target iOS 16+ and Android 12+
- **SMS compliance:** Opt-in consent captured at booking confirmation; STOP keyword handling required; Twilio A2P 10DLC registration required for US SMS delivery
- **Payment compliance:** Stripe handles PCI scope; no raw card data touches CleanCRM servers
- **AppSumo LTD enforcement:** License key system validates LTD tiers at account creation; seat limits enforced server-side
- **Photo storage lifecycle:** Photos associated with jobs are permanent (operators need history for liability); no auto-deletion

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the complete quote-to-payment-to-review workflow for a solo operator on their iPhone. The MVP is successful when one operator can eliminate all external tools (paper, CompanyCam, separate payment app) for their core daily workflow.

**Resource Requirements:** 1–2 full-stack engineers + React Native experience, 1 PM/founder, 1 designer (part-time), 8-week build target to hit Spring 2026 pressure washing season.

**MVP Design Principle:** The before/after photo gallery is the anchor feature — all other MVP features exist to make the photo gallery valuable in context (jobs give photos meaning; quoting generates jobs; payments close jobs; review requests leverage galleries). If forced to cut scope, cut route optimization and multi-user before cutting the photo gallery workflow.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Mike's solo pressure washing workflow (quote → job → photos → payment → review)
- Jessica's auto detailing workflow (quote → job → photos → payment → review)
- Carlos's basic crew coordination (job assignment + remote photo review)
- End client's gallery experience (receive link → view gallery → leave review)

**Must-Have Capabilities:**
- Customer profiles and job lifecycle management
- Surface-specific and vehicle-specific quoting templates
- Good/Better/Best tiered estimate presentation
- Quote-to-deposit payment flow (Stripe)
- In-app before/after photo capture with job tagging
- Auto-generated client gallery with branded public URL
- One-tap square-format photo export for Instagram/TikTok
- Automated SMS reminder sequences (24hr + 2hr pre-job)
- Client confirmation reply tracking
- Post-job review request SMS with gallery delivery
- Tap-to-pay and card-on-file payment processing (Stripe)
- Tip prompt at payment
- Invoice generation and tracking
- Basic revenue reporting (week/month, outstanding)
- iOS + Android app (React Native)
- Offline-capable core (job creation, photo capture)
- Multi-user (owner + team members with limited permissions)

### Post-MVP Features

**Phase 2 — V1.5 (~Month 4):**
- Chemical inventory tracking: stock levels, dilution calculators per surface type, per-job cost tracking, reorder alerts
- Route optimization: Google Maps multi-stop daily route planning
- Multi-crew dispatching: full crew management, dispatcher UI, crew-specific job views
- Review platform integrations: pull Google/Yelp/Facebook reviews into dashboard
- Data import from Urable, Jobber, and QuoteIQ (customer/job history)

**Phase 3 — V2 (~Month 6+):**
- Ceramic coating warranty manager: VIN-linked history, warranty certificates, annual reminders
- VIN scanning (camera-based VIN capture → vehicle auto-populate)
- In-app two-way SMS/calling (Twilio)
- AI photo quoting (snap a car or surface → suggested price)
- Satellite/aerial square footage measurement (SatQuote API)

**Phase 4 — V3 (~Month 9+):**
- Fleet account management (corporate dashboard, bulk invoicing, approval flows)
- Marketplace/referral network (overflow job routing between operators)
- Financing integration (embedded lending for large jobs)
- Expansion to adjacent verticals (window cleaning, gutter cleaning, deck staining)

### Risk Mitigation Strategy

**Technical Risks:**
- React Native offline sync is the highest-risk technical component — prototype and test before committing to architecture. Fallback: require internet connection with graceful degradation messaging rather than complex offline conflict resolution.
- Stripe NFC tap-to-pay requires physical device testing with hardware readers — order readers in week 1 of development.

**Market Risks:**
- AppSumo launch underperforms (<300 units): mitigate by seeding 10 free beta accounts in r/pressurewashing 4 weeks pre-launch and ensuring ≥4.5/5 rating from beta cohort before going live.
- QuoteIQ adds before/after photos before launch: move fast; 8-week build target is the mitigation.

**Resource Risks:**
- If team is smaller than planned: cut multi-user permissions from MVP (Carlos's journey degrades to account owner only) and defer to V1.5. The Mike and Jessica journeys remain fully supported and represent the core LTD customer.

---

## Functional Requirements

### Customer & Job Management

- FR1: Operators can create and manage customer profiles with contact info, vehicle details, property details, and service history
- FR2: Operators can create jobs linked to customers with status tracking across the full lifecycle (Estimate → Scheduled → In Progress → Complete → Invoiced → Paid)
- FR3: Operators can view their full schedule in a day and week calendar view
- FR4: Operators can add internal notes to jobs and customers visible only to their team
- FR5: Operators can invite team members to their account and assign jobs to specific team members
- FR6: Team members can view jobs assigned to them and update job status

### Quoting & Estimating

- FR7: Operators can create itemized quotes from pre-built surface-specific pricing templates (concrete driveway, asphalt, vinyl siding, wood deck, roof soft wash, fence, gutters)
- FR8: Operators can create itemized quotes from pre-built vehicle-specific pricing templates (sedan, SUV/truck, van, luxury, motorcycle)
- FR9: Operators can present quotes in a Good/Better/Best tiered format with different service levels and prices
- FR10: Operators can override any line-item price on a quote before sending
- FR11: Clients can view quotes on a mobile-optimized web page and approve or request changes without creating an account
- FR12: Clients can pay a deposit to confirm a quote booking via credit card or debit card

### Photo Documentation

- FR13: Operators can capture before and after photos from within the app using the phone camera, tagged to the current job
- FR14: Team members can upload job photos from within the app
- FR15: Photos are automatically organized by job, customer, and date in the operator's account
- FR16: Operators can generate a branded client gallery link for any completed job with all before and after photos
- FR17: Clients can view their before/after photo gallery on a mobile-optimized public page without logging in
- FR18: Operators can export any before/after photo pair as a square-format image ready for Instagram or TikTok posting
- FR19: Operators can search and filter their photo library by customer, date, or job type

### Communication & Reminders

- FR20: Operators can configure automated SMS reminder sequences sent to clients before scheduled jobs (default: 24hr and 2hr prior)
- FR21: Clients can confirm or cancel a scheduled job by replying to the SMS reminder
- FR22: Operators are notified when a client confirms or does not confirm a job
- FR23: Operators can send the client gallery link via SMS automatically upon job completion
- FR24: Operators can trigger an automated post-job SMS review request linked to the client's Google Business profile
- FR25: Operators can edit the default SMS templates for reminders, confirmations, and review requests
- FR26: Operators can see a log of all SMS messages sent to each client

### Payments & Invoicing

- FR27: Operators can accept in-person payments via NFC tap-to-pay from the app using a Stripe card reader
- FR28: Operators can charge a client's card on file for any job
- FR29: Operators can send clients a payment link via SMS or email to pay remotely
- FR30: Operators can present a tip prompt to clients at the point of payment with configurable percentage options
- FR31: Operators can generate an itemized invoice from a completed job with one tap
- FR32: Clients automatically receive a payment receipt via SMS or email after payment
- FR33: Operators can mark any invoice as paid manually (for cash payments)
- FR34: Operators can view a list of outstanding unpaid invoices

### Reporting & Business Insights

- FR35: Operators can view revenue totals for the current week and current month
- FR36: Operators can view a list of completed jobs with their payment status for any date range
- FR37: Operators can view a count of Google review requests sent and track which clients received them
- FR38: Account owners can view total photo storage used across all jobs

### Account & Settings Management

- FR39: Operators can configure their business name, logo, and contact information used on quotes, invoices, and client galleries
- FR40: Operators can set default pricing templates for their primary service type (pressure washing or auto detailing or both)
- FR41: Operators can manage their Stripe connection for payment processing
- FR42: Operators can manage their team members (invite, remove, view active members)
- FR43: Operators can view and manage their subscription tier and billing information
- FR44: Operators can connect their Google Business Profile URL for review request links

### Mobile Experience

- FR45: Operators can use all core job management and photo features without internet connectivity, with automatic sync when connectivity is restored
- FR46: Operators receive push notifications for client confirmations, payment receipts, and job reminders
- FR47: Operators can complete the full onboarding flow (business setup, first customer, first job, first photo gallery) within 30 minutes of downloading the app

---

## Non-Functional Requirements

### Performance

The product's core differentiator (before/after photo gallery) must be fast — slow photo upload will kill the workflow:
- Quote creation and submission: < 2 seconds end-to-end on LTE
- Photo capture and local save: immediate (< 0.5s) — background upload runs asynchronously
- Photo upload to CDN: < 5 seconds per photo on LTE; queued with progress indicator on slower connections
- Client gallery page load (first paint): < 1.5 seconds on mobile LTE; photos lazy-loaded as user scrolls
- Payment processing confirmation: < 3 seconds (Stripe API dependent)
- App cold start on iPhone 12+: < 2 seconds

### Security

Processing payments and storing business/client data requires:
- All data encrypted in transit (TLS 1.2+ minimum) and at rest (AES-256)
- Stripe handles all payment card data; no raw card numbers stored or transmitted through CleanCRM servers — full PCI compliance delegated to Stripe
- Client gallery URLs use unguessable tokens (UUID v4 minimum) — not sequential IDs
- SMS OTP authentication tokens expire after 10 minutes
- Team member access scoped strictly to assigned jobs; no cross-account data access possible
- Photo storage URLs not publicly listable; require signed tokens for access
- Account deletion results in hard deletion of all customer/job data within 30 days (CCPA compliance)

### Scalability

Designed for a successful AppSumo launch that could onboard 2,000 accounts in 72 hours:
- API infrastructure scales horizontally; no single-server bottlenecks
- Photo storage via S3-compatible object storage with CDN — scales independently of compute
- SMS sending via Twilio handles burst delivery without rate-limiting operators
- Database reads for calendar and job list must support 10,000+ concurrent users without query degradation
- Photo CDN must support 100K+ gallery page loads per day at peak (viral post scenario)

### Reliability

Blue-collar operators depend on this tool for their livelihood — reliability builds trust:
- API uptime: 99.5% monthly SLA — 3.6 hours maximum downtime per month
- Offline mode guarantees that an operator can always create a job and capture photos even with no internet; sync failure does not result in data loss
- Automated SMS reminders must have a delivery rate ≥95%; failed deliveries logged and surfaced to operator
- Stripe payment processing failures surfaced immediately with clear retry instructions; no silent failures
- Photo uploads are idempotent — if upload fails and retries, no duplicate photos are created

### Integration

External service dependencies must degrade gracefully:
- Stripe outage: payment collection is unavailable, but all other app features continue working; operator sees clear "payments temporarily unavailable" messaging
- Twilio outage: automated SMS reminders are queued and delivered when service resumes; operator can see pending queue
- Google Maps outage: address validation degrades gracefully (free-text address entry); route optimization (V1.5) shows error state
- All integrations have documented rate limits with graceful backoff handling in the codebase

---

## Appendix: Go-To-Market Context

This section is included for downstream planning context (architecture, epics). It is not a product requirement but provides critical constraints that shape implementation priorities.

### Launch Sequence Constraints

The AppSumo launch strategy requires:
- LTD license key enforcement system must be implemented server-side before AppSumo launch
- AppSumo webhook integration for license validation at account creation
- Seat limit enforcement: Solo (1 user), Crew (3 users) — hard limit in account settings
- AppSumo LTD customers must be visibly segmented from MRR customers in the database for future pricing migrations

### Pricing Tier Implementation

| Tier | Type | Users | Implementation Notes |
|------|------|-------|---------------------|
| LTD Solo | One-time ($59) | 1 | AppSumo license key |
| LTD Crew | One-time ($99) | 3 | AppSumo license key |
| Monthly Solo | $29/mo | 1 | Stripe subscription |
| Monthly Crew | $49/mo | 3 | Stripe subscription |
| Pro | $79/mo | 5 | Stripe subscription; unlocks V1.5 features |

### SEO & Content Strategy Constraints

The product naming, URL structure, and content architecture must support:
- `/pressure-washing-software` and `/auto-detailing-crm` as top-level landing pages
- Blog content indexed under `/blog/` with category structure for pressure washing and auto detailing
- Competitor comparison pages at `/vs/urable`, `/vs/jobber`, `/vs/housecall-pro`, `/vs/quoteiq`
- Free tools (invoice template, quote calculator) at `/tools/` for SEO lead generation

### Community & Referral Architecture

- Operators sharing client gallery links generates natural product awareness (gallery branded with CleanCRM logo and "Create your own gallery" CTA)
- In-gallery "Powered by CleanCRM" attribution is the primary viral loop — must be present on free and paid plans
- Referral tracking required to attribute signups from YouTube reviews and Reddit posts (UTM parameters through to account creation)

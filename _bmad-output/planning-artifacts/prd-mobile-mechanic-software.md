---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/mobile-mechanic-software.md
  - _bmad-output/planning-artifacts/product-brief-mobile-mechanic-software.md
workflowType: prd
project_name: mobile-mechanic-software
lastStep: step-12-complete
classification:
  projectType: saas_b2b
  domain: field_service
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — VanOps (Mobile Mechanic Software)

**Author:** Root
**Date:** 2026-06-04

---

## Executive Summary

VanOps is a mobile-first SaaS built exclusively for independent mobile mechanics — technicians who operate from a van or trailer rather than a fixed service bay. The product eliminates the four-tool patchwork (Google Maps + Square + SMS + paper inspections) that mechanics currently use by delivering route-clustered scheduling, digital inspection reports, Stripe card pre-authorization, and an automotive vehicle CRM in a single $49/month tool designed entirely for phone-based field use.

The core problem: every auto repair management platform on the market (Tekmetric, AutoLeap, Shopmonkey at $179–$224/month) was architected for a shop with service bays, a parts room, and multiple advisors. Mobile mechanics have none of these. They pay 3–5× too much for features they cannot use, while the four capabilities they need most — geographic job clustering, pre-authorized card-on-file, mobile digital inspection, and VIN-based vehicle history — exist only in fragmented form across unrelated tools.

The killer differentiator is **route-clustered daily scheduling**: jobs are grouped by geographic proximity and presented in optimized drive order before the mechanic leaves for the day, reducing daily drive time by 30–60 minutes. No tool at the $40–$60/month tier provides this in combination with the remaining three capabilities. The nearest competitor (Trackara Pro, $49.99/month) lacks both route clustering and card pre-authorization.

Target users: ~150,000 independent mobile mechanics in the US, primarily solo van operators billing $60–$120/hour and clearing $70–$100K/year. Market: $4.3–$9.2B services segment growing 9–15% annually.

Revenue path: community beta (Reddit/Facebook) → AppSumo $59 LTD → $49/month SaaS → parts ordering upsell. Target: $10K MRR within 12 months.

### What Makes This Special

1. **Route-clustered scheduling at the right price point.** Grouping residential jobs by proximity and surfacing the optimal daily drive order is the single highest-value feature for a solo mobile mechanic. Competitors at 3–4× the price don't offer it; nothing at $49–$59 does. Every active user saves 30–60 minutes/day — a measurable, recurring win that drives retention.

2. **Pre-authorization eliminates the two biggest daily friction points.** No-shows and post-job payment chasing are the most-cited pain points across mobile mechanic communities. Capturing the card at booking and auto-charging on job close removes both entirely. This feature exists in the $79–$115/month tier (Wrenchy) but not at the solo mechanic price point.

3. **"Built for the van, not the bay" positioning.** Every screen is designed for one person working from a phone at a customer's driveway. No service bay scheduler, no parts room inventory, no multi-advisor overhead. The positioning is a direct rejection of the shop-software retrofit approach used by every competitor — and it resonates immediately with mechanics who have tried and abandoned Tekmetric or Jobber.

4. **First-mover on AppSumo for auto repair SaaS.** No auto repair or mobile mechanic software currently lists on AppSumo. The $59 LTD launch creates a community of brand advocates before the subscription flywheel starts.

## Project Classification

- **Project Type:** SaaS B2B (field service, single-tenant per mechanic account, optional multi-user for small crews in Phase 3)
- **Domain:** Field Service / Auto Repair
- **Complexity:** Medium (Stripe Connect pre-authorization flow, Google Maps Distance Matrix API integration, mobile-first PWA, VIN lookup integration)
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

A mechanic is successful with VanOps when:

- Route clustering reduces their daily drive time by ≥30 minutes, validated through self-report and observable job sequence data
- Pre-authorized charges eliminate post-job payment chasing (≥90% of jobs paid automatically within 60 seconds of "Complete" tap)
- Any customer's vehicle history is retrievable in under 10 seconds from the field
- Every job produces a digital inspection report link sent to the customer before work authorization
- The mechanic's first successful end-to-end flow (book → cluster → inspect → charge) completes within 20 minutes of account creation

**Behavioral indicators of activation:**
- Active mechanics open VanOps ≥5 days/week
- ≥80% of jobs have a digital inspection created with at least one photo
- ≥60% of new bookings arrive through the online portal (vs. direct text/call) within 90 days

**Retention moat:** A mechanic with ≥30 vehicle records in the CRM is effectively locked in — switching costs include losing all vehicle service history. Target: ≥30 vehicle records per active mechanic within 60 days of signup.

### Business Success

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| AppSumo LTD sales | 300–500 units at $59 | Month 3 launch window |
| Beta mechanics active in production | 10–20 | End of Month 2 |
| G2/Capterra reviews | 20 written reviews | Before AppSumo submission |
| Paying SaaS subscribers | 50 at $49/month | Month 3 |
| Monthly recurring revenue | $10,000 | Month 12 |
| Monthly churn | <7% | Month 3; <3% by Month 9 |
| NPS | ≥40 | After 30 days of beta use; ≥50 by Month 12 |
| Online portal booking share | 30% of total bookings | Month 3; 60% by Month 12 |

**North Star Metric:** Number of active mechanics completing ≥4 jobs/week in VanOps. This is the primary proxy for "VanOps is their main business tool, not a supplement."

### Technical Success

- Zero payment processing failures in the first 100 Stripe pre-authorization charge events (go/no-go gate for AppSumo)
- Route clustering API response under 3 seconds for a day with 10 jobs
- Mobile web app loads to usable state within 3 seconds on a 4G connection
- 99.5% uptime during beta period (AppSumo submission requirement)
- All job data persisted and recoverable after network interruption at job site

### Measurable Outcomes

The MVP is ready for AppSumo launch when all of the following are simultaneously true:
1. 10 beta mechanics have completed ≥20 real paying jobs each in VanOps
2. Zero payment failures in first 100 Stripe charge events
3. NPS ≥40 from beta cohort after 30 days
4. 20 written G2/Capterra reviews collected
5. Route clustering reduces self-reported drive time ≥25% for ≥7 of 10 beta mechanics

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**Core loop:** Customer books online → card pre-authorized → mechanic sees route-clustered schedule → completes digital inspection → marks job complete → card charges automatically.

**Five required capabilities:**

**1. Customer Booking Portal**
Public-facing mechanic booking URL (`mechanic.vanops.com/[handle]`). Customer selects vehicle via VIN lookup (auto-populates year/make/model) or manual entry, chooses service category, picks date/time within mechanic-defined availability. Card pre-authorized via Stripe at booking. Auto-confirmation SMS/email sent to customer; calendar block created for mechanic.

**2. Route-Clustered Daily Schedule**
Map view of all jobs for the selected day. Geographic clustering groups jobs by proximity (Google Maps Distance Matrix API). Optimized drive order displayed as numbered map pins + sequential list. One-tap navigation opens Google Maps/Waze to next job. Manual drag-to-reorder override.

**3. Mobile Digital Inspection**
In-app multi-photo capture per inspection point. Pre-defined categories: brakes, tires, fluids, belts, lights, battery, general. Photo annotation (text note overlay). Auto-generated HTML inspection report page with all photos, notes, and digital work authorization request. Share via SMS or email from within app. Customer approves work digitally via link.

**4. Stripe Payment + Invoice**
Pre-authorized card auto-charged on "Complete Job" tap. Tip prompt at job close (suggested: $5, $10, $15, custom). Invoice PDF auto-generated: line items, vehicle info, date, mechanic name/business. Invoice emailed to customer automatically. Manual charge fallback for walk-in jobs.

**5. Vehicle CRM**
Customer profiles: name, phone, email, address. Vehicle profiles: VIN, year/make/model/trim, mileage. Service history per vehicle: date, mileage, work performed, charge total, inspection report link. Quick-add returning vehicle at booking or during job creation.

**Out of scope for MVP** (explicitly deferred):
- Mileage/IRS deduction tracking → Phase 2
- Automated SMS reminders → Phase 2
- OBD2 Bluetooth diagnostics → Phase 3
- Multi-tech dispatch → Phase 3
- Parts ordering (PartsTech/Nexpart API) → Phase 3
- Offline mode → Phase 3
- QuickBooks integration → Phase 3
- Custom branded inspection reports → Phase 2
- Native Android/iOS apps → Phase 2 (PWA first)

**Scope gate:** Any feature requiring a schema change beyond the 5 core tables (customers, vehicles, jobs, inspections, payments) is automatically Phase 2.

### Growth Features — Post-MVP (Phase 2, Months 2–4)

- Automated SMS/email reminders: 24h before and 1h before appointment (Twilio)
- Mileage tracking with IRS deduction calculation and monthly export report
- Invoice customization: mechanic business logo, payment terms, late fee warnings
- Multi-vehicle support per customer (family cars, fleet vehicles)
- Android PWA optimization and home-screen install prompts
- Custom branded inspection report URLs and logos

### Vision — Future (Phase 3+, Months 4–12+)

- Multi-tech dispatch: owner assigns jobs to 2–3 techs, route clusters per tech
- Parts ordering via PartsTech/Nexpart API embedded in job view; 3–5% platform margin
- QuickBooks Online sync: job revenue auto-posted
- OBD2 Bluetooth integration: diagnostic codes captured in job record
- Offline mode: jobs cached locally, sync on reconnect
- EV diagnostics module: EV-specific inspection checklist, battery health reporting
- Fleet/insurance preferred-provider integration
- UK/Australia market expansion

---

## User Journeys

### Journey 1: Marcus — Solo Mobile Mechanic, Core Daily Flow (Primary Happy Path)

Marcus, 34, runs 6 residential jobs per day from his Ram ProMaster in a suburban metro. He left a Midas shop three years ago to escape the wage ceiling and now earns $90K/year working 40 hours/week. His current stack: Google Maps (routing), Square (payments), iPhone calendar (scheduling), paper inspection sheets he photographs and texts.

**Discovery:**
Marcus sees a Reddit post in r/AutoMechanic titled "I built software specifically for mobile mechanics — route clustering, pre-auth, digital inspection. No shop features. AMA." He skims the comments, clicks the link. Landing page headline: "Built for the van, not the bay." He recognizes his own workflow in the problem description. Signs up for free trial.

**Onboarding (20 minutes):**
Marcus creates an account, enters his business name and service area. Adds 3 existing customer vehicles — VIN lookup auto-fills year/make/model for all three. Creates a test booking against his own address with an oil change as the service. Sees the route view render with one pin. Connects his Stripe account via embedded OAuth. Sends himself a test invoice; it charges his card. He grins.

**Week 1 — Core Loop:**
Marcus enters his existing week of jobs. The map view groups his Tuesday schedule — he spots two jobs 18 miles apart that he can swap to run consecutively; moves the 2pm job to 11am, saves 40 minutes. Takes his first in-app inspection photos on a real job and sends the link to a real customer. Customer replies: "That's really professional, thanks."

**Aha Moment — Day 6:**
Friday, last job of the day. Marcus taps "Complete." The $340 charge processes automatically. Customer receives PDF invoice by email while Marcus is still in the driveway. He texts his wife: "I think I found the software."

**Month 2 — Habit Formation:**
Route clustering is a daily ritual — Marcus now checks the map before confirming any new booking to see which cluster it falls into. Three new customers found him via his booking portal link posted in his van's Instagram bio, booked without any text exchange. The vehicle CRM has 28 profiles. On a returning customer's truck, Marcus says unprompted: "Last time you were at 47K miles, you're at 52K now — want me to check the rotors while I'm here?" Customer says yes. Marcus adds $120 to the job.

**Requirements revealed by this journey:**
- Online booking portal with VIN lookup and service category selection
- Stripe pre-authorization at booking
- Route clustering map view with optimized daily drive order
- One-tap navigation to next job
- In-app camera with photo annotation
- Auto-generated customer-shareable inspection report
- Digital work authorization via link
- "Complete Job" tap triggers auto-charge and invoice email
- Vehicle CRM with returning customer history lookup
- Mobile-first UI operable in a driveway with greasy hands on a phone screen

---

### Journey 2: Marcus — Edge Case: Customer Not Home at Appointment Time

Marcus arrives at a booked job at 10am. The customer is not there. No answer on the phone.

**Resolution with VanOps:**
Marcus opens the job in VanOps, taps "Customer No-Show." The app logs the timestamp and marks the job as no-show. The pre-authorized card hold is released (Stripe cancel authorization) or Marcus can apply a cancellation fee (configurable: $0, $25, $50) before releasing. He taps the next job on his route cluster view and navigates there. The customer receives an automated notification: "We were at your address at 10:02 AM. Please rebook." Marcus has lost 15 minutes, not the $300 job fee.

**Requirements revealed by this journey:**
- "No-Show" job status with timestamp logging
- Mechanic-configurable cancellation fee applied to pre-authorized hold
- Authorization release or partial capture on no-show
- Automated customer notification on no-show status
- Route view updates to next available job after no-show

---

### Journey 3: Diana — Small Crew Owner, Dispatch View (Phase 3 Secondary User)

Diana, 41, runs 2 employees and dispatches from home. She needs to assign jobs to the right tech by skill level and geography. Currently on AutoLeap at $179/month, using ~30% of its features.

**Current pain:**
Diana manages 3 separate schedule views (hers + 2 techs) manually, often calling techs mid-day to reroute. No tool surfaces "Tech A is 2 miles from a new request; Tech B is 12 miles away."

**VanOps Phase 3 Flow:**
Diana's dashboard shows 3 columns — one per tech — each with their route-clustered job sequence for the day. An incoming booking request appears in a "Unassigned" queue. Diana sees that Tech A's route passes within a mile of the new request location at 2pm; she drags it into his column. Tech A's route map updates in real time on his phone.

**Requirements revealed by this journey (Phase 3):**
- Multi-user accounts with role: owner/dispatcher vs. technician
- Per-tech route cluster views accessible to dispatcher
- Unassigned job queue with geo proximity indicator
- Job drag-assign from dispatcher to tech
- Real-time route update on tech's device when job is added

---

### Journey 4: End Customer — Booking and Inspection Approval (Indirect User)

Sarah, 38, needs a brake inspection on her 2021 Honda CR-V. She finds Marcus's VanOps booking link from a neighborhood Facebook group recommendation.

**Booking flow:**
Sarah opens the link on her iPhone. She enters her VIN; the form auto-fills "2021 Honda CR-V EX." She selects "Brake Inspection/Service," picks Thursday 9am from available slots, and enters her card details for the pre-authorization hold. She receives a confirmation SMS with the appointment details and a "cancel/reschedule" link. No call, no text exchange with Marcus.

**Inspection approval:**
Marcus arrives Thursday, takes 8 photos of the brake pads and rotors, annotates "Left front: 2mm remaining — at wear limit." He taps "Send inspection to customer." Sarah's phone buzzes with a link. She opens a clean HTML report: photos, annotations, total recommended repair: $380. A green "Approve & Authorize Work" button. She taps it. Marcus sees her approval appear on his phone and begins the job.

**Payment:**
Marcus finishes the job, taps "Complete." Sarah's card is charged $380. She receives a PDF invoice via email within 60 seconds.

**Requirements revealed by this journey:**
- Customer-facing booking form with VIN lookup and card capture
- Customer receives confirmation SMS/email with reschedule link
- Mobile-optimized inspection report link (clean HTML, no login required)
- Digital work authorization button on inspection report
- Mechanic sees authorization confirmation in real time
- Customer receives PDF invoice via email on job close

---

### Journey Requirements Summary

| Capability | Source Journeys |
|-----------|----------------|
| Online booking portal with VIN lookup | J1, J4 |
| Stripe pre-authorization at booking | J1, J2, J4 |
| Route-clustered map schedule | J1, J2 |
| No-show handling with cancellation fee | J2 |
| In-app camera + photo annotation | J1, J4 |
| Customer-shareable inspection report (HTML link) | J1, J4 |
| Digital work authorization | J1, J4 |
| Auto-charge + invoice email on job complete | J1, J4 |
| Vehicle CRM with service history | J1 |
| Multi-tech dispatch (Phase 3) | J3 |
| Customer confirmation SMS/email | J4 |
| Mechanic sees real-time authorization from customer | J4 |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Route-Clustered Scheduling for One-Person Field Service**
The core innovation is applying geographic job clustering — a pattern familiar from ride-hailing dispatch (Uber route batching) and multi-stop logistics — to the solo independent mechanic context where the operator is simultaneously the driver, dispatcher, and service technician. No current tool at the $40–$60/month tier implements this. The novelty is not in the clustering algorithm itself (k-means or distance matrix approaches are established) but in (a) the specific application to solo-operated residential auto service, (b) the mechanic-facing UX that makes the optimization actionable in a daily morning routine, and (c) the booking portal integration that allows the mechanic to see in real time how new bookings affect the day's cluster geometry.

**Combined Pre-Authorization + Auto-Charge Without Marketplace Overhead**
Field service tools with card pre-authorization (Wrenchy, HouseCall Pro) typically target multi-tech businesses at higher price points. VanOps brings Stripe Connect pre-authorization to the solo operator price tier. The specific innovation is the "card-at-booking → auto-charge-at-close" atomic flow that eliminates both the no-show problem and the post-job payment chase in a single mechanic action.

### Market Context & Competitive Landscape

No tool occupies the combination of: mobile-native + $49/month + route clustering + card pre-authorization + digital inspection + VIN-based CRM. Trackara Pro ($49.99) covers mobile-native, VIN CRM, digital inspection but lacks route clustering and pre-authorization. Wrenchy ($79–$115) covers pre-authorization but lacks route optimization and is priced above the solo operator threshold. Shop platforms ($179–$224) cover everything but are designed for bays and price out solo operators.

The AppSumo channel has no current listing in the auto repair SaaS category — first-mover LTD creates a defended community position before competitors notice the gap.

### Validation Approach

- Beta cohort of 15–20 mechanics: measure daily drive time before/after (self-report + job sequence timestamps)
- Success gate: ≥7 of 10 beta mechanics report ≥25% drive time reduction attributable to route view
- Payment friction gate: ≥90% of jobs auto-charge successfully in first 100 events
- NPS gate: ≥40 after 30 days — confirms the product feels meaningfully better than the patchwork

### Risk Mitigation

- **Trackara Pro ships route clustering before launch:** Accelerate AppSumo timeline; community brand building starts before they do
- **Algorithm quality disappoints mechanics:** Start with Google Maps Distance Matrix (proven) rather than custom algorithm; offer manual override so mechanics always stay in control
- **Stripe Connect complexity delays launch:** PWA + Stripe Connect setup should be Week 1 of build; no payment = no product

---

## SaaS Field Service — Specific Requirements

### Project-Type Overview

VanOps is a B2B SaaS serving individual field service operators (mobile mechanics) as the primary tenant. Each mechanic account is an isolated tenant with their own customers, vehicles, jobs, and payment configuration. In Phase 3, a tenant can have 2–3 sub-users (technicians) under an owner account.

Key SaaS patterns that apply:
- **Per-seat pricing** in solo tier; per-crew pricing in Phase 3 multi-tech tier
- **Stripe Connect** for per-tenant payment processing (each mechanic is a connected Stripe account; platform takes no marketplace cut in MVP)
- **Booking portal subdomain** per mechanic (`/[handle]`) — public-facing, no-auth access for customers
- **Mobile-first PWA** — iOS and Android home-screen install, no App Store dependency for MVP

### Technical Architecture Considerations

**Frontend:**
- Progressive Web App (React/Next.js) — enables iOS + Android without app store review, faster to iterate than native, fully supports camera API, GPS, and offline storage via Service Worker
- Responsive-first: every screen designed for 375px-wide phone first
- No desktop-specific layouts in MVP (web app on desktop is acceptable but not optimized)

**Backend:**
- RESTful API (Node.js / Express or equivalent)
- PostgreSQL for relational data (customers, vehicles, jobs, inspections, payments)
- Stripe Connect for per-mechanic payment accounts — pre-authorization via `payment_intents` with `capture_method: manual`
- Google Maps Distance Matrix API for route optimization (pay-per-use, ~$5/1000 elements)
- VIN decode via NHTSA free API (vPIC) or VINAPI for year/make/model lookup
- S3-compatible object storage for inspection photos
- SendGrid or Postmark for transactional email

**Data model — 5 core tables (MVP scope gate):**
1. `mechanics` — account, business name, Stripe Connect ID, service area, booking handle
2. `customers` — name, phone, email, address(es), mechanic_id FK
3. `vehicles` — VIN, year, make, model, trim, mileage, customer_id FK
4. `jobs` — customer_id FK, vehicle_id FK, service_category, status, scheduled_at, lat/lng, stripe_payment_intent_id, completed_at, total_amount
5. `inspections` — job_id FK, photo_urls[], annotation_json, share_token, customer_approved_at

**Authentication:**
- Mechanic-facing: email + password with session tokens (or magic-link for frictionless onboarding)
- Customer-facing booking portal: no auth required — public URL with mechanic handle
- Inspection report links: public token-based URLs (UUID share_token, no auth)

### Platform Requirements

- **iOS Safari + Android Chrome** as primary supported browsers for mechanic app
- **Camera API** required: in-app photo capture from native camera (no third-party upload only)
- **GPS/Geolocation API** required: job address geocoding and distance matrix calculation
- **Push notifications** (Phase 2): Web Push API for job reminders and payment confirmations
- **Home-screen install** (PWA manifest): mechanics prompted to install after first job created

### Tenant Model

- Each mechanic = one isolated tenant
- Booking portal URL: `vanops.com/book/[handle]` (mechanic-chosen handle, unique, slug-safe)
- All customer data scoped to mechanic — no cross-tenant data access
- Stripe Connect: each mechanic connects their own Stripe account; charges flow directly to mechanic with no platform fee in MVP (platform fee mechanism added in Phase 3 for parts ordering upsell)

### Implementation Considerations

- **Stripe pre-authorization flow is the critical path:** `payment_intent` with `capture_method: manual` → hold at booking → capture on job complete → cancel on no-show. Test this flow end-to-end in Week 1.
- **Route clustering can start simple:** For MVP, Google Maps Distance Matrix API for up to 10 jobs is sufficient; full TSP optimization is Phase 2. Present greedy nearest-neighbor order as "suggested" with mechanic override.
- **Inspection report HTML page** is the customer-facing trust moment — invest in clean mobile design; this is what mechanics show customers as a differentiator.
- **VIN decode is table stakes:** NHTSA vPIC is free and reliable for year/make/model; trim and options may require a paid API in Phase 2.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — validate that mechanics will pay $49/month (or $59 LTD) for the specific combination of route clustering + pre-auth + inspection + CRM. The MVP is not a prototype; it must be production-ready for real paying jobs.

**MVP Philosophy:** A mechanic who tries VanOps on Monday must be able to run their full Tuesday schedule through it — real customers, real payments, real inspections. No "coming soon" placeholders in the core flow.

**Resource Requirements:** 1–2 full-stack engineers (React + Node.js/PostgreSQL), 1 PM/founder. Target build time: 6–8 weeks to beta-ready, 10–12 weeks to AppSumo launch-ready.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo mechanic books → clusters → inspects → charges full daily workflow
- Customer self-service booking with VIN lookup and card capture
- No-show handling with cancellation fee

**Must-Have Capabilities:**
- Customer booking portal with VIN lookup, availability calendar, Stripe pre-authorization
- Route-clustered daily schedule: map view + optimized order + navigation tap
- Mobile digital inspection: camera capture, annotation, shareable HTML link, customer digital authorization
- Stripe payment: auto-charge on complete, tip prompt, invoice PDF email
- Vehicle CRM: customer profile, vehicle profile, service history
- Job status management: Scheduled → In Progress → Complete / No-Show / Cancelled
- Mechanic onboarding: account creation, Stripe Connect OAuth, service area setup, booking handle selection

### Post-MVP Features

**Phase 2 (Months 2–4 post-launch):**
- Automated SMS reminders (Twilio): 24h before + 1h before
- Mileage tracking with IRS deduction export
- Invoice customization (logo, payment terms)
- Multi-vehicle per customer
- Android PWA optimization
- Custom branded inspection report pages

**Phase 3 (Months 4–12):**
- Multi-tech dispatch with per-tech route views
- Parts ordering integration (PartsTech/Nexpart API)
- QuickBooks Online sync
- OBD2 Bluetooth integration
- Offline mode (Service Worker job caching)

### Risk Mitigation Strategy

**Technical Risks:**
- Stripe Connect pre-authorization is the highest implementation risk → build and test in Week 1; no launch without 100 clean test charge events
- Route clustering API costs at scale → Google Maps Distance Matrix is $5/1,000 elements; at 200 mechanics × 6 jobs/day = $21.60/day; acceptable until $5K MRR, then evaluate Mapbox flat-fee tier

**Market Risks:**
- Low awareness of purpose-built mobile mechanic tools → education-first content; before/after routing demo video as landing page hero
- Beta recruitment bottleneck → over-recruit (25–30 targets) to ensure 15–20 active beta users; Reddit/Facebook outreach in Week 1 of build

**Resource Risks:**
- Team delay on Stripe Connect → Stripe Connect has well-documented onboarding; test account setup in Day 1 of project
- App Store rejection for payment flow → not applicable; PWA avoids App Store entirely

---

## Functional Requirements

### Mechanic Account & Onboarding

- FR1: A mechanic can create an account with email, password, business name, and service area (city/radius)
- FR2: A mechanic can connect their Stripe account via Stripe Connect OAuth embedded in the app
- FR3: A mechanic can choose a unique booking handle (slug) that forms their public booking portal URL
- FR4: A mechanic can configure their availability schedule (days of week, hours, service area radius in miles)
- FR5: A mechanic can configure cancellation fee amount ($0–$100) applied on no-show

### Customer Booking Portal

- FR6: A customer can access a mechanic's booking portal via a public URL without creating an account
- FR7: A customer can enter a VIN to auto-populate vehicle year, make, and model on the booking form
- FR8: A customer can manually enter vehicle year, make, model, and trim if VIN lookup fails
- FR9: A customer can select a service category (oil change, brakes, diagnostics, tires, general repair, other)
- FR10: A customer can pick an available date and time slot from the mechanic's configured availability
- FR11: A customer can enter card details for pre-authorization at booking via Stripe-hosted input
- FR12: A customer receives an SMS and email confirmation with appointment details and a cancel/reschedule link within 60 seconds of booking

### Route-Clustered Daily Schedule

- FR13: A mechanic can view all jobs for any selected day as pins on a map view
- FR14: A mechanic can see a route-optimized job sequence for the day based on geographic proximity
- FR15: A mechanic can tap a job pin or list item to navigate to that address via Google Maps or Waze
- FR16: A mechanic can manually reorder the day's jobs by dragging items in the list view
- FR17: A mechanic can add an unscheduled job directly from the map view at a chosen address

### Job Management

- FR18: A mechanic can view a job's customer name, vehicle, service category, address, and scheduled time from a job detail screen
- FR19: A mechanic can update a job's status: Scheduled → In Progress → Complete or No-Show or Cancelled
- FR20: A mechanic can apply the configured cancellation fee to a no-show job before releasing the card hold
- FR21: A mechanic can add line items (labor, parts, additional services) to a job before charging
- FR22: A mechanic can add an internal note to any job not visible to the customer

### Digital Inspection

- FR23: A mechanic can create a digital inspection for any job and capture multiple photos per inspection category
- FR24: A mechanic can select from pre-defined inspection categories: brakes, tires, fluids, belts, lights, battery, general
- FR25: A mechanic can add a text annotation to any inspection photo
- FR26: A mechanic can generate a shareable inspection report link from within the app
- FR27: A mechanic can send the inspection report link to the customer via SMS, email, or copy-to-clipboard from within the app
- FR28: A customer can view the inspection report via the shared link without logging in on any mobile browser
- FR29: A customer can approve work authorization by tapping a button on the inspection report link
- FR30: A mechanic sees a real-time notification when the customer approves the inspection report

### Payment & Invoicing

- FR31: A mechanic can trigger payment capture on a job by tapping "Complete Job," which auto-charges the pre-authorized card for the job total
- FR32: A mechanic sees a tip prompt with suggested amounts ($5, $10, $15, custom) before confirming job completion
- FR33: A customer receives a PDF invoice via email within 60 seconds of the mechanic completing a job
- FR34: A mechanic receives a copy of the invoice PDF in their email and can access all past invoices from the app
- FR35: A mechanic can process a manual card charge for walk-in jobs not booked through the portal
- FR36: A mechanic can issue a full or partial refund for any completed job from within the app

### Vehicle CRM

- FR37: A mechanic can create a customer profile with name, phone, email, and one or more service addresses
- FR38: A mechanic can add a vehicle to a customer profile with VIN, year, make, model, trim, and current mileage
- FR39: A mechanic can view the complete service history for any vehicle: all past jobs with date, mileage, work performed, total charged, and inspection report link
- FR40: A mechanic can search customers by name, phone, or vehicle VIN from the field
- FR41: A mechanic can add a recurring service recommendation to a vehicle record (e.g., "next oil change at 55,000 miles")
- FR42: A customer's vehicle record is automatically updated with mileage and service notes when a job is completed against that vehicle

### Reporting & Business Visibility

- FR43: A mechanic can view a revenue summary for any date range (daily, weekly, monthly) showing total jobs completed and gross revenue
- FR44: A mechanic can see a list of all pending, in-progress, and completed jobs for any day from a dashboard view
- FR45: A mechanic can export a CSV of all completed jobs for a selected date range (for bookkeeping)

---

## Non-Functional Requirements

### Performance

- The route clustering calculation (Distance Matrix API call + sort) completes and renders the day's map view in under 3 seconds for a day with ≤10 jobs on a 4G mobile connection
- The mechanic app loads to fully interactive state (job list visible) within 3 seconds on a 4G connection (measured by Lighthouse TTI)
- The customer booking portal submits a booking and shows confirmation within 5 seconds of the customer tapping "Book" on a 4G connection
- Inspection photo upload (single photo, ≤5MB) completes and appears in the inspection record within 10 seconds on a 4G connection
- "Complete Job" to invoice email delivery completes within 60 seconds in 95th percentile of events (Stripe capture + PDF generation + email send)

### Security

- All data transmitted between client and server uses TLS 1.2 or higher; HTTP requests are redirected to HTTPS
- Card data is never stored on VanOps servers; all payment input and tokenization handled by Stripe Elements/Stripe Connect
- Stripe pre-authorization flows use `payment_intent` with `capture_method: manual`; authorization amounts match the job total at time of booking
- Inspection report share links use UUID tokens (≥128-bit entropy); no sequential IDs are used for customer-facing resources
- Mechanic session tokens expire after 30 days of inactivity; customer booking sessions expire after 24 hours
- Inspection photos stored in private S3 bucket; customer-facing links use time-limited signed URLs (24-hour expiry for open link, permanent expiry after work authorization)
- All passwords hashed using bcrypt with work factor ≥12
- PCI-DSS SAQ-A compliance maintained by delegating all card data handling to Stripe (no card numbers, CVVs, or full PANs touch VanOps infrastructure)

### Scalability

- System supports 500 concurrent active mechanic accounts with no performance degradation in the Performance SLAs above
- System supports 5,000 concurrent customer booking portal sessions (AppSumo launch spike scenario)
- Database queries for job list, customer search, and vehicle history complete in under 100ms at 10,000 mechanic accounts
- Photo storage scales to 1TB without architectural change (S3-compatible object storage is horizontally scalable by design)

### Reliability

- Application uptime ≥99.5% measured monthly (AppSumo submission requirement)
- Stripe webhook events for payment confirmations are processed with at-least-once delivery; duplicate charge events are idempotent (Stripe idempotency key pattern)
- Job data (customer info, job details, inspection photos) persists if the mechanic's browser closes mid-inspection; draft inspection state is auto-saved every 30 seconds
- Failed Stripe captures (e.g., card declined after pre-authorization) trigger an immediate in-app notification to the mechanic with the customer's phone number for manual follow-up

### Integration

- Stripe Connect: OAuth flow for mechanic account connection; `payment_intents` API for pre-authorization and capture; `refunds` API for refund issuance; webhook events for capture confirmation and failure
- Google Maps Distance Matrix API: job address geocoding at booking; distance/time matrix for daily route optimization; one-tap navigation handoff to Google Maps or Waze
- NHTSA vPIC API: VIN decode for year/make/model population at booking and vehicle CRM entry
- Email delivery (SendGrid or Postmark): transactional email for booking confirmations, inspection report links, invoice PDFs; delivery confirmation tracked; bounce handling for invalid customer emails
- SMS delivery (Twilio, Phase 2): booking confirmation and reminder SMS; opt-out compliance (TCPA)

---

*PRD created: 2026-06-04*
*Source documents: mobile-mechanic-software shortlisted idea (score: 89/105), market research report (2026-06-04), product brief (2026-06-04)*
*Workflow: BMAD create-prd, all steps complete*

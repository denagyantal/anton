---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments: ["ideas/shortlisted/solo-home-service-app.md", "_bmad-output/planning-artifacts/product-brief-solo-home-service-app.md"]
workflowType: 'prd'
lastStep: step-12-complete
date: '2026-11-02'
author: Root
---

# Product Requirements Document — Solo Home Service Pro App

**Author:** Root
**Date:** 2026-11-02
**Status:** Complete

---

## Executive Summary

The Solo Home Service Pro App is a mobile-native job management platform built exclusively for the 7M+ solo contractors in the United States — plumbers, HVAC technicians, roofers, electricians, landscapers, and handymen who work alone. Every existing FSM tool (Jobber, HousecallPro, ServiceM8) was designed for teams of 3+ and prices accordingly ($39–$149/month). Solo operators pay for crew scheduling, dispatch management, and multi-user workflows they will never use. The alternative — phone calls, text threads, paper invoices, disconnected free apps — leaves an estimated 3–5 million solo contractors quoting from notepads and invoicing by text.

The product solves the complete job lifecycle in six deliberate workflows: one-tap job creation from a phone call, SMS quote with customer e-signature, payment link on completion, customer history, job photos, and invoice delivery. No team features. No desktop requirement. Five-minute setup. Every design decision starts from a single question: "Could a plumber in a crawl space use this one-handed?"

**Business model:** $19/month (unlimited jobs, 1 user) or $49 AppSumo lifetime deal — the lowest-priced complete solo contractor solution in the market. A "tiny team" tier at $39/month for 2–3 users serves as the natural growth upsell. The AppSumo launch strategy captures first-mover advantage in a category no established competitor has entered on that platform.

### What Makes This Special

**Solo-only by design** — not a team tool stripped down but a product whose positioning, UX, feature set, and pricing say "this was built for one-person operations." Incumbents cannot lower their complexity to compete without cannibalizing their primary subscription revenue ($79–$299/month team plans).

**Phone-first UX** — every workflow is operable from a smartphone in the field. Quotes sent from a truck. Signatures collected before leaving the job site. Payments collected while packing up tools. No desktop required, ever.

**Radical simplicity as a competitive moat** — five-minute setup versus 30+ minutes for Jobber. Six workflows done excellently versus forty features done adequately. Simplicity is not a concession — it is the primary competitive advantage and the hardest thing for incumbents to copy.

**AppSumo-first distribution** — no established contractor app has a significant AppSumo presence. First-to-market with a well-positioned $49 LTD offer seeds 1,000–5,000 vocal early adopters and a review base that creates lasting brand recognition before competitors respond.

**Authentic problem origin** — the market has already validated the founder-as-user narrative (BluePro creator, a Toronto roofer who built his own app, got immediate community demand). The same positioning opportunity exists here.

## Project Classification

- **Project Type:** Mobile app (iOS + Android, React Native or Flutter cross-platform)
- **Domain:** B2C field service / solo trades — low-medium domain complexity
- **Complexity:** Medium (Stripe payment integration, PDF generation, SMS delivery, mobile camera, customer-facing web views for quote signing)
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

A user is successful when the app genuinely replaces their previous paper/text/Venmo workflow and they could not go back.

**Activation (first 24 hours):**
- 70%+ of new users create their first job within 24 hours of download
- Time from app download to first completed invoice: under 15 minutes
- Onboarding completion rate (Stripe connected + first job created): 65%+

**Engagement (ongoing):**
- Weekly active usage: 75%+ of monthly active users open the app 4+ days/week
- Average jobs created per user per month: 35+ (proxy for genuine business reliance)
- Quote-to-signature rate: 60%+ of sent quotes receive a digital customer signature
- Payment link usage: 70%+ of completed jobs generate a digital payment request by month 3

**Value delivery:**
- User-reported time savings: 3+ hours/week at 30 days, 5+ hours/week at 90 days
- Payment speed improvement: 50% reduction in average invoice-to-payment days vs. user's prior baseline
- Dispute rate: <2% of jobs generate a payment or scope dispute (vs. ~8% industry baseline for paper-based businesses)

### Business Success

| Objective | 30-Day | 90-Day | 12-Month |
|-----------|--------|--------|----------|
| AppSumo LTD sales | 1,000 | 3,500 | 5,000 |
| Monthly subscribers | — | 400 | 2,000 |
| MRR (subscriptions) | — | $7,600 | $38,000 |
| LTD revenue | $49,000 | $171,500 | $245,000 |
| App store rating | — | 4.5+ | 4.7+ |
| G2/Capterra reviews | 25 | 150 | 400+ |
| Subscription churn rate | — | <10% | <6% |
| Organic referral signups | — | 30% of new users | 40% of new users |

**12-month revenue target:** $38,000 MRR ($456K ARR from subscriptions) + $245K LTD = ~$700K total year-1 revenue.

**Strategic KPIs:**
- NPS score: 50+ at 90 days
- AppSumo deal rating: 4.5+ tacos
- Organic community mentions: 20+ per month by month 3
- SEO comparison traffic ("Joist alternatives", "Jobber for solo contractor"): 1,000 organic visits/month by month 6

### Technical Success

- App store submission accepted on first review (iOS App Store + Google Play)
- Stripe payment integration passes security review and goes live in production
- Customer-facing quote signing page loads in under 3 seconds on a 4G mobile connection
- Zero data loss incidents: all job records, photos, and signatures durable and recoverable
- Crash-free session rate: 99%+ across iOS and Android

### Measurable Outcomes

The MVP is validated and ready for V1.1 investment when:
1. 500+ contractors have created their first job within 24 hours of download (activation validated)
2. Weekly active usage is 4+ days/week across 70%+ of monthly active users (habit formation validated)
3. App store rating is 4.4+ with 50+ reviews (quality validated publicly)
4. Users self-report 3+ hours/week time savings in in-app survey (value validated)
5. MRR from subscriptions is growing 20%+ month-over-month for 3 consecutive months (business model validated)
6. <5% of users contact support for basic workflow help (simplicity validated)

## Product Scope

### MVP — Minimum Viable Product

Six workflows, executed excellently:

1. **One-tap job creation** — create a job from any screen with customer contact import from device phonebook; job type, address, notes; job status lifecycle management
2. **SMS quote with e-signature** — line items (labor + materials), auto-calculated total, shareable SMS link, customer signs on their phone, PDF generated and attached
3. **Payment link generation** — Stripe-powered SMS payment link, final amount editable, status auto-updates to Paid on completion
4. **Customer history & basic CRM** — auto-created customer profiles, full chronological job history, search by name/phone/address, tap-to-call/SMS
5. **Job photos** — camera capture from job record, timestamped before/after photos, optional auto-send to customer on completion
6. **Invoice & dashboard** — auto-populated invoice delivered by email/SMS, PDF stored in job record; dashboard showing open jobs, unpaid total, month revenue, 5 recent jobs

**Explicit out-of-scope for MVP (permanent product decisions, not deferrals):**
- Team or crew features of any kind (dispatching, multi-user assignment, timesheets)
- GPS tracking or route optimization
- Desktop/web interface
- Accounting software integrations (QuickBooks, Xero, Wave)
- Recurring job scheduling
- Automated SMS follow-up sequences
- AI-powered quote generation

### Growth Features (Post-MVP)

**V1.1 — 30 days post-launch:**
- Automated SMS follow-up for unpaid invoices (3-day, 7-day nudges)
- Basic scheduling/calendar view
- Quote versioning (revise and resend with change notes)
- Appointment reminder SMS sent to customer 1 hour before job

**V1.2 — 90 days post-launch:**
- QuickBooks Online sync (premium add-on: $5/month)
- Recurring job templates for maintenance contracts
- Per-job expense logging with receipt photo capture
- "Tiny team" tier: 2–3 users, shared job list, $39/month

### Vision (Future)

**V2.0 — 12 months:**
- AI quote assist: generate line items from job description photo or voice note
- Voice-to-job-record: dictate job details hands-free between sites
- Trade-specific quote templates with pre-populated common line items
- Contractor financing integration (GreenSky/BNPL in customer payment link)
- Web dashboard for invoice review and job history

**Long-term platform (2–3 years):**
- Horizontal expansion: pool service, cleaning, pest control, moving
- White-label licensing to trade supply houses
- Insurance/COI management integration
- Supplier integration for job cost reconciliation

---

## User Journeys

### Journey 1: Mike — Solo Plumber, Core Adoption Path

Mike is a 42-year-old solo plumber in the suburban midwest. He runs 5–6 service calls daily, earns $90–100K/year, and has never had office staff. He tried Jobber two years ago and quit after one billing cycle: "I'm paying $39/month for team scheduling I don't have a team for." He currently runs his business through phone calls → paper job ticket → texted PDF quote → paper invoice → cash/Venmo.

His triggering frustration: a customer paid a competitor $200 more for the same job because the competitor sent "a professional-looking estimate with a sign button." Mike lost the job while he was handwriting a quote in his truck.

**Discovery:** Mike sees a post on r/sweatystartup: "Built an app for 1-man trades businesses — $49 forever, no team BS, job → quote → payment." The title alone makes him click. He lands on the AppSumo deal page, reads "no team features, $49 LTD vs $468/year for Jobber, 5-minute setup, Stripe integration," spends 3 minutes reading reviews from other solo contractors, and buys without a free trial because the price risk is negligible.

**Onboarding:** Downloads the app. Enters business name, trade type, connects Stripe. Creates a test job for a fictional customer in 2 minutes. First aha moment: "That was actually 2 minutes."

**First real use:** Finishes a diagnostic call with a customer and creates a real job from his truck. Types scope, generates the SMS quote link, sends it. Customer approves with digital signature 18 minutes later while Mike is at his next call. He texts a friend: "dude this actually works."

**Full reliance (Month 2):** 80+ jobs in the system with full customer history. Can tell a repeat customer exactly what he did for them 8 months ago without thinking. Zero disputed invoices since switching.

**Advocacy (Month 3):** Posts in r/Plumbing: "I was on Jobber for 2 years. Switched to [app] and I'll never go back." Gets 40+ upvotes and 12 DMs asking for the link.

*Capabilities revealed: job creation from any screen, contact import, SMS quote, e-signature, payment link, customer history lookup, referral mechanism*

---

### Journey 2: Sarah — Solo HVAC Technician, HousecallPro Refugee

Sarah is 35, runs her own HVAC company after splitting from her previous employer 3 years ago. She manages 350+ maintenance contract customers plus reactive calls and new installs. She currently uses HousecallPro ($59/month) but feels chronically overpaying — team management features she pays for are permanently empty, and her customers complain the payment process is too many steps.

Her core frustration: HousecallPro requires desktop login for quote creation. She doesn't have a desktop on a rooftop or in a mechanical room.

**Trigger to switch:** Annual HousecallPro renewal email arrives with a price increase.

**Discovery:** She's already looking for alternatives. Finds the app via an r/HVAC thread about "best apps for solo HVAC tech." Reads the feature list — full quote workflow from phone, $19/month, no team junk — and signs up for the monthly subscription (she wants to test before committing, not AppSumo path).

**Critical workflow test (Day 1):** She's doing an assessment on a second-floor rooftop. On her phone, she creates a job, adds the homeowner's name and address, builds a quote with labor + refrigerant + parts, generates the SMS link, and sends it. The homeowner approves it with their signature before Sarah comes down from the roof. "That's the first time I've ever gotten a signed quote before finishing the walk-through."

**Steady state (Month 1):** She cancels HousecallPro. She's saving $40/month and the mobile workflow is faster than anything she was doing before.

**Edge case — quote revision:** A customer reviews the initial quote and asks for a different compressor option. Sarah needs to revise and resend. In MVP, she creates a new quote line item and sends a new link. (Quote versioning is a V1.1 feature request she'll submit after MVP.)

*Capabilities revealed: full quote creation on phone, quote editing, customer approval tracking, invoice delivery, subscription billing management*

---

### Journey 3: Dave — Handyman, Paper-to-Digital Conversion

Dave is 51, does everything (drywall, painting, minor plumbing, carpentry) across a 30-mile rural radius. Fully paper-based for 14 years. Not tech-averse (uses Facebook daily, watches YouTube tutorials) but every contractor app he's tried "felt like it was made for someone with employees."

His most acute pain: payment disputes. Twice in the last year, customers claimed they never received an invoice or that the final price differed from the quote. He has no digital record to dispute with.

**Trigger:** A customer dispute cost him $600 because he had no documentation. His wife finds the app via a Facebook group post from another handyman.

**Onboarding challenge:** Dave needs the setup to actually be 5 minutes. He does not want a sales call or a tutorial video series. The app must be self-explanatory.

**First job (Day 1):** He creates a job for a drywall patch he's doing tomorrow. Adds customer name, address, notes "living room drywall damage, approx 4 sq ft." Generates a quote — 2 hours labor at $75/hr + $30 materials = $180 total. Sends the SMS link.

**Customer interaction:** His customer gets an SMS, opens the link on their phone, sees the line items and total, signs with their finger. Dave gets a notification: "Quote approved — Judy R." He screenshots it and sends it to his wife: "see, all digital now."

**Dispute prevention (Month 2):** A customer questions a final price. Dave pulls up the job record, shows the signed quote, the job photos, and the invoice. "It's all right here." Case closed.

*Capabilities revealed: simple onboarding (<5 min), quote generation, customer signature, job photos (dispute evidence), invoice PDF, audit trail*

---

### Journey 4: Admin/Operations — Support and Account Management

This journey covers the app operator's perspective (support staff or founder) handling edge cases.

**Stripe payment failure:** A customer's card is declined when they click the payment link. The contractor receives an in-app notification: "Payment failed — [Customer Name], Job #142." Contractor calls the customer to collect alternate payment. Job remains in "Invoiced" status until manually marked paid. (Manual payment mark capability needed for cash/check situations.)

**Data export for taxes:** At year-end, a contractor wants to export all jobs and payment amounts for their accountant. The app must provide a CSV/PDF export of all jobs by date range with amounts. (This is a V1.1 feature but the data model must support it from day one.)

**App store / subscription management:** A user upgrades from monthly to LTD pricing via AppSumo. Account system must recognize LTD licenses and disable billing on their account. A user on monthly billing needs to cancel — they must be able to do this in-app without contacting support.

*Capabilities revealed: manual payment marking, subscription management, data export scaffolding, Stripe webhook handling, support access to job records*

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Mike — adoption | Job creation, contact import, SMS quote, e-signature, payment link, customer history |
| Sarah — migration | Full quote on phone, quote revision, invoice delivery, subscription management |
| Dave — paper → digital | Simple onboarding, dispute documentation, job photos, invoice PDF, audit trail |
| Admin/Ops | Manual payment marking, Stripe webhooks, subscription management, account controls |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Positioning innovation (primary):** The entire market has defined "field service management" as "tools for teams." The Solo Home Service Pro App redefines FSM for an audience the category has structurally ignored. The innovation is not technological — it is a market definition shift. The product does not compete with Jobber; it occupies a category Jobber cannot enter without cannibalizing its core business.

**Distribution innovation:** No established contractor management app has executed an AppSumo lifetime deal strategy. The SaaS-to-LTD conversion playbook (launch LTD → seed advocates → convert to MRR) is well-established in adjacent categories but entirely absent from the contractor tools market. First-mover on AppSumo in this category is a genuine distribution innovation.

**UX simplicity as technical constraint:** "Could a plumber in a crawl space use this one-handed?" is an engineering constraint, not just a design principle. It requires every screen to pass a one-thumb reachability test, every workflow to complete in under 5 taps, and every action to produce immediate, visible feedback. This constrains the architecture toward a deliberately limited feature surface.

### Market Context

Three separate teams (JobNook launched August 2026, ClientPing on Indie Hackers, FieldLedgr Show HN) are simultaneously validating the same gap. This is a positive signal: the market thesis is confirmed by parallel independent discovery. It is also the key timing constraint — the window to establish category leadership via AppSumo distribution is 6–12 months before one of these competitors achieves the same distribution breakthrough.

### Validation Approach

**Validation signal 1 (pre-launch):** AppSumo application acceptance and deal page conversion rate (target: >3% of deal page visitors purchase).

**Validation signal 2 (week 1):** AppSumo daily sales velocity. 100+ sales on day 1 confirms product-market fit with this audience.

**Validation signal 3 (month 1):** Quote-to-signature rate. If <40% of sent quotes get signed, the customer-facing quote UX needs redesign before growth.

**Fallback if AppSumo path doesn't work:** Community-led direct launch via r/sweatystartup + r/Contractors. The subscription product can be launched independently of AppSumo — the LTD strategy accelerates growth but is not the only path.

---

## Mobile App Specific Requirements

### Platform Requirements

- **iOS:** iOS 15.0 minimum (covers 97%+ of active iPhones)
- **Android:** Android 10 (API level 29) minimum (covers 90%+ of active Android devices)
- **Framework:** Cross-platform (React Native or Flutter) — solo contractor market is split ~55% iOS / 45% Android; iOS-only (like ServiceM8) is not viable for full US market coverage
- **App size:** Under 50MB installed (contractors on limited data plans)

### Device Capabilities Required

- **Camera:** Native camera integration for job photos (before/after capture, not gallery-only)
- **Contacts:** Read permission for phonebook import during job creation
- **Notifications:** Push notifications for quote signatures, payment confirmations, and payment failures
- **SMS:** Deep linking from SMS (customer quote/payment links must open on any mobile browser — no app download required on customer side)

### Offline Capability

- **Job creation must work offline** — contractors in basements, crawl spaces, and low-signal areas must be able to create a job record and add notes without a data connection
- **Sync on reconnect** — offline-created jobs sync automatically when connection is restored
- **Read access offline** — customer history and existing job records must be viewable without connection
- **Payment and quote links require connection** — these are server-generated and cannot function offline; surface clear error state if attempted without connection

### Customer-Facing Web Experience

The quote signing page and payment page are web-based (mobile-optimized) — customers receive SMS links and view these in their browser without installing any app.

- **Quote signing page** must render cleanly on any mobile browser (iOS Safari, Chrome Android, Samsung Internet)
- **Page load time:** under 3 seconds on 4G connection
- **Signature UX:** finger-draw on mobile screen; must work without stylus
- **Payment page:** hosted Stripe Checkout or Stripe Payment Element (PCI compliant, no card data handled by the app)

### Mobile UX Constraints

- **One-thumb navigation:** Primary actions (create job, send quote, request payment) reachable without grip-shifting
- **Large tap targets:** Minimum 44×44pt touch targets on all interactive elements
- **Contrast:** WCAG AA minimum for outdoor use in varying light conditions
- **Response time:** UI actions respond in under 300ms; network-dependent actions show loading state within 200ms

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP approach: Problem-Solving MVP** — the goal is to prove that solo contractors will adopt a digital-first job management workflow and pay for it. The MVP proves the core value proposition: phone call → job record → signed quote → payment link, all in under 5 minutes of administrative effort per job.

The MVP is not a scaled-down version of Jobber. It is a different product with a different philosophy. Scope discipline is enforced by the question: "Without this feature, does the product fail to replace paper + Venmo?" If the answer is no, the feature is not in MVP.

**Resource requirements:** 1–2 mobile developers (React Native or Flutter), 1 backend developer, 1 product/design lead. Target MVP build time: 8–12 weeks.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Solo contractor can manage complete job lifecycle from phone: intake → quote → signature → payment → archive
- Customer can approve quotes and pay invoices without installing any app

**Must-have capabilities:**
- Job creation with contact import, job type, address, notes, status lifecycle
- Quote builder with labor/materials line items, SMS delivery, mobile e-signature
- Stripe payment link generation and confirmation
- Customer profile with full job history, tap-to-call/SMS
- Job photo capture (camera) with timestamp storage
- Invoice generation and delivery (email + SMS), PDF storage
- Dashboard: open jobs, unpaid total, month revenue, recent jobs
- Onboarding: business setup + Stripe connect in <5 minutes
- Subscription billing ($19/month) and AppSumo LTD license recognition

### Post-MVP Features

**Phase 2 (30–90 days post-launch) — retention and expansion:**
- Automated SMS payment follow-up sequences (3-day, 7-day nudges for unpaid invoices)
- Basic calendar/scheduling view
- Quote versioning and revision
- Appointment reminder SMS to customer
- Manual job expense logging with receipt photo
- QuickBooks Online sync (subscription add-on)
- "Tiny team" tier for 2–3 users ($39/month)
- Year-end job/revenue CSV export

**Phase 3 (6–12 months) — moat deepening:**
- AI quote assist from job photo or voice note
- Voice-to-job-record (hands-free job intake while driving)
- Trade-specific quote templates
- Web dashboard (desktop secondary interface)
- Contractor financing in payment link (BNPL)

### Risk Mitigation Strategy

**Technical risks:**
- Stripe integration complexity — use Stripe Connect (existing contractor payment infrastructure) rather than custom payment processing; reduces PCI scope significantly
- Cross-platform mobile performance — validate on both iOS and Android with real contractor testers before AppSumo launch; prioritize iOS-first given higher revenue per user in trades market
- Customer-facing quote signing on all mobile browsers — test on iOS Safari, Chrome, Samsung Internet before launch

**Market risks:**
- BluePro or JobNook beats to market — speed is the primary mitigation; AppSumo outreach should begin during development, not after
- Solo contractors won't adopt digital workflow — mitigated by evidence (Joist's 1.3M users, BluePro beta tester reports of 5+ hours/week saved); the risk is product quality, not market readiness

**Resource risks:**
- If team is smaller than planned — cut Phase 1 to 4 core features (job creation, SMS quote + signature, payment link, customer history); drop job photos and dashboard to V1.1. The minimum viable loop is job → signed quote → payment.

---

## Functional Requirements

### Job Management

- **FR1:** Contractor can create a new job from any screen in under 3 taps
- **FR2:** Contractor can import customer name and phone number from device phonebook during job creation
- **FR3:** Contractor can assign a job type from a standard list (plumbing, HVAC, roofing, electrical, landscaping, handyman, other) with ability to enter custom type
- **FR4:** Contractor can add job address, notes, estimated duration, and estimated value to a job record
- **FR5:** Contractor can transition a job through a defined status lifecycle: New → Quoted → Scheduled → In Progress → Invoiced → Paid
- **FR6:** Contractor can manually mark a job as paid (for cash or check payments outside the Stripe flow)
- **FR7:** Contractor can view all jobs in a list sorted by status and date
- **FR8:** Contractor can search jobs by customer name, customer phone number, or job address
- **FR9:** Contractor can archive completed jobs while retaining full history

### Quote & Estimation

- **FR10:** Contractor can create a quote from any job record by adding labor line items (hours × hourly rate) and material line items (item name + price)
- **FR11:** System calculates quote subtotal and total automatically as line items are added or modified
- **FR12:** Contractor can generate a mobile-optimized SMS quote link from any job record
- **FR13:** Contractor can send the quote link to the customer via SMS directly from the app
- **FR14:** Customer can view the full quote (contractor name, job address, line items, total) on any mobile browser without installing an app
- **FR15:** Customer can digitally sign the quote using a finger on their mobile device
- **FR16:** System sends contractor a push notification when a customer signs a quote
- **FR17:** System automatically updates job status to "Quoted" upon customer signature
- **FR18:** System generates a quote PDF and attaches it to the job record upon signature
- **FR19:** Contractor can view the customer's digital signature within the job record

### Payment Collection

- **FR20:** Contractor can generate a Stripe payment link from any job record
- **FR21:** Contractor can edit the payment amount before sending to reflect scope changes from the original quote
- **FR22:** System delivers the payment link to the customer via SMS
- **FR23:** Customer can complete card payment through the SMS payment link on any mobile browser without installing an app
- **FR24:** System automatically updates job status to "Paid" upon successful Stripe payment confirmation
- **FR25:** System logs payment transaction details (amount, date, payment method) on the job record
- **FR26:** System sends contractor a push notification upon successful payment

### Customer Records

- **FR27:** System automatically creates a customer profile on the first job created for that customer
- **FR28:** Contractor can view a customer's complete chronological job history (date, job type, status, quote amount, payment status)
- **FR29:** Contractor can search all customers by name, phone number, or address
- **FR30:** Contractor can add and edit free-text notes on a customer profile
- **FR31:** Contractor can initiate a phone call to a customer directly from their profile
- **FR32:** Contractor can initiate an SMS to a customer directly from their profile

### Job Documentation

- **FR33:** Contractor can capture photos using the device camera from within a job record
- **FR34:** Captured photos are timestamped and stored with the job record
- **FR35:** Contractor can mark photos as "before" or "after" the job
- **FR36:** Contractor can optionally send a set of job completion photos to the customer via SMS
- **FR37:** Contractor can view all photos associated with a job from the customer history view

### Invoicing

- **FR38:** Contractor can generate an invoice from any job record with one tap
- **FR39:** Invoice auto-populates with: contractor business name and phone, customer name and address, job type and description, line items from the quote, total amount, and invoice date
- **FR40:** Contractor can deliver an invoice to the customer via email, SMS, or both
- **FR41:** Invoice PDF is stored in the job record and accessible at any time
- **FR42:** Contractor can resend an invoice to a customer from the job record

### Dashboard & Reporting

- **FR43:** Contractor can view a home dashboard showing: count of jobs not yet in Paid status, total dollar value of unpaid invoices, and current month's collected revenue
- **FR44:** Dashboard displays the 5 most recent jobs with customer name, job type, and status indicator
- **FR45:** Contractor can tap any dashboard item to navigate directly to the related job or filtered job list

### Account & Onboarding

- **FR46:** Contractor can complete initial account setup — business name, trade type, and Stripe account connection — in under 5 minutes
- **FR47:** Contractor can configure default labor rates used to pre-fill quote line items
- **FR48:** Contractor can update their business profile (name, phone number, logo for invoices) after initial setup
- **FR49:** System recognizes and validates AppSumo LTD license codes and grants lifetime access without recurring billing
- **FR50:** Contractor can manage their subscription (view plan, cancel, upgrade) from within the app without contacting support

---

## Non-Functional Requirements

### Performance

- **App launch time:** Cold start to interactive home screen in under 2 seconds on a 3-year-old mid-range device (iPhone 12, Samsung Galaxy A54 equivalent)
- **Job creation flow:** From tapping "+" to job saved: under 3 seconds including contact import
- **Quote link generation:** From tapping "Send Quote" to SMS delivered to customer: under 5 seconds
- **Customer-facing quote page:** Full render including line items and signature UI: under 3 seconds on a 4G mobile connection
- **Job list load:** List of 200+ jobs loads within 2 seconds
- **Photo capture:** Camera opens within 1 second of tap; photo saves to job record within 3 seconds of capture

### Security

- **Data encryption:** All customer PII (names, phone numbers, addresses) and financial data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- **Payment security:** No card data ever touches app servers; all payment processing via Stripe (PCI DSS Level 1 compliant infrastructure)
- **Authentication:** Contractor accounts protected by email + password with option for biometric auth (Face ID, fingerprint) on supported devices
- **Session security:** Auth tokens expire after 30 days of inactivity; device-level session revocation available
- **Photo storage:** Job photos stored in private cloud storage (not publicly accessible by URL guessing); access requires valid contractor session
- **Customer-facing links:** Quote and payment links are single-use or time-limited tokens; expired links surface a clear error page

### Scalability

- **User capacity:** System supports 50,000 active monthly users without architectural changes
- **Job volume:** System handles 2 million job records per month across all users
- **Photo storage:** System supports 20 photos per job at 4MB average size; architect for horizontal storage scaling from day one
- **AppSumo launch spike:** System must handle 500+ new account registrations per hour during AppSumo launch window without degradation

### Reliability

- **Uptime:** 99.5% monthly uptime for all contractor-facing app functions (contractor cannot afford the app to be down during a job day)
- **Offline resilience:** Job creation, note-taking, and photo capture function without internet connection and sync within 60 seconds of reconnection
- **Data durability:** Zero job record, photo, or signature loss; all data backed up daily with point-in-time recovery
- **Payment webhook reliability:** Stripe payment webhooks processed with at-least-once delivery guarantee and idempotency keys to prevent duplicate paid status updates

### Integration

- **Stripe Connect:** Required integration for payment processing; support both Standard and Express connected accounts
- **SMS delivery:** Integration with SMS delivery provider (Twilio or equivalent) for quote and payment link delivery; delivery confirmation required; failure surfaced to contractor
- **PDF generation:** Server-side PDF generation for quotes and invoices; PDFs must be accessible offline after initial generation
- **Device contacts:** iOS Contacts and Android ContactsContract read permissions for phonebook import
- **Push notifications:** APNs (iOS) and FCM (Android) for quote signature and payment notifications; must work even when app is backgrounded

---

*PRD created by automated BMAD workflow on 2026-11-02. Source: product-brief-solo-home-service-app.md (created 2026-11-01) and shortlisted idea file (scored 85–88/105). Ready for architecture and epic breakdown phases.*

---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/food-truck-ops-platform.md
  - _bmad-output/planning-artifacts/market-research-food-truck-management.md
  - _bmad-output/planning-artifacts/product-brief-food-truck-management.md
workflowType: prd
project_name: food-truck-management
product_name: TruckStack
user_name: Root
date: 2026-05-31
classification:
  projectType: saas_b2b
  domain: food_truck_operations
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — TruckStack

**Author:** Root
**Date:** 2026-05-31
**Product:** TruckStack — Food Truck Operations Platform
**Version:** 1.0

---

## Executive Summary

TruckStack is the operations platform for America's 36,000–40,000 food truck operators — the layer above Square and Toast that consolidates permit expiration tracking, public location scheduling, professional event booking, and event organizer CRM into a single mobile-first tool at $49/month.

Food truck operators currently stitch together 4–6 disconnected tools: Google Calendar for routes, Instagram DMs for event inquiries, Venmo for deposits, Word documents for contracts, and spreadsheets for the 30–50 permit renewals they manage per year. No existing tool — not Square, Toast, Roaming Hunger, SchedulingKit, nor any of 15 tools reviewed in market research — combines all four of these functions in one food-truck-native platform.

**Target users:** Solo food truck operators (primary, ~70% of TAM) managing one truck at $49/month; small fleet operators (growth, ~20% of TAM) running 2–5 trucks at $79/month; event/catering specialists (high-LTV, ~10% of TAM) doing 60%+ private events.

**Go-to-market:** AppSumo LTD at $149 (target: 500–1,000 sales = $75K–$150K validation revenue), followed by $49/month SaaS launch. Revenue target: $25,000 MRR at Month 12, $150,000+ MRR at Year 3.

### What Makes TruckStack Special

The permit tracker is the acquisition hook no competitor has built. Missed permit renewals cost operators $500–$2,000+ in fines or operational shutdown — yet no POS system, booking tool, or marketplace touches permit compliance. TruckStack leads with this existential pain point to acquire users who then adopt the full platform.

The integration itself is the moat. PermitWise handles permits alone; SchedulingKit handles bookings alone; neither integrates with the other, and neither has the other's features. Building all four modules in one food-truck-native product creates switching costs that single-feature competitors cannot match.

TruckStack deliberately does NOT replace Square or Toast. It sits above them, eliminating the #1 objection food truck operators have to new software: "I'd have to change my payment system."

### Project Classification

- **Project Type:** Mobile-responsive SaaS web application (greenfield)
- **Domain:** Food truck operations / small business vertical SaaS
- **Complexity:** Medium — multi-jurisdiction permit data, Stripe payment integration, multi-tenancy (fleet tier), e-signature contracts, real-time email/SMS notifications
- **Market:** 36,000–40,000 US food trucks; 92,000+ total mobile food businesses (expansion TAM)

---

## Success Criteria

### User Success

**Primary "aha!" moments (leading indicators of 90-day retention):**

- Operator adds first permit within 7 days of signup → validated core value delivery
- Operator receives first permit renewal reminder → realized ROI moment ("this saved me a $1,500 fine")
- Operator shares public location page URL on social media → daily-use feature adopted
- Operator receives first event booking paid through TruckStack portal → booking workflow replaced

**Behavioral retention targets:**
- Location schedule updated at least 3 times per week by active operators (daily ops stickiness)
- Permit dashboard viewed at least 2 times per month (compliance monitoring behavior)
- Event CRM updated after each completed event (relationship management adoption)

**Retention benchmarks:**
- 30-day trial-to-paid conversion: ≥30% of users who complete onboarding
- 90-day retention: ≥75% of paid users active after 3 months
- Monthly churn: <5% (industry average for SMB SaaS: 6%)
- Annual retention: ≥65% (adjusted for northern-market seasonal inactivity)

**User outcome targets (quarterly survey):**
- ≥90% of active users report zero permit-related fines or shutdowns since signup
- ≥80% of users report event booking time reduced to under 30 minutes vs. prior workflow
- NPS ≥50 at Month 2 post-launch

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Email waitlist | 500 subscribers | Pre-launch |
| AppSumo LTD sales | 500–1,000 units | Launch window (60 days) |
| Active paying users | 200 users | Month 6 |
| MRR | $10,000 | Month 6 |
| Active paying users | 500 users | Month 12 |
| MRR | $25,000 | Month 12 |
| Fleet tier subscribers | 30–50 accounts | Month 12 |
| MRR | $75,000 | Year 2 |
| MRR | $150,000+ | Year 3 |

**LTD cap:** Maximum 1,500 LTD units total. LTD covers single-truck tier only; fleet/enterprise features excluded.

**Go/no-go for SaaS tier launch:** ≥200 AppSumo sales within 30 days → proceed immediately with $49/month launch. Below 200 at Day 30 → conduct user interviews before proceeding.

### Technical Success

- Zero data loss incidents for permit records or booking contracts
- Permit reminder email delivery rate ≥99% (missing a reminder is product-breaking)
- Stripe payment processing uptime aligns with Stripe's published 99.99% SLA
- Onboarding completion (3+ permits + 1 location configured) in first session: ≥70% of new signups

### Measurable Outcomes

**Acquisition KPIs:**
- Trial-to-paid conversion: ≥30%
- Community referral rate: ≥30% of new signups from Facebook groups or Reddit (UTM-tracked)
- Organic search traffic: 1,000 visits/month by Month 6 (target keywords: "food truck permit tracking software", "food truck scheduling software")
- CAC: <$50 at scale (community-led growth target)

**Engagement KPIs:**
- Onboarding completion rate: ≥70% (defines as 3+ permits + 1 location + booking portal configured)
- DAU/MAU ratio: ≥40% (location schedule management drives daily use)
- Feature depth adoption: ≥60% of paid users using 3+ modules within 30 days of signup

**Financial KPIs:**
- LTV:CAC ratio: >8:1 (at $49/month with <5% churn, LTV ≈ $1,000)
- Gross margin: >85% (pure SaaS; no human-in-loop support costs)
- AppSumo rating: ≥4.5/5.0

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**MVP philosophy:** Problem-solving MVP. Deliver the permit tracker (existential pain, no competitor has it) and location schedule page (daily retention use case). Add event booking and CRM at a lighter implementation depth to support the "replace 4 tools" story.

**Target build timeline:** 6–8 weeks.

**Core user journeys supported in MVP:**
- Solo operator onboarding, permit setup, and first reminder
- Solo operator location schedule configuration and public page sharing
- Solo operator receiving and processing a catering booking inquiry
- Repeat client booking via pre-filled booking link from CRM

**Must-have capabilities:**

| Module | MVP Priority | Key Requirement |
|--------|-------------|-----------------|
| Permit Expiration Tracker | Critical | Permit dashboard + 30/60/90-day email+SMS reminders |
| Public Location Schedule Page | Critical | Branded URL + Google Maps embed + customer subscription |
| Event/Catering Booking Portal | High | Quote builder + Stripe deposit + e-signature contract |
| Event Organizer CRM | Medium (lightweight) | Contact list + event history + "book again" link |
| Guided Onboarding Wizard | Critical | 15-minute first-value setup |
| Stripe Billing | Critical | $49/month solo + $79/month fleet + 30-day free trial |

**MVP billing:**
- $49/month (single truck) — Stripe recurring billing
- $79/month (fleet: 2–5 trucks) — unlocks multi-truck dashboards, fleet location scheduling
- Annual billing: 2 months free ($490/year solo, $790/year fleet)
- 30-day free trial, no credit card required
- LTD: $149 AppSumo (single-truck features only; fleet excluded)

### Growth Features (Phase 2 — Months 6–12)

- Square/Toast transaction import for revenue analytics by location, event type, and day of week
- Commissary agreement tracking with expiration reminders (same model as permits)
- Health inspection log with photo attachment
- Advanced event CRM: pipeline view (lead → quoted → deposited → confirmed → completed) with revenue per client
- Customer email subscription analytics (open rates, subscriber growth tracking)
- Multi-language support (Spanish first — significant food truck operator demographic)
- Per-truck revenue analytics for fleet operators (margin by truck, location, event type)

### Vision (Phase 3 — Months 12–24)

- Native iOS/Android app (primarily for location updates and permit status on mobile)
- AI-assisted route optimization based on historical location revenue data
- Customer loyalty program (stamps/rewards for location page subscribers)
- Marketplace integration: direct event booking lead generation (bypass Roaming Hunger commission)
- White-label fleet platform for food truck franchise brands (Cousins Maine Lobster, Kona Ice, etc.)
- International expansion: UK, Canada, Australia, Germany

### Out of Scope for MVP

- GPS live location broadcast (real-time location requires background services; out of MVP scope)
- Native mobile app (mobile-responsive web covers MVP scenarios)
- Multi-jurisdiction permit filing assistance (regulatory complexity; Phase 3 or never)
- Insurance integrations (Phase 2+ partnership track)
- Customer loyalty program (adjacent feature; post-MVP)
- Revenue analytics (requires POS integration; Phase 2)

---

## User Journeys

### Journey 1: Maria — Solo Operator, Permit Rescue (Primary Happy Path)

Maria, 38, runs "Birria Boss" in Austin, TX. Annual revenue ~$180K. She uses Square (free plan) for payments and tracks permit dates in a self-built Google Sheet. She posts daily location on Instagram and handles event bookings via DMs.

**Opening scene:** Maria sees a post in "Food Truck Nation" Facebook group: "TruckStack just reminded me my health permit was expiring — saved me from a $1,500 fine." She clicks the link and lands on TruckStack.com.

**Discovery → Sign up:** She reads the permit tracking feature first. Realizes she's relying on a Google Sheet with no reminder system. Signs up for the 30-day free trial (no credit card required).

**Onboarding:** Setup wizard asks for truck name and state ("Birria Boss" / "Texas"). System pre-populates standard Austin, TX permit types: Austin Public Health Food Handler Permit, Austin Mobile Food Vendor's License, Texas Mobile Food Unit Permit — with typical renewal cycles. Maria adds her actual expiration dates in under 5 minutes.

**Aha! moment #1:** Permit dashboard loads. Red warning: her health permit expires in 23 days. She had forgotten. She sets 30/60/90-day reminders for all three permits.

**Location schedule setup:** She adds her weekly schedule (Mon–Fri lunch spots + Friday evening location). Enables her public page at `truckstack.app/birriaboss`. Posts the link on Instagram with "bookmark this instead of checking my stories!" She stops manually posting location every morning within 2 weeks.

**Event booking workflow:** A corporate client emails asking for her "booking link." For the first time, she has one. Sends the TruckStack portal URL. Client books a 75-person lunch, pays $350 deposit via Stripe, receives auto-generated contract. Maria spends 12 minutes on what used to take 90 minutes of back-and-forth.

**Retention:** Maria renews her health permit on time, for the first time without a close call. She posts about the permit reminder in the Facebook group. Upgrades to annual billing at Month 3.

**Journey requirements revealed:** Permit dashboard (color-coded urgency), permit type auto-suggestion by state, email + SMS reminders, public branded location page, booking portal with Stripe deposit, e-signature contract generation.

---

### Journey 2: Carlos — Fleet Operator, Multi-Truck Compliance (Growth Segment)

Carlos, 44, runs 3 BBQ trucks across Dallas–Fort Worth. 5 employees. Annual combined revenue ~$900K. Uses Toast for POS. Faced a $1,200 parking permit fine last year due to a lapsed permit — his compliance overhead across 3 trucks and 3 jurisdictions is 27 permits/year.

**Opening scene:** Carlos's bookkeeper flags that they're paying $450/month across HoneyBook, 3 separate Google Workspace accounts, and Roaming Hunger commissions — all without permit tracking. She finds TruckStack and shows Carlos the fleet tier.

**Onboarding (fleet tier at $79/month):** Carlos adds all 3 trucks. For each truck, he enters jurisdiction (Dallas, Fort Worth, Arlington — each with different permit sets). Permit dashboard shows 27 permits across 3 trucks with consolidated urgency view.

**Daily operations:** Carlos checks the fleet dashboard each morning before trucks hit the road. Can see which truck is scheduled where today, which permits are in yellow/red status, and which event inquiries are pending for each truck.

**Aha! moment:** 60 days in, Carlos's Fort Worth BBQ truck's city health permit hits the 30-day reminder. He delegates renewal to his operations coordinator via an email forwarded from TruckStack. First time he's caught a renewal proactively in 4 years.

**Fleet analytics gap (Phase 2 driver):** Carlos wants to know which truck location generates best margin. Currently impossible without POS export. He submits this as feature feedback — becomes the Phase 2 Square/Toast integration requirement.

**Journey requirements revealed:** Multi-truck account with per-truck permit dashboards, consolidated fleet permit status view, fleet location schedule management, fleet tier billing.

---

### Journey 3: Priya — Event Specialist, Booking System Replacement (High-LTV Segment)

Priya, 31, runs "Spice Route Catering" — 60% private events ($3K–$7K each), 40% street service. Uses HoneyBook ($16/month) for contracts but it knows nothing about food trucks: no per-head pricing, no travel fees, no menu packages. She manages 15–20 active event leads simultaneously.

**Opening scene:** Priya's wedding planner client asks for a booking link with per-head pricing and minimum headcount. HoneyBook can't do this cleanly. Priya Googles "food truck catering booking software" and finds TruckStack.

**Onboarding (booking portal focus):** Sets up booking portal with: per-head pricing ($28 + $18 for premium package), minimum 30 guests, travel fee calculator ($2/mile beyond 10 miles), 4 menu packages with descriptions. Takes 25 minutes.

**Client-facing experience:** Priya sends the portal URL to her wedding planner client. Client self-serves: selects package, enters 85 guests, gets an instant quote ($2,380 + $64 travel), pays $1,222 deposit via Stripe, receives a contract PDF for e-signature. Priya is notified immediately by email.

**CRM value:** After 3 events, her corporate client Apex Tech has an auto-built contact profile: 3 events, $14,600 total revenue, preferred menu (Premium Package), note "needs GF options — added to menu each time." When Apex Tech's events coordinator changes, Priya sends a "book again" link prefilled with prior event details.

**Aha! moment:** Priya cancels HoneyBook at Month 2. TruckStack's food-truck-native booking portal handles everything HoneyBook could, plus the food truck-specific fields HoneyBook couldn't.

**Journey requirements revealed:** Per-head pricing configuration, menu package builder, travel fee calculator, Stripe deposit collection, PDF e-signature contract, auto-created client contact record, "book again" pre-fill link.

---

### Journey 4: Event Organizer — Client-Side Booking (Secondary User, Non-Paying)

Jamie, 29, is a corporate event coordinator at a 400-person tech company in Austin. Manages 30+ vendor relationships. Jamie has booked Maria's truck twice before — once via Instagram DM (painful: 2-day back-and-forth for pricing + Venmo deposit + PDF contract via email), once through TruckStack.

**Second booking via TruckStack:** Jamie finds Maria's TruckStack page, clicks "Book Event," fills the 5-field inquiry form in 3 minutes, sees instant pricing, pays the Stripe deposit with a work card, receives a PDF confirmation with contract. Done.

**Professional signal:** Jamie now proactively asks other food truck vendors "do you have a booking portal?" when sourcing vendors. If a vendor doesn't, Jamie rates the experience lower — they're harder to work with. This is the indirect effect of TruckStack on operator revenue: operators with TruckStack win repeat corporate bookings over those without.

**Journey requirements revealed:** Clean mobile-responsive public booking portal (no login required for clients), instant quote display, Stripe checkout, email confirmation with booking summary, contract PDF attached.

---

### Journey 5: Support/Admin — Permit Data Quality Edge Case

An operator in Phoenix, AZ signs up and finds that their primary operating permit (Maricopa County Mobile Food Establishment Permit) is not in TruckStack's pre-populated list (TruckStack launches with top 20 cities; Phoenix is #5 population but may have complex county vs. city jurisdictions).

**Resolution path:** Operator uses the "Add Custom Permit" option to manually enter the permit name, type, issuing authority, and expiration date. The permit is added to their dashboard with all reminder features active. The operator can optionally "suggest this permit type for Phoenix AZ" — submitting it for TruckStack's community-contributed permit database.

**Admin requirement revealed:** Custom permit entry with all standard fields, community permit suggestion submission, admin review queue for submitted permit types.

### Journey Requirements Summary

| Capability Area | Source Journeys |
|----------------|-----------------|
| Permit dashboard + reminders | 1 (Maria), 2 (Carlos), 5 (support edge case) |
| Permit type auto-suggestion by state | 1, 5 |
| Custom permit entry | 5 |
| Public branded location page | 1 |
| Fleet permit dashboard (multi-truck) | 2 |
| Event booking portal (per-head pricing, travel fee, menu packages) | 3 |
| Stripe deposit collection | 1, 3, 4 |
| PDF e-signature contract | 1, 3, 4 |
| Auto-created organizer CRM contact | 3 |
| "Book again" pre-fill | 3 |
| Email + SMS notifications (operator) | 1, 2, 3 |
| Mobile-responsive client booking portal | 4 |
| Community permit type submission | 5 |

---

## Domain-Specific Requirements

### Regulatory Landscape

Food truck operations involve multi-jurisdiction permit compliance managed by individual operators with no standardized system. TruckStack's domain requirements stem from the compliance risk this creates.

**Permit type categories TruckStack must support:**
- Health department / food handler permits (state-issued; renewal cycles 1–2 years)
- City vending licenses / mobile food vendor permits (city-issued; often annual)
- Fire department permits (annual inspections for propane/cooking equipment)
- Parking/location permits (some cities require per-location or per-event permits)
- Commissary agreements (health department requirement in most states; expiration tracking)
- Event-specific permits (issued per event by event organizers or city)

**Jurisdiction complexity:** US food trucks operate under a patchwork of local, county, and state regulations. No federal standard exists. TruckStack resolves this by:
1. Launching with pre-populated permit types for the top 20 US cities by food truck density (Austin, Portland, Los Angeles, Denver, Seattle, Nashville, Dallas, Atlanta, Chicago, New York, Miami, Phoenix, Houston, San Francisco, San Diego, Charlotte, Columbus, Indianapolis, Kansas City, New Orleans)
2. Providing a custom permit entry path for jurisdictions not covered
3. Accepting community-contributed permit type data through operator submissions

### Compliance Considerations

- **No legal advice:** TruckStack tracks permit expiration dates and sends reminders. The product explicitly does not provide guidance on which permits operators need, what applications to file, or how to comply with specific regulations. Onboarding copy and marketing must include a disclaimer: "TruckStack tracks the permits you tell us about. Consult your local health department for permit requirements specific to your jurisdiction."
- **Document storage:** Operators can upload permit documents (PDFs, photos) for their own reference. These documents are stored in access-controlled cloud storage and are not shared with any third party.
- **Payment compliance:** All payment processing goes through Stripe. TruckStack does not store cardholder data. Stripe handles PCI-DSS Level 1 compliance.

### Integration Requirements

- **Stripe:** Required for deposit collection, billing subscriptions, and LTD coupon redemption. Stripe Connect or standard Stripe integration (operators use TruckStack's Stripe account for payment collection; Stripe handles payouts to operators).
- **Google Maps:** Required for location schedule page embed (Google Maps JavaScript API or Maps Embed API).
- **Twilio (or equivalent):** Required for SMS permit renewal reminders.
- **SendGrid (or equivalent):** Required for transactional email (permit reminders, booking confirmations, location subscription updates).
- **POS systems (Square, Toast, Clover):** No integration required at MVP. Phase 2 will add Square/Toast OAuth for transaction import.

---

## Innovation and Novel Patterns

### Detected Innovation Areas

**Category combination as the innovation:** TruckStack is not technically novel — maps, permit tracking, booking forms, and CRMs all exist independently. The innovation is the specific four-part combination in one food-truck-native product. No product has previously offered:
1. Permit expiration tracking + multi-jurisdiction pre-population
2. + Public branded location schedule page (operator-owned, not marketplace-controlled)
3. + Food-truck-native event booking (per-head, travel fee, minimum headcount)
4. + Event organizer CRM linked to booking history

**Positioning the integration as the product:** This is consistent with the "boring business SaaS" innovation pattern — winning a neglected vertical by building a complete integrated solution where competitors offer only fragments.

### Market Context

- **PermitWise and TruckComply** exist as standalone permit trackers, validating willingness to pay for this specific pain. They do not have location scheduling, booking, or CRM.
- **SchedulingKit** is the closest competitor (booking + location scheduling) but has no permit tracking and is not food-truck-native.
- **Roaming Hunger** is a marketplace that takes client ownership. TruckStack's location page is operator-owned — a meaningful structural difference that food truck operators care about ("I want my customers to follow ME, not Roaming Hunger").

### Validation Approach

- Pre-launch: AppSumo waitlist and community posts in food truck Facebook groups to validate interest before build
- Build validation: 20-operator beta with free lifetime access in exchange for active feedback during 8-week build
- MVP validation: Go/no-go criterion of 200 AppSumo LTD sales within 30 days of launch

### Risk Mitigation

| Risk | Severity | Mitigation |
|------|----------|-----------|
| SchedulingKit adds permit tracking | High | Speed to market; community brand building; permit data switching cost |
| Square/Toast expand into ops | Low | POS companies move in 3–5 year cycles; TruckStack is additive, not competitive |
| Seasonal churn (northern markets) | Medium | Annual billing incentive; off-season permit planning value; focus initial acquisition on Sun Belt markets |
| AppSumo LTD sustainability | Medium | Cap at 1,500 LTD units; LTD excludes fleet features; revenue funds SaaS development |
| Permit data accuracy | Medium | Start top 20 cities; community contribution; operator self-correction via custom permit entry |

---

## SaaS Platform Requirements

### Multi-Tenancy Model

- Each operator account is a tenant. Solo accounts have one truck. Fleet accounts have 2–5 trucks under one account.
- All data (permits, locations, bookings, contacts) is scoped to the tenant. Cross-tenant data access is forbidden.
- Fleet tier: all trucks under one account share the billing relationship. Individual truck data is isolated from other fleet accounts.

### Permission Model

| Role | Capabilities |
|------|-------------|
| Account Owner | Full access to all features; billing management; account deletion |
| Staff (future Phase 2) | Location schedule management; permit viewing; booking inquiry viewing. No billing access. |
| Public (unauthenticated) | View public location schedule page; submit booking inquiry form; subscribe to location updates |

### Billing and Subscription

- Stripe Billing for recurring subscriptions (monthly and annual)
- Free trial: 30 days, no credit card required at signup
- Trial-to-paid: prompt at Day 25 with card entry; downgrade to read-only on Day 31 if no payment
- Plan upgrades (solo → fleet) take effect immediately; prorated billing
- AppSumo LTD codes: redeemable at signup for single-truck lifetime access; no expiration; excludes fleet features
- LTD cap enforcement: admin-configurable maximum LTD code activations (cap at 1,500)

### Technical Architecture Considerations

- **Frontend:** Mobile-responsive web app (React or equivalent). Minimum viewport: 375px. All operator-facing features must be fully functional on mobile browsers (operators use from the truck).
- **Public pages:** Location schedule page and booking portal must render without JavaScript for SEO and customer accessibility (server-side rendering or static generation).
- **API design:** RESTful JSON API. All frontend operations go through the API layer. API will support future native mobile app development.
- **File storage:** Permit documents stored in cloud object storage (AWS S3 or equivalent) with signed URLs for time-limited access. No public-accessible file URLs.
- **Background jobs:** Permit reminder scheduling requires a reliable cron/job queue system. Missed reminders are product-breaking; use dedicated job queue with retry logic and delivery receipts.
- **State/timezone handling:** All datetime storage in UTC. Display in operator's configured local timezone. Permit expiration countdown calculated in operator's timezone (a permit expiring "December 31" should trigger the 30-day reminder on December 1 in the operator's timezone, not UTC).

### Implementation Considerations

- Stripe payment processing is required at MVP for both operator subscriptions and client booking deposits. Two distinct flows: (1) Stripe Billing for TruckStack subscription; (2) Stripe Checkout or Payment Intents for client booking deposits paid to the operator.
- Email deliverability is critical for permit reminders. Use a dedicated transactional email provider (SendGrid, Postmark, or AWS SES) with domain authentication (SPF, DKIM, DMARC).
- Public location pages and booking portals need SEO-friendly URLs and server-side rendering. Customer discovery of "where is [truck name] today?" via Google must be possible.
- The onboarding wizard state must be saved server-side so operators can complete setup across sessions.

---

## Project Scoping and Phased Development

### MVP Strategy and Philosophy

**Approach:** Problem-solving MVP. Prove the permit tracker works (saves operators from fines) and the location page creates daily use (operators stop manually posting location daily). Add event booking and CRM at functional-but-lightweight depth to enable the "replace 4 tools" story. Do not over-engineer any single module in V1.

**Resource requirements:** 1–2 frontend engineers, 1 backend engineer, 1 designer. 6–8 week timeline targeting MVP completion before AppSumo submission.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
1. Solo operator: permit setup + first renewal reminder (primary acquisition value)
2. Solo operator: location schedule setup + public page launch (daily retention use case)
3. Solo operator: first event booking received and processed through TruckStack
4. Fleet operator: multi-truck permit dashboard (tier unlock)

**Must-have capabilities:**
- Permit Expiration Tracker: add permits → pre-populated types for top 20 cities → dashboard with urgency colors → email + SMS reminders at 30/60/90 days
- Public Location Schedule Page: branded URL → weekly schedule → Google Maps embed → "Today" view → email subscription → social share
- Event Booking Portal: inquiry form → quote builder (per-head, travel fee, menu packages) → Stripe deposit → auto-confirmation email → e-signature contract → booking calendar
- Event CRM: auto-created contact on first booking → event history → quick notes → "book again" link
- Guided Onboarding Wizard: truck setup → state-based permit suggestions → first location → booking portal config (target: <15 minutes to first value)
- Billing: $49/month solo + $79/month fleet + 30-day trial + AppSumo LTD redemption

### Post-MVP Features (Phase 2)

- Square/Toast transaction import for location/event revenue analytics
- Commissary agreement and health inspection log tracking
- Advanced event pipeline view (lead → confirmed → completed with revenue tracking)
- Customer email subscription analytics
- Multi-language support (Spanish)
- Fleet staff accounts with limited permissions

### Vision Features (Phase 3)

- Native iOS/Android app
- AI route optimization using historical location revenue data
- Customer loyalty program
- White-label fleet platform
- International market expansion

### Risk Mitigation Strategy

**Technical risks:** Stripe integration complexity (two distinct flows: subscription billing + client deposit collection). Mitigation: use Stripe's Connect platform to handle operator payouts cleanly; allocate 2 weeks of build time specifically for payment flows.

**Market risks:** Community-led growth depends on early Facebook group engagement. Mitigation: identify 5–10 food truck community moderators or influencers for early beta access; launch community presence 4 weeks before AppSumo.

**Resource risks:** If build extends beyond 8 weeks, descope event CRM to read-only (contacts visible but no "book again" link) and defer full booking calendar to a quick follow-on release. Permit tracker + location page + basic booking portal is the minimum viable story.

---

## Functional Requirements

### Account and Truck Management

- FR1: Operators can create an account with email and password and receive an email verification link before accessing the platform.
- FR2: Operators can configure a truck profile with name, cuisine type, logo image, social media links, and operating city.
- FR3: Fleet operators can add up to 5 truck profiles under one account, each with its own permit set, location schedule, and booking portal.
- FR4: Operators can manage their billing plan (solo vs. fleet), view invoices, and update payment method through the account settings.
- FR5: Operators can redeem an AppSumo LTD code at signup to activate single-truck lifetime access without recurring billing.
- FR6: Operators can delete their account and request data export (all permits, bookings, and CRM contacts) as a CSV archive.
- FR7: Operators can configure their timezone to ensure permit expiration countdowns and reminder timing display in their local time.

### Permit Expiration Tracking

- FR8: Operators can add a permit record with name, permit type, issuing jurisdiction, expiration date, and an optional document upload (PDF or image).
- FR9: During permit entry, the system presents pre-populated permit types based on the operator's configured city/state (top 20 US cities at launch), reducing manual data entry.
- FR10: Operators can add a custom permit type not in the pre-populated list, entering all fields manually.
- FR11: Operators can view a permit dashboard showing all active permits sorted by days-until-expiration, with color-coded urgency: green (>60 days), yellow (30–60 days), red (<30 days).
- FR12: Operators can configure reminder timing per permit: select which of 30-, 60-, and 90-day reminder intervals to activate.
- FR13: The system sends email renewal reminders to the operator's registered email at each configured interval before permit expiration.
- FR14: The system sends SMS renewal reminders to the operator's configured mobile number at each configured interval.
- FR15: Operators can mark a permit as renewed, update the expiration date, and optionally upload the renewed permit document; the permit status resets to green.
- FR16: Operators can suggest a permit type (name, issuing authority, typical renewal cycle) for their city for potential addition to the pre-populated list.
- FR17: Fleet operators can view a consolidated permit dashboard showing all permits across all trucks, filterable by truck or urgency status.

### Public Location Schedule

- FR18: Operators can configure a public location schedule page at a branded URL (`truckstack.app/[truckname]`) with their truck name and logo.
- FR19: Operators can add location entries to their schedule with date, time range, location name, and street address.
- FR20: The public location page displays scheduled locations on an embedded Google Maps view with pins for each location.
- FR21: The public location page prominently shows a "Today" section listing all scheduled locations for the current date; if no locations are scheduled, it displays a configurable "not operating today" message.
- FR22: Operators can set a weekly recurring schedule as a template, then override individual days as needed.
- FR23: Customers visiting the public location page can subscribe to email updates by entering their email address; they receive a notification when the operator adds or changes a location.
- FR24: The public location page provides one-click share buttons for Instagram and Facebook, generating a link or pre-composed post text for that day's schedule.
- FR25: Fleet operators can manage separate location schedules for each truck, each accessible at a distinct URL.

### Event and Catering Booking

- FR26: Operators can configure a public event booking portal with per-head pricing (base rate), optional premium package pricing, minimum guest count, maximum guest count, travel fee rate ($/mile or flat fee), and service radius.
- FR27: Operators can define up to 5 menu packages in their booking portal with a name, description, and per-head price differential.
- FR28: Clients visiting the booking portal can submit an inquiry form with event type (corporate, wedding, festival, private party, other), preferred date, expected headcount, event location address, and notes.
- FR29: The booking portal calculates and displays an estimated quote (subtotal + travel fee + deposit amount) in real time as clients enter headcount and location.
- FR30: Operators receive an email notification within 5 minutes of a new booking inquiry submission.
- FR31: Operators can send a formal booking confirmation to the client via the platform; the confirmation includes pricing breakdown, deposit amount due, and a Stripe payment link.
- FR32: Clients can pay the booking deposit (operator-configured percentage; default 50%) via Stripe without creating a TruckStack account.
- FR33: Upon deposit payment, the system sends an automatic booking confirmation email to the client with event details and a PDF booking summary.
- FR34: Operators can generate a booking agreement (e-signature PDF contract) from a configurable template and send it to the client for signature via the platform.
- FR35: Operators can track the final balance due per booking and send a final payment request to the client via Stripe.
- FR36: Operators can view a booking calendar showing all inquiries (pending), confirmed events (deposit paid), and completed events.
- FR37: Operators can block dates on their booking calendar to prevent new inquiries from being submitted for those dates.
- FR38: Operators can mark an event as completed and record the final revenue amount.

### Event Organizer CRM

- FR39: The system automatically creates an organizer contact record when a client submits their first booking inquiry, capturing name, email, phone, and company (if provided).
- FR40: Each organizer contact record displays a full event history: date, event type, headcount, total revenue, and operator notes for each booking.
- FR41: Operators can add free-text notes to an organizer contact profile (e.g., dietary preferences, preferred menu, parking notes).
- FR42: Operators can send a "book again" link to a past client that pre-populates the booking inquiry form with that client's previous event type, headcount, and menu selection.
- FR43: Operators can view their organizer contact list sorted by total revenue (descending), total events booked, or date of last event.
- FR44: Operators can export their organizer contact list and event history as a CSV file.

### Notifications and Reminders

- FR45: Operators can configure their email address(es) for system notifications (permit reminders, new booking inquiries) in account settings.
- FR46: Operators can configure a mobile phone number for SMS permit renewal reminders; SMS reminders are opt-in.
- FR47: The system sends a weekly digest email to operators every Sunday evening listing any permits expiring within 60 days in the coming week.
- FR48: Customers who subscribed to a truck's location updates receive an email notification when the operator adds or significantly changes a location for the next 7 days.

### Onboarding

- FR49: New operators complete a guided multi-step setup wizard: (1) truck name and state, (2) add permits with state-based suggestions, (3) configure first week's locations, (4) set up booking portal basics.
- FR50: The onboarding wizard saves progress server-side, allowing operators to pause and resume across sessions.
- FR51: The system displays an onboarding progress indicator (e.g., "3 of 4 steps complete") and surfaces incomplete setup steps on the operator dashboard until all four modules are configured.

---

## Non-Functional Requirements

### Performance

- All operator dashboard pages shall load in under 3 seconds on a mobile 4G connection (measured at 95th percentile via synthetic monitoring).
- The public location schedule page and booking portal shall load in under 2 seconds from initial request (server-side rendered; customer-facing SLA).
- Booking portal quote calculation shall update in real time as clients adjust headcount, with under 300ms UI response time.
- The permit dashboard shall load all permit records for an account (up to 100 permits for fleet accounts) in under 2 seconds.

### Security

- All data transmitted between clients and servers shall use TLS 1.3.
- All data stored at rest (database, file storage) shall be encrypted using AES-256.
- TruckStack shall not store cardholder data. All payment processing shall be handled by Stripe; TruckStack stores only Stripe payment intent IDs and status.
- Permit document uploads shall be stored in access-controlled cloud storage with time-limited signed URLs; documents shall not be accessible via publicly guessable URLs.
- User passwords shall be hashed using bcrypt with a minimum work factor of 12.
- Session tokens shall be stored in httpOnly, Secure cookies with a 30-day sliding expiration.
- The booking portal shall accept file uploads for event attachments only up to 10MB per file and shall validate MIME type before accepting.

### Reliability

- The platform shall maintain 99.5% monthly uptime for the operator dashboard (solo tier).
- The platform shall maintain 99.9% monthly uptime for the operator dashboard (fleet tier) and all public-facing pages (location page, booking portal).
- Permit reminder emails shall be delivered within 15 minutes of their scheduled send time as measured by transactional email provider delivery receipts.
- Booking inquiry notifications to operators shall be delivered within 5 minutes of form submission.
- Background job failures (reminder emails, SMS) shall retry automatically up to 3 times with exponential backoff before alerting the admin team.

### Scalability

- The system shall support 5,000 concurrent users across all tenants without response time degradation beyond the performance targets above.
- The permit dashboard query shall support accounts with up to 500 active permit records (fleet accounts with long history) with no increase in load time beyond the 2-second target.
- The email notification system shall handle 10,000 reminder emails per day at launch scale, with architecture supporting 10x growth without replatforming.

### Accessibility

- The public location schedule page and booking portal shall conform to WCAG 2.1 Level AA standards (customer-facing pages are accessible to the general public, including users with disabilities).
- The operator dashboard shall be fully functional on iOS Safari and Android Chrome at 375px viewport width (all form inputs, tables, and navigation accessible on mobile without horizontal scrolling).
- All form fields shall have associated labels accessible to screen readers.

### Integration Reliability

- Stripe integration failures (deposit payment errors, subscription renewal failures) shall surface a clear error message to the relevant user (client or operator) within 10 seconds and shall not result in silent data inconsistency.
- Google Maps API failures on the location schedule page shall fall back to a plain-text address display rather than a broken embed.
- Email provider failures shall queue outbound emails locally and retry delivery; the system shall alert the admin team if an email remains undelivered for more than 1 hour.

---

*PRD authored: 2026-05-31*
*Based on: TruckStack Product Brief (2026-05-31) + Food Truck Ops Platform shortlisted idea (84/105 score, 3 signal entries)*
*Next workflow: create-architecture*

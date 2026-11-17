---
stepsCompleted:
  - step-01-init.md
  - step-02-discovery.md
  - step-02b-vision.md
  - step-02c-executive-summary.md
  - step-03-success.md
  - step-04-journeys.md
  - step-05-domain.md
  - step-06-innovation.md
  - step-07-project-type.md
  - step-08-scoping.md
  - step-09-functional.md
  - step-10-nonfunctional.md
  - step-11-polish.md
  - step-12-complete.md
inputDocuments:
  - ideas/shortlisted/rv-park-campground-reservation-software.md
  - _bmad-output/planning-artifacts/market-rv-park-campground.md
  - _bmad-output/planning-artifacts/brief-rv-park-campground.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: hospitality_operations
  complexity: medium
  projectContext: greenfield
date: '2026-11-17'
author: Root
---

# Product Requirements Document — ParkSimple

**Author:** Root
**Date:** 2026-11-17
**Product:** ParkSimple — RV Park & Campground Reservation Software

---

## Executive Summary

ParkSimple is flat-rate cloud reservation software for independent RV parks and campgrounds under 100 sites. It replaces phone-call bookings, paper ledgers, and legacy Windows desktop software (Campground Master) with a web-based platform delivering a visual site-grid calendar, online booking pages, SMS-first guest communication, and Stripe payment processing — at $79/month flat with no per-booking fees.

The US campground industry generates $10.7B annually across 16,685 businesses. Independent operators (10–80 sites, typically retirees) face a binary choice: enterprise platforms charging $400–$799/month in per-booking fees designed for large resorts, or Campground Master — 20-year-old Windows desktop software with no online booking, no mobile access, and no SMS. No solution offers flat monthly pricing + cloud access + SMS-first communication + visual site grid + non-tech operator UX simultaneously.

**Core thesis:** Campground Master users will pay for cloud-era convenience. ParkSimple is cloud Campground Master with online booking, SMS, and no per-booking fees. At 200 reservations/month, ParkSimple costs $720/month less than the nearest per-booking alternative.

**Target users:**
- **Primary:** "Retirement Park Barbara" — 65-year-old retiree operating a 42-site RV park, currently on phone calls and paper calendars, technically uncomfortable with SaaS
- **Secondary:** "Growing Campground Mike" — 51-year-old operator of 78 sites on RoverPass, tech-comfortable, frustrated by per-booking fees scaling linearly with success

**Distribution strategy:** AppSumo LTD ($99 for 30 sites, $199 for 100 sites) validated by ARVC newsletter sponsorship and Facebook "RV Park and Campground Owners" group outreach.

### What Makes This Special

**No per-booking fees** is the structural differentiator. The ROI conversation writes itself in one sentence: "How many reservations do you take per month?" At 200/month, $720/month in savings vs. CampLife alone.

**SMS-first guest communication** targets the demographic misalignment competitors have missed: RV travelers (median age 55+) prefer SMS over email. All competitors send email as default and treat SMS as a paid add-on. ParkSimple inverts this — SMS is the primary channel, email is optional.

**30-minute onboarding for non-tech operators** is a design constraint, not a marketing claim. If a 65-year-old retiree cannot set up her park and generate a live booking URL in 30 minutes via Loom video without calling support, the product has failed.

**Cloud Campground Master** framing converts the installed base of Campground Master users directly: they already proved they'll pay for campground software. The migration pitch is literal — "cloud Campground Master with online booking for $99 lifetime."

## Project Classification

- **Project Type:** SaaS B2B — web application, multi-tenant, operator-facing dashboard + guest-facing booking page
- **Domain:** Hospitality operations / small business software
- **Complexity:** Medium — Stripe Connect integration, Twilio SMS, real-time booking conflict prevention, visual site-grid UI
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

**Setup & Onboarding**
- Operators complete initial park setup (add sites, configure rates, connect Stripe, generate booking URL) in under 30 minutes using Loom video only, with no support contact required
- 70%+ of operators who sign up complete onboarding and receive at least one real booking within 7 days

**Core Value Delivery**
- Operators self-report 60%+ reduction in inbound phone reservation calls within 30 days
- Zero double-booking incidents across all production parks in any given season
- Guest SMS booking confirmation delivery rate exceeds 95% (measured via Twilio delivery status)
- Operators can mark a guest as checked in and trigger gate code delivery in under 60 seconds

**Retention Signal**
- Operators log in and interact with the site grid at least 4 days/week during peak season (May–September)
- 90-day retention after AppSumo purchase exceeds 80%

### Business Success

**Phase 1 — Validation (Months 1–6)**
- AppSumo launch generates 500+ LTD sales at $99 = $50K launch revenue
- Beta cohort of 20 parks sustains NPS > 40 at 30-day check-in
- AppSumo review rating maintains > 4.5/5 stars
- 3+ unprompted testimonials from ARVC member parks specifically mentioning no per-booking fees, SMS confirmations, or setup simplicity

**Phase 2 — MRR Establishment (Months 6–12)**
- 100+ MRR customers at $79/month
- ARVC newsletter sponsorship generates > 50 signups per send
- MRR reaches $15,000 by month 12

**Phase 3 — Scale (Year 2)**
- 500 paying customers (MRR + active LTD)
- MRR: $40,000
- Monthly churn: < 2%
- Support ticket volume: < 1 ticket/customer/month

### Technical Success

- Booking creation is atomic: payment + reservation record + SMS confirmation succeed together or roll back cleanly with no charge to guest
- Double-booking prevention enforced at the database transaction level (row-level locking), not just application-layer validation
- Twilio SMS delivery rate > 95% per week; automated alerting fires if rate drops below 90%
- Zero payment data stored in ParkSimple infrastructure (all card data processed and vaulted by Stripe)
- System handles 500 concurrent parks without degrading site-grid load time below the 3-second threshold

### Measurable Outcomes

| Metric | Month 6 Target | Month 12 Target | Year 3 Target |
|--------|----------------|-----------------|----------------|
| Active customers | 500 (AppSumo LTD) | 700 | 2,000 |
| MRR | $3,000 | $15,000 | $160,000 |
| Monthly churn | < 5% | < 3% | < 2% |
| NPS | > 40 | > 50 | > 60 |
| Avg setup time | < 60 min | < 30 min | < 30 min |
| Support tickets/customer/mo | < 2 | < 1 | < 0.5 |
| Phone call reduction reported | 60% | 70% | 70%+ |
| Double-booking incidents | 0 | 0 | 0 |

**Weekly leading indicators:** booking volume per park, SMS delivery rate, new booking page views, AppSumo review rate.

---

## Product Scope

### MVP — Minimum Viable Product

**MVP philosophy:** Problem-solving MVP. The product must eliminate the daily phone-call booking burden for a 42-site RV park operated by a non-technical retiree. Every feature in MVP scope must directly serve that goal.

**Core MVP capabilities:**

1. **Visual site-grid reservation calendar** — Grid of sites (rows) × dates (columns) with color-coded status per cell (Available, Reserved, Occupied, Blocked). Click cell to view or create reservation. Mobile-responsive.

2. **Online booking page** — Standalone URL (`{parkname}.parksimple.com`) + embeddable iframe widget. Guests select site, dates, pay deposit via Stripe, receive SMS confirmation. No account creation required.

3. **SMS-first guest communication** — Automatic SMS on booking confirmation (dates, site, gate code, check-in instructions), day-before arrival reminder (gate code, check-in time), morning-of checkout reminder (checkout time, balance due).

4. **Stripe payment processing** — Deposit collection at booking (configurable flat or percentage), balance collection at check-in/checkout, full/partial refunds, no per-booking platform fee beyond Stripe standard rates.

5. **Rate management** — Per-site nightly rate, weekend premium (Fri/Sat), seasonal date ranges, length-of-stay discounts, holiday overrides.

6. **Check-in/check-out operations** — Mark guest as checked in (site → Occupied, SMS gate code sent), mark as checked out (site → Available), Today's Arrivals and Departures list (mobile-optimized).

**MVP success gate:** 20 beta parks complete onboarding, NPS > 40 at 30 days, zero double-bookings, AppSumo application approved.

### Growth Features (Post-MVP, Months 6–18)

- OTA integrations: Hipcamp, Harvest Hosts, Outdoorsy, RoverPass marketplace (channel bookings route into ParkSimple calendar)
- Drag-and-drop visual park map builder (replace list-based grid with spatial editor)
- Multi-park dashboard for operators with 2–5 locations
- Maintenance request logging per site
- Seasonal site availability management (close a section for winter)
- Advanced revenue analytics and occupancy reporting
- Returning guest management and booking history

### Vision — Future (Year 2+)

- AI-driven dynamic pricing recommendations (based on historical occupancy, local events, competitor availability)
- AI booking assistant handling phone/chat inquiries
- Automated post-checkout SMS for Google/TripAdvisor review generation
- API access for third-party integrations
- Adjacent vertical expansion: marina slip management, barn/equestrian facility booking

**Explicitly out of scope (all phases):** Full property management system (accounting, payroll, staff scheduling), multi-park enterprise features with complex permissions.

---

## User Journeys

### Journey 1: Barbara — Operator Discovery to First Online Booking (Primary Success Path)

**Barbara, 64, runs a 42-site RV park in Texas.** She spends 3 hours every morning answering reservation calls, maintains a printed wall calendar, and uses Campground Master on a Windows laptop. She looked at Campspot, saw the per-booking fees, and went back to the phone.

**Opening scene (October, off-season):** Barbara posts in her state camping association Facebook group asking if anyone has found "something like Campground Master but I can use on my iPad." Two members mention ParkSimple. She sees $99 lifetime deal in the ARVC newsletter.

**Rising action:** She watches the 8-minute Loom setup video. The first screen shows something that looks like her paper calendar. She clicks the AppSumo deal page — $99 one-time, unlimited bookings, SMS confirmations. She buys it without calling anyone.

**Onboarding (November):** She adds her 42 sites by entering site numbers and hookup types. She sets her base rate ($45/night) and a $55 weekend rate. She sets a $50 deposit requirement. She connects her Stripe account using Stripe Express (3-minute guided flow). She generates her booking page URL: `barbararvpark.parksimple.com`. She tests it from her iPhone — books fake reservation for Site 12, pays $50 deposit with her own card, receives SMS confirmation 15 seconds later. She calls her nephew. He says "this is pretty simple, Aunt Barb."

**First real value (November, same week):** She texts the booking page URL to a regular guest. The guest books Site 12 for Thanksgiving week without calling. Barbara sees the booking appear in her site grid in real time on her iPad while she's checking fences. She pumps her fist.

**Peak season validation (May):** Memorial Day weekend — zero double-bookings. Phone call volume down 70%. She only answers calls from guests who want to ask questions, not to book. She posts in the Facebook group: "If anyone is still on paper, I switched to ParkSimple last winter and it's been life-changing."

**Requirements revealed:** Loom video onboarding flow, guided site setup, Stripe Express connect, mobile-responsive site grid, booking URL sharing, real-time booking notification to operator.

---

### Journey 2: Barbara — Reservation Conflict Edge Case (Operator Error Recovery)

**Three weeks into peak season.** Barbara accidentally creates a manual reservation for a walk-in guest on Site 7 — but Site 7 already has a reservation for the same dates from an online booking she forgot about. The system blocks her from saving the conflicting reservation and shows her the existing booking on that site.

She sees the conflict immediately in the error message: "Site 7 is reserved Jul 4–8 (Smith family, booked online). Did you mean Site 8?" She clicks "View Site 8 availability" — it's open. She creates the walk-in reservation on Site 8 instead, then sends the Smith family a quick SMS from the reservation record: "Hi, just confirming your reservation for Site 7, July 4–8. See you then! — Barbara, Lone Star RV Park."

**Resolution:** Walk-in guest is set up on Site 8. Smith family receives a reassuring message. No awkward in-person conversation at arrival. No double-booking. Barbara is mildly embarrassed with herself but grateful the system caught it.

**Requirements revealed:** Double-booking prevention at save-time with specific blocking message, quick-view of conflicting reservation, manual SMS from reservation record.

---

### Journey 3: Mike — Migration from Per-Booking Platform (Growing Operator)

**Mike, 51, operates a 78-site campground in Florida.** He's on RoverPass, paying ~$370/month in fees. He's tech-comfortable — set up his own Squarespace site, knows what an API is.

**Discovery:** He sees a ParkSimple ad in an RV park owner Facebook group. He clicks to the pricing page. $79/month flat, unlimited reservations. He calculates: at his current volume, he saves $291/month. He signs up for the $79/month plan (not LTD — his park exceeds 30 sites).

**Migration:** He exports his site list from RoverPass as a CSV. ParkSimple has a site import tool — he uploads the CSV, maps the columns (site name, hookup type, nightly rate), and all 78 sites appear in his grid in 4 minutes. He sets up weekend premiums ($15/night Friday/Saturday) and a 7-night discount (10% off). He updates his Squarespace website by embedding the ParkSimple booking widget via iframe — 10 minutes including testing.

**Value confirmation (Month 1):** Mike's finance export shows $79 billed vs. $340 he would have paid on RoverPass for the same reservation volume. He screenshots it and posts it in a campground owner forum with the caption "switched last month."

**Requirements revealed:** Site import via CSV, rate configuration (weekend premiums, length-of-stay discounts), embeddable booking widget (iframe), transaction history with period filtering.

---

### Journey 4: RV Guest — Online Booking Experience

**Janet, 58, and her husband are planning a 10-day RV trip.** They find Barbara's park via a friend recommendation. Barbara texts them the booking URL.

**Booking flow:** Janet opens `barbararvpark.parksimple.com` on her iPhone. She sees a simple availability grid showing 8 available sites for her dates. Each site shows hookup type (full/electric only), length, and nightly rate. She selects Site 15 (pull-through, full hookup, $55/night weekends). The booking form asks for her name and cell phone number. Email is optional — she skips it. She pays the $50 deposit with Apple Pay. The whole process takes 4 minutes.

**SMS confirmation arrives 12 seconds later:** "Barbara's Texas Retreat: Booking confirmed! Site 15, Jul 2–12 (10 nights). Check-in after 2pm. Gate code: 4891. Reply CANCEL to cancel. See you soon!"

**Day before arrival:** SMS reminder: "Reminder: Check in tomorrow Jul 2, Site 15. Gate code 4891. Enter from Ranch Road entrance, Site 15 is on the left. Quiet hours 10pm-8am. See you tomorrow!"

**Arrival:** Janet drives in, enters gate code 4891, finds Site 15 immediately. No check-in office visit needed unless she wants to. When Barbara marks her checked in from the dashboard, Janet receives one more SMS: "Welcome to Barbara's Texas Retreat! You're all checked in. If you need anything, reply to this message."

**Requirements revealed:** No-account guest booking, Apple Pay / card payment, mobile-optimized booking page, automated SMS sequence (confirmation, pre-arrival, check-in), gate code delivery via SMS.

---

### Journey 5: Park Staff — Check-In Day Operations

**Carla is a seasonal employee** at Mike's 78-site Florida campground. She handles check-ins on weekends when Mike is off-site. She has a staff login with read-only access to reservations and check-in capability.

**Saturday morning:** Carla opens ParkSimple on her phone. She goes to Today's Arrivals — 11 guests arriving today. The list shows each guest's name, site number, estimated arrival time (if provided), and a "Check In" button.

As guests pull in, she confirms their name and site, marks them as checked in. The site status on the grid updates to Occupied instantly. Each checked-in guest automatically receives an SMS with the gate code and site-specific note Mike configured ("Site 22 is at the back — follow the signs to Loop B").

One guest, Gary, asks if he can extend his stay by 2 nights. Carla can see Site 14 is available for those dates but can't modify reservations (read-only access). She tells Gary she'll have Mike call him — she sends Mike a quick note via the reservation comment field.

**Requirements revealed:** Staff role with limited permissions (view reservations, mark check-in/out), Today's Arrivals mobile view, automated per-site SMS at check-in with configurable site notes, reservation comment/notes field, role-based access (operator vs. staff).

---

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Barbara — Success Path | Loom-driven onboarding, site setup, Stripe Connect, mobile grid, booking URL, real-time notifications |
| Barbara — Error Recovery | Double-booking prevention at save, conflict messaging, manual guest SMS |
| Mike — Migration | CSV site import, rate rules (weekend/LOS), iframe widget, transaction history |
| Guest — Online Booking | No-account booking, mobile-first, SMS confirmation/reminder/check-in sequences, Apple Pay |
| Staff — Check-In | Staff role permissions, mobile arrivals list, check-in action, automated SMS, reservation notes |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

Each RV park operator is a distinct tenant. Tenant isolation must be enforced at the data layer — an operator's site data, reservation data, guest data, and payment records are never accessible to other operators. Shared infrastructure (application servers, database) with per-tenant data partitioning via operator_id foreign key.

### Permissions Model

Three access levels for MVP:

| Role | Capabilities |
|------|--------------|
| **Owner** | Full access: park configuration, rates, reservations, payments, staff management, billing |
| **Staff** | View reservations, mark check-in/check-out, view today's arrivals/departures, add notes |
| **Guest** | Public booking page only (no authentication required) |

Staff invitations sent via email link. Staff accounts cannot modify rates, process refunds, or access billing.

### Operator Onboarding Flow

Guided 4-step wizard:
1. Add park name, address, check-in/check-out times, gate code
2. Add sites (manual entry or CSV import)
3. Set base rates and deposit requirements
4. Connect Stripe account via Stripe Express

Completion of step 4 activates the public booking page. Operators who do not complete Stripe Connect cannot receive guest payments but can still use the site grid for manual reservations.

### Subscription & Billing

- **MRR plan:** $79/month, unlimited sites, unlimited bookings, billed via Stripe Billing
- **LTD plan:** $99 one-time for up to 30 sites, $199 one-time for up to 100 sites (AppSumo launch; enforced by site count gate)
- Operators exceeding LTD site limit are prompted to upgrade; existing bookings are not disrupted during upgrade flow

### Integration Requirements

- **Stripe Connect** (Express account): Operators connect their own Stripe account; guest payments flow directly to operator; ParkSimple takes no cut beyond Stripe's standard 2.9% + $0.30
- **Twilio Programmable SMS**: All guest communications routed through a ParkSimple Twilio account; operators do not need their own Twilio account; SMS costs absorbed into subscription pricing (at projected volume, Twilio costs < $0.02/message)
- **Stripe Webhooks**: payment_intent.succeeded, payment_intent.payment_failed, refund.created events update reservation status in real time

---

## Functional Requirements

### Park Setup & Configuration

- **FR1:** Operators can add named or numbered sites with site type (Full hookup RV, Electric-only RV, Tent, Cabin), maximum length, and an optional site description
- **FR2:** Operators can configure park-level settings: park name, address, check-in time, check-out time, default gate code, and park policies text shown on the booking page
- **FR3:** Operators can connect their Stripe account via Stripe Express guided flow from within ParkSimple onboarding
- **FR4:** Operators can configure deposit requirements as either a flat dollar amount or a percentage of the total stay cost
- **FR5:** Operators can configure a branded subdomain booking URL (e.g., `parkname.parksimple.com`) or copy an embeddable iframe code for use on an existing website
- **FR6:** Operators can import sites in bulk via CSV upload with column mapping for site name, type, length, and nightly rate

### Rate Management

- **FR7:** Operators can set a base nightly rate per site or per site-type category
- **FR8:** Operators can configure a weekend premium rate that applies to Friday and Saturday nights across all specified date ranges
- **FR9:** Operators can define named seasonal pricing periods (e.g., "Peak Season") with start/end dates and a distinct nightly rate that overrides the base rate
- **FR10:** Operators can create length-of-stay discount rules specifying a minimum number of nights and a percentage discount applied to the total stay
- **FR11:** Operators can set holiday pricing overrides that apply a custom rate to specific date ranges, taking precedence over seasonal and base rates
- **FR12:** The booking page displays the total stay cost with a line-item breakdown of nightly rates, any applied discounts, and the deposit amount

### Reservation Creation & Management

- **FR13:** Operators can create a manual reservation by selecting a site, specifying dates, entering guest name and phone number, and optionally collecting a deposit
- **FR14:** Operators can view, edit (modify dates, site, guest contact info, notes), and cancel any reservation from the dashboard
- **FR15:** Operators can block a site for a specified date range with a reason label (Maintenance, Owner Use, etc.), preventing online bookings for those dates
- **FR16:** The system prevents any reservation save or booking submission that would result in overlapping dates on the same site, displaying a specific conflict message identifying the existing reservation
- **FR17:** Operators can add free-text notes to any reservation, visible to operators and staff but not guests
- **FR18:** Operators can view a full reservation history for any site, including cancelled reservations

### Site Grid Calendar

- **FR19:** Operators can view all sites as rows and dates as columns in a visual site-grid calendar displaying a 2–4 week date range
- **FR20:** Each site-day cell displays reservation status with color coding: Available (green), Reserved (yellow/orange), Occupied (blue), Blocked (gray)
- **FR21:** Operators can click any occupied or reserved site-day cell to open the reservation detail view
- **FR22:** Operators can click any available site-day cell to initiate a new manual reservation pre-populated with that site and start date
- **FR23:** Operators can navigate the site grid forward and backward by week or month
- **FR24:** The site grid is accessible and usable on mobile devices (iOS Safari, Android Chrome) with a responsive or dedicated mobile layout

### Guest Online Booking

- **FR25:** Guests can view available sites for selected dates on the park's public booking page without creating an account or logging in
- **FR26:** The booking page displays site type, hookup details, nightly rate, length, and park policies for each available site
- **FR27:** Guests can complete a booking by selecting a site, entering dates, providing their name and cell phone number (email optional), and paying the deposit via Stripe
- **FR28:** The booking page works without app installation on iOS Safari 15+ and Android Chrome, and supports Apple Pay and Google Pay in addition to card entry
- **FR29:** Operators can embed the booking interface on an existing website via a provided HTML iframe snippet

### Guest Communication (SMS-First)

- **FR30:** Within 60 seconds of a confirmed booking, guests receive an SMS containing: park name, site number, check-in and check-out dates, check-in time, gate code, and deposit amount paid
- **FR31:** On the day before a guest's scheduled arrival, the system sends an automated SMS reminder containing: check-in time, gate code, and any site-specific notes the operator configured
- **FR32:** On the morning of a guest's scheduled checkout, the system sends an automated SMS reminder containing: checkout time and remaining balance due (if any)
- **FR33:** Operators can configure the content of each automated SMS template, including inserting dynamic tokens (guest name, site number, gate code, dates, balance due)
- **FR34:** Operators can manually send a custom SMS to any guest from the reservation record at any time
- **FR35:** When an operator marks a guest as checked in, the system sends an immediate SMS delivering the gate code and a configurable welcome message

### Payment Processing

- **FR36:** Guests can pay the configured deposit amount via Stripe-processed credit/debit card at time of booking; no payment data is stored in ParkSimple
- **FR37:** Operators can collect the remaining reservation balance from a guest at check-in or checkout by processing a card charge from the reservation detail view
- **FR38:** Operators can issue a full or partial refund on any completed payment from the reservation detail view; refunds appear on the guest's card within standard Stripe processing times
- **FR39:** A payment confirmation SMS is sent to the guest automatically upon any successful charge or refund
- **FR40:** Operators can view a transaction history filtered by date range, showing all charges and refunds with amounts, timestamps, and associated reservation

### Check-In & Check-Out Operations

- **FR41:** Operators can mark a guest as Checked In from the reservation detail view or the Today's Arrivals list; the site status updates to Occupied and the check-in gate code SMS fires automatically
- **FR42:** Operators can mark a guest as Checked Out from the reservation detail view or the Today's Departures list; the site status returns to Available
- **FR43:** Operators can view a Today's Arrivals list showing all guests with check-in dates matching the current calendar day, sortable by site number or arrival time
- **FR44:** Operators can view a Today's Departures list showing all guests with checkout dates matching the current calendar day
- **FR45:** The Today's Arrivals and Today's Departures views are optimized for mobile use by park staff with large tap targets and minimal scrolling

### Operator Account & Access Management

- **FR46:** Operators can invite staff members by email, assigning them the Staff role; staff receive an email with an account setup link
- **FR47:** Staff members can log in and access the site grid, reservation detail view (read-only), Today's Arrivals, and Today's Departures, but cannot access rate management, payment processing, or account settings
- **FR48:** Operators can reset their password via an email link sent from the login screen
- **FR49:** Operators can update park settings, rate configuration, and billing preferences from the account dashboard at any time
- **FR50:** Operators can view their current subscription status, billing history, and next billing date from the account settings

---

## Non-Functional Requirements

### Performance

- The site grid calendar loads and renders all sites for the displayed date range in under 3 seconds for parks with up to 150 sites, measured from navigation to interactive state at the 95th percentile under normal load
- The guest booking page submits successfully (deposit charged, reservation created, confirmation SMS sent) within 10 seconds for 95th percentile of transactions under normal load
- SMS confirmations are delivered within 60 seconds of booking confirmation, as measured by Twilio delivery status webhook; automated alerting fires if the 7-day rolling average drops below 95% delivery rate
- Today's Arrivals and Departures lists load in under 2 seconds on a 4G mobile connection

### Security

- All data transmitted between client and server uses HTTPS/TLS 1.2+; HTTP requests are redirected to HTTPS
- ParkSimple stores no raw card data; all payment data is processed and vaulted by Stripe; ParkSimple qualifies as PCI-DSS SAQ A by design
- Operator passwords are stored using bcrypt with a minimum cost factor of 12
- Stripe webhook events are verified using Stripe-Signature header validation before processing; unverified webhooks are rejected with HTTP 400
- Multi-tenant data isolation is enforced at the query level: every database query involving reservation, site, guest, or payment data includes an operator_id constraint; cross-tenant data access is architecturally impossible without authentication bypass
- Twilio API credentials and Stripe secret keys are stored as environment secrets, never committed to source control or logged

### Reliability

- The system targets 99.5% uptime during business hours (6am–11pm local time for the target US market), excluding scheduled maintenance windows announced 24 hours in advance
- Reservation creation is atomic: either the Stripe payment succeeds, the reservation record is created, and the SMS confirmation is queued — or none of these occur. A failed payment does not leave a dangling reservation record
- Double-booking prevention is enforced using database-level serializable transactions with row locking on the site-availability table; application-layer checks are supplementary, not primary
- If Twilio SMS delivery fails, the system retries up to 3 times with exponential backoff and logs the failure to the operator's notification log; operators can manually resend any failed SMS from the reservation detail view

### Scalability

- The initial architecture supports 500 concurrent active parks without degrading site-grid load time below the 3-second threshold
- Database schema and query patterns support parks with up to 150 sites and 5 years of reservation history without index degradation
- Twilio SMS throughput is provisioned for peak AppSumo launch volume (estimated 50 concurrent booking confirmations/minute)

### Accessibility

- The guest-facing booking page meets WCAG 2.1 AA standards; this applies specifically to the booking flow, not the operator dashboard (MVP scope)
- The booking page does not require JavaScript for core functionality (site listing and date selection); Stripe payment widget requires JavaScript
- The Today's Arrivals and Departures mobile views use a minimum tap target size of 44×44px per Apple HIG guidelines

---

*PRD completed: 2026-11-17*
*Next step: `create-architecture` — Build technical architecture decisions using this PRD as foundation*

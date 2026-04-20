---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/waste-hauling-dumpster-rental-management.md
  - _bmad-output/planning-artifacts/market-research-waste-hauling-dumpster.md
  - _bmad-output/planning-artifacts/brief-waste-hauling-dumpster.md
workflowType: prd
idea: waste-hauling-dumpster-rental-management
date: 2026-04-20
author: Root
classification:
  projectType: saas_b2b
  domain: field_service_asset_rental
  complexity: low_medium
  projectContext: greenfield
---

# Product Requirements Document — DumpDesk

**Author:** Root
**Date:** 2026-04-20

---

## Executive Summary

DumpDesk is a mobile-first booking and operations platform for micro waste hauling operators — dumpster rental companies with 1–5 roll-off containers, junk removal operators with 1–3 trucks, and porta-potty rental companies with 1–10 units. It solves three daily operational pains: real-time container availability visibility, customer self-service booking (eliminating phone-only intake), and automated invoicing with weight-based overage capture.

The US market contains 3,500–9,600 dumpster rental micro-operators who currently manage bookings on paper calendars, dispatch via text, and invoice through QuickBooks with manual data entry. Every VC-backed competitor (Hauler Hero at $200–600+/month, CurbWaste at $250–600+/month, ServiceCore at $200+/month, Docket at $150–400+/month) targets operators with 5+ trucks and prices accordingly. No product exists at $49/month or with a lifetime deal for this segment.

DumpDesk's primary acquisition channel is the "Dumpster Rental Business Owners" Facebook group (15,000 members), supported by an equipment dealer partnership channel and NWRA regional events. Revenue model: $49/month subscription or $299 Lifetime Deal — the only LTD in the category. Targets: $10K MRR by month 12, with a $90K–$150K AppSumo LTD launch event in months 4–6.

### What Makes This Special

**The only LTD in the vertical.** No competitor offers a lifetime deal — this is a permanent first-mover position for value-conscious operators who resist monthly overhead. Combined with the lowest monthly price ($49/month vs. $99–600+ for alternatives), DumpDesk owns the "built for 1–5 roll-offs" positioning that no VC-funded competitor can credibly claim without rebuilding their product.

**Weight-based overage billing with photo receipt OCR** addresses a workflow gap no competitor has built for micro-operators. The flow — scale receipt → photo upload → automatic overage calculation → invoice line item — captures 15–25% of revenue that operators currently miss because manual math is too slow or too awkward to bill for after the fact.

**The booking page drives daily revenue proof.** Operators share their `dumpdesk.com/yourbusiness` link and immediately see online bookings from customers who would have called a competitor or not called at all during off-hours. The feature pays for itself in week one, reducing churn risk from day 1 and creating a viral word-of-mouth moment in the Facebook group community.

### Project Classification

- **Project Type:** SaaS B2B — vertical-specific, SMB-targeted
- **Domain:** Field Service / Physical Asset Rental / Waste Hauling
- **Complexity:** Low-Medium (no heavy compliance, standard Stripe/Twilio integrations, basic OCR)
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

- **Activation signal:** Operator receives their first online booking through their DumpDesk booking page within 14 days of signup — the clearest indicator that setup is complete and the software generates revenue
- **Aha moment:** An automated SMS extension reminder triggers a customer reply and an invoice is generated without the operator touching anything — consistently described in qualitative research as the moment operators "get it"
- **Weekly habit formation:** Operator views the availability calendar 5+ times per week, replacing the paper wall calendar entirely
- **Driver adoption:** Drivers close 10+ jobs per week via the mobile app (one-tap confirmation + receipt upload) without reverting to text message dispatch
- **Revenue recovery:** Operators capture weight overages previously missed — self-reported average of $600–$1,100 in month 1 through automated overage calculation
- **Time savings:** Operators self-report 3+ hours/week reduction in calls, invoicing, and manual follow-up (30-day onboarding survey)

### Business Success

- **Month 3:** 50 paying operators, NPS > 40 (min 15 respondents), gross churn < 7%
- **Month 6:** $5,000 MRR, LTD campaign launched (300–500 units at $299 = $90K–$150K gross cash event)
- **Month 12:** $10,000 MRR (~200 operators), 25+ verified G2/Capterra reviews, junk removal mode live
- **Month 24:** $25,000 MRR (~500 operators), porta-potty module live, $1.5–2M ARR trajectory established
- **North Star Metric:** Online bookings received per active operator per week — target: 3+ by month 3

### Technical Success

- System prevents double-booking via atomic container availability locking on concurrent booking requests
- SMS delivery rate > 95% for all automated messages (swap reminders, extension prompts, booking confirmations)
- OCR weight extraction accuracy > 90% on landfill scale receipt photos (manual override always available)
- Driver mobile app functions in offline mode — loads daily job list at start of day, syncs changes on reconnect
- Stripe payment processing with < 0.5% failed payment rate from integration errors
- Customer booking page loads in < 2 seconds on mobile (LTE) — operators share this link via SMS to mobile users

### Measurable Outcomes

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Onboarding completion (1+ container + Stripe connected) | > 80% of trial signups | Week 1 |
| Time to first online booking received | < 7 days | Week 1–2 |
| Booking page link shared by operator | > 90% publish within 7 days | Onboarding |
| Online bookings per active operator/week | > 3 | Month 3 |
| Weight receipt upload adoption | > 60% of active operators | Month 1 |
| Gross monthly churn | < 5% | Month 6+ |
| Trial-to-paid conversion rate | > 30% | Ongoing |
| LTD units sold (launch campaign) | 300–500 at $299 | Month 4–6 |
| Customer Acquisition Cost via community channels | < $150 | Month 3 |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP must deliver visible revenue impact to the operator within the first week. An operator who shares their booking page link and receives an online booking is activated. An operator who captures a weight overage via photo receipt has seen the ROI case. These two events within 14 days define MVP success at the user level.

**Core capabilities required at launch:**

1. Container inventory management with real-time availability calendar
2. Customer self-service booking page (shareable URL, container selection, date picker, address autocomplete, Stripe deposit payment)
3. SMS automation via Twilio — booking confirmation, swap reminders 24 hours before rental end, extension prompt on end date, EXTEND reply handling
4. Automated invoice generation triggered by booking, extension, and pickup completion events
5. Invoice delivery via email with Stripe Pay Now link; automated payment reminders at 3, 7, and 14 days
6. Per-weight overage billing — driver photo upload, OCR weight extraction, auto-calculation, automatic invoice line item
7. Driver mobile app (iOS + Android) — daily job list, one-tap job confirmation, scale receipt upload, offline job cache, navigation link to Google Maps

**Explicitly out of scope for MVP:** AI route optimization, CRM pipeline, advanced analytics/reporting, multi-location/franchise support, porta-potty module, recurring schedule automation, customer self-service portal, two-way QuickBooks sync, embedded website builder, landfill scale system API integration.

### Growth Features (Post-MVP — Month 2–3)

- Operator dashboard with Google Maps container map view (all deployed containers as pins with customer name, rental end date on hover)
- Junk removal mode (account-level vertical toggle — replaces availability calendar with job booking calendar; before/after photo requirement; flat or cubic yard pricing; removes container-size concepts)
- QuickBooks / Xero one-way export (completed job data: customer, date, amount, payment status — reduces manual double-entry for office-manager persona)
- Review request automation (automated SMS/email 3 days post-completion with operator's Google Business Profile review link pre-populated)

### Vision — Year 2

- Porta-potty rental module (unit types instead of container sizes; same availability calendar/booking/SMS/invoicing platform with terminology adjusted)
- Multi-vertical positioning: "DumpDesk — for any 1–10 unit rental fleet"
- Equipment dealer channel integrations (roll-off truck dealers recommending DumpDesk at point-of-purchase, referral tracking)
- Landfill scale system API integrations (automatic weight data import, eliminating driver photo step)
- Container utilization benchmarking (anonymized: "operators in your region achieve X% utilization; you're at Y%")
- Seasonal demand forecasting to help operators time container purchases
- Lead generation marketplace (overflow booking referrals between DumpDesk-connected operators in the same geography)
- Insurance and financing partnerships for container purchases (operators buy more equipment because DumpDesk shows them utilization data to justify it)

---

## User Journeys

### Journey 1: Dave — Solo Roll-Off Owner (Primary User, Success Path)

**Opening Scene:** Dave, 48, runs 3 roll-off containers and a single truck out of his house. He manages bookings on a paper wall calendar. It's 9pm on a Tuesday when a customer texts asking if the 20-yard is available next Thursday. Dave is watching TV. His calendar is in the shop.

**Discovery:** A Facebook post in "Dumpster Rental Business Owners" catches his eye: "Made $600 in online bookings my first week that I wouldn't have gotten — I was on a job and couldn't answer the phone." He clicks the link, sees "$49/month or $299 LTD, 14-day free trial, no credit card required," and signs up on his phone in 4 minutes.

**Rising Action:** Day 1 — Dave adds his 3 containers (20-yard deployed at 142 Oak St through Friday; 15-yard available; 10-yard in maintenance). He connects Stripe via OAuth in 15 minutes. He copies his booking page URL and pastes it into his Google Business Profile. Total setup: under 45 minutes.

**Day 3 — First Online Booking:** A customer finds Dave's Google Business listing at 9:17pm. They click the booking page link, select the 20-yard, enter their address, choose next Tuesday, and pay a $75 deposit via Stripe. Dave gets a push notification. He doesn't call anyone. The 20-yard is automatically blocked on his availability calendar for Tuesday through the following Tuesday.

**Climax — The SMS Extension Moment (Week 2):** A container rental period ends on Friday. The customer gets an automated SMS: "Your DumpDesk rental ends today — reply EXTEND for another week or we'll schedule pickup Monday." Customer replies EXTEND. Extension invoice ($350) is generated and sent automatically. Dave never touched his phone. He realizes he's been leaving extension revenue on the table every week.

**Weight Billing (Month 1):** Dave's driver picks up a container, goes to the landfill, photographs the scale receipt in the driver app. DumpDesk OCR extracts the weight, calculates the overage ($182), and adds it to the invoice draft. Dave reviews, taps Send. In month 1, he captures $1,100 in weight overages he previously would have eaten.

**Resolution:** By month 2, Dave gets 4–6 online bookings per week without answering calls. His Sunday invoice session drops from 3 hours to 20 minutes (reviewing auto-generated drafts). He texts his cousin who runs a junk removal operation to try it.

**Capabilities revealed:** Container inventory, availability calendar, booking page with Stripe deposit, push notifications, SMS automation, extension billing via SMS reply, automated invoice generation, weight overage billing via photo OCR.

---

### Journey 2: Maria — Family Business Office Manager (Multi-Driver Scenario)

**Opening Scene:** Maria, 34, manages all customer calls and scheduling for her father's 5-container, 2-truck operation from home. She fields 25–40 calls per week and coordinates two drivers via a shared Google Calendar updated by text. She has no visibility into which containers are where unless she texts a driver and waits for a response.

**Pain Point Crystallizes:** On a Thursday morning, a driver fails to pick up a container because he missed the swap reminder text Maria forgot to send. The customer calls demanding a credit. Her father is furious. She decides they need something better.

**Rising Action:** Maria signs up for DumpDesk and adds all 5 containers with their current deployment status and assigned drivers. She invites both drivers to the driver app via email.

**Day 5 — Single-Screen Visibility:** Maria opens the availability calendar and sees all 5 containers in one view — current locations, rental end dates, scheduled swaps. For the first time, she can answer "Is the 30-yard available next Wednesday?" without texting a driver.

**Climax — Driver App Adoption:** A driver picks up a container, photographs the scale receipt in the app. The system calculates the $182 overage and adds it to the draft invoice. Maria reviews, approves, sends in one click. Customer pays online the same day. No math. No awkward post-hoc billing call.

**Resolution:** Maria's inbound call volume drops ~35% as customers book online. QuickBooks data entry drops from 7 hours/week to 2 hours reviewing auto-generated invoices. She reports 3+ hours saved weekly, and her father immediately validates the $49/month.

**Capabilities revealed:** Multi-driver support, container map view, driver app, weight receipt OCR, invoice review and approval workflow, online customer payment.

---

### Journey 3: Carlos — Field Driver (Secondary User)

**Opening Scene:** Carlos is Dave's part-time driver. He gets dispatched via text: "20-yard to 142 Oak St this morning, pick up the 15-yard at 87 Maple Ave." He sometimes misses texts and has to call Dave to ask what's next.

**Rising Action:** Dave invites Carlos to the DumpDesk driver app. Carlos opens his daily job list at 7am: 2 deliveries and 1 pickup, each with the address, container size, time window, and customer name loaded the previous evening. He taps "Navigate" and Google Maps opens to the first address.

**Climax:** Carlos delivers the 20-yard. One tap: "Delivered." No call to Dave. At the landfill, he photographs the scale receipt. At the next job: "Pickup Complete." Both jobs sync to Dave's dashboard automatically.

**Resolution:** Carlos starts each day knowing exactly what's on his schedule. Dave gets real-time job completion status without calling. Missed swaps drop. Extension revenue is captured automatically. Customer disputes over undocumented weight charges disappear.

**Capabilities revealed:** Driver job list with offline support, one-tap job confirmation, navigation integration, scale receipt photo upload, job status sync to operator dashboard.

---

### Journey 4: Homeowner (End-Customer Booking)

**Opening Scene:** A homeowner is renovating their kitchen and needs a 15-yard dumpster for 5 days. It's Saturday at 8pm. They find Dave's Google Business listing and see the "Book Online" link.

**Rising Action:** They click through to `dumpdesk.com/daveswastemgmt`. The 15-yard is shown as available starting Monday. They enter their address with autocomplete, select Monday through Saturday, and see the total: $295 base rate + $75 deposit due now. They pay via Stripe in under 2 minutes.

**Resolution:** They receive a confirmation email with rental details, Dave's phone number, and the overage rate schedule. Monday morning the dumpster arrives. Friday they receive an automated SMS: "Your rental ends today — reply EXTEND for another week or we'll schedule pickup Saturday." They reply EXTEND. The extension invoice is generated automatically. No phone call required on either side.

**Capabilities revealed:** Public booking page, container availability display, date picker with blocked dates, address autocomplete, Stripe deposit payment, confirmation email, customer SMS notifications and EXTEND reply handling.

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Dave (solo owner) | Availability calendar, booking page, Stripe deposit, SMS automation, push notifications, auto-invoicing, weight overage billing |
| Maria (office manager) | Multi-driver support, container map view, driver app, invoice approval workflow, QuickBooks export |
| Carlos (driver) | Driver app (iOS/Android), offline job list, one-tap confirmation, receipt upload, navigation integration |
| Homeowner (customer) | Public booking page, availability display, address autocomplete, Stripe payment, confirmation email, SMS notifications |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- Each operator account is fully isolated — containers, customers, bookings, and invoices are never shared or visible across accounts
- Booking pages: each operator gets a unique subdomain (`{company-slug}.dumpdesk.com`) with their branding; subdomain chosen at onboarding
- Stripe Connect: each operator connects their own Stripe account via OAuth; DumpDesk collects its subscription fee separately and never comingles operator funds
- Twilio SMS: each operator sends from a DumpDesk-provisioned local phone number; operators may optionally connect their own Twilio number

### Roles & Permissions

| Role | Access |
|------|--------|
| Owner | Full access — containers, bookings, invoices, settings, driver management, DumpDesk subscription billing |
| Driver | Read own assigned job list, confirm jobs, upload receipts — no access to invoicing, settings, or other drivers' jobs |
| (Phase 2) Office Manager | Full access except DumpDesk subscription billing |

### Onboarding Flow

- Trial signup: email and password only; no credit card required for 14-day trial
- Guided onboarding checklist: (1) Add first container → (2) Connect Stripe → (3) Copy and share booking page link
- Stripe onboarding: standard Stripe Connect Express OAuth flow; DumpDesk handles redirect, token storage, and account status verification
- Onboarding completion defined as: 1+ container added AND Stripe account connected AND booking page URL viewed/copied

### Phase 1 Integrations

- **Stripe Connect** — Deposit collection at booking, invoice Pay Now links, DumpDesk subscription billing
- **Twilio Programmable SMS** — Booking confirmations, swap reminders, extension prompts, EXTEND reply inbound handling, driver dispatch notifications
- **Google Maps Places API** — Delivery address autocomplete on customer booking page
- **iOS/Android Push Notifications (FCM/APNs)** — New booking alerts and driver job completion alerts for operators

### Phase 2 Integrations

- **QuickBooks Online API** — One-way export: completed job data (customer, date, service, amount, payment status)
- **Xero** — Alternative one-way accounting export
- **Google My Business** — Review request links pre-populated with operator's Google Business Profile URL

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-proof MVP — the product must demonstrably generate revenue for operators within the first 7–14 days. The primary activation event is an operator receiving an online booking they would not have captured otherwise. This drives immediate word-of-mouth in the Facebook group community and reduces churn from day 1 by creating a concrete, memorable financial proof point.

**Resource Requirements:** 1 full-stack developer (Next.js/React + Node.js/PostgreSQL), 1 mobile developer (React Native or Flutter) — or 1 full-stack developer comfortable with React Native. External: Stripe Connect, Twilio, Google Maps Places API. Infrastructure: Railway or Render for backend, Vercel for frontend, managed PostgreSQL (Neon or Supabase).

### MVP Feature Set

**Core journeys supported:** Solo owner (Dave) — full booking → dispatch → invoice loop; Driver — job list + confirmation + receipt upload; Customer — online booking page + deposit payment.

**Must-have capabilities (all 7 required for launch):**

1. Container inventory with type, status, and deployment tracking
2. Real-time availability calendar — visual, color-coded, auto-blocking on confirmed booking
3. Customer booking page — shareable URL, container selection, date picker, address autocomplete, configurable pricing, Stripe deposit
4. SMS automation — booking confirmation, 24-hour swap reminder, end-date extension prompt, EXTEND reply handling, driver dispatch
5. Automated invoice generation — triggers at booking, extension, and pickup completion; email delivery with Stripe Pay Now link; automated reminders at 3/7/14 days
6. Weight overage billing — driver photo upload, OCR extraction, manual override, auto-calculation, invoice line item
7. Driver mobile app (iOS + Android) — daily job list, one-tap confirm, receipt upload, offline cache, navigation link

### Risk Mitigation Strategy

**Technical risks:**
- OCR accuracy on scale receipt photos — mitigated by mandatory manual override UI that appears immediately on low-confidence extraction; accuracy target 90% is a threshold not a dependency
- SMS deliverability — Twilio SLA covers 95%+ delivery; daily monitoring dashboard; operator alert in-app if critical SMS fails (booking confirmation, extension prompt)
- Double-booking race condition — mitigated by database-level container availability locking on concurrent booking requests

**Market risks:**
- Hauler Hero or Docket launching $49/month tier — mitigated by $299 LTD (price-locks early adopters permanently), community relationships built before funding allows competitor response, and micro-operator-specific UX that enterprise tools can't replicate without full rebuild
- Facebook group community turning against paid promotion — mitigated by genuine value delivery first; authentic user testimonials drive adoption, not ads

**Resource risks:**
- Solo or small-team build — MVP scoped to 6–8 weeks of focused development; driver app is the riskiest timeline element; fallback is a mobile-responsive web-based driver view for launch with native app in month 2

---

## Functional Requirements

### Container & Fleet Management

- FR1: Operators can add containers with type (10/15/20/30/40-yard roll-off), a custom name or ID, condition notes, and initial status (available / deployed / maintenance)
- FR2: Operators can view all containers in a color-coded calendar showing each container's deployment timeline, rental end dates, and available windows simultaneously
- FR3: Operators can manually update any container's status (mark in maintenance, mark available, flag as damaged)
- FR4: Operators can see the current address and customer name for each deployed container without navigating away from the calendar
- FR5: The system automatically blocks a container's calendar slot when a booking is confirmed, preventing double-booking

### Customer Booking

- FR6: Operators can share a unique booking page URL that customers access without creating an account
- FR7: Customers can select a container size, enter a delivery address with autocomplete, and choose rental start and end dates — with unavailable dates visually blocked
- FR8: Customers can pay a configurable deposit amount via Stripe at booking without an operator present
- FR9: Operators can configure per-container-size pricing: base rate, standard rental period, overage day rate, included weight tonnage, and overage weight rate per ton
- FR10: Operators can block specific dates on their booking calendar (holidays, maintenance windows, personal unavailability)
- FR11: Customers receive an email confirmation immediately after booking with rental details, operator contact information, and the overage rate schedule

### Job Dispatch & Driver Management

- FR12: Operators can create jobs (delivery, pickup, swap) assigned to a specific driver with address, container, and time window
- FR13: Drivers can view their daily job list in the mobile app sorted by time window, showing address, container size, job type, and customer name
- FR14: Drivers can navigate to any job address by tapping a link that opens Google Maps with the destination pre-filled
- FR15: Drivers can confirm job completion status (delivered / picked up / issue reported) with a single tap from the job card
- FR16: Drivers can upload a landfill scale receipt photo from within the job completion flow on the mobile app
- FR17: The driver app loads and displays the day's full job list in offline mode and syncs all status changes to the server when network connectivity is restored
- FR18: Operators receive a push notification when a driver confirms a job or flags an issue requiring attention

### SMS Automation

- FR19: Customers automatically receive an SMS booking confirmation when a booking is created (via online booking page or manual entry by operator)
- FR20: Customers automatically receive an SMS 24 hours before their rental period ends presenting options to extend or schedule pickup
- FR21: Drivers automatically receive an SMS when a new job is assigned to them, including the delivery address and time window
- FR22: Customers can reply EXTEND to an SMS reminder to automatically trigger a one-period extension, generate an extension invoice, and update the calendar
- FR23: Operators can view the complete SMS history for any customer or any booking from within the dashboard

### Invoicing & Payments

- FR24: The system automatically generates an invoice draft at each billing trigger: booking (deposit), customer-initiated extension, and operator-confirmed job completion
- FR25: Operators can review any invoice draft and send it to the customer with a single click
- FR26: Invoices display rental period, container size, base rate, extension fees (if applicable), and weight overage line items (if applicable)
- FR27: Every invoice includes a Stripe Pay Now link enabling customers to pay online without calling the operator
- FR28: The system automatically sends payment reminder emails at 3, 7, and 14 days to customers with unpaid invoices
- FR29: Operators can manually mark any invoice as paid (for customers paying by check or cash)
- FR30: Operators can view a filterable list of all invoices by status (draft / sent / paid / overdue) for any date range

### Weight Overage Billing

- FR31: Drivers can upload a scale receipt photo from the driver mobile app during or immediately after job completion
- FR32: The system uses OCR to extract the total weight value from the uploaded scale receipt photo
- FR33: Operators can manually override the OCR-extracted weight value before the invoice is generated
- FR34: The system calculates the overage charge automatically by applying the operator's configured rate per ton against the weight exceeding the included tonnage for that container size
- FR35: The calculated overage charge is automatically added as a named line item to the job completion invoice draft before the operator reviews and sends it

### Operator Account & Settings

- FR36: Operators can configure their business name, logo, contact phone, and contact email displayed on their booking page and all customer-facing invoice emails
- FR37: Operators can connect their Stripe account via the Stripe Connect OAuth flow and view their connection status from the settings screen
- FR38: Operators can invite drivers by email address, assign them a "Driver" role, and remove driver access at any time
- FR39: Operators can view their DumpDesk subscription status (trial / active / expired), current plan, and next billing date, and can cancel or change plans from the settings screen
- FR40: Operators can configure their SMS sender number (use DumpDesk-provisioned number or connect their own Twilio number)

### Reporting & Visibility

- FR41: Operators can view a dashboard summary showing: containers currently deployed, upcoming pickups and swaps in the next 7 days, total revenue this week, and count of unpaid invoices with total outstanding balance
- FR42: Operators can view a container utilization report showing days deployed vs. days available per container for any selected time period
- FR43: Operators can export all job and invoice data for a selected date range as a CSV file for external accounting or analysis

---

## Non-Functional Requirements

### Performance

- Customer booking page initial load: < 2 seconds on mobile (LTE connection) — operators share this link via SMS to mobile users; slow load directly costs bookings
- Availability calendar update after booking confirmed: < 500ms — real-time update prevents double-booking in concurrent sessions
- Automated SMS delivery latency: < 30 seconds from trigger event — swap reminders that arrive hours late are operationally useless
- OCR weight extraction result: < 10 seconds after photo upload — drivers should not wait at the landfill; manual override must be immediately accessible if OCR times out

### Security

- All data transmitted over HTTPS/TLS 1.2+ — no exceptions for any endpoint including public booking pages
- PCI-DSS compliance delegated entirely to Stripe; DumpDesk stores no raw payment card data at any point
- Driver app requires authenticated session; job data inaccessible without valid credentials
- Operator accounts strictly isolated at the database level — no cross-account data access possible through any API endpoint
- Stripe Connect tokens stored encrypted at rest; operator Stripe account IDs never exposed in client-side code

### Reliability

- API uptime: 99.5% monthly (< 3.6 hours downtime/month) — operators run live businesses; downtime during business hours costs real bookings and undermines trust
- Customer-facing booking page uptime prioritized over operator dashboard uptime — booking page should remain accessible even during partial backend degradation
- SMS delivery failure handling: log failure, retry once after 60 seconds; if retry fails, alert operator in dashboard within 1 hour for critical messages (booking confirmation, extension reminder)
- Double-booking prevention: container availability check and booking confirmation must be atomic — no booking confirmed without the container lock successfully acquired

### Scalability

- System designed to support 500–2,000 concurrent operator accounts at launch with headroom for 10,000+ accounts without architectural changes
- Booking page and availability calendar must handle viral sharing spikes (operator posts booking link in Facebook group; 100–200 simultaneous visitors possible)
- Database schema and API design must support future multi-vertical expansion (junk removal mode, porta-potty module) without breaking changes to existing operator data or integrations

### Integration Resilience

- Stripe Connect: operator is notified immediately if Stripe account connection is lost or restricted; bookings still accepted but payment collection paused with clear error messaging to operator
- Twilio: if SMS delivery fails after retry, failure is surfaced in dashboard notification — operators are never silently left with undelivered critical messages
- Google Maps Places API: address autocomplete degrades gracefully to plain text input if API quota is exceeded — booking flow never blocked by a third-party API failure
- OCR: if weight extraction confidence is below threshold or the API call fails, the driver is immediately presented with a manual weight entry field — no error state blocks the job completion flow

---

*PRD generated: 2026-04-20 | Idea Score: 90/105 | Product Brief: Complete | Market Research: Complete | Status: Ready for Architecture*

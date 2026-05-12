---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/booking-widget-no-show-reducer.md
  - _bmad-output/planning-artifacts/product-brief-booking-widget-no-show-reducer.md
workflowType: prd
idea_name: booking-widget-no-show-reducer
user_name: Root
date: 2026-05-12
classification:
  projectType: saas_b2b
  domain: local_services_scheduling
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — ShowUp

**Author:** Root
**Date:** 2026-05-12
**Product:** ShowUp — Booking Widget + No-Show Reducer for Local Service Businesses
**Status:** Complete

---

## Executive Summary

Local service businesses — auto detailers, barbers, cleaning services, plumbers, HVAC technicians — lose 10–30% of weekly revenue to appointment no-shows. A solo detailer with 25 bookings/week at $150/session loses $375–$1,125/week to no-shows alone. No single sub-$50/month product currently combines the three interventions that eliminate this leak: automated SMS reminders, deposit collection at booking, and trade-specific booking flows.

**ShowUp** is an embeddable JavaScript booking widget deployed via a single `<script>` tag on any website. It collects a configurable Stripe deposit at booking time, fires two-way Twilio SMS reminders at 24 hours and 2 hours before the appointment, and uses industry-specific booking forms (vehicle year/make/model for auto detailers, stylist selection for barbers). The entire widget works on Wix, Squarespace, WordPress, Webflow, and raw HTML with no platform migration.

Target: AppSumo LTD launch at $79 targeting 500 sales in 60 days, followed by $19–$49/month MRR tiers.

### What Makes This Special

ShowUp occupies uncontested whitespace: **low price + trade-specific + SMS + deposits combined**. No existing product delivers all three at sub-$50/month:

- Calendly and TidyCal: no deposits, no SMS by default, built for B2B meetings
- Acuity: SMS only at $61/month tier
- Vagaro/Fresha: beauty verticals only
- Housecall Pro: $49–$300+/month, full FSM overkill for solo operators
- Kentroi (March 2026 entrant): no SMS, no vertical flows

The core insight: local service business owners don't need scheduling software — they need a no-show elimination system. SMS reminders reduce no-shows by 26–38%. Deposits add a further 14%+ reduction. Combined with vertical-specific booking flows that reduce drop-off, ShowUp addresses the complete no-show problem that every existing tool only partially solves.

## Project Classification

- **Project Type:** SaaS B2B (micro-business segment)
- **Domain:** Local services scheduling / appointment management
- **Complexity:** Medium — Stripe Connect OAuth, Twilio provisioning, Google Calendar sync, TCPA compliance, embeddable widget cross-origin architecture
- **Project Context:** Greenfield
- **Build Timeline:** 2–3 weeks MVP
- **Initial Infrastructure Cost:** $50–$150/month (Vercel + Railway + Supabase)

---

## Success Criteria

### User Success

- No-show rate reduction ≥35% vs. user's self-reported pre-ShowUp baseline, measured via post-onboarding survey at 30 and 60 days
- Time from signup to live widget with first booking received: ≤30 minutes for 80% of users, measured via funnel analytics (signup → first booking event)
- Customer booking completion rate (started bookings that complete with deposit paid): ≥70%, measured via widget event tracking
- SMS delivery confirmation rate: ≥98%, measured via Twilio delivery logs
- Two-way SMS confirmation rate (customers replying Y/N): ≥60% of reminder-eligible bookings
- Deposit processing success rate: ≥90% of attempted deposits processed without error, measured via Stripe webhook data
- "Aha!" moment: user sees "No-shows prevented" counter increment within first 48 hours of activation

### Business Success

**3-Month (Launch Phase):**
- AppSumo LTD revenue: $39,500 gross (500 sales × $79) within 60 days of listing
- Widget activation rate: ≥75% of signups complete setup and receive ≥1 booking within 7 days
- Beta NPS: ≥35 from 20-user beta cohort (10 per vertical)
- Zero critical payment failures in beta

**6-Month (Growth Phase):**
- MRR: $5,000–$8,000 from direct paid subscribers
- Active paying accounts: 250–400
- NPS: ≥40
- G2/Capterra reviews: 20+ at avg ≥4.3 stars

**12-Month (Scale Phase):**
- MRR: $15,000–$25,000
- Supported verticals: 5+
- Organic CAC: <$30 from content channels
- Wix or Squarespace app marketplace listing live

### Technical Success

- Zero critical payment processing failures in production (Stripe deposits)
- SMS delivery rate ≥98% sustained under normal operating load
- Widget embed loads in ≤1.5 seconds on a cold page load (no prior cache)
- Admin dashboard interactive within ≤2 seconds for pages with ≤500 bookings
- Google Calendar sync latency: availability reflected in widget within 60 seconds of calendar change
- Twilio number provisioning completes within 30 seconds of Stripe Connect completion

### Measurable Outcomes (North Star)

**North Star Metric:** "No-shows prevented per month per business" — platform-wide aggregate and per-account counter.

| Metric | Target | Gate |
|---|---|---|
| No-show reduction per active account | ≥35% | AppSumo launch gate |
| Widget activation time | ≤30 min for 80% | AppSumo launch gate |
| Beta NPS | ≥35 | AppSumo launch gate |
| Beta payment failures | 0 critical | AppSumo launch gate |
| SMS delivery rate | ≥98% | AppSumo launch gate |
| Video testimonials (quantified ROI) | ≥3 | AppSumo launch gate |

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**Philosophy:** Revenue-protection MVP. The product is only useful if it demonstrably reduces no-shows. All three pillars (SMS + deposits + vertical flows) must be present and functional on day one — removing any one breaks the differentiation story.

**Supported User Journeys at MVP:**
- Solo service business owner onboards, configures widget, embeds on existing website, receives first deposit-backed booking, receives SMS delivery confirmation
- Customer books through widget on mobile, pays deposit, receives SMS confirmations, confirms via reply
- Business owner views upcoming bookings, deposit status, SMS delivery status, and no-shows-prevented counter
- Business owner processes full or partial refund when customer cancels

**Must-Have Capabilities:**

1. Embeddable JavaScript booking widget (drop-in `<script>` tag, no iframe)
2. Two launch verticals: Auto Detailing and Barbershop/Salon with pre-configured field templates
3. Stripe deposit collection at booking (configurable fixed $ or % amount, $10–$500 range)
4. Automated SMS reminders: 24-hour and 2-hour pre-appointment, configurable message text
5. Two-way SMS confirmation: Y confirms, N cancels and triggers refund workflow
6. TCPA-compliant opt-in at booking time
7. Business owner admin dashboard (booking list, deposit status, SMS status, no-shows counter)
8. Google Calendar two-way sync (ShowUp bookings appear on GCal; GCal events block ShowUp availability)
9. Guided onboarding: vertical selection → service setup → Stripe Connect → Google Calendar → Twilio provisioning → embed code
10. Mobile-responsive customer-facing booking UI
11. Email confirmation to customer on successful booking + deposit
12. Refund workflow (full/partial) accessible from admin dashboard

### Growth Features — Phase 2 (Post-MVP)

- Verticals 3–5: Plumbing/HVAC (service area, job type, urgency), Residential Cleaning (address, sq ft, frequency), Pet Grooming (animal type, breed, service)
- Rebooking nudge SMS: automated "time for your next [service]?" message 4–8 weeks post-appointment
- Post-appointment review generation SMS (Google review link)
- Wix app marketplace listing
- Squarespace app marketplace listing

### Vision — Phase 3 (Expansion)

- White-label / agency tier for marketing agencies serving local service businesses
- Google Business Profile native integration (ShowUp as GBP booking button)
- Multi-location accounts (2–5 locations)
- International expansion (UK, AU, CA)
- Referral mechanics: customer-facing "refer a friend" discount flow
- API + Zapier integration for CRM/email marketing connections
- Waitlist management for overbooked slots
- Predictive no-show scoring (requires data volume post-scale)
- Native iOS/Android app for business owners

**Deliberately Out of Scope (by design):** Full FSM functionality — job management, invoicing, technician dispatch, route optimization, CRM. ShowUp must not become "another Housecall Pro."

### Risk Mitigation Strategy

**Technical Risks:**
- Stripe Connect OAuth complexity → mitigate with Stripe's documented Connect onboarding flow; test all OAuth edge cases in beta
- Widget cross-origin embedding on third-party sites → use `postMessage` API for iframe-free communication; test on Wix, Squarespace, WordPress, Webflow in beta
- Twilio number provisioning failure → implement retry logic; fallback to manual provisioning with support ticket

**Market Risks:**
- Calendly/Acuity add SMS + deposits at current price tier → establish vertical brand and AppSumo reviews before this occurs; embedded widget + customer data creates switching costs
- Kentroi iterates to add SMS and vertical flows → ship within 6 weeks of this PRD; claim vertical SEO before Kentroi iterates
- Low beta NPS → recruit motivated beta users from trade Facebook groups; iterate rapidly on onboarding

**Resource Risks:**
- 2-week MVP estimate is tight → prioritize: widget embed + Stripe + Twilio core first; dashboard UX can be functional-minimal at launch
- AppSumo rejects listing → backup: direct LTD page on PitchGround / Dealify

---

## User Journeys

### Journey 1: Marcus — Solo Auto Detailer (Primary, Success Path)

Marcus is 34, runs a mobile auto detailing business. He does 18–22 bookings/week at $120–$350/service. He has a Wix website, uses Google Calendar, and texts customers manually the morning of their booking when he remembers. He loses 3–4 appointments/month to no-shows ($540–$720/month).

**Opening Scene:** Marcus sees a post in the "Auto Detailers Business Group" Facebook group. A fellow detailer writes: "Cut my no-shows in half with this booking widget that texts customers — $79 one-time on AppSumo." Marcus clicks.

**Rising Action:** He watches the 5-minute auto detailing walkthrough video on ShowUp's landing page. He recognizes his exact use case in the demo — the vehicle year/make/model fields, the deposit screen, the SMS preview. He clicks "Buy." The AppSumo checkout takes 90 seconds.

**Climax:** Marcus opens the ShowUp dashboard. He selects "Auto Detailing." The system pre-configures a booking form with vehicle year/make/model, service type (exterior wash, full detail, ceramic coating), and mobile vs. shop location. He connects his Google Calendar via OAuth. He connects his Stripe account. He sets a $30 deposit requirement. He copies the embed snippet and pastes it into his Wix site's HTML embed block. The widget appears live. Total time: 22 minutes.

**Resolution:** 48 hours later, both booked clients for that day confirmed via the 24-hour SMS reminder. Neither no-showed. Marcus's dashboard shows: "No-shows prevented this month: 1 ($150 saved)." He posts about it in the Facebook group. Within 3 weeks, he's referred two other detailers.

**Edge Cases Covered:**
- Customer doesn't complete deposit → booking not confirmed; slot stays available
- Customer replies N to SMS → booking marked cancelled, deposit refund initiated, Marcus notified by email
- Marcus's Google Calendar has a conflicting event → ShowUp blocks that slot automatically

---

### Journey 2: Daria — 2-Chair Barbershop Owner (Primary, Paper-to-Digital)

Daria is 41, owns a 2-chair barbershop with one part-time employee. Current system: paper calendar, Facebook Messenger DMs for appointment requests. No-show rate: ~15% ($45–$65/missed appointment). She occasionally turns away walk-ins to hold booked slots, then the booked client doesn't show — a double loss.

**Opening Scene:** Daria's daughter shows her a ShowUp Instagram ad. "This is the thing that texts your customers before their appointment, Mom." Daria watches the barbershop demo video.

**Rising Action:** She's hesitant about deposits — "won't that put people off?" — but the demo shows the $15 deposit framed as "just holds your spot." The walkthrough video shows the embed process on Squarespace specifically. She buys.

**Climax:** Daria selects "Barbershop/Salon." The template pre-fills stylist selection (Daria + part-timer name), service types (haircut, beard trim, color), and chair preference (optional). She sets a $15 deposit. She pastes the embed code into her Squarespace HTML block. Setup time: 28 minutes — slightly over target but she does it independently.

**Resolution:** First week: 3 bookings via the widget, all confirmed via SMS. 0 no-shows. Previous week had 2 no-shows from her paper calendar system. She calls her part-timer: "We're going digital."

---

### Journey 3: Tony — 3-Person Cleaning Service (Primary, Late-Cancel Use Case)

Tony is 48, runs a residential cleaning company with 2 part-time cleaners. His no-show problem is same-day cancellations — clients forget they'd be away. A crew shows up, nobody home, crew gets paid for a wasted trip.

**Opening Scene:** Tony is calculating last month's wasted crew hours. He searches "how to reduce last-minute cancellations cleaning service" and finds a ShowUp landing page for cleaning services.

**Rising Action:** Tony's specific concern: "The 24-hour reminder needs to trigger a real response from the customer, not just an FYI." He reads the two-way confirmation feature: "Reply Y to confirm or N to cancel." That's what he needs — the 24-hour window gives him time to reassign the crew.

**Climax:** Tony uses the Cleaning Service vertical template (not yet in MVP vertical list — he uses Auto Detailing template and customizes field labels). He sets address + frequency fields manually. Sets a $50 deposit. Enables both 24-hour and 2-hour reminders.

**Resolution:** The 24-hour reminder catches a client who had forgotten — she replies N, cancels. Tony reassigns that 3-hour slot to another client on the waitlist. The $50 deposit is refunded per his refund policy. Net result: zero wasted crew time.

---

### Journey 4: Admin/Dashboard — Business Owner Managing Bookings

Marcus, one month in, is reviewing his ShowUp dashboard on his phone between jobs.

**Dashboard needs:**
- Upcoming appointments (next 7 days) in list view with customer name, service, deposit status, confirmation status
- Tapping a booking shows detail: vehicle info, deposit amount, SMS delivery log ("sent 2026-05-11 14:00, delivered 14:00:04, replied Y 14:03")
- "No-shows prevented" counter on dashboard home: "3 this month — $450 saved"
- Business settings accessible: working hours, buffer time, service list, deposit amounts

**Edge Case — Deposit Dispute:** A customer calls claiming they didn't authorize the deposit charge. Marcus opens the booking detail, sees the TCPA consent timestamp and card confirmation. He can initiate a full refund directly from the dashboard with one tap. No Stripe dashboard login needed.

---

### Journey 5: End Customer — Mobile Booking UX

Sarah books a full car detail with Marcus via his Wix website on her iPhone.

**Booking flow (≤60 seconds target):**
1. Tap "Book Now" button → ShowUp widget opens (embedded, no redirect)
2. Select service: "Full Interior + Exterior Detail — $220"
3. Enter vehicle: 2021 Honda CR-V
4. Select date and time from available slots (Google Calendar-synced)
5. Enter name, phone, email
6. Opt-in to SMS reminders (pre-checked, required for booking)
7. Enter card details via Stripe Elements (PCI-compliant inline form)
8. "Pay $30 deposit and confirm booking" button
9. Confirmation screen: booking summary, reminder schedule ("You'll get a reminder tomorrow and again 2 hours before")
10. SMS and email confirmation received within 60 seconds

**Drop-off risk points:** Step 4 (if calendar shows no availability → show "next available" prompt), Step 7 (if Stripe load fails → retry with error message, never show raw Stripe errors)

### Journey Requirements Summary

| Journey | Capabilities Required |
|---|---|
| Marcus (auto detailer setup) | Vertical templates, Stripe Connect, Google Calendar sync, Twilio provisioning, widget embed, onboarding flow |
| Daria (barbershop) | Barbershop vertical template, Squarespace embed, stylist selection, deposit framing |
| Tony (cleaning, late cancels) | 24-hour two-way SMS, cancellation flow, refund initiation, crew-reassignment window |
| Admin/dashboard | Booking list view, booking detail with SMS log, no-shows counter, refund workflow, settings |
| End customer (Sarah) | Mobile-responsive widget, Stripe Elements, date/time picker, SMS opt-in, confirmation screen |

---

## Domain-Specific Requirements

### Payments (PCI-DSS)

- Stripe Elements used for card collection — card data never touches ShowUp servers
- ShowUp stores only Stripe payment intent IDs and deposit amounts, not card numbers
- Stripe Connect OAuth for business onboarding — business owner's Stripe account receives deposits directly
- Refunds initiated via Stripe API; ShowUp never holds funds
- All payment state transmitted and stored over TLS 1.2+

### SMS / Telecom (TCPA Compliance)

- Express written consent captured at booking: checkbox "I agree to receive appointment reminder text messages. Msg & data rates may apply. Reply STOP to unsubscribe."
- Consent timestamp, booking ID, and phone number logged and stored for ≥4 years
- STOP keyword handling: Twilio inbound webhook processes STOP/HELP/UNSUBSCRIBE; opt-out stored in database; no further SMS sent to that number
- Business owner's Twilio number (provisioned by ShowUp) sends all SMS — not a shared short code
- SMS content approved for A2P 10DLC campaign registration (required for US business messaging)

### Data Privacy

- Customer PII (name, phone, email, vehicle info) stored only for the subscribing business's account
- Business owners can export and delete customer data via dashboard (GDPR/CCPA operational readiness)
- No cross-business customer data sharing
- Stripe customer tokens are per-business; no shared customer profiles

---

## SaaS B2B Specific Requirements

### Multi-Tenant Architecture

- Each business owner has an isolated account with their own: services list, booking availability, Twilio number, Stripe Connect account, Google Calendar connection, widget embed key
- Embed key is per-account; if a business's subscription lapses, their widget shows a "booking unavailable" message (no abrupt breakage)
- No cross-tenant data visibility

### Subscription & Access Model

**Tiers at MVP:**

| Tier | Price | Limits | Key Features |
|---|---|---|---|
| AppSumo LTD | $79 one-time | 1 location, 2 verticals | All MVP features |
| Starter (MRR) | $19/month | 1 location, 1 vertical, 100 bookings/month | All MVP features |
| Pro (MRR) | $39/month | 1 location, all verticals, unlimited bookings | All MVP + rebooking SMS |
| Growth (MRR) | $49/month | 3 locations, all verticals, unlimited bookings | All Pro + white-label widget |

**Subscription enforcement:**
- Booking creation blocked when monthly booking limit reached (Starter tier)
- Widget renders "booking unavailable" if subscription inactive
- 7-day grace period before widget disables on payment failure

### Onboarding Flow Requirements

The onboarding must complete in ≤30 minutes for 80% of business owners. Steps must be sequential and gated:

1. Vertical selection (required before service setup)
2. Service list creation (name, duration, price, deposit amount — minimum 1 service to proceed)
3. Working hours configuration (pre-filled with common defaults per vertical)
4. Stripe Connect OAuth (required before booking deposit goes live)
5. Google Calendar OAuth (optional — availability managed manually if skipped)
6. Twilio phone number provisioning (automated, one-click; required for SMS reminders to activate)
7. Widget embed code — copy with instructions for top 4 platforms (Wix, Squarespace, WordPress, Webflow); includes screenshot walkthroughs per platform
8. Walkthrough video embedded per vertical (5 minutes max, hosted on Loom or equivalent CDN)

### Widget Embed Technical Requirements

- Widget deployed as vanilla JavaScript, no React/Vue dependency, no jQuery dependency
- Single `<script src="...">` tag with `data-showup-key` attribute
- Widget renders in an embedded div (not iframe) for maximum platform compatibility
- Widget CSS scoped to `[data-showup-widget]` namespace to avoid conflicts with host page styles
- Widget must not block page rendering (async script load)
- Widget must work in Safari iOS 15+, Chrome Android, Chrome Desktop, Safari Desktop
- Widget size: ≤50KB gzipped initial load

---

## Functional Requirements

### Widget & Booking Flow

- FR1: Customers can book a service by selecting a date, time, and service type from the embedded widget on any website
- FR2: Customers can enter vehicle-specific information (year, make, model) when booking through an auto detailing vertical widget
- FR3: Customers can select a specific stylist or barber when booking through a barbershop/salon vertical widget
- FR4: Customers can pay a configurable deposit amount via credit or debit card at the time of booking
- FR5: Customers can provide SMS consent at booking time and opt out at any time via STOP keyword
- FR6: Customers receive an SMS and email confirmation within 60 seconds of completing a booking with deposit
- FR7: Customers receive an automated SMS reminder 24 hours before their appointment
- FR8: Customers receive an automated SMS reminder 2 hours before their appointment
- FR9: Customers can confirm attendance by replying Y to any reminder SMS
- FR10: Customers can cancel a booking by replying N to any reminder SMS, triggering the refund workflow

### Availability & Scheduling

- FR11: Business owners can define weekly working hours and available time slots
- FR12: The booking widget only displays available time slots (blocks slots that are already booked or marked unavailable)
- FR13: The booking widget reflects Google Calendar events as unavailable slots in real time (within 60 seconds of calendar change)
- FR14: Business owners can set a configurable buffer time between bookings (e.g., 30 minutes between appointments)
- FR15: Business owners can manually block specific dates or time ranges from accepting bookings

### Deposit & Payments

- FR16: Business owners can configure deposit amounts per service as a fixed dollar amount or percentage of service price
- FR17: Business owners can initiate a full or partial refund for any booking from the admin dashboard
- FR18: Business owners can view deposit collection status (pending, collected, refunded) per booking
- FR19: The system transfers collected deposits directly to the business owner's Stripe account

### SMS Reminders & Notifications

- FR20: Business owners can enable or disable the 24-hour SMS reminder independently of the 2-hour reminder
- FR21: Business owners can edit the SMS reminder message templates (character limit: 160 per message)
- FR22: The system logs SMS delivery confirmation status per message per booking
- FR23: Business owners receive an email notification when a customer cancels via SMS reply N
- FR24: Business owners receive an email notification for each new completed booking

### Admin Dashboard

- FR25: Business owners can view all upcoming bookings in list view and calendar view, filterable by date range
- FR26: Business owners can view booking detail including: customer contact info, service, vehicle/service-specific fields, deposit status, SMS delivery log, confirmation status
- FR27: Business owners can see a "no-shows prevented" counter showing prevented no-shows and estimated revenue saved for the current month and all-time
- FR28: Business owners can manage their service catalog (add, edit, delete services with name, duration, price, deposit setting)
- FR29: Business owners can manage their business profile (name, address, phone, working hours, buffer time)
- FR30: Business owners can access the widget embed code at any time from the dashboard

### Onboarding

- FR31: New business owners can select their service vertical during onboarding and receive a pre-configured booking form template for that vertical
- FR32: Business owners can connect their Stripe account via OAuth during onboarding to enable deposit collection
- FR33: Business owners can connect their Google Calendar via OAuth during onboarding to enable availability sync
- FR34: The system automatically provisions a Twilio phone number for the business owner during onboarding to enable SMS reminders
- FR35: Business owners receive platform-specific embed instructions (with screenshots) for Wix, Squarespace, WordPress, and Webflow

### Customer Data & Compliance

- FR36: Business owners can view the customer list for their account with booking history per customer
- FR37: Business owners can export customer data (name, phone, email, booking history) in CSV format
- FR38: Business owners can delete a customer record and all associated data from the system
- FR39: The system captures and stores TCPA consent (timestamp, booking ID, phone number) for every SMS opt-in

---

## Non-Functional Requirements

### Performance

- Widget initial load (cold): ≤1.5 seconds measured at the 90th percentile under standard network conditions (4G mobile)
- Booking form submission to confirmation screen: ≤3 seconds at 95th percentile (includes Stripe payment intent creation)
- Admin dashboard page load (≤500 bookings in dataset): ≤2 seconds at 95th percentile
- Google Calendar availability sync latency: ≤60 seconds from calendar event creation to widget reflecting unavailability
- SMS reminder delivery: ≥98% of messages delivered within 60 seconds of scheduled send time (measured via Twilio delivery webhooks)

### Security

- All customer card data handled exclusively via Stripe Elements; no card data transits or is stored on ShowUp servers (PCI-DSS SAQ A compliant)
- All API endpoints require authenticated session (JWT or session token); no unauthenticated data access
- Stripe webhook events validated via Stripe signature verification before processing
- Twilio inbound webhook endpoints validated via Twilio signature header
- All data at rest encrypted using AES-256 (Supabase/PostgreSQL default)
- All data in transit encrypted via TLS 1.2+
- TCPA consent records retained for minimum 4 years
- Business owner authentication: email + password with bcrypt hashing; optional MFA via TOTP (Phase 2)

### Scalability

- System architecture supports horizontal scaling of API layer without re-architecture at 10× initial user load
- PostgreSQL database schema uses per-tenant row-level security; no shared tables with cross-tenant visibility
- Twilio number pool management designed for 10,000+ provisioned numbers without manual intervention
- Widget CDN-served from edge (Vercel CDN); no origin server requests for widget JS load

### Reliability

- API uptime: ≥99.5% measured monthly (excluding planned maintenance windows communicated 48 hours in advance)
- Widget embed: widget script served from CDN with ≥99.9% availability; degrades gracefully (hides booking button with "booking unavailable" message) on API failure rather than breaking host page
- SMS reminder scheduling: reminder jobs persisted in database; survive API restart without message loss
- Stripe webhook idempotency: duplicate webhook events processed without duplicate state changes

### Integration Constraints

- Google Calendar OAuth: scopes limited to `calendar.readonly` + `calendar.events` (no access to email or contacts)
- Stripe Connect: uses Standard Connect (business owner retains full Stripe account ownership); ShowUp never holds funds
- Twilio: A2P 10DLC campaign registration required before US SMS at scale; test via unregistered number during beta (<1,000 messages/day threshold)
- Widget cross-origin: widget hosted on `widget.showup.io`; booking API on `api.showup.io`; CORS policy allows `*` for widget GET requests, restricts POST/mutations to registered embed domains only

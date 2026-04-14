---
stepsCompleted: [1, 2, "2b", "2c", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/salon-barbershop.md
  - _bmad-output/planning-artifacts/market-research-salon-barbershop.md
  - _bmad-output/planning-artifacts/brief-salon-barbershop.md
workflowType: prd
date: 2026-04-14
author: Root
project: salon-barbershop
---

# Product Requirements Document — BoothBook

**Author:** Root
**Date:** 2026-04-14
**Project:** salon-barbershop
**Status:** Complete

---

## Executive Summary

### Vision

BoothBook is a no-commission, no-contract booking and shop management platform purpose-built for independent barbershops and booth renters — the 40%+ of the US barbershop market that every major software platform either excludes, overcharges, or builds the wrong product for.

The core value proposition is structural: BoothBook is the only tool designed natively for the booth-rental model, where each barber in a shop is an independent contractor (separate booking page, separate payments, separate income dashboard) operating under a shared roof. This model is the dominant operating structure for ~60,000–100,000 US barbershops, and not a single mainstream platform supports it without hacks and workarounds.

Compounding this structural gap is the November 2025 Fresha pricing change — imposing a 20% new-client commission after years of "free forever" marketing — which triggered the largest mass-defection event this market has ever seen. BoothBook launches directly into this trust vacuum with the clearest counter-positioning available: *"No commissions. No contracts. Just booking."*

### Product Differentiator

Four capabilities that collectively do not exist in any competing product:

1. **Barbershop walk-in queue with live TV display** — QR join, real-time wait times, waiting-room TV mode. No mainstream competitor has this for barbershops.
2. **Per-barber independent pages within a shared shop** — Each booth renter gets their own booking URL, calendar, payment tracking, and income dashboard. The booth-rental model, natively supported.
3. **No-account client booking** — Phone number only. No Fresha profile, no app download. Every major platform forces account creation; this directly eliminates a documented lost-booking friction point.
4. **Zero commissions, zero contracts** — 0% marketplace commission (vs. Fresha 20%, Booksy 30%). No annual contract (vs. Mindbody/Boulevard 12-month lock-in). Flat pricing only.

### Project Classification

- **Type:** SaaS / B2B2C (shop owner + barbers are the paying customers; clients are end-users of the booking flow)
- **Domain:** Service business management, appointment scheduling, independent contractor platform
- **Scale:** MVP for 1–10 chair shops; designed to grow to multi-location chains
- **Complexity:** Moderate — real-time queue, multi-tenant shop/barber model, SMS, PWA
- **Distribution:** AppSumo LTD launch → barber Facebook groups → YouTube SEO → recurring SaaS

---

## Success Criteria

### User Success

| Metric | Definition | MVP Target |
|--------|-----------|-----------|
| First booking time | Time from signup to first real client booking | Median < 24 hours |
| Onboarding completion | % completing profile (services + hours + booking link) within 48 hours | > 65% |
| Walk-in queue adoption | % of shop owners who set up TV display within 7 days | > 60% |
| Client friction rate | % of bookings completed without client account creation | > 90% |
| No-show reduction | Reduction in no-show rate after SMS reminders enabled | −40% vs. baseline |
| Daily dashboard engagement | % of active barbers checking income dashboard daily | > 50% |
| Barber referral rate | % of users who refer ≥1 other barber within 90 days | > 25% |

### Business Success

| Phase | Metric | Target |
|-------|--------|--------|
| Phase 1 (Months 1–3) | AppSumo LTD units sold | 500–1,000 |
| Phase 1 | Gross LTD revenue | $60K–$120K |
| Phase 1 | AppSumo refund rate | < 5% |
| Phase 1 | AppSumo avg rating | ≥ 4.5 stars |
| Phase 2 (Months 3–9) | 30-day retention | > 70% |
| Phase 2 | 90-day retention | > 50% |
| Phase 2 | NPS among active barbers | > 40 |
| Phase 2 | Active shops processing payments | 500+ |
| Phase 3 (Months 9–18) | Payment processing MRR | $15K–$40K/month |
| Phase 3 | Premium tier MRR | $2K–$6K/month |
| Phase 3 | Total MRR | $50K+ |

### Technical Success

- < 2s page load on 3G mobile (primary device for booth barbers)
- 99.9% uptime during peak hours (Saturday 9am–6pm)
- Real-time queue updates within 2 seconds of barber action
- Zero client PII exposed across barber accounts
- TCPA-compliant SMS opt-out handling

---

## Product Scope

### Phase 1 — MVP (Weeks 1–6)

Core features that deliver the unique value proposition and enable AppSumo launch:

1. Walk-in queue with TV display (QR join, real-time updates, TV mode URL)
2. Per-barber independent booking pages within a shared shop
3. Friction-free client booking (phone number only, no account)
4. Tip tracking + daily income dashboard
5. SMS appointment reminders (24-hour + optional 2-hour)
6. Client history + service notes per barber

### Phase 2 — Growth (Months 2–6 post-launch)

Conversion from passive tool to revenue engine:

1. Integrated payment processing via Stripe Connect (2.6% + $0.30)
2. Client can pay upfront at booking
3. Booth rental invoicing (weekly rent per chair, auto-generated invoices)
4. Cancellation fill: automated SMS to waitlist on cancellation
5. Google Calendar sync (two-way)
6. Multi-barber analytics for shop owners (busiest hours, avg ticket, no-show rate by barber)

### Phase 3 — Expansion (Year 2+)

Platform maturity and adjacent verticals:

1. AI cancellation fill (predicts likely no-shows, pre-texts next client)
2. AI visual consultation (hair preview) — first-to-market differentiator
3. Native iOS + Android app (if PWA proves insufficient via data)
4. Multi-location chain management
5. Subscription membership management (recurring monthly client plans)
6. Expansion to adjacent verticals: nail salons, tattoo studios, massage therapists

### Explicit Out-of-Scope (MVP)

| Feature | Reason |
|---------|--------|
| Integrated payment processing | PCI compliance + Stripe Connect = significant complexity; Phase 2 |
| Client upfront payment | Requires payment processing; Phase 2 |
| AI cancellation fill | High-value but not core to MVP value prop; Phase 2/3 |
| Color formula / cut history cards | Salon segment expansion; Phase 3 |
| Multi-location support | Single shop is MVP; Phase 3 |
| Booth rental invoicing | Useful but not blocking adoption; Phase 2 |
| Staff commission tracking | Employee-model salons are secondary; Phase 2 |
| Google Calendar / iCal sync | Nice-to-have; Phase 2 |
| Custom branded pages | Vanity feature; Phase 2 |
| Marketplace / client discovery | Anti-positioning decision — explicitly never |
| Instagram / Google Business booking | Phase 2 distribution feature |
| Native iOS / Android app | PWA in MVP; native only if warranted by data |

---

## User Journeys

### Journey 1: Marco — Booth Barber Onboarding and Daily Use

**Profile:** 29-year-old booth renter at a 4-chair Chicago shop. 120 regular clients. Currently uses Instagram DMs + manual texts.

**Discovery:** Sees a Facebook group post — "Just switched from Fresha — no commissions and clients don't need to create an account." Clicks AppSumo link. Reads landing page: main question answered immediately.

**Onboarding (target: < 15 minutes):**
1. Signs up → creates barber profile: name, photo, services with prices, availability schedule
2. Gets personal booking link: `boothbook.com/marco`
3. Copies link into Instagram bio
4. Test-books himself: confirms no account creation required ✓
5. Enables SMS reminders (default: 24h before)

**Core Daily Loop:**
- **Morning:** Opens app, checks day view — 6 appointments, 2 open slots
- **Mid-cut:** New booking arrives from Instagram bio link, auto-added to calendar; phone buzzes once, he ignores it and keeps cutting
- **Walk-in arrives:** Shop owner adds to TV queue; Marco gets notification when client is next
- **Checkout:** Logs service + tip in one tap
- **End of day:** Checks income dashboard — 7 cuts, $245 tips, $595 total, 0 no-shows

**Aha Moment:** "First week — zero no-shows. Three new clients booked from Instagram. One texted me: 'That was so easy.'"

**Capabilities Required by This Journey:**
- Public barber booking page (no auth for clients)
- QR-based + link-based booking entry
- Service + availability configuration per barber
- SMS confirmation and reminder to client
- Daily income dashboard with tip breakdown
- Walk-in queue notification to assigned barber

---

### Journey 2: DeShawn — Shop Owner Walk-In Queue Setup

**Profile:** 38-year-old owner-operator, 4-chair Atlanta barbershop. Two employee barbers, two booth renters. Currently on Vagaro ($72/month, crashes during peak).

**Discovery:** Vagaro crashes Saturday morning again. Posts in r/Barber. Multiple replies mention BoothBook walk-in queue. Watches 4-minute YouTube demo. Sees the TV display. Signs up.

**Onboarding:**
1. Creates shop profile (name, address, hours)
2. Adds 4 chairs: 2 employees (sets their services/pricing), 2 booth renters (sends independent setup links to each)
3. Booth renters each complete their own setup in ~10 minutes
4. Activates walk-in queue: gets TV mode URL
5. Opens URL on waiting room TV — full-screen display, no TV app needed
6. Tests: scans QR from his phone → sees himself appear on TV in real time ✓

**Core Usage:**
- Walk-in arrives → scans QR on shop door → joins queue (name + service)
- TV shows: "Marcus — 2 ahead, ~20 min wait" updating live
- DeShawn finishes a cut → marks complete → queue advances → next client gets "You're up next" SMS
- At close: reviews aggregate revenue across all 4 chairs

**Aha Moment:** "First Saturday. Nobody came to ask me how long the wait was. Not once."

**Capabilities Required by This Journey:**
- Shop creation with multi-barber management
- Booth renter invite flow (independent setup per barber)
- Walk-in queue with QR code join
- TV mode URL (full-screen web page, no app install)
- Real-time queue updates via WebSocket
- "Up next" SMS trigger on queue advancement
- Shop owner aggregate dashboard

---

### Journey 3: Client — Frictionless Booking

**Profile:** First-time client who found a barber's Instagram. Clicks the booking link in bio.

**Journey:**
1. Lands on booking page: sees barber photo, service menu with prices, available slots
2. Selects service (e.g., "Fade + Beard Trim — $45") and a time slot
3. Enters name + phone number (10-digit US number) — nothing else
4. Receives SMS confirmation: "You're booked with Marco at [Shop] on [Date/Time]. Reply STOP to unsubscribe."
5. 24 hours before: reminder SMS arrives
6. On repeat visit: phone number recognized, name pre-filled

**Capabilities Required by This Journey:**
- Public booking page (no login, no account)
- Service + slot selection UI
- Phone-number-only client intake
- SMS confirmation delivery
- 24-hour automated reminder
- Client record keyed to phone number for repeat visits

---

### Journey 4: Aisha — Solo Stylist (Secondary)

**Profile:** 34-year-old solo stylist, salon suite. 80% repeat clients, 20% referrals. On GlossGenius at $24/month. Wants client history + LTD pricing.

**Journey:**
1. Finds BoothBook through AppSumo or barber group spillover
2. Signs up as solo barber (no shop)
3. Configures services (locs, natural hair treatments), hours, booking link
4. Migrates existing client list (manual entry of names + phone numbers)
5. Adds service notes per client: "prefers no heat," "box braids — 4 hours"
6. New clients book via Instagram bio link without creating an account

**Key Difference from Barber Journey:** Walk-in queue is not needed; appointment-only workflow. Client history and notes are the primary retention driver.

**Capabilities Required:**
- Solo barber signup (no shop required)
- Client list manual entry or CSV import
- Per-client notes field
- Appointment-only availability (no walk-in queue required)
- SMS reminders

---

### Journey 5: Shop Owner — Aggregate Oversight

**Profile:** DeShawn reviewing week performance on Sunday evening.

**Journey:**
1. Opens shop dashboard
2. Sees this week: 4 barbers × 5 days = aggregate revenue breakdown
3. Clicks into individual barber view: sees their booking volume (but NOT individual booth renter's client data — privacy respected)
4. Reviews busiest day/time slots
5. Notes one booth renter had 3 cancellations — considers discussing

**Capabilities Required:**
- Shop owner aggregate dashboard (total revenue, booking volume by barber)
- Barber-level booking count visible to owner
- Client details of booth renters NOT visible to shop owner (privacy boundary)
- Weekly/monthly summary view

---

## Domain Requirements

### Regulatory & Compliance

**SMS / TCPA Compliance:**
- All SMS must include opt-out instruction ("Reply STOP to unsubscribe") per TCPA requirements
- STOP replies must immediately suppress all future SMS to that number
- Opt-out records must be persisted permanently per carrier requirements
- No marketing SMS — transactional only (confirmations, reminders, queue alerts)

**Data Privacy:**
- Client phone numbers are keyed to the barber who collected them — not shared across barbers or accessible by shop owner for booth renters
- No client PII shared with third parties except SMS delivery provider
- CCPA compliance: clients can request deletion of their data via the barber
- No client data sold to or shared with any marketplace or discovery layer (this is a core product principle, not just a compliance requirement)

**Payment Processing (Phase 2):**
- PCI DSS compliance required when processing card payments
- Stripe Connect handles PCI scope reduction — BoothBook never stores card data
- Each barber is a separate Stripe Connect account (booth rental model requires independent payouts)

### Technical Domain Constraints

**Real-Time Queue:**
- Queue state must update within 2 seconds of any barber action
- TV mode must be resilient to connection drops (reconnect automatically, never freeze)
- Multiple concurrent editors (barber marks done, client joins) must not cause race conditions

**SMS Reliability:**
- Delivery rate target: > 98% for confirmed-valid US phone numbers
- Reminder jobs must fire within ±5 minutes of scheduled time
- Failed deliveries must be logged; no silent failures

**Mobile-First:**
- PWA — fully functional on iOS Safari and Android Chrome
- Barbers manage their entire business from their phone; desktop is secondary
- Touch targets: minimum 44×44pt per Apple HIG
- Offline tolerance: basic calendar view should load from cache if offline

---

## Innovation & Differentiation

### Structural Innovation: The Booth-Rental Model

Every competing platform (Vagaro, Fresha, GlossGenius, Mangomint, Boulevard) was architected around the employee-model salon: one owner, multiple staff, centralized scheduling and payments. BoothBook inverts this: each barber is an independent micro-business, and the shop is a coordination layer above them — not a manager of them.

This architectural decision propagates to every feature:
- Separate booking pages (not one shop page with staff selection)
- Separate income dashboards (not one payroll view)
- Separate payment processing per barber (Phase 2)
- Shop owner sees aggregate totals, NOT individual booth renter client details

No competitor has built this architecture. Building it correctly creates a technical and conceptual moat.

### Feature Innovation: Walk-In Queue with TV Display

Walk-in traffic is 40–60% of a barbershop's daily revenue. Every mainstream platform ignores it, designing only for pre-scheduled appointments. The TV display (full-screen web page on any smart TV — no app install) makes the queue visible to the entire waiting room, eliminating the most common source of front-desk conflict in barbershops.

This is a barbershop-specific UX that doubles as a visible, ambient advertisement for BoothBook in every shop lobby that uses it.

### Distribution Innovation: Anti-Fresha Timing

The November 2025 Fresha commission announcement is not just a product opportunity — it is a distribution window. Hundreds of thousands of barbers are actively looking for an alternative at the exact moment BoothBook launches. The "No commissions. No contracts." positioning lands as a direct response to a live emotional event, not abstract product marketing.

This timing cannot be replicated by a competitor building from scratch. The window is 6–12 months from the Fresha announcement before the market stabilizes around alternatives.

---

## Functional Requirements

### FR-01: Shop & Barber Management

| ID | Requirement |
|----|-------------|
| FR-01.1 | A user shall be able to create a shop profile with name, address, and operating hours |
| FR-01.2 | A shop owner shall be able to invite barbers by phone number or email |
| FR-01.3 | Each invited barber shall receive an independent setup link to configure their own profile |
| FR-01.4 | Barbers shall be assigned one of two roles: employee (owner manages their services/prices) or booth renter (fully independent configuration) |
| FR-01.5 | A solo barber shall be able to sign up without creating a shop |
| FR-01.6 | A barber's profile shall include: name, photo, bio, services with prices, and availability schedule |
| FR-01.7 | A barber shall be able to configure booking lead time (e.g., minimum 1 hour before appointment) and maximum advance booking window (e.g., 30 days) |
| FR-01.8 | A shop owner shall be able to deactivate a barber seat without deleting historical data |

### FR-02: Client-Facing Booking

| ID | Requirement |
|----|-------------|
| FR-02.1 | Each barber shall have a unique public booking URL (e.g., `boothbook.com/[shop]/[barber]`) |
| FR-02.2 | The booking page shall display: barber photo, service menu with durations and prices, and available time slots |
| FR-02.3 | Clients shall book by entering only their name and phone number — no email, no password, no platform account |
| FR-02.4 | The system shall prevent double-booking of the same time slot |
| FR-02.5 | On repeat visit, the client's name shall be pre-filled based on phone number recognition |
| FR-02.6 | The booking page shall be fully functional on iOS Safari and Android Chrome without app installation |
| FR-02.7 | A shop-level booking page shall allow clients to browse all available barbers at a shop and select one |
| FR-02.8 | Clients shall be able to cancel their booking via a link in the confirmation SMS |

### FR-03: Walk-In Queue

| ID | Requirement |
|----|-------------|
| FR-03.1 | A shop owner or barber shall be able to activate the walk-in queue for their shop |
| FR-03.2 | The shop shall have a unique QR code that, when scanned, opens the walk-in join form |
| FR-03.3 | The walk-in join form shall capture: client name, requested service, and optionally preferred barber |
| FR-03.4 | Queue entries shall display in real time on the walk-in queue management view |
| FR-03.5 | A barber shall be able to claim the next walk-in from the queue |
| FR-03.6 | When a client advances to "next up," the system shall send an SMS: "You're up next at [Shop Name]" |
| FR-03.7 | A TV mode URL shall render a full-screen queue display showing: queue positions, estimated wait times, and barber names currently serving |
| FR-03.8 | TV mode shall auto-reconnect if the connection drops and shall never require manual refresh |
| FR-03.9 | Estimated wait time shall be calculated based on average service duration and number of clients ahead |
| FR-03.10 | A barber shall be able to mark a service as complete, which advances the queue automatically |

### FR-04: Appointment Reminders

| ID | Requirement |
|----|-------------|
| FR-04.1 | The system shall automatically send an SMS reminder 24 hours before each appointment |
| FR-04.2 | Barbers shall be able to optionally enable a 2-hour reminder in addition to the 24-hour reminder |
| FR-04.3 | Reminder SMS shall include: client name, barber name, service, appointment date/time, and shop name |
| FR-04.4 | All SMS shall include "Reply STOP to unsubscribe" per TCPA requirements |
| FR-04.5 | STOP replies shall immediately suppress all future SMS to that number and persist permanently |
| FR-04.6 | Reminder delivery failures shall be logged and surfaced to the barber dashboard |

### FR-05: Income Tracking & Daily Dashboard

| ID | Requirement |
|----|-------------|
| FR-05.1 | At checkout, a barber shall be able to log: service performed, service amount, and tip amount |
| FR-05.2 | The daily dashboard shall display: number of cuts, total service revenue, tip total, and combined total for the current day |
| FR-05.3 | The dashboard shall display weekly and monthly cumulative totals |
| FR-05.4 | For booth renter shops, each barber's income dashboard shall be private — not visible to the shop owner or other barbers |
| FR-05.5 | The shop owner's aggregate dashboard shall show total shop revenue (sum of all barbers) without individual barber breakdowns for booth renters |
| FR-05.6 | Employee barber income shall be visible to the shop owner in aggregate |

### FR-06: Client History & Notes

| ID | Requirement |
|----|-------------|
| FR-06.1 | Each barber shall have a private client list keyed to phone number |
| FR-06.2 | Each client record shall show full visit history: date, service, price, tip, and barber notes |
| FR-06.3 | A barber shall be able to add and edit free-text notes on any client record |
| FR-06.4 | When a client books, the barber's view of that booking shall include the client's previous notes if a matching phone number exists |
| FR-06.5 | Client records shall not be shared between barbers or accessible by the shop owner for booth renters |

### FR-07: Notifications & Communications

| ID | Requirement |
|----|-------------|
| FR-07.1 | Barbers shall receive an in-app and push notification when a new booking is made |
| FR-07.2 | Barbers shall receive a notification when assigned a walk-in client from the queue |
| FR-07.3 | Barbers shall receive a notification when a client cancels |
| FR-07.4 | Clients shall receive an SMS confirmation immediately after booking |
| FR-07.5 | All outbound SMS shall use a consistent sender name/number per shop |

### FR-08: Calendar & Scheduling

| ID | Requirement |
|----|-------------|
| FR-08.1 | Each barber shall have a day and week calendar view showing all appointments |
| FR-08.2 | Barbers shall be able to block time (personal time off, lunch, etc.) that removes those slots from public booking |
| FR-08.3 | Barbers shall be able to manually add appointments (for phone-in or in-person bookings) |
| FR-08.4 | Barbers shall be able to edit or cancel any appointment from their calendar |
| FR-08.5 | The shop owner shall have a multi-barber calendar view showing all chairs side-by-side |

### FR-09: Onboarding & Setup

| ID | Requirement |
|----|-------------|
| FR-09.1 | A new barber shall be able to complete full onboarding (profile, services, hours) in under 15 minutes |
| FR-09.2 | The system shall provide a shareable booking link immediately upon profile creation |
| FR-09.3 | The system shall surface a setup checklist until all required profile elements are complete |
| FR-09.4 | Walk-in queue setup shall be accessible via a single-click "activate queue" button on the shop dashboard |
| FR-09.5 | A guided first-time walkthrough shall be available (skippable) covering: booking link, calendar, and income dashboard |

---

## Non-Functional Requirements

### Performance

| Requirement | Target |
|-------------|--------|
| Booking page initial load (3G mobile) | < 2 seconds |
| Calendar and dashboard views | < 1.5 seconds |
| Walk-in queue real-time update latency | < 2 seconds from barber action to TV display |
| TV mode reconnect after disconnect | < 5 seconds automatic reconnect |
| SMS delivery time (confirmation) | < 30 seconds from booking submission |
| SMS delivery time (reminder) | Within ±5 minutes of scheduled time |

### Availability & Reliability

| Requirement | Target |
|-------------|--------|
| Overall uptime | 99.9% monthly (< 45 min downtime/month) |
| Peak hour availability (Sat 9am–6pm local) | 99.99% — no planned maintenance during these hours |
| Walk-in queue service availability | Independent failover from rest of app where possible |
| Data backup | Daily backups with < 24h RPO |

### Security

| Requirement | Target |
|-------------|--------|
| Client data isolation | Zero cross-barber data access; enforced at API layer |
| Booth renter privacy | Shop owner API calls must never return booth renter client records |
| Authentication | SMS OTP or magic link (no password required for barbers) |
| Session management | JWT with 30-day expiry; refresh tokens with 90-day sliding window |
| Phone number storage | Hashed for lookup, plaintext stored encrypted at rest |
| API rate limiting | 100 req/min per IP for public booking endpoints |
| HTTPS | All traffic; HSTS enforced |

### Scalability

| Requirement | Target |
|-------------|--------|
| Concurrent active shops | Support 10,000 shops at launch architecture |
| Walk-in queue concurrent connections per shop | Handle 100 concurrent TV + mobile connections per shop |
| SMS volume | Architecture to handle 100K SMS/day without throttling |
| Database | Multi-tenant row-level isolation; no shared-table cross-contamination |

### Accessibility

| Requirement | Target |
|-------------|--------|
| WCAG level | 2.1 AA for client-facing booking pages |
| Touch targets | Minimum 44×44pt on mobile |
| Color contrast | ≥ 4.5:1 for text on backgrounds |
| Screen reader compatibility | All form elements labeled; booking flow navigable without sight |

### Usability & Mobile

| Requirement | Target |
|-------------|--------|
| Primary platform | Progressive Web App (PWA) — installable on home screen |
| iOS Safari compatibility | Full functionality (booking, calendar, dashboard, queue) |
| Android Chrome compatibility | Full functionality |
| Offline graceful degradation | Calendar readable from cache; write operations queued when offline |
| App size | < 500KB initial bundle (critical for barbershops with limited data plans) |

### Compliance

| Requirement | Standard |
|-------------|---------|
| SMS opt-out | TCPA — STOP keyword handling, immediate suppression, permanent record |
| Data privacy | CCPA — user data deletion on request, no third-party data sales |
| Payment processing (Phase 2) | PCI DSS SAQ-A via Stripe Connect (card data never touches BoothBook servers) |
| SMS content | CAN-SPAM / CTIA — transactional only; no unsolicited marketing |

### Internationalization

For MVP: English-only, US phone number format (10-digit). Architecture should not hard-code assumptions that prevent future internationalization (no hardcoded US-only validation at data model layer).

---

## Technical Considerations

### Architecture Guidance for Implementation Team

**Multi-Tenant Model:** Each shop is a tenant. Each barber within a shop is a sub-tenant. Row-level security must enforce that booth renter data (clients, income, notes) is never accessible via shop owner API credentials.

**Real-Time Queue:** WebSocket preferred over polling for TV mode. Use a managed WebSocket service (e.g., Pusher, Ably, or Supabase Realtime) to avoid self-managing connection state at launch. Fallback to 5-second polling if WebSocket unavailable (graceful degradation, not hard failure).

**SMS Provider:** Twilio recommended. Budget: ~$0.0075/SMS × 2 reminders/appointment = ~$0.015/appointment. For 500 active shops × 50 appointments/week = 25,000 appointments/week = $375/week at full scale. Acceptable unit economics.

**PWA vs. Native:** Ship PWA at launch. Revisit native only if > 20% of support tickets reference PWA limitations on iOS.

**TV Mode:** Static-looking full-screen web page with WebSocket subscription. Must work on low-end smart TVs running Chrome or Firefox. No JavaScript frameworks that require modern V8 — use vanilla JS or minimal framework for the TV view.

**Booking Page Performance:** Client-facing booking pages must be server-side rendered or statically generated for the initial view. Slot availability can hydrate client-side after initial render. Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1.

---

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Fresha restores free tier / reverses commissions | Low | High | Trust is broken; switching cost is now emotional, not just financial. Community moat protects. |
| Squire launches affordable / LTD tier | Medium | High | Build community moat in barber FB groups first. Barbershop loyalty to community-born tools is strong. |
| GlossGenius adds walk-in queue | Medium | Medium | Be first and establish "the barbershop walk-in queue app" brand. Six-month timing advantage. |
| ValetVault expands to US | Low | Medium | Currently AU-focused and early stage. Monitor but not primary concern at launch. |
| SMS delivery costs spike | Low | Low | Twilio pricing stable; costs negligible at scale. Fallback provider available. |
| Real-time queue technical complexity | Low | Medium | ValetVault proved this is buildable. WebSocket + simple state machine is well-understood. |
| AppSumo refund rate > 10% | Medium | Medium | Requires polished onboarding. Prepare video walkthrough before AppSumo launch day. |
| Walk-in queue race conditions | Low | Medium | Define clear queue state machine with optimistic locking. Test concurrency before launch. |
| Booth renter data privacy breach | Low | Very High | Enforce at API layer (not just UI). Row-level security in DB. Penetration test before launch. |

---

## Appendix: Competitive Positioning Reference

| Competitor | Key Weakness | BoothBook Counter |
|-----------|-------------|-------------------|
| Fresha | 20% new-client commission; broken trust | 0% commission, no contracts |
| Mindbody | $99–$599/month + 12-month contracts | $99 LTD or $49/month, cancel anytime |
| Vagaro | Crashes during peak hours; 1-star BBB | Reliability-first engineering; uptime SLA |
| Mangomint | Explicitly excludes solos | Solo barber is first-class user |
| GlossGenius | No walk-in queue; requires client account | Native walk-in queue + phone-number-only booking |
| Boulevard | Mobile app crashes on iOS + Android | PWA mobile-first from day one |
| Booksy | 30% marketplace commission | 0% commission; clients belong to the barber |
| Square Appointments | No booth rental model; no walk-in queue | Booth-rental native + walk-in queue |

---

## Document Status

This PRD is complete and ready for:
- Architecture / technical design
- Epics and story creation
- Sprint planning
- Development implementation

**Next step in pipeline:** `run-automvp.sh --idea salon-barbershop --step architecture`

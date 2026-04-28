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
  - ideas/shortlisted/pet-grooming-business-software.md
  - _bmad-output/planning-artifacts/product-brief-pet-grooming.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: pet_services
  complexity: low_medium
  projectContext: greenfield
---

# Product Requirements Document — GroomBook

**Author:** Root  
**Date:** 2026-04-28  
**Product:** GroomBook — Pet Grooming Business Software  
**Status:** Complete

---

## Executive Summary

Independent pet groomers and small grooming salons operate daily with a fragmented tool stack: generic booking software that ignores pet-specific workflows, paper index cards for grooming history, personal phones for client texts, and no-show losses that drain $500–$1,500/month in recoverable revenue. No booking tool understands that a Bernese Mountain Dog full groom requires 3+ hours while a Chihuahua bath takes 45 minutes.

**GroomBook** is the first booking and client management platform built exclusively for independent pet groomers — breed-aware scheduling, unlimited SMS communication, no-show protection with deposit enforcement, and per-visit grooming history at $25/mo flat. The product replaces a 3–5 tool cobbled stack with one purpose-built system, priced for solos, designed for the 15-minute setup window a working groomer can spare.

**Target users:** Solo salon owners (1 chair), mobile van operators (1–2 vans), and small grooming shops (2–3 groomers). US-focused at launch; 145,000+ mobile groomers + tens of thousands of fixed salons in TAM.

**Business objective:** $15K MRR within 12 months via community-first go-to-market (Facebook groomer groups → AppSumo LTD launch → subscription growth).

**Positioning:** "The only booking tool built for groomers, priced for groomers." Competes on specificity vs. MoeGo ($49–$239/mo), DaySmart ($29–$249/mo), and Gingr ($105–$180/mo) — all of which bundle boarding, daycare, and training features a grooming-only business will never use.

### What Makes This Special

**Breed-aware scheduling intelligence** is the core differentiator — no competitor at any price point auto-allocates appointment slots based on breed, size, and service type. Every groomer using generic tools either manually sets custom durations per booking (slow) or accepts schedule blowouts when breed complexity varies (costly).

The second structural advantage is **unlimited SMS at every tier**. MoeGo's most-cited frustration is the 900 SMS/month cap on Growth ($99/mo) — active shops exhaust this in under three weeks. GroomBook includes unlimited SMS in $25/mo Solo, removing the capability ceiling that forces MoeGo customers into $159/mo tiers.

**No-show enforcement as a first-class workflow** — not a settings toggle — directly captures the #1 revenue leak groomers report. Deposit collection at booking, automatic card-on-file charge on cancellation within the policy window, and smart waitlist auto-fill are built into the core booking flow, not bolted on.

**Grooming-only scope discipline** — no boarding modules, no daycare scheduling, no training logs — produces a UI grooming-only operators can configure in under 15 minutes without onboarding assistance.

### Project Classification

- **Project Type:** SaaS B2B (multi-tenant, subscription + LTD, small business end-customers)
- **Domain:** Pet services / service business management
- **Complexity:** Low-medium (Stripe PCI-DSS scope for card-on-file; Twilio SMS integration; no healthcare/fintech compliance)
- **Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

Groomers succeed when GroomBook eliminates daily administrative friction and recovers revenue lost to no-shows — outcomes measurable within the first two weeks of use.

**Primary value indicators:**

- No-show rate drops from industry baseline (~10%) to <5% within 30 days and <3% within 90 days
- >90% of appointment confirmations, reminders, and pickup notifications sent via GroomBook automation (not manual texting) within first week
- >80% of users configure at least one breed-duration rule within the first 7 days
- Median time from account creation to first completed booking: <15 minutes
- Net Promoter Score >30 at Day 30

**Aha moment definition:** Day 7 — first Tuesday where the schedule doesn't blow out because breed-aware slots are accurate, and 15 "your dog is ready" texts are sent without the groomer touching their phone.

### Business Success

| Metric | 3-Month Target | 6-Month Target | 12-Month Target |
|--------|---------------|----------------|-----------------|
| Active beta users | 20 | — | — |
| AppSumo LTD buyers | — | 300 | 500 total |
| Monthly active businesses | 20 | 250 | 1,000 |
| MRR (subscription) | $0 | $2,500 | $15,000 |
| Monthly churn | <10% | <5% | <3% |
| NPS | >30 | >50 | >55 |
| Community-sourced signups | 80% | 65% | 60% |
| AppSumo reviews (first 30 days) | — | 50 | — |

**Go/no-go gate at Month 3:** 4+ of 7 MVP success criteria met → proceed to AppSumo launch. Fewer than 4 → diagnose retention before scaling acquisition.

**Go/no-go gate at Month 6:** MRR growing >15% month-over-month → accelerate; <150 AppSumo LTD buyers → reassess positioning.

### Technical Success

- Appointment booking flow completes in <3 seconds end-to-end (client submits → confirmation SMS received)
- SMS delivery rate >99% for all automated notification types
- Zero data loss for pet profiles and grooming history (durable storage, backups)
- Stripe webhook processing for deposit captures and cancellation charges: <10-second SLA
- System available 99.5% uptime during US business hours (8 AM–8 PM local time zones)

### Measurable Outcomes

**MVP validation gate (Month 3 — all 7 required for AppSumo go):**

1. 15 of 20 beta users active at Day 60 (75% 60-day retention)
2. 10 users report measurable no-show reduction or time saved (survey)
3. Median setup time <15 minutes (onboarding analytics)
4. >85% of beta users have SMS automation enabled and sending
5. >75% of beta users have at least one breed-duration rule configured
6. NPS >30 at Day 30
7. AppSumo partner team accepts listing application

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**Scope philosophy:** Deliver 5 capabilities flawlessly before shipping anything else. A groomer who uses all 5 features in the first week will not churn.

**Core MVP capabilities:**

1. **Breed-aware smart scheduling** — Admin configures breed/size category × service type → duration minutes; booking engine auto-blocks correct appointment duration; prevents back-to-back overrun; admin can override per booking; 350+ breed library pre-populated.

2. **Unlimited SMS with 3 auto-triggered templates** — Booking confirmation (immediate), 24-hour reminder (automated), "ready for pickup" (1-tap at checkout); dedicated business phone number via Twilio; two-way SMS thread; no per-message caps at any tier.

3. **Per-visit pet profiles with grooming history** — Profile: pet name, breed, weight, coat type, temperament flags, vaccination expiry dates, owner contact. Per-visit record: trim style, coat condition notes, service duration (scheduled vs. actual), groomer notes, incidents. Quick-view: last 3 visits shown before each appointment. Vaccination expiry alert 30 days in advance.

4. **Online client self-booking portal** — Public booking link (no client login required for first booking); respects breed-aware slot durations; prevents double-booking; deposit collection at booking time (Stripe); confirmation SMS sent immediately; mobile-friendly.

5. **No-show protection and deposit enforcement** — Configurable cancellation window (default: 24 hours); card-on-file via Stripe captured at booking; auto-charge triggered on cancellation inside window; manual compassionate override available; smart waitlist with SMS auto-notification on slot opening; admin can trigger no-show charge from appointment screen.

**UI/UX requirements for all MVP features:**
- Mobile-first (groomers work on phones all day)
- Setup wizard completes essential configuration in <15 minutes
- All core functions reachable within 2 taps from home screen
- Dark mode supported

**MVP out of scope (explicit deferrals):**

| Feature | Reason | Target Phase |
|---------|--------|-------------|
| Route optimization | Mobile tier only; significant complexity | Phase 2 (Month 4–5) |
| Offline mode | Requires PWA/native architecture decision | Phase 2 (Month 4–5) |
| Before/after photo gallery | Nice-to-have; groomers use Instagram today | Phase 2 (Month 3–4) |
| Commission/tip tracking | Team tier feature; add after solo PMF | Phase 2 (Month 5–6) |
| Financial reporting dashboard | Complex; start with simple CSV export | Phase 2 (Month 5–6) |
| AI receptionist / chat booking | Add after core product stable | Phase 3 (Month 7+) |
| Franchise / multi-location | Enterprise tier; solos first | Phase 3 (Month 10+) |
| Boarding / daycare / training | Permanently out of scope — this is the differentiation | Never |

### Growth Features (Phase 2 — Months 3–6)

- **Mobile groomer pack:** Route optimization (cluster appointments by geography); offline mode (cached pet profiles, mark-complete without signal); bulk rescheduling (mass client notification when van breaks down)
- **Communication and marketing layer:** Before/after photo gallery per visit; shareable photo link via SMS; one-tap Instagram share; review request automation post-appointment (Google/Yelp)
- **Team management:** Commission and tip tracking per groomer; groomer-level schedule and capacity; team performance reporting
- **Business intelligence:** Profitable breed/service analysis; daily/weekly revenue digest; no-show pattern reports by client; lifetime client value tracking

### Vision (Phase 3 — Months 7+)

- AI scheduling assistant suggesting optimal schedule based on breed mix and historical duration data
- Referral program (3 referrals = 1 free month)
- Grooming school partnerships (Nash Academy, Paragon) — default tool before any competitor enters
- NDGAA member discount program
- PetExec migration tool (PetExec being sunset by Togetherwork — thousands of customers need alternatives)
- Franchise management tier (2–5 locations)
- Pet insurance and vet record integrations

---

## User Journeys

### Journey 1: Maya — Solo Salon Owner (Primary Success Path)

**Persona:** 34-year-old licensed groomer, one-chair home-based salon, 15–18 appointments/week. Current stack: Square Appointments + paper pet cards + personal iPhone texts + Instagram.

**Opening scene:** Maya sees a trusted groomer in "Dog Groomers United" (80K members) post: "I switched to GroomBook two weeks ago and haven't missed a single pickup notification since. The no-show deposit charged automatically — I didn't even have to ask." 47 comments. Maya clicks the link.

**Discovery → Trial:**
- Lands on GroomBook landing page; reads in 3 minutes
- Starts free trial (no credit card required)
- Setup wizard launches: business name, hours, breed-duration rules (UI suggests defaults by breed size), SMS templates (confirmation, reminder, pickup)
- Embeds booking link in Instagram bio
- Imports 20 existing clients via CSV (5 minutes)
- **Time to first appointment booked: 12 minutes**

**Core usage — Week 1:**
- Books first week's appointments using breed-aware scheduler
- Sends confirmation SMS from admin panel — client replies "thanks!" — appears in conversation thread
- 24-hour reminders fire automatically; Maya doesn't touch her phone until pickup time

**Aha moment — Day 7:**
Tuesday doesn't blow out. The Bernese Mountain Dog appointment was auto-set to 2.5 hours; the Chihuahua was 45 minutes. Maya finishes on time, fits one extra appointment, earns $60 more, sends 15 automated pickup texts without touching her phone mid-groom. She earns back her first deposit from a client who books online with a $25 hold.

**Month 2:**
Smart waitlist auto-fills two cancellations per week. No-show rate drops from ~10% to 2%. Maya posts in Dog Groomers United: "This is the only tool I've tried that actually understands grooming."

**Journey requirements revealed:**
- Breed library with duration defaults
- Setup wizard with guided breed-duration configuration
- CSV client import
- One-tap SMS trigger at checkout
- Automated 24hr reminder scheduling
- Booking link embeddable anywhere
- Smart waitlist with auto-SMS on availability
- No-show deposit auto-charge

---

### Journey 2: Carlos — Mobile Van Groomer (Primary Success Path)

**Persona:** 29-year-old solo mobile groomer, one van, 5–7 appointments/day, suburban + rural routes. Current stack: Vagaro + Google Maps + WhatsApp + Notes app.

**Opening scene:** Carlos Googles "mobile dog groomer scheduling software route optimization" — GroomBook's Mobile tier landing page appears. The headline "Route-optimized scheduling for mobile groomers" is what he searched for.

**Discovery → Trial:**
- Signs up for Mobile tier free trial
- Enters service area zip codes
- Connects Google Maps for routing
- Configures daily schedule and van availability windows
- Adds 25 regular clients with addresses

**Aha moment — Week 1, first optimized route day:**
GroomBook clusters 7 appointments in a 12-mile radius instead of Carlos's usual scattered 18-mile route. He completes 7 appointments instead of 5, earns $130 more, drives 8 fewer miles, and arrives home 40 minutes earlier. "This pays for 2.5 months of GroomBook in one day."

**Edge case — offline operation:**
At stop #4 in a low-signal neighborhood, Carlos opens the GroomBook mobile app. The pet profile loads from cached data — he sees that Max had a bad mat behind his left ear last visit. He grooms successfully, marks the appointment complete offline; sync happens when he pulls out of the neighborhood.

**No-show enforcement:**
A client cancels 3 hours before the appointment (inside the 24-hour policy window). GroomBook automatically charges the card on file. Carlos receives a "Cancellation fee collected: $40" notification. The smart waitlist pings a nearby client who's been waiting — she books and Carlos fills the slot.

**Journey requirements revealed:**
- Route optimization with geographic clustering
- Offline mode with cached pet profiles
- Offline appointment completion with background sync
- Configurable cancellation window and auto-charge
- Smart waitlist with proximity-aware SMS offers
- Mobile-native app with no-signal resilience

---

### Journey 3: Dana — Small Salon Manager (MoeGo Migration Path)

**Persona:** 42-year-old co-owner of a 2-groomer salon + 1 part-time employee. 35–45 appointments/week. Has been on MoeGo Growth ($99/mo) for 18 months. Received a $147 bill last month due to SMS overage charges.

**Opening scene:** Dana posts in Dog Grooming Network (50K members): "Hit our MoeGo SMS cap again — month 3 in a row. Anyone switched to something cheaper that doesn't punish you for texting your own clients?" A GroomBook beta user replies with their experience. Dana clicks the link.

**Discovery → Migration decision:**
- Reads the pricing page: $39/mo Team vs. $99/mo MoeGo Growth
- Calculates: $60/mo savings + no SMS overage risk = $720–$900/year saved
- Starts trial; imports client data via CSV export from MoeGo

**Onboarding — Team setup:**
- Configures 3 groomer profiles with individual schedules
- Sets service permissions per groomer (some do cats, some don't)
- Configures shared SMS templates for the shop
- Embeds booking link in Google Business profile

**Core usage:**
- All 3 groomers book appointments on their individual calendars
- Clients receive SMS from the shop's dedicated number (not personal phones)
- Monthly SMS count: 340 messages — unlimited, no overage

**Success moment — Month 2:**
Dana's monthly software bill: $39 flat. No SMS overages. Pickup notifications for all 3 groomers send automatically. She posts in Dog Grooming Network: "Switched from MoeGo 6 weeks ago. Saving $60/mo and I don't have to watch the SMS counter anymore."

**Journey requirements revealed:**
- Multi-groomer calendar with individual schedules
- Per-groomer service capability configuration
- Shared shop SMS number with team-level templates
- CSV data import from MoeGo and DaySmart
- Team tier with named user accounts

---

### Journey 4: Admin Operations — Configuration and Daily Management

**Persona:** Any groomer (Maya, Carlos, or Dana) managing their GroomBook account settings.

**Key configuration journeys:**

**Breed-duration rule setup:**
Admin opens breed scheduler settings → browses pre-populated breed library → selects "Golden Doodle" → sets Full Groom = 150 min, Bath & Brush = 90 min → saves → immediately reflected in booking engine slot calculations.

**Cancellation policy setup:**
Admin sets cancellation window to 24 hours → deposit amount to $30 → "charge on late cancel: yes" → Stripe connection verified → policy text shown to clients at booking time.

**SMS template customization:**
Admin edits 24-hour reminder template: "Hi {client_first_name}, reminder that {pet_name}'s appointment is tomorrow at {time}. Reply CANCEL to cancel. — {business_name}" → saves → previews rendered SMS → activates.

**Waitlist management:**
Admin views waitlist for a date → sees 3 clients waiting → a cancellation opens a slot → GroomBook auto-pings the first matching client → client books online → admin receives "Waitlist slot filled" notification.

**Journey requirements revealed:**
- Breed library with search and custom-breed addition
- Service × breed duration rule configuration UI
- Stripe connection wizard for card-on-file setup
- SMS template editor with variable substitution preview
- Waitlist management view with auto-notification controls
- Business hours and groomer availability configuration

---

### Journey 5: Pet Parent — Indirect User (Receiving Client Experience)

**Persona:** Dog owner who books with a GroomBook-powered groomer.

**Booking flow (online self-booking):**
Client clicks groomer's Instagram bio link → selects pet (or creates new pet profile) → selects service → selects available date/time (breed-aware slots only shown) → adds card-on-file for deposit → receives confirmation SMS within 10 seconds: "Confirmed! Biscuit's Full Groom is Thursday at 10:00 AM with Maya's Grooming. Need to reschedule? Reply here."

**Day before:** Client receives SMS reminder at 3 PM: "Reminder: Biscuit's appointment is tomorrow at 10:00 AM. Need to cancel or reschedule? Reply here."

**Day of:** After grooming complete, client receives: "Biscuit is clean and ready for pickup! Come anytime. — Maya's Grooming"

**Experience quality:** Client interacts with GroomBook only through SMS — a channel with >95% open rate. The interaction is frictionless (no app download, no login). The communication reflects positively on the groomer's business professionalism.

**Journey requirements revealed:**
- No-login booking (email-based returning client lookup)
- Mobile-friendly booking portal (works on any phone browser)
- SMS-only client interaction (no email-only flows)
- Card-on-file capture at booking (Stripe Checkout)
- Two-way SMS thread (client replies reach groomer)

---

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Maya (solo) | Breed scheduler, automated SMS, pet history, no-show deposit, waitlist |
| Carlos (mobile) | Route optimization, offline mode, proximity waitlist, cancellation auto-charge |
| Dana (team) | Multi-groomer calendar, shared SMS number, team tier, data migration |
| Admin operations | Breed library config, Stripe setup, SMS templates, business hours |
| Pet parent | No-login booking, mobile portal, two-way SMS, deposit capture |

---

## SaaS B2B Specific Requirements

### Multi-Tenant Architecture

- Each grooming business is an isolated tenant with its own data, settings, and dedicated SMS number
- Tenant data must not be accessible across accounts under any conditions
- Tenant configuration: business name, logo, hours, cancellation policy, breed-duration rules, SMS templates, Stripe account linkage

### User Roles and Permissions

**Roles required at MVP:**

| Role | Permissions |
|------|-------------|
| Owner | Full access: billing, settings, all groomers, all appointments, all client data |
| Groomer | Own appointments, own client notes, SMS to own clients; no billing or settings |
| Receptionist (Team+ only) | Book and cancel appointments for all groomers; view all client data; no billing |

- Owner assigns roles to team members
- Role changes take effect on next login
- Groomer accounts cannot access owner billing or other groomers' financial data

### Subscription and Billing

- Monthly subscription tiers: Solo ($25), Team ($39), Mobile ($49)
- AppSumo LTD buyers: permanent access to Solo tier features; upgradeable to Team/Mobile with monthly delta billing
- Subscription managed via Stripe Billing (customer portal for self-service upgrade/downgrade/cancellation)
- Failed payment → 7-day grace period → account read-only → data retained 30 days before deletion warning
- Upgrade/downgrade takes effect at next billing cycle; no proration for downgrades

### Integration Requirements

**Twilio (SMS):**
- Each tenant gets a dedicated Twilio phone number (US local number matching business area code)
- Two-way SMS threading: inbound messages appear in groomer's conversation view
- SMS delivery receipts tracked per message
- Twilio number portability: if groomer already has a business number, port-in supported (Phase 2)

**Stripe (Payments):**
- Stripe Connect: each groomer has their own Stripe account linked (funds go directly to groomer, not GroomBook)
- Card-on-file: Stripe SetupIntent used at booking time (no charge until cancellation or no-show triggered)
- Deposit charges: Stripe PaymentIntent created at booking for deposit amount
- Cancellation auto-charge: triggered by GroomBook webhook when groomer's cancellation policy is violated
- Payouts: directly from Stripe to groomer's bank (GroomBook does not hold funds)

**Google Maps (Phase 2 — Mobile tier):**
- Route optimization uses Google Maps Distance Matrix API
- Appointment clustering algorithm groups by geography within groomer's service radius

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Breed-aware scheduling intelligence** is the category-creating innovation. No SaaS booking tool — in pet services or any adjacent vertical (salons, spas, medical) — auto-adjusts appointment duration based on a biological or dimensional classification of the service subject. Every generic tool assumes a fixed service duration or requires the groomer to manually set duration per booking.

GroomBook's breed × service → duration matrix is a knowledge graph that:
- Pre-populates with 350+ breed defaults derived from professional grooming time studies
- Learns from actual groomer overrides (actual vs. scheduled duration per breed per service)
- Improves scheduling accuracy over time as usage data accumulates

**No-show enforcement as a core workflow** challenges the assumption that deposit and cancellation policies are "settings" rather than primary booking flows. Every competitor treats no-show protection as an afterthought (a settings page toggle). GroomBook treats it as the second step of booking — deposit is collected at reservation time, and policy enforcement is automatic, not manual.

### Market Context & Competitive Landscape

- MoeGo, Gingr, DaySmart, Vagaro all use fixed-duration service types; breed is not a scheduling input in any of these tools
- No grooming-specific tool has launched on AppSumo (confirmed by AppSumo catalog review as of 2026-04)
- Breed-aware scheduling is validated as the #1 requested feature in Dog Groomers United and Mobile Dog Grooming Network Facebook groups

### Validation Approach

- Beta with 20 groomers: track % who configure breed-duration rules (success = >75%)
- Measure schedule overrun rate before vs. after breed-aware scheduling configured (target: >50% reduction in overruns)
- Track no-show rate before vs. after deposit enforcement enabled (target: >50% reduction)
- AppSumo launch validates willingness to pay: 300 LTD buyers at $69 = $20,700 upfront signal

### Risk Mitigation

- Breed library maintenance: use community reporting (groomers flag incorrect default durations); quarterly duration table reviews
- Duration override: groomer can override breed-suggested duration per booking without friction
- Stripe dependency: if Stripe account not connected, deposit enforcement is disabled but rest of product remains functional (graceful degradation)

---

## Functional Requirements

### Scheduling

- FR1: Groomers can configure appointment duration per breed category × service type combination
- FR2: Groomers can add custom breeds not in the pre-populated library
- FR3: The booking engine auto-assigns appointment duration based on the pet's breed and requested service
- FR4: Groomers can override auto-assigned duration for any individual appointment
- FR5: The booking engine prevents back-to-back appointments that exceed the groomer's available daily capacity
- FR6: Groomers can view and manage their daily appointment calendar in a timeline view
- FR7: Groomers can create appointments manually (admin-booked) in addition to online client bookings
- FR8: Groomers can block time on their calendar for breaks, closures, or personal time

### Pet Profile and Grooming History

- FR9: Groomers can create a pet profile capturing breed, weight, coat type, temperament flags, and vaccination expiry dates
- FR10: The system records grooming visit notes per appointment including trim style, coat condition, service duration, and groomer observations
- FR11: Groomers can view the last 3 grooming visits for any pet from the appointment screen before a groom begins
- FR12: The system alerts groomers when a pet's vaccination record expires within 30 days
- FR13: Pet profiles persist across all future appointments for the same pet
- FR14: Groomers can search client and pet records by name, breed, or phone number
- FR15: Groomers can associate multiple pets with a single client account

### SMS Communication

- FR16: The system sends a booking confirmation SMS to the client immediately upon appointment creation (admin-booked or online self-booked)
- FR17: The system sends a 24-hour reminder SMS to the client automatically before each scheduled appointment
- FR18: Groomers can send a "pet is ready for pickup" SMS from the appointment screen with one tap
- FR19: Clients can reply to any GroomBook SMS and their reply appears in a conversation thread visible to the groomer
- FR20: All outbound SMS originates from the grooming business's dedicated phone number (not a shared or generic number)
- FR21: Groomers can customize the content of each SMS template (confirmation, reminder, pickup) with business-specific text and merge fields
- FR22: The system sends unlimited SMS at every subscription tier with no per-message caps

### Online Client Booking

- FR23: Clients can book appointments through a public booking link without creating an account (email-based returning client lookup)
- FR24: The online booking portal displays only available time slots that respect breed-aware duration and groomer capacity
- FR25: Clients must provide a card for deposit at the time of online booking
- FR26: The booking portal is mobile-responsive and functional on any phone browser without app installation
- FR27: Groomers can share their booking link via URL (for use in Instagram bio, Google Business, website)
- FR28: The system prevents double-booking of any groomer's time slot

### No-Show Protection and Deposits

- FR29: Groomers can configure a cancellation policy window (in hours) before which clients can cancel without charge
- FR30: The system captures a card-on-file at booking time via Stripe without immediately charging
- FR31: The system automatically charges the card on file when a client cancels within the groomer's cancellation policy window
- FR32: Groomers can manually override an auto-charge (waive or reduce) for compassionate exceptions
- FR33: Clients can join a date-specific waitlist when no appointment slots are available
- FR34: The system automatically sends an SMS to the first matching waitlist client when a slot becomes available
- FR35: Groomers can trigger a no-show charge for the full service amount from the appointment screen for clients who did not show

### Team and Multi-Groomer Management

- FR36: Owners can create groomer accounts with individual login credentials and role-based permissions
- FR37: Each groomer manages their own appointment calendar and pet visit notes independently
- FR38: Owners can view all groomers' calendars in a unified shop-level view
- FR39: The booking portal allows clients to select a specific groomer or "any available groomer"
- FR40: Owners can assign service capabilities per groomer (e.g., groomer A handles cats; groomer B does not)

### Business Administration

- FR41: Owners can configure business hours, service offerings, and pricing for their shop
- FR42: Owners can import existing client and pet data via CSV upload
- FR43: Owners can export appointment and client data as CSV
- FR44: The system provides a basic daily and weekly appointment summary (count of appointments, estimated revenue)
- FR45: Owners can manage their subscription tier and billing through a self-service portal
- FR46: Owners can connect their Stripe account to receive deposit and no-show charge proceeds directly

---

## Non-Functional Requirements

### Performance

- Appointment booking flow (client submits online → confirmation SMS delivered): completes in <5 seconds end-to-end under normal load
- Admin appointment calendar loads in <2 seconds for any groomer with up to 100 daily appointments
- Pet profile and visit history retrieves in <1 second for any pet with up to 5 years of visit records
- SMS confirmation delivery: Twilio API call initiates within 3 seconds of booking confirmation; delivery to client device within Twilio's standard carrier SLA (~10 seconds)
- Stripe webhook processing (deposit capture, cancellation charge): <10-second SLA from event trigger to charge initiation

### Security

- All card data handled exclusively by Stripe; GroomBook stores only Stripe customer and payment method IDs (no raw card numbers ever stored or transmitted through GroomBook systems)
- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Tenant data is logically isolated; cross-tenant data access is architecturally prevented (separate DB schemas or row-level security)
- Groomer accounts protected by email + password authentication with enforced minimum password complexity
- All admin actions on financial data (charge, refund, waive) logged with actor, timestamp, and amount
- GDPR-compliant: client data deletion supported on request; data retention policy documented

### Scalability

- System supports 1,000 concurrent active business accounts at Month 12 target without degradation
- Appointment booking API handles 100 concurrent booking requests without queuing delays
- SMS throughput: supports 10,000 outbound SMS/day via Twilio (well above 1,000 businesses × ~5 SMS/business/day average)
- Database designed for horizontal read scaling; appointment queries optimize for groomer-day indexed lookups
- Architecture supports 10x user growth (to 10,000 businesses) through horizontal scaling without rearchitecture

### Reliability

- System availability: 99.5% uptime during US business hours (8 AM–8 PM, all US time zones, Monday–Saturday)
- Automated daily database backups with 30-day retention; point-in-time recovery supported
- Failed automated SMS (Twilio error) triggers retry within 60 seconds and logs failure for groomer visibility
- Failed Stripe charge (card declined, insufficient funds) surfaces in groomer's appointment screen with decline reason within 30 seconds

### Integration

- Stripe Connect: each tenant links their own Stripe account; GroomBook uses Stripe Connect Standard; payouts go directly to groomer
- Twilio: per-tenant dedicated phone numbers; GroomBook manages number provisioning and SMS routing
- Google Maps Distance Matrix API (Phase 2, Mobile tier): used for route optimization clustering; graceful fallback if API unavailable (manual address-based ordering)
- CSV import/export: supports standard UTF-8 CSV with documented column schema; import validates required fields and surfaces errors per row without failing the full import

---

*This PRD serves as the capability contract for GroomBook MVP and all subsequent design, architecture, and development work. All features implemented must trace to requirements documented here. Update this document when scope decisions change.*

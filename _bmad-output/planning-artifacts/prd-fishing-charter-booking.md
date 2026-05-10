---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/fishing-charter-booking.md
  - _bmad-output/planning-artifacts/product-brief-fishing-charter-booking.md
  - _bmad-output/planning-artifacts/research/market-fishing-charter-booking-research-2026-05-10.md
workflowType: prd
project_name: fishing-charter-booking
user_name: Root
date: 2026-05-10
classification:
  projectType: saas_b2b
  domain: booking_scheduling_crm
  industry: marine_outdoor_recreation
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — HookBook: Fishing Charter Booking & Client Management

**Author:** Root
**Date:** 2026-05-10
**Status:** Complete
**Version:** 1.0

---

## Executive Summary

HookBook is a fishing-first booking and client management platform built exclusively for independent fishing charter captains and small fleet operators. The US fishing charter industry generates ~$534M in annual revenue across 4,866+ registered businesses serving 57.9 million anglers (all-time record, 2024), yet no purpose-built software holds more than 5% market share. Every current option — FareHarbor (~6% per-booking fee), Checkfront ($99/month + 3% fees), GoFish.Rocks (no catch log or CRM), Vally (generic, not fishing-branded) — either charges too much, fits too poorly, or both.

HookBook replaces wrong-fit generic tools with a product that understands fishing-specific workflows: half-day/full-day/overnight trip types, tide-and-weather-based rescheduling, digital catch logs with shareable trip recaps, and fishing license reminders. The platform's flat-fee pricing ($49/month solo or $149 LTD; $99/month fleet or $299 LTD) eliminates the percentage-based fee model that costs an active captain $13,000–$18,000 annually on FareHarbor.

The core differentiator is the **catch log viral loop**: every trip ends with a branded, shareable recap — catch photos, species, weights — that clients post on social media, generating organic referrals at zero cost to the captain. No current competitor offers this. The primary distribution channel is peer recommendation through coastal captain Facebook groups and fishing forums — the highest-trust channel in a community where generic tools have burned captains repeatedly.

**North Star Metric:** Catch logs sent per month — a single number that captures captain engagement, client value delivery, and referral potential simultaneously.

### What Makes This Special

HookBook is the first fishing-first platform that combines three capabilities no competitor offers together: (1) a post-trip catch log that auto-generates a branded, shareable client recap — turning every successful trip into organic marketing; (2) weather/tide integration built into the core rescheduling workflow rather than as an afterthought; and (3) flat predictable pricing with no percentage-based fee extraction.

The product enters the market with a quantifiable financial pitch: "Stop paying FareHarbor $18,000/year." A fee calculator on the landing page makes the savings concrete and personal. The fishing-first identity — purpose-built UX, fishing-native language — creates immediate trust with a community that has been failed by generic tour booking software for years.

## Project Classification

- **Project Type:** Vertical SaaS B2B (small business)
- **Domain:** Booking/scheduling + post-service client engagement CRM
- **Industry:** Marine & outdoor recreation (fishing charter)
- **Complexity:** Medium — payment processing (Stripe Connect), third-party APIs (weather/tides, email/SMS), shareable link generation, mobile-optimized UX for field use
- **Project Context:** Greenfield — no existing codebase; purpose-built for this market

---

## Success Criteria

### User Success

Captains succeed when HookBook captures bookings they would have missed, eliminates fee bleed, and turns happy clients into repeat business and referrals — with less administrative effort than their previous solution.

| User Outcome | Leading Indicator | Target |
|---|---|---|
| Capture missed bookings | Online bookings completed without captain interaction | ≥40% of bookings self-serve within 60 days of onboarding |
| Reduce admin time | Time spent on rescheduling per cancelled trip | ≤15 min (vs. 45 min current average) |
| Trip recap viral loop fires | % of sent recaps where client opens + shares | ≥35% share rate within 90 days of launch |
| Clients re-book | Re-booking rate from trip recap "Book Again" CTA | ≥15% of recap recipients book again within 12 months |
| Captain recommends peers | NPS | ≥55 at 90 days; ≥65 at 6 months |

**Captain success definition:** After 60 days, captain has received at least one booking through the online widget, sent at least three trip recaps, and is paying less in total platform cost than their previous solution.

**Client success definition:** Client books a trip in under 5 minutes, receives a confirmation with trip details and weather forecast, receives a signed waiver link, gets reminders before the trip, and receives a branded trip recap email after — all without needing to call the captain.

### Business Success

**30-Day Target (Beta)**
- 10 active beta captains across ≥3 geographies (Gulf Coast, Southeast, Northeast/Great Lakes)
- All core MVP features validated in real-world booking conditions
- ≥2 captain testimonials with quantified outcomes ("saved X hours", "got Y referrals from recap share")

**90-Day Target (Launch)**
- 50–150 paying captains (monthly subscribers + LTD buyers combined)
- $3K–$8K MRR from monthly subscribers
- 100–300 LTD units sold at $149 = $15K–$45K launch revenue
- Page 1 SEO ranking for "FareHarbor alternative fishing charter" in ≥3 geographic variants

**6-Month Target (Growth)**
- 250–500 active captains
- $10K–$20K MRR
- Catch log viral loop driving ≥20% of new signups (referral attribution)
- Monthly churn ≤3%

**12-Month Target (Scale)**
- $250K–$500K ARR
- Captain referral program driving ≥30% of new customer acquisition

### Technical Success

- Zero double-booking events attributable to HookBook calendar management
- Zero lost deposits or failed Stripe payouts during beta
- Zero lost waiver records during beta period
- Booking widget loads in ≤2 seconds on mobile (3G equivalent)
- Trip recap email delivered within 60 seconds of captain sending
- System uptime ≥99.5% during prime booking hours (6 AM – 9 PM captain local time)

### Measurable Outcomes

| KPI | Method | 90-Day Target | 6-Month Target |
|---|---|---|---|
| New captain signups/month | CRM / Stripe | 30–50 | 75–100 |
| MRR | Stripe | $3K–$8K | $10K–$20K |
| LTD units sold | Stripe | 100–300 | 500–1,000 |
| Monthly churn | Stripe cancellations | <7% | <3% |
| Catch logs per captain/month | App analytics | ≥5 | ≥8 |
| Trip recap share rate | Email tracking + share clicks | ≥25% | ≥35% |
| Organic referral rate | Signup source tracking | ≥15% of new signups | ≥25% |
| Avg onboarding to first booking | App analytics | ≤4 hours | ≤2 hours |
| NPS (60-day trigger) | In-app survey | ≥50 | ≥65 |
| Fee savings vs. FareHarbor | Survey + calculator data | $3K–$8K/year avg | $5K–$15K/year avg |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP is a 3–4 week build delivering the minimum feature set to validate core value and activate the catch log viral loop. Every MVP feature is essential; nothing is included speculatively.

**MVP Capability Set:**
1. Online booking page with embeddable widget (trip types, headcount pricing, real-time availability)
2. Stripe Connect deposit collection (captain receives payouts directly)
3. Digital waiver with e-signature (stored against booking record)
4. Catch log with photo upload (mobile-optimized, post-trip captain interface)
5. Trip recap email auto-generation with shareable link and "Book Again" CTA
6. Weather display on booking confirmation (7-day forecast + tide chart via Open-Meteo/NOAA)
7. SMS + email reminder sequences (configurable: 7 days, 48 hours, day-of)
8. Calendar management dashboard (conflict detection, manual block-off)

**MVP Success Gate:** MVP is ready to scale when ALL of the following are true:
- ≥50 completed trips booked through HookBook (proves booking flow end-to-end)
- ≥60% of completed trips have a catch log entry (proves captain post-trip adoption)
- ≥25% of sent recaps result in social share or click-through (proves viral loop)
- Zero reported double-bookings, deposit failures, or waiver loss events (30-day beta)
- ≥8 of 10 beta captains still active at end of 30-day beta
- NPS ≥40 from beta captains
- ≥1 new captain signup attributed to beta captain word-of-mouth

### Growth Features (Post-MVP)

- **Weather-aware rescheduling automation:** Smart rescheduling suggestions + auto-drafted client emails when forecast triggers high-risk window. Captain approves before sending. (V2)
- **Fishing license verification / digital check-in:** Guests log license numbers pre-trip; captain verifies at dock via app. (V2)
- **Repeat client CRM:** Full client history (all trips, catches, preferences), seasonal re-engagement campaigns, birthday trip reminders. (V2)
- **Two-way Google Calendar / iCal sync:** Bi-directional sync with captain's existing calendar. MVP exports only. (V2)
- **Equipment maintenance tracker:** USCG compliance reminders, boat service logs, safety equipment expiry tracking. (V2)
- **Multi-boat fleet management:** Multi-captain scheduling, crew assignment, revenue split tracking, fleet-level analytics. (V2)
- **AppSumo LTD listing integration:** AppSumo marketplace listing setup post-beta. (Launch phase)
- **Captain referral program:** Tracked referral codes, commission/credit structure for word-of-mouth. (V2)

### Vision (Future)

- **Native mobile app** (iOS + Android) for captains fully in the field
- **AI catch identification:** Photo → species + size estimate via computer vision
- **Catch data intelligence:** Aggregate anonymized catch data by location, species, season; "Best Conditions" reports for trip planning
- **Marine insurance referral program:** Captains need USCG-compliant insurance; HookBook earns referral fees
- **Marketplace / public captain directory:** Consumer-facing "find a charter" search — future product direction, not MVP
- **Vertical expansion:** Kayak fishing guides, fly fishing guides, hunting outfitters, whale watching, dive charters — same core platform with category-specific vocabulary

---

## User Journeys

### Journey 1: Marcus — The FareHarbor Refugee (Primary User, Success Path)

Marcus, 42, runs offshore fishing charters out of Destin, Florida. 140 trips/year at $1,600 average ($224,000 gross). He's paying ~$13,200/year in FareHarbor fees and resents every invoice.

**Opening Scene:** Marcus sees his annual FareHarbor fee summary. He posts in the Gulf Coast Charter Captains Facebook group: "Anyone else feel like FareHarbor is getting too expensive? What else are people using?" Another captain replies with a link to HookBook.

**Discovery:** Marcus lands on HookBook's comparison page. A fee calculator shows his specific numbers: "At your volume, you're paying $13,200/year to FareHarbor. HookBook costs $588/year." He watches a 3-minute demo video showing the booking flow and the trip recap email. He reads two Florida captain testimonials.

**Trial Signup:** Marcus clicks "Start Free Trial." A setup wizard walks him through configuring 3 trip types (half-day inshore, full-day offshore, overnight grouper trip) with pricing, duration, and capacity for each. He connects his Stripe account, pastes the booking widget embed code into his Squarespace site. Total setup time: 2 hours.

**First Booking:** A client books a full-day offshore trip and pays a $500 deposit through HookBook while Marcus is on the water. Marcus gets an SMS notification. He's impressed — he would have missed that call.

**Aha Moment:** After a successful trip, Marcus opens HookBook on his phone. He taps "Add Catch Log" and fills in: 6 red snapper, 2 amberjack, 4 photos of anglers with their catches. He taps "Send Trip Recap." All 6 clients receive a branded email with their photos, a shareable link, and a "Book Your Next Trip" button. Two clients share on Facebook within the hour. One of their friends books a trip the following week through the HookBook widget.

**Commitment:** Marcus upgrades to the paid plan at end of trial. He tells two other captains in his Facebook group. His total platform cost drops from $13,200 to $588/year — a $12,612 saving in year one.

**Requirements Revealed:** Booking widget, Stripe Connect deposits, catch log with photos, trip recap email with shareable link and re-booking CTA, SMS notifications for new bookings, Facebook group referral tracking.

---

### Journey 2: Tyler — The Ambitious Young Captain (Primary User, Growth Path)

Tyler, 31, runs inshore striper and bluefish charters out of Cape Cod. 85 trips/year at $550 average ($47,000 gross). He manages bookings through FishingBooker (which he resents), a personal Calendly link, and a Google Sheet.

**Opening Scene:** Tyler's client books a trip on FishingBooker. FishingBooker takes 20% commission. Tyler thinks: "That's $110 I just lost. Again." He searches YouTube for "charter booking software review" and finds a HookBook walkthrough.

**Discovery:** Tyler watches the catch log demo and immediately sees it. His clients are 35–55-year-old Boston professionals. When someone catches a 40-inch striper, they want to post it. He's been manually texting photos — but there's no system. The $149 LTD pricing means no off-season subscription anxiety (New England fishing season is May–October).

**Purchase:** Tyler buys the $149 LTD immediately. No trial needed — the price removes risk. He sets up his booking page in one afternoon, links his Instagram in his bio to the HookBook booking URL, and removes himself from FishingBooker.

**Catch Log Moment:** Client Sarah catches a 42-inch striper — her biggest ever. Tyler photos it immediately. That evening, Sarah receives a trip recap email with her photo, the fish stats, and a shareable link. She posts it on Instagram. Three of her friends comment "I need to do this." One DMs Tyler directly through his Instagram bio link and books a trip the next day.

**6-Month Reality:** Over his season, Tyler runs 85 trips, sends 85 catch log recaps, and attributes 14 new bookings directly to recap shares — $7,700 in revenue he wouldn't have captured through FishingBooker.

**Requirements Revealed:** LTD payment option, standalone hosted booking page (for captains without a website), trip recap shareable link with photo gallery, "Book Again" CTA in recap email, Instagram-compatible share format.

---

### Journey 3: Gary — The Tech-Reluctant Old Salt (Primary User, Adoption Path)

Gary, 58, walleye charter captain, Lake Erie, Port Clinton, Ohio. 22 years of experience. Books via phone + paper calendar. Has missed 3 bookings this season because he was on the water and couldn't answer.

**Opening Scene:** Gary's marina neighbor Mike sets up HookBook and mentions it at the dock: "Gary, I got two bookings last Tuesday while I was out. Phone rang, voicemail, they just booked themselves online." Gary is skeptical but curious.

**Discovery:** Mike shows Gary the setup wizard on his phone. It's simpler than FareHarbor (which Gary tried and abandoned). Gary asks: "Can my daughter help me set it up?" Yes — the platform supports multiple admin logins.

**Setup:** Gary's daughter sets up his booking page in 90 minutes one Sunday afternoon. Two trip types (half-day walleye, full-day walleye), $450 flat rate, 6-person max. She embeds the booking widget on his basic website and sends him the link to share in his Facebook group.

**First Week:** Gary gets 3 online bookings while he's on the water. He calls them back when he gets to the dock — not to confirm the booking (it's already confirmed and deposited), but just to chat. His clients are impressed he has "a real booking system now."

**Catch Log Discovery:** After a great walleye morning, Gary's daughter shows him the catch log. He types in the numbers, uploads two photos. When his client Don gets the trip recap email, Don forwards it to his entire fishing club with the caption "Book with Gary, he's legit." Two club members book that week.

**Requirements Revealed:** Mobile-optimized booking widget, simple 2-step trip type configuration, multi-user admin access (captain + spouse/family member), catch log with minimal friction (minimal data entry), trip recap email that looks professional even from a low-tech captain.

---

### Journey 4: Karen — The Captain's Admin Partner (Secondary User, Management Path)

Karen, 52, manages the administrative side of her husband's 4-boat Gulf Coast charter fleet. She handles client communication, scheduling, and payments from the house while he's on the water.

**Opening Scene:** Karen opens HookBook on her desktop Monday morning. She sees 5 bookings came in over the weekend for the 4 different boats. She checks each booking — client name, trip type, deposit collected, waiver signed. Everything is already handled.

**Rescheduling Event:** A tropical storm watch is posted for Thursday–Friday. Karen goes to the calendar view and sees 3 bookings affected. She marks those dates as weather-hold, and HookBook generates draft rescheduling emails for each client with suggested alternative dates from the open availability. She reviews and sends all three in 8 minutes. Previously this took 90+ minutes of individual texts and calls.

**Catch Log Coordination:** Her husband sends catch log data from the boat via his phone. Karen reviews the trip recap draft for one booking — a family's first offshore trip, photos of two kids with their catches. She approves and sends. The parents share it on Facebook before they even get back to the dock.

**Requirements Revealed:** Multi-boat fleet calendar view (single dashboard, multiple resources), weather-event bulk block capability, draft rescheduling email templates, catch log review/approve flow for fleet operators, desktop-optimized admin interface.

---

### Journey 5: Alex — The First-Time Charter Client (End User, Booking Path)

Alex, 38, a software engineer from Atlanta, wants to book a deep-sea fishing trip as a Father's Day gift for his dad. He's never chartered a fishing boat.

**Opening Scene:** Alex Googles "offshore fishing charter Destin FL." He clicks through to Marcus's website, sees the "Book Now" button. The HookBook booking widget loads in under 2 seconds.

**Booking Flow:** Alex selects "Full-Day Offshore" ($1,600 for up to 6 people), picks a date from the available calendar, enters guest count (4 people), name, email, and phone. He sees a clear breakdown: $400 deposit today, $1,200 balance due on the day. He pays the $400 with his credit card. Total time: 4 minutes.

**Confirmation Experience:** Immediately after payment, Alex receives a confirmation email: trip details, Marcus's contact info, what to bring, a 7-day weather forecast for Destin harbor, and a tide chart for their trip date. He also receives a link to sign the digital liability waiver — he signs it on his phone in 2 minutes. His dad signs his portion.

**Pre-Trip Reminders:** 7 days before: "Your trip is coming up! Here's what to bring, and a reminder to have your Florida fishing licenses ready." 48 hours before: weather update + check-in details. Morning of: Marcus's cell number and meeting point.

**Post-Trip Recap:** That evening, Alex's family receives a branded trip recap email: their 4 names, the date, the weather stats, and 6 photos Marcus uploaded (two of Alex's dad holding a grouper, everyone on deck). A shareable link and "Book Another Trip" button. Alex forwards it to his entire family text thread.

**Requirements Revealed:** Mobile-optimized booking widget, real-time availability display, Stripe card payment for deposit, instant email confirmation, 7-day weather forecast + tide data in confirmation, digital waiver link, pre-trip reminder sequence, post-trip branded recap email, shareable link landing page.

### Journey Requirements Summary

| Capability Revealed | Journeys |
|---|---|
| Embeddable booking widget with trip types and real-time availability | 1, 2, 3, 5 |
| Stripe Connect deposit + balance tracking | 1, 2, 3, 5 |
| Digital waiver with e-signature | 1, 5 |
| Mobile-optimized catch log with photo upload | 1, 2, 3, 4 |
| Branded trip recap email with shareable link | 1, 2, 3, 4, 5 |
| "Book Again" CTA in recap | 1, 2, 5 |
| 7-day weather forecast + tide chart in booking confirmation | 5 |
| Configurable SMS + email reminder sequences | 5 |
| Calendar management with conflict detection | 1, 2, 3, 4 |
| Multi-admin access (captain + family/staff) | 3, 4 |
| Standalone hosted booking page | 2, 3 |
| Weather-event bulk block + rescheduling templates | 4 |
| Multi-boat fleet dashboard | 4 |
| Mobile-first design for field use | 1, 2, 3 |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Catch Log Viral Loop** — The mechanism of turning a post-trip operational task (logging the catch) into an automated organic marketing event is genuinely novel in the booking software category. No competitor — generic or fishing-specific — has connected catch data → branded email → shareable client link → social share → referral attribution. The loop works because:
- Clients are emotionally primed post-trip (they just caught a fish; they want to share it)
- The social content (fish photo + stats) is inherently shareable in fishing communities
- The branded recap contains the captain's booking link, making conversion frictionless

**2. Weather-as-a-Workflow (not a widget)** — Most booking tools bolt on a weather widget as a UI element. HookBook integrates weather/tide data into the rescheduling workflow: the system surfaces forecast data, identifies at-risk bookings, and pre-drafts client communication — making weather management a guided workflow, not a manual process. This is a distinct approach from anything in the current market.

### Market Context & Competitive Landscape

No current competitor offers the catch log viral loop. FareHarbor, Checkfront, Rezdy, and Vally are all generic tour booking platforms with no fishing-specific post-trip features. GoFish.Rocks is the closest fishing-specific product but has no catch log, no trip recap, no CRM, and no weather workflow integration. FishingBooker is a marketplace/lead-gen platform, not booking software.

The innovation is not "nobody has built booking software before" — it's "nobody has built the post-trip layer that converts a successful trip into self-referral marketing." This is an execution gap in an established market, not a market creation problem.

### Validation Approach

- **Catch log adoption rate:** If captains don't fill in catch logs, the viral loop doesn't fire. Target: ≥60% of completed trips have a catch log entry within 30-day beta.
- **Share rate:** If clients don't click the "share" link in the trip recap email, the loop is theoretical. Target: ≥25% of sent recaps result in a share or click-through.
- **Referral attribution:** New captain signups that cite "another captain" or arrive via a trip recap link. Target: ≥1 organic referral from beta captains within 30 days.

### Risk Mitigation

- **Catch log friction risk:** If the catch log is too complex (too many required fields, slow photo upload), captains skip it on the dock. Mitigation: MVP catch log requires only species + count + photo; everything else is optional. Designed for 90-second completion on a wet phone.
- **Recap email open rate risk:** If clients don't open the recap email, the viral loop never starts. Mitigation: subject line A/B testing; send timing optimization (evening vs. next morning). Captain controls send timing.
- **Competitor copy risk:** FareHarbor or Rezdy could add a catch log feature. Mitigation: fishing-first identity and community distribution provide moat; a bolt-on catch log from a generic tool won't feel authentic to the fishing captain community.

---

## SaaS B2B Specific Requirements

### Project Type Overview

HookBook is a vertical SaaS B2B product targeting micro-businesses (solo captains) and small businesses (2–5 boat fleets). The primary technical challenges are: multi-tenant data isolation (each captain's bookings, clients, and catch data are private), Stripe Connect for marketplace-style payments (platform never holds funds), mobile-first UX for field use, and third-party API reliability (weather, email/SMS delivery).

### Multi-Tenancy Model

- Each captain account is an isolated tenant with their own: trip types, booking calendar, client list, catch log records, waiver template, notification templates, Stripe Connect account
- No cross-tenant data visibility (captain A cannot see captain B's clients or bookings)
- Future fleet tier: one tenant = one fleet; multiple captain sub-accounts under one fleet tenant

### Permission Model

| Role | Capabilities |
|---|---|
| Captain (Owner) | Full access: booking management, catch logs, client data, settings, billing |
| Admin (e.g., spouse/staff) | Booking management, catch log review, calendar management; no billing access |
| Client (Guest) | Booking creation, waiver signing, booking status view only (via link, no login required) |

### Subscription & Billing Tiers

| Plan | Monthly | LTD | Boats Included | Overage |
|---|---|---|---|---|
| Solo Captain | $49/mo | $149 one-time | 1 | +$29/mo per additional boat |
| Small Fleet | $99/mo | $299 one-time | Up to 5 | +$25/mo per additional boat |
| Optional: Deposit Processing | 1.5% of deposit amount | — | All plans | Captain elects opt-in |

Stripe is the payment processor for both captain subscriptions and guest deposits. For guest deposits, Stripe Connect (Express accounts) routes funds directly to captain's bank account; HookBook collects 1.5% processing fee only if captain elects deposit processing through the platform.

### Integration Architecture

| Integration | Purpose | Priority |
|---|---|---|
| Stripe Connect | Captain payouts from guest deposits; captain subscription billing | MVP |
| Open-Meteo or NOAA API | 7-day weather forecast + tide data for captain's home port | MVP |
| SendGrid (or equivalent) | Trip recap emails, booking confirmations, reminder sequences | MVP |
| Twilio (or equivalent) | SMS reminders to guests (new booking notifications to captain) | MVP |
| DocuSign / HelloSign (or equivalent) | Digital waiver e-signature and storage | MVP |
| Google Calendar (export only) | iCal/ICS export for captain's personal calendar | MVP |
| Google Calendar (two-way sync) | Bi-directional calendar sync | V2 |
| FishingBooker API (if available) | Import existing bookings for migration | V2 |

### Technical Architecture Considerations

- **Frontend:** Mobile-responsive web app (React or similar); embeddable booking widget as a `<script>` tag that loads in an iframe — must not conflict with captain's existing website CSS
- **Backend:** REST API; multi-tenant data model; captain-scoped authentication (email + password + optional 2FA)
- **Media storage:** Photo uploads for catch logs and captain profile — cloud object storage (S3 or equivalent); images resized/compressed client-side before upload for mobile performance
- **Shareable recap links:** Publicly accessible URL (no login required) with captain branding; SEO-indexed with captain name, location, date, and species in meta tags
- **Booking widget isolation:** Widget CSS scoped to avoid conflicts with host page styles; tested on Squarespace, WordPress, Wix, and Weebly

### Implementation Considerations

- **Data model core entities:** Captain (tenant), TripType, Booking, Guest, CatchLog, CatchEntry, Photo, Waiver, Reminder, TrialRecap
- **Booking state machine:** `draft → confirmed (deposit paid) → waiver_signed → reminder_sent → completed → recap_sent`
- **Availability engine:** Captain-configured availability windows + existing booking load = real-time availability grid for widget
- **Weather cache:** Cache weather/tide API responses per port location for 1 hour to avoid API rate limits and reduce latency

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum set of capabilities that replaces a captain's current patchwork (phone + spreadsheet + FareHarbor or equivalent) with a cohesive, fishing-specific tool that captures bookings, collects deposits, and sends trip recaps. The MVP is proven when a captain can run a complete booking lifecycle — from client discovery to post-trip recap — entirely within HookBook.

**Resource Requirements:** 1 full-stack developer (3–4 weeks), 1 designer (1 week for UI/UX), 1 product lead (ongoing). No mobile native dev required for MVP (mobile-responsive web app).

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Captain onboards (creates account, sets up trip types, connects Stripe)
- Client books online (selects trip, pays deposit, signs waiver, receives confirmation)
- Captain manages calendar (views bookings, blocks dates, avoids double-booking)
- Captain sends trip recap (enters catch log after trip, auto-generates and sends recap email)
- Client receives and shares recap (opens branded email, shares link on social)

**Must-Have Capabilities:**
- Account creation + setup wizard (trip type configuration)
- Stripe Connect onboarding for captain
- Embeddable booking widget (trip type select, date/time, headcount, deposit payment)
- Standalone hosted booking page (for captains without a website)
- Real-time availability calendar
- Double-booking prevention
- Email + SMS booking confirmation to captain and guest
- Digital waiver upload + e-signature
- Catch log entry (species, count, optional weight, photos)
- Trip recap auto-generation + send (branded email, shareable link, "Book Again" CTA)
- 7-day weather forecast + tide chart in booking confirmation email
- Configurable reminder sequences (7-day, 48-hour, day-of)
- Calendar dashboard with block-off date management
- Basic analytics: bookings per month, recap open rates, click-through rates

### Post-MVP Features (Phase 2)

- Weather-aware rescheduling workflow (forecast monitoring → at-risk booking detection → auto-drafted rescheduling email)
- Fishing license verification and digital check-in
- Two-way Google Calendar sync
- Repeat client CRM with seasonal re-engagement campaigns
- Equipment maintenance + USCG compliance tracker
- Multi-boat fleet management (multi-captain accounts)
- Captain referral program with tracked codes

### Phase 3 (Expansion)

- Native iOS + Android apps
- AI catch photo identification (species + size estimate)
- Anonymized catch data insights and "Best Conditions" reports
- Marine insurance referral integration
- Vertical expansion to adjacent outdoor guide markets (kayak fishing, fly fishing, hunting outfitters)
- Public captain directory / consumer booking marketplace

### Risk Mitigation Strategy

**Technical Risks:** Stripe Connect Express onboarding complexity is the highest technical risk in MVP. Mitigation: Use Stripe's hosted onboarding flow rather than custom UI; test with real captain accounts in beta before launch.

**Market Risks:** Biggest risk is captains adopting the booking widget but not filling catch logs post-trip (breaking the viral loop). Mitigation: In-app push/SMS prompt to captain 1 hour after trip end time; catch log interface designed for 90-second completion on a phone with wet hands.

**Resource Risks:** If MVP scope must be cut, the non-negotiable core is: booking widget + Stripe deposit + trip recap email. The catch log and weather display can be simplified but not removed — they are the product differentiators.

---

## Functional Requirements

### Booking Management

- FR1: Captain can configure multiple trip types with individual pricing, duration, headcount capacity, and deposit amount
- FR2: Captain can configure a standalone hosted booking page accessible via a unique URL
- FR3: Captain can embed a booking widget on any external website via a `<script>` embed code
- FR4: Guest can browse available trip dates and times on the booking widget without logging in
- FR5: Guest can select a trip type, date, headcount, and pay a deposit to complete a booking
- FR6: System prevents guests from booking dates that are already fully booked or manually blocked
- FR7: Captain can view all upcoming bookings in a calendar dashboard
- FR8: Captain can manually block dates and time slots to prevent bookings
- FR9: Captain can edit, reschedule, or cancel existing bookings with client notification
- FR10: Captain can view booking details including guest name, contact info, trip type, deposit status, and waiver status

### Payment Processing

- FR11: Captain can connect their Stripe account to receive guest deposit payouts directly
- FR12: Guest can pay a configurable deposit amount via credit/debit card at time of booking
- FR13: System records and displays deposit payment status on each booking
- FR14: Captain can configure whether to collect full payment at booking or deposit-only
- FR15: Captain receives automatic Stripe payout for collected deposits according to Stripe's standard schedule

### Digital Waivers

- FR16: Captain can upload a liability waiver document or use a default template
- FR17: Guest receives a waiver signing link via email after completing a booking
- FR18: Guest can sign the waiver digitally (e-signature) without creating an account
- FR19: System stores the signed waiver PDF against the booking record
- FR20: Captain can download signed waivers for any booking

### Catch Log

- FR21: Captain can create a catch log entry for any completed booking
- FR22: Captain can record catch data: species name, count, and optional weight per species
- FR23: Captain can upload photos associated with a catch log entry (up to 20 photos per trip)
- FR24: System associates catch log data with the specific booking, guest(s), and trip type
- FR25: Captain can view catch log history for any past booking

### Trip Recap & Client Sharing

- FR26: Captain can generate a branded trip recap for any booking with a completed catch log
- FR27: System auto-populates the recap with: captain name/logo, trip date and type, catch log data, uploaded photos
- FR28: Captain can choose to send the recap immediately or schedule it for the following morning
- FR29: Guest receives the trip recap via email with a shareable link to a public recap page
- FR30: Public trip recap page displays trip summary, catch data, and photos with captain branding (no login required)
- FR31: Trip recap email includes a "Book Your Next Trip" CTA linked to the captain's booking page
- FR32: Captain can view per-recap analytics: email open status, link click-through count

### Weather & Conditions Display

- FR33: System displays a 7-day weather forecast for the captain's home port on booking confirmation emails and pages
- FR34: System displays tide chart data for the trip date on booking confirmation
- FR35: Captain can configure their home port location for weather/tide data sourcing

### Client Communication & Reminders

- FR36: Guest receives an email and/or SMS confirmation immediately after completing a booking
- FR37: Captain receives an SMS and email notification when a new booking is created
- FR38: System sends configurable reminder sequences to guests before their trip (default: 7 days, 48 hours, day-of)
- FR39: Captain can customize reminder message content for each reminder touchpoint
- FR40: Reminder messages include: trip details, what to bring, fishing license reminder, and captain contact info

### Account & Settings

- FR41: Captain can create an account and complete an onboarding setup wizard to configure their first trip type
- FR42: Captain can add an admin user (e.g., spouse or staff member) with access to bookings and calendar but not billing
- FR43: Captain can upload a logo and business name that appears on booking pages, recap emails, and the public recap page
- FR44: Captain can view a summary dashboard showing: upcoming bookings, recent catch logs, recap send/open counts, and revenue collected

### Analytics & Reporting

- FR45: Captain can view monthly booking counts and revenue collected through the platform
- FR46: Captain can view catch log completion rate (% of completed trips with catch logs)
- FR47: Captain can view trip recap engagement metrics: open rate, share rate, re-booking click rate
- FR48: System tracks signup source for new captain accounts to support referral attribution

---

## Non-Functional Requirements

### Performance

- Booking widget loads in ≤2 seconds on a mobile connection (equivalent to 3G/LTE conditions) — critical because guests are booking on phones, often on the go
- Catch log photo upload accepts images and begins upload within 1 second of selection; upload of a 5MB photo completes in ≤10 seconds on LTE
- Trip recap email delivered to guest inbox within 60 seconds of captain sending
- Calendar availability grid responds to date selection in ≤500ms (no full page reload)
- Captain dashboard loads in ≤3 seconds on first visit; ≤1 second on repeat visits (cached)

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- Stripe handles all card data; HookBook stores no raw card numbers (PCI DSS compliance via Stripe)
- Captain accounts protected by email + password authentication; optional two-factor authentication
- Multi-tenant isolation enforced at the API layer — no cross-tenant data exposure
- Signed waiver PDFs stored with access-controlled URLs (non-guessable, expiring links for downloads)
- Guest booking confirmation and waiver links are access-controlled by unique token (not guessable sequential IDs)
- GDPR-compliant data deletion: captain can request full account + client data deletion; data purged within 30 days

### Reliability

- System uptime ≥99.5% during peak booking hours (6 AM – 9 PM captain local time)
- Booking widget must degrade gracefully if backend is temporarily unavailable (show "Contact captain directly" message rather than blank page or error)
- Email delivery failure triggers automatic retry (3 attempts, 5-minute intervals) before alerting captain
- Stripe webhook failures trigger retry with idempotency keys to prevent duplicate bookings or charges

### Scalability

- Platform must support 500 concurrent active captain accounts at 6-month mark without architectural changes
- Booking widget embed must handle 1,000 concurrent guest sessions across all captain accounts without degradation
- Photo storage scales without pre-provisioning — cloud object storage with no capacity ceiling

### Integration Reliability

- Weather API unavailability must not block booking completion — degrade gracefully (show "Weather data temporarily unavailable" in confirmation email rather than failing the booking)
- Stripe outage detection: if Stripe is unreachable, booking flow shows clear error with retry option rather than silent failure
- SMS delivery failure falls back to email delivery with no action required from captain

### Accessibility

- Booking widget meets WCAG 2.1 AA standards — guests may include older anglers or those with visual impairments
- All form inputs labeled correctly for screen readers
- Color contrast ratios meet AA minimums throughout the booking flow
- Keyboard-navigable booking flow (no mouse-only interactions)

---

*PRD for HookBook — Fishing Charter Booking & Client Management*
*Date: 2026-05-10 | Author: Root | Status: Complete*
*Input: fishing-charter-booking shortlisted idea, market research (2026-05-10), product brief (2026-05-10)*
*Next Steps: Architecture design, Epics & Stories breakdown, Sprint Planning*

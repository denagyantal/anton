---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/rv-park-campground-reservation-software.md
  - _bmad-output/planning-artifacts/market-rv-park-campground.md
workflowType: 'product-brief'
lastStep: 6
date: '2026-11-16'
author: Root
---

# Product Brief: ParkSimple — RV Park & Campground Reservation Software

---

## Executive Summary

ParkSimple is flat-rate cloud reservation software designed specifically for independent RV parks and campgrounds under 100 sites. It replaces phone call bookings, paper ledgers, and legacy Windows desktop software with a modern web-based platform featuring a visual site-grid calendar, online booking pages, SMS-first guest communication, and Stripe payment processing — all for a flat $79/month with no per-booking fees.

The US campground industry generates $10.7 billion in annual revenue across 16,685 businesses. Despite this scale, the majority of independent operators — typically retirees managing 10–80 site facilities — remain on 20-year-old desktop software or paper logs while paying $400–$799/month in per-booking fees to enterprise platforms designed for large resorts. ParkSimple captures this gap with a pricing model that saves operators $720/month vs. the nearest enterprise alternative (CampLife at $3.50/booking) while delivering the cloud access, online booking, and SMS communication that legacy tools simply cannot provide.

The strategy pairs a compelling LTD offer ($99 for up to 30 sites on AppSumo) with direct distribution through ARVC (the National Association of RV Parks and Campgrounds, 3,000+ member parks) and Facebook's "RV Park and Campground Owners" groups. The closest flat-rate competitor (Reservety, $59/mo) exists but lacks SMS, an AppSumo presence, and any distribution partnerships — the window to establish category leadership is open now.

**Core thesis:** Independent RV park operators will pay for Campground Master's pricing model (one-time or flat) with cloud-era convenience. ParkSimple is cloud Campground Master with online booking, SMS, and no per-booking fees.

---

## Core Vision

### Problem Statement

Independent RV park operators — typically retirees or small families running 10–80 site facilities — spend 2–4 hours per day answering phone calls for reservations that software could handle automatically. When they explore software alternatives, they face a binary choice: expensive enterprise platforms that charge per-booking fees (which consume $400–$799/month for a park with 200 reservations) or a 20-year-old Windows desktop application (Campground Master) that has no online booking, no mobile access, and no SMS integration. Neither option is acceptable for a small operator trying to run a profitable seasonal business without a large staff.

The acute failure mode that drives adoption is the double-booking: when reservations arrive via phone, email, walk-in, and OTA simultaneously with no central system, Site 14 gets booked twice over the same holiday weekend. This is not a theoretical risk — it is a recurring operational nightmare cited across RV park owner forums, review sites, and industry association discussions.

### Problem Impact

- **Time drain:** 2–4 hours/day answering booking calls = 60–120 hours/month of owner time consumed by tasks software handles in seconds
- **Revenue leakage:** A park with 200 reservations/month on CampLife pays $799/month vs. $79/month on ParkSimple — $720/month of pure margin erosion
- **Guest dissatisfaction:** RV travelers (median age 55+) prefer SMS confirmation; email confirmations from manual systems frequently go to spam or are never read, leading to no-shows and confusion at check-in
- **Operational risk:** Double-bookings damage owner relationships, require refunds, and generate negative reviews that are disproportionately visible in a small-community market like campground hosting
- **Competitive disadvantage:** Parks without online booking lose reservations to Hipcamp and Outdoorsy listings that offer instant online booking; the operator who can't be booked online is invisible to 30% of modern RV travelers

### Why Existing Solutions Fall Short

| Solution | Core Limitation |
|----------|-----------------|
| **Campspot** ($2/booking + 12.5% marketplace) | Built for 100+ site resorts; "unpredictable pricing" is a named top complaint; per-booking fees make it painful for high-volume small parks |
| **CampLife** ($99/mo + $3.50/booking) | $799/month for a 200-reservation park; SMS is a paid add-on; onboarding complexity assumes tech-comfortable operators |
| **RoverPass** ($99/mo + $3.50/booking) | VC-backed but same per-booking model; $4.5M raised validates the category but not the pricing approach for small parks |
| **Campground Master** ($795 one-time) | Beloved for no ongoing fees (4.7/5 on Capterra, 146 reviews) but Windows desktop only; no online booking; no SMS; no mobile access; no Stripe; no cloud sync |
| **Reservety** ($59/mo flat) | Closest direct competitor; flat rate is correct but no SMS, no AppSumo presence, no ARVC distribution, limited brand awareness |

The root failure across all options is structural: enterprise tools optimized their pricing for large resorts (per-booking fees become irrelevant at large scale but punishing at small scale), while the one affordable tool (Campground Master) was built in an era before smartphones and online booking. No solution offers the specific combination of **flat monthly pricing + SMS-first communication + visual site grid + cloud access + non-tech operator UX**.

### Proposed Solution

ParkSimple is a web-based reservation management platform that solves the independent RV park operator's core problem: getting reservations managed, guests communicated with, and payments collected without 2–4 hours of phone time per day — at a flat monthly price with zero per-booking fees.

**The platform delivers four things an independent operator needs and nothing else:**

1. **Visual site-grid reservation calendar** — A drag-and-drop grid showing available, occupied, and reserved sites by date. The operator sees their entire park's status at a glance; no more paper ledgers or spreadsheets.

2. **Online booking page** — A standalone URL (e.g., `parkname.parksimple.com`) or embeddable widget that guests use to book their site, pay a deposit, and receive confirmation — without calling the owner. This is the core phone-call eliminator.

3. **SMS-first guest communication** — Booking confirmations, check-in instructions (including gate codes), and checkout reminders delivered via text message. No email dependency. Designed for the 55+ RV traveler who prefers SMS over email apps.

4. **Stripe payment processing** — Deposits and final payments collected at booking via Stripe. No per-booking platform fee beyond standard Stripe card processing (2.9% + $0.30). The operator keeps their revenue.

**Pricing:** $79/month flat — unlimited sites, unlimited bookings, unlimited guests. $99 LTD for up to 30 sites (AppSumo launch). $199 LTD for up to 100 sites.

### Key Differentiators

1. **No per-booking fees** — This is the single most powerful differentiator. At 200 reservations/month, ParkSimple costs $720/month less than CampLife or RoverPass. The ROI conversation writes itself in one sentence: "How many reservations do you take per month?"

2. **SMS-first guest UX** — Every competitor sends email confirmations as default; some offer SMS as a paid add-on. ParkSimple treats SMS as the primary communication channel and email as optional. This is not a minor feature — it is the difference between guests who show up prepared and guests who call asking for directions they already received.

3. **Non-tech operator UX** — ParkSimple targets a 65-year-old retiree who has never used SaaS software, not a property management professional. The 30-minute setup goal is not marketing language — it is a design constraint that shapes every product decision. If a first-time user can't complete onboarding in 30 minutes via Loom video without a phone call, the product has failed.

4. **Cloud Campground Master** — Campground Master users are the most receptive migration audience. They already proved they will pay for campground software (even desktop-only). The ParkSimple pitch to Campground Master users is: "You love no monthly fees — here's cloud Campground Master with online booking for $99 lifetime." No abstraction required.

5. **ARVC distribution** — No flat-rate cloud tool has a distribution partnership with ARVC (National Association of RV Parks and Campgrounds). The operator who reads ARVC's newsletter or attends their annual conference is exactly ParkSimple's target customer. First to establish this relationship owns the category for years.

---

## Target Users

### Primary Users

**Persona 1: "Retirement Park Barbara" — The Small-Park Retiree Owner**

Barbara, 64, bought a 42-site RV park in Texas six years ago as a retirement investment with her husband. She manages reservations herself, primarily by phone, with a printed calendar on the wall behind her desk. She tried Campspot after a friend recommended it, looked at the per-booking fees, and went back to her phone. She uses Campground Master on a Windows laptop for the winter months when she has time, but it doesn't connect to anything online. During peak season (May–September), she spends roughly 3 hours every morning answering reservation calls and 1 additional hour sending email confirmations that guests half the time call back to confirm they received.

**Pain points:** Lost reservations when she's on the property and can't answer the phone. Confusion when guests don't see confirmation emails. The double-booking of Site 7 last Memorial Day that required a refund and a very uncomfortable conversation. The sense that she's leaving money on the table every day her park isn't bookable at 11pm when RV travelers are planning their next trip.

**What success looks like:** Barbara wakes up and checks her phone to find 3 new bookings from overnight — all paid deposits, all with confirmation texts sent automatically. She answers zero reservation calls during morning rounds. When guests arrive, they already have their gate code. She evaluates ParkSimple by asking her nephew (who "knows computers") to watch the setup video — if he can't get her set up in 30 minutes, it's not happening.

**Persona 2: "Growing Campground Mike" — The Small Operator Scaling Up**

Mike, 51, runs a 78-site campground in Florida that he built up from 20 sites over 15 years. He's on RoverPass now and is frustrated with the per-booking fee math — at his reservation volume, he's paying $370/month in fees before even getting to the base subscription. He's tech-comfortable enough to have set up his own website (on Squarespace) and knows what an API is. He wants dynamic pricing (charge more on weekends, offer length-of-stay discounts) and is starting to explore Hipcamp integration to capture overflow bookings.

**Pain points:** Per-booking fees that scale linearly with his success. No easy way to set seasonal rates or length-of-stay discounts in RoverPass. The lack of a good mobile-responsive guest booking experience that doesn't embarrass him compared to KOA's booking flow.

**What success looks like:** A tool that costs $79/month regardless of how many reservations he takes, with simple dynamic pricing rules (Friday/Saturday = $10 premium, 7+ nights = 10% discount) built in, and an embeddable booking widget that works well on mobile.

### Secondary Users

**RV Park Guests (55+ Traveler Segment)**

The end-users who interact with ParkSimple through the guest-facing booking page and SMS communication. This group: prefers text to email (confirmed by RV park owner forums), typically books 2–8 weeks in advance for specific dates, frequently travels as a couple or small family group, and values clarity over cleverness in confirmation messages. The booking experience must work flawlessly on a smartphone without requiring an app download or account creation.

**Hipcamp / OTA Travelers (Phase 2)**

After OTA integration is built, Hipcamp and Harvest Hosts guests who discover a park through those platforms and get routed into ParkSimple for reservation management. These users never interact with ParkSimple directly but their bookings must land in the ParkSimple calendar without double-booking risk.

**Park Staff**

Some parks have 1–2 seasonal employees who help with check-in. These users need read access to the site grid and the ability to mark a guest as checked in. They should not need training beyond "here's the URL and your login." A mobile-first view of today's arrivals and departures is their core need.

### User Journey

**Barbara's Discovery to Value Journey:**

1. **Discovery (Off-Season, October):** Barbara posts in her state camping association's Facebook group asking if anyone has found "something like Campground Master but I can use on my iPad." Two members mention they switched to ParkSimple. She looks it up and sees a $99 lifetime deal mentioned in the ARVC newsletter.

2. **Evaluation (October, same week):** She watches the 8-minute Loom setup video. The first screen shows something that looks like her paper calendar. She clicks the AppSumo deal page. $99 one-time, unlimited bookings, SMS confirmations. She buys it.

3. **Onboarding (November, off-season):** She sets up her 42-site grid by dragging site markers onto a simple park map template. She adds her rates. She tests the booking page by making a fake reservation from her phone. She receives a text message confirmation. She calls her nephew. He says "this is pretty simple, Aunt Barb."

4. **First Value (November, same day):** She texts the booking page link to a regular guest. The guest books Site 12 for the week of Thanksgiving without calling. Barbara sees the booking appear in her site grid in real time. She pumps her fist.

5. **Peak Season Validation (May):** Memorial Day weekend, zero double bookings. Phone call volume down 70% from prior year. She answers calls only for guests who want to ask questions (not to book). She posts in the Facebook group: "If anyone is still on paper, I switched to ParkSimple last winter and it's been life-changing."

6. **Long-Term Retention (Month 18+):** Barbara renews nothing — she's on the LTD. She upgrades to the 100-site plan ($199 LTD) when she adds 15 sites to the park. She becomes a recurring word-of-mouth referrer at her state association's spring meeting.

---

## Success Metrics

### User Success Metrics

**Setup & Onboarding**
- Average time to complete initial park setup: **< 30 minutes** (target from Loom video + self-serve)
- Percentage of users who complete onboarding without contacting support: **> 70%**
- Time from signup to first real booking received: **< 7 days**

**Core Value Delivery**
- Reduction in inbound phone reservation calls reported by operators: **> 60% within 30 days**
- Double-booking incidents per customer per season: **0** (the most important quality metric)
- Guest SMS open rate for booking confirmations: **> 85%** (vs. ~20% for email in this demographic)

**Retention Signal**
- 90-day retention after AppSumo purchase: **> 80%**
- Monthly active usage rate (defined as: operator logs in and views site grid at least 4 days/week during peak season): **> 75%**
- NPS: **> 40** at 90 days, **> 50** at 12 months

### Business Objectives

**Phase 1 — Validation (Months 1–6)**
- AppSumo launch generates 500+ LTD sales at $99 = **$50K in launch revenue**
- Beta cohort of 20 parks with NPS > 40 and zero double-booking incidents
- At least 3 unprompted testimonials from ARVC member parks by month 6
- AppSumo review rating: **> 4.5/5 stars**

**Phase 2 — MRR Establishment (Months 6–12)**
- Convert 100+ LTD buyers to MRR ($79/mo) for parks exceeding LTD site limit
- ARVC newsletter sponsorship drives measurable signup spike (> 50 signups per newsletter send)
- MRR reaches **$15,000** by month 12 (combined 100+ MRR customers + LTD upsells to 100-site plan)

**Phase 3 — Scale (Year 2)**
- 500 paying customers (MRR + active LTD)
- MRR: **$40,000**
- Monthly churn: **< 2%** (driven by mid-season switching cost and genuine product love)
- Support ticket volume: **< 1 ticket/customer/month** (indicator of product quality)

**Long-Term (Year 3)**
- 2,000+ customers across MRR and LTD plans
- MRR: **$160,000**
- Market position: Recognized ARVC preferred vendor for small-park operators
- Brand recognition in "RV Park and Campground Owners" Facebook groups (organic mentions in 20%+ of software threads)

### Key Performance Indicators

| KPI | Target (Month 6) | Target (Month 12) | Target (Year 3) |
|-----|-----------------|-------------------|-----------------|
| Total customers (active) | 500 (AppSumo) | 700 | 2,000 |
| MRR | $3,000 | $15,000 | $160,000 |
| Monthly churn | < 5% | < 3% | < 2% |
| NPS | > 40 | > 50 | > 60 |
| Avg setup time | < 60 min | < 30 min | < 30 min |
| Support tickets/customer/mo | < 2 | < 1 | < 0.5 |
| Phone call reduction reported | 60% | 70% | 70%+ |
| Double-booking incidents | 0 | 0 | 0 |

**Leading Indicators (track weekly):**
- Booking volume per park per week (indicates active usage and value delivery)
- SMS message delivery rate (Twilio; must stay > 95%)
- New booking page views (indicates operators are sharing their booking URL with guests)
- AppSumo review rate and rating (the primary conversion lever for the LTD launch)

---

## MVP Scope

### Core Features

The MVP is defined by a single constraint: it must eliminate the daily phone-call booking burden for a 42-site RV park operated by a non-technical retiree. Everything in scope must directly serve that goal. Everything that doesn't must wait.

**1. Visual Site-Grid Reservation Calendar**
- Grid view showing all sites as rows, dates as columns
- Color-coded status per site-day: Available (green), Reserved (yellow), Occupied (blue), Blocked (gray)
- Click on a site-day to view or create a reservation
- Drag reservation blocks to modify dates
- MVP simplification: Grid is built from a simple site list (numbered sites); drag-and-drop visual park map is Phase 2

**2. Online Booking Page**
- Standalone URL (`{parkname}.parksimple.com`) that guests can access directly
- Shows available sites, dates, and pricing
- Guest selects site, dates, enters contact info, pays deposit via Stripe
- Mobile-responsive; must work without an app download
- Embeddable widget version (iframe) for parks with existing websites

**3. SMS-First Guest Communication (Twilio)**
- Automatic SMS upon booking confirmation: dates, site number, check-in instructions, gate code
- Automated check-in reminder SMS (day before arrival): gate code, check-in time, what to expect
- Automatic checkout reminder SMS (morning of checkout): checkout time, any balance due
- No email dependency; email is optional and secondary

**4. Stripe Payment Processing**
- Deposit collection at booking (configurable: $25, $50, or percentage)
- Balance collection at check-in or at checkout (operator's choice)
- Refund processing via dashboard (full or partial)
- No per-booking fee beyond Stripe's standard 2.9% + $0.30
- Stripe Connect for marketplace-style onboarding (operator connects their own Stripe account)

**5. Basic Rate Management**
- Per-site nightly rate configuration
- Weekend vs. weekday rate differentiation (Friday/Saturday premium)
- Seasonal date ranges (summer rates, shoulder rates, off-season rates)
- Length-of-stay discount rules (e.g., 7+ nights = 10% off)
- Holiday pricing overrides (block of dates at custom rate)

**6. Check-In / Check-Out Management**
- Operator marks guest as checked in (auto-updates site grid to Occupied)
- Operator marks guest as checked out (auto-releases site for future bookings)
- Today's arrivals and departures view (mobile-friendly)
- Automated gate code delivery via SMS at check-in confirmation

### Out of Scope for MVP

The following are explicitly deferred to Phase 2 or Phase 3. These are valuable features — they are not being cut because they don't matter, but because including them in MVP would extend the build timeline from 6 weeks to 4+ months and dilute focus from the core value delivery.

**Deferred to Phase 2 (Month 6–12):**
- OTA integrations (Hipcamp, Harvest Hosts, Outdoorsy, RoverPass marketplace)
- Drag-and-drop visual park map builder (interactive site layout editor)
- Maintenance request logging per site
- Seasonal site availability management (close a section for winter)
- Multi-park dashboard for operators with 2–5 locations
- Advanced reporting and revenue analytics
- Guest loyalty or returning guest management

**Deferred to Phase 3 (Year 2+):**
- AI-assisted dynamic pricing recommendations
- AI phone/chat booking assistant widget
- Review generation post-checkout (automated Google/TripAdvisor prompts)
- API access for third-party integrations
- Multi-currency / international market support
- Online store (firewood, hookup upgrades, activity booking)

**Explicitly Never (unless market demands it):**
- Full property management system (accounting, payroll, staff scheduling) — this is Campspot territory, not ParkSimple
- Multi-park enterprise features with complex permissions — this is CampLife territory

### MVP Success Criteria

The MVP is validated when the following conditions are met:

1. **20 beta parks** complete onboarding and use the platform through one full booking cycle (at least 10 reservations each)
2. **NPS > 40** from beta cohort at 30-day check-in
3. **Zero double-booking incidents** across all beta parks during the beta period
4. **Average setup time < 60 minutes** (tracking from account creation to first live booking page URL)
5. **AppSumo application approved** — this is a qualitative validation signal (AppSumo's team validates product quality before listing)
6. **At least 3 unprompted testimonials** that specifically mention: (a) no per-booking fees, (b) SMS confirmations, or (c) ease of setup for non-tech operators

**Go/No-Go Decision Point:** If beta NPS is below 30 or more than 2 double-booking incidents occur, the team pauses AppSumo launch and investigates before proceeding.

### Future Vision

**Phase 2 — The Complete Small-Park OS (Month 6–18)**

ParkSimple expands from reservation management to a lightweight operations platform for independent parks. OTA integrations (Hipcamp, Harvest Hosts, Outdoorsy) route bookings into the ParkSimple calendar automatically, eliminating the double-booking risk of running multiple channels. The drag-and-drop park map builder replaces the list-based MVP grid with a spatial visual that matches how operators think about their property. The multi-park dashboard serves the growing segment of operators running 2–5 properties (a natural upsell from $79/mo to $149/mo or higher).

**Phase 3 — Intelligent Park Management (Year 2+)**

Dynamic pricing becomes AI-driven: ParkSimple analyzes historical occupancy, upcoming local events, and competitor availability to suggest optimal rates in real time. An AI booking assistant handles phone/chat inquiries and converts them into online bookings, extending the automation to operators who still receive calls from technophobic guests. Automated post-checkout SMS prompts generate Google and TripAdvisor reviews, helping small parks compete with KOA's review volume advantage.

**Adjacent Vertical Expansion**

The core ParkSimple platform (site grid + booking page + SMS + payments) maps almost exactly to two adjacent verticals with identical buyer profiles and identical software gaps:

- **Marina slip management** — 12,000+ US marinas, most running paper reservations; site grid becomes slip grid; identical retiree/small-family operator demographic
- **Barn rental / equestrian facility management** — horse stall and arena booking with the same non-tech operator demographic

Both adjacencies require minimal new product development (the data model is nearly identical) and represent TAM expansion without core platform risk.

**Long-Term Platform Play**

As independent RV parks consolidate (private equity roll-ups of independent parks are accelerating, mirroring what happened in car washes and self-storage), ParkSimple's installed base of loyal operators becomes an acquisition channel for regional chains. The platform that serves independent operators becomes the platform that chains use to manage newly acquired properties — without the per-booking fee overhead that makes enterprise tools expensive at scale.

---

*Product Brief completed: 2026-11-16*
*Next step: `create-prd` — Build detailed Product Requirements Document using this brief as foundation*

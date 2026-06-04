---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/mobile-mechanic-software.md
  - _bmad-output/planning-artifacts/market-research-mobile-mechanic-software.md
workflowType: product-brief
lastStep: 6
project_name: mobile-mechanic-software
research_type: product-brief
user_name: Root
date: 2026-06-04
---

# Product Brief: Mobile Mechanic Software (Route-Aware, On-Site First)

---

## Executive Summary

Independent mobile mechanics — technicians who operate from a van or trailer rather than a fixed service bay — are one of the fastest-growing segments in auto service, yet they are forced to stitch together three to four unrelated tools to run their business: Google Maps for routing, Square for payment, text messages for scheduling, and paper or a notes app for inspections. Every piece of auto repair shop management software on the market (Tekmetric, Shopmonkey, AutoLeap at $179–$224/month) was built for a shop with service bays, a parts room, a waiting area, and multiple advisors — none of which exist on a van.

This product brief defines **VanOps** (working title): a purpose-built, mobile-native SaaS for solo independent mobile mechanics that eliminates the patchwork by delivering exactly the four features they need — and none of the shop overhead they don't. The killer differentiator is **route-clustered daily scheduling**: grouping residential jobs by geographic proximity and showing the mechanic an optimized drive order for the day, like Uber route batching for a one-person auto service business. Combined with Stripe card pre-authorization at booking, mobile digital inspection reports with customer-shareable links, and a vehicle CRM with full service history — all at $49/month — VanOps is the first tool built for the van, not the bay.

The market is validated: ~150,000 independent mobile mechanics in the US, a $4.3–$9.2B services market growing at 9–15% annually, and zero purpose-built SaaS occupying the $40–$60/month tier with these features in combination. The closest competitor (Trackara Pro at $49.99/month) lacks route clustering and card pre-authorization. No auto repair or mobile mechanic software currently lists on AppSumo — VanOps has a clear first-mover path to category ownership through an LTD launch.

**Target**: $10K MRR within 12 months. Path: community beta (Reddit/Facebook) → AppSumo $59 LTD → $49/month SaaS → parts ordering upsell.

---

## Core Vision

### Problem Statement

Independent mobile mechanics cannot find software that matches how they actually work. Every tool built for auto repair — from enterprise platforms like Mitchell1 to modern SaaS like Tekmetric and AutoLeap — is architected around a fixed-location service bay: lift scheduling, parts room inventory, waiting room management, multi-advisor workflows, and labor guide lookups for bay-based jobs. Mobile mechanics who operate from a van or trailer have zero use for any of these features, yet pay $179–$224/month to access the scheduling, invoicing, and inspection functions buried beneath them.

The result is a forced patchwork: mechanics use Google Maps for routing (no awareness of job clustering), Square or PayPal for payment (no automotive context, no pre-authorization), text messages for scheduling (no booking portal, no automated reminders), and paper or a phone's notes app for inspection (no photo capture workflow, no customer-shareable report). Each tool works in isolation; none of them talk to each other, and none of them know what a VIN is.

The specific pain is sharpest in three places:

1. **Route inefficiency**: A mechanic with 6 jobs scattered across a metro area may drive 90+ minutes between stops when the same jobs grouped by proximity could take 30. No tool exists to cluster residential jobs and present the day's schedule in drive-optimized order.
2. **Payment friction**: Mechanics regularly chase customers for payment after the job is done. No affordable mobile-native tool pre-authorizes the customer's card at booking and auto-charges on job close.
3. **Professionalism gap**: Customers increasingly expect a digital inspection report — photos of the issue, work performed, before-and-after documentation — as a shareable link they can review on their phone. Shop platforms ($179+/month) have this; nothing in the $40–$60/month tier does.

### Problem Impact

The daily operational cost of this patchwork is material:

- **Time lost to inefficient routing**: 30–60 minutes per day in excess drive time between jobs, compounding to 7–15 hours per month of unbillable time
- **Revenue lost to no-shows and payment chasing**: Mechanics report regular occurrences of customers not home at appointment time and after-the-fact payment disputes; pre-authorization eliminates both
- **IRS deduction leakage**: The IRS mileage deduction rate of $0.70/mile means a mechanic driving 500 miles/month in unbillable routing loses $4,200/year in deductible mileage they aren't tracking
- **Customer trust gap**: Mechanics who cannot produce a digital inspection report lose competitive ground to shops and YourMechanic-style marketplace mechanics who can

Emotionally, mobile mechanics chose independence specifically to escape the administrative overhead of a shop environment — and yet the software market forces them back into a shop mental model or into a fragmented manual workflow that consumes the same administrative time they were trying to avoid.

### Why Existing Solutions Fall Short

**Shop Management Platforms (Tekmetric, AutoLeap, Shopmonkey, Shop-Ware — $179–$224/month)**
Built entirely around fixed-location service bay workflows. Mobile mechanic "landing pages" are marketing retrofits, not product changes. Mechanics pay 3–5× the right price point for service bay management, multi-advisor scheduling, waiting room tools, and parts room inventory they will never use. Desktop workflows make on-site phone use impractical.

**ARI ($99/year, ~$8/month)**
Cheapest auto-specific option and one-time payment proves pricing model acceptance — but it is a Windows desktop application with no cloud sync, no mobile app, and no routing capability. It cannot be used at a job site.

**Trackara Pro ($49.99/month)**
The closest true competitor: mobile-native, auto-specific, right price tier, includes OBD2 diagnostics and mileage tracking. Two meaningful gaps: (1) no route-clustered scheduling — it shows a schedule but does not group jobs by geographic proximity or present an optimized daily drive order; (2) no card pre-authorization at booking. Limited community awareness and marketing presence vs. shop platforms. The opportunity is to out-position Trackara Pro on the two features that matter most for reducing daily friction.

**Wrenchy ($79.99–$114.99/month)**
Mobile-native, auto-specific, includes pre-authorization and online booking — but priced 63–134% above the solo mechanic sweet spot, with no mileage tracking and no route optimization.

**Field Service Platforms (Jobber, Housecall Pro — $29–$299/month)**
Mobile-first UX and solid booking/invoicing flows, but no VIN lookup, no OEM labor times, no automotive vehicle history. Mechanics who try these tools eventually find the lack of automotive context (the software doesn't know what a 2019 Toyota Camry is) forces workarounds that undermine the value.

**Summary**: The $40–$60/month tier with route-clustered scheduling + card pre-authorization + mobile digital inspection + vehicle CRM + automotive-native UX is an unoccupied combination.

### Proposed Solution

VanOps is a mobile-first SaaS that gives independent mobile mechanics exactly what they need to run a professional, efficient one-person auto service business from a van — with none of the shop overhead.

The product is structured around the mechanic's actual daily workflow:

1. **Customer books online** via a mechanic-specific booking portal — selects vehicle (VIN lookup populates year/make/model), describes the issue, picks date/time. Card is pre-authorized at booking.
2. **Mechanic sees route-clustered schedule** — jobs for the day are grouped by geographic proximity and displayed in optimized drive order. Morning glance tells the mechanic the most efficient sequence before they leave home.
3. **At the job site, mechanic opens digital inspection** — photos captured in-app, annotated, and compiled into a customer-shareable link sent via SMS/email. Customer approves work authorization digitally.
4. **Job closes, payment auto-processes** — pre-authorized card is charged; tip prompt offered; invoice PDF generated and emailed. Vehicle service history updated automatically.

The vehicle CRM persists across every job: next time Mrs. Johnson's 2019 Camry comes in, the mechanic immediately sees every prior service, mileage history, and any open recommendations from the last inspection.

### Key Differentiators

1. **Route-clustered daily scheduling** — the only tool in the $40–$60/month tier that groups residential jobs by proximity and presents the day's drive in optimized order. Reduces daily drive time by 30–60 minutes. This is the killer feature with zero direct competition.
2. **Card pre-authorization at booking, auto-charge on close** — eliminates no-shows (card on file = skin in the game) and payment chasing (charge happens automatically when the mechanic marks the job complete). Available in the $79+/month tier elsewhere.
3. **Explicit "built for the van, not the bay" positioning** — no service bay features, no parts room, no multi-advisor overhead. Every screen is optimized for one mechanic working from a phone at a customer's driveway.
4. **Mobile-native digital inspection** — photo capture at job site, annotation, customer-shareable link — at $49/month vs. $179+/month on shop platforms.
5. **Automotive-native CRM** — VIN lookup, vehicle profiles (year/make/model/mileage), full service history per vehicle, OEM labor time lookups for accurate estimates. General field service tools don't know what a VIN is.
6. **$49/month or $59 LTD** — priced for a solo operator's revenue, not a shop's. First mobile mechanic SaaS on AppSumo.

---

## Target Users

### Primary Users

**Segment: Solo Van-Based Mobile Mechanic (Primary ICP)**

**Persona: Marcus, Independent Mobile Mechanic**

Marcus is 34, works out of a 2022 Ram ProMaster he outfitted himself with a Snap-on toolbox and a portable lift kit. He left a Midas shop 3 years ago because he was tired of working 50 hours and taking home $22/hour while the shop billed $120. Now he clears $90K/year working 40 hours/week, sets his own schedule, and services about 6 residential and small commercial customers per day in a suburban metro.

His current software stack: Google Maps (routing, rerouted manually throughout the day), Square (payment, no automotive context), an iPhone calendar and text threads (scheduling), and a paper inspection sheet he photographs and texts to customers. He spends 60–90 minutes per day on admin — scheduling texts, manual invoicing, chasing the occasional non-payer, re-entering vehicle info he already has written down somewhere.

He has tried Tekmetric (overwhelming, desktop-first, $199/month for features he'll never use), Jobber (didn't know what a VIN was), and a brief stint with ARI (couldn't use it from his phone at the job site). He's asked twice in his mobile mechanic Facebook group what software people use. The most common answer: "I just use Square and Google Maps."

Marcus would adopt VanOps if it solved two specific problems in the first week: (1) showed him a smarter order to run his six daily jobs so he stopped backtracking across the metro, and (2) stopped him from having to text customers their invoice separately from collecting payment.

**What success looks like for Marcus**: He opens VanOps every morning, sees today's 6 jobs ordered geographically with estimated drive times between each, knows his card pre-authorizations are in place, and finishes each job by tapping "Complete" — the card charges, the inspection report emails to the customer, and the vehicle history updates. He reclaims 45 minutes per day he was spending on admin. Monthly, he tracks that his mileage deduction has increased because he's now logging every mile automatically.

**Key motivations**: Efficiency (more billable jobs per day without more drive time), professionalism (inspection reports build customer trust and justify prices), cash flow certainty (no chasing payment), independence (don't want to learn a system designed for a shop).

**Tech comfort**: Moderate-high smartphone user. Comfortable with Square, Google Maps, iPhone apps. Skeptical of enterprise software that requires onboarding. Will abandon any tool that requires more than 30 minutes to get his first job entered.

---

**Segment: Small Mobile Mechanic Crew (2–3 Techs)**

**Persona: Diana, Mobile Mechanic Business Owner**

Diana, 41, started solo 6 years ago and now has 2 employees. She runs dispatch from home while her two techs are in the field. Her scheduling problem is 3× harder than Marcus's — she needs to assign jobs to the right tech based on skill level AND geography, track who's where, and make sure neither tech is backtracking across town while the other has a free gap.

Diana is paying $179/month for AutoLeap because it was the only tool with multi-user support she could find. She uses maybe 30% of its features. She would switch to a $79/month multi-user tier of VanOps immediately if it handled technician dispatch with route clustering per tech.

This segment is the natural expansion target in month 4–6, after the solo mechanic MVP is validated.

---

### Secondary Users

**Customer of the Mobile Mechanic (Indirect User)**

The customer does not directly use VanOps, but the product creates touchpoints they interact with:

- **Online booking portal**: Customer-facing URL where they book appointments, select their vehicle, describe the issue, and provide card details for pre-authorization. Frictionless mobile experience is critical — if it feels clunky, the mechanic loses the booking.
- **Digital inspection report link**: Shared via SMS/email; customer reviews photos and annotated findings on their phone and digitally approves work authorization. This is a trust-building moment.
- **Invoice and receipt**: Emailed automatically on job close. Customer gets a clear breakdown and can save for records or warranty purposes.

The customer experience is part of the mechanic's competitive differentiation — a professional digital inspection report and seamless payment process help the mechanic command higher prices and earn repeat business.

---

### User Journey

**Marcus's Day with VanOps:**

**Discovery:**
Marcus sees a Reddit post in r/AutoMechanic: "I built software specifically for mobile mechanics — route clustering, pre-auth, digital inspection. No shop features. AMA." He comments, reads the replies, and clicks the link. Landing page headline: "Built for the van, not the bay." He signs up for a free trial.

**Onboarding (Day 1, ~20 minutes):**
- Creates account, enters his business name and service area
- Adds 3 existing customer vehicles from memory (VIN lookup fills year/make/model automatically)
- Creates his first test booking: himself, a fake customer address, an oil change
- Sees the route view with one job — minimal but functional
- Sets up his Stripe account via embedded OAuth (no leaving the app)
- Sends himself a test invoice; it charges his own card. He grins.

**Core Usage (Week 1):**
- Enters his existing week of jobs manually; sees them cluster on the map
- Realizes his Tuesday schedule has two jobs 18 miles apart when he could rearrange to run them consecutively — moves the 2pm booking to 11am, saves 40 minutes of driving
- Takes his first digital inspection photos on an actual job; sends the link to a real customer
- Customer replies "that's really professional, thanks"

**Aha Moment (End of Week 1):**
Friday afternoon. Marcus completes his last job of the day, taps "Complete," and watches the $340 charge go through automatically. He texts his wife: "I think I found the software." He's been on VanOps for 6 days and has already reclaimed about 2 hours of drive time.

**Long-Term (Month 2+):**
- Route clustering is now a daily habit; he schedules new bookings by checking the map first
- He's promoted his booking portal link in his van's social media bios; 3 new customers booked directly online this month without a text exchange
- Vehicle CRM is building up; he can now tell a returning customer "last time we did your brakes in March, you were at 47K miles, you're at 51K now — want me to check the rotors while I'm there?"
- He leaves his first G2 review: 5 stars, specifically calls out route clustering

---

## Success Metrics

### User Success Metrics

The core user outcome is **time reclaimed and cash flow certainty**. VanOps succeeds for Marcus when:

- He saves ≥30 minutes per day in drive time (route clustering working)
- He stops chasing payment after jobs (pre-auth + auto-charge working)
- He can pull up any customer's vehicle history in under 10 seconds on his phone at a job site
- His customers receive a professional inspection report link on every job
- He tracks IRS mileage automatically without a separate app

**Behavioral indicators of success:**
- Active mechanics open the app ≥5 days/week
- ≥80% of jobs have a digital inspection created (photo captured and link sent)
- ≥90% of jobs are paid within 24 hours of completion (vs. current ~70% same-day for Square-only mechanics)
- ≥60% of new bookings come through the online portal vs. direct text/phone within 90 days

**Retention signal:** A mechanic who has ≥30 customer vehicles in their CRM is effectively locked in — switching means losing their vehicle history. Target: ≥30 vehicle records per active mechanic within 60 days of signup.

---

### Business Objectives

**3-Month Objectives (AppSumo Launch Window):**
- 300–500 AppSumo LTD buyers at $59 one-time = $17,700–$29,500 gross revenue
- 20+ G2/Capterra reviews from beta mechanics (required for AppSumo credibility)
- 10–20 beta mechanics actively using VanOps in production (recruited from Reddit/Facebook pre-launch)
- Zero critical bugs in core flow: booking → route view → inspection → charge

**12-Month Objectives:**
- $10,000 MRR ($49/month × 204 paying subscribers)
- Monthly churn <5% (target <3% by month 9)
- NPS ≥45
- 100+ reviews across G2, Capterra, and app stores
- 20+ organic Reddit/Facebook mentions per month from mechanics recommending to peers
- Parts ordering integration (PartsTech API) live as $15/month add-on

**Strategic Objectives:**
- Establish VanOps as the recognized brand in "mobile mechanic software" search before Trackara Pro or a field service platform closes the feature gap
- Own the AppSumo category for auto repair software (first-mover, no competitor currently listed)
- Build community reputation strong enough that "what software do you use?" threads in r/AutoMechanic surface VanOps organically

---

### Key Performance Indicators

| KPI | 3-Month Target | 12-Month Target | Measurement |
|-----|---------------|----------------|-------------|
| AppSumo LTD sales | 300 | — | AppSumo dashboard |
| Paying SaaS subscribers ($49/mo) | 50 | 204 | Stripe MRR |
| Monthly gross revenue | $17,700 (LTD) + $2,450 (SaaS) | $10,000 MRR | Stripe |
| Monthly churn | <7% | <3% | Stripe churn rate |
| Active mechanics (≥1 job/week) | 40 | 160 | App analytics |
| Avg jobs per active mechanic/week | 5 | 6 | App analytics |
| Digital inspection completion rate | 60% | 85% | App analytics |
| Same-day payment rate | 80% | 92% | Stripe + app |
| G2/Capterra reviews | 20 | 100 | Review platforms |
| NPS | >35 | >50 | In-app survey |
| Reddit/Facebook organic mentions | 5/month | 20/month | Manual monitoring |
| Online portal bookings (% of total) | 30% | 60% | App analytics |

**North Star Metric**: Number of active mechanics completing ≥4 jobs/week in VanOps — this is the clearest proxy for "VanOps is their primary business tool, not a supplement."

---

## MVP Scope

### Core Features

The MVP must deliver the four features that solve the core daily friction for a solo mobile mechanic. Every other feature is post-MVP.

**Feature 1: Customer Booking Portal**
- Public-facing booking URL (mechanic.vanops.com/[handle] or custom domain)
- Customer selects vehicle: VIN lookup auto-populates year/make/model; manual entry fallback
- Service category selection (oil change, brakes, diagnostics, general repair)
- Date/time picker with mechanic-defined availability windows and service area radius
- Card pre-authorization via Stripe at booking (hold, not charge)
- Automated confirmation SMS/email to customer; calendar block for mechanic
- *Acceptance criteria*: A mechanic can share their booking link and have a customer book, enter a vehicle, and provide card details without mechanic involvement

**Feature 2: Route-Clustered Daily Schedule**
- Map view of all jobs for the selected day, color-coded by status
- Geographic clustering algorithm groups jobs by proximity (k-means or similar; Google Maps Distance Matrix API for drive time)
- Suggested job order displayed as numbered pins on map + sequential list view
- One-tap navigation: opens Google Maps/Waze to next job address
- Manual drag-to-reorder override when mechanic wants to adjust
- *Acceptance criteria*: A mechanic with 6 jobs across a metro can see them grouped and ordered so that total drive time is minimized vs. the order they were booked

**Feature 3: Mobile Digital Inspection**
- In-app camera capture (multiple photos per inspection point)
- Pre-defined inspection categories: brakes, tires, fluids, belts, lights, battery, general
- Photo annotation: tap to add text note on image
- Customer-shareable inspection report: auto-generated HTML page with all photos, notes, and work authorization request
- Share via SMS or email from within app; customer taps link on their phone
- Digital work authorization: customer approves via link (saves mechanic from verbal disputes)
- *Acceptance criteria*: Mechanic can complete a full inspection with photos, generate a shareable link, and customer can approve work on their phone before mechanic begins

**Feature 4: Stripe Payment + Invoice**
- Pre-authorized card captured at booking auto-charged when mechanic marks job "Complete"
- Tip prompt at job close (suggested amounts: $5, $10, $15, custom)
- Invoice PDF auto-generated on charge: line items, vehicle info, date, mechanic name/business
- Invoice emailed to customer automatically; copy to mechanic
- Manual charge fallback for walk-in or non-booked jobs
- *Acceptance criteria*: Mechanic taps "Complete Job," card charges, customer receives PDF invoice via email, within 60 seconds

**Feature 5: Vehicle CRM**
- Customer profile: name, phone, email, address(es)
- Vehicle profile per customer: VIN, year/make/model/trim, current mileage
- Service history: every completed job with date, mileage, work performed, total charged, inspection report link
- Quick-add returning vehicle at booking or during job creation
- *Acceptance criteria*: Mechanic can look up a returning customer, see their vehicle's full service history, and add a new job against that vehicle in under 30 seconds

---

### Out of Scope for MVP

These features are explicitly deferred to protect MVP build speed and focus:

| Feature | Reason Deferred | Target Phase |
|---------|----------------|-------------|
| Mileage tracking (IRS deduction) | High value but non-core to booking/payment loop | Phase 2 (Month 2–3) |
| SMS automated reminders | Twilio integration adds complexity; email sufficient for MVP | Phase 2 |
| OBD2 Bluetooth diagnostics | Hardware dependency; Trackara Pro differentiator but not table-stakes | Phase 3 |
| Multi-tech dispatch | Requires different data model; solo ICP first | Phase 3 (Month 4+) |
| Parts ordering (PartsTech/Nexpart API) | High-value upsell but API integration adds 2–3 weeks | Phase 3 |
| Offline mode | Valuable for rural mechanics; complex to implement correctly | Phase 3 |
| QuickBooks / accounting integration | Nice-to-have; not blocking mechanic daily workflow | Phase 3 |
| Custom branded inspection reports | Aesthetic enhancement; not core functionality | Phase 2 |
| Fleet/insurance preferred-provider integration | Enterprise use case; out of solo ICP scope | Phase 4 |
| EV diagnostics module | High-future-value; technically complex; not core | Phase 4 |
| Android app (native) | Web app first; responsive mobile web is sufficient for MVP | Phase 2 |

**Scope Creep Guard**: Any feature request that requires a database schema change beyond the 5 core feature tables (customers, vehicles, jobs, inspections, payments) is automatically Phase 2.

---

### MVP Success Criteria

The MVP is successful when these conditions are met simultaneously:

1. **10 active beta mechanics** complete ≥20 real paying jobs each in VanOps within 60 days of access — this confirms the core loop (book → cluster → inspect → charge) works in production conditions
2. **Zero payment failures** on pre-authorized charges in the first 100 charge events — Stripe integration must be rock-solid before AppSumo launch
3. **NPS ≥40** from beta mechanics after 30 days of use — the product must feel meaningfully better than their previous patchwork
4. **20 written G2/Capterra reviews** collected from beta cohort before AppSumo submission
5. **Route clustering reduces self-reported drive time** by ≥25% for ≥7 of 10 beta mechanics — validate the killer feature works in real routing conditions, not just demos

The go/no-go decision for AppSumo launch is: all 5 criteria met + no critical bugs in core flow.

---

### Future Vision

VanOps in 2–3 years becomes the **operating system for the professional mobile mechanic** — not just software, but the financial, routing, and customer relationship backbone of an independent mobile auto business.

**Phase 2 (Month 2–3): Full Workflow Automation**
- Automated SMS/email reminders: day-before and 1-hour-before appointment
- Mileage tracking with automatic IRS deduction calculation and monthly report
- Invoice customization: mechanic business logo, payment terms, late fee warnings
- Multi-vehicle support: customer can have multiple vehicles (family cars, fleet vehicles)
- Android progressive web app optimization

**Phase 3 (Month 4–6): Tools for Growth**
- Multi-tech dispatch: owner assigns jobs to 2–3 techs, route clusters per tech, aggregated dispatch view
- Parts ordering integration: PartsTech or Nexpart API embedded in job view — mechanic orders parts for next-day job without leaving VanOps; platform takes 3–5% margin
- QuickBooks Online sync: job revenue auto-posted to QBO
- OBD2 Bluetooth integration: connect OBDII reader; diagnostic codes captured in job record
- Offline mode: jobs cached locally, sync on reconnect

**Phase 4 (Year 2+): Market Expansion**
- EV diagnostics module: EV-specific inspection checklist, battery health reporting — EV service tickets run 28% higher; first mobile mechanic SaaS with EV-specific tooling wins a growing segment
- Fleet/insurance preferred-provider integration: direct claims submission to insurance carriers; preferred-provider agreement management
- Parts marketplace: mechanic orders through VanOps, takes markup, customer sees parts cost on invoice — new revenue stream without inventory risk
- Telematics/predictive maintenance: integrate with vehicle telematics; platform auto-alerts customer when OBD data suggests service need; mechanic gets inbound lead without marketing
- UK/Australia expansion: same market dynamics, English-speaking, no dominant mobile mechanic SaaS in either market

**Long-term vision**: A mobile mechanic using VanOps is more profitable, more professional, and more efficient than one who isn't — and customers who've experienced a VanOps-powered inspection report don't want to go back to a mechanic who texts them a photo. The network effect isn't platform-to-platform; it's mechanic-to-customer: every inspection link is a branded VanOps touchpoint that makes the mechanic look more professional and generates organic awareness.

---

## Competitive Positioning Summary

| | VanOps | Trackara Pro | Wrenchy | AutoLeap | Jobber |
|--|--------|-------------|---------|----------|--------|
| Price | **$49/mo** | $49.99/mo | $79–$115/mo | $179+/mo | $29–$349/mo |
| Mobile native | ✅ | ✅ | ✅ | App only | ✅ |
| Route clustering | **✅** | ❌ | ❌ | ❌ | Partial |
| Card pre-auth | **✅** | ❌ | ✅ | ✅ | Partial |
| Digital inspection | **✅** | ✅ | Partial | ✅ | ❌ |
| Vehicle CRM | **✅** | ✅ | ✅ | ✅ | ❌ |
| Mileage tracking | Phase 2 | ✅ | ❌ | ❌ | ❌ |
| AppSumo LTD | **First** | ❌ | ❌ | ❌ | ❌ |
| Built for mobile | **100%** | ~80% | ~70% | ~20% | ~10% |

**Positioning statement**: "VanOps is the first software built for mobile mechanics, not adapted from shop software. Route-clustered scheduling. Digital inspection reports. Pre-authorized payments. No bay, no parts room, no overhead. $49/month."

---

## Go-to-Market Strategy

### Phase 1: Beta (Weeks 1–6)
- Recruit 15–20 mechanics via Reddit (r/AutoMechanic, r/MechanicAdvice) and mobile mechanic Facebook groups with transparent "I'm building this, want early access?" posts
- Free access for 90 days in exchange for: weekly 15-minute feedback calls, G2/Capterra review at 30 days, testimonial video at 60 days
- Private Discord server for beta cohort: product updates, feature voting, bug reports

### Phase 2: AppSumo Launch (Month 3)
- $59 LTD (3 seats) — positions for small crew upgrade without complicating solo pricing
- AppSumo submission requires: 20+ external reviews, 99.5%+ uptime record, responsive support SLA
- Launch week: founder Reddit AMA ("I spent 6 months talking to mobile mechanics, here's what I built"), coordinated beta user reviews on AppSumo listing
- Target: 300–500 LTD purchases in 30-day launch window

### Phase 3: SaaS Growth (Month 4–12)
- $49/month individual, $399/year annual (32% savings)
- Content SEO: target "mobile mechanic software", "mobile mechanic scheduling app", "mobile mechanic invoice app" — all low-competition, high-intent keywords
- Referral program: $20/month credit for each active referral (mechanics trust mechanics)
- Parts ordering integration launch (Month 6): announce in mechanic communities as major upgrade; drives trial conversions from mechanics who were on the fence

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Trackara Pro ships route clustering before launch | Medium | High | Accelerate AppSumo timeline; build community brand before they do |
| Market awareness gap — mechanics don't know purpose-built tools exist | High | Medium | Education-first content ("here's what you're leaving on the table"); before/after routing demos |
| Wrenchy drops price into $49 tier | Low | Medium | LTD sunk-cost loyalty; parts integration moat |
| Jobber/Housecall Pro launches auto vertical | Low-Medium | High | Community ownership — mechanics trust mechanics, not generic brands |
| Beta mechanics too low-volume to generate 20 reviews | Medium | High | Over-recruit (25–30 beta users); explicit review ask at 30-day mark with guidance |
| AppSumo LTD buyers don't convert to SaaS | Medium | Medium | Build habit depth in LTD period; gate Phase 2 features (mileage tracking, multi-vehicle) to SaaS only |

---

## Next Steps

1. **Technical architecture decision**: Choose between React Native mobile app vs. progressive web app for MVP — PWA reduces build time by 2–3 weeks and works on both iOS and Android without app store review cycles; recommended for MVP
2. **Beta recruitment**: Post in r/AutoMechanic this week; target 30 responses, qualify to 15–20 active mechanics
3. **Stripe Connect setup**: Research Stripe Connect vs. direct Stripe for pre-authorization flow; Connect enables future marketplace features (parts ordering) at no additional complexity now
4. **Routing API decision**: Google Maps Distance Matrix API (pay-per-use) vs. Mapbox (flat fee at volume) — evaluate at 200 mechanics/month threshold
5. **AppSumo submission prep**: Review AppSumo submission requirements; plan 8-week runway from beta start to AppSumo submission

---

*Product Brief created: 2026-06-04*
*Source documents: mobile-mechanic-software shortlisted idea (score: 89/105), market research report (2026-06-04)*
*Workflow: BMAD product-brief, steps 1–6 complete*

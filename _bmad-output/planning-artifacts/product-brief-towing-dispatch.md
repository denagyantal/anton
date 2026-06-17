---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/towing-dispatch-software.md
  - _bmad-output/planning-artifacts/research/towing-dispatch-market-research.md
workflowType: 'product-brief'
lastStep: 5
date: '2026-06-17'
author: Root
---

# Product Brief: Towing Dispatch Software (TowDash)

<!-- Generated autonomously from shortlisted idea + market research context -->

---

## Executive Summary

**TowDash** is a mobile-first towing dispatch platform built for independent tow operators running 1–5 trucks. It replaces the fragmented paper-and-phone workflow that dominates the independent towing segment with a single native app: one-tap job creation, GPS dispatch, timestamped vehicle photo documentation, digital signatures, and instant Stripe-powered invoicing — all at a flat $39–$49/month with no volume overages.

The US towing industry has 50,000+ companies and generates $11.8–$12.8B annually. 74% of those companies run fewer than 10 trucks and are systematically underserved by a software market locked in desktop-first, per-call pricing. Towbook — the category leader — charges $109–$429/month, freezes under high call volume, and has an inferior mobile experience. No full-featured, mobile-native, flat-rate solution exists in the $35–$49/month range.

TowDash wins on three decisive axes: **experience** (built for the truck cab, not a desktop browser), **pricing** (flat monthly fee, no overages), and **liability protection** (job-linked photo documentation with timestamps and digital signatures — a feature that no sub-$200/month competitor handles well). Launch via Lifetime Deal at $99–$149 to acquire 300–500 early adopters and fund development; transition to SaaS MRR at $39–$49/month for ongoing operations, with payment processing fees (1.5–2%) as a baseline recurring revenue layer.

---

## Core Vision

### Problem Statement

Independent tow truck operators — the 74% of US towing companies that run fewer than 10 vehicles — live on their phones. They dispatch themselves from the truck cab, photograph vehicle damage on their personal camera roll, take calls from motor clubs, write invoices on paper, and reconcile billing at the end of the month using QuickBooks or spreadsheets. This is not a technology awareness problem. It is a product-market fit problem: the existing software tools were designed for desktop dispatchers in a back-office, and the mobile ports are afterthoughts.

The core pain has three layers:

1. **Reliability at the wrong moment:** Towbook, the dominant SMB tool, is documented to freeze and require computer resets during peak call volume — exactly when operators need it most. Month-end billing slows to a crawl under load.
2. **Pricing unpredictability:** Towbook's volume-based pricing ($109/month base, overages at $149 per additional 1,000 calls) creates month-to-month cost uncertainty for active operators. Flat-rate pricing is the most-requested alternative in operator communities.
3. **Liability exposure from paper documentation:** Operators manually photograph pre/post-tow vehicle condition on personal phones with no chain of custody, no timestamp embedded in the job record, no digital signature at the scene. A single disputed damage claim can exceed months of software fees — yet no affordable tool provides structured, job-linked photo documentation.

### Problem Impact

For a 2-truck independent operator running 800 calls/month on Towbook Ultimate+:

- **Software cost:** $319–$468/month (base + potential overages) — $3,800–$5,600/year
- **Time lost to fragmented workflows:** Estimated 8–12 hours/month on manual billing reconciliation, double-entering motor club jobs, and tracking down photo evidence for disputes
- **Liability exposure:** Unstructured damage documentation puts the operator at legal and financial risk on every job where vehicle condition is disputed
- **Decision fatigue:** Operating a 24/7 business while managing dispatch, driving, customer communication, and billing with four separate tools is cognitively exhausting

At scale: 50,000 US towing companies × even 20% dissatisfied = 10,000 operator-level pain points. TAM for SMB dispatch software in this segment is conservatively $60–$120M annually at $39–$49/month average.

### Why Existing Solutions Fall Short

| Solution | Core Failure |
|----------|-------------|
| **Towbook** ($109–$429/mo) | Desktop-first architecture that freezes under load; mobile app is a port, not native; volume-based pricing with overages; GPS "not that great" (SoftwareAdvice) |
| **Dispatch Anywhere / Autura** ($150–$590/mo) | Per-user pricing scales steeply for multi-driver operations; enterprise-orientation; slow update cadence; not designed for owner-operators |
| **TraxeroGO** (free) | Intentionally feature-capped to funnel into paid Traxero enterprise; no impound management, payroll, or liability photo workflow |
| **Relay Towing** ($49/mo) | 250-call/month cap creates overage risk; minimal market presence; limited features beyond basic dispatch |
| **Omadi** (custom pricing) | 1+ month onboarding; "support blames user error" (Capterra); targets 10–100 truck operations — overbuilt and overpriced for independents |

The white space is upper-left on the positioning map: **mobile-first + full-featured + $35–$49/month flat**. TraxeroGO occupies mobile-first + free but with a deliberate feature ceiling. No one owns mobile-first + affordable + complete.

### Proposed Solution

TowDash is a native iOS and Android app (with optional web dashboard for reporting) that handles the full dispatch-to-payment workflow for independent operators:

1. **One-tap job creation** — capture job type, customer info, vehicle, pickup/drop-off location in under 60 seconds from the truck cab
2. **Live GPS dispatch** — real-time driver location, ETA calculation, automated customer SMS with arrival estimate
3. **Liability photo documentation** — in-app camera workflow tied to job record; timestamped pre/post photos; GPS-embedded metadata; digital customer signature capture at scene
4. **Motor club job logging** — structured log for AAA/Agero/Quest jobs with reference numbers, even before full API integration; eliminates double-entry
5. **One-tap invoicing + Stripe payments** — generate invoice at job completion; accept card via tap-to-pay or manual entry; cash log for non-card jobs
6. **Impound lot tracker (v1.1)** — auto-accruing daily storage fees with notification logging; out of scope for MVP
7. **Flat-rate pricing** — $39/month (1–2 drivers), $49/month (3–5 drivers); no call volume overages, ever

### Key Differentiators

1. **Native mobile-first architecture** — built from the ground up for the truck cab, not adapted from a desktop tool. Performance does not degrade under call volume.
2. **Liability photo documentation** — the only sub-$100/month tool with job-linked, timestamped, GPS-embedded photo capture and digital signature at scene. This is the "never lose a damage claim dispute again" story that resonates deeply with operators.
3. **Flat-rate, predictable pricing** — no volume overages, ever. One number on the invoice every month.
4. **24/7-grade reliability** — offline-first mobile architecture that queues sync when connectivity drops; critical for rural coverage areas.
5. **Towbook import** — frictionless data migration tool that imports Towbook job history and customer list in under 10 minutes, eliminating the primary switching cost.

---

## Target Users

### Primary Users

**Persona 1: Marcus — The Solo Owner-Operator**

*Context:* Marcus has run a one-truck towing operation in a mid-size metro for 7 years. He does AAA motor club work for about 60% of his jobs and cash calls for the rest. He's up at 5am, often working until midnight during peak periods. He dispatches himself from the cab using his iPhone.

*Current workflow:* He gets motor club calls on his phone, jots job details on a notepad, photographs vehicle damage on his personal camera roll (which is a mess of 10,000+ photos), writes paper invoices for cash customers, and spends 3–4 hours at the end of every month reconciling everything in a spreadsheet before importing into QuickBooks. He used Towbook for two years but switched to pen-and-paper after a billing cycle where the software froze mid-month and he couldn't access his records.

*Pain points:* (1) He lost a $1,200 damage dispute last year because he couldn't produce timestamped pre-tow photos. (2) He can never remember what he charged a returning customer last time. (3) Month-end reconciliation takes half a Sunday.

*What success looks like:* Marcus creates a job in under a minute from his phone, photographs the car, gets a digital signature from the customer, and invoices them on the spot. At month end, reports are already done.

**Persona 2: Donna — The Small Fleet Manager**

*Context:* Donna manages a 4-truck towing operation her family has run for 15 years. She does the dispatching from home but also drives a truck on busy nights. She has three drivers who report to her. She uses Towbook Professional at $209/month but the per-call overage structure caused a $350 surprise on her last invoice.

*Pain points:* (1) Towbook's multi-driver GPS tracking is "not that great" — she can't always see where her drivers are in real time. (2) Her drivers sometimes forget to photograph vehicles before hooking up, which she finds out about when disputes arise. (3) The mobile experience for her Android drivers is notably worse than desktop.

*What success looks like:* Donna dispatches from her phone, sees all four trucks on a live map, and knows her bill will be $49/month no matter how many calls they run.

### Secondary Users

**Persona 3: Agero/AAA Motor Club Dispatcher** (indirect)

Motor club dispatchers aren't users of TowDash directly, but they determine a significant portion of job flow for TowDash customers. A structured motor club job log in TowDash that captures reference numbers and timestamps creates a paper trail useful to both the operator and the motor club — reducing dispute friction in the relationship.

**Persona 4: Insurance Adjuster / Claims Investigator** (indirect)

When damage disputes arise, insurance adjusters benefit from the structured photo documentation TowDash generates. The format — timestamped, GPS-embedded, tied to a digital job record — is defensible in claims processes. While adjusters don't use TowDash directly, the documentation format should be exportable as a PDF claim packet.

### User Journey

**Marcus's journey through TowDash:**

**Discovery:** Marcus sees a post in the "Tow Truck Operators" Facebook group (67K+ members) from another operator saying "I switched from Towbook and my Sunday billing ritual is gone." He clicks the link, lands on the TowDash landing page, and sees "Flat $39/month. No overages. Works on your phone." He signs up for a 14-day free trial.

**Onboarding (Day 1):** He imports his Towbook customer list using the built-in import wizard. It takes 9 minutes. He sets up his Stripe account for card payments. He does one test job — creates it, attaches sample photos, "invoices" himself. Total time: 25 minutes.

**First real job (Day 2):** He gets a cash call, opens TowDash, creates the job in 45 seconds, drives to the pickup, taps "Start documentation," takes 6 photos of the vehicle exterior, gets the customer's digital signature, hooks up, delivers, and invoices from the delivery location while the customer is still there. Customer pays by card. Job closed in the app. No paper.

**Aha moment (Week 2):** A customer from three months ago calls back claiming TowDash damaged their bumper on a previous job. Marcus pulls up the job record, shows the timestamped pre-tow photos to the customer. Dispute resolved in 3 minutes. This single moment makes TowDash irreplaceable.

**Long-term retention:** Marcus exports his monthly report in one click and hands it to his accountant. His Sunday billing ritual is gone. He refers two other operators from his local towing association Facebook group.

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to create a job from the truck cab | < 60 seconds | In-app job creation timer (p75) |
| Time to complete onboarding (first job created) | < 30 minutes | Session analytics from trial start to first closed job |
| Photo documentation adoption rate | > 80% of jobs have ≥ 1 pre-tow photo | Job records with attached photos / total jobs |
| Invoice-to-payment conversion (digital) | > 60% of invoices paid digitally within 24h | Payment processing analytics |
| Damage dispute resolution rate | Operators report successful dispute resolution citing photo docs | Quarterly NPS survey + support ticket tags |
| Monthly active usage | ≥ 20 jobs/month created per active account | Job creation frequency per account |

### Business Objectives

**Month 3 (post-launch):**
- 150 paying accounts (LTD or MRR)
- Net Promoter Score ≥ 40
- < 5% monthly churn on MRR accounts
- $10K+ MRR equivalent (LTD buyers + MRR combined)

**Month 6:**
- 400 paying accounts
- 25+ verified reviews on G2, Capterra, or SoftwareAdvice
- $18K+ MRR (accounting for LTD cohort + MRR subscribers)
- Payment processing generating $2K–$4K/month in additional revenue

**Month 12:**
- 800 paying accounts
- $35K+ MRR
- Towbook-to-TowDash migration as a tracked acquisition channel (operators explicitly citing Towbook frustrations)
- Motor club API integration (Agero Swoop) live in v1.1

**Revenue model:**
- Primary: SaaS MRR at $39/month (1–2 drivers) / $49/month (3–5 drivers)
- LTD at $99–$149 (capped at 1–2 driver tier; seed phase only)
- Payment processing: 1.5% surcharge on Stripe-processed transactions (margin on top of Stripe fees)
- Long-term: Per-truck add-on pricing for 6–20 driver tiers

### Key Performance Indicators

| KPI | 3-Month Target | 12-Month Target |
|-----|---------------|----------------|
| Paying accounts | 150 | 800 |
| Monthly churn rate | < 5% | < 3% |
| MRR (SaaS) | $4,000 | $35,000 |
| Payment processing revenue | $500 | $4,000 |
| NPS | ≥ 35 | ≥ 50 |
| Verified reviews (G2/Capterra) | 10 | 50 |
| Facebook group-sourced signups | ≥ 40% of trials | ≥ 30% of trials |
| Trial-to-paid conversion | ≥ 25% | ≥ 30% |
| Average jobs per active account/month | ≥ 20 | ≥ 30 |
| Photo docs per job (avg) | ≥ 3 | ≥ 5 |

---

## MVP Scope

### Core Features

The MVP must deliver a complete dispatch-to-payment workflow that works natively on a phone. No desktop-first compromises.

**1. Job Management**
- One-tap job creation: customer name/phone, vehicle year/make/model/VIN, job type (accident, lockout, fuel, flatbed, etc.), pickup location (auto-detected GPS), drop-off location
- Job status flow: Created → En Route → On Scene → In Tow → Delivered → Invoiced → Paid
- Customer lookup and history (returning customer auto-fill)
- Notes field per job (free text)

**2. Liability Photo Documentation**
- In-app camera workflow triggered at "On Scene" status
- Pre-tow photos: vehicle exterior, damage areas, odometer
- Post-tow photos: delivery condition confirmation
- All photos GPS-tagged and timestamped; stored in job record (not device camera roll)
- Digital customer signature capture at scene (finger or stylus)
- Export job packet as PDF (photos + signature + job details) for dispute documentation

**3. GPS Dispatch**
- Driver live location on map (for multi-driver accounts)
- ETA calculation to pickup
- Automated SMS to customer on job creation: "Your tow is on the way — estimated arrival: [ETA]"
- Automated SMS on arrival: "[Driver name] has arrived"

**4. Motor Club Job Logging**
- Structured log for motor club jobs: motor club name (AAA, Agero, Quest, etc.), reference/PO number, job type, rate
- Separates motor club jobs from cash calls in reports
- No full API integration in MVP — structured data entry that eliminates double-entry on paper

**5. Invoicing & Payments**
- One-tap invoice generation at job completion
- Line items: base tow rate, mileage, extras (winch out, dolly, etc.)
- Stripe integration: card-present (tap-to-pay via iPhone/Android NFC) or manual card entry
- Cash job logging (records cash payment without processing)
- Invoice PDF (email or text to customer)

**6. Reporting**
- Monthly summary: total jobs, total revenue, breakdown by job type and payment method
- Motor club vs. cash call split
- Export to CSV for accountant

**7. Account & Multi-Driver**
- Account owner + up to 4 additional driver accounts
- Each driver sees only their assigned jobs (owner sees all)
- Owner dispatches jobs to specific drivers
- Driver mobile app: receive job notifications, update status, capture photos

**8. Onboarding**
- Towbook import wizard (CSV export from Towbook → import customers and job history)
- 14-day free trial (no credit card required)
- In-app onboarding checklist (set up profile, add first driver, create first job)

### Out of Scope for MVP

These features are explicitly deferred to v1.1 or later. They are real needs — but adding them to MVP bloats the build and delays time-to-market:

| Feature | Reason for Deferral | Target Version |
|---------|--------------------|----|
| Impound lot management (auto-fee accrual, lien tracking) | Jurisdictional regulatory variation makes this a compliance minefield; can launch without it | v1.1 |
| Motor club API integration (Agero Swoop, AAA) | API partner agreements take time; structured logging solves 80% of the problem in MVP | v1.1 |
| Payroll / driver commission splitting | Secondary need; most owner-operators pay cash daily | v1.1 |
| Private property towing workflow (consent towing log, violation photo, owner notification) | Niche use case within the niche; deferred to avoid scope bloat | v1.2 |
| QuickBooks / accounting integration (two-way sync) | CSV export to accountant satisfies MVP requirement; full sync is a nice-to-have | v1.2 |
| Fleet management (preventive maintenance, inspection tracking) | Different product category (fleet vs. dispatch) | v2.0 |
| Web app (full-featured browser client) | Mobile-first is the MVP thesis; web admin dashboard for reports is sufficient | v1.1 |
| GPS hardware integration (standalone tracker without phone) | Operators already have phones; software GPS is sufficient for MVP | v2.0 |

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **Adoption:** 100 paying accounts within 90 days of launch (LTD or MRR)
2. **Core loop completion:** ≥ 70% of active accounts complete a full job lifecycle (create → document → invoice → paid) in their first week
3. **Photo doc adoption:** ≥ 75% of closed jobs have at least one pre-tow photo attached
4. **Churn signal:** Month-2 churn < 8% (early signal that product delivers sustained value, not just novelty)
5. **Qualitative gate:** At least 5 unsolicited testimonials citing photo documentation as a deciding factor; at least 3 operators explicitly citing they switched from Towbook
6. **Stability:** Zero P0 bugs (data loss, payment processing failure, photo loss) in production after week 2

The go/no-go decision for v1.1 investment (motor club API, impound) should be made at the 90-day mark based on these criteria.

### Future Vision

If TowDash achieves product-market fit in the 1–5 truck segment, the 12–36 month roadmap builds toward becoming the end-to-end operating system for independent towing and roadside assistance operators:

**v1.1 (months 3–6 post-launch):**
- Agero Swoop API integration — digital motor club dispatch eliminates phone-call job acceptance entirely
- Impound lot management — auto-accruing daily storage fees, owner notification tracking, lien workflow templates
- Driver paysheet — per-call or per-day commission calculation
- Web admin dashboard (full reporting, job management, customer CRM)

**v1.2 (months 6–12):**
- Private property towing module — consent towing photo log, violation documentation, owner notification workflow
- QuickBooks two-way sync
- Customer portal — customers can view job status, see photos, pay invoices, and dispute damage claims online
- Repeat customer pricing rules (fleet accounts, preferred rates)

**v2.0 (months 12–24):**
- Marketplace / referral network — operators in the same metro can refer overflow jobs to each other through TowDash
- EV towing specialization — certified EV tow documentation workflow (growing TAM with EV adoption)
- Insurance integration — direct photo documentation export to insurance claim systems (Verisk, Mitchell)
- Enterprise tier (6–20 trucks) — bulk driver management, advanced route optimization, PO-based billing
- AAA membership integration — motor club member verification at scene via TowDash

**Long-term positioning:**
TowDash is positioned to become the Jobber of towing — a beloved vertical-specific tool for small operators that grows with them, adding capabilities that justify increasing MRR while maintaining the simplicity that won the initial market. The photo documentation moat deepens over time as operators build job history and evidence libraries in TowDash that they cannot easily export to competitors.

---

*Brief generated autonomously on 2026-06-17 from shortlisted idea (score: 81/105) and market research report. Ready for PRD creation.*

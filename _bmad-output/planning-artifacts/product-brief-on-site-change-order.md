---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/on-site-change-order-app-for-contractors.md
  - _bmad-output/planning-artifacts/market-research-on-site-change-order.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: on-site-change-order
user_name: Root
date: 2026-11-13
---

# Product Brief: On-Site Change Order App for Contractors

---

## Executive Summary

Contractors and handymen lose an estimated 5–10% of annual project revenue to disputed change orders — verbal agreements that customers conveniently forget by invoice time. The industry-wide cost is $177 billion annually in North America, yet the 1–20 person contractor segment has no affordable, mobile-first tool purpose-built to solve it.

**ChangeGuard** (working title) is a standalone mobile app that reduces the on-site change order capture process to 30 seconds: the contractor describes the work, enters the price, optionally attaches a photo, the customer signs directly on the phone screen, and a professional PDF is instantly emailed to the customer and saved in job history. The original estimate is always preserved as an immutable record — every change order is additive on top, creating a defensible audit trail that eliminates billing disputes.

The competitive landscape has evolved since mid-2026 to include several standalone tools (ScopeProof, Change Order Pro, VaryOrder, Contractor Ace), but none have executed an AppSumo Lifetime Deal. That gap is the market's clearest first-mover opportunity: a focused, demo-able tool with a vivid ROI story ("one recovered dispute pays for the LTD 10x over") is a natural fit for AppSumo's buyer base.

**Business model:** $19/mo (up to 3 active jobs) · $29/mo (unlimited) · $59 LTD (AppSumo early-bird)
**Target:** 500 paying customers by month 6 → $14.5K MRR by month 12
**Build time:** 4–6 week MVP (e-sign, PDF, offline sync — well-understood primitives)

---

## Core Vision

### Problem Statement

Small contractors and handymen routinely lose thousands of dollars per year to change order disputes. The pattern is consistent: a customer verbally approves additional work on-site ("while you're here, can you…"), the work gets done, the invoice arrives, and the customer says they don't remember agreeing to it. With no signed record, no paper trail, and no timestamped documentation, the contractor has no recourse — they write off the work or damage the client relationship chasing it.

The existing workarounds all fail in the field:
- **Paper forms** get lost, are illegible, and can't be emailed instantly to the customer
- **Manual PDF emails** take 10+ minutes and aren't done on-site while the customer is present
- **Text message agreements** have no signature and are legally weak
- **Full PM platforms** (Procore, Buildertrend) cost $400–$2,000+/month and bury change orders inside complex software designed for 50-person companies, not solo handymen

The result: the contractor either absorbs the loss, damages the client relationship, or spends hours disputing an invoice — none of which should be necessary when the customer agreed to the work in person.

### Problem Impact

The scale of this problem is not anecdotal:

- **$177 billion** in unrecovered change order revenue annually in North America (Clearstory, 2026)
- **77%** of specialty contractors have written off CO work as bad debt
- **66%** of GCs withhold or reduce CO payments due to disputed pricing
- Contractors lose an average of **5–10% of project revenue** on poorly managed change orders
- In a $200K/year handyman business, that's $10,000–$20,000 walking out the door annually

For the target customer — a solo handyman or 3-person remodeling crew — a $500 disputed change order represents a week's worth of materials. The pain is vivid, recent, and expensive. These contractors are not abstractly worried about documentation; they have a specific story about a specific customer who cost them money.

### Why Existing Solutions Fall Short

**Paper and verbal**: Zero legal defensibility, no customer copy, no audit trail, lost immediately.

**Manual PDF/email workflows**: Require going back to the office or van, take 10+ minutes, and are never done while the customer is physically present and emotionally invested in approving the work. The window for easy signature capture closes when the contractor drives away.

**Full PM platforms (Procore, Buildertrend, Houzz Pro)**: Designed for companies with dedicated project controls staff. The smallest Buildertrend plan is $499/mo — the entire annual revenue from 500 ChangeGuard LTD customers wouldn't cover six months of Buildertrend for one company. Change orders are a module buried inside a system the target customer doesn't need and can't afford.

**Existing standalone tools (2026 landscape)**:
- *ScopeProof*: Free (3 CO limit), iPhone-focused, no evident offline mode or version-controlled estimate history
- *Change Order Pro*: AI clause drafting at $12.99/mo adds friction for field use; broader CRM scope
- *VaryOrder*: Voice/type mobile flow, strong feature set, but $49/mo Pro price is high for US solo operators
- *Contractor Ace*: COs included in a broader contractor app — COs are one feature of many, not the positioning focus

**The critical gap**: No single tool simultaneously delivers (a) true offline-first reliability, (b) immutable original estimate preservation with additive CO history as a defensible legal record, (c) photo documentation linked to specific COs, (d) a one-time AppSumo LTD for contractors who resist recurring subscriptions. That combination is uncontested.

### Proposed Solution

ChangeGuard is a mobile-native app (iOS and Android) built around a single core workflow:

1. **Create a job** (30 seconds): customer name, address, original scope description, original price
2. **Add a change order** (30 seconds): describe the additional work, enter the price, optionally attach 1–3 photos, let the customer sign on-screen with their finger
3. **Automatic delivery**: a branded PDF is generated instantly — job name, original scope, CO description, price, customer signature, timestamp — and emailed to the customer; a copy is saved to the job record
4. **Running total always visible**: original estimate + all approved COs = current contract value, visible at the top of every job view

The original estimate is **immutable** — it is never modified. Every CO is an additive document on top. This creates a clear, timestamped audit trail: "Here is what you hired me for. Here are the 3 additional items you approved on-site, with your signature and the date and time of each approval. Here is the total we agreed to."

**Offline-first**: the entire flow — CO creation, signature capture, PDF generation — works without cell signal. Data syncs when connectivity is restored. This matters because a significant portion of the target market works in basements, rural properties, and metal buildings where signal is unreliable.

### Key Differentiators

| Differentiator | Why It Matters | Competitive Status |
|---------------|---------------|-------------------|
| **Offline-first** | Full flow works in basements, rural areas, metal buildings | No competitor prominently markets this |
| **Immutable original estimate + additive CO history** | Legal audit trail for disputes; original scope can never be "revised away" | No competitor positions around this |
| **Photo documentation tied to specific CO** | Before/during photo attached to the specific work that was approved | Poorly implemented in all current tools |
| **AppSumo LTD at $59** | One-time payment removes subscription objection; impulse-buy threshold for ROI-clear tools | No current competitor has done this |
| **30-second field flow** | Designed for the job site, not the office; customer signs while standing next to the contractor | Shared with ScopeProof/VaryOrder, but reinforced by the other differentiators |

**Positioning statement**: *"The only change order app built to protect your original estimate — offline, versioned, and yours for life with our AppSumo launch price."*

---

## Target Users

### Primary Users

**Persona 1: Mike — The Solo Handyman**

Mike is 42, runs a one-person handyman business in a mid-sized city. He grosses about $120K/year doing anything from drywall repairs to deck rebuilds. He schedules his own jobs, buys his own materials, and does all the billing. His "office" is the front seat of his truck.

Mike got burned 18 months ago when a customer refused to pay $850 for a subfloor repair he did while replacing their bathroom flooring — "that wasn't in the quote." Mike had no paperwork. He absorbed the loss. He's been thinking about how to prevent it ever since, but hasn't found anything that works as fast as his current approach (texting a price and hoping the customer replies "sounds good").

Mike's requirements: works on his phone, takes less than 60 seconds, doesn't require Wi-Fi, looks professional enough that his customers won't question it. He's willing to pay $19–$29/month if the first CO he captures pays for a year of the app.

**On-site behavior**: Mike is on a job, talking to the customer. He needs to get a signed CO in under a minute without making the customer feel like they're signing a contract. He needs the tool to be faster than saying "let me write this up when I get home."

**Aha moment**: First time a customer asks "can I see that change order later?" and Mike forwards the PDF from his job history 10 seconds later.

---

**Persona 2: Carlos — The Small Remodeler**

Carlos runs a 4-person remodeling crew focused on kitchen and bathroom renovations. Annual revenue is around $600K. He has a part-time bookkeeper who handles invoicing, but Carlos himself is on job sites 80% of the time managing work and talking to homeowners.

Carlos averages 8–12 change orders per kitchen remodel — tile upgrades, electrical additions, structural surprises. He currently uses a paper form he designed, which his office scans and emails. The process takes a day, customers often forget what they approved, and two disputes in the last year cost him $3,200 combined.

Carlos needs: job history organized by project, the ability to track the running total vs. original contract, a way to email COs to customers from the job site, and a format professional enough to reference in a dispute if needed.

**On-site behavior**: Carlos is in a half-gutted kitchen. The homeowner is present. They've just discovered that the existing plumbing isn't where the plans show it. Carlos needs to describe the rerouting work, give a price, get a signature, and get back to directing his crew. He cannot stop to email a PDF from his office later.

**Aha moment**: Month-end billing review. Carlos sees a project total that matches exactly what he quoted plus exactly what he added, with signed records for every CO. His bookkeeper invoices with zero ambiguity.

---

### Secondary Users

**Persona 3: Jenny — The Customer (Homeowner)**

Jenny is the customer. She's not a user of the app in the traditional sense, but she is a participant in the core workflow — she signs the CO on Mike's or Carlos's phone. Her experience with the product determines whether the contractor gets a defensible signature or an awkward refusal.

Jenny's requirements: the signing interaction must be fast, feel trustworthy, and not require her to download anything. She should immediately receive an email confirmation of what she just agreed to. If she later has questions about the charge, that email is her reference — not the contractor's say-so.

**Design implication**: The on-phone signing UI must look professional and non-threatening. The customer-facing confirmation email must be clear, well-formatted, and unambiguous about what was agreed. This is marketing as much as product — every emailed PDF is a brand touchpoint that the contractor shares with their customer.

---

**Persona 4: Dana — The Specialty Trade Contractor (Electrician / Plumber / HVAC)**

Dana runs a 3-person electrical contracting company. COs in the trades often involve higher dollar amounts than handyman work ($500–$5,000 per CO is typical for electrical work), and the disputes tend to be more contentious. Dana's customers are often other contractors (GCs) rather than homeowners, which means the documentation requirements are even more important.

Dana's requirements largely overlap with Mike's, but with higher sensitivity to the PDF's legal formatting and a stronger preference for the original scope preservation feature. Dana has been to small claims court once over a disputed electrical rough-in. She's a very high-value customer for a CO tool.

---

### User Journey

**Discovery → Conversion**

The typical discovery path for all three primary contractor personas:

1. **Trigger event**: A contractor experiences a billing dispute or write-off. The pain is fresh and specific.
2. **Search behavior**: Reddit (r/handyman, r/Construction, r/AskContractors), Facebook contractor groups, or YouTube ("how to avoid change order disputes," "contractor billing protection app")
3. **Social discovery**: A peer posts in a Facebook group: "I've been using [ChangeGuard] for 3 months, haven't had a single dispute since. Here's the PDF it generates." Screenshot included.
4. **AppSumo discovery**: Sees the listing, reads the reviews from beta users, recognizes the ROI story, buys the LTD impulsively — this is a $59 decision, not a $1,200/year decision.

**Onboarding → First Value**

5. **Install and setup**: Create a free account, set up company name and logo for PDF branding (< 5 minutes)
6. **First job**: Create a job for a customer currently in progress (< 2 minutes)
7. **First CO**: Next time the customer says "while you're here…" — contractor opens app, creates CO, hands phone to customer for signature, PDF emailed. First real use in under 60 seconds.
8. **Value realization**: Customer receives the PDF email and replies "got it." Contractor realizes: *this is now defensible.*

**Habit Formation → Retention**

9. **Habit trigger**: The job list with running totals becomes the contractor's daily check-in. Original estimate vs. current contract value is always visible.
10. **Referral trigger**: Contractor shares a PDF in a group chat with another contractor ("look at how clean this is"). Organic viral mechanic — every emailed PDF carries the product's brand.
11. **Upgrade trigger**: LTD buyer approaches job limit (50 jobs/year) or wants to access team features → converts to monthly plan.

---

## Success Metrics

The leading metric that matters most is **COs created per active customer per month**. A customer creating <2 COs/month is at high churn risk and may not have adopted the product into their workflow. A customer creating >8 COs/month is effectively using it as a primary business protection tool — extremely sticky.

### Business Objectives

| Objective | Rationale |
|-----------|-----------|
| **Acquire 200+ AppSumo LTD buyers in first month** | LTD launch is the primary acquisition mechanism and community seed event; 200 buyers generates $11,800 revenue and an initial review base |
| **Reach $16K MRR by month 12** | Validates the SaaS business model; achievable at ~550 monthly subscribers at blended $29/mo rate |
| **Establish brand recognition in Reddit/Facebook contractor communities** | Organic community presence is the lowest-cost sustainable acquisition channel; must be established before larger competitors replicate the positioning |
| **Launch on AppSumo before any direct competitor** | First-mover advantage on AppSumo LTD for change order tools is a time-limited opportunity; none of the 6 current competitors have done this |
| **Achieve >4.5 stars on App Store and G2** | Social proof is critical for a trust-dependent product; contractor buyers check reviews before purchasing tools that handle customer-facing documents |

### Key Performance Indicators

**Acquisition KPIs**

| KPI | Month 3 Target | Month 12 Target |
|-----|---------------|----------------|
| AppSumo LTD buyers | 200 | — |
| Total paying customers | 200 | 1,200 |
| New signups/month | 50 | 150+ |
| App Store rating | >4.5 | >4.6 |
| G2 reviews | 25+ | 100+ |

**Engagement KPIs (leading indicators of retention)**

| KPI | Month 3 Target | Month 12 Target |
|-----|---------------|----------------|
| COs created per active customer/month | >5 | >8 |
| PDF delivery success rate | >99% | >99.9% |
| Offline CO completions (% of total) | Measured, baseline | >15% (indicates real field use) |
| Jobs with photos attached to COs | >30% | >50% |
| Day-7 retention rate | >60% | >70% |

**Business KPIs**

| KPI | Month 3 Target | Month 12 Target |
|-----|---------------|----------------|
| MRR | $0 (LTD phase) | $16,000 |
| LTD revenue | $17,700 | — |
| Monthly churn (SaaS) | <5% | <3% |
| NPS | >50 | >60 |
| CAC (blended) | <$30 | <$25 |

**User Success KPI (the one that matters most)**
> "Did the contractor get paid for work they would previously have disputed or written off?"

This is not directly measurable from app data, but can be tracked via:
- NPS surveys with open-ended "tell us about a time the app helped you" prompts
- Support interactions where customers share dispute resolution stories
- G2/App Store review content analysis

Target: >40% of NPS survey respondents report recovering a disputed payment within 90 days of first use.

---

## MVP Scope

### Core Features

The MVP must deliver exactly one thing reliably: a contractor can capture a signed change order on-site in under 60 seconds, with a PDF emailed to the customer immediately, in conditions ranging from perfect Wi-Fi to no cell signal.

**Feature 1: Job Management**
- Create a job: customer name, phone/email, address (optional), original scope description, original agreed price
- View job list sorted by recency, showing: job name, original price, current total (original + all approved COs), last activity date
- Job status: active / complete

**Feature 2: Change Order Creation and Capture**
- From any active job, tap "Add Change Order"
- Required fields: description of work (text, voice-to-text supported), price
- Optional: attach 1–3 photos (from camera or photo library)
- Customer signs on-screen with finger or stylus
- One-tap send: PDF generated locally, emailed to customer's email on file, saved to job record
- CO is immediately visible in the job's CO history with timestamp

**Feature 3: Running Project Total**
- Persistent display on job view: "Original: $X,XXX | Approved COs: $X,XXX | Current Total: $X,XXX"
- Original price is never modified — it is a fixed reference point
- Each CO is logged as an additive line item with its own timestamp and signature record

**Feature 4: Offline-First Architecture**
- Entire CO flow — creation, signature capture, PDF generation — works without internet connectivity
- Data is stored locally (IndexedDB / SQLite) and synced to backend when connectivity is restored
- Sync status indicator: "X items pending sync" when offline
- Email delivery is queued and sent immediately upon reconnection
- No degraded functionality shown to user during offline operation

**Feature 5: PDF Generation**
- Professional PDF with: contractor company name + logo (uploaded during setup), customer name and address, job name, CO number (sequential per job), CO description, price, photo(s) if attached, customer signature, date and time of signature, ESIGN Act disclosure line
- Generated on-device (not requiring server roundtrip) for offline capability
- Emailed from app via transactional email service (SendGrid/Resend)
- Stored in job record, re-sendable at any time

**Feature 6: Contractor Setup**
- Company name, logo upload, email address
- Default "from" name for customer emails
- Simple account creation (email + password, or Google sign-in)

### Out of Scope for MVP

The following features are explicitly deferred. They will be tracked and built in Phase 2 and Phase 3, but no scope creep before 500 paying customers have validated the core:

- **Full job estimates** (pre-CO quote generation) — this is the natural Phase 2 expansion
- **Customer portal** (online approval link so customer doesn't need to sign on-phone) — Phase 2
- **QuickBooks / accounting integration** — Phase 2 or 3
- **AI-assisted CO drafting** — Phase 3; adds friction for field use at MVP stage
- **Multi-user / team features** (multiple contractors sharing a job) — Phase 2
- **Invoice generation** — Phase 3; stay focused on COs, not billing
- **Customer-facing project tracking** — Phase 3
- **GPS location tagging** — Phase 2
- **Calendar / scheduling** — out of scope permanently for this product's niche
- **Payment processing / deposit collection** — Phase 3

**Scope discipline rule**: Any feature request that is not "getting a signed CO into the customer's email in under 60 seconds" is deferred. The product's identity is "the change order app," not "the contractor app."

### MVP Success Criteria

The MVP is validated and ready for investment in Phase 2 when all of the following are true:

1. **200+ AppSumo LTD buyers** in the first month of AppSumo listing
2. **COs per active customer >5/month** (indicates habit formation, not just trial)
3. **PDF delivery success rate >99%** (non-negotiable for trust)
4. **NPS >50** from first 50 customers surveyed
5. **At least 3 organic community shares** of a CO PDF screenshot in Reddit/Facebook contractor communities (unprompted product mentions in context of solving a real dispute)
6. **Zero churn attributable to core CO flow failure** (churn should come from "stopped needing it" not "it didn't work")

If criteria 1–4 are met, proceed to Phase 2 (job estimates, customer portal). If criteria 5–6 are met, the product has achieved product-market fit signals and community organic growth.

### Future Vision

**Phase 2 (Months 4–9): Estimates + Customer Portal**
- Pre-CO job estimate: contractor sends a formal quote before work begins; original scope is now a formal document the customer signs before work starts (not just a text field)
- Customer-facing approval link: email a CO to the customer with an "approve online" button — customer doesn't need to be physically present for lower-dollar COs
- Multiple photos per CO with before/after labeling
- CO status tracking (pending / approved / declined / revised)
- Contractor branding: custom PDF header, company logo watermark, color accent
- Annual billing option (2 months free)

**Phase 3 (Months 10–18): Business Suite + Integration**
- QuickBooks export (CO + job totals become invoice line items)
- Running "dispute risk score" per job (based on CO volume, documentation completeness, photo coverage) — turns the product from a document tool into a financial protection advisor
- Multi-user: assign jobs to crew members, track which contractor created each CO
- Customer portal: homeowners can view their full project CO history
- Payment integration: request deposit or partial payment at CO approval (Stripe)
- Geographic expansion: UK/Australia localization ("variation orders" terminology, GBP/AUD, UK legal disclosure language)

**Long-Term Vision (Year 2+)**
ChangeGuard becomes the entry point for a focused contractor revenue protection suite: estimates → change orders → invoicing → payment collection. Not a full project management platform (never Buildertrend), but the financial/documentation layer of a small contractor's business — the tool that ensures they get paid for every dollar of work they do.

The exit path is likely acquisition by a larger contractor CRM or invoicing platform (ServiceTitan, Jobber, Housecall Pro) for whom "change order documentation" is an underserved adjacent workflow. Building ChangeGuard as the category-defining brand in the standalone change order space makes it an attractive bolt-on acquisition.

---

## Go-to-Market Summary

**Launch sequence:**
1. Beta: 10–20 users from r/handyman and r/ContractorManagers (pre-AppSumo, 4-week feedback loop)
2. AppSumo launch: $59 LTD early-bird, $79 regular; target 200–500 buyers in 30 days
3. Community seeding: authentic posts in Reddit/Facebook contractor communities featuring real PDF examples
4. YouTube content: "how I stopped losing money on change orders" search-optimized content (organic SEO play)
5. SaaS transition: LTD buyers graduate; $19/$29/month plans open to new subscribers from month 3

**Pricing:**
- $19/month — up to 3 active jobs
- $29/month — unlimited jobs
- $59 LTD — AppSumo early-bird (up to 50 jobs/year), **NO competitor has executed this**
- $99 LTD — AppSumo regular (unlimited jobs/year)

**Key risks and mitigations:**
- *ScopeProof's free tier*: Compete on reliability, audit trail completeness, and professional PDF quality — not on price. Free tier can offer 5 COs/month (enough to validate, not enough to run a business on).
- *Feature creep toward full PM*: Strict scope gate — any feature request that isn't "30-second CO capture" goes to the Phase 2 backlog, no exceptions.
- *Competitor AppSumo launch*: Speed is the primary risk mitigation. AppSumo application should be submitted concurrent with beta.
- *Legal objection to on-screen signatures*: Proactive ESIGN Act FAQ in-app and in onboarding. On-screen signatures have been legally binding in the US since 2000.

---

**Product Brief Status:** Complete
**Next Step:** Create PRD — `/bmad-bmm-create-prd`
**Completion Date:** 2026-11-13

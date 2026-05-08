---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/trades-customer-financing.md
  - _bmad-output/planning-artifacts/market-research-trades-customer-financing.md
workflowType: product-brief
lastStep: 6
project_name: trades-customer-financing
user_name: Root
date: 2026-05-08
---

# Product Brief: Trades Customer Financing Integration

---

## Executive Summary

Small HVAC and plumbing contractors — shops with 1–5 technicians generating $250K–$1.5M in annual revenue — regularly lose $3,000–$12,000 jobs because customers cannot pay upfront. The ACCA "Contractor of the Future" study of 1,000+ contractors documents the problem precisely: close rates jump from 38% to 49% when financing is offered, yet 32% of contractors offer no financing at all. The existing tools that could solve this force an impossible choice: adopt a $1,500+/month enterprise FSM platform (ServiceTitan), or pay Hearth's $1,499/year annual lock-in — neither of which is viable for a 2-tech HVAC shop.

The opportunity is a standalone, mobile-first financing widget that works alongside any existing workflow. A technician enters a job scope and dollar amount, taps "Add Financing," and the customer receives an SMS pre-qualification link from Wisetack — all in under 60 seconds, while the tech is still on-site. The customer applies, gets a decision in minutes, and the job closes. No FSM platform adoption required. No $1,499 annual commitment. No IT department needed.

**Product Name:** FieldFund (working title) — Contractor Financing, In the Field  
**Core Wedge:** Standalone Wisetack widget for shops not on an FSM platform  
**Revenue Model:** $49–$79/month SaaS or $149–$299 LTD + 0.5–1.0% revenue share on funded loan volume  
**Target Market:** ~60,000–80,000 HVAC/plumbing shops with 1–5 employees in the US  
**Revenue Potential:** $2.5M–$5M ARR at 5–10% penetration at $59/month average  
**Time to MVP:** 3–4 weeks (Wisetack REST API + estimate input + SMS delivery)

---

## Core Vision

### Problem Statement

Small HVAC and plumbing contractors (1–5 technicians) lose an estimated 3–4 jobs per week because customers cannot pay $5,000–$12,000 upfront for a furnace replacement, AC system swap, or main sewer line replacement. This is not a fringe problem — it is documented at scale by the Air Conditioning Contractors of America (ACCA) survey of 1,000+ contractors and confirmed repeatedly in r/HVAC (226K members) and r/Plumbing (181K members) community discussions.

The dollar impact is concrete: Abbott Brothers Plumbing & Heating attributed $72,000 in incremental annual revenue directly to adding Wisetack financing — a 10–15% lift in completed jobs from a single operational change. A contractor doing $500K/year who closes 3 additional $5,000 jobs per month adds $180,000 in annual revenue. The ROI is 133–200x the cost of the software.

Yet 32% of contractors offer no financing option at all. The barrier is not disagreement with financing in principle — it is the current all-or-nothing market structure: either adopt a full $1,500+/month FSM platform that includes financing, or pay a $1,499+/year annual subscription just for financing access. Neither option fits a 2-tech shop running on Jobber or pen-and-paper.

### Problem Impact

**Financial impact on contractors:**
- 3–4 lost jobs per week at average $5,000–$8,000 per job = $780K–$1.6M in lost annual revenue across a typical 3-tech shop's job pipeline
- Documented case: Abbott Brothers added $72,000 incremental revenue from Wisetack adoption alone
- Close rate improvement: 38% → 49% when financing is offered (ACCA, n=1,000+ contractors)
- Financed jobs are 4.5x larger on average ($1,000 unfunded → $4,500 financed)

**Customer impact:**
- Residential homeowners with median household income of $60,000–$90,000 face $5,000–$12,000 HVAC replacement costs representing 6–10% of annual income — impossible to absorb in one payment for most households
- Customers who cannot pay upfront defer critical repairs, leading to emergency situations, additional damage, and worse outcomes

**Market-level impact:**
- 32% of ~230,000 combined HVAC/plumbing businesses offer zero financing = ~74,000 shops leaving money on the table daily
- The total "ghost zone" — jobs scoped and agreed on at the technical level but lost at the payment stage — is a multi-billion dollar annual drag on the trades industry

### Why Existing Solutions Fall Short

**ServiceTitan ($245–$398/technician/month):** The gold standard for HVAC/plumbing FSM software, with a polished in-field estimate and financing flow. Completely inaccessible to the 1–5 tech target segment on cost grounds. A 2-tech shop would pay $490–$796/month for the platform alone before any financing fees. This is ServiceTitan's deliberately premium market position — it creates the gap this product fills.

**Hearth ($1,499–$1,799/year, annual billing only):** The most direct standalone competitor. Has a 17–18 lender network for high approval rates, digital quotes/contracts, and QuickBooks integration. Critical failure mode: annual-only billing creates a $1,499 upfront cash commitment that is a hard sell for a seasonal 1-tech shop with uneven monthly cash flow. A $99 setup fee compounds this. Their Essentials plan excludes the quote/contract workflow, forcing expensive upgrades. No monthly option.

**Wisetack via FSM platforms (Housecall Pro $59–$169/month, Jobber $149–$349/month):** Wisetack's lender infrastructure is excellent — 80% approval rate, $500–$25,000 loan range, 1–3 day funding, 3-week integration timeline for new partners. But it is only available inside FSM platforms. A shop that wants Wisetack financing without adopting Housecall Pro's full suite is out of luck. Wisetack has 16 platform integrations and does not offer a standalone widget for non-FSM shops.

**GreenSky / Service Finance / Synchrony (legacy lenders):** High loan limits but complex dealer fee structures, paper applications, multi-day funding delays, and enterprise-oriented dealer agreements. Created the original perception that contractor financing is "too complicated for a small shop." Wisetack's mobile-first, instant-approval model was specifically built to replace these.

**The White Space:** There is no standalone tool that costs under $100/month on a flexible monthly basis, integrates with Wisetack's proven infrastructure, and works without adopting a full FSM platform. This product fills exactly that gap.

### Proposed Solution

A standalone, mobile-first financing widget — designed to be used in the field by a technician while still at the customer's home.

**Core workflow (under 60 seconds):**
1. Technician opens the app on their phone
2. Enters job scope (name, description) and total dollar amount
3. Taps "Add Financing Option"
4. App generates a Wisetack pre-qualification link and sends it via SMS to the customer's phone number
5. Customer opens the link, applies for financing in 2–3 minutes
6. Decision comes back within minutes (80% approval rate)
7. If approved, customer confirms the job — it closes
8. Contractor sees "Job Financed" status in their dashboard
9. Contractor is paid by Wisetack within 1–3 business days after job completion

**Secondary features (Phase 2):**
- Website embed widget — a "Apply for Financing" button embeddable on the shop's website for inbound leads
- Multi-lender second-look — automatically offer Fortiva/FTL Finance when Wisetack declines (~20% of applications), boosting total approval rate to 90%+
- Team accounts — multiple technician logins with centralized dashboard for 3–5 tech shops
- Funded jobs dashboard — running counter of financed jobs and total funded dollar volume (primary retention driver)

**Technical foundation:**
- Wisetack REST API integration (3-week timeline, formal partner program with revenue share)
- SMS delivery via Twilio
- Mobile-first PWA (iOS + Android) — no app store dependency for rapid iteration
- Minimal backend: account management, job tracking, SMS log, funded status webhook

### Key Differentiators

**1. Standalone operation — no FSM required**
Works alongside pen-and-paper, QuickBooks, Google Sheets, Invoice Ninja, or any existing workflow. Zero switching cost for contractors who don't want or can't afford a full FSM platform. This is the single most important differentiator vs. Wisetack-via-HCP and Wisetack-via-Jobber.

**2. Mobile-first, 60-second in-field flow**
Optimized for the moment the technician is standing in the customer's home with a completed estimate. The existing tools (Hearth's web app, ServiceTitan's iPad workflow) are built for office or post-visit use. The window to close with financing is the moment of estimate presentation — this product is built for that moment.

**3. Flexible pricing with no annual lock-in**
$49–$79/month on a month-to-month basis, or a one-time $149–$299 LTD. This is the direct competitive counter to Hearth's $1,499/year annual commitment. For a seasonal 1-tech shop that's busy May–October and slow November–April, month-to-month pricing (or LTD with no recurring fee) removes the single biggest adoption barrier.

**4. Revenue share model alignment**
Wisetack's partner program pays platform partners a portion of economics on funded loans. This product earns revenue both from SaaS subscriptions and from funded loan volume — creating aligned incentives. As contractors close more financed jobs, the product earns more, creating a natural flywheel toward helping contractors maximize their use of financing.

**5. Positioned as the "Wisetack widget for everyone else"**
Wisetack has powerful brand recognition in the trades through their Housecall Pro, Jobber, and other FSM integrations. Many contractors have heard of Wisetack but can't access it without an FSM subscription they don't want. This product becomes "Wisetack, standalone" — borrowing lender credibility while adding the front-end workflow layer.

---

## Target Users

### Primary Users

**Persona 1: Mike — The Solo HVAC Operator**

Mike runs a 1-tech HVAC shop in suburban Texas. He's 42, started his business 8 years ago after working for a larger company, and generates about $380,000 in annual revenue. He handles all service calls, estimates, and scheduling himself. His wife does the bookkeeping on QuickBooks on weekends. He uses his iPhone for everything — scheduling (Google Calendar), invoicing (Invoice Ninja), and customer communication (text messages).

Mike loses 2–3 jobs per month to the financing conversation. When a customer gets a $6,500 estimate for a new AC unit replacement, the common response is "I need to think about it" — and then they don't call back. He knows from his HVAC Facebook group that he should be offering financing, but Hearth's $1,499/year upfront cost felt like too big a risk, and he can't afford ServiceTitan.

**His experience with the product:**
- Hears about it from a peer on r/sweatystartup ("been using this for 3 months, closed 6 jobs I would have lost")
- Downloads the app, enters his business name and Stripe bank details in 10 minutes
- On his next job with a hesitant customer, types the job details on his phone, taps "Send Financing Link," customer gets a text
- Customer applies while Mike is still packing up his tools; comes back approved for $6,500
- Job closes on the spot
- "This paid for itself on the first job"

**Success for Mike:** He closes 2–3 more jobs per month that he used to lose. At $5,500 average, that's an extra $11,000–$16,500/month, $132,000–$198,000/year — from a $79/month tool or a one-time $149 LTD.

---

**Persona 2: Dave & Carl — The 3-Tech Plumbing Shop**

Dave owns a plumbing business that's been running for 15 years with 3 technicians. Revenue is around $900K/year. They use Jobber for scheduling and dispatching but haven't activated Jobber's Wisetack financing integration (it felt like a secondary feature, not obvious how to set it up). Their biggest jobs — main sewer replacements ($3,500–$6,000), whole-house repipes ($8,000–$15,000), tankless water heater installs ($2,500–$3,900) — are where customers hesitate most.

Carl, Dave's lead tech, is 35 and very comfortable with his phone. He's the one who would use the financing app in the field. Dave would use the dashboard to see which jobs got financed and track funded volume.

**Their experience with the product:**
- Dave finds it through a sponsored post in the "Plumbing Business Owners" Facebook group
- Signs up for the team plan ($79/month for up to 5 techs)
- Carl uses it within the first week on a $4,200 water heater job — customer was hesitant, Carl sends the link, customer approves in 8 minutes
- Dave's dashboard shows 4 financed jobs in Month 1, $14,800 total funded
- At month 3 they're consistently offering financing on every job over $2,000

**Success for Dave & Carl:** Revenue per job increases, close rate on estimates over $2,000 jumps from ~45% to ~60%. The funding dashboard becomes a management tool Dave references weekly.

---

**Persona 3: Sarah — The Early Adopter and Community Influencer**

Sarah runs a 2-tech HVAC business in Atlanta, is 38, and is unusually technology-forward for her segment. She posts frequently on r/sweatystartup about business tools and has 850 followers on a "small HVAC business" Instagram account. She tried Hearth, paid the $1,499, and found the annual billing frustrating during her slow winter months. She churned after 14 months.

Sarah represents the early adopter who, if delighted, becomes a powerful distribution channel. Her review on Reddit or a demo video on her Instagram could drive hundreds of signups.

**Success for Sarah:** The mobile UX is good enough to demo on her phone to her followers. Responsive support when she has a question. The ability to cancel or pause month-to-month without penalty.

---

### Secondary Users

**The Customer (End Homeowner)**
The customer is not a "user" of the product in the traditional sense — they receive an SMS link and interact with Wisetack's application form directly. But their experience matters critically: if the Wisetack application flow is confusing or the approval takes too long, contractors will blame the widget. The experience must be:
- SMS link that opens cleanly on any smartphone
- Wisetack's application completing in under 5 minutes
- Approval decision returning in under 10 minutes
- Monthly payment options clearly displayed

**Trade Association Members (Referral Channel)**
ACCA (60,000 member businesses) and PHCC (65,000 members) represent significant distribution channels through newsletter endorsements or affiliate programs. These are institutional relationships, not individual users, but their blessing provides credibility and distribution scale.

---

### User Journey

**Discovery → Awareness:**
Mike sees a peer post on r/sweatystartup: "I've been using [FieldFund] for 3 months, closed 6 jobs I would have lost without it, paid for itself in the first week." He clicks through to the landing page.

**Consideration → Evaluation:**
He watches the 2-minute demo video on the landing page showing the full field workflow (estimate → SMS → approval → job close). He reads 5–6 testimonials. He sees the pricing: $49/month or $149 LTD. He thinks: "Even if this only closes one extra $5,000 job, it's paid for itself for 8 years."

**Decision → Signup:**
He signs up for the $149 LTD or starts a $49/month trial. Onboarding asks: business name, trade (HVAC/plumbing/electrical), phone number for SMS sending, bank account for Wisetack payouts. Wisetack onboarding takes 5–10 minutes. He's live within 20 minutes.

**First Value Moment (The "Aha!" Moment):**
The first time he sends a financing link and the customer gets approved — the job closes on the spot. This is the moment the product "works." Everything before this is acquisition; everything after this is retention. The product must make this first funded job happen within the first 2 weeks.

**Long-term Retention:**
The funded jobs dashboard becomes a daily or weekly touchpoint. Mike checks it to see how many financed jobs he's closed and the total dollar volume. He's proud of the number. He tells peers. He becomes the community voice that drives organic referrals.

---

## Success Metrics

### User Success Metrics

**North Star Metric: Total funded loan volume through the platform**

This is the single metric that proves the product is working. It aligns with Wisetack's incentives (their revenue share scales with volume), it aligns with contractor value (more funded jobs = more revenue for them), and it is directly measurable via Wisetack's webhook API. A contractor who has funded $50,000 in jobs through the platform is not churning.

**Leading Indicators (predict funded volume):**
- Time to first financing link sent (target: within 48 hours of account creation)
- Time to first funded job (target: within 14 days of signup)
- Financing links sent per active contractor per month (target: 8+)
- Approval rate per contractor (target: 70%+ weighted approval across all links sent)

**User Satisfaction Indicators:**
- In-app NPS after first funded job (target: 9+/10)
- Support ticket rate per active contractor (target: <2 tickets/month)
- Monthly active rate for contractors beyond 90 days (target: 70%+)

---

### Business Objectives

**6-Month Objectives:**
1. Achieve 200+ paying customers (LTD + monthly combined)
2. Process $1M+ in funded loan volume
3. Generate $15,000–$30,000 in SaaS/LTD revenue
4. Generate $5,000–$10,000 in Wisetack revenue share from funded volume
5. Secure 10+ documented contractor testimonials with specific revenue impact

**12-Month Objectives:**
1. Achieve 500+ paying monthly subscribers
2. Process $5M+ cumulative funded loan volume
3. Reach $25,000–$35,000 MRR from subscriptions
4. Reach $3,000–$8,000/month from Wisetack revenue share
5. Achieve <5% monthly churn rate
6. Be present in top 3 search results for "HVAC contractor financing app"

**18-Month Objectives:**
1. Reach $50,000+ MRR from combined subscription + revenue share
2. Expand to adjacent trades (electrical, roofing)
3. Launch website embed widget (secondary distribution for inbound leads)
4. Establish trade association partnership (ACCA or PHCC) for distribution

---

### Key Performance Indicators

| KPI | Target (3mo) | Target (6mo) | Target (12mo) | Measurement |
|-----|-------------|-------------|--------------|-------------|
| Paying customers | 75 | 200 | 500+ | Account records |
| Monthly funded volume | $200K | $600K | $2M+ | Wisetack webhook |
| Cumulative funded volume | $300K | $1M | $5M+ | Wisetack webhook |
| MRR (subscriptions) | $4,000 | $12,000 | $30,000 | Stripe |
| Revenue share income | $500 | $2,000 | $5,000/mo | Wisetack partner dashboard |
| Time to first funded job | <14 days | <10 days | <7 days | App event tracking |
| Monthly churn rate | <10% | <7% | <5% | Stripe |
| Financing link approval rate | 70%+ | 75%+ | 78%+ | Wisetack API |
| Contractor NPS (post-first-fund) | 8+ | 8.5+ | 9+ | In-app survey |
| Organic referral rate | 15% | 20% | 30% | Signup attribution |

**Revenue Model Validation Gates:**

- *LTD model valid if:* 200+ LTD units sold in first 6 months at $149+ average = $30,000+ upfront
- *SaaS model valid if:* Monthly churn stays below 5% after month 3 (indicates contractors are using the product consistently, not just signing up and forgetting)
- *Revenue share model valid if:* Wisetack revenue share reaches $2,000+/month by month 6 (indicates meaningful funded volume; validates the long-term economic model)

---

## MVP Scope

### Core Features

The MVP must deliver one thing: a contractor sends a financing link from their phone to a customer and the customer gets approved while the tech is still on-site. Every other feature is Phase 2.

**Feature 1: Contractor Account Setup**
- Business name, trade type (HVAC/plumbing/electrical), contact info
- Wisetack onboarding connection (OAuth flow to link Wisetack merchant account)
- Bank account connection for Wisetack payouts
- SMS sender number provisioning (Twilio)
- Target: Complete in under 20 minutes

**Feature 2: Estimate Creation + Financing Link Generation**
- Mobile-first estimate form: customer name, job description, total amount
- "Send Financing Link" button generates Wisetack pre-qual URL
- SMS delivery to customer's phone number (entered by tech)
- Confirmation message shown to tech: "Financing link sent to [customer name]"
- Target: Under 60 seconds from estimate entry to SMS sent

**Feature 3: Application Status Tracking**
- Tech and contractor see real-time status: Sent → Applied → Approved / Declined
- Push notification when customer is approved
- Simple funded status: "Job Closed — $X financed, payout in 1–3 business days"
- Target: Status visible within seconds of customer action via Wisetack webhook

**Feature 4: Funded Jobs Dashboard**
- Running list of all financing links sent (date, customer, amount, status)
- Total funded volume counter (e.g., "You've funded 12 jobs worth $51,200")
- Monthly funded volume (for revenue share tracking)
- Target: Visible after first login; primary retention surface

**Feature 5: Basic Account Management**
- Password reset, business info editing
- Subscription management (upgrade, cancel, billing history)
- Simple support contact (email or chat widget)

---

### Out of Scope for MVP

The following are explicitly deferred to Phase 2 or later. Including any of these in MVP would extend build time beyond the 3–4 week target and delay market validation:

- **Multi-lender / second-look flow** (Fortiva, FTL Finance for Wisetack declines) — Wisetack's 80% approval rate is sufficient for MVP validation; second-look lender integration adds compliance complexity
- **Team/multi-technician accounts** — Solo operator validation first; team features add auth complexity
- **Website embed widget** — Valuable, but requires JS embed, CORS configuration, and a separate customer-facing UX; not in-field use case
- **CRM or FSM integration** (Jobber, QuickBooks, etc.) — Standalone simplicity is the MVP value proposition; integrations come after proving standalone demand
- **Estimate PDF generation** — SMS financing link is the MVP; PDF estimates are a Phase 2 upsell
- **Partial financing flows** (split between Wisetack amount and customer gap) — Edge case for MVP; covers 80% of use cases without it
- **iOS native app / Android native app** — PWA covers MVP; native app development adds 4–6 weeks
- **Branded financing widget** (contractor's logo in Wisetack flow) — Nice-to-have; not a day-1 requirement
- **HVAC/plumbing-specific job templates** — Friction reducer, not core; MVP accepts free-text job descriptions

---

### MVP Success Criteria

The MVP is successful and ready to scale when all of the following are true:

1. **Core workflow validated:** 20+ contractors have sent financing links and 15+ have had at least one funded job within the first 60 days of public availability
2. **Satisfaction threshold:** Post-first-funded-job NPS averages 8+/10 from the first 20 respondents
3. **Workflow speed confirmed:** 90% of financing links are sent within 60 seconds of the tech entering estimate details (measured via app event log)
4. **LTD demand validated:** 50+ LTD units sold within 30 days of public launch with no paid advertising (organic community launch only)
5. **Churn signal absent:** Zero cancellations from customers who have at least one funded job within their first 30 days (funded customers don't churn — this is the key retention signal)
6. **Technical reliability:** Wisetack webhook status updates deliver correctly in 99%+ of cases; SMS delivery rate 98%+

**Go/No-Go decision point (Day 60):**
- If criteria 1–3 are met: proceed to Phase 2 (team accounts, second-look lender, website widget)
- If criteria 4 is met but 1–3 are not: investigate workflow friction; fix before scaling
- If no criteria are met: run 5 user interviews to understand failure mode before pivoting

---

### Future Vision

**Phase 2 (Months 4–9): Expanding the Core**
- Multi-technician team accounts (3–5 techs per shop, shared dashboard)
- Second-look lender integration (Fortiva/FTL for Wisetack declines, boosting approval rate to 90%+)
- Website embed widget (embeddable "Apply for Financing" button for shop websites)
- Hearth-to-FieldFund migration path (explicit messaging for contractors frustrated by Hearth's annual lock-in)
- Estimate PDF generation with financing option embedded

**Phase 3 (Months 10–18): Platform and Ecosystem**
- Adjacent trades expansion: electrical (panel replacements $5,000–$25,000), roofing ($10,000–$30,000), windows/doors ($8,000–$25,000), garage doors ($1,500–$5,000)
- Light CRM features: customer contact history, follow-up reminders for declined applications
- ACCA/PHCC trade association co-branded version for member distribution
- API for other small FSM tools (Invoice Ninja, Knowify) to embed financing without building their own Wisetack integration

**Phase 4 (Years 2–3): Market Leader Position**
- "Instant approval link" — soft-check pre-qualification shows estimated monthly payment before customer formally applies (removes application hesitation)
- AI-powered job ticket optimization: suggests optimal financing amount based on job type and historical approval rates
- Geographic expansion: Canada (similar regulatory structure, underserved by US-centric tools)
- Acquisition potential: Wisetack, Hearth, or a major FSM platform acquires the product as a distribution/acquisition channel for their ecosystem

**The 3-Year Vision:**
FieldFund becomes the default financing layer for trades contractors who are not using a major FSM platform — a category of ~60,000–80,000 shops today that grows as the trades continue to digitize. Revenue from subscriptions, revenue share on $500M+ in annual funded loan volume, and potential strategic acquisition value from FSM players who want to expand their market reach downmarket.

---

## Competitive Positioning Summary

| Dimension | FieldFund | Hearth | HousecallPro + Wisetack | ServiceTitan |
|-----------|-----------|--------|------------------------|--------------|
| Monthly cost | $49–$79/month | $125–$150 (annual only) | $59–$169/month | $245–$398/tech |
| Annual commitment | None | $1,499–$1,799 | None | Contract required |
| FSM required | No | No | Yes (HCP) | Yes (ST) |
| Lender network | Wisetack + 2nd look | 17–18 lenders | Wisetack only | Multi-lender |
| Mobile-first in-field | Yes (core UX) | Partial | Partial | Yes (enterprise) |
| LTD option | Yes ($149–$299) | No | No | No |
| Target segment | 1–5 tech shops | 1–10 tech shops | 1–10 tech shops | 5+ tech shops |
| Setup time | <20 minutes | Hours (annual contract) | Bundled with HCP setup | Weeks (onboarding) |

**Positioning Statement:** "FieldFund is the fastest way for HVAC and plumbing contractors to offer customer financing — no annual contracts, no platform switching, no IT department. If you can send a text, you can close a financed job."

---

## Distribution and Go-to-Market

### Channel Priority (MVP Launch)

**Tier 1 — Organic Community (Zero cash cost, highest conversion):**
- r/sweatystartup (194K members): Authentic peer posts with documented ROI from beta users
- r/HVAC (226K members): Demo posts and responses to "how do you handle financing?" threads
- r/Plumbing (181K members): Same approach as HVAC
- Facebook groups: "HVAC Business Owners," "Plumbing Business Owners," Tommy Mello's Home Service Expert community

**Tier 2 — Content and Demo (Low cost, trust-building):**
- 2-minute demo video on YouTube showing complete field workflow
- Sponsored segment on HVAC School podcast (300K+ subscribers) or HVAC Shop Talk
- Case study content: "How [Beta Contractor] added $72,000 in revenue with one workflow change"

**Tier 3 — AppSumo LTD (Upfront capital + brand awareness):**
- $149 Tier 1 (1 technician, unlimited jobs) / $249 Tier 2 (up to 5 technicians)
- Target: 1,000+ LTD units = $149,000–$249,000 upfront to fund development
- AppSumo audience is less targeted than trades Reddit/Facebook, but provides capital and social proof

**Tier 4 — Institutional (Slower, high credibility):**
- ACCA and PHCC newsletter editorial placement
- Nexstar Network / Service Roundtable referral partnerships
- ACCA/PHCC conference presence (year 2)

### Launch Sequence

**Week 1–4 (Private Beta):**
Recruit 15–20 beta contractors from r/sweatystartup and r/HVAC with a direct message offer: free lifetime access in exchange for documented feedback and one testimonial with real numbers. Target: 15 funded jobs, 10 testimonials.

**Week 5–8 (Soft Launch):**
Post the beta results (funded jobs, dollar amounts with permission) in r/sweatystartup and r/HVAC. Offer $149 LTD for the first 50 purchasers. Create demo video from real beta footage. Target: 50 LTD sales, $7,500 revenue.

**Week 9–16 (AppSumo Launch):**
Submit to AppSumo with 5+ verified reviews and case study content. Run AppSumo promotion. Target: 500–1,000 LTD units, $75,000–$150,000 upfront.

**Month 5+ (SaaS Growth):**
Launch $49/month and $79/month recurring plans. Focus on LTD-to-SaaS conversion for team features. Build SEO content around "HVAC contractor financing app," "how to offer financing HVAC," "Hearth alternative."

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Wisetack builds standalone widget | Medium | High | Formalize partnership early; multi-lender differentiation |
| Hearth eliminates annual lock-in | Low-Medium | Medium | Mobile UX + no-FSM-required positioning still differentiates |
| Regulatory licensing required | Low | High | Wisetack partnership includes compliance clearance; legal review at launch |
| Small shop churn (low volume of large jobs) | Medium | Medium | Onboarding ROI framing; first-funded-job guarantee |
| Slow Wisetack partnership approval | Low-Medium | Medium | Build basic Wisetack integration via public API while partnership negotiates |
| AppSumo LTD underperforms | Low | Medium | Community launch is primary; AppSumo is upside, not dependency |

---

## Implementation Prerequisites

Before MVP build begins:

1. **Apply to Wisetack Partnership program** at wisetack.com/partnerships — this unlocks the revenue share economics and formal integration support. Estimated 1–2 week response time.
2. **Legal review** — confirm SaaS-as-technology-vendor posture is correct in CA, TX, GA (most active consumer finance regulation states). Budget: 2–4 hours with a startup attorney.
3. **Beta contractor recruitment** — post on r/sweatystartup and r/HVAC immediately, before MVP is built, to have 10–15 contractors waiting when beta is ready.
4. **Twilio account setup** — for SMS delivery; straightforward with immediate API access.

---

*Product Brief — Trades Customer Financing Integration*
*Prepared: 2026-05-08*
*Research basis: ACCA Contractor of the Future Study (n=1,000+); IBISWorld HVAC market data; Wisetack partnership documentation; Hearth pricing pages; live competitor analysis*
*Next step: Create PRD (Product Requirements Document) using this brief as foundation*

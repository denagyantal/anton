---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/pricing-coach-overhead-calculator-solo-tradespeople.md
  - _bmad-output/planning-artifacts/research/market-trades-pricing-overhead-coach-research-2026-10-24.md
  - _bmad-output/planning-artifacts/brief-trades-pricing-overhead-coach.md
workflowType: prd
lastStep: step-12-complete
user_name: Root
date: 2026-10-25
classification:
  projectType: saas_b2c
  domain: small_business_tools
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — RateFix

**Author:** Root
**Date:** 2026-10-25
**Product:** RateFix — Pricing Coach & Overhead Calculator for Solo Tradespeople
**Version:** 1.0

---

## Executive Summary

Solo tradespeople — plumbers, HVAC technicians, electricians, and roofers operating with 0–1 employees — are chronically underpriced because they have never formally calculated their true overhead or minimum viable hourly rate. They copy competitors, use gut feeling, and end up "busy but broke": fully booked but unable to pay themselves what their labor is worth. This is a perennial, documented pain point affecting 400,000–600,000 solo trade operators in the US, with an 82% construction business failure rate traceable directly to poor cash flow rooted in underpricing.

**RateFix** is a mobile-responsive web application built around a guided 8–12 step onboarding wizard that collects trades-specific overhead inputs and produces a personalized minimum billable rate with regional benchmark context and plain-English coaching interpretation. It is the only dedicated SaaS product that takes a solo tradesperson from zero — no formal rate set, no overhead understanding — to a defensible minimum viable hourly rate in under 15 minutes.

The core value proposition is precise: most solos undercount overhead by 30–50%, primarily by excluding owner salary, true vehicle costs, tool depreciation, non-billable time, and close rate from their calculations. RateFix's wizard surfaces each of these gaps in sequence, turning a conceptually complex calculation into a guided conversation. The output is a minimum rate, a suggested rate, a regional benchmark comparison, a "what if I raise my rate" simulator, and a coaching callout naming the 1–2 most impactful mistakes the user is making.

The business case is grounded: a $49–$79 LTD priced below a single month of Jobber subscription. Converting 1% of the 400,000–600,000-person SAM to LTD buyers generates $200,000–$300,000 upfront. Phase 2 actuals tracking at $19/month creates the MRR layer, targeting $20,000+ MRR within 24 months. The ROI story sells itself: "One job priced right pays for this tool forever."

### What Makes This Special

No SaaS product in the $0–$99 range exists that provides a guided wizard taking a solo tradesperson through their actual cost structure, outputs a defensible minimum rate, and provides regionally-contextualized benchmark data. Existing solutions fall into three failing categories:

1. **Free static calculators** (RateTicket, Fergus Rate Calculator) — blank forms requiring the user to already know what to input; no trades-specific inputs (close rate, tool depreciation, seasonality); no regional benchmarks; no saved state; no coaching interpretation.
2. **Full FSM platforms** (Jobber, Housecall Pro, ServiceTitan) — solve scheduling and invoicing, not "what should my rate be in the first place"; $29–$400+/month; inaccessible for solos.
3. **Flat-rate price book software** (Profit Rhino, The New Flat Rate) — answer "what do I charge for this specific task?" not "what's my cost floor?"; $100+/month; targeted at multi-tech shops.

RateFix's specific differentiators are the close rate input (the only calculator that accounts for unbillable estimating time), regional BLS OEWS benchmarks at the state level, wizard UX with smart defaults versus blank-form anxiety, and coaching interpretation that names specific mistakes rather than just outputting a number.

**Why now:** Material prices, insurance, and fuel have climbed 20–40% faster than most contractors' bids have adjusted. 25% of builders generated no net profit in 2025. The urgency to recalculate rates is at peak volume — visible in r/sweatystartup (500K+ members) where pricing threads dominate weekly activity.

## Project Classification

- **Project Type:** SaaS B2C web application (mobile-responsive, wizard-first)
- **Domain:** Small business tools / trades business management
- **Complexity:** Medium — no regulated data (no HIPAA/PCI for core MVP), but requires benchmark data curation, regional data sourcing, and Phase 2 financial tracking
- **Project Context:** Greenfield — no existing product or codebase
- **Primary Distribution:** Direct web + AppSumo LTD launch + community-led growth (r/sweatystartup, trade subreddits, trade Facebook groups)

---

## Success Criteria

### User Success

Users succeed when they raise their effective hourly rate after using RateFix. The leading indicator is the "aha moment": users whose calculated minimum rate exceeds their current rate by a meaningful margin, presented clearly enough that they act on it.

**User success indicators (measurable):**
- Wizard completion rate ≥ 70% — users who start, finish (UX clarity and perceived value)
- Results screen dwell time ≥ 3 minutes — users reading and engaging with output (coaching layer quality)
- Rate gap discovery rate ≥ 60% — percentage of users whose calculated minimum exceeds current rate (validates underpricing is real and tool surfaces it)
- Email save rate ≥ 30% of completions — users want to return to their results (perceived long-term value)
- 30-day return rate ≥ 20% — users come back to update inputs or check actuals
- ≥ 3 unprompted testimonials within 90 days documenting a real rate increase — outcome validation

**User success definition:** A user succeeds when they complete the wizard, discover a rate gap, and use RateFix's output as the basis for raising their rate. The downstream outcome — earning more per hour — is the true measure, captured through testimonials and NPS.

### Business Success

**90-day post-launch targets (MVP validation gate):**
- 500+ wizard completions
- 100+ LTD purchases
- $25,000–$50,000 gross LTD revenue
- 25+ G2/Capterra reviews at ≥ 4.3 stars average
- NPS ≥ 45

**12-month targets:**
- 1,000–2,000 LTD buyers across AppSumo and direct
- Phase 2 live; 200+ monthly subscribers at $19/month = $3,800+ MRR
- 10+ trade-specific SEO pages; 1,000+ monthly organic visitors
- Active presence in r/sweatystartup and 2–3 trade subreddits as the recognized pricing tool

**24-month targets:**
- $20,000+ MRR from Phase 2 subscriptions
- 5,000+ LTD buyers total
- 1 industry association distribution partnership signed
- Anonymous benchmark dataset ≥ 1,000 data points per trade per region

**North Star Metric:** Cumulative "rate gaps discovered" — the aggregate underpricing surfaced across all users (e.g., "RateFix has helped 10,000 tradespeople discover they were undercharging by an average of $22/hr").

### Technical Success

- Wizard completion flow functions on mobile (iOS/Android Chrome/Safari) without layout breakage
- Results calculations are correct and auditable — the formula logic must match the stated overhead model and be verifiable against manual calculation
- BLS OEWS benchmark data loads correctly by state and trade
- Email capture and results save/retrieval round-trip works reliably
- Stripe LTD checkout completes without errors at ≤ 3% drop-off
- Page load time ≤ 2 seconds on 4G mobile (initial load); wizard step transitions ≤ 500ms

### Measurable Outcomes

| KPI | Target | Measurement | Timeframe |
|-----|--------|-------------|-----------|
| Wizard completion rate | ≥ 70% | In-app funnel analytics | Monthly |
| Email capture rate | ≥ 30% of completions | Email tool | Monthly |
| LTD buyers | 100 (Day 90), 2,000 (Month 12) | Stripe | Monthly |
| AppSumo launch revenue | $25,000–$75,000 gross | AppSumo dashboard | 60 days post-launch |
| G2/Capterra rating | ≥ 4.3 stars (Day 90), ≥ 4.5 (Month 12) | Review platforms | Ongoing |
| NPS | ≥ 45 (Day 90), ≥ 50 (Month 12) | Post-session survey | Monthly |
| MRR (Phase 2) | $3,800 (Month 12), $20,000 (Month 24) | Stripe | Monthly |
| Organic traffic | 1,000 monthly visits (Month 12) | Analytics | Monthly |
| Support tickets | ≤ 5 per 100 MAU/month | Support tool | Monthly |

**Go/no-go gate at Day 90:** If ≥ 3 of the 6 MVP validation criteria are met, proceed to Phase 2. If fewer than 3, run a structured root-cause sprint before committing Phase 2 investment.

## Product Scope

### MVP — Minimum Viable Product (Weeks 1–6)

The MVP delivers the core promise: wizard → minimum rate → benchmark context → purchase path. Everything else is deferred.

**Must-have capabilities:**
1. Trade-specific onboarding wizard (plumber, HVAC, electrician, roofer) with 8–12 steps
2. Smart defaults for every field by trade and state — no blank-form anxiety
3. Calculation engine outputting minimum rate, suggested rate, and annual impact
4. Results dashboard with rate health check, regional benchmark, and "what if" simulator
5. Coaching callout identifying 1–2 specific pricing mistakes for this user
6. Current-rate input and gap display ("you're underpricing by $X/hr = $Y/year")
7. Email capture with results save and welcome sequence
8. Stripe LTD checkout ($49 tier 1 / $79 tier 2) with AppSumo code redemption
9. State-level BLS OEWS benchmark data for all 4 trades
10. Mobile-responsive layout (primary users are on phones)

### Growth Features (Phase 2, Months 4–8)

- Monthly actuals logging: jobs count + average invoiced amount
- Rate gap dashboard: "You targeted $125/hr; last 30 days averaged $98/hr — you left $X on the table"
- Seasonal flagging: proactive alerts in slow months to adjust emergency/priority rates
- Annual overhead review prompts: "Your insurance renewed — update your inputs"
- $19/month subscription tier for ongoing actuals tracking
- QuickBooks Online data pull (optional OAuth) to auto-populate actuals

### Vision (Phase 3–4, Months 9–18+)

- Jobber API integration: pull job data directly to power actuals dashboard without manual logging
- Anonymous benchmark crowdsourcing: opt-in rate contribution for metro-level granularity beyond BLS
- Job-type pricing intelligence: separate rate floors for service calls, installs, emergency, contract work
- PHCC / ACCA / IEC association co-branding and member distribution
- Geographic expansion: Australia/NZ, UK
- Adjacent trades: landscaping, pressure washing, handyman, pool service, pest control
- Lightweight solo trade financial OS: rates + overhead efficiency + annual income tracking on one screen

---

## User Journeys

### Journey 1: Marcus — The Recently-Independent HVAC Tech (Primary Success Path)

Marcus is 34, left a HVAC company 6 months ago to go solo. He set his rate at $85/hr because "that's what my old company was charging." He's booked solid but his bank account looks worse than when he had a salary. He hasn't accounted for his health insurance, truck payment, or the 3 hours/day he spends driving between jobs and answering quotes that don't convert.

**Opening Scene:** Marcus is at the end of a busy month, frustrated. He types "how much should I charge as HVAC tech" into Google while sitting in his truck between jobs. He lands on RateFix.

**Rising Action:** The headline — "Stop guessing what to charge. Get your minimum billable rate in 15 minutes." — resonates immediately. He taps "Get My Rate" on mobile. The wizard asks his trade (HVAC). It pre-fills "most HVAC techs in your state start at $85/hr — let's calculate yours." First question: "What's your target take-home pay this year?" — easy. Then vehicle costs (he fills in his truck payment), then tools, then business overhead. He gets to close rate and it asks: "What % of your quotes turn into jobs?" He types 40%. The wizard explains: "So you spend unbillable time on the 60% that don't convert — that time belongs in your rate." He's never thought about it this way.

**Climax:** Results screen. Minimum viable rate: $117/hr. Suggested rate: $128/hr. Current rate: $85/hr. The gap: "You are underpricing by $32/hr. At your current volume (1,200 billable hours/year), that's $38,400/year left on the table." Red traffic light. Benchmark: "HVAC techs in your state charge $95–$145/hr on average." Coaching callout: "Your biggest gap is non-billable time — you're assuming 80% billable efficiency; most solo HVAC techs bill 58-65%. That single adjustment adds $21/hr to your minimum rate."

**Resolution:** Marcus enters his email to save results. He gets the "5 Common Pricing Mistakes" PDF in his inbox. He reads it during lunch. He raises his rate to $115/hr, loses 2 price-sensitive customers, gains 3 better commercial accounts, and ends the year $28,000 ahead of where he was. He leaves a G2 review.

**Requirements revealed:** Trade-specific wizard with smart defaults; close rate input with coaching context; non-billable time estimate with trade benchmarks; gap calculation in dollars/year; email save; coaching callout with named mistake.

---

### Journey 2: Sandra — The Established Plumber Who Needs Permission (Emotional Block Path)

Sandra is 47, running a solo plumbing business for 11 years. She charges $95/hr. Her insurance went up 30% last year, she bought a new truck, but she hasn't recalculated. She's psychologically blocked from raising rates because she fears losing her loyal customer base. She needs objective proof that her costs genuinely require a higher rate.

**Opening Scene:** Sandra's accountant tells her during tax prep that her effective hourly was $64 after expenses last year. She goes home, finds a thread in a women-in-trades Facebook group where someone mentions RateFix.

**Rising Action:** She's skeptical — "another tool trying to sell me something." But the landing page says "free to calculate your rate" and she doesn't need to register to start. She enters her inputs carefully, double-checking each number against her QuickBooks reports. She pauses at the "desired profit margin" step — she's never thought about this explicitly. The benchmark note helps: "Healthy plumbing businesses target 15–25% net margin."

**Climax:** Her minimum rate: $126/hr. Suggested rate: $138/hr. Current rate: $95/hr. Annual gap: $37,200. The coaching callout: "You excluded your truck depreciation from overhead — a common mistake. Your 2024 F-250 at $52,000 over 8 years = $6,500/year that should be in your rate." She prints the results. This is the external validation she needed.

**Resolution:** Sandra shows the RateFix printout to two long-term customers when raising her rate. "My costs have increased significantly — this is the calculation." Both stay. She raises to $118/hr — not all the way to suggested, but a meaningful step. She upgrades to Tier 2 ($79 LTD) for actuals tracking because she wants to verify she's actually hitting the new rate in practice.

**Requirements revealed:** Print/save results; specific named coaching callout (truck depreciation example); rate increase framing language ("recalibrating for current costs"); Tier 2 upgrade path from results screen.

---

### Journey 3: Derek — The New Licensee Setting His First Rate (Anxiety Path)

Derek is 26, just got his electrician's license, about to start his first solo business. No rate set, no business structure, maximum anxiety. He's Googling "how much to charge as an electrician" and getting contradictory answers ($65–$200/hr national range).

**Opening Scene:** Derek finds RateFix on the second page of Google results for "electrician hourly rate calculator." The URL looks credible, not a generic blog post.

**Rising Action:** He's worried the wizard will require business data he doesn't have yet. But the first field has a default: "We've pre-filled typical values for a new electrician in your state — update anything you know." He doesn't have a truck payment yet (leasing equipment to start) — there's a "renting tools" option. For target salary, he's honest: $65,000. The close rate question is intimidating — "I don't have any quotes yet." The tooltip says: "For new businesses, we use the industry average of 43%. Update this once you have data."

**Climax:** His calculated rate: $78/hr minimum, $89/hr suggested. Benchmark: "Electricians in your state charge $75–$120/hr." He expected to be told $65/hr (what he'd assumed). The tool explains: "At $65/hr, you would underpay yourself by $18,000/year after expenses. Starting right sets the foundation."

**Resolution:** Derek sets $90/hr as his starting rate — higher than he would have guessed, grounded in real numbers. He converts his first 3 jobs at that rate without pushback. He tells his trade school peers about RateFix. Three of them use it before their first jobs.

**Requirements revealed:** Smart defaults for new businesses; tooltips explaining each input; "I don't have this data yet" graceful defaults; results framing that validates a higher starting rate rather than confirming low assumptions.

---

### Journey 4: Admin / Operator (Account Management Path)

The founder/operator of RateFix monitors key metrics: wizard completion funnel, LTD conversion rates, email sequence performance, support tickets, and benchmark data freshness.

**Rising Action:** In month 3, the operator notices completion rate is 68% overall but drops to 51% at the "close rate" step. This is a friction point — users don't know what to enter and the tooltip isn't sufficient. The operator updates the step to include a pre-filled default with a clearer explanation and a "use industry average" button.

**Requirements revealed:** Admin analytics dashboard (wizard step funnel by step); ability to update default values and tooltip text without code deploys; benchmark data management interface for annual BLS data refresh; LTD code management for AppSumo integration.

### Journey Requirements Summary

**Capabilities revealed by journeys:**

| Capability | Revealed By |
|------------|-------------|
| Trade-specific wizard with smart defaults | All primary journeys |
| Close rate input with coaching context | Marcus, Derek |
| Non-billable time estimate with benchmarks | Marcus |
| Dollar-year gap calculation | All primary journeys |
| Coaching callout with named mistake | All primary journeys |
| Email save + results persistence | Marcus, Sandra |
| Print/export results | Sandra |
| Tier 2 upgrade path on results screen | Sandra |
| "No data yet" defaults with tooltips | Derek |
| Admin step-level funnel analytics | Admin journey |
| Benchmark data management | Admin journey |
| AppSumo code redemption | Admin journey |

---

## Domain-Specific Requirements

RateFix operates in the small business tools domain with medium complexity. No healthcare or financial regulation applies to the core MVP (overhead calculation is not financial advice in a regulated sense). However, several domain-specific constraints shape the product:

### Data Accuracy & Calculation Integrity

The minimum rate calculation is the product's primary deliverable. Inaccurate results destroy trust and can cause material harm if a user raises rates based on wrong math.

- All calculation logic must be documented and testable as pure functions, independent of UI
- Formula: `minimum_rate = (annual_overhead + target_salary + se_tax) / (annual_hours × billable_rate × close_rate)`
- Each wizard input must propagate correctly to the final calculation with no rounding errors until display
- Results must be reproducible: the same inputs must always yield the same outputs
- Benchmark data must cite source (BLS OEWS, year) to establish credibility and allow auditability

### Benchmark Data Sourcing & Maintenance

BLS OEWS (Occupational Employment and Wage Statistics) data is the benchmark source. This is publicly available, updated annually, and provides state-level wage data for the 4 target trades.

- BLS OEWS state-level data must be loaded for all 50 states for: plumbers (SOC 47-2152), HVAC mechanics (SOC 49-9021), electricians (SOC 47-2111), roofers (SOC 47-2181)
- Data displayed as ranges (10th–90th percentile or 25th–75th percentile) to reflect reality
- Year of data must be displayed to user ("Source: BLS OEWS 2024")
- Annual data refresh process required when new BLS data is published (typically November)
- Graceful degradation if state has insufficient data: fall back to regional or national average with note

### Privacy & Data Handling

Users enter financial information (salary targets, business overhead costs). This is sensitive but not regulated in the same way as health or payment card data.

- Wizard inputs are stored only if user provides email (opt-in save); anonymous sessions are not persisted beyond session
- Email addresses are used only for: results delivery, drip sequence, and (with consent) product updates
- No selling of user data to third parties
- Clear disclosure: "Your rate data is private — we never share individual calculations"
- GDPR-ready email consent for future EU expansion (checkbox, explicit consent)

### Mobile-First Trade Context

Primary users (Marcus archetype) access on smartphones, often between jobs or in their truck.

- All wizard steps must complete without horizontal scrolling on 375px viewport (iPhone SE minimum)
- Numeric inputs must trigger numeric keyboard on mobile (not text keyboard)
- Touch targets ≥ 44px per Apple HIG
- Wizard must survive interruptions: user leaves app mid-wizard, returns, and finds state preserved in localStorage for ≥ 24 hours

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Close Rate Integration in Rate Calculation**

No existing hourly rate calculator (general or trades-specific) incorporates close rate as an input to the overhead calculation. This is a genuine gap: if a tradesperson quotes 10 jobs and wins 4, they spend unbillable time on 6 lost quotes — that time cost belongs in the rate, and the standard formula doesn't capture it. Incorporating close rate changes the minimum rate calculation and is one of the most distinctive coaching moments in the wizard.

Validation approach: A/B test the wizard with and without the close rate step. Measure whether including it increases the calculated rate gap (it should for most users), and whether the explanation of why it matters drives the "aha moment" on the results screen.

**Coaching Interpretation Layer**

Most calculators output a number. RateFix outputs a number with a named explanation of why the user's current rate is wrong and which specific input is the primary driver. This coaching interpretation layer — "your biggest gap is non-billable time; correcting just that assumption adds $21/hr to your minimum rate" — transforms a calculator into an advisor. This is a UX innovation in a category that has never had it.

Validation approach: Track results screen dwell time and email save rate as proxies for whether the coaching layer creates additional perceived value. Survey first 100 users specifically about the coaching callout.

### Market Context

The "busy but broke" problem for solo tradespeople is the #1–3 recurring pain point in r/sweatystartup (500K+ members), r/Plumbing, r/HVAC, r/electricians. Market timing is strong: 25% of builders had zero net profit in 2025, 74% experienced cash flow challenges in 2024. The community conversation is at peak volume, making organic distribution viable without paid acquisition for the initial LTD launch.

### Validation Approach

- **Wizard completion rate ≥ 70%** validates that the wizard UX is differentiated enough from blank-form alternatives to retain users through the full flow
- **Rate gap discovery rate ≥ 60%** validates that the calculation model surfaces underpricing that users didn't already know about
- **Post-purchase rate increase testimonials** within 60 days validate that the tool creates real behavior change, not just insight

---

## SaaS Web Application — Specific Requirements

### Application Architecture

RateFix is a mobile-first web application with wizard-centric UX. The architecture must support:

- **Client-rendered wizard** with step-by-step navigation, local state management between steps, and no full-page reloads between wizard steps (smooth transition UX)
- **Calculation engine** that runs client-side for instant results (no server round-trip on results screen); server-side calculation validation on save as a backstop
- **Benchmark data** served from a static data store (JSON/CSV loaded at session start by state and trade); no real-time API call required for MVP
- **Authentication** is email-based (magic link or OTP) for results save; no password authentication for MVP
- **Payments** via Stripe Checkout (hosted page redirect); no custom payment form in MVP

### Multi-Tenancy and Accounts

MVP is single-user (one account = one trade, one set of inputs). No team/multi-user accounts in MVP.

Account model:
- Email = account identifier
- Account stores: saved wizard inputs, calculated results, trade selection, state selection
- One active calculation per account (can overwrite to update inputs)
- Phase 2 adds actuals log records linked to account

### Integration Requirements

**MVP integrations:**
- **Stripe** — LTD checkout ($49 / $79 tiers), webhook for purchase confirmation, access unlock
- **Email service** (SendGrid / Postmark) — transactional emails (results save, welcome, drip sequence), accessed via API
- **AppSumo** — code redemption flow; codes unlock Tier 1 or Tier 2 access

**Phase 2 integrations (post-MVP):**
- QuickBooks Online OAuth for actuals auto-population

**No integrations required for MVP:** Jobber, ServiceTitan, any field service management platform.

### Pricing and Access Tiers

| Tier | Price | Access |
|------|-------|--------|
| Free | $0 | Run wizard once, see results (no save, no return) |
| Tier 1 LTD | $49 | Full wizard + regional benchmarks + saved results + email drip |
| Tier 2 LTD | $79 | All of Tier 1 + Phase 2 actuals tracking when launched |
| Monthly | $19/mo | All of Tier 2, ongoing subscription |

AppSumo codes: Tier 1 and Tier 2 LTD codes redeemed via AppSumo integration.

### SEO & Marketing Infrastructure

- Public-facing landing page with trade-specific headline and clear CTA
- Trade/state-specific landing pages for SEO (e.g., "Plumber hourly rate calculator — Texas") — up to 20 pages at launch covering 4 trades × 5 high-volume states
- Results page shareable via link (read-only, anonymized or with user permission)
- Structured data markup for calculator pages (Google rich results eligibility)
- Blog/content section for long-form trade pricing SEO articles (static, not CMS-driven for MVP)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum that proves the core calculation model is correct and useful, and that tradespeople will pay for a better experience than a spreadsheet.

The MVP answer a single question: "Does a wizard-driven, trades-specific overhead calculator with regional benchmarks and coaching interpretation create enough perceived value that solo tradespeople pay $49 for it?"

**Resource Requirements:** 1 full-stack developer (or 1 frontend + 1 backend) + 1 product/designer. 4–6 weeks to MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (recently independent tech discovering rate gap) — primary success path
- Derek (new licensee setting first rate) — new business defaults path

**Must-Have Capabilities:**
1. Trade selector (plumber, HVAC, electrician, roofer) driving defaults and benchmarks
2. 8-step wizard: target salary, vehicle costs, tools depreciation, business overhead, licensing, working hours, non-billable %, close rate, desired margin
3. Calculation engine (client-side): minimum rate, suggested rate
4. Current rate input + gap calculation ($/hr and $/year)
5. Rate health traffic light (red/yellow/green vs minimum)
6. State-level BLS benchmark range for user's trade
7. "What if" rate slider simulator
8. Coaching callout (top 1–2 named mistakes based on inputs)
9. Email capture with results save link
10. Welcome email + 3-email drip sequence
11. Stripe checkout (Tier 1 $49, Tier 2 $79)
12. AppSumo code redemption
13. Mobile-responsive layout (375px+)
14. 20 trade/state SEO landing pages

**Explicitly excluded from MVP:**
- Sandra's actuals tracking journey (Phase 2)
- Admin analytics dashboard (post-launch iteration)
- QuickBooks integration (Phase 2)
- PDF export (post-launch based on demand)
- Multi-trade support
- Team/crew mode
- Job-type pricing (service call vs. install vs. emergency)
- Mobile native app

### Post-MVP Features

**Phase 2 (Months 4–8) — Actuals Tracking:**
- Monthly actuals logging (jobs count + avg invoice amount + overhead expenses)
- Rate gap dashboard: target vs. actual rate, money left on table
- Seasonal flagging in slow months
- QuickBooks Online OAuth integration (optional)
- $19/month subscription tier unlock

**Phase 3 (Months 9–18) — Integrations & Benchmark Network:**
- Jobber API integration for automatic actuals
- Anonymous benchmark crowdsourcing (opt-in)
- Job-type pricing intelligence
- Industry association co-branding (PHCC, ACCA, IEC)

**Phase 4 (Month 18+) — Solo Trade Financial OS:**
- Rates + overhead efficiency + annual income tracking
- Adjacent trades expansion (landscaping, pest control, pool)
- Geographic expansion (AU/NZ, UK)

### Risk Mitigation Strategy

**Technical Risks:**
- Calculation correctness — mitigated by: pure function calculation engine with unit tests; independent validation of formula against manual calculations before launch
- Mobile UX on diverse devices — mitigated by: testing on real iOS/Android devices at 375px, 390px, 414px viewports before launch

**Market Risks:**
- "Tradespeople don't pay for software" — mitigated by: $49 LTD framing against AppSumo ROI story ("one job priced right pays for this forever"); direct community validation in r/sweatystartup pre-launch
- Free spreadsheet alternatives — mitigated by: wizard UX is fundamentally different from a blank spreadsheet; smart defaults remove the primary friction point

**Resource Risks:**
- Benchmark data curation — BLS OEWS data is publicly available and downloadable as CSV; a one-time 8-hour data curation task creates the initial data set; annual refresh is a predictable maintenance task

---

## Functional Requirements

### Wizard & Onboarding

- FR1: User can select their primary trade (plumber, HVAC technician, electrician, roofer) at the start of the wizard, which sets trade-specific defaults and selects relevant benchmarks
- FR2: User can select their state, which loads state-level BLS benchmark data for their trade
- FR3: User can enter their target annual take-home salary; the system auto-calculates estimated self-employment tax (15.3%) and displays the total income target
- FR4: User can enter annual vehicle costs (payment/lease, insurance, fuel estimate, maintenance) with smart defaults pre-filled based on trade and state
- FR5: User can enter total tool/equipment replacement value and estimated useful life; the system calculates annual depreciation automatically
- FR6: User can enter business overhead costs (liability insurance, phone, software subscriptions, accounting/bookkeeping) with trade-specific defaults
- FR7: User can enter licensing and certification renewal costs with renewal frequency; the system calculates annual amortization
- FR8: User can enter weekly working hours and weeks worked per year, with a benchmark note on non-billable time percentage (e.g., "most solo HVAC techs bill 55–65% of working hours")
- FR9: User can enter their estimated non-billable time percentage (estimating, driving, admin) with a trade benchmark reference
- FR10: User can enter their quote-to-job close rate, with an industry average default and an explanation of why this affects their rate
- FR11: User can enter their desired profit margin above breakeven, with a benchmark range for healthy businesses in their trade
- FR12: User can navigate back to any previous wizard step to update inputs without losing subsequent answers
- FR13: User can see a progress indicator showing which step they are on and how many remain
- FR14: User can see inline help text for each wizard input explaining why the input matters to their rate calculation
- FR15: Wizard state persists in localStorage for ≥ 24 hours, allowing users to complete the wizard across interrupted sessions

### Results & Calculation

- FR16: User can view their calculated minimum viable rate (cost breakeven) on the results screen
- FR17: User can view their suggested rate (minimum + desired margin) with a plain-English explanation of what the margin adds
- FR18: User can enter their current rate and see the gap in both $/hour and $/year (annual billing volume × rate gap)
- FR19: User can see a rate health traffic light (red/yellow/green) comparing their current rate to the calculated minimum
- FR20: User can see a regional benchmark range for their trade and state ("HVAC techs in [state] typically charge $X–$Y/hr — BLS OEWS 2024")
- FR21: User can interact with a rate simulator slider: raise rate by $X/hr and see the annual revenue impact at their stated billing volume
- FR22: User can see a coaching callout identifying the 1–2 most impactful named mistakes in their specific inputs (e.g., "Your non-billable time assumption is creating a $21/hr gap in your minimum rate")
- FR23: User can view a breakdown of their total annual overhead by category (salary, vehicle, tools, overhead, licensing) in a summary table or chart

### Account & Results Persistence

- FR24: User can save their results by providing their email address; results are persisted to their account and accessible via a magic link
- FR25: User can return to their saved results at any time via the magic link emailed at save
- FR26: Authenticated user can update their wizard inputs and recalculate their rate, with the previous calculation preserved for comparison
- FR27: User can share their results via a link (read-only view, anonymized by default; user can enable name display)

### Email & Communication

- FR28: User who saves results receives a welcome email containing their minimum rate summary and a "5 Common Pricing Mistakes Tradespeople Make" resource
- FR29: User receives a 3-email drip sequence over 14 days with rate increase guidance, ROI story, and LTD purchase CTA
- FR30: User can unsubscribe from email sequences at any time via a one-click unsubscribe link in every email

### Payments & Access

- FR31: User can purchase a Tier 1 LTD ($49) via Stripe Checkout, unlocking saved results persistence and email drip
- FR32: User can purchase a Tier 2 LTD ($79) via Stripe Checkout, unlocking Tier 1 features plus Phase 2 actuals tracking when available
- FR33: User can redeem an AppSumo code to activate their corresponding access tier
- FR34: Authenticated user can see their current access tier and what features are unlocked

### Benchmark Data

- FR35: System displays BLS OEWS state-level benchmark ranges for all 4 trades in all 50 US states
- FR36: Benchmark data includes source citation (BLS OEWS + data year) on the results screen
- FR37: When a state has insufficient data for a trade, system displays regional or national average with a note explaining the fallback

### SEO & Marketing Pages

- FR38: System provides trade- and state-specific landing pages for high-intent search queries (e.g., "electrician hourly rate calculator Texas")
- FR39: Landing pages include a wizard entry point and sample rate range for the trade/state combination

### Administration

- FR40: Admin can view wizard step-level funnel analytics (start count, completion count, drop-off rate per step)
- FR41: Admin can update wizard default values and tooltip text without code deployment
- FR42: Admin can refresh BLS benchmark data annually via an admin upload interface
- FR43: Admin can view LTD purchase history and AppSumo code status

---

## Non-Functional Requirements

### Performance

- Wizard step transitions complete within 500ms (no full page reload between steps)
- Results calculation completes and renders within 1 second of final wizard step submission
- Initial page load ≤ 2 seconds on 4G mobile (LCP ≤ 2.5s, CLS ≤ 0.1)
- Benchmark data JSON loaded once per session at trade/state selection; no per-step API calls

### Security

- Wizard inputs submitted via HTTPS only; all data in transit encrypted
- Saved user data (email, calculation inputs, results) encrypted at rest
- Magic link tokens expire after 24 hours and are single-use
- Stripe Checkout used for all payments — no card data ever touches the RateFix application server
- Email addresses are never exposed via URL parameters or publicly accessible endpoints
- Admin interface protected by strong authentication (MFA recommended)
- No third-party analytics scripts loaded in the wizard flow that could capture input data (use first-party analytics only, or load analytics only on non-wizard pages)

### Scalability

- MVP architecture supports up to 10,000 concurrent sessions without performance degradation (AppSumo launch traffic spike)
- Calculation engine runs client-side, eliminating server load for the primary product function
- Static benchmark data served from CDN, not application server

### Accessibility

- Wizard form elements meet WCAG 2.1 AA: all inputs have visible labels, error messages are associated with inputs, focus order is logical
- Color is never the sole indicator of state (rate health traffic light includes icon + text in addition to color)
- Minimum touch target size 44×44px for all interactive elements
- Results screen is readable without relying on the simulator (static text summary in addition to interactive elements)

### Reliability

- Core wizard + calculation + results flow must be available 99.5%+ uptime
- Stripe Checkout integration degrades gracefully: if Stripe is unavailable, user can save their email and be contacted when purchase is possible
- localStorage fallback: if localStorage is unavailable (private browsing), wizard works in session-only mode with a clear note

---

*PRD completed: 2026-10-25. Based on shortlisted idea (score: 87/105, 2026-10-07), comprehensive market research (2026-10-24), and product brief (2026-10-25). Ready for architecture design.*

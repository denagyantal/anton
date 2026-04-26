---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/ai-job-costing-trades.md
  - _bmad-output/planning-artifacts/brief-ai-job-costing-trades.md
workflowType: prd
product_name: ai-job-costing-trades
date: 2026-04-26
author: Root
classification:
  projectType: saas_b2b_mobile
  domain: field_service_fintech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — JobProfit

**Author:** Root
**Date:** 2026-04-26
**Product:** JobProfit — AI Job Costing & Profitability Tracking for Trades

---

## Executive Summary

US trade contractors (HVAC, plumbing, electrical, general contractors) with 1–10 employees generate hundreds of billions in annual revenue operating without per-job profit visibility. They know their bank balance; they do not know which individual jobs make money. The consequence is systematic underpricing, undetected loss-making job categories, and average net margins of 3.5–7% when the industry average should be 15–25%.

**JobProfit** is an AI-powered job costing and profitability tracking tool purpose-built for micro trade businesses under $2M revenue. It delivers GPS-verified time tracking, receipt photo OCR for automatic cost capture, automatic overhead allocation, and per-job P&L — at $29–$49/month or $89–$99 LTD. This is 5–10x below the cheapest comparable solution ($249–$311/month for Knowify Advanced), making real job-level profitability accessible to the 80%+ of the market priced out of existing tools.

The product positions as "the job costing layer QuickBooks is missing" — an add-on that sits alongside existing QuickBooks setups rather than replacing them. This eliminates the #1 switching cost objection and targets the 60–70% of trade shops already on QuickBooks.

**Strategic context:**
- 300,000–400,000 addressable US micro trade shops
- SAM: ~$1B ARR at reasonable pricing and penetration
- AppSumo/LTD white space: zero confirmed competitors in this vertical
- Build feasibility: GPS time tracking + receipt OCR + job cost calc + QB integration, 3–4 week core build

### What Makes This Special

**Price-point disruption:** The structural gap between "no job costing" ($0–$149/month) and "real job costing" ($199–$311/month) is not accidental — incumbents serve the enterprise tier and have no incentive to cannibalize upmarket products. JobProfit occupies the gap permanently at $29–$49/month.

**Trade-specific intelligence:** HVAC, plumbing, electrical, and GC job categories built in from day one — not generic "project" templates. Benchmark margins specific to trade type. Language and UX designed for field operators, not accountants.

**AI receipt OCR eliminates the biggest data entry barrier:** Photograph a receipt on-site; AI extracts vendor, amount, date, and items and auto-assigns the cost to the active job. No desktop data entry. This is the key friction removal that makes real-time job costing possible for 1-person field operations.

**GPS time verification closes the time tracking gap:** Clock in/out with location data per job. Techs no longer "forget" to log hours. The data source that every job costing tool depends on is finally reliable.

**Automatic overhead allocation surfaces true job margin:** Enter monthly overhead once; app spreads it across jobs automatically. Every job P&L reflects true cost — not just direct costs. This is the specific failure mode of QuickBooks job costing workarounds.

**The aha moment:** Within 15 minutes of entering first real jobs, the owner sees a color-coded P&L dashboard showing best and worst performing job categories — often for the first time in their business history. This moment drives word-of-mouth in trade communities.

**Marketing language:** All AI features framed as "automatic" and "smart" — never "AI." 50% of contractors distrust "AI" but respond positively to "it calculates it automatically."

## Project Classification

- **Project Type:** SaaS B2B with mobile-first field app + web dashboard
- **Domain:** Field service / trade business fintech — job costing and profitability intelligence
- **Complexity:** Medium — financial data handling, third-party OAuth (QuickBooks), GPS capture, AI OCR, mobile-first
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

The "aha moment" is the critical success event: the owner views at least one job P&L revealing negative margin or discovers a job category performing 15%+ below expected margin. This is the event that correlates with retention and word-of-mouth in analogous financial intelligence tools.

**User success is achieved when:**
- Owner can view per-job P&L within 15 minutes of account setup with no accounting expertise required
- Field technicians clock in/out in under 30 seconds per job using GPS-verified mobile entry
- Receipt photos captured on-site are auto-categorized and assigned to the correct job without manual data entry
- Overhead is allocated automatically — owner never calculates cost allocation manually
- Dashboard surfaces actionable insight: which job types to prioritize, which to reprice, which technicians are most profitable

**Activation metrics:**
- Time to First Aha Moment: < 7 days from sign-up
- Job Entry Rate: ≥ 10 jobs entered within 14 days — 50%+ of activated users
- Receipt Capture Rate: > 60% of material costs captured via photo vs. manual entry
- GPS Clock-In Consistency: > 70% of completed jobs have GPS-verified time entry

### Business Success

**Year 1 — Validation and Foundation:**
- 200 LTD buyers within first 30 days of AppSumo launch
- NPS > 30 from first 50 buyers surveyed
- < 10% refund rate (AppSumo standard)
- 5+ organic reviews on G2/Capterra within 60 days
- 3+ case study candidates identified (users with compelling profit discovery stories)

**Year 2 — Growth:**
- 500 monthly subscribers → $24,500 MRR ($294K ARR)
- Association channel partnerships (ACCA, PHCC) generating 100+ trials/month
- Monthly subscriber churn < 5%

**Year 3 — Market Leadership:**
- 1,500 monthly subscribers → $73,500 MRR ($882K ARR)
- 1% penetration of HVAC + plumbing sub-segment
- Clear path to $1M ARR

### Technical Success

- Receipt OCR accuracy ≥ 90% on printed receipts
- GPS clock-in/out completes within 2 seconds on standard mobile connection
- QuickBooks OAuth sync has < 1% failure rate under normal operation
- System supports concurrent access from owner dashboard + all field technicians simultaneously
- Offline mode caches time entries and receipt photos for sync-on-reconnect — no data loss on poor connectivity

### Measurable Outcomes

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| LTD Buyers (cumulative) | 200 | 500 | 750 |
| Monthly Subscribers | 30 | 150 | 400 |
| MRR | $1,470 | $7,350 | $19,600 |
| Trial → Paid Conversion | 12% | 15% | 20% |
| Monthly Subscriber Churn | < 12% | < 8% | < 5% |
| G2/Capterra Reviews | 15 | 50 | 150 |
| NPS | > 30 | > 40 | > 50 |
| Aha Moment Completion Rate | > 50% | > 60% | > 70% |
| Community-Sourced Trials/Month | 20 | 80 | 200 |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP must deliver a complete per-job P&L for at least one job within 15 minutes of account setup. The aha moment is the only success criterion that matters at launch.

**Core MVP capabilities:**
1. Job creation and management (HVAC, plumbing, electrical, GC trade types)
2. GPS-verified time tracking — clock in/out per job per technician
3. Receipt photo OCR — photograph receipt, AI extracts and assigns costs
4. Manual cost entry as fallback for all cost types
5. Overhead allocation — enter monthly overhead once, auto-spread across jobs
6. Per-job P&L dashboard: Revenue − Labor − Materials − Subcontractor − Overhead = Net Margin
7. QuickBooks Online integration — read invoices/revenue, optional push of job cost allocations
8. Team management — owner + technician accounts with role-based access
9. iOS and Android mobile app with offline support

**MVP is NOT:**
- A QuickBooks replacement — always positioned as add-on
- A scheduling or dispatch tool
- An estimating tool
- A desktop-primary application (mobile-first; desktop dashboard in Month 3)

### Growth Features (Post-MVP)

**Phase 2 (Months 4–8):**
- AI cost trend analysis: "Your commercial maintenance contracts have averaged 8% margin for 3 months"
- Technician profitability comparison dashboard
- Estimate-to-actual tracking (requires estimate creation module)
- Desktop web app with full reporting and CSV export
- Xero / FreshBooks integration

**Phase 3 (Months 9–18):**
- Industry benchmark database (anonymized margin data across user base)
- Smart estimate integration with Jobber / Housecall Pro
- Voice time logging: hands-free clock in/out
- ACCA/PHCC reporting integration
- Customer profitability scoring

### Vision (Future)

- Real-time cost prediction before job starts (AI predicts final cost based on similar historical jobs)
- Smart dispatch: route jobs to most profitable technician for that job type
- Financing/insurance partnerships using profitability data for underwriting
- International expansion: UK, Australia, Canada (identical QuickBooks frustration, same market gap)
- Adjacent verticals: roofing, landscaping, pest control — all have identical profitability tracking needs

---

## User Journeys

### Journey 1: Marcus — The Overwhelmed HVAC Owner-Operator (Primary User, Success Path)

**Opening Scene:** Marcus, 42, runs a 3-tech HVAC shop in suburban Ohio. Revenue $680K/year. It's Sunday night and he's staring at his QuickBooks screen for the third hour. He's trying to figure out why Q3 felt profitable but his bank account tells a different story. He's using QB "classes" to track job types but the report doesn't add up — it never does. He gives up and closes the laptop.

**Discovery:** Monday morning, Marcus scrolls r/HVAC. A post catches his eye: "I discovered I was losing $47 on every maintenance contract — here's how I found out." The post shows a dashboard screenshot with a red bar next to "HVAC Maintenance Contracts: -8% margin" and a green bar next to "New System Installs: 31% margin." He clicks through to the AppSumo listing. $99 lifetime. He buys it.

**Onboarding (Day 1):** Marcus opens the mobile app. Setup wizard: trade type → HVAC. Monthly overhead → $8,500. Overhead allocation method → % of revenue. QuickBooks connection → OAuth flow pulls his existing customer list and recent invoices. First job created in under 3 minutes.

**First data (Days 1–3):** Marcus logs 3 jobs from memory — a residential install, a commercial maintenance visit, and an emergency repair. He photographs 4 receipts from his truck. The AI categorizes them: refrigerant (materials), van gas (overhead). He clocks in and out on 2 active jobs via the mobile app. His tech, Dave, gets an invite via SMS and clocks into Thursday's job using GPS.

**Climax — The Aha Moment (Day 5):** After 7 jobs entered, Marcus opens the dashboard. Color-coded bars appear: "Commercial Maintenance: avg 9% margin (RED)." "Residential Installs: avg 31% margin (GREEN)." He's been pricing commercial maintenance 20% below breakeven after overhead. He texts his office manager: "We need to reprice the maintenance contracts ASAP."

**Resolution:** Marcus adjusts commercial maintenance pricing at next renewal cycle. He runs the numbers on the new rate. Projected annual impact: $26,000 recovered margin. He posts about it on his HVAC Facebook group. Seventeen contractors ask what tool he used.

**Journey Requirements Revealed:**
- Rapid onboarding wizard with trade-specific setup
- QuickBooks OAuth revenue import
- Mobile clock-in with GPS verification
- Receipt OCR with cost type auto-categorization
- Per-job P&L color-coded dashboard
- Job category aggregation (not just per-job, but per job type)
- Social sharing trigger (screenshot-worthy dashboard moment)

---

### Journey 2: Sofia — The Growing Plumbing Contractor (Office Manager Onboarding Path)

**Opening Scene:** Sofia, 38, runs a 6-person plumbing business in the Pacific Northwest. Revenue $1.4M/year. Her office manager, Lin, spends 15+ hours/month trying to reconcile job costs in QuickBooks Advanced. A $22,000 commercial remodel in Q3 turned out to be 4% margin — discovered 6 weeks after completion. By then, it was too late to renegotiate.

**Discovery:** PHCC newsletter sponsor placement: "The job costing layer QuickBooks is missing — $49/month." Sofia forwards it to Lin. Lin starts a free trial.

**Onboarding:** Lin connects to QuickBooks Online Advanced — reads existing customer/job data. Configures overhead allocation ($18,000/month, % of labor hours). Invites 6 field techs as mobile users. Sends techs a 2-minute onboarding video.

**First week:** Four of six techs adopt clock in/out consistently. Receipt photos captured on 70% of material purchases. Lin reviews first 10 job P&Ls after completion.

**Climax:** A $28,000 commercial remodel currently in progress shows material costs tracking 18% over estimate in real time. Lin flags it to Sofia. Sofia calls the GC, references the data, and negotiates a $2,400 change order — the first time she's been able to do this with actual numbers rather than "gut feeling."

**Resolution:** The change order pays for 4 months of the subscription. Lin's reconciliation time drops from 15 hours/month to 3 hours/month. Sofia adds it to her standard vendor contract language: "Change orders available if material costs exceed estimate by > 10%."

**Journey Requirements Revealed:**
- Multi-user team invitation (email/SMS)
- Role-based access (office manager vs. field tech vs. owner)
- Real-time cost tracking against job budget
- Job cost alert / notification when costs exceed threshold
- Desktop reporting interface for office managers
- QB Advanced compatibility

---

### Journey 3: Derek — The QuickBooks Rejecter (Power User, Migration Path)

**Opening Scene:** Derek, 51, electrical contractor, Texas. Revenue $820K/year. He maintains two parallel systems: QuickBooks for accounting compliance, Excel for actual job profitability. The Excel sheet is accurate but breaks down on busy weeks when he doesn't have time to enter costs. He's spent 14 years fighting QuickBooks job costing.

**Discovery:** Google search: "QuickBooks job costing alternative contractors." Third result: a G2 review with 5 stars — "Finally a tool that does what QuickBooks promises but never delivers." He reads 12 reviews. Downloads the iOS app. Starts a free trial.

**Onboarding:** Derek imports 3 months of historical job data from his Excel sheet via CSV. Connects QuickBooks for revenue sync. Configures overhead with 3 categories: truck fleet ($2,200/month), insurance ($1,800/month), office ($900/month). Tests the first job P&L — it matches his Excel calculation. He cancels his Excel sheet.

**Climax:** After 6 weeks, Derek runs the "Technician Efficiency" report (Phase 2 feature). His senior tech, James, averages $143/job-hour in revenue. His junior tech, Mike, averages $87. The gap isn't experience — it's job assignment. Mike is consistently getting the jobs with the lowest margin job types. Derek reassigns Mike to residential work. Within 8 weeks, Mike's effective rate is $118/job-hour.

**Resolution:** Derek retires the Excel sheet permanently. He begins quoting commercial jobs based on historical margin data rather than gut instinct. His commercial job win rate drops slightly (he's stopped underbidding) but his commercial margin increases from 9% to 17%.

**Journey Requirements Revealed:**
- CSV bulk import for historical job data
- Configurable multi-category overhead allocation
- QuickBooks revenue sync (read-only is sufficient for this user)
- Technician comparison reporting (Phase 2)
- Data export for auditing and compliance
- Trial-to-paid conversion path without CC required upfront

---

### Journey 4: Field Technician Dave — The Non-Willing User (Adoption-Critical Path)

**Opening Scene:** Dave, 29, HVAC tech for Marcus's shop. His boss gave him login credentials for some new app. He has zero interest in new software. He's busy. His phone is an iPhone SE with a cracked screen. He doesn't care about margin reports.

**Forced Onboarding:** Dave receives an SMS: "Marcus has invited you to JobProfit. Tap to get started." He taps. The app asks for his name and creates a PIN. That's it — no credit card, no settings, no tutorial. He's in.

**Daily Usage:** Dave arrives at a job site. He opens the app. One big button: "Clock In — 123 Main St" (GPS auto-detected the address). He taps it. 2 seconds. He buys $340 of refrigerant at the supply house. He photographs the receipt. App says "Cost assigned to 123 Main St job." He didn't type anything.

**At end of day:** Dave clocks out. One tap. App shows: "You worked 6.5 hours today across 2 jobs." He closes it.

**Resolution:** Dave uses the app for 3 months without ever thinking about it. His boss's dashboard is accurate because Dave's data is real. The aha moment Marcus experiences is only possible because Dave's friction was near zero.

**Journey Requirements Revealed:**
- Tech onboarding must require zero decisions beyond name + PIN
- Clock in/out must be one tap with GPS auto-detection
- Receipt OCR must require zero manual fields after photo
- Tech dashboard limited to: active jobs, clock in/out, receipt capture
- No exposure to P&L, margin, or financial data for tech role
- Offline-capable (many job sites have poor connectivity)

---

### Journey 5: Owner Without QuickBooks (Edge Case)

**Opening Scene:** Carlos, 44, small general contractor, Florida. Revenue $420K/year. He uses Wave (free accounting software) not QuickBooks. He's heard the product requires QuickBooks and almost didn't sign up.

**Discovery and Onboarding:** Carlos finds the AppSumo listing. He reads the FAQ: "QuickBooks is optional — you can enter revenue manually." He purchases the LTD. During setup, he skips the QuickBooks connection step. He enters job revenue manually per job. Everything else works identically.

**Resolution:** Carlos uses JobProfit as a standalone job costing tool without any accounting integration. He exports monthly cost reports as CSV and imports them into Wave manually — 20 minutes/month. He gets full per-job P&L without QuickBooks.

**Journey Requirements Revealed:**
- QuickBooks connection must be optional, not required
- Manual revenue entry per job as first-class workflow
- CSV export of all job cost data
- Onboarding flow that handles "no QB" path without friction
- Clear FAQ/documentation that QuickBooks is optional

### Journey Requirements Summary

All journeys collectively reveal these capability areas:

| Capability Area | Key Journeys |
|----------------|-------------|
| Account & Team Management | All journeys |
| Job Management & Creation | Marcus, Derek, Carlos |
| GPS Time Tracking | Marcus, Dave |
| Receipt OCR & Cost Capture | Marcus, Dave |
| Manual Cost Entry & CSV Import | Derek, Carlos |
| Overhead Allocation Engine | Marcus, Sofia, Derek |
| Per-Job P&L Dashboard | Marcus, Sofia, Derek |
| Job Category Analytics | Marcus, Derek |
| QuickBooks Integration | Marcus, Sofia, Derek |
| Standalone (No-QB) Mode | Carlos |
| Mobile App (Tech-Facing) | Dave |
| Desktop Reporting View | Sofia (Lin) |
| Real-Time Cost Alerts | Sofia |
| Role-Based Access Control | All multi-user journeys |

---

## Domain-Specific Requirements

### Financial Data Handling

JobProfit processes business financial data — job revenue, labor costs, material costs, overhead — for small businesses making pricing and hiring decisions based on this data. Accuracy is a fiduciary trust issue, not just a UX concern.

**Data Accuracy Requirements:**
- Per-job P&L calculations must be deterministic and auditable (same inputs always produce same output)
- Overhead allocation must display the calculation method transparently (not a black box)
- When QuickBooks revenue figures differ from manual entries, the discrepancy must be surfaced, not silently overridden
- All cost entries retain original source (OCR, manual, CSV import) as metadata for audit purposes

**Data Ownership:**
- User data is never used for benchmark aggregation without explicit opt-in consent
- Users can export all their data in standard format (CSV/JSON) at any time
- Account deletion must include complete data erasure option

### QuickBooks Integration Constraints

QuickBooks Online API has rate limits (500 requests/minute per company) and OAuth token expiry (180 days). Integration must handle these gracefully:

- Token refresh handled automatically; user prompted to re-authenticate only when token cannot be refreshed
- Rate limit errors result in queued sync, not failed sync
- When QB API is unavailable, the app continues to function in standalone mode — sync resumes when API recovers
- QB sync is always additive/read-first — never overwrites user's QB data without explicit confirmation

### Trade Business Context

**Terminology must match industry norms:**
- "Job" not "project" (project = large multi-month GC work; job = daily service call)
- "Tech" or "technician" not "employee" or "user"
- "Markup" vs "margin" confusion is the #1 pricing mistake in the industry — the app must clearly label which it is displaying
- Material cost categories must include trade-specific items: refrigerant, pipe fittings, electrical conduit, permits

**Pricing sensitivity:**
- Trades owners are cost-conscious and distrust recurring subscriptions
- LTD pricing must be prominently featured at launch
- ROI framing ("saves X hours/month, discovers $Y in hidden losses") must appear in onboarding and email sequences

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. AI Receipt OCR with Field-Context Awareness**

Unlike generic expense tracking apps (Expensify, Dext), JobProfit's OCR is contextually aware: it knows the user is at a job site, it knows the active job from GPS, and it assigns the cost automatically without prompting. The innovation is not OCR itself (commodity technology) but the zero-input field workflow — photograph → done.

Validation approach: A/B test OCR auto-assignment vs. manual job selection prompt. Target: 80%+ of users accept auto-assignment without modification.

Fallback: If GPS-based auto-assignment confidence is low (ambiguous location, multiple nearby jobs), prompt user to confirm job assignment rather than silently assigning.

**2. Automatic Overhead Allocation for Field Businesses**

No existing sub-$200/month tool allocates overhead automatically to individual jobs. This is the specific gap that makes QuickBooks job costing reports structurally inaccurate. The innovation is bringing a standard cost accounting concept (overhead absorption) to the field operator tier where it has never been accessible before.

Validation approach: Measure whether users who configure overhead have higher aha moment rates than users who skip overhead setup. Hypothesis: overhead-configured users discover negative margin 2x more often.

**3. GPS-Verified Time as Data Quality Infrastructure**

GPS verification is not new in field service. The innovation is using it specifically as a data quality mechanism for job costing — not surveillance, but accuracy. The "GPS proximity alert" when a tech clocks in far from the job address surfaces data quality problems automatically, preventing the 15–25% cost reporting inaccuracy that plagues QuickBooks job costing.

### Market Context

- No AppSumo/LTD competitor in this exact vertical confirmed via manual search (April 2026)
- Knowify ($249–$311/month) is the only tool with comparable job costing features — and it serves GC-focused market, not HVAC/plumbing
- The "QuickBooks job costing workaround" complaint appears in 40%+ of trade business owner posts on Reddit, indicating high market awareness of the problem and high motivation for a solution

### Validation Approach

- LTD launch on AppSumo is itself the market validation — 200 buyers = confirmed WTP
- User session recordings (Hotjar or equivalent) on the aha moment screen — are users sharing/screenshotting the margin discovery?
- Track OCR override rate — if > 30% of OCR results are manually corrected, OCR model needs improvement

---

## SaaS B2B Mobile Specific Requirements

### Architecture Overview

JobProfit is a mobile-first SaaS application with three interaction surfaces:
1. **Field technician mobile app** (iOS + Android) — clock in/out, receipt capture, job status view
2. **Owner mobile dashboard** (iOS + Android) — job management, P&L view, team management
3. **Owner web dashboard** (browser) — Phase 2; full reporting, CSV export, office manager workflows

The architecture is cloud-native with offline-capable mobile clients. Financial calculations run server-side for auditability; mobile clients display pre-calculated results.

### Multi-Tenancy Model

- Each trade shop is an isolated tenant with its own data namespace
- Tenant isolation enforced at database row level (tenant_id on all financial records)
- LTD tier: up to 3 tech accounts, 100 jobs/month
- Pro tier: up to 5 tech accounts, unlimited jobs
- Team tier: up to 12 tech accounts, unlimited jobs, all features

### Role & Permission Matrix

| Action | Owner | Office Manager | Field Technician |
|--------|-------|---------------|-----------------|
| View per-job P&L and margin | ✓ | ✓ | ✗ |
| Create/edit jobs | ✓ | ✓ | ✗ |
| Clock in/out on assigned jobs | ✓ | ✗ | ✓ |
| Capture receipts / add costs | ✓ | ✓ | ✓ (own jobs) |
| View business-level dashboard | ✓ | ✓ | ✗ |
| Configure overhead allocation | ✓ | ✗ | ✗ |
| Manage team members | ✓ | ✗ | ✗ |
| Connect QuickBooks | ✓ | ✗ | ✗ |
| View their own time logs | ✓ | ✗ | ✓ |
| Export data | ✓ | ✓ | ✗ |

### QuickBooks Integration Specification

- Authentication: OAuth 2.0 via Intuit's standard flow
- Scope: read:accounting (customers, invoices), write:accounting (optional, for cost allocation push)
- Data read: customer list, invoice amounts by customer/job, existing job names
- Data push: job cost allocations as QB expenses (off by default; owner opt-in)
- Sync frequency: on-demand + nightly automated sync
- Supported QB editions: QuickBooks Online Essentials, Plus, Advanced (not QuickBooks Desktop)

### Mobile Platform Requirements

- **iOS:** minimum iOS 15 (iPhone 7 and later); App Store distribution
- **Android:** minimum Android 9 (API 28); Google Play distribution
- **Offline mode:** time entries and receipt photos cached locally using device storage; sync queue processed when connection restored
- **Camera:** access required for receipt OCR; graceful degradation if camera permission denied (manual entry fallback)
- **Location:** GPS access required for clock in/out verification; foreground location only (no background tracking); graceful degradation if location permission denied (manual entry flagged as non-GPS)
- **Push notifications:** optional; used for cost alerts and sync completion confirmation

### Onboarding Flow (Owner)

1. Email + password signup (or Apple/Google SSO)
2. Trade type selection (HVAC / Plumbing / Electrical / General Contractor / Other)
3. Monthly overhead entry (optional; can skip and configure later)
4. QuickBooks connection (optional; can skip — standalone mode available)
5. First job creation wizard (prompted immediately)
6. Tech invitation flow (optional; can use solo)

Target: owner completes onboarding and views first job P&L within 15 minutes.

### Onboarding Flow (Field Technician)

1. Receives SMS/email invite from owner
2. Taps link → app install or web fallback
3. Enters name + creates 4-digit PIN
4. Sees job list with clock in/out buttons

Target: tech completes onboarding and clocks in to first job within 90 seconds.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-first MVP — launch on AppSumo with LTD pricing to generate immediate revenue, validate ICP, and collect reviews. The MVP is complete enough to deliver the aha moment but intentionally defers anything that doesn't directly cause the aha moment or enable the QB add-on positioning.

**Resource Requirements:** 1 full-stack developer + 1 part-time designer, 3–4 weeks to core MVP. No ML infrastructure needed beyond GPT-4 Vision API call for OCR.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Owner onboards, enters jobs, sees per-job P&L (Marcus journey, full path)
- Field tech clocks in/out on mobile without training (Dave journey, full path)
- Owner without QuickBooks enters revenue manually and gets full P&L (Carlos journey)
- Multi-user shop with office manager access (Sofia journey, partial — real-time alerts in Phase 2)

**Must-Have Capabilities:**
- Job creation with trade type (HVAC, plumbing, electrical, GC)
- GPS clock in/out per job per tech
- Receipt photo OCR (GPT-4 Vision) with auto-categorization
- Manual cost entry (all cost types)
- Monthly overhead configuration and auto-allocation
- Per-job P&L: Revenue − Labor − Materials − Subcontractor − Overhead = Net Margin %
- Color-coded dashboard: top 5 / bottom 5 jobs by margin
- Job category aggregate view (all HVAC installs, all maintenance contracts, etc.)
- QuickBooks Online OAuth integration (read invoices/revenue)
- Owner + technician accounts with role-based access (view P&L gated to owner only)
- iOS + Android mobile app
- Offline time entry and receipt capture with sync-on-reconnect
- CSV bulk import for historical job data

### Post-MVP Features

**Phase 2 (Months 4–8):**
- Real-time cost trend alerts ("job is tracking 15% over budget")
- AI cost trend analysis by job category over time
- Technician profitability comparison dashboard
- Desktop web app with full reporting and CSV export
- Estimate-to-actual tracking (estimate creation module required)
- Xero and FreshBooks integration

**Phase 3 (Expansion):**
- Industry benchmark database (anonymized, opt-in aggregate margin data)
- Smart estimate integration with Jobber / Housecall Pro via API
- Voice time logging
- Customer profitability scoring
- Multi-location / franchise account support
- International expansion (UK, Australia, Canada)

### Risk Mitigation Strategy

**Technical Risks:**
- *QB API breakage (high probability, high impact):* Build parallel native revenue entry as first-class workflow; QB is always an add-on, never a dependency. If QB API breaks, core product continues to function.
- *OCR accuracy below 90%:* Set user expectations in onboarding (90%+ on printed receipts; handwritten require manual confirmation). Provide frictionless correction flow. GPT-4 Vision provides best-in-class accuracy; upgrade model if needed.
- *GPS accuracy on urban job sites:* Use proximity window (0.5 miles) not exact point; alert rather than block if out of range. Manual entry always available as override.

**Market Risks:**
- *Competitor downmarket move:* LTD buyer base creates loyal anchor; trade-specific data moat grows with usage; speed to market is the primary defense.
- *Market education burden:* SEO targets discovery terms ("how to know if a job is profitable" not "job costing software"); community content drives organic discovery.

**Resource Risks:**
- *Minimum viable team:* 1 developer can build MVP in 4 weeks; designer optional (strong template-based UI sufficient for launch)
- *Reduced scope fallback:* If timeline pressure, drop QB push (keep read-only), drop CSV import (add in Month 2), drop multiple overhead categories (single overhead amount sufficient for MVP aha moment)

---

## Functional Requirements

### Account & Team Management

- FR1: Owner can register an account with email/password or Apple/Google SSO
- FR2: Owner can configure trade type, company name, and monthly overhead amount during onboarding
- FR3: Owner can invite field technicians by email or SMS link
- FR4: Field technicians can complete account setup via invite link without requiring a credit card or subscription
- FR5: Owner can assign technicians to specific jobs
- FR6: Owner can remove technician access and retain all associated job cost data
- FR7: Owner can configure role permissions (which techs see which jobs)
- FR8: System enforces role-based data access: technicians cannot view P&L, margin, or financial dashboard

### Job Management

- FR9: Owner can create a job with name, customer, trade type, job address, and estimated revenue
- FR10: Owner can set actual revenue per job manually or accept revenue pulled from QuickBooks invoice
- FR11: Owner can mark jobs as in-progress or complete
- FR12: Owner can view a paginated job list with search and filter by trade type, date range, and margin threshold
- FR13: Owner can bulk import historical jobs from CSV with field mapping wizard
- FR14: Owner can archive completed jobs and exclude them from active dashboard while retaining historical data
- FR15: System calculates and displays per-job totals: total hours, total material cost, total subcontractor cost, allocated overhead, net margin, and margin percentage

### GPS Time Tracking

- FR16: Technician can clock in to an assigned job from the mobile app with GPS location capture
- FR17: Technician can clock out of a job from the mobile app with GPS location capture
- FR18: System alerts technician if clock in/out location is more than 0.5 miles from the job address
- FR19: Owner can review all time entries per job per technician with GPS verification status
- FR20: Technician can add manual time entries with a flag indicating they were entered without GPS verification
- FR21: Owner can edit or delete time entries with an audit log of changes
- FR22: System displays daily and weekly time summaries per technician

### Receipt OCR & Cost Capture

- FR23: Technician can photograph a receipt using the mobile camera and have it automatically assigned to the currently active job
- FR24: System extracts vendor name, date, amount, and line items from receipt photos using AI OCR
- FR25: System auto-categorizes extracted costs: materials, subcontractor, equipment rental, or fuel
- FR26: Technician and owner can override any OCR-extracted field before saving
- FR27: System queues receipt photos for OCR when the device is offline and processes them on reconnect
- FR28: System flags receipt photos with low OCR confidence for manual review rather than silently assigning
- FR29: Owner can view all receipts per job with original photo and extracted data side by side

### Manual Cost Entry

- FR30: Owner and technician can manually add cost entries to a job with cost type, amount, vendor, and description
- FR31: Owner can add subcontractor cost entries with subcontractor name and scope of work
- FR32: Owner can edit or delete any cost entry with audit log
- FR33: Owner can import cost entries from CSV for historical data migration

### Overhead Allocation

- FR34: Owner can configure monthly overhead amount with a descriptive label
- FR35: Owner can select overhead allocation method: percentage of job revenue or percentage of job labor hours
- FR36: System automatically allocates overhead to each completed job based on the configured method
- FR37: Owner can override the allocated overhead amount for a specific job
- FR38: System displays the overhead allocation calculation transparently (e.g., "Job revenue $4,200 / monthly revenue $68,000 × monthly overhead $8,500 = $525 allocated overhead")

### Profitability Analytics & Dashboard

- FR39: Owner views a business-level dashboard showing total revenue, total costs by category, average margin, and total net profit across a configurable date range
- FR40: Owner views per-job P&L with color coding: green (> 20% margin), yellow (10–20%), red (< 10%)
- FR41: Owner views job category performance: average margin per trade type (HVAC maintenance, HVAC install, plumbing repair, etc.)
- FR42: Owner views top 5 and bottom 5 jobs by margin for any date range
- FR43: Owner can filter dashboard by technician, trade type, customer, and date range
- FR44: Owner receives an in-app notification when a job's tracked costs exceed a configurable threshold relative to revenue
- FR45: Owner can export job cost reports as CSV

### QuickBooks Integration

- FR46: Owner can connect a QuickBooks Online account via OAuth from the settings screen
- FR47: System imports customer names and invoice amounts from QuickBooks to pre-populate job revenue
- FR48: System syncs QuickBooks revenue data on demand and on a nightly schedule
- FR49: Owner can optionally push job cost allocations from JobProfit to QuickBooks as expense transactions
- FR50: System displays QuickBooks sync status with last sync timestamp and error messages for failed syncs
- FR51: Owner can disconnect QuickBooks; all existing data is retained and the app continues to function in standalone mode

### Mobile App

- FR52: Mobile app functions on iOS 15+ and Android 9+ (API 28+)
- FR53: App caches pending time entries and receipt photos when offline and syncs automatically on reconnect
- FR54: App requests camera and location permissions with clear explanations of why each is needed
- FR55: App provides manual entry fallback for all features requiring camera or location when permissions are denied
- FR56: Technician view shows only active jobs, clock in/out controls, and receipt capture — no financial data
- FR57: Owner can access the full dashboard including P&L and team management from the mobile app

---

## Non-Functional Requirements

### Performance

- Mobile clock in/out action completes (including GPS capture and server acknowledgment) within 2 seconds on standard 4G connection
- Receipt OCR result (extracted fields returned to user) delivered within 10 seconds of photo capture under normal network conditions
- Job P&L dashboard loads and renders within 3 seconds for a business with up to 500 jobs
- QuickBooks sync completes within 60 seconds for a business with up to 2 years of historical invoice data

### Security

- All data encrypted in transit using TLS 1.2+
- Financial data (job costs, revenue, margin) encrypted at rest
- QuickBooks OAuth tokens stored with encryption; never exposed in client-side code or logs
- Receipt photo images stored with per-tenant access control; no cross-tenant access possible
- Role-based access enforced server-side — financial data inaccessible via API even if client-side controls are bypassed
- Account authentication supports 2FA (TOTP) for owner accounts
- Failed login attempts rate-limited to prevent credential stuffing

### Scalability

- System supports 10,000 concurrent tenants without performance degradation
- Receipt OCR pipeline scales horizontally — queued processing handles volume spikes (e.g., AppSumo launch day)
- QuickBooks OAuth integration designed for 429 (rate limit) handling with exponential backoff and retry queuing
- Database schema designed for multi-tenancy from day one; no migration required to add isolation

### Integration

- QuickBooks Online API integration tested against Essentials, Plus, and Advanced editions
- QuickBooks API changes monitored via Intuit developer changelog; breaking changes trigger immediate hotfix protocol
- CSV import supports flexible field mapping — does not require exact column names or order
- CSV export produces standard UTF-8 encoded files compatible with Excel, Google Sheets, and accounting software import wizards

### Reliability

- Target uptime: 99.5% (allows ~22 hours downtime/year) — appropriate for a non-critical-path tool
- Offline-first mobile design ensures zero data loss if server is unavailable during field work
- Receipt photos stored in durable object storage (S3 or equivalent) with cross-region replication
- Database backups: automated daily snapshots with 30-day retention

### Accessibility

- Mobile app meets WCAG 2.1 AA for color contrast (critical for color-coded margin indicators viewed in bright sunlight)
- Touch targets for clock in/out buttons meet minimum 44×44pt size requirement (primary field interaction)
- Text size follows system accessibility settings (Dynamic Type on iOS, font scaling on Android)

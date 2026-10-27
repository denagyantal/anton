---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/d2d-field-sales-commission-tracking.md
  - _bmad-output/planning-artifacts/research/market-d2d-field-sales-commission-tracking-research-2026-10-27.md
workflowType: product-brief
lastStep: 6
date: '2026-10-27'
author: Root
project_name: CommRoute
---

# Product Brief: CommRoute — Real-Time Commission Tracking for D2D Sales Teams

<!-- Completed through automated BMAD product brief workflow -->

## Executive Summary

CommRoute is a real-time commission tracking platform built exclusively for door-to-door sales teams in pest control, solar, home security, and roofing — the 112,000–400,000 commission-only field reps who knock doors all day with no visibility into what they're earning until the manager runs payroll on Sunday night.

The core differentiator is radical transparency. CommRoute puts an accurate, real-time earnings dashboard in every rep's pocket. It handles the calculations managers hate — tiered rates, cancellation clawbacks, team lead overrides, milestone-based solar pay — and replaces Sunday-night spreadsheets with a one-click payroll export. DASHP ($100K ARR, bootstrapped solo) proved the exact market exists in pest control. CommRoute captures the multi-vertical opportunity that DASHP has deliberately left unaddressed: the same commission anxiety, clawback complexity, and payroll chaos exists identically in solar, roofing, and home security — with larger rep workforces and higher willingness to pay.

The go-to-market is pest control first (validated channel, known buyer, DASHP as competitive reference), then solar (largest rep workforce, most complex commission structures, most value delivered by automation). Pricing is $20/rep/month (annual) or $40/rep/month (flex/month-to-month, capped at 30% of seats to handle seasonal rosters cleanly). 10 companies × 40 reps × $25/month = $10K MRR is achievable within 6–9 months. The retention dynamic is structural: once reps trust their earnings dashboard, switching back to spreadsheets is a rep revolt waiting to happen.

---

## Core Vision

### Problem Statement

Door-to-door sales operations in pest control, solar, home security, and roofing run almost entirely on spreadsheets. Sales reps work commission-only — knocking 50 doors a day, in the Florida sun, with zero real-time feedback on what they're actually earning until the manager manually builds the paycheck on the weekend.

The problem is acute across every level of the operation:

**For reps**: "Pay anxiety" is the industry term — commission-only workers who can't see their earnings during the workday are less motivated, less trustful, and more likely to quit. A rep who knocks 50 doors and closes 4 accounts has no idea whether they made $200 or $800 today. That uncertainty compounds over a week, a month, a season.

**For managers**: Commission calculation is deceptively complex. Every vertical has its own structures — tiered rates, cancellation clawback windows, team lead overrides, milestone-based triggers for solar. A pest control manager with 25 reps spends 4–6 hours every Sunday building the payroll spreadsheet. A solar sales director with 80 reps needs a dedicated admin just to track commissions.

**For companies**: Commission disputes are relationship-destroying events. 22% of D2D reps have at least one formal commission dispute per year. 9% eventually quit specifically over commission errors. Replacing one rep costs $115K–$150K. Spreadsheet-managed commission programs generate 15–25 disputes per 100 statements; properly managed software programs cut that to 4–8.

**The scale of the neglect**: DASHP reached $100K ARR in pest control alone — bootstrapped, solo, zero paid marketing — on the strength of buyers who said "what is your company called and how much does it cost?" at the first meeting. That is textbook PMF for a painkiller. The same exact problem exists at even larger scale in solar, roofing, and home security, where no equivalent product has yet been built.

### Problem Impact

**Rep morale and retention:**
- 60%+ of D2D reps have experienced commission errors in the past 12 months
- 22% have at least one formal commission dispute annually
- 9% quit explicitly over commission errors or unresolved disputes
- Replacing a mid-performing rep costs $115K–$150K in recruiting, onboarding, and lost sales
- High-performing reps — the top 10% who generate 40–60% of team revenue — have options; they leave fastest when they don't trust their paycheck

**Manager time cost:**
- 4–6 hours per weekend for a 15–30 rep team, building Excel payroll
- 1–2 additional hours per week resolving disputes mid-cycle
- Dedicated admin headcount required at 50+ reps just to manage commission spreadsheets
- Leaderboard maintenance (a critical D2D motivation tool) requires real-time data no one has

**Company-level financial risk:**
- Clawback miscalculations are the single most expensive category of payroll errors in D2D operations
- A pest control company with 25 reps and 5% monthly cancellation rate is processing 15–20 clawback calculations per month manually
- Solar commission errors involving milestone triggers ($1,500–$6,000 per deal) create disputes that can cost more to resolve than the software to prevent them

**The existing alternative (spreadsheets) is getting worse:**
- PE roll-up consolidation in pest control is creating multi-company operators who can't standardize commission calculations across acquired entities
- Solar workforce grew ~25% in 2025; manual tracking at scale is approaching breaking point
- State-level commission transparency laws are emerging; spreadsheet audit trails don't satisfy compliance

### Why Existing Solutions Fall Short

| Solution | What It Does | Price | Critical Weakness |
|----------|-------------|-------|------------------|
| **Spreadsheets** | Manual calculation by manager | Free | 4–6 hrs/week; 15–25 disputes per 100 statements; no real-time rep visibility |
| **DASHP** | Commission tracking for pest control | $10–30/rep/mo | Pest control only; no solar/roofing commission templates; no milestone-based pay |
| **Sequifi** | Commission + full W2/1099 payroll | $35/user/mo | Full payroll migration required; over-complex onboarding for 10–30 rep operators; steep setup friction |
| **D2DHQ** | Commission OS for solar/roofing | $149–499/mo flat | Deal-based pricing; minimum $149/mo overkill for small pest control teams; solar/roofing centric |
| **SalesRabbit / Knockbase** | D2D CRM with basic commission | $39–75/user/mo | Commission is an afterthought; no clawback automation; doesn't handle tiered rates cleanly |
| **FieldStacker / RepCard** | D2D CRM with tracking | $12–30/mo | Light commission support; no real-time rep dashboard; primarily canvassing/territory tools |
| **Xactly / SAP Commission** | Enterprise commission management | $50–200+/user/mo | Completely wrong scale, complexity, and pricing for D2D operators with 5–100 reps |

**The unoccupied position**: Multi-vertical (pest control + solar + roofing + home security), commission-focused (not bundled with CRM or full payroll), at $20–25/rep/month with real-time rep dashboard and first-class clawback automation. No product currently owns this space.

### Proposed Solution

**CommRoute** is a focused commission tracking and pay transparency platform for D2D sales teams. It is explicitly not a CRM, not a payroll processor, and not a canvassing tool — it is the single source of truth for commission calculations, from the moment a rep logs a sale to the moment the manager exports payroll.

**Core product pillars:**

1. **Real-Time Rep Earnings Dashboard** — Every rep carries a live earnings view on their phone. "You've earned $312 today / $1,847 this week / $6,230 this month." The primary driver of rep morale, trust, and referral behavior. The "aha!" moment is the first time a rep sees their accurate earnings update in real time after closing a deal.

2. **Flexible Commission Calculation Engine** — Configurable, not hardcoded. Supports flat rate per close, tiered rates (first 5 closes at $200, next 10 at $250, above 15 at $300), percentage of sale value, per-watt calculation for solar, milestone-triggered pay (signed → permitted → installed → activated). Every operator's commission structure is different; CommRoute's engine handles any combination.

3. **Clawback Automation** — The most painful manual calculation in D2D is automatically handled. Manager configures clawback rules: "pest control customer cancels within 60 days = 100% clawback; days 61–90 = 50% clawback." Cancellations logged against the rep's commission in real time. Rep and manager both see the adjustment immediately. No disputes, no accusations, no spreadsheet archaeology.

4. **Team Lead Override Commissions** — Multi-tier commission structures where team leads earn a percentage of their reps' sales are configured once and auto-calculated. Critical for solar and home security where team leads recruit and manage their own sub-teams.

5. **Manager Dashboard** — Total commissions owed, by rep, by period. Upcoming payroll totals. Flagged disputes. Pending manager approvals. Everything needed to run a D2D payroll cycle in under 30 minutes instead of a Sunday afternoon.

6. **Payroll Export (CSV for Gusto / ADP / QuickBooks)** — One-click export in the format each payroll provider expects. Not a replacement for existing payroll; an accurate input to it. This is the integration that makes adoption irreversible — once payroll is built on CommRoute data, switching means rebuilding the payroll workflow from scratch.

7. **Industry Commission Templates** — Pre-built configuration templates for each vertical: "Pest Control — Monthly Account (with 60-day clawback)", "Solar — Per Watt with Milestone Triggers", "Roofing — Percentage of Insurance Settlement". New operators configure their commission structure in under 15 minutes.

8. **Daily Earnings Notification** — Automated SMS/email to each rep at end of day: "Your CommRoute summary: 3 closes today, $547 earned. Week total: $2,104." The daily notification is a retention and engagement driver that keeps reps connected to their earnings.

### Key Differentiators

| Differentiator | Why It Matters | Competitive Advantage |
|---------------|---------------|----------------------|
| **Multi-vertical from day one** | Same commission anxiety exists in pest control, solar, roofing, home security — but no single tool covers all four | DASHP is pest control-only; D2DHQ is solar/roofing-only; CommRoute is the first cross-vertical focused commission tool |
| **Rep-first dashboard** | Solving "pay anxiety" (rep morale) is equal in value to solving payroll (manager efficiency) — most tools are manager-first | The real-time mobile dashboard is the emotional hook that drives word-of-mouth; reps who trust their earnings recruit friends |
| **Clawback automation as P0** | Clawbacks are the #1 source of disputes and the hardest thing to calculate manually | No lighter tool (SalesRabbit, RepCard, FieldStacker) makes clawback automation a first-class feature; CommRoute leads with it |
| **Commission-only focus** | Operators who already have payroll (Gusto, QuickBooks, ADP) don't want to migrate it — they want accurate inputs | Sequifi bundles commission + payroll, creating migration friction; CommRoute integrates with existing payroll instead of replacing it |
| **Flexible rules engine** | Every operator has idiosyncratic commission structures; rigid tools fail the first complex request | Configurable tiers, rates, overrides, milestones, and clawbacks without custom engineering work |
| **Seasonal billing model** | Pest control and roofing reps spike seasonally — billing should flex with roster | DASHP's flex-license model (2× for month-to-month seats, capped at 30% of total) is the right structure; CommRoute adopts the same |
| **Simple onboarding** | "Can it handle our commission structure in 15 minutes?" is the first question every buyer asks | Industry templates + guided configuration means commission structure is live before the end of a 30-minute onboarding call |

---

## Target Users

### Primary Users

**Persona 1 — Marcus, Pest Control Sales Manager (30–45 years old)**

Marcus manages a regional pest control operation with 20–40 door-to-door reps across two states. He came up as a rep himself and built the commission spreadsheet system that currently runs the team. He uses QuickBooks for accounting and Jobber for scheduling. Every Sunday evening he opens the commission spreadsheet, pulls the week's sales report, cross-references cancellations (some going back 60 days), calculates clawbacks, adjusts for the two reps who got promoted to team leads mid-month, and builds the payroll file. It takes 4–6 hours. He's done it for three years.

*Current workaround*: Excel. He's proud of the spreadsheet — it handles their tiered structure and clawback rules reasonably well — but he's the only person who understands it. If he gets sick, no one can run payroll. He had one major error 18 months ago where a clawback calculation was wrong and a top rep found out. That rep left two months later.

*Pain points*: Sunday payroll time, clawback calculation errors, inability to give reps real-time earnings visibility, managing seasonal hiring spikes on a fixed billing contract.

*Purchase trigger*: Either a visible payroll error that embarrasses him in front of the team, or hitting 30+ reps and the spreadsheet genuinely breaking under the complexity.

*Success looks like*: Payroll export on Sunday takes 30 minutes instead of 5 hours. Zero commission disputes in 6 months. Reps stop calling him mid-week to ask what they've earned.

---

**Persona 2 — Sarah, Solar Sales Director (28–40 years old)**

Sarah runs a 60-rep solar sales team split into 6 sub-teams. Her reps are a mix of W2 setters (canvassers who book appointments) and 1099 closers. Her commission structure has milestone triggers: setters earn $150 at signed contract and $100 at installation complete; closers earn $0.22/watt at signed and an additional $0.08/watt at activation. Team leads earn 8% of their sub-team's total watt-production.

*Current workaround*: A shared Google Sheets workbook that three admins maintain. It works when jobs flow cleanly from signed → permitted → installed → activated, but breaks constantly when jobs get delayed, permits are denied, or customers cancel post-sign. She spent $12K in a single quarter resolving commission disputes with two closers who claimed their milestone payments were miscalculated. She was right both times, but the trust damage was permanent.

*Pain points*: Milestone trigger tracking across a 60-person team, setter/closer split calculations, team lead override calculations, 1099 vs W2 commission handling in the same roster, real-time rep visibility.

*Purchase trigger*: A large-deal commission dispute that surfaces publicly in her team (reps talk), or a quarter where admin overhead on commission management exceeds $10K.

*Success looks like*: Milestone payments auto-calculate when job status updates. Setter/closer splits are visible to both parties in real time. Team leads can see their override accumulation. Quarter ends with zero formal disputes.

---

**Persona 3 — Jake, Roofing Company Owner (35–55 years old)**

Jake runs a 8–15 rep roofing operation that spikes to 30+ reps after storm events. His commission structure is straightforward (8% of contracted job value, clawback if insurance claim is denied within 30 days) but managing a rapidly fluctuating roster through storm season is operationally chaotic. He uses QuickBooks for everything and knows his spreadsheet system would break at 25 reps.

*Current workaround*: Simple spreadsheet he manages personally. Works fine at 8 reps. Falls apart during storm spikes when he has 30 reps active across 3 counties, half of them 1099 contractors he's never worked with before.

*Pain points*: Roster volatility (billing anxiety about per-rep pricing during spikes), insurance-contingent commission calculations, 1099 heavy workforce, no time for complex software configuration.

*Purchase trigger*: First major storm season where spreadsheet-based commission management creates a visible error in front of reps he's trying to retain for next season.

*Success looks like*: Onboards storm-season reps in under 5 minutes, pays them cleanly from the first job, retains the best ones for the next storm event.

### Secondary Users

**D2D Sales Reps (all verticals)** — The end users of the rep-facing dashboard. They don't purchase CommRoute but their adoption and enthusiasm (or resistance) is the critical variable in manager retention. A rep who loves their earnings dashboard will recruit peers at other companies to ask their manager why they don't have CommRoute. A rep who doesn't trust the numbers will undermine the manager's decision to keep paying for it.

*What they need*: Real-time earnings in a mobile app. Clear breakdown of what each sale contributed. Clawback visibility (they want to see it coming, not get a surprise deduction). Daily notification at end of day. Leaderboard view of where they stand vs peers.

**Payroll Accountants / Admins** — At mid-size operators (50+ reps), a dedicated admin manages commission tracking. They are heavy users of the manager dashboard and the payroll export feature. They care about auditability (every calculation traceable), format compatibility (the CSV must map cleanly to Gusto/ADP/QuickBooks), and seasonal roster management.

### User Journey

**Discovery → Purchase (Marcus, Pest Control):**
1. *Crisis trigger*: A commission dispute with a long-tenured rep over a clawback calculation. The rep believes the clawback was applied incorrectly; Marcus knows the spreadsheet is right but can't produce the calculation audit trail on demand.
2. *Search*: Googles "pest control commission tracking software" and "door to door commission app" — low-competition keywords where CommRoute's content will appear.
3. *Peer check*: Posts in "Pest Control Business Owners" Facebook group: "Anyone using software for commission tracking? Looking to get off spreadsheets." Gets 3 replies including one from a peer who switched to CommRoute.
4. *Trial*: Signs up for the 14-day free trial, inputs his commission structure (15 minutes with the guided template), adds his team, and runs last week's actual sales through it.
5. *Aha! moment*: The rep dashboard shows each rep's earnings in real time. During the trial, one of his reps texts him unprompted: "Hey, is that new app thing accurate? It's showing I'm on pace for my best week." That text closes the deal.
6. *Purchase*: Signs up for annual plan at $20/rep/month. Exports first payroll via CommRoute on the following Sunday. Payroll run takes 45 minutes instead of 4 hours.

**Ongoing Usage:**
- Weekly: Manager reviews manager dashboard for payroll prep; exports CSV to QuickBooks
- Daily: Reps check mobile dashboard after each close; manager-facing pending approvals queue handled in under 10 minutes
- Monthly: Clawback report reviewed; any disputed items have full audit trail; no dispute escalates beyond one conversation
- Seasonally: Flex-seat month-to-month licenses activated for new summer hires at 2× rate; deactivated cleanly at season end

**The "irreversible" moment**: When reps in a company have had real-time earnings dashboards for 60+ days, any attempt to switch back to spreadsheets creates an immediate rep trust crisis ("why can't I see my earnings anymore?"). This is the structural retention dynamic — reps become CommRoute's internal advocates.

---

## Success Metrics

### User Success Metrics

**Rep-Level Success:**
- **Pay anxiety eliminated**: Reps check their earnings dashboard at least once per day (target: 70% of active reps)
- **Commission trust**: Reps report commission as accurate and trustworthy at onboarding, 30-day, and 90-day check-ins (target: NPS > 50 from rep-side users by month 3)
- **Dispute rate reduced**: Commission disputes per 100 statements drops from baseline (pre-CommRoute) to under 5 per 100 within 90 days of full deployment
- **Daily notification engagement**: 60%+ of reps open daily earnings notification within 2 hours of delivery

**Manager-Level Success:**
- **Sunday payroll time**: Time to complete weekly commission payroll drops to under 1 hour (from 4–6 hours baseline) within 30 days of adoption
- **Clawback accuracy**: Zero manual clawback errors in first 90 days of use
- **Commission configuration**: Manager able to configure complete commission structure in under 20 minutes using industry template

### Business Objectives

**Revenue Milestones:**
- **Month 3**: $3,000 MRR from first 3 paying customers (pest control beachhead)
- **Month 6**: $10,000 MRR from 10 companies across pest control + first 2 solar customers
- **Month 12**: $50,000 MRR from 50 companies across 3 verticals (pest, solar, roofing)
- **Month 24**: $250,000 MRR / ~$3M ARR from 200 companies

**Retention Objectives:**
- Monthly gross churn: <3% (payroll-adjacent tools have the lowest churn in SaaS — losing the tool means rebuilding payroll workflows)
- Net revenue retention: >105% (account expansion as rep headcounts grow)
- Average customer lifetime: >36 months

**Market Position:**
- Recognized as the leading multi-vertical D2D commission tracking tool (over DASHP for pest control; over D2DHQ for combined pest/solar) within 18 months
- At least 3 industry-specific channel relationships established (pest control association, solar industry group, roofing trade network)

### Key Performance Indicators

| KPI | Target | Measurement Method | Timeframe |
|-----|--------|-------------------|-----------|
| MRR | $10K | Stripe revenue | Month 6 |
| Paying companies | 10 | Customer count in CRM | Month 6 |
| Average company size (reps) | 25 reps | Seat count avg | Month 6 |
| Monthly gross churn | <3% | MRR churn | Ongoing |
| Manager onboarding time | <20 min | In-app time tracking | Month 1 |
| Rep dashboard DAU rate | 70% | App analytics | Month 3 |
| Commission disputes per 100 statements | <5 | Customer-reported | Month 3 |
| Payroll export usage | >80% of customers | Feature usage analytics | Month 2 |
| Sunday payroll time (reported) | <60 min | Customer survey | Month 3 |
| Net Promoter Score | >50 | Quarterly NPS survey | Month 3 |
| Annual plan attach rate | >60% | Contract type at signup | Ongoing |
| Vertical distribution | 70% pest / 20% solar / 10% roofing | Customer vertical tags | Month 12 |

---

## MVP Scope

### Core Features

The MVP is a working commission tracking platform covering the pest control use case completely and the solar use case partially (solar expansion in Phase 2). The test for every feature: does it eliminate the Sunday-night spreadsheet or the pay-anxiety call?

**P0 — Must ship (week 1–3):**

1. **Commission structure configuration**
   - Flat rate per close
   - Tiered rate (e.g., 1–5 closes = $200 each; 6–10 = $250 each; 11+ = $300 each)
   - Percentage of sale value
   - Industry templates for pest control, solar ($/watt), roofing (% of job value)
   - Configurable clawback rules: cancellation window (X days), clawback percentage (full or partial), clawback trigger (cancel, denied, no-install)

2. **Rep sale logging (mobile-first)**
   - Rep logs sale from phone: address, service type, sale amount, notes
   - Manager approve / reject workflow with comment
   - Commission calculation fires immediately on approval
   - Rep sees updated total in real-time dashboard on approval

3. **Real-time rep earnings dashboard (mobile app)**
   - Today / this week / this month / all-time earnings
   - List of individual sales with commission per sale
   - Clawbacks visible with reason and date
   - Clean, minimal — one screen, no navigation required

4. **Manager dashboard (web)**
   - All reps in current period: sales logged, commissions owed, clawbacks
   - Total commissions payable this period
   - Pending approvals queue
   - Team summary (top 5 by earnings, total team commission)

5. **Payroll export (CSV)**
   - Export commission totals per rep for a date range
   - QuickBooks-compatible format (rep name, amount, pay type)
   - Gusto-compatible format (employee ID, earnings amount, earning type)
   - Export history (audit trail of past payroll runs)

6. **Clawback tracking**
   - Manager logs cancellation: links to original sale, calculates clawback per configured rules
   - Clawback auto-deducted from rep's current period total
   - Rep notified via dashboard and optionally via SMS
   - Clawback audit trail (original sale date, cancel date, days elapsed, rule applied, amount deducted)

7. **Basic rep + team management**
   - Add/remove reps
   - Assign commission structure per rep (different reps can have different structures)
   - Seasonal activate/deactivate (deactivated reps don't count toward billing; their history is retained)
   - Annual vs. flex (month-to-month) license tracking

**P1 — Ship within 4–6 weeks of MVP:**

8. **Daily earnings notification (SMS + email)**
   - Configurable send time (default: 7 PM local time)
   - "Today: X closes, $Y earned. Week total: $Z."
   - Manager can toggle on/off per rep

9. **Team lead override commissions**
   - Team lead earns X% of their assigned reps' commission totals
   - Configurable override percentage per team lead
   - Required for solar and home security customers

10. **Solar milestone-based pay triggers**
    - Stages: Signed → Permitted → Installed → Activated
    - Commission splits across stages (e.g., 60% at install, 40% at activation)
    - Manager updates job stage; commission auto-releases on stage trigger

11. **Multi-period payroll cadence**
    - Weekly, bi-weekly, or semi-monthly payroll periods
    - Period lock (no edits after lock date without manager override)
    - Period summary report (PDF) for manager records

### Out of Scope for MVP

The following are explicitly deferred to Phase 2 or beyond:

- **GPS / geofencing check-in**: Verifying rep was physically at the address before crediting the sale. Important for preventing fraud but adds mobile permission complexity and trust friction at onboarding. Post-MVP.
- **Leaderboard / gamification**: Rep ranking, daily standings, performance badges. High value for team morale but not the core pain-solver. Phase 2.
- **CRM integration (API)**: Pulling sales data automatically from Salesforce, HubSpot, or vertical-specific CRMs. Valuable but requires per-integration engineering. Phase 2–3.
- **W2 / 1099 payroll processing**: CommRoute exports to existing payroll providers; it does not replace them. Full payroll processing is Sequifi's territory and would require payroll licensing and compliance work.
- **Mobile app for managers**: Managers access CommRoute via responsive web app in MVP. Native manager mobile app is Phase 2.
- **Multi-company / franchise accounts**: PE roll-up operators managing 5+ acquired companies under one CommRoute account. Valuable for the consolidation wave but adds significant data model complexity. Phase 3.
- **Commission advance / same-day pay**: Some Sequifi customers use same-day and next-day pay features. CommRoute is strictly calculation and reporting in MVP.

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **3 paying pest control customers** have completed at least 2 full payroll cycles using CommRoute exports (not "using CommRoute" but "running their actual payroll through it")
2. **Zero reported commission calculation errors** across those 3 customers in the first 60 days
3. **Rep dashboard adoption**: 60%+ of active reps in paying accounts have logged in to the mobile dashboard at least once per week over a 30-day period
4. **Manager time reduction confirmed**: At least 2 of the 3 customers report payroll cycle time reduced by >50% via a structured 60-day check-in call
5. **At least 1 inbound referral**: A new lead that came from word-of-mouth or referral from an existing customer — the signal that the product is solving the problem well enough that customers advocate for it

These five gates confirm: the core problem is solved, the calculation engine is trustworthy, reps are using the dashboard (meaning the "pay anxiety" value is being delivered), managers are saving real time, and the word-of-mouth flywheel is beginning.

### Future Vision

**Phase 2 (Months 4–9) — Solar Expansion + Engagement:**
- Solar milestone-trigger commission structures fully productized (setter/closer splits, per-watt + milestone combo)
- Leaderboard and gamification layer (daily standings, personal bests, team challenges)
- GPS check-in for sale verification (optional — manager-configurable per rep or per vertical)
- Mobile app for managers (native iOS/Android)
- Daily/weekly performance reports (automated PDF to manager email)

**Phase 3 (Months 8–18) — Scale + Integration:**
- CRM integrations (SalesRabbit, HubSpot, vertical CRMs) — automated sale ingest via API
- Multi-company account structure (PE roll-up operators managing multiple acquired companies)
- Advanced analytics dashboard (rep performance trends, cohort analysis, territory comparison)
- Commission structure marketplace (industry-contributed templates, community-validated)
- Roofing insurance-contingent commission structures (percentage of insurance settlement, post-inspection adjustment)

**Phase 4 (18–36 months) — Platform Expansion:**
- Adjacent verticals: fiber/ISP D2D, gym membership floor sales, window/door replacement, HVAC
- AI-powered commission structure recommendations ("companies with your rep profile typically use tiered structures — here's a comparison")
- Commission forecasting (based on pipeline, predict end-of-month payout before the period closes)
- Benchmarking (anonymized: "your reps earn 12% more per close than the average pest control team on CommRoute")
- Potential: Embedded financial services (early commission advance, rep-facing earned wage access)

**Long-term vision (3–5 years):**

CommRoute becomes the operating layer for D2D sales compensation across all field service verticals. The rep-facing mobile app is the daily habit that anchors every sales rep's relationship with their earnings — equivalent to how a bank app anchors a consumer's relationship with their money. The platform accumulates the largest dataset of D2D commission structures, pay rates, rep performance benchmarks, and cancellation patterns in the industry. This dataset is the long-term moat: no new entrant can replicate 3+ years of cross-vertical D2D compensation data without the customer base to generate it.

---

## Competitive Positioning and Go-to-Market

### Positioning Statement

*"CommRoute is the only commission tracking tool built for D2D field sales teams that works for pest control today and solar, roofing, and home security tomorrow — without the payroll system migration that Sequifi requires or the CRM overhead that SalesRabbit bundles in."*

The core claim: commission tracking for D2D field sales, multi-vertical, commission-only (no payroll migration), rep-first UX.

### Pricing Model

**Standard (annual commitment):**
- $20/rep/month (billed annually)
- Minimum 5 reps ($100/month floor)
- Manager and admin accounts free

**Flex (month-to-month):**
- $40/rep/month
- Available for up to 30% of total licensed seats (seasonal workforce management)
- No minimum commitment; cancel anytime

**Entry tier:**
- $99/month flat for up to 5 reps (pest control small operators)
- Removes the per-rep mental model for smallest teams

**White-glove onboarding add-on:**
- $299 one-time: 60-minute commission structure configuration session + 30-day email support
- Optional but recommended for complex structures (solar, multi-tier)

### Launch Sequence

**Months 1–3 (Pest Control Beachhead):**
- Target: 3 paying pest control companies with 10–50 reps
- Channels: Direct outreach to pest control companies in Google Maps / NPMA directory; "Pest Control Business Owners" Facebook group; Starter Story / IH community (respond to DASHP's case study with the "multi-vertical" angle)
- Goal: Confirm the commission calculation engine handles real-world pest control structures; get first referral

**Months 3–6 (First Solar Customers):**
- Target: 2 solar companies with 20–80 reps
- Channels: LinkedIn (Solar Sales Director / VP Sales titles); solar industry Facebook groups; direct outreach to regional solar dealers
- Goal: Validate solar milestone-based pay in production; land the first customer that represents >$1,000/month ARR on their own

**Months 6–12 (Multi-Vertical Expansion):**
- Target: 50 companies total across pest, solar, roofing
- Channels: Industry trade shows (NPMA PestWorld, RE+ solar, NRCA); Starter Story / IH founder content; referral program (one month free per referred company that converts)
- Goal: $50K MRR; establish brand recognition as "the commission tool that works for D2D, not just one industry"

---

## Key Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| DASHP expands to solar/roofing before CommRoute reaches solar | Medium | High | Prioritize solar commission templates in Phase 1; build distribution relationships before DASHP does |
| Commission calculation error in production damages trust with early customers | Medium | Critical | Extensive test suite for commission engine; every calculation has a visible audit trail; rep-facing calculation breakdown on every line item |
| Per-rep billing creates seasonal churn anxiety | High | Medium | Flex-license model (2× for month-to-month, capped at 30% of seats) resolves this; deactivated seasonal reps retain history |
| Sequifi simplifies their onboarding and attacks the small-team market | Low | High | Compete on commission-only focus + rep-first UX — features Sequifi can't strip from their enterprise-first product without a rewrite |
| Complex commission structures require custom engineering per customer | Medium | Medium | Rules engine designed for configurability from day one; white-glove onboarding service for complex cases; community template library |

---

**Product Brief Completion Date:** 2026-10-27
**Brief Author:** Root (automated BMAD workflow)
**Status:** Complete — ready for PRD development
**Next Step:** `/bmad-bmm-create-prd` — create detailed Product Requirements Document using this brief as foundation

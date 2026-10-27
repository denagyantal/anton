---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/d2d-field-sales-commission-tracking.md
  - _bmad-output/planning-artifacts/research/market-d2d-field-sales-commission-tracking-research-2026-10-27.md
  - _bmad-output/planning-artifacts/brief-d2d-field-sales-commission-tracking.md
workflowType: prd
date: '2026-10-27'
author: Root
project_name: CommRoute
classification:
  projectType: saas_b2b
  domain: field_sales_operations
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — CommRoute

**Author:** Root
**Date:** 2026-10-27
**Project:** CommRoute — Real-Time Commission Tracking for D2D Sales Teams
**Status:** Complete

---

## Executive Summary

CommRoute is a real-time commission tracking platform for door-to-door sales teams in pest control, solar, home security, and roofing. The core problem: 112,000–400,000 commission-only field reps work 8–10 hours daily with zero visibility into their earnings until the manager runs payroll on Sunday night. Meanwhile, managers spend 4–6 hours every weekend manually building commission spreadsheets that generate 15–25 disputes per 100 statements and contain calculation errors that destroy trust with high-performing reps.

DASHP ($100K ARR, bootstrapped solo, pest control only) proved this market exists with near-zero sales friction — their first customer meeting opened with "what is your company called and how much does it cost?" CommRoute captures the multi-vertical opportunity DASHP has left untouched: the identical commission anxiety, clawback complexity, and Sunday-night payroll chaos exists in solar (larger rep counts, more complex milestone-based structures), roofing (seasonal spikes, insurance-contingent commissions), and home security (multi-tier override structures).

The structural retention dynamic is the business case: once reps have real-time earnings dashboards for 60+ days, removing access creates a rep trust crisis. This payroll-adjacent tool has the lowest churn floor in SaaS — switching means rebuilding an entire payroll workflow from scratch.

### What Makes This Special

CommRoute occupies the unoccupied position: multi-vertical (not pest-only like DASHP, not solar/roofing-only like D2DHQ), commission-focused (not bundled with CRM like SalesRabbit, not requiring payroll migration like Sequifi), and rep-first (the mobile earnings dashboard is the emotional hook that drives referrals). No current product combines these three attributes.

The clawback automation differentiator is decisive: cancellation clawback calculation is the single most painful manual task in D2D payroll — it spans 30–90 day windows, involves partial percentages, and creates audit disputes when done in spreadsheets. CommRoute makes it a one-click manager action with a full audit trail visible to both parties.

The seasonal billing model (flex seats at 2× standard rate, capped at 30% of total licensed seats) directly addresses the churn anxiety that kills adoption in pest control and roofing, where roster sizes spike 50–200% during peak seasons.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant web application with companion mobile app (iOS + Android)
- **Domain:** Field sales operations / commission compensation management
- **Complexity:** Medium — multi-vertical commission rule engine, payroll export integrations, real-time mobile dashboard, clawback automation
- **Project Context:** Greenfield — no existing codebase, no brownfield constraints
- **Primary Platforms:** Web (manager dashboard, configuration), Mobile (rep earnings dashboard, sale logging)
- **Revenue Model:** Per-seat SaaS ($20/rep/month annual; $40/rep/month flex/month-to-month)

---

## Success Criteria

### User Success

**Rep-Level (end users of mobile dashboard):**
- 70%+ of active reps open their earnings dashboard at least once per day within 30 days of company adoption
- 60%+ of reps open the daily end-of-day earnings notification within 2 hours of delivery
- Rep NPS >50 at 90-day mark (measured via in-app prompt after first 90 days)
- Reps report commission as accurate and trustworthy — zero escalated calculation disputes attributable to CommRoute errors in first 90 days

**Manager-Level (primary buyers):**
- Manager completes commission structure configuration in under 20 minutes using industry template
- Weekly payroll export cycle completes in under 60 minutes (down from 4–6 hour baseline)
- Zero manual clawback calculation errors in first 90 days of production use
- Commission disputes per 100 statements drops below 5 within 90 days (from 15–25 baseline)

**Onboarding:**
- Manager adds team and runs first payroll export within 7 days of signup
- 80%+ of paying customers use the payroll export feature at least once per month

### Business Success

**Revenue Milestones:**
- Month 3: $3,000 MRR — 3 paying pest control companies
- Month 6: $10,000 MRR — 10 companies across pest control + first 2 solar customers
- Month 12: $50,000 MRR — 50 companies across 3 verticals
- Month 24: $250,000 MRR / ~$3M ARR — 200 companies

**Retention:**
- Monthly gross churn <3% (payroll-adjacent tools have structural retention)
- Net revenue retention >105% (account expansion as rep headcounts grow)
- Annual plan attach rate >60% at signup

**Market Position:**
- At least 1 inbound referral within first 3 months of having 3 paying customers
- At least 3 vertical-specific channel relationships established within 18 months

### Technical Success

- Commission calculation engine produces zero rounding errors or rule-misapplication bugs in production across any supported commission structure type
- Mobile app sale logging to dashboard update completes in under 3 seconds
- Payroll export CSV formats are validated against Gusto, ADP, and QuickBooks field mappings before launch
- System maintains 99.5% uptime during weekly payroll windows (Sunday evenings, Monday mornings)
- Full audit trail for every commission calculation — traceable from sale → rule applied → amount calculated → adjustments → final payout

### Measurable Outcomes

| Metric | Baseline | Target | Timeframe |
|--------|----------|--------|-----------|
| Weekly payroll prep time | 4–6 hours | <60 min | 30 days post-adoption |
| Commission disputes per 100 statements | 15–25 | <5 | 90 days post-adoption |
| Rep dashboard DAU rate | 0% | 70% | 30 days post-adoption |
| Manager onboarding time | N/A | <20 min | First session |
| Monthly gross churn | — | <3% | Ongoing |
| Payroll export usage | — | >80% of customers monthly | Month 2 |

## Product Scope

### MVP — Minimum Viable Product

The MVP fully covers the pest control use case and partially covers solar (milestone pay deferred to Phase 1b). MVP is validated when 3 paying pest control customers complete 2 full payroll cycles through CommRoute with zero reported calculation errors and 60%+ rep dashboard weekly adoption.

**P0 — Must ship:**
1. Commission structure configuration (flat rate, tiered rates, % of sale value, clawback rules)
2. Rep sale logging from mobile (address, service type, amount, manager approval workflow)
3. Real-time rep earnings dashboard (mobile) — today / week / month / all-time + per-sale breakdown
4. Manager dashboard (web) — all reps, commissions owed, pending approvals, period totals
5. Clawback tracking — manager logs cancellation, auto-calculation per configured rules, rep notification, audit trail
6. Payroll export — CSV in QuickBooks, Gusto, and ADP formats for any date range
7. Industry templates — Pest Control (flat/tiered + 60-day clawback), Solar ($/watt placeholder), Roofing (% of job value)
8. Rep and team management — add/remove reps, assign commission structures, seasonal activate/deactivate
9. Annual vs flex license tracking with billing rate enforcement

**P1 — Ship within 4–6 weeks of MVP:**
10. Daily earnings notification (SMS + email) — configurable time, rep-level toggle
11. Team lead override commissions — configurable % of sub-team total, auto-calculated
12. Solar milestone-based pay triggers — Signed → Permitted → Installed → Activated stages
13. Multi-period payroll cadence — weekly, bi-weekly, semi-monthly; period lock with manager override

### Growth Features (Post-MVP)

**Phase 2 (Months 4–9):**
- Leaderboard and gamification (daily standings, personal bests, team challenges)
- GPS check-in for sale verification (optional per manager, no forced compliance friction)
- Native mobile app for managers (iOS + Android)
- Automated PDF performance reports to manager email
- Setter/closer split commission structures for solar

**Phase 3 (Months 8–18):**
- CRM integrations (SalesRabbit, HubSpot, vertical-specific CRMs) via webhook/API
- Multi-company account structure for PE roll-up operators
- Advanced analytics (rep cohort trends, territory comparison, performance benchmarking)
- Commission structure template marketplace (community-contributed templates)

### Vision (Future)

**Phase 4 (18–36 months):**
- Adjacent verticals: fiber/ISP D2D, gym floor sales, HVAC, window/door replacement
- AI-powered commission structure recommendations based on rep profile and vertical benchmarks
- Commission forecasting — predict end-of-month payouts from current pipeline
- Embedded financial services — earned wage access (EWA) for commission-only reps
- Anonymized industry benchmarking ("your reps earn 12% more per close than the average pest control team on CommRoute")

---

## User Journeys

### Journey 1: Marcus — Pest Control Sales Manager (Primary User, Success Path)

**Persona:** Marcus, 38. Manages a regional pest control operation with 22 door-to-door reps across two states. Built and maintains the commission spreadsheet himself — it handles tiered rates and 60-day clawback windows but he's the only person who understands it. Uses QuickBooks for accounting, Jobber for scheduling. Every Sunday evening is "spreadsheet night."

**Opening scene:** Marcus had a commission dispute 6 weeks ago. A top rep, Luis, questioned a clawback calculation. Marcus knew the spreadsheet was right but it took him 45 minutes to reconstruct the audit trail — and Luis still didn't fully trust it. Luis gave notice two weeks later. Marcus is not going to let that happen again.

**Discovery:** Marcus googles "pest control commission tracking software." CommRoute appears in the results alongside a Facebook group reply where a peer describes switching and cutting Sunday payroll from 5 hours to 40 minutes. He visits the site.

**Trial activation:** Marcus signs up for the 14-day free trial. The onboarding flow opens with an industry template selector — he picks "Pest Control — Monthly Accounts." The template pre-populates with a tiered rate structure and a 60-day clawback rule. He adjusts the tier breakpoints and clawback percentage to match his current structure. 14 minutes elapsed.

**First aha moment:** Marcus adds his 22 reps. That afternoon, his best rep, Dani, texts him: "Hey is that new app thing accurate? It says I'm on pace for my best week ever. Wild." Marcus screenshots it and smiles. That text is what closes the sale — he upgrades to annual.

**Ongoing usage pattern:**
- **Daily:** 5–10 minutes. Reviews pending sale approvals queue (typically 3–8 items). Approves or rejects with one tap. Reps see their updated totals in real time.
- **Weekly (Sunday):** Opens the payroll export screen. Selects the current period. Reviews the commission totals by rep. Exports the QuickBooks CSV. Done in 35 minutes.
- **Monthly:** Reviews the clawback report. Every cancellation is logged with date, days elapsed, rule applied, and amount deducted. Zero manual calculation. Zero disputes this month.

**Resolution:** Three months after switching, Marcus has had zero commission disputes. His payroll cycle takes under an hour. Two reps have asked him why they're using CommRoute — they heard a friend's manager doesn't have it. Marcus has now referred one of those reps' manager contacts to CommRoute.

**Journey requirements:** Commission structure configuration, tiered rate rules, clawback automation, sale approval workflow, manager dashboard, payroll export (QuickBooks format), rep mobile dashboard, daily/weekly usage pattern optimization.

---

### Journey 2: Sarah — Solar Sales Director (Primary User, Complex Structure)

**Persona:** Sarah, 34. Runs a 60-rep solar sales team split into 6 sub-teams. Mix of W2 setters (canvassers who book appointments, paid per booked install) and 1099 closers (paid per-watt at signing + activation milestone). Team leads earn 8% of their sub-team's total watt-production. Managed through a shared Google Sheets workbook maintained by three admins.

**Opening scene:** Sarah is in a quarterly review. Two of her top closers — Alex and Priya — are sitting across from her with printed spreadsheet exports, claiming their Q3 milestone payments were miscalculated. Sarah spent a week with her admin reconstructing the calculation trail. She was right both times. But the trust damage is permanent. Alex is already interviewing elsewhere. The quarter cost her $12K in admin time and probably $180K in rep replacement costs if Alex leaves.

**Discovery:** Sarah posts in a solar sales LinkedIn group: "Looking for commission tracking software that handles milestone-based pay without requiring full payroll migration — any recommendations?" A peer replies with CommRoute.

**Configuration session:** Sarah schedules the $299 white-glove onboarding. In 60 minutes, the onboarding specialist configures her entire commission structure: setter flat rate ($150 at install), closer per-watt ($0.22 at signed, $0.08 at activation), team lead 8% override on sub-team watt production. Every edge case they discuss becomes a configured rule — not a custom engineering request.

**Milestone trigger moment:** The first week after going live, a job moves from Installed to Activated in the system. Sarah watches the closers' commissions auto-update in real time. She sees the team lead's override accumulate automatically. She screenshots it and sends it to her admin: "We just saved 6 hours per month of spreadsheet work."

**Dispute prevention:** Four months in, a closer questions their activation payment. Sarah shares the CommRoute calculation breakdown — every stage logged with timestamp, rule applied, amount released. The conversation takes 3 minutes. No dispute filed.

**Journey requirements:** Multi-stage milestone pay configuration (Signed → Permitted → Installed → Activated), setter/closer role distinction, team lead override commission, per-watt calculation type, white-glove onboarding flow, dispute resolution audit trail, real-time rep dashboard with milestone breakdown.

---

### Journey 3: Jake — Roofing Company Owner (Primary User, Seasonal Spike)

**Persona:** Jake, 47. Runs a roofing operation that sits at 8–12 reps year-round but spikes to 30–40 after major storm events. Commission structure is simple (8% of contracted job value, 30-day clawback if insurance claim is denied) but seasonal roster management is a constant headache. Uses QuickBooks personally for everything.

**Opening scene:** After a significant hailstorm, Jake mobilizes 31 reps across 3 counties in 10 days — a mix of his core crew and storm-chasers he's worked with before. By week 3, he has 31 people asking "what do I owe?" at different stages of claim processing. His usual spreadsheet handles 10 reps fine. At 31, he spent last storm season manually updating it three times a day and still had two angry texts from reps claiming their commissions were wrong.

**Seasonal signup moment:** Jake signs up for CommRoute just before storm season. He sets his core 8 reps on annual licenses. The flex-seat billing option lets him activate additional reps at month-to-month rates during the surge. He adds 23 storm-season reps in one afternoon — name, phone number, commission structure (pre-filled from the Roofing template). They're earning-tracked before they knock their first door.

**End of season:** Storm season ends after 8 weeks. Jake deactivates the 23 temporary reps. Their history is preserved — he can reactivate the best performers next season. He's paying only for his 8 core reps again. No lingering billing obligation.

**Journey requirements:** Seasonal activate/deactivate (history preserved, billing stops on deactivation), flex-seat licensing at 2× standard rate, rapid rep onboarding (< 5 minutes per rep), simple roofing commission template (% of job value + denial clawback), QuickBooks export compatibility.

---

### Journey 4: D2D Field Rep — Maya (End User, Rep Dashboard)

**Persona:** Maya, 24. Has been knocking doors for a pest control company for 8 months. Commission-only. Last job was waiting tables. On a good week she earns $1,200; on a bad week she earns $300. She has no idea which this week is until her manager texts her Sunday evening with a Venmo amount.

**Opening scene:** Wednesday afternoon, week 6 of summer season. Maya has knocked 47 doors today and closed 3. She's exhausted. Her feet hurt. She has no idea if she's on pace for a good week or a bad week. "Is this worth it?" is a thought she has at 4:30 PM every Wednesday.

**First CommRoute experience:** Her manager texts the team: "Download CommRoute — you can now see your earnings in real time." Maya downloads the app and opens the earnings dashboard. It shows: "Today: 3 closes, $312 earned. This week: $847. This month: $3,219." She stares at it. $3,219. She's never known what she's on pace for mid-month. "Okay," she thinks. "Okay."

**Motivation shift:** At 4:30 PM, instead of "is this worth it?", Maya opens CommRoute. $847 this week. She needs $1,100 to hit her milestone bonus tier. Two more closes. She knocks three more doors before 6 PM.

**Clawback visibility:** Six weeks later, a customer she closed cancels their service. Maya gets a push notification: "Commission adjustment: -$175 (clawback — cancellation within 60-day window). Updated earnings: $2,441." She doesn't love it. But she understands it. No argument, no call to Marcus, no suspicion. She knew the rules.

**Journey requirements:** Mobile-first earnings dashboard (iOS + Android), real-time update on sale approval, clawback notification with explanation and rule citation, daily end-of-day earnings summary notification, simple one-screen UI requiring no navigation training.

---

### Journey Requirements Summary

| Capability Needed | Source Journey |
|-------------------|---------------|
| Tiered commission rate configuration | Marcus (J1) |
| Clawback automation with configurable rules and audit trail | Marcus (J1), Maya (J4) |
| Payroll export (QuickBooks, Gusto, ADP) | Marcus (J1) |
| Manager approval workflow for rep sales | Marcus (J1) |
| Multi-stage milestone pay triggers | Sarah (J2) |
| Per-watt commission calculation type | Sarah (J2) |
| Team lead override commission (% of sub-team total) | Sarah (J2) |
| White-glove onboarding and complex structure support | Sarah (J2) |
| Seasonal activate/deactivate with history preservation | Jake (J3) |
| Flex-seat billing at differentiated rate | Jake (J3) |
| Rapid rep onboarding (< 5 minutes) | Jake (J3) |
| Mobile earnings dashboard with real-time updates | Maya (J4) |
| Rep-facing clawback notification with rule explanation | Maya (J4) |
| Daily end-of-day earnings notification | Maya (J4) |
| Industry commission templates | All |

---

## Domain-Specific Requirements

### Payroll Compliance & Financial Accuracy

CommRoute is payroll-adjacent: its outputs directly feed into payroll processing systems. This creates financial accuracy obligations that go beyond typical SaaS:

- **Audit trail immutability:** Once a payroll period is locked, no commission calculations within that period can be modified without a manager override that creates a timestamped audit log entry. Audit trail must be exportable as PDF for dispute resolution.
- **Calculation precision:** Commission calculations must use decimal arithmetic (not floating-point) to prevent rounding accumulation errors. All currency values stored and displayed to two decimal places.
- **Clawback documentation:** Every clawback must record: original sale date, cancellation date, days elapsed, rule applied, pre-adjustment commission, clawback amount, post-adjustment commission, manager who logged the cancellation, and timestamp. This is a legal record.
- **Export format fidelity:** Payroll CSV exports must precisely match the field names, data types, and column order expected by Gusto, ADP, and QuickBooks Payroll. A mismatch causes payroll failure. Exports must be validated against current API specs at launch.

### Commission Rule Complexity

The D2D sales domain has commission structures that are genuinely complex and idiosyncratic per operator. The rules engine must support:

- **Flat rate:** Fixed dollar amount per closed sale (e.g., $250/account)
- **Tiered rate:** Rate changes based on cumulative closes within a period (e.g., closes 1–5 at $200, 6–10 at $250, 11+ at $300)
- **Percentage of sale value:** Fixed % of contracted service value (e.g., 8% of roofing job)
- **Per-unit rate:** Dollar amount × quantitative unit (e.g., $0.22/watt for solar)
- **Milestone-triggered pay:** Commission releases at defined job stage transitions
- **Team lead override:** % of sub-team's total commission earned in period
- **Clawback adjustments:** Retroactive deductions based on cancellation timing rules

Any combination of the above must be configurable without engineering intervention. Configuration is done by managers (non-technical) — complexity must be hidden behind clear UI.

### 1099 vs W2 Handling

D2D teams frequently mix W2 employees and 1099 contractors on the same roster. CommRoute must:
- Flag each rep as W2 or 1099 at the roster level
- Include tax classification in payroll export (required for correct payroll processing downstream)
- Not process payroll directly — CommRoute exports to external payroll providers for both classifications

### Integration Requirements

- **Payroll exports:** CSV formats pre-built and validated for Gusto, ADP, and QuickBooks Payroll. No API integration required — file-based export is sufficient and preferred by small operators.
- **SMS gateway:** Twilio or equivalent for end-of-day earnings notifications and clawback alerts
- **Email delivery:** Transactional email via SendGrid or equivalent for daily notifications and export confirmations
- **Future (Phase 3):** Webhook receivers for CRM sale ingest (SalesRabbit, HubSpot). Not in MVP.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

CommRoute is a fully multi-tenant SaaS where each customer company has isolated data with no cross-tenant visibility. One company's rep roster, commission calculations, and payroll exports are never visible to another company.

- **Tenant isolation:** Row-level security on all data tables. Company ID is the primary partition key.
- **Account structure:** One company = one account. Each account has one or more managers/admins + any number of reps.
- **Roles within account:** Owner (full access including billing), Manager (all operational access), Admin (manager access minus billing), Rep (mobile dashboard + sale logging only).
- **Multi-company (Phase 3):** PE roll-up operators managing multiple acquired companies under one billing account. Not in MVP — adds significant data model complexity.

### Role-Based Access Control

| Role | Commission Config | Rep Management | Sale Approval | Clawback | Payroll Export | Billing |
|------|------------------|----------------|---------------|----------|----------------|---------|
| Owner | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manager | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Admin | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Rep | View own structure | — | — | View own | — | — |

### Tenant Configuration

Each account has an independent configuration namespace for:
- Commission structures (unlimited structures per account; reps assigned to one or more structures)
- Clawback rules
- Payroll export format preference and field mapping customization
- Notification settings (which notifications are active, timing, rep-level toggles)
- Billing tier per seat (annual vs flex)

### Billing Model Enforcement

The system must enforce the flex-seat cap (30% of total licensed seats) automatically:
- When manager attempts to activate a flex-seat that would exceed 30% of total seats, display clear warning and require either converting more seats to annual or upgrading plan
- Deactivated seats retain data but are not billed and cannot access the system
- Billing is calculated nightly; proration handled at the period boundary

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product is done when it eliminates Sunday-night payroll spreadsheets for pest control managers. This is not a demonstrator or an experience MVP. It must handle real payroll.

**Validation criteria for MVP success (all 5 required):**
1. 3 paying pest control customers complete 2+ full payroll cycles via CommRoute
2. Zero commission calculation errors reported across those customers in 60 days
3. 60%+ of active reps in paying accounts log into mobile dashboard weekly over 30 days
4. At least 2 customers confirm payroll cycle time reduced by >50% at 60-day check-in
5. At least 1 inbound referral received from a paying customer

**Resource requirements:** 1 full-stack developer (web + mobile capable), 3–4 weeks to MVP, 6–8 weeks to P1 completion.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Marcus's full journey: configure commission structure → add reps → approve sales → clawback management → payroll export
- Maya's full journey: log sale from mobile → see real-time dashboard → receive clawback notification

**Must-have capabilities (P0):**
- Commission structure configuration engine (flat, tiered, %, per-unit, clawback rules)
- Mobile rep sale logging with manager approval workflow
- Real-time mobile earnings dashboard (iOS + Android)
- Web-based manager dashboard with team overview and pending approvals
- Clawback tracking with audit trail and rep notification
- Payroll export (QuickBooks, Gusto, ADP CSV formats)
- Rep and team management with seasonal activate/deactivate
- Annual vs flex license billing enforcement
- Industry templates for pest control, solar (basic), and roofing

### Post-MVP Features

**Phase 1b (4–6 weeks post-MVP):**
- Daily earnings notification (SMS + email)
- Team lead override commission calculation
- Solar milestone-based pay triggers (4-stage)
- Multi-period payroll cadence (weekly / bi-weekly / semi-monthly)

**Phase 2 (Months 4–9):**
- Leaderboard and gamification layer
- GPS check-in for sale verification (optional per manager)
- Native manager mobile app
- Setter/closer split structures for solar
- Automated PDF reports

**Phase 3 (Months 8–18):**
- CRM integrations via webhook API
- Multi-company account structure
- Advanced analytics and benchmarking

### Risk Mitigation Strategy

**Technical risks:**
- *Commission calculation correctness* — risk of production calculation errors that damage trust with early customers. Mitigation: exhaustive unit test suite for calculation engine covering every rule type and combination; all calculation shown with step-by-step breakdown in UI; beta test with 1 friendly customer before charging.
- *Mobile app complexity* — React Native or Flutter required for cross-platform rep dashboard. Mitigation: MVP rep app has exactly one screen (earnings dashboard) — minimal surface area reduces mobile-specific risk.

**Market risks:**
- *DASHP expands to solar/roofing before CommRoute reaches solar* — Medium probability, high impact. Mitigation: ship solar milestone structures in Phase 1b (within 6 weeks of launch), not Phase 2. Build solar customer relationships during pest control beachhead months.
- *Per-rep billing anxiety* — High probability of hesitation from seasonal operators. Mitigation: flex-seat model directly addresses this; include in all initial sales conversations.

**Resource risks:**
- *Commission engine complexity grows beyond estimate* — Mitigation: hardcode the industry templates as a safe floor; configurable rules engine is the growth layer. MVP can ship with templates + limited customization if needed.

---

## Functional Requirements

### Commission Configuration

- FR1: Manager can create a commission structure with a flat dollar rate per closed sale
- FR2: Manager can create a tiered rate commission structure with configurable tier breakpoints and rates per tier
- FR3: Manager can create a percentage-of-sale-value commission structure with configurable rate
- FR4: Manager can create a per-unit commission structure with configurable rate per unit (e.g., $/watt for solar)
- FR5: Manager can configure clawback rules specifying cancellation window (days), clawback trigger type, and clawback percentage (full or partial)
- FR6: Manager can configure multi-stage milestone pay triggers with commission percentage allocated to each stage
- FR7: Manager can configure team lead override commission as a percentage of assigned sub-team total earnings
- FR8: Manager can apply different commission structures to different reps within the same account
- FR9: Manager can select from pre-built industry templates (Pest Control, Solar, Roofing, Home Security) as a starting configuration
- FR10: Manager can preview calculated commission amounts for a sample sale before saving a configuration

### Rep & Team Management

- FR11: Manager can add reps to their account with name, phone number, email, role (W2 / 1099), and commission structure assignment
- FR12: Manager can deactivate a rep (billing stops, history preserved, access revoked) and reactivate a previously deactivated rep
- FR13: Manager can assign a rep as a team lead and link team members to that lead for override commission calculation
- FR14: Manager can designate rep license type as annual or flex (month-to-month) per seat
- FR15: System enforces that flex-seat count does not exceed 30% of total licensed seats, with warning and blocking on attempted violation

### Sale Logging & Approval

- FR16: Rep can log a new sale from mobile app specifying customer address, service type, sale amount, and optional notes
- FR17: Manager can view all pending sale approvals in a queue with rep name, sale details, and timestamp
- FR18: Manager can approve or reject a pending sale with an optional comment
- FR19: Rep receives in-app notification when their sale is approved or rejected, with the manager's comment
- FR20: Approved sale immediately triggers commission calculation and updates rep's real-time earnings total

### Rep Earnings Dashboard

- FR21: Rep can view current earnings broken down by today, this week, this month, and all-time totals
- FR22: Rep can view a list of individual approved sales with the commission earned per sale
- FR23: Rep can view all clawback adjustments applied to their account with reason, date, original sale reference, and amount deducted
- FR24: Rep receives an automated end-of-day earnings notification (SMS and/or email) with daily closes, daily earnings, and week-to-date total
- FR25: Rep can configure notification delivery preferences (opt out of SMS, opt out of email, change send time)

### Clawback Management

- FR26: Manager can log a cancellation by selecting the original sale, which triggers automatic clawback calculation per the configured rules
- FR27: System calculates clawback amount based on days elapsed between sale and cancellation and the configured clawback rule
- FR28: Clawback is automatically deducted from rep's current period running total
- FR29: Rep receives a push notification and dashboard update when a clawback is applied, with the rule that triggered it explained in plain language
- FR30: Manager can view a clawback report showing all cancellations in a period with full audit trail for each

### Manager Dashboard & Reporting

- FR31: Manager can view a summary dashboard showing all reps' current period sales count, commissions earned, and clawbacks
- FR32: Manager can view total commissions payable for the current period across the team
- FR33: Manager can view a pending approvals queue with count badge indicating items requiring action
- FR34: Manager can view a leaderboard of top 5 reps by current period earnings
- FR35: Manager can lock a payroll period, preventing further edits to commissions within that period without an override action
- FR36: Manager can generate a period summary report showing all commissions, clawbacks, and final payable amounts per rep

### Payroll Export

- FR37: Manager can export commission data for a selected date range as a CSV formatted for QuickBooks Payroll
- FR38: Manager can export commission data for a selected date range as a CSV formatted for Gusto
- FR39: Manager can export commission data for a selected date range as a CSV formatted for ADP
- FR40: Manager can view export history showing all previous exports with date, period, format, and file download link
- FR41: Exported CSV includes rep name, employee/contractor ID, earnings amount, earning type (regular commission / override / clawback adjustment), and W2/1099 classification

### Notifications & Communications

- FR42: System delivers daily end-of-day earnings summary to reps via SMS (via configured gateway) and/or email
- FR43: System delivers in-app push notification to rep on sale approval/rejection
- FR44: System delivers in-app push notification to rep when a clawback is applied
- FR45: Manager receives daily digest of pending approvals requiring action if queue is non-empty
- FR46: Manager can configure which notification types are active at the account level and toggle individual notification types per rep

### Account & Billing

- FR47: Account owner can view current seat count, billing tier per seat, and monthly billing amount
- FR48: Account owner can upgrade a flex seat to annual or downgrade an annual seat to flex (subject to 30% flex cap)
- FR49: Account owner can invite additional managers or admins to the account via email
- FR50: System tracks and enforces minimum seat count (5 seats minimum on standard plan)

---

## Non-Functional Requirements

### Performance

Commission calculation accuracy and real-time dashboard responsiveness are core to the product's value proposition. Speed is trust.

- Sale approval → rep dashboard update latency: **<3 seconds** end-to-end (approval action to dashboard refresh on rep's device)
- Manager dashboard initial load: **<2 seconds** for accounts with up to 100 reps
- Payroll export generation: **<10 seconds** for any date range with up to 200 reps and 10,000 sales
- Clawback calculation and dashboard update: **<5 seconds** from manager save to rep notification
- Mobile app cold start to earnings dashboard visible: **<4 seconds** on mid-range Android device

### Security

CommRoute handles compensation data and generates payroll inputs — data classification is financial.

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Commission calculation audit trail records are append-only — no delete, no overwrite without manager override that creates its own audit record
- Password requirements: minimum 8 characters, bcrypt hashing, no plaintext storage
- Session tokens expire after 30 days of inactivity; re-authentication required for payroll export and billing actions
- Rep accounts can only access their own earnings data — no cross-rep visibility
- Manager accounts scoped to their tenant — no cross-tenant data access
- API endpoints require tenant-scoped authentication; no unauthenticated endpoints expose any data
- Payroll export download links expire after 48 hours

### Scalability

Initial scale target: 200 companies × 50 reps average = 10,000 active reps, generating ~500,000 sales per month.

- Architecture supports horizontal scaling of the calculation engine under seasonal load spikes (roofing post-storm events can multiply a customer's rep count 3–4× in days)
- Database design uses company ID as primary partition to support future sharding
- Mobile push notification system supports burst delivery (end-of-day notification sends to all active reps within a 5-minute window)
- System maintains <5 second payroll export generation times at 10× current volume without architectural changes

### Reliability

Payroll is time-sensitive — Sunday evening payroll runs are the critical usage window.

- **99.5% uptime SLA** — measured monthly, with planned maintenance windows only during off-peak hours (2–5 AM UTC)
- Payroll export functionality treated as highest-priority service; degraded mode acceptable for leaderboards but not for export
- Data backup: point-in-time recovery with <1 hour recovery point objective (RPO) for commission calculation records
- Mobile app functions in offline mode for sale logging — queues submissions for sync when connectivity restores

### Integration

- **Payroll export formats** validated against current Gusto (Feb 2026), ADP Workforce Now (current), and QuickBooks Payroll (Desktop + Online) import specifications before launch and re-validated on major version changes
- **SMS delivery** via Twilio; failure to deliver does not block any core workflow — SMS is enhancement, not dependency
- **Email delivery** via transactional email provider (SendGrid or Postmark); delivery failure logged, retry attempted, does not block core workflow
- **Webhooks (Phase 3):** Outbound webhook support for sale approval events to support CRM integrations; documented API spec published before webhook launch

---

*PRD created: 2026-10-27*
*Next step: Architecture — `/bmad-agent-bmm-architect`*
*This PRD is the capability contract for all downstream design, architecture, and implementation work. Any feature not listed in Functional Requirements does not exist in scope unless this document is updated.*

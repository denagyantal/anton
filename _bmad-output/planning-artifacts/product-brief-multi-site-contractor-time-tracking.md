---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/multi-site-contractor-time-tracking.md
  - _bmad-output/planning-artifacts/market-research-multi-site-contractor-time-tracking.md
workflowType: product-brief
lastStep: 5
product_name: multi-site-contractor-time-tracking
date: 2026-04-30
author: Root
---

# Product Brief: Multi-Site Contractor Time Tracking

---

## Executive Summary

Small contractors with 5–50 field employees lose hours every Friday reconciling timesheets across 3–10 active job sites. They're caught between tools built for office workers (no GPS job-site awareness) and enterprise platforms too complex and expensive for a 12-person landscaping crew. The result is manual timesheet chaos, inaccurate job-cost data, payroll disputes, and real wage-theft liability.

This product is a mobile-first GPS time tracking app that solves the single most underserved feature in the category: **automatic job-site detection**. When an employee arrives at a geofenced job site, their phone prompts them to clock in to the correct job — no list to scroll, no job to select. Hours are tagged to the right job automatically. The owner approves the day's timesheets with one tap from their phone. Payroll exports to QuickBooks without accountant cleanup.

No base fee. No per-user pricing trap. One flat price for the whole crew, or a one-time Lifetime Deal that positions us as the obvious choice for cost-conscious small contractors.

**Market opportunity:** 200,000–280,000 US businesses in the 5–50 field employee segment; ~60–70% still on paper or spreadsheets. Zero competitors in the sub-$10/user/month tier offer GPS geofence-triggered automatic job-site clock-in. The weekly payroll reconciliation pain is active, urgent, and explicit — confirmed across multiple Reddit communities as the #1 small business operational bottleneck with no good solution.

**Go-to-market:** Closed beta (20–50 contractors from Reddit/personal network) → AppSumo LTD launch targeting 500–1,000 units at $79–$149 → Capterra/G2 review base → Reddit/YouTube organic growth → MRR conversion at $6/employee/month for teams scaling past 15 employees.

---

## Core Vision

### Problem Statement

Contractors with 5–50 employees working across 3–10 concurrent job sites have no simple, affordable way to accurately track hours by job site. Current tools are either designed for office workers with no GPS job-site tagging (Toggl, Clockify), or built for mid-to-large enterprises with pricing and complexity that crushes small operations (ClockShark $40 base + $9/user, Workyard $50 base + $6–13/user, Hubstaff with GPS as a paid add-on).

The result is a persistent, weekly operational crisis: manual timesheet collection via text message or paper, inaccurate payroll, zero job-cost visibility, and growing wage theft liability exposure as DOL enforcement of construction wage laws intensifies.

### Problem Impact

The consequences cascade across every aspect of the business:

**Operational burden:** The owner spends 2–3 hours every Friday reconciling timesheet discrepancies, calling employees to verify hours, and manually mapping hours to job sites for payroll. This is time stolen from bidding, client management, and running the business.

**Financial damage:** Without accurate job-cost data, contractors cannot identify which jobs are profitable. Inaccurate labor tracking leads to underbidding follow-on projects — a compounding error. Buddy punching (employees clocking in for absent colleagues) costs employers an estimated $400M+ annually across the construction sector.

**Legal liability:** Wage theft is the #1 violation category in US construction. Liquidated damages equal unpaid wages plus an equal penalty plus legal fees. A single DOL audit without a GPS-verified audit trail can be existential for a small operation. State-level minimum wage expansion and Davis-Bacon prevailing wage requirements under the Inflation Reduction Act are dramatically increasing compliance urgency.

**Emotional cost:** Contractors in Reddit communities describe "dreading Fridays." The weekly payroll reconciliation is a recurring source of stress, conflict with employees, and anxiety about doing it wrong.

### Why Existing Solutions Fall Short

**ClockShark** ($40/mo base + $9/user — Standard): Requires employees to manually select from a job list on clock-in. No GPS-triggered prompt. Mobile UX dated. $130/month for a 10-person crew before any GPS features are meaningful. Capterra 4.7/5 but consistent complaints about base fee and job list friction.

**Workyard** ($50/mo base + $6–13/user): Best GPS accuracy in category, but $50 base fee described as "off-putting for small companies just starting out" (direct Capterra quote). GPS auto-clock-in not offered. Core GPS features gated behind Pro tier. Branding is construction-centric, leaving landscaping and cleaning verticals underserved.

**Hubstaff** ($7/seat + $4/seat for GPS add-on): Employee monitoring framing creates privacy objections in field crews. GPS geofencing is an enterprise add-on that pushes effective cost to $11+/user/month. Not job-cost-aware — no way to tag hours to specific job sites as a first-class concept.

**Connecteam** ($35/mo for first 30 + $5/additional): All-in-one platform that overwhelms small contractors needing only time tracking. Three-module pricing structure described as "a sneaky trap" by real users. No automatic GPS job-site assignment. Payroll export requires third-party integration.

**QuickBooks Time** ($20/mo base + $8/user for Premium): Total monthly cost for a 10-person crew reaches $150–240+ after QB Online subscription. Known issues with overtime detection rounding errors. No automatic job-site assignment. Total cost of ownership is the highest in the category for small operations.

**Toggl / Clockify / Jibble (free tiers):** No concept of a "job site" as a GPS-triggered entity. Manual project tagging is entirely user-initiated. Useful for office workers who choose what to track; useless for field crews who need automatic verification.

**The universal gap:** Not one competitor in the sub-$10/user/month tier auto-prompts clock-in based on GPS arrival at a specific geofenced job site. This is not a marginal improvement — it is the feature that eliminates the core adoption failure mode (employees forgetting to clock in or selecting the wrong job from a long list).

### Proposed Solution

A mobile-first GPS time tracking application built specifically for the 5–50 employee field contractor managing multiple concurrent job sites.

**Core workflow:**
1. **Owner setup (10 minutes):** Creates job sites by entering address; app draws a configurable geofence (50–500m radius). Adds employees, sets hourly rates.
2. **Employee experience (1 tap):** Employee arrives at job site → phone pushes: *"Tap to clock in: Johnson Residence Deck"*. Employee taps once. GPS coordinates and timestamp are recorded. When they leave the geofence, same prompt: *"Tap to clock out."*
3. **Manual override:** Employee traveling between sites or in poor GPS area can manually select any active job site and clock in without waiting for geofence trigger.
4. **Owner daily review (mobile, 5 minutes):** Each evening, owner sees a summary: [Employee Name] — [Job Site] — [Hours] — [Approve ✓ / Flag ⚑]. One tap per row.
5. **Overtime alert:** Push notification to owner when any employee approaches their OT threshold (configurable: 8h/day, 40h/week).
6. **Friday payroll export (2 minutes):** Tap Export → Weekly CSV with columns mapped to QuickBooks format (Employee Name, Date, Regular Hours, OT Hours, Job Site, Pay Rate). Import directly into QB Online.

**Pricing:**
- $79 LTD Tier 1: Up to 5 employees, unlimited job sites, GPS clock-in, daily approval, CSV export
- $149 LTD Tier 2: Up to 15 employees, all Tier 1 features + QuickBooks export, OT alerts, job cost reports
- $6/employee/month: Teams over 15 employees (MRR growth path as crews scale)

### Key Differentiators

1. **GPS geofence-triggered clock-in prompt** — The only sub-$10/user tool that automatically detects which job site an employee is at and presents the correct job for clock-in. Eliminates the entire category of "wrong job selected" errors and "forgot to clock in" disputes.

2. **No base fee, no pricing trap** — The single biggest objection to every competitor is the base fee ($40–50/month before adding one employee). Flat per-employee pricing or LTD eliminates this friction and makes cost completely predictable.

3. **Mobile-first owner approval flow** — Every competitor focuses on the employee clock-in UX but neglects the owner's daily review experience. A single-screen, one-tap-per-employee approval view on mobile is a genuine workflow improvement that no competitor prioritizes.

4. **3-tap maximum clock-in** — Field adoption is binary: if clock-in takes more than 3 taps, employees abandon it within two weeks. Architectural commitment to simplicity above all else differentiates against competitors adding HR, scheduling, and communication bloat.

5. **Simplicity-first positioning** — While ClockShark and Workyard expand toward field management platforms (adding complexity), this product leans hard into "the simplest GPS job clock for small crews." Simplicity is a moat that gets stronger as competitors add features.

6. **LTD pricing** — No competitor in the field service time tracking category offers an AppSumo-style lifetime deal. Contractors are deeply price-sensitive on recurring subscriptions and respond viscerally to the math: "one month of ClockShark = 3 years of this."

---

## Target Users

### Primary Users

**Persona 1: Marcus — The Landscaping Owner-Operator**

Marcus, 41, runs a landscaping and lawn care business with 12 employees in suburban Ohio. He started solo eight years ago and has grown to three crew trucks. His employees are a mix of long-term workers (3–5 years) and seasonal hires. Marcus himself is in the field every day — he manages a crew at one property while other crews work independently at 6–8 other properties.

*Current situation:* Crew leads text Marcus their hours at end of day. Half the time they forget, so he texts them Friday morning before payroll. Some employees forget which property they were at on Tuesday. Marcus spends 2–3 hours every Friday cross-referencing texts, call logs, and his own memory to produce hours-by-customer for billing and payroll. He uses QuickBooks Self-Employed and does his own books.

*Pain points:* No way to verify crew arrival times without calling. Customer billing disputes ("you billed 4 hours, my neighbor saw them leave after 2"). Seasonal employees who don't respond to texts on Friday. No job-cost visibility — Marcus can't tell if his commercial accounts are actually profitable.

*Success vision:* "I want to see a list every evening: Marcus crew — Riverside Corporate — 6.5h. Done. On Friday I hit export and my payroll is done in 15 minutes."

*Device:* Samsung Galaxy A-series Android. Strong preference for apps that work with no training — his seasonal employees don't speak English as a first language.

*Willingness to pay:* $79 LTD is a no-brainer ("I spend more than that on a single tool"). $5/employee/month MRR would be acceptable if the tool is reliable.

---

**Persona 2: Sarah — The Small General Contractor**

Sarah, 48, owns a general contracting business with 22 employees in the Pacific Northwest. She focuses on residential remodels and light commercial projects. Her business does $2.1M annual revenue. She has a part-time office manager (Maria) who handles payroll every two weeks using QuickBooks Online. Sarah carries government contracts that occasionally require prevailing wage compliance.

*Current situation:* Sarah uses a paper timesheet system where foremen fill out sheets and drop them in a box at the office. Maria spends 4–6 hours every other Friday transcribing and reconciling, then follows up with foremen about illegible or missing entries. The process produces frequent payroll errors and a backlog of job-cost uncertainty — Sarah cannot tell with confidence which projects are running over on labor until the job is complete.

*Pain points:* Paper timesheet reconciliation is a recurring bottleneck. Payroll errors create employee trust issues. No real-time job-cost data means she discovers overruns too late to adjust. Prevailing wage compliance is manual and error-prone. Maria's 6 hours is a cost Sarah can eliminate.

*Success vision:* "If I can give Maria a clean QB export on payroll day that she just imports — no cleanup, no calls to foremen — I've solved 80% of my admin problem."

*Device:* iPhone 14 Pro (personal), MacBook Pro (office). Expects iOS app with clean UX. Values QuickBooks integration above all other features.

*Willingness to pay:* $149 LTD (must include QB sync). At MRR, would pay up to $10/employee/month ($220/month for full crew) given current cost of Maria's reconciliation time.

---

**Persona 3: David — The Cleaning Service Operator**

David, 35, operates a commercial cleaning company with 38 employees in Houston. His crews visit 15–25 client locations per day — offices, medical facilities, retail stores. Each visit is 45 minutes to 3 hours. Clients pay per-visit fees and occasionally dispute whether a visit actually occurred.

*Current situation:* David uses a PIN-code time clock app (Homebase) that employees access on a shared tablet at the office. The problem: employees are never at the office. They go directly to client sites from home and return home after their last site. Buddy punching is rampant — David suspects 10–15% of logged hours are fraudulent. Client billing disputes happen monthly: "Your crew didn't show up Thursday night" — David has no GPS-verified proof.

*Pain points:* Buddy punching and ghost hours cost David an estimated $3,000–5,000/month. Client billing disputes are unwinnable without a GPS log. No job-site-specific tracking means he can't allocate labor costs to specific client contracts for profitability analysis.

*Success vision:* "I need a GPS-verified log that shows employee X arrived at Client Y location at 9:03 PM and clocked out at 10:47 PM. That ends every dispute."

*Device:* Mix of cheap Android phones (Motorola Moto G-series, Samsung A-series). Must work on $150 Android phones. One-tap clock-in is non-negotiable — any friction and employees just won't use it.

*Willingness to pay:* $3–5/employee/month; prefers LTD for cost predictability. At $149 LTD for 15 employees, the math is: "I recoup this in the first week of eliminated buddy punching."

### Secondary Users

**Field Employees (End Users of Clock-In):**
The hourly field worker who clocks in and out. Ultra-low tech tolerance. Must require zero training and zero daily decisions. The UX must assume: Android, low-end device, limited connectivity, possibly ESL, no patience for a multi-step app flow. The product succeeds or fails based on whether this user adopts it within the first week.

**Accountants and Bookkeepers (Export Recipients):**
The person who receives the payroll export. Not a direct user of the app, but a critical influencer: if the CSV requires cleanup, they push back on the owner, and the tool gets abandoned. The export must be pre-mapped to QB Online's import format without any column remapping by the accountant.

**Foremen and Crew Leads (Intermediate Approvers):**
On larger crews (15+ employees), the owner may not want to approve every individual timesheet. Foremen can act as first-line approvers for their crew, with the owner approving the foreman's summary. This role is a Phase 2 feature but is important for the $149 LTD tier.

### User Journey

**Marcus's Journey — from Discovery to Advocacy:**

*Discovery (Day 0):* Marcus posts in r/lawncare: "What do you guys use to track crew hours across different properties? Texts aren't working anymore." Sees a reply: "I've been using [product] — crews auto-clock-in when they hit the property. Game changer." Clicks the link.

*Evaluation (Days 1–3):* Reads the Capterra listing (4.7 stars, 40+ reviews). Watches a 3-minute YouTube demo showing the geofence setup and clock-in prompt. Starts free trial. Spends 20 minutes adding 5 job sites and 3 employees as a test.

*Aha Moment (Day 2):* Takes his test phone to a job site. His phone vibrates: *"Tap to clock in: Riverside Corporate Park"* — the correct job, instantly, with no navigation. He taps. The moment is immediate and visceral: "This just works."

*Full Rollout (Days 4–7):* Adds all 12 employees. Sends a 90-second screen recording to the WhatsApp group showing how to clock in. Monitors adoption from his dashboard — 10 of 12 employees clock in on Day 1.

*Value Realization (Day 12 — First Friday):* Opens app at 6 PM. 12 rows, all correctly tagged to job sites, all showing hours that match his mental model. Taps Approve on each row. Taps Export. Sends CSV to QB. Total time: 18 minutes. He texts his wife: "Payroll is done."

*Advocacy (Day 30):* Posts in r/lawncare: "For anyone who asked about time tracking last month — I've been using [product] for a month. It's the only one that actually works for field crews. Geofences automatically clock them in to the right job. No more Friday chaos."

---

## Success Metrics

### User Success Metrics

**Clock-in accuracy:** >95% of clock-in events correctly tagged to the intended job site, as validated by owner review (target: reduction of "wrong job" corrections from estimated 15–20% in manual systems to <5% within 30 days).

**Owner review time:** Average time to complete weekly payroll review (approve all timesheets + export) reduced to <20 minutes, down from 2–3 hours in baseline (self-reported at onboarding + measured at 30-day check-in).

**Field adoption rate:** >80% of added employees complete at least 3 clock-in/clock-out cycles in their first week. <20% of employees require owner intervention (reminder, troubleshooting) in week 1.

**Payroll accuracy:** Zero payroll disputes attributable to time tracking errors within 60 days of adoption (measured via in-app feedback and support ticket analysis).

**Export success:** >90% of owners who attempt a weekly export complete it without contacting support (measures export UX quality and QB compatibility).

### Business Objectives

**3 months (July 2026):**
- 50+ closed beta users actively tracking in production environments
- GPS accuracy validated at >95% across varied field conditions (construction sites, suburban residential, commercial parks)
- AppSumo LTD launch in pipeline; pre-launch waitlist of 200+ contractors
- 25+ verified Capterra reviews; minimum 4.5-star average

**6 months (October 2026):**
- 300+ active paying users (LTD + MRR combined)
- AppSumo LTD campaign complete: 500–800 units sold, $40,000–120,000 gross revenue
- 60+ Capterra reviews; Capterra "Emerging Favorite" badge target
- Native QuickBooks Online sync shipped and in use by >40% of Tier 2 users
- 3 vertical-specific YouTube tutorials live (landscaping, cleaning, general contracting)

**12 months (April 2027):**
- 2,000+ employees actively tracked (across all accounts)
- $10,000+ MRR from growth-tier billing ($6/employee/month above 15 employees)
- AppSumo badge and 150+ reviews; G2 category presence established
- QuickBooks integration NPS >8.0 (out of 10)

**18 months (October 2027):**
- $20,000+ MRR
- LTD base of 1,000+ accounts generating organic referrals
- Prevailing wage compliance module launched as premium tier ($19/month add-on)
- Expanding to landscaping and cleaning as named vertical brands

### Key Performance Indicators

| KPI | Target | Measurement Method | Timeframe |
|-----|--------|--------------------|-----------|
| GPS geofence trigger accuracy | >95% | Correct job tagged vs. total triggers | 30 days post-launch |
| Field employee adoption (week 1) | >80% clock in ≥3 times in week 1 | In-app event tracking | Per cohort |
| Owner weekly export rate | >70% of active accounts export weekly | Export event tracking | 60 days post-onboarding |
| Time-to-first-geofence (onboarding) | <15 minutes from signup | Funnel analytics | Continuous |
| Net Promoter Score (owner) | >50 | In-app survey at 30d and 90d | Continuous |
| Monthly churn | <5% after first payroll cycle | Subscription analytics | Monthly |
| LTD refund rate (AppSumo) | <12% | AppSumo dashboard | During campaign |
| Support tickets (payroll export) | <5% of export events trigger support contact | Support ticket tagging | Monthly |
| MRR growth | $10K MRR by month 12 | Revenue dashboard | Monthly |
| Capterra rating | >4.5 stars | Capterra review monitoring | Continuous |

### Strategic Metrics

**Competitive displacement rate:** Track what product each new user reports replacing (via onboarding survey). Target: 50%+ of users previously on paper/spreadsheets (indicates greenfield market capture), 30%+ replacing a competitor (ClockShark, Workyard, Hubstaff, Connecteam).

**Viral coefficient:** Track referral source for new signups. Target: >30% of new users arrive via contractor-to-contractor referral (Reddit recommendation, word-of-mouth in trade groups) — the highest-trust acquisition channel in this segment.

**LTD-to-MRR conversion:** Track % of LTD accounts that activate MRR billing (due to crew growth past tier limit). Target: >15% of LTD accounts activate MRR within 12 months — validates the "grows with the crew" model.

---

## MVP Scope

### Core Features

The MVP delivers one complete workflow: **employee arrives at job site → GPS auto-clock-in prompt → works → leaves → owner approves → exports to payroll**. Every feature either enables this workflow or protects its integrity.

**1. Job Site Management**
Owner creates job sites by entering an address or dropping a pin on a map. App draws a configurable geofence (default 100m radius; adjustable 50–500m). Supports unlimited job sites. Each job site has a name and optional color tag. Job sites can be temporarily paused (no clock-in prompts) without deletion.

**2. GPS Geofence-Triggered Clock-In Prompt**
When an employee's device enters a job site geofence, the app pushes a notification: *"Tap to clock in: [Job Site Name]"*. Single tap confirms clock-in. GPS coordinates, timestamp, and accuracy radius are recorded. Works on iOS and Android. Requires location permission set to "Always" — onboarding guides employee through this once.

**3. Manual Clock-In with Job Selection**
Employee can clock in manually at any time by opening the app, seeing a list of active job sites (sorted by distance), and tapping their current site. Covers: poor GPS signal, traveling between sites, indoor work where geofence may not trigger reliably.

**4. GPS-Verified Clock-Out**
When employee exits geofence, push notification: *"Tap to clock out: [Job Site Name]"*. Single tap confirms. If employee forgets to clock out (geofence exit detected but no tap within 30 minutes), system logs a provisional clock-out with a flag for owner review.

**5. Offline Clock-In**
Employee can clock in/out with no connectivity. Timestamp is stored locally and syncs when connection restores. Visible indicator in app when offline. Owner dashboard marks synced-offline clock-ins with a note.

**6. Daily Timesheet Summary (Mobile)**
Each evening, owner receives a push summary: number of employees who clocked in today, total hours, any flags (missed clock-out, GPS low accuracy). Owner opens app to see per-employee daily rows: [Name] — [Job Site] — [Hours] — [Status: Approved / Flagged / Pending].

**7. Owner One-Tap Daily Approval**
Owner swipes right (approve) or taps a flag icon (flag for review) on each employee's daily row. Flagged rows show raw clock-in/out times and GPS accuracy for investigation. Approved timesheets are locked against employee editing.

**8. Overtime Threshold Alert**
Owner configures daily OT threshold (default: 8h) and weekly OT threshold (default: 40h). Push notification fires when any employee crosses 85% of threshold (configurable). Alert shows employee name, current hours, time until OT kicks in.

**9. Weekly Payroll Export (CSV)**
Owner taps Export for any date range (default: current week). CSV output includes: Employee Name, Employee ID (optional), Date, Clock-In Time, Clock-Out Time, Regular Hours, Overtime Hours, Job Site Name, Job Site ID, Pay Rate, Total Pay. Columns match QuickBooks Online timesheet import format exactly. Export emails to owner's email or saves to device.

**10. Team Management**
Owner adds employees by email or phone number (SMS invite link). Assigns pay rate per employee. Views team status: active employees, last clock-in, current job site (live). Removes employees (data retained for historical records). Employee app is invitation-only — no public registration.

### Out of Scope for MVP

**Explicitly deferred to Phase 2:**
- Native QuickBooks Online API sync (CSV export handles 80% of use case; API maintenance on LTD creates financial risk — Phase 2 after MRR validation)
- Gusto / ADP / Paychex direct integrations
- Foreman / supervisor approval tier (owner-only approval in MVP)
- Web dashboard for owners (mobile-only MVP; web is Phase 2)
- Job cost report (hours × rate per job, total labor cost per project) — Phase 2
- Sub-contractor / 1099 worker support

**Explicitly deferred to Phase 3 (MRR upsell):**
- Prevailing wage / certified payroll (Form WH-347) — premium compliance module
- Multi-rate support (different pay rates per site type, prevailing wage rates)
- Scheduling / job dispatching (assign employees to jobs by day)
- Equipment / asset time tracking
- Photo documentation and site notes
- Facial recognition / biometric clock-in
- API for third-party integrations (Jobber, ServiceTitan, Procore)

**Out of scope indefinitely:**
- Time tracking for office or remote workers (not the product we're building)
- Project management or task tracking
- Client-facing portal or billing module
- Invoicing

**Why these boundaries matter:** The MVP succeeds by being the simplest possible GPS job clock, not by being a feature-equivalent of ClockShark. Every deferred feature is an opportunity to charge more later, not a mistake to fix. Field adoption depends on the employee app being one-tap simple — adding features increases the attack surface for adoption failure.

### MVP Success Criteria

Before AppSumo LTD launch, the MVP must satisfy all of the following gates:

**Technical validation:**
- GPS geofence trigger accuracy >95% in real field test conditions (test set: suburban residential, multi-unit commercial, rural, multi-story building approaches)
- Clock-in flow completes in ≤3 taps from notification (no typing required for standard use)
- Offline clock-in syncs correctly within 60 seconds of connectivity restore
- QuickBooks Online import confirmed error-free on a real QB account (no column remapping by accountant)

**Adoption validation:**
- 20+ contractors complete a full week of active use in closed beta
- >80% of beta employees (not just owners) actively clock in/out without owner prompting in week 2
- Owner NPS ≥ 7 after first complete payroll cycle (Friday export)
- Zero critical GPS-triggered payroll errors reported in first 30 days of beta (a "critical error" = wrong employee paid wrong amount due to system failure)

**Business validation:**
- AppSumo pre-launch waitlist of 200+ verified contractors (real email opt-ins from Reddit, YouTube, or direct outreach — not purchased)
- LTD pricing validated: at least 30 beta users asked about or willing to pay $79–149 LTD price point

### Future Vision

**Phase 2 (Months 4–8 post-launch): Deepen Integration**

The core MVP user base has validated the workflow. Phase 2 adds the features that increase switching cost and move the product from "useful tool" to "payroll backbone":

- **Native QuickBooks Online sync:** OAuth-connected sync that pushes approved weekly timesheets directly into QB Online as time entries, mapped by employee and customer. No CSV handling. Accountant never touches the file.
- **Gusto direct integration:** Push approved hours to Gusto for payroll processing. Mapped fields for regular/OT hours, job allocation.
- **Job cost report:** Labor hours × pay rate per job site, per period. One-tap report that answers: "How much did I spend on labor at the Elm Street remodel this month?" Exportable PDF for project review.
- **Web dashboard:** Owner can review, approve, and export from any browser. Same approval UX as mobile, just larger screen.
- **Foreman approval tier:** Crew lead can approve their team's daily timesheets; owner approves foreman's summary.
- **Sub-contractor support:** Track 1099 workers at a separate billing rate; separate payroll export column.

**Phase 3 (Months 9–18): Compliance and Scale**

The product becomes a compliance and cost-control platform for contractors taking on government work and growing past 25 employees:

- **Prevailing wage / certified payroll (Form WH-347):** Auto-generated certified payroll reports for Davis-Bacon covered projects. Premium tier at $19/month add-on.
- **Multi-rate support:** Different pay rates per job site type (standard residential, prevailing wage commercial, union-rate projects).
- **Scheduling integration:** Assign employees to job sites by day; employees see their schedule in the app and geofence is only active for their assigned site.
- **Equipment tracking:** Attach equipment hours to job sites alongside labor hours for full job cost analysis.
- **State wage law monitoring:** Alerts for state-specific daily OT rules (California 8/80 rule, etc.).

**Long-Term Vision (Years 2–3): Field Operations Platform**

From the GPS time clock as the wedge, expand into the adjacent workflow steps that small contractors still do manually:

- **Estimating integration:** Job cost actuals from completed jobs feed directly into bid templates for future similar projects. "Your labor cost per sq ft on the last 10 landscaping projects was $X — here's your bid template."
- **Invoicing:** Convert approved timesheets into client invoices (for time-and-materials contracts). Close the loop from clock-in to payment without leaving the app.
- **150+ integration marketplace:** Jobber, ServiceTitan, Procore, ADP, Paychex, Housecall Pro — API integrations that make this the hub for field operations data.
- **International expansion:** English-speaking contractor markets with similar regulatory environments: UK, Canada, Australia.

The product's long-term moat is the combination of GPS audit trail + payroll history + job cost actuals. Once a contractor has 2+ years of data in the system, the switching cost approaches infinity — every historical bid reference, every payroll record, every job cost comparison lives here.

---

*Product Brief completed: 2026-04-30*
*Based on: Market Research (2026-04-30) + Shortlisted Idea (scored 85/105, signal confirmed across 6 Reddit research cycles)*
*Next step: create-prd — Full Product Requirements Document*

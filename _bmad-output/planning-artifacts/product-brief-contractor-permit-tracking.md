---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/contractor-permit-tracking.md
  - _bmad-output/planning-artifacts/market-research-contractor-permit-tracking.md
workflowType: product-brief
lastStep: 5
project_name: contractor-permit-tracking
user_name: Root
date: 2026-05-28
---

# Product Brief: Contractor Permit Tracking Software

<!-- Generated autonomously from shortlisted idea + market research — 2026-05-28 -->

---

## Executive Summary

Small licensed contractors — electricians, plumbers, HVAC technicians, and general contractors with 2–15 employees — are drowning in permit management overhead that has no affordable software solution. They pull permits on every job, run 10–30 active permitted jobs simultaneously, and manually juggle submission deadlines, inspection windows, pass/fail outcomes, and permit close dates across multiple city and county portals.

**The product:** A purpose-built, mobile-first permit tracking tool that gives small contractor shops one dashboard across all open permits on all active jobs, with proactive SMS/email alerts before inspection deadlines expire. $29–$69/mo flat — no per-job fees.

**The opportunity:** The permit management software market is bifurcated. Enterprise tools (PermitFlow $350+/mo, GreenLite custom pricing) have raised over $140M targeting Fortune 500 developers and national builders. Field service management tools (Jobber $29/mo, Housecall Pro $59/mo) have zero permit workflow. The NAHB 2025 Technology Adoption Survey confirms 66% of contractors still track permits via spreadsheets or whiteboards — a 3M+ contractor market with proven pain, proven willingness to pay, and no affordable product in place.

**Why now:** Permit tracking software adoption has grown from 11% to 34% of residential contractors in just three years (2022–2025), proving the category is inflecting from early adopters to mainstream. The 18–24 month window before a well-funded entrant moves downmarket is the window to own this niche.

**Revenue path:** 350 contractors at $49/mo = $17,150 MRR within 12–18 months. AppSumo LTD ($69 one-time) as the launch vehicle — zero competing contractor permit tools exist on AppSumo today.

---

## Core Vision

### Problem Statement

Small licensed contractors must pull permits for nearly every job they perform. An electrician, plumber, or HVAC tech running 10–30 active jobs simultaneously has dozens of open permits at any given time — each with a jurisdiction, permit number, submission date, scheduled inspection date, pass/fail status, and close date. Missing an inspection window costs $340+ in re-inspection fees and causes schedule delays averaging 15 business days. A permit expiration discovered mid-project can trigger a stop-work order.

Today, 66% of contractors manage this entirely in spreadsheets, physical whiteboards, or from memory. No purpose-built, affordable tool exists for the 2–15 person shop.

**The core failure mode:** Spreadsheet-based permit tracking is passive — it doesn't alert you. By the time someone notices an inspection date is approaching, it's often already missed. The whiteboard in the office doesn't notify the foreman on site.

### Problem Impact

The financial cost of manual permit tracking is well-documented:

| Impact | Magnitude |
|--------|-----------|
| Annual permit-related losses (avg contractor) | $52,000+ |
| Each missed inspection window | ~$340 re-inspection fee + 15-day delay |
| Failed inspections per year (avg) | 34 incidents = $11,560 |
| Permit delay impact per project | $4,200 average |
| Admin time spent checking portals | 60% of compliance staff time |

Beyond financial cost: 38% of permit delays go undiscovered for 5+ days in companies without automated tracking. For owner-operator shops where the owner's spouse or an office manager owns permit tracking as a side task, the problem is even more acute — it's invisible until it explodes.

One avoided re-inspection fee ($340) covers 4.9 months of a $69/mo subscription. This ROI story takes 30 seconds to tell.

### Why Existing Solutions Fall Short

**Enterprise tools are priced out:**
- PermitFlow ($350–$500+/mo): Built for Amazon, Lennar, IKEA. Overkill in features and budget for a 4-person electrical shop. The $54M Series B in December 2025 confirms their focus is moving further upmarket, not down.
- Procore ($2,000+/mo), GreenLite (custom): Irrelevant to small shops.

**FSM tools have zero permit workflow:**
- Jobber ($29/mo) and Housecall Pro ($59/mo) are the dominant tools for small trade contractors. Both offer document attachment only — no permit-specific fields, no inspection scheduling, no reminder cadences. Contractors using Jobber maintain parallel spreadsheets for permits. This is a confirmed, explicit gap.

**Adjacent tools miss the mark:**
- Buildertrend ($199–$499/mo): Treats permits as project management milestones; 12–15% permit delay reduction vs. 72% for dedicated tools.
- ConstructionOnline ($99/mo): Added permit tracking as a feature in 2024, but it's buried in a broad construction management platform — no jurisdiction intelligence, no mobile-first UX.
- Bella FSM ($35+/mo): Permit-aware marketing for electrical contractors, but permit tracking is one feature of an FSM product, not the core purpose.
- InstaPermit (free, California only): Validates the pain acutely for California solar/electrical contractors, but is monitoring-only (pulls portal status), not a job record management tool, and geographically limited.
- Ezelogs ($8/mo): Affordable but built for general construction compliance, not specifically contractor permit workflow.

**The synthesis:** Every tool in the $29–$99/mo range that small contractors already trust lacks permit workflow. Every tool with permit workflow costs $200+/mo minimum. The gap is precisely where small contractors spend on software today.

### Proposed Solution

**PermitTrack** (working name) — the whiteboard replacement for small licensed contractors.

A purpose-built, mobile-first permit tracking tool built around one central view: all your open permits, across all your active jobs, sorted by next action date. The product replaces the spreadsheet/whiteboard with:

1. **Per-job permit dashboard** — one row per open permit, visible across the whole company, with status at a glance
2. **Proactive reminders** — SMS and email alerts at 7/3/1 days before each inspection date, plus overdue notices when inspection windows pass
3. **Pass/fail history** — structured log per job for contractor records and client documentation
4. **Simple data entry** — jurisdiction, permit type, permit number, submission date, inspection date, status (submitted/approved/scheduled/passed/failed/closed) — fields every licensed contractor already knows
5. **PDF export** — permit status report per job for owner records and client handoff at project close

The product is not trying to be PermitFlow. It does not submit permits, research jurisdictions, communicate with AHJs, or manage project schedules. It is the simplest possible tool that makes the "missed inspection" problem go away — and that's exactly what small contractors need.

**Positioning headline:** "Never miss an inspection again. $29/mo."

### Key Differentiators

1. **Purpose-built, not bolted-on:** Not a feature inside a construction platform. The entire product exists to solve one problem: permit tracking for small contractor shops. This focus means the UX can be optimized entirely for how a 5-person electrical company actually works.

2. **Proactive vs. reactive:** Every competing tool in the affordable range is reactive — you look it up when you remember. PermitTrack pushes reminders before the deadline, converting the failure mode (missed inspection) into a non-event.

3. **Mobile-first for job site reality:** Small contractors are on job sites, not at desks. The product must work from a phone — checking status, marking an inspection passed, seeing what's due this week. Desktop tools designed for office admins miss where contractors actually live.

4. **Flat pricing with no surprises:** Small contractors are allergic to per-job or per-permit fees that scale unpredictably with business volume. One monthly number, no matter how many jobs are running.

5. **Built-for-trades identity:** PermitFlow was built by construction-tech VCs for enterprise developers. This product is built by someone who understands that an electrician tracks "electrical permit," "panel permit," and "rough inspection" — not "document milestone type 3B." The language and defaults are right for the trades.

6. **ROI that writes itself:** One re-inspection fee avoided pays for 4.9 months. This is not a hard sell — it's a calculator.

---

## Target Users

### Primary Users

#### Persona 1: Marcus — Owner-Operator Electrician

**Background:**
Marcus runs a 6-person electrical contracting company in suburban Ohio. He's been in the trades for 18 years — journeyman for 10, running his own shop for 8. His wife Jennifer handles admin (QuickBooks, invoicing, permit paperwork). They have 3 apprentices and 2 journeymen. Revenue: ~$1.8M/year. 18–22 active jobs at any time, typically 12–15 open permits across those jobs.

**Current permit reality:**
Jennifer maintains a Google Sheets permit log. There's a column for each: job address, permit number, jurisdiction, submitted date, inspection scheduled, result. She checks it every Monday and updates it based on calls to city offices or portal logins. She manages 4 different municipal portals, each with its own login. When she goes on vacation, Marcus checks it — which means he often doesn't, and things slip.

**The pain trigger:**
Three months ago, a permit expired while the job was running. They didn't catch it until the inspector showed up and found no valid permit on site. Stop-work order. $340 re-inspection fee. Lost 9 working days. The client was furious. Marcus was on another job site when Jennifer called — he couldn't do anything from where he was.

**What success looks like:**
Marcus opens the app on his phone Monday morning and sees: "3 permits due for inspection this week." He taps each one, sees which job it's for, calls his lead on that crew, confirms inspection is scheduled. Friday: he gets a text — "Permit #E-2024-081 at 4430 Elm Ave: inspection scheduled for tomorrow." He marks it scheduled. Day of: he marks it passed. No spreadsheet. No portal login. No missed deadline.

**Purchase decision:**
Marcus doesn't run long software evaluations. If he sees a tool for $29/mo with a 14-day free trial that clearly solves the permit tracking problem, and a contractor peer in a Reddit thread said it saved them from a missed inspection — he'll sign up within a week. He's already paying $47/mo for Jobber (which doesn't track permits). He pays for what works.

---

#### Persona 2: Diana — HVAC Business Owner/Operator

**Background:**
Diana owns a 4-person HVAC company in the Phoenix metro. She and her husband are both technicians; she handles the office side. Revenue ~$900K/year. They run 8–15 active jobs at any time. Diana pulls 4–8 permits per month — mechanical permits for new installations, electrical permits for equipment changes, sometimes structural if there's ductwork in an unconditioned space.

**Current permit reality:**
Diana tracks permits in a physical binder with a hand-written log sheet in the front. She's been burned twice by missed permits — once a permit expired before final inspection, once she scheduled work before the permit was approved. Her binder works when she's in the office; it doesn't help when she's on a call center in Mesa.

**What success looks like:**
A tool that tells her which permits are approved and ready to schedule work on, which are waiting for inspection, and which are overdue for close. She wants this on her phone. She doesn't want training. She expects to be set up in 20 minutes.

**Purchase decision:**
Diana discovered the tool via r/HVAC where someone posted "how are you managing permits?" She clicked the link, saw the price ($29/mo), and signed up for the free trial immediately. She cancelled her physical binder habit within the first week.

---

#### Persona 3: Tom — Small GC with Specialty Subs

**Background:**
Tom runs a 12-person general contracting company focused on residential remodels and light commercial TI. He has in-house carpenters and manages specialty subs (electrical, plumbing, HVAC). Revenue: ~$3.5M/year. Runs 5–10 active projects simultaneously; each project has 3–5 permits (electrical, plumbing, mechanical, structural, building/demo).

**Current permit reality:**
Tom's project manager uses Buildertrend for scheduling but permit tracking is maintained in a shared Google Sheet. The sub-contractors are responsible for their own permits, but Tom is the GC of record — he needs visibility. When a sub's permit expires or a rough inspection is missed, Tom gets the fine and the delay.

**What success looks like:**
A shared permit dashboard where he and his PM both have access, where each sub's permits are tracked against the project, and where the PM gets automated reminders before inspection deadlines — not relying on the sub to remember. Exportable status report to send to the client at project close.

**Purchase decision:**
Tom tried ConstructionOnline for the permit feature but found it too buried and lacking mobile alerts. He'll pay $69/mo for a dedicated tool that solves the problem completely — he's paying for peace of mind, not just features.

---

### Secondary Users

**Office Administrators / Permit Coordinators:**
In shops with 8+ employees, permit paperwork is often owned by a dedicated admin (even if part-time). This person is the power user of the tool — they log all permits, update statuses, set inspection dates. They are the day-to-day operator, but they are not the purchase decision-maker. The owner buys; the admin uses.

**Field Foremen / Lead Technicians:**
On larger jobs, a lead tech or foreman may be responsible for knowing their permit status and scheduling the inspection with the jurisdiction. They need read-only (or limited write) access from a mobile device — see which permits are active on their job, mark when an inspection is scheduled or passed.

**Specialty Subcontractors (for GC customers):**
When a GC uses the tool, their subs may need to enter and update their own permits. A shared/multi-company access model becomes relevant at this tier — but this is a Phase 2 concern, not MVP.

---

### User Journey

**Discovery:**

1. **Trigger event:** A missed inspection, expired permit, or stop-work order causes direct financial pain ($340+ re-inspection, project delay).
2. **Search:** Google "contractor permit tracking software" or "permit tracking app for electricians" — or a Reddit post in r/electricians, r/HVAC, or r/Plumbing where someone asks "how do you manage your permits?"
3. **Discovery:** PermitTrack appears as the first affordable, purpose-built result. The headline "Never miss an inspection again. $29/mo" matches exactly what they just Googled after their worst week.

**Onboarding:**

4. **Sign-up:** Free 14-day trial, no credit card required. Takes email and company name.
5. **First job entry:** Creates their first job, adds 2–3 existing open permits. Realizes it takes 3 minutes to enter what they've been managing in a spreadsheet.
6. **First reminder:** Receives their first SMS/email reminder 3 days before an upcoming inspection. The "aha" moment: the tool remembered so they didn't have to.

**Core Usage:**

7. **Weekly habit:** Monday morning check of the permit dashboard: what's due this week, what's overdue, what needs to be scheduled.
8. **Post-inspection update:** After inspector leaves, opens app on phone, marks permit passed.
9. **New job setup:** When bidding a new job, adds the job record first so permits can be attached as they're pulled.

**Success Moment:**

10. **First avoided crisis:** Receives a "7 days to inspection expiry" alert for a permit they'd forgotten about. Calls the jurisdiction, schedules the inspection in time. $0 re-inspection fee. This is the moment they tell someone about the product.

**Long-Term Retention:**

11. **Routine integration:** App is checked alongside Jobber/QuickBooks as part of the weekly admin routine.
12. **Advocacy:** Mentions the tool in r/electricians when someone asks "how do you track permits?" — the organic acquisition loop closes.
13. **PDF at close:** At project completion, exports the permit history PDF for the client's records. Clients notice and comment. Tom uses it as a differentiator in his GC pitch.

---

## Success Metrics

### User Success Metrics

| Metric | Definition | Target |
|--------|-----------|--------|
| "Aha" activation | User receives their first proactive reminder before an inspection deadline | >70% of new users within first 14 days |
| Weekly active usage | User opens dashboard at least once in a given week | >60% of active subscribers in any given week |
| Permit close rate | % of entered permits that are marked to "closed" status (full lifecycle tracked) | >50% of permits within 90 days of submission |
| Reminder effectiveness | % of inspection-deadline reminders that result in inspection being scheduled | >80% (baseline: 0% for spreadsheet users who have no reminder) |
| Time to first value | Time from account creation to first reminder received or first inspection marked passed | <7 days for 60% of users |

**User success narrative:** A user is succeeding when they have stopped maintaining a parallel spreadsheet and are managing all permit tracking inside the tool. The strongest signal is a user who upgrades from the free trial to a paid plan and never misses an inspection in their first 90 days.

### Business Objectives

**6-Month Objectives:**
- 200+ paying customers (post-AppSumo LTD launch)
- $7,000+ MRR from subscription customers
- 50+ reviews on Capterra/G2 with 4.5+ average rating
- AppSumo campaign: 300+ LTD sales at $69 = $20,700+ in launch revenue

**12-Month Objectives:**
- 500+ paying customers (combined subscription + LTD active users)
- $17,000+ MRR from subscription plans
- Top 3 organic ranking for "contractor permit tracking software" (Google US)
- <5% monthly churn on Pro/Business tier (utility tool with strong habit formation)

**18-Month Objectives:**
- $25,000+ MRR ($300K ARR run rate)
- Recognized by name in r/electricians, r/HVAC, r/Plumbing as the go-to permit tool
- 1,000+ active users
- Series A readiness or profitability — no outside capital required given low build cost

### Key Performance Indicators

**Acquisition KPIs:**

| KPI | Month 3 Target | Month 12 Target |
|-----|---------------|-----------------|
| New trial signups/month | 80 | 250 |
| Trial-to-paid conversion | 25% | 35% |
| MRR | $4,000 | $17,000 |
| LTD total sales (AppSumo) | 300 (one campaign) | N/A (done) |
| CAC (blended) | <$50 | <$40 |

**Retention KPIs:**

| KPI | Target |
|-----|--------|
| Monthly churn (Pro/Business) | <4% |
| 90-day retention | >75% |
| NPS | >50 |
| Permits tracked per active user/month | >15 (indicates real usage, not shelf-ware) |

**Revenue KPIs:**

| KPI | Target |
|-----|--------|
| ARPU (blended subscription) | $45/mo |
| LTV (at 4% monthly churn) | $1,125 |
| LTV:CAC ratio | >22x |
| Payback period | <2 months |

**Leading Indicators (predictive of retention):**
- Users who set up ≥5 permits in first week have 3× higher 90-day retention
- Users who receive and act on their first SMS reminder have 2× higher 90-day retention
- Users who export a PDF permit report have the highest retention (signals client-facing usage = stickiness)

---

## MVP Scope

### Core Features

The MVP is the "whiteboard replacement" — nothing more, nothing less. Every feature below directly addresses a failure mode in the spreadsheet/whiteboard approach.

**Feature 1: Job Record with Permits**
- Create a job record with: client name, job address, job type (electrical/plumbing/HVAC/GC/other), active/inactive status
- Attach one or more permits to each job
- Permit fields: jurisdiction (city/county name), permit type (electrical/plumbing/mechanical/structural/building/demo — with free-text option), permit number, submission date, approval date, inspection date, inspection result (scheduled/passed/failed/re-inspection required), close date, notes
- Status computed automatically from dates entered (submitted / approved / inspection scheduled / inspection passed / inspection failed / closed / expired)

**Feature 2: Permit Dashboard**
- One view: all open permits across all active jobs, sorted by "next action date" (inspection date if scheduled, or days since submission if waiting for approval)
- Status color coding: green (on track), yellow (inspection in <7 days), red (overdue or expired)
- Filter by: permit status, job, permit type, date range
- Quick-update from dashboard (mark inspection scheduled, mark passed, mark closed) without opening full record

**Feature 3: Proactive Reminders**
- Automated SMS and/or email alerts at: 7 days before inspection date, 3 days before, 1 day before
- Overdue alert: if inspection date passes without a "passed" or "rescheduled" status update
- Expiry alert: if 6 months pass since submission with no close date (typical permit validity window)
- Alert recipient configurable per job (owner, PM, foreman, or all)
- SMS via Twilio (or equivalent); email via transactional email service

**Feature 4: Pass/Fail Inspection History**
- Full chronological log per permit: every status change timestamped, notes field at each stage
- Pass/fail history visible at the job level (all permits on a job, all their outcomes)
- Failed inspection log includes: fail reason (free text), re-inspection scheduled date, re-inspection result

**Feature 5: PDF Permit Status Report**
- One-click export of permit history for a job: all permits, all status changes, dates, outcomes
- Clean, professional format suitable for client handoff at project close
- Owner/company name and logo (upload in settings) on the PDF header

**Feature 6: User Accounts and Basic Multi-User**
- Account owner can invite up to 3 additional users (email invite) — office admin, PM, or foreman
- Roles: Admin (full read/write), Viewer (read-only dashboard, can mark inspections from field)
- No per-seat fee at MVP — included in plan pricing (simplicity first; seat-based pricing is Phase 2)

**Feature 7: Pricing Tiers**
- **Starter:** $29/mo — up to 10 active permits, 1 user
- **Pro:** $49/mo — up to 30 active permits, 3 users
- **Business:** $69/mo — unlimited active permits, 5 users
- **AppSumo LTD:** $69 one-time — Pro-tier equivalent (up to 30 active permits), 3 users, no time limit

### Out of Scope for MVP

The following are explicitly deferred to maintain build feasibility (2–3 week MVP) and avoid over-engineering before user validation:

| Feature | Why Deferred |
|---------|-------------|
| City/county permit portal API integrations (auto-sync of permit status) | Portal APIs vary wildly by jurisdiction; no standard. Massive build complexity. Manual entry works for MVP and is what contractors already do. Add portal monitoring in v2. |
| QuickBooks / Jobber integration | Valuable but not core to solving the permit tracking problem. Contractors can use the tool standalone. Prioritize post-launch based on user requests. |
| Permit application submission (PermitFlow-style) | Requires jurisdiction-by-jurisdiction workflows, legal considerations, and massive compliance overhead. Not relevant to the target customer who pulls permits themselves. |
| AI-powered jurisdiction intelligence (permit requirements by city) | Nice future feature. Not needed for the "I already know my permits, I just need to track them" use case. |
| Gantt/schedule integration | Permit tracking and project scheduling are separate problems. Keep scope clean. |
| Client portal (share permit status with homeowners) | Phase 2 — valuable but not the core problem. |
| Mobile native app (iOS/Android) | Progressive Web App (PWA) is sufficient for MVP — mobile browser with home screen install. Native app is v2 after validating retention. |
| Per-seat pricing | Adds billing complexity for minimal revenue gain at this scale. Include up to 5 users in Business plan, revisit when customers are asking for more. |
| Permit fee tracking / cost management | Out of scope — different workflow, different persona (accounting vs. field operations). |
| Subcontractor permit sharing (multi-company) | Relevant for GC persona but adds auth complexity. Phase 2. |

### MVP Success Criteria

The MVP is validated when the following are true at the 90-day mark:

1. **Retention signal:** >65% of paying customers who signed up in month 1 are still active at day 90
2. **Core usage:** Average active user tracks ≥10 permits/month (indicates the tool replaced their spreadsheet)
3. **NPS:** >40 (contractor-specific NPS — the bar is lower than consumer but must be positive)
4. **Churn reason:** <20% of churned users cite "too limited / missing features" (acceptable loss of users who need enterprise features); >0% cite "missed an inspection while using the tool" = product failure, investigate immediately
5. **Organic mention:** At least 3 unprompted Reddit/Facebook mentions of the product within 90 days — contractors talk to other contractors
6. **AppSumo signal:** 200+ LTD sales and 4.0+ average rating on AppSumo within first 30 days of campaign

**Go/no-go for Phase 2 investment:** If any two of the following are true at 6 months, invest aggressively in Phase 2:
- MRR > $10,000
- Monthly churn < 5%
- NPS > 50
- Organic traffic > 50% of new trial signups

### Future Vision

**Phase 2 (Months 4–12): Integrations and Depth**

- **Jobber integration:** Sync jobs from Jobber automatically so contractors don't re-enter job data; permit status visible inside Jobber job record
- **QuickBooks integration:** Tag permit costs to job; export permit report with cost data to QB
- **Portal monitoring (select jurisdictions):** Automated status pulls from the 20 highest-volume US permit portals (LA, Chicago, Phoenix, Dallas, Houston, NYC) — detect approvals and inspection results without manual entry
- **Inspector scheduling:** Direct calendar link or phone number for jurisdiction inspector — "schedule inspection" button that opens the jurisdiction's scheduling portal
- **Per-seat pricing upgrade:** For teams >5 users, move to per-seat model with admin controls

**Phase 3 (Year 2): Platform and Expansion**

- **Contractor license and insurance tracking:** Same "never-miss-a-deadline" model applied to license renewal dates, insurance certificate expirations, bond renewals — the permit tracker expands to full contractor compliance management
- **Subcontractor portal:** GCs invite their subs to update their own permits; GC sees consolidated view across all subs on a project
- **AI permit assistant:** Given a job address and trade type, suggest which permits are typically required in that jurisdiction — reduces the "did I pull all the permits I need?" anxiety
- **White-label for trade associations:** License the platform to NECA/PHCC chapters as a member benefit — distribution at scale
- **API / Zapier integration:** Contractors can connect to their own tech stacks; enables webhook-driven workflows for large shops

**Long-Term Vision (Year 3+):**

The long-term vision is to become the compliance operating system for small licensed contractors — the single source of truth for every license, permit, bond, insurance certificate, and regulatory deadline that a contractor must track to stay legally operating. Permit tracking is the wedge; compliance management is the moat.

The product becomes genuinely sticky (and hard to displace) when it holds the historical permit record for every job a contractor has ever run — years of pass/fail history, jurisdiction relationships, and compliance documentation that has business value for bonding, insurance renewals, and client due diligence.

---

## Go-To-Market Strategy

### Launch Sequence

**Phase 1: AppSumo LTD (Month 1)**
- Launch on AppSumo at $69 one-time deal — first contractor permit tool in this channel
- Headline: "Never miss an inspection again — permit tracking for licensed contractors"
- Target: 300+ sales, 50+ reviews, 4.5+ rating
- Goal: Seed the user base, generate Capterra/G2 reviews, create first wave of organic advocates

**Phase 2: Reddit Seeding (Months 1–3)**
- Post "how do you manage open permits?" in: r/electricians (290K members), r/Plumbing, r/HVAC, r/ContractorTalk
- Answer permit management questions in these communities with genuine help (not sales pitches)
- Create content that ranks for "contractor permit tracking": blog post "Stop losing $340 to missed inspections" + 5-minute YouTube demo

**Phase 3: SEO & Trade Associations (Months 3–6)**
- Target keywords: "contractor permit tracking software," "permit tracking app for electricians," "electrical contractor permit management"
- High organic search demand, low competition (no affordable incumbent)
- NECA and PHCC member newsletters: newsletter ad or member deal offer
- Local chapter meetings: personal outreach to NECA/PHCC chapter presidents with a demo

**Phase 4: Direct Sales (Months 6–12)**
- Once 5+ strong case studies, begin targeted outreach to contractors in high-permit-density states (California, Texas, Florida, New York)
- Partner with electrical/plumbing supply houses for counter display or email blast (these are trusted trade channels where software has low distribution today)

### Pricing Rationale

The $29–$69 range is chosen deliberately to:
1. Match what contractors already pay for Jobber/Housecall Pro (removes the "another subscription" objection)
2. Stay well below the $99/mo threshold that triggers procurement process vs. impulse purchase
3. Enable a compelling LTD story: "$69 forever vs. $29+/mo forever" — contractors who hate subscriptions have an out
4. Grow ARPU naturally: most users will start on Starter, upgrade to Pro within 60 days when they exceed 10 permits

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Standalone too narrow — users want FSM bundled | Medium | High | Validate with first 50 users; Jobber/QuickBooks integration planned for Phase 2 to increase stickiness |
| Jobber or HCP adds permit tracking | Medium | Medium | 18–24 month head start; purpose-built focus means deeper workflow vs. feature addition; "built for trades" positioning harder to replicate |
| PermitFlow launches SMB tier | Low–Medium | Medium | PermitFlow's $54M Series B signals upmarket focus; their enterprise DNA makes low-cost, simple onboarding hard to build |
| "Just use spreadsheets" inertia | High | Medium | Free trial removes risk; LTD removes ongoing commitment anxiety; one re-inspection avoided = tool paid for |
| Build complexity if portal API expected | Medium | High | Explicitly position as manual-entry tool; portal monitoring is Phase 2 feature clearly communicated |
| AppSumo deal attracts non-ideal users | Medium | Low | Usage cap on LTD (30 permits) filters out enterprise; 60-day refund policy creates natural selection |

---

## Summary

Contractor permit tracking is a textbook greenfield-with-tailwind opportunity: proven pain ($52K/year in losses), proven willingness to pay (PermitFlow and GreenLite raised $140M+ on this problem), an affordable price gap with no incumbent, and an adoption curve that's already 3× in 3 years.

The MVP is simple CRUD + reminders. The GTM is focused: AppSumo LTD for launch, Reddit organic for community distribution, SEO for long-term acquisition. The moat builds over time as the product accumulates permit history and expands into contractor compliance management.

This is the whiteboard replacement that 2 million small contractor shops are waiting for — they just don't know it exists yet.

**Next step: Create the full Product Requirements Document (PRD)** to translate this brief into detailed feature specifications, user stories, and technical requirements ready for architecture and implementation.

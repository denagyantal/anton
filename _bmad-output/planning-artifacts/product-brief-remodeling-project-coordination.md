---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/remodeling-project-coordination.md
  - _bmad-output/planning-artifacts/market-research-remodeling-project-coordination.md
workflowType: product-brief
lastStep: 6
project_name: remodeling-project-coordination
product_name: RemoHub
user_name: Root
date: 2026-11-28
author: Root
---

# Product Brief: RemoHub — Remodeling Project Coordination

---

## Executive Summary

RemoHub is a focused project coordination platform for 2–15 person kitchen and bath remodeling firms. It replaces the Excel + WhatsApp + Dropbox patchwork that runs most small remodeling businesses with a single tool that covers project timelines, subcontractor coordination, change order management with client e-signature, and final invoice generation — all at $49–99/month.

The core insight is financial, not operational: the average 5-person remodeling crew loses $15,000–$40,000 per year to undocumented or disputed change orders. A tool that captures change orders, sends the client an e-signature link, and automatically updates the invoice closes that revenue leak in a way that makes the ROI obvious and immediate — no sales call, no ROI spreadsheet required.

The market timing is exceptional. CoConstruct — historically the dominant mid-market remodeling software — is sunsetting with a forced migration deadline of June 30, 2027. The official migration target (Buildertrend) starts at $499–$1,099/month, pushing CoConstruct's value-segment customers to actively seek alternatives. JobTread ($159+/month) is the best remaining option but is consistently rated "too complex" and "time consuming to set up." The gap below $99/month for a complete coordination tool (not just estimating or invoicing) is confirmed and unoccupied.

**Product name:** RemoHub  
**Target:** 2–15 person kitchen/bath remodeling contractors  
**Price:** $49–$99/month flat or $279–$299 LTD  
**Core wedge:** Change order capture → client e-signature → automatic invoice update  
**Build timeline:** 6–8 weeks to MVP  
**Launch window:** Q4 2026 / Q1 2027 (to capture CoConstruct refugees before mid-2027 migration deadline)

---

## Core Vision

### Problem Statement

The typical 2–15 person remodeling firm coordinates projects across Excel spreadsheets, WhatsApp group threads, Dropbox folders, and paper change orders. This system breaks down in two costly ways:

**Revenue leakage:** 1 in 5 change orders never makes it to a final invoice. A change order submitted within 24 hours gets billed 90% of the time; submitted after a week, less than 20% of the time. For a 5-person crew, this represents $15,000–$40,000 in annual revenue that the contractor earned but never collected. The cause is not negligence — it's the absence of a system that captures the change, routes it to the client for approval, and automatically adds it to the invoice.

**Coordination chaos:** Remodeling projects involve 3–8 specialty subs (plumber, electrician, tile, cabinet installer, painter). Scheduling these subs, tracking task completion, and communicating status to the homeowner happens via phone, text, and calendar — a full-time management job that falls on the owner-operator. "Punch lists are WhatsApp threads — 87 unread messages with photos of issues, half already fixed, nobody knows which ones are left" is not an outlier. It is the standard state.

A mid-size cabinet company rep stated directly: *"Our company basically runs on Excel. We are working to modernize."* r/ConstructionManagers research confirmed spreadsheet dominance and the same pain. The problem is confirmed, real, and financially quantifiable.

### Problem Impact

| Pain Point | Financial Impact | Frequency |
|-----------|-----------------|-----------|
| Undocumented change orders | $15K–$40K/year revenue leakage | Every project |
| Sub coordination chaos | 2–5 hrs/week admin time | Every project |
| Client approval delays | Extends timeline 1–3 days per change | Every change |
| Photo/punch list management | 1–3 hrs/week | Daily |
| Final invoice assembly | 2–4 hrs/project | End of project |

The change order problem is the highest-priority opportunity because it has the clearest, largest, and most direct financial impact. It is also the problem that no tool under $99/month currently solves end-to-end.

### Why Existing Solutions Fall Short

| Product | Price | Gap |
|---------|-------|-----|
| Procore | $375–$1,500/user/month | Enterprise-only; designed for $50M+ commercial GCs |
| Buildertrend | $499–$1,099/month flat | Price-prohibitive for 2–5 person shops; now the forced CoConstruct migration target |
| JobTread | $159–$199/month + $18–20/seat | Best option in the category; rated "time consuming to set up initially" and "overkill for simple repair and service work" |
| BuildBook | $79–$99/month | Priced right; strong client communication; lacks sub-coordination depth and change order completeness |
| Contractor Foreman | $49/month | Covers basic paperwork; limited sub coordination and no change order approval workflow |
| CoConstruct | Sunsetting June 2027 | Was the dominant tool; forced migration to Buildertrend at a price increase |

**The gap**: No tool below $99/month combines a complete project coordination workflow — timeline + sub task assignment + change order capture + client e-signature + invoice update — in a package that can be set up in under 2 hours on a real job.

BuildBook gets close on price but doesn't close the change order revenue leakage loop. JobTread closes the loop but prices out small firms and requires substantial setup investment. That gap is the market RemoHub occupies.

### Proposed Solution

**RemoHub** — Project coordination for 2–15 person kitchen/bath remodeling firms.

The product is built change-order-first. Instead of treating change orders as one feature among many (as every competitor does), RemoHub makes the change order capture → client e-signature → invoice update sequence the product's core flow. Everything else — project timeline, sub task assignment, client portal — exists to support and contextualize that core loop.

The client never needs to create an account. The sub never needs to download an app. A contractor can create their first project and send their first change order for client signature in under 30 minutes. This is the commitment that directly answers the most common failure mode of existing tools.

**Core flow:**
1. Create project with milestone timeline (demolition → rough-in → install → punch list → complete)
2. Assign sub tasks via SMS/email (sub clicks link, marks done — no account required)
3. Scope changes in the field → create change order → send magic link to client → client e-signs → automatically added to project budget
4. Client views project status and approves phases via magic link (no account required)
5. At close: generate final invoice from original contract + all approved change orders

### Key Differentiators

1. **Change-order-first design**: The revenue protection ROI story sells itself — $15K–$40K recovered per year per crew. No competitor makes this the product's headline; every competitor buries change orders as a secondary feature.

2. **30-minute setup commitment**: The most cited failure mode of JobTread (the strongest competitor) is setup complexity and the time required before first use. RemoHub commits to functional use in 30 minutes on a real project. This is a direct, measurable counter-positioning claim.

3. **No-account sub and client UX**: Subcontractors receive an SMS/email link with their task list; they mark done without creating an account. Clients approve change orders and view project status via a magic link. No onboarding friction for the people who aren't paying for the software.

4. **Price point**: $49–$99/month vs. $159+ (JobTread). For a 3-person shop doing $1.5M in annual remodeling work, this is an impulse-buy price, not a budget-committee decision.

5. **CoConstruct displacement positioning**: 10,000+ active CoConstruct users face a forced migration by June 2027. Buildertrend (the official migration target) is too expensive. RemoHub is a natural landing spot — purpose-built for the same ICP, at a fraction of the price.

---

## Target Users

### Primary Users

**Persona 1: Marcus — The Scaling Kitchen & Bath Remodeler**

- **Background**: Marcus owns a 6-person kitchen and bath remodeling company in suburban Atlanta. He started solo 8 years ago, grew to 3 employees by 2020, and now runs 7–10 active projects at any time. Revenue is around $2.2M/year.
- **Current state**: Runs everything on Excel, an iPhone calendar, and a WhatsApp group per project. He's good at the work; he's drowning in the administration. Last month he lost a $4,200 change order because he forgot to write it up before the client left the job site, and the client disputed it at final invoice.
- **Key pain**: Change orders undocumented, client approvals verbal, punch lists scattered across WhatsApp threads, sub scheduling via individual text messages.
- **Decision trigger**: Lost that $4,200 change order. He searched "change order software for remodelers" that night.
- **What success looks like**: Gets paid for every change order. Knows which sub is doing what this week without texting 6 people. Clients stop calling to ask "where are we in the project."
- **Price tolerance**: $49–$99/month is easy approval — no partner sign-off needed.
- **Adoption behavior**: Will trial 2–3 tools. Rejects anything that doesn't work on his phone. Buys the tool that felt "just right" on a real job during trial.

**Persona 2: Dana — The CoConstruct Refugee**

- **Background**: Dana runs a 12-person residential remodeling firm in New Jersey. She has been on CoConstruct for 4 years. She just got the sunset notice and the Buildertrend quote: $799/month. She has 3 months of project history she wants to keep.
- **Current state**: Active software user; defined requirements; high purchase intent.
- **Pain**: Forced to switch tools; doesn't want to pay 3x more for a tool designed for home builders (Buildertrend) when she only does remodels.
- **Decision trigger**: Received the Buildertrend migration quote. Started a spreadsheet comparing alternatives the same week.
- **What success looks like**: A tool that covers the same workflow she had in CoConstruct — project timeline, change orders, client communication — at under $200/month. Data import would be ideal but she'll start fresh if needed.
- **Price tolerance**: Will pay up to $200/month but prefers under $100.
- **Acquisition path**: Will find RemoHub via "CoConstruct alternative 2026" Google search.

### Secondary Users

**Persona 3: Javier — The Solo Kitchen Specialist**

- **Background**: Javier runs a 2-person premium kitchen remodeling business in the Bay Area. Average project value is $45,000. He does 8–12 projects per year and his clients are very demanding — they expect digital communication and progress updates.
- **Current state**: Still on paper/email; losing bids to competitors who have client portals.
- **Key pain**: Client experience is below what his premium clients expect; change orders are informal emails that occasionally get disputed.
- **Decision trigger**: Lost a $12K change order dispute with a client who said she never approved the scope change.
- **LTD candidate**: Will pay $299 one-time for the change order and client portal features. He doesn't need sub coordination (it's just him and one assistant).

**Sub-Contractors (passive beneficiaries, not buyers):**

Plumbers, electricians, tile installers, and painters who receive task assignments from RemoHub users. They interact via SMS/email links — they never log in, never create an account, never learn the software. For them, RemoHub is simply a text message with a task and a check-box link. Their successful adoption (marking tasks done, uploading completion photos) is a product quality gate: if the sub-facing UX is too complex, GCs stop using the sub coordination feature.

**Homeowner Clients (passive beneficiaries, not buyers):**

Homeowners whose contractors use RemoHub. They receive magic links to view project status and approve change orders. No account required. Their successful adoption (opening the link, signing change orders digitally, signing off on phases) is the proof of the core value proposition — and their positive comments to their contractor are the primary referral driver.

### User Journey

**Marcus's first 30 days with RemoHub:**

1. **Discovery (Day 0):** Googles "change order software remodeling" after losing the $4,200 dispute. Finds a comparison article where RemoHub is positioned as "simplest change order management for small remodeling contractors."

2. **Sign-up (Day 1):** Creates a free trial account. Creates his first project — an active kitchen remodel — in 15 minutes. Imports basic milestone template (demolition complete, rough-in, cabinets/install, punch list, final sign-off).

3. **First change order (Day 2):** Client wants to add under-cabinet lighting. Marcus creates a change order on his phone: description, $780, send to client. Client receives a text with a link, reviews the change, e-signs. Marcus gets a push notification: "Change order approved by Sarah H." Total time: 4 minutes.

4. **Aha moment (Day 3):** Marcus looks at his project dashboard. All 7 active projects. 3 have pending change orders. He realizes he has $6,400 in pending scope changes he would have handled via informal texts. He approves a $29/month subscription on the spot.

5. **Sub coordination (Week 2):** Marcus starts assigning sub tasks in RemoHub. Plumber receives a text: "Rough-in due Friday — confirm when done." Sub clicks the link, marks complete. Marcus didn't have to send a follow-up text.

6. **60-day review:** Recovered $11,200 in change orders that would previously have been disputed or lost. Time spent on WhatsApp coordination: down by half. First month on RemoHub paid for itself in the first week.

---

## Success Metrics

### User Success Metrics

The primary measure of RemoHub user success is **documented change order revenue per project** — the core ROI story. If users are capturing and billing for change orders they previously lost, the product is working.

| User Success Metric | Target | Measurement |
|--------------------|--------|-------------|
| Time to first change order created | <30 minutes from sign-up | In-app event tracking |
| Change orders with client e-signature per project | >80% | Per-project ratio |
| Sub task assignments per project | >5 tasks assigned (shows full activation) | Per-project event count |
| Client portal views per project | >2 (client actually using it) | Link-click tracking |
| Net Promoter Score | 40+ (industry average ~35) | In-app NPS survey at day 60 |
| Month 3 retention | >60% | Cohort retention curve |
| Month 12 retention | >50% | Cohort retention curve |

**Leading indicator (Day 1 predictor of retention):** Time to first change order created. Users who create a change order on day 1 of trial retain at >75%. Users who don't reach a change order by day 7 churn at >80%. First change order is the activation event.

### Business Objectives

**Objective 1 — Capture the CoConstruct displacement wave (2026–mid-2027)**
Launch a functional MVP by Q1 2027 at the latest (Q4 2026 strongly preferred). Acquire 200–500 customers from the CoConstruct refugee cohort before the June 2027 migration deadline closes the window.

**Objective 2 — Generate LTD launch revenue to fund development**
Launch a Lifetime Deal at $279–$299 (direct or AppSumo) in the first 3 months. Target 200–500 LTD buyers generating $55K–$140K in launch revenue. Use this cohort to collect reviews, validate feature priorities, and fund V2 development.

**Objective 3 — Reach $10K MRR within 12 months**
At $49–$99/month average, this requires 100–200 paying monthly/annual subscribers. Achievable through the LTD → subscription conversion funnel and organic SEO/community channels.

**Objective 4 — Build a review and reputation foundation**
Reach 50 Capterra/G2 reviews within 6 months of launch, 4.5+ stars average. Construction software buyers heavily weight peer reviews. This social proof is required before paid acquisition becomes efficient.

### Key Performance Indicators

| KPI | Month 1 | Month 3 | Month 6 | Month 12 | Month 24 |
|-----|---------|---------|---------|----------|----------|
| Free trial sign-ups | 50 | 150 | 400 | 1,000 | 3,000 |
| Paying customers (LTD + monthly) | 20 | 100 | 250 | 500 | 2,000 |
| MRR (monthly subscribers only) | $500 | $3,000 | $8,000 | $20,000 | $80,000 |
| LTD revenue (cumulative) | $5,600 | $55,000 | $100,000 | $140,000 | $140,000 |
| Capterra/G2 reviews | 5 | 25 | 50 | 150 | 400 |
| Average rating | 4.5+ | 4.5+ | 4.5+ | 4.5+ | 4.5+ |
| NPS | — | 35+ | 40+ | 45+ | 50+ |
| Change orders with e-signature | — | >70% | >80% | >80% | >85% |

**Unit Economics Targets:**
- Customer Acquisition Cost (CAC): <$150 (organic-first; no paid acquisition in year 1)
- Lifetime Value (LTV): >$1,200 (12-month minimum; $99/month × 12 months or LTD)
- LTV:CAC ratio target: >8:1
- Payback period: <3 months on monthly plan

---

## MVP Scope

### Core Features

The MVP scope is change-order-first. The question for every proposed feature is: does it support the change order → client approval → invoice update loop? If not, it goes to V2.

**Feature 1: Project Timeline with Milestone Tracking**
- Create a project with standard milestone template: Demolition → Rough-in → Rough-in Inspection → Install → Punch List → Final Sign-off
- Mark milestones complete (by contractor or sub via link)
- Timeline view: current phase, completed phases, remaining phases
- Add custom milestones
- _Scope boundary_: No Gantt charts, no dependency mapping, no critical path. Simple milestone list only.

**Feature 2: Sub-Contractor Task Assignment**
- Create a task: description, assigned sub (name + phone/email), due date
- Sub receives SMS or email with task description and a "Mark Complete" link (no account required)
- Sub can optionally upload a photo when marking complete
- Contractor sees real-time task status per project
- _Scope boundary_: No sub-contractor accounts. No sub-facing app. SMS/email link only.

**Feature 3: Change Order Management with Client E-Signature (CORE)**
- Create a change order: description, price, notes
- Send to homeowner client via magic link (no client account required)
- Client views change order on mobile browser, e-signs
- Contractor receives push notification on approval
- Approved change orders automatically add to project budget running total
- Disputed/declined COs logged with client's note
- _Scope boundary_: One change order = one client. No multi-party signing. No offline signing. E-signature is a simple "I approve" digital sign — not a legal DocuSign integration.

**Feature 4: Client Approval Portal (Magic Link)**
- Project status page accessible via unique link: current milestone, completed work, pending change orders, approved change orders
- Clients can approve/decline change orders from this page
- Clients can sign off on phase completion ("I confirm rough-in work is complete")
- No client account or login required — link is the credential
- _Scope boundary_: Read-only project view except for change order approvals and phase sign-offs. No client messaging thread in V1.

**Feature 5: Final Invoice Export**
- Generate PDF invoice from: original contract amount + all approved change orders
- Itemized line items for each approved change order
- Project info, contractor info, client info on the invoice
- Export to PDF; optionally email directly to client
- _Scope boundary_: No payment collection in V1. No QuickBooks integration in V1. PDF export only.

**Tech stack guidance (informed by 6–8 week build constraint):**
- Next.js (React) frontend, mobile-responsive (not a native app)
- PostgreSQL + Prisma ORM
- Supabase for auth, storage (photos), real-time
- Resend or Postmark for transactional email/SMS
- Magic links via signed JWT tokens (no Twilio required for SMS if email magic links suffice)
- Deployment: Vercel + Railway

### Out of Scope for MVP

The following are explicitly V2 or later. They are good ideas; they are not essential to solve the core problem:

| Feature | Rationale for Deferral |
|---------|----------------------|
| Materials order tracking | Useful but doesn't close the revenue leakage loop; adds 2–3 weeks of complexity |
| QuickBooks / Xero integration | High demand but complex to implement; invoice PDF export covers 80% of the value |
| Sub-contractor mobile app | SMS/email link covers the need; native app is build scope × 3 |
| Photo documentation (beyond completion photos) | Nice to have; phase photo albums don't prevent revenue leakage |
| Advanced reporting / project profitability | Analytics layer; deferred until sufficient data exists |
| Multi-project dashboard (Gantt / portfolio view) | Single-project view is sufficient for MVP |
| In-app client messaging | Magic link portal + phone is sufficient for V1 |
| Estimating / quoting | Covered by Joist/Jobber for most ICP users; don't compete on this in V1 |
| Sub-contractor performance ratings | V3 network feature |
| Automated payment collection | High complexity; deferred to post-launch |

### MVP Success Criteria

The MVP is validated when:

1. **Activation**: >60% of free-trial users create at least one change order within the first 7 days
2. **Core flow completion**: >50% of change orders created are sent to and signed by a client (not just created internally)
3. **Retention signal**: >40% of trial users convert to paid (LTD or monthly) after 14 days
4. **NPS baseline**: Day-30 NPS ≥ 35 from first cohort of paying users
5. **Change order ROI signal**: At least 10 paying users report (in support or in-app survey) that they recovered revenue from a change order that would have been disputed or lost

If these 5 criteria are met, the MVP has validated the core hypothesis and development proceeds to V2 features. If criteria 1–2 are not met, the onboarding and change order creation UX requires iteration before V2 scope expansion.

**Decision to scale paid acquisition**: Only after reaching 50 Capterra/G2 reviews at 4.5+ stars. Social proof precedes paid spending.

### Future Vision

**V2 (Months 3–6 post-launch):**
- Photo documentation: unlimited photo uploads linked to project phases and punch list items
- Materials order tracking: supplier, item, quantity, delivery status, link to milestone
- QuickBooks integration (most-requested integration; highest contractor trust signal)
- Sub-contractor mobile app: simple native iOS/Android app for subs to view tasks and upload photos
- Reporting: project profitability overview, change order conversion rate, revenue-at-risk dashboard

**V3 (Months 6–12):**
- Multi-project portfolio dashboard
- Sub-contractor performance tracking (completion rate, on-time rate)
- Client-facing selections and allowances tracking (design choices, material upgrades)
- Automated payment collection integration (Stripe)
- In-app client messaging thread linked to project timeline

**Platform expansion (Year 2+):**
- Adjacent trades: flooring contractors, painters, tile specialists — identical workflow pattern, same software gap, same price tolerance
- Sub-contractor network effects: once 1,000+ GCs are on the platform, their subs interact with RemoHub regularly; a sub-facing PRO tier (portfolio, reviews, job search) becomes viable
- Geographic expansion: Canada and Australia (English-speaking, similar residential renovation market dynamics)
- AI-assisted change order drafting: generate change order description from photo + voice note; predict likely change orders for a project type at kickoff

**Long-term acquisition potential:**
Vertical SaaS in construction trades trades at 3x–10x ARR. At $2M ARR (achievable with 2,000+ customers at $79–$99/month average), this represents a $6M–$20M acquisition event. Likely acquirers: Buildertrend, Jobber, ServiceTitan (expanding into remodeling), or private equity construction software roll-up.

---

## Go-to-Market Strategy

### Launch Sequence

**Phase 1 — Wedge Launch (Months 1–3):**
Launch a free "Digital Change Orders" tool — single feature, no project setup required. Free for 1 active project. Goal: get contractors experiencing the change order → client approval → invoice update flow. Upsell to full RemoHub when they hit 2+ active projects. This lowers the first activation barrier to near-zero.

**Phase 2 — LTD Campaign (Month 2–4):**
Direct LTD at $279 for lifetime access (3-user tier). Email list built from free tool sign-ups + AppSumo waitlist. Target 200–500 buyers in the launch cohort. Use this group to generate reviews and iterate on V2 priorities. If direct LTD converts well, follow with AppSumo launch. If not, adjust messaging before spending AppSumo's audience.

**Phase 3 — SEO + Content (Months 3–12):**
Build comparison and alternatives content:
- "CoConstruct alternative 2026 / 2027" (highest purchase intent in the category right now)
- "JobTread alternative for small remodelers"
- "Best change order software for remodeling contractors"
- "Kitchen remodeling project management software"
- "Free change order template for contractors" (top-of-funnel)

**Phase 4 — Community + Associations (Months 2–12):**
Engage authentically in r/Construction, r/ConstructionManagers, r/kitchenremodel, NARI member forums, and cabinet trade Facebook groups. Answer questions about change order management and coordination; never spam. Build relationships before pitching.

### Pricing Structure

| Plan | Price | Users | Projects |
|------|-------|-------|----------|
| Solo | $49/month | 1 | Unlimited |
| Team | $79/month | Up to 5 | Unlimited |
| Unlimited | $99/month | Unlimited | Unlimited |
| Annual (any plan) | 20% discount | — | — |
| LTD (Team tier) | $279 one-time | Up to 5 | Unlimited |

---

## Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| JobTread simplifies onboarding | High | Medium | Lead with price ($49 vs $159) and change-order-first focus, not just simplicity |
| Build scope creep | High | High | Ship change order module as standalone V1; treat everything else as V2 |
| CoConstruct window closes before launch | Medium | High | Target Q4 2026 launch; a working change order flow is enough to acquire refugees |
| Low LTD conversion rate | Medium | Medium | Direct LTD campaign before AppSumo; use beta users to generate reviews pre-launch |
| SEO competition from established players | Low | Low | Focus on long-tail ("CoConstruct alternative", "change order software remodelers") with lower competition |

---

**Product Brief Completion Date:** 2026-11-28  
**Input Sources:** Shortlisted idea (scored 85/105) + comprehensive market research (2026-11-27)  
**Status:** Complete — ready for PRD creation

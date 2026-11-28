---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/remodeling-project-coordination.md
  - _bmad-output/planning-artifacts/market-research-remodeling-project-coordination.md
  - _bmad-output/planning-artifacts/brief-remodeling-project-coordination.md
workflowType: prd
project_name: remodeling-project-coordination
product_name: RemoHub
user_name: Root
date: 2026-11-28
author: Root
classification:
  projectType: saas_b2b
  domain: construction_vertical_saas
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — RemoHub

**Author:** Root
**Date:** 2026-11-28
**Product:** RemoHub — Remodeling Project Coordination
**Version:** 1.0

---

## Executive Summary

RemoHub is a web-based project coordination platform for 2–15 person kitchen and bath remodeling contractors. It replaces the Excel + WhatsApp + Dropbox patchwork that runs most small remodeling businesses with a single tool covering project timelines, subcontractor task coordination, change order management with client e-signature, and final invoice generation — at $49–99/month flat.

The revenue protection story is the product's core wedge: the average 5-person remodeling crew loses $15,000–$40,000 per year to undocumented or disputed change orders. RemoHub captures the change in the field, routes it to the client via a magic link for digital approval, and automatically updates the project invoice — closing the revenue leak in a way that makes the ROI obvious and immediate.

**Market timing is exceptional.** CoConstruct — historically the dominant mid-market remodeling software — is sunsetting with a forced migration deadline of June 30, 2027. The official migration target (Buildertrend) starts at $499–$1,099/month, pushing CoConstruct's value-segment customers to actively seek alternatives. JobTread ($159+/month) is the best remaining option but is consistently rated "too complex" and "time consuming to set up." No tool below $99/month currently combines a complete project coordination workflow (timeline + sub tasks + change orders + client e-signature + invoice) in a package operable in under 30 minutes on a real job.

**Target:** 2–15 person kitchen/bath remodeling contractors
**Price:** Solo $49/month | Team $79/month | Unlimited $99/month | LTD $279
**Core wedge:** Change order capture → client e-signature → automatic invoice update
**Build timeline:** 6–8 weeks to MVP
**Launch window:** Q4 2026 / Q1 2027 to capture CoConstruct migration wave

### What Makes This Special

RemoHub is the only sub-$99/month tool that treats change order revenue protection as the product's primary function rather than a secondary feature. Three specific differentiators create durable competitive distance:

1. **Change-order-first design**: The revenue protection ROI story sells itself — $15K–$40K recovered per year per crew. Every competitor (BuildBook, JobTread, Contractor Foreman) buries change orders as one feature among many. RemoHub makes the change order → client approval → invoice update sequence the core product flow, with everything else existing to support it.

2. **30-minute setup commitment**: The most cited failure mode of JobTread (the strongest competitor) is setup complexity. RemoHub commits to a functional first use — including sending a real change order to a real client — in under 30 minutes. This is a direct, measurable counter-positioning claim, not a vague promise.

3. **No-account sub and client UX**: Subcontractors receive an SMS/email link with their task list and mark done without creating an account. Clients approve change orders and view project status via magic link. Zero onboarding friction for the people who aren't paying for the software.

## Project Classification

- **Project Type:** SaaS B2B — web application, mobile-responsive (not native app)
- **Domain:** Construction / Residential Remodeling Vertical SaaS
- **Complexity:** Medium — no regulated compliance requirements; moderate multi-role data model (contractor, sub, client); real-time notifications; signed magic links for auth
- **Project Context:** Greenfield — no existing codebase
- **Tech Stack (informed by 6–8 week build constraint):** Next.js frontend, PostgreSQL + Prisma ORM, Supabase (auth, storage, real-time), Resend/Postmark for email, JWT magic links, Vercel + Railway deployment

---

## Success Criteria

### User Success

Users succeed when RemoHub recovers change order revenue they would otherwise lose and reduces coordination time per project.

| User Success Metric | Target | Measurement |
|---------------------|--------|-------------|
| Time to first change order created from sign-up | <30 minutes | In-app event tracking (sign-up → first CO created) |
| Change orders with completed client e-signature per project | >80% | Per-project ratio (COs signed / COs sent) |
| Sub task assignments per project (full activation signal) | >5 tasks | Per-project event count |
| Client portal magic link views per project | >2 | Link-click tracking |
| Net Promoter Score at Day 60 | ≥40 | In-app NPS survey |
| Month-3 user retention | >60% | Cohort retention |
| Month-12 user retention | >50% | Cohort retention |

**Activation event (Day 1 predictor of retention):** First change order created. Users who create a change order on Day 1 of trial retain at >75%. Users who do not reach a change order by Day 7 churn at >80%.

**User-reported ROI signal:** At least 10 paying users (within first 90 days) report recovering revenue from a disputed or lost change order that would not have been captured without RemoHub.

### Business Success

| KPI | Month 1 | Month 3 | Month 6 | Month 12 | Month 24 |
|-----|---------|---------|---------|----------|----------|
| Free trial sign-ups | 50 | 150 | 400 | 1,000 | 3,000 |
| Paying customers (LTD + monthly) | 20 | 100 | 250 | 500 | 2,000 |
| MRR (monthly subscribers only) | $500 | $3,000 | $8,000 | $20,000 | $80,000 |
| LTD revenue (cumulative) | $5,600 | $55,000 | $100,000 | $140,000 | $140,000 |
| Capterra/G2 reviews | 5 | 25 | 50 | 150 | 400 |
| Average rating | 4.5+ | 4.5+ | 4.5+ | 4.5+ | 4.5+ |

**Unit Economics Targets:**
- Customer Acquisition Cost (CAC): <$150 (organic-first; no paid acquisition in Year 1)
- Lifetime Value (LTV): >$1,200 (12-month minimum)
- LTV:CAC ratio: >8:1
- Payback period: <3 months on monthly plan

**Decision to scale paid acquisition:** Only after reaching 50 Capterra/G2 reviews at 4.5+ stars.

**Four business objectives (prioritized):**
1. Launch functional MVP by Q1 2027 (Q4 2026 strongly preferred) to enter the CoConstruct migration wave before the June 2027 deadline closes the window
2. Generate $55K–$140K LTD launch revenue (200–500 LTD buyers at $279) to fund development and generate reviews
3. Reach $10K MRR within 12 months through LTD-to-subscription conversion and organic SEO
4. Reach 50 Capterra/G2 reviews at 4.5+ average within 6 months of launch

### Technical Success

- Zero data loss for any change order, including those in mid-creation when connection drops; draft auto-save within 60 seconds
- Magic links expire after 72 hours and are single-use for change order approval; expired links show a clear re-request flow
- E-signature record (timestamp, client name, IP, link token) stored and retrievable for every approved change order
- Mobile browser support (Safari iOS, Chrome Android) for all client-facing flows; no native app required
- Sub task assignment SMS/email delivery >98% within 60 seconds of contractor action

---

## Product Scope

### MVP — Minimum Viable Product

**MVP Philosophy:** Problem-solving MVP. The goal is a tool that reliably delivers the change order → client approval → invoice update loop on a real project within 30 minutes of sign-up. Everything else supports or contextualizes that core loop.

**Must-Have Capabilities:**

1. **Project Timeline with Milestone Tracking** — Create a project with standard milestone template (Demolition → Rough-in → Rough-in Inspection → Install → Punch List → Final Sign-off); mark milestones complete; add custom milestones; view current phase and completed phases. No Gantt charts, no dependency mapping.

2. **Sub-Contractor Task Assignment** — Create a task with description, assigned sub (name + phone/email), and due date; sub receives SMS or email with a "Mark Complete" link (no account required); sub can upload a photo when marking complete; contractor sees real-time task status. No sub-contractor accounts in V1.

3. **Change Order Management with Client E-Signature (CORE)** — Create a change order (description, price, notes); send to homeowner client via magic link; client views and e-signs on mobile browser; contractor receives push notification on approval; approved COs automatically add to project budget running total; declined/disputed COs logged with client note. One-party signing only. E-signature is a "I approve this change" digital sign — not a DocuSign-class legal integration.

4. **Client Approval Portal (Magic Link)** — Unique magic link per project; client views current milestone, completed work, pending and approved change orders; client approves or declines change orders; client signs off on phase completion. No client account required. No client messaging thread in V1.

5. **Final Invoice Export** — Generate PDF invoice from original contract amount + all approved change orders; itemized line items per approved CO; contractor and client info on invoice; email directly to client or download. No payment collection. No QuickBooks integration in V1.

**Core User Journeys Supported by MVP:**
- Contractor creates project, assigns sub tasks, creates change order, client approves, generates final invoice
- Client receives magic link, views project status, approves change order, signs off on phases
- Sub receives task SMS/email, marks complete with optional photo

### Growth Features (Post-MVP)

**V2 (Months 3–6 post-launch):**
- Unlimited photo documentation linked to project phases and punch list items
- Materials order tracking: supplier, item, quantity, delivery status, link to milestone
- QuickBooks integration (most-requested; highest contractor trust signal)
- Sub-contractor mobile app (simple iOS/Android for task view and photo upload)
- Reporting: project profitability overview, change order conversion rate, revenue-at-risk dashboard

### Vision (Future)

**V3 (Months 6–12):**
- Multi-project portfolio dashboard
- Sub-contractor performance tracking (completion rate, on-time rate)
- Client-facing selections and allowances tracking
- Automated payment collection (Stripe)
- In-app client messaging thread linked to project timeline

**Platform expansion (Year 2+):**
- Adjacent trades: flooring, painters, tile specialists — identical workflow pattern
- Sub-contractor network effects: once 1,000+ GCs are on the platform, sub-facing PRO tier becomes viable
- Geographic expansion: Canada, Australia
- AI-assisted change order drafting from photo + voice note

---

## User Journeys

### Journey 1 — Marcus: The Scaling Remodeler (Primary User, Success Path)

Marcus owns a 6-person kitchen and bath remodeling company in suburban Atlanta. He runs 7–10 active projects at $2.2M/year, coordinates on Excel + iPhone calendar + WhatsApp. Last month he lost a $4,200 change order because he forgot to write it up before the client left the job site.

**Opening scene:** Marcus Googles "change order software remodeling" at 9pm after losing the dispute. Finds RemoHub comparison article: "Simplest change order management for small remodeling contractors."

**Sign-up → First project (Day 1):** Creates free trial account. Creates his first active project — a kitchen remodel already in progress — in 15 minutes. Imports the milestone template: Demolition complete, Rough-in, Cabinets/Install, Punch List, Final Sign-off. Marks Demolition and Rough-in complete.

**First change order (Day 2):** Client wants to add under-cabinet lighting. Marcus creates a change order on his phone: description "Under-cabinet LED lighting strip — 12 linear feet", price $780, photo of the cabinet area. Sends to client. Client receives a text with a link, reviews the change, e-signs. Marcus gets a push notification: "Change order approved by Sarah H." Total time: 4 minutes.

**Activation moment (Day 3):** Marcus looks at his project dashboard. All 7 active projects. 3 have pending change orders he created informally via text. He realizes he has $6,400 in pending scope changes that would have been disputed at invoice. He approves a $29/month subscription on the spot.

**Sub coordination (Week 2):** Marcus assigns sub tasks in RemoHub. Plumber receives a text: "Rough-in due Friday — confirm when done." Sub clicks the link, marks complete, uploads a photo. Marcus didn't have to send a follow-up text.

**60-day outcome:** Recovered $11,200 in change orders. Time on WhatsApp coordination: down by half. First month on RemoHub paid for itself in the first week.

*Journeys reveals requirements for: project creation, milestone management, change order creation on mobile, magic link delivery, e-signature flow, push notifications, sub task assignment via SMS, dashboard overview.*

---

### Journey 2 — Dana: The CoConstruct Refugee (High-Intent Switcher)

Dana runs a 12-person residential remodeling firm in New Jersey. She's been on CoConstruct for 4 years. She just received the Buildertrend migration quote: $799/month. She has 3 months of project history she wants to keep.

**Opening scene:** Dana starts a comparison spreadsheet after receiving the Buildertrend quote. Searches "CoConstruct alternative 2026." Finds RemoHub: purpose-built for remodelers, $79/month Team plan, change order management included.

**Evaluation (Week 1):** Signs up for free trial. The 30-minute setup claim is her test. She creates one real active project — a kitchen renovation — and sets up milestones. Creates a test change order and sends it to herself as the "client." The magic link works; she signs. Total setup time: 22 minutes.

**Decision (Week 2):** Dana compares feature parity with CoConstruct. RemoHub covers: project timeline, change orders with client approval, sub task coordination, final invoice. She's missing: photo albums, materials tracking. She accepts the trade-off at $79 vs. $799.

**Migration (Week 3):** Dana creates all 7 active projects manually in RemoHub (no data import needed — she starts each from current milestone). Assigns sub tasks for the coming week. Sends change order magic links to clients who have pending scope changes.

**Outcome:** Dana adopts Team plan at $79/month. She has $720/month savings over Buildertrend. She posts in a CoConstruct Facebook group: "Found an alternative — $79/month, covers everything I actually use."

*Journey reveals requirements for: quick project creation, milestone template, multi-project management, change order completeness comparable to CoConstruct, pricing clarity in signup flow.*

---

### Journey 3 — Javier: The Solo Premium Kitchen Specialist (LTD Candidate)

Javier runs a 2-person premium kitchen remodeling business in the Bay Area. Average project value is $45,000. He does 8–12 projects per year. His clients are demanding — they expect digital communication and progress updates.

**Opening scene:** Javier loses a $12,000 change order dispute. The client claims she never approved the scope change — they had discussed it verbally on-site. Javier searches for "digital change order approval contractor."

**Discovery → LTD purchase (Day 1):** Finds RemoHub. The LTD at $279 for lifetime access covers his primary need: change order capture with digital signature. He's not interested in sub coordination (it's just him and one assistant). He buys the LTD immediately — the ROI from one recovered $12K dispute pays for a lifetime subscription.

**Usage pattern:** Javier uses RemoHub for every project: creates a project, sets milestones, sends change orders to clients via magic link. Clients appreciate the professional digital experience. He uses the client portal to share project status with demanding clients who want weekly updates.

**Outcome:** Javier becomes a power user of the client portal and change order features. He never disputes a change order again. He leaves a 5-star review on Capterra mentioning the "professional client experience."

*Journey reveals requirements for: LTD purchase flow, client portal as standalone value, change order audit trail, polished client-facing UX.*

---

### Journey 4 — Sam: The Subcontractor (Passive Recipient)

Sam is a tile installer who works with 5–6 different GCs. One of his regular GC clients, Marcus, now uses RemoHub to assign tasks.

**Opening scene:** Sam receives a text: "Tile installation — Master Bath. Due: Thursday. Mark done when complete: [link]"

**Interaction (10 seconds):** Sam clicks the link. Browser opens a simple task page: task description, due date, an optional photo upload, and a "Mark Complete" button. He uploads a photo of the finished tile work and taps Mark Complete.

**Marcus's view:** Marcus sees the task marked complete with Sam's photo in real-time. No follow-up text needed.

**Failure scenario:** Sam doesn't click the link by Thursday. RemoHub sends Marcus a notification: "Task overdue: Tile installation — Master Bath." Marcus calls Sam. The system flagged the miss without Marcus having to track it manually.

*Journey reveals requirements for: simple no-account task completion UX, photo upload from mobile browser, overdue task notifications, task status visibility for contractor.*

---

### Journey 5 — Homeowner Sarah: The Client (Passive Recipient)

Sarah is a homeowner whose kitchen is being renovated by Marcus. She's nervous about the project running over budget.

**Opening scene:** Sarah receives a text from Marcus: "Your project update is ready: [RemoHub magic link]"

**Client portal view:** Sarah opens the link. Browser shows: current phase (Cabinets/Install, started Monday), completed phases (Demolition complete, Rough-in complete with inspection passed), and 1 pending change order.

**Change order approval:** Sarah taps the pending change order: "Under-cabinet LED lighting strip — $780." She sees the description, the reason Marcus added it, and a photo. She taps "Approve" and signs with her finger on mobile. She receives a confirmation email with the signed approval.

**Phase sign-off:** When rough-in is complete, Sarah receives a notification: "Marcus has marked Rough-in complete and is requesting your sign-off." She reviews the uploaded photo and taps "Sign Off."

**Outcome:** Sarah feels informed and in control. She doesn't call Marcus to ask "where are we." Marcus doesn't have to send status update texts. At final invoice, there are no surprises — every change order was approved digitally.

*Journey reveals requirements for: mobile-optimized client portal, project timeline view for clients, change order detail view with approval/decline, phase sign-off flow, confirmation emails, no client account required.*

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Marcus (success path) | Project creation, milestone templates, mobile CO creation, magic link delivery, e-signature, push notifications, sub SMS task assignment, multi-project dashboard |
| Dana (switcher) | Quick project setup, milestone management, multi-project support, feature parity with CoConstruct change order workflow, pricing/plan display |
| Javier (LTD) | LTD purchase flow, CO audit trail, client portal as standalone value, polished client UX |
| Sam (subcontractor) | No-account task completion, mobile photo upload, overdue notifications |
| Sarah (homeowner client) | Mobile client portal, project timeline read view, CO approval/decline, phase sign-off, confirmation emails, no account required |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy and Account Model

- Each contractor company is an isolated tenant; projects, change orders, clients, and sub contacts are scoped to the tenant
- Users within a tenant share access to all projects (no per-project permission scoping in V1)
- Contractor adds team members by email; each team member gets a full-access account under the same subscription
- Sub-contractors and homeowner clients are not tenant users — they interact via signed magic links only

### Role and Permission Model (V1)

| Role | Access |
|------|--------|
| Account Owner | Full access; billing; team management |
| Team Member | Full project/task/CO access; no billing |
| Sub-Contractor | Task completion via magic link; no account |
| Homeowner Client | Project status view + CO approval via magic link; no account |

### Subscription and Billing

| Plan | Price | Users | Projects |
|------|-------|-------|----------|
| Solo | $49/month | 1 | Unlimited |
| Team | $79/month | Up to 5 | Unlimited |
| Unlimited | $99/month | Unlimited | Unlimited |
| Annual (any plan) | 20% discount off monthly | — | — |
| LTD (Team tier) | $279 one-time | Up to 5 | Unlimited |

- Trial: 14-day free trial, no credit card required, full feature access
- Trial-to-paid conversion: in-app upgrade flow; Stripe payment processing
- LTD: one-time charge via Stripe; no recurring billing; grandfathered at Team tier feature set permanently

### Technical Architecture Considerations

**Authentication:**
- Contractor accounts: email/password via Supabase Auth; optional magic link login
- Sub-contractors: unsigned — task links are signed JWTs with task ID, tenant ID, expiration (72 hours)
- Homeowner clients: project portal links are signed JWTs with project ID, tenant ID; long-lived (project duration); re-sendable by contractor
- Change order approval links: signed JWTs with CO ID, tenant ID, expiration (72 hours); single-use (invalidated after approval or decline)

**Data Model (key entities):**
- Tenant (contractor company)
- User (contractor team member, belongs to Tenant)
- Project (belongs to Tenant; has client contact info, original contract amount, milestone list)
- Milestone (belongs to Project; type: standard or custom; status: pending/complete; completed_by, completed_at)
- Task (belongs to Project; assigned_to: sub name + contact; due_date; status: pending/complete/overdue; completion_photo_url)
- ChangeOrder (belongs to Project; status: draft/sent/approved/declined; amount; description; e_signature_record: {timestamp, client_name, ip, link_token})
- Invoice (generated from Project + approved COs; belongs to Project; pdf_url)

**Real-time requirements:**
- Task marked complete → contractor dashboard updates in real-time (Supabase real-time subscriptions)
- Change order approved → contractor push notification within 30 seconds
- Magic link views tracked (client opened portal → contractor can see last-viewed timestamp)

**Email/SMS delivery:**
- Sub task assignment: email (Resend/Postmark) + optional SMS (Twilio or just email in V1 to avoid Twilio complexity)
- Change order magic link: email to client; SMS optional in V1
- Change order approval notification: push notification to contractor (web push or in-app)
- Phase sign-off notification: email to contractor

### Implementation Considerations

- Next.js App Router; server components for data-heavy pages; client components for real-time updates
- Supabase row-level security (RLS) policies enforce tenant isolation at database level
- PDF invoice generation: Puppeteer or React-PDF rendered server-side; stored in Supabase Storage
- Magic link generation: server-side; `jose` library for JWT signing; symmetric secret per tenant stored in env
- Mobile-first CSS: Tailwind; all contractor-facing flows work on iPhone Safari; all client and sub flows work on any mobile browser
- Change order e-signature record: stored as JSON in CO row; included in PDF invoice as audit appendix

---

## Project Scoping & Phased Development

### MVP Strategy

**MVP Approach:** Problem-solving MVP. The minimum that makes RemoHub useful is a working change order → client approval → invoice update loop. A contractor must be able to: (1) create a project, (2) create a change order, (3) send it to a client via magic link, (4) have the client approve it, and (5) generate a PDF invoice that includes the approved change — all in under 30 minutes of first use.

**Resource Requirements:** 1–2 full-stack developers (Next.js/PostgreSQL); 6–8 weeks to working MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Contractor creates and manages projects with milestone tracking
- Contractor creates change orders and routes to clients via magic link for e-signature
- Contractor assigns tasks to subs via SMS/email link; subs mark done without account
- Client views project status, approves change orders, and signs off on phases via magic link
- Contractor generates final PDF invoice from contract + approved change orders

**Must-Have Capabilities:**
- Project CRUD with standard milestone template and custom milestone support
- Milestone status management (complete, with optional completion photo)
- Sub task creation, assignment by name + contact, SMS/email delivery of task link
- Task completion via no-account magic link; optional photo upload
- Overdue task notifications to contractor
- Change order creation (description, amount, notes) on mobile
- Change order magic link generation and delivery to client via email
- Client e-signature flow on mobile browser (approve / decline with note)
- E-signature audit record (timestamp, client name, IP, link token)
- Contractor push notification on change order approval
- Client approval portal (magic link; project status, milestone view, pending/approved COs, phase sign-off)
- Project budget running total (original contract + approved COs)
- Final invoice PDF generation and email/download
- 14-day free trial → Stripe subscription upgrade flow
- LTD purchase flow ($279 one-time)
- Multi-user team accounts (up to 5 on Team plan)

### Post-MVP Features

**Phase 2 (Post-MVP, Months 3–6):**
- Unlimited photo documentation linked to milestones and punch list items
- Materials order tracking: supplier, item, quantity, delivery status, linked to milestone
- QuickBooks integration: sync approved change orders and final invoices
- Sub-contractor native mobile app (iOS/Android) for task view and photo upload
- Reporting dashboard: project profitability, change order conversion rate, revenue-at-risk

**Phase 3 (Expansion, Months 6–12):**
- Multi-project portfolio view with Gantt-style timeline
- Sub-contractor performance tracking (completion rate, on-time rate)
- Client-facing selections and allowances tracking (design choices, material upgrades)
- Automated payment collection via Stripe
- In-app client messaging thread linked to project timeline

### Risk Mitigation Strategy

**Technical Risks:**
- Magic link JWT security: use short expiry (72h) + single-use invalidation; test thoroughly on iOS Safari before launch
- PDF generation reliability: use React-PDF (server-side, no headless browser) to avoid Puppeteer stability issues on Railway
- Real-time updates: Supabase real-time is reliable for small scale; fall back to polling if needed in V1

**Market Risks:**
- CoConstruct window closes before launch: target Q4 2026; a working change order flow alone is sufficient to acquire CoConstruct refugees — full feature parity not required
- JobTread simplifies onboarding: lead with price ($49 vs $159) and change-order-first focus, not just simplicity

**Resource Risks:**
- Scope creep: ship change order module as standalone V1; treat sub coordination and client portal as supporting features, not co-primary
- If only 1 developer: defer sub task SMS to V1.1 (email only initially); defer multi-user to V1.1 (solo plan only); keep core CO loop intact

---

## Functional Requirements

### Project Management

- FR1: Contractors can create a project with name, client contact (name, email, phone), and original contract amount
- FR2: Contractors can apply a standard milestone template (Demolition, Rough-in, Rough-in Inspection, Install, Punch List, Final Sign-off) to a new project
- FR3: Contractors can add custom milestones to any project
- FR4: Contractors can mark a milestone as complete, with an optional completion photo and timestamp
- FR5: Contractors can view a list of all active projects with current milestone status and pending change order count
- FR6: Contractors can archive a completed project, removing it from the active projects view
- FR7: Contractors can view the project budget running total: original contract amount + sum of all approved change order amounts

### Sub-Contractor Task Coordination

- FR8: Contractors can create a task within a project, specifying description, assigned sub name, sub email or phone, and due date
- FR9: Contractors can send a task notification to the assigned sub via email, containing task details and a "Mark Complete" link
- FR10: Assigned subs can mark a task complete via a no-account magic link in any mobile browser
- FR11: Assigned subs can upload a photo when marking a task complete; photo stored and visible to contractor
- FR12: Contractors can view real-time task status (pending, complete, overdue) for all tasks in a project
- FR13: Contractors receive a notification when a task passes its due date without being marked complete

### Change Order Management

- FR14: Contractors can create a change order within a project, specifying description, amount, and optional notes or attachments
- FR15: Contractors can send a change order to the project's client contact via a time-limited magic link (72-hour expiry)
- FR16: The sent change order magic link opens a mobile-browser page showing change order description, amount, and an Approve / Decline with note option
- FR17: Clients can e-sign (approve) a change order via magic link without creating an account; approval is recorded with timestamp, client name, IP address, and link token
- FR18: Clients can decline a change order via magic link with a required note explaining the reason
- FR19: Contractors receive a push notification within 30 seconds when a client approves or declines a change order
- FR20: Approved change orders are automatically added to the project budget running total and marked as billable on the final invoice
- FR21: Declined change orders are stored with the client's decline note and excluded from the invoice
- FR22: Contractors can view a full list of all change orders per project with status (draft, sent, approved, declined) and amounts
- FR23: Contractors can resend an expired or unopened change order magic link to the client

### Client Portal

- FR24: Contractors can generate or retrieve a persistent magic link for the client project portal, shareable via SMS, email, or copy-paste
- FR25: Clients can view project status via the portal magic link without creating an account: current milestone, completed milestones with dates, project timeline
- FR26: Clients can view all pending and approved change orders in the portal, including amounts and descriptions
- FR27: Clients can approve or decline change orders directly from the client portal (same flow as email magic link)
- FR28: Clients can sign off on a completed phase/milestone from the portal, generating a timestamped phase acceptance record
- FR29: Contractors can see when the client last viewed the portal magic link (last-opened timestamp)

### Invoice Generation

- FR30: Contractors can generate a PDF invoice for a project containing: contractor business info, client info, original contract amount, itemized list of all approved change orders with amounts, total amount due
- FR31: Generated invoices include an audit appendix listing each approved change order's e-signature record (client name, approval timestamp, link token)
- FR32: Contractors can email the generated invoice PDF directly to the client contact from within RemoHub
- FR33: Contractors can download the generated invoice PDF to their device

### Account and Team Management

- FR34: Contractors can create an account and start a 14-day free trial without providing payment information
- FR35: Account owners can invite team members by email; invited users can join the contractor's account and access all projects
- FR36: Account owners can manage subscription plan (Solo / Team / Unlimited / Annual) and update payment information
- FR37: Account owners can purchase a Lifetime Deal (LTD) via one-time Stripe payment, granting permanent Team-tier access
- FR38: Contractors can configure their business name, logo, and contact info used on invoices and client-facing communications
- FR39: Contractors can set up project templates: saved milestone sets reusable across new projects (kitchen remodel template, bath remodel template, etc.)

### Notifications and Communications

- FR40: Contractors receive in-app and push notifications for: change order approved, change order declined, task marked complete, task overdue, client signed off on phase
- FR41: Contractors can resend a client portal magic link or task magic link at any time from within the project
- FR42: All system-generated emails to subs and clients are sent from a customizable "From Name" matching the contractor's business name

---

## Non-Functional Requirements

### Performance

- Page load time for contractor dashboard (project list): <2 seconds at 95th percentile under normal load (measured via Real User Monitoring)
- Change order magic link page load on mobile browser (iOS Safari, Chrome Android): <3 seconds at 95th percentile on a 4G connection
- Task magic link page load on mobile: <2 seconds at 95th percentile
- Push notification delivery for change order approval: <30 seconds from client e-sign action
- Invoice PDF generation: <10 seconds for invoices with up to 50 line items

### Security

- All data encrypted in transit (TLS 1.2+); all stored data encrypted at rest (Supabase default AES-256)
- Magic links are signed JWTs; signing secret is per-environment, stored in environment variables, never in codebase
- Change order approval magic links are single-use: invalidated immediately after client approves or declines
- Sub task completion magic links expire after 72 hours; re-sendable by contractor
- Supabase row-level security (RLS) policies enforce tenant isolation: a contractor's queries can only return rows belonging to their tenant
- E-signature records (timestamp, client name, IP, link token) are immutable once written; no update or delete permitted via API
- Stripe handles all payment card data; RemoHub stores no raw card numbers
- Password reset flows use time-limited (1 hour) single-use email links

### Scalability

- Initial target: 500 concurrent active users; architecture must support 5,000 concurrent users (10x) with horizontal scaling and no data model changes
- Supabase real-time subscriptions used only for active project views; connection pooling via Supabase's built-in pooler (PgBouncer)
- PDF invoice generation is async and queued; synchronous generation acceptable in V1 for invoices <50 line items; job queue added in V2 if generation >10 seconds

### Reliability

- Target uptime: 99.5% measured monthly (Vercel + Railway SLA covers this under normal usage)
- Change order and e-signature data: zero tolerance for data loss; writes confirmed before success response returned to client
- Draft change orders auto-saved every 60 seconds; contractor can recover an incomplete draft after browser crash or connection loss
- Magic links work offline-to-online: if a client opens a magic link while offline, page loads from browser cache and submits approval when connectivity resumes (progressive enhancement)

### Accessibility

- All contractor-facing pages: WCAG 2.1 AA compliance for keyboard navigation and screen reader support (target market includes contractors working in noisy environments with one hand; large tap targets required)
- Client portal and change order approval pages: WCAG 2.1 AA compliance; minimum 16px body text; tap targets minimum 44×44px; works with iOS VoiceOver
- Color contrast ratio: minimum 4.5:1 for all text
- Sub task completion page: single-action UX; works on 5-year-old Android phones with no JavaScript disabled

### Integration

- Stripe: payment processing for subscription plans and LTD purchase; webhook handling for subscription status changes (cancellation, failed payment)
- Resend or Postmark: transactional email delivery; SPF/DKIM configured for contractor domain sending; delivery receipts tracked
- Supabase Storage: photo uploads from subs and contractors stored as private objects; accessed via signed URLs with 1-hour expiry
- V2 integration: QuickBooks Online API (approved COs → QB invoices/line items); no V1 commitment

---

*PRD created: 2026-11-28*
*Input sources: Shortlisted idea (scored 85/105) + market research (2026-11-27) + product brief (2026-11-28)*
*Status: Complete — ready for Architecture*

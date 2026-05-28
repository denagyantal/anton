---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/contractor-permit-tracking.md
  - _bmad-output/planning-artifacts/market-research-contractor-permit-tracking.md
  - _bmad-output/planning-artifacts/brief-contractor-permit-tracking.md
workflowType: prd
lastStep: step-12-complete
project_name: contractor-permit-tracking
user_name: Root
date: 2026-05-28
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: low
  projectContext: greenfield
---

# Product Requirements Document — PermitTrack

**Author:** Root
**Date:** 2026-05-28

---

## Executive Summary

PermitTrack is a mobile-first, purpose-built permit tracking tool for small licensed contractors — electricians, plumbers, HVAC techs, and general contractors with 2–15 employees. It replaces the spreadsheet/whiteboard with one unified permit dashboard across all active jobs, plus proactive SMS and email reminders before inspection deadlines expire. Flat pricing at $29–$69/mo.

The core problem: 66% of US licensed contractors track permits via spreadsheets or whiteboards (NAHB 2025) with no affordable dedicated tool. Missing an inspection window costs $340+ in re-inspection fees and 15-day schedule delays. Enterprise solutions (PermitFlow $350+/mo, Procore $2,000+/mo) address developers and national builders. Field service tools (Jobber, Housecall Pro) have zero permit workflow. The gap is exactly where small contractors spend on software today.

**The product does four things:**
1. Provides a single view of all open permits across all active jobs, sorted by next action date
2. Pushes proactive alerts (7/3/1 days) before inspection deadlines — converting the "missed inspection" failure mode into a non-event
3. Maintains structured pass/fail history per job for contractor records and client documentation
4. Exports professional PDF permit status reports at project close

**Revenue path:** AppSumo LTD ($69 one-time, 300+ sales in Month 1) seeds the user base; subscription growth targets $17K MRR by Month 12 via Reddit organic acquisition and SEO.

### What Makes This Special

PermitTrack is the only affordable, purpose-built permit tracking tool for the trades. Every competing tool in the $29–$99/mo range that small contractors already trust (Jobber, Housecall Pro) has zero permit workflow. Every tool with permit workflow costs $200+/mo minimum.

The key differentiator is **proactive vs. reactive**: contractor permit management has always been reactive — check when you remember. PermitTrack converts every upcoming deadline into a push notification, eliminating the failure mode before it occurs. The ROI writes itself: one avoided re-inspection fee ($340) covers 4.9 months of the $69/mo Business plan.

Second differentiator: **built-for-trades identity**. Language, permit type defaults, and workflows match how a 5-person electrical shop actually operates — not a construction-tech enterprise product adapted downward. Contractors recognize it as theirs immediately.

## Project Classification

- **Project Type:** B2B SaaS — web application (mobile-first PWA)
- **Domain:** Field service management / contractor compliance
- **Complexity:** Low-medium — straightforward CRUD with notification pipeline; no regulated compliance overhead, no external API dependencies at MVP
- **Project Context:** Greenfield — no existing codebase or legacy constraints

---

## Success Criteria

### User Success

A user is succeeding when they have stopped maintaining a parallel spreadsheet and manage all permit tracking inside PermitTrack. The three definitive success moments, in order of importance:

1. **First avoided crisis:** Receives a 7-day inspection expiry alert for a permit they'd half-forgotten. Schedules inspection in time. $0 re-inspection fee.
2. **First-week habit:** Opens dashboard Monday morning, sees the week's upcoming inspections — done before coffee.
3. **Project close:** Exports PDF permit report, hands it to client. Client comments on the documentation quality.

**User success is NOT achieved when:** A user marks an inspection as passed inside the tool while also maintaining the same data in a separate spreadsheet. That means PermitTrack hasn't yet replaced their existing system.

### Business Success

| Horizon | Targets |
|---------|---------|
| 6 months | 200+ paying customers; $7,000+ MRR; 300+ AppSumo LTD sales ($20,700 launch revenue); 50+ reviews at 4.5+ average on Capterra/G2 |
| 12 months | 500+ paying customers; $17,000+ MRR; top 3 organic ranking for "contractor permit tracking software"; <5% monthly churn on Pro/Business |
| 18 months | $25,000+ MRR ($300K ARR run rate); 1,000+ active users; recognized in r/electricians, r/HVAC, r/Plumbing as the go-to permit tool |

### Technical Success

- System uptime ≥99.5% measured monthly (notification delivery is a core value promise)
- SMS and email notifications delivered within 60 seconds of scheduled trigger time
- All data encrypted at rest and in transit; zero cross-tenant data exposure
- Zero permit records lost due to infrastructure failure
- Mobile dashboard loads in <3 seconds on a 4G connection

### Measurable Outcomes

| Metric | Target |
|--------|--------|
| "Aha" activation (first reminder received within trial) | >70% of new users within 14 days |
| Weekly active usage | >60% of active subscribers any given week |
| Permit close rate (permits tracked through to "closed") | >50% within 90 days of submission date |
| Trial-to-paid conversion | >25% |
| 90-day retention | >75% |
| Monthly churn (Pro/Business) | <4% |
| NPS | >50 |
| Permits tracked per active user/month | >15 (signals spreadsheet replacement, not supplementation) |
| Time to first value (first reminder or inspection marked) | <7 days for 60% of new users |

**Leading indicators predictive of retention:**
- Users who enter ≥5 permits in first week: 3× higher 90-day retention
- Users who receive and act on their first SMS reminder: 2× higher 90-day retention
- Users who export a PDF permit report: highest retention cohort (indicates client-facing usage and stickiness)

---

## Product Scope

### MVP — Minimum Viable Product

**Philosophy:** The whiteboard replacement. The MVP does exactly one thing well — eliminates missed inspections for a 2–15 person contractor shop. No integrations, no portal API sync, no native app. Pure CRUD + proactive notifications + PDF export.

**MVP capabilities:**

| # | Capability |
|---|------------|
| 1 | Job records with attached permits |
| 2 | Permit fields: jurisdiction, permit type, number, submission date, approval date, inspection date, pass/fail outcome, close date, notes |
| 3 | Automatic permit status computation: submitted / approved / inspection scheduled / passed / failed / re-inspection required / closed / expired |
| 4 | Unified dashboard: all open permits across all active jobs, sorted by next action date, color-coded by urgency |
| 5 | Proactive alerts: SMS + email at 7/3/1 days before inspection date, plus overdue alert when inspection window passes without resolution |
| 6 | Pass/fail inspection history log with timestamps and user attribution |
| 7 | One-click PDF permit status report per job, with company logo |
| 8 | Multi-user: up to 5 users per account with Admin/Viewer roles |
| 9 | Pricing tiers: Starter ($29/mo, 10 permits, 1 user), Pro ($49/mo, 30 permits, 3 users), Business ($69/mo, unlimited, 5 users) |
| 10 | AppSumo LTD redemption: $69 one-time, Pro-equivalent (30 permits, 3 users) |

**Explicitly out of scope for MVP:**
- Permit portal API integrations (automated status sync from city portals)
- QuickBooks / Jobber / Housecall Pro integrations
- Permit application submission workflows
- Native iOS/Android app (PWA with "Add to Home Screen" is sufficient for MVP)
- AI jurisdiction intelligence (permit requirements by city/county)
- Subcontractor portal / multi-company account sharing
- Per-seat pricing above plan limits
- Client-facing homeowner portal
- Permit fee tracking and cost management
- Gantt / project schedule integration

### Growth Features (Post-MVP, Months 4–12)

- **Jobber integration:** Sync jobs from Jobber automatically; permit status visible inside Jobber job record
- **QuickBooks integration:** Tag permit costs to job; export permit report with cost data
- **Portal monitoring (select jurisdictions):** Automated status pulls from 20 highest-volume US permit portals — detect approvals and inspection results without manual entry
- **Inspector scheduling link:** "Schedule inspection" button opening the jurisdiction's scheduling portal or phone number
- **Per-seat pricing:** For teams exceeding 5 users, transition to per-seat billing with admin controls

### Vision (Year 2+)

- **Contractor compliance platform:** Extend the "never-miss-a-deadline" model to contractor license renewal dates, insurance certificate expirations, and bond renewals — full compliance operating system
- **Subcontractor portal:** GCs invite subs to update their own permits; GC sees consolidated view across all subs per project
- **AI permit assistant:** Given job address and trade type, suggest required permits for that jurisdiction — reduces the "did I pull all the permits I need?" anxiety
- **White-label for trade associations:** License platform to NECA/PHCC chapters as member benefit — distribution at scale
- **Zapier / API integration:** Enable custom contractor workflows and connections to proprietary tech stacks

---

## User Journeys

### Journey 1: Marcus — Owner-Operator Electrician (Primary User, Success Path)

Marcus runs a 6-person electrical shop in suburban Ohio. His wife Jennifer handles admin — including maintaining their Google Sheets permit log, which she updates every Monday by logging into four different municipal portals. They have 12–15 open permits at any given time. When Jennifer's on vacation, Marcus checks the spreadsheet — which means he often doesn't, and things slip.

Three months ago: a permit expired mid-job. Inspector arrived, found no valid permit on site. Stop-work order. $340 re-inspection fee. Nine lost working days. Marcus was on another job site when Jennifer called.

**Discovery:** Marcus asks in r/electricians: "How are you managing open permits right now?" A contractor replies with a PermitTrack link and says it saved them from a $340 mistake. Marcus clicks, sees "Never miss an inspection again. $29/mo." He signs up for the free trial in 3 minutes.

**Onboarding:** Jennifer enters their 12 current open permits in 25 minutes — jurisdiction, permit number, inspection dates. She's surprised it took less time than updating the spreadsheet. She sets herself and Marcus as users.

**First aha moment:** Thursday evening, 7 days before a permit inspection Jennifer had half-forgotten: a text arrives at her phone — "Permit #E-2024-081 at 4430 Elm Ave: inspection in 7 days." She hadn't opened the spreadsheet. She calls the city inspector, schedules the appointment. On inspection day, she marks it passed in the app from her desk in 10 seconds.

**New reality:** Monday morning, Marcus opens the app on his phone before Jennifer starts work. Three permits due this week. He calls his crew leads on those jobs. He hasn't thought about a missed inspection since. Converts to Pro plan on day 14.

*This journey reveals requirements for: permit entry from desktop, unified dashboard sorted by due date, SMS/email alert pipeline, mobile status update (mark passed), multi-user access.*

---

### Journey 2: Diana — HVAC Owner/Operator (Primary User, Mobile-First)

Diana runs a 4-person HVAC company in Phoenix. She and her husband are both techs; she handles office work. Permits tracked in a physical binder — works in the office, useless on a job site. She's been burned twice: one permit expired before final inspection, one job started before the permit was approved.

**Discovery:** Diana sees a post in r/HVAC: "how do you manage permits?" She clicks the PermitTrack link in the first reply. $29/mo. Signs up immediately — no credit card required.

**Onboarding:** Sets up the account on her phone during lunch on a job site. 8 current permits entered in 18 minutes. No tutorial needed — the fields match exactly what she fills out on paper (jurisdiction, type, number, dates).

**First week value:** She marks two permits "approved" after the city portal updates. Gets an alert 3 days before an inspection she'd half-forgotten. Schedules it. Passes.

**Trigger moment — week 3:** She's on a job site when a "Permit Approved — ready to schedule work" alert fires. Without PermitTrack, she'd have found out 2 days later when she finally logged into the portal. She calls the client immediately to schedule. Client is pleased with the responsiveness.

*This journey reveals requirements for: status-change alerts (approval trigger, not just pre-inspection date), mobile-first data entry with large tap targets, permit type library pre-loaded for HVAC trades, no desktop required for full functionality.*

---

### Journey 3: Tom — General Contractor (Secondary User, Multi-Permit Projects)

Tom runs a 12-person GC company focused on residential remodels and light commercial TI. Each project has 3–5 permits — electrical, plumbing, mechanical, structural, building/demo. Specialty subs pull their own permits, but Tom is the GC of record. When a sub's permit expires or a rough inspection is missed, Tom gets the fine and the delay.

**Discovery:** Tom tried ConstructionOnline's permit feature — buried in the platform, no mobile alerts. He Googles "dedicated contractor permit tracking app." PermitTrack is the first affordable result.

**Onboarding:** Tom and his PM both sign in. Tom creates jobs; PM manages permits. Each sub's permit is logged and tracked against the project — Tom has visibility, the PM gets alerts.

**Ongoing usage:** Monday standups include a PermitTrack dashboard check. PM exports PDF permit status reports as part of the project close package. Clients have started commenting on the documentation quality.

**Workaround Tom uses:** He adds subs as Viewer users so they can mark their own inspections. He wants a dedicated subcontractor entry path (queued for Phase 2 subcontractor portal).

*This journey reveals requirements for: multiple permits per job, multi-user with role differentiation, PDF export at project close, notes field to attribute each permit to the responsible party, mobile viewer access for field users.*

---

### Journey 4: Jennifer — Office Administrator (Admin Power User)

Jennifer is Marcus's wife and the day-to-day operator of PermitTrack. She is not the buyer but she is the product's most important user — she logs every permit, updates every status, clears every overdue alert.

**Her weekly workflow:** Monday morning: opens dashboard. Green = fine. Yellow = check this week. Red = action today. She updates inspection dates when crews call in after scheduling with inspectors. She marks permits passed from her desk immediately after the inspector leaves.

**Mobile edge case:** She sometimes updates a permit from her car in a supply house parking lot. The mobile experience must work without pinching and zooming — large inputs, minimal scrolling for the most common action (mark inspection status).

**Admin workflow that reveals a friction point:** She needs to update a permit that has moved from "inspection scheduled" to "passed" while also adding a note about the inspector's name. She wants to do this in one action without navigating to the full permit record from the dashboard.

*This journey reveals requirements for: mobile-optimized data entry (≥44px tap targets), dashboard quick-update panel (status + note without opening full record), filter dashboard by job for focused work sessions, per-user notification settings so she can control which alerts Marcus receives.*

---

### Journey 5: Overdue Alert Recovery (Edge Case)

Marcus gets a "permit overdue — inspection window passed" alert for permit #E-2024-099 at 7:12 AM. The scheduled inspection date was yesterday. The inspection was never scheduled.

**What happens:** He opens the app. The permit is red. Inspection date was yesterday. He calls the city at 8 AM — inspector can reschedule in 3 business days with no re-inspection fee because the permit hasn't expired (submitted 8 weeks ago, still within 6-month validity window). He reschedules. Updates the inspection date in PermitTrack. Alert recalculates for the new date. New 3-day and 1-day alerts will fire.

**Why this matters:** The overdue alert gave him same-day visibility. Without it, he'd have found out when the client asked why the job was stalled — days or weeks later, after the validity window had closed and a re-inspection fee became unavoidable. The system caught a human error before it became a financial penalty.

*This journey reveals requirements for: overdue alert distinct from pre-inspection alerts, visual differentiation between "overdue" (inspection window passed, permit still valid) and "expired" (permit validity period closed), ability to update inspection date after a missed window and re-trigger alert cadence.*

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|-----------------------|
| Marcus (owner, multi-job) | Permit entry (desktop), unified dashboard, SMS/email alert pipeline, mobile status update, multi-user access |
| Diana (owner-operator, mobile-first) | Mobile permit entry, approval-triggered status alerts, permit type library for HVAC, full functionality without desktop |
| Tom (GC, multi-permit projects) | Multiple permits per job, multi-user with roles, PDF export at project close, notes with sub attribution |
| Jennifer (admin power user) | Mobile-optimized UI (large tap targets), dashboard quick-update (status + note in one action), job filter, per-user notification settings |
| Marcus (overdue recovery) | Overdue vs. expired status distinction, date update post-miss with alert recalculation, same-day visibility on slipped deadlines |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

- Each contractor company account is a fully isolated tenant
- No permit data, job records, or user information is visible across account boundaries
- Account owner is the billing entity; additional users inherit account context and permissions
- User invitations are scoped to a single account; cross-account user sharing is not supported at MVP

### Permissions Model

| Role | Job Management | Permit Entry & Update | Dashboard | Notifications | Billing | User Management |
|------|---------------|----------------------|-----------|---------------|---------|-----------------|
| Account Owner | Full | Full | Full | Configure | Full | Full |
| Admin | Full | Full | Full | Configure own | None | Invite only |
| Viewer | Read | Mark inspection status only | Read | Receive only | None | None |

- Role assignment at invite time; Account Owner can change roles at any time
- Plan limits: Starter (1 user), Pro (3 users), Business (5 users)

### Subscription & Billing

- Stripe for subscription billing (monthly; annual option is Phase 2)
- AppSumo LTD: redemption code at signup activates Pro-equivalent (30 active permits, 3 users) permanently
- Plan upgrade/downgrade self-serve in account settings; effective immediately
- 14-day free trial, no credit card required; trial limits = Pro plan
- Usage enforcement: when active permit count approaches plan limit (≥90%), show in-app warning and prompt to upgrade; do not silently block entry — show upgrade prompt on the blocked action

### Onboarding Flow

- Email verification required before accessing permit data
- 3-step guided setup wizard at first login: (1) Company profile (name, logo, phone) → (2) Create first job → (3) Add first permit
- Pre-loaded permit type library: electrical, plumbing, mechanical, structural, building, demolition, plus free-text custom
- US jurisdiction autocomplete (city/county name from known US jurisdictions list); free-text fallback for jurisdictions not in list
- SMS opt-in prompt with phone number collection during wizard step 1; opt-in is explicit (not pre-checked)
- Onboarding completion triggers first "dashboard ready" email with link and short explainer

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum viable implementation that makes the "missed inspection" failure mode go away for a 5-person contractor shop. The MVP must reliably do three things: accept permit data, surface it in a mobile-accessible dashboard, and fire proactive alerts before deadlines.

**What is NOT required to validate the core value:** Portal API integrations, native app, integrations with Jobber/QuickBooks. Manual entry is what contractors already do — requiring it for MVP removes an unproven assumption from the critical path.

**Resource requirement:** 1 full-stack developer (Next.js + Postgres), 1 part-time designer for mobile UX. Target: 2–3 week build to deployable v0.1 with all MVP capabilities.

### MVP Feature Set (Phase 1)

**Core user journeys fully supported:**
- Owner-operator tracks all permits across all active jobs (Marcus, Diana)
- Team member / admin updates permit status from job site (Jennifer, Foreman)
- General contractor tracks multiple permits per project with multi-user visibility (Tom)

**Must-have capabilities:**
1. Account creation, login, email verification, password reset
2. Job record management (create, edit, deactivate/archive)
3. Permit entry, editing, and status computation
4. Unified permit dashboard with sort, filter, color-coded status
5. Inspection alert pipeline: 7/3/1-day SMS + email + overdue alert + expiry alert
6. Pass/fail inspection history log with timestamps
7. PDF permit status report per job with company logo
8. Multi-user invitation, role assignment (Admin/Viewer), user removal
9. Plan limits enforcement with upgrade prompts
10. Stripe subscription management (upgrade, downgrade, cancel)
11. AppSumo LTD code redemption at signup

### Risk Mitigation Strategy

| Risk | Mitigation |
|------|-----------|
| SMS delivery failure (Twilio outage or message drops) | Delivery receipts monitored; fallback email always sent on same schedule; daily digest email as backup for any undelivered SMS |
| PWA adoption resistance (contractors expect a "real app") | Prominent "Add to Home Screen" prompt on first mobile login; app-like full-screen PWA configuration |
| "Just use spreadsheets" inertia | 14-day free trial, no credit card; AppSumo LTD removes ongoing commitment; ROI calculator on landing page showing one avoided re-inspection fee = 4.9 months paid |
| Scope creep before launch | Explicit out-of-scope list in this PRD; any request for portal integration, native app, or integrations is Phase 2 by policy |
| If resources must shrink | PDF export is deferrable (Phase 2); alerts + dashboard are non-negotiable for core value proposition |

---

## Functional Requirements

### Job Management

- FR1: Account Owner and Admin users can create a job record with client name, job address, job type (electrical / plumbing / HVAC / general contractor / other), and active/inactive status
- FR2: Account Owner and Admin users can edit any field on a job record they have access to
- FR3: Account Owner and Admin users can mark a job inactive (archived), removing it from the active permits dashboard without deleting the job or permit records
- FR4: All users can view a job detail page listing all permits attached to that job with current status
- FR5: All users can search jobs by client name or job address from the dashboard

### Permit Entry & Management

- FR6: Admin users can add a permit to a job with the following fields: jurisdiction (autocomplete + free text), permit type (pre-loaded library + free text), permit number, submission date, approval date, inspection date, inspection result (scheduled / passed / failed / re-inspection required), close date, notes
- FR7: The system automatically computes permit status from entered dates and outcomes: submitted → approved → inspection scheduled → passed / failed → re-inspection required / closed / expired
- FR8: Admin users can update any permit field at any time; status recomputes on save
- FR9: The permit type library includes pre-loaded types: electrical, plumbing, mechanical, structural, building, demolition; users can enter custom types via free text
- FR10: Jurisdiction field provides autocomplete from a known US city/county list; accepts free text for jurisdictions not in the list
- FR11: Admin users can add timestamped, attributed notes to any permit at any stage
- FR12: Viewer users can update inspection status (mark as scheduled, passed, failed) from the dashboard or permit detail view; they cannot edit other permit fields

### Permit Dashboard

- FR13: All users can view a dashboard displaying all open permits across all active jobs in the account, sorted by next action date by default
- FR14: Dashboard displays permit status with color coding: green (on track, no action due within 7 days), yellow (inspection date within 1–7 days), red (overdue or expired)
- FR15: Dashboard supports filtering by: permit status, job, permit type, date range
- FR16: Users can update inspection status (mark scheduled, passed, failed, closed) and add a note directly from the dashboard row without navigating to the full permit record
- FR17: Dashboard is accessible and fully functional on mobile screens ≥375px width

### Inspection Alerts & Notifications

- FR18: The system sends email alerts to configured recipients 7 days, 3 days, and 1 day before a scheduled inspection date
- FR19: The system sends SMS alerts to opted-in recipients on the same 7/3/1-day schedule as email alerts
- FR20: The system sends an overdue alert (distinct from pre-deadline alerts) when an inspection date passes without a passed, failed, or rescheduled status update recorded
- FR21: The system sends an expiry alert when 6 months have elapsed since the permit submission date with no close date recorded (configurable threshold per permit if needed)
- FR22: When an inspection date is updated after a missed deadline, alert cadence recalculates automatically based on the new date
- FR23: Account Owner and Admin users can configure per-job alert recipients (any subset of account users)
- FR24: Each user can manage their own SMS opt-in/out and email notification preferences in account settings

### Inspection History & Records

- FR25: The system maintains a chronological log per permit: every status change recorded with timestamp and the user who made the change
- FR26: Admin users can record a failed inspection with fail reason (free text) and set a re-inspection scheduled date
- FR27: All users can view the complete inspection history for all permits on a job in chronological order on the job detail page
- FR28: Re-inspection outcomes are appended to the permit's history log with the same timestamp and attribution structure as initial inspections

### Reporting & Export

- FR29: Admin users can generate a one-click PDF permit status report for any job
- FR30: The PDF report includes: job details (client name, address, type), all permits with their complete status history, dates, outcomes, and notes
- FR31: Account Owners can upload a company logo (PNG/JPG, displayed in PDF report header and account branding)
- FR32: The PDF report is formatted for professional client handoff — clean layout, no system UI chrome, branded with company name and logo

### User & Account Management

- FR33: Account Owner can invite additional users up to the plan's user limit, by email address, with role assignment (Admin or Viewer)
- FR34: Invited users receive an email invitation with a one-click accept link; accepting creates their account in the context of the inviting company
- FR35: Account Owner can change any user's role (Admin ↔ Viewer) at any time from account settings
- FR36: Account Owner can remove any user from the account; removed users immediately lose access
- FR37: The system enforces active permit count limits per pricing tier; when a user attempts to add a permit that would exceed the plan limit, it shows an upgrade prompt and blocks the action
- FR38: Account Owner can manage subscription plan (upgrade, downgrade, cancel) and billing information in account settings via Stripe Billing Portal
- FR39: The system supports AppSumo LTD code redemption at signup; a valid code activates Pro-tier equivalent features with no expiration and no monthly charge
- FR40: Account Owner can view current usage: active permit count vs. plan limit, active job count, user count vs. plan limit

### Onboarding

- FR41: New users complete a 3-step setup wizard at first login: (1) company profile (name, logo, phone) → (2) create first job → (3) add first permit
- FR42: The system requires email address verification before allowing access to permit data
- FR43: The system prompts users to add their mobile phone number and explicitly opt in to SMS alerts during the company profile step; this is optional and can be skipped
- FR44: Users can complete all core workflows (enter permit, view dashboard, mark inspection) on a mobile device ≥375px width without horizontal scrolling or sub-44px tap targets on primary actions

---

## Non-Functional Requirements

### Performance

- Dashboard with up to 100 active permits loads in <3 seconds on a 4G mobile connection (measured from navigation to interactive)
- Permit status updates (mark passed, update date field) complete with visible confirmation in <1 second
- PDF report generation completes in <10 seconds for jobs with up to 50 permits
- Search and filter results render in <1 second for accounts with up to 500 total permits

### Security

- All data encrypted at rest (AES-256 equivalent) and in transit (TLS 1.2+)
- Passwords stored using bcrypt or equivalent one-way hash; never stored in plaintext
- Role-based access control enforced server-side on every API endpoint — UI-only access restrictions are insufficient
- Tenant data isolation enforced at the database query layer; all permit queries are scoped to the authenticated user's account ID by policy, not by UI filtering
- SMS and email notification content is limited to: permit number, job address, inspection date, and action required — no passwords, billing data, or other PII in notification payloads

### Reliability

- Core application (dashboard, permit entry, status update) targets 99.5% monthly uptime
- Scheduled alert delivery: 99% of triggered SMS and email notifications delivered within 60 seconds of scheduled time
- Daily automated database backups retained for 30 days; point-in-time recovery capability
- Zero permit records lost due to infrastructure failure (durable write confirmation before success response to user)
- SMS delivery failures logged and retried; fallback email sent within 5 minutes of a failed SMS delivery

### Scalability

- System handles accounts with up to 10,000 active permits without dashboard performance degradation
- Initial infrastructure supports 500 concurrent users; architected for horizontal scaling without code changes
- Alert notification pipeline handles 50,000+ scheduled alerts per day without queue delay
- Database schema and query patterns support 100× user growth without schema migration

### Mobile & Accessibility

- Progressive Web App (PWA) configuration enables "Add to Home Screen" on iOS Safari and Android Chrome
- Core flows (view dashboard, mark inspection status, add permit) are fully functional on screens ≥375px width with no horizontal scroll
- All primary interactive elements (buttons, form inputs, status toggles) have tap targets ≥44×44px
- WCAG 2.1 AA color contrast compliance on all text elements (≥4.5:1 ratio for normal text)
- Application is functional without JavaScript disabled for static content pages (landing page, pricing); app shell requires JS as expected for a PWA

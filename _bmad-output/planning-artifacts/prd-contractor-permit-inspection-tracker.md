---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/contractor-permit-inspection-tracker.md
  - _bmad-output/planning-artifacts/product-brief-contractor-permit-inspection-tracker.md
workflowType: prd
project_name: contractor-permit-inspection-tracker
user_name: Root
date: 2026-11-07
classification:
  projectType: saas_b2b
  domain: construction_tech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — PermitDesk

**Author:** Root (Automated BMAD Pipeline)
**Date:** 2026-11-07
**Product:** PermitDesk — Contractor Permit & Inspection Tracker
**Status:** Complete

---

## Executive Summary

Small general contractors (5–25 employees) running 5–30 concurrent projects lose $1,200–$15,000 per permit oversight incident — fines for expired permits, fees for missed inspections, and project delays that ripple through job schedules. No national product exists at $19–79/month that provides multi-job permit tracking, inspection scheduling, and expiration alerts for this segment. The cheapest alternative with comparable permit depth (ClearedNo) is Texas-only, $79/month, and lacks inspection scheduling.

**PermitDesk** is a mobile-first, web-based SaaS for small GCs that answers four questions in under 10 seconds from any phone: (1) which jobs have open permits right now, (2) what inspections are scheduled this week, (3) what's expiring in the next 30 days, and (4) who is responsible for each permit. At $19–29/month (or $59 LTD), PermitDesk sits 4–17× below the cheapest credible alternative and targets a confirmed $6.9M serviceable market growing at 14.2% CAGR.

**Target users:** Owner-operator GCs and their office managers/project coordinators who currently track permits in Google Sheets or WhatsApp threads.

**Launch strategy:** 1–2 week MVP build → 10–20 beta users from r/GeneralContractor → AppSumo LTD launch ($59, target 1,500–2,500 units) → MRR push via SEO and contractor community channels.

**Investment case:** 89/105 on the 10-step playbook. Problem is universally confirmed, pricing gap is validated, MVP is a 1–2 week build, and no dominant national player exists at the target price point.

### What Makes This Special

**Price leadership with feature parity:** $19–29/month is below the conscious-decision threshold for most small business owners and 4–17× cheaper than any tool with equivalent permit depth nationally.

**Four-question focus:** PermitDesk deliberately limits its scope to the four questions every GC needs. This focus makes it fast to learn, fast to use, and fast to build — preventing the feature-creep trap that plagues every existing tool in the space.

**Near-miss celebration UX:** When an expiration alert fires and the contractor avoids a costly miss, PermitDesk surfaces that moment explicitly — "Alert saved you: Permit #BLD-2026-0441 for Oak Street was expiring in 7 days." This generates the word-of-mouth story contractors tell at association meetings and on Reddit.

**Mobile-first for the field:** The UI is designed for a 375px screen in bright outdoor light — large touch targets, RAG color status at a glance, minimal text. Every existing alternative assumes a desk worker. PermitDesk is built for someone checking status from a truck cab between job sites.

**Jurisdiction-agnostic tracking:** PermitDesk doesn't attempt to integrate with government permit portals (unreliable, jurisdiction-specific). It tracks what the contractor already knows. This makes it work immediately for any permit in any municipality.

## Project Classification

- **Project Type:** SaaS B2B — web application, multi-tenant, subscription + LTD billing
- **Domain:** Construction Tech / Field Service Management
- **Complexity:** Medium — no regulated data (no PHI/PCI), but mobile-first UX and reliable alert delivery are critical; jurisdiction fragmentation requires careful UX design
- **Project Context:** Greenfield — new product with no existing codebase
- **Tech Stack (recommended):** Next.js + PostgreSQL + Resend (email) + AWS S3 (document storage)
- **MVP Timeline:** 1–2 weeks to working beta

---

## Success Criteria

### User Success

A PermitDesk user has succeeded when:

1. **Zero missed permit expirations** attributable to tracking failure — every expiration is either caught by an alert or a deliberate decision to let it lapse.
2. **Inspection schedule visibility** — user knows every inspection scheduled for the current week without opening email, calling the permit office, or checking a spreadsheet.
3. **10-second status check** — opening the dashboard shows complete current status across all active jobs in under 10 seconds with no additional clicks required.
4. **Accountability trail** — when a permit issue arises, the responsible person is immediately identifiable from the permit record.

**Aha! moment:** The first time an expiration alert fires and the contractor realizes they had completely forgotten about that permit. The app surfaces this explicitly: "You would have missed this permit in 7 days." That moment converts casual users to evangelists.

### Business Success

**Month 3 (post-AppSumo launch):**
- 1,500–2,500 LTD units sold on AppSumo at $59 = $88K–$148K gross ($53K–$89K net)
- 50+ verified AppSumo reviews (minimum for G2/Capterra credibility transfer)
- 50–100 MRR customers from organic/Reddit channels running in parallel with LTD launch

**Month 6:**
- MRR: $3,800–$8,700 (200–300 paid customers at blended $19.50/month)
- Monthly churn: <5%
- NPS: 40+ (driven by prevented disasters, not feature satisfaction)

**Month 12:**
- MRR: $9,500–$29,000 (500–1,000 paid customers)
- G2/Capterra rating: 4.5+ stars with 50+ reviews
- 3+ case studies documenting quantified permit-miss prevention
- Phase 2 lien waiver feature in beta (opens $49/month Team tier)

**12-month revenue target:** $138K–$276K ARR from MRR + $53K–$89K from LTD = $191K–$365K total first-year revenue.

### Technical Success

1. **Alert delivery reliability:** Email alerts fire within 15 minutes of scheduled time for ≥99% of triggers.
2. **Mobile performance:** Dashboard renders completely within 3 seconds on a 375px viewport over a 4G connection.
3. **Data integrity:** Zero data loss events across any permit record, inspection log, or document attachment.
4. **Document storage:** File attachments upload and retrieve successfully on mobile (camera capture → attach → save → retrieve) for files up to 25MB.
5. **Uptime:** Application available ≥99.5% of the time during business hours (6 AM – 10 PM local for the account).

### Measurable Outcomes

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Time to first permit entered after signup | <10 minutes | Onboarding funnel event log |
| Permit records per active paid account | ≥5 by end of month 1 | Product database |
| Alert-to-action rate | >80% of fired alerts result in a logged status update within 7 days | Audit trail completion rate |
| Dashboard check frequency | ≥3 sessions/week per active paid user | Session frequency analytics |
| Alert fire rate (% of paid accounts that have received ≥1 expiration alert) | >70% by month 3 | Product event log |
| Trial-to-paid conversion | 25–35% | Subscription conversion funnel |
| Monthly churn | <5% | Subscription cancellation rate |
| AppSumo LTD redemption rate | >50% of purchases become active users within 30 days | Account activation events |

---

## Product Scope

### MVP — Minimum Viable Product

**What is essential for the product to be useful enough to pay for:**

The MVP must deliver on the four-question promise. A GC must be able to open the app on their phone, see the status of all their active jobs at a glance (RAG dashboard), drill into any job to see its permits and upcoming inspections, and trust that they will receive an email alert before anything expires. Without these four capabilities working reliably, the product has no value.

**MVP capabilities:**
- Job dashboard with RAG permit status across all active jobs
- Per-job permit records (number, type, dates, responsible person, status)
- Inspection log per permit (type, date, result, notes)
- Automated email alerts at 30/15/7 days before permit expiration
- Document attachment (PDF/image) for permits and inspections
- Team roster and responsible-person assignment
- Self-serve signup with 14-day free trial, no credit card required

**Explicitly out of scope for MVP** (see Phase 2 below): Google Calendar sync, SMS alerts, subcontractor portal, CSV import, native apps, government portal integrations, lien waivers, offline mode, granular RBAC.

### Growth Features — Phase 2 (Months 3–6)

Features that make PermitDesk more competitive after AppSumo launch has funded development:

- **Google Calendar sync:** Two-way sync of inspection dates to Google Calendar (OAuth). Keeps inspection dates in the GC's existing workflow without requiring app-open behavior. Pro tier feature ($29/month).
- **SMS alerts via Twilio:** Text message alerts for permit expiration (Pro tier only). Requires Twilio carrier compliance setup.
- **CSV import:** Bulk upload of existing permits from Google Sheets. Removes onboarding friction for GCs with 20+ active permits.
- **Multi-user permissions:** Owner vs. view-only roles. Field supervisors get read-only mobile access to check "is there an active permit for this site?"
- **Daily digest email:** Single morning email listing all upcoming expirations and scheduled inspections across all jobs.

### Vision — Phase 3 (Months 6–12)

Features that expand PermitDesk into a compliance coordination layer:

- **Subcontractor portal:** Invite MEP subs (electrical, plumbing, mechanical) to log their own trade permits within the GC's account, eliminating the coordination overhead. Opens $49/month Team tier.
- **Lien waiver generator:** Standard conditional/unconditional lien waiver templates per state; e-signature integration. Natural upsell for GCs who already trust PermitDesk with permit documents.
- **QuickBooks/Jobber sync:** Sync job records inbound from accounting/field service tools. Eliminates double-entry for GCs who manage jobs in another tool.
- **Progressive Web App (PWA):** Offline permit record viewing for field workers in areas with poor signal.
- **Native iOS/Android apps:** Year 2 initiative if mobile usage data supports investment.

---

## User Journeys

### Journey 1: Mike, the Solo Owner-Operator (Core Value Path)

**Opening scene:** It's Monday, 6:30 AM. Mike is at the kitchen table with coffee before his first site visit. He pulls out his Samsung Galaxy and opens PermitDesk. The dashboard shows 18 active jobs. Three are yellow. One is red.

He taps the red job — the Oak Street bathroom addition. The permit record opens: **Permit #BLD-2026-0391 | Expires July 14 | 6 days remaining | Responsible: Mike.** Below it, the inspection history shows a passed rough-in in April, but no final inspection scheduled. Mike didn't realize the permit was this close to expiration — he thought it had more time.

**Rising action:** He taps "Renew permit" in the notes field, adding "Called permit office 7:02 AM — renewal takes 3–5 business days, need to file by Wednesday." He reassigns the permit to himself with a due-date note. The permit status changes to yellow (renewed, waiting). The app pushes an updated reminder for 2 days out.

**Climax:** He taps the three yellow jobs. Two are inspections scheduled this week — both are fine, they're in calendar. The third is a permit expiring in 22 days on the Harbor Square project. He pulls up the permit, sees it's a plumbing permit where his sub pulled the permit. He calls the sub before leaving the driveway.

**Resolution:** By 7:00 AM, Mike has checked every permit across 18 jobs, taken action on two, and left for his first site visit. He didn't call the permit office once. He didn't open a spreadsheet. No permits will expire this week that he doesn't know about.

**Journey reveals requirements for:** RAG dashboard, per-permit record view, inspection log, alert delivery, responsible-person assignment, notes field.

---

### Journey 2: Diane, the Office Manager (High-Volume Coordination)

**Opening scene:** Diane manages permits for a 22-person GC in Atlanta. She gets into the office Monday morning and finds three emails from PermitDesk — all expiration alerts. She opens the dashboard on her laptop: 47 jobs, 6 yellow, 2 red.

**Rising action:** She sorts by status (red first). Both red jobs have permits expiring within 5 days. She opens each one — both have clear responsible-person assignments. She emails both PMs directly from the permit detail page, using the contact information stored in the team roster. She adds a note to each permit: "Renewal initiated [date]."

She then reviews the 6 yellow jobs and queues them into her weekly follow-up calendar. For one, she notices the inspection was scheduled but marked "result pending" — she calls the inspector's office to get the official result and updates the record.

**Climax:** The owner walks in at 9 AM and asks, "What's happening with the Harbor Square permits?" Diane opens the job in PermitDesk, pulls up the permit tab: three active permits, all green, next expiration in 68 days, final inspection scheduled for next Tuesday. She answers in 15 seconds.

**Resolution:** Diane has triaged all expiring permits before 9 AM without opening a spreadsheet, without manually calculating days-to-expiration, and without relying on anyone else to remember their deadlines. When a problem surfaces, she can answer immediately.

**Journey reveals requirements for:** Sorted/filtered dashboard, team contact details in roster, notes on permit records, inspection result logging, quick per-job permit summary.

---

### Journey 3: Mike, Permit Nearing Expiration on a Paused Job (Edge Case: Dormant Project Alert)

**Opening scene:** A homeowner dispute paused the Elm Street project 4 months ago. The permit is still active but Mike hasn't thought about it in months. PermitDesk fires an alert: "Permit #BLD-2026-0441 for Elm Street expires in 30 days."

**Rising action:** Mike didn't realize the permit was this close. He opens the alert email, taps through to the permit record. The permit was issued 5 months ago for a 6-month window. He needs to either renew it or accept that the work will need a new permit when the dispute resolves.

**Climax:** He calls his attorney. The dispute resolution is 2 months away — he needs to renew the permit now to avoid losing it. He updates the permit status to "renewal pending" and sets a note: "Disputed job — renew per attorney advice 2026-11-07."

**Resolution:** The permit doesn't expire. When the job restarts 2 months later, the permit is still valid. PermitDesk prevented a $3,500 re-permitting cost and a 6-week project restart delay.

**Journey reveals requirements for:** Automated 30-day alert for jobs regardless of activity level, permit status update (renewal pending), notes with timestamps, alert for jobs that have been dormant.

---

### Journey 4: New User Onboarding (Adoption Path)

**Opening scene:** Marcus runs a 10-person GC in suburban Denver. He sees a reply on r/GeneralContractor to a "how do you track permits?" thread — someone mentions PermitDesk with a "saved me from a $4K renewal penalty" comment. He signs up at midnight from his phone.

**Rising action:** The signup flow asks for company name, then immediately prompts: "Add your first job and permit." Marcus enters the Maple Street job, adds the building permit with the number from a photo he took of the permit placard, sets the expiration date, and assigns himself. 8 minutes in, he has his first permit entered.

The app says: "Alert set — you'll be notified 30, 15, and 7 days before this permit expires." Marcus feels a small but real sense of relief. He adds 4 more jobs before closing the app.

**Climax:** 10 days later, he gets his first PermitDesk alert — a permit he entered is expiring in 29 days. He had forgotten about it completely. He calls the permit office, starts the renewal. When the confirmation comes back, he updates the permit status to "renewed" and sets a new expiration date.

**Resolution:** Marcus converts to paid after his 14-day trial ends. He tells his project manager about the app. The PM adds 12 more permits the following week.

**Journey reveals requirements for:** Frictionless signup (no credit card at trial), guided onboarding prompt to add first job/permit, clean permit form with photo-of-placard use case in mind (easy to enter from photo), alert confirmation on save, trial-to-paid conversion flow.

---

### Journey Requirements Summary

| Journey | Capabilities Required |
|---------|----------------------|
| Mike — Core Value | RAG dashboard, permit record CRUD, inspection log, expiration alerts, notes, responsible-person assignment |
| Diane — Office Coordination | Filtered/sorted dashboard, team roster with contact details, bulk review workflow, quick per-job summary |
| Mike — Dormant Job Alert | Automated 30-day alert regardless of job activity, permit status updates, timestamp-logged notes |
| Marcus — Onboarding | Guided signup, first-permit prompt, alert confirmation, trial management, easy permit entry from phone |

---

## Domain-Specific Requirements

Construction tech (field service, B2B SaaS) has medium domain complexity. No HIPAA, PCI-DSS, or government-specific compliance applies, but several domain-specific constraints shape the product.

### Jurisdiction Fragmentation

Permit workflows vary significantly across municipalities — permit types, inspection sequences, renewal processes, and expiration windows differ. PermitDesk handles this by being **jurisdiction-agnostic**: no automation that requires jurisdiction-specific knowledge. All permit data is contractor-entered; the app tracks what the contractor already knows. Free-text permit type field accommodates non-standard permit types.

**Constraint:** Any feature that requires jurisdiction-specific logic (automated renewal workflows, permit status polling from government portals) is out of scope for V1 and V2.

### Mobile-First Field Usage

GCs access PermitDesk primarily from phones on job sites — outdoor use, bright sunlight, one hand, work gloves possible. UI requirements that differ from standard SaaS:

- Minimum touch target: 44×44px per WCAG mobile guidelines
- Text must be readable at high contrast (avoid light gray on white)
- Primary actions (view job, add permit, check inspection) accessible within 2 taps from home screen
- No horizontal scrolling on any primary view
- Camera attachment (not just file picker) on mobile

### Business Data Sensitivity

Permit records contain contractor license numbers, job addresses, permit numbers, and inspection results. This is business-confidential data (not regulated PII), but:

- Accounts must be isolated (no cross-tenant data leakage)
- Document attachments (permit PDFs) may contain license numbers and property records; storage must be access-controlled (pre-signed URLs, not public S3 buckets)
- Account deletion must wipe all associated permits, inspections, and documents

### Permit Expiration Logic

Permit expiration dates are entered manually by contractors. The alert system must:

- Handle backdated expiration dates without breaking (edge case: GC enters a permit that already expired)
- Recalculate alert schedule immediately when expiration date is edited
- Not fire duplicate alerts if the user updates the permit record between alert intervals

### Construction Industry Vocabulary

The UI must use contractor vocabulary, not generic SaaS vocabulary:

- "Job" not "Project" (contractors say "job")
- "Permit number" not "ID"
- "Inspection" not "Review"
- "Pull a permit" not "Issue a permit"
- Status labels: Active, Expired, Renewed, Closed (not "Open, Resolved, Archived")

---

## Innovation Analysis

### Detected Innovation Areas

PermitDesk's innovation is primarily in **UX positioning and pricing strategy** rather than technical novelty. The product category exists (permit tracking software), but the market segment is unserved: no national product at $19–29/month exists. Two genuine innovation patterns are present:

**1. Near-Miss Celebration UX**
When an expiration alert fires, PermitDesk doesn't just notify — it quantifies the near-miss: "Alert saved you: Permit #BLD-2026-0441 for Oak Street expires in 7 days. Average penalty for expired permits in this category: $1,200–$3,500." This turns a passive alert into an active ROI demonstration. No existing tool in the construction space celebrates prevented disasters — they all focus on what's happening, not what was avoided. This creates the viral story: "The app saved me $4K last month."

**2. Jurisdiction-Agnostic National Coverage**
ClearedNo (closest competitor at $79/month) is Texas-only because it attempts jurisdiction-specific automation. PermitDesk's deliberate choice to be jurisdiction-agnostic enables national V1 coverage with no integration complexity. The constraint becomes a competitive advantage: it works everywhere, immediately, because it tracks contractor knowledge rather than government databases.

### Validation Approach

- Near-miss celebration UX validates via NPS: a user who has received a "saved you" moment should score 9–10 vs. a user who hasn't yet.
- Measure "saved amount" notifications shown per month as a leading indicator of retention.
- A/B test: near-miss quantification vs. plain expiration reminder on click-through and renewal action rate.

### Risk Mitigation

- Near-miss quantification requires defensible penalty estimates by permit type. Use industry data (construction permit fine schedules are publicly available) for the estimate range, not exact figures. Display as a range, not a precise number.
- If quantification feels gimmicky in beta feedback, simplify to "Alert: permit expires in 7 days" — the alert itself is the value, the savings figure is enhancement.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each GC company creates one account. All data (jobs, permits, inspections, documents, team members) is scoped to that account. No cross-account visibility. No white-labeling or agency model in V1.

**Tenant isolation:** All database queries must include account_id filter. Document storage uses per-account S3 prefixes. No shared resources between tenants except application code.

### Permission Model (MVP)

MVP uses a flat permission model: all users on an account see everything. The account owner (first user to sign up) has billing and team management access; all others are standard members with full data access.

**Phase 2 expansion:** Owner / Standard / View-Only roles. View-Only for field supervisors who need read-only permit status.

### Subscription Tiers

| Tier | Price | Active Permit Limit | Email Alerts | SMS Alerts | Calendar Sync |
|------|-------|---------------------|--------------|------------|---------------|
| Trial | Free (14 days) | 10 | Yes | No | No |
| Starter | $19/month | 10 | Yes | No | No |
| Pro | $29/month | Unlimited | Yes | Yes (Phase 2) | Yes (Phase 2) |
| LTD | $59 one-time | 10 (Starter features, lifetime) | Yes | No | No |

Starter limit enforced at permit creation — user is prompted to upgrade when attempting to create permit #11 on the account.

### Authentication

Email + password authentication for MVP. OAuth (Google Sign-In) as Phase 2 convenience feature. Password reset via email link. No SSO/SAML in V1 (not needed for SMB segment).

Sessions persist for 30 days with rolling refresh. No forced re-auth on mobile to avoid friction for field workers checking status.

### Integration Architecture (Phase 2 readiness)

MVP has no external integrations. Phase 2 integration architecture:

- **Google Calendar:** OAuth 2.0 flow; write inspection dates to GC's calendar as events. Webhook for calendar event updates (rescheduled inspections). Stored per-user OAuth token, not per-account.
- **Twilio:** Send SMS alerts from a shared short code. Opt-in required at the per-permit level.
- **Email delivery:** Resend (primary) with SendGrid as fallback. SPF/DKIM configured for deliverability.

### Billing & Subscription Management

Stripe for subscription management. Webhooks for subscription lifecycle events (created, updated, canceled, payment failed). Payment failure triggers 7-day grace period with daily email reminders before account downgrade to view-only. LTD codes managed via Stripe one-time payment product + feature flag.

---

## Project Scoping & Phased Development

### MVP Strategy

**MVP Philosophy:** Problem-solving MVP. The goal is to validate that contractors will pay for a tool that sends reliable expiration alerts and displays permit status at a glance — not to build a comprehensive PM platform. Every feature decision should answer: "Does this help a contractor know what permits need attention today?"

**MVP team:** 1 full-stack developer (or 2 developers part-time) for 1–2 weeks. No dedicated designer — mobile-responsive Tailwind UI with RAG color system is sufficient for beta.

**Timeline:** MVP live in 2 weeks → 2 weeks of beta testing with 10–20 users → AppSumo application in week 5.

### MVP Feature Set

**Core user journeys supported:**
1. Mike (owner-operator) morning check — full support
2. Diane (office manager) weekly triage — full support (read/write access, team notes)
3. New user onboarding — full support (guided first-permit flow)
4. Dormant job alert — full support (automated alerts independent of activity)

**Must-Have Capabilities (MVP):**
- Job record CRUD (name, address, notes, status: active/archived)
- Permit record CRUD per job (number, type, dates, responsible person, status, notes)
- Inspection log per permit (type, date, result: pass/fail/correction, notes)
- Automated email alerts at 30/15/7 days before permit expiration (Resend)
- Document attachment on permits and inspections (S3, up to 25MB/file, 100MB/account)
- Team roster (name, email, phone) + responsible-person assignment per permit
- RAG dashboard (all jobs, color-coded by urgency)
- Self-serve signup, 14-day free trial, Stripe-based subscription upgrade
- Starter vs. Pro tier enforcement (10 permit limit on Starter)

### Post-MVP Features

**Phase 2 (Months 3–6): Pro Tier Completion**
- Google Calendar OAuth sync for inspection dates
- SMS alerts via Twilio (Pro only)
- CSV permit import from spreadsheet
- View-only user role for field supervisors
- Daily digest email option (single morning summary vs. per-permit alerts)
- Mobile PWA with offline permit viewing

**Phase 3 (Months 6–12): Team Expansion Tier ($49/month)**
- Subcontractor sub-portal (invite MEP subs to manage their own trade permits)
- Lien waiver generator (state templates + e-sign)
- QuickBooks/Jobber job record sync

### Risk Mitigation Strategy

**Technical risks:**
- Alert delivery reliability is the core product promise. Mitigate by using Resend (high deliverability) with SendGrid fallback, delivery confirmation logging, and a manual "resend alert" option for users. Test email delivery in staging with real inboxes (Gmail, Outlook, mobile).
- S3 document storage with pre-signed URLs adds authentication complexity. Use a proven pattern (time-limited URLs, 1-hour expiry) from day one to avoid retrofitting security.

**Market risks:**
- AppSumo may reject the listing if reviews are thin. Mitigate by getting 15+ beta user reviews and at least 1 quantified case study before applying. Backup: Deals.com / SaaSMantra as alternative LTD platforms.
- ClearedNo or a Procore subsidiary may launch national SMB product. Speed moat: AppSumo install base + community presence creates distribution that's hard to replicate.

**Resource risks:**
- If build takes longer than 3 weeks, reduce MVP to: dashboard + permit records + email alerts only (drop inspection log and document attachments to Week 2 release). Core value (alerts + dashboard) is deliverable in <1 week.

---

## Functional Requirements

### Job Management

- **FR1:** Users can create a job record with job name, street address, city/state, and optional notes
- **FR2:** Users can edit any field of an existing job record
- **FR3:** Users can archive a job, removing it from the active dashboard while preserving all permit, inspection, and document records
- **FR4:** Users can restore an archived job to active status
- **FR5:** Users can view all archived jobs in a separate list

### Permit Record Management

- **FR6:** Users can create one or more permit records within a job, specifying permit number, permit type, issue date, expiration date, responsible team member, and status
- **FR7:** Users can select from 6 predefined permit types (building, electrical, plumbing, mechanical, fire/life-safety, other) or enter a custom permit type as free text
- **FR8:** Users can set permit status to one of four values: active, expired, renewed, closed
- **FR9:** Users can add timestamped notes to any permit record
- **FR10:** Users can edit any field of an existing permit record, including the expiration date
- **FR11:** The system recalculates the expiration alert schedule within 5 minutes of an expiration date change

### Inspection Management

- **FR12:** Users can log an inspection event against a permit, specifying inspection type, scheduled date, inspector name (optional), and result
- **FR13:** Users can record an inspection result as one of three values: passed, failed, correction required
- **FR14:** Users can add notes to an inspection record documenting correction details or inspector feedback
- **FR15:** Users can view all inspection history for a permit in reverse-chronological order
- **FR16:** Users can edit scheduled date or result of an inspection record after it is created

### Expiration Alert System

- **FR17:** The system sends an email alert to the permit's assigned responsible person at exactly 30 days, 15 days, and 7 days before the permit's expiration date
- **FR18:** Each alert email includes permit number, job name, job address, expiration date, days remaining, and a direct link to the permit record
- **FR19:** Users can configure per-account alert delivery as individual permit alerts (default) or a daily 7:00 AM digest summarizing all permits with alerts due that day
- **FR20:** Users can view a log of all alerts sent for their account, showing recipient, permit, send time, and delivery status
- **FR21:** The system does not send duplicate alerts for a permit that has already received an alert at a given threshold (30/15/7 day) within the same 24-hour window

### Document Management

- **FR22:** Users can attach one or more PDF or image files (JPG, PNG, HEIC) to any permit record or inspection record
- **FR23:** Users can capture and attach a photo directly from the mobile device camera without leaving the app
- **FR24:** Users can view, download, or delete attached documents from any permit or inspection record
- **FR25:** The system rejects file attachments exceeding 25MB per file and displays an error message specifying the file size limit
- **FR26:** The system tracks total document storage per account and displays current usage on the account settings page

### Team & Responsibility Management

- **FR27:** Account owners can add team members to the account roster with name, email address, and phone number
- **FR28:** Account owners can remove team members from the account roster; permits assigned to removed team members retain their assignment but display a "user removed" indicator
- **FR29:** Users can assign any active team member as the responsible person for any permit record
- **FR30:** Users can reassign permit responsibility from one team member to another at any time
- **FR31:** All team members on an account have read and write access to all jobs, permits, inspections, and documents on that account

### Dashboard & Status Overview

- **FR32:** Users can view all active jobs on a single dashboard page, each displaying job name, address, number of active permits, and RAG status indicator
- **FR33:** The system calculates RED status for a job when any associated permit expires within 7 days OR has a failed inspection with no subsequent passed inspection or scheduled re-inspection
- **FR34:** The system calculates YELLOW status for a job when any associated permit expires within 8–30 days OR has an inspection scheduled within the next 7 days
- **FR35:** The system calculates GREEN status for a job when all associated permits have >30 days until expiration and no pending inspection actions
- **FR36:** Users can filter the dashboard to show only RED, only YELLOW, only GREEN, or all jobs
- **FR37:** Users can search across all jobs and permit records by keyword matching job name, address, or permit number, returning results within 2 seconds for accounts with up to 500 jobs

### Account & Subscription Management

- **FR38:** New users can register with email and password and receive a 14-day free trial without entering payment information
- **FR39:** Account owners can enter payment information and upgrade to Starter ($19/month) or Pro ($29/month) tiers at any time during or after the trial
- **FR40:** The system enforces the 10-active-permit limit on Starter and Trial accounts by blocking permit creation at the limit and displaying an upgrade prompt
- **FR41:** Account owners can view current plan tier, billing cycle, next billing date, and payment method on the account settings page
- **FR42:** Account owners can cancel their subscription from account settings; cancellation takes effect at the end of the current billing period with no immediate data deletion
- **FR43:** Account owners can invite additional users to their account via email invitation; invited users join the existing account (not create a new one)

---

## Non-Functional Requirements

### Performance

- **NFR1:** The job dashboard renders completely within 3 seconds for accounts with up to 200 active jobs on a 4G mobile connection (10 Mbps), measured at the 95th percentile.
- **NFR2:** Permit record pages load within 2 seconds including the display of attached document thumbnails, measured at the 95th percentile under normal load.
- **NFR3:** Keyword search (FR37) returns results within 2 seconds for accounts with up to 500 jobs and 2,000 permits, measured at the 95th percentile.
- **NFR4:** File upload for documents ≤10MB completes within 15 seconds on a 4G connection; upload progress is displayed in real time.

### Security

- **NFR5:** All data in transit is encrypted using TLS 1.2 or higher. Plain HTTP requests are redirected to HTTPS.
- **NFR6:** All data at rest in the database (permits, contacts, notes) is encrypted using AES-256.
- **NFR7:** Document attachments are stored in private S3 buckets; file access is granted only via pre-signed URLs with a 1-hour expiration time. No document is ever accessible via a public URL.
- **NFR8:** Passwords are hashed using bcrypt with a minimum cost factor of 12. Plaintext passwords are never stored or logged.
- **NFR9:** Each database query includes a mandatory account_id tenant filter enforced at the data access layer, preventing cross-account data access regardless of application-layer bugs.
- **NFR10:** Failed login attempts trigger account lockout after 10 consecutive failures within 15 minutes, with lockout lasting 30 minutes.

### Reliability

- **NFR11:** The application maintains ≥99.5% uptime during business hours (6 AM – 10 PM local time, Monday–Saturday) as measured by external uptime monitoring.
- **NFR12:** Expiration alert emails are delivered within 15 minutes of the scheduled alert time for ≥99% of triggers, measured against Resend delivery confirmation events.
- **NFR13:** Document attachments are stored with 99.999% durability (AWS S3 standard), with no single point of failure for retrieval.

### Scalability

- **NFR14:** The application supports up to 1,000 concurrent authenticated sessions without degradation in dashboard load time beyond 10% of baseline (3-second target).
- **NFR15:** The alert scheduling system processes up to 10,000 pending alert checks per hour without backlog accumulation, using a queue-based architecture.

### Accessibility

- **NFR16:** All interactive elements on primary user flows (dashboard, permit record, inspection log) meet WCAG 2.1 Level AA contrast requirements (minimum 4.5:1 for normal text).
- **NFR17:** All primary user flows are operable using touch targets of minimum 44×44px on mobile viewports, with no interactive element smaller than this on screens ≤768px wide.
- **NFR18:** The application is fully functional on viewports as narrow as 375px (iPhone SE) with no horizontal scrolling on any primary view.

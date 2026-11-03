---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/contractor-permit-tracker.md
  - _bmad-output/planning-artifacts/research/market-contractor-permit-tracker-research-2026-11-02.md
  - _bmad-output/planning-artifacts/brief-contractor-permit-tracker.md
workflowType: prd
project_name: contractor-permit-tracker
user_name: Root
date: 2026-11-03
author: Root
classification:
  projectType: saas_b2b
  domain: construction_field_service
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — PermitBox

**Author:** Root
**Date:** 2026-11-03
**Product:** PermitBox — Contractor Permit Tracker
**Status:** Complete

---

## Executive Summary

PermitBox is a dead-simple permit status tracker for solo contractors and small GC firms (1–10 employees) — the only purpose-built tool in its price category. Every competitor that solves the permit problem starts at $249/month or higher; PermitBox sits at $19–29/month, targeting the 607,000 US construction firms with fewer than 10 employees who currently track permits through spreadsheets and manual portal-checking.

The core problem: solo contractors miss 3.4 inspection windows per year on average. Each miss costs $340+ in re-inspection fees plus $5,000–$15,000 in project delays. No spreadsheet sends an alert. Nothing automatically flags an approaching expiration. This failure mode is quantified, predictable, and entirely preventable with a simple CRUD app and email notifications.

The value proposition is one focused thing done well: a dashboard showing every active permit ranked by urgency, with automated email alerts before inspections and before permits expire. A contractor can add their first permit in under 5 minutes. The product delivers value the first time an alert fires before an inspection the contractor would have forgotten.

**Commercial context:** PermitFlow raised $91M and explicitly targets commercial builders. Procore requires $10,000/year minimums. Jobber — the most affordable field service tool at $49–199/month — has zero permit tracking features. The $19/month niche is structurally unclaimed, confirmed by an April 2026 Indie Hackers featured post explicitly naming this gap. First-mover in this category creates durable competitive position through brand recognition, SEO ownership, and community-channel presence.

**Key facts:**
- Target: Solo contractors and GC firms with 1–10 employees
- Pricing: $19/mo (solo), $29/mo (team, up to 5 users), $99 LTD
- Build complexity: 1–2 week MVP (CRUD + email alerts)
- Path to $10K MRR: 500 customers at $19/month = 0.08% of serviceable market

### What Makes This Special

PermitBox wins by doing one thing right at a price point the market has never addressed. The differentiator is not a feature list — it is disciplined focus: this product manages permit tracking and nothing else, optimized for a contractor who will not sit through a demo and will not pay for features they do not use.

Three elements create the competitive moat:

1. **Inspection alerts as the core product** — The entire UI is organized around the question "what inspections are due and what permits are expiring?" Every design decision optimizes for this workflow. No competitor below $249/month has made permit tracking the primary product.

2. **5-minute setup, zero training** — The product must work during a contractor's lunch break. If it requires an onboarding session, it fails for this market. This is a design constraint, not a feature.

3. **First-mover keyword ownership** — "Contractor permit tracking software" has zero current SEO competition. Being first to rank, first on AppSumo, and first to accumulate G2/Capterra reviews in this category creates self-reinforcing brand recognition.

The secondary differentiator — client-facing permit status sharing — eliminates the "where is my permit?" homeowner call (estimated 3× per project) and creates a subtle viral loop: homeowners see a professional interface and associate the contractor with competence.

## Project Classification

- **Project Type:** SaaS B2B (solo and micro-business tooling for construction trades)
- **Domain:** Construction / Field Service Management
- **Complexity:** Medium — Domain involves permit lifecycle workflows, multi-jurisdiction awareness, and email notification reliability; no regulated data (no HIPAA, PCI, or similar compliance obligations for the product itself)
- **Project Context:** Greenfield — No existing codebase; building from scratch
- **Monetization:** Subscription ($19–29/month) + Lifetime Deal ($99 LTD via AppSumo)

---

## Success Criteria

### User Success

The product succeeds when contractors use it to prevent real problems, not just as a data entry system.

**Primary success signal:** A user voluntarily reports that PermitBox prevented a missed inspection or caught a permit expiration they had not tracked. This is the "aha moment" — the event that drives retention and referrals. Target: 10+ such reports within 90 days of launch.

**Behavioral proxies for user success:**
- User adds their first permit within 10 minutes of account creation (frictionless onboarding)
- 80%+ of permit records have at least one inspection or expiration alert configured (users are set up to receive value)
- Email alert click-through rate exceeds 60% (alerts are acted on, not ignored)
- Users remain active through a full permit lifecycle: application → inspection → final approval (not churning before value is delivered)
- Support tickets per customer per month fall below 0.5 at Month 3 and below 0.2 at Month 12 (product is intuitive)

**User success by segment:**
- Solo contractor (Tyler): Alert fires before an inspection that would have been missed; contractor shows up prepared, avoids $340 re-inspection fee
- Small GC (Maria/Ana): Dashboard catches a permit approaching expiration that nobody had noticed in Buildertrend; crisis averted before project timeline impact

### Business Success

**12-month revenue milestones:**

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| First paying customer | 1 | Week 4 |
| AppSumo LTD launch | 200 units sold | Month 2 |
| Break-even MRR | $500 MRR | Month 3 |
| Seed traction | 50 paying monthly subscribers | Month 3 |
| Growth traction | 200 paying customers (any mix) | Month 6 |
| Review milestone | 50+ G2/Capterra reviews ≥4.5 stars | Month 6 |
| Revenue milestone | $10K MRR | Month 12 |

**Strategic objective:** Establish PermitBox as the category-defining brand for solo contractor permit tracking before any competitor enters. First-mover advantage in community channels (Reddit, Facebook groups, AppSumo) is the durable moat — replicated only through time and volume, not funding.

**Go/no-go for V2 investment:** If MRR reaches $3,000 by Month 6 and monthly churn is below 5%, proceed with jurisdiction status sync development for top 5 US cities.

### Technical Success

- Alert delivery rate: >98% of scheduled alerts delivered (Resend/SendGrid reliability)
- Alert delivery latency: <5 minutes from scheduled trigger time
- Uptime: >99.5% (simple CRUD app — this is achievable on managed hosting)
- Monthly infrastructure cost at 2,000 active users: <$200 (Postgres + email + hosting)
- Mobile responsiveness: All core workflows functional on 375px viewport (contractors check from phone on job site)
- Page load time: Dashboard loads in <2 seconds on a standard mobile connection

### Measurable Outcomes

| Metric | Month 3 Target | Month 6 Target | Month 12 Target |
|--------|---------------|---------------|-----------------|
| Paying customers | 50 | 200 | 500 |
| Monthly churn rate | <6% | <4% | <3% |
| Time to first permit (minutes) | <10 | <10 | <8 |
| Permits with alerts configured | >80% | >85% | >90% |
| Alert click-through rate | >60% | >65% | >70% |
| G2/Capterra reviews | 20 | 50 | 150 |
| Net Revenue Retention | >95% | >100% | >105% |
| Monthly infra cost (per 1K users) | <$100 | <$100 | <$80 |

## Product Scope

### MVP — Minimum Viable Product

The MVP solves exactly one problem: contractors miss inspections and permit expirations because spreadsheets do not send alerts.

**Must-have capabilities for MVP:**
1. Permit record management (add, edit, update status, archive)
2. Inspection scheduling linked to permits (date, type, pass/fail recording)
3. Automated email alerts (expiration warnings at 30/14/7 days; inspection reminders 24h ahead; status change notifications)
4. Urgency dashboard (all active permits ranked by soonest deadline, color-coded status)
5. Document attachment (PDFs per permit — permit docs, inspection results, plan sets)
6. Client-facing status sharing (shareable read-only public URL per project)
7. Multi-project view with basic filtering
8. User authentication and team accounts (up to 5 users on team plan)

**MVP is complete when:**
- A contractor can add their first permit in under 5 minutes from account creation
- Email alerts fire reliably before inspections and expirations
- The dashboard gives an accurate urgency-ranked view of all active work
- A homeowner can be sent a link showing their project's permit status

### Growth Features (Post-MVP)

Features that increase value and competitive differentiation — not needed to prove the core concept:

- **SMS/text alerts** — In addition to email; adds compliance complexity (TCPA); defer until email alert adoption is validated
- **Bulk CSV import** — For contractors migrating spreadsheets with 50+ permits; reduces onboarding friction at scale
- **Weekly digest email** — Every Monday: all active permits, inspections this week, permits expiring in 30 days; one email
- **Jobber integration** — Read-only permit status visible from Jobber project view; requires API partnership work
- **Subcontractor permit tracking** — GC can see permits pulled by subs on their projects; requires additional data model and access control
- **Buildertrend webhook integration** — Status sync between PermitBox and Buildertrend; reduces dual-entry friction for Maria segment
- **Referral program with tracking links** — Monetize the word-of-mouth loop that will emerge organically
- **Mobile push notifications** — Browser push or PWA notifications for inspections; supplementary to email

### Vision (Future)

The long-term expansion if PermitBox reaches 2,000+ customers:

- **Jurisdiction status sync** — Automatically check permit portals for status changes; technically complex (3,000+ municipal portals, no universal API); feasible for top 20 jurisdictions covering ~35% of US residential permits; the V2 bet
- **Trade license renewal tracking** — Same admin workflow as permits; same buyer; natural expansion of the compliance-tracking category
- **Subcontractor COI tracking** — Certificate of insurance management for GC firms; adjacent compliance workflow
- **Insurance export** — Exportable permit history for underwriters; opens a new buyer category
- **Compliance hub positioning** — Evolution from "permit tracker" to "compliance dashboard for small contractors" — a category with no incumbent at accessible pricing

---

## User Journeys

### Journey 1: Tyler — The Solo Electrician (Primary User, Success Path)

Tyler is a 42-year-old licensed electrician who runs a one-person shop with a part-time office admin (his wife). He pulls 15–25 permits per month across 3 municipal jurisdictions. His current system is a Google Sheet that gets updated "when she remembers to" and a folder of PDF permits in Dropbox.

**Opening scene:** It's a Tuesday evening in October. Tyler just got off the phone with a homeowner who is furious because the city inspector showed up today and Tyler wasn't there — he had the wrong date in his calendar. The re-inspection fee is $340. The homeowner wants to know why this keeps happening. Tyler is sitting at his kitchen table, frustrated, googling "permit tracking app for contractors."

**Discovery:** He finds PermitBox ranking second for "contractor permit tracking software." The tagline — "Never miss an inspection again. $19/month." — stops him. He clicks. He sees the pricing page immediately: $19/month, no sales call. He clicks "Start Free Trial."

**Onboarding:** Tyler creates an account with his email. He's on the dashboard. There's one button: "Add Your First Permit." He clicks it. The form asks for: project name (optional), jurisdiction (dropdown), permit number, permit type (dropdown), application date, expiration date. He fills it in for the project he just missed today — takes 90 seconds. He adds tomorrow's inspection: date, time, type (rough-in electrical). The dashboard immediately shows a red badge: "Inspection tomorrow — 8:00 AM." He adds two more permits from his current active jobs. The dashboard now shows three permits ranked by urgency.

**Aha moment:** The next morning, at 6:47 AM, Tyler gets an email: "Reminder: Rough-in electrical inspection tomorrow at 8:00 AM — 123 Oak Street." He didn't have this in his phone calendar. He would have been late without this alert.

**Routine adoption:** Tyler checks the PermitBox dashboard from his phone on the drive to each job (his wife drives, he reads). He adds new permits the same day they're filed. His wife adds inspection dates when the city calls to schedule. Neither of them needs to check the portal websites anymore — the dashboard tells them what's coming.

**Value delivery:** One month after signing up, Tyler gets a 30-day expiration warning for a permit on a job that got delayed. He calls the city to request an extension before it lapses. This would have been a forced re-application six weeks ago.

**Advocacy:** Tyler posts in his local contractor Facebook group: "Been using this thing called PermitBox for about a month. It sends me reminders before inspections. $19/month, no BS. Anyone else using it?" Three people reply asking for the link.

---

### Journey 2: Tyler — Edge Case (Active Permit, No Inspection Scheduled)

Tyler has a permit for a job that's been delayed — the homeowner pushed back the start date by six weeks. The permit is active, no inspections have been scheduled, and Tyler hasn't thought about it.

**Problem:** 45 days from now, the permit expires. Tyler won't remember to check.

**How PermitBox handles it:** Tyler added the permit and expiration date when he applied. He didn't add any inspections. At day 30, the system sends a 30-day expiration warning email: "Permit expiring in 30 days — 456 Maple Lane (Kitchen Renovation). Permit No. 2026-K-1847. Expiration: November 15."

Tyler sees the email and realizes: he never requested the extension. He calls the city. "Oh yeah, we can extend it, you just have to submit the form." Done. The permit was saved by an alert he had set up and forgotten about.

**Failure path (avoided):** Without PermitBox, Tyler would have discovered the expired permit when the inspector arrived on the delayed project start date and found an expired permit. Result: new permit application ($250), 3-week processing delay, homeowner demand for a credit.

---

### Journey 3: Ana & Maria — The Small GC Office Manager and Owner (Team User, Growth Path)

Maria runs a 5-person GC shop. Ana is the office manager. They use Buildertrend for scheduling and project management, but permit tracking is "a tab in a shared Google Sheet that someone updates when they remember." Eighteen months ago, a permit suspension caused a 3-week delay on a $280K kitchen renovation. Maria still mentions this incident.

**Discovery:** Ana finds PermitBox after googling for "permit tracking for Buildertrend." She forwards the link to Maria: "This is exactly what we need." Maria checks the pricing: $29/month for up to 5 users. She compares it to what she pays for Buildertrend ($499/month). She approves it immediately.

**Onboarding:** Ana sets up the account. She migrates the existing Google Sheet data — 12 active projects, 18 permits — over two afternoons. Maria gets added as a second user. Maria's interaction with PermitBox is: she opens it, checks the dashboard, and closes it. She does this once a week.

**First week:** The dashboard shows one permit with a 14-day expiration warning that had not been flagged in Buildertrend. Ana calls the city and gets the extension. Maria: "This already paid for itself."

**Routine:** Ana's first action every morning is opening PermitBox. She scans the urgency dashboard: what's red, what's yellow, what's fine. She updates status when the city calls. She attaches inspection results as PDFs when reports arrive. Inspectors now call Ana instead of random crew members, because Ana is the person who updates the system.

**Team expansion:** When Maria hires a new project manager, the PM gets added to PermitBox as user 3. The PM owns the permits for their assigned projects; Ana maintains oversight of the full portfolio.

**Client status links:** A homeowner keeps calling about her permit status. Ana sends her the client-facing status link. The homeowner checks it herself. The calls stop.

---

### Journey 4: The Homeowner (Secondary User — Read-Only Client Status)

Sarah is a homeowner with a $180K addition project. Her GC (Maria's firm) started the permit application four weeks ago. Sarah does not know what is happening. She has called the office three times.

**Touchpoint:** Ana sends Sarah a link: "Here's where you can check your permit status anytime." The link opens a public page: "456 Oak Court Addition — Permit Status." It shows: permit type (Building — Addition), status (In Review — City of Portland), estimated approval date (December 1), next step (Awaiting zoning approval).

**Impact:** Sarah bookmarks the link. She checks it every few days instead of calling. Maria's office gets three fewer calls per week on this project. Sarah mentions it to her neighbor ("my contractor has this thing where you can check your permit status online"). The neighbor is about to hire a GC for their kitchen renovation.

Sarah's experience of PermitBox is: professional, transparent, and calm. It gives her confidence that her contractor is organized. This influences her referral behavior.

---

### Journey Requirements Summary

From these journeys, the product requires:

- **Permit lifecycle management** — Full CRUD for permit records including status progression
- **Inspection management** — Add, edit, and mark inspections pass/fail with notes
- **Alert engine** — Reliable scheduled email delivery; expiration windows (30/14/7 days); day-before inspection reminders; status change triggers
- **Urgency-ranked dashboard** — Real-time view of all permits sorted by approaching deadlines with visual severity signals
- **Document storage** — PDF attachment per permit; accessible from mobile
- **Public status page** — Read-only shareable URL for each project; no authentication required for homeowner
- **Multi-user access** — Team plan supports up to 5 users with shared permit visibility
- **Mobile-responsive UI** — Core dashboard and permit detail views must work on phones without zooming or horizontal scrolling
- **Email authentication** — Account access via email/password or magic link

---

## Domain-Specific Requirements

### Construction Permit Domain Context

Construction permits involve jurisdiction-specific rules (county-by-county, city-by-city variation in permit types, inspection sequences, and expiration policies). PermitBox V1 explicitly avoids jurisdiction-specific automation — all status updates are manual. This is a deliberate scope decision that eliminates the primary technical complexity of the domain.

Domain considerations that do affect the product:

**Permit type taxonomy:** The product must support enough permit type labels to be recognizable to contractors (electrical, plumbing, HVAC, structural, mechanical, grading, demolition, building — general). This is a dropdown with freeform fallback; no enforcement. Jurisdiction-specific type codes are out of scope for V1.

**Multi-inspection workflows:** A single permit typically requires multiple inspections in sequence (rough-in, framing, insulation, final). The data model must support multiple inspections per permit, each with its own scheduled date and pass/fail status. Failing an inspection triggers re-inspection as a new inspection record (not permit replacement).

**Permit status vocabulary:** Contractors recognize: Applied, In Review, Approved/Issued, Active (Under Construction), Inspections Underway, Final Inspection, Certificate of Occupancy Issued, Closed/Expired. The status workflow must map to this vocabulary even if simplified.

**Document volume:** A single permit can accumulate 5–15 documents over its lifecycle (application, drawings, approval letter, inspection reports, engineer certifications). File storage must be practical (25MB per file, no enforced per-permit limit for V1).

**Jurisdiction field:** Contractors track "city" or "county" as the jurisdiction — this is a freeform text field in V1 (not a locked dropdown). Multi-jurisdictional tracking is core to the value proposition; a contractor operating in Portland, Beaverton, and Hillsboro needs all three visible in one dashboard.

### Compliance & Regulatory

PermitBox is a data management tool, not a licensed entity. No professional licensing or regulatory compliance is required for the product itself. The permits being tracked are issued to the contractor; PermitBox is only recording and alerting, not submitting or guaranteeing compliance.

**Data handling:** Permit numbers and contractor business information are stored. No HIPAA, PCI-DSS, or financial data applies. Standard data protection best practices apply: encrypted at rest, HTTPS in transit, no selling of contractor or project data.

**Email compliance:** Alert emails must include unsubscribe functionality per CAN-SPAM. Alert preferences (enable/disable per alert type) provide further user control.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

PermitBox is a multi-tenant SaaS application. Each contractor account is an isolated tenant. All permit data, documents, and users belong to a single contractor account (tenant).

**Tenant structure:**
- Account (tenant): company name, billing, owner email
- Users: up to 1 (Solo plan) or 5 (Team plan) users per account; all users see all permits within the account
- No cross-account visibility; permit data is never shared between accounts

**Tenant isolation requirements:**
- All database queries scoped by account ID
- File storage paths include account ID to prevent cross-tenant document access
- No shared permit records between accounts (even for subs/GC relationships — V1 explicitly excludes cross-account permit sharing)

### Permission Model

V1 uses a flat permission model within accounts — all users have equal access to all permits in the account. Role-based access control (admin vs. viewer) is deferred to V2.

**Permission states:**
- Account owner: can invite/remove users, manage billing, change plan
- Team member: can add/edit/archive permits, add inspections, attach documents, share client links
- Guest (homeowner via client link): read-only access to a single project's public status page; no authentication required

### Billing & Subscription

- Solo plan ($19/month): 1 user seat, unlimited permits, unlimited document storage
- Team plan ($29/month): up to 5 user seats, unlimited permits, unlimited document storage
- LTD ($99 one-time): Solo plan features, lifetime, single user — sold via AppSumo
- Free trial: 14 days, no credit card required; full feature access
- Billing: Stripe or Lemon Squeezy; annual plan offered at 20% discount (optional V1 feature)

### Onboarding Flow

The onboarding flow is the most critical UX surface. Failure to reach "first permit added" means the user will not convert.

**Required onboarding steps:**
1. Email signup (no required fields beyond email and password; company name optional)
2. Redirect to dashboard with "Add Your First Permit" as the only prominent action
3. Add permit form: minimal required fields (jurisdiction, permit number, expiration date); all other fields optional
4. Success state: permit appears on dashboard with urgency indicator; optional prompt to add inspection

**Onboarding anti-patterns to avoid:**
- Forcing company profile completion before adding a permit
- Asking about team members before showing value
- Showing an empty state without a clear single call-to-action
- Requiring email verification before any dashboard access (verification is async; don't block)

### Integration Architecture

V1 has no third-party integrations (no Jobber, no Buildertrend, no QuickBooks). This is intentional — integration work is the primary scope creep risk for a 1–2 week MVP.

**What V1 provides:**
- Public status page shareable via URL (no API required for homeowners)
- CSV export of permit records (allows contractors to extract their data; reduces lock-in concern)
- Email alerts sent from a custom domain (resend.com or SendGrid with SPF/DKIM to reduce spam classification)

**API readiness for V2:** Data models and routes designed with eventual REST API in mind (standard resource-based structure); no public API in V1.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP approach:** Problem-solving MVP — deliver exactly the capability that prevents the core failure mode (missed inspections and expired permits). The product is validated when users report it prevented a real problem, not when it reaches a feature count.

**Why not a "platform MVP":** Adding project management, invoicing, or scheduling to prove viability would take 3x longer to build and 5x longer to validate. The problem is specific and the solution is specific. Scope discipline is the competitive advantage — competitors added features and raised prices; PermitBox stays focused.

**Resource requirements:** 1 full-stack developer, 4 weeks (2 weeks MVP build + 1 week testing + 1 week AppSumo launch prep). Tech stack target: Next.js + Postgres + Resend (email) + Vercel (hosting) — standard managed stack, no DevOps complexity.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Solo contractor adding and tracking permits across multiple jurisdictions
- Receiving automated email alerts before inspections and expirations
- Sharing a project's permit status with a homeowner

**Must-have capabilities for a shippable V1:**
- Permit record: create, read, update, delete/archive; required fields: permit number, jurisdiction (freeform), expiration date; optional fields: permit type, project name, project address, application date, expected approval date, notes
- Permit status workflow: Applied → In Review → Approved → Active Construction → Inspections Underway → Final Inspection → Closed/Expired (manual status updates; no automation in V1)
- Inspection records: linked to permit, require date and type, optional time and notes; pass/fail status toggle; inspection history visible per permit
- Email alert engine: 30/14/7 day expiration warnings; 24h inspection reminder; alert on manual status change; per-permit alert enable/disable
- Dashboard: all active permits sorted by nearest deadline; color-coded urgency (green/yellow/red); count badges (inspections this week, permits expiring in 30 days); single-click to permit detail
- Document storage: upload and download PDFs per permit; 25MB max per file; displayed as a list with filename, upload date, download link
- Client status page: generate a unique URL per project; read-only view showing permit type, status, next inspection, estimated completion; contractor can disable per-project
- Authentication: email/password signup; password reset via email; optional magic link
- Team accounts: account owner can invite up to 4 additional users (email invite); all users see all permits; owner can revoke access

### Post-MVP Features (Phase 2)

Planned for Month 3–6 based on user feedback and traction validation:
- Bulk CSV import (for spreadsheet migration)
- Weekly digest email (Monday morning summary)
- Subcontractor permit tracking (permit linked to sub, visible to GC)
- SMS alerts (opt-in, Twilio-based)
- Jobber read integration (permit status in Jobber project view)

### Expansion Features (Phase 3)

Planned for Month 6–18 based on $3K+ MRR milestone:
- Jurisdiction status sync (automated portal checking for top 20 US jurisdictions)
- Trade license renewal tracking (same data model, different reminder rules)
- Subcontractor COI tracking
- REST API for third-party integration
- Mobile PWA with push notifications

### Risk Mitigation Strategy

**Technical risks:**
- Email deliverability — Mitigated by using Resend with custom domain and SPF/DKIM from day one; monitor bounce/spam rates weekly
- Scope creep during MVP build — Mitigated by explicit "out of scope" list (SMS, integrations, portal scraping, mobile app) in CLAUDE.md and sprint documents
- Alert reliability — Mitigated by using a managed cron service (Vercel Cron or Inngest) rather than self-managed queues; alert failures must be observable and alertable

**Market risks:**
- Low virality — Mitigated by client status sharing (homeowner touchpoint) and explicit referral ask in post-signup email sequence
- Jobber adds permit tracking — Timeline: Jobber hasn't addressed this in 10+ years; even if they announce it, they won't ship it as a primary feature before PermitBox establishes brand; mitigation is speed and community presence
- No word-of-mouth — Mitigated by launching in r/ContractorsUS with a genuine "I built this for the problem you described" post immediately upon launch

**Resource risks:**
- Single developer bottleneck — Mitigated by choosing a well-documented, standard tech stack (Next.js + Postgres) with no novel dependencies; any developer can maintain it
- AppSumo listing rejection — Mitigation: apply 6 weeks before desired launch date; have fallback direct LTD page on own domain ready

---

## Functional Requirements

### Permit Management

- FR1: Contractor can create a new permit record with required fields (permit number, jurisdiction, expiration date) and optional fields (project name, address, permit type, application date, expected approval date, notes)
- FR2: Contractor can view all active permit records in a single list, sorted by approaching deadline by default
- FR3: Contractor can update any field on a permit record at any time
- FR4: Contractor can change a permit's status through a defined status progression (Applied → In Review → Approved → Active → Inspections Underway → Final Inspection → Closed/Expired)
- FR5: Contractor can archive a permit (remove from active dashboard) while preserving the record
- FR6: Contractor can restore an archived permit to active status
- FR7: Contractor can delete a permit permanently (with confirmation)
- FR8: Contractor can search and filter permit list by status, jurisdiction, permit type, and date ranges
- FR9: Contractor can add freeform notes to any permit record

### Inspection Management

- FR10: Contractor can add one or more scheduled inspections to any active permit
- FR11: Contractor can specify inspection date, time (optional), and inspection type for each scheduled inspection
- FR12: Contractor can record an inspection as passed or failed after it occurs
- FR13: Contractor can add notes to any inspection record (e.g., inspector comments, follow-up required)
- FR14: Contractor can view the full inspection history for any permit, in chronological order
- FR15: Contractor can edit or delete a scheduled inspection before it occurs
- FR16: System displays inspection type as a dropdown (rough-in, framing, electrical, plumbing, HVAC, insulation, drywall, structural, final, certificate of occupancy, other) with freeform fallback

### Alert & Notification Engine

- FR17: System automatically sends email reminders 30 days, 14 days, and 7 days before each permit's expiration date
- FR18: System automatically sends an email reminder 24 hours before each scheduled inspection
- FR19: System sends an email notification when a permit's status is manually updated
- FR20: Contractor can enable or disable each alert type (expiration warning, inspection reminder, status change) per permit
- FR21: Contractor can set global default alert preferences that apply to all new permits
- FR22: System records a log of all alerts sent (timestamp, type, permit) accessible from the permit detail view
- FR23: Alert emails include a direct link to the relevant permit in PermitBox

### Dashboard & Navigation

- FR24: Contractor sees all active permits on load, ranked by urgency (soonest inspection first, then soonest expiration)
- FR25: Each permit card on the dashboard displays: project name (or permit number if unnamed), jurisdiction, permit type, status, days until next inspection (if scheduled), days until expiration
- FR26: Dashboard uses visual severity indicators: green (no deadline within 30 days), yellow (deadline within 30 days), red (deadline within 7 days or overdue/expired)
- FR27: Dashboard shows summary counts: total active permits, inspections scheduled this week, permits expiring within 30 days
- FR28: Contractor can click any permit from the dashboard to view full permit detail
- FR29: Contractor can filter dashboard by status, jurisdiction, permit type, and date range
- FR30: Dashboard is fully usable on mobile devices (375px+ viewport width)

### Document Management

- FR31: Contractor can upload one or more files (PDF, JPG, PNG) to any permit record
- FR32: Contractor can view a list of all attached files for a permit, with filename and upload date
- FR33: Contractor can download any attached file
- FR34: Contractor can delete an attached file from a permit
- FR35: System enforces a maximum file size of 25MB per upload
- FR36: Files are stored securely and associated only with their owning permit and account

### Client Status Sharing

- FR37: Contractor can generate a unique public URL for any permit/project
- FR38: The public status page displays permit type, current status, next scheduled inspection date (if any), and estimated completion date (if set)
- FR39: The public status page requires no authentication or login to view
- FR40: Contractor can disable (invalidate) the public URL for any permit, making the link inaccessible
- FR41: Contractor can re-enable a disabled public URL, generating a new unique URL
- FR42: Public status page displays a read-only view; the homeowner cannot modify any data

### Account & User Management

- FR43: User can create an account with email and password; company name is optional at signup
- FR44: User can log in via email/password or magic link
- FR45: User can reset their password via email
- FR46: Account owner (Solo plan) has one user seat
- FR47: Account owner (Team plan) can invite up to 4 additional users by email address
- FR48: Invited users receive an email invitation and create their own password on acceptance
- FR49: Account owner can revoke any team member's access
- FR50: All users within an account can view, create, edit, and manage all permits in that account
- FR51: Account owner can update company name and billing information
- FR52: Account owner can upgrade from Solo to Team plan, or downgrade
- FR53: User can export all permit records as a CSV file

---

## Non-Functional Requirements

### Performance

Alert delivery and dashboard loading are the primary performance surfaces that affect user trust.

- Email alerts must be delivered within 5 minutes of their scheduled trigger time, 98% of the time
- Dashboard must load and display all active permits within 2 seconds on a standard mobile connection (4G/LTE), for accounts with up to 200 active permits
- Permit create, edit, and status update operations must complete and reflect on the dashboard within 1 second
- File uploads up to 25MB must complete within 30 seconds on a standard broadband connection
- The public client status page must load within 2 seconds (cached; high read volume expected for shared links)

### Security

Contractor business data (permit numbers, project addresses, inspection schedules) is not highly sensitive, but must be protected from unauthorized access.

- All data transmitted between client and server uses HTTPS/TLS 1.2+
- All data at rest is encrypted (Postgres encryption at rest via managed hosting provider)
- User passwords are hashed with bcrypt or Argon2; never stored in plaintext
- Public client status pages are access-controlled by unique unpredictable URL tokens (minimum 128-bit entropy); not guessable by enumeration
- Session tokens expire after 30 days of inactivity; re-authentication required
- File storage uses private buckets; files are served via signed time-limited URLs, not public direct paths
- Multi-tenant isolation: all database queries include account_id scoping enforced at the application layer; not dependent on row-level security alone
- Alert unsubscribe links must be functional within 24 hours of any user request (CAN-SPAM compliance)

### Scalability

Growth targets (500 customers at 12 months, 2,000 at 24 months) are modest and manageable on a standard managed stack.

- Infrastructure must support 2,000 concurrent active accounts without degradation in dashboard load time
- The alert scheduling system must handle 10,000+ scheduled alert events per day without backlog
- File storage must scale to 100GB total without architectural changes (S3-compatible object storage handles this natively)
- Database design must not require structural changes to support up to 50,000 permit records across all accounts
- Horizontal scaling (adding more compute) must be possible without application code changes (stateless API design)

### Reliability

Missing an inspection reminder due to a system failure is the product's highest-severity failure mode. It directly causes the user harm that the product is supposed to prevent.

- Alert system failures must be logged and observable; on-call alerting if more than 5 alerts fail in any 1-hour window
- Dashboard uptime target: 99.5% (< 4 hours downtime per month); measured monthly
- Alert delivery: 98% of alerts delivered within the scheduled window; alerts that fail are retried at least twice before being marked failed
- Data backup: daily automated backup of all database data retained for 30 days; restore tested quarterly
- Incident response: P1 incidents (alert engine down, users unable to log in) responded to within 2 hours

### Accessibility

PermitBox serves a practical business tool audience. Basic accessibility ensures the product works for contractors with visual impairments or who use screen readers on job sites.

- All images and icons include alt text
- Form fields have associated labels (not placeholder-only)
- Color-coded status indicators (green/yellow/red) are accompanied by text labels; color alone does not convey status
- Dashboard is navigable by keyboard (tab order is logical; all interactive elements are focusable)
- Minimum color contrast ratio of 4.5:1 for all text (WCAG 2.1 AA)
- Mobile tap targets minimum 44×44px for all interactive elements

### Integration

V1 has no third-party integrations. These integration NFRs apply to the email delivery service used for alerts.

- Email delivery service (Resend or SendGrid): SPF, DKIM, and DMARC configured on sending domain; bounce and complaint rate must remain below 0.1% to protect sender reputation
- Sending domain: PermitBox sends from a custom subdomain (e.g., alerts@mail.permitbox.com); not a shared IP pool from a generic domain
- Stripe or Lemon Squeezy for billing: webhook signature verification required for all payment events; failed payment flow must automatically downgrade account to prevent unauthorized access after failed billing

---

*PRD created: 2026-11-03*
*Based on: Product Brief (contractor-permit-tracker, 2026-11-03), Market Research (2026-11-02), Shortlisted Idea (2026-09-10, Score: 84/105)*
*Next steps: Create architecture document, then epics and stories for AutoMVP pipeline*

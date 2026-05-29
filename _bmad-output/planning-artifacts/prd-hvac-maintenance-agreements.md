---
stepsCompleted:
  - step-01-init.md
  - step-02-discovery.md
  - step-02b-vision.md
  - step-02c-executive-summary.md
  - step-03-success.md
  - step-04-journeys.md
  - step-05-domain.md
  - step-06-innovation.md
  - step-07-project-type.md
  - step-08-scoping.md
  - step-09-functional.md
  - step-10-nonfunctional.md
  - step-11-polish.md
  - step-12-complete.md
inputDocuments:
  - ideas/shortlisted/hvac-maintenance-agreement-autopilot.md
  - _bmad-output/planning-artifacts/product-brief-hvac-maintenance-agreements.md
workflowType: 'prd'
research_topic: 'hvac-maintenance-agreements'
author: Root
date: '2026-05-29'
classification:
  projectType: saas_b2b
  domain: field_service_trades
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — AgreementDesk

**Author:** Root
**Date:** 2026-05-29

---

## Executive Summary

AgreementDesk is a standalone, cloud-based HVAC maintenance agreement management tool priced at $49–$79/month for contractors with 1–10 technicians. It solves a verified $9.9 billion market problem: 60,000–72,000 small HVAC shops manage their most profitable service line (55% of industry revenue) in spreadsheets, missing contracted visits and losing renewal revenue because no affordable, purpose-built tool exists below $500/month.

**Core value proposition:** AgreementDesk makes it impossible to lose track of a contracted visit. It auto-generates visit schedules from agreement terms, alerts the owner when visits go unconfirmed for 7 days, enables field techs to confirm completion via mobile (photo + notes), and surfaces total Agreement ARR in a real-time dashboard.

**Target users:** Owner-operators and office managers of HVAC shops with 1–10 technicians and 50–500 active maintenance agreements. These shops use Housecall Pro, Jobber, or no dispatch software — AgreementDesk adds an agreement management layer on top without requiring them to replace anything.

**Positioning:** The only standalone HVAC maintenance agreement tracker under $100/month with missed-visit alerts, technician visit completion tracking, and an Agreement ARR dashboard. ServiceTitan and FieldEdge solve this for $500–$1,500+/month; Housecall Pro's agreement module is billing-only with no visit-completion tracking. No standalone tool under $100/month addresses all five capabilities: standalone operation, HVAC equipment tracking, visit completion confirmation, missed-visit alerts, and ARR dashboard.

**Revenue model:** $49/month (Starter: ≤50 agreements, 3 techs) and $79/month (Pro: unlimited agreements, unlimited techs). Annual billing at 20% discount. AppSumo LTD at $79 (Starter) and $129 (Pro) for initial customer acquisition.

### What Makes This Special

**1. Non-replacement positioning.** AgreementDesk does not displace Housecall Pro, Jobber, or any other FSM. It is an additive agreement-management layer — removing the highest-friction objection in small business software sales.

**2. Missed-visit alert at $49/month.** No competitor under $100/month detects and notifies owners of overdue contracted visits. A shop with 200 agreements misses an estimated 280 visits/year ($42K–$70K in direct revenue, plus $84K–$140K in pull-through). AgreementDesk's value justifies its price after preventing one missed visit per year.

**3. Agreement ARR Dashboard — first clean recurring-revenue number.** Most small HVAC shops have never seen their total agreement revenue as a single number. The psychological and business-planning value of this first-time visibility is a durable retention hook that competitors cannot replicate without the agreement-tracking substrate.

**4. HVAC-specific data model.** Equipment roster with unit type, age, serial number, manufacturer, and location. Visit types mapped to HVAC service norms (spring A/C check, fall furnace check). Seasonal scheduling defaults. Generic FSM tools use "recurring job" constructs that don't match how HVAC agreements work.

## Project Classification

- **Project Type:** SaaS B2B web application with mobile PWA for field technicians
- **Domain:** Field service / trades (HVAC)
- **Complexity:** Medium — multi-role user model (owner, admin, tech), mobile PWA required, SMS/email notification infrastructure, recurring billing via Stripe
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

| Metric | Baseline (spreadsheet users) | Target (AgreementDesk users) |
|--------|------------------------------|-------------------------------|
| Visit completion rate | ~65% of scheduled visits completed on time | ≥85% within 60 days of onboarding |
| Renewal outreach coverage | Manual, ad hoc (50–70% of renewals contacted) | 100% of renewals ≥30 days out receive automated reminder |
| Time to identify first overdue visit | Days to weeks (manual spreadsheet review) | ≤3 days from sign-up (automated detection on import) |
| Onboarding completion | — | ≥70% of trial users complete CSV import + first agreement config within 7 days |
| Weekly dashboard engagement | — | ≥60% of paying users open Agreement ARR dashboard ≥1x/week |

**Primary user success indicators:**
- Owner identifies ≥1 overdue or at-risk visit within first week (target: 80% of trial users)
- Owner can answer "what is my total agreement ARR?" without a spreadsheet within 15 minutes of onboarding
- Tech completes visit record in ≤5 taps from visit list on mobile

### Business Success

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Paying customers | 30 | 150 | 500 |
| MRR | $1,500 | $9,000 | $30,000 |
| Monthly churn rate | <8% | <5% | <3% |
| Trial-to-paid conversion | 25% | 30% | 30% |
| AppSumo LTD sales (cumulative) | — | 300 | 500 |
| NPS | 35+ | 45+ | 55+ |

**90-day MVP success criteria (go/no-go):**
1. 30 paying customers with average account size ≥50 active agreements
2. 70%+ of trial users identify ≥1 overdue/at-risk visit within first week
3. 5 verifiable case studies with quantified impact (missed visits recovered, or renewal rate improvement)
4. <7% churn before week 2 for users who complete onboarding

### Technical Success

- Missed-visit alert delivery: ≥99% of triggered alerts delivered within 15 minutes of trigger condition
- Mobile visit completion: visit record syncs to server within 30 seconds of submission under normal connectivity
- CSV import: ≤5 minutes to complete customer roster import of up to 500 records
- Uptime: ≥99.5% monthly availability

### Measurable Outcomes

**Leading indicators for trial conversion:**
- Week 1 activation rate: ≥50% of trial users log ≥1 visit completion
- "Aha moment" rate: ≥70% of trial users receive ≥1 missed-visit alert or see ≥1 overdue badge in week 1

**Retention indicators:**
- Agreements tracked per account at month 3: average ≥80 active agreements per paying account
- Mobile app adoption: ≥50% of accounts have ≥1 tech using mobile visit completion by month 2

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**MVP philosophy:** Problem-solving MVP. Deliver the complete "never lose a contracted visit" loop for owner-operators who currently use a spreadsheet or HCP without visit-completion tracking.

**Core user journeys supported:**
- Owner imports customer/equipment roster and configures agreements
- System auto-schedules visits and surfaces overdue visits immediately
- Tech confirms visit completion via mobile with photo + notes
- Owner receives missed-visit alert if visit is 7+ days overdue
- Owner views Agreement ARR dashboard and renewal pipeline
- Owner receives automated renewal reminders (90/60/30 days)

**Must-have capabilities:**
- Customer + equipment roster with CSV import
- Agreement type templates + per-customer agreement assignment
- Auto-generated visit schedule with seasonal defaults
- Technician assignment per visit
- Mobile-first visit completion (PWA: GPS check-in, photos, notes, offline sync)
- Missed-visit alert system (email + SMS, 7-day default threshold)
- Automated renewal reminder sequence (90/60/30-day, to owner)
- Agreement ARR dashboard with renewal pipeline view
- Role-based access: Owner, Admin, Tech
- Stripe subscription billing

**Out of scope for MVP (explicit deferrals):**
- Customer-facing renewal emails or portal
- QuickBooks / accounting integrations
- Dispatch integration (Housecall Pro / Jobber API)
- Route optimization
- Native iOS/Android apps (PWA sufficient)
- Multi-location / franchise support
- Commercial multi-site contracts
- AI-assisted scheduling
- Custom reporting beyond dashboard + CSV export
- Plumbing or electrical vertical configs

### Growth Features — Phase 2 (Months 4–9)

- QuickBooks integration: auto-create renewal invoices; sync agreement revenue to P&L
- Customer-facing renewal outreach: AgreementDesk drafts and sends renewal proposals to customers (owner reviews before send)
- Housecall Pro + Jobber API integration: agreement visits appear as jobs in FSM; completion syncs back
- Route optimization for PM visit days (Google Maps API)
- Native iOS + Android apps for techs (better camera/GPS/offline)
- Commercial agreement support: multi-site contracts, per-equipment billing

### Vision — Phase 3+ (Year 2+)

- Plumbing and electrical vertical support (same agreement logic, different equipment types)
- Multi-location / franchise support with franchisor visibility dashboard
- Customer portal: self-service agreement status, visit scheduling, online renewal
- "Agreement Health Score": proprietary metric per agreement (completion rate, renewal probability, pull-through revenue)
- Predictive renewal risk: ML model triggers early intervention before 90-day window
- Equipment failure prediction from visit notes + age data
- Acquisition target positioning: AgreementDesk as agreement-management module/API for Jobber, FieldPulse, or Workiz

---

## User Journeys

### Journey 1: The Spreadsheet Survivor — Marcus (Owner, 3-Tech Shop)

**Opening scene:** Marcus has 180 active agreements tracked in a Google Sheet. He reviews it manually on Mondays — when he remembers. It's October, and a customer just called asking why no one came for her fall furnace check. Marcus doesn't know how many other visits he's missed.

**Rising action:** Marcus finds AgreementDesk via a Facebook post in "HVAC Business Owners Network" — a peer shares that the "missed visit calculator" showed him $31K in annual lost revenue. Marcus enters his estimates: 180 agreements, 2 visits each. The calculator shows $27K–$45K/year in estimated missed revenue. He reads: "Works alongside Housecall Pro. Missed-visit alert within 7 days. $49/month." He starts a trial.

He exports his HCP customer list as CSV and uploads it. AgreementDesk maps columns (Name, Address, Phone, Equipment Type) in a guided interface. In 20 minutes, 180 customers are loaded. He spends another 20 minutes creating two agreement templates and assigning them. The system auto-generates 360 scheduled visits.

**Climax:** AgreementDesk immediately displays a red badge: "14 visits are overdue by 7+ days." Marcus clicks through and sees exactly which customers he failed to visit this fall. He calls them proactively. Two were about to cancel. He prevents the churn before it happened — on day one.

**Resolution:** After 6 weeks, his dashboard shows: $41,400 Agreement ARR (first time he's ever seen this number), 87% on-time visit rate (up from an estimated 60–70%), and 8 renewals due in the next 30 days. His techs confirm visits from the field; he no longer updates the spreadsheet. He posts in the Facebook group about the experience — generating organic referrals.

**Journey requirements revealed:**
- CSV import with flexible column mapping (no rigid format)
- Immediate overdue visit detection on first load (retroactive scheduling)
- Dashboard badge for overdue count
- Mobile tech visit confirmation with minimal friction
- Automated renewal pipeline view

---

### Journey 2: The Overqualified FSM User — Deb (Office Manager, 5-Tech Shop)

**Opening scene:** Deb manages operations for a 5-tech shop using Housecall Pro for dispatch and invoicing. For the 240 active maintenance agreements, she maintains a separate Excel file because "HCP doesn't really track whether the visits happened." Customers call asking about missed spring tune-ups. Deb spends hours cross-referencing HCP job records with the Excel sheet.

**Rising action:** Deb's boss sees an AgreementDesk comparison showing what HCP doesn't do. Specifically: HCP has no missed-visit alerts and no Agreement ARR dashboard. The boss authorizes the trial. Deb sets up AgreementDesk alongside HCP — no migration required.

**Climax:** After configuring 240 agreements and assigning them to techs, Deb sets up automated renewal reminders. For the first time, renewal emails go out to customers 90, 60, and 30 days before expiration — without Deb manually sending them. She checks the renewal pipeline view: 22 agreements expire in the next 30 days, 8 of which she had not yet contacted. She contacts them immediately.

**Resolution:** After 90 days, Deb no longer maintains the Excel file. The owner asks "how many active agreements do we have?" — Deb opens the dashboard and answers in 10 seconds instead of 30 minutes. Monthly churn on agreements drops from ~22% to ~10% because renewals don't lapse uncontacted.

**Journey requirements revealed:**
- Parallel operation with existing FSM (no integration required in MVP)
- Automated renewal reminder sequence with configurable lead times
- Agreement count + status dashboard answerable in <10 seconds
- No double-entry obligation — AgreementDesk as agreement-specific layer only

---

### Journey 3: Technician Alex — Visit Completion in the Field

**Opening scene:** Alex is a tech at Marcus's shop. He finishes a furnace tune-up at a residential agreement customer. He needs to confirm the visit so Marcus knows it's done and the customer doesn't get a missed-visit alert.

**Rising action:** Alex opens the AgreementDesk PWA on his phone (no app store download required). He sees his visit list for today — 4 visits, 2 completed. He taps the current visit.

**Climax:** Alex taps "Check In" — GPS timestamp logged. He completes the furnace checklist (filter replaced, heat exchanger inspected, measured temp rise). He takes two photos of the cleaned equipment. Taps "Mark Complete." Done. 5 taps total, under 60 seconds, with one hand.

**Resolution:** Marcus's dashboard immediately shows the visit green. No phone tag. No "did Alex get to the Johnson furnace?" The missed-visit alert that would have fired in 7 days is cancelled automatically.

**Journey requirements revealed:**
- Mobile PWA accessible without app store installation
- Visit workflow completable in ≤5 taps with one hand
- GPS check-in + photo capture + notes + completion in single flow
- Offline capability: log visit offline, sync on reconnect
- Immediate dashboard reflection of visit status change

---

### Journey 4: Growing Portfolio Manager — Ricky (Owner, 8-Tech Shop) with Mixed Agreements

**Opening scene:** Ricky has 450+ agreements — a mix of residential (2-visit/year) and light commercial (4-visit/year). He's been evaluating ServiceTitan for 6 months but can't justify $800/month just for agreement tracking. His VA manages a complex spreadsheet that no one else understands.

**Rising action:** Ricky's VA is out sick for two weeks. Ricky tries to interpret the spreadsheet to answer: "Which commercial accounts have overdue visits?" He can't. He signs up for AgreementDesk Pro.

**Climax:** Ricky creates four agreement templates: Residential Annual (2 visits), Residential Priority (2 visits + priority scheduling), Commercial Quarterly (4 visits), and Commercial Comprehensive (6 visits). He configures per-account pricing overrides for three large commercial customers. Within two days, 450 agreements are loaded with auto-generated schedules. He exports the agreement list to CSV and shares it with his accountant for QuickBooks reconciliation.

**Resolution:** The VA returns and can use AgreementDesk instead of the spreadsheet. Ricky can now separate residential from commercial agreement ARR in the dashboard. His VA no longer owns institutional knowledge that blocks the business — the agreement data is in a system.

**Journey requirements revealed:**
- Multiple agreement templates with different visit frequencies
- Per-customer pricing override capability
- Support for mixed agreement types per account
- CSV export for accountant handoff
- Dashboard filterable by agreement type

---

### Journey 5: Account Admin — Error Recovery and Access Management

**Opening scene:** Marcus hired a new office admin, Jamie. He needs to give Jamie access to manage agreements (add/edit customers, mark renewals complete) without giving her the ability to change billing or account settings.

**Rising action:** Marcus opens account settings and invites Jamie by email with the "Admin" role. Jamie accepts the invite. She immediately begins adding new customers and reassigning upcoming visits when a tech calls in sick.

**Edge case:** Jamie accidentally imports a duplicate customer list, creating 45 duplicate records. Marcus needs to remove them without losing any visit history.

**Resolution:** Marcus can deactivate the duplicate customer records. Visit history associated with the duplicates is preserved (not deleted) for auditing. Marcus reassigns the 12 scheduled visits from duplicates to the correct records.

**Journey requirements revealed:**
- Role-based access: Admin role with full operational access but no billing access
- Customer deactivation (soft delete) without data loss
- Visit reassignment between customer records
- Invite-based team member onboarding via email

---

### Journey Requirements Summary

**Capabilities revealed across all journeys:**

| Capability | Journeys |
|-----------|---------|
| CSV import with flexible column mapping | 1, 4 |
| Retroactive overdue visit detection on import | 1 |
| Auto-generated visit schedules from agreement terms | 1, 2, 4 |
| Mobile PWA for tech visit completion (≤5 taps, offline sync) | 3 |
| Missed-visit alert with snooze/reschedule action | 1, 2 |
| Agreement ARR dashboard with overdue badge | 1, 2, 4 |
| Automated renewal reminder sequence (owner-facing) | 2 |
| Renewal pipeline view | 1, 2 |
| Multiple agreement templates + per-customer pricing overrides | 4 |
| CSV export for accountant | 4 |
| Role-based access (Owner, Admin, Tech) | 5 |
| Customer deactivation with visit history preservation | 5 |
| Visit reassignment between records | 5 |

---

## Domain-Specific Requirements

**Domain:** Field service / trades (HVAC)
**Complexity:** Medium — no heavy compliance requirements (not healthcare, fintech, or govtech). Key domain considerations:

### HVAC-Specific Data Requirements

- **Equipment types:** Furnace, central A/C, heat pump (air-source/ground-source), boiler, air handler, mini-split, commercial RTU. System must support all types; user-configurable extensibility for unlisted types.
- **Seasonal scheduling defaults:** Spring visits default to March–May (A/C check); fall visits default to September–November (furnace check). User can override individual visit dates. System must respect these defaults when auto-generating annual 2-visit schedules.
- **Visit types by agreement:** Annual agreements generate one spring + one fall visit. Semi-annual agreements generate one visit per 6-month window. Quarterly agreements generate visits at equal 3-month intervals. Custom frequency (e.g., filter-change monthly) must be configurable.
- **Serial number and equipment age tracking:** Required for warranty verification, replacement sales lead identification, and service history context at visit time.

### SMS Communication Compliance

- SMS notifications require opt-in consent from account owner at setup (TCPA compliance for owner-to-platform communications).
- SMS delivery via a compliant provider (Twilio or equivalent) with opt-out handling.
- SMS used for owner/admin notifications only in MVP; customer-facing SMS is Phase 2.

### No Heavy Regulated Data

- No PHI (not healthcare), no payment card data beyond Stripe token (PCI-DSS handled by Stripe), no government data. Standard SaaS security posture is sufficient.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

- Each contractor account is a fully isolated tenant. No data bleed between accounts.
- Single-tier tenancy (one company per account) in MVP. Franchise/multi-company is Phase 3.

### Role-Based Access Control

| Role | Permissions |
|------|-------------|
| Owner | Full access including billing, user management, account deletion |
| Admin | Full operational access (customers, agreements, visits, reports); no billing or account deletion |
| Tech | View own assigned visits; check in/complete visits; upload photos/notes; no customer or agreement editing |

### Subscription & Billing

- Stripe handles all payment processing. AgreementDesk stores only Stripe customer ID — no raw card data.
- Plan limits enforced at API layer: Starter blocks agreement creation beyond 50 active; prompts upgrade.
- Trial period: 14 days, credit card not required for trial start; required at conversion.
- Upgrade/downgrade and cancellation self-serve via in-app billing management.

### Onboarding

- Self-serve onboarding: no required human intervention.
- Guided CSV import with column-mapping UI (drag/drop column assignment, preview of mapped data, error highlighting for malformed rows).
- Agreement template creation wizard: frequency → visit types → pricing → assignment.
- Empty-state prompts guide new users to the CSV import path first.

### Integration Posture (MVP)

- No FSM integrations in MVP. AgreementDesk runs alongside any existing dispatch tool.
- CSV export for data portability (agreements, visit history, customer list).
- Stripe webhook integration for subscription lifecycle events (payment failure, cancellation, upgrade).
- Future: REST API for FSM integration (Phase 2).

### Tech Stack Considerations (for Architecture phase)

- Web app: responsive React SPA or Next.js (owner dashboard + admin)
- Mobile: Progressive Web App (PWA) for tech visit completion — installable on iOS/Android via browser, no app store required
- SMS: Twilio (or equivalent); email: SendGrid (or equivalent)
- Payments: Stripe Billing + Webhooks
- Database: PostgreSQL (relational data model suits agreement/visit/customer structure)
- Hosting: Cloud-native (AWS/GCP/Fly.io) with horizontal scaling path

---

## Functional Requirements

### Customer & Equipment Management

- **FR1:** Owner and Admin can create, edit, and deactivate customer records with fields: name, address, phone, email, and contact preference notes.
- **FR2:** Owner and Admin can add multiple equipment units per customer, each with: unit type (from predefined list + custom), manufacturer, model, serial number, install year, and location within property (e.g., attic, basement, rooftop).
- **FR3:** Owner and Admin can import customers and equipment from CSV with a guided column-mapping interface that previews mapped data and highlights errors before import execution.
- **FR4:** Owner and Admin can search customers by name, address, and phone, and filter by agreement status (active/expired/no agreement) and assigned technician.
- **FR5:** Owner and Admin can deactivate customer records (soft delete) without deleting visit history or agreement data.
- **FR6:** Owner and Admin can reassign scheduled visits from one customer record to another (for error correction post-import).

### Agreement Configuration & Management

- **FR7:** Owner and Admin can create reusable agreement templates specifying: name, visit frequency (annual, semi-annual, quarterly, or custom interval), default price, and included service type labels.
- **FR8:** Owner and Admin can assign an agreement template to a specific customer with: custom price override, start date, and end date.
- **FR9:** Owner and Admin can view all agreements in a filterable/sortable list by status (active, expired, pending renewal), agreement type, assigned technician, and expiration date range.
- **FR10:** Owner and Admin can edit an active agreement's price, technician assignment, or end date without voiding historical visit records.
- **FR11:** Owner and Admin can renew an agreement with a single action that extends the end date by one standard term (1 year for annual, 6 months for semi-annual).
- **FR12:** Owner and Admin can cancel an agreement with a cancellation reason note; cancellation ends future visit generation but preserves historical records.
- **FR13:** System prevents creating a new active agreement for a customer/equipment combination that already has an overlapping active agreement, and surfaces a conflict warning.

### Visit Scheduling & Tracking

- **FR14:** System auto-generates a complete visit schedule for the full agreement term immediately upon agreement creation or import, applying seasonal defaults (spring A/C visits: March–May; fall furnace visits: September–November) for annual agreements.
- **FR15:** System flags visits with due dates in the past as overdue on the date of schedule generation (retroactive overdue detection for imported historical data).
- **FR16:** Owner and Admin can view the full visit schedule as a calendar view and a list view, with filters for technician, date range, and agreement type.
- **FR17:** Owner and Admin can manually add ad hoc visits to any agreement outside the auto-generated schedule.
- **FR18:** Owner and Admin can reschedule any individual visit by selecting a new date; the rescheduled date is recorded separately from the original due date for reporting accuracy.
- **FR19:** Owner and Admin can assign or reassign any scheduled visit to a specific technician from the visit detail view.
- **FR20:** Owner and Admin can mark a visit as cancelled (customer declined, equipment replaced, etc.) with a reason note; cancelled visits do not trigger missed-visit alerts.

### Technician Mobile Experience

- **FR21:** Tech can access the PWA without app store installation; the PWA is installable to the home screen on iOS and Android via browser.
- **FR22:** Tech can view a list of their assigned visits for today and the next 7 days, sorted by due date.
- **FR23:** Tech can initiate visit check-in by tapping the visit, which records a GPS timestamp and start time.
- **FR24:** Tech can upload 1–3 photos per visit during or after check-in.
- **FR25:** Tech can add free-text notes (up to 1,000 characters) to any visit.
- **FR26:** Tech can mark a visit complete; completion records a GPS timestamp, end time, and requires at least one of: photo or note.
- **FR27:** Tech can complete the full visit workflow (check in → photo → note → mark complete) in ≤5 taps from the visit list view.
- **FR28:** Tech can log visit check-in, completion, photos, and notes while offline; data syncs to server automatically when connectivity is restored.

### Alerting & Notifications

- **FR29:** System sends email and SMS alert to Owner and all Admins when a scheduled visit is not marked complete within a configurable number of days past its due date (default: 7 days).
- **FR30:** Missed-visit alert includes: customer name, address, equipment type, agreement type, days overdue, and a one-click link to reschedule or snooze the alert.
- **FR31:** Owner can configure missed-visit notification mode: individual alerts per visit, or a daily digest summarizing all newly overdue visits.
- **FR32:** Owner and Admin can snooze a missed-visit alert for a specific visit, deferring the next alert by a user-selected number of days (3, 7, or 14).
- **FR33:** System sends automated renewal reminder notifications to Owner and all Admins at 90, 60, and 30 days before each agreement's expiration date.
- **FR34:** Renewal reminder includes: customer name, agreement type, expiration date, and a link to the agreement record for one-click renewal.
- **FR35:** Owner can configure notification delivery preference per alert type (email only, SMS only, or both); SMS requires verified phone number at setup.

### Dashboard & Reporting

- **FR36:** Owner and Admin can view the Agreement ARR dashboard showing in real time: total active agreement count, total annualized agreement ARR, visits completed vs. scheduled for the current month, and agreements expiring in the next 30, 60, and 90 days.
- **FR37:** Dashboard displays a persistent badge showing the count of currently overdue visits (visits past due date and not marked complete, not cancelled, not snoozed).
- **FR38:** Owner and Admin can view the renewal pipeline as a list of agreements expiring within a configurable window (default: 90 days), sortable by expiration date and filterable by agreement type.
- **FR39:** Owner and Admin can view visit completion rate trending month-over-month for the trailing 6 months.
- **FR40:** Owner and Admin can export the full agreement list (active and historical) to CSV including: customer name, agreement type, start date, end date, price, and assigned technician.
- **FR41:** Owner and Admin can export visit history to CSV including: customer name, visit due date, completion date, technician, and completion notes.

### Account, User & Billing Management

- **FR42:** Owner can invite team members by email, assigning Owner, Admin, or Tech role at invite time; invited users create an account via the emailed link.
- **FR43:** Owner can change a team member's role after onboarding.
- **FR44:** Owner can deactivate a team member's account; deactivated techs' historical visit records are preserved and attributed.
- **FR45:** Owner can configure company profile: company name, timezone, and logo (for dashboard display).
- **FR46:** Owner can manage subscription plan (upgrade/downgrade between Starter and Pro), update payment method, and cancel subscription via in-app billing management powered by Stripe.
- **FR47:** System enforces plan limits at the API layer: Starter accounts receive an upgrade prompt when attempting to create a 51st active agreement or invite a 4th technician; existing data is not affected.

---

## Non-Functional Requirements

### Performance

- **NFR1:** Dashboard page load (Agreement ARR dashboard, full account data) completes in under 3 seconds at 95th percentile under normal load, as measured by application performance monitoring.
- **NFR2:** Visit completion submission from the tech PWA returns a success response in under 2 seconds at 95th percentile under normal mobile network conditions (4G LTE).
- **NFR3:** CSV import of up to 500 customer records completes processing in under 60 seconds with immediate result display.
- **NFR4:** Each tap in the tech's visit completion flow responds with visible feedback within 300ms (UI responsiveness, not data submission).

### Security & Privacy

- **NFR5:** All data in transit uses TLS 1.2 or higher; all data at rest uses AES-256 encryption as provided by the hosting platform.
- **NFR6:** Authentication uses industry-standard session management with secure, HttpOnly cookies; passwords stored using bcrypt (or equivalent) with minimum cost factor of 12.
- **NFR7:** Role-based access control enforced at the API layer — Tech-role API tokens cannot access customer, agreement, or dashboard endpoints; Admin-role tokens cannot access billing endpoints.
- **NFR8:** Payment processing is handled exclusively via Stripe; AgreementDesk stores only Stripe customer IDs — no raw card numbers, CVVs, or bank account data are stored or transmitted through AgreementDesk systems (PCI-DSS scope minimization by design).
- **NFR9:** GPS location data captured during tech check-in and completion is stored only as coordinates tied to a specific visit record; it is not used for background tracking or real-time location sharing.
- **NFR10:** Multi-tenant data isolation: every database query includes tenant-scoped filtering; no cross-account data access is possible via the API.

### Scalability

- **NFR11:** System supports accounts with up to 1,000 active agreements and 50 technician users within a single account without measurable performance degradation relative to NFR1–NFR3.
- **NFR12:** System architecture supports horizontal scaling to handle 10,000 concurrent accounts without re-architecture; initial deployment may be single-region with vertical scaling path for MVP.
- **NFR13:** SMS and email notification delivery architecture handles up to 10,000 outbound messages per day (aggregated across all accounts) without queuing delays exceeding 5 minutes.

### Reliability & Offline Support

- **NFR14:** System achieves ≥99.5% monthly uptime for the web application and API, as measured by uptime monitoring (e.g., Uptime Robot or cloud provider health checks).
- **NFR15:** Tech PWA stores visit completion data locally (IndexedDB or equivalent) when offline; data syncs automatically within 30 seconds of connectivity restoration with no user intervention required.
- **NFR16:** Missed-visit alert delivery achieves ≥99% successful delivery rate; failed SMS deliveries fall back to email delivery within 5 minutes of SMS failure detection.
- **NFR17:** Stripe webhook processing retries failed events up to 3 times with exponential backoff; subscription status reflects payment events within 10 minutes of Stripe event receipt.

### Usability (Mobile PWA)

- **NFR18:** The tech PWA renders correctly and is fully functional on Chrome (Android) and Safari (iOS) at viewport widths of 375px and above.
- **NFR19:** All interactive elements in the tech visit completion flow have a minimum touch target size of 44×44 CSS pixels.
- **NFR20:** The tech PWA is installable to the iOS and Android home screen via browser "Add to Home Screen" without requiring App Store or Google Play distribution.

---

## Go-to-Market Context (for Product Decisions)

*Non-binding context informing prioritization and design decisions:*

**Primary acquisition channels (Month 1–3):**
1. HVAC Facebook groups (organic posts + paid): "HVAC Business Owners Network" (50K+ members)
2. Reddit (r/HVAC, r/sweatystartup) — missed-visit calculator tool as top-of-funnel
3. AppSumo LTD launch (Month 3–4): 300 sales target

**Pricing (implemented in MVP):**

| Plan | Monthly | Annual | LTD |
|------|---------|--------|-----|
| Starter (≤50 agreements, 3 techs) | $49 | $470 (~$39/mo) | $79 |
| Pro (unlimited) | $79 | $758 (~$63/mo) | $129 |

**Key onboarding decisions implied by GTM:**
- Trial requires no credit card (reduces friction for community-acquired leads)
- CSV import is the primary onboarding path (not manual entry) — must be polished
- "Missed visit calculator" landing page is primary conversion tool; the in-app experience should mirror the calculator's "aha" moment on day one

---

*PRD generated autonomously from product brief and market research (2026-05-29). Ready for architecture and epic breakdown phases.*

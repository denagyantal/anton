---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/security-guard-company-scheduling.md
  - _bmad-output/planning-artifacts/market-research-security-guard-scheduling.md
  - _bmad-output/planning-artifacts/brief-security-guard-scheduling.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: workforce_management_security
  complexity: medium
  projectContext: greenfield
date: '2026-06-09'
author: Root
---

# Product Requirements Document — GuardPost

**Author:** Root
**Date:** 2026-06-09
**Product:** GuardPost — Security Guard Scheduling & Compliance Platform

---

## Executive Summary

Small security agencies (10–75 guards, 3–20 client sites) operate in a $47.8B US industry with no affordable, purpose-built software. Enterprise tools (TrackTik, Trackforce: $500–2,000+/month) target 200+ guard operations. Generic workforce apps (Connecteam: $29/month) handle scheduling but lack the four non-negotiable security workflows: digital post orders, QR patrol checkpoint verification, mobile incident reports, and overtime compliance alerts. 40,000+ small agencies run a fragmented paper-and-phone stack that creates compliance exposure, operational chaos, and client relationship risk.

**GuardPost** fills this gap with a mobile-first scheduling and compliance platform priced at $99/month (up to 25 guards) and $149/month (up to 75 guards). The MVP delivers three integrated workflows that eliminate the highest-pain points: shift scheduling with open-shift automation, digital post orders with guard acknowledgment gating clock-in, and mobile incident reports with timestamped photo evidence and instant supervisor notification.

**Revenue path:** AppSumo LTD launch (months 1–3) → $10K MRR at month 12 → Phase 2 QR patrol add-on at $19/month → upmarket expansion to 75–200 guard agencies in year 2.

### What Makes This Special

1. **Unclaimed price tier** — the only purpose-built security platform between Connecteam's generic $29/month and Silvertrac's $249/month floor.
2. **Post orders as lock-in** — once an agency digitizes per-site SOPs (unique emergency contacts, access procedures, patrol requirements), re-digitizing for a competitor is prohibitively painful; creates high switching costs from day one.
3. **Open-shift pool automation** — eliminates the #1 pain point (manual callout replacement by phone) that no affordable tool addresses. Owner gets coverage confirmation without a 40-minute fire drill at 11 PM.
4. **"Looks professional to clients" narrative** — patrol reports, digital incident logs, and post order acknowledgment records let small agencies compete for contracts against larger, established agencies. This is a direct revenue enabler, not just efficiency.
5. **AppSumo first-mover** — no security guard software has ever appeared on AppSumo. First listing creates category-defining awareness with zero paid acquisition cost.

### Project Classification

- **Project Type:** SaaS B2B — mobile-first (React Native guard app) + web dashboard (owner/dispatcher)
- **Domain:** Workforce management for security services
- **Complexity:** Medium — OT compliance rules (FLSA + state-specific CA/NY/IL), contractual documentation requirements, 24/7 operational reliability requirement
- **Context:** Greenfield

---

## Success Criteria

### User Success

**Guard mobile adoption:** >80% of guards at an agency actively use the mobile app for clock-in within 30 days of that agency's signup. Measured: in-app active users / total guards imported to roster. This is the single critical leading indicator — if guards don't adopt, the entire product fails for the owner.

**Callout fill time:** Agencies using open-shift automation reduce average callout fill time from 40+ minutes (manual phone calls) to <15 minutes (automated notification + guard self-assign). Measured: in-app time from shift marked uncovered to shift filled.

**Post order acknowledgment compliance:** >95% of shifts in an agency have a guard post order acknowledgment before clock-in within 60 days of agency setup. Measured: in-app acknowledgment log vs. scheduled shifts.

**OT cost reduction:** Agencies using OT alerts reduce overtime pay by 15–20% in the first full payroll cycle after adoption. Measured: customer survey at 60-day mark + case studies from early adopters.

**Incident report completeness:** >90% of incident reports include photo + timestamp + GPS location. Measured: in-app report metadata analysis.

### Business Success

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| AppSumo LTD sales | 200+ | Month 3 |
| Review rating | 4.5+ stars (Capterra/G2) | Month 3 |
| Active monthly subscribers | 50+ | Month 6 |
| Monthly churn rate | <5% | Month 6+ |
| MRR | $10K | Month 12 |
| New signups from referral | 30%+ | Month 12 |

**Go/No-Go Gates:**
- Gate 1 (30 days post-launch): 10 agencies with >70% guard adoption on mobile clock-in
- Gate 2 (60 days): 5 agencies document a specific, measurable improvement (faster callout fill, successful client audit using post order log, incident report delivered within minutes)
- Gate 3 (90 days): 200+ AppSumo LTD sales + 20 LTD customers on GPS add-on ($19/month) — confirms willingness to pay ongoing costs
- Gate 4 (6 months): Monthly churn <5% among agencies that completed full onboarding; if >8%, pause marketing, run 5 user interviews

**Leading indicators (weekly):** New trial signups, trial-to-subscription conversion rate, guard app DAU/MAU per agency, support ticket volume per agency.

### Technical Success

- 99.9% uptime maintained monthly (24/7 operations requirement — a site cannot go unstaffed due to software failure)
- Open-shift push notifications delivered within 60 seconds for 95% of sends
- Guard mobile app core screens load within 2 seconds on 4G connection
- Incident photo upload completes within 5 seconds on 4G connection; auto-retries on network failure
- Zero cross-tenant data exposure — tenant isolation validated in every deploy

---

## Product Scope

### MVP — Phase 1 (Months 1–3)

**MVP philosophy:** Revenue MVP — ship the three workflows that solve the three most acute pain points, validate that agencies pay, then layer complexity onto a proven foundation.

**Must-have capabilities:**
- Shift scheduling with conflict detection and OT threshold alerts
- Open-shift pool: broadcast uncovered shifts to available guards; guards self-assign; owner confirmed
- Digital post orders: per-site PDF upload, version control, mandatory guard acknowledgment before clock-in
- Post order acknowledgment log: timestamped, exportable PDF for client audits
- Mobile clock-in/clock-out with GPS stamp and post order gate
- Mobile incident reports: photo (required) + incident type + description + GPS + auto-timestamp
- Instant supervisor notification (push + email) on incident submission
- Incident log: searchable, filterable, exportable PDF per report
- Per-guard OT threshold alert before scheduling breach
- Guard mobile app (iOS + Android) with zero-training clock-in flow
- Owner/dispatcher web dashboard + mobile access
- SMS + push notifications via Twilio
- Stripe billing: $99/month (≤25 guards) + $149/month (≤75 guards)
- Account management: guard roster import (CSV), site configuration, role assignment

**Supported user journeys in MVP:** Owner/dispatcher full scheduling loop; guard clock-in/out with post order gate; guard incident report from field; owner callout replacement via open-shift pool.

### Phase 2 — Proof of Service (Months 4–6)

- QR/NFC patrol checkpoint scanning — guards scan physical stickers at each checkpoint during rounds
- Auto-generated patrol report — assembled after each shift with all checkpoint scans, timestamps, gap flagging; emailed to client contact
- Client portal (read-only) — site managers view real-time patrol status, incident history, scheduled guard info
- GPS add-on billing: $19/month per agency (checkpoint infrastructure costs)

**Unlock condition:** Gate 3 passed (200+ AppSumo sales, 20 customers on GPS add-on interest list).

### Phase 3 — Operational Excellence (Months 9–18)

- Payroll integration: QuickBooks, Gusto clock-in/out data sync (CSV export as bridge until then)
- Guard certification tracking: license expiry alerts, prevent scheduling uncertified guards to sites requiring specific certs
- Multi-language guard interface (Spanish first)
- White-label mode for franchise security companies
- Advanced analytics: operational reporting, per-client SLA dashboards
- Predictive scheduling: AI schedule suggestions based on OT proximity, availability, cert requirements

### Out of Scope (All Phases)

- Desktop-only workflows — entire product is mobile-first; desktop is secondary
- Video guard tour verification (AI/CCTV territory)
- Alarm monitoring integration
- Guard staffing marketplace / temp agency model
- Biometric clock-in (face recognition) — future differentiator, not MVP

---

## User Journeys

### Journey 1: Marcus — The 11 PM Callout (Owner-Operator Primary Path)

Marcus runs a 15-guard company. It's 11:15 PM. A guard texts that he can't make the 6 AM hospital lobby shift. In the old world, Marcus calls 8–10 guards, waking people up, before finding coverage — a 40-minute fire drill that happens weekly.

With GuardPost: Marcus opens the app, marks the 6 AM shift as uncovered, and selects "Notify available guards." The system checks which guards are not already scheduled for overlapping shifts and broadcasts a push notification + SMS: "Open shift available: Mon 6 AM – 2 PM, General Hospital. Tap to claim." Three guards receive it. One accepts within 12 minutes. Marcus gets a confirmation push: "Shift filled — Robert Garcia." He goes back to sleep.

**Journey reveals requirements for:** Conflict-aware availability detection, open-shift broadcast (push + SMS), guard self-assign from mobile, owner confirmation notification, real-time shift status updates.

---

### Journey 2: Diana — The Government Client Audit (Operations Manager)

Diana manages 45 guards for an agency with two government building contracts. One contract has a quarterly audit requirement: digital records of guard assignments, post order versions, and incident reports. In the old world, Diana spends 4 hours exporting spreadsheets and compiling PDF packets manually.

With GuardPost: The auditor requests documentation for Building A, Q1. Diana logs into the web dashboard, filters the Post Order Acknowledgment Log by site and date range — every guard who worked Building A can be seen with which version of the post order they acknowledged and when. She filters the incident log for the same site and range. She exports both as PDFs in under 5 minutes and emails them. The auditor confirms receipt: "This is exactly what we needed."

Two weeks later, Diana pitches a new government building contract. She shows the prospective client a sample patrol report (from Phase 2 capability) and the acknowledgment log structure. The client awards the contract citing GuardPost's documentation as a differentiator.

**Journey reveals requirements for:** Post order versioning, per-site acknowledgment log with date-range filter and PDF export, incident log with site+date filter, client-facing export format.

---

### Journey 3: Robert — The 30-Second Incident Retrieval (Compliance Agency)

Robert runs 35 guards with a hospital and school district contract. At 2:30 PM, the hospital's security director calls: "We had a visitor altercation at the main entrance last Thursday around 1 PM. I need the incident report within the hour." In the old world, Robert hunts for the paper form. It has no timestamp. The guard's handwriting is illegible. He calls the guard. 45 minutes later, he has a partial account.

With GuardPost: Robert opens the incident log, filters by site (General Hospital), date (last Thursday), and time window (12–2 PM). The report appears instantly: photo of the scene, description typed by the guard at 1:17 PM, GPS confirming the guard was at the main entrance, supervisor acknowledgment timestamp. Robert exports the formatted PDF and emails it in under 3 minutes. The hospital security director: "This is exactly what I needed. How quickly can we extend the contract?"

**Journey reveals requirements for:** Timestamped incident reports, incident search/filter by site + date + time, formatted PDF export, supervisor acknowledgment trail.

---

### Journey 4: Guard Carlos — First Shift at a New Site (Guard Mobile Primary Path)

Carlos has worked for the agency for 6 months but has never worked the downtown office building site. He opens the GuardPost app on Monday morning, sees his shift (9 AM – 5 PM, Downtown Plaza). He taps "Clock In." The app shows a modal: "Post Order — Downtown Plaza. Read before clocking in." He scrolls through the 4-page PDF covering emergency exits, access card procedures, visitor log requirements, and the client contact for escalations. At the bottom: "I confirm I have read this post order." He taps confirm. The clock-in button activates. He clocks in. The system logs: Carlos Rodriguez acknowledged Downtown Plaza Post Order v3 at 8:57 AM.

If a guard tries to skip by tapping away without scrolling: the confirm button remains inactive until the scroll reaches the bottom.

**Journey reveals requirements for:** Per-site post order delivery in mobile app, scroll-to-bottom gate before confirm button activates, acknowledgment logged with version and timestamp, clock-in blocked until acknowledgment recorded.

---

### Journey 5: Guard Maria — Field Incident Report (Guard Edge Case)

At 11:40 PM, Maria is patrolling a retail center when she finds a broken window on the east side of the building. She taps the GuardPost app's "Report Incident" button. The incident form is pre-filled with her identity, current site, and shift. She selects incident type: "Property Damage." She takes a photo of the window — required before submission is enabled. She adds: "East entrance, Window 3. Appears to have been struck by a vehicle. No persons on scene." She taps Submit.

Her supervisor receives a push notification at 11:41 PM: "Incident submitted — Maria at Westfield Retail. Property Damage." He taps through to review the photo and description and sends Maria a push: "Acknowledged. Continue patrol, contact me if situation changes."

**Journey reveals requirements for:** One-tap incident report from active shift context, required photo capture before submission, pre-populated fields (guard, site, shift), supervisor push notification within 60 seconds, supervisor acknowledgment feedback to guard.

---

### Journey Requirements Summary

| Journey | Core Capabilities Revealed |
|---------|---------------------------|
| Marcus – 11 PM callout | Open-shift broadcast, availability conflict detection, guard self-assign, owner confirmation |
| Diana – government audit | Post order versioning, acknowledgment log export, incident log filter + export |
| Robert – incident retrieval | Timestamped reports, search/filter, formatted PDF, supervisor trail |
| Carlos – new site clock-in | Post order mobile delivery, scroll gate, acknowledgment logging, clock-in block |
| Maria – field incident | Mobile incident capture, required photo, supervisor notification, acknowledgment reply |

---

## Domain-Specific Requirements

### OT Compliance

Security agencies are disproportionately affected by overtime regulations due to 24/7 post coverage requirements.

- System must support configurable OT thresholds per guard per pay period (default: 40 hours/week FLSA)
- System must support daily OT threshold configuration for CA-law compliance (>8 hours/day triggers OT)
- System must alert dispatcher before confirming any schedule change that would push a guard past their configured threshold
- System must track OT hours in real time against the active pay period (not discovered at payroll)
- OT threshold configuration must be per-agency, not global — agencies operating in multiple states may have different rules per site

### Guard Licensing & Certification

State-issued guard licenses have expiry dates; some client sites contractually require specific certifications.

- System must store license expiry dates per guard (data field, not automated retrieval)
- System must alert owner/dispatcher when a guard's license is within 30 days of expiry
- System must prevent scheduling an uncertified guard to a site marked as requiring that certification (Phase 3 — tracked as field in Phase 1)
- For MVP: certification fields are stored and displayed; enforcement logic is Phase 3

### Documentation & Data Retention

Security agencies face subpoena risk, client audit requirements, and insurance claims that require historical records.

- Incident reports must be retained for a minimum of 7 years (legal/insurance standard)
- Post order acknowledgment logs must be retained for the life of the agency account + 7 years
- Clock-in/clock-out records must be retained for a minimum of 3 years (FLSA wage records)
- Records must not be deletable by the agency owner — soft-delete only (marked inactive, not purged)
- All timestamps in stored records must use UTC with agency timezone display

### Privacy & Guard Data

- Guard GPS data captured at clock-in/out and incident reports is used for operational verification only — not sold, not shared with third parties
- Guards must be notified at app onboarding that GPS location is captured at clock-in, clock-out, and incident submission
- Agency data is logically isolated; no cross-agency data access is permitted at any layer
- Guard personal data (name, phone, email) is handled per applicable state privacy laws (CCPA for CA-based guards)

---

## SaaS B2B Platform Requirements

### Multi-Tenancy

- Each agency is a fully isolated tenant — guard rosters, sites, schedules, post orders, and incident reports are never co-mingled
- Tenant isolation enforced at the database query layer, not just application layer
- Agency admin (owner) can manage all data within their tenant; no cross-tenant visibility at any permission level

### Role-Based Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full access: billing, account settings, all data, all exports |
| Dispatcher | Scheduling, post orders, incident viewing/export, roster management — no billing |
| Guard | Mobile only: schedule view, clock-in/out (with post order gate), incident submission, open-shift self-assign |

- Owner can assign Dispatcher role to up to 5 additional users per subscription tier
- Guard role is automatically assigned on app invitation acceptance
- Guards cannot view other guards' schedules, contact info, or incident reports

### Notification Infrastructure

- Push notifications: delivered via APNs (iOS) and FCM (Android)
- SMS fallback: delivered via Twilio when push notification is not confirmed within 5 minutes (configurable per notification type)
- Notification types: open-shift broadcast, shift assignment, schedule change, incident submitted (to supervisor), post order updated (to guard on next login)
- Owner/dispatcher can configure notification preferences per event type

### File Storage & Management

- Post order PDFs: stored in cloud object storage (S3/R2), versioned per site
- Incident photos: stored with access control per agency tenant
- Schedule exports: generated on-demand as PDFs, not stored persistently
- Acknowledgment log exports: generated on-demand, cached for 24 hours
- Maximum post order PDF size: 25MB per document

### Billing & Subscription

- Stripe integration: monthly billing, credit card only at launch
- Plans enforced by guard count (soft limit with warning at 90% capacity, hard limit at tier max + 10% buffer)
- Free trial: 30 days, full feature access, no credit card required at signup
- LTD plan (AppSumo): same as $99/month plan features, no guard count limit up to 25, lifetime access
- $19/month GPS add-on: activates Phase 2 checkpoint features per agency, billed additionally

---

## Functional Requirements

### Guard Roster Management

- FR1: Owner/dispatcher can add guards to the agency roster with name, phone number, and email address
- FR2: Owner/dispatcher can import a guard roster from a CSV file (name, phone, email columns)
- FR3: Owner/dispatcher can assign roles to roster members (dispatcher or guard)
- FR4: Owner/dispatcher can deactivate a guard without deleting their historical records (schedule history, acknowledgments, incident reports)
- FR5: Owner/dispatcher can configure a per-guard weekly OT threshold (hours before overtime applies)
- FR6: Owner can configure a daily OT threshold at the agency level for state-law compliance

### Client Site Management

- FR7: Owner/dispatcher can create client sites with name, street address, and primary client contact information
- FR8: Owner/dispatcher can upload a PDF post order document for a specific site
- FR9: When a site's post order is updated, the system automatically archives the previous version and marks the new version active
- FR10: Owner/dispatcher can view the full version history of a site's post order with upload timestamps
- FR11: Owner/dispatcher can mark a site as requiring specific guard certifications (free-text field, enforcement in Phase 3)

### Shift Scheduling

- FR12: Owner/dispatcher can create a shift by assigning a guard to a site, date, start time, and end time
- FR13: Owner/dispatcher can view a weekly schedule grid showing all guards across all sites
- FR14: Before a shift is saved, the system validates and flags: guard already scheduled for overlapping time, shift would push the guard past their configured OT threshold
- FR15: Owner/dispatcher can override a flagged conflict with explicit confirmation
- FR16: Owner/dispatcher can mark a scheduled shift as uncovered (guard called out)
- FR17: Owner/dispatcher can export the weekly schedule as a PDF

### Open-Shift Automation

- FR18: When a shift is marked uncovered, owner/dispatcher can trigger an open-shift broadcast to all qualified available guards (not already scheduled for that time window)
- FR19: Broadcast delivers push notification and SMS to each eligible guard with shift details (site, date, time)
- FR20: Guards can self-assign to a broadcasted open shift from the mobile app
- FR21: When a guard self-assigns to an open shift, the system updates the schedule and sends a confirmation notification to the owner/dispatcher
- FR22: Owner/dispatcher can view a real-time list of which guards received, viewed, and responded to an open-shift broadcast

### Overtime Compliance

- FR23: System displays a running OT hours tracker per guard showing hours worked in the current pay period vs. configured OT threshold
- FR24: Before confirming any schedule addition, the system calculates projected total hours for the pay period and alerts the dispatcher if the addition would breach the guard's OT threshold
- FR25: OT alert includes the projected overage amount and suggests alternative available guards not approaching their threshold

### Digital Post Orders

- FR26: When a guard opens a shift's clock-in screen, the current post order for that site is displayed in a scrollable viewer before clock-in is available
- FR27: The clock-in button is locked until the guard scrolls to the bottom of the post order document and taps an explicit acknowledgment
- FR28: Each post order acknowledgment records: guard identity, site, post order version, acknowledgment timestamp — this record is immutable
- FR29: Owner/dispatcher can view a list of all post order acknowledgments filterable by site, guard, date range, and post order version
- FR30: Owner/dispatcher can export the filtered acknowledgment list as a formatted PDF for client audits

### Clock-In / Clock-Out

- FR31: Guards can clock in to their scheduled shift from the mobile app — clock-in is blocked if the post order has not been acknowledged
- FR32: Guards can clock out from the mobile app at the end of their shift
- FR33: Clock-in and clock-out events are recorded with GPS coordinates, device timestamp, and guard identity
- FR34: Owner/dispatcher can view the real-time clock-in status of all guards across all active shifts on the dashboard
- FR35: Owner/dispatcher receives an alert when a guard's scheduled shift start time passes with no clock-in recorded (configurable threshold, default: 10 minutes)

### Mobile Incident Reporting

- FR36: Guards can initiate an incident report from the mobile app; the form pre-populates with guard identity, current site, and active shift
- FR37: Incident report requires at minimum: incident type (selectable), at least one photo, text description — submission is blocked if photo is missing
- FR38: Incident report automatically captures GPS coordinates and device timestamp at submission
- FR39: Within 60 seconds of an incident report submission, the system sends a push notification and email to the agency's owner and all dispatchers with a link to the report
- FR40: Owner/dispatcher can search incident reports by site, date range, guard, and incident type
- FR41: Owner/dispatcher can export a single incident report as a formatted PDF including photo, all metadata, and a supervisor acknowledgment field

### Reporting & Dashboard

- FR42: Owner/dispatcher dashboard displays: active shifts currently clocked in, uncovered shifts requiring attention, guards approaching OT threshold, and recent incident activity
- FR43: Owner/dispatcher can view a pay-period OT summary showing total hours per guard vs. threshold
- FR44: Owner/dispatcher can download all incident reports for a specified site and date range as a combined PDF packet

### Account & Billing Management

- FR45: Owner can manage the agency account: business name, billing information, subscription tier
- FR46: Owner can invite additional dispatchers via email; invited users receive a link to create an account with dispatcher role scoped to the owner's agency
- FR47: System enforces subscription tier guard count limits; owner is alerted when the agency reaches 90% of the tier's guard capacity
- FR48: Guards receive a mobile app invitation via SMS/email from the owner; guard app setup requires no web browser access

---

## Non-Functional Requirements

### Performance

- Guard mobile app core screens (schedule view, clock-in, incident report form) load within 2 seconds on a 4G connection as measured by median p50 response time
- Incident report submission (including photo upload) completes within 5 seconds on a 4G connection for 95th percentile as measured by end-to-end request timing
- Open-shift push notifications are delivered within 60 seconds of trigger for 95% of sends as measured by push notification delivery receipt
- Web dashboard schedule grid loads within 3 seconds for agencies with up to 75 guards and 20 sites as measured by Time to Interactive

### Reliability

- System maintains 99.9% uptime measured monthly (allows ~43 minutes downtime/month) — 24/7 security operations cannot tolerate extended outages
- Incident photo upload retries automatically up to 3 times on network failure before notifying the guard of upload failure
- Clock-in/out events are queued locally on the mobile device and submitted on connectivity restoration (offline tolerance for clock events)
- Scheduled maintenance windows, if required, must not occur during 10 PM – 6 AM local time for any US timezone (peak overnight shift window)

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3 minimum)
- Tenant data is logically isolated at the database query layer — row-level tenant filtering enforced for all data access
- Guard GPS coordinates and personal data (name, phone, email) stored under access controls restricting read to the agency tenant and authenticated system processes
- Authentication: email + password with minimum 8-character requirement; optional MFA (TOTP) for owner and dispatcher roles
- Session tokens expire after 30 days of inactivity for dispatcher/owner web sessions; 90 days for guard mobile sessions (to reduce re-login friction for non-desk workers)
- Incident report photos are stored with agency-scoped access controls — not publicly accessible via URL

### Scalability

- System supports 500 concurrent agency accounts at launch without performance degradation
- Architecture supports 10x agency growth (to 5,000 agencies) through horizontal scaling without schema changes
- Push notification throughput supports 10,000 concurrent open-shift broadcast events without queuing delay exceeding 60 seconds

### Mobile Platform

- Guard mobile app available on iOS 14+ and Android 10+
- Guard app schedule view and last-viewed post order are cached locally and accessible without active internet connection
- Guard app new user flow (first login → view schedule → acknowledge post order → clock in) is completable within 5 minutes without any external tutorial or support contact — validated by usability testing with 5 non-technical guards before launch

### Integration

- Twilio SMS: all outbound SMS routed through Twilio; delivery failure logged and surfaced to owner/dispatcher dashboard
- Stripe: subscription billing and plan enforcement; webhook handling for payment failures with grace period of 7 days before account suspension
- CSV import: guard roster import supports UTF-8 encoded CSV with headers; duplicate phone numbers rejected with clear error message
- PDF export: all exported documents (post order logs, incident reports, schedules) must render correctly in Adobe Acrobat, macOS Preview, and Google Drive Viewer

---

*PRD completed: 2026-06-09*
*Next step: Architecture — `/bmad-bmm-create-architecture`*
*This PRD feeds: UX design, technical architecture, epics & stories, AutoMVP implementation*

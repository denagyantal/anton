---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/childcare-center-management.md
  - _bmad-output/planning-artifacts/product-brief-childcare-center-management.md
  - _bmad-output/planning-artifacts/research/market-childcare-center-management-research-2026-06-01.md
workflowType: prd
research_type: prd
research_topic: childcare-center-management
user_name: Root
date: 2026-06-01
classification:
  projectType: saas_b2b
  domain: edtech_childcare
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — KinderDesk

**Author:** Root
**Date:** 2026-06-01
**Version:** 1.0

---

## Executive Summary

KinderDesk is a flat-rate, full-stack childcare center management platform targeting the 65,000+ independent licensed childcare centers and 120,000+ family childcare homes in the US that are systematically abandoned by the two dominant market players. Procare Solutions — acquired by private equity (Roper Technologies, $1.86B, January 2024) — is actively failing its customers through chronic downtime, 45-minute+ support hold times, and opaque pricing that escalates a "$50/month subscription" to $200+ all-in. Brightwheel (unicorn, $88.8M raised) has deliberately exited the small operator segment, restricting support to weekday chat-only and driving per-child pricing that punishes enrollment growth.

No full-featured, compliance-capable platform exists at a transparent flat rate for centers with 10–80 children. KinderDesk fills this gap at $49–79/month with four capabilities no competitor offers simultaneously: 1-tap bulk daily reports (primary UX differentiator), real-time staff ratio alerts (primary compliance differentiator), human phone support (primary trust differentiator), and transparent published pricing (primary acquisition differentiator).

**Target:** 100 paying centers at $5,500 MRR within 12 months. 500 centers at $27,500+ MRR subscription revenue (plus $42,000–$93,750/month gross payment processing) within 24 months.

### What Makes This Special

The core insight: childcare software buyers are not price-sensitive to software — they are price-sensitive to *total cost of pain*. Procare's true cost is not $50/month; it's $200/month in fees plus 45 minutes of lost productivity per day in failed support calls and per-child daily report entry. KinderDesk's value proposition is not "cheaper software" — it is "the same outcome for less total pain."

The primary UX differentiator — 1-tap bulk daily reports — addresses the single most time-consuming daily task for every center director. Every competitor requires per-child data entry. A 30-child center saves 30–45 minutes per day (275+ hours per year) with this one feature. It is immediately demonstrable, immediately comprehensible, and creates an "aha!" moment in the first week that drives retention and word-of-mouth.

The phone support promise is a positioning statement that no competitor can currently match without architectural changes. "We pick up the phone" costs nothing to say and generates trust in Facebook group discussions — the primary discovery channel for childcare operators.

## Project Classification

- **Project Type:** SaaS B2B — multi-sided platform (center directors as buyers, parents as users, staff as operators)
- **Domain:** Childcare center management / edtech compliance software
- **Complexity:** Medium — state compliance fragmentation (50 states, different ratio requirements) adds domain complexity; core product workflows are well-understood
- **Project Context:** Greenfield new product
- **Regulatory exposure:** State licensing compliance (attendance records, incident reports, staff ratios), federal CACFP food program (Phase 2), FERPA-adjacent child data handling

---

## Success Criteria

### User Success

Center directors experience measurable relief from the top three daily pain points within the first week:

1. **Daily report time:** Directors complete daily reports for a 30-child classroom in under 10 minutes (vs. 40–45 minutes on Procare). Measured via in-app session timing. Target: <10 minutes at 90-day post-launch.
2. **Ratio alert activation:** At least 5 directors per 100 report the ratio alert caught a staffing gap they would have missed. Measured via in-app event log + director survey. Validates the #1 compliance feature.
3. **Support resolution:** Average support response time under 1 hour. Measured via ticket/call timestamps. Target: <1 hour at all times; <30 minutes within 6 months.

Parent adoption confirms the dual-sided value: target 75%+ of enrolled children at each center have an active parent account within 30 days of center onboarding.

### Business Success

| Milestone | Target |
|-----------|--------|
| Month 6: Paying centers | 25 |
| Month 6: MRR | $1,375 |
| Month 12: Paying centers | 100 |
| Month 12: MRR (subscription) | $5,500 |
| Month 12: Monthly churn | <3% |
| Month 12: Capterra/G2 reviews | 50+, averaging 4.5+ stars |
| Month 12: AppSumo LTD sold | 200+ |
| Month 24: Paying centers | 500 |
| Month 24: MRR (subscription) | $27,500 |
| Month 24: Payment processing adoption | 80%+ of centers |
| Month 24: Gross payment processing revenue | $42,000–$93,750/month |

**Go/No-Go gate at month 6:** 25+ paying centers, <5% monthly churn, NPS 40+, 3+ documented peer referrals from Facebook groups → proceed to CACFP integration build and AppSumo launch.

### Technical Success

- **Reliability:** System uptime 99.9%+ during business hours (6am–8pm local center time). Downtime during morning check-in (7–9am) is a critical failure — must be treated as severity-1 incident.
- **Data integrity:** Zero lost attendance records. Compliance data (attendance, incidents, ratio logs) must be ACID-compliant with point-in-time recovery.
- **Performance:** Check-in QR scan → confirmation in under 2 seconds. Daily report submission → parent push notification in under 30 seconds.
- **Onboarding speed:** Centers complete setup (classrooms, enrollment import, kiosk configuration) in under 2 hours with guided support.

### Measurable Outcomes

- **Trial → paid conversion:** 35%+ of trial signups convert to paid within 14 days
- **Time-to-first-check-in:** <24 hours from signup (measures onboarding success)
- **Support contact rate:** <15% of centers per month (measures product clarity)
- **Facebook group organic mentions:** 5+ unprompted recommendations per month by month 6
- **Director NPS:** 50+ at month 12, 60+ at month 24

## Product Scope

### MVP — Minimum Viable Product (4–6 Week Build)

The MVP proves the core value proposition with the minimum set of capabilities required for a licensed center to operate compliantly. Every feature below has a direct compliance or daily-operations justification — none are aspirational.

**Core Capabilities:**

1. **Digital Check-In / Check-Out Kiosk** — iPad/tablet app (software-only). Parent QR code scan at drop-off and pick-up; auto-timestamps attendance records; notifies parent app on event; staff PIN override for emergencies. *Rationale: Attendance records are non-optional for licensed centers; digital check-in is the first feature evaluated.*

2. **1-Tap Bulk Daily Report** — Single screen: select classroom → tap activity/meal/nap status for all children simultaneously; individual override per child; report auto-delivered to parent app on submission; optional classroom-level photo attachment. *Rationale: Primary UX differentiator; 30–45 minutes of daily time savings per center; creates "aha!" moment in week 1.*

3. **Real-Time Staff Ratio Alert** — Director assigns staff to classrooms at start of day; system monitors staff-to-child ratio continuously as check-ins occur; push notification to director when ratio approaches state threshold (configurable per state); dashboard shows current ratio status across all classrooms. *Rationale: #1 compliance anxiety; absent from all major competitors; drives the most powerful "aha!" moment.*

4. **Parent App (iOS + Android)** — Push notifications for check-in/out; daily report viewing; photos; monthly invoice payment (ACH/card); direct messaging with director. *Rationale: Dual-sided product — parent adoption is the enrollment retention lever.*

5. **Automated Monthly Billing** — Director sets enrollment fee per child; system generates monthly invoices; parents pay via ACH (1.5% fee) or card (2.9% fee); payment status dashboard; overdue reminders. *Rationale: Tuition collection is the most painful admin task for solo directors; payment processing is primary long-term revenue.*

6. **Incident Report Log** — Director/staff files report with: date/time, child, description, actions, parent notification; photo attachment for visible injuries; parent acknowledgment required via app; PDF export for state audits. *Rationale: State licensing requirement; liability protection; if not logged, it didn't happen legally.*

7. **State Ratio Configuration (TX + CA launch)** — Pre-loaded ratio requirements for Texas and California; director selects state during onboarding; ratios apply automatically to alert thresholds. *Rationale: Ratio alerts require correct state thresholds; TX and CA represent the two largest licensed center markets.*

8. **Phone Support Included** — Every plan includes phone access during business hours. Support is KinderDesk's brand identity, not a feature tier. *Rationale: The single most cited failure mode of every competitor is unreachable support.*

**Pricing (MVP):**
- $49/month — up to 20 enrolled children, unlimited staff, 1 classroom
- $79/month — up to 80 enrolled children, unlimited staff, up to 4 classrooms
- 14-day free trial, no credit card required
- Payment processing: 1.5% ACH, 2.9% card (market standard)

### Growth Features (Post-MVP, Months 7–12)

- **CACFP meal tracking and report export** — Federal food program integration; one-click monthly CACFP report; targets 50,000+ CACFP-participating centers and creates referral partner channel with CACFP sponsor organizations
- **Parent tour scheduling and waitlist** — Addresses confirmed ChildPilot gap; director-side lead management
- **QuickBooks integration** — P&L export for directors who use QuickBooks; matches ChildPilot positioning
- **AppSumo LTD launch** — First childcare management software on AppSumo; $79–119 LTD tiers; target 200+ buyers in launch campaign
- **State expansion** — Add NY, FL, IL, WA, CO based on inbound customer geography requests
- **Web-based parent portal** — No-download fallback for parents who won't install the app; reduces dual-sided adoption friction

### Vision (Future, Months 13–36)

- **Payment processing flywheel** — At 200+ centers, processing becomes primary revenue; each center generates $120–375/month gross processing revenue above subscription
- **CCDF/subsidy billing automation** — State voucher reconciliation as premium tier; high-value for high-subsidy-participation states
- **Multi-site dashboard** — 2–5 location chains at $150–400/month multi-site tier
- **Embedded financial products** — Tuition financing, staff advance pay, working capital loans underwritten against KinderDesk billing data
- **International expansion** — UK, Australia, Canada have near-identical regulatory structures and dominant-incumbent-failing patterns

---

## User Journeys

### Journey 1: Maria — The Solo Director-Owner (Primary User, Happy Path)

Maria runs a 30-child licensed center in suburban Texas. She's the director, administrator, and part-time teacher — she handles everything from enrollment to state paperwork, often until 7pm.

**Before KinderDesk:** She's been on Procare four years. Two billing outages this year forced her to collect cash at drop-off. A two-hour hold time last March meant she couldn't resolve a payment dispute before a parent left angry. She spends 45 minutes every afternoon updating daily reports child-by-child. She pays $120/month all-in for what was advertised as $50/month.

**Discovery (Day 0):** Maria posts in "Daycare Owners" Facebook group: "Does anyone use anything besides Procare? I'm so tired of the hold times." A peer responds: "Switched to KinderDesk 3 months ago — $49/month flat, they actually pick up the phone. Check it out." Maria clicks the link.

**Evaluation (Day 0–1):** She lands on the pricing page — no demo required, pricing clearly stated. She compares $49/month to her current $120/month. She reads two Capterra reviews from other Texas-based centers. She signs up for the 14-day trial with her email only.

**Onboarding (Day 1):** A KinderDesk support rep calls her within 2 hours of signup to schedule a 30-minute onboarding call. On the call, they walk through importing her enrollment list (CSV upload), setting up two classrooms, and showing her the 1-tap daily report feature. She sets up her iPad as the check-in kiosk.

**First week:** Staff trained in 20 minutes — the kiosk is just a QR code scanner. Parents download the app after Maria sends an invite link from the system. First afternoon, she does daily reports for 30 kids in 8 minutes. It's the first time she's done it in under 20.

**Aha! moment (Day 4):** The ratio alert fires when a staff member calls in sick. Her infant room is approaching the 1:4 Texas limit. She resolves it in 10 minutes by calling in a backup. Without the alert, she would have been in violation for 40 minutes before noticing.

**Long-term:** Maria stops thinking about software. At month 3, she posts in her Facebook group recommending KinderDesk when a peer complains about Procare. This generates KinderDesk's first peer referral conversion.

**Capabilities revealed:** QR check-in kiosk, enrollment import, classroom setup, bulk daily reports, ratio alerts, staff invite, parent app invite, support phone access.

---

### Journey 2: Maria — Edge Case (Compliance Incident During Peak Hours)

It's Wednesday morning, 8:15am. Maria has 22 children checked in across two classrooms. A parent calls: their child was involved in a minor incident (fell and scraped a knee) at 8:05am, and no one called them.

**What KinderDesk must do:**
- The staff member who witnessed the incident opens the incident report from their tablet
- Fields: child (dropdown from checked-in list), time (auto-filled from system), description, actions taken
- Photo of the minor injury attached from the tablet camera
- Parent notification sent automatically to the parent app — parent must acknowledge receipt
- Maria receives a notification that the incident report is filed and acknowledged
- PDF export available for state audit records

**Failure scenario:** Parent doesn't have the app. System falls back to email notification. Parent still must acknowledge. If no acknowledgment within 1 hour, Maria receives an alert to follow up directly.

**Capabilities revealed:** Incident report filing from staff devices, photo attachment, parent notification with acknowledgment required, fallback to email, director alert on non-acknowledgment, PDF export.

---

### Journey 3: James — CACFP-Participating Family Childcare Home Provider (Phase 2 Primary User)

James operates a licensed family childcare home in California with 8 children. He participates in CACFP (the federal food program) and tracks meals manually in a paper logbook. Monthly CACFP reporting takes him 3–4 hours.

**Phase 2 discovery (not MVP):** James finds KinderDesk through the CACFP sponsor organization newsletter — KinderDesk has become a recommended platform because of its CACFP export feature.

**His journey:** He signs up for the $29/month home provider tier. During setup, he selects "CACFP participant." The system activates meal tracking fields on the daily report — he logs breakfast, lunch, and snack for each child. At the end of the month, one button generates the CACFP meal count report in the sponsor's required format. 3–4 hours becomes 5 minutes.

**Capabilities revealed (Phase 2):** Home provider pricing tier, CACFP participation toggle, meal count tracking per child per meal, CACFP monthly report export in sponsor format.

---

### Journey 4: Denise — Multi-Classroom Director Switching from Brightwheel (Secondary Primary User)

Denise manages a 65-child licensed center in New York City with 8 staff across two classrooms. She's actively evaluating alternatives to Brightwheel — her per-child pricing has climbed to $195/month as her enrollment grew, support is unavailable on weekends, and she has no ratio monitoring.

**Discovery:** She searches "Brightwheel alternative small center" and lands on KinderDesk's comparison page. The side-by-side shows: Brightwheel $195/month vs. KinderDesk $79/month, flat. She requests a trial.

**Evaluation focus:** She needs the parent app to be as good as Brightwheel's (daily reports, photos, messaging), and she needs ratio alerts for New York's 1:4 infant ratio. She wants to see multi-classroom view in the director dashboard.

**Onboarding:** She has a billing coordinator who will manage the parent billing side. Support walks through the classroom setup for two rooms with separate staff assignment. The ratio configuration is set to New York's infant ratio.

**Decision point:** She tests the parent app with three staff members and five test parent accounts for one week. The parent app is functional — daily reports, photos, check-in notifications. The ratio alerts work correctly. She converts to paid and cancels Brightwheel.

**Capabilities revealed:** Multi-classroom dashboard, per-classroom staff assignment, state ratio configuration, parent app comparable UX, administrator account with billing coordinator role.

---

### Journey 5: Admin / Operations — KinderDesk Onboarding Agent

A KinderDesk support agent receives a new trial signup from a Texas-based center with 45 enrolled children.

**What the agent needs:**
- Internal admin dashboard: view new trial signups, center details, enrollment count, state
- One-click initiation of onboarding call scheduling
- Ability to import enrollment CSV on behalf of the center (hand-holding for non-technical directors)
- View the center's current setup status: classrooms configured? Kiosk activated? First check-in completed? Parents invited?
- Flag at-risk trials (e.g., no check-in after 5 days) for proactive outreach

**Capabilities revealed:** Internal admin dashboard, trial status tracking, setup progress indicators, onboarding agent tools, at-risk trial alerts.

### Journey Requirements Summary

The five journeys above reveal the following capability areas:

| Capability Area | Revealed By |
|----------------|-------------|
| Check-in / attendance | Journeys 1, 2, 5 |
| Daily reporting (bulk) | Journeys 1, 3 |
| Staff ratio monitoring | Journeys 1, 4 |
| Incident management | Journey 2 |
| Parent communication & app | Journeys 1, 2, 4 |
| Billing & invoicing | Journey 1 |
| CACFP meal tracking | Journey 3 (Phase 2) |
| Multi-classroom management | Journey 4 |
| Admin / internal operations | Journey 5 |
| Compliance export / PDF | Journeys 2, 3 |

---

## Domain-Specific Requirements

### Compliance & Regulatory

KinderDesk operates at the intersection of state childcare licensing law and federal food program regulation. Compliance is not a feature — it is the product's reason to exist.

**State licensing compliance (all states where KinderDesk operates):**
- Attendance records must be date/time-stamped, immutable once created, and retained for a minimum of 3 years (state requirement varies from 1–5 years; retain 5 years to cover all states)
- Staff-to-child ratio requirements are state-specific and must be configurable per state; incorrect ratio thresholds are a safety liability
- Incident reports must capture all required fields (child, date/time, description, actions, parent notification) and be exportable in PDF format for state inspectors
- Drop-off and pick-up authorization: only authorized adults may check out a child; system must support authorized pickup list per child with photo verification option

**FERPA-adjacent child data handling:**
- Children's names, photos, and health information are protected; access must be role-restricted (staff see only their classroom children; parents see only their child)
- Data deletion must be supported within 30 days of a center terminating their subscription (GDPR-style right to erasure for child data)
- Photos shared in daily reports must be stored securely and not indexable by search engines

**CACFP (Phase 2):**
- Meal tracking must log meal type (breakfast/lunch/snack/supplement), serving count per child, and date — in the format required by USDA's CACFP meal pattern requirements
- Monthly meal count reports must export in the format required by the state's CACFP sponsor organization (format varies by sponsor; must be configurable)
- Meal records must be retained for 3 years (federal requirement)

**Payment processing compliance:**
- ACH processing requires compliance with NACHA rules: authorization collection, return handling, reversal management
- Card processing through Stripe (or equivalent): PCI-DSS compliance via hosted fields (no raw card numbers stored)
- Tuition invoice records retained for 7 years (tax requirement)

### Technical Constraints

- **Multi-state ratio configuration:** The ratio alert system must support a configurable state rules engine — launching with TX and CA, extensible to all 50 states without code changes (data-driven configuration)
- **Offline-resilient kiosk:** The check-in kiosk must queue check-in/out events locally if internet connectivity is lost and sync when restored; centers cannot be offline during morning rush
- **Audit log:** All data modifications to compliance-relevant records (attendance, incidents, ratio logs) must be stored in an append-only audit log with actor/timestamp; records cannot be deleted, only amended with the amendment logged

### Integration Requirements

- **Email provider** (Sendgrid or equivalent): Transactional emails for parent invites, invoice delivery, incident notifications, password reset
- **Push notification provider** (Firebase Cloud Messaging or equivalent): iOS and Android push for check-in/out alerts, daily report delivery, ratio alert escalations
- **Payment processor** (Stripe): ACH and card processing, automated invoice generation, webhook-based payment status updates
- **CSV import:** Enrollment import from Procare and Brightwheel export formats (facilitates switching; reduces onboarding friction)
- **PDF generation:** Incident reports and CACFP reports must generate PDF for download/email without third-party dependency at runtime

### Risk Mitigations

- **State compliance fragmentation:** Hard-launch in TX and CA; ratio configuration is data-driven from day one so adding states requires only a data update, not a code release
- **Parent app adoption:** Web-based parent portal as fallback (no download required); incident notifications and payment reminders sent via email as secondary channel
- **Data loss during outage:** Kiosk queues locally; all compliance records are stored with write-ahead logging; daily automated backup to separate region

---

## SaaS B2B — Platform-Specific Requirements

### Multi-Tenancy

Each center is an isolated tenant. Data must be logically separated by tenant ID at the database query level — no cross-tenant data access is possible. Staff and parents of Center A cannot view any data from Center B.

**Tenant hierarchy:**
```
Center (tenant)
  └── Classrooms (1–8 per center at MVP)
        └── Enrolled children
        └── Staff assignments
  └── Parent accounts (linked to enrolled children)
  └── Billing configuration
  └── State compliance configuration
```

### Role and Permission Matrix

| Role | Capabilities |
|------|-------------|
| **Center Director** | Full center configuration; all reports; billing; staff management; all child records; all incident reports |
| **Classroom Staff** | Check-in/out operations; daily report entry for assigned classroom; incident report filing; view their classroom's ratio status |
| **Billing Coordinator** | Invoice management; payment status; parent billing records; no access to child health records |
| **Parent** | View their child's daily reports and check-in/out history; pay invoices; message director; view incident reports for their child |
| **KinderDesk Admin** | Internal dashboard; all tenant data (support purposes); onboarding tools; trial status |

### Subscription and Billing

- Subscription tiers based on enrolled child count: ≤20 children ($49/month), ≤80 children ($79/month)
- Tier upgrades are automatic when enrollment crosses the threshold (with director notification); no downgrade below current enrollment
- Payment processing fees are charged on top of subscription: ACH 1.5%, card 2.9%
- Free trial: 14 days, no credit card required; credit card collected at day 12 with advance notice
- LTD (AppSumo): one-time purchase grants permanent access at the enrolled tier at time of purchase; payment processing fees still apply

### Technical Architecture Considerations

- **Stack recommendation:** React (web dashboard + parent portal) + React Native (parent app + kiosk), PostgreSQL (multi-tenant with row-level security), Node.js/Express API, hosted on AWS with RDS and ElastiCache
- **Kiosk mode:** The check-in kiosk app runs in full-screen locked mode on a shared center iPad; it must not expose director-level functionality without PIN authentication
- **Real-time ratio updates:** Staff check-in/out events must propagate ratio status to director dashboard within 5 seconds; websocket or server-sent events for real-time push
- **Mobile-first parent app:** React Native (iOS + Android) with offline-capable daily report viewing (cached for 7 days); push notifications via FCM

### Implementation Considerations

- **Non-technical buyers:** All configuration flows must be completable by a childcare director with no software background; maximum 3 steps for any core configuration action; all actions have a tooltip or help text
- **Staff training time:** The check-in kiosk and daily report entry must be trainable in under 30 minutes with no prior software experience
- **Support infrastructure:** Phone support requires Zendesk (or equivalent) with call tracking and callback scheduling; support team size scales with center count (1 support agent per 150 centers is the initial staffing model)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the minimum that creates a genuine "before/after" experience for a center director in the first week. The product succeeds at MVP if a director who switches from Procare says "I don't know how I did it the old way" within 7 days.

**Resource Requirements:** 1 full-stack developer + 1 mobile developer (or one full-stack with React Native experience) + 1 support/onboarding person. Timeline: 4–6 weeks to first paying customer.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Maria's happy path (Journey 1) — fully supported
- Compliance incident scenario (Journey 2) — fully supported
- Denise's multi-classroom switch (Journey 4) — fully supported
- Admin onboarding agent (Journey 5) — basic tooling supported

**Must-Have Capabilities (all defined in Product Scope above):**
1. Digital check-in/out kiosk (QR code, software-only)
2. 1-tap bulk daily report with parent push delivery
3. Real-time staff ratio alert (TX + CA thresholds at launch)
4. Parent app (iOS + Android) with daily report, check-in/out alerts, invoice payment, messaging
5. Automated monthly billing with ACH/card via Stripe
6. Incident report log with photo, parent acknowledgment, PDF export
7. Enrollment import (CSV) from Procare and Brightwheel formats
8. Phone support for all plans
9. Internal admin dashboard (KinderDesk team use only)

### Post-MVP Features

**Phase 2 (Months 7–12): Compliance depth**
- CACFP meal tracking and monthly report export
- Parent tour scheduling and waitlist management
- QuickBooks integration
- AppSumo LTD launch campaign
- State expansion: NY, FL, IL, WA, CO
- Web-based parent portal (no-download fallback)

**Phase 3 (Months 13–24): Payment flywheel**
- CCDF/subsidy billing automation (premium tier)
- Multi-site dashboard (2–5 locations)
- Enhanced payment processing features (autopay, split billing, tuition financing)
- NAEYC accreditation documentation support

### Risk Mitigation Strategy

**Technical Risks:** State compliance fragmentation is the primary technical risk. Mitigation: data-driven ratio configuration from day one; hard-launch in TX and CA only; build state expansion as data updates, not code changes.

**Market Risks:** Brightwheel could announce a downmarket tier. Mitigation: per-child pricing is structurally embedded in Brightwheel's model — flat-rate pricing requires an architectural rewrite. Move fast; reach 500 paying centers before Brightwheel responds. The phone support brand promise is independently defensible.

**Resource Risks:** Non-technical buyers require intensive onboarding support. Mitigation: 1:1 phone onboarding with every new center; 30-minute kiosk setup guide; hire a dedicated support/onboarding person at 100+ centers.

---

## Functional Requirements

### Attendance & Check-In/Out Management

- FR1: Center directors can configure an authorized pickup list per enrolled child, including authorized adults' names and photos
- FR2: Parents can check in their child at the kiosk by scanning a QR code from the parent app or a printed code
- FR3: Staff can check in/out children via PIN-authenticated staff override when parent QR is unavailable
- FR4: The system auto-records a date/time-stamped attendance event on every check-in/out
- FR5: Directors and staff can view the current attendance status (checked in / not arrived / checked out) for all enrolled children in real time
- FR6: Directors can export attendance records for a date range in PDF or CSV format for state inspection
- FR7: The kiosk queues check-in/out events locally when offline and syncs when connectivity is restored

### Daily Reporting

- FR8: Staff can submit a bulk daily report for all children in a classroom simultaneously with a single screen interaction (bulk mode)
- FR9: Staff can override individual child fields within a bulk daily report submission (e.g., child-specific nap duration)
- FR10: Staff can attach one classroom-level photo to a daily report submission; individual child photo attachment is optional
- FR11: Parents receive a push notification and can view their child's daily report immediately upon staff submission
- FR12: Directors can view all submitted daily reports for their center by date and classroom
- FR13: Parents who have not installed the app can receive daily report summaries via email (web portal fallback)

### Staff Ratio Monitoring

- FR14: Directors can assign staff members to specific classrooms at the start of each day
- FR15: The system monitors the staff-to-enrolled-children ratio for each classroom in real time as check-in events occur
- FR16: Directors receive a push notification when a classroom's ratio approaches or breaches the configured state threshold
- FR17: The director dashboard displays current ratio status for all classrooms with a color-coded indicator (compliant / approaching / at-risk)
- FR18: Directors can configure per-state ratio thresholds from a pre-loaded state rules library (TX and CA at launch; manual configuration for other states)
- FR19: Ratio events (threshold approaches, breaches) are logged with timestamp for audit purposes

### Incident Management

- FR20: Staff and directors can file an incident report with: child name, date/time, incident description, actions taken, and parent notification status
- FR21: Staff can attach a photo to an incident report from their device camera
- FR22: Parents receive an in-app and email notification when an incident report is filed for their child and must acknowledge receipt
- FR23: Directors receive an alert if a parent has not acknowledged an incident report within 1 hour
- FR24: Directors and authorized staff can export any incident report as a PDF for state licensing records
- FR25: Incident records are retained in the system for a minimum of 5 years and cannot be deleted (only amended, with amendments logged)

### Parent Communication & App

- FR26: Parents can view their child's check-in/out history and real-time status from the parent app
- FR27: Parents receive push notifications for check-in events, daily report submission, incident reports, and invoice due dates
- FR28: Parents can send and receive direct messages with the center director from the parent app
- FR29: Directors can send broadcast messages to all parents in a classroom or all parents center-wide
- FR30: Parents can view and download any incident report filed for their child
- FR31: Parents can update their authorized pickup list and emergency contact information from the parent app

### Billing & Payment Processing

- FR32: Directors can set a monthly enrollment fee per child and generate invoices automatically on a configured billing date
- FR33: Parents can pay invoices via ACH bank transfer or credit/debit card from the parent app or web portal
- FR34: Directors can view payment status for all enrolled children (paid / pending / overdue) from the billing dashboard
- FR35: The system sends automated payment reminders to parents with overdue invoices at 3-day and 7-day intervals
- FR36: Directors can issue manual invoice adjustments (credits, discounts, late fees) from the billing dashboard
- FR37: Directors can export tuition payment records by date range for accounting/tax purposes

### Enrollment & Center Configuration

- FR38: Directors can import an existing enrollment list via CSV; the system supports Procare and Brightwheel export formats
- FR39: Directors can add, edit, and archive enrolled children, including: name, date of birth, classroom assignment, authorized pickups, parent accounts
- FR40: Directors can create and configure classrooms (name, age group, capacity, assigned staff)
- FR41: Directors can invite staff members by email; staff receive a role-appropriate app access link
- FR42: Directors can invite parents by email or SMS; parents receive a parent app download link with their child pre-linked

### Compliance Records & Exports

- FR43: Directors can generate a state-ready attendance report for any date range in PDF format
- FR44: All compliance-relevant records (attendance, incidents, ratio logs) are stored in an append-only audit log with actor and timestamp
- FR45: Directors can export all center data in a portable format (JSON or CSV) within 30 days of subscription termination (data portability)
- FR46: Child and family data can be permanently deleted within 30 days of center subscription termination on request

### Internal Admin (KinderDesk Team)

- FR47: KinderDesk support agents can view all trial center accounts, enrollment counts, setup progress, and first-check-in date from an internal dashboard
- FR48: Support agents can flag at-risk trial accounts (no check-in event after 5 days) for proactive outreach
- FR49: Support agents can initiate enrollment CSV import on behalf of a center director during onboarding calls
- FR50: The system generates a weekly automated report of trial → paid conversion rates, churn events, and support contact rates for KinderDesk operational review

---

## Non-Functional Requirements

### Performance

- Check-in QR scan to confirmation display: <2 seconds at 99th percentile
- Daily report submission to parent push notification delivery: <30 seconds at 95th percentile
- Ratio status update after check-in event: <5 seconds at 99th percentile (real-time dashboard)
- Billing invoice generation for up to 80 children: <10 seconds
- System must support 50 concurrent centers (1,500 concurrent enrolled children checking in during morning rush) at MVP; scale to 500 concurrent centers (15,000 children) by month 24

### Security

- All data in transit encrypted via TLS 1.2+; all data at rest encrypted via AES-256
- Child data (names, photos, health notes) access restricted by role (staff see only their classroom; parents see only their child; FR1–FR46 enforce this)
- Payment card data: PCI-DSS compliant via Stripe hosted fields; no raw card numbers stored in KinderDesk systems
- ACH authorization: NACHA-compliant with written/digital authorization collection and return handling
- Session management: parent and staff sessions expire after 8 hours of inactivity; kiosk sessions are persistent (kiosk PIN protected)
- FERPA-adjacent: child records accessible only to authenticated, authorized adults; no child data indexable by external search engines

### Reliability

- **Uptime target:** 99.9% during business hours (6am–8pm local center time); scheduled maintenance windows outside these hours only
- **Critical path SLA:** Check-in kiosk and ratio alert systems must have independent redundancy — a web dashboard outage must not prevent attendance recording
- **Incident response:** P1 (check-in or data loss) → on-call response within 15 minutes; P2 (billing, parent app) → response within 1 hour
- **Data durability:** All compliance records (attendance, incidents, ratio logs) backed up continuously with point-in-time recovery; RTO <1 hour, RPO <5 minutes for compliance data

### Scalability

- Multi-tenant architecture must support adding new states (ratio configurations) and new LTD/subscription centers without downtime
- Payment processing volume must scale from $0 to $10M+/month in tuition collected (Stripe handles this natively; internal reporting must not become a bottleneck)
- Support tooling must flag at-risk trials automatically as center count grows — support agent workload must not scale linearly with center count

### Accessibility

- Parent app and web portal must meet WCAG 2.1 AA standards — childcare parents include diverse abilities and language backgrounds
- Parent app must support the top 5 languages spoken by childcare families in TX and CA: English, Spanish, Chinese (Simplified), Vietnamese, Korean
- Director dashboard: keyboard navigable; screen reader compatible for core workflows (billing, daily report review)

### Integration Reliability

- Stripe webhook processing: all payment events must be idempotent; duplicate webhook delivery must not create duplicate payment records
- Push notification delivery: fallback to email if push delivery fails after 2 retries; parent must not miss a compliance-critical notification (incident report, overdue invoice)
- Offline kiosk sync: queued events must sync within 60 seconds of connectivity restoration; sync must be conflict-free (last-writer-wins on check-in/out; incidents are append-only)

---

*Document Status: Complete*
*Next step: Architecture — create technical architecture decisions for KinderDesk based on this PRD*
*Workflow: run-automvp.sh --idea childcare-center-management --step architecture*

---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/f-gas-refrigeration-compliance.md
  - _bmad-output/planning-artifacts/market-research-f-gas-refrigeration-compliance.md
  - _bmad-output/planning-artifacts/product-brief-f-gas-refrigeration-compliance.md
workflowType: prd
classification:
  projectType: mobile_saas
  domain: regulatory_compliance
  complexity: high
  projectContext: greenfield
date: '2026-11-12'
author: Root
project_name: 'F-Gas Refrigeration Compliance Tracker'
---

# Product Requirements Document - F-Gas Refrigeration Compliance Tracker

**Author:** Root
**Date:** 2026-11-12

## Executive Summary

UK refrigeration engineers are running a legally-mandated compliance function on paper job sheets and WhatsApp. F-Gas regulations require a 5-year audit trail of every refrigerant addition, removal, and leak check — but no affordable, purpose-built tool exists for the 10,695+ REFCOM-certified UK companies at the solo or micro end of the market.

The F-Gas Refrigeration Compliance Tracker is a mobile-first, UK-specific F-Gas log and audit trail generator priced at £6.99/month for solo operators. It is purpose-built for the compliance workflow, not a generic field service management tool with F-Gas bolted on. Engineers log jobs on-site (offline), and the app auto-generates the 5-year audit trail PDF that regulators require.

The market timing is acute: UK F-Gas regulation tightened in 2025–2026, Wintac (the legacy tool thousands relied on) has had its activation servers shut down, and 60–70% of RACHP contractors are still paper-based. This is a non-discretionary regulatory purchase with no affordable native solution — a rare convergence of urgency, underservice, and a clear price gap.

**Target users:** Solo and micro RACHP contractors (1–5 engineers) who hold F-Gas Category 1 certification and REFCOM membership, servicing commercial refrigeration and AC systems across the UK.

**Go-to-market:** UK-direct, solo-first launch at £6.99/month. REFCOM preferred partner listing is the primary distribution lever, supplemented by Reddit/Facebook community presence and SEO targeting "F-Gas software UK".

**12-month revenue target:** £10K MRR by month 6; £30K MRR by month 12.

### What Makes This Special

**F-Gas-first interface, not an FSM tool.** Every screen, every workflow, every label is designed for refrigeration compliance — not scheduling, dispatch, or invoicing. This is the only tool in the market built from day one for the F-Gas record-keeping workflow specifically.

**True solo pricing.** At £6.99/month total (no per-user minimum), this is the only paid tool genuinely accessible for a 1-engineer sole trader. Joblogic's free tier creates the illusion of coverage but is too complex; the first paid alternatives start at £10/user with team minimums.

**One-tap 5-year audit pack generator.** Auto-generate a formatted PDF showing all F-Gas records for any registered system or site over 5 years, structured to match REFCOM and EA inspection expectations. This is the killer feature — it is the product's reason for existing.

**Offline-first for signal-dead environments.** Plant rooms, cold stores, and underground plant areas have no mobile signal. The app captures job data offline and syncs when connectivity returns — a hard requirement that several competitors miss.

**UK regulatory defaults baked in.** Gas types, leak-check intervals, CO2e calculations, and reporting formats all default to UK F-Gas Regulation requirements. Zero configuration needed for a UK engineer.

## Project Classification

- **Project Type:** Mobile SaaS (iOS + Android) with companion web portal, offline-capable
- **Domain:** Regulatory compliance (UK F-Gas / RACHP trade)
- **Complexity:** High — regulated domain with specific legal record-keeping requirements, CO2e calculation logic, compliance scheduling, offline sync, and audit-grade PDF generation
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Time to first log:** 80%+ of new users log their first F-Gas job within 24 hours of account creation (benchmark: engineer signs up, logs same-day jobs before end of shift)
- **On-site log speed:** Average F-Gas job entry completed in under 2 minutes on mobile in a live environment
- **Time to audit pack:** Engineer generates first 5-year audit trail PDF within first 7 days of using the app
- **Offline reliability:** 99.9%+ of offline-created job records sync successfully with zero data loss on reconnection
- **REFCOM renewal success:** 70%+ of users who have used the app for 90+ days report that their REFCOM renewal records were accepted without issue (measured via in-app survey at 90-day mark)
- **Leak check alert accuracy:** Zero missed legally-required leak checks for any system registered in the app — overdue alerts surface before the deadline, not after

### Business Success

- **Month 2:** 100 paying UK solo/micro contractors — product-market fit signal in the solo segment
- **Month 4:** £5K MRR — validates unit economics for UK-direct SaaS
- **Month 6:** £10K MRR — proves scalability within UK solo/micro segment
- **Month 12:** £30K MRR — establishes market position, triggers team feature investment and EU expansion evaluation
- **Month 3:** REFCOM preferred partner listing secured (or confirmed conversation underway)
- **Month 6:** NPS ≥ 50 — indicates strong word-of-mouth potential in the trade community

### Technical Success

- **App performance:** Core job log entry completes within 2 seconds on mid-range Android devices (the dominant hardware in the RACHP trade)
- **Offline sync:** Background sync completes within 30 seconds of connectivity restoration; no job records lost
- **PDF generation:** 5-year audit pack PDF generates in under 5 seconds for any registered system with up to 200 job records
- **Uptime:** 99.9% availability for cloud sync and PDF generation services
- **App store ratings:** 4.5+ stars on iOS App Store and Google Play within 60 days of launch

### Measurable Outcomes

| Metric | Month 2 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Paying users | 100 | ~1,250 | ~3,750 |
| MRR | ~£700 | £10K | £30K |
| ARPU | £7 | £8 | £8–10 |
| Monthly churn | — | < 5% | < 3% |
| Avg jobs logged/user/month | 20+ | 22+ | 22+ |
| Audit packs generated/month | 1+ per active user | 2+ | 2+ |
| NPS | — | ≥ 50 | ≥ 55 |

## Product Scope

### MVP - Minimum Viable Product

The MVP solves the core compliance problem for a solo operator in its entirety. A solo engineer using the MVP must be able to: log every F-Gas job required by regulation, stay confident their records are REFCOM/EA compliant, and produce a 5-year audit trail PDF on demand.

**Core MVP capabilities:**

1. **Equipment Registry** — Register refrigeration systems/assets with: location, equipment type, refrigerant type, system charge (kg), GWP, calculated CO2e. Master record all job logs reference.
2. **F-Gas Job Log Entry** — Log a job against a registered system: date, engineer cert, action (charge/recover/leak check/installation/decommission), refrigerant type, quantity in/out, leak check outcome, notes. All fields required by UK F-Gas Regulation.
3. **Certified Engineer Registry** — Store engineer names and F-Gas certificate numbers. Auto-populate on job logs. REFCOM requires certifying engineer details on every record.
4. **Leak Check Scheduler** — Based on system CO2e (≥5 tonnes: 6-monthly; ≥50 tonnes: quarterly; ≥500 tonnes: more frequent), auto-calculate next required leak check date and surface overdue systems as alerts.
5. **5-Year Audit Trail PDF Generator** — One tap produces a formatted PDF showing all F-Gas records for any registered system/site over 5 years, structured to match REFCOM and EA inspection expectations.
6. **Offline-First Mobile App** — Full job log entry and equipment lookup available offline on iOS and Android. Syncs to cloud when connectivity returns.
7. **UK F-Gas Regulation Defaults** — Gas type database (all UK-approved refrigerants + GWP values), leak-check frequency logic per CO2e, CO2e auto-calculation from refrigerant type and quantity. Zero configuration for a UK engineer.
8. **Account Management** — Signup, subscription management (£6.99/month solo, £8.99/user/month team), billing via Stripe, 14-day free trial with no credit card required.

### Growth Features (Post-MVP, v1.1)

- **2–10 engineer team accounts** with centralised compliance dashboard across all engineers
- **Wintac data migration wizard** — CSV/Excel import of historical records for the active Wintac refugee segment
- **Customer portal** — Share F-Gas records directly with commercial clients (supermarkets, facilities managers)
- **Xero integration** — Connect compliance and billing workflows
- **Cylinder/refrigerant stock tracking** — Track cylinder usage per job, reconcile against supplier records

### Vision (v2.0+)

- **Full RACHP job management** — Scheduling, dispatch, work orders, invoicing with F-Gas compliance pre-populated on service reports
- **EU 2024/573 compliance mode** — Germany, France, Netherlands expansion
- **AI-assisted leak rate trend analysis** — Predictive alerts based on accumulated refrigerant quantity data
- **Multi-site enterprise reporting** — Facilities management use case for operators with large equipment estates
- **Windows desktop app** — For office-based managers at 10–50 person firms

## User Journeys

### Journey 1: Steve — The Solo Contractor (Core Success Path)

Steve is 44, runs a sole-trader refrigeration contracting business in the East Midlands. He holds F-Gas Category 1 and REFCOM membership. He services 60–80 commercial refrigeration systems per year — walk-in cold rooms for restaurants, display cases for convenience stores, small-scale industrial chillers.

**Before the app:** Steve logs F-Gas work on a job sheet pad, photographs each sheet on his iPhone, sends the photo to his wife who keeps them in a Dropbox folder. He had a conversation with a REFCOM inspector two years ago who "had a word" about his record organisation. He intends to sort it out but hasn't found anything simple enough.

**The trigger:** REFCOM renewal flags a discrepancy in his leak-check records for a customer site. He is given 30 days to provide complete records or risk certification suspension.

**Discovery:** Steve Googles "F-Gas software UK" at 7pm on a Sunday. He finds the app, reads the homepage, sees "£6.99/month, no setup, works offline." He signs up without entering a card.

**First use — the aha moment:** He logs the three jobs he did that day in 6 minutes on his phone, sitting in his van. He taps "Generate Audit Report" for the flagged site, sees a clean PDF with all his records (from the last 2 months since he started). He screenshots it. It looks exactly like what REFCOM wants. He enters his card and subscribes.

**Day-to-day use:** Steve logs every F-Gas job on-site, while still in the plant room, before getting back to his van. The app works with no signal. By the time he drives back to the depot, the records have synced. The overdue leak check alerts tell him when a site needs attention before the deadline.

**Renewal success state:** Steve's REFCOM renewal 8 months later is a non-event. He generates the audit pack for each of his 40 registered sites in one session. The inspector has no questions. Steve messages the REFCOM inspector: "New app sorted this out." He posts about it in the Facebook group. Three colleagues sign up.

**Journey reveals:** Equipment registry, offline job logging, 5-year PDF generator, overdue leak check alerts, shareable PDF, mobile-first UX that works in a van in 6 minutes.

---

### Journey 2: Dave — The Small Firm Owner (3 Engineers, Wintac Refugee)

Dave is 51, runs a limited company with himself and two employed engineers. His firm services commercial refrigeration and light AC for food retail, hospitality, and facilities management clients. Annual revenue ~£400K.

**The catastrophe:** Dave used Wintac for 12 years. When activation servers shut down in 2025, he lost access to all historical records. He reconstructed 2 years of records from paper archives at a cost of 4 days of admin time. He is now on a temporary Excel system he built himself.

**The trigger:** A major supermarket client introduces a requirement for digital F-Gas records with 48-hour access SLA. Dave's Excel system cannot meet this.

**Discovery:** Dave finds the app via a comparison article targeting "Wintac replacement UK." He sees the Wintac migration option in the v1.1 roadmap (communicated on the pricing page as "coming soon"). He also sees that the solo plan works for 1-user right now.

**MVP use — partial solution:** Dave starts with himself on the solo plan. He registers all 60 client systems and begins logging. He also uploads a manually-cleaned CSV of the last 2 years of records he reconstructed. He generates a PDF for the supermarket client within 24 hours of signup and meets the client's deadline.

**Team onboarding (v1.1):** When team accounts launch, Dave upgrades. His two engineers install the app on their phones. Dave has a central dashboard showing compliance status across all client sites. When the supermarket client requests records, he generates and emails a PDF in 3 minutes.

**Journey reveals:** Team account management, centralised dashboard, Wintac migration (v1.1), customer record export/email, compliance status overview per site.

---

### Journey 3: The Wintac Refugee (Active Emergency Search)

An estimated 500–1,000 RACHP contractors used Wintac. With its activation servers down, they are actively searching Google for a replacement right now. Unlike Steve, they are not waiting for a trigger event — the trigger already happened. They have partial data (CSV/Excel exports from old Wintac data) and immediate willingness to pay.

**The search:** Types "Wintac alternative UK refrigeration software" or "F-Gas software replace Wintac." Lands on the product via organic search or forum recommendation.

**The ask:** "Can I import my old Wintac data?" The MVP answer is: start fresh for new jobs, manual import possible. The v1.1 answer: Wintac migration wizard.

**The conversion point:** Even without migration, they convert because they have no active digital system. Any functional F-Gas logger beats nothing. The migration promise in v1.1 gives them confidence this vendor understands their situation.

**Journey reveals:** Wintac data migration (v1.1), clear messaging on the homepage for Wintac refugees, CSV import of historical records, data portability trust signals.

---

### Journey 4: The REFCOM Inspector (Indirect User / Standards Authority)

REFCOM inspectors are not direct product users, but they are the external validators who determine whether Steve's audit packs are acceptable. Their standards define what the PDF output must look like.

**Their interaction with the product:** An inspector receives a PDF audit pack from an engineer using the app. They review the format and content against REFCOM's inspection checklist. If the PDF matches expectations (all required fields, correct structure, CO2e calculations visible, engineer cert numbers present), the records are accepted without further questions.

**What this journey reveals:** The PDF output must be explicitly designed to REFCOM's inspection checklist — not just a data dump. Format, field labelling, CO2e visibility, and engineer certification details must match what inspectors expect to see. This is a non-negotiable quality bar for the audit pack generator.

**Journey reveals:** REFCOM-compliant PDF format requirements, CO2e visibility in reports, engineer cert number on every record, sortable by site and date, 5-year lookback.

---

### Journey Requirements Summary

Capabilities revealed by all journeys:

- **Equipment registration** with full refrigerant system profile (site, gas type, charge, CO2e)
- **Job log entry** with all UK F-Gas regulatory fields pre-populated or required
- **Offline-first mobile entry** — no connectivity needed in plant rooms or cold stores
- **Automated leak check scheduling** based on system CO2e threshold logic
- **Overdue alert system** — surfaces sites with missed or upcoming required leak checks
- **5-year audit trail PDF generator** — REFCOM/EA compliant format, generated per site or system
- **PDF sharing** — email or copy-link directly from mobile
- **Subscription and account management** — solo at £6.99, team billing at £8.99/user
- **Historical data import** — CSV for manual records; Wintac migration wizard (v1.1)
- **Centralised team dashboard** — multi-engineer compliance view (v1.1)
- **Customer-facing record export** — share records with commercial clients (v1.1)

## Domain-Specific Requirements

### Compliance & Regulatory

**UK F-Gas Regulation (SI 2015/310 as amended):**
- Every F-Gas job record must capture: refrigerant type, quantity charged or recovered, date, engineer F-Gas certificate number, company REFCOM certification, leak check outcome and date, equipment type, and site location.
- 5-year retention period: all records must be retained and producible for at least 5 years from the date of each job.
- Leak check frequency mandated by system CO2e: ≥5 tonnes CO2e (6-monthly), ≥50 tonnes CO2e (quarterly), ≥500 tonnes CO2e (3-monthly). The app must calculate CO2e from refrigerant type and system charge, then enforce the correct interval.
- CO2e calculation: CO2e (tonnes) = refrigerant charge (kg) × GWP ÷ 1,000. GWP values must be sourced from the current UK F-Gas Regulation schedule (not EU 2024/573 — these diverged post-Brexit).
- Annual leak rate calculation: quantity leaked ÷ average charge × 100 = leak rate %. REFCOM inspectors review this for systems showing high leak rates as a potential compliance risk.
- Records must be presented on demand to: Environment Agency (EA) enforcement officers, REFCOM certification auditors, and contracted commercial customers.

**REFCOM Certification Requirements:**
- REFCOM member renewal requires demonstration of complete, accurate F-Gas records for all systems serviced in the period under review.
- REFCOM expects records to show: engineer certification number on every job, company certification number, leak check outcomes with dates, and refrigerant quantity accountability (charge in vs. charge out balance).

**Data Retention Legal Risk:**
- Loss or inability to produce F-Gas records during an EA inspection can result in fines up to £20,000 per breach.
- REFCOM certification suspension for record failures effectively shuts down an engineer's business until records are reconstructed.
- The product's 5-year audit pack must be defensible as the primary compliance record — not a supplement to paper records.

### Technical Constraints

- **Data portability requirement:** Engineers must be able to export all their records at any time in a format they can retain independently of the app. This is a trust signal critical to adoption (learned from the Wintac shutdown). Full CSV/Excel export of all job records and equipment registry must be available at any time.
- **Offline data integrity:** Records created offline must be stored with timestamps reflecting the actual on-site time, not the sync time. Tamper-evident audit trail — once created, records should not be silently modifiable. Edit history or amendment logging required.
- **UK-specific gas type database:** The gas type lookup must include all refrigerants approved under UK F-Gas Regulation with their UK GWP values. This diverges from EU 2024/573 from 2025 onwards. Database must be maintainable via admin interface when regulation schedules update.
- **Engineer certification validation:** F-Gas certificate numbers follow a specific UK format (issued by BESA, REFCOM, Citb, etc.). Light-format validation (not live API check in MVP) to prevent data entry errors.

### Integration Requirements

**MVP:**
- Stripe for subscription billing (£6.99/month solo, £8.99/user/month team)
- PDF generation service (server-side, not client-side, for consistent formatting and large job histories)
- Push notifications (iOS/Android) for overdue leak check alerts
- Email delivery for sharing audit pack PDFs with clients

**v1.1:**
- Wintac data migration: accept Wintac's CSV/Access database export format and map to the app's equipment registry and job log schema
- Xero accounting integration: sync job records and invoices
- Customer portal: shareable read-only view of compliance records for commercial clients

### Risk Mitigations

- **Regulation change risk:** UK F-Gas Regulation schedules update (phase-down quota, GWP values, new refrigerant approvals). Mitigation: maintain a versioned gas type/GWP database administered via web admin, with in-app notification when gas database updates. Do not hard-code GWP values in the mobile app — fetch from server.
- **Data loss trust risk:** Engineers will not migrate from paper until they trust the app won't disappear like Wintac. Mitigation: prominent data export feature, clear data retention policy on signup, annual data backup emails to users.
- **Offline sync conflict risk:** Engineer logs a job offline; office manager edits the same equipment record on web. Mitigation: last-write-wins for equipment metadata; append-only for job logs (jobs cannot be deleted — only amended with reason logged).

## SaaS / Mobile Specific Requirements

### Project-Type Overview

This is a mobile-first SaaS product targeting a UK trade audience. The primary interface is a native mobile app (iOS + Android) used by engineers in the field. A companion web portal serves office-based managers and provides account/billing management. Offline-first architecture is a hard requirement, not a nice-to-have.

### Technical Architecture Considerations

**Offline sync architecture:**
- Local SQLite database on mobile device stores all equipment registry and job logs
- Conflict resolution: append-only job log model (jobs are created, never deleted; amendments create new log entries). Equipment metadata uses last-write-wins with server timestamp.
- Sync on connectivity: background sync triggered automatically on network reconnect. No manual "sync" button required.
- Job records created offline carry the device timestamp at creation time — not the server timestamp at sync time. This is critical for regulatory compliance (the record date must reflect when the job was done, not when connectivity returned).

**PDF generation:**
- Server-side generation using a templating service (Puppeteer/wkhtmltopdf). Client-side PDF generation is insufficient for consistent formatting across devices and large job histories.
- PDF must be generated from the server's authoritative record of jobs, not the local device cache, to ensure completeness.
- Output format: REFCOM-compliant PDF with cover page (company name, REFCOM number, period, generated date), per-system record tables (sorted by date), CO2e calculations visible, engineer cert number on each row.

**Multi-tenancy:**
- MVP: single-user accounts with no sharing
- v1.1: team accounts where multiple engineers share access to the same equipment registry and job log pool, with individual engineer attribution on each job record
- Data isolation: each account's data is isolated; no shared equipment registries across accounts in MVP

**UK gas type database:**
- Maintained server-side as a versioned lookup table
- Mobile app fetches latest version on sync; falls back to cached version offline
- Admin interface to add/modify gas types when regulation schedules update
- Schema: gas_name, refrigerant_code (R-410A etc.), GWP_value, applicable_from_date, notes

### Platform Requirements

- **iOS:** Minimum iOS 15 (covers 95%+ of active iPhones as of 2026)
- **Android:** Minimum Android 10 (API 29) — covers field-level Android hardware common in UK trades
- **Web portal:** Modern browsers (Chrome, Firefox, Safari, Edge) — no IE11 support required
- **Responsive:** Web portal must work on tablet for engineers who prefer iPad over laptop
- **Device permissions:** Camera (photo attachment to job records), push notifications (overdue alerts), local storage (offline SQLite), network state (sync trigger)

### Subscription & Billing Model

- **Solo plan:** £6.99/month, 1 engineer account, unlimited equipment registries, unlimited job logs, unlimited audit pack generation
- **Team plan:** £8.99/user/month, 2–10 engineers, centralised dashboard (v1.1), billing per active seat
- **Free trial:** 14 days, no credit card required, full feature access
- **Billing:** Stripe Billing, monthly and annual options (annual = 2 months free)
- **Cancellation:** Self-serve cancellation from account settings; data remains accessible read-only for 90 days after cancellation, then exportable for 30 more days before deletion

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Compliance-first. The MVP proves one thing: logging F-Gas jobs on a mobile phone, offline, and generating a REFCOM-compliant audit pack PDF, is fast and reliable enough to replace paper entirely for a solo operator. Everything else — invoicing, scheduling, team management, integrations — is deferred.

**MVP Resource Requirements:** 1 mobile developer (React Native or Flutter), 1 backend developer, 1 designer with trade/B2B SaaS experience. 4–6 weeks to working MVP; 8–10 weeks to production-ready with PDF generation and Stripe billing.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo engineer: register equipment → log job on-site (offline) → generate audit pack PDF → share with REFCOM/client

**Must-Have Capabilities:**
1. Equipment registry (full refrigerant system profile)
2. F-Gas job log entry (all UK-required fields, offline-first)
3. Certified engineer registry (certificate number storage and auto-populate)
4. Leak check scheduler with CO2e-based interval logic
5. Overdue and upcoming leak check alerts
6. 5-year audit trail PDF generator (REFCOM-compliant format)
7. PDF sharing via email and copy-link
8. UK gas type database (R-410A, R-404A, R-407C, R-134a, R-32, R-452A, R-454B, R-744, R-717, and all current UK-approved refrigerants + GWPs)
9. CO2e auto-calculation from refrigerant type and charge weight
10. Offline sync with conflict resolution
11. Stripe subscription billing (£6.99/month, 14-day free trial)
12. Full data export (CSV/Excel) at any time

### Post-MVP Features (Phase 2 — v1.1)

**Target: Months 4–8**
- 2–10 engineer team accounts with centralised compliance dashboard
- Wintac data migration wizard (CSV/Access import of historical records)
- Customer portal: shareable read-only compliance record view for commercial clients
- Xero accounting integration for joining compliance and billing workflows
- Cylinder/refrigerant stock tracking per engineer van

### Phase 3 (Expansion — v2.0+)

**Target: Months 9–24**
- Full RACHP job management (scheduling, dispatch, invoicing, work orders)
- EU 2024/573 compliance mode (Germany, France, Netherlands)
- AI-assisted leak rate trend analysis and predictive maintenance alerts
- Multi-site enterprise reporting for facilities management operators
- Windows desktop app for office-based firm managers

### Risk Mitigation Strategy

**Technical Risks:** Offline sync edge cases (duplicate records, timestamp conflicts, network interruptions during sync). Mitigation: adopt an append-only log model for job records from day one — the simplest possible conflict resolution, with no silent data loss risk.

**Market Risks:** REFCOM does not engage as a distribution partner. Mitigation: community-first launch via r/refrigeration and UK Refrigeration Engineers Facebook group before REFCOM outreach; build social proof with 20–30 paying users before approaching REFCOM with case studies.

**Resource Risks:** PDF generation quality and consistency is the highest-risk technical task. Mitigation: prototype the PDF output in week 1 and test with an actual REFCOM member before continuing full build. The audit pack is the killer feature — if it fails, the product fails.

## Functional Requirements

### Equipment Registry

- FR1: Engineer can register a refrigeration or AC system with: site name, site address, equipment type (walk-in refrigeration, display case, chiller, AC unit, etc.), refrigerant type, total system charge (kg), and optional notes
- FR2: System can automatically calculate and display CO2e (tonnes) from refrigerant type × charge weight using the UK F-Gas Regulation GWP schedule
- FR3: Engineer can view a list of all registered systems, filterable by site name, equipment type, and compliance status (up-to-date / overdue / due soon)
- FR4: Engineer can edit equipment records; all edits are timestamped and attributed to the engineer making the change
- FR5: Engineer can decommission a system, which archives it from the active list while preserving its full job history for audit purposes
- FR6: Engineer can search for a registered system by site name, equipment type, or refrigerant type

### F-Gas Job Logging

- FR7: Engineer can log a F-Gas job against a registered system with: job date, action type (charge addition / gas recovery / leak check / installation / decommission / other), refrigerant type (pre-populated from system, editable), quantity in (kg), quantity out (kg), leak check outcome (pass / fail / not applicable), notes, and photo attachment (optional)
- FR8: Engineer can select the certifying engineer from the engineer registry when logging a job, with their F-Gas certificate number auto-populated
- FR9: Engineer can log a job entirely offline on mobile; the record is stored locally and synced automatically when connectivity is restored
- FR10: Job records carry the timestamp from when the entry was created on the device, not when it was synced to the server
- FR11: Once created, a job record cannot be deleted; engineers can add an amendment note to a job record (original record preserved, amendment appended)
- FR12: Engineer can attach up to 5 photos to a job record (e.g., refrigerant cylinder label, gauge readings, leak check documentation)

### Certified Engineer Registry

- FR13: Account owner can add certified engineers with: name, F-Gas certificate number, certificate type (Category 1 / Category 2 / Category 3 / Category 4), certificate expiry date
- FR14: System alerts when any registered engineer's F-Gas certificate is within 60 days of expiry
- FR15: Engineer name and certificate number auto-populate into new job log entries based on the logged-in engineer or selectable from a list

### Leak Check Scheduling & Alerts

- FR16: System automatically calculates the required leak check interval for each registered system based on its CO2e: ≥5 tonnes = 6-monthly, ≥50 tonnes = quarterly, ≥500 tonnes = 3-monthly, <5 tonnes = no mandatory interval (but app recommends annual)
- FR17: System displays next required leak check date for each registered system, calculated from the last recorded leak check date
- FR18: Engineer receives push notification and in-app alert when a registered system's leak check due date is within 14 days
- FR19: Dashboard surfaces all systems with overdue or upcoming-due leak checks in a single compliance overview view
- FR20: Engineer can view the full leak check history for any registered system in chronological order

### 5-Year Audit Trail PDF Generator

- FR21: Engineer can generate a 5-year audit trail PDF for any registered system, covering all job records from account creation (up to 5 years)
- FR22: Engineer can generate a 5-year audit trail PDF for all systems at a named site in a single document
- FR23: Generated PDF includes: account company name, REFCOM certification number, report generation date, system details (site, equipment type, refrigerant type, total charge), and a chronological job record table with columns for date, action type, quantity in, quantity out, leak check outcome, CO2e (tonnes), annual leak rate (%), and certifying engineer name + certificate number
- FR24: Annual leak rate is auto-calculated per system: (total quantity leaked in calendar year ÷ average system charge) × 100
- FR25: PDF can be shared directly from the app via: email (enter recipient address), iOS/Android share sheet (WhatsApp, AirDrop, Dropbox, etc.), or copy-link to a hosted version
- FR26: PDF is generated server-side from the authoritative record (not the local device cache), ensuring completeness even if the device has not fully synced

### Account & Subscription Management

- FR27: New user can sign up with email and password; 14-day free trial begins immediately with no credit card required
- FR28: User can enter payment details to subscribe to the solo plan (£6.99/month) or team plan (£8.99/user/month)
- FR29: User can view and manage their subscription (plan, billing date, payment method, invoice history) from account settings
- FR30: User can cancel their subscription from account settings; data remains accessible (read-only) for 90 days post-cancellation
- FR31: User can export all account data (equipment registry + all job logs) as CSV/Excel at any time from account settings
- FR32: Account owner can invite additional engineers (team plan only) via email; invited engineers log in with their own credentials and their jobs are attributed to their engineer profile

### Compliance Dashboard & Reporting

- FR33: Dashboard displays compliance status summary: total registered systems, overdue leak checks, upcoming leak checks (within 14 days), and jobs logged in the last 30 days
- FR34: Engineer can filter their compliance dashboard by site to review status for a single customer location
- FR35: Dashboard highlights systems where the annual leak rate exceeds 30% (a threshold that triggers mandatory investigation under UK F-Gas Regulation) as a flag for engineer attention

### UK Gas Type Database

- FR36: Job log and equipment registration forms provide a searchable dropdown of all UK-approved refrigerants (by name and R-number) with their current UK GWP values
- FR37: GWP values used in CO2e calculations are automatically updated when the app's gas type database is updated (via server sync); engineers are notified of any database updates that affect existing registered systems
- FR38: Engineer can view the GWP value used for any CO2e calculation in any job record or equipment registration (transparency for audit purposes)

### Data Integrity & Portability

- FR39: All job records include a system-generated unique ID, creation timestamp, device identifier, and sync timestamp for audit trail integrity
- FR40: Engineer can view the sync status of any locally-created record (pending sync / synced / sync error) from the job log list
- FR41: User receives an email summary of all records created in the last 12 months on their account anniversary, as a data backup notification

## Non-Functional Requirements

### Performance

- Core job log entry form renders within 1 second on initial load on a mid-range Android device (e.g., Samsung Galaxy A series, 2022–2024 vintage)
- Equipment registry list loads within 2 seconds for accounts with up to 500 registered systems (the ceiling for a large solo contractor)
- 5-year audit pack PDF generates within 5 seconds for a system with up to 200 job records
- Offline sync completes within 30 seconds of network reconnection for batches of up to 50 pending records
- Push notifications for overdue leak checks deliver within 5 minutes of the calculated trigger time

### Security

- All data transmitted between mobile app and server uses TLS 1.2+ encryption
- All data at rest (server database, local SQLite on device) is encrypted; device database uses platform-native encryption (iOS Data Protection, Android Keystore)
- Authentication: email/password with bcrypt hashing; optional 2FA via TOTP for account owners
- Session tokens expire after 7 days of inactivity; re-authentication required
- Role-based access for team accounts: account owner can read/write all records; engineers can read all records but write only their own job logs
- GDPR compliance: data processing agreement available to business subscribers; data deletion on request (subject to 90-day cancellation retention period); UK ICO registration required at launch
- Job records are append-only on the server; deletion requests are logged and fulfilled only after the 90-day post-cancellation period (not on demand for active accounts, as records may be legally required)

### Reliability

- Cloud services (sync, PDF generation, authentication): 99.9% uptime SLA
- Mobile app: graceful degradation to full offline mode if cloud services are unavailable; no data loss from server-side outage
- Offline queue: job records created during cloud service outage sync automatically when services recover; engineer sees pending sync count
- Database backups: daily server-side backups retained for 30 days; point-in-time recovery to any point in the last 7 days

### Scalability

- MVP architecture supports 10,000 registered users and 5 million job records without performance degradation
- PDF generation service scales horizontally; queue-based generation ensures no request is dropped under load (may increase generation time to 30 seconds under peak load)
- Gas type database updates broadcast to all connected clients within 60 minutes of server-side update

### Accessibility

- Mobile app meets WCAG 2.1 AA for text sizing, contrast, and touch target sizes (minimum 44×44pt touch targets)
- Engineers in the RACHP trade are predominantly 35–55 years old with varying levels of tech comfort; UI must be navigable without product documentation for the core job log and audit pack workflows
- App supports OS-level large text settings without layout breakage

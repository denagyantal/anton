---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/food-service-compliance-health-inspection-tracker.md
  - _bmad-output/planning-artifacts/market-research-food-service-compliance.md
  - _bmad-output/planning-artifacts/brief-food-service-compliance.md
workflowType: prd
date: 2026-05-05
author: Root
classification:
  projectType: saas_b2b
  domain: food_service_compliance
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — SafeServe

**Author:** Root
**Date:** 2026-05-05
**Status:** Complete

---

## Executive Summary

SafeServe is a mobile-first food safety compliance SaaS built exclusively for independent restaurants and food trucks — the 582,000+ US operators legally obligated to maintain the same documentation as enterprise chains but priced out of every existing digital tool. The product delivers one sharp promise: **daily compliance logs, temperature records, and a one-tap inspector-ready PDF, live in five minutes, at $39/month or $299 one-time.**

The structural market gap is proven: Jolt charges $200+/month and targets multi-location chains; FoodDocs is EU-focused with enterprise onboarding; SafetyCulture is generic with per-seat pricing that compounds cost. Over 70% of independent operators use paper clipboards. FDA documentation violations average $12,000 per incident. The market has left 600,000+ operators without a viable tool — not because demand is absent, but because every product was built for the wrong customer.

SafeServe wins by serving operators that every competitor ignores: beachheading on food trucks (the fastest-growing segment at ~23.7% YoY, zero dedicated compliance tools, multi-jurisdiction complexity), then expanding to single-unit restaurants, then adjacent verticals (daycares, cleaning services) sharing identical compliance workflows. The AppSumo LTD channel is confirmed white space — no food safety compliance product has run an AppSumo deal.

### What Makes This Special

**One-tap inspector export** is the hero differentiator: a clean, organized PDF covering the full inspection period, generated on demand, formatted exactly as health inspectors expect. This converts a previously chaotic crisis (scrambling for binders when an inspector arrives) into a 10-second operation. No competitor delivers this for the independent segment.

**"Live in five minutes"** is the UX promise backed by pre-loaded templates for the 10 most common US health department inspection formats. No setup call, no consultant, no configuration specialist. An operator signs up, selects their state and business type, and completes their first checklist before the onboarding session ends.

**Food truck mode** is the beachhead moat: multi-jurisdiction permit tracking, commissary agreement renewal reminders, and mobile-first temperature logging designed for use in a working truck. No competitor addresses this vertical at all. First-mover in this segment builds community word-of-mouth (food truck parks, commissaries, regional associations) before any competitor can react.

**Pricing architecture** creates two revenue streams simultaneously: $39/month subscription builds recurring revenue while $299 LTD (AppSumo) funds development and seeds a word-of-mouth base. The ROI framing is trivially obvious: "Avoid a $12,000 FDA fine for $299 one-time."

## Project Classification

- **Project Type:** SaaS B2B (mobile-first, subscription + LTD)
- **Domain:** Food Service Compliance / Regulatory Technology
- **Complexity:** Medium (state-by-state regulatory variation, HACCP documentation requirements, multi-jurisdiction food truck permits, PDF generation)
- **Project Context:** Greenfield — no existing product; new market category for the independent operator segment
- **Primary Platforms:** iOS (primary), Android, Progressive Web App for desktop access

---

## Success Criteria

### User Success

**Core engagement (leading indicators):**
- 80% of users complete at least one checklist within 24 hours of signup
- 70% of users log at least one temperature entry within 7 days of signup
- 60% of active paying users complete a daily checklist 5+ days per week (habitual compliance usage)
- Average time-to-complete opening checklist: under 3 minutes for new users, under 90 seconds for experienced users

**Value delivery (outcome indicators):**
- 90% of users who face a health inspection report the PDF export covered all requested documentation
- Zero critical violations attributable to documentation format for users with 60+ days of consistent logging
- Users who face an inspection while active on the platform rate the experience significantly better than their prior paper-based experience (NPS delta measurable)

**Retention signals:**
- 60-day retention: 70%+ of paying users still active (compliance obligation creates natural stickiness)
- 90-day retention: 60%+ of paying users still active (product must hold through at least one 6-month inspection cycle)
- Churn attribution: primary churn driver is restaurant closure (17% industry-average year-1 rate), not product dissatisfaction

**Habit formation:**
- Checklist becomes muscle memory — staff open app at shift start without manager prompting
- Staff time-to-complete temperature log entry: under 60 seconds per check
- Manager able to review prior-week compliance status in under 2 minutes

### Business Success

**Month 1–3 (Validation):**
- 100 paying customers (LTD + subscription combined) from AppSumo launch and direct organic channels
- NPS: 40+ (fear-motivated compliance tools with strong functional delivery produce high NPS when they work)
- Food truck operators convert at higher rate than restaurant operators: validates beachhead hypothesis
- Break-even on AppSumo commissions with LTD revenue partially covering development costs

**Month 3–6 (Traction):**
- 300+ paying customers
- $10,000 MRR from subscription customers (post-LTD expansion)
- At least one restaurant supply company partner in active outreach (Sysco or US Foods local rep)
- First NFTA chapter newsletter feature or co-marketing mention

**Month 6–12 (Growth):**
- $25,000–$40,000 MRR
- 1,000+ paying customers across food trucks and restaurants
- 500+ verified inspector export events (core value proposition in use during real inspections)
- At least 3 publishable customer stories from operators who used the app during a surprise inspection

**Month 12–24 (Scale):**
- $100,000 MRR
- Multi-location add-on revenue contributing 20%+ of MRR
- First adjacent vertical (daycares) launched with 50+ customers

### Technical Success

- App store rating: 4.5+ stars on both iOS App Store and Google Play
- Inspector PDF generation: produces valid, printable PDF in under 5 seconds for a 6-month log archive
- System uptime: 99.5%+ (operators must be able to access the app at shift start; downtime causes compliance gaps)
- Onboarding completion: first checklist completed by 80%+ of users who reach the onboarding screen
- Support ticket volume: under 2 tickets per 100 active users per month (validates "live in 5 minutes" UX promise)

### Measurable Outcomes

| KPI | Target | Measurement Method |
|-----|--------|--------------------|
| Time-to-first-checklist | < 5 minutes from signup | Signup timestamp vs. first checklist completion timestamp |
| DAU / MAU ratio | 40%+ | Daily checklist completions / total paying users |
| Inspector export events | Track all; target 50%+ of active users generating at least 1 | PDF export triggered per paying account |
| AppSumo LTD units (first campaign) | 300–500 units | AppSumo dashboard |
| MRR growth rate | 15%+ month-over-month (months 1–12) | Stripe MRR dashboard |
| Net Revenue Retention | 90%+ (restaurant closures offset by upgrades) | (MRR end - churn + expansion) / MRR start |
| CAC | < $50 per paying customer | Total marketing spend / new paying customers |
| Referral rate | 15%+ of new customers from referral | Attribution tracking at signup |
| App store rating | 4.5+ | App store dashboard |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete daily compliance workflow and inspector-ready export, covering 100% of what an independent operator needs to pass a health inspection with confidence.

**Phase 1 must-have capabilities:**
1. Daily temperature logs (configurable units, pass/fail thresholds, corrective action entry, photo attachment)
2. Opening and closing checklists (pre-loaded state-specific templates, digital sign-off, timestamped)
3. Pest control log (date, contractor, findings, next visit tracking, photo attachment)
4. HACCP corrective action documentation (critical control point, deviation, action taken, verification)
5. One-tap inspector export (PDF covering user-selected date range, organized sections, formatted for printing)
6. Multi-user support with role separation (owner, manager, staff)
7. Food truck mode (multi-jurisdiction profiles, commissary agreement tracking, permit renewal reminders)
8. Push notification system (shift start reminders, overdue temperature alerts, permit/commissary renewal warnings)
9. User account management and business profile setup

**Phase 1 constraints:**
- US market only; 10 most common state health department templates at launch
- Manual temperature entry only (no IoT sensor integration)
- Single location per account (multi-location is Phase 2 upgrade)
- No POS or third-party integrations

### Growth Features (Post-MVP)

**Phase 2 (Months 6–18):**
- Complete US state-by-state health inspection template library (all 50 states)
- Multi-location dashboard for 2–5 location operators (natural upgrade path and revenue expansion)
- Compliance streak reporting and monthly email summaries ("32 days with no missed logs")
- Insurance documentation export: compliance records formatted for insurance premium reduction claims
- Sysco / US Foods partnership integration: SafeServe recommended by restaurant supply reps
- Referral program: in-app referral links with attribution tracking

**Phase 3 (Months 12–30):**
- IoT / Bluetooth temperature sensor integration (eliminate manual entry for committed customers)
- Daycare compliance module: same core workflow adapted for state daycare inspection formats
- Cleaning service compliance module: chemical safety documentation and client inspection requirements
- Regulatory update subscription: template auto-updates when local health department requirements change
- Canada and Australia market expansion (provincial/state-based requirements)
- White-label / reseller program for restaurant supply companies

### Vision (Future)

- Compliance analytics: benchmark operator performance against anonymized industry averages; pattern detection before violations occur
- Health inspector recommendation program: formalized channel with regional health departments
- Multi-country expansion: UK (FSA guidelines), EU (HACCP EU), other markets
- AI-powered risk scoring: predict compliance gaps before they become violations
- Supplier traceability tracking for operators subject to FSMA 204 requirements

---

## User Journeys

### Journey 1: Maria, Food Truck Owner-Operator — First Inspection After Adopting SafeServe

Maria runs a taco truck in Austin. She's been using SafeServe for 3 months after seeing it shared in her food truck Facebook group. Before SafeServe, she had a paper binder she filled in maybe 3 days a week.

**Opening Scene:** It's a Tuesday morning. Maria's truck is set up at her regular Wednesday spot. A county health inspector walks up to her service window. Last year, this moment triggered immediate anxiety — she scrambled for her binder, found two days of blank temperature logs, and received a $400 citation. This time is different.

**Rising Action:** The inspector asks for her food safety records. Maria pulls out her iPhone. She opens SafeServe. The home screen shows 87 consecutive days of completed checklists. She taps "Export Inspection Report," selects the last 6-month date range, and waits 4 seconds.

**Climax:** The PDF generates. It opens on her screen — organized sections: Temperature Logs (fridge 37°F, freezer 12°F, hot-holding 145°F recorded twice daily), Opening Checklists (timestamped and signed by Maria or her part-time worker), Pest Control (June 12, Travis County Pest Control, negative findings), and one Corrective Action record from August when her refrigerator spiked to 45°F and she moved product to a backup cooler.

**Resolution:** The inspector reviews the PDF for 90 seconds, nods, writes "Satisfactory" on his inspection form, and leaves. Maria doesn't receive a citation. She texts her cousin who runs a coffee cart: "Get SafeServe. Just saved me from a $12,000 fine."

**Journey Requirements Revealed:**
- PDF generation: organized by section, date-sorted, business header, printable within 5 seconds
- Corrective action entry: photo attachment, auto-linked to temperature violation event
- Multi-jurisdiction support: commissary and county inspection standards managed separately
- Export accessible without internet connection (cached data)

---

### Journey 2: David, Restaurant Owner — Staff Accountability and Manager Absence

David owns a 45-seat restaurant in suburban New Jersey. He employs 12 staff including 2 managers. His concern: what happens to the temperature log when his kitchen manager takes a day off?

**Opening Scene:** It's a Saturday morning. David's kitchen manager, Rosa, is out sick. David is at his daughter's soccer game until noon. The restaurant opens at 11 AM. The opening checklist and morning temperature logs need to happen by 11:30 AM. With paper, this would depend entirely on whoever remembered — and someone might not.

**Rising Action:** At 10:58 AM, SafeServe sends a push notification to the shift lead's phone: "Shift starting — complete opening checklist." The shift lead, James, opens the app. His role shows only the tasks assigned to him: opening checklist and temperature log. He completes the checklist in 4 minutes. He enters the fridge temp (38°F — pass), freezer temp (10°F — pass), and the hot-holding unit temp (155°F — pass). He takes a photo of the prep station as the checklist confirms.

**Climax:** David receives a manager notification at 11:34 AM: "Opening checklist completed by James Chen. All temperatures in range." He checks it from his phone between soccer periods. No action needed.

**Resolution:** Three weeks later, a health inspector visits. David's manager pulls up 90 days of complete logs — no gaps, including the Saturday David was away. The inspector comments that the documentation is "the most organized they've seen in a year." David upgrades to the multi-location plan before opening his second restaurant in the spring.

**Journey Requirements Revealed:**
- Role-based task assignment: specific checklists assigned to specific roles or shifts
- Manager notification: real-time alert when checklists are completed (or overdue)
- Owner oversight dashboard: compliance status visible at a glance without opening individual logs
- Multi-location upgrade path: seamless account expansion when operator adds a second location

---

### Journey 3: Staff Member — Daily Habit During Shift Rush

Carlos is a line cook at David's restaurant. He has no interest in compliance paperwork. His job is to cook. SafeServe needs to fit into his workflow, not interrupt it.

**Opening Scene:** Carlos arrives at 10:45 AM for the 11 AM opening shift. The kitchen is busy with prep. At 11:00 AM, his phone buzzes once. It's a SafeServe notification.

**Rising Action:** Carlos opens the app. His role shows one task: the opening temperature log. The screen shows three fields — Fridge 1, Freezer, Hot Holding — each with a number pad. He enters 38, 11, and 155 from the thermometer readings he just took. All three show green checkmarks. He hits "Submit." Done.

**Climax:** It took 45 seconds. Carlos goes back to prep.

**Resolution:** He completes this same workflow every shift he works. After two weeks, he stops thinking about it. It's just the first thing he does after clocking in, like washing his hands.

**Journey Requirements Revealed:**
- Staff role UI: minimal interface, only tasks assigned to their role visible
- Quick entry: number-pad temperature input, large tap targets, single-tap submission
- No training required: interface self-explanatory in under 60 seconds
- Offline capability: form submits even if briefly offline, syncs when connection restores

---

### Journey 4: Health Inspector — Reviewing SafeServe Documentation

This is an indirect user — they don't use the software, but they are the ultimate judge of its value.

**Opening Scene:** Inspector Lisa Chen from the San Francisco Department of Public Health enters a food truck that's been flagged for a routine inspection. The operator, Kenji, pulls out his phone instead of a binder.

**Rising Action:** Kenji generates a PDF. Lisa receives it either printed or digitally (Kenji AirDrops it to her tablet). She opens it and begins reviewing.

**Climax:** The PDF is organized exactly as she expects health inspection documentation to be organized: header with business name, license number, and address; sections divided by log type; temperature readings sorted chronologically with date, time, unit, reading, and staff name; checklist completions with timestamp and digital sign-off; one corrective action from two months ago with photo and resolution notes.

**Resolution:** Lisa doesn't have to ask follow-up questions. The documentation is complete and self-explanatory. She marks the inspection "Satisfactory" without requesting additional records. Kenji receives no citations.

**Journey Requirements Revealed:**
- PDF format: must match health inspector expectations — structured sections, business header, license number, chronological sort
- Data completeness: every log entry must include timestamp, staff identifier, value, and pass/fail status
- Corrective action documentation: deviation + action taken + verification — the exact HACCP corrective action format inspectors are trained to look for
- No authentication barrier on export: PDF must be shareable without requiring the inspector to log into SafeServe

---

### Journey 5: Owner-Operator — Onboarding (First 5 Minutes)

This journey represents the critical onboarding promise: live in 5 minutes.

**Opening Scene:** Maria discovers SafeServe on AppSumo after seeing a "food truck compliance app" post in the National Food Truck Association Facebook group. She taps the AppSumo link, reads the pitch, purchases the $299 LTD, and clicks through to SafeServe.

**Rising Action:** Signup screen: email + password. Business type: food truck. State: Texas. Business name: "Maria's Taco Truck." County: Travis County. The app loads with pre-selected templates based on Travis County health department requirements (Texas food truck inspection format).

**Climax:** The app shows a guided first checklist with a banner: "Complete your opening checklist to finish setup." Maria goes through 12 items — each has a simple Yes/No or a text field. She taps through in 3 minutes. The checklist completes with a success screen: "Opening checklist complete. Your first record is saved."

**Resolution:** Maria's account is fully set up. She has one completed log. She can now see the full app: Temperature Logs, Pest Control, Corrective Actions, and Inspector Export. She goes to Inspector Export, sees a preview of what her PDF will look like, and thinks: "This is it."

**Journey Requirements Revealed:**
- Signup: email + password only; no credit card for trial; business type + state selection drives template pre-loading
- Pre-loaded templates: 10 most common state formats appear automatically based on state selection
- Guided first-use: walkthrough banner for first checklist; not a tutorial video, just contextual prompting
- Inspector export preview: show a sample PDF before the operator has enough data to generate a real one; builds confidence in the product's promise

---

### Journey Requirements Summary

From these journeys, the following capability areas are required:

| Capability Area | Revealed By |
|----------------|-------------|
| Temperature logging with thresholds and corrective actions | Journeys 1, 3 |
| Digital checklists with role-based assignment | Journeys 2, 3 |
| One-tap inspector PDF export | Journeys 1, 4 |
| Manager/owner oversight and notifications | Journey 2 |
| Food truck multi-jurisdiction profiles | Journey 1 |
| Simple, role-minimal staff UX | Journey 3 |
| Onboarding with pre-loaded state templates | Journey 5 |
| Offline capability with sync | Journey 3 |
| PDF formatted to inspector expectations | Journey 4 |
| Corrective action linked to temperature violations | Journeys 1, 4 |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**HACCP Documentation Requirements:**
- The product must support the five core HACCP corrective action elements: critical control point identification, hazard deviation record, corrective action taken, verification of effectiveness, and responsible party identification. These are federally required for food businesses in the US under FDA Food Safety Modernization Act (FSMA) and state equivalents.
- HACCP documentation does not require FDA certification at the MVP stage for single-unit operators. The product supports HACCP-style documentation without claiming FSMA 204 compliance (traceability) — that is explicitly out of scope.
- Temperature danger zone defaults: 40°F (4°C) to 140°F (60°C) per FDA Food Code. Cold-holding must be ≤40°F; hot-holding must be ≥140°F. Freezer safe zone ≤0°F per USDA guidelines. These defaults must be pre-configured and editable.

**State and Local Health Department Variation:**
- Health inspection requirements vary by state and county. The MVP supports 10 template formats representing the highest-volume markets: California, Texas, Florida, New York, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, and Arizona (collectively representing ~55% of US independent restaurants).
- Templates must accurately reflect each jurisdiction's required log frequency (daily vs. per-shift), required documentation fields, and corrective action format. Using incorrect templates creates regulatory exposure for operators — this is a trust and accuracy requirement, not just UX.
- Food truck operators frequently operate across county and city boundaries. The multi-jurisdiction profile must store separate inspection requirement sets per jurisdiction, not a single merged checklist.

**Food Truck Permit and Commissary Requirements:**
- Mobile food facility (MFF) permits are issued by county or city health departments and expire annually in most jurisdictions. Permit renewal reminders at 60 and 30 days before expiry are a regulatory compliance feature, not a nice-to-have.
- Commissary agreements are a permit condition in most states for food trucks: the truck must operate from a licensed commissary kitchen. Commissary agreement renewal failure = permit violation. The system must store commissary agreement documents, track renewal dates, and alert operators before expiry.
- Multi-stop food trucks (operating at different locations on different days) may face inspections from different jurisdictions on the same week. The jurisdiction-aware profile system must handle this.

**Pest Control Documentation:**
- Most state health codes require documented pest control service at a defined frequency (typically monthly or quarterly). The pest control log must capture: service date, contractor name and license number, findings summary, and next scheduled visit date.
- Photo documentation of the service report is strongly recommended in most jurisdictions as supporting evidence.

### Technical Constraints

**Data Retention:**
- Health inspection documentation must be accessible for the lookback period inspectors commonly request: typically 6–12 months. The system must retain all log data for at least 12 months from creation date, with export covering any date range within that window.
- GDPR-equivalent state privacy laws (California CCPA, Virginia VCDPA, etc.) apply to user personal data (staff names attached to log entries). Data deletion requests must remove personally identifiable information without destroying the compliance record itself. Architecture must support pseudonymization of staff identifiers.

**Offline Functionality:**
- Food trucks often operate in areas with intermittent connectivity (parking lots, event venues, remote commissary kitchens). The mobile app must support full offline functionality for all daily logging operations: checklist completion, temperature entry, corrective action entry, and photo capture. Data must sync automatically when connectivity is restored.
- Inspector export PDF generation requires connectivity (document compilation happens server-side for consistent formatting). The app must clearly indicate when export requires connectivity and offer to queue the export for when connection is available.

**Photo Attachment:**
- Corrective action documentation and pest control records include photo evidence. Photos must be compressed before upload without loss of readability (a photo of a spoiled food item or a pest control report must remain legible). Target: compress to <500KB without quality degradation at standard phone camera resolution.

### Integration Requirements

**Phase 1 (MVP): No integrations.** SafeServe operates as a standalone compliance system. This is intentional — zero integration complexity allows a 2–3 week MVP build.

**Phase 2: Planned integrations for evaluation:**
- Toast POS: trigger compliance review when daily sales data indicates shift end (operational signal, not data integration)
- Email delivery: PDF export via email to owner or shared with inspector
- Stripe: billing and subscription management (required at launch, not an integration — it's infrastructure)

### Risk Mitigations

**Template accuracy risk:** Incorrect regulatory templates create operator liability. Mitigations: (1) Templates sourced directly from state and county health department published inspection forms; (2) Legal disclaimer: SafeServe provides documentation tools, not legal compliance advice; operators are responsible for verifying requirements with their local health authority; (3) Template update process established before launch with versioning.

**Restaurant closure churn:** 17% year-1 closure rate is structural churn. Mitigation: build NRR metric tracking separately from gross retention; multi-location upgrade path reduces closure-driven churn impact as operators who survive expand; adjacent verticals reduce reliance on restaurant vertical alone.

**Multi-jurisdiction complexity:** Food truck operators in dense metro areas may face 3–5 different jurisdiction requirements. Mitigation: MVP supports up to 3 jurisdiction profiles per food truck account; the operator selects which profile applies before generating an export; UI clearly labels which checklist belongs to which jurisdiction.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**First dedicated compliance tool for food trucks:** No product in the market has built a food-truck-specific compliance mode. The multi-jurisdiction profile architecture required to support food trucks (where the same truck faces different inspection requirements in different counties on the same week) is a genuinely novel product design challenge that no existing compliance tool has solved. This creates a defensible first-mover position in a segment growing at 23.7% annually.

**Inspector-ready PDF as a core product feature:** Every existing compliance tool either lacks PDF export or buries it in enterprise configuration workflows. SafeServe makes the inspector-ready PDF the hero feature — the first thing operators see in the onboarding flow, the primary value demonstration, the headline in all marketing. This is a positioning innovation: existing products treat export as an administrative feature; SafeServe treats it as the product.

**AppSumo channel white space for regulated-industry software:** No food safety compliance product has appeared on AppSumo. This is a distribution innovation — applying the LTD-friendly AppSumo channel to a fear-motivated purchase that has never been available there. The combination of a genuine pain point (regulatory fear) and an unfamiliar distribution channel creates a novel go-to-market.

### Market Context & Competitive Landscape

Existing compliance tools exist at two extremes: enterprise (Jolt, ComplianceMate at $90–$300/month with setup calls and contracts) or generic (SafetyCulture at $24/seat/month with no food-specific templates). The middle — simple, food-specific, affordable, self-serve — is entirely vacant.

The AppSumo audience skews toward small business owners and indie hackers who are pre-conditioned to pay for productivity tools. Restaurant and food truck owners in this audience have never seen a compliance tool designed for them at an accessible price point. The first product to show up in this channel captures this audience without paid acquisition competition.

### Validation Approach

**Food truck beachhead validation (Month 1–3):** If food truck operators convert at 2x the rate of restaurant operators in the first 100 customers, the beachhead hypothesis is confirmed. Track conversion by business type at signup.

**Inspector export validation (Month 1–6):** If 50%+ of active customers trigger at least one inspector export event, the hero feature is being used as designed. If the rate is below 30%, investigate friction in the export UX — either the feature is hard to find, or operators don't understand its value.

**AppSumo white space validation (Campaign 1):** If 300+ LTD units sell in the first AppSumo campaign, the distribution channel hypothesis is confirmed. Under 100 units signals either pricing or positioning issues.

### Risk Mitigation

**Template accuracy risk:** Innovation in serving this segment depends on templates being accurate. A wrong template that causes an operator to fail an inspection would be catastrophic for trust. Mitigation: templates reviewed against published state health department forms before launch; legal disclaimer on export PDFs stating SafeServe is a documentation tool, not a regulatory compliance guarantee.

**Food truck multi-jurisdiction complexity:** The multi-jurisdiction profile is a novel product architecture. If operators find it confusing (selecting the wrong jurisdiction before an export), the feature creates false confidence. Mitigation: clear jurisdiction selector UI before export generation; default to "most recent inspection jurisdiction" based on operator's location history.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

SafeServe is a mobile-first SaaS B2B product targeting micro and small businesses (1–5 employees). Unlike typical B2B SaaS, the buyer and the primary user are the same person (the owner-operator), which simplifies the sales motion but requires the UX to serve both an administrative and a front-line role simultaneously.

The product operates on a freemium-to-paid funnel with two pricing tracks:
- **Subscription:** $39/month, month-to-month, no contract
- **LTD (AppSumo):** $299 one-time for single location; $499 for 3 locations; $799 for 10 locations

No free tier beyond a trial period. Compliance tools have no viral free-tier use case — operators either need compliance documentation or they don't.

### Technical Architecture Considerations

**Multi-tenancy:**
- Standard SaaS multi-tenancy: each business account is isolated. Staff from one restaurant cannot access another restaurant's data.
- Within a business account, data is segmented by location (for Phase 2 multi-location). In Phase 1, all data is single-location.
- Tenant isolation is a strict requirement given that compliance records are legally sensitive business documents.

**Role-Based Access Control (RBAC):**

| Role | Permissions |
|------|-------------|
| Owner | Full access: configure settings, view all logs, export reports, manage staff accounts, billing |
| Manager | View all logs, export reports, complete any checklist, add staff, receive notifications |
| Staff | Complete assigned checklists and temperature entries; no access to other logs, exports, or settings |

Staff role is intentionally minimal — reducing cognitive load increases adoption among non-technical kitchen workers who may resist new tools.

**Billing and Subscription Management:**
- Stripe for subscription billing and LTD license management
- AppSumo API integration for LTD license redemption and validation
- Subscription management: operator can upgrade/downgrade, add locations, or cancel without calling support

**Data Architecture:**
- Log entries are immutable once submitted (compliance records cannot be edited retroactively — this is both a regulatory best practice and a trust signal for health inspectors)
- Corrections to log entries are handled via a "corrective note" linked to the original entry, not an edit
- All timestamps stored in UTC, displayed in the operator's local timezone
- Audit log of all account actions (log submission, export generation, staff role changes) retained for 24 months

**Mobile-First Architecture:**
- React Native (iOS + Android from single codebase) with offline-first data architecture
- Local SQLite database for offline log storage with background sync via background-app refresh
- Push notifications via APNs (iOS) and FCM (Android)
- Progressive Web App (PWA) for desktop access to owner/manager dashboards and export generation

### Implementation Considerations

**Template Management System:**
- Templates stored as structured JSON objects defining: checklist items, temperature thresholds, required frequency, state/county metadata
- Template versioning: when a state updates inspection requirements, operators are notified of template changes and given 30 days to review before the new template takes effect
- New templates added without app update — templates served from backend, not bundled in app binary

**PDF Generation:**
- Server-side PDF generation (not client-side) for consistent formatting across devices
- PDF engine: headless Chrome / Puppeteer or equivalent (PDFKit for Node.js as alternative for simpler approach)
- PDF generation SLA: < 5 seconds for 6-month log archive; < 2 seconds for 1-month archive
- Generated PDFs cached on server for 24 hours to support re-download without regeneration cost

**Notification System:**
- Shift start reminders: scheduled per shift configuration (e.g., 6:00 AM for morning shift)
- Overdue alerts: temperature check not logged within 2 hours of configured window
- Permit/commissary renewal: 60-day and 30-day advance warnings
- Compliance streak milestones: "30 days without a missed log" (engagement and retention mechanic)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product is viable if and only if operators can generate a real inspector-ready PDF from real compliance data. Every MVP feature exists to enable this outcome. Features that do not contribute to the first inspector export are Phase 2 or later.

**Resource Requirements:** 1 full-stack developer (React Native + Node.js/Python backend), 1 designer (UX + visual), 2–3 weeks build time. The MVP is intentionally simple: no AI, no IoT, no integrations, no complex data analysis. The technical challenge is template accuracy and PDF formatting, not engineering complexity.

**MVP Success Gate:** At 90 days post-launch:
- 100+ paying customers
- 70%+ complete a checklist in the first week of signup
- 20+ verified inspector export events
- 3+ unprompted testimonials citing the PDF feature
- NPS 35+
- Churn from product dissatisfaction: < 10%

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Owner/manager onboarding and business setup (< 5 minutes)
- Daily staff temperature log completion
- Opening and closing checklist completion
- Pest control log maintenance
- HACCP corrective action documentation
- One-tap inspector PDF export

**Must-Have Capabilities:**
1. Email/password authentication and business profile setup
2. Business type and state selection driving template pre-loading
3. Pre-loaded templates for 10 US state health department formats
4. Daily temperature log: configurable units, pass/fail thresholds, corrective action entry
5. Digital checklists: item completion with timestamp and staff sign-off
6. Pest control log: date, contractor, findings, next visit, photo
7. HACCP corrective action log: CCP, deviation, action, verification, linked to temperature violations
8. Inspector PDF export: date-range selector, organized sections, business header, print-ready format
9. Multi-user accounts: owner, manager, staff roles with appropriate permissions
10. Food truck mode: jurisdiction profiles (up to 3), commissary agreement tracking, permit renewal reminders
11. Push notifications: shift start, overdue alerts, permit/commissary renewal warnings
12. Offline functionality for all logging operations; background sync
13. Stripe subscription billing and AppSumo LTD redemption

### Post-MVP Features

**Phase 2 (Post-MVP, Months 4–12):**
- Full 50-state template library
- Multi-location dashboard (2–5 locations)
- Compliance streak reports and monthly owner email summaries
- Insurance documentation export format
- Referral program with in-app referral links
- Sysco / US Foods partnership integration (recommendation in rep conversations)

**Phase 3 (Expansion, Months 12–30):**
- IoT / Bluetooth temperature sensor integration
- Daycare compliance module (same workflow, daycare-specific templates)
- Cleaning service compliance module
- Regulatory update subscription (template auto-update with change notifications)
- Canada and Australia market expansion
- White-label / reseller program

### Risk Mitigation Strategy

**Technical Risks:**
- Template accuracy is the highest technical risk. Mitigation: source all templates directly from published state health department forms; engage one regulatory consultant to review top 3 state templates before launch; legal disclaimer on all exports.
- PDF generation performance for large archives (12-month logs with photos). Mitigation: implement server-side PDF generation with async job queue; show progress indicator; cache generated PDFs.
- Offline sync conflicts (two staff members completing the same checklist offline). Mitigation: last-write-wins with audit log; checklist items locked once submitted by one user.

**Market Risks:**
- Food trucks may not convert as expected; restaurant operators may be primary customers. Mitigation: track conversion by business type from day 1; if restaurants dominate, accelerate restaurant-specific template expansion and deprioritize food truck mode depth.
- AppSumo campaign may not hit 300 units. Mitigation: target 100 units as minimum viability; secondary organic channels (food truck communities, SEO) are not dependent on AppSumo success.

**Resource Risks:**
- 2–3 week MVP timeline is achievable only with scope discipline. Mitigation: IoT integrations, analytics, multi-location, and all Phase 2+ features are categorically excluded; any scope creep must be evaluated against the 90-day success gate.

---

## Functional Requirements

### User Authentication & Account Management

- FR1: Operators can create an account with email and password
- FR2: Operators can configure their business profile (name, address, license number, business type, state)
- FR3: Operators can add staff members to their account and assign roles (owner, manager, staff)
- FR4: Operators can remove staff members or change their roles
- FR5: Staff members can log in with their own credentials and access only their assigned capabilities
- FR6: Operators can redeem an AppSumo LTD license code to activate their account
- FR7: Operators can manage their subscription (view billing, upgrade plan, cancel) without contacting support

### Template & Configuration Management

- FR8: Operators can select their business type (food truck / restaurant) and state during onboarding, triggering pre-loaded inspection templates appropriate for their jurisdiction
- FR9: Food truck operators can add up to 3 jurisdiction profiles per account, each with a separate checklist template appropriate to that county or city
- FR10: Operators can customize checklist items within a template (add, remove, or rename items beyond the pre-loaded set)
- FR11: Operators can configure temperature monitoring units (unit name, type, minimum and maximum safe temperatures)
- FR12: Operators can configure shift schedules for notification timing
- FR13: Operators can update their business profile information (address, license number, permit expiry dates, commissary agreement details)

### Daily Temperature Logging

- FR14: Staff can log temperature readings for each configured monitoring unit, with the system automatically flagging readings outside the configured safe range
- FR15: When a temperature reading is flagged as out of range, staff are required to log a corrective action (describing the deviation, action taken, and disposition of affected product)
- FR16: Staff can attach a photo to any log entry, including corrective action documentation
- FR17: All temperature log entries include timestamp and the name of the staff member who submitted the entry
- FR18: Owners and managers can view the temperature log history for any date range

### Checklist Management

- FR19: Staff can view and complete their assigned opening and closing checklists
- FR20: Each checklist item can be marked complete, incomplete, or flagged with a note
- FR21: Completed checklists include a timestamp and digital sign-off by the completing staff member
- FR22: Managers and owners receive a notification when a checklist is completed or when a checklist remains incomplete past the scheduled time
- FR23: Owners and managers can view checklist completion history for any date range

### Pest Control Log

- FR24: Operators can log pest control service events including service date, contractor name, findings summary, and next scheduled visit date
- FR25: Operators can attach a photo to a pest control log entry (e.g., a photo of the service report)
- FR26: Operators receive a reminder notification 7 days before a scheduled pest control visit

### HACCP Corrective Action Documentation

- FR27: Operators and managers can log corrective action records including: critical control point, deviation identified, corrective action taken, verification of effectiveness, and responsible party
- FR28: Corrective action records can be linked to a specific temperature log entry that triggered the deviation
- FR29: Operators and managers can view the full corrective action log history

### Inspector Export

- FR30: Operators and managers can generate an inspector-ready PDF export covering any user-selected date range
- FR31: The generated PDF includes organized sections: business header (name, address, license number), Temperature Logs, Opening/Closing Checklists, Pest Control Log, and Corrective Action Records
- FR32: The PDF is formatted for standard 8.5"×11" printing and can be shared digitally via email or AirDrop
- FR33: Operators can generate the PDF export without internet connectivity if log data is available locally (PDF generation may be queued for when connectivity is restored)
- FR34: Previously generated PDFs are available for re-download for 24 hours without regenerating

### Food Truck Mode

- FR35: Food truck operators can store and manage up to 3 jurisdiction profiles per account, each with a separate set of inspection checklist templates
- FR36: Food truck operators can store their commissary kitchen agreement, including commissary name, address, agreement expiry date, and uploaded document
- FR37: Food truck operators can track multiple permits (mobile food facility permit, business license, fire safety permit) with expiry dates and renewal reminders
- FR38: Food truck operators receive notifications 60 days and 30 days before any permit or commissary agreement expiry date
- FR39: When generating an inspector export, food truck operators can select which jurisdiction's records to include

### Notifications

- FR40: Operators can configure shift start times, triggering a push notification to assigned staff to complete their opening checklist
- FR41: The system sends an overdue alert to the manager when a temperature log has not been submitted within 2 hours of the configured monitoring window
- FR42: The system sends overdue alerts to the manager when a checklist has not been completed within 30 minutes of the shift start time
- FR43: Operators receive permit and commissary renewal reminders at 60 days and 30 days before expiry

### Owner / Manager Dashboard

- FR44: Owners and managers can view a dashboard showing today's compliance status: checklists completed, temperature logs submitted, any outstanding items
- FR45: Owners can view a compliance streak indicator (consecutive days with no missed required logs)
- FR46: Managers can view a list of all staff accounts, their roles, and last login date

---

## Non-Functional Requirements

### Performance

- PDF generation completes in under 5 seconds for a 6-month log archive on a standard server instance
- Checklist load time: under 1 second from app open to first interactive element (logged-in user on reliable connection)
- Temperature log entry submission confirms within 2 seconds on 4G connectivity
- Offline mode activates within 1 second of connectivity loss; sync completes within 30 seconds of connectivity restoration

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Staff passwords stored as bcrypt hashes (cost factor 12+); no plaintext password storage
- Authentication tokens expire after 30 days of inactivity; refresh tokens rotated on each use
- Tenant isolation enforced at the database query level: no cross-account data access possible
- Photo uploads scanned for malware before storage
- Log entries are immutable after submission: no edit capability; corrections handled via linked corrective notes (audit trail preserved)
- GDPR/CCPA compliance: staff personal data (names) can be pseudonymized on deletion request without destroying compliance records; data export available for data subject access requests

### Reliability

- System uptime: 99.5% monthly SLA (operators must access the app at shift start; downtime causes compliance gaps that create regulatory exposure)
- Data durability: zero data loss for submitted log entries; offline queue persists through app force-close and device restart
- PDF generation failures: retry automatically up to 3 times; notify user with actionable error message if all retries fail
- Push notification delivery: best-effort via APNs/FCM; critical reminders (permit expiry) sent via email as backup channel

### Scalability

- Architecture supports 10,000 active business accounts at launch without infrastructure changes
- System must scale to 100,000 accounts within 18 months with horizontal scaling of application tier
- PDF generation handled via async job queue to prevent blocking application server under concurrent export load
- Background sync designed to handle bulk sync on connectivity restoration without timeout or data loss

### Accessibility

- Mobile app: WCAG 2.1 AA compliance for all interactive elements
- Text contrast ratios: 4.5:1 minimum for standard text, 3:1 for large text
- Touch targets: minimum 44×44 points (iOS) / 48×48 dp (Android) for all interactive elements
- Support system font size settings; app UI scales with accessibility font size preferences
- Spanish language support in Phase 2 (significant portion of food truck and restaurant staff are Spanish-speaking)

### Integration

- AppSumo: LTD license redemption via AppSumo API at account creation; license validation checked on each login
- Stripe: subscription billing, webhook handling for payment success/failure/cancellation events; customer portal for self-service billing management
- APNs + FCM: push notification delivery for iOS and Android respectively
- Email delivery via transactional email provider (Postmark or SendGrid): onboarding, PDF export delivery, permit renewal backup reminders, subscription receipts

---

## Appendix: Key Decisions Log

| Decision | Rationale |
|----------|-----------|
| Manual temperature entry only at MVP (no IoT) | IoT hardware dependency (Bluetooth sensors) adds cost, complexity, and a hardware purchasing step that kills the "live in 5 minutes" promise. Manual entry solves the problem; IoT is a Phase 2 upgrade for committed customers. |
| US market only at MVP | State-by-state regulatory variation already makes template coverage a significant data/accuracy challenge. Adding EU HACCP, Canadian provincial, or UK FSA requirements before US product-market fit is confirmed would dilute focus and increase template accuracy risk. |
| No free tier | Compliance tools have no viral free-tier use case. A trial period (7–14 days) is the correct acquisition motion; a permanent free tier would attract non-paying users who don't value the product and create support burden. |
| Food truck beachhead before restaurant expansion | Food trucks have zero dedicated competitors, higher urgency (multi-jurisdiction complexity), and community-driven distribution (parks, commissaries, associations). Restaurant operators can onboard immediately — the beachhead is a GTM and community-building priority, not a product limitation. |
| AppSumo LTD as primary launch channel | Confirmed white space: no food safety compliance product has launched on AppSumo. LTD funds development, seeds word-of-mouth, and validates demand before investing in subscription growth infrastructure. |
| Immutable log entries | Compliance records that can be edited retroactively undermine the entire value proposition for health inspectors. Immutability is both a trust signal and a product design principle. Corrections handled via linked corrective notes. |
| Server-side PDF generation | Client-side PDF generation would produce inconsistent formatting across devices and OS versions — a critical failure mode when the PDF is handed to a health inspector. Server-side generation with a single rendering engine ensures consistent output regardless of device. |

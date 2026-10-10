---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/trade-license-renewal-tracker.md
  - _bmad-output/planning-artifacts/product-brief-trade-license-renewal-tracker.md
workflowType: 'prd'
project_name: 'trade-license-renewal-tracker'
user_name: 'Root'
date: '2026-10-10'
classification:
  projectType: saas_b2b
  domain: compliance_regtech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — TradeShield

**Author:** Root (automated BMAD pipeline)
**Date:** 2026-10-10
**Product:** TradeShield — Trade License & Certification Renewal Tracker
**Source:** Product Brief 2026-10-09, Shortlisted Idea Score 89/105 (↑91 on 2026-10-10)

---

## Executive Summary

TradeShield is a compliance dashboard for small trade business owners — HVAC shops, electrical contractors, plumbing firms, and cosmetology salons with 2–15 licensed employees. The product tracks state-specific license expiration dates, continuing education (CE) credit requirements, and automates renewal reminders before a lapsed license causes a job-site shutdown.

The addressed problem is precise and financially quantified: a small trade shop with 7 technicians carries 7–14+ active licenses and certifications, each expiring on different schedules across potentially multiple states. When one lapses unnoticed, the consequences are immediate — the technician cannot pull permits, cannot legally work, and the shop loses $3,000–$20,000 per incident in delayed jobs, late fees ($250+), and emergency reapplication costs.

The market gap is structurally unoccupied: CE Broker (2M+ users) dominates healthcare/cosmetology compliance for individuals but has never entered skilled trades. LicensedTrades.com is the only trade-specific multi-employee tool but prices at $199/month, structurally abandoning the 1–10 employee shop that represents the majority of HVAC, electrical, and plumbing businesses in the US. No product exists between "free spreadsheet" and $199/month for this segment.

TradeShield fills this gap at $49/month flat for up to 10 employees. The core product moat is a proprietary state-specific license renewal rules database — renewal periods, CE hour requirements, approved provider types — that removes the need for owners to manually research state regulations. The system knows what each license requires; owners just add employees and see their compliance status.

**12-month revenue target:** $18,000 MRR / $216K ARR, from 400 paying customers.

### What Makes This Special

Three properties in combination constitute an unoccupied product category:

1. **Sub-$50/month pricing** for a purpose-built trade compliance tool. All existing trade-specific tools start at $199/month. All sub-$50 tools are horizontal credential trackers without pre-loaded trade rules.

2. **Employer dashboard perspective** — built for the shop owner who needs to see all 7 technicians in one view, not the individual professional tracking their own credentials. CE Broker and most compliance tools are individual-centric. TradeShield is employer-centric.

3. **Pre-loaded state rules library** — the system knows that a California C-10 electrical contractor requires 24 CE hours per renewal period including 8 hours of safety training. Owners do not need to look this up. No horizontal credential tracker provides this. Building and maintaining this library is the moat.

The combination creates a product that competes at a price point no trade-specific competitor occupies, with a data asset no horizontal competitor can quickly replicate.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant web application, subscription pricing
- **Domain:** Compliance / RegTech — state-regulated professional licensing for skilled trades
- **Complexity:** Medium — multi-state regulatory data with ongoing maintenance requirements; no healthcare/financial HIPAA/PCI complexity but requires accurate, auditable compliance tracking
- **Project Context:** Greenfield — no existing codebase, no brownfield constraints

---

## Success Criteria

### User Success

The product succeeds for users when a licensed technician's renewal is completed before the expiry date — driven by a TradeShield reminder — rather than discovered after the license has lapsed. This is the singular behavioral outcome the product exists to produce.

**Primary user success metric — proactive renewal rate:** 85%+ of tracked licenses renewed before expiry date across the active customer base. This is the leading indicator that TradeShield is working. A customer with 5 renewed-on-time licenses and 0 lapses has gotten full value regardless of feature usage.

**Onboarding completion:** 80%+ of new users complete initial roster setup (all employees entered with licenses) within 7 days of signup. The compliance dashboard delivers its "aha moment" on Day 1 — seeing all technicians color-coded green/yellow/red. Users who never complete onboarding receive zero value.

**CE tracking engagement:** 70%+ of licenses with active CE requirements show logged CE hours within 60 days of account creation. CE tracking is the second core value loop after expiry reminders.

**Reminder utility:** Renewal reminder emails achieve 40%+ open rate (3x industry average for transactional email) and 20%+ click-through to the renewal guidance page. Reminders that go unopened are failing as a behavior-change mechanism.

### Business Success

| Milestone | Customers | MRR | Signal |
|-----------|-----------|-----|--------|
| Month 1   | 20        | $980 | Community-led signups validate distribution |
| Month 3   | 50        | $2,500 | Pre-AppSumo paid base confirms willingness to pay |
| Month 6   | 200       | $9,800 | $10K MRR threshold reached |
| Month 12  | 400       | $18,000 | Target run rate achieved |

**AppSumo LTD launch:** 300–500 units at $59 within 30-day window. LTD revenue funds state rules library expansion from 10 → 75 rule sets.

**Net revenue churn:** <5% monthly by month 3; <2% by month 12. Compliance is non-optional and recurring — churn should be near-zero unless the business closes.

**CAC:** <$50 through month 6, from community-led Reddit/Facebook distribution and AppSumo. Zero paid acquisition required in Year 1.

**MVP go/no-go signal:** 50 email signups from a community post in r/HVAC before any build. If <20 signups from a thoughtful "would you use this?" post, revisit messaging before committing to state library build.

### Technical Success

- **Accuracy:** State rules library data is correct at launch and flagged within 7 days when regulations change. Database errors that cause incorrect CE requirements to display are P0 bugs.
- **Reliability:** 99.5% uptime (compliance is not real-time-critical but reminder emails must send). Reminder delivery failure rate <0.5%.
- **Performance:** Dashboard loads within 2 seconds for teams of up to 50 employees. Reminder email delivery within 15 minutes of scheduled send time.
- **Security:** All customer data encrypted at rest and in transit. PII handling compliant with GDPR/CCPA minimums for US-based SaaS.

### Measurable Outcomes

MVP is validated when all four of the following are met by end of Month 3:
1. 50 paying customers at $49/month (before AppSumo launch)
2. 15+ NPS responses with score >35
3. Proactive renewal rate >75% across active customer base
4. AppSumo launch generates 200+ LTD purchases

If AppSumo generates <100 units: positioning is wrong, not the market. Run customer interviews before expanding state library.

---

## Product Scope

### MVP — Minimum Viable Product

**MVP philosophy:** Problem-solving MVP. The minimum feature set that delivers the primary value proposition — zero lapsed licenses — for a 5-technician HVAC or electrical shop in a top-5 US state. Revenue-generating from day one.

**Core user journeys supported by MVP:**
- Shop owner onboards, adds employees with licenses, sees compliance dashboard on Day 1
- System sends automated reminders 90/60/30 days before each expiry
- Owner logs CE completions; system tracks progress against state-specific requirements
- Owner exports PDF compliance report for bid packages

**MVP capabilities (must-have for MVP to be useful):**
- Employee roster management with per-person license/certification records
- Team compliance dashboard: color-coded green/yellow/red per employee per license
- Automated email reminders at 90/60/30/7 days before expiry, sent to owner + optionally to technician
- CE hour tracking per employee: log completions, track progress vs. state-required hours
- State rules library: 2 trades (HVAC, electrical) × 5 states (CA, TX, FL, NY, IL) = 10 rule sets
- PDF compliance report export
- CSV import for bulk employee onboarding
- Account management: signup, billing, plan management

### Growth Features (Post-MVP, Months 3–6)

- SMS reminders (after email open-rate validation)
- License document/card photo upload and storage
- Plumbing trade support (3rd trade)
- State library expansion to 25 states
- Jobber/Housecall Pro CSV import integration
- Free public state rules lookup tool (SEO/lead gen asset on separate static site)
- Technician mobile-friendly CE logging (email link → simple form, no app required)

### Vision (Future, Months 6–12+)

- Full 50-state library across 4+ trades (HVAC, electrical, plumbing, roofing/fire)
- Cosmetology employer dashboard (differentiated from CE Broker's individual focus)
- Native Zapier integration for alert routing
- Multi-location business accounts
- AI-powered state rules monitoring (automatic flag when regulations change)
- Insurance integration — compliance verification reports for commercial insurance renewals
- Certification marketplace — connect shop owners with CE-approved providers, revenue-share from enrollment
- API for FSM tool integrations (ServiceTitan, Jobber, Housecall Pro)

---

## User Journeys

### Journey 1: Marcus, the HVAC Shop Owner — First Week (Primary Success Path)

Marcus runs a 7-tech HVAC company in Texas. Six months ago, one of his journeymen's state HVAC contractor licenses expired unnoticed. The tech went to pull a permit and was flagged. The job delayed four days. The customer was angry. Marcus paid $400 in late fees and spent two days on emergency paperwork.

**Scene 1 — Discovery:** Three weeks after the incident, Marcus posts in r/HVAC: "How do you guys track your techs' license renewals? I've been using a spreadsheet and just got burned." He gets a response linking to TradeShield. He clicks, reads the above-the-fold message: "One of your techs just got flagged for an expired license at the job site. Here's how to make sure it never happens again." He recognizes the exact story. He checks the price: $49/month. He signs up for a free trial.

**Scene 2 — Onboarding (Day 1, ~15 minutes):** Marcus enters his 7 technicians. For each, he adds their license type (Texas HVAC contractor), issue date, and expiry date. The system pre-populates the Texas HVAC license renewal requirements from the rules library — Marcus never had to look them up. He adds one journeyman who has an expired California HVAC license from a prior job.

**Scene 3 — Aha moment:** The compliance dashboard loads. Five green technicians. One yellow (expiring in 67 days — a reminder he would have missed). One red — the California license, already expired. Marcus sees in 30 seconds what used to require cross-referencing his spreadsheet, three phone reminder alarms, and a prayer that the state mailing arrived. He upgrades to paid before the free trial ends.

**Scene 4 — Week 1 activation:** Marcus sets up team notifications (reminders go to both him and each technician). He logs CE completions for the past year for two techs. He exports a PDF compliance report and attaches it to a commercial subcontract bid.

**Scene 5 — Month 2 retention:** The yellow-status tech's 90-day reminder arrives by email. Marcus clicks through, sees the technician needs to complete 16 more CE hours before the renewal window opens. He schedules the CE course. The renewal happens proactively. This is the moment the product has delivered its core value.

**Journey requirements revealed:** Dashboard with per-employee color status, automated reminder emails with direct action links, CE progress tracking with hours logged vs. hours required, multi-state license records per employee, PDF export.

---

### Journey 2: Diana, the California Electrical Contractor — CE Tracking Edge Case

Diana owns a 4-person electrical firm in California. She bids on commercial tenant improvement projects where GCs require proof of current licenses for all workers on-site.

**Scene 1 — The incident that drove her here:** Her journeyman was 8 hours short on CE when his license came up for renewal last year. She'd been tracking CE in a Google Sheet but missed the detail. He missed the renewal window, had to reapply, and couldn't work one project for three weeks.

**Scene 2 — Evaluating TradeShield:** Diana's specific test during trial: does the system already know that California C-10 electrical contractors need 24 CE hours per renewal period including 8 hours of safety training? She adds herself and selects her license type. The system displays the CE requirement automatically — she didn't enter it. This is the feature that sells her.

**Scene 3 — CE tracking workflow:** Diana logs CE completions for her journeymen. She can see at a glance: Journeyman A has 16/24 hours logged with 8 required safety hours. Journeyman B has 8/24 hours logged with 0 safety hours. Both show yellow status. She has 5 months to get them current.

**Scene 4 — Bid documentation:** A GC requests compliance documentation for a new project. Diana generates a PDF compliance report in 90 seconds. It shows all 4 employees, all licenses, all CE status, date-stamped. She attaches it to the bid. She wins the project.

**Journey requirements revealed:** Trade-specific CE requirements pre-populated from state rules library, CE hour logging with completion type tracking (regular vs. safety-specific hours), per-employee CE progress visualization (hours logged vs. hours required), PDF export with date stamp for bid packages.

---

### Journey 3: Rita, the Salon Owner — Cosmetology Multi-Employee View

Rita owns a 5-stylist cosmetology salon in Florida. Her stylists each have CE Broker accounts for their individual renewal needs, but CE Broker shows Rita nothing. She has to manually check each stylist's CE Broker profile to know who is current and who isn't.

**Scene 1 — Pain discovery:** A stylist's Florida cosmetology license expired while Rita was managing a staffing change. She found out when the stylist mentioned it offhandedly two weeks after the expiry date. The stylist worked unlicensed for two weeks — a regulatory violation with potential fines.

**Scene 2 — TradeShield trial:** Rita adds her 5 stylists. The Florida cosmetology license renewal rules are pre-loaded — 16 CE hours per 2-year renewal cycle. She can see the whole team at a glance: 3 green, 1 yellow (expiring in 45 days), 1 red (the already-expired stylist).

**Scene 3 — Resolution:** The red stylist's emergency renewal gets handled. TradeShield's 90-day reminder fires on the yellow stylist before the next expiry. Rita sets up reminders to go directly to each stylist so they're aware of their own renewal status.

**Journey requirements revealed:** Cosmetology trade support (Phase 2 scope), per-technician notification setup (reminders to both owner and employee), Florida state rules support.

---

### Journey 4: Shop Owner — Onboarding Failure Recovery (Edge Case)

Marcus's colleague Jake owns a 3-person electrical contracting firm. He signs up for TradeShield but doesn't complete onboarding — he adds one employee but never adds the other two. He doesn't use the app after Day 2.

**Scene 1 — Incomplete onboarding:** The dashboard shows 1 employee. The other two techs have no records in the system. No reminders fire for them.

**Scene 2 — Re-engagement trigger:** 30 days after signup, TradeShield sends an email: "You've added 1 employee but you have no license records entered yet. A shop with 0 tracked renewals gets 0 protection. It takes 5 minutes to add your team — here's a step-by-step guide." Jake clicks, completes onboarding for all 3 employees in 8 minutes.

**Journey requirements revealed:** Onboarding progress tracking, automated re-engagement email for incomplete setup (trigger: signed up but < team fully entered after N days), in-app onboarding checklist with completion state.

---

### Journey Requirements Summary

| Capability Needed | Revealed By |
|---|---|
| Employee roster with multi-license records | Journey 1, 2, 3 |
| State rules library with trade-specific CE requirements | Journey 2 (critical), Journey 1 |
| Color-coded compliance dashboard (green/yellow/red) | Journey 1, 3 |
| Automated multi-cadence reminder emails | Journey 1, 3, 4 |
| CE hour logging with progress tracking | Journey 2 |
| Per-employee notification routing | Journey 3 |
| PDF compliance report export | Journey 1, 2 |
| Onboarding completion tracking + re-engagement | Journey 4 |
| Multi-state license records per employee | Journey 1 |
| Cosmetology trade support | Journey 3 (Phase 2) |

---

## Domain-Specific Requirements

### Compliance & Regulatory Context

TradeShield operates in the state-regulated professional licensing domain. Regulatory requirements are set by individual state licensing boards, which vary by trade and state. The product does not submit filings to any regulatory body — it is a tracking and notification tool, not a filing system. This distinction keeps the regulatory surface area manageable.

**State data accuracy obligations:**
- Rules library data must accurately reflect current state requirements for each trade × state combination
- Inaccurate CE hour requirements displayed to users create a compliance failure risk for the customer (they underprepare)
- Accuracy must be validated at launch for all 10 MVP rule sets
- User-reported data errors must be handled within 7 days with confirmed correction or public status note

**Data freshness obligations:**
- State licensing boards change renewal requirements with notice periods ranging from 30 days to 1 year
- TradeShield must monitor and update rules library when state requirements change
- At MVP scale (10 rule sets): manual monitoring via state board websites is sufficient
- At Phase 2 scale (75 rule sets): systematic monitoring approach required (user-contribution model, state board email notification subscriptions, or third-party regulatory monitoring service)

**Disclaimer requirements:**
- All displayed renewal requirements must include a disclaimer: "Requirements sourced from [State] [Trade] Board as of [date]. Verify current requirements directly with your state board before submitting renewal applications."
- This protects TradeShield from liability if state requirements change between database updates

### Technical Constraints

**Data security:**
- Customer employee records (names, license numbers, expiry dates) are PII and must be encrypted at rest
- No Social Security Numbers or financial data are stored — license numbers are the primary sensitive identifier
- Multi-tenant data isolation is required: Customer A must never see Customer B's employee data
- SOC 2 Type II certification is not required for MVP but architecture should not preclude it

**Email deliverability:**
- Reminder emails are the primary product value delivery mechanism
- Transactional email must be delivered with <15 minute delay and <0.5% failure rate
- SPF/DKIM/DMARC configuration required for all outbound email
- Bounce and spam complaint handling required (undeliverable emails must be flagged in dashboard)

**Audit trail:**
- All changes to license records (create, update, mark-renewed) must be timestamped with user attribution
- Customers may need to demonstrate compliance history to insurance auditors or GCs
- Minimum 3-year retention of license record history

### Integration Requirements (MVP)

**Email delivery:** Transactional email service (e.g., Postmark, SendGrid) — no custom SMTP
**Payment processing:** Stripe for subscription billing — PCI compliance handled by Stripe
**PDF generation:** Server-side PDF generation for compliance reports — no third-party PDF SaaS required at MVP scale
**CSV import:** Standard CSV parsing for bulk employee/license import — no external integration

### Risk Mitigations

**State rules inaccuracy risk (Medium probability, High impact):**
All 10 MVP rule sets reviewed by at least one industry-specific source (NATE for HVAC, NECA for electrical) before launch. User-facing "report an error" link on every rules display triggers a support ticket within TradeShield's helpdesk.

**ServiceTitan expanding SMB feature set (High probability, High impact):**
TradeShield must achieve 500+ paying customers before ServiceTitan prioritizes the <$100/month segment. AppSumo launch is the primary acceleration lever. Speed is the primary defense.

**Category awareness gap (High probability, Medium impact):**
All acquisition content (Reddit, landing pages) leads with the crisis story, not the product category. "My tech just got flagged for an expired license" outperforms "license tracking software" in every acquisition channel.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**The state rules library as productized domain intelligence** — TradeShield's core innovation is not the reminder system (that's table-stakes) but the pre-loaded trade-specific state licensing rules database. Every competitor that has tried to build in this space offers reminders without rules intelligence. The rules library removes the primary friction in compliance tracking (manually researching what each license requires) and converts it into a product moat that is genuinely difficult to replicate at scale.

**Employer-centric dashboard for a historically individual-centric product category** — CE Broker, the dominant compliance tracking platform in adjacent industries, is architecturally individual-centric. Individual professionals log into CE Broker to track their own credentials. TradeShield inverts this: it is built for the shop owner who needs to see all 7 technicians at a glance. The employer-side view is genuinely novel in the skilled trades compliance category.

### Market Context

The closest validated analogy is CE Broker's trajectory: individual-focused compliance tracking in healthcare/cosmetology grew to 2M+ users and 100+ state licensing board integrations. CE Broker was acquired by Propelus; LicenseLogix (compliance management for professionals) was acquired by Wolters Kluwer. Both exits confirm that compliance SaaS in regulated professions attracts strategic acquirers.

The RegTech market is growing at 19.2% CAGR from $20B to $116B. Within that, SMB compliance and license tracking is an emerging 2026 category per trend scanning. TradeShield enters as the first purpose-built trade-specific employer-dashboard tool in this wave.

### Validation Approach

**Pre-build validation:** 50 email signups from a r/HVAC community post before any build. This validates that the crisis story resonates and that the distribution channel works.

**Rules library accuracy validation:** All 10 MVP rule sets reviewed against primary source (state licensing board websites) before launch. At least 2 industry practitioners review the HVAC and electrical rules before public beta.

**Pricing validation:** AppSumo LTD launch at $59 is a hard pricing test — if the market converts at LTD rates comparable to similar compliance tools ($140K–$800K in comparable launches), the $49/month SaaS price point is validated.

### Risk Mitigation

**Rules library staleness:** Quarterly review cycle for all active rule sets. User-flagged accuracy reports handled within 7 days. Date-stamp on all displayed rules so users know when the data was last verified.

**Employer dashboard vs. CE Broker's future moves:** CE Broker has never entered skilled trades in 10+ years of operation. The employer-dashboard angle is structurally different from their individual-centric model — serving different customers solves different problems. Even if CE Broker enters trades, it would likely do so with an individual-first product that doesn't serve Marcus's core need.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

TradeShield is a multi-tenant SaaS product. Each customer account (business) is a tenant. All customer data must be logically isolated — no cross-tenant data access is possible through any API or UI pathway.

**Tenant structure:**
- One tenant = one business account (e.g., "Marcus's HVAC LLC")
- One account has one owner/admin at MVP (multi-admin is Phase 2)
- All employees, licenses, CE records, and reminders are scoped to the tenant
- Billing is per-tenant (flat $49/month for up to 10 employees, or $9/employee/month)

### Permission Model

**MVP roles (two levels):**
- **Account Owner (Admin):** Full CRUD on all employees, licenses, CE records, account settings, billing. Receives all system-generated notifications by default.
- **Technician (optional, invitation-only):** Read-only access to their own license and CE records. Can log their own CE completions. Cannot view other employees' records.

Phase 2: Add Manager role with employee-level write access but no billing access.

### Subscription & Pricing Model

**Pricing tiers:**
- **Flat:** $49/month for up to 10 employees
- **Per-seat:** $9/employee/month for teams >10 employees (expansion revenue driver)
- **LTD (AppSumo):** $59 one-time for up to 5 employees, lifetime access to current features

**Billing requirements:**
- Stripe-powered subscription management
- Monthly and annual billing options (annual at ~20% discount = ~$39/month equivalent)
- Upgrade/downgrade in-app
- 14-day free trial, no credit card required for trial
- Automatic plan upgrade prompt when employee count exceeds current tier limit

### Technical Architecture Considerations

**Web application:** Server-rendered or hybrid web app (SSR preferred for SEO landing pages + compliance reports). Mobile-responsive but not a mobile-first design — primary users access at a desk.

**State rules library:** Structured data store (relational DB table or YAML/JSON config files). Schema: `{trade, state, license_type, renewal_period_years, ce_hours_required, ce_hours_by_type, approved_provider_types, source_url, verified_date}`. Rule sets are read-only for customers; only TradeShield admins update them.

**Reminder engine:** Scheduled job (cron or queue-based) that scans all active licenses daily, calculates days-to-expiry, and enqueues reminder emails at the configured thresholds (90/60/30/7 days). Idempotent — re-running the same day does not send duplicate reminders.

**PDF generation:** Server-side rendering of compliance report PDF from current license/CE data snapshot. No live data — PDF is a point-in-time snapshot with generation timestamp.

### Implementation Considerations

**State library first:** The state rules library must be built and validated before customer onboarding flows can be completed. Library schema must support the full 50-state × 10-trade expansion without schema migration.

**Reminder suppression logic:** After a renewal is logged as complete for a license cycle, all pending reminders for that cycle are suppressed. This prevents reminder fatigue after the user has already acted.

**Data import strategy:** CSV import reduces onboarding friction for shops with existing spreadsheet data. Validate required columns (name, license_type, state, expiry_date) with clear error messages for malformed rows. Do not reject the entire file for one bad row — import valid rows, surface errors for the rest.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. Build the minimum feature set that delivers zero lapsed licenses for a 5-technician HVAC or electrical shop in a top-5 US state. Every feature that doesn't contribute to this outcome is out of MVP scope.

**Resource Requirements:** 1 full-stack developer (or 1 frontend + 1 backend), 3–4 weeks build time for MVP core. State rules library research (10 rule sets) is a 1-week parallel effort.

**Time-to-value:** A new customer must reach their first compliance dashboard view within 15 minutes of signup. This is the product's core promise — replace a multi-hour spreadsheet setup with a 15-minute onboarding.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Shop owner adds employees and licenses → sees compliance status immediately
- System sends automated reminders before expiry → owner takes proactive action
- Owner logs CE completions → system tracks progress vs. requirements
- Owner exports compliance report → submits to GC or insurance auditor

**Must-Have Capabilities:**
1. Employee roster: add/edit/archive employees with name and trade type
2. License records: per-employee license entries with type, issuing state, issue date, expiry date
3. Multiple licenses per employee
4. State rules library: 10 rule sets (HVAC + electrical × CA, TX, FL, NY, IL)
5. CE requirement auto-population from rules library when license record is created
6. CE hour logging per employee: course name, provider, hours, completion date
7. CE progress visualization: hours logged vs. hours required
8. Team compliance dashboard: all employees × all licenses, color-coded
9. Dashboard sort/filter by expiry date, employee, license type
10. Automated email reminders: 90/60/30/7 days before expiry
11. Reminder routing: owner required; technician optional (email-based invite)
12. Smart suppression: no reminders after renewal logged for current cycle
13. PDF compliance report: all employees, all licenses, all CE status, date-stamped
14. CSV import for bulk employee + license onboarding
15. Account + billing management (Stripe, 14-day trial, upgrade/downgrade)
16. Onboarding re-engagement email for incomplete setups

### Post-MVP Features

**Phase 2 (Months 3–6):**
- SMS reminders (Twilio integration)
- License document photo upload and storage
- Plumbing trade support (3rd trade, top 10 states)
- State library expansion to 25 states × 3 trades = 75 rule sets
- Florida cosmetology support (employer-facing view)
- Technician mobile-friendly CE logging (email link → form, no app)
- Jobber/Housecall Pro CSV template for roster import
- Free public state rules lookup tool (static site, SEO asset)
- Manager role (employee-level write, no billing access)

**Phase 3 (Months 6–12):**
- 50-state library completion across 4+ trades
- Native Zapier integration for alert routing to Slack, email, etc.
- Jobber + Housecall Pro API integration for technician roster sync
- Multi-admin support on single business account
- AI-powered state rules change monitoring
- Multi-location business accounts
- NATE/NECA distribution partnership discussions

### Risk Mitigation Strategy

**Technical Risks:** State rules library maintenance is the highest technical risk. Mitigation: start with 10 rule sets, manual quarterly review, user-flagged error reports handled within 7 days. Do not launch with rule sets that haven't been manually verified against state board primary sources.

**Market Risks:** Category awareness gap means customers don't search for "license renewal tracker." Mitigation: all content leads with the crisis story. Reddit distribution targets communities where the crisis is actively discussed (r/HVAC, r/electricians). AppSumo launch provides demand-side proof before organic SEO matures.

**Resource Risks:** Single-developer build is viable at MVP scope. If timeline slips, cut SMS (add Month 2), cut document storage (add Month 3), cut CSV import (manual entry is painful but functional). Never cut the rules library — it's the product's core differentiator.

---

## Functional Requirements

### Employee & License Management

- FR1: Account owner can create employee records with name, trade type, and contact email
- FR2: Account owner can add multiple license records per employee (license type, issuing state, issue date, expiry date)
- FR3: Account owner can edit and archive employee records without deleting historical data
- FR4: Account owner can import a roster of employees and licenses via CSV file
- FR5: System automatically populates CE hour requirements for a license record when trade type and issuing state are entered
- FR6: Account owner can view all employees and their compliance status on a single dashboard screen
- FR7: Account owner can sort and filter the dashboard by expiry date, employee name, license type, and compliance status

### Compliance Dashboard

- FR8: System categorizes each license record as green (current, >90 days to expiry, CE on track), yellow (30–90 days to expiry or CE behind), or red (expired or CE deficit with renewal approaching)
- FR9: System recalculates compliance status daily and updates dashboard color coding automatically
- FR10: Account owner can view the details of any employee's license and CE record from the dashboard
- FR11: System displays the applicable state rules (renewal period, CE hours required, CE types required) alongside each license record
- FR12: System displays the source URL and verification date for all state rules shown to users

### Renewal Reminders

- FR13: System sends email reminders to the account owner at 90, 60, 30, and 7 days before each license expiry date
- FR14: Account owner can configure optional reminder emails to the licensed employee directly
- FR15: Account owner can customize which reminder cadence thresholds are active (e.g., disable 90-day, keep 30/7)
- FR16: System suppresses all pending reminders for a license after the account owner marks that renewal cycle as complete
- FR17: Reminder emails include a direct link to the employee's license record and a renewal guidance page
- FR18: System logs all reminder sends with timestamp and delivery status (sent, bounced, opened)
- FR19: Account owner can view reminder send history for any license record

### CE Hour Tracking

- FR20: Account owner can log CE completion records per employee: course name, provider name, completion date, hours completed, CE type (general vs. safety vs. specialty)
- FR21: System calculates and displays total CE hours logged vs. total CE hours required for the current renewal cycle per license
- FR22: System calculates and displays CE hours by type (e.g., safety hours logged vs. safety hours required) when state requirements specify type minimums
- FR23: System marks a CE cycle as complete when all required hours and type requirements are met
- FR24: Account owner can view full CE completion history per employee

### Compliance Report Export

- FR25: Account owner can generate a PDF compliance report showing all employees, all licenses, all CE status at time of generation
- FR26: Compliance report is date-and-time stamped with report generation timestamp
- FR27: Compliance report includes a disclaimer noting the data source and date of last state rules verification
- FR28: Account owner can filter the compliance report to show only specific employees or license types

### State Rules Library

- FR29: System maintains a database of state-specific trade license renewal rules: renewal period, CE hours required total, CE hours required by type, approved provider types
- FR30: State rules library covers HVAC and electrical trades across CA, TX, FL, NY, IL at MVP launch
- FR31: System displays a "Rules last verified: [date]" indicator on all state rules displays
- FR32: Users can report a potential rules inaccuracy via an in-app link, which creates a support ticket
- FR33: TradeShield admin interface allows authorized staff to update state rules library entries with source URL and verification date

### Account & Billing Management

- FR34: Prospective customer can create an account and start a 14-day free trial without entering payment information
- FR35: Account owner can subscribe to a paid plan via Stripe-powered checkout
- FR36: System enforces plan limits (employee count) and prompts account owner to upgrade when limit is reached
- FR37: Account owner can view billing history and manage subscription (upgrade, downgrade, cancel) in-app
- FR38: System sends automated email notification when a trial is expiring (3 days before, day of)
- FR39: Account owner can invite technicians to create limited access accounts to view their own license records and log CE completions

### Onboarding & Activation

- FR40: New account receives an onboarding checklist showing required setup steps (add employees, add licenses, configure reminders)
- FR41: System tracks onboarding completion progress and displays it in the dashboard until all steps are complete
- FR42: System sends a re-engagement email to accounts that have completed signup but have not added any license records after 7 days
- FR43: System sends a re-engagement email to accounts with incomplete employee rosters (employees added but no licenses) after 5 days

---

## Non-Functional Requirements

### Performance

- Dashboard load time for a team of up to 50 employees: <2 seconds on a standard broadband connection
- PDF compliance report generation: <5 seconds for a team of up to 50 employees
- Reminder email delivery: within 15 minutes of scheduled send time, 99.5%+ of the time
- CSV import processing: <30 seconds for files up to 200 employee records

### Security

- All customer data encrypted at rest (AES-256 or equivalent)
- All data in transit encrypted via TLS 1.2 minimum
- Multi-tenant data isolation: row-level security or equivalent ensuring no cross-tenant data access is possible through any API endpoint
- API endpoints authenticated via session tokens; no API keys stored in client-side code
- Password requirements: minimum 8 characters, bcrypt hashing (cost factor ≥12)
- License record audit trail: all create/update/delete operations logged with user ID and timestamp, retained for 3 years minimum
- All outbound email configured with SPF, DKIM, and DMARC to maximize deliverability and prevent spoofing

### Scalability

- Architecture must support 1,000 concurrent customer accounts without horizontal scaling changes
- State rules library schema must support expansion to 50 states × 10 trades (500 rule sets) without schema migration
- Reminder engine must handle 50,000 scheduled reminder sends per day without performance degradation (estimated scale at 5,000 active customers × avg. 10 active reminders)
- No over-engineering required for initial 500-customer scale — but the above ceilings must not require architectural rewrites

### Reliability

- Target uptime: 99.5% monthly (allows ~3.6 hours downtime/month)
- Reminder delivery failure rate: <0.5% per month
- Daily database backups with point-in-time recovery capability
- Deployment process must not cause >5 minutes of downtime (zero-downtime deployment preferred)

### Accessibility

- Web application meets WCAG 2.1 AA for core user flows (dashboard, license entry, CE logging)
- Color-coded dashboard status (green/yellow/red) must include non-color indicators (icon, label text) for colorblind accessibility
- All form inputs include descriptive labels; error messages are specific and actionable

---

*PRD completed: 2026-10-10*
*Author: Root (automated BMAD pipeline)*
*Based on: Product Brief 2026-10-09 + Shortlisted Idea Score 91/105*
*Next step: Architecture → `/bmad-bmm-create-architecture`*

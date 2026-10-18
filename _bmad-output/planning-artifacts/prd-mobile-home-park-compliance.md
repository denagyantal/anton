---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments: ["ideas/shortlisted/mobile-home-park-rubs-compliance-platform.md", "_bmad-output/planning-artifacts/market-research-mobile-home-park-compliance.md", "_bmad-output/planning-artifacts/product-brief-mobile-home-park-compliance.md"]
workflowType: 'prd'
lastStep: 12
date: '2026-10-18'
author: Root
project: mobile-home-park-compliance
classification:
  projectType: saas_b2b
  domain: proptech_regtech
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — MHPDesk

**Author:** Root
**Date:** 2026-10-18
**Product:** MHPDesk — Mobile Home Park RUBS Compliance Platform

---

## Executive Summary

MHPDesk is a compliance-first, MH-native SaaS platform for small and mid-size mobile home park (MHP) operators (10–150 lots). Six US states (Minnesota, California, Ohio, Colorado, Arizona, Washington) enacted or enforced major RUBS (Ratio Utility Billing System) restrictions in 2025–2026, exposing operators to fines of $50,000–$500,000 and class-action liability. No affordable software addresses this gap: enterprise tools (Yardi MH Manager, ManageAmerica) cost $1,500–$5,000/month; the only affordable MH-native tool (LotSidekick, $49–$149/month) explicitly excludes RUBS compliance.

MHPDesk closes this category gap with flat-rate SaaS at $49–$149/month combining lot management, recurring billing, a state-specific RUBS Compliance Shield, and one-click compliance documentation generation. The purchase framing is risk mitigation, not software upgrade: one RUBS fine costs more than years of MHPDesk subscriptions. Target users are the approximately 33,400 single-park and small-portfolio operators currently running on spreadsheets or general property management tools in high-risk RUBS states.

### What Makes This Special

**The RUBS Compliance Shield** is the defining differentiator: a continuously-updated state rules engine that validates an operator's billing practices against current law, alerts before approaching legal thresholds, and generates the exact documentation formats each state requires. No other product at any price in the $49–$199/month range does this.

Key differentiators:
- **First-mover position in an uncontested category**: the market gap between "no compliance" and "enterprise-only" is structurally defined with no affordable entrant
- **Risk framing creates durable urgency**: purchase is a compliance insurance decision, not a software upgrade — dramatically higher conversion and retention than standard SaaS
- **Audit-trail data moat**: each billing cycle adds to a compliance history that operators cannot restart; switching cost grows with time rather than declining
- **Sub-30-minute onboarding**: designed for non-technical operators (64-year-old single-park owners, not IT administrators); CSV import is the critical path
- **Community acquisition flywheel**: BiggerPockets and MobileHomeUniversity forums deliver organic word-of-mouth that enterprise tools have never cultivated

### Project Classification

- **Project Type:** SaaS B2B (multi-park property management and compliance)
- **Domain:** PropTech / RegTech (state-regulated utility billing in manufactured housing)
- **Complexity:** High — state-specific legal compliance rules, regulated industry, non-technical buyer persona
- **Project Context:** Greenfield — no existing codebase; new product category

---

## Success Criteria

### User Success

Operators succeed when they can produce a compliance report or state-mandated disclosure notice on demand without legal assistance.

- **Time to first compliant billing cycle:** Operator completes signup → CSV import → first billing run with compliance documentation generated in under 30 minutes (measured via onboarding event timestamps)
- **Compliance Shield activation rate:** >85% of active customers have Compliance Mode enabled within 72 hours of signup
- **Compliance documentation usage:** >70% of active customers generate at least one compliance report PDF per month
- **Compliance alert response rate:** >60% of threshold alerts result in operator billing adjustments within 7 days
- **State coverage satisfaction:** >90% of customers' home states covered at launch (6 states); >95% by month 12
- **Onboarding support ticket rate:** <0.5 support tickets per customer per month (indicates ease of use without intervention)

**The "aha!" moment:** An operator produces a MHPDesk compliance report PDF in response to a real regulatory inquiry or lender documentation request, and it is accepted without challenge. This event drives organic referrals through BiggerPockets and MobileHomeUniversity.

### Business Success

| Milestone | Target | Validation Signal |
|-----------|--------|-------------------|
| Month 3 | 50 paying customers, $3,500 MRR | Compliance-led acquisition thesis proven in 2–3 states |
| Month 6 | 200 paying customers, $15,000 MRR | Community distribution and MHA partnerships validated |
| Month 12 | 500 paying customers, $40,000+ MRR | Full PM suite viability established |

- **Monthly churn:** <5% at launch → <2% by month 12 (compliance data moat drives retention)
- **CAC:** <$300 at launch → <$200 by month 12 (community-led channels reduce acquisition cost)
- **CAC payback period:** <4 months at $99/month ARPU
- **Organic acquisition rate:** >40% of new customers from community referral or SEO (not paid)
- **Free trial → paid conversion:** >30%
- **Net Revenue Retention:** >100% by month 12 (lot-tier expansion)
- **AppSumo LTD revenue (month 5–6):** $75,000–$200,000 one-time contribution from 500–1,000 codes at $149–$199

### Technical Success

- Compliance report PDF generated in <5 seconds per billing cycle
- CSV import of 150-row tenant file completes without error in <30 seconds
- System uptime 99.5% during US Eastern business hours (8 AM–8 PM Mon–Fri)
- All 6 state compliance rules engines return correct allocation calculations validated against published state regulations
- Zero data loss on audit trail records (immutable append-only storage for compliance documentation)

### Measurable Outcomes

- **Compliance validation:** At least 3 operators submit MHPDesk compliance reports in response to real regulatory or lender inquiries within 90 days of launch — accepted without challenge
- **Community presence:** 5+ organic mentions on BiggerPockets MHP subforum or MobileHomeUniversity forums by month 3
- **State association partnership:** At least 1 state MHA association endorsement or co-marketing agreement by month 6
- **NPS:** >40 from first 50 customers; >60 by month 12
- **G2/Capterra reviews:** 10+ reviews averaging >4.5/5 by month 6

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1, Months 1–3)

**MVP Philosophy:** Problem-solving MVP. An operator must be able to sign up, import existing data, and complete their first compliant billing cycle in under 30 minutes. Every feature either serves that journey or is deferred.

**Core Capabilities:**

1. **Lot Management** — Tenant records, lot assignments, lease dates, lot size (sq ft), status tracking (active, delinquent, vacant, notice-to-vacate), multi-park support within one account
2. **Billing Engine** — Recurring lot rent invoices with configurable billing date and grace period; automatic late fee application (flat or percentage); manual payment recording (cash, check, money order); payment history per tenant; month-end summary report
3. **RUBS Compliance Mode** — Utility cost entry (master meter totals for water, gas, electricity); allocation method selection (sq ft, occupancy count, bedroom count, hybrid); state rules engine validating allocation against current state law; compliance threshold alerts before billing cycle runs; immutable audit trail storing every billing cycle's calculation with timestamp and methodology
4. **Compliance Documentation Generator** — State-specific tenant disclosure notices auto-generated each billing cycle in state-mandated format/language; billing methodology document (PDF) for lender/insurance/regulatory submission; monthly compliance report PDF (one-click, summarizing billing cycle, allocation calculations, compliance status, and any alerts); document archive organized by date
5. **Spreadsheet Import & Setup Wizard** — CSV import for tenants (name, lot number, rent, move-in date, lot size); pre-formatted CSV template download; 5-step setup wizard (add park → import tenants → configure billing → set up RUBS → run first cycle); target: operator completes in under 30 minutes
6. **Basic Tenant Communication** — Email invoices with PDF attachments; state-mandated disclosure notices auto-attached to billing emails; late payment notices with correct state-required language; park-wide email announcements

**States covered at MVP launch:** Minnesota, California, Ohio, Colorado, Arizona, Washington (6 highest-risk states based on active regulatory events 2025–2026)

**MVP Pricing:** $49/month (up to 50 lots), $99/month (up to 100 lots), $149/month (up to 150 lots)

### Growth Features — Phase 2 (Months 4–9)

- Online tenant payment portal (ACH, credit card, auto-pay)
- Maintenance work order system (request → assign → complete → archive)
- QuickBooks two-way integration
- Lender reporting package (professional rent rolls, trailing income statements, occupancy analytics)
- Expanded state compliance coverage (target: 30+ states by month 9)
- Compliance database subscription ($19–$29/month add-on) for quarterly legal updates and new state additions
- AppSumo LTD launch (Tier 1: $99/25 lots; Tier 2: $179/75 lots; Tier 3: $299/150 lots)

### Vision — Phase 3 (Months 10–18+)

- MHP acquisition underwriting module (NOI calculations, utility billing normalization during due diligence)
- Lender API integrations (automated rent roll submission to MHP-focused lenders)
- Insurance integration (compliance documentation export in insurance-required formats)
- Submetering hardware integration (IoT water/gas meters for automated reading)
- Anonymized benchmarking (utility costs/unit, collection rates, occupancy vs. state/regional averages)
- AI-assisted compliance monitoring (detect billing anomalies before state AG; auto-track state legislature for RUBS bill filings)
- Canada expansion (BC, Ontario, Alberta manufactured home community markets)

---

## User Journeys

### Journey 1: Randy the Portfolio Builder — Compliance Crisis Discovery

**Persona:** Randy, 52, owns 3 MHPs (95 lots total across 2 states). Uses QuickBooks + Excel. Built his own RUBS calculation informally. Reads Keel Team blog and BiggerPockets MH subforum. Aware of regulatory changes but hasn't acted.

**Opening Scene:** Randy receives a newsletter from his state MHA in September 2026 about Ohio's Supreme Court ruling on submetering companies. He starts Googling his exposure. His lender has asked for documentation of his billing methodology as a condition of a pending refinance. He has calculations in QuickBooks but no state-mandated disclosure notices, no methodology PDF, nothing a regulator would recognize.

**Discovery:** Randy searches "mobile home park RUBS compliance software." MHPDesk appears. He visits the pricing page and sees his two states (Ohio, Minnesota) listed in the compliance coverage section. He downloads a sample compliance report PDF. It shows exactly the format Ohio regulators expect.

**Rising Action:** Randy signs up for a free trial. He exports his tenant list from QuickBooks as a CSV. The import wizard maps his columns in one step. He configures his RUBS allocation (sq ft, as his parks use). Compliance Mode immediately flags that one park's water billing formula would exceed Minnesota's safe harbor threshold — Randy had not caught this.

**Climax:** Randy adjusts the allocation formula per MHPDesk's guidance. He runs his first billing cycle. MHPDesk generates disclosure notices for all 95 tenants in the correct state-specific format and creates a compliance report PDF. He emails the methodology PDF to his lender. It is accepted.

**Resolution:** Randy converts to paid at $149/month (Portfolio tier, covering all 95 lots). He posts on BiggerPockets: "Just used MHPDesk to get compliant on RUBS in two states. The compliance report is exactly what my lender needed." Within a week, 3 BiggerPockets members message him asking for the link.

**Journey Requirements Revealed:** CSV import (QuickBooks export compatibility), multi-state compliance support per account, compliance threshold alerts before billing runs, compliance report PDF suitable for lender submission, community-shareable workflow.

---

### Journey 2: Betty the Spreadsheet Operator — Tenant Dispute Trigger

**Persona:** Betty, 64, inherited a 38-lot park from her late husband 6 years ago. Lives adjacent to the park. Uses Excel and paper rent receipts. Bills utility costs as a flat fee added to lot rent. Her CPA mentioned she may have utility billing exposure.

**Opening Scene:** A tenant disputes a utility charge at Betty's park and demands to see how his bill was calculated. Betty looks through her Excel sheets. There is no formula documentation, no allocation methodology on file — just a flat add-on she's charged for years. The tenant has found information online about RUBS restrictions in her state. He mentions the words "regulatory complaint."

**Discovery:** Betty calls her CPA in a panic. Her CPA mentions she heard about a software tool called MHPDesk that some other MHP operators are using for compliance. Betty searches for it and finds the website. She's relieved to see that the pricing says $49/month for parks up to 50 lots — she expected thousands.

**Rising Action:** Betty calls the support phone number listed (founder-direct support in early days). She explains her situation. The founder walks her through signup and the setup wizard on a 20-minute call. Betty uploads her Excel tenant list using the CSV template. The wizard imports all 38 tenants in one step.

**Climax:** MHPDesk generates a retroactive billing methodology documentation PDF and, going forward, auto-generates the required disclosure language on every invoice. When the disputing tenant pursues his complaint, Betty can produce documentation showing her current allocation method and its compliance status. The complaint does not escalate.

**Resolution:** Betty subscribes to the $49/month Starter tier. She tells her neighbor (who owns a 22-lot park) about it. The neighbor subscribes the next week. Betty leaves a 5-star review on Google: "This software saved me from a very scary situation. It's simple enough that even I could set it up."

**Journey Requirements Revealed:** Phone/email support accessibility during onboarding, pre-formatted CSV template for non-technical import, retroactive documentation generation, automatic disclosure notice attachment to future invoices, simple onboarding without IT knowledge.

---

### Journey 3: Kevin the New Acquirer — Lender-Driven Adoption

**Persona:** Kevin, 41, works in commercial real estate. Recently acquired first MHP (72 lots) through a PE-adjacent deal. Found the park running on Park Sidekick (legacy desktop software). His lender requires monthly rent roll reports and billing methodology documentation as an acquisition financing condition.

**Opening Scene:** Kevin is 30 days post-closing. His lender has emailed: they need the first rent roll report and a billing methodology statement within 14 days. The prior owner left no documentation. Kevin is looking at Park Sidekick and realizes it cannot generate either document. He starts researching MHP software alternatives.

**Discovery:** Kevin finds MHPDesk through a BiggerPockets thread where Randy had posted about it. He reads the pricing page, checks that his state (Ohio) is covered, and reads the features page. The lender reporting section and compliance documentation generator exactly match what his lender needs.

**Rising Action:** Kevin signs up immediately. He exports the prior owner's tenant data from Park Sidekick as a CSV. MHPDesk's import wizard handles the mapping. He sets up RUBS Compliance Mode for his Ohio park. The system generates its first monthly rent roll report and a billing methodology PDF in under 10 minutes.

**Climax:** Kevin submits both documents to his lender within 48 hours of signing up for MHPDesk. The lender accepts them. Kevin is also using MHPDesk to identify that the prior owner's RUBS approach would have created Ohio compliance exposure within 2 billing cycles — he adjusts the formula proactively.

**Resolution:** Kevin subscribes to the $99/month Professional tier. He becomes an advocate: in his next deal, he includes "will implement MHPDesk compliance infrastructure within 30 days of closing" as a standard acquisition checklist item.

**Journey Requirements Revealed:** Legacy software data export compatibility (CSV from Park Sidekick), rapid onboarding path for time-pressured operators, lender-ready rent roll report output, proactive compliance gap detection during setup, professional document formatting suitable for institutional lender review.

---

### Journey 4: Founder Support — Handling a Compliance Question Edge Case

**Persona:** Founder/support, monitoring the dashboard for early customer issues.

**Opening Scene:** Two weeks post-launch, a customer in Colorado (40-lot park) submits a support ticket: "My park uses a hybrid formula — 60% square footage, 40% occupancy count. Can MHPDesk handle this? Colorado requires specific documentation when using a hybrid method."

**Rising Action:** Founder checks the compliance rules engine for Colorado. The hybrid method is supported in the allocation calculator. However, the disclosure notice template for Colorado hybrid formulas needs a specific additional clause that the template does not currently include. The founder identifies the gap — a state rules edge case not covered in the initial Colorado rules engine.

**Climax:** Founder updates the Colorado compliance rules engine to include the hybrid formula documentation requirement. Adds the missing clause to the Colorado disclosure notice template. Deploys the update within 24 hours. Notifies the customer that the update is live.

**Resolution:** Customer gets the correct hybrid formula documentation. Founder adds this Colorado edge case to the compliance rules QA checklist. Compliance rules engine update is logged as "CO-HYBRID-2026-10" in the state rules changelog, visible to all Colorado customers in their compliance status dashboard.

**Journey Requirements Revealed:** Admin interface for state rules engine updates, compliance rules versioning and changelog, customer notification system for rules updates affecting their state, support ticket intake connected to product compliance rules state.

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Randy (portfolio, multi-state) | CSV import, multi-state compliance, threshold alerts, PDF generation, multi-park account |
| Betty (single park, non-technical) | Setup wizard, pre-formatted CSV template, phone support pathway, auto disclosure on invoices |
| Kevin (new acquirer, institutional) | Legacy data migration, lender rent roll report, rapid compliance gap detection, professional PDF output |
| Founder/support | Admin compliance rules editor, state rules versioning, customer notification on rules updates |

---

## Domain-Specific Requirements

MHPDesk operates in the PropTech/RegTech domain with high complexity driven by active state-level regulatory changes. Domain requirements are mandatory, not optional.

### Regulatory Compliance

**RUBS State Rules Engine (MVP — 6 states)**

Each state's rules module must encode:

| State | Key Restriction | Required Documentation |
|-------|----------------|----------------------|
| Minnesota | Electricity RUBS banned Jan 2025; specific allocation formulas mandated for water/gas | State-specific disclosure notice template; methodology certification |
| California | RUBS restricted in rent-controlled jurisdictions; cap on utility % of rent; class-action settlement precedent (CA $495K, Oct 2025) | Disclosure notice with allocation formula; audit trail for 3+ years |
| Ohio | Submetering companies in MHCs subject to PUCO rate oversight (Supreme Court, Apr 2026) | Compliance certification; billing methodology documentation |
| Colorado | New restrictions enacted 2025 | Disclosure notice; formula documentation |
| Arizona | New restrictions enacted 2025 | Disclosure notice; formula documentation |
| Washington | New restrictions enacted 2025 | Disclosure notice; formula documentation |

**Compliance Rules Versioning:** State rules changes must be tracked with effective dates and version numbers. Operators whose billing cycle predates a rules change must be able to generate documentation under the rules in effect at the time of billing.

**Legal Disclaimer Requirement:** All generated compliance documents must include a footer: "This document is generated by MHPDesk for record-keeping purposes and does not constitute legal advice. Operators should consult qualified legal counsel for compliance guidance." This is a product liability risk mitigation requirement, not a marketing choice.

**Audit Trail Immutability:** Once a billing cycle's compliance record is generated, it must not be editable. Operators may add notes; they may not alter calculated values, allocation formulas, or disclosure text. This is required to preserve evidentiary value if a compliance record is used in regulatory proceedings.

**Allocation Methods Supported (MVP):**
- Square footage (lot sq ft / total park sq ft × utility cost)
- Occupancy count (number of residents per lot)
- Bedroom count (number of bedrooms per unit)
- Hybrid (weighted combination of above; requires additional disclosure language in applicable states)

### Data Retention

- Compliance documentation: minimum 3 years on-platform (operators may need to produce records for pending regulatory or legal actions arising from historical billing)
- Payment history: minimum 2 years
- Account data: retained for 90 days post-cancellation to enable compliance record export

### Privacy and Data Handling

- Tenant personally identifiable information (PII) is collected and stored (name, address, contact info, payment history)
- No healthcare data (HIPAA not applicable)
- No payment card data in MVP (manual payment recording only; no ACH/credit card processing until Phase 2)
- Data must not be sold or shared with third parties without explicit operator consent
- Operators own their tenant data; MHPDesk is a data processor, not a data controller

### Operator Liability Framing

MHPDesk is a compliance documentation and property management tool. It does not provide legal advice. The product must clearly communicate:
1. Compliance recommendations are based on publicly available state statutes and regulations
2. Operators retain responsibility for their compliance posture
3. Material changes to state laws may require attorney review before adoption of updated billing formulas

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Category-Creating Innovation:** MHPDesk is not competing for share in an existing market — it is creating a product category that does not exist. "Affordable MH-native property management with built-in RUBS compliance" is an unoccupied position. This is a defensible first-mover opportunity, not an incremental improvement.

**State-Specific Rules Engine as Core IP:** The compliance rules engine is the technical innovation. It is not a generic RUBS calculator; it encodes the specific allocation formulas, disclosure language templates, and documentation formats required by each state's statutes and regulatory guidance. Building this rules engine correctly and keeping it current is the core technical competency and competitive moat.

**Compliance-as-SaaS Subscription Model:** The standard SaaS subscription model is framed as compliance insurance. The compliance subscription (quarterly state law updates) creates a recurring revenue stream that is structurally separate from the PM software subscription — analogous to legal research database subscriptions where the value is the currency of the information, not the software.

**Audit Trail as Switching Cost:** Unlike typical SaaS where switching cost is workflow disruption, MHPDesk's switching cost is the loss of a documented compliance history. After 12 months of operation, an operator's MHPDesk account contains an auditable compliance trail that would have to be rebuilt from scratch in any other system. This is a novel moat for a PM tool at this price point.

### Validation Approach

- **State rules engine accuracy:** Validate each state's rules module against published state statutes and regulatory agency guidance documents before enabling for customers; engage 1–2 MH-specialized attorneys as advisory board members for ongoing validation
- **Document acceptance validation:** Track whether compliance documents generated by MHPDesk are accepted by lenders, insurers, and regulators when operators submit them; build case studies from accepted submissions
- **Compliance-led acquisition thesis:** Validate by tracking what percentage of signups cite compliance (vs. general PM need) as primary purchase motivation; target >60%

### Risk Mitigation

- **Rules engine accuracy risk:** If a generated compliance document is incorrect and contributes to a regulatory violation, this is a product liability risk. Mitigation: legal disclaimer on all documents; advisory board review of all state rules; clear documentation that operator retains compliance responsibility
- **First-mover displacement:** LotSidekick or a new entrant adds RUBS compliance. Mitigation: depth of state-specific rules (not generic RUBS math), community trust (takes 12+ months to build), and state MHA association relationships create defensible advantage beyond feature parity
- **State law change outpaces rules update:** A state updates its RUBS restrictions and MHPDesk's rules engine is stale. Mitigation: compliance subscription model explicitly funds ongoing legal monitoring; rules update SLA of <30 days from effective regulatory change; customer notification system for rules updates

---

## SaaS B2B Specific Requirements

### Multi-Park Architecture

- Single account can manage multiple parks (operators with 2–5 parks is a core use case)
- Each park has independent billing configuration, RUBS settings, and compliance rules based on its state
- Compliance rules are park-scoped, not account-scoped (one account in Ohio + Minnesota enforces both states' rules independently)
- Lot tier limits ($49/50 lots, $99/100 lots, $149/150 lots) apply to total lots across all parks on the account

### Role-Based Access

- **Owner:** Full access to all parks, billing, compliance, account settings, and billing/payment management
- **Park Manager:** Access to assigned park(s) only; can record payments, generate compliance reports, send tenant communications; cannot edit billing rates or RUBS configuration without owner approval
- Role assignment is owner-controlled; minimum viable for MVP is Owner + Park Manager roles

### Tenant Model

- Tenants are park-scoped (not account-scoped): a tenant at Park A is not connected to a tenant at Park B, even if the same person
- Tenant records include: name, contact info, move-in/move-out dates, lease expiration, lot assignment, payment method preference, communication preferences
- Tenant PII is stored encrypted at rest

### Integration Considerations (MVP Scope)

- **Inbound:** CSV import only (no API ingestion in MVP)
- **Outbound:** PDF export (compliance reports, invoices, disclosure notices); CSV export (tenant list, payment history for QuickBooks manual import)
- **Email delivery:** Transactional email for invoice and disclosure notice delivery; operator-controlled sender domain preferred (reduces spam classification); fallback to MHPDesk shared domain

### Key Questions Addressed (SaaS B2B)

- **Multi-tenancy model:** Operator account = tenant; park = sub-entity within account; lot = resource within park
- **Authentication:** Email + password for MVP; MFA optional (owner setting); no SSO/SAML in MVP
- **Data isolation:** Each operator account's data is logically isolated; no cross-account data visibility
- **Billing model:** Stripe for subscription management; lot-tier-based pricing; annual billing option at 15% discount (deferred to Phase 2)
- **Onboarding:** Guided setup wizard is mandatory for first park creation; cannot be skipped

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum feature set that enables a non-technical operator to sign up, import existing data, run their first compliant billing cycle, and produce a compliance document if asked. If it cannot do this in under 30 minutes, it is not shippable.

**Resource Requirements:** 1 full-stack developer (4–6 week build timeline); 1 founder/product owner handling compliance rules research and customer success; MH-specialized attorney for advisory review of state rules before launch

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Spreadsheet operator converts from Excel to first compliant billing cycle (Betty journey)
- Portfolio operator migrates from QuickBooks+Excel across multiple parks and states (Randy journey)
- New acquirer migrates from legacy MHP software and generates lender-ready documentation (Kevin journey)

**Must-Have Capabilities:**
- Account creation, park setup, lot management with CSV import
- Recurring billing engine with late fees and manual payment recording
- RUBS Compliance Mode with 6-state rules engine (MN, CA, OH, CO, AZ, WA)
- Compliance threshold alerts
- Immutable billing audit trail
- State-specific disclosure notice generation on each billing cycle
- Billing methodology PDF export
- Monthly compliance report PDF generation
- Email invoice delivery with disclosure notices attached
- 5-step setup wizard with sub-30-minute onboarding target
- Basic owner + manager role support

### Post-MVP Features

**Phase 2 (Months 4–9):**
- Online tenant payment portal (ACH, credit card) — adds payment processing compliance (PCI-DSS scoping required)
- Maintenance work order system
- QuickBooks two-way sync
- Lender reporting package (institutional-grade rent roll, income statement)
- Expanded state coverage (15–30 states)
- Compliance database subscription ($19–$29/month add-on)

**Phase 3 (Months 10–18+):**
- MHP acquisition underwriting module
- Lender API integrations (Fannie, community banks)
- Submetering IoT integration
- Anonymized benchmark data products
- AI-assisted compliance monitoring (auto-track state legislature for RUBS bills)
- Mobile app (iOS/Android)

### Risk Mitigation Strategy

**Technical Risks:** State rules engine accuracy is the highest-risk technical component — incorrect compliance calculations could result in regulatory liability for customers and product liability for MHPDesk. Mitigation: advisory board attorney review of all 6 state rules modules before launch; staged launch (1–2 states, validate, then expand); clearly documented legal disclaimer.

**Market Risks:** Fragmented operator market means no single acquisition channel is sufficient. Mitigation: parallel investment in BiggerPockets community presence, Keel Team co-content, and state MHA outreach; AppSumo LTD in Phase 2 to accelerate distribution.

**Resource Risks:** A single developer cannot maintain the compliance rules engine, build features, and handle customer support simultaneously. Mitigation: rules engine architecture uses config-driven state modules (not hard-coded) so rules updates are data edits, not code deploys; outsource initial compliance rules research to MH attorney.

---

## Functional Requirements

### Account & Park Management

- FR1: Operators can create an account with email and password and select their primary state during signup
- FR2: Operators can add multiple parks to a single account, each with independent state selection and compliance configuration
- FR3: Operators can assign a Park Manager role to other users, restricting their access to assigned parks only
- FR4: Operators can view a dashboard showing all parks, total lots, current billing status, and open compliance alerts across their portfolio
- FR5: Operators can deactivate a park (stops billing cycles and compliance monitoring without deleting historical records)
- FR6: Operators can export their complete account data (tenant records, payment history, compliance documents) as a ZIP archive

### Tenant & Lot Management

- FR7: Operators can create and edit tenant records containing name, contact information, move-in date, lease expiration date, and lot assignment
- FR8: Operators can create and edit lot records containing lot number, lot size (square footage), monthly lot rent amount, and current status (active, vacant, delinquent, notice-to-vacate)
- FR9: Operators can import tenant and lot data from a CSV file using a MHPDesk-provided column template, with field mapping confirmation before import
- FR10: Operators can filter and search tenant records by status, lot number, name, or delinquency state
- FR11: Operators can record tenant move-out dates, triggering lot status change to vacant and stopping future billing for that lot
- FR12: Operators can view a complete payment history for each tenant, showing all recorded payments with dates and amounts

### Billing Engine

- FR13: Operators can configure a billing cycle (billing date, grace period in days, late fee amount or percentage) per park
- FR14: The system generates recurring lot rent invoices for all active lots on the configured billing date each month
- FR15: The system applies configured late fees automatically when payment due dates are exceeded
- FR16: Operators can record manual payments (cash, check, money order) against open invoices, specifying payment method and date received
- FR17: Operators can generate a month-end billing summary report showing lots billed, total collected, total outstanding, and late fees applied for a selected billing period
- FR18: Operators can export billing summary data as a CSV for external accounting use

### RUBS Compliance Mode

- FR19: Operators can enable RUBS Compliance Mode for a park, selecting the park's state and primary RUBS allocation method (square footage, occupancy count, bedroom count, or hybrid)
- FR20: Operators can enter monthly master utility meter totals (water, gas, electricity) to trigger the RUBS allocation calculation for that billing cycle
- FR21: The system calculates per-lot utility allocation amounts using the selected method and the entered master meter totals
- FR22: The system validates the operator's billing approach against the selected state's current RUBS rules before the billing cycle is finalized and displays a compliance status (compliant, warning, or violation risk)
- FR23: The system alerts operators when their current billing approach approaches a state-defined legal threshold (e.g., utility charges exceeding a percentage cap of lot rent) before the billing cycle runs
- FR24: The system stores each billing cycle's utility allocation calculation, input master meter data, allocation method, and compliance status in an immutable audit trail
- FR25: Operators can view the complete compliance audit trail for a park, showing every billing cycle's compliance record in chronological order
- FR26: The system notifies operators within 30 days when a state's RUBS rules are updated, describing the change and its impact on their current billing configuration

### Compliance Documentation Generator

- FR27: The system generates a state-specific tenant disclosure notice for each active lot on each billing cycle, using the disclosure language and format required by the lot's park state
- FR28: Operators can generate a billing methodology document (PDF) explaining their RUBS allocation approach, suitable for submission to a lender, insurer, or regulator, at any time
- FR29: Operators can generate a monthly compliance report (PDF) for a selected billing period, summarizing billing data, utility allocations, compliance status, and any threshold alerts triggered during that period
- FR30: Operators can access an archive of all generated compliance documents, searchable by document type, park, and date
- FR31: Operators can download any generated compliance document as a PDF individually or as a bundled ZIP for a selected date range

### Tenant Communication

- FR32: The system delivers email invoices to tenants with billing amount, due date, and attached PDF invoice on each billing cycle
- FR33: The system auto-attaches the state-mandated disclosure notice PDF to the billing email sent to each tenant on each cycle where RUBS charges are included
- FR34: Operators can send a late payment notice (with state-required language) to individual delinquent tenants from the tenant record view
- FR35: Operators can send a park-wide email announcement to all active tenants in a park

### Data Import, Export & Onboarding

- FR36: Operators can download a pre-formatted CSV template for tenant and lot data import
- FR37: The setup wizard guides operators through park creation → tenant CSV import → billing configuration → RUBS setup → first cycle preview in a linear 5-step flow, completable in under 30 minutes
- FR38: Operators can preview the first billing cycle output (invoices, utility allocations, compliance status) before confirming and sending
- FR39: Operators can export the tenant list for any park as a CSV at any time

---

## Non-Functional Requirements

### Performance

- The system shall generate a compliance report PDF in under 5 seconds for a park of up to 150 lots, as measured by server-side generation timestamps
- The system shall load any dashboard or park view in under 2 seconds for 95th percentile of requests under normal load (defined as up to 500 concurrent sessions), as measured by APM monitoring
- CSV import of up to 200 rows shall complete and display confirmation in under 30 seconds, as measured by end-to-end import event timestamps
- Billing cycle processing (invoice generation, utility allocation calculation, disclosure notice generation) for a full park of 150 lots shall complete in under 60 seconds, as measured by billing cycle event logs

### Security

- All tenant PII and billing data shall be encrypted at rest using AES-256 (or cloud provider equivalent) and in transit using TLS 1.2 or higher
- Compliance audit trail records shall be stored in append-only storage; no update or delete operations on historical compliance records are permitted by any user role including Owner
- Operator account passwords shall be hashed using bcrypt or equivalent adaptive hash function; plaintext passwords shall never be stored or logged
- Session tokens shall expire after 8 hours of inactivity; operators are prompted to re-authenticate before accessing billing or compliance data after expiration
- The system shall log all authentication events (login, failed login, password reset, role changes) with IP address and timestamp, retained for 12 months
- File uploads (CSV imports) shall be scanned for malicious content and rejected if file type does not match declared type; uploaded files shall not be executed server-side

### Reliability

- System uptime shall be 99.5% measured monthly during US Eastern business hours (8 AM–8 PM Monday–Friday, excluding public holidays), as measured by uptime monitoring
- Billing cycle jobs shall be retried automatically up to 3 times on transient failure before triggering an operator notification and manual review flag
- Compliance document generation failures shall be surfaced to the operator immediately with a retry option; documents shall never be silently dropped

### Scalability

- The system shall support accounts with up to 10 parks and 150 lots per park (1,500 total lots per account) without performance degradation, as verified by load testing before launch
- The system architecture shall support horizontal scaling to accommodate 10x user growth without redesign
- The compliance rules engine shall support addition of new state rules modules without changes to the core billing or document generation codebase (config-driven architecture)

### Accessibility

- All operator-facing web interfaces shall meet WCAG 2.1 Level AA accessibility standards for keyboard navigation, screen reader compatibility, and color contrast ratios
- Invoice and compliance document PDFs shall include accessible metadata (title, author, language tags) for screen reader compatibility
- Setup wizard shall be completable using keyboard-only navigation without a mouse

### Integration

- Outbound email delivery shall use a transactional email provider with delivery rate >98% and bounce handling, as measured by provider delivery analytics
- CSV export files shall be compatible with Microsoft Excel 2016+ and Google Sheets without requiring data transformation by the operator
- Generated PDFs shall open without error in Adobe Acrobat Reader, macOS Preview, and common web browsers' built-in PDF viewers

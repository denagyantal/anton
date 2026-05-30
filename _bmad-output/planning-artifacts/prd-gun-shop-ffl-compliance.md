---
stepsCompleted: [
  'step-01-init.md',
  'step-02-discovery.md',
  'step-02b-vision.md',
  'step-02c-executive-summary.md',
  'step-03-success.md',
  'step-04-journeys.md',
  'step-05-domain.md',
  'step-06-innovation.md',
  'step-07-project-type.md',
  'step-08-scoping.md',
  'step-09-functional.md',
  'step-10-nonfunctional.md',
  'step-11-polish.md',
  'step-12-complete.md'
]
inputDocuments:
  - ideas/shortlisted/gun-shop-ffl-compliance.md
  - _bmad-output/planning-artifacts/market-research-gun-shop-ffl-compliance.md
  - _bmad-output/planning-artifacts/brief-gun-shop-ffl-compliance.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: regulated_firearms_retail
  complexity: high
  projectContext: greenfield
date: '2026-05-30'
author: Root
project: gun-shop-ffl-compliance
---

# Product Requirements Document — FFLDesk

**Author:** Root
**Date:** 2026-05-30
**Version:** 1.0

---

## Executive Summary

FFLDesk is a cloud-based FFL compliance and Point-of-Sale platform built exclusively for U.S. Federal Firearms License dealers. Every one of the 56,000+ active Type 01 FFL dealers is legally required by the ATF to maintain an acquisitions and dispositions (A&D) bound book for every firearm that passes through their shop — yet the current market forces them to choose between cheap compliance-only tools with no POS (FastBound at $8–99/mo) or expensive enterprise platforms they can't afford ($99–350+/mo from Orchid, Bravo, and Celerant). The result is that most small dealers run 2–4 disconnected tools with manual data re-entry between them, generating compliance risk, operational waste, and daily stress about ATF audit readiness.

FFLDesk eliminates that forced choice. At $49/month (Solo tier), it delivers a legally compliant digital A&D bound book, Form 4473 electronic storage, NICS background check logging, serialized inventory management, and a full retail POS in a single browser-based product designed for the counter, not the back office. At $69/month (Pro tier), it adds a pawn loan module for the 8,000–10,000 combined pawn+FFL operators who are currently fleeing Bravo's deteriorating post-acquisition support. No comparable product below $99/month currently offers both full ATF compliance and a POS.

The window to capture this market is open but closing. Orchid launched an affordable tier in January 2026 at $99/month; Bravo's post-PawnMaster acquisition exodus is at peak intensity through 2026. FFLDesk must ship its MVP and begin customer acquisition in 2026 to own the affordable independent dealer segment before it consolidates.

### What Makes This Special

**Single-system compliance + POS at $49/month.** The core differentiation is architectural: every POS sale simultaneously creates the corresponding A&D bound book entry and triggers the 4473 workflow. No double-entry, no reconciliation, no gap between what the POS says and what the bound book says. This is the workflow problem every small FFL dealer lives with daily — and no affordable tool has solved it.

**Regulatory moat.** ATF compliance requirements are complex, change with agency rulings, and require ongoing legal review to implement correctly. Building this layer correctly (with attorney review) creates a durable switching cost and a barrier to entry that generic POS competitors cannot easily copy. Every regulatory update FFLDesk absorbs becomes a reason customers stay.

**Pawn+FFL segment ownership.** The Bravo/PawnMaster exodus (4,000+ dealers actively seeking alternatives) creates a narrow acquisition window with no modern affordable alternative. FFLDesk Pro at $69/month with pawn loan management is the only sub-$100 option for this segment.

**Support as a trust infrastructure.** In a compliance-critical vertical where dealers face license revocation for recordkeeping errors, support quality is not a feature — it is the product. Bravo's support collapse is the primary reason its customers are leaving. FFLDesk's commitment to <4-hour human support response from launch is a direct competitive attack on the market leader's biggest weakness.

## Project Classification

- **Project Type:** SaaS B2B — cloud-hosted, subscription-based, multi-user web application
- **Domain:** Regulated firearms retail — subject to ATF Title 18 USC Chapter 44 recordkeeping requirements
- **Complexity:** High — federally regulated domain with mandatory compliance standards, tamper-evident audit trail requirements, 20-year record retention mandates, and zero tolerance for data integrity failures
- **Project Context:** Greenfield — no existing codebase; building from scratch targeting independent FFL dealers

---

## Success Criteria

### User Success

A dealer is successful when FFLDesk fully replaces their legacy compliance + POS stack within 30 days of onboarding, without any compliance gaps, data loss, or need to return to their previous tools.

**Key user success indicators:**

- **Time to first compliant A&D entry:** < 10 minutes from account creation — dealers must feel productive immediately or churn during trial
- **Dual-entry elimination:** 100% of firearm sales automatically create the corresponding A&D bound book disposition entry — no manual reconciliation required
- **Form 4473 completion time:** < 3 minutes per transaction — counter speed is essential; slow compliance tools get bypassed
- **ATF audit confidence:** > 95% of users who run the audit simulation report confirm their records would pass an ATF inspection
- **Support response:** < 4 hours (business hours) for first human response — compliance anxiety demands fast answers
- **Post-onboarding support volume:** < 3 tickets per dealer per month after 30 days of use — indicates genuine self-serve product

### Business Success

FFLDesk targets a three-year path from MVP validation to $1.2M+ ARR as the operating system for the independent FFL dealer.

**Year 1 (2026) targets:**

| Metric | 3-Month | 6-Month | 12-Month |
|--------|---------|---------|---------|
| Paying customers | 50 | 150 | 400 |
| MRR | $2,450 | $7,350 | $19,600 |
| Monthly churn | < 5% | < 3% | < 2% |
| Free trial → paid conversion | > 20% | > 25% | > 30% |
| NPS | > 40 | > 50 | > 60 |
| Pawn+FFL (Pro tier) share | 20% | 25% | 30% |

**Year 2 (2027):** 500+ paying dealers, $294K–$414K ARR, SHOT Show presence, Bravo switcher campaign active.

**Year 3 (2028):** 2,000+ dealers, $1.2M–$1.7M ARR, NSSF preferred vendor status, eCommerce integrations, acquisition positioning.

### Technical Success

- **Zero ATF compliance incidents** — no dealer has a record gap, data loss, or audit failure attributable to FFLDesk. This is the zero-tolerance metric; a single compliance incident is existential for the business.
- **99.9% uptime** — dealers cannot afford system downtime during business hours; an outage during an ATF inspection is a support emergency
- **Tamper-evident audit trail** — all corrections logged, no deletions possible without audit record; required for ATF electronic recordkeeping approval
- **Daily encrypted backup** — required by ATF for cloud-based A&D records (with 60-day advance notification workflow per ATF Ruling 2016-1)

### Measurable Outcomes

The MVP is validated when all of the following are true at the end of Month 3:

1. 25 paying dealers have used FFLDesk as their primary ATF compliance system for ≥ 30 days without reverting to prior tools
2. Zero ATF compliance incidents attributable to FFLDesk
3. Net Promoter Score > 40 from the first paying cohort
4. Free trial to paid conversion rate > 20% within 14-day trial window
5. Average monthly support tickets per dealer < 3 after the first 30 days

## Product Scope

### MVP — Minimum Viable Product

The MVP enables a single-location gun shop dealer (Small Shop Sam persona) to fully decommission FastBound + Square within 30 days by using FFLDesk as their sole compliance and POS system.

**P0 — ATF Compliance Stack (legally required):**
- Digital A&D bound book with acquisition and disposition entry, search, printable ATF-format inspection report, and tamper-evident audit trail
- Form 4473 electronic storage (PDF attachment), 20-year retention enforcement, ATF Ruling 2016-1 compliant workflow
- NICS background check log linked to corresponding 4473 and disposition entry
- Serialized inventory with status tracking (In Stock / On Hold / Transferred / Lost / Stolen)
- Compliance dashboard with audit simulation report and gap alerts

**P1 — Basic POS (eliminates the dual-tool problem):**
- POS transaction flow: cash sales, layaways, consignments, FFL-to-FFL inbound and outbound transfers
- Firearm sale auto-triggers disposition entry + 4473 prompt (the core UX promise)
- Non-serialized product inventory (accessories, ammunition) for POS without ATF tracking
- Daily sales report (revenue summary, cash drawer reconciliation, exportable CSV)

**P0 — Infrastructure:**
- Multi-user accounts with role-based permissions (owner vs. staff)
- Mobile-responsive web UI (Chrome on tablet/phone for counter use)
- Stripe subscription billing
- 99.9% uptime SLA and status page
- Daily encrypted backup with tamper-evident audit log

### Growth Features (Post-MVP)

**Phase 2 (Months 7–18):**
- Pawn loan module: origination, interest/fee schedules, payment tracking, forfeit/redemption, police property reporting (NCIC stolen property check) — targets pawn+FFL Bravo switcher segment
- "Switch from Bravo" migration wizard — imports A&D book from Bravo/PawnMaster export format
- In-store payment processing via ECS Payments (FFL-specialized processor) or Stripe Terminal
- Mobile offline mode for rural dealers with intermittent connectivity
- SHOT Show presence (January Year 2)

**Deferred from MVP (explicit scope boundary):**

| Feature | Rationale |
|---------|-----------|
| Pawn loan module | Requires NCIC integration and state-by-state pawn regulation expertise; Phase 2 |
| eCommerce / GunBroker sync | Distributor API agreements required; Phase 3 |
| In-store payment processing | Hardware and PCI scope; dealers use existing Square at launch |
| NICS direct API integration | ATF's NICS API is restricted; dealers call NICS line; FFLDesk logs the result |
| Live distributor inventory feed | Requires distributor API agreements; Phase 3 |
| Multi-location dashboard | Enterprise feature; Phase 3 |
| QuickBooks / accounting integration | CSV export satisfies MVP bookkeeper need |
| iOS/Android native apps | Mobile-responsive web sufficient for MVP |

### Vision (Future)

**Phase 3 (Months 19–36):**
- eCommerce integrations: GunBroker listing sync, Guns.com, Armslist
- Live distributor inventory feeds (Sports South, Zanders, Lipseys, RSR Group)
- Multi-location dashboard for 2–5 store dealers
- AI-assisted compliance: auto-populate 4473 from ID scan, anomaly detection for bound book discrepancies, predictive compliance alerts
- NSSF preferred vendor partnership
- API for FFL-adjacent services (gunsmith work orders, range integration)

**3-Year Vision:** FFLDesk becomes the operating system for the independent firearms dealer — the tool that manages their entire business from firearm acquisition to final disposition. The compliance layer (A&D, 4473, NICS) is the irreplaceable moat; POS, pawn, and eCommerce create the ecosystem that makes switching unthinkable.

---

## User Journeys

### Journey 1: Small Shop Sam — Eliminating the Double-Entry Problem

**Opening Scene:** Sam opens his gun shop on a Wednesday morning. His first customer wants to buy a Glock 19 he's had in inventory for three weeks. Sam's current workflow: look up the serial in FastBound, confirm it's in the bound book as an acquisition, write up the sale in Square, trigger the Form 4473 manually, log the disposition in FastBound, then file the paper 4473. Five distinct steps across three systems, and if he gets busy, one gets deferred.

**Discovery:** Sam Googled "gun shop compliance software" after his FastBound renewal landed in his email alongside a Square monthly bill. He found FFLDesk's comparison page ("FastBound + Square vs. FFLDesk: why you're paying twice"). He signed up for the 14-day free trial.

**Rising Action:** Onboarding took 22 minutes. The wizard asked for his FFL number and license type, then pre-populated his A&D book header with the correct ATF-required fields — manufacturer, importer, model, caliber/gauge, type, serial. He imported his existing FastBound CSV; 847 historical firearm records appeared in the bound book in 4 minutes.

**Climax:** The next morning, his first sale. Customer wants the Glock. Sam pulls up the firearm from serialized inventory, creates the sale. FFLDesk prompts: "This is a regulated firearm — initiate Form 4473?" He clicks yes. The 4473 form pre-populates with the firearm data. Customer completes the paper 4473; Sam uploads the scan. When he marks the transaction complete, the disposition entry appears in the A&D book — same data, zero re-entry. NICS check logged. Done.

**Resolution:** At end of month, Sam runs the ATF audit simulation report. It formats his bound book exactly as an inspector would review it: acquisitions column, dispositions column, unresolved items flagged. Nothing missing. He cancels FastBound. He cancels Square. Monthly cost drops from $87 to $49. More importantly: he doesn't think about ATF compliance stress anymore.

**Journey Requirements Revealed:** Serialized inventory lookup from POS; automatic A&D entry on sale completion; 4473 PDF upload and link to disposition; NICS log entry linked to 4473 and disposition; ATF audit simulation report; historical data import; sub-30-minute onboarding.

---

### Journey 2: Pawn Shop Pete — The Bravo Switcher

**Opening Scene:** Pete runs a pawn shop in rural Alabama. He's had an FFL for 15 years. Firearms are 40% of his revenue. He's been on PawnMaster for 11 years. In February 2024, Bravo acquired PawnMaster. By October, his support tickets go unanswered. In November, his renewal came with a 28% price increase. He submitted a ticket about a broken pawn forfeit report — 6 months ago. No response.

**Discovery:** Pete Googled "Bravo Store Systems alternative pawn shop FFL." He found an FFLDesk landing page: "Switching from Bravo? FFLDesk Pro handles pawn + FFL compliance at $69/month. Real support. Free migration." He read the testimonials from former PawnMaster users. He requested a demo.

**Rising Action:** A real FFLDesk person called him back within 2 hours. That alone was remarkable. The demo covered pawn loan origination (principal, interest rate, loan date, due date, item description and photos) and FFL disposal (A&D disposition entry, 4473 upload, NICS log) in the same session — same screen, one system. The migration service ($199 one-time) would import his 15 years of A&D book history from Bravo's export format.

**Climax:** First Saturday on FFLDesk. Pete wrote 11 pawn loans and completed 3 firearm sales. The pawn loans flowed through the origination screen; the firearm sales auto-triggered their 4473 and disposition entries. Combined day — the kind of day he does 40 times a year — completed without switching applications, without double-entry, without wondering if his compliance records are complete.

**Resolution:** Pete's cousin runs a pawn+FFL shop two counties over, still on Bravo, still miserable. Pete called him that Saturday night and told him to switch. Within 3 weeks he referred 4 dealers from the National Pawnbrokers Association Facebook group.

**Journey Requirements Revealed:** Pawn loan origination with item details and photos; pawn payment tracking; forfeit/redemption workflow; police property (NCIC) reporting; combined pawn+FFL daily view; migration import for A&D book history from Bravo export; paid migration service offering.

---

### Journey 3: New Dealer Dana — Starting Right

**Opening Scene:** Dana just received her FFL in the mail. She took an FFL application consulting course (FFL123) and passed her SOT application. She's running a home-based FFL initially, planning a storefront in 18 months. She's compliance-anxious — the FFL123 instructor drilled into her that the bound book is her most important legal document.

**Discovery:** The FFL123 instructor mentioned FFLDesk as the recommended tool for new dealers in the last session. "It's what I'd start with if I were you — cheap, cloud-based, attorney-reviewed." Dana Googled it, found the new dealer landing page, and signed up for the free trial.

**Rising Action:** The onboarding wizard detected she was a home-based FFL (low volume) and offered a simplified first-time setup. She entered her FFL license number; the system auto-populated her bound book header. She watched the 4-minute "Your first transfer: step by step" video. She was ready before her first customer called.

**Climax:** Three weeks later, her first FFL transfer. A customer ordered a pistol from an online dealer; it arrived at Dana's address for the transfer. FFLDesk walked her through the acquisition entry (firearm in from the shipping FFL), the Form 4473 collection workflow, the NICS check logging, and the disposition entry (transfer to the customer). The compliance dashboard showed zero open items, zero alerts. She exported the ATF audit simulation report and felt — for the first time — genuinely certain she was compliant.

**Resolution:** 14 months later, Dana opens her storefront. She upgrades to the full Solo tier. Her entire 14-month history — 63 transfers, all Form 4473s, complete bound book — is already in the system. No migration. She hits the ground running.

**Journey Requirements Revealed:** Home-based FFL simplified setup; guided 4473 workflow for low-volume dealers; video onboarding content; audit simulation report as a confidence tool; smooth upgrade path from low-volume to retail; persistent data across tier upgrades.

---

### Journey 4: Staff Employee — Counter Accuracy Without Compliance Training

**Opening Scene:** Mike is Sam's part-time counter employee. He's 22, good with customers, but knows nothing about ATF compliance. Sam hired him to handle the counter on weekends. Sam needs Mike to be able to process routine sales without creating compliance gaps.

**Rising Action:** Sam created a Staff role for Mike in FFLDesk — read access to inventory, ability to initiate POS sales, but no access to bound book edit or compliance reports. Sam walked him through the counter flow in 15 minutes: scan the firearm barcode, confirm the customer's 4473, process payment, mark the sale complete.

**Climax:** First weekend solo. Customer wants to buy a rifle. Mike scans the barcode. FFLDesk auto-populates the firearm details from inventory. The 4473 prompt appears. Mike collects the paper 4473 and scans it. He marks the NICS check as Proceed. He completes the sale. The disposition entry in the bound book auto-populates. Mike never opened the bound book screen. He didn't need to.

**Resolution:** Sam reviews Monday morning: every sale properly logged, every 4473 linked to its disposition, bound book complete. Zero compliance gaps introduced by a part-time employee with no ATF training.

**Journey Requirements Revealed:** Role-based access control (owner vs. staff); staff-safe POS flow that enforces compliance without requiring staff to understand ATF rules; barcode/serial number scan for firearm lookup; compliance-enforcing sale completion (can't finalize a firearm sale without a linked 4473 and NICS log entry).

---

### Journey 5: ATF Inspector — Audit Readiness in One Report

**Opening Scene:** An ATF IOI (Industry Operations Inspector) arrives at Sam's shop for a compliance inspection — routine, every 3–5 years. Sam has 45 minutes before his first customer.

**Rising Action:** Sam opens FFLDesk on his tablet. He runs the ATF Audit Simulation Report — a formatted view of his bound book organized exactly as an inspector expects: incoming firearms (acquisition entries), outgoing firearms (disposition entries), serial numbers, dates, sources, transferees, 4473 references.

**Climax:** The inspector reviews the report on Sam's screen, spot-checks three serial numbers from the printed bound book against the digital record. All match. The inspector asks for the Form 4473 for a specific transaction from 14 months ago. Sam searches by customer last name — 4473 PDF opens in 8 seconds. Inspector initials his notes. Inspection complete in 40 minutes.

**Resolution:** No violations. Sam receives a clean inspection letter. His compliance anxiety is gone — replaced by confidence. He posts about it in the ar15.com/industry forum. Three other dealers in the thread ask what software he's using.

**Journey Requirements Revealed:** ATF-format bound book report printable and screen-viewable; serial number search across acquisition and disposition records; 4473 retrieval by customer name or serial number; audit simulation matching inspector's actual review checklist.

### Journey Requirements Summary

Across all five journeys, the following capability areas are required:

| Capability Area | Revealed By |
|----------------|------------|
| A&D bound book (acquisition + disposition entries) | Journeys 1, 3, 5 |
| Form 4473 electronic storage + retrieval | Journeys 1, 3, 4, 5 |
| NICS check log linked to transactions | Journeys 1, 3, 4 |
| Serialized inventory with barcode scanning | Journeys 1, 4 |
| POS transaction flow (sales, layaways, consignments) | Journeys 1, 4 |
| Compliance dashboard + audit simulation report | Journeys 1, 3, 5 |
| Role-based access control (owner vs. staff) | Journey 4 |
| Historical data import (FastBound, Bravo CSV) | Journeys 1, 2 |
| Pawn loan module + police property reporting | Journey 2 |
| Guided onboarding for new dealers | Journey 3 |
| ATF-format printable bound book report | Journey 5 |

---

## Domain-Specific Requirements

This is a federally regulated domain with high compliance complexity. The following constraints are non-negotiable pre-conditions, not optional features.

### Compliance & Regulatory

**ATF Recordkeeping Requirements (18 USC § 922(m); 27 CFR § 478.125):**
- Every firearm acquisition must be logged with: manufacturer/importer, model, serial number, type (pistol/rifle/shotgun/receiver), caliber/gauge, date acquired, source (individual or FFL)
- Every firearm disposition must be logged with: date transferred, transferee name and address, Form 4473 reference (if non-FFL transferee), or FFL license number (if FFL-to-FFL transfer)
- Bound book entries must be permanent — corrections permitted only with audit trail showing original value, date corrected, and who corrected
- Deletions are prohibited; a "deleted" entry must be visible in the audit log with correction annotation

**ATF Electronic Recordkeeping (ATF Ruling 2016-1):**
- FFLDesk must file a 60-day advance notification letter with the relevant ATF field office before a dealer activates electronic recordkeeping — this workflow must be built into dealer onboarding
- The system must maintain daily encrypted backups stored offsite
- Backups must be accessible and restorable within 72 hours
- The dealer must be able to produce a printed, ATF-formatted bound book within 24 hours of an inspector's request (even if the system is inaccessible)

**Form 4473 Requirements:**
- ATF Form 4473 must be stored for 20 years from transaction date
- Electronic storage requires the dealer to be able to retrieve any 4473 by transaction date, firearm serial number, or transferee name within a reasonable time during an inspection
- 4473 storage must meet ATF Ruling 2016-1 storage standards (the same as A&D)
- 4473 PDFs must be scannable and uploadable; FFLDesk stores the scanned PDF linked to the disposition entry

**NICS Log Requirements:**
- Dealers must log the date of each NICS check, the NTN (NICS Transaction Number), and the result (Proceed / Delay / Deny)
- NICS logs must be linked to the corresponding 4473 and disposition entry
- Denied transfer attempts must be logged but the disposition entry must remain open (firearm not transferred)

**Retention:**
- A&D records: maintained while FFL is active + 20 years post-surrender
- Form 4473: 20 years from transaction date
- NICS logs: 1 year (federal minimum); FFLDesk will retain indefinitely as a customer benefit

### Technical Constraints

**Tamper-Evident Audit Trail:**
- No record may be permanently deleted — all corrections must create an audit log entry preserving original value, timestamp, and user who made the correction
- Audit trail must be exportable for ATF inspection

**Data Integrity:**
- Bound book entry IDs must be immutable once assigned
- Serial numbers must be unique within a dealer's inventory — duplicate serial number entry must be flagged as an error requiring human resolution
- Transaction completion must be atomic: a firearm sale must simultaneously create the POS sale record and the bound book disposition entry in the same database transaction

**Data Residency:**
- All dealer A&D records and 4473 PDFs must be stored in US-based data centers
- No A&D data may be stored or processed in jurisdictions outside the United States

**Access Control:**
- Every action on a bound book record must be attributed to a named user account
- Shared/generic login accounts are not permitted for compliance actions
- ATF may request to know which user made a specific record entry

### Integration Requirements

**ATF Notification Workflow:**
- 60-day advance notification letter generation (templated, pre-populated with dealer FFL info) must be built into onboarding for first-time electronic recordkeeping setup
- ATF field office directory must be maintained to route notifications correctly

**Payment Processing:**
- Subscription billing via Stripe — Stripe's TOS currently permits legal firearms transactions; ECS Payments (FFL-specialized processor) maintained as backup
- In-store payment processing is explicitly deferred to Phase 2 — dealers use existing Square/cash setup at MVP launch

**Barcode / Serial Number Input:**
- USB barcode reader input must work at the POS and inventory screens
- Mobile camera barcode scanning (via browser API) for tablet-based counter use
- Serial number entry must accept both scan and manual keyboard input

### Risk Mitigations

| Risk | Severity | Mitigation |
|------|----------|-----------|
| ATF regulatory changes require expensive compliance updates | High | Budget 10% of revenue for ATF monitoring; attorney review from day 1; frame annual subscription as compliance currency |
| Data loss or corruption causes compliance gap | Critical | Daily encrypted backups; tamper-evident trail; atomic transactions; 99.9% uptime SLA |
| Stripe TOS change restricts firearms transactions | High | ECS Payments as pre-negotiated backup; never store card data in-house |
| Dealer relies on FFLDesk during ATF inspection and system is down | High | Printable bound book snapshot downloadable daily; offline-capable static PDF export |
| Compliance implementation error causes dealer audit failure | Critical | Attorney review of all compliance logic before launch; audit simulation report maps directly to ATF inspection checklist |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Compliance-as-POS-trigger (primary innovation):** The fundamental UX insight that no competitor has delivered affordably: every firearm sale at the POS should automatically create the corresponding compliance records in the same action. Competitors either treat compliance and POS as separate modules requiring manual linking, or charge enterprise prices for the integrated version. FFLDesk makes atomic compliance+POS the default behavior at an independent dealer price point.

**Price-tier disruption:** Orchid's launch of a $99/month affordable tier in January 2026 proves the market exists for integrated compliance+POS below enterprise pricing. FFLDesk attacks $49/month — 50% below the current affordable tier — using modern cloud infrastructure economics vs. Orchid's legacy architecture costs.

**Pawn+FFL segment vacancy:** The Bravo/PawnMaster acquisition created an orphaned segment of 8,000–10,000 dealers who need pawn + FFL compliance + POS in one tool and have no affordable modern alternative. FFLDesk Pro at $69/month targets this segment during the peak exodus window (2024–2026) — a time-bounded opportunity.

### Market Context & Competitive Landscape

- FastBound: compliance-only (no POS), dated UI, $8–99/month — validates cloud compliance market but creates the dual-tool problem
- Orchid POS Spark: full compliance+POS, $99/month (Jan 2026 launch), attorney compliance — nearest comparable; 50–100% more expensive than FFLDesk's target
- Bravo Store Systems: pawn+FFL+POS, $99–350/month — post-acquisition dysfunction creating 4,000+ motivated switchers
- Celerant: enterprise, $125–169/month — too expensive for independent dealers
- FFLDesk: $49–69/month full compliance+POS — no current competitor at this intersection

### Validation Approach

**Validation milestone:** 25 paying dealers use FFLDesk as sole ATF compliance system for 30 days with zero compliance incidents. If achieved, the integrated compliance+POS architecture is validated.

**Secondary validation:** NPS > 40 from the first cohort — confirms the emotional promise (compliance confidence + counter workflow) is delivering, not just the functional features.

### Risk Mitigation

**Compliance implementation risk:** Attorney review of all ATF-required workflows before launch. The audit simulation report must match exactly what an ATF IOI reviews during an inspection — this requires a test inspection walkthrough with a practicing FFL compliance attorney as part of the development process.

**Regulatory change risk:** ATF compliance requirements change with agency rulings and administration priorities. The compliance layer must be maintained as a living system with a dedicated monitoring process. This maintenance cost must be priced into the subscription model.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

FFLDesk is a multi-user SaaS B2B product with single-tenant dealer accounts (each FFL license is one account), role-based access within a dealer account, and a subscription billing model. The product is browser-first (mobile-responsive web), not a native app, which enables zero-install deployment for the counter.

Key SaaS B2B characteristics that shape requirements:
- **Compliance criticality demands high data isolation** — dealer A records must never be visible across accounts
- **Low user sophistication** — FFL dealers are not software-native; onboarding must be self-serve for the $49/month tier to be economically viable
- **High switching cost post-adoption** — once a dealer's bound book is in FFLDesk, migration cost creates natural retention; onboarding investment pays long-term
- **Support intensity early, declining over time** — dealer support volume should trend toward zero after 30 days as the product becomes familiar

### Technical Architecture Considerations

**Multi-Tenancy:**
- Single-tenant data model with strict account isolation — each FFL dealer's compliance records are completely isolated from all other accounts
- Cross-tenant data access is prohibited — compliance data for one dealer must never be accessible to another dealer or to FFLDesk staff without explicit authorization
- FFLDesk admin access to dealer data must be audit-logged and permission-gated (for support scenarios only)

**Authentication & Authorization:**
- Email + password authentication with MFA support (enforced for owner role)
- RBAC: Owner role (full access including compliance reports, account settings, billing) and Staff role (POS access, bound book entry creation, no access to bulk export or account settings)
- Session management: auto-logout after 8 hours of inactivity for compliance security
- Password reset via email with time-limited tokens

**Subscription & Billing:**
- Stripe Billing for subscription management: Compliance Only ($19/mo), Solo ($49/mo), Pro ($69/mo)
- Trial: 14-day free trial, no credit card required at signup
- Upgrade/downgrade between tiers without data loss
- Failed payment: 7-day grace period with degraded access (read-only), then suspension
- Cancellation: dealer data retained for 90 days post-cancellation for data export

**Data Export:**
- Dealers must be able to export their complete A&D book as a formatted PDF (ATF-inspection-ready format) at any time
- Dealers must be able to export all data as CSV for migration to another system
- 4473 PDF archive: exportable as ZIP file containing all stored 4473 PDFs
- Data portability is a trust feature, not a churn risk — dealers must know they own their data

**Audit & Logging:**
- Every compliance action (create/correct A&D entry, upload 4473, log NICS result) must be logged with user ID, timestamp, action type, and previous/new values
- Audit log must be immutable, exportable, and available for 20 years (matching 4473 retention requirement)
- Application-level logging for error tracking and performance monitoring

### Implementation Considerations

**Onboarding flow requirements:**
- FFL license number validation (format check against ATF FFL numbering system)
- ATF Ruling 2016-1 notification letter generation (pre-populated PDF, dealer downloads and mails to ATF field office)
- Guided data import wizard for FastBound CSV and Bravo export formats
- First-use walkthrough: enter first acquisition entry, confirm bound book header fields
- Target: dealer completes onboarding and enters first valid A&D record in < 30 minutes

**Mobile-first counter design:**
- All compliance-critical workflows (enter acquisition, process sale with 4473, log NICS result) must be fully functional on a 10" tablet in Chrome
- No hover-only UI interactions — touch-first design
- Large tap targets (minimum 44x44px) for counter use with gloves or in a busy environment
- Barcode scan input must work without additional apps (browser-native camera API)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the MVP is defined as the minimum feature set that allows a single-location gun shop dealer to fully decommission FastBound + Square and use FFLDesk as their sole compliance and POS system for 30 days without compliance gaps.

The MVP does not need to be competitive with Orchid's full feature set. It needs to be complete enough for a dealer to trust it with their ATF records. The core question at MVP: "Does this dealer feel confident their bound book would pass an ATF inspection?" If yes, the MVP has delivered.

**Resource Requirements:** 1 full-stack developer (primary), 1 product/QA hybrid, 1 part-time FFL compliance attorney for review. Target ship in 8–10 weeks from kickoff.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Small Shop Sam: POS sale → auto-A&D entry + 4473 upload → NICS log → ATF audit report
- New Dealer Dana: onboarding → first acquisition entry → first transfer → audit confidence
- Staff Employee (Mike): counter sale with compliance guardrails, no ATF knowledge required
- ATF Inspector: retrieval of bound book and 4473 by serial or name

**Must-Have Capabilities:**
- Digital A&D bound book: acquisition entry, disposition entry, correction with audit trail, tamper-evident
- Form 4473 PDF upload and storage, linked to disposition entry, searchable
- NICS check log: date, NTN, result, linked to 4473 and disposition
- Serialized inventory: status tracking, barcode scan input
- POS: firearm cash sale (auto-triggers A&D disposition + 4473 prompt), layaway creation, consignment intake, FFL-to-FFL transfer
- Non-serialized product inventory for accessories/ammunition
- Compliance dashboard with audit simulation report and alert engine
- ATF Ruling 2016-1 notification letter generation (onboarding)
- FastBound and Bravo CSV import wizard
- Multi-user RBAC (owner + staff roles)
- Stripe subscription billing (trial + paid)
- Daily encrypted backup + status page
- Mobile-responsive web UI (Chrome on tablet)
- Daily sales report (CSV export)

### Post-MVP Features

**Phase 2 (Post-MVP):**
- Pawn loan module (origination, payments, forfeit/redemption, NCIC police property reporting)
- "Switch from Bravo" migration wizard (paid service, $199 one-time)
- In-store payment processing (ECS Payments or Stripe Terminal)
- Mobile offline mode
- SHOT Show presence and sales materials (January Year 2)
- QuickBooks CSV export integration
- NICS NTN auto-log via dealer's E-NICS service API

**Phase 3 (Expansion):**
- GunBroker and Guns.com listing sync
- Live distributor inventory feeds
- Multi-location dashboard
- AI-assisted 4473 pre-population from government ID scan
- NSSF preferred vendor application
- Public API for FFL-adjacent services

### Risk Mitigation Strategy

**Technical Risks:** The most technically challenging element is the atomic transaction guarantee (POS sale + A&D disposition in same database transaction) and the tamper-evident audit trail. Both must be implemented correctly before MVP ships — there is no iteration path on compliance infrastructure. Mitigation: attorney review of compliance logic before launch; integration test suite covering all edge cases (denied NICS, incomplete 4473, duplicate serial number).

**Market Risks:** Orchid could drop their price to $49/month to defend the affordable tier. Mitigation: compete on pawn+FFL integration (Pro tier, no comparable option) and support quality — both are structural advantages Orchid cannot match quickly.

**Resource Risks:** If the compliance attorney review process delays launch, cut scope from the non-compliance features (daily sales report, non-serialized inventory) before cutting anything from the P0 compliance stack. The product must launch with compliant compliance features.

---

## Functional Requirements

### Compliance Record Management

- FR1: Dealers can create acquisition entries in the A&D bound book with all ATF-required fields (manufacturer, importer, model, serial number, type, caliber/gauge, date acquired, source)
- FR2: Dealers can create disposition entries in the A&D bound book with all ATF-required fields (date transferred, transferee identification, 4473 reference or FFL number)
- FR3: Dealers can correct any A&D entry with a correction that preserves the original value in an immutable audit log
- FR4: Dealers can search the A&D bound book by serial number, date range, make/model, and transferee name
- FR5: Dealers can view an ATF-format printable bound book report (acquisitions and dispositions formatted per ATF inspection standards)
- FR6: The system prevents deletion of A&D entries (corrections only, with audit trail)
- FR7: Dealers can import historical A&D records from FastBound CSV and Bravo export formats
- FR8: The system detects duplicate serial number entries and requires human resolution before saving

### Form 4473 Management

- FR9: Dealers can upload scanned Form 4473 PDFs linked to a specific disposition entry
- FR10: Dealers can retrieve any Form 4473 by customer last name, transaction date, or firearm serial number
- FR11: The system enforces 20-year retention on Form 4473 records (no deletion permitted within retention period)
- FR12: Dealers can download all stored 4473 PDFs as a ZIP archive for backup or transfer
- FR13: The system generates the ATF Ruling 2016-1 advance notification letter pre-populated with dealer FFL information during onboarding

### Background Check Tracking

- FR14: Dealers can log a NICS background check result (date, NTN, result: Proceed/Delay/Deny) linked to a specific 4473 and disposition entry
- FR15: Dealers can search NICS check logs by date range, result type, and associated firearm serial number
- FR16: The system flags disposition entries that lack a linked NICS log entry as compliance alerts on the dashboard
- FR17: Denied NICS results are logged with the disposition entry left open (firearm not transferred)

### Serialized Inventory Management

- FR18: Dealers can add firearms to inventory with status: In Stock / On Hold / Transferred / Lost / Stolen
- FR19: Inventory status updates automatically when a POS sale is completed (In Stock → Transferred)
- FR20: Dealers can search inventory by serial number, make, model, caliber, and status
- FR21: Dealers can scan barcodes or serial numbers via USB barcode reader or mobile camera to populate inventory and POS fields
- FR22: Dealers can view a reconciliation report showing inventory status vs. bound book disposition status for each firearm

### Point of Sale

- FR23: Dealers can process a firearm cash sale that simultaneously creates a bound book disposition entry and prompts for 4473 upload
- FR24: Dealers can create layaway agreements for serialized firearms with payment schedule tracking
- FR25: Dealers can process layaway pickup (final payment + 4473 + bound book disposition) as a single workflow
- FR26: Dealers can intake consignment firearms (acquisition entry with consignor details) and process their eventual sale or return
- FR27: Dealers can record FFL-to-FFL inbound transfers (acquisition entry with source FFL license number)
- FR28: Dealers can record FFL-to-FFL outbound transfers (disposition entry with destination FFL license number, no 4473 required)
- FR29: Dealers can manage non-serialized product inventory (accessories, ammunition) with basic POS without ATF tracking
- FR30: Dealers can generate a daily sales report with revenue summary, transaction log, and cash drawer reconciliation exportable as CSV

### Compliance Reporting & Audit Readiness

- FR31: Dealers can run an ATF audit simulation report that formats their bound book as an ATF IOI would review it, highlighting any gaps or alerts
- FR32: The compliance dashboard displays open compliance items: acquisitions without disposition, 4473s without upload, NICS log gaps, inventory discrepancies
- FR33: The system generates compliance alerts for: items In Stock more than 30 days without 4473 prompt, bound book entries missing required fields, duplicate serials pending resolution
- FR34: Dealers can download a snapshot of their complete A&D bound book as a formatted PDF at any time for offline inspection readiness

### User & Account Management

- FR35: Dealers can invite staff members to their account with role-based access (Owner vs. Staff)
- FR36: Staff accounts can access POS transaction flows and create A&D entries but cannot access bulk export, compliance reports, or account settings
- FR37: Owner accounts have full access to all features including account settings, billing, and compliance reports
- FR38: Dealers can manage their subscription tier (Compliance Only / Solo / Pro), view billing history, and update payment method
- FR39: Dealers can access a 14-day free trial without entering a credit card
- FR40: Dealers can export their complete data (A&D book CSV, 4473 ZIP, sales history CSV) at any time for data portability

### Data Management & Security

- FR41: The system performs daily encrypted backups of all dealer data with restoration capability within 72 hours
- FR42: All A&D record corrections are logged with original value, corrected value, timestamp, and user who made the correction in an immutable audit log
- FR43: The audit log is exportable and available for the lifetime of the dealer account plus 20 years
- FR44: Dealers can view the complete audit log for their account filtered by date range, user, and action type
- FR45: The system stores all data in US-based data centers with no cross-border transfer of A&D records

---

## Non-Functional Requirements

### Reliability

- System uptime of 99.9% measured monthly (< 8.7 hours downtime per year), excluding scheduled maintenance windows communicated 48+ hours in advance
- Scheduled maintenance must not occur during 8 AM – 8 PM local time for any US time zone on weekdays
- All POS + A&D transactions are atomic: a firearm sale either completes with both the POS record and the A&D disposition entry, or neither — no partial writes permitted
- Daily backup completion must be monitored and alerted on failure; the dealer must receive notification if their backup fails
- System must provide a public status page (e.g., status.ffldesk.com) updated in real-time during incidents

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- A&D bound book and 4473 PDFs stored in US-based cloud storage with encryption-at-rest and access logging
- Every compliance action attributed to a named user account; shared/generic logins prohibited for compliance actions
- MFA enforced for Owner role accounts
- Session timeout after 8 hours of inactivity
- Stripe for subscription payment processing; no card data stored in FFLDesk infrastructure (PCI compliance via Stripe)
- Annual penetration test by third-party vendor starting Year 2; quarterly vulnerability scans from launch
- Tamper-evident audit trail: audit log entries cannot be modified or deleted by any user including system administrators
- Role-based data isolation: Staff accounts cannot access bulk data export or compliance summary reports

### Performance

- A&D entry creation: < 500ms response time under normal load
- POS sale completion (including A&D disposition entry creation): < 2 seconds end-to-end
- 4473 PDF upload: < 10 seconds for files up to 10MB
- Serialized inventory search by serial number: < 1 second for up to 10,000 firearm records per dealer
- ATF audit simulation report generation: < 5 seconds for dealers with up to 5,000 total A&D entries
- System must support up to 50 concurrent dealer sessions during initial launch without performance degradation

### Scalability

- Architecture must support scaling from 50 to 2,000+ dealer accounts without architectural changes
- Data model must support dealers with up to 50,000 firearm records (active + historical) without performance degradation
- Designed for single-location dealers at MVP; multi-location data model must not be architecturally blocked (Phase 3 feature)

### Integration

- USB barcode reader input: standard HID keyboard emulation must work natively in all target browsers without drivers
- Mobile camera barcode scan: browser-native camera API (no native app required) for Chrome on Android and Safari on iOS
- Stripe API integration for subscription lifecycle (trial, payment, upgrade, downgrade, cancellation, failed payment handling)
- CSV import: support FastBound export format and Bravo export format for A&D book migration
- PDF export: all bound book reports must render correctly in Chrome PDF print and Adobe Reader
- CSV export: all exported CSVs must be importable into Microsoft Excel without format errors

### Compliance Infrastructure

- ATF Ruling 2016-1 notification letter PDF generated during onboarding, pre-populated and downloadable for dealer to mail to their ATF field office
- A&D bound book must include all fields required by 27 CFR § 478.125(e) for licensed dealers
- Form 4473 PDFs must be stored for 20 years; system must prevent dealer deletion within retention period
- Backup policy meets ATF electronic recordkeeping requirements: daily encrypted backup, offsite storage, restorable within 72 hours
- All compliance logic must be reviewed and approved by a licensed FFL compliance attorney before production launch


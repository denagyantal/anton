---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/pawn-shop-compliance-modern-pos.md
  - _bmad-output/planning-artifacts/product-brief-pawn-shop-pos-compliance.md
  - _bmad-output/planning-artifacts/research/market-pawn-shop-pos-compliance-research-2026-11-12.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: compliance_regulated_retail
  complexity: high
  projectContext: greenfield
project_name: pawn-shop-pos-compliance
product_name: PawnDesk
user_name: Root
date: '2026-11-13'
---

# Product Requirements Document — PawnDesk

**Author:** Root
**Date:** 2026-11-13
**Product:** PawnDesk — Cloud Pawn Shop POS & Compliance Platform

---

## Executive Summary

PawnDesk is a cloud-first point-of-sale and compliance platform for US independent pawn shops. Every pawn transaction in the United States must be reported to law enforcement within 24 hours; items must be held 30–90 days; customer government ID must be captured at the counter. The software that serves this mandate is either 1990s-era Windows desktop (PawnMaster Classic, now in legacy maintenance under Bravo's January 2024 acquisition) or an overbuilt enterprise cloud platform (Bravo) that shop owners consistently describe as overwhelming and expensive.

PawnDesk occupies the gap no current product fills: **sub-$60/mo, all-inclusive flat pricing with full compliance built into the core workflow** — not bolted on as premium modules. At $49/mo, PawnDesk delivers LeadsOnline automatic submission, hold period tracking, customer ID capture, and GSA serial number checks as table-stakes features. The counter UI is designed for a 2-person shop with a customer standing in front of the terminal, not an enterprise finance team.

The structural moat is compliance dependency: shops cannot operate legally without daily police reporting. Once a shop runs 2+ years of transaction history through PawnDesk with auditor-referenced compliance documentation, switching cost approaches zero-feasibility. Jurisdiction complexity — 50 states with different hold periods and interest rate caps — becomes a durable barrier to competitive entry as the compliance database matures.

**Target Users:** Independent pawn shop owners (single location, 1–3 employees) and operations managers at small chains (2–5 locations) currently using PawnMaster Classic or dissatisfied with Bravo's module pricing.

**Market:** 10,000–11,500 US pawn shops; $5.4B industry revenue; 22% YoY growth (Q2 2026). Every shop is a paying software customer — compliance is legally mandatory with no DIY path.

**Revenue Model:** $49/mo (monthly) · $39/mo billed annually · $299–$399 LTD (NPA convention channel) · $29/mo per additional location.

**MVP Timeline:** 6–8 weeks to beta; go/no-go gate at 30 days of zero-failed LeadsOnline submissions across 10 beta shops.

### What Makes This Special

PawnDesk's differentiator is not a feature — it is a design constraint. Every UI decision runs through a single test: **does this make the shop more compliant or less?** LeadsOnline submission runs automatically at close without operator action. Hold period status is visible on every inventory item without looking it up. Customer ID capture is the first step of every transaction, not an afterthought field.

Three competitive moats compound over time:
1. **Compliance dependency** — shops cannot legally operate without daily police reporting; zero price elasticity once embedded.
2. **Migration asset** — PawnMaster Classic importer removes the single largest switching barrier for the dominant installed base.
3. **Jurisdiction database** — 50-state hold periods and interest rate caps encoded at launch; complexity grows as an entry barrier.

No current product offers all three at sub-$60/mo with transparent flat pricing. Bravo requires add-on modules (pushing effective cost to $140+/location/mo for basic operations). PawnSnap ($99/mo) lacks market recognition. Sub-$60 alternatives (FlexiPawn, Pawnit) have incomplete compliance coverage. PawnDesk is the first product to treat compliance as the product, not a feature.

## Project Classification

- **Project Type:** SaaS B2B — web application with multi-tenant architecture (single-location MVP, multi-location Phase 2)
- **Domain:** Compliance-regulated retail / legal services adjacent
- **Complexity:** High — real-time law enforcement API integration, 50-state jurisdiction rules, sensitive PII handling (government IDs, thumbprint references), financial transaction logic
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

**Compliance Reliability (primary):**
- 100% of active shops submit zero-failed LeadsOnline reports in any 30-day window
- Measured via daily submission confirmation tracking; alert fired within 1 hour of any failure
- Target: 99.9% submission success rate (excluding LeadsOnline platform outages; PawnDesk failures = 0)

**Counter Speed:**
- Core transaction entry (loan or buy) completed within 60 seconds for trained counter staff
- Measured via transaction timestamp (first field entry → submission confirmation)
- Target: 80% of transactions completed in under 60 seconds by week 4 of onboarding

**Hold Period Compliance:**
- Zero instances of items sold before hold period expiration in any shop using PawnDesk
- Measured via hold period override log; every manual override requires owner authentication and logged reason
- Target: Zero compliance hold-period violations across the customer base

**Onboarding Completion:**
- PawnMaster Classic migrations complete without data loss within 48 hours for 95% of migrating shops
- Measured via post-migration data integrity check (transaction count, customer count, inventory count delta = 0)
- Target: 100% migration completion with owner sign-off on data accuracy

**Operator Confidence:**
- Beta shop owners report transaction entry is comparable in speed to their previous system (NPS ≥ 7/10 on ease-of-use survey administered at 30 days)

### Business Success

| Milestone | Target | Measurement |
|-----------|--------|-------------|
| Month 3 | 10 beta customers; LeadsOnline integration validated (zero rejected submissions by law enforcement) | Server logs + beta survey |
| Month 6 | 25 paying customers; $1,225 MRR; NPA Pawn Expo 2027 exhibitor slot confirmed | Stripe + CRM |
| Month 12 | 100 paying customers; $4,900 MRR | Stripe |
| Month 24 | 300 paying customers; $14,700 MRR; multi-location live with 20+ customers | Stripe + CRM |

**KPIs:**

| KPI | Target | Source |
|-----|--------|--------|
| Monthly churn rate | <2% | Customer record changes |
| Average time to first LeadsOnline submission post-signup | <7 days | Onboarding workflow logs |
| PawnMaster migration completion rate | >95% complete without data loss | Migration job logs |
| NPA convention conversion rate | >3% of booth visitors sign up | Event CRM tagging |
| CAC | <$300 | Marketing spend ÷ new customers |
| LTV:CAC ratio | >18x at Month 24 | Financial model ($49/mo × 36mo avg retention) |
| NRR | >100% at Month 24 | Multi-location expansion + annual upgrades |

### Technical Success

- LeadsOnline FTP/XML submissions pass law enforcement acceptance validation for all supported jurisdictions
- System achieves 99.9% uptime during business hours (pawn shops operate 9am–7pm local time)
- PawnMaster Classic data import succeeds for all transaction types (loans, buys, layaways, redemptions) with zero data corruption
- Hold period calculations produce zero false negatives (never marks an item OK-to-sell before the jurisdiction hold period expires)
- All PII (customer ID photos, thumbprint references) encrypted at rest and in transit

### Measurable Outcomes

The MVP is validated and ready for paid launch when:
1. 10 beta shops have submitted 30 consecutive days of LeadsOnline reports via PawnDesk with zero failed submissions
2. Beta shop owners report NPS ≥ 7/10 on transaction entry speed vs. prior system
3. PawnMaster Classic migration successfully completed for ≥3 shops with owner-verified data accuracy
4. Compliance rules correctly configured for the 10 highest-pawn-density US states (TX, CA, FL, GA, OH, NY, PA, IL, TN, AZ)
5. Zero compliance gaps identified by beta pawnbroker advisor review

---

## Product Scope

### MVP — Minimum Viable Product

**MVP Philosophy:** Problem-solving MVP. The minimum set of features that makes a shop legally compliant and operationally functional using PawnDesk instead of their current system. No shop can trial PawnDesk without compliance features — therefore compliance is the MVP.

**Core User Journeys Supported by MVP:**
- Independent shop owner processes daily transactions (loan, buy, layaway) and submits automatic LeadsOnline report at close
- Counter staff looks up customer history and checks item hold period status before sale
- Shop owner migrates from PawnMaster Classic and goes live within 48 hours
- Owner generates compliance documentation for state audit

**Must-Have Capabilities (P0 — required for legal operation):**

1. Transaction creation: Loan (principal, interest rate with state cap enforcement, loan term, repayment date), Buy (purchase price, hold period trigger), Layaway (deposit, balance, pickup date), Redemption, Forfeiture
2. Customer record: government ID photo capture or manual entry, thumbprint log reference, full transaction history, prior transaction visibility at intake
3. Hold period tracker: per-item hold countdown assigned at transaction creation, visual OK-to-sell / HOLD status on every inventory item, automated notification on expiration, manual override with owner auth + logged reason
4. Daily LeadsOnline submission (FTP/XML): automatic generation and submission at shop close, email confirmation with timestamp, failure alert with retry, submission history log for audit
5. Customer ID and thumbprint logging: required field on every new customer, linked to every transaction, searchable by name, ID number, or transaction date

**Must-Have Capabilities (P1 — required for complete shop operations):**

6. Inventory management: item photos (minimum 2 per item), category/condition/description, purchase cost/minimum sale price/asking price, item status lifecycle (on-hold → available → sold/redeemed/forfeited), serial number field
7. GSA stolen property check: serial number lookup on item intake, result logged to transaction, warning/block on hit
8. Loan interest calculation: 50-state max interest rate enforcement, automatic calculation for renewals, renewal reminder 7 days before expiration
9. PawnMaster Classic data importer: transaction history, customer records, inventory import with zero data loss, post-import integrity check

**MVP Resource Requirements:** 1–2 full-stack engineers; 6–8 week build timeline; 1 licensed pawnbroker as domain advisor/beta user.

### Growth Features (Phase 2 — Months 7–18)

- Multi-location dashboard: cross-location inventory view, consolidated hold period queue, single LeadsOnline submission confirmation across all stores
- ATF Form 4473 digital records for FFL-licensed pawn shops
- OFAC/SDN screening integration
- FinCEN 8300 cash transaction reporting (transactions >$10,000)
- QuickBooks accounting integration
- CAPSS integration (California-specific compliance platform)
- State pawnbroker association white-label partnership program

### Vision (Phase 3–4 — Year 2–3+)

- Precious metals live pricing (gold/silver spot price integration for loan valuation)
- eCommerce channel integration (eBay, Facebook Marketplace listings from inventory)
- Advanced analytics dashboard (loan default rates, inventory turn, revenue by category)
- Customer-facing loan management portal (customers track loan status, receive renewal reminders)
- AI-powered item appraisal via photo
- Real-time stolen property matching (beyond daily batch LeadsOnline uploads)
- Compliance insurance product bundled with subscription
- API for third-party integrations

---

## User Journeys

### Journey 1: Marcus — Independent Owner, PawnMaster Migration (Primary Success Path)

Marcus has run a suburban Georgia pawn shop for 11 years on PawnMaster Classic installed on a Windows 7 machine he's kept alive because "it works and I don't want to lose my history." He manually exports a CSV from PawnMaster each evening to submit to LeadsOnline — a process that takes 15–20 minutes and has failed twice in the past year.

**Discovery:** Marcus hears about PawnDesk at a Georgia Pawnbrokers Association meeting from a fellow owner who demoed it at NPA Pawn Expo 2027. He searches "PawnMaster cloud alternative" and finds the migration landing page.

**Evaluation:** He requests a demo. The demo runs through three moments: (1) transaction entry on a tablet — Marcus confirms it's as fast as PawnMaster; (2) the automatic LeadsOnline submission fires at shop close while he watches — no CSV, no manual step, just a confirmation email; (3) the migration tool demo — a sample shop's 11 years of history imports in 90 minutes with a data integrity report. This is the closing moment.

**Onboarding:** Marcus uploads his PawnMaster database export. The importer runs overnight. He goes live the following Monday on a tablet mounted at the counter. His first close: the LeadsOnline report submits automatically at 7:12pm and he gets a confirmation email. He realizes he doesn't need to think about it.

**Daily Operation:** Transaction entry becomes muscle memory within a week. The hold period queue replaces the whiteboard he's been using. When a customer brings in a TV, Marcus enters the serial number — GSA check fires automatically, no hit, item accepted. When another customer wants to buy a guitar, PawnDesk shows "HOLD — 14 days remaining." The customer is told to come back in two weeks.

**Compliance Audit (Month 2 — Success Moment):** A state examiner requests three months of police report submission confirmations. Marcus generates the report from PawnDesk in 30 seconds and emails it. The examiner signs off. Marcus posts in the Georgia Pawnbrokers Association Facebook group: "switched to PawnDesk — 2 seconds to pull audit documentation, automatic LeadsOnline, $49/month. Would recommend."

**Journey Requirements Revealed:** Transaction creation workflow, customer lookup, hold period visibility at POS, automatic LeadsOnline submission, submission history log, PawnMaster importer, compliance documentation export.

---

### Journey 2: Diana — Multi-Location Chain Manager, Bravo Migration (Dissatisfied Power User)

Diana manages operations at a 3-location Texas pawn chain. She ran the Bravo evaluation in 2022 and has since discovered that "basic pawn operations" (trade transactions, specific report types) require paid add-on modules that pushed their per-location cost from $79 to $140+. She tracks hold period expirations across all three locations on a shared spreadsheet because Bravo's hold alerts don't work reliably across multi-location.

**Discovery:** Diana Googles "pawn shop software Bravo alternative" after a module upsell email arrives. She finds PawnDesk's comparison page ("All-inclusive at $49/mo — no modules").

**Evaluation:** She requests a demo for all three locations. The demo focuses on: (1) the flat pricing confirmation — every pawn operation included, no asterisks; (2) hold period queue across locations — she asks directly whether she can see all three locations' hold periods in one view; the honest answer from the sales call is "single-location MVP, multi-location live in Phase 2 (Q3 2027)." She asks about a timeline commitment and receives a written roadmap. She decides to migrate one pilot location now and add the other two when multi-location ships.

**Onboarding:** Pilot location imports from Bravo export. Diana trains two counter staff in 2 hours — they describe the UI as "way simpler than Bravo." First week: zero failed LeadsOnline submissions; daily confirmation emails arrive without manual intervention.

**Month 3:** Pilot location's $49/mo vs. previous $140+ saves $91/mo. Diana prepares a business case for her uncle (the chain owner): "PawnDesk saves us $3,276/year on software cost and eliminates the hold-period spreadsheet risk." He approves migrating all three locations when multi-location launches.

**Journey Requirements Revealed:** Per-location LeadsOnline submission, hold period tracking across inventory, counter staff onboarding flow, pricing transparency (no hidden modules), multi-location roadmap communication.

---

### Journey 3: Counter Staff — High-Traffic Saturday (Edge Case / Speed Path)

It's Saturday. The counter has 4 customers waiting. A part-time employee (3 weeks on the job) is handling the counter alone while the owner runs an errand. A customer wants to pawn a PlayStation 5.

**Transaction Entry:** Staff taps "New Transaction" → selects "Loan." Customer name auto-fills from prior transaction (customer has been in before). ID photo already on file — staff confirms it matches the customer's face. Enters item details, serial number — GSA check fires automatically (0.8 seconds), no hit. Enters loan amount ($120). PawnDesk calculates interest at the Georgia state rate cap and displays the repayment schedule. Staff presents the ticket to the customer, customer signs on tablet. Transaction complete: 47 seconds.

**Hold Period Visibility:** Customer asks to redeem a previous loan. Staff searches by customer name, sees the loan. Hold period shows "LOAN — ACTIVE, due 2026-12-01." Staff processes the redemption payment. Item status updates to "Redeemed." Hold period removed from queue.

**Wrong Item:** Customer asks to buy a camera from the display case. Staff checks the item in PawnDesk — status shows "HOLD — 8 days remaining." Staff tells the customer it's not available for sale yet. No compliance risk.

**Journey Requirements Revealed:** Fast customer lookup (name, ID), prior transaction visibility, serial number GSA check at intake, hold period status on inventory items, loan repayment calculation display, redemption flow, photo ID review at counter.

---

### Journey 4: Shop Owner — Failed LeadsOnline Submission (Error Recovery)

Marcus is at dinner when his phone buzzes at 7:35pm: "PawnDesk alert: LeadsOnline submission for 2026-11-13 failed. Check your email for details and retry instructions."

**Alert:** The email explains the failure — LeadsOnline FTP server timed out. PawnDesk has already attempted one automatic retry (failed). The submission file is queued.

**Recovery:** Marcus taps a link in the email that opens PawnDesk on his phone. He sees the pending submission with a "Retry Now" button. He taps it. Submission succeeds at 7:41pm. He receives a confirmation email.

**Audit Trail:** The submission history log shows two failed attempts, one manual retry, and the successful submission with timestamps. If a compliance examiner asks why the submission was 41 minutes late, Marcus has a complete documented audit trail.

**Journey Requirements Revealed:** Automatic submission failure detection, failure notification via email within 1 hour, retry mechanism (automatic + manual), submission history log with attempt timestamps, mobile-accessible retry UI.

---

### Journey Requirements Summary

| Capability Area | Journeys That Reveal It |
|-----------------|------------------------|
| Transaction creation (loan, buy, layaway, redemption, forfeiture) | J1, J3 |
| Customer lookup and history | J2, J3 |
| Hold period tracking and status display | J1, J2, J3 |
| LeadsOnline automatic submission | J1, J2 |
| LeadsOnline failure detection, retry, and audit log | J4 |
| Serial number GSA check at intake | J3 |
| Loan interest calculation and repayment display | J3 |
| PawnMaster Classic data import | J1 |
| Multi-location hold period queue | J2 (Phase 2) |
| Compliance documentation export | J1 |
| Mobile-accessible alerts and retry | J4 |

---

## Domain-Specific Requirements

### Compliance and Regulatory

PawnDesk operates in a highly regulated domain where non-compliance results in fines ($5,000–$50,000), license revocation, and criminal exposure. The following requirements are non-negotiable for legal operation:

**Police Reporting:**
- Daily transaction reports submitted to LeadsOnline via FTP/XML within 24 hours of shop close
- Report format must conform to LeadsOnline XML schema version current at launch
- Failed submissions must trigger immediate notification and retry; submission attempts logged with timestamps for 7 years
- Submission confirmation (transaction ID from LeadsOnline) stored per-submission for audit presentation

**Hold Periods:**
- Hold periods configured per jurisdiction (state and, where applicable, city/county — initial coverage: 10 highest-density pawn states)
- System must prevent sale of any item before hold period expires without explicit owner-authenticated override
- Every hold period override logged with: timestamp, overriding user, documented reason, item details
- Hold period clock starts at transaction timestamp, not date — hour-level precision required

**Customer Identification:**
- Government-issued photo ID required on every new customer record; type (DL, passport, state ID) and ID number recorded
- Thumbprint reference log required (physical thumbprint on paper ticket is acceptable for MVP; PawnDesk captures reference number or scan)
- Customer ID records retained for 7 years minimum
- Recidivism visibility: prior transactions for a customer must be immediately visible at counter intake

**GSA Stolen Property Check:**
- Serial number field on all items triggers automatic GSA database query on item intake
- Query result (clean / hit / no-serial) logged to transaction record
- Item with GSA hit: system flags the item and requires owner acknowledgment before accepting transaction; flags do not auto-block (operator makes legal determination)

**State-Specific Interest Rates:**
- Loan interest rates capped per state; PawnDesk enforces state maximum at loan creation
- Interest rate cap database covers all 50 states at launch; updated when state law changes
- System must reject or warn on any attempted interest rate entry exceeding the state cap

**Record Retention:**
- All transaction records, customer records, and LeadsOnline submission logs retained for minimum 7 years
- Soft-delete only — no hard deletion of compliance records; archive and audit access maintained

### Technical Constraints

**Data Security:**
- Customer PII (government ID photos, ID numbers, transaction records) encrypted at rest (AES-256) and in transit (TLS 1.3+)
- Role-based access: counter staff (transaction entry, customer lookup, inventory view), owner (full access including overrides and reports), read-only auditor role (compliance documentation export only)
- Audit log of all user actions on compliance-sensitive data (hold period overrides, submission retries, manual GSA acknowledgments)

**Availability:**
- System must be available during pawn shop business hours (9am–7pm local time, 7 days/week)
- LeadsOnline submission must succeed even if operator does not actively close the system (auto-trigger at configurable close time)

### Integration Requirements

**LeadsOnline (FTP/XML):**
- FTP/XML credentials requested per shop at onboarding; PawnDesk stores credentials encrypted
- XML format per LeadsOnline schema; PawnDesk generates the XML from transaction data
- Fallback: manual XML download for shops in jurisdictions where FTP submission is not accepted (some jurisdictions require manual upload; PawnDesk generates the file)

**GSA Stolen Property Database:**
- Serial number lookup via GSA's National Stolen Property database or equivalent (e.g., HPI Check equivalent for stolen goods)
- Offline mode: if GSA check fails, item is flagged "GSA Check Pending" and submission to LeadsOnline includes a flag; counter is not blocked

**PawnMaster Classic Import:**
- Accept PawnMaster Classic database export (MDB or CSV format per PawnMaster export capabilities)
- Map PawnMaster transaction types to PawnDesk transaction types with documented mapping
- Post-import integrity report: row counts for transactions, customers, inventory items compared against source

### Risk Mitigations

| Risk | Mitigation |
|------|------------|
| LeadsOnline restricts third-party API access | FTP/XML access confirmed accessible via credentials request; build to open standard; maintain CAPSS and BWI RAPID as fallback integrations for CA and other jurisdictions |
| Hold period calculation error (false negative) | Unit tests for every jurisdiction's hold period rule; integration test verifying no item can be marked OK-to-sell before hold period clock expires |
| PawnMaster import data corruption | Dry-run mode shows mapping before import; rollback capability; owner sign-off required before go-live |
| State law change invalidates interest rate cap | Interest rate database versioned with effective dates; alert to affected shops when a rate change is detected |

---

## SaaS B2B — Platform-Specific Requirements

### Tenant Architecture

**Single-tenant data isolation:** Each pawn shop's transaction data, customer records, and compliance submissions are logically isolated; no cross-tenant data access is possible. MVP uses per-tenant database schemas within a shared infrastructure.

**Shop configuration:** Per-tenant settings include jurisdiction (state, city/county), LeadsOnline FTP credentials, hold period rules (default jurisdiction rules, with override capability for shops with local ordinances), shop name and address (used in LeadsOnline XML), business hours for auto-submission trigger.

### Authentication and Access Control

**Roles (MVP):**
- **Owner:** Full access — all transactions, overrides, compliance reports, settings, billing
- **Counter Staff:** Transaction creation, customer lookup, inventory view, hold period status; cannot access compliance logs, billing, or settings
- **Auditor (read-only):** Compliance documentation export only; no transaction creation

**Authentication:** Email + password with mandatory 2FA for Owner role (compliance-sensitive access). Password reset via email. Session timeout after 8 hours of inactivity.

### Multi-Tenancy (Phase 2)

Multi-location support: single-owner account with multiple shop locations; cross-location inventory visibility; consolidated LeadsOnline submission status dashboard. Single billing account covering all locations.

### Subscription and Billing

- Stripe for subscription management and payment processing
- Monthly and annual billing tiers; proration on upgrades/downgrades
- LTD (Lifetime Deal) redeemed via coupon code at signup; billed as one-time charge
- Failed payment: 7-day grace period with daily email reminders; compliance features remain active during grace (shops must not lose compliance capability due to payment failure); access suspended after 7 days

### Implementation Considerations

- Web-first responsive design optimized for tablet counter use (10" tablets preferred by pawn shop operators); no native mobile app required for MVP
- Offline-tolerant: if internet drops during counter operation, transactions queue locally and sync when connection restores; LeadsOnline submission deferred until connection available, with notification
- Counter performance: transaction list and customer search must respond within 1 second under normal load
- Cloud-hosted (AWS or GCP); multi-availability-zone for 99.9% uptime SLA

---

## Project Scoping and Phased Development

### MVP Strategy

**Approach:** Compliance-first MVP. The product is unusable without the compliance layer — there is no "lite" version. MVP scope is defined by what a single-location US pawn shop requires to operate legally and serve customers efficiently using PawnDesk instead of their current system.

**Team:** 1–2 full-stack engineers + 1 licensed pawnbroker domain advisor. 6–8 week build to functional beta.

### MVP Feature Set (Phase 1)

**Core User Journeys:**
- Loan / Buy / Layaway transaction creation with all required fields
- Customer record management with ID capture
- Hold period tracking — visual status on every inventory item
- Daily LeadsOnline automatic submission with failure notification and retry
- GSA serial number check at intake
- Loan interest calculation with state cap enforcement
- PawnMaster Classic data importer
- Compliance documentation export (submission history, hold period log)

**Must-Have Capabilities:**
All P0 and P1 features listed in the MVP Product Scope section above.

**Explicit MVP Exclusions:**
Multi-location, ATF Form 4473, OFAC/SDN, FinCEN 8300, eCommerce, precious metals pricing, QuickBooks, AppSumo.

### Post-MVP Features (Phase 2 — Months 7–18)

Multi-location dashboard, ATF/FFL compliance, OFAC/SDN screening, QuickBooks integration, CAPSS (California), state association white-label partnerships.

### Phase 3 Expansion (Year 2–3)

Precious metals pricing, eCommerce channel sync, advanced analytics, customer loan portal, AI appraisal assist.

### Risk Mitigation Strategy

**Technical Risks:** LeadsOnline FTP/XML integration is the highest-risk dependency. Mitigation: validate credentials and schema in week 1 before any other development. Fallback: generate compliant XML for manual upload if FTP access fails for specific jurisdictions.

**Market Risks:** PawnMaster Classic user inertia. Mitigation: migration tool is the primary acquisition asset — zero data loss messaging and a money-back migration guarantee reduce switching hesitation.

**Resource Risks:** Small team, 6-8 week timeline. Mitigation: MVP scope is minimal by design; P1 features (GSA check, loan interest) are well-scoped and low-ambiguity; PawnMaster importer is the highest-complexity item and should be derisked in week 2.

---

## Functional Requirements

### Transaction Management

- FR1: Counter staff can create a loan transaction by entering customer, item details, serial number, loan amount, and loan term — with interest rate calculated and displayed against state cap
- FR2: Counter staff can create a buy transaction by entering customer, item details, purchase price, and item condition — with hold period triggered automatically at transaction timestamp
- FR3: Counter staff can create a layaway transaction by entering customer, item details, deposit amount, balance due, and pickup date
- FR4: Counter staff can process a loan redemption by looking up an active loan and recording full or partial payoff with updated balance
- FR5: Counter staff can process a loan forfeiture by marking a past-due loan as forfeited, transferring item to inventory with hold period applied
- FR6: Counter staff can process a loan renewal by extending a loan term with recalculated interest at the state-capped rate
- FR7: Owners can void a transaction within 24 hours of creation with a logged reason

### Customer Management

- FR8: Counter staff can create a customer record with name, government ID type, ID number, ID photo (upload or camera capture), and thumbprint reference
- FR9: Counter staff can look up a customer by name, ID number, or prior transaction and view their full transaction history
- FR10: Counter staff can update a customer record (address, phone, ID renewal) with the change logged
- FR11: System displays all prior transactions for a returning customer during intake without requiring a separate search step

### Inventory and Hold Period Management

- FR12: Every inventory item displays a real-time hold period status (OK-to-sell / HOLD with days remaining) derived from the shop's jurisdiction rules
- FR13: System sends the owner a notification when an item's hold period expires
- FR14: Counter staff can view the full inventory with filter by status (on-hold, available, sold, redeemed, forfeited), category, and date range
- FR15: Owners can apply a manual hold period override with owner authentication and a logged reason; override is visible in the item record and the compliance audit log
- FR16: Counter staff can record item photos (minimum 2 per item) at transaction creation
- FR17: System blocks sale of any item with active hold period without owner-authenticated override

### LeadsOnline Compliance Reporting

- FR18: System automatically generates and submits a LeadsOnline-compliant FTP/XML transaction report for each shop at their configured daily close time
- FR19: Owner receives an email confirmation of each successful LeadsOnline submission with timestamp and LeadsOnline transaction ID
- FR20: System detects a failed LeadsOnline submission within 1 hour, sends an alert notification to the owner, and automatically retries up to 3 times
- FR21: Owner can manually trigger a LeadsOnline submission retry from the compliance dashboard or a notification email link
- FR22: Owners can view the full LeadsOnline submission history (date, status, attempt count, success timestamp, LeadsOnline transaction ID) covering all submissions for 7 years
- FR23: Owners can export compliance documentation (submission history report, hold period log) in PDF and CSV format for audit presentation

### GSA Stolen Property Check

- FR24: System automatically queries the GSA stolen property database when a serial number is entered on item intake and displays the result (clean / hit / no serial)
- FR25: GSA query result is logged to the transaction record with timestamp and query response
- FR26: Counter staff can proceed with a GSA hit item only after owner acknowledges the flag with a logged reason; the hit remains recorded in the transaction regardless of acknowledgment

### Loan Interest and Calculations

- FR27: System enforces the state-specific maximum interest rate cap at loan creation; entering a rate above the cap triggers a warning and prevents submission
- FR28: System automatically calculates total interest due, payoff amount, and renewal amount based on loan amount, rate, and term
- FR29: System sends the owner and/or counter staff a renewal reminder notification 7 days before a loan expires

### PawnMaster Classic Migration

- FR30: Owners can upload a PawnMaster Classic database export and run a dry-run preview showing record counts and mapping before committing the import
- FR31: System imports PawnMaster Classic transaction history, customer records, and inventory data with zero data loss verified by post-import integrity report (source vs. destination row counts)
- FR32: Post-migration integrity report is emailed to the owner and stored for 30 days; owner sign-off (checkbox acknowledgment) required before the shop goes live on PawnDesk

### Shop Configuration and Administration

- FR33: Owners can configure shop jurisdiction (state, city/county) and LeadsOnline FTP credentials in the shop settings
- FR34: Owners can configure the daily LeadsOnline auto-submission time (default: 7pm local; adjustable)
- FR35: Owners can create counter staff accounts with restricted access (transaction creation, customer lookup, inventory view only)
- FR36: System provides an auditor read-only access role limited to compliance documentation export
- FR37: Owners can view the billing status, change subscription tier, and download invoices

### Notifications and Alerts

- FR38: System sends hold period expiration notifications (configurable: email and/or in-app) when items become available for sale
- FR39: System sends loan expiration reminder notifications 7 days before a loan due date
- FR40: System sends LeadsOnline submission failure alerts within 1 hour of a failed submission attempt

---

## Non-Functional Requirements

### Performance

- Transaction entry form renders in under 1 second on tablet hardware (10" tablet, standard cellular or WiFi connection)
- Customer search returns results within 1 second for shops with up to 50,000 customer records
- GSA serial number query returns a result within 3 seconds; transaction entry is not blocked if GSA response exceeds 3 seconds (item flagged "GSA Check Pending")
- LeadsOnline XML generation and FTP submission completes within 60 seconds for a daily report of up to 500 transactions
- Compliance documentation export (PDF/CSV) generates within 10 seconds for up to 90 days of data

### Security

- All customer PII (government ID photos, ID numbers, transaction records, thumbprint references) encrypted at rest using AES-256 and in transit using TLS 1.3+
- LeadsOnline FTP credentials stored encrypted at rest; never transmitted to client browser
- Owner role requires 2FA (TOTP or email OTP); counter staff accounts require password only (single-workstation use case)
- Complete audit log of all actions on compliance-sensitive data: hold period overrides, GSA hit acknowledgments, submission retries, user account changes — retained 7 years
- Session timeout after 8 hours of inactivity; re-authentication required to resume
- SOC 2 Type I target within 12 months of launch (required for state pawnbroker association partnerships and enterprise-tier shops)

### Reliability

- 99.9% uptime during pawn shop business hours (9am–7pm local time, Monday–Saturday) as measured by uptime monitoring with 5-minute check intervals
- Offline-tolerant counter operations: transactions queue locally if internet connection drops and sync when connection restores; operator receives a visible "offline mode" indicator
- LeadsOnline auto-submission retries up to 3 times on failure before escalating to owner alert; retry intervals: 15 minutes, 30 minutes, 1 hour
- Zero data loss on transaction records; all writes confirmed to persistent storage before success response returned to client
- Automated daily database backups retained 30 days; point-in-time recovery available for compliance record restoration

### Scalability

- MVP infrastructure supports up to 500 concurrent shop tenants without performance degradation
- Multi-location Phase 2 architecture supports up to 10 locations per tenant with consolidated reporting
- Database schema and query patterns designed to support 7-year record retention per tenant (estimated 100,000–500,000 transaction records per active shop over 7 years) without query degradation

### Integration Reliability

- LeadsOnline FTP/XML integration: submission success rate ≥99.9% (excluding LeadsOnline platform outages); failures logged with full error context for operator diagnosis
- GSA check: query failures degrade gracefully (item flagged, counter not blocked); GSA outages do not prevent transaction creation or LeadsOnline submission
- PawnMaster Classic import: supports MDB (Access database) and CSV export formats; import failures surface per-record errors with field-level detail for operator remediation

---

## Go-to-Market Integration Notes

The following GTM elements are outside the product's functional requirements but affect product decisions:

**NPA Pawn Expo 2027 (Primary Acquisition):** Live demo flow must be demonstrable on a tablet in under 3 minutes: transaction entry → automatic LeadsOnline submission → hold period visibility. This demo sequence must function on a demo tenant without real LeadsOnline credentials (sandbox mode).

**Sandbox/Demo Mode:** A fully functional demo tenant with pre-loaded sample data (customers, transactions, inventory, submission history) allows prospects to explore PawnDesk without credentials. Demo mode disables actual FTP submissions.

**Migration Landing Page:** PawnDesk website includes a dedicated PawnMaster Classic migration page. The import tool and migration flow are the primary acquisition asset for the PawnMaster Classic installed base.

**Pricing Transparency:** No features are behind a paywall on the $49/mo tier. The in-app experience must never prompt to "upgrade" for any pawn operation listed in the MVP scope.

---

*PRD Version 1.0 — 2026-11-13*
*Source documents: Product Brief (2026-11-12), Shortlisted Idea (2026-09-02)*
*Next steps: Technical Architecture, Epics & Stories*

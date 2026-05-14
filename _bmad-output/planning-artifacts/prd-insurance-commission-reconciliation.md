---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/insurance-agency-commission-reconciliation-tool.md
  - _bmad-output/planning-artifacts/market-research-insurance-commission-reconciliation.md
  - _bmad-output/planning-artifacts/brief-insurance-commission-reconciliation.md
workflowType: prd
date: 2026-05-14
author: Root
classification:
  projectType: saas_b2b
  domain: insurtech_fintech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Insurance Agency Commission Reconciliation Tool

**Author:** Root
**Date:** 2026-05-14
**Status:** Complete

---

## Executive Summary

Independent P&C insurance agencies — particularly the 25,000+ shops with 1–10 producers — lose $18,000–$36,000 per year in commission leakage from undetected carrier underpayments. Seventy percent of the 39,000 US independent agencies reconcile commissions manually in Excel, spending 40–80 hours/month on a process that catches only a fraction of discrepancies. No affordable, focused commission reconciliation tool exists at $39–$99/month; the gap between Excel ($0) and the cheapest full AMS ($250+/month) is entirely unoccupied.

This product is a standalone SaaS tool that automates the monthly commission reconciliation workflow: upload carrier statements (PDF or CSV), auto-match against policy records, flag discrepancies by type and dollar amount, and export a reconciled report plus carrier dispute documentation. Target price: $39–$79/month or $79 LTD on AppSumo. A single recovered missed commission payment typically exceeds the full annual subscription cost.

**Primary users:** Agency owners (solo/small shops) and agency office managers at 1–10 producer P&C agencies. Target market: 25,000+ small independent P&C agencies; serviceable addressable market of $14M ARR at target pricing.

### What Makes This Special

**AI-powered PDF parsing from day one.** Seventy-five percent of carrier statements arrive as PDFs in proprietary layouts. Template-based tools and CSV-only solutions cover a fraction of the carrier universe. This product uses LLM-assisted OCR and column detection to handle format diversity without requiring manual template configuration per carrier — dramatically reducing time-to-first-value for new accounts.

**Only tool priced for small P&C agencies.** AgencyBloc Commissions+ (the only pure-play commission tool) targets life/health agencies and requires full AMS purchase. Applied Epic, AMS360, and EZLynx serve 20+ producer enterprise agencies at $250–$5,000+/month. No competitor occupies the $39–$99/month band for P&C-focused standalone reconciliation.

**Standalone, not a replacement.** Agencies don't change their AMS or workflows — they add one reconciliation step. Policy records import via CSV export from any AMS. The carrier format library compounds as a proprietary moat: each mapped carrier reduces setup friction for all future accounts.

**AppSumo category pioneer.** No insurance commission reconciliation tool has appeared on AppSumo. First-mover at $79 LTD targets the small-business SaaS buyer demographic that closely overlaps with 1–5 producer agency owners.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant web application, single user per account (MVP), subscription + LTD billing
- **Domain:** InsurTech / Financial Services — insurance commission management, financial data reconciliation
- **Complexity:** Medium — financial data integrity requirements, multi-format document parsing, AI-assisted extraction; no HIPAA or PCI-DSS cardholder data; state commission regulations apply to agencies, not to reconciliation tooling
- **Project Context:** Greenfield — no existing codebase; 3–4 week MVP build target

---

## Success Criteria

### User Success

Users succeed when they complete their monthly reconciliation faster with higher accuracy than Excel — and recover commission dollars they would have missed.

**Time-to-first-value:** User completes first reconciliation run (at least one carrier statement matched against policy records with discrepancy results displayed) within 60 minutes of account creation. Target: 80% of trial users achieve this in session 1.

**Discrepancy discovery rate:** 60%+ of trial users identify at least one carrier discrepancy (underpayment, missing payment, or overpayment) in their first reconciliation run. This is the primary conversion trigger.

**Time reduction:** Users self-report 50%+ reduction in monthly reconciliation time within 90 days of adoption. Baseline: 40–80 hours/month → target: 10–30 hours/month.

**Carrier coverage:** 80% of a user's active carriers mapped and processing within 45 days. Carriers still on Excel are churn risk.

**Monthly active usage:** 85%+ of paid subscribers complete at least one reconciliation run per calendar month. Non-usage signals Excel hasn't been replaced.

### Business Success

**Month 3:** 50 paying customers; MRR $2,000–$3,000; AppSumo launch application submitted.

**Month 6:** 200 paying customers; MRR $8,000–$12,000; 10+ Capterra/G2 reviews; first IIABA chapter mention.

**Month 12:** 400+ paying customers; MRR $22,000; AppSumo LTD net revenue $39,000–$158,000; total ARR $250,000–$350,000 (MRR + LTD amortized); 30+ reviews averaging 4.3+ stars.

**Trial-to-paid conversion:** 25% by month 6; 30% by month 12.

**Net revenue churn:** <3%/month at month 6; <2%/month at month 12.

### Technical Success

**PDF parsing accuracy:** AI OCR correctly extracts and maps carrier statement line items with 90%+ field-level accuracy on the 10 most-common carrier formats by independent agency market share (State Farm, Nationwide, Progressive, Travelers, Liberty Mutual, Farmers, Allstate, Cincinnati Financial, Westfield, Erie).

**Data integrity:** Zero reconciliation record loss events across the beta period. Match decisions, carrier mappings, and historical records must persist correctly across sessions and deployments.

**Reliability:** 99.5% uptime (monthly measurement). Scheduled maintenance communicated 48 hours in advance.

### Measurable Outcomes (North Star)

**Total commission dollars recovered** across all user accounts: $500,000 by month 6; $2,000,000 by month 12. This is the clearest measure of product value and the most compelling marketing claim.

| KPI | Month 6 Target | Month 12 Target |
|-----|---------------|-----------------|
| MRR | $10,000 | $22,000 |
| Paying customers | 200 | 400 |
| Trial-to-paid conversion | 25% | 30% |
| Monthly active usage rate | 85% | 88% |
| Avg carriers mapped per account | 15 | 25 |
| Discrepancy discovery rate (trial) | 55% | 65% |
| Net revenue churn | <3% | <2% |
| AppSumo LTD units sold | 500 | 1,500 |
| Capterra/G2 reviews | 10 | 30 |
| NPS (active subscribers) | 45 | 55 |
| Total commission dollars recovered | $500K | $2M |

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1, Weeks 1–4)

**Core workflows:**
1. **Upload** — Drag-and-drop carrier commission statement upload (PDF + CSV/Excel). AI-powered OCR extraction for PDFs. AI column detection and mapping for CSV. Auto-detect carrier from header/filename. Manual carrier assignment and column mapping UI for first-time setup.
2. **Match** — Auto-match carrier statement line items to policy records by policy number. Fuzzy matching for near-matches (format variations, insured name variations). Discrepancy flagging by type: underpayment, missing payment, overpayment, timing difference. Manual match override with audit trail.
3. **Report** — Summary view (total expected vs. received, discrepancies by type and dollar). Line-item discrepancy list with aging (months outstanding). Export: PDF dispute report formatted for carrier email attachment; CSV reconciled statement; QuickBooks-compatible CSV.

**Account capabilities:** Single-user account with email/password auth. Carrier format library (saved mappings reused each month). Reconciliation history (past months' records and reports accessible). Stripe billing: monthly subscription + AppSumo LTD code redemption.

**Pricing:** $39/month (Solo: 1–5 producers); $69/month (Standard: 6–15 producers); $79 LTD (1 producer seat, AppSumo).

**MVP success gate:** 10 beta customers from real P&C agencies complete 2+ reconciliation cycles; 6+ report discovering a discrepancy they would have missed; 3+ successfully disputed and recovered a missed payment; average time-to-first-reconciliation under 90 minutes for <25-carrier agencies; AppSumo application submitted with 5+ reviews.

### Growth Features — Phase 2 (Months 4–9 Post-Launch)

- Multi-user accounts with role-based access (Admin, Accountant, Producer view)
- Producer commission portal (each producer views their split without full agency data access)
- Shared carrier format library (community-contributed mappings; zero-setup for common carriers)
- HawkSoft and NowCerts enhanced CSV sync (tuned import workflows, not full API)
- Built-in carrier dispute workflow (status tracking: submitted, acknowledged, resolved, escalated)
- Commission rate verification (flag policies where received rate differs from expected rate)
- Discrepancy aging reports and carrier performance scoring

### Vision — Phase 3 (Months 10–18)

- Applied Epic and AMS360 API integrations (policy data sync, no manual export)
- Carrier statement auto-download connections for 20 largest carriers by independent agency volume
- QuickBooks Online native integration (two-way sync)
- Analytics dashboard: commission trend by carrier, line of business, producer over 12 months
- Carrier benchmarking: compare rates against anonymized peer agency data (opt-in)
- Bonus and override reconciliation (quarterly/annual carrier bonus statements)
- Commission financing (advance payments against receivables, fintech integration)
- Life & health commission reconciliation (expand beyond P&C)
- White-label API for AMS platforms and agency networks

---

## User Journeys

### Journey 1: Sarah — Agency Owner, First Reconciliation (Happy Path)

Sarah is a former State Farm captive who went independent 5 years ago. She runs a 2-person shop in suburban Ohio with 22 carriers. She reconciles commissions herself in a 47-tab Excel workbook on Sunday evenings — a 6-hour ritual she despises. Last October a formula error caused her to miss $1,800 from a carrier; she only found it at tax time.

**Opening scene:** After a particularly painful Sunday, Sarah searches "insurance commission reconciliation software" and finds the product via a Capterra listing and a Reddit thread in r/Insurance where another owner mentioned recovering $3,400 in their first month.

**Discovery:** She lands on the marketing page, reads the headline ("Stop losing 3–6% of your commissions to Excel errors"), watches a 90-second demo video showing a Nationwide PDF being uploaded and discrepancies surfacing in under 2 minutes. She signs up for the 14-day trial.

**Onboarding:** She drags in her most recent Nationwide statement (PDF, her largest carrier). OCR extracts data in 28 seconds. She imports her HawkSoft policy CSV. The matching engine runs. Results: 47 matched, 3 flagged discrepancies — 2 timing differences and one genuinely missing payment of $340.

**Aha! moment:** She sees the $340 missing payment. She clicks "Generate Dispute Report," gets a formatted PDF with policy details and the expected vs. received amounts. She emails it to Nationwide within 4 minutes of seeing the result. The next morning, Nationwide confirms the oversight and will include the adjustment in next month's statement. Sarah upgrades to the $39/month Solo plan.

**Month 1–3:** She adds all 22 carriers over 6 weeks. AI format detection handles 19 automatically; she manually maps 3 column configurations (12–18 minutes each). By month 3, monthly reconciliation takes 80 minutes instead of 6 hours. She has recovered $1,240 in previously missed commissions.

**Retention:** The tool is embedded in her workflow. Carrier mappings are established. She posts in r/Insurance: "Found $4K I was leaving on the table." She mentions it at the state IIABA chapter meeting.

**Journey reveals capabilities needed:** PDF OCR extraction, AI column detection, CSV import, auto-matching, discrepancy flagging, carrier format library, dispute report export, trial-to-paid conversion flow.

---

### Journey 2: Sarah — Unrecognized Carrier Format (Edge Case)

Three months in, Sarah uploads a statement from a smaller regional carrier, Western Reserve. The AI cannot confidently identify the carrier or extract columns — it surfaces a "low-confidence extraction" warning with the raw extracted text.

**What happens:** Sarah sees the warning and a side-by-side view: the raw extracted text on the left, empty mapped fields on the right. A guided column-mapping UI prompts her to drag column headers to the correct field slots (Policy Number, Effective Date, Commission Amount). She completes the mapping in 9 minutes. The system saves this as "Western Reserve — Statement Format v1" in her carrier library.

Next month, Western Reserve is uploaded automatically matched. No mapping needed.

**Journey reveals capabilities needed:** Low-confidence OCR detection and fallback UI, manual column mapping interface, carrier format library persistence, user feedback on extraction quality.

---

### Journey 3: Mark — Office Manager, Multi-Carrier Agency Onboarding

Mark has worked at Riverside Insurance Group for 11 years and owns all back-office operations. The agency has 5 producers, 38 active carriers, and $3.2M annual premiums. He spends 3.5 days/month on commission reconciliation. He is the only person who knows how to do it.

**Discovery:** Mark mentions the reconciliation burden during a quarterly review. The owner says "find something under $100/month." Mark searches Capterra, sees this product alongside Commission Wizard. He asks in an agency owner Facebook group — two members have used it with positive results.

**Onboarding strategy:** Mark works through carrier setup over 2 weeks, 2–3 carriers per day alongside regular work. AI handles 31 of 38 carriers automatically. He manually maps 7.

**First full reconciliation:** Month 1 complete report shows $2,100 in outstanding discrepancies across 6 carriers — including a $780 underpayment aging 4 months that he had no visibility into. He presents the report to the owner. The aging discrepancy report is the moment that sells the subscription.

**Ongoing:** Mark presents a monthly reconciliation summary to the owner. His reconciliation time drops from 3.5 days to 6 hours. The owner approves annual billing without further discussion.

**Journey reveals capabilities needed:** Bulk carrier onboarding workflow, discrepancy aging tracking (months outstanding), month-over-month carry-forward of unresolved discrepancies, summary report for non-operator stakeholder, annual billing option.

---

### Journey 4: Agency Accountant — QuickBooks Export (Secondary User)

Linda is the part-time bookkeeper for a 4-producer agency. She doesn't run reconciliations — Mark does. But at month-end she needs to post commission income to the general ledger in QuickBooks Online.

**Pre-product:** Mark exports a summary to a manually formatted spreadsheet. Linda re-enters it in QuickBooks.

**With product:** Mark exports the reconciled statement as a QuickBooks-compatible CSV directly from the reconciliation report. Linda imports it in QuickBooks in 3 minutes instead of 45.

Linda becomes an internal advocate: "Whatever that tool is, please renew it."

**Journey reveals capabilities needed:** QuickBooks-compatible CSV export format (Chart of Accounts mapping), export naming conventions for accounting workflow, downloadable export history.

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Sarah happy path | PDF OCR, auto-format detection, CSV policy import, auto-matching, discrepancy flagging, dispute report export, trial conversion |
| Sarah edge case | Low-confidence detection, manual column mapping UI, carrier format library, format persistence |
| Mark multi-carrier | Multi-carrier onboarding flow, aging tracking, carry-forward, summary reporting, annual billing |
| Linda bookkeeper | QuickBooks CSV export, export history, accounting-format compliance |

---

## Domain-Specific Requirements

This product operates in the insurance financial services domain with medium complexity. No HIPAA applies (no protected health information). PCI-DSS cardholder data is not processed. State insurance regulations govern agencies, not reconciliation tooling — this product processes existing commission data, not regulatory filings.

### Financial Data Integrity

- All reconciliation records must be stored with an immutable audit trail: who created, modified, or overrode each match decision, with timestamps.
- Commission records must be retained for a minimum of 7 years to align with insurance industry recordkeeping standards.
- Manual match overrides require a reason field and are logged permanently; they cannot be deleted, only annotated.
- Each reconciliation run must be atomic: a run either completes fully (all line items processed and saved) or rolls back entirely, with no partial-save states.

### Multi-Tenant Data Segregation

- Each agency account's data — carrier statements, policy records, carrier format mappings, reconciliation history, and dispute records — must be completely isolated from all other accounts.
- No cross-account data exposure is permissible at any layer (API, database query, export).

### Commission Regulation Scope Boundary

- This product does not generate state-level commission disclosure filings, regulatory reports, or producer licensing records.
- Out-of-scope explicitly: Form 1099 generation, state surplus lines filings, producer commission schedule maintenance for regulatory purposes.
- If users ask about regulatory compliance reporting, the product surfaces an in-app note directing them to their AMS or compliance counsel.

### Data Handling

- No carrier login credentials are stored by this product (MVP is upload-only; no carrier portal scraping).
- Uploaded statement files are stored in encrypted cloud object storage; raw files are accessible to the account holder for 12 months, then purged (processed extracted data retained per 7-year rule).
- Policy records imported via CSV are not shared with carriers or third parties.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**AI-Powered Multi-Format Document Parsing (Primary Innovation)**

The central technical innovation is applying LLM-assisted OCR to the unstructured, proprietary PDF formats that dominate carrier commission statement delivery. Unlike template-based CSV mapping tools (which require a human to pre-configure each carrier's format), this product uses AI to:

1. Extract raw text from uploaded PDFs via OCR
2. Identify column headers and data boundaries via semantic understanding
3. Map extracted fields to canonical commission data schema (policy number, effective date, premium, commission amount, carrier reference)
4. Assign a confidence score to the extraction; surface low-confidence items for human review

This approach allows new carrier formats to be handled without pre-built templates, dramatically reducing onboarding friction. Each human correction to a low-confidence extraction is used to reinforce the carrier's stored format mapping, creating a self-improving carrier library.

**Compounding Carrier Format Moat**

Every new carrier format mapped by any user (or by the product team) becomes reusable for all future accounts who use that carrier. The format library grows asymptotically toward complete coverage of the US carrier market. As library coverage increases: onboarding friction decreases → conversion rates improve → the moat deepens. Competitors without an existing format library must start from zero.

### Market Context

Commission Wizard (primary direct competitor) is also applying AI to commission reconciliation, but targets mid-to-large agencies with pricing that excludes the 1–10 producer segment. Fintary ($10M Series A, November 2025) targets enterprise agencies. No competitor has an AppSumo listing or LTD offer in this category.

The AI-assisted PDF parsing approach is proven in adjacent markets (invoice processing, bank statement analysis) but has not been applied specifically to P&C carrier commission statement formats at an accessible price point.

### Validation Approach

**Beta validation:** 10 real P&C agencies upload statements from the 10 highest-market-share carriers. Measure field-level extraction accuracy before and after human correction. Target: 90%+ accuracy on the top 10 carriers within 8 weeks of beta launch.

**Format library growth rate:** Track unique carrier formats successfully mapped per month. Target: 50 unique carriers in library at AppSumo launch; 150 within 6 months post-launch.

### Risk Mitigation

**If AI extraction accuracy is below 90% on common carriers:** Prioritize manual-mapping fallback UI as the primary path (not a fallback), with AI as an accelerator. Users who manually map still get time savings in subsequent months via stored mappings.

**If carrier statement format changes:** The product detects low-confidence extractions on previously-known carrier formats and prompts the user to confirm or re-map changed columns. Format change history is stored per carrier.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

- Each account is a fully isolated tenant. Account-level data partitioning at the database layer (not row-level-security on shared tables for sensitive commission data — separate logical partitions per account preferred).
- Tenant isolation verified via automated tests: no cross-tenant query paths in test suite.

### Authentication and Authorization

- Email/password authentication with email verification on signup.
- Password requirements: minimum 12 characters, common-password rejection.
- Session tokens expire after 30 days of inactivity; users re-authenticate.
- Password reset via time-limited email link (expires in 1 hour).
- Future (Phase 2): SSO/SAML for agency network deployments.

### Subscription and Billing

- Stripe integration for subscription management.
- Plans: Solo ($39/month, 1–5 producers), Standard ($69/month, 6–15 producers).
- AppSumo LTD: code redemption activates Solo plan permanently for 1 seat.
- Annual billing option (20% discount): $374/year Solo, $662/year Standard.
- Failed payment retry with 3-attempt grace period before account suspension (read-only access preserved for 14 days post-suspension).
- Billing portal for self-service plan changes, payment method updates, invoice downloads.

### Onboarding Flow

- Guided setup: Step 1 (upload first carrier statement) → Step 2 (import policy CSV or enter sample policy) → Step 3 (view first reconciliation result).
- Onboarding completion measured as: user has at least 1 carrier mapped and 1 reconciliation run completed.
- In-app tooltips on first run of each major feature; dismissible.
- Trial: 14-day free trial, no credit card required. Trial limits: up to 3 carrier statement uploads, unlimited runs on those carriers.

### SaaS Operational Requirements

- In-app changelog notification for new features.
- In-app support chat (Intercom or equivalent) for billing and technical issues.
- CSV export of all account data (statements, mappings, reconciliation history) available on request for data portability.
- Account deletion: all data purged within 30 days of deletion request (audit records retained per 7-year rule).

---

## Project Scoping & Phased Development

### MVP Strategy

**MVP Philosophy:** Problem-solving MVP — demonstrate measurable ROI in session 1. The minimum viable product is not the minimum feature set; it is the minimum capability to deliver a user's "aha!" moment (seeing a discrepancy they would have missed) and the minimum polish to convert that moment into a subscription.

**MVP team:** 1–2 full-stack engineers + Claude Code for implementation acceleration. 3–4 week build timeline.

**Core user journey supported by MVP:** Upload carrier statement → import policy records → auto-match → view discrepancies → export dispute report.

**Must-have capabilities for MVP:**
- PDF upload with AI OCR extraction
- CSV upload with AI column detection
- Manual carrier assignment and column mapping UI
- Policy record import via CSV
- Auto-matching by policy number (exact + fuzzy)
- Discrepancy detection and flagging (4 types)
- Discrepancy aging carry-forward month-over-month
- Reconciliation summary view
- PDF dispute report export
- QuickBooks-compatible CSV export
- Carrier format library (saved mappings)
- Reconciliation history (access past months)
- Email/password auth + 14-day trial
- Stripe billing (monthly + LTD code redemption)

**Deferred to Phase 2 (not in MVP):**
- Multi-user accounts and role-based access
- Producer commission portal
- Direct AMS API integrations
- Carrier statement auto-download
- Producer split tracking and payroll
- Mobile app
- Email notifications and automated workflows
- Compliance/regulatory filing features
- Advanced analytics dashboards

### Risk Mitigation

**Technical risk — PDF parsing accuracy:** Mitigated by building manual column mapping as a first-class UI, not a fallback. AI extraction accelerates setup; human correction ensures accuracy. Beta testing with top 10 carriers before AppSumo launch.

**Market risk — agencies want full AMS:** Mitigated by standalone positioning. The product explicitly does not replace the AMS. It requires only a CSV export from whatever AMS the agency uses. Early feedback will reveal if AMS integration is a hard blocker.

**Resource risk — smaller build than planned:** The matching engine (exact + fuzzy policy number matching) is the most critical and least droppable feature. If timeline pressure forces cuts, cut the QuickBooks export first (deliver generic CSV), then defer the aging carry-forward to v1.1, then simplify the dispute report to a formatted CSV instead of PDF.

---

## Functional Requirements

### Document Ingestion & Parsing

- FR1: Users can upload carrier commission statement files in PDF format via drag-and-drop or file picker.
- FR2: Users can upload carrier commission statement files in CSV or Excel format via drag-and-drop or file picker.
- FR3: The system extracts structured data (policy number, effective/expiration dates, premium amount, commission amount, commission rate, carrier reference ID) from uploaded PDF statements using AI-powered OCR.
- FR4: The system detects and displays a confidence score for each PDF extraction; low-confidence extractions (below 85%) are flagged for user review before processing.
- FR5: The system automatically identifies carrier name and statement period from PDF header content and filename when possible.
- FR6: The system detects column structure and proposes field mappings for uploaded CSV/Excel files using AI-assisted column detection.
- FR7: Users can manually assign or override carrier identification for any uploaded statement.
- FR8: Users can manually map CSV/Excel columns to canonical commission fields using a drag-and-drop column mapping UI.
- FR9: Users can review and correct individual extracted fields from PDF statements in a side-by-side view (raw extracted text vs. mapped data) before confirming.
- FR10: The system displays upload history per carrier per month, including processing status (success, low-confidence, failed) and extraction statistics.

### Carrier Format Library

- FR11: The system saves confirmed carrier column mappings (carrier name + field mapping configuration) for automatic reuse in subsequent months.
- FR12: Users can view, rename, and delete saved carrier format configurations in a carrier library management screen.
- FR13: When a previously mapped carrier is uploaded, the system applies the saved format configuration automatically and notifies the user.
- FR14: When a known carrier's extraction confidence drops below 85% (indicating a format change), the system alerts the user and prompts re-confirmation of column mappings.
- FR15: Users can manually trigger re-mapping for any carrier, creating a new format version while retaining historical format configurations.

### Policy Record Management

- FR16: Users can import policy records via CSV upload, mapping fields from their AMS export to canonical policy fields (policy number, carrier, effective date, premium, expected commission rate, producer name).
- FR17: The system displays a field mapping UI for policy record CSV imports, with auto-detection of common AMS export formats (HawkSoft, NowCerts, generic).
- FR18: Users can manually enter individual policy records when CSV import is not available.
- FR19: Users can view, search, and edit imported policy records within their account.
- FR20: Users can update expected commission rates for specific policies to reflect commission schedule changes.
- FR21: The system preserves historical policy records across reconciliation periods for ongoing matching and aging.

### Commission Matching Engine

- FR22: The system auto-matches carrier statement line items to policy records using exact policy number matching as the primary method.
- FR23: The system applies fuzzy matching for near-matches when exact match fails, handling policy number format variations (hyphen/no-hyphen, leading zeros, suffix differences) and insured name variations.
- FR24: The system assigns a match confidence score to each auto-matched pair and flags low-confidence matches (below 80%) for human review.
- FR25: Users can manually confirm, reject, or override any auto-match decision via the reconciliation review interface.
- FR26: All manual match overrides are logged with a required reason field, user identifier, and timestamp as an immutable audit trail entry.
- FR27: The system categorizes each unmatched or discrepant line item by discrepancy type: underpayment, missing payment, overpayment, or timing difference (within-period vs. cross-period).
- FR28: The system carries unresolved discrepancies forward to subsequent reconciliation periods, tracking the number of months each discrepancy has been outstanding (aging).

### Discrepancy Reporting & Summary

- FR29: Users can view a reconciliation summary dashboard showing: total commissions expected, total received, total discrepancies by type, and total dollar value of discrepancies.
- FR30: Users can view a line-item discrepancy report listing each flagged item with: policy number, carrier, effective date, expected amount, received amount, difference, discrepancy type, and months outstanding.
- FR31: Users can filter and sort the discrepancy report by carrier, discrepancy type, dollar amount, and aging duration.
- FR32: Users can mark individual discrepancies as "disputed" (submitted to carrier), "resolved" (carrier corrected), or "accepted" (agency accepts the difference), with notes.
- FR33: The system displays reconciliation history: users can access any past month's reconciliation results, summary, and exports.

### Export & Integration

- FR34: Users can export a carrier dispute report as a formatted PDF containing: agency information, carrier contact, list of discrepant policies with expected vs. received amounts, and total outstanding discrepancy — formatted for direct email attachment to a carrier.
- FR35: Users can export a reconciled commission statement as CSV containing all matched line items with match status and discrepancy flags.
- FR36: Users can export a QuickBooks-compatible CSV with commission income by carrier, formatted for direct import into QuickBooks (Chart of Accounts mapping configurable).
- FR37: All exports are named with agency name, carrier, and period (e.g., `riverside-insurance-nationwide-2026-04.pdf`) for organized storage.
- FR38: Users can access and re-download all previously generated exports from the reconciliation history.

### Account & Subscription Management

- FR39: Users can create an account with email and password; email verification required before first upload.
- FR40: Users can reset their password via a time-limited email link (expires 1 hour after generation).
- FR41: New accounts receive a 14-day free trial with access to up to 3 carrier statement uploads; full access during trial period.
- FR42: Users can subscribe to a monthly plan (Solo $39/month or Standard $69/month) or annual plan (20% discount) via Stripe.
- FR43: Users can redeem an AppSumo LTD code during account creation or from within account settings to activate the Solo plan permanently.
- FR44: Users can manage their subscription (upgrade, downgrade, cancel), update payment method, and download invoices from a self-service billing portal.
- FR45: Users can export all account data (carrier mappings, policy records, reconciliation history) as a ZIP archive for data portability.
- FR46: Users can delete their account; all personal and agency data is purged within 30 days (audit log entries retained per retention policy).

---

## Non-Functional Requirements

### Performance

- NFR1: PDF OCR extraction completes within 30 seconds per statement for documents up to 50 pages, as measured under normal load (fewer than 100 concurrent extractions).
- NFR2: The commission matching engine completes a full reconciliation run (up to 500 policy records matched against a 500-line carrier statement) within 15 seconds, as measured under normal load.
- NFR3: Reconciliation summary and discrepancy report views load within 3 seconds for 95th percentile of users under normal load, as measured by front-end performance monitoring.
- NFR4: CSV policy record imports of up to 5,000 rows complete within 10 seconds, as measured under normal load.
- NFR5: File uploads of up to 25 MB are accepted without timeout, as measured with standard residential internet connections (10 Mbps upload).

### Security

- NFR6: All data is encrypted at rest using AES-256 encryption, as enforced by cloud provider storage services.
- NFR7: All data in transit is encrypted using TLS 1.3 minimum, enforced at the load balancer / CDN layer.
- NFR8: Account passwords are stored using bcrypt with a minimum cost factor of 12; plaintext passwords are never logged or transmitted.
- NFR9: No cross-tenant data access is possible at any layer; verified by automated integration tests that assert tenant isolation at the API and database layers.
- NFR10: Uploaded statement files are stored in private cloud object storage (no public URL); access requires authenticated session token with matching account ownership.
- NFR11: Session tokens expire after 30 days of inactivity; all active sessions for an account are invalidated on password change or account deletion.
- NFR12: The application logs all authentication events (login success, login failure, password reset, session expiry) with timestamp and IP address; logs are retained for 90 days.
- NFR13: The application is protected against OWASP Top 10 vulnerabilities; SQL injection and XSS protections are verified in CI pipeline via automated security scanning.

### Reliability

- NFR14: The system maintains 99.5% uptime measured monthly, excluding scheduled maintenance windows communicated 48 hours in advance.
- NFR15: Reconciliation run saves are atomic: a run either completes fully (all match decisions and discrepancy flags persisted) or is rolled back with no partial state, as enforced by database transactions.
- NFR16: Uploaded files that fail processing (OCR error, unsupported format) leave no orphaned records; the system surfaces a clear error message and the upload slot is freed.
- NFR17: Audit log entries (match overrides, dispute status changes) are append-only and cannot be modified or deleted via any user-facing or admin interface.
- NFR18: Reconciliation history records and exported files are retained for 7 years from creation date, regardless of subscription status.

### Scalability

- NFR19: The system supports 500 concurrent active accounts in year 1 with no degradation in performance NFRs (NFR1–NFR5).
- NFR20: The PDF extraction pipeline scales horizontally; processing queue handles burst uploads (e.g., month-end reconciliation peak where 80% of users upload within a 3-day window) with no more than 60-second queue wait time at 500-account scale.
- NFR21: The database and file storage layers are provisioned to support 5,000 accounts without architectural changes (vertical/horizontal scaling within existing cloud services).

### Accessibility

- NFR22: The web application meets WCAG 2.1 Level AA compliance for core workflows (upload, reconciliation review, export), as measured by automated accessibility audit (axe-core) and manual keyboard navigation testing.
- NFR23: All interactive elements are keyboard navigable; no functionality requires mouse-only interaction.
- NFR24: Error messages and status notifications are announced to screen readers via appropriate ARIA live regions.

---

*PRD completed: 2026-05-14*
*Source documents: Shortlisted idea (85/105, Tier 1), product brief (completed 2026-05-14), market research (2026-05-14, 15 targeted searches)*
*Next step: create-architecture — Technical architecture decisions for the MVP*

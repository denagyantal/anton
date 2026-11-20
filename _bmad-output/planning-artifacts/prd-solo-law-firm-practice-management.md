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
  - ideas/shortlisted/solo-law-firm-practice-management.md
  - _bmad-output/planning-artifacts/market-research-solo-law-firm-practice-management.md
  - _bmad-output/planning-artifacts/brief-solo-law-firm-practice-management.md
workflowType: prd
project_name: solo-law-firm-practice-management
date: 2026-11-20
author: Root
classification:
  projectType: saas_b2b
  domain: legal_tech
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — SoloLaw

**Author:** Root
**Date:** 2026-11-20
**Version:** 1.0

---

## Executive Summary

**SoloLaw** is practice management software purpose-built for US solo attorneys and small firms (1–3 attorneys) that includes IOLTA-compliant trust accounting, time tracking, matter-based billing, a document vault, and a client portal in a single flat subscription at **$49/month**. No dual-module pricing, no 24-month contracts, no published pricing hidden behind sales calls.

The core problem is structural: 490,000 solo US attorneys are caught between two inadequate categories — affordable tools (under $50/month) that omit IOLTA trust accounting, and comprehensive tools ($89–$600+/month) priced for multi-attorney firms. IOLTA trust accounting is a bar ethics requirement in every US jurisdiction, not an optional feature. The leading cause of attorney discipline is trust accounting violations. Yet no full-featured practice management software occupies the sub-$50/month segment with IOLTA trust accounting included.

The timing is favorable. Clio's enterprise trajectory is driving it upmarket; its working tier for a solo is $89/month. Smokeball raised floor pricing 100% in 2025 to $149/month. LEAP's 24-month contract lock-in generates active migration searches. Meanwhile, 63% of solo attorneys — 309,000 people — have no practice management software at all, representing a greenfield market with zero switching cost.

SoloLaw's MVP delivers the minimum viable compliance set: IOLTA trust accounting at base price, time tracking to capture billable hours, matter-based billing to generate revenue, a document vault for file organization, and a client portal for payment collection and secure communication. The AppSumo LTD channel ($99 lifetime, unoccupied niche in legal tech) seeds a loyal user base and review corpus that feeds the $49/month recurring revenue engine.

**North Star:** Monthly Active Attorneys — attorneys who log time and generate at least one invoice per month.

### What Makes This Special

**IOLTA-first architecture.** Most practice management tools treat trust accounting as one feature among many, bolted on at a premium tier. SoloLaw's data model is built around trust accounting from day one: client trust ledger per matter, three-way reconciliation automation, trust account bank isolation. This is not a UI wrapper around general ledger logic — it is a trust-accounting-native data model that makes bar compliance the default state rather than the aspirational state.

**Transparent flat pricing at a structurally unoccupied price point.** The $49/month full-featured-with-IOLTA segment has no occupants. Clio's EasyStart ($49/month) lacks IOLTA trust accounting, conflict checking, document templates, and a client portal; the working tier is $89/month. CosmoLex has IOLTA but costs $89+/month. No vendor has claimed $49/month with the full feature set.

**Month-to-month by default.** This is an explicit anti-LEAP/anti-Smokeball positioning statement. Zero lock-in removes the primary adoption barrier for attorneys burned by contract horror stories. The product must earn renewal every month, which aligns product incentives with attorney success.

## Project Classification

- **Project Type:** SaaS B2B (web application, multi-tenant, attorney as primary user)
- **Domain:** Legal Technology / Legal Practice Management
- **Domain Complexity:** High — IOLTA trust accounting is regulated by 50 state bars with jurisdiction-specific variations; billing is subject to attorney ethics rules; client communications require confidentiality compliance
- **Project Context:** Greenfield — no existing codebase; 63% of target market has no prior practice management software (zero switching cost)

---

## Success Criteria

### User Success

A SoloLaw user is "successful" when they have completed the core compliance and revenue loop: IOLTA trust account created and reconciled, billable time logged, invoice generated, and payment collected through the client portal. This loop, completed in the first week, determines 90-day retention.

**User Success Events (measured in-product):**

| Event | Target | Timeframe |
|---|---|---|
| Trust account setup completion | 90% of signups create an IOLTA trust account | Within 7 days of signup |
| First invoice sent | 80% of active users generate and send an invoice | Within 30 days of signup |
| First three-way reconciliation completed | 70% of users complete monthly reconciliation | Within 45 days of first trust deposit |
| Client portal adoption | 60% of users invite at least one client to the portal | Within 60 days of signup |
| Net Promoter Score | ≥50 at 90-day mark | 90-day in-app NPS survey |

**User "Aha!" Moments:**
- First trust account created and first retainer recorded — compliance anxiety resolved
- First invoice paid through client portal without an email or phone call — workflow efficiency realized

### Business Success

**12-Month Targets:**

| Metric | Target | Rationale |
|---|---|---|
| Monthly Recurring Revenue | $11,000+ (225 paying attorneys × $49/month) | Minimum viable traction signal |
| AppSumo LTD buyers | 500–1,000 at $99 | Generates $15K–$30K net; seeds review base |
| Verified G2/Capterra reviews | 50+ averaging ≥4.5/5 before AppSumo launch | Social proof gate for legal professional buyers |
| Monthly churn rate | <3% | Trust accounting lock-in should drive low churn |
| Trial-to-paid conversion | ≥35% | Motivated buyers in a compliance-driven category |
| Median time to first invoice sent | <24 hours from signup | Self-serve onboarding quality signal |

**6-Month Milestones:**
- Month 3: 50 paid subscribers ($2,450 MRR), 10+ G2 reviews, trust accounting verified compliant in top 10 states by attorney population
- Month 6: 125 paid subscribers ($6,125 MRR), 30+ G2 reviews, AppSumo launch preparation underway
- Month 9: AppSumo launch — 500+ LTD buyers in first 30 days
- Month 12: $11K+ MRR, 50+ verified reviews, Phase 2 feature development active

### Technical Success

- Zero trust account balance calculation errors in production — trust accounting data must be mathematically correct at all times
- <1 billing-related bug per 100 invoices generated
- Trust reconciliation report output validated as compliant with top 10 US state bar requirements before GA launch
- 10 beta attorneys complete 2+ monthly three-way reconciliations without system errors before AppSumo launch

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

The MVP solves the two most urgent and legally consequential problems for a solo attorney: IOLTA trust accounting compliance and billing revenue capture. The 63% greenfield market (attorneys with no prior software) validates that a migration tool is not required for Phase 1 viability.

**MVP Feature Set:**
1. **IOLTA Trust Accounting** — IOLTA trust account creation, client trust ledger per matter, three-way reconciliation, bar-compliant reconciliation report export (PDF), overdraft prevention alert
2. **Time Tracking** — Start/stop timer, manual time entry, matter and billing code association, billable/non-billable flag, weekly/monthly time summary
3. **Matter-Based Billing** — Invoice generation from tracked time and expenses, invoice status lifecycle, online payment collection via Stripe, accounts receivable aging
4. **Document Vault** — Matter-based file storage, folder organization, version history, full-text search
5. **Client Portal** — Secure invoice viewing and payment, document download, secure matter messaging, client document upload
6. **Matter/Case Management** — Matter creation and status tracking, matter dashboard, contact association

**MVP Scope Constraints:**
- IOLTA compliance covers federal requirements plus top 10 states by attorney population (CA, NY, TX, FL, IL, PA, OH, GA, NC, NJ)
- Single attorney tier at $49/month; small firm tier (2–3 attorneys) at $79/month flat
- No native mobile app — mobile-responsive web is sufficient for Phase 1
- No data migration tool — greenfield market requires none; Phase 2 priority

**MVP Validation Gate (before AppSumo launch — all criteria required):**
1. 10 beta attorneys complete 2+ monthly three-way reconciliations without system errors
2. At least 1 reconciliation reviewed by a state bar compliance program and confirmed compliant
3. 90% of beta users complete the full billing round-trip within 48 hours of signup
4. 10+ verified G2/Capterra reviews averaging ≥4.5/5, with 5+ reviews mentioning trust accounting
5. Zero trust accounting balance calculation errors in beta production environment

### Growth Features — Phase 2 (Months 10–18)

| Feature | Rationale |
|---|---|
| Clio data import (JSON/CSV) | Removes primary switching barrier for 74K Clio solo users |
| Conflict of interest check | Bar requirement before accepting new clients; converts switcher segment |
| Court deadline tracking / statute of limitations calculator | High value; jurisdiction-specific complexity warrants Phase 2 scope |
| Native iOS/Android mobile app | #1 attorney feature request in legal tech surveys |
| QuickBooks export for operating account | CPA-requested; trust accounting replaces the QuickBooks use case |
| Electronic signature integration | Covered by DocuSign/Adobe Sign in MVP; native integration adds Phase 2 value |

### Vision — Phase 3 (Year 2+)

- Legal AI document drafting (demand letters, motion templates, client correspondence)
- Deadline intelligence with automatic statute of limitations flagging
- Billing intelligence (gap detection, underpriced matter flagging)
- Client intake automation (intake form → conflict check → engagement letter → trust deposit)
- Geographic expansion: Canada (similar IOLTA requirements), UK (SRA client account rules), Australia (Smokeball's market)
- Premium AI tier at $79/month solo ($109/month small firm)

---

## User Journeys

### Journey 1: Sarah — The Price-Conscious Solo (Primary User, Success Path)

Sarah is a 34-year-old solo family law attorney, 2 years independent. She tracks time in Google Sheets, invoices in Word, and maintains a Wells Fargo checking account for client funds because her CRM has no IOLTA module. She checked Clio last month and was quoted $89/month for the tier that actually works. She's not sure if her trust account reconciliation is bar-compliant.

**Opening Scene:** Sarah reads a r/LawFirm thread about Clio pricing and sees a comment about SoloLaw. She visits the site, sees $49/month with IOLTA trust accounting listed in the feature set, and starts a free trial. No sales call. No demo request. Just a signup form.

**Rising Action:** Sarah creates her first matter — Rodriguez custody case. She sets the billing rate at $275/hour. She enters her Wells Fargo IOLTA account information and records the $2,500 retainer she received last week. The system creates a client ledger entry for Rodriguez, and the trust account balance updates immediately. She sees her trust balance and Rodriguez's client ledger both showing $2,500 — they match. She starts the timer when she begins drafting the custody agreement.

**Climax:** End of month. Sarah clicks "Reconcile" for October. The system asks for her October bank statement balance from Wells Fargo. She enters $4,750 (two clients in trust). The system shows her trust register balance ($4,750), her bank statement balance ($4,750), and the sum of her client ledgers (Rodriguez: $1,750 remaining + Nguyen: $3,000 = $4,750). All three match. She downloads the reconciliation PDF. For the first time in two years, she has documented proof that her trust account is bar-compliant.

**Resolution:** Sarah sends her first SoloLaw invoice to Rodriguez — 4.5 hours at $275/hour plus $45 court filing fee — total $1,282.50. Rodriguez receives a secure payment link, pays by credit card within 24 hours. Sarah applies $1,282.50 from the Rodriguez trust account to the invoice. Trust ledger reflects the disbursement. AR is cleared. Sarah's law practice is now legally and financially organized for the first time.

**Journey Requirements:** Matter management, trust account creation, client trust ledger, trust deposit recording, three-way reconciliation, reconciliation PDF export, time tracking with timer, invoice generation, Stripe payment collection, trust-to-invoice payment application.

---

### Journey 2: Marcus — The LEAP Refugee (Primary User, Migration Path)

Marcus is a 48-year-old criminal defense attorney. He has been on LEAP for 3 years, paying $210/month. His contract expires in 4 months. He watched the price increase twice. He searched "LEAP alternative" and found SoloLaw on the second page of Google.

**Opening Scene:** Marcus visits SoloLaw's pricing page — the first legal tech pricing page he's seen that lists actual numbers. $49/month. Month-to-month. He reads the LEAP comparison copy: "No 24-month contracts. No cancellation fees. If you stop liking us, you stop paying." He signs up.

**Rising Action:** Marcus has 23 active matters in LEAP. He manually creates his top 5 matters in SoloLaw — the cases he needs to track right now. He creates his IOLTA trust account (he's been managing trust with LEAP's trust module) and enters the current trust balances from his last LEAP reconciliation report. He records each client's current trust balance as an opening entry. SoloLaw's client ledgers now mirror his current trust position.

**Climax:** Marcus has his first billable day entirely in SoloLaw. He uses the timer on two matters, manually enters back-time for a prison visit, and runs three invoices. Total billed: $4,200. He sends them from SoloLaw and three clients pay through the portal within 48 hours. His realization: he has just generated more revenue than a full week at LEAP, and his contract ends in 3 months.

**Resolution:** Marcus cancels his LEAP subscription 2 months early (paying the early termination fee is worth it at $49/month × difference). He completes his first trust reconciliation in SoloLaw — matching his bank statement with zero issues. He posts in r/LawFirm: "Switched from LEAP to SoloLaw last month — wish I'd done it 2 years ago."

**Journey Requirements:** Manual trust balance entry (opening balances), multi-matter management, timer and manual time entry, batch invoicing, client portal payments, trust reconciliation.

---

### Journey 3: Priya — The Greenfield Solo (Primary User, New Practice)

Priya is 29 and just passed the bar. She's starting an estate planning practice. She's never used practice management software. Her bar's "Starting Your Own Practice" guide mentions trust accounting compliance as a Day 1 requirement.

**Opening Scene:** Priya's law school's alumni network shares SoloLaw in their "new solos" Slack. She signs up with her first client lined up — a couple wanting wills and a trust. She has no prior software, no switching cost, no existing data.

**Rising Action:** SoloLaw's onboarding wizard asks: "Do you have an IOLTA trust account?" Priya doesn't yet. The UI links to her state bar's trust account requirements and explains what she needs to set up at her bank. Two days later, she's back with her new Chase IOLTA account number. She enters it in SoloLaw. She creates her first matter: Smith estate plan. She accepts a $1,500 flat-fee retainer, records the trust deposit, and sets the billing type to flat fee.

**Climax:** Priya completes the Smith estate plan after 12 hours of work. She creates an invoice for the flat $1,500 fee. SoloLaw shows her that the Smith trust ledger has $1,500 available. She clicks "Apply trust funds to invoice." The invoice is marked paid. The trust ledger shows the disbursement. Her bank statement will confirm the trust transfer. Priya's first month ends with a compliant trust reconciliation — her first ever.

**Resolution:** Priya becomes SoloLaw's ideal long-term customer. She has never known another system. Her trust accounting history is in SoloLaw from client #1. As her practice grows to 30 clients, switching costs become real. She upgrades to the small firm tier when she brings on a paralegal.

**Journey Requirements:** Onboarding wizard with IOLTA guidance, trust account creation with state-specific guidance, flat-fee billing, trust-to-invoice payment application, trust reconciliation.

---

### Journey 4: Lisa — The Paralegal (Secondary User, Daily Operations)

Lisa is a paralegal at a 2-attorney family law boutique. She handles day-to-day data entry — entering attorney time, preparing invoices for review, uploading court documents, responding to client document requests.

**Opening Scene:** Lisa logs in Monday morning. She has 3 attorney time entries to record from Friday — her boss left voice notes. She enters each time entry: 1.5 hours Rodriguez custody hearing prep, 2.0 hours Patel divorce filing, 0.75 hours Chen consultation. She sets each as billable, enters narrative descriptions, and saves.

**Rising Action:** Lisa generates the draft invoice for Rodriguez — it has accumulated $3,750 in unbilled time. She adds a $125 court filing fee. She previews the invoice and sends it to the attorney for review. The attorney approves from their phone. Lisa sends it to Rodriguez through the portal.

**Climax:** Rodriguez calls the office asking about a document they uploaded to the portal. Lisa navigates to the Rodriguez matter portal activity, finds the document, downloads it, and routes it to the attorney — all within SoloLaw. No email attachment chaos.

**Resolution:** Lisa's data entry work is reliable, fast, and doesn't require asking the attorney about system mechanics. The attorney's billing is accurate because Lisa's time entries are systematically recorded.

**Journey Requirements:** Paralegal role with time entry and invoice draft permissions, matter-scoped portal activity view, document routing, billing rate inheritance from matter settings.

---

### Journey 5: Rodriguez — The Client (Portal User)

Rosa Rodriguez is a client in a family law matter. She has limited technical sophistication but can use email and her bank's mobile app.

**Opening Scene:** Rosa receives an email from SoloLaw: "New invoice from Sarah Chen Law." She clicks the secure link in the email — no account creation required. She lands on a clean page showing her invoice: $1,282.50 for October legal services, itemized.

**Rising Action:** Rosa sees a "Pay Now" button. She enters her Visa debit card. The payment processes. She receives a receipt via email. She can also see the documents Sarah uploaded — the custody agreement draft and a letter from opposing counsel.

**Resolution:** Rosa does not need to mail a check, call the office, or ask about her balance. Her compliance and payment experience is smooth and professional. She uploads the opposing counsel's response letter via the portal so Sarah has it without an email attachment.

**Journey Requirements:** Secure invoice link (no login required), Stripe payment processing, invoice and document view, client document upload, secure message thread.

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---|---|
| Sarah — Compliance | Trust account management, three-way reconciliation, reconciliation PDF, timer, invoice generation, trust payment application |
| Marcus — Migration | Opening balance entry, multi-matter creation, batch invoicing, portal payments |
| Priya — Greenfield | Onboarding wizard, IOLTA state guidance, flat-fee billing, trust disbursement |
| Lisa — Paralegal | Role-based access, time entry delegation, invoice draft workflow, portal activity monitoring |
| Rosa — Client | Unauthenticated payment link, Stripe processing, document portal, secure messaging, client upload |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**IOLTA Trust Accounting (Critical — Non-Negotiable)**

IOLTA (Interest on Lawyer Trust Accounts) rules are set by each state's bar association, not federal law. Violations are the leading cause of attorney discipline in most US jurisdictions. The 2024 CTAPP audit pilot found 83% of California firms had non-compliant trust journals and 89% had non-compliant client ledgers.

Required compliance elements:
- **Three-way reconciliation:** Bank statement balance, trust register balance, and sum of individual client ledger balances must equal at the same point in time — mandatory monthly in all 50 states
- **Individual client ledger:** Every client/matter must have a separate sub-ledger showing deposits, disbursements, and running balance; commingling of client funds in a single ledger entry is an ethics violation
- **Overdraft prohibition:** Any transaction that would cause total trust account balance to fall below the sum of all client ledger balances is an ethics violation; the system must prevent this at the data layer, not just the UI layer
- **Disbursement documentation:** Every disbursement from trust must reference a specific client matter and have an authorized purpose
- **Reconciliation records:** Records must be retained for the period required by state bar (minimum 5 years in most states; 7 years in CA)

**State-Specific Variations (Phase 1 coverage — top 10 states by attorney population):**

| State | Key Variation |
|---|---|
| California (CA) | Detailed CTAPP audit requirements; specific reconciliation form format |
| New York (NY) | IOLA requirement; specific 3-way reconciliation timing |
| Texas (TX) | Texas Disciplinary Rules — specific disbursement documentation |
| Florida (FL) | Florida Rules of Professional Conduct Rule 5-1.1 |
| Illinois (IL) | ILTA program requirements |
| Pennsylvania (PA) | IOLTA Committee requirements |
| Ohio (OH) | OLAF program requirements |
| Georgia (GA) | Georgia Bar IOLTA program |
| North Carolina (NC) | NC State Bar specific forms |
| New Jersey (NJ) | IOLTA of NJ requirements |

**Attorney Billing Ethics (ABA Model Rules)**
- Fees charged to clients must be reasonable and not unconscionable (ABA Model Rule 1.5)
- Invoice narratives must accurately describe services rendered
- Trust account funds may not be withdrawn before they are earned (commingling prohibition)
- These requirements shape FR implementation: invoice narrative field cannot be blank, trust disbursements require matter reference, earned vs. unearned funds must be tracked

### Technical Constraints

**Data Isolation:** Trust accounting data must be isolated per firm at the database row level. Attorney A cannot access attorney B's trust data under any circumstances. Shared infrastructure must maintain complete logical separation.

**Audit Trail:** Every trust account transaction (deposit, disbursement, reconciliation) must be recorded with timestamp, user ID, and source (manual entry, payment, transfer). Audit log entries must be immutable — no delete or update operations on trust transaction records.

**Financial Precision:** Trust accounting calculations must use decimal arithmetic (not floating-point) to avoid rounding errors. All trust balances must maintain exact cent-level accuracy.

**Data Retention:** Trust accounting records must be retained for a minimum of 7 years (the most restrictive US state bar requirement). Deleted matters must archive trust data, not purge it.

### Integration Requirements

**Stripe (Payments):** Required for MVP. Handles PCI-DSS scope reduction via Stripe Elements (card data never touches SoloLaw servers). Must support: direct charges (operating account), separate charges (trust account via Stripe Connected Accounts or similar), and refunds.

**Bank Feed (Phase 2):** Direct bank statement import (CSV or OFX) to streamline monthly reconciliation. Not required for MVP — attorneys can enter bank statement balance manually during reconciliation.

**Email Delivery:** Transactional email for invoice delivery, payment receipts, portal notifications, and client portal access links. SendGrid or similar. Delivery reliability is critical — a failed invoice email means delayed payment.

### Risk Mitigations

**Trust accounting bug in live client funds (Critical Risk):**
- Staged rollout: Trust accounting in beta for 60 days before GA; require 2+ reconciliation cycles per beta user before GA clearance
- Legal tech lawyer review of trust accounting data model before beta launch
- Independent accounting review of three-way reconciliation calculation logic
- Automated test suite with 100% branch coverage for trust calculation code paths
- Clear product liability disclaimer; offer free data review if system error contributed to compliance issue

**Bar compliance variation (High Risk):**
- State-specific guidance content reviewed by attorneys licensed in each covered state
- Conservative approach: implement the most restrictive interpretation when states conflict
- Partner with one CLE/compliance program per covered state for endorsement before GA

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Innovation 1: Price Point + Feature Completeness (Market Structure Innovation)**

The legal practice management market has a U-shaped distribution: cheap but legally incomplete (under $50/month, no IOLTA trust accounting) versus comprehensive but expensive ($89–$600+/month). The $49/month full-featured-with-IOLTA segment is structurally unoccupied — not because the technology is impossible, but because incumbents have no incentive to cannibalize their higher-margin tiers.

This is a classic market structure innovation: not a new technology but a new price/feature combination enabled by the incumbents' own pricing decisions. Clio's move upmarket creates the opening. SoloLaw doesn't need to out-engineer Clio — it needs to occupy the segment Clio is abandoning.

**Innovation 2: IOLTA-First Data Architecture**

Existing tools model trust accounting as a ledger module sitting on top of a billing platform. This architecture produces three failure modes:
1. Trust accounting is an add-on feature (Clio Manage doesn't include it; CosmoLex charges for it)
2. The billing data model and trust data model don't share a client-matter entity, requiring manual synchronization
3. Three-way reconciliation is a report rather than a data invariant — the system doesn't enforce reconciliation compliance at the transaction level

SoloLaw's architectural innovation: model the client-matter trust ledger as the primary financial entity. Time entries, invoices, and payments are all foreign-keyed to the client-matter trust record, not the reverse. This makes three-way reconciliation a live data view rather than a periodic calculation — attorneys can see their reconciliation status in real time, not just at month end.

**Innovation 3: Transparent Pricing as Product Positioning**

LEAP, Smokeball, and Clio's upper tiers all require a sales call for pricing. This is not incidental — it is a deliberate strategy to prevent direct comparison. SoloLaw's fully published pricing page is itself a differentiator in legal tech. The pricing page is a feature.

### Market Context

No full-featured practice management tool on AppSumo exists in legal tech. The AppSumo legal software category is occupied by document automation tools and legal form generators — not full practice management. SoloLaw would be the first full-featured practice management tool to launch on AppSumo, with first-mover advantage in an audience of price-sensitive, self-serve B2B buyers.

### Validation Approach

The innovation hypotheses require specific validation before AppSumo launch:
1. **Price point validation:** 50 paying subscribers at $49/month within 3 months confirms the price/feature combination generates purchase intent
2. **IOLTA architecture validation:** 10 beta attorneys complete 2+ reconciliation cycles without errors confirms the data model is sound
3. **Transparent pricing conversion:** Direct signup rate from pricing page (target ≥35%) validates that published pricing converts rather than discourages

### Risk Mitigation

- IOLTA architecture complexity risk: mitigated by building trust accounting data model first, before billing features, and validating it with beta attorneys before adding billing layer
- Transparent pricing risk: mitigated by monitoring pricing page abandonment rate; if abandonment is high, test pricing framing variations before AppSumo launch
- AppSumo economics risk: AppSumo is brand seeding, not primary revenue; direct MRR is the core business model; AppSumo economics are acceptable even at 70% platform cut if the review and community benefit is realized

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

SoloLaw uses **firm-scoped tenancy**: all data is isolated at the firm level. A "firm" is the billing entity — a solo attorney or small firm (2–3 attorneys). All matters, trust accounts, documents, invoices, and client records belong to a firm and are inaccessible to other firms at the data layer.

Row-level security enforces firm isolation in the database; application-layer ownership checks are a secondary enforcement mechanism, not the primary.

**Firm Size Tiers:**
- Solo tier: 1 attorney seat + unlimited paralegal/staff seats; $49/month
- Small firm tier: 2–3 attorney seats + unlimited paralegal/staff seats; $79/month flat

### Role-Based Access Control

| Role | Access Scope |
|---|---|
| **Firm Administrator** (Attorney) | Full access to all firm data, settings, billing, trust accounts |
| **Attorney** | Full access to all matters; can view but not manage firm billing settings |
| **Paralegal / Legal Staff** | Time entry, invoice draft creation, document upload/download; cannot approve invoices, cannot access trust account settings; cannot view matter financial totals unless granted |
| **Client (Portal)** | Access scoped to their own matters only: invoices, shared documents, messaging |

Paralegals cannot initiate trust account transactions. Trust account operations (deposits, disbursements, reconciliation) are attorney-only actions.

### Technical Architecture Considerations

**Authentication:** Email/password with optional MFA (TOTP). Client portal access via secure tokenized email links — no account creation required for clients.

**Data Model Core Entities:**
- Firm → Matters → Trust Ledger Entries
- Firm → Trust Accounts (bank accounts)
- Matter → Time Entries → Invoices → Payments
- Matter → Documents → Versions
- Matter → Client Portal Access → Messages

**Trust Accounting Data Invariants (enforced at database layer):**
1. `trust_account.balance = SUM(trust_transactions.amount WHERE account_id = X)` — always current
2. `matter.trust_ledger_balance = SUM(trust_transactions.amount WHERE matter_id = X)` — always current
3. `trust_account.balance >= SUM(matter.trust_ledger_balance WHERE account_id = X)` — NEVER violated; this invariant must be enforced as a database constraint, not application logic

**Payment Flow:**
- Client pays invoice via Stripe Checkout embedded in client portal
- Operating payments: Stripe charges to firm's connected Stripe account
- Trust retainer receipts: Stripe charges to separate trust account destination (Stripe Connect or manual recording)
- SoloLaw does not hold funds; Stripe is the payment processor; PCI-DSS scope = SAQ A

### Implementation Considerations

**Tech Stack Guidance (not prescriptive — for architecture phase):**
- Trust calculation engine should use a decimal library (e.g., `decimal.js`, Python's `Decimal`) — floating-point arithmetic is prohibited for trust account calculations
- Reconciliation reports must be generated server-side as PDFs (not client-side rendered) to ensure consistent formatting for bar compliance submissions
- Document vault should use an object storage service with server-side encryption; documents must not be publicly accessible via guessable URLs

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Compliance-First MVP. The minimum viable product for SoloLaw is not the minimum feature set that makes an interesting demo — it is the minimum feature set that keeps an attorney bar-compliant. IOLTA trust accounting is in the MVP because without it, SoloLaw does not solve the attorney's most consequential problem.

The 63% greenfield market (no prior software) means the MVP does not need a data migration tool. Attorneys in this segment are starting from zero; they need a system that is correct, not a system that imports from somewhere else.

**Resource Requirements:** 1–2 full-stack engineers with legal tech domain understanding (or willingness to deeply learn IOLTA rules); legal tech consultant for trust accounting validation; 15–20 beta attorney testers.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo attorney trust accounting compliance loop
- Solo attorney billing and payment collection loop
- Client portal document and invoice access
- Paralegal time entry and invoice draft support

**Must-Have Capabilities:**
- Matter management (create, search, dashboard)
- IOLTA trust account setup and transaction recording
- Client trust ledger per matter
- Monthly three-way reconciliation with PDF export
- Trust account overdraft prevention (database-level constraint)
- Start/stop time tracking with matter association
- Manual time entry with billable flag and narrative
- Invoice generation from time entries and expenses
- Invoice status lifecycle (Draft → Sent → Viewed → Paid)
- Online payment collection via Stripe
- Trust-to-invoice payment application
- Document vault with folder organization and versioning
- Client portal with invoice payment, document view/download, secure messaging, client upload
- Role-based access (Attorney, Paralegal, Client)
- Firm and user account management

### Post-MVP Features

**Phase 2 (Post-MVP, Months 10–18):**
- Clio data import (removes #1 switching barrier for 74K Clio solo users)
- Conflict of interest check (bar requirement before accepting new clients)
- Court deadline tracking and statute of limitations calculator
- Native iOS/Android mobile app
- QuickBooks export for operating account
- Electronic signature integration (engagement letters, retainer agreements)
- Bank statement CSV/OFX import for reconciliation streamlining
- Task management and calendar integration

**Phase 3 (Year 2+):**
- Legal AI document drafting (demand letters, motion templates)
- Deadline intelligence (automatic SOL flagging from matter creation date)
- Billing intelligence (gap detection, underpriced matter flags)
- Client intake automation workflow
- Geographic expansion (Canada, UK, Australia)
- Anonymous benchmarking analytics across solo attorney cohort

### Risk Mitigation Strategy

**Technical Risks:** IOLTA trust accounting bug in live client funds is the existential technical risk. Mitigation: build trust accounting data model first; 60-day beta-only period for trust accounting; legal tech lawyer review; automated test suite with 100% branch coverage for all trust calculation paths; independent accounting review before GA.

**Market Risks:** Clio launching a true solo tier at $49/month with IOLTA is unlikely given their $5B valuation trajectory, but would be damaging. Mitigation: establish AppSumo and community presence before Clio can respond; first-mover community trust takes years to build; transparent pricing page becomes a Clio-comparison asset.

**Resource Risks:** Build complexity exceeds 14-week estimate. Mitigation: scope MVP tightly — document vault can defer to Week 10; trust accounting and billing are non-negotiable. Paralegal role can be deferred to Week 8 without impacting the solo attorney primary journey.

---

## Functional Requirements

### Matter Management

- FR1: Attorneys can create matters with client name, matter name, matter number, practice area, billing type (hourly, flat fee, contingency), and status (Active, On Hold, Closed)
- FR2: Attorneys can search and filter matters by client name, practice area, matter status, and date range
- FR3: Attorneys can view a matter dashboard showing unbilled time total, billing totals (invoiced/collected), current trust balance, and document count
- FR4: Attorneys can transition matter status and archive closed matters while retaining all associated data
- FR5: Attorneys can associate multiple contacts with a matter (client, opposing counsel, related parties) with role labels
- FR6: Attorneys can configure matter-level billing rates per timekeeper that override firm-default rates

### Time Tracking

- FR7: Attorneys and paralegals can start and stop a timer associated with a specific matter and billing code; only one timer can run at a time per user
- FR8: Attorneys and paralegals can manually enter time entries with date, duration, matter, billing code, billable/non-billable flag, and narrative description
- FR9: Attorneys can edit, split, and delete time entries that have not yet been included on a sent invoice
- FR10: Attorneys can view a weekly and monthly time summary across all matters showing total hours, billable hours, and unbilled hours
- FR11: Attorneys can set multiple billing rates per matter (different rates per timekeeper for small firm tier)

### IOLTA Trust Accounting

- FR12: Attorneys can create one or more IOLTA trust accounts with account name, bank name, and account number; each trust account is associated with the firm
- FR13: Attorneys can record trust deposits (retainer receipts) and disbursements linked to a specific client matter; each transaction requires matter reference and description
- FR14: The system maintains an individual client trust ledger per matter showing all deposits, disbursements, and a running balance in chronological order
- FR15: The system prevents any transaction that would cause the total trust account register balance to fall below the sum of all individual client ledger balances; this constraint is enforced at the data layer
- FR16: Attorneys can perform monthly three-way reconciliation by entering the bank statement ending balance; the system displays trust register balance, bank statement balance, and sum of client ledger balances and indicates whether all three agree
- FR17: Attorneys can generate a trust account reconciliation report in PDF format suitable for bar compliance documentation, including all three balance figures, reconciling items, and the reconciliation date
- FR18: Attorneys can configure retainer replenishment thresholds per client; the system alerts when a client's trust ledger balance falls below the threshold
- FR19: Attorneys can view a trust account ledger showing all transactions across all client matters in chronological order with running totals
- FR20: Attorneys can record trust interest allocation (for non-IOLTA interest-bearing accounts) and nominal fees permitted by state bar rules

### Invoicing & Billing

- FR21: Attorneys can generate invoices from unbilled time entries and expenses for a specific matter, with a preview of line items before sending
- FR22: Attorneys can add flat-fee line items, expense reimbursements, and credit adjustments to invoices
- FR23: Attorneys can customize invoice templates with firm name, logo, address, matter reference number, and payment due terms
- FR24: Attorneys can send invoices to clients via email with a secure payment link; email delivery status is confirmed and logged
- FR25: Invoices track status through Draft, Sent, Viewed, Partial, Paid, and Overdue states, with timestamps for each transition
- FR26: Attorneys can apply available client trust account funds as full or partial payment against an outstanding invoice; this application updates both the invoice status and the client trust ledger simultaneously
- FR27: Attorneys can view an accounts receivable aging report by matter showing totals in 0–30, 31–60, 61–90, and 90+ day buckets
- FR28: Attorneys can record write-offs and payment plan arrangements on outstanding invoices

### Online Payments

- FR29: Attorneys can enable Stripe-powered credit and debit card payment collection for invoices sent through the client portal
- FR30: Clients can pay invoices by credit/debit card through a secure payment link without creating an account; payment confirmation is immediate and logged
- FR31: Attorneys can configure per-matter whether client payments are deposited to the firm's operating account or to a designated trust account
- FR32: The system generates payment receipts and automatically updates invoice status and trust ledger upon payment confirmation

### Client Portal

- FR33: Clients can access their matter portal via a secure tokenized email link without creating a user account
- FR34: Clients can view all invoices sent to them, see itemized line items, and pay outstanding invoices via card
- FR35: Clients can download documents that the attorney has shared with them from the matter document vault
- FR36: Clients can send and receive secure messages with the attorney within a matter-scoped message thread
- FR37: Clients can upload documents to their matter portal; uploads are visible to the attorney and legal staff in the document vault
- FR38: Attorneys can control which documents and invoices are visible to each client in the portal at the individual file level

### Document Vault

- FR39: Attorneys and legal staff can upload documents (PDF, DOCX, images, email messages as EML/MSG) to a matter's document vault, organized into named folders
- FR40: The document vault retains prior versions when a document is replaced; prior versions are accessible with their upload timestamp
- FR41: Attorneys can search full-text across all documents in the firm's vault, scoped to the current matter or across all matters
- FR42: Attorneys can share individual documents to the client portal with a single action; shared status is visually indicated in the vault

### User & Firm Management

- FR43: Firm administrators can invite attorney and paralegal users by email; invitations expire after 7 days
- FR44: Firm administrators can assign roles (Attorney, Paralegal) with differentiated access to trust accounting (Attorney only), invoice approval (Attorney only), and time entry/document upload (all roles)
- FR45: Firm administrators can deactivate users while preserving all data associated with their matters, time entries, and trust activity
- FR46: Attorneys can configure firm-wide default billing rates per timekeeper with matter-level overrides

### Reporting

- FR47: Attorneys can generate a matter financial summary report showing total time logged, total billed, total collected, outstanding balance, and trust account balance for any matter or date range
- FR48: Attorneys can export time entry records to CSV for external review or CPA use

---

## Non-Functional Requirements

### Performance

- Invoice generation (single invoice from time entries) completes in under 3 seconds for 95th percentile
- Trust account three-way reconciliation report generates in under 5 seconds
- Page load times under 2 seconds for 95th percentile under normal load (defined as up to 500 concurrent active users)
- Document upload: files up to 25MB complete in under 10 seconds on a standard broadband connection (10 Mbps upload)
- Client portal invoice payment flow completes in under 5 seconds from card submission to confirmation display

### Security

- All data transmitted between client and server encrypted via TLS 1.3
- All data at rest encrypted with AES-256 (database and object storage)
- Trust account data row-level security: no cross-firm data access possible at the database query layer
- Trust account transaction records are immutable — no UPDATE or DELETE operations permitted; corrections are made via reversing entries with audit trail
- Complete audit log of all trust account operations (deposit, disbursement, reconciliation, user, timestamp, IP address); audit log is append-only
- PCI-DSS SAQ A compliance for Stripe-integrated payment collection (card data never touches SoloLaw servers)
- Multi-factor authentication (TOTP) available for all attorney accounts
- Client portal tokens expire after 72 hours; attorneys can revoke portal access per client at any time
- SOC 2 Type I certification targeted within 18 months of GA launch

### Reliability

- 99.9% uptime during business hours (Monday–Friday, 7am–9pm local attorney timezone), excluding scheduled maintenance windows announced 48 hours in advance
- Automated daily database backups with 30-day retention; backups tested monthly via restoration drill
- Zero trust account data loss tolerance: all trust transactions must be durable and consistent; synchronous write confirmation before displaying balance updates to users
- RTO (Recovery Time Objective) of 4 hours for full service restoration following infrastructure failure
- RPO (Recovery Point Objective) of 24 hours maximum data loss in catastrophic failure scenario

### Scalability

- System supports up to 10,000 attorney firm accounts without architectural changes within 24 months of GA launch
- Handles up to 500 concurrent active users with <10% performance degradation on core workflows (invoice generation, trust entry recording, document upload)
- Document vault supports up to 10,000 files per matter and 100,000 files per firm without search or retrieval degradation

### Accessibility

- WCAG 2.1 AA compliance for attorney-facing application interfaces
- Client portal invoice payment flow meets WCAG 2.1 AA for maximum client accessibility
- Keyboard navigation supported for all primary attorney workflows (time entry, invoice generation, trust recording)

### Integration

- Stripe payment integration must support Stripe Elements for PCI-DSS scope reduction; must handle webhook events for payment confirmation within 30 seconds of payment processing
- Email delivery via transactional email provider (SendGrid or equivalent); invoice delivery confirmation webhook must update invoice status to "Sent" within 60 seconds of dispatch
- PDF generation for reconciliation reports and invoices must render consistently across operating systems (server-side generation required; not client-side)

---

*PRD created: 2026-11-20 | Automated BMAD PRD workflow | Project: solo-law-firm-practice-management*
*Based on: product brief (2026-11-20) + market research (2026-11-19) + shortlisted idea (score: 85/105)*

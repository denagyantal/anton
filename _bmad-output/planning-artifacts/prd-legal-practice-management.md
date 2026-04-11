---
stepsCompleted: ["step-01-init.md", "step-02-discovery.md", "step-02b-vision.md", "step-02c-executive-summary.md", "step-03-success.md", "step-04-journeys.md", "step-05-domain.md", "step-06-innovation.md", "step-07-project-type.md", "step-08-scoping.md", "step-09-functional.md", "step-10-nonfunctional.md", "step-11-polish.md", "step-12-complete.md"]
inputDocuments:
  - ideas/shortlisted/legal-practice-management-solo-attorneys.md
  - _bmad-output/planning-artifacts/market-research-legal-practice-management.md
  - _bmad-output/planning-artifacts/brief-legal-practice-management.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: legaltech
  complexity: high
  projectContext: greenfield
research_topic: legal-practice-management
user_name: Root
date: 2026-04-11
---

# Product Requirements Document — SoloCounsel

**Author:** Root
**Date:** 2026-04-11
**Product:** SoloCounsel — Legal Practice Management for Solo Attorneys
**Version:** 1.0

---

## Executive Summary

SoloCounsel is a purpose-built, web-based legal practice management platform for solo and micro-firm attorneys (1–3 users). It delivers matter management, one-click time tracking, invoicing, a built-in IOLTA trust accounting engine, and a client portal at a flat $35/month — no per-user penalty, no premium-tier lockouts, no separate accounting software required.

The market opportunity is structural: 450,000 US solo attorneys represent 49% of all private-practice lawyers, yet every major legal practice management platform prices and designs for 5–20+ attorney firms. Clio, the category leader, charges $139/user/month for its only tier that includes trust accounting. The average solo attorney pays $150–214/month across 3–5 fragmented tools and loses 30–40% of billable time to administrative overhead. Per-user pricing means adding a paralegal doubles the bill. Payment settlement takes 7–10 days on most platforms, creating acute cash flow stress for practices with no firm-level working capital buffer.

SoloCounsel occupies a market position no competitor has claimed: a single, flat-rate SaaS that combines full IOLTA trust accounting compliance, flat-fee matter budget tracking (first-to-market), 2–3 day payment settlement, and mobile-first design — all under one subscription price that does not penalize growth or require upsells for essential compliance features.

**Business targets:** $40K–79K AppSumo LTD revenue at launch; $10K MRR within 6 months (286 customers); $35K MRR within 12 months (1,000 customers). US addressable market at $35/month penetration: ~$189M ARR.

### What Makes This Special

Four specific competitor gaps — confirmed across 8+ weeks of competitive analysis and community research — have never been filled simultaneously by any product at any price tier:

1. **Flat-rate pricing for small teams**: $35/month for up to 3 users. No competitor offers non-per-user pricing that includes trust accounting. Adding a paralegal is free.
2. **Built-in IOLTA trust accounting at an accessible price**: Full three-way monthly reconciliation is legally mandatory for every attorney managing client funds. Clio locks this at $139/user/month. CosmoLex at $89–129/user/month is still per-user. No affordable option exists today.
3. **Flat-fee matter budget tracking (first-to-market)**: No existing tool tracks time and expense against a fixed-fee matter budget, giving attorneys a live budget-vs-actual view. This is a critical need for PI, immigration, criminal defense, and estate planning attorneys.
4. **2–3 day payment settlement**: Industry standard is 7–10 days. For solo cash flow, this is a measurable, recurring pain point. PracticePanther achieves 2–3 days but lacks trust accounting and has a weak mobile app.

The core insight: solo attorneys are not small law firms — they are one-person professional services businesses who need compliance-grade accounting, not enterprise CRM and AI research tools. The right product is simpler, faster to set up, and cheaper than what the market currently offers.

## Project Classification

- **Project Type:** SaaS B2B (web application, subscription model)
- **Domain:** Legal technology — legal practice management
- **Domain Complexity:** High (regulated industry; IOLTA trust accounting compliance; state bar professional responsibility rules; financial data handling)
- **Project Context:** Greenfield — net-new product in an established but poorly-served market segment
- **Primary Market:** United States (solo and micro-firm attorneys, 1–3 users)
- **Revenue Model:** Flat monthly subscription ($35/month) + payment processing fees (2.5–3%) + LTD launch ($79/$149 AppSumo)

---

## Success Criteria

### User Success

Users succeed when SoloCounsel measurably solves the three core pain points: time leakage, IOLTA compliance anxiety, and cash flow delay.

**Time Recovery:**
- Solo attorney captures ≥90% of billable time via integrated timer and one-click tracking (vs. estimated 60–70% capture rate with fragmented tools)
- Time to first invoice from signup: <30 minutes
- Monthly time entry completion: ≥5 time entries per active matter per week (indicates consistent tracking habit)

**Trust Accounting Confidence:**
- First IOLTA reconciliation completed within 30 days of signup: ≥60% of users
- Monthly reconciliation completion rate: ≥80% (indicates trust accounting adoption, not avoidance)
- IOLTA-related support tickets: <2% of active users per month
- Zero data integrity errors in trust accounting ledgers (P0 quality gate — any trust accounting bug triggers immediate hotfix)

**Cash Flow Improvement:**
- Payment settlement time: 2–3 business days (measured from payment submission to bank deposit)
- Invoices paid through integrated payments: ≥70% (validates embedded payment UX)
- Days sales outstanding (DSO) improvement: target <14 days for SoloCounsel users vs. industry average of 30–60 days

**Flat-Fee Practice Value:**
- Users with flat-fee matters who view budget dashboards weekly: ≥50% (indicates flat-fee tracking adoption)
- Budget tracking triggers proactive client conversation (qualitative success via NPS survey responses)

### Business Success

| Timeframe | Metric | Target |
|-----------|--------|--------|
| Month 1 (AppSumo launch) | LTD sales | 500–1,000 units |
| Month 1 | LTD revenue | $40K–$79K |
| Month 3 | Paying MRR customers | 100 → $3,500 MRR |
| Month 6 | Paying MRR customers | 286 → $10,010 MRR |
| Month 12 | Paying MRR customers | 1,000 → $35,000 MRR |
| Month 12 | Reviews on G2/Capterra | 50+ at ≥4.5 stars |
| Month 6 | Payment processing adoption | ≥70% of invoices |
| Month 12 | Monthly churn | <2% |
| Month 6 | CAC (organic channels) | <$50 |
| Month 12 | LTV:CAC | >10:1 |
| Month 12 | NPS | ≥50 |

**Revenue streams (ranked by near-term priority):**
1. Monthly subscription: $35/month flat
2. Payment processing margin: 2.5–3% transaction fee
3. LTD launch: $79 (solo) / $149 (up to 3 users)
4. AI add-on (post-MVP): $15/month for advanced document drafting

### Technical Success

- **Trust accounting data integrity**: Zero data loss or corruption events in production. Reconciliation reports must match bank statements to the cent.
- **Uptime**: ≥99.5% monthly (4.4 hours maximum downtime/month). Downtime during business hours (8 AM–8 PM local time) weighted 3× in SLA.
- **Performance**: Core pages (matter list, timer, invoice) load in <2 seconds on a 10 Mbps connection. Timer start/stop latency <500ms.
- **Security**: SOC 2 Type I within 12 months of launch; SOC 2 Type II by Month 24. All data encrypted at rest (AES-256) and in transit (TLS 1.3). PCI DSS compliance for payment processing.
- **Data portability**: Users can export all their data (matters, time entries, invoices, trust ledger) in standard formats (CSV, PDF) at any time.

### Measurable Outcomes

- **Onboarding completion rate**: ≥70% of signups complete full setup within 48 hours (practice area → trust account → first matter → first timer)
- **Activation**: ≥60% of users send their first invoice within 7 days of signup
- **Trust accounting adoption gate (Product-Market Fit, Month 3)**: ≥70% of users have completed at least one IOLTA reconciliation — this proves trust accounting is being used, not just signed up for
- **Retention indicator**: Trust accounting data creates strong switching friction; users who complete ≥3 monthly reconciliations have projected churn <1%

---

## Product Scope

### MVP — Minimum Viable Product

The MVP solves the three highest-value problems: compliance (trust accounting), revenue leakage (time tracking), and pricing resentment (flat-rate). Everything beyond this is post-MVP.

**8-week build target. 6 capability areas:**

**1. Matter Management**
- Matters list with kanban and list view toggle
- Client and contact records with matter association
- Basic conflict check (name search across all active clients and matters)
- Document storage per matter (upload, organize, preview — PDF, DOCX, images)
- Matter status workflow: Open → Active → Closed

**2. Time Tracking and Billing**
- One-click timer per matter (start/stop from matter view and global timer)
- Manual time entry with matter assignment and billing rate
- Flat-fee matter budget: set a dollar budget at matter creation; track cumulative time + expense value against budget in real-time
- Expense tracking (mileage, filing fees, third-party costs) attached to matters
- Time and expense reports by matter, client, and date range

**3. Invoicing and Payments**
- One-click invoice generation from matter time entries and expenses
- Contingency-fee invoice support (no fixed billing amount required — PI attorney safe)
- Invoice PDF with firm branding (logo, firm address, matter reference)
- Online payment link via integrated payment processing (Stripe or equivalent; 2–3 day settlement)
- Invoice status: Draft → Sent → Viewed → Paid → Overdue
- Basic accounts receivable aging report

**4. IOLTA Trust Accounting**
- Trust account setup (bank name, account number, jurisdiction, account type)
- Client trust sub-ledger per matter (one sub-ledger per client per matter with trust balance)
- Trust deposit recording (retainer receipt, settlement funds, cost advance)
- Trust disbursement recording (attorney fee transfer from trust, client refund, cost payment)
- **Three-way monthly reconciliation wizard:**
  - Import bank statement (CSV)
  - Auto-match trust ledger transactions to bank transactions
  - Highlight unmatched items for manual review
  - Reconciliation report: bank balance = trust ledger total = sum of all client sub-ledger balances
  - Reconciliation lock (prevent modification of reconciled period)
  - Compliance report PDF download
- California CTAPP digital reporting baseline standard (most stringent US state; compliance here means compliance everywhere)
- Immutable audit trail for all trust transactions (no delete; corrections via reversing entries only)

**5. Client Portal**
- Client invitation by email
- Secure document sharing (attorney uploads → client downloads)
- Secure matter-scoped messaging
- Invoice viewing and online payment from portal
- Retainer agreement e-signature via DocuSign API integration

**6. Onboarding and Setup**
- Guided 30-minute setup wizard (practice area, jurisdiction(s), trust account, firm branding)
- Client and matter import via CSV (for Excel and Clio migrators)
- Google and Outlook calendar sync (read-only — surface court dates in matter view)
- In-app trust accounting setup walkthrough with jurisdiction-specific guidance

**Launch pricing:**
- Monthly: $35/month for up to 3 users (all features included)
- Annual: $299/year (~$25/month)
- LTD: $79 (1 user) / $149 (up to 3 users) — AppSumo launch channel

### Growth Features (Post-MVP)

Explicitly communicated to early adopters as the roadmap:

| Feature | Target |
|---------|--------|
| Court deadline calendar with jurisdiction-specific rules (statute of limitations, filing deadlines) | Month 3–4 |
| Client intake forms with website embed (lead capture → matter creation) | Month 3–4 |
| Conflict check upgrade: full historical search across all client/matter data including closed matters | Month 3–4 |
| Native mobile apps (iOS + Android) — genuinely mobile-first, not desktop-ported | Month 3–6 |
| Enhanced document management: version control, folder structure, full-text search | Month 4–6 |
| Advanced workflow automation: intake → retainer → matter → deadline in one flow | Month 4–6 |

### Vision (Future)

| Feature | Target |
|---------|--------|
| AI document drafting: demand letters, motions, retainer agreements, intake forms ($15/month add-on) | Month 6–9 |
| Smart billing: AI detects missed billing from calendar and email activity | Month 9–12 |
| AI-powered trust accounting anomaly detection | Month 9–12 |
| International expansion: Canada, UK, Australia with jurisdiction-specific trust accounting | Month 9–12 |
| Payment processing own rails (eliminate third-party fees; improve margins and settlement speed) | Month 12+ |
| Bar association white-label licensing | Year 2–3 |

---

## User Journeys

### Journey 1: Sarah — The High-Volume Solo Switching from Clio

**Opening Scene:** Sarah is a family law attorney in Austin, TX. She gets her Clio renewal email — another 15% price increase, bringing her to $139/month per user. Her paralegal's seat costs the same as hers. She types "Clio alternative for solo attorneys" into Google.

**Rising Action:** She lands on SoloCounsel's pricing page. The headline says "$35/month. Up to 3 users. Everything included." She's skeptical — she knows IOLTA trust accounting is what made her stay on Clio Complete this long, because no cheaper option has it. She reads the trust accounting feature page and sees three-way reconciliation is built in. She starts a free trial.

**Setup:** She completes the guided setup wizard in 22 minutes. She imports her client and matter data from a Clio CSV export. She connects her trust account. The onboarding wizard walks her through creating her first trust ledger entry — a $3,000 retainer deposit. She sees it appear immediately in her client's sub-ledger.

**Climax:** Her first monthly reconciliation in SoloCounsel. She imports her bank statement CSV. The auto-match engine identifies 47 of 50 transactions automatically. She reviews the 3 unmatched items, manually assigns them in under 2 minutes. The reconciliation report confirms: bank balance = trust ledger = sum of client sub-ledgers. She downloads the PDF. She's done in 18 minutes. Her previous reconciliation in Clio's manual process took 4–5 hours.

**Resolution:** Three months in. Sarah pays $35/month for herself and her paralegal — combined. She processes all client payments through SoloCounsel. Funds settle in 2 days instead of 8. She stopped thinking about whether her trust accounts are compliant. She's referred two attorney friends via a bar association listserv post.

**Journey Requirements Revealed:** CSV import from Clio, guided trust accounting setup, three-way reconciliation wizard, immutable audit trail, parallel user seats, payment processing with fast settlement, referral mechanism.

---

### Journey 2: Marcus — The New Solo Starting from Excel

**Opening Scene:** Marcus is a 31-year-old criminal defense attorney who left a mid-size firm 8 months ago. He tracks his clients in a spreadsheet. He invoices via email with a PDF he builds in Word. He has a separate bank account he calls his "trust account" but has never done a formal reconciliation. A bar colleague pulls him aside after a CLE and says: "Your trust account management will get you in trouble."

**Rising Action:** Marcus searches r/lawyers and finds a thread where a solo recommends SoloCounsel specifically for "starting compliant from day one without the Clio price." He signs up and watches the 3-minute onboarding video before starting the setup wizard.

**Setup:** Marcus has no data to import. He creates his firm profile in 15 minutes. He follows the in-app trust accounting walkthrough — the app explains what IOLTA is, why it matters, and walks him through his first trust deposit (a $1,500 criminal defense retainer) step by step. He creates his first matter card for the client. He starts a timer.

**Climax:** End of month. Marcus tries the reconciliation wizard for the first time. He imports his bank statement. The app shows him that 4 transactions match and 1 deposit is in his bank but not in the system. He adds it as a missed entry, sees the ledgers balance, generates his compliance report. He feels, for the first time, like he actually knows what's in his trust account.

**Resolution:** Six months in. Marcus has 23 active matters. He tracks every billable hour — something he never did with Excel. He sends invoices from within SoloCounsel in under 3 minutes. He's never had a trust accounting incident. He's building a legitimate practice foundation, not playing catch-up.

**Journey Requirements Revealed:** Zero-migration onboarding path, in-app IOLTA education and guided setup, step-by-step reconciliation for first-time users, matter creation from onboarding flow, global timer, fast invoice generation.

---

### Journey 3: Elena — The Frustrated Clio Power User (Flat-Fee Focus)

**Opening Scene:** Elena is a 52-year-old immigration attorney in Chicago. She handles flat-fee immigration matters exclusively — I-130 petitions at $2,500, naturalization at $1,800, work visas at $3,500. She's been on Clio Complete for 4 years and pays ~$200/month effectively (her seat + her paralegal's partial seat). She has no idea whether any of her flat-fee cases are profitable. She posts to an AILA bar association listserv: "Does any immigration attorney know if there's software that tracks how much time you've spent on a flat-fee case?"

**Rising Action:** Three attorneys respond recommending SoloCounsel, specifically mentioning the flat-fee matter budget feature. Elena tries the trial. She creates an I-130 matter, sets the fee at $2,500, and enters a budget of $2,500. She starts tracking time.

**Climax:** After two weeks, Elena opens the matter dashboard for an I-130 case she's been working for a client named Rodriguez. The dashboard shows: Budget $2,500 / Spent (time + expenses) $1,847 / Remaining $653. She realizes this particular case has consumed 73% of its budget but she's only 50% through the actual filing steps. She schedules a 15-minute call with the Rodriguez family to discuss scope and potentially adjust the engagement agreement. It's the first time in 4 years she's had this conversation proactively instead of reactively.

**Resolution:** Elena migrates to SoloCounsel. She pays $35/month instead of $200/month. For every immigration matter, she now knows at a glance whether it's profitable. She adjusts her flat fees upward for case types that were consistently over-budget. Her practice becomes more profitable without seeing more clients.

**Journey Requirements Revealed:** Flat-fee matter budget creation, real-time budget vs. actual tracking dashboard, expense capture against budget, matter-level profitability view, Clio data migration, per-matter budget reports.

---

### Journey 4: Paralegal (Secondary User) — Non-Attorney Access Without Cost Penalty

**Opening Scene:** David is the paralegal for a family law solo in Seattle. His attorney was paying $139/month for Clio Complete. When she switched to SoloCounsel's $35/month flat plan, David got full access at no additional cost. He handles client intake, scheduling, document preparation, and billing administration.

**Daily Flow:** David opens a new matter for an incoming divorce consultation. He creates the client record, notes the conflict check (clean), and uploads the intake questionnaire the client filled out. He drafts a retainer agreement using the firm's standard template and sends it to the client for e-signature through the client portal. When the client signs and pays the retainer, the funds automatically route to the trust ledger. David records the trust deposit.

**Resolution:** David can do his entire job inside SoloCounsel without needing the attorney's login. The attorney reviews trust entries once a week. The flat-rate plan means David's access is a feature, not an additional cost. The attorney hasn't had to worry about whether adding David was "worth it" since switching from Clio.

**Journey Requirements Revealed:** Role-based access (paralegal can manage matters, clients, documents, billing; attorney reviews trust accounting), client portal document delivery, e-signature workflow, trust deposit recording from non-attorney role, all-user flat pricing.

---

### Journey Requirements Summary

| Capability | Revealed By Journey |
|-----------|-------------------|
| CSV import from Clio and Excel | Sarah, Elena |
| Guided IOLTA trust accounting setup with education | Marcus |
| Three-way monthly reconciliation wizard | Sarah, Marcus |
| Flat-fee matter budget tracking (real-time) | Elena |
| Matter-level profitability dashboard | Elena |
| Multi-user flat pricing (no per-seat cost) | Sarah, David |
| Fast payment settlement (2–3 days) | Sarah |
| Client portal with e-signature | David |
| Role-based access (paralegal vs. attorney trust permissions) | David |
| Global one-click timer | Marcus, Sarah |
| First-time user trust accounting education | Marcus |
| In-app reconciliation guidance for experienced users | Sarah |

---

## Domain-Specific Requirements

### Compliance and Regulatory

**IOLTA (Interest on Lawyers' Trust Accounts) Rules:**

IOLTA compliance is the highest-priority domain requirement. Every attorney who holds client funds is subject to bar-mandated three-way monthly reconciliation. Violations result in bar discipline, potential suspension, and in egregious cases, disbarment.

- The system MUST enforce immutable trust accounting: no deletion of trust transactions; corrections only via reversing entries with audit trail
- The system MUST prevent commingling of trust and operating funds: trust account and operating account are separate ledgers with no automatic transfers
- The system MUST generate a three-way reconciliation report that can be produced for bar auditors: bank statement balance = trust ledger total = sum of all client sub-ledger balances
- The system MUST maintain a complete, timestamped audit trail for every trust transaction
- The system MUST support trust account setup per jurisdiction with state-specific account naming conventions
- California CTAPP (Client Trust Accounting Protection Program) digital reporting standard is the baseline — compliance with California's rules ensures compliance with all other US states
- The system MUST NOT allow funds to be recorded as disbursed from a client's sub-ledger if it would result in a negative balance for that client

**Professional Responsibility Rules:**

- Conflict check: the system must surface potential conflicts (same party name appearing across matters on opposite sides) before matter creation; attorney must acknowledge or override
- Client communications stored in the platform are potentially subject to attorney-client privilege considerations — data handling must not share or expose client-matter content across accounts

**Payment Processing Compliance:**

- LawPay model: trust account payments must follow special rules — funds must first land in trust, not operating account. Payment integration must route to the correct bank account based on invoice type (trust retainer vs. operating invoice)
- PCI DSS compliance is mandatory for any payment card processing

### Technical Constraints

**Data Isolation:**
- Strict multi-tenant data isolation: no cross-account data access is possible at the data layer
- Tenant data (matters, clients, trust ledger, documents) must be logically isolated at the database row level with tenant ID enforcement

**Audit and Immutability:**
- Trust transactions: append-only log; no UPDATE or DELETE on trust ledger records; corrections via explicit reversing entry
- Audit trail: all trust operations must log (user, timestamp, action, before/after values) with tamper-evident storage
- Reconciliation locks: once a reconciliation period is locked by the attorney, no trust transactions for that period can be modified or added without unlocking (which creates an audit entry)

**Document Storage:**
- Documents uploaded to matters must be stored with per-tenant encryption key isolation
- Document storage must support versioning for future (post-MVP: version control)
- Maximum file size: 50MB per file; 5GB total storage per account (post-MVP: expandable tiers)

**Financial Calculations:**
- All monetary values stored and calculated as integers in cents (not floating point) to prevent rounding errors in trust accounting
- All time values stored in seconds to prevent rounding errors in hourly billing calculations

### Integration Requirements

**Payment Processing:**
- Stripe (primary) or LawPay (secondary) integration required for MVP
- Must support ACH and credit/debit card payments
- Trust payment routing: payments designated as trust retainers must credit the trust bank account, not the operating account
- Settlement timeline: 2–3 business days target (Stripe Instant Payout or equivalent)

**E-Signature:**
- DocuSign API integration for MVP (retainer agreements, fee agreements)
- Documents must be stored in SoloCounsel after execution with audit trail of signers
- Post-MVP: native e-sign capability

**Calendar:**
- Google Calendar and Outlook Calendar read-only sync
- Court dates and appointments surface in matter view
- Write-back (create calendar events from matter deadlines) is post-MVP

**Data Import:**
- CSV import must support Clio export format (matters, clients, contacts, time entries)
- Generic CSV import for Excel migrators (configurable field mapping)
- PDF report export for all financial reports (trust ledger, reconciliation, AR aging)

### Risk Mitigations

**Risk 1: Trust accounting data loss or corruption (P0)**
- Mitigation: Event sourcing architecture for trust ledger (append-only event log as source of truth; materialized views for queries); daily encrypted backups to geographically separate storage; point-in-time recovery capability
- Testing: Trust accounting unit tests with 100% coverage on all ledger mutation paths; monthly disaster recovery drill

**Risk 2: Incorrect trust reconciliation math**
- Mitigation: Independent calculation path for reconciliation (calculate three-way balance via two independent SQL queries; compare results before presenting to user); test suite with real-world reconciliation scenarios
- Quality gate: No trust accounting changes ship without reconciliation calculation tests passing

**Risk 3: State-by-state rule variation**
- Mitigation: Baseline on California CTAPP (most stringent); document variation handling for states with unique rules (e.g., Washington's IOLTA reporting format); disclaim state-specific legal advice in UI

**Risk 4: Per-attorney price sensitivity leading to LTD churn**
- Mitigation: Trust accounting data lock-in (migration difficulty is real; communicate data export capability to reduce resistance to adoption); LTD users encouraged to adopt trust accounting in onboarding flow

---

## Innovation and Novel Patterns

### Detected Innovation Areas

**Innovation 1: Flat-Fee Matter Budget Tracking (First-to-Market)**

No legal practice management tool at any price tier tracks time entries and expenses against a fixed-fee matter budget. This is not a missed feature — it reflects that existing tools were designed for hourly billing law firms. For the 40%+ of solo attorneys who use flat-fee or hybrid billing (PI, immigration, criminal defense, estate planning), this is a fundamental workflow need: "Am I over-budget on this case, and should I talk to my client?"

Implementation approach: At matter creation, attorney sets an optional fee budget (dollar amount). Every time entry (at the hourly rate) and expense added to the matter is summed against the budget in real-time. The matter dashboard shows a budget gauge: budget / spent / remaining / percentage consumed. This is displayed prominently for flat-fee matters and hidden for hourly matters.

**Innovation 2: Trust Accounting at LTD Economics**

The combination of full three-way IOLTA reconciliation at $35/month flat (vs. $139/user/month locked competitor tier) is a pricing innovation made possible by a flat-rate model. The trust accounting feature becomes a moat: switching friction is severe once attorneys have 12+ months of reconciliation history in the system.

**Innovation 3: "Setup in 30 Minutes" for Paper/Excel Migrators**

30% of solo attorneys don't have a website. Many are managing client funds in a separate bank account with manual ledger spreadsheets. The innovation is designing the entire product and onboarding experience for this population first — not as an afterthought. No competitor targets the paper migrator as the primary persona; all assume prior digital tool experience.

### Market Context and Competitive Landscape

- **Clio** ($1.6B+ raised): Explicitly moving upmarket; adding AI research tools, enterprise CRM, marketing automation. Trust accounting at $139/user/month. Payment settlement 5–7 days. Reviews cite feature removals, price increases, declining support quality.
- **MyCase**: Universally cited for slow load times (100% of speed reviewers flag this). Requires separate LawPay + Woodpecker subscriptions despite "all-in-one" marketing.
- **PracticePanther**: Best payment settlement (2–3 days) but per-user pricing, weak mobile app.
- **CosmoLex**: Has integrated legal accounting but $89–129/user/month.
- **Budget tier (Lawcus, CaseFox, Time59)**: Billing-only or partial feature sets; no trust accounting; still require QuickBooks.
- **Market position unoccupied**: Flat-rate, all-inclusive (trust accounting + client portal + flat-fee budget tracking) at <$40/month for small teams.

### Validation Approach

- **Flat-fee budget tracking**: Beta test with 10 immigration and PI attorneys; measure whether budget view creates proactive client conversations (qualitative) and whether flat fees change post-adoption (leading indicator of profitability awareness)
- **Trust accounting adoption**: Track % of trial users who complete first trust deposit within 7 days; this indicates real intent to use trust accounting (not just sign up for it)
- **Setup time**: Screen-recorded onboarding sessions with 5 new users; target <30 minutes; iterate until achieved

### Risk Mitigation

- **Risk**: Flat-fee budget tracking is novel; users may not understand how to use it → Mitigation: guided setup for flat-fee matters with in-app explainer; budget gauge visible without requiring setup
- **Risk**: Trust accounting implementation error → Mitigation: legal review of IOLTA rules for 5 largest bar jurisdictions (CA, NY, TX, FL, IL) before launch; consult with one attorney-CPA for reconciliation logic review
- **Risk**: "30 minutes" claim falls short in testing → Mitigation: onboarding completion is tracked; iterate on wizard until ≥70% completion rate achieved before launch

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- **Tenant isolation**: Each law firm is a tenant. Data is isolated at the row level using `tenant_id` foreign key enforcement in every table. No cross-tenant queries are possible.
- **User roles within tenant**: Attorney (owner, trust accounting access), Paralegal (matter management, billing, no trust accounting write access), Client (portal only, read-only access to their own matter data)
- **Seat model**: Up to 3 internal users (attorney + up to 2 paralegal/associate seats) per flat-rate subscription. Client portal users are unlimited and do not count as seats.
- **Owner transfer**: Subscription ownership can be transferred to another attorney user (e.g., practice transition).

### Permissions Matrix

| Capability | Attorney | Paralegal | Client (Portal) |
|-----------|----------|-----------|-----------------|
| Create/edit matters | ✓ | ✓ | — |
| View matters | ✓ | ✓ | Own matter only |
| Track time | ✓ | ✓ | — |
| Create/send invoices | ✓ | ✓ | — |
| Pay invoices | — | — | ✓ |
| Trust deposit | ✓ | Record only | — |
| Trust disbursement | ✓ | — | — |
| Run reconciliation | ✓ | — | — |
| View trust ledger | ✓ | ✓ (read) | — |
| Upload documents | ✓ | ✓ | — |
| Download documents | ✓ | ✓ | Own docs only |
| E-sign documents | — | — | ✓ |
| View invoices | ✓ | ✓ | Own invoices only |
| Export data | ✓ | — | — |
| Manage settings | ✓ | — | — |
| Invite users | ✓ | — | ✓ (self-register via invite) |

### Subscription and Billing

- Stripe Billing for subscription management (create, upgrade, pause, cancel)
- LTD holders: perpetual access to MVP feature set; AI add-on and future premium tiers are paid upgrades
- Monthly and annual billing cycles; annual plan at ~29% discount ($299/year)
- Failed payment grace period: 7 days before account access restriction
- Data retention on cancellation: 90 days before deletion (attorney must export data)
- Downgrade path: Annual → Monthly only at renewal (no mid-year downgrade)

### Onboarding and Activation

- Guided setup wizard is blocking (must complete to access product) for first-time users
- "30-minute setup" promise: wizard must be completable in ≤30 minutes for a solo attorney with no prior digital tool experience
- Activation milestone: "first invoice sent" within 7 days tracked as primary activation metric
- Trust accounting activation milestone: "first trust deposit recorded" tracked as secondary activation metric
- In-app contextual guidance (tooltips, empty states with CTAs) throughout first 30 days

### Integration Architecture

- **Payment processing**: Stripe Connect (primary); LawPay API (secondary option, user choice)
- **E-signature**: DocuSign API (OAuth 2.0 integration); documents returned via webhook
- **Calendar sync**: Google Calendar API (OAuth 2.0) and Microsoft Graph API for Outlook
- **Email**: SMTP relay for invoice delivery and client portal invitations (SendGrid or Postmark)
- **Bank statement import**: CSV file upload (universal; no direct bank API integration in MVP)
- **Data export**: CSV export for all structured data; PDF export for reports

### Technical Architecture Considerations

- **Backend**: Node.js or Python (FastAPI); RESTful API; PostgreSQL primary database
- **Trust ledger**: Event-sourced append-only ledger table; materialized view for current balances; reconciliation runs against event log
- **Storage**: Object storage (S3-compatible) for documents; per-tenant encryption with KMS
- **Frontend**: React SPA with responsive design (mobile-first for core flows); PWA for mobile timer and matter access
- **Auth**: JWT-based session management; email/password + Google OAuth for signup
- **Hosting**: Cloud-hosted (AWS or equivalent); multi-region read replicas for latency; RDS with automated backups
- **Payments**: Stripe for processing; LawPay as alternative; trust routing handled server-side (client never chooses bank account; routing determined by invoice type)

---

## Project Scoping and Phased Development

### MVP Strategy and Philosophy

**MVP Approach:** Revenue-validating MVP. The MVP must be complete enough that solo attorneys can run their practice entirely within SoloCounsel — not just try it. If trust accounting is missing or broken, the MVP is not viable. If time tracking exists but doesn't connect to invoices, the MVP is not viable. The MVP must work end-to-end for a real practice.

**Resource Requirements:** 2 full-stack developers + 1 part-time designer; 8 weeks to MVP. Trust accounting requires the most careful engineering; allocate ≥40% of engineering time to trust accounting and payment routing logic.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Sarah (high-volume solo) switching from Clio — full data migration + trust accounting
- Marcus (new solo) starting from zero — guided onboarding + compliance from day one
- Elena (flat-fee practice) — flat-fee budget tracking as primary value proposition
- David (paralegal) — full role access under flat-rate plan

**Must-Have Capabilities:**
1. Matter management (kanban + list, client records, basic conflict check, document storage)
2. Time tracking (one-click timer, manual entry, flat-fee matter budget tracking, expense capture)
3. Invoicing (from time entries, contingency support, branding, AR report)
4. Payment processing (integrated, 2–3 day settlement, trust payment routing)
5. IOLTA trust accounting (full three-way reconciliation, immutable ledger, audit trail, compliance report)
6. Client portal (documents, messaging, invoice payment, e-signature via DocuSign)
7. Onboarding (guided wizard, CSV import, calendar sync, trust account walkthrough)
8. Multi-user access (up to 3 users, role-based permissions)
9. Subscription management (monthly/annual/LTD)

**Explicitly excluded from MVP (communicated as roadmap):**
- Court deadline calendar with jurisdiction-specific rules
- Native iOS/Android apps (responsive web PWA only)
- AI document drafting
- Advanced workflow automation
- Full-text document search
- Own payment rails

### Post-MVP Features

**Phase 2 (Months 3–6):**
- Court deadline calendar (jurisdiction rules for statute of limitations and filing deadlines)
- Client intake forms with website embed
- Full conflict check (historical search including closed matters)
- Native mobile apps (iOS + Android)
- Enhanced document management (version control, full-text search)
- Advanced workflow automation (intake → retainer → matter creation in one flow)

**Phase 3 (Months 6–18):**
- AI document drafting add-on ($15/month)
- Smart billing detection (AI identifies missed billing from email/calendar activity)
- International expansion (Canada first — similar legal system, no solo-focused market leader)
- Payment processing own rails (improve margins, faster settlement)
- Bar association white-label licensing

### Risk Mitigation Strategy

**Technical Risks:**
- Trust accounting correctness is the highest technical risk. Mitigation: legal accounting consultant review of reconciliation logic before launch; 100% test coverage on trust ledger mutation paths; shadow run reconciliation against manually calculated test cases for ≥10 simulated practice months
- Payment routing complexity (trust vs. operating). Mitigation: server-side routing logic only; client UI never selects bank account; routing determined by invoice metadata

**Market Risks:**
- Attorneys do not trust a new platform with compliance-critical accounting. Mitigation: lead with the trust accounting feature in all marketing; publish transparent security and data handling documentation; offer data export at any time; acquire one bar association newsletter endorsement before launch

**Resource Risks:**
- Trust accounting complexity causes MVP schedule overrun. Mitigation: build trust accounting first (Weeks 1–4); all other features build on top of a verified trust ledger. If timeline slips, defer e-signature and portal; core accounting + time tracking + invoicing is the minimum shippable core.

---

## Functional Requirements

### Matter Management

- **FR1**: Attorney can create a new matter with a client association, matter type, practice area, and optional flat-fee budget
- **FR2**: Attorney can view all matters in kanban view (by status) or list view with filtering and sorting
- **FR3**: Attorney and paralegal can perform a conflict check by searching for party names across all active and recent matters before creating a new matter
- **FR4**: Attorney and paralegal can upload, organize, and preview documents (PDF, DOCX, images) within a matter
- **FR5**: Attorney and paralegal can update matter status (Open → Active → Closed) with a status change timestamp
- **FR6**: Attorney and paralegal can associate multiple contacts (opposing party, co-counsel, court) with a matter
- **FR7**: Attorney can archive or reopen a closed matter
- **FR8**: Attorney can view a matter dashboard showing open tasks, recent time entries, trust balance, and budget status at a glance

### Time Tracking and Billing

- **FR9**: Attorney and paralegal can start and stop a one-click timer associated with a specific matter from any screen (global timer)
- **FR10**: Attorney and paralegal can create manual time entries for a matter with description, date, duration, and billing rate
- **FR11**: Attorney and paralegal can create expense entries for a matter with description, date, amount, and expense category
- **FR12**: Attorney can set a flat-fee budget for any matter; the system tracks cumulative time value + expenses against the budget in real-time
- **FR13**: Attorney can view a matter budget dashboard showing budget amount, amount consumed (time + expenses), remaining budget, and percentage consumed
- **FR14**: Attorney and paralegal can generate reports of time entries and expenses filtered by matter, client, date range, and billing status
- **FR15**: Attorney can edit or delete unbilled time entries; once an entry is included in a sent invoice it becomes read-only

### Invoicing and Payments

- **FR16**: Attorney and paralegal can generate an invoice from a matter's unbilled time entries and expenses in one action
- **FR17**: Attorney and paralegal can create a contingency-fee invoice with a custom total amount (no required line items from time tracking)
- **FR18**: Attorney and paralegal can customize invoice PDF with firm logo, address, and contact information
- **FR19**: Attorney can send an invoice to a client via email with a secure online payment link
- **FR20**: Client can pay an invoice via credit/debit card or ACH through the secure payment link without creating an account
- **FR21**: Attorney and paralegal can track invoice status (Draft, Sent, Viewed, Paid, Overdue) and view payment history
- **FR22**: Attorney and paralegal can view an accounts receivable aging report showing outstanding invoices by client and age bucket
- **FR23**: Attorney can configure payment processing to route trust retainer payments to the trust account and operating payments to the operating account automatically
- **FR24**: Attorney receives notification when an invoice is viewed and when it is paid
- **FR25**: Attorney can issue a credit note or write-off for an unpaid invoice

### Trust Accounting

- **FR26**: Attorney can set up one or more trust accounts with bank name, account number, jurisdiction, and account type
- **FR27**: Attorney can create a client trust sub-ledger linked to a specific client and matter
- **FR28**: Attorney and paralegal can record a trust deposit (retainer, settlement funds, cost advance) with source, amount, client, and matter
- **FR29**: Attorney can record a trust disbursement (fee transfer, client refund, cost payment) with payee, amount, client, and matter; system prevents disbursement that would create a negative client sub-ledger balance
- **FR30**: Attorney can run the monthly three-way reconciliation wizard by importing a bank statement CSV; the wizard auto-matches transactions and surfaces unmatched items for review
- **FR31**: Attorney can view the reconciliation result showing whether bank balance = trust ledger total = sum of client sub-ledger balances, and can lock the reconciliation period
- **FR32**: Attorney can download a reconciliation compliance report PDF suitable for bar audit review
- **FR33**: Attorney can view the complete trust transaction audit trail (all entries with user, timestamp, and action type) for any period
- **FR34**: Attorney and paralegal can view the current trust balance per client and per matter
- **FR35**: System prevents any modification or deletion of trust transactions; corrections are made only via reversing entries that appear in the audit trail

### Client Portal

- **FR36**: Attorney and paralegal can invite a client to the client portal via email
- **FR37**: Client can securely view and download documents shared by the attorney through the portal
- **FR38**: Client and attorney can exchange matter-scoped secure messages through the portal
- **FR39**: Client can view outstanding invoices and pay them through the portal without phone or email interaction
- **FR40**: Attorney and paralegal can upload a document to the portal for client e-signature; client receives email notification and signs via DocuSign integration
- **FR41**: Executed signed documents are stored automatically in the matter with e-signature audit record

### Onboarding and User Management

- **FR42**: New user can complete full practice setup (firm name, practice areas, jurisdiction, trust account, branding) via a guided wizard in ≤30 minutes
- **FR43**: Attorney can import clients and matters from a CSV file (including Clio export format) with field mapping guidance
- **FR44**: Attorney can connect a Google or Outlook calendar to surface court appointments in matter view
- **FR45**: Attorney can invite up to 2 additional users (paralegal or associate seats) within the flat-rate subscription
- **FR46**: Attorney can assign role-based permissions to each user (attorney trust access vs. paralegal operational access)
- **FR47**: Attorney can view account billing status, manage subscription plan, and export all firm data at any time

---

## Non-Functional Requirements

### Performance

- Matter list and dashboard pages load in <2 seconds for accounts with ≤500 active matters on a standard 10 Mbps connection
- Timer start/stop action completes and persists in <500ms (user should never see a delay when starting a timer during a client call)
- Invoice PDF generation completes in <5 seconds for invoices with ≤100 line items
- Reconciliation auto-match processing completes in <10 seconds for bank statements with ≤500 transactions
- File upload supports up to 50MB per file; upload progress indicator required for files >5MB

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3+)
- Trust transaction ledger stored in append-only table with database-level constraints preventing UPDATE/DELETE
- PCI DSS SAQ A-EP compliance for payment card handling (card data handled by Stripe; SoloCounsel never stores raw card data)
- SOC 2 Type I target within 12 months of GA launch; SOC 2 Type II by Month 24
- Multi-tenant isolation enforced at data layer (row-level security or equivalent); no cross-tenant data access possible via any API endpoint
- Authentication: email/password with minimum 12-character password requirement; Google OAuth as alternative; no SMS-based MFA (avoid complexity for MVP); TOTP MFA available as optional setting
- Session expiry: 24-hour idle session timeout; attorney can configure shorter timeout for compliance
- Admin access: production database access restricted to named engineers; access logged; no standing production database access for developers
- All attorney-client communications stored in the platform are treated as potentially privileged; SoloCounsel employees do not access matter content

### Scalability

- Architecture must support 10,000 concurrent active accounts without infrastructure changes (horizontal scaling of application layer)
- Payment processing integration must handle ≥100 simultaneous payment events without queuing delays
- Database schema and query patterns designed for ≥10M trust ledger entries per tenant without performance degradation
- Storage architecture supports per-tenant document storage that scales independently of compute

### Reliability

- Monthly uptime SLA: ≥99.5% (4.4 hours maximum unplanned downtime/month)
- Business-hours downtime weighted 3×: priority 1 incidents during 8 AM–8 PM local time have 30-minute response SLA
- Automated daily backups with 30-day retention; point-in-time recovery to any 5-minute interval in the last 7 days
- Trust accounting data: independent backup to geographically separate region within 15 minutes of write
- Payment processing: Stripe's managed reliability for payment events; SoloCounsel must handle Stripe webhook delivery failures gracefully (idempotent webhook processing)
- Zero data loss guarantee for trust accounting: if SoloCounsel experiences an outage, no committed trust transaction should be lost

### Accessibility

- WCAG 2.1 Level AA compliance for core user flows (matter creation, time tracking, invoicing)
- Timer and critical actions accessible via keyboard navigation (no mouse-only interactions)
- Color alone is not used to convey information (e.g., budget status gauge uses both color and text label)
- Client portal must be accessible for clients who may use screen readers or require text scaling

### Integration

- Payment processing (Stripe): failure handling with user-visible error messages; retry logic for failed webhook delivery; reconciliation webhook events persisted before processing
- DocuSign: signed document webhook must be handled idempotently; failure to deliver does not prevent the attorney from accessing the signed document manually
- Calendar sync: read-only; failure to sync does not affect core product functionality; sync errors surface as a non-blocking notification
- CSV import: validation errors surface per-row with specific error description; valid rows are importable even if some rows have errors
- All external API integrations must degrade gracefully: if Stripe, DocuSign, or calendar sync is unavailable, the core product (matter management, time tracking, invoicing, trust accounting) must continue to function

---

*PRD authored: 2026-04-11*
*Based on: SoloCounsel Product Brief (2026-04-11), Market Research (2026-04-10), Shortlisted Idea: Legal Practice Management for Solo Attorneys (Score: 89/105)*
*Next steps: Architecture → Epics & Stories → Sprint Planning → MVP Implementation*

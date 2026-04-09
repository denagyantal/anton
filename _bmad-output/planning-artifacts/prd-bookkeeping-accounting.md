---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/simple-bookkeeping-quickbooks-alternative.md
  - _bmad-output/planning-artifacts/market-research-bookkeeping-accounting.md
  - _bmad-output/planning-artifacts/brief-bookkeeping-accounting.md
workflowType: prd
research_type: prd
research_topic: bookkeeping-accounting
date: 2026-04-09
---

# Product Requirements Document — Simple Bookkeeping

**Author:** Root  
**Date:** 2026-04-09

---

## Executive Summary

Simple Bookkeeping is a dead-simple web-based bookkeeping tool targeting 1–10 person service businesses trapped in QuickBooks subscriptions ($38–$275/month, 52–83% cumulative price increases over 5 years). It delivers exactly three workflows — bank account categorization, invoice sending, and Schedule C-ready tax reports — with pricing certainty: $69 LTD or flat $19/month, no annual increases, no plan tiers.

**Target users:** Freelancers, solopreneurs, and small service businesses currently on QuickBooks Online or Wave Pro, paying for payroll/inventory/multi-currency features they don't use; and Wave refugees who lost free bank transaction import in June 2024.

**The problem:** QuickBooks controls 62%+ of the US SMB bookkeeping market and has raised prices 52–83% cumulatively over 5 years (documented case: $1,106 in 2021 → $4,149 in 2026, a 275% increase). Wave — the best-known free alternative — removed free bank import in June 2024. No credible simple-first alternative exists at flat pricing. 30% of small businesses use only spreadsheets; 21% use nothing — a greenfield capture opportunity on top of the displacement opportunity.

**Go-to-market:** AppSumo LTD launch at $69 (target: 2,000 purchases, 200+ reviews in 60 days) → G2 "High Performer" badge + SEO → subscription transition at $19/month from month 6 → $10K MRR by month 12 → acquisition candidate for FreshBooks, H&R Block, or Gusto by year 3.

### What Makes This Special

**Opinionated simplicity as product philosophy:** Three features. Done perfectly. Every feature request outside bank categorization, invoicing, and tax reports is deferred by default. This is not a limitation — it is the brand promise. Competitors (QuickBooks, Xero, FreshBooks, Wave) are all adding features to justify price increases. Simple Bookkeeping wins by subtracting.

**Pricing certainty as structural advantage:** $69 LTD or flat $19/month — no per-seat fees, no plan tiers, no annual increases. In a category defined by subscription abuse, incumbents cannot credibly copy this without destroying their revenue model.

**"Escaped QuickBooks" community identity:** The product is built around a switch narrative. Users who leave QuickBooks feel vindicated and become fierce advocates. G2 reviews write themselves ("finally escaped QuickBooks"). This creates an organic acquisition loop that cannot be purchased.

**Speed to first value:** Bank connected → transactions auto-categorized → dashboard visible in under 5 minutes. The product earns trust in the first session, not after a 2-hour onboarding.

## Project Classification

- **Project Type:** SaaS web application (B2C / SMB-focused)
- **Domain:** Fintech / SMB Accounting & Bookkeeping
- **Complexity:** Medium — handles financial data, bank connections (Plaid), payment processing (Stripe), tax calculation and reporting; subject to PCI-DSS SAQ A and financial data security requirements
- **Project Context:** Greenfield — new product with no existing codebase

---

## Success Criteria

### User Success

- **Time to First Value:** User connects bank account and sees auto-categorized transactions within 5 minutes of account creation. Target: <3 minutes by month 12.
- **Bank Connection Success Rate:** 95%+ of users who attempt a Plaid bank connection complete it successfully within first session.
- **Transaction Categorization Accuracy:** 75%+ of auto-categorized transactions confirmed without change at month 3; 88%+ by month 12.
- **Invoice Completion Rate:** 70%+ of users who start invoice creation send it (not just draft it).
- **Tax Report Utilization:** 40%+ of active users generate a P&L or Schedule C export during January–April in year 1.
- **Monthly Active Usage:** 55%+ of paying users log in at least once per month and complete at least one core action (bank sync review, invoice sent, or tax report generated).
- **NPS:** 35+ at month 3, 50+ at month 12 (measured via AppSumo follow-up at 30 days post-purchase).

### Business Success

- **AppSumo Launch (Month 1–3):** 2,000+ LTD purchases at $69; 200+ reviews; 4.2+ average rating; <15% refund rate within 60 days.
- **Subscription Transition (Month 6–12):** Close LTD window; achieve 500+ new monthly subscribers by month 12; <6% monthly churn.
- **Revenue:** $0 MRR in LTD phase (months 1–5); $3,000 MRR by month 6; $10,000 MRR by month 12.
- **Brand:** G2 "High Performer" badge in Accounting/Bookkeeping; 200+ G2 reviews by month 12; organic ranking for "QuickBooks alternative 2026" keyword cluster.
- **LTV:CAC:** >3:1 by month 6; >5:1 by month 12. CAC target <$40 in subscription phase.

### Technical Success

- Bank connection success rate ≥95% across major US financial institutions (top 500 via Plaid).
- Transaction sync completes within 30 seconds for up to 500 transactions.
- Invoice email delivery rate ≥98%; spam complaint rate <0.1%.
- Zero data loss events; 99.9% uptime during business hours.
- Tax report generation completes in <10 seconds for a full-year dataset.

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| AppSumo LTD purchases | 2,000 | — | — |
| AppSumo avg rating | 4.2+ | — | — |
| Active monthly users | 1,500 | 3,000 | 6,000 |
| MRR | $0 (LTD) | $3,000 | $10,000 |
| Bank connection success rate | 90%+ | 95%+ | 97%+ |
| Transaction categorization accuracy | 75%+ | 82%+ | 88%+ |
| Monthly churn (subscription) | — | <6% | <4% |
| G2 reviews | 25+ | 75+ | 200+ |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers exactly what is required for a frustrated QuickBooks subscriber or Wave refugee to switch and complete their monthly bookkeeping in 10 minutes:

1. **Bank Account Connection & Auto-Categorization** — Plaid integration (8,000+ US institutions), daily transaction import, AI-assisted categorization into 10 IRS tax categories, user review/confirm/change workflow, manual entry for cash and checks.
2. **Invoice Creation & Sending** — Invoice builder (client name/email, line items, due date, notes), email delivery with Stripe-powered payment link, invoice status tracking (draft/sent/viewed/paid/overdue), client payment landing page (card payments via Stripe).
3. **Tax Reports & P&L Export** — P&L by category (monthly/quarterly/annual/custom date range), Schedule C line item mapping, CSV export (for accountants) and PDF export (for records), summary income vs. expenses bar chart and category breakdown.
4. **Dashboard** — Total income and expenses (current month + YTD), outstanding invoice total and count, uncategorized transaction count with direct action link, 10 most recent transactions.

**MVP Go/No-Go:** Bank connection success rate ≥85% after 500 active users in beta. If not achieved, Plaid integration requires rework before AppSumo submission.

### Growth Features (Post-MVP, Months 4–9)

- Recurring invoices (auto-send on schedule)
- Receipt capture via mobile camera with OCR categorization
- Stripe ACH payments on invoices (in addition to card)
- QuickBooks-compatible CSV export format (for accountants who require QBO-format data)
- Basic mileage tracking at IRS standard rate
- Multiple bank account aggregated P&L view

### Vision (Months 9–18+)

**Phase 2 — Trades Vertical:** Job costing (track income and expenses per job), progress billing, crew time tracking, per-job P&L. Positioning: "Built for contractors, not accountants." Target: HVAC, plumbing, landscaping at $29–49/month.

**Phase 3 — Bookkeeping Firm Client Portal:** Branded client portal, monthly document collection automation, transaction question queue (flag uncategorized items for client answer), branded P&L delivery. Target: bookkeeping firms at $49/month flat vs. $50–100/user/month for TaxDome/Canopy.

---

## User Journeys

### Journey 1: Sarah — Frustrated QBO Subscriber (Primary, Success Path)

**Persona:** Sarah, 34, freelance marketing consultant, $95K/year, sole proprietor. QuickBooks Online Simple Start at $38/month. Sees a CPA once a year. Opens QuickBooks once a month for 45 minutes to do what should take 10.

**Opening Scene:** Sarah receives her QBO renewal notification — $456 this year, up from $420. She opens the email, feels her stomach drop, and searches "QuickBooks alternative 2026." She lands on a comparison article featuring Simple Bookkeeping. The headline: "Escape QuickBooks. $69 once." She clicks.

**Rising Action:** She reads the feature list — bank categorization, invoicing, tax reports. "That's literally all I need." She reads 50+ AppSumo reviews, including three titled "Finally escaped QuickBooks." She buys the $69 LTD in under 2 minutes.

**Onboarding (target: <5 minutes):**
1. Creates account with email and password.
2. Prompted to connect bank — clicks "Connect Bank," Plaid modal opens, selects her bank, authenticates in 3 clicks.
3. Dashboard loads: 3 months of transactions appear, 80%+ already categorized.
4. Reviews 15 uncategorized items, confirms or changes each — done in under 5 minutes.
5. Creates one invoice to a current client: fills client name, adds one line item, hits Send.
6. Sees the invoice in the "Outstanding" list with status "Sent."

**Climax:** "That was it. That's all I needed." She closes the laptop. The entire first session took 12 minutes.

**Resolution:** Sarah logs in once a month — 10 minutes to review auto-categorized transactions. In January, she generates a Schedule C P&L, exports the PDF, emails it to her CPA. She posts in r/freelance: "Finally found a QuickBooks replacement that doesn't feel like it was designed by a committee."

**Journey Requirements Revealed:** Account creation, Plaid bank connection flow, transaction auto-categorization, transaction review/confirm UX, invoice builder, invoice email delivery, outstanding invoices dashboard widget, P&L report generation, PDF export, AppSumo license key redemption.

---

### Journey 2: Daniel — Wave Refugee (Secondary, Trigger: Lost Free Bank Import)

**Persona:** Daniel, 28, independent photographer, $60K/year. Wave user for 3 years.

**Opening Scene:** Daniel logs into Wave in November 2024 and discovers his bank transactions stopped auto-importing 2 months ago — 200 transactions to manually enter. Wave support confirms the free bank sync was removed; it now costs $16/month. He searches "Wave alternative free bank import."

**Rising Action:** He finds Simple Bookkeeping on AppSumo. The listing says: "Auto-import from 8,000+ banks. One-time price." He reads reviews — "former Wave user, very happy" appears three times. He buys.

**Onboarding:** Daniel connects his bank. Three months of transactions auto-import. He does not enter a single transaction manually. He creates his first invoice in 4 minutes.

**Climax:** "I've been manually entering transactions for two months because Wave got greedy. This is what Wave used to be."

**Resolution:** Daniel writes an AppSumo review: "Switched from Wave after they killed free bank sync. Does everything I need. Simple, no gotchas." He recommends it in a photography business Facebook group.

**Journey Requirements Revealed:** Auto bank sync as the primary value-delivery moment (not an optional feature), simple invoice creation parity with Wave's pre-2024 feature set.

---

### Journey 3: Marcus — Contractor/Trades Owner (Partial MVP, Full v2)

**Persona:** Marcus, 42, HVAC business owner, 3 employees. QuickBooks Online Plus at $115/month plus a field service tool at $70/month = $2,220/year. His bookkeeper just quit.

**Opening Scene:** Annual renewal invoice arrives. $2,220 for two tools that barely communicate. He searches r/smallbusiness for alternatives and finds Simple Bookkeeping. He signs up.

**MVP Journey:** Marcus connects his business checking account. He creates invoices for completed HVAC jobs — faster than any tool he's used. He categorizes material costs to "Cost of Goods Sold." His CPA gets a clean P&L at tax time.

**Climax (MVP):** Marcus can see his income and expenses clearly without a bookkeeper. He sends invoices directly from his laptop. He's saving $170/month.

**Climax (v2 job costing):** Marcus opens a job record and sees: materials cost $450, labor $380, total billed $1,200 — gross margin 31%. He knows instantly which job types are profitable.

**Journey Requirements Revealed (MVP):** Business bank account connection, income/expense categorization, invoice creation for service jobs, basic P&L export.  
**Journey Requirements Revealed (v2):** Job-based transaction tagging, per-job P&L, crew time tracking — out of MVP scope.

---

### Journey 4: Ops Admin — Internal Bank Sync Monitoring (Support Path)

**Persona:** Internal operations team member, monitoring bank sync health and handling support escalations.

**Opening Scene:** Ops team member receives a Slack alert: 15% of Plaid connections failed in the last hour.

**Rising Action:** They open the internal admin dashboard, filter to "Bank Sync Failures" in the last 24 hours, see a spike at 9:15 AM. They identify the failing institution — a regional bank under scheduled maintenance. They check Plaid's status page for confirmation.

**Resolution:** They trigger a sync retry for all affected user accounts, post a status update to the customer-facing status page, and resolve 12 inbound support tickets with the explanation and a 1-click sync retry link.

**Journey Requirements Revealed:** Internal admin panel with bank sync health metrics (success rate, failed syncs by institution, latency), user account lookup for support context, manual sync retry capability.

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---|---|
| Sarah (QBO refugee) | Account creation, Plaid bank connection, transaction auto-categorization, transaction review UX, invoice builder, invoice email, P&L report, PDF/CSV export, AppSumo license redemption |
| Daniel (Wave refugee) | Auto bank sync as primary value moment, invoice creation parity |
| Marcus (contractor, MVP) | Business bank account connection, service job invoicing, basic P&L |
| Ops Admin | Admin dashboard, bank sync monitoring, user lookup, manual retry |

---

## Domain-Specific Requirements

### Compliance & Regulatory

- **Financial Data Privacy:** User financial data (transactions, account numbers, balances) must not be shared with third parties for any purpose other than displaying to the authenticated account holder. Plaid access tokens stored encrypted; raw bank credentials never stored.
- **Payment Processing (PCI-DSS):** Card payment processing handled entirely by Stripe. Simple Bookkeeping must not handle, store, or log raw card data. PCI-DSS SAQ A compliance applies (redirect/iFrame model; no card data touches Simple Bookkeeping servers).
- **Tax Report Disclaimer:** All P&L reports and Schedule C exports must display a visible disclaimer: *"This report is for informational purposes only. Consult a qualified tax professional before filing."* Simple Bookkeeping does not file taxes on behalf of users.
- **Data Retention:** Transaction history retained for a minimum of 7 years to meet IRS record-keeping guidance. Users can export all data before account deletion.
- **GDPR/CCPA:** Users can request full data export (transactions, invoices, reports) in CSV format. Users can request account deletion; PII removed within 30 days; transaction records anonymized (not deleted) to preserve accounting integrity. Privacy policy and cookie consent required.

### Technical Constraints

- **Bank Integration:** Plaid is the primary bank connection provider. Finicity or MX evaluated as fallback if Plaid per-connection cost exceeds 3x budget at scale. No direct storage of bank credentials; authentication delegated entirely to Plaid's OAuth/credential flow.
- **Encryption:** All financial data encrypted at rest (AES-256) and in transit (TLS 1.2+). Plaid access tokens encrypted using application-level key management, never stored in plaintext.
- **Authentication:** Email/password + optional Google OAuth at launch. MFA optional for all users; required for users with >$50K aggregate connected account balance (anti-fraud threshold).
- **Audit Logs:** All user data mutations (transaction category changes, invoice edits, report exports, bank connection changes) logged with timestamp, user ID, and action type. Audit log retained for 90 days.
- **Session Security:** Sessions expire after 30 minutes of inactivity. Concurrent session limit: 3 active sessions per user. All sessions invalidated on password change.

### Integration Requirements

- **Plaid:** Bank account connection, balance retrieval, transaction history (90-day initial pull, daily incremental), institution search, webhook for connection status changes.
- **Stripe:** Invoice payment links (card + ACH), Stripe Connect for direct payout to user's bank, webhook handling for payment status updates, subscription billing for $19/month plan.
- **Email Delivery:** Transactional email via SendGrid or Postmark for invoice delivery and system notifications. Delivery rate ≥98%; spam complaint rate <0.1%.

### Risk Mitigations

- **Plaid cost escalation:** Budget at 3x current per-connection pricing; Finicity/MX evaluated as alternatives before AppSumo launch at scale.
- **Tax report accuracy liability:** Export-only model (no direct filing) plus mandatory disclaimer eliminates direct tax liability. Beta through full tax season (January–April) before public AppSumo launch.
- **CPA QBO ecosystem lock-in:** Build QBO-compatible CSV export so accountants who require QBO-format data can receive exported reports without disruption.
- **Bank sync failures:** Retry queue with exponential backoff (3 retries over 2 hours); user notification on persistent failure; manual transaction entry as a first-class (not fallback) feature for all workflows.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Pricing certainty as product architecture:** Publicly committing to never raise prices is not just a marketing claim — it is an architectural constraint. The product must achieve profitability at $19/month with zero per-seat fees, forcing efficiency decisions: no per-user external service licensing, aggressive bundling of Plaid connection costs into flat subscription, lean infrastructure from day one.

**Opinionated scope as competitive moat:** The "three features only" constraint is novel in a category where every competitor adds features to justify annual price increases. The innovation is building a product that refuses to grow beyond its core problem. This requires a formal scope governance process: every proposed feature must pass the test — *"Does this make bank categorization, invoicing, or tax reports measurably better for a 1–10 person service business?"* If not, it is deferred.

**"Escaped QuickBooks" identity as growth mechanic:** The product deliberately generates a specific type of user advocacy — the escape narrative. By naming the enemy and positioning Simple Bookkeeping as the exit, the product creates a ready-made review template that users reproduce organically at zero incremental CAC. This is a growth mechanic encoded into the product positioning.

### Validation Approach

- **Pricing:** AppSumo LTD data validates willingness to pay one-time at $69. If purchases fall below 1,500 in the first 30 days, test $49 before subscription transition.
- **Three-feature commitment:** Monitor feature requests in first 60 days. If >40% of requests cluster around a single feature outside the three core workflows, evaluate promoting it to core.
- **Escape narrative:** Track AppSumo and G2 review text for "escaped," "finally," "switched from" language. Target: 30%+ of reviews containing this pattern.

### Risk Mitigation

- If bank connection success rate <85% in beta, delay AppSumo submission and resolve integration issues. Bank sync is the product — a broken sync is a broken product.
- If QuickBooks reverses price increases or Wave restores free bank import, shift primary narrative to simplicity and ease-of-use rather than price comparison alone.

---

## SaaS Web Application Specific Requirements

### Project-Type Overview

Simple Bookkeeping is a multi-tenant SaaS web application with B2C/SMB customer acquisition, AppSumo LTD distribution, and Stripe subscription billing. Each user account is data-isolated (single-tenant data model within a shared multi-tenant architecture). MVP is single-user workspaces only — no team or organization accounts.

### Technical Architecture Considerations

- **Multi-tenancy:** Row-level tenant isolation (user_id on all financial data tables). No cross-tenant data access acceptable given financial data sensitivity.
- **Authentication:** Email/password + optional Google OAuth. JWTs with 30-minute expiry plus refresh tokens. Password reset via time-limited email link (60-minute window).
- **Billing:** Stripe for subscription management ($19/month). AppSumo license key validation via AppSumo API at account creation. LTD users get permanent access to all features available at launch date.
- **API architecture:** REST API backend, React/Next.js web frontend. No public API in MVP — all endpoints are private, authenticated user actions.
- **Deployment:** Cloud-hosted (AWS or GCP), containerized, auto-scaling to handle tax season traffic spikes (January–April = 3–5x normal load).

### Tenant Model

- Single-user workspace in MVP (1 user = 1 business).
- Each user's data (transactions, invoices, bank connections, reports) is fully isolated.
- Roadmap: multi-user workspace for bookkeeping firms in Phase 3.

### RBAC Matrix (MVP)

| Role | Capabilities |
|---|---|
| **Account Owner (default)** | Full access to all data, settings, billing, and integrations for their workspace |
| **Internal Admin** | Read-only access to all tenant accounts for support; bank sync health dashboard; manual sync retry |

### Implementation Considerations

- **Plaid tokens:** Store encrypted Plaid access tokens per connected account using application-level KMS. Refresh tokens automatically; never expose raw tokens to the frontend.
- **Transaction sync:** Background job queue (e.g., BullMQ) for daily incremental syncs. Retry with exponential backoff on failure. Alert ops channel if institution-level failure rate exceeds 5%.
- **Invoice email:** Deliver via transactional email provider (SendGrid/Postmark). Track open/click events to surface "viewed" invoice status to sender.
- **PDF generation:** Server-side on-demand PDF generation (Puppeteer or WeasyPrint). Not pre-generated — triggered by user export action.
- **AppSumo integration:** Validate license keys via AppSumo Marketplace API at account creation. Store license status and purchase date in user record. One license = one user account.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — validate that the three core workflows (bank sync, invoicing, tax reports) solve the problem well enough for frustrated QBO subscribers to switch and not look back. No feature parity with QuickBooks; nail the 20% of features that 80% of users actually use.

**Resource Requirements:** 1 full-stack developer + 1 product designer, 10–12 weeks. Core stack: React/Next.js frontend, Node.js or Python API, PostgreSQL, Redis (job queue), Plaid API, Stripe API, SendGrid/Postmark.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:** Sarah (QBO refugee) and Daniel (Wave refugee) — both fully served by MVP.

**Must-Have Capabilities:**
1. User account creation and authentication
2. AppSumo license key validation and redemption
3. Stripe subscription billing ($19/month)
4. Plaid bank account connection (US, 8,000+ institutions)
5. 90-day historical transaction import on initial connection
6. Daily incremental transaction sync (background)
7. AI-assisted transaction categorization (10 IRS tax categories)
8. Transaction review/confirm/change UI
9. Manual transaction entry
10. Invoice builder (client, line items, due date)
11. Invoice email delivery with Stripe payment link
12. Invoice status tracking (draft/sent/viewed/paid/overdue)
13. Client payment landing page (Stripe card payments)
14. P&L report generation (configurable date range)
15. Schedule C category mapping in reports
16. CSV and PDF export
17. Dashboard (income/expenses YTD, outstanding invoices, uncategorized count)
18. Internal admin panel (bank sync health, user management, sync retry)

### Post-MVP Features (Phase 2, Months 4–9)

- Recurring invoices (auto-send on schedule)
- Receipt capture + OCR categorization (mobile camera upload)
- Stripe ACH payment option on invoices
- QuickBooks-compatible CSV export format
- Basic mileage tracking (IRS standard rate)
- Multiple bank account aggregated P&L view

### Vision Features (Phase 3, Months 9–18+)

- Trades vertical: job costing, per-job P&L, progress billing, crew time tracking
- Bookkeeping firm client portal: document collection, transaction question queue, branded P&L delivery
- Mobile app (React Native)
- Multi-user workspace

### Risk Mitigation Strategy

**Technical:** Plaid bank connection reliability is the #1 launch risk. Mitigate by: (a) targeting marketing at users of top 500 US institutions, not all 8,000+; (b) treating manual transaction entry as a first-class feature, not a fallback; (c) building Plaid webhook monitoring and ops alerting from day one.

**Market:** If QuickBooks reverses price increases or Wave restores free bank import, shift primary narrative from price to simplicity. The "I just need 3 things" use case exists regardless of competitor pricing changes.

**Resource:** If development exceeds 12 weeks, descope receipt capture and aggregated P&L view from launch. Bank sync + invoicing + tax report is the irreducible MVP — do not ship without all three.

---

## Functional Requirements

### Account Management & Onboarding

- FR1: Users can create an account with email and password.
- FR2: Users can authenticate using Google OAuth.
- FR3: Users can reset their password via a time-limited email link (valid 60 minutes).
- FR4: Users can redeem an AppSumo license key to activate lifetime access at account creation.
- FR5: Users can update their business profile (business name, address, and logo) used on invoices and reports.
- FR6: Users can manage their subscription (view current plan, upgrade to paid, cancel) via a Stripe-powered self-service billing portal.
- FR7: Users can export all their data (transactions, invoices, reports) as CSV files.
- FR8: Users can request account deletion; PII is removed within 30 days and financial records are anonymized.

### Bank Connection & Sync

- FR9: Users can connect a US bank account or credit card via Plaid from 8,000+ supported institutions.
- FR10: Users can connect multiple bank accounts to a single workspace.
- FR11: The system imports up to 90 days of historical transactions on initial bank connection.
- FR12: The system performs daily incremental transaction imports for all connected accounts.
- FR13: Users can manually trigger an immediate transaction sync for any connected account.
- FR14: Users can disconnect a bank account; historical transactions imported from that account are retained.
- FR15: Users receive an in-app notification and email when a bank connection fails or expires and requires re-authentication.
- FR16: Users can add transactions manually (amount, date, description, category) to cover cash payments, checks, or accounts not connectable via Plaid.

### Transaction Management & Categorization

- FR17: The system auto-categorizes imported transactions into 10 IRS tax categories: Income, Cost of Goods Sold, Advertising & Marketing, Office Supplies, Travel, Meals & Entertainment, Utilities, Contractor Payments, Other Business Expenses, Personal (non-deductible).
- FR18: Users can review all transactions requiring categorization confirmation in a dedicated review queue, working through them one by one or in bulk.
- FR19: Users can change a transaction's assigned category at any time.
- FR20: Users can split a single transaction across multiple categories with user-specified amounts per category.
- FR21: Users can mark any transaction as personal (excluded from business P&L and tax reports).
- FR22: Users can add a memo or note to any transaction.
- FR23: Users can search and filter transactions by description keyword, amount range, date range, category, and account.
- FR24: The system applies learned merchant-to-category mappings: when a user corrects a categorization for a merchant, future transactions from that merchant default to the corrected category.

### Invoice Management

- FR25: Users can create an invoice containing: client name, client email, line items (description, quantity, unit rate), due date, and optional notes.
- FR26: Users can save an invoice as a draft before sending.
- FR27: Users can send an invoice via email; the email contains a payment link to a Stripe-powered client payment page.
- FR28: Users can track invoice status: draft, sent, viewed (email opened by client), paid, overdue.
- FR29: Users can manually mark an invoice as paid (for cash or check payments outside Stripe).
- FR30: Users can send a payment reminder email for any outstanding or overdue invoice.
- FR31: Users can duplicate an existing invoice as the starting point for a new one.
- FR32: Users can void an invoice; voided invoices are retained in invoice history with void status.
- FR33: Clients can pay an invoice via credit or debit card on a Simple Bookkeeping-hosted payment page without creating an account.
- FR34: Users can view and filter all invoices by status (draft / outstanding / paid / overdue) and sort by due date or invoice amount.

### Payment Processing

- FR35: Users can connect their Stripe account to enable invoice card payments via Stripe Connect.
- FR36: Invoice card payments processed via Stripe are reflected in the user's transaction ledger within 24 hours of payment confirmation.
- FR37: Users can view Stripe payout status for received invoice payments (pending, in transit, paid out, failed).

### Reporting & Tax Exports

- FR38: Users can generate a Profit & Loss report for any date range: monthly, quarterly, full calendar year, or custom start/end date.
- FR39: P&L reports display income and expenses grouped by IRS tax category with subtotals and net profit/loss.
- FR40: P&L reports display each category mapped to its corresponding IRS Schedule C line item label.
- FR41: Users can export any P&L report as CSV (for accountants) or PDF (for records).
- FR42: PDF exports include the user's business name, logo, the selected date range, and the required tax disclaimer.
- FR43: Users can view a year-over-year income and expense comparison chart for any two calendar years.

### Dashboard & Analytics

- FR44: The dashboard displays total income and total expenses for the current month and year-to-date, and net profit/loss for each period.
- FR45: The dashboard displays total outstanding invoice amount and invoice count.
- FR46: The dashboard displays the count of transactions requiring categorization with a direct action link to the review queue.
- FR47: The dashboard displays the 10 most recent transactions with category, amount, and date.
- FR48: The dashboard displays an income vs. expenses bar chart for the trailing 12 months, one bar per month.

### Internal Administration

- FR49: Internal admins can view bank sync health metrics: connection success rate (last 24 hours), failed syncs by institution, and average sync latency by account.
- FR50: Internal admins can view any user's account summary (plan type, license status, number of connected accounts, last active date) for support purposes.
- FR51: Internal admins can trigger a manual bank sync retry for any specific user account.

---

## Non-Functional Requirements

### Performance

- Dashboard initial load: <2 seconds for 95th percentile on a standard broadband connection (≥10 Mbps).
- Daily incremental transaction sync (up to 100 transactions): completes within 30 seconds per account.
- Invoice email delivery: sent within 60 seconds of user initiating the send action.
- P&L report generation (full calendar year, up to 2,000 transactions): completes within 10 seconds.
- API response time for all user-initiated actions: <500ms at 95th percentile under normal load (up to 500 concurrent users).
- PDF export generation: completes within 15 seconds for any report.

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+).
- Plaid access tokens stored encrypted using application-level key management; never stored in plaintext or logged.
- No raw bank credentials stored; authentication delegated entirely to Plaid's OAuth/credential flow.
- PCI-DSS SAQ A compliance: card payments processed via Stripe hosted elements; Simple Bookkeeping servers receive no card data.
- Audit log: all user data mutations (transaction category changes, invoice edits, report exports, bank connection changes) logged with ISO 8601 timestamp, user ID, and action type; retained for 90 days.
- Session policy: 30-minute inactivity expiry; maximum 3 concurrent active sessions per user; all sessions invalidated on password change.
- Authentication rate limiting: login and password-reset endpoints limited to 10 attempts per 15-minute window per IP address.
- SQL injection, XSS, and CSRF protections applied to all API endpoints and form inputs per OWASP Top 10 guidelines.

### Reliability

- 99.9% uptime target during US business hours (8 AM–8 PM in all US time zones), measured monthly.
- Bank sync failures trigger automatic retry with exponential backoff (3 retries over 2 hours). User notification (in-app + email) sent if all retries fail.
- Invoice email delivery: ≥98% delivery rate and <0.1% spam complaint rate, monitored continuously via SendGrid/Postmark metrics.
- Zero data loss: all transactional data backed up daily with point-in-time recovery capability to within 1 hour.
- Ops alerting: automated Slack/PagerDuty notification if institution-level bank sync failure rate exceeds 5% within any 1-hour window.

### Scalability

- Support 500 concurrent active users at AppSumo launch.
- Scale to 5,000 concurrent users by month 12 without architectural redesign.
- Transaction storage designed for 10 years of history per user (estimated 3,000 transactions/year × 10 years = 30,000 rows per user workspace).
- Background sync queue handles daily syncs for 10,000 connected bank accounts within a 4-hour nightly processing window.
- Tax season traffic (January–April): architecture must handle 3–5x normal concurrent load through auto-scaling without manual intervention.

### Accessibility

- WCAG 2.1 AA compliance for all primary user-facing workflows: account creation, bank connection, transaction review, invoice creation, and report generation.
- All interactive elements navigable by keyboard alone.
- Color contrast ratio ≥4.5:1 for all body text and UI labels on their backgrounds.
- All form fields include accessible labels; all error messages are readable by screen readers and associated with the triggering field.

---

*PRD generated: 2026-04-09*  
*Based on: Shortlisted idea (Score: 92/105) + Market Research (2026-04-08) + Product Brief (2026-04-09)*  
*Next step: Create Architecture (`/bmad-bmm-create-architecture`)*

---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/trade-job-cost-accounting.md
  - _bmad-output/planning-artifacts/brief-trade-job-cost-accounting.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: fintech_lite
  complexity: medium
  projectContext: greenfield
research_topic: trade-job-cost-accounting
user_name: Root
date: 2026-10-23
---

# Product Requirements Document — TradeBooks

**Author:** Root
**Date:** 2026-10-23

---

## Executive Summary

TradeBooks is a web-based job cost accounting tool for sole-proprietor and small-crew trade contractors (HVAC, roofing, fencing, plumbing, electrical, landscaping). It solves four problems competitors cannot solve below $100/month: job-level profitability tracking, contractor-specific invoice generation, 1099-NEC subcontractor payment tracking, and Stripe-based payment collection.

The core insight: QuickBooks Online Plus (the only mainstream tool with job costing) reached $140/month in 2026 — a 100% increase from 2021. Wave (free) has no job costing architecture. No product under $29/month offers genuine trade-specific job costing with 1099 tracking. This gap has existed since 2012 and widens with every QB price increase.

**Target users:** ~8M US trade contractors, primarily sole proprietors earning $80K–$300K gross with 1–3 crew members. Primary persona is the "QB Plus Refugee" — a contractor receiving annual price increase notifications who is actively searching for an exit. Secondary persona is the "Spreadsheet Refugee" — a contractor self-managing with Excel who needs a more robust, less fragile system.

**Business model:** AppSumo LTD launch ($59 one-time, target 500–2,000 purchases in Month 2–4) followed by $19/month subscription. Stripe payment processing generates secondary revenue (2.9% + $0.30 per invoice paid through TradeBooks). Target: $9,500 MRR by Month 6, $38K MRR by Month 18.

### What Makes This Special

Job costing is the reason the product exists — not a module, not an add-on. Every design decision answers one question: "Did I make money on this job?" The contractor invoice template mirrors the actual cost structure (materials + labor + sub + markup), not a generic freelancer invoice. 1099-NEC tracking is built from day one so contractors set up TradeBooks in January rather than scrambling at year-end.

The structural pricing advantage is permanent: $19/month flat, no per-user fees, no job-costing add-on. "87% cheaper than QB Plus for the same outcome" is calculable in seconds and defensible in perpetuity. The AppSumo LTD frame ("Pay once, track your jobs forever") matches how trade contractors think about tool purchases — like a good drill, not a monthly subscription.

## Project Classification

- **Project Type:** SaaS B2B (small business — sole proprietor and micro-team)
- **Domain:** Fintech-lite (payment collection via Stripe; tax-adjacent 1099 tracking; no double-entry bookkeeping)
- **Complexity:** Medium (Stripe integration, SSN/EIN data handling, PDF generation, financial calculation accuracy requirements)
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

**North Star:** Monthly active users who complete at least one full job cycle — job created → cost logged → invoice sent. This is the only metric that proves core value delivery.

- Contractor creates a job with at least one cost entry within 7 days of signup
- Contractor can answer "did I make money on this job?" within 60 seconds of job close
- Contractor sends a professional invoice with itemized line items within 10 minutes of first session
- Contractor's January 1099 prep time drops from hours to under 30 minutes in Year 1

**Specific adoption gates (validates product-market fit):**
- 80%+ of paying users create at least one job with a cost entry within their first 7 days
- 60%+ of created jobs generate a sent invoice via TradeBooks
- 35%+ of active users add at least one subcontractor to the payment tracker within 30 days
- Time from signup to first job created with a cost entry: < 10 minutes

### Business Success

**AppSumo Launch (Months 2–4):**
- 500–2,000 LTD purchases at $59
- 4.0+ average rating through first 100 reviews
- Refund rate < 12% in first 60 days
- At least one review confirming job costing as the primary value driver

**Subscription Ramp (Months 6–18):**
- $9,500 MRR by Month 6 (500 active subscribers at $19/month)
- Monthly churn < 8% at Month 6, < 5% by Month 12
- $38,000 MRR by Month 18

**Platform Growth:**
- Jobs created on platform: 5,000/month by Month 6; 40,000/month by Month 18
- Stripe payment volume through TradeBooks: $200K/month by Month 6; $3M/month by Month 18
- G2/Capterra reviews: 60+ by Month 6; 300+ by Month 18

### Technical Success

- Job P&L calculation accuracy: zero rounding errors or category allocation bugs that misstate contractor profit/loss by more than $0.01
- Invoice PDF generation success rate: 99.9%+ (failed PDF generation = failed core workflow)
- Stripe payment link success rate: 99%+ (payment collection is revenue-critical)
- Zero data loss incidents involving contractor financial records
- 1099 threshold flagging accuracy: 100% correct at the $2,000 annual threshold (IRS 2026 standard)

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 | Month 18 |
|---|---|---|---|---|
| Time to first job | < 10 min | < 8 min | < 6 min | < 5 min |
| Job completion rate | 60%+ | 68%+ | 75%+ | 80%+ |
| Invoice completion rate | 55%+ | 65%+ | 72%+ | 78%+ |
| 1099 feature activation | 40%+ | 50%+ | 60%+ | 65%+ |
| Monthly active usage | 60%+ | 65%+ | 70%+ | 75%+ |
| NPS (60-day) | 38+ | 45+ | 52+ | 58+ |
| MRR | $0 (LTD phase) | $9,500 | $25,000 | $50,000+ |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP answers four questions a sole-proprietor trade contractor asks every week:

1. Did I make money on the Henderson job? *(Job costing)*
2. Can I send a professional invoice that shows my actual work breakdown? *(Contractor invoice builder)*
3. What do I owe my sub this year for 1099 purposes? *(1099 tracking)*
4. How do I collect payment without chasing checks? *(Stripe invoice payment)*

**MVP Feature Set:**
- Job/project creation with estimated budget by cost category
- Cost logging per job (materials, labor, sub, equipment, permits, disposal, fuel)
- Job P&L screen (estimated vs. actual by category, gross profit, margin %)
- Contractor invoice builder with materials + labor + sub + markup line sections
- Invoice PDF generation and email delivery
- Stripe payment link embedded in every invoice
- 1099 subcontractor tracker (W-9 data, payment log, $2,000 threshold alerts, CSV export)
- Business dashboard (active jobs, outstanding invoices, gross profit YTD)
- CSV and PDF export for job P&L and sub payment summary

**Pre-configured cost categories (no setup required):** Materials, Labor (own), Labor (sub-contractor), Equipment Rental, Permit/Inspection Fees, Dump/Disposal Fees, Vehicle/Fuel, Other.

### Growth Features (Post-MVP, Months 4–9)

- Bank/credit card connection via Plaid for automatic expense import and job assignment
- Estimate/quote builder as a pre-job step (estimate → approve → job budget)
- Recurring job templates for maintenance contractors
- Mobile-responsive PWA optimization for on-site expense logging
- TaxBandits/BoomTax API integration for direct 1099-NEC e-filing from TradeBooks

### Vision (Months 12–24)

- Crew time tracking and multi-user access with roles (owner, office manager, crew lead)
- QuickBooks sync export tier ($99 LTD / $29/month) for accountants requiring QBO
- AI job cost prediction based on historical cost patterns by job type
- Materials pricing pre-population by job type and regional pricing database
- Vertical expansion: landscaping, pressure washing, mobile mechanics, appliance repair
- Bookkeeper referral program (accountants with trade clients earn per referral)

---

## User Journeys

### Journey 1: Mike the HVAC Owner — QB Plus Refugee (Primary — Success Path)

Mike runs a 2-person HVAC business. He just received QuickBooks' seventh consecutive price increase notification — $140/month starting next billing cycle. He does the math: $1,680/year for software he has always found confusing, and job costing still requires him to maintain a parallel spreadsheet.

He posts in r/AskContractors: "Anyone else fed up with QB's prices?" Three replies mention TradeBooks. He Googles "QuickBooks alternative for HVAC contractor" and lands on the pricing page.

**Evaluation (8 minutes):** He sees "$59 one-time or $19/month" above the fold. He reads the feature list: job costing, contractor invoice, 1099 tracking. He finds an AppSumo review from another HVAC tech. He buys the $59 LTD in under 10 minutes — no free trial needed. The LTD eliminates the purchase risk.

**Onboarding (first session, 12 minutes):** He creates his first job: "Carrier AC install — Henderson." He sets an estimated budget: $1,400 materials, $600 labor. He logs two material purchases during the job. He generates an invoice with itemized materials and labor. He sends it with the Stripe payment link and gets paid the next day via card.

**Aha moment:** Job closes. He opens the job card: estimated $2,000. Actual: $2,310. "So I lost $310. That's why my HVAC installs feel tight — I'm underestimating coils." First time this calculation took under 2 minutes.

**Core usage loop (monthly rhythm):** Start of job → create job card, set estimated budget. During job → log material purchases by photo or manual entry. End of job → generate invoice, collect payment. Monthly → review job P&L report for the month. December → export sub payment summary for accountant.

**Advocacy (Month 3):** AppSumo follow-up email prompts a review: "Replaced QuickBooks for $59. Job costing finally works without a spreadsheet." He recommends TradeBooks in three QB refugee threads in the following six months.

*Capabilities revealed: job creation, cost logging, job P&L, invoice builder, Stripe payment, dashboard, AppSumo purchase flow, onboarding UX.*

---

### Journey 2: Carlos the Fence Contractor — Spreadsheet Refugee (Primary — Conversion from Manual)

Carlos is 31, sole proprietor, 3 years in business. He built a 14-tab Excel cost-tracking spreadsheet himself. It works until it doesn't: last month a formula broke and his P&L was off by $800 before he caught it. He pays one sub $800–$1,500/job for concrete post setting.

A formula breaks on a Tuesday during a four-job week. He posts in r/FenceBuilding asking what software people use for job tracking. Multiple replies mention TradeBooks. He watches the demo video (3 minutes). He starts the free trial, creates a test job, and realizes TradeBooks does exactly what his spreadsheet does — but without maintenance.

**First January with TradeBooks:** He opens the subcontractor tracker. His concrete sub's total: $14,300 for the year. "I need to file a 1099." He exports the CSV, sends it to his accountant. Ten minutes. "That used to take me a full day digging through bank statements."

**Retention driver:** TradeBooks is now set up in January. He starts each job here instead of in Excel. The spreadsheet sits unopened for three months.

*Capabilities revealed: subcontractor payment log, annual total per sub, 1099 threshold alert, CSV export, job creation, invoice builder, trial → paid conversion flow.*

---

### Journey 3: Diana the Small GC — Wave User Upgrading to Job Costing (Secondary Conversion)

Diana runs small residential remodels. She uses Wave for invoicing — free, good enough for basic invoicing. She has no job costing at all. She uses 3–5 different subs per job and pays them via Venmo and check with no running record.

She loses money on a bathroom tile job. She tries to figure out after the fact where the loss came from. Wave can't help — no per-job cost tracking. She searches "job costing tool for small general contractors" and lands on TradeBooks.

**Value discovery (trial session):** She creates the bathroom job retrospectively. She logs material, tile sub, and her own labor. The P&L shows: $800 over budget on tile — she quoted at Home Depot price but the sub sourced a premium tile at $1.10/sq ft higher. "Now I know to add a 10% buffer on tile jobs."

**Upgrade decision:** $19/month is a clear upgrade from $0 Wave. She subscribes after 14-day trial. She keeps Wave for basic invoicing until she has 3 jobs in TradeBooks, then consolidates.

*Capabilities revealed: retroactive cost logging, multi-sub job, job P&L, Wave-to-TradeBooks migration messaging, free trial, subscription upgrade.*

---

### Journey 4: Mike — Edge Case — Sub Crosses 1099 Threshold Mid-Season

Mike's regular electrical sub has been getting steady work since March. In October, TradeBooks alerts him: "Electrical sub — $1,980 paid YTD — approaching $2,000 threshold." Mike hasn't collected a W-9 from this sub.

He opens the sub record in TradeBooks. He sees a prompt: "Collect W-9 before total exceeds $2,000 to avoid IRS filing complications." He clicks "Send W-9 request" — TradeBooks sends a standardized request email to the sub. The sub uploads a PDF. Mike enters the EIN. TradeBooks marks the sub as "1099-ready."

In January: his sub's total is $3,400. He exports the 1099 summary CSV. His accountant files three NEC forms in 20 minutes.

*Capabilities revealed: 1099 threshold alert, W-9 collection prompt, sub EIN/SSN storage, year-end payment summary export, accountant handoff.*

---

### Journey Requirements Summary

| Journey | Core Capabilities |
|---|---|
| Mike — QB Refugee | Job creation, cost logging, job P&L, invoice builder, Stripe payment, dashboard |
| Carlos — Spreadsheet Refugee | Sub tracker, 1099 export, January workflow, trial conversion |
| Diana — Wave Upgrade | Retroactive logging, multi-sub job, trial → subscription |
| Mike — 1099 Edge Case | Threshold alert, W-9 collection, EIN storage, year-end export |

**Capabilities not yet covered that require FRs:** Account setup (company info, logo, license number), invoice customization, payment status tracking, bulk job reporting, business-level P&L, data export for accountant.

---

## Domain-Specific Requirements

### Compliance & Regulatory

**1099-NEC Filing (IRS):**
- Annual threshold for required filing: $2,000 (2026 IRS standard, updated from $600)
- TradeBooks must track cumulative annual payments per subcontractor (calendar year, resets January 1)
- Alert contractors when a sub's annual total reaches $1,800 (10% buffer before threshold)
- Alert again when total crosses $2,000 threshold
- Year-end export must include: sub name, business type (individual/LLC/S-Corp/C-Corp), EIN or SSN, total annual payments — in IRS-compatible format for accountant use
- TradeBooks is NOT the filer — it is a data collection and export tool in MVP. Direct e-filing is Phase 2.
- Legal disclaimer required on 1099 export: "For reference only. Consult a tax professional for IRS filing obligations."

**Sensitive Data Handling (SSN/EIN):**
- Subcontractor SSN and EIN data must be encrypted at rest (AES-256 minimum)
- SSN display must be masked in UI (show last 4 digits only after storage)
- Access to sub EIN/SSN data must require authenticated session
- Data handling policy must include explicit contractor acknowledgment at W-9 entry

**Payment Data (Stripe PCI Compliance):**
- TradeBooks does NOT store card data — all payment processing handled by Stripe
- TradeBooks stores only Stripe payment intent IDs, status, and timestamps
- Stripe Connect used for contractor bank account linking (Stripe handles KYC/AML)
- All Stripe webhook events must be validated with Stripe signature verification

### Technical Constraints

- Financial calculations (job P&L, gross profit, margin %) must use integer arithmetic (cents, not floating point dollars) to prevent rounding errors
- Invoice total calculations must match line-item sums to the cent (discrepancy = data integrity failure)
- Job cost data must never be deleted — soft-delete only, with full audit log
- All financial data exports must include generation timestamp and disclaimer

### Risk Mitigations

- **Accuracy risk:** TradeBooks is positioned as a "job profitability tool, not full accounting software." Disclaimers on P&L screens and exports prevent expectation of GAAP-compliant reporting.
- **1099 liability risk:** Export-only (not e-filing) in MVP limits IRS filing liability to the contractor. TradeBooks provides data, contractor or their accountant files.
- **SSN data breach risk:** Minimize SSN collection — EIN (business) is preferred; SSN only for sole-proprietor subs. Encryption at rest + access controls mitigate breach impact.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- Each contractor account is a fully isolated tenant — no data visibility between accounts
- All database queries scoped by account ID; no cross-tenant data access possible
- Stripe Connect account per tenant — each contractor's payments land in their own bank

### Authentication & Access Control

- Email + password authentication with bcrypt hashing (minimum 12 rounds)
- Magic link / passwordless login option for mobile-first users
- Session expiry: 30 days (remember me) / 24 hours (default)
- MVP is single-user per account — multi-user (Phase 2) requires roles/permissions architecture not needed now
- Password reset via email with time-limited (1-hour) token

### Onboarding Minimalism

- Account activation requires: email, password, business name, trade type (dropdown)
- No credit card required at trial start
- Pre-configured cost categories active on first login — zero setup required
- First job creation wizard guides new user through job → cost → invoice flow in under 10 minutes

### Billing & Subscription

- Stripe Billing for subscription management ($19/month)
- LTD (lifetime deal) users flagged in account record — no subscription charges ever
- Grace period: 7 days after failed payment before feature restriction
- Cancellation: immediate access until end of billing period; data retained 90 days post-cancellation
- AppSumo redemption: unique code maps to LTD account tier

### Data Portability

- Contractors can export all their data (jobs, costs, invoices, subs) as CSV at any time
- Exports available without contacting support
- Account deletion removes PII (name, email, SSN/EIN) after 90-day retention window; anonymized financial records retained for audit

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product is useful when it solves the "did I make money?" question for a single job, generates a professional invoice, and tracks one sub payment. No additional features are needed to prove the concept.

**MVP resource requirements:** 1–2 full-stack engineers (8–10 weeks), 1 designer (4 weeks overlapping), CPA review of P&L calculation logic (2 hours, Week 10). No mobile native app engineering required — web-responsive covers MVP.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Mike's QB Refugee journey (full job cycle from creation to payment)
- Carlos's Spreadsheet Refugee journey (sub tracking and 1099 export)
- Diana's Wave Upgrade journey (retroactive cost logging and P&L)

**Must-have capabilities:**
- Job creation with estimated budget by category
- Cost logging per job with 8 pre-configured categories
- Job P&L screen (estimated vs. actual, gross profit, margin %)
- Contractor invoice builder (materials, labor, sub, markup line sections)
- Invoice PDF generation and email delivery
- Stripe payment link embedded in invoice
- Invoice payment status tracking (draft, sent, viewed, paid, overdue)
- Subcontractor record with W-9 data, payment log, annual total
- 1099 threshold alert at $1,800 and $2,000 per sub per year
- Year-end sub payment summary CSV export
- Business dashboard: active jobs, outstanding invoices, gross profit YTD
- Job list with budget status indicators (green/yellow/red)
- CSV and PDF export for individual job P&L
- Account setup: company name, logo upload, license number, contact info
- Mobile-responsive UI for all core flows

### Post-MVP Features

**Phase 2 (Months 4–9):**
- Bank/credit card sync via Plaid (auto-import and job assignment)
- Estimate/quote builder as pre-job step
- 1099-NEC e-filing via TaxBandits API
- Recurring job templates
- Mobile PWA for on-site expense logging

**Phase 3 (Months 12–24):**
- Multi-user access with roles
- QuickBooks sync export tier
- Crew time tracking
- AI job cost prediction
- Vertical-specific landing pages and templates

### Risk Mitigation Strategy

**Technical risks:**
- Stripe Connect onboarding complexity — mitigated by using Stripe's hosted onboarding flow; do not build custom KYC
- PDF generation reliability — mitigated by using a proven PDF library (Puppeteer or React PDF) with fallback to simple HTML invoice view
- SSN/EIN encryption — mitigated by encrypting at the application layer before database write; key management via environment variable in MVP, AWS KMS in Phase 2

**Market risks:**
- AppSumo cohort churns after LTD — mitigated by capping LTD at 2,000 units; building subscription revenue before LTD window closes; 1099 season creates annual re-engagement
- Wave adds job costing — mitigated by AppSumo community creating brand loyalty; Wave's free-first architecture makes job costing a structural challenge, not just a feature gap

**Resource risks:**
- If engineering timeline extends: defer mobile-responsive optimization to post-launch; launch desktop-first with basic mobile support
- If Stripe Connect approval delays: launch with manual "mark as paid" option; Stripe payment links added in v1.1

---

## Functional Requirements

### Job & Project Management

- FR1: Contractor can create a job with: client name, job type (from dropdown: HVAC, Roofing, Fencing, Plumbing, Electrical, Landscaping, General, Other), and an estimated budget broken down by cost category
- FR2: Contractor can set an estimated budget per cost category when creating a job
- FR3: Contractor can update job status to: In Progress, Completed, Cancelled
- FR4: Contractor can view a list of all jobs with their current status and budget consumption percentage
- FR5: Contractor can archive completed jobs while retaining full P&L data
- FR6: Contractor can duplicate a job as a template for a similar new job

### Cost Tracking

- FR7: Contractor can log a cost entry against a specific job with: amount, cost category, date, vendor name, and optional notes
- FR8: Contractor can log a cost entry as a subcontractor payment (links to a subcontractor record and counts toward 1099 annual total)
- FR9: Contractor can view a job P&L screen showing: estimated cost per category, actual cost per category, variance per category, total estimated, total actual, gross profit (revenue minus costs), and gross margin percentage
- FR10: Contractor can view a running actual-vs-budget indicator per job (percentage of estimated budget consumed) in real time as costs are logged
- FR11: Contractor can edit or delete a cost entry with change reflected immediately in job P&L
- FR12: System pre-populates cost categories with 8 trade-specific defaults (Materials, Labor Own, Labor Sub, Equipment Rental, Permit/Inspection, Dump/Disposal, Vehicle/Fuel, Other) — no setup required

### Invoice Builder & Payment Collection

- FR13: Contractor can generate an invoice from a job, with line items auto-populated from the job's cost log (materials, labor, sub costs)
- FR14: Contractor can edit invoice line items before sending (add, remove, modify description, quantity, rate, markup)
- FR15: Invoice template includes distinct sections for: Materials (itemized list with qty/unit cost/markup), Labor (hours × rate), Subcontractor Work (description + amount), Additional Fees (permits, other), Subtotal, Markup, Tax (optional), and Total
- FR16: Contractor can add company branding to invoices: business name, logo, license number, and contact information
- FR17: Contractor can set payment terms per invoice (Due on Receipt, Net 10, Net 15, Net 30)
- FR18: Contractor can send an invoice to a client via email as a PDF attachment with an embedded Stripe payment link
- FR19: Client can pay an invoice via credit/debit card through a Stripe-hosted payment page (no TradeBooks account required)
- FR20: Contractor can view invoice payment status: Draft, Sent, Viewed, Paid, Overdue
- FR21: Contractor receives notification when a client views an invoice and when payment is collected
- FR22: Contractor can manually mark an invoice as paid (for check/cash payments outside Stripe)
- FR23: Contractor can download any invoice as a PDF

### Subcontractor & 1099 Tracking

- FR24: Contractor can create a subcontractor record with: name, business type (individual/LLC/S-Corp/C-Corp), preferred payment method, EIN or SSN (masked after entry), and W-9 document upload
- FR25: Contractor can log a payment to a subcontractor: amount, date, payment method (check, ACH, Venmo, cash, Stripe), linked job (optional)
- FR26: Contractor can view a subcontractor's YTD payment total, which resets every January 1
- FR27: System alerts the contractor when a subcontractor's YTD payments reach $1,800 (10% buffer before IRS $2,000 threshold)
- FR28: System alerts the contractor when a subcontractor's YTD payments cross $2,000 (IRS filing required)
- FR29: Contractor can export a year-end subcontractor payment summary as CSV with: sub name, business type, EIN/SSN (last 4 masked), and total annual payments — formatted for accountant use
- FR30: Contractor can view a list of all subcontractors with current YTD totals and 1099 status (under threshold, approaching, over threshold)

### Dashboard & Reporting

- FR31: Contractor can view a dashboard showing: total revenue this month, total job costs this month, gross profit this month, total revenue YTD, total job costs YTD, gross profit YTD
- FR32: Contractor can view a job list on the dashboard with budget status indicators (green < 70% budget consumed, yellow 70–90%, red > 90%)
- FR33: Contractor can view outstanding invoices summary: total amount due and count of overdue invoices
- FR34: Contractor can view a list of subcontractors approaching or over the 1099 threshold directly from the dashboard
- FR35: Contractor can export a job P&L report for a date range as CSV or PDF
- FR36: Contractor can export a business P&L summary for a month, quarter, or year as CSV or PDF
- FR37: Contractor can filter the jobs list by status, date range, job type, or client name

### Account & Business Setup

- FR38: Contractor can set up their business profile: company name, trade type, business address, phone, email, logo, and contractor license number
- FR39: Contractor can connect a bank account via Stripe Connect to receive invoice payments via ACH or card
- FR40: Contractor can manage their subscription (view plan, update payment method, cancel)
- FR41: Contractor can export all their account data (jobs, costs, invoices, subs) as a full ZIP archive
- FR42: Contractor can invite one additional user to their account (admin or read-only — Phase 2 gate, surfaces in MVP as "coming soon" to set expectations)

---

## Non-Functional Requirements

### Performance

- Dashboard page load (first contentful paint): under 2 seconds at 95th percentile on a 4G mobile connection
- Job P&L calculation and display: under 500ms from job selection to P&L screen render
- Invoice PDF generation: under 5 seconds from "generate" click to PDF ready for download or email
- Stripe payment link redirect: under 2 seconds from invoice email click to Stripe-hosted payment page
- Job list and cost log rendering: supports up to 500 jobs and 5,000 cost entries per account without pagination-required degradation

### Security

- All data encrypted in transit via TLS 1.2+ (no HTTP allowed in production)
- Subcontractor SSN and EIN encrypted at rest using AES-256 before database write
- SSN/EIN displayed in UI as masked string (format: `***-**-1234` or `**-***1234`) after initial entry
- User passwords hashed using bcrypt with minimum 12 salt rounds
- All API endpoints require authenticated session; no unauthenticated data access
- Stripe webhook events validated using Stripe-Signature header before processing
- Session tokens rotated on privilege change events (login, subscription upgrade)
- Failed login attempts: rate limit to 5 attempts per 15-minute window per IP

### Scalability

- Architecture supports horizontal scaling of application tier with no shared server state (stateless API design)
- Database design supports 100,000 active contractor accounts with no schema changes required
- Stripe payment processing delegated to Stripe's infrastructure — no custom payment queue required
- AppSumo launch spike support: application tier must handle 500 concurrent new account registrations within a 4-hour window without degradation
- PDF generation isolated to background worker queue — does not block API response thread

### Reliability

- Application uptime: 99.5% monthly (< 3.6 hours downtime/month) — targets standard cloud provider SLA
- Financial data (jobs, costs, invoices, sub payments) backed up daily with 30-day retention
- Job and cost data uses soft-delete only — no hard deletes; data restorable within 90 days of deletion
- Invoice email delivery: retry up to 3 times on transient SMTP failure with exponential backoff
- Stripe webhook delivery: idempotency key required on all webhook handlers to prevent duplicate payment processing

### Integration

- **Stripe Connect:** Contractor bank account connection for invoice payment receipt; Stripe handles KYC/AML; TradeBooks stores only Stripe account ID and connection status
- **Stripe Billing:** Subscription management for $19/month plan; webhook events drive account plan state
- **Stripe Payment Links / Payment Intents:** One payment link per invoice; TradeBooks stores payment intent ID, status, and timestamp only
- **Transactional Email:** Invoice delivery, payment notifications, 1099 alerts via a transactional email provider (SendGrid or Postmark); delivery confirmations tracked
- **PDF Generation:** Server-side PDF rendering for invoices and reports; output stored temporarily for download and attached to invoice emails


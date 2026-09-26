---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/invoice-follow-up-automation-trades.md
  - _bmad-output/planning-artifacts/product-brief-trade-invoice-automation.md
workflowType: prd
idea_name: trade-invoice-automation
date: 2026-09-26
author: Root
classification:
  projectType: saas_b2b
  domain: fintech_legaltech
  complexity: medium_high
  projectContext: greenfield
---

# Product Requirements Document — InvoiceGuard

**Author:** Root
**Date:** 2026-09-26

---

## Executive Summary

InvoiceGuard is a standalone bolt-on SaaS for US trade contractors (HVAC, plumbing, electrical, cleaning, landscaping) that automates invoice escalation from job completion to legally binding pre-lien notice — without requiring a customer card on file. It targets the $3.1B FSM market (7.5% YoY growth) by solving the #2 pain point in the 500,000-contractor r/sweatystartup community: chasing unpaid invoices.

The problem is precise: Jobber — the dominant FSM for small shops — cannot auto-invoice customers without a saved payment method, blocking 2/3 of contractor customers from automated follow-up (documented October 2025 Trustpilot complaint). No FSM platform integrates state-specific pre-lien notices. No standalone AR tool bridges invoice-sent and collections-referral for residential trade services. A 3-tech shop with $20,000 outstanding receivables loses $2,000–$4,000 annually to this gap.

InvoiceGuard triggers on job completion via webhook (Jobber/HCP) or CSV import, runs a configurable 30-day escalation sequence (Day 3 SMS → Day 7 formal email → Day 14 state-specific pre-lien notice PDF → Day 30 collections flag), and offers a card-free customer payment portal. The $149 LTD launch on AppSumo creates a rapid validation event; the $29/mo SaaS transition follows.

**Target users:** Trade contractors with 1–15 techs, $300K–$1.5M annual revenue, using Jobber or Housecall Pro, who lose 10–20% of outstanding receivables to slow-pay customers annually.

### What Makes This Special

InvoiceGuard is the only tool at the intersection of three capabilities absent from every competitor:

1. **Automated escalation without card on file** — works for every customer, not just the 1/3 who have proactively saved payment credentials in Jobber. Directly patches the documented Jobber card-on-file gap without requiring FSM migration.
2. **50-state pre-lien notice library (10-state MVP)** — attorney-reviewed state-specific preliminary notice PDFs auto-generated and sent at Day 14, preserving lien rights with strict statutory deadlines (20–45 days by state). No FSM or AR automation tool offers this for residential trade services.
3. **Bolt-on FSM integration** — contractors install as a webhook alongside their existing Jobber or HCP account; no platform migration, no disruption to existing workflows.

The legal layer is the durable moat: a Jobber feature patch can address card-on-file, but building an attorney-reviewed 50-state pre-lien library takes 12–18 months and significant legal investment. Every invoice InvoiceGuard processes deepens the payment behavior dataset, making the product smarter over time.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant web application with webhook integrations and third-party payment processing
- **Domain:** FinTech / LegalTech — invoice management, payment processing (Stripe, Plaid), A2P SMS, and state-specific legal notice generation
- **Complexity:** Medium-High — regulatory requirements (A2P 10DLC, TCPA, pre-lien legal accuracy per state, PCI-DSS scope reduction), third-party API dependencies (Jobber OAuth, HCP webhooks, Stripe, Plaid, SMS provider)
- **Project Context:** Greenfield — no existing codebase or database

---

## Success Criteria

### User Success

- **Invoice collection improvement:** Contractors report ≥15% increase in invoices paid within 30 days vs. their self-reported baseline within 60 days of activation, measured via in-app survey and dashboard comparison.
- **Time to first value:** Median time from account creation to first payment received via InvoiceGuard payment portal is under 14 days.
- **Pre-lien utilization:** ≥40% of active users trigger at least one pre-lien notice within their first 30 days, confirming the legal layer delivers realized value not just theoretical coverage.
- **ROI clarity:** ≥80% of active users can state InvoiceGuard's dollar impact from memory (because the dashboard shows "Amount recovered this month: $X").
- **Onboarding speed:** ≥70% of LTD buyers connect at least one FSM integration (Jobber OAuth or HCP webhook) within 7 days of purchase.

### Business Success

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| AppSumo LTD units sold | 2,000–5,000 units at $149 | Launch window (30 days) |
| Verified contractor activations | 500+ (webhook connected, invoice processed) | Month 1 |
| G2/Capterra contractor reviews | 50+ verified at 4+ star average | Month 3 |
| NPS from LTD cohort | ≥40 | Month 2 in-app survey |
| LTD → MRR conversion | 15% convert to $29/mo within 90 days | Month 4–6 |
| MRR by Month 12 | $11,150/mo ($29/mo base + $49/mo Pro) | Month 12 |
| Payment processing volume | $500K/month processed via portal | Month 12 |

### Technical Success

- Escalation engine processes scheduled events with ≤60 second delay from trigger time.
- Payment portal achieves ≤2 second page load for 95th percentile under normal load.
- Webhook receiver processes Jobber and HCP events with zero data loss across all supported plan tiers.
- Pre-lien PDF generation completes within 10 seconds of trigger event.
- Zero compliance violations for A2P 10DLC SMS delivery or TCPA opt-out handling.

### Measurable Outcomes

- **Leading indicator:** # of invoices processed per active user per month (≥5 within first 30 days = engaged user)
- **Retention signal:** % of users who trigger pre-lien feature (legal-layer stickiness, target 40%)
- **Growth signal:** % of new signups citing peer recommendation (target 20% organic referral)
- **Financial signal:** churn rate on MRR subscribers below 5%/month

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**MVP philosophy:** Problem-solving MVP. The minimum that lets a contractor run their first complete escalation sequence — from job completion through pre-lien notice — without any manual intervention.

**Core user journeys supported:**
- Contractor connects Jobber or HCP, configures state, reviews sequence defaults, and watches the first automated escalation run on an existing overdue invoice
- Contractor imports outstanding invoices via CSV when FSM integration is unavailable
- Customer receives SMS/email escalations, pays via mobile-friendly portal without creating an account
- Pre-lien notice generated automatically at Day 14, PDF sent to customer and available in contractor dashboard

**Must-Have Capabilities (Phase 1):**

| Capability | Scope Boundary |
|------------|---------------|
| Jobber OAuth webhook integration | All plan tiers (Core, Connect, Grow, Franchise) |
| Housecall Pro webhook integration | Standard webhook endpoint only |
| CSV invoice import | Customer name, email, phone, amount, job date, property address |
| Escalation engine | Day 3 SMS / Day 7 email / Day 14 pre-lien / Day 30 flag |
| SMS delivery | A2P 10DLC compliant, Twilio or equivalent |
| Pre-lien notice generation | 10 states: CA, FL, TX, AZ, NY, CO, WA, OR, NV, GA |
| Customer payment portal | ACH (Plaid), card (Stripe), check instructions — no customer account required |
| Dashboard | Outstanding total, monthly recovery, collection rate, per-invoice status |
| Notification system | Email + SMS to contractor; weekly digest |
| Contractor billing | LTD code redemption + $29/mo + $49/mo Stripe subscriptions |

**Out of scope for MVP:**
- All 50 states pre-lien library (Phase 2)
- Mechanic's lien actual filing (Phase 2 — preliminary notice only in MVP)
- ServiceTitan integration (Phase 2)
- QuickBooks/Xero 2-way sync (Phase 2 — CSV export available in MVP)
- Collections agency API integration (Phase 2 — manual referral flag in MVP)
- Credit bureau reporting (Phase 3)
- AI payment risk scoring (Phase 3)
- Customer account portal (YAGNI — not required for payment)
- Certified mail fulfillment service (Phase 2 — email delivery in MVP)
- Dispute resolution workflow (out of scope entirely for v1)

### Growth Features (Phase 2 — Months 4–9)

- Complete 50-state pre-lien library (attorney-reviewed per state)
- Mechanic's lien filing integration (actual lien filing, not just preliminary notice)
- ServiceTitan webhook integration (opens 25+ tech shop segment)
- QuickBooks Online 2-way sync (AR reconciliation for shops with bookkeepers)
- Collections agency API (direct referral to vetted partner; revenue share)
- Certified mail fulfillment (InvoiceGuard prints and mails notice on contractor's behalf)
- PHCC trade association white-label offering

### Vision (Phase 3 — Year 2–3)

- Credit bureau soft reporting for repeat non-payers (opt-in)
- Payment risk score (predict late-pay probability based on address, job type, regional data)
- Automated payment plan proposals for large invoices ($2,000+)
- Recovery analytics: lifetime revenue recovered, state-by-state payment patterns
- Full AR operating system for trades: everything between "job complete" and "money in bank"

---

## User Journeys

### Journey 1: Mike the HVAC Owner — Core Success Path

Mike runs a 4-tech HVAC shop in Phoenix, Arizona, generating ~$1.2M/year. He uses Jobber for scheduling. His wife handles invoicing manually on Friday afternoons, texting from her personal cell phone when invoices go unpaid. He's written off ~$8,000 in receivables this year and lost lien rights on a $3,400 dispute because he missed Arizona's 20-day preliminary notice window.

**Opening Scene:** Mike sees an AppSumo deal email — "Stop Chasing Late Payments: InvoiceGuard $149 LTD." He calculates: $8,000 lost last year ÷ $149 = 53x ROI if it works. He buys immediately.

**Rising Action:** Onboarding takes 8 minutes. He clicks "Connect Jobber," approves the OAuth scope, and InvoiceGuard pulls in his 23 outstanding invoices from the last 60 days. He reviews the defaults (Day 3/7/14/30), changes Day 3 to Day 2 because "my customers forget fast," confirms his Arizona state setting, and clicks "Start automating."

**Climax:** Day 14 arrives for a $1,800 HVAC repair invoice from a regular customer. InvoiceGuard auto-generates the Arizona preliminary 20-day notice PDF, populates it with Mike's ROC license number, the customer's property address, and the job description, and sends it to the customer's email. Mike gets a notification: "Pre-lien notice sent: Garcia Residence — $1,800. Lien rights preserved." The customer pays via the payment portal link in the notice email within 4 hours.

**Resolution:** Mike's dashboard shows $4,200 recovered in Month 1. His wife no longer sends Friday texts. For the first time, a customer dispute triggers automatic lien right preservation — no attorney needed, no missed deadline. Mike posts in r/sweatystartup: "Recovered $4,200 in 30 days. The pre-lien feature is worth 10x the price alone."

**Journey Requirements Revealed:** FSM webhook integration, configurable escalation timing, state selection, pre-lien auto-generation with contractor license number, customer payment portal, real-time dashboard recovery tracking, contractor SMS/email notification on payment, community sharing moment.

---

### Journey 2: Dave the Solo Plumber — Pre-Lien Edge Case

Dave is a solo plumber in Columbus, Ohio with $350K revenue. He uses HCP for scheduling but invoices via email. He has ~$7,500 outstanding at any time. Last year he lost $2,100 on a kitchen re-pipe dispute because he didn't know Ohio's lien notice requirements and had no legal leverage.

**Opening Scene:** Dave finds InvoiceGuard through a r/Plumbing thread. He's not technically fluent — he wants something that "just works" and doesn't require him to read a manual.

**Rising Action:** He connects HCP via the webhook URL in his HCP settings (InvoiceGuard provides step-by-step instructions with screenshots). He doesn't have a CSV of outstanding invoices, so he creates 5 manually — typing in customer names, amounts, and job dates from memory.

**Pivotal Moment:** Two weeks in, Dave is on a job site when he gets an SMS: "InvoiceGuard: Pre-lien notice sent to Johnson Residence for $2,400. Lien rights preserved through [date]." He didn't do anything. He didn't know it was happening. He pulls up the dashboard during a lunch break and sees the PDF was auto-generated with Ohio's statutory language and his plumbing license number.

**Resolution:** The $2,400 invoice gets paid 3 days later — the first time a customer of that size has paid in under 30 days. Dave's emotional reaction: "I didn't have to make an awkward call. It just happened professionally." The second pre-lien notice, sent two weeks later, triggers the customer Dave lost $2,100 to last year to reach out proactively and settle the dispute.

**Journey Requirements Revealed:** HCP webhook setup with guided instructions, manual invoice creation, per-invoice status visibility, push notification (SMS) to contractor for pre-lien events, Ohio state pre-lien support, passive automation (no action required after setup), settlement tracking.

---

### Journey 3: Lisa the Cleaning Business Owner — CSV Import + Recurring vs. One-Time Gap

Lisa owns a 6-cleaner residential cleaning company in Austin, Texas with ~$800K revenue. She uses Jobber for recurring clients (who have cards on file and auto-pay). Her problem is one-time deep-clean customers: they don't have cards, Jobber can't auto-charge them, and her $4,000 backlog is all from this segment.

**Opening Scene:** Lisa sees InvoiceGuard mentioned in a Jobber community Facebook group. She already loves Jobber for recurring clients — she just needs it to work for one-time clients too.

**Rising Action:** She connects Jobber via OAuth. InvoiceGuard detects 34 outstanding invoices — all from one-time customers. She realizes 3 of them are already past the 45-day Texas lien window; InvoiceGuard flags these as "Lien rights expired — manual follow-up recommended." For the remaining 31, escalation sequences start immediately based on their job completion dates.

**Day 14:** Six customers receive Texas pre-lien notices automatically. Lisa's dashboard updates: "Pre-lien notices sent: 6 invoices, $3,180 at risk preserved."

**Resolution:** Within 30 days, 28 of the 34 invoices are paid — 7 via the InvoiceGuard payment portal ACH option (lower fees than card). Her outstanding one-time backlog drops from $4,000 to under $400. She upgrades to the $49/mo Pro plan for the QuickBooks export integration.

**Journey Requirements Revealed:** Jobber OAuth pulling outstanding invoices retroactively, lien deadline expiry detection and warning, ACH payment portal, per-invoice status updates, QuickBooks CSV export (Pro tier), subscription upgrade flow.

---

### Journey 4: Sandra the Office Manager — Secondary User Dashboard

Sandra manages operations for a 12-tech plumbing and HVAC company in Denver, Colorado. The owner, Ray, bought InvoiceGuard at AppSumo. Sandra uses it daily, while Ray checks in weekly.

**Opening Scene:** Ray gives Sandra access to InvoiceGuard and asks her to "figure it out." She needs to understand what's outstanding, what notices have been sent, and whether anything needs human action — without asking Ray.

**Rising Action:** Sandra filters the invoice list by "Pre-Lien Sent" status to identify which invoices are in the legal escalation phase. She exports the last 90 days as CSV to reconcile with QuickBooks. She reviews the weekly digest email, which shows she needs to manually follow up on 3 invoices flagged at Day 30.

**Climax:** One Day-30 flagged invoice is for $8,400 — a commercial HVAC job that is now outside the pre-lien window. Sandra uses InvoiceGuard's "Refer to Collections" button to flag the invoice, export all escalation history as a PDF, and send it to Ray with a recommendation.

**Resolution:** Sandra has a clear, defensible audit trail of every automated action taken. Ray doesn't need to micromanage the AR process. The collections referral is made with documented evidence.

**Journey Requirements Revealed:** Dashboard filtering by status, CSV export for accounting reconciliation, weekly digest email, manual Day-30 escalation prompt, collections referral flag with escalation history export, multi-user access (owner + office manager access to same account).

---

### Journey 5: Customer Receiving Escalation — Payer Portal Experience

Maria is a homeowner in Scottsdale, Arizona. She hired Mike's HVAC company for a $1,200 AC repair. She intended to pay but lost the invoice email. Three weeks later she receives an email with a PDF labeled "Arizona Preliminary Notice of Intent to Lien."

**Opening Scene:** Maria is alarmed by the formal language. She clicks the payment link immediately.

**Rising Action:** The InvoiceGuard payment portal loads on her phone. It shows the invoice clearly: "AC Repair — [Mike's company] — $1,200 — Due [date]." She doesn't need to create an account. She selects "Pay by bank transfer (free)" — Plaid opens, she logs into her bank in 30 seconds, confirms the $1,200 transfer.

**Resolution:** Maria gets an email receipt. Mike gets an SMS: "Payment received: Garcia, Maria — $1,200." The invoice is marked Paid in the dashboard. Maria feels the process was professional — she's not embarrassed, just relieved.

**Journey Requirements Revealed:** Mobile-optimized payment portal, no customer account required, Plaid ACH flow, Stripe card option, clear invoice display with contractor name, instant payment confirmation to both parties, invoice PDF download option.

---

### Journey Requirements Summary

| Capability Area | Journeys That Require It |
|----------------|--------------------------|
| Jobber OAuth integration | Mike (J1), Lisa (J3) |
| HCP webhook + manual invoice creation | Dave (J2) |
| Configurable escalation timing | Mike (J1) |
| State-specific pre-lien generation | Mike (J1), Dave (J2), Lisa (J3) |
| Lien deadline expiry detection | Lisa (J3) |
| Customer payment portal (ACH + card) | Mike (J1), Maria (J5) |
| Real-time dashboard + recovery tracking | Mike (J1), Sandra (J4) |
| Contractor SMS/email notifications | Mike (J1), Dave (J2) |
| CSV export for accounting | Lisa (J3), Sandra (J4) |
| Multi-user account access | Sandra (J4) |
| Manual Day-30 escalation + collections flag | Sandra (J4) |
| Escalation history export (audit trail) | Sandra (J4) |
| LTD code redemption + subscription upgrade | Lisa (J3) |

---

## Domain-Specific Requirements

### Legal Compliance — Pre-Lien Notices

Pre-lien (preliminary) notices are governed by state lien laws, each with different content requirements, delivery methods, statutory deadlines, and recipient requirements. Non-compliant notices are legally void and create contractor liability.

**Requirements:**
- All pre-lien templates must be reviewed and approved by a licensed construction attorney in each applicable state before deployment.
- Template content for each state must include all statutory required elements (contractor name and license, property owner name, property description, claimant's interest, estimated value of services, statutory notice language).
- Deadline tracking must use the statutory clock from the product brief: the shorter of the job completion date + state-specific deadline (20–45 days). System must flag invoices where lien rights have expired without a notice being sent.
- Pre-lien notices must not constitute legal advice to contractors; all generated documents must include a disclaimer that the service provides automation only, not legal counsel.
- State-specific delivery method requirements must be honored: some states require certified mail; MVP delivers via email with certified mail option at extra cost (Phase 2: fulfillment service).

**Launch states and deadlines:**
| State | Preliminary Notice Deadline |
|-------|---------------------------|
| California | 20 days from first day of labor/materials |
| Texas | Not later than 15th of 3rd month after each month labor performed |
| Florida | 45 days from first labor/material |
| Arizona | 20 days from first labor/material |
| New York | Before filing mechanic's lien (no advance notice required for residential) |
| Colorado | No advance preliminary notice required (lien filing within 2 months) |
| Washington | No general requirement; specific for prime contractors |
| Oregon | 8 days before filing lien for prime; up to 75 days for subcontractors |
| Nevada | 31 days from first furnishing labor/material |
| Georgia | No preliminary notice required for direct contractors |

*Note: For states with no preliminary notice requirement (NY, CO, WA, GA), InvoiceGuard sends a formal demand letter at Day 14 in lieu of a pre-lien notice.*

### SMS & Telecommunications Compliance

- All customer-facing SMS must be registered under A2P 10DLC (Application-to-Person, 10-digit long code) with the carrier ecosystem before any messages are sent. Registration timeline is 4–6 weeks; must be initiated before public launch.
- TCPA compliance: customer SMS opt-out must be processed within 24 hours of STOP reply; opted-out numbers must never receive further SMS from InvoiceGuard.
- SMS message content must include contractor business name and opt-out instructions ("Reply STOP to opt out") in each message.
- System must log all SMS delivery attempts, delivery status, and opt-out events for compliance audit.

### Payment Processing

- InvoiceGuard must never store raw card numbers or bank account credentials; all card data handled exclusively by Stripe (PCI-DSS Level 1 certified), all ACH data via Plaid's vault.
- Stripe Connect must be used to route payments to contractor's bank account (not InvoiceGuard's), eliminating money-transmission licensing requirements.
- All payment pages must display the contractor's business name prominently so customers recognize the transaction.
- Refund capability must exist for disputed payments; refund flow managed through Stripe dashboard (not InvoiceGuard UI in MVP).

### Data Privacy

- All customer PII (name, email, phone, property address) encrypted at rest (AES-256) and in transit (TLS 1.2+).
- CCPA compliance for California contractors and customers: data deletion requests must be processable within 30 days.
- Contractor data is isolated per-tenant; no cross-contractor data access permitted at any level.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Primary innovation: Legal escalation layer for residential trades**

The combination of automated invoice escalation + state-specific pre-lien notice generation + FSM webhook bolt-on has no direct predecessor in the residential trade services market. Each capability exists in isolation (Jobber for FSM, PaidNice for escalation, Levelset for lien management), but no tool combines all three at a price point accessible to 3–15 tech shops.

The specific innovation is the **translation of commercial construction lien management into residential service trades** — a segment Levelset (Procore) explicitly does not serve. This requires:
1. Residential-specific pre-lien templates (different from commercial subcontractor notices)
2. Small-job attorney review economics (template-based, not per-job)
3. Consumer-friendly delivery (email + portal, not registered mail service only)

**Secondary innovation: No-card-on-file escalation**

The Jobber card-on-file gap is a platform constraint, not a feature gap. InvoiceGuard doesn't compete with Jobber's invoicing — it patches the automation gap that Jobber's architecture creates. This "bolt-on completes the platform" positioning is novel in the FSM ecosystem.

### Market Context & Competitive Landscape

No tool currently occupies the intersection point. Validated by:
- IdeaFast rating of "chasing unpaid invoices" as #2 pain (90/100) in 143-thread r/sweatystartup analysis
- Jobber card-on-file gap documented with Trustpilot complaint evidence
- Zero FSM platform with pre-lien functionality for residential trades (confirmed via competitor analysis)
- AR automation tools (PaidNice, Dueflo) are QuickBooks/Xero-only with no FSM integration

### Validation Approach

- **Pre-launch:** Beta test with 10 real contractors from r/sweatystartup or PHCC community with live invoices
- **Technical:** End-to-end escalation sequence tested with real Jobber and HCP sandboxes
- **Legal:** Attorney sign-off on all 10 state templates before launch
- **Market:** AppSumo LTD conversion rate as primary validation event (>2,000 units = validated demand)

### Risk Mitigation

- **Jobber patches card-on-file gap:** Mitigated by standalone value of pre-lien library (12–18 month lead time to replicate); InvoiceGuard becomes a legal tool with FSM integration, not an FSM feature.
- **Legal template inaccuracy:** Mitigated by state attorney review before deployment; indemnification clause in ToS that InvoiceGuard provides automation, not legal advice.
- **A2P 10DLC registration delay:** Mitigated by starting registration 6+ weeks before public launch; email-only fallback if SMS registration delayed.
- **Narrow contractor density in 10-state MVP:** 85%+ of US trade contractor density covered by CA, FL, TX, AZ, NY — top 5 states account for majority of market.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

- Each contractor account is a fully isolated tenant; no cross-account data exposure at any API endpoint.
- Tenant isolation implemented at the database query level (row-level security or schema-per-tenant pattern).
- A single contractor account supports multiple users (owner + office manager minimum); role-based access: Owner (full access) and Staff (dashboard + invoice actions, no billing or integration settings).

### Integration Architecture

- **Jobber OAuth:** Standard OAuth 2.0 authorization code flow. InvoiceGuard receives job completion webhook events; contractor authorizes read access to jobs, customers, and invoices. Webhook signature validation required for all incoming events.
- **Housecall Pro:** Inbound webhook endpoint accepting HCP job completion payloads. Contractor copies webhook URL from InvoiceGuard settings into their HCP account. HMAC signature validation required.
- **Stripe Connect:** Stripe Connect Express account for each contractor. Payments flow directly to contractor's connected account; InvoiceGuard collects platform fee (0% in MVP; 0.5% on ACH in Phase 2).
- **Plaid:** Plaid Link integration in payment portal. Bank verification and ACH authorization happen within Plaid's hosted flow; InvoiceGuard never sees raw credentials.
- **SMS Provider (Twilio):** A2P 10DLC registered messaging service. InvoiceGuard sends outbound SMS; all opt-out replies routed back via webhook for processing.

### Permission Model

| Role | Invoices | Dashboard | Escalation Control | Integrations | Billing |
|------|----------|-----------|-------------------|--------------|---------|
| Owner | Full CRUD | Full | Full | Full | Full |
| Staff | Read + status actions | Full | Pause/Resume | View only | None |

### Subscription & Billing

| Tier | Price | Features |
|------|-------|----------|
| LTD | $149 one-time | Core escalation engine, 10-state pre-lien, 1 FSM integration, payment portal |
| Base | $29/mo | Same as LTD; active support; future integrations as released |
| Pro | $49/mo | All Base + priority support + CSV export + multi-user access + API access |

LTD holders receive Base tier features permanently; upgrade path to Pro available.

### Technical Architecture Considerations

- **Escalation engine:** Event-driven scheduler (cron-based or queue-based) that processes all pending escalation steps daily at a configurable time (default: 9 AM contractor's local timezone).
- **Webhook receiver:** Separate high-availability service for Jobber and HCP webhook processing; must not share downtime budget with the main application.
- **PDF generation:** Server-side templating for pre-lien PDFs (HTML → PDF via headless browser or PDF library); generated PDFs stored in cloud object storage (S3 or equivalent) per-tenant.
- **Payment portal:** Stateless, publicly accessible pages (no auth required) that load invoice data via signed token in the payment link URL; tokens expire in 90 days.

---

## Functional Requirements

### Contractor Account Management

- FR1: Contractor can create an account with business name, trade type (HVAC, plumbing, electrical, cleaning, landscaping, or other), primary business state, and email/password.
- FR2: Contractor can connect their Jobber account via OAuth 2.0 to enable automatic invoice ingestion on job completion.
- FR3: Contractor can connect Housecall Pro via webhook URL by copying the InvoiceGuard-provided endpoint into HCP settings.
- FR4: Contractor can configure global escalation timing (Day 3/7/14/30 defaults, each adjustable to any value 1–60).
- FR5: Contractor can add a second account user (Staff role) with restricted access (dashboard + invoice actions, no billing or integration settings).
- FR6: Contractor can redeem an AppSumo LTD code at signup to unlock LTD tier features permanently.
- FR7: Contractor can subscribe to Base ($29/mo) or Pro ($49/mo) via Stripe-hosted checkout.
- FR8: Contractor can view and manage their billing history and change subscription tier.

### FSM Integration & Invoice Ingestion

- FR9: System receives Jobber job completion webhook events and auto-creates a pending invoice with customer name, email, phone, job address, and invoice amount.
- FR10: System receives Housecall Pro job completion webhook events and auto-creates a pending invoice with equivalent customer and job fields.
- FR11: Contractor can import outstanding invoices via CSV upload; required columns: customer name, email, phone, invoice amount, job completion date, property address.
- FR12: Contractor can manually create individual invoices by entering customer name, email, phone, amount, job date, and property address.
- FR13: System displays the real-time connection status of each configured FSM integration (Connected / Disconnected / Error).
- FR14: Contractor can disconnect a FSM integration and reconnect at any time without losing historical invoice data.

### Escalation Sequence Management

- FR15: System automatically sends a Day 3 SMS reminder to the customer's phone number with a payment link when the invoice is unpaid.
- FR16: System automatically sends a Day 7 formal email escalation to the customer's email when the invoice remains unpaid after the Day 3 SMS.
- FR17: System automatically generates and delivers a Day 14 state-specific pre-lien notice PDF to the customer's email when the invoice remains unpaid.
- FR18: System flags Day 30 unpaid invoices on the dashboard with a "Requires Action" indicator and prompts the contractor to manually escalate or refer to collections.
- FR19: Contractor can pause escalation for any individual invoice (e.g., payment arrangement in progress, customer dispute).
- FR20: Contractor can resume a paused invoice escalation from its paused sequence step.
- FR21: System halts all escalation steps and marks the invoice as Paid when a payment is confirmed via any channel.
- FR22: Contractor can customize the SMS reminder template and the email escalation template (subject, body) at the account level.
- FR23: Contractor can mark an invoice as paid-outside-portal (cash, check, direct bank transfer) to halt escalation and remove from outstanding balance.

### Pre-Lien Notice Generation

- FR24: System generates a state-specific preliminary notice PDF auto-populated with: contractor business name, contractor license number, customer name, property address, job description, invoice amount, and notice date.
- FR25: System tracks the lien rights deadline for each invoice based on the property state's statutory window and the job completion date.
- FR26: Dashboard displays a visible lien rights deadline countdown on each outstanding invoice where lien rights are still active.
- FR27: Dashboard displays a "Lien rights expired" warning badge on invoices where the statutory deadline has passed without a notice being sent.
- FR28: Contractor can download the pre-lien notice PDF from the invoice detail view for personal records or certified mail.
- FR29: System supports pre-lien notice generation for the 10 launch states: CA, FL, TX, AZ, NY, CO, WA, OR, NV, GA.
- FR30: For states where no preliminary notice is required (NY, CO, WA, GA), system sends a formal demand letter at Day 14 in lieu of a pre-lien notice.

### Customer Payment Portal

- FR31: Customer can access the payment portal via the link in any escalation message (SMS, email, pre-lien notice) without creating an account.
- FR32: Customer can pay the invoice via ACH bank transfer using Plaid Link (free to customer; 0.8% fee to contractor in Phase 2).
- FR33: Customer can pay the invoice via credit or debit card using Stripe (2.9% + 30¢ fee).
- FR34: Customer can view check payment instructions (payable-to name, mailing address) on the payment portal.
- FR35: Customer can download the original invoice PDF from the payment portal.
- FR36: Payment portal displays the invoice details clearly: service description, amount due, job date, contractor business name and contact.
- FR37: Customer receives an email payment confirmation within 60 seconds of a successful payment.

### Dashboard & Analytics

- FR38: Dashboard displays the contractor's total current outstanding receivables dollar amount.
- FR39: Dashboard displays the dollar amount recovered in the current calendar month with a comparison to the prior month.
- FR40: Dashboard displays the contractor's invoice collection rate as a percentage for 30-day, 60-day, and 90-day windows.
- FR41: Dashboard displays all invoices with per-invoice status: Sent / Reminder Sent / Pre-Lien Sent / Paid / Flagged for Collections / Paused.
- FR42: Contractor can filter the invoice list by status, date range, and amount.
- FR43: Dashboard displays a pre-lien deadline alert section listing invoices within 5 days of their lien rights expiry.
- FR44: Contractor can export invoice history as CSV for bookkeeping and QuickBooks import (Pro tier; available to all in Phase 2).
- FR45: Staff users can view all dashboard data and perform status actions (pause, mark paid, refer to collections) but cannot access billing or integration settings.

### Notifications

- FR46: Contractor receives an email and SMS notification within 5 minutes when a customer pays any invoice via the payment portal.
- FR47: Contractor receives an email notification when a pre-lien notice is sent on any invoice.
- FR48: Contractor receives a weekly email digest on Monday morning listing: outstanding balance, total collected last 7 days, number of pre-lien notices sent, invoices requiring action.
- FR49: Contractor can configure which notification types are delivered via email vs. SMS vs. both.

---

## Non-Functional Requirements

### Performance

- Customer payment portal pages load within 2 seconds for 95th percentile under normal load (< 500 concurrent portal visitors), measured by synthetic monitoring.
- Scheduled escalation events (SMS, email, pre-lien) are processed within 60 seconds of their trigger time, measured by queue processing latency monitoring.
- Contractor dashboard loads within 3 seconds for accounts with up to 500 outstanding invoices, measured by APM synthetic tests.
- Pre-lien PDF generation completes within 10 seconds of trigger, measured by server-side timing logs.
- Jobber and HCP webhook events are acknowledged (HTTP 200) within 5 seconds of receipt to prevent FSM retry flooding.

### Security

- All contractor and customer PII encrypted at rest using AES-256; all data in transit via TLS 1.2+.
- Raw payment card data never stored on InvoiceGuard infrastructure; card processing exclusively through Stripe (PCI-DSS Level 1 certified); bank data exclusively through Plaid's tokenization vault.
- Stripe Connect used for payment routing to eliminate money-transmission licensing requirements.
- Payment portal links use signed, expiring tokens (90-day TTL); no unauthenticated access to contractor-level data.
- Webhook endpoints validate HMAC signatures for all Jobber and HCP events before processing.
- All authentication endpoints rate-limited to prevent brute-force attacks (maximum 10 attempts per 15 minutes per IP).
- Tenant data isolation enforced at the database query layer (row-level security); no cross-tenant data access permitted.

### Reliability

- Escalation engine achieves 99.9% uptime (≤8.7 hours downtime/year) for scheduled event processing, measured by uptime monitoring.
- Customer payment portal achieves 99.9% uptime; payment failures directly block revenue collection.
- Webhook receiver achieves 99.95% uptime to prevent invoice ingestion data loss from FSM events.
- All third-party API failures (Jobber, HCP, Stripe, Plaid, SMS provider) handled with automatic retry logic (3 retries with exponential backoff) and contractor notification on persistent failure.
- Invoice and escalation data backed up daily with 30-day retention; recovery time objective (RTO) ≤4 hours.

### Scalability

- System supports 10,000 contractor accounts each processing up to 100 invoices/month (1M invoice-months capacity) without architectural changes.
- Escalation scheduler processes up to 50,000 daily escalation events across all tenants within a 1-hour processing window.
- Payment portal stateless architecture supports horizontal scaling without session-state dependencies.
- SMS and email delivery decoupled from the escalation scheduler via message queue to prevent delivery bottlenecks from blocking sequence progression.

### Integration

- Jobber OAuth integration supports all Jobber plan tiers (Core, Connect, Grow, Franchise) and handles token refresh automatically.
- Plaid integration uses Plaid's production Link environment; supports ACH bank verification and instant account verification where available.
- SMS delivery SLA: 95% of outbound SMS delivered within 60 seconds of queue dispatch, as measured by Twilio delivery receipts.
- All integration credentials (Jobber OAuth tokens, Plaid tokens, Stripe keys) stored encrypted at rest and rotated on contractor reconnection.
- API rate limits respected for all external services; backoff/retry logic implemented for rate-limit errors.

### Legal & Regulatory Compliance

- A2P 10DLC SMS registration completed before first customer SMS is sent; registration initiated minimum 6 weeks before public launch.
- TCPA opt-out: customer STOP replies processed within 24 hours; opted-out numbers permanently suppressed from further SMS.
- CCPA compliance: contractor data deletion requests processed within 30 days; customer data deletion processed within 30 days of contractor request.
- Pre-lien templates reviewed and signed off by a licensed construction attorney in each of the 10 launch states before deployment.
- All generated pre-lien PDFs include a disclaimer that InvoiceGuard provides document automation only, not legal advice.
- Audit log maintained for all escalation actions (what was sent, to whom, when, delivery status) retained for 7 years per contractor account (for lien dispute evidence).

---

*PRD complete. Ready for architecture creation using the AutoMVP pipeline.*

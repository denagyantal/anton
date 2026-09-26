---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/invoice-follow-up-automation-trades.md
  - _bmad-output/planning-artifacts/market-research-trade-invoice-automation.md
workflowType: product-brief
lastStep: 6
idea_name: trade-invoice-automation
date: 2026-09-26
author: Root
---

# Product Brief: Invoice Follow-Up Automation for Trade Contractors

---

## Executive Summary

**Product Name:** InvoiceGuard — Automated invoice escalation and pre-lien notice engine for trade contractors

**One-Liner:** Stop chasing late payments — InvoiceGuard automatically escalates unpaid invoices from friendly reminder to legally binding pre-lien notice, without requiring your customers to have a card on file.

**The Problem:** Trade contractors — HVAC techs, plumbers, electricians, cleaners, landscapers — lose 10–20% of outstanding receivables to slow-pay or no-pay customers every year. The existing toolchain fails them: Jobber's automated invoicing requires a saved card on file (blocking automation for 2/3 of customers), no FSM platform integrates state-specific pre-lien notices, and there is no standalone tool that bridges the gap between "invoice sent" and "collections referral." A 3-tech shop with $20,000 in outstanding receivables loses $2,000–$4,000 annually to this gap — recoverable with the right escalation tool.

**The Solution:** A standalone bolt-on that triggers on job completion (via webhook or manual import), then runs a fully automated 30-day escalation sequence: day-3 SMS reminder → day-7 formal email → day-14 state-specific pre-lien notice PDF → day-30 collections flag. Works for any customer, card on file or not. Integrates with Jobber and Housecall Pro without requiring a platform migration.

**Market Opportunity:** 500,000+ US trade contractors face this problem daily. The FSM market is $3.1B (2026) and growing at 7.5% YoY. No competitor occupies the intersection of (1) automated escalation without card-on-file requirement, (2) state-specific pre-lien notice generation, and (3) FSM webhook bolt-on for small shops. At $29/mo and 1% penetration of the addressable market, that's $1.74M ARR. The $149 LTD launch creates a rapid validation event with AppSumo's 5M+ registered users.

**Launch Strategy:** AppSumo LTD at $149 (targeting 2,000–5,000 users), seeded by authentic founder story in r/sweatystartup — the community where "chasing unpaid invoices" was rated the #2 pain (90/100) in a 143-thread analysis. Transition to $29/mo SaaS after proving recovery rates with real invoices.

**Confidence Level:** Very High — 98/105 signal score (triple-source validation: IdeaFast #2 pain rating, confirmed Jobber Trustpilot gap, zero FSM competitors with pre-lien + escalation). The legal layer (pre-lien notices) creates a defensible moat that a product patch from Jobber cannot easily replicate.

---

## Core Vision

### Problem Statement

Trade contractors in the US run their businesses on trust, labor, and word-of-mouth — and then watch a predictable percentage of that revenue evaporate into slow-pay customers and ignored invoices. A 3-tech HVAC shop carrying $20,000 in outstanding receivables at any given time is running an informal line of credit for customers who never asked for one and never pay interest.

The existing software ecosystem offers no escalation layer:

- **Jobber** — the dominant FSM for small shops — can only auto-charge invoices when a customer has already saved a card or bank account on file. For the majority of one-time or irregular customers (confirmed at 2/3 of customers in an October 2025 Trustpilot complaint from a plumbing business), automated invoicing simply does not exist.
- **Housecall Pro** handles one-click invoicing but has no automated reminder sequences, no escalation, and no pre-lien functionality. Its Trustpilot score has dropped from 3.7 to 2.9 since mid-2024 as frustration compounds.
- **ServiceTitan** has the most advanced invoicing — and starts at $245/tech/month, making it economically inaccessible for the 3–15 tech shops that make up the core of the US trades market.
- **Lien rights platforms** (Levelset, acquired by Procore) target commercial construction subcontractors and explicitly do not serve residential service trades.
- **AR automation tools** (PaidNice, Dueflo) are QuickBooks or Xero-only with no FSM integration and no contractor-specific workflows.

The result: trade contractors either chase invoices manually (losing 2–5 hours per week) or write off 10–20% of receivables as an unavoidable cost of doing business. Neither is necessary.

### Problem Impact

**Revenue impact per contractor:**
- Average outstanding receivables for a 3-tech shop: $15,000–$40,000
- Estimated 10–20% lost to slow-pay or no-pay without escalation: **$1,500–$8,000/year per shop**
- At $149 LTD, recovering one $500 invoice = 3.3x return. Recovering 5% of $18K outstanding = $900 = 6x LTD payback.
- 92% of businesses are paid after invoice due date (2025 data, up from 87% in 2022) — the problem is measurably worsening.

**Time impact per contractor:**
- Estimated 2–5 hours/week manually tracking overdue invoices, drafting reminders, and following up
- Social friction of chasing money from repeat customers damages long-term relationships
- Legal escalation (pre-lien notices) has strict state deadlines (20–45 days depending on state); missing the window permanently forfeits lien rights

**Market scale:**
- 500,000+ US trade contractors (HVAC, plumbing, electrical, cleaning, landscaping)
- 92% of construction and engineering firms are paid late; 55% wait 31+ days after due date
- 55% of all B2B invoiced sales in the US are currently past due
- Average US small business waits 43 days to receive payment after invoice

**Psychological impact:**
- Contractors feel personal friction when chasing money from customers they've built relationships with
- Automated escalation removes the social awkwardness while preserving customer relationships through professional, templated communications
- Pre-lien notice capability gives contractors a credible legal backstop without requiring an attorney

### Why Existing Solutions Fall Short

| Tool | What They Do | What's Missing |
|------|-------------|----------------|
| Jobber | #1 FSM for small contractors; auto-pay available | Requires card on file — blocks automation for 2/3 of customers; no pre-lien notices |
| Housecall Pro | One-click invoicing, mobile-friendly | No escalation sequences; no pre-lien; Trustpilot declining (3.7→2.9) |
| ServiceTitan | Best-in-class AR and invoicing | $245–398/tech/month — inaccessible to 3–15 tech shops by design |
| PaidNice | Full AR automation, escalation sequences | Xero/QuickBooks-only; no FSM integration; no pre-lien; targets professional services |
| Dueflo | SMS/email reminder sequences | QuickBooks-only; no FSM integration; no pre-lien; no contractor workflows |
| Levelset (Procore) | Leading pre-lien/lien rights platform | Targets commercial construction; not residential service trades; no invoice escalation |
| GoCardless | Recurring payment automation | Designed for subscription billing, not one-off contractor invoices; no escalation |
| Wave / Zoho | Free basic invoicing | No escalation sequences; no pre-lien; no FSM integration |

**The root gap:** No tool combines (1) automated escalation without card-on-file requirement, (2) state-specific pre-lien notice generation, and (3) FSM webhook bolt-on integration at an accessible price point for small trade shops. Every competitor has one or two of these capabilities; none has all three.

### Proposed Solution

InvoiceGuard is a standalone invoice escalation engine that activates on job completion and runs a configurable 30-day sequence without requiring any action from the contractor or the customer's payment credentials:

1. **Job completion trigger** — Webhook from Jobber/HCP on job completion, or manual invoice import (CSV, QBO)
2. **Instant invoice delivery** — Invoice sent to customer immediately via email, no card-on-file required
3. **Day 3 — SMS reminder** — Friendly tone: "Hi [Name], just a reminder that your invoice for [service] is ready. Tap here to pay: [link]"
4. **Day 7 — Email escalation** — Formal but non-confrontational: "This is a follow-up on invoice #[X] for [amount]. Payment is now 7 days past the completion date."
5. **Day 14 — Pre-lien notice** — State-specific preliminary notice PDF auto-generated and sent via certified mail template or email, preserving the contractor's lien rights
6. **Day 30 — Collections flag** — Manual escalation prompt in dashboard + optional collections referral integration
7. **Customer payment portal** — ACH, card, and check payment options on a mobile-friendly portal; no customer account required
8. **Dashboard** — Outstanding receivables total, amount recovered this month, collection rate vs. before InvoiceGuard, upcoming pre-lien deadlines

The positioning is not "invoice reminder software" — it is: **"Stop chasing late payments. InvoiceGuard does it for you — all the way to a legally binding notice."**

### Key Differentiators

1. **No card on file required** — Works for every customer, not just the 1/3 who have proactively saved a payment method. Directly addresses the #1 confirmed Jobber gap with a Trustpilot complaint as documented evidence.

2. **50-state pre-lien notice library** — The only tool that brings attorney-reviewed state-specific preliminary notices into a residential trade service workflow. ~35 US states have lien rights with strict deadlines (20–45 days). Missing the window forfeits lien rights permanently. InvoiceGuard tracks deadlines and auto-generates compliant notices.

3. **Bolt-on, not replace** — Contractors don't have to abandon their existing FSM. InvoiceGuard installs as a webhook integration alongside Jobber or HCP, adding the escalation layer that those platforms deliberately omit.

4. **Trades-native UX** — Built for contractors, not accountants. No Xero integration, no chart of accounts, no reconciliation workflow. Just: job done → money collected.

5. **ROI clarity** — The dashboard shows the literal dollar amount recovered vs. before InvoiceGuard. "You've recovered $1,847 this month that would have gone unpaid" is the retention mechanism. The ROI framing makes the $149 LTD an obvious purchase: one recovered invoice pays for the lifetime license.

---

## Target Users

### Primary Users

**Persona 1 — "Mike the HVAC Owner"**

*Background:* Mike runs a 4-tech HVAC shop in Phoenix, Arizona. He's been in business 11 years, does 15–20 jobs per week, and uses Jobber to manage scheduling and invoices. Revenue is around $1.2M/year. He has an office manager (his wife, part-time) but handles most customer communication himself. He's on his phone constantly but never at a desktop.

*Problem Experience:* Mike hits the Jobber card-on-file wall constantly. About 60% of his residential customers are first-time or annual service calls — they've never saved a card. For those customers, Jobber can't auto-charge after job completion, so Mike's wife has to manually track which invoices were paid and which weren't. Every Friday afternoon she sends reminder texts from her personal cell phone. It's embarrassing and time-consuming. Mike has written off about $8,000 in receivables this year that he eventually gave up chasing. He also had a customer dispute a $3,400 job last year; his attorney told him he missed Arizona's 20-day preliminary notice window, so he had no lien rights.

*Success Vision:* After InvoiceGuard, Mike's outstanding receivables clear faster. He doesn't think about invoice chasing — it just happens. His dashboard shows him $1,200 recovered in the first month. The pre-lien notice for that $3,400 job goes out automatically, day 14, with no attorney needed.

*Motivation:* ROI-first. Mike will do the math: if this tool recovers one $500 invoice per month, the $149 LTD paid for itself in the first month.

---

**Persona 2 — "Dave the Solo Plumber"**

*Background:* Dave is a solo plumber in Columbus, Ohio. He runs 8–10 jobs per week, revenue around $350K/year. He uses Housecall Pro for scheduling but invoices via a combination of HCP and emailed Word documents. He has no office staff. He's on job sites from 7am to 5pm and responds to business admin in the evenings.

*Problem Experience:* Dave has about $6,000–$9,000 outstanding at any time. He hates chasing customers for payment — it feels unprofessional and he worries about damaging relationships. He doesn't know Ohio's lien notice requirements and has never sent a pre-lien notice. He lost $2,100 last year on a kitchen re-pipe job where the homeowner disputed the bill and Dave had no legal leverage.

*Success Vision:* InvoiceGuard sends the follow-ups for him, professionally and automatically. He doesn't have to make the awkward call. His collection rate improves from roughly 85% to 95%. And the next time a homeowner disputes a big job, his lien rights are already preserved — automatically.

*Motivation:* Emotional — relief from the social friction of chasing money. Rational — one recovered $2,100 job is 14x the LTD cost.

---

**Persona 3 — "Lisa the Cleaning Business Owner"**

*Background:* Lisa owns a residential cleaning company in Austin, Texas with 6 cleaners. Revenue ~$800K/year. She uses Jobber for scheduling and invoicing. Her customers are a mix of weekly recurring (who have cards on file) and one-time deep cleans (who don't). She struggles specifically with the one-time customers, who are often the highest ticket jobs ($400–$800 per visit).

*Problem Experience:* Her recurring customers are fine — Jobber auto-charges them. But for one-time jobs, she's back to manual follow-up. She has a $4,000 backlog from one-time deep-clean customers from the last 90 days alone. She's also had two customers dispute charges and initiate chargebacks, which Stripe ruled against her because she had no signed service agreement or lien protection.

*Success Vision:* InvoiceGuard captures the one-time customer segment that Jobber's automation ignores. Her total outstanding receivables drop from $4,000 to under $500 per month. The built-in payment portal gives customers an easy ACH option (lower fees than card) with no account setup required.

*Motivation:* Specific pain with a known dollar amount. Lisa can calculate her collection gap precisely and see InvoiceGuard's ROI immediately.

### Secondary Users

**Office Managers / Bookkeepers** — For shops with dedicated admin staff (typically 10+ tech operations), the dashboard and escalation controls are used by an office manager rather than the owner directly. This persona values the audit trail (which notices were sent, when, to whom) and the integration with QuickBooks export for AR reconciliation.

**Trade Association Members** — PHCC members, HVAC Business Owners Facebook Group participants, and similar community members who recommend InvoiceGuard to peers after a positive experience. Not direct users but critical for viral growth through word-of-mouth in tight-knit trade communities.

### User Journey

**Discovery:**
- Sees r/sweatystartup thread: "How do you handle customers who won't pay?" — InvoiceGuard founder responds authentically with their own experience. Thread gets 200+ upvotes.
- Or: Jobber user Googles "Jobber auto invoice without card on file" — finds InvoiceGuard blog post titled "Why Jobber Can't Auto-Invoice 2/3 of Your Customers (And What To Do About It)"
- Or: AppSumo deal email — "Stop Chasing Late Payments: InvoiceGuard LTD $149"

**Consideration:**
- Visits landing page; key question answered above the fold: "Does my customer need to save a card? No."
- Reads Capterra/G2 reviews from HVAC and plumbing business owners
- Watches 2-minute screen recording: "Job completed in Jobber → InvoiceGuard sends SMS day 3, email day 7, pre-lien day 14"
- Calculates ROI using the embedded calculator: "Enter your average outstanding receivables → see estimated annual recovery"

**Decision:**
- LTD at $149 removes the recurring-fee objection
- 60-day AppSumo guarantee removes all remaining friction
- "One recovered invoice pays for it" framing makes the purchase feel risk-free

**Onboarding (First 48 hours):**
- Signs up, connects Jobber via OAuth webhook in under 5 minutes
- Imports any currently outstanding invoices via CSV
- Reviews default escalation sequence (day 3/7/14/30), optionally adjusts timing
- First automated reminder goes out to an existing overdue invoice — contractor watches it happen without doing anything

**First Value Moment (Day 14–30):**
- First pre-lien notice goes out automatically on a 14-day overdue invoice — contractor gets a notification: "Pre-lien notice sent for [Customer] — $[Amount]"
- Or: First payment received via the InvoiceGuard payment portal on a previously stuck invoice
- Dashboard shows "Amount recovered this month: $[X]"

**Evangelist Stage (Month 2+):**
- Contractor posts in r/sweatystartup: "I've been using InvoiceGuard for 6 weeks and recovered $2,400 I was about to write off. The pre-lien feature alone is worth it."
- Recommends to PHCC chapter peers; HVAC Facebook group discussion

---

## Success Metrics

### User Success Metrics

**Primary — Invoice Recovery Rate:**
- Metric: % increase in invoices paid within 30 days vs. baseline
- Target: Users report a 15–25% improvement in collection rate within 60 days of activation
- Measurement: Dashboard comparison of pre/post InvoiceGuard collection rates (tracked from onboarding baseline)

**Secondary — Time to First Recovery:**
- Metric: Time from signup to first payment received via InvoiceGuard payment portal
- Target: Median under 14 days
- Measurement: Activation funnel event tracking (signup → first webhook triggered → first payment collected)

**Tertiary — Pre-Lien Notice Utilization:**
- Metric: % of users who have at least one pre-lien notice sent in their first 30 days
- Target: 40%+ of active users trigger a pre-lien notice within first billing cycle
- Measurement: Event tracking on day-14 sequence step

**Retention Signal:**
- Metric: % of LTD users who connect a second integration (Housecall Pro after Jobber, or QuickBooks export) within 90 days
- Target: 25%
- Measurement: OAuth connection events

### Business Objectives

**Launch Phase (Months 1–3): Validation**
- 2,000 LTD units sold on AppSumo at $149 = **$298,000 launch revenue**
- 500+ verified contractor activations (at least one webhook connected and one invoice processed)
- 50+ G2/Capterra reviews from contractors in HVAC, plumbing, or electrical
- NPS from LTD cohort ≥ 40

**Growth Phase (Months 4–12): MRR Build**
- Convert 15% of LTD users to $29/mo paid tier (integrations + support)
- 300 MRR subscribers at $29/mo = **$8,700 MRR** ($104K ARR)
- 50 Pro subscribers at $49/mo (full FSM integration + 50-state library) = **$2,450 MRR**
- Total target: **$11,150 MRR by Month 12**
- Payment processing revenue: 0.5% on ACH payments processed (additional upside)

**Year 2 — Scale**
- 2,000 MRR subscribers across $29/$49 tiers = **~$60K MRR ($720K ARR)**
- Establish PHCC co-marketing partnership (access to 3,000+ member companies)
- Expand pre-lien library to all 50 states with attorney partnerships in each state

### Key Performance Indicators

| KPI | Target | Timeframe | Measurement Method |
|-----|--------|-----------|-------------------|
| AppSumo LTD units sold | 2,000–5,000 | Launch window (30 days) | AppSumo dashboard |
| Activation rate (webhook connected) | 70% of LTD buyers | Within 7 days of purchase | Product analytics |
| First invoice processed per user | 85% of activated users | Within 14 days | Event tracking |
| Invoice collection rate improvement | +15% vs. baseline | First 60 days | In-app dashboard comparison |
| Pre-lien notice utilization rate | 40% of active users | First 30 days | Event tracking |
| MRR conversion from LTD | 15% | Month 4–6 post-launch | Stripe MRR |
| G2/Capterra reviews | 50+ verified contractor reviews | Month 3 | Review platform monitoring |
| NPS | ≥ 40 | Month 2 in-app survey | NPS tool |
| Churn rate (MRR subscribers) | < 5%/month | Ongoing | Stripe |
| Payment processing volume | $500K/month by Month 12 | Month 12 | Stripe/Plaid |

**Leading Indicators (predict long-term success):**
- # of invoices processed per active user per month (engagement depth)
- % of users who use the pre-lien feature (signals legal-layer stickiness)
- Community mentions in r/sweatystartup and trade Facebook groups (organic growth signal)
- Referral rate (% of new signups who cite a peer recommendation)

---

## MVP Scope

### Core Features

**1. Invoice Escalation Engine**
- Job completion webhook (Jobber OAuth integration, HCP webhook)
- Manual invoice import via CSV for non-integrated FSM users
- Configurable escalation sequence: Day 3 / Day 7 / Day 14 / Day 30 (with defaults, adjustable per contractor)
- Day 3: SMS reminder with payment link (A2P 10DLC compliant)
- Day 7: Email escalation (formal tone, customizable template)
- Day 14: Pre-lien notice generation (see below)
- Day 30: Manual escalation flag + dashboard alert

**2. Pre-Lien Notice Generation (10-State MVP)**
Launch with the 10 highest-contractor-density states: CA, FL, TX, AZ, NY, CO, WA, OR, NV, GA
- State-specific preliminary notice PDF template (attorney-reviewed for each state)
- Auto-populated with job details, contractor license number, property address, invoice amount
- Sent via email (with certified mail tracking link option at extra cost)
- Pre-lien deadline tracker: contractor sees countdown on each outstanding invoice

**3. Customer Payment Portal**
- Mobile-optimized payment page (no customer account required)
- ACH bank transfer (Plaid integration, 0.8% fee)
- Credit/debit card (Stripe, 2.9% + 30¢)
- Check instructions (print/mail for older customers)
- Invoice PDF download for customer records

**4. Dashboard**
- Total outstanding receivables (synced from FSM or manual)
- Amount recovered this month (vs. last month comparison)
- Collection rate % (30-day, 60-day, 90-day views)
- Pre-lien deadline alerts (invoices approaching the state deadline window)
- Per-invoice status: Sent / Reminder Sent / Pre-Lien Sent / Paid / Flagged for Collections

**5. Basic Notification System**
- Email + SMS to contractor when invoice is paid
- Email to contractor when pre-lien notice is sent
- Weekly digest: outstanding balance, payments received, notices sent

### Out of Scope for MVP

- All 50 states pre-lien library (Phase 2 — requires legal review per state)
- Credit bureau reporting / negative reporting for chronic non-payers (Phase 2)
- Collections agency API integration (Phase 2 — manual referral in MVP)
- ServiceTitan integration (Phase 2 — serves larger shops that are secondary target)
- QuickBooks / Xero 2-way sync (Phase 2 — CSV export available in MVP)
- Dispute resolution workflow / mediation feature (out of scope entirely for v1)
- Customer account portal (customers don't need accounts to pay; YAGNI for MVP)
- AI-generated invoice content / line-item suggestions (out of scope for v1)
- Retainer / subscription billing features (GoCardless already owns this; not our market)

### MVP Success Criteria

**Technical Validation (before public launch):**
- End-to-end test with 10 real contractors from r/sweatystartup or PHCC community
- Jobber webhook integration verified across all Jobber plan tiers
- All 10 state pre-lien templates reviewed and approved by a licensed construction attorney
- A2P 10DLC SMS registration approved (4–6 week lead time — start immediately)
- Payment portal processing real transactions through Stripe and Plaid

**Market Validation (post-launch, 60-day gates):**
- 500+ contractors have processed at least one invoice through InvoiceGuard
- 200+ contractors report a measurable improvement in collection rates (via in-app survey)
- Pre-lien feature used by 40%+ of active users (confirms legal layer is not a gimmick)
- NPS ≥ 40 from LTD cohort
- At least 20 G2/Capterra reviews with 4+ star average

**Financial Validation:**
- LTD revenue covers 6 months of runway at lean burn rate
- 10%+ of LTD users voluntarily upgrade to $29/mo tier within 90 days (organic MRR signal)
- CAC from r/sweatystartup channel < $30 per LTD buyer

### Future Vision

**Phase 2 (Months 4–9): Full Legal Coverage + Platform Depth**
- Complete 50-state pre-lien library (all states, attorney-reviewed)
- Mechanic's lien filing integration (not just preliminary notice — actual lien filing)
- ServiceTitan webhook integration (opens 25+ tech shop segment)
- QuickBooks Online 2-way sync (AR reconciliation for shops with bookkeepers)
- Collections agency API (direct referral to a vetted collections partner; revenue share)
- Certified mail fulfillment (InvoiceGuard prints and mails pre-lien notice on contractor's behalf)

**Phase 3 (Months 10–18): AR Intelligence Layer**
- Credit bureau soft reporting (opt-in) for repeat non-payers
- "Payment risk score" — predict which new customers are likely to pay late based on address, job type, and regional payment behavior data
- Automated Good/Better/Best payment plan proposals for large invoices ($2,000+)
- Recovery report analytics: lifetime revenue recovered, state-by-state payment behavior patterns
- PHCC / trade association white-label offering (InvoiceGuard branded as a member benefit)

**Long-Term Vision (Year 2–3): Accounts Receivable Operating System for Trades**
InvoiceGuard evolves from a point solution (invoice escalation) into the full AR operating system for the trades industry: everything that happens after "job complete" and before "money in bank" — including payment processing, lien rights management, credit risk assessment, and collections workflow. The FSM platforms handle scheduling and job management; InvoiceGuard handles the financial back half of every job, for every customer, in every state.

The defensible moat: a proprietary database of state-specific lien law templates, payment behavior patterns by trade type and geography, and deep integrations with every major FSM platform. By the time Jobber or HCP patches their card-on-file gap, InvoiceGuard is the legal and financial layer that makes switching cost prohibitive.

---

*Product Brief complete. Ready for PRD creation using `create-prd` workflow.*

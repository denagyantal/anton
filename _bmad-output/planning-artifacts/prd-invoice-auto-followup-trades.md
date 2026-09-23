---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/invoice-auto-followup-trades.md
  - _bmad-output/planning-artifacts/research/market-invoice-auto-followup-trades-research-2026-08-30.md
  - _bmad-output/planning-artifacts/product-brief-invoice-auto-followup-trades.md
workflowType: prd
project_name: invoice-auto-followup-trades
user_name: Root
date: 2026-09-23
author: Root
classification:
  projectType: saas_b2b
  domain: fintech_adjacent / small_business_ops
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — ChaseIt: Invoice Auto-Follow-Up for Trades

**Author:** Root
**Date:** 2026-09-23
**Project:** invoice-auto-followup-trades
**Product Name:** ChaseIt

---

## Executive Summary

ChaseIt is a standalone, trades-specific invoice recovery SaaS that automatically sends SMS and email follow-up sequences on unpaid invoices, with a one-tap "Pay Now" link embedded in every message. It operates on top of any existing invoicing stack — Jobber, QuickBooks, HouseCall Pro, or manual — requiring zero platform migration.

**The problem:** 82% of US contractors experience payment delays exceeding 30 days. The average small business holds $17,700 in overdue invoices. The root cause is not forgetfulness — it is emotional friction. Tradespeople avoid follow-up because calling a customer about money feels aggressive and confrontational. The result: invoices pile up unpaid until the contractor writes them off or collects them months late. A documented case: a single plumber had $47K in uncollected receivables from not chasing.

**Why existing tools fail:** Jobber gates SMS follow-up behind its $80–$119/month Connect tier. QuickBooks and FreshBooks offer generic, corporate-tone email reminders that tradespeople don't trust. Chaser and BILL start at $95–$899/month and speak an accounting language foreign to a plumber. PayNudger (IH, 2026) is email-only with no trades positioning and no payment link. No standalone, SMS+email, trades-specific tool at the right price point exists.

**Validation:** 98/105 idea score across 6 independent signal events over 14 months. A comparable tool at $18K MRR confirmed after a 10-day rough MVP. Multiple 2026 Reddit threads confirm the emotional pain and the unmet market. HN Ask thread (39 points, 50 comments) validates the "WhatsApp/SMS manual follow-up gap."

**Revenue path:** ~500 customers at $19/month = $9.5K MRR. AppSumo LTD launch ($59–$79) provides the acquisition burst. r/sweatystartup (500K+) and adjacent Facebook groups are the primary acquisition channel.

### What Makes This Special

**The trades-specific positioning is the moat.** Generic AR automation speaks accounting; ChaseIt speaks plumber. Pre-built message templates are written with contractor voice — "Hi Mike, just checking on the invoice for your HVAC repair on the 14th" — not "Your account balance of $650 is past due." This alone removes the user's fear that the tool will embarrass them with a customer.

**The "Pay Now" link collapses the payment friction.** The sequence is: customer reads SMS → taps link → pays in 30 seconds. No invoice to find, no check to write, no bank transfer. The link is Stripe-powered and embedded in every message.

**Standalone positioning is the growth engine.** "ChaseIt works on top of Jobber Core — it's the follow-up feature Jobber charges $80/month for, at $19/month." This framing lets ChaseIt target the largest, most price-sensitive segment of Jobber's user base without requiring them to do anything disruptive.

**Visible ROI dashboard creates structural retention.** "$ recovered this month" shows users the money ChaseIt made them. Every billing cycle re-validates the tool. Churn requires ignoring evidence that the tool works.

## Project Classification

- **Project Type:** SaaS B2B (SMB-focused, self-serve with low-touch sales)
- **Domain:** Small business operations / payment recovery (fintech-adjacent)
- **Complexity:** Medium — Twilio A2P 10DLC registration, Stripe webhook integration, TCPA compliance requirements
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

Users succeed when ChaseIt automatically recovers money they would otherwise have lost or manually chased.

| User Outcome | Measurement | Target |
|---|---|---|
| Invoice recovered via ChaseIt reminder | % of new users who recover ≥1 invoice within 30 days of signup | >60% |
| Time to first recovery | Median days from signup to first ChaseIt-attributed payment | <7 days |
| Monthly recovery value | Avg $ recovered per user/month via ChaseIt-triggered sequences | $500 Month 1 → $1,500 Month 12 |
| Sequence automation rate | % of follow-up sequences completed without user manual intervention | >80% |
| Pay Now link utilization | % of recovered payments made via embedded Stripe link vs. other methods | >60% |

**The decisive retention signal:** First payment received via ChaseIt-triggered reminder. Users who hit this milestone within 30 days churn at <5%. Users who do not hit it within 60 days churn at >40%.

### Business Success

| KPI | Month 1 | Month 3 | Month 12 |
|---|---|---|---|
| Paying customers | 50 | 200 | 500 |
| MRR | $950 | $3,800 | $9,500 |
| AppSumo LTD units | 100 | — | — |
| G2/Capterra reviews | 10 | 30 | 100 |
| Monthly churn | <10% | <7% | <5% |
| Recovery rate | >40% of reminded invoices paid within 30 days | >50% | >55% |
| NPS | >60% | >70% | >75% |

**Leading indicators (predict success):**
- First-recovery rate within 30 days of signup: if >60%, structural churn resistance is in place
- Template edit rate: users who customize templates have 2x retention (investment signal)
- Dashboard login frequency: weekly logins indicate health; monthly-only is a churn warning

### Technical Success

- Follow-up sequences fire within ±15 minutes of scheduled trigger time
- SMS delivery confirmation rate >97% (Twilio delivery receipts)
- Email open rate >35% (trades users check email on phones)
- Stripe webhook processing latency <5 seconds (invoice status updates)
- Zero TCPA violations from opt-out handling (opt-outs processed within 1 business day)
- System uptime >99.5% measured monthly

---

## Product Scope

### MVP — Minimum Viable Product (2-week target build)

The MVP delivers exactly one outcome: an overdue invoice gets a reminder, the customer pays via an embedded link, the tradesperson sees it in a dashboard.

**Core user journeys supported:**
- Solo tradesperson connects Stripe, an invoice goes overdue, ChaseIt fires the sequence, customer pays via SMS link
- Solo tradesperson manually enters invoice, triggers sequence, monitors dashboard
- Customer receives SMS with "Pay Now" link and completes payment on mobile

**Must-have capabilities:**
1. Invoice input via Stripe webhook (primary) and manual entry form
2. 3-step follow-up sequence engine (Day 7, 14, 30) with configurable intervals
3. SMS delivery via Twilio (A2P 10DLC registered at launch)
4. Email delivery via Resend or SendGrid
5. 4 pre-built contractor-tone template sets (Plumbing, HVAC, Handyman, Cleaning)
6. Stripe Payment Link embedded in every SMS and email ("Pay Now")
7. Dashboard: outstanding invoices, total $ at risk, $ recovered this month, recovery rate, per-invoice activity log
8. Stripe OAuth account connection
9. Twilio phone number provisioning (one-click)
10. Customer opt-out handling (TCPA compliance)
11. Trade type selection during onboarding (controls template defaults)

### Growth Features — Phase 2 (Months 3–6)

- Jobber webhook integration (auto-pull overdue invoices from Jobber Core and Connect)
- QuickBooks Online sync (read-access to overdue invoices)
- HouseCall Pro CSV import
- SMS reply routing — customer objection/dispute flag triggers owner notification
- Late fee calculator — configurable late fee notice on Day 14 and Day 30 messages
- Recovery calculator on landing page
- Weekly email digest — outstanding invoices and recent recoveries summary
- Lien notice templates for >60-day invoices (formal escalation letter before small claims)
- Partial payment acceptance (custom checkout flow)
- Cleaning / landscaping / pest control template expansion

### Vision — Phase 3 (Months 6–18)

- AI-personalized follow-up messages (tone adapts to customer payment history)
- WhatsApp integration (international and high-adoption US markets)
- Predictive "likelihood to pay" scoring
- Auto-receipt + Google review request on payment (closes the job-to-cash loop)
- Embedded invoice factoring (advance 90% of outstanding invoice)
- Multi-user / team accounts with AR manager role
- Public API for FSM platform integrations
- Acquisition by Jobber / HouseCall Pro / ServiceTitan (5-year exit thesis at 5–8x ARR)

---

## User Journeys

### Journey 1: Marcus — The Reluctant Chaser (Primary — Happy Path)

**Context:** Marcus is a 42-year-old solo plumber on Jobber Core ($39/month). He invoices ~25 jobs/month at ~$450 average. He sends invoices from his phone at end-of-day and then avoids following up because "calling feels like begging." He estimates he loses $800–$1,500/month to unpaid invoices but has never calculated it.

**Opening Scene:** Marcus sees a r/sweatystartup post: "This tool recovered $6K I was about to write off." He clicks because $6K is exactly the number in his head. He lands on ChaseIt's homepage with a recovery calculator. He enters his numbers: 25 invoices/month, 15% overdue rate, $450 average → calculator shows "$810/month at risk." He signs up.

**Rising Action:** Onboarding takes 4 minutes. He selects "Plumbing" as his trade, connects his Stripe account via OAuth, and ChaseIt immediately scans for overdue invoices. It finds 3 — totaling $1,250. ChaseIt shows him the pre-built message templates: "Hi [Name], just a reminder about the invoice for your plumbing work on [date]. Easiest way to pay is [link]. Thanks, Marcus." He reads it and thinks: "That doesn't sound aggressive." He approves the default 7/14/30-day intervals and clicks Enable.

**Climax:** 36 hours later, Marcus gets a push notification: "Invoice #214 — $450 paid by Jordan T." He opens the app and sees it in the dashboard: "$ recovered this month: $450." The payment came in at 8:47 PM — Jordan paid from his couch after getting the SMS. Marcus didn't make a single call.

**Resolution:** Over the next 30 days, ChaseIt recovers 2 of the 3 flagged invoices ($850). The third is still outstanding. Marcus's dashboard shows "$850 recovered this month." He tells two plumbers at the supply house. His monthly loss drops from $1,100 to ~$300 — the one invoice the tool didn't reach in time. He doesn't cancel ChaseIt. He doesn't think about it. It just runs.

**Capabilities revealed:** Stripe OAuth onboarding, overdue invoice detection, automated sequence engine, SMS delivery, Pay Now link, dashboard with $ recovered, push/email notification on payment.

---

### Journey 2: Diane — The Cash-Strapped Operator (Primary — Large Invoice Edge Case)

**Context:** Diane runs a 4-person HVAC company. She manages QuickBooks invoicing herself. She has a mix of residential and small commercial clients. A $6,800 commercial invoice is 45 days past due — a property manager who "didn't get" the invoice until Diane called.

**Opening Scene:** Diane doesn't discover ChaseIt until after the $6,800 incident. Her bookkeeper mentions it during a reconciliation call: "You should set up automated reminders." Diane searches "automated invoice reminders for HVAC" and finds ChaseIt. The headline: "Never chase a customer again."

**Rising Action:** Diane doesn't use Stripe — she invoices through QuickBooks. She uses ChaseIt's manual invoice entry form: customer name, phone, email, amount, due date, job description. She enters her 4 current overdue invoices, ranging from $800 to $3,200. She picks the "HVAC" template set. The Day 14 template includes a late fee notice: "A late fee of $[amount] will be applied to invoices unpaid after 30 days." She enables it.

**Climax:** The $3,200 invoice pays on Day 8 — the customer calls Diane directly after getting the SMS, a little embarrassed, and pays over the phone with a credit card. Diane marks the invoice as paid manually in ChaseIt. The dashboard updates: "$ recovered: $3,200." She didn't have to initiate any contact.

**Resolution:** Diane now enters every new invoice into ChaseIt alongside QuickBooks. She's considering switching to Stripe to get automatic triggering. Her overdue AR drops from ~$12,000 to ~$3,000 in 60 days. She leaves a G2 review: "Recovered $3,200 on the first invoice. Pays for itself 100x over."

**Capabilities revealed:** Manual invoice entry, template editing (late fee), manual payment marking, multi-invoice management, activity log, export/reference for non-Stripe users.

---

### Journey 3: Tyler — The Early Adopter and Evangelist (Secondary — Power User)

**Context:** Tyler is 29, runs a handyman business with 1 subcontractor, does $15–25K/month in revenue. He's very active on r/sweatystartup and tries new software before everyone else. He uses Jobber for scheduling but invoices inconsistently.

**Opening Scene:** Tyler sees ChaseIt in an early beta announcement post. He DMs the founder and asks for early access. He gets it the same day.

**Rising Action:** Tyler connects Stripe, but he also wants to test the manual entry flow for Jobber invoices. He enters 8 overdue invoices — some from Stripe, some from Jobber exports. He reads every template, edits 3 of them to match his tone: "Hey [Name] — quick note about your invoice from last week." He sets different intervals per invoice group: 5/10/21 days instead of the default 7/14/30.

**Climax:** Tyler recovers 6 of 8 invoices in 3 weeks ($4,100 total). He posts on r/sweatystartup with his exact recovery numbers and screenshots of the dashboard. The post gets 312 upvotes. ChaseIt gets 90 signups in 48 hours.

**Resolution:** Tyler becomes ChaseIt's first named case study. He gets a referral commission link and earns $190/month from referrals within 60 days of launch. He's on the Jobber integration beta waitlist and is an active user in the ChaseIt community Slack.

**Capabilities revealed:** Power user template editing, custom interval configuration, mixed Stripe+manual workflow, dashboard sharing/screenshot, referral tracking, community evangelism.

---

### Journey 4: Customer — Jamie the Homeowner (Paying-End User)

**Context:** Jamie is a homeowner who hired Marcus for a $650 bathroom plumbing repair. The invoice arrived via email 3 weeks ago. Jamie meant to pay it but got busy. He's not trying to stiff Marcus — he just hasn't done it.

**Opening Scene:** Jamie gets an SMS: "Hi Jamie, just a quick reminder about the invoice for your bathroom plumbing work on Sep 4th. The easiest way to pay is this link: [Pay Now]. Thanks, Marcus – Marcus's Plumbing." Jamie reads it while waiting for coffee.

**Rising Action:** Jamie taps the Pay Now link. It opens a Stripe-hosted checkout page: "Marcus's Plumbing — Invoice #207 — $650." His phone autofills the saved Apple Pay / Google Pay. He pays in 12 seconds.

**Resolution:** Jamie gets a payment receipt instantly. He appreciates that he paid without having to find the original email invoice, log into a portal, or call Marcus. He actually thinks more highly of Marcus for having a clean payment process.

**Capabilities revealed:** SMS link rendering on mobile, Stripe Payment Link page, Apple Pay / Google Pay support, instant receipt, customer-facing UX that doesn't feel aggressive or debt-collection-ish.

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|---|---|
| Stripe OAuth + overdue invoice detection | Journey 1 |
| Automated multi-step sequence engine | Journeys 1, 2, 3 |
| SMS delivery (Twilio) with Pay Now link | Journeys 1, 2, 4 |
| Email delivery with Pay Now link | Journey 2, 4 |
| Manual invoice entry form | Journeys 2, 3 |
| Pre-built trades-specific template sets | Journeys 1, 2, 3 |
| User template editing / customization | Journey 3 |
| Custom interval configuration | Journey 3 |
| Dashboard with $ recovered, activity log | Journeys 1, 2, 3 |
| Manual payment marking | Journey 2 |
| Customer-facing Stripe payment page | Journey 4 |
| Opt-out / TCPA handling | Journey 4 (implied) |
| Push/email notification on payment | Journey 1 |

---

## Domain-Specific Requirements

This product operates in a TCPA-regulated communications domain with Stripe payments processing. Complexity is medium.

### Compliance & Regulatory

**TCPA (Telephone Consumer Protection Act):**
- SMS messages must include opt-out instructions on first contact ("Reply STOP to opt out")
- Customer opt-out requests must be honored within 1 business day
- ChaseIt must maintain opt-out records per customer phone number
- A2P 10DLC registration with Twilio required before SMS campaign goes live; campaign use case = "payment reminders"
- SMS messages must identify the business name in the message body
- Opt-out confirmation SMS must be sent automatically upon receipt of STOP reply

**Payment Processing:**
- ChaseIt does not hold customer funds — Stripe settles directly to contractor's Stripe account
- ChaseIt uses Stripe Payment Links (not custom checkout) for MVP, eliminating PCI-DSS scope
- Stripe OAuth tokens stored encrypted at rest; never logged or exposed in plaintext
- Stripe webhook endpoint must validate signatures using `stripe-signature` header

**Data Handling:**
- Customer PII (name, phone, email) stored only as necessary to deliver the sequence
- No customer payment card data stored in ChaseIt systems (handled entirely by Stripe)
- Data retention: customer contact data retained while contractor account is active; deleted on account cancellation within 30 days

### Technical Constraints

- Twilio A2P 10DLC: brand registration and campaign registration required before production SMS delivery; standard carrier filtering applies to unregistered numbers (messages blocked or marked spam)
- Twilio pricing: ~$0.0079/SMS (US); typical user sends 3–6 messages/invoice at 15–25 invoices/month = ~$0.35–$1.20/user/month SMS cost
- Resend/SendGrid email: ~$0.001/email; negligible at this scale
- Stripe webhook delivery: idempotent handlers required (Stripe retries failed webhooks up to 3 days)
- Deliverability: email from a custom domain with SPF/DKIM/DMARC configured to avoid spam filtering

### Risk Mitigations

| Risk | Probability | Mitigation |
|---|---|---|
| A2P 10DLC rejection delays launch | Medium | Register "payment reminders" use case early; keep message templates compliant during review |
| Twilio blocks payment reminder campaigns | Low | "Payment reminder" is a recognized low-risk use case; contractor-customer relationship is established |
| Customer disputes ChaseIt SMS as harassment | Low | Clear business identification in every message; opt-out on first message; tone guidelines in templates |
| Stripe Connect fee changes | Low | Stripe charges contractor; ChaseIt charges contractor separately; no pass-through dependency |

---

## SaaS B2B Specific Requirements

### Architecture Overview

ChaseIt is a lean SaaS web application:
- **Frontend:** Server-rendered web app (Next.js or SvelteKit) — mobile-responsive, no native app for MVP
- **Backend:** Node.js API service handling webhooks, sequence scheduling, message delivery
- **Database:** PostgreSQL (invoices, sequences, delivery logs, opt-outs)
- **Queue:** Bull/BullMQ with Redis for scheduled message jobs (sequence step delivery at configured intervals)
- **External APIs:** Twilio (SMS), Resend (email), Stripe (OAuth + Payment Links + webhooks)
- **Hosting:** Vercel (frontend) + Railway/Render (API + workers) or single-platform deployment

### Multi-Tenancy Model

- Each contractor account is a tenant
- Data is isolated by `account_id` on all tables
- No tenant can read another tenant's invoices, sequences, or customer data
- Stripe OAuth: each contractor connects their own Stripe account; ChaseIt accesses it via OAuth token scoped to read invoices and create Payment Links

### Authentication & Authorization

- Email/password authentication with secure session management (cookie-based JWTs)
- Magic link login as secondary option (reduces friction for tradespeople on mobile)
- Single-user accounts for MVP; multi-user accounts deferred to Phase 2
- Twilio phone numbers assigned per account (one number per contractor for MVP)

### Integration Architecture

- **Stripe webhook listener:** receives `invoice.payment_failed`, `invoice.overdue`, `invoice.paid` events; triggers sequence start or sequence cancellation
- **Twilio messaging service:** all outbound SMS routed through registered A2P campaign; delivery status webhooks update ChaseIt delivery log
- **Resend:** transactional email; delivery events (open, click, bounce) update ChaseIt delivery log
- **Stripe Payment Links:** created per-invoice via Stripe API; embedded in message templates as `{{pay_link}}`

### Onboarding Flow

1. Sign up with email/password
2. Select trade type (Plumbing / HVAC / Handyman / Cleaning / Other)
3. Connect Stripe account (OAuth) OR skip and enter invoices manually
4. Review pre-built template set for selected trade
5. Set sequence intervals (default 7/14/30 days; adjustable)
6. Provision Twilio phone number (one-click; handled by ChaseIt API)
7. Enable sequences — first batch triggers within 24 hours

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove that automated SMS+email sequences with a Pay Now link recover invoices that tradespeople would otherwise lose or manually chase. The MVP does not need to be polished; it needs to demonstrate the core recovery loop working end-to-end for real invoices.

**Resource Requirements:** 1 full-stack developer; 2-week build timeline. No design system required — clean, functional UI acceptable for MVP.

### MVP Feature Set

**Core user journeys supported:**
- Stripe-connected contractor with overdue invoices → automated sequence → customer pays via SMS link
- Manual-entry contractor → sequence → payment confirmation

**Must-have capabilities (in build priority order):**
1. Stripe OAuth + overdue invoice sync
2. Manual invoice entry
3. Sequence engine (scheduled jobs, 3-step default)
4. Twilio SMS delivery + opt-out handling
5. Email delivery (Resend)
6. Stripe Payment Link creation per invoice
7. Template editor (4 trade types, editable)
8. Dashboard (outstanding, $ at risk, $ recovered, activity log)
9. Account setup (trade type, Stripe, Twilio phone provisioning)
10. Stripe webhook listener (invoice.paid → sequence cancellation)

### Post-MVP Roadmap

**Phase 2 (Months 3–6) — Integration Layer:**
- Jobber webhook integration
- QuickBooks Online sync
- SMS reply routing to owner
- Late fee notices in templates
- Recovery calculator (landing page)
- Weekly digest email
- Lien notice templates
- Partial payment acceptance

**Phase 3 (Months 6–18) — Platform:**
- AI-personalized messages
- WhatsApp integration
- Predictive payment scoring
- Auto-receipt + review request
- Invoice factoring
- Multi-user accounts
- Public API

### Risk Mitigation Strategy

**Technical Risks:** A2P 10DLC approval timeline (1–3 weeks) is the only hard dependency that could delay launch. Mitigation: register campaign on Day 1 of build; use test numbers internally during registration review. All other technical elements (Stripe, Resend, queue) are standard, well-documented integrations.

**Market Risks:** If the comparable $18K MRR tool (r/SaaS, 2026) pivots to add trades positioning, differentiation narrows. Mitigation: establish trades community brand on r/sweatystartup and Facebook groups before the clone has community traction.

**Resource Risks:** If timeline slips, cut email delivery for MVP and launch SMS-only. Trades customers are heavier SMS users; core value proposition holds on SMS alone.

---

## Functional Requirements

### Invoice Management

- FR1: Contractor can connect their Stripe account via OAuth to automatically sync overdue invoices
- FR2: Contractor can manually enter invoice details (customer name, phone, email, amount, due date, job description)
- FR3: Contractor can upload a CSV of overdue invoices for batch import
- FR4: Contractor can view all outstanding invoices with amount, days overdue, and current sequence position
- FR5: Contractor can manually mark an invoice as paid
- FR6: Contractor can cancel an active follow-up sequence for a specific invoice
- FR7: System detects when a Stripe-linked invoice is paid and automatically stops its follow-up sequence
- FR8: Contractor can archive resolved invoices (paid, cancelled, disputed)

### Follow-Up Sequence Engine

- FR9: System automatically triggers a 3-step follow-up sequence when an invoice becomes overdue by more than the configured grace period
- FR10: Contractor can configure the interval between each sequence step (default: Day 7, Day 14, Day 30 past due date)
- FR11: System sends Step 1 (friendly reminder) at configured Day 7 interval via SMS and email
- FR12: System sends Step 2 (firmer reminder) at configured Day 14 interval via SMS and email
- FR13: System sends Step 3 (final notice) at configured Day 30 interval via SMS and email
- FR14: System pauses a sequence when the customer's phone number is on the opt-out list
- FR15: System logs delivery status (sent, delivered, failed, opened, clicked) for each message in a sequence
- FR16: Contractor can manually trigger a sequence step outside the normal schedule

### Message Templates

- FR17: Contractor can select from 4 pre-built template sets: Plumbing, HVAC, Handyman, Cleaning
- FR18: Contractor can edit any template message body using template variables (customer name, invoice amount, job description, pay link, business name)
- FR19: Each template supports three tone levels: Friendly (Step 1), Firm (Step 2), Final Notice (Step 3)
- FR20: Contractor can preview a template with sample variable substitution before saving
- FR21: Contractor can reset a customized template to the pre-built default
- FR22: Template changes apply to new sequences only; active sequences continue with the template in use at sequence start

### Payment Links

- FR23: System generates a unique Stripe Payment Link for each invoice and embeds it in all SMS and email messages for that invoice
- FR24: Customer can complete payment via the embedded Stripe Payment Link in a mobile browser without creating an account
- FR25: System detects Stripe payment completion and marks the invoice as paid in the ChaseIt dashboard within 60 seconds of payment
- FR26: Payment Link supports Apple Pay, Google Pay, and card entry

### Dashboard & Reporting

- FR27: Contractor can view total outstanding invoice count and total $ at risk on the dashboard
- FR28: Contractor can view total $ recovered this month and this year via ChaseIt-attributed payments
- FR29: Contractor can view recovery rate (% of followed-up invoices paid within 30 days)
- FR30: Contractor can view per-invoice activity log (message sent timestamp, delivery status, payment timestamp)
- FR31: Contractor receives an in-app notification when a followed-up invoice is paid

### Account & Onboarding

- FR32: Contractor can create an account with email/password
- FR33: Contractor can select trade type during onboarding (controls default template set)
- FR34: Contractor can provision a dedicated Twilio SMS phone number through the ChaseIt interface
- FR35: Contractor can update business name and trade type in account settings
- FR36: Contractor can disconnect and reconnect their Stripe account
- FR37: Contractor can deactivate their account and receive confirmation that sequences will stop and data will be deleted within 30 days

### Compliance & Opt-Out

- FR38: Every first-contact SMS includes an opt-out instruction ("Reply STOP to opt out")
- FR39: System processes customer opt-out reply (STOP) and adds the phone number to the contractor's opt-out list within 1 business day
- FR40: System sends an opt-out confirmation SMS to the customer upon processing their STOP request
- FR41: Contractor can view and manage their customer opt-out list
- FR42: System prevents sending messages to any number on the opt-out list, regardless of invoice status

---

## Non-Functional Requirements

### Performance

- Dashboard loads in under 2 seconds for 95th percentile under normal load (up to 500 concurrent active users)
- Stripe webhook processing completes within 5 seconds of receipt (invoice.paid triggers sequence cancellation and dashboard update)
- Scheduled sequence jobs fire within ±15 minutes of their configured trigger time
- SMS and email delivery jobs enqueued within 30 seconds of sequence trigger

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Stripe OAuth tokens stored encrypted; never logged
- Stripe webhook signatures validated on every request using `stripe-signature` header
- Twilio webhook signatures validated using Twilio Auth Token
- Customer PII (name, phone, email) access restricted to the owning contractor's account
- Contractor authentication sessions expire after 30 days of inactivity
- Password storage: bcrypt with minimum work factor of 12

### Reliability

- System uptime >99.5% measured monthly (excluding scheduled maintenance)
- Scheduled message jobs are durable: queue persists across server restarts (Redis AOF or equivalent)
- Failed message delivery retries 3 times with exponential backoff before marking as failed
- Stripe webhook handler is idempotent: duplicate webhook events do not create duplicate actions

### Scalability

- MVP infrastructure supports 500 active accounts with up to 50 invoices/account = 25,000 tracked invoices
- Message queue architecture supports horizontal worker scaling when volume increases beyond MVP tier
- Database indexing designed for per-account invoice queries (not full-table scans at scale)

### Integration

- Stripe webhook endpoint complies with Stripe's retry and idempotency requirements
- Twilio A2P 10DLC campaign registration completed before production SMS delivery
- Email sending domain configured with SPF, DKIM, and DMARC records to minimize spam filtering
- Stripe Payment Links created with a 30-day expiry; system generates new link if expired before invoice is paid

### Compliance

- TCPA opt-out processing within 1 business day of customer reply
- Opt-out records retained for the lifetime of the contractor account
- First SMS to each customer includes opt-out instruction in message body
- All SMS messages identify the contractor's business name
- No customer card data stored in ChaseIt systems; Stripe handles all PCI-DSS scope

---

*PRD Complete — ChaseIt: Invoice Auto-Follow-Up for Trades*
*Generated: 2026-09-23 | Based on product brief dated 2026-09-23 | Market research dated 2026-08-30 | Idea score: 98/105 (6 signal events)*

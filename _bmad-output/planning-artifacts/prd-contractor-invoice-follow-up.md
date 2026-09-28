---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/contractor-invoice-follow-up-automation.md
  - _bmad-output/planning-artifacts/research/market-contractor-invoice-follow-up-research-2026-09-27.md
  - _bmad-output/planning-artifacts/brief-contractor-invoice-follow-up.md
workflowType: prd
project_name: contractor-invoice-follow-up
user_name: Root
date: 2026-09-28
classification:
  projectType: saas_b2b
  domain: business_operations
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document: Contractor Invoice Follow-Up Automation

**Author:** Root
**Date:** 2026-09-28
**Status:** Ready for Architecture

---

## Executive Summary

Independent contractors — HVAC technicians, plumbers, landscapers, electricians, roofers, fence builders — routinely absorb $200–800/month in unpaid invoices because manual follow-up feels worse than the loss. The emotional cost of chasing a homeowner (risking referral relationships that built the business) paralyzes action. Existing tools make this worse: QuickBooks email reminders are documented as corporate dunning notices that customers filter as spam; CraftBoop's email-only sequences ignore that SMS achieves 45% response rates vs. email's 6%.

This product automates the entire AR follow-up cycle via SMS-first, tone-calibrated sequences that fire automatically when invoices go overdue. Contractors connect their Stripe account once (~15 minutes), configure default templates once, and the system handles follow-up invisibly: Day 1 (friendly check-in) → Day 4 (polite reminder + payment link) → Day 10 (firm notice) → Day 20 (final notice). When a customer replies, the sequence pauses automatically. When payment clears, a Google review request fires. Contractors stop thinking about AR as a task.

**Target users:** Solo contractors (1-person operations, 10–50 invoices/month) and small crew operators (2–10 person teams, 40–150 invoices/month) in trades — HVAC, plumbing, landscaping, electrical, fencing, roofing.

**The pitch:** Automated SMS + email follow-up sequences for every overdue contractor invoice — friendly → polite → firm → final notice, automatically — so getting paid stops depending on who remembered to text.

### What Makes This Special

**SMS-first architecture** is the core differentiator. No dedicated, affordable, SMS-first contractor invoice follow-up tool exists. CraftBoop validated the category at $29/month with email-only sequences — leaving the SMS gap uncontested. SMS achieves 98% open rates and 45% response rates; email achieves 20–25% open / 6% response. For contractor-to-homeowner collections, this is a category difference, not marginal improvement.

**Tone calibration built for contractor relationships** is the second differentiator. Default templates are pre-written to sound like the contractor personally — not like a dunning notice. Each step escalates naturally. The "friendly on Day 1" approach is what allows contractors (who otherwise avoid follow-up entirely) to trust the automation.

**Relationship preservation mode** removes the primary objection. When a customer replies at any point, the sequence pauses immediately and the contractor is notified. No automated message goes out while a live conversation is happening. This is the single feature that resolves the core contractor fear: "what if they're already dealing with it?"

**Zero-touch trigger via Stripe webhook** removes the biggest failure point (remembering to follow up). When an invoice passes its due date, the sequence fires without any manual action.

**Google review bundled into payment confirmation** adds a second free value driver: when Stripe reports payment received, a review request SMS fires automatically. Contractors currently pay $29–99/month for standalone review request tools.

## Project Classification

- **Project Type:** SaaS B2B web application (SMB/contractor-focused)
- **Domain:** Business operations — accounts receivable automation
- **Complexity:** Medium (Twilio A2P 10DLC compliance, Stripe webhook integration, multi-channel messaging)
- **Project Context:** Greenfield — no existing system; full product from scratch

---

## Success Criteria

### User Success

Contractors succeed when AR follow-up stops requiring their time or emotional bandwidth:

- **Invoice recovery rate:** ≥60% of sequenced invoices paid within 21 days (Month 3 cohort); ≥70% at Month 12
- **Days-to-payment reduction:** Users reduce average days from invoice-sent to payment-received by ≥40% within 90 days of signup (target: industry average 28 days → under 12 days)
- **Aha! moment:** ≥50% of users who connect Stripe and launch a first sequence receive a confirmed payment within 48 hours
- **Onboarding completion:** ≥80% of signups who connect Stripe launch their first sequence within 48 hours
- **Time to first sequence send:** Under 20 minutes from account creation to first SMS sent
- **Review request conversion:** ≥25% of payment-triggered review requests yield a new Google review within 7 days

### Business Success

- **Month 3:** 100 paying customers; $3,500 MRR equivalent; 150+ AppSumo LTD sales; NPS > 50
- **Month 6:** 250 paying customers; $8,500 MRR; top-3 organic ranking for "invoice reminder app for contractors"
- **Month 12:** 600 paying customers; $22,000 MRR; monthly churn < 5%; 100+ G2/Capterra reviews averaging 4.5+
- **AppSumo signal:** 100+ LTD sales in first 30 days validates market demand for scaling

### Technical Success

- **SMS delivery rate:** ≥95% for A2P 10DLC registered messages
- **Webhook reliability:** Stripe overdue detection fires within 5 minutes of invoice due date passing; payment confirmation fires within 2 minutes of `payment_intent.succeeded` event
- **Reply detection:** Inbound customer SMS processed and sequence paused within 60 seconds
- **A2P 10DLC compliance:** Brand and campaign registration approved before production SMS launch; zero carrier filtering blocks
- **Uptime:** 99.5% availability during business hours (6 AM–10 PM user local time)

### Measurable Outcomes

| Outcome | Target | Measurement |
|---------|--------|-------------|
| Avg invoices recovered/user/month | 4+ at Month 6 | Dashboard aggregate |
| Avg dollar value recovered/user/month | >$1,200 | Dashboard aggregate |
| SMS open rate | >90% | Twilio delivery + link click rates |
| SMS response rate | >35% | Inbound reply detection |
| Sequence completion rate (Day 20 reached) | >30% (implies 70%+ resolve before Day 20) | Sequence state engine |
| LTD to monthly subscription conversion | >15% within 6 months | Revenue tracking |

---

## Product Scope

### MVP Strategy & Philosophy

**MVP approach:** Revenue MVP — the product must recover real invoices within the first 48 hours for early users. Every scoping decision filters through: "does this directly support invoice recovery?" The learning signal is a payment confirmation, not a user survey.

**Resource requirements:** 1 full-stack developer; 2–4 weeks to functional MVP. Primary technical work: Stripe OAuth integration + sequence scheduling engine + Twilio SMS delivery + reply-pause logic.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Solo contractor connects Stripe, sees overdue invoices, launches first sequence within 15 minutes
- Contractor receives payment notification after sequence fires — zero manual action taken
- Customer replies to sequence — sequence pauses automatically, contractor is notified
- Payment clears — review request SMS fires automatically

**Must-have capabilities:**

1. **Stripe Invoice Integration** — OAuth connection, overdue invoice detection, customer name + phone pull, `payment_intent.succeeded` webhook handling
2. **4-Step Sequence Engine** — Day 1/4/10/20 default cadence, SMS via Twilio, email on Days 4 and 10, Stripe Payment Link embedded in every message
3. **Pre-written tone-calibrated templates** — Default templates for all 4 steps (friendly → polite → firm → final); contractor can edit but doesn't have to
4. **Relationship preservation mode** — Inbound reply detection, auto-pause, contractor email notification with customer reply content
5. **Google review request on payment** — Fires via SMS when Stripe confirms payment; contractor configures Google review link once in settings
6. **Dashboard** — List of all invoices (not yet due / overdue / in sequence / paused / paid); sequence step status per invoice; monthly recovery summary (invoices sequenced, recovered, $ recovered)
7. **CSV fallback import** — Upload CSV with customer name, phone, email, invoice number, amount, due date; system creates sequences from CSV data
8. **A2P 10DLC infrastructure** — Twilio brand + campaign registration; STOP/HELP keyword handling; compliant messaging footer

**Out of scope for MVP:**

| Feature | Reason |
|---------|--------|
| Jobber / Housecall Pro API integration | +3–4 weeks; CSV covers these users |
| QuickBooks / FreshBooks integration | High complexity; Stripe covers tech-forward segment |
| Multi-user / team accounts | Adds auth complexity; solo operator is the MVP buyer |
| Drag-and-drop sequence builder | Pre-written templates cover 90% of use cases |
| AI-generated personalized messages | Adds cost and complexity; not needed for core value |
| AI dispute detection | High-value V2; pause-on-reply covers MVP case |
| Invoice factoring / payment advance | Long-term monetization layer; not MVP value |
| White-label / accountant multi-client dashboard | V2 persona; multi-tenancy complexity |
| Native mobile app | Mobile-responsive web covers MVP |
| Slack / Zapier integrations | Nice-to-have; not core |
| Analytics beyond recovery dashboard | Not needed to prove value |

### Post-MVP Features

**Phase 2 — Integration Depth (Month 4–9):**
- Jobber API integration (read invoices automatically; no CSV required)
- Housecall Pro API integration
- QuickBooks basic sync (poll for overdue invoices)
- AI dispute detection (identifies when customer reply signals a dispute vs. payment timing; flags for contractor with suggested response)
- Tone selector: "Friendly," "Professional," or "Firm" sequence style at account level
- Multi-currency (CAD, AUD) for Canadian/Australian contractor markets
- Team accounts (2–10 person operations, shared dashboard)

**Phase 3 — Platform Expansion (Month 10–18):**
- Accountant/bookkeeper dashboard (manage AR across 10–20 client contractor accounts)
- Real-time cash flow forecast ("Based on 12 open sequences, expect ~$4,200 in next 14 days")
- Referral program ($10/month credit per referred paying user)
- Adjacent market expansion: freelancers, photographers, event planners (same problem; different tone templates)
- Invoice factoring/advance ("Customer hasn't paid in 30 days — want an advance at 3%?")
- White-label licensing to accounting platforms lacking SMS capability

---

## User Journeys

### Journey 1: Marcus — The Relationship-Preserving Solo Contractor (Primary — Success Path)

Marcus is a 38-year-old HVAC technician in Phoenix with an 8-year business built on referrals. He invoices via QuickBooks, does 30–50 jobs/month, and is comfortable with basic software. He's tried QB's automated reminders once — a customer complained they were "corporate and rude" — and turned them off. Now he either sends a manual WhatsApp message (awkward, inconsistent) or writes the invoice off.

**Opening:** Marcus hears about the product from a post in r/sweatystartup where another HVAC tech describes recovering $400 in one week. He visits the landing page and reads the ROI calculator: "If you recover one $400 invoice per month, you make back your annual subscription in 1 month." He signs up.

**Onboarding:** He connects Stripe via OAuth in 3 clicks. The dashboard immediately shows him 4 invoices that are overdue — names he recognizes. The system shows him a pre-written Day 1 template: "Hey [Name], hope everything went great with the job last week. Just wanted to check in — I noticed Invoice #[X] for $[Amount] might have slipped through. No rush, just let me know if you have any questions! [Payment Link]". He reads it, thinks "this is exactly how I'd say it," and clicks "Start Sequence" for 3 of the 4 invoices. The fourth (a long-term customer) he decides to handle manually.

**Core experience:** The next morning, he gets an email notification: "Payment received — $340 from [Customer Name]. Google review request sent automatically." He opens the dashboard: sequence completed in 18 hours. He didn't do anything. He calls the second contractor he heard about this from and says "you were right."

**Ongoing pattern:** Marcus stops thinking about late invoices as a task. He checks the dashboard once a week for 2 minutes to make sure nothing needs his attention. His "days to payment" average drops from 24 to 9 days. In month 2, he recovers 3 invoices he would have written off (~$780 total). In month 3, he posts his own r/sweatystartup comment.

**Journey requirements revealed:** Stripe OAuth connection, overdue invoice detection, pre-written templates (editable but not required), one-click sequence start, email notification on payment, dashboard with recovery history.

---

### Journey 2: Diane — The Growing Crew Operator (Primary — Scale Path)

Diane runs a 4-person landscaping crew in suburban Chicago. She invoices 40–80 jobs/month. Her office manager (her sister) manually checks QuickBooks once a week and occasionally sends follow-up calls — but "it feels weird to call a customer when we just spent 3 hours on their lawn." In any given month, 8–15 invoices are 14+ days overdue.

**Opening:** Diane sees a Facebook ad targeting "landscaping business owners" that shows a screenshot: "Dashboard: 11 sequences active — $3,840 in outstanding invoices being followed up automatically." She clicks.

**Onboarding:** Diane doesn't use Stripe — she uses Jobber, which isn't integrated yet. She downloads her overdue invoices as a CSV from Jobber and uploads it. The system parses the file, shows her 12 matched records, and asks her to confirm phone numbers (some are missing — she fills in 6 of 12 manually). She launches sequences for the 6 with confirmed phone numbers.

**Core experience:** Within 3 days, 4 of the 6 customers have paid. One customer replied "sorry, been traveling — can you resend the link?" — the sequence paused, she got a notification with the reply content, she forwarded the payment link, customer paid within an hour. Total recovered in week 1: $1,840.

**Edge case:** One customer, a homeowner she's worked with for 3 years, got the Day 10 "firm notice" and texted back "this is ridiculous, I've always paid you." Sequence paused immediately. Diane was notified. She called him, apologized, explained it was automated, and he paid that day. She then excluded him from future auto-sequences by toggling "manual only" on his record.

**Journey requirements revealed:** CSV import with bulk sequence launch, inbound reply detection and contractor notification with reply content, per-customer manual override / exclusion, dashboard showing active sequences with total $ outstanding.

---

### Journey 3: Jamie — The Tech-Forward Solo (Primary — Fast Setup)

Jamie is a 29-year-old electrician/low-voltage contractor in Miami who already uses Stripe for invoicing and listens to r/sweatystartup on YouTube. He's Googled "SMS invoice reminder small business" twice in the past year. He'd sign up based on a single Reddit comment if the product looked credible.

**Opening:** Jamie sees a comment in r/sweatystartup: "[Product] just recovered $600 for me in 3 days. Stripe webhook, set it up in 10 mins, works automatically." He signs up directly, no research.

**Onboarding:** OAuth Stripe connection takes 2 minutes. 3 overdue invoices appear. He approves the default templates without reading them and launches all 3 sequences. Total setup time: 8 minutes.

**Aha! moment:** 6 hours later, he gets a Stripe payment notification and the product's email: "Sequence completed — $275 recovered." He texts the product link to two contractor friends.

**Journey requirements revealed:** Sub-10-minute Stripe OAuth onboarding, approve-default-templates flow (minimum friction), mobile-responsive dashboard (contractors work from phones), payment notification via email within 2 minutes of Stripe webhook.

---

### Journey 4: Sarah — The Office Manager (Secondary — Operations Path)

Sarah manages invoicing and customer communication for her husband's 6-person plumbing company. She's the actual user of the product — not the contractor. She checks the dashboard daily, manages which sequences are active, and fields the contractor-notification emails when customers reply.

**Opening:** Her husband signed up after a trade show. He showed her the product and said "figure this out." She connected Stripe, imported the past 30 days of overdue invoices, and launched 7 sequences.

**Core experience:** She checks the dashboard every morning. She sees sequence status per invoice, notes which customers have replied (3 this week), and reviews the recovery summary ($2,100 recovered this month vs. $400 last month). She adjusts a Day 1 template to match her husband's voice more closely. She sets up their Google review link so review requests go to the right place.

**Journey requirements revealed:** Dashboard with clear status per invoice, per-template editing, Google review link settings, recovery metrics summary (monthly), ability to pause or modify any active sequence from dashboard.

---

### Journey 5: Contractor — Sequence Failure / Reply Edge Case (Primary — Error Recovery)

A contractor launches a sequence for a customer who pays within 6 hours via the Day 1 payment link. The Day 4 reminder should NOT fire — the sequence must detect payment and stop.

The Stripe `payment_intent.succeeded` webhook fires → sequence engine marks invoice as paid → all pending future steps for this invoice are cancelled. No Day 4 message is sent.

**Alternative:** A customer replies to the Day 1 SMS with a question about the invoice amount. The sequence pauses immediately. The contractor is notified via email with the customer's reply. The contractor responds directly (via their personal SMS) to resolve the dispute. The contractor then manually resumes the sequence (if still needed) or marks the invoice as resolved in the dashboard.

**Journey requirements revealed:** Payment webhook stops active sequences immediately, sequence state machine handles paid/paused/cancelled states, contractor can manually resume a paused sequence, contractor can manually mark an invoice as resolved.

---

### Journey Requirements Summary

**Capability areas revealed by journeys:**

1. **Invoice Integration** — Stripe OAuth, overdue detection, customer data sync, payment webhook
2. **Sequence Engine** — Multi-step scheduling, SMS + email delivery, payment links, state machine (active / paused / paid / cancelled)
3. **Reply Handling** — Inbound SMS detection, auto-pause, contractor notification with reply content, manual resume
4. **CSV Import** — Bulk import, phone number validation, partial batch launch
5. **Dashboard** — Per-invoice status, sequence progress, recovery metrics, bulk and individual actions
6. **Template Management** — Per-step defaults, in-line editing, per-customer override
7. **Review Requests** — Automatic post-payment SMS, configurable Google review link
8. **Settings** — Google review URL, notification preferences, per-customer manual exclusion

---

## Domain-Specific Requirements

Domain complexity: **Medium** — not a regulated industry (healthcare/fintech), but with messaging compliance obligations and payment data handling that require specific technical constraints.

### Messaging Compliance (Twilio A2P 10DLC)

- All SMS must be sent via Twilio A2P 10DLC registered numbers before production launch. 10DLC registration covers brand identity and campaign use case ("payment reminders for small businesses").
- Every outbound SMS must include a compliant opt-out footer: "Reply STOP to unsubscribe."
- STOP keyword: Immediately opt customer out of all sequences; no further messages from that number. Opt-out status stored permanently and cannot be overridden by contractor.
- HELP keyword: Reply with a support message. ("For help, contact [contractor business name] at [contractor email].")
- A2P registration timeline: 3–7 business days. Registration must complete before any customer-facing SMS is sent.
- No sending to numbers on the National Do Not Call Registry unless explicitly permitted for transactional messages (invoice reminders are transactional; this is generally permitted).

### Payment Data Handling

- The product stores no payment card data. Stripe handles all payment processing.
- Product stores Stripe customer IDs, invoice IDs, and payment amounts for sequence management.
- Phone numbers and email addresses are PII and must be encrypted at rest.
- Stripe OAuth tokens (access tokens) must be stored encrypted; refresh tokens rotated on each use.
- No storing of full credit card numbers, CVVs, or bank account details at any layer.

### Data Retention

- Customer contact data (phone, email) retained as long as account is active plus 30 days post-cancellation.
- Contractor-controlled deletion: contractor can delete a customer record, which immediately removes phone + email and cancels all active sequences for that customer.
- Sequence logs (timestamps, delivery status, payment outcomes) retained for 2 years for contractor's own AR records.

### Risk Mitigations

- **Carrier filtering risk:** A2P 10DLC registration significantly reduces filtering. Additional mitigation: sequence templates avoid spam trigger words (urgent, act now, free, guaranteed). Templates reviewed against Twilio best practices before launch.
- **Opt-out compliance:** Any STOP response results in immediate, permanent opt-out stored at the contractor + customer level. The contractor dashboard shows opted-out status per customer. No re-subscription pathway without explicit customer re-opt-in.
- **Payment link security:** Stripe-generated payment links expire 30 days after creation and are single-use by default. No link reuse across sequences.

---

## Innovation Analysis

### Detected Innovation Areas

This product is not a breakthrough technology — it is a focused execution of a validated pattern applied to an underserved niche. The innovation is **channel + positioning**, not novel technology.

**Primary innovation: SMS-first for a category validated only via email.** CraftBoop proved contractors will pay for automated invoice follow-up. No competitor has applied SMS as the primary channel to this specific use case at an accessible price point. SMS achieves a structurally different outcome (45% response rate vs. 6% for email) — this is not incremental improvement; it changes the economics of the follow-up entirely.

**Secondary innovation: Tone-calibration for relationship preservation.** The category insight is that contractors don't follow up because follow-up risks the relationship. The product's value is not just automation — it's automation that sounds human enough to preserve the relationship while automating the awkward part. The Day 1 template reads like a text from the contractor, not a dunning notice. This is a UI/UX and copy innovation, not a technical one.

### Market Context

- CraftBoop: $29/month, email-only, launched 2025. Validates the category. Does not compete on SMS.
- Adjacent validation: HandyPay reached $1K MRR in under 60 days in salon/spa market using identical behavioral profile (avoid awkward payment conversation). Same product, different vertical.
- Direct validation: r/microsaas confirmed $18K MRR for a general invoice follow-up tool (not contractor-specific, not SMS-first).
- Forrcle: Active in the space but not SMS-first and not contractor-specific.

### Validation Approach

- The MVP's primary validation signal is invoice recovery rate within the first 48 hours of first sequence send. If >50% of first-time users see a payment within 48 hours, SMS-first is validated.
- The relationship preservation mode is validated if contractors do not report customer complaints about automated messages in first 30 days.
- AppSumo LTD sales volume (target: 100 in first 30 days) is the market sizing validation.

### Risk Mitigation

- **CraftBoop launches SMS before MVP ships:** Risk is low in the 2–4 week build window. Mitigation: first-mover Reddit presence, contractor community credibility.
- **A2P 10DLC blocking:** Mitigation is registering immediately, before build starts. Email-only fallback if SMS is delayed.
- **Tone calibration fails (templates feel corporate):** Mitigation: 5 beta users from r/sweatystartup review templates before launch. Templates are editable; contractors can always modify.

---

## SaaS B2B Specific Requirements

### Product Type Overview

This is a SaaS web application with a B2SMB focus. Contractors are the account owners; in most cases a single user (the contractor or their office manager) manages the account. Multi-tenancy is account-level isolation — contractor A never sees contractor B's invoices or customers. Each account has one Stripe OAuth connection and one Twilio messaging number (shared infrastructure, isolated logic).

### Multi-Tenancy Architecture

- **Account isolation:** All invoice records, customer records, and sequences are scoped to a contractor account. No cross-account data access.
- **Stripe integration is per-account:** Each contractor has their own Stripe OAuth token. The platform never has access to contractor funds.
- **Twilio number allocation:** Shared Twilio number pool for MVP; messages are sent from a pool of registered A2P numbers. Each contractor's messages include their business name in the template. Dedicated numbers are a Phase 2 consideration.

### Authentication Model

- Email + password with email verification for account creation
- Magic link / passwordless login supported (reduces friction for non-technical contractors)
- No SSO or enterprise IdP requirements at MVP (Phase 2 for accountant/bookkeeper multi-client use)
- Session management: JWT with 30-day rolling expiry; re-authentication on sensitive actions (delete account, revoke Stripe connection)

### Permission Model (MVP)

Single role per account (account owner). The account owner has full access to all features. No sub-user or role-based access required at MVP — a single login covers all use cases (solo contractor or office manager).

### Integration Architecture

- **Stripe:** OAuth 2.0 connection; webhook endpoint (`payment_intent.succeeded`, `invoice.payment_failed`, `invoice.overdue`); read-only scopes for invoice/customer data; write scope limited to payment link creation
- **Twilio:** Server-side SMS sending via REST API; inbound webhook for reply detection; A2P 10DLC campaign registration; message status callbacks for delivery tracking
- **Email:** Transactional email via provider (Resend or Postmark) for Days 4 and 10 email touches and contractor notifications (payment received, customer replied)

### Subscription & Billing

- Stripe Billing for subscription management (monthly + annual plans)
- Monthly: $39/month (up to 100 active sequences) / $59/month (unlimited)
- Annual: $29/month equivalent ($348/year)
- LTD: $59 (up to 50 active sequences/month) / $99 (unlimited sequences + future integrations)
- Trial: 14-day free trial, no credit card required; limited to 5 sequences during trial
- Grace period: 7-day grace period after payment failure before account suspension (sequences continue during grace period to avoid breaking active follow-up)

### Implementation Considerations

- Dashboard must be mobile-responsive (contractors check on phone between jobs)
- Sequence scheduling must be timezone-aware (send during business hours: 8 AM–8 PM recipient local time); messages scheduled outside this window are held and delivered at next window open
- Stripe Payment Links generated per-invoice, embedded in SMS and email templates, expire after 30 days
- All sequence activity logged for contractor audit/records (sent timestamp, delivery status, reply received, payment received)

---

## Functional Requirements

### Invoice Integration

- FR1: Contractor can connect their Stripe account via OAuth in under 3 steps
- FR2: System detects invoices that are past their due date within 5 minutes of the due date passing
- FR3: System pulls customer name, phone number, and email from Stripe customer records for each overdue invoice
- FR4: System marks a sequence as complete and cancels pending steps when Stripe reports payment received (`payment_intent.succeeded`)
- FR5: Contractor can disconnect their Stripe account, which immediately cancels all active sequences
- FR6: Contractor can upload a CSV file containing customer name, phone, email, invoice number, amount, and due date to import invoices without a Stripe connection

### Sequence Engine

- FR7: System automatically starts a 4-step sequence for any invoice that passes its due date when the contractor has enabled auto-sequence (default: off; must be opted in per sequence or globally)
- FR8: Contractor can manually launch a sequence for any overdue invoice from the dashboard
- FR9: System sends an SMS to the customer on Day 1, Day 4, Day 10, and Day 20 of the sequence (relative to invoice due date)
- FR10: System sends an email to the customer on Days 4 and 10 of the sequence
- FR11: Every sequence message includes a Stripe Payment Link for the specific invoice amount
- FR12: Contractor can adjust the default sequence delay intervals (Day 1/4/10/20) at the account level
- FR13: Contractor can override sequence timing for an individual active sequence without affecting account defaults
- FR14: Sequence messages are only sent between 8 AM and 8 PM in the customer's local timezone (inferred from customer's Stripe address or contractor's configured timezone as fallback)

### Message Templates

- FR15: Each sequence step has a pre-written default template that requires no edits to use
- FR16: Contractor can edit default templates at the account level; changes apply to all future sequences
- FR17: Contractor can edit templates for an individual active sequence without changing account defaults
- FR18: Templates support merge fields: customer first name, invoice number, invoice amount, payment link, contractor business name
- FR19: Template tone escalates across steps: Day 1 (friendly), Day 4 (polite), Day 10 (firm), Day 20 (final notice)

### Relationship Preservation

- FR20: When a customer sends any inbound SMS reply, the system pauses all pending sequence steps for that invoice immediately
- FR21: Contractor receives an email notification when a customer replies, containing the customer's name, invoice number, and the full reply text
- FR22: Contractor can resume a paused sequence from the dashboard, which resumes from the next pending step
- FR23: Contractor can permanently cancel a sequence for an invoice, which prevents any further automated messages
- FR24: Contractor can mark a customer as "manual only" — sequences for that customer never start automatically; contractor must manually launch each one

### Google Review Requests

- FR25: Contractor can configure their Google review link in account settings
- FR26: When Stripe reports payment received for an invoice that has an active or completed sequence, the system sends a thank-you + review request SMS to the customer
- FR27: Contractor can disable automatic review requests at the account level or per-customer
- FR28: Review request SMS includes the contractor's Google review link and fires within 10 minutes of payment confirmation

### Dashboard

- FR29: Dashboard displays all invoices grouped by status: not yet due, overdue (no sequence), in sequence (active), sequence paused, paid, sequence cancelled
- FR30: Dashboard shows per-invoice details: customer name, invoice amount, days overdue, current sequence step, next scheduled action
- FR31: Dashboard shows a monthly recovery summary: total invoices sequenced, total recovered, total dollar amount recovered
- FR32: Contractor can filter the dashboard by status, date range, and customer name
- FR33: Dashboard is mobile-responsive and functional on a smartphone screen

### Notifications & Alerts

- FR34: Contractor receives an email notification when any invoice in a sequence is paid
- FR35: Contractor receives an email notification when a customer replies to a sequence message
- FR36: Contractor receives a weekly digest email showing active sequences, payments received, and invoices approaching Day 20
- FR37: Contractor can configure notification preferences (email only; SMS notifications to contractor is a Phase 2 feature)

### Settings & Account Management

- FR38: Contractor can configure their business name (used in message templates and notifications)
- FR39: Contractor can configure their Google review link
- FR40: Contractor can configure their default account timezone (used for message delivery windows)
- FR41: System maintains a permanent opt-out record per customer phone number; opted-out customers cannot be sequenced
- FR42: Contractor can delete a customer record, which immediately removes phone and email, cancels active sequences, and prevents future sequences for that number
- FR43: Contractor can export their sequence history (invoice number, customer name, steps sent, responses, payment outcome) as CSV

### Compliance Infrastructure

- FR44: Every outbound SMS includes an opt-out footer ("Reply STOP to stop receiving messages")
- FR45: STOP keyword response immediately opts out the number and sends a one-time confirmation message
- FR46: HELP keyword response replies with contractor business name and support contact
- FR47: All customer phone numbers are validated as valid mobile numbers before sequence launch; invalid numbers are flagged on the dashboard

---

## Non-Functional Requirements

### Performance

- Dashboard initial load completes in under 2 seconds for accounts with up to 500 invoices
- Stripe webhook processing completes (sequence start or sequence stop) within 5 minutes of event receipt, as measured by webhook log timestamps
- Inbound SMS reply processed and sequence paused within 60 seconds of Twilio delivery, as measured by sequence state change timestamp
- Payment confirmation email sent to contractor within 2 minutes of `payment_intent.succeeded` webhook receipt

### Security

- All customer PII (phone numbers, email addresses) encrypted at rest using AES-256
- All Stripe OAuth tokens encrypted at rest; tokens never logged or exposed in client-side code
- HTTPS enforced for all web and API endpoints; no HTTP fallback
- Twilio webhook endpoints validated using Twilio request signature verification; unauthenticated webhook calls rejected
- Stripe webhook endpoints validated using Stripe-Signature header; unauthenticated calls rejected
- Session tokens rotated on each login; old tokens invalidated immediately on logout
- No customer payment card data stored or transmitted through the product layer

### Reliability

- System maintains 99.5% uptime during business hours (6 AM–10 PM user local time) as measured by uptime monitoring
- Sequence scheduling uses persistent job queue (not in-memory); system restarts do not cause missed sequence steps
- Failed SMS delivery retried up to 3 times via Twilio with exponential backoff before marking as failed and alerting the contractor
- Stripe webhook delivery failures retried up to 5 times; permanent failures logged and contractor notified

### Scalability

- System architecture supports 1,000 active contractor accounts with up to 200 active sequences per account without architectural changes
- Sequence scheduling engine must handle concurrent sequence sends (e.g., 500 invoices all going overdue at midnight) without SMS delivery delays exceeding 15 minutes

### Messaging Compliance

- All SMS sent via A2P 10DLC registered campaign before production launch
- STOP keyword processing is immediate (within 30 seconds) and irrevocable without explicit customer re-opt-in
- Message sending windows enforced: 8 AM–8 PM recipient local time; no exceptions for any step
- Twilio messaging rate limits honored; sends throttled to respect campaign throughput limits

---

*PRD for: Contractor Invoice Follow-Up Automation*
*Prepared: 2026-09-28*
*Input sources: Shortlisted idea (Score: 91/105, Tier 1) + Market research (2026-09-27) + Product brief (2026-09-28)*
*Status: Ready for Architecture*

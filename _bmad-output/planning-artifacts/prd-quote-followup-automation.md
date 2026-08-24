---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/quote-followup-automation-trades.md
  - _bmad-output/planning-artifacts/research/market-quote-followup-automation-research-2026-08-02.md
workflowType: prd
idea_name: quote-followup-automation-trades
user_name: Root
date: 2026-08-24
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — QuoteChase

**Author:** Root
**Date:** 2026-08-24
**Product:** QuoteChase — Quote/Estimate Follow-Up Automation for Service Trades
**Status:** Complete

---

## Executive Summary

Service contractors lose 30–60% of sent quotes to silence — not bad pricing, not competitors, but zero structured follow-up. The average contractor makes 1.3 follow-up attempts; industry data shows 5–12 touches to convert a qualified prospect. A 92/100 IdeaFast pain signal on July 31, 2026, with five distinct r/smallbusiness threads in a single scan confirms this is the highest-frequency revenue problem in small trades.

**QuoteChase** is a standalone, trades-specific quote follow-up automation tool that plugs into Jobber and Housecall Pro via Zapier — no platform migration. When a quote is sent, QuoteChase triggers an automated SMS + email sequence using pre-built templates for HVAC, landscaping, cleaning, painting, pest control, and handyman. All sequences auto-stop the moment a job is booked. Dashboard shows every open quote, its sequence status, and next scheduled touch.

Jobber gates quote follow-up behind its Grow plan ($199–349/month) — a $150–280/month premium above what most small operators pay on Core/Connect ($39–69/month). Housecall Pro's built-in follow-up is email-only (6% response rate vs. SMS at 45%). No standalone, affordable, trades-specific quote follow-up add-on exists for the ~300,000–500,000 small trades businesses on these platforms. QuoteChase fills that gap at $29–49/month or $79–99 LTD.

ROI story: one recovered job pays for a full year of the subscription. At a $4,500 average HVAC job, recovering one additional quote per month adds $54,000/year to a 5-truck operation.

**Go-to-market path:** founding cohort of 15–20 contractors for testimonials → community launch (Reddit, Facebook) → AppSumo LTD ($79/$99) in Month 3–4 → organic SEO and YouTube partnerships → Jobber Partner Ecosystem listing.

### What Makes This Special

QuoteChase occupies confirmed whitespace: **affordable + trades-specific + SMS-first + add-on (non-replacement)** combined. No existing product delivers all four at sub-$50/month:

- **Jobber Grow ($199–349/month):** Quote follow-up gated behind a $150–280/month tier jump. Most small operators on Core/Connect won't pay that premium for one feature.
- **Housecall Pro Campaigns:** Email-only at 6% response rate. Opaque pricing (contact for quote). Not a clean standalone feature.
- **QuoteIQ ($29.99/month):** Full CRM replacement — requires platform migration away from Jobber/HCP, destroying existing workflows and data.
- **HubSpot/Pipedrive:** Generic CRMs, not trades-specific, require 10–20 hours of configuration, no SMS.
- **Manual texting:** Used by 60–70% of small trades businesses; inconsistent, forgotten amid active jobs, no tracking.

Core insight: contractors already on Jobber or HCP will not switch platforms to get follow-up automation. They need an add-on layer that preserves their existing setup. QuoteChase is the only affordable tool that passes this filter.

SMS-first architecture exploits a documented weakness in HCP's built-in follow-up (email-only) and delivers a 45% response rate vs. 6% for email-only tools.

## Project Classification

- **Project Type:** SaaS B2B (micro-business / owner-operator segment)
- **Domain:** Field service management automation — quote conversion
- **Complexity:** Medium — Zapier webhook integration, Twilio SMS provisioning, SendGrid email delivery, TCPA compliance, auto-stop idempotency, multi-tenant sequences
- **Project Context:** Greenfield
- **Build Timeline:** 3–4 weeks MVP
- **Initial Infrastructure Cost:** $30–$80/month (Vercel/Railway + Supabase + Twilio + SendGrid)

---

## Success Criteria

### User Success

- Quote close rate lift ≥10 percentage points vs. user's self-reported pre-QuoteChase baseline at 60 days, measured via post-onboarding survey
- Time from signup to first active sequence: ≤15 minutes for 80% of users, measured via funnel analytics (signup → first sequence started event)
- Time to first "Job Booked" event from a QuoteChase-initiated sequence: ≤30 days for 60% of active users
- At least 3 "job recovered" stories with specific dollar amounts documented from founding cohort within 45 days of beta launch
- SMS delivery rate to sequence contacts: ≥98% per Twilio delivery logs
- Auto-stop reliability: sequences correctly terminate within 60 seconds of "Job Booked" trigger 100% of the time — zero messages sent after booking confirmed
- "Aha!" moment: user sees a prospect reply to an automated SMS within the first 14 days

### Business Success

**1-Month (Founding Cohort):**
- 15–20 paying founding customers at $29–49/month or $79 LTD
- ≥3 founding customers with a documented "job recovered" story; recorded testimonials secured
- ≥5 beta NPS survey responses with NPS ≥40

**3-Month (Community Launch):**
- 50 paying customers; $1,750 MRR
- AppSumo listing submitted with ≥5 verified Capterra/G2 reviews
- Trial-to-paid conversion ≥25% among users who complete onboarding (trigger first sequence)

**6-Month (AppSumo + Growth):**
- 300 paying monthly subscribers; $10,500 MRR
- AppSumo LTD units: ≥300 sold
- Monthly churn ≤5%
- NPS ≥50

**12-Month (Scale):**
- 1,500 paying customers; $52,500 MRR
- AppSumo LTD units: ≥500 cumulative
- Monthly churn ≤3%
- NPS ≥60
- Organic CAC: <$40 from content channels

### Technical Success

- Zero missed scheduled sends in production (all scheduled SMS/email jobs delivered or failed with explicit error logging and retry)
- Auto-stop executes on all triggers: manual "Job Booked" button and Zapier "Job Created" webhook, within 60 seconds
- Sequence scheduler survives API restarts without message loss (jobs persisted in database)
- Dashboard loads (≤200 open sequences per account): ≤2 seconds at 95th percentile
- Twilio SMS sends: ≤5 minutes from scheduled time to delivery at 95th percentile

### Measurable Outcomes (North Star)

**North Star Metric:** Total "Job Booked" events tracked per month across all accounts — the single number proving QuoteChase creates real, measurable revenue for contractors.

| Metric | Month 3 | Month 6 | Month 12 | Measurement |
|---|---|---|---|---|
| Paying customers | 50 | 300 | 1,500 | Stripe |
| MRR | $1,750 | $10,500 | $52,500 | Stripe |
| Trial-to-paid conversion | ≥25% | ≥30% | ≥35% | Trial cohort analysis |
| Monthly churn | ≤8% | ≤5% | ≤3% | Stripe churn tracking |
| Sequences started/month | 500 | 5,000 | 30,000 | Product analytics |
| "Job Booked" events/month | 50 | 500 | 4,000 | In-product click |
| Avg. close rate lift | — | +8pp | +12pp | 60-day user survey |
| NPS | ≥40 | ≥50 | ≥60 | 30-day email survey |
| Median setup time | ≤15 min | ≤12 min | ≤10 min | Funnel analytics |

**Go/No-Go Signal:** If fewer than 3 founding customers have a documented "job recovered" story after 45 days, investigate targeting, onboarding, or template quality before investing in AppSumo/paid channels.

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**Philosophy:** Quote-conversion MVP. The product is only useful if it demonstrably converts cold quotes into booked jobs. All three pillars — SMS delivery, email delivery, and auto-stop — must be present and functional on day one. Removing any one breaks the differentiation story and creates the "messaging a customer who already booked" failure mode that destroys trust.

**Supported User Journeys at MVP:**
- Owner-operator on Jobber Core/Connect manually triggers a follow-up sequence per quote; Zapier automation fires sequence on Jobber "Quote Sent"
- Owner-operator using no FSM (manual-quoting landscaper) enters contact and quote details directly in QuoteChase
- HCP Basic user triggers sequence after sending quote via HCP manual entry or Zapier webhook
- Business owner marks "Job Booked" and all sequences for that contact stop immediately
- Business owner views open quotes dashboard, sees next scheduled touch, and tracks pipeline value

**Must-Have Capabilities:**

1. Manual quote entry: contact name, phone, email, quote value, trade type — starts a follow-up sequence
2. Zapier integration trigger: incoming webhook starts a sequence from Jobber/HCP "Quote Sent" event
3. Pre-built 3-touch sequences for 6 trades: HVAC, Landscaping, Cleaning, Painting, Pest Control, Handyman (Day 2 SMS + Day 5 email + Day 9 SMS)
4. Automated SMS delivery via Twilio — dedicated local number provisioned per account
5. TCPA-compliant messaging: unsubscribe language ("Reply STOP to opt out") in first SMS; STOP keyword handling
6. Automated email delivery via SendGrid — from contractor's display name
7. Manual "Job Booked" button per contact — stops all active sequences immediately
8. Zapier webhook receiver: Jobber/HCP "Job Created" event → auto-stop matching sequence
9. Open quotes dashboard: list view with contact, quote value, sequence status, last/next touch
10. Status badges per sequence: Active / Completed / Booked / Stopped / Reply Received
11. Basic settings: business name, phone, default trade type, notification email
12. SMS reply notification: email alert to contractor when a prospect replies to any automated message
13. Billing management: Stripe integration for subscription and LTD payment

### Growth Features — Phase 2 (Post-MVP, Months 2–3)

- Native Jobber API integration: OAuth-based, quotes webhook → auto-start; jobs webhook → auto-stop (reduces Zapier dependency)
- Voicemail drop (ringless voicemail): optional Day 7 third touch via RVM vendor — highest-demand post-MVP request anticipated from founding cohort
- Roofing trade template: highest average job value ($8,000–$25,000), notoriously poor at follow-up
- Sequence timing customization: adjust Day 2/5/9 defaults to fit contractor's sales cycle

### Vision — Phase 3 (Months 4–12+)

- Housecall Pro native API integration
- Close rate analytics: contractor sees own close rate vs. trade average, broken down by message type and seasonality
- Benchmarking: "Your HVAC close rate is 31%. Top 25% of HVAC operators using QuoteChase close 47%."
- Team/multi-user management: assign sequences to sales coordinator; shared dashboard for multi-truck operations
- AI-personalized messages: job-specific detail in Day 2 SMS for higher response rates
- A/B testing at scale: highest-converting timing and message variants per trade
- REST API: open integration for any FSM tool
- International expansion: UK, Canada, Australia
- **Acquisition target:** Jobber, HCP, or PE-backed trades platform acquires QuoteChase as the "quote conversion" module

**Deliberately Out of Scope (by design):** CRM features, scheduling, invoicing, dispatching, customer record management. QuoteChase must not become "another Jobber." If a capability is not quote follow-up, it does not belong in this product.

### Risk Mitigation Strategy

**Technical Risks:**
- Zapier rate limits and webhook reliability → implement idempotent sequence creation; deduplicate by contact+quote_id; queue incoming webhooks with retry logic
- Twilio A2P 10DLC registration delays → register campaign before beta; use test numbers for first 50 accounts under 1,000 messages/day threshold
- Auto-stop race condition (sequence sends after job booked) → lock sequence state before sending; check booked status in job scheduler before each send

**Market Risks:**
- Jobber adds quote follow-up to lower tiers → establish brand and reviews before this occurs; AppSumo cohort creates switching costs and community moat
- QuoteIQ adds non-replacement add-on mode → ship MVP within 4 weeks; claim "Jobber add-on" keyword before QuoteIQ iterates
- Low founding cohort NPS → recruit via direct DM in HVAC and landscaping Facebook groups; iterate on templates if reply rates are below 15%

**Resource Risks:**
- 3–4 week estimate tight → prioritize: manual entry + SMS + auto-stop core first; Zapier integration and dashboard polish in Week 3–4
- AppSumo rejects listing → backup: direct LTD page on PitchGround / Dealify

---

## User Journeys

### Journey 1: Mike — Jobber Core Owner-Operator, HVAC (Primary, Success Path)

Mike is 38, runs a 3-truck HVAC company in Ohio. He's on Jobber Core at $69/month. He sends 60–85 estimates per month, follows up on 30% of them with a single personal text, then stops. He knows he should follow up more, but it feels like pestering and he forgets. He lost a $6,800 furnace replacement to a competitor last quarter — the homeowner called him 6 weeks later and the job was already done. "They must have followed up. I just forgot."

**Opening Scene:** Mike sees a post in the "HVAC Business Owners" Facebook group: "QuoteChase just got me a $3,800 job from a quote I thought was dead. Setup took 10 minutes. $79 lifetime deal." He clicks. Landing page answers his first question in the first line: "Works with Jobber Core — no upgrade required." He stays.

**Rising Action:** He scans the pricing page: $39/month or $79 LTD. Reads two Capterra reviews from HVAC contractors. Watches a 3-minute Jobber setup video. Starts the free trial.

**Climax — Onboarding (12 minutes):**
1. Signs up with email
2. Selects "HVAC" as his trade — template sequence previews in sidebar
3. Sets business name "Smith HVAC" and his display phone
4. Connects Jobber via Zapier: follows the 3-step guided setup (Zapier account → Jobber trigger → QuoteChase webhook). The guided flow shows exactly where to paste the webhook URL in Zapier.
5. Previews the Day 2 SMS template: "Hi [Name], just checking in on the estimate Smith HVAC sent for your [service]. Happy to answer any questions! — Mike" Makes one edit, saves.
6. First quote in Jobber fires the Zapier trigger. Sequence starts automatically.

**Resolution (Day 12 after onboarding):** Mike gets a text reply from a quote he'd mentally written off 10 days ago: "Still interested, can we schedule Tuesday?" He books a $3,800 furnace job. He opens QuoteChase, clicks "Job Booked." The remaining sequences stop. He posts in the Facebook group.

**Edge Cases Covered:**
- Prospect already hired someone → STOP reply or no reply; sequence completes; Mike sees "Completed — No Response" in dashboard
- Mike manually sends his own follow-up text → no conflict; QuoteChase sequence continues on schedule regardless
- Zapier webhook fires twice for same quote → sequence creation is idempotent; only one active sequence per contact+quote pair

---

### Journey 2: Sarah — Manual-Quoting Landscaper (Primary, No-FSM Path)

Sarah is 44, runs a 6-person landscaping crew. Annual revenue ~$450K. She quotes via email: photos, PDF in Canva, email sent manually. No quoting software. She sends 20–30 quotes per month, follows up on 8–10 via personal phone call (awkward, 1 attempt max). She has no visibility into which quotes are open — a running mental list that breaks down at 15+ quotes.

**Opening Scene:** A fellow landscaper in a Facebook group recommends QuoteChase as "the thing that texts your estimates for you without any software." Sarah's first concern: "Does it require me to switch to Jobber?" She clicks the link, sees "Works standalone — enter quotes manually or connect your existing tools." She buys the $79 LTD.

**Climax — Manual Entry Flow:**
Sarah opens QuoteChase. Clicks "New Quote." Enters: contact name (Thomas Brennan), phone (for SMS), email, quote value ($2,400), trade (Landscaping). Clicks "Start Follow-Up." Sequence begins.

Day 2: Thomas receives "Hi Thomas, just checking in on the landscaping estimate Sarah's Landscaping sent you. Happy to answer any questions!" — signed with her business name.
Day 5: Thomas receives an email with the pre-built landscaping template. Subject: "Following up on your yard estimate — Sarah's Landscaping."
Day 9: Final SMS: "Last check-in on your landscaping estimate. Let me know if you'd like to move forward — Thomas, reply YES to book!"

Thomas replies YES on Day 11. Sarah sees "Reply Received" badge in her dashboard. She calls Thomas, closes the job.

**Dashboard Use:** Sarah reviews her open quotes every Monday morning. She sees 14 active sequences, sorted by quote value (highest first). Three show "Completed — No Response" (ran all 3 touches with no reply). She marks two as "Booked" after closing them by phone. She notes the pipeline total: $31,500 in open quotes.

---

### Journey 3: Carlos — HCP Basic, Pest Control (Primary, SMS Gap Use Case)

Carlos is 31, runs a 2-truck pest control company on Housecall Pro Basic at $59/month. He sends 25–40 quotes for larger residential and commercial jobs. HCP Basic has email follow-up but he knows his email response rate is terrible. He inquired about HCP Campaigns for SMS — was quoted $149/month extra. He didn't pay it.

**Opening Scene:** Carlos searches "housecall pro sms follow up quotes alternative" and finds a QuoteChase landing page. He reads: "SMS follow-up that works alongside Housecall Pro — no platform switch." He signs up.

**Climax — SMS-Only Setup:**
Carlos selects "Pest Control" trade template. His concern is SMS — he explicitly doesn't want to send emails because "people ignore them." He disables the Day 5 email touch from his sequence settings (toggle off email sends per sequence). His sequence: Day 2 SMS + Day 9 SMS only.

He sets up Zapier with HCP's webhook for "Estimate Sent" event → QuoteChase creates sequence automatically.

**Resolution (Week 2):** Carlos logs into QuoteChase dashboard. Sees 12 active sequences. Two show "Reply Received" — he calls both prospects and closes one job ($680 commercial pest treatment). Monthly ROI calculation at the bottom of his dashboard: "1 job recovered this month — ~$680 recovered vs. $39 subscription cost."

---

### Journey 4: Business Owner Managing the Dashboard (Admin, Ongoing Use)

Mike, one month in, reviews QuoteChase on his phone between service calls.

**Dashboard flow:**
- Home: "18 active sequences | 4 jobs booked this month | $12,400 recovered pipeline"
- Taps "Active Sequences": list sorted by next touch date. Each row: contact name, quote value, last touch sent, next touch scheduled, status badge.
- Taps "Thomas Brennan — $3,800 — HVAC": Detail view shows full sequence timeline: Day 2 SMS (sent May 10, delivered May 10 14:03), Day 5 email (sent May 13, opened May 13 15:22), Day 9 SMS (scheduled May 17). Reply received: "Interested in moving forward."
- Taps "Mark Job Booked": confirmation prompt "Stop all follow-up for Thomas Brennan? (yes/no)." Confirms. Status changes to "Booked ✓." No further messages scheduled.
- Reviews "Completed — No Response": 6 sequences that ran all 3 touches with no reply. Mike mentally notes these are likely hard losses.

**Settings check:** Mike updates his HVAC Day 2 SMS template after noticing the word "estimate" feels too formal for his customers. He prefers "quote." Updates all future sequences (not retroactively — active sequences keep original text).

---

### Journey 5: Reply Received — Prospect Responds to Automated SMS

A prospect named Janet receives Mike's Day 2 SMS and replies: "Yes still interested, what's the availability for next week?"

**QuoteChase handling:**
1. Twilio inbound webhook fires → QuoteChase receives reply
2. Sequence status updates to "Reply Received" — no further automated messages sent to Janet (manual pause)
3. Mike receives an email notification: "Janet replied to your QuoteChase follow-up for the HVAC estimate ($4,200). Reply: 'Yes still interested, what's the availability for next week?' — Login to follow up manually."
4. Mike texts Janet back from his personal phone (QuoteChase does not handle the conversation after a live reply)
5. After booking Janet, Mike opens QuoteChase and marks her sequence "Job Booked"

### Journey Requirements Summary

| Journey | Capabilities Required |
|---|---|
| Mike (Jobber via Zapier) | Zapier webhook receiver, HVAC template, auto-start on webhook, SMS delivery, dashboard, auto-stop |
| Sarah (manual entry) | Manual quote entry form, Landscaping template, open quotes dashboard, manual "Job Booked" |
| Carlos (HCP, SMS-only) | Per-sequence email toggle, Pest Control template, HCP Zapier integration, SMS-only sequences |
| Dashboard management | List view sorted by value/date, sequence detail with timeline, "Mark Booked" action, pipeline total |
| Reply received handling | Inbound SMS webhook, sequence pause on reply, email notification to contractor |

---

## Domain-Specific Requirements

### SMS / Telecom (TCPA Compliance)

QuoteChase sends automated commercial SMS messages to consumers on behalf of business owners. TCPA compliance is mandatory; violation risk falls on the business owner, and QuoteChase must provide adequate compliance infrastructure.

- Each sequence contact must have an existing business relationship with the contractor (they requested a quote) — this constitutes the prior express consent basis for commercial SMS under TCPA
- First SMS in every sequence must include opt-out language: "Reply STOP to stop receiving messages from [Business Name]"
- STOP keyword handling: Twilio inbound webhook processes STOP/STOPALL/UNSUBSCRIBE/CANCEL/END/QUIT; opt-out stored in database; no further messages sent to that number from any sequence for that business account
- HELP keyword handling: auto-reply with business name and "Reply STOP to unsubscribe"
- A2P 10DLC campaign registration required before US SMS at scale; QuoteChase registers as a software provider sending business communications on behalf of small businesses
- Phone numbers provisioned as dedicated local numbers per business account (not shared short codes) — required for 10DLC compliance and trust
- TCPA consent: contractors represent by accepting Terms of Service that their sequence contacts have an existing business relationship (requested quote)

### Data Privacy

- Contact PII (name, phone, email) stored per business account with row-level isolation; no cross-account data access
- Business owners can delete a contact and all associated sequence history; deletion propagates to Twilio number blocklist
- No contact data shared across business accounts; no aggregate behavioral profiling
- SMS reply content stored in QuoteChase database for business owner reference (relevant business communication)

---

## SaaS B2B Specific Requirements

### Multi-Tenant Architecture

- Each business account has isolated: contact list, active sequences, Twilio number, message templates, Zapier webhook endpoint (per-account URL), subscription state
- Webhook endpoints are per-account UUIDs (not guessable); receiving a webhook for account A cannot affect account B sequences
- Per-account Twilio numbers: all outbound SMS for a business account sends from that business's dedicated number; inbound replies route only to that account
- Subscription lapse: active sequences continue for 7-day grace period; new sequences blocked after lapse; at day 7, all active sequences paused and dashboard shows payment required banner

### Subscription & Pricing Model

**Tiers at MVP:**

| Tier | Price | Limits | Key Features |
|---|---|---|---|
| Free Trial | 14 days | 10 sequences total | All MVP features |
| Starter | $29/month | 30 active sequences/month | All MVP features |
| Pro | $39/month | Unlimited sequences | All MVP + Zapier auto-start |
| AppSumo LTD Basic | $79 one-time | 50 sequences/month | All Starter features, lifetime |
| AppSumo LTD Pro | $99 one-time | Unlimited sequences | All Pro features, lifetime |

**Sequence enforcement:**
- Sequence creation blocked when monthly limit reached (Starter/LTD Basic)
- Warning banner at 80% of monthly sequence limit
- LTD accounts: sequence limits reset monthly; no expiry on the license itself

### Zapier Integration Requirements

- QuoteChase provides a **Zap-trigger receiver**: a unique per-account webhook URL that creates a new sequence from an incoming JSON payload
- Required webhook payload fields: `contact_name`, `contact_phone`, `quote_value` (optional), `trade_type` (optional — falls back to account default)
- Optional fields: `contact_email`, `quote_id` (used for idempotency — prevents duplicate sequences)
- Zapier setup guided in onboarding: step-by-step screenshots for Jobber → Zapier → QuoteChase and HCP → Zapier → QuoteChase flows
- Webhook response: 200 with `sequence_id` on success; 409 on duplicate `quote_id`; 422 on invalid payload with field-level error detail

### Onboarding Flow Requirements

Onboarding must complete in ≤15 minutes for 80% of business owners. Steps are sequential and gated:

1. Account creation: email + password (or Google OAuth)
2. Business setup: name, phone number (displayed in SMS templates), default trade type
3. Trade template preview: selected trade type shows the 3-touch sequence preview with editable message text
4. Twilio number provisioning: automatic, one-click, 30 seconds — system provisions a local number in the contractor's area code based on their phone number prefix
5. Zapier setup (optional): guided walkthrough with platform-specific screenshots for Jobber and HCP; can skip and use manual entry only
6. First sequence: guided "add your first open quote" flow with manual entry form
7. Done screen: shows first scheduled SMS date + time, links to dashboard

---

## Functional Requirements

### Quote Entry & Sequence Creation

- FR1: Business owners can manually create a follow-up sequence by entering contact name, phone number, trade type, and optional email and quote value
- FR2: QuoteChase receives a webhook payload from Zapier and automatically creates a follow-up sequence for the specified contact without manual input
- FR3: The system prevents duplicate active sequences for the same contact phone number under the same business account within a 30-day window (idempotent by quote_id when provided)
- FR4: Business owners can select the trade type per sequence (overriding account default) to apply the correct message templates
- FR5: Business owners can add a quote value to any sequence; dashboard displays total open pipeline value across all active sequences

### Sequence Templates & Message Management

- FR6: Business owners can preview the full 3-touch sequence (Day 2 SMS, Day 5 email, Day 9 SMS) with their business name populated before the first sequence starts
- FR7: Business owners can edit the SMS and email message text for each touch point within a trade template; changes apply to all future sequences for that trade
- FR8: Each trade template contains pre-written message text specific to that trade category (HVAC, Landscaping, Cleaning, Painting, Pest Control, Handyman)
- FR9: Business owners can toggle email delivery off for a specific sequence, making that sequence SMS-only
- FR10: The system inserts the business owner's display name and the contact's first name into each automated message using template variables

### Automated SMS Delivery

- FR11: The system sends an automated SMS to the sequence contact on Day 2 from the business's provisioned local phone number
- FR12: The system sends an automated SMS to the sequence contact on Day 9 from the business's provisioned local phone number
- FR13: Every outbound SMS includes opt-out language ("Reply STOP to stop receiving messages from [Business Name]") in the first message of each sequence
- FR14: The system processes STOP keyword replies: marks the contact as opted out for that business account and sends no further messages to that phone number
- FR15: Business owners receive an email notification when a sequence contact sends any inbound SMS reply (including non-STOP replies)
- FR16: The system updates sequence status to "Reply Received" when an inbound reply arrives and pauses further scheduled sends pending manual review

### Automated Email Delivery

- FR17: The system sends an automated email to the sequence contact on Day 5 using the trade-specific email template
- FR18: Emails are sent with the business owner's display name as the sender name and a no-reply sending address
- FR19: The system tracks email open events and stores open status per email per sequence in the database

### Auto-Stop & Job Booking

- FR20: Business owners can mark any sequence as "Job Booked" via a button in the dashboard, which immediately cancels all remaining scheduled sends for that sequence
- FR21: The system receives a Zapier webhook for a "Job Created" event and automatically stops the active sequence matching the contact phone number for that business account
- FR22: Auto-stop executes within 60 seconds of trigger (manual button click or webhook receipt) under all conditions — no message is sent after a sequence is stopped
- FR23: Sequence status updates to "Booked ✓" and is visible in the dashboard immediately after stop is triggered
- FR24: Business owners can view the full stop event log per sequence: trigger type (manual vs. webhook), timestamp, and who triggered it

### Open Quotes Dashboard

- FR25: Business owners can view all sequences in a list view with columns: contact name, quote value, trade type, sequence status badge, last touch sent date, next touch scheduled date
- FR26: Business owners can sort the sequence list by quote value (highest first), date started (newest first), and next touch date (soonest first)
- FR27: Business owners can filter the sequence list by status: Active, Booked, Completed, Stopped, Reply Received
- FR28: Business owners can view a sequence detail page showing: contact info, quote value, full message timeline with sent/scheduled status and delivery confirmation per touch
- FR29: The dashboard header displays aggregate stats: active sequences count, sequences booked this month, total open pipeline value
- FR30: Business owners can manually stop any active sequence from the dashboard (distinct from "Job Booked" — used for declined or withdrawn quotes)

### Account Settings & Billing

- FR31: Business owners can set and update their business display name, default trade type, and notification email address
- FR32: The system automatically provisions a Twilio local phone number during onboarding and displays the provisioned number in account settings
- FR33: Business owners can view their current subscription plan, billing status, and usage (sequences started this month vs. monthly limit)
- FR34: Business owners can access their account-specific Zapier webhook URL from settings to set up or reconfigure Zapier integrations
- FR35: Business owners can upgrade, downgrade, or cancel their subscription from the billing settings page

### Compliance & Data Management

- FR36: Business owners can view the opted-out contacts list for their account and manually remove a number from the opt-out list if the contact requests re-enrollment
- FR37: Business owners can delete a contact record and all associated sequence history; deletion removes the contact from the opt-out list and Twilio blocklist
- FR38: The system logs all outbound message attempts with: timestamp, message content, delivery status (sent/failed/delivered), and error code on failure

---

## Non-Functional Requirements

### Performance

- SMS delivery: ≥98% of scheduled messages delivered within 5 minutes of scheduled send time, measured via Twilio delivery status webhooks
- Webhook processing (Zapier → sequence creation): ≤3 seconds from webhook receipt to sequence created and first touch scheduled, at 95th percentile
- Dashboard page load (≤200 sequences per account): ≤2 seconds at 95th percentile measured from page request to interactive state
- Sequence detail page load: ≤1.5 seconds at 95th percentile
- Auto-stop execution: ≤60 seconds from trigger event (button click or webhook) to all pending jobs cancelled, 100% of the time (not a percentile — this is a correctness guarantee)

### Security

- All API endpoints require authenticated session (JWT); no unauthenticated reads or writes to any sequence or contact data
- Zapier webhook endpoints validated by HMAC signature (per-account secret shared with the business owner for Zapier webhook authentication step)
- Twilio inbound webhook events validated via Twilio signature header before processing
- Contact PII (phone, email, name) encrypted at rest using AES-256 (Supabase/PostgreSQL default encryption)
- All data in transit encrypted via TLS 1.2+
- TCPA opt-out records retained for minimum 4 years; cannot be deleted by business owner action alone
- Password hashing: bcrypt with cost factor ≥12
- Business owner authentication: email + password; Google OAuth option

### Scalability

- Sequence scheduling architecture uses a persistent job queue (not in-memory); jobs survive API process restart without loss
- Multi-tenant data isolation: per-account row-level security on all tables; queries scoped to authenticated account by default
- Twilio number provisioning designed for 10,000+ accounts without manual intervention; number pool managed via Twilio Messaging Services
- Webhook receiver handles burst traffic: queued processing with acknowledgment within 200ms; sequence creation processed async

### Reliability

- Scheduled message jobs: at-least-once delivery with idempotency guard (job ID stored in Twilio metadata; duplicate send attempts detected and suppressed)
- API uptime: ≥99.5% measured monthly, excluding planned maintenance communicated 24 hours in advance
- Failed message sends: retried up to 3 times with exponential backoff before marking as "Send Failed" and notifying business owner via email
- Auto-stop correctness: before each scheduled send, job checks sequence status; if "Booked" or "Stopped," send is skipped — preventing any race condition between stop trigger and send execution

### Integration Constraints

- Twilio: A2P 10DLC campaign registration completed before production SMS; test via unregistered numbers during beta (under 1,000 messages/day threshold per Twilio guidelines)
- SendGrid: email domain authentication (SPF/DKIM) configured for sending domain before production launch; dedicated IP not required at MVP volume
- Zapier: webhook receiver follows Zapier webhook trigger specifications; response format documented for business owners setting up Zaps manually
- Stripe: webhook events validated via Stripe signature; subscription state changes (payment failure, cancellation, upgrade) processed idempotently

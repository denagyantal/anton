---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/contractor-deposit-collection.md
  - _bmad-output/planning-artifacts/market-research-contractor-deposit-collection.md
workflowType: 'product-brief'
lastStep: 5
project_name: 'contractor-deposit-collection'
date: '2026-10-15'
author: 'Root'
---

# Product Brief: Contractor Deposit Collection (Pre-Job)

---

## Executive Summary

Contractors lose $14,250–$30,000+ per year to no-shows. A customer books a job, the contractor blocks an entire day ($300–$1,200 in opportunity cost), and the customer ghosts or cancels last minute — with zero consequences.

**Contractor Deposit Collection** is a lightweight, SMS-first tool that eliminates no-shows by collecting a deposit before the job starts. The contractor enters a job, the customer instantly receives a Stripe payment link via text, and the system automatically sends a 24-hour reminder if unpaid and alerts the contractor 4 hours before the job if the deposit still hasn't been received.

The product solves a single problem exceptionally well. No FSM overhead, no $100/month subscriptions, no 6-step setup process. Connect Stripe once, create a job in 10 seconds, and never show up to an empty driveway again.

**Market validation:** HandyPay reached $1K MRR in under 60 days in the adjacent spa/salon market using the same model. Jobber and Housecall Pro both offer deposit collection but neither executes the SMS automation sequence that actually prevents no-shows. No standalone "contractor deposit collection" tool exists at any price point.

**Business model:** $149 LTD (AppSumo launch) + $39/month subscription. One recovered $500 deposit pays for the LTD indefinitely. Launch target: 500 LTD buyers ($74,500 upfront) → 500 MRR subscribers within 12 months ($19,500/month).

---

## Core Vision

### Problem Statement

Contractors — HVAC technicians, plumbers, electricians, landscapers, cleaners, general contractors — operate on tight schedules where each blocked day represents a specific, calculable revenue opportunity. When a customer fails to show (or cancels same-day with no notice), the contractor absorbs 100% of the cost: wasted travel, blocked schedule, and a job slot that cannot be recovered.

The no-show rate across trades without deposit requirements runs 12–22%. For a solo contractor doing five appointments per week, this translates to losing roughly one full working day every week to unpaid, unrecoverable no-shows — $14,250–$30,000 in annual lost revenue.

The root cause: **without a deposit, the customer has zero skin in the game**. Booking is free and cancellation is costless. Requiring a deposit changes the dynamic entirely — no-shows drop below 5% for contractors who implement deposits, according to industry data.

### Problem Impact

- **Financial:** Sole operator at 15% no-show rate → ~$14,250 in lost revenue + 112 wasted hours/year. Contractors doing 2–3 no-shows per week lose $30,000+ annually.
- **Opportunity cost:** Every no-show is a slot that could have been filled by a paying customer.
- **Emotional:** Contractors report frustration, distrust, and burnout — especially after expensive no-shows on large jobs (HVAC: ~$850, plumbing: ~$650, electrical: ~$750).
- **Operational:** Manual follow-up on deposit links consumes cognitive bandwidth that owner-operators cannot afford.

### Why Existing Solutions Fall Short

| Solution | Gap |
|----------|-----|
| **Jobber** | Deposit feature requires $69+/month plan; not SMS-native; no automated 24hr reminder sequence; setup is not workflow-native |
| **Housecall Pro** | 4–6 manual steps to request a deposit after estimate creation; no automated SMS follow-up; $59–$329/month for mostly unrelated features |
| **ServiceTitan** | Enterprise-grade, $500+/month; designed for 10+ staff operations; inaccessible to solo operators |
| **HandyPay** | Closest analog, but targets Caribbean/spa market; no 24hr reminder SMS; no contractor unpaid alert; no trades positioning |
| **Manual Stripe link** | Works, but no auto-reminder, no contractor alert, no tracking dashboard; relies on the contractor remembering to follow up |

**The gap:** Zero tools on the market combine (1) SMS-first deposit request, (2) 24hr auto-reminder, (3) contractor unpaid alert, (4) sub-$50/month price, (5) no FSM overhead.

### Proposed Solution

A standalone, mobile-friendly web app that handles exactly one workflow: collecting a deposit from a customer via SMS before the job starts.

**Core workflow:**
1. Contractor connects their Stripe account once (5-minute setup)
2. New job: enters customer name + phone number + job date + deposit amount (10-second entry)
3. Customer receives SMS immediately: *"Hi [Name], [Contractor Co.] has you confirmed for [Date]. Please pay your $[X] deposit to hold your spot: [Stripe link]"*
4. 24 hours before the job: if unpaid → customer receives auto-reminder SMS
5. 4 hours before the job: if still unpaid → contractor receives SMS alert: *"⚠️ [Name] hasn't paid the deposit for today's job"*
6. On deposit paid: contractor gets SMS confirmation; job auto-confirms
7. Dashboard shows all upcoming jobs, deposit status, and payment history

**v2 extensions:**
- Jobber and Housecall Pro webhook: job booked in Jobber → deposit request fires automatically
- State deposit law warnings (CA caps at 10% or $1,000; NV similar)
- Auto-cancel SMS if deposit not received by configurable cutoff

### Key Differentiators

1. **Automated SMS sequence** — The only tool that executes the full request → 24hr reminder → contractor alert chain without any manual intervention
2. **Standalone, not bundled** — No paying for a full FSM to get one deposit feature; this does one thing
3. **SMS-first** — Contractors and homeowners communicate by text; email-only deposit tools have lower open rates and response rates
4. **Trades-specific positioning** — Copy, onboarding, and pricing are built for HVAC, plumbing, electrical, cleaning, landscaping — not generic "service businesses"
5. **LTD pricing removes subscription anxiety** — $149 one-time vs. $69+/month for a feature inside a platform the contractor may not need
6. **ROI clarity** — The value narrative writes itself: one prevented no-show covers the cost for years

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Burned Solo HVAC Contractor

**Background:** Marcus runs a one-man HVAC operation in suburban Atlanta. He's been in business 7 years, does $280K/year in revenue, and manages his schedule on Google Calendar. He uses QuickBooks for invoicing and texts customers from his personal phone. He pays $29/month for Jobber Lite but hasn't upgraded because "the deposit thing is on the more expensive plan and I don't need everything else."

**Problem experience:** Marcus had three no-shows last month. One was a boiler replacement that would have been $1,400. He drove 40 minutes, waited 30 minutes, called twice, then drove back. He's done texting Stripe links manually but "always forgets to follow up the morning of." He's seen tools that charge $70/month but doesn't want to pay for features he won't use.

**Goals:** Stop showing up to empty houses. Spend less than 15 minutes/week managing deposits. Keep his setup simple — he operates from his truck.

**Success moment:** Marcus creates a job while sitting in his truck, the customer pays via text within an hour, and he gets a confirmation SMS. He doesn't think about the deposit again.

**Decision trigger:** One more costly no-show, or a recommendation in r/sweatystartup.

**Channels:** r/sweatystartup, r/HVAC, Facebook contractor groups, word-of-mouth from other tradespeople.

---

#### Persona 2: Diane — The Systematic Plumbing Owner-Operator

**Background:** Diane runs a 3-person plumbing business in Denver. She already collects deposits manually by texting Stripe links. Her process works but she has to set a calendar reminder for each job to follow up 24 hours before. She's the "organized one" in her contractor network and is always looking for tools to make her operations tighter and more professional.

**Problem experience:** Diane's problem isn't no-shows per se — her manual process is working. Her problem is the overhead. She manages 12–15 active jobs at a time; manually tracking 12 payment links and setting 12 reminder alarms is friction she wants eliminated. She also wants to look more professional: a "your appointment is tomorrow" auto-reminder feels more polished than a manual text.

**Goals:** Eliminate manual reminder tracking. Free up 30–45 minutes per week currently spent on deposit follow-up. Have a dashboard showing deposit status across all active jobs.

**Success moment:** Diane realizes she hasn't thought about deposit follow-ups in a week because everything fired automatically.

**Decision trigger:** AppSumo listing catches her eye; $149 one-time is an easy decision vs. her current manual overhead.

---

#### Persona 3: The Jobber/HCP User — Jake, Electrical Contractor

**Background:** Jake runs a 6-person electrical contracting team in Dallas. He's on Jobber Connect ($69/month) and uses it for scheduling, quoting, and invoicing. He technically has access to Jobber's deposit feature but finds it clunky — "I have to go into Payments, manually generate a deposit request, then send a separate email. My customers don't check email."

**Problem experience:** Jake wants the deposit request to fire as an SMS the moment he books a job in Jobber. He's aware no such automation exists and has submitted a feature request to Jobber. He'd pay for a lightweight add-on if it integrated cleanly.

**Goals:** v2 target: Jobber webhook fires deposit SMS automatically at job creation. Zero manual deposit workflow.

**Success moment:** Jake creates a job in Jobber, customer gets an SMS 30 seconds later, and deposit arrives before Jake even starts the next quote.

**Decision trigger:** Discovering the Jobber integration in v2; or willing to tolerate manual entry in v1 given the ROI.

---

### Secondary Users

**The customer (homeowner)** is the end recipient of the SMS payment link. They are not the product's buyer but are critical to its success. They need:
- An SMS that reads as professional and trustworthy (not a phishing link)
- A friction-free payment experience via Stripe (familiar, trusted)
- A clear explanation of why a deposit is being requested and what it covers

**Customer success:** Customer pays within 2 hours of receiving the link. No confusion about what they're paying for, no trust concerns about the payment link.

---

### User Journey

#### Primary Journey: The Burned Contractor (Marcus path)

**Discovery:**
- Google search: "contractor no-show deposit app" or "how to prevent contractor no-shows"
- Reddit: r/sweatystartup post asking "how do you handle no-shows?" → product mentioned by community member
- AppSumo: browsing "productivity" deals; sees "Pay once, recover deposits forever"

**Onboarding (target: < 10 minutes):**
1. Lands on homepage with headline: "Stop showing up to empty driveways"
2. Signs up with email, connects Stripe (OAuth — 5 minutes)
3. Creates first job: customer name, phone, date, deposit amount (1 minute)
4. Watches the SMS fire in real time
5. Gets a preview of what the 24hr reminder will look like

**Core Usage:**
- Enters a new job after every booking (target: < 30 seconds per job)
- Dashboard check: morning scan of today's jobs and deposit status
- Alert handling: if 4hr alert fires, decides whether to proceed or call customer

**Aha! Moment:**
The 24-hour reminder fires while Marcus is on another job, and he gets a "deposit received" SMS 20 minutes later. He didn't have to remember anything.

**Retention:**
- High: contractor has active jobs in the system; deposit automation is working
- Risk: churn if Jobber/HCP adds SMS deposit automation natively
- Advocacy: tells other contractors in his network, posts "this saved me from a $800 no-show" in r/sweatystartup

**Long-term:**
Becomes habitual — part of every booking workflow. LTD buyers never think about cost again. Subscription users justify the $39/month every time a deposit reminder fires.

---

## Success Metrics

### User Success Metrics

**Primary: No-show prevention rate**
- Target: Users who send deposits via the tool report no-show rate < 5% (vs. industry average 12–22%)
- Measurement: Survey at 30 and 90 days; optional self-reporting on dashboard
- Threshold: If users report no-shows not decreasing, product is failing at its core value prop

**Secondary: Time to first deposit request**
- Target: Contractor completes Stripe onboarding and sends first deposit SMS within 30 minutes of signup
- Measurement: Funnel analytics (signup → Stripe connect → first job created → first SMS sent)
- Threshold: If < 60% of signups send a deposit request within 7 days, onboarding is broken

**Tertiary: Deposit payment rate**
- Target: ≥ 75% of deposit requests result in payment within 24 hours
- Measurement: Stripe webhook tracking (request created → payment received timestamps)
- Benchmark: Establishes whether SMS-first delivery outperforms email-based competitors

**Qualitative success signal:**
- Contractor posts an unsolicited "this saved me from a $X no-show" in a community forum
- Review on G2/Capterra explicitly mentions the 24hr reminder and contractor alert as game-changing

### Business Objectives

**3-Month Targets (post-AppSumo launch):**
- 300–600 AppSumo LTD buyers → $29,700–$59,400 upfront revenue
- 50+ active daily users sending deposit requests
- First 10 G2/Capterra reviews (4.5+ average)
- Deposit success rate ≥ 75% (validates product quality)

**6-Month Targets:**
- AppSumo "Featured" status or 200+ reviews
- 100 monthly subscription customers (non-LTD) at $39/month = $3,900 MRR
- SEO: top-10 ranking for "contractor deposit app" and "no-show prevention contractor"
- Jobber webhook integration shipped (v2) → opens Jake-type segment

**12-Month Targets:**
- 500 MRR subscribers = $19,500/month
- $150K+ total revenue (LTD + subscriptions)
- 500+ reviews across G2, Capterra, AppSumo
- Recognized as the canonical tool for contractor deposit automation in r/sweatystartup community

### Key Performance Indicators

| KPI | Target | Timeframe | Measurement Method |
|-----|--------|-----------|-------------------|
| AppSumo LTD buyers | 500 buyers | Launch month | AppSumo dashboard |
| Avg LTD order value | $99–$109 | Launch month | AppSumo revenue ÷ buyers |
| Time to first deposit SMS (new user) | < 30 minutes | Ongoing | Funnel analytics |
| Deposit payment rate | ≥ 75% within 24hrs | Ongoing | Stripe webhook data |
| Monthly active users (deposit sent in past 30 days) | 70% of subscribers | 3 months | App analytics |
| MRR subscribers | 100 | Month 6 | Subscription system |
| MRR subscribers | 500 | Month 12 | Subscription system |
| No-show reduction (self-reported) | < 5% for tool users | 90-day survey | User survey |
| G2/Capterra avg rating | ≥ 4.5/5 | 6 months | Review platforms |
| Churn rate (monthly subscribers) | < 5%/month | Ongoing | Subscription system |

**Vanity metrics to ignore:** Total registered users (inactive users are noise); SMS delivery rate (operational, not success indicator); page views.

**Leading indicators:** % of signups who connect Stripe within 24hrs; % of connected users who create first job within 48hrs. If these drop below 50%, fix onboarding before scaling acquisition.

---

## MVP Scope

### Core Features

**Feature 1: Stripe Connect Onboarding**
- Contractor authenticates with Stripe OAuth
- No manual API keys; no payment processing setup required
- System stores Stripe Connect account ID and generates payment links using contractor's connected account
- Deposits land directly in contractor's Stripe account (no escrow, no intermediary)
- Acceptance criteria: Contractor can complete Stripe onboarding in < 5 minutes; tested on mobile

**Feature 2: Job Creation Form**
- Fields: Customer first name, customer mobile phone, job date + time, deposit amount
- Optional: job type (HVAC, plumbing, etc.) for SMS personalization
- Validation: US phone number format; deposit amount > $0; job date in future
- Submission fires the initial deposit SMS immediately
- Acceptance criteria: Form operable one-handed on a phone; submission < 10 seconds

**Feature 3: SMS Deposit Request (Twilio)**
- Customer receives: *"Hi [Name], [Business Name] has you confirmed for [Date]. Please pay your $[X] deposit to hold your spot: [Stripe link]"*
- Stripe link goes to a Stripe Payment Page (hosted, no custom checkout required in v1)
- SMS sender: Twilio 10DLC number registered to the product (not the contractor's number)
- Acceptance criteria: SMS delivered within 30 seconds of job creation; Stripe link functional on mobile

**Feature 4: 24-Hour Auto-Reminder SMS**
- Triggered: 24 hours before job start time, if deposit not yet received
- Customer receives: *"Reminder: your [Date] appointment with [Business Name] is tomorrow. Your $[X] deposit is due to confirm: [link]"*
- System checks Stripe payment status before sending (no reminder if already paid)
- Acceptance criteria: Fires within ±5 minutes of scheduled time; does not fire if deposit already paid

**Feature 5: 4-Hour Contractor Unpaid Alert**
- Triggered: 4 hours before job start time, if deposit still unpaid
- Contractor receives SMS to their mobile: *"⚠️ [Customer Name] has not paid the deposit for today's [Time] job. Deposit link: [link] | Job status: Unpaid"*
- Acceptance criteria: Contractor alert fires reliably; contractor can distinguish it from a paid confirmation

**Feature 6: Deposit Paid Confirmation**
- Triggered: Stripe webhook fires when payment received
- Contractor receives SMS: *"✅ [Customer Name] paid the $[X] deposit for [Date]. Job confirmed."*
- Customer receives SMS: *"Payment received! You're confirmed with [Business Name] for [Date]. See you then."*
- Acceptance criteria: Confirmation SMS fires within 60 seconds of payment; tested with Stripe test mode

**Feature 7: Job Dashboard**
- View: All jobs sorted by date; each shows customer name, date, deposit amount, status (Pending / Paid / Overdue)
- Overdue = unpaid and job date has passed
- Quick action: Resend deposit link (manual retry if needed)
- Mobile-responsive; designed for quick glance in a truck
- Acceptance criteria: Dashboard loads in < 2 seconds; works on iOS Safari and Android Chrome

### Out of Scope for MVP

| Feature | Reason for Deferral |
|---------|---------------------|
| Jobber / HCP webhook integration | Requires OAuth app approval from Jobber/HCP; builds on validated v1 demand |
| Custom SMS sender ID (contractor's number) | Requires per-customer A2P 10DLC registration — operational complexity; v1 uses shared pool |
| Auto-cancel workflow (auto-cancel job if deposit unpaid by X hours) | Edge case with liability implications; manual contractor decision is safer for v1 |
| State deposit cap warnings (CA, NV) | Legal edge case; add disclaimer in v1; full state logic is v2 |
| Email deposit request option | SMS-first is the differentiator; email dilutes positioning |
| Team/multi-user accounts | Target is solo/small operators; team features add auth complexity |
| Invoice generation | Separate product surface; Stripe handles receipts |
| Mobile native app (iOS/Android) | Responsive web app sufficient for v1; App Store submission delays launch |
| Customer-facing booking portal | Not the problem; contractor has existing booking flow |
| Reporting / analytics dashboard | Dashboard is operational (job status); analytics are v2 |
| White-label / agency plan | Post-LTD product expansion |

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **Technical validation:** ≥ 95% of scheduled reminder and alert SMSs fire within ±5 minutes of target time over 30 days
2. **Adoption validation:** ≥ 60% of Stripe-connected users send at least one deposit request within 7 days of signup
3. **Effectiveness validation:** ≥ 75% of deposit requests result in payment before the job date
4. **NPS validation:** Net Promoter Score ≥ 40 at 30-day survey (sent to first 50 users)
5. **Business validation:** 100 AppSumo LTD buyers in first 30 days of launch (validates demand; unlocks marketing spend)

**Go/No-go decision gate:** If fewer than 50% of active users send a second deposit request within 30 days of their first, investigate whether the product is genuinely saving them from no-shows or whether adoption is passive.

### Future Vision

**v2 (Post-LTD, Months 4–8):**
- Jobber webhook integration: job booked in Jobber → deposit SMS fires automatically, zero manual entry
- Housecall Pro webhook: same
- State deposit cap calculator: detects contractor's state, surfaces applicable cap with a UI warning
- Custom auto-cancel: contractor configures "auto-cancel job if deposit unpaid by [X] hours before start"; auto-cancel SMS sent to customer
- Basic reporting: monthly deposit recovery rate, no-show prevention estimate

**v3 (12+ months):**
- White-label option for larger contractors / franchise networks
- Adjacent market expansion: spas, salons, personal trainers (HandyPay's market — proven)
- Automated customer rebooking: if contractor cancels, system offers next available slot
- Stripe Capital integration: contractors with high deposit volume offered working capital advances
- Zapier / Make.com connector: connects to any CRM/scheduling tool without native integration

**Platform vision (3–5 years):**
The product becomes the trust layer between contractors and customers — starting with deposits, expanding to milestone payments, completion confirmations, and customer review automation. The AppSumo LTD base becomes the early-adopter community that drives the review moat (G2, Capterra, Trustpilot) that organic search acquisition will compound on for years.

The deepest moat: a contractor who has recovered 10 no-shows with the tool and left a review on AppSumo is a permanent brand ambassador. No amount of Jobber feature-shipping undoes that relationship.

---

*Product Brief generated: 2026-10-15 | Based on shortlisted idea (87/105) + market research | Ready for PRD*

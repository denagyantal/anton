---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/post-job-follow-up-automation.md
  - _bmad-output/planning-artifacts/market-research-post-job-follow-up-automation.md
workflowType: product-brief
lastStep: 5
project_name: post-job-follow-up-automation
product_name: ReviewPilot
user_name: Root
date: 2026-11-04
---

# Product Brief: ReviewPilot — Post-Job Follow-Up Automation for Service Businesses

---

## Executive Summary

**ReviewPilot** is a dead-simple, SMS-first automation tool that sends a 5-step follow-up sequence after every service job — getting small service businesses more Google reviews, repeat bookings, and referrals on autopilot. It targets the 6.5M HVAC techs, plumbers, cleaners, landscapers, and painters in the US who consistently do great work but never ask for reviews or referrals because they simply don't have time.

The core problem is a systematic gap between service quality and business growth: a typical service business does 50-150 jobs per month and follows up with zero of them. The average Google review is worth $200-500 in new customer LTV. ReviewPilot closes this gap by automating the entire post-job marketing cycle — thank you, review request, check-in, rebooking, and referral ask — triggered automatically on job completion.

**The white space is confirmed and unoccupied.** CraftBoop (launched April 2026 at $29/mo) validated the concept but is email-only, delivering 20% open rates. NiceJob ($75/mo) covers reviews but misses rebooking and referral. No sub-$100 tool offers SMS-first delivery + the full 5-step sequence + Jobber/Housecall Pro webhook integration. ReviewPilot fills this gap at $19-39/mo, with a $79 AppSumo LTD as the acquisition engine.

**Business case in one number:** A single new customer from improved Google visibility is worth $400 LTV to the average service business. The $79 LTD pays back in one job. The $19/mo pays back before the first sequence finishes.

**Target:** $14,250 MRR (750 customers) by month 12, plus $39,500 AppSumo LTD launch revenue.

---

## Core Vision

### Problem Statement

Service businesses (HVAC, plumbing, cleaning, landscaping, painting, pressure washing) are caught in a growth trap: they deliver excellent work but almost never convert that work quality into the Google reviews, repeat bookings, and referrals that drive sustained growth. The post-job marketing moment — the 24-48 hours after a successful job when customer satisfaction is highest — passes unused, every single time.

The average solo operator or small service team has zero bandwidth for manual follow-up. They finish a job, submit the invoice, and move to the next. A "please review us" card handed over in person converts at under 5%. Manually texting customers a week later almost never happens. CRM-based follow-up sequences in Jobber or Housecall Pro exist but are too complex to configure — fewer than 10% of service business owners who have access to these features have them active.

The result: a business that completes 100 jobs per month is leaving 90-95 Google review opportunities on the table every single month. Compounded over a year, that's the difference between 23 Google reviews (industry average for a 5-year-old service business) and 400+ reviews (what their most successful competitor has).

### Problem Impact

The downstream consequences of this post-job gap are severe and directly measurable:

- **Review deficit:** Businesses with fewer than 50 Google reviews are functionally invisible in local pack search. 93% of consumers read reviews before booking a local service. Going from 20 reviews (4.1 stars) to 100+ reviews (4.7 stars) lifts local search CTR from 14.6% to 34.6% — a 2.4x jump in inbound leads.
- **Rebooking loss:** Without a systematic check-in and rebooking prompt, customers who need seasonal service (HVAC tune-up, lawn care, gutter cleaning) often forget or book a competitor when the need arises. Automated rebooking prompts at the right interval recover 15-25% of churned customers.
- **Referral gap:** Referred customers have 16% higher LTV and a 44% repeat service rate vs. 22% for paid-ad acquired customers. An automated referral ask after every job, at the moment of highest satisfaction, generates 8:1 to 22:1 ROI on referral programs — but only if the ask is made.
- **Competitive disadvantage:** Service businesses that do manage post-job follow-up (whether through tools or dedicated staff) consistently dominate local search results, have higher average star ratings, and report lower cost-per-acquisition. The gap between businesses that follow up and those that don't compounds annually.

### Why Existing Solutions Fall Short

The market has three failure modes, each leaving the core problem unsolved:

**Failure Mode 1: Too complex, right price (Jobber/Housecall Pro built-ins)**
Both platforms include some review request capability on higher-tier plans. Fewer than 10% of users who have access to these features have them configured. The setup requires navigating workflow automation menus, selecting trigger conditions, and constructing message sequences — tasks that require marketing mindset, not trades mindset. The customer most likely to need ReviewPilot is the one who signed up for Jobber to track jobs and invoices, not to build marketing automation.

**Failure Mode 2: Right concept, wrong channel (CraftBoop)**
CraftBoop launched in April 2026 with exactly the right product concept: a 5-step automated follow-up sequence for service businesses at $29/mo. Email-only delivery is fatal in this market. SMS messages are read within 3 minutes, 90% of the time. Email open rates for service business follow-up are under 20%. CraftBoop is building the right thing on the wrong channel.

**Failure Mode 3: Right channel, wrong price (NiceJob, Spokk, Podium)**
NiceJob at $75/mo and Spokk at $149/mo are priced for businesses with dedicated office staff or marketing budgets. The solo HVAC tech who is the core target user will not pay $75/mo for a tool that also requires setup time and configuration effort. Podium at $399/mo is completely out of reach and addresses a different buyer entirely. TrueReview locks SMS behind the $99/mo tier. The $19-29/mo SMS-first band is completely empty.

**The specific gap ReviewPilot fills:** SMS-first delivery at $19-39/mo, with a complete 5-step sequence (not just review requests), Jobber/Housecall Pro webhook integration (zero manual entry after setup), and Google Business Profile link auto-generation (the specific friction point that stops review requests from converting).

### Proposed Solution

ReviewPilot is a focused, single-purpose tool that automates the entire post-job customer relationship cycle for service businesses.

**Core workflow:**
1. **Job completion trigger** — either via Jobber/Housecall Pro webhook (auto) or manual customer entry (3-tap mobile flow)
2. **5-message SMS (+ email fallback) sequence fires automatically over 14 days:**
   - **Day 0:** Personalized thank-you + 1-click satisfaction rating ("How did [technician name] do today?")
   - **Day 1:** If 4-5 stars → direct Google review link (auto-generated from GBP); if 1-3 stars → private feedback capture
   - **Day 3:** Check-in message ("Is everything still working well with your [service type]?")
   - **Day 7:** Vertical-specific rebooking prompt (cleaning: 4-week interval, HVAC: 6-month interval, lawn care: seasonal timing)
   - **Day 14:** Referral ask with shareable link ("Know a neighbor who needs [service]?")
3. **Dashboard:** Review count trend, sequence completion rates, rebooking conversions, referral sends

**What makes it "set it and forget it":**
- Jobber/HCP webhook means no manual customer entry for existing FSM users
- Google Business Profile link is generated once during onboarding; every subsequent review request uses the right URL
- TCPA consent language is baked into the customer-add flow — no compliance research required
- Vertical timing presets mean the rebooking interval is correct from day one

### Key Differentiators

ReviewPilot's competitive moat is a combination of five capabilities that no existing sub-$100 tool offers simultaneously:

| Differentiator | Why It Matters | Competitive Gap |
|---|---|---|
| **SMS-first delivery** | 98% open rate vs. 20% email; reviews actually happen | CraftBoop email-only; NiceJob/Spokk too expensive |
| **Complete 5-step sequence** | Thank you + review + check-in + rebooking + referral in one tool | NiceJob review-only; no sub-$100 tool covers all 5 |
| **Jobber + HCP webhook** | Zero manual entry; triggers on actual job completion | No sub-$100 tool offers native FSM integration |
| **GBP link auto-generation** | Direct review URL removes the #1 friction point | All competitors send to generic Google search |
| **Vertical-specific timing** | Cleaning rebooking ≠ HVAC tune-up timing | Generic templates fail for seasonal businesses |

**Why now:** CraftBoop launched 7 months ago and has validated the concept with paying users — but hasn't added SMS. NiceJob hasn't launched a Starter tier. The 290,000 businesses on Jobber and Housecall Pro represent a captive, high-intent audience with no good post-job automation option below $75/mo. The window to establish market position with a Jobber App Marketplace listing is 6-12 months before CraftBoop adds SMS or NiceJob cuts pricing.

---

## Target Users

### Primary Users

#### Persona 1: Marcus — Solo HVAC Technician

**Background:** Marcus is 38, runs his own HVAC business in suburban Atlanta with one part-time helper. He completed trade school at 22, worked for a large HVAC company for 10 years, and went independent in 2018. He now does 80-120 jobs per month — mostly residential maintenance and emergency repairs — generating $340K in annual revenue. He uses Jobber for scheduling and invoicing ($69/mo plan).

**Current reality:** Marcus has 31 Google reviews after 8 years in business. His main competitor, a 3-person operation, has 287 reviews. He knows this costs him jobs — he sees his Google Business Profile ranking below them for "HVAC repair Atlanta" — but he can't figure out how they're getting so many reviews. He tried texting a few customers after jobs last spring, got three reviews, and then stopped because "I never remember to do it after a long day."

**Problem experience:** Every finished job is a closed loop. Marcus invoices, collects payment, packs the truck, and drives to the next call. Post-job marketing is a concept he understands but cannot execute. The Jobber Marketing Suite costs $99/mo and "looks complicated." He has not set it up.

**What success looks like:** "I wake up and there's another Google review notification. I didn't do anything — it just happened." For Marcus, 5 new Google reviews per month would meaningfully shift his local search ranking within 90 days. 10/month would put him at 150+ reviews within a year, transforming his competitive position.

**Key interaction with ReviewPilot:** Marcus connects his Jobber account during onboarding (10 minutes, one-time). After that, every job completion in Jobber triggers ReviewPilot automatically. He sees a weekly summary showing 3 new reviews this week, 1 rebooking scheduled, and 2 referral links shared. He doesn't touch the tool day-to-day.

---

#### Persona 2: Sofia — Cleaning Service Owner

**Background:** Sofia is 44, runs a 6-cleaner residential cleaning service in Denver. She founded the business 7 years ago and now does 300+ jobs per month — primarily recurring weekly/bi-weekly residential clients. Revenue is $520K/year. She uses ZenMaid for scheduling.

**Current reality:** Sofia's business is built on recurring clients. Her biggest growth lever is referrals — when a customer refers a neighbor, that neighbor almost always becomes a recurring client. But Sofia's referral asks happen only in conversation, never systematically. She has a 15% annual churn rate; most churning clients never explain why. She has 48 Google reviews.

**Problem experience:** Sofia knows her clients are happy — her Net Promoter Score (which she measures informally) is high. But she has no systematic way to capture that satisfaction as reviews, referrals, or rebooking confirmations. When clients stop scheduling, she only finds out when their spot opens up on the calendar.

**What success looks like:** Sofia wants three things ReviewPilot delivers directly: a 4-week rebooking prompt catches clients who forgot to rebook before their slot fills, a check-in at Day 3 catches clients who had a problem before they write a negative review, and a referral ask at Day 14 converts her highest-satisfaction clients into active recruiters.

**Key interaction with ReviewPilot:** Sofia connects ZenMaid via API (or uses manual entry until integration is built). She sets the cleaning vertical preset (4-week rebooking interval, neighbor referral language). The referral link tracks which customers sent referrals, so she can thank them personally.

---

#### Persona 3: Derek — Landscaping / Lawn Care (5-person crew)

**Background:** Derek is 31, runs a landscaping and lawn care operation in suburban Ohio. 5 crew members, 200+ residential clients during peak season (April-October), $280K seasonal revenue. He uses Housecall Pro.

**Current reality:** Derek's business is intensely seasonal. Spring cleanup and fall cleanup are the two moments when he most needs customers to rebook — but those customers are thinking about their lawn, not checking their phones for reminders. He loses 20-30% of clients each winter who don't rebook for spring, then ends up paying for Google Ads in March to replace them. He has 19 Google reviews.

**Problem experience:** Derek's rebooking problem is timing-specific: he needs to reach customers in late February/early March for spring cleanup, and in October for fall cleanup. His current approach is a mass text from his personal phone in February — impersonal, not tracked, and easily ignored.

**What success looks like:** A seasonal rebooking sequence that fires at the right time for each client, with the right message. A systematic referral ask after every spring cleanup, when neighbors are outside watching and asking "who does your lawn?" — the highest-intent referral moment.

**Key interaction with ReviewPilot:** Derek connects Housecall Pro via webhook. He uses the landscaping vertical preset (spring rebooking timing, neighbor referral language). ReviewPilot identifies which customers haven't rebooked for the next season and sends the rebooking prompt automatically.

---

### Secondary Users

**Business coaches and trade consultants** who work with service business owners will discover ReviewPilot through Reddit and recommend it to clients — accelerating adoption in existing coaching communities.

**Franchise and multi-location service brands** (cleaning franchises, HVAC franchises) represent a future expansion segment. A single franchisor enabling ReviewPilot for 50 franchise locations = 50 paying accounts activated simultaneously. This segment requires a multi-location dashboard and white-label capability (post-MVP).

**Jobber and Housecall Pro resellers / implementation partners** who help service businesses configure their FSM tools — a natural channel to recommend ReviewPilot as the missing post-job marketing layer.

---

### User Journey

#### Discovery Phase

**Organic:** Marcus Googles "how to get more Google reviews HVAC" after noticing his competitor's review count. He finds a blog post or Reddit thread mentioning ReviewPilot. Alternatively, he sees a post in r/sweatystartup: "I built a tool that automatically texts your customers after every job to get Google reviews — feedback welcome from HVAC/landscaping folks."

**AppSumo:** Sofia browses AppSumo for business tools and sees "ReviewPilot: Set it once, never ask for reviews manually again — connects to Jobber in 2 minutes." The $79 LTD is in impulse-buy territory.

**Jobber Marketplace:** Derek is in the Jobber App Marketplace looking for add-ons and sees ReviewPilot listed as a verified integration. He clicks through, reads that it auto-triggers after job completion, and starts the 14-day trial.

#### Onboarding Phase

The onboarding goal is under 10 minutes to first sequence:

1. **Connect FSM tool** (Jobber or HCP OAuth — 2 minutes, one-time)
2. **Connect Google Business Profile** (Google sign-in → auto-detect GBP listing → generate review link — 3 minutes, one-time)
3. **Select vertical preset** (HVAC, Cleaning, Landscaping, Plumbing, Other — 30 seconds)
4. **Preview the 5-message sequence** with real customer name and business name filled in (1 minute review)
5. **Enable TCPA consent** (checkbox with pre-written disclosure language for the customer intake form — 2 minutes)

First sequence fires on the next job completed in Jobber/HCP.

#### First Aha Moment

Marcus completes a job on Tuesday. Wednesday morning he gets a ReviewPilot notification: "Mike just rated you 5 stars and left a Google review." He opens Google Maps and sees his new review — written by a customer he would never have thought to follow up with. This is the moment of emotional lock-in.

#### Core Usage Pattern

Day-to-day: zero interaction required. ReviewPilot runs entirely in the background. The only touchpoints are:
- Weekly email summary (optional): "This week: 4 new reviews, 2 rebookings scheduled, 1 referral sent"
- Occasional dashboard check to see review velocity trend
- One-time customization of message templates (optional)

**Engagement milestone:** 90 days after onboarding, users who have seen 10+ new Google reviews are at near-zero churn risk. The product has proven ROI. Word-of-mouth starts.

#### Referral / Expansion Loop

Marcus mentions ReviewPilot in a r/sweatystartup comment. Sofia recommends it to two other cleaning service owners in her Facebook group. Derek's Housecall Pro reseller starts recommending it to new clients. Each satisfied user becomes a channel — driven by the same emotional trigger the product creates for their customers ("it just works without me doing anything").

---

## Success Metrics

The core user success metric is simple: **more Google reviews, automatically, without manual effort.** Every other metric is downstream of this.

### User Success Metrics

| Metric | Target | Why It Matters |
|---|---|---|
| New Google reviews per month per active user | 5-15 (depends on job volume) | The core ROI proof point; below 3/month = churn risk |
| SMS sequence completion rate (Day 0 → Day 14) | >60% per customer | Indicates message quality and deliverability health |
| Review request → review conversion rate | >25% (industry SMS average is 34%) | Below 15% = template or delivery issue to fix |
| Time from signup to first review received | <7 days | Long time-to-first-review predicts early churn |
| Rebooking prompt → confirmed rebooking rate | >15% per prompt sent | Proves the rebooking sequence has real value |
| Referral link shared → new customer inquiry | >8% conversion | Tracks referral program effectiveness |
| Churn indicator: users who stop logging in | <5% per month of active users | Leading indicator of retention health |

**The defining success signal:** A user who has received 10+ new Google reviews via ReviewPilot will almost never cancel. The product has fundamentally changed their business trajectory at that point.

### Business Objectives

**Month 3 (post-launch):**
- 50 paying customers ($950 MRR)
- AppSumo LTD launched: 500 sales target ($39,500 one-time revenue)
- Net Promoter Score baseline established (target: >60 for trades segment)
- Jobber App Marketplace listing live

**Month 6:**
- 200 paying customers ($3,800 MRR)
- Housecall Pro integration live
- 10+ customer case studies with before/after review counts
- CAC < $40 (driven by organic + AppSumo)

**Month 12:**
- 750 paying customers ($14,250 MRR = $171K ARR)
- LTV:CAC ratio > 3:1 (at $29/mo avg, 18-month average lifespan = $522 LTV)
- Churn rate < 3%/month (annual retention > 70%)
- Google Trends organic traffic growing MoM for target keywords

**Month 18:**
- 1,500 paying customers ($28,500 MRR = $342K ARR)
- Agency/multi-location tier launched ($99-199/mo)
- Referral program live (users invite peers → credited month of service)
- MRR growth rate > 15% MoM (driven by word-of-mouth + content SEO)

### Key Performance Indicators

**Acquisition KPIs:**

- **MoM new paying customer growth:** 25% in months 1-6; stabilize to 15% by month 12
- **Trial-to-paid conversion rate:** >35% (industry benchmark: 25%; ReviewPilot's high-intent acquisition channels should beat this)
- **Payback period:** <3 months (at $29/mo, $87 gross revenue vs. target CAC of $40)
- **AppSumo LTD buyers:** 500 target in launch window (comparable tools in adjacent categories)

**Engagement KPIs:**

- **Weekly active users / total paid users:** >70% (tool should be "running in background" — weekly summary email = proxy for active)
- **Sequences triggered per active user per month:** >15 (median job volume for target segment)
- **Days-to-first-sequence:** <3 days after signup (Jobber/HCP webhook users should be near-instant)
- **Feature utilization: Google review link generation:** >90% of active users (core differentiator; non-use = risk of "just using CraftBoop instead")

**Retention KPIs:**

- **Monthly churn rate:** <3% (industry benchmark for SMB SaaS: 5-7%; ReviewPilot's stickiness should beat this once reviews start flowing)
- **12-month cohort retention:** >65%
- **NPS:** >60 (trade business owners are skeptical; NPS >60 = genuine product-market fit)
- **Support tickets per active user per month:** <0.5 (complexity = churn for this segment)

**Revenue KPIs:**

- **MRR growth:** $0 → $14,250 by month 12
- **ARPU:** $19 (Solo tier) blending toward $24 as Growth tier adoption increases
- **LTD revenue:** $39,500 (500 × $79) in AppSumo launch window
- **Annual contract attachment rate:** >20% by month 12 (annual plans = retention lever)

---

## MVP Scope

### Core Features

The MVP must accomplish one thing above all else: a service business owner connects their Jobber account, sets their vertical, and within 24 hours receives a notification that a customer left them a Google review. Everything else is secondary.

**MVP Feature Set (6-week build estimate):**

**1. SMS Sequence Engine (Must Have)**
- 5-message sequence with configurable timing (Day 0, 1, 3, 7, 14 — adjustable)
- SMS delivery via Twilio or Telnyx (10DLC-registered numbers per account)
- Email fallback for customers without mobile numbers
- STOP / opt-out handling per TCPA requirements
- Delivery status tracking (sent, delivered, failed)
- Vertical timing presets (HVAC, Cleaning, Landscaping, Plumbing, Other)

**2. Google Business Profile Integration (Must Have)**
- One-time Google OAuth sign-in
- Auto-detect GBP listing for the business
- Generate and store the direct review URL (bypasses the "search and click" friction)
- Use GBP review link in Day 1 message automatically
- Display current review count on dashboard

**3. TCPA Compliance Layer (Must Have)**
- Consent checkbox with FCC-compliant disclosure language on the "Add Customer" form
- Consent timestamp and language version stored per customer record
- STOP handling: auto-remove from all future sequences, log opt-out
- Quiet hours enforcement (8AM-9PM local time by default)
- 10DLC registration support (pre-registered numbers with carriers)

**4. Jobber Webhook Integration (Must Have — highest moat value)**
- OAuth integration with Jobber API
- Listen for `job.completed` webhook event
- Auto-create customer record + trigger sequence on job completion
- Map Jobber job type to ReviewPilot vertical preset
- Handle duplicate prevention (same customer, multiple jobs)

**5. Customer Management (Must Have)**
- Manual customer entry form (name, phone, job type, job date)
- Customer list with sequence status per customer
- Ability to pause or stop a sequence for a specific customer
- Simple search/filter

**6. Dashboard (Must Have — minimum viable)**
- Total Google reviews (current count from GBP API)
- Reviews this month (fetched from GBP)
- Sequences active / completed / paused
- Delivery rate (SMS delivered %)
- Review conversion rate (sequences sent → reviews received)

**7. Onboarding Flow (Must Have)**
- Step 1: Connect Jobber or manual entry choice
- Step 2: Connect Google Business Profile
- Step 3: Select vertical
- Step 4: Preview sample sequence
- Step 5: Enable and confirm TCPA language
- Target: Under 10 minutes to first sequence enabled

**8. Message Template Library (Must Have — minimum viable)**
- 5 default templates per vertical (HVAC, Cleaning, Landscaping, Plumbing, Generic)
- {customer_name}, {business_name}, {technician_name}, {service_type}, {review_link} variables
- One-click preview with real data
- Basic customization (edit message text; no A/B testing in MVP)

### Out of Scope for MVP

The following are explicitly deferred to prevent scope creep and hit the 6-week build target:

| Feature | Why Deferred | When to Add |
|---|---|---|
| Housecall Pro webhook integration | Same pattern as Jobber but adds 1-2 weeks; Jobber is larger market | v1.1 (Month 2 post-launch) |
| A/B testing for message templates | Adds analytics complexity; not needed to prove core value | v1.2 |
| Multi-location / agency dashboard | Different buyer persona; separate pricing tier needed | v2.0 |
| White-label | Low MVP priority; needed only for agency GTM | v2.0 |
| Advanced analytics (conversion funnels, cohort retention) | Nice-to-have; basic dashboard sufficient for MVP | v1.2 |
| Referral tracking with attribution | Referral links work; tracking which customer sent which referral adds complexity | v1.1 |
| AI-personalized message variants | No data to train on in MVP; would add perceived complexity | v2.0 |
| In-app review response drafting | Different product category; Jobber already handles this | Out of scope |
| Review gating (block negative reviews) | TCPA/legal risk; compliance complexity; controversial | Out of scope (evaluate carefully) |
| ZenMaid / ServiceTitan / FieldPulse integrations | Additional integration effort; Jobber first | v1.2+ |
| Annual billing with discounts | Payment complexity; monthly first | v1.1 |
| iOS / Android mobile app | Web app is sufficient for onboarding and dashboard; trades users primarily on mobile browser | v2.0 |

### MVP Success Criteria

The MVP is successful when it achieves the following gates, in order:

**Gate 1 — Technical validation (Week 6):**
- [ ] 10 beta users onboarded (Jobber webhook working end-to-end)
- [ ] SMS delivery rate >95% across all 10 test accounts
- [ ] Google review link correctly generated for all 10 GBP accounts
- [ ] TCPA consent flow passing legal review

**Gate 2 — Product-market fit signal (Week 10, 4 weeks post-beta):**
- [ ] At least 7 of 10 beta users have received ≥1 new Google review via ReviewPilot
- [ ] At least 3 beta users use the phrase "I didn't do anything" when describing how they got new reviews
- [ ] NPS from beta cohort ≥ 50
- [ ] Zero beta user churns due to setup complexity

**Gate 3 — Commercial validation (Month 3):**
- [ ] 50 paying customers at $19+ /mo
- [ ] Trial-to-paid conversion ≥ 30%
- [ ] Churn rate ≤ 5% (Month 2 cohort)
- [ ] At least 1 organic referral (a beta user recommends it unprompted to another business owner)

**Gate 4 — AppSumo readiness (Month 3):**
- [ ] 10+ verified customer testimonials with before/after review counts
- [ ] Demo video under 3 minutes showing Jobber → job completion → SMS → Google review
- [ ] Support capacity to handle 500 LTD buyer onboarding within 2-week window

If Gate 2 is not met (users not receiving reviews), the MVP is NOT ready for paid launch. This is the core value proposition test.

### Future Vision

**ReviewPilot in 18 months — The Post-Job Marketing Layer for Service Businesses:**

ReviewPilot becomes the standard "post-job marketing OS" for service businesses — the layer that sits between FSM tools (Jobber, HCP, ZenMaid, ServiceTitan) and the customer relationship, automating every growth touchpoint that the FSM tool doesn't handle.

**Phase 2 (Months 7-12): Expand integrations and sequence depth**
- Housecall Pro, ZenMaid, FieldPulse, Workiz webhook integrations
- Referral tracking with attribution dashboard and referral link management
- Seasonal campaign layer (spring outreach, holiday check-ins, weather-triggered rebooking)
- Annual plan option with 2-month discount incentive

**Phase 3 (Months 12-18): Agency and multi-location tier**
- Multi-location dashboard (franchises, regional service businesses)
- White-label for cleaning/HVAC franchise brands
- Agency portal (marketing agencies managing multiple service business clients)
- Pricing: $99-199/mo per location; $499/mo agency seats

**Phase 4 (Months 18-30): Platform expansion**
- AI-personalized message variants trained on highest-converting templates per vertical
- Review monitoring and response drafting (AI drafts responses to new Google reviews)
- Customer lifetime value scoring (predict which customers are churn risks vs. referral candidates)
- Integration marketplace: become the middleware that connects any FSM tool to any marketing action

**The long-term vision:** ReviewPilot is to post-job marketing what Jobber is to job management — the vertical SaaS that becomes indispensable for service businesses not because it has the most features, but because it automates the one thing that changes business trajectory. ZenMaid proved that a focused, single-vertical tool can reach $3M ARR bootstrapped. ReviewPilot targets a horizontal across all service verticals, with vertical-specific customization as the depth layer.

**TAM if this plays out:** At 1% penetration of 5.5M addressable US service businesses × $24/mo ARPU = $15.8M ARR. At 2% penetration = $31.7M ARR. This is the category-defining product for post-job marketing automation in the sub-$50/mo tier.

---

## Competitive Positioning Summary

| | ReviewPilot | CraftBoop | NiceJob | Spokk | Podium |
|---|---|---|---|---|---|
| **Price/mo** | $19-39 | $29 | $75-125 | $149-179 | $399+ |
| **SMS delivery** | ✅ Primary | ❌ | ✅ | ✅ | ✅ |
| **Full 5-step sequence** | ✅ | ✅ | ❌ Review only | ✅ | ❌ |
| **Jobber webhook** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **GBP link auto-gen** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Vertical timing presets** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Target buyer** | Solo/small | Solo/small | Small/medium | Medium | Multi-location |

**Positioning statement:** "ReviewPilot sends automated SMS follow-ups after every job — getting you Google reviews, repeat bookings, and referrals on autopilot. Connects to Jobber and Housecall Pro in 2 minutes. $19/mo or less than your monthly coffee spend."

---

## Appendix: Research Sources

- Market research: `_bmad-output/planning-artifacts/market-research-post-job-follow-up-automation.md`
- Shortlisted idea: `ideas/shortlisted/post-job-follow-up-automation.md`
- CraftBoop competitor: https://www.craftboop.com
- NiceJob: https://nicejob.co
- Spokk: https://spokk.io
- Jobber home service trends: https://www.getjobber.com/home-service-trends-report/
- TCPA compliance guide: https://activeprospect.com/blog/tcpa-text-messages/
- Google review ROI: https://renewlocal.com/blog/how-much-are-google-reviews-worth-roi

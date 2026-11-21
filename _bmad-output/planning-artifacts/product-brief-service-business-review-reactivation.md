---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/service-business-review-reactivation-sequences.md
  - _bmad-output/planning-artifacts/market-research-service-business-review-reactivation.md
workflowType: product-brief
lastStep: 6
product_name: Service Business Review + Reactivation Sequences
working_title: TextBack (working title)
date: 2026-11-21
author: Root
score: 92/105
tier: 1
verdict: BUILD
ltdPrice: $59–79
---

# Product Brief: Service Business Review + Reactivation Sequences

---

## Executive Summary

Service businesses — plumbers, HVAC techs, landscapers, house cleaners, painters — do great work and then vanish. No follow-up, no review request, no rebooking nudge. The result: zero Google reviews, lost repeat customers, and $8,000–$12,000 in customer lifetime value silently leaking away after every job.

Three concurrent product launches in Q1–Q3 2026 (CraftBoop, OwePilot, HandyPay) confirm this customer segment is now ready to pay for automation tools. CraftBoop ($29/month, launched April 2026) proved the market exists with real paying users — but it uses email-only sequences that reach just 20% of recipients. Meanwhile, SMS reaches 98%+ of recipients within 90 seconds.

**TextBack** (working title) fills the gap: SMS-first post-job follow-up sequences with a direct-to-review Google link, automated 90/180-day reactivation triggers, and optional field service management (FSM) integration. It costs the same as CraftBoop ($29–49/month) but achieves 4–5x the engagement from the first message.

The build window is 6–9 months before CraftBoop adds SMS. The MVP is 2–3 weeks of coding. The AppSumo launch path is validated by a near-identical product (More Good Reviews, 4.9/5 from 81 reviews at $79–$316 LTD). This is a **Tier 1 BUILD decision** at a moment when market timing, competitor weakness, and channel access align perfectly.

---

## Core Vision

### Problem Statement

Solo and small-team service businesses (1–10 employees) consistently fail to capture the customer value they create. After completing a job:

- They never ask for a Google review — the ask-verbally approach achieves sub-5% conversion
- They send no rebooking reminder — repeat customers drift to whoever texts them first
- They never reach out to dormant customers — hundreds of past customers sit idle, worth $8K–$12K each in lifetime value

The core failure is not willingness — it's friction. A plumber finishing their seventh job of the day isn't going to manually text every customer. The automation tools that exist either cost $400/month (Podium, Birdeye — overkill for a 3-person shop) or use email, which their customers rarely open (CraftBoop, NiceJob).

**The specific unbuilt gap:** No tool at $29–75/month sends post-job SMS sequences with a direct Google review link AND fires a 90/180-day reactivation trigger when a customer goes dormant.

### Problem Impact

For the target business owner, this problem compounds over time:

- **Review gap:** A plumber with 5 reviews loses to a competitor with 50. Google Map Pack placement (top 3 local results) drives 40–60% of service calls for contractors who achieve it. Without reviews, they stay invisible.
- **Rebooking gap:** HVAC and cleaning businesses report 30–60% repeat customer rates when they actively follow up — but near-zero without it. Each lost repeat customer represents 2.4–3.1x the value of a one-time sale.
- **Reactivation gap:** A single reactivation campaign run against dormant customers generates $8,000–$25,000 in recovered revenue in the first 30 days for mid-size shops. This revenue is effectively free — no acquisition cost, proven quality customers.

### Why Existing Solutions Fall Short

| Tool | Why It Fails for This Buyer |
|------|----------------------------|
| **CraftBoop** ($29/mo) | Email-only — 20% open rate. No direct Google review link. No reactivation triggers. No FSM integration. |
| **NiceJob** ($75/mo) | Partial SMS, not SMS-first. No multi-step sequences. No reactivation. Too expensive for solo tradespeople. |
| **Podium** ($399/mo) | Powerful, but 10–13x the target price. Constant Reddit complaints: "too expensive for a 2-person shop." |
| **GoHighLevel** ($97/mo) | Built for agencies managing hundreds of clients. Overwhelming complexity. No trade-specific templates. |
| **Jobber/HCP built-in** | Email-only review requests. No sequences. No reactivation. Switching cost prevents them from leaving FSM for review features. |

**The gap is structural, not incidental.** CraftBoop chose email because SMS adds compliance overhead (10DLC registration). Podium chose enterprise because that's where the ARPU is. No one at $29–49/month has built SMS-first sequences + direct Google review link + dormant customer reactivation for trades.

### Proposed Solution

**TextBack** is a focused SMS-first tool for 1–10 person service businesses. After a job is marked complete (manually triggered or via FSM webhook), it fires:

1. **Day 0 — Thank You SMS** (within 2 hours): "Hi [Name], thanks for letting Mike's Plumbing take care of your [job type] today! Hope everything looks good."
2. **Day 1 — Review Request SMS**: "If you have 30 seconds, your Google review helps us help more neighbors. Here's the direct link: [one-tap link]"
3. **Day 14 — Rebooking Nudge SMS**: "Hi [Name], it's been two weeks since your [job]. Ready to schedule your next appointment or have any questions? Reply to book."
4. **Day 90 / Day 180 — Reactivation SMS**: "Hey [Name], it's been a while since we heard from you. This month we're offering [seasonal offer] — want to get something on the calendar?"

The direct Google review link (generated from the business's Google Place ID) is the key detail — the customer taps once, reviews in one step. No hunting for the business profile, no searching, no instructions.

### Key Differentiators

1. **SMS-first, not email-first** — 98% open rate vs. 20% for email. The first message alone outperforms an entire email sequence.
2. **Direct Google review link** — One-tap from the customer's perspective. No existing tool at this price point generates this link in the SMS itself. This feature alone doubles review conversion rates vs. a text asking customers to find the profile themselves.
3. **90/180-day reactivation trigger** — Set-and-forget dormant customer win-back. Pure found money with no additional effort after setup. No competitor under $97/month has this.
4. **Trades-specific templates** — Copy written for plumbers, HVAC techs, landscapers, and cleaners — not generic "valued customer" language.
5. **FSM integration** — Jobber and Housecall Pro webhook triggers automate the job completion event. For the 5+ job/day business, this is the difference between "tool I use" and "tool I love."
6. **Pricing parity with CraftBoop** — $29/month baseline removes the "too expensive" objection. The upgrade path ($49/month for FSM integrations + reactivation sequences) is justified by clear ROI.

---

## Target Users

### Primary Users

#### Persona 1: "Solo Mike" — The 1-Person Tradesperson

**Background:** Mike runs a solo plumbing operation. He does 5–8 jobs per day, earns ~$280K/year in revenue, and spends 70% of his time doing physical trade work. He checks his phone constantly (texts and calls are how customers reach him) but never uses a desktop. He has 11 Google reviews and his competitor down the street has 94.

**Current behavior:** After finishing a job, Mike drives to the next one. He occasionally tells customers "if you're happy, leave me a Google review" in person, which works about 3–5% of the time. He has no CRM. His "customer list" is whatever's in his phone contacts and old invoices.

**Pain points:**
- Knows he's losing jobs to better-reviewed competitors but doesn't know how to fix it
- Tried email marketing once, got 15% open rates, gave up
- Has 400+ past customers he's never sent a single follow-up to
- Hates paperwork and anything that feels like "marketing"

**What success looks like for Mike:** He finishes a job, the tool sends the thank-you and review texts automatically, and two weeks later he sees new Google reviews without having done anything. He logs in once a month to see the stats. His 11 reviews become 85 within 6 months.

**Discovery path:** Reddit (r/sweatystartup, r/Plumbing), Facebook Groups ("Plumbers Business Network"), word-of-mouth from another tradesperson.

**Willingness to pay:** $29/month if he sees 2–3 real reviews in the first week. LTD at $59 is an easy buy if he's heard about it on Reddit.

---

#### Persona 2: "Office Manager Amanda" — The 5-Person Shop Coordinator

**Background:** Amanda works for a 5-person HVAC company doing ~$1.2M/year. She manages scheduling, invoices, and customer communication through Housecall Pro. She's looking for tools to reduce manual work and is the actual buyer/decision-maker for software tools under $200/month.

**Current behavior:** After a job, Amanda manually texts or calls the customer if the technician flagged a follow-up. She sends a review email from HCP that gets ~18% open rates. She's aware of Podium but the $399/month price was rejected by the owner.

**Pain points:**
- Spends 30–45 minutes per day on manual customer follow-up
- Review requests from HCP's built-in tool are inconsistent and email-only
- Has 800 customers in HCP who haven't booked in 6+ months — she knows they're valuable but has no tool to reach them
- Owner asks why the shop only has 23 Google reviews after 6 years

**What success looks like for Amanda:** She sets up TextBack once, connects it to HCP, and the sequences run automatically. She checks the dashboard weekly and sees review counts climbing. She runs a reactivation campaign on the 800 dormant customers and books $15K in new service calls in the first month.

**Discovery path:** HCP App Marketplace, AppSumo, recommendations from other office managers in trade Facebook groups.

**Willingness to pay:** $49/month (Pro tier with FSM integration). Can justify with one additional booked job per month ($400+).

---

### Secondary Users

**Multi-Location Franchise Operators (5–20 locations):**
Once proven at the solo/small-shop level, franchise groups (Mr. Rooter, Merry Maids, Five Star Painting affiliates) represent a natural upsell. They need the same sequences but with:
- Centralized brand management (consistent templates across locations)
- Franchise-level dashboards showing review performance per location
- Multi-location pricing ($19/additional location vs. flat per-seat pricing)

These buyers are not the initial target but are the most valuable long-term accounts. Each franchise group is worth $500–$2,000/month vs. $29–49 for a solo tradesperson.

**Trade Business Coaches and Consultants:**
Business coaches who serve the trades market (marketing coaches for plumbers, HVAC growth consultants) become force multipliers. If TextBack solves their clients' biggest visible problem (reviews), coaches recommend it to their entire roster. This is a secondary channel, not a user segment.

### User Journey

#### Solo Mike's Journey

**Discovery:**
Mike sees a post in r/sweatystartup: "Built a tool that gets plumbers 50+ Google reviews automatically — testing for free." He DMs the founder, gets a free beta trial.

**Onboarding (5 minutes):**
1. Enters business name + Google Place ID (tool finds it via search)
2. Enters his phone number (receives a test sequence to validate)
3. Sets job types (plumbing, drain, emergency call)
4. Adds first customer manually (name + phone + job date)
5. The tool generates a preview of all 4 messages with his business name and the Google review link

**First Value Moment (Day 2):**
Mike checks the dashboard and sees that the customer he added yesterday clicked the Google review link. By end of week 1, 2 of his 5 customers from that week left reviews. He texts the founder: "this actually works."

**Core Usage Pattern (Weekly):**
- After each job, Mike triggers the sequence (or it auto-triggers from Jobber)
- Once set up, he doesn't touch it
- Monthly login to check: reviews received, messages sent, reactivation campaign results

**Reactivation "Aha!" Moment (Month 3–4):**
Mike imports his old customer list (CSV export from his invoicing tool). The 90-day reactivation trigger fires on 47 customers who haven't booked in 90+ days. 8 of them respond and book new jobs. That's ~$3,200 in revenue from a list that was sitting idle.

**Retention and Word-of-Mouth:**
Mike posts in r/sweatystartup: "Went from 11 to 67 Google reviews in 4 months using [TextBack]. AMA." This post drives 200+ new signups in a week.

---

#### Amanda's Journey (Office Manager, Housecall Pro)

**Discovery:**
Amanda finds TextBack in the HCP App Marketplace while looking for ways to improve their review rate.

**Onboarding (15 minutes):**
1. Connects HCP account via API key (one-time)
2. TextBack pulls business profile, job types, and customer list from HCP
3. Amanda customizes the SMS templates for HVAC-specific language
4. Enables the HCP trigger: "when job status changes to Complete → fire sequence"
5. Configures 90-day and 180-day reactivation triggers
6. Reviews compliance settings (opt-out language, TCPA consent note in job confirmation email)

**First Value Moment:**
Next job completed in HCP auto-fires the sequence. No manual action from Amanda. By end of week 1, 7 jobs have fired sequences automatically.

**Reactivation Campaign:**
Amanda segments her 800 dormant customers by last service date. She sends the 180-day campaign to 312 customers who haven't booked since spring. 44 respond within 48 hours. The owner asks what changed.

---

## Success Metrics

### User Success Metrics

**Leading Indicators (what shows the tool is working for users):**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Review requests sent per customer | 1 per job | Dashboard count |
| Google review link click-through rate | ≥25% of review requests | Link tracking |
| New Google reviews generated per month per customer | ≥5 | Google Places API (optional) or customer-reported |
| Reactivation response rate | ≥15% of dormant customers messaged | Reply tracking |
| Time-to-first-review-received | <7 days from product activation | Funnel tracking |

**Outcome Indicators (what shows users are succeeding):**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Average Google review count increase per customer (6 months) | +40 reviews | Customer self-report + case studies |
| Reactivation revenue generated per campaign | $3,000–$15,000 | Customer self-report |
| Rebooking rate from Day 14 nudge | ≥10% of nudges result in booked job | Reply/booking tracking |
| NPS | ≥60 by Month 6 | In-app NPS survey |

**Retention Signals:**

- Monthly active users (customers who have at least one sequence fired in 30 days): ≥80% at Month 3
- Churn rate: <3% monthly for SaaS; <5% annually for LTD customers churning from paid SMS credits
- Support ticket rate: <2 per 100 customers per month (tool should be self-service)

### Business Objectives

**12-Month Business Objectives (from market research projections):**

1. **Revenue Objective:** Reach $14,500 MRR by Month 12 (conservative: 300 SaaS customers @ $39 average + SMS overage)
2. **LTD Launch Objective:** Sell 300–500 LTD purchases in first 30 days on AppSumo at $69 average ($20,700–$34,500 gross)
3. **Market Validation Objective:** Achieve 4.5+ star rating on AppSumo from 50+ reviews within 90 days of launch
4. **Community Proof Objective:** Generate 3–5 shareable "before/after" review count case studies within 6 months
5. **Integration Objective:** Live Jobber and Housecall Pro integrations within 4 months of launch

**Strategic Objectives (longer-term):**

- Establish TextBack as the default post-job follow-up tool in r/sweatystartup before CraftBoop adds SMS
- Create a review flywheel: a review-generation tool that itself accumulates review proof (meta-credibility)
- Build the FSM integration layer that makes TextBack "stickier" than a standalone sequence tool

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|----------|
| Paying customers | 50 | 200 | 600 |
| MRR | $1,500 | $7,000 | $22,000 |
| SMS messages sent | 50K | 300K | 1.2M |
| Google reviews generated (tracked) | 1,000 | 8,000 | 40,000 |
| AppSumo rating | — | 4.5+ | 4.7+ |
| NPS | >50 | >60 | >65 |
| Churn (monthly SaaS) | <5% | <4% | <3% |
| LTD → SaaS upsell rate | — | 15% | 20% |

**North Star Metric:** Google reviews generated per month across all customers. This is the single metric that proves the tool is working for users, creates organic case studies, and compounds over time (customers who get more reviews stay longer and refer more).

**Decision Gates:**

- **Month 3 gate:** If <50 paying customers or NPS <40, revisit pricing and onboarding before scaling marketing
- **Month 6 gate:** If <200 paying customers, re-evaluate AppSumo timing and community channel strategy
- **Month 12 gate:** If <$10K MRR, assess whether SMS compliance friction is a bigger barrier than expected and consider simplifying to email-first with SMS as upsell

---

## MVP Scope

### Core Features

The MVP must solve the core problem for Solo Mike in 5 minutes of setup. Everything else is Phase 2.

**F1 — Customer Record Entry**
- Add a customer: name, mobile phone number, email (optional), job date, job type
- CSV import for existing customer lists
- Manual trigger: "Start sequence for this customer"

**F2 — Post-Job SMS Sequence (3 messages)**
- Day 0: Thank-you SMS (sent immediately or within 2 hours of trigger)
- Day 1: Review request SMS with direct Google review link
- Day 14: Rebooking nudge SMS
- Fully customizable message templates per job type
- Business name auto-inserted into every message

**F3 — Direct Google Review Link Generation**
- Business enters their Google Business Profile name or Place ID
- Tool generates the direct-to-review URL (place_id-based link, one tap to review form)
- Link included in the Day 1 message automatically
- Link click tracked for dashboard

**F4 — 90/180-Day Reactivation Trigger**
- Automatic: if customer has no new job record after 90 days, fire reactivation SMS
- Manual campaign: select a dormant customer segment, send reactivation blast
- Reactivation message template (seasonal offer, check-in, maintenance reminder)
- One message per reactivation period (not a multi-step campaign for MVP)

**F5 — 10DLC Compliance Infrastructure**
- Brand registration flow integrated into onboarding
- TCPA consent checkbox in customer record creation ("Customer agreed to receive texts about their service")
- Auto opt-out handling (STOP replies remove customer from all sequences)
- HELP reply sends business contact info
- Brand name appended to every outbound message

**F6 — Basic Dashboard**
- Messages sent (by customer, by sequence step)
- Review link clicks
- Opt-outs
- Active customers (have fired at least one sequence in last 30 days)
- Reactivation replies count

### Out of Scope for MVP

The following are explicitly deferred to maintain MVP focus and 2–3 week build timeline:

| Feature | Reason Deferred |
|---------|----------------|
| Email sequences | SMS is the differentiator; email adds complexity and reduces positioning clarity |
| Jobber/HCP integration | Needs API approval process (2–4 weeks); manual trigger works for beta |
| Multi-location support | Adds data model complexity; single-location covers 90% of TAM |
| AI-drafted review responses | Phase 3 feature; not on the critical path |
| Review gating (sentiment check) | Legally sensitive; not needed for launch |
| Referral mechanic | Phase 2 growth lever |
| Payment collection | Out of scope entirely; not a helpdesk/invoicing tool |
| Android/iOS app | Web dashboard is sufficient for the office manager buyer; tradespeople trigger from SMS reply or admin web |
| Multi-step reactivation campaigns | One reactivation SMS per 90/180-day window is sufficient for MVP |
| Analytics export | CSV download of sent messages is enough for MVP |

**Non-negotiable exclusions (scope protection):**
- No free tier at launch — LTD is the acquisition mechanism; no free tier needed
- No "calendar/booking" feature — this is not a scheduling tool
- No review management (responding to reviews, flagging) — single-purpose tool

### MVP Success Criteria

The MVP is successful and ready to scale if, within 60 days of beta launch:

1. **Activation:** ≥20 tradespeople complete the full setup (add first customer, fire first sequence)
2. **Core value delivered:** ≥50% of beta users receive at least 1 new Google review within 30 days of activation
3. **Retention signal:** ≥70% of beta users are still active (fired a sequence) in Week 4
4. **Review velocity:** Beta cohort collectively generates ≥100 new Google reviews
5. **NPS:** ≥50 from beta survey (minimum 10 responses)
6. **Case study material:** ≥3 users willing to share before/after review counts publicly

**Go/no-go for AppSumo launch:**
- All 5 success criteria met → proceed to AppSumo application with beta testimonials
- Criteria 1–3 met but 4–5 lagging → delay AppSumo by 30 days, run more beta
- Criteria 1–2 not met → revisit onboarding, simplify setup further, re-test

### Future Vision

**Phase 2 (Month 2–4): Integrations and Email**

- Jobber webhook integration (auto-trigger on job completion)
- Housecall Pro integration
- Zapier/Make triggers for other FSM tools
- Email sequences as complement to SMS (not replacement)
- Multi-location support with centralized dashboard

**Phase 3 (Month 4–8): Intelligence Layer**

- AI-drafted personalized review response suggestions (business owner approves/sends)
- Review gating with sentiment detection (send review link only if initial response is positive)
- Referral mechanic ("Know another [trade]? Send them our link, get 1 month free")
- Advanced reactivation segmentation (by job type, by season, by spend level)
- Franchise dashboard with per-location performance reporting

**Phase 4 (Month 8–18): Platform Expansion**

- WhatsApp integration for UK/CA/AU markets
- Predictive reactivation ("These 23 customers are likely to need HVAC service in the next 60 days based on equipment age")
- In-app review analytics (track Google star rating trajectory over time)
- AppSumo marketplace → Jobber Partner Program → HCP App Marketplace progression
- API access for agency/franchise management use cases

**Long-Term Vision (Year 2–3):**

TextBack becomes the customer intelligence layer for independent service businesses — not just review/reactivation automation, but a lightweight CRM that knows each customer's service history, response patterns, and optimal contact timing. The review-generation tool becomes the trust engine for a broader business relationship layer. At sufficient scale (3,000+ customers), it becomes an acquisition target for Jobber, NiceJob, or a mid-market FSM platform looking to add a proven reputation management layer.

**Addressable market at scale:** 400,000 US service businesses × $39/month average × 10% penetration = $18.7M ARR. Even at 5% penetration, the product reaches $9.3M ARR — well within the validated market.

---

## Strategic Summary

| Dimension | Assessment |
|-----------|-----------|
| **Market timing** | Optimal — three concurrent launches confirm segment is ready to pay; no dominant player at $29–49 |
| **Competitive gap** | Structural — SMS + direct review link + reactivation is unbuilt by all tools under $97/month |
| **Build feasibility** | 2–3 weeks MVP; 10DLC registration adds 1–2 weeks non-coding overhead |
| **LTD viability** | Confirmed — More Good Reviews at $79–316 LTD (4.9/5, 81 reviews) validates category |
| **Channel access** | High confidence — r/sweatystartup 200K+ community, trade Facebook groups, AppSumo |
| **Window** | 6–9 months before CraftBoop adds SMS — speed is the primary moat |
| **Revenue potential** | Conservative $140K ARR → optimistic $422K ARR at Month 12; $10K MRR threshold easily reachable |
| **Top risk** | CraftBoop adds SMS (high probability) — mitigate with reactivation sequences + FSM integrations that take longer to copy |

**Recommended immediate next step:** Create PRD — this brief provides the complete foundation for detailed requirements, user stories, and technical specification.

---

_Product Brief completed: 2026-11-21_
_Based on market research and shortlisted idea analysis (score: 92/105)_
_Next workflow: `create-prd` using this brief as input_

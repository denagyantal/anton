---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/quote-followup-automation-trades.md
  - _bmad-output/planning-artifacts/research/market-quote-followup-automation-research-2026-08-02.md
workflowType: 'product-brief'
date: '2026-08-24'
author: Root
idea: quote-followup-automation-trades
score: 95/105
---

# Product Brief: QuoteChase — Quote/Estimate Follow-Up Automation for Service Trades

---

## Executive Summary

Service contractors lose 30–60% of the quotes they send to silence—not because their pricing is wrong, not because a competitor undercut them, but because they fail to follow up consistently after the estimate goes out. This is one of the highest-signal pain points in the small-trades SaaS space: a 92/100 IdeaFast score on July 31, 2026, with five distinct r/smallbusiness threads on a single day confirming it.

**QuoteChase** is a standalone, trades-specific quote follow-up automation tool that plugs into existing field service management platforms (Jobber, Housecall Pro) without requiring a platform switch. When a quote is sent, QuoteChase triggers an automated SMS + email sequence—trade-specific templates for HVAC, landscaping, cleaning, painting, pest control, and handyman—and auto-stops the moment a job is booked.

The pricing gap is real and confirmed: Jobber gates quote follow-up automation behind its Grow plan ($199–349/month), a $150–280/month premium above what most small operators pay. QuoteChase fills this gap at $29–49/month (or $79–99 LTD), with an ROI story that every contractor can verify: **one recovered job pays for a full year of the subscription.**

No standalone, affordable, trades-specific quote follow-up add-on exists for the ~300,000–500,000 small trades businesses on Jobber Core/Connect or Housecall Pro Basic. QuoteChase is that tool.

**Verdict:** Tier 1 build. 95/105 evaluation score. Ship the MVP in 3–4 weeks; recruit founding customers; launch on AppSumo in Month 3.

---

## Core Vision

### Problem Statement

Small service business owners—HVAC technicians, landscapers, cleaners, painters, pest control operators, handymen—invest real money in customer acquisition, spend an hour or more on a site visit and estimate, send the quote, and then watch the lead go cold. The average contractor makes **1.3 follow-up attempts** before giving up. Industry data shows it takes 5–12 touches to convert a qualified prospect.

The gap between what contractors do (1 attempt, max) and what converts (3+ structured touches) is the product opportunity. It is not a knowledge gap—contractors know they should follow up more. It is a **friction and awkwardness gap**: following up manually feels like pestering, is easy to forget amid active jobs, and provides no signal about which open quotes are worth pursuing.

From r/smallbusiness on July 31, 2026 (92/100 IdeaFast signal):
> *"Follow-up is harder than actually getting leads."*

Five independent threads in a single scan, from operators across HVAC, landscaping, and general contracting, all describing the same problem. This is not a niche complaint—it is the most common revenue problem in trades.

### Problem Impact

The financial impact is concrete and calculable for every contractor:

| Scenario | Without QuoteChase | With QuoteChase |
|---|---|---|
| Quotes sent per month (5-truck HVAC) | 85 | 85 |
| Close rate | 28–33% | 41–49% |
| Jobs booked per month | 24–28 | 35–42 |
| Additional jobs recovered | — | +11–14/month |
| Revenue at $4,500 avg job | $108K–$126K | $157K–$189K |
| **Additional monthly revenue** | — | **$49K–$63K** |

Even for a solo handyman sending 15 quotes per month at $800 average:
- 1 recovered job per month = $9,600/year
- Cost of QuoteChase: $348/year (at $29/month) or $79 one-time LTD

**The ROI story writes itself.** One recovered job pays for a full year. No contractor, once they understand this math, objects to the price.

Additional impact dimensions:
- **Speed matters:** 78% of customers buy from the first company to respond. Average contractor response time: 42–47 hours. Automated follow-up wins the speed race.
- **SMS vs. email:** SMS has a 45% response rate vs. 6% for email. Housecall Pro's built-in follow-up is email-only—a documented weakness QuoteChase exploits.
- **Mental overhead:** The daily "who should I follow up with today?" question is eliminated. Contractors reclaim cognitive bandwidth and remove the social friction of manual outreach.

### Why Existing Solutions Fall Short

| Tool | Price | Problem |
|---|---|---|
| **Jobber Grow** | $199–349/month | Quote follow-up gated behind 3–9x price jump from Core/Connect ($39–69/month). Most small operators won't pay $150–280/month more for one feature. |
| **Housecall Pro Campaigns** | Contact for pricing | Email-only (6% response rate). Opaque pricing creates friction. Not a clean standalone feature—requires Campaigns add-on with unknown cost. |
| **QuoteIQ** ($29.99/month) | $29.99/month | **Full CRM replacement**, not an add-on. The 200,000–400,000 contractors who've invested in Jobber/HCP workflows and data will not switch platforms just to get follow-up automation. This validates the price point and feature set without serving the add-on segment. |
| **Workiz** | $65–225/month | Full FSM replacement. Requires platform migration. Not for contractors already on Jobber/HCP. |
| **HubSpot / Pipedrive** | $14+/user/month | Generic CRMs not trades-specific. Require 10–20 hours of configuration. No SMS. Overwhelming for contractors who want "just the follow-up." |
| **Manual text/call** | $0 | Inconsistent. Forgotten amid active jobs. Feels awkward. No tracking. The status quo for 60–70% of small trades businesses. |

**The gap:** No affordable ($<50/month) standalone quote follow-up add-on exists for Jobber/HCP users. This is confirmed, specific, and exploitable.

### Proposed Solution

**QuoteChase** — Standalone, trades-specific quote follow-up automation that works as an add-on layer on top of whatever FSM the contractor already uses.

**Core flow:**
1. Quote is sent (via Jobber, HCP, or manually)
2. QuoteChase is triggered (webhook from Jobber Zapier, or contractor clicks "Start Follow-Up")
3. Automated sequence begins, tuned to the trade type:
   - **Day 2 SMS:** "Hi [Name], just checking in on the estimate [Business] sent for your [service]. Happy to answer any questions!"
   - **Day 5 Email:** Trade-specific template — e.g., "Following up on your HVAC estimate from Tuesday. We have a slot next week if you'd like to move forward."
   - **Day 9 SMS:** Final touch — "Last check-in on your [service] estimate. Offer valid through [date]. Just reply YES to book."
4. When the job is booked, all sequences for that contact stop automatically (webhook from Jobber/HCP, or contractor clicks "Job Booked")
5. Dashboard shows: open sequences, conversion status, last/next touch for each open quote

**What it is not:** It is not a CRM. It is not a replacement for Jobber or HCP. It does not handle scheduling, invoicing, dispatching, or customer records. It does one thing well: converts quotes into booked jobs.

### Key Differentiators

1. **Add-on, not replacement** — Works with existing Jobber/HCP setup. Zero migration. Zero data transfer. Plug in, configure once, start recovering quotes. This is the hardest filter for the target customer, and QuoteChase is the only affordable tool that passes it.

2. **SMS-first architecture** — 98% open rate, 45% response rate, average read in 3 minutes. Housecall Pro's follow-up is email-only at 6% response rate. QuoteChase's SMS-first approach is both technically superior and a documented competitive advantage over the nearest built-in alternative.

3. **Trade-specific templates** — "Following up on your HVAC estimate" sounds completely different from a generic B2B drip email. Pre-built templates by trade (HVAC, landscaping, cleaning, painting, pest control, handyman) reduce setup from hours to minutes and produce messages that sound like the contractor wrote them personally.

4. **Price** — $29–49/month vs. $150–280/month Jobber Grow premium. LTD at $79–99: one-time cost, one recovered job pays for it. The ROI framing is immediate and verifiable.

5. **Auto-stop on booking** — The most embarrassing failure mode of any follow-up tool: the customer already accepted, and the automated "still haven't heard from you!" message arrives anyway. QuoteChase's auto-stop is a reliability guarantee and a trust signal. It's not a feature—it's table stakes, and competitors without it create the anxiety QuoteChase removes.

6. **Community moat** — The Sweaty Startup / r/sweatystartup community is the highest-density intersection of trades business owners and software-buying intent. One authentic case study post ("QuoteChase just got me a $4,200 HVAC job from a 3-week-old quote") drives 20–50 trial signups. First-mover community relationships are hard to displace.

---

## Target Users

### Primary Users

#### Persona 1: Mike — The Jobber Core/Connect Owner-Operator

**Background:**
Mike is 38, runs a 3-truck HVAC company in suburban Ohio. He's been in the business for 12 years, built the company from scratch, and now manages dispatch, customer relations, and occasional field work himself. He adopted Jobber 3 years ago and is on the Core plan at $69/month—it handles his scheduling, invoicing, and customer records well.

**Problem Experience:**
Mike sends 60–85 estimates per month. Most go via Jobber's quoting tool; some are emailed as PDFs. He follows up on maybe 30% of them—usually with a personal text that says something like "Hey, just checking in on that estimate I sent." After one text with no reply, he gives up. "I don't want to be the guy who pesters people."

Last quarter, he lost a $6,800 furnace replacement to a competitor. He knows this because the homeowner called him 6 weeks later asking if he was still available—the competitor had installed already. "They must have followed up. I just forgot."

He's heard of Jobber Grow ($349/month) and the quote follow-up feature, but he won't pay $280 more per month just for that. "I'd be paying $3,360 a year extra just so I don't have to send a text."

**Goals:**
- Recover 5–10 more jobs per month from quotes he's already sent
- Stop losing to competitors who just followed up faster
- Remove the daily mental overhead of remembering who to call

**Decision Criteria:**
1. Does it work with my existing Jobber? (hard filter—fails this = eliminated immediately)
2. How fast can I set it up? (must be under 15 minutes)
3. Does it actually send SMS, not just email?
4. How much does it cost?

**Discovery Channel:** Facebook HVAC business groups, r/sweatystartup, peer recommendation from another contractor

**Willingness to Pay:** $29–49/month strong; LTD $79–99 very attractive ("1 job and it's paid for")

---

#### Persona 2: Sarah — The Manual-Quoting Landscaper

**Background:**
Sarah is 44, runs a 6-person landscaping crew in the Pacific Northwest. Annual revenue ~$450K. She quotes via email: takes photos at the property, puts together a PDF in Canva, emails it over. No quoting software.

**Problem Experience:**
She sends 20–30 quotes per month and follows up on maybe 8–10. Her follow-up method: a personal phone call, usually awkward, usually 1 attempt. She has no visibility into which quotes are open—she keeps a running mental list that breaks down at 15+ quotes. Three times in the last year she followed up on a quote and the customer had already hired someone else. "If I'd called one more time, I think I would've gotten it."

She doesn't use Jobber or any FSM—she's afraid of the learning curve. She wants something simple that handles only follow-up, not her entire business.

**Goals:**
- Track which quotes are open, declined, or stale
- Send automated follow-up without manually remembering to do it
- Sound professional without sounding like a robot

**Decision Criteria:**
1. Does it require me to switch to a new platform? (she can't face another tool migration)
2. Is setup actually simple?
3. Will the messages sound like they came from me?

**Willingness to Pay:** $29/month strong; LTD $79 very attractive

---

#### Persona 3: Carlos — The HCP Basic User (Pest Control)

**Background:**
Carlos is 31, runs a 2-truck pest control company on Housecall Pro Basic ($59/month). He sends 25–40 quotes per month for larger residential and commercial jobs.

**Problem Experience:**
HCP Basic has some follow-up functionality, but it's email-only and he's read that the SMS Campaigns feature requires a separate add-on with "contact for pricing." He emailed HCP support and got a quote of $149/month more. He's not paying that.

He knows his email follow-ups get a terrible response rate. He'd rather just text customers directly but can't automate it from HCP.

**Goals:**
- Automated SMS follow-up that HCP doesn't provide on his plan
- Know which quotes are about to expire

**Decision Criteria:**
1. SMS capability (hard requirement—email-only is a dealbreaker)
2. Works alongside HCP (he won't leave the platform)
3. Price under $40/month

**Willingness to Pay:** $29–39/month; moderate LTD interest

### Secondary Users

**The Dispatcher / Admin (in growing businesses):**
As businesses scale past 5 trucks, an office admin or dispatcher takes over quote tracking. QuoteChase's dashboard gives them visibility into all open sequences and the ability to manually mark jobs as booked—without needing to access the contractor's Jobber account directly.

**The Trade Business Coach / Community Influencer:**
Nick Huber (Sweaty Startup), trade-specific YouTube channel hosts, and Facebook group admins are not users but critical acquisition multipliers. A single authentic recommendation from one of these figures generates 20–50 trial signups. Their "follower" community is exactly the primary target customer.

### User Journey

**Stage 1 — Pain Recognition (Trigger)**
Mike loses a $5,500 job to a competitor. He finds out later the customer just went with "whoever called back first." He vents in the "HVAC Business Owners" Facebook group: "Does anyone have a system for following up on estimates automatically? I keep dropping the ball." Fourteen people comment.

**Stage 2 — Discovery**
One comment says: "I use QuoteChase — it works with Jobber. One-time $79 and it's paid for itself 20 times over." Mike clicks the link. Lands on the QuoteChase home page. First question he asks: "Does it work with Jobber Core?" — answered in the first line of the homepage.

**Stage 3 — Evaluation (< 10 minutes)**
Mike scans the pricing page: $39/month or $79 LTD. Reads two Capterra reviews from other HVAC contractors. Watches a 3-minute setup video. "Okay, I'll try the free trial."

**Stage 4 — Onboarding (< 15 minutes)**
Signs up. Connects Jobber via Zapier (guided 3-step setup). Selects "HVAC" as his trade. Previews the Day 2 SMS template, makes one edit to the business name. Goes live. "That was easier than I expected."

**Stage 5 — The Aha Moment (Day 4–14)**
Mike gets a text reply from a quote he'd mentally written off 12 days ago: "Still interested, can we schedule for next Tuesday?" He books a $3,800 job. He opens QuoteChase, marks it "Job Booked." The remaining sequences stop. He stares at his phone for a moment.

**Stage 6 — Advocacy (Day 15–30)**
Mike posts in the HVAC Business Owners Facebook group: "QuoteChase just got me a $3,800 job from a quote I thought was dead. Setup took me 10 minutes. $79 lifetime deal. Here's the link."

---

## Success Metrics

### User Success Metrics

**Primary — Documented Close Rate Lift:**
- Baseline: 28–33% quote close rate (industry average without follow-up automation)
- Target: +10–16 percentage points after 60 days of QuoteChase use
- Measurement: User-reported before/after; or tracked via "Job Booked" clicks in dashboard vs. sequences started

**Secondary — Time to Value:**
- Time to first automated sequence sent: < 15 minutes from signup
- Time to first "Job Booked" from a QuoteChase-initiated sequence: < 30 days
- Both metrics surfaced in onboarding email at Day 30 as social proof ("X% of users recover their first job within 30 days")

**Tertiary — Product Engagement:**
- % of users with active sequences in the last 7 days: target > 70% of paying users
- Average sequences started per user per month: growing indicator of value delivery
- "Job Booked" click rate: sequences terminated as booked / sequences completed

### Business Objectives

**Revenue Trajectory:**

| Milestone | Target Date | Metric |
|---|---|---|
| Founding cohort closed | Month 1 | 15–20 paying founding customers, $29–49/month |
| Community launch | Month 2 | 50 paying customers, $1,750 MRR |
| AppSumo launch | Month 3–4 | 300–500 LTD units sold ($24K–$50K cash) + 300 additional community members |
| Monthly subscription growth | Month 6 | 300 paying monthly subscribers, $10,500 MRR |
| Year 1 | Month 12 | 1,500 paying customers, $52,500 MRR |

**AppSumo LTD Viability:**
- Comparable AppSumo CRM/automation tools in 2026: $69–89 LTD
- QuoteChase $79/$99 LTD tiers are in the validated range
- ROI story ("1 job pays for the LTD") is one of the clearest in trades SaaS
- Target: 300-unit minimum sell-through for community validation; 500-unit stretch

**Year 3 ARR Target:** $2.5M ARR (2% of 300,000-500,000 SAM at $35/month blended)

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 | Measurement Method |
|---|---|---|---|---|
| Paying customers | 50 | 300 | 1,500 | Stripe/payment system |
| MRR | $1,750 | $10,500 | $52,500 | Stripe/payment system |
| AppSumo LTD units | — | 300 | 500 | AppSumo dashboard |
| Trial-to-paid conversion | 25% | 30% | 35% | Trial cohort analysis |
| Monthly churn | <8% | <5% | <3% | Stripe churn tracking |
| Sequences started/month | 500 | 5,000 | 30,000 | Product analytics |
| "Booked" conversions tracked | 50 | 500 | 4,000 | In-product "Job Booked" clicks |
| Avg. documented close rate lift | — | +8pp | +12pp | User survey + product data |
| NPS | > 40 | > 50 | > 60 | 30-day NPS email survey |
| Setup time (median) | < 15 min | < 12 min | < 10 min | Onboarding funnel analytics |

**Leading Indicators to Watch:**
- Sequence reply rate (SMS replies to automated messages)
- Founding customer case study videos produced (target: 5+ in Month 1)
- Facebook group mentions and organic referrals
- "Job Booked" to "referred a friend" conversion rate

**North Star Metric:** Total "Job Booked" events tracked per month. This is the single number that proves QuoteChase is creating real, measurable revenue for contractors. Everything else is supporting data.

---

## MVP Scope

### Core Features

The MVP is a 3–4 week build. Every feature included must directly serve one goal: help a contractor trigger an automated follow-up sequence when a quote is sent and stop it when a job is booked.

**Feature 1: Quote Entry & Sequence Trigger**
- Manual "Start Follow-Up" button: enter contact name, phone, email, quote value, trade type
- Zapier integration: Jobber "Quote Sent" trigger → auto-create sequence in QuoteChase
- Input validation: phone number format, required fields
- No native API integration in MVP—Zapier handles Jobber/HCP bridge

**Feature 2: Pre-Built Sequence Templates (6 Trades)**
Pre-built 3-touch sequences for:
- HVAC
- Landscaping / Lawn Care
- Cleaning (residential + commercial)
- Painting (interior + exterior)
- Pest Control
- Handyman / General Repair

Each template includes: Day 2 SMS + Day 5 Email + Day 9 SMS. Contractor can edit message text but cannot change sequence timing in MVP (timing optimization is a post-MVP feature).

**Feature 3: Automated SMS Delivery**
- Twilio or Telnyx for SMS delivery ($0.007–$0.01/message)
- Sends from a dedicated local number provisioned per account (builds trust vs. short codes)
- TCPA-compliant: includes unsubscribe language ("Reply STOP to opt out") in first message
- Delivery receipt tracking

**Feature 4: Automated Email Delivery**
- SendGrid or Postmark for email delivery
- From the contractor's display name (e.g., "Mike from Smith HVAC")
- HTML template with contractor logo (optional; text-only fallback)
- Open tracking (shows if email was opened in dashboard)

**Feature 5: Auto-Stop on Job Booked**
- Manual "Job Booked" button per contact: stops all active sequences immediately
- Zapier integration (optional): Jobber "Job Created" trigger → auto-stop corresponding sequence
- Sequence status changes to "Booked ✓" in dashboard
- No further messages sent after booking confirmation

**Feature 6: Open Quotes Dashboard**
- List view: contact name, quote value, trade, sequence status, last touch sent, next touch scheduled
- Status badges: Active / Completed / Booked / Stopped / Reply Received
- Sort by: quote value (highest first), date sent, next touch date
- Simple stats header: sequences active, sequences converted (booked), total quote value in pipeline

**Feature 7: Basic Settings**
- Business name and phone number (used in SMS message templates)
- Trade type default (pre-selects template for faster entry)
- Notification email for "Reply Received" (when a prospect replies to an SMS)
- Billing management (Stripe integration)

### Out of Scope for MVP

The following are confirmed post-MVP features. They are documented here to prevent scope creep and communicate clear roadmap intent:

| Feature | Reason Deferred | Target Phase |
|---|---|---|
| Voicemail drop (ringless voicemail) | 3rd-party compliance complexity; requires RVM vendor integration; high demand → post-MVP Week 6–8 | Month 2 |
| Native Jobber API integration | Jobber API OAuth approval takes 4–6 weeks; Zapier handles MVP need adequately | Month 2–3 |
| Housecall Pro native integration | HCP Zapier webhooks work for MVP; native integration for HCP Campaigns users is Month 3+ | Month 3 |
| Close rate analytics / reporting | Requires cohort data to be meaningful; surface after first 90 days of data | Month 3 |
| AI-personalized message variants | Nice-to-have; Twilio/OpenAI integration adds complexity; pre-built templates work for MVP | Month 4+ |
| Team/multi-user management | Relevant only for businesses with 10+ employees; not primary segment | Month 4+ |
| Sequence timing customization | Default 2/5/9 day schedule works for MVP; customization is a power-user feature | Month 3 |
| Multi-language templates | English-only for US market in MVP | Post-Year 1 |
| Mobile app | Web-responsive design serves mobile needs adequately for MVP | Post-Year 1 |

### MVP Success Criteria

The MVP is considered validated when all of the following are true:

1. **10 founding customers** have been using QuoteChase for 30+ days and provide recorded testimonials
2. **At least 3 "job recovered" stories** are documented with specific dollar amounts (e.g., "recovered a $4,200 HVAC job from a 3-week-old quote")
3. **Trial-to-paid conversion ≥ 25%** among users who complete onboarding (trigger their first sequence)
4. **NPS ≥ 40** among active users at Day 30
5. **No critical reliability failures:** auto-stop works 100% of the time when triggered; SMS delivers within 5 minutes of scheduled time
6. **AppSumo-ready:** 5+ verified reviews on Capterra/G2 enabling AppSumo application

**Go/No-Go Signal:** If fewer than 3 founding customers have a documented "job recovered" story after 45 days, investigate whether the targeting, onboarding, or template quality is the failure point before investing in AppSumo/paid channels.

### Future Vision

**Months 2–6 (Immediate Roadmap):**
- Native Jobber API integration: quote-sent webhook triggers sequence; job-created webhook stops it—reduces setup from Zapier (3 steps) to one-click authorization
- Voicemail drop: ringless voicemail as optional Day 7 3rd touch (highest-demand post-MVP request from founding customers)
- Roofing trade template: highest average job value ($8,000–$25,000), notoriously poor at follow-up, high-density contractor community on Facebook
- Sequence timing customization: let contractors adjust Day 2/5/9 defaults to match their sales cycle

**Year 1 Vision:**
QuoteChase becomes the de facto "follow-up layer" for Jobber and Housecall Pro users, discoverable in both platforms' partner/integration ecosystems. 1,500 paying customers. AppSumo cohort generating word-of-mouth. "Quote follow-up software contractor" keyword owned in SEO. Product Hunt featured. First Sweaty Startup YouTube partnership.

**Year 2 — Quote Intelligence Platform:**
- Close rate analytics: contractor sees their own close rate vs. trade average, broken down by message type, sequence timing, and seasonality
- Benchmarking: "Your HVAC close rate is 31%. The top 25% of HVAC operators using QuoteChase close 47%."
- Team features: assign follow-up sequences to sales coordinators; shared dashboard for multi-truck operations
- API: open integration for any FSM tool via REST API and documented webhook spec

**Year 3 — Platform & Exit:**
- AI-personalized messages: GPT-4 rewrites Day 2 SMS with job-specific detail ("your Lennox system replacement on Tuesday") for higher response rates
- AI sequence optimization: A/B testing at scale identifies highest-converting timing and message variants per trade
- Horizontal expansion: UK, Canada, Australia (same trades structure, same software gap, English-language)
- **Potential acquisition target:** Jobber, Housecall Pro, or a private equity-backed trades platform acquires QuoteChase as the "quote conversion" module for their ecosystem. The product's position as a standalone add-on with deep FSM integrations makes it a natural tuck-in acquisition.

---

## GTM Summary

| Phase | Channel | Action | Target |
|---|---|---|---|
| Pre-launch (Week 1–6) | Direct outreach | DM 50–100 contractors in r/sweatystartup and HVAC Facebook groups; offer 60-day free access for testimonial | 15–20 founding customers |
| Community launch (Month 2) | Reddit + Facebook | Case study post: "I recovered 3 quotes using this automated SMS tool. Here's what I sent." | 200+ trial signups, 50+ paid |
| AppSumo (Month 3–4) | AppSumo marketplace | $79 Basic / $99 Pro LTD tiers. Headline: "What Jobber charges $349/month for—yours for $79, lifetime." | 300–500 LTD units |
| SEO (Month 4–12) | Content | Keywords: "estimate follow-up automation," "quote follow-up software contractor," "Jobber quote follow-up alternative" | Organic discovery at scale |
| YouTube (Month 6+) | Partnerships | Sponsor 1–2 episodes of trades business channels; authentic integration over ad reads | Community trust + discovery |
| Integration (Month 3+) | Partner ecosystem | Apply to Jobber Partner Ecosystem; list as Zapier integration | In-platform discoverability |

**Positioning Statement:**
> "QuoteChase is the quote follow-up tool that plugs into Jobber and Housecall Pro—no switching required. Pre-built HVAC, landscaping, and painting SMS sequences. Auto-stops when the job is booked. One recovered quote pays for a full year."

---

*Product Brief completed: 2026-08-24*
*Based on: QuoteChase shortlisted idea (95/105 score) and comprehensive market research (2026-08-02)*
*Next step: `/bmad-bmm-create-prd` — Create the full Product Requirements Document*

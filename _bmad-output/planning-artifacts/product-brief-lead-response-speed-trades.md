---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/lead-response-speed-trades.md
  - _bmad-output/planning-artifacts/market-research-lead-response-speed-trades.md
workflowType: product-brief
lastStep: 5
product_name: lead-response-speed-trades
user_name: Root
date: 2026-10-21
---

# Product Brief: Lead Response Speed Tool for Home Service Trades

**Working Name:** QuickReply (alt: FirstClaim)
**Date:** 2026-10-21
**Author:** Root
**Status:** Complete

---

## Executive Summary

Home service contractors — solo HVAC techs, plumbers, landscapers, and cleaners — lose an estimated $50,000–$60,000 per year in jobs they never had a chance to win. The reason is structural: they are physically on a job when new leads arrive. By the time they check voicemail and return a call 2–4 hours later, the homeowner has already hired whoever responded first. The industry average first response time is 4.2 hours; only 12% of contractors respond within 5 minutes.

**QuickReply** solves this with a single, focused intervention: the moment a lead comes in — from any source — it fires a branded SMS acknowledgment within 30 seconds ("Hi Sarah, got your HVAC request. I'll call you within the hour. — Mike's Heating & Cooling"), then surfaces the lead in a prioritized mobile queue where the operator can call back, send a quote link, or schedule a visit with a single tap between jobs.

The product is positioned at $29/month flat (LTD: $149 on AppSumo), targeting the 1.875 million solo and micro-crew (1–5 person) home service operators in the US. No existing tool serves this segment at this price point with this level of focus: Jobber and Housecall Pro are full CRMs at $69–$349/month requiring hours of setup; purpose-built speed-to-lead tools like Hatch and LeadTruffle start at $229–$1,500/month and require a sales demo. The market validation is strong: r/sweatystartup (1.2M members) rates this pain at 86/100 — one of the highest validated pain signals in the community.

QuickReply is not a CRM, not a scheduling tool, and not an invoicing platform. It does one thing: help solo tradespeople stop losing jobs to whoever answers the phone first.

---

## Core Vision

### Problem Statement

Solo and small-crew home service operators (HVAC, plumbing, landscaping, cleaning, electrical, roofing) are structurally unable to respond to leads in real time. They are on a ladder, under a sink, or running a lawnmower when new homeowner inquiries arrive. These inquiries are time-sensitive by nature: homeowners in need of a repair or service contact 3–4 contractors simultaneously and hire whoever responds first.

The pattern repeats daily, across every trade:
- A homeowner submits a form on Google Business Profile at 10:15 AM
- The contractor is on a job until 2:30 PM
- They check voicemail, see the lead, and call back at 3 PM
- The homeowner booked someone else at 10:45 AM

This is not a sales skills problem or a pricing problem. It is a **timing problem** with a structural cause.

### Problem Impact

The economic consequences are severe and well-documented:

- **4.2 hours** — average first response time for home service contractors (industry data)
- **12%** — share of contractors who respond within 5 minutes
- **74%** miss the 5-minute response window entirely
- **27%** of home service calls go unanswered (Invoca, 2025)
- **$14,000+/month** — estimated revenue lost by average HVAC contractor from missed/delayed leads
- **$50,000–$60,000/year** — average annual revenue lost by home service businesses from slow response
- **62%** of home service inquiries arrive outside 9–5 hours; 35% on weekends

For the solo operator running a $100K/year business, losing even 10% of annual revenue to response speed is a $10,000/year problem — the cost of a truck payment, equipment, or an employee's month.

The pain is further validated by community data: r/sweatystartup aggregator IdeaFast rates this at **86/100** — among the highest-scoring pain signals in the 1.2M-member community of solo tradespeople.

### Why Existing Solutions Fall Short

The market is not undersupplied with software tools for home service businesses. The gap is specifically in the **solo/micro-crew segment at the sub-$60/month price point with a mobile-first, frictionless setup**.

**Full-Suite FSM Platforms ($29–$499/month):**
- **Jobber** and **Housecall Pro** require 2–5 hours of setup, a desktop during onboarding, and $99–$149/month tiers before lead automation features unlock
- Built for 5–20 person shops, not solo operators
- Mobile apps optimized for job scheduling, not lead management
- Operators describe them as "too many features I don't need"

**Purpose-Built Speed-to-Lead Tools ($229–$1,500/month):**
- **Hatch** ($700–$1,500/month) targets multi-location enterprises; demo required; no self-serve
- **LeadTruffle** ($229+/month) requires a sales call; priced out of solo operator budgets
- Neither is accessible or relevant to the solo tradesperson market

**Missed-Call Text-Back Tools ($29–$99/month):**
- **Recoverly**, **Caplexer**, **Enzak** do the auto-acknowledge but stop there
- No unified lead inbox, no mobile queue, no one-tap follow-through
- Generic tools with no trade-vertical context

**Agency Automation Platforms ($97–$497/month):**
- **GoHighLevel** technically has all the features but is complexity-first, agency-oriented, requires technical knowledge, and is not built for the tradesperson persona

**The precise gap:** A tool priced at $29/month that does (1) instant auto-acknowledge from any source, (2) a unified mobile lead queue, and (3) one-tap call/schedule/quote actions — set up in under 5 minutes from a smartphone — does not exist today.

### Proposed Solution

**QuickReply** is a mobile-first lead response tool built exclusively for solo and small-crew home service operators. It does three things:

1. **Instant Auto-Acknowledge** — When a lead arrives (form fill, missed call, text, Angi inquiry), QuickReply fires a branded SMS within 30 seconds: "Hi [Name], got your request for [service]. I'll call you shortly. — [Business name]." The homeowner knows someone is on it; the job stays in play.

2. **Unified Mobile Lead Queue** — A single prioritized list of active leads showing: customer name, service type, time since contact, lead source, and current status. Sorted by urgency. No desktop required — this is a phone-native experience.

3. **One-Tap Actions** — From the queue, the operator can: dial the customer directly, send a quote link, schedule a visit, or mark as won/lost. Each action takes one tap. No navigating menus, no data entry between jobs.

The product is priced at **$29/month flat** (no tiers, no complexity). An AppSumo LTD tier at **$149** will serve as the primary launch vehicle.

Setup is designed for completion in under 5 minutes, from a phone, without a desktop or technical knowledge. The operator forwards calls to (or replaces their number with) a Twilio-backed business number, and QuickReply handles everything from there.

### Key Differentiators

| Differentiator | QuickReply | Nearest Competitor |
|---------------|------------|-------------------|
| Price | $29/month | $229/month (LeadTruffle), $700/month (Hatch) |
| Setup time | < 5 minutes, phone-native | Hours (Jobber/HCP), demo required (Hatch) |
| Trade-vertical UX | Yes (service type, source, urgency context) | No (generic CRM fields) |
| Auto-acknowledge speed | < 30 seconds | Not guaranteed / manual |
| Mobile-first design | Core principle | Secondary to desktop |
| Scope focus | Speed-to-lead only | Full suite or nothing |
| AppSumo LTD option | Yes ($149) | No direct competitor |
| Community validation | 86/100 pain signal in r/sweatystartup | Not trade-community-aligned |

**Unfair advantages:**
- First tool with brand built specifically around "stop losing jobs to faster competitors" in the sweaty startup community
- AppSumo LTD creates a self-reinforcing review engine (LTD buyers leave reviews; reviews drive organic discovery)
- Community channel access: r/sweatystartup (1.2M), trade Facebook groups, Sweaty Startup YouTube (340K subscribers)
- TCPA compliance built in from day one (auto-SMS framed as "confirmation of your request" — unambiguously permissible, unlike cold outreach)

---

## Target Users

### Primary Users

**Segment 1 — The Overwhelmed Solo Tech (highest pain, highest LTV)**

*Persona: Mike, 38, Solo HVAC Technician — Atlanta, GA*

Mike runs a one-person HVAC business doing residential service, repair, and installs. He grosses $110K/year and personally handles everything: the tools, the schedule, the customer calls, the invoicing. His phone is in his pocket every second of the day — but he can't answer it while he's on a roof or inside a customer's attic.

He uses Google Business Profile for reviews, has a basic website, and pays for a few Angi leads per month. He's tried Jobber but found it "too much to deal with" for how he runs things.

- **Day in the life:** Out by 7 AM, on jobs until 4–5 PM, checking messages at lunch and EOD. Gets 5–12 inbound lead inquiries per week. Returns calls 2–3 hours late on average. Estimates he loses 2–3 jobs per week to faster competitors — roughly $600–$1,200/week in potential revenue.
- **Emotional state:** Frustrated. He knows he's losing jobs; he just can't do anything about it while he's working. He's told himself he "needs a system" for years.
- **Purchase trigger:** Specific incident — loses two jobs in one day to a competitor, finds out the customer hired someone who called back in 10 minutes. Searches "how to respond to leads faster contractor."
- **Willingness to pay:** $29/month without hesitation if the ROI is clear. Would buy a $149 LTD immediately if he sees 3 positive reviews from other HVAC operators.
- **Success state:** "I set it up Friday afternoon, got a lead Saturday morning, the text went out automatically, and I called back at lunch. They booked me. That's $400 I would've lost."

**Segment 2 — The Landscaping Crew Lead (2–4 crew, seasonal)**

*Persona: Carlos, 42, Landscaping & Lawn Care — Phoenix, AZ*

Carlos runs a 3-person landscaping crew. Spring/summer they're booked solid; fall/winter is slower. His lead volume peaks exactly when he's least able to monitor inquiries. He uses a spreadsheet and Facebook Messenger to track leads, loses track constantly, and dreads seeing missed calls from numbers he doesn't recognize.

- **Day in the life:** On-site with the crew from 6 AM to 3 PM during peak season. Takes lunch in the truck. Responds to messages in the truck at end of day.
- **Purchase trigger:** A competitor sends an auto-text to a lead within 2 minutes; Carlos calls back 4 hours later and the homeowner says "sorry, already booked."
- **Key need:** Not just the auto-reply, but the unified queue — he needs to know at glance at 2 PM what leads came in today and who he needs to call before the day ends.
- **Willingness to pay:** $29/month; seasonal pricing would be a bonus. Likely LTD buyer if available.

**Segment 3 — The Cleaning Service Owner**

*Persona: Diane, 34, Residential Cleaning — Chicago, IL*

Diane owns a 2-person cleaning service with 40 recurring clients. Most of her work is booked, but new client inquiries come in via her website and Google. She misses about 30% of them because she and her partner are cleaning all day. She doesn't need a full CRM — she just needs to not lose new clients before she can call back.

- **Purchase trigger:** Realizes she's been getting 4–5 new client inquiries per week that she never followed up on because they slipped through voicemail.
- **Key need:** Auto-acknowledge + simple queue. The scheduling piece is less critical (she uses HoneyBook for existing clients).
- **Willingness to pay:** $29/month; price-sensitive. Would appreciate simplicity over features.

### Secondary Users

**Secondary User A — The Micro-Agency Owner Who Manages Multiple Contractor Clients**

Marketing agencies and business coaches serving tradespeople sometimes manage lead response on behalf of their clients. QuickReply's simple multi-number setup could make it a default tool in their stack. Not a primary target at launch, but a referral vector worth watching.

**Secondary User B — The Growing Contractor Adding Their First Employee**

Once a contractor hires their first employee, they need to share lead visibility. QuickReply's Phase 2 multi-user team plan ($79/month) will serve this transition. These users graduate from Solo to Pro as they grow.

### User Journey

**Awareness → Purchase → Habit (Solo Tech Journey)**

1. **Trigger Event** — Loses a job to a faster competitor. Emotional reaction: "This keeps happening." Shares frustration in r/sweatystartup or searches "how do I stop losing leads to competitors."

2. **Discovery** — Finds QuickReply through: (a) a Reddit post with a direct dollar-figure headline ("I was losing $600/week in HVAC leads — here's what fixed it"), (b) a Facebook group recommendation, or (c) Google search for "auto reply missed calls contractor."

3. **Consideration** — Checks price ($29/month — "that's nothing"). Looks for reviews. Watches a 90-second demo video showing the setup and the auto-text firing. Needs to see a real trade operator use it, not a generic business demo.

4. **Trial/Signup** — Signs up in under 2 minutes. Follows the 5-step onboarding: forward your number → add business name → customize auto-text → set service types → done. Sends a test lead to himself. The text fires in 17 seconds. He's sold.

5. **First Real Win** — Within 1–5 days, a real lead comes in while he's on a job. The auto-text fires, he calls back within the hour, he books the job. This is the "aha" moment — the product proves its value with a real dollar outcome.

6. **Habit Formation** — Within 2 weeks, checking the lead queue becomes a daily routine (morning coffee, lunch break, after last job). The product is invisible — it just works. Churn risk drops to near-zero after the first won job.

7. **Advocacy** — He posts in r/sweatystartup: "Been using QuickReply for 3 weeks, booked 4 jobs I would've lost. $29/month, no-brainer." This post generates 10–20 signups.

**The critical gate:** If the operator doesn't receive a real auto-acknowledged lead within the first 5 days, retention risk is high. Onboarding must confirm that the system is working (test mode, confirmation messages, setup completion checklist).

---

## Success Metrics

### User Success Metrics

The primary user success signal is a concrete job won that would otherwise have been lost. Everything downstream flows from this.

| User Success Metric | Target | Measurement Method |
|---------------------|--------|-------------------|
| Time to first auto-acknowledged lead | < 5 days post-signup | Event tracking on first auto-SMS fired |
| Lead response time for users | < 30 minutes (down from 4.2 hours) | Timestamp delta: lead received → user call/action |
| User self-reported win rate improvement | ≥ 20% lift | Optional in-app "did you win this job?" tracking |
| Weekly active sessions (lead queue opens) | ≥ 5 opens/week | Mobile app analytics |
| User retention at Day 30 | ≥ 70% | Subscription / login tracking |
| User retention at Day 90 | ≥ 55% | Subscription / login tracking |

**The North Star metric:** Jobs won per week attributed to QuickReply auto-acknowledgments. This is the single metric that proves product-market fit for the solo trade operator.

### Business Objectives

**3-Month Objectives:**
- 100 paying subscribers (validates community-led acquisition funnel)
- 10+ verified testimonials with specific dollar outcomes ("I won X jobs I would have lost")
- AppSumo application submitted with 5+ G2/Capterra reviews
- < $15 average CAC via organic community channels
- TCPA compliance audit completed; confirmed no issues

**6-Month Objectives:**
- AppSumo LTD launch completed; 200–500 LTD conversions
- 500+ total users (paying + LTD)
- $10,000+ MRR from recurring subscriptions
- Jobber integration live (won leads pushed to Jobber; positions product as additive, not competitive)
- First contractor YouTube creator sponsorship completed

**12-Month Objectives:**
- $25,000+ MRR from recurring subscriptions
- 3,000+ total users
- Net Promoter Score (NPS) ≥ 50
- < 5% monthly churn on Solo plan
- International expansion (UK, Canada, Australia) initiated

### Key Performance Indicators

| KPI | Target | Timeframe | Why It Matters |
|-----|--------|-----------|----------------|
| Monthly Recurring Revenue (MRR) | $10K | Month 6 | Business viability threshold |
| Paying subscribers | 345 | Month 6 | $29 × 345 = $10,005 MRR |
| AppSumo LTD sales | 200–500 | Month 3–5 | Launch vehicle + review flywheel |
| Monthly churn rate | < 5% | Ongoing | Retention = product-market fit |
| CAC (community/organic) | < $15 | Ongoing | Sustainable unit economics |
| CAC (paid) | < $60 | Month 9+ | $29/mo LTV requires < 2.1-month payback |
| Time-to-first-auto-acknowledgment | < 5 min setup | Ongoing | Onboarding quality |
| Lead queue daily opens per user | ≥ 5/week | Month 2+ | Habit formation signal |
| G2/Capterra reviews | 25+ at 4.5+ stars | Month 6 | AppSumo eligibility + SEO |
| r/sweatystartup mentions | 5+ organic/month | Month 3+ | Community channel health |
| HVAC/plumbing operator vertical mix | ≥ 40% | Ongoing | Highest-pain segment validation |

**Revenue model projections:**

| Scenario | Month 6 | Month 12 | Month 24 |
|----------|---------|---------|---------|
| Conservative | $8K MRR | $18K MRR | $40K MRR |
| Base | $12K MRR | $28K MRR | $65K MRR |
| Optimistic | $20K MRR | $55K MRR | $120K MRR |

Base case assumes AppSumo launch drives 300 LTD conversions and 200 monthly subscribers by Month 6, plus organic community growth of 30–50 new subscribers/month.

---

## MVP Scope

### Core Features

The MVP is built around one user story: *"As a solo HVAC operator on a job, when a new lead comes in, I want it acknowledged automatically and surfaced in a simple queue so I can follow up between jobs without losing the opportunity."*

**Feature 1: Business Phone Number Setup**
- Twilio-backed business phone number (or call forwarding from existing number)
- Receives inbound calls, texts, and missed-call triggers
- Setup completed from mobile in < 5 minutes
- One-time onboarding wizard: number → business name → auto-text message → done

**Feature 2: Instant Auto-Acknowledge SMS**
- Fires within 30 seconds of any trigger: missed call, form fill, inbound SMS
- Customizable template: "Hi [Name], got your request for [service]. I'll call you within the hour. — [Business name]"
- Supports variable placeholders: customer name (if available), service type, business name
- Compliant framing: "request confirmation" language, not marketing SMS
- Sent from the business number (not a generic shortcode)

**Feature 3: Mobile Lead Queue**
- Prioritized list of active leads, newest first
- Each lead card shows: customer name/number, service type (if captured), time since contact, lead source (call/text/form/Angi), current status
- Three status states: New, In Progress, Closed (Won/Lost)
- Push notification on new lead arrival
- Works entirely on mobile; no desktop required

**Feature 4: One-Tap Actions**
- From any lead card: Dial Now (direct call), Mark Won, Mark Lost, Send Quote Link (custom URL), Snooze (2 hours, 4 hours, tomorrow morning)
- Call outcome logging: auto-prompts "Did you book this job?" after a call ends
- No data entry required — one action per interaction

**Feature 5: Basic Lead Analytics**
- Weekly summary: leads received, leads acknowledged, leads won/lost, win rate
- Response time average for the week
- Displayed on home screen; no configuration required
- Email summary delivered Sunday evening

**Lead Sources (MVP):**
- Inbound missed calls (core)
- Inbound SMS to business number
- Manual lead entry (paste from email/Angi — for operators who want to manage all leads in one place)

**Not in MVP but architected for Phase 2:**
- Webhook integrations for Angi/HomeAdvisor, Google Business Profile form fills, website contact forms
- These require per-integration work; start with phone/SMS coverage where pain is highest

### Out of Scope for MVP

The following are explicitly deferred to maintain focus and build speed:

| Out of Scope | Rationale | When |
|-------------|-----------|------|
| Invoicing / job management | Core FSM territory; not the problem we're solving | Never (stay focused) or Phase 3 |
| Scheduling / calendar | Adds complexity; operators use existing tools | Phase 2 |
| Jobber / HCP integration | High value but requires API partnerships; doesn't block MVP | Phase 2 |
| Team/multi-user access | Solo operator MVP; crew management is a growth feature | Phase 2 (Team plan) |
| AI follow-up sequences | Valuable but technically complex; not MVP-required | Phase 2 |
| Angi/HomeAdvisor native API | Requires partnership negotiation | Phase 2 |
| Desktop / web dashboard | Mobile-first; desktop can come later | Phase 2 or never |
| White-label | Agency use case is secondary; don't distract | Phase 3 |
| Email lead capture | SMS/call is the primary channel; email adds complexity | Phase 2 |
| Advanced reporting | Operators need simple numbers, not dashboards | Phase 2 |

### MVP Success Criteria

The MVP is considered validated when:

1. **Activation rate ≥ 60%**: 60% of signups send at least one auto-acknowledged lead within 7 days of signup (measures onboarding effectiveness)

2. **Day-30 retention ≥ 70%**: 70% of paying subscribers remain after 30 days (measures habit formation and real value delivery)

3. **First 50 paying customers acquired**: Achievable via r/sweatystartup community launch without paid advertising (validates channel access)

4. **At least 10 documented "won job" stories**: Users who specifically attribute a booked job to QuickReply's auto-acknowledge (validates core value hypothesis)

5. **< 5-minute median setup time**: Confirmed via onboarding analytics (validates the "phone-native, no friction" promise)

**Decision gates:**
- If Day-30 retention < 50% after 3 months → investigate onboarding; consider simplification before scaling acquisition
- If CAC exceeds $50 from community channels → pause paid acquisition; double down on community content
- If Jobber/HCP launch a competitive feature at $29/tier → accelerate Phase 2 differentiators (multi-source integrations, team plan); do not change price

### Future Vision

**Phase 2 (Months 6–12): Connected Lead Engine**

QuickReply becomes the universal lead front-door for solo/micro home service operators:

- **Multi-source lead intake**: Webhooks for Angi, HomeAdvisor, Thumbtack, Google Business Profile form fills, website contact forms — all surface in the same queue
- **AI follow-up sequences**: If a lead isn't reached after 2 calls, automatically send a follow-up text at 24h and 72h ("Still need help with your HVAC? I have availability this week.")
- **Jobber / Housecall Pro integration**: One-tap push of a won lead into the operator's existing FSM system (eliminates double-entry; positions QuickReply as additive)
- **Team plan**: Multi-user access for 2–5 person crews; shared lead queue; dispatcher view
- **Booking link**: Customers can self-schedule from the auto-acknowledge text if operator enables it

**Phase 3 (Year 2+): The Solo Operator's Business Companion**

- Expands into lightweight scheduling (not full FSM — just "what jobs do I have this week?")
- Integrates with Google Calendar
- SMS marketing to past customers ("Annual HVAC tune-up season — want to schedule yours?") with full compliance framework
- Expands to UK, Canada, Australia (same market dynamics, same pain)
- **AppSumo Agency**: White-label version for marketing agencies serving contractor clients

**Long-term positioning (3-year horizon):**

QuickReply owns the "first contact" layer for home service operators globally. It becomes the tool that runs in the background of every solo tradesperson's business — invisible, always on, always converting. The flywheel: community trust → organic referrals → AppSumo reviews → SEO dominance for "lead response contractor" queries → category ownership before AI-native tools commoditize the space.

The moat is not the technology (SMS webhooks are replicable). The moat is brand trust in the sweaty startup community + a 50,000-user testimonial library that says "I was losing jobs, now I book them all."

---

## Competitive Positioning Summary

**The positioning statement:**

*QuickReply is the lead response tool built for the solo tradesperson — auto-acknowledge any lead in 30 seconds, manage your call queue from your phone, and never lose another job to whoever answers first. Set up in 5 minutes. $29/month.*

**Positioning quadrant:**

```
High Price
    │
    │  ServiceTitan ●        ● Hatch ($700-1,500/mo)
    │                    ● LeadTruffle ($229+/mo)
    │  Housecall Pro ●
    │
    │  Jobber ●      ● GoHighLevel ($97-497/mo)
    │
    │         ● Podium (~$399/mo)
    │  ● Enzak ($99/mo)
    │
    │         ★ QuickReply ($29/mo) ← WHITESPACE
    │  ● Recoverly ($29/mo)
    └──────────────────────────────────────────────
        Full Suite (Complex)    Single-Purpose
                                (Speed-to-Lead)
```

QuickReply occupies the single uncontested position: sub-$30/month, mobile-first, trade-specific, speed-to-lead focused, simple enough for a solo operator to set up while sitting in their truck at lunch.

---

## Go-to-Market Strategy

### Channel Priority

1. **r/sweatystartup** (primary organic): 1.2M members; highest validated pain signal for this exact problem. Launch post strategy: personal story format ("I built this because I kept losing HVAC leads"), not product announcement.

2. **AppSumo LTD launch** (primary acquisition): Apply after 10+ G2 reviews. Target 200–500 LTD conversions at $149 = $30K–$75K one-time + review engine for sustained organic discovery.

3. **Trade Facebook groups** (secondary organic): "HVAC Business Owners Network," "Lawn Care Business Owners," "Sweaty Startup Community" — 2–3 posts per week in reply to pain-adjacent threads.

4. **Sweaty Startup YouTube** (secondary paid/organic): Nick Huber's 340K subscribers are precisely this persona. Sponsored segment or organic tool review.

5. **SEO** (long-term): Target "lead response tool for contractors," "auto text back HVAC," "how to stop missing leads contractor." 6–12 month horizon.

6. **Angi/Thumbtack contractor forums** (secondary): Operators on lead marketplaces have the highest pain around speed-to-lead; native forum presence.

### Pricing

| Plan | Monthly | Annual | LTD (AppSumo) |
|------|---------|--------|---------------|
| Solo | $29/mo | $249/yr | $99 |
| Pro | $49/mo | $399/yr | $149 |
| Team | $79/mo | $699/yr | $249 |

**Solo**: 1 business number, 200 auto-SMS/month, lead queue, one-tap actions, basic analytics
**Pro**: 3 numbers, unlimited SMS, multi-source webhooks, Jobber/HCP integration
**Team**: 5 users, 5 numbers, shared queue, dispatcher view, white-label SMS sender name

MVP launches with Solo plan only. Pro and Team available in Phase 2.

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Jobber adds free auto-reply to $29 tier | Medium | High | Build community brand before they act; be embedded in operators' habits first; offer Jobber *integration* (additive positioning) |
| TCPA compliance issue with auto-SMS | Low-Medium | High | "Confirmation of request" framing from day 1; consult TCPA attorney pre-launch; opt-out instructions in every message |
| Low MRR ceiling as standalone tool | Medium | Medium | Build with Phase 2 expansion roadmap; team plan and integrations extend LTV |
| AI-native tools enter at $20/mo | Medium (12-18 mo) | Medium | Speed to community brand is the defense; be the category-defining tool before AI wave hits |
| Low activation (operators don't set up forwarding) | Medium | High | Simplify onboarding; offer 1:1 setup call for first 50 beta users; consider hosted number as default |
| AppSumo LTD unsustainability | Low | Medium | Cap LTD sales at 1,000; switch to subscription-only after AppSumo phase; LTD cohort becomes referral engine |
| SMS delivery reliability | Low | High | Use Twilio (industry standard); build delivery confirmations into UX; monitor deliverability rates weekly |

---

*Product Brief completed: 2026-10-21 | Based on shortlisted idea (89/105 score) and market research (2026-10-21) | Ready for PRD development*

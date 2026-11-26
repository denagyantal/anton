---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/junk-removal-dispatch-photo-quoting.md
  - _bmad-output/planning-artifacts/market-research-junk-removal-dispatch.md
workflowType: 'product-brief'
lastStep: 5
date: '2026-11-26'
author: 'Root'
---

# Product Brief: Junk Removal Dispatch & Photo Quoting OS

<!-- Generated autonomously from shortlisted idea (89/105) + completed market research (2026-11-25) -->

---

## Executive Summary

Independent junk removal operators running 1–5 trucks are trapped in a workflow that hasn't changed in a decade: Square for payments, Google Calendar for scheduling, and phone memory for everything else. The industry has a $14.8B global market, 7,000–12,000 US operators, and a growing community of founders who have literally built their own automation tools because nothing on the market works.

**HaulDesk** (working title) is the junk removal OS — a focused, SMS-first dispatch platform that takes an operator from customer photo to paid invoice without touching a spreadsheet. Its core differentiator is the only feature absent from every existing competitor: a systematic partner referral engine for the realtors and property managers who send 30–50% of a successful operator's repeat business.

The market has evolved since the original idea evaluation: AI photo quoting is now available from three vendors (JunkQ, QuoteIQ Pro, AutopilotApp). This makes photo quoting table stakes rather than a primary differentiator — but it also confirms the market is real and actively investing. The genuine white space remains:

1. **Partner referral tracking** — absent from all 9+ tools surveyed
2. **LTD pricing** — no junk-removal-specific tool has launched on AppSumo
3. **True all-in-one under $79/month with AI photo quoting** — the $49–79 slot is open (JunkQ has quoting at $29-79 but is not a full platform; QuoteIQ requires $149.99 for photo AI)

Target MRR: $30,000–$50,000 within 12 months. Realistic LTD launch target: $20,000–$40,000 gross from AppSumo campaign. Total US SAM: $24M–$75M ARR.

---

## Core Vision

### Problem Statement

Junk removal operators (1–5 trucks) run a profitable, growing business entirely from muscle memory and disconnected consumer tools. When a customer texts photos of their garage cleanout at 9 PM, the operator has to:

1. Manually eyeball the photos and estimate truck load percentage
2. Call or text back a rough price
3. Wait for customer confirmation, then manually add it to Google Calendar
4. Dispatch the crew via text message on the day of the job
5. Send a Square invoice after the job, then follow up manually if unpaid
6. Try to remember which realtor referred this customer so they can send a thank-you

Each residential job requires 10–20 minutes of phone/text back-and-forth for quoting alone. An operator running 5 jobs/day loses 50–100 minutes daily to admin that could be automated. One founder documented eliminating 80% of admin work by building a custom n8n/AI automation — the strongest possible validation that the problem is real and the market is ready for a solution.

### Problem Impact

**Operational impact:**
- 50–100 minutes of daily admin per operator, every working day
- Quote errors from manual load estimation → operators regularly undercharge complex jobs
- After-hours leads go unanswered → first-mover wins the booking, lost revenue is invisible
- Double-bookings and missed scheduling windows → customer service failures that damage reputation

**Financial impact:**
- No per-job margin tracking means operators price by feel, not data
- Dump fees rising 10–20%/year become invisible profit erosion
- Partner referral relationships managed by memory → referral pipeline leaks at every handoff point

**Growth ceiling:**
- Operators can't scale past 2–3 trucks without systems — they become the bottleneck
- Cannot train or delegate admin work because all processes live in the owner's head
- Cannot build toward an exit (franchise, sale) without documented, repeatable operations

### Why Existing Solutions Fall Short

**Generic FSM tools (Jobber, Housecall Pro):** Built for plumbers and HVAC technicians with predictable appointment times and hourly labor billing. Miss: photo volume quoting, booking windows (morning/afternoon vs. exact time), truck load tracking per job, referral partner management. Jobber Connect costs $349/month for multi-user — prohibitive for a 2-truck operator.

**Junk-removal-native tools (QuoteIQ, AutopilotApp, HaulHQ):** QuoteIQ has the largest installed base (4,100+ reviews) and the deepest feature set, but gates AI photo quoting behind the $149.99/month Pro tier. AutopilotApp is well-built and mobile-first but lacks referral tracking. HaulHQ offers a clever pay-per-job model but adds 1.5% card fees on top of Stripe, making it expensive at volume. None of the three offer partner referral tracking.

**Photo quoting widgets (JunkQ):** Launched August 2026, laser-focused on the quote widget use case at $29–79/month. Not a full dispatch platform — must be paired with other tools. No referral tracking, no booking management, no invoicing.

**CurbWaste / Docket:** Roll-off dumpster rental operators, not residential junk hauling. Priced at $250–300/driver/month. "Rarely mentioned as working well" in operator communities.

**The core miss:** No tool treats the realtor or property manager as a first-class entity in the workflow. For operators who rely on 3–5 commercial partners for 40%+ of revenue, managing those relationships in a spreadsheet or by memory is a systematic business risk.

### Proposed Solution

HaulDesk is a junk removal OS with five integrated modules:

1. **Photo Quote Engine** — Customer texts photos via SMS link; AI (GPT-4o Vision) estimates truck load percentage and generates a priced quote. Customer approves via SMS. No app download required.

2. **Booking Window Scheduler** — Customers book into morning (8AM–12PM), afternoon (1PM–5PM), or evening windows — not exact times. Automatically slots jobs based on truck capacity and existing bookings. Sends automated reminders to both crew and customer.

3. **Crew Dispatch & Job Tracking** — Crew receives job details and navigation link via SMS. After job completion, crew photos are uploaded with truck load percentage and dump fee. System calculates actual per-job margin.

4. **Invoice & Payment** — Invoice automatically generated from job data (before/after photos attached). Customer receives payment link via SMS. Automated follow-up for unpaid invoices.

5. **Partner Referral Engine** — Realtors, property managers, and estate attorneys tracked as referral partners. Each job attribution logged. Automated thank-you workflow on first referral from a new partner. Monthly referral summary email to active partners. Tracks lifetime value per referral source.

Pricing: $49/month (1–2 trucks) · $89/month (3–5 trucks) · LTD $79/$149/$249 (AppSumo launch)

### Key Differentiators

| Differentiator | HaulDesk | QuoteIQ Pro ($149.99) | AutopilotApp ($49-299) | HaulHQ ($0+job) | JunkQ ($29-79) |
|---|---|---|---|---|---|
| AI Photo Quoting | ✅ Included at $49 | ✅ Pro tier only | ✅ Tier unclear | ✅ Included | ✅ Core feature |
| Booking Windows (primary UX) | ✅ | Partial | Partial | Partial | ❌ |
| Partner Referral Tracking | ✅ | ❌ | ❌ | ❌ | ❌ |
| Per-Job Margin Calculator | ✅ | ✅ | ❌ | ✅ | ❌ |
| SMS-First (no app download) | ✅ | Partial | Partial | Partial | Partial |
| LTD / One-Time Pricing | ✅ (AppSumo) | ❌ | ❌ | ❌ | ❌ |
| Full Platform Under $79/mo | ✅ | ❌ | ✅ (Starter, no AI) | Variable | ❌ (widget only) |

**The defensible moat:** Partner referral tracking is a 1–2 week build that creates immediate stickiness (operators who connect their referral partners won't switch platforms) and a marketing hook competitors can't immediately copy. It is the only junk-removal-native feature genuinely absent from the entire market.

---

## Target Users

### Primary Users

**Persona 1: Marcus, the Solo Hustler**

*Context:* 29 years old, started junk removal 2 years ago with a rented truck. Now owns one F-350 and books 4–6 jobs/day on weekends. Full-time construction job Monday–Friday, running junk removal on the side with plans to go full-time within 12 months. Manages everything from his phone.

*Current workflow:* Customers text him photos; he replies with a price from memory. Schedules in Google Calendar. Invoices with Square. His biggest fear is double-booking or quoting too low on a heavy job.

*Pain:* Spends 45–60 minutes/day on texts and follow-ups. Misses after-hours leads because he can't respond at 11 PM. No real sense of which jobs are most profitable.

*Success looks like:* Quotes sent automatically while he's on a job site. Calendar fills itself. Knows after every job whether it was profitable.

*Willingness to pay:* $49/month or $79 LTD. Will pay if the first week saves him 5+ hours.

---

**Persona 2: Dana, the Growth-Minded Operator**

*Context:* 38 years old, ran one truck for 3 years, now has three trucks and four part-time crew members. Revenue ~$600K last year. Has tried Jobber (too expensive, doesn't fit junk removal), Workiz (better but $275/month for her team). Runs her business like a real company but is drowning in coordination overhead.

*Current workflow:* Uses a mix of Jobber for scheduling, Square for invoicing, and a WhatsApp group for crew dispatch. Maintains a spreadsheet of "VIP clients" (mostly realtors and property managers who send 15–20 jobs/month total). Manually sends thank-you texts to new referral partners.

*Pain:* The referral partner spreadsheet is her single most important business asset — and it lives in Google Sheets with no automation. She's lost referral partners who "felt ignored" after a few unreturned follow-ups. Misses 2–3 jobs/week from leads she can't respond to fast enough.

*Success looks like:* The referral partner pipeline runs itself. Realtors get automatic acknowledgment when they send a job. She can see at a glance which partners sent the most revenue this month. Crew knows where to go without her texting them individually.

*Willingness to pay:* $89/month. Sees software as leverage, not overhead. Would upgrade quickly if referral automation demonstrably strengthened her partner relationships.

---

**Persona 3: Derek, the Franchise Refugee**

*Context:* 44 years old, ran a 1-800-GOT-JUNK franchise for 5 years. Left 2 years ago to go independent. Miss: the franchise systems (automated booking, branded experience, structured quoting). Has: deep domain knowledge, established territory reputation, 3 trucks, existing referral network of 8 realtors.

*Current workflow:* Tried CurbWaste (too complex, designed for roll-off), tried QuoteIQ (good but photo AI costs extra), settled on a cobbled-together stack. Specifically frustrated that no tool manages his realtor relationships the way his franchise CRM used to.

*Pain:* "I had all this infrastructure with the franchise. Now I'm back to spreadsheets." Primary pain is not operational chaos — it's the loss of the professional referral management system he had as a franchisee.

*Success looks like:* A tool that makes his independent operation look as professional as his franchise days. Realtor partners receive timely, branded communications. He can see referral attribution history.

*Willingness to pay:* $89–149/month. High LTD interest — franchise background means he's used to paying significant monthly fees; $149 one-time is a no-brainer.

### Secondary Users

**Crew Members** — receive job details and navigation links via SMS; upload job completion photos with truck load data. Mobile-only, zero onboarding required. Success = clear instructions without needing to call the owner.

**Referral Partners (Realtors / Property Managers / Estate Attorneys)** — passive secondary users. Receive automated confirmation when they submit a referral, monthly summary emails, and periodic "thank you" outreach. They never log into the platform; they interact only via email and potentially a simple referral submission form.

**Potential Future Segment: Franchise Networks** — independent franchise systems (Junk King, College Hunks regional operators) could use HaulDesk as a lightweight alternative to enterprise dispatch software, especially if multi-location support is added in v2.

### User Journey

**Marcus's First 7 Days:**

1. *Discovery:* Sees post on r/junkremovalstartup from another operator saying "this finally has the booking window feature." Clicks link to free trial.
2. *Onboarding:* Enters phone number, truck count, and service area ZIP codes. Sets up morning/afternoon/evening booking windows in 10 minutes.
3. *First Quote:* Sends his first SMS quote link to a customer. Customer uploads 3 photos. AI returns a truck load estimate. Marcus reviews, adjusts by 10%, sends quote. Customer approves via SMS. Job appears on calendar.
4. *Aha Moment:* Day 3 — a quote gets approved at 11 PM while Marcus was asleep. He wakes up to a booked job and an automated confirmation already sent. "It works without me."
5. *Core Usage:* After 2 weeks, 70% of quotes are approved without Marcus touching them. He checks the app for 5 minutes every morning to review the day's jobs. Crew receives dispatch SMS automatically.
6. *Long-term:* After 60 days, adds his two main realtor contacts as referral partners. They start receiving automatic acknowledgments and a monthly summary. One realtor tells him "I love the confirmation emails — it makes you look really professional."

**Dana's Referral Partner Adoption:**

1. *Discovery:* Google search for "junk removal software with realtor referral tracking." Finds a Reddit thread comparing options; someone mentions HaulDesk is the only tool with built-in referral tracking.
2. *Trial:* Imports her 8 referral partners from a CSV. The system sends each a welcome email explaining the referral tracking program.
3. *First Win:* Within 2 weeks, one realtor submits 3 jobs via the referral link instead of calling Dana directly. Dana receives a notification for each. The realtor receives automated confirmations.
4. *Value Realization:* End of month — Dana reviews her referral partner dashboard. Partner #2 sent $3,400 in jobs this month. Partner #5 (who she'd been meaning to call for weeks) hasn't sent anything. She calls Partner #5 proactively. Closes 2 new jobs from that call.

---

## Success Metrics

**Primary user success metric:** Time from customer photo submission to confirmed booking under 10 minutes (vs. 20–40 minutes in current manual workflow). Measured by tracking quote-to-booking time for all SMS quote flows.

**Secondary user success metric:** Partner referral retention — % of referral partners who send at least one job in any given 60-day period (target: 70%+ of registered partners active each 60 days).

**Activation metric:** Operator sends first SMS quote link within 48 hours of signup. This is the core "aha" moment and the best predictor of retention.

### Business Objectives

**90-day targets (MVP launch):**
- 50 paying customers (mix of monthly + LTD)
- AppSumo campaign live with $20,000+ gross LTD revenue
- 10+ customer testimonials ("saved me X hours/week")
- Net Revenue Retention > 90% (monthly subscribers)

**12-month targets:**
- $30,000–$50,000 MRR from monthly subscribers
- 500+ total customers (monthly + LTD combined)
- Referral partner feature adopted by 40%+ of active customers
- Presence in top 3 results for "junk removal software" on AppSumo and community comparisons

**Strategic objective:** Become the category default for junk removal operators who rely on referral partner relationships — before QuoteIQ or AutopilotApp adds referral tracking (estimated 12–18 months before they ship a competing feature).

### Key Performance Indicators

| KPI | Target | Measurement Method |
|---|---|---|
| Time-to-first-quote | < 48 hours after signup | App event tracking |
| Quote-to-booking conversion rate | > 60% (vs. ~40% manual) | Quote status tracking |
| Average admin time saved per operator | 5–8 hours/week | Onboarding survey + 30-day check-in |
| Referral partner adoption rate | 40% of customers add ≥1 partner | Partner profile creation events |
| Monthly churn (subscribers) | < 5% | MRR tracking |
| AppSumo LTD gross revenue | $20,000+ in first 30 days | AppSumo dashboard |
| Net Promoter Score | > 50 | 30-day post-activation survey |
| AI photo quote accuracy | Customer-accepted quote within ±15% of actual job | Quote adjustment tracking |

**Leading indicators to watch:**
- SMS quote link click rate (% of customers who send their first link within 48 hours)
- Referral partner email open rate (indicates partner engagement before they send first job)
- Crew mobile usage (% of jobs where crew uploads completion photos via mobile)

---

## MVP Scope

### Core Features

The MVP must enable the complete quote-to-invoice loop via SMS without requiring any party (operator, customer, or crew) to download an app or create an account.

**Feature 1: SMS Photo Quote Flow**
- Operator sends a unique SMS quote link to a customer (from web dashboard or mobile)
- Customer opens link, uploads 1–10 photos
- AI (GPT-4o Vision) estimates truck load percentage and returns a suggested price range based on operator's configured pricing rules
- Operator reviews and approves/adjusts the quote in < 30 seconds
- Customer receives quote via SMS with one-tap approval button
- On approval: job is automatically created in calendar with booking window

**Feature 2: Booking Window Scheduler**
- Operator configures service windows: Morning (configurable range), Afternoon, Evening
- Quote approval flow shows available windows for the next 7 days
- Calendar view shows all scheduled jobs by window, truck, and crew
- Automated SMS reminders to customer 24 hours and 1 hour before window opens
- Crew receives dispatch SMS with job address, photos, and customer notes

**Feature 3: Job Completion & Invoicing**
- Crew uploads before/after photos and enters truck load percentage at job completion
- System calculates dump fee estimate based on load percentage and configured dump rates
- Invoice auto-generated with before/after photos attached
- Customer receives invoice via SMS payment link (Stripe)
- Automated payment reminders at 24h and 72h if unpaid

**Feature 4: Partner Referral Engine (MVP version)**
- Operator adds referral partners (name, email, type: realtor / property manager / attorney / other)
- Each partner gets a unique referral link / intake form for submitting leads
- When a job is booked via a partner's link: partner receives automated confirmation email
- Operator dashboard shows jobs per partner, revenue per partner (last 30/90/all time)
- Automated "thank you" email to partner on first referral submission
- Monthly referral summary email sent automatically to all active partners

**Feature 5: Operator Dashboard (mobile-first web app)**
- Today's jobs, upcoming jobs by truck
- Quote queue (pending customer approvals)
- Partner referral activity summary
- Basic revenue reporting (jobs completed, revenue, top referral partners this month)

**What "MVP complete" means:** An operator can go from "customer sends 3 photos of a pile" to "paid invoice received" using only HaulDesk — zero external tools required. The realtor who sent the job receives an automated email. The operator spends < 5 minutes on admin per job.

### Out of Scope for MVP

**Deferred to v1.1:**
- Route optimization / multi-stop routing (Workiz/Jobber territory; nice-to-have, not core)
- GPS tracking of crew vehicles (adds hardware cost and complexity; crew dispatch via SMS is sufficient for MVP)
- QuickBooks / accounting integration (operators can export invoices to CSV; full sync post-MVP)
- Multi-location / franchise account management (v2 feature when market segment is validated)
- Native iOS / Android apps (progressive web app covers mobile use case; native apps post-AppSumo traction)
- Customer-facing account portal (customers self-serve via SMS links; portal is a v2 retention feature)
- Marketing automation (email campaigns, review request automation) — existing tools handle this; not core dispatch workflow
- AI job categorization / pricing suggestions based on historical data (requires data accumulation; build after 6 months of usage data)

**Explicitly not in scope ever:**
- Roll-off dumpster rental management (different business model; CurbWaste's territory)
- Residential curbside/recurring waste management (municipal contract territory)
- Multi-trade FSM platform (staying vertical; junk removal only)

### MVP Success Criteria

The MVP is validated and ready for growth investment when:

1. **Activation:** 70%+ of trial signups send their first SMS quote link within 48 hours
2. **Retention:** Monthly subscriber churn < 5% after 90 days
3. **Core loop:** Average time from customer photo submission to confirmed booking < 10 minutes across all active accounts
4. **Referral feature adoption:** 35%+ of customers with 90+ days of usage have added at least one referral partner
5. **LTD validation:** AppSumo campaign achieves $15,000+ gross revenue within 30 days (confirms demand outside the community launch)
6. **Qualitative:** 5+ unprompted testimonials mentioning specific time savings or the referral partner feature

**Go/no-go decision point:** If criteria 1, 2, and 5 are not met after 90 days post-AppSumo launch, reassess positioning before investing in v1.1 development.

### Future Vision

**v1.1 (months 4–6): Efficiency Layer**
- QuickBooks / Xero sync for invoices and payments
- Review request automation (Google/Facebook reviews sent after job close)
- Basic route optimization for same-day multi-job scheduling
- Crew mobile app (native iOS/Android) with offline support

**v1.2 (months 7–9): Data Intelligence**
- AI-powered pricing suggestions based on job history and market data
- Job margin analytics dashboard (revenue vs. dump fees vs. labor hours per job type)
- Seasonal demand forecasting ("expect 40% more estate cleanouts in March–April")
- Automated re-engagement campaigns for dormant referral partners

**v2.0 (months 10–18): Platform Expansion**
- Multi-location / franchise account management (target: Junk King regional operators, College Hunks independents)
- White-label option for franchise systems to deploy under their brand
- Customer-facing portal with job history, repeat booking, and referral submission
- Partner portal for realtors and property managers to track their own referral activity
- API access for integration with real estate CRMs (Follow Up Boss, LionDesk, Chime)

**Long-term vision (3+ years):**

HaulDesk becomes the operating system for the independent junk removal industry — the tool that franchise refugees and growth-minded operators use to build a business that runs without them. The referral partner engine evolves into a two-sided marketplace connecting real estate professionals with vetted, insured junk removal operators in their market.

Network effects emerge from the referral layer: a realtor who sends jobs through HaulDesk's partner portal has an incentive to recommend HaulDesk to other operators they work with, creating organic distribution. The business becomes defensible not through feature parity but through the depth of the referral network — something QuoteIQ, AutopilotApp, or Jobber cannot replicate by adding a single feature update.

**Exit potential:** Category-leading vertical SaaS for junk removal with network effects from referral partnerships commands 5–8x ARR in the $5M–$10M ARR range. Alternative: strategic acquisition by a home services platform (ServiceTitan, Jobber, Housecall Pro) seeking to add a junk removal vertical.

---

## Risks and Mitigations

| Risk | Severity | Probability | Mitigation |
|---|---|---|---|
| QuoteIQ adds referral tracking | High | Medium (12–18 months) | Ship LTD + referral engine within 90 days; build stickiness before they ship |
| AI compute costs (GPT-4o Vision) erode LTD economics | Medium | High | Per-tier usage caps: 100 AI quotes/month on LTD Tier 1; unlimited on Tier 2+ |
| JUNK SHOT patent infringement on photo quoting | High | Low-Medium | IP review before coding; workaround approach if needed (non-visual volume estimation alternative) |
| Small addressable market (7K–12K operators) | Medium | Confirmed | Accept as lifestyle/niche SaaS; MRR target $30–50K is realistic and sustainable |
| AppSumo audience doesn't reach junk removal operators | Medium | Medium | Parallel launch on r/junkremovalstartup and JRA community; AppSumo for reach, community for depth |
| Technical risk: AI photo volume accuracy | Medium | Medium | Implement confidence scoring; low-confidence quotes route to operator review before sending to customer |

---

## Go-to-Market Summary

**Launch sequence:**
1. **Week 1–2 of MVP:** Soft launch to r/junkremovalstartup with founder post ("I built this after talking to 20 operators — free for the first 20 people who try it")
2. **Month 1:** Collect testimonials, refine onboarding, fix top 3 friction points
3. **Month 2:** AppSumo submission + community launch ($79/$149/$249 LTD)
4. **Month 3+:** Content SEO ("junk removal software", "junk removal quoting app"), YouTube tutorial series, JRA community presence

**Pricing at launch:**
- Monthly: $49/month (1–2 trucks), $89/month (3–5 trucks)
- LTD (AppSumo): $79 (1–2 trucks, 100 AI quotes/month), $149 (up to 3 trucks, unlimited AI quotes), $249 (up to 5 trucks, unlimited, priority support)

**Core marketing hook:** "The only junk removal software that tracks your realtor referrals — from customer photo to paid invoice in one app."

**Secondary hook for LTD:** "One-time price, no monthly fees. Every other junk removal tool charges $49–$299/month forever."

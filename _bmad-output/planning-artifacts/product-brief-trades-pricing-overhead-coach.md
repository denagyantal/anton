---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/pricing-coach-overhead-calculator-solo-tradespeople.md
  - _bmad-output/planning-artifacts/research/market-trades-pricing-overhead-coach-research-2026-10-24.md
workflowType: product-brief
lastStep: 6
user_name: Root
date: 2026-10-25
---

# Product Brief: RateFix — Pricing Coach & Overhead Calculator for Solo Tradespeople

## Executive Summary

Solo plumbers, HVAC techs, electricians, and roofers are systematically underpriced — not from lack of skill, but because no purpose-built tool has ever existed to help them calculate their true overhead and minimum viable billable rate. They copy competitors, use gut feeling, and end up "busy but broke": booked solid but unable to pay themselves what their labor is worth. This is a perennial, documented pain point affecting 400,000–600,000 solo trade operators in the US alone, with an 82% construction business failure rate traceable directly to poor cash flow rooted in underpricing.

**RateFix** is the only dedicated, wizard-driven SaaS product that takes a solo tradesperson from zero — no formal rate set, no overhead understanding — to their minimum viable hourly rate plus regional industry benchmarks, in under 15 minutes. The core wizard collects trades-specific inputs (truck costs, tool depreciation, certifications, seasonality, close rate, target salary) and outputs a defensible minimum billable rate with the coaching context to act on it. Phase 2 adds actuals tracking to create the MRR layer.

The business case is clear: a $49–$79 LTD priced below a single month of Jobber subscription, targeting a 400,000–600,000 person SAM with no existing dedicated competitor. Converting 1% of SAM to LTD buyers generates $200,000–$300,000 upfront; Phase 2 actuals tracking at $19/month creates the path to $20,000+ MRR within 24 months. The ROI story sells itself: "One job priced right pays for this tool forever."

---

## Core Vision

### Problem Statement

Solo tradespeople — plumbers, HVAC techs, electricians, and roofers operating with 0–1 employees — are chronically underpriced because they have never formally calculated their true overhead or minimum viable hourly rate. They set prices by watching competitors or using rough rules of thumb ("charge what the other guys charge," "multiply labor by 3"). The result is what the trades community calls "busy but broke": a full calendar and an empty bank account.

The specific calculation gap is well-defined:
- Most solos undercount overhead by 30–50%, most commonly by excluding owner salary from overhead calculations
- Vehicle true cost (depreciation + insurance + maintenance, not just fuel) is routinely excluded
- Non-billable time — estimating, driving, admin — typically consumes 30–50% of total working hours, but most solos assume 100% billable efficiency when setting rates
- Seasonality means a 12-month overhead burden must be funded by 6–8 months of peak-season billings
- Close rate is almost never factored in: a tradesperson who quotes 10 jobs to win 4 is spending unbillable time on 6 lost estimates — that cost belongs in the rate

**No interactive, purpose-built tool exists for this specific calculation.** SCORE and SBA publish generic spreadsheet guides. A handful of free calculators (RateTicket, clean-invoice.com, Fergus) exist but provide static forms with no wizard UX, no regional benchmarks, no close rate input, no actuals tracking, and no coaching interpretation.

### Problem Impact

The documented downstream consequences of this pricing blindspot are severe:

- **82% of construction business failures trace to poor cash flow rooted in underpricing** (TGUC Financial, 2026)
- **60% of contractors do not know their true profit margin** (Build-Folio, 2026)
- **25% of builders generated zero net profit in 2025** (Repuclinic/Buildertrend data)
- **34% of small shop owners earn less per effective hour than their own employees** (Clockwork, 2026)
- **74% of construction companies experienced moderate to severe cash flow challenges in 2024** (Construction Dive)
- Typical solo operator discovers they've been undercharging by 15–30% once they actually run the numbers

The pain is emotional as well as financial. Community evidence from r/sweatystartup (500K+ members) confirms this is the #1–3 recurring pain point:

> "I've been charging $85/hr for 3 years but I think I should be charging more"  
> "I'm booked 10 hours a day but still feel broke at the end of the month"  
> "How do I figure out what to charge without losing jobs to cheaper guys?"

The problem is real, perennial, and causes serious harm to hundreds of thousands of independent trade businesses annually.

### Why Existing Solutions Fall Short

**Free static calculators (RateTicket, clean-invoice.com, Fergus Rate Calculator):**
- No wizard UX — blank forms that require the user to already know what to input
- No trades-specific inputs like tool depreciation, EPA certification renewal, seasonality adjustments, or close rate
- No regional benchmarks — no way to compare against "what HVAC techs in my metro area charge"
- No saved state — every visit starts from scratch
- No coaching interpretation — just a number, with no context for what it means or how confident to be in it
- No actuals tracking — no way to track whether the business is hitting the target rate over time
- No revenue model means no investment in data accuracy, UX improvement, or benchmark curation

**Expensive FSM platforms (Jobber, Housecall Pro, ServiceTitan):**
- Solve scheduling, quoting, and invoicing — not "what should my rate be in the first place"
- Pricing ($29–$400+/month) is for complete workflow management, not rate calculation
- ServiceTitan (primary enterprise option) starts at $250/tech/month — inaccessible for solo operators
- None of these platforms have a wizard that calculates minimum viable rate from overhead inputs

**Flat-rate price book software (Profit Rhino, The New Flat Rate):**
- Solve customer-facing job pricing ("what do I charge for a specific task?") not internal overhead calculation ("what's my floor?")
- Typically $100+/month and targeted at businesses with 2+ techs
- Don't answer "am I covering my actual cost basis?"

**Content/guide platforms (SoloRateHQ, ShiftFlow):**
- Provide rate ranges without personalization — "electricians charge $75–$150/hr nationally"
- No calculation, no wizard, no saved state
- Can't tell a user in Phoenix whether their rate is competitive for their specific overhead

**The gap is precise:** No SaaS product in the $0–$99 range provides a guided wizard that takes a solo tradesperson through their actual cost structure, outputs a defensible minimum rate, and provides regionally-contextualized benchmark data.

### Proposed Solution

**RateFix** is a mobile-responsive web application built around a guided 8–12 step onboarding wizard that collects trades-specific overhead inputs and produces a personalized minimum billable rate with regional benchmark context and coaching interpretation.

**Core Wizard Flow (MVP):**

1. **Trade selector** — plumber, HVAC, electrician, roofer (drives default values and benchmarks)
2. **Target income** — desired annual take-home salary + estimated self-employment tax
3. **Vehicle costs** — truck payment/lease, annual insurance, fuel estimate, estimated maintenance (not just fuel)
4. **Tools & equipment** — total replacement value ÷ useful life = annual depreciation
5. **Business overhead** — liability insurance, phone, software subscriptions, accounting/bookkeeping
6. **Licensing & certifications** — renewal costs amortized over certification period
7. **Working hours reality check** — hours/week, weeks/year, estimated non-billable % (estimating, driving, admin)
8. **Close rate** — what % of quotes convert to jobs (affects true cost of unbillable estimating time)
9. **Desired profit margin** — above breakeven

**Output Dashboard:**
- **Minimum viable rate** — the number they cannot go below without losing money
- **Suggested rate** — minimum + target profit margin, with plain-English explanation
- **Rate health check** — traffic light (red/yellow/green) comparing their current rate to the calculated floor
- **Regional benchmark** — "HVAC techs in your state charge $X–$Y/hr on average" (sourced from BLS OEWS state data)
- **"What if I raise my rate?" simulator** — "Raising your rate $15/hr on your current volume = $18,750 more this year"
- **Coaching layer** — interpretation of the numbers in plain English, common mistakes this tradesperson is likely making, and the 1–2 most impactful actions they can take

**Phase 2 — Actuals Tracking (MRR layer):**
- Log actual jobs invoiced vs. estimated overhead expenses monthly
- Dashboard: "You calculated $125/hr minimum — your last 30 days averaged $98/hr. You left $X on the table."
- Seasonal adjustment: flag when slow months are depleting the buffer
- Optional QuickBooks Online data pull to auto-populate actuals

### Key Differentiators

1. **Wizard UX vs. static forms** — step-by-step guided onboarding with smart defaults ("typical plumber in your state") vs. blank spreadsheet that requires expertise to fill out
2. **Close rate integration** — the only calculator that accounts for the fact that quoting 10 jobs to win 4 means 6 quotes worth of unbillable time that must be recovered in the rate
3. **Regional benchmarks** — "here's how your rate compares to other HVAC techs in your state" using BLS OEWS state-level wage data, not just national averages
4. **Coaching interpretation** — outputs are not just numbers; they come with plain-English explanation, common mistakes flagged, and 1–2 specific recommendations ("you're assuming 40 billable hours/week; most solos actually bill 25–30 — adjusting that changes your minimum rate from $X to $Y")
5. **Saved state** — email capture preserves results; users can return and update as their overhead changes (insurance renewal, new truck, price increase)
6. **Phase 2 actuals tracking** — transforms from a one-time calculator into an ongoing "are you hitting your number?" dashboard, enabling the MRR subscription

**Why now:** Material prices, insurance, and fuel have climbed 20–40% in recent years faster than most contractors' bids have adjusted. 25% of builders generated no net profit in 2025. The urgency to recalculate rates has never been higher, and the community conversation about this is at peak volume.

---

## Target Users

### Primary Users

**Persona 1: Marcus — the recently-independent HVAC technician**

Marcus is 34, recently left a HVAC company to go solo after 8 years as a technician. He's good at the work — install, service, diagnostics — but has never run a business. He set his rate at $85/hr because "that's what my old company was charging customers for my labor." He's been booked solid for 6 months but can't figure out why his bank account looks worse than it did when he had a salary. He hasn't accounted for his own health insurance, the truck payment, or the 3 hours per day he spends driving between jobs and answering quotes that don't convert.

- **Discovery path:** Googles "how much should I charge as HVAC tech" or finds a pricing thread in r/sweatystartup while venting about being broke
- **Trigger event:** Gets to the end of a busy month with less money than expected; has a conversation with an older tradesperson who tells him he's leaving money on the table
- **What he needs from RateFix:** A guided process that asks the right questions he's never thought to ask, then shows him the number he should be charging — and why it's different from what he's charging now
- **Success moment:** Runs the wizard, sees his minimum rate is $118/hr, realizes he's been giving away $33/hr on every job. Raises his rate, loses 2 customers, gains 3 better ones, and earns $28,000 more that year
- **Tech comfort:** High smartphone usage; uses Google Maps, QuickBooks Self-Employed, and texts customers. Not intimidated by web tools but not a power user
- **Willingness to pay:** $49 LTD is a no-brainer if the ROI story lands; strongly prefers one-time vs. subscription

**Persona 2: Sandra — the established plumber who "knows" she's underpriced but is scared to raise rates**

Sandra is 47, has been running her solo plumbing business for 11 years. She charges $95/hr because that's what she raised to from $80 three years ago, and "no one's complained yet." She knows her insurance went up 30% last year and she bought a new truck, but she hasn't recalculated. She's psychologically blocked from raising rates because she fears losing her loyal customer base. She needs a tool that gives her permission — objective numbers that say "your minimum is $X, and here's why."

- **Discovery path:** Facebook group for women in trades, or a friend sends her a link; possibly trade association newsletter
- **Trigger event:** Does her taxes for the year and realizes her effective hourly was $61 after all costs; has a frank conversation with her accountant
- **What she needs from RateFix:** Validation that her costs genuinely require a higher rate — external, objective proof that she can point to when she raises her prices
- **Success moment:** The wizard shows her minimum is $128/hr. She updates her standard rate to $125, frames it as "recalibrating for current costs," and loses zero customers. Within 6 months she's earned her previous annual income by October
- **Tech comfort:** Uses iPhone, Venmo/Zelle for payments, Facebook groups. Comfortable with web tools but skeptical of anything that looks like it requires setup
- **Willingness to pay:** Will pay $49-79 if the tool is simple and the ROI is obvious; strong preference for one-time payment

**Persona 3: Derek — the new licensee about to start his first solo business**

Derek is 26, just got his electrician's license and is about to strike out on his own. He has no rate set, no business structure figured out, and maximum anxiety. He's desperately Googling "how much to charge as an electrician" and getting contradictory answers from Reddit threads and salary sites. He needs a starting point.

- **Discovery path:** Electrician subreddit, trade school, or a Google search for "electrician hourly rate calculator"
- **Trigger event:** Just got the license; reality of setting his own rates hits immediately
- **What he needs from RateFix:** A wizard that doesn't assume he has 5 years of business data — smart defaults for new businesses, clear explanations of each input, and a starting rate that's grounded in real costs
- **Success moment:** Completes the wizard in 15 minutes, gets a rate range of $85–$105/hr for his area. Sets $95/hr as his starting rate — higher than he would have guessed — and converts his first 3 jobs at that rate
- **Tech comfort:** Very high; expects clean web UX; will share tool with peers

### Secondary Users

**Micro trade businesses (2–5 employees):**
As solo operators grow to hire a first helper or apprentice, overhead complexity jumps. Labor burden, workers comp insurance, and multi-person vehicle logistics all enter the picture. These operators have higher urgency and higher willingness to pay ($79–$99 LTD or $19–$29/month) and represent a natural upsell from Phase 1 to Phase 2. They also discover RateFix organically as their solo peers recommend it.

**Trade business coaches and accountants:**
A small but influential segment: coaches like the Sweaty Startup community, trade-focused CPAs, and SCORE mentors who work with tradespeople. They don't use the tool themselves but recommend it to clients and embed it in their onboarding workflows. Each coach who recommends RateFix creates a referral multiplier into the primary audience.

**Industry associations (PHCC, ACCA, IEC):**
Not users in the direct sense, but institutional partners who can distribute RateFix to their membership (plumbing, HVAC, electrical contractors respectively). Their value is channel, not usage; but they benefit from member tools that improve business outcomes and reduce failure rates in their industries.

### User Journey

**Discovery → First Use:**

1. **Discovery** — Arrives via Google search ("how much should I charge as HVAC tech"), Reddit (sees a post in r/sweatystartup recommending the tool or finds it mentioned in a pricing thread), YouTube (sees a sponsored integration with a trade business creator), or trade association newsletter
2. **Landing page** — sees trade-specific headline: "Stop guessing what to charge. Get your minimum billable rate in 15 minutes." Clear CTA to start the free wizard
3. **Wizard start** — selects trade, immediately sees pre-filled typical values ("default for HVAC in your state: $85/hr starting point — let's calculate yours"). First question is non-threatening: "What's your target take-home pay this year?"
4. **Wizard completion** — 8–12 steps, ~10–15 minutes. Smart defaults reduce cognitive load. Completion rate target: >70%
5. **Results moment** — sees minimum rate, compares to current rate. If current rate is below minimum, a clear callout: "You're currently underpricing by approximately $X/hr." This is the "aha moment" — visceral and personal
6. **Email capture** — "Save your results and get a free '5 Common Pricing Mistakes Tradespeople Make' guide" — converts completion into lead
7. **ROI prompt** — "Raise your rate $15/hr on 1,200 annual billable hours = $18,000 more this year. This tool costs $49 one-time." — purchase CTA for LTD

**Retention (Phase 2):**

8. **Monthly actuals log** — user receives monthly email: "Time to update your RateFix dashboard — how many jobs did you invoice this month?"
9. **Actuals dashboard** — "Your target rate is $125/hr. Last 30 days: 42 jobs, average $107/hr. You left $756 on the table this month."
10. **Seasonal check-in** — in slower months, proactive alert: "Your April volume typically drops 30%. Are you adjusting rates on emergency/priority work?"
11. **Rate revision** — tool prompts annual overhead review: "Your insurance renewal was last June — update your inputs to get a fresh minimum rate"

**Word of mouth loop:**
The "aha moment" at results display is designed to be shareable. "I just found out I should be charging $128/hr" is a natural social moment in trade communities. Adding a "share your result" nudge (anonymized) creates organic referral in Reddit/Facebook group contexts.

---

## Success Metrics

### User Success Metrics

The primary measure of whether RateFix is working for users is behavioral: do they raise their rates after using the tool, and does that improve their financial outcomes?

**Leading indicators (product is working):**
- **Wizard completion rate ≥ 70%** — users who start the onboarding wizard finish it (measures UX clarity and perceived value)
- **Results screen time ≥ 3 minutes** — users are reading and engaging with their output, not bouncing immediately (measures output quality and coaching layer effectiveness)
- **Email save rate ≥ 30% of completions** — users want to return to their results (measures perceived long-term value)
- **Rate gap discovery rate ≥ 60%** — percentage of users whose calculated minimum rate is higher than their current rate (validates that the tool is surfacing real underpricing)

**Lagging indicators (users are getting outcomes):**
- **Rate increase testimonials** — qualitative evidence from user interviews, Reddit mentions, and G2 reviews indicating users raised rates after using tool
- **30-day return rate ≥ 20%** — users come back to update inputs or check actuals (measures ongoing utility)
- **Phase 1→Phase 2 upgrade rate ≥ 15%** — of LTD tier-1 buyers ($49), percentage who upgrade to tier-2 ($79) for actuals tracking
- **NPS ≥ 50** — net promoter score from post-session survey; key for trade community word of mouth

### Business Objectives

**6-month objectives (MVP launch through AppSumo):**
- Validate product-market fit: 500+ wizard completions, 100+ LTD buyers, NPS ≥ 45
- Achieve initial revenue: $25,000–$50,000 gross LTD revenue within 60 days of AppSumo launch
- Build review base: 50+ G2/Capterra reviews at 4.5+ stars average rating
- Establish SEO foundation: first-page rankings for 3–5 high-intent queries (e.g., "electrician hourly rate calculator," "how much to charge as plumber")

**12-month objectives:**
- LTD total: 1,000–2,000 LTD buyers across AppSumo and direct sales
- MRR launch: Phase 2 actuals tracking live; 200+ monthly subscribers at $19/month = $3,800+ MRR
- Content engine: 10+ trade-specific SEO pages published; 1,000+ monthly organic visitors
- Community presence: active and trusted presence in r/sweatystartup and 2–3 trade subreddits; recognized as the go-to pricing tool

**24-month objectives:**
- $20,000+ MRR from Phase 2 subscriptions
- 5,000+ LTD buyers total (direct + AppSumo)
- 1 industry association co-branding or distribution partnership signed
- Anonymous benchmark dataset large enough to replace BLS as primary benchmark source (1,000+ data points per trade per region)
- Brand recognition: top-3 result for "tradesperson pricing calculator" across major search engines

### Key Performance Indicators

| KPI | Target | Measurement Method | Timeframe |
|-----|--------|-------------------|-----------|
| Wizard completion rate | ≥ 70% | In-app funnel analytics | Monthly |
| Email capture rate | ≥ 30% of completions | Email tool / analytics | Monthly |
| LTD buyer volume | 500 (Month 6), 2,000 (Month 12) | Revenue dashboard | Monthly |
| AppSumo launch revenue | $25,000–$75,000 gross | Stripe / AppSumo dashboard | 60 days post-launch |
| G2/Capterra rating | ≥ 4.5 stars | Review platforms | Ongoing |
| NPS | ≥ 50 | Post-session survey (sampled) | Monthly |
| MRR (Phase 2) | $3,800 (Month 12), $20,000 (Month 24) | Revenue dashboard | Monthly |
| Organic traffic | 1,000 monthly visits (Month 12) | Analytics | Monthly |
| Return rate (30-day) | ≥ 20% | Analytics | Monthly |
| Support volume | ≤ 5 tickets per 100 MAU/month | Support tool | Monthly |

**North Star Metric:** **Cumulative "rate gaps discovered"** — the aggregate dollar amount of hourly underpricing surfaced across all users (e.g., "RateFix has helped 10,000 tradespeople discover they were undercharging by an average of $22/hr"). This is both a meaningful outcome metric and a compelling marketing claim.

---

## MVP Scope

### Core Features

**Must-have for launch (Weeks 1–6):**

**1. Trade-Specific Onboarding Wizard**
- Trade selector: plumber, HVAC, electrician, roofer (each with trade-specific default values and benchmark data)
- Step-by-step flow with 8–12 inputs, one per screen
- Smart defaults for every field ("typical HVAC tech in your state") to minimize blank-form anxiety
- Inline help text explaining why each input matters (tooltip or expandable)
- Mobile-responsive (primary users are on phones)
- Inputs:
  - Target annual take-home salary + self-employment tax estimate (auto-calculated at 15.3%)
  - Vehicle: annual payment/lease, insurance, estimated fuel, maintenance budget
  - Tools: total replacement value, estimated useful life → annual depreciation auto-calculated
  - Business overhead: liability insurance, phone, software, accounting
  - Licensing/certifications: renewal cost + frequency → annual amortization
  - Annual working hours; estimated non-billable % (with benchmark: "most solos bill 55–65% of working hours")
  - Close rate (with benchmark: "average HVAC contractor closes 43% of quoted jobs")
  - Desired profit margin (with benchmark and plain-English guidance)

**2. Results Dashboard**
- Minimum viable rate (cost breakeven)
- Suggested rate (minimum + desired margin)
- Current rate comparison — user inputs their current rate, sees the gap in dollars per hour and per year
- Regional benchmark range — "HVAC techs in [your state] typically charge $X–$Y/hr" (BLS OEWS state-level data)
- "What if" rate simulator — slider: raise rate by $X/hr → see annual revenue impact at current volume
- Rate health check — red/yellow/green traffic light vs. minimum rate
- Coaching callout — 1–2 plain-English observations about the user's specific situation (e.g., "Your biggest gap is non-billable time — you're assuming 80% billable but the average solo HVAC tech bills 62%. Correcting that alone adds $18/hr to your minimum rate")

**3. Email Capture + Results Save**
- Optional email to save results (hosted link)
- Welcome email with results summary + "5 Pricing Mistakes Tradespeople Make" PDF
- Drip sequence (3 emails over 2 weeks) bridging toward Phase 2 and LTD offer

**4. LTD Purchase Flow**
- Stripe-based LTD checkout ($49 tier 1 / $79 tier 2)
- Tier 1: full wizard + regional benchmarks + saved results
- Tier 2: all of Tier 1 + Phase 2 actuals tracking (can be unlocked immediately or roadmapped)
- Post-purchase: account creation, results persistence, AppSumo code redemption support

**5. State-Level Regional Benchmarks**
- BLS OEWS state-level wage data for all 4 trades (publicly available, updated annually)
- Displayed as ranges on results screen
- Used in coaching callouts: "You're priced below the state average for your trade"

### Out of Scope for MVP

**Explicitly deferred to Phase 2 or later:**

- **Actuals tracking dashboard** — the MRR feature (logging real jobs vs. target rate); full Phase 2 implementation. Tier 2 LTD buyers get it when Phase 2 launches
- **QuickBooks / Jobber API integration** — auto-populate actuals from accounting/FSM data; requires OAuth integration, deferred to Phase 2
- **Multi-trade support** — some operators do both plumbing and HVAC; single-trade only for MVP
- **Team/crew mode** — overhead calculation when hiring a helper; solo operator focus for MVP
- **Job-type pricing** (service call vs. installation vs. emergency rates) — Phase 2
- **PDF report generation** — nice-to-have, deferred to post-AppSumo launch based on demand
- **Industry association co-branding** — partnership conversations can start pre-launch but integration work deferred
- **Mobile app (iOS/Android)** — mobile-responsive web is sufficient for MVP; native app requires separate investment
- **Seasonal rate optimizer** — automatic rate recommendations by month based on typical volume patterns; Phase 2
- **Anonymous benchmark crowdsourcing** — replacing BLS data with user-contributed averages; requires significant user base, Phase 3
- **Geographic expansion** (Australia, UK, Canada) — post-US validation

**Why these are deferred:** Each out-of-scope item would add 2–6 weeks of build time. The core value proposition — "wizard → minimum rate → benchmark context" — is fully deliverable in 4–6 weeks. Shipping the core fast and iterating based on real user feedback is more valuable than building a complete platform before validating demand.

### MVP Success Criteria

The MVP is considered validated and ready for full investment if, within 90 days of launch:

1. **500+ wizard completions** — demand signal that the SEO/community marketing is working
2. **Wizard completion rate ≥ 65%** — product quality signal; users who start, finish
3. **100+ LTD purchases** — willingness-to-pay validation; community is ready to buy
4. **25+ G2/Capterra reviews averaging ≥ 4.3 stars** — product quality and user satisfaction validation
5. **≥ 3 unprompted testimonials** documenting a rate increase — outcome validation; the tool is actually helping people earn more
6. **NPS ≥ 45** — net promoter score indicates organic word-of-mouth potential

**Go/no-go decision point at Day 90:** If 3 of the 6 criteria above are met, proceed to Phase 2 (actuals tracking + Jobber integration). If fewer than 3, run a structured root-cause sprint before committing Phase 2 investment.

### Future Vision

**Phase 2 — Actuals Tracking (Months 4–8):**
RateFix evolves from a one-time calculator into an ongoing financial health monitor. Users log actual jobs invoiced monthly; the dashboard shows whether they're hitting their calculated target rate in practice. This is the MRR product:
- Monthly actuals log: jobs count, average invoiced amount, overhead expenses
- "Rate gap" dashboard: target vs. actual rate, money left on table
- Seasonal flagging: slow months trigger proactive rate adjustment alerts
- QuickBooks Online data pull (optional): auto-populate actuals without manual logging
- Upgrade path: Tier 2 LTD ($79) or $19/month subscription

**Phase 3 — Integration & Benchmark Network (Months 9–18):**
- **Jobber API integration:** pull job data directly from Jobber to power actuals dashboard — no manual logging
- **Anonymous benchmark crowdsourcing:** opt-in to contribute rate data; powers more granular metro-level benchmarks ("HVAC techs in Phoenix metro: $X–$Y/hr" vs. state-level)
- **Job-type pricing intelligence:** separate rate recommendations by job type (service call, install, emergency, contract)
- **Industry association partnerships:** PHCC and ACCA co-branded versions; member distribution channel

**Phase 4 — Solo Trade Business Financial OS (Month 18+):**
The long-term vision is a lightweight financial dashboard for solo tradespeople that answers three questions on one screen:
- "Am I pricing right?" (rate vs. minimum, benchmarks)
- "Am I overhead-efficient?" (actual overhead vs. benchmark for my trade)
- "Am I on track for my annual income goal?" (YTD earnings vs. target)

This positions RateFix as a lightweight alternative to QuickBooks for tradespeople who want a trades-specific financial cockpit rather than a general accounting tool. The exit opportunity: acquisition by Jobber, Housecall Pro, or EverCommerce (Profit Rhino parent) as a complementary pricing intelligence layer for their FSM platforms.

**Geographic expansion:** Once US market is validated, direct expansion to Australia/NZ (Fergus-dominant market; same trade structure, English-language) and UK (FMB, NICEIC member distribution).

**Adjacent trades expansion:** Landscaping, pressure washing, handyman services, pool service, pest control — all have the same "busy but broke" dynamic and no dedicated pricing tools. Expansion requires only trade-specific benchmark data and adjusted wizard defaults.

---

*Product Brief completed: 2026-10-25. Based on shortlisted idea (score: 87/105, 2026-10-07) and comprehensive market research (2026-10-24). Ready for PRD creation.*

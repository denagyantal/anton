---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/invoice-auto-followup-trades.md
  - _bmad-output/planning-artifacts/research/market-invoice-auto-followup-trades-research-2026-08-30.md
workflowType: product-brief
lastStep: 6
project_name: invoice-auto-followup-trades
user_name: Root
date: 2026-09-23
author: Root
---

# Product Brief: Invoice Auto-Follow-Up for Trades

---

## Executive Summary

**ChaseIt** is a standalone, trades-specific invoice recovery SaaS that automatically follows up on unpaid invoices via SMS + email sequences with contractor-tone templates and "Pay Now" links. It plugs in on top of any existing invoicing stack — Jobber, QuickBooks, HouseCall Pro, or manual — without requiring a full platform switch.

The problem is universal and well-quantified: 82% of US contractors face payment delays exceeding 30 days, and the average small business holds $17,700 in overdue invoices (QuickBooks 2026). A single plumber case study documented $47K in uncollected receivables simply from not chasing. The emotional barrier is the real driver — tradespeople avoid manual follow-up because it feels awkward and aggressive, so unpaid invoices pile up silently.

No credible standalone solution exists at the right price point for the sub-10-person trade shop. Jobber gates automated follow-up behind its $80–$119/month Connect tier. Generic AR automation (Chaser, BILL) starts at $95–$899/month and speaks the wrong language. PayNudger (IH, March 2026) is email-only and untargeted. The gap is clear: a trades-specific, SMS+email, standalone tool at $15–$25/month with contractor-tone templates, a "Pay Now" link, and a visible recovery dashboard.

**Market validation is strong (98/105 score, 6 signal events across 14+ months).** Multiple Reddit threads have confirmed a comparable tool at $18K MRR after a 10-day rough MVP. The product needs to ship fast and own the trades vertical before a well-funded clone enters.

**Revenue path:** ~500 customers at $19/month = $9.5K MRR. AppSumo LTD launch ($59–$79) provides the acquisition burst. r/sweatystartup (500K+) and adjacent Facebook groups are the direct acquisition channel.

---

## Core Vision

### Problem Statement

Service business owners — plumbers, HVAC techs, electricians, handymen, cleaners — routinely send invoices and then fail to collect. The follow-up never happens, not because they forgot the money, but because **calling a customer about an unpaid invoice feels aggressive and uncomfortable**. The emotional friction of manual follow-up is so high that tradespeople regularly write off hundreds or thousands of dollars rather than make the awkward call.

This is not a niche edge case. It is the default behavior across the entire trades industry:

- 82% of US contractors experience payment delays exceeding 30 days
- 59% of small businesses hold overdue invoices averaging $17,700 unpaid
- A documented plumber case: $47,000 in uncollected receivables from forgetting to chase
- "Sending the third reminder felt worse than losing the money" — confirmed emotional pain point across Reddit, Indie Hackers, and trade forums

### Problem Impact

**Financial:** Every trade business loses real money every month. At typical invoice volumes and delay rates, a 5-person HVAC shop leaves $2,000–$8,000 per month uncollected. At scale, US construction alone suffers $280 billion in slow-payment losses annually.

**Operational:** Cash flow disruption cascades — unpaid invoices delay material purchases, threaten payroll, and force expensive short-term borrowing. Late payments cause up to 25% of small business bankruptcies (Allianz Trade).

**Emotional:** The "reluctant chaser" persona avoids follow-up not from laziness but from a genuine psychological aversion to confrontation. This avoidance behavior is deeply consistent across trade communities.

### Why Existing Solutions Fall Short

| Solution | Price | Problem |
|----------|-------|---------|
| Jobber (Connect tier) | $80–$119/month | Requires full FSM adoption; feature gated behind expensive upgrade |
| HouseCall Pro | $59–$299/month | Full FSM suite; high price floor; overkill for solo operators |
| Chaser / BILL | $95–$899/month | Priced for B2B SaaS; corporate tone; wrong buyer |
| QuickBooks / FreshBooks | Full accounting platform | Email-only reminders; generic corporate language; requires platform adoption |
| PayNudger (IH, 2026) | Unknown/early | Email-only; no trades positioning; no SMS; no payment link; bare-bones |

The gap is not subtle: there is no standalone, SMS+email, trades-specific invoice follow-up tool under $50/month that works on top of any invoicing stack. That is ChaseIt's entire reason for existing.

### Proposed Solution

**ChaseIt** — Standalone invoice recovery tool for trade businesses.

Connect via Stripe webhook (or manual invoice entry for non-Stripe users). When an invoice goes past due, ChaseIt automatically fires a configurable multi-step follow-up sequence:

- **Day 7:** Friendly SMS + email reminder with "Pay Now" link ("Hi Mike, just a reminder about the invoice for your HVAC repair on the 14th...")
- **Day 14:** Slightly firmer tone ("We wanted to make sure you received our invoice for $650. The quickest way to pay is...")
- **Day 30:** Final notice with payment link and option to flag a dispute

Contractors control:
- Tone scale (friendly → firm)
- Delay intervals
- Message templates per trade type (pre-built for plumbing, HVAC, handyman, cleaning)

Dashboard shows: outstanding invoices, total $ at risk, $ recovered this month, recovery rate.

"Pay Now" link = one-tap Stripe Payment Link embedded directly in the SMS and email — the friction collapse from paper invoice to instant payment is the core value driver.

### Key Differentiators

1. **Standalone / stack-agnostic** — works on top of Jobber, QuickBooks, HCP, or manual invoicing. Zero switching cost. No full platform adoption required.

2. **Trades-specific tone** — pre-built message templates written for plumbers, HVAC techs, handymen, and cleaners. Not "your account balance is overdue" — the language a tradesperson would actually use.

3. **SMS + email + "Pay Now" link in one package** — no other lightweight tool offers this trifecta. Multi-channel dunning achieves 50–80% recovery rates vs. email alone.

4. **Visible recovery dashboard** — "$ recovered this month" is the metric that validates the tool every billing cycle. Silent automation + visible ROI = zero churn incentive.

5. **"One recovered invoice pays for the tool"** — the decisive conversion argument at $19/month. A single $300 invoice recovered more than pays for a year of the product.

6. **Positioned against Jobber's price gate** — "You're on Jobber Core? ChaseIt is the invoice follow-up feature Jobber charges $80/month for, at $19/month."

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Solo Plumber (The Reluctant Chaser)

**Context:**
Marcus runs a one-man plumbing business. He's 42, been in the trades for 18 years, does residential and light commercial work. He uses Jobber Core ($39/month) for scheduling and invoicing. He invoices ~25 jobs per month, averaging $450/invoice. He's not a power user — he does the bare minimum on admin so he can spend more time on the tools.

**Problem Experience:**
Marcus sends invoices at end-of-day from Jobber on his phone. When they don't get paid, he tells himself he'll follow up "this week." That week becomes two weeks. By the time a month has passed, following up feels desperate — like he's begging a customer for money. He'd rather write off a $300 invoice than make that call. He estimates he misses $800–$1,500/month in unpaid invoices, but he's never sat down to calculate it precisely.

**Current Workaround:** Occasional manual SMS reminders when a large invoice has been overdue too long. No systematic approach.

**Success Vision:** Marcus sets up ChaseIt once, connects it to his Stripe or Jobber export, and never thinks about invoice follow-up again. Six months later he looks at his dashboard and sees "$6,200 recovered." He tells two other plumbers at a supply house.

**What he values:** It works without him doing anything. It doesn't embarrass him with customers. He can see the money it's recovering.

---

#### Persona 2: Diane — The HVAC Small Crew Owner (The Cash-Strapped Operator)

**Context:**
Diane runs a 4-person HVAC company. She's 51, handles the scheduling and invoicing herself with QuickBooks. Monthly revenue ~$85K with typical 30-day payment cycles. She has a mix of residential homeowners and small commercial property managers. Invoices range from $300 emergency calls to $8,000 equipment installs.

**Problem Experience:**
Diane had a commercial client ghost her on a $6,800 invoice for a rooftop unit replacement. Three months later, still unpaid. She finally called, the client claimed he "never got it" and paid within a day of her calling. She realized she had two other invoices over $2,000 that were 45+ days old. She's now acutely aware of the problem but has no systematic fix.

**Current Workaround:** QuickBooks generic email reminders (she thinks they're on, isn't sure). Manual calls when amounts get large enough to justify the discomfort.

**Success Vision:** After one large commercial invoice gets recovered automatically, Diane is a believer. She upgrades from $19/month to also use the Jobber integration when they switch FSM platforms.

**What she values:** It sends reminders before she has to; it escalates without her input; the "Pay Now" link gets her paid faster on the large jobs.

---

#### Persona 3: Tyler — The Growth-Minded Handyman (The Early Adopter)

**Context:**
Tyler is 29, runs a handyman business with 1 subcontractor. He does $15K–$25K/month in revenue, uses a mix of Jobber and manual invoicing, and is very active on r/sweatystartup and YouTube (Sweaty Startup, Handyman Business channels). He's the type to try new software before everyone else and post about it.

**Problem Experience:**
Tyler doesn't feel as much emotional awkwardness about follow-up as Marcus — he just doesn't have the time to do it systematically while he's on job sites 8 hours a day. He wants a systematic process and knows it would improve his business.

**Current Workaround:** Manually checks overdue invoices on weekends, sends one-off texts. Inconsistent.

**Success Vision:** Tyler becomes ChaseIt's first public testimonial. He posts on r/sweatystartup with specific dollar amounts recovered and drives the first 50 signups. He gets early access to the Jobber integration beta.

**What he values:** Automation, dashboard metrics, systematic process, ability to customize sequences. He'll actually read the settings.

---

### Secondary Users

**Bookkeepers / Office Managers (at 5–10 employee shops)**
In slightly larger trade businesses, an office manager or part-time bookkeeper handles AR. They are often on Jobber Connect or QuickBooks and may currently manually trigger reminders. ChaseIt becomes their "set and forget" AR layer on top of existing tools. They validate the tool with the owner; owner approves the subscription. Adoption is faster because they're already doing the workflow manually.

**Cleaning Company Owners / Landscapers / Pest Control Operators**
Adjacent personas with identical payment patterns. Same emotional barrier, same lack of standalone tooling, different trade context. v2 expansion segment — same product, updated templates and marketing angle. The r/sweatystartup community serves all of these.

---

### User Journey

**Discovery:**
- Reddit: r/sweatystartup, r/smallbusiness, r/plumbing, r/HVAC — peer recommendation thread or ChaseIt post with recovery story
- Facebook: "Sweaty Startup Community," "HVAC Business Owners Network," "Cleaning Business Owners"
- YouTube: Sweaty Startup channel, The Handyman Business ("how to get paid faster as a contractor")
- Google: "invoice follow-up software for contractors," "automated invoice reminders for HVAC"
- AppSumo listing with "$47K recovery story" pitch

**Onboarding:**
- Land on homepage → recovery calculator ("enter avg invoice count and amount → see estimated monthly loss")
- Sign up → connect Stripe OR upload CSV of overdue invoices
- Choose trade type → review pre-built message templates
- Set delay intervals (Day 7 / 14 / 30 default)
- First sequence fires within 24 hours of setup

**First Value Moment ("Aha!"):**
- Customer pays after receiving Day 7 SMS — often within hours of first reminder
- Dashboard shows first "$[amount] recovered" notification
- For many users, this happens within 72 hours of signup

**Core Usage:**
- Fully automated — user logs in once per week (or month) to check dashboard
- Adjusts templates or intervals when a customer calls about a reminder
- Sees cumulative "$ recovered this year" metric that grows passively

**Long-term:**
- ChaseIt becomes invisible infrastructure — "it just runs"
- Each new invoice cycle re-validates the tool without conscious thought
- Churn requires active effort to cancel; retention is structural, not behavioral

---

## Success Metrics

### User Success Metrics

The core outcome metric is money recovered. Users succeed when ChaseIt recovers invoices they would otherwise have written off or manually chased:

| Metric | Definition | Target |
|--------|-----------|--------|
| $ recovered per user/month | Total invoice payments collected where ChaseIt sent ≥1 reminder | $500 Month 1 → $1,500 Month 12 |
| Recovery rate | % of reminded invoices paid within 30 days of first reminder | >50% (multi-channel benchmark) |
| Time to first recovery | Days from signup to first payment received via ChaseIt | <7 days |
| Sequence completion without manual intervention | % of follow-up sequences completed without user override | >80% |
| "Pay Now" link utilization rate | % of payments made via embedded payment link vs. other methods | >60% |

**The "aha!" signal:** First payment received via ChaseIt-triggered reminder. This is the decisive retention event — users who reach this milestone churn at <5%.

### Business Objectives

**Month 1–3 (Validation)**
- Prove the tool recovers money in real-world use
- Build case studies with specific $ amounts for marketing
- Reach AppSumo listing requirements (working product, reviews)

**Month 3–6 (Growth)**
- Establish ChaseIt as the "invoice recovery tool for Jobber Core users" and "for contractors who aren't on Jobber"
- Reach profitability at SMS infrastructure costs (~$0.79/customer/month at typical usage)
- Build review base on G2/Capterra for SEO credibility

**Month 6–12 (Scale)**
- Reach $10K MRR (~500 paying customers)
- Add Jobber + QuickBooks integration to expand addressable market
- Establish SEO footprint for "invoice follow-up contractor" keyword cluster

### Key Performance Indicators

| KPI | Month 1 | Month 3 | Month 12 |
|-----|---------|---------|---------|
| Paying customers | 50 | 200 | 500 |
| MRR (excluding LTD) | $950 | $3,800 | $9,500 |
| AppSumo LTD units sold | 100 | — | — |
| G2/Capterra reviews | 10 | 30 | 100 |
| Average $ recovered per customer/month | $500 | $1,000 | $1,500 |
| Monthly customer churn | <10% | <7% | <5% |
| Recovery rate (% of reminded invoices paid) | >40% | >50% | >55% |
| Time to first recovery (median days) | <10 | <7 | <7 |
| NPS / "would recommend" rate | >60% | >70% | >75% |

**Leading indicators (predict success):**
- First recovery rate (within first 30 days of signup) — if >60% of new users recover an invoice in month 1, churn will be structurally low
- Template customization rate — users who edit templates are 2x more likely to stay (investment signal)
- Dashboard login frequency — weekly logins correlate with retention; monthly-only is a churn warning

---

## MVP Scope

### Core Features

The 2-week MVP must deliver exactly one outcome: an overdue invoice gets a reminder, the customer pays via a link, the tradesperson sees it in a dashboard. Everything else is post-MVP.

**1. Invoice Input**
- Stripe webhook trigger: auto-detect overdue invoices from Stripe (primary integration path)
- Manual invoice entry form: name, amount, due date, customer phone + email (for non-Stripe users)
- CSV upload: batch import of overdue invoices for Day 1 population

**2. Follow-Up Sequence Engine**
- 3-step sequence: Day 7 (friendly), Day 14 (firm), Day 30 (final notice)
- Configurable delay intervals (user can adjust from defaults)
- SMS delivery via Twilio (A2P 10DLC registered)
- Email delivery via SendGrid or Resend

**3. Contractor-Tone Templates**
- 4 pre-built template sets: Plumbing, HVAC, Handyman, Cleaning
- Editable by user (template variables: customer name, invoice amount, job description, pay link)
- Tone scale: Friendly (default) → Firm → Final Notice

**4. "Pay Now" Link**
- Stripe Payment Link embedded in every SMS and email
- One-tap payment from the customer's phone
- Auto-mark invoice as paid in ChaseIt dashboard on Stripe webhook receipt

**5. Dashboard**
- Outstanding invoices (amount, days overdue, sequence position)
- Total $ at risk
- $ recovered this month / this year
- Recovery rate (% of reminded invoices paid)
- Per-invoice activity log (sent/opened/paid)

**6. Account Setup**
- Business name, trade type selection
- Stripe connection (OAuth)
- Twilio-provisioned phone number (one-click A2P 10DLC registration flow)
- Customer opt-out handling (required for TCPA compliance)

### Out of Scope for MVP

The following are explicitly deferred to protect build timeline and avoid complexity creep:

- Jobber / HouseCall Pro / QuickBooks API integrations (v2 — adds 2–3 weeks of complexity)
- WhatsApp channel (v2 — regulatory and API complexity; SMS covers the gap for US market)
- SMS reply handling / routing to owner inbox (v2 — requires stateful conversation management)
- Partial payment acceptance (v2 — requires custom checkout flow)
- Lien notice templates / "send to collections" flow (v2 — legal review needed)
- AI-personalized message generation (v3)
- Invoice factoring / advance against outstanding invoices (v3)
- Multi-user / team accounts (v2 for 5–10 employee shops)
- Mobile app (web-first; mobile browser is sufficient for MVP)

**Why these are deferred:** All deferred features require 2–5x additional build time and introduce regulatory, integration, or UX complexity. The MVP can deliver meaningful ROI without any of them. The "one recovered invoice pays for the tool" pitch holds on SMS + email alone.

### MVP Success Criteria

The MVP is validated (and ready for v2 investment) when:

- 50 paying customers have used the tool for ≥30 days
- ≥60% of those customers have recovered at least one invoice via ChaseIt
- At least 10 G2/Capterra reviews with specific $ amounts recovered
- Monthly churn <10%
- AppSumo listing approved and ≥100 LTD units sold

**Go/no-go decision point:** If after 90 days <30% of users have recovered an invoice, the problem is with onboarding or sequence defaults — not product-market fit. Investigate before v2 investment.

### Future Vision

**v2 (Months 3–6): Integration Layer**
- Jobber webhook integration — auto-pull overdue invoices from Jobber Connect and Core (huge: targets core users who are gated from Jobber's native follow-up)
- QuickBooks Online sync — read-access to overdue invoices; one-click "start sequence" per invoice
- HouseCall Pro export import
- SMS reply routing — if customer replies with objection/dispute flag, owner gets notified
- Late fee calculator — add configurable late fee notice to Day 14 and Day 30 messages
- Recovery calculator on landing page — "enter your invoice count and average → see estimated monthly loss"
- Weekly email digest — summary of outstanding invoices and recent recoveries

**v2 (Months 3–6): Scope Expansion**
- Lien notice templates for contractors — formal escalation letter before small claims, for invoices >60 days
- "Send to collections" one-click flow for sub-$10K claims (referral to collections partner)
- Partial payment acceptance
- Cleaning / landscaping / pest control specific templates (adjacent markets)

**v3 (Months 6–18): Platform**
- AI-personalized follow-up messages (tone adaptation based on customer payment history)
- WhatsApp integration (international users; US users in regions with higher adoption)
- Predictive "likelihood to pay" scoring (based on customer history and invoice characteristics)
- Auto-receipt + Google review request on payment (closes the job-to-cash loop; valuable for trades SEO)
- Embedded invoice factoring (advance 90% of outstanding invoice; collect from customer)
- Team/multi-user accounts with AR manager role
- Public API for FSM platform integrations

**5-Year Acquisition Thesis:**
ChaseIt is a natural acquisition target for Jobber, HouseCall Pro, or ServiceTitan — any FSM player that wants to own the full "quote → invoice → collect → receipt" loop without building payment automation in-house. A 500–2,000 customer base with documented recovery ROI and strong community brand is a compelling asset for a strategic buyer at 5–8x ARR.

---

## Competitive Positioning & Go-to-Market

### Positioning Statement

**For trade business owners** (plumbers, HVAC techs, handymen, cleaners) **who are losing money on unpaid invoices**, ChaseIt is **the standalone invoice recovery tool** that **automatically follows up with trades-specific SMS and email sequences and a one-tap "Pay Now" link**, so they get paid without the awkward calls. Unlike Jobber Connect ($80/month) or Chaser ($95+/month), **ChaseIt works on top of any invoicing stack for $19/month**.

### Launch Sequence

1. **AppSumo launch** — lead with "$47K plumber recovery story"; target $59 LTD (50 invoices/month) and $79 LTD (unlimited); goal: 200 LTD customers in 2-week window → generates $12K–$16K launch revenue + testimonial base
2. **r/sweatystartup post** — genuine story-first post, not a product pitch; share recovery calculator; respond to every comment
3. **Facebook group seeding** — "Sweaty Startup Community," "HVAC Business Owners Network," "Cleaning Business Owners" — soft launch with beta invite
4. **SEO content** — "invoice follow-up software for contractors," "how to collect unpaid invoices as a plumber," "automated invoice reminders for HVAC"
5. **YouTube** — outreach to Sweaty Startup, The Handyman Business, HVAC Know It All for sponsored segment or organic review

### Pricing Architecture

| Plan | Price | Limits | Notes |
|------|-------|--------|-------|
| Starter | $15/month | Up to 20 active invoices | Solo operators |
| Pro | $19/month | Unlimited invoices | Primary plan; "one invoice pays for it" |
| AppSumo LTD Basic | $59 one-time | Up to 50 invoices/month | Launch acquisition |
| AppSumo LTD Pro | $79 one-time | Unlimited | Launch acquisition |

LTD is an acquisition channel, not a long-term business model. SMS costs require recurring billing; LTD users above a threshold (>100 invoices/month) will be offered a usage-based top-up or migrated to Pro on renewal.

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Jobber adds SMS follow-up to Core tier | Medium | High | Standalone positioning; works even for non-Jobber users; diversify integrations |
| SMS regulatory (TCPA / A2P 10DLC) | Medium | Medium | Register A2P 10DLC campaign before launch; implement opt-out; "payment reminder" is recognized legitimate use case |
| PayNudger adds SMS + trades positioning | Medium | Medium | Move fast; establish trades community brand before they pivot |
| Low recovery rates disappoint users | Low | High | Set realistic expectations (50–80% on reminded invoices, not 100%); show "$ recovered" metric; invest in default template quality |
| AppSumo margin compression | Low | Low | LTD is acquisition channel; transition to MRR; cap LTD usage at reasonable threshold |

---

**Product Brief Complete**
*Prepared: 2026-09-23 | Based on market research dated 2026-08-30 | Idea score: 98/105 (6 signal events)*

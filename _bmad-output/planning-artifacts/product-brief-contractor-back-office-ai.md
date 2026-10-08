---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/contractor-back-office-ai-agents.md
  - _bmad-output/planning-artifacts/research/market-research-contractor-back-office-ai.md
date: '2026-10-08'
author: Root
workflowType: product-brief
research_topic: contractor-back-office-ai
---

# Product Brief: Contractor Back-Office AI Agents

---

## Executive Summary

**ContractorAI** (working title) is an AI-powered back-office platform that replaces the solo contractor's office manager — autonomously generating proposals from voice or text notes, following up on unpaid invoices via SMS and email, and coordinating job scheduling — priced at $99/month against the $50,000/year office manager hire.

The core insight driving this product is deceptively simple: small contractors don't reject software because it's bad; they reject it because it *organizes* work instead of *doing* work. A solo electrician doesn't want another dashboard. They want something that auto-sends the proposal while they're still on the job site, follows up with the customer three days later if there's no response, and sends a payment reminder when an invoice ages past 14 days — all without the contractor touching a keyboard.

The market validation is exceptional. PLMBR charges $10,500–$25,000/year for AI back-office agents and targets mid-to-large contractors. Trayd raised $10M for construction back-office automation. YC's Summer 2026 cohort included 4+ startups in this space. Every funded player targets companies with $2M+ in revenue. The 770,000–919,000 solo contractors with $300K–$2M in annual revenue — the vast majority of US construction businesses — have no AI action agent available at sub-$100/month. This is the gap.

**Opportunity:** 2% penetration of 920,000 solo contractors at $99/month = **$21.8M ARR**. No dominant player exists at the target price point. The competitive window is 18–24 months before a well-funded entrant targets this segment directly.

**Evaluation Score:** 88/105 — Tier 1 (Strong Opportunity). Verdict: BUILD.

---

## Core Vision

### Problem Statement

Solo contractors ($300K–$2M in annual revenue) are trapped between two untenable options: (1) the owner does all administrative work themselves, typically after 10pm when the job site is done, or (2) they hire an office manager at $40,000–$65,000/year — a hire that makes no financial sense at their revenue level.

The "10pm admin" pattern is universal: proposals get written late, invoices are sent sporadically, follow-up calls are skipped because by 9pm the contractor just wants to stop working. The result is measurable financial leakage: slower proposal turnaround (lower close rates), delayed invoicing (cash flow problems), and unpaid invoices that get written off because following up on them feels awkward.

The existing software market has failed this customer segment in a specific, diagnosable way: every tool — Buildertrend ($499–$799/month), Jobber ($29–$229/month), Housecall Pro ($59–$299/month) — organizes information rather than taking action. Contractors purchase dashboards expecting them to *do the work*; reality is they *organize the work*. One Buildertrend review captures this precisely: "Field crews stopped using the app because it was too slow or too complicated." Another: "It is not designed for the Custom Home Builder, it is for a production Builder." The contractor doesn't want to manage a platform. They want the platform to manage their admin.

### Problem Impact

The administrative burden on solo contractors is not a minor inconvenience — it has direct financial consequences:

- **Proposal delays:** Each 2–4 hour proposal that gets written at 10pm represents a slower response time, lower close rate, and one more job where a competitor who responded same-day got the work
- **Invoice collection failures:** Contractors who avoid follow-up calls (because asking for money is uncomfortable) routinely accept 30–60 day payment delays and write off 5–15% of receivables annually — at $800K revenue, that's $40,000–$120,000 in uncollected work
- **No-shows and scheduling gaps:** Without automated reminders, 15–25% of scheduled jobs encounter friction (customer not home, wrong time, etc.) — each no-show costs 2–4 hours of lost billable time
- **Reputation leakage:** Every job that doesn't get a follow-up Google review request is a missed opportunity; contractors who systematically ask get 3–5× more reviews than those who rely on organic reviews

**Emotional impact:** The "I didn't become a contractor to do paperwork" frustration is not rhetorical. It drives burnout, creates ceiling on growth, and is the #1 reason sole proprietors stay sole proprietors rather than building $2M+ businesses.

### Why Existing Solutions Fall Short

**Enterprise AI agents (PLMBR, Arrakis):** Confirmed, validated AI action agents for contractors exist — but are priced at $10,500–$80,000+/year and require enterprise procurement, custom onboarding, and dedicated account management. They are not designed for a solo electrician who has 20 minutes to set up a new tool.

**Project management platforms (Buildertrend, CoConstruct, Procore):** $499–$80,000/year. Complex setup requiring hours of configuration before delivering value. Designed for production builders, not custom/solo contractors. Reviews consistently cite: "steep learning curve," "too much work to set up," "not intuitive." The fundamental architecture is data organization, not action automation.

**Field service management (Jobber, Housecall Pro):** $29–$299/month. Better UX and pricing, but rule-based automations only — no voice-to-proposal, no AI invoice follow-up, no autonomous agent that acts without user initiation. Jobber is excellent at helping a contractor *send* a proposal; it doesn't *generate* the proposal from a voice note while the contractor is on-site.

**AI estimating tools (Togal.AI, Rudus, FlowManual):** Focused on pre-construction estimation and takeoffs — not the ongoing customer-facing back office (proposals, invoicing, scheduling SMS). Adjacent but different problem.

**The structural gap:** No current tool at $49–$99/month delivers autonomous AI action agents that do the work without human initiation. This is not an incremental product improvement opportunity — it's an architectural shift from organizing-tools to doing-agents.

### Proposed Solution

ContractorAI is a three-agent autonomous back-office platform that does the work of an office manager for $99/month flat:

**Agent 1 — Proposal Agent:** Contractor texts or voice-notes the job scope ("replace panel, 200 amp service upgrade, estimated 6 hours labor") → AI generates a professional PDF proposal with line items, materials, and pricing → emails to the customer → follows up Day 3 if no response → records win/loss outcome. The contractor never touches a keyboard.

**Agent 2 — Invoice Follow-Up Agent:** Monitors connected QuickBooks account for invoices aging past 14 days → auto-sends payment reminder via SMS + email with embedded Stripe payment link → escalates tone at Day 21 ("We'd really like to get this resolved") → Day 28 final notice → reports monthly recovery rate and total collected. Contractor never has to make an awkward money call.

**Agent 3 — Scheduling SMS Agent:** When a job is confirmed, auto-texts the customer a Day-before reminder ("Reminder: [Company Name] arrives tomorrow at 9am") + Day-of ETA update → if contractor is running late, auto-notifies → sends post-job satisfaction check + Google review request. Zero no-shows, systematic review generation.

**Core architecture:** AI reads inputs (voice notes, QuickBooks data, job confirmations), generates professional outputs (PDFs, SMS messages, emails), and takes autonomous actions on behalf of the contractor. The contractor's only interaction is: connect QuickBooks, set their proposal template once, approve agent settings. After that, the agents run.

**Positioning frame:** "$99/month vs. $50,000/year" — not a software comparison, a hiring comparison. ContractorAI isn't competing with Jobber; it's competing with the decision to hire (or not hire) an office manager.

### Key Differentiators

1. **Autonomous action, not organized data** — the only tool at this price point that initiates actions (sends proposals, follows up on invoices, texts customers) without human trigger
2. **Voice/text-to-professional-output** — contractor narrates job scope on-site, AI generates professional PDF before they drive home; lowest possible input burden in a mobile-hostile workflow
3. **Priced against the salary, not against the software** — "$99/month vs. $50,000/year" framing is categorically different from comparing to Jobber at $99/month; it closes on ROI, not features
4. **Zero-setup ambition** — connect QuickBooks once, set one template, agents are live; no dashboards to learn, no configuration sessions, no onboarding calls required
5. **Contractor-specific language** — proposals, change orders, RFIs, line items with labor + materials; not generic business templates
6. **First-mover in the unoccupied position** — no competitor holds "AI action agents + solo contractor price point" simultaneously; 18–24 month window to build the category before incumbents respond

---

## Target Users

### Primary Users

#### Persona 1: Mike — Solo Electrical Sub ($450K revenue, 2 employees)

**Background:** Mike has been running his own electrical sub business for 11 years in the Tampa, FL area. He has one full-time apprentice and does residential service upgrades, panel replacements, and new construction rough-ins. He works 10–12 hours per day on job sites and then spends 1.5–2 hours at night on admin. His wife helps with QuickBooks on weekends.

**Current workflow:** Proposals are written in Word, using a template he made in 2019. He emails them from his phone. Invoices are in QuickBooks — he sends them when he remembers, often 1–2 weeks after job completion. He has 4–6 invoices aging past 30 days at any given time. He follows up by text when he remembers. He's written off $12,000 in the last 18 months because he didn't want to keep pushing.

**Pain:** "I'm not afraid of hard work. I just hate the paperwork. By the time I get home and eat, I have no energy to write up a proposal. I've lost jobs because the other guy got back to the customer the same day."

**Technology stance:** Has Jobber but stopped using it after 3 weeks. Uses QuickBooks because "the accountant made me." Will not learn a new platform with a dashboard and reports and settings. Will adopt a tool that texts him when it's done something on his behalf.

**Success moment:** First time the Proposal Agent auto-emails a proposal to a customer at 4pm while Mike is still at the job site. Customer replies "looks good, let's do it" by 5pm. Mike realizes he closed a job he didn't even type a word for.

**WTP:** $79–$99/month. $399–$499 AppSumo LTD.

---

#### Persona 2: Sarah — Solo GC ($1.2M revenue, 4 subcontractors)

**Background:** Sarah runs a custom residential remodeling business in Phoenix. She manages 4–6 active projects at a time, coordinating plumbing, electrical, and drywall subs. She has no employees — just herself and her subs. She tried hiring an office manager ($38K/year) who quit after 6 months. She's been solo admin since.

**Current workflow:** Proposals are her biggest time sink — a good residential remodel proposal takes 3–4 hours. She sends invoices at project milestones; follow-up is inconsistent. She's had 2 customers go quiet on final invoices in the last year ($8,500 total). Scheduling is managed via group text threads with her subs and customers — she regularly needs to send same-day reminders because subs forget.

**Pain:** "The admin is what keeps me from growing. Every time I think about hiring another sub and taking on more work, I realize I'd just drown in more paperwork. The proposal writing alone is killing me."

**Technology stance:** More tech-literate than Mike. Has tried Monday.com and Asana. Finds them good for project management but useless for customer-facing admin. Would pay for something that specifically handles proposals + invoicing automation.

**Success moment:** First month report shows the Invoice Follow-Up Agent recovered $6,200 in overdue payments that she'd mentally written off. She calculates that's 5 years of the $99/month subscription cost.

**WTP:** $99–$199/month. $599 AppSumo LTD.

---

#### Persona 3: Dave — HVAC Sub ($680K revenue, 2 technicians)

**Background:** Dave runs HVAC installations and service calls in the Dallas area. Peak season (summer and winter) means 8–12 calls/day across his 2 technicians. He has a wife who handles invoicing 2 days/week. Off-peak, she reduces to 1 day, and things pile up.

**Current workflow:** Uses Housecall Pro for scheduling but finds the proposal/estimate feature clunky. Big commercial jobs still get proposals in Word. His biggest pain is no-shows — 2–3 customers per week aren't home or don't answer the door. Each no-show is a $200–$400 wasted dispatch.

**Pain:** "The no-shows cost me real money. And the big commercial proposals — I hate writing them. I know what I want to charge but writing it up takes time I don't have."

**Technology stance:** Actively uses Housecall Pro (comfortable with field service tools). Would add a complementary tool for the pieces Housecall Pro doesn't handle well. Not looking to replace Housecall Pro, looking for an AI layer on top.

**Success moment:** Scheduling SMS Agent eliminates 80% of no-shows within the first month. Dave calculates 8 no-shows per month × $300 average = $2,400 recovered. The tool pays for itself 24× over.

**WTP:** $99/month. Would pay for scheduling + proposal combo. $449 AppSumo LTD.

---

### Secondary Users

**Contractors' Spouses/Part-Time Admin:** Many solo contractors have a spouse or family member who handles some admin (QuickBooks, invoicing). ContractorAI reduces or eliminates their workload. They are often the ones who research and purchase tools. Marketing directly to this persona ("help your spouse stop working weekends") is a viable angle.

**Growing Contractors (5–15 employees, $2M–$5M):** Not the primary target but a natural expansion segment once the product is proven. These contractors have often hired one office manager but need the AI layer to scale past that first hire. They become Phase 2 customers with a $199/month multi-user plan.

**Trade Association Administrators:** NRCA, PHCC, NECA chapter administrators who curate member software recommendations. Not product users, but key distribution channel influencers. A white-label or "Powered by ContractorAI" membership benefit is a Phase 2 channel play.

---

### User Journey

**Discovery:**
Mike sees a post in the "Contractor Business Owners" Facebook group: a fellow electrician shares a screenshot of a proposal his AI tool sent while he was on-site. Comments are overwhelmingly "what tool is this??" Mike clicks the link. Alternatively, Mike searches "how to automate contractor proposals" or "contractor invoice follow up software" on Google and finds ContractorAI via an SEO-optimized blog post.

**Landing Page Decision:**
Mike sees the headline: *"Your AI Office Manager — $99/month vs. $50,000/year."* He watches a 90-second demo video showing an iPhone voice note converting to a professional proposal email in 45 seconds. He recognizes his exact pain. He clicks "Start Free Trial."

**Onboarding (Day 1 — Target: Under 30 Minutes):**
1. Connect QuickBooks (OAuth, ~2 minutes)
2. Set up one proposal template: upload his Word template or choose from 10 trade-specific templates
3. Set invoicing rules: "Follow up after 14 days via SMS + email"
4. Add Stripe payment link (1-click integration)
5. Enter phone number for Scheduling SMS (Twilio-powered)
6. First test: ContractorAI sends a test proposal to Mike's own phone number. He sees it. He says "okay this is real."

**First Value Moment (Day 1–3):**
Mike sends his first real voice note while driving between jobs: "Quote for Johnson house — replace main panel 200 amp, 15 hours labor, materials roughly 800 in parts, want to make $3,200 total." Within 90 seconds, a professional PDF proposal is in the customer's inbox, Mike gets a copy. The customer replies that afternoon. Mike closes the job while still on his previous job.

**Core Usage (Ongoing):**
- Every proposal goes through the Proposal Agent (Mike stops writing in Word)
- Invoice Follow-Up Agent runs silently; Mike gets a weekly "here's what we collected this week" summary text
- Scheduling SMS Agent texts every confirmed customer Day-before and Day-of
- Mike opens the web dashboard 1–2x/week to review proposal win/loss rates and outstanding invoices

**Retention Signal (Month 1):**
ContractorAI sends Mike a monthly summary: 12 proposals sent (vs. 7 last month when he was doing it manually), 3 overdue invoices recovered ($4,200), 0 no-shows (vs. 4 last month). Mike screenshots this and posts it in the Facebook group.

**Long-Term (Month 6+):**
ContractorAI becomes invisible infrastructure — Mike doesn't think about admin anymore. It's built into his workflow the way QuickBooks is. Switching cost is high: re-training the proposal templates, losing the invoice history, explaining the new tool to customers who are used to receiving certain communications. Retention is structural.

---

## Success Metrics

### User Success Metrics

The defining measure of user success is: **does ContractorAI save the contractor meaningful time and recover real money?** Every metric traces back to this.

**Primary User Success Indicators:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Time to first autonomous proposal sent | < 30 minutes from signup | Onboarding funnel tracking |
| Proposals sent autonomously per user/month | ≥ 8 (vs. baseline ~5–7 manually) | Agent action logs |
| Invoice recovery rate (overdue > 14 days) | ≥ 60% collected within 30 days | QuickBooks sync + payment logs |
| No-show rate reduction | ≥ 70% reduction from baseline | Pre/post scheduling comparison |
| Average time saved per contractor/week | ≥ 3 hours (target 5 hours) | Onboarding survey + quarterly NPS |
| Contractor-reported monthly dollar value recovered | ≥ $500/month (invoice + efficiency) | In-app reporting module |

**"Aha!" Moment Definition:** User sends first autonomous proposal AND receives customer reply within 24 hours. This is the activation event that predicts retention. Target: ≥ 60% of trialing users hit this moment within Day 3.

**Retention Indicator:** User with ≥ 3 proposals sent in first 7 days has > 85% likelihood of converting to paid at trial end (based on comparable B2SMB SaaS benchmarks).

---

### Business Objectives

**12-Month Targets:**

| Objective | Target | Rationale |
|-----------|--------|-----------|
| MRR at Month 12 | $25,000 ($19,800 base + buffer) | ~250 paying customers × $99/month |
| AppSumo LTD launch revenue (Month 6) | $150,000–$300,000 | 375–750 LTDs at $399 average |
| Total users (trial + paid + LTD) | 600 | Validates market penetration |
| Paid churn rate | < 6%/month | Structural retention through workflow integration |
| NPS | ≥ 50 | Contractor word-of-mouth is the primary growth engine |

**Strategic Objectives:**
- Establish "AI back-office agents for solo contractors" as a recognized product category owned by ContractorAI
- Generate 20+ documented case studies with specific ROI data (hours saved, dollars recovered) before AppSumo launch
- Build contractor-specific proposal template library (50+ trade-specific templates) that serves as a product moat
- Achieve QuickBooks Marketplace listing within 12 months (pre-qualified buyer access)

---

### Key Performance Indicators

**Acquisition:**
- Trial signups per week: Target 15+ by Month 3 (organic + Reddit + Facebook)
- Trial-to-paid conversion rate: Target ≥ 25% (industry B2SMB average is 15–20%)
- CAC (blended): Target < $150; AppSumo channel effectively $0 CAC for LTD buyers
- LTD buyer-to-MRR converter rate (Month 12): Target ≥ 15% of LTD buyers upgrade to MRR for new features

**Activation (leading retention indicator):**
- Onboarding completion rate (QuickBooks connected + first template set): Target ≥ 70%
- Time-to-first-agent-action: Target < 30 minutes from signup
- "Aha!" moment achievement (autonomous proposal sent + customer reply): Target ≥ 60% of trials within Day 3

**Engagement:**
- Monthly active users / total paying users: Target ≥ 85% (users who have at least 1 agent action per month)
- Average agent actions per user per month: Target ≥ 15 (proposals + invoice follow-ups + scheduling messages)
- Weekly dashboard logins: Target 1.5+ per paid user (awareness without dependency)

**Revenue:**
- MRR growth rate: Target 15%+ month-over-month through Month 12
- LTV estimate at Month 12: Target ≥ $2,400/customer ($99 × 24 months average retention)
- LTV:CAC ratio: Target ≥ 5:1

**Market Signal:**
- Organic Reddit/Facebook mentions per month: Target 10+ by Month 6
- AppSumo rating: Target ≥ 4.5/5 at launch
- G2/Capterra reviews in first 90 days post-launch: Target 25+ reviews with ≥ 4.5/5 average

---

## MVP Scope

### Core Features

The MVP delivers three autonomous AI agents with a minimal management interface. Every feature decision is evaluated against: "Does this let the agent do the work without the contractor having to initiate it?"

**1. Proposal Agent (Week 1–4 priority)**

*Input handling:*
- Voice note transcription (iOS/Android share sheet or ContractorAI app)
- Text/SMS input to a dedicated ContractorAI phone number
- Basic web form input as fallback

*AI generation:*
- Structured JSON extraction from unstructured voice/text input (line items, materials, labor hours, total)
- Professional PDF proposal generation from trade-specific templates (10 templates at launch: electrical, HVAC, plumbing, general contracting, roofing, painting, landscaping, flooring, drywall, fencing)
- Pricing validation: if extracted price is outside typical range for the described work, flag for contractor review before sending

*Delivery:*
- Auto-email to customer with proposal PDF attached
- Contractor receives BCC copy
- Day 3 auto-follow-up if no customer reply (configurable)
- Win/loss recording: when contractor marks job as won/lost, feeds into proposal analytics

*Minimum required integrations:* Email (SendGrid), PDF generation (Puppeteer/WeasyPrint), basic customer record storage

---

**2. Invoice Follow-Up Agent (Week 3–6 priority)**

*Data source:*
- QuickBooks Online API integration (read invoices, customer contact info, payment status)
- Manual invoice entry fallback (CSV import) for non-QB users

*Agent logic:*
- Trigger: invoice status "unpaid" AND age > 14 days (configurable: 7/14/21 days)
- Action sequence:
  - Day 14: Friendly reminder via email + SMS ("Hi [Customer], just a reminder that invoice #[X] for $[Y] is due. Click here to pay: [Stripe link]")
  - Day 21: Firmer follow-up ("We'd appreciate your prompt attention to invoice #[X]")
  - Day 28: Final notice ("Please contact us to resolve invoice #[X] before we pursue other options")
- Stripe payment link embedded in every message (Stripe Connect integration)
- Auto-stops on payment detection via Stripe webhook or QB sync

*Reporting:* Weekly "what happened this week" SMS to contractor: "3 invoices followed up, 2 paid ($3,400), 1 pending"

*Minimum required integrations:* QuickBooks Online API, Twilio SMS, Stripe Connect, email (SendGrid)

---

**3. Scheduling SMS Agent (Week 5–8 priority)**

*Trigger:* Contractor confirms a job date/time (via ContractorAI web interface or SMS command to dedicated number)

*Automated sequence:*
- Day-before: "Hi [Customer Name], just a reminder that [Company Name] will arrive tomorrow between [Time Window]. Reply CONFIRM or call [Phone] to reschedule."
- Day-of (2 hours before): "We're on our way! Estimated arrival: [Time]. Reply to this number with any questions."
- Running late trigger (contractor sends "LATE [Customer Name] 30min" to agent): auto-notifies customer with revised ETA
- Post-job (24 hours after marked complete): "Thank you for choosing [Company Name]! How'd we do? [Survey link]. If you're happy, we'd love a Google review: [Direct review link]"

*Minimum required integrations:* Twilio SMS, Google My Business API (review link generation), basic job calendar

---

**4. Web Dashboard (Minimal — Week 4–8)**

The dashboard is NOT the product; the agents are the product. The dashboard is for oversight and configuration only.

*Scope:*
- View sent proposals (status: pending/won/lost), with timestamps
- View invoice follow-up log (what was sent, what was paid)
- View scheduling message log
- Set and edit proposal templates
- Configure agent rules (days-to-follow-up, tone of follow-up messages)
- QuickBooks connection status
- Monthly summary: proposals sent, invoices recovered, messages delivered

*Explicitly excluded from dashboard:* Project management views, Gantt charts, team management, time tracking, analytics beyond the above

---

**5. Onboarding Flow (Week 3–5)**

Zero-setup must be achievable in < 30 minutes:
1. Company info + trade type (drives template selection)
2. QuickBooks OAuth connection
3. Proposal template selection (choose from 10, customize in-browser)
4. Twilio phone number provisioning (automated, no manual setup)
5. Stripe Connect (optional at signup; required for invoice agent)
6. Send test proposal to own email
7. Done. Agents are live.

---

### Out of Scope for MVP

The following are explicitly deferred to maintain focus and keep build time to 8 weeks:

| Feature | Reason for Deferral |
|---------|---------------------|
| Change order generation | Requires contractor-specific domain knowledge to calibrate; deferred to Phase 2 after beta feedback |
| Job cost tracking (labor + materials per job) | QuickBooks integration scope expansion; Phase 2 |
| Subcontractor coordination (RFIs, scheduling subs) | Different buyer workflow from customer-facing admin; Phase 2 |
| AI phone receptionist (inbound call handling) | High integration complexity; separate product line in Year 2 |
| Payroll / HR / compliance | Trayd's territory; not a solo contractor pain point at MVP stage |
| Multi-user / team accounts | Solo contractor MVP; team features at $199/month in Month 9 |
| Mobile app (native iOS/Android) | Web-first MVP; PWA for mobile; native app in Phase 2 |
| Spanish-language support | High value, but scope risk; Phase 2 with validated template set |
| QuickBooks Desktop integration | QB Online first; Desktop users are declining; Phase 2 |
| Estimating / takeoff tools | Adjacent, not core; different buyer workflow |
| CRM features (lead tracking, pipeline) | Jobber/Housecall Pro territory; out of scope |

**Rationale:** The MVP hypothesis is narrow: *contractors will pay $99/month for AI agents that autonomously send proposals, follow up on invoices, and coordinate job scheduling.* Adding scope risks diluting the core hypothesis test and extending build time beyond the competitive window.

---

### MVP Success Criteria

The MVP is validated when:

1. **Product-Market Fit Signal:** ≥ 40% of surveyed users say they would be "very disappointed" if ContractorAI went away (Sean Ellis threshold)
2. **Activation:** ≥ 60% of trial users send at least one autonomous proposal within Day 3 of signup
3. **Retention:** < 6% monthly churn at Month 3 (30-day post-trial conversion)
4. **Financial:** 50 paying customers generating $4,950 MRR by Month 3 (proof of willingness to pay at scale, not just LTD one-time purchases)
5. **Word-of-mouth:** ≥ 3 unprompted mentions per week in Reddit/Facebook contractor groups
6. **AppSumo readiness:** ≥ 20 beta contractor case studies with documented ROI (hours saved + dollars recovered) for AppSumo listing

**Go / No-Go Decision Point (Month 3):** If activation < 40% or churn > 10%, pause AppSumo launch and investigate. Root cause is likely either: (a) proposal quality is not professional enough for contractors to trust sending, or (b) onboarding flow is blocking QuickBooks connection. Fix before scale.

---

### Future Vision

**Phase 2 (Months 9–18): Deepen the Action Layer**

- **Change order generation:** Contractor snaps a photo of an unexpected condition on-site + voice note ("homeowner has knob-and-tube behind the panel, extra $1,800 in labor") → AI generates formal change order for customer approval → auto-sends → records signed/declined
- **Job cost tracking:** AI reads material receipt photos + logged labor hours → generates per-job P&L → sends monthly "here's your actual margin by job type" summary → identifies which job types are most profitable
- **Subcontractor coordination:** Auto-send RFIs to subs, track responses, generate lien waiver requests at job close, automated sub payment reminders
- **Multi-user / team plan ($199/month):** Office manager or spouse can have view-only access; subs can receive job assignments via the platform
- **Spanish-language support:** 30%+ of US construction workers are Hispanic owner-operators; bilingual proposal templates and SMS are a meaningful differentiator

**Phase 3 (Years 2–3): Become the Contractor OS**

- **AI phone receptionist:** Misses ~35% of inbound calls; AI answers, qualifies the job, schedules callback or books site visit — feeds directly into Proposal Agent
- **Integrated financing:** "Offer customer financing" button in proposal; contractor gets paid faster; financing company pays commission
- **Insurance and compliance layer:** Certificate of insurance tracking, permit status monitoring, license renewal reminders
- **White-label / trade association distribution:** NRCA "powered by ContractorAI" member benefit; PHCC, NECA chapters; 50,000+ pre-qualified buyers through association distribution
- **Horizontal expansion:** Canada, Australia (English-speaking construction markets with similar contractor workflow)
- **Enterprise tier:** Contractors with $2M–$5M revenue outgrow solo plan; team coordination + payroll + subcontractor management at $299–$499/month

**Long-Term Category Vision (Year 3+):**

ContractorAI becomes the back-office operating system for independent tradespeople — the invisible infrastructure layer that handles all customer communication, financial follow-up, scheduling, compliance, and coordination. The contractor's only job is the trade craft. Everything else is handled.

The analogy: ContractorAI is to solo contractors what Shopify is to e-commerce merchants — it doesn't just automate a task, it makes a category of business viable for people who previously couldn't afford the infrastructure to run it professionally.

**Market Ceiling:** At 5% penetration of the 920,000-firm US solo contractor market: 46,000 customers × $99/month = **$54.6M ARR**. Expansion to Canada/Australia and the $2M–$5M tier doubles the addressable market.

---

## Competitive Positioning Summary

```
                    HIGH PRICE
                         │
         PLMBR ●         │    Procore ●
         $10K+/yr        │    $80K/yr
                         │
  ─────────────────────────────────────────────────────
  ORGANIZES WORK         │              DOES WORK
                         │
         Buildertrend ●  │    ● ContractorAI TARGET
         $499-799/mo     │      $99/mo + AI AGENTS
                         │
         Jobber/HCP ●    │
         $29-299/mo      │
                         │
                    LOW PRICE
```

No current player holds the "Does Work + Low Price" quadrant. This is the unclaimed position. ContractorAI's go-to-market is not competing on features against Jobber — it's claiming the quadrant that no incumbent occupies.

---

## Go-to-Market Summary

**Target launch sequence:**
1. **Months 1–3:** Recruit 10–20 HVAC or electrical subcontractors from Reddit/Facebook for unpaid beta. Goal: calibrate proposal templates, validate agent logic, generate case study data.
2. **Month 4–5:** Ship Proposal Agent MVP publicly. Demo in Facebook groups. First paying customers. Iterate on onboarding friction.
3. **Month 6:** AppSumo LTD launch at $399 (proposals + invoice AI, 500 agent credits/month). Target 500–1,500 LTD buyers = $200K–$600K launch revenue.
4. **Month 9:** MRR transition. New features (change orders, Phase 2) available on $99/month subscription only; LTD holders get legacy feature set.
5. **Month 12:** 250+ MRR customers. $25K+ MRR. Prep for trade association distribution deals.

**Pricing:**
- $99/month flat (unlimited contractors, 1 location, all 3 agents, 500 agent actions/month)
- $199/month (multi-location, team features, 2,000 agent actions/month)
- AppSumo LTD: $399 (1 location, proposals + invoice agents, 500 credits/lifetime month) / $599 (multi-location)
- Overage: $0.10/agent action above plan limit (prevents margin squeeze from heavy users)

**Primary acquisition channels:**
- Reddit organic: r/ContractorsUS, r/GeneralContractor, r/Electricians, r/Plumbing, r/HVAC — answer questions, demonstrate value, no cold pitching
- Facebook paid: "Contractor Business Owners" and "General Contractors Network" groups — video ad of AI sending proposal while contractor is on-site
- AppSumo launch (Month 6): "Replace your office manager" narrative
- Content SEO: "contractor proposal software," "automate contractor invoicing," "AI for construction business," "invoice follow-up automation contractor"
- Trade association newsletters: NRCA ($35/newsletter, 24K members), PHCC, NECA

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| YC S26 player pivots to solo contractor segment | 30% (12 months) | High | Move to AppSumo launch within 6 months; build domain knowledge moat with beta contractors |
| Jobber/Housecall Pro adds AI action agents | 40% (18 months) | Very High | Own voice-to-proposal UX (harder architectural change for rule-based platforms); build vertical depth in one trade |
| AI API margins negative at $99/month with heavy users | 60% without controls | High | Credit bundles (500 actions/month); $0.10 overage; usage analytics identify heavy users early |
| Contractor domain knowledge gap (bad proposal quality → churn) | High if launched without beta | Medium | 5–10 beta contractors in target trade validate templates before public launch |
| QuickBooks API access restrictions | Low | High | Read-only QB access is well-established; Stripe integration as backup for invoice tracking |

---

*Product Brief completed: 2026-10-08*
*Based on: Shortlisted idea (88/105, Tier 1), Market Research (2026-10-07)*
*Status: Ready for PRD phase*

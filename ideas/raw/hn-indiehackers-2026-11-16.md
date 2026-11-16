# HN & Indie Hackers Research — 2026-11-16

**Focus**: Boring-business SaaS for trades, local services, logistics, field service, and unglamorous industries.

---

## Prelay – Weather-Based Work Planning for Outdoor Contractors
- **Source**: https://news.ycombinator.com/item?id=50341158
- **Additional Links**: https://prelay.lwnn.news
- **Platform**: HN
- **Type**: Show HN (very recent, ~2 days ago at time of research)
- **Engagement**: 2 points, early
- **Revenue Data**: None disclosed — just launched
- **Boring Business Score**: 5/5
- **Target Industry**: Landscaping, roofing, outdoor trades (12 trades covered)
- **Core Value Prop**: Monitors contractor job schedules against weather conditions across 62 activity types; triggers early notifications to reschedule before the 6am cutoff (after which workers get paid even if they can't work). Saves owners from waking at 4am to manually check weather for each job site.
- **Gap/Opportunity**: No standalone product existed for multi-site weather-sensitive scheduling. Current solution is manually checking phone weather apps per site. No proactive decision-support layer. Question the founder is debating: raw data vs. actionable recommendation ("35% chance of rain" vs. "postpone this job").
- **Our Angle**: Build the "recommend action" layer they're debating — the AI recommendation engine that says "postpone Job X, proceed with Y, alert crew Z." Integrate with existing FSM tools (Jobber, ServiceTitan). Add crew notification automation (SMS dispatch).
- **LTD Potential**: 3/5 — recurring value is very high (daily use), but LTD could work as a lead-gen entry

---

## Crewbird – Field Service CRM with Google LSA Integration
- **Source**: https://news.ycombinator.com/item?id=50418273
- **Additional Links**: https://getcrewbird.com/, https://news.ycombinator.com/item?id=50417407 (Ask HN: What are you working on? Nov 2026 — full thread)
- **Platform**: HN
- **Type**: Ask HN (What are you working on? November 2026)
- **Engagement**: Very positive response in thread — multiple people expressing frustration with existing tools and CRM gaps
- **Revenue Data**: Dad's carpet cleaning company approaching 3x ROAS — early but strong signal
- **Boring Business Score**: 5/5
- **Target Industry**: Service businesses (carpet cleaning, home services) + Google Local Service Ads users
- **Core Value Prop**: FSM + CRM for service businesses with native Google LSA integration. Tracks every dollar to ad ROAS — something existing SaaS CRMs don't do. Old Windows desktop CRMs are dying (discontinued, one OS update away from breaking).
- **Gap/Opportunity**: The HN thread lit up with agreement — "the space between full blown ERP and an Excel spreadsheet is abysmal." Multiple commenters are actively building similar tools. Specific pain: Google LSA has terrible dashboard; no existing CRM has a good Google Ads API integration for small field service businesses. Desktop-era CRMs being discontinued is creating forced migration moment.
- **Our Angle**: Lean into the Google LSA + attribution angle hard — this is the wedge that existing tools miss. Add automated ROAS reporting, LSA lead tracking, and simple dispatch in one tool under $100/mo. Target the carpet/cleaning/HVAC niche first.
- **LTD Potential**: 4/5 — strong LTD case: one-time tool for ops + reporting, doesn't need to be subscription-first

---

## Pest Control Vertical SaaS — Validated $2M ARR Market
- **Source**: https://news.ycombinator.com/item?id=47509571
- **Additional Links**: https://news.ycombinator.com/item?id=47510598 (comment: "mine is running at $2M ARR"), https://www.page.ke/articles/i-built-a-100k-arr-saas-for-pest-control-companies-starter-story
- **Platform**: HN
- **Type**: Show HN (448 points, 182 comments — exceptional engagement for a boring-niche post)
- **Engagement**: 448 upvotes, 182 comments — one of the highest-engagement boring-business posts in recent months
- **Revenue Data**: Commenter confirmed $2M ARR pest control SaaS for years. DASHP (commission management for pest control sales teams) at $100K ARR.
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control (residential and commercial)
- **Core Value Prop**: Pest control operators are still running on legacy software or spreadsheets. High recurring revenue model (quarterly/monthly service plans), regulated industry with licensing barriers. The OP took an actual technician job to understand the market before building.
- **Gap/Opportunity**: Incumbent VSaaS is "decent, cheap, and ubiquitous" — but AI-native features are the opportunity: voice data entry for techs in the field, smart upsell prompts, maintenance plan automation (renewals, proration, grandfather pricing). Commission management and sales team performance tracking are separately underserved (DASHP = $100K ARR on that sub-problem alone).
- **Our Angle**: AI-native pest control ops tool — voice input for field techs, automated maintenance plan renewal queue, smart upsell triggers. Or narrow further: commission/payout SaaS specifically for pest control door-to-door sales teams (validated $100K ARR with DASHP).
- **LTD Potential**: 3/5 — LTD possible for the ops tool; harder for commission/recurring-payout tools

---

## Conkoa AI – Voice-First Team Communication for Construction
- **Source**: https://news.ycombinator.com/item?id=47325824
- **Additional Links**: https://conkoa.ai
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 4 points, positive comment from a prior builder who said "definitely still a need for this"
- **Revenue Data**: "Dozens of companies across the construction trades" using it — early revenue implied
- **Boring Business Score**: 5/5
- **Target Industry**: Construction trades (roofing, framing, HVAC install, etc.)
- **Core Value Prop**: Voice-first field communication that integrates into Procore and other systems. Foreman on a ladder says "three workers on Level 3 for eight hours" — it logs into the system automatically. Auto-translation between Spanish/English crew members and English-speaking PMs. No typing required.
- **Gap/Opportunity**: Slack doesn't work in the field — typing is impossible on a scaffold or roof. Existing integrations with Procore are keyboard-first. Multilingual construction crews are underserved by communication tools. The founder built a prior construction health/safety SaaS that was acquired in 2022 — domain credibility.
- **Our Angle**: Narrow to one specific trade (roofing or HVAC installation) and one specific workflow (timekeeping + daily reports) instead of full communications platform. Simpler wedge, easier to sell. Add offline support and Spanish-first UX.
- **LTD Potential**: 2/5 — this is a subscription play, not LTD-friendly

---

## WithoutMe – SOP Tool for Local Service Businesses
- **Source**: https://www.indiehackers.com/Mc_MCTools
- **Additional Links**: None listed
- **Platform**: Indie Hackers
- **Type**: Product page / milestone posts
- **Engagement**: Active builder, shipping regularly
- **Revenue Data**: $39/mo Pro, early stage — no MRR disclosed; also building ConTechFinder directory ($119 one-time, first paid customer April 2026)
- **Boring Business Score**: 4/5
- **Target Industry**: HVAC, plumbing, cleaning companies (10–30 employees)
- **Core Value Prop**: Write SOPs once, share via link with crew, track who's following them. No signup required, no per-seat fees. Designed for field crews who can't be expected to log into enterprise software.
- **Gap/Opportunity**: Most SOP tools (Notion, Trainual, Process Street) require crew members to create accounts and navigate software — a non-starter for field workers. The "share by link, no signup" approach removes friction. 10–30 employee sweet spot avoids enterprise and freelancer extremes.
- **Our Angle**: Build the "field-crew onboarding and compliance" layer: SOPs + photo evidence of task completion + manager confirmation. Add WhatsApp/SMS delivery of SOPs (no app needed). Charge per business, not per seat.
- **LTD Potential**: 5/5 — perfect LTD: one-time setup, ongoing value, $59–$100 is very defensible

---

## BlastoClean – Quoting and Scheduling for Cleaning Companies
- **Source**: https://www.indiehackers.com/product/blastoclean
- **Additional Links**: https://www.blastoclean.com
- **Platform**: Indie Hackers
- **Type**: Product launch (Oct 1, 2026 — very recent)
- **Engagement**: Just launched, $0 revenue, looking for 10 cleaning business owners
- **Revenue Data**: $0, day 0
- **Boring Business Score**: 4/5
- **Target Industry**: Cleaning companies
- **Core Value Prop**: Price every job from your own task times and hourly rate instead of guessing — no more "just pick a number" quoting. Scheduling, invoicing, and payments in the same place.
- **Gap/Opportunity**: Cleaning company quoting is typically done via old Word docs or by feel. No tool calculates quotes from actual task time + rate. Founder's insight: build from real unit economics, not arbitrary pricing. Early stage = opportunity to either compete or learn what's missing.
- **Our Angle**: Expand the "task-time quoting" engine to include crew capacity planning — how many jobs can you take this week given your team size? Add automated Google review requests post-job. This gets closer to ZenMaid ($3M/yr) territory.
- **LTD Potential**: 4/5

---

## CraftBoop – Automated Follow-Up Sequences for Service Businesses
- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Launch post (April 2026)
- **Engagement**: Small but positive response
- **Revenue Data**: $29/mo, early users — no MRR disclosed
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, HVAC, cleaners, painters, landscapers
- **Core Value Prop**: After each job, sends a 5-email automated sequence: thank you → Google review request → check-in → rebooking reminder → referral request. Addresses the well-documented failure of service businesses to follow up consistently.
- **Gap/Opportunity**: Problem is very real and well-validated. $29/mo is on the low end. Opportunity: integrate directly with FSM tools (Jobber, Housecall Pro) to trigger sequences automatically without manual customer entry. Add SMS alongside email (tradespeople respond to SMS better).
- **Our Angle**: Build the SMS-native version with FSM integration. Automate from job completion trigger, not manual entry. Price at $49–$79/mo or offer as a module inside a broader FSM tool.
- **LTD Potential**: 5/5 — extremely LTD-friendly, set-and-forget automation

---

## ZenMaid – Maid Service Scheduling SaaS ($3M/yr Validated)
- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: https://podtail.com/no/podcast/indie-bites-1/building-a-200k-mrr-bootstrapped-maid-software-for/
- **Platform**: Indie Hackers
- **Type**: Interview / milestone post
- **Engagement**: High — featured interview
- **Revenue Data**: $3M/yr ($250K MRR at time of recent podcast) — bootstrapped since 2013
- **Boring Business Score**: 5/5
- **Target Industry**: Maid/cleaning services
- **Core Value Prop**: Scheduling software built specifically for maid service companies. Survived 2020 COVID drop (lost 40% of revenue) and recovered. 11-year bootstrapped business.
- **Gap/Opportunity**: ZenMaid proves the cleaning software market is real and large. It's been around since 2013 though — the AI opportunity: auto-scheduling optimization, automatic Google review requests, predictive churn (which customers haven't rebooked in 6 weeks?). ZenMaid is likely not AI-native.
- **Our Angle**: Build the AI layer on top of or as an alternative to ZenMaid. Focus on solo/small maid businesses (1–5 cleaners) with ultra-simple UX and AI-powered customer win-back sequences.
- **LTD Potential**: 3/5 — ZenMaid is proof of subscription-first, but LTD could capture small operators

---

## InstaBid Solo – Instant-Quote Wizard for Service Contractors
- **Source**: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ
- **Additional Links**: https://getinstabid.app
- **Platform**: Indie Hackers
- **Type**: Launch post (July 2026)
- **Engagement**: Active discussion
- **Revenue Data**: Not disclosed, early
- **Boring Business Score**: 4/5
- **Target Industry**: Pressure washing, home services, service contractors
- **Core Value Prop**: Website embed that generates an instant price estimate in <60 seconds. Captures partial leads (people who bail mid-form). Multi-tenant, white-labeled. Funnel analytics showing where leads drop off and what price ranges close best.
- **Gap/Opportunity**: Generic contact forms lose leads — the problem is real and widely validated. Opportunity: integrate with Google My Business (book directly from search result, as Avenue does in AU). Add follow-up automation triggered from abandoned quotes.
- **Our Angle**: Combine instant-quote widget + Google Reservations integration + automated SMS follow-up for abandoned quotes. The "abandoned quote recovery" angle is unique — no one is doing this well.
- **LTD Potential**: 4/5

---

## Avenue – Website Widget for Tradespeople ($50K+/mo AUD Validated)
- **Source**: https://www.startupfinder.co/posts/how-to-build-a-50kmonth-app-in-a-boring-niche-mr4y
- **Additional Links**: https://xitter.cf/starter_story/status/2112958627699192046
- **Platform**: Indie Hackers / Starter Story
- **Type**: Interview / success story
- **Engagement**: High (featured, widely shared)
- **Revenue Data**: A$63,108 MRR (Aug 2026) = ~$42K USD MRR. Grew from A$597 MRR in Aug 2025 — 100x growth in 12 months.
- **Boring Business Score**: 5/5
- **Target Industry**: Electricians, plumbers, mechanics (tradespeople)
- **Core Value Prop**: Website embed that presents services visually and captures bookings/leads automatically even when the tradesperson is unavailable. Integrates with Google Reservations and Google My Business — customers can book from Google search without calling.
- **Gap/Opportunity**: Avenue proves the "booking widget for tradespeople" market is massive and fast-growing. The Google My Business integration is the killer differentiator — capturing leads from search directly. Gap: they appear to be in Australia, so US/UK market may be wide open for a competitor.
- **Our Angle**: Clone the Avenue model for US market. Add AI-powered job description intake (customer describes problem in plain text, system categorizes and routes appropriately). Focus on the Google Local Services Ads + GBP integration angle specifically.
- **LTD Potential**: 3/5 — recurring value is very high (every booking is valuable), but LTD entry offer could work

---

## JobNook – Simple Business Tool for Trade Contractors
- **Source**: https://www.indiehackers.com/product/jobnook
- **Additional Links**: None
- **Platform**: Indie Hackers
- **Type**: Product / beta launch (Aug–Sep 2026)
- **Engagement**: Got real electrician beta tester feedback, shipping rapidly
- **Revenue Data**: $19.99 Starter / $49 Pro — early beta
- **Boring Business Score**: 4/5
- **Target Industry**: Independent electricians, plumbers, HVAC contractors
- **Core Value Prop**: Lightweight app for independent contractors to manage customers, jobs, quotes, invoices, and get paid online. No complicated field-service platform required. Genuinely free tier. Separation of labor vs. materials for tax purposes (discovered from real electrician feedback).
- **Gap/Opportunity**: The "simple vs. feature-rich" positioning is validated — Jobber and Housecall Pro are overwhelming for 1-person shops. Key insight: tax-compliant labor/materials separation is a real differentiator not found in cheaper tools.
- **Our Angle**: Double down on the tax compliance + accountant integration angle. Build the "your accountant will love this" positioning — auto-categorized labor vs. materials, VAT/GST aware, one-click export for bookkeeper. This is a moat that Jobber doesn't focus on for small operators.
- **LTD Potential**: 5/5 — perfect LTD product

---

## Clawbolt – AI Assistant for Contractors (Mozilla.ai Open Source)
- **Source**: https://news.ycombinator.com/item?id=47545485
- **Additional Links**: https://github.com/mozilla-ai/clawbolt
- **Platform**: HN
- **Type**: Show HN / Ask HN response
- **Engagement**: Active discussion, multiple UK contractors and trade-adjacent people responding
- **Revenue Data**: None — open source
- **Boring Business Score**: 4/5
- **Target Industry**: General contractors, tradespeople
- **Core Value Prop**: AI assistant living inside messaging apps (WhatsApp, Slack) that connects to QuickBooks and Google Calendar. Proactively follows up on unpaid invoices, flags material cost changes — not just reactive to questions. Open source core.
- **Gap/Opportunity**: Contractors don't use desktop tools — they're on the phone between jobs. An assistant that lives in WhatsApp and handles invoice follow-up proactively is a genuinely new UX paradigm. Open source = opportunity to build a commercial version with better integrations and support.
- **Our Angle**: Build a WhatsApp-first invoice and job management assistant for tradespeople. No desktop app, no login. Send a WhatsApp message → assistant logs the job, creates invoice, follows up with customer 7 days later. Charge per business per month.
- **LTD Potential**: 4/5

---

## Maintenance Calibration Tracker for ISO 9001 Manufacturing
- **Source**: https://news.ycombinator.com/item?id=43528978 (Ask HN: What are you working on? March 2025)
- **Additional Links**: https://pmcal.net
- **Platform**: HN
- **Type**: Ask HN — What are you working on
- **Engagement**: Several positive comments, engineers from manufacturing expressing interest
- **Revenue Data**: "A few manufacturing companies using it and love it" — small but real
- **Boring Business Score**: 5/5
- **Target Industry**: Manufacturing, ISO 9001 compliance teams
- **Core Value Prop**: Tracks preventive maintenance schedules and equipment calibration dates. Sends email reminders. Solves the ISO 9001 audit question: "can you prove your equipment was calibrated on time?" Simple, clean — not a full CMMS.
- **Gap/Opportunity**: ISO 9001 auditors explicitly ask about calibration tracking — the need is regulatory, not optional. Existing CMMS tools are overbuilt. The founder is hitting a wall with distribution (can't reach auditors). But auditors themselves are the ideal channel — they recommend tools to dozens of clients.
- **Our Angle**: Build an "ISO 9001 audit-ready" calibration + preventive maintenance tracker. Market directly to ISO consultants and auditors (they advise hundreds of small manufacturers). Add automatic certificate generation and audit-trail export. Price at $49–$99/mo per facility.
- **LTD Potential**: 4/5 — compliance tools are very LTD-friendly

---

## Safety-Critical Industrial Maintenance Guided Troubleshooting
- **Source**: https://news.ycombinator.com/item?id=46658491
- **Additional Links**: None
- **Platform**: HN
- **Type**: Co-founder seeking (Ask HN)
- **Engagement**: Small but the problem description is unusually specific and credible
- **Revenue Data**: None — seeking co-founder
- **Boring Business Score**: 5/5
- **Target Industry**: Industrial maintenance, factories, facilities management
- **Core Value Prop**: Step-by-step guided troubleshooting system that enforces lockout/tagout and safety gates. Hard-blocks unsafe steps unless supervisor approves. Captures what was tried and what actually fixed the problem — eliminates tribal knowledge loss. This is not a CMMS — it's a work-execution system for the moment a machine is down.
- **Gap/Opportunity**: CMMS tools track assets and schedules but don't guide the actual repair process. Junior techs thrown at complex equipment without guidance = safety incidents and slow repairs. The "safety gate" idea (supervisor must unlock certain steps) is a genuinely novel compliance feature. No incumbent owns this workflow.
- **Our Angle**: Build the MVP: machine asset profile → fault reported → AI-guided step-by-step diagnosis with LOTO enforcement → resolution logged → knowledge base updated. Sell to manufacturers on the safety/compliance angle (insurance and audit motivation).
- **LTD Potential**: 3/5 — compliance need suggests recurring, but LTD possible at facility level

---

## Gardener Agentic CRM (AI-Powered NanoClaw/MCP Workflow)
- **Source**: https://news.ycombinator.com/item?id=47784724
- **Additional Links**: https://github.com/mjsweet/intake-api
- **Platform**: HN
- **Type**: Comment in Ask HN: Who is using OpenClaw?
- **Engagement**: Well-upvoted comment, multiple follow-up replies
- **Revenue Data**: Individual tradesperson using this personally — not a product yet
- **Boring Business Score**: 4/5
- **Target Industry**: Solo maintenance gardeners, landscapers, any solo-tradesperson
- **Core Value Prop**: A professional maintenance gardener built a personal AI workflow using Claude Code + MCPs that: watches Gmail for work orders → schedules them → analyzes job photos → generates 14–32 page PDF proposals → creates Xero invoices. All via voice/chat in Telegram between jobs. "Freed up my home life to spend more time with my children."
- **Gap/Opportunity**: This is the most compelling "unmet need" signal — a solo tradesperson built a 500+ line custom AI workflow because nothing commercially available did this. The workflow is: quote intake → photo analysis → professional proposal → invoice → job completion. No commercial product combines these steps for sub-5-person trade businesses.
- **Our Angle**: Package this workflow as a consumer product for solo tradespeople: submit job photos + description via WhatsApp/SMS → AI generates a professional branded quote PDF → customer accepts → invoice auto-created → reminder sent at 30/60 days. Under $50/mo, mobile-first.
- **LTD Potential**: 5/5 — perfect LTD: one-time setup, generates ongoing value

---

## Key Market Signals Summary (2026-11-16)

**Strongest validated opportunities by revenue evidence:**
1. Maid/cleaning scheduling SaaS — ZenMaid at $3M/yr, strong market
2. Tradespeople website booking widget — Avenue at $50K+/mo AUD, 100x growth in 12 months
3. Pest control vertical SaaS — $2M ARR confirmed by commenter; $100K ARR for sub-niche (commission management)
4. HVAC SaaS — Breezy $250K ARR in 9 months (Silas Reinagel case study)

**Hottest emerging signals (2026 activity):**
- Google LSA + FSM CRM integration gap (multiple HN Nov 2026 thread mentions)
- Voice-first / WhatsApp-first tools for field workers (Clawbolt, solo gardener workflow)
- SOP tools for field crews (WithoutMe)
- Weather-triggered scheduling for outdoor contractors (Prelay)
- Quote-to-invoice for solo tradespeople via mobile/WhatsApp

**Structural insight from HN Nov 2026 thread:**
The HN "What are you working on?" thread had multiple independent people building FSM/CRM for service businesses simultaneously — suggesting the market pull is very real right now. The specific gap: existing tools are either too expensive/complex (ServiceTitan, Jobber) or too generic (HubSpot, spreadsheets). The "middle ground" for 1–10 person service businesses with Google Ads integration is wide open.

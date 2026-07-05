---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/home-inspector-crm.md
  - _bmad-output/planning-artifacts/market-research-home-inspector-crm.md
workflowType: product-brief
lastStep: 5
project_name: home-inspector-crm
research_type: product-brief
user_name: Root
date: 2026-07-05
---

# Product Brief: Home Inspector CRM & Agent Referral Manager

## Executive Summary

Home inspectors in the US operate almost entirely on real estate agent referrals — yet no tool helps them systematically manage, nurture, or grow those relationships. **InspectorReach** is a lightweight, Spectora-integrated agent relationship manager that gives home inspectors a real-time view of which agents are sending them business, automated post-inspection thank-yous, and pre-built monthly nurture emails — all at $29/month, a fraction of what Spectora Advanced charges.

The market has validated this pain: Spectora dominates with 10,000+ inspector users but explicitly lacks CRM capabilities; InspectorData entered the space at $79/month but requires a full platform switch. InspectorReach fills the gap by plugging into Spectora as an affordable add-on layer — the agent relationship manager that Spectora users actually need without giving up the report-writing platform they already trust.

**The core ROI story is simple:** one additional agent referral per month ($400–$500 inspection fee) pays for over a year of the product. Inspectors who understand this will not churn.

---

## Core Vision

### Problem Statement

Home inspection is a referral-driven business. Eighty percent or more of an inspector's work comes from real estate agents who trust them enough to recommend them to buyers. One loyal agent generates 20–30 inspections per year — $8,000–$13,500 in revenue from a single relationship. Yet the average home inspector has no systematic process for tracking which agents send the most referrals, identifying relationships that are going cold, or staying top-of-mind with the agents they most need to cultivate.

The result: inspectors lose revenue not because the market is small, but because they can't see which relationships are growing, which are fading, and when to reach out. They track agents in spreadsheets, sticky notes, or memory — and inevitably drop the ball on follow-up with the agents who matter most.

### Problem Impact

- **Revenue leakage**: An inspector with 3 loyal agents who quietly loses one agent relationship (no referral in 90 days) may not notice for months — losing $8,000–$13,500 in annual revenue without any signal.
- **No attribution**: Inspectors cannot calculate the revenue value of each agent relationship. This means they cannot prioritize time or thank-you effort correctly.
- **Missed cultivation**: Without a drip campaign or systematic follow-up, inspectors who want new agent relationships have no scalable way to build them beyond ad-hoc networking.
- **Time cost**: Manual tracking in spreadsheets takes hours per week; many inspectors simply stop doing it and fly blind.

**Emotional impact:** Inspectors feel the loss of control — they know their business is driven by relationships but feel helpless to actively manage them. The good inspectors know they should be doing more; they just don't have the infrastructure.

### Why Existing Solutions Fall Short

**Spectora ($109/month base + $4/inspection Advanced):** The market-dominant platform (10,000+ users) focuses on report writing, scheduling, and client-facing workflows. Their "Advanced" add-on includes basic agent profile tracking, but at 300 inspections/year it costs $1,200/year on top of the $109/month base. Capterra reviews explicitly cite "no CRM to view clients and see who I've sent emails to." No pre-built agent drip campaigns. No "going cold" alerts. No revenue attribution by agent.

**InspectorData ($79/month):** The most direct competitor — built a full-featured agent referral CRM and packaged it inside an all-in-one inspection platform. The problem: Spectora's 10,000 users have high switching costs (report templates, client history, agent data). Most won't switch platforms to get a CRM. InspectorData is building for new inspectors; we're building for Spectora's installed base.

**Generic CRMs (HubSpot, Pipedrive, Less Annoying CRM):** $15–$25/month but require manual inspector-specific setup; no awareness of "inspection completed" trigger events; cannot auto-populate referral data from Spectora; no pre-built inspector-to-agent templates. Setup friction kills adoption.

**The gap that remains:** No product currently integrates with Spectora to add agent relationship management as a standalone overlay for the inspector who doesn't want to leave Spectora.

### Proposed Solution

**InspectorReach** is a Spectora-connected agent relationship manager and nurture automation tool for home inspectors. It:

1. **Connects to Spectora** via webhook or CSV import to automatically pull completed inspection data and populate agent referral counts, dates, and revenue attribution.
2. **Shows inspectors their relationship health** — a dashboard and weekly digest email showing top agents, referral trends, and agents who haven't sent business in 60 or 90 days.
3. **Automates post-inspection outreach** — after each completed inspection syncs from Spectora, automatically sends a personalized thank-you email to the referring agent.
4. **Provides pre-built agent nurture campaigns** — a library of 6–12 inspector-specific monthly email templates (seasonal tips, market updates, new service announcements) that inspectors send to their agent list with one click.
5. **Delivers a monthly digest to the inspector** — showing top agents, revenue attributed to referrals, agents going cold, and relationship score changes.

The product installs alongside Spectora, not instead of it. Setup time: under 30 minutes (connect Spectora + import agent contacts).

### Key Differentiators

1. **Spectora integration as the moat**: The only product that plugs into Spectora's workflow as an add-on layer without requiring a platform switch. This is the architectural decision that unlocks Spectora's 10,000-user installed base.

2. **Pre-built inspection-aware templates**: Unlike generic CRMs, InspectorReach ships with email templates written specifically for home inspector–to–real estate agent communication (post-inspection thank-you, seasonal home maintenance tips, "I now offer radon testing" announcements). Zero copywriting required.

3. **"Going cold" intelligence**: Context-aware alerts — "Agent Sarah used to send 3 inspections/month; she hasn't sent one in 75 days" — that general-purpose CRMs cannot generate because they don't understand the inspection workflow.

4. **Revenue attribution per agent**: Inspectors can see, for the first time, exactly how much gross revenue each agent relationship is worth. This changes how they prioritize their time and relationship investments.

5. **Price-to-value clarity**: $29/month = one additional referral pays for 14 months. This ROI story is simple, concrete, and resonates immediately in inspector communities.

---

## Target Users

### Primary Users

**The Growth-Mode Inspector — "Marcus"**

Marcus is 38 years old and has been a home inspector for 6 years. He runs a solo operation in a mid-sized metro area, completing 280–350 inspections per year at $425 average, putting him at $120K–$150K gross revenue. He uses Spectora for report writing and client delivery — and loves it. He's not switching.

Marcus knows his business lives and dies by his agent relationships. He has maybe 8–10 agents who send him consistent work, another 10–15 who send occasional referrals, and he's constantly aware (but vague) that some relationships are fading. He tracks them inconsistently in a Google Sheet that he updates maybe monthly. He sends thank-you emails manually when he remembers — which isn't often enough.

His goal is to grow from 300 to 400+ inspections per year without spending on Google Ads. He knows the path is agent cultivation, not advertising. He just doesn't have the system.

**What Marcus needs from InspectorReach:**
- See his top 10 agents ranked by revenue sent this year vs. last year
- A weekly email telling him which agents are slipping and need attention
- Automatic thank-you emails to agents after every inspection (he doesn't want to think about it)
- One-click monthly newsletter to his entire agent list that doesn't require him to write anything

**The New Inspector — "Priya"**

Priya is 31 and completed her home inspection certification 14 months ago. She's doing about 120 inspections per year and is still establishing her agent network. She has 3–4 agents who send her semi-regular work; she needs 3–4 more to reach a sustainable volume.

Priya's biggest challenge is staying top-of-mind with agents she's met but hasn't converted to regular referrers. She knows she should be "nurturing" these relationships but has no system and no templates — she's not a marketer.

**What Priya needs from InspectorReach:**
- A structured way to track all agents she's met (not just ones who've sent referrals)
- Pre-written monthly email templates so she looks professional without being a copywriter
- Visibility into which "prospect agents" she should be following up with

**Inspection Firm Owner — "Tom"**

Tom owns a 3-inspector firm and manages the business development side. He needs to see referral performance across all three inspectors — which agents are tied to which inspector, and total firm-level agent relationships.

Tom is the most likely buyer for the team license, as agent relationship data is a business asset he needs visibility into regardless of which inspector did the work.

**What Tom needs:**
- Multi-seat access with firm-level agent referral view
- Revenue attribution across the team
- Ability to see relationship health without logging in as each inspector individually

### Secondary Users

**Real Estate Agents (indirect):** Agents are the recipients of the automated thank-you emails and monthly newsletters. They're not users of the product but are the direct beneficiaries of the inspector's more systematic outreach. A better experience for the agent reinforces the referral relationship. Agent satisfaction with inspector communication is a proxy metric for whether InspectorReach is working.

**Spectora (integration partner):** Spectora is both a platform dependency and a potential distribution partner. If Spectora is willing to feature InspectorReach in their marketplace or newsletter as a recommended add-on, it unlocks the single most efficient distribution channel — reaching Spectora's entire user base with an endorsed recommendation.

### User Journey

**Discovery:**
Marcus hears about InspectorReach in the InterNACHI forum or "Home Inspection Business Owners" Facebook group — a peer saying "I set this up and now I know exactly which agents are going cold before I lose them." He visits the site, reads the "one extra referral pays for a year" framing, and signs up for a 30-day free trial.

**Onboarding (Day 1 — target: under 30 minutes):**
1. Connect Spectora account via webhook or export 3 months of inspection history as CSV
2. InspectorReach imports completed inspections and populates agent referral counts automatically
3. Marcus uploads or manually adds 15 agent contacts not yet in the system
4. He sees his first agent leaderboard: "These 8 agents sent you $42,000 in referrals last year"
5. He sees the alert: "3 agents haven't sent a referral in 90+ days"
6. He sets up the post-inspection auto-thank-you email (2-minute setup using the pre-built template)

**Aha Moment (Day 2–7):**
Marcus completes an inspection on Day 3. The next morning, without any action from him, the referring agent received a personalized thank-you email. Marcus sees in his dashboard that the email was delivered and opened. He didn't have to remember to send it. That's the "aha" — he realizes the system is working for him passively.

**Core Usage (Weekly):**
Every Monday morning, Marcus gets a "Relationship Health Digest" email:
- Top 5 agents this week
- 2 agents flagged as "going cold" (no referral in 75+ days)
- Next month's newsletter draft ready for review and one-click send

**Long-Term (Monthly):**
Marcus reviews the annual summary: his agent referral revenue grew 22% from the prior year. He can see exactly which agents moved up in the rankings. He renews at $29/month without hesitation — the ROI is clear in his dashboard.

**Priya's Journey:**
Priya discovers InspectorReach through AppSumo's LTD launch ($79 one-time). She pays immediately — "If I get one more agent relationship from this, it's paid for forever." She sets up her prospect agent tracking list (12 agents she's met but who haven't sent work yet). Three months later, 2 of them have started sending referrals after receiving her monthly newsletter.

---

## Success Metrics

### User Success Metrics

**Primary indicator — "Referral Revenue Growth":**
The clearest signal that InspectorReach is working is that users experience measurable growth in agent-referred inspection volume within 90 days of adopting the product. Target: users who connect Spectora and activate the auto-thank-you flow see a 15%+ increase in agent referral frequency within 6 months.

**Engagement indicators:**
- **Weekly digest open rate**: Target 55%+ (meaningful given the very narrow professional audience; above-average for B2B email is 35–40%)
- **Monthly newsletter send rate**: Target 70%+ of active users send at least one monthly newsletter to their agent list within the first 60 days
- **Dashboard logins**: Target 3+ sessions per week for active users (inspectors checking their agent leaderboard)
- **Post-inspection auto-thank-you activation**: Target 85%+ of paying subscribers activate the auto-thank-you flow within first 7 days

**Retention indicator:**
- **Month 3 retention**: Target 75%+ (core product value should be visible by end of month 1; if inspectors stay through month 3 they are almost certainly retaining long-term)
- **Churn reasons tracked**: Systematic exit survey to catch early warning signals

**User satisfaction:**
- **NPS target**: 50+ (promoters in niche B2B communities drive the majority of distribution through forum posts and peer recommendations; every NPS promoter is worth multiple paid referrals in inspector communities)

### Business Objectives

**Year 1 objectives (12 months post-launch):**
1. **300 paying subscribers** at $29/month = **$8,700 MRR**
2. **AppSumo LTD launch**: 400 LTD purchasers at $79 = **$31,600 one-time**
3. **InterNACHI partnership**: Featured in at least one InterNACHI newsletter (100K subscribers) in the first 6 months
4. **Spectora integration live**: Webhook-based sync functional and tested with 100+ inspection firms within 90 days of launch
5. **Total Year 1 revenue**: $100K–$136K (MRR trajectory + LTD)

**Year 2 objectives:**
1. **700 paying subscribers**: $20,300 MRR
2. **Expansion to radon/sewer scope inspectors**: Adjacent segments where referral dynamics are similar
3. **Team license tier**: 50+ multi-seat firm subscriptions at $79/month

**Strategic objective:**
Establish InspectorReach as the recognized default for agent relationship management among Spectora users before Spectora natively builds CRM features into their core product. The window is approximately 18–24 months.

### Key Performance Indicators

| KPI | Target (Month 3) | Target (Month 12) | Measurement Method |
|-----|-----------------|-------------------|-------------------|
| Paying subscribers | 75 | 300 | Stripe MRR dashboard |
| MRR | $2,175 | $8,700 | Stripe |
| LTD customers (AppSumo) | 150 | 400 | AppSumo dashboard |
| Churn rate (monthly) | <8% | <5% | Stripe |
| Auto-thank-you activation | 80% | 85% | Product analytics |
| Weekly digest open rate | 50% | 55% | Email platform |
| Monthly newsletter sent | 60% | 70% | Product analytics |
| Spectora sync connections | 60 | 250 | Integration analytics |
| NPS | 40 | 50 | Quarterly survey |
| InterNACHI newsletter mentions | 1 | 3 | Manual tracking |

**Leading indicators (signals to watch within first 60 days):**
- **Time to first Spectora sync**: If >48 hours from signup, onboarding is broken → fix immediately
- **Thank-you email activation in first session**: If <50% activate in session 1, the setup flow needs redesign
- **Day 7 retention**: If >25% churn by day 7, the value proposition is not landing in the first week → accelerate the "aha" moment

---

## MVP Scope

### Core Features

The MVP is explicitly scoped to deliver value to a solo Spectora-using inspector in their first 30 minutes of use. Every feature below is essential to that job.

**1. Spectora Data Import (CSV + Webhook)**
- CSV import of completed inspections with agent contact field (handles 100% of Spectora users on day one)
- Webhook connection for real-time sync (available to Spectora API-enabled users; adds ongoing automation)
- Auto-populate agent records: name, email, inspection count, last referral date, total revenue attributed

**2. Agent Referral Dashboard**
- Ranked leaderboard: agents sorted by inspections sent (this month, this year, all-time)
- Revenue attribution per agent (inspections × average inspection fee)
- "Last referral date" for every agent with visual flags for 60/90/120-day inactivity
- Simple relationship health score (Green/Yellow/Red based on recency and frequency)

**3. Post-Inspection Auto-Thank-You**
- Triggered automatically when new inspection syncs from Spectora
- Pre-written thank-you template (customizable)
- Delivered to the referring agent's email within 24 hours of inspection completion
- Inspector can preview/customize before automation goes live; one-time setup

**4. Weekly Relationship Health Digest (to Inspector)**
- Every Monday: top agents this week, agents going cold (60/90 day alert), referral trend vs. prior period
- Delivered via email to the inspector; no login required to get value
- One-click "check in with this agent" link that opens a pre-drafted email

**5. Pre-Built Monthly Agent Newsletter Library**
- 6 pre-written inspector-to-agent email templates covering:
  - Monthly home maintenance tip (seasonal)
  - Market update (home sales/interest rate context)
  - New service announcement (template)
  - Holiday/thank-you seasonal message
- One-click send to full agent contact list (or segmented by tag)
- Basic scheduling: set it and it sends at the right day/time

**6. Agent Contact Management**
- Add/edit agent records manually (name, email, brokerage, phone, notes)
- CSV import for existing agent contact lists
- Tagging: top-tier, prospect, new, cold — for segmented newsletter sends
- Inspection history per agent (pulled from Spectora sync)

**7. Billing and Subscription**
- $29/month subscription via Stripe
- 30-day free trial, no credit card required
- LTD option: $79 one-time (activated via AppSumo code redemption)
- Basic usage limits on LTD: up to 500 agent contacts, 1 Spectora connection

### Out of Scope for MVP

The following are explicitly deferred to prevent scope creep and maintain a 3–4 week build timeline:

- **Multi-seat / team firm accounts**: Solo inspector focus for MVP; team licensing in v1.1 (Month 4–6)
- **Spectora API real-time sync (beyond webhook)**: CSV import ships first; real-time API in v1.1 if Spectora grants access
- **AI-generated email personalization**: Pre-built templates ship first; AI customization in v2.0
- **Two-way CRM sync (HubSpot/Pipedrive bridge)**: Not needed for primary segment; future integration if requested
- **Agent portal / agent-facing features**: Agents remain passive recipients; no agent login in MVP
- **SMS/text message outreach to agents**: Email only for MVP; SMS in v1.2 if demand is clear
- **Mobile app (iOS/Android)**: Web-first; responsive design on mobile browser is sufficient for MVP
- **Radon/sewer scope inspector support**: Adjacent segment deferred until Spectora integration is stable
- **Advanced analytics / cohort analysis**: Basic dashboard metrics sufficient for MVP; BI exports in v2.0
- **Zapier/Make integration**: Direct Spectora connection is the priority; Zapier bridge if demand appears post-launch
- **Inspector marketplace / lead gen**: Out of scope entirely; not a lead gen product, it's a referral relationship manager

### MVP Success Criteria

The MVP is considered validated and ready to invest in v1.1 development when:

1. **75 paying subscribers** reached within 90 days of general availability (not counting LTD purchasers) — confirms product-market fit at a price point that sustains the business
2. **Month 1 retention above 70%** — confirms initial value is being delivered before inspectors forget why they signed up
3. **85% of active users have activated the auto-thank-you flow** — the single highest-value automation must be working; if not, it means the onboarding or Spectora integration is broken
4. **At least 5 qualitative testimonials** from inspectors describing a specific outcome ("I reached out to an agent who hadn't sent work in 90 days and she sent me 3 inspections the next month") — confirms the product is creating real business outcomes, not just reporting data
5. **InterNACHI or NACHI forum organic mention** without paid placement — a signal that the product has reached the community's awareness threshold through word-of-mouth

**Go/no-go decision point (Day 90):** If fewer than 40 paying subscribers and month-1 retention is below 55%, assess whether the Spectora integration onboarding is the blocker (solvable) or whether the core value proposition is not landing (requires strategic pivot).

### Future Vision

**18-month vision (v2.0):**

InspectorReach becomes the default agent relationship layer for independent home inspectors — the tool that every serious inspector uses alongside Spectora, the way they use Google Calendar or QuickBooks. By this point:

- **Team accounts**: Multi-inspector firms manage their entire agent network collectively; agents are attributed to inspectors but visible firm-wide
- **AI-personalized outreach**: Instead of choosing from 6 templates, the inspector describes what they want to say and InspectorReach drafts a personalized note for review before sending
- **Referral forecasting**: "Based on your current agent relationship health scores and seasonal patterns, you're on track for 340 inspections in Q3 — here are the 3 relationships to prioritize to reach 380"
- **Agent recruitment tools**: Inspector can identify high-volume agents in their metro who are currently referring to a competitor — and reach out with a targeted first-contact campaign

**3-year vision (market expansion):**

InspectorReach expands beyond home inspectors to the adjacent referral-driven specialty inspection market:

- **Radon testing specialists**: Same referral dynamic; most business from real estate agents
- **Sewer scope inspectors**: Growing service category; no dedicated CRM
- **Environmental inspectors (mold, lead, asbestos)**: Niche but high-ticket; same relationship problem
- **Property condition assessors**: Commercial adjacent; similar agent-dependent revenue

The platform becomes the agent relationship management standard for every specialty inspection business that runs on real estate agent referrals — a total addressable market of 80,000–100,000 specialty inspectors in the US.

**The long-term moat:**

As InspectorReach accumulates data on which types of outreach generate the most referrals (email timing, message content, post-inspection timing), it builds an inference layer that generic CRMs can never replicate: industry-specific knowledge about what inspector-to-agent communication actually drives referral behavior. This data flywheel — more inspectors → more referral outcome data → better recommendations → more inspector value — is the durable competitive advantage that makes InspectorReach defensible even if Spectora eventually builds a CRM feature.

---

## Strategic Notes

### Go-to-Market Sequence

1. **Pre-launch (Month -2 to 0):** Build the waitlist via InterNACHI forum posts, Reddit r/homeinspection, and personal outreach to 20 inspectors for beta feedback. Spectora CSV import must work perfectly before any public launch.

2. **Beta (Month 1):** 20–30 inspectors in closed beta. Collect testimonials and iron out the Spectora sync flow. No paid marketing yet.

3. **AppSumo LTD launch (Month 2–3):** $79 one-time deal drives initial volume, social proof, and reviews. Cap at 500 LTDs to protect infrastructure economics. Use LTD revenue to fund ongoing development.

4. **Community seeding (ongoing from Month 1):** Active presence in NACHI forum, InterNACHI Facebook group, and "Home Inspection Business Owners" FB group. Answer agent marketing questions; become the recognized expert before pitching the product.

5. **InterNACHI newsletter placement (Month 3–4):** Negotiate a sponsored article or ad placement. The 100,000-subscriber newsletter is the highest-leverage channel in the industry.

6. **Content moat (ongoing):** Publish "How to double your inspection volume from real estate agent referrals" as an SEO and YouTube anchor piece. This keyword cluster has clear commercial intent and zero competition from product companies.

### Pricing Architecture

| Tier | Price | Target | Notes |
|------|-------|--------|-------|
| Solo Monthly | $29/month | Solo inspectors | Primary tier |
| Solo Annual | $275/year ($23/mo) | Retention-focused solo | 20% discount |
| Team Monthly | $79/month | 2–5 inspector firms | v1.1 launch |
| LTD (AppSumo) | $79 one-time | Early adopters | Capped at 500 |
| LTD Team (AppSumo) | $149 one-time | Early-adopter firms | Capped at 150 |

### Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Spectora blocks API/webhook access | Low | High | Build CSV import as primary; webhook as enhancement; document API-free path |
| Spectora builds native agent drip campaigns | Medium | High | Establish user base and brand within 12 months before Spectora can react |
| InspectorData gains rapid distribution | Medium | Medium | Lean hard into "works with Spectora" — InspectorData requires switching |
| 30K inspector TAM limits MRR ceiling | High | Medium | Expand to adjacent specialty inspectors in Year 2 |
| Real estate market downturn reduces inspections | Medium | Medium | "Protect your existing agent relationships" messaging gets stronger in down markets, not weaker |
| Inspector tool fatigue (too many subscriptions) | Medium | Medium | Price at $29 with clear ROI story; one extra referral pays for 14 months |

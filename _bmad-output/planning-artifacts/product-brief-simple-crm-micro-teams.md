---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/simple-crm-micro-teams.md
  - _bmad-output/planning-artifacts/market-research-simple-crm-micro-teams.md
date: 2026-06-15
author: Root
workflowType: product-brief
lastStep: 6
research_topic: simple-crm-micro-teams
---

# Product Brief: Simple CRM for Micro-Teams

---

## Executive Summary

Micro-teams — 1 to 10 people managing client relationships — are the largest underserved segment in a $126 billion CRM market. They're trapped between enterprise CRMs too complex for their needs and free tiers too limited to be useful. The result: only 50% of businesses with fewer than 10 employees use a CRM at all. The other 50% manage their most important business relationships through inboxes, spreadsheets, and memory.

**Simple CRM for Micro-Teams** is a zero-input relationship management platform that auto-captures every email, call, and meeting the moment you connect Gmail or Outlook — no data entry, no multi-week setup, no consultants. In 5 minutes, a real estate agent or small sales team has a living view of every deal, every contact, and every follow-up they owe. In 5 weeks with Salesforce, they have a half-configured tool they'll abandon.

The market window is open right now. HubSpot and Salesforce raised prices significantly in 2025–2026, and "anti-Salesforce" sentiment is at peak intensity in communities where micro-teams gather (r/sales, r/realestate, r/smallbusiness). No product currently occupies the precise position of: **full AI auto-capture + mobile-first + 5-minute setup + $19/user/month explicitly built for teams of 1–10**.

We enter through the real estate beachhead — 2 million US agents, only 30% using a CRM consistently, a concentrated community, and a workflow tailor-made for relationship-based selling. From there we expand to insurance agents, consultants, and small B2B sales teams.

**Pricing:** $79 LTD (solo) / $149 LTD (team of 5) for AppSumo launch; $19/user/month MRR thereafter.

**Tagline:** *The CRM your team will actually use.*

---

## Core Vision

### Problem Statement

Small sales teams and solo professionals who manage client relationships — real estate agents, insurance brokers, freelance consultants, early-stage B2B sales teams — cannot maintain meaningful, consistent contact with their leads and clients because:

1. **Enterprise CRMs are built for enterprises.** Salesforce and HubSpot are designed for 100-person revenue teams with dedicated CRM admins. For a 3-person real estate team, "set up your CRM" means weeks of configuration they don't have time for and capabilities they'll never use.

2. **Lightweight alternatives don't capture anything automatically.** Tools like Pipedrive or Folk require manual entry of every interaction. A sales rep who just finished 8 showings isn't going to log each one by hand. So they don't. Deals slip. Follow-ups are missed. Revenue is lost.

3. **The price cliff is brutal.** Entry tiers at $9–$14/user/month lack auto-capture, mobile apps, and AI follow-up features. The next tier that includes these features jumps to $59–$90/user/month — a 4–6x price increase that puts it out of reach for a 5-person team.

The net result: micro-teams either over-invest in tools they can't use, or under-invest and manage their most valuable business asset — their client relationships — through inbox archaeology and fragile mental models.

### Problem Impact

The cost of this problem is concrete and quantifiable:

- **Revenue loss**: Missed follow-ups are the #1 cause of lost deals for small sales teams. Research shows 80% of sales require 5+ follow-ups, yet 44% of sales reps give up after 1.
- **Time waste**: Sales reps who do use CRMs spend 8–12 hours per week on manual data entry — time that could be spent selling.
- **Income differential**: Real estate agents who use CRM tools consistently earn $100,000+ more in gross commission income annually than those who don't. The tool gap is a direct income gap.
- **Hidden switching costs**: Teams that try and abandon Salesforce/HubSpot don't just lose the subscription fee — they lose the months spent on setup and the team trust that was burned.
- **Market scale**: 50 million micro-businesses globally without CRM adoption. In the US alone, the real estate segment alone represents a $319M/year revenue opportunity at $19/user/month.

### Why Existing Solutions Fall Short

| Problem | How Incumbents Fail |
|---------|-------------------|
| **Setup complexity** | 43% of professionals call CRM software too complex. HubSpot and Salesforce require weeks to configure for meaningful use. Folk and Attio are simpler but still require structured setup time. |
| **Manual data entry** | Pipedrive, Close, and Zoho all require manual logging. Auto-capture is available in Copper (Gmail only), Coffee.ai (enterprise pricing), and Affinity (VC-focused, $500+/month). |
| **Price cliff** | Entry tiers ($9–14) lack AI and mobile. Mid-tiers ($39–90) have both but are out of reach for micro-teams. The gap between "usable" and "affordable" is a structural market failure. |
| **Mobile experience** | Most CRMs treat mobile as a secondary use case. For real estate agents who live in their cars between showings, this is disqualifying. |
| **Google-only auto-capture** | Copper has the best Gmail integration in the market. But it only works for Google Workspace users, locking out the ~40% of small business users on Outlook. |
| **Lack of niche fit** | No CRM under $30/user is built with real estate agent workflows in mind. Generic pipeline stages, missing MLS/Zillow integrations, no transaction-to-referral pipeline templates. |

### Proposed Solution

**Simple CRM for Micro-Teams** is an opinionated, zero-input CRM built exclusively for 1–10 person teams.

**The core mechanic:**
1. User connects Gmail or Outlook via OAuth (60 seconds)
2. The system automatically imports the last 90 days of emails, identifies contacts, extracts context, and builds an initial relationship map
3. Calendar sync adds all past and upcoming meetings to each contact's timeline
4. The user sees a living CRM — populated, current, and ready — without entering a single field

**What the product does:**
- **Auto-capture**: All emails, calendar events, and call logs captured automatically from the moment of connection
- **Contact intelligence**: AI extracts contact details, company, role, and relationship context from email threads
- **Visual pipeline**: Drag-and-drop Kanban view of deals/leads through customizable stages
- **Smart reminders**: AI-generated follow-up suggestions based on conversation recency, sentiment, and deal stage
- **Mobile-first**: Full pipeline management, contact lookup, and note capture from iPhone and Android
- **Pre-built niche templates**: "Real Estate Pipeline" (Lead → Showing → Offer → Close → Referral), "B2B Sales Pipeline", "Consulting Pipeline" — opinionated defaults, not 200 blank fields

**What the product explicitly does NOT do:**
- Multi-hundred-field customization
- Marketing automation suites
- Enterprise SSO, audit logs, or compliance tooling
- Anything that takes more than 5 minutes to configure

### Key Differentiators

1. **Zero-input from day one.** Not "less input" — zero. If you connect Gmail, you have a fully populated CRM in minutes. This is the breakthrough claim, and it must be delivered exactly as promised.

2. **Both Gmail and Outlook.** Copper owns Gmail auto-capture. We own *both*. This unlocks the 40%+ of micro-teams on Microsoft 365 that Copper can't serve.

3. **Purpose-built for micro-teams.** Not a startup CRM with "SMB plans", not an enterprise CRM with "simplified mode". Every UX decision, every default, every template is optimized for a 1–10 person team with no dedicated ops or admin.

4. **$19/user/month with full auto-capture.** The market pricing for comparable auto-capture products is $59–$500+/user/month. We price this feature accessibly, not as a premium tier.

5. **Real estate niche depth.** Pre-built real estate pipeline, Zillow/Realtor.com lead capture integration, transaction timeline from listing to close, referral tracking. A tool that speaks the language of realtors will win realtor word-of-mouth.

6. **Anti-complexity positioning.** "The CRM your team will actually use" is a direct call-out to the pain of abandoned CRM implementations. This resonates immediately with the 50%+ of small teams who tried and quit.

---

## Target Users

### Primary Users

**Persona 1: The Real Estate Agent — "Maria"**

Maria is a 38-year-old independent real estate agent in Phoenix, Arizona. She closed 22 homes last year and earns around $180K in gross commission. She works alone but refers leads to and from two other agents she's friendly with.

*Her day:* She's in her car 4+ hours a day, showing homes, attending inspections, meeting with title companies. She manages 15–30 active leads at any given time and has a sphere of influence of 400+ past clients and referral partners she needs to stay top-of-mind with.

*Her CRM history:* She tried Follow Up Boss 2 years ago after a coach recommended it. Spent a weekend setting it up. Gave up when she realized she'd have to manually log every text and call. She now uses a spreadsheet to track active deals and her inbox for everything else. She knows she's leaking referrals but hasn't found a tool that doesn't feel like more work.

*Her pain:* "I know I should be calling my past clients more. But by the time I'm home at 7pm, the last thing I want to do is update a spreadsheet."

*What success looks like for Maria:* She opens the app on her phone, sees at a glance which leads need attention today, adds a voice note after a showing, and the CRM automatically schedules a follow-up. Her past clients start seeing more of her because the system tells her when someone has gone 60+ days without contact. Referrals increase.

*Likelihood of LTD purchase:* Very high. Real estate agents are accustomed to buying tools to improve their business, and $79 LTD vs. $49+/month ongoing for Wise Agent is an easy decision.

---

**Persona 2: The Small B2B Sales Team Lead — "Derek"**

Derek runs a 6-person sales team at a 30-person marketing agency. His reps manage their own pipelines mostly through email and Google Calendar. He has visibility into deals only when reps update a shared spreadsheet — which is inconsistently.

*His day:* Monday pipeline reviews where he asks each rep what's happening. Email forwarding of important client threads. Constant anxiety that deals are falling through the cracks.

*His CRM history:* Tried Salesforce Essentials 18 months ago. Three weeks of setup. Reps used it for a month, stopped entering data, and it became a ghost town. Tried HubSpot Free last year. Ran into feature walls immediately.

*His pain:* "I need to see my team's pipeline without asking each person individually. And I need my reps to actually use it — which means it can't feel like homework."

*What success looks like for Derek:* His team connects Gmail on day one. By end of the week, every rep's pipeline is populated with real deal data from their email history. He can see a team pipeline view without a standup. Reps actually update stage and notes because the system already captured the activity — all they do is move the card.

*Likelihood of LTD purchase:* High. Team LTD at $149 for 5 users is a no-brainer if he's convinced it'll actually get used.

---

**Persona 3: The Independent Consultant — "Priya"**

Priya is a 44-year-old management consultant who runs a one-person practice. She has 8–12 active clients at any time and a pipeline of 20+ prospect conversations at various stages.

*Her day:* Lots of calls, lots of emails. Proposals, follow-ups, check-ins. She's good at the work but bad at the business development discipline — specifically, staying in systematic contact with prospects who went quiet.

*Her pain:* "I lose track of where conversations are. I'll realize I haven't followed up with someone in 3 months and they've already hired a competitor."

*What success looks like for Priya:* The CRM shows her which prospect conversations went quiet last week and suggests a "check in" message. Her relationship map is always current without her spending time on it. She catches slow deals before they go cold.

---

### Secondary Users

**The Referring Colleague / Team Member**

In the real estate and consulting contexts, secondary users are often colleagues who are being shared contact information or given access to a deal record. They don't manage the pipeline themselves but need read access to context ("what has Maria said to this lead?"). This user values clean, readable contact timelines over any CRM feature.

**The Business Owner / Team Manager**

In the small sales team context, the manager role (like Derek above) is technically a secondary user in that their primary interaction is a reporting/oversight view rather than deal management. The product must serve both the rep doing the work and the manager who needs visibility without becoming a burden on reps.

### User Journey

**Real Estate Agent (Maria) — Onboarding to Value**

1. **Discovery**: Maria sees a post in r/realestate: "Anyone using a CRM that actually syncs with Gmail without manual entry?" — our product is mentioned in 3 replies.
2. **Awareness → Trial**: She visits the site, watches a 90-second demo video showing Gmail connection → contacts appearing in 60 seconds. She signs up for free trial (no credit card).
3. **Onboarding (5 minutes)**: Connects Gmail. System imports 90 days of email. Shows her 47 contacts it identified, 6 active email threads it tagged as "deals". She's immediately in a real CRM with real data.
4. **First value moment (Day 1)**: She sees that a buyer she showed homes to 3 weeks ago has gone 18 days without contact. The system surfaces this with a suggested "check in" draft email. She sends it in 30 seconds. This is the aha moment.
5. **Habit formation (Week 1–2)**: Opens the mobile app between showings to log a voice note. The note is transcribed and attached to the contact. Starts using the pipeline view to track 4 active buyers.
6. **Advocacy (Month 1)**: Mentions the tool in a Facebook group for realtors. Posts a testimonial. Refers 2 colleagues who sign up within a week.

**Small Sales Team (Derek) — Team Adoption Journey**

1. **Discovery**: Derek posts in r/sales asking for CRM alternatives after abandoning HubSpot. Multiple people recommend our product for small teams.
2. **Trial → Team LTD**: Derek signs up, connects his own Gmail, sees the auto-populated view. Shows two reps. They're immediately sold because "I don't have to enter anything." Buys the team LTD during AppSumo launch.
3. **Team rollout (Day 1)**: All 5 reps connect Gmail. Pipeline is populated from 90 days of email history. First Monday review uses real data instead of a spreadsheet.
4. **Value acceleration**: AI follow-up suggestions fire for reps who haven't contacted a prospect in 10+ days. Deal velocity improves. Derek gets pipeline visibility he's never had before.
5. **Expansion**: Team grows to 8 people. Upgrades to seat-based monthly plan.

---

## Success Metrics

### User Success Metrics

**The single most important user success signal:** A user who connects Gmail/Outlook and sees a populated CRM within the first session — without entering any data — is experiencing the core product promise. This event is the primary leading indicator of retention.

| User Success Metric | Target | How Measured |
|--------------------|--------|--------------|
| Time-to-first-auto-captured-contact | < 5 minutes from Gmail connect | Event tracking in onboarding flow |
| % of users who connect email within first session | > 80% | Onboarding funnel analytics |
| D7 retention (active users after 7 days) | > 60% | Cohort analysis (CRM benchmark: 40%) |
| D30 retention (active users after 30 days) | > 40% | Cohort analysis |
| Weekly active use — pipeline view or contact view | > 3x/week for engaged users | Feature usage tracking |
| AI follow-up acted on | > 50% of surfaced suggestions | Suggestion interaction tracking |
| Net Promoter Score (NPS) | > 55 (target: 65+) | In-app NPS survey at Day 30 |

**The "aha moment"**: User acts on an AI-surfaced follow-up suggestion within their first 3 days. This predicts long-term retention better than any other early-session behavior.

### Business Objectives

**Phase 1: LTD Validation (Month 1–3 post-AppSumo launch)**
- Sell 2,000–5,000 LTD codes at $79 (solo) / $149 (team)
- Generate $200K–$750K in LTD revenue (non-dilutive startup capital)
- Achieve 30+ verified real estate agent users in first 2 weeks
- Hit 85%+ approval rating in AppSumo reviews
- Build 50+ G2/Capterra reviews with 4.5+ average

**Phase 2: MRR Foundation (Month 4–12)**
- Convert 5–10% of LTD users to monthly plans (team upgrades, seat overages)
- Reach $10K MRR by month 6 from non-LTD sources
- Reach $25K–$75K MRR by month 12
- Churn rate < 3%/month

**Phase 3: Community + SEO Growth (Month 6–18)**
- 50+ organic Reddit mentions/month across r/realestate, r/sales, r/smallbusiness
- Rank in top 3 organic results for "best CRM for real estate agents 2026"
- 1,000+ active real estate agent users
- Expansion into insurance agents, consultants as second niche

### Key Performance Indicators

**Acquisition KPIs:**
- AppSumo launch: 2,000 LTD codes minimum; 5,000 stretch target
- Organic Reddit signups: 200+/month by month 6 (tracked via UTM source)
- Free trial → paid conversion: > 15% (30-day trial window)
- Real estate agent segment: 30% of total user base within 6 months

**Engagement KPIs:**
- Auto-capture success rate: > 95% of connected Gmail accounts import contacts correctly within 2 minutes
- Daily active usage (real estate agents): > 60% login at least 4x/week
- Follow-up suggestion action rate: > 50% of suggestions acted on
- Mobile usage: > 40% of sessions from mobile app

**Business KPIs:**
- LTD revenue: $200K minimum (survival); $500K+ (strong launch)
- MRR at 6 months: $10K
- MRR at 12 months: $35K
- Customer Acquisition Cost (CAC) payback: < 6 months for MRR customers
- Average Revenue Per Account (ARPA): $19/seat (solo) → $57+ (3-seat teams)

**Technical KPIs:**
- Gmail OAuth connection success rate: > 99%
- Email import latency: < 2 minutes from OAuth grant to first contacts appearing
- Mobile app crash rate: < 0.1%
- API uptime (Gmail/Outlook sync): > 99.5%

---

## MVP Scope

### Core Features

The MVP is defined by a strict rule: **ship exactly what's needed to deliver the "zero-input" promise and nothing more.** Every MVP feature must trace back to the core value proposition: connect email in 60 seconds, see a real CRM immediately.

**Feature 1: Gmail & Outlook OAuth Integration (MUST HAVE — Day 1)**
- OAuth 2.0 connection for Gmail (Google Workspace and personal Gmail)
- OAuth 2.0 connection for Outlook (Microsoft 365 and personal Outlook.com)
- Auto-import of last 90 days of email threads
- Contact auto-creation from email correspondent list
- Ongoing sync: new emails auto-logged in real time

*Why essential:* This IS the product. Without this working perfectly, nothing else matters.

**Feature 2: Contact Intelligence Layer (MUST HAVE — Day 1)**
- AI-powered extraction of name, email, company, and role from email signatures and body text
- Contact deduplication (same person appearing across multiple email threads)
- Thread grouping under each contact
- Last contact date and communication frequency visible on contact card

*Why essential:* Users need to trust that their contact database is accurate. Duplicates and missing names erode confidence immediately.

**Feature 3: Visual Pipeline View (MUST HAVE — Day 1)**
- Kanban board with drag-and-drop deal stages
- 3 pre-built pipeline templates: Real Estate (Lead → Active Buyer → Under Contract → Closed → Referral), B2B Sales (Prospect → Qualified → Proposal → Negotiation → Won/Lost), General (New → Active → Follow-up → Closed)
- Manual deal creation from contact
- Deal stage history and stage-change timestamps

*Why essential:* This is what users think of when they think "CRM." Without a pipeline view, the product doesn't register as a CRM to target users.

**Feature 4: Google Calendar Sync (MUST HAVE — Day 1)**
- Auto-import of all past and future calendar events
- Events matched to contacts (if attendee email matches a contact)
- Meeting timeline on contact record

*Why essential:* Real estate agents and salespeople live in their calendars. Meetings not appearing in the CRM breaks the "zero manual entry" promise.

**Feature 5: Smart Follow-Up Reminders (MUST HAVE — MVP)**
- AI-generated suggestions: "You haven't contacted [Name] in X days — want to reach out?"
- Configurable inactivity thresholds (7, 14, 30, 60 days)
- One-click email draft generation for follow-up suggestions (basic template, user edits and sends)
- Notification via email and mobile push

*Why essential:* This is the "aha moment" feature. The first time a user acts on a follow-up suggestion and gets a response they would have otherwise missed, the product is sticky.

**Feature 6: Mobile App — iOS & Android (MUST HAVE — MVP)**
- Contact lookup and timeline view
- Pipeline view (view + drag-and-drop stage update)
- Quick note capture (text + voice-to-text transcription)
- Push notifications for follow-up reminders
- Offline contact browse (cached last sync)

*Why essential:* Real estate agents use their phones between showings. Maria will not use a desktop-only CRM. Mobile is not a stretch goal — it's a core requirement.

**Feature 7: Basic Team Sharing — 2–5 Users (MUST HAVE — MVP)**
- Invite team members via email
- Shared contact database (all teammates see all contacts)
- Deal assignment (assign a deal to a team member)
- Simple activity feed: "Maria logged a meeting with John Smith"

*Why essential:* The team LTD tier ($149) requires meaningful team functionality to justify the price. This is the minimum for the team pitch.

**Feature 8: Contact Import (SHOULD HAVE — MVP)**
- CSV import from spreadsheet (name, email, phone, company)
- Import from HubSpot export (CSV)
- Import from Salesforce export (CSV)

*Why essential:* Many users have existing contact lists outside of email. Import prevents the "but I have 500 contacts in my spreadsheet" objection. Also reduces churn from users who feel locked in elsewhere.

### Out of Scope for MVP

These features are intentionally deferred. Shipping any of these in v1 would delay launch, bloat the product, and distract from perfecting the core auto-capture experience.

| Feature | Why Deferred |
|---------|-------------|
| Zapier / API integrations | Complex to build, test, and maintain; not needed to validate core value |
| Marketing automation / email sequences | Different product category; attracts wrong users and creates support load |
| Dialer / built-in calling | Hardware/telephony complexity; Close CRM owns this niche already |
| Advanced reporting / analytics dashboards | Not needed until users have enough data to analyze (month 3+) |
| Custom fields / pipeline customization | Opinionated defaults beat flexibility for MVP; customization is a v2 feature |
| Zillow / MLS / Realtor.com lead capture integration | High integration complexity; valuable but not launch-blocking |
| WhatsApp / SMS thread capture | Complex API; Twilio costs; v2 feature |
| AI-drafted email sending (from within CRM) | Trust risk; users want to review before sending; v2 after trust is established |
| Enterprise features (SSO, audit logs, SCIM) | Wrong user segment for MVP |
| White-label / brokerage plans | B2B2C channel requires different pricing/sales motion; post-MRR validation |

### MVP Success Criteria

The MVP is considered successful and ready for AppSumo launch when:

**Technical gates (all required before launch):**
- [ ] Gmail OAuth connects successfully for 95%+ of test accounts, with contacts appearing within 2 minutes
- [ ] Outlook OAuth connects successfully for 95%+ of test accounts, with contacts appearing within 2 minutes
- [ ] Pipeline view works correctly on iOS 16+, Android 12+, and desktop Chrome/Safari/Firefox
- [ ] Auto-capture continues reliably for 14+ days without manual intervention (background sync stability test)
- [ ] Data privacy architecture reviewed: email content not stored on servers (metadata + summary only)

**User validation gates (required before AppSumo submission):**
- [ ] 30+ beta users (primarily real estate agents) have used the product for 2+ weeks
- [ ] D7 retention in beta cohort > 55%
- [ ] NPS from beta users > 45
- [ ] 10+ video testimonials recorded from beta users
- [ ] 0 critical bugs in follow-up reminder or pipeline view flows

**Launch readiness gates:**
- [ ] AppSumo listing with demo video (< 3 minutes showing Gmail connect → populated CRM)
- [ ] Onboarding documentation covering Gmail, Outlook, mobile setup
- [ ] Support inbox and response SLA defined (< 24h)
- [ ] 50+ answers to CRM questions posted on Reddit (community presence pre-launch)

**Decision gate for scaling beyond MVP:**
- 500+ active users post-launch
- LTD revenue > $100K
- D30 retention > 35%
- At least 3 unprompted referrals/week from existing users

### Future Vision

**Version 2 (Month 4–9 post-launch):**
- Zillow and Realtor.com lead capture integration (real estate niche depth)
- WhatsApp and SMS thread capture (US and international markets)
- Advanced activity reporting: email volume, deal velocity, rep leaderboard (for team plans)
- Custom pipeline stages and field definitions (limited, guided customization)
- Zapier integration (connects to tools teams already use)
- Referral program with reward credits

**Version 3 (Month 10–18):**
- AI relationship health scoring: color-coded "at risk" contacts based on communication patterns
- Voice memo → CRM: record a voice note, AI extracts action items and contacts
- Team templates: real estate broker deploys standardized pipeline to 15 agents under their brokerage
- Integrations marketplace: Calendly, DocuSign, Stripe for consultants
- "Best deal to close this week" AI recommendation based on deal age, engagement, and stage

**Long-Term Platform Vision (Year 2–3):**
The product evolves from a CRM into an **AI relationship management layer** that sits between users and their email/calendar and proactively manages the relationship lifecycle. Instead of users opening a CRM dashboard, the CRM quietly works in the background and surfaces only what requires human action: "You need to reach out to these 3 people today." In this vision, the CRM becomes invisible infrastructure — the best CRM is the one you never have to think about.

**Market Expansion Path:**
1. Real estate agents (beachhead, launch)
2. Insurance agents and brokers (similar relationship-heavy, community-driven workflow)
3. Independent consultants and coaches (pipeline of proposals + long-term client nurturing)
4. Mortgage officers and financial advisors (regulated industry, referral-driven)
5. White-label for real estate brokerages (B2B2C: brokerage pays, agents use)
6. API/platform: allow other tools to push contact events into the CRM (eventual moat)

**Revenue Vision:**
- 12-month ARR: $500K–$1M (blended LTD + MRR)
- 24-month ARR: $2M–$5M (MRR dominant, LTD phase closed)
- 36-month ARR: $10M+ (vertical expansion + brokerage/team plans)
- Exit scenarios: acquisition by Pipedrive, Monday, or PE roll-up at 5–8x ARR ($50M–$80M at $10M ARR)

---

## Go-to-Market Strategy

### Beachhead: Real Estate Agents

**Why real estate first:**
- Largest single niche (2M US agents) with lowest CRM adoption (30%)
- Extremely concentrated community (r/realestate 2M+ members, Bigger Pockets, NAR, brokerage Facebook groups)
- Clear, specific workflow that generic CRMs don't serve well
- Word-of-mouth is the dominant discovery mechanism in this community
- Income differential is well-documented ($100K+ GCI for CRM users vs. non-users) — ROI story is easy to tell

**Community pre-launch (Weeks 1–8 before AppSumo):**
- Answer 50+ CRM questions authentically on r/realestate, r/sales, r/smallbusiness — build a reputation before mentioning any product
- Join 5–10 real estate agent Facebook groups; observe, contribute, and build relationships
- Recruit 30 beta users from r/realestate (offer lifetime free access in exchange for 2-week beta feedback + testimonial)
- Collect 10+ video testimonials before AppSumo submission

**AppSumo Launch (Month 2–3):**
- Positioning: "The CRM that sets itself up — connect Gmail in 60 seconds, your entire contact history appears automatically"
- Hero claim: "Anti-Salesforce for real estate agents and small sales teams"
- Demo video: Shows Gmail connect → contacts appearing → pipeline view → follow-up reminder — all in under 3 minutes
- Target: 2,000–5,000 LTD codes sold; 60-day money-back guarantee (standard AppSumo)
- Founder in comments daily for first 30 days (critical for AppSumo trust and rankings)

### Pricing Architecture

| Plan | LTD Price | MRR Price | Users | Notes |
|------|----------|----------|-------|-------|
| Solo | $79 | $19/month | 1 | Primary individual professional plan |
| Team | $149 | $49/month | 5 | Best value; primary AppSumo pitch |
| Growth | $299 | $99/month | 10 | Post-MVP; for larger micro-teams |

**Rationale:**
- $79 solo LTD is below the "impulse buy" threshold for professionals earning $100K+
- $149 team LTD is a clear win over $49/month recurring for 5 users
- $19/user/month is a direct pricing disruption vs. Pipedrive ($39+) for comparable features
- No feature gating between tiers (all plans get auto-capture, mobile, AI reminders) — only seat count differs

### SEO & Content Strategy (Month 1 onward — 6–12 months to rank)

Target keywords:
- "best CRM for real estate agents 2026" — high intent, high volume
- "CRM that syncs with Gmail automatically" — feature-specific, high conversion
- "simple CRM for small teams" — category-defining
- "HubSpot alternatives small business" — competitor displacement
- "CRM for 5 person team" — exact-match micro-team intent

Content formats:
- Long-form comparison posts ("Simple CRM vs. HubSpot: What Real Estate Agents Need to Know")
- User story case studies ("How Maria closed 8 more deals in 90 days with zero data entry")
- YouTube demo videos (product walkthroughs + "set up your CRM in 5 minutes" tutorials)

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-----------|--------|-----------|
| Email API reliability failure (Gmail or Outlook OAuth breaks) | Medium | Critical | Use Nylas or Merge.dev as API abstraction layer; Smart BCC as fallback; invest in robust error handling and retry logic |
| Auto-capture accuracy < 95% (false contacts, missing threads) | Medium | High | Extensive pre-launch testing across Gmail account types (personal, Workspace, legacy); allow user corrections to train model |
| Market differentiation failure — product doesn't feel different from existing tools | Low-Medium | Critical | Hard gate: don't submit to AppSumo until 30+ beta users confirm "this is different" — specific follow-up questions about setup time and auto-capture |
| AppSumo LTD support load overwhelms team | Medium | High | Cap LTD codes at 3,000–5,000; build comprehensive self-serve documentation before launch; hire 1 part-time support resource by week 2 of launch |
| Copper adds Outlook support and closes pricing gap | Low | Medium | Deepen niche focus (real estate templates, workflow depth) — price competition alone is not the moat |
| GDPR/CCPA data compliance risk from email capture | Low | High | Architecture as a pass-through processor (no email content stored, only metadata + AI summary); legal review before launch; data deletion workflow from day one |
| LTD users demanding features beyond core offering | High | Medium | Set expectations explicitly in AppSumo listing: "opinionated, micro-team focused CRM — not a Salesforce replacement". Cap LTD codes to limit this cohort. |

---

*Product Brief prepared: 2026-06-15*
*Pipeline: Research → Market Research ✅ → Product Brief ✅ → PRD → Architecture → Epics → MVP*

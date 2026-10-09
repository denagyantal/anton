---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/trade-license-renewal-tracker.md
  - _bmad-output/planning-artifacts/market-research-trade-license-renewal-tracker.md
workflowType: 'product-brief'
lastStep: 6
project_name: 'trade-license-renewal-tracker'
user_name: 'Root'
date: '2026-10-09'
---

# Product Brief: Trade License & Certification Renewal Tracker

---

## Executive Summary

**TradeShield** is a compliance dashboard built specifically for small trade businesses — HVAC shops, electrical contractors, plumbing firms, and cosmetology salons employing 2–15 licensed technicians. It tracks state-specific license expiration dates, continuing education (CE) credit requirements, and automates renewal reminders before a lapsed license causes a job-site shutdown.

The core pain is vivid and quantified: a $500K HVAC company that cannot pull permits because one technician's state contractor license expired three months ago loses $3,000–$20,000 per incident. The owner missed the renewal notice. No system sent an alert. The product exists to make that story impossible.

The market gap is equally clear: CE Broker (2M+ users, 100+ licensing boards) dominates healthcare and cosmetology compliance tracking but has never entered skilled trades. LicensedTrades.com is the only purpose-built trade-specific tool — but its $199/month entry tier structurally ignores the 1–10 employee shop that makes up the vast majority of HVAC, electrical, and plumbing businesses in the US. No product exists between "free spreadsheet" and $199/month for this segment.

TradeShield fills that gap at $49/month flat for up to 10 employees, with a $59 LTD tier optimized for AppSumo launch. The moat is a proprietary state-specific license renewal rules database (renewal periods, CE hour requirements, approved providers), starting with HVAC and electrical in the 5 highest-density states and expanding to 50 states across 4+ trades.

**12-month revenue target:** $18,000 MRR / $216K ARR — conservative relative to comparable vertical SaaS outcomes and the $235M+ serviceable market.

---

## Core Vision

### Problem Statement

Licensed tradespeople — HVAC technicians, electricians, plumbers, cosmetologists — must renew state-issued licenses on state-specific schedules and log continuing education hours. The rules vary by trade, by state, and sometimes by license type within a trade. A master electrician in California faces different renewal requirements than a journeyman plumber in Texas.

Small trade businesses employing 3–15 licensed technicians have no central system to track these requirements. The typical approach is memory, phone reminders, and waiting for renewal notices that arrive by mail — and sometimes don't arrive at all.

**The specific failure mode:** A shop with 7 technicians has 7–14+ different licenses and certifications, each expiring on different schedules across potentially multiple states. When one expires unnoticed, the consequences are immediate and expensive:
- Cannot pull permits → job delayed or cancelled
- Cannot legally operate → technician sent home, customer appointments missed
- Late fees: $250+ in most states; full reapplication required if expired over 1 year
- Lost revenue per incident: $3,000–$20,000+ depending on job and state

**The scale of the problem:** 3–4.5M licensed tradespeople in the US face mandatory periodic renewal. The 400,000–600,000 small trade businesses employing them have no affordable tool to manage it.

### Problem Impact

**Financial:** LicensedTrades.com estimates $29,700–$84,800 in annual compliance-related losses for a 10-person multi-state shop. Even a single-state 5-technician shop faces $3,000–$20,000 per lapsed-license incident. A $49/month product that prevents one incident delivers 60–400x ROI in year one.

**Operational:** When a tech's license lapses mid-job, the ripple effects extend beyond the immediate revenue loss. Customer trust is damaged, general contractors note the compliance failure, and the scramble to file emergency renewals consumes owner-operator time that would otherwise go to billable work.

**Competitive:** Small trade firms increasingly bid on subcontracts that require compliance documentation — proof that all technicians hold current licenses. Shops that cannot produce this documentation on demand lose bids to competitors who can.

**Regulatory trend:** State licensing requirements are expanding, not contracting. More states are adding or tightening trade license requirements. Multi-state operations are growing as HVAC and electrical firms follow homebuilding growth. Each expansion multiplies the compliance tracking burden.

### Why Existing Solutions Fall Short

**Spreadsheet / paper calendar (70% of small shops)**
Works until it doesn't. Fails when a renewal notice goes missing, when there's a personnel change, or when the owner is on a job and can't check it. Provides no proactive alerts. Requires manual updates. Has no CE tracking capability.

**LicensedTrades.com ($199–$1,199/month)**
The only purpose-built direct competitor. Feature-complete (dashboard, alerts, CE tracking, PDF export). But priced at $199/month for 5 technicians ($40/tech/month), it structurally abandons the 1–4 employee shop — which is the majority of trade businesses. A 2-person electrical operation cannot justify $199/month for a compliance tracker.

**CE Broker (freemium, healthcare/cosmetology only)**
Proves the model — 2M+ users, 100+ state licensing boards, individual-focused compliance tracking. Does not cover HVAC, electrical, or plumbing trades. Has not expanded into skilled trades despite 10+ years of operation and obvious market adjacency. Structurally focused on board-reporting for individuals, not employer dashboards for shop owners.

**Field Service Management software (Jobber, Housecall Pro, ServiceFusion)**
Small trade shops spend $60–$350/seat/month on FSM tools. None include trade-specific license tracking with state rules libraries. ServiceTitan has a basic certification tracking module, but serves mid-market, not the sub-$100/month segment.

**Generic credential trackers (ExpiryEdge, Competency Manager)**
Horizontal tools that track credential expiry dates but have no trade-specific state rules library. Cannot answer "does my California HVAC contractor need 32 CE hours before the license renews?" The absence of pre-loaded state rules means the owner must still look up requirements manually — eliminating the product's core value.

**The summary:** No product exists that combines (1) sub-$100/month pricing, (2) multi-employee employer dashboard view, and (3) a pre-loaded trade-specific state rules database. All three together constitute a category that is genuinely unoccupied.

### Proposed Solution

**TradeShield** is a compliance dashboard for small trade shop owners. The owner adds their technicians, enters each license and certification with expiry date and state, and the system handles the rest:

- Automated email (and SMS) reminders at 90, 60, and 30 days before each expiry
- CE hour tracking per employee against state-specific requirements (the system knows what's required; the owner just logs completions)
- Color-coded team dashboard: green (current), yellow (expiring soon), red (expired or CE deficit)
- PDF compliance report export for bid packages and insurance audits
- Pre-loaded state rules library for HVAC and electrical in the 5 top states (CA, TX, FL, NY, IL) at launch — expanding to 50 states across 4 trades post-MVP

The core product insight: the owner doesn't need to know that their California HVAC contractor license requires 32 CE hours per 4-year renewal period. TradeShield knows. The owner just adds the employee and the product surfaces what's due, what's complete, and what's at risk.

### Key Differentiators

**1. The only sub-$50/month trade-specific compliance tracker**
The $0–$199/month gap for purpose-built trade license tracking is unoccupied. TradeShield owns this segment by design, with pricing that makes the ROI case trivially obvious.

**2. State rules library as moat and acquisition asset**
A proprietary database of trade-specific renewal requirements by state is simultaneously the product's core value, its most durable competitive advantage, and (as free-to-access SEO landing pages) the primary organic acquisition channel. Competitors cannot replicate the library quickly; state rules research is labor-intensive.

**3. Employer dashboard vs. individual tracker**
CE Broker and most compliance tools are built for the individual professional tracking their own credentials. TradeShield is built for the shop owner who needs to see all 7 technicians at a glance. This is a fundamentally different product from CE Broker — it doesn't compete, it complements.

**4. Positioned for the job-site story, not the abstract compliance category**
Small trade owners don't search for "license renewal tracker." They experience a crisis. TradeShield's positioning leads with the crisis story — "your tech just got flagged for an expired license at the job site" — not the product category. This is both accurate and more emotionally resonant.

**5. AppSumo LTD creates network effects before organic growth kicks in**
A $59 LTD launch on AppSumo targets 300–500 early customers who seed reviews, surface edge cases, and provide the social proof needed for organic Reddit/SEO distribution. Comparable compliance tool LTD launches have generated $140K–$800K.

---

## Target Users

### Primary Users

**Persona 1: Marcus, the HVAC Shop Owner (Primary Buyer)**

Marcus runs a 7-technician HVAC company in Texas. Annual revenue: $800K. He handles estimating, dispatching, and most of the office work himself. He uses Housecall Pro for scheduling and invoicing. He has no admin staff.

He knows vaguely when each tech's license is up — he's kept a spreadsheet for years. But six months ago, one of his journeymen's state HVAC contractor licenses expired without anyone noticing. Marcus only found out when the tech went to pull a permit and was flagged. The job was delayed four days. The customer was angry. Marcus paid $400 in late fees and spent two days on paperwork.

**Goals:** Keep all 7 techs legally working at all times. Stop managing compliance by memory and panic. Be able to show proof of compliance when bidding on commercial subcontracts.

**Current behavior:** Spreadsheet updated manually whenever he remembers. Waits for state mail renewal notices (unreliable). Has set personal phone alarms for 2–3 of the most important expirations.

**What makes him adopt:** A dashboard he can check in 30 seconds to see all 7 techs in green/yellow/red. An email that arrives 90 days before any expiry, before it becomes a crisis. He doesn't want to have to think about this anymore.

**Willingness to pay:** $49–$99/month. He already pays $79/month for Housecall Pro per technician. Compliance peace of mind at $7/tech/month is obvious value.

---

**Persona 2: Diana, the Electrical Contractor Owner (Primary Buyer)**

Diana owns a 4-person electrical contracting firm in California. Revenue: $450K. She holds a C-10 contractor license herself and employs two journeymen and one apprentice. She bids on commercial tenant improvement projects where general contractors require proof of license status for all workers.

Her specific pain: CE requirements for California electrical contractors are complex (24 hours per renewal period, including specific safety modules). She's been tracking her CE hours and her journeymen's CE hours in a shared Google Sheet. She failed to notice one journeyman was 8 hours short when his license came up for renewal last year. He missed the renewal window, had to reapply, and couldn't work on one job for three weeks.

**Goals:** Never repeat that experience. Have a real-time view of where each technician stands on CE hours, not just expiration dates.

**What makes her adopt:** Pre-loaded California C-10 renewal rules — she doesn't need to look up the CE requirements, the product already knows them. CE hour logging per employee with progress visualization.

---

**Persona 3: Rita, the Salon Owner (Secondary Primary Buyer)**

Rita owns a 5-stylist cosmetology salon in Florida. CE Broker partially serves her stylists' individual compliance needs, but Rita has no employer-side dashboard showing which of her five stylists is current, who is behind on CE hours, and when each license renews. She manually checks each stylist's CE Broker profile.

Rita represents the cosmetology vertical where an employer-facing multi-employee view is genuinely unserved by CE Broker's individual-centric model. She is a secondary priority to HVAC/electrical given lower average revenue and lower consequence of lapse, but represents meaningful adjacent market expansion.

### Secondary Users

**The Licensed Technician (End User, not Buyer)**

Individual technicians (HVAC, electrical, plumbing) interact with TradeShield primarily as recipients of renewal reminders and as submitters of CE completion records. They may log CE hours directly via email link or simple mobile form, reducing manual entry burden on the owner.

Key consideration: Technicians are not the buyer and may not interact with the dashboard. The product must deliver value to the shop owner even if technicians are not active app users. Technician-facing features (mobile CE logging, renewal document upload) are enhancements, not MVP requirements.

**General Contractors / Insurance Adjusters (Compliance Report Recipients)**

GCs and commercial insurance adjusters increasingly request compliance documentation before awarding subcontracts. TradeShield's PDF export feature serves this use case — the shop owner generates a compliance report, attaches it to the bid package, wins the contract. This downstream value-creation strengthens retention and justifies the product to finance-minded owners.

### User Journey

**Discovery → Adoption Journey for Marcus (Primary Buyer)**

1. **Discovery trigger:** Marcus searches Reddit after the permit-flagging incident. He posts in r/HVAC asking "how do you track your techs' license renewals?" — or he sees a TradeShield post in r/HVAC that opens with the exact story he just lived.

2. **Landing page evaluation:** Marcus hits the TradeShield homepage. The above-the-fold messaging: "One of your techs just got flagged for an expired license. Here's how to make sure it never happens again." He recognizes the scenario. He checks pricing: $49/month. He signs up for a free trial.

3. **Onboarding (Day 1, ~15 minutes):** Marcus adds his 7 technicians, enters their license types and expiration dates. The system pre-populates the Texas HVAC license renewal requirements. He sees the compliance dashboard: 5 green, 1 yellow (expiring in 67 days), 1 red (already past due — the same tech from the incident).

4. **Aha moment (Day 1):** Seeing all 7 techs on one screen, color-coded, with the "red" status immediately surfacing the overdue renewal — Marcus has already gotten value before the free trial ends.

5. **Activation (Week 1):** Marcus logs the first set of CE completions from the previous year. He sets up team notifications so alerts go to both him and each technician directly. He exports a compliance PDF for a commercial bid.

6. **Retention (Month 1+):** The 90-day reminder emails arrive as the yellow-status tech's renewal approaches. Marcus clicks through, sees what's needed, schedules the CE course. The renewal happens proactively, not reactively. This is the core value delivery moment — compliance achieved before crisis.

7. **Advocacy (Month 3+):** Marcus mentions TradeShield in the r/HVAC weekly thread when someone asks about license tracking. He's a word-of-mouth acquisition channel.

---

## Success Metrics

### User Success Metrics

**Primary metric — proactive renewal rate:**
The product's core purpose is preventing reactive renewals (scrambling after a lapse) and replacing them with proactive renewals (acted on before expiry). Target: 85%+ of tracked licenses renewed before expiry date across the active customer base. This is the leading indicator that TradeShield is actually working.

**Engagement — reminder open and action rate:**
90/60/30-day renewal reminder emails should drive action, not inbox noise. Target: 40%+ open rate on renewal reminders (above 3x industry average for transactional email), 20%+ click-through rate to renewal guidance page.

**CE tracking completeness:**
Customers who log CE hours should reach the dashboard "CE complete" state before their renewal deadline. Target: 70%+ of licenses with active CE requirements show logged CE hours within 60 days of account creation.

**Onboarding completion:**
Time to first compliance dashboard view (all techs entered with licenses). Target: 80%+ of new users complete initial roster setup within 7 days of signup.

### Business Objectives

**Revenue trajectory:**

| Milestone | Monthly Customers | MRR | Notes |
|-----------|------------------|-----|-------|
| Month 3   | 50               | $2,500 | Post-AppSumo LTD + early SaaS |
| Month 6   | 200              | $9,800 | ~$10K MRR threshold |
| Month 12  | 400              | $18,000 | $9/employee tier driving expansion |

**AppSumo LTD launch target:** 300–500 LTD units at $59 within 30-day window. Uses launch revenue to fund state rules database expansion from 5 → 25 states.

**Net revenue churn:** <5% monthly by month 3; <2% by month 12. Compliance is a recurring, non-optional category — once adopted, churn should be minimal unless the business closes.

**Customer acquisition cost (CAC):** <$50 through month 6, funded primarily through community-led Reddit/Facebook distribution and AppSumo LTD. Zero paid acquisition required in Year 1.

**States and trades covered:**
- Launch: 2 trades (HVAC, electrical) × 5 states (CA, TX, FL, NY, IL) = 10 rule sets
- Month 6: 3 trades (+plumbing) × 25 states = 75 rule sets
- Month 12: 4 trades (+roofing/fire) × 50 states = 200 rule sets

### Key Performance Indicators

**Acquisition KPIs:**
- New free trial signups per month (target: 50/month by month 3)
- Trial-to-paid conversion rate (target: 20%+)
- AppSumo LTD units sold (target: 400+ in launch window)
- Organic search traffic to state-rules landing pages (target: 5,000 monthly visitors by month 6)

**Engagement KPIs:**
- Proactive renewal rate: 85%+ of renewals actioned before expiry (primary health metric)
- Renewal reminder email open rate: 40%+ (leading indicator of user engagement)
- Monthly active users / total customers ratio: 60%+ (compliance-triggered, not daily-use product — lower DAU/MAU expected)
- CE hours logged per active customer per month (target: 2+ log events/month)

**Revenue KPIs:**
- MRR and MRR growth rate (target: $18K by month 12)
- Net Revenue Retention (target: 110%+ via employee-count growth expanding to $9/employee tier)
- Average Revenue Per Account (target: $49 at launch; $65 by month 12 as team sizes grow)
- LTD-to-SaaS conversion rate (target: 15–25% of LTD purchasers upgrade to SaaS when team grows beyond 5 employees)

**Product health KPIs:**
- NPS: 40+ by month 3; 55+ by month 12
- Support ticket rate: <5% of customers per month (indicates product clarity)
- State rules accuracy complaints: <2% (indicates database integrity)

---

## MVP Scope

### Core Features

**1. Employee Roster Management**
- Add/edit/archive employees with name, trade type, and multi-state capability
- Per-employee license and certification records: type, issuing state, issue date, expiry date
- Support for multiple licenses per employee (e.g., state contractor license + OSHA 30 + manufacturer certification)

**2. Automated Renewal Reminders**
- Email reminders at 90, 60, 30, and 7 days before each expiry
- Reminders sent to shop owner (required) and optionally to the technician directly
- Smart suppression: if a renewal has been logged, suppress subsequent reminders for that cycle
- Configurable reminder schedule per customer

**3. CE Hour Tracking**
- Log CE completions per employee: course name, provider, hours, completion date
- Progress visualization: hours logged vs. hours required for current renewal cycle
- System-populated CE requirements from state rules library (owner doesn't enter requirements manually)
- Mark CE cycles complete, triggering license renewal eligibility status

**4. Team Compliance Dashboard**
- Single-screen view of all employees × all licenses: color-coded green/yellow/red
- Green: current, >90 days to expiry, CE on track
- Yellow: 30–90 days to expiry, or CE behind schedule
- Red: expired or CE deficit with renewal deadline approaching
- Sort/filter by expiry date, employee, license type, trade

**5. PDF Compliance Report Export**
- Generate compliance summary report: all employees, all licenses, all CE status
- Formatted for bid packages, insurance audits, GC compliance requests
- Date-stamped for documentation purposes

**6. State Rules Library (MVP: 2 trades × 5 states = 10 rule sets)**
- Pre-loaded renewal requirements: renewal period, CE hours required, CE provider types accepted
- Trades: HVAC (state contractor license), Electrical (journeyman + contractor license)
- States: California, Texas, Florida, New York, Illinois
- Rules displayed in-app at license record level: "This license requires renewal every 2 years and 24 CE hours including 8 hours of safety training"
- System uses rules to calculate CE completeness and set renewal timeline

**7. Account and Team Setup**
- Business account with owner as admin
- CSV import for bulk employee onboarding (reduces setup friction)
- Basic plan management: upgrade/downgrade, billing history

### Out of Scope for MVP

**SMS reminders** — Email is sufficient for MVP validation. SMS adds Twilio integration complexity and cost. Add in Month 2 after validating reminder open rates.

**Document/license card storage** — Photo upload and PDF storage of actual license cards is a high-value feature but adds storage infrastructure costs and compliance complexity. Add in Month 3.

**Mobile app** — Web responsive is sufficient for MVP. Shop owners check this at a desk, not on a job site. Native mobile adds development time without proportionate MVP value.

**Third-party integrations (Jobber, Housecall Pro, Zapier)** — These drive retention but add integration maintenance. Prioritize post-AppSumo launch when customer volume justifies integration investment.

**Bond and insurance tracking** — LicensedTrades.com includes this; it is secondary to the license/CE core. Scope into v1.1.

**Plumbing, roofing, cosmetology trades** — HVAC and electrical covers the highest-pain segments. Plumbing is Month 3; cosmetology and roofing are Month 6.

**States beyond the top 5** — Build the 10 initial rule sets with quality; expand to 25 states post-AppSumo launch using LTD revenue.

**Multi-location business accounts** — Relevant for larger franchises but not the 1–15 employee target. Add when customer requests justify it.

**Public state rules lookup tool (SEO asset)** — High-value organic acquisition asset, but no-code implementation (Webflow or Notion) can launch this separately from the core app. Not a blocker for MVP.

### MVP Success Criteria

The MVP is validated when:

1. **50 paying customers within 90 days** — confirms willingness to pay at $49/month from community-led distribution before AppSumo launch
2. **15+ NPS responses with score >35** — confirms the product is solving the stated problem
3. **Proactive renewal rate >75%** — confirms the reminder system is driving the behavior change the product exists for (renewals completed before expiry)
4. **AppSumo launch generates 200+ LTD purchases** — confirms AppSumo as a scalable acquisition channel

If these four criteria are met by the end of month 3, proceed to Phase 2 (state library expansion, SMS, document storage, AppSumo re-launch or featured placement).

If AppSumo generates <100 units, the primary signal is that positioning or messaging is off — not that the market is wrong. Run customer interviews with LTD purchasers and iterate messaging before state library expansion.

### Future Vision

**Phase 2 (Months 3–6): State expansion + second trade + SMS**
- Expand to 25 states × 3 trades (add plumbing)
- Launch SMS reminders
- Add license document upload and storage
- Integrate with Jobber via CSV import (later native API)
- Free state rules lookup tool as SEO/lead gen asset (static site)

**Phase 3 (Months 6–12): Full trade coverage + integrations**
- 50-state library completion across HVAC, electrical, plumbing, roofing/fire
- Add cosmetology support (multi-employee employer view — differentiated from CE Broker's individual focus)
- Native Zapier integration for alert routing
- Jobber + Housecall Pro technician roster sync
- NATE (North American Technician Excellence) and NECA (National Electrical Contractors Association) distribution partnership discussions

**Phase 4 (Year 2+): Platform expansion**
- Multi-location business accounts for franchise and larger shop management
- AI-powered state rules monitoring: flag regulatory changes automatically
- Insurance integration: generate compliance verification reports for commercial insurance renewals; explore premium reduction partnership with commercial insurers
- Certification marketplace: connect shop owners with CE-approved providers in their state; revenue share from enrollment

**Long-term vision:** The "CE Broker for skilled trades" — a compliance network covering 3M+ licensed tradespeople across all 50 states and 10+ trade categories. At full penetration, a $50M–$200M ARR business with strong acquisition interest from ServiceTitan, Wolters Kluwer, or a trade association consortium. The exit comp from CE Broker (acquired by Propelus) and LicenseLogix (acquired by Wolters Kluwer) confirm that compliance SaaS in regulated professions attracts strategic acquirers at meaningful multiples.

The near-term goal — $18K MRR in 12 months — is simply the proof point that validates this vision and sustains bootstrap operations. Every state rule set added, every trade covered, every integration built deepens the moat that makes TradeShield an acquisition candidate.

---

## Competitive Positioning Summary

| | TradeShield | LicensedTrades.com | CE Broker | Spreadsheet |
|---|---|---|---|---|
| **Price (5 techs)** | **$49/mo** | $199/mo | Free (individual) | Free |
| **Multi-employee dashboard** | ✅ | ✅ | ❌ | Manual |
| **Trade-specific state rules** | ✅ (MVP: 10) | ✅ (top 10 states) | ❌ | ❌ |
| **Automated reminders** | ✅ | ✅ | ✅ | ❌ |
| **CE hour tracking** | ✅ | ✅ (Pro+ only) | ✅ | Manual |
| **AppSumo LTD** | ✅ Planned | None | None | N/A |
| **Target segment** | **1–10 employees** | 5+ employees | Individual users | Anyone |

**Positioning statement:** "The only license compliance dashboard built specifically for small trade shops — priced for a 5-person crew, not a 50-person corporation."

---

## Key Assumptions and Risks

**Critical assumption to validate before full build:**
Reddit community signups before launch — target 50 email signups from a "would you use this?" post in r/HVAC as go/no-go signal. If <20 signups from a thoughtful community post, revisit messaging and problem framing before committing to full state library build.

**Top 3 risks (from market research):**

1. **ServiceTitan expands SMB certification tracking (High probability, High impact)** — Mitigation: Price and position below ServiceTitan's addressable market; establish 500+ customers before this becomes a priority for them. Speed is the primary defense.

2. **State rules database maintenance burden (Medium probability, High impact)** — Mitigation: Start with 5 states, not 50. Build user-contribution model (customers flag regulatory changes). Explore NATE/NECA partnership for rules monitoring.

3. **Category awareness gap requires education, not just conversion (High probability, Medium impact)** — Mitigation: Lead with the crisis story, not the product category. Reddit posts framed as "how do you prevent lapsed license shutdowns?" outperform "launching a license tracker" every time.

---

_Product Brief completed: 2026-10-09_
_Author: Root (automated BMAD pipeline)_
_Based on: Shortlisted idea evaluation (89/105) + comprehensive market research_
_Next step: Create PRD → `/bmad-bmm-create-prd`_

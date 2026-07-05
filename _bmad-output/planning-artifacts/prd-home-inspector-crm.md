---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/home-inspector-crm.md
  - _bmad-output/planning-artifacts/market-research-home-inspector-crm.md
  - _bmad-output/planning-artifacts/product-brief-home-inspector-crm.md
workflowType: prd
date: 2026-07-05
author: Root
project_name: home-inspector-crm
classification:
  projectType: saas_b2b
  domain: service_business_crm
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — InspectorReach: Home Inspector CRM & Agent Referral Manager

**Author:** Root
**Date:** 2026-07-05

---

## Executive Summary

Home inspectors in the US generate 80%+ of their revenue from real estate agent referrals, yet no software in the market gives them visibility into which agents are sending business, which relationships are going cold, or how to stay systematically top-of-mind with their most valuable referral sources. Spectora — the dominant platform with 10,000+ active inspector users — is purpose-built for report writing and client delivery. It has zero CRM functionality. The result: inspectors track their most important business relationships in spreadsheets and memory, missing follow-up opportunities that directly cost them $8,000–$13,500 per lost agent relationship per year.

**InspectorReach** is a Spectora-connected agent relationship manager and nurture automation tool for home inspectors. It imports completed inspection data from Spectora (CSV or webhook), surfaces agent referral rankings and relationship health scores in a weekly digest email, fires a personalized thank-you to the referring agent automatically after every completed inspection, and gives the inspector a pre-built monthly newsletter library to maintain visibility with their entire agent list — all for $29/month.

The core ROI story is concrete and repeatable: one additional agent referral per month ($400–$500 inspection fee) pays for 14 months of the product. Inspectors who internalize this math do not churn. The product launches as a Spectora add-on, not a Spectora replacement — eliminating the switching-cost barrier that prevents InspectorData's full-platform approach from reaching Spectora's installed base.

### What Makes This Special

Three characteristics define InspectorReach's position and make it defensible:

**Spectora integration as the architectural moat.** InspectorReach plugs into Spectora as a lightweight overlay, auto-populating agent records from completed inspection data without requiring inspectors to abandon the report-writing platform they already trust. InspectorData has richer CRM features but requires a full platform switch — an insurmountable barrier for Spectora's 10,000 active users. InspectorReach removes this barrier entirely.

**"Going cold" intelligence purpose-built for the inspection workflow.** The product generates context-aware alerts — "Agent Sarah used to send 3 inspections/month; she hasn't sent one in 75 days" — that generic CRMs (HubSpot, Pipedrive) cannot produce because they have no awareness of the inspection job cycle. This is not a feature any general-purpose tool can replicate without inspector-domain knowledge built in.

**Revenue attribution per agent.** For the first time, inspectors can see precisely how much gross revenue each agent relationship generates. This single insight changes the way inspectors prioritize their time, their thank-you effort, and which relationships deserve cultivation investment. No existing tool in the inspector stack surfaces this data.

## Project Classification

- **Project Type:** SaaS web application (B2SMB — business-to-small-and-medium-business)
- **Domain:** Service business CRM / referral relationship management (niche vertical: home inspection)
- **Complexity:** Medium — Spectora data integration (CSV import + webhook), transactional email sending and tracking, multi-tenant user isolation, recurring billing
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

The primary user success signal is a growth in agent-referred inspection volume that the inspector can directly trace to InspectorReach activity — specifically, an agent responding to an automated thank-you or monthly newsletter and sending a new referral they believe they would not have received without the touchpoint.

Secondary user success signals:
- Inspector configures the post-inspection auto-thank-you once and it runs passively without requiring further attention
- Inspector identifies an agent who had gone cold, reactivates the relationship via a targeted outreach, and receives a new referral within 30 days
- Inspector opens their weekly digest every Monday and acts on at least one "going cold" alert per month
- Dashboard shows the inspector their top-10 agent leaderboard and they can name specific revenue attributed to each relationship

### Business Success

**6-month targets:**
- 75 paying monthly subscribers at $29/month ($2,175 MRR)
- AppSumo LTD launch: 150–250 units at $79 ($11,850–$19,750 one-time)
- Spectora webhook integration live and tested with 50+ inspector accounts
- Month-1 retention: ≥70% of trial-converted subscribers still active at day 30
- 5+ qualitative testimonials citing a specific referral outcome

**12-month targets:**
- 300 paying monthly subscribers ($8,700 MRR)
- 400 total AppSumo LTD purchasers ($31,600 one-time)
- InterNACHI newsletter feature or sponsored placement (1+ placements)
- Organic mention in InterNACHI or NACHI forum without paid promotion
- Team license tier launched (v1.1): 20+ firm subscribers at $79/month

**24-month targets:**
- 700 paying monthly subscribers ($20,300 MRR)
- Team license generating 15%+ of MRR
- Expansion pilots with radon and sewer scope inspector segments

### Technical Success

- Spectora CSV import: 100% of standard Spectora export formats parse without manual intervention
- Webhook sync latency: completed inspection appears in InspectorReach agent dashboard within 15 minutes of Spectora webhook event
- Auto-thank-you delivery rate: >95% of post-inspection emails successfully delivered (not bounced or flagged spam)
- False send rate: <0.5% — auto-thank-you must never fire to an agent on an inspection that had no referring agent
- Onboarding completion: 80%+ of trial users who connect Spectora complete the thank-you email setup in their first session

### Measurable Outcomes

| Metric | Month 3 Target | Month 12 Target | Measurement Method |
|--------|---------------|-----------------|-------------------|
| Paying subscribers | 75 | 300 | Stripe |
| MRR | $2,175 | $8,700 | Stripe |
| AppSumo LTD units | 150 | 400 | AppSumo dashboard |
| Monthly churn rate | <8% | <5% | Stripe |
| Auto-thank-you activation | 80% | 85% | Product analytics |
| Weekly digest open rate | 50% | 55% | Email platform |
| Monthly newsletter send rate | 60% | 70% | Product analytics |
| Spectora sync connections | 60 | 250 | Integration analytics |
| NPS | 40 | 50 | Quarterly survey |
| Day-7 retention | >75% | >80% | Product analytics |

**Leading indicators to watch in the first 60 days:**
- Time from signup to first Spectora data in dashboard: if >48 hours, onboarding is broken
- Thank-you email activation during first session: if <50%, setup flow needs redesign
- Day-7 retention: if <70%, the first-week value delivery is insufficient

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers value to a solo Spectora-using inspector within 30 minutes of signing up. It must achieve the "aha" moment — the inspector wakes up to a thank-you email that fired automatically while they slept — within their first 72 hours of active use.

**MVP must-haves:**
- Spectora CSV import: parse completed inspection history and auto-populate agent records (name, email, referral count, last referral date, revenue attribution)
- Spectora webhook connection: real-time sync of completed inspections for ongoing automation
- Agent referral dashboard: leaderboard ranked by inspections sent (this month, this year, all-time), revenue attribution per agent, last referral date, relationship health score (Green/Yellow/Red)
- "Going cold" alerts: dashboard flags and weekly digest highlights agents with 60/90/120-day inactivity
- Post-inspection auto-thank-you: triggered by Spectora webhook sync, fires personalized email to referring agent within 24 hours, pre-built template with inspector customization, one-time setup
- Weekly relationship health digest: every Monday email to inspector showing top agents, cold agents, referral trend vs. prior period, one-click "reach out" link pre-drafting an email
- Pre-built monthly newsletter library: 6 inspector-to-agent email templates (seasonal tips, market update, new service announcement, holiday message, etc.), one-click send to full agent list or tagged segment
- Agent contact management: add/edit agent records manually, CSV import for existing contact lists, tagging (top-tier, prospect, new, cold), inspection history per agent
- Trial and billing: 30-day free trial (no credit card), $29/month subscription via Stripe, AppSumo LTD code redemption

**MVP out of scope:**
- Multi-seat / team firm accounts (v1.1)
- Spectora real-time API beyond webhook (v1.1 if Spectora grants API access)
- AI-generated email personalization (v2.0)
- Two-way CRM sync (HubSpot/Pipedrive bridge) (deferred — not needed for primary segment)
- Agent portal or agent-facing features (out of scope entirely)
- SMS/text outreach (v1.2 if demand validated)
- Mobile app (web-first; responsive mobile browser sufficient for MVP)
- Radon/sewer scope inspector support (v1.2 once Spectora integration stable)
- Advanced analytics / cohort analysis (v2.0)
- Zapier/Make integration (post-launch if demand appears)

### Growth Features (Post-MVP, v1.1)

- Multi-seat / team firm plan ($79/month): 2–5 inspector firm with firm-level agent view, agent attribution per inspector, single billing account
- Spectora real-time API integration (if Spectora grants API access, replacing webhook dependency)
- AI-assisted email drafting: inspector describes intent, InspectorReach drafts a personalized outreach note for review before send
- SMS outreach to agents as optional escalation channel
- Advanced relationship scoring: incorporates referral value (high-ticket vs. standard inspections), referral frequency trend, response rate to newsletters
- Radon/sewer scope inspector support: configurable service types, referral tracking across multiple inspection categories

### Vision (Future, v2.0+)

- Referral forecasting: "Based on your current agent health scores and seasonal patterns, you're on track for 340 inspections in Q3 — prioritize these 3 relationships to reach 380"
- Agent recruitment tools: inspector identifies high-volume agents in their metro who are currently using a competitor inspector
- Expansion to adjacent specialty inspection markets: radon testing specialists, environmental inspectors, property condition assessors
- Data flywheel: aggregate (anonymized) data on which outreach types and timing generate the most referrals — proprietary recommendations that generic CRMs cannot replicate
- InterNACHI marketplace listing and partner API

---

## User Journeys

### Journey 1 — Marcus the Growth-Mode Inspector: The System That Runs While He Sleeps

Marcus has been home inspecting for 6 years in a mid-sized metro, completing 300 inspections per year at $425 average — $127,500 gross revenue. He uses Spectora for everything: scheduling, reports, client delivery. He loves it and is not switching.

Marcus has maybe 8 trusted agents who send him consistent work. He knows his business depends on these relationships but manages them inconsistently — a Google Sheet he updates monthly, thank-you emails when he remembers (which is not often enough). Three months ago he realized that an agent named Carol, who used to send 4 inspections/month, had gone quiet. He'd missed it completely. Carol had started recommending a competitor.

A post in the "Home Inspection Business Owners" Facebook group catches his eye: "I set this up and now I know exactly which agents are going cold before I lose them." He reads the InspectorReach landing page and recognizes the ROI math immediately — one extra referral a month pays for 14 months of the subscription. He signs up for the 30-day free trial, no credit card.

Onboarding takes 22 minutes. He exports 6 months of inspection history from Spectora as a CSV and imports it. His agent leaderboard populates: "These 9 agents sent you $47,000 in referrals in the last 6 months." He sees the alert he'd been missing: "2 agents haven't sent a referral in 90+ days." He sets up the post-inspection auto-thank-you in 4 minutes using the pre-built template. He does one test customization of the opening line — "Hey [name], just wanted to say thanks for the referral on [property address]…" — and activates it.

Three days later, Marcus completes a buyer's inspection. The next morning, a notification: "Auto-thank-you sent to Agent Jennifer Park for the 214 Maple St inspection." He didn't do anything. By day 7, Jennifer responds to the automated email with a new referral. Marcus didn't have to remember, draft, or send. The system is working.

Every Monday he gets his Relationship Health Digest: top 5 agents that week, 1 agent flagged as going cold (85 days since last referral), a draft outreach email pre-written and ready to send. He clicks "send" on the draft. Two weeks later, that agent sends a new referral.

At month 3, Marcus converts to $29/month without hesitation. His dashboard shows his referral count is up 18% from the prior 3-month period. He can point to exactly which relationships drove it.

*Capabilities revealed: Spectora CSV import, agent leaderboard with revenue attribution, going-cold alerts, post-inspection auto-thank-you, weekly digest with one-click outreach drafts, agent contact management, monthly subscription billing.*

### Journey 2 — Priya the New Inspector: Monthly Newsletters Convert Prospects to Regulars

Priya completed her home inspection certification 14 months ago. She's doing about 120 inspections per year and still establishing her agent network — 3 agents send her semi-regular work, but she needs 3–4 more to reach a sustainable volume of 200+ inspections per year.

Priya's biggest challenge is the dozen agents she's met at open houses and networking events who seem interested but haven't sent referrals yet. She knows she should "nurture" these relationships but has no idea what to say to them on a monthly basis, and she's not a marketer. She's tried sending personal emails twice and it felt awkward.

She discovers InspectorReach on AppSumo ($79 LTD). She pays immediately — "if I get one new agent relationship out of this, it's paid for forever." Her onboarding is different from Marcus's: she has fewer completed inspections, so the Spectora import isn't the focus. Instead, she manually adds her 12 prospect agents (agents she's met but who haven't referred her yet) with the "prospect" tag. She also adds her 3 regular agents with the "top-tier" tag.

Priya chooses the "Monthly Home Maintenance Tips" template for her first newsletter. The template is already written — she reads it, likes it, and hits send to her full 15-agent list in 3 clicks. It goes out looking professional and informative. She would never have drafted this herself.

Over the next 3 months, 2 of her prospect agents start sending referrals. One of them explicitly mentions the newsletter: "I've been passing along your maintenance tips to my buyers — they love it, and it makes me look good." Priya realizes she's been building her reputation passively every month.

Her going-cold alerts surface a regular agent who went quiet for 60 days. She uses the one-click outreach draft from her weekly digest to check in. The agent had just had a slow quarter; he thanks her for reaching out and sends a referral the following week.

*Capabilities revealed: Manual agent contact entry, prospect tagging, pre-built monthly newsletter library, one-click send to tagged segments, going-cold alerts, weekly digest outreach drafts.*

### Journey 3 — Tom the Firm Owner: Firm-Wide Visibility Without Logging Into Each Inspector's Account (v1.1)

Tom owns a 3-inspector firm. He handles all the business development — building agent relationships, attending networking events, managing which agents are assigned to which inspector. The problem: agent relationship data lives in each inspector's head. When an inspector is sick for a week, Tom doesn't know which agents are expecting callbacks or which relationships are going cold.

Tom discovers InspectorReach after Marcus (one of his inspectors) mentions it. Tom upgrades to the team plan ($79/month). He connects the firm's Spectora account. All three inspectors' completed inspections flow into a single firm-level dashboard. Each agent referral is attributed to the inspector who did the work, but Tom can see the full firm-level picture: firm's top 10 agents, agents who haven't sent work in 90+ days across any inspector, total firm revenue by agent.

When one of Tom's inspectors leaves, Tom can see exactly which agent relationships were driven by that inspector and which were firm-level relationships that should be retained. He reassigns the key agents to another inspector and sends a personalized introduction email.

The firm's agent relationship management becomes an institutional asset rather than knowledge trapped in individual inspectors' heads.

*Capabilities revealed (v1.1): Multi-seat firm plan, firm-level agent referral dashboard, cross-inspector attribution, agent relationship continuity on inspector turnover, team billing.*

### Journey 4 — The Inspector Who Avoids the "Going Cold" Blind Spot

Daniel runs a solo inspection business in a competitive metro. He does 280 inspections per year. He's never lost an agent relationship to his awareness — but he also has no idea which agents are quietly sending fewer referrals than a year ago.

InspectorReach's relationship health scoring shows him something he hadn't noticed: an agent who sent 6 inspections per month 18 months ago has been sending only 2 per month for the last 6 months. The agent hasn't "gone cold" — she's still sending work — but she's sending 66% less. She's splitting her referrals.

Daniel reaches out with a personalized check-in, asks if there's anything he can do better, and mentions his new radon testing service. The agent didn't realize Daniel now offered radon — she's been sending those to a specialist. She sends him 3 radon referrals the next month. The going-cold alert doesn't just catch disappeared agents; it catches fading relationships before they're fully lost.

*Capabilities revealed: Trend-based relationship health scoring (not just binary active/cold), revenue trend per agent (this year vs. last year), one-click outreach drafts tied to specific agents, pre-built service announcement newsletter template.*

### Journey Requirements Summary

Journeys reveal the following capability areas:

- **Data integration layer**: Spectora CSV import, webhook connection for real-time sync, auto-population of agent records from inspection data
- **Agent relationship intelligence**: Leaderboard rankings, revenue attribution, last referral date tracking, relationship health scores, going-cold threshold alerts, trend detection (year-over-year)
- **Automated outreach engine**: Post-inspection thank-you trigger (Spectora webhook → 24-hour email send), email tracking (open/delivered), template management
- **Newsletter and nurture tools**: Pre-built template library, one-click send to full list or tagged segments, basic scheduling
- **Weekly digest delivery**: Automated Monday email to inspector, top agents, cold agent alerts, one-click pre-drafted outreach links
- **Agent contact management**: Manual add/edit, CSV import, tagging, inspection history per agent, notes
- **Firm-level view (v1.1)**: Multi-seat plan, cross-inspector attribution, firm-level dashboard
- **Account and billing management**: Trial, Stripe subscription, AppSumo LTD redemption, usage tracking

---

## SaaS B2B Specific Requirements

### Project-Type Overview

InspectorReach is a B2SMB SaaS product targeting a narrow professional vertical (home inspectors) with a single deep integration dependency (Spectora). The buyer and user are always the same person at MVP (solo inspector). The product's core value delivery is automated and passive — the inspector configures it once, and it runs without requiring regular logins. This "set and forget" usage pattern is a feature, not a bug: low active engagement is acceptable as long as automated emails are firing and the inspector is receiving their weekly digest.

The product is not a replacement platform — it is an enhancement layer. Every architectural and UX decision should minimize friction with Spectora's existing workflow.

### Technical Architecture Considerations

- **Multi-tenant SaaS**: Each inspector account is an isolated tenant. Spectora credentials, agent contact data, email templates, and inspection history must not be accessible across tenants under any code path.
- **Spectora data ingestion pipeline**: CSV import must handle Spectora's standard export format and map inspection completion events to agent records. Webhook processing must be idempotent — if Spectora fires the same inspection completion event twice, the agent's referral count should not be double-incremented.
- **Email sending infrastructure**: Post-inspection thank-you emails and monthly newsletters must be sent from the inspector's own email domain (or a product-branded domain as fallback). SPF/DKIM configuration must be guided during onboarding. Email tracking (open/click) via pixel tracking and link wrapping.
- **Job queue for automation**: Scheduled weekly digest emails, automated thank-you processing, and periodic relationship health recalculations must be handled via a reliable job queue with retry logic and failure alerting.
- **Relationship health computation**: Health score (Green/Yellow/Red) computed on a scheduled basis (daily), incorporating last referral date, referral frequency trend, and customizable inactivity thresholds.

### Tenant Model

- **Solo plan (MVP)**: Single inspector user, one Spectora connection, up to 500 agent contacts (LTD limit), unlimited for monthly subscribers
- **Team plan (v1.1)**: Single billing account, up to 5 inspector users, shared Spectora connection or per-inspector connections, firm-level agent dashboard, individual inspector attribution

### Permission Matrix (MVP)

| Action | Solo Inspector |
|--------|---------------|
| View agent dashboard | ✓ |
| Configure Spectora integration | ✓ |
| Activate/edit auto-thank-you | ✓ |
| Add/edit agent contacts | ✓ |
| Send monthly newsletter | ✓ |
| View weekly digest | ✓ |
| Manage billing | ✓ |

### Permission Matrix (v1.1 Team Plan)

| Action | Firm Owner | Inspector (team member) |
|--------|-----------|------------------------|
| View firm-level dashboard | ✓ | — |
| View own agent relationships | ✓ | ✓ |
| Configure firm Spectora connection | ✓ | — |
| Activate/edit own auto-thank-you | ✓ | ✓ |
| Manage billing and users | ✓ | — |
| Send newsletter to agent list | ✓ | ✓ (own list only) |

### Implementation Considerations

- **AppSumo LTD billing**: LTD purchasers are flagged in the system with a lifetime flag; feature limits (500 agent contacts, 1 Spectora connection) applied at the account level. AppSumo redemption code flow must be tested before launch.
- **Spectora webhook setup**: Guide inspectors through Spectora webhook configuration in onboarding. Provide a fallback CSV re-import flow for inspectors who cannot complete webhook setup (e.g., using Spectora Basic tier that may not support webhooks).
- **Email deliverability**: Shared IP pool managed carefully. Monitor per-domain bounce rates. Auto-pause sending and alert user if bounce rate exceeds 5% for their domain.
- **GDPR considerations**: Agent contact data (name, email, brokerage) is personal data. Architecture must support data deletion requests per agent record. Not primary target initially (US market) but must not be structurally excluded.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product must create a measurable "aha" moment within the inspector's first 7 days: they see which agents are their top referrers (dashboard), they receive confirmation that a thank-you fired automatically after their most recent inspection (notification), and they receive their first Monday digest showing exactly who to reach out to. If all three of these happen in week one, the inspector is retained.

**Resource Requirements:** 1–2 full-stack engineers, 1 part-time designer, 1 founder/PM. Target build time: 6–8 weeks to AppSumo-ready MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo Spectora inspector imports 3–6 months of inspection history → sees agent leaderboard with revenue attribution → activates auto-thank-you → receives Monday digest → sends monthly newsletter to agent list
- Inspector follows a going-cold alert, reaches out, and converts an inactive agent to an active referrer

**Must-Have Capabilities:**
1. Spectora CSV import: parse inspection completion records and auto-populate agent name, email, referral count, last referral date, estimated revenue
2. Spectora webhook connection: real-time sync of completed inspections to agent referral tracking
3. Agent referral leaderboard: sorted by referrals sent (current month, YTD, all-time), with revenue attribution per agent
4. Relationship health scoring: Green/Yellow/Red based on last referral date against configurable inactivity thresholds (default: 60 days = Yellow, 90 days = Red)
5. Going-cold alerts: dashboard widgets and weekly digest highlights for Yellow and Red agents
6. Post-inspection auto-thank-you: triggered via Spectora webhook, pre-built template, customizable, 24-hour send window, one-time setup
7. Weekly relationship health digest: Monday email to inspector with top agents, going-cold agents, one-click "reach out" link per flagged agent with pre-drafted email
8. Pre-built monthly newsletter library: 6 inspector-to-agent templates, one-click send to full agent list or tagged segment, basic scheduling (send now or schedule for specific date/time)
9. Agent contact management: add/edit manually, CSV import, tag management (top-tier, prospect, new, cold), notes field, inspection history per agent
10. Email sending and tracking: open tracking, click tracking, delivered/bounced status per send
11. Guided onboarding wizard: Spectora connection setup, first agent import, auto-thank-you activation — target: <30 minutes to first meaningful value
12. Trial and billing: 30-day free trial (no credit card), $29/month via Stripe, AppSumo LTD code redemption flow

### Post-MVP Features (v1.1)

- Team/firm plan: multi-inspector accounts, firm-level dashboard, cross-inspector attribution, $79/month
- AI-assisted outreach drafting: describe intent, receive a personalized draft for review before send
- Spectora real-time API sync (if API access granted by Spectora)
- SMS outreach to agents as optional escalation channel
- Advanced relationship health scoring: trend-based scoring using referral frequency changes over time (not just last-referral recency)
- Radon/sewer scope inspector support

### Post-MVP Features (v2.0)

- Referral forecasting and seasonal pattern analysis
- Agent recruitment tools (high-volume agents in metro not yet in inspector's network)
- Expansion to adjacent specialty inspection segments
- Data-driven outreach recommendations based on aggregated platform behavior
- InterNACHI marketplace integration
- Zapier integration and API for custom workflows

### Risk Mitigation Strategy

**Technical Risks:** Spectora does not have a public webhook API documented for third-party integrations — the webhook integration depends on Spectora's cooperation or undocumented endpoint behavior. Mitigation: build CSV import as the primary, stable data path for MVP; webhook is an enhancement. If webhook access is unavailable, CSV re-import on a user-triggered or daily scheduled basis achieves 80% of the same value.

**Market Risks:** If Spectora builds native CRM features (their most likely competitive response), the 18-24 month window to establish brand and user base narrows. Mitigation: prioritize rapid distribution through InterNACHI community and AppSumo launch to build user base and collect testimonials before Spectora can react.

**Resource Risks:** If bandwidth is constrained, reduce MVP to the core three features: Spectora CSV import + agent leaderboard + auto-thank-you. Newsletter library and weekly digest can be added in week 4 post-launch. The minimum product that delivers the aha moment is: inspector sees their top agents, and one automated thank-you fires.

---

## Functional Requirements

### Spectora Data Integration

- FR1: User can import a Spectora CSV export file to auto-populate agent records with inspection history (agent name, email, referral count, dates, estimated revenue)
- FR2: System parses standard Spectora inspection export format and maps "referring agent" field to agent records without manual column mapping
- FR3: User can connect their Spectora account via webhook to enable real-time sync of completed inspections
- FR4: System creates or updates an agent record automatically when a new inspection completion syncs via webhook, incrementing referral count and updating last referral date
- FR5: User can view the Spectora connection status, last sync timestamp, and a count of inspections synced
- FR6: System notifies the user via dashboard alert and email when the webhook connection fails or has not received an event for more than 7 days
- FR7: User can manually trigger a re-sync from a CSV at any time to update agent records with newer inspection history
- FR8: System handles duplicate agent records gracefully (same agent email appearing in multiple inspections) by consolidating into a single agent record

### Agent Relationship Dashboard

- FR9: User can view an agent leaderboard sorted by referrals sent, with configurable time windows: current month, year-to-date, last 12 months, all-time
- FR10: System displays for each agent: name, email, brokerage, referral count for selected period, total estimated revenue, last referral date, and relationship health score (Green/Yellow/Red)
- FR11: System computes estimated revenue per agent as referral count multiplied by the inspector's configured average inspection fee
- FR12: System computes relationship health scores on a daily basis: Green (referral within past 60 days), Yellow (61–90 days), Red (91+ days), with user-configurable thresholds
- FR13: Dashboard prominently surfaces agents whose relationship health score has changed from Green to Yellow or Yellow to Red since the prior week
- FR14: User can view a year-over-year comparison for any individual agent showing referral count and estimated revenue for the current period vs. the same period last year
- FR15: User can search and filter the agent list by tag, health score, last referral date range, and brokerage

### Post-Inspection Auto-Thank-You

- FR16: User can activate an automated post-inspection thank-you email that triggers when a new completed inspection syncs from Spectora
- FR17: System fires the auto-thank-you within 24 hours of the triggering inspection sync, to the referring agent's email address on file
- FR18: User can select and customize the thank-you email template (subject line, body text, signature) before activation; the customization applies to all future auto-sends
- FR19: System uses template variables in the thank-you email: {agent_first_name}, {inspector_name}, {property_address}, {inspection_date}, {client_name} (where available from Spectora data)
- FR20: System does not send an auto-thank-you if the inspection record has no referring agent field populated
- FR21: User can view a log of all auto-thank-you emails sent, including agent name, inspection address, send time, and delivery/open status
- FR22: User can pause the auto-thank-you globally or for a specific agent without deactivating the feature

### Weekly Relationship Health Digest

- FR23: System sends an automated weekly email digest to the inspector every Monday morning summarizing: top 5 agents by referrals in the prior 7 days, agents whose health score changed that week, agents flagged as going cold (Yellow or Red), referral count vs. prior week
- FR24: The digest email includes, for each going-cold agent, a pre-drafted check-in message and a one-click "send to agent" link that opens a pre-populated outreach email in the user's email client
- FR25: User can configure the weekly digest day (default: Monday) and time (default: 7:00 AM local time)
- FR26: User can disable the weekly digest email from account settings without affecting other automated features

### Monthly Agent Newsletter Library

- FR27: System provides a library of at least 6 pre-written inspector-to-agent email templates: seasonal home maintenance tips (x2 seasonal variants), market context update, new service announcement, seasonal holiday message, referral program announcement
- FR28: User can preview, edit, and send any newsletter template to their full agent list or to a specific agent tag segment (e.g., "top-tier" only, "prospect" only)
- FR29: User can schedule a newsletter send for a future date and time, with the ability to edit or cancel before the scheduled send time
- FR30: System tracks open rate, click rate, and unsubscribes for each newsletter send and displays the results in the send history
- FR31: User receives an unsubscribe notification when an agent opts out of newsletter emails; that agent is automatically excluded from future newsletter sends and the status is visible on their agent record
- FR32: System enforces a CAN-SPAM compliant footer on all newsletter emails (sender identity, unsubscribe link, physical address)

### Agent Contact Management

- FR33: User can manually add an agent record with: name, email, brokerage, phone, tags, and notes
- FR34: User can import a CSV of agent contacts to create or update agent records in bulk
- FR35: User can assign one or more tags to each agent (top-tier, prospect, new, cold, or user-defined custom tags)
- FR36: User can view the complete inspection history for any individual agent: every inspection that attributed a referral to that agent, with date, property address, and estimated fee
- FR37: User can edit any agent record, add notes, and manually override the relationship health score
- FR38: User can archive an agent record to remove them from active views without deleting their referral history

### Email Delivery and Tracking

- FR39: System supports custom email domain configuration (SPF/DKIM setup guidance) so auto-thank-you and newsletter emails appear to originate from the inspector's own domain
- FR40: System provides a fallback sending domain (product-branded) for users who have not completed custom domain authentication
- FR41: System tracks email open status via pixel tracking and click status via link wrapping for all sent emails (auto-thank-you and newsletter)
- FR42: System displays delivery status (delivered, opened, clicked, bounced) for each sent email in the send log
- FR43: System alerts the user via dashboard notification when an email hard-bounces for a specific agent and suggests updating that agent's email address

### Account, Onboarding, and Billing

- FR44: System guides new users through a step-by-step onboarding wizard covering: Spectora connection (webhook or CSV import), first agent import, auto-thank-you activation, and first newsletter preview — targeting under 30 minutes total
- FR45: User can start a 30-day free trial without providing a credit card; trial includes full feature access
- FR46: User can upgrade to a $29/month paid subscription via Stripe at any time during or after the trial
- FR47: User can redeem an AppSumo LTD code to unlock lifetime access under the LTD feature tier (500 agent contacts, 1 Spectora connection)
- FR48: User can view their current plan, billing history, and upgrade or cancel their subscription from account settings
- FR49: System sends a reminder email 7 days before the trial expires, prompting conversion and explaining what happens to their data if they do not upgrade

---

## Non-Functional Requirements

### Performance

- Agent leaderboard and dashboard views load within 2 seconds for accounts with up to 500 agent records
- Weekly digest emails are queued and delivered within 30 minutes of the scheduled send time for all users
- Post-inspection auto-thank-you emails are sent within 24 hours of the triggering webhook event (target: within 2 hours under normal conditions)
- Spectora CSV import of up to 500 inspection records completes within 60 seconds

### Security

- All user data (agent contacts, inspection records, email templates) isolated per tenant at the database query level; no cross-tenant data access under any code path
- User passwords hashed with bcrypt (cost factor ≥12); never stored or logged in plaintext
- Email credentials and API keys (SendGrid, Stripe) stored as environment secrets, never in application code or logs
- All HTTP communication over HTTPS with TLS 1.2+; HTTP requests redirected to HTTPS
- Agent contact personal data (names, emails) available for deletion per user request to support GDPR data subject rights

### Reliability

- Automated weekly digest emails must succeed or be retried with exponential backoff (max 3 attempts over 4 hours); persistent failure triggers user alert
- Post-inspection auto-thank-you failure (e.g., invalid agent email) must be surfaced in the send log within 1 hour and never silently dropped
- Spectora webhook events must be processed idempotently — duplicate event delivery must not create duplicate agent records or duplicate auto-thank-you sends
- System availability: 99.5% uptime target (excludes planned maintenance windows communicated 48 hours in advance)
- Email send history and agent relationship data must be preserved and recoverable; no data loss on infrastructure failures

### Scalability

- Architecture supports growth to 5,000 active users without redesign; horizontal scaling of application tier, scalable job queue for email automation
- Per-user email sending volume (newsletters to large agent lists) must be rate-limited and queued to prevent a single user's bulk send from degrading delivery latency for other users
- Relationship health score recalculation must run as a background job, not blocking user-facing requests

### Integration Reliability

- Spectora webhook processing: all events processed within 15 minutes of receipt; queue backpressure monitored and alerted
- Email delivery provider (SendGrid or equivalent): automatic retry on transient failures; persistent failure triggers dashboard alert and switches to fallback send domain
- Stripe billing: subscription creation, upgrade, and cancellation events processed reliably; failed payment handled with grace period and email notification per Stripe's dunning flow

---

*This PRD is the capability contract for all downstream architecture, UX, and development work. All epics, stories, and implementation decisions should trace back to the functional requirements listed here. Update this document as product decisions evolve during implementation.*

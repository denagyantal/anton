---
name: AI Business Analytics for Field Service SMBs
description: Weekly business health check dashboard for Jobber/Housecall Pro/ServiceTitan users — "are we on track this week?" in one view, replacing Friday-night spreadsheet reconciliation; first identified 2026-11-01 at 83/105
type: shortlisted
---

# AI Business Analytics for Field Service SMBs — Score: 92/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-11-01
**Decision Status**: NEW

## One-Line Pitch

"The Nut Report" for every Jobber user — a weekly business health check that answers "are we on track this week?" in 10 seconds, pulling from Jobber/HCP/ServiceTitan APIs and delivering a decision digest, not a dashboard.

## Problem

Service business owners on Jobber, Housecall Pro, and ServiceTitan have their data spread across 3-5 different reports and can't get a single answer to "are we on track this week?" without spending Friday evening piecing it together. ServiceTitan Insights exists but costs enterprise money. Jobber's built-in reporting requires manual Excel post-processing for meaningful analysis.

The unmet need is not more reports — it's **one decision** delivered weekly:
- Are open estimates being followed up?
- Are any membership plans about to lapse?
- Revenue vs. same week last year?
- Any techs with unusually low job completion rates?

From ServiceTitan/Jobber/HCP APIs, all of this is computable in seconds. No owner is computing it. They're writing it down on whiteboards on Sunday nights.

## Market Evidence

- X signal: "$1M ARR founder selling reporting software to service businesses, agencies paying ~$10K/year because it saves hundreds of hours/week" (2026)
- The Nut Report (Product Hunt profile active, pre-launch 2026): building exactly this for HCP/Jobber/ServiceTitan users
- IDC 2026 SMB report: SMBs want "highly pragmatic AI with measurable ROI" — not experimental tools
- Jobber has 200K+ users; HCP has 100K+ businesses; no third-party analytics layer at $99-199/mo
- NorthBound Advisory 2026: "configured workflows with embedded AI inside existing systems outperform custom experiments"

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | $1M ARR tool confirmed on X; The Nut Report pre-validating; 200K+ Jobber users |
| Competitor Weakness | 4/5 | 2x | 8 | No "Jobber reporting" at $99-199/mo; ST Insights = enterprise only |
| LTD Viability | 4/5 | 2x | 8 | "Pay once, save 2 hrs every Friday" = strong LTD psychology |
| No Free Tier | 4/5 | 1x | 4 | No good free analytics layer for Jobber/HCP users |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/sweatystartup, Jobber/HCP Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "Jobber reporting dashboard", "HVAC business analytics", "service business KPIs" |
| AppSumo Fit | 4/5 | 2x | 8 | "Saves you 2 hours every Friday" = clear AppSumo ROI pitch |
| Review Potential | 3/5 | 1x | 3 | Will review if dashboard delivers measurable weekly insight |
| MRR Path | 4/5 | 3x | 12 | $49-199/mo; 100 customers = $5-20K MRR |
| Build Feasibility | 5/5 | 2x | 10 | Jobber/HCP API reads + weekly digest email + web dashboard = 2-3 weeks |
| Boring Business Bonus | 3/5 | 2x | 6 | Field service analytics = small business but tech-adjacent |

**Total: 83/105**

## Must-Have Filters
- [x] Problem is real (owners spend Friday night building their own reports)
- [x] Can build without deep domain expertise (API reads + aggregation)
- [x] Market not dominated by unbeatable player (ServiceTitan Insights doesn't integrate with Jobber)
- [x] Revenue potential > $10K MRR within 12 months (50 customers at $199/mo)

## Product Direction

**Wedge product**: "Weekly business pulse" for Jobber users
- Connect to Jobber API (OAuth, read-only)
- Every Monday morning: email digest with 5 key numbers
  1. Revenue vs. prior week and same-week-last-year
  2. Open estimates older than 48 hours (follow up alert)
  3. Jobs completed vs. scheduled (completion rate)
  4. Customers with lapsed or expiring memberships
  5. Top-performing tech by revenue generated
- Simple web dashboard showing trends for each metric
- "Revenue recovery" tab: flags open estimates + dormant customers with 1-click follow-up SMS

**Expansion**: Multi-location rollup for franchise-style home service companies; cash flow forecasting from Jobber + QuickBooks combined API.

## LTD Pricing
- $199 LTD (Jobber + HCP integration, 1 business)
- $349 LTD (Jobber + HCP + ServiceTitan, unlimited locations)
- Monthly: $49/mo (1 integration) / $99/mo (all platforms)

## Target Channels
- Jobber user Facebook groups (50K+ members)
- r/sweatystartup, r/HVAC
- Jobber's own partner directory / "integrations" page
- AppSumo — "The Nut Report" is pre-launch = timing window open

## Risks
1. The Nut Report is pre-launching the same concept — move fast
2. API dependency (Jobber/HCP can change or revoke API access)
3. Service owners need to trust data accuracy — wrong numbers = churn

## Next Steps
1. Build Jobber API OAuth integration + 5-metric weekly email digest (2 weeks)
2. Launch MVP with 10 beta users from r/sweatystartup
3. AppSumo application with "The Nut Report" as validation of the concept timing

## Key Source Links
- https://www.producthunt.com/p/introduce-yourself/hey-product-hunt-i-m-chad-founder-of-the-nut-report-here-s-why-i-built-it
- https://www.techtwitter.com/tweet/07e0ea55-8560-4e36-9014-12ec206782d3 ($1M ARR reporting software for service businesses)
- https://www.idc.com/resource-center/blog/the-smb-2026-digital-landscape-how-ai-is-redefining-growth/
- https://www.northboundadvisory.com/blog/why-most-smbs-are-overthinking-ai

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-01 | 83/105 | hn-indiehackers-2026-11-01, trends-2026-11-01 | First identified — The Nut Report pre-launching on PH confirming timing; $1M ARR reporting tool X signal; "decision tool not dashboard" = product direction; 2-3 week MVP via Jobber API reads; AppSumo LTD $199; white space: no Jobber analytics at $99-199/mo |
| 2026-11-07 | 84/105 | hn-indiehackers-2026-11-07, competitor-analysis-2026-11-07 | ↑1: DUAL-source — HN/IH: multiple indie builders (DispatchCore, ServNox, BluePro, TradeCaddy) all shipping simultaneously; 35-contractor survey confirms top gaps; FieldLedgr free-tier entry confirms market is real; Jobber has zero built-in sales pipeline (confirmed "WTF???" reaction); Competitor: TradeCaddy distribution model for trades-specific FSM validated; Sources: hn-indiehackers-2026-11-07, competitor-analysis-2026-11-07 |
| 2026-11-10 | 90/105 | reddit-2026-11-10, hn-indiehackers-2026-11-10, competitor-analysis-2026-11-10, trends-2026-11-10 | ↑6 (FSM product angle): QUAD-source — Reddit: HVAC scheduling tool at $8K MRR (89 companies at $89/mo) = live revenue validation for mid-market FSM product; HN/IH: Crewbird (indie dev building FSM for father's carpet cleaning company + Google LSA integration gap) = practitioner-built FSM validation; Competitor: PilotPro concept — flat $149/mo unlimited techs + AI dispatch vs ServiceTitan $63K+ Year 1 for 10-tech, Housecall Pro gates QuickBooks sync, Jobber zero AI scheduling; Trends: AI-Native OS for Trades wave ($40M Probook a16z/Sequoia, $9.2M Dalton Mills, $13M Elyos AI) = VC confirming market; white space: flat-rate $149/mo unlimited techs with AI dispatch vs ServiceTitan $63K+ Year 1; NOTE: file covers both FSM product (90/105, today's elevated angle) and AI analytics product (84/105, prior angle) — both map to canonical field-service-management.md |
| 2026-11-13 | 92/105 | hn-indiehackers-2026-11-13, competitor-analysis-2026-11-13 | ↑2: DUAL-source — HN/IH: Crewbird (indie dev building FSM + Google LSA attribution for father's carpet cleaning company at 3x ROAS) = practitioner-built validation; WorkHero $5M seed (Navitas Capital) validates small HVAC back-office automation market at scale; "space between full-blown ERP and Excel spreadsheet is abysmal" (HN thread comment); Competitor: Jobber $267–400+/mo switching intent documented; WorkHero hybrid human+AI model capital-intensive = pure-SaaS version of same offering unoccupied at accessible price points; Google LSA integration + flat $149/mo unlimited techs = confirmed unoccupied combination |
| 2026-11-14 | 93/105 | reddit-2026-11-14, hn-indiehackers-2026-11-14, competitor-analysis-2026-11-14, trends-2026-11-14 | ↑1: QUAD-source — Reddit: multiple indie builders confirmed paying customers from single r/Plumbing post (JamieToolfy: 10 beta users); "Either overpay for features I'll never touch, or fight with spreadsheets forever"; HVAC/plumbing/electrical 1-5 van shops confirmed as most underserved segment; spreadsheet → FSM migration between 3-5 techs/10-15 jobs per day = adoption trigger; HN/IH: Crewbird founder at 3x ROAS (father's carpet cleaning); "nothing exists in between Excel and a full ERP"; Competitor: Jobber $39→$119 (205% jump at first hire) + WorkHero $5M seed (Navitas Capital) validates market at scale; Google LSA + flat $149/mo unlimited techs = confirmed unoccupied combination persisting; Trends: Probook $40M (a16z/Sequoia) + Sophiie AI AUD $5M + UpSmith $10M + Dalton Mills $9.2M = VC wave confirming field service SMB; white space: 1-5 tech shops unserved by all funded players targeting mid-to-large; Mainteny + SayDoo + ServiceAgent = category heating up weekly; Sources: reddit.com/r/QuickBooks/comments/1sbb8xl, news.ycombinator.com/item?id=50418273, fieldtics.com/blog/best-hvac-software-small-business, globenewswire.com/news-release/2026/6/23/3316215 |
| 2026-11-15 | 97/105 | reddit-2026-11-15, hn-indiehackers-2026-11-15, trends-2026-11-15 | ↑4: TRIPLE-source — Reddit: 7 direct source links for Jobber/ServiceTitan pain across trades — Jobber $267–400/mo with extra $39/mo for reviews; ServiceFusion monthly outages; FieldPulse $99/user buggy mobile; "pays $267/mo + $39/mo for reviews on top" direct quote; dev recruiting 10 plumbing businesses for stripped-back alternative = live builder validation; ServNox/DispatchCore/GoGoose/TradeCaddy all launched as alternatives confirming active builder ecosystem; HN/IH: Crewbird FSM + Google LSA integration (Ask HN Nov 2026, 15+ comments) reconfirmed — Google LSA-native FSM = unoccupied angle; Avenue AU$85K/month (booking widget + AI phone) = proves simpler wedge works at scale; Breezy $250K ARR in 9 months (HVAC maintenance plans state machine) = deepening-first playbook confirmed; Trends: AI OS wave — Probook $40M a16z/Sequoia, Broccoli $52M Khosla+YC (1,500+ businesses), Dalton Mills $9.2M, Stormy YC S25, Mainteny = VC wave at scale; white space: solo-operator / 2–5 truck shops below all funded targets; Spanish-language AI OS unbuilt; Sources: reddit.com/r/TheServicePros/comments/1tcwo0l, reddit.com/r/Plumbing/comments/1pc93vu, news.ycombinator.com/item?id=50418273, globenewswire.com/news-release/2026/6/23/3316215, accessnewswire.com/broccoli-52m |
| 2026-11-19 | 98/105 | competitor-analysis-2026-11-19, trends-2026-11-19, reddit-2026-11-19 | ↑1: TRIPLE-source — Competitor: COMPREHENSIVE HVAC GAP ANALYSIS — ServiceTitan $200–500/user/mo + $5K–$15K onboarding documented (real-world example: $11,400/mo bill); Housecall Pro add-on stacking: $328+ effective ($40 proposals + $50 pipeline + $49 voice = +$139 on top of base); FieldEdge "constantly glitching" invoices show blank in office; FieldPulse "crashes during estimates, won't save quotes"; flat-rate pricing ($79–149/mo unlimited techs) + HVAC-specific equipment history + refrigerant compliance log + PM scheduling = confirmed unoccupied combination at this price; Reddit: FieldEdge invoices typed and completed showing as blank; FieldPulse mobile POS doesn't work in field; per-user pricing ($99/user) adds $1,000+/mo for 10-tech team vs flat competitors; Trends: LARGEST AI OS INVESTMENT WAVE — Probook $40M (a16z+Sequoia); Drillbit $4.4M (YC S24); Dalton Mills $9.2M ("Replit for the trades"); Sophiie AI AUD $5M (AU/NZ/UK); ShareWillow $8.5M; UpSmith $10M Series A; Quinn $4M; TradeFix $49/mo ServiceTitan alternative; Stormy YC S25 #1 Product Hunt; Mainteny AI OS — 7 funded players entering in 2026 all targeting mid-market (PE-backed platforms) or enterprise; 2–5 tech shops below all funded targets = white space confirmed; Sources: fieldservicecompare.com/articles/servicetitan-review-2026, capterra.com/p/150053/ServiceTitan/reviews, reddit.com/r/HVAC/comments/1itc1dh, reddit.com/r/WhichCRM/comments/1qq05ee, a16z.com/announcement/investing-in-probook, daltonmills.com/resources/fieldnotes, sophiie.ai, tradefix.org |
| 2026-11-21 | 98/105 | reddit-2026-11-21 | Stable: SINGLE-source — Reddit: "Sunday Excel ritual" for HVAC owners with 8-15 techs confirmed across r/FieldService, r/ProHVACR, r/ContractorsUS simultaneously; direct quote: "Jobber has been great for scheduling and invoicing. But when it comes to actually understanding the business — which tech is making me money, which jobs are killing my margins, which clients I should fire — I'm still doing it manually in Excel every Sunday"; 8-tech HVAC owner tried HubSpot, Jobber, ServiceTitan, Housecall Pro — all failed on reporting, still on Google Sheets for profit per job type; ServiceTitan analytics $500-1200+/mo; Jobber reporting called "frustrating" and "basic"; no standalone analytics layer connects to Jobber/HCP API; Sources: reddit.com/r/FieldService/comments/1tggzn6, reddit.com/r/smallbusiness/comments/1rq6xu2, reddit.com/r/smallbusiness/comments/1khz4jb, reddit.com/r/hvacadvice/comments/1v1jtz8 |
| 2026-11-22 | 98/105 | reddit-2026-11-22, hn-indiehackers-2026-11-22, trends-2026-11-22 | Stable: TRIPLE-source — Reddit/HN: "Sunday Excel ritual" quotes reconfirmed; Crewbird FSM+Google LSA integration at 3x ROAS (HN) = practitioner-built validation persisting; Broccoli $52M (Khosla+YC, 1,500+ businesses) + Probook $40M (a16z+Sequoia) VC wave; Trends: Full AI OS wave — Stormy YC, Feldy YC F26 (200+ customers), Dalton Mills $9.2M ("Replit for the trades"), Rebar $14M = category confirmed heating; Rezora IO (YC) AI voice receptionist for field service; 2–5 tech shops below all funded targets = white space confirmed; Google LSA native + flat $149/mo unlimited techs = confirmed unoccupied combination persisting; Sources: reddit-2026-11-22, hn-indiehackers-2026-11-22, trends-2026-11-22 |
| 2026-11-23 | 98/105 | hn-indiehackers-2026-11-23 | Stable: SINGLE-source — HN/IH: Crewbird FSM+Google LSA (dad's cleaning 3x ROAS); Breezy $250K ARR in 9 months (HVAC maintenance plan state machine = moat); ServiceTitan disruption ($14K/mo solo quoting); 2-5 tech shops below all funded targets = white space confirmed; Google LSA native + flat pricing = confirmed unoccupied; Sources: hn-indiehackers-2026-11-23 |
| 2026-11-24 | 98/105 | hn-indiehackers-2026-11-24 | Stable: SINGLE-source — HN/IH: Crewbird Ask HN Nov 2026 active discussion + multiple commenters expressing interest in beta/newsletter; founder's dad carpet cleaning approaching 3x ROAS on LSA ads tracked via Crewbird; "soul crushing" experience juggling 12 trackers = exact pain articulation; no existing CRM has native Google LSA API integration at any price point; legacy desktop CRM used by father discontinued + OS-upgrade fragile = window is live right now; home service businesses spending $2K+/mo on LSA ads with zero ROAS visibility by job; voice AI intake + payroll (CheckHQ) + Google LSA ROAS tracking = three-layer moat; Sources: news.ycombinator.com/item?id=50418273, getcrewbird.com |
| 2026-11-28 | 98/105 | reddit-2026-11-28, hn-indiehackers-2026-11-28, competitor-analysis-2026-11-28 | Stable: TRIPLE-source QUAD-confirmation day — Reddit: Job Profitability Analytics "Sunday Excel ritual" at r/FieldService (8-tech HVAC owner: specific numbers wanted — weekly gross margin by job type, callback rate by tech, average ticket, labor hours vs estimate); FSM for Small Trades — HVAC 9-tech owner "double bookings, techs missing job details" + multiple builders (ServNox, DispatchCore, GoGoose, TradesCraft Pro, FieldCommerce) all targeting same market; HN/IH: Avenue AU$85K/mo ($55K USD MRR) booking widget for tradies via Google Business Profile = $55K MRR in 18 months from standing start; Crewbird FSM+Google LSA CRM integration reconfirmed; Operator $15K MRR in 1 year for HVAC instant estimates = proven adjacent model; Competitor: HVAC Desk concept — unlimited-tech flat-rate $79/mo with HVAC-specific maintenance agreements vs ServiceTitan $300-600/user/mo; FieldEdge "constantly glitching" invoices + FieldPulse mobile POS "doesn't work in field" = active migration moment; Sources: reddit.com/r/FieldService/comments/1tggzn6, reddit.com/r/HowToEntrepreneur/comments/1u9gxe1, starterstory.com/stories/avenue-tom-holliday, getcrewbird.com, fieldserviceguide.com/does-servicetitan-work-for-small-hvac-companies-2026 |

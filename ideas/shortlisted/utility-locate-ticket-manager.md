---
name: 811 Utility Locate Ticket Manager
description: Mobile app for excavation/construction contractors to track 811 utility locate ticket expirations, photos, and renewals — replacing spreadsheets for 43M tickets filed annually
type: shortlisted
---

# 811 Utility Locate Ticket Manager — Score: 86/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Decision Status**: NEW
**Evaluation Date**: 2026-11-04
**LTD Price**: $59–99

## One-Line Pitch

Before any excavation, contractors must call 811 to locate underground utilities — but tracking ticket expirations (10–30 days depending on state), utility responses, and field photos is 100% spreadsheet/memory based at most construction companies. This is a 2-3 week mobile app with a clear safety/liability ROI.

## Problem

**43 million 811 "Call Before You Dig" tickets are filed in the US each year.** Every contractor who excavates — from solo landscapers to municipal utility crews — must file a ticket before digging. The workflow:

1. File 811 ticket → receive confirmation email with ticket number
2. Utilities (gas, electric, water, fiber) respond within 2-3 business days with marks on the ground
3. The ticket is valid for 10–30 calendar days (varies by state)
4. If not renewed before expiry → expired ticket → code violation + potential safety incident

**The tracking problem**: The vast majority of contractors track this lifecycle with:
- A spreadsheet of ticket numbers + dates they copied from emails
- A sticky note or calendar reminder for expiry
- Photos on a personal phone that aren't linked to the ticket
- Their memory

An r/ConstructionManagers thread explicitly asked what still runs on spreadsheets in 2026, and the top answer was: "811 ticket management. In 2026. On a process where getting it wrong can cost six figures and put people in the hospital."

This is not a niche edge case — it's a daily operational workflow for 2M+ contractors that generates 43M events per year with zero modern software serving the sub-$1,000/month segment.

## Market Evidence

- **43 million** 811 tickets filed annually in the US (Common Ground Alliance)
- YC-backed **Clad Locates** is early-stage validating the category — YC funding = strong market signal
- **811spotter** exists but limited adoption and minimal feature set
- 811Assist (intermediary service) is expensive for the value; most small contractors are unserved
- r/ConstructionManagers thread had strong community resonance — the "six figures and put people in the hospital" quote shows the stakes are real
- Fines for digging on an expired ticket: typically $5,000–$50,000+ in damages + remediation costs

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 43M tickets/year; YC-backed Clad validates market; $6K+ fines for expired tickets documented |
| Competitor Weakness | 5/5 | 2x | 10 | 811spotter limited; Clad early-stage/unproven; 95% of contractors entirely unserved |
| LTD Viability | 5/5 | 2x | 10 | Simple CRUD + push notifications; zero AI/ML costs; $59-99 LTD very viable |
| No Free Tier | 4/5 | 1x | 4 | No free tool purpose-built for 811 ticket lifecycle management |
| Channel Access | 3/5 | 2x | 6 | r/ConstructionManagers, excavation Facebook groups; smaller but highly targeted community |
| Content Potential | 3/5 | 1x | 3 | "811 ticket tracking", "utility locate management", "dig safe ticket software" |
| AppSumo Fit | 3/5 | 2x | 6 | Niche but clear ROI; construction adjacent to AppSumo buyer demographic |
| Review Potential | 3/5 | 1x | 3 | Small community but safety + liability motivation drives passionate reviews |
| MRR Path | 4/5 | 3x | 12 | Expand from 811 to full permit tracking for contractors; $29-49/mo ongoing compliance need |
| Build Feasibility | 5/5 | 2x | 10 | Mobile app: scan email → extract ticket # + expiry → push alert → renewal → photo log; 2-3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Excavation/construction = deeply blue-collar; "digging in the dirt" is peak boring business |
| **TOTAL** | | | **86/105** | |

## Must-Have Filters
- [x] Problem is real (43M tickets/year; documented fines for expired tickets; Reddit thread with high resonance)
- [x] Can build without deep domain expertise (CRUD: ticket # + expiry + utility responses + photos + renewal; rules are publicly documented)
- [x] No dominant affordable player (Clad early-stage; 811spotter limited; nothing at $29-49/mo)
- [x] Revenue potential > $10K MRR within 12 months (350 small GCs/excavators at $29/mo = $10,150 MRR; NUCA + excavation Facebook groups = distribution)

## Boring Business Fit Check
- [x] VCs ignore utility locate tracking entirely (Clad is very early-stage, YC signal only)
- [x] Construction crews are non-technical (good — they want it to work on a phone with one hand)
- [x] No modern affordable software exists (good — no competitor to compare against in sales conversations)
- [x] Real liability (expired ticket = safety incident + fine; legal motivation to pay)
- [x] Once ticket history and job list is in the system, switching cost is real

## Product Concept: "TicketGuard"

**Core MVP (2–3 weeks):**
1. **Ticket intake** — Scan/forward confirmation email → auto-extract ticket number, state, expiry date, job address
2. **Ticket dashboard** — All active tickets sorted by days until expiry; color-coded (green/yellow/red)
3. **Push notifications** — Alert 7, 3, and 1 day before expiry; alert if crew digs on an expired ticket (manual check-in)
4. **Photo log** — Attach GPS-tagged photos of utility marks to each ticket (before-dig documentation)
5. **Renewal tracking** — Log renewal date, new expiry, notes
6. **Job linking** — Associate multiple tickets with a single job/project

**Phase 2:**
- State-specific rules library (expiry windows vary by state: 10 days in some, 30 in others)
- One-tap renewal reminder to 811 center via embedded portal
- Utility response tracker (which utilities have responded, which are still pending)
- PDF report export per job (for client handoff and insurance)
- API integration with common GC project management tools (Procore, Buildertrend)

## Pricing

- **$29/month** — up to 10 active tickets, unlimited photo storage, automated reminders
- **$49/month** — unlimited tickets, all features + multi-user (up to 5 crew members)
- **$79/month** — unlimited + API access + white-label contractor portal
- **LTD**: $59 (up to 10 active tickets, lifetime updates); $99 (unlimited tickets + 5 users)

## Target Channels

- **Reddit**: r/ConstructionManagers, r/Construction, r/civilengineering, r/landscaping
- **Facebook Groups**: "Excavation Contractors Network", "Utility Contractors", "General Contractors of America"
- **Industry associations**: NUCA (National Utility Contractors Association) member newsletter; ACCA excavation chapter
- **SEO**: "811 ticket management software", "call before you dig tracker", "utility locate tracking app", "dig safe ticket software"
- **Direct outreach**: Municipal public works departments (heavy ticket volume, paper-based workflows)

## Competitive Moat

- **State rules library** — Building a comprehensive, accurate database of 811 rules by state (expiry windows, renewal requirements, utility response expectations) = defensible knowledge moat
- **Photo documentation** — GPS-stamped, ticket-linked photos protect against disputes and insurance claims; once a contractor has 100+ jobs documented, they won't want to lose that history
- **Email integration** — Parse confirmation emails from each state's 811 center automatically = best UX for high-volume contractors

## Risks

1. **Clad (YC-backed) has distribution advantage** — YC network + funding = faster growth potential; counter by being first to market, building community in NUCA
2. **Small initial TAM** — 2M+ contractors file 811 tickets but only subset does it systematically; solo landscapers may not need a formal tool for 1-2 tickets/month
3. **State-by-state complexity** — Each state has different 811 rules; building/maintaining accurate rules library requires ongoing research effort

## Key Source Links

- https://www.reddit.com/r/ConstructionManagers/comments/1t0vki0/what_part_of_your_job_still_runs_on_spreadsheets/
- https://wifitalents.com/best/811-ticket-management-software/
- https://ycombinator.com/companies/clad
- https://call811.com (Common Ground Alliance — 43M ticket stat source)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-04 | 86/105 | reddit-2026-11-04 | First identified — r/ConstructionManagers explicitly names 811 ticket management as top spreadsheet pain; "In 2026. On a process where getting it wrong can cost six figures and put people in the hospital"; YC-backed Clad Locates validates category but early-stage and unproven; 43M tickets/year = massive operational volume; mobile-first MVP: email scan → auto-extract → expiry alerts → photo log → renewal; $29-49/mo flat; $59-99 LTD; NUCA + excavation Facebook groups = distribution |

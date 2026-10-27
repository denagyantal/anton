# Repair Shop Management SaaS — RepairShopr Replacement

**Score**: 95/105 | **Tier**: 1 | **Verdict**: BUILD | **Evaluation Date**: 2026-10-27

## One-Line Pitch
Flat $49/mo repair shop management for phone, tablet, and computer repair shops — built for RepairShopr/RepairDesk refugees fleeing broken software and per-location pricing traps.

## Problem
RepairShopr ($139.99/mo) has been failing publicly since 2022: broken SMS, lost tickets, no support. RepairDesk ($99/mo) charges per-location — killing shops that do home visits or have two benches. No mature product exists at $39-49/mo for solo/2-tech repair shops. An active churn event is happening RIGHT NOW in 2026.

Specific pain points:
1. **RepairShopr dying**: SMS notifications broken, tickets get lost, customer support non-existent since company acquisition 2022. Multiple Capterra 1★ reviews in 2026.
2. **RepairDesk per-location trap**: mobile repair shops doing home visits or pop-up locations get hit with per-location fees. A 1-tech operation with 2 service locations pays $198+/mo.
3. **RepairFlow EU/UK only**: €29/mo, beta-stage, missing REST API and live ticket tracking. No US availability.
4. **Syncro $139/user/mo**: MSP-focused, overkill for a phone repair shop, not designed for ticket → diagnosis → customer approval → repair → pickup workflow.
5. **No data migration path**: shops trapped in RepairShopr can't easily export their ticket history, customer database, and repair logs.

## Target Customer
Solo and 2-technician phone, tablet, and computer repair shops:
- 20-80 repair jobs per month
- $3,000-12,000 monthly revenue
- Currently paying $99-140/mo for software that's failing them
- Non-technical owners who just want jobs tracked cleanly

Market: Phone repair software market $2.8B (2025), growing 8.3%/yr. Capterra has dozens of recent 1-star RepairShopr reviews.

## Competitive Landscape

| Tool | Price | Problem |
|------|-------|---------|
| RepairShopr | $139.99/mo | Dying — broken SMS, lost tickets, no support since 2022 |
| RepairDesk | $99/mo | Per-location pricing kills mobile/multi-bench shops |
| RepairFlow | €29/mo | EU only, beta, missing REST API + live ticket tracking |
| Syncro | $139/user/mo | MSP-focused (IT managed services), not repair-shop workflow |

**Dead zone**: $0 - $90/mo for a flat-rate, US-based, properly-supported repair shop management tool. Nothing exists.

## Product Concept
**"BenchMate"** (or "RepairDesk Free") — flat $49/mo, no per-location fees, no ticket caps.

Core workflow (4-week MVP):
1. Ticket intake (customer name, device, issue description, photos)
2. Diagnosis notes + estimated cost
3. Customer SMS/email approval (approve or decline repair before starting)
4. Repair tracking + parts used
5. Pickup notification + invoice
6. Customer history per device type

**First-class feature**: RepairShopr data migration tool. Export CSV from RepairShopr → import all customers, ticket history, devices. This converts the active churn event into a direct acquisition funnel.

**Differentiators vs RepairShopr**:
- Flat pricing (no per-location, no per-tech fees)
- SMS approvals that actually work
- Responsive support (RepairShopr's #1 complaint)
- Clean data migration from RepairShopr

## Go-to-Market
**Launch strategy**: "RepairShopr refugees" — target r/mobilerepair and r/computerrepair with a migration offer. Build the CSV importer first, announce in those communities. The existing community pain creates a ready-made acquisition channel.

**Channels**:
- r/mobilerepair (RepairShopr complaints thread)
- r/computerrepair ("the market is confusing" Jun 2026 thread)
- iFixit community/forums
- Repair tech YouTube creators
- AppSumo LTD ($299-499 one-time) — "pay once, escape $140/mo forever"

**LTD positioning**: Shop paying $140/mo = $1,680/yr. LTD at $299 = 2-month payback. LTD at $499 = 3.5-month payback. Both are obvious ROI for any rational buyer.

## Revenue Model
- Launch: AppSumo LTD ($299-499) — target 300-500 units = $90K-250K
- Ongoing: $49/mo flat (no per-tech, no per-location)
- Add-ons: SMS premium tier ($10/mo), multi-location ($19/extra location), white-label invoice portal ($29/mo)
- Data migration service: $199 one-time for assisted migration from RepairShopr

## Build Feasibility
4-week MVP. Stack: React + Node.js + PostgreSQL + Twilio (SMS) + Stripe.
- Week 1: ticket intake + customer DB + device tracking
- Week 2: diagnosis flow + customer approval (SMS/email)
- Week 3: repair tracking + pickup notification + invoicing
- Week 4: RepairShopr CSV importer + polish + AppSumo submission

## Risks
1. RepairShopr revival/acquisition could remove urgency (monitor monthly)
2. Market smaller than HVAC/plumbing FSM (fewer shops than trades)
3. EU-focused RepairFlow may expand to US with funding
4. Technical: SMS delivery reliability requires good Twilio integration

## Must-Have Checklist
- [x] Problem is real (active churn event, multiple Reddit threads, Capterra 1★ reviews 2026)
- [x] We can build MVP without deep domain expertise (ticket/invoice workflow is standard)
- [x] Market not dominated by single unbeatable player (RepairShopr is dying, RepairDesk has per-location trap)
- [x] Revenue potential > $10K MRR within 12 months (300 customers × $49/mo = $14.7K MRR)

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-27 | 95/105 | reddit-2026-10-27, microgaps.com research | First identified — active churn event NOW: RepairShopr dying publicly (broken SMS, lost tickets, no support since 2022); RepairDesk $99/mo per-location trap confirmed; RepairFlow EU only; zero flat $39-49/mo option confirmed; $2.8B market; multiple Reddit threads across r/mobilerepair, r/computerrepair, r/smallbusiness; AppSumo LTD $299-499 = 2-3 month payback vs $140/mo current spend; RepairShopr CSV migration tool = first-class launch feature; Sources: microgaps.com/gaps/solo-repair-shop-management-repairshopr-replacement, reddit-2026-10-27 |

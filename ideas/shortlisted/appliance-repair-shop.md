# Appliance Repair Shop FSM (Parts + Warranty)

**Score**: 80/105 | **Tier**: 1 | **Verdict**: BUILD | **Evaluation Date**: 2026-06-08

## One-Line Pitch
Purpose-built field service management for independent appliance repair shops — parts lookup, OEM warranty claim tracking, and "waiting for part" job status in one flat-rate tool at $79 LTD.

## Problem
Independent appliance repair shops (1–10 technicians) have a workflow that generic FSM tools (Jobber, Housecall Pro, mHelpDesk) do not handle:
1. **Parts lookup**: technicians need to look up OEM part numbers and order from multiple distributors (RepairClinic, PartSelect, local supply houses) mid-job
2. **Parts-on-order job status**: the "waiting for part" state is a unique workflow gap — jobs stay open for days/weeks while parts are in transit; no current tool tracks this well
3. **OEM warranty claim tracking**: when repairing an in-warranty appliance (e.g., Samsung fridge in manufacturer warranty), shops must submit claims to OEM warranty portals — completely manual in all current tools
4. **Model/serial number history**: tracking which appliances a customer owns and the complete service history per appliance is table-stakes for repeat business

ServiceTitan ($200+/tech/month) is too expensive. Generic FSM tools lack parts-specific workflows. ServicePower has warranty management but is enterprise-only.

## Market Evidence
- ~30,000 independent appliance repair businesses in US, mostly 1–5 technicians
- Parts market alone is $3B/year — every shop is ordering from RepairClinic, PartSelect, or local supply houses daily
- Workiz, BuildOps, FieldProxy all have "appliance repair software comparison" pages = confirmed paying market
- myQuoteIQ, ApplianceRepairBusiness.com community = active small business search for software
- ServiceTitan is the incumbent complaint target: "$200+/tech/month" cited repeatedly in reviews

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 30K shops, $3B parts market, mHelpDesk/ServiceWork/ServicePower all validated |
| Competitor Weakness | 4/5 | 2x | 8 | No affordable tool does parts lookup + OEM warranty claim tracking |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD replaces $49–99/mo; repair shops hate subscriptions |
| No Free Tier | 4/5 | 1x | 4 | No free appliance-repair-specific tools exist |
| Channel Access | 3/5 | 2x | 6 | r/appliancerepair, Appliance Repair Business Forum, ASTI network |
| Content Potential | 3/5 | 1x | 3 | "Appliance repair software", "parts tracking repair shop" |
| AppSumo Fit | 4/5 | 2x | 8 | Niche B2B, 30K shops = viable AppSumo audience |
| Review Potential | 3/5 | 1x | 3 | Will review if parts chaos solved |
| MRR Path | 4/5 | 3x | 12 | Parts API + warranty portal = ongoing value |
| Build Feasibility | 3/5 | 2x | 6 | Core FSM in 4 weeks; parts API integration adds 2–3 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Appliance repair = deeply boring, VC-invisible |

## Must-Have Filters
- [x] Problem is real (evidence of people paying for solutions)
- [x] Can build MVP without deep domain expertise
- [x] Market not dominated by single unbeatable player
- [x] Revenue potential > $10K MRR within 12 months

## Key Differentiators
1. **Parts lookup built in** — search RepairClinic/PartSelect by model number without leaving the job ticket
2. **"Waiting for part" job status** — discrete status with ETA tracking and customer SMS notification when part arrives
3. **OEM warranty claim tracker** — log claim number, submission date, expected reimbursement, follow-up reminders
4. **Appliance history per customer** — model number, serial number, purchase date, full service history
5. **Flat-rate pricing** — $49/month or $79 LTD for the whole shop, not per-technician

## Target Channels
- r/appliancerepair
- ApplianceRepairBusiness.com forums
- ASTI (Association of Service and Technicians in the Industry)
- Local appliance supply house newsletters (RepairClinic partner network)
- Facebook groups "Appliance Repair Business Owners"
- AppSumo (LTD at $79)

## Top 3 Risks
1. RepairClinic/PartSelect API access may be restricted — could require scraping (legal/maintenance risk)
2. ServicePower or a larger platform could add an affordable SMB tier
3. 30K shops is a niche TAM — AppSumo launch needs perfect targeting to hit the audience

## Product Concept
**"The FSM designed for shops where the job isn't done until the part shows up"**

Core MVP:
- Job tickets with model/serial number fields + appliance history
- Parts-on-order job status with distributor, part number, order date, ETA
- Customer SMS when "your part has arrived, we'll call to reschedule"
- OEM warranty claim log (Samsung/LG/Whirlpool warranty portal claim numbers)
- Parts lookup: type model number → search RepairClinic/PartSelect API inline
- Flat-rate invoicing with parts markup calculation

Phase 2:
- Direct ordering API (place order from within app)
- OEM warranty claim auto-submission
- QuickBooks sync

**Price**: $49/month flat (no per-tech fees) | **LTD**: $79 on AppSumo

## Source Links
- https://www.workiz.com/blog/tips-tricks/best-appliance-repair-software-comparison/
- https://www.fieldproxy.ai/resources/blog/best-appliance-repair-software-9-solutions-compared-for-small-business-d1-11
- https://myquoteiq.com/top-8-softwares-for-appliance-repair-in-2026/
- https://buildops.com/resources/appliance-repair-management-software/

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-06-08 | 80/105 | reddit-2026-06-08 | First identified — Reddit pain point research; parts-on-order workflow gap + OEM warranty claim tracking = unique differentiator |

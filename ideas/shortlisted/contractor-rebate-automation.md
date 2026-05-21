---
name: Contractor Rebate & Permit Automation (Rebate Robot)
description: AI tool that finds and files manufacturer/utility/federal rebates for HVAC contractors — one successful claim ($500–$2,000) pays for the product in its first use
type: project
---

# Contractor Rebate & Permit Automation ("Rebate Robot")

**Score**: 85/105
**Verdict**: BUILD
**LTD Price**: $99 (software layer) OR 15% of rebate value (success-fee)

## One-Line Pitch
The "TurboTax for HVAC rebates" — connect your install records, we surface every eligible rebate (federal, utility, manufacturer), pre-fill the paperwork, and track claims to payment.

## Problem
HVAC contractors install qualifying equipment (high-efficiency heat pumps, AC units) daily but leave thousands in rebates unclaimed because:
1. Rebate programs are fragmented (federal Inflation Reduction Act credits, state utility company programs, ENERGY STAR, individual manufacturer programs)
2. Each program has different eligibility rules, deadlines, and forms
3. Solo/small contractors have no one to track this; they lose $500–$2,000 per qualifying install

The back-office burden also extends to **permits** (vary by municipality, require specific forms) and **warranty registrations** (often left incomplete, costing contractors on claims). Faraday.so is automating this for enterprise contractors. Nobody serves the 1–10 truck small operator.

## Market Evidence
- $600B home services industry in the US (HVAC + plumbing + electrical)
- 145K HVAC businesses in the US; majority are small independent shops
- One successful rebate claim: $500–$2,000 in recovered revenue
- Inflation Reduction Act (IRA) added $9B+ in new residential clean energy rebates (2023–2032) — most contractors are not capturing this
- Faraday.so hiring signal (HN "Who is Hiring" Feb 2026): "automating back office for $600B home services industry with AI agents handling permits, warranties, rebates"
- Elyos AI (YC, $13M Series A) confirmed AI agent demand for trades back-office

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Faraday doing this at enterprise; $600B market; IRA rebates = government mandate |
| Competitor Weakness | 5/5 | 2x | 10 | No affordable tool exists; Faraday is enterprise B2B only |
| LTD Viability | 3/5 | 2x | 6 | Success-fee more natural; but $99 LTD for software layer viable as wedge |
| No Free Tier | 5/5 | 1x | 5 | No free rebate tracking tool for individual contractors |
| Channel Access | 4/5 | 2x | 8 | ACCA, PHCC, HVAC contractor Facebook groups, r/HVAC, supply house networks |
| Content Potential | 4/5 | 1x | 4 | "HVAC rebate finder", "IRA rebate contractor", "utility rebate software" |
| AppSumo Fit | 3/5 | 2x | 6 | Quantifiable ROI but success-fee model may confuse LTD framing |
| Review Potential | 4/5 | 1x | 4 | Contractors who claim $1,500 rebates will enthusiastically refer and review |
| MRR Path | 4/5 | 3x | 12 | Success fee (15% of rebate) OR $99–199/mo subscription; each new install = new opportunity |
| Build Feasibility | 4/5 | 2x | 8 | Rebate database + form generation + install record tracking = 4–6 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC contractor back-office = definitional boring business |

**Total: 85/105**

## Key Differentiators
1. **Auto-identify eligibility** — connect equipment install records, system surfaces all eligible programs (IRA, state, utility, manufacturer)
2. **Pre-filled claim forms** — AI generates ready-to-submit paperwork from install data
3. **Claim tracking dashboard** — monitor status of submitted claims to payment
4. **Success-fee pricing option** — "pay 15% only when you get paid" eliminates adoption friction
5. **Permit application templates** — municipality-specific permit forms auto-populated from job data

## Product Concept
"Rebate Robot" — contractor connects equipment installs (CSV, photos, model numbers) → system matches against federal (IRA), state, utility, and manufacturer databases → generates pre-filled claim forms → tracks submission status → alerts when payment received.

**Pricing options**:
- **Success fee**: 15% of rebate value (no upfront cost, self-selling)
- **Flat subscription**: $99–199/month for unlimited rebate management
- **LTD**: $99 (up to 100 rebate lookups/year) as AppSumo hook

## Next Steps
1. Build rebate database scraper (ENERGY STAR, AHRI, major utilities in top 5 states)
2. Create manual MVP — contractor submits install details, team manually identifies and files rebates (validate WTP on success-fee)
3. Automate: form generation from equipment data
4. Add permit module: permit form templates by municipality
5. Launch via ACCA member newsletter and PHCC

## Target Channels
- ACCA (Air Conditioning Contractors of America) — direct member distribution
- PHCC (Plumbing-Heating-Cooling Contractors) — 3,700 member companies
- r/HVAC (330K+), r/sweatystartup
- HVAC supply house networks (Ferguson, Winsupply)
- Manufacturer rep agencies — they want their rebates claimed

## Risks
1. Rebate programs change frequently (IRA rules in flux) — requires ongoing database maintenance
2. Success-fee model complicates AppSumo LTD framing
3. Faraday.so could pivot down-market or partner with supply chains
4. Manufacturer rebates require equipment model matching — data quality dependency

## Key Source Links
- https://www.faraday.so/ — enterprise competitor automating same workflow
- https://news.ycombinator.com/item?id=46857488 — Faraday HN "Who is Hiring" signal
- https://serviceagent.ai/ — adjacent AI back-office signal
- https://www.bdrco.com/blog/home-service-industry-trends/ — industry trend validation
- https://contractortoolstack.com/software/avoca-ai/ — Avoca as AI bolt-on proof

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-21 | 85/105 | hn-indiehackers-2026-05-21, trends-2026-05-21 | First identified: Faraday.so hiring signal (HN "Who is Hiring" Feb 2026) + Elyos AI $13M confirms AI for trades back-office; enterprise-only gap = indie opportunity for 1–10 truck HVAC shops; IRA rebates add $9B+ new eligibility; success-fee pricing most natural |

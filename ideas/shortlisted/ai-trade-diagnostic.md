---
name: AI Diagnostic Tool for Tradespeople (HVAC-First)
description: Camera-based AI diagnostic tool for HVAC techs — photo/video of broken equipment → AI identifies issue from OEM manual database → suggests part number → links to Grainger/Amazon for ordering. HN signal with multiple paying clients.
type: project
---

# AI Diagnostic Tool for Tradespeople — HVAC-First — Score: 78/105

**Verdict**: EXPLORE FURTHER
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-05-05

## One-Line Pitch
"HVAC tech in your pocket" — take a photo of a broken furnace or error code, get the fix from the OEM manual, the part number, and a link to order it. $29/mo per tech.

## Problem
Tradespeople carry smartphones but still call manufacturers, search YouTube, or phone a senior tech for diagnosis. No tool combines: (1) photo/video input, (2) OEM manual database for specific equipment models, (3) parts lookup + ordering link. HVAC techs are the primary target: 374,000+ unfilled positions means junior techs handle jobs they'd previously escalate; AI can bridge that skill gap.

## Market Data
- **Signal**: HN commenter (pest control SaaS thread) building this, has "multiple clients" — early validation
- **HVAC market**: 370K+ HVAC businesses in US; $50B+ market; 374K unfilled positions = junior tech skill gap
- **Adjacent verticals**: marine/boat maintenance, elevator technicians, industrial equipment operators
- **Long-term vision**: "Agent platform for traditional industries, bridging knowledge work and physical work" (HN commenter's description)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | HN commenter has "multiple clients"; no external revenue data yet |
| Competitor Weakness | 4/5 | 2x | 8 | No tool combines photo + OEM manual + parts lookup for HVAC |
| LTD Viability | 4/5 | 2x | 8 | $149–299 LTD per tech; sell to shop owners as team tool |
| No Free Tier | 4/5 | 1x | 4 | No free HVAC diagnostic AI; YouTube is current alternative |
| Channel Access | 4/5 | 2x | 8 | r/HVAC 500K+, HVAC-Talk, ACCA member communities, tech Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "HVAC AI diagnostic tool", "field tech AI assistant", "HVAC troubleshooting app" |
| AppSumo Fit | 3/5 | 2x | 6 | Techs increasingly LTD-savvy; sell via shop owner B2B |
| Review Potential | 3/5 | 1x | 3 | Will review if reduces callbacks and saves diagnosis time |
| MRR Path | 4/5 | 3x | 12 | Per-tech monthly; equipment database updates as natural recurring; expand verticals |
| Build Feasibility | 3/5 | 2x | 6 | GPT-4o Vision + OEM manual corpus + parts API = 4–6 weeks; data acquisition is hard part |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC field diagnosis = deeply boring trade |
| **Total** | | | **78/105** | |

## Key Differentiators
- Start with HVAC (largest trade vertical, most equipment model diversity)
- OEM manual corpus as data moat — accumulates over time, hard to replicate
- Photo/video input (no typing required in the field)
- Parts ordering links directly from diagnosis (Grainger, Amazon, HVAC supply houses)
- Team tool sold to HVAC shop owners ($29/mo per tech)

## Target Customer
HVAC shops with 2–15 technicians, especially shops with junior techs who need guidance on unfamiliar equipment. Individual techs as secondary buyers.

## MVP Feature Set
1. Photo capture → GPT-4o Vision identifies equipment model + error/failure
2. OEM manual lookup (curated corpus of major HVAC brands: Carrier, Lennox, Trane, Goodman, Bryant)
3. Specific repair procedure from manual section
4. Part number lookup + Grainger/Amazon link
5. History of past diagnoses per equipment model (builds institutional memory)

## Pricing
- $29/mo per tech (sold as team package to shop owner)
- $149–299 LTD per seat

## Target Channels
- r/HVAC 500K+ members
- HVAC-Talk (hvac-talk.com) professional forum
- ACCA (Air Conditioning Contractors of America) member community
- Facebook groups: "HVAC Business Owners", "HVAC Technicians"
- YouTube HVAC training channels (sponsorship/partnership)

## Top 3 Risks
1. OEM manual licensing/scraping legal risk — may need to curate manually or partner with manufacturers
2. Data accuracy is critical — wrong diagnosis = expensive callbacks and liability
3. Expand to marine/elevator/industrial requires separate data corpus for each vertical

## Key Source Links
- https://news.ycombinator.com/item?id=47509571 (HN discussion thread where commenter describes building this)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-05 | 78/105 | hn-indiehackers-2026-05-05 | NEW — HN commenter in pest control SaaS thread building camera-based AI diagnostic tool for tradespeople; has "multiple clients"; long-term vision: "agent platform for traditional industries, bridging knowledge work and physical work"; HVAC is largest target vertical; photo/video → OEM manual → part number → ordering link = confirmed product concept; data moat is equipment manual corpus per vertical; junior HVAC tech skill gap (374K unfilled positions) creates urgency for AI-assisted diagnosis |
| 2026-05-12 | 82/105 | hn-indiehackers-2026-05-12, trends-2026-05-12 | +4 DUAL-source — YC Spring 2026 RFS MAJOR SIGNAL: "AI-Guided Physical Work" is one of 8 priority categories; "almost no competition" stated explicitly; HVAC/plumbing/appliance repair techs photographing equipment → AI identifies problem → step-by-step fix walkthrough = confirmed product direction; ServiceTitan/Jobber handle scheduling but ZERO in-field technical guidance; field tech staring at unfamiliar HVAC unit still has to call someone; Avoca AI $1B valuation confirms small HVAC shops pay for AI with clear ROI; Beside $32M raised for AI receptionist for SMBs = AI in trades well-funded at top; micro-shop tier ($79/mo per tech) still unoccupied; start with 20 HVAC brands, sell through supply houses + trade associations; score upgraded 78→82 on YC RFS explicit validation; Sources: ycombinator.com/rfs, superframeworks.com/articles/yc-rfs-startup-ideas-indie-hackers-2026, fortune.com/avoca |

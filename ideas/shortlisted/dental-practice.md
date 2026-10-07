---
name: Dental Payroll / Production Reconciliation
description: Auto-calculates provider production splits, hygienist pay percentages, and associate compensation from Open Dental/Dentrix/Eaglesoft exports — eliminating the monthly manual reconciliation spreadsheet at $99-149/mo
type: shortlisted
---

# Dental Payroll / Production Reconciliation — Score: 92/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-08-18
**Decision Status**: NEW

## One-Line Pitch

Auto-calculate dentist associate production splits, hygienist compensation, and provider pay percentages directly from Open Dental/Dentrix/Eaglesoft — eliminating the monthly reconciliation spreadsheet that every dental office manager dreads.

## Problem

Dental offices deal with complex provider-based payroll that general payroll tools (Gusto, ADP) can't handle:

- **Hygienist production splits**: hygienists typically earn 25–35% of their collected production — calculated differently than salaried staff
- **Associate dentist pay**: new associates often earn 25–30% of their personal production + adjustments for lab fees
- **Multi-provider schedules**: 3 providers working different days, different pay rates, different adjustments
- **Lab fee deductions**: lab costs deducted from production before calculating associate compensation
- **Billing adjustments**: write-offs, insurance adjustments, patient portions all affect net production

Every dental practice does this calculation manually in Excel today. Office managers spend 4–8 hours per pay period pulling reports, adjusting for write-offs, calculating splits, and manually entering into Gusto/ADP. A single calculation error creates conflict and trust issues with staff.

**Current cost**: $12,000–$35,000 MRR potential at $99–199/office, with near-zero ongoing infrastructure costs.

## Market Evidence

- ~100,000 dental practices in the US; majority independent single-location or 2-location practices
- Open Dental (open-source, published data model) + Dentrix + Eaglesoft cover 80%+ of market
- No competing product exists in this exact category — verified via software review sites
- Dental office managers are the top-searched LinkedIn job in dental practices — they own this pain
- SumoTrends 2026 "boring SaaS niches printing money" explicitly calls this out as unoccupied
- Estimated MRR potential: $12K–35K at $99–199/office (validated by analysis)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 100K+ dental practices; production compensation is universal; all major PMS lack this module |
| Competitor Weakness | 5/5 | 2x | 10 | No dedicated tool — pure white space |
| LTD Viability | 4/5 | 2x | 8 | $99–149 LTD for tool eliminating monthly payroll headache = compelling |
| No Free Tier | 5/5 | 1x | 5 | No free dental payroll reconciliation tool exists |
| Channel Access | 4/5 | 2x | 8 | DentistryIQ, ADA conferences, dental office manager forums, r/Dentistry |
| Content Potential | 4/5 | 1x | 4 | "dental hygienist payroll software", "dental production reconciliation", "Open Dental payroll" |
| AppSumo Fit | 4/5 | 2x | 8 | Dental tools sell well on AppSumo; clear monthly ROI story |
| Review Potential | 4/5 | 1x | 4 | Office managers are active reviewers |
| MRR Path | 5/5 | 3x | 15 | Monthly payroll = monthly recurring need; expansion to multi-provider group practices |
| Build Feasibility | 4/5 | 2x | 8 | 4–6 weeks: Open Dental open-source data model + Eaglesoft/Dentrix CSV export + calculation engine + Gusto/ADP output |
| Boring Business Bonus | 5/5 | 2x | 10 | Dental office payroll reconciliation = deeply boring |

**Total: 92/105**

## Must-Have Filters

- [x] Problem is real (every dental office manager does this manually)
- [x] Can build without deep domain expertise (Open Dental data model is public; payroll math is straightforward)
- [x] No dominant player in this specific niche
- [x] Revenue potential > $10K MRR within 12 months

## Boring Business Fit Check

- VCs ignore dental office payroll software — ✓
- Customers (office managers) are non-technical — ✓
- Existing software (Dentrix, Eaglesoft, Open Dental) doesn't do this — ✓
- Dental practices have real budgets and pay for software — ✓
- Churn likely low once calculation workflow is trusted — ✓

## Team Fit Check

- Front-end: Simple data entry form + calculation preview dashboard
- Back-end: File parser (CSV/XML from 3 PMS systems) + calculation engine + Gusto/ADP export format
- Designer: Standard financial dashboard UI patterns
- Generalist: Dental office manager communities, DentistryIQ ads, ADA conference booth

## MVP Scope (4–6 weeks)

1. CSV/export import from Open Dental, Dentrix, Eaglesoft
2. Provider roster setup (name, compensation type: % of production, flat, or hybrid)
3. Calculation engine: gross production → adjustments → net production → provider pay
4. Period comparison (this month vs last month)
5. Gusto/ADP-ready CSV output
6. Pay stub preview per provider

## Key Source Links

- https://sumotrends.com/ideas/boring-saas-niches-printing-money-2026/
- https://medium.com/write-a-catalyst/6-boring-micro-saas-niches-that-could-quietly-make-5-000-month-87b80da395db
- https://redwerk.com/blog/micro-saas-ideas-that-print-money/
- https://www.certifyhealth.com/blog/top-10-dental-practice-management-software-2026/
- https://medixdental.com/best-dental-pms/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-08-18 | 92/105 | trends-2026-08-18 | First identified — Trend Spotter: pure white space confirmed; $12K–35K MRR potential at $99–199/office; Open Dental open-source data model = fast build path; SumoTrends 2026 names this as unoccupied boring niche; no competitor found on any software review site |
| 2026-09-09 | 92/105 | competitor-analysis-2026-09-09 | Stable: Competitor analysis today covers broader dental PMS space (Dentrix/Eaglesoft/Curve) — confirms dental software market is actively disrupted; data-hostage and PMS pricing gaps documented; payroll reconciliation remains a distinct module opportunity within a broader dental ops platform (see also: dental-practice-management.md for the full PMS concept); Sources: revupdental.com/best-dental-practice-management-systems/, certifyhealth.com/blog/top-10-dental-practice-management-software-2026/ |
| 2026-10-03 | 93/105 | hn-indiehackers-2026-10-03, trends-2026-10-03 | ↑1: DUAL-source — HN: Zirco.ai Show HN (beta) — replaces dental front desk via Playwright + Availity insurance verification + Vapi voice AI + native Dentrix/Open Dental/Eaglesoft integration; 30+ discovery calls done; front desk staff $40–50K/yr + 40% turnover = confirmed ROI; insurance verification alone 2–3 hrs/day per practice; HIPAA compliance is a moat; Trends: dental AI startups raise $100M+ H1 2026; Archy $20M Series B; Patientdesk.ai (YC) + Toothy AI (YC) both targeting dental insurance — avg clinic spends 160+ hrs/month on insurance tasks; SMB dental (1–3 chair) is explicit blind spot in all funded solutions (big players go DSO/enterprise); Oryx Dental GPO + Menta = new SMB entrants; NEW ANGLE: standalone dental insurance pre-authorization tool at $99–199/mo (not full PMS) = fastest-to-market wedge; 160 hrs/month × $100/hr staff cost = $16K/yr saved = easy ROI calculation; per-seat vs per-call pricing as differentiator for small clinics who hate variable costs; Sources: news.ycombinator.com/item?id=47385090, ycombinator.com/companies/patientdeskai, ycombinator.com/companies/toothy-ai, ebiko.ca/blogs/news/dental-ai-startups-raise-over-100-million-in-early-2026, news.crunchbase.com/venture/dental-saas-provider-archy-raises-seriesb |
| 2026-10-07 | 93/105 | hn-indiehackers-2026-10-07 | Stable: SINGLE-source — HN: Zirco.ai HN Show HN reconfirmed (30+ discovery calls, insurance verification 2–3 hrs/day = $40–50K/yr front desk staff cost); standalone dental insurance pre-authorization wedge at $99–199/mo confirmed as fastest-to-market angle (not full PMS); SMB dental (1–3 chair) remains explicit blind spot in all VC-funded solutions (Patientdesk.ai/Toothy AI both go enterprise/DSO); HIPAA compliance moat unchanged; Sources: hn-indiehackers-2026-10-07 |

# Specialty Trade Contractor Back-Office OS

**Score: 78/105** | **Verdict: EXPLORE FURTHER** | **Tier**: 1 | **Evaluation Date**: 2026-05-04

## One-Line Pitch
Trayd for the solo-to-10-employee specialty contractor: Davis-Bacon prevailing wage compliance, multi-state payroll, and union deductions without the 14-hour manual process.

## Problem
Specialty trade contractors (electricians, plumbers, HVAC subs, concrete crews) outnumber general contractors 400:1 in the US, yet ALL construction software was built for GCs. Trayd ($17M total funding, YC-backed) built a back-office OS for specialty trades and achieved 600%+ YoY revenue growth, reducing payroll processing from 14 hours to 27 minutes. But Trayd targets 5–100 employee shops. Owner-operators with <10 employees are completely unserved.

Key compliance pain points:
- Variable pay rates by trade/project/jurisdiction (an electrician's rate changes by job type, state, and whether the job is prevailing wage)
- Union deductions that vary by local union chapter
- Multi-state tax compliance for crews that cross state lines
- Davis-Bacon Act reporting (2023 updates tightened enforcement)
- OSHA recordkeeping for small contractors

## Market Evidence
- Trayd: $10M Series A (March 2026) from top VCs + YC; 600%+ YoY growth; payroll 14 hrs → 27 min
- $2 trillion US construction market; specialty trades 400:1 vs GCs
- Davis-Bacon Act 2023 update = tighter enforcement on federal projects = new urgency
- Compliance software market: $68.93B by 2026 globally
- Miter (construction HCM) and Arcoro (HR for construction) both raising rounds

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Trayd $10M Series A + $17M total validates; 600%+ YoY growth = explosive demand |
| Competitor Weakness | 4/5 | 2x | 8 | Trayd priced for 5–100 employees; owner-operators with <10 completely unserved |
| LTD Viability | 2/5 | 2x | 4 | Payroll is ongoing service — pure LTD doesn't fit; compliance reports could be LTD |
| No Free Tier | 5/5 | 1x | 5 | No free payroll tools for specialty trades; ADP/Gusto miss trade-specific compliance |
| Channel Access | 3/5 | 2x | 6 | Trade associations (IEC, PHCC, ABC, UA), construction subreddits, specialty contractor forums |
| Content Potential | 4/5 | 1x | 4 | "specialty contractor payroll software", "Davis-Bacon compliance", "electrician payroll" |
| AppSumo Fit | 2/5 | 2x | 4 | Payroll tools poor LTD fit; direct outreach + trade associations better GTM |
| Review Potential | 4/5 | 1x | 4 | Will review if payroll time dramatically reduced (14hrs → minutes) |
| MRR Path | 5/5 | 3x | 15 | Payroll is naturally recurring, highest-retention SaaS category; sticky once adopted |
| Build Feasibility | 3/5 | 2x | 6 | Multi-state tax complexity, prevailing wage, union deductions = 6–8 weeks minimum |
| Boring Business Bonus | 5/5 | 2x | 10 | Specialty trade payroll + compliance = peak boring, peak necessary |

## Must-Have Filters
- [x] Problem is real (Trayd 600%+ YoY growth proves it)
- [x] Can build without deep domain expertise (start with one trade + one state)
- [x] No dominant player at owner-operator tier (<10 employees)
- [x] Revenue potential > $10K MRR within 12 months (payroll SaaS = high LTV)

## Recommended MVP Approach
Do NOT build a full payroll platform. Pick ONE compliance pain point:

**Option A: Davis-Bacon Prevailing Wage Calculator for Electricians (1 state)**
- Select trade (electrician) + state + project type → get correct wage rates
- Track hours by wage rate/project
- Generate DOL WH-347 certified payroll reports automatically
- Target: electricians in one high-federal-spending state (TX, CA, or FL)
- Build time: 3–4 weeks; compliance data = one-time scrape from DOL database

**Option B: License Renewal + OSHA Recordkeeping for Small Contractors**
- Already partially covered in `compliance-licensing-trades.md` — consider merging

## Target Channels
- IEC (Independent Electrical Contractors) local chapters
- PHCC (Plumbing-Heating-Cooling Contractors) associations
- ABC (Associated Builders and Contractors)
- r/Construction, r/electricians, r/Plumbing

## Top 3 Risks
1. Payroll compliance is genuinely complex — multi-state compliance errors could expose liability
2. Trayd, Miter, and Arcoro are well-funded teams building exactly this
3. Gusto/ADP could add trade-specific templates and eliminate the gap

## Key Source Links
- https://www.globenewswire.com/news-release/2026/03/25/3262211/0/en/Trayd-Raises-10M-to-Transform-Payroll-for-Specialty-Trade-Contractors-with-31-Productivity-Gains.html
- https://news.crunchbase.com/venture/construction-tech-automation-trayd-ai-seriesa/
- https://fintech.global/2026/03/26/trayds-10m-raise-targets-construction-payroll-chaos/
- https://www.buildtrayd.com

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-04 | 78/105 | trends-2026-05-04 | NEW — Trayd $10M Series A (March 2026) confirmed; 600%+ YoY growth; 14hrs→27min payroll processing; specialty trades 400:1 vs GCs; owner-operator tier (<10 employees) unserved; recommend starting with Davis-Bacon prevailing wage for one trade + one state as MVP |

---
name: Small GC Multi-Job Financial Tracking
score: 82/105
tier: 1
verdict: BUILD
date: 2026-11-17
---

# Small GC Multi-Job Financial Tracking — Score: 82/105

**Verdict**: BUILD
**Decision Status**: NEW

*(Note: distinct from `small-gc-subcontractor-coordination.md` which covers bid management, COI tracking, lien waivers. This tool tracks per-job financial performance: what clients owe, what's owed to subs/suppliers, budget vs. actuals across active projects.)*

## One-Line Pitch
Multi-job financial dashboard for small GCs ($500K–$3M revenue) — track what clients owe per job, what's owed to subs/suppliers per job, job-level budget vs. actuals, and outstanding payments — with QuickBooks sync, at $49–79/mo vs. Buildertrend's $500+/mo.

## Problem
"Struggling now that we have multiple projects going on at a time with who owes us, how much, what we owe our subs, what we have and haven't been paid, etc. doing everything by excel and memory currently but it isn't working."

GC doing $1.3M revenue: everything by Excel + memory. Survey of 35 local contractors:
- 14 use QuickBooks (nobody likes it for construction-specific tracking)
- 7 use Jobber (not built for multi-job GC work)
- 5 still on Google Sheets/Excel

The specific gap is **multi-job financial visibility** — not project management, not scheduling — just: which projects are over budget, what clients owe me right now, what do I owe my subs/suppliers, and which invoices are outstanding.

**The market:**
- Buildertrend: $500+/mo, overkill for GCs under $3M
- Procore: enterprise, $375–899+/mo
- JobTread: $200/mo, well-regarded but expensive for under $1M revenue GCs
- QuickBooks: accounting only, not construction-aware; no multi-project financial view
- Contractor Foreman: $49–249/mo but dense UI that hurts adoption

Billdr ($4.4M CAD raised, 7-figure ARR) is validating this exact space for residential renovation GCs.

## Market Evidence
- r/Construction: "$1.3M revenue GC on memory + Excel" — specific, real pain signal
- r/ContractorsUS: 35-contractor survey showing Excel dominance
- r/Contractor: "admin side of trades" thread — multi-job financial tracking gap
- Trends: Billdr $4.4M CAD raised, 7-figure ARR — validation from successful indie builder
- Feldy (YC F26): 200+ paying customers, field-first AI for contractors
- 400K+ GC firms in US; most running $500K–$5M; underserved between Excel and Procore

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | GC on memory + Excel at $1.3M revenue; Billdr $4.4M CAD 7-figure ARR; consistent Reddit pain threads |
| Competitor Weakness | 4/5 | 2x | 8 | Buildertrend $500+/mo overkill; Procore enterprise; JobTread $200/mo for small GCs |
| LTD Viability | 4/5 | 2x | 8 | $299 LTD for contractors; ROI story = know which jobs lose money |
| No Free Tier | 4/5 | 1x | 4 | GCs pay for tools that protect their margins |
| Channel Access | 4/5 | 2x | 8 | r/Construction, r/Contractor, r/ContractorsUS |
| Content Potential | 3/5 | 1x | 3 | "job costing software small contractor" — niche but findable |
| AppSumo Fit | 4/5 | 2x | 8 | Contractors respond to LTDs; construction community on AppSumo |
| Review Potential | 3/5 | 1x | 3 | Contractors review when software solves specific pain |
| MRR Path | 4/5 | 3x | 12 | $49–79/mo; expand to draw scheduling, change orders, sub payment tracking |
| Build Feasibility | 3/5 | 2x | 6 | Multi-job dashboard + QB sync + receipt capture = moderate (8–10 weeks) |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction = deeply boring; job costing = doubly boring |

**Total: 82/105**

## Must-Have Filters
- [x] Problem is real ("memory + Excel at $1.3M revenue" = documented breaking point)
- [x] Can build without deep domain expertise (financial tracking = CRUD with QB sync)
- [x] Market not dominated by single unbeatable player (Buildertrend overkill; Procore enterprise; JobTread expensive)
- [x] Revenue potential > $10K MRR (200 GCs × $59/mo = $11.8K MRR; achievable in 6–9 months)

## Product Concept

**"JobFloat"** — Multi-job financial visibility for small GCs.

**Core features (MVP) — focused on financial tracking, not full PM:**
1. **Project list** — all active jobs with real-time financial status at a glance
2. **Client AR tracking** — what does each client owe per job: invoiced, paid, outstanding
3. **Sub/supplier AP tracking** — what do I owe per job: bills entered, paid, outstanding
4. **Budget vs. actuals** — set budget per job → see actual vs. budget on labor/materials/subs
5. **QuickBooks sync** — pull in QB transactions and tag to jobs automatically
6. **Mobile receipt capture** — photo receipt → OCR → tagged to job

**What it deliberately doesn't do (MVP):** Scheduling, project management, RFIs, submittals, punch lists. Just the financial picture.

**Differentiators:**
- Financial-first (not trying to be a full PM tool)
- Under $80/mo (JobTread starts at $200/mo)
- QuickBooks sync included at base price
- Mobile receipt capture for materials (the most common missing transaction)

**Phase 2:**
- Draw schedule tracking (construction-specific: request payment tied to completion milestones)
- Change order financial tracking (the most common budget-buster)
- Sub payment scheduling (when to pay each sub based on draw approvals)

**Pricing:**
- $49/mo (up to 5 active jobs)
- $79/mo (unlimited active jobs)
- LTD: $199 (5 active) / $299 (unlimited)

## Target Market
- GCs running $500K–$3M in annual contracted work
- 2–10 employees/subs
- Currently using QuickBooks + Excel + memory for multi-job financial tracking
- Breaking point: typically $500K–$1M revenue when manual system stops working

## Go-to-Market
1. r/Construction, r/Contractor — "Built a multi-job financial tracker for GCs under $3M — just what you owe and what's owed to you"
2. Direct in "financial tracking" or "admin side of trades" threads
3. AppSumo at $199 LTD (up to 5 active jobs)
4. Local home builders association outreach

## Risks
1. JobTread ($200/mo, well-regarded) is competition even at the low end
2. Buildertrend could release a lighter tier
3. Procore "essential" tier already cheaper than it used to be
4. Scope creep: GCs will ask for scheduling, PM features — discipline required to stay financial-focused

## Key Source Links
- https://www.reddit.com/r/Construction/comments/1ekc7fs/financial_tracking/
- https://www.reddit.com/r/Contractor/comments/1rdk74k/anyone_else_feel_like_the_admin_side_of_trades/
- https://www.reddit.com/r/ContractorsUS/comments/1smcm8c/asked_a_bunch_of_contractors_what_software_they/
- https://betakit.com/billdr-relaunches-with-4-4-million-cad-to-build-operating-system-for-construction/
- https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-17 | 82/105 | reddit-2026-11-17, trends-2026-11-17 | First identified — GC doing $1.3M on memory + Excel = documented breaking point; Billdr $4.4M CAD 7-figure ARR validates market; focus is FINANCIAL tracking only (distinct from subcontractor coordination covered in small-gc-subcontractor-coordination.md); JobTread is real competition at $200/mo; $49–79/mo with QB sync at base = clear differentiation |

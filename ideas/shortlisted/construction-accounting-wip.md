# Construction Accounting WIP Automation (QuickBooks Add-On)

**Score**: 85/105
**Verdict**: EXPLORE FURTHER
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-04-25
**LTD Price**: $79-99 per CPA firm

## One-Line Pitch
QuickBooks Online add-on that auto-generates GAAP WIP schedules for construction accountants — turning 8-12 hours of monthly manual work per client into a single click.

## Problem
Construction accountants using QuickBooks Online spend 8-12 hours per client per month manually calculating work-in-progress (WIP) schedules — a GAAP requirement for job-costing that determines when revenue can be recognized on long-term projects. There is no QBO-native automation for this critical calculation. CPAs who serve general contractors and subcontractors consistently describe it as one of their biggest time sinks.

Current reality:
- **Manual process**: CPAs export job cost data from QBO into Excel, manually calculate overbilling/underbilling per job, and build the WIP schedule by hand
- **GAAP requirement**: WIP schedules are required for percentage-of-completion accounting — non-optional for any construction client doing financial reporting
- **No affordable tools exist**: Jonas Construction Software ($500+/mo) is enterprise-grade; Foundation Software is enterprise; no lightweight QBO-connected WIP tool exists
- **Client revenue impact**: Inaccurate WIP = inaccurate financial statements = audit risk and incorrect tax positions

## Market Evidence
- Thousands of CPA firms in the US specialize in construction clients (GCs and subcontractors)
- r/accounting and r/taxpros actively discuss WIP calculation pain — consistently top-10 Reddit-validated gap per SaasNiche analysis
- Jonas Construction Software ($500+/mo) and Foundation Software (enterprise) are the only solutions — a massive price gap for CPA firms
- Construction industry has ~$2.2T in annual revenue; every GC needs WIP schedules for bonding, banking, and tax
- Strong word-of-mouth distribution within CPA communities (CPE platforms, state CPA society newsletters)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | WIP GAAP required; 8-12 hrs/client/month validated; SaasNiche top-10 Reddit gap |
| Competitor Weakness | 5/5 | 2x | 10 | No QBO-native WIP automation; Jonas $500+/mo; only Excel/manual exists |
| LTD Viability | 4/5 | 2x | 8 | $79-99 LTD per firm viable; CPA firms pay for time savings |
| No Free Tier | 5/5 | 1x | 5 | Nothing free; purely B2B professional compliance |
| Channel Access | 4/5 | 2x | 8 | r/accounting, r/taxpros, r/Bookkeeping; CPE platforms; construction CPA associations |
| Content Potential | 4/5 | 1x | 4 | "QuickBooks construction WIP schedule", "construction job costing software" |
| AppSumo Fit | 3/5 | 2x | 6 | CPAs less typical AppSumo buyers; accounting tools do appear there |
| Review Potential | 4/5 | 1x | 4 | CPAs actively review professional software on G2/Capterra |
| MRR Path | 4/5 | 3x | 12 | Per-firm monthly; Procore/Foundation integration as premium tier |
| Build Feasibility | 4/5 | 2x | 8 | QBO OAuth + job cost pull + WIP calc + PDF/Excel export = 4-5 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Construction accounting = unglamorous professional services |

**Total: 85/105**

## Must-Have Filters
- [x] Problem is real (8-12 hrs/client/month confirmed; GAAP requirement non-negotiable)
- [x] Can build without deep domain expertise (the WIP formula is well-documented; QBO API is public)
- [x] No dominant player at affordable price for small CPA firms
- [x] Revenue potential $10K+ MRR within 12 months (even 100 CPA firms × $99/mo = $9,900 MRR)

## Boring Business Fit Check
- VCs ignore construction accounting niches ✓
- Customers are non-technical (CPAs are tech-savvy but hate dev work) ✓
- Existing software is enterprise-priced and inaccessible ✓
- CPA firms have real budgets and will pay for time savings ✓
- Churn is very low once adopted (WIP tool embedded in monthly workflow) ✓

## Team Fit Check
- Front-end: QBO OAuth connection UI, WIP schedule display, PDF/Excel export
- Back-end: QBO API job cost data pull, WIP calculation engine, schedule generation
- Designer: Clean professional spreadsheet-like UI that CPAs recognize
- Generalist: CPA community outreach, CPE platform partnerships, r/accounting seed

## Core Feature Set (MVP)
1. **QBO OAuth Integration** — connect client QBO account, pull job cost data
2. **WIP Schedule Generator** — auto-calculate overbilling/underbilling per job using % completion
3. **PDF/Excel Export** — one-click export in standard WIP schedule format
4. **Multi-Client Dashboard** — CPA firm manages multiple construction clients from one login
5. **Period Comparisons** — current vs. prior period WIP for trend analysis

## Revenue Model
- $49/mo for up to 5 construction clients
- $99/mo for up to 20 construction clients
- $149/mo unlimited clients
- LTD: $79 (up to 5 clients) / $129 (up to 20 clients)
- Premium: Procore integration, Foundation import, automated journal entries to QBO

## Distribution Strategy
1. **r/accounting + r/taxpros**: Post problem discovery thread first; then soft launch
2. **CPE platforms**: Construction accounting CEUs — sponsor relevant courses
3. **Construction CPA associations**: CFMA (Construction Financial Management Association) newsletter
4. **Content**: "How to calculate a WIP schedule in QuickBooks" → capture organic search traffic
5. **Referral program**: One CPA refers 3 others within the same firm network

## Next Steps
1. Post on r/accounting: "Anyone else spending 8+ hrs/client/month on WIP schedules in QBO?"
2. Build QBO sandbox demo showing the WIP calculation end-to-end
3. Validate that QBO job cost data has all required fields for WIP calc (contract value, billed to date, cost to date)
4. Price test: $49/mo vs $99/mo vs $79 LTD with 5 CPA firm beta testers
5. Research CFMA (Construction Financial Management Association) sponsorship opportunities

## Top 3 Risks
1. **QBO API limitations** — QuickBooks may not expose all needed job cost fields via API; requires validation before building
2. **Addressable market size** — CPA firms specifically serving construction clients is a niche within a niche; real TAM may be smaller than it appears
3. **QuickBooks could build this natively** — Intuit has the distribution advantage if they decide to add WIP natively to QBO

## Key Source Links
- https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026 — Reddit-validated opportunity
- https://medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691 — Confirmed pain point analysis
- https://www.reddit.com/r/accounting — Primary distribution community
- https://www.reddit.com/r/taxpros — Secondary distribution community

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-04-25 | 85/105 | reddit-2026-04-25 | New: Reddit scanner identifies QBO WIP automation as top-10 validated gap; 8-12 hrs/client/month manual; GAAP requirement; Jonas $500+/mo enterprise; no lightweight QBO tool exists; SaasNiche ranks as top-10 Reddit-validated opportunity; CPA firm + construction client ICP confirmed |

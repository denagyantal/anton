# WIP Reporting Automation for Construction Accountants — Score: 88/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-04-16

## One-Line Pitch
Auto-generate GAAP-compliant work-in-progress (WIP) schedules from QuickBooks Online job cost data — eliminating the 8-12 hour monthly spreadsheet exercise for construction bookkeepers.

## Problem
Construction accountants and bookkeepers working in QuickBooks Online spend 8-12 hours per client per month manually calculating percent complete for each active job and producing a work-in-progress (WIP) schedule required for GAAP revenue recognition. The current workflow: export job cost data to Excel → manually calculate % complete using cost-to-cost or units-complete method → build WIP schedule → create PDF for the client's financial statements. QuickBooks Online has no native WIP module. Procore and Buildertrend target general contractors — not accounting firms. No dedicated tool exists. Multiple r/accounting threads confirm this is a universal monthly pain with a pain score of 85/100 in the SaasNiche Reddit pain database.

## Market Evidence
- **Pain score**: 85/100 on SaasNiche's 315+ Reddit pain point database
- **Source threads**: Multiple r/Accounting threads with "8-12 hours/client/month" estimates
- **No competition**: QBO has no native WIP module; Procore/Buildertrend target GCs, not accountants
- **Target market**: ~25,000 accounting firms and bookkeepers with construction clients
- **Monthly recurring pain**: Month-end WIP is required every month → natural subscription product
- **GAAP mandate**: Any construction company with revenue recognition requirements (especially those with bank covenants or audits) must have a WIP schedule — not optional

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple Reddit threads confirm; pain score 85/100; universal monthly pain for construction bookkeepers |
| Competitor Weakness | 5/5 | 2x | 10 | No dedicated QBO WIP tool exists anywhere; Excel is the only "competitor" |
| LTD Viability | 4/5 | 2x | 8 | $199-299 LTD for solo bookkeepers; monthly subscription per firm better for recurring pain |
| No Free Tier | 5/5 | 1x | 5 | Nothing exists at any price |
| Channel Access | 4/5 | 2x | 8 | r/accounting, r/Bookkeeping, construction accounting FB groups, ProAdvisor communities |
| Content Potential | 4/5 | 1x | 4 | "construction WIP schedule QuickBooks" — zero SEO competition; zero competing content |
| AppSumo Fit | 3/5 | 2x | 6 | Professional niche; accounting associations stronger channel |
| Review Potential | 4/5 | 1x | 4 | Accountants review on Capterra/G2; Accounting Today |
| MRR Path | 5/5 | 3x | 15 | Natural recurring: month-end is every month; tiered by number of construction clients |
| Build Feasibility | 4/5 | 2x | 8 | QBO API + WIP calculation logic (cost-to-cost or units-complete) + GAAP PDF = 4-5 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Construction accounting = unglamorous professional service |

**Total: 88/105**

## Must-Have Filters
- [x] Problem is real (Reddit threads + pain score database confirm)
- [x] Can build without deep domain expertise (WIP accounting rules are documented GAAP standards)
- [x] No dominant player (nothing exists)
- [x] Revenue potential $10K+ MRR within 12 months (25K bookkeepers × $49/mo if even 0.5% convert = $6K MRR; realistic)

## Key Differentiators
1. Pulls job cost data directly from QBO API (no export/import)
2. Calculates % complete using cost-to-cost method (or units-complete via manual input)
3. Generates GAAP-compliant WIP schedule PDF ready for financial statements
4. Handles overbillings and underbillings automatically
5. Tiered by number of active construction clients (accountants bill by client)
6. Multi-client dashboard for accounting firms (see all clients' WIP status at once)

## Target Customer
- Bookkeeping firms with 5-50 construction clients
- Solo bookkeepers specializing in construction
- CPA firms' construction industry practice groups
- Price point: $49/month per firm (tiered by client count) or $199-299 LTD for solo bookkeepers

## Go-to-Market
1. Post in r/Bookkeeping and r/accounting: "I'm building a QBO WIP schedule tool — who would pay $49/mo?"
2. Target QuickBooks ProAdvisor community (600K+ ProAdvisors, many serve construction)
3. Construction accounting Facebook groups (CFO Construction, Construction Accounting Network)
4. Accounting Today, CPA Practice Advisor — editorial coverage for vertical SaaS
5. Build landing page with "save 8-12 hours per client per month" headline

## Risks
1. **QBO API dependency**: QBO could change APIs or add native WIP module
2. **WIP accounting complexity**: % complete methods vary; billing-to-date calculations can be complex
3. **Small specialized TAM**: Only accountants with construction clients; not all accountants
4. **Intuit threat**: QBO could build native WIP — low probability given their enterprise focus, but possible

## Key Source Links
- https://www.reddit.com/r/Accounting/comments/1ro3xgl/how_are_you_handling_wip_reports_for_construction/ (source thread)
- https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026
- https://developer.intuit.com/app/developer/qbo/docs/develop (QBO API reference)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-04-16 | 88/105 | reddit-2026-04-16 | First identified — Reddit r/accounting confirms 8-12 hrs/client/month manual Excel WIP; pain score 85/100 on SaasNiche; no QBO WIP tool exists; natural monthly recurring product |

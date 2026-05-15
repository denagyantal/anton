# Construction WIP Automation for QuickBooks Online — Score: 89/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-05-15

## One-Line Pitch
The only standalone tool that connects to QuickBooks Online and auto-generates the GAAP-compliant WIP schedule that construction bookkeepers are spending 8–12 hours per client manually rebuilding in Excel every month-end.

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | QBO Community forums confirm pain; RedHammer (Intuit partner) publicly called WIP "the single most important missing report in QBO"; Feb 2026 Enterprise Suite launched without it |
| Competitor Weakness | 5/5 | 2x | 10 | No standalone WIP tool for QBO exists; all alternatives (Procore, Buildertrend, Knowify) are $200–500+/mo full construction suites |
| LTD Viability | 2/5 | 2x | 4 | Accountants pay monthly for compliance tools; recurring is the right model here |
| No Free Tier | 5/5 | 1x | 5 | No free QBO WIP tools exist anywhere |
| Channel Access | 4/5 | 2x | 8 | QBO Community forums, r/accounting, construction bookkeeping FB groups, ProAdvisor network |
| Content Potential | 4/5 | 1x | 4 | "WIP report QuickBooks Online", "construction accounting WIP QBO" — zero competition keywords |
| AppSumo Fit | 3/5 | 2x | 6 | Accounting firms less likely to shop AppSumo; direct B2B is better channel |
| Review Potential | 4/5 | 1x | 4 | Accounting software gets reviewed; ProAdvisors share tool recommendations actively |
| MRR Path | 5/5 | 3x | 15 | Month-end close = monthly pain; tier by client count = natural expansion; near-zero churn once integrated |
| Build Feasibility | 4/5 | 2x | 8 | QBO OAuth + job cost data pull + % complete calculation (cost-to-cost) + PDF/Excel export; 4–6 weeks MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction accounting — does not get more boring |

**Total**: 89/105

## Must-Have Filters
- [x] Problem is real (8–12 hrs/client/month confirmed; RedHammer publicly validates)
- [x] Can build without deep domain expertise
- [x] No dominant player (Intuit itself hasn't solved this)
- [x] Revenue potential > $10K MRR within 12 months (1,000 firms × $49/mo = $49K MRR)

## Market Context
- Thousands of construction-specialized bookkeeping firms each serving 10–50 contractor clients
- Every construction accounting firm using QBO rebuilds WIP manually in Excel at month-end
- Pain score 85/100 (SaasNiche, r/accounting)
- RedHammer (Intuit's own construction accounting partner) publicly called WIP "the single most important report in construction accounting and currently absent from QBO"
- Feb 2026 QBO Enterprise Suite launched — still no native WIP report
- Full construction management suites (Procore, Knowify, Buildertrend) cost $200–500+/mo and are overkill for accounting firms just needing the WIP schedule

## Core Feature Set (MVP)
1. QBO OAuth integration — pull job/project cost data automatically
2. Cost-to-cost % complete calculation per job
3. GAAP-compliant WIP schedule generation (standard format: contract amount, billed to date, % complete, overbilled/underbilled)
4. Export to PDF and Excel (what clients already expect from their accountant)
5. Multi-client workspace (accounting firm view — one dashboard for all their clients)

## Key Differentiators
1. Only standalone WIP tool for QBO — no full construction suite required
2. Eliminates 8–12 hrs/client/month of manual Excel work
3. Built for accounting firms (multi-client view), not construction companies
4. GAAP compliance built in (cost-to-cost method, proper overbilled/underbilled presentation)

## Target Channels
- QBO Community forums (directly where the pain is documented)
- ProAdvisor network (construction-specialized bookkeepers)
- Construction bookkeeping Facebook groups ("Construction Bookkeeping and Accounting" FB group)
- r/accounting
- RedHammer partnership opportunity (they have existing construction accounting clients)

## Pricing
- $49–99/firm/mo (tiered by active client count: up to 5 clients / 6–20 clients / 20+ clients)
- No LTD — accountants need ongoing access; subscription is natural

## Next Steps
1. Interview 10 construction-specialized bookkeeping firms about their current WIP workflow
2. Build QBO OAuth integration + cost-to-cost calculation + WIP schedule export
3. Soft launch to ProAdvisor community; early users provide reviews
4. Partner with RedHammer for co-marketing

## Risks
1. QBO API limitations — some job cost data fields may not be cleanly accessible via API
2. GAAP method variation — some firms use units-of-delivery or billings method vs. cost-to-cost
3. Intuit could ship native WIP in QBO (unlikely for standard tier based on 5+ years of absence)

## Key Source Links
- https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/wip-work-in-progress-reporting-solution-for-qbo/00/788638
- https://knowify.com/resources/quickbooks-work-in-progress-report/
- https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-15 | 89/105 | reddit-2026-05-15 | First evaluation. Reddit: construction accountants spending 8–12 hrs/client/month on manual WIP; RedHammer publicly called WIP "the single most important missing report in QBO"; Feb 2026 Enterprise Suite launched without it; no standalone WIP tool for QBO exists; pain score 85/100 (SaasNiche r/accounting). LTD not ideal — accountants pay monthly for compliance tools. Strong MRR play at $49–99/firm/mo. |

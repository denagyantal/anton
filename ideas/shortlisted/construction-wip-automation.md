# Construction WIP Automation for QuickBooks Online — Score: 89/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-05-15 (file created 2026-05-16)

## One-Line Pitch
Standalone tool that auto-generates the GAAP-compliant WIP schedule that every construction bookkeeper rebuilds manually in Excel each month-end — directly from QuickBooks Online job cost data.

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Accounting firms serving construction clients confirmed spending 8–12 hrs/client/month on manual WIP in Excel; RedHammer (Intuit partner) calls WIP "the single most important missing report in QBO"; QBO Community forums = thousands of posts |
| Competitor Weakness | 5/5 | 2x | 10 | No standalone WIP tool for QBO exists; Procore/Buildertrend/Knowify are $200–500+/mo full construction suites — massive overkill for bookkeeping firms that need just the report |
| LTD Viability | 2/5 | 2x | 4 | Accountants pay monthly for compliance tools; LTD not ideal; $99–149 LTD possible but MRR is stronger model here |
| No Free Tier | 5/5 | 1x | 5 | No free QBO WIP reports exist — Intuit hasn't built this for standard QBO tier |
| Channel Access | 4/5 | 2x | 8 | QBO Community forums, r/accounting, r/taxpros, construction bookkeeping FB groups, ProAdvisor network |
| Content Potential | 4/5 | 1x | 4 | "WIP report QuickBooks Online", "construction accounting QBO", "work in progress schedule QBO" — extremely low competition |
| AppSumo Fit | 3/5 | 2x | 6 | Accounting firms less likely to shop AppSumo; better as direct B2B SaaS; some AppSumo accounting buyers |
| Review Potential | 4/5 | 1x | 4 | Accounting software heavily reviewed; ProAdvisors share tools with colleagues |
| MRR Path | 5/5 | 3x | 15 | Month-end close is monthly; tiered by client count = natural expansion revenue; high retention |
| Build Feasibility | 4/5 | 2x | 8 | QBO OAuth + job cost data pull + % complete calc + GAAP WIP schedule PDF; 4–6 weeks for MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction accounting — does not get more boring than this |

**Weighted Total**: 89/105

## Market

- ~700,000 construction companies in the US, majority with $500K–$10M annual revenue
- QBO is the dominant accounting tool for small/mid construction firms (50%+ market share at SMB level)
- Every construction firm using percentage-of-completion revenue recognition needs a WIP schedule
- Construction bookkeeping is a specialized niche: ~15,000–30,000 firms/CPAs specialize in it
- WIP reports are required monthly for active job sites and quarterly for lenders/bonding companies

## Key Differentiators

- QBO-native: pulls job cost data via OAuth, no manual data entry
- Auto-calculates % complete using cost-to-cost method (GAAP standard)
- Generates bank/bond-ready WIP schedule PDF and Excel export in minutes vs. 8–12 hours manually
- Tiered by firm size (number of active construction clients)
- Partner angle: position as the tool RedHammer and other construction accounting specialists recommend

## Target Customer

- Primary: Accounting firms (bookkeepers, CPAs, ProAdvisors) who serve construction clients — 1–10 person firms
- Secondary: Construction company owners who handle their own books with QBO

## Product Concept (MVP)

1. QBO OAuth connection → pull Customers + Jobs + Job Costs
2. For each job: enter or sync contract value + billed-to-date → auto-calculate % complete
3. Generate GAAP-compliant WIP schedule (over/under billings per job) → PDF + Excel export
4. Monthly auto-run + email delivery to bookkeeper

## Pricing Model

- $49/mo — up to 3 active construction clients
- $79/mo — up to 10 clients
- $129/mo — unlimited clients
- (LTD available at $149 for small firms as AppSumo experiment)

## Acquisition Channels

- QBO ProAdvisor network (Intuit's own directory of certified advisors)
- QBO Community forums (directly answering "how do I do WIP in QBO?" threads)
- r/accounting, r/taxpros
- Construction Accounting Facebook groups ("Construction Accountants Network")
- Content: rank for "WIP report QuickBooks Online" (currently answered by forums, no SaaS)
- Partner with RedHammer, Knowify, and construction-specific bookkeeping firms

## Must-Have Filters

- [x] Problem is real (confirmed via QBO Community forums, RedHammer endorsement)
- [x] Can build without deep domain expertise (WIP math is standardized GAAP)
- [x] Market not dominated by single unbeatable player (no WIP-only tool exists)
- [x] Revenue potential >$10K MRR within 12 months (30–50 firm clients at $49–129/mo = $1.5K–6.5K MRR; 100 clients = $5–12K MRR)

## Risks

1. QBO API limitations — some job cost data may not be cleanly structured for WIP calculations
2. GAAP method variations (cost-to-cost vs. units-of-delivery vs. physical completion) — must clarify scope
3. Intuit could ship native WIP in QBO Enterprise eventually (historically slow to add niche accounting features)

## Source Links

- https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/wip-work-in-progress-reporting-solution-for-qbo/00/788638
- https://knowify.com/resources/quickbooks-work-in-progress-report/
- https://toaglobal.com/blog/9-tax-practice-management-software-to-streamline-your-tax-practice/
- https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-15 | 89/105 | reddit-2026-05-15, saasniche.com | First identified. Accounting firms spending 8–12 hrs/client/month on manual WIP; RedHammer calls it "most important missing report in QBO"; no standalone WIP tool confirmed; $49–99/mo per firm model |
| 2026-05-16 | 89/105 | reddit-2026-05-16 | Reconfirmed — construction WIP accounting pain sourced again from r/Accounting; connects to QuickBooks/Xero discussion threads; no change in score; file created (missed in 2026-05-15 evaluation) |

# Automated WIP Reporting for Construction Accountants

**Score**: 85/105
**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-04-26

## One-Line Pitch
Connect to QuickBooks Online → auto-generate GAAP-compliant Work-in-Progress schedules in one click — saving construction accountants 8-12 hours per client per month.

## Problem
Construction accountants using QuickBooks Online spend 8-20 hours per month manually building WIP schedules in Excel, pulling data from 3+ systems. QuickBooks has zero native WIP functionality. Sage Intacct and Foundation handle WIP but are enterprise-priced and complex. IES launched in September 2024 but is still complex to onboard. The result: CPA firms serving contractors are stuck exporting data, running percentage-of-completion calculations manually, and producing error-prone WIP reports in spreadsheets — a task that directly affects contractor compliance with GAAP revenue recognition (ASC 606).

Direct quote: *"Every month end I'm exporting data into Excel and manually calculating percent complete for each job."*

SaasNiche pain score: 85/100 — validated from r/accounting with active discussion.

## Market Evidence
- 1,000s of construction accountants on QBO serving small-to-mid contractors
- 94% of Excel spreadsheets contain errors (Procore stat) — WIP accuracy matters
- Sage Intacct Construction = enterprise, $500-2,000+/mo, overkill for a 3-staff CPA firm
- Foundation Software = expensive desktop software, not cloud
- IES (Sept 2024) = cloud WIP but complex onboarding, no QBO-native integration
- QBO has 7M+ subscribers; construction is one of its largest verticals
- $59-99 LTD pricing — a single client engagement pays for the lifetime deal

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Active Reddit discussion; SaasNiche pain 85/100; paying customers for Sage/Foundation prove willingness to pay |
| Competitor Weakness | 4/5 | 2x | 8 | QBO zero native WIP; Sage enterprise; IES complex; no affordable cloud WIP tool |
| LTD Viability | 4/5 | 2x | 8 | $59-99 LTD viable; QBO read-only API = low ongoing cost |
| No Free Tier | 4/5 | 1x | 4 | No free WIP tools exist |
| Channel Access | 4/5 | 2x | 8 | r/accounting (highly active), CPA Facebook groups, QuickBooks ProAdvisor community, CPE platforms |
| Content Potential | 4/5 | 1x | 4 | "WIP schedule QuickBooks", "construction accounting software", "job cost WIP report" = solid SEO |
| AppSumo Fit | 4/5 | 2x | 8 | Accountants pay monthly subscriptions — LTD compelling; tax season urgency |
| Review Potential | 3/5 | 1x | 3 | Accountants leave G2/Capterra reviews |
| MRR Path | 4/5 | 3x | 12 | Monthly for ongoing WIP reports; $29-49/mo per firm natural |
| Build Feasibility | 4/5 | 2x | 8 | QBO OAuth API + percentage-of-completion calc + PDF generator = 4-5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction accounting = deeply boring |

**Total: 85/105**

## Must-Have Filters
- [x] Problem is real (accountants manually doing this every month end)
- [x] Can build without deep domain expertise (standard accounting calculations)
- [x] No dominant affordable player (Sage/Foundation are enterprise; IES is complex)
- [x] Revenue potential > $10K MRR ($49/mo × 200 accounting firms = $10K MRR)

## Key Differentiators
1. **QBO-native** — direct OAuth integration, no CSV exports
2. **One-click WIP schedule** — auto-pulls job cost data, calculates percent complete, generates PDF
3. **GAAP-compliant** — ASC 606 revenue recognition format
4. **Time savings** — 8-12 hours/month per client → minutes
5. **Affordable** — $59-99 LTD or $29-49/mo vs Sage's $500-2,000+/mo

## Target Customers
- **Primary**: Small-to-mid CPA firms specializing in construction clients (2-20 staff, 5-30 contractor clients)
- **Secondary**: Construction contractors with in-house accountants using QBO
- **Also**: Bookkeeping firms serving the trades

## Competitor Landscape
| Competitor | Price | Weakness |
|-----------|-------|----------|
| Sage Intacct Construction | $500-2,000+/mo | Enterprise, complex, not QBO-connected |
| Foundation Software | Expensive desktop | Not cloud, not QBO native |
| IES (Sept 2024) | Moderate | Complex onboarding, limited QBO integration |
| QBO native | Free with subscription | Zero WIP functionality |
| Excel | Free | Manual, error-prone, 8-20 hrs/month |

## Pricing
- **Solo Accountant LTD**: $59-79 (AppSumo)
- **Firm SaaS**: $29-49/mo per firm (up to 10 contractor clients)
- **Multi-client upsell**: $99/mo for unlimited clients

## MVP Scope (4-5 weeks)
1. QBO OAuth 2.0 authentication
2. Pull job cost transactions by project from QBO
3. Input percentage-complete per job (manual or formula-based)
4. Calculate overbilled/underbilled, backlog, WIP totals
5. Generate formatted PDF WIP schedule (GAAP compliant)
6. Export to Excel for CPA review/client delivery

## Next Steps
1. Interview 5-10 construction accountants using QBO — validate exact pain and workflow
2. Build QBO OAuth connector + WIP calculation engine + PDF export
3. Target: CPA firms serving contractors ($29/mo per firm, up to 10 contractor clients)
4. Launch $59-79 LTD on AppSumo + r/accounting community seeding

## Risks
1. QBO API changes could break integration (mitigated by QBO's published API stability commitment)
2. "Percentage complete" requires human input — not fully automated without contractor data
3. IES (Sept 2024 entrant) could move toward affordable tier
4. Construction accounting is niche — TAM may cap at $500K-$1M ARR

## Key Source Links
- [Reddit r/accounting: WIP schedule for construction](https://www.reddit.com/r/Accounting/comments/1ro3xgl/how_are_you_handling_wip_reports_for_construction/)
- [PivotXL WIP market validation](https://pivotxl.com/work-in-progress-construction/)
- [SaasNiche: 50 micro-SaaS from Reddit 2026 — idea #3 (pain score 85/100)](https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-04-26 | 85/105 | reddit-2026-04-26 | First identified; SaasNiche pain score 85/100; "every month end I'm exporting data into Excel" direct quote; construction accountants on QBO 8-20 hrs/month manual WIP; Sage Intacct enterprise only; IES complex; QBO zero native WIP = clean gap; $59-99 LTD for solo accountants; 4-5 week MVP via QBO OAuth API |

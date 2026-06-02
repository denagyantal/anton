# Construction WIP Accounting for QuickBooks — Score: 94/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Decision Status**: NEW
**Evaluation Date**: 2026-06-02

## One-Line Pitch
QBO-connected app that auto-generates GAAP-compliant WIP (Work-in-Progress) schedules from job cost data — eliminating 8–12 hours/client/month of manual spreadsheet work for construction accountants.

## Problem
QuickBooks Online has **no native WIP report**. WIP schedules are the single most important report in construction accounting — required by bonding companies and lenders for GCs bidding on commercial/public work. Even Intuit's own construction consulting partner (RedHammer) publicly called it "the single most important report in construction accounting and currently absent" from the Feb 2026 QBO Enterprise Suite launch.

The QBO community has run active threads on this gap for **5+ years with no resolution**. Construction accountants currently build WIP schedules manually in Excel, taking 8–12 hours per client per month. Enterprise solutions (Procore $375+/mo, Sage 300 CRE, CrewCost $599+/mo) are priced and scoped far beyond what small-to-mid contractors need.

## Market Evidence
- 5+ year QBO community thread with hundreds of replies = documented, sustained demand
- RedHammer (Intuit's own construction partner) publicly confirms the gap in Feb 2026
- 700K+ construction companies on QBO (from construction-management.md data)
- Multiple "how to do WIP in QBO manually" guides published by accounting firms = massive workaround signal
- Construction accounting firms typically manage 15–50 clients each — automation at $149/mo = $2K+ savings/month in labor

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 5+ year thread + Intuit partner public validation + 700K QBO construction companies |
| Competitor Weakness | 5/5 | 2x | 10 | Zero native QBO WIP; Procore/Sage enterprise-only; no lightweight option |
| LTD Viability | 4/5 | 2x | 8 | $99 contractor / $149 accounting firm multi-client; immediate labor savings ROI |
| No Free Tier | 5/5 | 1x | 5 | No free WIP reporting for QBO exists |
| Channel Access | 4/5 | 2x | 8 | QBO ProAdvisor community, r/bookkeeping, construction accountant FB groups, AGC forums |
| Content Potential | 4/5 | 1x | 4 | "QBO WIP report", "construction WIP spreadsheet", "WIP schedule QuickBooks" — active search, zero SEO competition |
| AppSumo Fit | 4/5 | 2x | 8 | Construction accountants + mid-size contractors; "eliminates 8 hrs/month of Excel work" = AppSumo pitch |
| Review Potential | 4/5 | 1x | 4 | Accountants who save 8–12 hrs/client/month will review enthusiastically on G2/Trustpilot |
| MRR Path | 4/5 | 3x | 12 | Accounting firm tier $149/mo (multi-client); contractor direct $49/mo; Buildertrend/CoConstruct integration as premium |
| Build Feasibility | 5/5 | 2x | 10 | QBO API (jobs/class tracking) + WIP calculation logic (overbillings/underbillings) + GAAP PDF export = 3–4 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction accounting = maximally boring, deeply underserved |

**Total: 94/105**

## Must-Have Filters
- [x] Problem is real — 5-year active QBO thread + Intuit's own partner confirms the gap
- [x] Can build without deep domain expertise — QBO API is well-documented; WIP formula is standard GAAP math
- [x] Market not dominated by a single unbeatable player — no lightweight QBO-connected WIP tool exists
- [x] Revenue potential > $10K MRR within 12 months — 100 accounting firms at $149/mo = $14,900 MRR; 200 contractors at $49/mo = $9,800 MRR

## Boring Business Fit Check
- VCs ignore this? Yes — construction accounting is too unsexy for VC interest
- Customers non-technical? Yes — accountants want a report, not a platform; contractors just want to hand it to bonding companies
- Existing software outdated or overpriced? Yes — Excel is the incumbent; enterprise options cost 10x more
- Real budgets? Yes — accounting firms bill $150–300/hr; 8-hr time saving per client per month = $1,200–$2,400 in recaptured time
- Low churn? Yes — once integrated with QBO and producing monthly WIP for bonding companies, switching cost is very high

## Core MVP Features
1. Connect to QBO via OAuth
2. Pull job cost data (revenue recognized, costs incurred, contract value, estimated costs to complete)
3. Calculate overbillings (billings in excess of costs) and underbillings (costs in excess of billings)
4. Generate GAAP-compliant WIP schedule PDF (matching standard bonding company format)
5. Multi-job view with rollup WIP summary
6. Export to Excel for accountants who need to customize

## Pricing
- **Contractor**: $49/mo (up to 20 active jobs) — $99 LTD
- **Accounting Firm**: $149/mo (unlimited clients, up to 500 total jobs) — $299 LTD
- Free: 1-time WIP schedule generation (acquisition hook; accountants try, get hooked)

## Target Channels
- QBO ProAdvisor community (200K+ accountants certified on QBO)
- r/bookkeeping, r/Accounting
- Facebook: "QuickBooks Help for Construction" groups
- RedHammer blog community (Intuit's own construction partner already drives traffic to the pain)
- Construction accountant LinkedIn thought leaders

## Top Risks
1. QBO API changes or Intuit launches native WIP (low probability — 5-year track record of ignoring)
2. Accounting firms may prefer full construction accounting software (Knowify $99–249/mo) once they see capability
3. GAAP WIP format varies slightly by bonding company; may need template customization feature
4. Distribution to construction accountants is slower than direct-to-contractor targeting

## Key Source Links
- https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/wip-work-in-progress-reporting-solution-for-qbo/00/788638
- https://www.redhammer.io/blog/best-construction-accounting-software-platforms-in-2025-complete-guide-for-contractors
- https://www.greensighter.com/blog/micro-saas-ideas (idea #9)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-06-02 | 94/105 | reddit-2026-06-02 | First identified — 5-year QBO thread + Intuit partner RedHammer public gap confirmation (Feb 2026); 8–12 hrs/client/month in manual Excel work; zero native QBO WIP report; construction accountants confirmed target; AppSumo LTD pitch confirmed |

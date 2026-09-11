# Plumbing/HVAC Supplier Invoice Auto-Price Extraction — Score: 80/105

**Verdict**: EXPLORE FURTHER
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-09-10
**Decision Status**: NEW

## One-Line Pitch
AI tool that reads supplier PDF invoices (Ferguson, Wesco, etc.) and auto-populates your estimate — eliminating the manual copy-paste of part prices that plumbing and HVAC shops do for every job.

## Problem
A 25-field-staff plumbing/HVAC company explicitly asked on r/Plumbing for estimating software that can "extract pricing from suppliers' invoices" automatically. This is the current workflow at thousands of shops:

1. Get supplier invoice PDF from Ferguson, Wesco, or another distributor
2. Manually open invoice
3. Find each part number and price
4. Type it into the estimate spreadsheet or estimating tool
5. Build the estimate
6. After job: manually compare actual part costs against estimates for job costing

This is done for every job. At $75-150/hour for office admin time and 100+ jobs per year, the cost is significant. The "bonus points" call-out in the Reddit thread suggests this isn't a one-person pain — it's a recurring frustration across the segment.

## Market Evidence
- Direct Reddit request from 25-person HVAC/plumbing company: "extract pricing from suppliers' invoices" listed as "bonus points" feature
- 500K+ HVAC/plumbing/mechanical contractors in the US
- Standard distributor relationships: Ferguson, Wesco, Johnstone Supply, Grainger — all emit PDF invoices
- AI PDF parsing is now mature (GPT-4o, Claude API) — technically feasible as a startup
- No existing tool (Procore, Jobber, Housecall Pro, QuickBooks) offers this feature
- Adjacent market: PartsTech (auto parts lookup for repair shops) proves contractors will pay for supplier price integration

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | "Bonus points" Reddit call-out = recurring frustration; 500K+ HVAC/plumbing contractors |
| Competitor Weakness | 5/5 | 2x | 10 | Zero competitors — completely unoccupied feature category |
| LTD Viability | 2/5 | 2x | 4 | Ongoing value (updating prices as new invoices come in) makes LTD economically hard |
| No Free Tier | 5/5 | 1x | 5 | No free tool exists for this specific workflow |
| Channel Access | 4/5 | 2x | 8 | r/Plumbing, r/ProHVACR, r/HVAC, distributor community forums |
| Content Potential | 3/5 | 1x | 3 | "plumbing estimating software supplier prices", "HVAC invoice price extraction" |
| AppSumo Fit | 3/5 | 2x | 6 | Subscription more natural than LTD; moderate AppSumo fit |
| Review Potential | 3/5 | 1x | 3 | Will review if saves measurable admin hours |
| MRR Path | 5/5 | 3x | 15 | Ongoing price extraction = monthly utility; expand to job costing and P&L per job |
| Build Feasibility | 3/5 | 2x | 6 | AI PDF parsing is mature; supplier format variation adds training complexity |
| Boring Business Bonus | 5/5 | 2x | 10 | Plumbing/HVAC estimating = quintessentially boring |

**Total: 80/105**

## Must-Have Filters
- [x] Problem is real (direct Reddit request with "bonus points" = recurring frustration)
- [x] Can build without deep domain expertise (AI PDF parsing = learnable; supplier formats = trainable)
- [x] Market not dominated by single unbeatable player (feature doesn't exist anywhere)
- [x] Revenue potential > $10K MRR within 12 months (500K contractors; 200 at $79/mo = $15.8K MRR)

## Boring Business Fit
- [x] VC-ignored? YES — plumbing/HVAC estimating admin is invisible to investors
- [x] Non-technical buyers? YES — HVAC/plumbing estimators are not technical
- [x] Existing software outdated or overpriced? YES — no tool does this at any price
- [x] Real budgets? YES — $79-149/mo is trivial vs hours of admin saved
- [x] Low churn? YES — once integrated into estimating workflow, switching is painful

## Product Concept

**MVP (4-6 weeks):**
- PDF upload interface for supplier invoices (Ferguson, Wesco, Johnstone Supply, Grainger, HD Supply)
- AI extraction: part number, description, price, quantity from PDF
- Price list export: CSV or direct push to estimating tool
- Job costing module: attach invoices to job → actual vs. estimated comparison
- QuickBooks Online sync: cost per job flows to accounting

**Target suppliers for V1 (high-volume, consistent PDF format):**
- Ferguson Enterprises (largest HVAC/plumbing distributor)
- Wesco International
- Johnstone Supply
- Grainger

**Integration targets (V2):**
- Jobber job costing
- Housecall Pro job costing
- QuickBooks Online job reports

**Pricing:**
- $79/mo (unlimited invoice uploads, 1 user, CSV export)
- $149/mo (unlimited users, job costing module, QB sync)

## Key Differentiators
1. **Zero manual data entry** — upload PDF, prices auto-populate in estimate
2. **Job costing closes the loop** — compare estimated vs. actual part costs per job
3. **Multi-supplier** — works with any PDF, not just one distributor's portal
4. **Claude API accuracy** — modern LLM PDF parsing is more accurate than legacy OCR

## Target Channels
- r/Plumbing, r/ProHVACR, r/HVAC
- Ferguson/Wesco/Johnstone customer communities
- PHCC (Plumbing-Heating-Cooling Contractors Association)
- ACCA (Air Conditioning Contractors of America)

## Risks
1. LTD doesn't fit subscription-only value (hard AppSumo play)
2. Supplier PDF formats vary significantly; training on edge cases takes time
3. Suppliers may change PDF formats; ongoing maintenance required
4. Standalone tool → need to integrate with FSM to avoid being displaced

## Next Steps
1. Build MVP: Ferguson PDF upload → Claude API extraction → price list CSV export
2. Test with 5 HVAC/plumbing companies for format coverage
3. Add job costing module (V2)
4. Launch at $79/mo with 14-day free trial; seed r/Plumbing + r/ProHVACR

## Key Source Links
- [r/Plumbing job costing thread](https://www.reddit.com/r/Plumbing/comments/1i88xz6/job_costing_estimating_software/)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-10 | 80/105 | reddit-2026-09-10 | First identified: 25-person HVAC/plumbing company explicitly requested "extract pricing from suppliers' invoices automatically" as "bonus points" feature; 500K+ HVAC/plumbing contractors manually copying prices; zero competitors anywhere; AI PDF parsing (Claude API) now feasible as MVP in 4-6 weeks; subscription at $79-149/mo more appropriate than LTD; weak AppSumo fit but strong MRR path; Ferguson/Wesco as primary PDF format training targets |

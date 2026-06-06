# Vertical Document / EOB Converter — Score: 90/105

**Tier**: 1 (Strong Opportunity)
**Verdict**: BUILD
**Evaluation Date**: 2026-06-06

## One-Line Pitch
Vertical-specific document conversion SaaS — drag-and-drop dental EOBs, contractor invoices, or bank statements into the exact format your practice management software needs, at $149 LTD per document type.

## Problem
Companies need to convert specific document types (dental Explanation of Benefits, bank statements, contractor invoices) into formats their software can ingest. Generic OCR (AWS Textract, Adobe, Nanonets) fails because it's untrained on domain-specific layouts. Manual conversion is expensive ($20–40/hr billing department time). Vertical-specific converters charge $99–299/month because the ROI is direct: one hour saved per week = tool pays for itself.

The IH proof point: an indie founder built a document conversion SaaS and reached $9,747 MRR — confirming the market exists. The gap: vertical-specific converters (dental EOB → practice management system, or contractor invoices → QuickBooks format) command 3x higher pricing than generic OCR because the accuracy standard is higher and the audience is captive.

## Market Evidence
- IH case study: $9,747 MRR from document conversion SaaS (July 2023 — directional signal)
- Dental billing offices process 50–200 EOBs per day manually — primary ICP
- IH comments: "companies whose sole purpose is converting data from one standard to another bring in millions of dollars every month"
- Generic OCR error rates 5–15% are unacceptable for billing — vertical-specific accuracy required
- Each dental/medical office has dedicated billing staff spending 4–6 hrs/day on manual entry

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | IH proof at $9,747 MRR in this exact category |
| Competitor Weakness | 4/5 | 2x | 8 | Generic OCR (AWS Textract, Nanonets) lacks vertical-specific training; no dominant indie player |
| LTD Viability | 5/5 | 2x | 10 | Perfect LTD — finite scope, no ongoing compliance burden, low infra cost |
| No Free Tier | 5/5 | 1x | 5 | B2B document conversion; no one expects free at this accuracy level |
| Channel Access | 3/5 | 2x | 6 | Niche vertical outreach required; dental billing forums, dental MBA groups |
| Content Potential | 3/5 | 1x | 3 | "dental EOB to CSV converter", "contractor invoice to QuickBooks" — low volume but high intent |
| AppSumo Fit | 5/5 | 2x | 10 | Perfect: finite scope, clear ROI, no compliance burden — $149 LTD is compelling |
| Review Potential | 3/5 | 1x | 3 | Small B2B audience but vocal within niches |
| MRR Path | 4/5 | 3x | 12 | High-frequency conversion = natural volume-based SaaS tier ($99/mo for unlimited docs) |
| Build Feasibility | 4/5 | 2x | 8 | OCR + domain-specific schema extraction; 3–4 week MVP for one document type |
| Boring Business Bonus | 5/5 | 2x | 10 | Dental billing, insurance claims, contractor accounting — deeply boring |

## Must-Have Filters
- [x] Problem is real (billing departments doing 4–6 hrs/day manual entry)
- [x] Can build without deep domain expertise (document parsing + schema mapping)
- [x] Market not dominated by single unbeatable player (generic OCR doesn't own this)
- [x] Revenue potential > $10K MRR within 12 months (IH proof exists)

## Target Verticals (Priority Order)
1. **Dental EOB** → OpenDental / Dentrix / Eaglesoft CSV format (best combo of volume + WTP)
2. **Contractor invoices** → QuickBooks / Xero format (70K+ concrete/paving/HVAC contractors)
3. **Equipment inspection reports** → maintenance management system format
4. **Bank statements** → accounting software (oldest category; more competition here)

## Key Differentiators
1. Vertical-specific training on actual dental/contractor document layouts (not generic OCR)
2. Accuracy guarantee with human review fallback for edge cases
3. Per-document-type LTD ($149) vs generic OCR subscription
4. Integration with specific practice management systems (not just CSV export)

## LTD Pricing
- $149 LTD: One document type (e.g., dental EOB → OpenDental CSV)
- $249 LTD: Two document types
- $49/month: Unlimited documents for chosen type (volume users)

## Next Steps
1. Pick dental EOB as first vertical; build drag-and-drop uploader + schema validator
2. Test with 5 dental billing offices before launch (accuracy validation critical)
3. AppSumo launch at $149 LTD targeting dental office managers and billing companies
4. Expand to contractor invoice → QuickBooks as second vertical

## Risks
1. Narrow TAM per vertical — must expand to multiple verticals for meaningful revenue
2. PDF format variance means ongoing maintenance as insurers change layouts
3. Large OCR platforms (Adobe, AWS Textract) could add vertical-specific modes
4. Accuracy must be near-perfect (95%+) or customers churn immediately

## Key Source Links
- https://www.indiehackers.com/post/a-super-boring-saas-with-9-747-in-monthly-recurring-revenue-313ffd4df2
- https://twitter.com/tarasowski/status/1677197503018532865
- https://www.capterra.com/dental-software/ (target vertical research)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-06-06 | 90/105 | hn-indiehackers-2026-06-06 | First identified: IH proof of $9,747 MRR in document conversion; dental EOB → practice management format = highest-priority vertical; vertical-specific = 3x pricing power vs generic OCR; $149 LTD concept confirmed; IH commenter: "companies converting data between standards bring in millions"; perfect AppSumo LTD fit |

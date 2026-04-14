# Home Care Agency Coordination Software

**Score**: 75/105
**Verdict**: EXPLORE FURTHER
**LTD Price**: N/A (MRR model at $199-399/mo per agency)
**Evaluation Date**: 2026-04-04

## One-Line Pitch
EVV-compliant scheduling and caregiver coordination for small independent home care agencies (10-100 caregivers) — the $199/mo tool between paper/spreadsheets and the $500+/mo enterprise platforms.

## Problem
The US home care industry is $130B+ and deeply fragmented. Thousands of small independent home care agencies (10-100 caregivers) run on spreadsheets and phone calls. Legacy tools (ClearCare, Axxess) are expensive and hard to use. Federal Electronic Visit Verification (EVV) mandates (in effect since 2023 for Medicaid) require agencies to verify caregiver location/time digitally — but affordable, easy-to-use EVV-compliant tools are nearly non-existent for agencies under 100 caregivers.

## Market Evidence
- Caribou hiring AI Product Engineer in April 2026 HN hiring thread (validates active investment)
- Careswitch (AI home care OS, $6.2M raised) acquired by Paradigm Senior Services Sept 2025
- Birdie (UK elder care): £52.6M funded
- Honor: $635M funded (marketplace + agency software)
- EVV mandate: federally required for all Medicaid home care since Jan 2023
- Key pain: caregiver scheduling, shift matching, compliance tracking, caregiver retention (50%+ annual turnover)
- $130B+ US home care market with massive aging population tailwind

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | $130B+ industry; Caribou hiring; Careswitch acquired; EVV mandate = regulatory forcing function |
| Competitor Weakness | 4/5 | 2x | 8 | ClearCare/Axxess expensive and hard to use; small agencies (<20 caregivers) on paper/spreadsheets |
| LTD Viability | 2/5 | 2x | 4 | Per-caregiver usage costs; MRR model much better; LTD not viable |
| No Free Tier | 4/5 | 1x | 4 | No free home care coordination software |
| Channel Access | 3/5 | 2x | 6 | Home Care Association of America, state home care associations; limited Reddit presence |
| Content Potential | 3/5 | 1x | 3 | "home care scheduling software", "EVV compliance small agency" — niche search volume |
| AppSumo Fit | 2/5 | 2x | 4 | Home care agency owners don't shop AppSumo |
| Review Potential | 3/5 | 1x | 3 | Will review if caregiver compliance improved and penalties avoided |
| MRR Path | 5/5 | 3x | 15 | Per-caregiver/month; compliance mandate = sticky; aging population = growing market |
| Build Feasibility | 3/5 | 2x | 6 | EVV compliance (state-by-state Medicaid API integration), shift matching, caregiver profiles = 6-8 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Home care = deeply boring + compliance-driven |

**Total: 75/105**

## Must-Have Filters
- [x] Problem is real (EVV mandate creates legal compliance urgency)
- [x] Can build without deep domain expertise (Medicaid EVV API specs are public)
- [x] Market is not dominated by a single unbeatable player for small agencies
- [x] Revenue potential > $10K MRR within 12 months (25 agencies × $399/mo = $10K MRR)

## Key Differentiators
1. **EVV-compliant by default** — auto-capture caregiver location + visit start/end for Medicaid compliance without extra step
2. **Shift matching engine** — match client needs (language, experience, preferences) to available caregivers automatically
3. **Automated reminder texts** — reduce no-shows (largest operational pain for agencies)
4. **Caregiver retention dashboard** — flag at-risk caregivers based on schedule patterns before they quit
5. **Simple compliance tracking** — state caregiver certifications (CPR, CNA, HHA) with expiry alerts

## Target Customer
Small independent home care agencies with 10-100 caregivers providing non-medical (personal care, companionship) or skilled nursing home care. The owner who manages scheduling via WhatsApp group chats and manually enters EVV data into a state portal each week.

## Pricing Model
- $199/mo: Up to 20 caregivers
- $299/mo: Up to 50 caregivers
- $399/mo: Up to 100 caregivers (unlimited clients)
- Not LTD — ongoing EVV compliance and caregiver certification tracking requires subscription

## Next Steps
1. Research specific state Medicaid EVV API requirements (top 5 states by home care volume)
2. Interview 5-10 home care agency owners about daily scheduling workflow
3. Build MVP: caregiver profiles + EVV-compliant clock-in + shift scheduling + compliance tracking
4. Reach agencies through Home Care Association of America + state associations

## Risks
1. State-by-state EVV compliance requirements vary — high ongoing maintenance
2. Caribou (HN hiring) and Birdie ($52.6M) are funded competitors moving fast
3. High build cost vs LTD viability — pure MRR play requires longer runway
4. Medicaid billing complexity (avoided in V1) will eventually be demanded

## Key Source Links
- [Caribou hiring (HN)](https://news.ycombinator.com/item?id=47601859)
- [Careswitch Acquisition](https://www.businesswire.com/news/home/20250916753992/en/Paradigm-Acquires-AI-Startup-Careswitch-to-Solve-Home-Cares-Payment-Problem)
- [Home care startups](https://www.seedtable.com/best-elderly-care-startups)
- [EVV Mandate Overview](https://www.medicaid.gov/medicaid/home-community-based-services/home-community-based-services-authorities/electronic-visit-verification/index.html)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-04-04 | 75/105 | hn-indiehackers, trends | First identified — Caribou hiring in April 2026 HN thread; Careswitch acquired by Paradigm (AI home care OS); EVV mandate = forcing function for small agencies; $130B+ market; Birdie £52.6M + Honor $635M + ConcertoCare $150M validate institutional appetite; small agencies (<20 caregivers) still on paper/spreadsheets = clear white space at $199-399/mo |
| 2026-04-14 | 77/105 | reddit | ↑2: EVV mandate creates forced adoption — PA 85% threshold by Jan 2025, NY 90% by Jan 2025 confirmed; agencies risking Medicaid reimbursement loss for non-compliant visits = regulatory forcing function; AlayaCare "up to six months to implement" + "requires significant internal resources" confirms implementation barrier for small agencies; office managers spend 30+ min entering schedules; exporting spreadsheets → billing vendor → re-entry into accounting = "multiple points of failure per pay cycle"; 33K home health agencies in US; simple scheduling + EVV mobile app + state-compliant GPS clock-in/out + billing export = 5-6 week MVP; $99-299/mo by caregiver count; LTD viability low (compliance complexity requires ongoing updates = MRR model better) |

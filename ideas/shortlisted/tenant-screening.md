# Tenant Income & Identity Verification — Score: 79/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-05-13
**Decision Status**: NEW

## One-Line Pitch
Fake pay stub detection for small landlords — Plaid bank-linked income verification + ID selfie match + credit/criminal at $8-12 per screening (vs. $19-35 with no fraud protection).

## Problem
Small landlords (5–50 units) are plagued by fake pay stubs and doctored PDFs from rental applicants. Fake pay stubs can be created in 5 minutes using free online tools. Current background check services ($5–35/applicant) do credit and criminal checks but don't verify income from actual payroll or bank data. Landlords manually call employers (often ignored) or eyeball pay stubs. A Plaid-integrated income verification tool — connecting directly to the applicant's bank account to verify real income, not self-reported numbers — would eliminate this fraud vector. Additionally, identity verification against government ID (driver's license photo match) is a gap: most cheap background services skip this entirely.

## Market Evidence
- r/Landlord: 500K+ members; fake pay stubs are one of the top 5 recurring discussion topics
- r/PropertyManagement: 180K+ members; income fraud complaints monthly
- 17M+ individual landlords in the US; every one who screens tenants is a potential customer
- Current solutions: TransUnion SmartMove ($19–35/screening) — no income verification
- RentSpree: comprehensive but expensive, designed for property management companies
- Cozy/Apartments.com: basic free screening; no income or ID verification
- Plaid income verification API: already proven in lending (mortgages, personal loans) — adaptation for rentals is straightforward

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Established background check market; income fraud is documented recurring pain |
| Competitor Weakness | 3/5 | 2x | 6 | RentSpree comprehensive but expensive; gap in Plaid income verification is real |
| LTD Viability | 3/5 | 2x | 6 | Per-screening model better; $79/mo subscription for property managers viable as LTD |
| No Free Tier | 3/5 | 1x | 3 | Apartments.com free screening exists; SmartMove $19-35 is cheap |
| Channel Access | 5/5 | 2x | 10 | r/Landlord 500K+, r/PropertyManagement 180K+ — most accessible audience in dataset |
| Content Potential | 4/5 | 1x | 4 | "tenant income verification", "fake pay stub detection", "Plaid tenant screening" |
| AppSumo Fit | 3/5 | 2x | 6 | Per-screening doesn't lend itself to LTD; $79/mo subscription version viable |
| Review Potential | 3/5 | 1x | 3 | Landlords review; smaller B2B audience |
| MRR Path | 5/5 | 3x | 15 | Per-screening recurring + monthly subscription for high-volume = dual revenue model |
| Build Feasibility | 3/5 | 2x | 6 | Plaid + ID verification APIs (Persona/Jumio) + credit/criminal = 4-6 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Property management = unglamorous professional service |

**Total: 79/105**

## Must-Have Filters
- [x] Problem is real (fake pay stubs = recurring documented landlord complaint)
- [x] Can build without deep domain expertise (API integrations; no proprietary data needed)
- [x] No dominant affordable player combining Plaid income + ID verification
- [x] Revenue potential >$10K MRR within 12 months (per-screening: 500 screenings/mo at $10 = $5K; subscription: 125 landlords at $79/mo = $9.9K MRR; combined = $14.9K)

## Boring Business Fit Check
- Market VCs typically ignore? YES (landlord tooling = unglamorous)
- Non-technical customers? YES (DIY landlords)
- Existing software outdated or overpriced? YES (SmartMove = basic; RentSpree = expensive)
- Real budgets? YES (landlords pay per screening already)
- Low churn? YES (landlords screen regularly; subscription = recurring need)

## Product Concept

**Core features:**
1. **Plaid bank-linked income verification** — applicant connects bank → system confirms actual income vs. stated income
2. **ID document verification** — government ID upload + selfie match (liveness check) via Persona or Jumio API
3. **Credit report** — TransUnion hard or soft pull
4. **Criminal background** — national database check
5. **Fraud score** — composite risk flag based on income discrepancy + identity confidence

**Pricing:**
- $8–12/screening (pay-per-use; no monthly minimum)
- $79/mo subscription for unlimited screenings (for property managers)
- White-label option for larger property management companies ($149/mo + per-applicant)

**Applicant flow:**
- Landlord sends secure link to applicant
- Applicant connects bank via Plaid + uploads ID + takes selfie
- Landlord receives PDF report in 5 minutes (vs. manual pay stub review = 30+ minutes)

## Key Differentiators
1. **Plaid income link** — no competitor at affordable price point offers this
2. **ID selfie match** — liveness check catches document fraud
3. **Per-screening model** — no monthly commitment; scales with portfolio size
4. **10x faster than manual verification** — automate what takes 30+ minutes per applicant

## Target Channels
- r/Landlord (500K+ members — primary channel)
- r/PropertyManagement (180K+ members)
- r/realestateinvesting
- BiggerPockets forum (2M+ members)
- Facebook groups for landlords (50K+ members in "Landlords and Real Estate Investors")
- AppSumo (subscription plan as LTD for high-volume users)

## Top 3 Risks
1. Plaid/ID verification API costs affect margins at low per-screening price
2. Per-screening revenue model limits LTD viability; subscription version needed
3. Fraud arms race — applicants will find ways around bank verification

## Key Source Links
- https://medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691
- https://www.landlordstudio.com/blog/best-rental-property-management-software
- https://www.singlekey.com/best-landlord-software-2024/
- https://www.hemlane.com/resources/best-property-management-software/
- https://plaid.com/products/income/ (Plaid income verification API)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-13 | 79/105 | reddit-2026-05-13 | First identified; fake pay stubs documented as recurring pain in r/Landlord; Plaid income link = genuinely new angle; per-screening model + $79/mo subscription for PM firms; 4-6 week build |
| 2026-05-16 | 82/105 | reddit-2026-05-16 | ↑3: Reddit confirmed strong signal — landlords receiving fake pay stubs and doctored PDFs from rental applicants; no simple tool connects to Plaid to verify income directly from bank statements during the application process; all existing tenant screening services (TransUnion SmartMove, RentSpree, Avail, TurboTenant) do credit checks but NOT automated income verification via open banking; r/Landlord 800K+ members; fake pay stubs is one of most recurrent complaints in landlord communities; per-screening model ($5–10/screening) or $29/mo for unlimited; could bundle with basic lease storage + maintenance scheduling; LTD $59–99 for small landlords managing up to 20 units; Plaid income verification API confirmed as the technical path; score revised to 82/105 with more signals; Sources: medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit, portabletenant.com/best-tenant-screening-services-reddit, plaid.com/products/income |
| 2026-07-03 | 82/105 | Stable | SINGLE-source (reddit) — Reddit (r/Landlord, r/PropertyManagement): fake pay stubs and doctored PDF income documents from prospective tenants confirmed as recurring complaint; manual verification slow and unreliable; background check services don't verify actual bank income; eviction costs $3K–$10K+ = any affordable verification tool is trivially justified; TransUnion SmartMove / Plaid / MySmartMove / RentSpree: none provide instant bank-sourced income verification in landlord-friendly UI; Plaid income API confirmed as technical path; best path: bundle as free feature of LandlordOS (property-management.md) rather than building standalone; Sources: medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691, rentmanager.com/best-property-management-software-2025-guide/ |

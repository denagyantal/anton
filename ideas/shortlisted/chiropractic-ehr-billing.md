# Chiropractic EHR + Billing (Flat-Rate, All-Inclusive)

**Score**: 83/105 | **Tier**: 1 | **Verdict**: EXPLORE FURTHER → BUILD | **Evaluation Date**: 2026-06-08

*(Distinct from `chiropractic-practice.md` which covers AI SOAP note dictation for allied health. This file covers the full practice management system: EHR + clearinghouse + billing + compliance.)*

## One-Line Pitch
Truly all-inclusive chiropractic EHR for solo and small practices — scheduling, SOAP notes, insurance billing, clearinghouse included, Medicare compliance built-in — at one flat monthly price with zero add-on fees.

## Problem
65,000+ licensed chiropractors in the US pay $129–$650+/month for practice management software, yet every affordable option has hidden costs or critical gaps:

1. **Hidden clearinghouse fees** — ChiroFusion advertises $129/mo but charges an additional $60+/mo for the electronic clearinghouse needed to submit insurance claims. Jane ($74–99/mo) charges $60+ extra for clearinghouse. Solo DCs discover this after signing up.
2. **OA45 denial processing fees** — ChiroFusion users specifically call out OA45 denial fees that make "monthly invoices expensive" beyond the listed price — a payer-specific quirk that compounds costs
3. **Auto-logout during patient sessions** — ChiroSpring "constantly logs users out if inactive" — a real clinical workflow problem when providers step away between patients
4. **$500–$3,000 data migration lock-in** — Switching between platforms requires expensive migrations; creates lock-in but also switching pressure when cost exceeds value
5. **Mixed cash/insurance chaos** — Solo chiropractors split between insurance and cash-pay patients; most software handles one well but not both. Tracking AR across payers while also managing cash memberships is a constant frustration.
6. **Medicare 2025 compliance complexity** — The 2025 Documentation Compliance Audit Initiative introduced new modifier requirements and audit triggers that most lower-cost platforms haven't addressed

## Market Evidence
- ChiroTouch ($650+/mo) dominant legacy player; ChiroFusion ($129/mo) and ChiroSpring ($149/mo) active second tier
- G2/Capterra review volumes confirm active software evaluation market
- zHealth ($119/mo) and ClinicSense ($39/mo) = range of pricing confirms willingness to pay
- Sprypt.com, myzhealth.io, chirospring.com all publish detailed comparison articles = SEO traffic validation
- US chiropractic market: 65K+ DCs, ~30K solo practices (biggest segment)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ChiroTouch/ChiroFusion/ChiroSpring all have paying customers; 65K+ DCs; G2/Capterra reviews confirm |
| Competitor Weakness | 5/5 | 2x | 10 | Hidden clearinghouse fees, OA45 denial fees, auto-logout, $500–$3K migration lock-in = multiple pain vectors |
| LTD Viability | 3/5 | 2x | 6 | Per-claim clearinghouse costs ongoing; LTD viable with claim-volume cap (e.g., 1,000 claims/year included) |
| No Free Tier | 5/5 | 1x | 5 | No free chiropractic EHR; ClinicSense $39/mo cheapest but not a real EHR |
| Channel Access | 3/5 | 2x | 6 | r/Chiropractic, ACA chapters, ChiroEco forums, FB "Solo DC Network" (~15K members) |
| Content Potential | 4/5 | 1x | 4 | "ChiroFusion alternative", "affordable chiropractic EHR", "chiro billing no hidden fees" |
| AppSumo Fit | 3/5 | 2x | 6 | Solo practitioners have bought healthcare SaaS on AppSumo; healthcare EHRs are niche but viable |
| Review Potential | 4/5 | 1x | 4 | Compliance stakes + billing savings = high review motivation; G2/Capterra category is active |
| MRR Path | 5/5 | 3x | 15 | EHR = extremely sticky recurring subscription; HIPAA compliance = mandatory, can't easily switch |
| Build Feasibility | 2/5 | 2x | 4 | HIPAA + clearinghouse API (Availity/Change Healthcare) + claim scrubbing + Medicare modifiers = 10–14 week build |
| Boring Business Bonus | 4/5 | 2x | 8 | Chiropractic practices = unglamorous professional services; VC-invisible |

## Must-Have Filters
- [x] Problem is real (evidence of people paying for solutions)
- [x] Can build MVP without deep domain expertise (clearinghouse is the hard part)
- [x] Market not dominated by single unbeatable player (ChiroTouch declining, ChiroFusion/ChiroSpring fragmented)
- [x] Revenue potential > $10K MRR within 12 months (30K solo practices at $79/mo = massive TAM)

## Key Differentiators
1. **Zero surprise billing** — clearinghouse included in base price, no OA45 add-ons, no per-claim fees beyond stated plan
2. **Session-persistent UX** — never auto-logs out mid-patient; designed for clinical workflow reality
3. **Medicare 2025 compliance built in** — Documentation Compliance Audit Initiative alerts, modifier compliance checker
4. **Mixed cash + insurance** — handle cash memberships (wellness plans), copays, and insurance billing in one workflow
5. **One flat price** — all features at base tier, no add-on upsells

## Target Channels
- r/Chiropractic
- ChiroEco forums (chiropractors.com community)
- American Chiropractic Association local chapters
- Facebook groups: "Chiropractic Business Owners" (~8K), "Solo DC Network" (~6K)
- Sprypt.com, myzhealth.io sponsored content (high-intent comparison searches)
- AppSumo (LTD with claim volume cap)

## Product Roadmap
**MVP (Weeks 1–14):**
- SOAP note templates (chiro-specific: subluxation listings, adjustment notes, outcome measures)
- Appointment scheduling + patient portal
- Insurance billing with integrated clearinghouse (start with Availity API)
- Cash membership billing (wellness plans, prepaid packages)
- Medicare modifier compliance alerts
- One flat price ($79/mo, all features)

**Phase 2:**
- OA45 denial management workflow
- Automated patient recall campaigns
- Telehealth integration
- Multi-provider practice support

**Price**: $79/month flat (up to 3 providers) | **LTD**: $399 AppSumo (cap: 1,200 claims/year)

## Top 3 Risks
1. HIPAA compliance + clearinghouse integration = 10–14 week build; tests the 4–6 week MVP constraint
2. OA45 denial logic and Medicare modifier rules change annually — ongoing compliance maintenance burden
3. $500–$3K migration costs create adoption friction (same lock-in mechanics that hurt competitors hurt us when acquiring customers)

## Validation Gating Checklist
Before full build commitment:
- [ ] Interview 5 solo DCs: quantify actual monthly clearinghouse fees vs. listed price
- [ ] Confirm Availity clearinghouse API access requirements (HIPAA BAA timeline, credentialing)
- [ ] Explore MVP scope reduction: SOAP notes + scheduling + cash billing only (no insurance) = Phase 1 to validate switching intent

## Source Links
- https://www.sprypt.com/blog/chiropractic-ehr-software-buyers-guide
- https://www.sprypt.com/blog/best-chiropractic-software-of-2026
- https://www.capterra.com/p/142407/ChiroFusion-Complete-Practice-Management/reviews/
- https://www.capterra.com/p/141960/ChiroSpring/reviews/
- https://www.g2.com/products/chirospring/reviews
- https://myzhealth.io/blog/complete-handbook-to-solving-chiropractic-billing-challenges/
- https://www.chirospring.com/articles/how-to-fix-chiropractic-billing-issues-2025
- https://www.softwareadvice.com/medical/chiropractic-emr-billing-software-comparison/

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-06-08 | 83/105 | competitor-analysis-2026-06-08 | First identified — comprehensive competitor analysis; hidden clearinghouse fees + OA45 denial fees + auto-logout + migration lock-in = multiple quantified pain vectors; Fresha-like switching moment building in chiro EHR market |

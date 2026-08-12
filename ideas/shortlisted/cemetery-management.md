# Cemetery Management SaaS (GraveKeeper) — Score: 87/105

**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: NEW
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-08-11
**LTD Price**: $299–999

## One-Line Pitch
Cloud replacement for 1990s desktop cemetery software (Cemetery Workstation, Sacred Grounds) — plot mapping, burial records, family search portal, and interment scheduling for the 80,000+ small municipal and church cemeteries that PlotBox can't afford to serve.

## Problem
130,000 cemeteries in the US. Most are small — municipal, church-run, or privately owned with under 10,000 plots. They run on:
- **1990s desktop software** (Cemetery Workstation, Sacred Grounds) that requires Windows installations and costs $2K–$10K/year
- **Spreadsheets** for burial records and plot availability
- **Paper forms** for interment scheduling and family requests
- **No family portal** — relatives searching for grave locations must call the office

The specific workflow gaps:
1. **Plot mapping**: No interactive map showing which plots are sold, reserved, or available; offices answer hundreds of phone calls from families searching for loved ones
2. **Burial record digitization**: Paper ledgers from 100+ years of records cannot be searched digitally; family history researchers cannot self-serve
3. **Interment scheduling**: Funeral home coordination for new burials is done via phone, fax, and email threads
4. **Revenue tracking**: Plot sales, perpetual care fees, and monument permits are tracked in separate systems
5. **Family portal**: Families cannot search for grave locations online without calling the cemetery office

PlotBox (the only cloud option) targets large enterprise cemeteries and DSOs — pricing and complexity puts them out of reach for the vast majority of small cemeteries.

## Market Evidence
- ~130,000 cemeteries in the US; ~80,000 are small (municipal, church-run, privately-owned under 10,000 plots)
- Legacy desktop software (Cemetery Workstation) commands $2K–$10K/year — proof of WTP from non-technical buyers
- Capterra reviews for Cemetery Workstation show frustration with dated UI and lack of cloud access
- fromscratch.dev (April 2026) explicitly flags cemetery management as an unbuilt niche with $8K–$20K MRR potential
- ICCFA (International Cemetery, Cremation, and Funeral Association) = direct distribution channel
- No indie SaaS player has entered this space; PlotBox dominates enterprise only

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Legacy desktop at $2K–$10K/yr = validated WTP; PlotBox proves enterprise market |
| Competitor Weakness | 5/5 | 2x | 10 | PlotBox = enterprise only (Ireland-based, complex pricing); 80K+ small cemeteries on 1990s desktop or Excel |
| LTD Viability | 5/5 | 2x | 10 | $299–999 lifetime license replacing $2K–10K/yr desktop = instant ROI calculation |
| No Free Tier | 5/5 | 1x | 5 | No free cemetery management tool exists at any tier |
| Channel Access | 3/5 | 2x | 6 | ICCFA (4,000 member organizations); state cemetery associations; cemetery administrator Facebook groups; municipal government networks |
| Content Potential | 3/5 | 1x | 3 | "Cemetery management software", "burial record software", "grave mapping software" = niche but high intent |
| AppSumo Fit | 4/5 | 2x | 8 | Unusual category = attention; institutional B2B = qualified buyers; no competitor on AppSumo |
| Review Potential | 3/5 | 1x | 3 | Institutional buyers review in ICCFA Journal; not typical G2 reviewer demographic |
| MRR Path | 4/5 | 3x | 12 | $99–199/mo per cemetery; municipal/church = extremely low churn once adopted; data is irreplaceable |
| Build Feasibility | 4/5 | 2x | 8 | SVG-based interactive plot map is achievable in 4–6 weeks; standard CRUD for records/scheduling |
| Boring Business Bonus | 5/5 | 2x | 10 | Cemeteries = maximum boring, maximum VC-invisible, maximum unsexy — perfect for indie positioning |

**Total: 87/105**

## Must-Have Filters
- [x] Problem is real (legacy desktop users paying $2K–$10K/year for Cemetery Workstation)
- [x] Can build without deep domain expertise (plot mapping + records database + scheduling = standard web stack)
- [x] No dominant affordable player (PlotBox targets enterprise only; no indie SaaS at any price)
- [x] Revenue potential > $10K MRR within 12 months (100 small cemeteries × $99/mo = $9,900 MRR — achievable with ICCFA partnership)

## Boring Business Fit Check
- VCs ignore this completely (good — no funded competition)
- Cemetery administrators are non-technical (good — low "build their own" risk)
- Existing software is outdated and desktop-bound (good — clear migration story)
- Cemeteries have perpetual operating budgets (good — reliable payers)
- Churn is essentially zero once plot maps and burial records are loaded (data is irreplaceable)

## Product Concept: "GraveKeeper"

**Core MVP (4–6 weeks):**
1. **Interactive plot map** — SVG/Canvas-based visual cemetery map; click a plot to see status (available/reserved/sold/buried), price, and owner info
2. **Burial records database** — searchable digital records with import from Excel/CSV; family self-search portal
3. **Interment scheduling** — coordination log for upcoming burials; funeral home contact management; date/time scheduling with confirmation
4. **Plot sales** — record plot purchases, payment tracking, deed generation (PDF template)
5. **Perpetual care fee tracking** — annual fee billing for endowed care agreements

**Phase 2:**
- Public-facing family search portal (embedded on cemetery website)
- Historical record digitization tools (photo-to-record OCR)
- Monument permit management
- QuickBooks integration for revenue tracking
- Mobile app for groundskeeping crew

## Pricing
- $99/mo for cemeteries under 5,000 plots
- $199/mo for cemeteries 5,000–25,000 plots
- **LTD**: $299 (under 5,000 plots) / $599 (under 25,000 plots) / $999 (unlimited)
- Target: replace $2,000–$10,000/year desktop license = easy ROI conversation

## Target Channels
- **ICCFA** (International Cemetery, Cremation, and Funeral Association) — 4,000 member organizations; annual conference
- State cemetery associations (National Cemetery Conference affiliates)
- Facebook groups: "Cemetery Administration Professionals", "Cemetery and Funeral Professionals"
- Municipal Parks & Recreation departments (often manage municipal cemeteries)
- ICFA (Illinois Cemetery & Funeral Association) newsletter and similar state groups
- Cold email to municipal cemetery administrators via public government directories

## GTM Strategy
1. Contact ICCFA for sponsored newsletter feature — "Cloud replacement for Cemetery Workstation at a fraction of the cost"
2. Offer free data migration service for first 20 customers (differentiates from desktop where you're on your own)
3. AppSumo launch at $299 LTD to flood with initial users and reviews
4. "Family search portal" as a free public-facing feature to drive organic discovery

## Risks
1. **Sales cycle length**: Municipal and institutional buyers require committee approval; expect 2–4 month sales cycles for larger accounts
2. **Data migration complexity**: Historical paper records digitization requires significant upfront effort from the cemetery; could stall adoption
3. **Plot map data creation**: Each cemetery needs to create their plot map from scratch (no standardized format exists); could be a barrier
4. **TAM ceiling**: ~80K small cemeteries × $99–199/mo = potential $95M–$190M ARR at 100% penetration; realistic ceiling with 1% penetration = $950K–$1.9M ARR

## Key Source Links
- https://fromscratch.dev/blog/boring-saas-ideas
- https://plotbox.io/blog/cemetery-management-the-advantages-of-saas-solutions-for-cemeteries
- https://www.capterra.com/p/10005008/Cemetery-Workstation/reviews/
- https://www.iccfa.com/
- https://www.iccfa.com/resources/publications/
- https://nichecheck.com/blog/100-micro-saas-niches

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-08-11 | 87/105 | hn-indiehackers-2026-08-11 | First identified — fromscratch.dev April 2026 article flags as unbuilt niche; PlotBox = enterprise only (Ireland); 80K+ small US cemeteries on 1990s desktop or Excel; ICCFA = direct distribution; $299–999 LTD replacing $2K–10K desktop; $99-199/mo MRR path; build in 4-6 weeks; SVG plot map + burial records + family portal = MVP |

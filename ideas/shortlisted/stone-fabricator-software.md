# Natural Stone / Countertop Fabricator Software

**Score**: 75/105
**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-04-27

## One-Line Pitch
Modern cloud software for kitchen countertop fabricators — slab photo catalog, QR inventory, cut tracking, and installer dispatch replacing 20-year-old Windows desktop apps.

## Problem

Natural stone countertop fabricators (kitchen/bath countertop shops) manage complex operations:
- Slab inventory (every slab is unique — different veining, color, size)
- Customer job tracking (measuring → templating → cutting → polishing → installation)
- Remnant management (tracking leftover pieces for small jobs)
- Installer scheduling and route dispatch

Today they do this with **Moraware** or **Stone Profit System** — both 1990s-2000s Windows desktop software, both requiring on-premise installations, both with no mobile access. HN "underserved industries" commenter with direct industry experience noted: "only 5–7 major software solutions exist" across the entire stone industry. That's a market with virtually zero modern competition.

The switching insight: stone fabricators are profitable ($500K–$5M annual revenue), technology-averse (mostly owner-operated), and willing to pay for software that saves even 1 hour/day. Remnant tracking alone (knowing what offcuts are usable for small jobs) saves thousands per year.

## Market Evidence

- ~8,000 stone fabricators in the US (countertop shops, stone yards, kitchen/bath showrooms with fabrication)
- ISFA (International Surface Fabricators Association): primary trade body; 1,000+ members = distribution channel
- HN "underserved industries" thread: commenter confirmed "only 5-7 major software solutions across quarries, factories, distributors, fabricators"
- Moraware and Stone Profit System: both desktop-only with last major updates in early 2010s
- Average fabricator revenue: $500K–$5M/year; $199/month = 0.04–0.4% of revenue = easy ROI

## Scoring Breakdown

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 3/5 | 9 | HN insider confirmed; legacy desktop tools prove market exists; no indie paying-customer signal yet |
| Competitor Weakness | 5/5 | 10 | Moraware and Stone Profit System are 2000s-era Windows desktop apps; no modern cloud/mobile SaaS exists |
| LTD Viability | 3/5 | 6 | $199–299 LTD viable for B2B fabricators; photo storage complexity means some ongoing costs |
| No Free Tier | 4/5 | 4 | No free stone fabricator management software |
| Channel Access | 3/5 | 6 | ISFA (1,000+ member fabricators), KBIS (Kitchen & Bath Industry Show), countertop installer FB groups |
| Content Potential | 3/5 | 3 | "countertop fabricator software", "stone slab inventory management", "Moraware alternative" = low-competition SEO |
| AppSumo Fit | 3/5 | 6 | B2B niche; stone fabricators not typical AppSumo audience, but a category-first deal would stand out |
| Review Potential | 3/5 | 3 | Tight-knit industry; strong word-of-mouth if product works; ISFA community very active |
| MRR Path | 4/5 | 12 | $199/month × 200 shops = $40K MRR; ultra-sticky once slab inventory is loaded (switching = re-photographing/re-tagging every slab) |
| Build Feasibility | 3/5 | 6 | Slab photo catalog + QR inventory + cut tracking + customer orders + installer dispatch = 5–6 week MVP |
| Boring Business Bonus | 5/5 | 10 | Natural stone fabrication = deeply boring industry; zero VC interest |
| **TOTAL** | | **75/105** | |

## Key Differentiators
1. **Photo slab catalog** — every slab photographed on intake with dimensions and material type; searchable by customer when selecting stone
2. **QR-tagged inventory** — scan QR code on slab to see full history, availability, dimensions, remnant pieces
3. **Cut planning** — which slab allocated to which job; how much remains; remnant library for small jobs
4. **Installer dispatch** — schedule installers, track daily route, capture completion photos with customer signature
5. **Cloud + mobile** — access from office computer, tablet in the shop, or phone at the customer's home during templating
6. **Customer portal** — clients upload kitchen measurements, view slab options, approve designs

## LTD Pricing
- $199 LTD: Up to 500 slabs in inventory, 50 active jobs
- $299 LTD: Unlimited slabs, unlimited jobs, installer dispatch, customer portal
- Ongoing: $199/month flat rate

## Target Channels
- ISFA (International Surface Fabricators Association) — membership directory + annual conference
- KBIS (Kitchen & Bath Industry Show) — major annual trade show
- Facebook groups: "Stone Industry Professionals", "Countertop Fabricators USA"
- Cold outreach to local countertop shops (high density in suburban markets)
- Moraware users: "Moraware alternative" content targeting

## Next Steps
1. Validate demand: post in ISFA community or countertop FB groups asking "what software do you use and what's your biggest operations headache?" — aim for 20 responses
2. Build MVP: slab intake (photo + dimensions + material type + QR code) + customer job card + cut allocation + installer scheduling
3. Beta: offer 6-month free to first 10 fabricators who provide detailed feedback
4. Price at $199/month from day 1 (not LTD first — data shows B2B fabricators prefer subscription)
5. Attend ISFA annual conference for direct sales

## Top Risks
1. **Small TAM** — ~8,000 stone fabricators in US; $10K MRR requires only 50 customers at $199/mo; ceiling visible
2. **Photo storage at scale** — high-res slab photos (10–50MB each) × 500 slabs per shop × 200 shops = significant S3/Cloudflare R2 costs
3. **Market validation is indirect** — HN insider signal only; no confirmed paying customers for cloud-native stone software
4. **Moraware has incumbent relationships** — existing customers have years of historical data and trained staff; migration friction is real
5. **International complexity** — stone suppliers primarily in Brazil, Italy, India; may need Portuguese/Italian support for expansion

## Key Source Links
- [HN "What industries are underserved by software?" thread](https://news.ycombinator.com/item?id=22496129)
- [Superframeworks: best micro-SaaS ideas for solopreneurs](https://superframeworks.com/articles/best-micro-saas-ideas-solopreneurs)
- [ISFA — International Surface Fabricators Association](https://www.isfanow.org/)
- [Moraware — incumbent desktop solution](https://www.moraware.com/)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-04-27 | 75/105 | hn-indiehackers-2026-04-27 | First identified; HN "underserved industries" insider signal; strongest moat = ultra-sticky once slab inventory loaded; small TAM but virtually no modern competition |

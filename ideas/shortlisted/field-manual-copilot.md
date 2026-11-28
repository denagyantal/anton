# Field Manual Copilot — Score: 85/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-11-15

## One-Line Pitch
Mobile RAG tool for HVAC/plumbing techs: photograph equipment model number → retrieve manual → summarize relevant pages → draft parts list and invoice language — the $79K MRR tool that XOi/Bluon built for enterprise but nobody built for sub-20-tech shops.

## Problem
HVAC and plumbing technicians waste 45–90 minutes per job hunting down equipment manuals, cross-referencing part numbers, and writing up invoice descriptions. Enterprise tools exist (XOi, Bluon, Specifx) but all require fleet-level contracts or were acquired into expensive suites. The solo tech and small mixed-trade shop (boilers + HVAC + plumbing in one crew) has no tool.

The specific unserved wedge: **boiler/hydronics service**. HVAC software like Bluon (refrigerant-focused) doesn't cover hydronic heating systems. XOi was acquired by Specifx for $230M (KKR-backed) and went enterprise. Sub-20-tech shops doing boilers, radiant heat, and mixed plumbing/HVAC have no mobile-first field manual tool.

## Market Evidence
- XOi acquired Specifx for ~$230M (KKR) — validates enterprise demand for field knowledge tools
- Bluon: HVAC-focused refrigerant reference app, mobile-first, proven model — but HVAC only
- HN discussion Nov 2026: founder building exactly this reported immediate "I'd pay for that" responses from HVAC techs
- Sub-20-tech shops confirmed as unserved: mixed-trade (boiler + HVAC + plumbing) = Bluon doesn't cover, XOi/Specifx too expensive
- "$79K MRR attainable for 1,000 customers at $79/mo" — validated in HN/IH analysis
- Equipment manuals: manufacturers publish PDFs; legal to ingest for search tools (fair use, reference purpose)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | XOi $230M acquisition validates market; Bluon proven mobile model; HN immediate positive response |
| Competitor Weakness | 4/5 | 2x | 8 | XOi/Specifx enterprise-only post-acquisition; Bluon HVAC only (no boilers/hydronics); sub-20-tech gap confirmed |
| LTD Viability | 4/5 | 2x | 8 | $79-99 LTD for solo tech; "one avoided callback pays for lifetime" pitch |
| No Free Tier | 4/5 | 1x | 4 | No free RAG manual tool for trades exists |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/Plumbing, PHCC (Plumbing-Heating-Cooling Contractors), trade school communities |
| Content Potential | 3/5 | 1x | 3 | "HVAC manual lookup app", "field service knowledge base", niche but high-intent searches |
| AppSumo Fit | 3/5 | 2x | 6 | HVAC techs less AppSumo-native; direct trade community launch stronger |
| Review Potential | 4/5 | 1x | 4 | HVAC forums and Capterra; passionate niche reviewers |
| MRR Path | 4/5 | 3x | 12 | $29-79/mo subscription; shop owner pays per tech seat; sticky once techs adopt workflow |
| Build Feasibility | 3/5 | 2x | 6 | RAG pipeline + equipment DB + mobile OCR = moderate build; 4-6 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | HVAC/boiler service = deeply unglamorous, VC-ignored, compliance-heavy |

**Total: 79/105**

## Must-Have Filters
- [x] Problem is real (XOi $230M exit; HN immediate positive response; Bluon proven mobile model)
- [x] Can build without deep domain expertise (RAG + PDF ingestion + mobile OCR — no HVAC license needed)
- [x] No dominant affordable player (all enterprise; Bluon HVAC-only)
- [x] Revenue potential > $10K MRR within 12 months (1,000 solo techs at $19/mo = $19K MRR)

## Boring Business Fit Check
- VCs ignore this market? Yes — unglamorous field service knowledge tooling
- Customers non-technical? Yes — HVAC/boiler techs want mobile simplicity, not SaaS dashboards
- Existing software outdated/overpriced? Enterprise tools $200+/mo per shop; Bluon HVAC-only
- Real budgets? Yes — HVAC techs pay for Bluon, TechBook, field service apps; $19-29/mo normal
- Low churn? High stickiness — integrated into daily diagnosis workflow

## Product Concept: "FieldCopilot"

**Pricing**: $19/mo solo tech | $49/mo shop (up to 5 techs) | $79 LTD solo (AppSumo)

**Core MVP (4–6 weeks):**
1. **Model number OCR** — photograph equipment nameplate → extract model/serial number via OCR
2. **Manual retrieval** — query equipment manufacturer database → retrieve PDF manual
3. **RAG summarization** — "what does error code E5 mean on this boiler?" → answer from manual with page reference
4. **Parts list generator** — tech describes symptom → system suggests parts from manual parts table
5. **Invoice language** — "write a service description for replacing the expansion tank" → professional paragraph

**Boiler/Hydronics Wedge:**
- Pre-index manuals for Burnham, Weil-McLain, Peerless, Slant/Fin, Triangle Tube (top US boiler brands)
- Hydronic system troubleshooting Q&A not covered by any existing mobile tool
- "The Bluon for boilers" = positioning against a known reference point

**Phase 2:**
- Photo-to-quote: photograph job site → AI generates estimate
- Auto-invoice after job completion
- Integrates with ServiceTitan/Jobber via webhooks

## Target Channels
- r/HVAC, r/Plumbing, r/HydronicsHeat
- PHCC (Plumbing-Heating-Cooling Contractors Association) forums
- Facebook Groups: "HVAC Business Owners", "Boiler Service Technicians"
- Trade school instructor outreach (students = early adopters)

## Top Risks
1. **Manual copyright** — manufacturers may object to PDF ingestion; mitigation: link to official source, don't redistribute full PDFs
2. **Equipment database breadth** — users expect their specific model to be in the database; needs 10K+ models at launch
3. **RAG accuracy** — wrong parts suggestion on HVAC = field liability; must be conservative and cite manual page
4. **Bluon expansion** — Bluon could expand to boilers/hydronics; monitor their roadmap

## Key Source Links
- HN Nov 2026: Clawbolt open source (Mozilla.ai) — adjacent WhatsApp AI for trades validation
- XOi/Specifx $230M acquisition (KKR) — enterprise validation
- Bluon mobile HVAC reference app — proven mobile model for trades field tools
- PHCC: https://www.phccweb.org/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-15 | 85/105 | hn-indiehackers-2026-11-15 | First identified — HN: "Field Manual Copilot" concept from HN discussion; XOi acquired Specifx for $230M (KKR) = enterprise validation; Bluon proven mobile HVAC reference model; sub-20-tech mixed-trade shops (boiler + HVAC + plumbing) confirmed unserved; boiler/hydronics wedge = specific white space (Bluon refrigerant-only, XOi enterprise); "$79K MRR attainable for 1,000 customers at $79/mo"; model OCR → manual RAG → parts suggestion → invoice language = core workflow; "FieldCopilot" concept: $19/mo solo, $49/mo shop, $79 LTD; 4-6 week build; Sources: hn-indiehackers-2026-11-15 |
| 2026-11-20 | 85/105 | hn-indiehackers-2026-11-20 | Stable: SINGLE-source — HN/IH: "Startup Heist $79K MRR analysis" confirms Field Manual Copilot concept — mobile RAG for small HVAC/plumbing shops; 60,000 US HVAC/plumbing establishments <5 employees confirmed as primary TAM; ServiceTitan $245-398/tech/mo unaffordable for sub-20-tech shops; boiler/hydronics wedge in cold-weather states (Northeast/Midwest) = specific white space; XOi/Specifx $230M acquisition = enterprise validation; $79/mo for sub-20-tech shops confirmed unoccupied |
| 2026-11-28 | 87/105 | hn-indiehackers-2026-11-28 | ↑2: SINGLE-source — HN/IH: Startup Heist published full "$79K MRR path analysis" — 300 shops at $79/mo = $24K MRR, 1,000 shops = $79K MRR; ServiceTitan $961M revenue + XOi/Specifx $230M KKR acquisition = market size confirmed at scale; 60,000 US HVAC/plumbing establishments <5 employees = confirmed primary TAM; ServiceTitan $245-398/tech/mo vs $79/mo flat = exact white space articulated; mobile PWA: photo of model number → AI retrieves manual + summarizes → drafts parts notes + invoice language = unbuilt workflow confirmed; distribution: Facebook groups for small HVAC owners + cold email to shops NOT on ServiceTitan; score bumped 85→87 on published market analysis confirming $79K MRR path; Sources: startupheist.com/the-field-manual-copilot-79k-mrr-underneath-servicetitan, news.ycombinator.com/item?id=47325824 |

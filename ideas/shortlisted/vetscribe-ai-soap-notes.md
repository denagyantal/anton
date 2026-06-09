# VetScribe — AI Voice-to-SOAP Note Generator — Score: 85/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-05-13
**Decision Status**: NEW

## One-Line Pitch
AI voice recorder that turns a vet exam into a structured SOAP note in 30 seconds — $79 LTD vs. Shepherd's unreliable beta that crashes entire practice management systems.

## Problem
47% of veterinarians want AI tools added to their practice software (VetSoftwareHub 2026 survey). Shepherd Vet shipped AI SOAP notes in beta but suffered 6+ multi-hour outages in February 2026 alone with no offline mode — when the cloud goes down, the whole practice stops. ezyVet is "horrid, horrid, horrid" and requires seven steps for a single thing. Legacy tools (Cornerstone, Avimark) have no AI at all. Solo and 2-3 vet practices can't afford $419-549/mo full PIMS just to get AI note-taking. They need a simple tool: record the exam, get a structured SOAP note, paste into whatever PIMS they already use.

## Market Evidence
- ~30,000 veterinary practices in US; 90%+ on legacy or inadequate software
- 47% of vets want AI tools added (VetSoftwareHub 2026 survey)
- Shepherd vet: 6+ multi-hour outages in Feb 2026 = demonstrated reliability gap
- Cornerstone/Avimark/ImproMed all lack AI; combined installed base = thousands of practices
- vet SOAP note = 10-15 minutes per patient = significant daily time sink
- AI transcription via Whisper API = $0.006/minute (essentially free at scale)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 47% demand; Shepherd AI SOAP beta validates category |
| Competitor Weakness | 5/5 | 2x | 10 | Shepherd unreliable (6+ outages); no standalone reliable AI SOAP tool |
| LTD Viability | 5/5 | 2x | 10 | $79-99 LTD; Whisper API = cheap; no infrastructure headache |
| No Free Tier | 4/5 | 1x | 4 | No free AI SOAP tools; vets expect to pay for clinical tools |
| Channel Access | 3/5 | 2x | 6 | VIN, AAHA forums, r/veterinary — smaller but targeted |
| Content Potential | 3/5 | 1x | 3 | "AI vet notes", "veterinary SOAP generator" — growing searches |
| AppSumo Fit | 4/5 | 2x | 8 | Solo tools at $79-99 LTD are perfect AppSumo; saves 10-15 min/patient |
| Review Potential | 3/5 | 1x | 3 | Vets review if measurably saves time |
| MRR Path | 3/5 | 3x | 9 | Limited standalone MRR; upgrade path = full PIMS integration layer |
| Build Feasibility | 5/5 | 2x | 10 | Whisper/ElevenLabs + SOAP template = 2-3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Veterinary practice = deeply boring |

**Total: 85/105**

## Must-Have Filters
- [x] Problem is real (47% demand; Shepherd failure documented)
- [x] Can build without deep domain expertise (transcription + template; SOAP format is standard)
- [x] No dominant player in standalone AI SOAP for vets
- [x] Revenue potential >$10K MRR within 12 months (500 customers × $19/mo = $9.5K MRR; or 150 LTD × $99 = $14.9K upfront)

## Product Concept

**MVP (2-3 weeks):**
- Mobile app (iOS + Android): record vet exam audio
- AI transcription via OpenAI Whisper
- Structured output: Subjective / Objective / Assessment / Plan
- Species-specific SOAP templates (dog, cat, exotic)
- One-click copy to clipboard → paste into any PIMS (Cornerstone, Avimark, ezyVet, etc.)
- Export as PDF for client records

**Pricing:**
- $79–99 LTD (AppSumo or direct)
- $19/mo subscription post-LTD (per vet)
- Team plan: $99/mo for up to 5 vets

**Upgrade path:** Full PIMS integration → push directly into Cornerstone/Avimark/ezyVet via API/browser extension.

## Key Differentiators
1. **Standalone reliability** — works independently of PIMS; no outage risk
2. **PIMS-agnostic** — paste into any existing system, no migration required
3. **Speed** — 30-second SOAP note vs. 10-15 minutes manual
4. **LTD pricing** — $79 vs. Shepherd's ongoing subscription + per-vet pricing

## Target Channels
- Veterinary Information Network (VIN) — primary vet community forum
- American Animal Hospital Association (AAHA) newsletter
- r/veterinary, r/VetTech
- Facebook groups for veterinary practice managers
- NAVC Conference (largest North American vet conference)
- Direct outreach to Cornerstone/Avimark practice migration campaigns

## Top 3 Risks
1. Shepherd stabilizes AI SOAP and bundles it into base PIMS subscription
2. Niche channel access (vet community smaller than trades; requires targeted outreach)
3. Limited MRR ceiling as standalone (requires PIMS integration for LTV expansion)

## Key Source Links
- https://www.shepherd.vet/blog/ai-in-veterinary-software-feature-comparison-for-2026/
- https://www.nectarvet.com/post/shepherd-vet-software-pricing-reviews
- https://www.vetsoftwarehub.com/article/best-veterinary-practice-management-software-2026
- https://www.capterra.com/p/99977/ezyVet-Cloud-Vet-Software/reviews/
- https://digitail.com/pricing/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-13 | 85/105 | reddit-2026-05-13, competitor-analysis-2026-05-13, trends-2026-05-13 | First identified; Shepherd 6+ outages Feb 2026 = reliability gap; 47% vets want AI tools; standalone SOAP = fastest LTD path; Whisper = 2-3 week build |
| 2026-05-26 | 87/105 | reddit-2026-05-26, trends-2026-05-26 | ↑2: DUAL-source — Reddit: IDEXX Cornerstone $420/mo base (+ server hardware + maintenance + training + per-module add-ons) = total cost far exceeds listed price; ezyVet $230/mo/user; 30,000+ independent vet practices in US massively underserved for cloud-native affordable PIMS; Cornerstone "started as diet calculator with features bolted on" = entrenched platform ripe for disruption; migration resistance = standalone SOAP tool (no platform switch required) confirmed as best entry; Trends: CoVet 550% user growth in 2025 (20+ languages); Shepherd TranscribeAI + Digitail Tails AI embedding SOAP natively in platform; a16z explicitly named veterinary services as underserved vertical AI market; NEW critical white space: standalone tool working alongside ANY existing PIMS (Cornerstone, ezyVet, AVImark) = serves the migration-resistant segment; $299–499 LTD; browser audio → Whisper → Claude SOAP → PDF in 2–3 weeks; 30K+ independent vet practices; Sources: shepherd.vet/blog/8-best-ai-powered-veterinary-practice-management-software-platforms-2026, nectarvet.com/post/cornerstone-vet-software-pricing-reviews, co.vet/post/veterinary-software-comparison/, thedp.com/article/2026/04/penn-veterinary-artificial-intelligence-startup |
| 2026-06-09 | 89/105 | competitor-analysis-2026-06-09 | ↑2: Full PIMS angle confirmed — competitor analysis introduces VetDesk concept at $149/mo as modern cloud-native PIMS targeting Cornerstone/AVImark migration; validates broader PIMS opportunity beyond standalone SOAP notes; Cornerstone $420/mo base + hardware costs = pricing arbitrage confirmed; 30K+ independent vet practices in US confirmed underserved; standalone SOAP notes (entry wedge) + full PIMS (expansion path) = two-phase product strategy confirmed; Sources: competitor-analysis-2026-06-09 |

---
name: Post-Job Documentation Tool for Trades
description: Voice/photo capture on-site → warranty-ready PDF report with parts installed, work completed, next service recommendation — for HVAC, roofing, plumbing; first identified 2026-10-23 at 85/105
type: shortlisted
---

# Post-Job Documentation Tool for Trades — Score: 85/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-10-23
**Decision Status**: NEW

## One-Line Pitch

Voice + photos on the job site → professional warranty-ready PDF report with parts installed, work done, and next service recommendation — sent to the customer before you leave the driveway.

## Problem

Field workers — HVAC techs, roofers, plumbers, electricians — generate enormous amounts of information on every job (equipment state, scope of work, parts installed, photos of issues, warranty info) but capture it inefficiently: handwritten notes, texts to the office, or memory.

The current post-job reality:
1. Tech finishes job, takes a few phone photos
2. Office admin calls to ask what happened
3. Hand-written invoice gets typed up (maybe next day)
4. Customer gets a paper receipt but no documentation of what was done
5. 3 months later: customer dispute about what was covered; photos are scattered across 3 devices

**The gap**: No affordable tool generates a **professional, warranty-ready completion report** from field voice + photo capture. Tools like Feldy (YC W26, 200+ paying customers) and SMASH (Voice to Invoice) target **pre-job estimating** — "tell me what you need done, I'll generate a quote." Nobody has built the **post-job** version: "here's what we did, here's what we installed, here's your warranty, here's when your next service is due."

**Trend evidence**: A plumbing company operator on X open-sourced 9 AI automations including "photo marketer" (job photos → social media before/after posts) and "quote builder" (plain-English description → priced quote). The infrastructure for voice/photo → document is proven. The post-job documentation use case is simply unbuilt as a clean product.

**Two unmet needs this solves simultaneously**:
1. Professional record-keeping for disputes and warranty claims
2. Upsell trigger: "Next service recommendation: schedule annual HVAC tune-up before winter" → instant service agreement sale

## Market Evidence

- Feldy (YC W26): 200+ paying customers doing field capture → AI estimate → confirms willingness to pay for mobile-first field tools
- SMASH Voice to Invoice: "talk into your phone → priced quote in 60 seconds" = live product validates voice capture in field
- CostLogic: blueprint → AI agent takeoff → invoice = broader capture-to-document flow validated
- Plumbing company AI automations (X thread): "photo marketer" and "quote builder" both existed as individual automations — combined post-job report was the missing piece
- r/HVAC, r/Roofing, r/ConstructionPros: multiple threads on "repair amnesia" — no way to retrieve what was done on specific equipment 2 years ago
- CompanyCam ($25/mo, photos-only for contractors) = adjacent product with 25K+ users; validates photo capture willingness to pay; doesn't generate reports

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Feldy 200+ customers; SMASH live; CostLogic; plumbing 9 AI automations; CompanyCam 25K+ users |
| Competitor Weakness | 4/5 | 2x | 8 | Feldy/SMASH do pre-job estimating, not post-job documentation; CompanyCam photos-only (no report gen) |
| LTD Viability | 5/5 | 2x | 10 | $59–79 LTD = natural price point; "job documentation kit for [trade]" AppSumo positioning |
| No Free Tier | 4/5 | 1x | 4 | Phone photos + texts = free but not professional or organized |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/Roofing, r/Plumbing, contractor FB groups, AppSumo |
| Content Potential | 3/5 | 1x | 3 | "contractor job documentation app", "HVAC job completion report", "roofing service report" |
| AppSumo Fit | 4/5 | 2x | 8 | "Warranty-ready job report from your phone" = clear 60-second demo; distinct from generic invoicing tools |
| Review Potential | 3/5 | 1x | 3 | Trades with fewer disputes = motivated reviewers |
| MRR Path | 3/5 | 3x | 9 | Standalone = narrow; expand to full FSM or upsell service agreement tracking |
| Build Feasibility | 5/5 | 2x | 10 | Voice-to-text (Whisper) + photo upload + PDF template = 3–5 weeks for single trade vertical |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC, roofing, plumbing = deeply boring blue-collar trades |

**Total Weighted Score: 85/105**

## Must-Have Filters
- [x] Problem is real (CompanyCam 25K+ users prove photo capture WTP; r/HVAC "repair amnesia" documented; Feldy/SMASH validate field capture market)
- [x] Can build without deep domain expertise (voice-to-text + photo upload + PDF template per trade = standard stack)
- [x] No dominant player (Feldy/SMASH do pre-job; CompanyCam photo-only; nobody does post-job completion PDF)
- [x] Revenue potential > $10K MRR within 12 months (500 contractors × $19–29/mo = $9.5K–14.5K MRR)

## Boring Business Fit Check
- ✅ VCs ignore post-job documentation for individual trades techs entirely
- ✅ HVAC/roofing/plumbing techs are non-technical; "talk and take photos" = zero training required
- ✅ Existing solution (phone photos + texts) is embarrassing compared to a professional PDF report
- ✅ Real business budgets: $19–29/mo is trivial vs. one avoided dispute
- ✅ Once tech has job history in the app, switching means losing warranty records = high retention

## Product Concept: "JobDoc" (or "TradeReport")

**Pricing**: $19/mo (solo tech, unlimited jobs) / $39/mo (up to 5 techs, company-level)
**LTD**: $59 (solo, lifetime) / $99 (up to 3 techs)

**Core MVP (3–5 weeks) — Start with HVAC vertical:**

1. **Job creation** — customer name, site address, job type (service call / installation / repair). Link to service agreement if applicable.

2. **Voice capture on-site** — "Describe what you found and what you did" → auto-transcribes via Whisper API → structured summary (Problem Found / Work Performed / Parts Installed)

3. **Photo capture** — before/after photos per job, each captioned by voice. Organized by job automatically.

4. **Parts log** — speak part numbers or select from trade-specific library (filter models, capacitors, motors for HVAC) → auto-populates "Parts Installed" section of report

5. **Report generation** — PDF report includes: job summary, parts installed with part numbers, technician notes, before/after photos, next service recommendation with suggested date, warranty statement, and company branding.

6. **Send from the driveway** — one tap to email or text the PDF report to the customer immediately on job completion. Customer gets professional documentation while the job is fresh.

7. **Job history** — searchable by customer, address, equipment type, date — "what did we do at 123 Main Street last time?"

**Phase 2:**
- Service agreement upsell: "Schedule your next tune-up" CTA embedded in report → customer books from PDF link
- Integration with QuickBooks/Stripe for invoice generation from same job record
- Company-level team view: manager sees all techs' job reports
- Review request automation: send Google review link 24 hours after report delivered

## Key Differentiators
1. **Post-job, not pre-job** — Feldy/SMASH capture job scope before the estimate; this captures what was actually done after the job — different use case, different buyer decision
2. **Warranty-ready formatting** — parts installed with part numbers, warranty statement, next service recommendation = the specific professional output trades need for liability and upsell
3. **Driveway-fast** — done in 3 minutes while still in the customer's driveway; customer gets it before you leave
4. **"Repair amnesia" elimination** — searchable job history per address means tech can look up what was done 3 years ago in 10 seconds

## Target Channels
- r/HVAC, r/ProHVACR — target "what do you use for job documentation?" threads
- r/Roofing — "roofing CRM" and "job photo documentation" discussions
- Facebook: "HVAC Business Owners", "Roofing Contractors" groups
- CompanyCam users frustrated by "photos-only, no report" limitation
- AppSumo at $59–79 LTD: "The job report your customers deserve, from your phone"

## Top 3 Risks
1. **Expansion pressure** — standalone documentation tool at $19/mo has limited ARPU; must either expand to full FSM or price company tiers higher
2. **Feldy/SMASH expanding post-job** — both are in the "field capture" category; post-job is a natural next step for either; 6–12 month window before they get here
3. **Trade-specific customization** — HVAC job report template differs from roofing, plumbing; maintaining templates per trade = ongoing content work (start with one trade only)

## Key Source Links
- https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors/
- https://www.producthunt.com/products/smash-voice-to-invoice
- https://www.unrollnow.com/status/2099323544366916046 (plumbing 9 AI automations open-sourced)
- https://www.producthunt.com/products/costlogic
- https://companycam.com (adjacent product — 25K+ users, photos-only)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-23 | 85/105 | hn-indiehackers-2026-10-23, trends-2026-10-23, reddit-2026-10-23 | First identified: Trends (Trend 8: Voice-to-Document Field Workflows) — Feldy YC W26 (200+ paying customers, field capture → estimate); SMASH Voice to Invoice live; plumbing company open-sourced 9 AI automations (photo marketer + quote builder); "job documentation app that generates warranty-ready post-job reports from field captures" identified as white space; HN/IH: SMASH + Feldy + CostLogic all doing pre-job capture — post-job documentation angle unoccupied; Reddit: r/Roofing "repair amnesia" pattern + before/after photo loss undermining warranty defenses; CompanyCam 25K+ users proves photo capture WTP; post-job (completion report) distinct from pre-job (estimate) = new opportunity; "TradeReport" concept: voice + photos on-site → warranty-ready PDF (parts installed, work done, next service recommendation) sent to customer from driveway; HVAC or roofing to start; $59–79 LTD; 3–5 week MVP; Sources: ycombinator.com/launches/SiZ-feldy, producthunt.com/products/smash-voice-to-invoice, unrollnow.com/status/2099323544366916046 |

# Barbershop Walk-In Queue Management (ChairQ) — Score: 88/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-09-23
**Decision Status**: NEW

## One-Line Pitch
The first barbershop management app that handles both walk-ins (QR code queue, TV display, wait times) and appointments in one view per chair — no more whiteboard + Booksy + Square patchwork.

## Problem
80,000+ US barbershops operate a fundamentally different workflow than salons: walk-ins are the dominant model, not appointments. Every piece of software in this market was built for spas and salons first:

- **Booksy**: appointment-first; no walk-in queue management at all
- **Vagaro**: spa-first; per-bookable-calendar pricing pushes 3-person barbershop to $150–200/mo with add-ons; "interface feels cluttered"
- **Square Appointments**: no color formula tracking, weak multi-stylist coordination, no chair-level workflow
- **Fresha**: commission-based model surprises operators when volume scales

Current workaround: whiteboard for walk-in queue + Booksy for appointments + Square for payment = 3 separate systems, constant reconciliation, no client history across all interactions.

The specific gap: a walk-in customer joins the queue via QR code → barber sees their place in queue, assigned chair, and their style preferences (guard sizes, taper notes, lineup preferences) from last visit. That workflow doesn't exist in any product.

## Market Evidence
- 80,000+ barbershops in the US
- Vagaro/Booksy/Square all have active complaint threads about lack of walk-in queue features
- BarberEVO forum: recurring "what do you use for walk-ins?" discussions
- Booksy "lacks chair-level workflows, quick service bundling, and client preference tracking" — TheSalonBusiness.com review
- Vagaro: 3-person shop pays $50+/mo before add-ons; with forms + marketing = $150–200/mo

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Booksy/Vagaro prove willingness to pay; 80K+ barbershops; walk-in is dominant model |
| Competitor Weakness | 5/5 | 2x | 10 | Nobody owns walk-in queue; all competitors are spa-first |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD; low infrastructure overhead |
| No Free Tier | 4/5 | 1x | 4 | Paper whiteboard is free but digital queue + client prefs = worth paying |
| Channel Access | 5/5 | 2x | 10 | r/Barber, BarberEVO forum, Instagram #barberlife — very vocal community |
| Content Potential | 4/5 | 1x | 4 | "barbershop software", "walk-in queue app for barbers" |
| AppSumo Fit | 4/5 | 2x | 8 | Barbers community-driven; deal-sharing vocal |
| Review Potential | 4/5 | 1x | 4 | Barbers leave reviews in community forums and on social media |
| MRR Path | 4/5 | 3x | 12 | $39–49/mo per shop; client preference profiles drive retention |
| Build Feasibility | 4/5 | 2x | 8 | Walk-in QR queue + appointments + chair assignment + client notes + POS = 3–4 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Barbershop = unglamorous local service |

**Total: 88/105**

## Must-Have Filters
- [x] Problem is real (every barbershop uses whiteboard for walk-ins; no digital solution exists)
- [x] Can build without deep domain expertise (queue management + booking + CRM + POS)
- [x] No dominant player (Booksy/Vagaro are spa-first; walk-in queue = zero competition)
- [x] Revenue potential > $10K MRR within 12 months (500 barbershops × $19-49/mo)

## Key Differentiators
1. **Walk-in QR queue** — customer scans QR code, enters name + service, joins virtual queue on their phone with live wait time
2. **TV/tablet display mode** — shop floor screen shows queue by chair ("Chair 1: Mike — fade + lineup — 12 min wait")
3. **Chair-level workflow** — each barber has their own queue view; see only your assigned customers
4. **Client preference profiles** — guard sizes, taper notes, lineup style, saved from previous visits
5. **Combined view** — walk-ins and booked appointments in one timeline per chair

## Product Concept
**MVP (3–4 weeks):**
- Shop QR code generator → customer joins queue from phone (no app install)
- Barber dashboard: their queue + upcoming appointments side by side
- Client profile: name, phone, style notes (guard sizes, service preferences)
- TV display mode: full-screen queue board for shop floor
- Basic appointment booking (single URL, barber selection, time slot)
- Square/Stripe POS integration for payment

**Pricing:**
- $39/mo flat (up to 4 chairs)
- $49/mo flat (unlimited chairs)
- $79 LTD (AppSumo or direct, up to 2 chairs)

## Target Channels
- r/Barber (Reddit — most active barber community)
- BarberEVO forum (hvac-talk.com equivalent for barbers)
- Instagram #barberlife, #barbershop communities
- NCI (National Cosmetology & Barbering Association)
- Barber supply store communities (Andis, Wahl, Oster distributor networks)

## Risks
1. Booksy adding walk-in queue — monitor their roadmap; first-mover advantage is key
2. Square Appointments adding barber-specific features
3. Market is more fragmented than trades (80K barbershops vs. 500K HVAC shops)

## Key Source Links
- https://thesalonbusiness.com/best-barbershop-software/
- https://koalendar.com/blog/vagaro-pricing
- https://thesalonbusiness.com/vagaro-review/
- https://www.zenoti.com/thecheckin/best-barbershop-software-2026
- https://heybooked.com/blogs/booksy-vs-vagaro
- https://www.joinblvd.com/blog/best-barbershop-software

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-23 | 88/105 | competitor-analysis-2026-09-23 | First identified: Vagaro per-calendar pricing pushes 3-person shop to $150–200/mo; Booksy appointment-only, no walk-in queue; Square weak multi-stylist coordination; ChairQ concept — walk-in QR queue + chair assignment + client preferences + TV display mode; $79 LTD; target r/Barber and #barberlife; no competitor owns walk-in queue management for barbershops |

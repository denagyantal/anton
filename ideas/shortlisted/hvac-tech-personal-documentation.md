---
name: HVAC Technician Personal Equipment Documentation
description: Mobile app for individual commercial HVAC technicians to track site equipment (serial numbers, filter sizes, manuals, photos, settings) across 100+ pieces at multiple sites — no company approval needed, $9–19/mo per tech; first identified 2026-10-23 at 82/105
type: shortlisted
---

# HVAC Technician Personal Equipment Documentation — Score: 82/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-10-23
**Decision Status**: NEW

## One-Line Pitch

The personal site database for commercial HVAC technicians — scan equipment QR/barcode → instantly see service history, filter sizes, manuals, and VFD settings across 100+ pieces of equipment at every site you service.

## Problem

Commercial and industrial HVAC technicians manage 50–200+ pieces of equipment across multiple client sites. Their current system: Excel, OneNote, photos scattered across phone gallery, and paper manuals in a binder in the truck.

From r/HVAC (2026): a tech asked for "free or very inexpensive software coming out of my own pocket" to track:
- Equipment serial numbers and model numbers
- Filter sizes per unit
- Site-specific manuals and IOM docs
- Photos with captions
- VFD (variable frequency drive) settings
- Controller configs

**The key insight**: this tech wants to pay out of pocket — they're not waiting for their employer to buy enterprise software. They just need it to work offline, be mobile-first, and not cost much.

Separately, a Wintac user (25-employee HVAC company) had their software's activation servers shut down after acquisition — an entire team stranded with dead software. This is the company-level version of the same problem: trades software that holds your operational data hostage.

The individual-tech market is completely unaddressed. All FSM tools (ServiceTitan, Jobber, HCP, Fieldpulse) are company-level and cost $39–$500/month. No tool exists for the tech who needs their own equipment database that travels with them.

## Market Evidence

- r/HVAC direct demand thread: "personal_documentation" — multiple upvotes + comments confirming the need
- r/ProHVACR: "all-in-one software" thread confirms techs independently seeking tools
- 150,000+ commercial/industrial HVAC technicians in the US working in multi-site environments
- Individual techs pay for their own tools all the time (multimeters, apps, reference books)
- No purpose-built app exists under $50/month for this specific individual-tech use case
- Wintac/activation-server shutdown = "stranded without access to 25 employees' work history" = data portability becomes urgent concern

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Reddit wish + demand; 150K+ commercial HVAC techs; Wintac displacement event |
| Competitor Weakness | 5/5 | 2x | 10 | Zero purpose-built tools for individual techs under $50/mo |
| LTD Viability | 5/5 | 2x | 10 | Individual tech buys independently — no company approval; $9–19/mo or $39–59 LTD |
| No Free Tier | 4/5 | 1x | 4 | Excel/OneNote are free but not purpose-built |
| Channel Access | 4/5 | 2x | 8 | r/HVAC (117K+), r/ProHVACR, HVAC Talk forums, App Store |
| Content Potential | 3/5 | 1x | 3 | "HVAC tech documentation app", "HVAC equipment tracking app for technicians" |
| AppSumo Fit | 3/5 | 2x | 6 | Not typical AppSumo persona; App Store + trade forums is better channel |
| Review Potential | 3/5 | 1x | 3 | App Store reviews from tech community; trade forum word-of-mouth |
| MRR Path | 3/5 | 3x | 9 | Per-tech monthly ($9–19/mo) = low ARPU; volume makes it work (150K addressable) |
| Build Feasibility | 5/5 | 2x | 10 | Equipment DB + QR/barcode scan + photo + offline mode = 3–4 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC technicians = deeply boring |

**Total Weighted Score: 82/105**

## Must-Have Filters
- [x] Problem is real (Reddit demand thread; Wintac stranding 25-person team)
- [x] Can build without deep domain expertise (mobile equipment database + offline mode = standard stack)
- [x] No dominant player (zero tools target individual HVAC techs under $50/mo)
- [x] Revenue potential > $10K MRR within 12 months (1,000 techs × $10/mo = $10K MRR; 150K addressable market)

## Boring Business Fit Check
- ✅ VCs ignore individual HVAC tech tools entirely — this segment is invisible to them
- ✅ HVAC techs are non-technical consumers who just want it to work
- ✅ Existing solutions (Excel, OneNote) are clunky workarounds — clear upgrade path
- ✅ Techs have real income ($40–80K/year); $10/mo is trivial
- ✅ Once they've built their equipment database, switching apps means losing data = high retention

## Product Concept: "TechLog" (or "SiteBook")

**Pricing**: $9/mo (solo tech, up to 50 pieces of equipment) / $19/mo (unlimited equipment, multiple sites)
**LTD**: $39 (50 equipment) / $59 (unlimited) — App Store or web

**Core MVP (3–4 weeks):**

1. **Site + Equipment Tree** — Add client sites; within each site, add equipment with make/model/serial/install date. Search/filter by site or equipment type.

2. **QR/Barcode Scanner** — Walk up to equipment → scan QR or barcode → pulls up that specific unit's record immediately. (Tech can print QR stickers for unlabeled equipment.)

3. **Photo Gallery per Unit** — Multiple captioned photos per piece: current filter, control board labels, wiring diagrams, VFD screen settings. Offline-capable (photos sync when on WiFi).

4. **Filter & Consumable Tracking** — Filter size, replacement interval, last changed date. Auto-reminder when overdue.

5. **Service Notes Log** — Date-stamped notes per visit: what was found, what was done, parts replaced, readings taken. Searchable.

6. **Document Attachment** — IOM manuals, warranty cards, spec sheets per equipment. View offline.

7. **Offline First** — Full functionality without internet. Sync when connected. (Required: techs work in basements, mechanical rooms, crawl spaces.)

**Phase 2:**
- Voice-to-note capture (dictate findings hands-free)
- Share equipment record with coworker or manager
- Export full site report as PDF (for handoffs or supervisor reporting)
- Custom fields per equipment type (e.g., refrigerant type, charge amount for HVAC; horse power for pumps)

## Key Differentiators
1. **Individual-tech ownership** — their data, not the company's; tech keeps their database even if they change employers
2. **Offline-first** — works in basements, mechanical rooms, and remote sites with no connectivity
3. **Barcode/QR scan** — zero typing to pull up a unit's record; built for the field, not the office
4. **No company approval** — $9–19/mo is a personal purchase; no IT department, no budget approval process

## Target Channels
- r/HVAC (117K+ members) — post in "tools/apps" discussions
- r/ProHVACR — dedicated professional HVAC community
- HVAC-Talk.com forums — largest professional HVAC forum
- App Store (iOS + Android) — "HVAC tech app" / "HVAC field service log" searches
- LinkedIn HVAC technician communities
- RSES (Refrigeration Service Engineers Society) member newsletter

## Pricing Model
- **Monthly**: $9/mo (up to 50 equipment pieces) / $19/mo (unlimited pieces, multiple sites)
- **Annual**: $79/yr (solo) / $149/yr (unlimited)
- **LTD**: $39 (50 pieces, lifetime) / $59 (unlimited, lifetime) — positioned as cheaper than 1 month of coffee

## Top 3 Risks
1. **Low ARPU** — $9–19/mo per tech requires volume (500+ techs = $5K–10K MRR); marketing to individual workers is harder than B2B
2. **Company policy** — some employers may restrict techs from storing client equipment data on personal apps (data ownership dispute)
3. **Expansion ceiling** — individual-tech market caps out; path to company-level sale may require pivot to B2B pricing model

## Key Source Links
- https://www.reddit.com/r/HVAC/comments/1jcmia4/personal_documentation/
- https://www.reddit.com/r/ProHVACR/comments/1k1n7ba/allinone_software/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-23 | 82/105 | reddit-2026-10-23 | First identified: r/HVAC tech requested "free or inexpensive software coming out of my own pocket" for equipment serial numbers, filter sizes, manuals, photos, VFD settings across 100+ pieces at multiple sites; r/ProHVACR tech stranded when Wintac activation servers shut down post-acquisition; 150K+ commercial HVAC techs; individual-tech purchase = no company approval needed; $9–19/mo or $39 LTD; offline-first mobile; QR scan → equipment record; zero competing products identified; Sources: reddit.com/r/HVAC/comments/1jcmia4, reddit.com/r/ProHVACR/comments/1k1n7ba |

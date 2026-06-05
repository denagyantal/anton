# Pet Boarding & Kennel Management

**Score**: 77/105 | **Tier**: 1 | **Verdict**: EXPLORE FURTHER | **Evaluation Date**: 2026-05-30

## One-Line Pitch
The first purpose-built management tool for micro-kennels and home-based pet boarders — kennel calendar, vaccination tracking, daily report cards, and online booking at $19–35/mo flat.

## Problem
Small dog boarding facilities (home-based kennels, small facilities with 10–30 runs) still manage reservations by phone and paper forms in 2026. Three core pain points:

1. **Vaccination record tracking** — most US states require proof of current rabies, distemper, and bordetella before boarding. Tracking which dogs have valid vaccines is a legal and liability requirement done via handwritten cards or emailed PDFs.
2. **Kennel capacity management** — double-booking a kennel run is an operational disaster; paper calendars don't prevent it.
3. **Feeding/medication instructions + daily report cards** — each dog may have specific instructions that staff need at a glance; premium clients expect daily photo + note updates.

Existing software (Gingr: $75–175/mo; MoeGo: $49–149/mo; Time to Pet: $45+/mo) is priced for established facilities and ignores the micro-kennel segment entirely. Home-based pet sitters and kennels under 20 runs are completely priced out.

## Market Evidence
- ~12,000 licensed pet boarding facilities in the US + tens of thousands of home-based boarders (Rover/Wag hosts taking off-platform bookings)
- Pet boarding industry $7B+ and growing post-pandemic record pet ownership
- "Dog boarding software" has strong search demand with no affordable dominant solution under $30/mo
- Rover/Wag host communities actively discuss the need for off-platform management tools
- Home-based boarders are a growing segment but have zero dedicated software

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 12K facilities + tens of thousands home boarders; Gingr validates paying market |
| Competitor Weakness | 4/5 | 2x | 8 | All tools priced at 2–5× what micro-operators can afford; none serve sub-20-run segment |
| LTD Viability | 4/5 | 2x | 8 | $59–$79 LTD viable; simple product, low infra cost |
| No Free Tier | 4/5 | 1x | 4 | No free dog boarding software; Rover provides no off-platform tools |
| Channel Access | 3/5 | 2x | 6 | r/dogboarding, Rover host communities, Facebook pet boarding groups — niche but tight |
| Content Potential | 3/5 | 1x | 3 | "Dog boarding software small kennel" — moderate search demand |
| AppSumo Fit | 3/5 | 2x | 6 | Pet industry buyers exist on AppSumo; niche enough for conversion |
| Review Potential | 3/5 | 1x | 3 | Small community but passionate; word-of-mouth in local pet owner networks |
| MRR Path | 3/5 | 3x | 9 | Recurring story clear; market ceiling is limited (~$15–20K MRR) without aggressive growth |
| Build Feasibility | 5/5 | 2x | 10 | 1–2 week MVP: calendar grid + pet profiles + vaccination alerts + report card |
| Boring Business Bonus | 4/5 | 2x | 8 | Pet boarding is unglamorous local service; completely VC-ignored |

## Product Concept: KennelPad

**Core features ($19/mo up to 10 kennels / $35/mo up to 30):**
1. **Kennel calendar** — drag-and-drop reservation grid showing which run is occupied when; prevents double-booking
2. **Pet profile** — vaccine records with expiration date tracking (rabies, distemper, bordetella); feeding instructions; medications; behavior notes; emergency contact
3. **Vaccination expiration alerts** — automated reminders sent to owners 2 weeks before boarding date if any vaccine has expired or will expire during the stay
4. **Daily report card** — staff submits a photo + brief note per dog per day → auto-emailed to owner (branded)
5. **Online booking widget** — embeds on the boarder's website or sends as a link; clients request dates and fill out pet profile at intake
6. **Basic invoicing** — create invoice from booking, collect payment via Stripe

**Key differentiator**: Only tool purpose-built for micro-kennels (under 30 runs) with vaccination expiration automation baked in. The legal/liability requirement (vaccination tracking) + the premium client expectation (daily report cards) = two defensible must-have features no spreadsheet can replicate.

## MVP Scope (1–2 weeks)
1. Kennel availability calendar (day view by run)
2. Pet profile with vaccination record fields + expiration date alerts
3. Booking creation (link pet to run for date range)
4. Daily report card (photo upload + text note → email to owner)
5. Basic invoice + Stripe payment link

## Distribution
- r/dogboarding and r/petbusiness Reddit communities
- Facebook groups for pet boarding and kennel owners
- Rover/Wag host community forums
- "Gingr alternative" and "pet boarding software small kennel" SEO content
- Local pet owner Facebook groups (referral network from clients who love the daily report card)

## Pricing
- $19/mo: Up to 10 kennel runs, unlimited bookings
- $35/mo: Up to 30 kennel runs
- LTD: $59–$79 (lifetime, up to 30 runs)
- Target AppSumo at $69 LTD

## Risks
1. Market ceiling may be modest (~$15–20K MRR) given small addressable universe
2. Rover hosts may be hesitant to use off-platform tools that could be seen as competing
3. Some home-based boarders use Rover's built-in booking system and won't switch
4. Channel access is narrower than most boring-biz ideas — requires community trust-building

## Key Source Links
- https://www.animalo.com/blog/best-dog-boarding-software-complete-2025-guide
- https://www.gopetai.com/blog/dog-boarding-software-guide-2026
- https://connecteam.com/best-dog-daycare-software/
- https://www.gingrapp.com/blog/security-best-practices-for-pet-boarding-daycare-facilities
- https://anolla.com/en/best-dog-boarding-software

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-30 | 77/105 | reddit-2026-05-30 | First identified: micro-kennel vaccination tracking + kennel calendar gaps; Gingr/MoeGo/Time to Pet all priced out of micro segment; home-based boarders completely unserved; 1–2 week MVP scope; $59–$79 LTD |
| 2026-06-05 | 82/105 | reddit-2026-06-05, hn-indiehackers-2026-06-05 | ↑5: DUAL-source UPGRADE — ProPet's 4-year unresolved overbooking bug documented (customers book when facility is full = manual intervention required every time); unified platform gap confirmed: boarding + daycare + grooming all need different workflows but no affordable tool combines all three; kennel run map (visual drag-drop assignment) physically prevents overbooking by design; vaccination upload gate (auto-declines booking if records expired or will expire during stay); feeding/medication schedule per animal (staff sees at a glance); daily photo updates = premium retention driver; $15.5B US pet care market (9.4% CAGR); 130K+ pet services businesses; $49/mo (up to 2 staff) / $79/mo (up to 8 staff) + $79–99 LTD; Sources: softwareadvice.com/kennel/propet-profile, gopetai.com/dog-boarding-software-guide-2026, animalo.com/best-pet-boarding-software |

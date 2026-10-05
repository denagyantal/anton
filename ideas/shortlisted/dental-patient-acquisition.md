# Dental Patient Acquisition Pipeline (DentalInbox)

**Score**: 81/105
**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-10-05
**Decision Status**: NEW

## One-Line Pitch
Standalone pipeline tool tracking new patient inquiries (website, phone, Google Business) through to "appointment booked" — the lead management layer that Dentrix/Eaglesoft completely ignore.

## Problem
Dental practices lose new patients because there's no system to track leads from first contact to booked appointment. Existing dental PMS software (Dentrix, Eaglesoft, Open Dental) handles existing patients but has **zero new patient acquisition tracking**.

The typical dental practice:
- Receives new patient inquiries via website form, phone call, and Google Business messages
- Tracks them in a sticky note, spreadsheet, or "I'll remember to call them"
- Loses the patient if the front desk doesn't call within 4 hours
- Has no idea how many leads they're losing each month

DentalFlow (IH, 2026) built a HubSpot-configured version of this but the productized-service model doesn't scale. Zirco.ai is building a full AI dental front desk ($200–500/mo) — the lightweight patient acquisition pipeline at $79/mo is the wedge they can't build and price accessibly.

## Market Evidence
- ~185,000 dental practices in the US; 82% are solo or small group practices
- DentalFlow built and launched (IH, 2026) — validates concept, pre-revenue = market not yet captured
- Zirco.ai: 30+ discovery calls in beta; focus on insurance verification + scheduling, NOT new patient acquisition funnel
- Dental office managers are prolific software buyers; $79/mo is below their decision authority threshold
- Dental practices lose an estimated 15–20% of new patient inquiries due to poor follow-up tracking

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | DentalFlow built but pre-revenue; Zirco.ai validates dental AI demand |
| Competitor Weakness | 4/5 | 2x | 8 | Dentrix/Eaglesoft have zero lead management; HubSpot requires expertise; gap is clear |
| LTD Viability | 4/5 | 2x | 8 | $79–99 LTD; dental practices pay without flinching; clear ROI on new patient bookings |
| No Free Tier | 5/5 | 1x | 5 | Dental offices always pay for software; no free tools in this category |
| Channel Access | 3/5 | 2x | 6 | AADOM, dental office manager FB groups, dental supply reps — targeted but smaller than trades |
| Content Potential | 3/5 | 1x | 3 | "new patient acquisition dental", "dental lead management software" |
| AppSumo Fit | 4/5 | 2x | 8 | Dental practice owners respond to AppSumo; "book one extra new patient/month pays for it" |
| Review Potential | 4/5 | 1x | 4 | Dental office managers are prolific software reviewers |
| MRR Path | 4/5 | 3x | 12 | $79/mo; sticky once patient pipeline and team workflow established |
| Build Feasibility | 5/5 | 2x | 10 | CRM-style pipeline = 2–3 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Dental practices — professional service, unglamorous, non-technical buyers |

**Total: 81/105**

## Must-Have Filters
- [x] Problem is real (DentalFlow built; Zirco.ai validating dental AI need via discovery calls)
- [x] Can build without deep domain expertise (CRM pipeline = standard engineering pattern)
- [x] Market not dominated by single unbeatable player (no standalone dental lead management tool)
- [x] Revenue potential >$10K MRR in 12 months (185K practices × $79/mo = massive ceiling)

## Product Concept
**"DentalInbox"** — standalone web app tracking new patient inquiries from all sources through a simple pipeline to "appointment booked."

Core features (MVP):
- Unified inbox: website form submissions, phone call log (manual), Google Business messages
- Pipeline view: New Inquiry → Contacted → Consultation Scheduled → Appointment Confirmed → Active Patient
- Automated follow-up reminders (SMS/email) at each stage
- Daily digest email to office manager: "3 new leads, 2 contacted, 1 not yet followed up"
- No HubSpot. No learning curve. Setup in 60 minutes.

**Pricing**: $79/mo or $99 LTD.

## Target Channels
- Facebook groups: AADOM (American Association of Dental Office Management)
- Dental office manager communities
- Dental supply company partnerships (Henry Schein, Patterson)
- AppSumo

## Top Risks
1. Zirco.ai full front desk AI could expand to include patient acquisition pipeline
2. Small market relative to trades opportunities; dental = 185K practices vs. 500K+ trade shops
3. HIPAA considerations for patient data handling (even pre-patient contact information requires care)

## Key Source Links
- https://www.indiehackers.com/post/i-built-a-free-crm-pipeline-system-for-dental-practices-heres-the-demo-CaBqydvEL2Jeuq0pRSV3
- https://news.ycombinator.com/item?id=47385090 (Zirco.ai dental AI front desk)

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-05 | 81/105 | hn-indiehackers | First identified; DentalFlow pre-revenue + Zirco.ai beta validates dental AI demand |

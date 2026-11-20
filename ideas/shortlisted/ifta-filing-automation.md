---
name: IFTA Quarterly Filing Automation
score: 79/105
tier: 1
verdict: EXPLORE FURTHER
date: 2026-11-20
---

# IFTA Quarterly Filing Automation — Score: 79/105

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW

## One-Line Pitch
Mobile app for ELD-exempt small trucking carriers that auto-tracks GPS state miles and scans fuel receipts to generate IFTA quarterly reports in minutes — eliminating the $100/quarter outsourcing cost and the annual state audit risk.

## Problem
IFTA (International Fuel Tax Agreement) requires carriers operating in multiple states to file quarterly reports calculating fuel tax credits/debits per state based on miles driven. For ELD-exempt carriers (hotshot, agricultural, 1–3 trucks not required to run electronic logs), this means:

- Manual spreadsheet tracking of miles per state (error-prone, time-consuming)
- Paper fuel receipt collection and manual entry (easy to lose, miss receipts)
- $100–300/quarter outsourced to a trucking accountant or bookkeeper
- State audits fine carriers for IFTA errors — TruckingOffice IFTA errors flagged by state auditors documented
- Major TMS platforms ($50–300/mo) include IFTA but are overkill for 1-truck hotshot carriers

The wedge: **ELD-exempt carriers** (hotshots under 10,001 lbs GVWR, agricultural operators) are specifically excluded from ELD mandates but still owe IFTA. They have no affordable, purpose-built compliance tool.

## Market Evidence
- Reddit (r/OwnerOperators, r/HotshotTrucking): IFTA filing stress surfaces every quarter; hotshot carriers explicitly mention not having ELD to auto-calculate miles
- TruckingOffice IFTA errors flagged by actual state auditors — documented in Capterra reviews
- 500K+ registered motor carriers in US; 91.5% <10 trucks; estimated 150K–200K ELD-exempt carriers
- Current workaround: manual spreadsheet + accountant at $100–300/quarter = $400–1,200/year per carrier
- $79 LTD vs $400–1,200/year = clear ROI story, easy AppSumo pitch

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Quarterly IFTA pain surfaces reliably in trucking communities; ELD-exempt = clear underserved segment |
| Competitor Weakness | 3/5 | 2x | 6 | TruckingOffice IFTA errors audited; major TMS platforms overkill; no purpose-built ELD-exempt tool |
| LTD Viability | 4/5 | 2x | 8 | Compliance = "I must have this" psychology; $79 LTD vs $400+/yr outsourcing = strong ROI |
| No Free Tier | 5/5 | 1x | 5 | Tax/compliance tools never free; IRS-adjacent = perceived high stakes |
| Channel Access | 4/5 | 2x | 8 | r/HotshotTrucking (60K+), r/OwnerOperators (100K+), Hotshot Business Owners FB groups |
| Content Potential | 2/5 | 1x | 2 | "IFTA filing guide hotshot" content possible but dry; limited viral potential |
| AppSumo Fit | 3/5 | 2x | 6 | Compliance tool fits AppSumo; niche audience limits code volume but conversion should be high |
| Review Potential | 2/5 | 1x | 2 | Niche market limits review volume; trucking community not heavy reviewers |
| MRR Path | 4/5 | 3x | 12 | Annual subscription natural for quarterly compliance; upsell to DOT logs, driver settlement reports |
| Build Feasibility | 5/5 | 2x | 10 | Mobile GPS state mile tracking + OCR receipt scan + IFTA rate table = 3-4 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | DOT/IFTA compliance = deeply boring blue-collar trucking |

**Total: 79/105**

## Must-Have Filters
- [x] Problem is real (IFTA errors flagged by state auditors; $100–300/quarter outsourcing documented)
- [x] Buildable without deep domain expertise (IFTA rate tables are public; GPS + OCR are solved problems)
- [x] No dominant unbeatable player (ELD-exempt niche not served by any existing tool)
- [x] Revenue potential >$10K MRR — 500 carriers × $14/mo = $7K MRR; achievable within 12 months via quarterly filing urgency

## Product Concept

**"HotshotIFTA"** (or "MileTrack" / "IFTAQuick") — Mobile-first IFTA compliance for ELD-exempt small carriers.

**Core workflow:**
1. App runs in background tracking GPS location → automatically logs state boundary crossings
2. Driver photos fuel receipt → OCR extracts gallons, cost, state
3. Each quarter: app calculates tax owed/credit per state from actual miles + fuel
4. One-tap export: IFTA-formatted quarterly report (matches state form requirements)
5. Optional: submit directly to state portal (Phase 2)

**Key differentiators vs. TMS with IFTA:**
- Purpose-built for ELD-exempt (no ELD hardware required)
- No subscription to a full TMS you don't need
- Phone GPS only (no hardware)
- $79 one-time vs $400–1,200/year ongoing

## Target Customer
- **Primary ICP**: Solo hotshot carrier (1 truck, ELD-exempt, operates in 3–8 states)
- **Secondary ICP**: Agricultural transport operators (seasonal multi-state, ELD-exempt)
- **Pain trigger**: IFTA filing deadline (quarterly: Jan 31, Apr 30, Jul 31, Oct 31)
- **Budget**: $400–1,200/year on IFTA outsourcing/manual time; $79 LTD feels obvious

## MVP Scope (3–4 weeks)
- Background GPS tracking with state boundary detection (iOS + Android)
- Manual fuel entry + receipt photo OCR (Google Vision / AWS Textract)
- IFTA rate table lookup (public quarterly rates per state)
- Miles-per-state summary + quarterly report generation (PDF)
- Simple onboarding: vehicle GVWR declaration, home state selection

## GTM Approach
- **Reddit**: r/HotshotTrucking, r/OwnerOperators — post around IFTA deadline weeks (Jan, Apr, Jul, Oct)
- **Facebook**: "Hotshot Business Owners" group, "Hotshot Trucking Nation"
- **AppSumo**: "Stop paying $100/quarter for IFTA filing" hook — compliance tools convert well
- **SEO**: "IFTA calculator hotshot", "IFTA filing app ELD exempt", "how to file IFTA without ELD"
- **YouTube**: Short tutorials before each quarterly deadline = evergreen lead source

## Risks
1. **GPS battery drain**: Background GPS tracking kills battery; must use significant location changes (not continuous polling)
2. **TAM ceiling**: ELD-exempt segment is a subset of small carriers; may need to expand to ELD-equipped 1–3 truck fleets for growth
3. **State format variation**: 48 US states + DC + 10 Canadian provinces have different IFTA form formats; start with top 10 states by hotshot concentration
4. **Seasonality**: Quarterly deadlines create spiky support demand; plan capacity around Jan/Apr/Jul/Oct

## Key Source Links
- r/HotshotTrucking IFTA threads: reddit.com/r/HotshotTrucking/
- TruckingOffice IFTA audit errors: capterra.com (competitor reviews)
- IFTA Inc. official rate tables: iftach.org
- Hotshot trucking market size: truckpedia.io/resources/best-trucking-software-small-fleets

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-20 | 79/105 | reddit-2026-11-20, trends-2026-11-20 | First identified — Reddit: ELD-exempt hotshot/agricultural carriers doing IFTA manually or outsourcing at $100-300/quarter; TruckingOffice IFTA errors flagged by state auditors documented; Trends: DispatchMVP $49/mo entering trucking space validates segment; no purpose-built ELD-exempt IFTA tool at any price; $79 LTD vs $400-1,200/yr outsourcing = clear ROI; 3-4 week MVP with phone GPS + OCR; ELD-exempt niche = narrow wedge into broader trucking compliance market |

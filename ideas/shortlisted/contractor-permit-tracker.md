# Contractor Permit Tracker — Score: 84/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-09-10
**Decision Status**: NEW

## One-Line Pitch
Dead-simple permit status tracker for solo contractors and small GCs — track permit applications across multiple jurisdictions, get alerts when permits expire or inspections are due, at $19-29/month with no competitor at this price.

## Problem
Solo contractors and small GC firms (1-10 person shops) juggle permits across multiple jurisdictions simultaneously. Current state:
- Manually checking permit portal websites for status updates
- Spreadsheets tracking permit numbers, application dates, expiration dates, inspection schedules
- Missing inspection windows means re-application and project delays
- No tool exists at under $50/month specifically for permit tracking

The IH analysis "What Procore Doesn't Build" explicitly identifies the permit tracker as a confirmed gap: "one product in the directory does multi-jurisdiction permits, costs enterprise money, targets 50+ firm GCs. A lightweight permit tracker for solo contractors does not exist."

Procore is worth $8B. 1.5M US construction firms have under 10 employees. They cannot use Procore's permit tools ($375-1,900+/mo). The standalone permit tracker for this segment is literally unclaimed.

## Market Evidence
- 1.5M US construction firms with <10 employees — Procore's explicitly abandoned customer segment
- IH analysis (April 2026, high engagement "featured" post) explicitly names $19-29/mo permit tracker as gap
- "Only 45% of construction software vendors have a mobile app. 9% target solo operators" — confirming segment is ignored
- 6 trades with zero dedicated takeoff software (IH data) — permit tracking is adjacent gap
- Current workaround: spreadsheets + manual portal checking = lost inspections, project delays
- Construction permit revenue cycle: approved permit → inspections (multiple) → final approval → payment release; missing inspections costs real money

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 1.5M small GCs; Procore $8B proves market; IH analysis explicitly confirmed gap |
| Competitor Weakness | 5/5 | 2x | 10 | Literally zero indie competitors at $19-29/mo; enterprise tools only |
| LTD Viability | 4/5 | 2x | 8 | $79-99 LTD; simple CRUD = very low infrastructure cost |
| No Free Tier | 4/5 | 1x | 4 | No free permit tracker with notifications |
| Channel Access | 3/5 | 2x | 6 | r/Construction, r/ContractorsUS, contractor FB groups; harder to reach than trade-specific communities |
| Content Potential | 3/5 | 1x | 3 | "permit tracking software contractor", "construction permit tracker app" |
| AppSumo Fit | 4/5 | 2x | 8 | Solo contractors = LTD buyers; clear single-use-case tool = easy AppSumo pitch |
| Review Potential | 3/5 | 1x | 3 | Solo GCs write reviews if it saves real stress |
| MRR Path | 4/5 | 3x | 12 | Recurring = permits never stop; add inspection scheduling, document storage, compliance alerts |
| Build Feasibility | 5/5 | 2x | 10 | CRUD app: permit records + status + expiration dates + email alerts = 1-2 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Construction permits = deeply boring administrative work |

**Total: 84/105**

## Must-Have Filters
- [x] Problem is real (IH analysis explicitly identifies this; spreadsheet workaround = confirmed pain)
- [x] Can build without deep domain expertise (CRUD + email alerts = no domain expertise required)
- [x] Market not dominated by single unbeatable player (enterprise-only tools, zero indie competitors)
- [x] Revenue potential > $10K MRR within 12 months (1.5M small GCs; even 500 at $19/mo = $9.5K MRR)

## Boring Business Fit
- [x] VC-ignored? YES — permit tracking for small contractors is invisible to investors
- [x] Non-technical buyers? YES — small GCs and solo contractors are non-technical
- [x] Existing software outdated or overpriced? YES — enterprise tools $375+/mo; nothing for small contractors
- [x] Real budgets? YES — missed inspection = project delay = real dollar cost
- [x] Low churn? YES — contractors always have active permits; recurring administrative need

## Product Concept

**MVP (1-2 weeks):**
- Add permit: jurisdiction, permit number, type, application date, expected approval date
- Status tracking: Applied → In Review → Approved → Under Construction → Inspections → Final
- Inspection scheduling: add inspection appointments with reminder alerts (email/SMS)
- Expiration alerts: notify 30/14/7 days before permit expires
- Document storage: attach PDFs (permit docs, inspection results, plans)
- Multi-project dashboard: see all active permits and upcoming inspections at a glance

**V2 features:**
- Multi-jurisdiction status sync (scrape permit portals for status updates — jurisdiction-specific integrations)
- Subcontractor permit tracking (track permits pulled by subs on a project)
- Client-facing permit status page (share permit status with homeowners who keep asking)

**Pricing:**
- $19/mo (unlimited permits, 1 user)
- $29/mo (up to 5 users, multi-project management)
- $99 LTD (unlimited permits, 1 user, lifetime)

## Key Differentiators
1. **Solo contractor pricing** — $19/mo vs enterprise tools that won't even show pricing without a sales call
2. **Inspection alerts** — the core recurring use case; no spreadsheet can notify you automatically
3. **5-minute setup** — no onboarding, no training, just add your first permit
4. **Client status sharing** — homeowners always ask "where is my permit?" — shareable status link

## Target Channels
- r/Construction (400K+ members)
- r/ContractorsUS, r/GeneralContractor
- Facebook "General Contractors" groups
- IH/AppSumo launch (IH post explicitly named this gap = built-in audience)
- National Association of Home Builders community

## Risks
1. Jurisdiction-specific permit portal scraping is complex for V2 (V1 is manual status updates only)
2. Contractors may prefer a general project management tool over a permit-specific one
3. Low virality — permit tracking is a private admin task, not shareable

## Next Steps
1. Build MVP: permit records + inspection calendar + email alerts in 1-2 weeks
2. Launch at $99 LTD on AppSumo; seed r/Construction with launch post
3. V2: Add jurisdiction status sync for top 5-10 most common jurisdictions

## Key Source Links
- [What Procore Doesn't Build — IH (April 2026)](https://www.indiehackers.com/post/procore-is-worth-8b-heres-what-they-don-t-build-and-won-t-e985092d14)
- [5 Red-Flag Industries — IH (August 2026)](https://www.indiehackers.com/post/5-red-flag-industries-ripe-for-disruption-data-backed-aug-26-96325c45a0)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-10 | 84/105 | hn-indiehackers-2026-09-10 | First identified: IH analysis (featured, April 2026) explicitly names $19-29/mo permit tracker as confirmed gap — zero indie competitors; 1.5M US small GCs can't use Procore ($375+/mo); current state = spreadsheets + manual portal checking; missed inspections = real project delays; 1-2 week CRUD MVP; $99 LTD AppSumo first-mover; r/Construction + contractor FB groups as primary channels |
| 2026-09-11 | 86/105 | competitor-analysis-2026-09-11 | ↑2: Competitor analysis delivers deep research — iPermit targets municipalities not solo contractors; Buildertrend/CoConstruct treat permits as checkboxes not workflows; PHCC confirms solos use Google Calendar + spreadsheets; MicroGaps April 2026: 3 of 15 construction software categories have zero solo-operator tools; jurisdiction chaos (county-by-county rules = no affordable multi-jurisdiction tracker); "permits are a feature, not a workflow" confirmed across all major competitors; PermitBox concept: $19/mo unlimited permits + $29/mo team + $99 LTD; Sources: projul.com/blog/best-construction-permit-tracking-software, ipermitusa.com/ipermit-blog, ustechautomations.com/resources/blog/contractor-permit-tracking-automation-platform-comparison, microgaps.com/blog/jobber-alternative-solo-contractors-2026 |

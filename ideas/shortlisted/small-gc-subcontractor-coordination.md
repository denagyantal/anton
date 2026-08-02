---
name: Small GC Subcontractor Coordination
description: Bid board + COI/lien waiver tracking + draw request approval for small GCs ($500K-5M) — the missing coordination layer between Procore (too expensive) and spreadsheets
type: project
---

# Small GC Subcontractor Coordination ("SubStack") — Score: 88/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Decision Status**: NEW
**Evaluation Date**: 2026-08-02

## One-Line Pitch
The sub-coordination layer for small GCs — invite subs to bid, compare bids, track lien waiver status and COI expiry, approve draw requests, and sync to QuickBooks — all without Procore's $375/month price tag.

## Problem

Small general contractors running $500K–$5M per year in contracted work are stuck in a painful middle ground:

- **Procore** ($375-899+/mo) is priced and designed for firms running $10M+ — "cost may be prohibitive without guaranteeing a significant ROI" for small contractors
- **Knowify** ($149-499/mo) focuses on job costing, not sub coordination workflows
- **Contractor Foreman** ($49-249/mo) has dense UI that hurts adoption
- **Spreadsheets + group texts** is "somehow still the industry standard in 2026" (palcode.ai)

The unmet need is a focused **GC→sub coordination layer** that covers the full sub relationship lifecycle without requiring enterprise pricing or implementation consultants:

1. **Bid invites**: Send bid packages to subs by trade → compare bids side by side → award with one click
2. **Contract generation**: E-sign sub agreements without leaving the platform (no separate DocuSign subscription)
3. **COI + license tracking**: Auto-alert at 90/60/30/7 days before expiry; block job assignment if lapsed
4. **Lien waiver collection**: Track which subs have submitted signed lien waivers per milestone; escalate overdue ones
5. **Draw request approval**: Sub submits draw request → GC reviews → approve → sync to QuickBooks

"Across a patchwork of spreadsheets and group texts is somehow still the industry standard in 2026 for lien waivers and COI tracking."

## Market Evidence

- 400K+ GC firms in the US; most running $500K–$5M with 5-20 active subcontractors per project
- Procore has only ~200K customers despite the massive market — millions of GCs remain underserved
- 6 independent review sites (palcode.ai, permitflow.com, exayard.com, buildbite.com, solvpro.com, softwareadvice.com) all identify the same gap independently
- Key quote: "most sub coordination tools are built for subs themselves or for firms running $10M+ in contracted work" — the small GC running $1-5M/yr is completely underserved

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3× | 15 | 400K+ GC firms in US; spreadsheet + group texts confirmed as 2026 standard |
| Competitor Weakness | 5/5 | 2× | 10 | Procore prohibitive; no affordable tool owns lien waiver + COI + bid tracking for small GCs |
| LTD Viability | 4/5 | 2× | 8 | $99/5 projects or $149/15 projects; ROI: one missed COI = $50K+ liability |
| No Free Tier | 4/5 | 1× | 4 | No affordable competitor with a free entry tier |
| Channel Access | 4/5 | 2× | 8 | r/construction, r/GeneralContractor, Facebook "General Contractors of America", AGC chapters |
| Content Potential | 4/5 | 1× | 4 | "subcontractor coordination software," "lien waiver tracking," "COI management for small GC" |
| AppSumo Fit | 4/5 | 2× | 8 | Compliance ROI story is clear and quantifiable; construction community active on AppSumo |
| Review Potential | 3/5 | 1× | 3 | Contractors review G2/Capterra when something solves a specific pain |
| MRR Path | 4/5 | 3× | 12 | Per-project tiers; document storage; QuickBooks sync as paid add-on; expansion to larger GC teams |
| Build Feasibility | 3/5 | 2× | 6 | Multiple workflows (bid, e-sign, COI, lien, draw) but each is straightforward CRUD with email/SMS alerts |
| Boring Business Bonus | 5/5 | 2× | 10 | Construction coordination — operational, compliance-focused, zero glamour |
| **Total** | | | **88/105** | |

## Key Differentiators

1. **Focused on the GC→sub relationship** (not GC→owner like Buildertrend; not sub job costing like Knowify)
2. **Lien waiver status board**: single-view showing which subs have signed waivers at each milestone — the one thing everyone tracks manually
3. **COI auto-blocking**: prevents assigning a sub to a new job if their COI has expired — turns compliance into a workflow enforcement mechanism
4. **No implementation consultant required**: under 2-hour onboarding, templates for standard sub agreements and lien waivers built in
5. **$99-149/mo flat** vs. Procore's $375+/mo minimum — the price difference alone is the pitch

## Target Customer

- Small GCs running $500K–$5M in annual contracted work
- 5–20 active subcontractors across 3–8 projects at any time
- Currently using DocuSign + Excel for COI tracking + group texts for scheduling + QuickBooks for payments = 4-5 disconnected tools

## Go-To-Market

- **AppSumo**: "SubStack — subcontractor coordination for small GCs" at $99 LTD (5 active projects)
- **Reddit**: r/construction, r/GeneralContractor, r/ConstructionManagers — active, reachable communities
- **Facebook**: "General Contractors of America," "Construction Business Owners" groups
- **Trade shows**: AGC chapter meetups, local home builders association events
- **Content**: "lien waiver tracking software," "COI management for small GC," "Procore alternative for small contractors"

## Risks

1. **Adoption requires sub cooperation**: subs must upload COI docs and submit lien waivers — the GC buys it but the subs have to use it
2. **Well-funded competitors**: Procore, Autodesk, and others can add a "light" tier — construction tech is well-funded
3. **Build scope is non-trivial**: covering bid → e-sign → COI → lien → draw is 5 workflows; need to prioritize the MVP wedge (COI + lien waiver tracking alone is the minimum viable tool)

## Source Links

- https://palcode.ai/blog/subcontractor-management-software
- https://www.permitflow.com/blog/subcontractor-management-software
- https://exayard.com/blog/subcontractor-management-software
- https://buildbite.com/insights/subcontractor-management-software
- https://solvpro.com/feeds/blog/construction-management-computer-programs
- https://www.softwareadvice.com/construction/subcontractor-software-comparison/
- https://augmentedtrades.com/job-costing-software-for-contractors/
- https://relayfi.com/blog/subcontractor-management-software/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-08-02 | 88/105 | competitor-analysis-2026-08-02 | First identified — competitor analysis scored 90/105 internally; adjusted to 88/105 after full 11-criterion evaluation. Lien waiver + COI + bid board + draw requests as the 5-workflow MVP scope. |

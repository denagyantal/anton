---
name: ServiceTitan Exit & Data Migration Tool
description: Self-serve data export + done-for-you migration for HVAC/plumbing shops trapped in ServiceTitan's lock-in contracts; first identified 2026-10-11 at 84/105
type: shortlisted
---

# ServiceTitan Exit & Data Migration Tool — Score: 84/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-10-11
**Decision Status**: NEW

## One-Line Pitch

The escape hatch for HVAC and plumbing shops trapped in ServiceTitan contracts — extract your customer history, job records, and invoice data, then land cleanly in Jobber/FieldPulse/HCP.

## Problem

ServiceTitan has 100,000+ customers and is the industry standard for mid-size trades shops — but retention relies heavily on lock-in rather than satisfaction:

- **Contract auto-renewal traps**: Users document giving cancellation notice, getting confirmation screenshots, then being re-enrolled anyway ("ST had no record of cancellation"). Auto-renews November 2025 despite Q1 2025 documented notice.
- **Data hostage**: Exit fees of $24K–$67K (BBB documented individual case: $67,230 termination fee). FieldRoutes (ServiceTitan-owned) charges $500 for an incomplete 6-field CSV export.
- **No clean migration path**: When shops finally escape, customer history, job notes, invoice history, equipment records, and maintenance agreements don't transfer. New software starts from a blank slate.

The specific pain: a trades shop owner has 5–10 years of customer data in ServiceTitan. That data represents the business relationships they've built. Losing it or having to re-enter it manually is a blocker to switching even when they desperately want to leave.

**Adjacent to the HVAC small-shop dispatch opportunity** (`hvac-small-shop-dispatch.md`) — the migration tool is the bridge between ServiceTitan and any alternative platform.

## Market Evidence

- ServiceTitan confirmed 100,000+ customers (2025 figures); even if 5% are actively trying to leave = 5,000 potential customers
- BBB: "trapped into contract" is the #1 complaint category for ServiceTitan
- Reddit r/fieldservicesoftwares has active threads on ST exit experiences; r/ServiceTitanFAQ is a support community for users trying to navigate the platform
- ServiceTitan price increases from ~$3K to ~$10K/month documented in Feb 2026 (r/ServiceTitanFAQ thread)
- FieldRoutes (also ServiceTitan-owned) $500 for 6-field incomplete export = the data hostage model is systemic, not isolated
- Jobber, FieldPulse, Housecall Pro, and Service Fusion all actively court ServiceTitan defectors with migration incentives — but provide no tooling

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 100K+ ST customers; documented lock-in tactics on BBB + Reddit; 5% exit intent = 5,000 addressable |
| Competitor Weakness | 5/5 | 2x | 10 | No dedicated ST migration tool exists; generic services don't understand FSM data models |
| LTD Viability | 5/5 | 2x | 10 | One-time migration = natural one-time purchase; $499–$999 done-for-you is correct pricing |
| No Free Tier | 5/5 | 1x | 5 | Nobody does this for free; ST actively blocks easy export |
| Channel Access | 4/5 | 2x | 8 | r/fieldservicesoftwares, r/ServiceTitanFAQ, trade FB groups, HVAC Reddit communities |
| Content Potential | 4/5 | 1x | 4 | "ServiceTitan exit", "ServiceTitan data migration", "cancel ServiceTitan", "ServiceTitan alternatives" |
| AppSumo Fit | 3/5 | 2x | 6 | Migration tools less typical AppSumo; but one-time purchase model aligns |
| Review Potential | 4/5 | 1x | 4 | People who escape ST are extremely vocal; success stories = organic marketing |
| MRR Path | 3/5 | 3x | 9 | Not naturally recurring; however: bundle migration → onboarding fee for destination tool; or build destination tool (HVAC FSM) with migration as free feature |
| Build Feasibility | 4/5 | 2x | 8 | ST has API with limitations; CSV/manual extraction + clean/transform script + destination import; 4–5 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | HVAC/plumbing field service = deeply boring |

**Total Weighted Score: 84/105**

## Must-Have Filters

- [x] Problem is real (BBB complaints, Reddit threads, documented lock-in with dollar amounts)
- [x] Can build without deep domain expertise (data extraction + transformation + import)
- [x] No dominant player in this specific niche (no dedicated ST exit tool exists)
- [x] Revenue potential > $10K MRR equivalent (one-time: 20–30 migrations/month × $500 = $10K–15K revenue/month)

## Boring Business Fit Check

- ✅ VCs ignore HVAC/plumbing data migration — pure unsexy tool
- ✅ Customers (trades shop owners) are non-technical; done-for-you model is better than self-serve
- ✅ ServiceTitan's own behavior (lock-in, exit fees) is the gap to fill
- ✅ Shops pay $3K–10K/month for ST — $500–2K migration fee is trivial
- ✅ Once migrated, shops stay on new platform for years = compounding word-of-mouth

## Two-Track Product Approach

### Track A: Self-Serve Export Tool ($99 one-time)
- Connect to ServiceTitan via ST API credentials
- Pull: customers, job history, invoices, equipment history, maintenance agreements
- Output: clean CSV files in standard FSM import format (compatible with Jobber, FieldPulse, HCP, Service Fusion)
- Value prop: "Get your data back from ServiceTitan in 10 minutes"
- No ongoing infrastructure cost; one-time purchase

### Track B: Done-For-You Migration Service ($500–$2,000)
- Customer provides ST credentials
- Team extracts data, cleans/transforms, maps to destination platform
- Handles edge cases (custom fields, legacy data formats)
- Done in 2–5 business days
- Value prop: "We've done 50+ ST migrations — we know what to look for"
- Higher margin; scales with demand

### Track C: Bundle with Destination FSM (Strategic)
- Build migration tool as a feature inside a competing HVAC FSM
- "Switch from ServiceTitan free" as the acquisition hook
- Migration cost included in HVAC FSM LTD price

## MVP Scope (4–5 weeks)

1. **ServiceTitan data extractor**: API connection + CSV export for customers, jobs, invoices
2. **Data cleaner**: Remove duplicates, normalize addresses, format dates
3. **Destination mapper**: Pre-built import templates for Jobber, FieldPulse, HCP, Service Fusion
4. **Migration checklist**: Step-by-step guide for the shop owner (what to check, what to update)
5. **Done-for-you intake form**: Request form for manual migration service

## Go-To-Market

- **Primary channel**: r/fieldservicesoftwares, r/ServiceTitanFAQ — these communities have active migration-related threads
- **Secondary channel**: HVAC-specific Reddit (r/HVAC, r/ProHVACR) — target threads about ST frustration
- **Content strategy**: "How to cancel ServiceTitan", "ServiceTitan data export guide", "ServiceTitan to Jobber migration"
- **Partnership approach**: Reach out to Jobber/FieldPulse/HCP partners — they want to win ST defectors and would co-market the tool
- **Timing**: Best-ever entry window — ST price increases ($3K → $10K/month documented Feb 2026) = active migration demand

## Key Differentiators vs. Generic Data Migration Services

1. **FSM-native understanding** — knows the difference between a "customer," "location," "job," and "invoice" in ServiceTitan's data model
2. **Destination templates** — pre-built import formats for the 4 most common destination platforms
3. **Compliance handling** — preserves equipment maintenance history, warranty records, service notes
4. **Speed** — 2–5 days vs weeks for generic services

## Top 3 Risks

1. **ServiceTitan API restrictions** — ST may limit export depth or revoke API access for export tools; mitigate with manual extraction backup method
2. **Ongoing cat-and-mouse** — ST has incentive to make export harder; maintain manual extraction as fallback
3. **One-time revenue model** — not recurring; mitigate by building toward destination FSM or offering recurring check-in exports (quarterly data backup)

## Key Source Links

- https://www.reddit.com/r/fieldservicesoftwares/comments/1ob6yrl/my_disappointing_experience_leaving_servicetitan/
- https://www.reddit.com/r/fieldservicesoftwares/comments/1mzx34b/update_from_servicetitan_to_field_pulse/
- https://bbb.org/us/ca/glendale/profile/digital-marketing/servicetitan-inc-1216-1290182/complaints
- https://aibusinesssites.com/compare/servicetitan-pricing-2026-real-costs-hidden-fees
- https://fieldcamp.ai/reviews/servicetitan/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-11 | 84/105 | reddit-2026-10-11 | First identified — Reddit: ServiceTitan billing after documented cancellation (screenshot proof ignored); FieldRoutes (ST-owned) $500 for 6-field export confirmed; no dedicated ST migration tool exists; done-for-you migration service ($500–$2,000) + self-serve export tool ($99 one-time) = two-track product; timing: ST price increases $3K→$10K/month documented Feb 2026 = active migration demand; primary channels: r/fieldservicesoftwares, r/ServiceTitanFAQ; partner with Jobber/FieldPulse/HCP |

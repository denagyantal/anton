# SaaS Subscription Stack Audit Tool — Score: 79/105

**Verdict**: EXPLORE FURTHER
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-10-18
**Decision Status**: NEW

## One-Line Pitch

Connect your bank account → auto-detect all your SaaS subscriptions → see what you're paying, what overlaps, and what you can cancel — purpose-built for 5–50 person companies paying $2K–$5K/month on forgotten software.

## Problem

A 12-person company is paying $4,100/month ($49,200/year) for 23 separate SaaS tools. That same company paid $1,200/month 5 years ago — a 3.4x increase. Tools inflate 15–20% annually and quietly move features to higher tiers.

No business owner has a clear view of: what they're paying, what's actually being used, which tools overlap, or where they can consolidate. The result: a Pilates studio paying $250/mo for booking + gift cards they'd cancel if they knew about alternatives; a 5-person agency paying for Slack AND Teams; a 10-person shop with 3 separate "project management" tools.

The enterprise solution space (Cledara, Vendr, Zluri) completely ignores 5–20 person companies. There's a clean $9–$29/mo gap in the market.

## Market Evidence

- r/Entrepreneur post: "The SaaS model is quietly falling apart for small businesses" — significant engagement; multiple thread spinoffs on r/smallbusiness
- r/smallbusiness: "if your company is paying for 10 software tools, you're overpaying" thread
- Pattern appears 3–4 times per month across r/smallbusiness, r/Entrepreneur, r/SaaS
- Cledara (enterprise), Vendr (enterprise), Zluri (enterprise) = all $100+/mo or sales-gated; none serve the 5–20 person company

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple recurring threads; "12-person company $4,100/mo" relatable pattern; pain confirmed 3–4x/month |
| Competitor Weakness | 4/5 | 2x | 8 | Enterprise tools (Cledara, Vendr) completely ignore 5–20 person companies |
| LTD Viability | 5/5 | 2x | 10 | "Find your subscription waste, pay once, save forever" = textbook LTD story |
| No Free Tier | 3/5 | 1x | 3 | Free scan + paid reports is natural model; need paywall for full analysis |
| Channel Access | 4/5 | 2x | 8 | r/smallbusiness, r/Entrepreneur, LinkedIn small biz groups |
| Content Potential | 4/5 | 1x | 4 | "SaaS spend tracker small business", "cancel subscriptions tool", "reduce software costs" |
| AppSumo Fit | 4/5 | 2x | 8 | Clean LTD story; AppSumo buyers are exactly this persona (software-aware small business owners) |
| Review Potential | 3/5 | 1x | 3 | Horizontal tool; harder to build niche community of reviewers |
| MRR Path | 3/5 | 3x | 9 | Horizontal tools struggle for retention; need "monthly savings report" to justify ongoing use |
| Build Feasibility | 5/5 | 2x | 10 | Bank/CC API + categorization = 1–2 week build |
| Boring Business Bonus | 2/5 | 2x | 4 | Tech-adjacent horizontal SaaS = lower boring score (not blue-collar) |

**Total Weighted Score: 79/105**

## Must-Have Filters
- [x] Problem is real (multiple high-engagement threads; clear quantified pain: $50K/year for 12 people)
- [x] Can build without deep domain expertise (bank API + categorization = straightforward)
- [x] No dominant player at SMB (Cledara/Vendr only serve enterprise)
- [x] Revenue potential > $10K MRR within 12 months (500 users at $19/mo = $9,500; 600 at $19 = $11,400 MRR)

## Boring Business Fit Check
- ❌ VCs are interested in this space (boring score: 2/5 — this is tech-adjacent)
- ❌ Technically-literate customers (can build workarounds; some will check bank statements manually)
- ✅ No good existing solution for SMB
- ✅ Real budgets (these companies are already paying $2K–$5K/month for software)
- ❌ Higher churn once the initial audit is done — needs recurring value delivery

## Product Concept: "StackScan" / "SaasRadar"

**Pricing**: $9/mo (basic scan, 3 connections) | $19/mo (unlimited connections + monthly report) | $59 LTD (AppSumo, 2-connection limit, 6-month history)

**Core MVP (1–2 weeks):**
1. **Bank/CC connection** — Plaid API to connect business bank account or credit card
2. **Auto-detection** — identify recurring charges; match to known SaaS vendor database (Slack, Zoom, Notion, Airtable, etc.)
3. **Subscription dashboard** — total monthly spend, categorized by type (communication, productivity, design, etc.)
4. **Overlap alerts** — "You're paying for Slack AND Teams — pick one" — specific, actionable flags
5. **Savings estimate** — "If you switched to [cheaper alternative], you'd save $X/month"

**Phase 2 (retention features):**
- Monthly email digest: "Your software spend this month: $X. New subscriptions detected: Y. Suggested cancellations: Z."
- Usage data via Google Workspace/Slack API integrations (detect inactive tools)
- "Cheaper alternative" recommendations with affiliate partnerships
- Team plan: track software spend across departments

## Target Channels
- r/smallbusiness (first launch post — classic place for "I built something useful" posts)
- r/Entrepreneur, r/SaaS
- Product Hunt launch
- LinkedIn: small business owner content about software stack bloat
- AppSumo: primary LTD launch channel

## Top 3 Risks
1. **Retention challenge** — tool becomes less useful after initial audit unless it surfaces new value monthly. Mitigation: monthly digest + usage tracking as core features
2. **Plaid costs** — Plaid charges $0.30–$2.00 per active connection per month. Mitigation: build in connection cost to pricing; or use bank statement CSV upload as free alternative
3. **Horizontal market** — no natural community to own; must build via SEO/content. Mitigation: content strategy around "SaaS stack audit", "software costs for small business"

## Key Source Links
- https://www.reddit.com/r/Entrepreneur/comments/1s5i577/the_saas_model_is_quietly_falling_apart_for_small/
- https://www.reddit.com/r/smallbusiness/comments/1s8qtor/if_your_company_is_paying_for_10_software/
- https://www.reddit.com/r/smallbusiness/comments/1nfyeh9/any_other_business_owners_sick_of_paying_per_user/
- https://www.reddit.com/r/sidehustle/comments/1sqy7st/saas_tier_pricing_is_literally_bleeding_small/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-18 | 79/105 | reddit-2026-10-18 | First identified — Reddit: "12-person company $4,100/month for 23 SaaS tools" pattern; same company paid $1,200/mo 5 years ago; tools inflating 15-20% annually; Pilates studio $250/mo for booking + gift cards; no business owner has clear view of usage/overlap/cancellation opportunities; Cledara/Vendr/Zluri all enterprise-only; "StackScan" concept: bank connection → auto-detect subscriptions → categorize → identify overlaps → flag unused → recommend cheaper alternatives; $9-19/mo or $59 LTD; 1-2 week build; clean AppSumo LTD story; note: horizontal market = lower boring score (2/5) and retention challenge; Sources: reddit-2026-10-18 |
| 2026-10-27 | 79/105 | reddit-2026-10-27 | Stable: SINGLE-source — Reddit: 2-person UK company paying £847/month for 15+ SaaS tools confirmed; "each one feels small, 25 here, 35 there but they compound into an insane monthly burn" = viral relatability; solo founder at $2.8K MRR spending 21% of revenue on SaaS = strong emotional hook for content; open-source/indie alternatives exist but nobody highlights them systematically = distribution opportunity; multiple 2026 comparison posts showing 5x savings via indie alternatives = content plays well; $19/mo + affiliate commissions on alternatives recommended = dual monetization model; note: boring business bonus remains 3/5 (horizontal market — affects LTD depth and churn probability); Sources: reddit-2026-10-27 |

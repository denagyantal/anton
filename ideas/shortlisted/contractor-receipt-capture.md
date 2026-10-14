---
name: Contractor Back-Office Receipt Capture (Shoebox Fixer)
description: Dead-simple field receipt capture for contractors — photo → OCR → AI job categorization → weekly summary to bookkeeper; $49 LTD; bookkeeper distribution channel; 85/105
type: shortlisted
---

# Contractor Back-Office Receipt Capture (Shoebox Fixer) — Score: 85/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-10-14
**Decision Status**: NEW

## One-Line Pitch

Photo a receipt on the job site → AI categorizes it to the right job → weekly summary goes to your bookkeeper. Contractors stop losing receipts; bookkeepers stop reconstructing books at tax time.

## Problem

Every contractor's bookkeeper faces the same scene at tax time: a shoebox of crumpled receipts, half their expenses untracked, invoices scattered across Venmo, QuickBooks, text messages, and handwritten notes.

**The root cause**: Contractors are on job sites all day. They buy supplies at the hardware store, buy lunch for the crew, rent a tool — and throw the receipts in the truck dashboard or pocket. By the end of the week, they're gone or illegible. By tax time, months of expenses are simply untracked.

**Why QuickBooks doesn't solve it**: QuickBooks requires sitting at a computer. Contractors aren't at computers. They're on ladders, under sinks, on rooftops. The adoption rate among solo/small contractors is functionally zero.

**Why Expensify doesn't solve it**: Expensify is a general business expense tool. It doesn't understand job-based cost tracking (this receipt goes to Job #47 — the Martinez renovation on Oak Street), which is the entire reason expense tracking matters for contractors. Job profitability is invisible without per-job cost attribution.

**The bookkeeper distribution angle**: Bookkeepers managing 5–10 contractor clients each face this problem with every single client. If a bookkeeper buys multi-seat access at $49 LTD and activates it for their contractor clients, that's a B2B2C distribution channel — bookkeepers refer to other bookkeepers.

## Market Evidence

- r/Accounting: "Every single contractor client shows up at tax time with a shoebox of crumpled receipts. I spend more time reconstructing their books than doing anything productive."
- r/ContractorCashFlow: "A lot of contractors are still running operations with crumpled receipts" — active thread confirming universal pattern
- r/GeneralContractor: Monthly software spend threads — contractors explicitly lack job-level expense tracking
- 3.7M+ construction businesses in the US; 85%+ are small/solo operators
- No dedicated field-first receipt capture tool for contractors exists below $150/mo (Buildertrend is the only option with job cost capture, at $399/mo)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Bookkeepers confirm universal pattern; contractor shoebox = well-documented, highly recurring complaint |
| Competitor Weakness | 4/5 | 2x | 8 | QB too complex; Buildertrend $399/mo overkill; Expensify not job-cost-aware; gap is real |
| LTD Viability | 5/5 | 2x | 10 | $49 LTD, very low infrastructure; bookkeepers buy and gift to clients = viral LTD economics |
| No Free Tier | 3/5 | 1x | 3 | Expensify/Receipt Bank free tiers exist; job-specific categorization is the differentiator |
| Channel Access | 4/5 | 2x | 8 | r/Contractor, r/Accounting, r/smallbusiness; bookkeeping communities multiply reach |
| Content Potential | 4/5 | 1x | 4 | "contractor expense tracking app", "job cost receipt capture", "construction bookkeeping app" |
| AppSumo Fit | 4/5 | 2x | 8 | Simple tool, clear ROI; bookkeepers as resellers = multi-seat purchases |
| Review Potential | 3/5 | 1x | 3 | Moderate; bookkeepers review when saves time |
| MRR Path | 3/5 | 3x | 9 | $15/mo recurring; simplicity limits defensibility; bookkeeper channel is the moat |
| Build Feasibility | 5/5 | 2x | 10 | Photo → OCR (Google Vision/AWS Textract) → AI job classification → weekly digest = 2–3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Contractors + bookkeeping = deeply boring |

**Total Weighted Score: 85/105**

## Must-Have Filters
- [x] Problem is real (multiple bookkeepers + contractors confirm identical pattern)
- [x] Can build without domain expertise (OCR + LLM classification + email digest = known stack)
- [x] No dominant player (Expensify not job-cost-aware; Buildertrend overkill; no indie option)
- [x] Revenue potential > $10K MRR within 12 months (670 contractors × $15/mo = $10K MRR; achievable via bookkeeper channel)

## Product Concept

**Pricing**:
- $49 LTD: 1 contractor, unlimited jobs, unlimited receipts — AppSumo launch
- $149 LTD: Up to 5 contractors (bookkeeper multi-seat) — "for your contractor clients"
- $15/mo: Individual contractor plan

**Core UX (MVP)**:
1. **Photo a receipt** — contractor takes photo with phone (zero typing)
2. **AI extracts** — vendor name, amount, date auto-pulled
3. **Job selection** — tap to assign to current job from list (or let AI suggest based on vendor/date)
4. **Weekly digest** — every Friday, email summary to contractor + their bookkeeper: "This week you spent $847 across 3 jobs"
5. **QuickBooks export** — quarterly CSV export with job codes ready for bookkeeper

**Distribution play**:
- Target bookkeeping communities FIRST (not contractors)
- Pitch: "Buy $149 for your 5 contractor clients, activate it for each of them, save 2 hours/client at tax time"
- Keeper Tax community, bookkeeping Facebook groups, r/Accounting

## Key Differentiators vs. Expensify
1. **Job-based categorization** — every receipt tied to a specific job, not just a GL code
2. **Designed for field workers** — zero desktop required; photo + one tap = done
3. **Bookkeeper-friendly** — weekly digest + QBO export means bookkeeper gets organized data, not a shoebox
4. **$49 LTD** — Expensify is fine as a free app but has no job-costing; this fills the gap at LTD price

## Top 3 Risks
1. Low MRR ceiling ($15/mo) — needs volume to matter; bookkeeper distribution is the only path to scale
2. Contractor tech aversion — adoption requires truly zero-effort UX (photo only; if it requires any typing it dies)
3. Buildertrend could add a mobile-first receipt snap feature and own this at scale

## Key Source Links
- https://www.reddit.com/r/Accounting/comments/1skb32l/best_contractor_software_youd_recommend_to_your/
- https://www.reddit.com/r/ContractorCashFlow/comments/1u9wcig/a_lot_of_contractors_are_still_running/
- https://www.reddit.com/r/GeneralContractor/comments/1t6hx4t/how_much_are_you_guys_paying_in_systems_monthly/
- https://www.reddit.com/r/Contractor/comments/1stuzjk/be_honest_is_project_management_software_actually/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-14 | 85/105 | reddit-2026-10-14 | First identified: "Every single contractor client shows up at tax time with a shoebox" (r/Accounting); shoebox receipts, scattered invoices across Venmo/QB/text/handwritten = universal pattern confirmed; QB too complex for field use; Buildertrend $399/mo overkill; photo → OCR → job categorize → weekly digest → QBO export = 2–3 week MVP; $49 LTD or $15/mo; bookkeeper-as-distribution-channel is the key GTM insight (5–10 contractor clients per bookkeeper = B2B2C); sources: reddit.com/r/Accounting/comments/1skb32l, reddit.com/r/ContractorCashFlow/comments/1u9wcig |

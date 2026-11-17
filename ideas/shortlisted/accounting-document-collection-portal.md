---
name: Accounting/Tax Document Collection Portal
score: 86/105
tier: 1
verdict: BUILD
date: 2026-11-17
---

# Accounting/Tax Document Collection Portal — Score: 86/105

**Verdict**: BUILD
**Decision Status**: NEW

## One-Line Pitch
A simple client document collection portal for solo and small accounting/CPA firms — accountant creates a tax-season checklist, client gets a clean upload interface, accountant sees completion status — at $29–49/mo replacing $60+/mo Karbon they're using at 20%.

## Problem
Solo CPA practices spend every January chasing W-2s and 1099s via email from clients who can't figure out email attachments. No dedicated tool for client document collection existed — they used email threads and Dropbox.

The specific stack problem: solo accounting practices pay **$198+/mo** for:
- QBO Accountant ($80/mo) — required for client accounting
- Karbon ($59/mo) — complex workflow tool but "steep learning curve and I probably use 20% of what it does"
- DocuSign ($25/mo) — engagement letter signing
- Calendly ($12/mo) — scheduling

A validated indie builder went from 0 → $8.5K revenue in 14 months by building a simple document collection portal and posting about it in accounting subreddits. First customers from subreddit posts alone, no paid marketing.

**The unmet need:** A focused document portal where:
1. Accountant creates a checklist (W-2 from employer 1, W-2 from employer 2, 1099-NEC, etc.)
2. Client gets a clean branded link → uploads everything in one place
3. Accountant sees real-time completion status (5/8 documents uploaded)
4. Documents stay organized by client and tax year

## Market Evidence
- r/microsaas: validated builder at $8.5K revenue in 14 months from subreddit posts alone
- r/smallbusiness: solo CPA paying $198/mo for QBO + Karbon + DocuSign + Calendly stack
- 500K+ accounting/tax professionals in the US; majority solo or small firms
- Karbon "steep learning curve, I probably use 20% of what it does" = overbuilt competitor
- TaxDome: more comprehensive but expensive; no simple <$30/mo option exists

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Validated builder at $8.5K revenue in 14 months with zero marketing; 500K+ CPAs |
| Competitor Weakness | 4/5 | 2x | 8 | Karbon $59/mo but 80% unused; TaxDome expensive; no simple $29/mo document portal |
| LTD Viability | 4/5 | 2x | 8 | Replace $60+/mo subscription they barely use with one-time tool; $99–149 LTD compelling |
| No Free Tier | 4/5 | 1x | 4 | Tax season urgency = real willingness to pay |
| Channel Access | 4/5 | 2x | 8 | r/Bookkeeping, r/Accounting, r/taxpros, CPA-specific subreddits |
| Content Potential | 4/5 | 1x | 4 | "tax document collection portal", "client document management CPA" |
| AppSumo Fit | 4/5 | 2x | 8 | CPAs are on AppSumo; solo practice tools do well |
| Review Potential | 4/5 | 1x | 4 | CPAs leave detailed reviews in professional communities |
| MRR Path | 4/5 | 3x | 12 | $29–49/mo per firm; expand to engagement letters, e-sign, secure messaging |
| Build Feasibility | 5/5 | 2x | 10 | Checklist + file upload + completion dashboard = 2–3 weeks MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Accounting firm back-office = deeply unglamorous |

**Total: 86/105**

## Must-Have Filters
- [x] Problem is real (validated builder $8.5K revenue in 14 months)
- [x] Can build without deep domain expertise (checklist + S3 file storage + dashboard)
- [x] Market not dominated by single unbeatable player (Karbon is overbuilt, TaxDome expensive)
- [x] Revenue potential > $10K MRR (350 firms × $29/mo = $10.2K MRR; achievable with accounting community posts)

## Product Concept

**"TaxPortal"** (or "DocRequest") — Clean document collection portal for accounting/tax firms.

**Core features (MVP):**
1. **Checklist builder** — accountant creates custom checklist per client (W-2, 1099, brokerage statement, etc.)
2. **Client upload portal** — client gets clean branded link → drags/drops files, no account needed
3. **Completion dashboard** — accountant sees all clients' document status in one view (Sarah: 6/8 ✓, John: 2/8 pending)
4. **Email reminders** — auto-send "John, you're missing 2 documents" at scheduled intervals
5. **Document organization** — stored by client, year, document type; downloadable as zip

**Phase 2 expansion:**
- Engagement letter signing (replace DocuSign)
- Secure messaging thread per client
- QBO integration to auto-pull some client data
- Reusable checklist templates by return type (W-2 only, self-employed, rental income, etc.)

**Differentiators:**
- Focused: does one thing perfectly instead of 20 things at 20%
- Client-friendly: no login required for clients to upload documents
- Priced right: $29–49/mo vs $198+/mo for QBO + Karbon + DocuSign + Calendly
- Timing: launch 2 months before tax season = instant demand

**Pricing:**
- $29/mo (up to 25 active clients)
- $49/mo (unlimited clients)
- LTD: $99 (25 clients) / $149 (unlimited)

## Target Market
- Solo CPAs and tax preparers with 10–75 clients
- 2–5 person accounting practices
- Tax season preparation firms
- Bookkeepers who need to collect receipts/documents from small business clients monthly

## Go-to-Market
1. r/taxpros, r/Accounting, r/Bookkeeping — "I built a simple document collection portal for CPAs because Karbon is overkill at $59/mo"
2. Direct outreach in "what's your stack?" accounting subreddit threads
3. AppSumo at $99 LTD (25 clients) — launch in November/December before tax season
4. Email outreach to CPAs who posted in accounting subreddits about tool fatigue
5. Partner with QBO ProAdvisors community

## Risks
1. TaxDome is adding features toward this — could commoditize the space
2. Karbon could add lighter tier
3. Google Drive workaround works well enough for some firms
4. Best timing is pre-tax-season (Nov–Jan) — launch timing critical

## Key Source Links
- https://www.reddit.com/r/microsaas/comments/1u38pi1/sharing_how_i_went_from_0_to_85k_in_revenue_in_14/
- https://www.reddit.com/r/smallbusiness/comments/1s71fcf/added_up_my_software_costs_for_running_a_solo_accounting/

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-17 | 86/105 | reddit-2026-11-17 | First identified — builder validated at $8.5K revenue in 14 months from accounting subreddit posts alone; solo CPA $198/mo stack pain confirmed; Karbon 80% unused = overbuilt competitor; $29/mo or $99 LTD vs $198/mo stack = very compelling; 2–3 week build; perfect pre-tax-season timing |

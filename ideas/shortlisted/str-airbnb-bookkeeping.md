---
name: STR/Airbnb-Specific Bookkeeping
score: 93/105
tier: 1
verdict: BUILD
date: 2026-11-17
---

# STR/Airbnb-Specific Bookkeeping — Score: 93/105

**Verdict**: BUILD
**Decision Status**: NEW

*(Note: distinct from `str-turnover-coordinator.md` which covers cleaning dispatch and cleaner coordination — this is specifically financial bookkeeping for tax prep)*

## One-Line Pitch
STR-specific bookkeeping: import Airbnb/VRBO payout data automatically, categorize cleaning fees/platform fees/occupancy tax correctly per property, generate Schedule E/Schedule C-ready reports — at $19/mo vs. QBO Plus at $120/mo (required just to separate P&Ls per property).

## Problem
Airbnb hosts need to track cleaning fees, occupancy tax, platform fees, and multiple properties — none of which standard accounting software handles:
- **QuickBooks Online Plus** ($120/mo) required just to use "classes" to separate P&L per property
- **QuickBooks Simple Start** ($30/mo) can't separate income by property
- Stessa: focused on long-term rentals, doesn't handle STR-specific categorization (platform fees, cleaning fees, occupancy tax)
- Generic spreadsheets: host exports payout CSV from Airbnb → manually categorizes 50+ line items per month
- Hosts paying accountants $200–300/mo for bookkeeping that should be automated

The specific complexity that generic tools miss: Airbnb payout data contains host payouts, but the gross booking amount minus cleaning fee minus platform fee minus occupancy tax = very different from the deposit amount. Each component must be tracked separately for Schedule E (or Schedule C if primary income).

**Validation anchor:** One founder niched specifically into Airbnb bookkeeping hit $22K MRR with 100% inbound — "Thousands of hosts complaining about the same thing" in Facebook groups. No paid marketing, just the niche positioning.

## Market Evidence
- Reddit r/buildinpublic: validated builder at $22K MRR, 100% inbound, STR-specific bookkeeping
- Millions of Airbnb/VRBO hosts in the US; most managing 2–20 properties
- r/airbnb and STR host Facebook groups: recurring bookkeeping/tax prep confusion threads
- QBO Plus tier ($120/mo) required for multi-property class separation = overkill for 2–5 property hosts
- Stessa (long-term rental focused) is free but doesn't handle STR fee categorization

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Competitor at $22K MRR, 100% inbound; millions of STR hosts; recurring confusion threads |
| Competitor Weakness | 4/5 | 2x | 8 | QBO doesn't understand STR workflow; Stessa long-term focused; no STR-specific bookkeeping tool |
| LTD Viability | 5/5 | 2x | 10 | Airbnb hosts are heavy AppSumo buyers; $59–79 LTD per host at 2–20 properties |
| No Free Tier | 4/5 | 1x | 4 | Hosts pay for bookkeeping accuracy; Schedule E tax prep = real financial value |
| Channel Access | 5/5 | 2x | 10 | r/airbnb, r/vrbo, r/realestateinvesting, BiggerPockets, Airbnb host FB groups |
| Content Potential | 4/5 | 1x | 4 | "Airbnb bookkeeping software", "STR accounting", "Schedule E Airbnb" |
| AppSumo Fit | 5/5 | 2x | 10 | Airbnb hosts = textbook AppSumo customers: solo operators, digital-savvy, deal-hunters |
| Review Potential | 4/5 | 1x | 4 | STR host community very vocal; leave reviews after tax season |
| MRR Path | 4/5 | 3x | 12 | $19–29/mo per host; expand to occupancy tax filing, mortgage interest allocation, depreciation |
| Build Feasibility | 5/5 | 2x | 10 | Airbnb/VRBO payout CSV import + categorization rules + Schedule E report = 3–4 weeks |
| Boring Business Bonus | 3/5 | 2x | 6 | STR is somewhat trendy but bookkeeping for it is unglamorous operations |

**Total: 93/105**

## Must-Have Filters
- [x] Problem is real ($22K MRR validated with zero marketing)
- [x] Can build without deep domain expertise (CSV parsing + categorization rules + report generation)
- [x] Market not dominated by single unbeatable player (no STR-specific bookkeeping tool at affordable price)
- [x] Revenue potential > $10K MRR (500 hosts × $19/mo = $9.5K MRR; achievable fast with community posting)

## Product Concept

**"HostBooks"** — STR-specific bookkeeping for Airbnb/VRBO hosts.

**Core features (MVP):**
1. **Airbnb payout import** — connect via Airbnb API or CSV upload; auto-parse all payout components
2. **VRBO payout import** — same for VRBO/HomeAway
3. **STR-specific categorization** — platform fees, cleaning fees, occupancy tax, host payout all correctly bucketed
4. **Per-property P&L** — each listing gets its own income/expense view
5. **Schedule E report** — export ready for CPA or direct TurboTax entry
6. **Expense entry** — log repairs, supplies, utilities, mortgage interest per property

**Differentiators:**
- Actually understands Airbnb payout structure (gross booking ≠ host payout ≠ taxable income)
- Per-property P&L without paying for QBO Plus class feature
- Schedule E ready, not generic "export to accountant"
- Built for hosts who manage their own bookings (not through PM software)

**Phase 2 expansion:**
- Occupancy tax remittance tracking and filing assistance
- Mortgage interest allocation across properties
- Depreciation tracking for each property

**Pricing:**
- $19/mo (up to 5 listings)
- $29/mo (unlimited listings)
- LTD: $59 (5 listings) / $79 (unlimited)

## Target Market
- Airbnb/VRBO hosts managing 2–20 properties
- Self-managing hosts (not using property managers)
- Hosts preparing for annual tax filing
- Real estate investors adding STR properties to portfolio

## Go-to-Market
1. r/airbnb — "I built a bookkeeping tool that understands Airbnb payouts — no more manually separating cleaning fees from platform fees"
2. STR host Facebook groups (massive audiences, 100k+ combined)
3. BiggerPockets STR forum
4. AppSumo at $59 LTD (5 listings)
5. Partner with STR accounting CPAs for referrals

## Risks
1. Airbnb could build native bookkeeping into the host dashboard
2. STR regulatory crackdowns in major cities reduce host market size
3. Stessa could add STR-specific features (they have the audience)
4. Airbnb API access changes could break auto-import

## Key Source Links
- https://www.reddit.com/r/buildinpublic/comments/1oejjnd/i_niched_down_so_hard_people_said_id_never_scale/
- https://www.reddit.com/r/QuickBooks/comments/1oopojn/how_to_justify_quickbooks_costs_for_small_biz/

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-17 | 93/105 | reddit-2026-11-17 | First identified — competitor at $22K MRR, 100% inbound with STR-specific bookkeeping niche; QBO Plus required for multi-property class separation = clear overpricing gap; Airbnb hosts are ideal AppSumo buyers; $59 LTD vs $120/mo QBO Plus = very compelling; 3–4 week build feasibility |

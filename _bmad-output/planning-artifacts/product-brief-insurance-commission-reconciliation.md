---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/insurance-agency-commission-reconciliation-tool.md
  - _bmad-output/planning-artifacts/market-research-insurance-commission-reconciliation.md
date: 2026-05-14
author: Root
workflowType: product-brief
research_topic: insurance-commission-reconciliation
---

# Product Brief: Insurance Agency Commission Reconciliation Tool

---

## Executive Summary

Independent insurance agencies are hemorrhaging revenue — quietly, consistently, every month. Commission leakage from carrier underpayments and missed payments costs the typical $5M premium agency $18,000–$36,000 per year. The culprit is a broken reconciliation workflow: 70% of the 39,000 independent agencies in the US still use Excel to match carrier commission statements against their policy records — a manual process that consumes 40–80 hours of staff time per month and catches only a fraction of errors.

The insurance agency software market offers two choices: free (Excel) or expensive (Applied Epic at $500–$5,000+/month, HawkSoft at $250/month). The $39–$99/month band for a focused P&C commission reconciliation tool is entirely unoccupied by any established player. Commission Wizard and Fintary ($10M Series A, Nov 2025) validate that the market is real — but both are targeting mid-to-large agencies, leaving 25,000+ small agencies (1–10 producers) without an affordable solution.

This product is a lightweight, standalone commission reconciliation tool for independent P&C insurance agencies. Upload carrier statements (PDF or CSV), auto-match against policy records, flag discrepancies, and export a reconciled report and carrier dispute list — all for $39–$79/month, or $79 as a lifetime deal on AppSumo. No AMS replacement, no enterprise setup, no IT staff required. One recovered missed commission payment typically covers the entire annual subscription.

**Opportunity:** $14M ARR serviceable market. AppSumo category pioneer (zero insurance commission tools exist there today). LTD at $79 with immediate, demonstrable ROI. 3–4 week MVP build feasibility.

---

## Core Vision

### Problem Statement

Independent insurance agencies — particularly the 25,000+ shops with 1–10 producers — receive monthly commission statements from 15–80 carriers, each in its own PDF or CSV format with its own column layouts, calculation methodologies, and timing rules. Reconciling these statements against expected commissions requires manually downloading each carrier statement, entering the line items into Excel, writing formulas to match them against policy records, and then chasing carriers for underpayments. This process takes 40–80 hours per month for a mid-size agency and is owned by a single person — typically a long-tenured office manager or the agency owner themselves — creating a critical key-person dependency.

The result is systematic commission leakage: carriers regularly underpay due to timing differences, unreported cancellations, and statement errors. Agencies that lack automated reconciliation simply don't catch these discrepancies at scale. Industry documentation confirms that agencies implementing proper reconciliation tools routinely discover "tens of thousands of dollars" in previously undetected underpayments.

No affordable, focused commission reconciliation tool exists for the 1–10 producer P&C agency. The gap between Excel ($0) and the cheapest full AMS ($109–$250+/month) with commission features has been left completely open.

### Problem Impact

**Financial:** Commission leakage of 3–6% of earned premiums costs the typical $5M premium agency $18,000–$36,000 per year. For a 3-producer shop earning $200,000 in annual commissions, even 2% leakage is $4,000/year — easily recovered if someone is looking for it.

**Operational:** 40–80 hours/month of manual reconciliation work is time stolen from revenue-generating activities. For an agency owner who is also a producer, this is direct opportunity cost.

**Key-Person Risk:** The reconciliation process is typically owned by one person. When that person leaves, the agency's institutional knowledge of carrier formats, calculation quirks, and dispute history leaves with them.

**Carrier Relationship:** Without clear discrepancy reports, agencies struggle to dispute underpayments with documentation. Disputes become confrontational rather than factual.

**Producer Trust:** Commission errors that flow through to producer payouts damage trust with in-house agents — a retention risk in a competitive talent market.

### Why Existing Solutions Fall Short

| Solution | Why It Doesn't Solve This | Price |
|----------|--------------------------|-------|
| Excel | Manual entry, no auto-matching, no discrepancy detection, no audit trail | Free (but 40–80 hrs/month) |
| Applied Epic | Enterprise AMS — built for 20+ producer shops; $500–$5,000+/month; 12-month implementations | $500–$5,000+/mo |
| AMS360 (Vertafore) | Complex enterprise platform; reconciliation module requires full AMS setup; overkill for small agencies | $200–$400/user/mo |
| HawkSoft | Excellent AMS for small P&C agencies but commission reconciliation is manual-entry-oriented, not PDF-parsing automated | $250/mo flat |
| AgencyBloc Commissions+ | Category leader but Life & Health focused — weak for P&C commission statement formats; requires full AgencyBloc AMS purchase | $109+/user/mo |
| EZLynx | Primary use case is comparative rating; commission features are secondary and underpowered | ~$1,250+/mo est. |
| Fintary | Well-funded pure-play commission automation, but enterprise/mid-market positioning; pricing prohibitive for small agencies | ~$500+/mo est. |
| Commission Wizard | Closest direct competitor; AI-powered reconciliation; but pricing undisclosed, early-stage, no AppSumo presence | Unknown |
| Commission Tracker | Legacy data entry tool — not automated reconciliation; no PDF parsing | Unknown (low) |

**The core gap:** No tool at $39–$99/month provides automated PDF + CSV statement ingestion, policy-level matching, and discrepancy flagging for P&C agencies. This band is completely unoccupied by any established player.

### Proposed Solution

A focused, standalone SaaS tool for P&C commission reconciliation. Three workflows, ruthlessly simple:

1. **Upload** — Drag and drop carrier commission statements. Support PDF (AI-powered OCR extraction) and CSV/Excel. Auto-detect carrier and statement format on upload.

2. **Match** — Auto-match each carrier statement line item against the agency's policy records (manually entered or imported from AMS export). Flag matches, near-matches, and unmatched items. Show discrepancies by type: underpayments, missing payments, overpayments, timing differences.

3. **Report** — Export a reconciled commission statement and a carrier dispute list (ready to attach to a carrier email). Export to QuickBooks-compatible format for accounting reconciliation.

The product does not try to replace the AMS. It sits alongside whatever system the agency already uses, ingesting carrier statements and their policy export, and returning a clean reconciliation — saving 20–60 hours per month and catching revenue leakage that Excel misses.

### Key Differentiators

1. **Only tool priced for small agencies** — $39–$79/month vs. $250–$5,000+/month for full AMS platforms. First insurance commission reconciliation tool on AppSumo.

2. **P&C generalist focus** — AgencyBloc's Commissions+ is the only dedicated commission tool, but it's built for Life & Health lines. This product is built for the P&C statements that dominate the independent agency market.

3. **AI-powered PDF parsing from day one** — 75% of carrier statements arrive as PDFs. Template-based CSV-only tools cover a fraction of the carrier universe. AI OCR + column detection handles format diversity without requiring manual template configuration.

4. **Standalone point solution** — No AMS replacement required. Works alongside HawkSoft, NowCerts, EZLynx, or even a filing cabinet. Agencies don't need to change their existing workflow — they add a single reconciliation step.

5. **Immediate, demonstrable ROI** — A single recovered carrier underpayment (typically $200–$5,000 per incident) pays back the entire annual subscription or LTD purchase. The ROI case requires no calculation — it shows up in the first reconciliation run.

6. **AppSumo category pioneer** — No insurance commission reconciliation tool has ever appeared on AppSumo. The category is completely open to a first-mover at $79 LTD, targeting small business SaaS buyers who closely overlap with the 1–5 producer agency owner demographic.

---

## Target Users

### Primary Users

**Persona 1: Sarah — Agency Owner / Solo Producer (1–3 producers)**

Sarah is a former State Farm captive agent who went independent five years ago. She runs a 2-person shop in suburban Ohio: herself as the sole producer and a part-time admin who handles certificates, renewals, and basic bookkeeping. Sarah works with 22 carriers and receives commission statements on the 15th–25th of each month. She reconciles them herself, in Excel, on Sunday evenings — a habit she hates but can't delegate.

Her Excel workbook has grown to 47 tabs over five years. She knows it's fragile: last October, a formula error meant she missed $1,800 in earned commissions from a carrier. She only found it by accident when reviewing the prior year at tax time. She's not sure what else she's missing.

Sarah is price-sensitive — $49/month feels like a stretch — but she would buy at $79 LTD instantly if she saw, in a demo or trial, one discrepancy she'd been missing. The ROI calculation is trivially obvious to her: if this finds even one mistake per quarter, it has paid for itself many times over.

**What she needs:** An upload-and-match workflow she can complete in under 2 hours on the 25th of each month instead of 6 hours on Sunday nights. She needs PDF upload (10 of her 22 carriers only send PDFs). She needs a discrepancy report she can email to a carrier with a professional, documentation-backed dispute request.

---

**Persona 2: Mark — Agency Office Manager / CSR (2–7 producer agency)**

Mark has worked at Riverside Insurance Group for 11 years. He owns the entire back-office operation: certificates, renewals, invoicing, and commission reconciliation. The agency has 5 producers, 38 active carriers, and around $3.2M in annual premiums. Mark spends 3.5 days per month on commission reconciliation — downloading statements, entering them into a spreadsheet his predecessor built, matching them to the agency management system (HawkSoft), and preparing a summary for the owner.

He is the only person at the agency who knows how to do this. The owner has mentioned that if Mark ever left, they'd "be in real trouble." Mark knows this, and it gives him job security — but also a recurring sense of dread that one day the workload will break the system.

Mark is not the buyer, but he is the internal champion. When a tool exists that could save him 2 days per month, he will bring it to the owner with a clear ROI case. He needs it to be easy enough to explain to the owner in 5 minutes and convincing enough that the owner approves the $49–$79/month spend without an extended evaluation cycle.

**What he needs:** Automated carrier statement ingestion (primarily PDF for his carriers), a matching engine that handles HawkSoft export format, and a discrepancy aging report showing how long each underpayment has been outstanding. QuickBooks export is a bonus but not a blocker.

### Secondary Users

**Insurance Agency Owner (non-operator):** Receives the reconciled report as output. Doesn't use the product daily but evaluates ROI at renewal. Needs clear financial summary: total commissions expected vs. received, total discrepancies identified, dollar value recovered.

**Agency Accountant / Bookkeeper:** May use the QuickBooks export monthly to post commissions to the general ledger. Does not need reconciliation functionality — only clean, formatted export. A satisfied secondary user becomes an internal advocate for renewal.

**Producer (individual agent within multi-producer agency):** Views their own commission statements via a producer portal (post-MVP feature). Does not need access to all carriers' data — only their split of earned commissions. Reduces "when do I get paid?" inquiries to the office manager.

### User Journey

**Discovery Phase**
Sarah types "insurance commission reconciliation software" into Google after a particularly painful Sunday-night Excel session. She finds a Capterra listing and a Reddit thread in r/Insurance where another agency owner mentioned recovering $3,400 in missed commissions in their first month of using a new tool. She clicks through to the product website.

Separately, Mark mentions the reconciliation pain to the owner during a quarterly review. The owner says "find something under $100/month." Mark searches Capterra, sees Commission Wizard and this product side by side. He asks in the agency owner Facebook group which one people have used.

**Onboarding Phase**
Sarah signs up for the 14-day free trial. She uploads her most recent carrier commission statement PDF (Nationwide, her largest carrier). The OCR extracts the data in under 30 seconds. She imports her policy CSV from HawkSoft. The matcher runs. It flags 3 discrepancies — two timing differences and one genuinely missing payment of $340.

Sarah's "aha!" moment: the $340 missing payment. She has the carrier dispute report in her hands in 4 minutes. She submits it to Nationwide the same day. The next morning, she upgrades to the paid plan.

**Core Usage (Month 1–3)**
Sarah adds all 22 carriers over the first two months. The AI format detection handles 19 of them automatically; she manually maps 3 column configurations (15 minutes each). By month 3, her monthly reconciliation takes 90 minutes instead of 6 hours. She has recovered $1,240 in previously missed commissions.

Mark completes onboarding differently: he works through the 38 carrier mappings over two weeks (2–3 per day alongside his regular work). He produces his first full reconciliation report at the end of month 1 and presents it to the owner. The report shows $2,100 in outstanding discrepancies across 6 carriers. The owner approves annual billing immediately.

**Long-Term Retention**
The tool becomes embedded in the monthly workflow. Carrier format mappings are established; the matching algorithm has learned from their corrections. The switching cost is real (carrier history, mapping configurations, dispute records). Both Sarah and Mark become word-of-mouth advocates — Sarah mentions it in r/Insurance; Mark recommends it at the state IIABA chapter meeting.

---

## Success Metrics

### User Success Metrics

**Time-to-first-value:** User completes first successful reconciliation run (at least one carrier statement matched against policy records with results displayed) within 60 minutes of account creation. Target: 80% of trial users achieve this in session 1.

**Discrepancy discovery rate:** % of active users who identify at least one carrier discrepancy in their first reconciliation run. This is the primary "aha!" trigger and the strongest predictor of conversion. Target: 60%+ of trial users discover at least one discrepancy worth flagging.

**Time saved per reconciliation cycle:** Self-reported or inferred from session data. Target: users report 50%+ reduction in monthly reconciliation time within 90 days of adoption.

**Carrier coverage completeness:** % of a user's active carriers successfully mapped and processing in the tool. Target: 80% of carriers mapped within first 45 days. Carriers remaining on Excel = churn risk.

**Monthly active usage:** % of subscribers who complete at least one reconciliation run per calendar month. Target: 85%+ of paid subscribers are monthly-active (reconciliation is monthly — non-usage = the tool isn't replacing Excel).

### Business Objectives

**Month 3:** 50 paying customers (mix of LTD trial conversions and direct subscribers). Monthly recurring revenue: $2,000–$3,000. AppSumo launch initiated.

**Month 6:** 200 paying customers. MRR: $8,000–$12,000. At least 10 organic reviews on Capterra or G2. First Big "I" state chapter mention or newsletter feature.

**Month 12:** 400+ paying customers. MRR: $18,000–$28,000. AppSumo LTD revenue: $39,000–$158,000 net. Total ARR: $250,000–$350,000 (combined MRR + LTD amortized). At least 25 Capterra/G2 reviews averaging 4.3+ stars.

**Strategic objectives:**
- Establish category leadership in P&C commission reconciliation before Commission Wizard scales distribution
- Build carrier format library as a proprietary moat (each new carrier mapping reduces churn and increases switching cost)
- Validate AppSumo as primary distribution channel for the insurance agency SaaS category
- Achieve positive word-of-mouth velocity in r/Insurance and independent agent Facebook groups

### Key Performance Indicators

| KPI | Target (Month 6) | Target (Month 12) | Measurement Method |
|-----|-----------------|-------------------|--------------------|
| Monthly Recurring Revenue | $8,000 | $22,000 | Stripe/billing system |
| Paying customers | 200 | 400 | CRM |
| Trial-to-paid conversion rate | 25% | 30% | Cohort analysis |
| Monthly active usage rate | 85% | 88% | Product analytics |
| Carriers mapped per account (avg) | 15 | 25 | Product database |
| Discrepancy discovery rate (trial) | 55% | 65% | Product analytics |
| Net revenue churn (monthly) | <3% | <2% | Billing system |
| AppSumo LTD units sold | 500 | 1,500 | AppSumo dashboard |
| Capterra/G2 reviews | 10 | 30 | Review platforms |
| NPS score (active subscribers) | 45 | 55 | In-app survey |
| Average commission recovered (user-reported) | $1,200 | $2,500 | User survey / in-app reporting |

**North Star Metric:** Total commission dollars recovered across all user accounts. This is the clearest measure of product value and the most compelling marketing claim. Target: $500,000 recovered by Month 6; $2M by Month 12.

---

## MVP Scope

### Core Features

The MVP must deliver exactly one thing reliably: upload a carrier statement, match it to policy records, and surface discrepancies. Everything else is post-MVP.

**1. Carrier Statement Upload**
- Drag-and-drop PDF upload with AI-powered OCR extraction (primary format — 75% of carrier statements arrive as PDFs)
- CSV/Excel upload with AI-powered column detection and mapping
- Auto-detect carrier from statement header/filename where possible
- Manual carrier assignment and column mapping UI for first-time carrier setup
- Upload history per carrier per month

**2. Policy Record Import**
- CSV import of policy records (manual upload of AMS export)
- Required fields: policy number, carrier, effective date, premium, expected commission rate, producer name
- Simple field mapping UI for different AMS export formats
- Manual policy entry as fallback for agencies without AMS

**3. Matching Engine**
- Auto-match carrier statement line items to policy records by policy number (exact match priority)
- Fuzzy matching for near-matches (policy number format variations, insured name matching)
- Discrepancy flagging by type: underpayment, missing payment, overpayment, timing difference (within-period vs. cross-period)
- Confidence scoring on matches; flagging of low-confidence matches for human review
- Manual match override with audit trail

**4. Discrepancy Report**
- Summary view: total expected vs. received, total discrepancies by type and dollar amount
- Line-item discrepancy list with policy details, expected amount, received amount, difference
- Aging: how long each discrepancy has been outstanding (carries forward month-over-month)
- Export to PDF (formatted for carrier dispute submission) and CSV

**5. Reconciled Statement Export**
- Export of matched and reconciled commission data in CSV format
- QuickBooks-compatible CSV format for direct import (Chart of Accounts mapping)
- Month-end reconciliation summary for agency accounting records

**6. Account and User Management**
- Single-user account (MVP) with email/password authentication
- Carrier format library: save configured carrier mappings for reuse each month
- Reconciliation history: access past months' reconciliation records and reports
- Basic billing: monthly subscription ($39 Solo / $69 Standard) + LTD support via AppSumo code redemption

### Out of Scope for MVP

These features are intentionally deferred to avoid scope creep and maintain a 3–4 week build timeline:

- **Multi-user / team access** — Single-user account only for MVP. Producer portals and role-based access are V2.
- **Direct AMS integration** — No API connections to HawkSoft, Applied Epic, EZLynx, NowCerts, etc. Policy import via CSV export from AMS only. AMS API integrations are V2/V3.
- **Direct carrier API feeds** — No automated carrier statement downloads. Manual upload only for MVP. Carrier connections are post-AppSumo-launch.
- **Producer split tracking and payroll** — Producer commission calculations and agent payout workflows are out of scope. This is a reconciliation tool, not a commission calculator.
- **Mobile app** — Web-only for MVP.
- **CRM or client management** — Not an AMS replacement. No policy management, quoting, or client records.
- **Advanced analytics / dashboards** — Basic summary metrics only. Carrier trend analysis, commission rate benchmarking, and predictive analytics are V3.
- **Email notifications / automated workflows** — Manual workflow for MVP. Automated monthly statement reminders and carrier dispute tracking workflows are post-launch.
- **Compliance or regulatory features** — State-level commission disclosure features and regulatory reporting are explicitly out of scope for MVP. The product processes financial data internally; it does not submit to regulators.

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **10 paying beta customers** from real P&C agencies (recruited from r/Insurance or direct outreach) have completed at least 2 monthly reconciliation cycles using the product.

2. **At least 6 of those 10 customers** report discovering a discrepancy they would not have caught with Excel — with at least 3 reporting that they successfully disputed and recovered a missed payment.

3. **Average time-to-first-reconciliation** (from account creation to completed first run) is under 90 minutes for agencies with fewer than 25 carriers.

4. **PDF parsing accuracy** — AI OCR correctly extracts and maps carrier statement line items with 90%+ accuracy on the 10 most-common carrier formats by market share (State Farm, Nationwide, Progressive, Travelers, Liberty Mutual, Farmers, Allstate, Cincinnati Financial, Westfield, Erie).

5. **Zero critical data loss bugs** across the beta period — reconciliation records, carrier mappings, and match decisions must persist correctly.

6. **AppSumo application submitted** with at minimum 5 Capterra/G2 reviews from beta customers, a demo video, and confirmed LTD pricing at $79.

### Future Vision

**V2 (Months 4–9 post-launch): Team & Depth**
- Multi-user accounts with role-based access (Admin, Accountant, Producer)
- Producer commission portal: each producer sees their own commission breakdown without access to full agency data
- Carrier format library: community-contributed carrier mappings; shared format templates reduce first-time setup to zero for common carriers
- HawkSoft and NowCerts direct CSV sync (not full API — enhanced CSV import workflows tuned to each AMS's export format)
- Discrepancy workflow: built-in carrier dispute tracking with status (submitted, acknowledged, resolved, escalated)
- Commission rate verification: flag policies where the received commission rate differs from the expected rate in the policy record

**V3 (Months 10–18): Platform & Integrations**
- Applied Epic and AMS360 API integrations (policy data sync, no manual export required)
- Carrier statement auto-download connections for the 20 largest carriers by independent agency volume
- QuickBooks Online native integration (two-way sync, not just CSV export)
- Analytics dashboard: commission trend by carrier, by line of business, by producer over 12 months
- Carrier benchmarking: compare commission rates against anonymized peer agency data (opt-in)
- Bonus and override reconciliation: handle quarterly/annual bonus statements from carriers

**Long-Term Vision (Year 2–3): Category Platform**
- Commission financing: advance commission payments against receivables (fintech integration)
- Carrier performance ratings: score carriers on payment accuracy and dispute resolution speed
- Network effects: when carrier formats are mapped by any user, they become available to all — creating a compounding data moat
- Expand beyond P&C: Life & health commission reconciliation (serving the AgencyBloc alternative market)
- API for insurance industry vendors: allow AMS platforms and agency networks to embed reconciliation as a white-label feature
- M&A opportunity: as the category leader, become an attractive acquisition target for Vertafore, Applied Systems, or HawkSoft

The long-term vision is to become the financial operating system for independent insurance agency commission management — starting from the reconciliation moment and expanding up and down the commission lifecycle.

---

*Product Brief completed: 2026-05-14*
*Based on: Shortlisted idea scoring 85/105 (Tier 1 — Strong Opportunity) + comprehensive market research (15 targeted searches, 2026-05-14)*
*Next step: create-prd — Full Product Requirements Document*

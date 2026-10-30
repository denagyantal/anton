---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/contractor-back-office-receipt-capture.md
  - _bmad-output/planning-artifacts/research/market-contractor-receipt-capture-research-2026-10-29.md
workflowType: create-product-brief
date: '2026-10-30'
author: Root
---

# Product Brief: Contractor Back-Office Receipt Capture (Shoebox Fixer)

---

## Executive Summary

Every contractor's bookkeeper faces the same scene at tax time: a shoebox of crumpled receipts, months of untracked expenses, and hours of reconstruction work that should have been unnecessary. The root cause is structural — contractors work in the field all day and have no tool that fits their actual behavior: buy something, snap a photo, move on.

**Shoebox Fixer** is a dead-simple mobile-first receipt capture app for solo and small trade contractors. The contractor photographs a receipt on the job site; the app uses OCR to extract vendor, amount, and date; the contractor taps to assign it to the right job from a pre-set list. Every Friday, a clean weekly summary lands in both the contractor's inbox and their bookkeeper's. At tax time the bookkeeper receives a QuickBooks-ready CSV organized by job — instead of a shoebox.

The product occupies a completely unoccupied market position: job-cost-aware field receipt capture below $50/month. Generic tools (Expensify, Wave) lack job attribution entirely. Construction platforms (Buildertrend $499/mo, Knowify $99/mo+) are overkill for the 3.7M solo and small-crew operators who just need to stop losing receipts. The pricing model is $49 LTD for individual contractors and $149 LTD for a 5-seat bookkeeper plan — with $15/month recurring as the post-AppSumo track.

The go-to-market is B2B2C through bookkeeper communities: a single bookkeeper buys the 5-seat plan and activates it for their contractor clients, saving themselves 2–5 hours per client at tax time while creating a viral referral pathway into other bookkeeping practices.

---

## Core Vision

### Problem Statement

Solo and small trade contractors (HVAC, plumbing, electrical, GC, landscaping) buy materials, rent tools, and fuel up throughout the workday. Receipts end up in truck dashboards, jacket pockets, and grocery bags. By the end of the week, many are gone or illegible. By tax time, months of field expenses are simply untracked — costing contractors 15–25% of their project margins in lost deductions (Workyard, 2026).

The problem has two layers:

1. **Receipt loss** — Paper receipts do not survive the field. Contractors are on ladders, under sinks, and in crawl spaces; they cannot manage paper.
2. **No job attribution** — Even when receipts are saved, no tool below $99/month links them to a specific job. Contractors run multiple jobs simultaneously and need to know whether Job #47 was profitable. Generic expense tools produce an undifferentiated expense list, not job profitability data.

QuickBooks does not solve it: it requires a computer and active project setup, with functionally zero solo-contractor adoption. Expensify does not solve it: it captures receipts but has no concept of job codes. Buildertrend solves it but charges $499/month and requires multi-hour onboarding — complete overkill for a solo plumber running three jobs.

### Problem Impact

- **Financial**: 15–25% of project margin lost to untracked field expenses (Workyard, 2026); a $49 LTD pays for itself the first time it recovers a forgotten $200 materials receipt.
- **Operational**: Bookkeepers managing 5–25 contractor clients each spend 2–5 hours per client reconstructing the shoebox at tax time — every year, with every client.
- **Psychological**: Contractors are embarrassed by their disorganization; they want to look professional with their bookkeeper. Bookkeepers dread contractor clients approaching tax season.
- **Scale**: 4M US construction businesses (IBISWorld, 2026); 85%+ are solo or sub-10-person operations; ~1.5M use an external bookkeeper. This is a recurring, universal, underpinned problem across the entire segment.

### Why Existing Solutions Fall Short

| Tool | Why It Fails for Contractors |
|------|------------------------------|
| Expensify | General GL categories, not job codes; corporate card focus; no field-first UX |
| Wave | Free basic receipt scan; no job attribution; no bookkeeper delivery |
| Shoeboxed | "Mail in your shoebox" is the product — no real-time field capture; no job coding |
| SparkReceipt | Good OCR; no job costing; sold out on AppSumo (validates demand, not supply) |
| QuickBooks Plus | $140/mo; requires desktop setup; complex for field use; no job-specific receipt snap |
| Buildertrend | $499/mo; full construction management suite; 2-hour onboarding; overkill |
| Knowify | $99–$329/mo; trade contractor focus but complex; not field-first UX |
| Workyard | $56/mo minimum; time-tracking is primary, receipts are secondary; no bookkeeper digest |

The $15–50/month tier for **field-first, job-cost-aware receipt capture with bookkeeper output** is completely unoccupied.

### Proposed Solution

A mobile-first app with one job to do: make it effortless for a contractor in the field to capture a receipt and assign it to the right job, then deliver organized weekly summaries to the bookkeeper automatically.

**The five-step flow (all on mobile, no desktop required):**

1. **Photo** — Contractor takes a photo of the receipt with their phone. Zero typing.
2. **OCR extraction** — App automatically pulls vendor name, amount, and date.
3. **Job assignment** — Contractor taps to assign from their job list (2–5 active jobs at most), or accepts the AI suggestion based on vendor history and date pattern.
4. **Weekly digest** — Every Friday at 5 PM, a clean summary email goes to the contractor and their bookkeeper: "This week you captured $1,240 across 4 jobs."
5. **QBO export** — Quarterly CSV export with job codes, ready for the bookkeeper to import into QuickBooks.

**The bookkeeper distribution model**: Bookkeepers managing 5–20 contractor clients buy a $149 5-seat LTD, activate it for their contractor clients, and immediately save 2–5 hours per client at year-end. The product markets itself inside every bookkeeping community.

### Key Differentiators

1. **Job-based attribution as a first-class feature** — Every receipt is linked to a specific job, not just a generic category. This is the single most important capability missing from every sub-$99/month tool.
2. **Designed for the field, not the office** — Zero desktop requirement. Photo → one tap → done. The entire capture flow completes in under 10 seconds.
3. **Bookkeeper-native output** — The product's value is visible weekly, not just at tax time. The bookkeeper receives organized, job-coded data automatically — not raw scans that require manual processing.
4. **$49 LTD removes all adoption friction** — Below the psychological resistance threshold for solo operators. Justifiable at the first recovered receipt.
5. **Bookkeeper distribution moat** — Each bookkeeper buying a 5-seat plan activates the product for multiple contractor clients. Bookkeeper-to-bookkeeper word-of-mouth in professional communities (Keeper.app, QBO ProAdvisor groups, NACPB) compounds reach without paid acquisition.
6. **No features contractors don't need** — No scheduling, no client portal, no proposals, no CRM. Just receipts and jobs.

---

## Target Users

### Primary Users

**Persona 1: Marcus, Solo HVAC Technician**

- **Context**: 38 years old, solo HVAC operator in suburban Atlanta. Revenue ~$280K/year running 3–5 jobs simultaneously. Works 6 days a week; no office time. Phone is his primary computer.
- **Current behavior**: Buys refrigerant, fittings, and supplies at multiple vendors daily. Receipts go in the truck's center console. Sends a grocery bag of them to his bookkeeper every February. Gets a tax bill that feels higher than it should be.
- **Pain**: "I know I spent $400 at Home Depot last month but I can't tell you which job it was for. My bookkeeper asks me every year and I have no idea."
- **What success looks like**: Snaps a photo at the supply house parking lot, taps "Martinez renovation," and forgets about it. At tax time, his bookkeeper says the books are already clean.
- **Adoption trigger**: Bookkeeper tells him she bought a tool that'll make this easier, or he loses track of a $600 tool rental on a job he thought was profitable.
- **Willingness to pay**: $49 LTD (one-time). Won't pay monthly above $20 unless the value is very visible.

**Persona 2: Jenna, Small GC with a 3-Person Crew**

- **Context**: 44 years old, general contractor managing residential remodels. 3 employees; her husband does the books evenings and weekends. Revenue ~$850K/year, running 2–3 jobs simultaneously.
- **Current behavior**: Each crew member buys materials independently. Receipts come in from three sources, often crumpled in pocket. End of week: "just throw everything in that envelope."
- **Pain**: Multi-person receipt chaos compounds the problem. She can't tell which job $3,200 in lumber last month went to. Job costing is guesswork.
- **What success looks like**: All three crew members photo receipts as they buy. She gets a Friday digest showing job-by-job spend. Her husband stops asking her where the receipts are.
- **Adoption trigger**: A big job that looked profitable turned out to be a loss because she couldn't account for $7,000 in materials. Or her bookkeeper explicitly recommends a tool.
- **Willingness to pay**: $15/month or a $49 LTD. Might upgrade to the team plan if she can add crew members.

### Secondary Users

**Persona 3: Sandra, Independent Bookkeeper**

- **Context**: 51 years old, independent bookkeeper serving 18 clients in suburban Phoenix, 6 of whom are trade contractors. Uses QBO and Dext. Works remotely.
- **Role in the product**: Sandra is the **primary distribution vector**. She discovers Shoebox Fixer in a bookkeeping Facebook group, buys the $149 5-seat LTD, and activates it for her top 5 contractor clients. She is not the daily user — she's the weekly digest recipient and the person who imports the QBO export at year-end.
- **Pain**: "Six clients show up in February with shoeboxes. I spend 3–4 hours per client just figuring out what they spent. It's the most miserable part of my year."
- **What success looks like**: Weekly digest lands in her inbox for each contractor client. By February, she already has 11 months of organized, job-coded data. Year-end reconstruction goes from 4 hours to 30 minutes per client.
- **Purchase trigger**: Community recommendation from another bookkeeper, or one too many shoeboxes.
- **Willingness to pay**: $149 5-seat LTD (covers 5 clients). Immediately justified by saving 20+ hours at year-end. Will recommend to the 10 other bookkeepers she knows personally.

### User Journey

**Contractor Discovery → Activation → Retention:**

1. **Discovery**: Sandra (bookkeeper) recommends the tool to Marcus and sets him up. OR Marcus googles "contractor expense tracker app" after losing his third big receipt this month.
2. **Onboarding**: Downloads app, enters 3–5 current job names (2-minute setup). Connects his bookkeeper's email for weekly digests.
3. **First capture**: Standing in Home Depot parking lot. Takes a photo, app extracts "$47.83, Home Depot." Taps "Kitchen remodel — Johnson." Done in 8 seconds.
4. **Aha moment**: Friday at 5 PM: first weekly digest arrives in his inbox and Sandra's. "This week: 12 receipts, $1,847 captured across 3 jobs." Marcus texts Sandra: "Did you see that? Is that what you needed?"
5. **Retention anchor**: Sandra replies: "Yes! This is perfect. Keep going." The bookkeeper loop validates retention every Friday.
6. **Long-term**: Q4 arrives. Sandra exports the QBO CSV for Marcus's job codes, imports in 10 minutes. Marcus's tax return captures $14,000 more in deductions than last year. Both are converts.

**Bookkeeper Discovery → Purchase → Distribution:**

1. **Discovery**: Keeper.app community thread or QBO ProAdvisor Facebook group. Another bookkeeper posts: "I set this up for my contractor clients and my February hell is over."
2. **Evaluation**: Does it sync with QBO? Yes (CSV export, OAuth sync on roadmap). Can I manage multiple clients? Yes — bookkeeper dashboard. What does it cost? $149 for 5 seats.
3. **Purchase decision**: 1 week from discovery. "If it saves me 3 hours per client at year-end, it pays for itself the first client."
4. **Distribution**: Activates for her 5 contractor clients. Each contractor gets a setup link with her pre-configured bookkeeper email for digests.
5. **Referral**: Tells 3 other bookkeepers at the monthly local meetup. Two of them buy within the week.

---

## Success Metrics

The product has two success layers: user success (do contractors stop losing receipts? do bookkeepers save meaningful time?) and business success (AppSumo traction → MRR flywheel → sustainable bookkeeper channel).

### User Success Metrics

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Receipt capture rate (7-day activation) | ≥5 receipts captured within 7 days of signup | In-app event tracking |
| Weekly active users (WAU) | ≥60% of activated contractors capture ≥1 receipt/week | App analytics |
| Job assignment accuracy | ≥90% of receipts assigned to a job (not "Uncategorized") | DB query on receipt records |
| Bookkeeper weekly digest open rate | ≥50% | Email delivery platform (SendGrid) |
| Contractor retention at 90 days | ≥70% still capturing ≥1 receipt/week | Cohort analysis |
| Aha moment time-to-value | First receipt captured within 5 minutes of signup | Funnel analytics |

**The single most important user metric**: a contractor who captures a receipt within 10 minutes of signup and receives their first Friday digest with their bookkeeper copied is a retained user. This two-event sequence is the activation gate.

### Business Objectives

**Month 1–3 (AppSumo Launch Phase):**
- Launch on AppSumo with $49 individual LTD and $149 5-seat bookkeeper LTD
- Target: 300–500 LTD sales in the first 60 days
- Revenue target: $25,000–$50,000 LTD gross
- Goal: Establish G2 and Capterra presence with 50+ reviews in "Construction Expense Tracking"

**Month 3–6 (Bookkeeper Channel Activation):**
- Activate bookkeeper distribution: 50+ bookkeepers purchasing the 5-seat LTD
- Each bookkeeper activates for 3–5 contractor clients = 150–250 additional users from bookkeeper channel
- Convert 15% of LTD users to $15/month recurring = 75–100 MRR subscribers
- Revenue target: $1,125–$1,500/month recurring

**Month 6–12 (MRR Growth):**
- Target: $10,000/month MRR = ~667 recurring subscribers
- Bookkeeper referral flywheel: 200+ bookkeepers in the referral network
- Direct QBO OAuth sync launched (key retention and expansion driver)
- Upsell to team plan ($39/month, up to 5 crew members) for small contractor crews

**Year 1 Targets:**
- 2,000+ total LTD users (contractors and bookkeeper-activated)
- $10K+ MRR
- 200+ reviews across G2/Capterra/AppSumo
- Net Promoter Score ≥50 (bookkeeper segment)

### Key Performance Indicators

**Acquisition KPIs:**
- AppSumo deal acceptance and launch within 60 days of MVP
- Weekly new LTD purchases during AppSumo campaign: ≥50/week
- Bookkeeper-to-bookkeeper referral rate: ≥20% of bookkeeper buyers refer at least one colleague within 30 days

**Activation KPIs:**
- Contractor activation rate (first receipt captured within 24 hours): ≥50%
- Bookkeeper digest setup rate (bookkeeper email connected during onboarding): ≥70%
- Job list created within 5 minutes of signup: ≥80%

**Engagement KPIs:**
- Weekly receipt capture per active contractor: ≥5 receipts/week
- Friday digest open rate (contractor): ≥45%
- Friday digest open rate (bookkeeper): ≥55%
- Monthly receipts per contractor: ≥20

**Revenue KPIs:**
- LTD-to-MRR conversion rate: ≥12% within 6 months
- Monthly churn rate (MRR): ≤3%
- Bookkeeper LTD average order value: ≥$149 (mix of 1-seat and 5-seat)
- CAC (direct): <$30 via AppSumo community and Reddit; CAC via bookkeeper channel: ~$0 (referral)

**Retention KPIs:**
- 90-day contractor retention (weekly active): ≥70%
- Bookkeeper retention (annual digest active): ≥85%
- Tax season reactivation rate (contractors who were dormant returning in Q4): ≥30%

---

## MVP Scope

### Core Features

The MVP must deliver the complete five-step flow reliably. Nothing beyond this is required for launch.

**1. Mobile Receipt Capture (iOS + Android)**
- Camera-first interface: one tap to open camera from home screen
- OCR extraction via Google Vision API or AWS Textract: vendor name, amount, date
- Manual correction fields for OCR errors (simple text edit, not a form)
- Photo stored in cloud; original image always retained

**2. Job Management**
- Create, rename, and archive jobs (simple list; no project templates needed)
- Assign receipt to job via tap selection (job list sorted by most-recently-used)
- AI job suggestion based on vendor + time of day patterns (can be ignored with one tap)
- "Uncategorized" bucket for receipts not yet assigned (visible in dashboard)

**3. Bookkeeper Connection**
- Contractor enters bookkeeper email during onboarding (or later from settings)
- Bookkeeper receives weekly digest as plain-text email — no login required for bookkeeper
- Bookkeeper can optionally create a free dashboard account to view all their contractor clients

**4. Weekly Digest (Friday 5 PM local time)**
- Summary of receipts captured that week: count, total amount, breakdown by job
- Sent to contractor + their connected bookkeeper email
- Simple, readable email (not a PDF; plain HTML table is sufficient)
- Link to web app for bookkeeper to view images if needed

**5. Export**
- CSV export: receipt date, vendor, amount, job name, job code
- One-click download from web dashboard
- Format compatible with QuickBooks import (job field maps to QBO Project/Class)

**6. Minimal Web Dashboard**
- Contractor: receipt history, job filter, export button
- Bookkeeper: list of connected contractors, aggregate view, export per contractor
- No complex reporting; this is a data retrieval view, not an analytics platform

**7. Onboarding Flow**
- Step 1: Create account (email + password; no social login required for MVP)
- Step 2: Add first 3 jobs (prompted; required before first capture)
- Step 3: Add bookkeeper email (prompted; skippable)
- Step 4: Capture first receipt (tutorial overlay with first camera open)
- Target: complete setup in under 3 minutes

### Out of Scope for MVP

These features have clear demand or value but are explicitly deferred to keep the MVP shippable in 2–3 weeks:

| Feature | Why Deferred |
|---------|-------------|
| Direct QuickBooks OAuth sync | Significant engineering effort; CSV export covers the bookkeeper need at launch |
| Multi-crew member receipt submission | Adds user management complexity; Phase 2 after solo contractor validation |
| Physical receipt mailing (Shoeboxed-style) | Operational complexity; not core digital product |
| Mileage tracking | Different problem; do not dilute the receipt focus |
| Invoice capture / accounts payable | Different workflow; contractors capture expenses, not AP |
| In-app reporting / analytics | Bookkeeper has QBO for this; not our job |
| White-labeling for bookkeepers | Phase 2 if bookkeeper channel proves out |
| Android widget / iOS widget | Post-MVP polish |
| Vendor intelligence / spend analytics | Phase 2 feature; not needed for adoption |
| Direct bank/card transaction import | Completely different architecture; not MVP |

**The test for anything new**: Does it make a contractor on a job site capture a receipt faster? If not, it's not in the MVP.

### MVP Success Criteria

The MVP is successful and ready for AppSumo launch when:

1. **Technical gate**: A contractor can capture a receipt and assign it to a job in under 10 seconds, measured on a mid-range Android device (not just iPhone).
2. **OCR accuracy gate**: ≥90% of test receipts from Home Depot, Lowe's, and major tool rental chains auto-extract vendor, amount, and date correctly without manual correction.
3. **Digest delivery gate**: Weekly digest arrives to a test bookkeeper email at 5 PM Friday with correctly aggregated receipt data and job breakdown.
4. **Export gate**: CSV export opens in QuickBooks without import errors (job field maps to QBO Project).
5. **User validation gate**: 10 beta contractors (recruited from r/GeneralContractor or bookkeeper referrals) each capture ≥20 receipts over 4 weeks with ≥70% weekly retention.
6. **Bookkeeper validation gate**: 3 bookkeepers confirm the weekly digest format and CSV export structure meet their year-end requirements without modification.

**Go/No-Go for AppSumo submission**: All 6 gates must pass. Failure on OCR accuracy (gate 2) is a blocking issue — OCR is the core promise.

### Future Vision

**Phase 2 (Months 4–8): Team and Integration**

- **Multi-crew receipt submission**: Crew members can submit receipts to a contractor's account (contractor reviews and approves). Unlocks small-crew pricing ($39/month, up to 5 crew).
- **Direct QuickBooks OAuth sync**: Receipts sync to QBO Projects in near-real-time. Removes the CSV export step and becomes a daily retention driver.
- **AI job suggestion improvement**: Train on per-contractor vendor history; suggestion accuracy improves from 60% to 90%+ over time.
- **Xero integration**: Same export mapping for Xero (Canadian and Australian contractor markets).

**Phase 3 (Months 8–18): Platform and Moat**

- **Bookkeeper white-label dashboard**: Bookkeeper firms can brand the tool for their contractor clients, increasing retention and referral incentive.
- **Accounts payable capture**: Extend to vendor invoices, not just receipts. Contractor photographs an invoice; app extracts, routes to bookkeeper for approval.
- **Job profitability dashboard**: Simple view: job revenue (entered manually or from invoice) vs. captured expenses = gross margin per job. This is the "killer feature v2" — contractors have never seen this before.
- **Subcontractor payment tracking**: Basic tracking of payments to subs on each job, feeding into job profitability.
- **Tax prep export**: Full Schedule C or C-EZ ready PDF for sole proprietors at year-end.

**2–3 Year Vision**: The dominant back-office operating system for solo and small-crew contractors — not a full project management suite, but the receipts + invoices + job profitability layer that sits under QBO for the segment that Buildertrend is too expensive for and QuickBooks is too complex for. Distribution through bookkeepers means the product reaches every contractor who uses a bookkeeper without direct-to-contractor CAC.

**Expansion markets**: Canada (Xero-heavy; same contractor dynamics), Australia (sole trader tradies; same pattern), and UK (self-employed tradesmen = identical problem).

---

## Appendix: Competitive Positioning Summary

```
                    Field-First Mobile UX
                           │
   Expensify, Wave,        │         ★ SHOEBOX FIXER ★
   SparkReceipt            │         $49 LTD / $15/mo
   (no job costing)        │         Field-first + Job-coded
                           │         Bookkeeper digest
   ───────────────────────┼─────────────────────────────────
                           │
   Buildertrend,           │         Workyard
   Knowify                 │         ($56/mo+, GPS-primary)
   (desktop-first,         │
   $99–499/mo+)            │
                           │
                    Job-Cost Attribution
```

**The gap is real, documented, and currently unoccupied at the right price point.**

---

*Product Brief generated: 2026-10-30*
*Based on: shortlisted idea (85/105, Tier 1) + market research (2026-10-29)*
*Next step: Create PRD → `/bmad-bmm-create-prd`*

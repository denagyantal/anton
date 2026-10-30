---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/contractor-back-office-receipt-capture.md
  - _bmad-output/planning-artifacts/research/market-contractor-receipt-capture-research-2026-10-29.md
  - _bmad-output/planning-artifacts/brief-contractor-receipt-capture.md
workflowType: prd
date: '2026-10-30'
author: Root
classification:
  projectType: mobile_app_saas_b2b
  domain: smb_fintech_construction
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Shoebox Fixer (Contractor Receipt Capture)

**Author:** Root
**Date:** 2026-10-30
**Status:** Complete

---

## Executive Summary

Solo and small trade contractors lose 15–25% of project margins to untracked field expenses every year. The root cause is structural: contractors buy materials, rent tools, and fuel up throughout the workday but have no tool that matches their actual behavior — photograph receipt, assign to job, move on. Generic expense apps (Expensify, Wave) lack job attribution entirely. Construction platforms (Buildertrend $499/mo, Knowify $99/mo+) solve it but require multi-hour onboarding and carry price tags that exclude the 3.7M solo and sub-10-person operators.

**Shoebox Fixer** fills this gap: a mobile-first receipt capture app that lets a contractor photograph a receipt in under 10 seconds, assigns it to the right job via one tap, and automatically delivers organized weekly summaries to both the contractor and their bookkeeper every Friday. At tax time, the bookkeeper receives a QuickBooks-ready CSV organized by job — not a shoebox.

The product's distribution moat is B2B2C through bookkeeper communities. A single bookkeeper buys the $149 5-seat LTD, activates it for their contractor clients, and immediately saves 2–5 hours per client at year-end. Bookkeeper-to-bookkeeper word-of-mouth in professional communities (Keeper.app, QBO ProAdvisor groups, NACPB) compounds reach without paid acquisition costs.

### What Makes This Special

The $15–50/month tier for field-first, job-cost-aware receipt capture with bookkeeper-native output is completely unoccupied. Every competitor either lacks job attribution (Expensify, Wave, SparkReceipt) or charges $99–$499/month with desktop-first UX (Buildertrend, Knowify, Workyard). Shoebox Fixer occupies the intersection of three features no single tool under $99/month has combined: camera-first mobile UX, per-job expense attribution, and automated bookkeeper delivery.

The second differentiator is the $49 LTD price point. Solo contractors have a strong psychological resistance to recurring SaaS subscriptions. A one-time payment that recovers itself on the first forgotten $200 receipt removes adoption friction entirely.

### Project Classification

- **Project Type:** Mobile-first app (iOS + Android) with companion web dashboard; B2B2C SaaS pricing model
- **Domain:** SMB fintech / field services — financial data handling without regulated-banking complexity
- **Complexity:** Medium — OCR integration, multi-tenant architecture, email automation, QuickBooks export compatibility
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

A contractor is successful when:
- First receipt captured within 10 minutes of account creation
- ≥90% of receipts assigned to a named job (not "Uncategorized") within 7 days of activation
- First Friday digest received by both contractor and bookkeeper with correct per-job breakdown
- Tax-season feedback: bookkeeper confirms CSV import to QuickBooks completed without errors

A bookkeeper is successful when:
- Contractor clients capture ≥20 receipts per month on average
- Year-end reconstruction time per contractor drops from 2–5 hours to ≤30 minutes
- CSV export opens in QuickBooks with zero import errors
- Weekly digest open rate ≥50% (proxy for bookkeeper engagement and trust in the tool)

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| AppSumo launch | Accepted and live | Month 1–2 |
| LTD sales | 300–500 units | First 60 days |
| LTD gross revenue | $25K–$50K | First 60 days |
| Bookkeeper 5-seat LTD purchases | 50+ | Month 3–6 |
| G2/Capterra reviews | 50+ in "Construction Expense Tracking" | Month 3 |
| MRR conversion (LTD → $15/mo) | ≥12% of LTD cohort | Month 6 |
| MRR | $10K+ (~667 subscribers) | Month 12 |
| Bookkeepers in referral network | 200+ | Month 12 |
| Net Promoter Score (bookkeeper segment) | ≥50 | Month 12 |

### Technical Success

- OCR extraction accuracy ≥90% on receipts from Home Depot, Lowe's, and major tool rental chains (no manual correction required)
- Receipt capture-to-assignment flow completes in under 10 seconds on mid-range Android device
- Weekly digest emails deliver within 30 minutes of scheduled 5 PM Friday time, ≥99% on-time
- CSV export opens in QuickBooks without import errors (validated against QBO import spec)
- 10 beta contractors each capture ≥20 receipts over 4 weeks with ≥70% weekly retention before AppSumo launch

### Measurable Outcomes

**Activation gate (two-event sequence):** Contractor captures first receipt within 10 minutes of signup AND receives first Friday digest with bookkeeper copied. Users who complete both events retain at 90-day rates 3× higher than users who complete only one.

| KPI | Target |
|-----|--------|
| Contractor activation rate (first receipt ≤24 hours) | ≥50% |
| Job list created within 5 minutes of signup | ≥80% |
| Bookkeeper email connected during onboarding | ≥70% |
| Weekly active contractors (≥1 receipt/week) | ≥60% of activated |
| 90-day contractor retention | ≥70% |
| Monthly receipts per active contractor | ≥20 |
| Monthly churn rate (MRR) | ≤3% |
| CAC via AppSumo/Reddit channel | <$30 |
| CAC via bookkeeper referral channel | ~$0 |

---

## Product Scope

### MVP — Minimum Viable Product

**MVP philosophy:** Problem-solving MVP. The product proves its value the moment a contractor photographs a receipt and their bookkeeper receives the Friday digest with job-coded data. Everything in the MVP enables this two-event activation sequence. Nothing else ships until this works flawlessly.

**Core user journeys supported in MVP:**
- Solo contractor captures and assigns receipts from the field
- Bookkeeper receives and views weekly digest without logging in
- Bookkeeper exports QBO-compatible CSV at quarter-end

**Must-Have Capabilities:**
1. Mobile receipt capture via camera (iOS + Android)
2. OCR auto-extraction of vendor, amount, date
3. Manual correction of OCR errors
4. Job creation and tap-to-assign (most-recently-used sort)
5. AI job suggestion (vendor + time pattern — can be ignored)
6. "Uncategorized" receipt bucket
7. Bookkeeper email connection
8. Weekly Friday digest (contractor + bookkeeper)
9. CSV export (QuickBooks-compatible job field mapping)
10. Minimal web dashboard (receipt history, job filter, export)
11. Bookkeeper dashboard (contractor list, per-client export)
12. Onboarding flow (account → 3 jobs → bookkeeper email → first capture tutorial)
13. LTD and monthly subscription billing ($49 individual, $149 5-seat, $15/mo)

**MVP go/no-go gates (all must pass before AppSumo submission):**
1. Capture-to-assignment in ≤10 seconds on mid-range Android
2. OCR accuracy ≥90% on Home Depot, Lowe's, major tool rental chains
3. Friday digest delivers correctly to bookkeeper with job breakdown
4. CSV export imports into QuickBooks without errors
5. 10 beta contractors: ≥20 receipts each over 4 weeks, ≥70% weekly retention
6. 3 bookkeepers confirm digest format and CSV structure meet year-end requirements

### Growth Features (Post-MVP, Months 4–8)

- Multi-crew receipt submission — crew members submit to contractor account; contractor reviews
- Team plan pricing ($39/month, up to 5 crew members)
- Direct QuickBooks OAuth sync — near-real-time project sync, removes CSV manual step
- Xero integration (Canadian and Australian contractor markets)
- AI job suggestion improvement — per-contractor vendor history; target 90%+ suggestion accuracy
- Bookkeeper white-label dashboard (Phase 2 if bookkeeper channel proves out)
- Android/iOS home screen widget for one-tap camera launch

### Vision — Future (Months 8–18)

- Job profitability dashboard — simple view: entered revenue vs. captured expenses = gross margin per job
- Accounts payable capture — contractor photographs vendor invoice; routes to bookkeeper for approval
- Subcontractor payment tracking
- Tax prep export — Schedule C/C-EZ ready PDF for sole proprietors
- Expansion markets: Canada (Xero-heavy), Australia (sole trader tradies), UK (self-employed tradesmen)

---

## User Journeys

### Journey 1: Marcus — Solo HVAC Technician (Primary User, Happy Path)

Marcus, 38, runs solo HVAC in suburban Atlanta. Revenue ~$280K/year, 3–5 simultaneous jobs. His phone is his primary computer; he hasn't touched a laptop for work in three years. His bookkeeper Sandra has told him for the third year running that his shoebox of receipts is the most expensive hour she spends all February.

**Opening scene:** Marcus is in the parking lot of Johnstone Supply. He just bought $340 in refrigerant and fittings. He pulls out his phone, opens Shoebox Fixer (home screen shortcut he set up during onboarding), and taps the camera icon.

**Rising action:** The camera opens instantly. He photographs the receipt. Three seconds later: "Johnstone Supply · $340.18 · Oct 30." He sees his three active jobs listed — "Martinez renovation," "Perez HVAC replacement," "Chen new construction." He taps "Perez HVAC replacement." Done. He's in the truck and backing out before 30 seconds have passed.

**Climax:** Friday at 5:03 PM. Marcus gets an email: "Shoebox Fixer — Week of Oct 27. 14 receipts captured. $2,847 across 3 jobs: Perez ($1,340), Martinez ($890), Chen ($617)." Sandra gets the same email. She replies to Marcus: "This is exactly what I needed. Keep doing this."

**Resolution:** Marcus has never felt organized with his bookkeeper before. He keeps capturing. By February, Sandra tells him his books are already clean — she reconstructed nothing. His tax return captures $18,000 more in deductions than last year. He tells every contractor he knows.

**Journey requirements revealed:** Camera-first home screen entry point; sub-3-second OCR; tap-to-assign with MRU job sort; automated Friday digest to contractor + bookkeeper.

---

### Journey 2: Jenna — Small GC with 3-Person Crew (Primary User, Multi-Crew Edge Case)

Jenna, 44, manages residential remodels with 3 employees. Revenue ~$850K/year, 2–3 simultaneous jobs. Her husband does the books on weekends. Three people buying materials independently means receipts arrive from three sources, often crumpled in jacket pockets.

**Opening scene:** Jenna's crew member Dave buys $1,200 in lumber at Home Depot. He doesn't have the app — it's only on Jenna's phone in MVP. He texts her a photo of the receipt.

**Rising action (friction):** Jenna is on-site. She opens Shoebox Fixer, taps the photo library icon instead of camera, and selects the photo Dave texted her. OCR extracts "The Home Depot · $1,200.47 · Oct 30." She assigns it to "Garfield bathroom remodel." She makes a mental note to talk to her husband about getting crew members set up when the team plan launches.

**Climax:** Her husband reviews the Friday digest on Saturday morning: "Garfield remodel: $4,800 this week — we're tracking perfectly against the budget." For the first time, he can see mid-project spend without calling Jenna.

**Resolution:** Jenna is managing job costs proactively instead of reconstructing them at project close. The limitation (single-phone receipt entry) is a friction point she accepts for now in exchange for the organization value. She upgrades to the team plan the week it launches.

**Journey requirements revealed:** Photo library import as backup capture path; receipt history viewable by spouse/secondary user via web dashboard (read-only access for Phase 2); in-app upsell prompt for team plan at appropriate moment.

---

### Journey 3: Sandra — Independent Bookkeeper (Secondary User, Distribution Vector)

Sandra, 51, manages 18 clients in suburban Phoenix, 6 of them trade contractors. She uses QBO and Dext. She's not Shoebox Fixer's daily user — she's the catalyst who activates it for her contractor clients and the weekly digest recipient.

**Opening scene:** Sandra is scrolling the "Keeper Tax Community" Facebook group on a Tuesday evening. A fellow bookkeeper posts: "Set this up for my 5 contractor clients in October — my February is already looking 70% shorter. $149 one-time." Sandra clicks the link.

**Rising action (evaluation):** She reads the landing page in 4 minutes. Key questions: Does it sync with QBO? (CSV export, OAuth sync on roadmap.) Can I manage multiple clients? (Yes — bookkeeper dashboard.) What does it cost? ($149 for 5 seats.) She opens a new tab, checks her client list: 6 contractor clients, she needs the 5-seat plan for her top 5. She buys.

**Rising action (activation):** She logs into the bookkeeper dashboard. She sees 5 empty slots. She sends setup links to Marcus, two other HVAC guys, a plumber, and an electrician. All 5 create accounts that evening (she called them first). She configures her email as the digest recipient for all 5.

**Climax:** Week 2. Five Friday digests land in Sandra's inbox from five contractor clients. She opens Marcus's: organized, job-coded, scannable in 90 seconds. She texts three bookkeeper colleagues: "Bought this thing. My February is going to be fine. Here's the link."

**Resolution:** Sandra saves 20+ hours at year-end. She refers 3 colleagues who each buy within 2 weeks. She has 15 bookkeeper clients tell her she's "changed how they deal with contractors." The product markets itself through her professional network.

**Journey requirements revealed:** Bookkeeper dashboard with multi-contractor view; one-click seat activation with setup link; digest delivered to bookkeeper email without login; bookkeeper-to-bookkeeper referral mechanism (affiliate or simple share link).

---

### Journey 4: New Contractor — Onboarding and First Capture (Error/Recovery Path)

Tom, 52, a plumber referred by his bookkeeper. Not tech-savvy. Has a mid-range Android. Creates an account, skips the job setup ("I'll do it later"), tries to photograph his first receipt.

**Pain point:** App shows "Add a job first" prompt — he can't capture without at least one job. This is intentional (job-attributionless receipts are useless), but Tom is frustrated.

**Recovery:** The prompt is actionable: "Add Job" button inline. He types "Residential plumbing." Captures the receipt. OCR extracts it. He has no other jobs to assign it to, so the suggestion is automatic. Receipt saved.

**Follow-up friction:** Tom's bookkeeper email isn't connected. The Friday digest goes only to Tom. He doesn't open it. His bookkeeper doesn't know the tool is active.

**Recovery:** Week 3, Tom's bookkeeper sees an "activation incomplete" notification (bookkeeper portal flag: "Tom — bookkeeper email not connected"). She sends Tom a text. He connects her email from settings in 20 seconds.

**Journey requirements revealed:** Blocked first capture without ≥1 job (with inline Add Job CTA); bookkeeper portal shows activation completeness per client; settings entry point for bookkeeper email is prominent and fast; "Uncategorized" job available as escape valve if blocked state is too abrasive.

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|-------------|
| Camera-first entry, sub-3s OCR | Journey 1 (Marcus) |
| Photo library import fallback | Journey 2 (Jenna) |
| Weekly automated digest (contractor + bookkeeper) | Journey 1, 3 |
| Multi-seat bookkeeper dashboard with activation tracking | Journey 3, 4 |
| Inline job creation during onboarding | Journey 4 |
| Web dashboard read access for household bookkeeper | Journey 2 |
| Bookkeeper referral/share mechanism | Journey 3 |
| Settings: update bookkeeper email post-onboarding | Journey 4 |
| Team plan upsell prompt | Journey 2 |
| Blocked capture without job + recovery path | Journey 4 |

---

## Domain-Specific Requirements

This product handles contractor financial data (expense records, vendor information, amounts, job codes). It is not regulated like banking or healthcare, but it must meet the implicit trust requirements of tax-sensitive data.

### Data Retention and Tax Compliance

- Receipt records (including original images) must be retained for a minimum of 7 years to support IRS audit requirements for contractor expense deductions
- Export data must accurately represent original captured amounts with no rounding or transformation
- System must preserve original receipt images as-captured; no lossy compression that would impair IRS audit use

### Financial Data Security

- No PCI-DSS requirements (no payment card data is captured or processed)
- Expense data and receipt images constitute personally identifiable financial information; treat as sensitive under reasonable privacy standards
- Multi-tenant isolation: bookkeeper data for Client A must not be accessible when accessing Client B's account

### OCR Accuracy Standard

- Tax deductions depend on accurate amount extraction; OCR errors that misrepresent amounts create legal risk for contractors
- Minimum ≥90% extraction accuracy for vendor name, amount, and date on standard US retail receipts
- Manual correction UI must be present and easily accessible; system must never prevent user correction of OCR output

### Bookkeeper Role Constraints

- Bookkeepers may view and export contractor data but must not be able to modify, delete, or add receipts on behalf of contractors (audit integrity)
- Bookkeeper access terminates when contractor revokes the connection

---

## Innovation Analysis

### Detected Innovation Areas

**1. Bookkeeper B2B2C Distribution Model**

The go-to-market is structurally innovative for a consumer-facing productivity tool. Rather than selling to contractors (fragmented, low-LTV buyers), the product sells to bookkeepers (concentrated, high-influence buyers) who then activate it for their contractor clients. A single $149 bookkeeper LTD purchase activates 3–5 contractor users. The distribution costs collapse: bookkeepers are concentrated in professional communities (Facebook groups, QBO ProAdvisor, NACPB), have immediate ROI ($149 vs. 20+ hours of year-end reconstruction), and have strong referral incentives within their professional peer networks.

This is not a common pattern in SMB SaaS. Most tools market to the end user. Shoebox Fixer markets to the end user's service provider who then mandates or recommends adoption.

**2. Job-Cost Attribution at Sub-$50 Price Point**

The market gap is validated and structural: no tool below $99/month does job-cost-aware receipt capture with bookkeeper output. The innovation is not technical — OCR and job attribution are known patterns — but in the combination and pricing. The insight is that Buildertrend's $499/month price is not just "expensive" for solo contractors; it's categorically inaccessible (different buyer category entirely). The $49 LTD creates a completely new market segment.

### Market Context

- SparkReceipt sold out on AppSumo: validates demand for receipt capture at LTD price points, even without job coding
- Workyard at $56/month minimum is GPS-first, receipts-secondary: validates that contractors pay for field tools but Workyard doesn't solve the bookkeeper problem
- The IH SaaS 2025 data confirms: sub-$100 SMB tools with single-workflow focus and LTD launch on AppSumo routinely reach $10K MRR within 12 months if bookkeeper/accountant channel is activated

### Validation Approach

- Beta with 10 contractors (recruited via r/GeneralContractor, r/HVAC) before AppSumo launch; require ≥20 receipts/4 weeks per contractor as validation gate
- Beta with 3 independent bookkeepers; require written confirmation that digest format and CSV export meet year-end workflow requirements
- AppSumo acceptance itself is a market validation signal — AppSumo reviews tools before listing

### Risk Mitigation

- **OCR accuracy risk:** If Google Vision or AWS Textract accuracy falls below 90% threshold on contractor receipts, fallback is hybrid OCR + human review queue (low-cost labor for review queue is viable at launch scale)
- **Adoption risk (contractor tech aversion):** If onboarding drop-off is >50% at job creation step, simplify to single-job default and allow rename later; lower the friction floor
- **Buildertrend risk:** Buildertrend adding a mobile-first receipt snap feature would directly compete; mitigation is to launch fast, capture reviews, and build bookkeeper distribution moat before this is possible

---

## SaaS + Mobile Specific Requirements

### Platform Requirements

**Mobile (Primary):**
- iOS 15+ and Android 8+ (covers 95%+ of target demographic's device age range)
- Cross-platform framework acceptable (React Native or Flutter) to enable single codebase for iOS + Android
- Offline-capable receipt capture: photo + OCR queued for upload when connectivity restores
- Camera permission required; photo library access optional (for photo-library import path)
- No background location, no contacts access, no push notification beyond weekly digest reminder (respect minimal permission footprint)
- App size target: <30MB installed (field workers on limited storage mid-range Android)

**Web Dashboard (Secondary):**
- Browser-based; no desktop app required
- Minimum supported browsers: Chrome 90+, Safari 14+, Firefox 88+, Edge 90+
- Responsive design for tablet (bookkeeper may access from iPad); not required for mobile web

### Multi-Tenancy Architecture

- Contractor account is the base tenant unit
- Bookkeeper account is a privileged viewer/exporter across multiple contractor tenants
- 5-seat bookkeeper LTD creates 5 contractor "seats" owned/managed by bookkeeper; each seat is a separate contractor tenant
- Data isolation: query-level tenant ID enforcement; no cross-tenant data in API responses

### RBAC Matrix

| Role | Capture Receipt | Manage Jobs | View Receipts | Export CSV | Manage Account | Add/Remove Users |
|------|----------------|-------------|---------------|------------|----------------|-----------------|
| Contractor | ✅ | ✅ | ✅ (own) | ✅ (own) | ✅ | ✅ (bookkeeper email) |
| Bookkeeper | ❌ | ❌ | ✅ (clients) | ✅ (clients) | ❌ | ❌ |
| Platform Admin | — | — | ✅ (all) | ✅ (all) | ✅ (all) | ✅ |

### Email Automation

- Weekly digest triggered every Friday at 5 PM user local time (derived from account timezone set at signup, defaulting to device timezone)
- Digest delivery via transactional email provider (SendGrid or equivalent) with bounce/open tracking
- Email content: plain HTML table (not PDF); mobile-readable
- Unsubscribe from digest available without deleting account

### Billing and Pricing

- LTD $49 individual, LTD $149 5-seat bookkeeper plan — one-time payment, no expiry
- Monthly $15/month individual recurring — for post-AppSumo acquisition track
- Monthly $39/month team plan (Phase 2, up to 5 crew) — deferred post-MVP
- Payment processing via Stripe; no financial data stored server-side

### Technical Architecture Considerations

- OCR provider: Google Vision API (primary) or AWS Textract (fallback/comparison); evaluate on accuracy + cost per call at launch scale
- Image storage: cloud object storage (S3 or GCS) with CDN for dashboard image preview; original image always retained
- Job suggestion engine: initial implementation is rule-based (vendor name match + time-of-day heuristic); Phase 2 upgrades to per-contractor ML model
- Notification pipeline: weekly cron job triggers digest generation and delivery per contractor account

---

## Functional Requirements

### Receipt Capture

- FR1: Contractor can photograph a receipt using the device camera from the app home screen in one tap
- FR2: System auto-extracts vendor name, amount, and date from receipt photo via OCR within 3 seconds
- FR3: Contractor can manually correct any OCR-extracted field before saving
- FR4: System stores the original receipt photo in cloud storage and retains it for a minimum of 7 years
- FR5: Contractor can import a receipt photo from device photo library as an alternative to live camera
- FR6: System queues receipt captures made offline and uploads automatically when connectivity restores

### Job Management

- FR7: Contractor can create a named job
- FR8: Contractor can rename an active job
- FR9: Contractor can archive a job (hides from active list; receipts preserved)
- FR10: Contractor can assign a receipt to a job via tap selection; job list sorted by most-recently-used
- FR11: System suggests a job assignment for each receipt based on vendor name and time-of-day patterns; suggestion is dismissible with one tap
- FR12: System maintains an "Uncategorized" bucket for receipts not yet assigned to a job
- FR13: Contractor can reassign a receipt from one job to another (including from Uncategorized)

### Bookkeeper Connection

- FR14: Contractor can enter a bookkeeper email address to connect them as a digest recipient
- FR15: Connected bookkeeper receives the weekly digest by email without requiring an account or login
- FR16: Bookkeeper can create a free dashboard account to view receipts for all their connected contractors
- FR17: Bookkeeper dashboard lists all connected contractor clients with activation status per client
- FR18: Contractor can update or remove the connected bookkeeper email from account settings

### Weekly Digest

- FR19: System sends a weekly digest email to the contractor every Friday at 5 PM in the contractor's account timezone
- FR20: Weekly digest email is simultaneously sent to the contractor's connected bookkeeper email address
- FR21: Weekly digest displays total receipts captured, total amount, and per-job breakdown for the week
- FR22: Weekly digest includes a link that allows the bookkeeper to view receipt images via web without logging in (time-limited link)

### Export

- FR23: Contractor can export all receipts as a CSV file with columns: date, vendor, amount, job name, job code
- FR24: CSV job field maps to QuickBooks Project/Class for direct import without column remapping
- FR25: Bookkeeper can export a CSV for any individual contractor client from the bookkeeper dashboard
- FR26: Export can be filtered by date range (start date / end date)

### Web Dashboard

- FR27: Contractor can view their complete receipt history on the web dashboard with filtering by job
- FR28: Contractor can correct receipt fields (vendor, amount, date, job) from the web dashboard
- FR29: Bookkeeper can view an aggregate view of all connected contractor clients on their dashboard
- FR30: Bookkeeper can drill into a specific contractor's receipt list with job filter and date range

### Onboarding

- FR31: New user creates an account with email and password (no social login required for MVP)
- FR32: Onboarding prompts contractor to add at least 3 job names before allowing first receipt capture
- FR33: Onboarding prompts contractor to add bookkeeper email (skippable with one tap; reminder surfaced after first digest)
- FR34: First receipt capture includes an inline tutorial overlay guiding the photo → OCR → assign flow
- FR35: Entire onboarding flow (account creation through first capture) completes in under 3 minutes

### Account Management and Billing

- FR36: Contractor account supports LTD (individual $49), LTD bookkeeper 5-seat ($149), and monthly ($15/month) pricing tiers
- FR37: Bookkeeper 5-seat LTD plan allows bookkeeper to generate and send setup links to up to 5 contractor clients
- FR38: Each setup link creates a contractor account pre-linked to the bookkeeper's digest email
- FR39: Platform admin can manage user accounts, view all tenants, and access support export tools

---

## Non-Functional Requirements

### Performance

- NFR1: Receipt capture-to-assignment complete flow (photo → OCR → job tap → save confirmation) completes in under 10 seconds on a mid-range Android device (2020 or newer, Snapdragon 665 or equivalent) under normal network conditions
- NFR2: OCR extraction returns results within 3 seconds of photo submission for 95th percentile of requests under load
- NFR3: Web dashboard receipt history view loads within 2 seconds for contractors with up to 500 receipts, as measured by Time to Interactive
- NFR4: Weekly digest emails are generated and submitted to email delivery provider within 30 minutes of 5 PM Friday trigger time, across all contractor timezones

### Security

- NFR5: All receipt images and financial data encrypted at rest (AES-256) and in transit (TLS 1.2+ minimum)
- NFR6: User sessions expire after 30 days of inactivity; re-authentication required
- NFR7: Bookkeeper API access enforces contractor-scoped queries; no query can return receipts belonging to a contractor not connected to that bookkeeper
- NFR8: Receipt records and images retained for minimum 7 years from capture date to support IRS audit requirements
- NFR9: No receipt image or financial data from one contractor tenant is accessible to another contractor tenant at any API layer

### Scalability

- NFR10: System supports up to 10,000 concurrent active contractors processing receipts simultaneously without OCR queue delay exceeding 5 seconds above the NFR2 baseline
- NFR11: OCR processing queue handles burst submission of 100 concurrent receipt uploads within a 60-second window without queue depth exceeding 200 items

### Integration

- NFR12: OCR provider (Google Vision API primary / AWS Textract fallback) achieves ≥90% correct extraction of vendor name, amount, and date on a validation set of 100 standard US retail receipts (Home Depot, Lowe's, Sunbelt Rentals, Fastenal, AutoZone) with no manual correction
- NFR13: CSV export format validated against QuickBooks Desktop and QBO import spec; zero import errors on a test import of 100-row export file with all job fields populated

### Reliability

- NFR14: System maintains 99.5% uptime during business hours (6 AM – 10 PM, Monday–Saturday, US timezones), as measured by uptime monitoring
- NFR15: Weekly digest delivery achieves ≥99% on-time delivery rate (within 30-minute window of 5 PM Friday trigger) over a rolling 4-week period, as measured by email provider delivery logs
- NFR16: Receipt capture offline queue persists across app restarts; no captured receipt is lost due to connectivity loss

---

*PRD generated: 2026-10-30*
*Based on: shortlisted idea (85/105, Tier 1) + market research (2026-10-29) + product brief (2026-10-30)*
*Next step: Architecture → `/bmad-bmm-create-architecture`*

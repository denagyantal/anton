---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/sign-shop-management-shopvox-price-squeeze.md
  - _bmad-output/planning-artifacts/market-research-sign-shop-management.md
workflowType: product-brief
lastStep: 6
project_name: sign-shop-management
user_name: Root
date: 2026-06-23
author: Root
---

# Product Brief: Sign Shop Management (ShopVOX Price Squeeze)

---

## Executive Summary

**SignFlow** is a sign-shop-specific job management platform built to capture the active migration wave triggered by ShopVOX's 70%+ price increase following its August 2025 acquisition by PE firm Fullsteam. The platform delivers the one feature sign shops actually need — a substrate pricing calculator — wrapped in a production workflow that speaks the language of the shop floor: design → proof approval → print → cut → install.

The core value proposition is deceptively simple: all the sign-specific workflow ShopVOX users are paying $366+/month for, at $79–$129/month, owned by an independent team that won't get acquired by private equity. This is not a horizontal project management tool awkwardly adapted for sign shops. It is purpose-built for the 41,000+ US sign shops that live and die by accurate material pricing and multi-step job tracking.

**The trigger event is live.** ShopVOX's price hike is documented across Signs101.com threads, Capterra reviews, and G2 — not speculative. The window for capturing switching customers is 12–18 months from now before shops either resign themselves to paying or find an alternative they can live with. This product needs to be in front of Signs101.com members within 90 days.

**Revenue target:** $10K MRR at Month 12 via 100–130 paying customers. Achievable at well under 1% penetration of the 8,000–12,000 shop software-buying segment. LTD at $99–$149 positions the product for Signs101-first launch and an AppSumo amplification layer at Month 6.

---

## Core Vision

### Problem Statement

Small sign shops (2–20 employees, $300K–$2M revenue) operate complex per-order production workflows where every job has unique materials, dimensions, and multi-step production requirements. The dominant software for this niche — ShopVOX — was acquired by Fullsteam Operations (a PE roll-up) in August 2025 and immediately raised prices 70%+, from approximately $215/month to $366+/month for a typical 5-user shop, with no meaningful new functionality delivered.

The practical daily problem is this: a sign shop estimator building a quote for a 4×8 ACM cabinet sign must manually calculate substrate cost (sheet yield, saw waste, material cost per sheet), vinyl coverage (sq ft × $/sq ft + 15% bleed), cut time, and install time — across dozens of material types — before they can even generate a quote number. Every shop does this in a spreadsheet that lives in one person's head. One pricing error on a $3,000 job costs more than a month of software subscription. The tool that solves this at a fair price wins the shop for years.

### Problem Impact

The substrate pricing problem costs sign shops in three direct ways:

1. **Under-quoting** — estimators who don't account for bleed, waste factor, and minimum material yields routinely lose money on jobs. A 10% material underestimate on a $5,000 job is $500 gone. Shops report this happening multiple times per month before they build accurate pricing discipline.

2. **Time drain** — building a complex quote takes 30–60 minutes of manual math for an experienced estimator. For a shop running 20 jobs per week, that's 10–20 hours of estimator time that could be recovered with a proper calculator.

3. **Knowledge concentration** — pricing knowledge lives in one person's spreadsheet or head. When that person leaves, the shop loses its institutional pricing memory. A software-based substrate library survives employee turnover.

Beyond pricing, sign shops lose time and credibility to proof approval chaos (email chains with no clear status), missed permit requirements for exterior sign jobs (fines, installation delays), and installation crews that can't see job status in the field.

The business impact of the ShopVOX price hike is also direct: a 5-user shop moving from $215/month to $395/month faces $2,160/year in additional subscription cost with no new value. That is a real affordability breaking point for a shop with $400K annual revenue.

### Why Existing Solutions Fall Short

The competitive landscape has a clear gap and no product currently occupies the "sign-specific, mid-market, affordable" position:

| Product | Why It Falls Short |
|---|---|
| **ShopVOX** | PE-acquired; 70%+ price hike active now; "too many clicks"; declining support; $395/mo for 5 users |
| **Printavo** | Built for screen printing/apparel — lacks substrate calculator, permit tracking, exterior signage workflow; Signs101 consensus: "you have to force it to think like a sign shop" |
| **SignTracker** | Now part of Inktavo (same PE roll-up risk); limited features; no mobile installer app; limited substrate pricing |
| **SquareCoil** | Affordable but shallow — substrate calculator lacks material-type depth; limited reporting; small company with uncertain roadmap |
| **Work My Jobs** | Cheapest option but no mobile installer app, no substrate calculator, limited integrations |
| **Printlogic** | Independently owned (a trust signal) but less sign-specific and less mature than ShopVOX |
| **CoreBridge/Cyrious** | Enterprise complexity ($189–$329/mo, or $10K upfront); requires IT staff; not suited for small shops |

The core gap: no product under $200/month combines a genuine sign-specific substrate pricing calculator with sign-stage job tracking, customer proof portal, permit tracking, and a mobile field installer app. That combination is SignFlow's entire reason to exist.

### Proposed Solution

SignFlow is a cloud-based job management platform for small-to-mid sign shops with four pillars:

1. **Substrate Pricing Calculator** — select material type (vinyl, ACM, coroplast, polycarbonate, foam board, banner, aluminum, vehicle wrap film), input job dimensions, and instantly get a costed material estimate with configurable bleed factor, waste factor, and minimum quantity rules. Pre-built templates for common materials; fully customizable. Eliminates the spreadsheet entirely.

2. **Sign-Specific Production Board** — kanban-style job board with sign industry stages: Quote → Design → Proof Sent → Proof Approved → In Production → Cut/Fabrication → Installer Scheduled → Installed → Invoiced. Not generic "To Do / In Progress / Done."

3. **Customer Proof Portal** — a dedicated, brandable link where clients view and approve proofs digitally. Status updates automatically when a client approves. Eliminates the "did you see my email?" problem.

4. **ShopVOX CSV Migration Tool** — one-step import of existing customer data, job history, and substrate pricing from ShopVOX exports. Removes the single biggest switching barrier.

Supporting this core: permit flag on exterior sign jobs, mobile field installer app (photo upload, job check-off, GPS sync), and QuickBooks integration for invoice handoff.

### Key Differentiators

1. **The best substrate pricing calculator in the sub-$200/month market** — not a field that accepts a price, but a full material-type library with configurable bleed, waste, and minimum yield rules. This is the wedge feature that wins the demo.

2. **Sign-specific job stages** that match how shops actually talk about their work — design, proof, cut, install — not generic project management vocabulary.

3. **Independent ownership** — explicitly not PE-owned, explicitly committed to transparent pricing with no escalation clauses. This is the trust signal that burned ShopVOX customers need to hear. Price locks communicated upfront.

4. **ShopVOX migration tool** — free, self-serve CSV import that makes switching cost-free in terms of effort. Every ShopVOX refugee is a potential customer; removing migration friction converts them.

5. **Signs101.com-first launch** — the product will be visible and credible in the industry's primary community before launch, not as a vendor pushing ads but as a tool that community members helped beta test.

---

## Target Users

### Primary Users

#### Persona 1: Marcus, the Estimator-Owner (Primary Buyer)

**Background:** Marcus owns a 6-person sign shop in suburban Atlanta. He started as a vinyl cutter 18 years ago and now runs the business — which means he's also the estimator, the sales rep, and the production manager. Revenue is around $650K/year. He's been on ShopVOX for 4 years and just got the renewal notice showing his bill going from $219/month to $379/month.

**Day in the life:** Marcus starts every morning reviewing the production board — what's due today, what's waiting on proof approval, what's waiting on permit clearance for a new exterior cabinet sign. He builds 8–12 quotes per week, and the complex ones (ACM cabinet signs, vehicle wraps, trade show displays) take him 45 minutes each because he's juggling his substrate cost spreadsheet, his markup formula in his head, and his quoting template in Word.

**Current workarounds:** A Google Sheet with manually entered material costs that his shop manager updates whenever they get a new supplier invoice. No mobile access for his installation crew (they text him photos). Proof approvals via email chains that clients routinely ignore for days.

**Success vision:** Marcus gets a new inquiry for a storefront package — window vinyl, an ACM monument sign, and a banner. He opens SignFlow, selects the materials, inputs dimensions, and has a costed quote in 8 minutes. The client gets a proof portal link, approves digitally that afternoon, and Marcus sees it flip on the production board without checking email. His installer checks in the finished job on his phone, photos attach automatically to the customer record. Marcus invoices in two clicks and it syncs to QuickBooks.

**Triggers to switch:** The ShopVOX price increase was the breaking point. He's actively reading Signs101 threads about alternatives right now.

---

#### Persona 2: Janelle, the Production Manager (Primary Day User)

**Background:** Janelle runs production at a 12-person shop in Phoenix — her boss (the owner) handles sales and customer relationships. She is responsible for making sure jobs move through production on time. She's been frustrated with ShopVOX's "too many clicks" complaint for two years; she processes 30–50 job status updates per day.

**Day in the life:** Janelle's day is the production board. She's constantly checking what's in proof, what's been approved and needs to go to the printer, what's in cut, what's scheduled for install tomorrow. She manages the install crew's daily schedule manually (a whiteboard). When a job gets held up because a permit hasn't been issued, she has no way to flag that in the system — it just sits in "In Production" and she has to remember.

**Current pain:** ShopVOX's proof approval flow requires clients to log into a portal they don't remember. Most clients email back instead, and then Janelle has to manually update the job status. The permit flag is a sticky note on her monitor.

**Success vision:** Janelle opens SignFlow's production board each morning and sees every job's real status at a glance. Jobs needing a permit show a flag icon. Proof-pending jobs show "awaiting client" without her needing to chase emails. When proof approval comes in through the portal, the job automatically advances. Her installer crew checks in on their phones; she can see GPS confirmation without calling them.

---

### Secondary Users

#### Persona 3: Tyler, the Field Installer (Mobile App User)

**Background:** Tyler does installations for the same Phoenix shop Janelle manages. He's on the road 8 hours a day — he has the jobs list on a paper printout his boss texts him each morning. When he finishes an install, he takes a photo on his phone and texts it to Janelle, who manually adds it to the customer record.

**Pain:** No visibility into job details in the field (dimensions, install notes, hardware required) without calling back to the shop. No easy way to document completion.

**Success vision:** Tyler opens the SignFlow mobile app each morning to see his install queue with job details, site address, customer contact, and special notes. When he finishes, he takes photos in-app; they sync automatically to the job record. Janelle sees the job flip to "Installed" without a phone call.

---

#### Persona 4: The Client (Customer Portal User)

**Background:** A marketing manager at a local restaurant chain who hired the sign shop for a complete rebrand — new exterior signage, window graphics, and a menu board. She's dealing with 6 vendors at once and doesn't remember which portal belongs to which vendor.

**Pain:** Email proof approval chains are confusing. She's not sure which version of a design is the final one. Response delays on her end hold up shop production but she doesn't understand the urgency.

**Success vision:** She receives a clear link, opens a professionally branded proof page that shows her design, and can approve or request changes with one click. She receives a confirmation email. The shop owner sees it instantly.

---

### User Journey

#### The ShopVOX Refugee Discovery Journey

1. **Trigger:** Marcus receives ShopVOX renewal notification — new price is 73% higher.

2. **Forum Research:** He searches Signs101 for "ShopVOX alternative" — finds an active thread. A respected Signs101 member (500+ posts) mentions SignFlow, says they're on the beta and it handles ACM pricing properly.

3. **Website Visit:** Marcus visits SignFlow's site. The hero headline reads: "Sign shop management at half the ShopVOX price. Import your ShopVOX data in 2 minutes." He sees transparent pricing on the homepage.

4. **Free Trial:** He starts a free trial — enters his 3 most common substrate types (vinyl, ACM, coroplast) and prices. Builds a quote for a real pending job in 12 minutes. It works.

5. **Peer Validation:** He asks in the Signs101 thread if anyone else has tried it. Two more members confirm they're on the beta; one says "substrate calculator is actually better than ShopVOX's."

6. **Migration:** Marcus downloads his ShopVOX customer export, uploads it to SignFlow's migration tool. His customer list appears in 90 seconds.

7. **Purchase:** He subscribes at $99/month (Small Shop, 5 users). His ShopVOX renewal cancels.

8. **Activation:** In week 1, Janelle sets up the production board stages to match how they actually work. In week 2, she stops using the whiteboard for permit tracking. By week 4, the installation crew is using the mobile app.

9. **Advocacy:** In month 2, Marcus posts on Signs101 that he switched. The thread gets 30 replies. Several ask for a referral link.

---

## Success Metrics

### User Success Metrics

The product is working when:

- **Estimators build a complex quote in under 15 minutes** — vs. the current 30–60 minutes. This is the core time-savings promise. Track via in-app quote creation time.

- **Proof approval cycle time drops below 24 hours** — shops report proof approval delays of 2–5 days when using email. The client portal should drive same-day approvals for most jobs. Track average time from proof sent to proof approved.

- **Zero jobs missed due to permit status** — the permit flag should mean every exterior sign job that needs a permit is flagged and tracked. Track permit-flagged job completion rate vs. on-time delivery.

- **Installation crew check-in rate above 90%** — if the mobile app is adopted, job completion documentation becomes automatic. Track % of installed jobs with photo documentation attached.

- **Users return daily** — daily active use of the production board is the signal that SignFlow has replaced their existing workflow, not supplemented it. Target 80%+ of active accounts log in 4+ days/week.

### Business Objectives

**Month 3:** 30 paying customers, $2,500–$3,000 MRR. Prove the Signs101 launch channel works.

**Month 6:** 60 paying customers, $5,500–$6,500 MRR. ShopVOX migration tool drives organic word-of-mouth. "ShopVOX alternative" SEO content ranking on Page 1.

**Month 12:** 100–130 paying customers, $10,000–$13,000 MRR. AppSumo LTD launched; ISA Sign Expo 2026 attended. Monthly churn below 2%.

**Month 18:** 200–250 paying customers, $20,000–$25,000 MRR. Mobile installer app live. QuickBooks native integration complete. NPS above 50.

**Year 2:** $30,000+ MRR. Explore ISA partnership. Evaluate franchisor channel (Fastsigns, Signarama franchisees).

### Key Performance Indicators

| KPI | Target | Timeframe | Measurement |
|---|---|---|---|
| Paying customers | 30 → 100 → 250 | M3 → M12 → M24 | Stripe MRR dashboard |
| MRR | $3K → $10K → $25K | M3 → M12 → M24 | Stripe |
| Monthly churn rate | <3% initially; <2% by M12 | Ongoing | Churned MRR / prior MRR |
| Trial-to-paid conversion | >20% | Ongoing | Signups vs. paid conversions |
| Time-to-first-quote | <30 min for new trial users | Activation | In-app event tracking |
| Quote creation time | <15 min avg for paying users | Engagement | In-app timing |
| Signs101 forum referrals | 10+ per month | M3+ | UTM tracking on trial signups |
| "ShopVOX alternative" SEO rank | Page 1, position 1–5 | M6 | SEO tool |
| Net Promoter Score | >40 by M6; >50 by M12 | Quarterly | In-app NPS survey |
| Daily active accounts | 80%+ of paying accounts | Ongoing | Session logs |
| Proof approval cycle time | <24 hrs avg | Ongoing | In-app event tracking |
| ShopVOX migrations completed | 20+ in first 3 months | M3 | Migration tool usage |

---

## MVP Scope

### Core Features

The MVP covers the essential wedge: the features that win the demo, solve the migration problem, and create enough daily stickiness to retain.

**1. Substrate Pricing Calculator**
- Material library with configurable types: vinyl (cast, calendared), ACM, coroplast, polycarbonate, foam board, aluminum sheet, banner material, vehicle wrap film
- Per-material inputs: unit cost ($/sq ft or $/sheet), standard bleed %, waste factor %, minimum quantity rules
- Quote builder: input job dimensions → auto-calculate material cost → add labor time estimates → produce line-item quote total
- Save quotes as templates for repeat job types
- PDF quote export with line items and notes (fixing ShopVOX's documented export gap)

**2. Production Board with Sign-Specific Stages**
- Kanban board with configurable lanes: Quote → Design → Proof Sent → Proof Approved → In Production → Cut/Fab → Install Scheduled → Installed → Invoiced
- Job cards show: customer name, job type, due date, assigned staff, permit flag (if exterior)
- Drag-and-drop stage progression
- Filter/sort by due date, stage, assigned staff, permit status
- Job notes and file attachments per job

**3. Customer Proof Portal**
- Shareable link per job (no client account/password required)
- Client views design file, can approve or request changes with a comment
- Approval triggers automatic job stage advancement
- Shop receives real-time notification on approval or change request
- Branded with shop name/logo

**4. ShopVOX CSV Migration Tool**
- Upload ShopVOX customer export CSV → map fields → import customer list and contact details
- Upload ShopVOX job export → import open and historical jobs into production board
- One-time operation; import preview with error handling before commit
- Free access even during free trial (make migration risk-free)

**5. Permit Flag for Exterior Sign Jobs**
- Checkbox on job creation: "Exterior sign — permit required"
- Permit status tracking: Not Started / Applied / Issued / Final Inspection
- Permit number field
- Flagged jobs visible on production board with a distinct icon
- Permit status included in job detail view

**6. Basic Invoicing with QuickBooks Sync**
- Generate invoice from completed job (pulls line items from quote)
- Send invoice by email with PDF attachment
- Mark invoice as paid manually
- QuickBooks Online export (push invoice to QBO as draft for review)
- Note: Full QuickBooks native sync is Phase 2; this is one-way export sufficient for MVP

**7. Mobile-Responsive Job View (MVP) / Installer App (Phase 2)**
- MVP: Mobile-responsive web view of assigned jobs — installers can check job details, notes, site address
- MVP: Photo upload from phone attached to job record (via mobile browser)
- Phase 2: Native iOS/Android app with GPS check-in, offline mode

**8. Multi-User Access and Roles**
- Owner/Admin: full access including billing
- Staff: production board access, job creation, no billing
- Installer: view assigned jobs, photo upload, status update only
- Up to 5 users on Small Shop plan; unlimited on Large Shop plan

### Out of Scope for MVP

These features are explicitly deferred. They belong in Phase 2 or Phase 3 and should not creep into the MVP build:

- **Native mobile app** (iOS/Android) — mobile-responsive web view is sufficient for MVP
- **Full QuickBooks/Xero bidirectional sync** — one-way export is sufficient to avoid invoice re-entry
- **Inventory/material management** — tracking stock levels, reorder alerts, supplier invoices
- **Vehicle wrap yield optimizer** — specific material layout calculation tool for wraps
- **Multi-location reporting** — consolidated dashboard across locations for franchise/multi-site shops
- **Online storefront / e-commerce** — Ordant's territory; not the wedge use case
- **AI-assisted quoting** (photo → instant estimate) — compelling future feature but not MVP
- **Subcontractor scheduling** — managing third-party install crews with external logins
- **Permit database integration** — auto-lookup of city permit requirements by address
- **Automated SMS/email job status updates to clients** — the proof portal covers the critical customer touchpoint for MVP

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **30 paying customers within 90 days of launch** — proves Signs101 channel works and product-market fit is real at the top of the funnel.

2. **Less than 20% of customers cancel in their first 60 days** — the substrate calculator and production board have replaced their previous workflow (spreadsheet or ShopVOX).

3. **At least 15 documented ShopVOX migrations completed** — proves the migration tool removes the switching barrier.

4. **NPS of 35+ from first 20 paying customers** — shops are getting real value, not just tolerating the product.

5. **At least 3 organic Signs101 posts mentioning the product positively** — word-of-mouth has started without the founder doing all the talking.

If these criteria are met at Month 3, the decision is to invest in Phase 2 features (native app, full QuickBooks sync, advanced reporting). If not met, the priority is user research to understand where the product is failing the activation journey.

### Future Vision

**Phase 2 (Months 6–12):**
- Native iOS/Android installer app with offline mode, GPS check-in, push notifications
- Full QuickBooks/Xero bidirectional sync
- Advanced substrate pricing: supplier price list import (auto-update material costs when supplier invoices arrive)
- Vehicle wrap yield calculator (roll width, vehicle template, minimize waste)
- Multi-location support with consolidated reporting

**Phase 3 (Year 2):**
- AI-assisted quoting: upload a photo or architect drawing → auto-detect sign dimensions → pre-populate quote
- Permit database integration: input install address → show city permit requirements, fee schedule, typical turnaround
- Franchisor channel: white-label or franchise-specific pricing module for Fastsigns/Signarama franchisees
- ISA Sign Expo integration / ISA member discount program
- B2B repeat order portal: large clients (real estate companies, retail chains) can submit repeat orders directly into the production board

**Long-term platform vision:**
SignFlow becomes the operating system for the modern small sign shop — from customer inquiry through material purchase, production, installation, and invoicing — with AI tools that reduce estimating from minutes to seconds and material waste from 15% to 8%. The goal at Year 3 is 500+ shops and $50K+ MRR, a profitable, independently-owned business serving a niche the VC world ignores.

---

## Appendix: Go-to-Market Plan Summary

### Launch Sequence

| Week | Action |
|---|---|
| 1–2 | Register Signs101 account; begin authentic community participation in software alternatives threads |
| 2–3 | Publish "ShopVOX 70% price hike: what sign shops should do now" SEO content |
| 3–8 | MVP development sprint (substrate calculator + job board + proof portal + migration tool) |
| 9 | Private beta: offer 15 free accounts to Signs101 members who have posted about switching |
| 12 | Public launch: Signs101 announcement + trial signup page live |
| 16 | First paid Signs101 sponsorship; Signs of the Times press pitch |
| 24 | AppSumo LTD submission; ISA Sign Expo 2026 booth registration |

### Pricing

| Plan | Price | Users | Notes |
|---|---|---|---|
| Solo Shop | $69/mo | 1 user | Solo estimator/owner |
| Small Shop | $99/mo | Up to 5 | Most common |
| Large Shop | $129/mo | Unlimited | Multi-location or large teams |
| LTD — Single Location | $99 one-time | Up to 5 | Signs101/Facebook beta launch |
| LTD — Multi-Location | $149 one-time | Unlimited | AppSumo amplification |

### Top 3 Go-to-Market Risks and Mitigations

1. **ShopVOX price reversal:** Under PE ownership this is unlikely, but possible. Mitigation: the substrate calculator's depth creates value independent of price comparison — even if ShopVOX rolled back to $215/month, SignFlow at $99 with a better calculator still wins on product and price.

2. **Signs101 community rejection:** If the founder account is perceived as a vendor shill rather than an authentic community member, trust is lost quickly. Mitigation: engage for 4–6 weeks before any product mention; contribute value first (tutorials, pricing guides); be transparent about building a product and invite community feedback.

3. **Printlogic or SquareCoil accelerates:** Both are already positioned as ShopVOX alternatives. Mitigation: move fast, and invest heavily in the substrate calculator quality — it is the feature that wins the in-trial test. Being second to market with a better calculator still wins.

---

**Product Brief Status:** Complete  
**Next Step:** Create PRD using this brief as foundation  
**Recommended BMAD workflow:** `create-prd`

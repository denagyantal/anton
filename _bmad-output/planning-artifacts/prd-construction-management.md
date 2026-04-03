---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/construction-management-for-small-contractors.md
  - _bmad-output/planning-artifacts/product-brief-construction-management.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: construction
  complexity: medium
  projectContext: greenfield
date: '2026-04-03'
author: Root
project_name: 'FieldBill - Construction Billing & Compliance Tool'
---

# Product Requirements Document - FieldBill: Construction Billing & Compliance Tool

**Author:** Root
**Date:** 2026-04-03

## Executive Summary

The US construction industry lost $280 billion to slow payments in 2024 — up 35% from 2022. 82% of contractors wait more than 30 days to get paid. 74% faced moderate-to-severe cash flow difficulties. The root cause is not slow payers alone: it is that small contractors lack the tools to generate airtight pay applications. AIA G702/G703 progress billing forms, properly tracked retainage, documented change orders, and correctly issued lien waivers are what separate contractors who get paid on time from those who lose disputes and write off receivables. Every tool that handles these workflows correctly starts at $186/month (Knowify) — a price that requires $500K+ in active billings to justify, and is entirely out of reach for the 500,000+ small contractors doing $500K–$5M in annual work.

**FieldBill** is a purpose-built construction billing and compliance tool for small general contractors and specialty subcontractors. It does one thing exceptionally well: helps contractors get paid correctly and on time. Core capabilities are AIA G702/G703 progress billing generation, retainage tracking, change order management, lien waiver generation, and QuickBooks integration — all in a mobile-first design built for jobsite use.

**Target users:** Small GCs and specialty subs (2–20 employees, $500K–$5M annual revenue) who currently produce legally significant pay applications in Excel spreadsheets, hand-filled PDF forms, or Word templates — and lose money through underbilling, retainage write-offs, and rejected pay applications.

**Go-to-market:** $29/month (solo) and $49/month (team) SaaS, with $99–$149 AppSumo LTD as the first-mover in a vacant AppSumo category. First credible entry captures organic attention from a price-sensitive, trade-community-driven audience.

### What Makes This Special

**Purpose-built for billing compliance, not project management.** FieldBill has no scheduling module, no client portal, no daily reports, no drawing management. It does AIA billing and lien waivers better than anything at this price because that is all it does. The entire product surface is optimized for one outcome: a contractor generates a correct, airtight pay application in under 3 minutes from the jobsite.

**Mobile-first AIA billing.** The only tool where creating a G702/G703 is designed for a 5-inch screen on a dusty jobsite — not adapted from a desktop accounting form. Updating % complete per line item, adding a change order, and generating the billing PDF is a workflow designed for thumb navigation in a hard hat, not a desktop form with 40 fields.

**Flat pricing with a no-hike brand promise.** Buildertrend did 3–5x price increases over 5 years. Procore annual renewals are notorious. FieldBill publicly commits to transparent pricing and contractual no-hike guarantees for annual subscribers — a direct brand response to the #1 source of contractor resentment toward their current tools.

**Legally accurate lien waiver generation.** Most budget tools have no lien waivers. Those that do offer basic templates. FieldBill generates state-appropriate conditional and unconditional waivers (all four standard types) auto-populated from billing data — reducing the errors that cause contractors to inadvertently extinguish payment rights worth tens of thousands of dollars.

**AppSumo first-mover in a vacant category.** Zero construction billing tools exist on AppSumo. Price-sensitive B2B buyers in the trades are an active AppSumo audience. First credible entry captures organic attention that cannot be purchased.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant web application with companion iOS/Android mobile apps
- **Domain:** Construction (billing, payment compliance, lien law)
- **Complexity:** Medium — involves legally significant document generation (AIA forms, lien waivers), state-specific compliance rules, external accounting system integration (QuickBooks), and offline-capable mobile workflows
- **Project Context:** Greenfield — new product built from scratch, no existing codebase

## Success Criteria

### User Success

- **Time to first billing:** 80%+ of new users generate their first AIA G702/G703 within 10 minutes of account creation
- **Pay application first-pass acceptance rate:** >85% of FieldBill-generated pay apps accepted by GCs without revision (measured via 90-day user survey)
- **Retainage capture rate:** Users who track retainage in FieldBill collect >95% of their billable retainage (vs. industry norm of frequent write-offs due to poor tracking)
- **Billing cycle time reduction:** Users self-report 5–10 days faster average payment after switching to FieldBill (measured at 90-day survey)
- **QuickBooks integration activation:** >80% of team-tier users connect QuickBooks integration within 14 days of signup (strongest retention correlation)
- **Billing creation frequency:** Active users create ≥1 billing per project per month (indicates the tool is embedded in their real billing cycle, not just used for onboarding)

### Business Success

- **AppSumo launch (Month 1–2):** 500+ LTD buyers at $99–$149 average → $50,000–$75,000 launch revenue; 4.5+ star rating with 50+ reviews
- **Month 3:** 100+ active monthly subscribers converting from free trial
- **Month 6:** 2,000+ paying customers (LTD + MRR combined); NPS >50
- **Month 12:** $15,000–$25,000 MRR from monthly subscription base; G2/Capterra minimum 25 reviews with >4.5 average rating; featured in ≥2 construction trade publications or YouTube review channels
- **Month 24:** $50,000–$75,000 MRR; >30% of new customers from contractor peer referral; defined presence in r/Contractor, contractor Facebook groups, and trade associations

### Technical Success

- **QuickBooks sync reliability:** >99% of QuickBooks Online sync operations complete without error within 60 days of launch
- **PDF generation accuracy:** 100% of generated AIA G702/G703 forms pass AIA compliance validation (correct form structure, required fields, mathematical accuracy)
- **Mobile performance:** Core actions (open project, update % complete, generate billing PDF) complete in <3 seconds on mid-range Android devices
- **Offline reliability:** 99.9%+ of offline-created or modified records sync successfully with zero data loss on reconnection
- **Uptime:** 99.9% availability for cloud services (billing generation, QuickBooks sync, PDF export)

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Total Paying Customers | 600 | 2,000 | 5,000 |
| MRR | $5K | $10K | $22K |
| Free Trial → Paid Conversion | >25% | >28% | >30% |
| Monthly Churn | <4% | <3% | <3% |
| 90-Day Retention | 75% | 80% | 85% |
| NPS Score | 45+ | 50+ | 55+ |
| QuickBooks Integration Rate | 70% | 80% | 85% |
| AppSumo Rating | 4.5+ | 4.5+ | 4.5+ |

## Product Scope

### MVP - Minimum Viable Product

The MVP delivers the construction billing compliance workflow — the specific capabilities a small contractor needs to produce correct AIA pay applications, track every dollar of retainage, document change orders, and generate lien waivers — and nothing else.

**Core capabilities:**

1. **Project Setup & Contract Management** — Create project with contract amount, client info, start date; Schedule of Values (SOV) entry with line items matching AIA G703 structure; retainage percentage per project; contract amendment log
2. **AIA G702/G703 Progress Billing Generator** — Generate AIA-compliant Application for Payment (G702) and Continuation Sheet (G703); auto-calculate work completed, stored materials, retainage held, and amount due; carry-forward from prior billing periods; export as print-ready/email-ready PDF; mobile-optimized % complete entry per line item
3. **Retainage Ledger** — Per-project tracking of retainage withheld per billing period; running total of retainage held; alert at substantial completion (retainage release trigger); track partial retainage releases
4. **Change Order Log** — Document change orders with description, amount, owner approval status, and date; pending vs. approved change order tracking; auto-include approved change orders in next billing SOV; running total of approved CO value vs. original contract
5. **Lien Waiver Generation** — All four standard types (Conditional Partial, Unconditional Partial, Conditional Final, Unconditional Final); auto-populate from current billing data; state-specific templates for top 10 construction states (CA, TX, FL, NY, IL, GA, NC, OH, PA, AZ); PDF export for signature; waiver log tracking signed waivers by date and payment
6. **QuickBooks Integration (Day One)** — Bidirectional sync with QuickBooks Online; push billing amounts as invoices; pull payment records to confirm receipt; map FieldBill projects to QuickBooks customers/jobs; sync status dashboard with error reporting
7. **Mobile App (iOS + Android)** — Full billing creation workflow on mobile; offline mode for % complete data entry without cell coverage; camera integration for change order photo attachments; push notifications for retainage alerts and QuickBooks sync status

### Growth Features (Post-MVP)

- GC-to-Sub pay app submission via GCPay, Textura, and Procore portals (removes email for commercial subs)
- Subcontractor management for GCs — manage sub pay app approvals and lien waiver collection
- Expanded lien waiver coverage — all 50 US states with state-specific validation rules
- Joint check and conditional payment tracking
- Estimated vs. actual cost tracking per SOV line item
- Client portal for GC-side pay application review and approval
- Team permissions and multi-user collaboration (owner + office admin + project manager roles)
- Recurring retainage reminder automation
- Billing history analytics (average days to payment, retainage recovery rate)

### Vision (Future)

- AI pay app review — automatically check pay app against contract terms and flag common rejection reasons before submission
- Construction lending integration — connect progress billings to construction lenders for automated draw requests
- Estimating integration — connect FieldBill SOV to estimating tools (Buildertrend, Procore, custom) so contract award auto-populates the SOV
- International expansion — Canadian CCDC forms, UK JCT valuations, Australian progress claims
- Platform API for integration with GC management platforms
- Embedded payment processing — FieldBill as payment rails between GC and sub, processing billions in construction pay applications

## User Journeys

### Journey 1: Marcus the Small GC — From Spreadsheet Chaos to Clean Billing

**Opening Scene:** Marcus runs a 6-person general contracting company doing $2.5M/year in commercial tenant improvements. He creates AIA pay applications manually — printing G702/G703 forms, filling them in by hand or in a PDF editor, emailing them to GC owners. He doesn't fully trust his own retainage calculations. Reconciling numbers across multiple projects against his Excel sheets takes hours. Last year, a pay app was rejected because his retainage calculation didn't match the owner's records — the dispute took 6 weeks to resolve. He sees a post in a contractor Facebook group: "I switched to FieldBill and my last three pay apps went through first try."

**Rising Action:** Marcus signs up and starts a free trial. He creates his current active project — a $450,000 commercial TI job. He enters the Schedule of Values with 12 line items, sets retainage at 10%. Connects QuickBooks Online via OAuth in two taps. He's been on the job three weeks; he enters the completion percentages for each line item from his field notes. FieldBill calculates the G702 automatically: contract amount, work completed to date, retainage held, net amount due. He generates the PDF. It looks like the AIA form he's been filling out by hand — but calculated correctly, formatted cleanly, and stamped with his business name.

**Climax:** Marcus emails the pay app to the project owner. Two days later, he receives approval — no questions, no corrections. He's never had a first-submission approval on this owner before. Three weeks later, payment arrives. He checks his retainage ledger in FieldBill: it shows $22,500 held to date, with a flag that retainage becomes releasable at substantial completion in approximately 4 months.

**Resolution:** Marcus uses FieldBill for all three active projects. At the end of the month, he generates lien waivers for all three simultaneous payments without looking up templates. His office manager, Elena, handles the retainage tracking from her desk. At project closeout, FieldBill alerts Elena that $22,500 in retainage is releasable — something she would have missed in the spreadsheet chaos. Marcus stops losing retainage to forgetfulness.

### Journey 2: Diana the Electrical Sub — Getting Paid Like a Professional

**Opening Scene:** Diana owns an 8-person electrical subcontracting business doing $1.8M/year. Her work is almost entirely for GCs on commercial projects — she is always a sub, never the prime. She submits invoices using a Word template her accountant made. GCs have started rejecting her billing: "We need AIA-formatted pay applications." Diana doesn't know how to make AIA G702/G703 forms correctly. She Googles "how to fill out AIA G702 G703" and finds a FieldBill article in the top results.

**Rising Action:** Diana clicks the FieldBill link, signs up for the free trial, and creates her first project — a $280,000 electrical subcontract on a commercial office buildout. She enters her Schedule of Values (8 line items: rough-in, trim-out, panel, fire alarm, low voltage, lighting, testing, closeout). She's 40% complete on rough-in. She enters the percentages and FieldBill generates the G702/G703. She downloads the PDF and compares it to the GC's sample form. It's identical in structure — the right form, calculated correctly.

**Climax:** Diana emails the pay app to the GC's project manager. The PM emails back 4 hours later: "Approved, we'll process with the next draw." Diana has never gotten same-day approval from this PM. She submits on schedule for the next two months. Payment arrives within 30 days each time, down from her previous 45–60 day average. When payment arrives for month two, she generates a Conditional Partial lien waiver from FieldBill — it auto-populates with the right project info, payment amount, and through-date. She signs and sends it without looking up what a conditional partial waiver even means.

**Resolution:** Diana never submits a Word invoice again. She posts in a contractor LinkedIn group: "Finally figured out AIA billing. FieldBill made it actually easy." Three of her sub network connections sign up within a week.

### Journey 3: Elena the Office Manager — Retainage Recovery at Closeout

**Opening Scene:** Elena manages billing administration for Marcus's GC company. She's the one who actually fills out pay applications, tracks receivables, and sends lien waivers. In the past, she kept a shared Excel spreadsheet for retainage — but it got out of sync with invoices, and at project closeout she was never sure exactly what was owed. On their last two finished projects, she only recovered about 80% of the retainage she should have collected.

**Rising Action:** After Marcus onboards FieldBill, Elena becomes the primary user for billing administration. She uses the web app from her desk. She manages four active projects simultaneously: entering approved change orders as they come in (GC owner signs and scans, she adds them to the log), marking billing periods closed, tracking retainage ledger for each project. She sets up retainage release alerts for the two projects approaching substantial completion.

**Climax:** Project closeout on the commercial TI: FieldBill shows $44,200 in retainage accumulated over 7 billing periods. The alert fires. Elena generates the Final Application for Payment G702/G703 with retainage release included. She generates the Unconditional Final lien waiver. She sends both in one email. The owner processes the final payment in 10 days.

**Resolution:** Elena recovers 100% of retainage on this project. She calculates that across the three projects that closed this year, FieldBill helped her recover approximately $27,000 in retainage that would previously have been written off or required painful collection calls. She tells Marcus: "This pays for itself every month."

### Journey 4: Marcus — Change Order Gone Wrong (Edge Case Recovery)

**Opening Scene:** Marcus is on a job site and the owner verbally tells him to add $18,500 in scope: additional electrical rough-in for a new mechanical room. Marcus notes it in his phone. Three months later, at billing time, he can't find the change order approval and the owner disputes the amount, claiming it was only $12,000. Marcus has no documentation.

**Rising Action:** After this incident, Marcus starts using FieldBill's change order log for every verbal and written change. When the owner asks to add $9,200 for additional MEP coordination, Marcus logs it in FieldBill immediately from his phone: description, amount, date, and "pending approval." He sends the owner a PDF change order summary from FieldBill. The owner approves via email and Marcus marks it "approved" in FieldBill.

**Climax:** On the next monthly billing, the $9,200 change order is automatically included in the G702 continuation sheet with its own SOV line item. The billing reflects the adjusted contract amount of $459,200. The owner doesn't question it — it's already in the pay application with a clear paper trail.

**Resolution:** Marcus has a complete change order log with timestamps, amounts, approval status, and PDF paper trail for every job. He stops losing disputes because he has documentation. He stops underbilling because FieldBill reminds him to include approved COs in each billing.

### Journey 5: Integration — QuickBooks Sync Failure Recovery

**Opening Scene:** Elena processes a billing payment from QuickBooks — a $38,400 draw received from the project owner. She marks the invoice paid in QuickBooks. FieldBill is supposed to pull this payment confirmation automatically.

**Rising Action:** The QuickBooks sync encounters a rate limit error and the payment confirmation doesn't reach FieldBill within the expected window. The sync status dashboard in FieldBill shows a warning: "QuickBooks sync pending — 1 item awaiting confirmation." Elena sees the alert.

**Climax:** Elena opens the sync dashboard, sees the specific record that failed, and triggers a manual re-sync with one button tap. The payment confirmation comes through immediately. FieldBill marks the billing paid, removes it from the outstanding receivables list, and logs the sync resolution.

**Resolution:** Elena resolves the sync issue in under 2 minutes without contacting support. The sync dashboard's clear error messaging and manual re-sync option mean she never has to debug QuickBooks API behavior directly. FieldBill logs the sync event for audit purposes.

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Marcus (GC billing) | Project + SOV setup, AIA G702/G703 generation, retainage tracking, QuickBooks sync, pay app first-pass acceptance |
| Diana (electrical sub) | Schedule of values entry, mobile billing creation, lien waiver generation, first-time AIA user onboarding |
| Elena (office manager) | Web-based retainage ledger, change order log management, retainage release alerts, lien waiver generation at closeout |
| Marcus (change order edge case) | Change order log, PDF change order output, auto-inclusion in next billing SOV, paper trail for dispute resolution |
| QuickBooks sync failure | Sync status dashboard, manual re-sync trigger, error reporting, sync audit log |

## Domain-Specific Requirements

### Compliance & Regulatory

**AIA Form Compliance:**
- AIA G702 (Application and Certificate for Payment) and G703 (Continuation Sheet) must conform to AIA standard field structure, labeling, and mathematical relationships
- Generated forms must be accepted by GC pay app reviewers, construction lenders, and payment compliance systems without modification
- G702 calculations must be mathematically verified: Scheduled Value totals must equal contract amount + approved change orders; retainage must equal the configured percentage of work completed; net amount due must equal gross amount earned minus previous payments minus retainage

**Lien Waiver Legal Accuracy:**
- All four standard waiver types (Conditional Partial, Unconditional Partial, Conditional Final, Unconditional Final) must conform to the relevant state's lien law requirements
- State-specific forms for CA, TX, FL, NY, IL, GA, NC, OH, PA, AZ in MVP — these 10 states represent ~70% of US construction volume
- California lien waivers are statutory forms — any deviation from statutory language is legally invalid; zero deviation permitted
- Waiver through-dates, payment amounts, and project information must auto-populate from billing data to eliminate manual transcription errors
- Waiver type selection must be guided with plain-language explanation (conditional vs. unconditional, partial vs. final) to prevent contractors from signing the wrong type

**Retainage Tracking Accuracy:**
- Retainage withheld must track per billing period, per project — not as a single running total
- System must support percentage-based retainage (5% or 10%) and dollar-capped retainage (retainage stops accruing after a cap)
- Partial retainage releases must be trackable mid-project (common on public works projects)

### Technical Constraints

**Data Integrity:**
- Billing periods are sequential and immutable once submitted — a contractor cannot retroactively alter a prior billing period without creating a formal amendment
- Retainage ledger must be append-only for audit purposes; corrections must be logged, not overwritten
- Change order approval status (pending → approved → rejected) must be tracked with timestamps for dispute documentation

**Security:**
- Billing data and lien waivers are legally significant financial documents — data must be encrypted at rest and in transit
- Multi-tenant isolation: one contractor's projects and billing data must be strictly isolated from another's
- QuickBooks OAuth tokens must be stored securely (not in client-side storage)
- PDF exports of lien waivers must include generation timestamp and project identifier for authenticity

### Integration Requirements

**QuickBooks Online (Day One):**
- OAuth 2.0 authentication flow; FieldBill never stores QuickBooks username/password
- Push: create or update invoice in QuickBooks when a billing period is generated
- Pull: poll for payment events from QuickBooks and update FieldBill payment status
- Map FieldBill projects to QuickBooks customers and jobs (class/location)
- Handle QuickBooks API rate limits gracefully; queue sync operations with retry and status reporting

**QuickBooks Desktop (Phase 2):**
- Sync via QuickBooks Web Connector for contractors not yet on QBO

**Email / PDF Delivery:**
- Pay applications and lien waivers must be deliverable as email attachments (PDF) directly from FieldBill
- PDF quality must be print-ready (300 DPI minimum, correct page margins for AIA standard forms)

### Risk Mitigations

**Legal accuracy risk:** AIA form calculations and lien waiver templates must be reviewed by a construction attorney before launch. A mathematical error in a G702 or an incorrect lien waiver template could cause a contractor to lose payment rights. This review is MVP scope, not post-launch.

**State law change risk:** Lien laws change. State-specific waiver templates must be version-controlled with the effective date of the law they implement. When a state updates its lien law, FieldBill must update its template and notify affected users.

**QuickBooks API dependency risk:** Intuit has changed QuickBooks APIs and sunset older integrations with limited notice. Mitigate by monitoring Intuit's developer changelog and building the integration through an API abstraction layer to ease migration if needed.

## SaaS B2B Specific Requirements

### Project-Type Overview

FieldBill is a multi-tenant SaaS product serving small business owners and office managers in the construction trades. The primary session pattern is task-completion (monthly billing cycle) rather than high-frequency daily use. The mobile app is the primary creation surface; the web app is the administrative surface. Every feature must be usable by a contractor with limited software experience in a noisy, time-pressured jobsite context.

### Technical Architecture Considerations

**Multi-Tenancy:**
- Tenant isolation at the database level — each contractor's data is siloed; no shared data tables between tenants except system-level configuration
- Tenant provisioning on account creation; tenant teardown at account deletion with GDPR-compliant data export
- Role model: Owner (full access), Office Admin (create/edit/export), Read-Only (view only) — MVP supports Owner + Admin; multi-role is Phase 2

**Subscription & Billing:**
- Stripe for subscription management: monthly and annual billing; coupon support for AppSumo LTD codes
- LTD (Lifetime Deal) codes: AppSumo buyers receive a permanent license tied to a defined feature tier (5 projects perpetual or unlimited perpetual)
- Automated dunning (failed payment retry and notification before access suspension)
- Downgrade path: when a subscription lapses, project data is read-only (export always available, no data loss)

**Authentication:**
- Email + password with email verification; magic link login as alternative
- Google SSO for frictionless onboarding (high priority — target users have Google Workspace)
- Session management with secure HTTP-only cookies; 30-day remember-me option
- Password reset flow with expiring token

**Integrations:**
- QuickBooks Online: OAuth 2.0 integration (detailed in Domain Requirements)
- Email delivery via transactional email provider (SendGrid/Postmark) for billing confirmations, retainage alerts, sync failure notifications

### Implementation Considerations

- Mobile app built with React Native for iOS/Android feature parity from a single codebase
- Offline mode: SQLite local storage for project data; optimistic UI updates; background sync with conflict resolution
- PDF generation server-side (Puppeteer or WeasyPrint) for consistent AIA form output — client-side PDF generation cannot reliably reproduce the exact AIA form layout at print quality
- File storage for generated PDFs and change order photos: S3-compatible object storage with per-tenant key namespacing

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the construction billing compliance workflow (AIA billing + retainage + change orders + lien waivers + QuickBooks sync) reliably and correctly. Every feature in the MVP directly supports a contractor getting paid on time and getting paid correctly. If a feature doesn't serve the billing and compliance workflow, it is deferred.

**Resource Requirements:** Small team (2–3 developers). One backend developer (Rails/Django/Node) for billing engine, PDF generation, QuickBooks API, and lien waiver template system. One mobile developer (React Native) for iOS/Android apps. Shared responsibility for web app and testing. Timeline: 3–4 months to beta, 5–6 months to AppSumo launch.

**MVP Philosophy:** Ship the billing core before anything else. The AppSumo launch validates the market. Monthly subscription conversion validates the retention model. Phase 2 feature investment is gated on reaching 500+ paying customers with <4% monthly churn.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Small GC or sub: create project + SOV → generate AIA G702/G703 → track retainage → document change orders → generate lien waiver → QuickBooks sync
- Office manager: manage retainage ledger + change order log + lien waiver collection from desktop
- Customer (indirect): receive and approve GC-generated pay application documentation

**Must-Have Capabilities:**
1. Project creation with contract amount, client, start date, and SOV entry
2. AIA G702/G703 progress billing generation with auto-calculation and carry-forward
3. Retainage ledger with per-period tracking and release alerting
4. Change order log with approval tracking and auto-inclusion in next billing
5. Lien waiver generation (all four types, 10 states) with auto-population from billing data
6. QuickBooks Online bidirectional sync (invoices + payment confirmation)
7. PDF export of pay applications and lien waivers at print quality
8. Mobile app (iOS + Android) with offline % complete entry
9. Web app for desktop billing administration
10. Free trial (14-day) with full feature access; no credit card required for trial

### Post-MVP Features

**Phase 2 (Months 7–18):**
- GC-to-Sub portal: subs submit pay apps directly to GC approval systems (GCPay, Textura, Procore)
- Subcontractor management for GCs (manage sub billings, lien waiver collection)
- Expanded lien waiver coverage (all 50 states)
- Team permissions and multi-user roles
- Joint check and conditional payment tracking
- QuickBooks Desktop support

**Phase 3 (Year 2+):**
- Estimating integration (contract award → SOV auto-populated)
- AI pay app review (flags common rejection reasons before submission)
- Construction lending draw request integration
- Embedded payment processing (FieldBill as payment rails)
- International expansion (Canada, UK, Australia)
- Platform API for third-party integrations

### Risk Mitigation Strategy

**Technical Risks:** AIA form generation and lien waiver legal accuracy are the highest-risk technical components. Mitigate by engaging a construction attorney to review all form templates before launch, building a PDF validation suite that checks output against AIA spec, and starting with 10 states rather than all 50 to limit legal surface area.

**Market Risks:** Contractor Foreman or Knowify could respond to FieldBill's launch with a price cut. Mitigate by moving fast to capture the AppSumo audience first and building brand loyalty through the no-hike pricing promise — a repositioning move, not just a price change, that incumbents cannot match without cannibalizing existing revenue.

**Integration Risks:** QuickBooks API changes could break sync. Mitigate by building through an abstraction layer, investing in automated integration tests against the QuickBooks sandbox, and monitoring Intuit's developer changelog actively.

**Resource Risks:** If development resources are constrained, scope the MVP to web-only (no mobile app) for launch, then ship the mobile app within 60 days. The core AIA billing workflow can work acceptably on a mobile browser. Lien waiver state coverage can also be reduced to CA + TX + FL (3 highest-volume states) as a fallback.

## Functional Requirements

### Project & Contract Management

- FR1: Contractors can create a project with contract name, owner/client, contract amount, start date, and retainage percentage
- FR2: Contractors can define a Schedule of Values (SOV) for a project with multiple line items, each with a description and scheduled value
- FR3: Contractors can edit the SOV to add, remove, or modify line items before the first billing period is submitted
- FR4: Contractors can record contract amendments that adjust the total contract amount and SOV
- FR5: Contractors can view a list of all active and completed projects with key status indicators (active billing, outstanding retainage, pending lien waivers)

### AIA G702/G703 Progress Billing

- FR6: Contractors can create a new billing period for a project and enter % complete per SOV line item
- FR7: The system auto-calculates work completed to date, stored materials, retainage held, previous billings, and net amount due from SOV and % complete entries
- FR8: The system auto-carries-forward data from prior billing periods to the current period without manual re-entry
- FR9: Contractors can generate an AIA G702/G703-compliant PDF from any completed billing period
- FR10: Contractors can email a generated pay application PDF directly from within the app
- FR11: Contractors can view and export the full billing history for a project (all periods, all amounts, running totals)
- FR12: Contractors can create a billing period while offline and sync it when connectivity is restored

### Retainage Tracking

- FR13: The system tracks retainage withheld per billing period and maintains a running retainage ledger per project
- FR14: The system alerts contractors when a project reaches substantial completion (configurable threshold) with the total retainage balance outstanding
- FR15: Contractors can record partial retainage releases and track which portion of retainage has been released vs. still withheld
- FR16: Contractors can generate a final application for payment that includes full retainage release billing

### Change Order Management

- FR17: Contractors can log a change order with description, amount, date, and approval status (pending / approved / rejected)
- FR18: Contractors can attach a photo to a change order record for documentation
- FR19: Contractors can generate a PDF change order summary for owner signature from the change order log
- FR20: Approved change orders are automatically added to the next billing period's SOV as separate line items
- FR21: The system displays a running total of approved change order value and the resulting adjusted contract amount
- FR22: Contractors can view all pending change orders across all active projects in a single view

### Lien Waiver Generation

- FR23: Contractors can generate any of the four standard lien waiver types (Conditional Partial, Unconditional Partial, Conditional Final, Unconditional Final) for a project
- FR24: The system auto-populates lien waivers with project name, owner, contractor, payment amount, through-date, and property address from the project record and current billing data
- FR25: Contractors can select the applicable state for a lien waiver and the system generates the state-correct template
- FR26: Contractors can export lien waivers as PDFs for signature and delivery
- FR27: The system maintains a lien waiver log per project tracking waiver type, amount, through-date, and date signed/delivered
- FR28: The system warns contractors when they attempt to generate an unconditional waiver for an amount exceeding the confirmed payment received (preventing premature release)

### QuickBooks Integration

- FR29: Contractors can connect FieldBill to QuickBooks Online via OAuth 2.0 (no password sharing required)
- FR30: The system automatically creates an invoice in QuickBooks when a billing period is finalized in FieldBill
- FR31: The system pulls payment confirmations from QuickBooks and marks the corresponding FieldBill billing period as paid
- FR32: Contractors can map FieldBill projects to QuickBooks customers and jobs (class/location)
- FR33: Contractors can view a sync status dashboard showing successful syncs, pending syncs, and errors with specific record details
- FR34: Contractors can manually trigger a re-sync for any failed or pending sync operation
- FR35: Contractors can disconnect and reconnect the QuickBooks integration without data loss

### Account & Subscription Management

- FR36: New users can sign up with email/password or Google SSO and access a full-featured 14-day free trial without a credit card
- FR37: Users can upgrade from free trial to a paid plan (Solo $29/month or Team $49/month) with Stripe payment processing
- FR38: Users can redeem an AppSumo LTD code to activate a permanent license on their account
- FR39: Account owners can invite an office admin user to access the account (Team plan)
- FR40: Users can export all project data, billings, and generated PDFs at any time, including after subscription expiry (data portability guarantee)

### Mobile App

- FR41: Contractors can perform all core billing workflow actions (create billing period, enter % complete, generate PDF, log change order, generate lien waiver) from the iOS or Android mobile app
- FR42: The mobile app operates in offline mode — contractors can create and modify billing records without connectivity, and the app syncs automatically when connectivity is restored
- FR43: Contractors can attach photos from the device camera to change order records within the mobile app
- FR44: The mobile app sends push notifications for retainage release alerts and QuickBooks sync failures

## Non-Functional Requirements

### Performance

- Pay application PDF generation completes in <5 seconds for a standard G702/G703 (up to 30 SOV line items)
- Core mobile actions (open project, enter % complete per line item, generate PDF) complete in <3 seconds on a mid-range Android device (Snapdragon 665 or equivalent)
- QuickBooks sync operations (push invoice, pull payment) complete in <30 seconds under normal API conditions
- Web app pages load in <2 seconds on a standard broadband connection

### Security

- All data encrypted in transit via TLS 1.2+; all data encrypted at rest (AES-256)
- Multi-tenant isolation enforced at the application and database layer — no cross-tenant data access is possible
- QuickBooks OAuth tokens stored server-side in encrypted secrets storage; never exposed to client-side code or logs
- Session tokens use HTTP-only, SameSite=Strict cookies; no sensitive credentials stored in localStorage
- Generated PDF documents include a generation timestamp and project identifier in metadata for authenticity verification
- Lien waiver log is append-only; deletion of a waiver record is not permitted (preserve legal paper trail)

### Scalability

- System must support 10,000 active projects and 100,000 billing records without performance degradation at launch-level load
- PDF generation infrastructure must scale horizontally to handle AppSumo launch burst traffic (estimated 500 simultaneous signups within first 48 hours of AppSumo launch)
- QuickBooks sync queue must handle backlog gracefully (exponential backoff, priority queuing, no request loss)

### Reliability

- 99.9% uptime target for web app, API, and PDF generation service
- Offline data created in the mobile app must never be lost — if sync fails, data persists locally until sync succeeds
- Automated daily backups of all tenant data with point-in-time restore capability (14-day retention)
- QuickBooks sync failures must be surfaced to users immediately (in-app notification + sync status dashboard) — silent failures are not acceptable for legally significant billing records

### Accessibility

- Web app meets WCAG 2.1 AA for the core billing workflow (AIA form generation, retainage dashboard, change order log) — small contractors increasingly use assistive technology, and office managers may have accessibility needs
- Mobile app adheres to iOS and Android accessibility guidelines (Dynamic Type support, VoiceOver/TalkBack compatibility for primary navigation)

### Integration

- QuickBooks Online integration must handle API rate limits (500 requests/minute per tenant) with transparent queuing; users must never see a raw API error
- Email delivery (PDF attachments) must achieve >98% delivery rate using a transactional email provider with SPF/DKIM/DMARC configuration
- Lien waiver PDFs must render correctly in Adobe Acrobat Reader, Preview (macOS), and mobile PDF viewers (iOS Files app, Android Files app) — the three primary environments where contractors review and sign documents

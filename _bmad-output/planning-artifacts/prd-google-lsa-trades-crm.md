---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/google-lsa-trades-crm.md
  - _bmad-output/planning-artifacts/product-brief-google-lsa-trades-crm.md
workflowType: 'prd'
research_topic: 'google-lsa-trades-crm'
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — LSATrack CRM

**Author:** Root
**Date:** 2026-11-23

---

## Executive Summary

LSATrack CRM is a vertical SaaS CRM for HVAC, plumbing, and electrical contractors that closes the attribution loop from Google Local Service Ad spend through job completion and invoiced revenue. The product targets shops with 2–10 technicians spending $1,500–$5,000/month on LSA — a segment spending over $11M/month on LSA collectively with zero existing tooling that answers the question: *"What was my ROAS last month?"*

The core problem is structural: LSA leads live in Google Ads, jobs live in Jobber or HouseCallPro, and invoices live in QuickBooks. No sub-$300/month platform connects these three systems. The result — 58% LSA lead conversion loss, thousands in disputed charges absorb silently, and shop owners make budget decisions blind. ServiceTitan solves this via Marketing Pro at $63K+/year. HouseCallPro ingests LSA leads but provides zero attribution. Jobber has no LSA integration. This is confirmed whitespace at SMB pricing.

The product's technical moat is Google Ads API integration of the `LocalServicesLead` resource — documented, official, achievable, but unbuilt by any SMB FSM vendor. The go-to-market is community-led (r/HVAC, Facebook contractor groups) with a beta LTD offer filtering for active LSA accounts, transitioning to SaaS after PMF validation.

### What Makes This Special

**Single differentiator, zero competition at SMB price:** Native Google LSA closed-loop attribution — lead arrival → job booked → invoice sent → revenue attributed — does not exist in any CRM priced under $300/month. This is not a gap competitors will close in weeks; it requires API partnership, integration development, and vertical-specific product thinking they have not prioritized.

**ROAS dashboard in the owner's language:** Not "conversions" or "impressions." Dollars in vs. dollars out, by service category, by week, by tech. Owners understand money, not marketing metrics.

**Dispute recovery as a concrete ROI signal:** Automatic flagging of unbillable leads plus one-click Google dispute submission delivers $200–400/month in directly measurable recovered spend — a word-of-mouth driver that no other CRM feature can match.

**Anti-ServiceTitan positioning:** Zero implementation cost, zero dedicated admin, field tech onboarding in under 10 minutes, and priced for a shop that bills $500K–$2M/year.

## Project Classification

- **Project Type:** SaaS B2B — vertical CRM with native third-party API integrations
- **Domain:** Field Service Management / Trades (HVAC, Plumbing, Electrical)
- **Complexity:** Medium — Google Ads API integration requires OAuth and API partnership; multi-role mobile app adds surface area; QuickBooks bidirectional sync requires care; domain is not regulated but is operationally sensitive
- **Project Context:** Greenfield — no existing codebase; fresh MVP targeting PMF validation

---

## Success Criteria

### User Success

**Primary activation event:** Shop owner connects Google Ads account AND views their first automatically generated ROAS report within 7 days of trial start. This is the product's "aha moment" and the leading indicator for conversion.

**Core user success state:** Owner answers "what was my LSA ROAS last month?" within 30 seconds of opening the app — no calculation, no spreadsheet, no export.

**Dispatcher success:** New LSA lead appears in the app queue within 15 minutes of arrival; dispatcher books the job in one click with no duplicate data entry.

**Tech success:** Job completion recorded from the field in under 45 seconds; Google review request fires automatically without tech intervention.

**Bookkeeper success:** Invoices appear in QuickBooks within 10 minutes of job completion with zero manual reconciliation.

### Business Success

**90-day targets:**
- 50 paying beta customers (filtered for active LSA accounts spending ≥$500/month)
- NPS > 40 from initial cohort
- Average LSA spend tracked per customer ≥ $1,500/month
- Zero critical defects in Google Ads API integration
- Trial-to-paid conversion rate ≥ 25%

**6-month targets:**
- 200+ paying customers
- $60,000–$150,000 in LTD revenue
- Monthly churn rate < 5%
- AppSumo listing live (secondary channel validation)
- G2/Capterra profiles with ≥ 20 verified reviews

**12-month targets:**
- 500+ customers
- $15,000+ MRR in SaaS phase
- Average ARPA ≥ $125/month
- Net revenue retention ≥ 110% (Solo → Team tier upsell)
- "LSATrack" mentioned unprompted in r/HVAC threads

### Technical Success

- Google Ads API LSA lead sync: ≥ 99.5% uptime, ≤ 15-minute lead arrival latency
- QuickBooks sync reliability: ≥ 99% invoice delivery within 10 minutes of job completion
- Mobile app offline capability: job completion functions without signal; syncs on reconnect
- Zero data loss incidents during LSA lead ingest over first 30 days of production operation
- Google API stability confirmed before scaling past 50 customers

### Measurable Outcomes

| KPI | 90-Day Target | 12-Month Target |
|-----|--------------|----------------|
| Paying customers | 50 | 500 |
| MRR | — | $15K |
| Trial-to-paid conversion | >25% | >30% |
| Activation rate (ROAS report in 7 days) | >60% | >70% |
| Weekly active owners (dashboard) | >50% of customers | >60% |
| Tech mobile adoption | >60% of techs per shop | >75% |
| Monthly churn | <8% | <5% |
| Average LSA spend tracked/customer | >$1,500/mo | >$2,500/mo |
| NPS | >35 | >50 |
| Disputes recovered/customer/month | >$200 | >$300 |
| ROAS visibility score (% attributed spend) | — | ≥80% per shop |

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers exactly one thing flawlessly: **close the loop from LSA lead to revenue, automatically.** Every other feature is secondary.

**Must-Have:**
1. Google LSA lead ingest via Google Ads API (every 10 minutes; push notifications on arrival)
2. Lead → Job → Invoice workflow with one-click lead conversion (no duplicate entry)
3. LSA ROAS dashboard (weekly/monthly spend vs. revenue, by service category, trend line)
4. iOS and Android mobile app for field techs (job list, one-tap completion, photo, review prompt)
5. QuickBooks Online bidirectional sync (invoices, customers, payments)
6. User role management (Owner/Admin, Dispatcher, Technician)

**Should-Have for MVP:**
7. LSA lead dispute management (auto-flag unbillable leads, one-click submission via `ProvideLeadFeedback` API, dispute status tracking, monthly recovery report)

### Growth Features (Post-MVP)

- Multi-channel attribution (Facebook Ads, Yelp, organic Google) — after LSA attribution PMF is proven
- Maintenance agreement tracking and auto-renewal reminders
- Customer equipment history (every unit serviced, age, last maintenance date)
- Full estimating/quoting workflow with flat-rate price book integration
- Automated follow-up sequences (LSA lead no-answer → SMS in 2 hours → call reminder in 24 hours)
- Multi-location support (shops at 2–5 locations)
- AI lead quality scoring (call recording analysis for high-intent vs. price-shopping callers)
- Zapier / REST API access for custom integrations

### Vision (Future)

- Seasonal ROAS benchmarking across anonymized customer base ("your HVAC ROAS is 8.2x; top quartile in your market is 11.4x")
- LSA budget optimization recommendations driven by historical attribution data
- Technician performance benchmarking (which techs generate the most repeat customers and reviews)
- White-label / franchise support for HVAC franchise groups
- Vertical expansion to pool service, pest control, roofing, landscaping (identical LSA pain points)
- Embedded consumer financing (Wisetack-style) for large HVAC installs
- Platform acquisition readiness at 2,000+ customers

---

## User Journeys

### Journey 1: Mike — HVAC Owner, First ROAS Report (Primary User, Success Path)

Mike has run his 5-tech HVAC shop for 11 years. He spends $3,200/month on LSA and has no idea if it's working. His wife asks every Sunday; he has no answer. He tried a spreadsheet twice, never finished.

**Discovery:** Mike sees a screenshot of the LSATrack ROAS dashboard in a Facebook HVAC Business Owners group post — "Finally know my LSA ROAS. Last month: 9.1x." Two dozen comments validate ("what app is this?", "need this yesterday"). He clicks through to the landing page.

**Trial signup:** He watches the 90-second demo — LSA lead arriving, one-click booking, dashboard updating, review request firing. He signs up for the 14-day free trial. No credit card required.

**Google Ads connection:** He taps "Connect Google Ads," completes OAuth in two clicks. Within 24 hours, the system backfills his last 90 days of LSA leads. He sees 143 leads with call recordings, charge status, and lead types he's never seen organized this way.

**The aha moment:** He manually closes out his last 15 completed jobs in the system. The ROAS dashboard updates: "LSA spend (last 90 days): $9,600. Revenue from LSA jobs: $71,400. ROAS: 7.4x." He stares at it for 30 seconds. He texts a screenshot to his wife. She replies: "so we should spend more."

**Ongoing use:** Every Monday morning, Mike opens the app before his first coffee. 2 minutes to review last week's ROAS and see which service categories are performing. He increases his LSA budget for HVAC emergency repair by 30% and pauses the HVAC estimate category, which closes at 19% with high no-shows. His ROAS improves to 9.2x within 60 days.

**Journey capabilities revealed:** LSA lead backfill, ROAS dashboard with service category breakdown, trend line, manual job closure, budget decision support.

---

### Journey 2: Sarah — Office Manager, Daily Dispatch Operations (Primary User, Operational Path)

Sarah manages operations for an 8-tech plumbing shop. She dispatches, handles customer calls, and manages LSA reporting. The owner asks weekly: "how are the Google ads performing?" She spends an hour in Excel and still can't give him a clean answer.

**Onboarding:** Sarah evaluates the tool on behalf of the owner. She runs the 14-day trial, connects Google Ads (owner does OAuth), syncs QuickBooks with the bookkeeper's help on day 2. By day 3, LSA leads are flowing in automatically.

**Daily morning routine:** Sarah opens the dispatcher view at 8:00 AM. She sees 4 new LSA leads overnight — 2 emergency drain calls (high-intent, already left voicemails), 1 water heater install request, and 1 out-of-area call flagged for potential dispute. She calls back the emergency leads within 5 minutes. The response time display turns green — fast response rewards their LSA ranking.

**Lead booking:** She converts both emergency calls to booked jobs with one click per lead. Customer info, service type, and lead source populate automatically. She assigns techs, sets windows, and the job cards go live. No double-entry into a second system.

**Dispute handling:** The out-of-area lead shows "Dispute eligible — caller from outside service area." She reviews the call recording (30 seconds), confirms it's not serviceable, and taps "Submit dispute." Done in 90 seconds. Last month, the system recovered $340 in disputed charges she would otherwise have absorbed silently.

**Weekly report:** Every Friday, Sarah emails the owner a screenshot of the ROAS dashboard. This now takes 3 minutes instead of 90.

**Journey capabilities revealed:** Lead queue with arrival alerts, response time tracking, one-click lead-to-job conversion, role-based dispatcher view, dispute flagging and one-click submission, automated weekly reporting.

---

### Journey 3: Jake — Field Tech, Job Completion (Secondary User, Mobile Path)

Jake is a plumbing tech, 6 years in the trade. He resists new software. The last CRM the shop tried required him to fill in 12 fields to close a job. He gave up after a week.

**First job with LSATrack:** Jake gets a push notification — new job assigned, drain backup at 123 Main St. He opens the app. Customer name, address, service type, and the original LSA lead details are already there. He taps "Start job," puts his phone in his pocket.

**Job completion:** He finishes the drain job. He taps "Complete job," takes one photo with his phone, and taps submit. The app prompts: "Send review request to customer? (SMS/Email)." He taps SMS. The request fires automatically to the customer's phone. Total interaction: 40 seconds.

**Invoice sync:** The completed job and invoice sync to QuickBooks within 8 minutes. The bookkeeper reconciles the job without calling Jake for details.

**Tech adoption:** Jake uses the app every day without thinking about it. He never enters more than 2 taps for any action. His shop's Google review count doubles in 90 days because every job he closes triggers a review request.

**Journey capabilities revealed:** Push notifications for job assignment, minimal-tap mobile job completion, single-photo documentation, one-tap Google review request, offline sync.

---

### Journey 4: Owner — Lead Dispute Recovery (Edge Case Path)

Mike has a rough December — 3 out-of-area calls, 1 wrong-language call, and 2 duplicate leads from Google. Under his old workflow, he'd absorb the charges because the dispute process was buried in the Google Ads interface and he'd forgotten about it by the time he had a moment to file.

**Automated flagging:** LSATrack flags all 6 leads with dispute eligibility reasons — out-of-area (3), wrong language (1), duplicate (2). They appear in a "Dispute Candidates" section in his dashboard with one-click submission.

**Batch dispute submission:** Mike reviews the 6 leads in 5 minutes, confirms each one, and submits all 6 disputes with a single batch action. The system sends the `ProvideLeadFeedback` API calls automatically and tracks status.

**Recovery report:** 4 of 6 disputes are approved over the next 2 weeks. The app shows: "December dispute recovery: $312." Mike forwards the screenshot to his accountant.

**Journey capabilities revealed:** Auto-flagging of dispute candidates, dispute reason display, call recording access for verification, one-click and batch dispute submission, dispute status tracking, monthly recovery report.

---

### Journey 5: Bookkeeper — QuickBooks Reconciliation (Integration User)

Carol handles QuickBooks reconciliation for a 4-tech HVAC shop part-time. She works 10 hours/week and is immediately resistant to any new tool that creates double-entry.

**Initial sync:** During onboarding, LSATrack syncs existing customer records from QuickBooks bidirectionally. Existing customers are matched; new customers created in LSATrack flow to QuickBooks automatically.

**Ongoing reconciliation:** When a tech marks a job complete, the invoice syncs to QuickBooks within 10 minutes with correct line items, tax codes, and the customer record. Carol opens QuickBooks on Monday and sees the week's jobs already reconciled. She has not had to manually enter a single invoice from LSA jobs since onboarding.

**Exception handling:** One invoice fails to sync (network issue during the tech's sync). Carol sees an alert in QuickBooks integration status — "1 pending sync." She taps retry. It resolves. She reports no data loss incidents in 90 days.

**Journey capabilities revealed:** Bidirectional QuickBooks customer sync, automatic invoice sync on job completion, correct line items and tax codes, sync status visibility, manual retry on failure.

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Mike — First ROAS report | LSA backfill, ROAS dashboard, service category breakdown, manual job close |
| Sarah — Daily dispatch | Lead queue, arrival alerts, response time display, one-click booking, dispute flagging |
| Jake — Field completion | Mobile job list, one-tap complete, photo, review prompt, offline sync |
| Mike — Dispute recovery | Auto-flag, dispute reason, call recording, batch submit, status tracking, recovery report |
| Carol — QuickBooks sync | Bidirectional sync, auto invoice delivery, line items, sync status, retry |

---

## Domain-Specific Requirements

### Trades Industry Constraints

**Operational rhythm:** HVAC and plumbing shops operate 7 AM – 7 PM with emergency calls extending to 24/7. The system must function reliably outside business hours. LSA leads can arrive at any time; alert delivery must work evenings and weekends.

**Seasonal demand spikes:** HVAC has extreme seasonality — summer (AC failures) and winter (heating failures) drive 2–3x normal lead volume. The system must handle these spikes without degraded API sync or dashboard performance.

**Cash-intensive, low-tech workforce:** Field technicians are non-technical users who resist overhead. Mobile workflows must be operable with one hand, in a work van, without reading instructions. Any friction in the tech mobile experience will kill adoption.

**Google LSA relationship dependency:** Google discontinued the standalone LSA app in January 2025. LSA now lives inside Google Ads. The product must track Google policy changes on LSA and maintain API compatibility through Google Ads API updates. This is the highest operational risk in the product.

### Compliance & Regulatory

- No HIPAA, PCI-DSS, or SOX requirements apply to this product
- Standard B2B SaaS data handling applies: customer PII (name, phone, address) stored securely, never sold
- Google Ads API Terms of Service compliance required — specifically the `LocalServicesLead` resource usage policies and `ProvideLeadFeedback` submission guidelines
- QuickBooks API Terms of Service compliance required for Intuit Developer program

### Integration Requirements

**Google Ads API (Core):**
- OAuth 2.0 authentication with shop owner's Google account
- `LocalServicesLead` resource polling (every 10 minutes)
- `ProvideLeadFeedback` mutation for dispute submission
- `LocalServicesCampaign` resource for spend data retrieval
- Official Google Ads API Developer Token required; apply and maintain Google Ads API access

**QuickBooks Online API (Core):**
- OAuth 2.0 authentication
- Customer create/update/read sync
- Invoice create/sync on job completion
- Payment record sync
- Webhook-based updates where available; polling fallback

### Risk Mitigations

**Google API policy change risk:** Build exclusively on official Google Ads API endpoints. Maintain separate CSV import path as fallback for cases where API access is degraded. Monitor Google Ads API changelog. Establish Google Ads API Developer Token and maintain Google Ads Partner program eligibility.

**LSA algorithm dependency:** The product's value (fast response time → better LSA ranking) is downstream of Google's algorithm. Do not promise ranking improvements; promise visibility into response time and attribution. Decouple from algorithm claims.

**QuickBooks sync reliability:** Implement idempotent invoice sync with retry logic. Surface sync failures in a visible status indicator rather than failing silently. No invoice should ever be lost without user notification.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Closed-loop attribution for a channel Google hasn't natively connected:** The `LocalServicesLead` API resource has existed since Google launched LSA, but no SMB CRM vendor has used it to build closed-loop ROAS attribution. This is not a novel algorithm — it is novel application of an existing API to a systematically ignored market segment. The moat is execution timing, not technical invention.

**Dispute automation at the CRM layer:** Google provides `ProvideLeadFeedback` for dispute submission but puts the burden of surfacing eligible disputes on the user. No existing product automates the detection and batch-submission workflow. This turns a friction-heavy manual process into a 90-second dashboard action — and creates a directly measurable ROI event ($200–400/month recovered) that drives word-of-mouth.

**Review flywheel integrated at job completion:** Google reviews feed LSA ranking. No current SMB FSM tool closes the loop from job completion → review request → LSA ranking improvement. Building this loop directly into the mobile completion flow creates a compounding benefit invisible to competing products.

### Market Context & Competitive Landscape

Crewbird (getcrewbird.com) is building in adjacent space — LSA-aware field service management, validated by the founder's November 2026 HN thread. Crewbird is a solo-founder project with no evident distribution. The window is open but the clock is running.

ServiceTitan Marketing Pro solves the attribution problem but requires a $63K+/year contract. HouseCallPro ingests LSA leads without attribution. This is confirmed whitespace at the $49–$149/month price point.

### Validation Approach

**Activation metric as innovation proof:** If ≥60% of trial users view their first automatically-generated ROAS report within 7 days, the innovation is validated. This is a behavior that cannot happen without the Google Ads API integration working and delivering value.

**Dispute recovery dollar amount as innovation proof:** If the median customer recovers ≥$200/month in disputed charges, the dispute automation feature is validated. This creates a secondary word-of-mouth event (recoverable money is emotionally significant to small business owners).

### Risk Mitigation

**Google policy risk:** If Google restricts LSA API access or changes `LocalServicesLead` resource availability, the core product breaks. Mitigate by: maintaining CSV manual import as fallback; building Google Ads API partnership status early; monitoring API changelog weekly.

**Crewbird execution risk:** Crewbird may scale faster than expected. Mitigate by building community presence and brand association in r/HVAC and Facebook contractor groups before they achieve distribution. Consider direct outreach to Crewbird founder for partnership or acquisition conversation at appropriate stage.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

LSATrack CRM is a multi-role, multi-tenant vertical SaaS application with two primary surfaces: a web application (owner/dispatcher) and a mobile application (field technician). It integrates with two external APIs (Google Ads, QuickBooks Online) and processes sensitive business data (lead information, revenue figures, customer PII).

### Technical Architecture Considerations

**Multi-tenancy:** Each shop is an isolated tenant. All data — leads, jobs, invoices, customers, ROAS data — is tenant-scoped. Tenant isolation must be enforced at the data layer, not just the application layer. No cross-tenant data access is acceptable.

**Authentication model:**
- Shop owners authenticate via email/password + optional 2FA (web)
- Google Ads OAuth connection: per-tenant OAuth token stored securely, refreshed automatically
- QuickBooks OAuth connection: per-tenant OAuth token, same handling
- Technician mobile authentication: invite-based, PIN or biometric on mobile device

**Role-based access control (RBAC):**

| Role | Access Scope |
|------|-------------|
| Owner/Admin | All features, billing, integrations, ROAS dashboard, user management |
| Dispatcher | Lead queue, job scheduling, booking, customer info, jobs |
| Technician | Mobile app only — assigned jobs, completion, photos, review prompt |

Dispatcher cannot access ROAS data or billing. Technician cannot access web app or financial data.

**Integration architecture:**
- Google Ads API: background worker polling every 10 minutes per active tenant; webhook upgrade path when Google supports it
- QuickBooks sync: event-driven on job completion; bidirectional customer sync on onboarding; retry queue for failed syncs
- Both API tokens stored encrypted at rest; rotated on expiry

**Tenant onboarding sequence:**
1. Owner creates account
2. Connect Google Ads (OAuth, 2 clicks) → system backfills last 90 days of LSA leads
3. Connect QuickBooks (OAuth) → bidirectional customer sync
4. Enable LSA lead flow
5. Invite dispatcher (optional)
6. Invite techs → they install mobile app and set PIN

### Implementation Considerations

**Mobile app:** React Native (single codebase for iOS/Android) with offline-first job completion. Jobs cached locally; sync on reconnect. Push notifications via FCM/APNs.

**Data model core entities:** Tenant, User (with role), LSALead, Job, Invoice, Customer, ROASReport, Dispute, GoogleAdsConnection, QuickBooksConnection.

**API rate limits:** Google Ads API has per-developer-token rate limits. With 500 tenants each polling every 10 minutes, total calls = 500 × 6/hour = 3,000 calls/hour. Within standard limits; monitor and implement per-tenant backoff if needed.

**Google Ads API versioning:** Pin to a specific API version; monitor deprecation timeline; plan upgrade cycles aligned with Google's annual API versioning schedule.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-proving MVP — the product must demonstrate that it generates measurable, attributable dollar value for shop owners before scaling. The single proof: a shop owner can see their ROAS number, automatically calculated, within 7 days of connecting their Google account.

**Resource Requirements:** 2 engineers (full-stack + mobile), 1 designer (part-time), 1 founder/PM. Target 8–12 weeks to functional beta.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Owner: First ROAS report (activation journey)
- Dispatcher: Daily lead queue and booking (operational journey)
- Technician: Job completion on mobile (field journey)
- Dispute recovery workflow (retention/ROI journey)

**Must-Have Capabilities:**

| Feature | Rationale |
|---------|-----------|
| Google Ads API LSA lead ingest (10-min polling) | Core differentiator — without this, there is no product |
| ROAS dashboard (spend vs. revenue, by service type) | The activation event and primary value delivery |
| Lead → Job → Invoice workflow (one-click conversion) | Operational usefulness that drives retention |
| QuickBooks Online bidirectional sync | Required for ROAS attribution to work (revenue side) |
| iOS + Android mobile app (job completion, photo, review prompt) | Tech adoption is the most fragile link; must work at launch |
| Role-based access (Owner, Dispatcher, Tech) | Required for multi-person shops |
| LSA dispute management (flag + submit) | Directly recoverable money; strongest ROI signal |
| Push notifications (new lead arrival) | Critical for fast response time, which drives LSA ranking |
| Response time tracking per lead | Shows LSA algorithm-relevant data to dispatcher |

### Post-MVP Features

**Phase 2 (Months 4–9): Full CRM**
- Maintenance agreement tracking and auto-renewal reminders
- Customer equipment history
- Full estimating workflow with flat-rate price book
- Multi-channel attribution (Facebook, Yelp, organic)
- Automated follow-up sequences for unbooked leads
- Zapier integration

**Phase 3 (Months 9–18): Intelligence Layer**
- Anonymized ROAS benchmarking
- Budget optimization recommendations
- AI lead quality scoring (call recording analysis)
- Technician performance analytics
- Multi-location support

### Risk Mitigation Strategy

**Technical Risks:** Google Ads API access is the single point of failure. Mitigation: apply for Google Ads API Developer Token in week 1; build CSV import fallback immediately; test `LocalServicesLead` resource in sandbox before committing architecture.

**Market Risks:** Crewbird may move faster. Mitigation: build community presence before product launch; ship beta to 10 known-pain HVAC owners within 60 days of deciding to build.

**Resource Risks:** If timeline slips, cut mobile app to dispatcher web-only in MVP and add mobile in sprint 2. Dispute management is "should-have," not "must-have" — can ship 2 weeks post-launch if needed.

---

## Functional Requirements

### LSA Lead Management

- FR1: Owner/Dispatcher can view all incoming LSA leads in a unified lead queue with arrival timestamp, service type, customer name/phone, call recording link, and charge status
- FR2: Owner/Dispatcher can receive push notifications when a new LSA lead arrives
- FR3: System automatically ingests LSA leads from Google Ads API within 15 minutes of arrival
- FR4: Owner/Dispatcher can view response time elapsed for each unbooked lead (time since lead arrived)
- FR5: Owner/Dispatcher can play call recordings associated with LSA leads directly from the lead detail view
- FR6: System backfills the last 90 days of LSA leads when a shop first connects their Google Ads account
- FR7: Owner can view lead charge status (charged / not charged / disputed) for each LSA lead
- FR8: Owner/Dispatcher can filter and search the lead queue by status, service type, date range, and disposition

### Job & Workflow Management

- FR9: Owner/Dispatcher can convert an LSA lead to a booked job in a single action with no duplicate data entry
- FR10: Owner/Dispatcher can assign a job to a technician and set a scheduled time window
- FR11: Technician can view their assigned jobs for the day in the mobile app with customer name, address, service type, and job notes
- FR12: Technician can mark a job as "in progress" when arriving on site
- FR13: Technician can mark a job as "complete" with one tap from the mobile app
- FR14: Technician can attach a photo to a job for documentation purposes
- FR15: System tracks job status transitions (New Lead → Booked → In Progress → Completed → Invoiced)
- FR16: Owner/Dispatcher can view the status of all active jobs across all technicians
- FR17: Technician can complete a job in the mobile app while offline, with the completion syncing when connectivity is restored

### Invoice & Revenue Attribution

- FR18: System automatically creates an invoice draft when a technician marks a job complete
- FR19: Owner/Dispatcher can review and finalize invoices with line items and amounts
- FR20: System syncs finalized invoices to QuickBooks Online within 10 minutes of creation
- FR21: System associates each invoice's revenue with the originating LSA lead for ROAS attribution
- FR22: Owner can view invoice sync status and retry failed syncs manually

### ROAS Analytics Dashboard

- FR23: Owner can view total LSA spend vs. LSA-attributed revenue for the current and previous periods (weekly and monthly views)
- FR24: Owner can view ROAS broken down by LSA service category
- FR25: Owner can view a ROAS trend line for the last 12 weeks
- FR26: Owner can view key LSA metrics: leads received, leads booked, booking rate, average ticket size, ROAS ratio
- FR27: Owner can view response time performance metrics (average response time, percentage of leads responded within 5 minutes)
- FR28: System updates ROAS dashboard in near-real-time as new invoices are attributed to LSA leads

### Dispute Management

- FR29: System automatically identifies LSA leads eligible for dispute (out-of-area, wrong service, wrong language, duplicate lead)
- FR30: Owner/Dispatcher can view the list of dispute-eligible leads with the reason for eligibility
- FR31: Owner/Dispatcher can review the call recording for a dispute-eligible lead before submitting
- FR32: Owner/Dispatcher can submit a dispute for a single lead with one click
- FR33: Owner/Dispatcher can submit disputes for multiple eligible leads in a batch action
- FR34: System submits disputes to Google via the `ProvideLeadFeedback` API and tracks submission status
- FR35: Owner can view dispute status (pending / approved / denied) for all submitted disputes
- FR36: Owner can view monthly dispute recovery totals (dollars recovered from approved disputes)

### Google Review Management

- FR37: System prompts the technician to send a Google review request to the customer immediately after job completion
- FR38: Technician can send a review request via SMS or email with one tap
- FR39: Owner can view review request delivery history and response counts

### Customer Management

- FR40: System creates or updates a customer record automatically when an LSA lead is ingested (phone/name matching)
- FR41: System syncs customer records bidirectionally with QuickBooks Online during onboarding
- FR42: Owner/Dispatcher can view a customer's job history, including all LSA-originated jobs
- FR43: Owner/Dispatcher can add notes to a customer record

### User & Tenant Management

- FR44: Owner can invite team members via email and assign them a role (Dispatcher or Technician)
- FR45: Owner can deactivate a team member's account
- FR46: Technician receives an invitation link to install the mobile app and set up their account with PIN or biometric authentication
- FR47: Owner can connect/disconnect the Google Ads account via OAuth
- FR48: Owner can connect/disconnect the QuickBooks Online account via OAuth
- FR49: Owner can view the integration status of Google Ads and QuickBooks connections (active / error / disconnected)

---

## Non-Functional Requirements

### Performance

- LSA lead ingest latency: ≤ 15 minutes from lead arrival at Google to appearance in the app queue under normal conditions
- ROAS dashboard initial load: ≤ 3 seconds for a shop with up to 24 months of data
- Job status updates on mobile: ≤ 2 seconds to reflect in dispatcher web view after tech submits
- QuickBooks invoice sync: ≤ 10 minutes from job completion to QuickBooks record creation under normal conditions
- Push notification delivery: ≤ 60 seconds from lead arrival to notification on owner/dispatcher device

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Google Ads OAuth tokens and QuickBooks OAuth tokens stored encrypted; never exposed in API responses or logs
- Tenant data strictly isolated at the database layer — no cross-tenant queries possible
- Role-based access enforced server-side; not dependent on client-side hiding
- No customer PII (name, phone, address) stored in logs
- Password authentication with bcrypt hashing; optional 2FA for owner accounts
- Mobile PIN/biometric required for technician app access
- Google Ads API Developer Token stored as environment secret; never client-exposed

### Reliability

- Google Ads API sync uptime: ≥ 99.5% (measured monthly) — goal is zero missed lead ingestion events over 30 consecutive days
- Failed QuickBooks syncs: surfaced to user within 1 hour; no silent data loss
- Mobile offline job completion: 100% of job completions recorded locally regardless of connectivity; zero data loss on sync
- Application uptime target: 99.9% (excluding planned maintenance windows communicated 24 hours in advance)

### Scalability

- Initial scale target: 500 active tenants, each with 1–10 users and up to 500 jobs/month
- Google Ads API polling architecture must handle 500 tenants × 6 polls/hour = 3,000 API calls/hour without exceeding rate limits; implement per-tenant backoff on 429 responses
- Database and infrastructure designed for 10x growth (5,000 tenants) without architectural changes
- Seasonal HVAC traffic spikes (2–3x normal load in June/July and December/January) must not degrade API sync latency

### Integration

- Google Ads API: official `LocalServicesLead` resource; pin to specific API version; plan upgrade at deprecation notice
- QuickBooks Online API: Intuit Developer program compliance; use OAuth 2.0 only (no legacy OAuth 1.0); webhook-first with polling fallback
- Both integration connections must display clear status (active / warning / error) with actionable error messages — never fail silently
- If Google Ads API is unavailable: queue lead sync attempts, retry on backoff schedule, alert owner when sync gap exceeds 1 hour

### Accessibility

- Web application: WCAG 2.1 AA compliance for owner and dispatcher interfaces (contractors include office staff with varying accessibility needs)
- Mobile application: standard iOS and Android accessibility APIs supported (VoiceOver, TalkBack) — not required at MVP but must not actively break
- Color contrast ratios compliant for all dashboard data visualizations (ROAS charts, status indicators)

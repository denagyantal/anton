---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/servicetitan-exit-data-migration-tool.md
  - _bmad-output/planning-artifacts/product-brief-servicetitan-migration-tool.md
  - _bmad-output/planning-artifacts/research/market-servicetitan-migration-tool-research-2026-11-08.md
workflowType: 'prd'
lastStep: 12
project_name: servicetitan-migration-tool
user_name: Root
date: '2026-11-08'
author: Root
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — ServiceTitan Exit & Data Migration Tool

**Author:** Root
**Date:** 2026-11-08
**Version:** 1.0

---

## Executive Summary

Tens of thousands of HVAC, plumbing, and trades shop owners are structurally trapped in ServiceTitan — paying $3,000–$10,000/month under auto-renewing contracts with early termination fees as high as $67,230, with no clean path to exit. When they finally decide to leave, they face a binary choice: pay $5,000–$15,000 for a generic IT consultant who doesn't understand FSM data models, or attempt a manual export that destroys years of customer history. No purpose-built, platform-neutral ServiceTitan exit tool exists.

The **ServiceTitan Exit & Data Migration Tool** solves this with two revenue tracks: a **$99 self-serve export** that pulls all six core data objects from ServiceTitan in under 10 minutes and generates import-ready files for the four most common destination platforms, and a **$500–$2,000 done-for-you migration service** that delivers a verified, complete data transfer in 2–5 business days. The product is validated by 27 BBB complaints, active Reddit communities dedicated to ST exit, documented price shocks ($3K → $10K/month in February 2026), and zero existing competitors in this specific niche.

The addressable market: 10,800 ServiceTitan customers, with ~540 migration opportunities per year at conservative 5% annual churn. Done-for-you migrations at $500–$2,000 represent $270K–$1.08M in direct annual revenue from that segment alone, compounding via word-of-mouth in the tight-knit trades community.

### What Makes This Special

Three properties combine to create a defensible niche no current player occupies:

1. **Platform neutrality**: Unlike destination-platform import wizards (Deelo, FieldPulse's migration tool), this product has no stake in where the customer lands. It is exclusively an exit enabler — the only tool that returns the customer's own data without routing them to a preferred destination.

2. **FSM-native field mapping**: ServiceTitan's data model (customer → location → job → invoice → equipment → maintenance agreement) requires domain understanding that generic migration consultants lack. Critically, three field types cause the majority of DIY migration failures — preferred-technician assignments, membership expiry dates, and pricebook task codes — and this product explicitly handles all three.

3. **API-restriction moat**: ServiceTitan's own Terms of Use prohibit ST-certified partners from building migration tools. This legal restriction, combined with the speed-to-market window opened by the February 2026 price shock, means the competitive window for establishing category leadership is open now and will close within 12–18 months as the market becomes more aware of the gap.

## Project Classification

- **Project Type**: SaaS B2B — two-track product with a self-serve software tool and a managed service workflow
- **Domain**: Field Service Management (FSM) — specifically the trades vertical (HVAC, plumbing, electrical, pest control, appliance repair)
- **Complexity**: Medium — FSM data model expertise required; API integration with rate-limit management; secure credential handling; no regulated industry compliance (HIPAA, PCI beyond basic payment processing)
- **Project Context**: Greenfield — no existing codebase; 4–5 week MVP target

---

## Success Criteria

### User Success

A successful migration means: a trades shop owner has all customer records, job history, equipment records, and maintenance agreements verified and loaded in their chosen destination platform **before** they formally cancel ServiceTitan — with zero data loss on the three high-failure fields.

**User success markers:**
- Shop owner completes extraction without requiring technical support (self-serve track)
- Verification report confirms ≥98% of records transferred without data loss
- Zero post-migration incidents where missing or corrupted data disrupts business operations
- Shop owner formally cancels ServiceTitan within 30 days of migration completion
- Shop owner can look up any customer in the destination platform and see complete job history

**Emotional success signal**: "I cancelled ServiceTitan, everything transferred, and my team can see the full history for every customer. It took 3 days and cost me $1,200."

### Business Success

| Milestone | Month 3 | Month 6 | Month 12 |
|-----------|---------|---------|---------|
| Done-for-you migrations/month | 10 | 30 | 100 |
| Self-serve tool sales/month | 15 | 60 | 200 |
| Total monthly revenue | $9,500 | $26,000 | $85,000 |
| NPS score | ≥65 | ≥75 | ≥80 |
| Referral rate (% from peer recommendation) | 20% | 35% | 50% |
| Data migration success rate | ≥95% | ≥97% | ≥98% |
| SEO keywords in top 10 | 3 | 10 | 25 |

**North Star Metric**: Migrations completed per month. This single number captures product value delivery, revenue generation, and word-of-mouth pipeline in one measure.

**Go/no-go checkpoint (Week 8)**: If 3 or more of the following are not met, pause before scaling the done-for-you service:
- 10 paid done-for-you migrations completed at ≥$500 average
- ≥60% of inquiries convert to paid migration without price objection
- ≥3 customers sourced organically from Reddit/Facebook communities
- ≥20 self-serve purchases at $99 with positive data quality feedback
- NPS ≥65 from first 10 surveyed customers
- Monthly revenue ≥$5,000 from migration fees

### Technical Success

- Self-serve extraction completes in ≤10 minutes for shops with up to 2,000 customer records
- Done-for-you migration turnaround: ≤5 business days for standard tiers
- System uptime ≥99.5% during business hours (8am–8pm ET)
- Zero credential exposure incidents — credentials used for extraction only, purged post-completion
- Generated destination import files pass validation on first import attempt for ≥90% of users
- API rate limit errors handled transparently — extraction retries automatically without user intervention

---

## Product Scope

### MVP — Minimum Viable Product (Weeks 1–5)

The 4–5 week MVP delivers the minimum viable migration capability to serve "The Trapped Operator" with the done-for-you track and validate the self-serve track.

**Core MVP capabilities:**
- ServiceTitan data extractor: API connection + CSV/manual extraction backup for all 6 objects
- Data cleaner and normalizer: deduplication, address normalization, date standardization, 3-critical-field handling
- Destination import template generator: Jobber, FieldPulse, Housecall Pro, Service Fusion
- Migration verification report and pre-cancellation checklist
- Done-for-you intake form + tiered pricing + secure credential handling
- Automated status email notifications for done-for-you customers
- Internal admin dashboard for job management

### Growth Features (Phase 2 — Months 4–9)

- Quarterly backup export subscription ($39/month) — data insurance for shops not yet committed to leaving
- Direct API import to destination platforms (eliminate manual CSV import step)
- Destination platform partnerships with Jobber, FieldPulse, HCP, Service Fusion (referral agreements, $100–$300/converted customer)
- Case study engine — structured collection and publishing of migration success stories
- Self-serve upload and destination import guidance for shops that have already manually exported

### Vision (Phase 3 — Months 10–18+)

- Adjacent FSM migration expansion: FieldEdge, Jonas Software, Commusoft as source platforms
- AI-powered field mapping for non-standard custom fields and free-text job notes
- Pre-cancellation risk analysis: automated review of extracted data to identify issues before formal ST cancellation
- ServiceTitan contract review feature: flag auto-renewal dates and ETF calculations from uploaded contracts
- Destination FSM platform (Track C): competing HVAC FSM with migration as the free acquisition hook

**Explicitly out of scope for MVP**: adjacent FSM migrations, AI field mapping, contract review, destination recommendation engine, quarterly backup subscription, multi-language support, automated destination API import.

---

## User Journeys

### Journey 1: The Trapped Operator — Done-For-You (Primary Happy Path)

**Persona**: Marcus, 44, HVAC shop owner, Atlanta. 12 technicians, $2.1M annual revenue. 6 years in ServiceTitan. February 2026 renewal came in at $8,400/month — up from $2,800. His account manager offered a 3-year lock-in discount. He declined. ServiceTitan processed the renewal anyway.

**Opening scene**: Marcus is on r/fieldservicesoftwares at 11pm. His lawyer confirmed the auto-renewal may be legally binding. He's already decided to move to Housecall Pro — his peer Jake successfully migrated 8 months ago. His blocker: "What happens to 6 years of customer history?" He searches "ServiceTitan data export" and finds a Reddit thread where someone links the migration tool.

**Rising action**: Marcus lands on the product page. He reads a case study from an Atlanta HVAC shop (similar size) that migrated in 3 days. He sees the $999 price for his tier (up to 2,000 customer records) and compares it to his $8,400/month savings. He fills out the intake form in 5 minutes: company name, ST tenure (6 years), destination (Housecall Pro), record count estimate (847 customers). He pays with his business card.

**Climax**: Within 2 hours, he receives a confirmation email with his migration job ID and a brief call schedule. The team connects, he provides API credentials via a secure form. By Day 2, he receives an email: "Extraction complete — 847 customers, 4,312 jobs, 23 active maintenance agreements, 156 equipment records extracted." By Day 3, the verification email arrives: "Data verified in Housecall Pro. All 23 maintenance agreements intact with correct expiry dates. All 847 customers present with complete job history. Safe to cancel ServiceTitan."

**Resolution**: Marcus cancels ServiceTitan on Day 4. His team starts the week on HCP with their full customer database intact. Total cost: $999. Total time: 3 business days. ServiceTitan savings starting next billing cycle: $8,400/month.

**Journey requirements revealed**: intake form, tiered pricing + payment, credential handoff, extraction pipeline, verification report with explicit field-type counts, automated status emails, "safe to cancel" confirmation, done-for-you job management, case studies in acquisition funnel.

---

### Journey 2: The Budget-Conscious Grower — Self-Serve (Primary Alternative Path)

**Persona**: Alicia, 36, plumbing business owner, Phoenix. 6 technicians, $680K annual revenue. 2 years on ServiceTitan at a growth-customer discount. Renewal invoice: $3,900/month — up from $1,800. She's moving to Jobber at $395/month. The difference is $3,500/month, $42,000/year. She'll switch. But she's worried about her customer list.

**Opening scene**: Alicia watches a YouTube walkthrough of Jobber and sees the comment section — multiple people ask "how do I move my ServiceTitan data?" One reply links to a "ServiceTitan to Jobber migration guide." She reads it, finds the product, and sees the $99 self-serve export option. She'd prefer to do it herself.

**Rising action**: Alicia pays $99, creates an account, and lands on the extraction dashboard. The UI shows a checklist: 3 steps. Step 1 — she enters her ServiceTitan API credentials. Step 2 — she selects her destination (Jobber) and objects to export. Step 3 — she clicks "Start Extraction." The dashboard shows real-time progress by object type. 7 minutes later: "Extraction complete."

**Climax**: The download page shows 5 files: `customers-jobber-import.csv`, `jobs-jobber-import.csv`, `invoices-jobber-import.csv`, `equipment-jobber-import.csv`, `maintenance-agreements-jobber-import.csv`. Each file header matches Jobber's import format exactly. The page also shows a step-by-step import guide with screenshots for Jobber's bulk import tool. She imports `customers-jobber-import.csv` — 312 records loaded without error.

**Resolution**: Alicia completes the full import in 45 minutes. She tests 5 customer records manually, confirms job history is present. Cancels ServiceTitan. Total cost: $99. Total savings starting next month: $3,500/month.

**Journey requirements revealed**: $99 purchase + account creation, API credential input, destination + object selection, real-time extraction progress, pre-formatted download files per destination, inline import guide with screenshots, field-level validation ensuring header compatibility.

---

### Journey 3: The Skeptical Researcher — Edge Case / Error Recovery

**Persona**: Dave, 51, pest control shop owner, Ohio. 8 years on ServiceTitan. He tried to export data 6 months ago via a freelancer who charged $800 and delivered a CSV that couldn't be imported into Service Fusion. He lost his maintenance agreement data. He's gun-shy.

**Opening scene**: Dave sees the product mentioned in a Facebook group post. He DMs the poster, asks for more details. He finds the product page and his first question is: "What if it doesn't work?" He looks for a money-back guarantee. He finds the FAQ: "If we cannot transfer your data with ≥95% completeness verified, we refund in full." He reads the case studies. He sees the verification report sample.

**Rising action**: Dave submits a done-for-you intake. His concern: 8 years of data, custom pricebook task codes, multiple locations. He adds a note: "Previous migration attempt failed on maintenance agreements." The intake form has a "special concerns" field — he fills it in. He receives a pre-call email with a form asking for his ServiceTitan account age, number of custom fields, and destination platform. He fills it out before the call.

**Climax**: The team flags his job as "complex" in the admin dashboard — custom pricebook codes require manual review. During the mapping phase (Day 2), a team member identifies 23 non-standard pricebook codes and maps them manually to Service Fusion equivalents. The verification report shows all codes mapped, 8 years of job history transferred, all 41 maintenance agreements with correct expiry dates.

**Resolution**: Dave gets the verification report and spends 30 minutes spot-checking 10 customer records. Everything is there. He formally cancels ServiceTitan. His follow-up post in the Facebook group generates 8 direct inquiries.

**Journey requirements revealed**: FAQ with guarantee/refund policy, special-concerns field on intake form, complex-job flagging in admin, manual review workflow for edge cases, detailed verification report with field-type breakdown, money-back guarantee enforcement.

---

### Journey 4: Internal Migration Team — Operations (Admin Journey)

**Persona**: Sam, internal operations, handles done-for-you migrations. Currently managing 12 active jobs simultaneously.

**Opening scene**: Sam opens the admin dashboard. 12 jobs active. 3 are "Received" (not yet started), 2 are "Extracting," 4 are "Cleaning/Mapping," 2 are "Verifying," 1 is "Complete" pending customer confirmation.

**Rising action**: Sam reviews the 3 Received jobs. One has a "special concerns" note about custom fields — she flags it as Complex and assigns it to the senior data team member. She starts the extraction on the other two. The extraction tool auto-fetches all 6 object types. 18 minutes later, extraction completes on Job #47 (small shop, 340 records). She reviews the data quality report — 12 duplicate customer records flagged, 2 addresses failed USPS normalization. She runs the auto-dedup, manually corrects the 2 addresses. Marks status as "Mapping."

**Climax**: Sam generates the Jobber import files for Job #47 and runs the validation check — all 5 files pass destination format validation. She sends the files to Jobber's staging import tool, confirms all 340 customers loaded successfully. She updates the job status to "Verifying" and sends the customer their verification email with the report attached.

**Resolution**: Customer responds within 2 hours: "Looks complete, everything I expected is here." Sam marks the job "Complete" and triggers the final email. The admin dashboard records the turnaround time: 2.5 business days. She purges the customer's ST credentials from the system.

**Journey requirements revealed**: admin dashboard with job list by status, complex-job flag + assignment, auto-dedup run on demand, manual address correction tool, destination format validation, one-click status transitions, automated customer notification on each status change, credential purge on job completion, turnaround time tracking.

---

### Journey Requirements Summary

| Capability Area | Journeys | Key Requirements |
|----------------|---------|-----------------|
| Data Extraction | 1, 2, 3, 4 | API connect, 6-object extraction, rate limit handling, manual backup path, real-time progress |
| Data Cleaning | 1, 3, 4 | Auto-dedup, address normalization, date standardization, 3-critical-field handling, manual override |
| Destination Generation | 1, 2, 4 | Per-destination CSV templates (4 platforms), format validation, inline import guide |
| Migration Verification | 1, 2, 3, 4 | Record count report by type, "safe to cancel" indicator, spot-check interface, guarantee enforcement |
| Done-For-You Service | 1, 3, 4 | Intake form with special-concerns field, tiered pricing, job status tracking, automated emails, admin dashboard, complex-job flagging, credential purge |
| Self-Serve Purchase | 2 | $99 purchase, account creation, extraction dashboard, download page |
| Customer Communication | 1, 2, 3 | Automated status emails, verification report delivery, post-completion follow-up |

---

## Domain-Specific Requirements

The FSM trades domain creates specific data-model and security requirements that differ from generic SaaS:

### FSM Data Model Fidelity

ServiceTitan's hierarchical object model must be preserved through extraction and import:

- **Object hierarchy**: Company → Customer → Location → Job → Invoice (line items) → Equipment → Maintenance Agreement
- **Relationship preservation**: Jobs must maintain links to their parent Customer and Location; Equipment must link to its location; Maintenance Agreements must link to their covered Equipment items
- **The 3 critical failure fields** must be explicitly handled:
  1. **Preferred-technician assignments**: ST stores these as internal tech IDs — must be mapped to tech names for portability; destination platforms use name-based assignment
  2. **Membership/maintenance agreement expiry dates**: ST stores some dates in a non-standard epoch format; extraction must convert to ISO 8601 for destination import
  3. **Pricebook task codes**: ST uses internal numeric codes that have no meaning outside ST; extraction must include the human-readable task descriptions alongside codes so destination platforms can re-map

### Credential Security Requirements

Trades shop owners are granting access to their entire business data — invoices, customer PII, service history. Credential handling is the highest-risk surface:

- ServiceTitan API credentials (OAuth tokens or API key/secret pairs) must be encrypted at rest using AES-256
- Credentials must be transmitted exclusively over TLS 1.2+
- Credentials must be used only for the specific extraction job they were submitted for
- Credentials must be purged (not just deleted, but cryptographically zeroed) within 24 hours of job completion
- No credential may be stored in application logs, error messages, or analytics events
- Internal team members must access credentials only through an audited workflow — no raw credential display in admin UI

### Data Retention and Privacy

Customer data extracted from ServiceTitan includes business PII (customer names, addresses, phone numbers, service history):

- Raw extracted data must be stored only for the duration of the migration job plus a 7-day customer review window
- After 7 days post-completion, raw data must be purged from storage; only the verification report summary (record counts, no PII) may be retained
- Customers must be informed of the retention policy at intake
- Self-serve extraction output files are generated on-demand and not stored server-side — customer downloads directly and storage is ephemeral

### ServiceTitan API Constraints

- ServiceTitan's public API enforces a 500 requests/minute rate limit per tenant
- Some data objects (notably Equipment and Maintenance Agreements) require multiple API calls per record — budget for 3–5 API calls per customer for complete extraction
- ServiceTitan's API TOS prohibits migration-purpose applications — the product must implement a manual extraction backup path (parsing ST's native CSV exports + screen-scraping via browser automation) for shops where API access is restricted or revoked
- API error handling must be graceful — rate limit errors should trigger automatic backoff and retry, not surface as failures to the user

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Primary innovation**: The only platform-neutral ServiceTitan exit tool. While this is not a technical breakthrough, it is a structural market innovation — the product's existence creates a new category by exploiting the gap between ServiceTitan's API TOS restrictions (preventing ST-certified partners from building this) and the absence of independent FSM-domain-aware migration tools.

**Secondary innovation**: FSM-aware field mapping as a product-layer concern. Generic migration tools treat all CSV data equivalently. This product encodes domain knowledge about the 3 failure-prone fields directly into the extraction and normalization pipeline — turning what has been tacit consultant knowledge ("I know to check the preferred-tech field") into an automated, testable process.

**Tertiary innovation**: The dual-track product model (self-serve $99 + done-for-you $500–$2,000) in a niche historically served only by consulting engagements ($5,000–$15,000). This democratizes the exit path for small shops that could never justify a consulting engagement.

### Market Context

- No standalone, platform-neutral ST exit product exists as of November 2026
- Closest competitive adjacent products: Deelo (destination-locked, free but routes to Deelo), FieldPulse's migration wizard (destination-locked, free), TradeWeave (ST-certified partner, $5K–$15K, conflict of interest)
- The February 2026 price shock created the highest-ever switching intent without producing a supply-side response
- ServiceTitan's API TOS restriction is a durable barrier to competition from ST-adjacent players

### Validation Approach

The done-for-you track is the validation vehicle for the core data model and field mapping logic before the self-serve track automates it. Each manual done-for-you migration produces verified field mapping data that informs and improves the self-serve extraction pipeline.

**Key assumptions to validate in first 10 migrations:**
- The 3 critical fields account for the majority of migration failures (assumed; needs empirical confirmation)
- Shops' API credentials reliably produce complete 6-object exports (assumed; manual backup path is the fallback)
- Jobber and FieldPulse import wizards reliably accept the generated CSV format without modification (assumed; validate on first 5 imports per destination)

### Risk Mitigation

- **API access revocation**: Manual extraction backup (ST native CSV exports + browser automation) is an MVP requirement, not a Phase 2 feature
- **API TOS enforcement**: The product's public positioning must frame the value as "data portability and backup" rather than explicitly as a "migration off ServiceTitan" tool in API-facing contexts. The marketing and sales messaging can be explicit; the API integration layer should not be.
- **Destination import format changes**: Destination import templates are versioned and can be updated independently of the extraction pipeline

---

## SaaS B2B Specific Requirements

### Product Architecture Overview

Two-track product with shared backend extraction and normalization pipeline:

```
Track A (Self-Serve)          Track B (Done-For-You)
─────────────────────         ──────────────────────
$99 purchase                  Intake form + payment
Account creation              Job assignment to team
API credential input          Secure credential handoff
Self-service extraction       Team-managed extraction
Download output files         Team verification + delivery
Inline import guide           Automated status emails
```

**Shared backend services:**
- ServiceTitan API extraction engine (rate-limit managed, retry logic)
- Manual CSV extraction parser (backup path)
- Data cleaning and normalization pipeline (dedup, address normalization, date standardization, 3-critical-field handlers)
- Destination import template generator (4 destinations × 5 object types = 20 templates)
- Format validation layer
- Verification report generator

### Multi-Tenancy and Isolation

Each migration job (self-serve or done-for-you) runs in complete data isolation:
- Each job is assigned a unique job ID and isolated storage bucket
- Extracted data for Job A is never accessible to any process handling Job B
- Internal team members are granted access to specific jobs they are assigned, not to all jobs

### Payment and Pricing

- Self-serve: $99 one-time, card payment, immediate access post-payment
- Done-for-you: Tiered pricing ($500 ≤500 records, $1,000 ≤2,000 records, $2,000 unlimited + custom fields), paid at intake before work begins
- Payment processor: Stripe (industry standard; well-documented; no PCI compliance scope increase for the platform)
- Refund policy: Full refund if data transfer completeness is <95% as confirmed in verification report

### Integration Requirements

**Primary integration**: ServiceTitan API (source of truth for all extraction)
- API base URL: https://api.servicetitan.io
- Authentication: OAuth 2.0 (preferred) + API key/secret fallback
- Rate limits: 500 requests/minute; exponential backoff required
- Objects: Customers, Locations, Jobs, Invoices, Equipment, Maintenance Agreements

**Secondary integration**: ServiceTitan native CSV exports + browser automation (manual extraction backup path)

**Destination integrations** (import format only — no outbound API calls in MVP):
- Jobber: `customers.csv`, `jobs.csv`, `invoices.csv` format per Jobber import spec
- FieldPulse: unified import format per FieldPulse bulk import spec
- Housecall Pro: `customers.csv`, `job_history.csv` per HCP import spec
- Service Fusion: flat-file import per SF import spec

**Payment**: Stripe Checkout + Stripe webhooks for payment confirmation

**Email**: Transactional email provider (SendGrid or Postmark) for automated status emails

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach**: Revenue-first. The done-for-you service requires minimal automation — it is a manual workflow with software tooling support. This means the first 10 migrations can be completed even if the self-serve automation has rough edges, generating immediate revenue and user feedback. The self-serve extraction automation is validated against real ST data from done-for-you jobs before being exposed to paying self-serve customers.

**MVP Team Required**: 1 developer (backend/full-stack), 1 person with FSM domain knowledge to handle done-for-you migrations during early phases. The developer builds the tooling; the domain expert runs the initial migrations manually using the tooling.

**Build order within MVP** (dependency-ordered):
1. ServiceTitan API extraction engine (everything depends on this)
2. Data cleaning pipeline and 3-critical-field handlers (must be validated before done-for-you service launches)
3. Destination import template generator + format validator (required for first done-for-you delivery)
4. Done-for-you intake form + Stripe payment + credential intake (opens revenue)
5. Admin dashboard for internal job management (enables scale beyond 1-2 simultaneous jobs)
6. Verification report generator (required for "safe to cancel" confirmation)
7. Automated status emails (improves customer experience but not blocking for first jobs)
8. Self-serve extraction UI + $99 purchase flow (last — built on validated extraction pipeline)

### MVP Feature Set (Phase 1 — Weeks 1–5)

**Core User Journeys Supported:** "Trapped Operator" done-for-you (primary), "Budget-Conscious Grower" self-serve (secondary)

**Must-Have Capabilities:**
- ServiceTitan API connection with OAuth + API key support
- 6-object extraction (customers, locations, jobs, invoices, equipment, maintenance agreements)
- API rate limit management (auto-retry with exponential backoff)
- Manual CSV extraction backup path
- Auto-deduplication, address normalization, date standardization
- Preferred-tech assignment mapping, membership expiry normalization, pricebook task code normalization
- Destination CSV template generation: Jobber, FieldPulse, Housecall Pro, Service Fusion
- Destination format validation (pre-import check)
- Verification report with record counts by type
- Pre-cancellation checklist and "safe to cancel" indicator
- Done-for-you intake form with tiered pricing ($500/$1,000/$2,000)
- Stripe payment processing
- Secure credential intake and storage (encrypted, purged post-job)
- Internal admin dashboard: job list, status management, assignment, credential access (audited)
- Automated customer status emails (6 stages)
- Self-serve extraction dashboard ($99 purchase, API credential input, extraction run, file download)
- Inline destination import guide

### Post-MVP Features (Phase 2 — Months 4–9)

- Quarterly backup export subscription ($39/month)
- Direct API push to destination platforms (bypass manual import step)
- Destination platform partner referral tracking
- Case study collection and publishing workflow
- Complex-job workflow enhancements (custom field mapping UI for edge cases)

### Post-MVP Features (Phase 3 — Months 10–18)

- Adjacent source platforms: FieldEdge, Jonas Software, Commusoft
- AI-assisted custom field mapping (LLM-powered mapping of non-standard fields)
- Pre-cancellation risk analysis (data quality scoring before formal cancellation)
- ServiceTitan contract review (ETF calculation, auto-renewal date detection)

### Risk Mitigation Strategy

**Technical risks:**
- ServiceTitan API access revocation → manual extraction backup path (MVP requirement)
- Destination import format changes → versioned templates, easy update path
- Large shop extraction timeouts → async extraction jobs with progress tracking; no synchronous timeouts

**Market risks:**
- Destination platform builds free neutral tool → speed to market; brand authority; FSM-native expertise is not easily replicated
- ServiceTitan improves exit experience → not a priority for ST (retention model depends on lock-in); if they do, the content and community assets remain valuable

**Resource risks:**
- Two-person team → done-for-you service is manually operated; no scale risk in first 3 months; automation investment follows validated demand

---

## Functional Requirements

### ServiceTitan Data Extraction

- **FR1**: Operators can connect to ServiceTitan using OAuth 2.0 credentials
- **FR2**: Operators can connect to ServiceTitan using API key/secret credentials as a fallback
- **FR3**: Operators can initiate a full extraction of all six primary data objects: customers, locations, jobs, invoices, equipment, and maintenance agreements
- **FR4**: Operators can select a subset of data objects to extract (customers only, jobs + invoices only, etc.)
- **FR5**: System handles ServiceTitan API rate limits automatically with exponential backoff and retry — no extraction failure on rate limit alone
- **FR6**: Operators can upload ServiceTitan native CSV exports as a manual extraction backup when API access is unavailable
- **FR7**: System displays real-time extraction progress by object type (percentage complete, record count extracted)
- **FR8**: Operators can view an extraction summary on completion: total records by object type, duration, any skipped records with reasons

### Data Cleaning & Normalization

- **FR9**: System automatically deduplicates customer records based on name, phone number, and address match — flagging duplicates for review rather than silently merging
- **FR10**: Operators can review flagged duplicate customer records and choose to merge or keep as separate
- **FR11**: System normalizes all addresses to USPS-compliant format (standardized abbreviations, ZIP+4 when available)
- **FR12**: System standardizes date formats across all extracted objects to ISO 8601 (YYYY-MM-DD)
- **FR13**: System maps preferred-technician assignments from ServiceTitan internal tech IDs to human-readable technician names
- **FR14**: System converts maintenance agreement and membership expiry dates from ServiceTitan's proprietary storage format to ISO 8601
- **FR15**: System includes human-readable pricebook task descriptions alongside internal task codes in extracted data, enabling destination-platform re-mapping
- **FR16**: System generates a data quality report flagging records that require manual review (failed address normalization, missing required fields, unmapped pricebook codes)
- **FR17**: Operators can manually override or correct individual flagged records before generating destination import files

### Destination Import Generation

- **FR18**: Operators can generate import-ready CSV files formatted for Jobber's bulk import specification
- **FR19**: Operators can generate import-ready CSV files formatted for FieldPulse's import specification
- **FR20**: Operators can generate import-ready CSV files formatted for Housecall Pro's import specification
- **FR21**: Operators can generate import-ready CSV files formatted for Service Fusion's import specification
- **FR22**: System validates generated CSV files against destination platform format requirements before making them available for download — reporting field count errors, missing required fields, and format violations
- **FR23**: Operators can download all generated destination import files as a ZIP archive
- **FR24**: System displays inline, step-by-step import instructions specific to the chosen destination platform alongside the download

### Migration Verification

- **FR25**: System generates a verification report showing: record counts by object type, counts of records with data quality issues, the 3-critical-field handling summary (tech mappings applied, expiry dates normalized, pricebook codes included), and any records excluded or flagged
- **FR26**: System displays a "safe to cancel" indicator when: all 6 object types have been extracted, verification report has been generated, and no critical data quality issues remain unresolved
- **FR27**: Operators can view a pre-cancellation checklist confirming all required steps before formally cancelling ServiceTitan
- **FR28**: System supports an optional "verify before cancel" confirmation step where the customer explicitly marks each data type as confirmed in the destination platform

### Done-For-You Service

- **FR29**: Prospective customers can submit a done-for-you migration request via intake form collecting: company name, company size (tech count), ServiceTitan tenure, estimated record count, destination platform choice, and special concerns (custom fields, legacy data issues)
- **FR30**: Customers can select a pricing tier at intake: $500 (≤500 customer records), $1,000 (≤2,000 records), $2,000 (unlimited + custom field mapping)
- **FR31**: Customers can pay for done-for-you migration via card at intake using Stripe Checkout
- **FR32**: Customers can submit ServiceTitan API credentials or CSV exports via a secure credential intake form after payment
- **FR33**: Customers can track migration job status through 6 stages: Received → Extracting → Cleaning → Mapping → Verifying → Complete
- **FR34**: System sends automated status emails to customers at each job stage transition
- **FR35**: Customers can view and download their verification report when the job reaches the Verifying stage
- **FR36**: Customers can confirm data completeness and trigger the final "Complete" status transition

### Internal Job Management (Admin)

- **FR37**: Internal team members can view all active migration jobs in an admin dashboard organized by status
- **FR38**: Internal team members can assign jobs to specific team members and track assignment
- **FR39**: Internal team members can flag jobs as "Complex" (requiring custom field mapping or special handling) with a reason note
- **FR40**: Internal team members can access the ServiceTitan credentials for a specific job through an audited workflow — access event is logged with timestamp and team member identity
- **FR41**: System automatically purges customer credentials within 24 hours of job completion and records the purge event in the audit log
- **FR42**: Internal team members can manually trigger each stage transition and add notes visible to the customer

### Self-Serve Purchase & Access

- **FR43**: Customers can purchase self-serve export access for $99 via Stripe Checkout
- **FR44**: Customers can create an account to retain access to their extraction output and order history
- **FR45**: Customers can initiate a self-serve extraction using their ServiceTitan API credentials through a guided 3-step UI
- **FR46**: Customers can download their generated destination import files from their account dashboard
- **FR47**: Customers can re-run an extraction using previously entered credentials (re-extraction without re-entering credentials)

---

## Non-Functional Requirements

### Performance

- Self-serve extraction completes in ≤10 minutes for shops with up to 2,000 customer records (typical shop size)
- Self-serve extraction completes in ≤30 minutes for shops with up to 10,000 customer records (large shop)
- Destination CSV file generation completes in ≤60 seconds after extraction
- Admin dashboard loads job list in ≤2 seconds with up to 100 active jobs
- Stripe payment flow completes in ≤5 seconds (Stripe-side); success/failure confirmation displayed to user in ≤3 seconds of payment submission

### Security

- ServiceTitan API credentials are encrypted at rest using AES-256 and never stored in plaintext — this is a hard, non-negotiable requirement
- All data transmitted between client and server uses TLS 1.2 or higher
- Credentials are accessible only through the audited admin workflow; no raw credential display in any UI, log, or error message
- Customer PII extracted from ServiceTitan (names, addresses, phone numbers) is stored in isolated per-job storage, not in shared application tables
- Each job's isolated storage is purged within 7 days of job completion
- Self-serve extraction output files are generated on-demand and not persisted server-side beyond the active session
- Authentication for the admin dashboard requires 2-factor authentication for all internal team members
- Stripe webhook endpoints validate Stripe signature headers before processing any payment event
- Penetration testing required before public launch (can use self-testing or a third-party tool)

### Reliability

- Data migration completeness: ≥98% of records transferred without data loss (measurable via verification report comparison)
- Generated destination import files must pass format validation on first import attempt for ≥90% of users (measure via self-serve user support tickets)
- API extraction failures due to ServiceTitan-side errors (5xx responses) must trigger automatic retry with backoff — maximum 3 retries before surfacing an error to the user with guidance to try manual extraction
- System must be capable of running up to 20 concurrent extraction jobs without degradation

### Scalability

Initial scale requirements are modest (10 jobs/month in Month 3 → 100/month in Month 12). Architecture must support:
- 10 concurrent done-for-you extractions without job interference or data bleed
- 50 concurrent self-serve extractions without timeout or queue failure
- Storage scaling: each job produces ~500MB of raw extracted data for a typical 2,000-record shop; architecture must handle this without manual capacity management

### Reliability & Availability

- Uptime target: ≥99.5% during business hours (8am–8pm ET, Monday–Friday)
- Self-serve extraction jobs must be resumable if interrupted (not restart from zero); use checkpoint-based extraction
- Done-for-you job state must be durable — a server restart must not lose job status or progress

---

*PRD completed: 2026-11-08*
*Next recommended step: Architecture — this PRD provides the foundation for technical architecture decisions, tech stack selection, data model design, and API specifications.*

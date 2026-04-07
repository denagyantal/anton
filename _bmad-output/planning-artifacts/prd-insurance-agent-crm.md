---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/insurance-agent-crm-policy-tracker.md
  - _bmad-output/planning-artifacts/market-research-insurance-agent-crm-policy-tracker.md
  - _bmad-output/planning-artifacts/brief-insurance-agent-crm-policy-tracker.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: insurtech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — AgentPad

**Author:** Root (Automated Pipeline)
**Date:** 2026-04-07
**Product:** AgentPad — Insurance Agent CRM & Policy Tracker
**Pipeline Score:** 91/105 (Tier 1 Strong Opportunity)

---

## Executive Summary

Independent P&C insurance agencies with 1–10 agents lack an affordable, insurance-native CRM. The dominant tool (EZLynx) charges $450–600/month for 3 users, carries a 3.3/5 support rating, and generates active community complaints. Enterprise alternatives (Applied Epic, AMS360) cost $1,500–$15,000/month with $10–25K setup fees. Generic CRMs (HubSpot, Zoho) are unaware of insurance concepts — they don't understand policies, carriers, ACORD forms, or renewal cycles. The result: agents pay for tools they despise, revert to spreadsheets for critical workflows, and spend 57% of their day on admin instead of selling.

**AgentPad** is a flat-fee, insurance-native CRM at $79/month for up to 5 agents. It delivers the four workflows that consume agents' days — renewal automation, multi-carrier commission tracking, ACORD form auto-fill, and client/policy management — in a single modern product at 85–90% below incumbent pricing.

**Target users:** Independent P&C agencies with 1–10 agents, writing personal and/or commercial lines. 39,000 such agencies operate in the US, writing 61.5% of all P&C premiums.

**Launch path:** $99 lifetime deal on AppSumo to seed 300–500 paying customers and reviews, then transition to $79/month MRR. Conservative 5% market penetration = $1.8M ARR.

### What Makes This Special

**Flat-fee pricing unlocks a locked market.** No insurance-specific product exists at $49–99/month flat-fee. A 3-agent agency pays $79/month vs. $450–600/month on EZLynx — the math sells itself, and no convincing is required.

**Insurance-native data model.** AgentPad is built around the policy lifecycle (lead → quote → bind → service → renew), not generic CRM objects. It understands carriers, ACORD form types, premium amounts, effective dates, and renewal cycles out of the box. Generic CRMs retrofitted for insurance always leak — field names don't match, workflows are wrong, and agents end up maintaining parallel spreadsheets anyway.

**Renewal automation as the product core, not a feature.** The renewal dashboard is the first thing agents see every morning. Automated outreach sequences fire without agent intervention. This directly attacks the #1 documented pain point from Vertafore's 2,000-respondent 2024 survey.

**Commission reconciliation unavailable in the affordable tier.** No competitor under $149/month offers multi-carrier commission statement matching. The closest standalone tools (Core Commissions, Commission Tracker) add additional monthly cost. AgentPad includes it at $79/month.

**First-mover AppSumo presence in the category.** Zero insurance-specific AMS/CRM products on AppSumo today. First credible entrant captures first-mover reviews, Sumo-ling word-of-mouth, and a permanent category anchor.

## Project Classification

- **Project Type:** SaaS B2B — cloud-based web application with multi-user agency accounts
- **Domain:** InsurTech / Financial Services — adjacent to financial data (commission revenue), industry-specific document formats (ACORD), and professional services compliance
- **Complexity:** Medium — no clinical/patient data, no payment processing of insurance premiums, but handles commission financials, PII (client data), and industry-regulated document formats
- **Project Context:** Greenfield — no existing codebase; new product targeting established market with legacy incumbents

---

## Success Criteria

### User Success

**Primary "aha!" moment:** The first automated renewal email sent to a client without agent intervention. Onboarding must drive every user to this moment within their first session.

**Renewal automation success:**
- ≥80% of policies expiring within 90 days have automated outreach scheduled within 14 days of account creation
- Agents report ≥50% reduction in manual renewal follow-up time at 30-day survey
- ≥60% of customers activate renewal automation within 14 days of signup

**Commission reconciliation success:**
- Agents complete monthly commission reconciliation in <2 hours for agencies with ≤10 carrier relationships (vs. reported baseline of 4–8 hours)
- ≥95% of commission statement line items matched automatically for carriers with consistent statement formats
- ≥40% of customers upload at least one commission statement within 30 days of signup

**Data migration success:**
- ≥70% of new customers complete CSV import of their existing policy book within 48 hours of signup
- Import process completes in <60 minutes for a book of up to 1,000 policies

**ACORD form success:**
- Agents generate a completed ACORD form PDF from system data in <3 minutes
- ≥95% auto-fill accuracy for policies with complete client and policy records

**Weekly engagement:**
- ≥60% of active subscribers log in ≥3 times per week at 90 days
- Net Promoter Score ≥50 at 45 days post-signup (vs. EZLynx baseline ~15)

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| LTD customers acquired | ≥200 | 60 days post-AppSumo launch |
| AppSumo refund rate | ≤12% | 60-day refund window |
| NPS (LTD cohort) | ≥40 | 45 days post-purchase |
| Capterra/G2 reviews | ≥20, avg ≥4.0/5 | 90 days post-launch |
| Monthly churn (MRR phase) | ≤5% | First 3 MRR months |
| 12-month ARR | $400K | 12 months post-launch |
| 24-month paying customers | 2,000 | 24 months post-launch |
| 24-month ARR | $1.8M | 24 months post-launch |

### Technical Success

- Page load times for renewal dashboard and commission views <2 seconds at p95 under normal load
- Uptime ≥99.5% measured monthly (downtime during business hours triggers agent workflow disruption)
- Commission statement upload and processing completes in <5 minutes for files up to 10MB
- ACORD PDF generation completes in <10 seconds
- Zero data loss on policy import or commission statement processing
- All client PII encrypted at rest and in transit

### Measurable Outcomes

**Transition gate from LTD to MRR growth focus (90 days):**
- All gate metrics must be met before shifting budget from LTD acquisition to MRR conversion campaigns
- Gate failure on any single metric triggers investigation before proceeding

**Leading indicators (weekly monitoring):**
- AppSumo review count and refund rate (first 60 days)
- "Time to first automated renewal email sent" per cohort
- Commission statement upload rate
- Insurance Forums / Reddit mention sentiment

---

## Product Scope

### MVP Strategy

**MVP Approach:** Problem-solving MVP. Deliver the four workflows agents spend the most documented time on. Prove that the right tool at the right price point creates a large, underserved, defensible market. Not a platform play — a wedge that earns the right to expand.

**MVP Resource Requirements:** 1–2 full-stack engineers, 4–5 weeks to launch. No carrier API integrations, no mobile app, no e-signature. Email-only outreach, PDF download only.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Solo agent: import book → set up renewal automation → send first automated renewal email → manage policies daily
- Agency principal: team access → commission reconciliation → renewal oversight across producers
- CSR: daily client lookup → ACORD form generation → commission statement upload

**Must-have capabilities:**
1. Renewal dashboard — visual pipeline of expiring policies by 90/60/30-day windows
2. Automated email outreach — configurable sequences triggered at policy expiration milestones
3. Renewal status tracking — mark policies as Renewed, Not Renewing, In Progress, Awaiting Client Response
4. Client and policy management — insurance-native data model with CSV import from EZLynx/AMS360 exports
5. Multi-carrier commission tracking — CSV/PDF/Excel statement upload, automated policy matching, discrepancy flagging
6. Expected vs. received commission tracking — configurable rate schedules per carrier, deviation alerts
7. ACORD form library — top 15–20 personal and commercial lines forms with auto-population from system data
8. PDF generation and download — filled ACORD forms, commission reconciliation reports
9. Multi-user agency access — Solo (1 user), Agency (5 users), Team (15 users) with role-based access
10. Stripe billing — monthly/annual plans plus LTD code redemption
11. Full data export on cancellation — no lock-in

### Post-MVP Features

**Phase 2 (Months 6–18):**
- Direct IVANS integration for real-time policy data sync with major carriers
- Chrome extension for carrier portal auto-fill from AgentPad data
- E-signature workflow via DocuSign/HelloSign for ACORD forms
- Native SMS renewal outreach via Twilio
- AI-powered commission statement OCR for non-text-extractable PDFs
- Automated carrier commission feed for carriers with IVANS connectivity

**Phase 3 (Months 18–36):**
- Predictive renewal risk scoring (propensity to shop or lapse)
- AI-assisted ACORD form completion from uploaded application documents
- Cross-agency benchmarking dashboard
- Mobile app (iOS/Android)
- White-label for MGA distribution
- Carrier-sponsored access model

### Risk Mitigation Strategy

**Technical risks:**
- Commission statement format variability → ship with community-contributed carrier templates; fallback to manual upload with pre-filled carrier metadata
- ACORD form maintenance burden → join ACORD member program; quarterly form update cycle; version history for generated forms

**Market risks:**
- Momentum AMP undercuts on pricing post-rebrand → move fast; build AppSumo reviews before Momentum brand settles; AppSumo first-mover reviews create switching costs
- Data migration complexity kills conversion → invest in EZLynx CSV import + migration guide on day 1; offer concierge import for first 50 LTD customers

**Resource risks:**
- Reduce to Renewal Dashboard + Client/Policy Management if timeline at risk; commission tracking and ACORD forms are strong retention drivers but renewal automation alone justifies the pricing vs. alternatives

---

## User Journeys

### Journey 1: Sarah — Solo Agent, Escaping EZLynx

**Opening scene:** Sarah is 38, has been independent for 3 years, and manages 280 active P&C policies alone. She pays $350/month for EZLynx and has been on hold with their support twice this month. Her renewal tracking system is a Google Sheet she updates manually every Sunday night. She missed a renewal follow-up last quarter and lost a client who said a competitor "reached out first." She's searching "EZLynx alternative independent agent" at 10pm after another frustrating support call.

**Rising action:** She finds a recommendation on Insurance Forums or r/InsuranceAgent. Signs up for AgentPad. The onboarding flow prompts her to download her EZLynx data as a CSV — a step she's done before for other attempts. She uploads it. The import wizard maps her carrier names, policy types, and expiration dates. 180 of her 280 policies import cleanly in 8 minutes; 100 need field mapping she completes in another 12.

She navigates to the Renewal Dashboard for the first time. She sees 14 policies expiring in the next 30 days, 31 in the next 60 days, and 47 in the next 90 days. The dashboard shows no automated outreach is scheduled. She clicks "Set Up Renewal Sequences" and configures a 90-day email, 60-day email, and 30-day call reminder. The system asks which policies to activate on — she selects all 92 expiring in the next 90 days. She clicks Activate.

**Climax:** 48 hours later, she logs in and sees "14 renewal emails sent automatically." She opens one — it's the 60-day template she customized with her agency name and logo. She didn't do anything. The client replies to one email within hours: "Thanks for reaching out! Let's talk next week." This client would have received nothing for another 3 weeks on her old system.

**Resolution:** Sarah's new reality — she checks the renewal dashboard for exceptions, not to create work. She handles the 3 policies that need personal attention (complex commercial, a client in dispute) and ignores the 11 on auto-pilot. Her Saturday commission reconciliation ritual takes 90 minutes instead of 4 hours. She posts about it on r/InsuranceAgent. Three agents DM her within a week.

**Journey requirements revealed:**
- CSV import with EZLynx field mapping
- Renewal dashboard with 90/60/30-day timeline view
- Automated email sequence setup with customizable templates
- Renewal sequence activation across full or partial book
- Automated send confirmation and audit log

---

### Journey 2: Marcus — Agency Principal, Cutting the Stack

**Opening scene:** Marcus is 51, runs a 4-agent P&C agency in Ohio, and pays $1,600/month across EZLynx + AgencyZoom + a commission spreadsheet his CSR Jennifer manages. He evaluated Momentum AMP last quarter but didn't switch because "migration is terrifying." A competitor shorted his agency $2,300 in commissions last quarter — Jennifer discovered it by accident, 6 weeks after it happened. He's at a Big "I" chapter meeting and hears two other agency principals mention the same software.

**Rising action:** He signs up for AgentPad's Agency plan. His CSR Jennifer handles the import — 1,200 policies, imported from EZLynx in two CSV batches over 2 days. Marcus assigns his 3 producers to the system with Producer roles. He sets up each producer's renewal sequences.

He uploads the first carrier commission statement (PDF from Progressive). The system extracts 847 line items and matches 821 to policies automatically. 26 items are flagged: 14 unmatched (policy numbers not found — new policies not yet imported), 12 underpayments where received commission is >5% below expected. He clicks through the underpayments — two carriers owe a combined $340 more than they paid.

**Climax:** Marcus is on the phone with one carrier's agent services line with specific policy numbers and expected vs. received amounts already formatted in a PDF. The carrier rep checks their system and confirms the error. $340 correction is processed the same day. "This never happened before because we never knew to look," he tells Jennifer.

**Resolution:** Marcus cancels EZLynx, pauses AgencyZoom (no replacement for sales pipeline yet, but commission and renewal management are now covered). He's paying $79/month vs. $1,600/month. Jennifer's Monday morning ritual — previously 3 hours of commission spreadsheet updates — now takes 45 minutes. New producer onboarding is "log into AgentPad, here are your 5 renewal sequences, go."

**Journey requirements revealed:**
- Multi-user agency access with role-based permissions (Principal, Producer, CSR)
- Commission statement upload with automated line-item matching
- Expected vs. received tracking with configurable deviation thresholds
- Discrepancy flagging with policy-level detail and PDF export
- Producer-level renewal dashboard assignment

---

### Journey 3: Jennifer — CSR, the Power User Who Determines Adoption

**Opening scene:** Jennifer is 42, Marcus's CSR for 7 years, and the person who lives in whatever AMS Marcus buys. When Marcus migrated to EZLynx 4 years ago, Jennifer learned it in a week and became the de facto expert. Now she's learning AgentPad. Her criteria for whether this succeeds: "Does it actually reduce my work, or just move it somewhere else?"

**Rising action:** Jennifer completes the policy import, cleans up unmapped fields, and builds the carrier commission rate schedules in the system (commission rates per carrier, per policy type). She uploads the first three carrier statements. The auto-matching impresses her — she was expecting to spend two days reconciling; the system handles 95% automatically.

She gets a live client call while the reconciliation is processing. A client is disputing a policy change from 6 months ago. Jennifer searches the client's name — the full policy history, communication log, and coverage summary are in one view. She finds the change note in 8 seconds. She's used to spending 3–5 minutes digging through EZLynx for this.

She generates an ACORD 125 for a commercial account renewal quote. She selects the policy, picks the form, reviews the auto-filled PDF — 94% of fields are correct, she adjusts 3 and downloads the PDF. Total time: under 3 minutes.

**Climax:** End of month. Commission reconciliation report is ready in 2 hours rather than the 8 hours she dreaded. She shows Marcus the discrepancy list. They catch $340 in underpayments that would have gone unnoticed.

**Resolution:** Jennifer is no longer the single point of failure for commission knowledge. The system holds the carrier rate schedules and reconciliation history. When Marcus hires a new CSR next year, onboarding takes 4 hours, not 3 weeks.

**Journey requirements revealed:**
- Client search returning full policy history and communication log in one view
- ACORD form auto-fill with inline edit before PDF generation
- Carrier commission rate schedule management
- Reconciliation report generation with discrepancy detail
- Audit trail for who modified what and when

---

### Journey 4: New Producer — Onboarding and Ramping

**Opening scene:** Jake is 27 and just joined Marcus's agency as a new producer. His previous experience was at a captive carrier with a single internal system. He's never used an independent AMS. Marcus gives him a 1-hour onboarding meeting and access to AgentPad.

**Rising action:** Jake logs in. His dashboard shows the 60 policies he's been assigned (existing accounts from a retiring producer). He sees 12 expiring in the next 60 days with renewal sequences already active. He reviews the client detail for his 5 highest-premium accounts. He can see the policy history, carriers, coverage types, and all previous renewal outreach in one view.

**Climax:** Jake handles his first renewal call without asking Marcus for help — all the policy and client context he needs is in the system. He marks the policy "In Progress - awaiting client response" and sets a follow-up reminder. He generates an ACORD 130 for a new commercial account without asking Jennifer — he selects the template, reviews the auto-fill, and emails the PDF directly from the system.

**Resolution:** Marcus notices Jake is operating independently after 2 weeks instead of the typical 6. The onboarding overhead Marcus dreaded from previous hires doesn't materialize. Jake becomes a reference case for "the system teaches itself."

**Journey requirements revealed:**
- Assigned policy view per producer
- Renewal status update and manual follow-up note creation
- ACORD form selection and generation accessible to Producer role
- PDF email delivery directly from form view (or download + email manually as MVP fallback)

---

### Journey 5: Admin — Agency Configuration and Oversight

**Opening scene:** Marcus (as Agency Principal/Admin) needs to set up the agency account, onboard team members, configure branding for outreach emails, and monitor the agency's overall renewal performance.

**Rising action:** Marcus sets up the agency profile — logo, agency name, reply-to email address. He invites his 3 producers and 1 CSR with appropriate roles. He configures the 4 default renewal email templates with the agency brand. He assigns policies to producers. He reviews the agency-level renewal dashboard showing all 1,200 policies across all producers.

**Climax:** At month-end review, Marcus pulls the renewal report. He can see by producer which renewals are active, pending, completed, or lapsed. He identifies that one producer has 3 policies in "Awaiting Client Response" for more than 14 days — he follows up.

**Resolution:** Marcus has agency-level visibility without needing to ask each producer for a status update. The system replaces his weekly "what's your renewal pipeline?" producer meeting.

**Journey requirements revealed:**
- Agency setup with branding (logo, name, reply-to)
- User invitation with role assignment
- Agency-level renewal dashboard aggregating all producers
- Producer-level renewal performance summary

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Sarah — Solo onboarding | CSV import, renewal dashboard, automated email sequence setup, renewal status tracking |
| Marcus — Commission reconciliation | Multi-user access, commission statement upload, automated matching, discrepancy flagging, PDF export |
| Jennifer — CSR power user | Client search with full history, ACORD form auto-fill, carrier rate schedule management, reconciliation report |
| Jake — New producer ramp | Assigned policy view, renewal status update, ACORD form access by Producer role |
| Marcus — Admin oversight | Agency branding, user invitation, agency-level renewal dashboard, producer performance view |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**Insurance regulations (state-level):** AgentPad is a CRM/workflow tool, not a rater or carrier portal — it does not bind coverage, quote premiums, or process payments on behalf of insurers. This classification avoids most state insurance licensing requirements for software. Confirmed: ACORD forms are standardized industry documents; generating pre-filled PDFs for agent use does not trigger regulatory approval requirements.

**ACORD form compliance:** AgentPad must maintain current ACORD form versions. ACORD publishes form updates periodically; outdated forms can be rejected by carriers. Required: ACORD member program enrollment; form version tracking; minimum quarterly review cycle.

**Data retention:** Insurance agencies have state-mandated record retention requirements (typically 5–7 years for policy records). AgentPad must not delete policy or client data for accounts in good standing; cancellation must offer full data export before deletion.

**Commission revenue:** Commission data is financial in nature. Reconciliation reports may be used as supporting documentation for carrier disputes or accounting purposes. Accuracy and auditability of commission records are business-critical, not just UX-critical.

### Technical Constraints

**PII protection:** Client data (name, address, phone, DOB, SSN in some fields) is PII. All client data must be encrypted at rest. Access restricted by role — Producers see their assigned clients only by default.

**Financial data integrity:** Commission statement data must be immutable after reconciliation sign-off. Audit log must track who uploaded each statement, when, and what changes were made to manual overrides.

**Access control:** Multi-tenant architecture — data from Agency A must never be accessible to Agency B. Row-level security enforced at the database level, not only at the application layer.

**Data portability:** Agents own their data. Full export (clients, policies, commissions, forms history) available at any time, not only on cancellation. CSV export format compatible with EZLynx/AMS360 for portability.

### Integration Requirements

**Commission statement ingestion:** Must support CSV, Excel (.xlsx), and text-extractable PDFs as input formats. Carrier statement formats vary; the system must support user-defined column mapping per carrier template. At minimum, pre-built templates for the top 10 personal lines carriers by premium volume (State Farm, Allstate, GEICO-independent programs, Progressive, Travelers, Liberty Mutual, Nationwide, Farmers, USAA-affiliated, Erie).

**Email delivery:** Automated renewal outreach uses transactional email (SendGrid or equivalent). Delivery rates and bounce handling tracked per campaign. Agents can use custom reply-to addresses for their agency.

**Payment processing:** Stripe for subscription billing. No insurance premium processing — AgentPad does not touch carrier payment flows.

### Risk Mitigations

**ACORD form version drift:** Assign one person (or automated check against ACORD's published changelog) to review form updates quarterly. Store form version numbers in generated PDFs for auditability.

**Carrier statement format changes:** When a carrier changes their statement format, existing templates break. Mitigations: community-contributed template library; fallback manual matching workflow; email alerts to affected accounts when a statement fails to parse.

**Single-user commission knowledge dependency:** The product itself is the mitigation — replacing the "one CSR with a spreadsheet no one else understands" anti-pattern is a core value proposition, not just a feature.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Category-defining pricing model:** AgentPad is not a technical innovation — it's a market innovation. No flat-fee insurance-native product exists below $99/month. The innovation is the deliberate decoupling of value (four critical workflows) from per-user pricing (the industry default). Flat-fee for teams is structurally different from per-seat SaaS in this vertical and creates a defensible positioning anchor.

**Integrated commission + renewal + ACORD in one tool:** Competitors address each workflow in isolation (AgencyZoom for sales, EZLynx for policy management, Core Commissions for reconciliation). AgentPad's innovation is the workflow integration — a commission discrepancy links directly to the affected policy, which links directly to the renewal timeline for that client.

**AppSumo-first go-to-market in an AppSumo-absent vertical:** Zero insurance AMS/CRM products on AppSumo today. The GTM innovation is applying the LTD-to-MRR playbook to a professional vertical where it has not been attempted.

### Market Context & Competitive Landscape

The incumbents' moat is switching cost, not product quality. EZLynx's negative sentiment is well-documented and growing (Florida Facebook complaint group, Insurance Forums "EZLynx hell" threads, 3.3/5 support rating). The November 2024 Momentum AMP rebrand has created active pricing confusion and churn events among the affordable tier. The window is open.

AgentPad's competitive advantage is speed-to-market + AppSumo first-mover + flat-fee pricing. The technical differentiator is the insurance-native data model and ACORD form library — both require domain knowledge that generic CRMs won't invest in for a niche market.

### Validation Approach

**LTD cohort as validation engine:** 200 LTD customers at $99 provide 60-day refund window data, NPS at 45 days, and Capterra/G2 review seed. If refund rate ≤12% and NPS ≥40, the core value proposition is validated.

**Commission reconciliation adoption as stickiness signal:** If ≥40% of customers upload at least one commission statement within 30 days, commission reconciliation is a retention driver (not just a marketing differentiator). This gates Phase 2 investment in carrier API integrations.

### Risk Mitigation

**Market risk:** If Momentum AMP resolves pricing confusion and re-enters the affordable tier at $79/month flat, AgentPad competes on product quality, UX, and ACORD form coverage. AppSumo reviews and Insurance Forums recommendations create word-of-mouth defensibility.

**Innovation risk:** The workflow integration (commission → policy → renewal in one view) is unproven UX for this audience. Mitigate by releasing renewal automation independently and adding commission + ACORD later if data shows adoption is sequential rather than simultaneous.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

AgentPad is a multi-tenant SaaS B2B application with team-level accounts. Each agency is a tenant. Within each tenant, users have role-based access (Principal, Producer, CSR). Billing is at the tenant level (per agency, not per user). The product serves professional knowledge workers (insurance agents) who use it as their daily operational tool, not a periodic workflow tool.

### Technical Architecture Considerations

**Multi-tenancy:** Row-level security enforced at the database level. Tenant isolation must be guaranteed — no cross-tenant data leakage under any query path.

**File processing pipeline:** Commission statement ingestion involves file upload, format detection, parsing, column mapping (user-confirmed or template-matched), and line-item processing. This pipeline must handle files up to 50MB, support async processing for large files (>1,000 line items), and surface parsing errors gracefully without crashing the session.

**PDF generation:** ACORD forms are populated server-side and returned as PDFs. Form rendering must be pixel-accurate (carrier rejections for format deviations are a real-world risk). Use a server-side PDF library with form overlay capability (e.g., pdf-lib, PDFtk, or equivalent).

**Email delivery:** Transactional email via SendGrid or Postmark. Per-agency sending domain support (reply-to customization). Bounce and unsubscribe handling tracked per client.

### Tenant Model

- **Agency = Tenant.** Each agency has its own isolated data environment.
- **Subscription = Tenant-level.** Billing, plan limits, and LTD codes are per agency.
- **Users within a tenant** share access to agency data, governed by roles.
- **Data isolation** enforced at query layer — no shared tables without tenant_id filtering.

### Permission Matrix

| Action | Principal | Producer | CSR |
|--------|-----------|----------|-----|
| Manage agency settings, branding | ✅ | ❌ | ❌ |
| Invite/remove users | ✅ | ❌ | ❌ |
| View all policies (agency-wide) | ✅ | ❌ (assigned only) | ✅ |
| Edit client/policy records | ✅ | ✅ (assigned) | ✅ |
| Configure renewal sequences | ✅ | ✅ (their sequences) | ✅ |
| Upload commission statements | ✅ | ❌ | ✅ |
| View/export commission data | ✅ | ❌ | ✅ |
| Generate ACORD forms | ✅ | ✅ | ✅ |
| Manage billing/subscription | ✅ | ❌ | ❌ |
| Export all data | ✅ | ❌ | ❌ |

### Implementation Considerations

**CSV import resilience:** EZLynx and AMS360 exports are not consistent across accounts. The import wizard must support custom column mapping (user maps source columns to AgentPad fields) with field-by-field preview before commit. Partial imports (rows with missing required fields) must surface clearly with a per-row error report, not a silent failure.

**Commission statement templating:** Build a carrier template library that stores the column mapping for each carrier. On upload, attempt to auto-detect the carrier and apply the template. Allow users to confirm, override, or create a new template. Templates are per-agency (private) or optionally shared with the community (public).

**Renewal sequence scheduling:** Sequences are triggered relative to policy expiration date (e.g., "send email 90 days before expiration"). The scheduler must process all active policies nightly and queue outreach for policies crossing a threshold the following day. Must handle policy expiration date changes (re-queue) and manual suppression (do-not-contact flag per policy or client).

**ACORD form library management:** Store form definitions as templates (field mappings from AgentPad data model to ACORD field names). Launching with 15–20 forms. Form templates must be versioned — when ACORD updates a form, existing generated-form history references the version at time of generation.

---

## Functional Requirements

### Client & Policy Management

- **FR1:** Agents can create client records with fields for name, contact information, address, and agency-defined custom tags.
- **FR2:** Agents can create policy records linked to a client, with fields for carrier, policy number, policy type (auto/home/renters/commercial/life/umbrella), effective date, expiration date, annual premium, and coverage summary.
- **FR3:** Agents can view a client's full record — all linked policies, communication log entries, generated forms, and policy status history — from a single client detail view.
- **FR4:** Agents can search clients by name, phone, email, or policy number; filter by carrier, policy type, status, and expiration date range.
- **FR5:** Agents can log communication entries (call, email, meeting, note) against a client or specific policy with timestamp and agent attribution.
- **FR6:** Agents can update policy status through the lifecycle: Active, Expired, Cancelled, Non-Renewed, Pending.
- **FR7:** Agents can import client and policy records via CSV with a column-mapping wizard that supports EZLynx and AMS360 export formats and custom field mapping.
- **FR8:** Principals can export all agency data (clients, policies, communications, forms history, commission records) as CSV at any time.

### Renewal Automation

- **FR9:** Agents can view a renewal dashboard displaying all active policies expiring in the next 90, 60, and 30 days, sortable by carrier, producer, policy type, and premium.
- **FR10:** Agents can configure renewal outreach sequences — defining email templates and trigger days-before-expiration for each step (e.g., 90-day email, 60-day email, 30-day reminder).
- **FR11:** Agents can activate renewal sequences across all expiring policies in a date range, a filtered subset, or individual policies.
- **FR12:** The system sends scheduled renewal outreach emails automatically at configured intervals without agent intervention, using the agency's reply-to address.
- **FR13:** Agents can view the outreach status per policy (scheduled sends, sent with timestamp, client responses received).
- **FR14:** Agents can update renewal status per policy (Renewed, Not Renewing, In Progress, Awaiting Client Response) and suppress automation for specific policies.
- **FR15:** Agents can create and edit renewal email templates with agency branding (name, logo, reply-to address) and merge fields for client name, policy type, expiration date, and carrier.

### Commission Tracking

- **FR16:** Agents (Principal and CSR roles) can upload carrier commission statements in CSV, Excel (.xlsx), or text-extractable PDF formats.
- **FR17:** The system parses uploaded commission statements and presents a column-mapping interface to assign carrier statement columns to AgentPad fields (policy number, commission amount, payment date, policy type).
- **FR18:** The system automatically matches statement line items to policy records by policy number and presents matched/unmatched breakdowns for agent review.
- **FR19:** Agents can configure expected commission rate schedules per carrier and policy type (e.g., "Progressive auto: 12% of written premium").
- **FR20:** The system flags line items where received commission deviates from expected by a user-configured threshold (dollar amount or percentage).
- **FR21:** Agents can view a commission reconciliation summary per carrier per month, showing total expected, total received, matched items, unmatched items, and flagged discrepancies.
- **FR22:** Agents can export monthly commission reconciliation reports as PDF, including itemized discrepancy detail suitable for carrier dispute documentation.
- **FR23:** Agents can save carrier statement column mappings as reusable templates, with optional sharing to a community template library.
- **FR24:** Agents can manually override matched amounts and add resolution notes for flagged discrepancies (marking as "resolved," "pending carrier response," or "write-off").

### ACORD Form Management

- **FR25:** Agents can browse a library of ACORD forms filtered by form type (personal lines, commercial lines) and select a form to fill for a specific policy.
- **FR26:** The system auto-populates selected ACORD form fields from the linked client and policy record data, achieving ≥95% fill accuracy for fully populated policy records.
- **FR27:** Agents can review and edit auto-populated ACORD form fields before generating the final PDF.
- **FR28:** Agents can generate a filled ACORD form as a downloadable PDF with form version number and generation timestamp embedded.
- **FR29:** Agents can view a history of all ACORD forms generated for a policy, with generation date, form version, and generating agent.
- **FR30:** Agents can email a generated ACORD form PDF directly to a client or carrier from within the system (MVP: pre-populated mailto link or manual download; Phase 2: in-app email send).

### Agency & User Management

- **FR31:** Principals can invite team members by email and assign roles (Principal, Producer, CSR).
- **FR32:** Principals can configure agency profile settings: agency name, logo, reply-to email address for renewal outreach.
- **FR33:** Principals can view an agency-level renewal dashboard aggregating all policies and producers, with filtering by producer.
- **FR34:** Principals can assign policies to specific producers and reassign between producers.
- **FR35:** The system enforces role-based access: Producers view only their assigned policies; CSRs and Principals view all agency policies.
- **FR36:** The system maintains an audit log of all record creation, modification, and deletion events with user attribution and timestamp.

### Billing & Subscription

- **FR37:** Agencies can subscribe to Solo ($49/month, 1 user), Agency ($79/month, up to 5 users), or Team ($129/month, up to 15 users) plans.
- **FR38:** Agencies can redeem AppSumo LTD codes to activate lifetime Agency plan access.
- **FR39:** Agencies can upgrade or downgrade their plan with immediate effect; prorated billing handled by Stripe.
- **FR40:** Agencies can view billing history, update payment method, and cancel subscription via self-serve account settings.
- **FR41:** On cancellation, the system provides a full data export before account deactivation and retains data for 30 days to allow re-activation.

---

## Non-Functional Requirements

### Performance

- **NFR1:** The renewal dashboard loads in <2 seconds at p95 for agencies with up to 2,000 active policies, as measured by synthetic monitoring.
- **NFR2:** Client search returns results in <1 second for agencies with up to 5,000 client records, as measured by query timing in application logs.
- **NFR3:** Commission statement processing (parse, match, flag discrepancies) completes in <5 minutes for files up to 10MB (~5,000 line items), as measured by job queue timing.
- **NFR4:** ACORD PDF generation completes in <10 seconds from form selection to downloadable PDF, as measured by server-side rendering timing.
- **NFR5:** Automated renewal email delivery initiates within 15 minutes of scheduled trigger time, as measured by email queue processing logs.

### Security

- **NFR6:** All client PII (names, addresses, contact info, dates of birth) is encrypted at rest using AES-256 or equivalent.
- **NFR7:** All data in transit is encrypted using TLS 1.2 minimum (TLS 1.3 preferred).
- **NFR8:** Multi-tenant isolation is enforced at the database query layer with tenant_id row-level security — no cross-tenant data access under any request path.
- **NFR9:** Commission financial data is append-only after reconciliation sign-off; modifications require Principal role authorization and are recorded in the audit log.
- **NFR10:** Passwords stored using bcrypt or Argon2 with minimum work factor per current OWASP recommendations; no plaintext or reversibly-encrypted credentials stored.
- **NFR11:** User sessions expire after 8 hours of inactivity; session tokens use secure, HttpOnly, SameSite cookies.
- **NFR12:** The audit log records all create, update, delete, and export operations with user ID, timestamp, entity type, entity ID, and changed values; audit log is immutable (append-only).

### Scalability

- **NFR13:** The system supports concurrent active sessions for up to 5,000 agency accounts (estimated 24-month customer base) with <10% performance degradation at peak vs. baseline, as validated by load testing before MRR launch.
- **NFR14:** Commission statement processing uses an async job queue; submission does not block the UI; status updates via polling or webhook notification.
- **NFR15:** File storage (commission statements, generated PDFs) uses cloud object storage (S3 or equivalent) with no hard file size limit beyond the 50MB per-upload cap for commission statements.

### Reliability

- **NFR16:** System uptime ≥99.5% measured monthly during business hours (8am–8pm local time Monday–Friday), as reported by uptime monitoring.
- **NFR17:** Automated renewal email delivery has a 0% silent failure rate — every scheduled send either delivers, bounces with a logged error, or is explicitly suppressed; no send can be silently dropped from the queue.
- **NFR18:** Commission statement processing failures surface a clear per-row error report to the uploading user within the processing session; no data is committed to the database for partially processed statements without explicit user confirmation.

### Integration

- **NFR19:** SendGrid (or equivalent transactional email provider) is used for all outbound renewal outreach; delivery rates, bounces, and unsubscribes are tracked per campaign and accessible in the renewal sequence status view.
- **NFR20:** Stripe handles all subscription billing; no payment card data is stored in AgentPad infrastructure; all billing flows use Stripe Checkout or Elements with PCI-DSS SAQ A compliance posture.
- **NFR21:** CSV export format for client and policy data is compatible with EZLynx and AMS360 import specifications, enabling round-trip migration without data loss.

---

## Appendix: Out-of-Scope Decisions

The following capabilities were explicitly evaluated and deferred to preserve launch timeline and MVP focus:

| Capability | Rationale |
|------------|-----------|
| Direct carrier API integrations (IVANS) | Requires carrier partnerships; post-MVP moat builder |
| Chrome extension for carrier portal auto-fill | Significant technical complexity; V2 |
| Comparative rater | Full product category; out of scope entirely |
| E-signature workflow | Scope creep; PDF download sufficient for MVP |
| Native mobile app (iOS/Android) | Responsive web covers mobile use; native is V2 |
| AI ACORD form OCR | Post-MVP feature layer; add after core form library stable |
| Claims tracking workflow | Important but not #1 pain point; V2 |
| Policy document storage (full DMS) | Storage and compliance complexity; link to carrier portal |
| Built-in SMS outreach | Twilio integration post-MVP; email-only at launch |
| Two-way carrier portal sync | Enterprise-tier feature; not viable for MVP |

**Scope communication to early users:** "AgentPad handles renewal automation, commission tracking, and ACORD forms — the three workflows that eat your day. It is not Applied Epic. If you need a full AMS with raters and e-sig, we're not the right tool yet. If you need those three workflows done right for $79/month, we are."

---

*This PRD is the strategic and functional foundation for AgentPad. All architecture, UX, epic breakdown, and development work traces back to the requirements, success criteria, and user journeys documented here. Update as requirements evolve during implementation.*

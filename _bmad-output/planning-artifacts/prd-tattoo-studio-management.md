---
stepsCompleted: [1, 2, 2b, 2c, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/tattoo-studio-management.md
  - _bmad-output/planning-artifacts/product-brief-tattoo-studio-management.md
  - _bmad-output/planning-artifacts/research/market-tattoo-studio-management-research-2026-04-23.md
workflowType: prd
lastStep: 12
project_name: tattoo-studio-management
user_name: Root
date: 2026-04-23
---

# Product Requirements Document — InkFlow (Tattoo Studio Management)

**Author:** Root
**Date:** 2026-04-23
**Status:** Complete
**Version:** 1.0

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Success Criteria](#2-success-criteria)
3. [User Journeys](#3-user-journeys)
4. [Domain Requirements](#4-domain-requirements)
5. [Innovation Considerations](#5-innovation-considerations)
6. [MVP Scope & Feature Roadmap](#6-mvp-scope--feature-roadmap)
7. [Functional Requirements](#7-functional-requirements)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [Appendix](#9-appendix)

---

## 1. Executive Summary

### Product Vision

InkFlow is the first modern, purpose-built tattoo studio management platform organized around the tattoo artist's actual multi-step workflow: consultation request → deposit collection → design development → design approval → appointment confirmation → session completion. Every competing platform — Booksy, Vagaro, Square Appointments, and the outdated DaySmart Body Art — treats tattoo bookings as a single atomic event, leaving studios to manage the consultation-to-appointment pipeline through Instagram DMs, Venmo, Google Drive, and paper consent forms. InkFlow replaces this fragmented stack with a single platform built from first principles for the tattoo industry.

### Core Differentiator

The fundamental architectural difference is a **native multi-step booking state machine** that encodes blocking conditions between workflow phases. This is not a feature added on top of generic appointment software — it is the data model and UX architecture on which everything else is built. No appointment can be confirmed without a paid deposit and an approved design. No design approval can be sent without an active consultation on record. This state machine is what makes InkFlow genuinely useful to tattoo studios rather than another salon tool with tattoo branding.

### Market Context

The US tattoo industry generates $4.5B annually across 23,000–28,000 professional studios. The tattoo-specific software market is $123.5M (2024) with an 8.5% CAGR to $250M by 2033. The only tattoo-specific incumbent, DaySmart Body Art (formerly Ink Book), was last meaningfully updated in 2021–2023, has outdated UX, "banker's hours" support mismatched with studio operating hours, and is primarily a back-office tool. As of April 2026, zero tattoo studio software has been listed on AppSumo — a verified first-mover LTD distribution opportunity.

### Project Classification

- **Type:** Vertical SaaS — purpose-built studio management for the tattoo industry
- **Stage:** Greenfield / MVP build (no existing codebase)
- **Distribution:** AppSumo LTD launch → community seeding → MRR subscription transition
- **Revenue model:** Subscription ($29/$59/$99 per month) + LTD ($79/$129 one-time)
- **Score:** 92/105 | Tier 1 | Verdict: BUILD

---

## 2. Success Criteria

### User Success

**Primary — No-Show Elimination**
Studios using InkFlow report ≥60% reduction in undeposited no-shows within 60 days of activation. This is the clearest, fastest ROI signal for the target user. A single prevented no-show recovers $300–$800 in forfeited artist time — more than 1–2 months of subscription cost.

- Measurement: User survey at Day 30 and Day 60; platform analytics on deposit confirmation rate per booking
- Proxy: % of bookings with confirmed deposits before appointment vs. total bookings created

**Secondary — Administrative Time Savings**
Artists report saving ≥2 hours/week of DM management, deposit chasing, and design-file coordination time.

- Measurement: Onboarding baseline survey + 30-day follow-up
- Proxy: Average time from consultation request creation to deposit confirmed (shorter = automation working)

**Tertiary — Client Experience Quality**
Client booking completion rate ≥70% (consultation form submitted through to deposit payment in a single session).

- Measurement: Client-side funnel analytics on booking flow
- Proxy: Booking page abandonment rate

**Feature Adoption Signal**
≥80% of active studios use at least 3 of the 5 core feature pillars within 30 days of activation (deposit automation, multi-step booking, consent forms, portfolio matching, design file management).

### Business Success

| Milestone | MRR | Subscribers | Capterra Reviews | Timeline |
|-----------|-----|-------------|------------------|----------|
| Beta validation | $0 | 10 studios (free) | 10 @ 4.5★ avg | Month 3 |
| Early traction | $5,900 | 100 paying | 50 @ 4.5★ avg | Month 6 |
| Growth stage | $20,650 | 350 paying | 150 @ 4.5★ avg | Month 12 |
| Scale | $70,800 | 1,200 paying | 500 @ 4.5★ avg | Month 24 |
| Exit-ready | $177k+ | 3,000+ | 1,000+ | Year 3 |

**Leading Indicators (Early Warning):**
- First deposit collected within 7 days of activation → predictor of 90-day retention
- Second artist added to studio account within 30 days → predictor of plan upgrade to Studio tier
- Weekly active users / total subscribers ≥70% → predictor of low churn

**LTD Success (AppSumo Campaign):**
- Target: 500+ units sold at $79 solo / $129 studio
- Required before launch: 50+ Capterra reviews at ≥4.5★ average
- Go/No-Go gate: Trial-to-paid conversion ≥20% before submitting AppSumo application

**Go/No-Go Decision Point (Month 3):**
If NPS <35 or trial-to-paid conversion <15%, pause AppSumo launch and conduct structured user interviews. Delay LTD campaign until conversion signal is validated.

### Technical Success

- Zero critical data loss incidents in first 6 months (design files, consent forms, deposit records)
- Deposit processing via Stripe with <0.1% critical payment failure rate
- System uptime ≥99.5% during studio operating hours (10 AM–8 PM local time)
- Client booking form load time <2 seconds on mobile (tattoo clients predominantly mobile)
- Digital consent form delivery and electronic signature collection compliant with ESIGN Act

### MVP Validation Gates

The MVP is validated when ALL of the following are met simultaneously:
1. 10 active beta studios using the platform for ≥30 consecutive days with all 5 core features active
2. NPS ≥45 measured at 30-day post-activation survey
3. ≥50 deposits processed via Stripe with zero critical payment failures
4. ≥6 of 10 beta studios report measurable no-show reduction
5. 10 Capterra reviews published at ≥4.5-star average
6. Trial-to-paid conversion ≥20% from first 100 trial signups

---

## 3. User Journeys

### Persona 1: Maya — The Solo Tattoo Artist

**Profile:** 29-year-old fine-line/watercolor specialist, Austin TX, private studio. 8,000 Instagram followers. Fully booked 6–8 weeks out. Earns $90–120k/year. Spends 3 hours/day managing DMs, deposits, and design files across Square Appointments (free), Venmo/Cash App, Instagram, and a paper binder.

**Pain event:** Maya loses $600 in one month to three no-shows from clients who hadn't paid deposits. She had forgotten to send the Venmo request in time. On a Sunday afternoon, she's responding to 40+ DMs instead of resting. A client disputes which version of a design she approved — and there's no version history.

---

**Journey: Discovery to "Aha!" Moment**

*Opening:* A Tuesday session is a no-show. Maya stares at the empty chair and calculates the math: $300 wasted, plus an afternoon of blocked availability she couldn't fill on short notice. She opens the tattoo artist Facebook group she's in (52,000 members) and posts: "What is everyone using to collect deposits automatically? Square isn't doing it for me."

*Rising action:* Three separate artists mention InkFlow. One includes a screenshot of their booking dashboard — Maya can see the pipeline view showing every client at every stage. It doesn't look like salon software. She clicks the link, lands on the InkFlow product page. The headline is: "Built for tattoo artists. Not hair salons." She checks Capterra — 23 reviews, 4.7 stars. One review says: "I finally stopped losing $500/month to no-shows." She starts the free 14-day trial.

*Climax — first use:* Maya connects Stripe (8 minutes), uploads 8 portfolio images tagged "fine-line" and "watercolor" (12 minutes), configures her consultation form to capture style preference, reference image upload, placement, size, and budget, and sets her deposit amount at $100 non-refundable. She updates her Instagram bio link to her InkFlow booking page. Total onboarding time: 27 minutes.

*Resolution — Aha! moment:* Three days later, two consultation requests have come in through the form — complete with reference images and $100 deposit payments already processed to her Stripe account. She hasn't sent a single DM. She opens one: the client selected "fine-line," uploaded three reference images, described the placement on their wrist, and paid the deposit. Maya's next action is purely artistic: review the references and begin the design.

The second client cancels the same day. InkFlow flags the deposit as non-refundable per her configured policy. Maya doesn't have to chase anyone or have an awkward conversation. The system handled it.

*Advocacy:* Maya posts an Instagram story: "Switched to InkFlow last week and already recovered two no-show deposits automatically. Genuinely good software." She writes a Capterra review. Three of her followers DM her asking what it is.

**Key capabilities required by this journey:**
- Instagram-bio-compatible booking URL with zero friction client intake
- Mobile-optimized consultation form with reference image upload
- Stripe deposit collection at consultation submission
- Configurable non-refundable deposit policy with automatic enforcement
- Booking pipeline kanban view showing all active engagements by stage

---

### Persona 2: Carlos — The Studio Owner-Artist

**Profile:** 37-year-old owner-artist, traditional/neo-traditional, Chicago, 4-artist studio. Manages scheduling, front desk, his own bookings, and studio marketing simultaneously. Running Booksy (~$130/month for 4 artists), no deposit system, WhatsApp for coordination, Google Drive for design files, Jotform for consent forms ($24/month).

**Pain event:** Carlos had three deposit disputes last quarter totaling $1,200 in unprotected no-shows. One of his artists quit partly because "the studio doesn't have its act together" — fragmented software was cited. Two recent clients forgot to sign consent forms; the liability exposure concerns him.

---

**Journey: Trial to Studio Champion**

*Opening:* Carlos is at a Chicago tattoo supply meetup when another studio owner mentions a platform built specifically for tattoo studios — not adapted from salon software. He downloads the trial that evening.

*Rising action:* He logs in and immediately navigates to the studio view — a dashboard showing all four artists, every active client engagement, and the current stage of each booking. For the first time, he can see at a glance which clients have paid deposits, which need design approval, and which appointments are confirmed. He shows it to his artists during the Monday morning huddle. One artist — who had three deposit disputes in the past month — says immediately: "When can we switch?"

*Climax — migration:* Carlos exports Booksy client data via CSV. InkFlow's migration guide walks him through importing. He sets up each artist's profile with their style specializations (one is geometric/blackwork, one is traditional/neo-traditional, one is realism, he is traditional). He configures a $150 studio-wide deposit policy. Total migration time: 90 minutes.

*Resolution:* Month 1 results — zero undeposited no-shows (was 3–4/month before). $600 recovered. Consent forms are now collected electronically 48 hours before each session; zero paper forms. Front desk phone calls about "which artist does Japanese work" have dropped because the booking page lets clients filter by artist style before initiating contact.

*Expansion:* Carlos upgrades from trial to Studio plan ($59/month) on Day 28. He refers InkFlow to two other Chicago studio owners he knows. He earns referral credits. He becomes an informal ambassador without being asked.

**Key capabilities required by this journey:**
- Multi-artist studio dashboard with booking stage visibility per artist
- CSV import for client migration from Booksy/Vagaro
- Per-artist style profile with client-facing filter on booking page
- Studio-wide deposit policy configuration (override per artist optional)
- Referral tracking and credit system
- Consent form pre-appointment delivery with digital signature

---

### Persona 3: Jordan — The Studio Manager (Non-Artist)

**Profile:** 34-year-old full-time studio manager, 7-artist custom studio, NYC. Not an artist. Evaluates software on business metrics. Currently on DaySmart Body Art — outdated booking UI causes clients to call in instead of book online (2+ extra hours of phone handling daily).

**Pain event:** Jordan has been manually fielding calls asking "which artist does Japanese-style work?" for two years. DaySmart's support is 9–5; a Friday evening booking issue goes unresolved until Monday. Consent form compliance is a standing agenda item at every monthly operations meeting.

---

**Journey: Evaluator to Internal Champion**

*Opening:* Jordan has a Capterra alert set for "tattoo studio management software" reviews. A new InkFlow review appears — the reviewer mentions the modern booking portal and digital consent collection. Jordan requests a trial.

*Rising action:* Jordan runs a structured evaluation: client-facing booking experience (criteria: mobile-optimized, artist style filtering, reference image upload); backend visibility (criteria: booking stage tracking, deposit status, consent form confirmation); support response time (sends a test support ticket at 7 PM on a Friday — gets a response within 2 hours). InkFlow passes all three.

*Climax — internal champion:* Jordan demos InkFlow's artist directory to the studio owner. The owner's reaction: "This is what our website should look like for booking." Jordan gets sign-off to run a one-artist pilot.

*Resolution:* The pilot artist goes live. Client booking completion rate is 74% (vs. ~30% on DaySmart because clients call in). Zero consent forms collected at the door during the pilot month. Jordan presents the pilot results. The studio migrates all 7 artists to InkFlow Studio Pro ($99/month). The monthly consent form compliance agenda item is closed.

**Key capabilities required by this journey:**
- Modern, mobile-optimized client-facing booking portal
- Artist style filtering on booking page
- Digital consent form collection pre-appointment with archive
- Evening/weekend support coverage (not 9–5)
- Multi-artist visibility in studio dashboard
- Trial to paid conversion path with pilot-friendly onboarding

---

### Edge Case Journey: Design Dispute Prevention

**Scenario:** A client claims an artist sent "the wrong design" for approval and now refuses to honor the deposit. Under the current Instagram DM workflow, there is no version history, no timestamped approval, and no documented consent — making this dispute nearly irresolvable without customer service judgment.

**InkFlow resolution:** The design approval workflow creates an immutable record: artist uploads design version to the per-client folder (timestamped), sends shareable approval link, client clicks "Approve" (or "Request revision" with comments), and the system logs the action with timestamp and client identifier. If the client claims they approved "the wrong version," the artist opens the version history and shows the exact file that was approved at the exact time. Dispute closed.

**Capabilities required:**
- Design file versioning with timestamps
- Immutable approval action log per design version
- Shareable design preview links (no client login required)
- Revision request workflow with comment field

---

## 4. Domain Requirements

### Regulatory and Compliance

**Electronic Consent / Waiver Requirements**

Tattoo studios are required in most US states to obtain informed consent from clients before tattooing. Requirements vary by state but generally include: client age verification (18+ or parental consent for minors), disclosure of risks (infection, allergic reaction, color fading, skin sensitivity), aftercare instructions acknowledgment, and photography/portfolio consent.

- InkFlow must comply with the **ESIGN Act (15 U.S.C. § 7001)** and **UETA (Uniform Electronic Transactions Act)** for electronic signature validity. Electronic consent must be legally equivalent to wet signature.
- Each signed consent form must be stored with: client name, date signed, IP address or device identifier, specific version of the form signed, and studio name.
- Forms must be retrievable and downloadable in a format admissible as legal documentation (PDF with signature audit trail).

**Payment Processing Requirements**

Deposit collection involves holding funds before service delivery, which creates specific requirements:
- Stripe is the designated payment processor. Deposits must be held in the studio's Stripe account (not pooled in a platform account) to avoid money transmission licensing requirements.
- Refund policies configured by the studio must be clearly communicated to clients at deposit collection time (for UDAP compliance and chargeback defense).
- Platform must maintain a record of: deposit amount, collection timestamp, refund policy shown to client, any refund transactions, and final payment application.

**Minor Client Restrictions**
- Tattoo services for clients under 18 require parental/guardian consent in all US states.
- The client intake form must capture date of birth. If client is under 18, the workflow must flag for studio review and require parental consent form completion before proceeding.

### Operational Domain Constraints

**Studio Operating Hours vs. Software Support**

Tattoo studios typically operate 10 AM–8 PM, including weekends. This is a critical domain constraint that existing incumbents (DaySmart Body Art) fail on — their 9–5 M–F support is frequently cited in negative reviews. InkFlow's support coverage must match studio hours.

**Deposit-to-Final-Payment Lifecycle**

A tattoo session's payment lifecycle is not a standard single-transaction model:
1. Deposit collected at booking (non-refundable or partially refundable per policy)
2. Final session payment collected at session completion (deposit credited or charged separately)
3. Multi-session pieces: deposit may apply to first session only, or be split across sessions

The platform must handle all three scenarios without requiring studio staff to manually reconcile payments.

**Design File Formats and Sizes**

Custom tattoo designs are typically delivered as high-resolution PNG or PDF files (often 10–50 MB). The design file management system must support files up to 100 MB, with no compression that degrades image quality for artist review.

**Artist Independence Within Studio Context**

In a multi-artist studio, each artist typically manages their own client relationships, designs, and pricing — the studio owner manages scheduling conflicts and overall capacity. The permission model must reflect this: artists have full control over their own client records and design files, but cannot view other artists' client communications or design files unless they are the studio admin.

### Integration Requirements

**Stripe** (required for MVP)
- Stripe Connect for marketplace-style deposit collection (funds flow to studio Stripe account, not platform)
- Supports deposit hold, application to final payment, and partial/full refund
- Webhook handling for payment status updates

**SMS/Email** (required for MVP)
- Automated notifications via a transactional email provider (SendGrid or similar)
- SMS notifications for critical events (appointment reminders, deposit requests) via Twilio or similar
- Studio can configure which notification types are sent via SMS vs. email

**Calendar Export** (required for MVP)
- .ics export for artist calendar sync (Google Calendar, Apple Calendar, Outlook)
- Webhook or API for direct Google Calendar sync (optional, V1.0)

**Deferred Integrations (Post-MVP)**
- QuickBooks / Xero accounting sync
- Zapier automation bridge
- Instagram Graph API for DM-to-booking flow
- Tattoodo marketplace

---

## 5. Innovation Considerations

### The Multi-Step Booking State Machine

The core innovation of InkFlow is **encoding the tattoo consultation-to-appointment workflow as a first-class software concept** rather than a workaround layered on top of generic appointment software.

Every existing platform (including DaySmart) stores bookings as time-slot reservations. InkFlow stores bookings as state-machine instances with defined transitions, blocking conditions, and automated trigger actions at each state change. This is a meaningfully different data architecture that enables capabilities that are structurally impossible in slot-based systems:

- Blocking conditions: appointment confirmation blocked until deposit confirmed AND design marked approved
- Automated action triggers: deposit request sent at consultation creation; design approval link sent at design upload; consent form sent 48h before appointment
- Pipeline visibility: studio can see every engagement's current state across all artists simultaneously

**Validation approach:** This concept has been pre-validated by the existence of the pain (studios managing this pipeline via spreadsheets and DMs) and the absence of a competing solution. Beta validation with 10 studios will confirm that the state machine maps accurately to real studio workflows.

**Risk:** Some studios have non-standard workflows (e.g., they don't do consultations before every booking — walk-ins, flash tattoos). The state machine must support a "fast-track" path that skips optional stages (consultation, design approval) for studios that work this way, while preserving full blocking conditions as the default.

### Style-Based Portfolio Matching

A secondary innovation: clients can filter artists by style before initiating a consultation request. This is not merely a UI feature — it requires a structured **style taxonomy** (artist-selectable from a defined list: geometric, neo-traditional, watercolor, realism, blackwork, traditional American, Japanese, illustrative, etc.) that maps to filterable attributes on the client booking page.

This reduces "mismatch consultations" — where a client books a consultation with an artist whose style doesn't match what they want. Studios cite these as a significant waste of artist time. The style taxonomy is the minimal data model innovation that makes this filterable matching possible.

---

## 6. MVP Scope & Feature Roadmap

### MVP Philosophy

The MVP delivers the single most validated pain point — deposit automation within a multi-step booking workflow — plus the minimum set of supporting capabilities that make InkFlow a complete replacement for the studio's current cobbled-together stack. Every feature included in MVP must clear this bar: **does removing it break the core deposit-automation-to-appointment workflow for the target user?**

### MVP: Phase 1 (Launch Ready)

All features below are required for the initial beta launch. No partial implementations — each feature must be fully functional to be counted.

**F1 — Multi-Step Booking State Machine**
- Client-facing consultation request form (style preference, reference image upload, placement, size, budget, preferred artist selection)
- Defined booking stages with blocking conditions:
  `INQUIRY → CONSULTATION → DEPOSIT PENDING → DESIGN IN PROGRESS → DESIGN REVIEW → APPOINTMENT CONFIRMED → COMPLETED`
- Studio dashboard: Kanban-style view of all active engagements by stage, across all artists
- Automated email + SMS status transition notifications to client at each stage change
- Blocking enforcement: appointment confirmation requires deposit confirmed + design marked "approved"
- Fast-track path: ability to skip optional stages (for walk-ins, flash tattoos)

**F2 — Deposit Automation**
- Stripe Connect integration: deposit collected at consultation booking or via sent payment request link
- Configurable deposit amount per artist (flat dollar amount or % of estimated session value)
- Deposit lifecycle states: pending → collected → applied-to-session → refunded
- Cancellation policy enforcement: studio-configurable refund rules (non-refundable, partial refund within X days)
- Multi-session staging: deposit applied across multiple sessions for large pieces
- Deposit payment page shown to client at booking; refund policy presented and acknowledged before payment

**F3 — Digital Consent Form Collection**
- 5 pre-built tattoo-specific templates: general tattoo, color work, UV ink, touch-up, aftercare acknowledgment
- Custom form builder: ability to add fields or modify text in pre-built templates
- Electronic signature collection compliant with ESIGN Act (audit trail: timestamp, IP, form version)
- Pre-appointment delivery: automatic email sent 48 hours before session with consent form link
- Per-client archive: all signed forms stored in client record, downloadable as PDF
- Minor client flag: DOB capture at intake; automatic parental consent form routing if under 18

**F4 — Artist Portfolio with Style Matching**
- Per-artist profile: bio, style specializations (multi-select from defined taxonomy), portfolio gallery
- Portfolio gallery: up to 50 images per artist, tagged by style from taxonomy
- Style taxonomy (defined, non-editable at MVP): geometric, neo-traditional, watercolor, realism, blackwork, traditional American, Japanese traditional, illustrative, fine-line, tribal, lettering, portrait
- Studio booking landing page: client-facing artist directory with style filter
- Direct consultation request routing to selected artist
- Artist profile public URL (shareable independently of studio booking page)

**F5 — Design File Management**
- Per-client design folder attached to booking record
- File upload: images (PNG, JPG, PDF) up to 100 MB per file, no quality compression
- Design approval workflow: artist uploads → sends shareable approval link → client approves or requests revision with comment → status auto-updates in dashboard
- Version history: each upload creates a new version with timestamp; previous versions retained
- Immutable approval log: each approval action records timestamp, client identifier, and version approved
- Shareable design preview link: no client login required for review

**F6 — Core Scheduling and Calendar**
- Artist availability management: set working hours, blocked dates, break times
- Appointment calendar: per-artist daily/weekly view + studio-wide multi-artist view
- Conflict detection: prevent double-booking within same artist's schedule
- Appointment reminders: automated email + SMS at 48h and 24h before session
- Cancellation / reschedule request handling: client can request via portal; artist confirms in dashboard
- .ics export for manual calendar sync (Google, Apple, Outlook)

**F7 — Client Records (CRM)**
- Per-client record: contact info (name, email, phone, DOB), booking history, deposit history, designs on file, signed consent forms
- Notes field: per-client private notes for artist and studio admin
- Client-facing booking history portal: clients can view past and upcoming appointments (no login — token-based access from email)
- Minor flag: automatically applied when DOB indicates client is under 18

**F8 — Studio and Artist Account Management**
- Studio admin account: manages all artists, studio-wide settings, and billing
- Artist accounts: manage own availability, client records, design files; cannot view other artists' client records (unless admin)
- Multi-artist plan support: up to 4 artists on Studio plan, unlimited on Studio Pro
- Billing management: Stripe subscription, plan upgrades, invoice history
- Referral tracking: unique referral link per studio; referral credit applied to billing

### Phase 2 (V1.0 — Months 4–6 post-MVP)

- Commission tracking and per-artist revenue reporting
- Waitlist management with automatic slot-opening notifications
- Advanced cancellation and refund automation (multi-tier refund policies)
- Zapier integration bridge
- SMS two-way communication thread in client record
- Multi-artist availability pooling (show first available artist by style match)
- Review collection automation (G2/Capterra/Google request at "Completed" stage trigger)

### Phase 3 (V1.5 — Months 7–12 post-MVP)

- Instagram DM → InkFlow booking bridge (via Manychat or Instagram Graph API)
- AI-assisted inquiry triage: auto-categorize consultation requests by style/size/urgency
- Piercing studio vertical expansion (modified consent templates and workflow terminology)
- Multi-location studio support (franchise / multi-shop operators)
- Advanced analytics: revenue by artist, no-show rate trends, deposit collection rate over time

### Phase 4 (V2.0 — Year 2+)

- AR design preview: upload client photo + design mockup for placement visualization
- Client style preference profile built from booking history (improves artist matching accuracy over time)
- Revenue intelligence: predictive no-show scoring based on client behavior signals
- Global expansion: UK, Germany, Australia (same software, localized consent templates)
- Partnership marketplace: tattoo supply vendor integrations, aftercare product recommendations

### Explicitly Out of Scope for MVP

| Feature | Reason Deferred |
|---------|----------------|
| Instagram DM integration | API complexity; manual workflow covers core use case |
| Commission tracking / payroll | Not blocking for deposit-automation focus |
| Waitlist management | Pain point, but not the primary one |
| Advanced analytics and reporting | Basic dashboard sufficient; defer detailed reporting |
| Multi-location support | Not common in early-adopter studios |
| AR/VR design preview | High complexity; long-term vision only |
| POS / in-studio payments | Cash / existing card readers handle this at MVP |
| QuickBooks / Xero sync | CSV export sufficient at MVP |
| Native iOS/Android app | Progressive web app sufficient for MVP |
| Tattoodo marketplace integration | Partnership-dependent; deferred |

---

## 7. Functional Requirements

Organized by capability area. Each FR describes a discrete, testable capability. "System" refers to InkFlow platform. "Artist" refers to any authenticated artist or studio admin. "Client" refers to an unauthenticated or token-authenticated end user.

### CA-1: Booking State Machine

| ID | Requirement |
|----|------------|
| FR-1.1 | System SHALL maintain a booking state machine with the following ordered states: INQUIRY, CONSULTATION, DEPOSIT_PENDING, DESIGN_IN_PROGRESS, DESIGN_REVIEW, APPOINTMENT_CONFIRMED, COMPLETED, CANCELLED |
| FR-1.2 | System SHALL enforce blocking conditions at each state transition: APPOINTMENT_CONFIRMED state SHALL NOT be reachable unless deposit state = COLLECTED AND design state = APPROVED |
| FR-1.3 | System SHALL provide a "fast-track" booking path that allows skipping CONSULTATION and DESIGN_REVIEW stages (for walk-ins or flash bookings) while preserving deposit collection |
| FR-1.4 | System SHALL automatically trigger notification actions on each state transition (deposit request, design approval link, appointment confirmation, consent form delivery) |
| FR-1.5 | System SHALL provide a studio dashboard displaying all active bookings grouped by current state as a Kanban board, filterable by artist |
| FR-1.6 | System SHALL allow artists to manually advance or revert a booking's state with a required reason note |
| FR-1.7 | System SHALL log every state transition with timestamp and actor (system-triggered vs. artist-triggered) |

### CA-2: Client Intake and Consultation Request

| ID | Requirement |
|----|------------|
| FR-2.1 | System SHALL provide a client-facing consultation request form accessible via a unique studio or artist URL with no login required |
| FR-2.2 | Consultation request form SHALL capture: client name, email, phone, date of birth, preferred artist (selectable from studio's active artists), style preference (selectable from taxonomy), placement (body location), approximate size, reference image upload (up to 5 images, 20 MB each), budget range, and availability notes |
| FR-2.3 | System SHALL support reference image upload in PNG, JPG, HEIC, and PDF formats |
| FR-2.4 | System SHALL validate date of birth and flag bookings where client age is under 18 for studio review before proceeding |
| FR-2.5 | Upon consultation request submission, system SHALL create a booking record in INQUIRY state and notify the selected artist via email and dashboard alert |
| FR-2.6 | Artist SHALL be able to accept or decline an inquiry from the dashboard; declining shall send a configurable decline message to the client |

### CA-3: Deposit Collection and Management

| ID | Requirement |
|----|------------|
| FR-3.1 | System SHALL integrate with Stripe Connect to process deposit payments, routing funds to the studio's connected Stripe account |
| FR-3.2 | Artist / admin SHALL be able to configure deposit amount per artist as a flat dollar amount or percentage of estimated session value |
| FR-3.3 | System SHALL generate a deposit payment link and deliver it to the client via email and SMS when a booking advances to DEPOSIT_PENDING state |
| FR-3.4 | System SHALL present the studio's configured cancellation / refund policy to the client before deposit payment and require acknowledgment |
| FR-3.5 | System SHALL update booking deposit state (PENDING → COLLECTED) automatically via Stripe webhook on payment confirmation |
| FR-3.6 | System SHALL support deposit refund initiation from the studio dashboard; refund amount shall be calculated per configured policy |
| FR-3.7 | System SHALL support multi-session deposit staging: artist can configure a deposit to apply to a specific session in a multi-session booking series |
| FR-3.8 | System SHALL display deposit status (amount, collected date, applied/refunded) in the booking record and client portal |
| FR-3.9 | System SHALL NOT hold funds in a platform pool; all deposits shall flow directly to the studio's Stripe account via Stripe Connect |

### CA-4: Design File Management

| ID | Requirement |
|----|------------|
| FR-4.1 | System SHALL provide a per-client design folder within the booking record, supporting upload of PNG, JPG, PDF files up to 100 MB per file without lossy compression |
| FR-4.2 | Each file upload SHALL create a new version in the version history; previous versions SHALL be retained and retrievable |
| FR-4.3 | System SHALL generate a shareable, token-authenticated design preview link for each file version that does not require client login to access |
| FR-4.4 | System SHALL provide a design approval workflow: artist sends approval link → client views design → client selects "Approve" or "Request Revision" (with mandatory comment field for revisions) |
| FR-4.5 | Client approval action SHALL be logged immutably with: timestamp, client identifier (email + IP), and exact file version ID that was approved |
| FR-4.6 | Artist SHALL be able to mark a booking's design state as APPROVED from the dashboard regardless of whether the client used the approval link (for in-person approvals) |
| FR-4.7 | System SHALL notify artist via dashboard alert and email when a client submits an approval or revision request |
| FR-4.8 | Booking SHALL NOT advance to APPOINTMENT_CONFIRMED unless design state = APPROVED (enforced by FR-1.2) |

### CA-5: Digital Consent Form Collection

| ID | Requirement |
|----|------------|
| FR-5.1 | System SHALL provide 5 pre-built tattoo-specific consent form templates: (1) general tattoo consent, (2) color work consent, (3) UV/blacklight ink consent, (4) touch-up consent, (5) aftercare acknowledgment |
| FR-5.2 | Studio admin SHALL be able to customize pre-built templates by editing body text and adding custom fields |
| FR-5.3 | System SHALL automatically deliver the appropriate consent form(s) to the client via email 48 hours before a confirmed appointment |
| FR-5.4 | Consent form SHALL collect electronic signature compliant with the ESIGN Act, including: full legal name, date signed, client's IP address, and form version identifier |
| FR-5.5 | Completed consent forms SHALL be stored per-client and retrievable as a PDF with embedded audit trail (name, date, IP, version) |
| FR-5.6 | System SHALL display consent form completion status in the booking record dashboard (not collected / sent / completed) |
| FR-5.7 | For clients flagged as under 18, system SHALL route a parental consent form variant requiring a parent/guardian name, relationship, and signature in addition to the standard form |
| FR-5.8 | Studio admin SHALL be able to configure which consent template(s) are sent automatically for each session type |

### CA-6: Artist Portfolio and Style Matching

| ID | Requirement |
|----|------------|
| FR-6.1 | Each artist SHALL have a configurable profile containing: display name, bio (max 500 characters), style specializations (multi-select from taxonomy), portfolio images (up to 50), and booking availability status |
| FR-6.2 | System SHALL provide a fixed style taxonomy for MVP containing: geometric, neo-traditional, watercolor, realism, blackwork, traditional American, Japanese traditional, illustrative, fine-line, tribal, lettering, portrait |
| FR-6.3 | Portfolio images SHALL be uploadable in PNG, JPG, and HEIC formats; system SHALL generate web-optimized display versions while retaining originals |
| FR-6.4 | The studio booking landing page SHALL display all active artists with their style tags, filterable by style taxonomy value |
| FR-6.5 | Client SHALL be able to filter artist directory by one or more style tags and initiate a consultation request directly from a filtered artist card |
| FR-6.6 | Each artist SHALL have a publicly accessible artist profile URL usable independently of the studio booking page (for solo artist use in Instagram bio) |
| FR-6.7 | Artist profile SHALL display active or "not taking bookings" status; studio admin SHALL be able to toggle this for any artist |

### CA-7: Scheduling and Calendar

| ID | Requirement |
|----|------------|
| FR-7.1 | Artists SHALL be able to configure their weekly working hours (start time, end time, days of week) and mark specific dates as blocked (vacation, conventions, sick days) |
| FR-7.2 | System SHALL enforce conflict detection: a new appointment SHALL NOT be confirmable if it overlaps with an existing confirmed appointment for the same artist |
| FR-7.3 | System SHALL display a per-artist calendar view (day, week, month) and a studio-wide multi-artist calendar view for admin users |
| FR-7.4 | System SHALL send automated appointment reminders to clients: email and SMS at 48 hours before session, and email at 24 hours before session |
| FR-7.5 | Clients SHALL be able to submit a cancellation or reschedule request via a link in their appointment confirmation email; the request SHALL appear in the artist's dashboard for confirmation |
| FR-7.6 | System SHALL generate a .ics calendar file for any confirmed appointment, downloadable by artist and client |
| FR-7.7 | Artists SHALL be able to set session duration (in 30-minute increments) when confirming an appointment; calendar SHALL block the full session duration |

### CA-8: Client Records (CRM)

| ID | Requirement |
|----|------------|
| FR-8.1 | System SHALL maintain a per-client record containing: full name, email, phone, date of birth, minor flag, booking history (all past and active), deposit history, design files, and signed consent forms |
| FR-8.2 | Artist and admin users SHALL be able to add private notes to a client record; notes SHALL be visible to the recording user and studio admin only |
| FR-8.3 | Clients SHALL be able to access a read-only view of their own booking history via a token-authenticated link (delivered in their appointment confirmation email) without requiring account creation |
| FR-8.4 | System SHALL mark client records with a visual "minor" flag when DOB indicates client is under 18 at time of booking |
| FR-8.5 | Studio admin SHALL be able to search client records by name, email, and phone |
| FR-8.6 | Artist users SHALL only be able to view client records associated with their own bookings; studio admin SHALL be able to view all client records |

### CA-9: Studio and Account Management

| ID | Requirement |
|----|------------|
| FR-9.1 | System SHALL support three plan tiers: Solo (1 artist), Studio (up to 4 artists), Studio Pro (5+ artists) with corresponding feature access |
| FR-9.2 | Studio admin SHALL be able to invite artists to the studio account via email; invited artists SHALL create their own login credentials |
| FR-9.3 | Artist accounts SHALL have scoped permissions: full access to own bookings, designs, and client records; read-only or no access to other artists' records |
| FR-9.4 | Studio admin SHALL be able to configure studio-wide settings: deposit policy defaults, cancellation policy, notification templates, consent form selections |
| FR-9.5 | System SHALL manage Stripe subscription billing; admin SHALL be able to view invoices, update payment method, and upgrade/downgrade plans |
| FR-9.6 | System SHALL provide each studio a unique referral link; referral credits SHALL be applied to the referring studio's next billing cycle when a referral converts to a paid plan |
| FR-9.7 | System SHALL support 14-day free trial for new signups with full feature access; no credit card required to start trial |

---

## 8. Non-Functional Requirements

### Performance

**NFR-P1 — Page load time:** The client-facing consultation request form and artist booking page SHALL load to interactive state in <2 seconds on a 4G mobile connection (LCP <2.5s, measured by Google Lighthouse on throttled mobile).

**NFR-P2 — Dashboard responsiveness:** The studio dashboard SHALL load the full booking Kanban view within 3 seconds for studios with up to 500 active bookings.

**NFR-P3 — File upload:** The design file upload process SHALL complete for a 50 MB file within 30 seconds on a standard broadband connection (25 Mbps).

**NFR-P4 — Stripe webhook processing:** Deposit payment confirmation webhooks from Stripe SHALL be processed and reflected in the booking record within 10 seconds of Stripe webhook delivery.

### Security

**NFR-S1 — Authentication:** All artist and admin user authentication SHALL use email + password with mandatory password strength enforcement (min 10 characters, 1 uppercase, 1 number). Password reset via email token (1-hour expiry).

**NFR-S2 — HTTPS enforcement:** All traffic SHALL be served over HTTPS (TLS 1.2+). HTTP requests SHALL be redirected to HTTPS.

**NFR-S3 — Payment data isolation:** No payment card data SHALL be stored in InkFlow's own database. All payment processing SHALL use Stripe's hosted payment page or Stripe.js for card capture. PCI DSS compliance maintained via Stripe's SAQ A pathway.

**NFR-S4 — Shareable link security:** Shareable design preview links and client portal links SHALL use cryptographically random tokens (≥32 bytes of entropy). Links SHALL have configurable expiry (default: 30 days for design previews, 7 days for client portal access).

**NFR-S5 — Artist data isolation:** The application layer SHALL enforce artist-level data scoping at the query level, not only at the UI level. An authenticated artist user SHALL be unable to retrieve another artist's client records or design files via any API endpoint.

**NFR-S6 — Consent form audit integrity:** Signed consent form records SHALL be write-once. No update or delete operation SHALL be permitted on a completed consent record. Deletion of studio account SHALL not destroy consent records; records SHALL be archived and retained for 7 years.

### Scalability

**NFR-SC1 — Studio capacity:** System SHALL support studios with up to 20 artists without performance degradation in the multi-artist calendar view.

**NFR-SC2 — Booking volume:** System SHALL handle up to 10,000 active bookings per studio (for large multi-location studios in V2.0 scope) without query performance degradation.

**NFR-SC3 — File storage:** Design file storage SHALL scale to unlimited files per studio (bounded by billing tier in future; unlimited at MVP).

### Reliability

**NFR-R1 — Uptime:** System SHALL maintain ≥99.5% availability measured monthly during studio operating hours (10 AM–8 PM, all time zones, including weekends).

**NFR-R2 — Backup:** All customer data (client records, design files, consent forms, booking records) SHALL be backed up daily. Recovery Point Objective (RPO): 24 hours. Recovery Time Objective (RTO): 4 hours.

**NFR-R3 — Notification delivery:** Email notifications SHALL be delivered via a transactional email provider with delivery rate monitoring. Failed delivery SHALL trigger retry with exponential backoff (3 retries). SMS notifications via Twilio with delivery confirmation tracking.

### Accessibility

**NFR-A1 — WCAG 2.1 AA compliance:** The client-facing booking form and consent form pages SHALL comply with WCAG 2.1 Level AA guidelines (contrast ratios, keyboard navigation, screen reader compatibility). These are the highest-traffic client-facing surfaces.

**NFR-A2 — Mobile-first:** All client-facing pages SHALL be designed and tested mobile-first. Minimum support: iOS Safari 16+, Chrome for Android 110+.

### Legal and Compliance

**NFR-L1 — ESIGN Act:** Electronic consent form signatures SHALL satisfy ESIGN Act requirements: (a) intent to sign, (b) consent to electronic records, (c) association of signature with the signed record, (d) retention of the signed record.

**NFR-L2 — GDPR / CCPA readiness:** System SHALL support client data deletion requests (right to erasure) for non-consent records. Consent records SHALL be retained per NFR-S6 regardless of deletion request.

**NFR-L3 — Data residency:** MVP data SHALL be hosted in US-based infrastructure (AWS us-east or us-west regions). International expansion may require regional data residency compliance; scoped to V2.0.

### Support Operations

**NFR-SP1 — Support coverage:** Human support SHALL be available during studio operating hours: Monday–Sunday, 10 AM–9 PM EST. This is a differentiated requirement vs. DaySmart Body Art (9–5 M–F).

**NFR-SP2 — Initial response time:** Support ticket initial response SLA: <2 hours during operating hours, <8 hours outside operating hours.

---

## 9. Appendix

### A. Style Taxonomy (MVP Fixed Set)

| Taxonomy Value | Display Name | Notes |
|---------------|--------------|-------|
| geometric | Geometric | Sacred geometry, mandala, dot-work |
| neo-traditional | Neo-Traditional | Bold lines, modern subject matter with traditional influence |
| watercolor | Watercolor | Soft washes, no black outline style |
| realism | Realism | Photo-realistic portraits and subjects |
| blackwork | Blackwork | Bold black ink, minimal color |
| traditional-american | Traditional American | Classic bold outlines, limited palette |
| japanese | Japanese Traditional | Irezumi, koi, waves, chrysanthemum |
| illustrative | Illustrative | Comic, graphic novel, animation-influenced |
| fine-line | Fine Line | Minimalist, thin linework |
| tribal | Tribal | Polynesian, Maori, Aztec, Celtic |
| lettering | Lettering | Script, typography, calligraphy |
| portrait | Portrait | Realistic or stylized face/figure portraits |

### B. Booking State Machine Diagram

```
                   [Fast-track path]
                        ↓
INQUIRY → CONSULTATION → DEPOSIT_PENDING → DESIGN_IN_PROGRESS → DESIGN_REVIEW → APPOINTMENT_CONFIRMED → COMPLETED
   ↓            ↓              ↓                   ↓                  ↓                  ↓
CANCELLED   CANCELLED      CANCELLED            CANCELLED          CANCELLED          CANCELLED (refund policy applies)

Blocking conditions:
- APPOINTMENT_CONFIRMED requires: deposit_state = COLLECTED AND design_state = APPROVED
- DESIGN_REVIEW requires: at least one design file uploaded
- DEPOSIT_PENDING requires: artist has accepted the inquiry

Fast-track: skips CONSULTATION and DESIGN_REVIEW stages
- Consent form delivery: triggered on APPOINTMENT_CONFIRMED (48h before session date)
- Deposit request: triggered on DEPOSIT_PENDING entry
- Design approval link: triggered when artist uploads first design file
```

### C. Competitive Positioning Summary

| Platform | Price (5 artists) | Tattoo-Native | Deposit Automation | Multi-Step Booking | Consent Forms |
|----------|------------------|---------------|-------------------|-------------------|---------------|
| **InkFlow** | **$59/mo** | **Yes** | **Yes (Stripe)** | **Yes (state machine)** | **Yes (5 templates)** |
| DaySmart Body Art | ~$100–$200/mo | Yes (outdated) | Partial | No | No |
| Booksy | ~$130/mo | No | Manual | No | No |
| Vagaro | ~$150/mo | No | Manual | No | No |
| Square Appointments | $0–$29/mo + 2.9% | No | No | No | No |
| InkDesk / Porter | ~$30–$50/mo | Partial | Partial | No | No |

### D. Revenue Model

| Plan | Monthly Price | Artists | Notes |
|------|--------------|---------|-------|
| Solo Artist | $29/mo | 1 | All features |
| Studio | $59/mo | Up to 4 | All features |
| Studio Pro | $99/mo | 5+ | All features + priority support |
| LTD Solo | $79 one-time | 1 | AppSumo launch |
| LTD Studio | $129 one-time | Up to 5 | AppSumo launch |

### E. Key Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Generic platform (Booksy/Vagaro) adds tattoo deposit workflow | Low (12-month window) | High | Community loyalty + review velocity before they respond; state machine is structural advantage, not a feature |
| Tattoo artist price sensitivity | High | Medium | LTD eliminates price barrier entirely; first prevented no-show ($300+) closes the ROI argument |
| Tier-3 competitor achieves AppSumo first-mover | Medium | High | Submit AppSumo application within 30 days of MVP readiness; speed is primary mitigation |
| Stripe deposit chargeback disputes | Medium | Medium | Require acknowledgment of refund policy at deposit collection; document policy in booking record |
| ESIGN Act non-compliance challenge to consent forms | Low | High | Implement full audit trail per NFR-L1; review template language with legal counsel before launch |
| State machine misalignment with real studio workflows | Medium | High | Validate with 10 beta studios before AppSumo launch; build fast-track path for non-standard workflows |

---

**PRD Complete**
**Project:** tattoo-studio-management (InkFlow)
**Date:** 2026-04-23
**Next Step:** Create Architecture (`create-architecture` workflow) or begin Epics & Stories
**Output:** `_bmad-output/planning-artifacts/prd-tattoo-studio-management.md`

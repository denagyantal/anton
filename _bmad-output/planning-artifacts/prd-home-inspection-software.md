---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/home-inspection-report-software.md
  - _bmad-output/planning-artifacts/product-brief-home-inspection-software.md
  - _bmad-output/planning-artifacts/research/market-home-inspection-software-research-2026-04-21.md
workflowType: prd
lastStep: step-12-complete
research_type: prd
research_topic: home-inspection-software
user_name: Root
date: 2026-04-22
classification:
  projectType: saas_mobile
  domain: proptech_field_service
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document: InspectAI

**Author:** Root
**Date:** 2026-04-22
**Version:** 1.0

---

## Executive Summary

InspectAI is a mobile-first, AI-native home inspection reporting platform targeting solo inspectors and 1–3 person firms abandoned by Spectora's upmarket move. The product attacks three simultaneous market gaps: a reliability crisis (Spectora crashes mid-inspection with no phone support), a pricing gap (no capable AI tool below $69/month), and a first-in-category commercial innovation (no home inspection software has offered a Lifetime Deal).

**Target Users:** ~25,000–50,000 active US home inspectors; primary segment is solo and small-firm inspectors (80%+ of market by count) with 5–20 inspections per month who are price-sensitive and tool-trust-damaged by Spectora's 2025 forced-advertising controversy.

**Problem:** Home inspectors spend 2–3 hours post-inspection writing reports manually. Field software crashes mid-inspection, costing professional credibility. The market leader (Spectora, $109/month) is moving upmarket, injecting third-party ads into client portals without consent, and raising prices via hidden per-inspection fees — leaving the solo inspector segment without a reliable, modern, affordable alternative.

**Solution Architecture:**
1. AI-in-the-loop photo capture: every photo triggers defect detection and narrative pre-population before the inspector moves to the next item — the report is drafted during the walk-through, not after.
2. Offline-first architecture: zero dependency on field connectivity; local-first data storage, background sync on reconnect.
3. Flat transparent pricing: $49/month (no per-inspection fees, no per-inspector escalators); $149 LTD — first lifetime deal in the home inspection software category.

**12-Month Business Target:** 800 paying users, ~$800K blended ARR.

### What Makes This Special

The core insight: every AI feature in the current market is a bolt-on layer over a legacy report-writing workflow. When photos are taken separately from defect detection, taken separately from narrative drafting, taken separately from report assembly — the time savings never fully materialize. InspectAI integrates AI at photo capture, not post-processing.

Three non-replicable-in-90-days differentiators:
- **AI-native workflow:** Defect detection fires at capture time. Report is 75% drafted before the inspector leaves the property. Competitors would need to re-architect existing products to match.
- **True offline-first:** Engineering commitment, not marketing claim. Local-first storage means zero data loss even in no-signal basements and rural properties. This eliminates the #1 complaint against every competitor.
- **First LTD in category:** $149 one-time — creates a loyalty cohort, a viral marketing event ("first in category"), and captures the price-sensitive solo/entrant inspector segment that no subscription product serves well.

## Project Classification

- **Project Type:** Mobile-first SaaS (iOS + Android native apps + web dashboard)
- **Domain:** PropTech / Field Service Management
- **Complexity:** Medium — no healthcare/fintech compliance, but offline sync + AI vision pipeline + mobile-native UX + report generation PDF pipeline create multi-system architectural complexity
- **Project Context:** Greenfield — new product, no legacy system constraints
- **Primary Revenue Model:** $49/month subscription + $149 Lifetime Deal (LTD) — first LTD in category

---

## Success Criteria

### User Success

Users succeed when the post-inspection report writing burden is eliminated. Specific testable outcomes:

| Outcome | Measurement | Target |
|---------|------------|--------|
| Report completion time | From final photo to sent report | < 30 min at month 3; < 20 min at month 12 |
| Field reliability | % of inspection sessions with zero app errors or data loss | > 99.9% at launch; > 99.99% at month 12 |
| Time-to-value | Minutes from signup to first AI-generated narrative visible | < 15 minutes |
| First inspection completion | % of trial users completing 1 full inspection within 7 days | > 70% |
| Report delivery speed | % of reports delivered within 2 hours of inspection end | > 80% by month 6 |
| Inspector NPS | Net Promoter Score via in-app survey | > 55 at month 6; > 70 at month 12 |

The "aha!" moment: inspector finishes walk-through, opens the report draft view, sees 75% of the content already written, and realizes they need 20 minutes instead of 2 hours.

### Business Success

**3-Month Gate (Product-Market Fit):**
- 75+ paying users (trial → paid conversion)
- Zero P0 incidents (data loss or complete app failure) in 60 consecutive production days
- Trial → paid conversion > 25%
- Minimum 50 LTD purchases at $149
- 3 unsolicited public testimonials on InterNACHI/ASHI forums citing AI time savings

**6-Month Gate (Growth Signal):**
- $10K MRR milestone (subscription + LTD-equivalent ARR)
- AppSumo deal launched — first home inspection software LTD on platform
- "Spectora alternative" SEO position: top 5 organic results
- 30+ G2/Capterra reviews, average 4.5+ stars
- 3 inspector YouTube creator partnerships (honest review content)

**12-Month Gate (Market Position):**
- 800+ paying users (subscription + active LTD)
- $800K blended ARR
- Gross margin > 85% on subscription cohort (after AI API costs)
- Monthly churn < 2%
- InterNACHI vendor partner program acceptance

### Technical Success

- App crash rate (field sessions): < 0.1% at launch; < 0.01% at month 12
- Zero data loss events: local-first architecture ensures offline data is never overwritten by sync
- AI narrative accuracy: > 80% of AI-generated defect descriptions require no inspector edit (measured by edit rate telemetry)
- PDF generation time: < 10 seconds for a 50-photo inspection report
- AI photo analysis latency: < 3 seconds per photo for defect detection + room tagging

### Measurable Outcomes

**North Star Metric:** Average report completion time per inspector per month. Target: 20 minutes at month 12, down from 2-hour industry average. This is the clearest proxy for AI effectiveness and inspector value delivery.

| KPI | 3-Month | 6-Month | 12-Month |
|-----|---------|---------|---------|
| Paying users (sub + LTD) | 75 | 250 | 800 |
| Monthly recurring revenue | $2,250 | $7,500 | $19,600 |
| LTD revenue (cumulative) | $11,175 | $22,350 | $44,700 |
| Trial → paid conversion | > 25% | > 35% | > 40% |
| Monthly churn rate | < 5% | < 3% | < 2% |
| App crash rate (field) | < 0.1% | < 0.05% | < 0.01% |
| Avg report completion time | < 30 min | < 25 min | < 20 min |
| Community mentions (forums/month) | 5+ | 15+ | 30+ |
| G2/Capterra reviews | 10+ | 30+ | 75+ |

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete AI-assisted inspection-to-report workflow for a solo inspector. Business management features (scheduling, payments, agreements) are Phase 2 — PMF must be proven on the core AI report workflow first.

**MVP Core Capabilities:**

1. **AI-in-the-loop photo capture** — iOS and Android native camera integration; photos auto-tagged by room/section as captured; GPT-4o Vision defect detection fires per photo or batch; pre-populated defect language for inspector review; voice note input converted to report text; offline-first storage with background sync.

2. **AI defect detection and narrative generation** — Per-photo defect category suggestion (Structural, Electrical, Plumbing, HVAC, Roof, etc.); pre-populated defect language in inspector's comment library style; inspector review/edit/approve flow; inspector-owned comment library supplements AI output.

3. **Customizable report templates** — Pre-built: ASHI standard, InterNACHI standard, General home inspection; inspector customizes logo, header/footer, color scheme, section order via no-code editor; custom sections per inspection type.

4. **PDF report generation** — Professional output with inspector branding (no InspectAI watermark ever); defects organized by severity (Safety, Major, Minor, Maintenance); photos embedded inline with captions and annotations; auto-generated table of contents; digital signature block; pre-send review step.

5. **Client delivery** — Unique link (no client account required); PDF download from link; email delivery with customizable message; zero third-party ads in client-facing materials (permanent contractual commitment, enforced in infrastructure).

6. **Offline-first sync architecture** — All inspection data written to local device storage first; background sync to cloud on connectivity restore; conflict resolution: local data always wins; sync status indicator always visible; validated in zero-connectivity conditions.

7. **Basic inspection management** — Inspection list with client name, address, date, status; search/filter history; CSV export; repeat client data persistence.

**MVP Success Gates (all three must clear):**

- Gate 1 (PMF): 75+ paying users, < 5% monthly churn, 3 unsolicited public testimonials citing AI savings
- Gate 2 (Reliability): Zero P0 incidents in 60 consecutive production days; crash rate < 0.1%
- Gate 3 (Business): Blended revenue > $15K; gross margin > 80% on subscription cohort; LTD break-even confirmed viable at 18+ month average active life

### Growth Features (Post-MVP)

Phase 2 unlocks after Phase 1 gates cleared (target: months 3–6):

- Scheduling and calendar integration (Google Calendar, Outlook sync)
- Automated client communications (confirmation SMS/email, delivery notification, review request)
- Payment collection (2.9% + $0.30 Stripe standard — no markup)
- Digital agreements and e-signature (inspection agreement before booking)
- Template migration assistant (Spectora → InspectAI format converter — reduces switching friction)
- Full video capture (vs. photo-only MVP; 60-second clips with AI frame extraction)
- Multi-inspector firm features: team assignments, centralized quality review, report standardization across team

### Vision (Future)

Phase 3 (months 6–12+):

- AI code citations (automatic IRC, NEC, UPC references in defect notes — saves inspector research time and liability exposure)
- Risk score automation (severity flagging for client/realtor risk profile)
- Inspector business analytics (revenue per inspection, report time trends, referral sources)
- Florida 4-Point and Wind Mitigation specific templates (Florida market alone is 20%+ of US inspection volume)
- QuickBooks and accounting integration
- Repair cost estimates (Angi/HomeAdvisor pricing API integration — adds client value, upsell opportunity)
- Adjacent market expansion: commercial property (ASTM E2018), pool/spa, fire safety, elevator — same workflow, no dominant player in any of these

---

## User Journeys

### Journey 1: Marcus — Solo Inspector, Spectora Defector (Primary Success Path)

**Background:** Marcus, 41, solo inspector in suburban Atlanta, 8 years experience, 15–20 inspections/month, $8,000–9,000/month gross. On Spectora 4 years. Frustrated by Fixle controversy, per-inspection Advanced fee, and 2–3 weekly crashes.

**Discovery:**
Marcus posts on the InterNACHI forum after a Spectora crash loses 40 minutes of crawlspace inspection data. Three replies mention InspectAI. He Googles "Spectora alternative 2026," finds the comparison landing page: $109/month + crashes + forced ads vs. $49/month flat + offline-first AI + no ads ever. He signs up for the 30-day free trial — no credit card.

**Onboarding (Day 0):**
Account created in 3 minutes. Uploads logo, selects InterNACHI standard template, customizes 5 comment library entries from his existing comment list. No template import needed for MVP. Schedules first InspectAI inspection for next morning.

**Core Usage (First Inspection):**
Marcus opens the app at the property. The basement has no signal — app works without hesitation. He takes 47 photos over 2.5 hours. After each room, the AI has: tagged all photos by room, flagged 3 defects with suggested severity, pre-populated defect language. At the end of the walk-through, Marcus opens the report draft: 75% of it is written. He spends 18 minutes in his car reviewing, adds 2 voice notes for items he noticed verbally, approves the AI narrative for each flagged defect, and hits send.

**"Aha!" Moment:**
Client texts 12 minutes after report delivery: "Wow, fastest turnaround I've ever seen. Your reports are so clear. My realtor is going to love this." Marcus realizes he finished before 4pm and will make his kids' soccer game.

**Conversion (Day 14):**
Marcus converts to the $149 LTD — no more monthly software anxiety. He posts on InterNACHI forum: "Switched from Spectora, honest review after 2 weeks." Eight more signups from the post. He refers two inspector friends directly.

**Requirements Revealed:**
- Offline mode: zero data loss in zero-signal environments (engineering-level reliability, not best-effort)
- AI photo tagging accuracy: must be good enough that Marcus rarely needs to drag-and-drop reorder
- Report draft review UX: inspector must feel in control of the AI output, not steamrolled by it
- Client delivery: link works without client account; PDF downloads cleanly on mobile
- Referral capture: mechanism to track referral source for attribution

---

### Journey 2: Marcus — Edge Case (App Unavailable Scenario)

**Context:** Marcus is mid-inspection when his phone dies. He has a backup tablet. He opens InspectAI on the tablet — his account is accessible, but the in-progress inspection data is on the dead phone.

**Challenge:** Data must not be lost. When the phone recovers (charge), local data must sync to cloud and become accessible across devices. If the phone doesn't recover, Marcus needs to know the data was already synced up to the point of failure.

**Resolution Path:**
- Sync status indicator in app always shows last successful sync timestamp
- If phone dies mid-inspection, Marcus can see on tablet that last sync was 14 minutes ago
- He can decide: continue on tablet (new data from minute 14 onward), or wait for phone to charge and recover the last 14 minutes locally
- When phone recovers and syncs, the platform merges: local (phone) data wins for any conflicts

**Requirements Revealed:**
- Sync status must be persistent and always visible — not buried in settings
- Multi-device: account is accessible on any device; in-progress inspection syncs at configurable intervals (default: every 5 minutes when on WiFi or LTE)
- Conflict resolution: documented policy (local wins) must be surfaced to inspector transparently

---

### Journey 3: Sarah — Small Firm Owner (Multi-Inspector Path)

**Background:** Sarah, 47, owns 3-inspector firm in Charlotte, NC. 40+ inspections/month across team. Spectora at $307/month base (3 inspectors) + Advanced fees = ~$420/month effective. Core pain: report quality inconsistency between team members.

**Discovery and Adoption:**
Sarah's monthly Spectora bill hits $430. She opens a comparison spreadsheet. InspectAI at $49/month flat (or a per-inspector volume deal she negotiates) saves $4,200/year. She signs all three inspectors up for a team trial.

**Core Usage:**
All three inspectors capture photos in the field. AI generates draft narratives for each inspector. Sarah reviews reports before delivery from a web dashboard — flagging inconsistencies, approving final versions. Every client gets the same quality report regardless of which inspector visited.

**Team-Specific Challenges (Phase 2 scope):**
- Web dashboard for Sarah to review and approve team reports before send
- Team comment library shared across all three inspectors (so AI has the same "voice" as the firm)
- Usage reporting: which inspector is completing reports fastest, which needs coaching

**Requirements Revealed:**
- Multi-inspector account: MVP needs to support 3+ inspectors under one billing account (even if just "add user" without role differentiation)
- Shared comment library at the firm level
- Report approval workflow (Phase 2): manager can review before client send
- Per-inspector usage analytics (Phase 2)

---

### Journey 4: New Inspector — Entrant Acquisition via LTD

**Background:** Jamie, 28, just passed InterNACHI certification. Starting his solo inspection business. Zero established tool preference. Budget-constrained (first year). Researching software options.

**Discovery:**
Jamie finds a YouTube video from an inspector reviewer who received a sponsored placement from InspectAI. The video demonstrates the AI photo-to-report workflow. Jamie searches "home inspection software lifetime deal" — InspectAI is the only result. At $149 one-time, he can start his business without monthly software overhead.

**Onboarding:**
Creates account, selects the InterNACHI standard template (the one he learned in certification), does a practice inspection on his own home. The AI generates a complete draft report. He realizes the tool is the same one the professionals use.

**Long-Term Value:**
Jamie stays on InspectAI because he's never had a bad experience and switching costs are psychological (his template library, client history, comment library). At month 18, he refers three colleagues who are also starting out. He converts two of them to LTDs (his referral gives them 10% off).

**Requirements Revealed:**
- LTD purchasing flow: seamless checkout, instant account activation
- Practice mode: inspector can do a "test" inspection on their own property without it appearing in production inspection history
- Referral program: LTD users can refer others; referral tracking; discount or credit mechanism
- Onboarding template recommendation: when user selects their certification (InterNACHI, ASHI, etc.), the default template pre-populates appropriately

---

### Journey 5: Realtor — Indirect Influencer

**Background:** Priya, 38, real estate agent in Phoenix, AZ. Works with 3 home inspectors she refers regularly. One of them (Marcus, from Journey 1) switches to InspectAI.

**Experience:**
Priya receives Marcus's first InspectAI report via link. The portal is clean, professional, no ads, loads fast on mobile. The PDF is branded with Marcus's logo, organized by severity, easy to explain to her clients. She texts Marcus: "What software are you using now? Your reports look so much better."

**Influence Mechanism:**
Priya starts recommending Marcus over two other inspectors she previously referred equally. She asks the other two why their reports don't look as good. One switches to InspectAI at Priya's indirect suggestion.

**Requirements Revealed:**
- Client portal: zero third-party ads, ever. This is a contractual and infrastructure commitment, not a "setting"
- PDF branding: inspector's logo and contact info are primary; InspectAI branding is in the footer at most ("Powered by InspectAI" is optional and can be disabled)
- Mobile-responsive portal: realtors view reports on phones; PDF must render well in mobile browser
- Shareable link: one link per report; realtors forward to their clients without needing an account

### Journey Requirements Summary

| Capability | Source Journey | Priority |
|-----------|---------------|---------|
| Offline-first data capture | Journey 1, 2 | MVP P0 |
| AI photo tagging by room | Journey 1 | MVP P0 |
| AI defect detection per photo | Journey 1 | MVP P0 |
| AI narrative pre-population | Journey 1 | MVP P0 |
| Report draft review UX | Journey 1 | MVP P0 |
| PDF generation with inspector branding | Journey 1, 5 | MVP P0 |
| Client delivery via link (no account) | Journey 1, 5 | MVP P0 |
| Zero ads in client-facing materials | Journey 1, 5 | MVP P0 |
| Sync status indicator | Journey 2 | MVP P1 |
| Multi-device access | Journey 2 | MVP P1 |
| Conflict resolution transparency | Journey 2 | MVP P1 |
| Multi-inspector account support | Journey 3 | MVP P1 |
| Shared comment library | Journey 3 | Phase 2 |
| Report approval workflow | Journey 3 | Phase 2 |
| LTD purchasing flow | Journey 4 | MVP P0 |
| Practice/test inspection mode | Journey 4 | MVP P1 |
| Referral program | Journey 4 | Phase 2 |
| Template recommendation by certification | Journey 4 | MVP P1 |
| PDF mobile rendering | Journey 5 | MVP P0 |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. AI-at-Capture (vs. AI-at-Review)**

Every AI feature in existing home inspection software is post-processing: the inspector takes photos, finishes the inspection, then opens a separate "AI assistant" that analyzes photos after the fact. InspectAI fires AI analysis at capture time — defect detection and narrative generation complete before the inspector moves to the next room. The report is drafted during the walk-through.

This is architecturally distinct: it requires the AI pipeline to be embedded in the mobile capture flow, not sitting in a web dashboard waiting for a batch upload. The inspector's capture UX must incorporate AI feedback without breaking the physical inspection rhythm.

**2. Offline-First AI**

Current AI inspection tools assume connectivity for AI inference (API calls to GPT-4o require network). InspectAI's offline-first architecture means the capture must work without network, and AI inference is queued and fires when connectivity is available — even if that's after the inspector leaves the property. The UX must clearly communicate "AI analysis pending" vs. "AI analysis complete" states.

**3. LTD as Category-Defining Marketing**

No home inspection software has offered a Lifetime Deal. The LTD at $149 creates a category-defining marketing moment — it will be the first result when any inspector searches "home inspection software lifetime deal." Inspector forums and communities will discuss it (they discuss pricing constantly). This is not just a revenue mechanism — it's an acquisition strategy that generates organic discussion.

### Market Context & Competitive Landscape

Current AI home inspection competitors:
- **Spectora Comment Assist** — Bolt-on AI, not native to capture flow; requires post-inspection batch processing
- **Inspector Toolbelt** — $69.99/month, AI-integrated but not AI-native; growing Spectora alternative
- **SwiftReporter** — $39/month, AI-native positioning, very small user base, limited brand awareness
- **Tenspect / InspectAI (external product)** — "delivers reports in minutes" marketing; unclear market presence; not the same product as this PRD

The gap: no platform has combined (a) AI-at-capture, (b) offline-first reliability, and (c) LTD pricing. SwiftReporter is the closest analogue at $39/month AI-native, but lacks offline-first and has no market presence.

### Validation Approach

- **AI accuracy validation:** 10-inspector beta cohort, measure edit rate on AI-generated narratives; target < 20% of AI defect descriptions require significant edits
- **Offline reliability validation:** Staged testing in Faraday cage (simulated zero signal); 100 inspection sessions with forced network drop during capture; zero data loss requirement before production launch
- **LTD demand validation:** Pre-launch landing page with "join waitlist for LTD offer" CTA; target 500 waitlist signups before AppSumo deal goes live

### Risk Mitigation

| Innovation Risk | Mitigation |
|----------------|-----------|
| AI inference latency ruins capture UX | Async pipeline: capture never blocks on AI; AI runs in background; inspector continues to next item |
| Offline photo volume exhausts device storage | Progressive upload: photos sync to cloud as soon as signal restores; local cache has configurable max size |
| LTD pricing cannibalizes subscription revenue | LTD capped at solo inspector tier; multi-inspector firm pricing is subscription-only |
| GPT-4o Vision API costs exceed gross margin | Cost modeling: ~$0.15 per 50-photo inspection × 15 inspections/month × 800 users = ~$1,800/month at scale; viable at $49/month subscription floor |

---

## SaaS Mobile Specific Requirements

### Platform Overview

InspectAI is a mobile-primary SaaS with three client surfaces:
1. **iOS native app** — primary field tool; handles photo capture, AI pipeline, offline inspection, report review
2. **Android native app** — same capability parity as iOS; secondary by market share in inspector segment (inspectors skew toward iPhone)
3. **Web dashboard** — account management, template editing, inspection history, report management, billing; no field use

### Technical Architecture Considerations

**Offline-First Data Architecture:**
- SQLite on device as local datastore; all writes go to local first
- Background sync service: monitors connectivity, uploads queued data on restore
- Conflict policy: local device data is authoritative; server data never overwrites unconfirmed local writes
- Sync state visible at all times via persistent status indicator in app header

**AI Pipeline Architecture:**
- Photo capture → local storage (immediate, always)
- Photo upload queue → GPT-4o Vision API call → defect detection + room tagging + narrative suggestion → stored locally and server-side
- Inspector sees "AI Analyzing..." state for each photo; can proceed to next item without waiting
- Narrative suggestion appears in report editor when AI completes; inspector reviews, edits, approves

**Report Generation:**
- Reports generated server-side as PDF (not on device) for consistent rendering
- Inspector taps "Generate Report" → server assembles template + approved content + photos → returns PDF URL
- PDF generation target: < 10 seconds for 50-photo inspection

**Multi-Tenancy:**
- Single-tenant data isolation per inspector account from day 1
- Multi-inspector accounts: shared billing, shared comment library, separate data namespaces per inspector
- No cross-inspector data leakage

### Platform Requirements

| Requirement | Specification |
|------------|--------------|
| iOS minimum version | iOS 16+ (covers 95%+ of active iPhones) |
| Android minimum version | Android 12+ (API level 31) |
| Offline storage minimum | 500MB local cache for photos (typical inspection: 50–100 photos @ 3–5MB each = 150–500MB) |
| Background sync | Fires within 30 seconds of connectivity restore |
| Push notifications | iOS APNs + Android FCM for report delivery confirmations, sync errors |
| Camera permissions | Native camera integration; microphone for voice notes |

### Authentication and Security

- Email/password signup; optional Google OAuth for mobile convenience
- JWT access tokens with 1-hour expiry; refresh tokens with 30-day rolling expiry
- All API calls authenticated; no anonymous access to inspection data
- Passwords: bcrypt with minimum cost factor 12
- 2FA: optional TOTP at account level; not required for MVP (inspector audience is not high-risk)

### Tenant Model

- **Solo inspector:** 1 user, 1 account, full access; LTD available
- **Small firm (2–5 inspectors):** 1 billing account, multiple user seats; subscription pricing; shared comment library; individual report ownership
- **Enterprise (Phase 2):** Team management dashboard, role-based access (inspector vs. firm owner), report approval workflow

### Permission Matrix (MVP)

| Role | Capture Inspection | Edit Own Report | View All Reports | Manage Templates | Manage Billing |
|------|-------------------|----------------|-----------------|-----------------|---------------|
| Inspector | Yes | Yes | Own only | No | No |
| Firm Owner | Yes | Yes | All firm | Yes | Yes |

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product exists to prove one thing: AI-at-capture reduces post-inspection report time from 2 hours to 20 minutes. Every MVP feature either directly enables this outcome or supports the commercial model required to fund its development. Nothing else.

**Resource Requirements:** 2–3 engineers (1 mobile/iOS, 1 backend/AI pipeline, 1 full-stack/web dashboard); 1 product/design; founder-led sales for first 75 customers. Estimated MVP build: 10–14 weeks at full team.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo inspector: discovery → trial → first inspection → AI report draft → client delivery → conversion to paid
- Realtor: receives clean, professional, ad-free report via link

**Must-Have Capabilities:**
- iOS app: native camera, offline-first storage, AI queue, photo tagging, defect detection UX, report draft review, voice notes
- Android app: feature parity with iOS (or iOS-first with Android 60 days post-iOS launch if resource-constrained)
- AI pipeline: GPT-4o Vision integration; defect category detection; narrative suggestion in inspector's template style; async, non-blocking
- Template system: InterNACHI, ASHI, General templates; logo/color customization; section reorder
- PDF generation: server-side; inspector branding; severity organization; 10-second target
- Client delivery: unique link; no account required; mobile-responsive; PDF download; zero ads
- Offline sync: local-first; background sync; conflict resolution; sync status indicator
- Comment library: inspector's own defect descriptions; AI uses these as style reference
- Billing: $49/month subscription via Stripe; $149 LTD via Stripe one-time payment; 30-day free trial, no credit card required

### Post-MVP Features

**Phase 2 (Months 3–6, post-PMF validation):**
- Scheduling and calendar integration (Google Calendar, Outlook)
- Automated client communications (confirmation, reminder, delivery, review request)
- Payment collection (Stripe, 2.9% + $0.30, no markup)
- Digital agreements and e-signature
- Spectora template migration assistant (import Spectora templates/comment libraries)
- Full video capture (60-second clips, AI frame extraction)
- Multi-inspector firm features: team management, report approval workflow, team analytics
- Report approval workflow: firm owner reviews before send

**Phase 3 (Months 6–12+):**
- AI code citations (IRC, NEC, UPC auto-references)
- Risk score automation
- Inspector business analytics dashboard
- Florida 4-Point and Wind Mitigation templates
- QuickBooks integration
- Repair cost estimates (Angi/HomeAdvisor API)
- Adjacent market templates: commercial (ASTM E2018), pool, fire safety

### Risk Mitigation Strategy

**Technical Risks:**
- *AI latency breaks capture UX:* Async pipeline — capture never waits for AI; AI status shown non-intrusively
- *Offline data loss:* Progressive sync every 5 minutes on connectivity; validated in Faraday cage testing pre-launch
- *PDF rendering inconsistency across devices:* Server-side generation (not device-side); single rendering engine

**Market Risks:**
- *Spectora recovers inspector trust:* The Fixle controversy damage is structural; even if Spectora reverses course, inspector trust takes years to rebuild; LTD cohort creates irreversible switching
- *Inspector Toolbelt gains AI-native features:* Possible; 6-month head start on offline-first architecture is the moat; marketing moat is the LTD which they cannot replicate without changing their business model

**Resource Risks:**
- *AI API cost exceeds projections:* Cap per-inspection AI calls; offer "offline-only" mode where AI runs after sync rather than at capture; GPT-4o cost modeled at $0.15/inspection is conservative
- *Android parity delay:* iOS-first acceptable if communicated upfront; Android timeline public on website; Android-first inspectors are smaller cohort

---

## Functional Requirements

### Photo Capture and Field Data Collection

- FR1: Inspectors can capture photos using the native device camera from within the app, including in zero-connectivity environments.
- FR2: Inspectors can capture audio voice notes that are automatically transcribed to text for inclusion in report narratives.
- FR3: Inspectors can capture photos in batch bursts and assign them to a room or section as a group.
- FR4: Inspectors can manually reorder or re-categorize photos that the AI has tagged incorrectly.
- FR5: Inspectors can annotate photos with arrows, circles, and text labels before adding them to a report.
- FR6: Inspectors can view the sync status of all locally captured data at any time, including the timestamp of the last successful cloud sync.
- FR7: The system stores all captured data locally first, with background upload to cloud on connectivity restore, with zero data loss on unexpected app termination or device shutdown.

### AI Defect Detection and Narrative Generation

- FR8: The system analyzes each captured photo asynchronously and suggests one or more defect categories (Structural, Electrical, Plumbing, HVAC, Roof, Interior, Exterior, Insulation, Miscellaneous).
- FR9: The system generates a draft defect narrative for each AI-flagged defect, using language style drawn from the inspector's personal comment library when available.
- FR10: Inspectors can review each AI-generated defect suggestion — accepting, editing, or rejecting — before the item is included in the report.
- FR11: The system tags each captured photo with a room or section label, using visual context from the photo to infer the correct location.
- FR12: Inspectors can access their personal comment library to override or supplement AI-generated narrative with their own preferred defect descriptions.
- FR13: The system queues AI analysis for photos captured offline and processes them when connectivity is restored, surfacing results to the inspector in the report editor.

### Report Template and Customization

- FR14: Inspectors can select from pre-built report templates: InterNACHI Standard, ASHI Standard, and General Home Inspection.
- FR15: Inspectors can customize template elements including business logo, header/footer text, brand color, and section display order, without writing code.
- FR16: Inspectors can add or remove sections from a template on a per-inspection basis.
- FR17: Inspectors can create and save custom inspection checklist items within any section.

### Report Drafting and Review

- FR18: Inspectors can view a unified report draft showing all AI-generated and manually entered content organized by section and severity, before generating the final PDF.
- FR19: Inspectors can categorize each defect item by severity: Safety Hazard, Major Defect, Minor Defect, or Maintenance Item.
- FR20: Inspectors can add, edit, or delete any report item from the draft review view.
- FR21: Inspectors can rearrange the order of items within a section.
- FR22: Inspectors can preview the final report as a PDF from within the app before sending to the client.

### PDF Report Generation

- FR23: The system generates professional PDF reports with inspector-supplied branding (logo, name, license number, contact info) as the primary identity; InspectAI branding is limited to an optional footer attribution.
- FR24: Generated PDFs organize defects by severity (Safety Hazard, Major Defect, Minor Defect, Maintenance Item), with a severity-filtered summary section.
- FR25: Generated PDFs embed photos inline with each defect item, including any annotations added by the inspector.
- FR26: Generated PDFs include an auto-generated table of contents based on included sections.
- FR27: Generated PDFs include a digital signature block for the inspector.
- FR28: The system generates PDFs in under 10 seconds for inspections with up to 100 photos.

### Client Delivery

- FR29: Inspectors can deliver reports to clients via a unique, shareable URL that does not require the client to create an account.
- FR30: Clients can download the PDF report from the delivery URL on any device including mobile.
- FR31: Inspectors can deliver reports via email, with a customizable subject line and body message.
- FR32: The client-facing delivery portal and PDF contain zero third-party advertising, affiliate links, or promotional content for services other than the inspector's own business.
- FR33: Inspectors can revoke access to a client delivery link after delivery.

### Inspection and Client Management

- FR34: Inspectors can create, view, search, and filter their inspection history by client name, property address, inspection date, and status.
- FR35: Inspectors can store client contact information and auto-populate it for repeat clients.
- FR36: Inspectors can export their inspection history as a CSV file for their own records.
- FR37: Inspectors can duplicate a previous inspection's template configuration for a new inspection of the same property type.

### Account and Billing

- FR38: Inspectors can sign up for a 30-day free trial without providing a credit card.
- FR39: Inspectors can subscribe at $49/month via Stripe, with monthly billing and the ability to cancel at any time.
- FR40: Inspectors can purchase a Lifetime Deal (LTD) at $149 via a one-time Stripe payment, granting permanent access to the solo inspector tier.
- FR41: The system supports multiple inspectors under a single billing account, with each inspector having their own login, photo library, and inspection history.
- FR42: Inspectors can update their payment method, view billing history, and download invoices from the account settings.

### Comment Library

- FR43: Inspectors can create, edit, and delete personal defect description entries in their comment library, organized by category.
- FR44: Inspectors can search their comment library by keyword and insert entries directly into the report editor.
- FR45: The AI narrative generation system uses the inspector's comment library as a style and language reference when generating defect narratives.

---

## Non-Functional Requirements

### Performance

- NFR1: App launch to camera-ready state in under 3 seconds on devices manufactured within the past 4 years (iPhone 12 and newer, equivalent Android flagship).
- NFR2: AI photo analysis results (defect detection + room tag + narrative suggestion) available within 3 seconds of photo upload completion when on WiFi or LTE.
- NFR3: Report PDF generation completes within 10 seconds for inspections containing up to 100 photos, as measured from inspector tap of "Generate Report" to PDF URL available.
- NFR4: Report delivery link loads within 2 seconds on 4G LTE for clients, as measured by Time to Interactive on a standard mobile browser.
- NFR5: Inspection list and search results load within 1 second for inspectors with up to 500 inspections in history.

### Reliability

- NFR6: The mobile app shall sustain a crash-free session rate of > 99.9% in production (< 1 crash per 1,000 inspection sessions) at launch, improving to > 99.99% by month 12, as measured by app telemetry (Sentry or equivalent).
- NFR7: The local-first storage architecture shall produce zero data loss events — defined as confirmed local writes that are not recoverable after device restart — in any test or production environment.
- NFR8: The background sync service shall successfully upload locally stored inspection data within 30 seconds of connectivity restore, for payloads up to 200MB.
- NFR9: The cloud API shall maintain 99.9% monthly uptime during business hours (8am–8pm ET, Monday–Sunday), as measured by uptime monitoring (Uptime Robot or equivalent).
- NFR10: The system shall retain locally stored inspection data for a minimum of 30 days without sync, to accommodate inspectors working in remote areas without regular connectivity.

### Security

- NFR11: All data transmitted between mobile app and API is encrypted via TLS 1.3+; no plaintext transmission of inspection data, photos, or personal information.
- NFR12: All inspection photos and report data stored in cloud storage are encrypted at rest using AES-256 or equivalent.
- NFR13: Inspector passwords are stored using bcrypt with a minimum cost factor of 12; plaintext passwords are never stored or logged.
- NFR14: JWT access tokens expire in 1 hour; refresh tokens expire in 30 days and are rotated on each use; compromised refresh tokens can be revoked by inspector from account settings.
- NFR15: Each inspector's inspection data is logically isolated in storage; API access controls ensure no inspector can query, view, or modify another inspector's data.
- NFR16: Third-party AI API calls (GPT-4o Vision) transmit only the photo binary; no personally identifiable information (PII) about the inspector or client is included in AI API requests.

### Scalability

- NFR17: The backend API shall support horizontal scaling to handle a 10x increase in concurrent users (from 100 to 1,000 concurrent active sessions) with no more than 20% degradation in response time, without architecture changes.
- NFR18: Cloud storage for photos shall auto-scale to accommodate up to 10TB of stored inspection photos without manual intervention.

### Accessibility

- NFR19: The iOS and Android apps shall meet WCAG 2.1 AA contrast ratios for all text elements.
- NFR20: All interactive elements in the mobile app shall have accessible labels readable by VoiceOver (iOS) and TalkBack (Android).
- NFR21: The client-facing report delivery portal shall meet WCAG 2.1 AA standards, as clients may include individuals with visual impairments who receive inspection reports.

### Integration

- NFR22: The GPT-4o Vision API integration shall implement retry logic with exponential backoff (3 retries, max 30-second wait) to handle transient API failures without data loss or inspector-visible errors.
- NFR23: The Stripe billing integration shall handle payment failures with automatic retry (3 attempts over 7 days) and inspector notification before account suspension.
- NFR24: PDF generation shall produce files compliant with PDF/A-1b standard for long-term archival compatibility, as some jurisdictions require inspectors to retain reports for 5–7 years.
- NFR25: The system's REST API shall include versioned endpoints (e.g., /v1/) from day one to support future mobile app version compatibility during phased rollouts.

---

*PRD completed: 2026-04-22*
*This document serves as the capability contract for UX design, architecture, and epic/story breakdown.*
*Next recommended workflow: `create-architecture` — Technical Architecture for InspectAI*

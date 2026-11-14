---
stepsCompleted: ["step-01-init.md", "step-02-discovery.md", "step-02b-vision.md", "step-02c-executive-summary.md", "step-03-success.md", "step-04-journeys.md", "step-05-domain.md", "step-06-innovation.md", "step-07-project-type.md", "step-08-scoping.md", "step-09-functional.md", "step-10-nonfunctional.md", "step-11-polish.md", "step-12-complete.md"]
inputDocuments:
  - ideas/shortlisted/on-site-change-order-app-for-contractors.md
  - _bmad-output/planning-artifacts/market-research-on-site-change-order.md
  - _bmad-output/planning-artifacts/product-brief-on-site-change-order.md
workflowType: prd
classification:
  projectType: mobile_saas
  domain: field_services_construction
  complexity: low-medium
  projectContext: greenfield
research_topic: on-site-change-order
user_name: Root
date: 2026-11-14
---

# Product Requirements Document — ChangeGuard

**Author:** Root
**Date:** 2026-11-14
**Product:** ChangeGuard — On-Site Change Order App for Contractors

---

## Executive Summary

Small contractors and handymen lose 5–10% of annual revenue to disputed change orders — verbal agreements customers deny by invoice time. The industry-wide cost is $177B annually in North America. No affordable, mobile-first standalone tool purpose-built for the 1–20-person contractor segment currently owns this category.

**ChangeGuard** is a mobile-native app (iOS and Android) that reduces on-site change order capture to 30 seconds: describe the work, enter the price, attach a photo, hand the customer the phone to sign with a finger, receive an auto-generated PDF via email, and return to work. The original project estimate is immutable — every change order is additive — creating a defensible audit trail that eliminates billing disputes.

**Target users:** Solo handymen ($80K–$150K/yr revenue), small remodeling crews (3–10 people, $300K–$800K/yr), specialty trade contractors (electricians, plumbers, HVAC). Common profile: 10+ years in trades, owns a smartphone, resistant to subscription software, has a specific story about a customer who cost them money.

**Business model:** $19/mo (≤3 active jobs) · $29/mo (unlimited) · $59 LTD AppSumo early-bird · $99 LTD AppSumo regular.
**Revenue target:** $11.8K LTD revenue in month 1 (AppSumo launch) → $16K MRR by month 12.
**Build estimate:** 4–6 week MVP (e-sign, PDF, offline sync — well-understood primitives).

### What Makes This Special

ChangeGuard is not a project management tool with change orders as a module. It is the first standalone, offline-first change order product positioned explicitly as a legal protection tool. Three compounding differentiators separate it from the 2026 competitive field (ScopeProof, Change Order Pro, VaryOrder, Contractor Ace):

1. **Immutable original estimate + additive CO history**: The original scope is a fixed reference point; COs are layered on top as dated, signed documents. No competitor positions around this audit trail framing — it reframes the product from "admin task" to "financial protection."
2. **True offline-first**: The entire CO flow — creation, signature capture, on-device PDF generation, queued email delivery — operates without internet. No competitor prominently markets this. It directly addresses the job-site reality: basements, rural properties, and metal buildings have no cell signal.
3. **AppSumo LTD at $59**: One-time purchase removes the subscription objection. A $500 recovered dispute pays for the app 8× over. No current competitor has executed an AppSumo launch. This is a time-limited first-mover opportunity.

**Core insight**: The customer who signs on-screen while standing next to the contractor is in a fundamentally different psychological state than the customer who receives a PDF email three days later. ChangeGuard captures the signature at the moment of agreement — before the customer drives away and forgets.

### Project Classification

- **Project Type:** Mobile SaaS (iOS + Android, React Native or Flutter cross-platform)
- **Domain:** Field Services / Construction (non-regulated; ESIGN Act compliance required for e-signatures)
- **Complexity:** Low-medium (well-understood primitives: e-sign, PDF generation, offline sync)
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

A contractor using ChangeGuard achieves success when they recover payment for work they would previously have absorbed as a loss. The specific user success outcomes:

- **Dispute prevention**: Contractor completes a CO capture in ≤60 seconds while the customer is physically present. Customer signs before they can say "I don't remember agreeing to that."
- **Professional credibility**: Customer receives a branded PDF email within 2 minutes of signing. PDF includes contractor logo, job name, CO description, price, customer signature, and timestamp. Contractor looks professional regardless of business size.
- **Instant recall**: Any historical CO is retrievable in ≤10 seconds from job history. When a dispute arises weeks later, the contractor pulls up the signed PDF in front of the customer immediately.
- **Field reliability**: Contractor captures a CO in a basement with zero cell signal. The app does not degrade, fail, or show error states. Data syncs when connectivity is restored.

**Primary user success signal**: Customer replies "got it" to the PDF email, or the CO record is cited in a successful payment dispute resolution.

**Anti-success state**: Contractor installs the app but creates <2 COs/month in month 2 — indicates the app was not adopted into their field workflow. This is the core retention risk.

### Business Success

| Objective | Month 3 | Month 12 |
|-----------|---------|---------|
| AppSumo LTD buyers | 200+ | — |
| Total paying customers | 200+ | 1,200+ |
| MRR | $0 (LTD phase) | $16,000 |
| App Store rating | >4.5 stars | >4.6 stars |
| G2 reviews | 25+ | 100+ |
| NPS | >50 | >60 |
| CAC (blended) | <$30 | <$25 |

**Business success signal**: LTD buyers refer other contractors organically, without incentive, within the first 30 days of use.

### Technical Success

- PDF delivery success rate: >99% (non-negotiable — delivery failure destroys trust)
- CO capture flow completion: >95% of initiated COs result in a sent PDF (no abandoned flow from UX friction)
- Offline CO completions: measurable from day 1; target >15% of total COs created offline (confirms real field use)
- Crash-free sessions: >99.5% across both iOS and Android
- Sync conflict rate: <0.1% of offline-created records (data integrity is critical for legal defensibility)

### Measurable Outcomes

- **COs created per active customer per month**: The single leading retention indicator. Target: >5 at month 3, >8 at month 12. Below 2/month = churn risk.
- **Day-7 retention**: >60% at month 3; >70% at month 12.
- **PDF photos attached**: >30% of COs include at least one photo. Indicates adoption of full value (documentation quality).
- **Dispute recovery self-report**: >40% of NPS respondents report recovering a disputed payment within 90 days of first use (via open-ended NPS survey prompt).

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers exactly one thing reliably: a contractor captures a signed change order on-site in under 60 seconds and the customer receives a professional PDF, regardless of internet connectivity.

**MVP must-have capabilities:**

1. **Job Management** — Create a job (customer name, original scope, original price); view job list sorted by recency with running total; mark jobs complete.
2. **Change Order Creation** — From any active job, describe the work (text + voice-to-text), enter price, optionally attach 1–3 photos, capture on-screen customer signature.
3. **On-Device PDF Generation** — Professional PDF created locally (no server roundtrip): contractor logo, job name, CO number, description, price, photos, signature, timestamp, ESIGN Act disclosure.
4. **Automatic PDF Delivery** — PDF emailed to customer's address on file; queued if offline and sent on reconnection; saved to job record and re-sendable at any time.
5. **Running Project Total** — Persistent display: "Original: $X | Approved COs: $X | Total: $X." Original price is immutable.
6. **Offline-First Architecture** — Full CO flow (create → sign → PDF → queue email) operates with zero connectivity. Sync status indicator shows pending items.
7. **Contractor Setup** — Company name, logo upload, email address, default sender name. Email + password auth (Google sign-in optional v2).

**MVP success gate** (proceed to Phase 2 when all met):
- 200+ AppSumo LTD buyers in month 1
- COs per active customer >5/month
- PDF delivery success rate >99%
- NPS >50 from first 50 customers surveyed
- Zero churn attributable to core CO flow failure

### Growth Features (Post-MVP)

**Phase 2 (Months 4–9):**
- Pre-CO job estimate: contractor creates a formal signed quote before work begins; original scope becomes a customer-signed document, not a text field
- Customer-facing online approval link: email CO with "approve online" button (no phone required for lower-dollar COs)
- Multiple photos per CO with before/after labeling
- CO status tracking: pending / approved / declined / revised
- Contractor branding: custom PDF color accent, company watermark
- Annual billing option (2 months free)
- Google sign-in

**Phase 3 (Months 10–18):**
- QuickBooks export (CO + job totals become invoice line items)
- Running "dispute risk score" per job (documentation completeness indicator)
- Multi-user: assign jobs to crew members, track CO author per record
- Customer portal: homeowners view full project CO history
- Stripe payment integration: request deposit or partial payment at CO approval
- UK/Australia localization ("variation orders" terminology, GBP/AUD, UK legal disclosure language)

### Vision (Future)

ChangeGuard becomes the financial protection layer for small contractors: estimates → change orders → invoicing → payment collection. Not a full PM platform (never Buildertrend), but the focused tool ensuring contractors get paid for every dollar of work completed. Likely exit path: acquisition by ServiceTitan, Jobber, or Housecall Pro as a CO-specialist bolt-on.

---

## User Journeys

### Journey 1: Mike — Solo Handyman, First Change Order (Success Path)

**Opening scene:** Mike is replacing bathroom flooring at a customer's house. He's been using ChangeGuard for three days, still a little skeptical. While removing the subfloor, he discovers rot. He calls the homeowner over: "There's a problem here. I need to replace this section of subfloor — that's going to be another $450."

The homeowner says "yeah, do it." Last time this happened, Mike just did the work and invoiced later. The customer paid the flooring line item but disputed the subfloor charge: "That wasn't in the quote." Mike absorbed $650 that time.

**Rising action:** Mike pulls out his phone and opens ChangeGuard. He taps the flooring job, hits "Add Change Order." He dictates: "Replace 4x8 section of rotted subfloor, OSB and fasteners." Types $450. Takes a photo of the exposed rot. Hands the phone to the homeowner.

**Climax:** The homeowner signs with her finger. The screen shows her signature, the CO description, and the price. She taps "Looks good." ChangeGuard generates a PDF and emails it to her address on file. Mike gets a confirmation: "Change order sent."

**Resolution:** Two weeks later, the invoice arrives. The homeowner has forgotten half the conversation. But there's the email: "Change Order #2 — Rotted subfloor replacement — $450 — signed by [her name] at 2:14 PM on [date]." She pays the invoice without calling. Mike realizes: *this is the first time I've never had to explain a charge twice.*

**Journey requirements revealed:** CO creation flow, voice-to-text description, photo attachment, on-screen signature, on-device PDF generation, automatic email delivery, job history with CO record.

---

### Journey 2: Carlos — Small Remodeler, Multi-CO Kitchen Project (Complex Path)

**Opening scene:** Carlos is managing a kitchen gut renovation for a homeowner couple. Original contract: $42,000. Carlos now averages 8–12 change orders per kitchen — tile upgrades, electrical surprises, structural issues. His current process: paper form, office scans it, emails it next day. Two disputes in the last year cost $3,200 combined.

**Rising action:** Week 2 of the job. The electrician discovers the existing panel is a 100-amp service when the plans assumed 150. Upgrading it is $1,800 not in the original scope. The homeowners are present. Carlos needs to get a CO signed while they're standing in their half-gutted kitchen.

He opens ChangeGuard, navigates to the kitchen job: "Original: $42,000 | Approved COs: $3,200 (2 previous) | Current Total: $45,200." He adds CO #3: "Electrical panel upgrade from 100A to 150A service. Required due to existing panel being undersized for new kitchen load." Price: $1,800. Photos: before photo of existing panel label. The homeowners sign together (one signs, confirms the other was present in the description field).

**Climax:** Carlos emails the CO from the job site. His bookkeeper gets the email copy via CC. By end of day, the job total is updated in real time.

**Resolution:** Month-end billing. The bookkeeper generates the invoice: $42,000 original + 4 approved COs = $49,600 total. Every line item has a signed PDF in ChangeGuard. Zero disputes. Zero ambiguous charges. Carlos invoices with confidence for the first time.

**Journey requirements revealed:** Job view with running total display, multiple COs per job with sequential numbering, CO history list per job, bookkeeper/CC email field, job total calculation, timestamp on each CO record.

---

### Journey 3: Jenny — Homeowner, Signing Experience (Customer Perspective)

**Opening scene:** Jenny is at home when her HVAC tech shows up. During the service call, he discovers the coil needs replacement — not in the original service call price. He explains the issue, gives her a price of $680, and says "I need a quick signature."

**Rising action:** Jenny has never signed on a contractor's phone before. The screen shows ChangeGuard's signature capture view: clean, with the work description ("Replace evaporator coil — Carrier 3-ton unit") and price ($680) clearly visible. The tech hands her the phone. No download prompt. No account creation. Just a signature field.

**Climax:** Jenny signs with her finger. The screen confirms: "Signed — a copy is being sent to your email." Within 90 seconds, her inbox has a PDF: contractor company header, her address, the work description, her signature, and the date and time. The PDF is clean and professional — it doesn't look like a hastily done invoice.

**Resolution:** The job is done. When the full invoice arrives, the coil line item is on it. Jenny references the email she got. Everything matches. No question, no call to the HVAC company. She pays online.

**Journey requirements revealed:** Customer-facing signature UI must be legible, non-threatening, and show the work + price clearly without requiring customer login. PDF must be received within 2 minutes of signing. PDF must be clean and professional enough to function as evidence in a dispute.

---

### Journey 4: Dana — Specialty Trades Electrician, GC Client, High-Dollar CO (Edge Case)

**Opening scene:** Dana's 3-person electrical company is on a commercial kitchen build-out. Her client is a general contractor (GC), not a homeowner. The GC is onsite when Dana's crew discovers a conduit conflict requiring rerouting — $2,400 extra labor. Dana needs a CO before her crew does the work. The GC has been difficult to reach by email; he wants to sign something now while he's on site.

**Rising action:** Dana pulls up ChangeGuard. She's in the basement mechanical room — no cell signal. She creates the CO offline: "Reroute 2-inch EMT conduit 40 feet around existing structural beam — additional labor not covered in original scope." $2,400. She takes a photo of the conflicting conduit. The GC reviews the description and price. He signs.

**Climax:** ChangeGuard queues the PDF for delivery. Dana sees "1 item pending sync." She goes back upstairs, signal returns, the email is sent automatically. The GC receives the PDF within minutes.

**Resolution:** 30 days later, the GC submits his draw request to the owner. Dana's $2,400 CO is in the GC's documentation package — her ChangeGuard PDF is attached. No dispute, no call, no explanation required. Dana has become the GC's most organized sub on the project.

**Journey requirements revealed:** Offline CO creation with zero degraded UX, automatic sync with email delivery on reconnection, sync status indicator (pending item count), PDF legally formatted enough for commercial/GC-to-owner documentation.

---

### Journey 5: Offline Recovery — Basement, No Signal (Edge Case / Technical Journey)

**Opening scene:** A contractor is finishing a basement. No cell signal in the finished space. Customer comes down to check progress and asks for a small additional work item — $175 for a utility shelf framing.

**Rising action:** Contractor opens ChangeGuard. No internet indicator visible. App loads normally. CO creation flow works identically to online mode. Customer signs. Contractor taps "Send."

**Climax:** ChangeGuard shows "Change order saved — email will be sent when back online." A counter in the job list shows "1 pending." The contractor continues working.

**Resolution:** Contractor packs up and walks upstairs. Signal returns. The pending queue sends automatically. Customer receives the PDF. No action required from the contractor.

**Journey requirements revealed:** Offline mode must be invisible to the contractor — no disabled states, no warnings, no "you must be online to do X." Sync must be automatic and silent. Pending queue must be visible but non-intrusive.

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Mike — first CO | CO create, voice-to-text, photo, signature, PDF, auto-email, job history |
| Carlos — multi-CO project | Running total display, CO history list, sequential numbering, CC email |
| Jenny — customer signing | Customer-facing signature UI, sub-2-minute PDF delivery, clean branded PDF |
| Dana — GC commercial | Offline create, auto-sync, legally formatted PDF for B2B contexts |
| Offline recovery | Zero-degraded offline UX, automatic sync, visible pending queue |

---

## Domain-Specific Requirements

### ESIGN Act Compliance (US)

E-signatures on change orders are legally binding in the US under the Electronic Signatures in Global and National Commerce (ESIGN) Act (2000) and the Uniform Electronic Transactions Act (UETA). ChangeGuard's signature capture must meet these requirements:

- **Disclosure**: Each CO PDF must include a one-line ESIGN Act disclosure: "This document was signed electronically and is legally binding under the Electronic Signatures in Global and National Commerce Act (15 U.S.C. §7001)."
- **Intent to sign**: The on-screen signing UI must display the work description and price before the signature field. The customer must affirmatively sign — no passive "I agree" checkboxes.
- **Record retention**: Signed CO records must be retained for a minimum of 7 years (the standard for contract disputes in most US jurisdictions). Records must be re-downloadable by the contractor at any time.
- **Audit trail data**: Each CO record must store: timestamp (UTC), device ID, IP address at time of sync (for records synced online), and the contractor's account identifier.
- **Non-repudiation support**: The PDF must include the signature image, the timestamp, and the CO content in a single document that cannot be modified post-signature without detection.

### Data Retention and Export

- Contractor must be able to export all job and CO data as a ZIP of PDFs (account portability, essential for legal evidence production).
- Deleting a job marks it archived, not deleted. Hard deletion requires explicit confirmation and is logged with timestamp.
- If a contractor cancels their account, they must have a 90-day window to export all data before it is purged.

### No Other Domain Regulations Apply

ChangeGuard handles no health data (HIPAA not applicable), no financial transactions (PCI-DSS not applicable in MVP), and no government data (FedRAMP not applicable). The domain is field services construction: a low-regulation environment where ESIGN compliance and data retention cover the full legal obligation surface.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Innovation 1: On-Device PDF Generation for Offline Legal Documents**

Generating a legally defensible, branded PDF entirely on a mobile device without a server roundtrip is not novel in isolation, but doing it as the core UX in an offline-first context — where the document is immediately visually presented to the customer as evidence of agreement — creates a category-defining experience. The closest analog in adjacent markets (field service apps) all require server-side PDF generation with network connectivity. ChangeGuard's on-device generation means the customer can be shown the PDF immediately after signing, reinforcing the agreement while they're still on-site.

**Innovation 2: Immutable Original Estimate as Legal Anchor**

No current change order tool positions the original estimate as an immutable, legally distinct record from change orders. In every competing tool, "original estimate" is a mutable field that can be edited. ChangeGuard makes the original scope write-once — a design decision that is simultaneously a product differentiator and a legal protection feature. This is not technically novel but is commercially novel in this category.

### Market Context & Competitive Landscape

As of Q4 2026, the standalone change order category has 4–5 players (ScopeProof, Change Order Pro, VaryOrder, Contractor Ace) with the following gaps:
- None have executed an AppSumo LTD
- None market explicitly around "legal protection" and "dispute defense"
- None have a documented offline-first architecture as a primary positioning claim
- None provide the immutable original estimate audit trail feature

ChangeGuard's innovation is primarily in **positioning and architecture**, not novel technology. The product's value is real but the technical implementation is straightforward — this reduces execution risk while maintaining genuine differentiation.

### Validation Approach

- AppSumo listing success (200+ buyers in 30 days) validates the ROI story and pricing
- Organic community shares of CO PDFs in Reddit/Facebook contractor groups (target: 3+ unprompted within 60 days of launch) validate the trust and professional quality of the output
- NPS survey open-ended responses that mention "dispute" or "got paid" validate the core legal protection value proposition

### Risk Mitigation

- **Competitor AppSumo launch**: Speed is the only mitigation. AppSumo application should be submitted concurrent with beta launch. First-mover advantage on the LTD mechanism is time-limited.
- **ScopeProof's free tier**: Compete on reliability, audit trail completeness, and professional PDF quality — not on price. ChangeGuard's free tier (5 COs/month) is for validation, not as a retention mechanic.

---

## Mobile SaaS Specific Requirements

### Project-Type Overview

ChangeGuard is a mobile-first SaaS product for iOS and Android. The primary use context is a job site: contractor holds the phone with one hand, customer signs with one finger, work continues within 60 seconds. The app must function as a primary business tool, not a web app that happens to be mobile-accessible. All core flows must be native-performance and thumb-reachable.

### Technical Architecture Considerations

**Cross-Platform Framework:**
- React Native or Flutter (cross-platform mandatory — iOS-only misses the Android-dominant contractor market)
- Native performance for signature capture and PDF rendering is a hard requirement; web-view-based solutions are excluded

**Offline-First Data Architecture:**
- Local-first database (SQLite via expo-sqlite or Hive for Flutter) as the source of truth
- Cloud sync secondary; app is fully functional with zero connectivity
- Conflict resolution strategy: last-write-wins on the device (contractors only create records, not edit collaboratively in MVP)
- Sync state must be visible (pending queue count) but not obstructive

**On-Device PDF Generation:**
- PDFs generated entirely on-device using a PDF library (react-native-pdf-lib, pdf-lib, or platform equivalent)
- No server roundtrip for PDF creation; server is only involved for email delivery relay and cloud backup
- PDF template must be compilable to work without network-dependent assets (logo stored locally after upload)

**E-Signature Capture:**
- Smooth SVG path capture on touchscreen
- Minimum 60fps signature rendering (feels responsive, not laggy)
- Signature stored as base64-encoded PNG embedded in PDF

**Email Delivery:**
- Outbound email via SendGrid or Resend transactional API
- Emails queued locally when offline, dispatched when connectivity returns
- Delivery receipts tracked; failed deliveries surfaced to contractor for manual retry

### Platform Requirements

| Platform | Minimum OS | Target |
|---------|------------|--------|
| iOS | iOS 15 | iOS 17+ |
| Android | Android 10 (API 29) | Android 13+ |

**Device Permissions:**
- Camera: required for photo attachment (optional, not mandatory to complete CO)
- Photo library: required for attaching existing photos
- Local notifications: for sync completion confirmation (optional, user-controlled)
- No microphone permission required at MVP (voice-to-text uses OS speech recognition, no custom recording)

### Mobile-Specific Implementation Considerations

- **App size**: Target <30MB installed (contractors have full phones with photos, tools, etc.)
- **Background sync**: Background task that fires when app moves to background and connectivity is available; dispatches pending email queue
- **Deep links**: Each CO and job gets a unique URI (for future customer portal and notification linking)
- **Keychain/secure storage**: Contractor credentials stored in OS keychain, not app local storage
- **Landscape mode**: Not required for MVP; portrait-only acceptable
- **Tablet support**: iPad support is a Phase 2 nice-to-have; not required for MVP
- **Accessibility**: Large-tap targets (≥44pt) throughout signature capture and CO creation flow; supports Dynamic Type scaling (font size preferences)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product is validated when a contractor uses it in the field on a real job, the customer signs, the PDF is received, and the contractor reports they would have handled that CO differently (worse) without the app.

**Resource Requirements:** 1–2 developers (React Native or Flutter), 1 designer for the PDF template and signature UI. 4–6 week build to beta. Backend is minimal: auth (Firebase Auth or Supabase), cloud sync (Supabase or PlanetScale), email relay (SendGrid). No custom backend logic in MVP beyond these.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo handyman capturing a CO mid-job, offline or online, in <60 seconds
- Small remodeler tracking multiple COs per project with running total visibility
- Customer signing on the contractor's phone and receiving the PDF

**Must-Have Capabilities:**
- Job creation and management (name, customer contact, original scope, original price)
- Change order creation (description, price, photos, on-screen signature)
- On-device PDF generation with contractor branding
- Automatic email delivery (queued if offline)
- Running project total (original + approved COs)
- Full offline support — zero degraded functionality
- Contractor account setup (company name, logo, email)
- Job history and CO history per job

### Post-MVP Features

**Phase 2 (Post-MVP, Months 4–9):**
- Pre-CO formal estimates (customer signs original scope document, not just a text field)
- Online customer approval link (async, no phone required)
- CO status workflow (pending → approved / declined / revised)
- Multiple photos per CO with before/after labeling
- Annual billing option
- Google OAuth sign-in
- Contractor branding customization (PDF color accent, watermark)
- iPad support

**Phase 3 (Months 10–18):**
- QuickBooks / accounting integration (CO totals as invoice line items)
- Multi-user team features (crew member assignment, CO author tracking)
- Dispute risk score per job (documentation completeness indicator)
- Customer portal (project history view)
- Stripe payment integration (deposit/partial payment at CO approval)
- UK/Australia localization

### Risk Mitigation Strategy

**Technical Risks:** On-device PDF generation with embedded signature and photos on low-end Android devices. Mitigation: test on 2016-era Android budget devices; use PDF libraries with known Android performance records; fallback to simplified PDF template if rendering exceeds 3 seconds on low-end hardware.

**Market Risks:** ScopeProof's free tier captures the price-sensitive segment before ChangeGuard launches. Mitigation: speed to AppSumo LTD. ChangeGuard's free tier (5 COs/month lifetime cap) is for validation only; the product competes on reliability and legal positioning, not price.

**Resource Risks:** If only 1 developer is available, reduce MVP scope to: job management, CO creation + signature, on-device PDF, local storage only (defer cloud sync to beta v2). This delivers the core value without sync complexity.

---

## Functional Requirements

### Job Management

- FR1: Contractor can create a job with customer name, optional phone/email, optional address, original scope description (text), and original agreed price.
- FR2: Contractor can view a job list sorted by most recent activity, displaying job name, original price, current total (original + all approved COs), and last activity date.
- FR3: Contractor can mark a job as complete (removes from active list; remains accessible in history).
- FR4: Contractor can search and filter job history by customer name, date range, or job status (active / complete).
- FR5: Contractor can archive a job (soft delete; data retained for 7 years; reversible within 90 days).

### Change Order Creation

- FR6: Contractor can initiate a new change order from any active job in ≤2 taps.
- FR7: Contractor can enter a CO description via text input or OS voice-to-text dictation.
- FR8: Contractor can enter a price for the change order (required field; numeric with decimal support).
- FR9: Contractor can attach 1–3 photos to a CO from the device camera or photo library.
- FR10: Contractor can review the complete CO (description, price, photos) before presenting it to the customer.
- FR11: Contractor can edit a CO description and price before the customer signs; changes are not permitted after signature is captured.

### Signature & Legal Capture

- FR12: Customer can sign the CO on the contractor's device touchscreen using a finger or stylus, with real-time ink rendering at ≥60fps.
- FR13: The signature capture screen displays the CO description and price in legible text before and during signing — the customer can see exactly what they are agreeing to.
- FR14: The signature capture screen includes the ESIGN Act disclosure statement.
- FR15: The signing interaction requires no customer account, app installation, or login.
- FR16: Contractor can re-present a completed CO for a second signature (e.g., homeowner couple both need to sign) by creating a duplicate CO with a note; original signed CO is not modified.
- FR17: The system records signature timestamp (UTC), device identifier, and sync IP (for records synced online) for each signed CO.

### Document Generation & Delivery

- FR18: The system generates a PDF entirely on-device within 10 seconds of signature capture, with no network connection required.
- FR19: The generated PDF includes: contractor company name and logo, customer name and address (if provided), job name, CO number (sequential per job), CO description, CO price, attached photos (if any), customer signature image, signature timestamp, and ESIGN Act disclosure.
- FR20: The PDF is emailed to the customer's email address on file immediately upon generation (or queued for delivery when connectivity is restored).
- FR21: Contractor receives an in-app confirmation when the PDF email is successfully delivered.
- FR22: Contractor can re-send any previously generated CO PDF from job history at any time.
- FR23: Contractor can view or download any previously generated CO PDF from job history.
- FR24: The PDF is visually branded with the contractor's company name and logo, presenting a professional appearance to the customer.

### Running Project Total & Audit Trail

- FR25: Each job view displays a persistent summary: "Original: $[amount] | Approved COs: $[sum] | Current Total: $[sum]."
- FR26: The original project price is immutable after job creation — it cannot be edited or overwritten by any subsequent action.
- FR27: Each CO is a permanent, additive record on the job. COs cannot be deleted after the customer has signed; they can be voided with a dated void note.
- FR28: Job CO history lists all COs in chronological order with CO number, description summary, price, and status (signed / voided).

### Offline & Sync

- FR29: Contractor can create a job, add a CO, capture a signature, and generate a PDF with zero internet connectivity — the full flow is available offline.
- FR30: Emails for offline-created COs are queued locally and dispatched automatically when connectivity is restored, without contractor action.
- FR31: Job data is synced to cloud backup automatically when connectivity is available; contractor has no manual sync action required.
- FR32: Contractor can view the count of pending (unsynced) records from the job list screen.
- FR33: Offline-created records sync without data loss or duplication conflicts in the case of interrupted sync.

### Contractor Setup & Account

- FR34: Contractor can create an account with email address and password.
- FR35: Contractor can upload a company logo image (JPEG or PNG) used in PDF headers.
- FR36: Contractor can set company name, reply-to email address, and default sender name for customer-facing emails.
- FR37: Contractor can export all job and CO data as a downloadable ZIP archive of PDFs at any time.
- FR38: Contractor can delete their account with a 90-day data retention window before purge.

### Notifications & Feedback

- FR39: Contractor receives an in-app notification (and optional push notification) when a queued email is successfully delivered.
- FR40: Contractor is shown an error state and retry option if email delivery fails after 3 automatic retry attempts.

---

## Non-Functional Requirements

### Performance

- The CO capture flow from tapping "Add Change Order" to receiving the in-app "email sent" confirmation completes in ≤60 seconds on a mid-range device (iPhone 11 / Samsung Galaxy A52 equivalent), measured end-to-end under normal conditions.
- On-device PDF generation (from signature capture to PDF available for display) completes in ≤10 seconds on the minimum supported device spec (iPhone X / Android API 29 device, 3GB RAM).
- The job list screen loads in ≤2 seconds for contractors with up to 500 jobs in history, as measured on the minimum supported device spec.
- Signature path rendering latency ≤16ms per input event (60fps) on the minimum supported device spec, as confirmed by frame profiling in development.

### Security

- All contractor and customer data is encrypted at rest in the cloud database using AES-256.
- All data in transit (app ↔ backend ↔ email relay) uses TLS 1.2+ with certificate pinning on the mobile client.
- Contractor credentials are stored in the OS keychain (iOS Keychain / Android Keystore), not in app-level local storage.
- Signed CO records are write-once in the cloud database — no update or delete operations on signed CO data are permitted via the API.
- Contractor account requires email verification before syncing data to the cloud.

### Reliability

- App availability (crash-free sessions) ≥99.5% across both iOS and Android, as measured by crash reporting (Firebase Crashlytics or Sentry).
- PDF delivery success rate ≥99% for all synced CO records, as measured by transactional email provider (SendGrid/Resend) delivery receipts.
- Offline data durability: 0% data loss for jobs and COs created offline, confirmed through automated integration tests simulating network interruption mid-sync.
- Cloud sync completeness: all locally created records are synced to cloud backup within 60 seconds of connectivity restoration.

### Scalability

- Backend architecture supports up to 10,000 concurrent active users with <10% performance degradation, validated by load testing before AppSumo launch.
- Database schema designed to support 1M+ CO records without query degradation on job history retrieval for individual contractors.
- Email delivery pipeline queues up to 10,000 pending emails during outages without data loss.

### Accessibility

- All interactive tap targets are ≥44×44 points (Apple HIG minimum for touch targets).
- App supports iOS Dynamic Type and Android font scaling up to 2× without layout breakage in the CO creation and signature flows.
- Signature capture and CO creation flows are navigable without color as the sole means of conveying information (supports color-blind users).
- Text contrast ratio ≥4.5:1 throughout the app (WCAG 2.1 AA text contrast standard).

### Integration

- Transactional email: SendGrid or Resend API (configurable by environment) with delivery receipt webhooks tracked in the backend.
- Cloud database: Supabase (PostgreSQL) or PlanetScale (MySQL-compatible); schema migrations managed via versioned migration files.
- Authentication: Firebase Auth or Supabase Auth (email/password in MVP; OAuth providers in Phase 2).
- File storage: contractor logos and CO photo assets stored in S3-compatible object storage (AWS S3 or Supabase Storage) with signed URL access.
- No third-party integrations (QuickBooks, Stripe, etc.) in MVP scope.

---

*ChangeGuard PRD — Complete. All sections reviewed and polished for density, coherence, and downstream LLM consumption.*

*Downstream artifacts this PRD feeds:*
- *Architecture: FRs 1–40 define the capability surface; NFRs define quality targets*
- *UX Design: User Journeys 1–5 define interaction flows; FRs define what must be designable*
- *Epics & Stories: Each FR maps to 1–2 implementation stories*
- *Development: Functional Requirements define the capability contract — if it is not in FR1–FR40, it is not in scope for MVP*

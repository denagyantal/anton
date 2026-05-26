---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - 'ideas/shortlisted/eu-e-invoicing-compliance.md'
  - '_bmad-output/planning-artifacts/market-research-eu-e-invoicing-compliance.md'
  - '_bmad-output/planning-artifacts/brief-eu-e-invoicing-compliance.md'
workflowType: 'prd'
lastStep: 12
date: '2026-05-26'
author: 'Root'
project: 'eu-e-invoicing-compliance'
classification:
  projectType: 'saas_b2b'
  domain: 'regtech_compliance'
  complexity: 'high'
  projectContext: 'greenfield'
---

# Product Requirements Document — PeppolPass

**Author:** Root
**Date:** 2026-05-26
**Product:** PeppolPass — EU E-Invoicing Compliance for Micro-SMBs
**Status:** Complete — ready for architecture and implementation

---

## Executive Summary

PeppolPass is a web-based Peppol compliance tool that enables EU micro-SMBs — sole traders, freelancers, and businesses with 1–5 employees — to send legally valid e-invoices without understanding the Peppol technical specification. The user enters invoice details in plain English, the system resolves the buyer's Peppol endpoint from their VAT number, generates a conformant UBL 2.1 / BIS Billing 3.0 XML document, delivers it via a certified Access Point, and issues a downloadable compliance certificate.

**The core problem:** Belgium's B2B e-invoicing mandate went live January 1, 2026. ~800,000 Belgian micro-businesses remain non-compliant. Every tool on the market is either: a free nonprofit tool with Dutch-only UX and no trust signals, or an enterprise API requiring developer integration at enterprise pricing. No English-first, non-technical, AppSumo-priced compliance tool exists for the micro-SMB segment, including Belgium's large international business community (37.2% non-Belgian Brussels residents).

**The mandates are non-negotiable and expanding:** Belgium (live), Poland (April 2026), France (SMEs September 2027), Germany (January 2028), EU ViDA cross-border (July 2030). First-mover in the micro-SMB compliance tool segment creates compounding defensibility through certified Access Point infrastructure, accountant distribution channel lock-in, and country-specific SEO and compliance expertise.

**MVP scope:** Belgium-only Peppol send, English-first UX, AppSumo LTD launch at €99–149. Six to eight weeks to MVP.

### What Makes This Special

PeppolPass occupies an unoccupied position: the only Peppol-certified e-invoicing tool that is simultaneously English-first for non-technical users, LTD-priced for AppSumo's international buyer base, compliance-certificate-issuing (something users can show their accountant), and committed to a multi-country expansion roadmap that follows every EU mandate wave through 2030.

Existing free tools (Let's Peppol, Accountable free tier) lack English support and confidence signals. Paid monthly tools (Billit €7.50/mo, Peppol Box €5/mo) are Dutch/French-first with no English option. Enterprise platforms (Pagero, Basware, Fiskaly, Fonoa) require API integration and IT staff. The compliance certificate feature — a downloadable PDF showing VAT number, Peppol ID, registration status, and last invoice delivery timestamp — is the unique trust artifact no competitor offers.

**The mandate itself is the distribution channel.** Every Belgian accountant sending a compliance reminder to their clients is a PeppolPass acquisition trigger. Every client rejection of a PDF invoice is a conversion event. No demand generation budget required for Year 1 in Belgium.

## Project Classification

- **Project Type:** SaaS B2B/B2C web application
- **Domain:** RegTech / Compliance (high complexity — regulated; certification required)
- **Project Context:** Greenfield
- **Primary Market:** EU micro-SMBs, Belgium-first
- **Technical Complexity Drivers:** OpenPeppol Access Point certification or Storecove API; Peppol SML/SMP directory lookups; UBL 2.1 schema validation; multi-country invoice format expansion; LTD + subscription billing coexistence

---

## Success Criteria

### User Success

Users succeed when they can send a legally valid Peppol invoice within 10 minutes of signing up, without reading any documentation or understanding what "UBL 2.1" means. The definitive success moment: the delivery confirmation screen appears after invoice submission, the user downloads their compliance certificate, and the anxiety of "am I legal?" is resolved with a document they can hand to their accountant.

Specific user success criteria:
- **Time to first compliant invoice:** < 10 minutes from account creation to confirmed Peppol delivery
- **Onboarding completion rate:** ≥ 65% of signups send at least one invoice within 7 days
- **Invoice delivery success rate:** ≥ 98% of submitted invoices reach buyer endpoint without error
- **Compliance certificate download rate:** ≥ 50% of users download certificate within 30 days of first invoice
- **User NPS:** ≥ 45 at Month 6; ≥ 55 at Month 12
- **Support ticket rate:** < 5 per 100 active users per month
- **"Buyer not found" resolution:** Users shown clear next-step guidance when buyer has no Peppol endpoint, not a dead end

### Business Success

- **AppSumo launch (Month 1–3):** 200 LTD buyers Month 1; 400 Month 3; €40K–€80K revenue in first 30-day window
- **Accountant channel (Month 2–6):** 25+ Belgian accountant partners with referral program; 30–40% of new signups via accountant referral by Month 6
- **Multi-country validation (Month 7–12):** Poland KSeF support launched; second-country architecture validated
- **ARR (Month 18):** €100K from €49/year annual compliance update subscriptions
- **North Star Metric:** Monthly Peppol invoices successfully delivered — measures user value, product reliability, and market penetration simultaneously

| KPI | Month 1 | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|---------|
| LTD buyers (cumulative) | 200 | 400 | 700 | 1,200 |
| Monthly active invoice senders | — | 150 | 400 | 900 |
| Invoices delivered/month | — | 1,000 | 3,500 | 8,000 |
| Accountant partners | 3 | 15 | 30 | 75 |
| Countries supported | 1 (BE) | 1 (BE) | 2 (BE+PL) | 3 (BE+PL+FR prep) |
| Compliance certificates issued | — | 300 | 900 | 2,500 |
| ARR (subscriptions) | €0 | €0 | €15K | €60K |

### Technical Success

- **Schema validation:** 100% of submitted invoices pass Peppol BIS Billing 3.0 schema validation before delivery attempt
- **Delivery reliability:** ≥ 98% delivery success rate; < 2% of invoices require user retry due to system error
- **Access Point certification:** OpenPeppol AP certification obtained, OR Storecove API agreement signed and tested, before MVP launch
- **Peppol lookup uptime:** SML/SMP VAT-to-PeppolID resolution available ≥ 99.5% of time
- **System availability:** ≥ 99.5% uptime; planned maintenance only during off-peak hours
- **Compliance certificate correctness:** 3+ Belgian accountants confirm certificates meet client documentation requirements before public launch

### Measurable Outcomes

MVP is launch-ready when all five gates pass:
1. 100 test invoices delivered across 5+ distinct buyer Peppol endpoints, 0 schema validation failures
2. 5 non-technical beta users complete first invoice in < 12 minutes with zero support intervention
3. 50 paid LTD codes sold in pre-launch with > 40 users sending at least 1 invoice
4. Access Point certification confirmed or Storecove agreement signed and tested
5. 3+ Belgian accountants validate compliance certificate output

---

## Product Scope

### MVP — Minimum Viable Product (Belgium-only, 6–8 weeks)

**Core user value:** Any non-technical business owner in Belgium can send a Peppol-compliant invoice to any VAT-registered Belgian buyer in under 10 minutes, receive proof of delivery, and download a compliance certificate — without reading a word of Peppol documentation.

**MVP feature set:**
- User registration and account creation (email + password)
- AppSumo LTD code redemption flow + Stripe billing for direct sales
- Invoice entry form: seller details (pre-filled from VAT number), buyer VAT number, invoice lines (description, quantity, unit price, VAT rate), invoice date, due date, invoice number
- Automatic buyer Peppol ID lookup from Belgian VAT number via SML/SMP directory
- UBL 2.1 / BIS Billing 3.0 XML generation and server-side schema validation
- Peppol network delivery via certified Access Point (own certification or Storecove API)
- Real-time delivery confirmation screen
- Downloadable compliance certificate PDF (VAT number, Peppol ID, invoice reference, delivery timestamp, certification badge)
- Invoice history list with delivery status and certificate download per invoice
- English-only UI
- Saved client VAT numbers for returning users (one-click buyer selection)
- "Buyer not on Peppol" handling: clear message + guidance when buyer has no registered endpoint
- Email support (Crisp or Intercom; < 24-hour response)

**Explicitly out of MVP scope:**
- Receiving/accepting incoming Peppol invoices
- PDF/CSV/OCR import
- QBO / Xero / FreshBooks integrations
- Poland KSeF or France Factur-X formats
- Dutch or French language localization
- Multi-user or accountant dashboard
- Mobile native app
- Webhook API or white-label

### Growth Features (Post-MVP, Months 3–6)

- Peppol receive: incoming invoice inbox with PDF view
- PDF-to-Peppol conversion (OCR + XML mapping)
- CSV/Excel bulk import for 50+ invoices/month users
- QBO/Xero outgoing invoice auto-conversion
- Dutch and French language localization (driven by demand signals)
- Accountant partner dashboard: manage compliance status for up to 100 client businesses
- Multi-user access (accountant + business owner roles)
- Referral program (30% commission on first-year revenue)
- Annual compliance update subscription (€49/year)

### Vision (Months 7–24 and beyond)

- Poland KSeF XML clearance submission (different architecture from Peppol four-corner)
- France Factur-X support ahead of September 2027 SME mandate
- Germany XRechnung / ZUGFeRD (January 2028 mandate)
- FreshBooks, Wave, Bonsai integrations (English-language EU freelancer tools)
- Webhook API / white-label module for SaaS platforms with EU customers
- EU ViDA cross-border Peppol (July 2030) — PeppolPass becomes compliance infrastructure layer
- SEPA instant payment integration triggered by Peppol invoice structured data

---

## User Journeys

### Journey 1: Sophie — Brussels Expat Freelancer (Primary User — Success Path)

Sophie is a 36-year-old communications consultant from the Netherlands, living in Brussels and working with EU institutional clients. She uses FreshBooks (no Belgium Peppol support) and sends 8–12 invoices per month as PDFs. In February 2026, a major client emails: "We can no longer process your PDF invoices — please resubmit via Peppol." Sophie Googles "Peppol Belgium English." The Belgian government portal is Dutch-only. Accountable looks Belgian-accountant-focused. Let's Peppol looks technically intimidating. Then she finds PeppolPass.

**Discovery → Signup (5 minutes):**
Sophie sees the headline: "Send compliant Belgian invoices without understanding Peppol." She recognizes the explicit call-out of the English-speaking expat community. Pricing is clear: €129 once, no monthly fees. She clicks "Get Started," enters her email, and immediately sees a "Enter your Belgian VAT number" field. She types her VAT number; the product auto-populates her company name and confirms "Your business is registered on Peppol ✓."

**First invoice (6 minutes):**
Sophie types her client's VAT number. The product shows: "ACME Belgium BV — registered on Peppol ✓ — invoices will be delivered electronically." She enters one line item: "Communications consulting services, November 2026, €2,400 + 21% VAT." She clicks "Send Compliant Invoice."

**Confirmation (10 seconds):**
The delivery confirmation screen shows the exact timestamp, buyer Peppol endpoint, and "Invoice successfully delivered." She downloads her compliance certificate. She emails it to her accountant. Her accountant replies: "This is exactly what I need, thank you."

**Resolution:** Sophie's anxiety is gone. She bookmarks PeppolPass. Next month, her client's VAT number is pre-saved — the entire re-invoice takes 90 seconds.

**Journey reveals:** VAT-to-Peppol lookup; form auto-fill from VAT; buyer confirmation display; XML generation; AP delivery; confirmation screen; certificate download; saved client address book.

---

### Journey 2: Pieter — Belgian Micro-Entrepreneur (Primary User — Accountant Referral Path)

Pieter runs a 2-person landscaping company in Ghent. His accountant, Dirk, has 45 SMB clients and spent Q4 2025 scrambling to get them Peppol-compliant. At their January 2026 meeting, Dirk says: "Pieter, you need to use PeppolPass for all B2B invoices starting this month. Here's the link — your accountant code gives you €20 off."

**Onboarding via accountant code:**
Pieter opens the link, sees a pre-filled referral with Dirk's accountant code. He enters his VAT number and gets his first month free. Pieter's accountant dashboard shows Dirk that Pieter's account is active and compliant — he doesn't need to follow up.

**Regular usage pattern:**
Pieter invoices 15–25 clients per month. Most of his commercial clients (garden centers, property management companies) are VAT-registered and now require Peppol. His residential clients (private homeowners) are not on Peppol; the product shows "This buyer is not registered on Peppol — send them a PDF invoice as usual." He understands immediately.

**Edge case — invoice error:**
Pieter accidentally submits an invoice with the wrong amount. He finds it in his invoice history, sees the delivery confirmation, and creates a credit note + corrected invoice. The history shows both linked documents clearly.

**Journey reveals:** Referral/accountant code redemption; accountant dashboard compliance view; non-Peppol buyer fallback messaging; invoice history; credit note flow.

---

### Journey 3: Dirk — Belgian Accountant (Distribution Channel — Partner Dashboard)

Dirk manages 45 SMB clients, 80% micro-businesses. In Q4 2025 he sent 45 clients an urgent email about the January 2026 mandate. 30 complied using various tools; 15 dragged their feet. He joined PeppolPass's accountant partner program in January 2026 with a referral code offering clients €20 off LTD.

**Accountant dashboard:**
Dirk logs into his partner dashboard. He sees a table: all 15 clients he onboarded, their compliance status (last invoice sent, Peppol endpoint confirmed), and his referral earnings. He can immediately identify which clients have sent zero invoices in the last 30 days — a compliance risk flag. He sends a follow-up email to those clients from within PeppolPass with one click.

**New client onboarding:**
Dirk adds a new client's VAT number to his dashboard. The system looks up whether the client is already on Peppol. If not, it generates an onboarding link Dirk can forward. Dirk never has to log into his clients' accounts.

**Referral payout:**
Dirk earns 30% on the first year of any client he referred. His dashboard shows pending and paid commissions. At month 3, he's earned €540 in referral commissions from 12 new LTD clients.

**Journey reveals:** Partner dashboard; client compliance status monitoring; bulk compliance alerts; referral tracking and payout; client onboarding link generation; accountant does NOT need access to clients' invoices.

---

### Journey 4: System Admin — Error Recovery and Monitoring (Operations User)

A delivery failure occurs when a buyer's Peppol endpoint is temporarily unreachable. The system automatically retries 3 times at 15-minute intervals. If all retries fail, the user receives an email: "Invoice #2024-089 could not be delivered. Reason: Buyer endpoint unreachable. Action required: [Retry now] [Contact support]." The admin dashboard shows the failed delivery, the error code from the Peppol network, and a manual re-trigger option.

For a schema validation failure (rare, typically user data issue), the system catches the error before submission and returns an inline form error: "Invoice line 2: VAT rate cannot be blank." The user corrects and resubmits. No invoice reaches the Peppol network in an invalid state.

The admin can view all delivery statuses across all users, filter by error type, and manually trigger re-deliveries. The admin dashboard also shows Access Point health, SML/SMP lookup success rate, and daily invoice volume.

**Journey reveals:** Automated retry logic; user-facing error notifications with clear actions; admin monitoring dashboard; manual re-trigger; form validation before XML generation; Access Point health monitoring.

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|--------------------------|
| Sophie (expat freelancer) | VAT lookup, buyer Peppol resolution, invoice form, XML generation, AP delivery, confirmation, certificate |
| Pieter (micro-entrepreneur) | Accountant referral code, saved buyer address book, non-Peppol fallback, invoice history, credit note |
| Dirk (accountant partner) | Partner dashboard, multi-client compliance view, referral tracking, client onboarding link |
| Admin / error recovery | Retry logic, user notifications, admin monitoring, manual re-trigger, form validation |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**Peppol certification (mandatory pre-launch):**
- PeppolPass must operate as a certified Peppol Access Point (AP) under OpenPeppol's accreditation scheme, OR must integrate exclusively with a certified AP (e.g., Storecove, Basware, Pagero) via documented API partnership. No uncertified delivery path is acceptable.
- All outbound invoices must conform to Peppol BIS Billing 3.0 (EN 16931 compliant) before network submission. Server-side schema validation is mandatory; no invalid XML may reach the Peppol network.
- Belgium: Belgian VAT-registered businesses are mandated to use the four-corner Peppol model for B2B invoicing. PeppolPass must resolve buyer Peppol Participant IDs from the Peppol SML (Service Metadata Locator) and SMP (Service Metadata Publisher).
- Poland (V2): KSeF (Krajowy System e-Faktur) is a centralized government clearance system, architecturally distinct from four-corner Peppol. KSeF requires authentication against the MF API, document submission, and retrieval of a KSeF number. Must be implemented as a separate country-specific pathway.
- France (V3): Factur-X (EN 16931-compliant hybrid PDF/XML) requires different generation logic. September 2027 SME mandate.
- All invoice data and compliance certificates must be retained for a minimum of 7 years to satisfy Belgian VAT record-keeping requirements (Royal Decree on VAT).
- GDPR applies: EU user data must be processed and stored in compliance with GDPR. Belgian supervisory authority (GBA / APD) is the primary authority.

**Tax compliance requirements:**
- VAT rate validation: Only valid Belgian VAT rates (0%, 6%, 12%, 21%, or special categories with reason codes) may be submitted. Form must validate rates before XML generation.
- Seller VAT number format validation: Belgian BE-format (BE + 10 digits), validated against format rules before lookup.
- Buyer VAT number format validation: Any EU VAT number format per country-specific regex, with checksum validation where applicable.
- Invoice mandatory fields per BIS Billing 3.0: invoice number, issue date, seller/buyer name + address + VAT number, line items with unit price and quantity, VAT breakdown, total amounts. Form must enforce all mandatory fields.

### Technical Constraints

**Access Point infrastructure:**
- If self-certified: PeppolPass must maintain OpenPeppol AP software stack (e.g., Phase4, Oxalis, or commercial equivalent), SMP registration, and annual OpenPeppol membership and certification renewal.
- If via Storecove or equivalent: API contract must guarantee SLA of ≥ 99.5% availability; per-transaction costs must be modeled into LTD unit economics at projected volumes (200 invoices/user/year at 1,200 LTD users = 240,000 invoices/year).
- All AP traffic must be encrypted (AS4 or AS2 over TLS 1.2+).

**Data residency:**
- Invoice data and user data must be stored in EU data centers (GDPR Art. 44–49 transfer restrictions apply to non-EU processors).

**Audit trail:**
- Every invoice submission must log: submission timestamp, UBL XML hash, AP delivery confirmation + timestamp, buyer Peppol endpoint ID, and any retry events. This log is the basis for compliance certificate generation.

### Integration Requirements

- **Peppol SML/SMP:** HTTP GET lookups to resolve buyer Peppol IDs from VAT numbers. Must handle lookup timeouts gracefully (show "lookup in progress" state; retry before showing "not found").
- **OpenPeppol AP (self-hosted or Storecove API):** POST invoice XML; receive delivery confirmation or error response. Async acknowledgment handling required.
- **Stripe:** Subscription creation, LTD code redemption, failed payment handling, invoice generation for customer receipts.
- **AppSumo API:** Code validation at redemption; webhook for refund events (deactivate account if AppSumo refunds LTD purchase within refund window).
- **Email provider (SendGrid or Postmark):** Transactional emails — account confirmation, invoice delivery notification, compliance certificate delivery, failed delivery alert, payment receipts.

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Buyer's Peppol endpoint unreachable | Auto-retry 3× at 15-min intervals; user notification with manual retry option; clear error message distinguishing "buyer not registered" from "delivery failed" |
| Access Point certification costs exceed unit economics | Model LTD at 200 invoices/year cap (soft limit); Storecove partnership as fallback with transparent per-transaction cost pass-through; annual compliance update subscription covers AP renewal |
| Mandate timelines slip (France 2027 already delayed once) | Belgium and Poland are live; never bank France in Year 1 revenue model; each country is a standalone revenue event, not interdependent |
| Non-conformant XML accepted by some endpoints but not others | Validate against official Peppol BIS Billing 3.0 CIUS validation artifacts before submission; run test suite against multiple known Belgian buyer endpoints during beta |
| GDPR breach | Data minimization: store only what's required for compliance certificate; encrypt PII at rest; DPA agreements with all sub-processors |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Compliance certificate as trust artifact:**
No existing Peppol tool issues a downloadable compliance certificate. This is novel in the compliance tool space — borrowing a pattern from SSL certificates and applying it to invoice delivery confirmation. The certificate creates a paper trail the user can share with accountants, auditors, or procurement teams, removing the intangible nature of "it was sent electronically."

**LTD pricing in a compliance category:**
Compliance tools have uniformly used SaaS pricing (monthly/annual). PeppolPass is the first to apply AppSumo's Lifetime Deal model to a government-mandated compliance category. The mandate creates urgency that makes LTD uniquely compelling: "Pay once, be compliant forever" resonates because the compliance need is perpetual, not optional. Belgium's 120% software cost tax deduction makes the net cost ~€40 — below any hesitation threshold.

**English-first positioning in a national mandate:**
Existing tools are built for the dominant local language (Dutch/French for Belgium). PeppolPass is the first to explicitly target the English-speaking international business community as its primary segment — a segment with higher willingness to pay, lower brand loyalty to Belgian software, and an underserved information need.

### Validation Approach

- **Certificate:** Beta with 5 Belgian accountants — do they accept and endorse the certificate format? Do clients present it during VAT audits?
- **LTD model:** Pre-launch cohort of 50 AppSumo-style LTD buyers before public launch. If 40+ send at least 1 invoice within 14 days, LTD model is validated.
- **English-first:** Analytics on language preference at signup; NPS survey specifically asking "would you use this product if it were only available in Dutch?"

### Risk Mitigation for Novel Aspects

- LTD unit economics: Model at €99 LTD with 200 invoices/year cap at Storecove per-transaction cost (~€0.12–0.20/invoice). At 200 invoices × €0.20 = €40 cost/user/year; LTD pays back in 2.5 years worst case. Annual compliance update (€49/year) bridges beyond Year 2.
- Certificate legal standing: Clearly disclaim that the certificate is a delivery confirmation record, not a legal certification of VAT compliance — VAT compliance remains the user's responsibility. Consult with a Belgian VAT lawyer before launch.

---

## SaaS B2B/B2C Specific Requirements

### Multi-Tenancy Model

Each user account is a fully isolated tenant. Invoice data, client address book, and compliance certificates are private to each user account. Accountant partner accounts have a one-to-many relationship: one accountant account has read-only visibility into compliance status (last invoice date, delivery success rate) for each linked client account, but never access to invoice contents or amounts.

### Permission Model

| Role | Capabilities |
|------|-------------|
| End User (Sender) | Create/view/manage own invoices; download own certificates; manage own account and billing; manage own client address book |
| Accountant Partner | View compliance status (last invoice date, delivery rate) for linked client accounts; send compliance nudge emails to non-active clients; view own referral earnings; add new clients to dashboard |
| System Admin | View all delivery statuses; trigger manual re-deliveries; view AP health; manage user accounts (deactivate, refund); view aggregate invoicing metrics |

### Tenant Onboarding

- Self-serve signup: email + password; VAT number entry; auto-populated business profile from VAT number lookup
- LTD redemption: enter AppSumo code; validated against AppSumo API; unlocks unlimited invoices for Belgium (with soft annual volume cap for AP cost modeling)
- Accountant referral: unique referral link per accountant; client enters referral code at signup; discount applied; accountant-client link established
- No forced credit card at signup for LTD flow; Stripe for monthly/annual subscription flows

### Subscription & Billing

| Plan | Price | Features |
|------|-------|---------|
| LTD (AppSumo) | €99 one-time | Unlimited Belgium invoices; compliance certificate; all MVP features |
| LTD (direct) | €129 one-time | Same as AppSumo LTD + priority support |
| Monthly | €12/month | Same features; no volume cap; cancel anytime |
| Annual compliance update | €49/year | Mandatory after LTD period; covers AP renewal, format updates, country expansion access |

LTD → annual compliance update transition: 18 months after purchase, LTD users are prompted to begin €49/year subscription to cover ongoing AP and format costs. Users who do not subscribe after 60-day notice window lose ability to send new invoices (invoice history and certificate download remain accessible permanently).

### Key Technical Architecture Considerations

- **Server-side XML generation only:** UBL 2.1 XML is generated and validated server-side. No XML is ever generated in the browser (prevents user tampering with schema-critical fields).
- **Async delivery model:** Invoice submission is accepted and queued. Delivery confirmation is async (Peppol AS4 is async by design). UI shows "pending delivery" state; transitions to "delivered" on AP callback. Users can leave and return; email notification on delivery.
- **Idempotency:** Each invoice submission has a unique idempotency key. Duplicate submissions (network retry by user) do not result in duplicate Peppol deliveries.
- **Compliance certificate generation:** Generated from delivery confirmation callback data, not from user-entered data. Certificate cannot be generated for an invoice that has not received AP delivery confirmation.
- **Peppol lookup caching:** Buyer Peppol endpoint lookups are cached for 24 hours to reduce SML/SMP load; cache is invalidated on next-day login to handle endpoint changes.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The MVP is successful the moment a non-technical user sends one legally valid Peppol invoice and downloads their compliance certificate. No additional features are necessary to prove the core value proposition. The MVP validates: (1) the technical stack works (AP certification + SML lookup + XML generation + delivery), (2) non-technical users can complete the flow without help, (3) users pay €99+ for the convenience.

**Resource Requirements:** 1–2 backend developers (Peppol/XML expertise critical); 1 frontend developer; 1 product/QA owner; optional: Storecove API partnership removes AP certification burden and reduces engineering scope to 4–6 weeks.

### MVP Feature Set (Phase 1)

**Core User Journey Supported:** Sophie's journey (Discovery → Signup → Invoice entry → Peppol delivery → Certificate download) is the only journey the MVP must support completely.

**Must-Have Capabilities:**
- User account creation and authentication
- Belgian VAT number validation and business profile auto-population
- Buyer VAT-to-Peppol endpoint lookup (SML/SMP)
- "Buyer not on Peppol" clear handling
- Invoice entry form (all BIS Billing 3.0 mandatory fields)
- Server-side UBL 2.1 XML generation + schema validation
- AP delivery (own certification or Storecove)
- Async delivery confirmation + "pending/delivered" status
- Compliance certificate PDF generation and download
- Invoice history (list view, per-invoice certificate)
- Stripe billing (LTD code redemption + direct payment)
- AppSumo code validation
- Email notifications (delivery confirmation, failed delivery)
- English-only UI

### Post-MVP Features (Phase 2)

- Saved client address book with one-click selection
- Accountant partner dashboard and referral program
- Annual compliance update subscription billing
- Peppol receive (incoming invoice inbox)
- PDF/CSV import
- Dutch and French localization
- Credit note creation linked to original invoice
- Multi-user access (accountant + business owner roles)
- QBO/Xero integration

### Expansion Features (Phase 3)

- Poland KSeF support (centralized clearance architecture)
- France Factur-X support
- Germany XRechnung/ZUGFeRD
- Webhook API for embedding in third-party SaaS platforms
- White-label module
- SEPA payment link embedded in invoice delivery

### Risk Mitigation Strategy

**Technical Risks:**
- Highest risk: AP certification timeline (2–8 weeks depending on OpenPeppol process). Mitigation: negotiate Storecove API partnership in parallel; use Storecove for MVP launch; pursue own certification in months 2–4.
- Second risk: Peppol SML/SMP lookup reliability. Mitigation: 24-hour caching; graceful degradation ("lookup unavailable, try again shortly"); fallback to manual Peppol ID entry by user.

**Market Risks:**
- Biggest risk: Free tools erode willingness to pay. Mitigation: compliance certificate feature (unique, visible differentiator); AppSumo community social proof; Belgium's 120% tax deduction makes €99 LTD ~€40 net — below impulse-buy threshold.

**Resource Risks:**
- If solo founder: Use Storecove API (eliminates AP certification), use a no-code/low-code form builder for invoice entry, ship in 3–4 weeks. Validate before building complex features.

---

## Functional Requirements

### Account & Authentication Management

- FR1: Users can create an account with email and password
- FR2: Users can log in with email and password
- FR3: Users can reset their password via email link
- FR4: Users can update their profile (name, company name, VAT number, address)
- FR5: Users can view and manage their active subscription/LTD plan
- FR6: Users can redeem an AppSumo LTD code to activate their account
- FR7: Users can redeem a direct LTD code (non-AppSumo) during purchase
- FR8: Users can subscribe to a monthly or annual compliance update plan via Stripe
- FR9: Users can cancel their subscription (access continues until end of billing period)
- FR10: System admin can deactivate user accounts and process refunds

### Peppol Lookup & Buyer Management

- FR11: Users can look up whether a buyer is registered on Peppol by entering their VAT number
- FR12: System resolves the buyer's Peppol Participant ID from Belgian VAT number via SML/SMP directory
- FR13: Users see a clear confirmation message when buyer is found on Peppol (name + endpoint confirmed)
- FR14: Users see a clear "buyer not registered on Peppol" message with guidance when buyer has no endpoint
- FR15: Users can save buyer details (VAT number, company name) to a personal address book
- FR16: Users can select a previously saved buyer from their address book (one-click selection)
- FR17: Users can delete saved buyers from their address book

### Invoice Creation & Submission

- FR18: Users can create a new invoice by entering all BIS Billing 3.0 mandatory fields (seller details, buyer details, invoice number, date, due date, line items, VAT rates, totals)
- FR19: System validates all mandatory invoice fields before accepting submission
- FR20: System validates Belgian VAT number formats (BE + 10 digits) and applicable EU VAT formats for buyers
- FR21: System validates that VAT rates match Belgian legal values (0%, 6%, 12%, 21%, or valid exemption codes)
- FR22: System generates a UBL 2.1 / Peppol BIS Billing 3.0 conformant XML document server-side
- FR23: System validates generated XML against official BIS Billing 3.0 schema before delivery attempt
- FR24: Users can review a human-readable invoice preview before submission
- FR25: Users can submit the invoice for Peppol delivery with a single confirmation action
- FR26: System submits invoice to the Peppol network via certified Access Point

### Delivery Tracking & Confirmation

- FR27: Users see a "pending delivery" status immediately after invoice submission
- FR28: System updates invoice status to "delivered" upon receiving AP delivery confirmation
- FR29: Users receive an email notification when invoice delivery is confirmed
- FR30: System automatically retries failed deliveries up to 3 times at defined intervals
- FR31: Users receive an email notification when all delivery retries fail, with a manual retry action
- FR32: Users can manually trigger a redelivery attempt for a failed invoice
- FR33: Users can view the delivery status and timestamp for any invoice in their history

### Compliance Certificate

- FR34: Users can download a compliance certificate PDF for any successfully delivered invoice
- FR35: Compliance certificate includes: seller VAT number, buyer VAT number, buyer Peppol Participant ID, invoice number, invoice date, delivery timestamp, AP confirmation reference
- FR36: Compliance certificate is generated from AP delivery confirmation data (not user-entered data)
- FR37: Compliance certificates are stored and retrievable at any time (permanent access regardless of subscription status)

### Invoice History & Dashboard

- FR38: Users can view a list of all submitted invoices with status (pending, delivered, failed) and date
- FR39: Users can view full details of any individual invoice
- FR40: Users can download the compliance certificate for any delivered invoice from the history view
- FR41: Users can filter invoices by status, date range, and buyer

### Accountant Partner Dashboard (Phase 2)

- FR42: Accountant partners can view compliance status (last invoice date, delivery rate, Peppol endpoint) for each linked client account
- FR43: Accountant partners can add client accounts to their dashboard using the client's VAT number
- FR44: Accountant partners can send a compliance nudge email to non-active clients
- FR45: Accountant partners can view their referral earnings (pending and paid) in their dashboard
- FR46: Accountant partners can generate a unique referral link or code for new client acquisition
- FR47: Accountant partners cannot access invoice contents, amounts, or buyer details of linked clients

### System Administration

- FR48: System admin can view all invoice delivery statuses across all users
- FR49: System admin can manually trigger re-delivery for any failed invoice
- FR50: System admin can view Access Point health metrics and SML/SMP lookup success rates
- FR51: System admin can view aggregate invoice volume metrics by day, country, and user cohort
- FR52: System admin can deactivate and reactivate user accounts
- FR53: System admin can process AppSumo refund events (deactivate LTD access within refund window)

---

## Non-Functional Requirements

### Performance

- Invoice entry form: all field validations and VAT number lookups complete within 2 seconds
- Buyer Peppol lookup: SML/SMP resolution displays result within 3 seconds (cache hit < 500ms)
- XML generation + schema validation: completes within 2 seconds of form submission
- Invoice history page: loads within 2 seconds for up to 500 invoices
- Compliance certificate PDF generation and download: completes within 5 seconds
- The pending → delivered status transition email is sent within 60 seconds of AP delivery confirmation receipt

### Security

- All data in transit encrypted via TLS 1.2 or higher
- All user data and invoice data encrypted at rest (AES-256 or equivalent)
- Belgian VAT numbers and invoice data classified as personal data under GDPR; treated accordingly for storage, retention, and deletion
- Invoice audit log (submission timestamp, XML hash, AP confirmation) immutable and stored for 7 years (Belgian VAT record-keeping requirement)
- Authentication: bcrypt password hashing; session tokens expire after 30 days of inactivity; CSRF protection on all form submissions
- API endpoints authenticated; no unauthenticated access to invoice data
- AppSumo API webhook payloads verified with HMAC signature
- Stripe webhook payloads verified with Stripe signature header
- GDPR: Data Processing Agreement (DPA) with all sub-processors; right to deletion implemented (except immutable audit log required by Belgian VAT law); privacy policy in plain English

### Scalability

- MVP targets up to 1,500 active users sending up to 500,000 invoices/year total
- Architecture must support horizontal scaling of web tier and background job workers without code changes
- Peppol lookup cache (24-hour TTL) must support 10× MVP user volume without SML/SMP rate-limit issues
- AppSumo launch spike (potential 500+ signups in 24 hours) must not cause service degradation; auto-scaling or pre-warmed capacity required

### Reliability

- System availability: ≥ 99.5% uptime (measured monthly excluding planned maintenance)
- AP delivery retry: automated 3-attempt retry on network failure or endpoint timeout; 15-minute intervals
- Failed delivery user notification: sent within 5 minutes of final retry failure
- Invoice submission idempotency: duplicate submissions within 60-second window detected and deduplicated — user receives same confirmation without double-submitting to Peppol
- Planned maintenance windows: off-peak hours only (02:00–04:00 CET); users notified 48 hours in advance

### Integration Reliability

- SML/SMP lookup timeout: 5-second timeout; graceful fallback to "lookup unavailable, try again" message (not a hard error)
- Storecove API (or own AP): 99.5% SLA required in contract; circuit breaker pattern if AP becomes unavailable; queue invoices for delivery when AP recovers
- Stripe: webhook retry handling; idempotent payment event processing; failed subscription payment → grace period of 7 days before feature restriction
- AppSumo webhook: idempotent code activation; refund webhook → deactivate LTD within 24 hours if within AppSumo refund window

### Accessibility

- WCAG 2.1 Level AA compliance for the invoice entry form and core invoice submission flow
- All form fields have explicit labels (no placeholder-only labeling)
- Error messages describe the problem and action required (not just "error")
- Keyboard navigation supported throughout the invoice submission flow
- Color contrast ratios meet WCAG 2.1 AA minimums

---

## Pricing & Go-to-Market

### Pricing Model

| Plan | Price | Description |
|------|-------|-------------|
| LTD AppSumo | €99 one-time | Unlimited Belgium invoices for life of Belgium mandate; all MVP features |
| LTD Direct | €129 one-time | Same + priority email support |
| Monthly | €12/month | Same features; cancel anytime |
| Annual Compliance Update | €49/year | Post-LTD bridge; covers AP renewal, format updates, country expansion |

### Channel Priority (Ranked by CAC Efficiency)

1. **AppSumo LTD launch** — First Peppol-certified e-invoicing LTD; urgency pitch ("Belgium mandate live NOW"); target 300–500 buyers in first 30 days
2. **Accountant partner program** — 30% referral commission; 50+ Belgian accountant firms Months 2–4; high switching cost once accountant recommends
3. **SEO content** — "Peppol Belgium English," "e-invoicing Belgium expat," "Peppol invoice software" — low-competition, high-intent keywords
4. **Community outreach** — Belgian/Dutch Facebook groups for entrepreneurs; r/Belgium; Brussels expat groups; Xolo/Deel freelancer communities

### Launch Sequence

- Weeks 1–6: Build MVP; secure AP certification or Storecove agreement
- Week 7: Beta with 20–30 users (Brussels expat community + 5 accountant beta users); validate 10-minute onboarding
- Weeks 8–10: Soft launch — direct sales + accountant outreach; gather 20+ reviews
- Month 3: AppSumo launch with social proof from soft launch cohort
- Months 4–6: SEO content publishing; accountant partner program formal launch
- Month 7: Poland KSeF support; expand marketing to Polish SMB communities

---

*PRD generated: 2026-05-26*
*Based on: Shortlisted idea EU E-Invoicing Compliance (Score: 83/105) + Market Research + Product Brief*
*Status: Complete — ready for architecture design*

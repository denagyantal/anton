---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/junk-removal-dispatch-photo-quoting.md
  - _bmad-output/planning-artifacts/market-research-junk-removal-dispatch.md
  - _bmad-output/planning-artifacts/product-brief-junk-removal-dispatch.md
workflowType: prd
idea: junk-removal-dispatch-photo-quoting
date: 2026-11-26
author: Root
classification:
  projectType: saas_b2b
  domain: field_service_trades
  complexity: low_medium
  projectContext: greenfield
---

# Product Requirements Document — HaulDesk

**Author:** Root
**Date:** 2026-11-26

---

## Executive Summary

HaulDesk is a junk removal OS for independent operators running 1–5 trucks — the 7,000–12,000 US businesses currently running on Square + Google Calendar + phone memory. It delivers the complete quote-to-invoice loop via SMS without requiring any party (operator, customer, or crew) to download an app or create an account.

The $14.8B global junk removal market is actively investing in software: three vendors launched AI photo quoting tools in 2026 alone (JunkQ, QuoteIQ Pro, AutopilotApp), confirming market readiness. Despite this activity, no tool tracks the realtor, property manager, or estate attorney relationships that drive 30–50% of a successful operator's revenue. HaulDesk's Partner Referral Engine is the only feature absent from all 9+ tools surveyed — absent because it requires treating commercial referral partners as first-class entities in the data model, not an afterthought.

Pricing: $49/month (1–2 trucks) · $89/month (3–5 trucks). AppSumo LTD launch at $79/$149/$249 targets $20,000–$40,000 gross revenue in the first campaign. Total US SAM: $24M–$75M ARR. 12-month MRR target: $30,000–$50,000.

### What Makes This Special

**The only junk removal software with partner referral tracking.** Realtors, property managers, and estate attorneys send 30–50% of a successful operator's repeat business. No competitor tracks referral attribution, automates partner acknowledgment, or surfaces partner lifetime value. This is a 1–2 week build that creates immediate stickiness (operators who connect referral partners won't switch platforms) and a category-defining marketing hook.

**Booking windows as a first-class UX concept.** Junk removal operates on morning/afternoon/evening windows, not exact appointment times. Generic FSM tools (Jobber, Housecall Pro, Workiz) force operators to pick fake exact times or use workarounds. HaulDesk's scheduler is built around windows natively — the first field service tool to model how the industry actually works.

**AI photo quoting at the entry price point.** QuoteIQ Pro gates AI photo quoting behind $149.99/month. HaulDesk includes it at $49/month, creating a comparison-shopping advantage for every operator who considers upgrading from QuoteIQ Starter.

### Project Classification

- **Project Type:** SaaS B2B — vertical-specific, SMB-targeted, mobile-first web application
- **Domain:** Field Service / Trades / Waste Hauling
- **Complexity:** Low-Medium (Stripe + Twilio + GPT-4o Vision integrations; no heavy compliance requirements)
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

- **Activation signal:** Operator sends their first SMS quote link to a customer within 48 hours of signup — the core "aha" moment and best predictor of retention
- **Aha moment:** A quote is approved by a customer while the operator is on a job or sleeping — the first proof that HaulDesk works without them
- **Referral partner adoption:** Operator adds at least one referral partner (realtor, PM, or attorney) within the first 90 days of active use
- **Core loop completion:** Customer submits photos, AI generates a quote, customer approves via SMS, job appears on calendar — all within 10 minutes total elapsed time, requiring < 60 seconds of active operator attention
- **Crew independence:** Crew receives dispatch SMS with job address and photos without operator intervention; crew uploads completion photos without calling the owner

### Business Success

- **Month 3:** 50 paying customers (mix of monthly + LTD), NPS > 40, monthly churn < 7%
- **Month 3:** AppSumo campaign live with $20,000+ gross LTD revenue in first 30 days
- **Month 6:** $15,000 MRR from monthly subscribers, 10+ unprompted testimonials citing specific time savings or referral partner value
- **Month 12:** $30,000–$50,000 MRR, 500+ total customers (monthly + LTD combined), referral partner feature adopted by 40%+ of active customers
- **Strategic:** Category-default positioning for junk removal operators who rely on referral partners, established before QuoteIQ or AutopilotApp ships a competing referral feature (estimated 12–18 months)

### Technical Success

- AI photo quote accuracy: customer-accepted quote within ±15% of actual job total for 85%+ of quotes (measured by tracking operator adjustments before sending)
- Low-confidence AI quotes (confidence score < 70%) route to operator review queue before sending to customer — zero AI quotes sent to customer without implicit operator sign-off
- SMS delivery rate > 97% for all automated messages (booking confirmations, reminders, payment links) via Twilio
- Quote link opens in < 1.5 seconds on mobile LTE — customers receive the link while standing in front of their pile
- Stripe payment processing with < 0.3% failed payment rate from integration errors
- GPT-4o Vision API availability: system degrades gracefully to operator-manual quoting if AI endpoint is unavailable, with no customer-facing error

### Measurable Outcomes

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Time to first SMS quote link sent | < 48 hours post-signup | Onboarding |
| Quote-to-booking conversion rate | > 60% (vs. ~40% manual baseline) | Month 1+ |
| Average elapsed time from customer photo to confirmed booking | < 10 minutes | Month 1+ |
| Referral partner adoption | > 40% of customers with 90+ days add ≥1 partner | Month 3–6 |
| Admin time saved per operator per week | 5–8 hours self-reported | 30-day check-in |
| AppSumo LTD gross revenue | > $20,000 in first 30 days | Month 2–3 |
| Monthly subscriber churn | < 5% | Month 3+ |
| AI quote accuracy (within ±15% of actual) | > 85% of accepted quotes | Month 1+ |
| NPS (30-day post-activation survey) | > 50 | Ongoing |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP must enable the complete quote-to-invoice loop via SMS without requiring any party (operator, customer, or crew) to download an app or create an account. An operator who goes from "customer texts photos at 11pm" to "job booked without touching the phone" has experienced the product's core value.

**Core capabilities required at launch:**

1. SMS quote link generation — operator sends unique link; customer uploads 1–10 photos via mobile browser
2. AI photo volume estimation — GPT-4o Vision analyzes photos, estimates truck load percentage, generates suggested price range based on operator's configured rate rules
3. Operator quote review — operator views photo gallery, AI estimate, and suggested price in dashboard; adjusts if needed; approves for delivery in < 30 seconds
4. Customer quote approval via SMS — customer receives quote with one-tap approve button; on approval, job is auto-created in calendar
5. Booking window scheduler — morning/afternoon/evening windows (operator-configurable times); quote approval flow shows next 7 days of available windows; calendar view by window, truck, and crew
6. Crew dispatch via SMS — crew receives job address, customer notes, and photo gallery link at scheduled time; no app required
7. Job completion and photo upload — crew uploads before/after photos and enters truck load percentage via mobile browser link; no app required
8. Invoice auto-generation — invoice created from job data with before/after photos attached; dump fee estimated from load percentage and operator-configured dump rates; per-job margin calculated
9. Stripe payment collection — customer receives invoice via SMS payment link; automated payment reminders at 24h and 72h if unpaid
10. Partner Referral Engine (MVP version) — operator adds partners (name, email, type); each partner gets unique referral intake link; automated confirmation email to partner on first referral; operator dashboard showing jobs and revenue per partner (last 30/90/all-time); automated monthly summary email to active partners
11. Operator dashboard — today's jobs, upcoming jobs by window and truck, quote queue (pending customer approvals), partner referral activity summary, basic revenue reporting

**Explicitly out of scope for MVP:** Native iOS/Android apps; route optimization; GPS vehicle tracking; QuickBooks/Xero sync; multi-location/franchise account management; customer-facing account portal; marketing automation/review request campaigns; AI job categorization from historical data; roll-off dumpster rental management.

### Growth Features — Months 4–6

- QuickBooks / Xero sync for invoices and payments (one-way export, reduces double-entry)
- Review request automation (automated SMS/email 3 days post-completion with operator's Google review link)
- Basic route optimization for same-day multi-job scheduling (map view with job sequence suggestions)
- Crew progressive web app (PWA) — offline support for job list; improved photo upload experience
- AI pricing suggestions based on job history (requires 3+ months of usage data)

### Vision — Months 7–18

- Native iOS/Android crew app with offline support and push notifications
- Multi-location / franchise account management (target: regional franchise operators with 2–5 locations)
- White-label option for franchise systems (branded experience under their name)
- Customer-facing portal with job history, repeat booking, and referral submission
- Partner portal — realtors and PMs track their own referral activity and pending jobs without calling the operator
- API access for integration with real estate CRMs (Follow Up Boss, LionDesk, Chime)
- Two-sided referral marketplace — realtors connected to multiple operators; operators receive overflow leads

---

## User Journeys

### Journey 1: Marcus — Solo Hustler (Primary User, Success Path)

**Opening Scene:** Marcus, 29, owns one F-350 and books 4–6 junk removal jobs per day on weekends around his construction job. It's 9:47pm on a Thursday. A customer texts him 7 photos of a garage cleanout. Marcus is in bed. He types back "looks like about $275, can you do Saturday morning?" The customer doesn't respond until Friday afternoon. By then Marcus has forgotten which garage it was.

**Discovery:** A post on r/junkremovalstartup catches his eye: "Sent my first quote at 11pm — woke up to a confirmed booking and $50 deposit already in my Stripe account. Never touched my phone." Marcus clicks through, sees "$49/month, no credit card for trial," signs up in 3 minutes on his phone.

**Onboarding:** Marcus enters his service area ZIP codes, sets rates ($125 minimum, $275 for half-load, $450 for full truck), and configures his booking windows: Saturday 8–12, Saturday 1–5, Sunday 8–12. Total time: 11 minutes.

**First Quote (Day 1):** A customer texts about a basement cleanout. Instead of replying manually, Marcus hits "New Quote" in HaulDesk and taps "Send SMS Link." The customer receives a link, opens it on their phone, and uploads 9 photos of boxes and furniture. GPT-4o Vision estimates 60% truck load. HaulDesk suggests $310 based on Marcus's rate table. Marcus reviews the photos, sees a piano in the background that the AI flagged as "heavy item — verify," bumps the quote to $375, and taps Approve. Customer receives SMS: "Marcus's Junk Removal: Your quote is $375 — tap to book." Customer taps. Done. Marcus has a Saturday morning booking without typing a single price.

**The 11pm Moment (Week 2):** Marcus wakes up to a notification: "New booking confirmed — Sunday 8–12 AM — Stephanie Chen." Stephanie had submitted photos at 10:52pm and approved the AI-generated quote at 11:03pm. Marcus had been asleep. He tells his wife: "It booked a job while I was sleeping."

**Resolution:** After 30 days, Marcus is sending 8–10 quote links per week. 65% convert to bookings. He checks HaulDesk for 3 minutes each morning to see the day's jobs and approve any pending quotes. His crew member receives dispatch SMS automatically. Marcus stops using Google Calendar entirely.

*Capabilities revealed: SMS quote link, AI photo estimation, operator quote review, booking window scheduler, crew dispatch SMS, automated reminders*

---

### Journey 2: Dana — Growth-Minded Operator (Referral Partner Activation)

**Opening Scene:** Dana, 38, runs 3 trucks and 4 part-time crew members with ~$600K annual revenue. She has a spreadsheet called "VIP Partners" with 8 realtors and property managers who collectively send 15–20 jobs per month. The spreadsheet hasn't been updated in 6 weeks. Partner #3, a commercial property manager named Robert, sent 4 jobs in October and hasn't sent anything since. Dana has been meaning to call him but hasn't gotten to it.

**Discovery:** Dana finds HaulDesk through a Reddit thread: "Only tool I've found that actually tracks realtor referrals — changed my business." She's tried Jobber ($349/month for her team size) and QuoteIQ (good, but referral tracking is nonexistent).

**Setup — Referral Partner Import:** Dana imports her 8 partners from a CSV. HaulDesk sends each one a branded email: "Hi Robert — Dana Miller Junk Removal has set up a partner referral tracking system. When you have a client who needs junk removal, use this link to send us the job: [unique link]. You'll get automatic confirmation when it's booked." Three partners click through within 24 hours.

**First Partner-Submitted Job (Day 10):** Realtor Sarah uses her link for the first time, submitting a client's address and job description through the intake form. Dana receives a notification. Sarah receives an automated confirmation: "Job received — Dana's team will reach out to your client within 1 hour to schedule." Sarah replies to the confirmation email: "Love this — so professional."

**Month-End Dashboard (Day 30):** Dana opens the Partner Referral dashboard. Partner #1 (Sarah the realtor) sent $4,200 in jobs this month — highest ever. Partner #3 (Robert the PM) sent $0 — first zero month. Dana calls Robert proactively. He'd been using a different hauler for the past 6 weeks. Dana recovers the relationship and closes 3 jobs that week.

**Resolution:** At 90 days, 6 of Dana's 8 partners are actively using their referral links. She can see in real time which partners are sending work, which are dormant, and what each partner's lifetime value is. Partner #2 (estate attorney) has sent $18,000 in lifetime revenue — a number Dana had never calculated before.

*Capabilities revealed: partner CSV import, referral intake link, automated partner confirmation email, operator notification on referral, partner revenue dashboard, monthly summary email*

---

### Journey 3: Derek — Franchise Refugee (Complex Job Recovery)

**Opening Scene:** Derek, 44, ran a 1-800-GOT-JUNK franchise for 5 years. He left 2 years ago and has 3 trucks and an established territory. He misses one thing from the franchise: the professional referral management system. His 8 realtor partners used to receive branded, timely communications. Now they get a text from his personal cell phone.

**Pain Point Journey:** Derek has tried CurbWaste (designed for roll-off, not junk removal), QuoteIQ (good quoting but zero referral tracking), and an n8n automation he built himself that half-works. He finds HaulDesk and signs up after seeing the "partner referral tracking" headline — the first junk removal tool he's seen that uses that phrase.

**AI Quote Edge Case:** A customer submits 12 photos of an estate cleanout. The AI returns a confidence score of 52% — below HaulDesk's 70% threshold. The quote is held in a "Review Required" queue instead of being sent automatically. Derek opens the queue, sees the AI's uncertainty flag: "High volume, multiple heavy items, unclear access path." Derek reviews the photos, recognizes the estate type from his franchise days, sets a $1,800 quote with a note to the customer about access, and sends it manually. The customer approves. Without the confidence scoring, an auto-sent $900 quote would have been a losing job.

**Professional Partner Communications:** Derek adds his 8 realtor contacts, includes his professional logo in the HaulDesk branding settings, and sends the first round of partner welcome emails. Within 2 weeks, two partners comment that his communications "look so much more professional." Partner #6, who had drifted to a competitor, comes back.

*Capabilities revealed: confidence-scored AI quote routing, manual quote override, operator-configurable branding for partner communications, partner welcome email flow*

---

### Journey 4: Crew Member — Job Dispatch and Completion (Supporting Actor)

**Opening Scene:** Carlos is Derek's lead crew member. His old workflow: Derek texts him the address each morning from memory. Sometimes Carlos misses the text. Sometimes the address is wrong. Photos of the job are never shared in advance.

**New Workflow with HaulDesk:** At 7:30am, Carlos receives an SMS: "HaulDesk Job — Thursday 8–12 AM. Customer: Jennifer Torres. Address: 847 Oak Street [tap for Maps]. 2-bedroom cleanout, furniture + boxes, full load. Photos: [link]." Carlos taps the Maps link. Done. He doesn't need to call Derek.

**Completion Flow:** After the job, Carlos takes before/after photos with his phone, opens the completion link in the SMS, uploads 4 photos, and enters "85% load." HaulDesk calculates the dump fee ($67.50 at Derek's configured dump rate), generates the invoice ($425 job + dump fee applied to margin), and queues it for Derek's review. Derek reviews in 30 seconds and taps Send. Jennifer receives the invoice via SMS payment link and pays 2 hours later.

*Capabilities revealed: crew dispatch SMS with photos link, mobile-browser completion form, before/after photo upload, truck load entry, dump fee auto-calculation, invoice queue review*

---

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Marcus — Solo Activation | SMS quote link, AI estimation, booking windows, crew dispatch, invoice automation |
| Dana — Referral Partner | Partner import, intake links, automated confirmation, partner dashboard, monthly summary |
| Derek — Complex Job | AI confidence scoring, manual quote override, branding configuration, partner welcome emails |
| Carlos — Crew Member | Dispatch SMS, completion form, photo upload, load entry, offline-tolerant mobile browser |

---

## Domain-Specific Requirements

### Field Service — Trades and Waste Hauling

Domain complexity is **low-medium**. No healthcare, financial, or government compliance requirements apply. The following domain constraints are relevant:

**AI Liability — Quote Accuracy**
- AI-generated quotes are suggestions, not binding contracts until operator approves
- All customer-facing quote communications must be framed as operator-issued estimates, not AI-generated prices
- Confidence scoring must gate auto-send: quotes below configurable confidence threshold (default 70%) route to operator review queue; this prevents liability exposure from systematically low quotes on complex jobs
- Operators must retain the ability to override any AI-generated price before customer delivery

**SMS / Communications Compliance**
- All outbound SMS must include opt-out language (STOP to unsubscribe) per TCPA requirements
- Customers who reply STOP must be suppressed from all automated SMS for that phone number
- Partner communications (email to realtors, PMs, attorneys) must comply with CAN-SPAM: physical address in footer, unsubscribe mechanism
- Phone number collection must disclose SMS messaging consent at point of capture (booking flow)

**Payment Processing — PCI Compliance Delegation**
- All card data must be handled exclusively by Stripe; HaulDesk never stores, transmits, or processes raw card numbers
- Stripe handles PCI-DSS compliance for payment processing; HaulDesk's obligation is correct Stripe SDK integration
- Operators must complete Stripe onboarding (identity verification) before accepting payments via HaulDesk

**Data Retention — Customer PII**
- Customer phone numbers, names, addresses, and job photos are sensitive operational data
- Photos must be associated with jobs and accessible during invoice disputes; retention: minimum 24 months per job
- Operator account deletion must offer a data export before purge

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**AI Photo Volume Estimation Applied to Junk Removal Pricing**

GPT-4o Vision is applied to a narrow, specific task: estimating the percentage of truck capacity a pile of junk represents from customer-submitted photos. This is a constrained vision problem (not open-ended scene understanding) — photos are of specific pile types, in residential settings, with consistent reference objects. Early market validation is strong: JunkQ, QuoteIQ Pro, and AutopilotApp all launched AI photo quoting in 2026, confirming the technology works and operators adopt it.

Innovation considerations:
- Confidence scoring is non-negotiable: AI makes systematic errors on stairs (access difficulty), pianos/safes (hidden weight), and outdoor piles obscured by shadows. Low-confidence quotes must route to human review
- Operators need to train their own rate intuition alongside AI — the UI should show AI estimate vs. operator final price over time, so operators learn when to override and when to trust
- Fallback path (AI unavailable) must be frictionless: quote link still functions, operator manually enters price

**Partner Referral Engine as Workflow Infrastructure**

The referral tracking innovation is not technical — it is data model and workflow design. No competitor has modeled referral partners as first-class entities with their own intake links, acknowledgment workflows, and lifetime value metrics. The innovation is in surfacing that realtors and PMs are effectively a "dark sales team" that most operators can't see or manage.

Defensibility: referral partner data (contact list, intake links, referral history, lifetime value) becomes deeply embedded in the operator's business after 90 days. Switching costs are high once partners are using their dedicated intake links.

### Market Context

Three AI photo quoting vendors launched in 2026 (JunkQ August 2026, QuoteIQ Pro, AutopilotApp), confirming:
- The technical approach works (GPT-4o Vision on junk pile photos is viable)
- Operators are willing to pay for and adopt AI-assisted quoting
- Photo quoting is table stakes rather than a primary differentiator in 2026+

No competitor has shipped partner referral tracking as of research date (2026-11-25), confirming the white space.

### Validation Approach

- AI photo accuracy: measure operator adjustment rate (% of AI quotes adjusted before sending) and magnitude (average price change). Target: < 25% adjustment rate, < 15% average magnitude
- Partner referral stickiness: measure partner retention (% of registered partners who submit ≥1 job in any 60-day window). Target: 70%+
- JUNK SHOT patent risk: IP review required before coding AI photo quoting module; workaround approach if needed (non-visual volume estimation alternative using dimensions input)

---

## SaaS B2B — Project-Type Specific Requirements

### Multi-Party SMS Architecture

HaulDesk operates a three-party SMS workflow: operator ↔ platform ↔ customer, and separately operator ↔ platform ↔ crew. All SMS flows via Twilio. Requirements:

- Twilio phone number per operator account (dedicated number so customer replies route to the right operator)
- Or shared number pool with operator context routing via unique link tokens
- Quote links and payment links must be unique per job, not reused
- SMS delivery status tracking (delivered, failed, bounced) must be surfaced in operator dashboard
- Fallback for failed SMS: email delivery of same content with graceful UX

### Multi-Tenancy and Account Isolation

- Each operator account is fully isolated: jobs, customers, partners, and financial data are not shared across accounts
- Operator account = single billing entity; supports multiple trucks, crew members, and referral partners under one account
- Crew members are account sub-users (mobile-only, no dashboard access, no billing visibility)
- Referral partners are external actors (no login; interact via unique intake links and email only)

### Permissions and Role Model

| Role | Capabilities |
|------|-------------|
| Operator (account owner) | Full access: quotes, jobs, invoices, partners, settings, billing |
| Crew member | Receive dispatch SMS, submit job completion via mobile link |
| Referral partner | Submit jobs via intake link, receive automated confirmation emails |

### Third-Party Integration Requirements

**Twilio:**
- Outbound SMS: quote links, booking confirmations, dispatch, payment links, reminders
- Inbound SMS: customer reply handling (STOP, EXTEND, approval confirmations if applicable)
- Webhook handling: delivery status callbacks

**Stripe:**
- Operator onboarding via Stripe Connect (each operator has their own Stripe account; HaulDesk collects platform fee)
- Customer payments via Stripe payment links (no stored card data in HaulDesk)
- Webhook handling: payment confirmation, refund events

**OpenAI GPT-4o Vision:**
- Photo batch submission (up to 10 photos per quote request)
- Structured JSON response: estimated load percentage, confidence score, flagged items (heavy/access/hazard)
- Latency target: AI response returned to operator dashboard < 15 seconds after customer photo submission

**Progressive Web App (Mobile Browser):**
- Customer quote submission flow: works in any mobile browser, no app download
- Crew completion flow: works in any mobile browser, no app download
- Operator dashboard: mobile-first responsive web app, works on iOS Safari and Android Chrome
- No native app for MVP; PWA installable for operator dashboard

---

## Functional Requirements

### Quote Management

- FR1: Operator can generate a unique SMS quote link for a customer job and send it via the platform in one action
- FR2: Customer can open the quote link in a mobile browser without creating an account and upload 1–10 photos
- FR3: System routes uploaded photos to AI analysis and returns estimated truck load percentage, suggested price range (based on operator rate configuration), confidence score, and flagged items within 15 seconds
- FR4: Operator can view the AI estimate, photo gallery, flagged items, and suggested price in a quote review screen
- FR5: Operator can adjust the quote price, add notes, and approve the quote for delivery to customer within the review screen
- FR6: Quotes with AI confidence score below the operator-configurable threshold (default 70%) are held in a review queue and not auto-sent to customer
- FR7: Customer receives the approved quote via SMS with a one-tap approval button and the quoted price clearly stated
- FR8: Customer can approve the quote via SMS link without creating an account; on approval, a confirmed job is auto-created in the operator's calendar
- FR9: Operator can view all pending quotes (awaiting customer approval) in a dashboard queue with time-since-sent indicator
- FR10: Operator can manually cancel or re-send a quote that has not received customer approval within 24 hours

### Booking & Scheduling

- FR11: Operator can configure booking windows with custom labels, start times, and end times (e.g., Morning: 8am–12pm, Afternoon: 1pm–5pm)
- FR12: Operator can configure truck capacity per window (maximum jobs per window per truck)
- FR13: Quote approval flow presents available booking windows for the next 7 days based on operator's configured windows and existing calendar capacity
- FR14: Customer selects a booking window during quote approval; booking window is confirmed in the auto-created job
- FR15: Operator can view the full job calendar by day, showing all jobs organized by booking window and truck
- FR16: Operator can manually create a job directly in the calendar without going through the quote flow (for phone bookings)
- FR17: Operator can move a job from one booking window to another from the calendar view
- FR18: System sends automated SMS reminders to the customer 24 hours before and 1 hour before their booking window opens

### Crew Dispatch & Job Management

- FR19: Crew member receives an automated dispatch SMS at a configurable time before the booking window, containing job address, booking window, customer name, and a link to job photos
- FR20: Crew member can open the job details (address, photos, customer notes) via the dispatch SMS link in a mobile browser without creating an account
- FR21: Crew member can submit job completion via a mobile browser form: upload before/after photos, enter truck load percentage (0–100%), add optional notes
- FR22: System calculates estimated dump fee from truck load percentage and operator-configured dump rates; dump fee is included in the job record and invoice
- FR23: System calculates per-job margin as: invoice total minus estimated dump fee; margin is visible in job detail view
- FR24: Operator can view all jobs in progress (dispatched but not yet completed) in a job status dashboard

### Invoice & Payment Collection

- FR25: System auto-generates an invoice draft when crew submits job completion, populated with: job details, before/after photos, operator's services and pricing, dump fee line item, and total
- FR26: Operator can review and optionally edit the invoice draft before sending; operator can add custom line items
- FR27: Customer receives the invoice via SMS as a Stripe payment link; invoice includes job photos
- FR28: System sends automated payment reminders to customer at 24-hour and 72-hour intervals if invoice remains unpaid
- FR29: Operator can view invoice status (draft, sent, paid, overdue) for all jobs in the invoice dashboard
- FR30: Operator can mark an invoice as paid manually (for cash payments) without requiring Stripe processing

### Partner Referral Management

- FR31: Operator can add a referral partner with name, email address, and type (realtor / property manager / estate attorney / other)
- FR32: Each registered partner receives a unique referral intake link; partner can submit a job lead via the intake form without creating an account
- FR33: Partner intake form captures: client name, client phone/email, property address, description of items, and optional notes
- FR34: When a partner submits a job lead, the partner receives an automated confirmation email within 2 minutes; the operator receives a notification
- FR35: When a partner submits their first-ever referral, the partner receives a personalized "thank you" welcome email; subsequent referrals receive the standard confirmation email
- FR36: Operator dashboard displays jobs per partner and revenue per partner for configurable time periods (30 days / 90 days / all time)
- FR37: System automatically sends a monthly referral summary email to all partners who submitted at least one job in the past 60 days, showing their referral count and total job volume

### Operator Dashboard & Configuration

- FR38: Operator dashboard displays a "today view" showing all jobs scheduled for today by booking window, with job status (confirmed, dispatched, completed, invoiced, paid)
- FR39: Operator can view and configure: service area ZIP codes, truck count, booking windows, rate table (minimum, half-load, full-load prices), dump rates per truck capacity tier
- FR40: Operator can configure AI confidence threshold (50–90%; default 70%) below which quotes are held for manual review
- FR41: Operator can view a revenue summary report: jobs completed, total invoiced, total paid, top referral partners by revenue — for configurable date ranges
- FR42: Operator can add crew members (name, phone number) to their account; crew members receive dispatch SMS for jobs on their assigned truck

---

## Non-Functional Requirements

### Performance

- Quote upload link opens in a customer's mobile browser within 1.5 seconds on LTE — customers are standing in front of their pile waiting for the link
- AI photo analysis (GPT-4o Vision) returns estimate to operator dashboard within 15 seconds of customer photo upload
- Operator dashboard loads the daily job view within 2 seconds on mobile LTE
- Invoice Stripe payment link loads and renders within 2 seconds on mobile browser — customers pay via phone

### Security

- All data transmitted over HTTPS/TLS; no plaintext HTTP endpoints
- Customer PII (phone number, name, address, job photos) stored encrypted at rest
- Stripe handles all card data; HaulDesk never receives, stores, or logs raw payment card numbers
- Operator authentication via email + password with MFA option; crew member access is link-based with no stored credentials
- Referral partner access is link-based with per-partner unique tokens; tokens are non-guessable (UUID4 or equivalent)
- Job photos (before/after) stored in cloud object storage with signed URL access — not publicly accessible via guessable paths
- TCPA compliance: SMS opt-out (STOP) must suppress future automated messages within 5 minutes of receipt

### Reliability

- Twilio SMS delivery rate target: 97%+ for outbound messages; failed delivery triggers in-app notification to operator within 10 minutes
- If GPT-4o Vision API is unavailable, the quote flow degrades gracefully: customer submits photos, operator receives notification to review and price manually; customer receives SMS "Your quote is being prepared — expect a response within 2 hours"
- Invoice Stripe payment links remain valid and functional for 90 days after sending; expired links display a "contact your hauler" message with operator phone number
- System uptime target: 99.5% measured monthly (excludes scheduled maintenance windows communicated 24h in advance)

### Scalability

- Initial target: 500 concurrent operator accounts with up to 20 quotes in flight per account; architecture must support 10x operator count without code changes (horizontal scaling)
- Photo upload: system must handle 10 simultaneous photo uploads per active quote without degradation; each photo up to 10MB
- SMS volume: system must sustain 10,000 outbound SMS per day at target growth; Twilio account must be provisioned at that tier before AppSumo launch

### Integration Reliability

- Stripe webhooks must be idempotent: duplicate payment confirmation events must not create duplicate paid statuses
- Twilio message status webhooks must update SMS delivery tracking within 60 seconds of delivery event
- OpenAI API calls must implement retry logic with exponential backoff (max 3 retries, 500ms initial delay) before surfacing error to operator

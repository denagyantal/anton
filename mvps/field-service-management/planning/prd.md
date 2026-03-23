---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments: ["ideas/shortlisted/field-service-management-solo-micro-trades.md", "_bmad-output/planning-artifacts/research/market-field-service-management-research-2026-03-22.md", "_bmad-output/planning-artifacts/product-brief-field-service-management.md"]
workflowType: 'prd'
classification:
  projectType: mobile_app
  domain: general
  complexity: low
  projectContext: greenfield
date: '2026-03-23'
author: Root
project_name: 'Field Service Management for Solo/Micro Trades'
---

# Product Requirements Document - Field Service Management for Solo/Micro Trades

**Author:** Root
**Date:** 2026-03-23

## Executive Summary

The US field service management (FSM) software market is valued at $5.49B and growing at 12-16% CAGR, yet 94% of the 3.5 million home service businesses remain dramatically underserved. ServiceTitan charges $250-500/tech/month and requires 6-12 months to implement. Jobber and Housecall Pro impose per-user fees that punish growing micro teams. Solo plumbers, 2-person HVAC shops, and 3-person electrical crews are forced into a painful trade-off: enterprise software they can't afford, SMB tools that nickel-and-dime them, or paper and spreadsheets.

This product — the "anti-ServiceTitan" — is a mobile-first, offline-capable FSM tool built for 1-5 person trades shops. The core workflow is four steps: **Quote > Schedule > Invoice > Get Paid**. Flat-rate pricing, no per-user fees, no feature gates, no complex onboarding. A contractor goes from signup to first invoice in under one hour.

**Target users:** Solo and micro trades operators (1-5 person HVAC, plumbing, and electrical shops) earning $85K-$450K/year who need professional digital tools but are priced out or overwhelmed by existing solutions.

**Go-to-market:** $79 lifetime deal via AppSumo to build initial user base (2,000-5,000 users), followed by conversion to $29-39/month flat-rate SaaS. Community-led distribution through trade subreddits, HVAC-Talk, and trade Facebook groups.

### What Makes This Special

**Flat-rate pricing with unlimited users.** No competitor under $225/month offers unlimited users. Adding a helper or partner costs $0 extra. A 3-person plumbing shop saves $70-150/month compared to Jobber or Housecall Pro.

**Offline-first architecture.** Not "offline mode" as an afterthought — the entire core workflow (quote, schedule, invoice, payment capture) operates without connectivity and syncs when reconnected. Trades work in basements, crawlspaces, rural areas, and new construction sites where signal is unreliable.

**One-hour onboarding with trade-specific pricebooks.** Pre-built HVAC, plumbing, and electrical pricebook templates eliminate manual setup. No implementation consultants, no 6-month rollouts. Download, select trade, start quoting.

**Reliable QuickBooks sync.** The #1 integration request and #1 source of competitor complaints. 99.9%+ sync accuracy target with zero duplicate transactions.

## Project Classification

- **Project Type:** Mobile App (iOS + Android) with companion web dashboard
- **Domain:** General (field service management / trades vertical)
- **Complexity:** Low — standard CRUD operations, scheduling, payments, and accounting sync. No regulated data, no complex domain rules.
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Time to First Invoice:** 80%+ of new users send their first real invoice within 60 minutes of signup
- **Daily Active Usage:** 40%+ DAU/MAU ratio within 30 days of launch — users open the app and perform a core action (create quote, schedule job, send invoice, collect payment) on workdays
- **Quote-to-Invoice Cycle Time:** Average < 24 hours from quote creation to invoice sent
- **Payment Collection Speed:** Average < 5 days from invoice to payment received (vs. industry average of 15-20 days)
- **Offline Reliability:** 99.9%+ of offline-created records sync successfully with zero data loss
- **Admin Time Saved:** Users self-report saving > 5 hours/week on administrative tasks within first 30 days
- **QuickBooks Sync Accuracy:** 99.9%+ of transactions sync correctly without manual intervention or duplicate entries

### Business Success

- **Phase 1 (Months 1-3):** 2,000-5,000 LTD customers via AppSumo; $160K-$400K upfront capital; 4.5+ star AppSumo rating with 100+ reviews
- **Phase 2 (Months 3-9):** 5,000+ total users; organic presence in 5+ trade subreddits and forums; 4.5+ rating on G2/Capterra with 50+ reviews; monthly churn < 5%
- **Phase 3 (Months 6-18):** $29-39/month subscription launch; $100K MRR by month 12; LTV:CAC ratio of 5:1+; 20%+ of active users making referrals

### Technical Success

- **App Performance:** Core actions (create quote, schedule job, send invoice) complete within 2 seconds on mid-range smartphones
- **Sync Reliability:** Background sync completes within 30 seconds of connectivity restoration; conflict resolution handles multi-device scenarios without user intervention
- **Uptime:** 99.9% availability for cloud services (sync, payments, SMS delivery)
- **App Store Ratings:** 4.5+ stars on both iOS App Store and Google Play Store

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Total Users | 2,000 | 5,000 | 15,000 |
| DAU/MAU Ratio | 40% | 45% | 50% |
| MRR | $0 | $15K | $100K |
| NPS Score | 50+ | 55+ | 60+ |
| Avg Invoices/User/Month | 20+ | 25+ | 30+ |
| Payment Volume Processed | $500K | $3M | $15M |
| Monthly Churn | — | < 5% | < 3% |

## Product Scope

### MVP - Minimum Viable Product

The MVP delivers the complete **Quote > Schedule > Invoice > Get Paid** workflow, offline-capable, on mobile.

**Core capabilities:**
1. **Quoting & Estimates** — Create quotes from trade pricebook templates, add custom line items, attach photos, send branded PDF quotes via SMS, customer approves via text link
2. **Scheduling & Dispatch** — Calendar view with drag-and-drop scheduling, automated SMS appointment reminders, basic dispatch view for 2-5 tech shops, Google/Apple Calendar sync
3. **Job Management** — Job status tracking (quoted → scheduled → in-progress → complete), on-site photo documentation, digital customer signature capture, auto-generate invoice from approved quote
4. **Invoicing & Payments** — Professional branded invoices, send via SMS with payment link, accept card payments on-site and via link, payment status tracking, partial payment support
5. **QuickBooks Online Integration** — Automatic sync of customers, invoices, and payments on job completion and payment receipt; sync status dashboard with error reporting; manual re-sync
6. **Customer Management** — Contact records with address and service history, job history per customer, search and filter
7. **Offline-First Architecture** — Full workflow operates without connectivity, automatic background sync on reconnection, conflict resolution for multi-device scenarios, encrypted local storage
8. **Mobile Apps** — iOS and Android with feature parity, optimized for one-handed use, push notifications for quote approvals, payments, and schedule changes
9. **Basic Web Dashboard** — Read-only schedule and invoice status view for office partner/spouse

### Growth Features (Post-MVP)

- Route optimization (minimize drive time between jobs)
- QuickBooks Desktop integration
- Advanced reporting dashboard (revenue trends, job profitability, tech performance)
- Customer review request automation (Google/Yelp review prompts after completed jobs)
- Equipment/asset tracking per customer (installed equipment, warranty dates, maintenance history)
- Inventory/parts management

### Vision (Future)

- AI-powered quote suggestions based on job type, location, and historical pricing
- Voice-to-job-notes (dictate notes hands-free while working)
- Embedded customer financing (BNPL for larger jobs)
- Additional trade verticals (landscaping, pest control, cleaning, garage doors)
- Multi-language support (Spanish)
- IoT integration (smart HVAC systems sending service alerts)
- Geographic expansion (Canada, UK, Australia)
- Platform API for third-party integrations

## User Journeys

### Journey 1: Mike the Solo HVAC Tech — First Day Success

**Opening Scene:** Mike is a 38-year-old solo HVAC tech in Phoenix, running his own business for 3 years. Revenue ~$180K/year, 4-6 jobs/day. He uses paper invoices, Google Calendar, a spreadsheet his wife built, and Square for payments. He lost a $3,200 job last month because he forgot to follow up on a quote. He spends 1.5 hours every evening doing paperwork. He sees a post on r/HVAC from another solo tech: "I switched from Jobber to [this tool] and I'm saving $80/month. Setup took 30 minutes." The $79 LTD price is less than one service call.

**Rising Action:** Mike signs up on his phone between jobs. He selects "HVAC" as his trade — a pre-built pricebook loads with common items (AC diagnostic, refrigerant recharge, capacitor replacement, blower motor replacement). He adds his business name, logo, and license number. Connects QuickBooks Online with a two-tap OAuth flow. Total setup: 15 minutes.

**Climax:** That afternoon, Mike arrives at a residential AC repair. He opens the app, creates a quote from pricebook items, adds a photo of the corroded contactor, and sends the branded PDF quote to the homeowner via text. The homeowner taps "Approve" on her phone while Mike gets his tools. Mike does the repair, marks the job complete, captures the customer's signature, and a payment link goes out automatically. As he drives to his next job, he gets a notification: payment received. Money in his account before he left the neighborhood.

**Resolution:** That evening, Mike doesn't do paperwork. The invoice synced to QuickBooks automatically. His wife notices. He refers three friends from r/HVAC the next week.

### Journey 2: Carlos and Maria — Switching from Housecall Pro

**Opening Scene:** Carlos (45) runs a 3-person plumbing shop in Houston with two employees. His wife Maria (43) handles scheduling and invoicing from home. They pay $189/month for Housecall Pro Essentials and use maybe 20% of its features. QuickBooks sync breaks every few months. When Carlos is in a crawlspace with no signal, the app is useless — he writes everything on paper and Maria re-enters it later. HCP support takes days to respond.

**Rising Action:** Maria discovers the $79 LTD on AppSumo while searching for "Housecall Pro alternative." She signs up, imports their customer list, and sets up the plumbing pricebook. Carlos downloads the app on his phone and logs in — same account, no extra cost. She shows their two techs how to use the dispatch view.

**Climax:** Carlos is under a house fixing a main line. No signal. He creates the quote on the app, marks job phases complete, takes photos of the repair, and captures the customer signature — all offline. When he drives away and signal returns, everything syncs automatically. Maria sees the completed job, the invoice, and the payment request — all without re-entering anything. The QuickBooks entry appears within minutes.

**Resolution:** Carlos and Maria cancel Housecall Pro. They save $150/month. Maria spends less time on data entry and more time on growing the business. Carlos stops carrying a paper clipboard.

### Journey 3: Jake the New Electrician — Going Professional

**Opening Scene:** Jake (28) just got his electrician's license and started his own business in Nashville after 6 years working for a large contractor. Revenue ~$85K/year (first year). He uses Venmo for payments, iPhone Notes for job details, and iCal for scheduling. Homeowners sometimes give him odd looks when he sends Venmo requests. He knows he's leaving money on the table by not following up on quotes.

**Rising Action:** Jake finds the $79 LTD through an AppSumo email. He signs up, selects "Electrical" as his trade, and customizes the pricebook with his rates. First real job: a panel upgrade estimate. He creates a detailed quote with line items for panel, breakers, labor, and permit costs. Sends it to the homeowner via text with his business logo on the PDF.

**Climax:** The homeowner responds, "Wow, this looks really professional." She approves the quote with one tap. Jake schedules the job, gets an automated reminder sent to the customer the day before, completes the work, and sends the invoice with a card payment link. The homeowner pays with her credit card from the text message. Jake looks at his phone and sees: paid.

**Resolution:** Jake feels like he's running a real business. He adds his first part-time helper three months later — no extra software cost. He posts about the tool on r/electricians: "Best $79 I've spent on my business."

### Journey 4: Sarah the Bookkeeper — Zero Manual Reconciliation

**Opening Scene:** Sarah is a bookkeeper managing finances for six small trades businesses, including Mike's HVAC and Carlos's plumbing shop. She previously spent hours reconciling invoices between Housecall Pro and QuickBooks because sync errors created duplicate entries and missing payments. She's told both clients: "Whatever tool you use, it has to sync with QuickBooks properly."

**Rising Action:** After Mike and Carlos switch, Sarah notices their QuickBooks entries arriving automatically — customers, invoices, and payments matching up cleanly. She checks the sync status dashboard on the web app and sees 100% sync success over the past 30 days.

**Climax:** At month-end, Sarah's reconciliation for Mike's books takes 10 minutes instead of 2 hours. Zero duplicate entries. Zero missing invoices. Every payment matches.

**Resolution:** Sarah recommends the tool to her four other trades clients. She becomes an unpaid advocate because it directly reduces her workload.

### Journey 5: Error Recovery — Offline Conflict Resolution

**Opening Scene:** Carlos and his tech Luis are both working jobs for the same customer on the same day — Carlos on a bathroom remodel plumbing, Luis on a kitchen faucet replacement. Both are in areas with poor signal.

**Rising Action:** Both create job records offline. Carlos updates the customer's phone number (the customer mentioned a new number). Luis adds notes to the same customer record with details about the kitchen fixtures. Both complete their jobs and capture signatures offline.

**Climax:** Both phones reconnect within minutes of each other. The sync engine detects the concurrent edits. Phone number update from Carlos takes priority (last-write-wins for scalar fields). Luis's job notes merge cleanly as separate records. Both invoices are created without conflict. Maria sees both completed jobs appear on her dashboard with no errors.

**Resolution:** Neither Carlos nor Luis noticed anything happened. The sync just worked. Maria invoices both jobs. QuickBooks receives both entries correctly.

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Mike (solo HVAC) | Pricebook templates, SMS quote delivery, customer approval via link, photo attachments, auto-invoice from quote, payment notifications, QuickBooks auto-sync, one-hour onboarding |
| Carlos & Maria (3-person shop) | Multi-user access, dispatch view, offline-first workflow, customer import, QuickBooks sync reliability, web dashboard for office partner |
| Jake (new electrician) | Branded quotes, professional PDFs, card payment via link, pricebook customization, no per-user fees for growth |
| Sarah (bookkeeper) | QuickBooks sync accuracy, sync status dashboard, zero manual reconciliation, reliable payment matching |
| Error Recovery | Offline conflict resolution, concurrent edit handling, multi-device sync, data integrity |

## Mobile App Specific Requirements

### Project-Type Overview

This is a mobile-first application targeting iOS and Android with a companion read-only web dashboard. The primary interaction surface is the smartphone — every feature is designed for use in the field, in the truck, and on the job site.

### Technical Architecture Considerations

**Platform Requirements:**
- iOS 15+ and Android 12+ support
- Cross-platform framework (React Native or Flutter) for feature parity and shared codebase
- Native device capabilities: camera (photo documentation), GPS (job site location), push notifications, calendar integration

**Offline-First Architecture:**
- Local database (SQLite/Realm) stores all active data on-device
- Event-sourced sync model: local changes recorded as events, replayed to server on reconnection
- Conflict resolution strategy: last-write-wins for scalar fields, merge for collection fields (job notes, photos)
- Encrypted local storage for customer data and payment information at rest

**Device Permissions:**
- Camera: job site photos, document scanning
- Location: job site address auto-fill, dispatch proximity
- Notifications: quote approvals, payment received, schedule changes
- Calendar: read/write for Google Calendar and Apple Calendar sync
- Contacts: optional customer import

**Store Compliance:**
- Apple App Store and Google Play Store submission requirements
- In-app payment processing must comply with platform guidelines (payments for physical services are exempt from platform commission)
- Privacy policy and data handling disclosures

### Implementation Considerations

- Push notification infrastructure for real-time quote approvals and payment notifications
- Background sync process that respects OS battery optimization restrictions
- Deep linking for customer-facing quote approval and payment links (no app install required for customers)
- App size target: < 50MB initial download
- Support for smartphones only (no tablet-specific layouts in MVP)

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the complete Quote > Schedule > Invoice > Get Paid workflow reliably. Every feature in the MVP directly supports this four-step workflow. If a feature doesn't serve one of these four steps, it's deferred.

**Resource Requirements:** Small team (2-4 developers) building with cross-platform mobile framework. One backend developer for sync engine, payments integration, and QuickBooks API. One mobile developer for app UI/UX. Shared responsibility for testing. Timeline: 3-4 months to beta, 5-6 months to AppSumo launch.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo operator: signup → pricebook setup → create quote → send to customer → schedule job → complete job → invoice → collect payment → QuickBooks sync
- Multi-user shop: above + dispatch view + office partner web dashboard
- Customer: receive quote via SMS → approve → receive reminder → receive invoice → pay via link

**Must-Have Capabilities:**
1. Trade-specific pricebook templates (HVAC, plumbing, electrical) with custom line item support
2. Quote creation with photo attachments and branded PDF generation
3. SMS delivery of quotes with one-tap customer approval link
4. Calendar-based scheduling with drag-and-drop and automated SMS reminders
5. Basic dispatch view (who's where, what's next) for 2-5 person shops
6. Job status lifecycle (quoted → scheduled → in-progress → complete)
7. On-site photo documentation and digital signature capture
8. Auto-generate invoice from completed job/approved quote
9. Card payment processing (on-site and via payment link)
10. QuickBooks Online sync (customers, invoices, payments)
11. Customer contact management with service history
12. Offline-first operation for entire core workflow
13. iOS and Android apps with push notifications
14. Basic web dashboard (schedule view, invoice status, sync status)

### Post-MVP Features

**Phase 2 (Months 6-12):**
- Route optimization
- QuickBooks Desktop integration
- Reporting dashboard (revenue trends, job profitability)
- Customer review request automation
- Equipment/asset tracking per customer
- Recurring service agreements and maintenance schedules

**Phase 3 (Year 2+):**
- AI quote suggestions
- Voice-to-job-notes
- Customer financing (BNPL)
- Additional trade verticals
- Multi-language support
- Inventory/parts management
- Platform API

### Risk Mitigation Strategy

**Technical Risks:** Offline-first sync is the hardest engineering challenge. Mitigate by using proven patterns (CRDTs or event sourcing), extensive edge-case testing across device types and OS versions, and building sync reliability monitoring from day one.

**Market Risks:** Jobber or Housecall Pro could launch a stripped-down solo tier. Mitigate by moving fast, building community loyalty before competitive response, and differentiating on offline-first + flat-rate — both architecturally difficult for incumbents to adopt without cannibalizing revenue.

**Integration Risks:** QuickBooks API changes could break sync. Mitigate by using a unified API layer (Apideck/Merge), investing in automated integration testing, and monitoring for API deprecation notices.

**Resource Risks:** If team is smaller than planned, cut scope to HVAC-only pricebook and iOS-only launch. The core four-step workflow is non-negotiable; everything else can be phased.

## Functional Requirements

### Quoting & Estimates

- FR1: Users can create quotes from pre-built trade-specific pricebook templates (HVAC, plumbing, electrical)
- FR2: Users can add custom line items with labor, materials, and markup to any quote
- FR3: Users can attach photos from the device camera to a quote for job site documentation
- FR4: Users can send a branded PDF quote to a customer via SMS
- FR5: Customers can approve a quote by tapping a link in the SMS message (no app install or account required)
- FR6: Users can view the status of all sent quotes (sent, viewed, approved, declined, expired)
- FR7: Users can duplicate a previous quote as a template for similar jobs
- FR8: Users can customize their pricebook by adding, editing, or removing items and categories

### Scheduling & Dispatch

- FR9: Users can create, view, and manage jobs on a calendar interface
- FR10: Users can drag-and-drop jobs to reschedule them on the calendar
- FR11: The system sends automated SMS appointment reminders to customers (configurable timing)
- FR12: Users can view a dispatch board showing all technicians' current assignments and locations
- FR13: Users can assign and reassign jobs to specific technicians
- FR14: Users can sync their job schedule with Google Calendar or Apple Calendar

### Job Management

- FR15: Users can track job status through a defined lifecycle (quoted, scheduled, in-progress, complete, invoiced)
- FR16: Users can capture photos on the job site and attach them to the job record
- FR17: Users can capture a digital customer signature on the device screen
- FR18: Users can add notes and work descriptions to a job record
- FR19: Users can auto-generate an invoice from a completed job using the approved quote line items

### Invoicing & Payments

- FR20: The system generates professional branded invoices with the user's business logo, name, and license number
- FR21: Users can send an invoice to a customer via SMS with an embedded payment link
- FR22: Customers can pay an invoice via credit/debit card through the payment link (no app install or account required)
- FR23: Users can accept card payments on-site through the mobile app
- FR24: Users can track payment status for all invoices (sent, viewed, paid, partially paid, overdue)
- FR25: Users can accept partial payments on an invoice
- FR26: Users receive push notifications when a payment is received

### QuickBooks Integration

- FR27: Users can connect their QuickBooks Online account via OAuth
- FR28: The system automatically syncs customers, invoices, and payments to QuickBooks Online on job completion and payment receipt
- FR29: Users can view a sync status dashboard showing recent sync activity, successes, and errors
- FR30: Users can manually trigger a re-sync for any failed transaction
- FR31: The system prevents duplicate entries in QuickBooks by matching on unique identifiers

### Customer Management

- FR32: Users can create and edit customer contact records (name, phone, email, address)
- FR33: Users can view a customer's complete job history and service records
- FR34: Users can search and filter customers by name, address, or phone number
- FR35: Users can import existing customers from a CSV file

### Offline Capabilities

- FR36: Users can perform the entire core workflow (create quote, schedule job, complete job, generate invoice, capture payment intent) without internet connectivity
- FR37: The system automatically syncs all offline-created data when internet connectivity is restored
- FR38: The system resolves data conflicts from concurrent multi-device edits without user intervention
- FR39: The system displays sync status (synced, pending, error) for all records

### User & Account Management

- FR40: Users can sign up with email and phone number
- FR41: Users can configure their business profile (business name, logo, license number, contact info)
- FR42: Users can invite additional team members to the same account at no extra cost
- FR43: Team members can log in on their own devices with access to shared schedules, jobs, and customer data

### Web Dashboard

- FR44: Office partners can view the team schedule on a web browser
- FR45: Office partners can view invoice statuses and payment history on a web browser
- FR46: Office partners can view QuickBooks sync status and errors on a web browser

### Notifications & Communication

- FR47: The system sends push notifications to users for quote approvals, payment receipts, schedule changes, and sync errors
- FR48: The system sends SMS messages to customers for quotes, appointment reminders, invoices, and payment confirmations
- FR49: Users can configure SMS reminder timing (e.g., 24 hours before, 1 hour before)

## Non-Functional Requirements

### Performance

- NFR1: Core app actions (open quote form, save job, generate invoice) complete within 2 seconds on devices with mid-range specifications (e.g., iPhone 12, Samsung Galaxy A54)
- NFR2: App cold start time < 3 seconds on supported devices
- NFR3: Offline data operations (create, read, update) complete within 500ms
- NFR4: Background sync completes all pending records within 30 seconds of connectivity restoration
- NFR5: SMS delivery for quotes and invoices occurs within 60 seconds of user action (when online)

### Security

- NFR6: All data stored on-device is encrypted at rest using platform-native encryption (iOS Keychain / Android Keystore)
- NFR7: All data transmitted between app and server uses TLS 1.3
- NFR8: Payment card data is never stored on-device or on our servers — processing delegated to PCI-DSS Level 1 compliant payment processor (Stripe)
- NFR9: User authentication tokens expire after 30 days of inactivity
- NFR10: Customer-facing links (quote approval, payment) expire after 30 days

### Scalability

- NFR11: Backend supports 50,000 concurrent users without degradation
- NFR12: Sync engine handles 1,000 sync operations per second at peak
- NFR13: Database supports 15,000+ active accounts with 100+ jobs per account per month

### Reliability

- NFR14: Cloud services maintain 99.9% uptime (< 8.76 hours downtime per year)
- NFR15: Zero data loss from offline-to-online sync operations (99.9%+ sync success rate)
- NFR16: QuickBooks sync accuracy of 99.9%+ (zero duplicate transactions under normal operation)
- NFR17: Automated monitoring alerts for sync failure rates exceeding 0.1%

### Integration

- NFR18: QuickBooks Online API integration supports API version changes with < 48 hours remediation
- NFR19: SMS delivery achieves 98%+ delivery rate via Tier 1 SMS provider (Twilio)
- NFR20: Payment processing supports Visa, Mastercard, American Express, and Discover via Stripe
- NFR21: Calendar sync supports Google Calendar API v3 and Apple EventKit

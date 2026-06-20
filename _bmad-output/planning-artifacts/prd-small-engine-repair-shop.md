---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/small-engine-repair-shop-management.md
  - _bmad-output/planning-artifacts/product-brief-small-engine-repair-shop-management.md
workflowType: 'prd'
classification:
  projectType: saas_web_app
  domain: vertical_software
  complexity: low_medium
  projectContext: greenfield
date: '2026-06-20'
author: Root
project_name: 'ShopWrench — Small Engine Repair Shop Management'
---

# Product Requirements Document - ShopWrench: Small Engine Repair Shop Management

**Author:** Root
**Date:** 2026-06-20

## Executive Summary

An estimated 20,000+ small engine repair shops in the US — servicing lawn mowers, chainsaws, generators, snowblowers, and outdoor power equipment — operate without a single purpose-built management system. Every shop runs on paper work orders, handwritten parts lists, sticky notes on mower handlebars, and whiteboard job queues. The only OPE-specific competitor, Bench (toolbench.shop), has captured just 120+ shops at $79–$199/month with no lifetime deal, no warranty claim workflow, and no seasonal backlog board. An estimated 85–90% of the addressable market has zero software adoption.

**ShopWrench** is a purpose-built work-order management system for small engine repair shops, designed for OPE-native workflows: digital intake with photos and digital sign-off, a parts log tied to each specific job, a seasonal backlog board with color-coded promised-date tracking, automatic SMS when equipment is ready for pickup, and a warranty claim documentation workflow for authorized Briggs & Stratton, Honda, and Husqvarna dealers. Priced at a one-time $79 lifetime deal — the only such option in the market — it removes the single biggest adoption barrier: monthly subscription bills during a 4-month slow season.

**Target launch revenue:** 500 founding-member LTD shops at $79 = $39,500. Post-LTD target: $39–59/month subscription → $10K+ MRR within 12 months.

**Go-to-market:** Community-direct via r/smallengines, My Tractor Forum, Facebook groups ("Small Engine Repair Professionals"), and YouTube repair channel sponsorships (50K–500K subscriber channels). Pre-spring launch targeting February–March 2026 to capture shops before the April–May peak season.

### What Makes This Special

**Lifetime deal pricing ($79 one-time).** The only tool in the market without a monthly subscription. Positioned as "buy it like a tool, not rent it like a service." Removes the off-season billing objection that prevents shop owners from adopting Bench ($79+/month).

**Seasonal backlog board.** Calendar/Kanban view of all active jobs with promised dates, overdue alerts, bay assignments, and technician assignment. Directly addresses the spring chaos problem no competitor has solved: 50+ mowers arriving in the same week with no system to track promised dates.

**Auto-SMS when ready.** Customer receives an automatic text when status moves to "Ready for Pickup," eliminating the "is my mower ready?" call flood that shop owners describe as 20+ interruptions per spring morning.

**Parts tied to the work order.** Ordered a Briggs 593260 carb? It's linked to Mrs. Johnson's Toro in bay 3 — not floating in a generic inventory pool. When it arrives, the work order advances automatically. No other tool offers per-job part tracking at any price.

**Warranty claim documentation.** Flag any job as a warranty claim. Required manufacturer fields (serial number, failure description, OEM parts used, technician certification) are enforced at entry. Claim status tracked end-to-end. No competitor has this at any price.

**Intake photo with digital sign-off.** Customer acknowledges pre-existing damage at drop-off via finger signature or checkbox. Eliminates pickup disputes with documented evidence.

## Project Classification

- **Project Type:** SaaS Web App (mobile-responsive, tablet-first for front counter; no native mobile apps in MVP)
- **Domain:** Vertical software (small engine / outdoor power equipment repair shop management)
- **Complexity:** Low-medium — standard CRUD for work orders and parts, Twilio SMS integration, PDF generation, multi-user RBAC per shop. No regulated industry data; customer PII and phone numbers require standard security practices.
- **Project Context:** Greenfield — new product built from scratch targeting an entirely underserved niche

## Success Criteria

### User Success

- **Time to First Work Order:** 80%+ of new shops create a complete work order (customer, equipment, symptom, promised date, status) within 30 minutes of signup
- **Spring Call Reduction:** Shops self-report 50%+ reduction in inbound "is my mower ready?" calls in their first spring season using the product; proxy metric: ≥10 auto-SMS sent per active shop per week during April–May
- **Parts Linking Adoption:** 85%+ of parts entries in the system are linked to a specific work order (not unlinked); indicates the core per-job parts workflow is landing
- **Seasonal Retention:** 70%+ of shops activated in the prior 90 days have ≥5 active work orders open during April–May peak
- **Warranty Workflow Adoption:** 25%+ of shops on the Team tier have created at least one warranty claim workflow job within 60 days
- **Aha Moment:** First spring morning a shop owner reports zero "is my mower ready?" calls before noon

### Business Success

| Milestone | Target | Timing |
|---|---|---|
| LTD founding-member sales | 500 units at $79 | Launch month |
| LTD activation rate | 70% of purchasers create ≥1 WO in 30 days | 30 days post-purchase |
| Active shops during peak | 50+ shops with ≥20 open WOs simultaneously | April–May |
| NPS | ≥ 50 | Post-spring survey |
| Warranty jobs created | 500+ cumulative | Month 6 |
| MRR (subscription tier) | $10,000+ | Month 12 |
| Total shops on platform | 1,500 (LTD + subscription) | Month 12 |
| Monthly churn (subscription) | < 5% | Month 6+ |

**Go / no-go decision:** 3 of 4 MVP success criteria met → proceed to subscription product development, QuickBooks integration, and AppSumo launch. Fewer than 2 met → interview churned users and pivot before further investment.

### Technical Success

- Work order list renders in under 2 seconds for up to 200 active work orders per shop
- Backlog board renders in under 3 seconds on a standard tablet (iPad 10th gen equivalent)
- Auto-SMS delivers to customer within 60 seconds of status trigger
- System achieves 99.5%+ uptime during peak season (April–May, September–October)
- PDF invoice and warranty documentation export completes in under 5 seconds
- Multi-tenant data isolation: zero cross-shop data leakage in any test scenario

## Product Scope

### MVP — Minimum Viable Product (Phase 1, 3–4 weeks)

**MVP Strategy:** Problem-solving MVP targeting the spring backlog crisis as the single forcing function. A shop owner must be able to adopt ShopWrench in the week before spring rush and immediately see fewer phone calls and less chaos — without training or setup time that takes away from repair work.

**Must-Have Capabilities:**

1. **Digital Work Order** — Equipment intake form capturing customer name, phone, equipment make/model/serial, symptom description, promised completion date, bay/location, and technician assignment. Status field cycling through: Waiting → Diagnosed → Parts Ordered → In Repair → Complete → Ready for Pickup.
2. **Intake Photos + Digital Sign-Off** — Up to 5 photos per work order via device camera or file upload. Customer digital acknowledgment (finger signature or checkbox) of equipment condition at intake.
3. **Seasonal Backlog Board** — Kanban/list view of all active work orders sorted by status. Color coding: overdue = red, due today = amber, on track = green, ready for pickup = blue. Filter by status, technician, bay, overdue flag. Search by customer name or equipment model.
4. **Parts Log (Per Work Order)** — Add parts to a specific work order with part name, part number, supplier, date ordered, status (Ordered → Received → Installed). Visual "Parts Pending" indicator on job cards. Auto-suggest status advance when all parts marked Received.
5. **Auto-SMS on Ready** — Automatic SMS to customer when status advances to "Ready for Pickup." Customizable template per shop. Optional follow-up SMS for uncollected equipment. 500 SMS/month included per shop. Twilio backend.
6. **Basic Invoice on Completion** — Prompt to generate invoice when status reaches "Complete." Auto-populate labor (hours × rate) and parts from parts log. Tax rate field. PDF export or text/email to customer. No payment processing in MVP.
7. **Multi-User Access** — Owner account with full admin. Technician accounts: can update work order status and parts log; cannot edit customer info, pricing, or account settings. Up to 5 technician seats on Team tier.
8. **Warranty Claim Workflow** — Checkbox to flag work order as warranty job. Surfaces required fields: engine serial, date of purchase, failure description (structured), OEM parts used, technician name and certification number. Claim status: Not Submitted → Submitted → Approved → Rejected. PDF warranty documentation export.

**Core User Journeys Supported in MVP:** Solo owner spring rush (primary), multi-tech shop coordination with warranty dealer workflow (secondary), technician status updates without admin access (supporting).

### Post-MVP Features (Phase 2, Months 3–6)

- QuickBooks Online sync (invoices and payment records)
- Abandoned equipment tracking with automated storage fee escalation and SMS notices
- Customer-facing status portal (view job status without calling)
- Reporting dashboard: revenue by month/season, average repair time, parts spend per job, technician productivity
- Barcode scanning for quick work order lookup at front counter
- Annual subscription plan ($299/year) to reduce off-season churn

### Future Vision (Phase 3, Months 6–18)

- Direct parts ordering from within work order: Briggs & Stratton parts lookup, Rotary, STENS supplier integrations
- Pre-populated warranty claim forms for Briggs & Stratton and Husqvarna authorized dealer networks
- Native iOS / Android apps
- OPE dealer DMS module (sales + service in one tool) for the dealer segment
- Fleet service accounts (landscaping companies with 20+ mowers/year)
- Manufacturer co-marketing integrations (authorized dealer directory)

## User Journeys

### Journey 1: Dave — Solo Owner-Operator Spring Rush (Primary Happy Path)

Dave, 54, runs a one-person shop in suburban Ohio. He's been a mechanic for 30 years. His wife takes calls two mornings a week during spring. On a Tuesday evening in early April, Dave finds a post in r/smallengines: "What do you use to track work orders during spring rush? My paper system is failing me." The replies are full of pain. Someone mentions ShopWrench — "one-time price, built for mower shops." Dave clicks through to the landing page. "No monthly fees. Built for small engine shops." He signs up for the 14-day trial, no credit card.

The setup guide is 5 steps. Dave enters his shop name and creates his first work order — a Craftsman push mower already on his bench. Takes 4 minutes: customer name, phone, "rough-running, runs lean," promised completion Friday, bay 1. He adds two photos of the deck damage from drop-off. The work order appears on his backlog board. He texts his wife: "first one took less time than the paper form."

By April 15th, Dave has 38 active work orders on the board. He can see: 12 waiting for parts (amber), 8 in repair (green), 6 ready for pickup (blue — texts already sent), 4 overdue past promised date (red). When a Briggs carburetor arrives from his supplier, he opens the linked work order, marks the part received, and the job automatically suggests advancing to "Ready to Repair." He completes it at end of day — the customer gets an automatic text at 5:03 PM: "Your Craftsman lawn mower is ready at Dave's Small Engine Repair. Please pick up by Friday to avoid storage fees."

**Aha moment:** First morning of spring rush where Dave doesn't receive a single "is my mower ready?" call before noon. His wife reports 2 calls all morning. Dave realizes he should have done this years ago.

### Journey 2: Dave — Parts Mix-Up Edge Case (Error Recovery)

Mid-April. Dave has two Toro mowers in the shop for different customers — similar models. A carburetor arrives from MTD Supply. Dave isn't sure which work order it belongs to. He searches "Toro" in ShopWrench and sees both WOs side by side. The parts log on WO #22 shows the pending MTD carb with the exact part number. WO #31 shows no parts ordered. Dave marks the part Received on WO #22, links it to Mrs. Johnson's Toro in bay 3, and the job card advances. No sticky notes, no confusion, no wrong mower getting the wrong carb.

If Dave had accidentally linked the part to the wrong WO, the visual indicator would show WO #22 still "Parts Pending" while WO #31 showed an unexpected "Parts Received" — prompting him to catch the error before installing anything.

### Journey 3: Maria — Authorized Dealer Warranty Claim Workflow

Maria, 42, co-owns a shop with her husband in rural Minnesota. They have 3 technicians and are an authorized Briggs & Stratton service center. A customer brings in a riding mower with a documented engine failure under warranty. Maria creates a work order in ShopWrench: equipment details, symptom "engine seizure at 47 hours," and checks "This is a warranty job."

ShopWrench surfaces a warranty claim panel: engine serial number (required), date of purchase (required), failure description with structured dropdown (engine mechanical failure), OEM parts used with part numbers pulled from the parts log. Maria's husband, the lead tech, enters his B&S certification number and signs off. When complete, Maria clicks "Export Warranty Documentation" — a PDF containing all required fields is generated in under 5 seconds. She submits it to B&S directly. The claim status field updates to "Submitted." Two weeks later: "Approved." Total time to complete warranty documentation: 8 minutes, down from 25 minutes reconstructing from paper.

The backlog board shows the warranty job flagged with a "W" badge. Maria can filter to show only warranty jobs — useful when B&S sends an audit request.

### Journey 4: Alex — Technician Status Update (Supporting User)

Alex, 26, is one of Maria's technicians. He does not have access to customer pricing, invoice amounts, or shop settings — his technician account shows work orders assigned to him and all unassigned jobs. Alex finishes a snowblower carburetor service on WO #47. He opens the job in ShopWrench on the shop tablet, moves status to "Complete," and adds a note: "Replaced carb, cleaned fuel system, test-started OK." He also marks the Toro carb on WO #51 as "Installed" since he just put it on. He cannot see the invoice or edit the customer's phone number. The owner gets notified that WO #47 is complete and the auto-SMS queue will fire when Maria marks it "Ready for Pickup."

Alex never has to wait for Maria to know what to work on next. The backlog board (visible to technicians) shows all jobs in "Waiting" and "Parts Received" status, sorted by overdue flag and promised date.

### Journey 5: Shop Owner — Off-Season Onboarding (Retention Journey)

November. Dave's been using ShopWrench for 7 months. His active work order count drops from 40 to 6. He realizes his customer history is all in the system now — equipment serial numbers, parts used, service history for 200+ customers. When Mrs. Johnson calls in November about her snowblower, Dave pulls up her record: he serviced her Toro mower in April and her Ariens snowblower last November. He can quote the pre-season snowblower service from the prior-year parts log without asking her to describe the machine again. The switching cost to any other tool is now the loss of all that history. Dave doesn't think about canceling — there's nothing to cancel.

### Journey Requirements Summary

| Journey | Capabilities Required |
|---|---|
| Dave — Spring Rush | Work order creation, backlog board, status transitions, auto-SMS, parts log per job |
| Dave — Parts Mix-Up | Parts linking to WO, visual pending indicator, WO search and comparison |
| Maria — Warranty Claim | Warranty flag on WO, required field enforcement, status tracking, PDF export |
| Alex — Technician | Role-restricted login, status update, parts log update, no financial data access |
| Off-Season Retention | Customer history lookup, equipment service history, serial number search |

## SaaS Web App Specific Requirements

### Project-Type Overview

ShopWrench is a multi-tenant SaaS web application targeting solo to 5-technician small engine repair shops. Each shop is an isolated tenant. The core access model is owner + up to 5 technician seats. No white-labeling. No reseller channel. Billing is handled directly via Stripe (LTD payment and subscription).

### Technical Architecture Considerations

**Multi-Tenancy:** All shop data (work orders, customers, parts logs, SMS history) is tenant-isolated at the database row level with shop_id as the partition key. No cross-tenant queries. Authentication tokens are scoped to a single shop.

**Role-Based Access Control (RBAC):** Two roles in MVP:
- **Owner:** Full CRUD on all data; account settings; billing; SMS configuration; user management; invoice generation
- **Technician:** Read all work orders in their shop; update work order status and parts log status; cannot access customer contact info directly, invoice amounts, or account/billing settings

**Billing Integration:**
- LTD purchases handled as one-time Stripe Payment Intent
- Monthly/annual subscription via Stripe Subscriptions
- Entitlement check on each API request: LTD status or active subscription required
- Grace period of 3 days after failed subscription payment before locking

**SMS Infrastructure:**
- Twilio Messaging Service for outbound SMS
- Each shop has a configured SMS pool number or shared sending number
- SMS rate tracking per shop per billing period
- Delivery status webhooks updating work order SMS log

**PDF Generation:** Server-side PDF generation (headless rendering or templating library) for invoices and warranty documentation. PDFs stored temporarily for download; not persisted long-term in MVP.

**Mobile Responsiveness:** Mobile-responsive web app tested on Chrome/Safari on iPad (10th gen) and iPhone 14 at minimum. No native apps in MVP. Tablet layout is the primary design target (front counter and shop floor use cases).

### Implementation Considerations

- Session-based authentication with CSRF protection (standard web session, not JWT-only, for tablet compatibility)
- Image upload limited to 5 photos per work order; compressed and stored in object storage (S3-compatible); served via CDN
- All customer phone numbers stored E.164 format; normalized on input
- Promised date stored as date (no time component) in shop's local timezone
- Work order history log (immutable audit trail of all status changes with timestamp and user) required for warranty claim integrity

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — minimum product that proves the spring backlog crisis is solved. The benchmark: a solo shop owner can adopt ShopWrench the week before spring rush, complete their first work order in under 30 minutes, and see measurably fewer inbound calls within the first week.

**Resource Requirements:** 1 full-stack developer + 1 designer; 3–4 weeks build time. The MVP is intentionally constrained to the 8 core capabilities — no general inventory management, no payment processing, no customer-facing portal.

### Risk Mitigation Strategy

**Technical Risks:** Twilio SMS delivery reliability is the most critical third-party dependency. Mitigation: fall back to manual SMS prompt (phone number shown, message template copyable) if Twilio delivery fails. Test SMS delivery end-to-end in staging with real carrier testing.

**Market Risks:** Tech aversion among shop owners. Mitigation: 14-day free trial with no credit card; onboarding guide targets <30-minute first WO; Bench's 120+ shops proves adoption is possible. Benchmark: if <30% of trial users create their first WO within 24 hours, redesign onboarding immediately.

**Resource Risks:** If build runs long, defer multi-user RBAC and warranty claim workflow to immediate post-MVP (v1.1 within 30 days). Core MVP is then WO creation + backlog board + SMS + parts log — sufficient to prove the spring use case.

## Functional Requirements

### Work Order Management

- FR1: Shop owner can create a work order capturing customer name, phone number, equipment make, model, serial number, symptom description, and promised completion date
- FR2: Shop owner can assign a work order to a technician and a bay or location within the shop
- FR3: Shop owner or technician can advance a work order through status states in sequence: Waiting → Diagnosed → Parts Ordered → In Repair → Complete → Ready for Pickup
- FR4: Shop owner can manually set or update the promised completion date on any open work order
- FR5: Shop owner can add up to 5 intake photos per work order via device camera or file upload
- FR6: Customer can provide digital acknowledgment of equipment condition at intake via finger signature or checkbox on the work order screen
- FR7: Shop owner can search all work orders by customer name, equipment make/model, or serial number
- FR8: Shop owner can view a complete work order history for any customer, showing all past jobs and equipment serviced

### Seasonal Backlog Board

- FR9: Shop owner and technicians can view all active work orders in a Kanban-style board organized by status lane
- FR10: System displays overdue work orders (promised date in the past) with red visual indicator; work orders due today display amber; on-track work orders display green; "Ready for Pickup" work orders display blue
- FR11: Shop owner can filter the backlog board by status, assigned technician, bay, and overdue flag simultaneously
- FR12: Shop owner can view a count of active work orders in each status lane on the backlog board
- FR13: Shop owner and technicians can view a single-work-order detail screen from the board with all intake photos, parts log, and status history

### Parts Tracking

- FR14: Shop owner or technician can add a part to a specific work order with part name, part number, supplier name, and date ordered
- FR15: Shop owner or technician can update a part's status on a work order through: Ordered → Received → Installed
- FR16: System displays a visual "Parts Pending" indicator on work order cards where at least one part is in Ordered or Received status and has not been Installed
- FR17: When all parts on a work order are marked Received, system presents a prompt to advance work order status to "In Repair"
- FR18: All parts are attached to a specific work order and cannot exist as unlinked inventory entries in MVP

### Customer Communication

- FR19: System automatically sends an SMS to the customer phone number from the work order when status advances to "Ready for Pickup"
- FR20: Shop owner can customize the SMS template with shop name, equipment description variable, and pickup deadline variable
- FR21: Shop owner can configure an optional follow-up SMS to send after a configurable number of days if the work order remains in "Ready for Pickup" status
- FR22: Shop owner can view a log of all SMS messages sent for each work order, including delivery status and timestamp

### Invoicing

- FR23: When a work order status reaches "Complete," system prompts the shop owner to generate an invoice
- FR24: Invoice auto-populates line items from the work order: parts from the parts log with quantities and costs, and a labor line with configurable hours and hourly rate
- FR25: Shop owner can add, remove, or edit line items on an invoice before finalizing
- FR26: Shop owner can apply a tax rate to the invoice subtotal
- FR27: Shop owner can export the completed invoice as a PDF or send it to the customer via SMS or email

### Warranty Claim Workflow

- FR28: Shop owner can flag any work order as a warranty job at creation or at any point during the workflow
- FR29: Warranty work orders surface a structured warranty claim panel enforcing entry of: engine serial number, date of equipment purchase, failure description (structured dropdown with free-text detail), OEM parts used (populated from parts log with OEM part numbers editable), technician name, and technician certification number
- FR30: Shop owner can track warranty claim status on each flagged work order: Not Submitted → Submitted → Approved → Rejected
- FR31: System generates a PDF warranty documentation report for a work order containing all required manufacturer claim fields, exportable at any time after the warranty panel is completed
- FR32: Shop owner can filter the backlog board to show only warranty-flagged work orders
- FR33: Warranty claim history and documentation are preserved in work order records and accessible from customer equipment history

### User & Account Management

- FR34: Shop owner can create technician accounts for their shop with a restricted permission role; technicians can view and update work orders and parts logs but cannot access invoice amounts, customer financial data, or account/billing settings
- FR35: Shop owner can manage up to 5 active technician seats on the Team tier and deactivate technician accounts without deleting their work history
- FR36: Shop owner can configure shop profile with name, phone, address, and default SMS template
- FR37: Shop owner can configure their default labor rate and tax rate in account settings for invoice pre-population
- FR38: Shop owner can view their subscription tier (LTD or subscription), SMS usage for the current billing period, and photo storage usage from account settings
- FR39: Shop owner can export all their work order data as a CSV file from account settings (no lock-in guarantee)

## Non-Functional Requirements

### Performance

- Work order list (backlog board) renders in under 2 seconds for shops with up to 200 active work orders as measured by browser load time on a standard tablet on a 4G connection
- Auto-SMS delivers to customer within 60 seconds of work order status trigger event as measured by Twilio delivery webhook timestamps
- Invoice PDF and warranty documentation PDF export complete in under 5 seconds as measured by server response time
- Image upload for intake photos completes in under 10 seconds per photo at 10 Mbps upload speed; photos are compressed to under 1 MB server-side before storage

### Security

- All customer PII (name, phone number) is encrypted at rest in the database
- All traffic is served exclusively over HTTPS/TLS 1.2+
- Multi-tenant isolation enforced at the API layer: every data query filters by shop_id derived from the authenticated session; no work order or customer record is accessible across shop boundaries
- Technician accounts cannot access invoice amounts, customer phone numbers in editable form, or billing information; these fields are omitted from technician API responses
- Session tokens expire after 8 hours of inactivity; re-authentication required for account settings changes
- Photos are stored in private object storage (non-public URLs); served via time-limited signed URLs

### Scalability

- System architecture supports up to 5,000 simultaneous shops with no degradation to performance targets; horizontal scaling at the application tier is the growth path
- Seasonal traffic spikes during April–May (estimated 2–3x baseline work order creation volume) are handled without downtime or perceptible latency increase
- SMS volume spikes (up to 10,000 outbound messages per day platform-wide during peak spring) are handled within Twilio rate limits and queued gracefully if limits are approached
- Object storage for intake photos scales to 1 TB without configuration changes

### Integration

- Twilio Messaging Service is the sole SMS provider in MVP; delivery status webhooks are consumed to update the SMS log per work order
- Stripe handles all payment processing for LTD purchases (one-time Payment Intent) and subscriptions (Stripe Subscriptions with webhook-driven entitlement updates)
- PDF generation is entirely server-side with no external third-party PDF services; generated files are served via direct download and not persisted beyond the request session in MVP
- The system is compatible with all modern browsers (Chrome, Firefox, Safari) on iPad, Android tablet, and desktop; no browser plugins or native app installation required

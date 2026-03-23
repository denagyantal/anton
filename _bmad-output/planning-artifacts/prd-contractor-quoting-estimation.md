---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments: ['ideas/shortlisted/contractor-quoting-estimation.md', '_bmad-output/planning-artifacts/product-brief-contractor-quoting-estimation.md', '_bmad-output/planning-artifacts/research/market-contractor-quoting-estimation-research-2026-03-21.md']
workflowType: 'prd'
date: '2026-03-23'
author: 'Root'
project_name: 'QuoteCraft'
classification:
  projectType: web_app
  domain: general
  complexity: low
  projectContext: greenfield
---

# Product Requirements Document - QuoteCraft

**Author:** Root
**Date:** 2026-03-23

## Executive Summary

QuoteCraft is a mobile-first Progressive Web App (PWA) that enables small trade contractors — plumbers, electricians, HVAC technicians, and painters — to create professional, trade-specific quotes in under 60 seconds from their phone, directly on the jobsite. The product targets the critical gap in the $2.73B construction estimating software market (projected $5.01B by 2030 at 12.89% CAGR) where 75% of buyers have 50 or fewer employees yet existing solutions either cost $200-500+/month or are generic horizontal tools that ignore trade-specific workflows.

QuoteCraft launches via AppSumo at a $59-89 lifetime deal — a 98-99% discount versus competitors' annual costs — to build an initial base of 2,000-5,000 contractors, with a clear path to $10K+ MRR within 12 months through premium subscription upsells (team features, AI pricing, integrations).

**Target Users:** Solo tradespeople and micro crews (1-10 employees) currently using spreadsheets, handwritten notes, or basic free tools to quote 5-20 jobs per week. These users need speed, professional output, and trade-specific pricing — not dispatching, fleet management, or CRM modules they'll never use.

**Core Workflow:** Select trade template → customize line items and quantities → attach jobsite photos → generate branded PDF → send via SMS/email → customer e-signs and pays deposit. The entire flow works offline-first, syncing when connectivity returns.

### What Makes This Special

1. **Trade-specific out of the box.** A plumber opens QuoteCraft and immediately sees plumbing line items (water heater install, pipe repair, drain clearing) with suggested market pricing. No blank canvas. No setup. Vertical SaaS companies achieve 35-60% higher retention than horizontal platforms because they solve trade-specific problems daily.

2. **60-second mobile quoting.** The fastest path from customer request to professional PDF in their inbox. Designed for one-handed jobsite use — not desktop workflows shoehorned onto mobile. This speed advantage directly translates to higher win rates as contractors who respond first win 50%+ more bids.

3. **AI-powered pricing accuracy.** Prevents the #1 quoting mistake: pricing from memory. AI suggests prices based on trade, region, and current material costs, addressing the margin erosion that plagues manual quoting. AI estimating tools deliver up to 97% accuracy and 80% automation (SignalFire 2026).

4. **LTD pricing eliminates adoption friction.** At $59-89 one-time versus $1,200-6,000/year for competitors, the purchase decision is trivial: "This costs less than one hour of my billable time." This removes the #1 barrier to contractor software adoption — subscription anxiety.

5. **Quote-to-deposit in one flow.** Seamless e-signature and Stripe-powered deposit collection directly from the quote link. Contractors get paid before they start work, solving the cash flow problem that affects 70%+ of small service businesses.

## Project Classification

- **Project Type:** Web Application (Progressive Web App)
- **Domain:** General / Small Business SaaS
- **Complexity:** Low — no regulatory compliance requirements, standard web security practices apply
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Time to first quote:** Users complete their first quote within 10 minutes of signup, confirming frictionless onboarding
- **Quote creation speed:** Average quote creation time under 2 minutes after onboarding, validating the 60-second speed promise
- **Adoption signal:** Users send 5+ quotes per week by week 2, indicating real workflow integration rather than trial curiosity
- **Win rate impact:** Users self-report 15%+ improvement in quote win rate within 90 days, confirming that professional quotes win more jobs
- **Full workflow adoption:** 60%+ of quotes include e-signature, and 30%+ of signed quotes include deposit collection, proving users leverage the complete quote-to-deposit flow
- **Aha moment:** Contractor receives a signed quote with deposit before leaving the customer's property — the moment they realize "I've been doing this the hard way"

### Business Success

- **Month 1:** 500+ registered users, $35K+ in LTD revenue from AppSumo launch
- **Month 3:** 2,500+ users, $175K+ cumulative LTD revenue, $1K+ MRR from early subscription conversions
- **Month 6:** 5,000+ users, $5K+ MRR, 150+ reviews on G2/Capterra at 4.3+ star average
- **Month 12:** 15,000+ users, $15K+ MRR, dominant position in the "affordable trade quoting" niche
- **Engagement:** DAU/MAU ratio of 35%+, indicating QuoteCraft is part of daily workflow
- **Retention:** 60%+ of users who create a quote in week 1 create another in week 4; 70%+ 30-day retention by month 12

### Technical Success

- **Offline reliability:** Quotes created offline sync without data loss when connectivity returns, critical for basements, rural sites, and new construction
- **PDF generation:** Professional-quality PDFs render consistently across devices and email clients
- **Payment processing:** Stripe deposit collection processes with 99.9%+ success rate for valid payment methods
- **PWA performance:** App loads within 3 seconds on 4G connections; subsequent loads under 1 second from cache

### Measurable Outcomes

| Metric | Target | Measurement Method |
|---|---|---|
| Time to first quote | < 10 minutes | In-app onboarding funnel tracking |
| Average quote creation time | < 2 minutes | In-app timing from start to send |
| Quotes sent per user per week | 5+ by week 2 | Usage analytics |
| Quote win rate improvement | 15%+ (self-reported) | User survey at 30/60/90 days |
| E-signature adoption | 60%+ of quotes | Feature usage analytics |
| Deposit collection rate | 30%+ of signed quotes | Stripe integration tracking |
| DAU/MAU ratio | 35%+ | Usage analytics |
| NPS score | 40+ (month 1), 50+ (month 12) | In-app NPS survey |
| AppSumo review rating | 4.5+ stars | AppSumo platform |
| G2/Capterra rating | 4.3+ stars | Review platform tracking |

## Product Scope

### MVP - Minimum Viable Product

The MVP delivers the core quote-to-deposit workflow for 4 trades with offline-first PWA architecture:

**Core Capabilities:**
- Trade-specific quote builder with pre-built templates for plumbing, electrical, HVAC, and painting
- Trade-specific line item libraries with descriptions and suggested pricing
- Professional branded PDF generation with one-tap delivery via SMS or email
- Jobsite photo capture and attachment (up to 10 per quote)
- Customer e-signature from quote link (no account required for customer)
- Stripe-powered deposit collection (fixed or percentage amount)
- Offline-first PWA with auto-sync on connectivity restore
- Quote dashboard with status tracking (draft, sent, viewed, signed, paid)
- Contractor profile setup (business name, logo, license #, default tax rate)
- Quote duplication for recurring job types

**MVP Validation Criteria (Month 3 Go/No-Go):**
Pass if 3 of 6 criteria met: (1) 500+ users create 3+ quotes each in first 30 days, (2) 60%+ week-1-to-week-4 retention, (3) average quote time under 3 minutes, (4) $35K+ LTD revenue, (5) 4.5+ star average review, (6) 35%+ of quotes use e-sign or deposit.

### Growth Features (Post-MVP)

- AI-powered pricing suggestions based on local market data and material cost trends
- Additional trades: roofing, landscaping, general contracting, concrete, flooring
- QuickBooks and Xero export/integration
- Team features: shared line item libraries, quote templates, basic approval flows
- Customer follow-up reminders ("Quote #247 hasn't been viewed — send a nudge?")
- Quote analytics: win/loss tracking, average job size trends, seasonal patterns
- Multi-language support starting with Spanish

### Vision (Future)

- Native iOS and Android apps for enhanced offline and camera capabilities
- Voice-to-quote: contractor dictates job details, AI structures the quote
- Photo-to-estimate: snap photos of a job, AI estimates scope and suggests pricing
- Supply house partnerships for real-time material pricing feeds
- Simple CRM: customer history, past quotes, repeat customer pricing
- Job tracking lite: quote → accept → in progress → complete → paid
- Full invoicing and payment processing beyond deposits
- Marketplace: homeowners request quotes from multiple QuoteCraft contractors
- White-label offering for trade associations and franchises

## User Journeys

### Journey 1: Mike the Solo Plumber — First Quote on the Jobsite

**Opening Scene:** Mike is a 38-year-old licensed master plumber running a one-man shop. He's standing in a customer's kitchen assessing a leaky faucet. His current process: scribble notes on a pad, drive home, type up a quote in Word, email it. By the time his quote arrives, the customer has already accepted a bid from a competitor who responded within the hour. He loses 1-2 jobs per week this way.

**Rising Action:** Mike heard about QuoteCraft from a post in r/sweatystartup. He signed up 5 minutes ago, selected "Plumber" as his trade, and was greeted with pre-loaded plumbing line items — water heater install, faucet replacement, drain clearing, pipe repair — with suggested local pricing. He added his logo and license number. Setup complete.

**Climax:** Still in the customer's kitchen, Mike opens QuoteCraft, taps "Faucet Replacement," adjusts the price, snaps a photo of the corroded faucet, and adds a note about the shut-off valve. He taps "Send Quote." The customer's phone buzzes with a professional PDF. She opens the quote link, scrolls through the itemized breakdown with the faucet photo, and taps "Accept & Pay Deposit." Before Mike walks back to his van, his phone pings: $75 deposit received.

**Resolution:** Mike now quotes every job from QuoteCraft. His win rate increases from 40% to 55% because he responds faster and looks more professional. Customers compliment his quotes: "You're the only plumber who sent a real proposal." He posts in r/Plumbing: "Game changer for solo plumbers. $69 one-time and I'm quoting from the truck."

**Requirements Revealed:** Trade-specific templates, quick line item selection, photo attachment, branded PDF generation, SMS/email delivery, customer e-signature, deposit collection, mobile-first design.

### Journey 2: Sarah the HVAC Team Owner — Empowering Techs to Quote Independently

**Opening Scene:** Sarah, 42, owns a 4-person HVAC company. She manages 15-25 active quotes and is the bottleneck: her techs call her for pricing questions, and she creates formal quotes in QuickBooks after hours. Last month, one tech quoted a ductwork job at $1,800 that should have been $3,200 — pricing from memory. She's drowning in evening paperwork and hemorrhaging margin.

**Rising Action:** Sarah sets up QuoteCraft for her team. She customizes the HVAC line item library with her company's specific pricing for ductwork, condenser replacement, maintenance contracts, and refrigerant charges. Each tech installs the PWA on their phone.

**Climax:** Her tech Danny arrives at a commercial ductwork job. He opens QuoteCraft, selects "Ductwork Installation," enters square footage, and the app shows suggested pricing that matches Sarah's pre-set rates. Danny adds photos of the existing ductwork, includes a note about access constraints, and sends the quote from the rooftop. The customer signs before Danny climbs down. Sarah sees the new signed quote in her dashboard that evening — correct pricing, professional appearance, deposit collected.

**Resolution:** Sarah reviews the quote log at end of day instead of creating quotes from scratch. Her techs quote independently with accurate pricing. Evening paperwork drops from 2 hours to 15 minutes. She stops losing margin to pricing-from-memory errors. Her company books 30% more jobs per month because quotes go out instantly.

**Requirements Revealed:** Custom pricing overrides, quote dashboard with team visibility, pre-set line item libraries, photo attachment from jobsite, quote status tracking, multi-user support.

### Journey 3: Carlos the Painting Contractor — From Text Price to Professional Proposal

**Opening Scene:** Carlos, 29, runs a 2-person painting crew doing mostly residential interior/exterior. He currently texts customers a bare price — "$2,400 for interior, 3 bedrooms" — and loses jobs to competitors who send professional proposals. Customers ask "what does that include?" and he spends 20 minutes texting back and forth clarifying scope. No documentation leads to disputes about what was agreed.

**Rising Action:** Carlos opens QuoteCraft, selects "Painter," and sees line items he recognizes: interior painting (by room), exterior painting (by square footage), trim work, ceiling, cabinet refinishing. He walks through a house, snapping photos of each room and selecting the matching line items as he goes.

**Climax:** Standing in the living room, Carlos taps "Generate Quote." A branded PDF appears with room-by-room photos, itemized scope (interior walls — 3 bedrooms, 2 coats, trim included), material notes (Sherwin-Williams Duration), and total with tax. He texts it to the homeowner. The homeowner opens the quote, sees exactly what's included and what's not, and signs immediately. No back-and-forth. No disputes later about whether trim was included.

**Resolution:** Carlos's close rate jumps from 40% to 60%. Scope disputes vanish because every quote documents exactly what's included with photos. He wins a $15K exterior job against two competitors specifically because "your quote was the most professional and detailed." He recommends QuoteCraft in his local Facebook painters group.

**Requirements Revealed:** Room/area-based quoting for painters, photo-per-section attachment, scope documentation in PDF, material specification fields, professional layout that differentiates from competitors.

### Journey 4: Homeowner Receiving a Quote — The Customer Experience

**Opening Scene:** Lisa needs her water heater replaced. She calls three plumbers. Plumber A says "I'll get you a quote by email tomorrow." Plumber B writes "$2,800" on a business card. Mike (Plumber C, using QuoteCraft) says "Let me send you a quote right now."

**Rising Action:** Lisa's phone buzzes. She opens a link to a clean, professional PDF: Mike's company logo, license number, itemized breakdown (50-gallon water heater — $1,450, installation labor — $850, old unit disposal — $150, permit — $150), jobsite photo of the existing water heater, total $2,600 including tax, terms and conditions, and a big green "Accept & Pay Deposit" button.

**Climax:** Lisa compares the three "quotes." Plumber A's arrives the next day — a plain email with a total and no breakdown. Plumber B's business card sits on her counter. Mike's QuoteCraft quote shows exactly what she's paying for, looks like it came from a real company, and she can sign from her couch. She taps accept, signs with her finger, and pays a $500 deposit.

**Resolution:** Lisa tells her neighbor: "Use Mike. He was the only one who sent a real quote." Mike gets a referral. The cycle repeats.

**Requirements Revealed:** Professional customer-facing PDF, no account required for customer, mobile-friendly e-signature, one-tap deposit payment, clear itemized breakdown, trust-building elements (license #, logo, terms).

### Journey 5: Quote Dashboard Management — Tracking and Follow-Up

**Opening Scene:** It's Friday afternoon. Mike has sent 12 quotes this week. He opens QuoteCraft's dashboard to check the status of his pipeline.

**Rising Action:** The dashboard shows: 3 drafts (jobs he hasn't finished pricing), 4 sent (awaiting customer response), 2 viewed (customer opened but hasn't signed), 2 signed with deposit, 1 expired. He notices a $4,200 water heater quote was "viewed" 3 times but never signed — the customer is comparing options.

**Climax:** Mike duplicates a previous "bathroom remodel — plumbing rough-in" quote for a similar job he quoted today, changes the customer name and adjusts one line item. 30 seconds, done. He searches for "Johnson" to find a quote from last month to reference pricing for a repeat customer.

**Resolution:** Mike's quote dashboard replaces the mental tracking and scattered texts he used to rely on. He knows exactly where every open quote stands and can follow up strategically.

**Requirements Revealed:** Quote status tracking (draft/sent/viewed/signed/paid/expired), quote duplication, search and filter by customer name, quote history and archive.

### Journey Requirements Summary

| Journey | Key Capabilities Revealed |
|---|---|
| Mike (Solo Plumber) | Trade templates, photo attach, PDF generation, SMS delivery, e-sign, deposit, mobile-first |
| Sarah (HVAC Team) | Custom pricing, team dashboard, multi-user, pre-set libraries, status tracking |
| Carlos (Painter) | Room-based quoting, photo-per-section, scope documentation, material specs |
| Lisa (Homeowner) | Customer-facing PDF, no-account e-sign, mobile payment, itemized breakdown, trust elements |
| Dashboard Management | Status tracking, quote duplication, search/filter, quote archive |

## Innovation & Novel Patterns

### Detected Innovation Areas

QuoteCraft combines three innovation vectors into a single product for an underserved market:

**1. Trade-Specific AI Pricing Intelligence**
AI-assisted pricing suggestions based on trade, geographic region, and current material costs. Unlike generic estimating tools that leave pricing entirely to the user, QuoteCraft pre-loads trade-specific line items with market-rate pricing and flags potential under/over-quotes. This leverages the broader AI estimating trend (97% accuracy, 80% automation per SignalFire) in a simplified form accessible to non-technical users.

**2. Vertical SaaS for Micro-Businesses**
The trade-specific approach applied to businesses too small for existing vertical SaaS solutions. Vertical SaaS achieves 35-60% higher retention than horizontal platforms (industry data). QuoteCraft brings this advantage to the sub-10-employee segment that existing vertical players price out at $200-500+/month.

**3. LTD-First Business Model as Market Entry Strategy**
Using a lifetime deal as a strategic market entry weapon rather than a desperation revenue grab. The $59-89 LTD creates instant critical mass (2,000-5,000 users), generates review volume for social proof (targeting 500+ reviews at 4.3+ stars), and locks users into the ecosystem before incumbents can react — all funded by AppSumo's existing marketplace traffic.

### Validation Approach

- **AI pricing accuracy:** Launch with curated pricing databases for 4 trades in top 50 US metro areas. Measure user override rate — if users accept suggested prices 60%+ of the time, pricing accuracy is validated
- **Trade-specific retention:** Compare 30/60/90-day retention against industry benchmarks for horizontal tools. Target 35%+ improvement
- **LTD-to-subscription conversion:** Track premium feature adoption among LTD users. Target 5-10% conversion to subscription within 6 months

### Risk Mitigation

- **AI pricing databases are hard to build:** Start with user-contributed pricing + regional averages from public sources. Improve with usage data over time. The MVP can launch with static pricing databases while AI learns from real quote data
- **Trade-specific content takes domain expertise:** Partner with 2-3 contractors per trade as paid advisors for line item libraries. Validate templates with beta users before public launch
- **LTD economics may not sustain development:** Cap LTD sales at 5,000 units. Reserve premium features (team management, AI pricing, integrations) for subscription tier to ensure recurring revenue

## Web Application Specific Requirements

### Project-Type Overview

QuoteCraft is a Progressive Web App (PWA) optimized for mobile-first use on contractor jobsites. The PWA approach enables:
- Home screen installation without app store approval or review cycles
- Offline-first architecture using service workers and IndexedDB
- Cross-platform support (iOS Safari, Android Chrome) from a single codebase
- Rapid iteration without app store update delays

### Technical Architecture Considerations

**SPA Architecture:**
- Single Page Application for fluid mobile experience
- Client-side routing for instant navigation between quotes, templates, and dashboard
- Service worker for offline caching of templates, line items, and draft quotes

**Browser Support:**
- iOS Safari 15+ (primary mobile target)
- Android Chrome 90+ (primary mobile target)
- Desktop Chrome, Firefox, Edge (secondary — dashboard management)
- No IE11 support required

**Responsive Design:**
- Mobile-first design breakpoints (primary: 375-428px phone, secondary: 768px+ tablet/desktop)
- Touch-optimized interactions: large tap targets (minimum 44x44px), swipe gestures for quote management
- One-handed operation design for jobsite use

**Offline-First Strategy:**
- Service worker caches: app shell, trade templates, line item libraries, user profile, and draft quotes
- IndexedDB stores: draft quotes, customer data, and photos queued for sync
- Conflict resolution: last-write-wins for quotes not yet sent; server-authoritative for signed quotes
- Sync indicator: clear visual status showing online/offline state and pending sync count

**SEO Strategy:**
- Server-side rendered landing pages for organic search (target keywords: "contractor estimate app," "HVAC quoting software," "plumber quote app")
- App itself is SPA behind authentication — no SEO needed for authenticated views

**Performance Targets:**
- First Contentful Paint: under 2 seconds on 4G
- Time to Interactive: under 3 seconds on 4G
- Subsequent loads: under 1 second from service worker cache
- PDF generation: under 3 seconds including photo embedding

### Implementation Considerations

**PWA Installation Flow:**
- Prompt home screen installation after second use (not on first visit)
- Show installation benefits: offline access, faster loading, notification support
- Track installation rate as engagement metric

**Photo Handling:**
- Camera API for direct capture; file picker for gallery selection
- Client-side image compression before storage (target: under 500KB per photo)
- Thumbnail generation for quote list views
- Full-resolution embedding in PDF output

**Payment Integration:**
- Stripe Connect for deposit collection (contractor is the connected account)
- Stripe-hosted checkout for PCI compliance — no card data touches QuoteCraft servers
- Configurable deposit amounts (fixed dollar or percentage of quote total)
- Payment status webhooks update quote status in real-time

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the fastest path from "customer asks for a quote" to "signed quote with deposit collected." Every feature in MVP must directly serve this workflow. Manual processes are acceptable for admin tasks (e.g., initial trade template curation is manual, not AI-generated).

**Resource Requirements:** Solo developer or 2-person team (full-stack + design). PWA with modern framework, Stripe integration, and PDF generation. Estimated 4-6 weeks to functional MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo contractor creates and sends a professional quote from phone (Journey 1, 3)
- Customer receives, reviews, signs, and pays deposit from quote link (Journey 4)
- Contractor tracks quote status and manages pipeline (Journey 5)

**Must-Have Capabilities:**
1. Trade-specific templates for 4 trades (plumbing, electrical, HVAC, painting) with pre-loaded line items
2. Quote builder: add/remove/edit line items, quantities, unit prices, tax calculation
3. Customer info fields: name, address, phone, email
4. Job notes and scope description text area
5. Custom line item creation for non-standard work
6. Jobsite photo capture and attachment (up to 10 per quote)
7. Professional branded PDF generation with contractor logo, license #, contact info
8. One-tap quote delivery via SMS or email
9. Customer e-signature (no account required, legal compliance)
10. Stripe deposit collection (fixed or percentage amount)
11. Quote dashboard: list view with status (draft, sent, viewed, signed, paid)
12. Search and filter quotes by customer name, trade, date
13. Quote duplication for recurring job types
14. Contractor profile setup: business name, logo, license number, contact info, default tax rate
15. Offline-first PWA: create and save quotes without connectivity, auto-sync on restore
16. Home screen installable

### Post-MVP Features

**Phase 2 (Months 4-8 — Growth):**
- AI-powered pricing suggestions based on trade, region, and material cost trends
- Additional trades: roofing, landscaping, general contracting
- QuickBooks/Xero CSV export
- Team features: shared templates, multi-user quote visibility
- Customer follow-up reminders (automated nudges for unviewed quotes)
- Quote analytics: sent/signed/paid conversion funnel, average job size by trade

**Phase 3 (Months 9-18 — Expansion):**
- Native iOS/Android apps for enhanced camera and notification capabilities
- Voice-to-quote: dictate job details, AI structures the quote
- Photo-to-estimate: AI-powered scope detection from jobsite photos
- Supply house API integrations for real-time material pricing
- Simple CRM: customer history, past quotes, repeat customer pricing
- Job tracking lite: quote → accepted → in progress → complete → invoiced
- Full invoicing beyond deposits
- API for third-party integrations

### Risk Mitigation Strategy

**Technical Risks:**
- *Offline PWA complexity:* Mitigate by architecting offline-first from day 1 using proven service worker patterns and IndexedDB. Test extensively on spotty connections.
- *PDF quality across devices:* Mitigate by using server-side PDF generation (not client-side) to ensure consistent output. Test across email clients and mobile PDF readers.
- *Photo storage costs:* Mitigate by client-side compression before upload. Implement storage quotas per user tier.

**Market Risks:**
- *Jobber/Housecall Pro add trade-specific templates:* Mitigate by moving fast to market, building community presence in trade subreddits, and locking in LTD users. Incumbents are unlikely to match $69 pricing.
- *AI-native competitor with more funding launches first:* Mitigate by being first in trade-specific AI quoting + authentic community presence. First-mover advantage in niche communities creates brand moat.
- *Lower-than-projected subscription conversion:* Mitigate by keeping LTD features strong for retention while reserving genuinely premium features (team management, AI, integrations) for subscription tier.

**Resource Risks:**
- *Smaller team than planned:* The MVP is scoped for solo developer capability. Core is quote builder + PDF + Stripe — achievable in 4-6 weeks.
- *LTD revenue insufficient for sustained development:* Cap LTD volume at 5,000 units ($350K max). Use this runway to validate and launch subscription tier by month 4-6.

## Functional Requirements

### Quote Creation & Management

- FR1: Contractor can select a trade-specific template (plumbing, electrical, HVAC, painting) to start a new quote
- FR2: Contractor can add, remove, and edit line items with description, quantity, unit, and unit price
- FR3: Contractor can create custom line items for work not covered by templates
- FR4: Contractor can enter customer information (name, address, phone, email) on a quote
- FR5: Contractor can add free-text job notes and scope description to a quote
- FR6: Contractor can set tax rate per quote (defaulting to profile-configured rate)
- FR7: Contractor can save a quote as draft and return to edit it later
- FR8: Contractor can duplicate an existing quote to create a new quote with pre-filled line items
- FR9: Contractor can delete draft quotes
- FR10: System calculates subtotal, tax, and total automatically as line items are added or modified
- FR11: Contractor can set deposit amount as a fixed dollar value or percentage of quote total

### Trade-Specific Templates & Line Items

- FR12: System provides pre-built line item libraries for each supported trade with item descriptions and suggested pricing
- FR13: Contractor can browse and search the line item library for their selected trade
- FR14: Contractor can add line items from the library to a quote with one tap
- FR15: Contractor can override suggested pricing on any line item
- FR16: System supports trade-specific units of measurement (per unit, per linear foot, per square foot, per hour, flat rate)

### Photo Attachment

- FR17: Contractor can capture photos directly from the device camera within the app
- FR18: Contractor can select photos from the device gallery
- FR19: Contractor can attach up to 10 photos per quote
- FR20: Contractor can remove attached photos from a quote
- FR21: Attached photos appear in the generated PDF quote

### PDF Generation & Delivery

- FR22: Contractor can generate a professional branded PDF from any quote
- FR23: PDF includes contractor business name, logo, license number, and contact information
- FR24: PDF includes itemized line items with descriptions, quantities, unit prices, and totals
- FR25: PDF includes subtotal, tax, total, and deposit amount (if configured)
- FR26: PDF includes attached jobsite photos
- FR27: PDF includes terms and conditions section
- FR28: PDF includes job notes and scope description
- FR29: Contractor can send the quote PDF via SMS to the customer's phone number
- FR30: Contractor can send the quote PDF via email to the customer's email address

### E-Signature

- FR31: Customer can view the quote from a link without creating an account
- FR32: Customer can accept and sign the quote electronically from their phone or computer
- FR33: System records signature timestamp, IP address, and signer identity for legal compliance
- FR34: Signed quote is stored and accessible in the contractor's dashboard
- FR35: Contractor receives a notification when a customer signs a quote

### Payment & Deposits

- FR36: Customer can pay the deposit amount directly from the quote link after signing
- FR37: System processes deposit payments through Stripe
- FR38: Contractor receives a notification when a deposit payment is completed
- FR39: Quote status updates automatically when deposit is received
- FR40: Contractor can view deposit payment details (amount, date, confirmation) on the quote

### Quote Dashboard & Tracking

- FR41: Contractor can view a list of all quotes with current status (draft, sent, viewed, signed, paid, expired)
- FR42: Contractor can search quotes by customer name
- FR43: Contractor can filter quotes by trade type and date range
- FR44: Contractor can view quote details including all line items, photos, and status history
- FR45: System tracks when a customer views a quote and updates status to "viewed"

### Contractor Profile

- FR46: Contractor can set up a business profile with company name, logo, license number, phone, and email
- FR47: Contractor can select their primary trade (determines default template library)
- FR48: Contractor can configure a default tax rate for new quotes
- FR49: Contractor can configure default payment terms text
- FR50: Contractor can customize brand colors for the quote header

### Offline & Sync

- FR51: Contractor can create and save quotes when the device has no internet connectivity
- FR52: Contractor can access previously loaded trade templates and line items offline
- FR53: System automatically syncs offline-created quotes when connectivity is restored
- FR54: System displays a clear indicator of online/offline status and pending sync count
- FR55: System preserves all quote data (including photos) during offline-to-online sync without data loss

### Authentication & Account

- FR56: Contractor can create an account with email and password
- FR57: Contractor can log in from any device and access their quotes and profile
- FR58: Contractor can reset their password via email link

## Non-Functional Requirements

### Performance

- NFR1: Quote creation screen loads within 1 second after initial app load as measured by Time to Interactive
- NFR2: PDF generation completes within 3 seconds for a quote with 10 line items and 5 photos
- NFR3: First Contentful Paint under 2 seconds on 4G mobile connection as measured by Lighthouse
- NFR4: Subsequent app loads under 1 second from service worker cache
- NFR5: Quote list dashboard renders up to 500 quotes with smooth scrolling (60fps)
- NFR6: Photo capture and compression completes within 2 seconds per photo

### Security

- NFR7: All data transmitted over HTTPS/TLS 1.2+
- NFR8: Contractor passwords hashed with bcrypt (or equivalent) with minimum 10 rounds
- NFR9: No credit card data stored on QuoteCraft servers — all payment processing handled via Stripe-hosted checkout
- NFR10: Customer quote view links use unguessable tokens (minimum 128-bit entropy)
- NFR11: Session tokens expire after 30 days of inactivity
- NFR12: Contractor data isolated — no contractor can access another contractor's quotes, customers, or profile

### Scalability

- NFR13: System supports 10,000 concurrent users with response times meeting NFR1-NFR2 targets
- NFR14: Photo storage architecture supports 50 photos per user average without performance degradation
- NFR15: Database scales to 1 million quotes without query performance exceeding 200ms for dashboard operations

### Reliability

- NFR16: 99.5% uptime during business hours (6 AM - 9 PM local time, Mon-Sat) as measured by external monitoring
- NFR17: Offline data sync achieves 99.9%+ success rate — no quote data lost during sync
- NFR18: Stripe payment webhooks retry automatically on failure with up to 3 attempts over 24 hours

### Accessibility

- NFR19: Customer-facing quote view and e-signature pages meet WCAG 2.1 AA standards (customers include homeowners of all abilities)
- NFR20: All interactive elements have minimum 44x44px touch targets on mobile
- NFR21: Color contrast ratios meet WCAG AA minimums (4.5:1 for text, 3:1 for UI components)

---

**PRD Completion Date:** 2026-03-23
**Input Sources:** Product brief (2026-03-22), market research report (2026-03-21), shortlisted idea evaluation (Score: 88/105)
**Confidence Level:** High — validated by $2.73B market data, competitive pricing gap analysis, and community signal history across 4 research runs
**Recommended Next Step:** Create technical architecture to define technology stack, data model, and API design

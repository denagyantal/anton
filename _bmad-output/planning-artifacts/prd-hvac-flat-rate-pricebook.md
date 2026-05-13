---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/hvac-flat-rate-pricebook.md
  - _bmad-output/planning-artifacts/market-research-hvac-flat-rate-pricebook.md
  - _bmad-output/planning-artifacts/brief-hvac-flat-rate-pricebook.md
workflowType: prd
lastStep: step-12-complete
project_name: hvac-flat-rate-pricebook
user_name: Root
date: 2026-05-13
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: low
  projectContext: greenfield
---

# Product Requirements Document: PriceMenu — HVAC/Plumbing Flat-Rate Price Book Builder

**Author:** Root
**Date:** 2026-05-13

---

## Executive Summary

Small residential service contractors — HVAC, plumbing, and electrical — are systematically locked out of flat-rate pricing software by per-technician pricing models that price the majority of their market out of existence. The New Flat Rate charges $99/technician/month; a 3-tech shop pays $297–$990/month before any other software. Over 72% of plumbing businesses operate with 1–3 employees and cannot justify this cost. The result: most small contractors quote time-and-materials, leaving an estimated $92,000/year in additional truck revenue per contractor unrealized.

**PriceMenu** is a standalone, cloud-based flat-rate price book builder priced at $29/month per company — not per technician. Contractors import services from a curated 500+ task starter library, set flat prices with optional Good/Better/Best tiers, and present a clean customer-facing menu on a tablet at the door. One approved upsell pays for the tool.

The market is large (320,000–500,000 contractors), underserved (under 1% software penetration for dedicated flat-rate pricebooks), and motivated by documented ROI: +$246 average ticket increase for shops that adopt flat-rate. The MVP is a focused 1–2 week build — CRUD + pricing logic + tablet presentation mode + digital approval + PDF/export. No live API integrations in MVP. The LTD window on AppSumo is uncontested.

**Pricing:** $29/month flat per company | $249/year | $149 LTD early adopter | $29/year optional database update subscription.

**Path to $10K MRR:** ~345 customers at $29/month, achievable within 3–4 months of launch via organic trade community channels.

### What Makes This Special

**The pricing model is the product.** PriceMenu's core differentiator is not a feature — it's the pricing structure. $29/month for the entire company versus $297–$990/month for a 3–10 tech shop on The New Flat Rate is not a marginal price advantage; it's a 10x cost reduction. This single fact will dominate every forum recommendation thread, every AppSumo review, and every conversation between contractors.

The second differentiator is **setup time**: a curated 500+ task starter library with regionally adjustable default prices means contractors can have a working pricebook by Saturday morning, not after 40 hours of database-building. TNFR's 40-hour setup curve is the #1 documented adoption barrier in the category; PriceMenu eliminates it structurally.

The third differentiator is **independence**: PriceMenu works without committing to any FSM platform. It stands alone, integrates optionally, and does not require Housecall Pro or ServiceTitan to deliver its core value.

## Project Classification

- **Project Type:** SaaS B2B — subscription web application serving business customers (contractors)
- **Domain:** Field service management / contractor software (low regulatory complexity)
- **Project Context:** Greenfield — new product with no existing codebase
- **Complexity:** Low domain complexity; standard SaaS concerns apply (auth, multi-device, offline)
- **Target Platform:** Progressive Web App (PWA) — tablet/mobile primary for presentation mode; desktop for administration

---

## Success Criteria

### User Success

The primary user success signal is **average ticket value increase within 90 days of activation**. Contractors buy flat-rate pricebooks for one reason: to earn more per service call. This is what generates word-of-mouth.

**Primary success metric:**
- ≥15% increase in average ticket value within 90 days, self-reported or derived from connected QuickBooks data

**Secondary user success metrics:**
- **Pricebook completion rate:** ≥70% of activated users build a pricebook with 20+ services within 14 days (completion = they're using it, not just signed up)
- **Time-to-first-presentation:** Median ≤72 hours from account creation to first customer-facing presentation
- **Presentation mode weekly usage:** ≥60% of active users use tablet presentation mode at least once per week
- **Setup completion:** ≥80% of users complete the onboarding wizard (trade + region + initial service import) in their first session

### Business Success

| Metric | 3-Month Target | 12-Month Target |
|--------|---------------|-----------------|
| MRR | $10K (~345 active paying subscribers) | $29K (~1,000 subscribers) |
| Monthly churn | <5% | <4% |
| G2/Capterra reviews | 25+ verified reviews | 150+ reviews |
| G2/Capterra average rating | ≥4.5/5 | ≥4.7/5 |
| Net Promoter Score | ≥50 | ≥60 |
| LTD sales (if AppSumo launch) | 500–2,000 within 60 days | N/A |
| Organic community mentions | Active in 3 trade communities | Category leader mention share |

### Technical Success

- Zero critical data-loss bugs in first 30 days of production (pricebook loss, approval loss)
- Offline mode covers 100% of the customer presentation flow (works without connectivity)
- PWA performance: presentation mode loads in <3 seconds on mid-range Android tablet over 3G
- 99.5% uptime SLA for account and pricebook management functions
- All pricebook data and approval records retained with no data loss under normal operation

### Measurable Outcomes

**Leading indicators that predict retention:**
- Presentation mode activated in first 7 days → strong predictor of 60-day retention
- 3+ PDF exports or QuickBooks exports in Month 1 → workflow integration = lower churn
- Forum/referral acquisition → community-driven growth compounds CAC reduction

**MVP validation gates** (determine whether to proceed to integrations):
1. ≥70% of users who complete onboarding are still active at 60 days
2. First $10K MRR without paid advertising
3. ≥5 users publicly report average ticket increases in forums or reviews within 90 days
4. Zero critical bugs (pricebook loss, approval loss) in first 30 days of production
5. Median onboarding time ≤4 hours (account creation to first presentation)

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete value loop: **Build pricebook → Present to customer → Get approval → Export record.**

**Core value loop is non-negotiable.** Every MVP feature below is load-bearing for this loop.

**MVP Capabilities:**
- Service/task library management (manual entry + CSV import + 500+ item starter library)
- Good/Better/Best pricing tier configuration per service category
- Customer-facing tablet presentation mode (clean, distraction-free)
- Digital customer approval with signature capture
- PDF export of approved jobs and pricebook
- QuickBooks-compatible CSV export (manual import; not live sync)
- Email approved job summary to customer and/or contractor
- Account and team management (owner + technician roles, flat per-company pricing)
- Onboarding wizard (trade + region + import path)
- PWA with offline caching for presentation mode

**MVP Tech Approach:** Progressive Web App (PWA) covers tablet use case without native app complexity. Offline-first for the customer presentation flow. Cloud-synced pricebook database.

### Growth Features (Post-MVP, Months 2–6)

- Live Jobber two-way sync (approved jobs auto-create work orders)
- Live Housecall Pro integration (replaces Profit Rhino for HCP users)
- Native QuickBooks sync (approved jobs create invoices automatically)
- ServiceTitan data export compatibility
- Expanded task library: 3,000+ items across all trades
- Quarterly database update subscription ($29/year add-on)
- Team performance analytics (ticket close rates by technician)
- Native iOS app (beyond PWA) for heavy tablet users

### Vision (Year 2+)

- Quoting module for formal proposals on larger commercial jobs
- Customer history per address (increases upsell context for repeat visits)
- AI price recommendation engine (trained on regional market data)
- Technician coaching metrics and upgrade rate tracking
- Expansion to adjacent verticals: pest control, landscaping, garage door
- Community-sourced task library (10,000+ items contributed by contractors)
- Platform integrations ecosystem (Jobber, HCP, ServiceTitan API partnerships)

---

## User Journeys

### Journey 1: Marcus — Solo Plumber, First Flat-Rate Pricebook (Primary Success Path)

Marcus runs a 2-person plumbing business in suburban Texas. He's been quoting time-and-materials for 12 years because every flat-rate tool he found was priced for enterprise shops. He currently pays $69/month for Jobber and $30/month for QuickBooks — he's already at his software budget ceiling.

**Opening Scene — The Thread:** Marcus sees a Reddit thread on r/Plumbing: "Do you guys use flat rate software? Is it worth it?" The top reply mentions PriceMenu: "it's $29 flat, not $99 per tech — I set it up Saturday morning." Marcus clicks.

**Discovery and Evaluation:** He lands on the PriceMenu homepage. Hero headline: "$29/month for your whole company — not $99 per tech." He watches a 90-second demo video of the tablet presentation mode. He checks the pricing page, finds the $149 LTD option. He reads 4 G2 reviews from fellow plumbers. Total time: 8 minutes. He buys the $149 LTD via Stripe — no sales call, no demo request.

**Onboarding:** The wizard prompts Marcus to select his trade (plumbing), his region (Southwest), and his service focus (residential repair). PriceMenu pre-populates 30 common plumbing services with regionally-calibrated prices. Marcus adjusts 8 prices, adds 4 custom services. Done in 47 minutes.

**First Value Moment — The Aha:** Marcus presents his first Good/Better/Best menu on a drain cleaning call that afternoon. The customer selects "Professional" (camera inspection included) — an extra $120 Marcus wouldn't have gotten on a T&M quote. The $149 LTD cost is recovered in 1.25 calls.

**Resolution:** Marcus builds out his full 80-service pricebook over two weekends. His average ticket increases ~$95 over the following month. He posts about it in r/Plumbing. PriceMenu gains 3 more customers from that post.

**Capabilities Revealed:** Starter library, onboarding wizard, trade/region selector, Good/Better/Best tiers, tablet presentation mode, digital approval, LTD checkout flow.

---

### Journey 2: Diane — HVAC Shop Owner, TNFR Migration (Active Switcher)

Diane runs a 6-tech HVAC company in the Pacific Northwest, billing $2.1M/year. She's on TNFR at $594/month (6 techs × $99). Her contract is up. She's not buying the $1,800/month coaching upgrade.

**Opening Scene — The Group Post:** Diane posts in the HVAC Business Owners Facebook group: "TNFR is renewing — anyone found a cheaper alternative that still has customer presentation mode?" PriceMenu appears in 3 replies within 4 hours.

**Evaluation:** Diane skips the homepage and goes straight to the G2 profile: 4.8/5, 37 reviews, all from HVAC shops. She emails one question: "Is ServiceTitan integration on the roadmap?" She gets an answer within 2 hours: "On the roadmap for Q3; QuickBooks export available today." She signs up for monthly to trial.

**Migration:** Her office manager exports their TNFR pricebook as CSV. PriceMenu imports it in 12 minutes using a field-mapping wizard. The office manager spends 2 hours cleaning up descriptions and adding seasonal pricing. All 6 techs are using PriceMenu on their tablets within 2 weeks — zero training required.

**First Value Moment:** Diane cancels TNFR. Saves $565/month. She messages the Facebook group. Three other HVAC owners ask for the link.

**Resolution:** Diane upgrades to annual plan after 3 months. She refers 2 other HVAC shop owners from her local ACCA chapter. PriceMenu gains 3 customers from one retained customer.

**Capabilities Revealed:** CSV import with field-mapping wizard, multi-device access, technician role (presentation-only), QuickBooks export, owner management view, annual plan billing.

---

### Journey 3: Tyler — Electrician, HCP Power User, AppSumo Buyer (Tech-Forward Adopter)

Tyler is 31, runs a 2-tech electrical contracting company he started 3 years ago. He's on Housecall Pro, uses Stripe, and monitors AppSumo. HCP's native pricebook is "just a list" — it doesn't do Good/Better/Best presentation. The Profit Rhino/HCP bundle is $199/month; Tyler won't pay more for the pricebook add-on than he pays for HCP itself.

**Opening Scene — AppSumo Deal:** Tyler sees PriceMenu on AppSumo: "$149 lifetime — Good/Better/Best flat-rate pricebook for HVAC/plumbing/electrical." He recognizes the problem immediately. Buys without reading all the reviews.

**Setup:** Tyler selects electrical, sets his region, imports his top 20 services from a pre-built library in 15 minutes. Customizes descriptions for his market. Done in under an hour.

**First Value Moment:** Tyler enables the HCP export workflow (manual CSV flow in MVP). Presents his first tiered electrical estimate on a tablet. The customer selects the middle option — $180 in additional approved work before Tyler touches a wire. He screenshots the digital approval and posts it in r/electricians.

**Resolution:** Tyler becomes an early champion. His post in r/electricians drives 7 more signups that week.

**Capabilities Revealed:** Trade-specific starter library (electrical), AppSumo checkout flow, fast setup path, digital approval with signature, QuickBooks/HCP-compatible CSV export, presentation mode on tablet.

---

### Journey 4: Office Manager — Pricebook Administration (Operational User)

In Diane's 6-tech shop, the office manager (not a decision-maker or field user) owns the pricebook as an administrative asset.

**Daily Reality:** The office manager updates prices quarterly, adds new services from manufacturer tech bulletins, pulls export reports for the accountant, and troubleshoots when a tech can't find a service in the field.

**Key Tasks:** Bulk price editing across a category, CSV import of new manufacturer task lists, adding winter/summer seasonal pricing variants, exporting pricebook snapshot for accounting records, managing which services are visible to technicians.

**Success:** The office manager can perform all administrative tasks without owner involvement. Changes sync to all 6 technician devices within minutes.

**Capabilities Revealed:** Bulk edit, category management, service visibility controls, admin role with full CRUD, multi-device sync latency requirements.

---

### Journey 5: Technician in the Field — Doorstep Presentation (Non-Admin User)

A technician on Diane's team arrives at a residential HVAC call. He has the PriceMenu app open on his company-issued Android tablet.

**Doorstep Flow:** He looks up "AC not cooling — refrigerant" in the search. Finds the right service category. Taps "Present to Customer." The tablet transitions to the clean customer-facing view — Good/Better/Best options with descriptions, no internal cost data visible.

**Customer Interaction:** The homeowner reads the three options. Asks one question about what's included in "Complete System Tune." The technician taps "what's included" — an explanation expands inline. The homeowner selects the middle option. Signs with her finger on the tablet. A PDF confirmation is emailed to her automatically.

**Success:** Zero fumbling, no awkward price negotiation, customer-confirmed scope before work begins. The technician's average ticket is $140 higher than before PriceMenu.

**Capabilities Revealed:** Fast service lookup/search, technician-role access (presentation only, no price editing), "what's included" expandable descriptions, offline mode (no connectivity required for presentation), auto-email approval confirmation, clean presentation UI that doesn't expose cost data.

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|------------|
| Starter library + onboarding wizard | Marcus journey |
| CSV import + field mapping | Diane migration journey |
| Tablet presentation mode + signature capture | Tyler, technician journeys |
| Multi-device sync + technician role | Diane, field technician journeys |
| PDF/email export | All journeys |
| Admin CRUD + bulk edit | Office manager journey |
| AppSumo/LTD checkout | Tyler journey |
| Offline-capable presentation | Technician journey |
| Service search/lookup | Technician journey |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- Single-tenant data isolation: each company account's pricebook data is fully isolated
- Flat per-company pricing: no per-seat logic required (MVP)
- Up to 10 device sessions per company account (soft limit for MVP; not enforced technically)
- Company-level branding: logo, company name shown in customer presentation mode

### Role and Permission Model

| Role | Access Level |
|------|-------------|
| Owner/Admin | Full CRUD: services, prices, categories, team management, billing |
| Technician | Read-only access to pricebook; can run presentation mode and capture approvals |

- Owner invites technicians via email link
- Technician access is revocable by owner
- Technicians cannot view cost/margin data (only customer-facing prices)
- Owner can see all approvals captured by all technicians

### Billing and Subscription

- Monthly and annual subscription via Stripe
- LTD (lifetime deal) purchase via Stripe or AppSumo partner integration
- Optional $29/year database update subscription (add-on; not bundled with LTD)
- Self-serve upgrade, downgrade, and cancellation
- Prorated billing on plan changes

### Integration Architecture (MVP Scope)

- No live API integrations in MVP — export-only approach
- QuickBooks-compatible CSV export format (importable manually by customer)
- PDF generation for approved jobs and full pricebook (client-side or server-side)
- Email delivery (approval confirmations, pricebook exports) via transactional email provider

### Onboarding

- Wizard-driven setup: trade selector → region selector → import path
- Import paths: pre-built library / CSV import / manual entry
- Onboarding completion tracked per account (used to measure success criteria)
- Setup promise: working pricebook in under 4 hours

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove the core value loop works end-to-end for the primary persona (solo operator, 1–3 techs). Every decision optimizes for the moment Marcus presents his first Good/Better/Best menu and a customer upgrades.

**MVP is defined by the loop:** Build pricebook → Present to customer → Get approval → Export record. Any feature that doesn't contribute to this loop is deferred.

**Resource Requirements:** 1–2 developers, 1–2 weeks build time. Stack: web framework of choice with PWA support, PostgreSQL for pricebook data, PDF generation library, Stripe for billing, transactional email service. No native mobile app in MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (solo operator): complete flow from signup to first approved presentation
- Diane (shop owner): CSV import migration and technician access
- Tyler (AppSumo buyer): fast setup from starter library

**Must-Have Capabilities:**

| Capability | Rationale |
|-----------|-----------|
| Trade/region selector + 500-item starter library | Eliminates 40-hour setup barrier; is the "setup in 4 hours" promise |
| Manual service entry (name, description, flat price) | Required for customization beyond starter library |
| CSV import with field-mapping | Enables TNFR/Profit Rhino migration (Diane journey) |
| Good/Better/Best tier configuration per category | Core pricing structure; required for ticket lift |
| Category/tag organization | Required for technician lookup in the field |
| Customer presentation mode (tablet/mobile PWA) | The revenue-generating feature; must work offline |
| Clean presentation UI (company logo, professional layout) | Contractor trust requires professional appearance |
| "What's included" expandable descriptions | Reduces in-call objections; revealed by technician journey |
| Service search/lookup in presentation mode | Required for fast doorstep workflow |
| Digital signature capture | Replaces paper approval; required for digital audit trail |
| Approved job PDF generation | Record-keeping; required by accountants |
| QuickBooks-compatible CSV export | Accounting integration without live API complexity |
| Auto-email approval confirmation to customer | Immediate post-approval value; customer expects confirmation |
| Owner + technician roles | Multi-person shop requirement; no per-seat fees |
| Technician email invite | Enables Diane's 6-tech shop workflow |
| Offline-capable presentation mode | Field connectivity is unreliable; this is non-negotiable |
| Stripe billing (monthly, annual, LTD) | Revenue prerequisite |
| Onboarding wizard | Setup promise; measured success criteria |

### Post-MVP Features (Phase 2 — Months 2–6)

**Integration Layer (partner approval required):**
- Live Jobber two-way sync (approved jobs → work orders)
- Live Housecall Pro integration (replaces Profit Rhino)
- Native QuickBooks sync (approved jobs → invoices)
- ServiceTitan data export compatibility

**Library Expansion:**
- 3,000+ task library (HVAC, plumbing, electrical, appliance repair)
- Quarterly database update subscription ($29/year)
- Seasonal pricing variants

### Phase 3 (Expansion — Year 2)

- Quoting module for commercial jobs
- Customer history per address
- AI price recommendation engine
- Technician coaching metrics
- Native iOS app
- Adjacent vertical expansion (pest control, landscaping, garage door)
- Community-sourced task library

### Risk Mitigation Strategy

| Risk | Mitigation |
|------|-----------|
| Housecall Pro launches free Good/Better/Best menu builder | Launch quickly; build community brand before HCP can react; LTD buyers become advocates |
| TNFR launches $29/month self-serve tier | Community moat + LTD base; TNFR brand = "enterprise"; deep library differentiates |
| Low MRR ceiling as standalone tool | Integration play (Phase 2) and database update subscription expand revenue |
| Contractor inertia to software change | "Setup in 4 hours" + free trial removes friction; first-call ROI story closes |
| LTD buyers don't upgrade to recurring | $29/year database subscription; integration add-ons; annual conversion at Month 18 |
| Regional price calibration inadequate | Full manual override; community-contributed corrections to library |

---

## Functional Requirements

### Pricebook Management

- FR1: Owner can create a new service with name, description, and flat price
- FR2: Owner can organize services into categories and tags
- FR3: Owner can configure Good/Better/Best pricing tiers for a service category
- FR4: Owner can add "what's included" details to each pricing tier
- FR5: Owner can import services in bulk via CSV upload with field-mapping interface
- FR6: Owner can export the full pricebook as a CSV or PDF
- FR7: Owner can select a trade (HVAC/plumbing/electrical) and region to load a pre-built starter library
- FR8: Owner can edit, archive, or delete any service in their pricebook
- FR9: Owner can perform bulk price edits across a category (e.g., apply a percentage increase)
- FR10: Owner can control which services are visible to technicians in the field

### Customer Presentation Mode

- FR11: Technician can launch a full-screen customer-facing presentation view on any device
- FR12: Customer presentation displays service options with Good/Better/Best tiers, descriptions, and prices
- FR13: Customer presentation hides all internal cost, margin, and admin data
- FR14: Customer can expand "what's included" details for each pricing tier inline
- FR15: Technician can search and filter services within the customer presentation view
- FR16: Customer presentation displays company logo and company name for professional branding
- FR17: Customer presentation mode works fully offline using a cached local copy of the pricebook
- FR18: Customer can select their preferred service option from the presentation

### Digital Approval

- FR19: Customer can review and confirm their selected service option before work begins
- FR20: Customer can capture a digital signature on the approval screen (finger or stylus)
- FR21: System generates a timestamped approval record with selected option, price, and signature
- FR22: System automatically emails the approval confirmation to the customer's email address
- FR23: System automatically emails the approval summary to the owner/technician's email address
- FR24: Owner and technician can view all captured approvals from their account dashboard

### Export and Records

- FR25: Owner can generate a PDF of any individual approved job record
- FR26: Owner can generate a PDF export of the full pricebook for offline reference
- FR27: Owner can export approved job records in QuickBooks-compatible CSV format
- FR28: System retains all approval records with full audit trail (timestamp, selected option, price, signature)

### Account and Team Management

- FR29: Owner can create a company account with trade, region, and company name
- FR30: Owner can invite technicians via email link to access the company pricebook
- FR31: Owner can revoke technician access at any time
- FR32: Technicians can access pricebook and run customer presentations but cannot edit prices or services
- FR33: Owner can see all approvals captured by all technicians on their team
- FR34: Owner can manage company branding (logo, company name displayed in presentation mode)
- FR35: System supports multiple simultaneous device sessions under one company account

### Onboarding

- FR36: New users are guided through a wizard to select trade, region, and preferred import path
- FR37: Wizard pre-populates a starter pricebook from the curated library based on trade and region selections
- FR38: System tracks onboarding completion status (used for success metric measurement)

### Billing and Subscriptions

- FR39: Owner can subscribe to monthly or annual plan via Stripe checkout
- FR40: Owner can purchase a lifetime deal (LTD) via Stripe or AppSumo integration
- FR41: Owner can add the optional database update subscription ($29/year) to any plan
- FR42: Owner can upgrade, downgrade, or cancel their subscription through self-serve account management
- FR43: System sends subscription confirmation and receipt via email

---

## Non-Functional Requirements

### Performance

- Customer presentation mode must load within 3 seconds on a mid-range Android tablet over a 3G connection on first load; subsequent loads use cached data and must be instantaneous
- Service search results within the presentation view must return in under 500ms on device
- Pricebook sync (after owner makes changes) must propagate to all technician devices within 60 seconds under normal network conditions
- PDF generation must complete within 10 seconds for pricebooks of up to 500 services

### Security

- All data transmitted between client and server must use TLS 1.2 or higher
- Pricebook data, including all cost and margin fields, must be stored with access controls enforced at the server layer — technician API requests must not return cost data even if client-side filtering is bypassed
- Digital signature images and approval records must be stored durably and immutably (no post-capture modification)
- Customer email addresses collected during the approval flow must be stored with appropriate data retention and deletion capabilities (GDPR-aware, even if not formally GDPR-certified at MVP)
- Stripe handles all payment processing; no raw card data touches PriceMenu servers

### Reliability

- 99.5% uptime for the web application and API during business hours (6am–10pm local time for primary markets)
- Offline mode for the customer presentation flow must work without any server connectivity — all pricebook data for active presentation sessions must be available from the device cache
- Approval records captured offline must sync to the server upon reconnection without data loss
- Daily automated backups of all pricebook and approval data

### Scalability

- System must support 1,000 concurrent company accounts without degradation at MVP scale
- Architecture must allow horizontal scaling without code changes when user base grows to 10,000+ accounts (post-AppSumo launch scenario)
- Task library lookup and filtering must remain performant as the library grows from 500 to 3,000+ items

### Integration

- CSV import must handle files up to 5,000 rows without timeout or data loss
- QuickBooks-compatible CSV export format must conform to QuickBooks Desktop import specifications
- PDF export format must be printable at standard paper sizes (Letter, A4) without content clipping
- Transactional emails (approvals, receipts, invites) must deliver within 60 seconds of trigger under normal conditions

---

## Appendix: Go-to-Market Context

This section captures go-to-market decisions that inform product requirements.

### Channel Priority

1. Reddit organic (r/HVAC 183K, r/Plumbing 231K, r/electricians, r/sweatystartup) — first 50 customers
2. AppSumo LTD launch — after Reddit validation (≥50 paying customers, ≥5 ticket-lift testimonials)
3. HVAC-Talk forum (260K members)
4. HVAC Business Owners Facebook Group (54K business-focused members)
5. Google organic SEO ("flat rate pricing software hvac", "TNFR alternative", "profit rhino alternative")
6. YouTube affiliate with HVAC business coaches ($30/referral)

### Pricing Summary

| Tier | Price | Notes |
|------|-------|-------|
| Monthly | $29/month | Flat per company; no per-tech fees |
| Annual | $249/year | ~28% discount vs. monthly |
| Lifetime Deal | $149 one-time | AppSumo + direct early adopter |
| Database Updates | $29/year add-on | Optional; quarterly task library updates |

### Competitive Positioning

- **vs. The New Flat Rate:** "10x cheaper for a 3-tech shop. Set up in 4 hours, not 40."
- **vs. Profit Rhino:** "Standalone — no Housecall Pro required. Flat company pricing, not per-user."
- **vs. FSM native pricebook:** "True Good/Better/Best customer presentation — not just a list of prices."
- **vs. Excel/DIY:** "Cloud-synced, mobile-ready, 500-item starter library. Set it up once."

---

*PRD generated autonomously from Product Brief (Score: 91/105) and market research completed 2026-05-13.*
*Recommended next step: create-architecture*

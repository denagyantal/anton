---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ['ideas/shortlisted/contractor-quoting-estimation.md', '_bmad-output/planning-artifacts/market-research-contractor-quoting-estimation.md']
workflowType: 'product-brief'
lastStep: 6
date: '2026-03-22'
author: 'Root'
project_name: 'QuoteCraft'
---

# Product Brief: QuoteCraft — Contractor Quoting & Estimating Tool

<!-- Comprehensive product brief created through automated BMAD workflow -->

## Executive Summary

QuoteCraft is a mobile-first quoting and estimating tool built specifically for small trade contractors — plumbers, electricians, HVAC technicians, and painters. It enables tradespeople to create professional, trade-specific quotes in 60 seconds from their phone, directly on the jobsite.

The construction estimating software market reached $2.73 billion in 2025 and is projected to hit $5.01 billion by 2030 at a 12.89% CAGR. Yet 75% of buyers have 50 or fewer employees, and the majority of small trade businesses still rely on spreadsheets, handwritten notes, and manual calculations — losing time and margin on every bid. Existing solutions either target enterprise contractors at $200-500+/month or are generic horizontal tools that don't understand trade-specific workflows.

QuoteCraft fills the critical gap: an affordable ($59-89 lifetime deal), trade-specific, mobile-first quoting tool that replaces the painful manual process with AI-assisted, template-driven professional quotes. The product launches via AppSumo to build an initial user base of 2,000-5,000 contractors, with a clear path to $10K+ MRR within 12 months through subscription upsells.

---

## Core Vision

### Problem Statement

Small trade contractors (plumbers, electricians, HVAC techs, painters) with 1-10 employees waste significant time and lose revenue through manual, error-prone quoting processes. They build estimates from scratch every time — pulling prices from memory, using blank spreadsheets or handwritten notes, and producing unprofessional-looking quotes that cost them jobs against competitors who present polished proposals.

The average small contractor quotes 5-20 jobs per week. Each manual quote takes 15-45 minutes to create, totaling 2-15 hours weekly on quoting alone. Pricing errors — like quoting $2.50/sq ft for tile when the current rate is $4.10 — directly erode margins. Meanwhile, customers increasingly expect instant, professional digital quotes with e-signature and payment capabilities.

### Problem Impact

- **Lost revenue**: Slow quoting means fewer bids submitted and more jobs lost to faster-responding competitors
- **Margin erosion**: Pricing from memory leads to systematic under-quoting (eating into profits) or over-quoting (losing the job)
- **Unprofessional image**: Handwritten or basic spreadsheet quotes undermine credibility, especially when competing against contractors using polished software
- **Cash flow delays**: Without integrated deposit collection, contractors start work without payment security and chase invoices after completion
- **Scaling bottleneck**: Owner-operators can't grow beyond their personal capacity to create estimates, limiting business growth

### Why Existing Solutions Fall Short

| Solution Category | Examples | Why They Fail for Small Trade Contractors |
|---|---|---|
| **Enterprise FSM platforms** | ServiceTitan ($245-500+/mo), Workiz ($275-325/mo) | Massively overpriced; complex features (fleet management, dispatching) that solo operators don't need |
| **Mid-market FSM** | Jobber ($25-169/mo), Housecall Pro ($59-189/mo) | Generic templates not optimized for specific trades; real usable tiers start at $100+/mo; subscription fatigue |
| **Construction estimating** | Buildxact ($199-399/mo), PlanSwift, STACK | Designed for construction takeoffs, not quick service trade quotes; desktop-focused; steep learning curve |
| **Lightweight invoicing** | Invoice2go ($60/yr), Joist (free tier) | Not trade-specific; limited quoting features; Joist restructured after acquisition (uncertain future); Invoice2go users report declining value |
| **DIY** | Excel, Google Sheets, Word, handwritten | No templates, no pricing databases, no e-signature, no payment integration, unprofessional appearance |

The fundamental gap: **no affordable, trade-specific, mobile-first quoting tool exists**. The "trade-specific + simple/affordable" quadrant of the market is completely empty.

### Proposed Solution

QuoteCraft is a mobile-first Progressive Web App (PWA) that lets trade contractors create professional quotes in 60 seconds from their phone. The core workflow:

1. **Select trade template** — Pre-built templates for plumbing, electrical, HVAC, and painting with trade-specific line items and pricing
2. **Customize the quote** — Add/remove line items, adjust quantities, attach jobsite photos, add notes
3. **AI pricing assist** — AI suggests current market-rate pricing based on trade, region, and job type to prevent under/over-quoting
4. **Send professional PDF** — One-tap generation of a branded, professional PDF quote delivered via text or email
5. **Collect signature & deposit** — Customer e-signs and pays a deposit directly from the quote link

The entire flow works offline-first, syncing when connectivity returns — critical for basements, rural sites, and new construction.

### Key Differentiators

1. **Trade-specific out of the box** — Not a generic tool. A plumber opens QuoteCraft and immediately sees plumbing-specific line items (water heater install, pipe repair, drain clearing) with current market pricing. No setup required. This trade specificity drives 35-60% higher retention vs. horizontal platforms.

2. **60-second mobile quoting** — The fastest path from customer request to professional PDF in their inbox. Designed for one-handed use on a jobsite, not desktop workflows adapted for mobile.

3. **AI-powered pricing accuracy** — Prevents the #1 quoting mistake: pricing from memory. AI suggests prices based on trade, region, and current material costs, achieving up to 97% accuracy vs. manual estimates.

4. **LTD pricing eliminates adoption friction** — At $59-89 one-time (vs. $1,200-6,000/year for competitors), the purchase decision becomes trivial: "this costs less than one hour of my billable time." This removes the #1 barrier to contractor software adoption.

5. **Quote-to-deposit in one flow** — Seamless e-signature and Stripe-powered deposit collection directly from the quote. Contractors get paid before they start work, solving the critical cash flow problem.

---

## Target Users

### Primary Users

#### Persona 1: "Mike the Solo Plumber"

- **Profile**: 38 years old, licensed master plumber, runs his own one-man shop for 6 years. Works out of his van. Annual revenue ~$180K. Does 5-8 jobs per week, quotes 10-15 per week.
- **Current workflow**: Writes quotes on a notepad at the jobsite, drives home, types them into a Word template, emails a PDF. Total time per quote: 30-45 minutes. Sometimes forgets details by the time he gets home.
- **Pain**: Loses 1-2 jobs per week to faster-responding competitors. His quotes look unprofessional compared to contractors using Jobber. He tried Housecall Pro but cancelled after 3 months — too many features he didn't need at $189/month.
- **Tech comfort**: Medium. Uses his iPhone for everything — maps, supplier apps, texting customers. Won't use anything that requires a laptop.
- **Success vision**: Creates and sends a professional quote while still standing in the customer's kitchen. Gets the deposit before he leaves. "I just want to quote fast and look professional."

#### Persona 2: "Sarah the HVAC Team Owner"

- **Profile**: 42 years old, owns a 4-person HVAC company (herself + 3 techs). Annual revenue ~$750K. Manages 15-25 active quotes at any time. Her techs need to quote in the field.
- **Current workflow**: Uses a shared Google Sheet with pricing. Techs call her for pricing questions. She creates formal quotes in QuickBooks in the evening. Often stays up late doing paperwork.
- **Pain**: Her techs can't create professional quotes independently. She's the bottleneck. One tech recently quoted a ductwork job at $1,800 that should have been $3,200 — pricing from memory. She needs her team to quote accurately without calling her every time.
- **Tech comfort**: Medium-high. Uses QuickBooks and Google Workspace. Wants something that "just works" for her team.
- **Success vision**: Her techs open the app, select "ductwork installation," and the correct pricing is pre-loaded. They send a professional quote on-site, customer signs, and deposit hits the bank account. Sarah reviews the quote log at end of day.

#### Persona 3: "Carlos the Painting Contractor"

- **Profile**: 29 years old, runs a 2-person painting crew. Annual revenue ~$120K. Does mostly residential interior/exterior. Quotes 8-12 jobs per week, wins about 40%.
- **Current workflow**: Uses a calculator app to estimate square footage and material costs. Texts the customer a price with no formal quote document. Loses jobs to competitors who send professional proposals with scope details and photos.
- **Pain**: Customers ask "what exactly does that include?" and he has to text back and forth clarifying scope. No documentation leads to disputes about what was agreed. He can't justify $100+/month software on his margins.
- **Tech comfort**: High (digital native). Uses Instagram for marketing. Would adopt the right tool immediately if it was affordable and mobile.
- **Success vision**: Snaps photos of the rooms, selects "interior painting — 3 bedrooms," adjusts square footage, and sends a branded quote with photos, scope, and deposit link in 2 minutes.

### Secondary Users

#### Homeowners / Customers (Quote Recipients)

- Receive professional PDF quotes via text or email
- Can e-sign quotes from their phone without creating an account
- Can pay deposits via integrated payment link
- May compare quotes from multiple contractors — QuoteCraft quotes look more professional, increasing win rate

#### Office Manager / Bookkeeper

- In small teams (3-10 employees), an office manager may review and track quotes
- Needs a simple dashboard view of outstanding quotes, won/lost status, and revenue pipeline
- May export quote data to QuickBooks or other accounting software

### User Journey

**Discovery → Activation → Value → Retention → Advocacy**

1. **Discovery**: Mike sees a post in r/sweatystartup: "Just switched to QuoteCraft — sent a quote from the jobsite in 60 seconds and the customer signed before I left." He checks the AppSumo deal: $69 one-time. "Less than one service call. Worth trying."

2. **Onboarding (First 5 minutes)**: Mike signs up, selects "Plumber" as his trade. The app pre-loads plumbing line items (water heater install, faucet replacement, drain clearing, pipe repair) with suggested local pricing. He adds his logo and contact info. Setup complete.

3. **First Quote (Day 1)**: At a customer's house for a leaky faucet inspection, Mike opens QuoteCraft, selects "Faucet Replacement," adjusts the price, adds a photo of the faucet, and taps "Send Quote." The customer gets a professional PDF via text with an e-sign link. Total time: 90 seconds.

4. **Aha Moment**: The customer signs and pays a $50 deposit before Mike even gets back to his van. He thinks: "I've been doing this the hard way for six years."

5. **Daily Use**: Mike quotes every job from QuoteCraft. His win rate increases because he responds faster and looks more professional. He starts getting compliments from customers: "You're the only plumber who sent a real quote."

6. **Advocacy**: Mike posts in r/Plumbing: "Game changer for solo plumbers. $69 one-time and I'm quoting from the truck. Stop using spreadsheets." The cycle repeats.

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement | Why It Matters |
|---|---|---|---|
| Time to first quote | < 10 minutes from signup | In-app tracking | Proves onboarding is frictionless |
| Average quote creation time | < 2 minutes | In-app tracking | Core value prop — speed |
| Quotes sent per user per week | 5+ by week 2 | Usage analytics | Indicates real adoption, not just trial |
| Quote win rate improvement | 15%+ increase (self-reported) | User survey at 30/60/90 days | Validates that professional quotes win more jobs |
| E-signature adoption | 60%+ of quotes include e-sign | Feature usage tracking | Shows users leverage the full workflow |
| Deposit collection rate | 30%+ of signed quotes include deposit | Payment integration tracking | Validates quote-to-payment value |
| DAU/MAU ratio | 35%+ | Usage analytics | Indicates QuoteCraft is part of daily workflow |

### Business Objectives

**Phase 1 — Launch & Validate (Months 1-3)**
- Establish product-market fit with trade contractors
- Build initial user base through AppSumo LTD launch
- Achieve strong review scores to build credibility

**Phase 2 — Grow & Iterate (Months 4-6)**
- Expand to additional trades based on user demand
- Introduce AI pricing features
- Begin subscription revenue generation

**Phase 3 — Scale & Monetize (Months 7-12)**
- Transition revenue mix toward subscriptions
- Expand feature set for team use cases
- Establish dominant position in the "affordable trade quoting" niche

### Key Performance Indicators

| KPI | Month 1 | Month 3 | Month 6 | Month 12 |
|---|---|---|---|---|
| Total registered users | 500+ | 2,500+ | 5,000+ | 15,000+ |
| LTD revenue (cumulative) | $35K+ | $175K+ | $250K+ | $350K+ |
| Monthly recurring revenue | $0 | $1K+ | $5K+ | $15K+ |
| Quotes created (cumulative) | 5K+ | 50K+ | 200K+ | 1M+ |
| G2/Capterra reviews | 10+ | 50+ | 150+ | 500+ |
| Average review rating | 4.5+ stars | 4.5+ stars | 4.3+ stars | 4.3+ stars |
| 30-day retention | 60%+ | 65%+ | 65%+ | 70%+ |
| NPS score | 40+ | 45+ | 45+ | 50+ |

---

## MVP Scope

### Core Features

**1. Trade-Specific Quote Builder**
- Pre-built templates for 4 trades: plumbing, electrical, HVAC, painting
- Trade-specific line item libraries with descriptions and suggested pricing
- Quick-add line items with quantity, unit price, and tax calculation
- Customer information fields (name, address, phone, email)
- Job notes and scope description
- Custom line item creation for non-standard work

**2. Professional PDF Generation**
- Branded quote PDFs with contractor logo, license #, and contact info
- Clean, professional layout that instills customer confidence
- Itemized pricing breakdown with subtotal, tax, and total
- Terms and conditions section
- One-tap generation and delivery via SMS or email

**3. Photo Attachment**
- Capture jobsite photos directly from the app
- Attach up to 10 photos per quote for scope documentation
- Photos embedded in the PDF quote for customer reference

**4. E-Signature**
- Customer signs directly from the quote link on their phone
- No account creation required for the customer
- Signed quote stored and accessible in the contractor's dashboard
- Legal e-signature compliance

**5. Deposit / Payment Collection**
- Stripe integration for deposit collection
- Configurable deposit amount (fixed or percentage)
- Payment link included in the quote
- Payment confirmation notification to contractor

**6. Mobile-First PWA**
- Progressive Web App accessible from any phone browser
- Offline-first architecture — create and save quotes without connectivity
- Auto-sync when connection is restored
- Home screen installable (no app store required for MVP)

**7. Quote Dashboard**
- List of all quotes with status (draft, sent, viewed, signed, paid)
- Basic search and filter by customer name, trade, date
- Quote duplication for recurring job types
- Simple analytics: quotes sent this week/month, win rate

**8. Contractor Profile Setup**
- Business name, logo, license number, contact details
- Trade selection (determines template library)
- Default tax rate and payment terms
- Branding customization (colors, header)

### Out of Scope for MVP

The following are explicitly **not** included in the MVP and are deferred to future releases:

- **Invoicing and payment processing** (beyond deposits) — Full invoicing is a separate product. MVP focuses on the quote-to-deposit workflow only.
- **Job scheduling and dispatching** — This is FSM territory (Jobber, Housecall Pro). QuoteCraft is a quoting tool, not a scheduler.
- **CRM and customer management** — Beyond basic customer contact info on quotes, CRM features are post-MVP.
- **Team management and approval workflows** — MVP serves solo operators and very small teams. Formal approval chains are a premium tier feature.
- **QuickBooks / accounting integration** — Important but not MVP-critical. Export functionality comes first.
- **Native iOS / Android apps** — PWA serves MVP needs. Native apps are a Phase 2 investment based on user demand.
- **Material supplier price integrations** — Real-time supplier pricing is a future differentiator, not MVP requirement.
- **Advanced AI features** — Voice-to-quote, photo-to-estimate, and AI scope detection are future innovations. MVP AI is limited to pricing suggestions from a pre-built database.
- **Multi-language support** — English only for MVP (US market focus).
- **Additional trades beyond 4** — Roofing, landscaping, general contracting, and other trades are added based on demand post-launch.

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **Adoption**: 500+ users create at least 3 quotes each within the first 30 days (proves the tool solves a real workflow problem)
2. **Retention**: 60%+ of users who create a quote in week 1 create another quote in week 4 (proves ongoing value)
3. **Core value**: Average quote creation time is under 3 minutes (proves the speed promise)
4. **Revenue**: AppSumo launch generates $35K+ in LTD revenue (proves willingness to pay)
5. **Quality**: Average review rating of 4.5+ stars on AppSumo (proves user satisfaction)
6. **Engagement**: 35%+ of quotes include e-signature or deposit collection (proves users leverage the full workflow, not just PDF generation)

**Go/No-Go Decision Point**: At month 3, if 3 of 6 criteria are met, proceed to Phase 2. If fewer than 3 are met, conduct user interviews to understand gaps before investing further.

### Future Vision

**Year 1 Post-MVP Enhancements:**
- Additional trades (roofing, landscaping, general contracting, concrete, flooring)
- AI-powered pricing suggestions based on local market data and material costs
- QuickBooks and Xero export/integration
- Team features: shared line item libraries, quote templates, and basic approval flows
- Customer follow-up reminders ("Quote #247 hasn't been viewed — send a nudge?")
- Quote analytics: win/loss tracking, average job size trends, busiest seasons

**Year 2 Platform Evolution:**
- Native iOS and Android apps for enhanced offline and camera capabilities
- Voice-to-quote: contractor dictates job details, AI structures the quote
- Photo-to-estimate: snap photos of a job, AI estimates scope and suggests pricing
- Supply house partnerships for real-time material pricing integration
- Simple CRM: customer history, past quotes, repeat customer pricing
- Job tracking lite: quote → accept → in progress → complete → paid

**Year 3+ Vision:**
- Full contractor business OS: quoting → invoicing → payments → CRM → job tracking
- Marketplace: homeowners request quotes from multiple QuoteCraft contractors
- API platform: integrate with other contractor tools as the quoting layer
- White-label offering for trade associations and franchises
- International expansion with localized trade templates and pricing

---

## Competitive Positioning Summary

QuoteCraft occupies the only open quadrant in the market: **trade-specific + affordable/simple**. Every competitor is either:
- Trade-specific but expensive and complex (ServiceTitan, McCormick, ConEst)
- Affordable but generic (Joist, Invoice2go, basic invoicing tools)
- Both expensive and generic (Jobber, Housecall Pro at usable tiers)

The LTD pricing model ($59-89 one-time) is a strategic weapon: it eliminates the #1 adoption barrier for small contractors (subscription anxiety), creates an instant user base for social proof and reviews, and locks users into the ecosystem before competitors can react.

The community-led GTM (Reddit trade subreddits + Facebook trade groups + AppSumo) directly reaches the target audience where they already gather and recommend tools — avoiding expensive paid acquisition channels that erode LTD economics.

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation Strategy |
|---|---|---|---|
| Established players (Jobber, HCP) add trade-specific templates | Medium | High | Move fast to market; LTD users are locked in; community presence creates brand moat |
| Trade-specific pricing databases difficult to build accurately | High | Medium | Start with user-contributed pricing + AI range suggestions; iterate with real usage data |
| Offline PWA capability adds significant technical complexity | Medium | Medium | Architect offline-first from day 1; use proven service worker patterns |
| LTD users have high support demands with low revenue per user | High | Low | Invest in self-serve onboarding, video tutorials, FAQ; build for zero-touch usage |
| Subscription conversion rate lower than projected | Medium | Medium | Keep LTD features strong but reserve team/AI features for premium tier; prove value before asking for subscription |
| Market timing — AI-native startup with more funding launches first | Low | High | First-mover in trade-specific AI quoting + authentic community presence creates defensibility |

---

## Go-to-Market Strategy Summary

| Phase | Timeline | Channel | Target |
|---|---|---|---|
| AppSumo LTD Launch | Month 1-2 | AppSumo marketplace | 2,000-3,000 LTD users, $140K-$200K revenue |
| Community Seeding | Month 1-3 | r/sweatystartup, r/HVAC, r/Plumbing, r/electricians, Facebook trade groups | Organic awareness and word-of-mouth |
| Content Marketing | Month 2-6 | YouTube demos, SEO blog content | "contractor estimate app" and trade-specific keywords |
| Review Building | Month 2-4 | G2, Capterra, Software Advice | 50+ reviews at 4.5+ stars |
| Subscription Launch | Month 4-6 | In-app upgrade prompts, email campaigns to LTD users | First $5K MRR from premium features |

---

**Product Brief Completion Date:** 2026-03-22
**Input Sources:** Shortlisted idea evaluation (Score: 88/105), comprehensive market research report
**Confidence Level:** High — validated by market data, competitive analysis, and community signal history
**Recommended Next Step:** Create PRD (Product Requirements Document) to detail feature specifications, user stories, and acceptance criteria

---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/contractor-quoting-estimation.md
  - _bmad-output/planning-artifacts/market-research-ai-quoting-estimating-trades.md
workflowType: product-brief
lastStep: 6
idea_name: ai-quoting-estimating-trades
date: 2026-05-03
author: Root
---

# Product Brief: AI-Powered Quoting & Estimating for Trade Contractors

---

## Executive Summary

**Product Name:** QuoteDrive (working title) — AI-powered mobile quoting for residential trade contractors

**One-Liner:** Quote from the driveway in 5 minutes — a mobile-first AI quoting tool for solo trade contractors that turns an address into a professional, signed estimate before you leave the job site.

**The Problem:** Solo and small-shop trade contractors (HVAC, plumbing, electrical, roofing, painting) lose jobs because quoting is slow, manual, and unprofessional. The average quote takes 45 minutes using Word docs or Excel templates, emailed hours after leaving the site. By then, the customer has already called two more contractors. Professional quotes achieve a 43% close rate versus 22% for manual ones — a 2x revenue gap that can be closed with the right tool.

**The Solution:** A mobile-first app that auto-pulls property data from an address, presents trade-specific line items, generates a branded PDF, texts it to the customer, and collects an e-signature — all from the phone, on-site, before the truck leaves the driveway. AI pricing suggestions learned from job history sharpen estimates over time.

**Market Opportunity:** The construction estimating software market is valued at $3.07 billion (2026, 12.66% CAGR) with ~430,000 addressable solo/small-shop US trade contractors currently underserved. No current tool occupies the mobile-first + AI-assisted + property data + trade templates + e-signature + affordable ($49–99/mo) position simultaneously. Rebar's $14M Series A (March 2026) validates investor confidence in vertical AI for trade quoting — but serves commercial equipment suppliers, not residential contractors. That white space remains open.

**Launch Strategy:** LTD launch ($199 on AppSumo) starting with one trade vertical (roofing or painting), validated by 10 real contractors from trade communities before launch. Transition to $49–79/mo SaaS after 500+ LTD users provide signal.

**Confidence Level:** High — 88/105 signal score with 9 tracking entries, each confirming the same gap. Rebar's funding, ToolsAI's Show HN traction, and the flat-rate pricebook demand pattern across 9 months of competitive monitoring all point to the same unclaimed position.

---

## Core Vision

### Problem Statement

Residential trade contractors — roofers, painters, HVAC techs, plumbers, electricians — operate in a two-quote world: the contractor who sends a professional quote wins; the one who calls back two days later loses. The average manual quote takes 45 minutes. The average contractor has 4–8 jobs per day. That's 3–6 hours daily on paperwork, done on a laptop at home after a full day of physical work, for quotes that may never close.

The tools that exist are either wrong for solo operators or wrong for the job site:
- Enterprise FSM platforms (ServiceTitan, $24K–60K/yr) are priced for 10-tech shops
- Mid-market tools (Jobber, Housecall Pro) require desktop setup and lack property data or flat-rate pricebooks
- Estimating-only tools (SimplyWise) stop at the estimate — no e-signature, no follow-up, no quote-to-close workflow
- AI quoting tools (Handoff AI, $149/mo) are expensive, text-only, and not mobile-first

The result: 60–70% of solo/small trade contractors still use manual methods (Word, Excel, handwritten) for every quote, every day.

### Problem Impact

- **Revenue lost per contractor:** A contractor with 10 quotes/week at 22% close rate wins 2.2 jobs. At 43% close rate (professional quote baseline), they win 4.3 jobs. At $500 average job value, that's $1,050/week in additional revenue — or $54,600/year — sitting on the table.
- **Time wasted per contractor:** 45 minutes × 10 quotes/week = 7.5 hours weekly in quote preparation, compared to 5 minutes × 10 = under 1 hour with a mobile-first tool. That's 6.5 hours/week returned to billable work or rest.
- **Market scale:** ~430,000 solo/small trade contractors in the US experiencing this problem daily. At $49/mo and 5% penetration, that's $12.7M ARR. At 10% penetration: $25.3M ARR.
- **Psychological cost:** Contractors feel unprofessional when a homeowner says "can I see the estimate?" and they have nothing to show on-site. Loss of confidence in pricing hurts quality of quotes too — contractors undercharge to compensate for their informal presentation.

### Why Existing Solutions Fall Short

| Tool | What They Do | What's Missing |
|------|-------------|----------------|
| ServiceTitan | Best-in-class pricebook and FSM | $24K–60K/yr minimum — inaccessible to solo shops |
| Jobber | Clean quoting and e-sign | No flat-rate pricebook, no property data, no trade-specific templates |
| Housecall Pro | Good automation, mobile-friendly | No trade-specific templates, no property data, complex setup for solo ops |
| SimplyWise | Mobile photo-to-estimate, 4.8 App Store stars | Estimate-only — no e-signature, no follow-up automation, no quote-to-close |
| Handoff AI | Text → AI estimate | $149/mo, text-only input, no property data, no mobile-first UX |
| QuoteIQ | Affordable ($29.99/mo), AI included | Feature bloat across 5 tiers; not HVAC/plumbing depth; complexity defeats the purpose |
| Contractor+ Estimatic | AI estimates for 50 trades | Accuracy concerns in reviews; no e-sign/follow-up; general construction focus |
| Profit Rhino | Industry-standard flat-rate pricebook | $100–200+/mo, no AI, add-on only (requires separate FSM) |

**The root gap:** No tool combines all five capabilities in a zero-setup, mobile-first package at an affordable price: (1) address → property data auto-fill, (2) trade-specific template library, (3) phone-first quote generation in 5 minutes, (4) e-signature on-site, and (5) AI pricing from job history. Every competitor has 1–2 of these; none has all five.

### Proposed Solution

A mobile-first app purpose-built for the "driveway moment" — the 5 minutes between finishing a site assessment and leaving the customer's property:

1. **Address input** → ATTOM/Estated property data API auto-fills lot size, square footage, building type, year built
2. **Trade template selection** → Pre-built line item library for chosen trade (roofing: squares of shingles, underlayment, ridge cap, labor; painting: rooms, paint gallons, primer, labor; HVAC: unit size, installation, permits, labor)
3. **AI pricing suggestions** → Smart starting points based on regional market rates and user's job history
4. **One-tap PDF generation** → Contractor-branded professional estimate with itemized costs, optional Good/Better/Best tiers
5. **Instant delivery** → Text or email PDF to customer's phone while still on-site
6. **E-signature collection** → Customer signs on their phone; contractor gets notification
7. **Quote status tracking** → Know when quotes were opened, viewed, and signed (or ignored)
8. **Follow-up automation** → Automatic reminder texts if no response after 24/48 hours

The positioning is not "AI-powered estimating software" — it is: **"Quote from the driveway in 5 minutes."**

### Key Differentiators

1. **Address → property data auto-pull** — No other affordable tool automatically fills in square footage, lot size, and building type from a street address. Contractors don't measure the house; they look up the address and the data is already there.

2. **Trade-specific depth** — Not generic "construction templates." Each trade has purpose-built line item libraries that match how that trade actually thinks and quotes (painting: rooms → paint gallons → coats; roofing: squares → materials → pitch multiplier).

3. **Mobile-first, glove-friendly UX** — Designed to be used standing in a driveway, one-handed, in a work glove. No laptop required, no desktop login, no complex setup.

4. **Full quote-to-close workflow** — The only affordable tool that goes from estimate through PDF delivery through e-signature collection, all in one mobile flow. Not just an estimating tool; a closing tool.

5. **Zero setup** — No pricebook configuration, no supplier integration, no onboarding call required. Install app, enter trade, generate first quote in under 2 minutes. The #1 barrier to AI adoption is training + integration complexity (44% of contractors cite this) — this product removes that barrier entirely.

---

## Target Users

### Primary Users

**Persona 1: Marcus — The Solo Roofer**

Marcus is 38, runs a 2-person roofing crew in suburban Ohio. He does 8–12 jobs per month — mostly residential repairs and replacements. Revenue: $380K/year. Tech setup: iPhone, uses Notes app for quick customer info, sends quotes as email attachments from a Word template he built in 2019.

*Current quoting workflow:* Drives to job → walks roof → takes mental notes → drives home → opens laptop → fills in Word template → screenshots to PDF → emails customer. Total time: 45–60 minutes per quote, done that evening or the next morning. By the time the quote lands, the homeowner has already gotten two other quotes.

*Problem experience:* Loses 40% of quotes to faster competitors. Knows his pricing is right but can't prove it to himself without more data. Embarrassed when homeowners ask "can I see the estimate right now?" — he has nothing to show.

*What success looks like:* Pull up phone, punch in address, select roofing squares from satellite data, add his labor rate, hit send, hand phone to homeowner to sign — all before leaving the driveway. Close rate jumps from 22% to 35%+. Quote time drops from 45 minutes to under 5.

*Aha moment:* The first time a homeowner signs the quote while Marcus is still rolling up his ladder.

---

**Persona 2: Diana — The Painting Contractor**

Diana is 31, runs a 3-person interior/exterior painting crew in suburban Texas. She does 15–20 quotes per month, wins about 5. Revenue: $220K/year. Previous job: graphic designer, so she cares deeply about professional presentation. Currently uses Canva templates and emails PDFs, which look great but take 30+ minutes each.

*Current quoting workflow:* Measures rooms manually → photos for reference → builds quote in Canva → exports PDF → emails. Has a 25% close rate, which she suspects is low. Loses bids to faster competitors and to contractors who show up with digital tablets and instant quotes.

*Problem experience:* Time to quote (30+ min) limits how many bids she can do. No follow-up system — sends quote, then manually texts 2 days later to check. Can't track which quotes were even opened.

*What success looks like:* Enter room dimensions from phone → app calculates paint gallons + primer + labor → branded PDF generated → texted to homeowner → opens notification when homeowner views quote → automatic follow-up if no response in 48 hours.

*Aha moment:* Seeing "Quote Opened" notification while driving to next job, followed by e-signature notification 10 minutes later.

---

**Persona 3: Ray — The HVAC Service Tech**

Ray is 45, runs a solo HVAC service and installation business in the Midwest. Revenue: $280K/year. Highly skilled technically but struggles with the business side — pricing, proposals, follow-up. Uses Housecall Pro for scheduling but still creates quotes manually in Excel because Housecall Pro's template system is too clunky for his needs.

*Current quoting workflow:* Diagnose issue on-site → drive back to office → open Excel → look up equipment costs → calculate labor → email quote. Average time: 60–90 minutes. Has lost jobs waiting overnight to send a quote.

*Problem experience:* Doesn't offer Good/Better/Best options because the Excel template only has one tier. Knows Profit Rhino ($150/mo) would solve this but can't justify the price for solo operation. Wants to offer financing options but doesn't know how to present them.

*What success looks like:* Diagnose unit on-site → select repair type from pre-built HVAC line items → auto-populate Good (repair), Better (repair + tune-up), Best (repair + maintenance plan) → text to homeowner → 3 tiers signed-on-site → 40% choose Better or Best → average ticket increases by $200.

*Aha moment:* First homeowner who upgrades from Good to Best tier on-site because the 3-option format makes it easy to say yes to more.

---

### Secondary Users

**Trade Shop Owner (Managing 3–8 Technicians)**

Not the quoting technician — the shop owner who wants consistency across their team's quotes. Needs the team to use the same templates, the same pricing, the same branded PDF. Currently the inconsistency across 5 technicians' quotes is costing them brand equity and making pricing audits impossible.

*How they use the product:* Set up templates and pricing floors centrally → techs use app in the field → owner gets dashboard visibility across all quotes sent, opened, and signed → can see which technician has the lowest close rate and coach accordingly.

*This user becomes important in v2/post-MVP.* MVP focuses on the solo operator, but the product design should not preclude multi-user expansion.

**Homeowner (Quote Recipient)**

The homeowner is a passive but critical user — they receive the PDF via text, view it on their phone, and sign via the e-signature link. They do not log in to the app. But their experience matters: a clear, professional, readable quote PDF that works on mobile is essential for the signing flow to work.

*Key interaction:* Receive text → tap link → view branded PDF → tap "Sign Here" → sign with finger → done. Must work on any smartphone without app download.

### User Journey

**The Full Quote-to-Close Journey (Solo Contractor)**

```
1. DISCOVERY
   Contractor hears about the app on r/Roofing or from a peer in a Facebook group
   → Watches 90-second demo video ("I quoted a roof in 4 minutes — here's how")
   → Downloads app, sets up profile in under 2 minutes (trade, logo, license number)
   
2. FIRST QUOTE
   Pulls up app on job site → enters customer address → property data loads in 3 seconds
   → Selects line items from roofing template → adjusts quantities from satellite data
   → Taps "Generate Quote" → branded PDF created → texts to homeowner
   → Total time: under 5 minutes (vs. 45 minutes previously)
   
3. AHA MOMENT
   Homeowner signs the quote while contractor is still at the property
   (or: contractor receives "Quote Opened" notification while driving to next job)
   
4. DAILY HABIT
   App opens for every quote — becomes the primary tool within 1 week of first use
   Quote time: 5 min. Close rate: improving. Follow-up: automated.
   
5. EXPANSION
   Contractor invites a second technician to use the app
   Starts tracking close rate per job type in the analytics dashboard
   Considers upgrading to MRR plan for AI pricing suggestions
   
6. ADVOCACY
   Posts in r/Roofing: "I've been using [product] for 3 months — 
   my close rate went from 22% to 38% — here's what changed"
```

**Critical Drop-Off Points to Prevent:**
- Setup friction: If the app takes more than 2 minutes to set up before first quote, solo operators will abandon it
- Template mismatch: If the line item library doesn't match how the contractor actually quotes, they'll ignore it
- PDF quality: If the PDF looks unprofessional, the contractor loses trust in the tool immediately

---

## Success Metrics

### User Success Metrics

**Primary User Success Indicators (Measured from app data):**

| Metric | Baseline (Industry) | Target (Product Users) | Measurement |
|--------|--------------------|-----------------------|-------------|
| Time to generate quote | 45 minutes | < 5 minutes | Session duration from address entry to PDF sent |
| Quote close rate | 22% (manual) | 35%+ | Signed quotes / total quotes sent |
| Quotes sent per week | ~4–6 | 8–12 | Quote send events per user |
| Time from site visit to quote sent | 2–24 hours | < 10 minutes | Timestamp delta |
| E-signature completion rate | N/A (no current flow) | 60%+ of quotes sent | Signatures / quotes sent |
| Return session within 7 days | N/A | 80%+ | User retention |

**The North Star Metric:** Quote-to-signature time. If the average time from "enter address" to "homeowner signs" is under 10 minutes, the product is working. This single metric captures property data quality, template usefulness, PDF clarity, and e-sign flow all at once.

**User-Reported Success Signals:**
- "I closed a job while still at the property" (post-session survey)
- "My quote time dropped from [X] to [Y] minutes"
- 4.5+ App Store/Google Play rating within 90 days of launch
- NPS ≥ 50 at 60-day cohort mark

### Business Objectives

**Phase 1 — Validation (Month 1–3):**
- Validate the driveway quote workflow with real contractors from community outreach
- Reach 50 active beta users from 1 trade vertical (roofing or painting)
- Achieve < 5 minutes average quote generation time in real field conditions
- Collect 10+ testimonials with quantified close rate improvement

**Phase 2 — LTD Launch (Month 3–6):**
- Launch on AppSumo at $199 LTD price point
- Target $30K–$100K in LTD revenue (150–500 customers)
- Achieve AppSumo rating of 4.5+
- Expand template library to 3 trades (roofing, painting, HVAC or plumbing)

**Phase 3 — MRR Transition (Month 6–12):**
- Convert LTD base to MRR at $49–79/mo
- Reach $5K–$20K MRR from SaaS subscribers
- Launch multi-user team plan at $99–149/mo
- Expand to 5 trades

**Phase 4 — Scale (Month 12–24):**
- 1,000+ active MRR customers
- $600K–$1.5M ARR
- Integration with Jobber/QuickBooks for quote-to-invoice sync
- CAC payback < 6 months

### Key Performance Indicators

**Acquisition KPIs:**
- Cost per trial signup from community channels: Target < $15 (organic Reddit/Facebook)
- Trial-to-paid conversion rate: Target 20–30% (strong for LTD, typical for software trial)
- AppSumo page conversion rate: Target 2–5% of visitors
- Community post engagement: 100+ upvotes on initial demo posts in trade subreddits

**Engagement KPIs:**
- D7 retention: 60%+ (daily-use tool; if they quote in week 1, they come back)
- D30 retention: 40%+ (habitual users who integrated into workflow)
- Quotes generated per active user per week: Target 5+ (proxy for daily use)
- Feature utilization: 70%+ of users use property data auto-pull on first quote

**Revenue KPIs:**
- LTD customer count: 150–500 by month 6
- MRR: $5K by month 6, $20K by month 12
- Monthly churn: < 5% (daily-use tools have lower churn than weekly-use tools)
- Expansion MRR: 15%+ from upgrades (solo → team plan)

**Leading Indicators (Predictive Signals):**
- Quote template save rate: Do contractors save and reuse quote templates?
- PDF delivery → signature rate: Is the e-sign flow converting?
- Time from quote sent → homeowner signature: Signal for PDF clarity and e-sign UX

---

## MVP Scope

### Core Features

The MVP is a single-trade (roofing OR painting) mobile-first quote-to-close workflow. Every feature below is necessary; nothing here is optional for the MVP to prove value.

**Feature 1: Address → Property Data Auto-Fill**
- Input: Street address
- Output: Square footage, lot size, building type, year built pre-filled in quote
- API: ATTOM Data or Estated (cost: ~$0.002–0.01/lookup)
- Fallback: Manual entry for any field (handles rural coverage gaps)
- Success criteria: Property data loads correctly for 80%+ of US residential addresses entered

**Feature 2: Trade-Specific Template Library**
- Start: 1 trade (roofing OR painting — decided by first 5 beta contractors)
- Roofing: Shingles (squares), underlayment, ice/water shield, ridge cap, drip edge, labor, permits, debris removal
- Painting: Interior rooms (gallons calc automatic from dimensions), exterior (sq footage to gallons), primer, labor (per room/per sq ft), prep work
- Line items: Each has description, unit, unit price (editable), and AI-suggested default
- Success criteria: First quote using template takes < 3 minutes, no manual data entry for standard items

**Feature 3: AI Pricing Suggestions**
- V1 (MVP): Regional average rates populated by market research data (not ML yet)
- V1.1: User's own job history used to calibrate suggestions after 5+ completed jobs
- Display: Suggested price shows as a starting point, clearly labeled "suggested" — always editable
- Success criteria: 70%+ of users adjust suggested prices by < 20% (indicates suggestions are useful, not ignored)

**Feature 4: PDF Generation + Branding**
- Contractor profile: Name, company name, logo upload, license number, phone, email
- PDF content: Quote number, date, customer name/address, itemized line items, total, payment terms, validity period
- Optional: Good/Better/Best layout (3-column PDF showing 3 pricing tiers)
- Success criteria: PDF opens cleanly on iOS and Android, looks professional enough to compete with Jobber-generated quotes

**Feature 5: SMS + Email Delivery to Customer**
- Send: One tap → customer receives text with link to PDF
- Link: Opens in browser (no app download required for homeowner)
- Contractor notification: "Customer opened your quote" push notification
- Success criteria: SMS delivery rate > 95%, PDF renders correctly in mobile browser

**Feature 6: E-Signature Collection**
- In-browser signature flow (no app install, no DocuSign account for homeowner)
- Contractor receives notification + PDF copy with signature timestamp
- Legally binding signature capture with IP, timestamp, geolocation
- Success criteria: 60%+ of quotes opened result in e-signature completion (or rejection notification)

**Feature 7: Quote Dashboard + Status Tracking**
- List view: All quotes with status (Sent, Opened, Signed, Rejected, Expired)
- Quote detail: View, resend, duplicate, convert to invoice (placeholder for v2)
- Filter: By date range, status, trade type
- Success criteria: Contractor can find any sent quote in < 10 seconds

**Feature 8: Follow-Up Automation (Basic)**
- Rule: If quote not signed in 48 hours → send 1 automatic follow-up text
- Message: Editable template ("Hi [Name], just following up on the quote I sent — happy to answer any questions!")
- On/off toggle per quote
- Success criteria: Follow-up texts have 15%+ response rate (industry SMS benchmark)

### Out of Scope for MVP

The following features are deliberately excluded from MVP to maintain focus and achieve a 4–6 week build timeline:

| Feature | Reason Deferred |
|---------|----------------|
| Scheduling / dispatching | Full FSM is the wrong scope — quoting is the wedge |
| Invoice generation | Convert quote → invoice is a v2 feature once quote workflow is proven |
| Payment collection | Adds compliance complexity (Stripe integration, merchant onboarding) |
| Multi-user / team accounts | Solo contractor is the primary persona; team is v2 |
| QuickBooks / Jobber integration | Integration effort > MVP value; add after MRR proves need |
| Photo-to-estimate (AI vision) | GPT-4o Vision integration adds cost and complexity; property data covers the need initially |
| Multi-trade templates | Start with 1 trade only; depth beats breadth in v1 |
| Customer portal | Homeowner self-service view is post-LTD-launch |
| Flat-rate pricebook import | Building pricebook import requires per-trade data modeling; v2 |
| Marketing/review automation | Post-completion review requests and marketing drip — post-MVP |
| Revenue analytics / reporting | Job costing (actual vs estimated) is a v2 feature |
| White-label / reseller | Distribution channel expansion after product-market fit |
| Embedded financing | Homeowner financing at signature — post-MVP (regulatory complexity) |

**Principle:** If removing a feature doesn't break the "quote from the driveway in 5 minutes" core promise, it stays out of MVP.

### MVP Success Criteria

The MVP is successful if these gates are passed before committing to AppSumo launch:

**Gate 1 — Technical Validation (Week 6):**
- [ ] Property data loads for 80%+ of test addresses entered by beta contractors
- [ ] Quote generation flow completes in < 5 minutes for 90% of test sessions
- [ ] PDF renders correctly on iOS Safari, Chrome Android, and desktop browsers
- [ ] E-signature flow works end-to-end without bugs in 100% of test cases

**Gate 2 — User Validation (Week 8):**
- [ ] 10 real contractors from trade communities complete at least 3 quotes each using the app
- [ ] 8 of 10 report quote time reduction vs. their previous method
- [ ] 5 of 10 report at least 1 quote signed using the e-signature flow
- [ ] Average App Store rating from beta testers: 4.0+

**Gate 3 — Market Validation (Week 10, post-soft-launch):**
- [ ] 50+ demo signups from community posts (Reddit, Facebook) without paid advertising
- [ ] 30%+ trial-to-LTD conversion rate
- [ ] At least 2 publicly shareable testimonials with quantified results

**Go/No-Go for AppSumo:**
All 3 gates must pass. If Gate 2 fails (user validation), rebuild before launch. If Gate 1 fails, extend build timeline. AppSumo launch without product-market fit evidence is a reputation risk in the contractor community.

### Future Vision

**6–12 Months Post-MVP:**
- **Multi-trade expansion:** Full template libraries for HVAC, plumbing, electrical, concrete/fencing (5 trades total)
- **AI vision estimating:** Photo upload → GPT-4o Vision → AI reads roof pitch, wall area, room dimensions → auto-populates line items (no more manual measurement)
- **Good/Better/Best standard:** All templates support 3-tier option presentation; configurable per contractor
- **Multi-user team accounts:** Team lead sets templates + pricing floors; techs use in field; owner sees dashboard
- **Quote → Invoice:** One-tap convert; send invoice with payment link (Stripe)
- **QuickBooks / Jobber sync:** Signed quotes push to QuickBooks as invoices; Jobber as jobs

**12–24 Months:**
- **AI pricing calibration:** Product learns from regional job history across all users (anonymized) to provide market-accurate pricing benchmarks
- **Flat-rate pricebook module:** Full HVAC/plumbing/electrical pricebook with Good/Better/Best pre-built (steal Profit Rhino's market at 1/3 the price)
- **Customer portal:** Homeowner account where they can view all past quotes, active warranty info, request follow-up work
- **Jobber/HCP white-label API:** Sell the quote engine as a B2B module to FSM platforms — distribution play leveraging existing Jobber user base
- **Embedded financing:** Homeowner selects financing at quote signing → instant approval → contractor gets paid upfront via lending partner

**3–5 Year Vision:**
- **The category leader for residential trade quoting** — the tool 500K+ solo contractors reach for before they need anything else
- **Marketplace option:** Homeowners searching for trade work can find contractors who use the app (verified professional quote delivery = trust signal)
- **Trade school partnerships:** Vocational programs bundle the app subscription as part of curriculum — every graduating HVAC tech gets the habit on day one
- **Insurance integration:** Quote data + property data → instant contractor liability rate quote (embedded insurance partnership)
- **Community pricing intelligence:** Aggregated anonymous pricing from 10K+ contractors in each metro area → real-time "your pricing is 12% below market" alerts

---

## Strategic Notes and Risks

### Go-to-Market Priority

1. **Community-first, not ads-first.** Contractors trust peer recommendations above all else. The first 50 users come from genuine demo posts in r/Roofing, r/painting, r/HVAC, r/Plumbing — not from Google Ads.
2. **One trade, maximum depth.** Better to be the #1 painting quote app than a mediocre app for 50 trades. Pick painting or roofing based on first 5 beta contractor feedback.
3. **LTD as community-building, not just revenue.** AppSumo LTD customers become the feedback community and case study bank that powers the MRR launch story.

### Critical Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Jobber ships flat-rate pricebook | Medium (12-18 mo) | High | Launch fast; build property data + AI depth Jobber can't copy in < 12 months |
| Property data gaps in rural areas | High (some areas) | Medium | Manual entry fallback; coverage score displayed; works for 80%+ of US addresses |
| AI pricing accuracy early on | High (early) | Medium | V1 uses market research rates, not ML; labeled "suggested not final" |
| Trade community skepticism | Medium | High | Build in public; share real numbers; founder story matters in this market |
| SimplyWise expands to e-sign + follow-up | Low (6-12 mo) | High | Property data auto-pull and trade template depth are moats they can't copy quickly |
| Scope creep dilutes UX | High | High | Hard "no" rule: no features not in MVP scope list until AppSumo Gate 3 passes |

### Competitive Moat Building

The 5-capability combination is the moat. No single capability is defensible alone, but the combination — property data + trade-specific templates + mobile-first UX + e-signature + AI pricing — takes any competitor 12–18 months to replicate at the same quality. Use that window to build trade community presence, case studies, and App Store reviews that create brand switching costs.

---

**Product Brief Completion Date:** 2026-05-03
**Workflow:** create-product-brief (all steps completed)
**Next Step:** `/bmad-bmm-create-prd` — Create PRD using this brief as foundation

_This brief is the strategic foundation for all subsequent architecture, design, and development work. All PRD requirements, architecture decisions, and sprint stories should trace back to the vision, user personas, success metrics, and MVP scope defined here._

---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments:
  - ideas/shortlisted/contractor-quoting-estimation.md
  - _bmad-output/planning-artifacts/product-brief-ai-quoting-estimating-trades.md
  - _bmad-output/planning-artifacts/research/market-ai-quoting-estimating-trades-research-2026-05-03.md
workflowType: prd
date: '2026-05-03'
author: Root
project_name: QuoteDrive
classification:
  projectType: mobile_app
  domain: construction_trades
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document - QuoteDrive

**Author:** Root
**Date:** 2026-05-03

## Executive Summary

QuoteDrive is a mobile-first quoting app for solo and small-shop residential trade contractors — roofers, painters, HVAC techs, plumbers, electricians — that turns a street address into a signed, professional estimate before the contractor leaves the driveway. It targets the 430,000+ US residential trade contractors currently underserved by software: enterprise platforms (ServiceTitan, $24K–60K/yr) are priced for 10-tech shops, mid-market tools (Jobber, Housecall Pro) lack property data and flat-rate pricebooks, and AI quoting tools (Handoff AI, $149/mo) are expensive and not mobile-first. The construction estimating software market is valued at $3.07 billion in 2026 (12.66% CAGR), with the solo/small-trade segment representing the fastest-growing, most underserved cohort.

**The bottleneck QuoteDrive eliminates:** The average manual quote takes 45 minutes and gets sent hours after the site visit, by which time the customer has accepted a competitor. Professional quotes achieve a 43% close rate versus 22% for manual quotes — a 2x revenue gap representing $54,600/year in additional revenue per contractor (at 10 quotes/week, $500 average job value). QuoteDrive collapses that workflow from 45 minutes to under 5 minutes, on-site, from a phone.

**Launch strategy:** LTD launch ($199 on AppSumo) starting with one trade vertical (roofing or painting), validated with 10 real contractors before launch. Transition to $49–79/mo SaaS after 500+ LTD users. Market signal confidence: 88/105 signal score with 9 independent tracking entries over 9 months, all converging on the same unclaimed position.

### What Makes This Special

1. **Address → property data auto-fill.** The defining differentiator no competitor touches: type a street address and ATTOM/Estated API pre-fills lot size, square footage, building type, and year built. Contractors do not measure the house — the data arrives in 3 seconds. No other affordable quoting tool does this.

2. **Trade-specific template depth.** Not generic "construction templates." Each supported trade has purpose-built line item libraries matching how that trade actually quotes: roofing → squares of shingles → pitch multiplier → underlayment → ridge cap; painting → room dimensions → paint gallons (auto-calculated) → coats → labor. The specificity makes the tool feel built for them, not adapted for them.

3. **Mobile-first, glove-friendly UX.** Designed for one-handed use in a driveway, in a work glove. Large tap targets, minimal text input, and a flow optimized for the 5 minutes between walking a property and starting the truck. Not a desktop app forced onto a phone screen.

4. **Full quote-to-close in one flow.** The only affordable tool that goes from estimate through PDF delivery through on-site e-signature collection without switching apps or platforms. Quote, send, sign, done — before the truck leaves.

5. **Zero-setup onboarding.** Enter trade, upload logo, generate first quote in under 2 minutes. No pricebook configuration, no onboarding call, no supplier integration. The #1 barrier to AI adoption in trades is training and integration complexity (44% cite this per ServiceTitan 2026). QuoteDrive removes that barrier entirely.

6. **Good/Better/Best tier presentation.** Three-column PDF showing three pricing options simultaneously — the only affordable tool supporting this format that drives average ticket upgrades when presented on-site.

## Project Classification

- **Project Type:** Mobile Application (iOS and Android, native-feel PWA or React Native)
- **Domain:** Construction / Trade Services — medium complexity (property data API dependencies, e-signature legal requirements, SMS delivery, AI pricing; no healthcare/financial compliance)
- **Complexity:** Medium — relies on third-party APIs (ATTOM/Estated, Stripe, Twilio/SMS, e-sign), requires offline capability, mobile-first UX constraints
- **Project Context:** Greenfield — new product built from scratch, no existing codebase or legacy integrations

## Success Criteria

### User Success

- **Quote creation speed:** Average time from address entry to PDF sent is under 5 minutes for 90% of sessions after onboarding, validating the core "driveway quoting" promise
- **First quote completion:** Users complete their first quote within 10 minutes of signup, confirming zero-friction onboarding
- **Quote-to-signature time:** Average time from "quote sent" to "homeowner signs" under 24 hours; on-site signature rate (signed before contractor leaves) exceeds 25% of all quotes sent
- **Close rate impact:** Users self-report 10%+ improvement in quote close rate within 60 days — the primary economic argument for the product
- **Property data accuracy:** ATTOM/Estated property data loads correctly for 80%+ of US residential addresses entered by contractors
- **Template fit:** 70%+ of users adjust AI-suggested prices by less than 20%, indicating pricing suggestions are useful rather than ignored
- **E-signature adoption:** 60%+ of quotes sent result in homeowner opening the quote; 40%+ of opened quotes receive an e-signature response (accept or decline)
- **Aha moment:** Contractor receives a signed quote notification while still rolling up their equipment at the customer's property

### Business Success

- **Pre-launch validation (Month 0–2):** 10 real contractors from trade communities (r/Roofing, r/painting, contractor Facebook groups) complete 3+ quotes each using the beta; 8 of 10 report time reduction
- **LTD launch (Month 3–6):** $30K–$100K in LTD revenue (150–500 customers) from AppSumo at $199; AppSumo rating of 4.5+ stars; 2+ publicly shareable testimonials with quantified close rate data
- **MRR transition (Month 6–12):** $5K–$20K MRR from $49–79/mo subscribers; monthly churn under 5%
- **Year 1 target:** 1,000+ active MRR customers; $600K–$1.5M ARR run rate; expand to 3 trade verticals
- **Community presence:** 100+ organic upvotes on initial demo posts in trade subreddits; zero paid advertising in month 1–3

### Technical Success

- **Property data reliability:** ATTOM/Estated API returns valid data within 3 seconds for 95%+ of US residential addresses during normal operations; graceful manual fallback for coverage gaps
- **PDF quality:** Generated PDF opens cleanly on iOS Mail, Gmail, Android, and any desktop browser; renders consistently without rendering artifacts
- **SMS delivery rate:** Quote delivery via SMS achieves 95%+ delivery success on US phone numbers
- **E-signature legal compliance:** Signature capture includes IP address, timestamp, geolocation metadata meeting e-sign legal standards (ESIGN Act)
- **Follow-up automation:** Auto follow-up texts sent within ±5 minutes of the scheduled 48-hour window after quote is sent
- **Mobile performance:** App loads in under 3 seconds on 4G; quote generation flow completes end-to-end with no crashes on iOS 16+ and Android 12+

### Measurable Outcomes

| Metric | Baseline (Industry) | Target (QuoteDrive Users) | Measurement |
|---|---|---|---|
| Time to generate quote | 45 minutes | < 5 minutes | Session duration from address entry to PDF sent |
| Quote close rate | 22% (manual) | 35%+ | Signed quotes / total quotes sent (user-reported) |
| Quotes sent per user/week | 4–6 | 8–12 | Quote send events per user per week |
| Time from site visit to quote sent | 2–24 hours | < 10 minutes | Timestamp from session start to send event |
| E-signature completion rate | N/A | 40%+ of quotes opened | Signatures / quotes opened |
| D7 retention | N/A | 60%+ | Users who quote in week 1 and return in week 2 |
| D30 retention | N/A | 40%+ | Active users at day 30 of cohort |
| NPS at 60-day cohort | N/A | 50+ | In-app survey |
| AppSumo rating | N/A | 4.5+ | AppSumo platform |

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete "driveway quote-to-close" workflow for one trade vertical (roofing or painting, chosen by first 5 beta contractors). Every feature below is necessary for the core promise; nothing is optional.

**Core Capabilities:**

1. **Address → property data auto-fill** — Street address input triggers ATTOM/Estated lookup; lot size, square footage, building type, year built pre-fill in the quote. Manual entry fallback for any field.
2. **Trade-specific template library** — Pre-built line item library for the chosen launch trade (roofing: squares, underlayment, ice/water shield, ridge cap, drip edge, labor, permits, debris removal; OR painting: interior rooms with auto-calculated paint gallons, exterior sq footage, primer, labor, prep). Line items have description, unit, unit price (editable), and AI-suggested default.
3. **AI pricing suggestions (v1 static)** — Regional market rates as starting points, clearly labeled "suggested." User always overrides freely.
4. **Good/Better/Best quote format** — Optional three-tier PDF layout presenting three pricing options side-by-side (e.g., repair-only / repair + protection / full replacement).
5. **Contractor profile and branding** — Company name, logo upload, license number, phone, email. All appear in the PDF header.
6. **PDF generation** — Professional branded PDF: quote number, date, customer name/address, itemized line items, subtotal, tax, total, payment terms, validity period, contractor branding.
7. **SMS delivery to customer** — One tap sends quote PDF link to customer's phone number. No app download required for homeowner.
8. **Email delivery** — Alternative to SMS; quote PDF sent as email attachment or link.
9. **Quote opened notification** — Contractor receives push notification when customer opens the quote link.
10. **E-signature collection** — In-browser signature on customer's phone (no app install). Contractor receives notification + signed PDF copy with IP, timestamp, geolocation.
11. **Quote dashboard** — List view of all quotes with status (Draft, Sent, Opened, Signed, Rejected, Expired). Filter by date, status. Find any quote in < 10 seconds.
12. **Follow-up automation** — If quote not signed in 48 hours → auto send one follow-up text. Editable message template. Toggle on/off per quote.
13. **Duplicate quote** — Copy any previous quote with all line items to a new customer.
14. **Offline draft capability** — Save draft quotes when offline; sync when connectivity returns.

**MVP Validation Gates (before AppSumo launch):**

- Gate 1 (Technical, Week 6): Property data loads for 80%+ of test addresses; quote flow completes in < 5 min for 90% of sessions; PDF renders on iOS Safari and Chrome Android; e-sign works end-to-end in 100% of test cases
- Gate 2 (User, Week 8): 10 beta contractors complete 3+ quotes each; 8/10 report time reduction; 5/10 report at least 1 on-site signature; average App Store rating from beta: 4.0+
- Gate 3 (Market, Week 10): 50+ demo signups from community posts without paid ads; 30%+ trial-to-LTD conversion; 2+ shareable testimonials with quantified results

All 3 gates must pass before AppSumo launch.

### Growth Features (Post-MVP)

- AI pricing calibration from user's own job history (after 5+ completed jobs, pricing suggestions update from actual data)
- Multi-trade expansion: HVAC, plumbing, electrical, concrete/fencing (total 5 trades within 12 months)
- AI vision estimating: photo upload → GPT-4o Vision reads roof pitch, wall area, room dimensions → auto-populates line items
- Multi-user team accounts: team lead configures templates and pricing floors; techs use app in field; owner sees cross-team dashboard
- Quote → invoice conversion: one-tap convert signed quote to invoice with payment link (Stripe)
- QuickBooks / Jobber sync: signed quotes push to accounting/FSM platform
- Customer portal: homeowner self-service view of quotes, signed contracts, and warranty info
- Flat-rate pricebook import: trade-specific pricing databases (replaces Profit Rhino for plumbing/HVAC)
- Review request automation: post-completion SMS requesting Google/Yelp review

### Vision (Future)

- **Category leadership:** Become the default quoting tool for 500K+ solo US residential trade contractors — the first app they open at a job site, before they need anything else
- **Marketplace:** Homeowners searching for trade work can find contractors who use QuoteDrive (professional quote delivery = verified trust signal)
- **Embedded financing:** Homeowner selects financing option at quote signing → instant approval → contractor gets paid upfront via lending partner
- **Community pricing intelligence:** Aggregated anonymous pricing from 10K+ contractors per metro → real-time "your pricing is 12% below market" alerts
- **Insurance integration:** Quote + property data → instant contractor liability rate quote (embedded insurance partnership)
- **Trade school partnerships:** Vocational programs bundle QuoteDrive subscription as part of curriculum — every graduating HVAC or roofing tech gets the habit on day one
- **B2B white-label API:** Sell the quote engine as a module to Jobber/HCP — distribution play leveraging existing FSM user bases

## User Journeys

### Journey 1: Marcus — The Solo Roofer Closes a Job in the Driveway

**Opening Scene:** Marcus is 38, runs a 2-person roofing crew in suburban Ohio. He's standing in a homeowner's driveway after walking the roof. His current process: drive home, open the laptop, fill in the Word template he built in 2019, screenshot it to PDF, email it. By the time the quote lands the next morning, the homeowner has already accepted a faster competitor. Marcus loses 40% of quotes to speed alone — not pricing. He knows his pricing is right. He's tired of losing bids on paperwork.

**Rising Action:** A fellow roofer posts in r/Roofing: "I quoted a roof in 4 minutes and the homeowner signed before I got back to my truck — here's what I used." Marcus watches the 90-second demo video, downloads QuoteDrive, uploads his logo, and enters his trade. Setup: under 2 minutes. He drives to his next assessment.

**Climax:** Standing in the new homeowner's driveway, Marcus opens QuoteDrive and types the address. Three seconds later: 2,400 sq ft, split-level, built 1987, roof pitch 7/12 — all pre-filled. He taps the roofing template: selects 26 squares of architectural shingles, underlayment, ice/water shield at eaves, ridge cap, debris removal, labor. QuoteDrive suggests $9,800; Marcus bumps labor to $10,400. He selects "Good/Better/Best" format: Good (shingles replacement), Better (+ ice dam protection upgrade), Best (+ 50-year shingle and transferable warranty). One tap: branded PDF generated. He texts it to the homeowner from the app. The homeowner opens it on their phone while Marcus is still in the driveway. They tap "Better" and sign with their finger. Marcus's phone buzzes: signature received.

**Resolution:** Marcus closes the job before his truck moves. His close rate climbs from 22% to 38% in the first 8 weeks. He reclaims 6.5 hours per week from evening quoting paperwork. He posts in r/Roofing: "I've been using QuoteDrive for 3 months — close rate went from 22% to 38%. Here's what changed." 847 upvotes. 60 new signups that day.

**Requirements Revealed:** Address → property data auto-fill, roofing template library, Good/Better/Best PDF layout, one-tap PDF send via SMS, real-time quote open notification, in-browser e-signature, signed quote notification.

---

### Journey 2: Diana — The Painting Contractor Tracks Every Quote

**Opening Scene:** Diana is 31, runs a 3-person interior/exterior painting crew in Texas. She has a 25% close rate and suspects it's low — but she has no way to know which quotes got opened, which got ignored, and which lost to price versus timing. She currently uses Canva templates (beautiful but slow: 30+ minutes per quote) and sends PDFs by email. No follow-up system. She texts manually 2 days later to check in.

**Rising Action:** Diana hears about QuoteDrive from a painting contractor Facebook group. She signs up, sets her trade as Painting, uploads her crew's logo, and generates her first quote in the group member's driveway — 4 minutes start to finish.

**Climax:** Diana measures a 3-bedroom house interior. She opens QuoteDrive, types the address (square footage auto-pulls), selects the painting template: 3 bedrooms → paint gallons auto-calculated from dimensions → 2 coats → primer → trim → labor per room. She edits two prices, hits Generate, and sends via SMS. She drives to her next appointment. Ten minutes later, her phone buzzes: "Customer opened your quote." Driving to a third appointment, another buzz: "Customer signed quote #47." She glances at the screen at a red light — $4,800 painting job, signed before lunch.

The following day, she checks the dashboard: 8 quotes sent this week, 6 opened, 3 signed, 2 pending follow-up (auto-follow-up texts scheduled in 24 hours), 1 rejected.

**Resolution:** Diana's close rate improves from 25% to 40% in 6 weeks. Her "quote sent → signed" average time drops from 48 hours to 6 hours. She eliminates 4 hours per week of manual Canva quote-building. She expands to 20+ quotes per week because quoting is no longer the bottleneck. She tells her painting group: "QuoteDrive replaced Canva. 4 minutes per quote, I can see who opened it, and the follow-up texts go out automatically."

**Requirements Revealed:** Painting trade template with room-based dimensions and auto-calculated paint volumes, AI pricing suggestions, quote status dashboard (opened/signed/pending/rejected), push notifications for quote events, automatic 48-hour follow-up text, quote pipeline management.

---

### Journey 3: Ray — The HVAC Tech Upsells On-Site with Three Options

**Opening Scene:** Ray is 45, runs a solo HVAC service and installation business in the Midwest. He's highly technical but struggles with the business side. He currently uses Housecall Pro for scheduling but creates quotes manually in Excel because HCP's template system is too clunky for his repair-plus-upgrade quoting style. He doesn't offer Good/Better/Best because building a three-tier Excel quote takes 20 minutes. He knows Profit Rhino ($150/mo) would help but can't justify it for a solo shop. He loses bids waiting overnight to send quotes.

**Rising Action:** Ray discovers QuoteDrive after it appears in a Housecall Pro user forum thread. He signs up, selects HVAC, and starts his first quote on a condensate drain job.

**Climax:** On-site at a residential repair call, Ray diagnoses a clogged condensate drain and worn capacitor. He opens QuoteDrive, types the address (year built: 2006, 2,100 sq ft, single-family auto-pulled). He selects from the HVAC template: condensate drain clear + flush, capacitor replacement, labor. He taps "Good/Better/Best": Good (drain + capacitor repair), Better (repair + seasonal tune-up), Best (repair + 1-year maintenance plan + priority scheduling). AI suggests $380/$620/$890. Ray adjusts to $420/$680/$975. He generates the PDF and hands his phone to the homeowner. The homeowner reads the three options, picks Better ($680), and signs with their finger. Ray calls out the pricing on the spot: no spreadsheet, no follow-up phone tag, no leaving and emailing hours later.

**Resolution:** Ray's average ticket increases $200/job because 35% of homeowners choose Better or Best when presented with a clear three-option format — a format they never saw before QuoteDrive. He closes more than half his quotes on-site. He cancels Profit Rhino ($150/mo) and his Excel template. QuoteDrive at $49/mo replaces both.

**Requirements Revealed:** HVAC trade template, Good/Better/Best format with editable tier names and prices, in-person quote delivery flow (hand phone to homeowner to sign), AI pricing suggestions, three-tier PDF.

---

### Journey 4: The Homeowner — Professional vs. Amateur in 10 Seconds

**Opening Scene:** Sarah needs her aging roof repaired after a hailstorm. She calls three contractors. Contractor A says "I'll email you something by tomorrow." Contractor B writes "$8,500" on a business card. Marcus (using QuoteDrive) says "Let me send this to you right now."

**Rising Action:** Sarah's phone buzzes with a text from Marcus: "Here's your quote — tap to view." She opens a clean, professional page on her phone browser: Marcus's company logo, Ohio State License #RC-34792, phone number. Below: itemized line items (26 squares GAF Timberline HDZ, underlayment, ice/water shield at eaves, ridge cap, debris removal, labor), a photo of her existing roof damage, and three options: Good ($9,400), Better ($10,400, highlighted), Best ($13,200). At the bottom: a green "Accept & Sign" button.

**Climax:** Sarah reads through both other quotes — Contractor A's Excel email arrives 18 hours later with no photos, no breakdown. Contractor B's business card is on her kitchen counter. Marcus's quote shows exactly what she's paying for, proves he measured the roof (satellite data matches exactly), and she can sign immediately without calling back. She taps Better, signs with her finger, sees "Signed — a copy has been sent to your email."

**Resolution:** Sarah tells her neighbor: "Use Marcus — he was the only one who sent a real quote, with photos, and I could sign from my phone." Marcus gets the referral call before his truck is back on the highway. The professional presentation creates trust that closes the sale; the speed prevents the comparison shopping that kills close rates.

**Requirements Revealed:** Customer-facing quote view optimized for mobile, no account required for homeowner, three-option layout with one highlighted, in-browser e-signature with finger, PDF copy to homeowner's email on signing, trust elements (logo, license, contact info, jobsite photos).

---

### Journey 5: Quote Dashboard — Managing a Week of Bids

**Opening Scene:** It's Friday at 5 PM. Marcus sent 14 quotes this week. He opens QuoteDrive's dashboard to assess his pipeline before the weekend.

**Rising Action:** The dashboard shows: 2 drafts (incomplete site assessments), 4 sent (awaiting customer), 3 opened (viewed but not signed), 4 signed with e-signature, 1 rejected. He sees one $11,200 roofing job has been "opened" 5 times but not signed — the homeowner is clearly considering. He taps the quote, sees the timeline: sent Tuesday 4 PM, first opened Tuesday 8 PM, opened again Wednesday 11 AM, Thursday 9 AM, Friday 2 PM. Auto follow-up text went out Thursday 4 PM. No response. He sends a personal text. The homeowner responds within the hour: "Sorry, we just have a few questions about the warranty."

**Resolution:** Marcus closes that job Monday morning — the second-highest ticket of the week — because the dashboard showed him who to follow up with and when. Without the dashboard, that quote would have expired silently. He closes 12 of 14 quotes for the week: 86% close rate, up from 40% before QuoteDrive.

**Requirements Revealed:** Quote status dashboard with all statuses visible (Draft/Sent/Opened/Rejected/Signed/Expired), view count and timeline per quote, filter and search, auto follow-up log showing when texts were sent and whether read, manual text from within dashboard, quote expiration.

### Journey Requirements Summary

| Journey | Key Capabilities Revealed |
|---|---|
| Marcus (Solo Roofer) | Property data auto-fill, roofing template, G/B/B format, SMS delivery, view notification, e-sign, on-site close |
| Diana (Painting Contractor) | Painting template with auto paint calc, quote dashboard, status tracking, follow-up automation, pipeline management |
| Ray (HVAC Tech) | HVAC template, 3-tier pricing format, in-person sign flow, AI pricing suggestions, per-tier names |
| Sarah (Homeowner) | Mobile-optimized view, no-account e-sign, 3-option layout, trust elements (logo/license/photos), signed PDF copy |
| Dashboard Management | Status pipeline, view timeline, follow-up log, filter/search, expiration tracking, manual outreach from dashboard |

## Innovation & Novel Patterns

### Detected Innovation Areas

QuoteDrive combines four innovation vectors into a product no competitor has assembled for the residential trade contractor market at an accessible price point:

**1. Address-to-Property-Data in a Quoting Context**
Using property data APIs (ATTOM, Estated) to auto-populate quote parameters from a street address is a genuinely novel application in this market segment. Enterprise estimating platforms (PlanSwift, Bluebeam) work from blueprints or uploaded drawings. No affordable residential contractor quoting tool auto-pulls lot size, square footage, building type, or year built from an address. This eliminates the single most friction-heavy step for roofers and painters: measuring the property. The data arrives in 3 seconds; a manual measurement takes 15–30 minutes. At ~$0.002–0.01/lookup cost, the economics work at every pricing tier.

**2. On-Site E-Signature as a Revenue Multiplier**
Most quoting tools treat e-signature as an afterthought — an integration with DocuSign or a PDF attachment. QuoteDrive makes on-site signature the core designed outcome: generate → send → hand phone to homeowner → they sign while contractor is present. The "closed before I left the driveway" moment is the product's aha experience and its primary organic growth driver (contractors evangelize this outcome). No other affordable tool is designed around this specific moment.

**3. Good/Better/Best as Standard Format**
Three-tier quoting (Good/Better/Best) is the most-requested missing feature across all mid-tier FSM platforms per community research. Contractors who present three options close at higher rates and sell more upgrades — but building a three-tier quote manually takes 20+ minutes. QuoteDrive makes it a one-tap toggle: select G/B/B layout, fill three price columns, generate. This drives average ticket increase (35% of homeowners choose Better or Best when the format is available) which strengthens the ROI case for contractors paying $49–79/mo.

**4. Community-First Distribution as Innovation**
Using demo posts in trade subreddits and contractor Facebook groups as the primary growth engine — not paid advertising — creates a trust moat that SaaS companies with larger marketing budgets cannot replicate easily. Contractors are a peer-trust community: a post that says "I closed a job in the driveway — here's how" from a real contractor carries more weight than any ad. This is the same distribution insight that built Jobber's early community presence.

### Market Context and Competitive Landscape

Rebar's $14M Series A (March 2026) validates AI-powered trade estimating as an investment-grade category. Rebar reads commercial blueprints and generates HVAC/electrical/plumbing equipment quote packages for suppliers — not residential contractors. That gap between commercial-supplier AI and residential-contractor AI is exactly QuoteDrive's position. Rebar's funding validates the category; their commercial focus validates the residential white space.

ToolsAI's Show HN (3 points, 3 comments — early traction) shows demand exists for AI quote generation for "blue-collar" businesses, but the execution is text-input only with no property data, no mobile-first UX, and no e-signature flow. The demand is real; the execution leaves the market open.

ServiceTitan's 2026 State of AI in the Trades report: only 12% of contractors have embedded AI in operations despite 66% expecting major transformation within 1–3 years. The #1 barrier: training and integration complexity (44%). QuoteDrive's zero-setup positioning is the direct answer to this barrier.

### Validation Approach

- **Property data coverage:** Test 500 US residential addresses across rural, suburban, and urban zip codes. Target: 80%+ return valid data. Publish coverage results publicly to build contractor trust.
- **Template fit:** Measure price override rate per line item. If contractors override suggested prices by > 30% on average for a line item, reprice that item using community data.
- **G/B/B adoption:** Track what percentage of quotes use the three-tier format. Target: 30%+ of quotes use G/B/B within 60 days of launch.
- **On-site signature rate:** Track time from quote sent to signature received. Target: 25%+ of signed quotes are signed within 30 minutes of send (proxy for on-site close).

### Risk Mitigation

- **Property data API gaps:** Rural areas have lower coverage. Mitigation: always display a coverage indicator; manual entry fields available for every auto-filled field. Rural contractors are not the primary launch audience.
- **AI pricing inaccuracy at launch:** V1 uses market research rates, not ML. Every suggestion is labeled "suggested — adjust to your market." User override data trains v2 pricing. Expectation set correctly from day one.
- **Good/Better/Best complexity increases quote time:** Template defaults for each tier keep initial G/B/B quote generation under 7 minutes even for new users. Contractors can save tier templates for reuse.

## Mobile Application Specific Requirements

### Project-Type Overview

QuoteDrive is a mobile-first application for iOS and Android, optimized for jobsite use: one-handed operation, large tap targets, glove-compatible UX, and a flow that begins and ends in a contractor's driveway. The customer-facing quote view is a web page accessible from any phone browser without app installation.

**Delivery architecture options (to be finalized in technical architecture):**
- React Native (recommended): single codebase for iOS and Android, native-feel performance, access to camera and push notifications
- Progressive Web App (PWA): lower development cost, no App Store friction, limited push notification support on iOS
- Decision gate: if iOS push notification support for "quote opened" and "quote signed" events is deemed critical for MVP (it is), React Native is preferred

### Technical Architecture Considerations

**Platform Support:**
- iOS 16+ (primary — majority of US contractors)
- Android 12+ (secondary)
- Customer-facing quote view: any mobile browser, no version restriction

**Offline Capability:**
- Draft quote creation and editing offline; sync on connectivity restore
- Template library and line item data cached locally at app launch
- Quote dashboard reads from local cache when offline; shows "last synced" timestamp

**Camera and Device Integration:**
- Jobsite photo capture from device camera within the app
- Photo gallery selection as fallback
- Client-side image compression before upload (target: under 500KB per photo)
- EXIF metadata stripped from photos before customer delivery (privacy)

**Push Notification Events (critical for MVP):**
- Quote opened by customer
- Quote signed by customer
- Quote declined by customer
- Auto follow-up text sent (confirmation to contractor)

**SMS Integration:**
- Twilio or equivalent for SMS delivery of quote links
- Delivery status tracking (delivered / failed) surfaced in quote dashboard
- Follow-up automation engine: rule-based trigger at 48 hours post-send if no e-signature

**Property Data API:**
- Primary: ATTOM Data Solutions or Estated (evaluate coverage, cost, and latency at architecture stage)
- Cost target: under $0.01 per lookup at scale
- Fields required: square footage (gross living area), lot size, building type, year built, stories, roof type (if available)
- Fallback: every auto-filled field has a manual override input

**E-Signature:**
- In-browser signature (finger on touchscreen, or mouse on desktop)
- Records: full name (typed), IP address, device timestamp, GPS coordinates (homeowner's location), user agent string
- Legal standard: compliant with US ESIGN Act and UETA
- Signed PDF: overlay signature image and metadata onto original quote PDF

**PDF Generation:**
- Server-side generation (not client-side) for consistent rendering across devices
- Target generation time: under 3 seconds for quotes with up to 10 line items and 5 photos
- Good/Better/Best layout: three-column table with tier names, per-tier line items, per-tier totals, and recommended tier highlighted

### Implementation Considerations

**App Store Distribution:**
- Target App Store and Google Play launch (not PWA-only) to enable push notifications and trust signals
- Apple Developer account and Google Play Console required during development
- App Store review lead time: plan 2 weeks for initial review

**Data Privacy:**
- Contractor business data isolated per account; no cross-contractor data access
- Customer quote data (name, address, phone) stored only as long as quote is active or archived
- ATTOM/Estated property data used only for quote population; not stored beyond the quote lifecycle

**Stripe Connect:**
- Required for future payment collection features (deposit collection in v2, not MVP)
- Architecture should not preclude Stripe integration; avoid payment-hostile data models
- MVP: quote generates signed contract PDF only; no payment collection in MVP

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP focused on a single transformational moment — the contractor closes a job in the driveway before the truck moves. Every MVP feature serves that moment directly. The MVP is aggressively scoped to one trade vertical to achieve depth over breadth.

**Resource Requirements:** Solo developer or 2-person team (full-stack mobile + backend). React Native or PWA, Node.js/Python API, Postgres or equivalent, Twilio, ATTOM/Estated, PDF generation service (Puppeteer or similar). Estimated 6–8 weeks to testable beta. $50–150/month in API costs at launch scale.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo contractor generates and sends professional quote from phone while on-site (Journeys 1, 2, 3)
- Homeowner receives, reviews, signs quote from their phone browser (Journey 4)
- Contractor tracks quote pipeline and manages follow-ups (Journey 5)

**Must-Have Capabilities:**
1. Street address input → ATTOM/Estated property data auto-fill with manual override
2. One trade vertical template library (roofing OR painting — decided by first 5 beta contractors)
3. Line item selection from template library, with quantities and per-unit pricing
4. AI-suggested prices (v1 static market rates, labeled "suggested")
5. Good/Better/Best three-tier optional format with per-tier pricing
6. Contractor profile: company name, logo upload, license number, phone, email
7. Professional branded PDF generation (single-tier and three-tier layouts)
8. SMS delivery of quote link to customer phone number
9. Email delivery as alternative to SMS
10. Quote opened push notification to contractor
11. In-browser e-signature (no app install for homeowner); records IP/timestamp/GPS
12. E-signature received push notification to contractor + signed PDF saved
13. 48-hour auto follow-up text (one attempt, editable template, toggle per quote)
14. Quote dashboard with status (Draft/Sent/Opened/Signed/Rejected/Expired)
15. Quote duplication for repeat job types
16. Offline draft creation with auto-sync

### Post-MVP Features

**Phase 2 (Months 4–9 — Growth):**
- AI pricing calibration from contractor's own job history (after 5+ completed quotes)
- Multi-trade expansion: HVAC, plumbing, electrical (3 additional trades)
- Multi-photo attachment per quote (up to 10 photos; MVP: up to 3)
- Quote → invoice conversion with Stripe payment link
- Deposit collection (Stripe Connect): fixed dollar or percentage of total
- Team accounts: shared templates, pricing floors, cross-team quote dashboard
- QuickBooks CSV export for completed jobs
- Quote analytics: close rate trend, average ticket size, time-to-sign histogram

**Phase 3 (Months 10–18 — Expansion):**
- GPT-4o Vision photo-to-estimate: upload photos → AI reads roof pitch, room dimensions, wall area → auto-populates line items
- Flat-rate pricebook module: full HVAC/plumbing pricebook, Good/Better/Best pre-built per repair type
- Customer portal: homeowner view of all quotes, signed contracts, service history
- Jobber/HCP integration: signed quotes push as jobs into connected FSM platform
- Review request automation: post-signature SMS requesting Google review
- Multi-language: Spanish templates for Spanish-speaking contractor market

### Risk Mitigation Strategy

**Technical Risks:**
- *Property data API coverage gaps:* Mitigation: test 500 addresses pre-launch; show coverage indicator in app; manual override for every field; do not block quote creation on API failure
- *PDF rendering inconsistency across email clients:* Mitigation: server-side PDF generation (not client-side); test on iOS Mail, Gmail app, Android default, and major desktop email clients before beta
- *Push notification delivery on iOS (if PWA):* Mitigation: if PWA chosen, fall back to email notifications for quote events; reconsider React Native if push reliability is unacceptable in beta

**Market Risks:**
- *Jobber ships address auto-fill as a feature:* Mitigation: launch fast; build community presence before incumbents react; trade-specific template depth and G/B/B format are harder to copy than a single API call
- *SimplyWise adds e-sign and follow-up:* Mitigation: property data auto-fill is the differentiator SimplyWise cannot replicate without a backend re-architecture; community presence builds brand moat
- *Community skepticism in trade subreddits:* Mitigation: founder posts as a real person (not anonymous corporate); shares actual numbers from beta; no "spray and pray" marketing

**Resource Risks:**
- *API costs higher than projected:* Mitigation: ATTOM/Estated lookups cached per address for 30 days; rural contractors with low API coverage hit manual entry more often (lower cost); $0.01/lookup × 500 quotes/day = $150/month at 500 active users
- *6-week timeline slips to 10 weeks:* Mitigation: MVP scope is defensible — address auto-fill + one trade template + PDF + SMS + e-sign. If time pressure increases, defer follow-up automation to week 2 post-launch (it can be added without architecture changes)

## Functional Requirements

### Quote Creation & Property Data

- FR1: Contractor can enter a street address and trigger automatic property data lookup (square footage, lot size, building type, year built)
- FR2: Contractor can manually edit any auto-populated property field before quote generation
- FR3: Contractor can create a new quote without address lookup using fully manual entry
- FR4: Contractor can select a trade template to start a new quote (one trade in MVP, multiple in growth)
- FR5: Contractor can add line items from the trade template library to the quote
- FR6: Contractor can create custom line items not in the template library
- FR7: Contractor can edit line item description, quantity, unit, and unit price
- FR8: Contractor can remove any line item from a quote
- FR9: Contractor can add free-text job notes and scope description to a quote
- FR10: System auto-calculates subtotal, tax (at configurable rate), and total as line items are added or modified
- FR11: Contractor can save a quote as a draft and return to edit it later
- FR12: Contractor can duplicate any existing quote to a new quote with pre-filled line items

### AI Pricing Suggestions

- FR13: System displays a regional market rate suggestion for each line item, clearly labeled "suggested"
- FR14: Contractor can accept, adjust, or ignore AI-suggested prices freely — suggestions are never locked
- FR15: System displays a visual indicator when a contractor's entered price deviates significantly from the suggested price (> 30% above or below)

### Good/Better/Best Format

- FR16: Contractor can toggle a quote between single-tier and three-tier (Good/Better/Best) formats
- FR17: In three-tier mode, contractor can name each tier (defaults: "Good," "Better," "Best")
- FR18: Contractor can assign different line items and prices to each tier independently
- FR19: Contractor can mark one tier as "recommended" for highlighting in the PDF
- FR20: System generates both single-tier and three-tier PDF layouts from the same quote data

### PDF Generation and Branding

- FR21: System generates a professional branded PDF from any quote in under 3 seconds
- FR22: PDF displays contractor company name, logo, license number, phone, email, and company address
- FR23: PDF displays customer name, property address, quote date, quote number, and quote validity period
- FR24: PDF displays all line items with description, quantity, unit, unit price, and line total
- FR25: PDF displays subtotal, tax rate and amount, and grand total
- FR26: PDF displays payment terms and contractor notes/scope description
- FR27: In three-tier mode, PDF displays all three tiers side-by-side with a "recommended" highlight on the selected tier
- FR28: PDF includes attached jobsite photos (up to 3 in MVP, up to 10 in growth)

### Quote Delivery

- FR29: Contractor can send the quote PDF link to the customer via SMS (one tap)
- FR30: Contractor can send the quote PDF link to the customer via email
- FR31: System tracks SMS delivery status (delivered / failed) and surfaces it in the quote dashboard
- FR32: Customer can view the full quote from the SMS/email link in any mobile browser without creating an account
- FR33: Customer-facing quote view is optimized for mobile: readable on any phone screen, no horizontal scroll

### Quote Opened Notifications

- FR34: Contractor receives a push notification when a customer opens the quote link for the first time
- FR35: Quote dashboard records and displays a view count and first-opened timestamp for each quote
- FR36: Contractor can see a timeline of quote events (sent, opened N times, signed, rejected) within the quote detail view

### E-Signature Collection

- FR37: Customer can sign the quote electronically from the quote link (finger on touchscreen or mouse)
- FR38: System records IP address, device timestamp, GPS coordinates, and user agent at time of signature
- FR39: Customer can optionally decline the quote with a reason (free-text field)
- FR40: Contractor receives a push notification when a customer signs or declines a quote
- FR41: System generates a signed PDF with signature image and metadata overlaid on the original quote
- FR42: Signed PDF is accessible to both contractor (in dashboard) and customer (emailed copy automatically)

### Follow-Up Automation

- FR43: System sends one automatic follow-up SMS to the customer 48 hours after quote is sent if no signature has been received
- FR44: Contractor can toggle follow-up automation on or off per quote before sending
- FR45: Contractor can edit the follow-up message template in their profile settings
- FR46: Quote dashboard shows whether an auto follow-up was sent and at what time

### Quote Dashboard and Pipeline Management

- FR47: Contractor can view all quotes in a list with current status (Draft, Sent, Opened, Signed, Declined, Expired)
- FR48: Contractor can filter quotes by status and by date range
- FR49: Contractor can search quotes by customer name or address
- FR50: Contractor can view full quote details including line items, status timeline, and signed PDF (if applicable)
- FR51: System automatically sets quotes to "Expired" status after a configurable number of days (default: 30 days after send date)

### Contractor Profile and Settings

- FR52: Contractor can set up business profile: company name, logo upload, license number, phone, email
- FR53: Contractor can select their primary trade (determines default template library)
- FR54: Contractor can configure a default tax rate applied to new quotes
- FR55: Contractor can configure default payment terms text displayed on quotes
- FR56: Contractor can set quote validity period default (default: 30 days)

### Authentication and Account

- FR57: Contractor can create an account with email and password
- FR58: Contractor can log in from any device and access all their quotes and profile
- FR59: Contractor can reset their password via email verification link
- FR60: System preserves offline-created draft quotes and syncs them when the device reconnects

## Non-Functional Requirements

### Performance

- NFR1: Property data lookup completes and populates quote fields within 3 seconds on a 4G connection for 95% of requests
- NFR2: PDF generation completes within 3 seconds for a quote with up to 10 line items and 5 photos
- NFR3: App initial load (from cold start) completes in under 4 seconds on a 4G mobile connection
- NFR4: Quote list dashboard renders up to 200 quotes with smooth scrolling (no perceptible lag)
- NFR5: SMS delivery confirmation appears in the quote dashboard within 30 seconds of send

### Security

- NFR6: All data transmitted over HTTPS/TLS 1.2+; no unencrypted communication channels
- NFR7: Contractor passwords hashed with bcrypt (minimum cost factor 12)
- NFR8: Customer quote view links use unguessable tokens (minimum 128-bit entropy per quote)
- NFR9: Contractor data fully isolated — no contractor can access another contractor's quotes, customers, or profile data
- NFR10: Session tokens expire after 30 days of inactivity; re-authentication required after expiry
- NFR11: Jobsite photos stripped of EXIF metadata (GPS coordinates, device identifiers) before delivery to customer-facing quote view
- NFR12: E-signature metadata (IP, GPS, timestamp) stored immutably — cannot be deleted or edited after signature is captured

### Scalability

- NFR13: System supports 5,000 concurrent active users (expected peak after AppSumo launch) without degrading to above NFR1–NFR2 performance targets
- NFR14: Database architecture supports 1 million quotes without dashboard query times exceeding 500ms
- NFR15: Property data API lookup costs remain under $0.01/lookup through caching (same address within 30 days returns cached result)

### Reliability

- NFR16: 99.5% uptime during US contractor working hours (6 AM–8 PM local time, Monday–Saturday) as measured by external uptime monitoring
- NFR17: Offline draft quotes sync to server within 60 seconds of connectivity restoration, with zero data loss
- NFR18: If property data API is unavailable, app continues to function — all property fields appear as manual-entry inputs without error state blocking quote creation
- NFR19: If SMS delivery fails, system retries once automatically and surfaces failure status in the quote dashboard with option to resend

### Accessibility

- NFR20: Customer-facing quote view and e-signature pages meet WCAG 2.1 AA standards (homeowners include all demographics and ability levels)
- NFR21: All interactive elements in the contractor app have minimum 44×44px touch targets (glove-compatible operation)
- NFR22: Color contrast ratios meet WCAG AA minimums (4.5:1 for body text, 3:1 for UI components and icons)
- NFR23: App is fully operable in bright sunlight (high-contrast mode supported; avoids light-gray-on-white patterns)

---

**PRD Completion Date:** 2026-05-03
**Input Sources:** Product brief (2026-05-03), market research report (2026-05-03), shortlisted idea evaluation (88/105 signal score, 9 independent tracking entries, 2026-03-05 through 2026-05-03)
**Confidence Level:** High — validated by $3.07B market size, Rebar $14M Series A category validation, ServiceTitan 2026 AI in Trades data, 9-month signal history, and clear competitive white space (no tool combines property data auto-fill + trade-specific templates + mobile-first UX + e-signature + AI pricing at $49–79/mo)
**Recommended Next Step:** Create technical architecture to define technology stack (React Native vs. PWA), property data API selection (ATTOM vs. Estated), data model, and API design

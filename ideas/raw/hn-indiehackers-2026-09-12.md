# HN & Indie Hackers Research — 2026-09-12

Sourced from: Hacker News (Show HN, Ask HN, discussions) and Indie Hackers (milestones, interviews, product posts).
Focus: boring business SaaS — trades, local services, logistics, construction, field service.

---

## Zirco.ai – AI Dental Front Desk (Insurance Verification + Scheduling)

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Additional Links**: https://zircoai.vercel.app/
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 point, 3 comments (minimal — but idea is strong)
- **Revenue Data**: Beta stage; 30+ dental practices in discovery; no public revenue
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices
- **Core Value Prop**: Full AI front desk: voice AI answers inbound calls, automatically verifies insurance via carrier APIs + Playwright browser automation (for portals without APIs), books directly into Dentrix/Open Dental/Eaglesoft, sends SMS/email reminders. Eliminates 2-3 hours/day of manual insurance verification. Front desk staff costs $40-50K/yr and turns over at 40% annually.
- **Gap/Opportunity**: Insurance verification requires logging into 10+ different carrier portals — nobody has solved this cleanly. HIPAA compliance, BAA agreements, and healthcare-grade reliability raise the moat. Existing solutions (Weave, Solutionreach) focus on comms, not workflow automation. Most dental practices still do insurance verification manually every morning.
- **Our Angle**: Narrow even further — start with just insurance verification (the 2-3 hour daily pain) as a standalone product before expanding to full front desk. Sell at $149-299/practice/month. Clear ROI: replaces $40K/yr employee on one task alone.
- **LTD Potential**: 2/5 (healthcare recurring billing is expected; LTD would undervalue the ROI story)

---

## DASHP – Pest Control Sales Team Commission Tracking

- **Source**: https://www.starterstory.com/stories/dashp
- **Additional Links**: N/A
- **Platform**: Indie Hackers / Starter Story
- **Type**: Revenue milestone / founder story
- **Engagement**: Featured on Starter Story
- **Revenue Data**: $100K ARR; bootstrapped; solo founder; no funding
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control (door-to-door sales)
- **Core Value Prop**: Helps pest control companies manage commission tracking, team performance, and communication for door-to-door sales reps. Previous solution: spreadsheets + emails. Salespeople couldn't see their pay in real time — "pay anxiety" was the problem.
- **Gap/Opportunity**: Very niche (pest control D2D sales), but that narrowness is the moat. Validated with first customer before building. Growth comes from upsells, not acquisition. Total ICP is "hundreds" of firms — which is enough for a lifestyle business but not VC scale. Shows that hyper-specific workflow pain beats generic CRM.
- **Our Angle**: Replicate the model in adjacent D2D sales verticals: HVAC installation crews, solar door knockers, home security sales. Commission + performance tracking is universal to these teams but nobody builds specifically for them.
- **LTD Potential**: 2/5 (B2B recurring; contracts mean LTD inappropriate)

---

## Isonq – CNC Machine Shop PDF/DXF/STEP to Quoting

- **Source**: https://news.ycombinator.com/item?id=48012600
- **Additional Links**: https://isonq.com/demo
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 2 points, 1 comment (very early/niche)
- **Revenue Data**: Live pilot at a Colorado CNC shop; v7.0.3 in production; no public revenue
- **Boring Business Score**: 5/5
- **Target Industry**: CNC machine shops / precision manufacturing job shops
- **Core Value Prop**: Reads PDF, DXF, DWG, and STEP files on the shop's own workstation. Extracts title block, dimensions, tolerances, threads, GD&T from 2D drawings. Cross-references with 3D STEP geometry. Auto-populates a priced quote and sends it. No per-drawing fees, no uploads — everything runs locally (Tauri + Rust). LLM layer (Ollama) reconciles 2D vs 3D geometry differences.
- **Gap/Opportunity**: Small job shops spend hours manually reading drawings and building quotes in spreadsheets. Larger shops use enterprise CAM software with embedded quoting ($10-50K/yr). Nothing exists in the $100-500/mo range for a 3-10 person shop. Privacy is a key concern — shops can't upload customer drawings to cloud tools (confidentiality agreements). Local-only processing is a genuine differentiator.
- **Our Angle**: Start with the simplest version: PDF/DXF → quote (skip 3D for now). Target shops that do one trade (sheet metal, turned parts, or welding) to reduce complexity. Price at $99-199/mo. Acquisition via machinist Facebook groups and r/machinists.
- **LTD Potential**: 4/5 (shops would pay $500-800 LTD to not have per-drawing fees; recurring revenue uneasy for small operators)

---

## Procore Gap Analysis – 5 Untouched Construction Markets Under $50/Month

- **Source**: https://www.indiehackers.com/post/procore-is-worth-8b-heres-what-they-don-t-build-and-won-t-e985092d14
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Market analysis / discussion (by ConTechFinder directory founder)
- **Engagement**: High engagement post, April 2026
- **Revenue Data**: Procore = $8B market cap. Construction software market = $14.35B by 2033. 1.5M US construction firms, most <10 employees.
- **Boring Business Score**: 5/5
- **Target Industry**: Small construction firms, solo contractors, trades
- **Core Value Prop**: Five specific opportunities Procore will never address (per-seat economics don't work at $29/mo):
  1. **$29/mo daily log app** for solo GCs with photo uploads + weather tagging (no PM in office, just a phone)
  2. **Single-trade takeoff tools** — roofing squares, HVAC ductwork — 6 trades with ZERO dedicated takeoff software
  3. **$49/mo OSHA checklist app** — cheapest serious safety software starts at $200/seat/mo; phone-first for 5-person crews
  4. **Residential remodeler CRM** — completely different workflow from commercial GC pipelines (Angi/Houzz leads, referrals)
  5. **$19-29/mo permit tracker** — only 1 product does multi-jurisdiction permits and it costs enterprise money
- **Gap/Opportunity**: 55% of construction software vendors won't show pricing without a sales call. Only 45% have a mobile app. Only 9% target solo operators. The indie price band ($19-49/mo) is genuinely empty.
- **Our Angle**: The permit tracker is the most compelling — universal need, no existing affordable option, compliance deadline urgency drives conversion. Could start as a simple permit status tracker + reminder system for solo GCs.
- **LTD Potential**: 5/5 (construction operators love one-time payments; many still pay for software in one-off ways)

---

## CraftBoop – Automated Customer Follow-Up for Service Businesses

- **Source**: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- **Additional Links**: https://www.craftboop.com
- **Platform**: Indie Hackers
- **Type**: Product launch / feedback request
- **Engagement**: April 2026 post; early stage
- **Revenue Data**: Just launched; few users; $29/mo; 14-day free trial
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbers, HVAC, cleaners, painters, landscapers
- **Core Value Prop**: After each job, automatically sends a 5-email sequence: thank you → Google review request → check-in → rebooking reminder → referral request. Add customer once, automation handles the rest. Solves the universal problem that service businesses do great work but never ask for reviews or repeat business.
- **Gap/Opportunity**: Jobber and Housecall Pro have follow-up features but they're buried in expensive FSM suites. CraftBoop is standalone/cheap — but needs more volume to sustain. The real gap is SMS-first follow-up (email open rates for tradespeople are low). Also: most tradespeople won't onboard into another app without seeing immediate ROI.
- **Our Angle**: SMS-native version (Twilio) rather than email sequences. Show the review count on a dashboard ("You've gotten 12 Google reviews this month"). Integrate directly with Google Business Profile API to auto-trigger after a 5-star review. Price at $39-59/mo with a strong review-count guarantee.
- **LTD Potential**: 4/5 (clear LTD use case — "pay once, follow up forever")

---

## Spectora – Home Inspection Software ($30M ARR, acquired)

- **Source**: https://www.indiehackers.com/post/tech/hitting-30m-arr-with-the-first-product-he-built-oJ1E1ukp60M7OZZXl2AJ
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / founder interview
- **Engagement**: Featured interview, January 2026
- **Revenue Data**: $30M ARR (expecting $40M end of 2026); sold 50% stake at $90M valuation in 2023; another 10% at $110M in 2024
- **Boring Business Score**: 5/5
- **Target Industry**: Home inspection
- **Core Value Prop**: All-in-one home inspection software — reporting, scheduling, payments, CRM.
- **Gap/Opportunity**: Validation that an unglamorous vertical (home inspection) can scale to $30M+ ARR. One founder, SEO-led growth, no VC. The lesson: home inspection software was "boring enough" to be underserved and "essential enough" for inspectors to pay. Strong signal for adjacent home service verticals with similar dynamics (radon testing, mold inspection, sewer scoping).
- **Our Angle**: Look at specialty inspection niches adjacent to home inspection: sewer scope/drain inspection software, radon measurement management, mold remediation job tracking. Same buyer (inspection company), same pain (reporting + scheduling + billing), but zero competition.
- **LTD Potential**: 3/5 (inspectors may prefer LTD; recurring is established in this market)

---

## Rentman – AV/Event Production Operations Software ($15-20M ARR)

- **Source**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Founder interview / revenue milestone
- **Engagement**: Featured April 2026
- **Revenue Data**: $15-20M ARR (>$1.25M/month)
- **Boring Business Score**: 4/5
- **Target Industry**: AV rental, lighting, staging, broadcast, film production companies
- **Core Value Prop**: Operations platform for event/media production — equipment rental tracking, crew scheduling, quoting, logistics, invoicing. Founder ran his own AV rental company and was frustrated by tools built for other industries.
- **Gap/Opportunity**: The "built it for myself" origin story works best in industry-insider niches. AV rental is underserved because software engineers don't rent PA systems. Adjacent gaps: photo/video equipment rental management, party rental (tables, chairs, tents), costume/prop rental for theater companies.
- **Our Angle**: Party/tent rental shops are a strong adjacent target — same core workflow (track gear, schedule delivery, invoice) but even less software competition than AV. Strong LTD appeal since operators don't trust subscription software for "just a seasonal business."
- **LTD Potential**: 3/5

---

## Verito Technologies – Cloud Hosting Vertical for Tax/Accounting Firms

- **Source**: https://www.indiehackers.com/post/how-we-built-a-profitable-paas-by-serving-only-0-4-of-us-businesses-4927bc5f68
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Founder deep-dive / revenue story
- **Engagement**: Featured May 2026
- **Revenue Data**: ~1,000 customers out of 90,000 potential US tax/accounting firms; profitable; bootstrapped 10 years; strong retention
- **Boring Business Score**: 5/5
- **Target Industry**: Tax preparers, CPA firms running Drake Tax / UltraTax CS
- **Core Value Prop**: Cloud hosting built specifically for tax software (UltraTax CS, Drake Tax). Hired tax software specialists (not generic help desk). Premium pricing because they're the only provider who understands the workload. Seasonal volatility (tax season) → staffed for peak demand year-round.
- **Gap/Opportunity**: The "go narrower within a vertical" playbook. Generic cloud hosting (AWS, Azure) can't serve this ICP — they don't understand tax software quirks. Lesson: find boring verticals with recurring compliance/operational software that runs on aging Windows infrastructure. Adjacent opportunities: managed IT + cloud hosting for dental practices, chiropractic offices, legal firms (specific practice management software needs).
- **Our Angle**: Managed cloud hosting for specific boring-business software (QuickBooks Desktop for contractors, MYOB for Australian tradespeople, specific EHR/dental software). White-glove migration + hosting. Defensible via deep integration knowledge.
- **LTD Potential**: 1/5 (infrastructure — recurring billing is essential)

---

## Sergio – Window Cleaning Business Management Software

- **Source**: https://sergio.app/about (discovered via sweaty startup search)
- **Additional Links**: N/A
- **Platform**: Discovered via broader research
- **Type**: Validated product / founder story
- **Engagement**: N/A (app in production)
- **Revenue Data**: Not public; active paying users
- **Boring Business Score**: 5/5
- **Target Industry**: Window cleaning businesses (solo operators to small teams)
- **Core Value Prop**: Built by an actual window cleaner. Route optimization with turn-by-turn navigation, 14-day weather forecasts built in (critical for scheduling outdoor jobs), self-service customer portal. All-in-one pricing — no per-user fees. Positioned explicitly against Jobber and Housecall Pro as "built by someone who held a squeegee."
- **Gap/Opportunity**: Generic FSM tools (Jobber, Housecall Pro) are priced for multi-person teams and don't understand trade-specific workflows. Weather-aware scheduling is a critical gap for any weather-dependent outdoor trade: window cleaning, pressure washing, exterior painting, lawn care, roofing. Housecall Pro charges per-user which punishes seasonal help.
- **Our Angle**: "Weather-smart scheduling" as a standalone feature/plugin for existing FSM tools (or a lightweight app for solo operators in weather-dependent trades). Also: the "built by a practitioner" positioning is strong for ultra-niche tools — exterior painting scheduling, gutter cleaning route optimization, etc.
- **LTD Potential**: 4/5 (solo operators strongly prefer one-time pricing over $50-100/mo subscription)

---

## HandyPay – Deposit & Payment Tool for Service Businesses

- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Growth story / milestone
- **Engagement**: January 2026 post
- **Revenue Data**: $1K MRR in under 60 days; direct sales to spas, salons, service businesses
- **Boring Business Score**: 4/5
- **Target Industry**: Spas, salons, local service businesses (appointment-based)
- **Core Value Prop**: Simple way for service businesses to collect deposits and reduce no-shows. One clear use case: get paid fast. Founder walked into businesses directly and signed them up on the spot.
- **Gap/Opportunity**: Square and Stripe overkill for just deposits; booking tools like Acuity/Calendly have deposit features but they're bolted on. A standalone "deposit + no-show fee" tool that integrates with any booking system would find a clear market. The real pain is behavioral: service operators know they need deposits but haven't set them up because it feels complicated.
- **Our Angle**: "One-click deposit setup" for any service business — connects to Calendly, Acuity, Square, or just sends a payment link. Simpler and cheaper than Vagaro or Mindbody. Auto-sends a deposit request when an appointment is booked. Could be an ultra-simple standalone tool at $19-29/mo.
- **LTD Potential**: 4/5

---

## Heavy Civil Construction ERP – Field Time → Payroll → Job Cost

- **Source**: https://www.indiehackers.com/post/looking-for-technical-cofounder-for-heavy-civil-saas-e83fa0798b
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Founder seeking cofounder / product announcement
- **Engagement**: March 2026 post
- **Revenue Data**: Internal ERP in production since 2012; targeting 10-20 paying contractors at $600-1,000/mo (18-24 months horizon)
- **Boring Business Score**: 5/5
- **Target Industry**: Heavy civil construction (roads, utilities, earthmoving)
- **Core Value Prop**: Field time + equipment usage tracking → exports to FOUNDATION (industry-standard payroll/job costing software). Internal equipment rental tracking (POS) back to jobs/phases. Shop maintenance and mechanic dispatch. Built and proven in-house for 14 years; now spinning out as vertical SaaS.
- **Gap/Opportunity**: Heavy civil is extremely underserved. FOUNDATION is the dominant accounting/payroll system but has no mobile field component. Field crews track time on paper timesheets that get faxed or driven to the office. Job costing accuracy suffers. No indie product has tackled this — it's too niche for YC, too small for enterprise vendors.
- **Our Angle**: Build the mobile field app that feeds FOUNDATION/Viewpoint Vista — time cards, daily quantities, equipment hours. Simple Android app, no frills. Sell at $200-500/month per company. Sales motion: construction accounting conferences, FOUNDATION user communities.
- **LTD Potential**: 2/5 (enterprise-adjacent; recurring preferred)

---

## AI Voice Receptionist Agency – Local Service Business Model

- **Source**: https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- **Additional Links**: https://callin.io
- **Platform**: Indie Hackers
- **Type**: Business model blueprint / discussion
- **Engagement**: January 2026; high engagement
- **Revenue Data**: $1-2K setup + $300-800 MRR per client; 80%+ margins; plumbing/HVAC as primary targets
- **Boring Business Score**: 4/5
- **Target Industry**: Plumbing, HVAC, law firms (small practices), cleaning services
- **Core Value Prop**: White-label AI voice receptionist (built on Callin.io + n8n + Cal.com). Handles inbound calls 24/7, answers questions, books appointments. Targets appointment-based businesses facing the "hire a full-time receptionist ($30K/yr) or miss calls" decision.
- **Gap/Opportunity**: This is an agency model, not a product — the product opportunity is building AI voice reception SaaS purpose-built for a specific trade (not generic). HVAC-specific: knows how to handle "my AC is broken," captures symptom info, checks technician availability, books emergency vs. routine calls. Plumbing-specific: knows how to triage emergency vs. non-emergency (burst pipe vs. slow drain), capture address, send tech ETA.
- **Our Angle**: Trade-specific AI voice + SMS receptionist. Not generic — deeply trained on HVAC or plumbing call flows. Integration with ServiceTitan, Jobber, or HCP. $199-399/mo per location. Differentiation: trade knowledge, not just call answering.
- **LTD Potential**: 2/5 (voice AI has ongoing per-minute costs; LTD doesn't work for usage-based infrastructure)

---

## Documentorium – Document Engine for Trades (Quotes/Estimates/Contracts)

- **Source**: https://news.ycombinator.com/item?id=47540841
- **Additional Links**: https://documentorium.com
- **Platform**: HN
- **Type**: Ask HN / Product feedback request
- **Engagement**: 4 points, 2 comments
- **Revenue Data**: "Hundreds of paying users, almost all renewed their yearly" (in European market); price described as "too small to matter as a yearly cost"
- **Boring Business Score**: 4/5
- **Target Industry**: Tradespeople (0-5 employees) — electricians, plumbers, HVAC, painters
- **Core Value Prop**: Generate professional PDFs for services (estimates, quotes, contracts) and send to customers. Pre-fill data, history, template library. Usable without an account (free core). The insight: small trades need to create PDFs for customers but can't afford or don't understand full FSM suites. "No bullshit tools for 0-5 employee market are missing."
- **Gap/Opportunity**: The 0-5 employee tradesperson is explicitly ignored by Jobber ($35-149/mo), Housecall Pro ($49+/mo), ServiceTitan (enterprise pricing). They live on WhatsApp, use "Max plumber" in their address book, and generate quotes on paper or via Word documents. A sub-$20/month tool that just does quotes + invoices + customer messaging wins this segment.
- **Our Angle**: "Quotes in 60 seconds" mobile app for solo tradespeople. Photo-to-line-item (take a photo of the job, AI suggests quote items). Send quote via WhatsApp/SMS, customer approves with a tap. Collect deposit on approval. $9-19/mo. AppSumo LTD would crush with this audience.
- **LTD Potential**: 5/5 (this segment is extremely price-sensitive and LTD-friendly)

---

## Builder Prime – Home Improvement Contractor CRM ($80K+/mo)

- **Source**: https://www.indiehackers.com/ideas/a-crm-designed-for-home-improvement-contractors-UC5YMjigiytDetW2v4yG
- **Additional Links**: N/A
- **Platform**: Indie Hackers Ideas Database
- **Type**: Validated product with revenue data
- **Engagement**: Listed in IH Ideas DB
- **Revenue Data**: Peak revenue $80K+/month
- **Boring Business Score**: 5/5
- **Target Industry**: Home improvement contractors (remodelers, kitchen/bath, windows, siding)
- **Core Value Prop**: CRM designed specifically for home improvement contractors — lead management from home shows, door-to-door, Angi/HomeAdvisor. Very different from B2B pipeline CRM or FSM scheduling software.
- **Gap/Opportunity**: $80K+/mo revenue proves huge demand. Home improvement contractors get leads from very different sources than service businesses (home shows, in-home demos) and have longer sales cycles (estimate → design → sign → schedule → install). No generic CRM handles this well. The "ProCore gap" post also calls out residential remodeler CRM specifically as an empty market.
- **Our Angle**: Build specifically for one trade within home improvement (e.g., window/door replacement contractors, or kitchen remodelers). Even narrower means even less competition and tighter ICP. Window replacement: 3-step sales process (appointment → in-home demo → contract), strong upsell patterns, large ticket ($5-30K per job).
- **LTD Potential**: 3/5 (contractors in this space may prefer LTD given seasonal cash flow)

---

## ZenMaid – Maid Service Scheduling Software ($3M/yr)

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: N/A
- **Platform**: Indie Hackers
- **Type**: Founder interview
- **Engagement**: Featured February 2025
- **Revenue Data**: $3M/yr bootstrapped; 11-year-old company; healthy growth
- **Boring Business Score**: 5/5
- **Target Industry**: Maid/cleaning services worldwide
- **Core Value Prop**: Scheduling software that simplifies operations for maid services. Started as a side hustle → maid service → "what if we built software for the industry?"
- **Gap/Opportunity**: $3M/yr is solid but the market is much larger. ZenMaid only serves residential cleaning. Commercial cleaning software (office cleaning management, quality checklists, client reporting) is a separate and equally underserved market. Pinggle.app (short-term rental cleaning coordination for Airbnb hosts) proves there are sub-niches even within cleaning.
- **Our Angle**: Airbnb/VRBO host cleaning coordination tool — assign cleaners to turnovers, photo verification after each clean, automated guest message delays pending cleaning confirmation. Much simpler than full FSM. $19-29/mo per host. Extremely viral in Airbnb host communities.
- **LTD Potential**: 4/5

---

## Demand Signals — Ask HN & Discussion Threads

- **Source**: https://news.ycombinator.com/item?id=43931168 (Adminix — small biz admin app validation)
- **Source**: https://news.ycombinator.com/item?id=37346497 (Ask HN: How to raise $600K for boring software)
- **Source**: https://news.ycombinator.com/item?id=38882314 (Ask HN: Boring businesses for hackers)
- **Source**: https://news.ycombinator.com/item?id=22496129 (Ask HN: What industries are underserved by software? — 192 pts, 169 comments)
- **Additional Links**: https://news.ycombinator.com/item?id=49417766 (Side projects making $500/mo in 2026)
- **Platform**: HN
- **Type**: Ask HN
- **Engagement**: 192 points on underserved industries thread
- **Revenue Data**: N/A
- **Boring Business Score**: 5/5
- **Target Industry**: Various — construction, trades, local service, healthcare
- **Core Value Prop**: These threads consistently surface:
  - Tradespeople on 0-5 employee software: all use paper or spreadsheets
  - Construction: paper timesheets, spreadsheet scheduling, printed job cards
  - Local service businesses: rely on Facebook/WhatsApp for recommendations, address books full of "Max plumber"
  - Comments confirm: "no bullshit tools for this market are missing"
  - "The boring spaces are where the opportunity hides"
- **Gap/Opportunity**: Software engineers don't run plumbing companies. The biggest signal from HN discussions: founders who entered boring markets from the inside (working in the industry) all outperformed founders who tried to enter from the outside. Domain knowledge is the moat.
- **Our Angle**: Research and build in one specific boring vertical where we can get to 20+ interviews before writing a line of code.
- **LTD Potential**: N/A

---

## Key Trends — September 2026

1. **AI voice/phone reception for trades** is the hottest emerging category. Multiple founders building or selling it as an agency. The product gap is trade-specific AI call handling (not generic call answering).

2. **Solo contractor price band ($19-49/mo) is structurally empty.** Procore, ServiceTitan, and Jobber all require $100-500/mo+ or enterprise contracts. The indie opportunity is the 1-3 person shop that needs "just invoicing + scheduling."

3. **Construction software is the most underserved B2B vertical.** 6 trades have zero dedicated takeoff software. Solo GC daily log app doesn't exist. Permit tracker doesn't exist at indie prices. 55% of vendors won't show price without a sales call.

4. **"Built by a practitioner" is the strongest positioning.** Sergio (window cleaning), Rentman (AV), ZenMaid (cleaning), DASHP (pest control) — all founders were in the industry. Creates immediate credibility with an audience that distrusts software vendors.

5. **Follow-up automation for service businesses** is validated pain: service operators universally bad at asking for reviews/repeat bookings. Multiple tools entering this space at $29-49/mo. SMS-native beats email in this market.

6. **Airbnb host cleaning coordination** is an emerging micro-niche between Airbnb and cleaning FSM — multiple tools appearing (Pinggle, others). Strong Reddit/host community distribution.

# HN & Indie Hackers Research — 2026-10-31

Scanned Hacker News (Show HN, Ask HN, Launch HN) and Indie Hackers for boring business SaaS opportunities.
Primary tools: Exa semantic search + Jina reader (Exa rate-limited partway through, supplemented with WebSearch).

---

## Pest Control Vertical SaaS — Founder Took Technician Job

- **Source**: https://news.ycombinator.com/item?id=47509571
- **Additional Links**:
  - https://www.starterstory.com/stories/dashp (Dashp — $100K ARR pest control commission SaaS)
- **Platform**: HN
- **Type**: Show HN / discussion — 448 points, 182 comments (viral)
- **Engagement**: 448 upvotes, 182 comments — one of the highest-engagement boring-biz threads
- **Revenue Data**: HN commenter: "mine is running at $2M ARR for a few years now" in pest control SaaS. Dashp confirmed $100K ARR ($8.3K MRR) for door-to-door pest control commission tracking.
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control (recurring service, licensed, regulated)
- **Core Value Prop**: Tech-enabled pest control operations — commission tracking for D2D sales teams, route management, CRM integration. Existing tools are spreadsheets + emails. Pay anxiety for commission-only reps is a core pain.
- **Gap/Opportunity**: Dashp validated commission tracking specifically for pest control D2D teams at $100K ARR. The broader operations layer (scheduling, routing, recurring billing, customer communication) is served by FieldRoutes and PestPac but priced for mid-size companies. Small operators (1-5 techs) have no affordable option. One commenter specifically stated the market is "lucrative for even $50K MRR."
- **Our Angle**: Narrow to small pest control operators (solo to 5 trucks). Core workflows: commission/pay tracking, recurring billing calendar, route optimization, customer communication. $49/month vs. FieldRoutes enterprise pricing.
- **LTD Potential**: 3/5 (recurring-heavy ops tool — monthly subscription makes more sense, but LTD possible for commission tracker module)

---

## HVAC Field Manual Copilot — Gap Below ServiceTitan

- **Source**: https://www.startupheist.com/the-field-manual-copilot-79k-mrr-underneath-servicetitan/
- **Additional Links**:
  - https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/ (Breezy HVAC — $250K ARR in 9 months)
- **Platform**: Indie Hackers / startup analysis
- **Type**: Market analysis + validated product teardown
- **Engagement**: Referenced widely in indie hacker circles
- **Revenue Data**: Breezy: $0 to $250K ARR in 9 months. Field Manual Copilot analysis projects $79K MRR at 1,000 shops × $79/month. ServiceTitan is $245–$398/tech/month — too expensive for 60,000+ small shops under 5 employees.
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC / plumbing / boiler (small shops under 5 techs)
- **Core Value Prop**: Mobile RAG app — technician photographs equipment label, gets manual pages, parts list, and invoice language drafted automatically. Eliminates: boss phone calls, manual PDF hunting, scribbled job notes, wrong parts ordered.
- **Gap/Opportunity**: ServiceTitan + XOi serve large contractors. Bluon's PartsConnect covers mainstream residential HVAC. The gap is "everything else": boilers and hydronics, water heaters, commercial kitchen equipment, pool/spa, mixed plumbing-HVAC shops. 60,000+ US shops under 5 employees. No affordable tool exists. Breezy proved the maintenance-plan tracking moat; this is the technician-side workflow moat.
- **Our Angle**: Start with boilers/hydronics in cold-weather states (Northeast + Midwest). RAG over uploaded manuals + scraped OEM PDFs. MVP: photo → model ID → relevant manual pages + parts note + invoice language. $49-79/month per shop.
- **LTD Potential**: 3/5 (high daily-use app — subscription is natural, but LTD at $199-299 could drive early adoption)

---

## HVAC Maintenance Agreement Tracker — MicroGaps Analysis

- **Source**: https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026
- **Additional Links**: (no specific HN thread — MicroGaps market analysis)
- **Platform**: Indie Hackers ecosystem analysis
- **Type**: Market gap analysis
- **Engagement**: Published March 2026, widely cited
- **Revenue Data**: 118,000 HVAC businesses in the US; most small shops track maintenance agreements in spreadsheets or paper. ServiceTitan at $250-400/tech/month not viable for 2-5 tech shops. Breezy proved this sub-niche: $250K ARR in 9 months on maintenance plan management alone.
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC (small residential shops, 2-5 techs)
- **Core Value Prop**: Focused maintenance agreement renewal tracker. Track who's on contract, renewal dates, last service visit, automated 60-day renewal reminders. Not a full FSM platform — just the one workflow where shops make their most predictable recurring revenue.
- **Gap/Opportunity**: Incumbents (ServiceTitan, Jobber, Housecall Pro) require shops to adopt a full platform before getting the maintenance agreement feature. A standalone $29-49/month tool for just this workflow has no direct competitor at that price point.
- **Our Angle**: "Maintenance plan manager for HVAC shops that can't afford ServiceTitan." Simple CRUD + automated SMS/email reminders + renewal calendar. Sales motion: find small HVAC shops on Facebook Groups and trade forums. Direct cold outreach.
- **LTD Potential**: 4/5 (simple focused tool, perfect AppSumo candidate — HVAC owners actively search for affordable alternatives)

---

## Rudus — AI Takeoff & Estimation for Concrete Contractors (YC P26)

- **Source**: https://news.ycombinator.com/item?id=48374528
- **Platform**: HN (Launch HN)
- **Type**: Launch HN — 41 points, 14 comments
- **Engagement**: 41 points — decent for a niche B2B launch
- **Revenue Data**: Not disclosed (YC-backed, pre-revenue or early). Competitive context: incumbent estimation software not updated since 2020. Concrete subcontractors spend weeks per bid; most firms have only 2-3 estimators.
- **Boring Business Score**: 5/5
- **Target Industry**: Concrete subcontractors (construction, not residential)
- **Core Value Prop**: AI-powered PDF takeoff for concrete — reads structural plan PDFs, auto-identifies footings/walls/columns/slabs, builds full cost-estimate spreadsheet. Copilot model (not black box) — estimator reviews/overrides every item.
- **Gap/Opportunity**: Estimation for concrete is a sub-niche of construction estimating. General-purpose AI estimating tools (built for GCs) treat concrete as a checkbox. Rudus builds only for concrete subs. The training data moat is real — each customer interaction trains accuracy. Adjacent opportunities: structural steel, roofing, masonry, MEP — same workflow gap exists in each subtrade.
- **Our Angle**: Competition is validated (YC-backed), but the adjacent trades (MEP, roofing, masonry) are equally unserved. Same copilot approach applied to electrical or mechanical estimating could be a separate product. Alternative angle: sell this as a white-label PDF parsing module to existing estimating software vendors.
- **LTD Potential**: 2/5 (enterprise-ish B2B sale; LTD less natural for bid-critical software)

---

## AI Voice Agent for Missed Calls — Trades & Service Businesses

- **Source**: https://news.ycombinator.com/item?id=47138087 (Conduit AI)
- **Additional Links**:
  - https://news.ycombinator.com/item?id=48580402 (Dolfyn AI — post-call automation into FSM/dispatch)
  - https://news.ycombinator.com/item?id=48769010 (Rainslice.ai — autonomous home services)
- **Platform**: HN
- **Type**: Show HN posts
- **Engagement**: Low individual post engagement but multiple independent founders building this = strong market pull signal
- **Revenue Data**: Not disclosed; Avenue (related — booking widget for trades) reached $85K AUD/month ($56K USD/month) in 1 year.
- **Boring Business Score**: 4/5
- **Target Industry**: HVAC, plumbing, salons, dental, general home services
- **Core Value Prop**: AI voice agent answers missed calls 24/7. Captures caller info, has natural conversation, delivers lead to business owner. Dolfyn goes further: connects into existing CRM/scheduling/dispatch software via API so "the right things happen without anyone touching it."
- **Gap/Opportunity**: 80% of callers who reach voicemail don't leave a message — they call the competitor. Three separate founders launched this in the last 12 months (Conduit AI, Dolfyn AI, Rainslice). The differentiator will be depth of FSM integration — whoever handles the post-call workflow best wins. Current tools stop at answering the call.
- **Our Angle**: Focus on one vertical (e.g., HVAC). Deeper integration — agent answers call, creates job ticket in Jobber/Housecall Pro, dispatches next available tech, sends SMS confirmation to customer. Full loop, not just lead capture.
- **LTD Potential**: 3/5 (could do LTD for voice minutes bundle or per-seat)

---

## Documentorium — Document/PDF Engine for Trades (0-5 Employees)

- **Source**: https://news.ycombinator.com/item?id=47540841
- **Platform**: HN (Ask HN tradespeople thread)
- **Type**: Ask HN — builder seeking feedback
- **Engagement**: Thread: Ask HN: Any Tradespeople Here? — good qualitative discussion
- **Revenue Data**: Founder: "hundreds of paying users, almost all renewed their yearly" — validated in another market (same product, different country). Now expanding to US/UK trades.
- **Boring Business Score**: 4/5
- **Target Industry**: Tradespeople with 0-5 employees (electricians, plumbers, HVAC, builders)
- **Core Value Prop**: Fast PDF generation for quotes/estimates/contracts. Cheaper than any alternative, no per-user pricing, no monthly subscription complexity. "No bullshit" approach. Customer gets a professional-looking PDF to send the customer — fast.
- **Gap/Opportunity**: Key tradesperson feedback in thread: "no bullshit tools for 0-5 employee market are missing — everything is either too simple or too expensive monthly." Documentorium has validation in another country. US market is same problem × much larger. Integrated with job tracking (customer + job history) = sticky product.
- **Our Angle**: Expand scope slightly — estimates + simple job history + customer communication log. Flat annual pricing ($49/year) beats every monthly competitor for cost-conscious tradespeople. LTD friendly.
- **LTD Potential**: 5/5 (perfect LTD product — simple, high value, one-time purchase makes sense)

---

## Avenue — Lead Capture Widget for Tradespeople ($85K AUD MRR)

- **Source**: https://www.startupfinder.co/posts/how-to-build-a-50kmonth-app-in-a-boring-niche-mr4y
- **Additional Links**: https://xitter.cf/starter_story/status/2112958627699192046
- **Platform**: Startup Finder / Starter Story
- **Type**: Revenue milestone + founder story
- **Engagement**: Widely shared in indie hacker communities
- **Revenue Data**: A$85,000/month MRR (~$56K USD) in ~12 months. Zero viral moments. Cold outreach + iPad demos at trade shows.
- **Boring Business Score**: 4/5
- **Target Industry**: Tradespeople (plumbers, electricians, mechanics)
- **Core Value Prop**: Website embed widget that captures leads and bookings automatically when the tradesperson is on-site and can't answer the phone. Google Reservations integration so customers can book from Google search results.
- **Gap/Opportunity**: Validates the core insight: tradespeople lose leads every day because they're busy doing the actual work. Avenue proved this is a real, paying market at $56K USD/month. The widget niche is taken, but the deeper workflow (what happens after lead capture — automated scheduling, follow-up, dispatch) is open.
- **Our Angle**: The next layer above Avenue: lead → auto-scheduled → auto-confirmed → auto-dispatched. Avenue captures, we close the loop. Target shops that already use Avenue or similar and want to reduce the manual follow-up after capture.
- **LTD Potential**: 3/5

---

## ZenMaid — Maid Service Scheduling SaaS ($3M/yr = $250K MRR)

- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: https://podtail.com/no/podcast/indie-bites-1/building-a-200k-mrr-bootstrapped-maid-software-for/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / founder story
- **Engagement**: High — widely shared as proof of boring niche wins
- **Revenue Data**: $3M/year revenue (confirmed $200K MRR milestone in 2024). 11 years bootstrapped. 40% revenue loss event survived.
- **Boring Business Score**: 5/5
- **Target Industry**: Maid / cleaning services (residential)
- **Core Value Prop**: Scheduling software specifically built for maid services — not generic field service, not Jobber. Deep niche focus on the specific workflows of cleaning companies.
- **Gap/Opportunity**: ZenMaid dominates residential maid. Commercial cleaning (the $100B+ market) has less focused tools. Onedesk showed $100K MRR is achievable in commercial cleaning SaaS. There's likely a gap in hybrid residential/commercial cleaning companies (growing segment) that neither ZenMaid nor Jobber serve perfectly.
- **Our Angle**: Not competing with ZenMaid directly — but validating the pattern: pick one cleaning sub-niche (commercial, move-out cleaning, construction clean-up) and go deep. Could also look at tools that help cleaning businesses grow (marketing automation, review generation, client win-back).
- **LTD Potential**: 3/5

---

## Zirco.ai — AI Front Desk for Dental Practices

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Platform**: HN
- **Type**: Show HN — 3 comments (early build, good problem articulation)
- **Engagement**: Low HN engagement but strong problem articulation
- **Revenue Data**: Not disclosed (beta). Context: dental front desk = $40-50K/year + 40% annual turnover. Insurance verification alone = 2-3 hours/day of manual work.
- **Boring Business Score**: 4/5
- **Target Industry**: Dental practices
- **Core Value Prop**: Full dental front desk automation — inbound calls (Vapi voice AI), insurance verification (Playwright browser automation for carrier portals + Availity), appointment booking into Dentrix/Open Dental/Eaglesoft, SMS/email reminders.
- **Gap/Opportunity**: Dental practices are perfect boring SaaS customers: high willingness to pay, specific workflow pain (insurance verification is universally hated), HIPAA compliance moat keeps out casual competitors. The founder has done 30+ discovery interviews — validated. Adjacent: similar AI front desk for optometry, physical therapy, dermatology clinics.
- **Our Angle**: Narrower entry than full front desk — start with just insurance verification automation as a standalone tool ($99/month to save 2-3 hours/day). Then upsell to full front desk. Insurance verification is the clearest ROI story.
- **LTD Potential**: 2/5 (HIPAA + ongoing API costs make LTD hard; monthly subscription natural)

---

## Fabrication Shop Quoting — AI for Small/Mid CNC & Sheet Metal Shops

- **Source**: https://news.ycombinator.com/item?id=46266170 (Ask HN December 2025)
- **Platform**: HN (What Are You Working On thread)
- **Type**: Builder sharing WIP project
- **Engagement**: Context thread — dozens of similar builders sharing
- **Revenue Data**: Builder reports 25-40% of fab shop time spent on quoting. Instant quote competitors (large companies) have a huge advantage. Small shops wait 1-3 weeks to respond to RFQs and lose business.
- **Boring Business Score**: 5/5
- **Target Industry**: Small-medium fabrication shops (sheet metal, CNC, laser cutting, welding)
- **Core Value Prop**: Upload customer CAD file → AI runs DFM checks, calculates materials/laser time/bend complexity/weld length → instant production-ready quote with 2D/3D visualization. Shop's own pricing and capabilities encoded into the model.
- **Gap/Opportunity**: Large instant-quote services (Xometry, Fictiv) already exist but work as marketplaces — they compete with local shops. A tool that lets local shops compete on speed without becoming a marketplace is the gap. Reduces quoting from weeks to minutes for local shops.
- **Our Angle**: Not trying to be a marketplace. Position as "Xometry-level quoting speed for local shops." Primary moat: shops that input their own pricing + capabilities get a proprietary model that gets better with every quote accepted. Monthly subscription per shop + setup fee for pricing model calibration.
- **LTD Potential**: 2/5 (complex calibration required; monthly subscription more appropriate)

---

## Solo Contractor Estimate + Profit Tracker

- **Source**: https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026
- **Additional Links**:
  - https://www.indiehackers.com/post/my-niche-appointment-software-makes-5k-month-e24aae2369 (Schedo — $5K MRR, scheduling niche)
- **Platform**: MicroGaps market analysis (Indie Hackers ecosystem)
- **Type**: Gap analysis
- **Engagement**: Published March 2026 — widely cited
- **Revenue Data**: Joist ($8/month, estimates only) has large user base. Jobber ($39-199/month) includes job costing but wrapped in full-suite complexity. Gap = profitable product at $15-17/month.
- **Boring Business Score**: 4/5
- **Target Industry**: Solo contractors/tradespeople (plumbers, electricians, landscapers, painters)
- **Core Value Prop**: Build estimate → do job → log actual materials + hours → see estimate vs. actual profit. Two screens. Currently requires stitching together Joist + spreadsheet.
- **Gap/Opportunity**: Joist users (massive base, paying $8/month) have no profitability tracking. Every job where a contractor underestimates or over-orders materials is invisible money loss. Simple "job closeout" screen bridges this gap. Massive Joist user base = clear acquisition channel (Reddit, Facebook Groups, contractor forums).
- **Our Angle**: Build the $17/month "estimate + profit tracker." Can acquire via Joist users on Reddit r/sweatystartup, r/Contractor, r/smallbusiness. Sell as "know if your jobs are profitable." LTD at $49-79 on AppSumo — perfect fit.
- **LTD Potential**: 5/5

---

## Small Event Venue Booking Software

- **Source**: https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026
- **Platform**: MicroGaps market analysis
- **Type**: Gap analysis
- **Engagement**: Published March 2026
- **Revenue Data**: 72,000+ small event venues in the US. Tripleseat/Perfect Venue start at $79-150/month (built for hotel banquet halls). Solo operators run on spreadsheets + email.
- **Boring Business Score**: 3/5
- **Target Industry**: Small event venues (rooftop spaces, photo studios, garden party venues, community halls)
- **Core Value Prop**: Booking calendar + deposit system + PDF contract builder. That's the whole product. Under $29/month.
- **Gap/Opportunity**: Calendly-style booking page but for spaces (not time slots). Add Stripe deposit + contract template. Replaces spreadsheets and email for 72K operators who are massively underserved.
- **Our Angle**: "Calendly for spaces." Dead simple. $19-29/month. LTD at $99 on AppSumo. Potential for white-label resale to venue directories.
- **LTD Potential**: 5/5

---

## FieldLedgr — Free Field Service Software (Positioning Gap)

- **Source**: https://news.ycombinator.com/item?id=47668698
- **Platform**: HN (Show HN — posted ~6 months ago)
- **Type**: Show HN — 1 point, no comments (minimal engagement)
- **Engagement**: Very low — free tool positioning, no monetization signal yet
- **Revenue Data**: Free (fieldledgr.com). No revenue data.
- **Boring Business Score**: 4/5
- **Target Industry**: Tradespeople / field service
- **Core Value Prop**: Free field service management software for tradespeople.
- **Gap/Opportunity**: "Free" FSM tools signal the market wants lower price points. The question is whether free-with-upsell or flat-rate-cheap wins. FieldLedgr going free creates a monetization gap — there's appetite for an affordable paid tool that isn't free-tier-limited.
- **Our Angle**: Watch FieldLedgr. If they fail to monetize, their user list is evidence of demand for a $15-29/month product. The "free field service software" Google keyword cluster is an acquisition channel.
- **LTD Potential**: 3/5

---

## Tradie App Customization Gap (HN Discussion Signal)

- **Source**: https://news.ycombinator.com/item?id=48711340
- **Platform**: HN (comment thread on Show HN: Appaca)
- **Type**: Discussion signal
- **Engagement**: Comment thread
- **Revenue Data**: N/A (discussion signal)
- **Boring Business Score**: 4/5
- **Target Industry**: Tradespeople generally
- **Core Value Prop**: HN commenter teyc: "The tradie app space is ripe for deep customisation. Each trade has specific requirements that vendors lack deep domain knowledge of." Response confirming same observation.
- **Gap/Opportunity**: Broad FSM platforms (Jobber, Housecall Pro) are too generic. Each trade (plumbers vs. electricians vs. pool cleaners vs. pest control) has different workflows, different job types, different compliance needs. Deep customization for one trade = defensible moat.
- **Our Angle**: Pick one trade (e.g., pool/spa service — recurring, chemical tracking, equipment history) and build the deepest tool. Generic platforms will never do pool water chemistry tracking or equipment service history the way a pool-specific tool can.
- **LTD Potential**: 4/5

---

## Key Themes & Patterns

### Validated Revenue Levels in Boring Niches (Confirmed 2025-2026)
- ZenMaid (maid scheduling): $250K MRR bootstrapped
- Avenue (trades lead widget): $56K USD/month in year 1
- Dashp (pest control commissions): $100K ARR
- Breezy HVAC (maintenance plans): $250K ARR in 9 months
- Pest control SaaS (unnamed HN commenter): $2M ARR
- Schedo (niche scheduling): $5K MRR

### Strongest Near-Term Opportunities (Ranked)

| Rank | Idea | Boring Score | LTD Score | Key Evidence |
|------|------|-------------|-----------|--------------|
| 1 | HVAC Maintenance Agreement Tracker | 5 | 4 | Breezy proved exact market; 118K addressable businesses |
| 2 | Solo Contractor Estimate + Profit Tracker | 4 | 5 | Joist user base waiting; MicroGaps validated; AppSumo ready |
| 3 | Small Event Venue Booking | 3 | 5 | 72K underserved operators; simple product; zero competition under $29 |
| 4 | Pest Control Ops (small operators) | 5 | 3 | Multiple validated products at $100K-$2M ARR; D2D commission pain |
| 5 | HVAC Field Manual Copilot | 5 | 3 | $250K ARR precedent; 60K addressable small shops; boiler wedge |
| 6 | Dental Insurance Verification Automation | 4 | 2 | 2-3 hrs/day wasted; $40-50K FTE savings; HIPAA moat |
| 7 | Trades Document Engine (annual pricing) | 4 | 5 | Hundreds paying in another country; "no bullshit" positioning |

### Acquisition Insights
- **Direct cold outreach beats SEO/ads** for boring business customers (HandyPay: $1K MRR in 60 days via WhatsApp outreach; Avenue: iPad demos at job sites)
- **Facebook Groups and trade forums** (r/sweatystartup, r/HVAC, r/Contractor, PHCC forums) are primary discovery channels
- **Relationship > feature list** — service business owners pay for trust first, features second

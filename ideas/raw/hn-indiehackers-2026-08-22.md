# HN & Indie Hackers Scan — 2026-08-22

**Agent**: HN & Indie Hackers Scanner
**Sources**: Hacker News (Show HN, Ask HN, "What are you working on?"), Indie Hackers (revenue milestones, discussions)
**Focus**: Boring business SaaS — unsexy verticals with real money

---

## Boring Local Classifieds + Directory Site

- **Source**: https://www.indiehackers.com/post/five-years-in-how-a-boring-local-classifieds-site-quietly-crossed-25k-mrr-4d2395fb81
- **Additional Links**: n/a
- **Platform**: Indie Hackers
- **Type**: Revenue milestone post
- **Engagement**: Posted July 2026, substantial community discussion
- **Revenue Data**: $25K+ MRR — 55% from bump/featured listings, 25% power-seller subscriptions, 15% escrow fees on high-ticket items, 5% local business directory listings. Solo + one part-time person.
- **Boring Business Score**: 4/5
- **Target Industry**: Local classifieds, local business directory, any region without a dominant local platform
- **Core Value Prop**: Hyper-local classifieds with WhatsApp-first messaging, trusted escrow for high-ticket items (vehicles, electronics), verified directory profiles for local service businesses (plumbers, tutors, repair shops)
- **Key Insight**: The **escrow feature built more trust than two years of free listings**. Monetization and trust are not opposed. Power-seller subscriptions priced too low for years; when raised, churn barely moved. Directory/subscription revenue is the most durable line (doesn't depend on someone having something to sell today).
- **Gap/Opportunity**: Dozens of secondary cities and regions globally still lack a decent local classifieds platform. The directory subscription model (local service businesses paying for verified profiles) is the clearest wedge — recurring, low-churn, doesn't depend on listing volume.
- **Our Angle**: Build for a specific city/region with a tailored directory for the dominant local trades (city-specific plumber/electrician/landscaper directory + classifieds). WhatsApp-first contact flow. Escrow as trust layer from day one.
- **LTD Potential**: 3/5 — more of a subscription model, but a local business directory tier could work as LTD for a specific city

---

## Rentman — AV/Event Rental Operations Platform

- **Source**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- **Additional Links**: https://rentman.io/
- **Platform**: Indie Hackers
- **Type**: Founder interview / revenue milestone
- **Engagement**: 111 upvotes, 20+ comments (April 2026)
- **Revenue Data**: $15M–$20M ARR, bootstrapped for 8 years, now in 70+ countries
- **Boring Business Score**: 5/5 — AV rental, staging, broadcast, film equipment management
- **Target Industry**: Event production companies, AV rental, lighting, staging, broadcast, film/video production
- **Core Value Prop**: One system for the "messy middle" of running a production company: equipment rental tracking, crew scheduling, quoting, logistics, invoicing — replaces 5+ spreadsheets or misfit tools
- **Key Insight**: Founder started the AV company at 16, was frustrated by tools, built his own, other rental companies immediately wanted it. **Vertical SaaS in niche industries (AV, HVAC, dental, restoration) is where the biggest moats are quietly being built** — horizontal players cannot cross over without a domain shift that breaks their UX. PHP+MySQL+Angular still running at $15M+ ARR — shipping value beats chasing stacks.
- **Gap/Opportunity**: Similar opportunity in adjacent niches: photo/video studio rental (cameras, lenses, lights), party/event décor rental, medical equipment rental. All have the same "gear + crew + logistics + invoicing" problem that Rentman solved for AV. Rentman doesn't serve these verticals — they're still on spreadsheets.
- **Our Angle**: "Rentman for [photo studios / party rental / medical equipment rental]" — pick one adjacent vertical where Rentman doesn't have deep workflow fit. Focus on the quote-to-invoice cycle and equipment utilization tracking.
- **LTD Potential**: 3/5 — could work at $199–$299 LTD for smaller operators to prove value before subscription

---

## Camera Search AI — Visual Lookup Tool for Tradesmen

- **Source**: https://news.ycombinator.com/item?id=49233423 (August 2026 "What are you working on?" thread)
- **Additional Links**: https://camerasearch.ai/
- **Platform**: Hacker News
- **Type**: What are you working on? mention
- **Engagement**: Appeared in high-traffic monthly thread
- **Revenue Data**: Not disclosed (appears to be in early stage)
- **Boring Business Score**: 5/5 — specifically for tradespeople, blue-collar workers
- **Target Industry**: Plumbers, HVAC technicians, electricians, mechanics, field service workers
- **Core Value Prop**: Take a photo of a part, component, or piece of equipment → get identification, specs, compatible replacements, pricing, suppliers. Eliminates hours of manual part-lookup that trades workers do constantly.
- **Gap/Opportunity**: Field service workers waste enormous time identifying unknown parts, looking up spec sheets, finding compatible replacements. AI visual lookup is now accurate enough to handle this reliably. No dominant player in this space. Most trades workers are already using their phones constantly.
- **Our Angle**: Add invoice generation, job notes, and supplier ordering to the visual lookup. Make it a "field service companion app" — photo a part, get info, add to work order, auto-generate invoice line item. Target HVAC and electrical specifically (higher ticket, less competition from generic tools).
- **LTD Potential**: 5/5 — extremely LTD-friendly, clear value, one-time "unlock the pro tier" model works well for tradespeople

---

## AI-Assisted SMB Bookkeeping (Vibooks)

- **Source**: https://news.ycombinator.com/item?id=47645019 (Show HN: Vibooks — Local-first bookkeeping built for AI agents, April 2026)
- **Additional Links**: https://news.ycombinator.com/item?id=47588108 (Show HN: We turned accounting into a CLI command — Norman AI, March 2026)
- **Platform**: Hacker News
- **Type**: Show HN (two separate products in same space)
- **Engagement**: Show HN posts with developer/founder audience
- **Revenue Data**: Vibooks founder was paying $2,000/year for basic bookkeeping before building; signals strong market pain
- **Boring Business Score**: 4/5 — accounting/bookkeeping for SMBs
- **Target Industry**: Small businesses, freelancers, tradespeople — anyone currently paying an accountant for repetitive bookkeeping
- **Core Value Prop (Vibooks)**: Local-first double-entry bookkeeping app where AI agents (Claude Code, Codex, etc.) can operate the system through HTTP APIs — reads receipts, suggests categorizations, reconciles accounts. Designed for post-period bookkeeping workflows.
- **Core Value Prop (Norman AI)**: `scan receipt → parsed + categorized (VAT) → BOOKED` — single CLI command replaces PDFs, emails, manual entry, backoffice.
- **Key Insight**: Multiple founders independently arriving at "AI for SMB bookkeeping" is a strong convergence signal. The $2K+/year bookkeeping cost pain is real and common. Receipts + reconciliation + categorization is 80% rule-based work that AI handles well.
- **Gap/Opportunity**: Both products are developer-focused (CLI, AI-agent APIs). The actual SMB customer (plumber, landscaper, cleaning business) needs a mobile-first, photo-based bookkeeping experience — not a CLI or AI agent API. No one has built the boring-business-friendly, AI-assisted bookkeeping app for tradespeople.
- **Our Angle**: Mobile-first "snap your receipts" bookkeeping for trades businesses: photo → AI categorizes → job-cost tracking → invoice → tax prep export. One-tap receipt scanning, job-cost P&L (not just general ledger), integrate with common invoicing workflows. $49/month or $299 LTD.
- **LTD Potential**: 5/5 — very strong LTD candidate, bookkeeping is perceived high-value, one-time unlock mentality common in small trades businesses

---

## Electrical Estimating AI Copilot (Bidflow)

- **Source**: https://www.workyard.com/compare/hvac-software (mentioned in field service software roundup, 2026)
- **Additional Links**: Referenced in general HVAC/trades software landscape searches
- **Platform**: HN/IH ecosystem (product in field service space)
- **Type**: Market signal (product mentioned in industry roundups)
- **Engagement**: Part of broader 2026 trades software market
- **Revenue Data**: Not public
- **Boring Business Score**: 5/5 — electrical contracting
- **Target Industry**: Electrical contractors, small electrical businesses (2-20 employees)
- **Core Value Prop**: AI copilot that automates the repetitive work in quoting electrical jobs — reads blueprints/photos, generates material takeoffs, pricing estimates, and bid documents.
- **Gap/Opportunity**: Electrical estimating is notoriously time-consuming (4-8 hours per complex bid). Small electrical contractors can't hire full-time estimators. Most are still doing this manually in Excel or simple quoting tools. AI is now capable enough to do ~80% of the takeoff work. Similar opportunity exists for plumbing, HVAC, general contracting.
- **Our Angle**: "AI Estimating for [Electrical / Plumbing / HVAC]" — pick one trade, go deep. Integrate with supplier pricing APIs (Grainger, Home Depot Pro, local distributors). Generate PDF proposals automatically. Target 2-10 person shops who are losing bids because they can't estimate fast enough.
- **LTD Potential**: 5/5 — extremely high willingness to pay, clear ROI (win one more bid per month = $2-5K revenue), LTD at $199-$399 is obvious value

---

## Multi-Entity Accounting for Small Business Owners (LineLedger)

- **Source**: https://news.ycombinator.com/item?id=49233423 (August 2026 "What are you working on?" thread)
- **Additional Links**: n/a (open source project mentioned)
- **Platform**: Hacker News
- **Type**: What are you working on? mention
- **Engagement**: Monthly thread
- **Revenue Data**: Built to avoid 7x QuickBooks subscriptions; signals common pain
- **Boring Business Score**: 4/5
- **Target Industry**: Small business owners operating 2-10 entities (holding companies, LLCs, franchises, property owners)
- **Core Value Prop (LineLedger)**: Open source (AGPL) accounting that lets you manage multiple companies in one subscription instead of paying $50-150/month per entity in QuickBooks.
- **Key Insight**: Small business owners with multiple entities are forced to pay QuickBooks 2-7x over. "I run a few small companies in BC and got sick of paying for 7 QuickBooks subscriptions." This is a very specific, recurring complaint on HN. Existing alternatives (Wave, Zoho Books) don't solve multi-entity well. QuickBooks itself charges per company.
- **Gap/Opportunity**: No clean, modern SaaS solution for the "small empire" owner: 3-7 LLCs, real estate LLCs, operating companies, holding companies. Needs consolidated reporting across entities, intercompany transactions, single login, one subscription.
- **Our Angle**: "QuickBooks for multiple entities" — unlimited companies, one price. Inter-company transfers, consolidated P&L, single subscription. Target: small real estate investors (multiple property LLCs), franchise owners, small business owners with holding structure. $99/month or $499 LTD.
- **LTD Potential**: 4/5 — strong LTD candidate; AppSumo has proven demand for accounting tools (Deskera: $1.2M revenue, $149 LTD)

---

## Micro-ERP for Specific Boring Verticals

- **Source**: https://sumotrends.com/ideas/boring-saas-niches-printing-money-2026/ (SumoTrends analysis of AppSumo deals, December 2025)
- **Additional Links**: https://www.indiehackers.com/post/should-i-just-create-a-boring-b2b-saas-b6181991c0
- **Platform**: AppSumo ecosystem / Indie Hackers discussion
- **Type**: Market analysis / community discussion
- **Engagement**: SumoTrends tracked $6.2M total revenue across 7 boring niches; IH discussion with Rob Walling (MicroConf founder) validation
- **Revenue Data**: Deskera (ERP/accounting): $1.2M/year estimated on AppSumo alone, $149 LTD, 4.85/5 rating (814 reviews). SumoTrends confirms Finance is the highest-margin boring niche.
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices, independent logistics companies, food service operators, HVAC service companies, restoration contractors
- **Core Value Prop**: Industry-specific "micro-ERP" that bundles the 4-6 workflows each vertical actually uses — NOT a generic accounting tool with industry modules bolted on. Dental: patient billing + insurance + scheduling + inventory. Logistics: load management + driver pay + fuel + invoicing. Restoration: job costing + subcontractor tracking + insurance claims + materials.
- **Key Insight (Rob Walling, TinySeed)**: TinySeed has funded companies in "tiny niches" — SaaS for home improvement contractors, CAD add-ons, electrical commissioning — and believes all can reach 7 figures ARR when priced correctly. "If you underprice in a smaller market, you can screw yourself pretty easily."
- **Gap/Opportunity**: The gap between QuickBooks (too generic) and SAP/Oracle (too expensive/complex) is massive. SMBs in boring verticals need 6-10 specific workflows done well, not 50 features done generically. AppSumo lifetime deal market for boring B2B tools is proven.
- **Our Angle**: Pick ONE vertical with high per-customer value and clear workflow pain. Restoration contractor (fire/water damage) is an underserved example: they need job costing, subcontractor management, insurance adjuster documentation, and invoicing — all of which require industry-specific templates and logic that no generic tool handles.
- **LTD Potential**: 5/5 — AppSumo proven for accounting/ERP-adjacent tools. $149-$299 LTD sweet spot validated by Deskera

---

## PE Rollup of HVAC/Plumbing = Software Opportunity for Independents

- **Source**: https://news.ycombinator.com/item?id=41828896 (HN: "America's new millionaire class: Plumbers and HVAC entrepreneurs", October 2024 — still highly relevant)
- **Additional Links**: https://news.ycombinator.com/item?id=41832117 (HN follow-up thread: "My dad bought a failing HVAC business 30+ years ago")
- **Platform**: Hacker News
- **Type**: Top story discussion (extensive comments)
- **Engagement**: High-engagement discussion about PE rollup of independent trades businesses
- **Revenue Data**: PE firms actively acquiring and rolling up HVAC/plumbing businesses; independent operators earning $500K-$2M/year but struggling to compete with PE-backed chains
- **Boring Business Score**: 5/5
- **Target Industry**: Independent HVAC, plumbing, electrical contractors (1-10 technician shops)
- **Core Value Prop**: Software that helps independent trades businesses compete with PE-backed chains — dispatch, scheduling, invoicing, follow-up, reputation management, parts ordering in one tool. The PE shops use software advantage to be faster, cheaper to run, and better at upsells.
- **Key Insight**: Community commentary shows independent HVAC/plumbing shops are being acquired or outcompeted specifically because they lack software infrastructure. PE firms deploy software (ServiceTitan) the moment they acquire a shop. Independent operators who don't adopt tools lose market share. This creates urgency. Many small independent shops resent ServiceTitan pricing ($500+/month) but don't have affordable alternatives.
- **Gap/Opportunity**: ServiceTitan and Jobber serve the market but are expensive and complex for 1-3 technician shops. A simplified, affordable field service management tool specifically for tiny HVAC/plumbing shops (dispatch + invoice + follow-up reminders) at $49/month or $299 LTD would have a massive addressable market and clear distribution (Reddit communities, Facebook groups for independent HVAC/plumbing owners).
- **Our Angle**: "The anti-ServiceTitan" — dead-simple FSM for 1-5 tech shops. No enterprise features, no implementation cost, $49/month or $299 LTD. Must-have features: job scheduling, customer history, invoice + payment (Stripe), automated follow-up texts. Avoid: complex reporting, inventory management, multi-location. Distribution: r/HVAC, r/plumbing, HVAC-Talk forum, independent contractor Facebook groups.
- **LTD Potential**: 5/5 — ideal LTD candidate; tradespeople are skeptical of SaaS subscriptions, prefer one-time purchase mentality; AppSumo could be a major channel

---

## Woodworker Design Tool with AI Agent (Sawdust.diy)

- **Source**: https://news.ycombinator.com/item?id=49233423 (August 2026 "What are you working on?" thread — first comment)
- **Additional Links**: https://sawdust.diy/, https://app.sawdust.diy/share/b5362e61-39bc-4fa5-a537-38ca78...
- **Platform**: Hacker News
- **Type**: What are you working on? / product launch
- **Engagement**: Top comment in Aug 2026 "What are you working on?" thread; multiple other people immediately tried and engaged; at least 2 parallel similar projects mentioned (ShopSpec.io)
- **Revenue Data**: Not disclosed; founder is bootstrapping from Hawaii
- **Boring Business Score**: 3/5 — creative/hobbyist but serves woodworking trades and makers
- **Target Industry**: Woodworkers (hobby to professional), furniture makers, carpentry contractors, CNC shop operators
- **Core Value Prop**: Skeuomorphic carpentry simulator — works with real wood specs and real shop tools (miter saw, router table, table saw). Outputs: BOM (bill of materials), cut plan with kerf, 3D print files, step files, AR walk-through, build guides. AI agent MCP integration — describe what you want, it plans the build.
- **Key Insight**: Not one but TWO separate founders were independently building nearly identical products (Sawdust.diy and ShopSpec.io), validating real demand. The carpentry/woodworking tool market is underserved — Sketchup is the incumbent but forces users to work with CAD primitives, not real lumber. The "BOM + cut plan" output is what every woodworker actually needs for every project.
- **Gap/Opportunity**: Professional woodworking/furniture businesses (small cabinet shops, custom furniture makers, millwork shops) need quoting, materials ordering, and customer-facing visualizations — not just personal project planning. A Sawdust.diy-style tool with business features (client quotes, material cost auto-pricing, supplier ordering) would serve the professional tier.
- **Our Angle**: "Sawdust.diy for cabinet shops" — take the design engine concept and add customer quoting, material cost-to-quote pricing, and production scheduling. Target small cabinet/millwork shops (2-10 employees) who currently quote in Excel and lose margin on material cost overruns. $99/month or $599 LTD.
- **LTD Potential**: 3/5 — hobbyist tier could work as LTD; professional shop tier better as subscription

---

## AI for Small Business AI-Search Invisibility (Show IH: 18 Industry Pages)

- **Source**: IH homepage feed (August 2026) — "Show IH: I built 18 industry pages for the small businesses AI search ignores"
- **Additional Links**: https://www.indiehackers.com/post/show-ih-i-built-18-industry-pages-for-the-small-businesses-ai-search-ignores-which-one-did-i-leave-out-7aa6b73dbb
- **Platform**: Indie Hackers
- **Type**: Show IH / product launch (33 upvotes, 79 comments)
- **Engagement**: Unusually high engagement for IH Show post; 79 comments suggests hot topic
- **Revenue Data**: Not disclosed
- **Boring Business Score**: 4/5
- **Target Industry**: Local service businesses (plumbers, dentists, landscapers, pest control, etc.) who are invisible to AI-powered search and losing leads
- **Core Value Prop**: AI-optimized industry landing pages that make local service businesses discoverable through AI search engines (ChatGPT, Perplexity, Claude). As AI search replaces Google for local recommendations, most small service businesses have zero presence.
- **Key Insight**: The transition from Google to AI search is hitting local small businesses hard — they spent years on Google SEO and now that visibility is being erased. There's a real business need for AI-optimized local presence. High engagement (79 comments) signals the market is actively worried about this.
- **Gap/Opportunity**: Local service businesses (HVAC, plumbing, landscaping, pest control, cleaning) are losing leads to AI search. A tool that helps them build AI-visible profiles and get recommended by ChatGPT/Perplexity when someone asks "who's the best HVAC company in [city]" would be extremely valuable. This is a new category with almost no competition.
- **Our Angle**: "AI Local SEO for tradespeople" — automated profile creation and AI citation optimization for local service businesses. One-time setup + monthly maintenance. Could be positioned as an add-on to existing FSM tools or as standalone at $79/month or $299 LTD.
- **LTD Potential**: 4/5 — strong LTD candidate; local businesses want to "set it and forget it"; one-time fee to get visible feels right to a plumber

---

## Summary of Market Signals (HN/IH 2026)

**Strongest boring-business themes from this scan:**

| Theme | Evidence Strength | Boring Score | LTD Score |
|-------|------------------|-------------|-----------|
| Anti-PE simple FSM for tiny HVAC/plumbing shops | High (HN discussion + market signal) | 5 | 5 |
| AI Estimating for electrical/plumbing contractors | High (product exists, big pain) | 5 | 5 |
| Mobile bookkeeping for trades workers | High (2 Show HN products in space) | 4 | 5 |
| Camera Search AI for field workers | Medium (early product, clear pain) | 5 | 5 |
| Local directory + classifieds + escrow | Proven ($25K MRR) | 4 | 3 |
| Multi-entity accounting (anti-QuickBooks-per-company) | Medium (HN thread signal) | 4 | 4 |
| Micro-ERP for specific vertical (restoration/dental) | High (AppSumo data proven) | 5 | 5 |
| AI Local SEO for tradespeople | Medium (hot IH discussion) | 4 | 4 |
| AV/Event rental operations (Rentman model) | Proven ($15-20M ARR) | 5 | 3 |
| Cabinet shop quoting tool | Low-medium (parallel products signal) | 3 | 3 |

**Key HN community quote** (from IH $15M ARR Rentman thread):
> "Vertical SaaS in niche industries (AV, HVAC, dental, restoration) is where the biggest moats are quietly being built right now. Horizontal players cannot cross over without a domain shift that breaks their UX, and operators in those niches do not have time to roll their own."

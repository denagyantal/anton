---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/field-manual-copilot.md
  - _bmad-output/planning-artifacts/market-research-field-manual-copilot.md
workflowType: prd
product_name: field-manual-copilot
date: 2026-11-16
author: Root
classification:
  projectType: mobile_app_saas
  domain: field_service_trades_knowledge
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — FieldCopilot

**Author:** Root
**Date:** 2026-11-16
**Product:** FieldCopilot — Mobile RAG Knowledge Tool for HVAC, Boiler & Plumbing Technicians

---

## Executive Summary

470,000 US HVAC, boiler, and plumbing technicians working in sub-20-tech shops have no affordable, mobile-first tool for instant field manual lookup. When a technician encounters an unfamiliar error code on a 20-year-old Weil-McLain boiler with a customer watching, they have no fast path to the answer. Enterprise tools (XOi/Specifx, $230M KKR exit) are inaccessible. Bluon (500K+ HVAC models, proven mobile adoption) explicitly excludes boilers and hydronic systems. The gap is specific, uncontested, and validated by a $230M enterprise exit.

**FieldCopilot** is a mobile-first RAG knowledge tool for HVAC, boiler/hydronics, and plumbing technicians. A tech photographs an equipment nameplate on a live service call and within 30 seconds receives the relevant manual section, error code explanation, parts list, and professional invoice language — without hunting PDFs, calling suppliers, or guessing. At $19/mo for solo techs and $49/mo for 5-tech shops, one avoided callback covers months of subscription.

The entry wedge is intentional: pre-index the top 5 US boiler brands (Burnham, Weil-McLain, Peerless, Slant/Fin, Triangle Tube) and launch to the boiler/hydronics service community as "the Bluon for boilers." Full HVAC and plumbing catalog expansion follows in Phase 2. The $79K MRR target (1,000 customers at blended $79/mo) requires less than 1% penetration of the addressable technician pool.

**Strategic context:**
- 470,000 addressable US technicians in sub-20-tech shops
- XOi/Specifx $230M acquisition validates enterprise demand; Bluon proves mobile-first adoption
- Boiler/hydronics wedge: specific white space with zero mobile-first competitors
- Build feasibility: Mistral OCR + RAG pipeline + React Native mobile app, 4–6 week MVP

### What Makes This Special

**Boiler/hydronics-first positioning** — the only mobile tool covering boiler, radiant, and hydronic heating service. Pre-indexed manufacturer manuals for the top 5 US boiler brands. "The Bluon for boilers" = instant market positioning against a proven reference product. Bluon has 500K+ HVAC techs; none of them can answer a Weil-McLain GV90+ error code with Bluon open.

**Invoice language generation** — no competitor offers this. Tech describes the repair; app writes professional service description copy. Directly reduces the top technician frustration (admin time). Demonstrable value on Day 1, independent of manual coverage depth. This feature differentiates FieldCopilot from every incumbent including Bluon.

**Offline-capable RAG** — pre-cached embeddings for core boiler brands operate without cell signal. HVAC and boiler service happens in basements, mechanical rooms, and rural properties. This is a hard requirement no current mobile tool satisfies; solving it is both a technical moat and a critical retention driver.

**Conservative citation-first RAG** — always cites manual page; never guesses on parts; includes verification caveats. HVAC/boiler techs need to trust the source. This posture builds brand authority and reduces liability — differentiating FieldCopilot from generic AI (ChatGPT, Claude) that techs already use informally but can't trust on-site.

**Affordable solo-tech pricing** — $19/mo focused knowledge tool. XOi cannot match this price. The $19/mo price point sits below any FSM tool and delivers a focused, differentiated benefit that pays for itself on the first avoided callback.

## Project Classification

- **Project Type:** Mobile-first SaaS (iOS + Android via React Native or Flutter; web dashboard for account management only)
- **Domain:** Field service trades knowledge — HVAC, boiler/hydronics, plumbing technician tooling
- **Complexity:** Medium — RAG pipeline, OCR, mobile-first with offline mode, Stripe billing, PDF ingestion pipeline
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

The critical user validation moment: a technician in a basement with no cell signal photographs an unfamiliar nameplate, asks FieldCopilot what an error code means, and gets the right answer with a manual citation in under 30 seconds. Every other metric flows from this moment.

**User success is achieved when:**
- Technician completes the full nameplate-to-answer workflow in under 30 seconds from photo to result
- OCR extracts the correct model number on the first attempt ≥ 90% of the time, including low-light and worn nameplate conditions
- Manual coverage returns a matching result for ≥ 85% of queries against the 5 pre-indexed boiler brands
- Invoice language generation produces usable professional text without editing ≥ 70% of the time
- App operates correctly in offline mode for cached boiler brands — no connectivity required in basement or rural conditions

**Activation metrics:**
- Time to First Answer: < 30 seconds from photo capture to result display
- Trial Completion: ≥ 50% of trial users complete at least 3 manual lookups within 7 days
- Conversion: ≥ 60% of users completing 3+ lookups convert to paid subscription

### Business Success

**Month 1–2 (Validation):**
- 50+ paying users via beta launch through PHCC and r/HydronicsHeat
- Confirm: boiler manual coverage resolves 85%+ of real-world lookups
- Confirm: techs use invoice generation (not just manual lookup) — validates pricing power

**Month 3–4 (Traction):**
- 200 paying users (100 solo techs + 20 shop accounts)
- $4,000–$5,000 MRR
- 3+ organic community posts or forum threads recommending FieldCopilot without paid amplification

**Month 5–6 (Product-Market Fit):**
- 500 paying users
- $10,000–$12,500 MRR
- Net dollar retention > 100% (expansion from solo → shop tier)
- Monthly churn < 5%
- NPS > 50

**Month 12–18 (Scale):**
- 1,000 paying users ($79K MRR at blended $79/mo)
- Full HVAC + plumbing manual catalog live
- Jobber/Housecall Pro webhook integration live

### Technical Success

- OCR pipeline processes nameplate photos in < 5 seconds end-to-end
- RAG pipeline returns answers in < 10 seconds including retrieval and generation
- Offline mode covers top 5 boiler brands with pre-cached embeddings at app install
- System handles 500+ concurrent sessions without degradation
- Zero incorrect part number recommendations without a "verify with distributor" caveat
- PDF ingestion pipeline processes new manufacturer manuals in < 24 hours from submission

### Measurable Outcomes

| Metric | Target | Timeframe |
|--------|--------|-----------|
| OCR accuracy rate | > 90% correct model number, first attempt | At launch |
| Manual coverage hit rate | > 85% of queries return matching manual | At launch (boiler brands) |
| Time to first answer | < 30 seconds from photo to result | At launch |
| Trial → paid conversion | > 25% (users with 3+ lookups) | Month 1–2 |
| Weekly active techs (% of paid) | > 70% | Month 3 |
| Invoice feature adoption | > 40% of paying users within 30 days | Month 2 |
| Offline session % | > 20% of total sessions | Month 3 |
| MRR growth | > 15% month-over-month | Through Month 12 |
| Net dollar retention | > 100% | Month 6 |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP solves one workflow completely: **nameplate → manual → answer**, with invoice language generation as the second core value layer. Everything else is Phase 2.

**Core MVP capabilities:**
1. **Equipment Nameplate OCR** — photograph equipment nameplate; Mistral OCR extracts model number and manufacturer; system confirms match or prompts manual entry fallback
2. **Manual Retrieval + RAG Q&A** — indexed database for top 5 US boiler brands (Burnham, Weil-McLain, Peerless, Slant/Fin, Triangle Tube); natural language Q&A with page citation
3. **Parts List Generator** — tech describes symptom; system returns likely parts list with OEM part numbers from manual; includes "verify with distributor" caveat
4. **Invoice Language Generator** — tech describes repair; app generates professional service description paragraph with one-tap clipboard copy
5. **Offline Mode** — pre-cached embeddings for core boiler brands; works without cell signal; shows offline indicator; syncs on reconnection
6. **Free Trial + Paywall** — first 10 lookups free, no credit card required; $19/mo solo or $49/mo 5-tech shop; LTD option at launch

**Platform:** iOS and Android (React Native or Flutter). Web dashboard for account management and shop owner billing only — no field use on web.

**MVP success gate:** 85% coverage hit rate + 90% OCR accuracy + 60% trial conversion + $5K MRR within 60 days of public launch.

### Growth Features (Post-MVP)

- Full HVAC catalog expansion (match Bluon's 500K+ model coverage as the boiler-aware alternative)
- Plumbing equipment manuals (water heaters, PRVs, tankless units)
- Spanish-language interface for bilingual crews
- Jobber and Housecall Pro webhook integration (push invoice descriptions into FSM work orders)
- Team management dashboard for shop owners (tech activity, usage analytics)
- Photo-to-quote: photograph job site → AI generates itemized estimate

### Vision (Future)

- **Job history & asset tracking:** tech logs service history per equipment unit; shop builds per-asset knowledge base
- **Predictive maintenance:** recommendations based on equipment age, usage, and service history
- **Distribution integration:** Ferguson, Winsupply real-time parts pricing and availability
- **Insurance and warranty documentation:** auto-generate from job records
- **Platform play:** structured job data layer enabling distributors, manufacturers, and insurers to reach qualified small shops

---

## User Journeys

### Journey 1: Marcus, Solo Boiler Tech — Discovery and First Successful Use (Primary Happy Path)

Marcus runs a one-person HVAC/boiler operation in New England. He does 5–7 jobs per day. On a Thursday afternoon, he's in a customer's basement looking at a Weil-McLain GV90+ boiler displaying error code E5. The customer is watching. Marcus Googles it on his phone — spotty connection, slow, no clear answer. He posts in r/HydronicsHeat: "Anyone got the GV90+ manual? Getting E5 and can't find anything." A reply comes back within minutes: "Have you tried FieldCopilot? It has boilers."

Marcus taps the App Store link. Download takes 20 seconds. He opens the app. First screen: "Photograph the equipment nameplate." He snaps the photo. OCR extracts: `Weil-McLain GV90+ Series 3, Model 310-500-002`. He types: *What does error code E5 mean?*

FieldCopilot returns: **"Error code E5 on the GV90+ Series 3 indicates ignition failure. Installation and Service Manual, p. 34, Section 7.3. Common causes: dirty igniter, weak gas pressure. First step: check igniter ohms per Table 7-2."** The manual quote is highlighted. Marcus knows exactly what to do. He resolves the job on-site in 20 minutes.

That evening, Marcus uses the invoice language generator: *"Diagnosed E5 ignition failure. Cleaned igniter assembly, verified gas pressure at 3.5" WC. System restored to normal operation."* The app generates a professional service paragraph. He copies it to Jobber with one tap.

**Journey reveals requirements for:** OCR nameplate capture, model database lookup, RAG Q&A with citation, invoice language generation, clipboard copy.

---

### Journey 2: Sofia, Shop Tech — Unfamiliar Equipment, No Senior Tech Available (Edge Case)

Sofia works at a 4-truck mixed-trade shop. The owner, Dave, dispatched her to a boiler service call she's never handled before — a Peerless MI-05 showing abnormal pressure behavior. Dave isn't answering his phone. Sofia has 30 minutes before the customer needs to leave for work.

She photographs the nameplate. FieldCopilot identifies the model but warns: *"Offline — using cached data for Peerless."* The basement has no cell signal; the cached embeddings are working. She asks: *"What's the normal operating pressure for this boiler and what causes overpressure?"* 

FieldCopilot returns the answer from the Peerless manual with two citations and a note: *"Verify this reading with the pressure gauge on the relief valve tapping per Section 4, p. 18."* Sofia reads the manual section in the app, identifies a waterlogged expansion tank, and advises the customer she'll need to return with a new expansion tank. She logs the finding and uses the invoice language generator to draft a service note for Dave's review.

**Journey reveals requirements for:** Offline mode with graceful degradation, cached manual coverage indicator, parts suggestion with caveat, return-visit note capture.

---

### Journey 3: Dave, Shop Owner — Evaluating Team Plan for 4-Tech Shop (Secondary User / Buyer)

Dave owns the 4-truck shop where Sofia works. He heard about FieldCopilot when Sofia mentioned she used it on the Peerless job. He checks the website on his laptop. The pitch: *"One avoided callback per month covers the annual cost."* His shop does 400 jobs per year; 15–20 are callbacks, each costing $200–$400 in lost labor.

Dave signs up for the 5-tech shop plan at $49/mo. He sets up accounts for Sofia and two other techs. He views the web dashboard: account management, billing, usage summary (lookups per tech per week). He doesn't need a full analytics suite — he just wants to know the tool is being used and paying for itself.

Three weeks later, one of his techs avoids a callback by identifying the correct zone valve part from FieldCopilot's parts suggestion instead of guessing. Dave renews without question.

**Journey reveals requirements for:** Shop account creation, team member invite flow, web-based billing dashboard, basic usage summary (lookups per user), Stripe subscription management.

---

### Journey 4: Ben, Trade School Student — Free Trial as Learning Tool (Early Adopter)

Ben is completing his HVAC/R certificate in Pennsylvania. His instructor mentioned Bluon for refrigerant reference. Ben downloads every free tool he can find. He finds FieldCopilot through a Reddit thread in r/HVAC where someone says *"it's the only mobile thing covering boilers."*

Ben uses the free trial for exam prep — looking up boiler error codes, understanding sequence-of-operations from manual excerpts, using the app to explore equipment he hasn't encountered in class. He uses all 10 free lookups in one evening studying for his hydronics practical exam.

On Day 8, the paywall appears. Ben converts at $19/mo — it's less than a textbook. He recommends it to his cohort on a class group chat. Three classmates download it.

**Journey reveals requirements for:** Free trial (10-lookup gate, no credit card), clear conversion prompt at limit, friction-free $19/mo onboarding, App Store discoverability.

---

### Journey 5: App Failure — OCR Can't Read the Nameplate (Error Recovery)

A technician is servicing a 1980s Burnham boiler in poor condition. The nameplate is water-stained and partially illegible. FieldCopilot's OCR returns a low-confidence model number: *"Model number unclear — extracted: BW-4?2-P. Confidence: low."* The app surfaces a manual entry option: *"Couldn't read clearly — tap to enter model number manually."*

The tech types in the model number from memory (BW-402-P). FieldCopilot matches it in the Burnham database and continues the RAG Q&A workflow normally. If the model number isn't in the database, the app displays: *"Model not found in our boiler database. We cover [5 brands, X models]. Request this model →"* with a one-tap submission form.

**Journey reveals requirements for:** Low-confidence OCR fallback, manual model number entry, model-not-found messaging with request form, graceful degradation that preserves user trust.

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Marcus: First Use | OCR, model lookup, RAG Q&A, citation display, invoice generation, clipboard copy |
| Sofia: Offline Use | Offline mode, cached data indicator, parts suggestion with caveat, field note capture |
| Dave: Shop Buyer | Team account, invite flow, web billing dashboard, usage summary, Stripe management |
| Ben: Student Trial | Free trial gate, conversion prompt, low-friction signup, App Store presence |
| OCR Failure Recovery | Low-confidence fallback, manual entry, model-not-found messaging, model request form |

---

## Domain-Specific Requirements

### Accuracy and Liability

Field service knowledge tools carry implicit liability — a wrong parts recommendation or misread error code can result in equipment damage, safety incidents, or technician liability. Requirements:

- Every parts recommendation must include caveat: *"Confirm part numbers with your distributor before ordering"*
- Every answer citing manual content must display source: manufacturer, manual title, page number, section
- RAG system must not synthesize parts recommendations across multiple manual sources without explicit citation for each component
- Invoice language generation output must not include diagnostic conclusions beyond what the tech explicitly described — no AI-generated liability statements
- System must not generate repair instructions that contradict the cited manual source

### Intellectual Property — PDF Ingestion

- Manufacturer PDF manuals are indexed for embeddings only; full PDFs are never served to users
- Answers always link or reference the official manufacturer source
- System stores embeddings, not raw PDF content, in the retrieval layer
- Model: index content for search/retrieval (fair use for reference tools), always attribute to official source

### Offline Data Handling

- Pre-cached embeddings stored locally on device are for read-only retrieval
- No user data or query logs stored locally beyond session cache
- Usage logs (lookup count, feature events) sync to server when connection is restored
- Offline mode indicator must be clearly visible during offline sessions

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**RAG-over-manufacturer-manuals for field technicians** — applying RAG (Retrieval-Augmented Generation) to pre-indexed equipment manuals with OCR-triggered model identification is a novel workflow pattern. The closest analog is enterprise field knowledge tools (XOi/Specifx), but those run server-side workflows requiring connectivity, enterprise contracts, and human-uploaded documentation. FieldCopilot automates the nameplate → model → manual → answer chain on a consumer mobile app.

**Offline RAG via pre-cached embeddings** — storing compressed vector embeddings on-device for a specific equipment corpus (top 5 boiler brands) enables RAG queries without connectivity. This is technically novel in the mobile app space and directly addresses the basement/mechanical-room use case that eliminates Bluon's model in this context.

**Invoice language as a byproduct of job documentation** — transforming the technician's verbal repair description into professional invoice copy is a low-effort, high-value innovation that no competitor has pursued. It directly attacks the top technician pain point (admin time) with a feature that requires no additional workflow step.

### Market Context

The enterprise precedent ($230M XOi/Specifx exit) proves the market validates field knowledge tooling at scale. Bluon proves mobile-first adoption by HVAC techs. FieldCopilot's innovation is the specific intersection: mobile + offline + boiler/hydronics corpus + invoice generation + affordable pricing. No single competitor covers this combination.

### Validation Approach

- Pre-launch: test OCR on 100+ real nameplate photos in basement/low-light conditions; iterate before beta
- Beta launch: 50-tech cohort from PHCC + r/HydronicsHeat; measure coverage hit rate and OCR accuracy before public launch
- Coverage validation gate: 85% hit rate across top 5 boiler brands before public launch; 70% hit rate before HVAC expansion

### Risk Mitigation

| Innovation Risk | Mitigation |
|-----------------|------------|
| OCR accuracy in low-light conditions | Pre-launch field test 100+ photos; build manual fallback; Mistral OCR prompt engineering iteration |
| RAG inaccuracy on parts suggestions | Conservative prompts; always cite page; never synthesize across sources; feedback loop for incorrect suggestions |
| Offline embedding storage size | Compress embeddings per brand; download progressively; show storage footprint to user |
| Bluon expands to boilers | Move fast; build community moat in boiler forums before Bluon acts; invoice generation = differentiation Bluon can't match with its current free model |

---

## Mobile App Specific Requirements

### Platform Requirements

- iOS (minimum iOS 16) and Android (minimum Android 10) via React Native or Flutter single codebase
- Native camera integration for nameplate photography — not web camera fallback
- Background sync for offline usage log upload when connectivity is restored
- Push notifications for: account conversion prompt at trial limit, manual coverage expansion announcements
- Local storage for pre-cached boiler brand embeddings (estimated 50–150 MB per brand set)
- Web dashboard (React web app): account management, billing, team invite management, basic usage summary — not used for field lookup

### Device Permissions

- Camera: required for nameplate OCR (request on first launch)
- Local storage: required for offline embedding cache (request on download prompt)
- Network: optional — app functions in offline mode for cached brands
- Push notifications: optional — conversion prompts and product updates only

### Offline Architecture

- Pre-cached embeddings for top 5 boiler brands downloaded at first launch (or on WiFi prompt)
- RAG retrieval engine runs client-side against cached embeddings when offline
- LLM generation (answer synthesis) requires connectivity; offline mode returns manual excerpt only without AI synthesis
- Offline mode indicator: persistent banner in app header when no connectivity detected
- Query queue: if LLM synthesis fails due to no connectivity, app surfaces raw manual extract with *"Full AI answer requires connection"* message

### Technical Architecture Considerations

- OCR: Mistral OCR API (cloud) for online mode; fallback to on-device OCR (ML Kit or similar) for offline nameplate capture with lower accuracy
- RAG: vector database (Pinecone, Weaviate, or pgvector) for server-side; compressed FAISS index for on-device offline retrieval
- LLM: Claude Sonnet (Anthropic) for Q&A synthesis and invoice language generation
- PDF ingestion pipeline: automated PDF → chunk → embed → index; runs asynchronously; not in critical path
- Auth: JWT-based; Stripe for subscription management; no OAuth integrations in MVP

### Implementation Considerations

- Nameplate photography UI: fullscreen camera with overlay guide (rectangle frame for nameplate area), auto-capture on confidence threshold
- Q&A interface: simple text input with suggested questions per model type (e.g., "What does error code X mean?", "What parts do I need for zone valve replacement?")
- Invoice generation: single text area for repair description input; generated output displayed with one-tap copy
- Offline mode UX: clearly branded as "Offline Mode — cached [brand] manuals available"; grayed-out features that require connectivity

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove that the nameplate → manual → answer workflow works reliably in real field conditions (basements, low light, no cell signal) for the specific boiler/hydronics wedge. Revenue validation through trial-to-paid conversion.

**Resource Requirements:** 1–2 engineers (mobile + backend), 4–6 weeks to MVP. PDF ingestion pipeline and manual indexing are parallel-track work (can be done by non-engineers with scripting).

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (solo tech, boiler service call, nameplate OCR → answer)
- Sofia (offline mode, cached manual retrieval)
- Ben (free trial → conversion)
- OCR failure recovery (manual entry fallback)

**Must-Have Capabilities:**
- Equipment nameplate OCR with model number extraction and manual entry fallback
- Manual database with RAG Q&A for top 5 boiler brands (Burnham, Weil-McLain, Peerless, Slant/Fin, Triangle Tube)
- Parts list generator with OEM part numbers and verification caveat
- Invoice language generator with clipboard copy
- Offline mode with pre-cached embeddings for boiler brands
- Free trial (10 lookups, no credit card) + Stripe paywall ($19/mo solo, $49/mo 5-tech shop)
- LTD purchase option ($79 solo, $149 shop) on launch landing page
- Basic account management (iOS/Android) and web billing dashboard (shop owners)

### Post-MVP Features

**Phase 2 (Months 4–8):**
- Full HVAC catalog expansion (500K+ model coverage to compete with Bluon as the boiler-aware alternative)
- Plumbing equipment manuals (water heaters, PRVs, tankless)
- Spanish-language interface
- Jobber and Housecall Pro webhook integration
- Team management dashboard (shop owner view of tech usage)

**Phase 3 (Months 8–18):**
- Photo-to-quote (job site photo → AI-generated estimate)
- Job history and per-asset service record tracking
- Distribution integration (Ferguson, Winsupply parts pricing)
- Predictive maintenance recommendations

### Risk Mitigation Strategy

**Technical Risks:** OCR accuracy in low-light/worn nameplate conditions is the highest-risk technical factor. Mitigation: pre-launch field test with 100+ photos; iterative OCR prompt engineering; manual fallback always available.

**Market Risks:** Manual coverage depth (10K+ models per brand) must be sufficient to avoid "my model isn't there" churn. Mitigation: pre-launch coverage audit; model request form in-app; phased brand rollout.

**Resource Risks:** PDF ingestion pipeline (indexing 10K+ manuals) is non-trivial scope. Mitigation: start with top 5 boiler brands only (~500–1,000 models); use public PDFs from manufacturer websites; automate indexing pipeline early.

---

## Functional Requirements

### Equipment Identification

- FR1: Technician can photograph an equipment nameplate using the device camera within the app
- FR2: System extracts model number and manufacturer from a nameplate photo using OCR
- FR3: System displays extracted model number and manufacturer for technician confirmation before proceeding
- FR4: System indicates OCR confidence level and prompts manual entry when confidence is below threshold
- FR5: Technician can manually enter or correct a model number and manufacturer when OCR result is incorrect or unreadable
- FR6: System searches the manual database using the confirmed model number and returns the matched equipment entry
- FR7: System displays a "model not found" message with a one-tap model request form when the model is not in the database

### Manual Retrieval & Q&A

- FR8: Technician can type a natural language question about the identified equipment
- FR9: System retrieves relevant manual sections using RAG over the indexed manufacturer database
- FR10: System generates a natural language answer to the technician's question based on retrieved manual content
- FR11: System displays the source citation for every answer: manufacturer name, manual title, page number, section header
- FR12: System surfaces the exact manual excerpt alongside the generated answer
- FR13: System suggests follow-up questions relevant to the identified equipment type (e.g., "What does error code E5 mean?", "What's the pressure relief valve setting?")
- FR14: Technician can browse a list of recent questions and answers within the current session

### Parts Identification

- FR15: Technician can describe a symptom or failed component in natural language
- FR16: System returns a likely parts list with OEM part numbers sourced from the indexed manual parts table
- FR17: Every parts recommendation displays the manual source citation and includes the caveat: "Confirm part numbers with your distributor before ordering"
- FR18: System does not synthesize parts recommendations across multiple manual sources without citing each source individually

### Invoice Language Generation

- FR19: Technician can describe the repair performed in natural language
- FR20: System generates a professional service description paragraph suitable for a customer-facing invoice or work order
- FR21: Generated invoice text is displayed with a one-tap copy-to-clipboard action
- FR22: Technician can re-generate invoice text with a different description without leaving the current job session
- FR23: Invoice generation is available independently of the manual lookup flow (technician can open invoice generator directly)

### Offline Mode

- FR24: App downloads and caches pre-built embeddings for the top 5 boiler brands at first launch (or on WiFi prompt)
- FR25: App displays a persistent offline indicator when no network connectivity is detected
- FR26: Manual retrieval and RAG Q&A function in offline mode for cached boiler brands using on-device embeddings
- FR27: App displays which brands and models are available in offline mode and which require connectivity
- FR28: AI-synthesized answers require connectivity; offline mode returns the most relevant raw manual excerpt with a "Full AI answer requires connection" indicator
- FR29: App queues usage logs (lookup count, feature events) and syncs to server when connectivity is restored

### Trial, Subscription & Billing

- FR30: New users can access up to 10 manual lookups without creating an account or providing payment information
- FR31: App displays a lookup counter during the free trial showing remaining free lookups
- FR32: At the trial limit, app presents a subscription prompt with pricing ($19/mo solo, $49/mo 5-tech shop) and a brief value statement
- FR33: User can subscribe via in-app Stripe payment flow on iOS or Android
- FR34: User can purchase a Lifetime Deal (LTD) option via the launch landing page (not required in-app MVP)
- FR35: Subscribed users have unlimited lookups within their plan tier
- FR36: Shop plan users can invite up to 5 technicians to the account via email
- FR37: Shop owner can view basic usage summary: lookups per tech per week, on the web dashboard
- FR38: User can manage billing (upgrade, downgrade, cancel) from the in-app account settings or web dashboard

### Account Management

- FR39: User can create an account with email and password
- FR40: User can reset password via email link
- FR41: Shop owner can add and remove team members from the shop account
- FR42: Each team member accesses the app with their own login credentials under the shop account
- FR43: Account tier (solo or shop) is displayed in the app settings with current billing status

### Manual Database Management (Internal / Admin)

- FR44: Internal admin can submit new manufacturer PDF manuals for indexing via the ingestion pipeline
- FR45: System processes submitted PDFs (chunk → embed → index) asynchronously within 24 hours
- FR46: Technician can submit a "model not found" request including manufacturer name and model number
- FR47: System sends a confirmation notification to the technician when a requested model is added to the database

---

## Non-Functional Requirements

### Performance

- The nameplate OCR pipeline (photo capture to model number display) completes in < 5 seconds under normal network conditions
- The RAG Q&A pipeline (question submission to answer display) completes in < 10 seconds under normal network conditions
- Offline Q&A retrieval (from on-device cached embeddings to manual excerpt display) completes in < 3 seconds
- Invoice language generation completes in < 8 seconds under normal network conditions
- App cold launch time < 3 seconds on devices from the last 4 years
- The system handles 500 concurrent sessions without latency degradation above 15% from baseline

### Reliability

- Backend API uptime ≥ 99.5% during business hours (6 AM–9 PM local time, Monday–Saturday)
- Offline mode functions correctly regardless of server availability — cached brands remain accessible during outages
- Usage log sync retries automatically on connection restoration with no data loss
- OCR and RAG failures surface user-friendly fallback messaging; no unhandled crashes

### Security

- All data transmitted between app and server uses TLS 1.3
- User passwords hashed with bcrypt (minimum cost factor 12)
- Stripe handles all payment card data — no card data stored or transmitted through FieldCopilot infrastructure
- Pre-cached embeddings stored on-device are read-only and contain no PII
- Usage logs (anonymous query counts, feature events) contain no identifying query content
- Shop account access controls: team members can only access their own lookup history; shop owner can view aggregate usage counts (not individual query content)

### Scalability

- Backend architecture supports horizontal scaling to 10,000 concurrent users without code changes
- PDF ingestion pipeline processes up to 500 new manuals per day without degrading Q&A response time
- On-device embedding cache supports future brand expansion (up to 20 brands) within 500 MB total device storage

### Accessibility

- App meets WCAG 2.1 AA standards for color contrast and font sizing
- All interactive elements have accessible labels for screen reader compatibility
- Camera capture flow supports accessibility: audio cues for capture confirmation, text alternatives for all visual states
- Invoice generation text area supports standard iOS/Android accessibility gestures

### Integration

- Stripe Billing API for subscription management and payment processing
- Mistral OCR API for nameplate text extraction (online mode)
- Anthropic Claude API (Sonnet model) for RAG answer synthesis and invoice language generation
- Vector database (Pinecone or pgvector) for server-side embedding retrieval
- Apple App Store and Google Play Store distribution
- Phase 2 only: Jobber API and Housecall Pro webhook for invoice push integration

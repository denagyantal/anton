# Idea Evaluation — 2026-11-13

**Sources**: reddit-2026-11-13, hn-indiehackers-2026-11-13, competitor-analysis-2026-11-13, trends-2026-11-13
**Evaluator**: idea-evaluator agent
**Total ideas reviewed**: 28 distinct ideas across 4 sources

---

## Deduplication Notes

Before scoring, all ideas were cross-referenced against ~100+ existing shortlisted files. Most ideas today are **recurring signals** in existing tracked ideas. The table below summarizes canonical mappings:

| Today's Signal | Canonical File | Action |
|----------------|---------------|--------|
| Lightweight TMS for Small Carriers | `small-fleet-trucking-tms.md` (98/105) | Signal History update |
| Property Management 10–100 Units | `property-management.md` (100/105) | Signal History update |
| Affordable Jobber Alternative | `field-service-management.md` (90/105) | ↑2 score update → 92/105 |
| On-Site Change Order App | *(none)* | **NEW FILE CREATED** |
| Dental PMS Alternative | *(none for full PMS)* | **NEW FILE CREATED** |
| Simple Bookkeeping US Non-Accountants | `bookkeeping-accounting.md` (81/105 UK MTD) | Note: different US angle |
| Per-Job Cost Tracking for Crews | `ai-job-costing-trades.md` (86/105) | Signal History update |
| Vet PMS Alternative | `veterinary-practice.md` (94/105) | Signal History update |
| Google Review Reporting | *(none)* | Tier 2, no file needed |
| Pest Control AI Layer | `pest-control.md` (98/105) | Signal History update |
| Crewbird FSM + Google LSA | `field-service-management.md` | Covered in update |
| HVAC Rebate/Warranty (WorkHero angle) | `hvac-maintenance-agreements.md` (93/105) | Signal History update |
| Field Manual Copilot HVAC | `hvac-maintenance-agreements.md` | Signal History update |
| ZenMaid 2.0 (AI features) | *(none targeted)* | Tier 3 |
| Pierline Clone (mobile detailing) | *(none)* | Tier 3 |
| RentingOS US equivalent | *(none)* | Tier 2 |
| Avenue US Equivalent | `ai-voice-booking-trades.md` (91/105) | ↑2 → 93/105 |
| Bilingual SOP for Trade Crews | *(none)* | **NEW FILE CREATED** |
| Latchel Lite small landlord | `property-maintenance-coordination.md` | Signal History update |
| HVAC Commercial Field Docs | `hvac-maintenance-agreements.md` | Signal History update |
| HVAC Flat-Rate FSM | `hvac-flat-rate-pricebook.md` (95/105) | ↑2 → 97/105 |
| Lawn Care Solo-to-5 | `landscaping-lawn-care.md` (99/105) | Signal History update |
| Pest Control Chemical Compliance | `pest-control.md` (98/105) | Signal History update |
| Auto Repair Customer Communication | `auto-repair-shop-management.md` (100/105) | Signal History update |
| Owner-Operator Trucking OS | `small-fleet-trucking-tms.md` (98/105) | Signal History update |
| AI Voice Agents for Solo Trades | `ai-voice-booking-trades.md` | ↑2 → 93/105 |
| HVAC Maintenance Agreement Tracker | `hvac-maintenance-agreements.md` | Signal History update |
| DOT Compliance Small Fleets | `fmcsa-dot-compliance-tracker.md` (93/105) | ↑2 → 95/105 |
| Solo Contractor Estimate+Profit | `ai-job-costing-trades.md` (86/105) | Signal History update |
| AI Reg Compliance for Roofing | *(none)* | Tier 2 |
| Green Industry Software Gap | `landscaping-lawn-care.md` | Signal History update |
| Trade License/Cert Expiry Tracker | `trade-license-renewal-tracker.md` (89/105) | ↑2 → 91/105 |
| Small Event Venue Booking | `venue-entertainment-management.md` | Signal History update |

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. On-Site Change Order App for Contractors — Score: 85/105 ⭐ NEW

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Micro-SaaS already getting $49/first sale in 48 hours; construction forums active |
| Competitor Weakness | 5/5 | 2x | 10 | No standalone mobile-first change order tool; Procore/Buildertrend overkill |
| LTD Viability | 5/5 | 2x | 10 | Narrow scope, low infra cost; $59 LTD = clear ROI story |
| No Free Tier | 4/5 | 1x | 4 | Contractors pay for things that protect them from billing disputes |
| Channel Access | 4/5 | 2x | 8 | r/ConstructionManagers, r/handyman, r/Construction, r/AskContractors |
| Content Potential | 3/5 | 1x | 3 | "change order app contractors", "mobile change order management" |
| AppSumo Fit | 5/5 | 2x | 10 | Perfect point solution — simple ROI story, no bloat |
| Review Potential | 4/5 | 1x | 4 | Contractors who stop billing disputes will evangelize |
| MRR Path | 3/5 | 3x | 9 | Could expand to full project tracking; version-controlled docs = recurring |
| Build Feasibility | 5/5 | 2x | 10 | 30-sec flow, photo, e-sign, PDF — 1-2 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Contractors, handymen, remodelers |

**Total: 85/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build 1-week MVP: open job → add change order → price + description → customer signs on phone → PDF emailed → running project total tracked. Launch at $19/mo or $59 LTD.
**Risks**: (1) Feature gap from full PM tools — scope creep risk; (2) paper/PDF workarounds are "good enough" for many; (3) small TAM alone, needs to expand to full estimates
**Key Source Links**:
- https://www.reddit.com/r/ConstructionManagers/comments/1o99xjg/whats_your_dream_change_order_solution/
- https://www.reddit.com/r/handyman/comments/1ucorke/how_do_you_document_small_extra_work_before_it/
- https://www.reddit.com/r/microsaas/comments/1q19ics/i_validated_a_boring_b2b_microsaas_in_48_hours/
- https://www.reddit.com/r/Construction/comments/1pp1gcz/is_this_enough_for_a_legit_change_order_on_site/
**Signal Frequency**: First identified 2026-11-13 from Reddit; micro-SaaS builder validated in 48 hours — high conviction single-source

---

### 2. Bilingual SOP System for Trade Crews — Score: 84/105 ⭐ NEW

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | 803K US construction establishments; 500 customers × $99/mo modeled = $49.5K MRR |
| Competitor Weakness | 5/5 | 2x | 10 | Trainual $249/mo for office teams; zero field-crew-specific bilingual SOP tools |
| LTD Viability | 5/5 | 2x | 10 | $299 LTD for 50 SOPs; voice-first + QR delivery = AppSumo gold |
| No Free Tier | 4/5 | 1x | 4 | Business compliance + training = paid purchase |
| Channel Access | 4/5 | 2x | 8 | r/landscaping, r/Construction, FB "Lawn Care Business Owners", roofing groups |
| Content Potential | 3/5 | 1x | 3 | "bilingual SOP construction", "trade crew training English Spanish" |
| AppSumo Fit | 5/5 | 2x | 10 | 5/5 LTD potential per Startup Heist analysis; "QR sticker on equipment" is demo-able |
| Review Potential | 3/5 | 1x | 3 | Owners will review if crew safety incidents decrease |
| MRR Path | 3/5 | 3x | 9 | $99/mo per company; upsell: more SOPs, more languages, analytics |
| Build Feasibility | 5/5 | 2x | 10 | Voice → AI transcribe → bilingual structured SOP → QR code; 2-week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Construction, landscaping, roofing — mixed crews |

**Total: 84/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build voice-to-SOP pipeline: owner speaks into phone → AI structures bilingual English/Spanish checklist → publishes as mobile-optimized page → QR code generated for equipment sticker. $99/mo flat per company. Market in landscaping/roofing Facebook groups.
**Risks**: (1) AI translation quality for safety-critical instructions; (2) adoption by field crews (non-technical); (3) competition from generic AI tools users could DIY
**Key Source Links**:
- https://www.startupheist.com/the-99-qr-sticker-bilingual-sops-for-small-trade-crews/
- https://www.reddit.com/r/landscaping/ (FB groups and forum community)
**Signal Frequency**: First identified 2026-11-13 from HN/Indie Hackers (Startup Heist analysis); single strong source with solid modeling

---

### 3. HVAC Flat-Rate Pricebook + FSM Combo — Score: 97/105 ↑ (was 95)
*Existing file: `hvac-flat-rate-pricebook.md`*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | TNFR $400+/mo for 3 techs; ServiceTitan $245-398/tech; 500K+ contractors |
| Competitor Weakness | 5/5 | 2x | 10 | Jobber zero pricebook; HCP $149+/mo for it; ServiceTitan enterprise-only |
| LTD Viability | 5/5 | 2x | 10 | $79-149 LTD; immediate ROI on first upsell |
| No Free Tier | 4/5 | 1x | 4 | People pay for pricing tools |
| Channel Access | 5/5 | 2x | 10 | r/HVAC 250K+, r/Plumbing, HVAC-Talk, FB "HVAC Business Owners" |
| Content Potential | 4/5 | 1x | 4 | "flat rate pricing HVAC", "HVAC pricebook software" |
| AppSumo Fit | 5/5 | 2x | 10 | No HVAC FSM on AppSumo; first-mover confirmed |
| Review Potential | 4/5 | 1x | 4 | Tradespeople review if it increases average ticket value |
| MRR Path | 3/5 | 3x | 9 | Integrations with Jobber/HCP/QB as upsell path |
| Build Feasibility | 5/5 | 2x | 10 | CRUD + pricing logic + good/better/best tablet presentation |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC/plumbing — deeply boring, essential |

**Total: 97/105** (↑2 from best-ever competitor intelligence this cycle)

**Verdict**: BUILD
**Decision Status**: NEW (tracking since 2026-05-13)
**Signal Frequency**: 20+ mentions across 6+ months — consistently increasing

---

### 4. Pest Control Route & Chemical Compliance — Score: 98/105 (stable)
*Existing file: `pest-control.md`*

Today's new confirmation: HN 448-vote thread reconfirmed + competitor analysis best-ever GorillaDesk gap documentation (25-stop routing limit, no QB Desktop, no chemical compliance). FieldRoutes ServiceTitan acquisition continues active migration window.

**Signal Frequency**: 50+ mentions across 8 months — increasing, highest-conviction boring-biz signal in portfolio

---

### 5. Small Fleet Trucking TMS — Score: 98/105 (stable)
*Existing file: `small-fleet-trucking-tms.md`*

New Reddit thread: r/OwnerOperators "What TMS are you actually using? Everything seems overpriced." confirms ongoing pain. Competitor analysis documents: ITS Dispatch IFTA errors, TruckingOffice no modern UX, Truckbase $3,500+/yr for 1-5 trucks overkill. AI-native competitors (TruckFlow.ai, Hemut, Overroad) validating category.

**Signal Frequency**: 60+ mentions across 8 months — increasing

---

### 6. Landscaping & Lawn Care OS — Score: 99/105 (stable)
*Existing file: `landscaping-lawn-care.md`*

New today: Competitor analysis documents Jobber $39→$119 price jump when first employee hired (single clearest pricing pain point). No bulk route editing, no satellite measurement. LaunchPad survey: 36% of market still not using any software. Green Industry Growth Index confirms growth lag.

**Signal Frequency**: 40+ mentions across 8 months — stable high

---

### 7. Auto Repair Shop Management — Score: 100/105 (stable)
*Existing file: `auto-repair-shop-management.md`*

New today: Competitor analysis provides clean AI customer communication layer angle — Tekmetric QuickBooks connector fragile (Back Office add-on), no canned SMS reminders, Mitchell1 no cloud sync. AI missed-call text-back = highest-requested missing feature. Podium/Birdeye $200-400/mo for what should be an add-on at $99/mo. 190K+ independent shops at 2.6% penetration.

**Signal Frequency**: 30+ mentions across 7 months — stable highest score

---

### 8. Field Service Management (Affordable Jobber Alt) — Score: 92/105 ↑ (was 90)
*Existing file: `field-service-management.md`*

New today: Jobber confirmed at $267-400+/mo for small teams — multiple threads with explicit switching intent. Crewbird (indie dev building for father's carpet cleaning company) validates practitioner-built FSM pattern. Google LSA integration gap documented: no major FSM player has cracked ROI tracking for Local Service Ads spend. WorkHero $5M seed validates small HVAC back-office automation market.

**Signal Frequency**: 50+ mentions across 8 months — increasing

---

### 9. HVAC Maintenance Agreements — Score: 93/105 (stable)
*Existing file: `hvac-maintenance-agreements.md`*

New today: Trends confirms 118K HVAC shops using spreadsheets for renewal tracking. WorkHero $5M seed validates small HVAC back-office automation market. Field Manual Copilot ($79K MRR modeled) confirms shops' willingness to pay for specific workflow tools. Standalone "AgreementDesk" at $29-49/mo still unoccupied.

**Signal Frequency**: 25+ mentions across 6 months — stable

---

### 10. AI Voice Booking Agent for Trades — Score: 93/105 ↑ (was 91)
*Existing file: `ai-voice-booking-trades.md`*

New today: **Avenue** (Australia) confirmed at AU$85K/month (~US$55K) in 12 months from zero — 100% bootstrapped. This is the clearest proof point that the US market is wide open. Avoca AI $1B at $1K-3.5K/mo leaves 90%+ of small trades (1-5 techs) without affordable AI call handling. 74% missed calls rate confirmed.

**Signal Frequency**: 15+ mentions across 2 months — increasing sharply

---

### 11. FMCSA DOT Compliance Tracker — Score: 95/105 ↑ (was 93)
*Existing file: `fmcsa-dot-compliance-tracker.md`*

New today: TruckDocsAI launched at $19.99/mo for single trucks (proves willingness to pay), FleetCollect launched (AI document recognition for DQ files and IFTA). Two new entrants = category validation. Photo-to-compliance mobile-first workflow still unclaimed as category leader.

**Signal Frequency**: 20+ mentions across 4 months — increasing

---

### 12. Trade License & Certification Expiry Tracker — Score: 91/105 ↑ (was 89)
*Existing file: `trade-license-renewal-tracker.md`*

New today: Trends selects as #1 pick for immediate evaluation — "fastest to build (2 weeks), very high LTD fit, compliance-driven non-optional need, no category leader." Built-in module in ServiceTitan/FieldEdge only; no standalone affordable tool for 5-15 person shops. $19-29/mo for up to 20 employees — "pay once, never worry about lapses again" LTD pitch.

**Signal Frequency**: 10+ mentions across 2 months — increasing

---

### 13. Property Management for Small Landlords — Score: 100/105 (stable)
*Existing file: `property-management.md`*

New today: Reddit documents AppFolio hard 50-unit minimum at $3-4/unit/month, DoorLoop unreliable (8-12 hour notification delays, merchant account bugs), Buildium predatory billing. San Antonio landlord: onboarding alone $15K with new alternatives. 10-99 unit sweet spot completely unserved by any clean tool. Multiple subreddits 200K+ members with constant switching intent.

**Signal Frequency**: 30+ mentions across 8 months — stable highest score

---

### 14. Dental PMS Alternative — Score: 76/105 ⭐ NEW (new angle vs. existing production reconciliation file)
*New file: `dental-pms-alternative.md`*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Dentrix/Curve/Eaglesoft all have paying customers; ~200K active practices |
| Competitor Weakness | 4/5 | 2x | 8 | Dentrix crashes, Curve goes down 6+ hrs, Dental Intel $598/mo + predatory contracts |
| LTD Viability | 1/5 | 2x | 2 | No LTD viable — compliance/HIPAA/ongoing support mandatory |
| No Free Tier | 5/5 | 1x | 5 | Dental practices can't use free software |
| Channel Access | 4/5 | 2x | 8 | r/Dentistry 150K+, r/Dentists, dental association forums |
| Content Potential | 4/5 | 1x | 4 | "dental practice management software", "Dentrix alternative" |
| AppSumo Fit | 1/5 | 2x | 2 | No AppSumo fit; dental PMS can't be LTD |
| Review Potential | 4/5 | 1x | 4 | Dentists write detailed software reviews |
| MRR Path | 5/5 | 3x | 15 | $299-499/mo per practice; high ARPU, low churn |
| Build Feasibility | 2/5 | 2x | 4 | Dental PMS = 3-6 month minimum build (scheduling, patient records, treatment planning, insurance billing, HIPAA compliance) |
| Boring Business Bonus | 4/5 | 2x | 8 | Dental offices |

**Total: 75/105**

**Note**: Low LTD/AppSumo scores are correct — dental PMS requires ongoing compliance updates and cannot be LTD. High MRR potential but requires significant build effort and capital. Best suited for a team with dental industry domain expertise.

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Signal Frequency**: First identified 2026-11-13 from Reddit — 6 linked threads with strong frustration signals

---

## Tier 2: Worth Exploring (Score 55-74)

### Per-Job Cost Tracking for Multi-Crew Teams — Score: 73/105
*Existing file: `ai-job-costing-trades.md` (86/105) covers closely*

New Reddit signal specifically about mobile-first job P&L for field crews (landscaping, construction, cleaning). "Hardhat Ledger" mentioned. Specific gap: linking material receipts (photos) to jobs via mobile. Existing file covers this territory. Consider updating `ai-job-costing-trades.md` with field crew mobile angle.

---

### RentingOS US Equivalent — Score: 72/105
*No existing file*

RentingOS confirmed at $84K MRR (Latin America). US equivalent: recurring billing + automated SMS/email collections for HVAC/pool/pest/lawn. No US product at this simplicity level. Gap is real but payment infrastructure complexity + existing competitors (Housecall Pro billing, Jobber payments) reduce urgency.

---

### Google Review Reporting for Local Service Businesses — Score: 72/105
*No existing file*

Validated at $800 MRR with zero marketing — 3 of 4 approached manually converted immediately. Weekly/monthly automated Google review report at $19/mo vs. Birdeye/Podium $200-400/mo. TAM is large but space is getting crowded (Grade.us, NiceJob at lower prices). Best angle: niche down to specific verticals (HVAC, dental, pest control) for GTM.

**Key Source**: https://www.reddit.com/r/micro_saas/comments/1vscopq/i_built_a_tool_nobody_asked_for_and_its_making/

---

### AI Regulation Compliance for Roofing — Score: 69/105
*No existing file*

Texas AI contractor regulations require disclosure when AI generates estimates. Multiple states following. CompanyCam $2B + Brelly AI + IMGING = roofing AI tools already adopted. "AI Compliance Kit for Contractors" = state-by-state tracker + disclosure templates + audit log. Very early market but regulatory trend is clear. Revisit in 90 days when more states have rules.

---

### Small Event Venue Booking Software — Score: 69/105
*Existing file: `venue-entertainment-management.md`*

72K+ small venues managing via spreadsheets. Skedda/Tripleseat start at $79-150/mo built for hotel banquet halls. Gap at $29/mo for solo venue operator: shareable booking page, integrated deposit payment, digital contract/waiver, reminder sequence. Moderate AppSumo fit. Less "boring" than trades, but legitimate small business gap.

---

### Veterinary PMS Alternative — Score: 65/105
*Existing file: `veterinary-practice.md` (94/105 — communication layer)*

Today's signal is about a *full PIMS* alternative (Covetrus Pulse unreliable, Weave doesn't integrate despite promising). Very similar to dental PMS challenge: huge pain, but complex build, no LTD, compliance requirements. Same challenge as dental PMS. 32,000 US veterinary practices, 80% independent. Consider after dental PMS proves the model.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Why Pass |
|------|----------|
| **ZenMaid 2.0** | ZenMaid has 11-year head start and loyal users; competing with established vertical SaaS without clear wedge is hard. Better to build adjacent (pool, mobile grooming) than compete head-on. |
| **Pierline Clone (mobile car detailing)** | Replicating embedded payments + SaaS requires specific fintech expertise. Payment spread model is hard to bootstrap. High barrier without clear payment processing partner relationships. |
| **Dental Intelligence Alternative** | $598/mo analytics layer already established; niche within niche. The dental production reconciliation (existing shortlisted file) is a better-scoped angle. |
| **HVAC Commercial Refrigeration Docs** | $5.2K MRR case study is too small to justify vertical pivot; better served as a feature within pest control / HVAC compliance tools. |
| **Latchel Lite Clone** | `property-maintenance-coordination.md` already tracks this angle. Property management file covers the broader opportunity at 100/105. |

---

## Top 3 Recommendations

1. **On-Site Change Order App** — Score: 85/105 — ⭐ NEW opportunity — "30 seconds on-site: describe change, enter price, customer signs on phone, PDF emailed, never dispute again." Build in 1 week. Launch at $19/mo or $59 LTD. Perfect AppSumo candidate.
   - Key source: https://www.reddit.com/r/microsaas/comments/1q19ics/i_validated_a_boring_b2b_microsaas_in_48_hours/

2. **HVAC Flat-Rate Pricebook + FSM** — Score: 97/105 ↑ — Best-ever competitor intelligence today confirms the gap remains wide open: Jobber has zero pricebook at any tier, Housecall Pro gates it at $149+/mo, ServiceTitan $245-398/tech/mo. Good/better/best tablet presentation at $79-149 LTD = highest-conviction long-running signal.
   - Key source: https://fieldcamp.ai/reviews/servicetitan/ | https://traqfield.com/blog/housecall-pro-vs-jobber-hvac

3. **Bilingual SOP System for Trade Crews** — Score: 84/105 — ⭐ NEW opportunity — Voice-to-bilingual-SOP with QR sticker delivery for 5-30-person English/Spanish trade crews. Trainual $249/mo doesn't serve field crews. Zero competition in segment. 2-week build, 5/5 LTD/AppSumo fit. 803K US construction establishments.
   - Key source: https://www.startupheist.com/the-99-qr-sticker-bilingual-sops-for-small-trade-crews/

---

## Signal Summary Table

| Idea | Tier | Score | Change | Sources Today | LTD? |
|------|------|-------|--------|---------------|------|
| On-Site Change Order App | 1 | 85 | NEW | Reddit | Yes |
| Bilingual SOP for Trade Crews | 1 | 84 | NEW | HN/IH | Yes |
| HVAC Flat-Rate FSM | 1 | 97 | ↑2 | Competitor | Yes |
| Field Service Mgmt (Jobber Alt) | 1 | 92 | ↑2 | Reddit, HN/IH | Yes |
| AI Voice Booking for Trades | 1 | 93 | ↑2 | Trends, HN/IH | Moderate |
| FMCSA DOT Compliance | 1 | 95 | ↑2 | Trends | Yes |
| Trade License/Cert Tracker | 1 | 91 | ↑2 | Trends | Yes |
| Pest Control Compliance | 1 | 98 | Stable | HN/IH, Competitor | Yes |
| Small Fleet Trucking TMS | 1 | 98 | Stable | Reddit, Competitor | Yes |
| Landscaping Lawn Care OS | 1 | 99 | Stable | Competitor, Trends | Yes |
| Auto Repair Shop Mgmt | 1 | 100 | Stable | Competitor | Moderate |
| HVAC Maintenance Agreements | 1 | 93 | Stable | Trends, HN/IH | Yes |
| Property Management | 1 | 100 | Stable | Reddit | Yes |
| Dental PMS Alternative | 1 | 76 | NEW | Reddit | No |
| Per-Job Cost Tracking | 2 | 73 | Stable | Reddit | Yes |
| RentingOS US Equivalent | 2 | 72 | NEW | HN/IH | Moderate |
| Google Review Reporting | 2 | 72 | NEW | Reddit | Yes |
| AI Reg Compliance Roofing | 2 | 69 | NEW | Trends | Moderate |
| Small Event Venue Booking | 2 | 69 | Stable | Trends | Yes |
| Veterinary PMS Full | 2 | 65 | NEW | Reddit | No |
| ZenMaid 2.0 | 3 | — | Pass | HN/IH | — |
| Pierline Clone | 3 | — | Pass | HN/IH | — |

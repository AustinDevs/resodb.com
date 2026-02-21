# RESO DB White Paper

## The End of Replication: How Governed Live-Query Access Solves Real Estate Data's Security, Cost, and Intelligence Problems

**A White Paper by RESO DB**
**2026**

---

## Document Purpose & Audience

This white paper is intended for MLS executives, brokerage CTOs, PropTech founders, real estate investors, and industry policymakers. It makes the case that the legacy data replication model — the foundation of MLS data distribution for over two decades — has become a liability for every participant in the ecosystem, and that a governed live-query model is the necessary successor.

---

## Table of Contents

1. Executive Summary
2. How Real Estate Data Distribution Works Today
3. The True Cost of Replication
4. The Security Problem: Your Data Is Only as Secure as Your Least Secure Licensee
5. The Grey Market: $100M+ in Unauthorized Data Commercialization
6. Search Is Not Intelligence: The Analytical Gap
7. The Governed Live-Query Model
8. Tax Data and Cross-Source Intelligence
9. Natural Language Access: Expanding Who Can Use Data
10. AI and Data Privacy: Why Local Models Matter
11. Bring Your Own Data / Bring Your Own Database
12. Implementation: From Replication to Platform
13. Case Reference: San Diego MLS and the API-First Shift
14. Conclusion
15. About RESO DB

---

## 1. Executive Summary

**Length:** ~500 words

**Key points to cover:**

- The MLS data distribution model has relied on replication — full database copies sent to licensees — for over 20 years.
- This model was designed for an era when query-based access at scale was not technically feasible. That era is over.
- Replication creates three compounding problems: duplicative cost across the ecosystem, security exposure that scales with the number of licensees, and an inability to support analytical or exploratory queries without significant infrastructure investment.
- The industry loses an estimated $100M+ annually in unauthorized data commercialization enabled by unmonitored replicated copies (cite REdistribute research).
- A governed live-query model — where data remains in a centralized, auditable environment and licensees query it rather than copy it — resolves all three problems while opening new capabilities (natural language access, tax data cross-referencing, real-time analytics) that replication cannot support.
- RESO DB is this platform. This paper explains the problem, the solution, and the path forward for each stakeholder.

---

## 2. How Real Estate Data Distribution Works Today

**Length:** ~1,000 words

**Subsections:**

### 2.1 The RETS Era
- Brief history of RETS (Real Estate Transaction Standard)
- Designed around bulk data download / replication
- Why it made sense at the time: limited bandwidth, no cloud infrastructure, applications needed local data for performance
- How RETS established replication as the default distribution model

### 2.2 The Modern Protocols (Bridge API, Spark API, Web API)
- Evolution to RESTful APIs
- These modernized the *transport* but not the *model* — most implementations still support and encourage full replication
- API-based access exists but is used primarily for initial sync, not as a replacement for local copies

### 2.3 What Replication Actually Looks Like
- Step-by-step walkthrough for non-technical readers:
  1. Licensee obtains MLS authorization
  2. Licensee builds or buys ETL (Extract, Transform, Load) pipeline
  3. Full database copy is downloaded to licensee's infrastructure
  4. Incremental sync processes run continuously (new listings, updates, delists, photo changes)
  5. Licensee normalizes data to their internal schema
  6. Licensee builds applications, analytics, or products on top of their copy
- Diagram: MLS → [copy] → Vendor A, [copy] → Vendor B, [copy] → Vendor C ... [copy] → Vendor N

### 2.4 How Many Copies Exist
- Typical MLS market has 20-100+ licensees each maintaining independent copies
- Multiply across ~580 MLS organizations in the US
- Tens of thousands of independent copies of overlapping data

---

## 3. The True Cost of Replication

**Length:** ~1,200 words

**Subsections:**

### 3.1 Cost Per Licensee
- Engineering headcount: 2-4 dedicated FTEs for ETL pipeline development, maintenance, and monitoring ($300K-$700K/year)
- Infrastructure: databases, compute, storage, monitoring, backup, disaster recovery ($50K-$200K/year)
- MLS integration maintenance: schema changes, API version updates, protocol migrations ($50K-$100K/year)
- Data quality and compliance: monitoring, auditing, MLS policy compliance ($25K-$75K/year)
- Total per company: $425K-$1.075M annually
- Note: these costs are incurred regardless of company size — a 5-person startup replicating MLS data pays similar infrastructure costs as a 500-person company

### 3.2 Ecosystem-Wide Duplicative Spend
- If 50 vendors in a market each spend $500K/year on replication: $25M/year in a single market
- Scale across all US MLS markets: billions in collective spend on identical infrastructure
- This is not competitive differentiation — it's table-stakes overhead that every participant pays

### 3.3 The Opportunity Cost
- Every dollar spent on replication is not spent on product development
- Every engineer maintaining ETL pipelines is not building customer-facing features
- PropTech companies whose core value is their application or analytics layer are forced to also become data infrastructure companies
- The company next door is spending the same money on the same infrastructure for the same data — neither gains a competitive advantage from this investment

### 3.4 The Hidden Cost: Data Staleness
- Replication introduces latency between the source and the copy
- Sync intervals range from minutes to hours depending on implementation
- Applications may serve stale data without knowing it
- Live-query access eliminates this category of data quality issues entirely

---

## 4. The Security Problem: Your Data Is Only as Secure as Your Least Secure Licensee

**Length:** ~1,200 words

**Subsections:**

### 4.1 The Chain of Custody Problem
- When data leaves the MLS and arrives on a licensee's server, the MLS's ability to protect that data ends
- The licensee is now independently responsible for: encryption, access controls, monitoring, patching, backup, incident response
- MLS license agreements specify data handling requirements, but enforcement depends on periodic audits, not real-time monitoring

### 4.2 The Variance in Security Investment
- Illustration: In a typical MLS market:
  - Vendor A: SOC 2 certified, dedicated security team, $500K/year security budget
  - Vendor B: Mid-size company, reasonable security practices, IT team handles security alongside other duties
  - Vendor C: 3-person startup, data on a cloud instance with default configurations, no dedicated security personnel
  - All three have the same data. The security posture varies by orders of magnitude.
- The MLS's data is only as secure as Vendor C

### 4.3 Breach Exposure
- If any single licensee is breached, the MLS data on that server is exposed
- The MLS may not learn of the breach for weeks or months
- The replicated data may include sensitive fields (seller contact information, financial details, showing instructions) depending on the license scope
- Post-breach remediation is complicated by the distributed nature of replicated data — you can't "recall" copies

### 4.4 The Compliance Burden on MLS Providers
- MLS organizations increasingly face pressure to demonstrate data governance
- Auditing 50-100 independent licensees for compliance with data handling policies is resource-intensive
- Periodic audits provide a snapshot, not continuous assurance
- Reference: Realtyna article on San Diego MLS evolution — the shift toward API-first governance as a response to these exact concerns

---

## 5. The Grey Market: $100M+ in Unauthorized Data Commercialization

**Length:** ~1,000 words

**Subsections:**

### 5.1 What Is the Grey Market
- Replicated MLS data quietly repurposed for uses beyond the scope of the license
- Common grey market activities:
  - Selling data access to unauthorized third parties
  - Using listing data to train AI/ML models without MLS authorization
  - Aggregating and repackaging data as "market intelligence" products
  - Providing institutional analytics (hedge funds, REITs) using broker-licensed feeds

### 5.2 Why Replication Enables the Grey Market
- Quote from Realtyna article: "Legacy replication models make it nearly impossible to detect or prevent the unauthorized 'back-door' commercialization of listing data."
- Once data is replicated, the MLS has no real-time visibility into how it's queried, transformed, or redistributed
- Contractual restrictions exist but are unenforceable without monitoring capabilities
- The economic incentive to monetize replicated data is significant — institutional data consumers will pay premium prices for comprehensive, clean real estate datasets

### 5.3 The Revenue Impact
- REdistribute research estimates: industry loses $100M+ annually in recurring revenue from unauthorized data commercialization
- This revenue rightfully belongs to MLS organizations and their member brokers
- The grey market depresses the perceived value of legitimate data licensing by creating unauthorized alternatives

### 5.4 Why This Problem Is Growing
- AI and machine learning have dramatically increased demand for large real estate datasets
- Institutional investors increasingly rely on data-driven strategies
- The proliferation of PropTech companies has multiplied the number of replicated copies
- Each additional copy is another potential source of unauthorized redistribution

---

## 6. Search Is Not Intelligence: The Analytical Gap

**Length:** ~1,200 words

**Subsections:**

### 6.1 What Current Tools Do
- Every consumer-facing and most professional MLS tools are built around attribute-based search
- User inputs criteria (beds, baths, price range, location) → system returns matching listings
- This is necessary but fundamentally limited — it answers "show me what's available" but not "show me what's happening" or "show me where the opportunity is"

### 6.2 What Professionals Actually Need
- Agents need: market trend comparisons, competitive positioning, farm area intelligence
- Brokers need: market share analysis, agent performance metrics, expansion opportunity identification
- Investors need: cross-data-source pattern recognition, emerging market detection, tax data cross-referencing
- These are exploratory and analytical queries, not search queries

### 6.3 The Infrastructure Barrier
- To run analytical queries, you need the data in a queryable format — a database, not an API
- Current APIs are designed for search (limited parameters, paginated results, no aggregation support)
- This creates a catch-22: to get intelligence from MLS data, you must first replicate it and build analytical infrastructure
- The cost and complexity of this infrastructure puts analytical capability out of reach for individual agents, small brokerages, and investors who don't have engineering teams

### 6.4 Example: The Queries Nobody Can Run Today (Without Replication)
- Table of 8-10 analytical queries with explanations:
  - Neighborhood appreciation velocity with inventory correlation
  - Absentee owner concentration in appreciating zip codes (requires tax data cross-reference)
  - Brokerage market share trends over time
  - Days-on-market trend analysis as a leading indicator
  - Price reduction frequency as a market health signal
  - Cash sale percentage trends as an institutional activity indicator
  - New listing velocity vs. absorption rate by micro-market
  - Assessment-to-sale-price ratios for value gap identification (requires tax data)

### 6.5 The Intelligence Opportunity
- If every agent, broker, and investor could run these queries — in plain English, on demand — the quality of decision-making across the industry would transform
- This is not hypothetical: the data exists. The analytical methods exist. Only the access model is missing.

---

## 7. The Governed Live-Query Model

**Length:** ~1,500 words

**Subsections:**

### 7.1 The Concept
- Instead of distributing copies of data, provide governed query access to the canonical dataset
- Licensees send queries → receive results
- Data never leaves the governed environment
- Every query is logged, metered, and attributable to a specific user/organization

### 7.2 How It Works — Technical Overview
- Data ingestion: MLS provides data in RESO or RETS format → platform normalizes to RESO Data Dictionary 2.0
- Query layer: ClickHouse columnar analytics engine provides sub-second queries on billions of records
- Access control: Multi-tenant architecture with field-level permissions per licensee
- Audit trail: Every query logged with user identity, timestamp, data accessed, and compute consumed
- Metering: Usage-based pricing measured in compute seconds

### 7.3 What Changes for Each Stakeholder

#### For MLS Providers
- Full visibility into data usage patterns across all licensees
- Ability to detect anomalous usage that may indicate unauthorized redistribution
- Revenue model shifts from flat-fee licensing to usage-based models that capture true data value
- Compliance posture strengthened — can demonstrate governed access to boards and regulators
- No more reliance on periodic audits — continuous monitoring replaces snapshot compliance

#### For Technology Vendors
- Eliminate replication infrastructure entirely: no ETL pipelines, no sync monitoring, no database maintenance
- Redirect engineering resources (2-4 FTEs) to product development
- Redirect infrastructure budget ($50K-$200K/year) to scaling their actual product
- Access to live, always-current data — no sync latency, no stale results
- RESO DB SQL compatibility means minimal application changes

#### For Brokerages and Investors
- Access to analytical and exploratory queries without building infrastructure
- Natural language interface: ask questions in plain English, get insights
- Cross-reference MLS data with tax records instantly
- No technical skills required — the platform interprets the intent and returns actionable results
- Conversational depth: ask follow-up questions to dig deeper into any result

#### For Agents
- Market intelligence on demand without waiting for reports
- Competitive analysis, farm area trends, and listing presentation data in seconds
- Mobile-friendly: query from the field, between showings, during client meetings
- Differentiation: agents who use data win more listings and close more deals

### 7.4 The Security Transformation
- Comparison table: Replication Model vs. Live-Query Model across security dimensions
  - Data copies: Many vs. Zero
  - MLS visibility: Periodic audits vs. Real-time monitoring
  - Breach exposure: Each licensee's server vs. Single governed environment
  - Unauthorized redistribution: Undetectable vs. Detectable through query pattern analysis
  - Compliance: Self-reported vs. Continuous and auditable
  - Incident response: Distributed and delayed vs. Centralized and immediate

---

## 8. Tax Data and Cross-Source Intelligence

**Length:** ~1,000 words

**Subsections:**

### 8.1 Why Tax Data Matters
- MLS listings tell you what's for sale. Tax records tell you who owns what, how long they've owned it, what it's assessed at, and whether they live there.
- Combining these datasets unlocks a category of analysis that neither can provide alone
- Example: identifying absentee owners in appreciating markets requires both listing data (market trends) and tax data (owner occupancy, mailing address)

### 8.2 The Current State of Tax Data Access
- Available through legacy providers (CoreLogic, ATTOM) via APIs with limited search parameters
- You can look up a specific parcel, but you can't run analytical queries across the dataset
- No native integration with MLS data — manual matching or custom ETL required
- Result: only organizations that have built replication infrastructure for BOTH MLS and tax data can run cross-source queries

### 8.3 RESO DB's Approach
- Fully queryable tax records: every field, no parameter limits
- Pre-matched to MLS listing data (parcel number linkage)
- Same query interface — SQL or natural language — for both data sources
- Available data fields:
  - Ownership: names, mailing addresses, ownership duration, entity type (individual, LLC, trust, corporation)
  - Assessment: assessed value, land value, improvement value, tax amount, exemptions
  - Property characteristics: year built, lot size, building size, zoning, construction type
  - Transfer history: deed transfers, sale dates, sale amounts
  - Exemptions: homestead, veteran, senior, agricultural, disability

### 8.4 Cross-Reference Use Cases
- Detailed walkthrough of 4-5 cross-reference scenarios with the specific data points involved:
  1. **Absentee owner prospecting**: MLS market trends + tax roll mailing address mismatch + ownership duration
  2. **Assessment gap analysis**: MLS list/sale prices + tax assessed values → identifying systematic underassessment
  3. **Rental market identification**: Properties without homestead exemptions in predominantly owner-occupied neighborhoods → potential rental stock
  4. **Institutional buyer tracking**: Recent deed transfers to LLC/trust/corporate entities + MLS transaction history
  5. **Estate sale probability**: Long-term ownership (20+ years) + owner age estimation from public records + no recent refinance activity

---

## 9. Natural Language Access: Expanding Who Can Use Data

**Length:** ~1,000 words

**Subsections:**

### 9.1 The Technical Barrier
- Until now, extracting intelligence from real estate data required technical skills: SQL, API knowledge, data engineering
- This limited analytical data access to a fraction of the industry: developer teams at PropTech companies and a handful of data-savvy analysts
- The vast majority of real estate professionals — agents, brokers, investors — are excluded from direct data analysis

### 9.2 Natural Language as the Interface
- RESO DB accepts questions in plain English
- The platform interprets the intent, constructs the appropriate query, executes it, and returns results with context
- Users can ask follow-up questions to refine, narrow, or expand their analysis
- No training required. No documentation to read. No query language to learn.

### 9.3 How It Works (Non-Technical Explanation)
- User types or speaks a question
- RESO DB's local language model interprets the question and determines what data is needed
- The platform constructs and executes the appropriate SQL query
- Results are returned both as data (tables, charts) and as natural language summaries with context
- The conversation continues — each follow-up builds on the previous context

### 9.4 Example Conversational Analysis
- Full walkthrough of a multi-turn conversation:
  - An investor exploring a new market
  - Starting broad ("What are the fastest appreciating zip codes in the San Antonio metro?")
  - Narrowing based on results ("Of those, which have the highest absentee ownership?")
  - Getting specific ("Show me individual properties in 78245 owned by out-of-state entities for more than 5 years, not currently listed")
  - Taking action ("Export these results with owner contact information from tax records")

### 9.5 The Market Expansion This Creates
- Current addressable users for real estate data analytics: ~50,000 (developers, data teams)
- Potential addressable users with natural language access: ~2,000,000+ (agents, brokers, investors)
- This is not an incremental improvement — it's a category expansion

---

## 10. AI and Data Privacy: Why Local Models Matter

**Length:** ~800 words

**Subsections:**

### 10.1 The Industry's AI Anxiety
- MLS organizations and brokerages are increasingly concerned about AI companies ingesting listing data
- Several major MLSs have already restricted or banned data sharing with AI providers
- NAR and state associations have published guidance on AI data usage
- The concern is justified: once data is sent to a third-party AI company, control over its use is lost

### 10.2 The Third-Party AI Problem
- When natural language features are powered by third-party AI APIs (OpenAI, Google, etc.):
  - MLS data is transmitted to external servers for processing
  - Data may be retained for model improvement
  - Data may be used for training future models
  - The AI provider's data retention and usage policies may change over time
  - MLS data commingled with training data from other sources

### 10.3 RESO DB's Local-Only Architecture
- All natural language processing runs on local language models within RESO DB's infrastructure
- No MLS data is ever transmitted to any third-party AI provider — not OpenAI, not Google, not Anthropic, not anyone
- Query data and results are not stored for model training purposes
- This is not a configuration option — it is the architecture of the system
- The same governance controls (audit logging, access controls, tenant isolation) apply to natural language queries as to SQL queries

### 10.4 Why This Matters for Adoption
- MLS providers can authorize AI-powered data access without the data privacy concerns that have slowed AI adoption in the industry
- Brokerages can offer agents natural language data tools without violating MLS data policies
- The trust barrier that has prevented AI adoption in real estate data is removed

---

## 11. Bring Your Own Data / Bring Your Own Database

**Length:** ~800 words

**Subsections:**

### 11.1 Bring Your Own Data
- Not all relevant data lives in MLS or public tax records
- Organizations have proprietary data: CRM records, internal transaction history, market research, renovation cost data, rental rate surveys
- RESO DB accepts custom data sources and maintains the replication/normalization infrastructure
- Custom data becomes queryable alongside MLS and tax data through the same SQL and natural language interface
- Use cases:
  - Brokerage CRM data cross-referenced with market trends
  - Investment firm portfolio data cross-referenced with comparable sales
  - Property management rental data cross-referenced with ownership records

### 11.2 Bring Your Own Database
- For organizations with data residency requirements, regulatory constraints, or internal security policies that require data to remain on their own infrastructure
- How it works:
  - Data is stored on the customer's servers / cloud infrastructure
  - RESO DB maintains ingestion, updates, synchronization, and normalization
  - All platform features remain available: natural language queries, SQL API, audit logging, access controls
  - The customer retains physical custody of the data
- Benefits:
  - Meets internal compliance and data governance requirements
  - No vendor lock-in — data is in your database, in standard formats
  - Full platform capability without data custody concerns
  - Can satisfy client or MLS requirements that data not reside with third parties

### 11.3 The Flexibility Spectrum
- Diagram showing the range of deployment options:
  - **Fully hosted**: RESO DB manages everything — data storage, infrastructure, features
  - **BYOD**: Customer's proprietary data + RESO DB's library data, all on RESO DB infrastructure
  - **BYODB**: All data on customer infrastructure, RESO DB manages updates and provides features
- Each option has the same query capabilities, the same natural language access, the same audit trail

---

## 12. Implementation: From Replication to Platform

**Length:** ~800 words

**Subsections:**

### 12.1 For Technology Vendors: Migration Path
- Step 1: Connect existing application to RESO DB SQL API (minimal code changes due to SQL compatibility)
- Step 2: Run parallel with existing replication for validation period
- Step 3: Deprecate replication infrastructure once queries are validated
- Step 4: Reallocate engineering and infrastructure resources
- Timeline: weeks to months depending on application complexity, not quarters to years

### 12.2 For MLS Providers: Onboarding
- Step 1: Provide data feed in RESO or RETS format (most MLSs already produce this)
- Step 2: RESO DB normalizes to RESO Data Dictionary 2.0
- Step 3: Configure licensee entitlements (field-level access per licensee)
- Step 4: Licensees begin querying through governed platform
- Step 5: Monitor usage dashboards, set up anomaly alerts
- MLS retains control over licensing terms, access levels, and pricing

### 12.3 For Brokerages and Investors: Getting Started
- Step 1: Request access through MLS-authorized channel
- Step 2: Start asking questions in natural language
- Step 3: No engineering, no infrastructure, no technical skills required
- Time to first insight: minutes, not months

---

## 13. Case Reference: San Diego MLS and the API-First Shift

**Length:** ~800 words

**Subsections:**

### 13.1 Background
- San Diego MLS recognized the limitations and risks of the traditional replication model
- Commissioned analysis of their data distribution ecosystem
- Findings published in Realtyna's case study: "How San Diego MLS Evolved from a Data Provider to a Data Ecosystem Orchestrator"

### 13.2 Key Findings from the Case Study
- Legacy replication models create governance gaps that are impossible to close through policy alone
- The shift to API-first architecture provides real-time visibility into data usage
- Moving from data distribution to data ecosystem orchestration changes the MLS's role from "data provider" to "data governance platform"
- Quantified risk: unauthorized data commercialization represents material revenue loss
- The API-first model enables new revenue streams (usage-based pricing, tiered access, analytics-as-a-service)

### 13.3 How RESO DB Extends This Vision
- San Diego MLS's API-first architecture addressed the transport layer — how data moves from MLS to licensees
- RESO DB extends this to the consumption layer — how data is actually queried, analyzed, and used
- The combination eliminates the need for any data replication while providing capabilities (natural language, cross-source analysis) that neither API-first architecture nor replication can offer alone

---

## 14. Conclusion

**Length:** ~500 words

**Key points to cover:**

- The replication model served the industry for 20+ years. Its time has passed.
- The costs (infrastructure, engineering, opportunity cost) are borne by every participant and benefit none.
- The security risks (least-secure-licensee, grey market, breach exposure) grow with every additional copy.
- The analytical limitations (search-only tools, infrastructure barrier to intelligence) keep the industry's most valuable data locked away from the professionals who need it most.
- A governed live-query model — with natural language access, tax data cross-referencing, local AI, and bring-your-own flexibility — resolves every one of these problems.
- The question is not whether the industry will move beyond replication. It's whether you'll be leading that transition or reacting to it.
- Call to action for each audience segment.

---

## 15. About RESO DB

**Length:** ~200 words

- Brief company description
- Mission statement
- Contact information
- Links to platform demo, documentation, and sales

---

## Appendix A: Glossary

Define key terms for non-technical readers:
- **Replication / ETL** — The process of copying and transforming data from one system to another
- **MLS (Multiple Listing Service)** — Regional organizations that aggregate and distribute real estate listing data
- **RESO (Real Estate Standards Organization)** — Industry body that defines data standards, including the RESO Data Dictionary
- **RETS (Real Estate Transaction Standard)** — Legacy protocol for accessing MLS data, designed around bulk download
- **ClickHouse** — High-performance columnar database engine designed for real-time analytics
- **API (Application Programming Interface)** — A way for software systems to communicate and exchange data
- **SQL (Structured Query Language)** — The standard language for querying and managing relational databases
- **Natural Language Processing** — AI technology that enables computers to understand and respond to human language
- **Multi-tenant architecture** — System design where multiple organizations share the same infrastructure but data is kept strictly separated
- **Field-level permissions** — Access controls that restrict visibility at the individual data field level, not just the table or record level
- **Parcel number** — Unique identifier assigned to a property by the county assessor, used to link MLS and tax records

## Appendix B: Reference Query Library

### Agent Queries
| # | Natural Language Query | What It Reveals |
|---|---|---|
| 1 | "What's the average days on market in 78704 vs. the Austin metro for 3-bed homes?" | Farm area competitiveness vs. broader market |
| 2 | "Show me listings with 2+ price reductions in the past 60 days in my MLS" | Motivated sellers and potential overpricing |
| 3 | "Which neighborhoods saw the biggest increase in new listings this month vs. last?" | Emerging inventory — early listing opportunities |
| 4 | "Compare my farm area's median price per square foot to the three adjacent zips" | Relative value positioning for listing presentations |
| 5 | "What percentage of closings in 78745 last quarter were above asking price?" | Market heat for buyer expectation-setting |

### Broker Queries
| # | Natural Language Query | What It Reveals |
|---|---|---|
| 1 | "Show our brokerage's market share by zip code for the past 12 months" | Geographic strengths and gaps |
| 2 | "Compare our average sale-to-list-price ratio with the top 3 competing brokerages" | Competitive pricing effectiveness |
| 3 | "Which zip codes have 50+ monthly transactions where we have zero listings?" | Expansion opportunity identification |
| 4 | "Rank our agents by listing-to-close conversion rate this quarter" | Performance benchmarking |
| 5 | "Show me month-over-month listing volume trends for offices in the metro" | Market momentum and staffing signals |

### Investor Queries
| # | Natural Language Query | What It Reveals |
|---|---|---|
| 1 | "Find zip codes where DOM is declining, inventory is above average, and 30%+ properties have absentee owners" | Sweet spot: appreciating market with motivated non-occupant sellers |
| 2 | "Show properties with out-of-state owner mailing addresses, built before 1985, assessed below $300K" | Value-add renovation candidates held by distant owners |
| 3 | "Which neighborhoods have the highest concentration of LLC-owned residential properties?" | Institutional investor activity mapping |
| 4 | "Find areas where assessment-to-sale-price ratio is below 0.7" | Systematic underassessment — potential appeal upside |
| 5 | "Show markets where cash sale percentage declined 10%+ year-over-year" | Institutional pullback — potential buyer's market forming |

### Developer Queries (SQL)
```sql
-- 1. Monthly absorption rate by micro-market
SELECT
    PostalCode,
    DATE_TRUNC('month', CloseDate) as Month,
    COUNT(*) as ClosedSales,
    SUM(ClosePrice) as TotalVolume,
    ROUND(AVG(ClosePrice / NULLIF(ListPrice, 0) * 100), 1) as AvgSaleToListPct
FROM properties
WHERE StandardStatus = 'Closed'
    AND CloseDate >= CURRENT_DATE - INTERVAL '12 months'
    AND City = 'Austin'
GROUP BY PostalCode, DATE_TRUNC('month', CloseDate)
ORDER BY PostalCode, Month;

-- 2. Absentee owner analysis with tax cross-reference
SELECT
    p.PostalCode,
    COUNT(*) as TotalProperties,
    COUNT(CASE WHEN t.OwnerMailingAddress_State != p.StateOrProvince
        THEN 1 END) as OutOfStateOwners,
    ROUND(AVG(EXTRACT(YEAR FROM CURRENT_DATE) - t.DeedTransferYear), 1)
        as AvgOwnershipYears,
    ROUND(AVG(p.ListPrice), 0) as AvgListPrice,
    ROUND(AVG(t.AssessedValue), 0) as AvgAssessed
FROM properties p
JOIN tax_records t ON p.ParcelNumber = t.ParcelNumber
WHERE p.City = 'San Antonio'
GROUP BY p.PostalCode
HAVING COUNT(*) > 50
ORDER BY OutOfStateOwners DESC;

-- 3. Price reduction pattern analysis
SELECT
    City,
    PostalCode,
    COUNT(*) as TotalActive,
    COUNT(CASE WHEN PriceChangeCount >= 2 THEN 1 END) as MultipleReductions,
    ROUND(
        COUNT(CASE WHEN PriceChangeCount >= 2 THEN 1 END)::numeric /
        NULLIF(COUNT(*), 0) * 100,
    1) as MultiReductionPct,
    ROUND(AVG(DaysOnMarket), 0) as AvgDOM
FROM properties
WHERE StandardStatus = 'Active'
    AND StateOrProvince = 'TX'
GROUP BY City, PostalCode
HAVING COUNT(*) > 20
ORDER BY MultiReductionPct DESC
LIMIT 25;
```

---

## Appendix C: Competitive Landscape Reference

| Dimension | RESO DB | SourceRE / RealtyFeed | CoreLogic / ATTOM | Traditional Replication |
|---|---|---|---|---|
| Primary focus | Data intelligence platform | MLS data distribution & governance | Data licensing & aggregation | Self-managed infrastructure |
| Eliminates replication | Yes | Partial (supports both) | No | No (IS replication) |
| Natural language queries | Yes (local AI) | No | No | No |
| Tax data integration | Yes, fully queryable | No | Yes, but separate APIs with limited params | Self-managed |
| Bring Your Own Data | Yes | No | No | N/A |
| Bring Your Own Database | Yes | No | No | Yes (your DB by default) |
| SQL compatibility | PostgreSQL/MySQL | Proprietary API | Proprietary APIs | Vendor-dependent |
| AI data privacy | Local models only | N/A | Unclear | N/A |
| Target users | All stakeholders | MLS providers & vendors | Enterprise data consumers | Developers |
| Audit & governance | Built-in, real-time | Built-in | Per-product | Self-managed |

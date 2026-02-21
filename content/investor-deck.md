# RESO DB — Investor Slide Deck

---

## Slide 1: Title

**RESO DB**
*Stop Searching. Start Exploring Your Data.*

The modern data platform for real estate intelligence.

[Company Logo]
[Date]
[Confidential]

---

## Slide 2: The Problem

### Real Estate Has a $100M Data Infrastructure Problem

**The replication model is broken.**

Every technology company that wants to use MLS data must:
1. Copy the entire database to their own servers
2. Build and maintain ETL pipelines for each MLS source
3. Pay for infrastructure to store and serve duplicate data
4. Employ engineers to monitor, fix, and update these systems

**The result:**
- Hundreds of companies independently replicate the same data
- Billions in collective infrastructure spend on identical copies
- MLS providers lose visibility and control once data is copied
- The industry loses an estimated **$100M+ annually** in unauthorized data commercialization through the "grey market" (REdistribute)

**Nobody wins in this model except the infrastructure vendors.**

---

## Slide 3: The Market Gap

### Search Is Not Intelligence

Every tool in the market does the same thing: **search listings by attributes.**

*3 bed, 2 bath, $400K-$600K, 78704.*

That's search. But agents, brokers, and investors need **intelligence**:

- "Which neighborhoods are appreciating fastest with declining inventory?"
- "Where are absentee owners concentrated in aging housing stock?"
- "How does our brokerage's market share compare across zip codes?"

**To run these analytical queries today, you need to build a data warehouse.** That means replicating data, hiring engineers, and maintaining infrastructure — just to ask a question.

**RESO DB makes these queries accessible to everyone — in plain English or SQL — without any infrastructure.**

---

## Slide 4: The Solution

### RESO DB: Real Estate Intelligence Without the Infrastructure

**We accept data. We normalize it. We make it queryable. No replication required.**

| Capability | Description |
|---|---|
| **MLS Data Ingestion** | Accept datasets directly from MLS providers in RESO or RETS format |
| **Tax Data** | Fully queryable tax and assessment records — no limited API parameters |
| **RESO DB SQL** | Structured query language compatible with PostgreSQL, MySQL, and standard SQL |
| **Natural Language** | Ask questions in plain English. Get analytics. Dig deeper through conversation. |
| **Bring Your Own Data** | Users bring proprietary data sources. We maintain the infrastructure. |
| **Bring Your Own Database** | Data stays on customer infrastructure. We maintain updates and features. |
| **Local AI Only** | No data sent to third-party AI. Local models only. Data never used for training. |

---

## Slide 5: How It Works

### From Raw Data to Intelligence in Three Steps

```
┌─────────────┐     ┌─────────────┐     ┌─────────────────────────┐
│  DATA IN     │     │  NORMALIZE   │     │  QUERY & EXPLORE        │
│              │ --> │              │ --> │                         │
│  MLS (RESO/  │     │  Standardize │     │  SQL API                │
│  RETS)       │     │  to RESO     │     │  Natural Language       │
│  Tax Records │     │  Data Dict   │     │  Conversational AI      │
│  Custom Data │     │  2.0         │     │  BI Tool Connectivity   │
└─────────────┘     └─────────────┘     └─────────────────────────┘
```

**Key differentiator:** Data stays in our governed environment. Users query live data. No copies leave the platform. Every access is logged and auditable.

---

## Slide 6: Four Customer Segments

### Who We Serve

| Segment | Pain Point | RESO DB Value |
|---|---|---|
| **Agents & Brokers** | Can only search by attributes. No analytics without technical skills. | Natural language queries. Market intelligence on demand. No SQL required. |
| **Investors** | Need cross-referenced data (MLS + tax). Currently requires building data infrastructure. | Instant MLS + tax data cross-referencing. Absentee owner identification. Trend analysis in plain English. |
| **Technology Vendors** | Spend 20-40% of engineering on replication infrastructure that every competitor also maintains. | Eliminate replication team. Query live data via SQL API. Redirect engineering to product. |
| **MLS Providers** | Data replicated to dozens of servers with varying security. No visibility into actual usage. Grey market risk. | Governed access. Real-time usage monitoring. Per-licensee audit trails. Usage-based revenue model. |

---

## Slide 7: The Replication Tax (Technology Vendors)

### Every PropTech Company Pays the Same Hidden Tax

**Typical replication infrastructure cost per vendor:**

| Cost Category | Annual Estimate |
|---|---|
| Engineering (2-4 FTEs for ETL/data) | $300K - $700K |
| Infrastructure (databases, compute, storage) | $50K - $200K |
| MLS integration maintenance | $50K - $100K |
| Data security & compliance | $25K - $75K |
| **Total per company** | **$425K - $1.075M** |

**And every vendor replicates the same data.**

50 vendors in a market = 50 copies of the same database, 50 ETL pipelines, 50 security implementations of varying quality.

**RESO DB proposition:** Eliminate this entire line item. Query the data live. Reallocate those engineers and that budget to your actual product.

---

## Slide 8: Data Security Story (MLS Providers)

### Your Data Is Only as Secure as Your Least Secure Licensee

**The current model:**
```
        MLS Database
       /    |    \     \
    Copy  Copy  Copy  Copy  ...50 copies
      |     |     |     |
   Vendor  Vendor Vendor Vendor
   ($500K  ($200K ($50K  ($5K
   security) sec)  sec)   sec) <-- Your data is here too
```

**The RESO DB model:**
```
        MLS Database
             |
        [ RESO DB ]
        Governed Access
       / |    |    \
   Query Query Query Query  ...50 licensees
     |     |     |     |
   Vendor Vendor Vendor Vendor
   (No copy. No security liability. Every query logged.)
```

> "Legacy replication models make it nearly impossible to detect or prevent the unauthorized 'back-door' commercialization of listing data."

**With RESO DB:** Zero copies. Full audit trail. Real-time anomaly detection. Usage-based billing that captures true data value.

---

## Slide 9: Tax Data Advantage

### Beyond Listings: Tax Data Changes Everything

**Current state:** Tax data is available through APIs with limited search parameters. You can look up a specific parcel but can't run analytical queries across the dataset.

**RESO DB:** Fully queryable tax records. Every field. No parameter limits. Cross-referenced with MLS data.

**Example queries that become trivial:**

| Query | Use Case |
|---|---|
| "Find absentee-owned properties in appreciating zip codes held 10+ years" | Investor prospecting |
| "Identify properties where assessed value is 30%+ below comparable sales" | Value gap analysis |
| "Show corporate-owned residential properties in neighborhoods with rising rental rates" | Portfolio analysis |
| "Map homestead exemption coverage by neighborhood" | Rental vs. owner-occupied market analysis |
| "Find properties with recent ownership transfers to LLCs or trusts" | Institutional buyer tracking |

**This data exists. Nobody has made it explorable until now.**

---

## Slide 10: Natural Language Interface

### Ask in Plain English. Get Actionable Intelligence.

**The old way:**
1. Learn SQL or an API query language
2. Read documentation for each data source
3. Write and debug queries
4. Interpret raw data tables
5. Repeat for follow-up questions

**The RESO DB way:**
1. Ask a question in plain English
2. Get summarized results with context and insights
3. Ask follow-up questions to dig deeper

**Example conversation:**
> **User:** "Which neighborhoods in the Austin metro have seen the biggest increase in absentee ownership over the past 12 months?"
>
> **RESO DB:** *Returns a ranked table of neighborhoods with absentee ownership growth rates, current percentages, and median property values. Highlights the top 5 with commentary on potential investment implications.*
>
> **User:** "For the top 3, show me properties that have been owned for more than 10 years, aren't currently listed, and have assessed values below $300K."
>
> **RESO DB:** *Returns a filtered property list with owner duration, assessed values, last sale price, and estimated current market value based on comparable sales.*

**No SQL. No API docs. No engineering team. Just answers.**

**Critical privacy note:** All natural language processing uses **local language models only**. No MLS data is ever sent to OpenAI, Google, or any third-party AI provider. Data is never stored or used for model training.

---

## Slide 11: Competitive Landscape

### How We're Different

| | RESO DB | SourceRE / RealtyFeed MLS Router | Traditional Replication |
|---|---|---|---|
| **Eliminates replication** | Yes — live queries | Supports both (legacy + real-time) | No — built on replication |
| **Natural language queries** | Yes — local AI | No | No |
| **Tax data integration** | Yes — fully queryable | No | Self-managed |
| **Bring Your Own Data** | Yes | No | N/A |
| **Bring Your Own Database** | Yes | No | Your database by default |
| **SQL compatibility** | PostgreSQL/MySQL compatible | Proprietary API | Varies |
| **AI data privacy** | Local models only, never shared | N/A | N/A |
| **Target users** | Agents, brokers, investors, vendors, MLS | MLS providers primarily | Developers |

**SourceRE/RealtyFeed** focuses on MLS-to-vendor data distribution and governance. They are an MLS operations platform.

**RESO DB** focuses on making data *explorable and actionable* for all stakeholders — including the non-technical ones. We are a data intelligence platform.

---

## Slide 12: Business Model

### Revenue Streams

**1. Compute-Based Pricing (Primary)**
- Users pay for query compute seconds consumed
- Sub-second precision metering
- Scales with usage — from free tier to enterprise

| Tier | Price | Target |
|---|---|---|
| Developer | $0/mo (100 compute seconds) | Individual developers, prototyping |
| Growth | $299/mo + $0.02/compute second | Brokerages, small PropTech, analysts |
| Enterprise | Custom volume pricing | Large brokerages, MLS providers, aggregators |

**2. Data Licensing (Revenue Share)**
- MLS providers make their data licensable through the platform
- RESO DB takes a platform fee on data license transactions
- Aligns incentives: we grow when MLS revenue grows

**3. Platform Fees**
- Bring Your Own Data hosting and maintenance
- Bring Your Own Database management
- Premium support and SLA tiers

---

## Slide 13: Go-to-Market

### Land and Expand Strategy

**Phase 1: Technology Vendors (Beachhead)**
- Highest immediate pain (replication costs)
- Quantifiable ROI ($400K-$1M annual savings)
- Technical decision-makers who can evaluate quickly
- Each vendor becomes a distribution channel to their MLS relationships

**Phase 2: MLS Providers**
- Data governance and revenue story resonates with MLS boards
- San Diego MLS case study (via Realtyna article) validates the shift away from replication
- Each MLS onboarded unlocks their entire licensee network

**Phase 3: Brokerages & Investors**
- Natural language interface lowers the barrier to zero technical skill
- Tax data cross-referencing is a unique differentiator
- Word-of-mouth in brokerage networks drives organic growth

**Phase 4: Individual Agents**
- Mobile-first natural language interface
- Embedded into brokerage accounts
- Per-seat or per-query pricing

---

## Slide 14: Market Size

### Total Addressable Market

**MLS Technology Spending:**
- ~580 MLS organizations in the US
- Average technology spending per MLS: $1-5M annually
- **MLS TAM: $580M - $2.9B**

**PropTech Data Infrastructure:**
- ~2,000+ PropTech companies use MLS data
- Average replication infrastructure cost: $400K-$1M per company
- **PropTech TAM: $800M - $2B**

**Brokerage Analytics:**
- ~106,000 real estate brokerages in the US (NAR)
- Analytics/data tool spend growing at 15%+ annually
- **Brokerage TAM: $1B+** (conservative, growing)

**Tax Data Services:**
- Real estate tax data market: $2B+ annually
- Currently served by legacy providers with limited query capabilities

**Combined SAM (Serviceable):** $500M+ near-term across tech vendors, MLS providers, and mid-to-large brokerages

---

## Slide 15: Technology Architecture

### Built for Scale, Security, and Compatibility

```
┌──────────────────────────────────────────────────────────┐
│                    RESO DB Platform                       │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐   │
│  │ Ingestion │  │ Natural  │  │   RESO DB SQL API    │   │
│  │ Engine    │  │ Language │  │   (PostgreSQL/MySQL   │   │
│  │ RESO/RETS │  │ Engine   │  │    compatible)        │   │
│  │ Tax Data  │  │ (Local   │  │                      │   │
│  │ Custom    │  │  LLMs)   │  │   REST + JDBC/ODBC   │   │
│  └──────────┘  └──────────┘  └──────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │            ClickHouse Analytics Engine            │    │
│  │         Sub-second queries on billions of rows    │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │
│  │ Tenant   │  │ Audit    │  │ Field-   │  │ Usage  │   │
│  │ Isolation│  │ Logging  │  │ Level    │  │ Meter  │   │
│  │          │  │          │  │ Perms    │  │ /Bill  │   │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘  │
└──────────────────────────────────────────────────────────┘

    ▲               ▲               ▲              ▲
    │               │               │              │
┌───┴───┐     ┌─────┴─────┐  ┌─────┴─────┐  ┌────┴────┐
│  MLS  │     │   Agent/  │  │  PropTech  │  │ Customer│
│Provider│     │  Broker   │  │  Vendor    │  │  BYODB  │
│ (Data │     │  (Natural │  │  (SQL API  │  │ (Their  │
│  In)  │     │   Lang)   │  │  /SDK)     │  │  Infra) │
└───────┘     └───────────┘  └───────────┘  └─────────┘
```

**Key technical decisions:**
- **ClickHouse** for columnar analytics — sub-second on billions of rows
- **Local LLMs** for natural language — zero data leakage
- **RESO Data Dictionary 2.0** as the canonical schema — industry standard compliance
- **Multi-tenant architecture** with field-level permissions — governance built in, not bolted on

---

## Slide 16: Data Privacy & Competitive Moat

### Why "Local AI Only" Matters

The real estate industry is justifiably concerned about AI companies ingesting listing data for model training. Major MLSs have already restricted or banned data sharing with AI providers.

**RESO DB's position is unambiguous:**
- No MLS data is ever transmitted to OpenAI, Google, Anthropic, or any third-party AI provider
- All natural language processing runs on local language models within our infrastructure
- Query data and results are never stored for model training purposes
- This is not a setting or an option — it's the architecture

**This creates a trust moat:** MLS providers and brokerages can adopt AI-powered data exploration without the data privacy risk that has made them reluctant to engage with other AI platforms.

---

## Slide 17: Traction & Milestones

### Where We Are

*[Company to fill in with actual metrics]*

- Platform capabilities: [status]
- MLS partnerships: [count/pipeline]
- Technology vendor pilot customers: [count]
- Monthly query volume: [metric]
- Revenue: [metric]
- Team size: [count]

### Near-Term Milestones
- [ ] First MLS data provider live on platform
- [ ] Tax data coverage for [X] states/counties
- [ ] Natural language query GA release
- [ ] First 10 technology vendor customers
- [ ] First brokerage customers using natural language interface
- [ ] Bring Your Own Database feature GA

---

## Slide 18: Team

*[Company to fill in]*

| Name | Role | Background |
|---|---|---|
| | CEO | |
| | CTO | |
| | VP Engineering | |
| | VP Sales | |

### Advisors
*[List advisors with relevant real estate or data industry experience]*

---

## Slide 19: The Ask

*[Company to fill in]*

**Raising:** $[X]M [Seed / Series A]

**Use of funds:**
| Category | Allocation |
|---|---|
| Engineering & Product | X% |
| Sales & Marketing | X% |
| Data Acquisition & Partnerships | X% |
| Operations & G&A | X% |

**Key milestones this round will achieve:**
- [Milestone 1]
- [Milestone 2]
- [Milestone 3]
- [Milestone 4]

---

## Slide 20: Why Now

### The Confluence of Three Industry Shifts

**1. The Grey Market Reckoning**
MLS organizations are waking up to the fact that uncontrolled data replication enables a $100M+ grey market. They're actively seeking governed alternatives. The San Diego MLS / RealtyFeed case study is the canary in the coal mine — others will follow.

**2. AI Changes the Interface**
For the first time, non-technical real estate professionals can interact with data through natural language. This expands the addressable user base from thousands of developers to millions of agents, brokers, and investors. But the industry won't adopt AI if it means sending listing data to third-party AI companies — local models solve this.

**3. PropTech Infrastructure Consolidation**
After a decade of every PropTech company building their own replication infrastructure, the industry is ready for a shared data layer. The economics of maintaining individual copies no longer make sense when a governed, queryable platform can replace them.

**The window:** First mover advantage in "real estate data intelligence platform" category. SourceRE/RealtyFeed are focused on MLS operations. Legacy vendors (CoreLogic, ATTOM) are focused on data licensing, not platform access. Nobody is building the natural-language, multi-source, governed query layer.

---

## Appendix A: Query Examples by Persona

### Agent Queries
1. "What's the average days on market for homes in my farm area compared to the county average?"
2. "Show me listings that have had more than two price reductions in the past 60 days"
3. "Which zip codes in my market have the highest ratio of new listings to closed sales this month?"
4. "Compare my listings' average DOM to the office average and the market average"
5. "Find neighborhoods where median list price is up but transaction volume is down — potential cooling markets"

### Broker Queries
1. "Show me our brokerage's market share by zip code over the past 12 months"
2. "Which of our agents have the highest listing-to-close ratio this quarter?"
3. "Compare our office's average sale-to-list-price ratio with the top 3 competing offices"
4. "What percentage of our current listings are in zip codes with declining inventory?"
5. "Identify zip codes where we have zero listings but transaction volume exceeds 50/month — expansion opportunities"

### Investor Queries
1. "Find zip codes where average DOM is declining, inventory is above average, and 30%+ properties have absentee owners"
2. "Show me properties listed in the past 90 days where the tax roll shows an out-of-state owner mailing address and the property was built before 1985"
3. "Which neighborhoods have the highest concentration of corporate-owned residential properties?"
4. "Find areas where the gap between assessed value and recent sale prices is widening — potential assessment appeal opportunities"
5. "Show me markets where cash sales as a percentage of total sales has been declining — institutional pullback signals"

### Developer Queries (SQL)
```sql
-- Inventory velocity analysis
SELECT
    City,
    PostalCode,
    COUNT(CASE WHEN StandardStatus = 'Active' THEN 1 END) as ActiveInventory,
    COUNT(CASE WHEN StandardStatus = 'Closed'
        AND CloseDate >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as ClosedLast30,
    ROUND(
        COUNT(CASE WHEN StandardStatus = 'Active' THEN 1 END)::numeric /
        NULLIF(COUNT(CASE WHEN StandardStatus = 'Closed'
            AND CloseDate >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END), 0),
    1) as MonthsOfSupply
FROM properties
WHERE StateOrProvince = 'TX'
GROUP BY City, PostalCode
HAVING COUNT(CASE WHEN StandardStatus = 'Active' THEN 1 END) > 20
ORDER BY MonthsOfSupply ASC
LIMIT 25;
```

```sql
-- Tax data cross-reference: absentee owner concentration
SELECT
    p.PostalCode,
    COUNT(*) as TotalProperties,
    COUNT(CASE WHEN t.OwnerMailingAddress_State != p.StateOrProvince THEN 1 END) as OutOfStateOwners,
    ROUND(
        COUNT(CASE WHEN t.OwnerMailingAddress_State != p.StateOrProvince THEN 1 END)::numeric /
        COUNT(*) * 100,
    1) as OutOfStatePct,
    ROUND(AVG(p.ListPrice), 0) as AvgListPrice,
    ROUND(AVG(t.AssessedValue), 0) as AvgAssessed
FROM properties p
JOIN tax_records t ON p.ParcelNumber = t.ParcelNumber
WHERE p.City = 'Austin'
GROUP BY p.PostalCode
HAVING COUNT(*) > 50
ORDER BY OutOfStatePct DESC;
```

---

## Appendix B: The Replication Problem — Detailed Explanation

### What Is Data Replication?

When a technology company, brokerage, or data consumer wants to use MLS listing data for anything beyond basic display, they typically must:

1. **Obtain a license** from the MLS organization
2. **Copy the entire database** (or a substantial subset) to their own servers
3. **Build synchronization systems** to keep their copy current — new listings, price changes, status updates, photo updates, delisted properties
4. **Maintain the infrastructure** — database servers, storage, monitoring, backup, disaster recovery
5. **Secure the data** — encryption, access controls, compliance with MLS data policies

This process is called **data replication**, and it is the dominant model for MLS data distribution in the US.

### Why Replication Exists

Replication became the standard because:
- **RETS (Real Estate Transaction Standard)** was designed around bulk data download
- **Query-based access** at scale wasn't technically feasible when these systems were designed
- **Vendors needed local copies** to build performant applications
- **It was the only option** for analytics, reporting, or any use case beyond simple search

### Why Replication Is a Problem

**1. Security and Governance**
Once data is copied to a licensee's server, the MLS has limited visibility into how it's used. They can audit compliance periodically, but they cannot monitor real-time usage. If a licensee repurposes data for unauthorized commercial use (selling to hedge funds, training AI models, etc.), this may go undetected for months or years.

**2. The Grey Market**
Research from REdistribute estimates that the unauthorized commercialization of replicated MLS data costs the industry $100M+ annually. Replicated data can be:
- Resold to unauthorized parties
- Used for purposes beyond the license scope
- Fed into AI training datasets without compensation
- Aggregated and repackaged as "market intelligence" products

**3. Duplicative Cost**
In a typical MLS market, 20-100 technology vendors each maintain their own copy of the same data. Each vendor independently pays for:
- Database infrastructure
- ETL development and maintenance
- Data quality monitoring
- Security and compliance

This collective spend represents billions of dollars industry-wide, spent on maintaining identical copies of the same information.

**4. Inconsistent Security**
Not every licensee invests equally in data security. An MLS might have one licensee with SOC 2 compliance and a dedicated security team, and another licensee running the data on an unpatched server with default credentials. The data is the same. The exposure is wildly different.

### The Alternative: Live Query Access

Instead of distributing copies, provide governed query access to the canonical dataset:
- Data remains in one location under MLS governance
- Licensees send queries and receive results
- Every query is logged, metered, and auditable
- No copies need to be secured by individual licensees
- Anomalous usage patterns can be detected in real time

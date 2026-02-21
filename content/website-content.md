# RESO DB - Website Content Restructure

## Positioning Shift

**Old positioning:** "The Universal API for Real Estate Data" (developer/infrastructure-focused)

**New positioning:** "Stop Searching. Start Exploring Your Data." (opportunity-focused, broader audience)

The site now speaks directly to **four distinct audiences**: Agents, Brokers & Investors, Technology Vendors, and MLS Providers. Each audience has a clear value proposition, specific pain points addressed, and example use cases.

---

## Key Product Capabilities (New)

These are newly articulated capabilities that must be woven throughout all messaging:

1. **MLS Data Ingestion** - Accepts datasets directly from MLS in RESO or RETS format. Converts all data to RESO standard.
2. **Tax Data** - Fully queryable tax records. No more APIs with limited search parameters.
3. **Bring Your Own Data** - Users/licensees can bring their own data sources. RESO DB maintains the replication infrastructure to make it usable.
4. **Bring Your Own Database** - For the security-conscious: keep data stored on your own infrastructure. RESO DB maintains updates and all platform features (natural language queries, query API, etc.) still work.
5. **Natural Language Queries** - Ask questions in plain English. Get actionable insights. Dig deeper through conversation.
6. **Local AI Only** - No MLS data is ever sent to third-party AI companies. Summarization and chat use local language models only. Data is never stored or used to train external models.
7. **RESO DB SQL** - Structured query language fully compatible with major SQL dialects (PostgreSQL, MySQL, etc.). Live analytics on demand.
8. **Licensable Platform** - MLS data on the platform is licensable to users directly.

---

---

## Page 1: Home

### Hero Section

**Headline:**
# Stop Searching. Start Exploring Your Data.

**Subheadline:**
Current real estate tools search listings by attributes. RESO DB lets you explore trends, uncover opportunities, and make data-driven decisions — all in plain language, without building a single pipeline.

**Primary CTA:** Request a Demo
**Secondary CTA:** See How It Works

---

### The Problem (New Section)

**Section headline:** The Real Estate Data Problem

**Intro:** Today's real estate data infrastructure was built for a different era. Here's what that means for you:

#### Card 1: Search Is Not Exploration
Every MLS tool on the market does the same thing: search listings by attributes. *3 bedrooms, 2 baths, $400K–$600K.* That's search. But the real opportunities live in the trends, patterns, and cross-references that search can't find.

**What you actually need:**
- Which neighborhoods are appreciating fastest with declining inventory?
- Where are absentee owners concentrated in pre-1990 housing stock?
- How does my brokerage's market share compare across zip codes over time?

These are *exploratory and analytical queries*. To run them today, you need to build your own data warehouse — or pay someone who did.

#### Card 2: The Replication Tax
To do anything beyond basic search, companies must *replicate* MLS data — copy the entire database to their own servers and keep it synced. This requires:
- ETL pipelines for each MLS source
- Database infrastructure and ongoing maintenance
- Monitoring, error handling, and schema migration
- A dedicated engineering team

This is expensive, fragile, and duplicative. Hundreds of companies replicate the same data, spending millions collectively on identical infrastructure. That's money not going into their actual product.

#### Card 3: Data Security Is Only as Strong as the Weakest Link
When MLS data is replicated to dozens of licensees, the MLS loses visibility into how that data is used. Legacy replication models make it nearly impossible to detect or prevent unauthorized "back-door" commercialization of listing data. Your data is only as secure as the *least secure licensee* you provide it to — and not every licensee is a data security expert.

---

### What RESO DB Changes

**Section headline:** One Platform. Every Audience. No Replication.

#### For Agents & Brokers
**Become an opportunity hound.** Ask questions in plain language. Get trends, analytics, and actionable insights without learning SQL, reading API documentation, or waiting for someone to build you a report.

*"Which zip codes in my area have the most listings with 60+ days on market and at least two price reductions?"*

#### For Investors
**Cross-reference MLS and tax data instantly.** Identify absentee owners, find assessment-to-market-value gaps, and spot emerging neighborhoods — all through conversation.

*"Find neighborhoods where the average assessed value is 30%+ below list price and absentee ownership exceeds 40%."*

#### For Technology Vendors
**Stop maintaining replication infrastructure.** Query live MLS data directly through RESO DB SQL. Reallocate your replication engineering team to the product you're actually selling.

```sql
SELECT City, PostalCode,
    COUNT(*) as ActiveListings,
    AVG(ListPrice) as AvgPrice,
    AVG(DaysOnMarket) as AvgDOM
FROM properties
WHERE StandardStatus = 'Active'
    AND StateOrProvince = 'CA'
GROUP BY City, PostalCode
ORDER BY AvgDOM ASC
LIMIT 20;
```

#### For MLS Providers
**Regain control of your data ecosystem.** Legacy replication models make it nearly impossible to detect or prevent unauthorized commercialization of listing data. RESO DB provides governed, auditable access — no copies leaving your control.

---

### How It Works (Simplified for Non-Technical)

**Section headline:** How It Works

#### What is "replication" and why should you care?

**Today's model (replication):**
1. A company gets licensed to use MLS data
2. They copy the *entire database* to their own servers
3. They build systems to keep their copy updated
4. The MLS has no visibility into how the data is actually used

*Think of it like lending someone your entire filing cabinet and hoping they only look at what they're supposed to.*

**RESO DB's model (live access):**
1. Data stays in one secure, governed location
2. Users query data live — no copies needed
3. Every query is logged, metered, and auditable
4. The MLS retains full visibility and control

*Think of it like a librarian who can see exactly which books are being checked out, by whom, and for what purpose — in real time.*

---

### Example Queries

**Section headline:** Stop Searching. Start Asking.

These are the kinds of questions you can ask RESO DB — in plain English or in SQL. Current tools can't do this without building replication infrastructure first.

#### For an Agent: Market Intelligence
> "What's the average days on market for 3-bedroom homes in 78704 compared to the Austin metro overall? How has that changed month-over-month for the past six months?"

#### For a Broker: Competitive Analysis
> "Show me our brokerage's listing volume and market share by zip code for the past 12 months, compared to the top 3 competing brokerages in the region."

#### For an Investor: Opportunity Discovery
> "Find zip codes where average days on market is declining, inventory is above the metro average, and more than 35% of properties are owned by absentee owners based on tax records."

#### For an Investor: Tax Data Cross-Reference
> "Show me properties listed in the past 90 days where the owner's mailing address on the tax roll is different from the property address, the property was built before 1985, and the assessed value is at least 25% below list price."

#### For an Analyst: Trend Analysis
> "Compare median list price trends across the top 10 zip codes by transaction volume over the past 24 months. Flag any zip code where the trend reversed direction in the last quarter."

---

### Security & Data Privacy

**Section headline:** Your Data Never Leaves Your Control

- **No Third-Party AI** — No MLS data is ever sent to OpenAI, Google, or any third-party AI company. All summarization and natural language features use local language models only.
- **Data Never Used for Training** — Your data is never stored by or used to train any external model.
- **Bring Your Own Database** — For organizations that require data residency: store the data on your own infrastructure. RESO DB maintains the updates and all platform features still work.
- **Tenant Isolation** — Strict logical separation between organizations with comprehensive access boundaries.
- **Audit Logging** — Every query and access event is logged for compliance and troubleshooting.
- **Encryption** — All data encrypted at rest and in transit.

---

### CTA Section

**Headline:** Ready to Stop Searching and Start Exploring?
**Subhead:** See how RESO DB can transform how you interact with real estate data.

**Primary CTA:** Request a Demo
**Secondary CTA:** See the Product

---

---

## Page 2: Product

### Hero

**Headline:**
# The Modern Real Estate Data Platform

**Subheadline:**
RESO DB accepts MLS datasets, tax records, and custom data sources — normalizes everything to a queryable standard — and lets you explore it all through SQL or plain English. No replication. No pipelines. No maintenance.

---

### For Agents & Brokers

**Section headline:** For Agents & Brokers: Become Opportunity Hounds

**Intro:**
You shouldn't have to build a proptech-lite company to find opportunities in your market. You shouldn't have to learn an esoteric querying language or read API documentation for outdated APIs. You should be able to ask a question in plain language, whenever the moment strikes, and get results with actionable insights — then dig deeper through conversation.

**What you can do with RESO DB:**

#### Ask in Natural Language
No SQL required. No API docs. Just type your question:
> "Show me neighborhoods where inventory dropped more than 20% month-over-month but median price hasn't caught up yet."

RESO DB interprets your question, runs the analysis, and returns results with context. Want to dig deeper? Just ask a follow-up.

#### Cross-Reference Tax Data
MLS listings only tell part of the story. RESO DB includes fully queryable tax records so you can:
- **Identify absentee owners** — Owner mailing address differs from property address on tax rolls
- **Find long-term owners** — Ownership duration from deed transfer records suggests potential estate sales or motivated sellers
- **Spot assessment gaps** — Properties where assessed value significantly trails market value indicate potential equity upside
- **Uncover corporate-owned residential** — Properties held by LLCs, trusts, or corporations that may signal investment portfolio turnover
- **Homestead exemption analysis** — Identify properties without homestead exemptions in owner-occupied neighborhoods (potential rentals coming to market)

#### Example Exploratory Queries

| What You'd Ask | What It Reveals |
|---|---|
| "Which neighborhoods have the most listings sitting 90+ days with multiple price reductions?" | Potential buyer's markets or overpriced pockets |
| "Show me zip codes where new listings are outpacing closed sales for 3+ consecutive months" | Emerging inventory surpluses — negotiation leverage |
| "Find areas where the ratio of cash sales to total sales increased over the past quarter" | Investor-heavy markets or distressed sales trends |
| "What percentage of active listings in 78745 are from repeat sellers who sold another property in the past 2 years?" | Portfolio turnover and market liquidity signals |
| "Compare the average price-per-square-foot trend in my farm area to the three adjacent zip codes" | Relative value positioning for listing presentations |

---

### For Investors

**Section headline:** For Investors: Your Data-Driven Edge

**Intro:**
The best investment opportunities don't show up in a basic listing search. They emerge from patterns — cross-referencing listing data with tax records, tracking trends over time, and spotting the signals that others miss. Until now, getting access to this level of analysis required either building your own data infrastructure or paying a premium for someone else's.

**What you can do with RESO DB:**

#### Combine MLS + Tax Data
Every query can cross-reference listing data with tax records. No separate APIs, no limited search parameters, no manual data matching.

> "Find properties in Travis County where the owner's tax roll mailing address is out-of-state, the property was built before 1990, assessed value is at least 30% below current comparable list prices, and the property is NOT currently listed."

#### Analytical Queries That Drive Decisions

| Strategy | Query Example |
|---|---|
| **Absentee Owner Targeting** | "Show me single-family properties with absentee owners who have held the property 10+ years in zip codes where prices appreciated 15%+ in the last year" |
| **Value Gap Analysis** | "Find zip codes where the median assessment-to-sale-price ratio is below 0.7, indicating systematic underassessment" |
| **Emerging Market Detection** | "Which zip codes had the largest decrease in average days on market quarter-over-quarter while still having above-average inventory?" |
| **Distressed Signal Identification** | "Show me neighborhoods where the percentage of listings with price reductions exceeds 40% and average DOM is increasing" |
| **Rental Conversion Opportunities** | "Find properties without homestead exemptions in areas where rental yield based on comparable rents exceeds 8% of list price" |

#### Conversational Depth
Don't stop at the first answer. RESO DB supports conversational analysis:

> **You:** "Which neighborhoods in San Antonio have the highest concentration of absentee-owned properties?"
>
> **RESO DB:** *Returns top 15 neighborhoods with absentee ownership percentages, average property age, and median values.*
>
> **You:** "Of those, which ones had more than 10% price appreciation in the last 12 months?"
>
> **RESO DB:** *Narrows to 6 neighborhoods. Shows appreciation rates alongside absentee ownership data.*
>
> **You:** "Show me the individual properties in the top 3 neighborhoods that have been owned for more than 15 years and aren't currently listed."
>
> **RESO DB:** *Returns specific property-level results with tax data details.*

---

### For Technology Vendors

**Section headline:** For Technology Vendors: Stop Paying the Replication Tax

**Intro:**
How much of your engineering budget goes to maintaining replication infrastructure? You have a team managing ETL pipelines, monitoring sync failures, handling schema changes, and maintaining the database that stores a copy of the exact same data that every other proptech company in your space is also copying and maintaining. That's not differentiation — that's table stakes overhead.

And the proptech company next door? They're replicating the same data. Maybe they're spending more on data security. Maybe they're spending less. Either way, you're both paying to maintain identical copies of the same information.

**The cost of replication:**
- **Engineering headcount** — Dedicated team for ETL pipeline development and maintenance
- **Infrastructure** — Servers, databases, monitoring, and disaster recovery for your data copies
- **Ongoing maintenance** — Schema changes, API version updates, error recovery, and data quality monitoring
- **Security liability** — You're now responsible for securing a copy of MLS data. That's a compliance obligation, not a feature.
- **Opportunity cost** — Every dollar and engineer-hour spent on replication is not going into your actual product

**What RESO DB offers instead:**

#### Live Data Access
Query MLS data directly. No copies. No sync. No stale data. Sub-second response times on millions of records.

#### RESO DB SQL
Fully compatible with major SQL dialects. Your existing queries, dashboards, and integrations work with minimal changes. No proprietary query languages. No limited API search parameters.

```sql
-- Price trend analysis across multiple MLS sources
-- Works with PostgreSQL, MySQL, and standard SQL tools
SELECT
    p.City,
    p.PostalCode,
    DATE_TRUNC('month', p.ListingContractDate) as ListMonth,
    COUNT(*) as NewListings,
    AVG(p.ListPrice) as AvgListPrice,
    AVG(p.ListPrice / p.LivingArea) as AvgPricePerSqFt,
    AVG(t.AssessedValue) as AvgAssessedValue,
    AVG(p.ListPrice - t.AssessedValue) / NULLIF(AVG(t.AssessedValue), 0) * 100 as PriceToAssessmentGap
FROM properties p
LEFT JOIN tax_records t ON p.ParcelNumber = t.ParcelNumber
WHERE p.StandardStatus IN ('Active', 'Pending')
    AND p.ListingContractDate >= CURRENT_DATE - INTERVAL '12 months'
    AND p.StateOrProvince = 'TX'
GROUP BY p.City, p.PostalCode, DATE_TRUNC('month', p.ListingContractDate)
ORDER BY p.City, ListMonth;
```

#### Bring Your Own Data Sources
Have proprietary data that's not in our library? Bring it. We maintain the replication infrastructure to make your data queryable alongside MLS and tax data. You focus on your product.

#### Bring Your Own Database
Need the data in your own infrastructure for compliance or security requirements? We maintain the updates, handle the ingestion, and keep everything current. All RESO DB features — natural language queries, the SQL API, audit logging — still work against your database.

#### Reallocate, Don't Just Cut
This isn't about spending less. It's about spending *on the right things*. The engineers maintaining your replication pipeline can build features your customers actually pay for. The infrastructure budget funding your data copies can go toward scaling your product.

---

### For MLS Providers

**Section headline:** For MLS Providers: Your Data Is Only as Secure as Your Least Secure Licensee

**Intro:**
You've built a valuable data asset. You license it to technology vendors, brokerages, and other consumers who build products and services on top of it. But here's the uncomfortable truth: once that data is replicated to a licensee's servers, you have limited visibility into how it's actually used — and limited ability to prevent misuse.

**The Replication Security Problem:**

The legacy replication model — where licensees copy entire databases to their own servers — creates a fundamental governance gap:

> "Legacy replication models make it nearly impossible to detect or prevent the unauthorized 'back-door' commercialization of listing data."
> — *How San Diego MLS Evolved from a Data Provider to a Data Ecosystem Orchestrator* (Realtyna, 2026)

#### How Replication Creates Risk (Explained Simply)

**Today's model:**
1. You license your data to 50 technology vendors
2. Each vendor copies your entire database to their own servers
3. Each vendor is now independently responsible for securing that data
4. You have no real-time visibility into how the data is actually being used

**The problem:**
- Vendor #1 spends $500,000/year on data security with a dedicated team
- Vendor #47 is a 3-person startup with data on a cloud server with default security settings
- Your data is on both servers. It's the same data. But the security is wildly different.
- If Vendor #47 is breached, or quietly resells access to your data for purposes beyond their license, you may never know.

Research from REdistribute highlights that when broker-licensed feeds are quietly repurposed for institutional analytics or AI without fair compensation, the industry loses as much as **$100 million annually** in recurring revenue.

#### What RESO DB Changes for MLSs

**Governed, auditable access — not blind replication:**
- **Real-time usage monitoring** — See exactly which licensees are querying what data, how often, and for what apparent purpose
- **No unauthorized copies** — Data doesn't leave the governed environment. Licensees query it; they don't download it.
- **Per-licensee entitlements** — Define exactly what each licensee can access at the field level
- **Audit trail** — Every query logged. Anomalous usage patterns flagged.
- **Revenue opportunity** — Move from flat-fee licensing to usage-based models that capture the true value of your data

#### Direct MLS Ingestion
RESO DB accepts your datasets directly in RESO or RETS format. We handle the normalization and make it available to your authorized licensees through a governed platform. You retain control.

#### Licensable to Platform Users
Your data, once on the platform, is licensable to authorized users. You define the terms, the access levels, and the pricing. We provide the infrastructure, governance, and audit trail.

---

### Data Sources

**Section headline:** Beyond Listings: A Complete Data Ecosystem

#### MLS Listing Data
- Accepts datasets directly from MLS providers in RESO or RETS format
- Automatic conversion and normalization to RESO Data Dictionary 2.0 standard
- Multi-MLS aggregation with cross-source querying
- Real-time synchronization — no stale replicated copies

#### Tax & Assessment Data
Fully queryable tax records with no API parameter limitations:
- **Ownership information** — Owner names, mailing addresses, ownership duration
- **Assessment data** — Assessed values, tax amounts, exemptions
- **Property characteristics** — Year built, lot size, improvements, zoning
- **Transfer history** — Deed transfers, sale dates, sale amounts
- **Exemption status** — Homestead, veteran, senior, agricultural exemptions

#### Bring Your Own Data
Have proprietary datasets? Internal CRM data? Market research? Bring it to RESO DB:
- We maintain the replication and normalization infrastructure
- Your data becomes queryable alongside MLS and tax data
- Cross-reference your proprietary data with public records
- Full platform features apply — natural language queries, SQL API, audit logging

---

### Developer Section

**Section headline:** For Developers: RESO DB SQL

**Intro:**
No more replicating. Live analytics on demand. Query real estate data in structured RESO DB SQL, fully compatible with major SQL dialects. Connect your existing tools, dashboards, and applications.

#### Query Examples

**Market trend analysis:**
```sql
-- Monthly price trends with tax data cross-reference
SELECT
    DATE_TRUNC('month', ListingContractDate) as Month,
    City,
    COUNT(*) as Listings,
    ROUND(AVG(ListPrice), 0) as AvgListPrice,
    ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY ListPrice), 0) as MedianListPrice,
    ROUND(AVG(DaysOnMarket), 1) as AvgDOM
FROM properties
WHERE StateOrProvince = 'TX'
    AND ListingContractDate >= CURRENT_DATE - INTERVAL '24 months'
GROUP BY Month, City
ORDER BY City, Month;
```

**Absentee owner analysis with tax cross-reference:**
```sql
-- Find absentee-owned properties in appreciating markets
SELECT
    p.City,
    p.PostalCode,
    COUNT(*) as AbsenteeProperties,
    ROUND(AVG(p.ListPrice), 0) as AvgListPrice,
    ROUND(AVG(t.AssessedValue), 0) as AvgAssessed,
    ROUND(AVG(p.ListPrice - t.AssessedValue) / NULLIF(AVG(t.AssessedValue), 0) * 100, 1)
        as AssessmentGapPct
FROM properties p
JOIN tax_records t ON p.ParcelNumber = t.ParcelNumber
WHERE t.OwnerMailingAddress_City != p.City
    OR t.OwnerMailingAddress_State != p.StateOrProvince
GROUP BY p.City, p.PostalCode
HAVING COUNT(*) >= 10
ORDER BY AssessmentGapPct DESC
LIMIT 25;
```

**Inventory velocity and competitive intelligence:**
```sql
-- Brokerage market share analysis
SELECT
    ListOfficeName,
    COUNT(*) as TotalListings,
    COUNT(CASE WHEN StandardStatus = 'Active' THEN 1 END) as ActiveListings,
    COUNT(CASE WHEN StandardStatus = 'Closed' THEN 1 END) as ClosedListings,
    ROUND(AVG(CASE WHEN StandardStatus = 'Closed'
        THEN ClosePrice::float / ListPrice * 100 END), 1) as AvgSaleToListPct,
    ROUND(AVG(CASE WHEN StandardStatus = 'Closed'
        THEN DaysOnMarket END), 0) as AvgDOMClosed
FROM properties
WHERE ListingContractDate >= CURRENT_DATE - INTERVAL '12 months'
    AND City = 'Austin'
GROUP BY ListOfficeName
ORDER BY TotalListings DESC
LIMIT 20;
```

#### API & SDK Access
- RESTful SQL query API
- Native SDKs for Python, JavaScript/TypeScript, and more
- Webhook notifications for data changes
- Batch query support for large analytical workloads

#### Compatibility
RESO DB SQL is designed for compatibility with the tools you already use:
- **PostgreSQL** compatible syntax
- **MySQL** compatible syntax
- Works with BI tools: Tableau, Looker, Metabase, Power BI
- Works with data tools: dbt, Pandas, R
- Standard JDBC/ODBC connectivity

---

### Bring Your Own Database

**Section headline:** Bring Your Own Database

For organizations that require data to remain on their own infrastructure:

- **Your infrastructure, our maintenance** — Data lives on your servers. We handle ingestion, updates, and synchronization.
- **Full feature access** — Natural language queries, RESO DB SQL API, audit logging, and all platform features work against your database.
- **Compliance-friendly** — Meet internal data residency, regulatory, or client requirements without sacrificing functionality.
- **No vendor lock-in** — The data is in your database, in standard formats. If you leave, your data stays with you.

---

### AI & Privacy

**Section headline:** AI That Respects Your Data

**Our commitment:**
- **No data sent to third-party AI companies** — Not OpenAI, not Google, not Anthropic, not anyone. Zero.
- **Local language models only** — All natural language query interpretation, result summarization, and conversational features run on local models within our infrastructure.
- **Data never stored for training** — Your queries and data are never used to train any AI model, internal or external.
- **MLS data stays governed** — The same access controls, audit logging, and tenant isolation that protect your data in SQL queries apply to natural language interactions.

---

---

## Page 3: Pricing

*Minimal changes needed — current pricing page structure works. Add mentions of tax data and natural language features in the plan descriptions. Add a note about Bring Your Own Database as an Enterprise add-on.*

### Updated Plan Features

#### Developer ($0/month)
- 100 compute seconds/month
- 1 MLS source
- MLS listing data access
- SQL API access
- Community support
- Single user

#### Growth ($299/month + compute)
- 500 compute seconds included
- $0.02 per additional compute second
- Up to 5 MLS sources
- MLS listing + tax data access
- Natural language queries
- Up to 10 team members
- Role-based access control
- Email support

#### Enterprise (Custom)
- Unlimited compute (volume pricing)
- Unlimited MLS connections
- Full data catalog (MLS, tax, custom)
- Natural language queries with conversational depth
- Bring Your Own Data sources
- Bring Your Own Database option
- Field-level permissions
- SSO/SAML integration
- Dedicated support
- Custom SLAs

---

## Page 4: Contact

*Minimal changes needed. Update the "Primary Use Case" dropdown to include new options:*

- Analytics/BI
- Application Development
- Data Aggregation
- Market Research / Investment Analysis
- Natural Language Data Access
- MLS Data Governance
- Other

---

---

## Navigation Updates

Consider adding audience-specific navigation:

**Option A: Keep current nav, add audience links within Product page**
- Home | Product | Pricing | Contact

**Option B: Add "Solutions" dropdown**
- Home | Solutions (For Agents, For Brokers, For Vendors, For MLS) | Product | Pricing | Contact

**Recommendation:** Start with Option A. Keep it simple. The Product page acts as the hub with anchor-linked sections for each audience.

---

## Key Messaging Reference (Updated)

### Taglines
- "Stop Searching. Start Exploring Your Data."
- "Real Estate Intelligence Without the Infrastructure."
- "Your Data. Your Questions. No Replication Required."

### One-Sentence Value Proposition
RESO DB combines MLS listings, tax records, and custom data sources into a single queryable platform — accessible through SQL or plain English — without requiring anyone to replicate or maintain data infrastructure.

### Differentiators vs. SourceRE / RealtyFeed / Traditional Solutions
1. **Natural language access** — Non-technical users (agents, brokers, investors) can query data in plain English, not just developers.
2. **Tax data integration** — Cross-reference MLS listings with fully queryable tax records. No one else offers this natively.
3. **Bring Your Own Data / Database** — Flexibility that competitors don't offer. Your data, your infrastructure, our maintenance.
4. **Local AI only** — No data sent to third-party AI companies. Period.
5. **SQL compatibility** — RESO DB SQL works with standard tools. No proprietary lock-in.
6. **Eliminate replication** — Technology vendors can stop maintaining duplicate infrastructure and focus on their actual product.

### Audience-Specific Headlines
- **Agents:** "Ask Questions. Find Opportunities."
- **Brokers:** "Competitive Intelligence Without the Infrastructure."
- **Investors:** "Cross-Reference MLS + Tax Data in Seconds."
- **Technology Vendors:** "Stop Paying the Replication Tax."
- **MLS Providers:** "Your Data Is Only as Secure as Your Least Secure Licensee."
- **Developers:** "No More Replicating. Live Analytics on Demand."

### Explaining Replication to Non-Technical Audiences

**The 30-second version:**
When a company wants to use MLS data today, they must copy the entire database to their own computers and build systems to keep it updated. That's called "replication." It's expensive, it's duplicative (hundreds of companies maintain their own copies of the same data), and it's a security risk — once the data is copied, the MLS can't control what happens to it.

RESO DB eliminates this. Instead of copying data, you query it live. The data stays in one secure place, and every access is logged and governed.

**The filing cabinet analogy:**
*Replication is like giving every licensee a photocopy of your entire filing cabinet. You hope they lock it up properly, but you have no way to check. RESO DB is like a secured reading room — everyone can access what they're authorized to see, but nothing leaves the building, and you have a log of every page that was read.*

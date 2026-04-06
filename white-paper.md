# The End of Replication

**How Governed Live-Query Access Solves Real Estate Data's Security, Cost, and Intelligence Problems**
*A White Paper by RESO DB — 2026*

---

## 1. Executive Summary

For over two decades, the real estate industry has distributed data through replication: MLS organizations send full database copies to every authorized licensee, who then builds and maintains independent infrastructure to store, sync, and query that data. This model was designed for an era when bandwidth was limited, cloud infrastructure did not exist, and query-based access at scale was not technically feasible. That era is over.

Today, replication has become a compounding liability for every participant in the ecosystem. Technology vendors spend $425K–$1M+ annually on infrastructure that provides zero competitive differentiation. MLS organizations lose visibility into how their data is used the moment it leaves their servers. Agents, brokers, and investors are locked out of analytical capabilities because the infrastructure barrier is too high. And an estimated $100M+ in annual revenue is lost to unauthorized data commercialization that replication makes undetectable.

This paper presents a governed live-query model as the resolution to all three problems. Instead of distributing copies, provide governed query access to the canonical dataset. Every query is logged, metered, and attributable. Data never leaves the governed environment. And capabilities that replication cannot support—natural language access, tax data cross-referencing, real-time analytics—become available to every stakeholder without infrastructure investment.

- The MLS data distribution model has relied on replication—full database copies sent to licensees—for over 20 years.
- This model was designed for an era when query-based access at scale was not technically feasible. That era is over.
- Replication creates three compounding problems: duplicative cost across the ecosystem, security exposure that scales with the number of licensees, and an inability to support analytical or exploratory queries without significant infrastructure investment.
- The industry loses an estimated $100M+ annually in unauthorized data commercialization enabled by unmonitored replicated copies.
- A governed live-query model resolves all three problems while opening new capabilities (natural language access, tax data cross-referencing, real-time analytics) that replication cannot support.
- RESO DB is this platform. This paper explains the problem, the solution, and the path forward for each stakeholder.

## 2. How Real Estate Data Distribution Works Today

Understanding how the industry arrived at its current data architecture requires tracing the evolution from early electronic listing systems through today's API protocols. At each stage, the technology changed but the fundamental model—copy the data, store it locally, build on your own copy—remained the same.

### 2.1 The RETS Era

The Real Estate Transaction Standard (RETS) was introduced in 1999 as the first standardized protocol for accessing MLS data electronically. RETS was designed around a simple premise: connect to the MLS server, download the data, and disconnect. Licensees would then store the downloaded data in their own databases and build applications against their local copies.

This made sense in context. Broadband adoption was still early. Cloud computing did not exist as a commercial offering until 2006. Application performance required local data because network round-trips were too slow and unreliable for production workloads. RETS was engineered for the constraints of its time, and it worked well within them.

### 2.2 The Modern Protocols (Bridge API, Spark API, Web API)

Beginning in the mid-2010s, the industry migrated toward RESTful APIs: the Bridge API from MLS Grid, the Spark API from FBS, and RESO's Web API standard. These protocols modernized the transport layer—replacing RETS's XML-based bulk downloads with JSON-based REST endpoints, pagination, and more granular query parameters.

However, the underlying model remained unchanged. The vast majority of implementations still support and actively encourage full data replication. Modern APIs are used primarily for initial synchronization and incremental updates, not as a replacement for local database copies. The transport improved; the architecture did not.

### 2.3 What Replication Actually Looks Like

For non-technical readers, the replication lifecycle works as follows: A technology vendor obtains MLS authorization and API credentials. Their engineering team builds an ETL (Extract, Transform, Load) pipeline—software that connects to the MLS API, downloads every listing record, transforms the data into their application's schema, and loads it into their own database. An incremental sync process runs continuously—typically every few minutes—pulling updates, new listings, and status changes. The vendor's application team then builds features against this local copy, managing their own indexes, query optimization, and data integrity.

This process must be repeated for every MLS the vendor wants to serve. Each MLS has slightly different field names, data types, and conventions, requiring additional normalization work. The result is a permanent commitment to maintaining data infrastructure that has nothing to do with the vendor's actual product.

### 2.4 How Many Copies Exist

The scale of duplication is staggering. A typical MLS market has between 20 and 100+ authorized licensees, each maintaining their own independent copy of the database. There are approximately 580 MLS organizations in the United States. Even conservatively, this means tens of thousands of independent copies of overlapping listing data exist across the ecosystem at any given time. Many of these copies contain identical data—the same listings, the same photos, the same status updates—stored on different servers, maintained by different engineering teams, synchronized on different schedules.

## 3. The True Cost of Replication

Replication is not free. It carries direct costs in infrastructure and headcount, indirect costs in engineering opportunity, and hidden costs in data quality. These costs are borne by every participant in the ecosystem and benefit none of them competitively, because every competitor bears the same costs.

### 3.1 Cost Per Licensee

A technology vendor maintaining its own MLS data infrastructure faces four categories of ongoing cost:

- **Engineering headcount ($300K–$700K/yr):** At minimum, one to two full-time engineers dedicated to maintaining ETL pipelines, monitoring data synchronization, handling schema changes, and troubleshooting data quality issues. Larger operations require dedicated data engineering teams.
- **Infrastructure ($50K–$200K/yr):** Database hosting, compute resources for ETL processing, storage for listing data and media, redundancy and backup systems, and monitoring tooling.
- **MLS integration maintenance ($50K–$100K/yr):** Each MLS connection requires ongoing maintenance as APIs change, field mappings evolve, and new data requirements emerge. Multi-MLS vendors multiply this cost per market.
- **Compliance ($25K–$75K/yr):** Security audits, data handling documentation, license compliance monitoring, and incident response planning.

The total ranges from $425K to $1.075M annually—regardless of company size or revenue. A three-person startup and a Fortune 500 company face fundamentally similar infrastructure requirements if they want to work with MLS data.

### 3.2 Ecosystem-Wide Duplicative Spend

If 50 vendors in a single MLS market each spend an average of $500K per year on replication infrastructure, that market alone accounts for $25M in annual duplicative spend. Multiply this across 580 MLS organizations in the United States—even accounting for market size variation and vendor overlap—and the aggregate reaches into the billions. This spending provides zero competitive differentiation because every competitor is building the same infrastructure to store the same data. It is a cost of entry, not a source of advantage.

### 3.3 The Opportunity Cost

The financial cost tells only part of the story. Every engineer maintaining an ETL pipeline is an engineer not building customer-facing features. Every sprint spent on data synchronization debugging is a sprint not spent on product development. PropTech companies that set out to build innovative real estate applications are forced to become data infrastructure companies first, diverting their best technical talent to a problem that has nothing to do with their competitive value proposition. For startups, this infrastructure burden can consume 30–50% of their engineering capacity in the first two years.

### 3.4 The Hidden Cost: Data Staleness

Replication inherently introduces latency between the source of truth and the local copy. Sync intervals typically range from every few minutes to every few hours, depending on the MLS and the vendor's infrastructure. During these intervals, applications may serve stale data without knowing it: a listing that has already gone under contract may still show as active, a price change may not yet be reflected, or a new listing may not appear for hours after being published. This creates a category of data quality problems that no amount of engineering can fully solve within the replication model. Live-query access eliminates this category entirely because every query hits the canonical dataset in real time.

## 4. The Security Problem: Your Data Is Only as Secure as Your Least Secure Licensee

The replication model creates a fundamental security paradox: the more widely data is distributed, the less secure it becomes. An MLS organization can invest heavily in its own security posture, but the moment data is replicated to a licensee's server, the MLS's ability to protect that data ends. The overall security of the ecosystem is determined not by the most secure participant, but by the least secure.

### 4.1 The Chain of Custody Problem

When a licensee receives a full database copy through replication, they assume independent responsibility for every dimension of data security: encryption at rest and in transit, access controls, network security, vulnerability patching, backup and disaster recovery, monitoring and alerting, and incident response. The MLS has no technical mechanism to verify that any of these obligations are being met. Contractual requirements exist, but contracts are not firewalls. The chain of custody breaks the moment data crosses the network boundary from the MLS to the licensee.

### 4.2 The Variance in Security Investment

In a typical MLS market, security investment varies enormously across licensees. Vendor A may be SOC 2 Type II certified with a dedicated security team and a $500K annual security budget. Vendor B may have reasonable security practices managed by a shared IT staff. Vendor C may be a three-person startup running on default cloud configurations with no dedicated security review. All three hold the same data. The MLS data on Vendor C's servers contains the same sensitive information as Vendor A's—owner names, property details, transaction history, agent contact information—but with a fraction of the protection. The security of the entire ecosystem is bounded by Vendor C.

### 4.3 Breach Exposure

If any single licensee is breached, every record in their replicated database is exposed. The MLS organization may not learn of the breach for weeks or months—if they learn of it at all. Post-breach remediation is complicated by the fundamental nature of replication: you cannot recall copies of data that have already been distributed. Replicated databases may contain sensitive fields including owner contact information, transaction details, and agent personal data. A breach at one licensee effectively becomes a breach of the MLS's data, without the MLS having any ability to prevent it, detect it in real time, or remediate it after the fact. In 2023, a Microsoft Bing server misconfiguration exposed 2.5TB of real estate data including MLS listings—illustrating how even large technology companies can inadvertently expose replicated datasets.

### 4.4 The Compliance Burden on MLS Providers

MLS organizations face growing regulatory and fiduciary pressure to demonstrate data governance. In practice, this means attempting to audit 50 to 100+ independent licensees—each with different infrastructure, different security practices, and different levels of cooperation. Periodic audits provide only a point-in-time snapshot. Between audits, an MLS has no real-time visibility into how its data is being stored, accessed, or protected. This gap between governance responsibility and governance capability is widening as the number of licensees grows and as data sensitivity concerns increase with AI-driven demand for real estate datasets.

## 5. The Grey Market: $100M+ in Unauthorized Data Commercialization

Beyond the security risks of replication lies a more insidious problem: the grey market. Replicated MLS data is being monetized in ways that were never authorized by the MLS organizations that own it, generating significant revenue for unauthorized parties while the rightful data owners receive nothing.

### 5.1 What Is the Grey Market

The grey market refers to the unauthorized commercial use of replicated MLS data beyond the scope of the original license agreement. This takes several forms: selling data access or API feeds to unauthorized third parties, training AI and machine learning models on MLS datasets without authorization, repackaging listing data as proprietary "market intelligence" products sold to institutional clients, providing analytics services powered by MLS data to organizations that do not hold MLS licenses, and resyndication to platforms and aggregators outside the original distribution agreement. These activities exist in a grey area—not always explicitly illegal, but clearly beyond the intent and terms of the data license.

### 5.2 Why Replication Enables the Grey Market

The grey market is a direct and predictable consequence of the replication model. Once a full database copy exists on a licensee's server, the MLS has no technical mechanism to monitor how that data is queried, transformed, enriched, or redistributed. Contractual restrictions exist in licensing agreements, but contracts without monitoring are unenforceable in practice. An MLS cannot detect that a licensee is running unauthorized queries, exporting data to third-party systems, or feeding listing records into AI training pipelines. The data has left the MLS's control, and with it, any meaningful ability to enforce usage terms.

### 5.3 The Revenue Impact

Research from REdistribute—a joint venture between CRMLS and Bright MLS, two of the nation's largest MLS organizations—estimates that the industry loses over $100M annually in recurring revenue from unauthorized data commercialization. This revenue is generated from MLS data but flows to parties who did not create it, do not maintain it, and are not authorized to monetize it. The rightful beneficiaries are the MLS organizations and their member brokers who contribute the listing data that makes the entire ecosystem possible.

### 5.4 Why This Problem Is Growing

Three trends are accelerating grey market activity. First, AI and machine learning have created enormous demand for large, structured real estate datasets—models need training data, and MLS databases are among the most comprehensive real estate datasets in existence. Second, institutional investors increasingly rely on data-driven strategies, creating a buyer's market for unauthorized real estate data products. Third, the proliferation of PropTech companies has multiplied the number of replicated copies in circulation, expanding the surface area from which unauthorized commercialization can originate. Each new licensee with a full database copy is another potential point of data leakage.

## 6. Search Is Not Intelligence: The Analytical Gap

There is a fundamental distinction between searching data and understanding data. The real estate industry has built an entire technology ecosystem around the former while leaving the latter almost entirely unaddressed. This is not a failure of imagination—it is a structural consequence of how data access works today.

### 6.1 What Current Tools Do

Every consumer-facing portal and the vast majority of professional MLS tools are built around attribute-based search: specify bedrooms, bathrooms, price range, location, and square footage, then view matching listings. This paradigm answers one question well—"show me what is currently available that matches these criteria"—but it cannot answer "show me what is happening in this market," "show me where opportunities are emerging," or "show me how this neighborhood compares to that one over time." These are analytical questions, and search tools are not designed to answer them.

### 6.2 What Professionals Actually Need

Real estate professionals at every level need analytical capabilities that go far beyond attribute-based search. Agents need to compare market trends across neighborhoods to advise clients and win listing presentations. Brokers need market share analysis, agent performance benchmarking, and expansion opportunity identification. Investors need cross-data-source pattern recognition—correlating MLS activity with tax records, ownership patterns, and demographic trends to identify undervalued markets. Appraisers need neighborhood-level pricing velocity data. All of these are exploratory, analytical queries that require aggregation, comparison, time-series analysis, and cross-referencing. No search interface can provide them.

### 6.3 The Infrastructure Barrier

Running analytical queries requires data in a queryable, aggregation-capable format. Current MLS APIs are designed for search: they accept a set of filter parameters and return matching records. They do not support SQL-style aggregation (GROUP BY, AVG, COUNT), time-series analysis, cross-table joins, or the complex filtering that analytical questions demand. This creates a catch-22: to run analytical queries on MLS data, you must first replicate the data into your own database, which requires exactly the engineering infrastructure described in Section 3. The result is that analytical capability is available only to organizations that can afford the replication tax—primarily large technology vendors and well-funded PropTech companies.

### 6.4 Example: The Queries Nobody Can Run Today

The following analytical queries represent the kind of intelligence that real estate professionals need but cannot access without building replication infrastructure:

- **Neighborhood appreciation velocity:** Which zip codes are appreciating fastest month-over-month?
- **Absentee owner concentration:** Where are out-of-state owners concentrated, and what is their average hold time?
- **Brokerage market share trends:** How has our market share changed by zip code over the past 12 months?
- **Days-on-market trend analysis:** Which neighborhoods show declining DOM alongside rising inventory?
- **Price reduction frequency:** Where are sellers most aggressively cutting prices, and how many reductions before they sell?
- **Cash sale percentage trends:** Where is institutional buyer activity increasing or decreasing?
- **Assessment-to-sale-price gaps:** Where are properties consistently selling well above assessed value?

Each of these queries requires aggregation across thousands of records, time-series comparison, and in several cases, cross-referencing with tax data. None can be answered by a search interface.

### 6.5 The Intelligence Opportunity

If every agent, broker, and investor could run these queries—in plain English, on demand, without infrastructure investment—the quality of decision-making across the industry would fundamentally improve. The data already exists in MLS databases. The analytical methods are well-established. The only thing missing is the access model: a way to run analytical queries against the canonical dataset without first building a data warehouse. This is the gap that a governed live-query platform fills.

## 7. The Governed Live-Query Model

The alternative to replication is not incremental improvement to replication. It is a fundamentally different architecture: instead of distributing copies of data, provide governed query access to the canonical dataset. This is the core thesis of this paper and the foundation of RESO DB.

### 7.1 The Concept

In the governed live-query model, licensees never receive copies of the database. Instead, they send queries—in SQL or natural language—and receive results. The canonical dataset remains in a single governed environment. Every query is logged with full attribution: who ran it, when, what data was accessed, and how much was returned. Usage is metered for billing and governance purposes. Results are returned through HMAC-signed, time-expiring API URLs with AES-encrypted payloads. No bulk data export. No local copies. No unmonitored redistribution.

### 7.2 How It Works — Technical Overview

RESO DB's architecture begins with data ingestion: MLS organizations provide data feeds in RESO Web API or legacy RETS format. The ingestion layer normalizes all data to the RESO Data Dictionary 2.0 standard, resolving field name inconsistencies, data type variations, and enumeration differences across source systems. AI-assisted field mapping accelerates this process, transforming hundreds of cryptic legacy field names into clean, standardized RESO fields.

Normalized data is stored in a columnar analytics engine purpose-built for real-time analytics on large datasets. The engine can process analytical queries—aggregations, time-series comparisons, multi-table joins—across billions of rows in sub-second time. This is the performance foundation that makes interactive, on-demand data exploration possible.

Access is governed through a multi-tenant architecture with field-level permissions. Each licensee sees only the data they are authorized to access, at the granularity of individual fields. An agent may see listing price and property address but not seller contact information. A technology vendor may query aggregate statistics but not individual records. The MLS defines the entitlement rules; the platform enforces them at the query level. Every query generates an audit record: timestamp, user identity, query text, fields accessed, rows returned, and response time.

### 7.3 What Changes for Each Stakeholder

**For MLS providers:** Full, real-time visibility into how data is being used across all licensees. Anomaly detection identifies unusual query patterns that may indicate unauthorized use. Usage-based revenue models become possible—MLS organizations can monetize data access proportionally to the value it provides, rather than through flat licensing fees that undervalue high-volume consumption.

**For technology vendors:** The entire replication infrastructure disappears. No ETL pipelines, no database maintenance, no sync monitoring, no schema normalization. Engineering teams previously dedicated to data infrastructure are freed to build customer-facing product features. Integration with RESO DB is a SQL connection, not a multi-month infrastructure project.

**For brokerages and investors:** Analytical capabilities that previously required six-figure infrastructure investments become available on demand. Market trend analysis, competitive benchmarking, and cross-source intelligence are accessible immediately, without engineering resources.

**For agents:** Market intelligence that was previously available only to data-savvy analysts becomes accessible through conversational natural language queries. Ask a question, get an answer, dig deeper with follow-ups.

### 7.4 The Security Transformation

The shift from replication to governed live-query transforms every dimension of data security:

| Dimension | Replication Model | Governed Live-Query |
|---|---|---|
| **Data copies** | Dozens to hundreds per MLS | Zero — data stays in governed environment |
| **MLS visibility** | Periodic audits, self-reported | Real-time monitoring of every query |
| **Breach exposure** | Distributed across all licensees | Single hardened environment |
| **Unauthorized redistribution** | Undetectable | Detectable through query pattern analysis |
| **Compliance assurance** | Self-reported, point-in-time | Continuous, automated, auditable |

## 8. Tax Data and Cross-Source Intelligence

MLS listing data and tax assessment records each tell part of the story. Together, they unlock a category of analysis that neither can provide alone. The combination transforms real estate data from a listing search tool into a comprehensive intelligence platform.

### 8.1 Why Tax Data Matters

MLS listings tell you what is for sale: the asking price, property characteristics, days on market, and listing agent. Tax records tell you what listings cannot: who owns the property, how long they have owned it, what the county assesses it at, whether the owner lives there or elsewhere, what they paid when they acquired it, and what exemptions they have claimed. Combining these datasets enables analysis that is impossible with either alone—identifying absentee owners in appreciating markets, finding assessment-to-sale-price gaps that indicate undervalued neighborhoods, or tracking institutional buyer activity through LLC ownership patterns.

### 8.2 The Current State of Tax Data Access

Tax data is available today through providers like CoreLogic and ATTOM, typically through proprietary APIs with limited search parameters. These APIs support basic lookups—retrieve a record by address or parcel number—but do not support the analytical queries that make tax data valuable: aggregations by geography, time-series comparisons, or joins with other datasets. Most critically, there is no native integration between tax data and MLS listing data. Organizations that want to run cross-source queries must replicate both datasets independently and build their own matching logic—a significant engineering investment that puts cross-source intelligence out of reach for all but the largest technology vendors.

### 8.3 RESO DB's Approach

RESO DB maintains fully queryable tax records pre-matched to MLS listing data through parcel number linkage. Both datasets are accessible through the same query interface—SQL or natural language—and can be joined, filtered, and aggregated together. Tax data coverage includes ownership information (name, mailing address, ownership type), assessment data (assessed value, market value, assessment year), property characteristics (year built, square footage, lot size, zoning), transfer history (sale date, sale price, deed type), and exemption status (homestead, veteran, senior, agricultural).

### 8.4 Cross-Reference Use Cases

Combining MLS and tax data enables several high-value analytical scenarios:

- **Absentee owner prospecting:** Identify properties where the owner's mailing address differs from the property address, indicating non-occupant ownership. Cross-reference with listing activity to find absentee owners in areas with rising prices who may be motivated to sell.
- **Assessment gap analysis:** Find neighborhoods where assessed values are systematically below recent sale prices, indicating either rapid appreciation or assessment lag. This reveals markets where buyers may find relative value.
- **Rental market identification:** Properties with non-homestead tax status and out-of-area owner addresses are likely rentals. Aggregate this by neighborhood to map rental concentration and identify areas transitioning between owner-occupied and investor-held.
- **Institutional buyer tracking:** LLC and corporate ownership patterns in tax records reveal institutional investor activity. Track changes over time to identify markets where institutional buying is accelerating or retreating.
- **Long-hold owner identification:** Tax transfer history reveals properties that have not changed hands in 15, 20, or 30+ years. These owners may have significant equity and changing life circumstances that make them receptive to outreach.

## 9. Natural Language Access: Expanding Who Can Use Data

The most powerful analytical capabilities are worthless if the people who need them cannot use them. Natural language access removes the technical barrier entirely, expanding who can extract intelligence from real estate data by orders of magnitude.

### 9.1 The Technical Barrier

Until now, extracting intelligence from real estate data has required SQL proficiency, API knowledge, and data engineering skills. This limits analytical access to developer teams at technology vendors and a small number of data-savvy analysts—perhaps 50,000 people across the entire industry. The 2,000,000+ real estate agents, brokers, appraisers, and investors who would benefit most from data intelligence are effectively locked out by a technical barrier that has nothing to do with the questions they want to ask.

### 9.2 Natural Language as the Interface

RESO DB accepts questions in plain English. A user types "What zip codes near Austin have the highest percentage of homes selling above asking price?" and receives a direct answer with supporting data. The system interprets the intent, determines the appropriate query structure, executes it against the canonical dataset, and returns results with context. Users can then ask follow-up questions that build on the previous results: "Of those, which ones have average days on market under 30?" No training is required. No SQL knowledge. No API documentation.

### 9.3 How It Works (Non-Technical Explanation)

The process works in four steps. First, the user types a question in the chat interface. Second, a local language model—running entirely within RESO DB's infrastructure, never sending data to third parties—interprets the question and determines what data is needed. Third, the platform constructs and executes the appropriate SQL query against the analytics engine. Fourth, results are returned both as structured data (tables, charts) and as a natural language summary that explains what the data shows. The conversation is contextual: each follow-up question builds on what came before, allowing users to start broad and narrow progressively.

### 9.4 Example Conversational Analysis

Consider an investor evaluating a new market. The conversation might proceed as follows:

- **User:** "Show me the top 10 zip codes in the San Antonio metro by number of closed sales in the last 6 months."
- **RESO DB:** Returns a ranked table with zip code, closed sales count, median sale price, and average days on market.
- **User:** "Of those, which ones have more than 30% absentee ownership?"
- **RESO DB:** Cross-references with tax data, narrows to 4 zip codes, shows absentee ownership percentage and average hold time.
- **User:** "In 78245, show me properties where the owner is out-of-state and assessed value is at least 25% below the most recent comparable sale."
- **RESO DB:** Returns a specific property list with owner mailing state, assessed value, and comparable sale reference.

This entire analysis—from market overview to specific property targets—takes minutes, requires no technical skills, and would have previously required a dedicated analyst with access to both MLS and tax databases.

### 9.5 The Market Expansion This Creates

The current addressable market for real estate data analytics is approximately 50,000 users: developers and technical analysts at technology vendors, large brokerages, and institutional investors. With natural language access, the addressable market expands to over 2,000,000: every licensed real estate agent, broker, appraiser, and active investor in the United States. This is not an incremental improvement to an existing product category. It is a category expansion—making data intelligence accessible to an audience that has never had access before.

## 10. AI and Data Privacy: Why Local Models Matter

The real estate industry is caught between two forces: the clear value of AI-powered data access and the justified anxiety about what happens to sensitive data when it is processed by third-party AI systems. RESO DB resolves this tension through an architectural decision, not a policy promise.

### 10.1 The Industry's AI Anxiety

MLS organizations and brokerages are increasingly concerned about AI companies ingesting listing data. Several major MLSs have enacted policies restricting or outright banning the sharing of MLS data with AI providers. The National Association of Realtors has issued guidance on AI data usage. These concerns are justified: MLS databases contain detailed property information, transaction histories, and agent data that, once ingested by a third-party AI system, cannot be recalled or controlled. The industry has watched other sectors grapple with the consequences of uncontrolled AI data ingestion and is determined not to repeat those mistakes.

### 10.2 The Third-Party AI Problem

When natural language features are powered by third-party AI APIs—such as OpenAI, Google, or Anthropic—the data flow creates several risks. MLS data must be transmitted to external servers for processing. That data may be retained by the AI provider for quality assurance, model improvement, or debugging. It may be used to train future model versions, effectively incorporating proprietary MLS data into publicly accessible AI systems. And the AI provider's data usage policies may change over time, retroactively altering the terms under which data was originally shared. For MLS organizations that have spent decades building and protecting their data assets, these risks are unacceptable.

### 10.3 RESO DB's Local-Only Architecture

All natural language processing in RESO DB runs on local language models deployed within RESO DB's own infrastructure. No MLS data is ever transmitted to any third-party AI provider—not for processing, not for model improvement, not for any purpose. The language models interpret user questions and generate SQL queries locally. The queries execute against the local database. Results are returned directly to the user. At no point does MLS data leave the governed environment. This is not a configuration option, a premium tier feature, or a policy promise. It is the architecture of the system. There is no code path through which MLS data could be sent to a third-party AI provider, because no such integration exists.

### 10.4 Why This Matters for Adoption

The local-only architecture removes the trust barrier that has prevented AI adoption across the industry. MLS providers can authorize AI-powered data access for their licensees knowing that their data governance posture is not compromised. Brokerages can offer agents natural language analytical tools without violating MLS data policies. Technology vendors can integrate AI-powered query capabilities without renegotiating their data license agreements. The result is that the industry can capture the enormous value of AI-powered data access without accepting the data privacy risks that have rightfully made stakeholders cautious.

## 11. Implementation: From Replication to Platform

Transitioning from replication to a governed live-query model does not require a wholesale rip-and-replace of existing systems. The migration path is designed to be incremental, low-risk, and achievable within existing operational constraints.

### 11.1 For Technology Vendors: Migration Path

Technology vendors with existing replication infrastructure can migrate in four phases:

1. **Connect:** Establish a connection from your existing application to the RESO DB SQL API. Because RESO DB supports standard PostgreSQL and MySQL wire protocols, integration typically requires minimal code changes—often just updating a database connection string.
2. **Parallel operation:** Run your application against both your replicated database and the RESO DB API simultaneously. Compare results, validate data consistency, and identify any application-level dependencies on replication-specific behavior.
3. **Deprecate:** Once confidence is established, transition production traffic to the RESO DB API and begin decommissioning replication infrastructure—ETL pipelines, sync monitoring, local database servers.
4. **Reallocate:** Redirect the engineering team and infrastructure budget previously dedicated to replication toward product development and customer-facing features.

The typical timeline from initial connection to full migration is weeks to months, not quarters to years. The risk is low because the parallel operation phase provides a safety net throughout the transition.

### 11.2 For MLS Providers: Onboarding

MLS providers onboard to RESO DB through a structured process that requires no changes to their existing data infrastructure:

1. **Data feed:** Provide a data feed in RESO Web API or legacy RETS format. RESO DB's ingestion layer handles all normalization, including AI-assisted field mapping for legacy formats.
2. **Entitlement configuration:** Define licensee access rules—which organizations can access which data, at what field-level granularity, and under what usage terms. These rules are enforced programmatically at the query level.
3. **Licensee activation:** Authorized licensees receive API credentials and begin querying immediately. Migration from replication can proceed at each licensee's own pace.
4. **Monitoring:** Real-time usage dashboards provide visibility into query volume, data access patterns, and anomaly detection across all licensees.

The MLS retains full control over licensing terms, pricing, and access policies. RESO DB is the platform layer; the MLS remains the data authority.

### 11.3 For Brokerages and Investors: Getting Started

Brokerages and investors face the simplest onboarding path: request access through an MLS-authorized channel, receive credentials, and start asking questions. Natural language access means no SQL knowledge is required. No engineering team. No infrastructure. No data pipeline. Time to first actionable insight is measured in minutes, not months. For organizations that also want SQL-level access for technical staff, the same credentials work with any PostgreSQL or MySQL-compatible client.

## 12. Case Reference: San Diego MLS and the API-First Shift

The shift away from replication is not theoretical. Forward-thinking MLS organizations are already recognizing the limitations of the traditional model and moving toward API-first governance. San Diego MLS provides an instructive case study.

### 12.1 Background

San Diego MLS, one of California's larger MLS organizations, commissioned an analysis of their data distribution ecosystem to understand the challenges and opportunities of evolving beyond the replication model. The findings, documented in industry analyses of the API-first transition, laid out a vision for the MLS as a "data ecosystem orchestrator" rather than a passive data provider—an organization that actively governs how data flows, who accesses it, and how it is used.

### 12.2 Key Findings from the Case Study

The analysis identified several critical findings. Legacy replication creates governance gaps that are impossible to close through policy alone—no amount of contractual language can substitute for technical enforcement. An API-first model provides real-time visibility into data usage patterns, enabling the MLS to detect anomalies, enforce usage terms programmatically, and generate usage-based revenue. Most significantly, the API-first model changes the MLS's role from a data distribution utility to a data governance platform—a fundamentally more valuable position in the ecosystem that aligns the MLS's business model with the value it provides.

### 12.3 How RESO DB Extends This Vision

San Diego MLS's API-first initiative addressed the transport layer: how data moves from the MLS to licensees. RESO DB extends this vision to the consumption layer: how data is queried, analyzed, and used after it arrives. An API-first transport with replication-at-the-endpoint still results in copies of data on licensee servers. RESO DB completes the architecture by eliminating the need for any local copies, providing the analytical query capabilities that make replication unnecessary, and adding intelligence features—natural language access, tax data cross-referencing, real-time analytics—that neither API-first transport nor replication can offer. The combination of API-first governance and governed live-query access represents the complete vision: data that is accessible, governed, intelligent, and never copied.

## 13. Conclusion

The replication model served the real estate industry for over twenty years. It was the right solution for an era of limited bandwidth, no cloud infrastructure, and applications that required local data for acceptable performance. That era has ended, but the model persists—not because it is optimal, but because it is familiar.

The costs are now clear. Technology vendors spend hundreds of thousands of dollars annually on infrastructure that provides no competitive advantage. MLS organizations lose visibility and control over their most valuable asset the moment it is copied to a licensee's server. Agents, brokers, and investors are locked out of analytical capabilities by an infrastructure barrier that has nothing to do with their questions. And an estimated $100M+ in annual revenue is lost to grey market activity that replication makes undetectable.

A governed live-query model resolves every one of these problems. It eliminates duplicative infrastructure cost. It restores data governance to MLS organizations. It makes analytical intelligence accessible to every stakeholder. And it does so while strengthening security, enabling new revenue models, and opening the door to AI-powered capabilities that the industry needs but cannot safely adopt under the replication model.

- The replication model served the industry for 20+ years. Its time has passed.
- The costs are borne by every participant and benefit none.
- The security risks grow with every additional copy.
- The analytical limitations keep the industry's most valuable data locked away from the professionals who need it most.
- A governed live-query model resolves every one of these problems.
- The question is not whether the industry will move beyond replication. It is whether you will be leading that transition or reacting to it.

## 14. About RESO DB

RESO DB is a real estate data intelligence platform that combines MLS listings, tax records, and custom data sources into a single queryable platform—accessible through SQL or plain English—without requiring anyone to replicate or maintain data infrastructure.

Built for sub-second analytical performance, governed by design with multi-tenant architecture and field-level permissions, and powered by local-only AI that never sends data to third parties, RESO DB represents the next generation of real estate data access: governed, intelligent, and replication-free.

To learn more or see RESO DB in action, [view the interactive demo](product.html#analytics-demo) or reach us at [sales@resodb.com](mailto:sales@resodb.com).

---

## Appendix A: Glossary

Key terms defined for non-technical readers.

| Term | Definition |
|---|---|
| **Replication / ETL** | The process of copying and transforming data from one system to another. ETL stands for Extract, Transform, Load—the three-step process by which data is pulled from a source (such as an MLS), converted into a usable format, and loaded into a destination database. In the MLS context, replication refers to the practice of making full copies of the MLS database on a licensee's own infrastructure. |
| **MLS (Multiple Listing Service)** | Regional organizations that aggregate and distribute real estate listing data. MLSs serve as the canonical source of property listing information for a geographic market. There are approximately 580 MLS organizations in the United States, each maintaining listing data for their coverage area and distributing it to authorized licensees. |
| **RESO (Real Estate Standards Organization)** | The industry body that defines data standards for the real estate sector, including the RESO Data Dictionary, which standardizes field names, data types, and values across MLS systems. RESO standards enable interoperability between different MLS platforms and technology vendors. |
| **RETS (Real Estate Transaction Standard)** | A legacy protocol for accessing MLS data, originally designed around bulk data download and replication. RETS was the dominant method of MLS data distribution for over two decades. While being phased out in favor of modern APIs, it established the replication-first model that persists across the industry today. |
| **API (Application Programming Interface)** | A standardized way for software systems to communicate and exchange data. In the MLS context, APIs are the mechanisms through which technology vendors request and receive listing data. Modern MLS APIs (Bridge API, Spark API, RESO Web API) use RESTful conventions to deliver data over HTTP. |
| **SQL (Structured Query Language)** | The standard language for querying and managing relational databases. SQL allows users to retrieve specific data, perform aggregations, join datasets, and conduct analytical operations. RESO DB supports SQL as a query interface, allowing developers and technical users to write queries directly against the canonical dataset without replication. |
| **Natural Language Processing** | AI technology that enables computers to understand and respond to human language. In the context of RESO DB, natural language processing allows non-technical users to ask questions in plain English (e.g., "What are the fastest appreciating zip codes in Austin?") and receive data-driven answers. The system interprets the question, constructs the appropriate SQL query, and returns results. |
| **Multi-tenant architecture** | A system design where multiple organizations share the same infrastructure while their data and access are kept strictly separated. In RESO DB, multi-tenant architecture ensures that each MLS, brokerage, or vendor accesses only the data they are authorized to see, even though the underlying platform serves all of them. Tenant isolation is enforced at the query level. |
| **Field-level permissions** | Access controls that restrict visibility at the individual data field level, not just the table or record level. For example, one licensee may be authorized to see listing price and property address but not seller contact information, while another licensee may see all fields. Field-level permissions allow MLS organizations to grant precisely scoped access to each licensee. |
| **Parcel number** | A unique identifier assigned to a property by the county assessor, used to link MLS listing records with tax assessment records. Parcel numbers (also called APN, Assessor's Parcel Number) provide the key for cross-referencing listing data with ownership, assessment, tax, and deed transfer records. RESO DB uses parcel numbers to pre-match MLS and tax datasets. |

## Appendix B: Reference Query Library

Example queries demonstrating the analytical capabilities available through RESO DB, organized by audience.

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

**Monthly absorption rate by micro-market:**

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
```

**Absentee owner analysis with tax cross-reference:**

```sql
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
```

**Price reduction pattern analysis:**

```sql
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

## Appendix C: Competitive Landscape Reference

A comparative analysis of RESO DB against alternative approaches across key dimensions.

| Dimension | RESO DB | SourceRE / RealtyFeed | CoreLogic / ATTOM | Traditional Replication |
|---|---|---|---|---|
| **Primary focus** | Data intelligence platform | MLS data distribution & governance | Data licensing & aggregation | Self-managed infrastructure |
| **Eliminates replication** | Yes | Partial (supports both) | No | No (IS replication) |
| **Natural language queries** | Yes (local AI) | No | No | No |
| **Tax data integration** | Yes, fully queryable | No | Yes, but separate APIs with limited params | Self-managed |
| **SQL compatibility** | PostgreSQL/MySQL | Proprietary API | Proprietary APIs | Vendor-dependent |
| **AI data privacy** | Local models only | N/A | Unclear | N/A |
| **Target users** | All stakeholders | MLS providers & vendors | Enterprise data consumers | Developers |
| **Audit & governance** | Built-in, real-time | Built-in | Per-product | Self-managed |

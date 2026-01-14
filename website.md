# RESO DB Marketing Website Pages

---

## Page 1: Home

### Hero Section

**Headline:**
# The Universal API for Real Estate Data

**Subheadline:**
Aggregate multiple MLS sources, normalize to the RESO 2.0 standard, and get instant SQL access via our high-performance data warehouse. Build faster, without the ETL overhead.

**Primary CTA:** Request a Demo
**Secondary CTA:** View Documentation

---

### Value Propositions

#### Faster Integration
**Stop building custom pipelines for every MLS.**
Connect to RETS, Bridge API, and Spark API sources through a single platform. Our adapters handle the complexity of different protocols so you can focus on building your product.

#### Governed Access
**Enterprise-grade permissions and compliance.**
Field-level access controls, role-based permissions, and comprehensive audit logs. Give your teams exactly the data access they need—nothing more, nothing less.

#### Warehouse-Speed Queries
**Analytics performance without the infrastructure.**
Query millions of listings in milliseconds with our ClickHouse-powered SQL API. Run complex aggregations, market analysis, and real-time searches at scale.

---

### How It Works

**Step 1: Connect**
Link your authorized MLS data sources. We support RETS, Bridge API, and Spark API protocols out of the box. No custom integration code required.

**Step 2: Normalize**
Our platform automatically transforms source data into the RESO 2.0 standard schema. AI-assisted field mapping handles the tedious work of aligning different MLS schemas.

**Step 3: Query**
Access your unified data through our SQL API. Write standard SQL queries and get results in milliseconds. Build dashboards, power applications, or export for analysis.

---

### Sample Query

```sql
SELECT
    City,
    COUNT(*) as ActiveListings,
    AVG(ListPrice) as AvgPrice,
    AVG(DaysOnMarket) as AvgDOM
FROM properties
WHERE StandardStatus = 'Active'
    AND StateOrProvince = 'TX'
    AND ListPrice BETWEEN 300000 AND 800000
GROUP BY City
ORDER BY ActiveListings DESC
LIMIT 10;
```

*Query multiple MLS sources with a single, standardized SQL interface.*

---

### Security & Trust

**Tenant Isolation** — Your data is logically separated from other organizations with strict access boundaries.

**Encryption** — All data encrypted at rest and in transit using industry-standard protocols.

**Audit Logging** — Every query and access event is logged for compliance and troubleshooting.

**Role-Based Access** — Granular permissions for owners, admins, and team members.

---

### Ready to Get Started?

Join leading brokerages and PropTech companies who trust RESO DB for their real estate data infrastructure.

**Primary CTA:** Request a Demo
**Secondary CTA:** Read the Documentation

---

---

## Page 2: Product

### Platform Overview

# One Platform for All Your MLS Data

RESO DB is the modern data platform for real estate organizations. We handle the complexity of MLS integrations so you can focus on building great products and making better decisions.

**From chaos to clarity:** Multiple MLS feeds, inconsistent schemas, and constant maintenance become a single, reliable SQL API with standardized data.

---

### Core Capabilities

#### Multi-MLS Aggregation

Connect to multiple MLS sources through a single platform. We support the major data access protocols used across the industry:

- **RETS Protocol** — Traditional RETS feeds with full metadata support
- **Bridge API** — Modern RESTful API connections
- **Spark API** — Spark/Flexmls API integration

Configure your data sources once. We handle ongoing synchronization, error recovery, and schema updates automatically.

---

#### RESO 2.0 Normalization

Every listing, agent, and office record is transformed to the RESO Data Dictionary 2.0 standard. This means:

- **Consistent field names** across all your sources
- **Standardized enumerations** for status, property type, and more
- **Predictable data types** for reliable application development
- **Cross-MLS queries** without source-specific logic

---

#### SQL API on ClickHouse

Our query engine is built on ClickHouse, the industry-leading columnar database for analytics. You get:

- **Sub-second queries** on millions of records
- **Standard SQL syntax** your team already knows
- **Complex aggregations** for market analysis and reporting
- **Real-time results** for application workloads

No need to provision databases, manage indexes, or optimize query plans. We handle the infrastructure.

---

#### Multi-Tenant Organizations

Built for teams and enterprises from day one:

- **Organizations** — Isolated workspaces for each company or business unit
- **Teams** — Group users and manage access together
- **Roles** — Owner, Admin, and Member with distinct permission levels
- **Invitations** — Email-based onboarding with secure tokens

---

#### Field-Level Permissions

Go beyond table-level access control:

- **Restrict sensitive fields** like seller contact information or financial details
- **MLS-specific permissions** — Different access rules for different sources
- **Audit everything** — Know exactly who accessed what and when
- **Compliance ready** — Meet MLS data sharing requirements

---

#### Usage Metering & Billing

Transparent, predictable costs:

- **Compute-based pricing** — Pay for the query resources you use
- **Real-time dashboards** — Monitor usage across your organization
- **Budget alerts** — Get notified before unexpected overages
- **Per-team attribution** — Understand costs by team or application

---

#### AI-Assisted Field Mapping

Reduce integration time from weeks to hours:

- **Intelligent suggestions** — Our AI analyzes source schemas and recommends RESO mappings
- **Human review workflow** — Suggestions require approval before activation
- **Version control** — Track mapping changes over time
- **Audit trail** — Full history of who changed what

---

### Built For

#### Real Estate Brokerages
Power internal analytics, create agent tools, and unlock insights across your MLS subscriptions. Give your teams the data they need with the governance you require.

#### PropTech Companies
Build products faster with reliable, standardized data. Stop maintaining fragile MLS integrations and focus on your core product.

#### MLS Aggregators
Unify feeds at scale with multi-tenant isolation and per-customer metering. Reduce operational overhead while improving data quality.

#### Data Analysts
Query real estate data with SQL, not spreadsheets. Run complex analysis across markets without waiting for IT to build custom reports.

---

### Get Started

See how RESO DB can transform your real estate data operations.

**CTA:** Request a Demo

---

---

## Page 3: Pricing

### Header

# Pricing That Scales With You

Simple, usage-based pricing. No hidden fees. Start free, grow when you're ready.

---

### Pricing Model

RESO DB uses **compute-based pricing** that scales with your actual usage. You pay for the query resources consumed, measured in compute seconds.

**What counts as compute time?**
- Time spent executing your SQL queries
- Measured in seconds with sub-second precision
- Complex queries that scan more data use more compute
- Simple lookups cost fractions of a second

**Example compute usage:**
| Query Type | Typical Compute |
|------------|-----------------|
| Single listing lookup | 0.01 - 0.05 seconds |
| Market summary (1 city) | 0.1 - 0.5 seconds |
| Complex aggregation (state-wide) | 1 - 5 seconds |
| Large export (100k records) | 10 - 30 seconds |

---

### Plans

#### Developer
**$0/month**

Get started building with RESO DB at no cost.

- 100 compute seconds/month
- 1 MLS source connection
- API access
- Community support
- Single user

*Perfect for: Prototyping, learning the API, small projects*

**CTA:** Start Free

---

#### Growth
**$299/month** + compute usage

Production-ready for growing teams.

- 500 compute seconds included
- $0.02 per additional compute second
- Up to 5 MLS source connections
- Up to 10 team members
- Role-based access control
- Email support
- Usage alerts and budgets

*Perfect for: Brokerages, small PropTech companies, analytics teams*

**CTA:** Start Trial

---

#### Enterprise
**Custom pricing**

For organizations with advanced requirements.

- Unlimited compute (volume pricing)
- Unlimited MLS connections
- Unlimited team members
- Field-level permissions
- SSO/SAML integration
- Dedicated support
- Custom SLAs
- Data residency options

*Perfect for: Large brokerages, MLS aggregators, enterprise PropTech*

**CTA:** Contact Sales

---

### Cost Controls

Stay in control of your spending:

**Usage Dashboards** — Real-time visibility into compute consumption across your organization.

**Budget Alerts** — Set thresholds and get notified via email when you're approaching limits.

**Per-Team Attribution** — Break down costs by team or application to understand where resources go.

**Query Limits** — Optional per-user or per-API-key limits to prevent runaway queries.

---

### Example Scenarios

#### Small Brokerage
*50 agents, 2 MLS sources, daily market reports*

- ~200 compute seconds/month
- Growth plan: **$299/month**

---

#### PropTech Startup
*Application serving 10,000 searches/day*

- ~1,500 compute seconds/month
- Growth plan: **$299 + ~$20 overage = ~$319/month**

---

#### Regional Aggregator
*5 MLS sources, 50 client organizations, heavy analytics*

- ~15,000 compute seconds/month
- Enterprise plan: **Custom pricing**

---

### FAQ

**Can I try before I buy?**
Yes. The Developer plan is free forever with 100 compute seconds/month. Growth plans include a 14-day trial.

**What happens if I exceed my compute allocation?**
On the Growth plan, you're billed $0.02 per additional compute second. You can set budget alerts to avoid surprises.

**Can I upgrade or downgrade anytime?**
Yes. Plan changes take effect on your next billing cycle. No long-term contracts required.

**Do you offer annual billing?**
Yes. Annual plans receive a 15% discount. Contact sales for details.

**What MLS sources do you support?**
We support any MLS that provides RETS, Bridge API, or Spark API access. You must have authorized access to the MLS data you connect.

**Is my data secure?**
Yes. We use encryption at rest and in transit, logical tenant isolation, and comprehensive audit logging. See our Security page for details.

---

### Ready to Get Started?

**Primary CTA:** Start Free
**Secondary CTA:** Contact Sales

---

---

## Page 4: Contact

### Header

# Get in Touch

Have questions about RESO DB? Want to see a demo? We'd love to hear from you.

---

### Request a Demo

See RESO DB in action. Our team will walk you through the platform and answer your questions.

**Form Fields:**

- **Full Name** (required)
- **Work Email** (required)
- **Company Name** (required)
- **Job Title** (optional)
- **Number of MLS Sources** (dropdown: 1, 2-5, 6-10, 10+)
- **Primary Use Case** (dropdown: Analytics/BI, Application Development, Data Aggregation, Other)
- **Message** (optional, textarea)

**Submit Button:** Request Demo

*We typically respond within 1 business day.*

---

### Other Ways to Connect

#### Documentation
Get started on your own with our comprehensive API documentation, tutorials, and code samples.
**Link:** View Documentation

#### Developer Community
Join our community forum to ask questions, share ideas, and connect with other RESO DB developers.
**Link:** Join Community

#### Support
Existing customers can reach our support team directly.
**Link:** Contact Support

---

### Sales Inquiries

For enterprise pricing, custom requirements, or partnership opportunities:

**Email:** sales@resodb.com

---

### Office

RESO DB
[Address Placeholder]
[City, State ZIP]

---

*Your data is handled in accordance with our Privacy Policy.*

---

---

## Appendix: Key Messaging Reference

Use these consistent messages across all pages:

### Tagline Options
- "The Universal API for Real Estate Data"
- "Unified MLS Data. Standardized. Queryable. Governed."
- "Real Estate Data Infrastructure for Modern Teams"

### Value Proposition (One Sentence)
RESO DB aggregates MLS feeds, normalizes them to RESO 2.0, and exposes warehouse-speed SQL access with governance built in.

### Differentiators
1. Stop maintaining per-MLS pipelines—query one consistent schema across sources.
2. Field-level permissions, audit logs, and tenant isolation for compliant collaboration.
3. ClickHouse-powered analytics performance without managing infrastructure.
4. AI-assisted field mapping reduces integration time from weeks to hours.
5. Usage-based pricing means you only pay for what you use.

### Audience-Specific Headlines
- **Brokerages:** "Unlock Your MLS Data"
- **PropTech:** "Build Faster, Ship Sooner"
- **Aggregators:** "Scale Without the Overhead"
- **Analysts:** "Query, Don't Wrangle"

# eCommerce CLI Tools

Zero-dependency, single-file CLI tools that give Claude direct access to your marketing stack. Each CLI is a standalone Node.js script (Node 18+) with no `npm install` required.

These tools let Claude pull live data from your platforms instead of you pasting screenshots or exporting CSVs.

## Available CLIs

| CLI | Platform | What Claude Can Access |
|-----|----------|----------------------|
| `shopify.js` | [Shopify](https://shopify.com) | Orders, products, customers, inventory, collections, store analytics |
| `klaviyo.js` | [Klaviyo](https://klaviyo.com) | Flows, campaigns, segments, profiles, metrics, templates |
| `meta-ads.js` | [Meta Ads](https://facebook.com/business/ads) | Campaigns, ad sets, ads, audiences, ROAS, performance insights |
| `google-ads.js` | [Google Ads](https://ads.google.com) | Search, Shopping, PMax campaigns, keywords, search terms, budgets |
| `ga4.js` | [Google Analytics 4](https://analytics.google.com) | Traffic, pages, ecommerce, acquisition, conversions, realtime |
| `gsc.js` | [Google Search Console](https://search.google.com/search-console) | Search queries, page performance, devices, URL inspection, sitemaps |
| `tiktok-ads.js` | [TikTok Ads](https://ads.tiktok.com) | Campaigns, ad groups, ads, performance reports, audiences |

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/grantland14/Claude-Skills-for-eCommerce.git
cd Claude-Skills-for-eCommerce
```

### 2. Set your API keys

Add the environment variables for the platforms you use to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
# Shopify
export SHOPIFY_STORE="your-store-name"          # just the name, not .myshopify.com
export SHOPIFY_ACCESS_TOKEN="shpat_xxxxx"

# Klaviyo
export KLAVIYO_API_KEY="pk_xxxxx"

# Meta Ads
export META_ACCESS_TOKEN="xxxxx"
export META_AD_ACCOUNT_ID="123456789"            # without act_ prefix

# Google Ads
export GOOGLE_ADS_TOKEN="ya29.xxxxx"             # OAuth access token
export GOOGLE_ADS_DEVELOPER_TOKEN="xxxxx"
export GOOGLE_ADS_CUSTOMER_ID="123-456-7890"

# Google Analytics 4
export GA4_ACCESS_TOKEN="ya29.xxxxx"             # OAuth access token
export GA4_PROPERTY_ID="123456789"

# Google Search Console
export GSC_ACCESS_TOKEN="ya29.xxxxx"             # OAuth access token
export GSC_SITE_URL="https://yourstore.com"      # must match GSC exactly

# TikTok Ads
export TIKTOK_ACCESS_TOKEN="xxxxx"
export TIKTOK_ADVERTISER_ID="123456789"
```

Then reload your shell:

```bash
source ~/.zshrc
```

### 3. Test a CLI

```bash
node tools/clis/shopify.js shop
node tools/clis/klaviyo.js flows list
node tools/clis/ga4.js traffic
```

### 4. (Optional) Add to PATH for easy access

```bash
export PATH="$PATH:$(pwd)/tools/clis"
```

Or symlink individual CLIs:

```bash
ln -sf "$(pwd)/tools/clis/shopify.js" ~/.local/bin/shopify
ln -sf "$(pwd)/tools/clis/klaviyo.js" ~/.local/bin/klaviyo
```

---

## How to Get API Keys

### Shopify

1. Go to your Shopify Admin → **Settings** → **Apps and sales channels**
2. Click **Develop apps** (you may need to enable developer access first)
3. Click **Create an app** → give it a name like "Claude CLI"
4. Go to **Configuration** → **Admin API integration**
5. Select these scopes: `read_orders`, `read_products`, `read_customers`, `read_inventory`, `read_analytics`, `read_locations`
6. Click **Install app**
7. Copy the **Admin API access token** (starts with `shpat_`)
8. Your store name is the `xxx` part of `xxx.myshopify.com`

```bash
export SHOPIFY_STORE="your-store-name"
export SHOPIFY_ACCESS_TOKEN="shpat_xxxxx"
```

### Klaviyo

1. Log into Klaviyo → **Settings** → **API Keys**
2. Click **Create Private API Key**
3. Name it "Claude CLI"
4. Select **Read Only** access (or Full Access if you want write capabilities)
5. Copy the private API key (starts with `pk_`)

```bash
export KLAVIYO_API_KEY="pk_xxxxx"
```

### Meta Ads (Facebook/Instagram)

1. Go to [Meta Business Suite](https://business.facebook.com) → **Settings** → **Business Settings**
2. Under **Users** → **System Users**, create a system user (or use existing)
3. Click **Generate New Token**
4. Select your ad account and these permissions: `ads_read`, `ads_management`, `read_insights`
5. Copy the access token
6. Your Ad Account ID is in **Ad Accounts** section (numeric ID without `act_` prefix)

**Note:** Meta access tokens expire. For a long-lived token, use the [Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) to exchange for a 60-day token, or set up a System User for a non-expiring token.

```bash
export META_ACCESS_TOKEN="xxxxx"
export META_AD_ACCOUNT_ID="123456789"
```

### Google Ads

Google Ads requires three credentials:

1. **Developer Token**: Go to [Google Ads API Center](https://ads.google.com/aw/apicenter) in your manager account → apply for API access (basic access is fine for read-only)
2. **OAuth Access Token**: Create a project in [Google Cloud Console](https://console.cloud.google.com), enable the Google Ads API, create OAuth credentials, and generate an access token using the OAuth flow
3. **Customer ID**: Your Google Ads account number (found in the top-right of Google Ads, format: `123-456-7890`)

```bash
export GOOGLE_ADS_TOKEN="ya29.xxxxx"
export GOOGLE_ADS_DEVELOPER_TOKEN="xxxxx"
export GOOGLE_ADS_CUSTOMER_ID="123-456-7890"
```

**Tip:** For the easiest OAuth setup, use [Google's OAuth Playground](https://developers.google.com/oauthplayground/) with the `https://www.googleapis.com/auth/adwords` scope.

### Google Analytics 4

1. Create a project in [Google Cloud Console](https://console.cloud.google.com)
2. Enable the **Google Analytics Data API** and **Google Analytics Admin API**
3. Create OAuth credentials (or a service account)
4. Generate an access token using the OAuth flow with scope `https://www.googleapis.com/auth/analytics.readonly`
5. Your Property ID is in GA4 → **Admin** → **Property Settings** (numeric ID)

```bash
export GA4_ACCESS_TOKEN="ya29.xxxxx"
export GA4_PROPERTY_ID="123456789"
```

**Tip:** Use [Google's OAuth Playground](https://developers.google.com/oauthplayground/) with the `https://www.googleapis.com/auth/analytics.readonly` scope for quick setup.

### Google Search Console

1. Uses the same Google Cloud project as GA4
2. Enable the **Google Search Console API**
3. Generate an access token with scope `https://www.googleapis.com/auth/webmasters.readonly`
4. Your Site URL must exactly match how it appears in Search Console (including `https://` or `sc-domain:`)

```bash
export GSC_ACCESS_TOKEN="ya29.xxxxx"
export GSC_SITE_URL="https://yourstore.com"
```

**Note:** If you're already set up for GA4, you can use the same OAuth access token — just make sure both API scopes are included.

### TikTok Ads

1. Go to [TikTok Marketing API](https://business-api.tiktok.com/portal/docs) → apply for developer access
2. Create an app in the TikTok for Business developer portal
3. Once approved, go to **App Management** → your app → **Generate Access Token**
4. Your Advertiser ID is in TikTok Ads Manager → account settings (numeric ID)

```bash
export TIKTOK_ACCESS_TOKEN="xxxxx"
export TIKTOK_ADVERTISER_ID="123456789"
```

---

## Usage

All CLIs follow the same pattern:

```
node tools/clis/{tool}.js <resource> <action> [--options]
```

Every CLI outputs JSON to stdout. Use `--dry-run` on any command to preview the API request without sending it.

### Shopify

```bash
# Store info
node tools/clis/shopify.js shop

# Orders
node tools/clis/shopify.js orders list --status any --limit 50
node tools/clis/shopify.js orders list --created-after 2025-01-01 --financial-status paid
node tools/clis/shopify.js orders get --id 12345
node tools/clis/shopify.js orders count --status any

# Products
node tools/clis/shopify.js products list --limit 50
node tools/clis/shopify.js products list --status active --product-type "T-Shirts"
node tools/clis/shopify.js products get --id 12345
node tools/clis/shopify.js products count

# Customers
node tools/clis/shopify.js customers list --limit 50
node tools/clis/shopify.js customers search --query "email:john@example.com"
node tools/clis/shopify.js customers orders --id 12345

# Inventory
node tools/clis/shopify.js inventory levels --location-ids 12345
node tools/clis/shopify.js locations list

# Collections
node tools/clis/shopify.js collections smart
node tools/clis/shopify.js collections custom
node tools/clis/shopify.js collections products --id 12345

# Analytics (aggregated from order data)
node tools/clis/shopify.js analytics orders-summary --created-after 2025-01-01
node tools/clis/shopify.js analytics top-products --created-after 2025-01-01 --limit 10
```

### Klaviyo

```bash
# Flows
node tools/clis/klaviyo.js flows list
node tools/clis/klaviyo.js flows get --id abc123 --include flow-messages
node tools/clis/klaviyo.js flows messages --id abc123

# Campaigns
node tools/clis/klaviyo.js campaigns list --sort -send_time
node tools/clis/klaviyo.js campaigns get --id abc123

# Metrics & analytics
node tools/clis/klaviyo.js metrics list
node tools/clis/klaviyo.js metrics aggregate --id abc123 --measurements count,sum_value --interval month --start-date 2025-01-01T00:00:00

# Segments
node tools/clis/klaviyo.js segments list
node tools/clis/klaviyo.js segments profiles --id abc123

# Lists
node tools/clis/klaviyo.js lists list
node tools/clis/klaviyo.js lists profiles --id abc123

# Profiles
node tools/clis/klaviyo.js profiles list --page-size 20
node tools/clis/klaviyo.js profiles get --id abc123

# Templates
node tools/clis/klaviyo.js templates list
```

### Meta Ads

```bash
# Account overview
node tools/clis/meta-ads.js accounts list
node tools/clis/meta-ads.js account-insights --date-preset last_30d
node tools/clis/meta-ads.js account-insights --date-preset last_7d --time-increment 1

# Campaigns
node tools/clis/meta-ads.js campaigns list
node tools/clis/meta-ads.js campaigns list --status ACTIVE
node tools/clis/meta-ads.js campaigns insights --id 12345 --date-preset last_30d
node tools/clis/meta-ads.js campaigns insights --id 12345 --breakdowns age --date-preset last_7d

# Ad sets & ads
node tools/clis/meta-ads.js adsets list
node tools/clis/meta-ads.js adsets insights --id 12345 --date-preset last_30d
node tools/clis/meta-ads.js ads list
node tools/clis/meta-ads.js ads insights --id 12345

# Audiences
node tools/clis/meta-ads.js audiences list
```

### Google Ads

```bash
# Account
node tools/clis/google-ads.js account info

# Campaigns
node tools/clis/google-ads.js campaigns list
node tools/clis/google-ads.js campaigns performance --days 30
node tools/clis/google-ads.js campaigns shopping --days 30
node tools/clis/google-ads.js campaigns pmax --days 30

# Keywords & search terms
node tools/clis/google-ads.js keywords performance --days 30 --limit 50
node tools/clis/google-ads.js keywords search-terms --days 30 --limit 50

# Shopping product performance
node tools/clis/google-ads.js products performance --days 30 --limit 20

# Ad groups
node tools/clis/google-ads.js adgroups performance --days 30

# Budgets
node tools/clis/google-ads.js budgets list
node tools/clis/google-ads.js budgets update --id 12345 --amount 50.00

# Custom GAQL query
node tools/clis/google-ads.js query --q "SELECT campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_7_DAYS"
```

### Google Analytics 4

```bash
# Traffic by channel
node tools/clis/ga4.js traffic
node tools/clis/ga4.js traffic --start-date 2025-01-01 --end-date 2025-01-31

# Top pages
node tools/clis/ga4.js pages --limit 25
node tools/clis/ga4.js pages --start-date 7daysAgo

# eCommerce data
node tools/clis/ga4.js ecommerce
node tools/clis/ga4.js ecommerce --by-source
node tools/clis/ga4.js ecommerce --by-product --limit 20

# Acquisition (by source, medium, or campaign)
node tools/clis/ga4.js acquisition
node tools/clis/ga4.js acquisition --by-campaign
node tools/clis/ga4.js acquisition --by-medium

# Realtime
node tools/clis/ga4.js realtime
node tools/clis/ga4.js realtime --dimensions unifiedScreenName

# Custom report
node tools/clis/ga4.js report --dimensions sessionSource,sessionMedium --metrics sessions,conversions,totalRevenue --start-date 30daysAgo

# Conversions & properties
node tools/clis/ga4.js conversions list
node tools/clis/ga4.js properties list
```

### Google Search Console

```bash
# Top search queries
node tools/clis/gsc.js queries
node tools/clis/gsc.js queries --limit 200
node tools/clis/gsc.js queries --page /collections/

# Top pages
node tools/clis/gsc.js pages
node tools/clis/gsc.js pages --query "organic skincare"

# Traffic breakdowns
node tools/clis/gsc.js countries
node tools/clis/gsc.js devices

# Daily trend
node tools/clis/gsc.js dates --limit 90
node tools/clis/gsc.js dates --query "your brand name"

# URL inspection
node tools/clis/gsc.js inspect --url https://yourstore.com/products/example

# Sitemaps
node tools/clis/gsc.js sitemaps list
node tools/clis/gsc.js sitemaps submit --sitemap-url https://yourstore.com/sitemap.xml

# List verified sites
node tools/clis/gsc.js sites list
```

### TikTok Ads

```bash
# Account info
node tools/clis/tiktok-ads.js advertisers info

# Campaigns
node tools/clis/tiktok-ads.js campaigns list
node tools/clis/tiktok-ads.js campaigns list --status ENABLE

# Ad groups & ads
node tools/clis/tiktok-ads.js adgroups list --campaign-id 12345
node tools/clis/tiktok-ads.js ads list --campaign-id 12345

# Performance reports
node tools/clis/tiktok-ads.js reports campaign --days 30
node tools/clis/tiktok-ads.js reports adgroup --days 30
node tools/clis/tiktok-ads.js reports daily --days 30

# Audiences
node tools/clis/tiktok-ads.js audiences list
```

---

## How Claude Uses These

When you have these CLIs set up, Claude can pull live data during conversations. For example:

**You:** "How are my Meta ads performing this month?"

**Claude runs:**
```bash
node tools/clis/meta-ads.js account-insights --date-preset this_month
node tools/clis/meta-ads.js campaigns insights --id 12345 --date-preset this_month
```

**You:** "What are my best-selling products this quarter?"

**Claude runs:**
```bash
node tools/clis/shopify.js analytics top-products --created-after 2025-01-01 --limit 20
```

**You:** "Compare my email flow performance to last month"

**Claude runs:**
```bash
node tools/clis/klaviyo.js flows list
node tools/clis/klaviyo.js metrics aggregate --id <placed-order-metric> --interval month --start-date 2024-12-01T00:00:00
```

---

## Security

- **Never hardcode API keys** — all CLIs read from environment variables only
- Store keys in `~/.zshrc` or `~/.bashrc` (these are not shared or committed)
- Use `--dry-run` on any command to preview the request without sending it (credentials show as `***`)
- All CLIs are read-heavy by design — write operations (create, update) require explicit flags
- If you fork this repo, check that no secrets are in your commits

## Requirements

- **Node.js 18+** (for built-in `fetch`)
- No other dependencies — every CLI is a single, self-contained file

# eCommerce Skills for Claude Code

A collection of 14 AI agent skills and 7 CLI tools built for eCommerce founders and DTC operators. Give Claude deep expertise in email marketing, paid ads, pricing, product launches, buyer psychology, financial analysis, and more — plus direct API access to your marketing stack (Shopify, Klaviyo, Meta Ads, Google Ads, GA4, Search Console, TikTok Ads).

Contributions welcome! Found a way to improve a skill or have a new one to add? [Open a PR](https://github.com/grantland14/Claude-Skills-for-eCommerce/pulls).

## What are Skills?

Skills are markdown files that give AI agents specialized knowledge and workflows for specific tasks. When you add these to your project, Claude Code can recognize when you're working on an eCommerce task and apply the right frameworks, templates, and best practices automatically.

Think of each skill as hiring a specialist — except the specialist lives inside Claude and is available 24/7.

## How to Install

### Install all skills at once

```bash
git clone https://github.com/grantland14/Claude-Skills-for-eCommerce.git
mkdir -p ~/.claude/skills
cp -rn Claude-Skills-for-eCommerce/skills/ecommerce-* ~/.claude/skills/
```

### Install individual skills

```bash
git clone https://github.com/grantland14/Claude-Skills-for-eCommerce.git
mkdir -p ~/.claude/skills
cp -rn Claude-Skills-for-eCommerce/skills/ecommerce-brand-guide ~/.claude/skills/
cp -rn Claude-Skills-for-eCommerce/skills/ecommerce-email ~/.claude/skills/
```

Replace the skill names with whichever ones you want.

After copying, start a new Claude Code conversation. Claude will automatically detect the skills and use them when relevant.

> **Note:** `claude install` is for updating Claude Code itself — not for installing skills. Skills are installed by copying files into `~/.claude/skills/`.

## The Brand Guide (Start Here)

The **eCommerce Brand Guide** skill is the foundation. It creates a `.claude/brand-guide.md` file that captures your brand's identity, customer personas, product catalog, voice, positioning, and competitive landscape. Every other skill checks for this file automatically — so you describe your brand once and every skill already knows who you are.

## Available Skills

### Brand & Strategy

| Skill | Description |
|-------|-------------|
| [**ecommerce-brand-guide**](skills/ecommerce-brand-guide/) | Create and maintain a structured brand guide that all other skills reference automatically. Covers brand identity, customer personas, product catalog, voice and messaging, competitive positioning, key sales dates, and proof points. |
| [**ecommerce-buyer-psychology**](skills/ecommerce-buyer-psychology/) | Apply 30 cognitive biases and persuasion principles to product pages, emails, ads, and pricing. Covers anchoring, loss aversion, social proof, scarcity, the decoy effect, framing, reciprocity, and more — each with specific DTC applications. |
| [**ecommerce-pricing**](skills/ecommerce-pricing/) | Set profitable prices, design discount structures, build subscription tiers, optimize bundles, and run price tests. Includes pricing psychology, BFCM strategy, price increase playbooks, and category margin benchmarks. |
| [**ecommerce-competitor-intel**](skills/ecommerce-competitor-intel/) | Analyze competitor ads from Meta Ad Library, reverse-engineer websites and PDPs, compare pricing, tear down email flows, map competitive positioning, and build actionable competitive strategies. |

### Marketing & Content

| Skill | Description |
|-------|-------------|
| [**ecommerce-email**](skills/ecommerce-email/) | The complete eCommerce email playbook. Automated flows (welcome, cart abandonment, post-purchase, win-back), campaign strategy, segmentation, Klaviyo guidance, and full email program audits. |
| [**ecommerce-copywriting**](skills/ecommerce-copywriting/) | DTC conversion copywriting for product pages, collection pages, homepage hero sections, about pages, and landing pages. Includes copy frameworks and the psychology of buying online. |
| [**ecommerce-paid-ads**](skills/ecommerce-paid-ads/) | Performance marketing for DTC brands. Meta Advantage+ Shopping, Google Shopping and Performance Max, TikTok Shop ads, creative strategy, campaign architecture, and budget allocation. |
| [**ecommerce-social-content**](skills/ecommerce-social-content/) | Social media strategy and content writing for DTC brands. Content ideas, platform-specific copy (Instagram, TikTok, Pinterest, Facebook), content calendars, UGC strategy, and creator briefs. |
| [**ecommerce-launch**](skills/ecommerce-launch/) | Plan and execute product launches with a 4-phase framework (Seed, Build, Launch, Sustain). Waitlist strategy, 8-email launch sequence, paid ads allocation, launch day playbook, and post-launch optimization. |

### Conversion Optimization

| Skill | Description |
|-------|-------------|
| [**ecommerce-pdp**](skills/ecommerce-pdp/) | Product detail page conversion optimization. Analyze and improve product pages element by element — images, copy, social proof, trust signals, cross-sells — to increase add-to-cart rates. |
| [**ecommerce-popup**](skills/ecommerce-popup/) | Popup and modal conversion strategy. Welcome popups, exit-intent offers, promotional popups, announcement bars, cart upsells, copy formulas, and multi-popup coordination. |

### Finance & Analytics

| Skill | Description |
|-------|-------------|
| [**ecommerce-cfo**](skills/ecommerce-cfo/) | Fractional CFO for DTC brands. Analyze P&Ls, optimize unit economics, reduce COGS, improve cash flow, set ROAS targets from real margins, and prepare financials for fundraising. |
| [**ecommerce-vc**](skills/ecommerce-vc/) | Venture capital analyst for DTC brands. Evaluate your brand through an investor lens — fundability assessment, valuation benchmarks, pitch deck guidance, and alternative funding paths. |
| [**ecommerce-analytics**](skills/ecommerce-analytics/) | Marketing analytics for DTC brands. Channel performance analysis, attribution modeling (MER, platform ROAS, UTMs), budget allocation frameworks, and platform-specific report reading for Shopify, GA4, Klaviyo, and Meta Ads. |

## How Skills Work Together

All skills check for your **Brand Guide** (`.claude/brand-guide.md`) before asking questions. If it exists, Claude already knows your brand, customers, products, and voice — so you skip the repetitive setup and go straight to the work.

Example workflow:

1. **Start with the Brand Guide** — Build your brand context once
2. **Use the CFO skill** — Understand your margins and unit economics
3. **Use the Pricing skill** — Set prices based on your cost structure and market position
4. **Use the Launch skill** — Plan your next product launch across all channels
5. **Use the Email skill** — Write the launch email sequence
6. **Use the Paid Ads skill** — Build the ad campaigns to amplify the launch
7. **Use the Analytics skill** — Measure what worked and reallocate budget

Each skill is standalone, but they're designed to compound when used together.

## CLI Tools — Live Data Access

The `tools/clis/` directory contains 7 zero-dependency CLI tools that give Claude direct API access to your marketing stack. No `npm install` required — just Node 18+ and your API keys.

| CLI | Platform | What Claude Can Access |
|-----|----------|----------------------|
| `shopify.js` | Shopify | Orders, products, customers, inventory, store analytics |
| `klaviyo.js` | Klaviyo | Flows, campaigns, segments, profiles, metrics |
| `meta-ads.js` | Meta Ads | Campaigns, ad sets, audiences, ROAS, performance data |
| `google-ads.js` | Google Ads | Search, Shopping, PMax campaigns, keywords, search terms |
| `ga4.js` | Google Analytics 4 | Traffic, pages, ecommerce, acquisition, realtime data |
| `gsc.js` | Google Search Console | Search queries, page rankings, URL inspection |
| `tiktok-ads.js` | TikTok Ads | Campaigns, ad groups, performance reports |

### Quick setup

```bash
# 1. Set API keys in your shell profile (~/.zshrc or ~/.bashrc)
export SHOPIFY_STORE="your-store-name"
export SHOPIFY_ACCESS_TOKEN="shpat_xxxxx"
export KLAVIYO_API_KEY="pk_xxxxx"
# ... add keys for each platform you use

# 2. Reload shell
source ~/.zshrc

# 3. Test
node Claude-Skills-for-eCommerce/tools/clis/shopify.js shop
```

Skills give Claude the **expertise**. CLI tools give Claude the **data**. Together, you get an analyst who knows eCommerce strategy AND has access to your live numbers.

See the full setup guide with step-by-step instructions for getting API keys: **[tools/clis/README.md](tools/clis/README.md)**

## Folder Structure

```
skills/
  ecommerce-analytics/
    SKILL.md          # The skill file (add to ~/.claude/skills/)
    README.md         # Documentation and example prompts
  ecommerce-brand-guide/
    SKILL.md
    README.md
  ...
tools/
  clis/
    README.md         # Full setup guide with API key instructions
    shopify.js        # Shopify Admin API
    klaviyo.js        # Klaviyo API
    meta-ads.js       # Meta (Facebook/Instagram) Ads API
    google-ads.js     # Google Ads API
    ga4.js            # Google Analytics 4 API
    gsc.js            # Google Search Console API
    tiktok-ads.js     # TikTok Ads API
```

## License

MIT

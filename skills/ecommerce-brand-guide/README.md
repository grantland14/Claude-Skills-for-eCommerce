# eCommerce Brand Guide Skill for Claude

The central brand context file that powers every other eCommerce skill. Build your brand guide once and every skill reads it automatically — no re-explaining your brand, customers, or positioning.

## What it does

This skill walks you through building a `.claude/brand-guide.md` file that captures your brand's DNA. Once it exists, every other eCommerce skill checks it before asking questions, so Claude already knows your brand when you start working.

The brand guide covers:

- **The Brand** — Mission, founding story, brand personality, tone of voice
- **Customer Personas** — Who buys from you, their motivations, objections, and language
- **Product Catalog** — Your products, pricing, hero SKUs, margins, and differentiation
- **Brand Voice** — How you speak, words you use, words you avoid
- **Messaging & Positioning** — Key messages, positioning statement, tagline
- **Competitive Landscape** — Who you compete with and how you're different
- **Key Dates & Calendar** — Launch dates, sales events, seasonal moments
- **Proof Points** — Reviews, press, certifications, awards

## Installation

Copy the skill folder into your Claude Code skills directory:

```bash
git clone https://github.com/grantland14/Claude-Skills-for-eCommerce.git
cp -r Claude-Skills-for-eCommerce/skills/ecommerce-brand-guide ~/.claude/skills/
```

Start a new Claude Code conversation — Claude will automatically use this skill when relevant.

## Example prompts

- *"Build a brand guide for my DTC skincare company"*
- *"Create a brand guide from my existing website — here's the URL"*
- *"Update my brand guide with our new product line launching next month"*
- *"Add a new customer persona to my brand guide — we're expanding to men's grooming"*
- *"Review my brand guide and tell me what's missing"*

## Who this is for

DTC founders who use multiple Claude skills and want consistent, brand-aware responses without repeating themselves every session.

---

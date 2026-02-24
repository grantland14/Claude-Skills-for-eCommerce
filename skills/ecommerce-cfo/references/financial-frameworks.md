# Financial Frameworks Reference

Detailed templates, calculation examples, and playbooks for the eCommerce CFO skill. Referenced from the main [SKILL.md](../SKILL.md).

---

## COGS Reduction Playbook

### Systematic COGS Review

**Step 1: Get your full landed cost per SKU.**
Most founders know their product cost from the manufacturer. Few know their fully loaded landed cost. Calculate it:

Landed Cost = Product Cost + Inbound Freight + Duties + Packaging

**Step 2: Rank SKUs by total COGS dollars spent (not per-unit cost).**
Your $12 product that sells 10,000 units = $120,000 in COGS. Your $30 product that sells 500 units = $15,000. Focus on the $120,000 first.

**Step 3: For your top 5 COGS items, get competing quotes.**
Even if you love your manufacturer, having 2-3 alternative quotes gives you leverage and a backup.

**Step 4: Negotiate.**
- Volume commitments for lower per-unit pricing
- Longer payment terms (net 60 vs. net 30) to improve cash flow
- Annual contracts with built-in pricing tiers
- Blanket orders with scheduled releases (you commit to volume, they give better pricing, you take delivery over time)

**Step 5: Review packaging.**
Packaging is often 5-15% of COGS and the easiest to reduce:
- Do you need that custom box, or would a poly mailer work?
- Is your packaging larger than it needs to be? (Dimensional weight kills margins)
- Can you simplify inserts or print fewer colors?
- Get quotes from packaging-specific vendors (not just your manufacturer's packaging)

---

## Duties & Tariff Optimization

If you import products:

- **HTS Classification:** Ensure correct Harmonized Tariff Schedule classification — many brands overpay because of misclassification
- **Foreign Trade Zones (FTZ):** Look into FTZs if you warehouse inventory before selling
- **Bonded Warehousing:** Consider bonded warehousing to defer duty payments until goods enter commerce
- **Section 321 De Minimis:** Evaluate if Section 321 rules apply (shipments under $800 value may avoid duties)
- **Trade Agreements:** Review if agreements reduce your tariff rate (USMCA, etc.)

---

## Pricing Strategy Details

### Discount Math Example

A 20% discount on a product with 60% gross margin doesn't reduce your profit by 20% — it reduces it by 33%:

```
Product price: $50
Gross margin at 60%: $30 profit
After 20% discount ($40 sale price): $20 profit
Profit reduction: 33%, not 20%
```

### Pricing Optimization Actions

**Test price increases on non-hero products first.** Most DTC brands can increase prices 5-10% on slower-moving products with minimal volume impact. Start there, measure for 30 days, then expand.

**Review your discount strategy:**
- What's your average discount rate? (Total discounts / Gross revenue)
- If it's above 15%, you're training customers to wait for sales
- Limit site-wide sales to 2-4x per year (BFCM, anniversary, etc.)
- Use gift-with-purchase instead of percentage discounts (GWP has a fixed COGS cost, not a percentage of revenue)
- Use free shipping thresholds instead of discounts to drive AOV

**Analyze price sensitivity by product:**
- Products with high repurchase rates are less price-sensitive (customers already love them)
- Products with strong reviews/social proof can command higher prices
- Products with many direct competitors are more price-sensitive
- New or unique products have more pricing freedom

### Bundle Pricing Math

Bundles let you increase AOV while giving a perceived discount without hurting margins:

```
Product A: $35 (COGS: $10)
Product B: $35 (COGS: $10)
Individual total: $70 (margin: $50 = 71%)
Bundle at $59 (15% off): margin $39 = 66%
But AOV increases from ~$35 to $59 — CAC per dollar of margin improves
```

---

## Cash Flow Forecasting

### 13-Week Cash Flow Forecast Template

Build and update this weekly:

```
For each week:
  Starting Cash
  + Projected Revenue (based on trailing trend + seasonality)
  - COGS Payments Due (when do supplier invoices come due?)
  - Marketing Spend
  - Payroll
  - Rent & Fixed Costs
  - Inventory Purchases (orders placed for future inventory)
  - Other
  = Ending Cash

Flag any week where ending cash drops below your safety threshold
(typically 4-8 weeks of operating expenses).
```

### Inventory Investment Formulas

**Reorder point formula:**
```
Reorder Point = (Average Daily Sales x Lead Time in Days) + Safety Stock
Safety Stock = Average Daily Sales x Safety Days (typically 14-30 days)
```

**Inventory health metrics:**
- Inventory turnover: Net Revenue / Average Inventory Value (healthy: 4-8x per year)
- Weeks of supply: Current Inventory Value / Weekly COGS (healthy: 6-12 weeks)
- Sell-through rate: Units Sold / Units Available (healthy: 60-80% in a season)

**Dead stock rule:** Any SKU that hasn't sold in 90+ days is dead stock. Liquidate it — run a flash sale, bundle it, donate it for a tax write-off. The cash locked in dead stock is more valuable deployed elsewhere.

---

## Marketing Budget Allocation

### Revenue-Based Approach

| Stage | Revenue | Marketing as % of Revenue |
|-------|---------|--------------------------|
| Early stage | Under $1M | 25-35% |
| Growth stage | $1-5M | 20-30% |
| Scaling | $5-20M | 15-25% |
| Mature | $20M+ | 10-20% |

### Payback Period Approach

How many months until a new customer's cumulative margin pays back their CAC? For most DTC brands:

- **Under 3 months:** Aggressive growth mode — spend more
- **3-6 months:** Healthy — maintain and optimize
- **6-12 months:** Cautious — improve retention before scaling acquisition
- **Over 12 months:** Danger — fix margins or retention before spending more on acquisition

---

## Scenario Planning Template

When founders face a big decision ("Should we launch in the UK?" / "Should we switch to a subscription model?" / "What if we raise prices 10%?"), run a scenario analysis:

```
Scenario: [Description of the change]

Assumptions:
- Revenue impact: [+/- X%]
- COGS impact: [+/- X%]
- Additional costs: [$X/month]
- Timeline to impact: [X months]

Base Case (do nothing):
  Revenue: $X -> Gross Profit: $X -> Operating Profit: $X

Scenario Case (make the change):
  Revenue: $X -> Gross Profit: $X -> Operating Profit: $X

Incremental Impact:
  Additional revenue: $X
  Additional costs: $X
  Net impact: $X/month
  Payback period: X months

Risks:
- [Risk 1 and mitigation]
- [Risk 2 and mitigation]

Recommendation: [Go / Don't go / Test first with $X investment]
```

---

## Preparing for Fundraising or Sale

### Clean Up the Books

If the founder is preparing financials for investors or an acquirer:

- Separate personal and business expenses (this is the #1 issue)
- Ensure COGS is properly allocated (not lumped into "other expenses")
- Reconcile inventory counts with financial records
- Document any one-time or non-recurring expenses
- Ensure revenue recognition is consistent

### Key Metrics Investors Want

- Revenue growth rate (YoY and MoM)
- Gross margin and gross margin trend
- Contribution margin per unit
- CAC, LTV, and LTV:CAC ratio
- Repeat purchase rate and cohort retention curves
- Cash flow breakeven timeline
- Inventory turnover
- Channel mix and concentration risk

### Revenue Quality Assessment

Not all revenue is valued equally:

- DTC revenue > wholesale revenue (higher margins, owns the customer)
- Subscription/recurring revenue > one-time (predictable, higher LTV)
- Organic revenue > paid acquisition revenue (less dependent on ad spend)
- Diverse SKU revenue > hero product dependent (less risk)
- Growing customer base > revenue growth from price increases alone

---

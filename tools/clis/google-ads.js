#!/usr/bin/env node

const TOKEN = process.env.GOOGLE_ADS_TOKEN
const DEV_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN
const CUSTOMER_ID = process.env.GOOGLE_ADS_CUSTOMER_ID
const BASE_URL = 'https://googleads.googleapis.com/v17'

if (!TOKEN || !DEV_TOKEN || !CUSTOMER_ID) {
  console.error(JSON.stringify({ error: 'GOOGLE_ADS_TOKEN, GOOGLE_ADS_DEVELOPER_TOKEN, and GOOGLE_ADS_CUSTOMER_ID environment variables required' }))
  process.exit(1)
}

const cid = CUSTOMER_ID.replace(/-/g, '')

async function api(method, path, body) {
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { Authorization: '***', 'developer-token': '***' }, body: body || undefined }
  }
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'developer-token': DEV_TOKEN,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch {
    return { status: res.status, body: text }
  }
}

async function gaql(query) {
  return api('POST', `/customers/${cid}/googleAds:searchStream`, { query })
}

function parseArgs(argv) {
  const result = { _: [] }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg.startsWith('--')) {
      const key = arg.slice(2)
      const next = argv[i + 1]
      if (next && !next.startsWith('--')) {
        result[key] = next
        i++
      } else {
        result[key] = true
      }
    } else {
      result._.push(arg)
    }
  }
  return result
}

const args = parseArgs(process.argv.slice(2))
const [cmd, sub] = args._

function dateRange(days) {
  const d = parseInt(days) || 30
  if (d === 7) return 'LAST_7_DAYS'
  if (d === 14) return 'LAST_14_DAYS'
  if (d === 30) return 'LAST_30_DAYS'
  return `LAST_${d}_DAYS`
}

async function main() {
  let result

  switch (cmd) {
    case 'account':
      switch (sub) {
        case 'info':
        default:
          result = await gaql('SELECT customer.id, customer.descriptive_name, customer.currency_code, customer.time_zone FROM customer')
      }
      break

    case 'campaigns':
      switch (sub) {
        case 'list':
          result = await gaql('SELECT campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type, campaign_budget.amount_micros FROM campaign ORDER BY campaign.id')
          break
        case 'performance': {
          const range = dateRange(args.days)
          const limit = args.limit ? ` LIMIT ${args.limit}` : ''
          result = await gaql(`SELECT campaign.name, campaign.status, campaign.advertising_channel_type, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.conversions_value, metrics.cost_per_conversion FROM campaign WHERE segments.date DURING ${range} AND metrics.impressions > 0 ORDER BY metrics.cost_micros DESC${limit}`)
          break
        }
        case 'shopping': {
          const range = dateRange(args.days)
          result = await gaql(`SELECT campaign.name, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.conversions_value FROM campaign WHERE campaign.advertising_channel_type = 'SHOPPING' AND segments.date DURING ${range}`)
          break
        }
        case 'pmax': {
          const range = dateRange(args.days)
          result = await gaql(`SELECT campaign.name, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.conversions_value FROM campaign WHERE campaign.advertising_channel_type = 'PERFORMANCE_MAX' AND segments.date DURING ${range}`)
          break
        }
        case 'pause': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('POST', `/customers/${cid}/campaigns:mutate`, {
            operations: [{
              update: { resourceName: `customers/${cid}/campaigns/${args.id}`, status: 'PAUSED' },
              updateMask: 'status',
            }],
          })
          break
        }
        case 'enable': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('POST', `/customers/${cid}/campaigns:mutate`, {
            operations: [{
              update: { resourceName: `customers/${cid}/campaigns/${args.id}`, status: 'ENABLED' },
              updateMask: 'status',
            }],
          })
          break
        }
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, performance, shopping, pmax, pause, enable' }
      }
      break

    case 'adgroups':
      switch (sub) {
        case 'performance': {
          const range = dateRange(args.days)
          const limit = args.limit ? ` LIMIT ${args.limit}` : ' LIMIT 50'
          result = await gaql(`SELECT ad_group.name, ad_group.status, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.conversions_value FROM ad_group WHERE segments.date DURING ${range} AND metrics.impressions > 0 ORDER BY metrics.cost_micros DESC${limit}`)
          break
        }
        default:
          result = { error: 'Unknown adgroups subcommand. Use: performance' }
      }
      break

    case 'keywords':
      switch (sub) {
        case 'performance': {
          const range = dateRange(args.days)
          const limit = args.limit || '50'
          result = await gaql(`SELECT ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, metrics.impressions, metrics.clicks, metrics.average_cpc, metrics.conversions, metrics.cost_micros FROM keyword_view WHERE segments.date DURING ${range} ORDER BY metrics.clicks DESC LIMIT ${limit}`)
          break
        }
        case 'search-terms': {
          const range = dateRange(args.days)
          const limit = args.limit || '50'
          result = await gaql(`SELECT search_term_view.search_term, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions FROM search_term_view WHERE segments.date DURING ${range} ORDER BY metrics.impressions DESC LIMIT ${limit}`)
          break
        }
        default:
          result = { error: 'Unknown keywords subcommand. Use: performance, search-terms' }
      }
      break

    case 'products': {
      switch (sub) {
        case 'performance': {
          const range = dateRange(args.days)
          const limit = args.limit || '50'
          result = await gaql(`SELECT segments.product_title, segments.product_item_id, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.conversions_value FROM shopping_performance_view WHERE segments.date DURING ${range} ORDER BY metrics.conversions_value DESC LIMIT ${limit}`)
          break
        }
        default:
          result = { error: 'Unknown products subcommand. Use: performance' }
      }
      break
    }

    case 'budgets':
      switch (sub) {
        case 'list':
          result = await gaql('SELECT campaign_budget.id, campaign_budget.name, campaign_budget.amount_micros, campaign_budget.status, campaign_budget.delivery_method FROM campaign_budget')
          break
        case 'update': {
          if (!args.id || !args.amount) { result = { error: '--id and --amount required (amount in dollars)' }; break }
          const micros = String(Math.round(parseFloat(args.amount) * 1000000))
          result = await api('POST', `/customers/${cid}/campaignBudgets:mutate`, {
            operations: [{
              update: { resourceName: `customers/${cid}/campaignBudgets/${args.id}`, amount_micros: micros },
              updateMask: 'amount_micros',
            }],
          })
          break
        }
        default:
          result = { error: 'Unknown budgets subcommand. Use: list, update' }
      }
      break

    case 'query': {
      const q = args.q || args.query
      if (!q) { result = { error: '--q required (GAQL query)' }; break }
      result = await gaql(q)
      break
    }

    default:
      result = {
        error: 'Unknown command',
        usage: {
          account: 'account info',
          campaigns: 'campaigns [list|performance|shopping|pmax|pause|enable] [--days 30] [--id <id>] [--limit <n>]',
          adgroups: 'adgroups performance [--days 30] [--limit <n>]',
          keywords: 'keywords [performance|search-terms] [--days 30] [--limit 50]',
          products: 'products performance [--days 30] [--limit 50] (Shopping/PMax product data)',
          budgets: 'budgets [list|update] [--id <budget-id>] [--amount <dollars>]',
          query: 'query --q "<GAQL query>" (run any GAQL query)',
        },
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})

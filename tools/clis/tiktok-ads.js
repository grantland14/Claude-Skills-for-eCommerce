#!/usr/bin/env node

const TOKEN = process.env.TIKTOK_ACCESS_TOKEN
const ADVERTISER_ID = process.env.TIKTOK_ADVERTISER_ID
const BASE_URL = 'https://business-api.tiktok.com/open_api/v1.3'

if (!TOKEN) {
  console.error(JSON.stringify({ error: 'TIKTOK_ACCESS_TOKEN environment variable required' }))
  process.exit(1)
}

async function api(method, path, body) {
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { 'Access-Token': '***' }, body: body || undefined }
  }
  const opts = {
    method,
    headers: {
      'Access-Token': TOKEN,
      'Content-Type': 'application/json',
    },
  }
  if (body && method === 'POST') {
    opts.body = JSON.stringify(body)
  }
  const res = await fetch(`${BASE_URL}${path}`, opts)
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch {
    return { status: res.status, body: text }
  }
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

function advId() {
  return args['advertiser-id'] || ADVERTISER_ID
}

function dateRangeParams() {
  const days = parseInt(args.days || '30')
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - days)
  return {
    start_date: args['start-date'] || start.toISOString().split('T')[0],
    end_date: args['end-date'] || end.toISOString().split('T')[0],
  }
}

async function main() {
  let result
  const advertiserId = advId()

  switch (cmd) {
    case 'advertisers':
      switch (sub) {
        case 'info': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const params = new URLSearchParams({ advertiser_ids: JSON.stringify([advertiserId]) })
          result = await api('GET', `/advertiser/info/?${params}`)
          break
        }
        default:
          result = { error: 'Unknown advertisers subcommand. Use: info' }
      }
      break

    case 'campaigns':
      switch (sub) {
        case 'list': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const params = new URLSearchParams({ advertiser_id: advertiserId })
          if (args.status) params.set('filtering', JSON.stringify({ status: args.status }))
          if (args['page-size']) params.set('page_size', args['page-size'])
          result = await api('GET', `/campaign/get/?${params}`)
          break
        }
        case 'create': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          if (!args.name || !args.objective) { result = { error: '--name and --objective required' }; break }
          result = await api('POST', '/campaign/create/', {
            advertiser_id: advertiserId,
            campaign_name: args.name,
            objective_type: args.objective,
            budget_mode: args['budget-mode'] || 'BUDGET_MODE_INFINITE',
            budget: args.budget ? parseFloat(args.budget) : undefined,
            operation_status: args.status || 'DISABLE',
          })
          break
        }
        case 'update': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          if (!args.id) { result = { error: '--id required (campaign ID)' }; break }
          const body = { advertiser_id: advertiserId, campaign_id: args.id }
          if (args.name) body.campaign_name = args.name
          if (args.budget) body.budget = parseFloat(args.budget)
          if (args.status) body.operation_status = args.status
          result = await api('POST', '/campaign/update/', body)
          break
        }
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, create, update' }
      }
      break

    case 'adgroups':
      switch (sub) {
        case 'list': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const params = new URLSearchParams({ advertiser_id: advertiserId })
          if (args['campaign-id']) {
            params.set('filtering', JSON.stringify({ campaign_ids: [args['campaign-id']] }))
          }
          if (args['page-size']) params.set('page_size', args['page-size'])
          result = await api('GET', `/adgroup/get/?${params}`)
          break
        }
        default:
          result = { error: 'Unknown adgroups subcommand. Use: list' }
      }
      break

    case 'ads':
      switch (sub) {
        case 'list': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const params = new URLSearchParams({ advertiser_id: advertiserId })
          if (args['campaign-id']) {
            params.set('filtering', JSON.stringify({ campaign_ids: [args['campaign-id']] }))
          }
          if (args['adgroup-id']) {
            params.set('filtering', JSON.stringify({ adgroup_ids: [args['adgroup-id']] }))
          }
          if (args['page-size']) params.set('page_size', args['page-size'])
          result = await api('GET', `/ad/get/?${params}`)
          break
        }
        default:
          result = { error: 'Unknown ads subcommand. Use: list' }
      }
      break

    case 'reports':
      switch (sub) {
        case 'campaign': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const dates = dateRangeParams()
          const metrics = args.metrics || 'spend,impressions,clicks,cpc,cpm,ctr,conversion,cost_per_conversion,total_complete_payment_rate'
          result = await api('POST', '/report/integrated/get/', {
            advertiser_id: advertiserId,
            report_type: 'BASIC',
            data_level: 'AUCTION_CAMPAIGN',
            dimensions: ['campaign_id'],
            metrics: metrics.split(','),
            start_date: dates.start_date,
            end_date: dates.end_date,
            page_size: parseInt(args['page-size'] || '100'),
          })
          break
        }
        case 'adgroup': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const dates = dateRangeParams()
          const metrics = args.metrics || 'spend,impressions,clicks,cpc,cpm,ctr,conversion,cost_per_conversion'
          result = await api('POST', '/report/integrated/get/', {
            advertiser_id: advertiserId,
            report_type: 'BASIC',
            data_level: 'AUCTION_ADGROUP',
            dimensions: ['adgroup_id'],
            metrics: metrics.split(','),
            start_date: dates.start_date,
            end_date: dates.end_date,
            page_size: parseInt(args['page-size'] || '100'),
          })
          break
        }
        case 'daily': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const dates = dateRangeParams()
          const metrics = args.metrics || 'spend,impressions,clicks,conversion,cost_per_conversion'
          result = await api('POST', '/report/integrated/get/', {
            advertiser_id: advertiserId,
            report_type: 'BASIC',
            data_level: 'AUCTION_ADVERTISER',
            dimensions: ['stat_time_day'],
            metrics: metrics.split(','),
            start_date: dates.start_date,
            end_date: dates.end_date,
            page_size: parseInt(args['page-size'] || '100'),
          })
          break
        }
        default:
          result = { error: 'Unknown reports subcommand. Use: campaign, adgroup, daily' }
      }
      break

    case 'audiences':
      switch (sub) {
        case 'list': {
          if (!advertiserId) { result = { error: '--advertiser-id required (or set TIKTOK_ADVERTISER_ID)' }; break }
          const params = new URLSearchParams({ advertiser_id: advertiserId })
          if (args['page-size']) params.set('page_size', args['page-size'])
          result = await api('GET', `/dmp/custom_audience/list/?${params}`)
          break
        }
        default:
          result = { error: 'Unknown audiences subcommand. Use: list' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          advertisers: 'advertisers info [--advertiser-id <id>]',
          campaigns: 'campaigns [list|create|update] [--advertiser-id <id>] [--id <id>] [--name <name>] [--objective <obj>] [--status ENABLE|DISABLE] [--budget <amount>]',
          adgroups: 'adgroups list [--advertiser-id <id>] [--campaign-id <id>]',
          ads: 'ads list [--advertiser-id <id>] [--campaign-id <id>] [--adgroup-id <id>]',
          reports: 'reports [campaign|adgroup|daily] [--advertiser-id <id>] [--days 30] [--start-date <date>] [--end-date <date>] [--metrics <metrics>]',
          audiences: 'audiences list [--advertiser-id <id>]',
        },
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})

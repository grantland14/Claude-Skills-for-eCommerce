#!/usr/bin/env node

const ACCESS_TOKEN = process.env.GA4_ACCESS_TOKEN
const DEFAULT_PROPERTY = process.env.GA4_PROPERTY_ID
const DATA_API = 'https://analyticsdata.googleapis.com/v1beta'
const ADMIN_API = 'https://analyticsadmin.googleapis.com/v1beta'

if (!ACCESS_TOKEN) {
  console.error(JSON.stringify({ error: 'GA4_ACCESS_TOKEN environment variable required' }))
  process.exit(1)
}

async function api(method, baseUrl, path, body) {
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${baseUrl}${path}`, headers: { Authorization: '***' }, body: body || undefined }
  }
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
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

function prop() {
  return args.property || DEFAULT_PROPERTY
}

async function main() {
  let result
  const property = prop()

  switch (cmd) {
    case 'report': {
      if (!property) { result = { error: '--property required (or set GA4_PROPERTY_ID)' }; break }
      const body = {
        dateRanges: [{
          startDate: args['start-date'] || '30daysAgo',
          endDate: args['end-date'] || 'today',
        }],
      }
      if (args.dimensions) {
        body.dimensions = args.dimensions.split(',').map(d => ({ name: d.trim() }))
      }
      if (args.metrics) {
        body.metrics = args.metrics.split(',').map(m => ({ name: m.trim() }))
      } else {
        body.metrics = [{ name: 'sessions' }, { name: 'totalUsers' }, { name: 'newUsers' }]
      }
      if (args.limit) {
        body.limit = parseInt(args.limit)
      }
      if (args['order-by']) {
        body.orderBys = [{ metric: { metricName: args['order-by'] }, desc: args.desc !== 'false' }]
      }
      if (args.filter) {
        body.dimensionFilter = { filter: { fieldName: args['filter-dim'], stringFilter: { matchType: 'CONTAINS', value: args.filter } } }
      }
      result = await api('POST', DATA_API, `/properties/${property}:runReport`, body)
      break
    }

    case 'realtime': {
      if (!property) { result = { error: '--property required (or set GA4_PROPERTY_ID)' }; break }
      const body = {}
      if (args.dimensions) {
        body.dimensions = args.dimensions.split(',').map(d => ({ name: d.trim() }))
      }
      if (args.metrics) {
        body.metrics = args.metrics.split(',').map(m => ({ name: m.trim() }))
      } else {
        body.metrics = [{ name: 'activeUsers' }]
      }
      result = await api('POST', DATA_API, `/properties/${property}:runRealtimeReport`, body)
      break
    }

    case 'traffic': {
      if (!property) { result = { error: '--property required (or set GA4_PROPERTY_ID)' }; break }
      const body = {
        dateRanges: [{
          startDate: args['start-date'] || '30daysAgo',
          endDate: args['end-date'] || 'today',
        }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'newUsers' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
          { name: 'conversions' },
        ],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      }
      result = await api('POST', DATA_API, `/properties/${property}:runReport`, body)
      break
    }

    case 'pages': {
      if (!property) { result = { error: '--property required (or set GA4_PROPERTY_ID)' }; break }
      const body = {
        dateRanges: [{
          startDate: args['start-date'] || '30daysAgo',
          endDate: args['end-date'] || 'today',
        }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'totalUsers' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
          { name: 'conversions' },
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: parseInt(args.limit || '25'),
      }
      result = await api('POST', DATA_API, `/properties/${property}:runReport`, body)
      break
    }

    case 'ecommerce': {
      if (!property) { result = { error: '--property required (or set GA4_PROPERTY_ID)' }; break }
      const body = {
        dateRanges: [{
          startDate: args['start-date'] || '30daysAgo',
          endDate: args['end-date'] || 'today',
        }],
        metrics: [
          { name: 'ecommercePurchases' },
          { name: 'totalRevenue' },
          { name: 'purchaseRevenue' },
          { name: 'averagePurchaseRevenue' },
          { name: 'totalUsers' },
          { name: 'conversions' },
        ],
      }
      if (args['by-source']) {
        body.dimensions = [{ name: 'sessionDefaultChannelGroup' }]
        body.orderBys = [{ metric: { metricName: 'totalRevenue' }, desc: true }]
      }
      if (args['by-product']) {
        body.dimensions = [{ name: 'itemName' }]
        body.orderBys = [{ metric: { metricName: 'totalRevenue' }, desc: true }]
        body.limit = parseInt(args.limit || '25')
      }
      result = await api('POST', DATA_API, `/properties/${property}:runReport`, body)
      break
    }

    case 'acquisition': {
      if (!property) { result = { error: '--property required (or set GA4_PROPERTY_ID)' }; break }
      const dimension = args['by-campaign'] ? 'sessionCampaignName' : args['by-medium'] ? 'sessionMedium' : 'sessionSource'
      const body = {
        dateRanges: [{
          startDate: args['start-date'] || '30daysAgo',
          endDate: args['end-date'] || 'today',
        }],
        dimensions: [{ name: dimension }],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'newUsers' },
          { name: 'conversions' },
          { name: 'totalRevenue' },
        ],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: parseInt(args.limit || '25'),
      }
      result = await api('POST', DATA_API, `/properties/${property}:runReport`, body)
      break
    }

    case 'conversions': {
      switch (sub) {
        case 'list': {
          if (!property) { result = { error: '--property required (or set GA4_PROPERTY_ID)' }; break }
          result = await api('GET', ADMIN_API, `/properties/${property}/conversionEvents`)
          break
        }
        default:
          result = { error: 'Unknown conversions subcommand. Use: list' }
      }
      break
    }

    case 'properties':
      switch (sub) {
        case 'list':
          result = await api('GET', ADMIN_API, '/accountSummaries')
          break
        default:
          result = { error: 'Unknown properties subcommand. Use: list' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          report: 'report [--property <id>] [--dimensions <dims>] [--metrics <metrics>] [--start-date 30daysAgo] [--end-date today] [--limit <n>] [--order-by <metric>]',
          realtime: 'realtime [--property <id>] [--dimensions <dims>] [--metrics <metrics>]',
          traffic: 'traffic [--property <id>] [--start-date <date>] [--end-date <date>] (channel breakdown)',
          pages: 'pages [--property <id>] [--start-date <date>] [--end-date <date>] [--limit 25] (top pages)',
          ecommerce: 'ecommerce [--property <id>] [--by-source] [--by-product] [--start-date <date>] [--end-date <date>] [--limit <n>]',
          acquisition: 'acquisition [--property <id>] [--by-campaign] [--by-medium] [--start-date <date>] [--end-date <date>] [--limit <n>]',
          conversions: 'conversions list [--property <id>]',
          properties: 'properties list (list all GA4 properties)',
        },
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})

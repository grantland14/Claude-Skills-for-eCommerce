#!/usr/bin/env node

const ACCESS_TOKEN = process.env.GSC_ACCESS_TOKEN
const DEFAULT_SITE = process.env.GSC_SITE_URL
const BASE_URL = 'https://searchconsole.googleapis.com'

if (!ACCESS_TOKEN) {
  console.error(JSON.stringify({ error: 'GSC_ACCESS_TOKEN environment variable required' }))
  process.exit(1)
}

async function api(method, path, body) {
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { Authorization: '***' }, body: body || undefined }
  }
  const res = await fetch(`${BASE_URL}${path}`, {
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

function site() {
  return args['site-url'] || DEFAULT_SITE
}

function defaultDates() {
  const end = new Date()
  end.setDate(end.getDate() - 3)
  const start = new Date(end)
  start.setDate(start.getDate() - 28)
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  }
}

async function main() {
  let result
  const siteUrl = site()

  switch (cmd) {
    case 'queries': {
      if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
      const dates = defaultDates()
      const body = {
        startDate: args['start-date'] || dates.startDate,
        endDate: args['end-date'] || dates.endDate,
        dimensions: ['query'],
        rowLimit: parseInt(args.limit || '100'),
      }
      if (args.page) {
        body.dimensionFilterGroups = [{
          filters: [{ dimension: 'page', operator: 'contains', expression: args.page }]
        }]
      }
      result = await api('POST', `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, body)
      break
    }

    case 'pages': {
      if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
      const dates = defaultDates()
      const body = {
        startDate: args['start-date'] || dates.startDate,
        endDate: args['end-date'] || dates.endDate,
        dimensions: ['page'],
        rowLimit: parseInt(args.limit || '100'),
      }
      if (args.query) {
        body.dimensionFilterGroups = [{
          filters: [{ dimension: 'query', operator: 'contains', expression: args.query }]
        }]
      }
      result = await api('POST', `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, body)
      break
    }

    case 'countries': {
      if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
      const dates = defaultDates()
      const body = {
        startDate: args['start-date'] || dates.startDate,
        endDate: args['end-date'] || dates.endDate,
        dimensions: ['country'],
        rowLimit: parseInt(args.limit || '50'),
      }
      result = await api('POST', `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, body)
      break
    }

    case 'devices': {
      if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
      const dates = defaultDates()
      const body = {
        startDate: args['start-date'] || dates.startDate,
        endDate: args['end-date'] || dates.endDate,
        dimensions: ['device'],
        rowLimit: 10,
      }
      result = await api('POST', `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, body)
      break
    }

    case 'dates': {
      if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
      const dates = defaultDates()
      const body = {
        startDate: args['start-date'] || dates.startDate,
        endDate: args['end-date'] || dates.endDate,
        dimensions: ['date'],
        rowLimit: parseInt(args.limit || '90'),
      }
      if (args.query) {
        body.dimensionFilterGroups = [{
          filters: [{ dimension: 'query', operator: 'contains', expression: args.query }]
        }]
      }
      result = await api('POST', `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, body)
      break
    }

    case 'inspect': {
      if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
      if (!args.url) { result = { error: '--url required (page URL to inspect)' }; break }
      result = await api('POST', '/v1/urlInspection/index:inspect', {
        inspectionUrl: args.url,
        siteUrl: siteUrl,
      })
      break
    }

    case 'sitemaps':
      switch (sub) {
        case 'list': {
          if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
          result = await api('GET', `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`)
          break
        }
        case 'submit': {
          if (!siteUrl) { result = { error: '--site-url required (or set GSC_SITE_URL)' }; break }
          if (!args['sitemap-url']) { result = { error: '--sitemap-url required' }; break }
          result = await api('PUT', `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(args['sitemap-url'])}`)
          if (!result.body && !result.error) {
            result = { success: true, message: 'Sitemap submitted' }
          }
          break
        }
        default:
          result = { error: 'Unknown sitemaps subcommand. Use: list, submit' }
      }
      break

    case 'sites':
      switch (sub) {
        case 'list':
          result = await api('GET', '/webmasters/v3/sites')
          break
        default:
          result = { error: 'Unknown sites subcommand. Use: list' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          queries: 'queries [--site-url <url>] [--start-date <date>] [--end-date <date>] [--limit 100] [--page <filter>] (top search queries)',
          pages: 'pages [--site-url <url>] [--start-date <date>] [--end-date <date>] [--limit 100] [--query <filter>] (top pages)',
          countries: 'countries [--site-url <url>] [--start-date <date>] [--end-date <date>] (traffic by country)',
          devices: 'devices [--site-url <url>] [--start-date <date>] [--end-date <date>] (traffic by device)',
          dates: 'dates [--site-url <url>] [--start-date <date>] [--end-date <date>] [--query <filter>] (daily trend)',
          inspect: 'inspect [--site-url <url>] --url <page-url> (URL inspection)',
          sitemaps: 'sitemaps [list|submit] [--site-url <url>] [--sitemap-url <url>]',
          sites: 'sites list (list verified sites)',
        },
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})

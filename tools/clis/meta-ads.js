#!/usr/bin/env node

const TOKEN = process.env.META_ACCESS_TOKEN
const DEFAULT_ACCOUNT = process.env.META_AD_ACCOUNT_ID
const BASE_URL = 'https://graph.facebook.com/v21.0'

if (!TOKEN) {
  console.error(JSON.stringify({ error: 'META_ACCESS_TOKEN environment variable required' }))
  process.exit(1)
}

async function api(method, path, body) {
  const opts = {
    method,
    headers: { 'Authorization': `Bearer ${TOKEN}` },
  }
  if (body) {
    opts.headers['Content-Type'] = 'application/json'
    opts.body = JSON.stringify(body)
  }
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { ...opts.headers, Authorization: '***' }, body: body || undefined }
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

function acct() {
  const id = args['account-id'] || DEFAULT_ACCOUNT
  if (!id) return null
  return id.startsWith('act_') ? id : `act_${id}`
}

async function main() {
  let result

  switch (cmd) {
    case 'accounts':
      switch (sub) {
        case 'list':
          result = await api('GET', '/me/adaccounts?fields=id,name,account_status,currency,timezone_name,amount_spent')
          break
        default:
          result = { error: 'Unknown accounts subcommand. Use: list' }
      }
      break

    case 'campaigns':
      switch (sub) {
        case 'list': {
          const a = acct()
          if (!a) { result = { error: '--account-id required (or set META_AD_ACCOUNT_ID)' }; break }
          const fields = args.fields || 'id,name,status,objective,daily_budget,lifetime_budget,buying_type'
          const params = new URLSearchParams({ fields })
          if (args.status) params.set('effective_status', JSON.stringify([args.status]))
          if (args.limit) params.set('limit', args.limit)
          result = await api('GET', `/${a}/campaigns?${params}`)
          break
        }
        case 'insights': {
          if (!args.id) { result = { error: '--id required (campaign ID)' }; break }
          const datePreset = args['date-preset'] || 'last_30d'
          const fields = args.fields || 'impressions,reach,clicks,cpc,cpm,ctr,spend,actions,cost_per_action_type,purchase_roas'
          const params = new URLSearchParams({ fields, date_preset: datePreset })
          if (args.breakdowns) params.set('breakdowns', args.breakdowns)
          if (args['time-increment']) params.set('time_increment', args['time-increment'])
          result = await api('GET', `/${args.id}/insights?${params}`)
          break
        }
        case 'create': {
          const a = acct()
          if (!a) { result = { error: '--account-id required (or set META_AD_ACCOUNT_ID)' }; break }
          if (!args.name || !args.objective) { result = { error: '--name and --objective required' }; break }
          result = await api('POST', `/${a}/campaigns`, {
            name: args.name,
            objective: args.objective,
            status: args.status || 'PAUSED',
            special_ad_categories: [],
          })
          break
        }
        case 'update': {
          if (!args.id) { result = { error: '--id required' }; break }
          const body = {}
          if (args.status) body.status = args.status
          if (args.name) body.name = args.name
          if (args['daily-budget']) body.daily_budget = args['daily-budget']
          result = await api('POST', `/${args.id}`, body)
          break
        }
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, insights, create, update' }
      }
      break

    case 'adsets':
      switch (sub) {
        case 'list': {
          const a = acct()
          if (!a) { result = { error: '--account-id required (or set META_AD_ACCOUNT_ID)' }; break }
          const fields = args.fields || 'id,name,status,targeting,daily_budget,bid_amount,optimization_goal'
          const params = new URLSearchParams({ fields })
          if (args.limit) params.set('limit', args.limit)
          result = await api('GET', `/${a}/adsets?${params}`)
          break
        }
        case 'insights': {
          if (!args.id) { result = { error: '--id required (adset ID)' }; break }
          const datePreset = args['date-preset'] || 'last_30d'
          const fields = args.fields || 'impressions,reach,clicks,spend,actions,cost_per_action_type,purchase_roas'
          result = await api('GET', `/${args.id}/insights?fields=${fields}&date_preset=${datePreset}`)
          break
        }
        default:
          result = { error: 'Unknown adsets subcommand. Use: list, insights' }
      }
      break

    case 'ads':
      switch (sub) {
        case 'list': {
          const a = acct()
          if (!a) { result = { error: '--account-id required (or set META_AD_ACCOUNT_ID)' }; break }
          const fields = args.fields || 'id,name,status,creative,adset_id'
          const params = new URLSearchParams({ fields })
          if (args.limit) params.set('limit', args.limit)
          result = await api('GET', `/${a}/ads?${params}`)
          break
        }
        case 'insights': {
          if (!args.id) { result = { error: '--id required (ad ID)' }; break }
          const datePreset = args['date-preset'] || 'last_30d'
          const fields = args.fields || 'impressions,reach,clicks,spend,actions,cost_per_action_type,purchase_roas'
          result = await api('GET', `/${args.id}/insights?fields=${fields}&date_preset=${datePreset}`)
          break
        }
        default:
          result = { error: 'Unknown ads subcommand. Use: list, insights' }
      }
      break

    case 'audiences':
      switch (sub) {
        case 'list': {
          const a = acct()
          if (!a) { result = { error: '--account-id required (or set META_AD_ACCOUNT_ID)' }; break }
          const fields = args.fields || 'id,name,approximate_count,subtype,time_created'
          result = await api('GET', `/${a}/customaudiences?fields=${fields}`)
          break
        }
        case 'create-lookalike': {
          const a = acct()
          if (!a) { result = { error: '--account-id required (or set META_AD_ACCOUNT_ID)' }; break }
          if (!args['source-id'] || !args.country) { result = { error: '--source-id and --country required' }; break }
          const ratio = args.ratio || '0.01'
          result = await api('POST', `/${a}/customaudiences`, {
            name: args.name || 'Lookalike Audience',
            subtype: 'LOOKALIKE',
            origin_audience_id: args['source-id'],
            lookalike_spec: JSON.stringify({
              type: 'similarity',
              country: args.country,
              ratio: parseFloat(ratio),
            }),
          })
          break
        }
        default:
          result = { error: 'Unknown audiences subcommand. Use: list, create-lookalike' }
      }
      break

    case 'account-insights': {
      const a = acct()
      if (!a) { result = { error: '--account-id required (or set META_AD_ACCOUNT_ID)' }; break }
      const datePreset = args['date-preset'] || 'last_30d'
      const fields = args.fields || 'impressions,reach,clicks,cpc,cpm,ctr,spend,actions,cost_per_action_type,purchase_roas'
      const params = new URLSearchParams({ fields, date_preset: datePreset })
      if (args['time-increment']) params.set('time_increment', args['time-increment'])
      if (args.breakdowns) params.set('breakdowns', args.breakdowns)
      result = await api('GET', `/${a}/insights?${params}`)
      break
    }

    default:
      result = {
        error: 'Unknown command',
        usage: {
          accounts: 'accounts list',
          campaigns: 'campaigns [list|insights|create|update] [--account-id <id>] [--id <id>] [--date-preset last_7d|last_30d|last_90d] [--objective <obj>] [--status ACTIVE|PAUSED]',
          adsets: 'adsets [list|insights] [--account-id <id>] [--id <id>] [--date-preset <preset>]',
          ads: 'ads [list|insights] [--account-id <id>] [--id <id>] [--date-preset <preset>]',
          audiences: 'audiences [list|create-lookalike] [--account-id <id>] [--source-id <id>] [--country US] [--ratio 0.01]',
          'account-insights': 'account-insights [--account-id <id>] [--date-preset <preset>] [--time-increment 1|7|monthly] [--breakdowns age|gender|country]',
        },
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})

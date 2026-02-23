#!/usr/bin/env node

const API_KEY = process.env.KLAVIYO_API_KEY
const BASE_URL = 'https://a.klaviyo.com/api'
const REVISION = '2024-10-15'

if (!API_KEY) {
  console.error(JSON.stringify({ error: 'KLAVIYO_API_KEY environment variable required' }))
  process.exit(1)
}

async function api(method, path, body) {
  const headers = {
    'Authorization': `Klaviyo-API-Key ${API_KEY}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'revision': REVISION,
  }
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { ...headers, Authorization: '***' }, body: body || undefined }
  }
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
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

async function main() {
  let result

  switch (cmd) {
    case 'flows':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          if (args.sort) params.set('sort', args.sort)
          const qs = params.toString()
          result = await api('GET', `/flows/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          const params = new URLSearchParams()
          if (args.include) params.set('include', args.include)
          const qs = params.toString()
          result = await api('GET', `/flows/${args.id}/${qs ? '?' + qs : ''}`)
          break
        }
        case 'update': {
          if (!args.id) { result = { error: '--id required' }; break }
          const attributes = {}
          if (args.status) attributes.status = args.status
          result = await api('PATCH', `/flows/${args.id}/`, {
            data: { type: 'flow', id: args.id, attributes }
          })
          break
        }
        case 'messages': {
          if (!args.id) { result = { error: '--id required (flow ID)' }; break }
          result = await api('GET', `/flows/${args.id}/flow-messages/`)
          break
        }
        default:
          result = { error: 'Unknown flows subcommand. Use: list, get, update, messages' }
      }
      break

    case 'campaigns':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          if (args.sort) params.set('sort', args.sort)
          const qs = params.toString()
          result = await api('GET', `/campaigns/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/campaigns/${args.id}/`)
          break
        }
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, get' }
      }
      break

    case 'metrics':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/metrics/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/metrics/${args.id}/`)
          break
        }
        case 'aggregate': {
          if (!args.id) { result = { error: '--id required (metric ID)' }; break }
          const body = {
            data: {
              type: 'metric-aggregate',
              attributes: {
                metric_id: args.id,
                measurements: (args.measurements || 'count,sum_value,unique').split(','),
                interval: args.interval || 'day',
                filter: [`greater-or-equal(datetime,${args['start-date'] || '2024-01-01T00:00:00'})`, `less-than(datetime,${args['end-date'] || new Date().toISOString()})`],
              }
            }
          }
          if (args['group-by']) {
            body.data.attributes.by = args['group-by'].split(',').map(b => `$${b}`)
          }
          result = await api('POST', '/metric-aggregates/', body)
          break
        }
        default:
          result = { error: 'Unknown metrics subcommand. Use: list, get, aggregate' }
      }
      break

    case 'profiles':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args.sort) params.set('sort', args.sort)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          if (args['page-cursor']) params.set('page[cursor]', args['page-cursor'])
          const qs = params.toString()
          result = await api('GET', `/profiles/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/profiles/${args.id}/`)
          break
        }
        case 'create': {
          if (!args.email) { result = { error: '--email required' }; break }
          const attributes = { email: args.email }
          if (args['first-name']) attributes.first_name = args['first-name']
          if (args['last-name']) attributes.last_name = args['last-name']
          if (args.phone) attributes.phone_number = args.phone
          result = await api('POST', '/profiles/', {
            data: { type: 'profile', attributes }
          })
          break
        }
        default:
          result = { error: 'Unknown profiles subcommand. Use: list, get, create' }
      }
      break

    case 'segments':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/segments/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/segments/${args.id}/`)
          break
        }
        case 'profiles': {
          if (!args.id) { result = { error: '--id required (segment ID)' }; break }
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/segments/${args.id}/profiles/${qs ? '?' + qs : ''}`)
          break
        }
        default:
          result = { error: 'Unknown segments subcommand. Use: list, get, profiles' }
      }
      break

    case 'lists':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/lists/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/lists/${args.id}/`)
          break
        }
        case 'profiles': {
          if (!args.id) { result = { error: '--id required (list ID)' }; break }
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/lists/${args.id}/profiles/${qs ? '?' + qs : ''}`)
          break
        }
        default:
          result = { error: 'Unknown lists subcommand. Use: list, get, profiles' }
      }
      break

    case 'templates':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/templates/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/templates/${args.id}/`)
          break
        }
        default:
          result = { error: 'Unknown templates subcommand. Use: list, get' }
      }
      break

    case 'events':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          if (args.sort) params.set('sort', args.sort)
          const qs = params.toString()
          result = await api('GET', `/events/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/events/${args.id}/`)
          break
        }
        default:
          result = { error: 'Unknown events subcommand. Use: list, get' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          flows: 'flows [list|get|update|messages] [--id <id>] [--status draft|manual|live] [--filter <filter>] [--page-size <n>]',
          campaigns: 'campaigns [list|get] [--id <id>] [--filter <filter>] [--sort <field>] [--page-size <n>]',
          metrics: 'metrics [list|get|aggregate] [--id <id>] [--measurements count,sum_value,unique] [--interval day|week|month] [--start-date <iso>] [--end-date <iso>] [--group-by <field>]',
          profiles: 'profiles [list|get|create] [--id <id>] [--email <email>] [--filter <filter>] [--page-size <n>]',
          segments: 'segments [list|get|profiles] [--id <id>] [--page-size <n>]',
          lists: 'lists [list|get|profiles] [--id <id>] [--page-size <n>]',
          templates: 'templates [list|get] [--id <id>] [--filter <filter>] [--page-size <n>]',
          events: 'events [list|get] [--id <id>] [--filter <filter>] [--sort <field>] [--page-size <n>]',
        },
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})

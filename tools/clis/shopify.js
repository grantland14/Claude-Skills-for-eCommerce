#!/usr/bin/env node

const STORE = process.env.SHOPIFY_STORE
const TOKEN = process.env.SHOPIFY_ACCESS_TOKEN
const API_VERSION = '2024-10'

if (!STORE || !TOKEN) {
  console.error(JSON.stringify({ error: 'SHOPIFY_STORE and SHOPIFY_ACCESS_TOKEN environment variables required' }))
  process.exit(1)
}

const BASE_URL = `https://${STORE}.myshopify.com/admin/api/${API_VERSION}`

async function api(method, path, body) {
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { 'X-Shopify-Access-Token': '***', 'Content-Type': 'application/json' }, body: body || undefined }
  }
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'X-Shopify-Access-Token': TOKEN,
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

async function main() {
  let result

  switch (cmd) {
    case 'orders':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.status) params.set('status', args.status)
          if (args.limit) params.set('limit', args.limit)
          if (args['created-after']) params.set('created_at_min', args['created-after'])
          if (args['created-before']) params.set('created_at_max', args['created-before'])
          if (args['financial-status']) params.set('financial_status', args['financial-status'])
          if (args['fulfillment-status']) params.set('fulfillment_status', args['fulfillment-status'])
          if (args.fields) params.set('fields', args.fields)
          if (args['since-id']) params.set('since_id', args['since-id'])
          const qs = params.toString()
          result = await api('GET', `/orders.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/orders/${args.id}.json`)
          break
        }
        case 'count': {
          const params = new URLSearchParams()
          if (args.status) params.set('status', args.status)
          if (args['created-after']) params.set('created_at_min', args['created-after'])
          if (args['financial-status']) params.set('financial_status', args['financial-status'])
          const qs = params.toString()
          result = await api('GET', `/orders/count.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'cancel': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('POST', `/orders/${args.id}/cancel.json`)
          break
        }
        case 'close': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('POST', `/orders/${args.id}/close.json`)
          break
        }
        default:
          result = { error: 'Unknown orders subcommand. Use: list, get, count, cancel, close' }
      }
      break

    case 'products':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.limit) params.set('limit', args.limit)
          if (args.status) params.set('status', args.status)
          if (args['product-type']) params.set('product_type', args['product-type'])
          if (args.vendor) params.set('vendor', args.vendor)
          if (args['collection-id']) params.set('collection_id', args['collection-id'])
          if (args.title) params.set('title', args.title)
          if (args.fields) params.set('fields', args.fields)
          if (args['since-id']) params.set('since_id', args['since-id'])
          const qs = params.toString()
          result = await api('GET', `/products.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/products/${args.id}.json`)
          break
        }
        case 'count': {
          const params = new URLSearchParams()
          if (args.status) params.set('status', args.status)
          if (args['product-type']) params.set('product_type', args['product-type'])
          if (args.vendor) params.set('vendor', args.vendor)
          const qs = params.toString()
          result = await api('GET', `/products/count.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'create': {
          if (!args.title) { result = { error: '--title required' }; break }
          const product = { title: args.title }
          if (args['body-html']) product.body_html = args['body-html']
          if (args.vendor) product.vendor = args.vendor
          if (args['product-type']) product.product_type = args['product-type']
          if (args.tags) product.tags = args.tags
          if (args.status) product.status = args.status
          result = await api('POST', '/products.json', { product })
          break
        }
        case 'update': {
          if (!args.id) { result = { error: '--id required' }; break }
          const product = { id: parseInt(args.id) }
          if (args.title) product.title = args.title
          if (args['body-html']) product.body_html = args['body-html']
          if (args.vendor) product.vendor = args.vendor
          if (args['product-type']) product.product_type = args['product-type']
          if (args.tags) product.tags = args.tags
          if (args.status) product.status = args.status
          result = await api('PUT', `/products/${args.id}.json`, { product })
          break
        }
        default:
          result = { error: 'Unknown products subcommand. Use: list, get, count, create, update' }
      }
      break

    case 'customers':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.limit) params.set('limit', args.limit)
          if (args['created-after']) params.set('created_at_min', args['created-after'])
          if (args['updated-after']) params.set('updated_at_min', args['updated-after'])
          if (args.fields) params.set('fields', args.fields)
          if (args['since-id']) params.set('since_id', args['since-id'])
          const qs = params.toString()
          result = await api('GET', `/customers.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          if (!args.id) { result = { error: '--id required' }; break }
          result = await api('GET', `/customers/${args.id}.json`)
          break
        }
        case 'count': {
          result = await api('GET', '/customers/count.json')
          break
        }
        case 'search': {
          if (!args.query) { result = { error: '--query required' }; break }
          const params = new URLSearchParams({ query: args.query })
          if (args.limit) params.set('limit', args.limit)
          if (args.fields) params.set('fields', args.fields)
          result = await api('GET', `/customers/search.json?${params}`)
          break
        }
        case 'orders': {
          if (!args.id) { result = { error: '--id required' }; break }
          const params = new URLSearchParams()
          if (args.status) params.set('status', args.status)
          const qs = params.toString()
          result = await api('GET', `/customers/${args.id}/orders.json${qs ? '?' + qs : ''}`)
          break
        }
        default:
          result = { error: 'Unknown customers subcommand. Use: list, get, count, search, orders' }
      }
      break

    case 'inventory':
      switch (sub) {
        case 'levels': {
          const params = new URLSearchParams()
          if (args['inventory-item-ids']) params.set('inventory_item_ids', args['inventory-item-ids'])
          if (args['location-ids']) params.set('location_ids', args['location-ids'])
          if (args.limit) params.set('limit', args.limit)
          const qs = params.toString()
          result = await api('GET', `/inventory_levels.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'adjust': {
          if (!args['inventory-item-id'] || !args['location-id'] || !args.adjustment) {
            result = { error: '--inventory-item-id, --location-id, and --adjustment required' }; break
          }
          result = await api('POST', '/inventory_levels/adjust.json', {
            inventory_item_id: parseInt(args['inventory-item-id']),
            location_id: parseInt(args['location-id']),
            available_adjustment: parseInt(args.adjustment),
          })
          break
        }
        case 'set': {
          if (!args['inventory-item-id'] || !args['location-id'] || !args.available) {
            result = { error: '--inventory-item-id, --location-id, and --available required' }; break
          }
          result = await api('POST', '/inventory_levels/set.json', {
            inventory_item_id: parseInt(args['inventory-item-id']),
            location_id: parseInt(args['location-id']),
            available: parseInt(args.available),
          })
          break
        }
        default:
          result = { error: 'Unknown inventory subcommand. Use: levels, adjust, set' }
      }
      break

    case 'collections':
      switch (sub) {
        case 'smart': {
          const params = new URLSearchParams()
          if (args.limit) params.set('limit', args.limit)
          const qs = params.toString()
          result = await api('GET', `/smart_collections.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'custom': {
          const params = new URLSearchParams()
          if (args.limit) params.set('limit', args.limit)
          const qs = params.toString()
          result = await api('GET', `/custom_collections.json${qs ? '?' + qs : ''}`)
          break
        }
        case 'products': {
          if (!args.id) { result = { error: '--id required (collection ID)' }; break }
          const params = new URLSearchParams()
          if (args.limit) params.set('limit', args.limit)
          const qs = params.toString()
          result = await api('GET', `/collections/${args.id}/products.json${qs ? '?' + qs : ''}`)
          break
        }
        default:
          result = { error: 'Unknown collections subcommand. Use: smart, custom, products' }
      }
      break

    case 'analytics':
      switch (sub) {
        case 'orders-summary': {
          const params = new URLSearchParams({ status: 'any' })
          if (args['created-after']) params.set('created_at_min', args['created-after'])
          if (args['created-before']) params.set('created_at_max', args['created-before'])
          params.set('limit', '250')
          params.set('fields', 'id,created_at,total_price,subtotal_price,total_discounts,total_tax,financial_status,fulfillment_status,line_items')
          const data = await api('GET', `/orders.json?${params}`)
          if (data.orders) {
            const orders = data.orders
            const totalRevenue = orders.reduce((s, o) => s + parseFloat(o.total_price), 0)
            const totalDiscounts = orders.reduce((s, o) => s + parseFloat(o.total_discounts), 0)
            const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0
            const paid = orders.filter(o => o.financial_status === 'paid' || o.financial_status === 'partially_paid').length
            const refunded = orders.filter(o => o.financial_status === 'refunded' || o.financial_status === 'partially_refunded').length
            const fulfilled = orders.filter(o => o.fulfillment_status === 'fulfilled').length
            const unfulfilled = orders.filter(o => !o.fulfillment_status || o.fulfillment_status === 'unfulfilled' || o.fulfillment_status === null).length
            result = {
              summary: {
                total_orders: orders.length,
                total_revenue: totalRevenue.toFixed(2),
                average_order_value: avgOrderValue.toFixed(2),
                total_discounts: totalDiscounts.toFixed(2),
                financial: { paid, refunded },
                fulfillment: { fulfilled, unfulfilled },
              }
            }
          } else {
            result = data
          }
          break
        }
        case 'top-products': {
          const params = new URLSearchParams({ status: 'any' })
          if (args['created-after']) params.set('created_at_min', args['created-after'])
          if (args['created-before']) params.set('created_at_max', args['created-before'])
          params.set('limit', '250')
          params.set('fields', 'id,line_items')
          const data = await api('GET', `/orders.json?${params}`)
          if (data.orders) {
            const productMap = {}
            for (const order of data.orders) {
              for (const item of order.line_items) {
                const key = item.product_id || item.title
                if (!productMap[key]) {
                  productMap[key] = { title: item.title, product_id: item.product_id, units_sold: 0, revenue: 0 }
                }
                productMap[key].units_sold += item.quantity
                productMap[key].revenue += parseFloat(item.price) * item.quantity
              }
            }
            const sorted = Object.values(productMap).sort((a, b) => b.revenue - a.revenue)
            const limit = parseInt(args.limit || '10')
            result = { top_products: sorted.slice(0, limit).map(p => ({ ...p, revenue: p.revenue.toFixed(2) })) }
          } else {
            result = data
          }
          break
        }
        default:
          result = { error: 'Unknown analytics subcommand. Use: orders-summary, top-products' }
      }
      break

    case 'locations':
      switch (sub) {
        case 'list':
        default:
          result = await api('GET', '/locations.json')
      }
      break

    case 'shop':
      result = await api('GET', '/shop.json')
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          orders: 'orders [list|get|count|cancel|close] [--id <id>] [--status any|open|closed] [--created-after <date>] [--created-before <date>] [--financial-status <status>] [--fulfillment-status <status>] [--limit <n>]',
          products: 'products [list|get|count|create|update] [--id <id>] [--title <title>] [--status active|draft|archived] [--product-type <type>] [--vendor <vendor>] [--limit <n>]',
          customers: 'customers [list|get|count|search|orders] [--id <id>] [--query <search>] [--created-after <date>] [--limit <n>]',
          inventory: 'inventory [levels|adjust|set] [--inventory-item-id <id>] [--location-id <id>] [--adjustment <n>] [--available <n>]',
          collections: 'collections [smart|custom|products] [--id <id>] [--limit <n>]',
          analytics: 'analytics [orders-summary|top-products] [--created-after <date>] [--created-before <date>] [--limit <n>]',
          locations: 'locations [list]',
          shop: 'shop (store info)',
        },
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})

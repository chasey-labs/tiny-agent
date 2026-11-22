import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { HealthStatus } from '@tiny-agent/shared'

const app = new Hono()

app.get('/api/health', (c) => {
  const body: HealthStatus = { ok: true, service: 'server' }
  return c.json(body)
})

const port = Number(process.env.PORT ?? 8100)
serve({ fetch: app.fetch, port })

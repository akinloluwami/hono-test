import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  console.log("Honoooooo!!!!")
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT || 5000)
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

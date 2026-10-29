import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(''),
  companyType: z.enum(['operator', 'charterer', 'broker']),
  source: z.string().trim().max(60).optional().default(''),
})

const NOTIFY_TO = 'umair@portcall.tech'

export const Route = createFileRoute('/api/public/access-request')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !serviceKey) {
          return Response.json({ error: 'Server not configured' }, { status: 500 })
        }

        let payload: unknown
        try {
          payload = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = schema.safeParse(payload)
        if (!parsed.success) {
          return Response.json({ error: 'Invalid form data' }, { status: 400 })
        }
        const data = parsed.data

        const supabase = createClient(supabaseUrl, serviceKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        })

        // 1) Persist the request
        const { data: inserted, error: insertError } = await supabase
          .from('access_requests')
          .insert({
            name: data.name,
            company: data.company,
            email: data.email,
            phone: data.phone,
            company_type: data.companyType,
          })
          .select('id, created_at')
          .maybeSingle()

        if (insertError) {
          console.error('access_requests insert failed', insertError)
          return Response.json({ error: 'Could not save request' }, { status: 500 })
        }

        // 2) Render + enqueue notification email via the transactional send route
        //    (non-fatal on failure so the form still succeeds).
        const idempotencyKey = `access-request-${inserted?.id ?? crypto.randomUUID()}`
        try {
          const origin = new URL(request.url).origin
          const sendRes = await fetch(`${origin}/lovable/email/transactional/send`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${serviceKey}`,
            },
            body: JSON.stringify({
              templateName: 'access-request',
              recipientEmail: NOTIFY_TO,
              idempotencyKey,
              templateData: {
                name: data.name,
                company: data.company,
                email: data.email,
                phone: data.phone,
                companyType: data.companyType,
                source: data.source,
                submittedAt: inserted?.created_at ?? new Date().toISOString(),
              },
            }),
          })
          if (!sendRes.ok) {
            console.warn('access-request email send failed', sendRes.status, await sendRes.text())
          }
        } catch (err) {
          console.warn('access-request email send threw', err)
        }

        return Response.json({ ok: true })
      },
    },
  },
})
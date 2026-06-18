import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  company?: string
  email?: string
  phone?: string
  companyType?: string
  submittedAt?: string
}

const Email = ({
  name = '—',
  company = '—',
  email = '—',
  phone = '—',
  companyType = '—',
  submittedAt,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New early access request from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New early access request</Heading>
        <Text style={subtle}>
          Submitted{submittedAt ? ` on ${submittedAt}` : ''} via portcall.tech
        </Text>
        <Hr style={hr} />
        <Section>
          <Row label="Name" value={name} />
          <Row label="Company" value={company} />
          <Row label="Company type" value={companyType} />
          <Row label="Email" value={email} />
          <Row label="Phone" value={phone} />
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Reply directly to this email to reach the requester.</Text>
      </Container>
    </Body>
  </Html>
)

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </div>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New early access request — ${data.name ?? 'Portcall'}`,
  displayName: 'Access request notification',
  previewData: {
    name: 'Jane Doe',
    company: 'Acme Shipping',
    email: 'jane@acme.com',
    phone: '+1 555 123 4567',
    companyType: 'operator',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 700, color: '#0B1F3A', margin: '0 0 4px' }
const subtle = { fontSize: '12px', color: '#6B7A8F', margin: 0 }
const hr = { borderColor: '#E5EAF0', margin: '20px 0' }
const rowLabel = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: '#6B7A8F',
  margin: '0 0 2px',
}
const rowValue = { fontSize: '15px', color: '#0B1F3A', margin: 0 }
const footer = { fontSize: '12px', color: '#6B7A8F' }
import { createClient } from '@sanity/client'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message, date, budget } = await req.json()

    // Save to Sanity
    await client.create({
      _type: 'message',
      name,
      email,
      message,
      date: date || null,
      budget: budget || null,
      createdAt: new Date().toISOString(),
    })

    // Send email via Resend
    await resend.emails.send({
      from: 'Diivavälitys Contact Form <noreply@diivavalitys.fi>',
      to: 'jonas@diivavalitys.fi',
      replyTo: email,
      subject: `Uusi yhteydenotto: ${name}`,
      html: `
        <h2>Uusi yhteydenotto</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Ajankohta:</strong> ${date || '–'}</p>
        <p><strong>Budjetti:</strong> ${budget || '–'}</p>
        <p><strong>Viesti:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
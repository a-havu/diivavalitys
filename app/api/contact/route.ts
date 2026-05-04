import { createClient } from '@sanity/client'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.RESEND_API_KEY,
  useCdn: false,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    await client.create({
      _type: 'message',
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
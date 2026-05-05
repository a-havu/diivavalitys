import { createClient } from 'next-sanity'

console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})
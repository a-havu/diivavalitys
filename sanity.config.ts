import { schemaTypes } from './sanity/schemaTypes'
import { defineConfig } from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  schema: { types: schemaTypes },
  plugins: [structureTool()],
})
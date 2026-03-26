import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { galerieBild } from './src/sanity/schemaTypes/galerieBild'
import { artist } from './src/sanity/schemaTypes/artist'
import { settings } from './src/sanity/schemaTypes/settings'
import { tattooStil } from './src/sanity/schemaTypes/tattooStil'

export default defineConfig({
  name: 'fearless-tattoo',
  title: 'Fearless Tattoo',
  projectId: 'z7o9aecg',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [galerieBild, artist, settings, tattooStil],
  },
})

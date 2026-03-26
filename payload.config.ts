import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { GalerieBilder } from './src/collections/GalerieBilder'
import { Artists } from './src/collections/Artists'
import { TattooStile } from './src/collections/TattooStile'
import { Settings } from './src/collections/Settings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Users, Media, GalerieBilder, Artists, TattooStile],
  globals: [Settings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: `file:${path.resolve(dirname, '.data/payload.db')}`,
    },
    push: true,
  }),
  upload: {
    limits: {
      fileSize: 10_000_000, // 10MB
    },
  },
})

import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  console.log('[DB] Initializing...')
  const payload = await getPayload({ config })

  // Generate migration files if needed
  try {
    if (payload.db.createMigration) {
      await payload.db.createMigration({ migrationName: 'init', payload })
      console.log('[DB] Migration created')
    }
  } catch {
    console.log('[DB] No new migration needed')
  }

  // Apply pending migrations
  console.log('[DB] Applying migrations...')
  await payload.db.migrate()
  console.log('[DB] Done.')

  process.exit(0)
}

main().catch((err) => {
  console.error('[DB] Fatal:', err)
  process.exit(1)
})

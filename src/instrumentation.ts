import { mkdirSync } from 'fs'
import { join } from 'path'

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Register tsx so Node.js can dynamically import .ts migration files
    const { register } = await import('tsx/esm/api')
    register()

    // Ensure migrations directory exists
    mkdirSync(join(process.cwd(), 'src/migrations'), { recursive: true })

    const { getPayload } = await import('payload')
    const { default: config } = await import('../payload.config')
    const payload = await getPayload({ config })

    // Generate migration SQL from current schema
    if (payload.db.createMigration) {
      try {
        await payload.db.createMigration({ migrationName: 'init', payload })
      } catch {
        // Already up to date or no changes
      }
    }

    // Apply pending migrations to the database
    try {
      await payload.db.migrate()
    } catch (err) {
      console.error('[Payload] Migration error:', err)
    }
  }
}

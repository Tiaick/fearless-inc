export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { getPayload } = await import('payload')
    const { default: config } = await import('../payload.config')
    const payload = await getPayload({ config })

    // Generate migration files based on current schema (uses drizzle-kit)
    if (payload.db.createMigration) {
      try {
        await payload.db.createMigration({ migrationName: 'init', payload })
      } catch {
        // Already exists or no schema changes — that's fine
      }
    }

    // Apply all pending migrations to the database
    try {
      await payload.db.migrate()
    } catch (err) {
      console.error('[Payload] Migration error:', err)
    }
  }
}

import { mkdirSync } from 'fs'
import { join } from 'path'

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Sicherstellen dass .data Verzeichnis existiert
    try {
      mkdirSync(join(process.cwd(), '.data'), { recursive: true })
    } catch {}

    // Payload initialisieren — erstellt Datenbanktabellen bevor erste Requests kommen
    const { getPayload } = await import('payload')
    const { default: config } = await import('../payload.config')
    await getPayload({ config })
  }
}

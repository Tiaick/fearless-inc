import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config })
  const results: string[] = []

  // Artist
  const existingArtists = await payload.find({ collection: 'artists', limit: 1 })
  if (existingArtists.totalDocs === 0) {
    await payload.create({
      collection: 'artists',
      data: {
        name: 'PETZKO',
        jahreErfahrung: 6,
        tattooCount: '2.000+',
        kurztext:
          'Petzko ist nicht einfach ein Tätowierer — er ist ein Künstler, der Haut als seine Leinwand sieht. Mit über sechs Jahren Erfahrung und tausenden gestochenen Motiven hat er sein Handwerk auf ein Niveau perfektioniert, das für sich spricht.',
        langtext:
          'Sein Studio Fearless Ink in Ellerau ist ein privater kreativer Raum, in dem jede Vision Wirklichkeit wird. Keine Vorlagen, keine Kompromisse — nur Kunst.',
        zitat: 'KUNST SOLLTE STÖREN. EIN TATTOO TUT ES — FÜR IMMER.',
      },
    })
    results.push('✓ Artist PETZKO created')
  } else {
    results.push('– Artist already exists')
  }

  // Tattoo Stile
  const existingStile = await payload.find({ collection: 'tattoo-stile', limit: 1 })
  if (existingStile.totalDocs === 0) {
    const stile = [
      { titel: 'Realism', beschreibung: 'Fotorealistische Portraits, Tiere und Szenen in atemberaubender Detailtreue.', reihenfolge: 1 },
      { titel: 'Fine Line', beschreibung: 'Zarte, präzise Linienarbeit. Botanik, Porträts und geometrische Elemente.', reihenfolge: 2 },
      { titel: 'Geometric', beschreibung: 'Mandalas, Sacred Geometry und ornamentale Muster mit mathematischer Perfektion.', reihenfolge: 3 },
      { titel: 'Custom', beschreibung: 'Deine Idee, von Grund auf neu designed. Kein Template — pure, einzigartige Kunst.', reihenfolge: 4 },
      { titel: 'Cover-Up', beschreibung: 'Alte Tattoos neu denken und professionell überarbeiten. Kreativ, präzise, endgültig.', reihenfolge: 5 },
    ]
    for (const stil of stile) {
      await payload.create({ collection: 'tattoo-stile', data: stil })
    }
    results.push('✓ 5 Tattoo Stile created')
  } else {
    results.push('– Tattoo Stile already exist')
  }

  // Settings
  await payload.updateGlobal({
    slug: 'settings',
    data: {
      telefon: '015222458669',
      adresse: 'Königsberger Str. 2, 25479 Ellerau',
      oeffnungszeiten: 'Mo–Fr 12:00–17:00 Uhr',
      instagram: 'fearless.tattoo',
      instagramUrl: 'https://www.instagram.com/fearless.tattoo/',
    },
  })
  results.push('✓ Settings updated')

  return NextResponse.json({ ok: true, results })
}

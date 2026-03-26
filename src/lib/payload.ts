const PAYLOAD_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export async function getGalerieBilder() {
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/galerie-bilder?limit=100&sort=reihenfolge`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.docs ?? null
  } catch {
    return null
  }
}

export async function getArtist() {
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/artists?limit=1`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.docs?.[0] ?? null
  } catch {
    return null
  }
}

export async function getTattooStile() {
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/tattoo-stile?limit=20&sort=reihenfolge`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.docs ?? null
  } catch {
    return null
  }
}

export function getMediaUrl(image: { url?: string } | string | null | undefined): string | null {
  if (!image) return null
  if (typeof image === 'string') return image
  if (image.url) return image.url
  return null
}

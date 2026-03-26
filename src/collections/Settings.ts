import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Studio Einstellungen',
  access: { read: () => true },
  fields: [
    {
      name: 'telefon',
      type: 'text',
      label: 'Telefonnummer',
    },
    {
      name: 'adresse',
      type: 'text',
      label: 'Adresse',
    },
    {
      name: 'oeffnungszeiten',
      type: 'text',
      label: 'Öffnungszeiten',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram Handle (z.B. fearless.tattoo)',
    },
    {
      name: 'instagramUrl',
      type: 'text',
      label: 'Instagram URL',
    },
  ],
}

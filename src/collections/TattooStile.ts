import type { CollectionConfig } from 'payload'

export const TattooStile: CollectionConfig = {
  slug: 'tattoo-stile',
  labels: { singular: 'Tattoo Stil', plural: 'Tattoo Stile' },
  access: { read: () => true },
  admin: { useAsTitle: 'titel', defaultColumns: ['titel', 'reihenfolge'] },
  fields: [
    {
      name: 'titel',
      type: 'text',
      required: true,
      label: 'Titel',
    },
    {
      name: 'beschreibung',
      type: 'textarea',
      required: true,
      label: 'Beschreibung',
    },
    {
      name: 'reihenfolge',
      type: 'number',
      label: 'Reihenfolge',
      admin: { description: 'Niedrigere Zahl = weiter vorne' },
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const GalerieBilder: CollectionConfig = {
  slug: 'galerie-bilder',
  labels: { singular: 'Galerie Bild', plural: 'Galerie Bilder' },
  access: { read: () => true },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'category', 'reihenfolge'],
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Bild',
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Bildbeschreibung',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Kategorie',
      options: [
        { label: 'Fine Line', value: 'Fine Line' },
        { label: 'Geometric', value: 'Geometric' },
        { label: 'Realism', value: 'Realism' },
        { label: 'Custom', value: 'Custom' },
      ],
    },
    {
      name: 'reihenfolge',
      type: 'number',
      label: 'Reihenfolge',
      admin: { description: 'Niedrigere Zahl = weiter vorne' },
    },
  ],
}

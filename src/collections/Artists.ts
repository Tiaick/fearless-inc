import type { CollectionConfig } from 'payload'

export const Artists: CollectionConfig = {
  slug: 'artists',
  labels: { singular: 'Artist', plural: 'Artists' },
  access: { read: () => true },
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'foto',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto',
    },
    {
      name: 'jahreErfahrung',
      type: 'number',
      label: 'Jahre Erfahrung',
    },
    {
      name: 'tattooCount',
      type: 'text',
      label: 'Anzahl Tattoos (z.B. "2.000+")',
    },
    {
      name: 'kurztext',
      type: 'textarea',
      label: 'Kurztext (Hauptabsatz)',
    },
    {
      name: 'langtext',
      type: 'textarea',
      label: 'Langtext (zweiter Absatz)',
    },
    {
      name: 'zitat',
      type: 'text',
      label: 'Zitat (goldener Banner)',
    },
  ],
}

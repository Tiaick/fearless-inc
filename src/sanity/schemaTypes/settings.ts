import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Studio Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'telefon',
      title: 'Telefonnummer',
      type: 'string',
    }),
    defineField({
      name: 'adresse',
      title: 'Adresse',
      type: 'string',
    }),
    defineField({
      name: 'oeffnungszeiten',
      title: 'Öffnungszeiten',
      type: 'string',
      description: 'z.B. Mo–Fr 12:00–17:00 Uhr',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Handle',
      type: 'string',
      description: 'Nur der Name, z.B. fearless.tattoo',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Studio Einstellungen' }),
  },
})

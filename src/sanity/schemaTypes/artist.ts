import { defineField, defineType } from 'sanity'

export const artist = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'kurztext',
      title: 'Kurztext (Hauptabsatz)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'langtext',
      title: 'Langtext (zweiter Absatz)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'jahreErfahrung',
      title: 'Jahre Erfahrung',
      type: 'number',
    }),
    defineField({
      name: 'tattooCount',
      title: 'Anzahl Tattoos (z.B. "2.000+")',
      type: 'string',
    }),
    defineField({
      name: 'zitat',
      title: 'Zitat',
      type: 'string',
      description: 'Wird im goldenen Banner angezeigt',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'foto' },
  },
})

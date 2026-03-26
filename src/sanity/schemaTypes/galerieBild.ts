import { defineField, defineType } from 'sanity'

export const galerieBild = defineType({
  name: 'galerieBild',
  title: 'Galerie Bild',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Bildbeschreibung',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Fine Line', value: 'Fine Line' },
          { title: 'Geometric', value: 'Geometric' },
          { title: 'Realism', value: 'Realism' },
          { title: 'Custom', value: 'Custom' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Niedrigere Zahl = weiter vorne',
    }),
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'reihenfolgeAsc',
      by: [{ field: 'reihenfolge', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'alt', subtitle: 'category', media: 'image' },
  },
})

// sanity/schemaTypes/servicesPage.ts
import { defineField, defineType } from 'sanity';

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // 1. Hero Section
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Services',
    }),
    defineField({
      name: 'introParagraph1',
      title: 'Intro Paragraph 1',
      type: 'text',
    }),
    defineField({
      name: 'introParagraph2',
      title: 'Intro Paragraph 2',
      type: 'text',
    }),

    // 2. Services Array
    defineField({
      name: 'services',
      title: 'Core Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Service Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'objectives', title: 'Objectives', type: 'array', of: [{ type: 'string' }] },
            { name: 'advantages', title: 'Advantages', type: 'array', of: [{ type: 'string' }] },
            { name: 'image', title: 'Service Image', type: 'image', options: { hotspot: true } },
            { name: 'imageCaption', title: 'Image Caption / Label', type: 'string' },
          ],
        },
      ],
    }),

    // 3. Validation & Testing Section
    defineField({
      name: 'validationSection',
      title: 'Validation & Testing Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Custom Design & Validation' },
        { name: 'intro', title: 'Intro Text', type: 'text' },
        {
          name: 'fat',
          title: 'FAT Details',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', initialValue: 'Factory Acceptance Test (FAT)' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'location', title: 'Location', type: 'string', initialValue: 'Esteril Facility' },
          ]
        },
        {
          name: 'sat',
          title: 'SAT Details',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', initialValue: 'Site Acceptance Test (SAT)' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'location', title: 'Location', type: 'string', initialValue: 'Client Site' },
          ]
        }
      ]
    }),
  ],
});
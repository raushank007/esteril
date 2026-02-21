// sanity/schemaTypes/siteSettings.ts
import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Just for you to identify this document (e.g., "Global Site Data").',
      initialValue: 'Global Site Data',
    }),
    defineField({
      name: 'companyStats',
      title: 'Company Statistics',
      description: 'Add your 4 main stats here. They will appear on the Home and About pages.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g., 25+)', type: 'string' },
            { name: 'label', title: 'Label (e.g., Years Experience)', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.max(4), // Keeps the design from breaking!
    }),
  ],
});
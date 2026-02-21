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
      initialValue: 'Global Site Data',
    }),
    defineField({
      name: 'companyStats',
      title: 'Company Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g., 25+)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    // NEW: Dynamic Form Endpoints (Key/Value pairs)
        defineField({
          name: 'formEndpoints',
          title: 'Form Endpoints (Formspree URLs)',
          description: 'Add your Formspree URLs here. Use a simple key like "contact" or "quote".',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'formKey',
                  title: 'Key (e.g., contact, quote)',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                },
                {
                  name: 'endpointUrl',
                  title: 'Formspree URL',
                  type: 'url',
                  validation: (Rule) => Rule.required()
                },
              ],
            },
          ],
        }),
    // NEW: Leadership Team Array
    defineField({
      name: 'leadershipTeam',
      title: 'Leadership Team',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'role', title: 'Role/Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
});
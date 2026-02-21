// sanity/schemaTypes/compliancePage.ts
import { defineField, defineType } from 'sanity';

export const compliancePageType = defineType({
  name: 'compliancePage',
  title: 'Compliance Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Validation & Compliance',
    }),
    defineField({
      name: 'introText',
      title: 'Introductory Text',
      type: 'text',
    }),
    defineField({
      name: 'standards',
      title: 'Compliance Standards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Standard Name (e.g., USFDA 21 CFR Part 11)', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'documentationIntro',
      title: 'Documentation Intro Text',
      type: 'text',
      initialValue: "We don't just deliver a tank; we deliver a validated system. Your turnover package includes:",
    }),
    defineField({
      name: 'documentationList',
      title: 'Documentation Checklist',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'sampleReport',
      title: 'Sample DQ Report (PDF/Doc)',
      type: 'file',
      description: 'Upload a sample report for users to download.',
    }),
  ],
});
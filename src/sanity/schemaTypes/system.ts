// sanity/schemaTypes/system.ts
import { defineField, defineType } from 'sanity';

export const systemType = defineType({
  name: 'system',
  title: 'Sterile System',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'System Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Skid', 'Vessel', 'Automation'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'model3dUrl',
      title: '3D Model URL Path',
      type: 'string',
      description: 'Example: /models/test-vessel.glb',
      initialValue: '/models/test-vessel.glb',
    }),
    defineField({
      name: 'description',
      title: 'Detailed Description',
      type: 'text',
    }),
    defineField({
      name: 'compliance',
      title: 'Compliance Badges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Example: USFDA, cGMP, ASME BPE',
    }),
    defineField({
      name: 'advantages',
      title: 'Core Advantages',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    // NEW: 3D Model Upload Field
        defineField({
          name: 'threeDModel',
          title: '3D Model (.glb)',
          description: 'Upload the 3D .glb file generated from TRELLIS here.',
          type: 'file',
          options: {
            accept: '.glb', // This ensures your team can ONLY upload the correct 3D file type!
          },
        }),
    defineField({
      name: 'technicalSpecs',
      title: 'Technical Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        },
      ],
    }),
  ],
});
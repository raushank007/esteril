// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { systemType } from './system' // <--- 1. Import it

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [systemType], // <--- 2. Add it to the array
}
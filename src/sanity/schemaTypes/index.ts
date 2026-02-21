// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { systemType } from './system' // <--- 1. Import it
import {siteSettingsType} from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [systemType,siteSettingsType], // <--- 2. Add it to the array
}
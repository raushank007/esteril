// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { systemType } from './system' // <--- 1. Import it
import {siteSettingsType} from './siteSettings'
import {compliancePageType} from './compliancePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [systemType,siteSettingsType, compliancePageType], // <--- 2. Add it to the array
}
import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { project } from './project'
import { playlist } from './palylist'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, project, playlist],
}

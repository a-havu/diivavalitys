export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'index', title: 'Index', type: 'number' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'photo', title: 'Photo', type: 'image' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }},
  ]
}
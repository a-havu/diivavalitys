export const divaName = {
  name: 'divaName',
  title: 'Diva Name Generator',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'firstNames',
      title: 'First Names',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'lastNames',
      title: 'Last Names',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
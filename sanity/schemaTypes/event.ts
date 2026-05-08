export const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'etusivulle', title: 'Etusivulle', type: 'boolean' },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'artists', title: 'Divas', type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artist' }]
        }
      ]
     },
    { name: 'link', title: 'Link', type: 'url' },
  ]

}
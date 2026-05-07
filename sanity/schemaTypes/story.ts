export const story = {
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'etusivulle', title: 'Etusivulle', type: 'boolean' },
    { name: 'photo', title: 'Photo', type: 'image' },
    { name: 'oneliner', title: 'Oneliner', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }},
        {
      name: 'story',
      title: 'Story',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  }
                ]
              }
            ]
          }
        }
      ]
    },
  ]

}
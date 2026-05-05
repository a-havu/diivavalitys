export const artist = {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'bio',
      title: 'Bio',
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
    { name: 'photo', title: 'Photo', type: 'image' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }},
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'DJ', value: 'DJ' },
          { title: 'Juonto', value: 'Juonto' },
        ]
      }
    }
  ]
}
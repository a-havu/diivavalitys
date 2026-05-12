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
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // enables crop/focus UI per image
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
            {name: 'credit', title: 'Photo credit', type: 'string'}
          ],
        },
      ],
      options: {
        layout: 'grid', // shows a grid preview in the Studio
      },
    },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }},
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'DJ', value: 'dj' },
          { title: 'Juontaja', value: 'juontaja' },
          { title: 'Drag', value: 'drag' },
          { title: 'Laulaja', value: 'laulaja' },
        ]
      }
    }
  ]
}
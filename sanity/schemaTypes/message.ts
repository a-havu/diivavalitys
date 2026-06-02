export const message = {
  name: 'message',
  title: 'Messages',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'message', title: 'Message', type: 'text' },
    { name: 'createdAt', title: 'Received At', type: 'datetime' },
    { name: 'date', title: 'Date', type: 'text' },
    { name: 'budget', title: 'Budget', type: 'text' },
	{
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Tarjouspyyntö', value: 'tarjouspyyntö' },
          { title: 'Palaute', value: 'palaute' },
          { title: 'Muu yhteydenotto', value: 'muu' },
        ]
      }
    },
  ]
}
export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc84391074b4b2afd5f8578',
                  name: 'Content Studio',
                  siteId: 'a2fd20b0-7c86-4756-85f1-4585ef1a97cf'
                },
                {
                  buildHookId: '5cc843919c0630e4586cba20',
                  name: 'Blog Website',
                  siteId: '676235f4-4f4a-4a56-ac15-dc329a2b4e70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-blogdee',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-blogdee.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c82953796e70182c157d9',
                  title: 'Sanity Studio',
                  name: 'sanity-studio-s16njb3j',
                  apiId: 'f8c5d088-2de8-4141-8f34-d1bbbd58fefd'
                },
                {
                  buildHookId: '5f2c829652ea81017983ebd0',
                  title: 'Blog Website',
                  name: 'sanity-web-y4c91qod',
                  apiId: 'a4ae359c-bb2d-4174-b500-4a7f718560fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/creio/sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-web-y4c91qod.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

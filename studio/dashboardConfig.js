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
                  buildHookId: '5e30d18722392dbfb2b27ca1',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-9aid4b2a',
                  apiId: '9ead16e7-29ec-487d-8f9c-e92f6fc59114'
                },
                {
                  buildHookId: '5e30d1888ac2c8cc784efa03',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-hxunsmyz',
                  apiId: '95cf96bf-d455-49b7-a824-15b817a7ef6e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/steveadams/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-hxunsmyz.netlify.com', category: 'apps' }
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

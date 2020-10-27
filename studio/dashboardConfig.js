export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f985dcf20b5880acf3203a8',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-stripe-studio',
                  apiId: 'db77c204-409b-4e4e-902f-45c7613fa8f8'
                },
                {
                  buildHookId: '5f985dcfafacab09e9487b3d',
                  title: 'Blog Website',
                  name: 'sanity-sapper-stripe',
                  apiId: '9fa5a7da-5b93-4e7b-b967-b94c5171b903'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/threesam/sanity-sapper-stripe',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-stripe.netlify.app', category: 'apps'}
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

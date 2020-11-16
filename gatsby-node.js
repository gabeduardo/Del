const path = require('path')

async function turnCheesecakeIntroPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/CheesecakeTemplate.js')

  // graphql es syncronous por eso debo colocar el await, graphql VIENE DEL PARAMS
  const { data } = await graphql(`
    query {
      cheesecakes: allSanityCheesecake {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.cheesecakes.nodes.forEach(cake => {
    actions.createPage({
      // url de la nueva página
      path: `cheesecake/${cake.slug.current}`,
      // el template que voy a usar para crear cada torta
      component: template,
      //   los datos que le voy a enviar a dicho template
      context: {
        slug: cake.slug.current,
      },
    })
  })
}

exports.createPages = async function (params) {
  await turnCheesecakeIntroPages(params)
}

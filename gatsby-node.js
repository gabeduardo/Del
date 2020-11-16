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

async function filter({ graphql, actions }) {
  // 1. Get the template
  const Filtertemplate = path.resolve('./src/pages/cheesecake.js')
  // 2. query all the categories
  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          name
          id
        }
      }
    }
  `)

  // 3. createPage for that topping
  data.categories.nodes.forEach(category => {
    actions.createPage({
      path: `/category/${category.name}`,
      component: Filtertemplate,
      context: {
        category: category.name,
      },
    })
  })
  // 4. Pass topping data to pizza.js
}

exports.createPages = async function (params) {
  await Promise.all([turnCheesecakeIntroPages(params), filter(params)])
}

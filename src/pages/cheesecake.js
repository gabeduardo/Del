import React from 'react'
import { graphql } from 'gatsby'
import CheesecakeList from '../components/CheesecakeLists'
import CategoryFilter from '../components/CategoryFilter'

export default function cheesecake({ data }) {
  // trabajndo con la data del query
  console.log(data)

  const cheesecakes = data.cheesecakes.nodes
  return (
    <>
      <CategoryFilter />
      <CheesecakeList cheesecakes={cheesecakes} />
    </>
  )
}

export const query = graphql`
  query MyQuery($category: [String]) {
    cheesecakes: allSanityCheesecake(
      filter: { category: { elemMatch: { name: { in: $category } } } }
    ) {
      nodes {
        name
        price
        slug {
          current
        }
        category {
          name
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

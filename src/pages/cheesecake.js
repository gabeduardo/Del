import React from 'react'
import { graphql } from 'gatsby'
import CheesecakeList from '../components/CheesecakeLists'
import CategoryFilter from '../components/CategoryFilter'

export default function cheesecake({ data }) {
  // trabajndo con la data del query

  const cheesecakes = data.cheesecakes.nodes
  return (
    <>
      <CategoryFilter />
      <CheesecakeList cheesecakes={cheesecakes} />
    </>
  )
}

export const query = graphql`
  query MyQuery {
    cheesecakes: allSanityCheesecake {
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

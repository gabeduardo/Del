import React from 'react'
import { graphql } from 'gatsby'

export default function cheesecake({ data }) {
  // trabajndo con la data del query

  const cheesecakes = data.cheesecakes.nodes
  return (
    <>
      <p>{cheesecakes.length}</p>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    cheesecakes: allSanityCheesecake {
      nodes {
        name
        price
        category {
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

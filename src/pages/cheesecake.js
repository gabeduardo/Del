import React from 'react'
import { graphql } from 'gatsby'
import CheesecakeList from '../components/CheesecakeLists'

export default function cheesecake({ data }) {
  // trabajndo con la data del query

  const cheesecakes = data.cheesecakes.nodes
  return (
    <>
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
            fixed(width: 300, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

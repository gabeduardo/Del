import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CakeGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

export default function SingleCheesecakePage({ data }) {
  return (
    <CakeGrid>
      <Img fluid={data.cheesecake.image.asset.fluid} />

      <div>
        <h2>{data.cheesecake.name}</h2>
        {data.cheesecake.category.map(categoria => (
          <h3> Categoría: {categoria.name}</h3>
        ))}

        <p>Precio:</p>
        <p>{data.cheesecake.price}</p>
      </div>
    </CakeGrid>
  )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    cheesecake: sanityCheesecake(slug: { current: { eq: $slug } }) {
      name
      id
      price
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      category {
        name
      }
    }
  }
`

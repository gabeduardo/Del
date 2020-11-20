import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CakeGrid = styled.div`
   display: grid;
grid-template-columns: 1fr 1fr ;
  grid-gap: 3rem;

  }

  @media (max-width: 575px) {


    grid-template-columns: 1fr;
    
 
}
`

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  h2 {
    font-size: 1em;
  }

  #descripcion {
    grid-column: span 3;
  }
  .precio {
    color: var(--green);
  }
`

export default function SingleCheesecakePage({ data }) {
  return (
    <CakeGrid>
      <Img fluid={data.cheesecake.image.asset.fluid} />
      <ItemGrid>
        <h2>{data.cheesecake.name}</h2>
        {data.cheesecake.category.map(categoria => (
          <h3 key={data.cheesecake.id}> Categoría: {categoria.name}</h3>
        ))}

        <p id="descripcion">{data.cheesecake.description}</p>

        <p className="precio"> Precio:{data.cheesecake.price} $</p>
      </ItemGrid>
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
      description
      category {
        name
      }
    }
  }
`

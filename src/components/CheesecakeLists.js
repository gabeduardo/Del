import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 200px;
`

const PizzaStyles = styled.div`
  display: grid;
  /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`

function Cheesecake({ cheesecale }) {
  return (
    <PizzaStyles>
      <Link to={`/cheesecake/${cheesecale.slug.current}`}>
        <h2> {cheesecale.name}</h2>
      </Link>
      <p>{cheesecale.category.map(categoria => categoria.name)}</p>
      <Img fluid={cheesecale.image.asset.fluid} alt={cheesecale.name} />
    </PizzaStyles>
  )
}
export default function CheesecakeList({ cheesecakes }) {
  return (
    <PizzaGridStyles>
      {cheesecakes.map((torta, index) => (
        <Cheesecake key={index} cheesecale={torta} />
      ))}
    </PizzaGridStyles>
  )
}

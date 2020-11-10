import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

function Cheesecake({ cheesecale }) {
  return (
    <div>
      <Link to={`/cheesecake/${cheesecale.slug.current}`}>
        <h2> {cheesecale.name}</h2>
        <p>{cheesecale.category.map(categoria => categoria.name)}</p>
        <Img fluid={cheesecale.image.asset.fluid} alt={cheesecale.name} />
      </Link>
    </div>
  )
}
export default function CheesecakeList({ cheesecakes }) {
  return (
    <div>
      {cheesecakes.map(torta => (
        <Cheesecake key={torta.id} cheesecale={torta} />
      ))}
    </div>
  )
}

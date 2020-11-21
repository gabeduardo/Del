import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NavStyles = styled.nav`
  margin-bottom: 3rem;

  ul {
    text-align: center;
    list-style: none;
    grid-gap: 2rem;
    align-items: center;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;

    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: 1.5deg;
    }
    &:nth-child(3) {
      --rotate: 0deg;
    }
    &:nth-child(4) {
      --rotate: 3deg;
    }
    &:hover {
      --rotate: -3.5deg;
      color: var(--red);
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    display:block &:hover {
      color: var(--red);
    }

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }

  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
  }
`

export default function Nav() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      fileName: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 112) {
            # Specify a fixed image and fragment.
            # The default width is 400 pixels
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cheesecake/">Catálogo</Link>
        </li>
        <li className="logo-item">
          <Link to="/">
            <Img fixed={data.fileName.childImageSharp.fixed} />
          </Link>
        </li>
        <li>
          <Link to="/contacto/">Contacto</Link>
        </li>
        <li>
          <Link to="/order/">Realizar un pedido</Link>
        </li>
      </ul>
    </NavStyles>
  )
}

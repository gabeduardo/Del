import React from 'react'
import { Link } from 'gatsby'
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
      --rotate: 2deg;
    }
    &:hover {
      --rotate: 3.5deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/cheesecake/">Inicio</Link>
        </li>
        <li>
          <Link to="/cheesecake/">Cheesecakes</Link>
        </li>
        <li>
          <Link to="/cheesecake/">LOGO</Link>
        </li>
        <li>
          <Link to="/coffee/">Café</Link>
        </li>
        <li>
          <Link to="/coffee/">Realizar un pedido</Link>
        </li>
      </ul>
    </NavStyles>
  )
}

import React from 'react'
import styled from 'styled-components'
import './layout.css'
import Footer from './Footer'
import Nav from './Nav'
import GlobalStyles from '../styles/globalStyles'
import 'normalize.css'

import stripes from '../assets/images/stripe.svg'

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 8rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 8rem);
  /* background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.5),
    rgba(255, 0, 0, 1)
  ); */
  /* white para que no sea transparente */
  background: white url(${stripes});
  background-size: 1500px;
  padding: 5px;
  /* aca es donde se crea el efecto carta centrado con los 25px */
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;

  /* para que siempre tenga un pequeño margen a ambos lados */
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`

const ContentSTyles = styled.div`
  background: white;
  padding: 2rem;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <SiteBorderStyles>
        <ContentSTyles>
          <Nav />
          {children}
          <Footer />
        </ContentSTyles>
      </SiteBorderStyles>
    </>
  )
}

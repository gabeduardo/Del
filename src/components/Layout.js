import React from 'react'

import './layout.css'
import Footer from './Footer'
import Nav from './Nav'
import GlobalStyles from '../styles/globalStyles'
import 'normalize.css'
import styled from 'styled-components'

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);

  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
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

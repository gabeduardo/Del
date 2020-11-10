import React from 'react'

import './layout.css'
import Footer from './Footer'
import Nav from './Nav'
import GlobalStyles from '../styles/globalStyles'
import 'normalize.css'

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

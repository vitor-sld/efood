import React from 'react'
import Header from './Components/Header'
import GlobalStyles from './styles'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

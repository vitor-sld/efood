import React from 'react'
import Header from './Components/Header'
import GlobalStyles from './styles'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'
import Modal from './Components/Modal'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
      </BrowserRouter>
      <Footer />
      <Modal />
    </>
  )
}

export default App

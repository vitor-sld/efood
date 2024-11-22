import React from 'react'
import Header from './Components/Header'
import GlobalStyles from './styles'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer'
import { store } from './store'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'
import Modal from './Components/Modal'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
      </BrowserRouter>
      <Footer />
      <Modal />
    </Provider>
  )
}

export default App

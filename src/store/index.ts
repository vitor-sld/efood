import api from '../services/api'
import cart from './reducer/cart'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cartReducer: cart,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

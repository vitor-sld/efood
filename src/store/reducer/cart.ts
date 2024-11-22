import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RestaurantsList = {
  cartList: PropsProduct[]
  modalRestaurant: PropsProduct | null
  isCartOpen: boolean
}

const initialState: RestaurantsList = {
  cartList: [],
  modalRestaurant: null,
  isCartOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addModal: (state, action: PayloadAction<PropsProduct>) => {
      const temp = action.payload
      if (temp != null) {
        state.modalRestaurant = temp
        console.log(state.modalRestaurant)
      }
    },
    closeModal: (state) => {
      state.modalRestaurant = null
    },
    addCart: (state, action: PayloadAction<PropsProduct>) => {
      const findIndex = state.cartList?.findIndex(
        (item) => item.id == action.payload.id
      )

      if (findIndex == -1) {
        state.cartList?.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    removeCart: (state, action: PayloadAction<PropsProduct>) => {
      const newState = state.cartList.filter(
        (item) => item.id != action.payload.id
      )

      state.cartList = newState
    }
  }
})

export const { addModal, closeModal, addCart, toggleCart, removeCart } =
  cartSlice.actions
export default cartSlice.reducer

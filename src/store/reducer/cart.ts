import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PurchaseStepsType = {
  step: 'cart' | 'address' | 'card' | 'thankspage'
}

type RestaurantsList = {
  cartList: PropsProduct[]
  modalRestaurant: PropsProduct | null
  isCartOpen: boolean
  step: 'cart' | 'address' | 'card' | 'thankspage'
}

const initialState: RestaurantsList = {
  cartList: [],
  modalRestaurant: null,
  isCartOpen: false,
  step: 'cart'
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
    },
    purchaseSteps: (state, action: PayloadAction<PurchaseStepsType>) => {
      state.step = action.payload.step
    },
    clear: (state) => {
      state.cartList = []
    }
  }
})

export const {
  addModal,
  closeModal,
  addCart,
  toggleCart,
  removeCart,
  purchaseSteps,
  clear
} = cartSlice.actions
export default cartSlice.reducer

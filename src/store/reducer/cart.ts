import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RestaurantsList = {
  restaurante: Restaurant[] | null
  modalRestaurant: PropsProduct | null
}

const initialState: RestaurantsList = {
  restaurante: null,
  modalRestaurant: null
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
    }
  }
})

export const { addModal, closeModal } = cartSlice.actions
export default cartSlice.reducer

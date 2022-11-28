import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    sortProperty: 'desc'
  }
}

export const  filterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =  filterSlice.actions

export default  filterSlice.reducer
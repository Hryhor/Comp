import { configureStore } from '@reduxjs/toolkit'
import  filterSlice from './slices/filterSlice';
import cart from './slices/cartSclice';

export const store = configureStore({
  reducer: {
    search: filterSlice,
    cart,
  },
})
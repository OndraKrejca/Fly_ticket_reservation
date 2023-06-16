import { configureStore } from '@reduxjs/toolkit'
import chooseFly from './feautures/cart'
import flyticket from './feautures/flyticket'

export const store = configureStore({
  reducer: {
    products: chooseFly,
    ticket: flyticket,
  },
})

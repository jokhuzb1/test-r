import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '../features/pages/pagesSlice'
export const store = configureStore({
  reducer: {pages:pageReducer},
})
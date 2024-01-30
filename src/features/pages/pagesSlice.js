import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'home',
}

export const pagesSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
   
    updatePage: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updatePage } = pagesSlice.actions

export default pagesSlice.reducer
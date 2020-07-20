import { createSlice } from '@reduxjs/toolkit'

const dayEditorSlice = createSlice({
  name: 'editingDay',
  initialState: {
    day: null
  },
  reducers: {
    update: (state, action) => {
      console.log('Updating', state.day, action.payload)
      state.day = {...state.day, ...action.payload}
    }
  }
})

export const editingDay = state => state.editingDay.day
export const { update } = dayEditorSlice.actions
export default dayEditorSlice.reducer

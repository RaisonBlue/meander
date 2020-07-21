import { createSlice } from '@reduxjs/toolkit'

const dayEditorSlice = createSlice({
  name: 'editingDay',
  initialState: {
    day: null
  },
  reducers: {
    update: (state, action) => {
      state.day = {...state.day, ...action.payload}
    },
    addPhoto: (state, action) => {
      state.day.photos.push(action.payload)
    },
    removePhoto: (state, action) => {
      state.day.photos = state.day.photos.filter(p => p.id === action.payload.id)
    }
  }
})

export const editingDay = state => state.editingDay.day
export const { update, addPhoto } = dayEditorSlice.actions
export default dayEditorSlice.reducer

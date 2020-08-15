import { configureStore } from '@reduxjs/toolkit'
import currentDaySlice from './current-day'
import dayEditorSlice from './editing-day'

export default configureStore({
  reducer: {
    currentDay: currentDaySlice,
    editingDay: dayEditorSlice
  }
})

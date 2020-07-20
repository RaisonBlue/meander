import { createSlice } from '@reduxjs/toolkit'

const navigatorSlice = createSlice({
  name: 'currentDay',
  initialState: {
    days: [],
    current: { id: -1, location: 'Loading', date: '00.00.0000' }
  },
  reducers: {
    next: (state) => {
      const currentIndex = state.days.findIndex(d => d.id === state.current.id)
      state.current = navigateTo(state.days, currentIndex, currentIndex - 1)
      return state
    },

    previous: (state) => {
      const currentIndex = state.days.findIndex(d => d.id === state.current.id)
      state.current = navigateTo(state.days, currentIndex, currentIndex + 1)
      return state
    },

    resetList: (state, action) => {
      if (!Array.isArray(action.payload))
        throw { name: 'BAD_DAY_LIST', message: 'Not an array', extraInfo: action.payload }

      state.days = action.payload.length > 0 ? action.payload.sort(orderByDateDesc) : [{}]
      state.current = navigateTo(state.days, 0, 0)
    }
  }
})

const orderByDateDesc = (a, b) => {
  switch(true) {
    case !a:
      return 1
    case !b:
      return 1
    case a.date > b.date :
      return -1
    case a.date === b.date :
      return 0
    case a.date < b.date :
      return 1
  }
}

const navigateTo = (days, currentIndex, targetIndex) => {
  switch (true) {
    case days.length === 0:
      return null
    case currentIndex === -1:
      return days[0]
    case targetIndex < 0:
      return days[0]
    case targetIndex === days.length:
      return days[currentIndex]
    default:
      return days[targetIndex]
  }
}

export const currentDay = state => state.currentDay.current
export const { next, previous, resetList } = navigatorSlice.actions
export default navigatorSlice.reducer

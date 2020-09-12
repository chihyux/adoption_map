import { combineReducers, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: [],
    count: 0,
    isFetching: false,
    error: null,
  },
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
})

const rootReducer = combineReducers({
  count: counterSlice.reducer,
})

export default rootReducer

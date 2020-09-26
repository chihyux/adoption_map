import { combineReducers } from 'redux'
import axios from 'axios'
import { urlToRequest } from '../api/api'
import sizeDetectionReducer from './sizeDetectionReducer'

let initialState = {
  searchData: [],
  isFetching: false,
  isFetchingError: false,
}

const IS_FETCHING = 'IS_FETCHING'
const IS_ERROR = 'IS_ERROR'
const GET_DATA = 'GET_DATA'
const ADD_DATA = 'ADD_DATA'

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING: {
      return { ...state, isFetching: action.payload }
    }
    case GET_DATA: {
      return { ...state, searchData: action.payload }
    }
    case IS_ERROR: {
      return { ...state, isFetchingError: action.payload }
    }
    case ADD_DATA: {
      let more = state.searchData.concat(action.payload)
      return {
        ...state,
        searchData: [...state.searchData, ...action.payload],
      }
    }
    default: {
      return state
    }
  }
}

const rootReducer = combineReducers({
  dataStatus: dataReducer,
  device: sizeDetectionReducer,
})

//actions
export const fetchData = (route, params, top, skip) => {
  return async (dispatch) => {
    dispatch({ type: IS_FETCHING, payload: true })
    try {
      if (route && params) {
        const newUrl = `${urlToRequest}/${route}/${params}`
        const result = await axios.get(newUrl)
        dispatch({ type: GET_DATA, payload: result.data })
        dispatch({ type: IS_FETCHING, payload: false })
      } else {
        const count = `$top=${top}&$skip=${skip}`
        const url = `${urlToRequest}/${count}`
        const result = await axios.get(url)
        dispatch({ type: GET_DATA, payload: result.data })
        dispatch({ type: IS_FETCHING, payload: false })
      }
    } catch {
      dispatch({ type: IS_ERROR, payload: true })
      dispatch({ type: IS_FETCHING, payload: false })
    }
  }
}

export const addData = (top, skip) => {
  return async (dispatch) => {
    dispatch({ type: IS_FETCHING, payload: true })
    try {
      const count = `$top=${top}&$skip=${skip}`
      const url = `${urlToRequest}/${count}`
      const result = await axios.get(url)
      dispatch({ type: ADD_DATA, payload: result.data })
      dispatch({ type: IS_FETCHING, payload: false })
    } catch {
      dispatch({ type: IS_ERROR, payload: true })
      dispatch({ type: IS_FETCHING, payload: false })
    }
  }
}

export default rootReducer

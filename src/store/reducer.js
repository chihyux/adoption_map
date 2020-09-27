import { combineReducers } from 'redux'
import axios from 'axios'
import { urlToRequest } from '../api/api'
import sizeDetectionReducer from './sizeDetectionReducer'

let initialState = {
  petData: [],
  searchData: [],
  isFetching: false,
  isFetchingError: false,
  top: 10,
  skip: 0,
}

const IS_FETCHING = 'IS_FETCHING'
const IS_ERROR = 'IS_ERROR'
const GET_DATA = 'GET_DATA'
const SEARCH_DATA = 'SEARCH_DATA'
const DATA_MEMO = 'DATA_MEMO'
const RESET_DATA_MEMO = 'RESET_DATA_MEMO'

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING: {
      return { ...state, isFetching: action.payload }
    }
    case GET_DATA: {
      return { ...state, petData: [...state.petData, ...action.payload] }
    }
    case IS_ERROR: {
      return { ...state, isFetchingError: action.payload }
    }
    case SEARCH_DATA: {
      return {
        ...state,
        petData: [],
        skip: 0,
        searchData: [...state.petData, ...action.payload],
      }
    }
    case DATA_MEMO: {
      let count = state.skip + action.payload
      return { ...state, skip: count }
    }
    case RESET_DATA_MEMO: {
      return { ...state, skip: 0 }
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
        const newUrl = `${urlToRequest}/${route}/${params}&$top=${top}&$skip=${skip}`
        const result = await axios.get(newUrl)
        dispatch({ type: SEARCH_DATA, payload: result.data })
        dispatch({ type: IS_FETCHING, payload: false })
      } else {
        const count = `$top=${top}&$skip=${skip}`
        const url = `${urlToRequest}/${count}`
        const result = await axios.get(url)
        dispatch({ type: GET_DATA, payload: result.data })
        dispatch({ type: IS_FETCHING, payload: false })
      }
    } catch (err) {
      dispatch({ type: IS_ERROR, payload: err.message })
      dispatch({ type: IS_FETCHING, payload: false })
    }
  }
}

export const dataMemo = (num) => {
  return {
    type: DATA_MEMO,
    payload: num,
  }
}

export default rootReducer

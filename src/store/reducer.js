import { combineReducers } from 'redux'
import axios from 'axios'

let initialState = {
  searchData: [],
  isFetching: false,
  isFetchingError: false,
}

const IS_FETCHING = 'IS_FETCHING'
const IS_ERROR = 'IS_ERROR'
const GET_DATA = 'GET_DATA'

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
    default: {
      return state
    }
  }
}

const rootReducer = combineReducers({
  dataStatus: dataReducer,
})

//actions
const serverUrl = 'http://localhost:3001'
export const fetchData = (route, params) => {
  return async (dispatch) => {
    dispatch({ type: IS_FETCHING, payload: true })
    try {
      if (route && params) {
        console.log('redux has route')
        const newUrl = `${serverUrl}/${route}/${params}`
        const result = await axios.get(newUrl)
        dispatch({ type: GET_DATA, payload: result.data })
        dispatch({ type: IS_FETCHING, payload: false })
      } else {
        console.log('redux no route')
        const result = await axios.get(serverUrl)
        dispatch({ type: GET_DATA, payload: result.data })
        dispatch({ type: IS_FETCHING, payload: false })
      }
    } catch {
      dispatch({ type: IS_ERROR, payload: true })
      dispatch({ type: IS_FETCHING, payload: false })
    }
  }
}
export default rootReducer

import { instance } from '../api/api'

let initialState = {
  petData: [],
  resourceData: [],
  isFetching: false,
  isFetchingError: false,
  query: {
    route: '/info',
    params: {
      UnitId: 'QcbUEzN6E6DL',
      animal_status: 'OPEN',
      $top: 10,
      $skip: 0,
      animal_kind: undefined,
      animal_area_pkid: undefined,
    },
  },
}

const UPDATE_QUERY = 'UPDATE_QUERY'
const IS_FETCHING = 'IS_FETCHING'
const IS_ERROR = 'IS_ERROR'
const GET_DATA = 'GET_DATA'
const GET_RESOURCE_DATA = 'GET_RESOURCE_DATA'
const DATA_MEMO = 'DATA_MEMO'
const RESET_DATA = 'RESET_DATA'

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY: {
      return { ...state, query: action.payload }
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.payload }
    }
    case GET_DATA: {
      return { ...state, petData: [...state.petData, ...action.payload] }
    }
    case IS_ERROR: {
      return { ...state, isFetchingError: action.payload }
    }
    case GET_RESOURCE_DATA: {
      return { ...state, resourceData: action.payload }
    }
    case DATA_MEMO: {
      let count = state.query.params.$skip + action.payload
      return {
        ...state,
        query: {
          route: state.query.route,
          params: { ...state.query.params, $skip: count },
        },
      }
    }
    case RESET_DATA: {
      return { ...state, petData: [] }
    }
    default: {
      return state
    }
  }
}

//actions
export const updateQuery = (query) => {
  return {
    type: UPDATE_QUERY,
    payload: query,
  }
}

export const fetchData = ({ route, params }) => {
  return async (dispatch) => {
    dispatch({ type: IS_FETCHING, payload: true })
    try {
      if (route === '/resource') {
        const { data } = await instance(route, { params })
        dispatch({ type: GET_RESOURCE_DATA, payload: data })
        dispatch({ type: IS_FETCHING, payload: false })
      } else {
        const { data } = await instance(route, { params })
        dispatch({ type: GET_DATA, payload: data })
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

export const reset = () => {
  return {
    type: RESET_DATA,
  }
}

let initialState = {
  isSmallSize: false,
}

const IS_SMALL_SIZE = 'IS_SMALL_SIZE'

const sizeDetectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SMALL_SIZE: {
      return { ...state, isSmallSize: action.payload }
    }
    default: {
      return state
    }
  }
}

export default sizeDetectionReducer

//action
export const detectSize = (payload) => {
  return {
    type: IS_SMALL_SIZE,
    payload,
  }
}

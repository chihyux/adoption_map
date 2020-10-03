let initialState = {
  isSmallSize: false,
  bodyHeight: null,
}

const IS_SMALL_SIZE = 'IS_SMALL_SIZE'
const DETECT_BODY_HEIGHT = 'DETECT_BODY_HEIGHT'

export const sizeDetectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SMALL_SIZE: {
      return { ...state, isSmallSize: action.payload }
    }
    case DETECT_BODY_HEIGHT: {
      return { ...state, bodyHeight: action.payload }
    }
    default: {
      return state
    }
  }
}

//action
export const detectSize = (payload) => {
  return {
    type: IS_SMALL_SIZE,
    payload,
  }
}

export const detectHeight = (height) => {
  return {
    type: DETECT_BODY_HEIGHT,
    payload: height,
  }
}

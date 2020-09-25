let initialState = {
  isSmallSize: false,
  bodyHeight: null,
  infinityScrollParams: {
    top: '50',
    skip: '0',
  },
}

const IS_SMALL_SIZE = 'IS_SMALL_SIZE'
const IS_SCROLL_TO_BUTTON = 'IS_SCROLL_TO_BUTTON'
const DETECT_BODY_HEIGHT = 'DETECT_BODY_HEIGHT'

const sizeDetectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SMALL_SIZE: {
      return { ...state, isSmallSize: action.payload }
    }
    case DETECT_BODY_HEIGHT: {
      return { ...state, bodyHeight: action.payload }
    }
    case IS_SCROLL_TO_BUTTON: {
      return {
        ...state,
        infinityScrollParams: {
          top: action.payload.top,
          skip: action.payload.skip,
        },
      }
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

export const detectHeight = (height) => {
  return {
    type: DETECT_BODY_HEIGHT,
    payload: height,
  }
}

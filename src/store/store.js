import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { sizeDetectionReducer } from './sizeDetectionReducer'

const rootReducer = combineReducers({
  dataStatus: dataReducer,
  device: sizeDetectionReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

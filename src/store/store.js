import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store

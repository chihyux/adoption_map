import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import IndexPage from './features/index'

ReactDOM.render(
  <Provider store={store}>
    <IndexPage />
  </Provider>,
  document.getElementById('root')
)

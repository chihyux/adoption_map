import React from 'react'
import IndexPage from './features/index'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <IndexPage />
      </Provider>
    </React.Fragment>
  )
}

export default App

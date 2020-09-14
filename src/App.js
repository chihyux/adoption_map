import React from 'react'
import './index.css'
import IndexPage from './features/index'
import Navbar from './components/navbar/index'
import { BodyWrapper } from './features/style/app'

const App = () => {
  return (
    <>
      <Navbar />
      <BodyWrapper>
        <IndexPage />
      </BodyWrapper>
    </>
  )
}

export default App

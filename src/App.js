import React from 'react'
import './index.css'
import Navbar from './components/navbar/index'
import { BodyWrapper } from './features/adoptionInfo/style/app'
import Body from './features'

const App = () => {
  return (
    <>
      <Navbar />
      <BodyWrapper>
        <Body />
      </BodyWrapper>
    </>
  )
}

export default App

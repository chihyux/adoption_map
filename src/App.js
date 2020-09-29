import React from 'react'
import './index.css'
import IndexPage from './features/adoptionInfo/index'
import Navbar from './components/navbar/index'
import { BodyWrapper } from './features/adoptionInfo/style/app'
import Body from './features'

const App = () => {
  return (
    <>
      <Navbar />
      <BodyWrapper>
        {/* <IndexPage /> */}
        <Body />
      </BodyWrapper>
    </>
  )
}

export default App

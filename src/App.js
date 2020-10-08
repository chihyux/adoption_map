import React from 'react'
import Navbar from './components/navbar/index'
import { BodyWrapper } from './features/adoptionInfo/style/app'
import Body from './features'
import GlobalStyle from './globalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BodyWrapper>
        <Body />
      </BodyWrapper>
    </>
  )
}

export default App

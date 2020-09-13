import React from 'react'
import './index.css'
import IndexPage from './features/index'
import Navbar from './components/navbar/index'
import { BodyWrapper } from './features/style/app'

const App = () => {
  return (
    <>
      <Navbar>
        <a href="/">認養寵物</a>
        <a href="/">各地數量</a>
        <a href="/">寵物遺失啟示</a>
      </Navbar>
      <BodyWrapper>
        <IndexPage />
      </BodyWrapper>
    </>
  )
}

export default App

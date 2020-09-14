import React from 'react'
import { NavBarWrapper } from './style/navbar'
import Menu from './menu'

const Navbar = () => {
  return (
    <NavBarWrapper>
      <Menu>
        <span>認養寵物</span>
        <span>各地數量</span>
        <span>寵物遺失啟示</span>
      </Menu>
    </NavBarWrapper>
  )
}

export default Navbar

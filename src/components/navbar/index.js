import React from 'react'
import { NavBarWrapper } from './style/navbar'

const Navbar = (props) => {
  return <NavBarWrapper>{props.children}</NavBarWrapper>
}

export default Navbar

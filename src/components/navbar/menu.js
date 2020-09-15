import React from 'react'
import { MenuWrapper, MenuInner } from './style/menu'

const Menu = (props) => {
  return (
    <MenuWrapper toggle={props.toggle} small={props.isSmallSize}>
      <MenuInner small={props.isSmallSize}>{props.children}</MenuInner>
    </MenuWrapper>
  )
}

export default Menu

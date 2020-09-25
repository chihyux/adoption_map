import React, { useState } from 'react'
import { NavBarWrapper } from './style/navbar'
import Menu from './menu'
import { useDetection } from '../../hooks/useDetection'
import { MobileBtn } from './style/menu'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const { isSmallSize } = useDetection()
  if (isSmallSize && !toggle) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
  return (
    <NavBarWrapper small={isSmallSize}>
      <Menu toggle={toggle} isSmallSize={isSmallSize}>
        <span>認養寵物</span>
        <span>各地數量</span>
        <span>寵物遺失啟示</span>
      </Menu>
      {isSmallSize && (
        <MobileBtn
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          =
        </MobileBtn>
      )}
    </NavBarWrapper>
  )
}

export default Navbar

import React, { useState } from 'react'
import { useDetection } from '../../hooks/useDetection'
import { MenuWrapper } from './style/menu'

const Menu = (props) => {
  const [toggle, setToggle] = useState(true)
  const { isSmallSize } = useDetection()

  return (
    <>
      <MenuWrapper toggle={toggle}>{props.children}</MenuWrapper>
      {isSmallSize && <button onClick={() => setToggle(!toggle)}>=</button>}
    </>
  )
}

export default Menu

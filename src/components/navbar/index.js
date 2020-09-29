import React, { useState } from 'react'
import { NavBarWrapper } from './style/navbar'
import Menu from './menu'
import { useDetection } from '../../hooks/useDetection'
import { MobileBtn } from './style/menu'
import { Link, NavLink } from 'react-router-dom'
import menuData from '../../constant/menu.json'

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
        {menuData.map((link) => {
          return (
            <NavLink
              to={link.route}
              exact
              className="navbar__link"
              activeClassName="navbar__link--active"
              key={link.name}
            >
              {link.name}
            </NavLink>
          )
        })}
        {/* <Link to="/">認養寵物</Link>
        <span>各地數量</span>
        <span>寵物遺失啟示</span> */}
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

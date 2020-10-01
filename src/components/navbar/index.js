import React, { useState } from 'react'
import { NavBarWrapper } from './style/navbar'
import Menu from './menu'
import { useDetection } from '../../hooks/useDetection'
import { MobileBtn } from './style/menu'
import { NavLink } from 'react-router-dom'
import { routes } from '../../constant/routes'

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
        {routes.map((link) => {
          return (
            <NavLink
              onClick={() => setToggle(true)}
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

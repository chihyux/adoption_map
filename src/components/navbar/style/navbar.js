import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  background-color: #f7b900;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 1em;
  justify-content: flex-end;
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.5em;
    margin: 0 15px;
    transition: 0.5s;
    &:hover {
      transform: translate(0, -5px);
    }
  }
`

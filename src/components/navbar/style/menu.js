import styled from 'styled-components'

export const MenuWrapper = styled.div`
  ${(props) => {
    if (props.small) {
      if (props.toggle) {
        return `
        display:none;
      `
      } else {
        return `
        display:block;
        position: absolute;
        background-color: green;
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
        z-index: 2;
      `
      }
    }
  }}
`

export const MenuInner = styled.div`
  ${(props) => {
    if (props.small) {
      return `
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    span {
      padding: 1em 0;
    }
  `
    }
  }}
`

export const MobileBtn = styled.button`
  z-index: 3;
  position: fixed;
  top: 1.5rem;
  border: none;
  right: 2rem;
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 1rem 1.5rem;
  background: #f7b900;
`

import styled from 'styled-components'

export const MenuWrapper = styled.div`
  ${(props) => {
    if (props.toggle) {
      return `
      display:block;
      `
    } else {
      return `
      display:none;
      `
    }
  }}
`

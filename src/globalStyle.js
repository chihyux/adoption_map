import { createGlobalStyle } from 'styled-components'
import openhuninn from '../src/assets/font/jf-openhuninn-1.1.ttf'
import { css } from 'styled-components'

const deviceSizes = {
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 580,
}

export const media = Object.keys(deviceSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${deviceSizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'jf-openhuninn';
    src: url(${openhuninn});
}

 body {
    margin: 0;
    padding: 0;
 }

 :root {
    font-family: 'jf-openhuninn' ,'Arial',sans-serif;
    :focus {
        outline: 0px;
    }

    a:-webkit-any-link {
        color: #333333;
        text-decoration: none;
        cursor: pointer;
    }

    .no-scroll {
    overflow: hidden;
    }
 }

`

export default GlobalStyle

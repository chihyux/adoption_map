import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(0 0 0 / 0.6);
  left: 0;
  top: 0;
  z-index: 4;
  img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const BoxLoadingImg = styled.img`
  width: 50%;
`

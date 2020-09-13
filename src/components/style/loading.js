import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(0 0 0 / 0.2);
  left: 0;
  top: 0;
  img {
    width: 10vw;
    height: 10vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const BoxLoadingImg = styled.img`
  width: 50%;
`

import styled from 'styled-components'

export const MapWrapper = styled.div`
  width: 100%;
  height: calc(100% - 35px);
`

export const PopWrapper = styled.div`
  width: 80%;
  height: 50%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: #f7b900;
  padding: 5px 10px;
  span {
    color: #ffffff;
    font-size: 1.2rem;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    width: 35rem;
    height: 35rem;
  }
`
export const MarkerWrapper = styled.div`
  position: relative;
`
export const MarkerInfo = styled.div`
  width: 15rem;
  background: rgb(255 255 255 / 0.6);
  border-radius: 1rem;
  padding: 10px;
  position: absolute;
  right: 0;
  top: -50%;
`

export const MarkerIcon = styled.img`
  @keyframes Moving {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  animation: Moving 1s ease infinite alternate;
  &:hover {
    cursor: pointer;
  }
`

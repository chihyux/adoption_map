import styled from 'styled-components'

export const AnimalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
`
export const ImgWrapper = styled.div`
  width: calc(100% / 2 - 10px);
  margin: 0px 5px 20px 5px;
  overflow: hidden;
  background-color: #f1f1f1;
  box-shadow: 2px 2px 7px 0px rgb(0 0 0 / 0.3);
  @media (min-width: 580px) {
    width: calc(100% / 3 - 15px);
  }
  @media (min-width: 768px) {
    width: calc(100% / 4 - 20px);
  }
  @media (min-width: 1024px) {
    width: calc(100% / 5 - 25px);
  }
  .lazyload-wrapper {
    text-align: center;
  }
  img {
    height: 150px;
    &[src$='svg'][alt='貓'] {
      background-color: #fff9b2;
      width: 100%;
    }
    &[src$='svg'][alt='狗'] {
      background-color: #2b6496;
      width: 100%;
    }
  }
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 20px;
  line-height: 1.5;
`

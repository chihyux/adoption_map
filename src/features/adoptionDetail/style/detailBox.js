import styled from 'styled-components'

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const DetailImg = styled.img`
  width: 100%;
  @media (min-width: 1024px) {
    width: 40%;
  }
`

export const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 0;
  @media (min-width: 1024px) {
    width: 60%;
    padding-left: 2rem;
    padding-top: 0;
    line-height: 1.5;
  }
`

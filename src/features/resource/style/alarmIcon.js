import styled from 'styled-components'
import { media } from '../../../globalStyle'

export const CityDataWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  div {
    width: calc(100% / 2 - 50px);
    font-size: 1.25rem;
    padding: 1rem;
    border: 1px solid #eee;
    margin: 5px;
    display: flex;
    flex-direction: column;
    > span:first-child {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.25rem;
    }
    ${media.sm`
      width: calc(100% / 3 - 50px);
    `}
    ${media.md`
      width: calc(100% / 5 - 50px);
    `}
  }
`
export const AlarmIcon = styled.span`
  position: relative;
  padding-right: 15px;
  margin-right: 10px;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: ${(props) => (props.num > 100 ? `red` : `green`)};
  }
`

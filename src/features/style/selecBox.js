import styled from 'styled-components'

export const RadioInput = styled.div`
  input[type='radio'] {
    opacity: 0;
  }
  label {
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
    padding-left: 2rem;
    line-height: 1.8;
  }
  .radio-button {
    height: 1rem;
    width: 1rem;
    border: 5px solid green;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
  }
  .radio-button::after {
    content: '';
    display: block;
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: green;
    opacity: 0;
    transition: opacity 0.2s;
  }
  input:checked + label .radio-button::after {
    opacity: 1;
  }
`
export const SelectBoxWrapper = styled.div`
  h2 {
    width: 100%;
  }
`

export const AreaBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0;
`
export const Button = styled.button`
  font-size: 1.5rem;
  border: none;
  padding: 10px 20px;
  background-color: #f7b900;
  color: #fff;
  border-radius: 10px;
`

import React from 'react'
import { cityNo } from '../apiHelper'
import {
  SelectBoxWrapper,
  AreaBoxWrapper,
  RadioInput,
  Button,
  ButtonWrapper,
} from './style/selecBox'

const SelectBox = ({
  handleAreaChange,
  handleCategoryChange,
  handleSubmit,
}) => {
  return (
    <SelectBoxWrapper>
      <RadioInput>
        <h2>種類</h2>
        <input
          key="cat"
          type="radio"
          id="cat"
          name="category"
          value="貓"
          onChange={(e) => handleCategoryChange(e)}
        />
        <label htmlFor="cat">
          <span className="radio-button"></span>貓
        </label>
        <input
          key="dog"
          type="radio"
          id="dog"
          name="category"
          value="狗"
          onChange={(e) => handleCategoryChange(e)}
        />
        <label htmlFor="dog">
          <span className="radio-button"></span>狗
        </label>
      </RadioInput>
      <AreaBoxWrapper>
        <h2>地區</h2>
        {Object.values(cityNo).map((city, i) => {
          return (
            <RadioInput>
              <input
                type="radio"
                key={i}
                id={city}
                name="city"
                value={city}
                onChange={handleAreaChange}
              />
              <label htmlFor={city}>
                <span className="radio-button"></span>
                {city}
              </label>
            </RadioInput>
          )
        })}
      </AreaBoxWrapper>
      <ButtonWrapper>
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </ButtonWrapper>
    </SelectBoxWrapper>
  )
}

export default SelectBox

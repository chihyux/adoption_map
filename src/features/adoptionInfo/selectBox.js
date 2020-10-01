import React from 'react'
import { cityNo } from '../../constant/apiHelper'
import {
  SelectBoxWrapper,
  AreaBoxWrapper,
  RadioInput,
  Button,
  ButtonWrapper,
} from './style/selecBox'
import Input from '../../components/input'

const SelectBox = ({
  handleAreaChange,
  handleCategoryChange,
  handleSubmit,
}) => {
  return (
    <SelectBoxWrapper>
      <RadioInput>
        <h2>種類</h2>
        <Input
          key="cat"
          id="cat"
          name="category"
          value="貓"
          handleChange={handleCategoryChange}
          htmlfor="cat"
          text="貓"
        />
        <Input
          key="dog"
          id="dog"
          name="category"
          value="狗"
          handleChange={handleCategoryChange}
          htmlfor="dog"
          text="狗"
        />
      </RadioInput>
      <AreaBoxWrapper>
        <h2>地區</h2>
        {Object.values(cityNo).map((city, i) => {
          return (
            <RadioInput key={i}>
              <Input
                id={city}
                name="city"
                value={city}
                handleChange={handleAreaChange}
                htmlfor={city}
                text={city}
              />
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

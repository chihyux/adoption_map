import React from 'react'
import { cityNo } from '../apiHelper'

const SelectBox = ({
  category,
  area,
  route,
  params,
  handleAreaChange,
  handleCategoryChange,
  handleSubmit,
}) => {
  return (
    <form>
      <div>
        <h3>種類</h3>
        <input
          key="cat"
          type="radio"
          id="cat"
          name="category"
          value="貓"
          onChange={(e) => handleCategoryChange(e)}
        />
        <label htmlFor="cat">貓</label>
        <input
          key="dog"
          type="radio"
          id="dog"
          name="category"
          value="狗"
          onChange={(e) => handleCategoryChange(e)}
        />
        <label htmlFor="dog">狗</label>
      </div>
      <div>
        <h3>地區</h3>

        {Object.values(cityNo).map((city, i) => {
          return (
            <>
              <input
                type="radio"
                key={i}
                id={city}
                name="city"
                value={city}
                onChange={handleAreaChange}
              />
              <label htmlFor={city}>{city}</label>
            </>
          )
        })}
      </div>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  )
}

export default SelectBox

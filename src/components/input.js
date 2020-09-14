import React from 'react'

const Input = (props) => {
  return (
    <>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
      <label htmlFor={props.htmlfor}>
        <span className="radio-button"></span>
        {props.text}
      </label>
    </>
  )
}

export default Input

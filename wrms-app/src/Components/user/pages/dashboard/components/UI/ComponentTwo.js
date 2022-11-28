import React from 'react'
import "./ComponentTwo.css"

const ComponentTwo = (props) => {
  return (
    <div className="component-two">
        {props.children}
    </div>
  )
}

export default ComponentTwo

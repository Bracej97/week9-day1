import React from 'react'

const Students = (props) => {

  return (
    <div>
        The current student is: {props.name}<br></br>
        Their age is: {props.age}
        </div>
  )
}

export default Students

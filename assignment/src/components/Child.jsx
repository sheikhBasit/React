import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
  return (
    <>
        <div>Child</div>
        <h1>props first value is {props.myChildName}</h1>
        <h1>props second value is {props.schoolName}</h1>
        <GrandChild />
    </>
  )
}

export default Child
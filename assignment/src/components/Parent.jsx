import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <>
      <div>Parent</div>
      <Child
        myChildName = "Child"
        schoolName = "School"
      />
    </>
  )
}

export default Parent
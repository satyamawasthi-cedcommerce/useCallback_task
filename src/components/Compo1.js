import React, { memo } from 'react'

function Compo1(props) {
  console.log("component1");
  return (
    <div className='c1'>
    <p>Component 1</p>
        <input type="text" onChange={(event) => props.setVal1(event.target.value)}/>
    </div>
  )
}

export default memo(Compo1)
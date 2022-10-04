import React, { memo } from 'react'

function Compo3(props) {
  console.log("component3");

  return (
    <div className='c3'>
      <p>Component 3</p>
      Value:{props.value2}</div>
  )
}

export default memo(Compo3)
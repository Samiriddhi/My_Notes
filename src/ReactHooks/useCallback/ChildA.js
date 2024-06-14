import React, { memo } from 'react'

function ChildA({Learning}) {
    console.log("child component");
  return (
    <div>
        {/* <h1>ChildA</h1> */}
    </div>
  )
}

export default memo(ChildA)
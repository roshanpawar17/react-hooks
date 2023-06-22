/* ======================= count chat ==================== */

import React, { useEffect, useState } from 'react'

function UseEffect1() {

    const [count, setCount]=useState(0)

    useEffect(()=>{
        if(count>=1){
            document.title=`chat (${count})`
        }else{
            document.title=`chat` 
        }
    },[count])

    function btnClick(){
        setCount(count+1)
    }

  return (
    <>
      <h1>{count}</h1>
      <button className='btn btn-primary' onClick={btnClick}>Click</button>
    </>
  )
}

export default UseEffect1

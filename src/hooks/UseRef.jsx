import React, { useRef, useState } from 'react'
import { FcApproval } from "react-icons/fc";

function UseRef() {

    const uref=useRef(null)
    const [show,setShow]=useState(false)
    const [value,setValue]=useState()

    function submitForm(e){
        e.preventDefault()
        const value=uref.current.value;
        setValue(value)
        value===""?alert("please fill the details"):setShow(true)
        
        // console.log(value)
    }

  return (
    <div>
       <form onSubmit={submitForm}>
            <input type="text" className='mt-5' ref={uref}/>
            <button>Submit</button>
        </form> 
        <p>{show?`your name is ${value} `:null } </p>
        <h3>I AM VERIFIED <FcApproval/> </h3>
    </div>
  )
}

export default UseRef

import React, { useReducer } from 'react'


let initializer =0
const reducer=(state, action)=>{
    // console.log(state,action)
    if(action.type === "INCREMENT"){
        return state + 1
    }
    if(action.type === "DECREMENT"){
        return state - 1
    }
    
    
}

function UseReducer() {

    const [state, dispatch]=useReducer(reducer, initializer)

  return (
    <>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
    </>
  )
}

export default UseReducer

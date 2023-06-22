import React, { createContext } from 'react'
import ComB from './ComB'

const name=createContext()

function ComA() {
  return (
    <>
        <name.Provider value={"roshan"}>
            <ComB/>
        </name.Provider>
    </>
  )
}

export default ComA
export {name}

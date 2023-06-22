import React, { useContext } from 'react'
import { name } from './ComA'

function ComC() {
    const n=useContext(name)
  return (
    <div>
        <h1>hello {n}</h1>
    </div>
  )
}

export default ComC

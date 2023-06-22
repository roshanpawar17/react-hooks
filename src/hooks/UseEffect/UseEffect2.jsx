/* ======================= resize window width ==================== */

import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [size, setSize] = useState(window.screen.width)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        })

        return (
                window.removeEventListener('resize',()=>{
                    setSize(window.innerWidth)
                })       
        )
    })

    // console.log(window)

    return (
        <>
            <h1>window screen width size</h1>
            <h3>{size}</h3>
        </>
    )
}

export default UseEffect2

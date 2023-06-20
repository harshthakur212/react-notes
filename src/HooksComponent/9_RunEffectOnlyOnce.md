//Mimic ComponentDidMount

import React, {useState, useEffect} from 'react'


function HookMouse (){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component will Unmount')
            window.removeEventListener('mousemove',logMousePositioin)
        }
    }, [])  
    
    //Using an empty string as a parameter to tell react that this should be render only once

    return (
        <div>
            Hooks X - {x} Y - {y}    
        </div>
    )
}

export default HookMouse
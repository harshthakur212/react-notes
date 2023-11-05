//use to access DOM node directly within funcitonal component

//Focusing input field  


import react , {useEffect, useRef} from 'react'

function FocusInput(){
    const inputReft = ueRef(null)

    useEffect(()=> {
        inputRef.current.focus()
    }, [])

    return(
        <div>
            <input ref = {inputRef} type = 'text' />
        </div>
    )
}

export default FocusInput
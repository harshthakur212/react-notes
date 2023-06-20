//Component will Unmount
//Ex: Create a container component for this Hook Mouse, in the container we will simply add a button that will toggle the components visibility


import react, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return(
        <div>
            <button onCLick = {() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
//React portals provide a way to render children into a DOM node that lies outside the DOM hierarchy of the parent Component
//React Portals provide the ability to break out of this DOM tree so we can render a component onto a DOM which is not under this root element  

Step 1: Creating a root DOM node in the index.html

<div id = "portal-root"></div>

step 2: Function 

import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo (){
    return ReactDOM.createPortal(
        <h1>
            Portals demo
        </h1>,
        document.getElemenentById('portal-root')
    )
}

export default PortalDemo
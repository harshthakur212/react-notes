:An important term in React

: Javascript xml (JSX) - Extension to the js language syntax
: Write XML-like code for elements and components.
: JSX tags have a tag name, attribute and children.
: JSX is not a necessity to write React application.
: JSX makes your react code simpler and elegant.
: JSX ultimately transpiles to pure JavaScript which is understood by the browser.


import React from 'react'

const Hello = ()=>{                 
    return(                         // JSX Code
        <div className = "Hello">
        <h1>Hello World </h1>
        </div>
    )

    export default Hello

    return React.createElement(     // Non jsx
    'div',
    {id:"hello", className: 'dummyClass'},
    React.createElement('h1',null, 'Hello')
    )
}

export default Hello



difference : onclick -> onClick
            class --> className
            for --> htmlFor  
            tabindex --> tabIndex
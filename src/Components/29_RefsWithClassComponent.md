//Refs with class Component

//If we want a ref to a child component from a parent component it is possible only if it is a class component. Refs cannot be attached to funcitonal component

import React, {component} from 'react'

class ParentComponent extends Component {
    constructor (props){
        super(props)

        this.inputRef = Rect.createRef()
        }

        focusInput(){
            this.inputRef.current.focus()
        }
    }

    render(){
        return(
            <div>
            <input type = "text" ref = {this.inputRef}>
            </div>
        )
    }
}


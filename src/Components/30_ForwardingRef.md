//Ref forwarding is a technique used for automatically passing a ref through a component to one of its children. 

import React from 'react'

//function FRInput(){
//    return (
//        <div>
//            <input type = "text" />
//        </div>
//    )
//}


const FRInput = React.forwardRef((props,ref) =>
    return(
        <div>
            <input type = "text" ref = {ref}>
        </div>
    ))

export default FRInput


/// Another File

import React, {component} from 'react'

class FRParentInput extends Component {
    constructor (props){
        super(props)
        this.inputRef = React.createRef()
        }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

    }


    render(){
        return(
            <div>
            <FRInput ref={this.inputRef}/>
              <Button onClick = {this.clickHandler}>Focus Input
            </div>
        )
    }
}

export default FRParentInput
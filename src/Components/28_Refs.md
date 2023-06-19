//Refs make it possible to access DOM nodes directly within React
//It is common to create Ref in the constructor so that they can be referrnece throughout the component
// React.createRef()
//Focusing a text input
//Suppose when in a form we want to focus the username field to be focused by default


//RefsDemo.js

import React, {component} from 'react'

class RefsDemo extends Component {

    constructor (props){
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <div>
            <input type = 'text' ref= {this.inputRef}></input>
            <Button onClick = {this.clickHandler}></Button>
            </div>
        )
    }
}

export default RefsDemo
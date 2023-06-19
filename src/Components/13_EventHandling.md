//Handling event in react


/////////////In fucntional component/////////////

import React from 'react'

function FunctionClick(){

function clickHandler(){
        console.log('Button Clicked')
}

    return(
        <div>
            <Button onClick={clickHandler}>Click</Button>  ///Do not add ()
        </div>
    )
}



//////////////In class component///////////////////

import React, {Component} from 'react'

class ClassClick extends Component{
    clickHandler(){
        console.log('Clicked the button')
    }

    render(){
        return(
            <div>
                <Button onClick = {this.clickHandler}>Click Me</Button>
            </div>
        )
    }
}

export default ClassClick
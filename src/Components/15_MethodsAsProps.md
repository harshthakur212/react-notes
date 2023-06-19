///Event Handling in react

//The data available in the parent component is passed as props in the children component. What if a child component wanted to communicate to the parent component, we use props but this time we passing a reference to a method as props to the child component


//Here we doin: We click a button in the child component and the method from parent component get executed
//Here the child component calls the parent component method this is achieved using props, this time the difference is we pass a method itself as a prop to the child component


////////class component(parentComponent)

import React, {component} from 'react'

class ParentComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            parentName : 'parent'
        }

        this.greetParent = this.greetParent.bind(this)

        
        }

        greetParent(childName){
            alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}




///////Functional Component(ChildComponent)


import React from 'react'

function ChildComponent (){
    return (
        <div>
            <Button onClick = {()=>props.greetHandler('Child')}>Greet Parent</Button>
        </div>
    )
}

export default ChildComponent


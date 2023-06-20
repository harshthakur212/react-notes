//Rules

"Only Call Hooks at the top level"
Dont Call Hooks inside loops, conditions or nested functions

"Only Call Hooks from React Functions"
Call them from within React functional components and not just any regular JavaScript function

 //Now we can useState method in funcitonal component
 //Counter in Class component vs Functional Components

 //Counter.js

 import React, {component} from 'react'

class ClassCounter extends Component {
    constructor (props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increamentCount = () {
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        return(
            <div>
            <Button onclick = {this.increamentCount}> Count {this.state.count}
            </Button>
            </div>
        )
    }
}

export default ClassCounter





//HookCounter.js

import React, {useState} from 'react'

function HookCounter (){

    const[count, setCount] = useState(0)

    return (
        <div>
        <Button onClick = { () => setCount(count + 1)}>Count {count}</Button>
        </div>
    )
}

export default HookCounter


import react, {useState} from 'react'

function HookCount (){

    const [count, setCount] = useState(0)

    return (
        <div> 
            <Button onClick={ () => setCount(count +1 )}>Count {count}</Button>
        </div>
    )

}
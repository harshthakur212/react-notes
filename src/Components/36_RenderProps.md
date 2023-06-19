//Another pattern for sharing codes b/w components
//The term "render prop" refers to technique for sharing code between React components using a prop whose value is a funciton

//ClickCounter2.js

import React, {component} from 'react'

class ClickCounter extends Component {
    constructor (props){
        super(props)

        this.state = {
            count : 0
        }
    }

    increamentCount = () => {
        this.setState(prevState) => {
            return { count : prevState.count + 1 }
        }
    }


    render(){
        return(
            <div>
            const count = this.state
            <button onClick = {this.increamentCount}>Clicked {count} times</button>
            </div>
        )
    }
}


export default ClickCounter
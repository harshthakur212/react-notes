//Why there is a need for a thing like HigherOrderComponent
//When we have a counter functionality which can be re-used but gets duplicated, we would be writing the code over and over again
//Lets learn how to make HigherOrderComponent so in next video

import React, {component} from 'react'

class ClickCounter extends Component {

    constructor (props){
        super(props)

        this.state = {
            count:0
        }
    }

    increamentCount = () => {
        this.setState(prevState =>{
            return { count :prevState.count + 1}
        })
    }

    render(){
        return(
            const { count } =this.state
            return <Button onClick = {this.increamentCount}>Clicked {count} times</Button>
        )
    }
}

export default ClickCounter
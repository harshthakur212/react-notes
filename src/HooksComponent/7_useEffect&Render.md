//UseEffect hook is called after every single render

//Use effectHook for cauing sideEffects in React functional component

//Class component example for the problem

//An example to use effectHook as a feature to mimic componentDidMount and componentDidUpdate but in a functional component


///In class Component

import Rect, {Component} from 'react'

class ClassCounterOne extends Component {
    consturctor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        document.title = `Clicked ${this.state.count} times`
    }

    render(){
        return(
            <div>
                <button onClick= {() => this.setState({count:this.setState.count +1})}>
                Click {this.state.count}times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne


/// Using reactHook in functional Component


import React, {useState, useEffect} from 'react'

function HookCounterOne(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return(
        <div>
            <button onClick={() => setCount(count) + 1 }>Click {count} times </button>
        </div>
    )
}

export default HookCounterOne
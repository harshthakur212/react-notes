//In last part we saw there was a need to share common funcitonalities b/w components without repeating the code
//lets talk about what HOC actually are

//An HOC is a pattern where a function takes a component as an arguement and returns a new enhanced component

const NewComponent = higherOrderComponent(originalComponent)
const EnhancedComponent = higherOrderComponent(originalComponent)

const IronMan = withSuit(TonyStark)
                funciton(OriginalComponent)

// How to implement a basic HOC

//App.js
<div>
    <ClickCounter name = "Vishwas"/>
    <HoverCounter/>
</div>

//ClickCounter.js
import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    render(){
        const { count , increamentCount} = this.props
        return(
            <button onCLick = {this.increamentCount}>
            {this.props.name}Clicked {count} times
            </button>
        )
    }
}

export default withCounter(ClickCounter,5)

//HoverCounter.js

import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render (){
        const { count, increamentCount } = this.props
        return(
            <h2 onMouseOver = {increaementCount}>
            Hovered { count } times
            </h2>
         )
    }
}

export default withCounter(HoverCounter,10)

//withCounter.js
import React from 'react'

const withCounter = (WrappedComponent, increamentNumber) => {
    class WithCounter extends React.Component {
        constructor(props){
            super(props)

            this.state = {
                count : 0
            }
        }
        increamentCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + increamentNumber}
            })
        }
        render(){
            return(
                <WrappedComponent>
                count = {this.state.count}
                increamentCount = {this.increamentCount}
                {...this.props}
                />
            )
        }
    }
    return WithCounter
}

export default withCounter


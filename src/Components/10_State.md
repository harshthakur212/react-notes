Props //////vs state

:props get passed to the component
:function parameters
:props are immutable
:props- Functional component
:this.props- class component

:state is managed within the compoenent
:variable declared in the function body 
:state can be changed
:ueState Hook - Functional components
:this.state - Class component


//Props and state hold info that end up in forming ui


///Displays Welcome Visitor
///Then add Button which turns out the text to ThankYou For Subscribing. Since props are immutable we use the component State.
/// Welcome.js(Component)


import React, {Component}from 'react'

class Welcome extends Component{
        constructor(){
            super()
            this.state = {
                message:'Welcome visitor'
            }
        }        

        changeMessage(){
            this.setState({
                message:"Thank you for subscribing"
            })
        }


        render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <Button onClick={ ()=>this.changeMessage()}>Subscribe</Button>
            </div>
        )
    }
}


export default welcome


/// App.js 

import React, { Component } from 'react'

import Welcome from './components/Welcome'

class App extends Component{
    render(){
        return(
        <div className = "App">
        <Welcome/>
        </div>
        );
    }
}

export default App;
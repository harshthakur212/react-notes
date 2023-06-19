//Things with Props (In Functional Component)(Shortcut Properties = Is an optional property that our component can accept, it also makes our component dynamic)

Just an object which contains the values and attributes which have been through the parent component

//In Functional component////////////


import React from 'react'

export const Greet = (props) => {
    console.log(props)
    return(
    <div>
    <h1>Hello {props.name} a.k.a{props.heroName}</h1>
    {props.chilren}
    </div>
    )
}

export default Greet



import React, { Component } from 'react'

import Hello from './components/Hello'

class App extends Component{
    render(){
        return(
        <div className = "App">
        <Greet name = "Bruce" heroName = "Batman">
        <p>This is children</p>
        </Greet>
        <Greet name = "Clark" heroName = "Superman" >
        <Greet name = "Diana" heroName = "WonderWomen" >
        </div>
        );
    }
}

export default App;







//In Class component////////////////////

import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1> Welcome{this.props.name} a.k.a {this.props.heroName}</h1>
    }
}
  
export default Greet



import React, { Component } from 'react'

import Hello from './components/Hello'

class App extends Component{
    render(){
        return(
        <div className = "App">
        <Greet name = "Bruce" heroName = "Batman">
        <p>This is children</p>
        </Greet>
        <Greet name = "Clark" heroName = "Superman" >
        <Greet name = "Diana" heroName = "WonderWomen" >
        </div>
        );
    }
}
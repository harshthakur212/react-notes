//Destructing props and state in react
//An es6 feature to unpack value from array or properties from objects to distinct variables. 

////////////////Default////////////////////

import React, {Component} from 'react'


const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            <h1>
        </div>
    )
}

export default Greet


////////////Destructuring in the parameter///////////////


import React, {Component} from 'react'


const Greet = ({name,heroName}) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            <h1>
        </div>
    )
}

export default Greet



/////////////Destructuring in the function body///////////


import React, {Component} from 'react'


const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            <h1>
        </div>
    )
}

export default Greet


/////////////Class component////////////////////////////////


import React, {Component} from 'react'

class Welcome extneds Component {
    render(){
        const {name,heroName } = this.props
        // const {state1, state2} = this.state
        return(
        <h1>
            Welcome {name} a.k.a {heroName}
        </h1>
        )
    }
}
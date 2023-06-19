Step 1: Creating the context
Step 2: Provide a context value
Step 3: Consume the context value

//Creating a context

//userContext.js

import React from 'react'

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

//App.js

import React, {Component} from 'react'
import ComponentC from './components.C
impoet {Userprovider} from './components.userContext.js'


class App extends Component {
   
    render(){
        return(
            <div className = "App">
            <UserProivder value = "Vishwas"> 
            <ComponentC/>
            </UserProivder>

            </div>
        )
    }
}
export default App



//ComponentC.js

import React, {Component} from 'react'

class ComponentC extends Component {
   
    render(){
        return(
            <div className = "App">
            <ComponentE/>
            </div>
        )
    }
}
export default ComponentC



//CompnentE.js
import React, {Component} from 'react'

class ComponentE extends Component {
   
    render(){
        return(
            <div className = "App">
            <ComponentF/>
            </div>
        )
    }
}
export default ComponentE



//ComponentF.js

import React, {Component} from 'react'
import {UserConsumer} from '.component/userContext'

class ComponentF extends Component {
   
    render(){
        return(
            <UserConsumer>
                {username => {
                    return <div>Hello {username}</div>
                }}
            </UserConsumer>
        )
    }
}
export default ComponentF

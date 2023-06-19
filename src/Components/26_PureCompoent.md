//Works only for class component

//2nd way to create class component that is by extracting pure compoenent from React

//The Pure component does not re-render like the regular component (Watch ex: if necessary)

:A pure component implements shouldComponentUpdate with a shallow prop and state comparison

//Pure component prevent unencessary render and gives performance boost.

//rpce


import React, {Purecomponent} from 'react'

class PureComp extends PureComponent {
    constructor (props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                Pure Component
            </div>
        )
    }
}

export default PureComp
////////class component (rce)

import React, {component} from 'react'

class ParentComponent extends Component {
    constructor (props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}
////////Functional Component(rfce)

import React from 'react'

function ChildComponent (){
    return (
        <div>
        
        </div>
    )
}

export default ChildComponent


////Pure component(rpce)

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
            </div>
        )
    }
}

export default PureComp
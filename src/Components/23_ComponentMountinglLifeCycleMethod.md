//Mounting lifecycle methods 

constructor(props)
: mehtods which are called when an instance of a component is created and inserted into the DOM
:used for : initializing state , binding the event handlers
:do not make http req from constructor
:things to keep in mind
    :super(props) = this will call the base class constructor
    :directly overwrite this.state

static getDerivedStateFromProps(props, state)
:When the state of the component depends on changes in props  over time.
: used for set the state
: cannot use this keyword. Instead we've to return an object which represent the new state of the component.
: Do not make http request

render()
: only required method
: Read props & state and return JSX
: Do not change state or interact with DOM or make ajax calls.
: Children comonents lifecycle methods are also executed.

componentDidMount()
:Will be called only once in the whole lifecycle of component
:And is invoked immediately after a component and all its children components have been rendered to the DOM 
:Cause side effects. EX: Interact with the DOM or preform any ajx calls to load data. 



import React, {component} from 'react'

class LifecycleA extends Component {
    constructor (props){
        super(props)

        this.state = {
            name:'Vishwas'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    render(){
        console.log('LifecycleA render')
        return <div>Lifecycle A</div>
    }
}



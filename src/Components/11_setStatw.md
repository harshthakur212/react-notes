
1//Never modify the state directly always use setState method for doing so React will not re-render the componet.

2//Whenever you need to execute some code after the state has been changed, do not place that code right after the set state method instead place that code within the callback function which is passed as a second parameter in the setState method.

3//Whenever you have to update the state based on the previous state we need to pass a function as an arguement to setState method instead of passing in an object.



//Creating a counter component for having a better understanding of do's and don't with state and setState method

// We'll have a count value and a button to increament tht count value.


//Creating a component called counter.js


//rce(snippet for class component)
//rfce for functional component
//rconst(snippet for constructor)


import React, {Component}from 'react'

//Keeping track of the count value state in the constructor 


consturctor(props){

    super(props)

    this.state = {
        count:0
    }
}

increament(){
    <!-- this.setState(
        {
        count: this.state.count + 1
    }, 
        ()=> {
        console.log('Callback value',this.state.count)
        }
    ) -->
    this.setState((prevState) => ({
        count : prevState.count + 1
    }))
    console.log(this.state.count)    
}


class Counter extends Component {
    render(){
    return(
          <div>
            <div>Count - {this.state.count}</div>
            <Button onClick={()=> this.increament()}>Increament</Button>
          </div>
        )
    }
}

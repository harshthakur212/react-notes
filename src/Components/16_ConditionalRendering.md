/// We mave offer need to hide some HTML on the basis of certain conditions.

/// We have 
if else variable 
element variables
terenariary conditional operator
short circuit operator

import React, {component} from 'react'

class ParentComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            isLoggedIn : false
        }
    }

    render(){


        // Using short circuit operator approach
        // A specific case of terninary operator approach
        // When we want to display either something or nothing we make use of this short circuit approach

       return  this.state.isLoggedIn && <div>Welcome Vishwas</div>


        ///Using the terninary conditional operator approach

        return(
            this.state.isLoggedIn? (
            <div>Welcome Vishwas</div>
            ):(
            <div>Welcome Guest</div>
        )


    /// Using element variables Approach
    /// here we use js variables to store elements
    /// This will help us to conditionally render the entire component or a part of the component as well
    
       let message 
        if (this.state.isLoggedIn){
            message = <div>Welcome Vishwas</div>
        }else{
            message = <div>Welcome Guest </div>
        }
        return<div>{message}</div>





        /// Using if else
        if(this.state.isLoggedIn){
            return <div>Welcome Vishawas</div>
        }else {
            return <div>Welcome Guest</div>
        }

//      return(
//          <div>
//          <div>Welcome Vishawas</div>
//          <div>Welcome Guest</div>
//          </div>
//     )
    }
}
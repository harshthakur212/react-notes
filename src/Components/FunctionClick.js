import React from 'react'

function FunctionClick() {

    function clickHandeler() {
        console.log('object')
    }

    return (
        <div>
            <button onClick={clickHandeler}>Click Meh </button>
        </div>
    )
}

export default FunctionClick



import React, { Component } from 'react'

export class FunctionClick extends Component {
    render() {

        clickHandeler(){
            console.log('clicked the button')
        }

        return (
            <div>
                <button onClick={this.clickHandeler}>Click Meh </button>
            </div>
        )
    }
}

export default FunctionClick



 // useReducer (simple state & action)
//Creating a counter value for increasing decreasing and resseting the value

//Counter.js

import react, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action){
        case 'increament':
            return state + 1
        case 'decrement':
          return state - 1
        case 'reset':
            return initialState
        default :
            return state
    }
}

function CounterOne(){
   const [count, dispatch] = useReducer(reducer, initialState)
   const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return(
        <div>
            <div> Count - {count}</div>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}>Decrement</button>
            <div>
            <div> Count Two - {countTwo}</div>
            <button onClick = {() => dispatchTwo('increment')}>Increment</button>
            <button onClick = {() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick = {() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
// The setter function provided by useStateHook does not automatically merge and update objects you have to manually merge it by yourself then pass the value to the setter function.

// We use the spread operator to handle merge


import React, {useState} from 'react'

function HookCounterThree (){

    const [name,setName] = useState({firstName: '', lastName : ''})

    return (
       <form>
        <input type = 'text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})}/>

        <input type = 'text' value ={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})}/>

        <h2> Your first name is - {name.firstName}</h2>

        <h2> Your last name is - {name.lastName}</h2>
       </form>
    )
}

export default HookCounterThree
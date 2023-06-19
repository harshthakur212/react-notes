//Displaying list of items



import React from 'react'

function personList (){
    const persons=[
          {
        id:1,
        name:'Bruce',
        age:30,
        skill:'React'
    },
    {
        id:2,
        name:'Clark',
        age:25,
        skill:'Angular'
    },
    {
        id:3,
        name:'Diana',
        age:28,
        skill:'Vue'
    }  
    ]
}

  
//In the same file

    const personList = persons.map(person =>(
        <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill}
        </h2>
    )) 
    return <div>{personList}</div>

export default NameList






//in different file


    const personList = persons.map(person => <Person person ={person}/>)
    return <div>{personList}</div>



import React from 'react'

function Person ({person}){
    return (
        <div>
           <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill}
           </h2>
        </div>
    )
}

export default ChildComponent
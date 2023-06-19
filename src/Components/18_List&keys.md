//Each item in the list render using a map operator should have a prop called key and the value to the prop shld be unique in the list .

//lets add it

//key prop is not accessible in the child component
//Key plays an imp role as it help react identify which items has been changed added and moved and have a crucial role in updating ui efficiently

//Displaying list of items



import React from 'react'

function NameList ()[

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
    },
    
]


    const personList = persons.map(person => <Person key={person.id } person ={person}/>)
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
//Advanced React

//Basically let you group a list of children elements without adding extra nodes to DOM
//instead of div tag using fragments since there should be only one parent element the time we use fragments it does not displayed the way div tag get displayed up in the console.
import React from 'react'
//It can accept the key attirbute when rendering list of items

function FragmentDemo (){
    return (
        <React.Fragement>
        <h1>Fragment Demo</h1>
        <p>This describes the fragment Demo component</p>
        </React.Fragment>
    )
}

export default FragmentDemo

//New file Table.js

import React from 'react'

function Table (){
    return (
        <table>
            <tbody>
                <tr>
                <Columns/>
                </tr>
            </tbody>
        </table>
    )
}

export default Table


//Another file column.js

import React from 'react'

function Column(){
    return (
        <React.Fragments>
            <td>Name</td>
            <td>Vishwas</td>
        </React.Fragments>
    )
}

export default Column


//Can also add key

import React from 'react'

function Column(){
    const items = []
    return (
        <React.Fragments>
        {
            items.map(item =>(
                <React.Fragment key = {item.id}>
                <h1>Title</h1>
                <p>React.Fragment</p>
            ))
        }
            <td>Name</td>
            <td>Vishwas</td>
        </React.Fragments>
    )
}

export default Column
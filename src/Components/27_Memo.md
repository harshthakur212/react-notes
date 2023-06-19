//What pureComponent do for class based component Memo is for Fucntional component

//rfce (functional Component)


import React from 'react'
console.log('Rendering Memo Component')
function Memo ({name}){
    return (
        <div>
        
        </div>
    )
}

export default React.memo(Memo) 

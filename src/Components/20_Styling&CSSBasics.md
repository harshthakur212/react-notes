// CSS Stylesheet
// Inline styling
// CSS Modules
// CSS in JS Libraries (Styled Components)



//////////////CSS Stylesheet

//StyleSheet.js

import React from 'react'
import './myStles.css'

function StyleSheet (props){
    let className = props.primary ? 'primary' : ''
    return ({
        <div>
            <h1 className={`${className} font-xl`} >StyleSheets</h1>
        </div>
    )
}

export default StyleSheet


//MyStyles.css

.primary{
    color:red;
}

.font-xl{
    font-size:42px
}


///////////////// Inline styling

//In react inline styles are not specified as a string instead they are specified within object whose key is the camel cased version of the styling and the value is usually string

import React from 'react'


const heading ={
    fontSize:'72px',
    color:'blue'
}

function Inline (){
    return (
        <div>
            <h1 style= {heading}>Inline</h1>
        </div>
    )
}

export default Inline





///////////////CSS module


filename : appStyles.modules.css

.success{
    color:blue
}


//regular stylesheet : import './appStyles.css' is a global which makes conflict
//css modules : import styles from './appStyles.module.css'


<div className = "App">
    <h1 className = 'error'>Error</h1>
    <h1 className = {styles.success}>Success</h1>



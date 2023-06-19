:Are just js funtions

:Properties(props) ---> Javascript Funtion---> HTML(JSX)

:A js functions that accepts an input of properties and returns HTML which describes the  UI

Steps to create:

-create a component folder

-create Greet.js file
-in Greet.js file
import React from 'react'

const Greet = () => <h1>Hello World</h1>

//export default Greet

in App.js file

import Greet from './components/Greet'
<Greet/>

import {Greet} from './components/Greet'
<Greet/>
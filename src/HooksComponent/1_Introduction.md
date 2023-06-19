//Intro

:What are Hooks

Hooks are a new feature addition in React version 16.8 which allows you to use React features without having to write class.
ex: State of a component
Hooks dont work inside classes


:Why Hooks

Reason 1:
-> Undestand how THIS keyword work in JS
-> Remember to bind event handlers in class component
-> Classes don't minify very well and make hot reloading very unrealiable

Reason 2:
-> There is no particular way to reuse stateful component logic
-> HOC and render props pattern do address this problem
-> Makes the code harder to follow
-> There is a need to store stateful logic in a better way

Reason 3:
-> Creates components for complex scenarios such as data fetching and subscribing to events 
-> Related code is not organized in one place
Ex: Data fetching - in componentDidMount and componentDidUpdate
Ex: Event listeners - in componentDidMount and componentWillUnmount
-> Because of stateful logic - cannot break components into smaller ones



//Summary 

Hooks are a new feature addition in React version 16.8 

They allows you to use React features without having to write class.

Avoid the confusion of this keyword

Allow you to reuse stateful logic

Organize the logic inside a component into reusable isolated units
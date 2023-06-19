//Error boundary are React boundaries that catch JavaScript error in the child component tree, log those errors and display a fall-back UI
//A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.
//The placement of the error boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem
//Provide a way to gracefully handle error in application code
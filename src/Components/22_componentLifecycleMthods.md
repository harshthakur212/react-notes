:We have seen so far that React web apps are actually a collection of independent components that run according to the interactions made with them. Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. The definition is pretty straightforward but what do we mean by different stages? A React Component can go through four stages of its life as follows. 

//Classification of methods

Mounting:When an instance of a component is being created and inserted into the DOM
: constructor, static getDerivedStateFromProps, render and componentDidMount

Updating:When a component is being re-rendered as a result of changes to either its props or state
: static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

Unmouting:When a component is being removed from the DOM
:componentWillUnmount

Error Handler:When there is an error during rendering, in a 
lifecycel method, or in the constructor of any child component
: static getDerivedStateFromError and componentDidCatch
//Updating lifecycle Method

: Methods that are being called when a component is being re-rendered because of changes to either props or state.

:methods

static getDerivedStateFromProps(props, state)
:Receives props or state as a parameter and returns null or object that represent the updated states of the component.
:Method is called every time a component is re-rendered
:set the state
:Do not cause side effects. Ex:HTTP requests


shouldComponentUpdate(nextProps,nextState)
:Dictates if the component should re-render or not
:it is for performance optimization
:do not cause side effects ex: HTTP requests calling the setState method


render()
:only required method
:Read props & state and return JSX
:Do not change state or interact with DOM or make ajax calls.

getSnapshotBeforeUpdate(prevProps,prevState)
:Called right before the changes from the virtual DOM are to be reflected in the DOM
:Capture some information from the DOM
:This method will either return null or return a value. Returned value will be passed as the third parameter to the next method. 

componentDidUpdate(prevProps,prevState,snapshot)
:This method will be called after the render is finished in the re-render cycle
:This method accepts three parameters (prevProps,prevState,snapshot)
:Cause side effects.


//render and componentDidUpdate are the mostly used methods
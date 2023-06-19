//Summary

The useState hook lets you add state to functional components

In classes, the state is always an object.

with the useState hook, the state doesn't have to be an object.(Can be an array, a bollean , a number etc.)

The useState hook returns an array with 2 elements

The first element is the current value of the state, and the second element is a state setter function.

In case New state value depends on the previous state value? You can pass a function to the setter function.

When dealing with object or arrays, always make sure to spread your state variable and then call the setter function
 
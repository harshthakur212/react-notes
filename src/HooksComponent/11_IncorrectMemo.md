//Ignoring Common Mistakes

//Using useState for replicating this.state method from class based components

//Using useEffect for replicating componentDidMount in Class based components

//Creating a counter which will automatically increament after every second



import React, {useState, useEffect }  from 'react'

function IntervalHookCounter(){
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[])


    return (
        <div>
            {count}
        </div>
    )
}
 
export default IntervalHookCounter
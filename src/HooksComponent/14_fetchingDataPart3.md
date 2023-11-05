//Trigger the effect on a button click
//Create a button and add a click handler
//Within the click we will get the getRequest

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching(){
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonCLick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get('http://${idFromButtonClick}')
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFromButtonClick])

    return(
        <div>
        
            <input type = "text" value = {id} onChange = {e => setId(e.target.value)}/>
            <button type = "button" onClick = {handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}


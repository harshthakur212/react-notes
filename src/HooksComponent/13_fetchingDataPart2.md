//Fetching individual post by passing in the post id to the get request

//We've to just append /id to the current url we are using in the effect Hook


import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching(){
    const [post, setPost] = useState({})
        const [id, setId] = useState(1)


    useEffect(() => {
        axios.get('http://${id}')
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

    return(
        <div>
            <input type = "text" value = {id} onChange = {e => setId(e.target.value)}/>
            <div>{post.title}</div>
        </div>
    )
}


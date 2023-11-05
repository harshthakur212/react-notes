import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return(
        <div>
            posts.map => <li key = {posts.id}>{post.title}</li>
        </div>
    )
}
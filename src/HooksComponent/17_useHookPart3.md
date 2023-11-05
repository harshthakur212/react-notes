//Three simple steps
1.Creating the context and Providing the context value

//App.js

import React from 'react'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
    return(
        <div className = 'App'>
        <UserContext.Provider value = {'Vishwas'}>
        <ChannelContext.Provider value = {'Codevolution'}>
        <ComponentC/>
        </ChannelContext.provider>
        </UsercContext.Provider>
    )
}

//ComponentC.js
 
import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentE(){

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return(
        <div>
            {user} - {channel}
        </div>
    )
}

export default Component
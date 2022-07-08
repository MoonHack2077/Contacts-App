import { useState, useEffect } from 'react'

//const Context = createContext()

export const Provider = () => {
    const [user, setUser] = useState({})

    const handleUser = newUser => {
        setUser(newUser)
    }

    useEffect(()=>{
        console.log(user)
    }, [user])

    return [user, handleUser]
}
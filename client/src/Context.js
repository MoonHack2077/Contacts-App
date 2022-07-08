import { useState, createContext } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
    const [user, setUser] = useState({})

    const value = {
        user,
        activateUser: userLogged => {
            setUser(userLogged)
            window.sessionStorage.setItem('USERTOKEN', JSON.stringify(userLogged.token))
        },
        removeUser: () => {
            setUser(null)
            window.sessionStorage.removeItem('USERTOKEN')
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider> 
    )
}

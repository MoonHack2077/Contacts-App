import React from 'react'
import { ContactsList as List } from '../styles/containers.js'

export function ContactsList({ children }){
    return(
        <List>
            {children}
        </List>
    )
}
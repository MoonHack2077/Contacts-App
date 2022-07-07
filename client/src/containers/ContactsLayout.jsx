import React from 'react'
import { ContactsLayout as Container } from '../styles/containers.js'

export function ContactsLayout({ children }){
    return(
        <Container>
            {children}
        </Container>
    )
}

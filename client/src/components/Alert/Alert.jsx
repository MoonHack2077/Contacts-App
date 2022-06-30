import React from 'react'
import { Container } from './styles.js'

function Alert({ message }){
    return(
        <Container>{ message }</Container>
    )
}

export { Alert }

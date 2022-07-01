import React from 'react'
import { Container, Span } from './styles.js'

function Alert({ message }){
    return(
        <Container>
            <Span>{ message }!!!</Span>
        </Container>
    )
}

export { Alert }

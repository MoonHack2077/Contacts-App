import React from 'react'
import { Container, Ops } from './styles.js'
import { Button } from '../../styles/button.js'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { MdOutlinePersonSearch } from 'react-icons/md'

export function Options({ contacts=0 }){
    return(
        <Container>
            <h2>{contacts} contacts with phone numbers</h2>
            <Ops>
                <Button><AiOutlineUserAdd size='30px' /></Button>
                <Button><MdOutlinePersonSearch size='30px' /></Button>
            </Ops>
        </Container>
    )
}
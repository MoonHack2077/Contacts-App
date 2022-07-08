import React from 'react'
import { Container, Ops, Span } from './styles.js'
import { Button } from '../../styles/button.js'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { MdOutlinePersonSearch } from 'react-icons/md'

export function Options({ name, contacts }){
    const { id } = useParams('id')
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/contacts/${id}/add`)
    }
    return(
        <Container>
            <Span fz={30}>{name}</Span>
            <Span fz={20}>{contacts} contacts with phone numbers</Span>
            <Ops>
                <Button onClick={handleOnClick} ><AiOutlineUserAdd size='30px' /></Button>
                <Button><MdOutlinePersonSearch size='30px' /></Button>
            </Ops>
        </Container>
    )
}
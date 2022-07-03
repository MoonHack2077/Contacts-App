import React from 'react'
import { Container, ButtonsContainer, Button } from './styles.js'
import { FaUserEdit } from "react-icons/fa";
import { MdMoreVert, MdShare } from "react-icons/md";
import { storageIcons } from '../../helpers/storageIcon.js'

function Contact({ name, phonenumber, email, storageLocation }) {
  const Icon = storageIcons[storageLocation]
  return (
    <Container>
        <p>{name}</p>
        <p>{phonenumber}</p>
        <p>{email}</p>
        <p>
          <Icon size='30px' />
          {storageLocation}
        </p>
        <ButtonsContainer>
          <Button ><FaUserEdit /></Button>
          <Button ><MdShare /></Button>
          <Button ><MdMoreVert /></Button>
        </ButtonsContainer>
    </Container>
  )
}

export { Contact }
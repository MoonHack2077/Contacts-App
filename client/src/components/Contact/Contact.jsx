import React from 'react'
import { Container, ButtonsContainer, Button } from './styles.js'
import { FaUserEdit } from "react-icons/fa";
import { MdMoreVert, MdShare } from "react-icons/md";
import { storageIcons } from '../../helpers/storageIcon.js'

function Contact({ name, phoneNumber, email, storageLocation }) {
  const Icon = storageIcons(storageLocation)
  return (
    <Container>
        <p>{name}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>
          <Icon size='30px' />
          {storageLocation}
        </p>
        <ButtonsContainer>
          <Button ><FaUserEdit size='20px' /></Button>
          <Button ><MdShare size='20px' /></Button>
          <Button ><MdMoreVert size='20px' /></Button>
        </ButtonsContainer>
    </Container>
  )
}

export { Contact }
import React, { useState } from 'react'
import { postNewContact } from '../../services/contacts.js'
import { useNavigate, useParams } from 'react-router-dom'
import { storageLocations } from '../../constants.js'
import { FormContainer, Form, InputContainer, Input, Button, StorageLocations, Option } from '../../styles/forms.js'

export function AddContact(){
    const navigate = useNavigate()
    const { id } = useParams('id')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [storageLocation, setStorageLocation] = useState('')

    const handleEmail = e => {
        setEmail(e.target.value)
    }
      
    const handlePhone = e => {
        setPhone(e.target.value)
    }

    const handleName = e => {
        setName(e.target.value)
    }

    const handleStorageocation = ({ target }) => {
        setStorageLocation(target.options[target.selectedIndex].value)
    }

    const onSubmit = async e => {
        e.preventDefault()

        try{
            const token = window.sessionStorage.getItem('USERTOKEN')
            const newContact = await postNewContact({ 
                name, 
                email, 
                phoneNumber: phone, 
                storageLocation, 
                owner: id 
            }, token)
            if(newContact){
                navigate(`/contacts/${id}`)
            }
        }catch(error){
            console.error(error)
            console.log(error.config.data)
        }
        
    }

    return(
        <FormContainer>
            <Form onSubmit={onSubmit} >
                <StorageLocations onChange={handleStorageocation} >
                    <Option key={56} value='Storage Location' >Storage Location</Option>
                    {
                        storageLocations.map((location, index) => (
                            <Option key={index} value={location} >{location}</Option>
                        ))
                    }
                </StorageLocations>
                <InputContainer>
                    <Input type='text' placeholder='name' value={name} onChange={handleName} /> 
                    <Input type='email' placeholder='email' value={email} onChange={handleEmail} />
                    <Input type='text' placeholder='phone' value={phone} onChange={handlePhone} />
                </InputContainer>
                <Button>Save</Button>
            </Form>
        </FormContainer>
    )
}

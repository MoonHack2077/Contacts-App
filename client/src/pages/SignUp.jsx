import React, { useState } from 'react'
import { signUp } from '../services/signUp.js'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Form, InputContainer, Input, Button } from '../styles/forms.js'

function SignUp(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    const [name, setName] = useState('')

    const handleEmail = e => {
        setEmail(e.target.value)
    }
      
    const handlePassword = e => {
        setPassowrd(e.target.value)
    }

    const handleName = e => {
        setName(e.target.value)
    }

    const onSubmit = async e => {
        e.preventDefault()

        try{
            const user = await signUp({ name, email, password })
            if(user){
                console.log(user)
                navigate(`contacts/${user.id}`)
            }
        }catch(error){
            console.error(error)
        }
        
    }

    return(
        <FormContainer>
            <Form onSubmit={onSubmit} >
                <InputContainer>
                    <Input type='text' placeholder='name' value={name} onChange={handleName} /> 
                    <Input type='email' placeholder='email' value={email} onChange={handleEmail} />
                    <Input type='password' placeholder='password' value={password} onChange={handlePassword} />
                </InputContainer>
                <Button>Sign up</Button>
            </Form>
        </FormContainer>
    )
}

export { SignUp }
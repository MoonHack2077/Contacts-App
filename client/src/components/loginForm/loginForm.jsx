import React, { useState } from 'react'
import { login } from '../../services/login.js'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Form, InputContainer, Input, Button } from './styles.js'

function LoginForm() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassowrd] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleUsername = e => {
    setUsername(e.target.value)
  }
  
  const handlePassword = e => {
    setPassowrd(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()

    try{
      const credentials = { username, password }
      const user = await login(credentials)
      console.log(user)
      if(user) setRedirect(prev => !prev)
    }catch(error){
      console.error(error)
    }
    
  }

  if(redirect){
    return navigate('/home')
  }

  return (
    <FormContainer>
        <Form onSubmit={onSubmit} >
       <InputContainer>
          <Input placeholder={'Username'} required type="text" value={username} onChange={handleUsername}/>
          <Input placeholder={'Password'} required type="password" value={password} onChange={handlePassword}/>
        </InputContainer>
        <Button>Login</Button>
      </Form>
    </FormContainer>
  )
}

export { LoginForm }
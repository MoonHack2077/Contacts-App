import React, { useState } from 'react'
import { login } from '../../services/login.js'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Form, InputContainer, Input, Button } from './styles.js'
import { Alert } from '../Alert/Alert.jsx'

function LoginForm() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassowrd] = useState('')
  const [error, setError] = useState({ message: '', exists: false })

  const handleUsername = e => {
    setUsername(e.target.value)
  }
  
  const handlePassword = e => {
    setPassowrd(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()

    try{
      const user = await login({ username, password })
      if(user) {
        window.sessionStorage('USERTOKEN', JSON.stringify(user.token))
        navigate('/home')
      }
    }catch(e){
      console.error(e)
      setError({ message: e.response.data.error, exists: true })
    }
    
  }

  return (
    <>
      {error.exists && <Alert message={error.message} />}

      <FormContainer>
        <Form onSubmit={onSubmit} >
          <InputContainer>
            <Input placeholder={'Username'} required type="text" value={username} onChange={handleUsername}/>
            <Input placeholder={'Password'} required type="password" value={password} onChange={handlePassword}/>
          </InputContainer>
          <Button>Login</Button>
        </Form>
      </FormContainer>
    </>
  )
}

export { LoginForm }
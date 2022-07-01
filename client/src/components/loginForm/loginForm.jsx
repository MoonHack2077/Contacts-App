import React, { useState } from 'react'
import { login } from '../../services/login.js'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Form, InputContainer, Input, Button } from './styles.js'
import { Alert } from '../Alert/Alert.jsx'
import jwt from 'jsonwebtoken'

function LoginForm() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')
  const [error, setError] = useState({ message: '', exists: false })

  const handleEmail = e => {
    setEmail(e.target.value)
  }
  
  const handlePassword = e => {
    setPassowrd(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()

    try{
      const user = await login({ email, password })
      if(user) {
        window.sessionStorage.setItem('USERTOKEN', JSON.stringify(user.token))
        const decodedToken = jwt.verify(user.token, process.env.SECRETWORD)
        navigate(`/contacts/${decodedToken.id}`)
      }
    }catch(e){
      console.error(e)
      setError({ message: e.response.data.error, exists: true })
    }
    
  }

  return (
    <>
      <FormContainer>
        {error.exists && <Alert message={error.message} />}
        <Form onSubmit={onSubmit} >
          <InputContainer>
            <Input placeholder={'Email'} required type="email" value={email} onChange={handleEmail}/>
            <Input placeholder={'Password'} required type="password" value={password} onChange={handlePassword}/>
          </InputContainer>
          <Button>Login</Button>
        </Form>
      </FormContainer>
    </>
  )
}

export { LoginForm }
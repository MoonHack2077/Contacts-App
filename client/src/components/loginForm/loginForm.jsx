import React, { useState, useContext } from 'react'
import { login } from '../../services/login.js'
import { useNavigate, Link } from 'react-router-dom'
import { Context } from '../../Context.js'
import { FormContainer, Form, InputContainer, Input, Button } from '../../styles/forms.js'
import { Alert } from '../Alert/Alert.jsx'

function LoginForm() {
  const { activateUser } = useContext(Context)
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
      const loggedUser = await login({ email, password })
      if(loggedUser) {
        activateUser(loggedUser)
        navigate(`/contacts/${loggedUser.id}`)
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
            <Input placeholder='Email' required type="email" value={email} onChange={handleEmail}/>
            <Input placeholder='Password' required type="password" value={password} onChange={handlePassword}/>
          </InputContainer>
          <Link to='/signup'>create account</Link>
          <Button>Login</Button>
        </Form>
      </FormContainer>
    </>
  )
}

export { LoginForm }
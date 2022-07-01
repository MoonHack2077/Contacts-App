import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { Contact } from '../../components/Contact/Contact.jsx'
import { useParams } from 'react-router-dom'

function Contacts() {
  const [user, setUser] = useState({})

  const id = useParams()
  console.log(user)
  const findUser = () => {
    const foundUser = axios.get(`${BASE_URL}/api/users/${id}`)
    foundUser
    .then(res => {
      console.log(res)
      setUser(res)
    })
  }

  useEffect(()=>{
    findUser()
  }, [])
  return (
    <div>
      {
        user?.contacts?.map(contact => (
          <Contact {...contact} />
        ))
      }
    </div>
  )
}

export { Contacts }
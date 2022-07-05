import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { Contact } from '../../components/Contact/Contact.jsx'
import { useParams } from 'react-router-dom'

function Contacts() {
  const [user, setUser] = useState({})

  const { id } = useParams('id')
  const findUser = () => {
    const foundUser = axios.get(`${BASE_URL}/api/users/${id}`)
    foundUser
    .then(res => {
      console.log(res)
      setUser(res.data)
      console.log(user)
    })
  }

  useEffect(()=>{
    findUser()
  }, [])
  return (
    <div>
      {
        user?.contacts.length ? user.contacts.map(contact => (
          <Contact {...contact} />
        )) : <p>The user doesn´t have contacts</p>
      }
    </div>
  )
}

export { Contacts }
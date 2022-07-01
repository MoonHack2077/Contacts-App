import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { Note } from '../../components/Note/Note.jsx'
import { useParams } from 'react-router-dom'

function Notes() {
  const [user, setUser] = useState({})

  const id = useParams('id')
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
        user?.notes?.map(note => (
          <Note {...note} />
        ))
      }
    </div>
  )
}

export { Notes }
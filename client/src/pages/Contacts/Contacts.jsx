import React, { useState, useEffect } from 'react'
import { Contact } from '../../components/Contact/Contact.jsx'
import { useParams } from 'react-router-dom'
import { getUser } from '../../services/users.js'

function Contacts() {
  const [user, setUser] = useState({})
  const [load, setLoad] = useState(false)

  const { id } = useParams('id')

  useEffect(()=>{
    setLoad(false)
      getUser(id)
      .then( res => {
        //console.log(res)
        setUser(res)
        //console.log(user)
        setLoad(prev => !prev)

      }).catch(err => console.error(err.message)) 

  }, [])

  return (
    <div>
      {
        load
        ? user?.contacts?.map(contact => (
          <Contact key={contact.id} {...contact} />
        )) 
        : <p>You don´t have any contacts yet</p>
      }
    </div>
  )
}

export { Contacts }
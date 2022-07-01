import React from 'react'

function Contact({ name, phonenumber, email, storageLocation }) {
  return (
    <div>
        <p>{name}</p>
        <p>{phonenumber}</p>
        <p>{email}</p>
        <p>{storageLocation}</p>
    </div>
  )
}

export { Contact }
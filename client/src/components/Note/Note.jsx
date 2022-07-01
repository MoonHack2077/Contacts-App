import React from 'react'

function Note({ content, important, date }) {
  return (
    <div>
        <p>{content}</p>
        <p>{important}</p>
        <p>{date}</p>
    </div>
  )
}

export { Note }
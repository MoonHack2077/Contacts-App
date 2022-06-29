const supertest = require("supertest")
const { app } = require('../index')

const api = supertest(app)

const initialNotes = [
  {
    content: 'Note 1',
    important: true,
    date: new Date()
  },
  {
    content: 'Note 2',
    important: false,
    date: new Date()
  },
  {
    content: 'Note 3',
    important: false,
    date: new Date()
  }
]

const initialUsers = [
  {
    username: 'example 1',
    name: 'example1_name',
    password: '000',
  },
  {
     username: 'example 2',
     name: 'example2_name',
     password: '111'
  },
  {
     username: 'example 3',
     name: 'example3_name',
     password: '222'
  }
]

const getAllNotes = async () => {
  const response = await api.get('/api/notes')
  const contents = response.body.map(note => note.content)

  return { response, contents }
}

const getAllUsers = async () => {
  const response = await api.get('/api/users')
  const usernames = response.body.map(user => user.username)

  return { response, usernames }
}

module.exports = { 
  initialNotes,
  initialUsers,
  api, 
  getAllUsers,
  getAllNotes
}

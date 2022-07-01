import { api } from './supertest'

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

const getAllNotes = async () => {
  const response = await api.get('/api/notes')
  const contents = response.body.map(note => note.content)

  return { response, contents }
}

module.exports = { initialNotes, getAllNotes }

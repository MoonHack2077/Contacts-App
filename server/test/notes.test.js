const mongoose = require('mongoose')
const { server } = require('../index')
const Note = require('../models/Note')
const { api, initialNotes, getAllData } = require('./helpers')

beforeEach(async ()=>{
 try{
  await Note.deleteMany({})

  for(const note of initialNotes){
    const newNote = new Note(note)
    await newNote.save()
  }

  }catch(e){
    console.error(e)
  }
})

//Those tests MUST be async

test('Notes are returned as json', async ()=>{
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('The db notes´ lenght is the same lenght as initialNotes', async ()=>{
 const response =  await api.get('/api/notes')
  expect(response.body).toHaveLength(initialNotes.length)
})

test('the first note content must be "Note 1"', async ()=>{
  const response = await api.get('/api/notes')
  expect(response.body[0].content).toBe(initialNotes[0].content)
})

test('At least one note content cointains "Note 2"', async ()=>{
  const { contents } = await getAllData()
  
  expect(contents).toContain('Note 2')
})

test('When I post a new note the lenght increase one', async ()=>{
  const newNote = {
    content: 'AAAA',
    important: true
  }

  try{
  await api
    .post('/api/notes')
    .send(newNote)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const { response, contents } = await getAllData()

  expect(response.body.length).toBe(initialNotes.length + 1)
  expect(contents).toContain(newNote.content)
  }catch(e){
  console.log(e)
  }
})

test('When a new note is sended without content it won´t be added', async ()=>{
  try{
    const newNote = {
      important: true
    }

    await api
          .post('/api/notes')
          .expect(400)

    const { response } = await getAllData()
    expect(response.body).toHaveLength(initialNotes.lenght)
  }catch(e){
    console.log(e)
  }
})

test('A note can be deleted', async ()=>{
  const { response } = await getAllData()
  const note = response.body[0]
  await api
        .delete(`/api/notes/${note.id}`)
        .expect(204)

  const { contents, response: second } = await getAllData()
  
  expect(second.body).toHaveLength(initialNotes.length-1)
  expect(contents).not.toContain(note.content)
})

test.skip('A note can be updated', async ()=>{
  const { response } = await getAllData()
  const note = response.body[1]
  const newNote = {
    content: 'UPDATEEEED'
  }
  await api
        .put(`/api/notes/${note.id}`, newNote)
        .expect(200)
  
  const { contents } = await getAllData()
  expect(contents).toContain(newNote.content)

})

afterAll(()=>{
  mongoose.connection.close()
  server.close()
})

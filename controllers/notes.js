const mongoose = require('mongoose')
const notesRouter = require('express').Router()
const Note = require('../models/Note.js')
const User = require('../models/User.js')
const userExtractor = require('../middlewares/userExtractor.js')

notesRouter.get('/:id', async (request, response, next) => {
// With request.params we are getting the param from the url that we need
// Always it will return a string, so according to our needs we must turn the type
  try{  
    const id = request.params.id
    const foundNote = await Note.findById(id).populate('user',{
      username: 1,
      name: 1
    })
    response.json(foundNote)
  }catch(error){
    console.log({error})
  }
})

notesRouter.get('/', async (request, response) => {
   try{
    const notes = await Note.find({}).populate('user',{
      username: 1,
      name: 1
    })
    response.json(notes)
   }catch(error){
    console.log({error})
   }
})

notesRouter.post('/', userExtractor, async (request, response) => {
   const { content, important = false } = request.body

   if (!content) {
    response.status(400).json({ error: 'No content' }).end()
  }

  const { userId } = request
  const user = await User.findById(userId)
  const newNote = new Note({
    content,
    important,
    user: user._id,
    date: new Date().toISOString()
  })

  const savedNote = await newNote.save()

  //Concat the new note to the notes array of the user
  user.notes = user.notes.concat(savedNote._id)
  //Save changes at the user
  await user.save()

  // The 201 state is 'created'
  response.status(201).json(savedNote)
})

notesRouter.delete('/:id',  async (request, response, next) => {
  try{  
    const id = request.params.id
    await Note.findByIdAndRemove(id)
    response.status(204).end()
  }catch(error){
    console.log(error)
   }
})

notesRouter.put('/api/notes/:id', async (request, response) => {
  const { id } = request.params
  const { content, important = false } = request.body
  const newNote = { content, important }

  //At the third param we can put this object : { new: true }
  //This will do that the promise returns the object with the new data
  //Otherwise the promise returns one which was found by id
  const updatedNote = Note.findByIdAndUpdate(id, newNote)
  response.status(200).json(updatedNote)
})

module.exports = notesRouter

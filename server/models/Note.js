const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')
const { Schema, model } = mongoose

// Creating a new Schema to have a better structure at our DB
const noteSchema = new Schema({
  content: {
    type: String,
    unique: true,
    required: true
  },
  date: Date,
  important: Boolean,
  user: { 
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

noteSchema.set('toJSON', {
  transform: (document, returnObject) =>{
    returnObject.id = returnObject._id

	  //Normally, delete, is a bad practice!!!	  
    delete returnObject._id
    delete returnObject.__v	  
  }
})

noteSchema.plugin(validator)

// Creating a model with the schema which we create before
const Note = model('Note', noteSchema)
 
module.exports = Note

/**
 24 const note = new Note({
 25   content: 'MongoDB is amazing',
 26   date: new Date(),
 27   important: true
 28 })
 29
 30 note.save()
 31   .then(response => {
 32     console.log(response)
 33     // GOOD PRACTICE, when we finish our requests is impotant close de connection with the DB
 34     mongoose.connection.close()
 35   })
 36   .catch(console.error)
 37
 38 Note.find({})
 39 .then(console.log)
 40 .catch(console.error)
 **/

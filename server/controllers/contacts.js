const Contact = require('../models/Contact.js')
const User = require('../models/User.js')

const getOneContact =  async (request, response, next) => {
// With request.params we are getting the param from the url that we need
// Always it will return a string, so according to our needs we must turn the type
  try{  
    const { id } = request.params
    const foundContact = await Contact.findById(id).populate('owner',{
      email: 1,
      name: 1
    })
    response.json(foundContact)
  }catch(error){
    console.log({error})
  }
}

const getAllContacts = async (request, response) => {
   try{
    const contacts = await Contact.find({}).populate('owner',{
      email: 1,
      name: 1
    })
    response.json(contacts)
   }catch(error){
    console.log({error})
   }
}

const deleteContact = async (request, response, next) => {
  try{  
    const { id } = request.params
    const removedContact = await Contact.findByIdAndRemove(id)
    const { ownerId } = request
    const user = await User.findById(ownerId)
    user.contacts = user.contacts.filter(contact => contact !== removedContact)
    response.status(204).json(removedContact).end()
  }catch(error){
    console.log(error)
   }
}


const postContact = async (request, response) => {
  const { name, phoneNumber, storageLocation } = request.body

  if (!name) {
    response.status(400).json({ error: 'No name' }).end()
  }
  if (!phoneNumber) {
    response.status(400).json({ error: 'No phoneNumber' }).end()
  }

  const { ownerId } = request
  const user = await User.findById(ownerId)
  const newContact = new Contact({
    name,
    phoneNumber,
    storageLocation,
    owner: user._id
  })

  const savedContact = await newContact.save()

  //Concat the new note to the contacts array of the user
  user.contacts = user.contacts
  .concat(savedContact._id)
  .sort((first, second) => first.name - second.name)
  
  //Save changes at the user
  await user.save()

  // The 201 state is 'created'
  response.status(201).json(savedContact)
}

const putContact = async (request, response) => {
  const { id } = request.params
  const { name, phoneNumber, storageLocation, email } = request.body

  if (!name) {
    response.status(400).json({ error: 'No name' }).end()
  }
  if (!phoneNumber) {
    response.status(400).json({ error: 'No phoneNumber' }).end()
  }

  const newContact = { name, phoneNumber, storageLocation, email }

  //At the third param we can put this object : { new: true }
  //This will do that the promise returns the object with the new data
  //Otherwise the promise returns one which was found by id
  const updatedContact = Contact.findByIdAndUpdate(id, newContact, { new: true })
  response.status(200).json(updatedContact)
}

module.exports = {
  getOneContact,
  getAllContacts,
  putContact,
  postContact,
  deleteContact
}
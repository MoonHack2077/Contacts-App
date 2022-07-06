const contactsRouter = require('express').Router()
const userExtractor = require('../middlewares/userExtractor.js')

const { postContact, getAllContacts, getOneContact, deleteContact, putContact } = require('../controllers/contacts.js')

//The path is relative to the path at he index
//the path at the index is: /api/users
//So this path is according to the last one
contactsRouter.get('/', getAllContacts)

contactsRouter.get('/:id', getOneContact)

contactsRouter.post('/', userExtractor, postContact)

contactsRouter.delete('/:id', userExtractor, deleteContact)

contactsRouter.put('/:id', putContact)

module.exports = contactsRouter

const userRouter = require('express').Router()
const { postUser, getAllUsers, getOneUser, deleteUser, putUser } = require('../controllers/users.js')

//The path is relative to the path at he index
//the path at the index is: /api/users
//So this path is according to the last one
userRouter.post('/', postUser)

userRouter.get('/', getAllUsers)

userRouter.get('/:id', getOneUser)

userRouter.delete('/:id', deleteUser)

userRouter.put('/:id', putUser)

module.exports = userRouter

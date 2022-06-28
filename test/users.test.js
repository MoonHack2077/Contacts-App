const User = require('../models/User.js')
const mongoose = require('mongoose')
const { initialUsers, api, getAllUsers } = require('./helpers.js')
const { server } = require('../index.js')
const bcrypt = require('bcrypt')

describe('USER TESTING', ()=>{

  beforeEach(async ()=>{
    try{
      await User.deleteMany({})

     for(const user of initialUsers){
        const passwordHash = await bcrypt.hash(user.password, 10)
        user.password = passwordHash
        const newUser = new User(user)
        await newUser.save()
      }
    } catch(e){
      console.error(e)
    }
  })

  test('when I post a new user, the lenght of the initialUsers increase one', async ()=>{
    const newUser = {
     username: 'example 4',
     name: 'example4_name',
     password: '222' 
    }

    await api
          .post('/api/users')
          .send(newUser)
          .expect(200)
          .expect('Content-Type', /application\/json/)

    const { response, usernames } = await getAllUsers()
    expect(response.body).toHaveLength(initialUsers.length + 1)
    expect(usernames).toContain(newUser.username)
  })

  test('I can get the users', async ()=>{
    const { response } = await getAllUsers()
    expect(response.body).toHaveLength(initialUsers.length)
  })

  test.skip('I can´t create a user with the same password or username', async ()=>{
    const newUser = {
      username: 'kiko'
    }
  })

  afterAll(()=>{
    mongoose.connection.close()
    server.close()
  })

})  

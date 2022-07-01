
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

const getAllUsers = async () => {
    const response = await api.get('/api/users')
    const usernames = response.body.map(user => user.username)
  
    return { response, usernames }
}

module.exports = {  
  initialUsers,
  getAllUsers,
}
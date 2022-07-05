const mongoose = require('mongoose')

const { MONGO_DB_URI_TEST, MONGO_DB_URI, NODE_ENV } = process.env
const connectionString = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

// Conection to mongodb
// returns a promise
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then( () => {
    console.log('DATABASE CONNECTED')
  } )
  .catch(err => console.error({error: err.message}))
 
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const auth = req.headers.authorization
   let token = null
   if( auth && auth.toLowerCase().startsWith('bearer') ){
    token = auth.split(' ')[1]
   }

   const decodedToken = jwt.verify(token, process.env.SECRETWORD)

   if(!token || !decodedToken.id){
    return res.status(401).json({ error: 'Token missing or invalid' })
   }

   req.ownerId = decodedToken.id
   next()
}
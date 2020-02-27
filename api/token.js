const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets')

const secret = "random text here"

function generateToken(user) {
  const payload = {
    userid: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

 return jwt.sign(payload, jwtSecret, options)
}

module.exports = generateToken
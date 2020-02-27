const database = require('../db/dbconfig')

module.exports = {
  getUsers,
  registerUser,
  login

}

function getUsers() {
  return database('users')

  
}


function registerUser(userData) {
  return database('users')
  .insert(userData)
}

function login(userName) {
  return database('users')
  .where(userName)
}

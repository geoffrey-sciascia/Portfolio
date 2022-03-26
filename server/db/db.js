const config = require('./knexfile').development
const db = require('knex')(config)

function sayHello () {
  return db('hello')
    .select()
}

module.exports = {
  sayHello
}

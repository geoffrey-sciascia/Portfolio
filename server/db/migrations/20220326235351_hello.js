exports.up = function (knex) {
  return knex.schema.createTable('hello', (table) => {
    table.increments('id')
    table.string('greeting')
    table.string('language')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('hello')
}

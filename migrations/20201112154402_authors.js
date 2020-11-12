exports.up = (knex, Promise) => {
    return knex.schema.createTable('authors', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('authors')
  }
  
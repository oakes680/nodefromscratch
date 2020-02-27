exports.up = function (knex) {
  return (
    knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 150).notNullable().unique();
      tbl.string('email', 150).notNullable().unique();
      tbl.string('password', 150).notNullable();
    })
  )
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
};

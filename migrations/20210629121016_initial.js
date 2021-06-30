module.exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments()
    table.string("email").notNullable().unique()
    table.text("password_hash").notNullable()
  })
  await knex.schema.createTable("categories", (table) => {
    table.increments()
    table.string("name").notNullable()
    table.integer("budget").unsigned().notNullable()
    table.integer("userId").unsigned().notNullable()
    table
      .foreign("userId")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
  await knex.schema.createTable("expenditures", (table) => {
    table.increments()
    table.string("description").notNullable()
    table.integer("amount").unsigned().notNullable()
    table.integer("categoryId").unsigned().notNullable()
    table
      .foreign("categoryId")
      .references("id")
      .inTable("categories")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
}

module.exports.down = async (knex) => {
  await knex.schema.dropTable("expenditures")
  await knex.schema.dropTable("categories")
  await knex.schema.dropTable("users")
}


exports.up = async function (knex) {
    await knex.schema.createTable("names", (table) => {
       table.increments()
       table.text("name").notNull().unique()
    })

};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("names")
};

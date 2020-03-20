
exports.seed = async function(knex) {
   await knex("names").truncate()
   await knex("names").insert([
     {name: "bob"}
   ])
};

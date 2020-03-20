const db = require("../config")

module.exports = {
    insert,
    findById,
    update,
    remove,
    getAll
}

async function insert(user) {
    const [id] = await db("names").insert(user)
    return findById(id)
}

function findById(id) {
   return db("names")
   .where("id", id)
   .first()
}

async function update(id, changes){
    await db("names").update(changes).where("id", id)
    return findById(id)
}

function remove(id){
    return db("names").select("id", id).del()
}

function getAll(){
    return db("names")
}

const express = require("express")

const server = express()
const db = require("./data/model")

const port = 5000

server.use(express.json())

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})


if (!module.parent) {
    server.listen(port, () => {
        console.log(`Running at http://localhost:${port}`)
    })
}

server.get("/", async (req, res, next) => {
    try {
        res.json(await db.getAll())
    } catch (err) {
        next(err)
    }

})

server.post("/users", async (req, res, next) => {
    const user = await db.insert(req.body)

    res.status(201).json(user)
})

server.delete("/users/:id", async (req , res ,next) => {
    try {
       res.status(201).json(await db.remove(req.params.id))
    } catch (err) {
        next(err)
    }
})
module.exports = server
const supertest = require("supertest")

const server = require("../index")
const db = require("../config")

beforeEach(async () => {
    await db.seed.run()
})

test("add user", async () => {
    const res = await supertest(server)
    .post("/users")
    .send({name: "Dalton"})
    expect(res.body.name).toBe("Dalton")
})

test("check code for add user", async () => {
    const res = await supertest(server)
    .post("/users")
    .send({name:"dalton"})
    expect(res.statusCode).toBe(201)
})

test("get users", async () => {
    const res = await supertest(server).get("/")
    expect(res.type).toBe("application/json")
})

test("remove user", async () => {
   const res = await supertest(server).delete("/users/1")
   expect(res.statusCode).toBe(201)

})

test("remove user, check length", async () => {
    const res = await supertest(server).delete("/users/1")
    const users = await db("names").select("name")
    expect(users).toHaveLength(0)
 })
const supertest = require("supertest")
const { app } = require('../../index.js')

const api = supertest(app)

module.exports = api
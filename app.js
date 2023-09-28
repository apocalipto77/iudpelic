const express = require('express')
const { mongoConn} = require("./database/configuration")
const dotenv = require ("dotenv").config()

mongoConn()

const app = express() //app es una intancia de express

app.use(express.json())

const testRouter = require('./routes/test')
const generoRoutes = require('./routes/genero')
app.use('/api/v1/tests', testRouter)
app.use('/api/v1/generos',generoRoutes)

module.exports = app // exporta el archivo
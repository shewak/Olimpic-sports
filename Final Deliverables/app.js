const express = require("express")
const router = require("./route")
const parser = require("body-parser")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,"template")))
app.use(parser.json())
app.use(parser.urlencoded({extended : true}))

app.use(router);

app.listen(8080)

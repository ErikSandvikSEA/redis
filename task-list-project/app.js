const express = require('express')
const redis = require('redis')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.send("Welcome")
})

app.listen(3000)
console.log("Server Started On Port 3000")

module.exports = app
const express = require('express')
const app = express()

app.use(express.static('../Style'));
app.listen('3000')

app.route('/home').get((req, res) => res.sendFile(__dirname + '/index.html'))
app.route('/supporte').post((req,res) => res.send('hello world'))

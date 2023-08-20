const {cwd} = require('node:process')
// const express = require('express')
// const app = express()

// app.use(express.static('../Style'))

// app.listen('3000')



// app.route('/home').get((req,res) => res.sendFile(__dirname + '/index.html'))

function soma(x,y){
    console.log(x + y)
    return
}

soma(5,6)

console.log(process.cwd())
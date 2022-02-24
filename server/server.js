const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.css'))
})

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '18cd4a0683a643a3855e6c364e0924c8',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

let words = []

app.post('/api/words', (req, res) => {
    words.push(req.body.word)
    console.log(words)
    rollbar.log(`word '${req.body.word}' added`)
    res.status(200).send(words)
})


app.use(rollbar.errorHandler())

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`Crip walkin in on port ${port}`))
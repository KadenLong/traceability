const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.css'))
})

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`Crip walkin in on port ${port}`))
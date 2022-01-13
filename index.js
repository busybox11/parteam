const express = require('express')
const path = require('path')
const app = express()
const port = 4160

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/player/:code', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/player.html'))
})

app.listen(port, () => {
    console.log(`Listening on :${port}`)
})
const express = require('express')
const cors = require('cors')

const app = express()

const db = require('./db')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message : 'API is running!'})
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/places', (req,res) => {
    const places = db.prepare('SELECT * FROM places').all()
    res.json(places)
})

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body
    if (!name || !email || !message ) {
        return res.status(400).json({error : 'All fields are required!'})
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({error : 'Please enter a valid email address!'})
    }

    const insert = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)')
    insert.run(name, email, message)

    res.json({message : 'Message recieved!'})
})

app.get('/messages', (req, res) => {
  const messages = db.prepare('SELECT * FROM messages').all()
  res.json(messages)
})
const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' })
  }

  const insert = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)')
  insert.run(name, email, message)

  res.json({ message: 'Message received!' })
})

module.exports = router
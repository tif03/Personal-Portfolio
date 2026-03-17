const express = require('express')
const router = express.Router()
const db = require('../db')
const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)
console.log('RESEND KEY:', process.env.RESEND_API_KEY ? 'found' : 'NOT FOUND')

router.post('/', async (req, res) => {
  try {
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

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ty427@cornell.edu',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })

    res.json({ message: 'Message received!' })
  } catch (err) {
    console.error('Contact error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

module.exports = router
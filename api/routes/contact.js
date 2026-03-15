const express = require('express')
const router = express.Router()
const db = require('../db')

const nodemailer = require('nodemailer')
require('dotenv').config()

// Mail connection
const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS,
    }
})

router.post('/', async (req, res) => {
    const { name, email, message } = req.body

    if(!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' })
    } 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({error : 'Please enter a valid email address!'})
    }

    const insert = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)')
    insert.run(name, email, message)

    await transporter.sendMail({
        from : process.env.EMAIL_USER,
        to : process.env.EMAIL_USER,
        subject : `Message from ${name}`,
        text : `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })

    res.json({message : 'Message recieved!'})
})

module.exports = router
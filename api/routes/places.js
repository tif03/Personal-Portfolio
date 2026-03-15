const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    const places = db.prepare('SELECT * FROM places').all()
    res.json(places)
})

module.exports = router


const express = require('express')
const cors = require('cors')
const db = require('./db')
const contactRoutes = require('./routes/contact')
const placesRoutes = require('./routes/places')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/contact', contactRoutes)
app.use('/places',placesRoutes)

app.listen(3000, () => console.log('Server running on port 3000'))
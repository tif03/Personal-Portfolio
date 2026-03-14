const Database = require('better-sqlite3')
const db = new Database('portfolio.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        city TEXT NOT NULL,
        country TEXT NOT NULL
    )
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`)

console.log('Database initialized!')

const existingPlaces = db.prepare('SELECT COUNT(*) as count FROM places').get()

if (existingPlaces.count === 0) {
  const insert = db.prepare('INSERT INTO places (city, country) VALUES (?, ?)')
  
  const places = [
    ['Shanghai', 'China'],
    ['Tokyo', 'Japan'],
    ['Seoul', 'South Korea'],
    ['Bali', 'Indonesia'],
    ['Dublin', 'Ireland'],
    ['London', 'United Kingdom'],
    ['Paris', 'France'],
    ['Milan', 'Italy'],
    ['Barcelona', 'Spain'],
    ['Marrakech', 'Morocco'],
    ['San Juan', 'Puerto Rico'],
    ['San Francisco', 'USA'],
    ['San Diego', 'USA'],
    ['Los Angeles', 'USA'],
  ]

  places.forEach(place => insert.run(...place))
  console.log('Places seeded!')
}

module.exports = db




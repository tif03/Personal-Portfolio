const express = require('express')
const router = express.Router()

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = 'https://tiffany-yu-portfolio-production.up.railway.app/callback'

console.log('SPOTIFY CLIENT ID:', process.env.SPOTIFY_CLIENT_ID ? 'found' : 'NOT FOUND')
console.log('SPOTIFY CLIENT SECRET:', process.env.SPOTIFY_CLIENT_SECRET ? 'found' : 'NOT FOUND')

// one time use — visit /spotify/login in your browser to authorize your account
router.get('/login', (req, res) => {
  const scope = 'user-read-currently-playing user-top-read'
  const url = new URL('https://accounts.spotify.com/authorize')
  url.searchParams.append('client_id', CLIENT_ID)
  url.searchParams.append('response_type', 'code')
  url.searchParams.append('redirect_uri', REDIRECT_URI)
  url.searchParams.append('scope', scope)
  res.redirect(url.toString())
})

// one time use — called automatically after login, gives you your refresh token
router.get('/', async (req, res) => {
  try {
    const code = req.query.code

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI
      })
    })

    const data = await response.json()
    // copy the refresh_token from here and save it to Railway variables
    res.json(data)
  } catch (err) {
    console.error('Spotify callback error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// called by your React frontend to get now playing
router.get('/now-playing', async (req, res) => {
  try {
    // first get a fresh access token using the refresh token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
      })
    })

    const { access_token } = await tokenResponse.json()

    // then use it to get currently playing
    const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { 'Authorization': `Bearer ${access_token}` }
    })

    if (nowPlayingResponse.status === 204) {
      return res.json({ playing: false })
    }

    const data = await nowPlayingResponse.json()
    res.json({
      playing: true,
      track: data.item?.name,
      artist: data.item?.artists[0]?.name,
      album_art: data.item?.album?.images[0]?.url,
      song_url: data.item?.external_urls?.spotify
    })
  } catch (err) {
    console.error('Spotify now playing error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

module.exports = router
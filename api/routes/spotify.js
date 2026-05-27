const express = require('express')
const router = express.Router()

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

router.get('/now-playing', async (req, res) => {
  try {
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

    const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { 'Authorization': `Bearer ${access_token}` }
    })

    if (nowPlayingResponse.status === 200) {
      const data = await nowPlayingResponse.json()
      if (data.item) {
        return res.json({
          playing: true,
          track: data.item.name,
          artist: data.item.artists[0]?.name,
          album_art: data.item.album?.images[0]?.url,
          song_url: data.item.external_urls?.spotify
        })
      }
    }

    const topResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=short_term', {
      headers: { 'Authorization': `Bearer ${access_token}` }
    })

    const topData = await topResponse.json()
    const topTrack = topData.items?.[0]

    res.json({
      playing: false,
      track: topTrack?.name,
      artist: topTrack?.artists[0]?.name,
      album_art: topTrack?.album?.images[0]?.url,
      song_url: topTrack?.external_urls?.spotify
    })

  } catch (err) {
    console.error('Spotify now playing error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

module.exports = router

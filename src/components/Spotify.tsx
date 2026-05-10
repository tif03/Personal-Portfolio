import { useState, useEffect } from 'react'

interface NowPlaying {
  playing: boolean
  track?: string
  artist?: string
  album_art?: string
  song_url?: string
}

function Spotify() {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/spotify/now-playing`)
      .then(res => res.json())
      .then(data => setNowPlaying(data))
      .catch(() => setNowPlaying({ playing: false }))
  }, [])

  return (
    <a 
      href={nowPlaying?.song_url || '#'} 
      target="_blank"
      className="relative block w-[400px]"
    >
      {/* iPod background */}
      <img src="/images/About/spotify/music_ipod.PNG" alt="iPod" className="w-full" />
      
      {/* Album art inside the screen */}
      <div className="absolute flex items-center gap-2 p-2 overflow-hidden"
            style={{ 
                top: '12%', 
                left: '8%', 
                width: '42%', 
                height: '75%'
            }}>
        {nowPlaying?.playing && nowPlaying.album_art ? (
          <img 
            src={nowPlaying.album_art} 
            alt="album art" 
            className="w-20 h-20 object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
        )}
      </div>

      {/* Track info */}
      <div className="absolute bottom-24 left-2 right-18 text-center">
        <p className="text-xs font-bold text-pink-mid truncate">
          {nowPlaying?.playing ? nowPlaying.track : 'Not playing'}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {nowPlaying?.playing ? nowPlaying.artist : ''}
        </p>
      </div>
    </a>
  )
}

export default Spotify
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
      className="relative block w-[500px] leading-none"
    >
      {/* iPod background */}
      <img src="/images/About/spotify/music_ipod.PNG" alt="iPod" className="w-full" />
      
      {/* Now playing label — inside iPod, above screen */}
      <p 
        className="absolute text-xs text-gray-500 tracking-widest uppercase"
        style={{ top: '28%', left: '10%' }}
      >
        {nowPlaying?.playing ? '♫ now playing' : '♫ current fave'}
      </p>

      {/* Screen content */}
      <div 
        className="absolute flex items-center gap-3 overflow-hidden px-2"
        style={{ top: '18%', left: '8%', width: '42%', height: '65%' }}
      >
        {/* Album art */}
        {nowPlaying?.album_art ? (
          <img 
            src={nowPlaying.album_art} 
            alt="album art" 
            className="w-14 h-14 object-cover flex-shrink-0 rounded-sm"
          />
        ) : (
          <div className="w-14 h-14 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded-sm">
            <span className="text-xl">🎵</span>
          </div>
        )}

        {/* Track info */}
        <div className="flex flex-col gap-1 overflow-hidden min-w-0">
          <p className="text-xs font-bold text-gray-800 truncate">
            {nowPlaying?.track || '—'}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {nowPlaying?.artist || ''}
          </p>
        </div>
      </div>
    </a>
  )
}

export default Spotify
import { useState, useMemo } from 'react'
import { danceVideos } from '../data/dance'

function Dance() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [filter, setFilter] = useState<'all' | 'led'>('all')

  // Filter data safely
  const filtered = useMemo(() => {
    return danceVideos.filter(v => {
      if (filter === 'led') return v.led
      return true
    })
  }, [filter])

  const current = filtered[activeIndex]

  // Reset index if filter changes or data shrinks
  function handleFilter(f: 'all' | 'led') {
    setFilter(f)
    setActiveIndex(0)
  }

  function prev() {
    setActiveIndex(i => (i - 1 + filtered.length) % filtered.length)
  }

  function next() {
    setActiveIndex(i => (i + 1) % filtered.length)
  }

  if (!current || filtered.length === 0) return null

  return (
    <section id="dance" className="py-24 px-8 max-w-3xl mx-auto">

      <h2
        className="text-5xl font-bold mb-3"
        style={{ fontFamily: 'DM Serif Display' }}
      >
        Dance
      </h2>

      <p className="text-gray-400 mb-8 text-sm">
        K-pop covers I’ve participated in 💫
      </p>

      {/* FILTER BUTTONS */}
      <div className="flex gap-3 mb-10">
        {(['all', 'led'] as const).map(f => (
          <button
            key={f}
            onClick={() => handleFilter(f)}
            className={`px-5 py-2 text-sm font-bold border-2 transition-all
              ${
                filter === f
                  ? 'bg-pink-mid text-white border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white border-black text-gray-600 hover:bg-pink-light'
              }`}
          >
            {f === 'all' ? 'All Videos' : 'Self-Led'}
          </button>
        ))}
      </div>

      {/* CAROUSEL */}
      <div className="relative overflow-hidden">

        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translate3d(-${activeIndex * 100}%, 0, 0)`
          }}
        >

          {filtered.map(video => (
            <div
              key={video.id}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <div className="w-full max-w-xl aspect-video border-2 border-black shadow-md overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="w-full h-full"
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-between items-center mt-8">

        <button
          onClick={prev}
          className="px-4 py-2 border-2 border-black bg-white 
                     hover:bg-pink-light transition-all
                     active:translate-x-0.5 active:translate-y-0.5"
        >
          ← Prev
        </button>

        <div className="text-center">
          <p className="font-semibold text-blue-dark text-sm">
            {current.title}
          </p>
          <p className="text-xs text-gray-400">
            {activeIndex + 1} / {filtered.length}
          </p>
        </div>

        <button
          onClick={next}
          className="px-4 py-2 border-2 border-black bg-white 
                     hover:bg-pink-light transition-all
                     active:translate-x-0.5 active:translate-y-0.5"
        >
          Next →
        </button>

      </div>

    </section>
  )
}

export default Dance
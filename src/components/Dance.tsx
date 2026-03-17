import { useState } from 'react'
import { danceVideos } from '../data/dance'

function Dance() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [filter, setFilter] = useState<'all' | 'led' | 'performed'>('all')

  const filtered = danceVideos.filter(v => {
    if (filter === 'led') return v.led
    if (filter === 'performed') return !v.led
    return true
  })

  const current = filtered[activeIndex]

  function prev() {
    setActiveIndex(i => (i === 0 ? filtered.length - 1 : i - 1))
  }

  function next() {
    setActiveIndex(i => (i === filtered.length - 1 ? 0 : i + 1))
  }

  function handleFilter(f: 'all' | 'led' | 'performed') {
    setFilter(f)
    setActiveIndex(0)
  }

  return (
    <section id="dance" className="py-24 px-8 max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold mb-4" style={{fontFamily: 'DM Serif Display'}}>Dance</h2>
      <p className="text-gray-400 mb-8 text-sm">K-pop covers that I have personally led and participated in.</p>

      <div className="flex gap-3 mb-8">
        {(['all', 'led', 'performed'] as const).map(f => (
          <button
            key={f}
            onClick={() => handleFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              filter === f
                ? 'bg-pink-mid text-white'
                : 'border border-pink-light text-gray-500 hover:border-pink-mid'
            }`}
          >
            {f === 'all' ? 'All' : f === 'led' ? 'Self-Led' : 'Performed'}
          </button>
        ))}
      </div>

      {current && (
        <div>
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${current.id}`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={prev} className="px-4 py-2 border border-pink-light rounded-full text-sm text-gray-500 hover:border-pink-mid transition-colors">← Prev</button>
            <div className="text-center">
              <p className="font-medium text-blue-dark text-sm">{current.title}</p>
              <p className="text-xs text-gray-400">{activeIndex + 1} / {filtered.length}</p>
            </div>
            <button onClick={next} className="px-4 py-2 border border-pink-light rounded-full text-sm text-gray-500 hover:border-pink-mid transition-colors">Next →</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Dance
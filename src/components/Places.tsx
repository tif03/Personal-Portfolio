import { useState, useEffect } from 'react'

interface Place {
  id: number
  city: string
  country: string
}

function Places() {
  const [places, setPlaces] = useState<Place[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json())
      .then(data => {
        setPlaces(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load places')
        setLoading(false)
      })
  }, [])

  if (loading) return <section id="places" className="py-24 px-8 max-w-3xl mx-auto"><p>Loading...</p></section>
  if (error) return <section id="places" className="py-24 px-8 max-w-3xl mx-auto"><p>{error}</p></section>

  return (
    <section id="places" className="py-24 px-8 max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold mb-12" style={{fontFamily: 'DM Serif Display'}}>Places</h2>
      <div className="flex flex-wrap gap-3">
        {places.map(place => (
          <div key={place.id} className="bg-white border border-pink-light rounded-full px-4 py-2 text-sm text-blue-dark shadow-sm">
            {place.city}, {place.country}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Places
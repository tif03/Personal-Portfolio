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
    fetch('http://localhost:3000/places')
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

  if (loading) return <section id="places"><p>Loading...</p></section>
  if (error) return <section id="places"><p>{error}</p></section>

  return (
    <section id="places">
      <h2>Places</h2>
      {places.map(place => (
        <div key={place.id}>
          <p>{place.city}, {place.country}</p>
        </div>
      ))}
    </section>
  )
}

export default Places
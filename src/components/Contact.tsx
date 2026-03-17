import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, message})
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error)
    } else {
      setSubmitted(true)
      setError(null)
    }
  }

  if (submitted) return (
    <section id='contact' className="py-24 px-8 max-w-xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-6" style={{fontFamily: 'DM Serif Display'}}>Contact</h2>
      <p className="text-gray-500 mb-6">Thanks for reaching out! I'll get back to you soon 💜</p>
      <button
        onClick={() => {
          setSubmitted(false)
          setName('')
          setEmail('')
          setMessage('')
        }}
        className="px-6 py-2 bg-pink-mid text-white rounded-full text-sm hover:bg-blue-dark transition-colors"
      >
        Send another message
      </button>
    </section>
  )

  return (
    <section id='contact' className="py-24 px-8 max-w-xl mx-auto">
      <h2 className="text-5xl font-bold mb-12" style={{fontFamily: 'DM Serif Display'}}>Contact</h2>
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      <div className="flex flex-col gap-4">
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          className="border border-pink-light rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-mid transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-pink-light rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-mid transition-colors"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={5}
          className="border border-pink-light rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-mid transition-colors resize-none"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-pink-mid text-white rounded-full text-sm hover:bg-blue-dark transition-colors"
        >
          Send
        </button>
      </div>
    </section>
  )
}

export default Contact
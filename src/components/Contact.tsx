import { useState } from 'react'

const notebookInputClass =
  'w-full bg-transparent border-0 border-b-2 border-pink-light rounded-none px-1 py-3 text-sm outline-none focus:border-pink-mid transition-colors placeholder:text-gray-300'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error)
    } else {
      setSubmitted(true)
      setError(null)
    }
  }

  const paperCard = (children: React.ReactNode) => (
    <section id='contact' className="py-24 px-8 flex flex-col items-center">
      <div className="w-full max-w-lg">
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className="text-5xl font-bold" style={{ fontFamily: 'DM Serif Display' }}>Contact</h2>
        </div>
        <p className="text-gray-400 text-sm mb-10">drop me a note! i'd love to hear from you ⊹ ࣪ ˖ ໒꒱</p>
        <div
          className="relative pl-14 pr-10 py-10 shadow-lg"
          style={{ background: '#fdf8f0' }}
        >
          {/* left margin line */}
          <div className="absolute top-0 left-10 bottom-0 w-[2px] bg-red-200" />
          {children}
        </div>
      </div>
    </section>
  )

  if (submitted) return paperCard(
    <div className="text-center py-6">
      <p className="text-4xl mb-4">💌</p>
      <p className="text-gray-600 text-sm mb-6">Thanks for reaching out! I'll get back to you soon ₊˚⊹♡</p>
      <button
        onClick={() => {
          setSubmitted(false)
          setName('')
          setEmail('')
          setMessage('')
        }}
        className="px-6 py-2 bg-pink-mid text-white text-sm font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
      >
        send another ↺
      </button>
    </div>
  )

  return paperCard(
    <div className="flex flex-col gap-6">
      {error && <p className="text-red-400 text-xs">{error}</p>}
      <input
        type='text'
        placeholder='your name'
        value={name}
        onChange={e => setName(e.target.value)}
        className={notebookInputClass}
      />
      <input
        type="email"
        placeholder="your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={notebookInputClass}
      />
      <textarea
        placeholder="your message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={5}
        className={`${notebookInputClass} resize-none`}
      />
      <div className="flex justify-end mt-2">
        <button
          onClick={handleSubmit}
          className="px-8 py-3 bg-pink-mid text-white text-sm font-bold border-2 border-black
                     shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
        >
          send ✈︎
        </button>
      </div>
    </div>
  )
}

export default Contact

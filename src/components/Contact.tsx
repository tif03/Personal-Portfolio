import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    // backend connection

    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({name, email, message})
    })

    const data = await res.json()

    if (!res.ok){
      setError(data.error)
    } else {
      setSubmitted(true)
      setError(null)
    }

  }

  if (submitted) return (
    <section id='contact'>
      <h2>Contact</h2>
      <p>Thanks for reaching out! I'll get back to you soon 💜</p>
      <button onClick={() => {
        setSubmitted(false)
        setName('')
        setEmail('')
        setMessage('')
      }}>Send another message</button>
    </section>
  )

  return (
    <section id='contact'>
      <h2>Contact</h2>
      <div>
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </section>
  )
}

export default Contact
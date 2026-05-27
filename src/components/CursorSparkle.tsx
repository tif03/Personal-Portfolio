import { useEffect } from 'react'

const SYMBOLS = ['✦', '✧', '⋆', '✿', '♡', '·']
const COLORS = ['#d28090', '#b3cee5', '#f7cac9', '#456d8f', '#e8a8b8']

export default function CursorSparkle() {
  useEffect(() => {
    let last = 0

    function spawn(x: number, y: number) {
      const el = document.createElement('span')
      el.className = 'cursor-sparkle'
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      el.style.left = `${x}px`
      el.style.top = `${y}px`
      el.style.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      el.style.fontSize = `${Math.random() * 10 + 8}px`
      el.style.setProperty('--dx', `${(Math.random() - 0.5) * 28}px`)
      el.style.setProperty('--dy', `${-(Math.random() * 28 + 8)}px`)
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 750)
    }

    function onMove(e: MouseEvent) {
      const now = Date.now()
      if (now - last < 55) return
      last = now
      spawn(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return null
}

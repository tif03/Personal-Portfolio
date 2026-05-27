import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
// import Leadership from './components/Leadership'
import Dance from './components/Dance'
// import Places from './components/Places'
import Contact from './components/Contact'
import CursorSparkle from './components/CursorSparkle'
import ScrollReveal from './components/ScrollReveal'

const SYMBOLS = ['✦', '✧', '⋆', '✦', '✧', '⋆', '✦', '✧', '⋆', '✦', '✧', '⋆', '✦', '✧', '⋆', '✦']

const POSITIONS = [
  { top: '4%',  left: '1%'  },
  { top: '9%',  right: '2%' },
  { top: '16%', left: '5%'  },
  { top: '21%', right: '7%' },
  { top: '28%', left: '2%'  },
  { top: '33%', right: '1%' },
  { top: '40%', left: '8%'  },
  { top: '47%', right: '4%' },
  { top: '54%', left: '3%'  },
  { top: '59%', right: '9%' },
  { top: '65%', left: '6%'  },
  { top: '71%', right: '2%' },
  { top: '78%', left: '1%'  },
  { top: '83%', right: '6%' },
  { top: '90%', left: '4%'  },
  { top: '95%', right: '3%' },
]

function Scatter() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden>
      {POSITIONS.map((pos, i) => (
        <span
          key={i}
          className="absolute text-pink-mid"
          style={{ ...pos, opacity: 0.18, fontSize: `${10 + (i % 4) * 4}px` }}
        >
          {SYMBOLS[i % SYMBOLS.length]}
        </span>
      ))}
    </div>
  )
}

function App() {
  return (
    <div>
      <CursorSparkle />
      <Navbar />
      <Hero />

      <div className="relative">
        <Scatter />
        <ScrollReveal>
          <About />
        </ScrollReveal>
      </div>

      <div className="relative">
        <Scatter />
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
      </div>

      <div className="relative">
        <Scatter />
        <ScrollReveal>
          <Dance />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  )
}

export default App

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-pink-light px-8 py-4 flex justify-center items-center z-50">
      <div className="flex gap-16">
        <a href="#hero" className="text-sm hover:text-pink-mid transition-colors">HOME</a>
        <a href="#about" className="text-sm hover:text-pink-mid transition-colors">ABOUT</a>
        <a href="#experience" className="text-sm hover:text-pink-mid transition-colors">EXPERIENCE</a>
        <a href="#projects" className="text-sm hover:text-pink-mid transition-colors">PROJECTS</a>
        <a href="#leadership" className="text-sm hover:text-pink-mid transition-colors">LEADERSHIP</a>
        <a href="#dance" className="text-sm hover:text-pink-mid transition-colors">DANCE</a>
        <a href="#places" className="text-sm hover:text-pink-mid transition-colors">PLACES</a>
        <a href="#contact" className="text-sm hover:text-pink-mid transition-colors">CONTACT</a>
      </div>
    </nav>
  )
}

export default Navbar

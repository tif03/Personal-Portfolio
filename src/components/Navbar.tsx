function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-pink-light px-8 py-4 flex justify-between items-center z-50">
      <span className="font-bold text-2xl" style={{fontFamily: 'DM Serif Display'}}>Tiffany Yu</span>
      <div className="flex gap-6">
        <a href="#hero" className="text-sm hover:text-pink-mid transition-colors">Home</a>
        <a href="#about" className="text-sm hover:text-pink-mid transition-colors">About</a>
        <a href="#experience" className="text-sm hover:text-pink-mid transition-colors">Experience</a>
        <a href="#projects" className="text-sm hover:text-pink-mid transition-colors">Projects</a>
        <a href="#leadership" className="text-sm hover:text-pink-mid transition-colors">Leadership</a>
        <a href="#places" className="text-sm hover:text-pink-mid transition-colors">Places</a>
        <a href="#contact" className="text-sm hover:text-pink-mid transition-colors">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar


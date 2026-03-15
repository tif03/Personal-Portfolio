function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-cream">
      <h1 className="text-7xl font-bold mb-4" style={{fontFamily: 'DM Serif Display'}}>
        Tiffany Yu
      </h1>
      <p className="text-xl text-blue-dark font-medium mb-2">
        Software Engineer based in New York
      </p>
      <p className="text-gray-400 mb-8 max-w-md">
        I build things, and I love to dance, travel, and be creative :)
      </p>
      <div className="flex gap-6">
        <a 
          href="https://github.com/tif03" 
          target="_blank"
          className="px-6 py-2 bg-pink-mid text-white rounded-full text-sm hover:bg-blue-light transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/tiffanyyyu" 
          target="_blank"
          className="px-6 py-2 bg-pink-mid text-white rounded-full text-sm hover:bg-blue-light transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Hero
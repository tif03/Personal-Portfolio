function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center px-16"
      style={{
        backgroundImage: "url('/images/Hero/hero-background-2.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto gap-12">
        
        <div className="flex flex-col gap-3 flex-1">
          <p className="text-s text-blue-dark tracking-[0.3em] uppercase">✤ ݁˖ Software Engineer 𖦹 New York .𖥔 ݁ ˖𓂃</p>
          <h1 className="text-9xl font-bold leading-none" style={{fontFamily: 'Playfair Display', fontStyle: 'italic'}}>
            Tiffany
          </h1>
          <h1 className="text-9xl font-bold leading-none" style={{fontFamily: 'Playfair Display', fontStyle: 'italic'}}>
            Yu
          </h1>
          <p className="text-gray-400 max-w-sm leading-relaxed text-sm mt-2">
            I build things, and I love to dance, travel, and be creative :)
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/tif03"
              target="_blank"
              className="px-6 py-3 bg-pink-mid text-white text-sm font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tiffanyyyu"
              target="_blank"
              className="px-6 py-3 bg-blue-light text-blue-dark text-sm font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              LinkedIn
            </a>
          </div>
              <p className="text-s text-blue-dark mt-2">.𖥔 ݁ ˖𓂃.☘︎ ܁˖༘⋆</p>
        </div>

        <div className="relative flex-shrink-0 w-[380px]">
          <img
            src="/images/Hero/profile-pic.jpg"
            alt="Tiffany Yu"
            className="w-95 object-cover shadow-xl"
            style={{
              border: '12px solid white',
              borderBottom: '48px solid white',
              transform: 'rotate(2deg)',
              boxShadow: '4px 4px 20px rgba(0,0,0,0.15)'
            }}
          />

          <img
            src="/images/Hero/photobooth.JPG"
            alt="photobooth"
            className="absolute w-30 shadow-lg"
            style={{
              transform: 'rotate(-8deg)',
              boxShadow: '3px 3px 15px rgba(0,0,0,0.2)',
              bottom: '-80px',
              left: '-40px',
              zIndex: 10,
            }}
          />

          <img
            src="/images/Hero/lily.PNG"
            alt="flower"
            className="absolute w-50"
            style={{
              transform: 'rotate(-15deg)',
              top: '-10px',
              right: '-40px',
              zIndex: 20,
            }}
          />

          <img
            src="/images/stickers/star-rhinestone.jpg"
            alt="sticker"
            className="absolute w-18"
            style={{ top: '10px', left: '20px', transform: 'rotate(-10deg)', zIndex: 30 }}
          />

        </div>

      </div>
    </section>
  )
}

export default Hero
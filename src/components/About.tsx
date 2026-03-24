function About() {
  return (
    <section id="about" className="relative px-16 py-24 flex justify-center">
      
      <div 
        className="absolute bg-blue-light shadow-md"
        style={{ 
          transform: 'rotate(-3deg)',
          width: '600px',
          height: '50%',
          top: '-100px',
          left : '100px',
          zIndex: 0,
        }}
      />

      <img
        src="/images/stickers/wings.PNG"
        alt="sticker"
        className="absolute w-55"
        style={{ top: '0px', left: '250px', transform: 'rotate(-5deg)', zIndex: 30 }}
      />

      <img 
        src="/images/About/green-gingham-washi-tape.png"
        alt="washi tape"
        className="absolute w-90"
        style={{ 
          transform: 'rotate(-3deg)',
          top : '-180px',
          left : '30px'
         }}
      />

      <div 
        className="bg-pink-light p-12 shadow-md relative z-10"
        style={{ 
          width: '700px',
        }}
      >
        <h2 className="text-5xl font-bold mb-8" style={{fontFamily: 'DM Serif Display'}}>About Me</h2>
        <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
          <p>
            I am a Computer Science Master's student at <strong className="text-blue-dark font-semibold">Cornell Tech</strong> in New York City, where I am focusing on the intersection of <strong className="text-blue-dark font-semibold">AI/ML and business</strong>, exploring how emerging technology can drive real world impact across industries. Through the entrepreneurial nature of the program, I'm gaining hands-on experience thinking like a founder, from customer research and product strategy to pitching and iterating fast.
          </p>
          <p>
            I got my Bachelor's degree at <strong className="text-blue-dark font-semibold">Boston University</strong>, where I studied <strong className="text-blue-dark font-semibold">Computer Science</strong> with a minor in Business Administration and Management.
             During my time there, I served as a Teaching Assistant for <strong className="text-blue-dark font-semibold">Discrete Math</strong> and <strong className="text-blue-dark font-semibold">Introduction to Python</strong>, and President of <a href="https://buwics.wixsite.com/boston-wics" target="_blank" className="text-blue-dark font-semibold underline hover:text-pink-mid transition-colors">Women in Computer Science</a>, 
             roles that deepened my commitment to building inclusive, supportive communities in tech.
          </p>
          <p>
            Outside of code, I am a dancer, traveler, and creative at heart. I've done <strong className="text-blue-dark font-semibold">Chinese Folk dance</strong> since I was very young, 
            performing in multiple company showcases, during a <strong className="text-blue-dark font-semibold">Celtics half-time</strong>, and at international dance competitions. 
            At BU, I joined <a href="https://www.youtube.com/@BUmiXxKPopDance" target="_blank" className="text-blue-dark font-semibold underline hover:text-pink-mid transition-colors">MiXx</a>, arranging and performing K-pop covers for <strong className="text-blue-dark font-semibold">25k subscribers</strong> on YouTube. I also love to travel, having been to cities across <strong className="text-blue-dark font-semibold">four continents</strong>, and love to do crafts!
          </p>
        </div>
      </div>

      <pre className="absolute text-pink-mid text-xs mt-4" 
           style={{
              bottom : '-70px'
           }}>
      {`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      ⣠⠔⠒⠒⠒⢤⡀⠀⡤⠒⠒⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠃⠀⠀⣠⢠⠀⢱⡌⠀⡤⣄⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠸⣄⣀⠜⠣⣀⣠⠟⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠤⢀⢳⡀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⢈⠜⡀⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⢀⣠⠴⠒⠒⠒⠒⠢⡀⠀⠀⠀⠀⢀⡀⣀⠀⠀⠀⠀⢎⢠⡄⢀⠈⢯⠲⢄⡀⠁⠀⠀⠀⠀⡠⠖⡱⠁⡀⢠⢄⡱⠀⠀⠀⠀⣀⢀⡀⠀⠀⠀⠀⢀⠔⠒⠒⠒⠒⠦⣄⡀⠀
      ⢰⠋⢰⠄⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⣏⠀⠠⢇⠀⠀⠀⠀⠉⠀⠀⡃⢸⡆⠀⠙⢢⡀⢀⡴⠋⠀⢲⡇⢸⠀⠀⠉⠀⠀⠀⠀⠸⠆⠀⣹⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠠⡆⠙⡆
      ⠙⠀⠊⠀⠀⠀⢠⣤⡖⢺⠒⠒⢢⠀⠈⠒⡄⠀⠈⠈⠀⠁⠀⠁⣴⠃⡜⢡⡄⠁⠈⢹⡏⠈⠀⠘⡔⣧⠘⣦⠀⠀⠀⠀⠀⠀⠀⢠⠐⠁⠀⡔⠒⠒⡗⢲⣤⡄⠀⠀⠀⠑⠀⠃
      ⠀⠀⠀⠀⣠⠞⠉⠀⡠⠃⢀⡴⠒⡏⠁⠒⠂⠭⠔⣒⣒⣒⣒⣊⠥⠚⢁⠎⠀⠀⠀⠀⠀⠀⠀⠀⠱⡈⠓⠬⣑⣒⣒⣒⣒⠢⠭⠐⠒⠈⢹⠒⢦⡀⠘⢄⠀⠉⠳⣄⠀⠀⠀⠀
      ⠀⠀⠀⠀⠣⠀⠤⠊⠀⠰⣋⣀⠜⠀⠀⠀⠀⠀⠐⠢⠤⠤⠤⠄⠐⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠂⠠⠤⠤⠤⠄⠒⠀⠀⠀⠀⠀⠣⣀⣙⠆⠀⠑⠦⠀⠜⠀⠀⠀⠀`}
      </pre>

    </section>

    
  )
}

export default About
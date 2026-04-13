function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-5">

      <div className="flex gap-8 px-6 py-3
                      bg-white/50 backdrop-blur-md">

        {[
          ['HOME', '#hero'],
          ['ABOUT', '#about'],
          ['PROJECTS', '#projects'],
          ['DANCE', '#dance'],
          ['CONTACT', '#contact'],
        ].map(([label, link]) => (
          <a
            key={label}
            href={link}
            className="relative text-xs font-medium tracking-wide text-gray-700
                       transition-colors hover:text-pink-mid"
          >
            {label}

            {/* hover underline */}
            <span
              className="absolute left-0 -bottom-1 w-0 h-[1px] 
                         bg-pink-mid transition-all duration-300
                         group-hover:w-full"
            />
          </a>
        ))}

      </div>
    </nav>
  )
}

export default Navbar
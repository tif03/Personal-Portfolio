import { useState, useEffect } from 'react'

interface Repo {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
  fork: boolean
}

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/tif03/repos')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter((repo: Repo) => !repo.fork)
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
        setRepos(filtered)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load projects')
        setLoading(false)
      })
  }, [])

  if (loading) return <section id="projects" className="py-24 px-8 max-w-5xl mx-auto"><p>Loading...</p></section>
  if (error) return <section id="projects" className="py-24 px-8 max-w-5xl mx-auto"><p>{error}</p></section>

  return (
    <section id='projects' className="py-24 px-8 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold mb-12" style={{fontFamily: 'DM Serif Display'}}>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="p-6 border-2 border-black 
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                        hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                        transition-all flex flex-col gap-4 relative overflow-hidden"
            >

              <div 
                className="absolute inset-0 z-0 opacity-50"
                style={{
                  backgroundImage: "url('/images/Projects/projects_background.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              <div className="relative z-10 flex flex-col gap-4">

                <div className="flex justify-between items-start">
                  <span className="font-semibold text-blue-dark text-lg">
                    {repo.name}
                  </span>

                  {repo.language && (
                    <span className="text-xs px-3 py-1 font-bold border-2 border-black bg-blue-light text-blue-dark">
                      {repo.language}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {repo.description || 'No description'}
                </p>

              </div>
            </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
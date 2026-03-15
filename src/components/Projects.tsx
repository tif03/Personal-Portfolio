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
      <div className="grid grid-cols-2 gap-6">
        {repos.map(repo => (
            <a
            key={repo.id}
            href={repo.html_url}
            target='_blank'
            className="bg-white border border-pink-light rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <span className="font-semibold text-blue-dark">
                {repo.name}
              </span>
              {repo.language && (
                <span className="text-xs px-2 py-1 rounded-full font-medium bg-pink-light text-pink-mid">
                  {repo.language}
                </span>
              )}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">
              {repo.description || 'No description'}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
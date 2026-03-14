import { useState, useEffect } from 'react'

interface Repo {
    id : number,
    name : string,
    description : string | null,
    language : string | null,
    startgazers_count : number,
    html_url : string,
    fork : boolean
}

function Projects() {
    const [repos, setRepos] = useState<Repo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null> (null)

    useEffect(() => {
        fetch('https://api.github.com/users/tif03/repos')
            .then(res => res.json())
            .then(data => {
                const filtered = data
                    .filter((repo : Repo) => !repo.fork)
                    .sort((a : Repo, b : Repo) => b.startgazers_count - a.startgazers_count)
                setRepos(filtered)
                setLoading(false)
            })
            .catch(() => {
                setError('Failed to load projects')
                setLoading(false)
            })
    }, [])

    if (loading) return <section id="projects"><p>Loading...</p></section>
    if (error) return <section id="projects"><p>{error}</p></section>


    return (
        <section id='projects'>
            <h2>Projects</h2>
            {repos.map(repo => (
                <div key={repo.id}>
                    <a href={repo.html_url} target='_blank'>{repo.name}</a>
                    <p>{repo.description || 'No description'}</p>
                    <p>{repo.language}</p>
                </div>
            ))}
        </section>
    )
}

export default Projects
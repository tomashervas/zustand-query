import { useQuery } from '@tanstack/react-query'
import { Repository } from './interfaces'

import './App.css'
import Card from './components/Card'
import { useFavoriteRepos } from './store/favoriteRepos'

function App() {

  const getRepos = async () => {
    const response = await fetch('https://api.github.com/users/tomashervas/repos')
    const data: Repository[]  = await response.json()
    return data
  }

  const { isLoading, data } = useQuery(['repos'], getRepos)

  const {idsFav}  = useFavoriteRepos()

  // if (!isLoading) {
  //   console.log(data)
  // }

  return (
    <div className="App">
      <h3>RepositoriosApp con Zustand y React Query</h3>
      {isLoading && <p>Loading...</p>}
      {idsFav.length > 0 && (
        <div>
          <h3>Favoritos</h3>
          <ul>
            {idsFav.map((id) => {
              const repo = data?.find((repo) => repo.id === id)
              return <li key={id}>{repo?.name}</li>
              })}
          </ul> 
        </div>
      )}
      {data && (
        <ul>
          {data.map((repo) => (
            <Card key={repo.id} repo={repo} 
            isFavourite={idsFav.includes(repo.id)}/>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

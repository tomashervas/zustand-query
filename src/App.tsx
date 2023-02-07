import { useQuery } from '@tanstack/react-query'
import { Repository } from './interfaces'

import './App.css'

function App() {

  const getRepos = async () => {
    const response = await fetch('https://api.github.com/users/tomashervas/repos')
    const data: Repository[]  = await response.json()
    return data
  }

  const { isLoading, error, data } = useQuery(['repos'], getRepos)

  // if (!isLoading) {
  //   console.log(data)
  // }

  return (
    <div className="App">

      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

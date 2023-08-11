import './App.css'
import { useWeather } from './hooks/useWeather'
import { WeatherCard } from './components/WeatherCard'
import { useSearch } from './hooks/useSearch'

function App() {
  const {search, setSearch, error} = useSearch()
  const {weather, getWeather} = useWeather({search})

  const handleSubmit = (e) => {
    e.preventDefault()
    getWeather()
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    if(newSearch.startsWith(' ')) return
    setSearch(newSearch)
  }

  return (
    <main>

    <form className='weather-form' onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder='New York' value={search} />
      <button>Submit</button>
      <p>{error}</p>
    </form>

      <WeatherCard weather={ weather } />

    </main>
  )
}

export default App

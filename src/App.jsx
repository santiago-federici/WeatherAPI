import './App.css'
import { useWeather } from './hooks/useWeather'
import { WeatherCard } from './components/WeatherCard'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const {weather, getWeather} = useWeather({search})

  const handleSubmit = (e) => {
    e.preventDefault()

    getWeather()

    console.log(weather)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <main>

    <form className='weather-form' onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder='New York' />
      <button>Submit</button>
    </form>


    <WeatherCard weather={ weather } />







    </main>
  )
}

export default App

'use client'
import axios from 'axios'
import { useState } from 'react'
import Wheater from './[name]/page'
import SearchBar from '@/components/shared/SeachBar'

export default function Home() {
  const [city, setCity] = useState('')
  const [wheater, setWheater] = useState({})
  const [loading, setLoading] = useState(false)

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=946327b2580d1f056bbef0a6e3d1c05a`

  const fetchWeather = async () => {
    setLoading(true)
    try {
      const response = await axios.get(api)
      setWheater(response.data)
      console.log(wheater)
    } catch (error) {
      console.error(error)
    }
    setCity('')
    setLoading(false)
  }
  console.log(city)
  return (
    <div>
      <div className='w-full m-auto max-w-[500px]'>
        <SearchBar fetchWeather={fetchWeather} setCity={setCity} city={city}/>
      </div>
      {!wheater.main && (
        <div className='h-full flex justify-start'>
        </div>
      )}
      {wheater.main && <Wheater data={wheater}/>}
    </div>
  )
}

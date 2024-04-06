import { useContext, useEffect, useState } from 'react'
import { DateContext } from '../context/DateContext'

const useMaxTemp = () => {
  const apiKey = import.meta.env.VITE_WEATHER_KEY
  const latitude = '-25.408703'
  const longitude = '27.7415136'
  const [maxTemp, setMaxTemp] = useState(null)
  const currentDate = useContext(DateContext)

  useEffect(() => {
    const url = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperatureMax&timesteps=1h&units=metric&apikey=${apiKey}`

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status} `)
        }
        return res.json()
      })
      .then((res) => {
        const intervals = res.data.timelines[0].intervals
        const tempValues = intervals
          .filter((intervals) => intervals.startTime.startsWith(currentDate))
          .map((interval) => interval.values.temperatureMax)

        const highestTemp = tempValues.length ? Math.max(...tempValues) : null

        setMaxTemp(highestTemp)
      })
      .catch((error) => {
        console.error('There was an error fetching the weather data', error)
      })
  }, [currentDate])
  return maxTemp
}

export default useMaxTemp

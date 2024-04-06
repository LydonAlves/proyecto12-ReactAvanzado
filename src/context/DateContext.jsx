import { createContext, useEffect, useState } from 'react'

const formatDate = (date) => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = `0${d.getMonth() + 1}`.slice(-2)
  const day = `0${d.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}

export const DateContext = createContext()

const DateProvider = ({ children }) => {
  const [currentDate, setCurrentdate] = useState(formatDate(new Date()))

  useEffect(() => {
    const checkDate = () => {
      const now = formatDate(new Date())
      if (currentDate !== now) {
        setCurrentdate(now)
      }
    }

    const intervalId = setInterval(checkDate, 24 * 60 * 60 * 1000)
    checkDate()

    return () => clearInterval(intervalId)
  }, [currentDate])

  return (
    <DateContext.Provider value={currentDate}>{children}</DateContext.Provider>
  )
}

export default DateProvider

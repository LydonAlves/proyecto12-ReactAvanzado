import { useContext } from 'react'
import { DateContext } from '../../context/DateContext'
import useMaxTemp from '../../custom/useMaxTemp'
import './Header.css'

const Header = () => {
  const temp = useMaxTemp()
  const date = useContext(DateContext)
  const newDate = new Date(date)
  const options = { day: '2-digit', month: 'long', year: 'numeric' }
  const formattedDate = newDate.toLocaleDateString('en-GB', options)

  return (
    <header className='mainHeader'>
      <p className='headerTemperture'>
        Today's max temp at Dikhololo: {temp}ºC{' '}
      </p>
      <p className='headerDate'> {formattedDate} </p>
    </header>
  )
}

export default Header

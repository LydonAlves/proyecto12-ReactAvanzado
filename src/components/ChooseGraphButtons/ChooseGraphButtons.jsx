import { NavLink } from 'react-router-dom'
import './ChooseGraphButtons.css'

const ChooseGraphButtons = () => {
  return (
    <nav className='graphNav'>
      <ul className='graphUl'>
        <li>
          <NavLink
            to='/home/temperatureAndHarvest'
            activeclassname='active'
            className='sideBarLink graphLink'
          >
            Daily temperature and harvest
          </NavLink>
        </li>
        <li>
          <NavLink
            to='home/dailyHarvest'
            activeclassname='active'
            className='sideBarLink graphLink'
          >
            Daily harvest
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/punnetsSold'
            activeclassname='active'
            className='sideBarLink graphLink'
          >
            Punnets sold
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/pulpSold'
            activeclassname='active'
            className='sideBarLink graphLink'
          >
            Pulp sold
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/home/income'
            activeclassname='active'
            className='sideBarLink  graphLink'
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/totalDeliveries'
            activeclassname='active'
            className='sideBarLink graphLink'
          >
            Total number of units delivered
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/deliveriesPunnets'
            activeclassname='active'
            className='sideBarLink graphLink'
          >
            Deliveries: punnets
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/deliveriesPulp'
            activeclassname='active'
            className='sideBarLink graphLink'
          >
            Deliveries: pulp
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default ChooseGraphButtons

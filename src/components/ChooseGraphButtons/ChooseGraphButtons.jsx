import { NavLink } from 'react-router-dom'
import './ChooseGraphButtons.css'

const ChooseGraphButtons = () => {
  const graphLinks = [
    {
      title: 'Daily temperature and harvest',
      path: '/home/temperatureAndHarvest',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    },
    {
      title: 'Daily harvest',
      path: 'home/dailyHarvest',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    },
    {
      title: 'Punnets sold',
      path: '/home/punnetsSold',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    },
    {
      title: 'Pulp sold',
      path: '/home/pulpSold',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    },
    {
      title: 'Income',
      path: '/home/income',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    },
    {
      title: 'Total number of units delivered',
      path: '/home/totalDeliveries',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    },
    {
      title: 'Deliveries: punnets',
      path: '/home/deliveriesPunnets',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    },
    {
      title: 'Deliveries: pulp',
      path: '/home/deliveriesPulp',
      className: 'sideBarLink graphLink',
      activeClassName: 'active'
    }
  ];

  return (
    <nav className='graphNav'>
      <ul className='graphUl'>
        {graphLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              activeclassname={link.activeClassName}
              className={link.className}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ChooseGraphButtons

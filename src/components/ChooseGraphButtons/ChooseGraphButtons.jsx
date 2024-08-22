import { NavLink } from 'react-router-dom'
import './ChooseGraphButtons.css'
import { graphLinks } from '../../utils/graphLinks'

const ChooseGraphButtons = () => {

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

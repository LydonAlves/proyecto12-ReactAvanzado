import { NavLink } from 'react-router-dom'
import './NavigationSidebar.css'
import ChooseGraphButtons from '../ChooseGraphButtons/ChooseGraphButtons'
import useToggle from '../../custom/useToggle'

const NavigationSidebar = () => {
  const { open, openElement, closeElement } = useToggle()

  const handleDropdownClick = (e) => {
    e.stopPropagation()
  }

  const navLinks = [
    {
      title: 'Home',
      path: '/home',
      className: 'sideBarLink',
      activeClassName: 'active',
      additionalContent: open ? (
        <div onClick={handleDropdownClick}>
          <ChooseGraphButtons />
        </div>
      ) : null
    },
    {
      title: 'Daily Harvest',
      path: '/daily-harvest',
      className: 'sideBarLink',
      activeClassName: 'active'
    },
    {
      title: 'Market Deliveries',
      path: '/market-deliveries',
      className: 'sideBarLink',
      activeClassName: 'active'
    },
    {
      title: 'Sales',
      path: '/sales',
      className: 'sideBarLink',
      activeClassName: 'active'
    }
  ];


  return (
    <>
      <div
        className={`menuDiv ${open ? 'openClass' : ''}`}
        onClick={open ? closeElement : openElement}
      >
        <img src='/assets/menu.png' alt='menu' className='menuIcon' />
      </div>
      {open && (
        <nav className='sideBar '>
          <div className='profileDiv'>
            <div className='profileImgDiv'>
              <img
                src='/assets/profilePhoto.webp'
                alt='userImage'
                className='profileImg'
              />
            </div>
            <p className='profileUserName'>Hello Fatima</p>
          </div>

          <ul>
            {navLinks.map((link, index) => (
              <li className='sideBarTitle' key={index}>
                <NavLink
                  to={link.path}
                  activeclassname={link.activeClassName}
                  className={link.className}
                >
                  {link.title}
                </NavLink>
                {link.additionalContent}
              </li>
            ))}
          </ul>

        </nav>
      )}
    </>
  )
}

export default NavigationSidebar

import { NavLink } from 'react-router-dom'
import './NavigationSidebar.css'
import ChooseGraphButtons from '../ChooseGraphButtons/ChooseGraphButtons'
import useToggle from '../../custom/useToggle'
import { useState } from 'react'

const NavigationSidebar = () => {
  const { open, openElement, closeElement } = useToggle()

  const handleDropdownClick = (e) => {
    console.log('working')
    e.stopPropagation()
  }

  const toggleDropdown = (e) => {
    e.stopPropagation()
    open ? closeElement() : openElement()
  }

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
          <ul className='sideBarUl'>
            <li className='sideBarTitle'>
              <div className='homeLi'>
                <NavLink
                  to='/home'
                  activeclassname='active'
                  className='sideBarLink'
                >
                  Home
                </NavLink>
              </div>
              {open && (
                <div onClick={handleDropdownClick}>
                  <ChooseGraphButtons />
                </div>
              )}
            </li>

            <li className='sideBarTitle '>
              <NavLink
                to='/daily-harvest'
                activeclassname='active'
                className='sideBarLink'
              >
                Daily Harvest
              </NavLink>
            </li>
            <li className='sideBarTitle'>
              <NavLink
                to='/market-deliveries'
                activeclassname='active'
                className='sideBarLink'
              >
                Market Deliveries
              </NavLink>
            </li>
            <li className='sideBarTitle'>
              <NavLink
                to='/sales'
                activeclassname='active'
                className='sideBarLink'
              >
                Sales
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default NavigationSidebar

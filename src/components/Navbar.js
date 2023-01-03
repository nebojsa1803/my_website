import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false)

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger)
  }

  return (
    <nav>
      <div className='logo'></div>

      <div className={`nav-links ${showHamburger && 'clicked'}`}>
        <div className={`nav-hamburger`} onClick={toggleHamburger}>
          <div className='line line-1'></div>
          <div className='line line-2'></div>
          <div className='line line-3'></div>
        </div>
        <NavLink
          to='/'
          className={({ isActive }) => {
            if (isActive) {
              return `link-active ${showHamburger && 'fade'} `
            } else {
              return `link ${showHamburger && 'fade'}`
            }
          }}
          onClick={() => setShowHamburger(false)}
        >
          Home
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) => {
            if (isActive) {
              return `link-active ${showHamburger && 'fade'} `
            } else {
              return `link ${showHamburger && 'fade'}`
            }
          }}
          onClick={() => setShowHamburger(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => {
            if (isActive) {
              return `link-active ${showHamburger && 'fade'} `
            } else {
              return `link ${showHamburger && 'fade'}`
            }
          }}
          onClick={() => setShowHamburger(false)}
        >
          Contact
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => {
            if (isActive) {
              return `link-active ${showHamburger && 'fade'} `
            } else {
              return `link ${showHamburger && 'fade'}`
            }
          }}
          onClick={() => setShowHamburger(false)}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar

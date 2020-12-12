import React from 'react'
import './Navbar.css'

const NavigationBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav' id='navUl'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#services'>
                Dental Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#reviews'>
                Reviews
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#blogs'>
                Blogs
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#contact'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar

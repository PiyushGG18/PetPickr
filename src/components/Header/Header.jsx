import React from 'react'
import "./Header.css"
import Logo from "../assets/Logo.png"

function Header() {
  return (
      <div className="header">
          <img src={Logo} alt="logo" className='logo' />
          <ul className='header-menu'>
            <li>Home</li>
            <li>Categories</li>
            <li>Why Us?</li>
            <li>Plans</li>
            <li>Testimonials</li>
          </ul>
    </div>
  )
}

export default Header
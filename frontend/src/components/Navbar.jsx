import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=''/>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contact us</li>

      </ul>
      
    </div>
  )
}

export default Navbar


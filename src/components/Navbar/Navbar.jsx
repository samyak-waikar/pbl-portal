import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Project Based Learning</div>
      <ul className="nav-menu">
        <li className="nav-btn"><Link to="/login" className="link">Login</Link></li>
        <li className="nav-btn"><Link to="/login" className="link">Sign Up</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

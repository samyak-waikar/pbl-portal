import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Container'>
      <div className="logo">
        <h1>PBL</h1>
      </div>
       <div className="about">
        <h2>About Us</h2>
        <div className='about-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id placeat culpa nihil, cumque maxime veritatis odit possimus dolores. Harum velit maxime nesciunt ipsum nostrum unde quae quaerat doloremque. Mollitia quo saepe eum?</div>    
        
       </div>
       <div className="mission">
        <h2>Mission</h2>
        <div className='mission-text'>Our mission is clear: to inspire and empower individuals through innovative and engaging Project-Based Learning experiences. We strive to redefine education by fostering a community that values creativity, critical thinking, and real-world application.</div>
       </div>
    </div>
  )
}

export default Footer

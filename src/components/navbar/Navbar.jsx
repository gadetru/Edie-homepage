import React, { useState } from 'react'
import './nav.scss'

export const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-box'>
      <h2 className='title'>Edie</h2>

      <div className='links-boton'>
        <ul className={`links navbar ${isOpen ? 'active' : ''}`}>
          <li class="nav-item"><a  href='https://www.google.com/?hl=es'>Home</a></li>
          <li class="nav-item"><a href="https://remarkable-choux-fabfb7.netlify.app/">services</a></li>
          <li class="nav-item"><a href="https://regal-rolypoly-eef4e7.netlify.app/">Our Works</a></li>
          <li class="nav-item"><a href="https://my-cantabria-gallery.netlify.app/">Clients</a></li>
          <li class="nav-item"><a href="https://noloencuentro.netlify.app/">Contact</a></li>
        </ul>

        <div onClick={toggleMenu} 
        class={`icon nav-icon-5 ${isOpen ? 'open ' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className={`initial ${isOpen ? 'active ' : ''}`}></div>

      </div>



    </div>

    



  )
}

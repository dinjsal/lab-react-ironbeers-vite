import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className='navbar'>
    <NavLink to="/"> 
       <img className="home-icon"
       src='src/assets/home-icon.png'
       alt='home-icon'
       />
    </NavLink>
    </div>
  )
}

export default Navbar
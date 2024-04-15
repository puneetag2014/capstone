import { FaHome } from "react-icons/fa";
import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';
import logo from './images/Logo.svg'; 

function Nav(){
return(
   <header className="navbar">
      <NavLink to="/" >
      <img src={logo} alt="Logo" />
          </NavLink>

      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" >
          { FaHome }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/About" >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Booking" >
            Reservations
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Order Online" >
            Order Online
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Login" >
            Login
          </NavLink>
        </li>
      </ul>
  </header>
  );
}
export default Nav;
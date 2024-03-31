import { FaHome } from "react-icons/fa";
import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';
import logo from './Logo.svg'; 

function Nav(){
return(

   <header className="navbar">
  <img src={logo} alt="Logo" />;
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
          <NavLink to="/Reservations" >
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
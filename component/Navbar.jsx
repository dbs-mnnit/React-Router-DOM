import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <ul>
        <li><NavLink to="/page1">Page 1</NavLink></li>
        <li><NavLink to="/page2">Page 2</NavLink></li>
        <li><NavLink to="/page3">Page 3</NavLink></li>
        <li><NavLink to="/page4">Page 4</NavLink></li>
    </ul>
    </>
  )
}

export default Navbar

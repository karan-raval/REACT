import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to={'/'}>Counter1</Link></li>
            <li><Link to={'/counter2'}>Counter2</Link></li>
            <li><Link to={'/counter3'}>Counter3</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
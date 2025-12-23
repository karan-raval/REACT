import React, { useState } from "react";
import logo from "../assets/image/Logo.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="UrbanRoute Travels" />
          <span>UrbanRoute Travels</span>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="book-btn">
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

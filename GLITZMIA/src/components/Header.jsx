import React, { useState } from "react";
import "../assets/css/Header.css";
import logo from "../assets/images/Logo.png"; // Replace with your image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Glitzmia Logo" />
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#single">Single Product</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#blog">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

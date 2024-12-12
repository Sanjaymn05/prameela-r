import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`navbar-brand ${isOpen ? 'hidden' : ''}`}>
          {/* You can add your logo here */}
        </div>
        <div className="navbar-toggle" onClick={toggleDropdown}>
          {isOpen ? '▲' : '☰'}
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/course-materials" className="nav-link">Course Materials</a>
          <a href="/contact-me" className="nav-link">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

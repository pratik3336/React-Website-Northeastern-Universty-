// NavBar.jsx
import React, { useState } from 'react';
import './navbar.css';

function NavBar({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('main')}>Events</button>
        <button onClick={() => setCurrentPage('subscribe')}>Subscribe</button>
        <button onClick={() => setCurrentPage('campus')}>Our Campuses</button>
        <button onClick={() => setCurrentPage('gallery')}>Gallery</button>
        <button onClick={() => setCurrentPage('StudentLife')}>Student Life</button>
        <button onClick={() => setCurrentPage('Reviews')}>Reviews</button>


      </div>
    </nav>
  );
}

export default NavBar;

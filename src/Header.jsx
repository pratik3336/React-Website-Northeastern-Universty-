import React from 'react';
import './header.css';

function Header({ pageTitle = 'Northeastern University' }) {
  return (
    <header className="header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <a href="/" aria-label="Home"> 
        <img 
          src="https://images.unsplash.com/photo-1578069862702-3f345d2cdf11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlYXN0ZXJuJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your university logo URL
          alt="University Logo" 
          className="header-logo"
        />
      </a>
      <h1>{pageTitle}</h1>
      <div id="main-content">
        {"Where Dreams Are Built!!!"}
      </div>
    </header>
  );
}

export default Header;
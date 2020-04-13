import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    color: '#272b4b',
    fontWeight: 'bolder',
  };

  return (
    <nav className="small-screen">
      <p>
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </p>
      <p>
        <Link style={linkStyle} to="/projectlist">
          Portfolio
        </Link>
      </p>
      <p>
        <Link style={linkStyle} to="/contact">
          Contact
        </Link>
      </p>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div id="company-name" className="col s12 m12 l12">
            <Link to="/">
              <h1>George Travis</h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

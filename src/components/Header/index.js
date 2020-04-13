import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header>
      <div className="container small-screen">
        <div className="row">
          <div id="company-name" className="col s12 m12 l12">
            <Link to="/">
              <h1>George Travis</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="large-screen">
        <div id="code-wrapper">
          <p className="code">{`(`}</p>
          <Link to="/">
            <div className="code-p-div">
              <p className="code-p">George</p>
              <p className="code-p">Travis</p>
            </div>
          </Link>
          <p className="code">{`)`}</p>
          <p className="code">{`=>`}</p>
          <p className="code">{`{`}</p>
          <div id="function">
            <Link to="/about">
              <p className="function-block">About Me</p>
            </Link>
            <Link to="projectlist">
              <p className="function-block">My Portfolio</p>
            </Link>
            <Link to="contact">
              <p className="function-block">Contact Me</p>
            </Link>
          </div>
          <p className="code">{`}`}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;